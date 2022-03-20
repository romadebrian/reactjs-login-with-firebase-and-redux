import React, { useState, useContext, createContext, Component } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
  useLocation,
} from "react-router-dom";

import { connect } from "react-redux";

import Header from "./header/Header";
import Footer from "./footer/Footer";

import Home from "../../pages/home/Home";
import NotFound from "../../pages/notfound/NotFound";
import Profile from "../../pages/profile/Profile";

class Main extends Component {
  render() {
    // console.log("Main log", this.props);
    return (
      <div>
        <Header />

        <Routes>
          <Route path="/" element={<Home />}></Route>

          {/* <Route exact path="/profile" element={<Profile />} /> */}
          <Route
            exact
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />

          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </div>
    );
  }
}

let usernya = "";

const mapStateToProps = (state) => {
  console.log("log global state", state);
  usernya = state;
  return {
    state,
  };
};

function PrivateRoute({ children }) {
  let user = usernya.user;
  let location = useLocation();

  // console.log("log B", user);
  if (!user) {
    alert("you are not logged in");
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

export default connect(mapStateToProps)(Main);
