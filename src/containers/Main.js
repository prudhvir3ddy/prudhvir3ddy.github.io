import React, { Component } from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Projects from "./projects/Projects";

export default class extends Component {
  render() {
    return (
      <div>
        <Header />
        <Greeting />
        <Projects />
      </div>
    );
  }
}
