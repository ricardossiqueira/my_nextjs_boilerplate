import axios, { AxiosResponse } from "axios";
import { useRouter } from "next/router";
import { parseCookies, setCookie, destroyCookie } from "nookies";
import { IRequestError } from "../interfaces/IRequestError";

import { nookiesKeys } from "../constants/storageKeys";
import { IRefreshTokenResponse } from "./dtos/IRefreshTokenDTO";

let cookies = parseCookies();
let isRefreshing = false;
let failedRequestsQueue = [];

const api = axios.create({
  baseURL: "http://localhost:3333",
  headers: {
    Authorization: `Bearer ${cookies[nookiesKeys.token]}`,
  },
});

api.interceptors.response.use(
  (response) => response,
  (error: IRequestError) => {
    if (error.response.status === 401) {
      if (error.response.data.message === "Token inválido") {
        cookies = parseCookies();
        const refreshToken = cookies[nookiesKeys.refreshToken];
        const originalConfig = error.config;

        if (!isRefreshing) {
          isRefreshing = true;

          api
            .post("/auth/refresh-token", {
              refreshToken,
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
        // unauthorized error and not token invalid error, logout
        destroyCookie(undefined, nookiesKeys.token);
        destroyCookie(undefined, nookiesKeys.refreshToken);

        const router = useRouter();
        router.push("/");
      }
    }
    // pass error to next error handler
    return Promise.reject(error);
  }
);

export { api };