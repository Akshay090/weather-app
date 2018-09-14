import React, { Component } from "react";
import Weather from "./Weather";
import "./App.css";
import Radium, { StyleRoot } from "radium";

/**
 * The main App.
 *
 * @class App
 * @extends {Component}
 */
class App extends Component {
  render() {
    return (
      <StyleRoot>
        <Weather />
      </StyleRoot>
    );
  }
}

export default Radium(App);
