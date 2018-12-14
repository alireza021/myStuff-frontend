import React, { Component } from "react";
import ReactDOM from "react-dom";
import {Link} from 'react-router-dom'
import axios from 'axios';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      categoriesData: '',
      isloggedin: true
    };


//check if user is logged in
  axios
      .get("https://webapi-frontend.herokuapp.com/api/isloggedin")
      .then(res => {
        if (!res.data) {
          return this.setState({ isloggedin: false });
        }
      });
  }


  componentDidMount(){
    const {match, history} = this.props
    const self = this;

    //get the name of all the catogories
    axios.get(`https://webapi-frontend.herokuapp.com/api/categories`)
      .then(function (response) {
        // handle success
        self.setState({
          categoriesData: response.data
        }, () => {
            console.log(self.state);
        })
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      console.log(match.params.category);
  }

//this function loops over all the available catogories and displays their names
  loopCategories = () => {
    const {match, history} = this.props
    if(this.state.categoriesData != ''){
      return this.state.categoriesData.map((category, i) => {
        return (
          <div className="categories" key={i}>
            <a href={`/categories/${category.slug}`} className="title">{category.title}</a>
          </div>
        );
      });
    } else {
      return 'LOADING'
    }
  };


  render() {
    return (

      <div className="home">
        <div className="container">
          <h1>
            Buy & Sell <br /> Anything
          </h1>
          <section className="links">{this.loopCategories()}</section>
          <section className="trending">
            <input type="text" name="search" className="search" />
          </section>
        </div>
      </div>
    )
  }
}
