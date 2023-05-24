import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

// Voicze Logo
import MyLogo from "@/public/logo/voicze_logo.svg";

// React Icons
import { RiBarChartHorizontalLine } from "react-icons/ri";
import { FaTimes } from "react-icons/fa";

// Naviagtion Data
import { NavBarData, PlatformName } from "../../data/Naviagtion";

// Naviagtion Style
import style from "./Navigation.module.scss";

// Icon Style
const Iconstyle = {
  fontSize: "2em",
  color: "#344373",
  cursor: "pointer",
};

// Naviagtion Component
const Naviagtion = () => {
  const router = useRouter();

  const [isClicked, setIsClicked] = useState(true);
  const [scrollY, setScrollY] = useState(false);

  const onScroll = useCallback((event: any) => {
    const { scrollY } = window;

    if (scrollY > 80) {
      setScrollY(true);
    } else {
      setScrollY(false);
    }
  }, []);

  useEffect(() => {
    console.log(scrollY);

    //add eventlistener to window
    window.addEventListener("scroll", onScroll, { passive: true });

    // remove event on unmount to prevent a memory leak with the cleanup
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [onScroll, scrollY]);

  // Current Path
  const current_url_pathname: any = router.pathname;

  const isClickedHandler = () => {
    setIsClicked(!isClicked);
  };

  return (
    <>
      <nav
        id={
          scrollY ? `${style.nav}` : `${style.nav} ${style.nav__scroll__drop}`
        }
      >
        <div className={style.container}>
          <div id="container">
            <div className={style.navbar_container}>
              <div className={style.left_items}>
                <div className={style.logo}>
                  <Link href="/">
                    <Image src={MyLogo} alt={PlatformName} priority={true} />
                  </Link>
                </div>
                <div
                  className={
                    isClicked
                      ? `${style.list} ${style.toggle_off} `
                      : `${style.list} `
                  }
                >
                  <ul>
                    <div className={style.logo} id={style.mobile_logo_appear}>
                      <Link href="/" onClick={isClickedHandler}>
                        <Image
                          src={MyLogo}
                          alt={PlatformName}
                          priority={true}
                        />
                      </Link>
                    </div>
                    <br />
                    <br />
                    <>
                      {NavBarData.map((data) => {
                        return (
                          <Link
                            key={data.id}
                            href={`${data.url.toLowerCase()}`}
                            onClick={isClickedHandler}
                            id={
                              current_url_pathname === "/"
                                ? "active"
                                : "not-active"
                            }
                          >
                            <li>{data.title}</li>
                          </Link>
                        );
                      })}
                    </>
                  </ul>
                </div>
              </div>
              <div className={style.right_items}>
                <Link href="/auth/login">
                  <button className={style.btn} id={style.transparent}>
                    Login
                  </button>
                </Link>
                <Link href="/waitlist">
                  <button className={style.btn} id={style.primary}>
                    Join waitlist
                  </button>
                </Link>
              </div>
              <div className={style.hivee_hamburger} onClick={isClickedHandler}>
                <div className="hivee_fold_hamburger">
                  {!isClicked ? (
                    <FaTimes style={Iconstyle} />
                  ) : (
                    <RiBarChartHorizontalLine style={Iconstyle} />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Naviagtion;
