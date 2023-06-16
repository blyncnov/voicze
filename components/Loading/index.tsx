import React, { useEffect, useState } from "react";
import Image from "next/image";

// Loading style
import style from "./loading.module.scss";

// Voicze Loading Logo
import MyLoadingStateLogo from "@/public/logo/voice_white_gif.gif";
import { useRouter } from "next/router";

const Loading = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const handleStart = (url: string) => {
      url !== router.asPath && setLoading(true);
    };

    const handleComplete = (url: string) => {
      url === router.asPath &&
        setTimeout(() => {
          setLoading(false);
        }, 500);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router.asPath, router.events, loading]);

  return (
    <>
      {false && (
        <>
          <div id={style.loading}>
            <Image
              src={MyLoadingStateLogo}
              alt={`loading state`}
              priority={true}
            />
          </div>
        </>
      )}
    </>
  );
};

export default Loading;
