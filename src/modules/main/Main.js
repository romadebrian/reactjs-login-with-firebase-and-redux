import React, { Component } from "react";

import Header from "./header/Header";

import Home from "../../pages/home/Home";

export default class Main extends Component {
  render() {
    return (
      <div>
        <Header />

        <Home />
      </div>
    );
  }
}
