import React, { Component } from "react"; //rfce
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Main from "./modules/main/Main";
import Login from "./modules/login/Login";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="*" element={<Main />} />

          <Route exact path="/login" element={<Login />} />
        </Routes>
      </Router>
    );
  }
}
