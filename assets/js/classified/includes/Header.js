import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import axios from "axios";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isloggedin: true,
      userProfile:"",
    };

    axios.get("https://webapi-backend.herokuapp.com/api/isloggedin").then(res => {
      if (!res.data) {
        return this.setState({ isloggedin: false });
      }
    });
}

componentWillMount(){
  const {match, history} = this.props
  const self = this;
    //get details of selected item
    axios.get(`https://webapi-backend.herokuapp.com/api/profile`)
      .then(function (response) {
        // handle success
        self.setState({
          userProfile: response.data
        }, () => {
            console.log(self.state);
        })
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      console.log(this.state.userProfile);


  }

  render() {
    const { match, history } = this.props;
    return !this.state.isloggedin ? (
      <div className="container">
        <header>
          <div className="left-menu">
            <Link to={"/home"} className="logo">
              MyStuff
            </Link>
          </div>
          <div className="right-menu">

            <a href="/login" className="signin-btn">
              Sign In
            </a>
            <a href="/register" className="register-btn">
              Register
            </a>
          </div>
        </header>
      </div>
    ) : (
      <div className="container">
        <header>
          <div className="left-menu">
            <Link to={"/home"} className="logo">
              MyStuff
            </Link>
          </div>
          <div className="right-menu">
              <a className="signin-btn"
                onClick={() =>
                  axios
                    .get(
                      "https://webapi-backend.herokuapp.com/api/logout"
                    )
                    .then(res => (window.location = "/"))
                }
              >
                Logout
              </a>
              <a href={`/users/${this.state.userProfile}`} className="profile-btn">
                My Profile
              </a>
            <a href="/addpost" className="register-btn">
              Post an Ad
            </a>
          </div>
        </header>
      </div>
    );
  }
}
