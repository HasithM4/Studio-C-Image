import Sidebar from "../../components/Sidebar";
import "./Dashboard.css";

import {
  FaUsers,
  FaCalendarCheck,
  FaMoneyBillWave,
  FaBoxes,
} from "react-icons/fa";

function Dashboard() {
  return (
    <div className="dashboard">

      <Sidebar />

      <div className="dashboard-content">

        {/* TOP BAR */}

        <div className="topbar">

          <div>
            <h1>Dashboard</h1>
            <p>Welcome back to Studio C Image</p>
          </div>

          <div className="admin-profile">
            Admin
          </div>

        </div>

        {/* STAT CARDS */}

        <div className="cards">

          <div className="card">

            <div className="card-icon blue">
              <FaUsers />
            </div>

            <div>
              <h3>Total Clients</h3>
              <p>120</p>
            </div>

          </div>

          <div className="card">

            <div className="card-icon purple">
              <FaCalendarCheck />
            </div>

            <div>
              <h3>Total Bookings</h3>
              <p>45</p>
            </div>

          </div>

          <div className="card">

            <div className="card-icon green">
              <FaMoneyBillWave />
            </div>

            <div>
              <h3>Total Sales</h3>
              <p>LKR 250,000</p>
            </div>

          </div>

          <div className="card">

            <div className="card-icon red">
              <FaBoxes />
            </div>

            <div>
              <h3>Low Stock</h3>
              <p>5 Items</p>
            </div>

          </div>

        </div>

        {/* RECENT BOOKINGS */}

        <div className="table-section">

          <h2>Recent Bookings</h2>

          <table>

            <thead>
              <tr>
                <th>Client</th>
                <th>Service</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>Kamal Perera</td>
                <td>Wedding Shoot</td>
                <td>2025-05-20</td>
                <td>
                  <span className="status completed">
                    Completed
                  </span>
                </td>
              </tr>

              <tr>
                <td>Nadeesha Silva</td>
                <td>Birthday Shoot</td>
                <td>2025-05-22</td>
                <td>
                  <span className="status pending">
                    Pending
                  </span>
                </td>
              </tr>

              <tr>
                <td>Kasun Madusha</td>
                <td>Studio Session</td>
                <td>2025-05-25</td>
                <td>
                  <span className="status completed">
                    Completed
                  </span>
                </td>
              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;