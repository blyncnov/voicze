import React from "react";

// React Icon
import { CiTimer } from "react-icons/ci";
import { CgTimelapse } from "react-icons/cg";
import { FaBalanceScaleLeft } from "react-icons/fa";

// Icon Style
const IconCardStyle = {
  color: "black",
  fontSize: "1.5em",
};

export default function Dashboard() {
  return (
    <>
      <header className="dashboard_header">
        <h1>Invoice Insight</h1>
        <p>
          Realtime Insight on giveaway sessions. Yesterday’s Invoices Issued
        </p>
      </header>
    </>
  );
}

Dashboard.getLayout = function getLayout(page: any) {
  return page;
};
