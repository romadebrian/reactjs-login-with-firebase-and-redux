import React, { useContext, createContext, useState, useEffect } from "react"; //rfce
import {
  BrowserRouter as Router,
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

  const [isloaded, setLoaded] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    if (isloaded === false) {
      console.log(props);
      setLoaded(true);
    }
  }, [isloaded]);

  const handleLogin = () => {
    // console.log(user);
    props.handleSetUser(userEmail);
    localStorage.setItem("token", JSON.stringify(userEmail));

    history("/");
  };

  const handleChange = (e) => {
    setUserEmail(e.target.value);
    // console.log(e.target.value);
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
