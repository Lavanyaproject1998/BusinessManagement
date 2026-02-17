import React from "react";
import "../css/Topbar.css";

function Topbar() {
  return (
    <div className="topbar-wrapper">

      <div className="top-title">
        <h1>ERP Manufacturing</h1>
        <p>Main Dashboard Screen for Executive & Factory ERP</p>
      </div>

      <div className="topbar">

        <div className="plant">
          🏭 Delta Corp Main Plant
        </div>

        <div className="search-box">
          🔍 <input placeholder="Search" />
        </div>

        <div className="user-info">
          ✉️ 🔔 <span className="avatar">JD</span> John Doe
        </div>

      </div>

    </div>
  );
}

export default Topbar;
