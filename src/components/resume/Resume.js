import React, { Component } from "react";
import "../resume/resume.css";

export default class Resume extends Component {
  render() {
    return (
      <div className="container_resume1" id="resume">
        <div className="container_resume_inside_1">
          <div className="head_res">
            <span className="res_head">Resume</span>
          </div>
        </div>
        <div className="container_resume_inside_2">
          <div className="work_ex">
            <div className="heading_inside">
              <span className="sub_heading_resume">Work Experience</span>
            </div>

            <div className="work_ex_parts parts_res">
              <div className="box_res_det title_res">
                <div className="inside_sep_res">Associate</div>
                <div className="inside_sep_res">
                  <div className="year">Sep,2021-Present</div>
                </div>
              </div>

              <div className="box_res_det">PwC AC</div>
            </div>

            <div className="work_ex_parts parts_res">
              <div className="box_res_det title_res">
                <div className="inside_sep_res">Associate Business Analyst</div>
                <div className="inside_sep_res">
                  <div className="year">Sep,2020-Apr,2021</div>
                </div>
              </div>
              <div className="box_res_det">Playsimple Games</div>
            </div>

            <div className="work_ex_parts parts_res">
              <div className="box_res_det title_res">
                <div className="inside_sep_res">Trainee Business Analyst</div>
                <div className="inside_sep_res">
                  <div className="year">Sep,2019-Sep,2020</div>
                </div>
              </div>

              <div className="box_res_det">Playsimple Games</div>
            </div>
          </div>

          <div className="edu">
            <div className="heading_inside">
              <span className="sub_heading_resume">Education</span>
            </div>

            <div className="edu_parts parts_res">
              <div className="box_res_det title_res">
                <div className="inside_sep_res">
                  Chandigarh Engineering College
                </div>
                <div className="inside_sep_res">
                  <div className="year">Jul,2016-Jul,2020</div>
                </div>
              </div>

              <div className="box_res_det">Bachelor's in Tecnology-CSE</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
