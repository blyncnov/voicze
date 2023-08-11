import Head from "next/head";
import { useEffect, type ReactElement, type ReactNode } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";

// React Toast library
import { ToastContainer, toast } from "react-toastify";
import AOS from "aos";

// AOS
import "aos/dist/aos.css";

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

  // AOS ANIMATION
  //AOS ANIMATION
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  // If User is already logged in, redirect to dashboard page
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (router.pathname.includes("/dashboard")) {
        if (!localStorage.getItem("token")) {
          router.push("/auth/login");
        }
      }
    }

    return () => {};
  }, [router, router.pathname]);

  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page: any) => page);

  if (Component.getLayout) {
    return (
      <>
        <Provider store={store}>
          <ToastContainer />
          {/* Loading State Component */}
          <Loading />
          {/* Loading State Component Ends */}
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
      <MetaData />
      <ToastContainer />
      {/* Loading State Component */}
      <Loading />
      {/* Loading State Component Ends */}
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
      <Analytics />
    </>
  );
}

const MetaData = () => {
  return (
    <>
      <Head>
        <title>
          Voicze | Streamline Invoices And Amplify Your Brand With Voicze.
        </title>
        <meta
          property="og:title"
          content="  Voicze | Streamline Invoices And Amplify Your Brand With Voicze."
        />
        <meta
          property="og:description"
          content="Voicze | Streamline Invoices And Amplify Your Brand With Voicze."
        />
        <meta
          property="og:image"
          content="http://localhost:3001/_next/static/media/voicze_logo.c5a555b3.svg"
        />
        <meta property="og:url" content="https://getvoicze.vercel.app/" />
        <meta property="og:type" content="website" />

        {/* Other Meta Tags (if needed) */}
        <meta name="author" content="Voicze " />
        <meta
          name="keywords"
          content="invoice, Promote , marketing, Voicze, platform, invoicing, Secure, Advertisement, Payment, Leads, Insights, podcast"
        />

        <link rel="canonical" href="https://getvoicze.vercel.app/" />

        <script type="application/ld+json">
          {`
              {
                "@context": "http://schema.org",
                "@type": "invoice",
                "name": "Voicze ",
                "url": "https://getvoicze.vercel.app/",
                "logo": "http://localhost:3001/_next/static/media/voicze_logo.c5a555b3.svg"
              }
    `}
        </script>
      </Head>
    </>
  );
};
