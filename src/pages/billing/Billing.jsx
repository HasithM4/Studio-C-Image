import "./Billing.css";
import Sidebar from "../../components/Sidebar";

import {
  FaMoneyBillWave,
  FaFileInvoiceDollar,
  FaClock,
  FaEdit,
  FaTrash,
} from "react-icons/fa";

function Billing() {
  return (
    <div className="dashboard-layout">

      <Sidebar />

      <div className="dashboard-content">

        <div className="billing-page">

          {/* HEADER */}
          <div className="billing-header">

            <div>
              <h1>Billing Management</h1>
              <p>Manage invoices and studio payments</p>
            </div>

            <button className="add-billing-btn">
              + New Invoice
            </button>

          </div>

          {/* STATS */}
          <div className="billing-stats">

            <div className="billing-card">
              <FaMoneyBillWave />
              <div>
                <h3>LKR 250K</h3>
                <p>Total Revenue</p>
              </div>
            </div>

            <div className="billing-card">
              <FaFileInvoiceDollar />
              <div>
                <h3>35</h3>
                <p>Total Invoices</p>
              </div>
            </div>

            <div className="billing-card">
              <FaClock />
              <div>
                <h3>5</h3>
                <p>Pending Payments</p>
              </div>
            </div>

          </div>

          {/* TABLE */}
          <div className="billing-table">

            <table>

              <thead>
                <tr>
                  <th>Client</th>
                  <th>Invoice ID</th>
                  <th>Service</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>

                <tr>
                  <td>Kamal Perera</td>
                  <td>#INV-1001</td>
                  <td>Wedding Shoot</td>
                  <td>LKR 120,000</td>

                  <td>
                    <span className="status paid">
                      Paid
                    </span>
                  </td>

                  <td>
                    <div className="actions">

                      <button className="edit-btn">
                        <FaEdit />
                      </button>

                      <button className="delete-btn">
                        <FaTrash />
                      </button>

                    </div>
                  </td>
                </tr>

                <tr>
                  <td>Nadeesha Silva</td>
                  <td>#INV-1002</td>
                  <td>Birthday Shoot</td>
                  <td>LKR 35,000</td>

                  <td>
                    <span className="status pending">
                      Pending
                    </span>
                  </td>

                  <td>
                    <div className="actions">

                      <button className="edit-btn">
                        <FaEdit />
                      </button>

                      <button className="delete-btn">
                        <FaTrash />
                      </button>

                    </div>
                  </td>
                </tr>

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Billing;