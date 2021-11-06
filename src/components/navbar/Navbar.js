import React, { Component } from "react";
import "../navbar/Navbar.css";

export default class Navbar extends Component {
  render() {
    return (
      <div className="container_navbar">
        <div className="navbar">
          <div className="name">
            <span id="name">Ayush Gupta</span>
          </div>

          <div className="menu">
            <ul className="menu_div" type="none">
              <li className="menu_items">
                <a href="">Home</a>
              </li>
              <li className="menu_items">
                <a href="">About</a>
              </li>
              <li className="menu_items">
                <a href="">Portfolio</a>
              </li>
              <li className="menu_items">
                <a href="">Resume</a>
              </li>
              <li className="menu_items">
                <a href="">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
