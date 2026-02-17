import React from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import "../css/Dashboard.css";


function Dashboard() {
  return (
    <div className="layout">
      <Sidebar />

      <main className="main">

        <Topbar />

        {/* KPI Cards */}
        <div className="kpis">
          <div className="kpi blue">
            <h3>145</h3>
            <p>Total Products</p>
            <span>+6%</span>
          </div>

          <div className="kpi green">
            <h3>37</h3>
            <p>Open Work Orders</p>
            <span>+5%</span>
          </div>

          <div className="kpi purple">
            <h3>782K</h3>
            <p>Available Inventory</p>
            <span>+5%</span>
          </div>

          <div className="kpi red">
            <h3>4</h3>
            <p>Delayed Orders</p>
            <span>-2%</span>
          </div>
        </div>

        {/* Grid */}
        <div className="content-grid">

          {/* Production */}
          <div className="panel large">
            <div className="panel-header">
              <h4>Production Performance</h4>
              <span>Last 14 Days</span>
            </div>
            <div className="chart-placeholder">📈 Chart Area</div>
          </div>

          {/* Work Orders */}
          <div className="panel">
            <div className="panel-header">
              <h4>Work Orders Overview</h4>
              <a href="/">View All</a>
            </div>

            <div className="work-row">
              <span>WO-1038</span><span>Gear Assembly</span><span className="tag done">Done</span>
            </div>
            <div className="work-row">
              <span>WO-1039</span><span>Control Panel</span><span className="tag open">Open</span>
            </div>
            <div className="work-row">
              <span>WO-1037</span><span>Electric Motor</span><span className="tag delay">Delay</span>
            </div>
          </div>

          {/* Inventory */}
          <div className="panel">
            <div className="panel-header">
              <h4>Inventory Levels</h4>
              <a href="/">View All</a>
            </div>

            <div className="inv-row">
              Aluminium
              <div className="bar"><span style={{ width: "70%" }} /></div>
              377
            </div>

            <div className="inv-row">
              Control Panel
              <div className="bar"><span style={{ width: "60%" }} /></div>
              339
            </div>

            <div className="inv-row">
              Electric Motor
              <div className="bar"><span style={{ width: "85%" }} /></div>
              993
            </div>
          </div>

          {/* Todo */}
          <div className="panel">
            <div className="panel-header">
              <h4>To-Do List</h4>
              <a href="/">View All</a>
            </div>

            <ul className="todo">
              <li><input type="checkbox" defaultChecked /> Perform final inspection</li>
              <li><input type="checkbox" defaultChecked /> Review BOM</li>
              <li><input type="checkbox" /> Order aluminium sheets</li>
            </ul>
          </div>

        </div>

        {/* Recent Activity */}
        <div className="activity">
          <div className="activity-card">
            <h4>Recent Activity</h4>
            <p>John Doe created Work Order WO-1038</p>
            <p>Receiving 350 units of Ball Bearings</p>
            <p>Peter finished Work Order WO-1037</p>
          </div>

          <div className="activity-card">
            <h4>Recent Activity</h4>
            <p>John Doe created Work Order WO-1035</p>
            <p>Receiving 350 units of Ball Bearings</p>
            <p>Sally inspected Electric Motor</p>
          </div>
        </div>

      </main>
    </div>
  );
}

export default Dashboard;
