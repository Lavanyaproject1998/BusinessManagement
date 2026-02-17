import React, { useState } from "react";
import "../css/SelectCompany.css";

function SelectCompany() {
  const [search, setSearch] = useState("");

  const companies = [
    "Delta Corp Main Plant",
    "Acme Manufacturing Chennai Plant",
    "Global Motors Chennai Plant",
    "Delta Corp Bangalore Plant",
    "Eagle Manufacturing"
  ];

  const handleSelect = (company) => {
    localStorage.setItem("company", company);
    window.location.href = "/dashboard";
  };

  return (
    <div className="select-page">

      {/* top right logo dots */}
      <div className="logo-dots">● ● ●</div>

      <h1 className="select-title">ERP Manufacturing</h1>
      <p className="select-subtitle">
        Company / Plant Selection Screen for Executive & Factory ERP
      </p>

      <div className="select-card">

        <h3 className="card-title">Select Your Company or Plant</h3>

        <input
          className="search-box"
          placeholder="Search"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />

        {companies
          .filter(c => c.toLowerCase().includes(search.toLowerCase()))
          .map((company, index) => (
            <div className="company-row" key={index}>
              <div className="company-name">
                🏭 {company}
              </div>
              <button
                className="select-btn"
                onClick={() => handleSelect(company)}
              >
                Select
              </button>
            </div>
          ))}

      </div>

      {/* background factory illustration */}
      <img src="/factory.png" className="factory-bg" alt="factory" />

    </div>
  );
}

export default SelectCompany;
