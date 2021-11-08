import React, { Component } from "react";
import "../contact/contact.css";

export default class Contact extends Component {
  state = {
    name: "",
    number: "",
    email: "",
    message: "",
    details: [],
  };

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const tempArray = [...this.state.details];
    tempArray.push({
      name: this.state.name,
      number: this.state.number,
      email: this.state.email,
      message: this.state.message,
    });
    this.setState({
      details: tempArray,
      name: "",
      number: "",
      email: "",
      message: "",
    });
  };

  render() {
    return (
      <div className="container_contact1">
        <div>
          <spa className="top">Contact Me</spa>
          <hr className="hr_contact" />
        </div>
        <div className="container_contact2">
          <div className="connect_part1 ">
            <div className="heading_contact">
              <span className="sub_head_txt">Let's connect</span>
            </div>

            <div className="mail box_info">
              <div className="icon_mail">
                <i class="fas fa-envelope-square"></i>
              </div>
              <div className="mail_txt">
                <span>ayush27gupta@gmail.com</span>
              </div>
            </div>

            <div className="phone box_info">
              <div className="icon_phone">
                <i class="fas fa-phone"></i>
              </div>
              <div className="phone_txt">
                <span>+91-9891688416</span>
              </div>
            </div>

            <div className="address box_info">
              <div className="icon_address">
                <i class="fas fa-thumbtack"></i>
              </div>
              <div className="address_txt">
                <span>Ghaziabad,India</span>
              </div>
            </div>
          </div>

          <div className="connect_part2">
            <div className="form_contact">
              <form
                action=""
                className="form_contact1"
                onSubmit={this.handleSubmit}
              >
                <h2 className="msg_head">
                  <span>Send me a message</span>
                </h2>
                <br />

                <label htmlFor="namex" className="name">
                  First and Last name
                </label>
                <br />
                <input
                  type="text"
                  id="namex"
                  value={this.state.name}
                  onChange={this.handleChange}
                />
                <br />

                <label htmlFor="number" className="number">
                  Phone number
                </label>
                <br />
                <input
                  type="tel"
                  id="number"
                  value={this.state.number}
                  onChange={this.handleChange}
                />
                <br />

                <label htmlFor="email" className="email">
                  Email Address
                </label>
                <br />
                <input
                  type="email"
                  id="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
                <br />

                <label htmlFor="msg" className="msg">
                  Message
                </label>
                <br />
                <input
                  type="text"
                  id="msg"
                  value={this.state.message}
                  onChange={this.handleChange}
                />
                <br />
                <button className="btnn">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
