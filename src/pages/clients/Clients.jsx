import Sidebar from "../../components/Sidebar";
import "./Clients.css";

import {
  FaSearch,
  FaPlus,
  FaEdit,
  FaTrash,
} from "react-icons/fa";

function Clients() {
  return (
    <div className="clients-page">

      <Sidebar />

      <div className="clients-content">

        {/* TOP BAR */}

        <div className="clients-header">

          <div>
            <h1>Clients Management</h1>
            <p>Manage all studio clients</p>
          </div>

          <button className="add-client-btn">
            <FaPlus />
            Add Client
          </button>

        </div>

        {/* SEARCH */}

        <div className="search-box">

          <FaSearch className="search-icon" />

          <input
            type="text"
            placeholder="Search clients..."
          />

        </div>

        {/* TABLE */}

        <div className="clients-table">

          <table>

            <thead>

              <tr>
                <th>Client</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Service</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>

            </thead>

            <tbody>

              <tr>

                <td className="client-info">

                  <img
                    src="https://i.pravatar.cc/40?img=1"
                    alt=""
                  />

                  <span>Kamal Perera</span>

                </td>

                <td>0771234567</td>

                <td>kamal@gmail.com</td>

                <td>Wedding Shoot</td>

                <td>
                  <span className="status active">
                    Active
                  </span>
                </td>

                <td className="actions">

                  <button className="edit-btn">
                    <FaEdit />
                  </button>

                  <button className="delete-btn">
                    <FaTrash />
                  </button>

                </td>

              </tr>

              <tr>

                <td className="client-info">

                  <img
                    src="https://i.pravatar.cc/40?img=2"
                    alt=""
                  />

                  <span>Nadeesha Silva</span>

                </td>

                <td>0715558888</td>

                <td>nadeesha@gmail.com</td>

                <td>Birthday Shoot</td>

                <td>
                  <span className="status pending">
                    Pending
                  </span>
                </td>

                <td className="actions">

                  <button className="edit-btn">
                    <FaEdit />
                  </button>

                  <button className="delete-btn">
                    <FaTrash />
                  </button>

                </td>

              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default Clients;