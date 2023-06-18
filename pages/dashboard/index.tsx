import React, { useState } from "react";
import Link from "next/link";

// React Icon
import { CgCalendarDue } from "react-icons/cg";
import { MdPendingActions, MdOutlineVerifiedUser } from "react-icons/md";
import { VscArchive } from "react-icons/vsc";
import { BsFillEyeSlashFill, BsFillEyeFill } from "react-icons/bs";
import { RiCodeView } from "react-icons/ri";

// Chart
import BarChart from "@/components/Dashboard/Utils/BarChart";

// Icon Style
const IconCardStyle = {
  color: "black",
  fontSize: "2em",
};

// Show Icon Style
const ShowIconStyleEncoding = {
  color: "black",
  cursor: "pointer",
};

export default function Dashboard() {
  const [isShow, setIsShow] = useState(false);

  const HideToggleEye = () => {
    setIsShow(!isShow);
  };

  return (
    <>
      <header className="dashboard_special_container">
        <div className="dashboard_create_invoice_header">
          <div>
            <h2 className="dashboard_greeting_text">Hi, Blyncnov!</h2>
            <p>Welcome to your dashboard!</p>
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
        <div className="dashboard_tile_control">
          <h2 className="dashboard_title">Invoice Analytics </h2>
          <h2 onClick={HideToggleEye}>
            {isShow ? (
              <BsFillEyeSlashFill style={ShowIconStyleEncoding} />
            ) : (
              <BsFillEyeFill style={ShowIconStyleEncoding} />
            )}
          </h2>
        </div>
        <div className="dashboard_invoice_grid">
          <QuickAnalytic
            icon={<VscArchive style={IconCardStyle} />}
            title="Total"
            count={80}
            isShow={isShow}
          />
          <QuickAnalytic
            icon={<MdOutlineVerifiedUser style={IconCardStyle} />}
            title="Paid"
            count={77}
            isShow={isShow}
          />
          <QuickAnalytic
            icon={<MdPendingActions style={IconCardStyle} />}
            title="Pending"
            count={2}
            isShow={isShow}
          />
          <QuickAnalytic
            icon={<CgCalendarDue style={IconCardStyle} />}
            title="Due"
            count={1}
            isShow={isShow}
          />
        </div>
      </section>

      <section className="dashboard_special_container">
        <div className="dashboard_tile_control">
          <h2 className="dashboard_title">Issued Invoices </h2>
          <h2 onClick={HideToggleEye}>
            {isShow ? (
              <BsFillEyeSlashFill style={ShowIconStyleEncoding} />
            ) : (
              <BsFillEyeFill style={ShowIconStyleEncoding} />
            )}
          </h2>
        </div>
        <div className="dashboard_invoice_grid">
          <QuickAnalytic
            icon={<VscArchive style={IconCardStyle} />}
            title="Today"
            count={80}
            isShow={isShow}
          />
          <QuickAnalytic
            icon={<MdOutlineVerifiedUser style={IconCardStyle} />}
            title="Weekly"
            count={7}
            isShow={isShow}
          />
          <QuickAnalytic
            icon={<MdPendingActions style={IconCardStyle} />}
            title="Monthly"
            count={2}
            isShow={isShow}
          />
          <QuickAnalytic
            icon={<CgCalendarDue style={IconCardStyle} />}
            title="Yearly"
            count={1}
            isShow={isShow}
          />
        </div>
      </section>

      <section className="dashboard_special_container">
        <h2 className="dashboard_title">
          Analytic Chart <RiCodeView style={ShowIconStyleEncoding} />
        </h2>
        <BarChart />
      </section>

      <section className="dashboard_special_container">
        <h2 className="dashboard_title">
          Payment Received <RiCodeView style={ShowIconStyleEncoding} />
        </h2>
        <br />
        <Invoice_Table />
      </section>
    </>
  );
}

const QuickAnalytic = ({ title, icon, count, isShow }: any) => {
  const [isShowBlur, setIsShowBlur] = useState(false);

  const HideToggleEye = () => {
    setIsShowBlur(isShow);
  };

  return (
    <div>
      <div className="quick_analytic_grid">
        <div className="quick_analytic_column">
          <div className="quick_analytic_icon">{icon}</div>
        </div>
        <div className="quick_analytic_column">
          <h1>{!isShow ? `$${count}.00` : "***"}</h1>
          <li>
            {title} Invoice ({count / 1 + 10 * 0.5})
          </li>
        </div>
      </div>
    </div>
  );
};

const Invoice_Table = () => {
  return (
    <div>
      <div id="table">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <div className="table-responsive" data-pattern="priority-columns">
                <table
                  summary="This table shows all the events that are available"
                  className="table table-bordered table-hover"
                >
                  <caption className="text-center"></caption>
                  <thead>
                    <tr>
                      <th data-priority="1">
                        <div className="all_selector">
                          <input type="checkbox" aria-hidden="true" />
                        </div>
                      </th>
                      <th data-priority="2">Name</th>
                      <th data-priority="3">Price</th>
                      <th data-priority="4">Client </th>
                      <th data-priority="5">Status</th>
                      <th data-priority="6">Date</th>
                      <th data-priority="7">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[0, 1, 2, 3, 4, 5].map((data: any) => {
                      return (
                        <tr key={data}>
                          <td>
                            <input
                              type="checkbox"
                              name="invoice_id"
                              id="invoice_id"
                            />
                          </td>
                          <td>
                            <div className="invoice_value">
                              <p>New Project Expenses Invoice</p>
                              <li>Invoice No 188</li>
                            </div>
                          </td>
                          <td>
                            <div className="invoice_value">
                              <p>$90.00</p>
                            </div>
                          </td>
                          <td>
                            <div className="invoice_value">
                              <p>Apple</p>
                            </div>
                          </td>
                          <td>
                            <div className="invoice_status_sucess">
                              <p>Send</p>
                            </div>
                          </td>
                          <td>08.10.2021</td>
                          <td>...</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Dashboard.getLayout = function getLayout(page: any) {
  return page;
};
