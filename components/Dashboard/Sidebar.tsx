import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

// Voicze Logo
import MyLogo from "@/public/logo/voicze_reverse.svg";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { CLOSE } from "../../redux/actions/action";

// React Icon
import { AiOutlineContacts, AiOutlinePoweroff } from "react-icons/ai";
import { MdSpaceDashboard, MdHistory } from "react-icons/md";
import { RiListSettingsFill } from "react-icons/ri";
import { TbFileInvoice } from "react-icons/tb";
import { BsUsbCFill, BsPatchQuestion } from "react-icons/bs";
import { FaIdCardAlt } from "react-icons/fa";
import { VscReferences } from "react-icons/vsc";
import { BiIdCard } from "react-icons/bi";

// Icon Style
const Iconstyle = {
  fontSize: "1.5em",
  color: "#373131",
};

// Icon Style
const IconSidestyle = {
  opacity: "0.45",
  color: "#373131",
};

const Sidebar = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  // Current Path
  const current_url_pathname: any = router.pathname;

  console.log(current_url_pathname);

  const CloseSidebar = () => {
    // Do This Action
    dispatch({ type: CLOSE });
  };

  // LogOut Handler For Later Use
  const LogOutHandler = () => {
    console.log("I want to log out");

    if (typeof window !== "undefined") {
      localStorage.clear();
      router.push("/auth/login");
    }

    // Do This Action
    dispatch({ type: CLOSE });
  };

  // Toggle State
  const ToggleState = useSelector(
    (state: any) => state.ModeReducer.isSideBarOpen
  );

  return (
    <>
      <div
        className={
          ToggleState ? "dashboard_sideBar" : "dashboard_sideBar active"
        }
      >
        <div className="dashboard_sidebar_height">
          <div className="dashboard_logo">
            <Link href="/dashboard">
              <Image src={MyLogo} alt={`sidebar-logo`} priority={true} />
            </Link>
          </div>
        </div>

        <div className="dashboard_sidebar_navigation ">
          <ul>
            <Link href="/dashboard" onClick={CloseSidebar}>
              <div
                className={
                  current_url_pathname === "/dashboard"
                    ? "active_link_enable dashboard_flex_item"
                    : "dashboard_flex_item"
                }
                id="dashboard_active_home"
              >
                <MdSpaceDashboard style={Iconstyle} />
                <li>Dashboard </li>
              </div>
            </Link>
            <br />
            <div className="sidebar_quicklinks_summary">
              <li>MY Services</li>
              <BsUsbCFill style={IconSidestyle} />
            </div>
            <Link href="/dashboard/invoice" onClick={CloseSidebar}>
              <div className="dashboard_flex_item">
                <div id="sidebar__icon__style">
                  <TbFileInvoice style={Iconstyle} />
                </div>
                <li>Invoices</li>
              </div>
            </Link>
            <Link href="/dashboard/contacts" onClick={CloseSidebar}>
              <div className="dashboard_flex_item">
                <div id="sidebar__icon__style">
                  <AiOutlineContacts style={Iconstyle} />
                </div>
                <li>Contacts</li>
              </div>
            </Link>
            <div className="sidebar_quicklinks_summary">
              <li>Generate</li>
              <BsUsbCFill style={IconSidestyle} />
            </div>
            <Link href="/dashboard/generate/event_card" onClick={CloseSidebar}>
              <div className="dashboard_flex_item">
                <div id="sidebar__icon__style">
                  <FaIdCardAlt style={Iconstyle} />
                </div>
                <li>Event Card</li>
              </div>
            </Link>
            <Link
              href="/dashboard/generate/business_card"
              onClick={CloseSidebar}
            >
              <div className="dashboard_flex_item">
                <div id="sidebar__icon__style">
                  <BiIdCard style={Iconstyle} />
                </div>
                <li>Business ID</li>
              </div>
            </Link>
            <Link href="/dashboard/survey" onClick={CloseSidebar}>
              <div className="dashboard_flex_item">
                <div id="sidebar__icon__style">
                  <BsPatchQuestion style={Iconstyle} />
                </div>
                <li>Quick Survey</li>
              </div>
            </Link>
            <div className="sidebar_quicklinks_summary">
              <li>Business Talk</li>
              <BsUsbCFill style={IconSidestyle} />
            </div>
            <Link href="/dashboard/survey" onClick={CloseSidebar}>
              <div className="dashboard_flex_item">
                <div id="sidebar__icon__style">
                  <BsPatchQuestion style={Iconstyle} />
                </div>
                <li>Podcast</li>
              </div>
            </Link>
            <div className="sidebar_quicklinks_summary">
              <li>MY preference</li>
              <BsUsbCFill style={IconSidestyle} />
            </div>
            <Link href="/dashboard/settings/profile" onClick={CloseSidebar}>
              <div className="dashboard_flex_item">
                <div id="sidebar__icon__style">
                  <RiListSettingsFill style={Iconstyle} />
                </div>
                <li>My Profile</li>
              </div>
            </Link>
            <Link href="/dashboard/settings/referrals" onClick={CloseSidebar}>
              <div className="dashboard_flex_item">
                <div id="sidebar__icon__style">
                  <VscReferences style={Iconstyle} />
                </div>
                <li>My Referrals</li>
              </div>
            </Link>
            <div className="sidebar_quicklinks_summary">
              <li>Others</li>
            </div>
            <div className="dashboard_flex_item" onClick={LogOutHandler}>
              <div id="sidebar__icon__style">
                <AiOutlinePoweroff style={Iconstyle} />
              </div>
              <li>Log Out</li>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
