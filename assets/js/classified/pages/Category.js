import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import qs from "query-string";

export default class Category extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  componentWillMount() {
    const { match, history } = this.props;
    const self = this;
    const queryParams = qs.parse(this.props.location.search);

    //display all items in the category
      axios
        .get(`http://localhost:8000/api/categories/${match.params.category}`)
        .then(function(response) {
          const newData = response.data.filter((item) => {
            return item.category == match.params.category
          })
          // handle success
          self.setState(
            {
              itemsData: newData,
            },
            () => {
              console.log(self.state);
            }
          );
        })
        .catch(function(error) {
          // handle error
          console.log(error);
        });
        console.log(this.state.itemsData);
    }


  //this function loops over the items and displays them in a specific manor
  loopItems = () => {
    const { match, history } = this.props;

    if (this.state.itemsData != undefined) {
      return this.state.itemsData.map((item, i) => {
        return (
          <a href={`/categories/${match.params.category}/${item._id}`} className="item" key={i}>
            <div
              className="image"
            style={{
                backgroundImage: `url('${item.url}')`
             }}
            >
              <div className="price">£{item.price}</div>
            </div>
            <div className="details">
              <i className="far fa-star" />
              <h5>{item.title}</h5>
              <h6>{item.city}</h6>
            </div>
          </a>
        );
      });
    }
  };

//this functions handles any changes made to the filters on the page
  handleChange = event => {
    const name = event.target.name;
    const value =
      event.target.type == "checkbox" ? event.target.check : event.target.value;

    this.setState(
      {
        [name]: value
      },
      () => {
        console.log(this.state);
      }
    );
  };


  render() {
    const { match, location, history } = this.props;
    return (
      <div className="listings-page">
        <section id="list-view">
          <div className="container">
            <div className="white-box">
              <section className="all-items">{this.loopItems()}</section>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
