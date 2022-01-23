import React, { Component } from "react";
import "../introduction/intro.css";

export default class Intro extends Component {
  render() {
    return (
      <div className="container_intro" id="home">
        <div className="part1">
          <div className="intro">
            <span className="head_txt">Hi, I am Ayush Gupta</span>
            <br />
            <span className="dev_txt">A Front-end Developer</span>
          </div>
          <div className="sub">
            <span className="txt">Get ready to turn ideas into reality</span>
          </div>
          <div className="btns">
            <div>
              <a href="#contact">
                <button className="btn1 btn">Hire Me</button>
              </a>
            </div>
            <div>
              <button className="btn2 btn">Get Resume</button>
            </div>
          </div>
        </div>
        <div className="part2">
          <div className="img"></div>
        </div>
      </div>
    );
  }
}
