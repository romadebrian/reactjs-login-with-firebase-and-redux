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
import { connect } from "react-redux";

import "./Login.css";

function Login(props) {
  const authContext = createContext();
  const auth = useContext(authContext);
  const location = useLocation();
  const history = useNavigate();
  let { from } = location.state || { from: { pathname: "/" } };

  const [userEmail, setUserEmail] = useState("");

  console.log(props);

  const handleLogin = () => {
    // console.log(user);
    props.handleSetUser(userEmail);

    // auth.signin(() => {
    //   history(from, { replace: true });
    // });
  };

  const handleChange = (e) => {
    setUserEmail(e.target.value);
    // console.log(e.target.value);
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
          <input
            type="text"
            placeholder="Email"
            name="Email"
            onChange={(e) => handleChange(e)}
          />

          <input type="password" placeholder="Password" />
        </div>
        <button onClick={handleLogin} className="btn">
          Login
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleSetUser: (value) => dispatch({ type: "SET_USER", userEmail: value }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
