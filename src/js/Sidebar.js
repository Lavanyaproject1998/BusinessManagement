import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Sidebar.css";

function Sidebar() {
  const navigate = useNavigate();

  const [open, setOpen] = useState({});

  const toggle = (key) => {
    setOpen(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="sidebar">
      <div className="logo">ERP</div>

      <div className="menu">

{/* DASHBOARD */}
<div className="menu-item" onClick={()=>navigate("/dashboard")}>📊 Dashboard</div>

{/* USERS */}
<div className="menu-item" onClick={()=>toggle("users")}>👥 Users</div>
{open.users && (
<div className="submenu">
<div className="menu-item" onClick={()=>navigate("/users")}>User List</div>
<div className="menu-item" onClick={()=>navigate("/add-user")}>Add User</div>
<div className="menu-item" onClick={()=>navigate("/edit-user")}>Edit User</div>
<div className="menu-item" onClick={()=>navigate("/roles")}>Roles Management</div>
<div className="menu-item" onClick={()=>navigate("/permissions")}>Permissions Management</div>
<div className="menu-item" onClick={()=>navigate("/profile")}>User Profile</div>
</div>
)}

{/* CUSTOMERS */}
<div className="menu-item" onClick={()=>toggle("customers")}>🧑‍💼 Customers</div>
{open.customers && (
<div className="submenu">
<div className="menu-item">Customer List</div>
<div className="menu-item">Add Customer</div>
<div className="menu-item">Edit Customer</div>
<div className="menu-item">Customer Profile</div>
<div className="menu-item">Customer Transactions</div>
<div className="menu-item">Customer Groups</div>
</div>
)}

{/* SUPPLIERS */}
<div className="menu-item" onClick={()=>toggle("suppliers")}>🏢 Suppliers</div>
{open.suppliers && (
<div className="submenu">
<div className="menu-item">Supplier List</div>
<div className="menu-item">Add Supplier</div>
<div className="menu-item">Edit Supplier</div>
<div className="menu-item">Supplier Profile</div>
<div className="menu-item">Supplier Transactions</div>
<div className="menu-item">Supplier Products</div>
<div className="menu-item">Supplier Payments</div>
</div>
)}

{/* PRODUCTS */}
<div className="menu-item" onClick={()=>toggle("products")}>📦 Products</div>
{open.products && (
<div className="submenu">
<div className="menu-item">Product List</div>
<div className="menu-item">Add Product</div>
<div className="menu-item">Edit Product</div>
<div className="menu-item">Categories</div>
<div className="menu-item">Units</div>
<div className="menu-item">Price Management</div>
<div className="menu-item">Barcode/SKU</div>
<div className="menu-item">Variants</div>
</div>
)}

{/* INVENTORY */}
<div className="menu-item" onClick={()=>toggle("inventory")}>🏷 Inventory</div>
{open.inventory && (
<div className="submenu">
<div className="menu-item">Stock Overview</div>
<div className="menu-item">Stock Adjustment</div>
<div className="menu-item">Stock Transfer</div>
<div className="menu-item">Warehouses</div>
<div className="menu-item">Batch Tracking</div>
<div className="menu-item">Inventory Valuation</div>
</div>
)}

{/* SALES */}
<div className="menu-item" onClick={()=>toggle("sales")}>💰 Sales</div>
{open.sales && (
<div className="submenu">
<div className="menu-item">Invoice List</div>
<div className="menu-item">Create Invoice</div>
<div className="menu-item">Edit Invoice</div>
<div className="menu-item">Payments Received</div>
<div className="menu-item">Credit Notes</div>
<div className="menu-item">Sales Orders</div>
<div className="menu-item">Delivery Notes</div>
</div>
)}

{/* PURCHASING */}
<div className="menu-item" onClick={()=>toggle("purchasing")}>🛒 Purchasing</div>
{open.purchasing && (
<div className="submenu">
<div className="menu-item">Purchase Orders</div>
<div className="menu-item">Create PO</div>
<div className="menu-item">Edit PO</div>
<div className="menu-item">Goods Received</div>
<div className="menu-item">Supplier Bills</div>
<div className="menu-item">Purchase Returns</div>
<div className="menu-item">Supplier Payments</div>
</div>
)}

{/* ACCOUNTING */}
<div className="menu-item" onClick={()=>toggle("accounting")}>📒 Accounting</div>
{open.accounting && (
<div className="submenu">
<div className="menu-item">Chart of Accounts</div>
<div className="menu-item">Journal Entries</div>
<div className="menu-item">Expenses</div>
<div className="menu-item">Income</div>
<div className="menu-item">Payments</div>
<div className="menu-item">Tax Management</div>
<div className="menu-item">Financial Reports</div>
</div>
)}

{/* REPORTS */}
<div className="menu-item" onClick={()=>toggle("reports")}>📈 Reports</div>
{open.reports && (
<div className="submenu">
<div className="menu-item">Sales Reports</div>
<div className="menu-item">Purchase Reports</div>
<div className="menu-item">Inventory Reports</div>
<div className="menu-item">Financial Reports</div>
<div className="menu-item">Tax Reports</div>
<div className="menu-item">Customer Reports</div>
<div className="menu-item">Supplier Reports</div>
</div>
)}

      </div>
    </div>
  );
}

export default Sidebar;
