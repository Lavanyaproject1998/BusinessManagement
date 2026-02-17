 // =====================================
    // BACKEND JWT LOGIN (use later)
    // =====================================

    /*
    try {
      const res = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
      });

      if (!res.ok) throw new Error("Invalid");

      const data = await res.json();
      localStorage.setItem("token", data.token);

      window.location.href = "/dashboard";
    } catch {
      setError("Invalid username or password");
    }
    */

    import React, { useState } from "react";
import "../css/login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    const STATIC_USERNAME = "admin";
    const STATIC_PASSWORD = "1234";

    if (username === STATIC_USERNAME && password === STATIC_PASSWORD) {
      localStorage.setItem("token", "static-demo-token");
      window.location.href = "/select-company";
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="login-page">

      <div className="logo-dots">● ● ●</div>

      <h1 className="title">ERP Manufacturing</h1>
      <p className="subtitle">Login Screen for Executive & Factory ERP</p>

      <div className="login-card">
        <div className="input-group">
          <span>✉</span>
          <input
            placeholder="Email"
            onChange={e => setUsername(e.target.value)}
          />
        </div>

        <div className="input-group">
          <span>🔒</span>
          <input
            type="password"
            placeholder="Password"
            onChange={e => setPassword(e.target.value)}
          />
        </div>

        <button className="login-btn" onClick={handleLogin}>
          Login
        </button>

        {error && <div className="error">{error}</div>}

        <a href="#" className="forgot">Forgot password?</a>
      </div>

      {/* Background factory illustration */}
      <img src="/factory.png" alt="factory" className="factory-bg" />
    </div>
  );
}

export default Login;
