import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import qs from "query-string";

export default class UserItems extends Component {
  constructor() {
    super();
    this.state = {

    };
  }

  componentWillMount() {
    const { match, history } = this.props;
    const self = this;
    const queryParams = qs.parse(this.props.location.search);

    //display all items posted by selected user
      axios
        .get(`https://webapi-frontend.herokuapp.com/api/users/${match.params.user}/details`)
        .then(function(response) {
          const newData = response.data.filter((user) => {
            return user.username == match.params.user
          })
          // handle success
          self.setState(
            {
              userData: newData,
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
        console.log(this.state.userData);


        axios
          .get(`https://webapi-frontend.herokuapp.com/api/categories/:category`)
          .then(function(response) {
            const newData = response.data.filter((item) => {
              return item.user.username == match.params.user
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
          <a href={`/categories/${item.category}/${item._id}`} className="item" key={i}>
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





  showUser = () => {

    const { match, history } = this.props;
    if (this.state.userData != undefined) {
      return this.state.userData.map((user, i) => {
        return (
            <div className="container" key={i}>
              <div className="white-box">

                <section className="content-area">
                  <div className="details-column">
                    <label>Username:</label>
                    <h3 className="title">{user.username}</h3>
                    <div className="more-details">
                    <div className="info">
                      <label>First Name:</label>
                      <h5>{user.firstname}</h5>
                    </div>
                      <div className="info">
                        <label>Last Name:</label>
                        <h5>{user.lastname}</h5>
                      </div>

                      <div className="info email">
                        <label>Email:</label>
                        <h5>{user.email}</h5>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>

        );
      });
    }
  };


  render() {
    const { match, location, history } = this.props;
    return (
      <div>
      <div className="user-page">
      {this.showUser()}
      </div>

      <div className="listings-page">
        <section id="list-view">
          <div className="container">
            <div className="white-box">
            <h3>Items listed by user</h3>
              <section className="all-items">{this.loopItems()}</section>
            </div>
          </div>
        </section>
      </div>
      </div>
    );
  }
}
