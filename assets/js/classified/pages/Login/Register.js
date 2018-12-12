import React, { Component } from "react";
import axios from "axios";
export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      firstname: "",
      lastname: "",
      password: "",
      password_con: "",
      userdata: null,
      success: false
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  changeHandler(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  submitHandler(e) {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/register", this.state)
      .then(result => {
        if (result.data.errors) {
          return this.setState(result.data);
        }
        return this.setState({
          userdata: result.data,
          errors: null,
          success: true
        });
      });
  }
  render() {
    return (
      <div className="register-page">
        <div className="register">
          <div className="form">
            <form className="register-form" onSubmit={this.submitHandler}>
              {this.state.success && <p>You are successfully registerated!</p>}
              <input
                type="text"
                placeholder="username"
                onChange={this.changeHandler}
                name="username"
                id="username"
              />
              {this.state.errors &&
                this.state.errors.username && (
                  <p>{this.state.errors.username.msg}</p>
                )}<br />

              <input
                type="email"
                placeholder="email"
                name="email"
                onChange={this.changeHandler}
                id="emailreg"
              />

              {this.state.errors &&
                this.state.errors.email && <p>{this.state.errors.email.msg}</p>}<br />

              <input
                type="text"
                onChange={this.changeHandler}
                placeholder="first name"
                name="firstname"
                id="firstname"
              />

              {this.state.errors &&
                this.state.errors.firstname && (
                  <p>{this.state.errors.firstname.msg}</p>
                )}<br />
              <input
                type="text"
                onChange={this.changeHandler}
                placeholder="last name"
                name="lastname"
                id="lastname"
              />
              {this.state.errors &&
                this.state.errors.lastname && (
                  <p>{this.state.errors.lastname.msg}</p>
                )}<br />

              <input
                type="password"
                onChange={this.changeHandler}
                placeholder="password"
                name="password"
                id="passwordreg"
              />
              {this.state.errors &&
                this.state.errors.password && (
                  <p>{this.state.errors.password.msg}</p>
                )}<br />

              <input
                type="password"
                onChange={this.changeHandler}
                placeholder="confirm password"
                name="password_con"
                id="password_con"
              />

              {this.state.errors &&
                this.state.errors.password_con && (
                  <p>{this.state.errors.password_con.msg}</p>
                )}<br />

              <button>create</button>
              <p className="message">
                Already registered? <a href="/login">Sign In</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
