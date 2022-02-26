import React from "react";

import "./Header.css";

function Header() {
  return (
    <div className="header">
      <span className="logo">
        <h1>Example</h1>
      </span>
      <span className="list-menu">
        <button>Home</button>
        <button>Profile</button>
        <select name="menu" id="user">
          <option value="login">Login</option>
          <option value="logout">Logout</option>
        </select>
      </span>
      <div className="login-profile">
        <button>Login</button>
      </div>
    </div>
  );
}

export default Header;
