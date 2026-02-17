import React from "react";
import "../css/Sidebar.css";

function Sidebar() {
  const menu = [
    { name: "Dashboard", icon: "📊" },
    { name: "Products", icon: "📦" },
    { name: "Bill of Materials", icon: "🧾" },
    { name: "Inventory", icon: "🏷" },
    { name: "Work Orders", icon: "🛠" },
    { name: "MRP", icon: "📐" },
    { name: "Quality", icon: "✅" },
    { name: "Maintenance", icon: "🔧" },
    { name: "Sales", icon: "💰" },
    { name: "Purchasing", icon: "🛒" },
    { name: "Accounting", icon: "📒" },
    { name: "Settings", icon: "⚙" }
  ];

  return (
    <div className="sidebar">

      <div className="logo">ERP</div>

      <div className="menu">
        {menu.map((item, index) => (
          <div
            key={index}
            className={`menu-item ${index === 0 ? "active" : ""}`}
          >
            <span className="menu-icon">{item.icon}</span>
            <span>{item.name}</span>
          </div>
        ))}
      </div>

      <div className="sidebar-footer">

        <div className="user-card">
          <div className="avatar">JD</div>
          <div>
            <strong>John Doe</strong>
            <p>Production Manager</p>
          </div>
        </div>

        <div className="logout">⏻ Logout</div>

        <img src="/factory.png" alt="factory" className="factory-bg" />

      </div>
    </div>
  );
}

export default Sidebar;
