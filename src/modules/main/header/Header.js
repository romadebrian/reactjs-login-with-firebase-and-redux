import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import "./Header.css";

function Header() {
  const [user, setUser] = useState("roma");
  let navigate = useNavigate();

  const checkLogin = () => {
    if (user === "") {
      return (
        <Link to="/login">
          <button>Login</button>
        </Link>
      );
    } else {
      return <button onClick={(e) => handleLogout()}>Logout</button>;
    }
  };

  const handleLogout = (second) => {
    setUser("");
  };

  return (
    <div className="header">
      <span className="logo">
        <h1>Example</h1>
      </span>
      <span className="list-menu">
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/profile">
          <button>Profile</button>
        </Link>
      </span>
      <div className="login-profile">
        {/* <button>Login</button> */}
        {checkLogin()}
      </div>
    </div>
  );
}

export default Header;
