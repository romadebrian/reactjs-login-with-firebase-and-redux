import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { auth } from "../../../config/firebase";
import { signOut } from "firebase/auth";

import "./Header.css";

function Header(props) {
  // console.log(props);

  const checkLogin = () => {
    if (props.user === "") {
      return (
        <Link to="/login">
          <button>Login</button>
        </Link>
      );
    } else {
      return <button onClick={handleLogout}>Logout</button>;
    }
  };

  const handleLogout = (second) => {
    signOut(auth);
    props.SetUserLogout();
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

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    SetUserLogout: () => dispatch({ type: "SET_USER", userEmail: "" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
