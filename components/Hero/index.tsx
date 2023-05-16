import React from "react";
import Link from "next/link";

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
                <h1>
                  Bringing Business Owners and Clients together through Voicze
                  Platform.
                </h1>
              </div>
              <div className={style.cto_desc}>
                <p>
                  Locare is your go-to tool for finding the nearest hospitals in
                  your area. Whether you&apos;re looking for emergency care or
                  just need to schedule a routine check-up, Locare has got you
                  covered. Simply enter your location and let us do the rest.
                </p>
              </div>
              <div className={style.cto_action}>
                {false ? (
                  <>
                    <Link href="/auth/login">
                      <button data-btn="transparent">Get Started</button>
                    </Link>
                    <Link href="/demo">
                      <button data-btn="primary" style={{ color: "#ffffff" }}>
                        Request Demo
                      </button>
                    </Link>
                  </>
                ) : (
                  <>
                    {/* {* FORM - TRY FOR FREE*} */}
                    <form>
                      <div className={style.join_waitlist}>
                        <input
                          type="email"
                          placeholder="Enter your email"
                          name="email"
                        />
                        <button type="submit">Try for free</button>
                      </div>

                      <li>Full access, No credit card required</li>
                    </form>
                    {/* {* FORM - ENDS*} */}
                  </>
                )}
              </div>
            </div>
            <div className={style.hero_image_illustration}>
              {/* <Image src={SvgImage} alt="lottie" /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
