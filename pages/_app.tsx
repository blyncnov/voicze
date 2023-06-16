import { useEffect, type ReactElement, type ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

// CSS STYLES
import "@/styles/globals.css";
import "@/styles/base.scss";
import "@/styles/layout.scss";

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
  useEffect(() => {
    const token = "fake";

    // Check If Token exists , Else Redirect Back to Home Page
    if (!token) {
      router.push("/");
    }
  });

  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page: any) => page);

  if (Component.getLayout) {
    return (
      <Provider store={store}>
        {/* Loading State Component */}
        <Loading />
        <DashboardLayout>
          <Component {...pageProps} />
        </DashboardLayout>
      </Provider>
    );
  }

  return (
    <>
      {/* Loading State Component */}
      <Loading />
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
