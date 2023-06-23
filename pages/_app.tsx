import { useEffect, type ReactElement, type ReactNode } from "react";
import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from "next/app";
import type { NextPage } from "next";
import { useRouter } from "next/router";

// React Toast library
import { ToastContainer, toast } from "react-toastify";

// CSS STYLES
import "@/styles/globals.css";
import "@/styles/base.scss";
import "@/styles/layout.scss";

// TOASTS
import "react-toastify/dist/ReactToastify.css";

// SCSS Dashboard Layouts
import "@/styles/dashboard/index.scss";

// SCSS Animation
import "@/styles/animation.scss";

// Authentication STYLES
import "@/styles/auth/auth.scss";

// Redux
import { Provider } from "react-redux";
import store from "../redux/store";

// Bright-Technologies Dashboard Layout
import DashboardLayout from "@/layout/dashboard";
import Loading from "@/components/Loading";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const router = useRouter();

  // If User Visit "/dashboard/**/**" and is not logged in, redirect to login page
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (router.pathname.includes("/auth")) {
        if (localStorage.getItem("token")) {
          router.push("/dashboard");
        }
      }
    }
  });

  // If User is already logged in, redirect to dashboard page
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (router.pathname.includes("/dashboard")) {
        if (!localStorage.getItem("token")) {
          router.push("/auth/login");
        }
      }
    }
  });

  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page: any) => page);

  if (Component.getLayout) {
    return (
      <>
        <Provider store={store}>
          <ToastContainer />
          {/* Loading State Component */}
          <Loading />
          <DashboardLayout>
            <Component {...pageProps} />
          </DashboardLayout>
          <Analytics />
        </Provider>
      </>
    );
  }

  return (
    <>
      <ToastContainer />
      {/* Loading State Component */}
      <Loading />
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
      <Analytics />
    </>
  );
}
