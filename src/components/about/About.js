import React, { Component } from "react";
import "../about/about.css";

export default class About extends Component {
  render() {
    return (
      <div className="container_about" id="about">
        <div className="part_about1">
          <img
            className="image_about"
            src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHdlYiUyMGRldmVsb3BtZW50fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
            alt=""
            width="80%"
            height="80%"
          />
        </div>
        <div className="part_about2">
          <div className="about_text">
            <span>
              <h2 className="about_heading">About Me</h2>
            </span>
            <span>
              <hr />
            </span>
            <span>
              <p className="para">
                Organized, dedicated and ambitious budding computer science
                professional with excellent attention to detail, and thirst for
                learning new skills that will help me to compete and level up
                career.
              </p>
            </span>
            <span>
              <p className="para">
                I enjoy turning complex problems into simple, beautiful and
                intuitive designs. When I'm not pushing pixels, you'll find me
                watching anime or in the mountains.
              </p>
            </span>
          </div>

          <div className="about_tech">
            <div className="about_tech_txt">Languages/Tech/Libraries</div>
            <div className="about_tech_img">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png"
                alt="image"
                height="50px"
                width="50px"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png"
                alt=""
                height="50px"
                width="50px"
              />
              <img
                src="https://www.thecodecrypt.com/images/2020/01/08/js.png"
                alt=""
                height="50px"
                width="50px"
              />
              <img
                src="https://assets.deepsource.io/e2c2322/images/blog/git-best-practices/header-square.jpeg"
                alt=""
                height="50px"
                width="50px"
              />
              <img
                src="https://www.drupal.org/files/project-images/bootstrap-stack.png"
                alt=""
                height="50px"
                width="50px"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
                alt=""
                height="50px"
                width="50px"
              />
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF28wp6oZkObggVRDzRqkb7wNuofazdAqVuomPvQdPijSMI_bOqMoaOmJneoO5IIqxt1Q&usqp=CAU"
                alt=""
                height="50px"
                width="50px"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
