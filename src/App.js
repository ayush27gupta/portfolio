import React, { Component } from "react";
import About from "./components/about/About";
import Intro from "./components/introduction/Intro";
import Navbar from "./components/navbar/Navbar";

export default class App extends Component {
  render() {
    return (
      <>
        <div className="container_app">
          <div>
            <Navbar />
          </div>
          <div>
            <Intro />
          </div>
          <div>
            <About />
          </div>
        </div>
      </>
    );
  }
}
