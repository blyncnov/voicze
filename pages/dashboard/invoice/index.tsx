import Link from "next/link";
import React from "react";

const Invoice = () => {
  return (
    <>
      <header className="dashboard_special_container">
        <div className="dashboard_create_invoice_header">
          <div>
            <h1>Invoices</h1>
          </div>
          <div>
            <Link href="invoice/new">
              <button className="dashboard_create_invoice_button">
                New Invoice
              </button>
            </Link>
          </div>
        </div>
      </header>
      <br />
      <section className="dashboard_special_container">
        <div>
          <h2 className="dashboard_title">Total Invoice Generated!</h2>
          <p>List of available invoices available in database</p>
        </div>
        <br />
        <Invoice_Table />
      </section>
    </>
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
                      <th data-priority="1">ID</th>
                      <th data-priority="2">All</th>
                      <th data-priority="3">Paid</th>
                      <th data-priority="4">Pending</th>
                      <th data-priority="5">Overdue </th>
                      <th data-priority="6">Recurring</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[0, 1].map((data: any) => {
                      return (
                        <tr key={data}>
                          <td>{data + 1} </td>
                          <td> Gaming </td>
                          <td> Yes</td>
                          <td>None</td>
                          <td>None</td>
                          <td>None</td>
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

export default Invoice;

Invoice.getLayout = function getLayout(page: any) {
  return page;
};
