import React from "react";
import Image from "next/image";

// Voicze Illustration SVG
import SvgImage from "@/public/illustrations/illus3.svg";

// Support Style
import style from "./support.module.scss";

const Support = () => {
  return (
    <div id="support">
      <div id="container">
        <div className={style.support_section}>
          <div className={style.support_container}>
            <Image src={SvgImage} alt="hero_image_showcase" priority={true} />
            <form action="POST" className={style.support_form}>
              <div className={style.support_text_holder}>
                <h2>Make Your Enquiries!</h2>
                <p>
                  We would love to hear from you if you have any questions
                  concerning our platform.
                </p>
              </div>

              <div className={style.grouped_data}>
                <label htmlFor="full_name">Full Name</label>
                <input
                  type="text"
                  name="full_name"
                  className={style.input}
                  placeholder="Full name"
                />
              </div>
              <div className={style.grouped_data}>
                <label htmlFor="message">Your Enquiry</label>
                <textarea
                  name="message"
                  className={style.input}
                  lang="en"
                  placeholder="Enter your Message "
                />
              </div>
              <div className={style.support_button}>
                <button>Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
