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
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((data: any) => {
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

export default Invoice;

Invoice.getLayout = function getLayout(page: any) {
  return page;
};
