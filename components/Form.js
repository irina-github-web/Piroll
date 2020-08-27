import React, { Component } from "react";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      title: "",
      message: "",
    };
  }

  changeInputHandler = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  submitHandler = (event) => {
    event.preventDefault();

    console.log(this.state);

    this.setState({
      name: "",
      email: "",
      title: "",
      message: "",
    });
  };

  render() {
    return (
      <form id="contact-form" className="form" onSubmit={this.submitHandler}>
        <div className="row">
          <div className="col col--name">
            <input
              type="text"
              className="form-control form-input"
              placeholder="Your Name"
              name="name"
              value={this.state.name}
              onChange={this.changeInputHandler}
            />
          </div>

          <div className="col">
            <input
              type="email"
              className="form-control form-input"
              placeholder="Your Email"
              aria-describedby="emailHelp"
              name="email"
              value={this.state.email}
              onChange={this.changeInputHandler}
            />
          </div>
        </div>
        <div className="row">
          <input
            type="text"
            className="form-control form-input"
            placeholder="Your Title"
            name="title"
            value={this.state.title}
            onChange={this.changeInputHandler}
          />
        </div>
        <div className="row">
          <textarea
            className="form-control form-input"
            placeholder="Your Message"
            rows="6"
            name="message"
            value={this.state.message}
            onChange={this.changeInputHandler}
          />
        </div>
        <button type="submit" className="welcome__link submit-btn">
          Send Message
        </button>
      </form>
    );
  }
}
