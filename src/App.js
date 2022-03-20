import React, { Fragment, Component } from "react"; //rfce
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// import Dashboard from "./pages/dashboard/Dashboard";
// import Admin from "./pages/admin/Admin";
import Main from "./modules/main/Main";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Login from "./modules/login/Login";

// import logo from "./logo.svg";
// import "./App.css";

export default class App extends Component {
  // const [statusLogin, setStatusLogin] = useState(false);
  render() {
    return (
      <Router>
        {/* <Fragment> */}
        <Routes>
          <Route path="*" element={<Main />} />

          <Route exact path="/login" element={<Login />} />
        </Routes>
        {/* </Fragment> */}
      </Router>
    );
  }
}
