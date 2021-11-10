import React, { Component } from "react";
import About from "../about/About";
import Contact from "../contact/Contact";
import Intro from "../introduction/Intro";
import Navbar from "../navbar/Navbar";
import Portfolio from "../portfolio/Portfolio";
import Resume from "../resume/Resume";
import {BrowserRouter} from "react-router-dom"

export default class Start extends Component {
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
