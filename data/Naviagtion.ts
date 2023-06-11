// Navigation Types
import { NavBarType } from "../types/types";

// Navigation Logo
export const PlatformName: string = "Voicze";

// Navigation Information
export const NavBarData: NavBarType[] = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Features",
    url: "#features",
  },
  {
    id: 3,
    title: "Pricing",
    url: "pricing",
  },
  {
    id: 4,
    title: "FAQ",
    url: "#faq",
  },
  {
    id: 5,
    title: "Invoice Generator",
    url: "/dashboard/invoice",
  },
];

export default NavBarData;
