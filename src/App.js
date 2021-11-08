import React, { Component } from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/introduction/Intro";
import Navbar from "./components/navbar/Navbar";
import Portfolio from "./components/portfolio/Portfolio";
import Resume from "./components/resume/Resume";

export default class App extends Component {
  render() {
    return (
      <>
        <div className="container_app">
          <Navbar />
          <Intro />
          <About />
          <Portfolio />
          <Resume />
          <Contact />
        </div>
      </>
    );
  }
}
