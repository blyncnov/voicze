import React from "react";
import Link from "next/link";

// Footer Style
import style from "./footer.module.scss";

// React Icons
import { TbFileInvoice } from "react-icons/tb";

// Naviagtion Data
import { PlatformName } from "../../data/Naviagtion";

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
                    <TbFileInvoice />
                    {PlatformName}
                  </Link>
                </div>
                <p>
                  Voicze is here to streamline your invoicing process and boost
                  your marketing efforts.
                </p>
                <br />
                <div className={style.footer_grid_column}>
                  <h2>Contact Information</h2>
                  <div className={style.column_flex_details}>
                    <p>5, Agbede, Olaitan/Sallyman Hostel</p>
                  </div>
                  <div className={style.column_flex_details}>
                    <p>+234 (814) 9055 068</p>
                  </div>
                  <div className={style.column_flex_details}>
                    <p>
                      <a href="https://twitter.com/jeremytechie">Twitter</a> |{" "}
                      <a href="https://twitter.com/jeremytechie">Instagram</a> |{" "}
                      <a href="https://twitter.com/jeremytechie">Facebook</a>
                    </p>
                  </div>
                  <div className={style.column_flex_details}>
                    <p>customercare@voicze.io</p>
                  </div>
                </div>
              </div>

              <div className={style.footer_grid_column}>
                <h2>Products</h2>
                <div className={style.column_flex_details}>
                  <p>What&apos;s New</p>
                </div>
                <div className={style.column_flex_details}>
                  <p>
                    Design <span id="coming_soon">coming soon</span>{" "}
                  </p>
                </div>
                <div className={style.column_flex_details}>
                  <p>Pricing</p>
                </div>
                <div className={style.column_flex_details}>
                  <p>Extensions</p>
                </div>
                <div className={style.column_flex_details}>
                  <p>
                    Gateways <span id="coming_soon">coming soon</span>{" "}
                  </p>
                </div>
                <div className={style.column_flex_details}>
                  <p>
                    Collaboration <span id="coming_soon">coming soon</span>{" "}
                  </p>
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
                    placeholder="Enter your email..."
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
          <br />
          <p>
            Built with ❤️ by{" "}
            <a href="https://twitter.com/jeremytechie">Blyncnov</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
