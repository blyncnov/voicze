import React from "react";
import Link from "next/link";

// React Icon
import { CgCalendarDue } from "react-icons/cg";
import { MdPendingActions, MdOutlineVerifiedUser } from "react-icons/md";
import { VscArchive } from "react-icons/vsc";

// Chart
import BarChart from "@/components/Dashboard/Utils/BarChart";

// Icon Style
const IconCardStyle = {
  color: "black",
  fontSize: "2em",
};

export default function Dashboard() {
  return (
    <>
      <header className="dashboard_special_container">
        <div className="dashboard_create_invoice_header">
          <div>
            <h2 className="dashboard_greeting_text">Hi, Blyncnov!</h2>
            <p>Welcome back </p>
          </div>
          <Link href="dashboard/invoice/new">
            <button className="dashboard_create_invoice_button">
              Create Invoice
            </button>
          </Link>
        </div>
      </header>
      <br />
      <section className="dashboard_special_container">
        <div>
          <h2 className="dashboard_title">Invoice Analytics!</h2>
        </div>
        <div className="dashboard_invoice_grid">
          <QuickAnalytic
            icon={<VscArchive style={IconCardStyle} />}
            title="Total"
            count={80}
          />
          <QuickAnalytic
            icon={<MdOutlineVerifiedUser style={IconCardStyle} />}
            title="Paid"
            count={77}
          />
          <QuickAnalytic
            icon={<MdPendingActions style={IconCardStyle} />}
            title="Pending"
            count={2}
          />
          <QuickAnalytic
            icon={<CgCalendarDue style={IconCardStyle} />}
            title="Due"
            count={1}
          />
        </div>
      </section>
      <br />
      <section className="dashboard_special_container">
        <h2 className="dashboard_title">Analytic Chart</h2>
        <BarChart />
      </section>
    </>
  );
}

const QuickAnalytic = ({ title, icon, count }: any) => {
  return (
    <div>
      <div className="quick_analytic_grid">
        <div className="quick_analytic_column">
          <div className="quick_analytic_icon">{icon}</div>
        </div>
        <div className="quick_analytic_column">
          <h1> {count} </h1>
          <li> {title} Invoice</li>
        </div>
      </div>
    </div>
  );
};

Dashboard.getLayout = function getLayout(page: any) {
  return page;
};
