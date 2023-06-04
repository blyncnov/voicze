import React from "react";

// React Icon
import { BsDot } from "react-icons/bs";

// My Card Style
import style from "./analytics.module.scss";

const style_icon = {
  width: "auto",
};

const Analytics = ({ waitlistCount }: any) => {
  return (
    <div>
      <div className={style.analytics_container}>
        <div className={style.analytics_identites}>
          <h1> {waitlistCount}+</h1> <BsDot style={style_icon} />
          <p>Waitlist</p>
        </div>
        <div className={style.analytics_identites}>
          <h1>10+</h1>
          <BsDot style={style_icon} />
          <p> Profile</p>
        </div>
        <div className={style.analytics_identites}>
          <h1>80+</h1>
          <p>
            <BsDot style={style_icon} />
            Invoices
          </p>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
