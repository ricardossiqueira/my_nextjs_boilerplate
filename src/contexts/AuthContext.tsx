import { AxiosResponse } from "axios";
import { createContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { setCookie, parseCookies, destroyCookie } from "nookies";

import { api } from "../services/api";
import { localStorageKeys, nookiesKeys } from "../constants/storageKeys";
import { ILoginResponseDTO, IUser } from "../hooks/Auth/dtos/ILoginDTO";

type AuthContextDataType = {
  signIn(data: ILoginResponseDTO, rememberMe: boolean): void;
  isAuthenticated: boolean;
  user: IUser | null;
  logout(): void;
};

type AuthProviderPropsType = {
  children: React.ReactNode;
};

const AuthContext = createContext({} as AuthContextDataType);

export function AuthProvider({ children }: AuthProviderPropsType) {
  const [user, setUser] = useState<IUser>();
  const isAuthenticated = !!user;
  const router = useRouter();

  // fetch updated info on sign in
  useEffect(() => {
    const { [nookiesKeys.token]: token } = parseCookies();

    if (token) {
      api.get("/auth/v1/user").then((res: AxiosResponse<IUser>) => {
        setUser(res.data);
        router.push("/");
      });
    } else {
      // unauthorized, logout
      destroyCookie(undefined, nookiesKeys.token);
      destroyCookie(undefined, nookiesKeys.refreshToken);

      router.push("/user/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function signIn(
    {
      access_token: token,
      refresh_token: refreshToken,
      user,
    }: ILoginResponseDTO,
    rememberMe: boolean
  ) {
    // save refresh token to cookies
    setCookie(undefined, nookiesKeys.token, token, {
      // can be any value > than the set by the server
      maxAge: 60 * 60 * 24 * 30, // 30 days
      // make it available in all pages
      path: "/",
    });
    setCookie(undefined, nookiesKeys.refreshToken, refreshToken, {
      maxAge: 60 * 60 * 24 * 30, // 30 days
      path: "/",
    });

    // if remember me is true save refresh token to local storage
    rememberMe &&
      localStorage.setItem(localStorageKeys.refreshToken, refreshToken);

    // set user info to state provider
    setUser(user);

    // re-set axios token, so it can be used in other requests
    api.defaults.headers["Authorization"] = `Bearer ${token}`;
  }

  function logout() {
    destroyCookie(undefined, nookiesKeys.token);
    destroyCookie(undefined, nookiesKeys.refreshToken);

    setUser(null);

    router.push("/user/login");
  }

  return (
    <AuthContext.Provider value={{ signIn, isAuthenticated, user, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext };
