import React, { Component } from "react";
import axios from "axios";
axios.defaults.withCredentials = true;
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      email: "",
      error: null,
      valerrors: null
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  //handles changing of all form elements
  changeHandler(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  //this function will run when user tries to log in
  submitHandler(e) {
    e.preventDefault();
    axios.post("https://webapi-frontend.herokuapp.com/api/login", this.state).then(res => {
      if (res.data.error) {
        return this.setState({ error: res.data.message });
      }
      if (res.data.errors) {
        return this.setState({ valerrors: res.data.errors });
      }
      return (window.location = "/home");
    });
  }
  render() {
    return (
      <div className="login-new">
        <div className="login-page">
          <form className="login-form" onSubmit={this.submitHandler}>
            {this.state.error && <p>{this.state.error}</p>}

            <input
              placeholder="username"
              onChange={this.changeHandler}
              type="email"
              name="email"
              id="email"
            />
            {this.state.valerrors &&
              this.state.valerrors.email && (
                <p>{this.state.valerrors.email.msg}</p>
              )}
            <br />

            <input
              type="password"
              placeholder="password"
              onChange={this.changeHandler}
              name="password"
              id="password"
            />
            {this.state.valerrors &&
              this.state.valerrors.password && (
                <p>{this.state.valerrors.password.msg}</p>
              )}
            <br />
            <button>login</button>
            <p className="message">
              Not registered? <a href="/register">Create an account</a>
            </p>
          </form>
        </div>
      </div>
    );
  }
}
