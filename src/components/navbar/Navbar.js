import React, { Component } from "react";
import "../navbar/Navbar.css";
import { Routes,Route } from "react-router-dom"
import About from "../about/About";

export default class Navbar extends Component {
  render() {
    return (
      <div className="container_navbar">
        <div className="navbar">
          <div className="name">
          <a href="#"><span id="name">Ayush Gupta</span></a>
          </div>

          <div className="menu">
            <ul className="menu_div" type="none">
              <li className="menu_items">
                <a href="#">Home</a>
              </li>
              <li className="menu_items">
                <a href="#about">About</a>
              </li>
              <li className="menu_items">
                <a href="#portfolio">Portfolio</a>
              </li>
              <li className="menu_items">
                <a href="#resume">Resume</a>
              </li>
              <li className="menu_items">
                <a href="#contact">Contact</a>
              </li>
            </ul>

            <Routes>
              
            </Routes>
          </div>
        </div>
      </div>
    );
  }
}
