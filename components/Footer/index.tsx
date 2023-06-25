import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// Voicze Logo
import MyLogo from "@/public/logo/voicze_logo.svg";

// Footer Style
import style from "./footer.module.scss";

// Naviagtion Data
import { PlatformName } from "../../data/Naviagtion";

// Utilities
import { getLocaltimeAndDate } from "@/utils/getTimeDate";
import LabelTag from "../Label";
import voicze_config from "@/axios.config";
import { FailedToast, SuceedToast } from "@/utils/useToasts";

const Footer = () => {
  const [loadBtn, setloadBtn] = useState(false);
  const { getFullYear } = getLocaltimeAndDate();

  // Join Waitlist Function
  const onJoinNewsLetterHandler = (e: any) => {
    e.preventDefault();

    // Change loading btn
    setloadBtn(true);

    // Email from body
    const email = e.target.email.value;

    voicze_config
      .post("newsletter", { email })
      .then((res) => {
        console.log(res);

        if (res.data.status == 409) {
          setloadBtn(false);
          // Sucess Toast Alert
          FailedToast({
            feedback: "An Error Just Occur",
          });
          return;
        }

        // Sucess Toast Alert
        SuceedToast({
          feedback: "You have successfully Joined Our Newsletter",
        });

        // Clear Value
        e.target.email.value = "";
      })
      .catch((err) => {
        console.log(err);
        setloadBtn(false);
        // Sucess Toast Alert
        FailedToast({
          feedback: "An Error Just Occur",
        });
      });
  };

  return (
    <div className={style.footer_layout_container}>
      <div id="container">
        <div className={style.footer_container}>
          <div className={style.nill}>
            <br />
            <br />
            <div className={style.footer_grid_layout}>
              <div className={style.footer_grid_column}>
                <div className={style.logo}>
                  <Link href="/">
                    <Image src={MyLogo} alt={PlatformName} priority={true} />
                  </Link>
                </div>
                <p>
                  Voicze is here to streamline your invoicing process and boost
                  your marketing efforts and ensures the highest level of
                  security for transactions, giving you and your clients peace
                  of mind.
                </p>
                <br />
                <div className={style.footer_grid_column}>
                  <h2>Contact Information</h2>
                  <div className={style.column_flex_details}>
                    <p>Phone: +234 (814) 9055 068</p>
                  </div>
                  <div className={style.column_flex_details}>
                    <p>Email: getvoicze@gmail.com</p>
                  </div>
                  <div className={style.column_flex_details}>
                    <div className={style.social_link_grid}>
                      <a href="https://twitter.com/jeremytechie">Twitter</a> |{" "}
                      <a href="https://www.instagram.com/jeremytechie/">
                        Instagram
                      </a>{" "}
                      |{" "}
                      <a href="https://web.facebook.com/taiwo.jeremiah.5">
                        Facebook
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className={style.footer_grid_column}>
                <h2>
                  Products <LabelTag tag="Coming Soon" />
                </h2>
                <div className={style.column_flex_details}>
                  <Link href="/">
                    <p>iDesign</p>
                  </Link>
                </div>
                <div className={style.column_flex_details}>
                  <Link href="/">
                    <p>Collaboration</p>
                  </Link>
                </div>
                <div className={style.column_flex_details}>
                  <Link href="/">
                    <p>Quick Survey</p>
                  </Link>
                </div>
                <div className={style.column_flex_details}>
                  <Link href="/">
                    <p>Business Cards</p>
                  </Link>
                </div>
                <div className={style.column_flex_details}>
                  <Link href="/">
                    <p>Invoice Generator</p>
                  </Link>
                </div>
              </div>

              <div className={style.footer_grid_column}>
                <h2>Newsletter</h2>
                <p>
                  Still wanna hear from us, register to receive updates about
                  new development and services
                </p>
                <br />

                <form
                  className={style.newsletter_form}
                  onSubmit={onJoinNewsLetterHandler}
                >
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email address..."
                    required
                  />
                  <button type="submit">
                    {" "}
                    {loadBtn ? "Joining..." : "Subscribe"}{" "}
                  </button>
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
    </div>
  );
};

export default Footer;
