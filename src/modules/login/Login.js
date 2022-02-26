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
    <div>
      <p>You must log in to view the page at </p>
      <button onClick={handleLogin}>Log in</button>
    </div>
  );
}

export default Login;
