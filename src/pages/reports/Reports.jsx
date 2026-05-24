import "./Reports.css";
import Sidebar from "../../components/Sidebar";

import {
  FaChartLine,
  FaUsers,
  FaMoneyBillWave,
  FaCalendarCheck,
} from "react-icons/fa";

import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from "recharts";

function Reports() {

  // BOOKINGS DATA
  const bookingData = [
    { month: "Jan", bookings: 12 },
    { month: "Feb", bookings: 18 },
    { month: "Mar", bookings: 22 },
    { month: "Apr", bookings: 30 },
    { month: "May", bookings: 28 },
    { month: "Jun", bookings: 40 },
  ];

  // SALES DATA
  const salesData = [
    { month: "Jan", sales: 120000 },
    { month: "Feb", sales: 180000 },
    { month: "Mar", sales: 240000 },
    { month: "Apr", sales: 310000 },
    { month: "May", sales: 270000 },
    { month: "Jun", sales: 400000 },
  ];

  // SERVICES DATA
  const serviceData = [
    { name: "Wedding", value: 45 },
    { name: "Birthday", value: 25 },
    { name: "Events", value: 20 },
    { name: "Other", value: 10 },
  ];

  const COLORS = ["#2563eb", "#22c55e", "#facc15", "#ef4444"];

  return (
    <div className="dashboard-layout">

      <Sidebar />

      <div className="dashboard-content">

        <div className="reports-page">

          {/* HEADER */}
          <div className="reports-header">

            <div>
              <h1>Reports & Analytics</h1>
              <p>Studio performance overview and statistics</p>
            </div>

          </div>

          {/* STATS */}
          <div className="reports-stats">

            <div className="report-card">
              <FaCalendarCheck />
              <div>
                <h3>245</h3>
                <p>Total Bookings</p>
              </div>
            </div>

            <div className="report-card">
              <FaUsers />
              <div>
                <h3>180</h3>
                <p>Total Clients</p>
              </div>
            </div>

            <div className="report-card">
              <FaMoneyBillWave />
              <div>
                <h3>LKR 1.2M</h3>
                <p>Total Revenue</p>
              </div>
            </div>

            <div className="report-card">
              <FaChartLine />
              <div>
                <h3>78%</h3>
                <p>Growth Rate</p>
              </div>
            </div>

          </div>

          {/* CHARTS */}

          <div className="charts-grid">

            {/* LINE CHART */}
            <div className="chart-card">

              <h2>Monthly Bookings</h2>

              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={bookingData}>

                  <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />

                  <XAxis dataKey="month" stroke="#94a3b8" />

                  <YAxis stroke="#94a3b8" />

                  <Tooltip />

                  <Legend />

                  <Line
                    type="monotone"
                    dataKey="bookings"
                    stroke="#2563eb"
                    strokeWidth={3}
                  />

                </LineChart>
              </ResponsiveContainer>

            </div>

            {/* BAR CHART */}
            <div className="chart-card">

              <h2>Monthly Revenue</h2>

              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={salesData}>

                  <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />

                  <XAxis dataKey="month" stroke="#94a3b8" />

                  <YAxis stroke="#94a3b8" />

                  <Tooltip />

                  <Legend />

                  <Bar
                    dataKey="sales"
                    fill="#22c55e"
                    radius={[0, 0, 0, 0]}
                  />

                </BarChart>
              </ResponsiveContainer>

            </div>

          </div>

          {/* PIE CHART */}

          <div className="chart-card pie-chart">

            <h2>Service Distribution</h2>

            <ResponsiveContainer width="100%" height={350}>

              <PieChart>

                <Pie
                  data={serviceData}
                  dataKey="value"
                  outerRadius={120}
                  label
                >

                  {serviceData.map((entry, index) => (
                    <Cell
                      key={index}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}

                </Pie>

                <Tooltip />

              </PieChart>

            </ResponsiveContainer>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Reports;