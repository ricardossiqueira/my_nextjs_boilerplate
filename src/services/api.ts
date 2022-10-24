import axios, { AxiosError, AxiosResponse } from "axios";
import { parseCookies, setCookie } from "nookies";

import { localStorageKeys, nookiesKeys } from "../constants/storageKeys";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { IRefreshTokenResponse } from "../hooks/Auth/dtos/ILoginDTO";

let cookies = parseCookies();
let isRefreshing = false;
let failedRequestsQueue = [];

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    Authorization: `Bearer ${cookies[nookiesKeys.token]}`,
    apikey: process.env.NEXT_PUBLIC_API_KEY,
  },
});

// supabase api errors are not patternized; refactor when backend is implemented
api.interceptors.response.use(
  (response) => response,
  (error: AxiosError<{ code: number; msg: string }>) => {
    if (error.response.status === 401) {
      if (error.response.data.msg.split(" ")[0].concat() === "Invalid") {
        cookies = parseCookies();

        let refreshToken = cookies[nookiesKeys.refreshToken];

        if (!refreshToken || refreshToken === "undefined") {
          refreshToken = localStorage.getItem(localStorageKeys.refreshToken);
        }

        console.log("refreshToken", refreshToken);

        const originalConfig = error.config;

        if (!isRefreshing) {
          isRefreshing = true;

          api
            .post("/auth/v1/token?grant_type=refresh_token", {
              refresh_token: refreshToken,
            })
            .then((response: AxiosResponse<IRefreshTokenResponse>) => {
              const { token: newToken, refreshToken: newRefreshToken } =
                response.data;

              // save refresh token to cookies
              setCookie(undefined, nookiesKeys.token, newToken, {
                // can be any value > than the set by the server
                maxAge: 60 * 60 * 24 * 30, // 30 days
                // make it available in all pages
                path: "/",
              });

              setCookie(undefined, nookiesKeys.refreshToken, newRefreshToken, {
                maxAge: 60 * 60 * 24 * 30, // 30 days
                path: "/",
              });

              // re-set axios token, so it can be used in other requests
              api.defaults.headers["Authorization"] = `Bearer ${newToken}`;

              // retry all failed requests
              failedRequestsQueue.forEach((request) => {
                request.onSuccess(newToken);
                failedRequestsQueue = [];
              });
            })
            // if requests still fail pass error to next error handler
            .catch((err) => {
              failedRequestsQueue.forEach((request) => {
                request.onFailure(err);
                failedRequestsQueue = [];
              });
            })
            // reset isRefreshing flag
            .finally(() => {
              isRefreshing = false;
            });
        }

        // create a queue of requests that failed due to expired token
        return new Promise((resolve, reject) => {
          failedRequestsQueue.push({
            onSuccess: (token: string) => {
              originalConfig.headers["Authorization"] = `Bearer ${token}`;
              resolve(api(originalConfig));
            },
            onFailure: reject,
          });
        });
      } else {
        const { logout } = useContext(AuthContext);
        logout();
      }
    }
    // pass error to next error handler
    return Promise.reject(error);
  }
);

export { api };
