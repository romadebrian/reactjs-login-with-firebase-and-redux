import React, { useContext, createContext, useState, Fragment } from "react"; //rfce
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
  useNavigate,
  useLocation,
} from "react-router-dom";

import "./Login.css";

function Login() {
  const authContext = createContext();
  const auth = useContext(authContext);
  const location = useLocation();
  const history = useNavigate();
  let { from } = location.state || { from: { pathname: "/" } };

  const handleLogin = () => {
    auth.signin(() => {
      // history.replace(from);
      history(from, { replace: true });
    });
  };

  const AuthButton = () => {
    let history = useNavigate();

    return auth.user ? (
      <p>
        Welcome!{" "}
        <button
          onClick={() => {
            auth.signout(() => history("/"));
          }}
        >
          Sign out
        </button>
      </p>
    ) : (
      <p>You are not logged in.</p>
    );
  };

  return (
    <div className="login-form">
      <div className="card">
        <h1>Login</h1>
        <div className="body-card">
          <input type="text" placeholder="Email" />

          <input type="password" placeholder="Password" />
        </div>
        <button onClick={handleLogin} className="btn">
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
