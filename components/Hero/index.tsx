import React from "react";
import Image from "next/image";

// Image
import SvgImage from "@/public/mobile.png";

// Naviagtion Style
import style from "./Hero.module.scss";

const Hero = () => {
  return (
    <>
      <div id="container">
        <div className={style.hero_container}>
          <div className={style.hero_section_cto}>
            <div className={style.hero_text}>
              <div className={style.cto_text}>
                <h1>Streamline invoices and amplify your brand with Voicze.</h1>
              </div>
              <div className={style.cto_desc}>
                <p>
                  The ultimate platform for business professionals to
                  effortlessly create invoices and effectively promote their
                  advertisements. Voicze is here to streamline your invoicing
                  process and boost your marketing efforts.
                </p>
              </div>
              <div className={style.cto_action}>
                <>
                  {/* {* FORM - TRY FOR FREE*} */}
                  <form>
                    <div className={style.join_waitlist}>
                      <input
                        type="email"
                        placeholder="Enter your email..."
                        name="email"
                      />
                      <button type="submit">Try for free</button>
                    </div>

                    <li>Full access, No credit card required.</li>
                  </form>
                  {/* {* FORM - ENDS*} */}
                </>
              </div>
            </div>
            <div className={style.hero_image_illustration}>
              <div className={style.hero_image_frame}>
                <Image src={SvgImage} alt="hero_image_showcase" />
              </div>
              <div className={style.floating_banner}>
                <h1>Growing Your Business.</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
