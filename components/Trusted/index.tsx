import React from "react";

// React Icon
import {
  FcVlc,
  FcStart,
  FcRadarPlot,
  FcDribbble,
  FcCloseUpMode,
  FcAddDatabase,
} from "react-icons/fc";

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
          <div>
            <h1>
              Join <b>40,000+</b> entrepreneur who use our invoice generator{" "}
            </h1>
          </div>
          <div className={style.brands_identites}>
            <div className={style.brand}>
              <FcVlc style={brand_icon} />
            </div>
            <div className={style.brand}>
              <FcStart style={brand_icon} />
            </div>
            <div className={style.brand}>
              <FcRadarPlot style={brand_icon} />
            </div>
            <div className={style.brand}>
              <FcDribbble style={brand_icon} />
            </div>
            <div className={style.brand}>
              <FcCloseUpMode style={brand_icon} />
            </div>
            <div className={style.brand}>
              <FcAddDatabase style={brand_icon} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Brands;
