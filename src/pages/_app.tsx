import { AppProps } from "next/app";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast"
import { ThemeProvider } from "next-theme";

import "../styles/global.css"

import { queryClient } from "../services/queryClient";
import { AuthProvider } from "../contexts/AuthContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider attribute={"class"}>
          <Component {...pageProps} />
          <Toaster />
        </ThemeProvider>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </AuthProvider>
  );
}
