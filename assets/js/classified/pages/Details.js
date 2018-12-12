import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

export default class Details extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentWillMount() {
    const { match, history } = this.props;
    const self = this;

    //get details of selected item
    axios
      .get(
        `https://webapi-backend.herokuapp.com/api/categories/${match.params.category}/${
          match.params.item
        }`
      )
      .then(function(response) {
        const newData = response.data.filter(item => {
          return item._id == match.params.item;
        });
        // handle success
        self.setState(
          {
            itemData: newData
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
    console.log(this.state.itemData);
  }

  showItem = () => {
    const { match, history } = this.props;
    if (this.state.itemData != undefined) {
      return this.state.itemData.map((item, i) => {
        return (
          <div className="container" key={i}>
            <div className="white-box">
              <section className="content-area">
                <div className="media-column">
                  <div className="gallery">
                    <div className="main-image">
                        <div className="image-1">
                         <img  src={item.url || 'http://via.placeholder.com/400x300'} alt="Uploaded images"/>
                        </div>
                    </div>
                  </div>
                </div>
                <div className="details-column">
                  <div className="date">Posted: Feb 28th</div>
                  <h3 className="title">{item.title}</h3>
                  <h4 className="price">£{item.price}</h4>
                  <div className="more-details">
                    <div className="info">
                      <label>Condition</label>
                      <h5>{item.condition}</h5>
                    </div>
                    <div className="info">
                      <label>City</label>
                      <h5>{item.city}</h5>
                    </div>
                    <div className="info">
                      <label>Category</label>
                      <h5>{item.category}</h5>
                    </div>

                    <div className="info">
                      <label>Seller Contact</label>
                      <h5>{item.phone}</h5>
                    </div>
                    <div className="info email">
                      <label>Seller Email</label>
                      <h5>{item.user.email}</h5>
                    </div>
                    <div className="info email">
                      <label>Seller Profile</label>
                      <h5>
                        <a href={`/users/${item.user.username}`}>
                          {item.user.username}
                        </a>
                      </h5>
                    </div>
                  </div>

                  <div className="description">
                    <label>Description</label>
                    <p>{item.description}</p>
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
    return <div className="details-page">{this.showItem()}</div>;
  }
}
