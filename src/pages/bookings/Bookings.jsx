import "./Bookings.css";
import Sidebar from "../../components/Sidebar";

import {
  FaCalendarAlt,
  FaClock,
  FaCamera,
  FaEdit,
  FaTrash,
} from "react-icons/fa";

function Bookings() {
  return (
    <div className="dashboard-layout">

      <Sidebar />

      <div className="dashboard-content">

        <div className="bookings-page">

          {/* HEADER */}
          <div className="bookings-header">

            <div>
              <h1>Bookings Management</h1>
              <p>Manage studio reservations and events</p>
            </div>

            <button className="add-booking-btn">
              + New Booking
            </button>

          </div>

          {/* STATS */}
          <div className="booking-stats">

            <div className="stat-card">
              <FaCalendarAlt />
              <div>
                <h3>48</h3>
                <p>Total Bookings</p>
              </div>
            </div>

            <div className="stat-card">
              <FaClock />
              <div>
                <h3>12</h3>
                <p>Upcoming</p>
              </div>
            </div>

            <div className="stat-card">
              <FaCamera />
              <div>
                <h3>8</h3>
                <p>Today Shoots</p>
              </div>
            </div>

          </div>

          {/* TABLE */}
          <div className="bookings-table">

            <table>

              <thead>
                <tr>
                  <th>Client</th>
                  <th>Event</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Package</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>

                <tr>
                  <td>
                    <div className="client-cell">
                      <div className="avatar">K</div>
                      Kamal Perera
                    </div>
                  </td>

                  <td>Wedding Shoot</td>
                  <td>2026-06-15</td>
                  <td>10:00 AM</td>
                  <td>Premium</td>

                  <td>
                    <span className="status confirmed">
                      Confirmed
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
                  <td>
                    <div className="client-cell">
                      <div className="avatar">N</div>
                      Nadeesha Silva
                    </div>
                  </td>

                  <td>Birthday Shoot</td>
                  <td>2026-06-18</td>
                  <td>03:00 PM</td>
                  <td>Standard</td>

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

export default Bookings;