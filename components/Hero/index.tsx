import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

// Image
import SvgImage from "@/public/logo/voicze_icon.png";

// Naviagtion Style
import style from "./Hero.module.scss";

const Hero = () => {
  const router = useRouter();
  const [isWaitList] = React.useState(true);

  const onhandleJoinWaitListButton = () => {
    router.push("https://forms.gle/zJxqxqw9aSpmx5SF6");
  };

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
                  <form method="GET" action="/waitlist">
                    <div className={style.join_waitlist}>
                      <input
                        type="email"
                        placeholder="Enter your email..."
                        name="email"
                      />
                      <button
                        type="submit"
                        onClick={onhandleJoinWaitListButton}
                      >
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
            </div>
            <div className={style.hero_image_illustration}>
              <div className={style.hero_circular_illustration}>
                <div className={style.hero_circular_illustration}>
                  <div className={style.hero_circular_illustration}>
                    <div className={style.hero_circular_illustration_inner}>
                      <Image src={SvgImage} alt="hero_image_showcase" />
                    </div>
                    <div className={style.floating_banner}>
                      <p>
                        Simplify, Create, Promote: Streamline Your Invoices,
                        Boost Your Business.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
