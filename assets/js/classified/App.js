import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from "./includes/Header.js";
import Home from "./pages/Home.js";
import Details from "./pages/Details.js";
import Category from "./pages/Category.js";
import Login from "./pages/Login/Login.js";
import Register from "./pages/Login/Register.js";
import AddPost from "./pages/AddPost.js";
import Error from "./pages/Error.js";
import UserItems from "./pages/UserItems.js";

export default class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Router>
        <div>
          <Route path="/" component={Header} />
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/users/:user" component={UserItems} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/addpost" component={AddPost} />
          <Route exact path="/categories/:category" component={Category} />
          <Route
            exact
            path="/categories/:category/:item"
            component={Details}
          />

        </div>
      </Router>
    );
  }
}
