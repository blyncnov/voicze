import React, { useState, useEffect } from "react";
import AOS from "aos";

// React Icon
import {
  BsAppIndicator,
  BsArchive,
  BsCalendar4Event,
  BsLightbulb,
} from "react-icons/bs";

// Feature Style
import style from "./feature.module.scss";

const brand_icon = {
  fontSize: "30px",
  color: "#4AC3C6",
};

const Feature = () => {
  //AOS ANIMATION
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className={style.feature_section} id="features">
      <div id="container">
        <div className={style.feature_container}>
          <div className={style.feature_title_grid_container}>
            <div>
              <h1>Here&apos;s how Voicze can benefit your business!</h1>
            </div>
            <div>
              <p>
                The ultimate platform for business professionals to effortlessly
                create invoices and effectively promote their advertisements.
                Voicze is here to streamline your invoicing process and boost
                your marketing efforts.
              </p>
            </div>
          </div>
          <br />
          <br />
          <div className={style.our_features_vision_container}>
            <div className={style.our_features_vision_grid}>
              <div
                className={style.feature_content}
                data-aos="zoom-in"
                data-aos-duration="500"
              >
                <div className={style.feature_icon}>
                  <BsAppIndicator style={brand_icon} />
                </div>
                <div className={style.feature_desc}>
                  <h4>Secure and Convenient Payment.</h4>
                  <li>
                    You can effortlessly collect payments directly through the
                    invoices. Voicze ensures the highest level of security for
                    transactions, giving you and your clients peace of mind.
                  </li>
                </div>
              </div>
              <div
                className={style.feature_content}
                data-aos="zoom-in"
                data-aos-duration="500"
              >
                <div className={style.feature_icon}>
                  <BsArchive style={brand_icon} />
                </div>
                <div className={style.feature_desc}>
                  <h4>Effective Advertisement Promotion.</h4>
                  <li>
                    Our platform provides targeted marketing features that allow
                    you to create compelling ads, select your desired
                    demographics, and track the performance of your campaigns.
                  </li>
                </div>
              </div>

              <div
                className={style.feature_content}
                data-aos="zoom-in"
                data-aos-duration="500"
              >
                <div className={style.feature_icon}>
                  <BsCalendar4Event style={brand_icon} />
                </div>
                <div className={style.feature_desc}>
                  <h4>Analytics and Insights.</h4>
                  <li>
                    Track your invoice performance, monitor advertising campaign
                    metrics, and gain valuable insights into your revenue
                    streams with this information at your fingertips to optimize
                    your overall business strategy.
                  </li>
                </div>
              </div>

              <div
                className={style.feature_content}
                data-aos="zoom-in"
                data-aos-duration="500"
              >
                <div className={style.feature_icon}>
                  <BsLightbulb style={brand_icon} />
                </div>
                <div className={style.feature_desc}>
                  <h4>Effective Leads Generator.</h4>
                  <li>
                    Generate leads, monitor advertising campaign metrics, and
                    gain valuable insights into your revenue streams with this
                    information at your fingertips to optimize your overall
                    business strategy.
                  </li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
