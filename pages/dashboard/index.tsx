import React from "react";

// React Icon
import { CiTimer } from "react-icons/ci";

// Icon Style
const IconCardStyle = {
  color: "black",
  fontSize: "1.5em",
};

export default function Dashboard() {
  return (
    <>
      <header className="dashboard_header">
        <div className="dashboard_create_invoice_header">
          <div>
            <h2>Hi, Octavia!</h2>
            <p>Welcome back </p>
          </div>
          <button className="dashboard_create_invoice_button">
            Create Invoice
          </button>
        </div>
      </header>
      <br />
      <section className="dashboard_special_container">
        <div className="dashboard_invoice_grid">
          <QuickAnalytic title="Total" />
          <QuickAnalytic title="Paid" />
          <QuickAnalytic title="Pending" />
          <QuickAnalytic title="Due" />
        </div>
      </section>
      <br />
      <section className="dashboard_special_container">
        <h2>Analytic Data Showcase</h2>
      </section>
    </>
  );
}

const QuickAnalytic = ({ title }: any) => {
  return (
    <div>
      <div className="quick_analytic_grid">
        <div className="quick_analytic_column">
          <div className="quick_analytic_icon">
            <CiTimer style={IconCardStyle} />
          </div>
        </div>
        <div className="quick_analytic_column">
          <h1>0</h1>
          <li> {title} Invoice</li>
        </div>
      </div>
    </div>
  );
};

Dashboard.getLayout = function getLayout(page: any) {
  return page;
};
