import React, { Component } from "react";
import  { Redirect } from 'react-router-dom'
import ReactDOM from "react-dom";
import axios from "axios";
import qs from "query-string";
import {storage} from '../firebase';

export default class AddPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      price: "",
      category: "",
      condition: "",
      phone: "",
      city: "",
      description: "",
      url: '',
      image: null,
      postdata: null,
      success: false,
      isloggedin: true,
      tick: false
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);

    this.imageHandler = this.imageHandler.bind(this);
    this.handleUpload = this.handleUpload.bind(this);

    //check if user is logged in
    axios.get("https://webapi-frontend.herokuapp.com/api/isloggedin").then(res => {
      if (!res.data) {
        return this.setState({ isloggedin: false });
      }
    });
  }

  //handles changing of all form elements except image
  changeHandler(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  //handles the changing of image
  imageHandler = e => {
   if (e.target.files[0]) {
     const image = e.target.files[0];
     this.setState(() => ({image}));
   }
 }

 //this function uploads image to firebase and gets URL
 handleUpload = () => {
     const {image} = this.state;
     const uploadTask = storage.ref(`images/${image.name}`).put(image);
     uploadTask.on('state_changed',
     (snapshot) => {
       // progrss function ....
       const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
       this.setState({progress});
     },
     (error) => {
          // error function ....
       console.log(error);
     },
   () => {
       // complete function ....
       storage.ref('images').child(image.name).getDownloadURL().then(url => {

           this.setState({url});
           this.setState({tick: true});
           console.log(this.state.tick)
       })
   });
 }

 //this function runs when user submits posts
  submitHandler(e) {
    e.preventDefault();
    axios.post("https://webapi-frontend.herokuapp.com/api/addpost", this.state).then(result => {
      if (result.data.errors) {
        return this.setState(result.data);
      }
      return this.setState({
        postdata: result.data,
        errors: null,
        success: true
      });
    });
  }



  render() {
    const { match, history } = this.props;
    return this.state.isloggedin ? (
      <div className="addpost-page">
        <h1>Post a New Advertisement</h1>
        <div className="addpost">
          <div className="form">
            <form className="addpost-form">

              <label>
                <h2>Title:</h2>
                {this.state.errors &&
                  this.state.errors.title && (
                    <p>{this.state.errors.title.msg}</p>
                  )} <br />
                <input
                  type="text"
                  onChange={this.changeHandler}
                  name="title"
                  id="title"
                />
              </label>

              <label>
                <h2>Price (£):</h2>
                {this.state.errors &&
                  this.state.errors.price && (
                    <p>{this.state.errors.price.msg}</p>
                  )} <br />
                <input
                  type="text"
                  name="price"
                  onChange={this.changeHandler}
                  id="price"
                />
              </label>
              <label>
                <h2>Add Image:</h2>
                <p id="text3">Please click upload after selecting file</p><br />
                {this.state.errors &&
                  this.state.errors.image && (
                    <p>{this.state.errors.image.msg}</p>
                  )} <br />
                <input type="file" name="url" id="url" onChange={this.imageHandler} />
                <div className="uploadbut">
                <label id="upload" onClick={this.handleUpload}>UPLOAD IMAGE  { this.state.tick ? <i style={{color:'#51ec51'}} className="fas fa-check"></i>: "" }</label>
                </div>
              </label>
              <label>

                <h2>Category:</h2>
                {this.state.errors &&
                  this.state.errors.category && (
                    <p>{this.state.errors.category.msg}</p>
                  )}<br />
                <select
                  onChange={this.changeHandler}
                  id="category"
                  name="category"
                >
                  <option value="">Select</option>
                  <option value="electronics">Electronics</option>
                  <option value="books">Books</option>
                  <option value="vehicles">Vehicles</option>
                  <option value="clothing">Clothing</option>
                  <option value="collectibles">Collectibles</option>
                  <option value="furniture">Furniture</option>
                  <option value="shoes">Shoes</option>
                  <option value="kitchen">Kitchen</option>
                  <option value="baby \& toys">Baby & Toys</option>
                  <option value="sports">Sports</option>
                  <option value="appliances">Appliances</option>
                  <option value="accessories">Accessories</option>
                </select>
              </label>
              <br />

              <label>

                <h2>Phone Number:</h2>
                {this.state.errors &&
                  this.state.errors.phone && (
                    <p>{this.state.errors.phone.msg}</p>
                  )} <br />
                <input
                  type="tel"
                  name="phone"
                  onChange={this.changeHandler}
                  id="phone"
                />
              </label>
              <label>

                <h2>City:</h2>
                {this.state.errors &&
                  this.state.errors.city && (
                    <p>{this.state.errors.city.msg}</p>
                  )} <br />
                <input
                  type="text"
                  name="city"
                  onChange={this.changeHandler}
                  id="city"
                />
              </label>

              <label>
                <h2>Description:</h2><br />
                <textarea
                  name="description"
                  onChange={this.changeHandler}
                  id="city"
                />
              </label>

              <label>
                <h2>Condition:</h2><br />
                <select
                  name="condition"
                  onChange={this.changeHandler}
                  id="condition"
                ><option value="">Select</option>
                  <option value="Brand new">Brand new</option>
                  <option value="Slightly used">Slightly used</option>
                  <option value="Used">Used</option>
                </select>
              </label>
              <button onClick={this.submitHandler} >Post</button>
              {this.state.success && <p>Your post is now live!</p>}
            </form>
          </div>
        </div>
      </div>
    ) : (
      <Redirect to='/login'  />
    );
  }
}
