import React from "react";
import Link from "next/link";

// Footer Style
import style from "./footer.module.scss";

// React Icons
import { HiViewfinderCircle } from "react-icons/hi2";

// Naviagtion Data
import { NavBarData, LogoName } from "../../data/Naviagtion";

// Utilities
import { getLocaltimeAndDate } from "@/utils/getTimeDate";

const Footer = () => {
  const { getFullYear } = getLocaltimeAndDate();

  return (
    <footer className={style.footer_layout_container}>
      <div id="container">
        <div className={style.footer_container}>
          <div className={style.footer_layout_container}>
            <div className={style.footer_grid_layout}>
              <div className={style.footer_grid_column}>
                <div className={style.logo}>
                  <Link href="/">
                    <HiViewfinderCircle />
                    Locare
                  </Link>
                </div>
                <p>
                  Locare is a company that specializes in organizing private and
                  secure events and parties for individuals.
                </p>
                <br />
                <div className={style.footer_grid_column}>
                  <address>Contact Info</address>
                  <div className={style.column_flex_details}>
                    <p>5, Agbede, Olaitan/Sallyman Hostel</p>
                  </div>
                  <div className={style.column_flex_details}>
                    <p>+234 (814) 9055 068</p>
                  </div>
                  <div className={style.column_flex_details}>
                    <p>customercare@locare.io</p>
                  </div>
                </div>
              </div>

              <div className={style.footer_grid_column}>
                <h2>Newsletter</h2>
                <p>
                  Still wanna hear from us, register to receive updates about
                  new development and services
                </p>
                <br />

                <form className={style.newsletter_form}>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Locare Weekly Newsletter"
                    required
                  />
                  <button type="submit">Subscribe </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="line"></div>
        <div className={style.copy_right}>
          <p>
            Copyright &copy; {getFullYear().toString()} || All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
