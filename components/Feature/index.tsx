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
    <div className={style.feature_section} id="features">
      <div id="container">
        <div className={style.feature_container}>
          <div>
            <h1>Here&apos;s how Voicze can benefit your business!</h1>
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
                  You can effortlessly collect payments directly through the
                  invoices. Voicze ensures the highest level of security for
                  transactions, giving you and your clients peace of mind.
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
                  Our platform provides targeted marketing features that allow
                  you to showcase your products or services to the right
                  audience. With Voicze, you can create compelling ads, select
                  your desired demographics, and track the performance of your
                  campaigns.
                </li>
              </div>
            </div>
            <div className={style.box}>
              <div className={style.feature_top_container}>
                <BiAward style={brand_icon} />
              </div>
              <div className={style.feature_content}>
                <h4>Analytics and Insights.</h4>
                <li>
                  Track your invoice performance, monitor advertising campaign
                  metrics, and gain valuable insights into your revenue streams.
                  With this information at your fingertips, you can identify
                  trends, identify areas for improvement, and optimize your
                  overall business strategy.
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
