import {
  FaHome,
  FaUsers,
  FaCalendar,
  FaFileInvoiceDollar,
  FaBoxes,
  FaChartBar,
} from "react-icons/fa";

import { Link } from "react-router-dom";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">

      {/* TOP */}
      <div>

        <div className="logo">
          <img
            src="/logo.png"
            alt="logo"
            className="sidebar-logo"
          />

          <h1>Studio C Image</h1>

          <p className="studio-name">
            Nilantha Dissanayake Photography
          </p>
        </div>

        <ul className="menu">

          <li>
            <NavLink to="/dashboard" exact activeClassName="active-link">
              <FaHome />
              Dashboard
            </NavLink>
          </li>

          <li>
            <NavLink to="/clients" activeClassName="active-link">
              <FaUsers />
              Clients
            </NavLink>
          </li>

          <li>
            <Link to="/bookings">
              <FaCalendar />
              Bookings
            </Link>
          </li>

          <li>
            <Link to="/billing">
              <FaFileInvoiceDollar />
              Billing
            </Link>
          </li>

          <li>
            <Link to="/inventory">
              <FaBoxes />
              Inventory
            </Link>
          </li>

          <li>
            <Link to="/reports">
              <FaChartBar />
              Reports
            </Link>
          </li>

        </ul>

      </div>

      {/* BOTTOM USER */}
      <div className="user-box">
        <div className="user-avatar">
          A
        </div>

        <div>
          <h4>Admin</h4>
          <p>Studio Manager</p>
        </div>
      </div>

    </div>
  );
}

export default Sidebar;