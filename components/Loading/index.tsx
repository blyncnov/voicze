import React from "react";
import Image from "next/image";

// Loading style
import style from "./loading.module.scss";

// Voicze Loading Logo
import MyLoadingStateLogo from "@/public/logo/voice_white_gif.gif";

const Loading = () => {
  return (
    <div id={style.loading}>
      <Image src={MyLoadingStateLogo} alt={`loading state`} priority={true} />
    </div>
  );
};

export default Loading;
