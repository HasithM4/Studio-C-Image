import "./Inventory.css";
import Sidebar from "../../components/Sidebar";

import {
  FaBoxOpen,
  FaExclamationTriangle,
  FaWarehouse,
  FaPlus,
  FaEdit,
  FaTrash,
} from "react-icons/fa";

function Inventory() {
  return (
    <div className="dashboard-layout">

      <Sidebar />

      <div className="dashboard-content">

        <div className="inventory-page">

          {/* HEADER */}
          <div className="inventory-header">

            <div>
              <h1>Inventory Management</h1>
              <p>Manage studio equipment and stock items</p>
            </div>

            <button className="add-item-btn">
              <FaPlus />
              Add Item
            </button>

          </div>

          {/* STATS */}
          <div className="inventory-stats">

            <div className="inventory-card">
              <FaWarehouse />
              <div>
                <h3>120</h3>
                <p>Total Items</p>
              </div>
            </div>

            <div className="inventory-card">
              <FaBoxOpen />
              <div>
                <h3>85</h3>
                <p>Available</p>
              </div>
            </div>

            <div className="inventory-card">
              <FaExclamationTriangle />
              <div>
                <h3>5</h3>
                <p>Low Stock</p>
              </div>
            </div>

          </div>

          {/* TABLE */}
          <div className="inventory-table">

            <table>

              <thead>
                <tr>
                  <th>Item Name</th>
                  <th>Category</th>
                  <th>Quantity</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>

                <tr>
                  <td>Canon EOS R6</td>
                  <td>Camera</td>
                  <td>4</td>

                  <td>
                    <span className="status available">
                      Available
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
                  <td>LED Soft Light</td>
                  <td>Lighting</td>
                  <td>2</td>

                  <td>
                    <span className="status low">
                      Low Stock
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

export default Inventory;