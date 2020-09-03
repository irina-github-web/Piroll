import React, { Component } from "react";
import { FormErrors } from "./FormErrors";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      title: "",
      message: "",
      formErrors: { name: "", email: "", title: "", message: "" },
      nameValid: false,
      emailValid: false,
      titleValid: false,
      messageValid: false,
      formValid: false,
    };
  }

  changeInputHandler = (event) => {
    const { name, value } = event.target;
    this.setState(
      {
        [name]: value,
      },
      () => {
        this.validateField(name, value);
      }
    );
  };

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let nameValid = this.state.nameValid;
    let emailValid = this.state.emailValid;
    let titleValid = this.state.titleValid;
    let messageValid = this.state.messageValid;

    switch (fieldName) {
      case "name":
        nameValid = value.match(
          /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u
        );
        fieldValidationErrors.name = nameValid ? "" : " is invalid";
        break;
      case "email":
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? "" : " is invalid";
        break;
      case "title":
        titleValid = value.length >= 3;
        fieldValidationErrors.title = titleValid ? "" : " is too short";
        break;
      case "message":
        messageValid = value.length >= 10;
        fieldValidationErrors.messsage = messageValid ? "" : " is too short";
        break;
      default:
        break;
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        nameValid: nameValid,
        emailValid: emailValid,
        titleValid: titleValid,
        messageValid: messageValid,
      },
      this.validateForm
    );
  }

  validateForm() {
    this.setState({
      formValid:
        this.state.nameValid &&
        this.state.emailValid &&
        this.state.titleValid &&
        this.state.messageValid,
    });
  }

  errorClass(error) {
    return error.length === 0 ? "" : "has-error";
  }

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
              className={`form-control form-input ${this.errorClass(
                this.state.formErrors.name
              )}`}
              placeholder="Your Name"
              name="name"
              value={this.state.name}
              onChange={this.changeInputHandler}
            />
          </div>

          <div className="col">
            <input
              type="email"
              className={`form-control form-input ${this.errorClass(
                this.state.formErrors.email
              )}`}
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
            className={`form-control form-input ${this.errorClass(
              this.state.formErrors.title
            )}`}
            placeholder="Your Title"
            name="title"
            value={this.state.title}
            onChange={this.changeInputHandler}
          />
        </div>
        <div className="row">
          <textarea
            className={`form-control form-input ${this.errorClass(
              this.state.formErrors.message
            )}`}
            placeholder="Your Message"
            rows="6"
            name="message"
            value={this.state.message}
            onChange={this.changeInputHandler}
          />
        </div>
        <div className="panel panel-default">
          <FormErrors formErrors={this.state.formErrors} />
        </div>
        <button
          type="submit"
          className="welcome__link submit-btn"
          disabled={!this.state.formValid}
        >
          Send Message
        </button>
      </form>
    );
  }
}
