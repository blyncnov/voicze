import React from "react";

// React Icon
// import {
//   FcVlc,
//   FcStart,
//   FcRadarPlot,
//   FcDribbble,
//   FcCloseUpMode,
//   FcAddDatabase,
// } from "react-icons/fc";

import { MdQuestionMark } from "react-icons/md";

// My Card Style
import style from "./brands.module.scss";

const brand_icon = {
  fontSize: "60px",
};

const Brands = () => {
  return (
    <>
      <div id="container">
        <div className={style.brands_container}>
          <h1>Trusted by 7+ customers</h1>
          <div className={style.brands_identites}>
            <div className={style.brand}>
              <MdQuestionMark style={brand_icon} />
            </div>
            <div className={style.brand}>
              <MdQuestionMark style={brand_icon} />
            </div>
            <div className={style.brand}>
              <MdQuestionMark style={brand_icon} />
            </div>
            <div className={style.brand}>
              <MdQuestionMark style={brand_icon} />
            </div>
            <div className={style.brand}>
              <MdQuestionMark style={brand_icon} />
            </div>
            <div className={style.brand}>
              <MdQuestionMark style={brand_icon} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Brands;
