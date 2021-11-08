import React, { Component } from "react";
import "../portfolio/portfolio.css";
export default class Portfolio extends Component {
  render() {
    return (
      <div>
        <div className="container_portfolio">
          <div className="heading_portfolio">
            <span className="heading_port">My Portfolio</span>
            <hr className="hr_port" />
          </div>
          <div className="content_portfolio">
            <div className="project_card">
              <a href="https://todojs-ash.netlify.app" target="_blank">
                <div className="img_proj img_proj1"></div>
              </a>
            </div>
            <div className="project_card">
              <a href="https://clockrem.netlify.app/" target="_blank">
                <div className="img_proj img_proj2"></div>
              </a>
            </div>
            <div className="project_card">
              <a href="https://textutils12.netlify.app/" target="_blank">
                <div className="img_proj img_proj3"></div>
              </a>
            </div>
            <div className="project_card">
              <a href="https://ayush27gupta.github.io/CSS6/" target="_blank">
                <div className="img_proj img_proj4"></div>
              </a>
            </div>
            <div className="project_card">
              <a href="https://ayush27gupta.github.io/CSS5/" target="_blank">
                <div className="img_proj img_proj5"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
