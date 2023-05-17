import React from "react";

// React Icon
import { BiAlbum, BiAperture, BiAward } from "react-icons/bi";

// Feature Style
import style from "./feature.module.scss";

const brand_icon = {
  fontSize: "100px",
};

const Feature = () => {
  return (
    <div className={style.feature_section}>
      <div id="container">
        <div className={style.feature_container}>
          <div>
            <h1>Here&apos;s how Voicze can benfit your business!</h1>
            <li>
              Voicze is here to streamline your invoicing process and boost your
              marketing efforts.
            </li>
          </div>
          <div className={style.feature_identites}>
            <div className={style.box}>
              <div className={style.feature_top_container}>
                <BiAlbum style={brand_icon} />
              </div>
              <div className={style.feature_content}>
                <h4>Secure and Convenient Payment.</h4>
                <li>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure
                  consequatur voluptatem numquam aut a facilis deserunt incidunt
                  ea modi, officia dolorum tempora aspernatur, debitis nemo
                  cumque! Perferendis facilis nihil nisi.
                </li>
              </div>
            </div>
            <div className={style.box}>
              <div className={style.feature_top_container}>
                <BiAperture style={brand_icon} />
              </div>
              <div className={style.feature_content}>
                <h4>Effective Advertisement Promotion.</h4>
                <li>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure
                  consequatur voluptatem numquam aut a facilis deserunt incidunt
                  ea modi, officia dolorum tempora aspernatur, debitis nemo
                  cumque! Perferendis facilis nihil nisi.
                </li>
              </div>
            </div>
            <div className={style.box}>
              <div className={style.feature_top_container}>
                <BiAward style={brand_icon} />
              </div>
              <div className={style.feature_content}>
                <h4>Automated Payment Tracking.</h4>
                <li>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure
                  consequatur voluptatem numquam aut a facilis deserunt incidunt
                  ea modi, officia dolorum tempora aspernatur, debitis nemo
                  cumque! Perferendis facilis nihil nisi.
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
