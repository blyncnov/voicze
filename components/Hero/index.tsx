import React, { useState, useEffect } from "react";
import Image from "next/image";
import AOS from "aos";

import "aos/dist/aos.css";

import { BsBagHeart, BsBinocularsFill } from "react-icons/bs";

// Voicze Config
import { voicze_config } from "../../axios.config";

// Voicze Illustration SVG
import SvgImage from "@/public/illustrations/illus4.svg";

// Components
import Partner from "@/components/Analytics";

// Naviagtion Style
import style from "./Hero.module.scss";

const Hero = () => {
  const [waitlistCount, setWaitListCount] = useState(0);
  const [isWaitList] = useState(true);

  //AOS ANIMATION
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  // FETCH WAITLIST COUNTS
  useEffect(() => {
    AOS.init();
    AOS.refresh();
    //create a controller
    let controller = new AbortController();

    voicze_config.get("waitlist").then((waitlist) => {
      // Number of People who are on the waitlist
      setWaitListCount(waitlist.data.length);
    });

    return () => {
      // Cleanup
      controller?.abort();
    };
  }, [waitlistCount]);

  // Join Waitlist Function
  const onJoinWaitListHandler = (e: any) => {
    e.preventDefault();

    // Email from body
    const email = e.target.email.value;

    voicze_config
      .post("join-waitlist", { email })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    // Clear Value
    e.target.email.value = "";
  };

  return (
    <>
      <div id="container">
        <div className={style.hero_container}>
          <div className={style.hero_section_cto}>
            <div className={style.hero_text}>
              <div className={style.cto_text}>
                <h1
                  data-aos="fade-right"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                  data-aos-duration="1000"
                >
                  Voicze <BsBinocularsFill /> create invoices and effectively
                  promote your business <BsBagHeart />.
                </h1>
              </div>
              <div
                className={style.cto_desc}
                data-aos="zoom-in"
                data-aos-duration="500"
              >
                <p>
                  The ultimate platform for business professionals to
                  effortlessly create invoices and effectively promote their
                  advertisements. Voicze is here to streamline your invoicing
                  process and boost your marketing efforts.
                </p>
              </div>
              <div className={style.cto_action} data-aos="zoom-in">
                <>
                  {/* {* FORM - TRY FOR FREE*} */}
                  <form
                    method="GET"
                    action="/waitlist"
                    onSubmit={onJoinWaitListHandler}
                  >
                    <div className={style.join_waitlist}>
                      <input
                        type="email"
                        placeholder="Enter your email..."
                        name="email"
                        onChange={(e) => e.target.value}
                        required
                      />
                      <button type="submit">
                        {isWaitList ? "Join Waitlist" : "Try for free"}
                      </button>
                    </div>

                    <li>
                      {isWaitList
                        ? "Join Hands. Join the Future. Join Voicze"
                        : " Full access, No credit card required."}
                    </li>
                  </form>
                  {/* {* FORM - ENDS*} */}
                </>
              </div>
              <Partner waitlistCount={waitlistCount} />
            </div>
            <div className={style.hero_image_illustration} data-aos="flip-left">
              <Image src={SvgImage} alt="hero_image_showcase" priority={true} />
              <div className={style.floating_banner} data-aos="flip-up">
                <p>
                  Simplify, Create, Promote: Streamline Your Invoices, Boost
                  Your Business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
