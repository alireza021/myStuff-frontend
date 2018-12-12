import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class Gallery extends Component {
  constructor() {
    super();
    this.state = {
      allImgs: "",
      currentImg: "",
      currentIndex: 0
    };
  }
  componentWillMount() {
    const allImgs = [
      "https://images.idgesg.net/images/article/2017/11/iphone-x-lockscreen-100742319-large.jpg",
      "https://ksassets.timeincuk.net/wp/uploads/sites/54/2017/11/DSCF9432-1024x683.jpg",
      "https://betanews.com/wp-content/uploads/2017/11/iPhone-X-Back-Panel.jpg",
      "https://cdn2.macworld.co.uk/cmsdata/reviews/3663947/iphone_x_review06.jpg",
      "https://www.cnetfrance.fr/i/edit/2017/10/apple-iphone-prise-en-main.jpg",
      "https://cdn.cultofmac.com/wp-content/uploads/2017/12/iPhone-X-couch-780x536.jpg"
    ];
    this.setState({
      allImgs,
      currentImg: allImgs[this.state.currentIndex]
    });
  }

  //image looper
  allImgsLoop = () => {
    return this.state.allImgs.map((item, i) => {
      return (
        <div
          key={i}
          onClick={this.clickedThumb.bind(null, i)}
          className="thumb-img"
          style={{
            backgroundImage: `url('${item}')`
          }}
        />
      );
    });
  };

  //slider buttons
  nextBtn = () => {
    if (this.state.currentIndex != this.state.allImgs.length - 1) {
      this.setState({
        currentIndex: this.state.currentIndex + 1
      });
    } else {
      this.setState({
        currentIndex: 0
      });
    }
  };

  prevBtn = () => {
    if (this.state.currentIndex != 0) {
      this.setState({
        currentIndex: this.state.currentIndex - 1
      });
    } else {
      this.setState({
        currentIndex: this.state.allImgs.length - 1
      });
    }
  };

  clickedThumb = index => {
    this.setState({
      currentIndex: index
    });
  };
  render() {
    const { match, location, history } = this.props;
    return (
      <div className="gallery">
        <div className="slider">
          <div className="main-image">
            <div className="arrows left-arrow" onClick={this.prevBtn}>
              <i className="fas fa-chevron-left" />
            </div>
            <div className="arrows right-arrow" onClick={this.nextBtn}>
              <i className="fas fa-chevron-right" />
            </div>
            <div
              className="image-1"
              style={{
                backgroundImage: `url('${
                  this.state.allImgs[this.state.currentIndex]
                }')`
              }}
            />
          </div>
        </div>

        <div className="thumbnails">{this.allImgsLoop()}</div>
      </div>
    );
  }
}
