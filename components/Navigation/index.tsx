import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

// Voicze Logo
import MyLogo from "@/public/logo/voicze_logo.svg";

// React Icons
import { RiBarChartHorizontalLine } from "react-icons/ri";
import { TbFileInvoice } from "react-icons/tb";

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

  // Current Path
  const current_url_pathname: any = router.pathname;

  return (
    <>
      <nav id={style.nav}>
        <div className={style.container}>
          <div id="container">
            <div className={style.navbar_container}>
              <div className={style.left_items}>
                <div className={style.logo}>
                  <Link href="/">
                    <Image src={MyLogo} alt={PlatformName} priority={true} />
                  </Link>
                </div>
                <div className={style.list}>
                  <ul>
                    {NavBarData.map((data) => {
                      return (
                        <Link
                          key={data.id}
                          href={`${data.url.toLowerCase()}`}
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
              <div className={style.hivee_hamburger}>
                <div className="hivee_fold_hamburger">
                  {true ? (
                    <h1 style={Iconstyle}>👋</h1>
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
