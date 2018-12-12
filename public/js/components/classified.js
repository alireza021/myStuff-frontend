webpackJsonp([0],{

/***/ 252:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(9);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(30);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(83);

var _Header = __webpack_require__(279);

var _Header2 = _interopRequireDefault(_Header);

var _Home = __webpack_require__(284);

var _Home2 = _interopRequireDefault(_Home);

var _Details = __webpack_require__(282);

var _Details2 = _interopRequireDefault(_Details);

var _Category = __webpack_require__(281);

var _Category2 = _interopRequireDefault(_Category);

var _Login = __webpack_require__(285);

var _Login2 = _interopRequireDefault(_Login);

var _Register = __webpack_require__(286);

var _Register2 = _interopRequireDefault(_Register);

var _AddPost = __webpack_require__(280);

var _AddPost2 = _interopRequireDefault(_AddPost);

var _Error = __webpack_require__(283);

var _Error2 = _interopRequireDefault(_Error);

var _UserItems = __webpack_require__(287);

var _UserItems2 = _interopRequireDefault(_UserItems);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.state = {};
    return _this;
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        _reactRouterDom.BrowserRouter,
        null,
        _react2.default.createElement(
          "div",
          null,
          _react2.default.createElement(_reactRouterDom.Route, { path: "/", component: _Header2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: "/", component: _Home2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: "/home", component: _Home2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: "/login", component: _Login2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: "/users/:user", component: _UserItems2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: "/register", component: _Register2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: "/addpost", component: _AddPost2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: "/categories/:category", component: _Category2.default }),
          _react2.default.createElement(_reactRouterDom.Route, {
            exact: true,
            path: "/categories/:category/:item",
            component: _Details2.default
          })
        )
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;

/***/ }),

/***/ 277:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(9);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(30);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = __webpack_require__(252);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = document.getElementById('app');

_reactDom2.default.render(_react2.default.createElement(_App2.default, null), app);

/***/ }),

/***/ 278:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = exports.storage = undefined;

var _app = __webpack_require__(505);

var _app2 = _interopRequireDefault(_app);

__webpack_require__(506);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var config = {
    apiKey: "AIzaSyDKSpvazJheL1E1sACneja6RItnoZH-N0k",
    authDomain: "mystuff-309c8.firebaseapp.com",
    databaseURL: "https://mystuff-309c8.firebaseio.com",
    projectId: "mystuff-309c8",
    storageBucket: "mystuff-309c8.appspot.com",
    messagingSenderId: "1000986675085"
};
_app2.default.initializeApp(config);

var storage = _app2.default.storage();

exports.storage = storage;
exports.default = _app2.default;

/***/ }),

/***/ 279:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(9);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(30);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(83);

var _axios = __webpack_require__(44);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header(props) {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));

    _this.state = {
      isloggedin: true,
      userProfile: ""
    };

    _axios2.default.get("https://webapi-backend.herokuapp.com/api/isloggedin").then(function (res) {
      if (!res.data) {
        return _this.setState({ isloggedin: false });
      }
    });
    return _this;
  }

  _createClass(Header, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var _props = this.props,
          match = _props.match,
          history = _props.history;

      var self = this;
      //get details of selected item
      _axios2.default.get("https://webapi-backend.herokuapp.com/api/profile").then(function (response) {
        // handle success
        self.setState({
          userProfile: response.data
        }, function () {
          console.log(self.state);
        });
      }).catch(function (error) {
        // handle error
        console.log(error);
      });
      console.log(this.state.userProfile);
    }
  }, {
    key: "render",
    value: function render() {
      var _props2 = this.props,
          match = _props2.match,
          history = _props2.history;

      return !this.state.isloggedin ? _react2.default.createElement(
        "div",
        { className: "container" },
        _react2.default.createElement(
          "header",
          null,
          _react2.default.createElement(
            "div",
            { className: "left-menu" },
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: "/home", className: "logo" },
              "MyStuff"
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "right-menu" },
            _react2.default.createElement(
              "a",
              { href: "/login", className: "signin-btn" },
              "Sign In"
            ),
            _react2.default.createElement(
              "a",
              { href: "/register", className: "register-btn" },
              "Register"
            )
          )
        )
      ) : _react2.default.createElement(
        "div",
        { className: "container" },
        _react2.default.createElement(
          "header",
          null,
          _react2.default.createElement(
            "div",
            { className: "left-menu" },
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: "/home", className: "logo" },
              "MyStuff"
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "right-menu" },
            _react2.default.createElement(
              "a",
              { className: "signin-btn",
                onClick: function onClick() {
                  return _axios2.default.get("https://webapi-backend.herokuapp.com/api/logout").then(function (res) {
                    return window.location = "/";
                  });
                }
              },
              "Logout"
            ),
            _react2.default.createElement(
              "a",
              { href: "/users/" + this.state.userProfile, className: "profile-btn" },
              "My Profile"
            ),
            _react2.default.createElement(
              "a",
              { href: "/addpost", className: "register-btn" },
              "Post an Ad"
            )
          )
        )
      );
    }
  }]);

  return Header;
}(_react.Component);

exports.default = Header;

/***/ }),

/***/ 280:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(9);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(83);

var _reactDom = __webpack_require__(30);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _axios = __webpack_require__(44);

var _axios2 = _interopRequireDefault(_axios);

var _queryString = __webpack_require__(141);

var _queryString2 = _interopRequireDefault(_queryString);

var _firebase = __webpack_require__(278);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AddPost = function (_Component) {
  _inherits(AddPost, _Component);

  function AddPost(props) {
    _classCallCheck(this, AddPost);

    var _this = _possibleConstructorReturn(this, (AddPost.__proto__ || Object.getPrototypeOf(AddPost)).call(this, props));

    _this.imageHandler = function (e) {
      if (e.target.files[0]) {
        var image = e.target.files[0];
        _this.setState(function () {
          return { image: image };
        });
      }
    };

    _this.handleUpload = function () {
      var image = _this.state.image;

      var uploadTask = _firebase.storage.ref("images/" + image.name).put(image);
      uploadTask.on('state_changed', function (snapshot) {
        // progrss function ....
        var progress = Math.round(snapshot.bytesTransferred / snapshot.totalBytes * 100);
        _this.setState({ progress: progress });
      }, function (error) {
        // error function ....
        console.log(error);
      }, function () {
        // complete function ....
        _firebase.storage.ref('images').child(image.name).getDownloadURL().then(function (url) {

          _this.setState({ url: url });
          _this.setState({ tick: true });
          console.log(_this.state.tick);
        });
      });
    };

    _this.state = {
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
    _this.changeHandler = _this.changeHandler.bind(_this);
    _this.submitHandler = _this.submitHandler.bind(_this);

    _this.imageHandler = _this.imageHandler.bind(_this);
    _this.handleUpload = _this.handleUpload.bind(_this);

    _axios2.default.get("https://webapi-backend.herokuapp.com/api/isloggedin").then(function (res) {
      if (!res.data) {
        return _this.setState({ isloggedin: false });
      }
    });
    return _this;
  }

  _createClass(AddPost, [{
    key: "changeHandler",
    value: function changeHandler(e) {
      this.setState(_defineProperty({}, e.target.name, e.target.value));
    }
  }, {
    key: "submitHandler",
    value: function submitHandler(e) {
      var _this2 = this;

      e.preventDefault();
      _axios2.default.post("https://webapi-backend.herokuapp.com/api/addpost", this.state).then(function (result) {
        if (result.data.errors) {
          return _this2.setState(result.data);
        }
        return _this2.setState({
          postdata: result.data,
          errors: null,
          success: true
        });
      });
    }
  }, {
    key: "uploadAndSubmit",
    value: function uploadAndSubmit(e) {}
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          match = _props.match,
          history = _props.history;

      return this.state.isloggedin ? _react2.default.createElement(
        "div",
        { className: "addpost-page" },
        _react2.default.createElement(
          "h1",
          null,
          "Post a New Advertisement"
        ),
        _react2.default.createElement(
          "div",
          { className: "addpost" },
          _react2.default.createElement(
            "div",
            { className: "form" },
            _react2.default.createElement(
              "form",
              { className: "addpost-form" },
              this.state.success && _react2.default.createElement(
                "p",
                null,
                "Your post is now live!"
              ),
              _react2.default.createElement(
                "label",
                null,
                _react2.default.createElement(
                  "h2",
                  null,
                  "Title:"
                ),
                this.state.errors && this.state.errors.title && _react2.default.createElement(
                  "p",
                  null,
                  this.state.errors.title.msg
                ),
                " ",
                _react2.default.createElement("br", null),
                _react2.default.createElement("input", {
                  type: "text",
                  onChange: this.changeHandler,
                  name: "title",
                  id: "title"
                })
              ),
              _react2.default.createElement(
                "label",
                null,
                _react2.default.createElement(
                  "h2",
                  null,
                  "Price (\xA3):"
                ),
                this.state.errors && this.state.errors.price && _react2.default.createElement(
                  "p",
                  null,
                  this.state.errors.price.msg
                ),
                " ",
                _react2.default.createElement("br", null),
                _react2.default.createElement("input", {
                  type: "text",
                  name: "price",
                  onChange: this.changeHandler,
                  id: "price"
                })
              ),
              _react2.default.createElement(
                "label",
                null,
                _react2.default.createElement(
                  "h2",
                  null,
                  "Add Image:"
                ),
                _react2.default.createElement(
                  "p",
                  { id: "text3" },
                  "Please click upload after selecting file"
                ),
                _react2.default.createElement("br", null),
                this.state.errors && this.state.errors.image && _react2.default.createElement(
                  "p",
                  null,
                  this.state.errors.image.msg
                ),
                " ",
                _react2.default.createElement("br", null),
                _react2.default.createElement("input", { type: "file", name: "url", id: "url", onChange: this.imageHandler }),
                _react2.default.createElement(
                  "div",
                  { className: "uploadbut" },
                  _react2.default.createElement(
                    "label",
                    { id: "upload", onClick: this.handleUpload },
                    "UPLOAD IMAGE  ",
                    this.state.tick ? _react2.default.createElement("i", { style: { color: '#51ec51' }, className: "fas fa-check" }) : ""
                  )
                )
              ),
              _react2.default.createElement(
                "label",
                null,
                _react2.default.createElement(
                  "h2",
                  null,
                  "Category:"
                ),
                this.state.errors && this.state.errors.category && _react2.default.createElement(
                  "p",
                  null,
                  this.state.errors.category.msg
                ),
                _react2.default.createElement("br", null),
                _react2.default.createElement(
                  "select",
                  {
                    onChange: this.changeHandler,
                    id: "category",
                    name: "category"
                  },
                  _react2.default.createElement(
                    "option",
                    { value: "" },
                    "Select"
                  ),
                  _react2.default.createElement(
                    "option",
                    { value: "electronics" },
                    "Electronics"
                  ),
                  _react2.default.createElement(
                    "option",
                    { value: "books" },
                    "Books"
                  ),
                  _react2.default.createElement(
                    "option",
                    { value: "vehicles" },
                    "Vehicles"
                  ),
                  _react2.default.createElement(
                    "option",
                    { value: "clothing" },
                    "Clothing"
                  ),
                  _react2.default.createElement(
                    "option",
                    { value: "collectibles" },
                    "Collectibles"
                  ),
                  _react2.default.createElement(
                    "option",
                    { value: "furniture" },
                    "Furniture"
                  ),
                  _react2.default.createElement(
                    "option",
                    { value: "shoes" },
                    "Shoes"
                  ),
                  _react2.default.createElement(
                    "option",
                    { value: "kitchen" },
                    "Kitchen"
                  ),
                  _react2.default.createElement(
                    "option",
                    { value: "baby \\& toys" },
                    "Baby & Toys"
                  ),
                  _react2.default.createElement(
                    "option",
                    { value: "sports" },
                    "Sports"
                  ),
                  _react2.default.createElement(
                    "option",
                    { value: "appliances" },
                    "Appliances"
                  ),
                  _react2.default.createElement(
                    "option",
                    { value: "accessories" },
                    "Accessories"
                  )
                )
              ),
              _react2.default.createElement("br", null),
              _react2.default.createElement(
                "label",
                null,
                _react2.default.createElement(
                  "h2",
                  null,
                  "Phone Number:"
                ),
                this.state.errors && this.state.errors.phone && _react2.default.createElement(
                  "p",
                  null,
                  this.state.errors.phone.msg
                ),
                " ",
                _react2.default.createElement("br", null),
                _react2.default.createElement("input", {
                  type: "tel",
                  name: "phone",
                  onChange: this.changeHandler,
                  id: "phone"
                })
              ),
              _react2.default.createElement(
                "label",
                null,
                _react2.default.createElement(
                  "h2",
                  null,
                  "City:"
                ),
                this.state.errors && this.state.errors.city && _react2.default.createElement(
                  "p",
                  null,
                  this.state.errors.city.msg
                ),
                " ",
                _react2.default.createElement("br", null),
                _react2.default.createElement("input", {
                  type: "text",
                  name: "city",
                  onChange: this.changeHandler,
                  id: "city"
                })
              ),
              _react2.default.createElement(
                "label",
                null,
                _react2.default.createElement(
                  "h2",
                  null,
                  "Description:"
                ),
                _react2.default.createElement("br", null),
                _react2.default.createElement("textarea", {
                  name: "description",
                  onChange: this.changeHandler,
                  id: "city"
                })
              ),
              _react2.default.createElement(
                "label",
                null,
                _react2.default.createElement(
                  "h2",
                  null,
                  "Condition:"
                ),
                _react2.default.createElement("br", null),
                _react2.default.createElement(
                  "select",
                  {
                    name: "condition",
                    onChange: this.changeHandler,
                    id: "condition"
                  },
                  _react2.default.createElement(
                    "option",
                    { value: "" },
                    "Select"
                  ),
                  _react2.default.createElement(
                    "option",
                    { value: "Brand new" },
                    "Brand new"
                  ),
                  _react2.default.createElement(
                    "option",
                    { value: "Slightly used" },
                    "Slightly used"
                  ),
                  _react2.default.createElement(
                    "option",
                    { value: "Used" },
                    "Used"
                  )
                )
              ),
              _react2.default.createElement(
                "button",
                { onClick: this.submitHandler },
                "Post"
              )
            )
          )
        )
      ) : _react2.default.createElement(_reactRouterDom.Redirect, { to: "/login" });
    }
  }]);

  return AddPost;
}(_react.Component);

exports.default = AddPost;

/***/ }),

/***/ 281:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(9);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(30);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _axios = __webpack_require__(44);

var _axios2 = _interopRequireDefault(_axios);

var _queryString = __webpack_require__(141);

var _queryString2 = _interopRequireDefault(_queryString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Category = function (_Component) {
  _inherits(Category, _Component);

  function Category() {
    _classCallCheck(this, Category);

    var _this = _possibleConstructorReturn(this, (Category.__proto__ || Object.getPrototypeOf(Category)).call(this));

    _this.loopItems = function () {
      var _this$props = _this.props,
          match = _this$props.match,
          history = _this$props.history;


      if (_this.state.itemsData != undefined) {
        return _this.state.itemsData.map(function (item, i) {
          return _react2.default.createElement(
            "a",
            { href: "/categories/" + match.params.category + "/" + item._id, className: "item", key: i },
            _react2.default.createElement(
              "div",
              {
                className: "image",
                style: {
                  backgroundImage: "url('" + item.url + "')"
                }
              },
              _react2.default.createElement(
                "div",
                { className: "price" },
                "\xA3",
                item.price
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "details" },
              _react2.default.createElement("i", { className: "far fa-star" }),
              _react2.default.createElement(
                "h5",
                null,
                item.title
              ),
              _react2.default.createElement(
                "h6",
                null,
                item.city
              )
            )
          );
        });
      }
    };

    _this.handleChange = function (event) {
      var name = event.target.name;
      var value = event.target.type == "checkbox" ? event.target.check : event.target.value;

      _this.setState(_defineProperty({}, name, value), function () {
        console.log(_this.state);
      });
    };

    _this.state = {};
    return _this;
  }

  _createClass(Category, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var _props = this.props,
          match = _props.match,
          history = _props.history;

      var self = this;
      var queryParams = _queryString2.default.parse(this.props.location.search);

      //display all items in the category
      _axios2.default.get("https://webapi-backend.herokuapp.com/api/categories/" + match.params.category).then(function (response) {
        var newData = response.data.filter(function (item) {
          return item.category == match.params.category;
        });
        // handle success
        self.setState({
          itemsData: newData
        }, function () {
          console.log(self.state);
        });
      }).catch(function (error) {
        // handle error
        console.log(error);
      });
      console.log(this.state.itemsData);
    }

    //this function loops over the items and displays them in a specific manor


    //this functions handles any changes made to the filters on the page

  }, {
    key: "render",
    value: function render() {
      var _props2 = this.props,
          match = _props2.match,
          location = _props2.location,
          history = _props2.history;

      return _react2.default.createElement(
        "div",
        { className: "listings-page" },
        _react2.default.createElement(
          "section",
          { id: "list-view" },
          _react2.default.createElement(
            "div",
            { className: "container" },
            _react2.default.createElement(
              "div",
              { className: "white-box" },
              _react2.default.createElement(
                "section",
                { className: "all-items" },
                this.loopItems()
              )
            )
          )
        )
      );
    }
  }]);

  return Category;
}(_react.Component);

exports.default = Category;

/***/ }),

/***/ 282:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(9);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(30);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _axios = __webpack_require__(44);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Details = function (_Component) {
  _inherits(Details, _Component);

  function Details() {
    _classCallCheck(this, Details);

    var _this = _possibleConstructorReturn(this, (Details.__proto__ || Object.getPrototypeOf(Details)).call(this));

    _this.showItem = function () {
      var _this$props = _this.props,
          match = _this$props.match,
          history = _this$props.history;

      if (_this.state.itemData != undefined) {
        return _this.state.itemData.map(function (item, i) {
          return _react2.default.createElement(
            "div",
            { className: "container", key: i },
            _react2.default.createElement(
              "div",
              { className: "white-box" },
              _react2.default.createElement(
                "section",
                { className: "content-area" },
                _react2.default.createElement(
                  "div",
                  { className: "media-column" },
                  _react2.default.createElement(
                    "div",
                    { className: "gallery" },
                    _react2.default.createElement(
                      "div",
                      { className: "main-image" },
                      _react2.default.createElement(
                        "div",
                        { className: "image-1" },
                        _react2.default.createElement("img", { src: item.url || 'http://via.placeholder.com/400x300', alt: "Uploaded images" })
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  "div",
                  { className: "details-column" },
                  _react2.default.createElement(
                    "div",
                    { className: "date" },
                    "Posted: Feb 28th"
                  ),
                  _react2.default.createElement(
                    "h3",
                    { className: "title" },
                    item.title
                  ),
                  _react2.default.createElement(
                    "h4",
                    { className: "price" },
                    "\xA3",
                    item.price
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "more-details" },
                    _react2.default.createElement(
                      "div",
                      { className: "info" },
                      _react2.default.createElement(
                        "label",
                        null,
                        "Condition"
                      ),
                      _react2.default.createElement(
                        "h5",
                        null,
                        item.condition
                      )
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: "info" },
                      _react2.default.createElement(
                        "label",
                        null,
                        "City"
                      ),
                      _react2.default.createElement(
                        "h5",
                        null,
                        item.city
                      )
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: "info" },
                      _react2.default.createElement(
                        "label",
                        null,
                        "Category"
                      ),
                      _react2.default.createElement(
                        "h5",
                        null,
                        item.category
                      )
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: "info" },
                      _react2.default.createElement(
                        "label",
                        null,
                        "Seller Contact"
                      ),
                      _react2.default.createElement(
                        "h5",
                        null,
                        item.phone
                      )
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: "info email" },
                      _react2.default.createElement(
                        "label",
                        null,
                        "Seller Email"
                      ),
                      _react2.default.createElement(
                        "h5",
                        null,
                        item.user.email
                      )
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: "info email" },
                      _react2.default.createElement(
                        "label",
                        null,
                        "Seller Profile"
                      ),
                      _react2.default.createElement(
                        "h5",
                        null,
                        _react2.default.createElement(
                          "a",
                          { href: "/users/" + item.user.username },
                          item.user.username
                        )
                      )
                    )
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "description" },
                    _react2.default.createElement(
                      "label",
                      null,
                      "Description"
                    ),
                    _react2.default.createElement(
                      "p",
                      null,
                      item.description
                    )
                  )
                )
              )
            )
          );
        });
      }
    };

    _this.state = {};
    return _this;
  }

  _createClass(Details, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var _props = this.props,
          match = _props.match,
          history = _props.history;

      var self = this;

      //get details of selected item
      _axios2.default.get("https://webapi-backend.herokuapp.com/api/categories/" + match.params.category + "/" + match.params.item).then(function (response) {
        var newData = response.data.filter(function (item) {
          return item._id == match.params.item;
        });
        // handle success
        self.setState({
          itemData: newData
        }, function () {
          console.log(self.state);
        });
      }).catch(function (error) {
        // handle error
        console.log(error);
      });
      console.log(this.state.itemData);
    }
  }, {
    key: "render",
    value: function render() {
      var _props2 = this.props,
          match = _props2.match,
          location = _props2.location,
          history = _props2.history;

      return _react2.default.createElement(
        "div",
        { className: "details-page" },
        this.showItem()
      );
    }
  }]);

  return Details;
}(_react.Component);

exports.default = Details;

/***/ }),

/***/ 283:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(9);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(30);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(83);

var _axios = __webpack_require__(44);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Error = function (_Component) {
  _inherits(Error, _Component);

  function Error() {
    _classCallCheck(this, Error);

    var _this = _possibleConstructorReturn(this, (Error.__proto__ || Object.getPrototypeOf(Error)).call(this));

    _this.state = {};
    return _this;
  }

  _createClass(Error, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "error-page" },
        _react2.default.createElement(
          "div",
          { id: "notfound" },
          _react2.default.createElement(
            "div",
            { className: "notfound" },
            _react2.default.createElement(
              "div",
              { className: "notfound-404" },
              _react2.default.createElement(
                "h1",
                null,
                "Oops!"
              )
            ),
            _react2.default.createElement(
              "h2",
              null,
              "404 - Page not found"
            ),
            _react2.default.createElement(
              "p",
              null,
              "The page you are looking for might have been removed had its name changed or is temporarily unavailable."
            ),
            _react2.default.createElement(
              "a",
              { href: "/home" },
              "Go To Homepage"
            )
          )
        )
      );
    }
  }]);

  return Error;
}(_react.Component);

exports.default = Error;

/***/ }),

/***/ 284:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(9);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(30);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(83);

var _axios = __webpack_require__(44);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_Component) {
  _inherits(Home, _Component);

  function Home() {
    _classCallCheck(this, Home);

    var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this));

    _this.loopCategories = function () {
      var _this$props = _this.props,
          match = _this$props.match,
          history = _this$props.history;

      if (_this.state.categoriesData != '') {
        return _this.state.categoriesData.map(function (category, i) {
          return _react2.default.createElement(
            "div",
            { className: "categories", key: i },
            _react2.default.createElement(
              "a",
              { href: "/categories/" + category.slug, className: "title" },
              category.title
            )
          );
        });
      } else {
        return 'LOADING';
      }
    };

    _this.state = {
      categoriesData: '',
      isloggedin: true
    };

    _axios2.default.get("https://webapi-backend.herokuapp.com/api/isloggedin").then(function (res) {
      if (!res.data) {
        return _this.setState({ isloggedin: false });
      }
    });
    return _this;
  }

  _createClass(Home, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _props = this.props,
          match = _props.match,
          history = _props.history;

      var self = this;

      //get the name of all the catogories
      _axios2.default.get("https://webapi-backend.herokuapp.com/api/categories").then(function (response) {
        // handle success
        self.setState({
          categoriesData: response.data
        }, function () {
          console.log(self.state);
        });
      }).catch(function (error) {
        // handle error
        console.log(error);
      });
      console.log(match.params.category);
    }

    //this function loops over all the available catogories and displays their names

  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "home" },
        _react2.default.createElement(
          "div",
          { className: "container" },
          _react2.default.createElement(
            "h1",
            null,
            "Buy & Sell ",
            _react2.default.createElement("br", null),
            " Anything"
          ),
          _react2.default.createElement(
            "section",
            { className: "links" },
            this.loopCategories()
          ),
          _react2.default.createElement(
            "section",
            { className: "trending" },
            _react2.default.createElement("input", { type: "text", name: "search", className: "search" })
          )
        )
      );
    }
  }]);

  return Home;
}(_react.Component);

exports.default = Home;

/***/ }),

/***/ 285:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(9);

var _react2 = _interopRequireDefault(_react);

var _axios = __webpack_require__(44);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

_axios2.default.defaults.withCredentials = true;

var Login = function (_Component) {
  _inherits(Login, _Component);

  function Login(props) {
    _classCallCheck(this, Login);

    var _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props));

    _this.state = {
      password: "",
      email: "",
      error: null,
      valerrors: null
    };
    _this.changeHandler = _this.changeHandler.bind(_this);
    _this.submitHandler = _this.submitHandler.bind(_this);
    return _this;
  }

  _createClass(Login, [{
    key: "changeHandler",
    value: function changeHandler(e) {
      this.setState(_defineProperty({}, e.target.name, e.target.value));
    }
  }, {
    key: "submitHandler",
    value: function submitHandler(e) {
      var _this2 = this;

      e.preventDefault();
      _axios2.default.post("https://webapi-backend.herokuapp.com/api/login", this.state).then(function (res) {
        if (res.data.error) {
          return _this2.setState({ error: res.data.message });
        }
        if (res.data.errors) {
          return _this2.setState({ valerrors: res.data.errors });
        }
        return window.location = "/home";
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "login-new" },
        _react2.default.createElement(
          "div",
          { className: "login-page" },
          _react2.default.createElement(
            "form",
            { className: "login-form", onSubmit: this.submitHandler },
            this.state.error && _react2.default.createElement(
              "p",
              null,
              this.state.error
            ),
            _react2.default.createElement("input", {
              placeholder: "username",
              onChange: this.changeHandler,
              type: "email",
              name: "email",
              id: "email"
            }),
            this.state.valerrors && this.state.valerrors.email && _react2.default.createElement(
              "p",
              null,
              this.state.valerrors.email.msg
            ),
            _react2.default.createElement("br", null),
            _react2.default.createElement("input", {
              type: "password",
              placeholder: "password",
              onChange: this.changeHandler,
              name: "password",
              id: "password"
            }),
            this.state.valerrors && this.state.valerrors.password && _react2.default.createElement(
              "p",
              null,
              this.state.valerrors.password.msg
            ),
            _react2.default.createElement("br", null),
            _react2.default.createElement(
              "button",
              null,
              "login"
            ),
            _react2.default.createElement(
              "p",
              { className: "message" },
              "Not registered? ",
              _react2.default.createElement(
                "a",
                { href: "/register" },
                "Create an account"
              )
            )
          )
        )
      );
    }
  }]);

  return Login;
}(_react.Component);

exports.default = Login;

/***/ }),

/***/ 286:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(9);

var _react2 = _interopRequireDefault(_react);

var _axios = __webpack_require__(44);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Register = function (_Component) {
  _inherits(Register, _Component);

  function Register(props) {
    _classCallCheck(this, Register);

    var _this = _possibleConstructorReturn(this, (Register.__proto__ || Object.getPrototypeOf(Register)).call(this, props));

    _this.state = {
      username: "",
      email: "",
      firstname: "",
      lastname: "",
      password: "",
      password_con: "",
      userdata: null,
      success: false
    };
    _this.changeHandler = _this.changeHandler.bind(_this);
    _this.submitHandler = _this.submitHandler.bind(_this);
    return _this;
  }

  _createClass(Register, [{
    key: "changeHandler",
    value: function changeHandler(e) {
      this.setState(_defineProperty({}, e.target.name, e.target.value));
    }
  }, {
    key: "submitHandler",
    value: function submitHandler(e) {
      var _this2 = this;

      e.preventDefault();
      _axios2.default.post("https://webapi-backend.herokuapp.com/api/register", this.state).then(function (result) {
        if (result.data.errors) {
          return _this2.setState(result.data);
        }
        return _this2.setState({
          userdata: result.data,
          errors: null,
          success: true
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "register-page" },
        _react2.default.createElement(
          "div",
          { className: "register" },
          _react2.default.createElement(
            "div",
            { className: "form" },
            _react2.default.createElement(
              "form",
              { className: "register-form", onSubmit: this.submitHandler },
              this.state.success && _react2.default.createElement(
                "p",
                null,
                "You are successfully registerated!"
              ),
              _react2.default.createElement("input", {
                type: "text",
                placeholder: "username",
                onChange: this.changeHandler,
                name: "username",
                id: "username"
              }),
              this.state.errors && this.state.errors.username && _react2.default.createElement(
                "p",
                null,
                this.state.errors.username.msg
              ),
              _react2.default.createElement("br", null),
              _react2.default.createElement("input", {
                type: "email",
                placeholder: "email",
                name: "email",
                onChange: this.changeHandler,
                id: "emailreg"
              }),
              this.state.errors && this.state.errors.email && _react2.default.createElement(
                "p",
                null,
                this.state.errors.email.msg
              ),
              _react2.default.createElement("br", null),
              _react2.default.createElement("input", {
                type: "text",
                onChange: this.changeHandler,
                placeholder: "first name",
                name: "firstname",
                id: "firstname"
              }),
              this.state.errors && this.state.errors.firstname && _react2.default.createElement(
                "p",
                null,
                this.state.errors.firstname.msg
              ),
              _react2.default.createElement("br", null),
              _react2.default.createElement("input", {
                type: "text",
                onChange: this.changeHandler,
                placeholder: "last name",
                name: "lastname",
                id: "lastname"
              }),
              this.state.errors && this.state.errors.lastname && _react2.default.createElement(
                "p",
                null,
                this.state.errors.lastname.msg
              ),
              _react2.default.createElement("br", null),
              _react2.default.createElement("input", {
                type: "password",
                onChange: this.changeHandler,
                placeholder: "password",
                name: "password",
                id: "passwordreg"
              }),
              this.state.errors && this.state.errors.password && _react2.default.createElement(
                "p",
                null,
                this.state.errors.password.msg
              ),
              _react2.default.createElement("br", null),
              _react2.default.createElement("input", {
                type: "password",
                onChange: this.changeHandler,
                placeholder: "confirm password",
                name: "password_con",
                id: "password_con"
              }),
              this.state.errors && this.state.errors.password_con && _react2.default.createElement(
                "p",
                null,
                this.state.errors.password_con.msg
              ),
              _react2.default.createElement("br", null),
              _react2.default.createElement(
                "button",
                null,
                "create"
              ),
              _react2.default.createElement(
                "p",
                { className: "message" },
                "Already registered? ",
                _react2.default.createElement(
                  "a",
                  { href: "/login" },
                  "Sign In"
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Register;
}(_react.Component);

exports.default = Register;

/***/ }),

/***/ 287:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(9);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(30);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _axios = __webpack_require__(44);

var _axios2 = _interopRequireDefault(_axios);

var _queryString = __webpack_require__(141);

var _queryString2 = _interopRequireDefault(_queryString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UserItems = function (_Component) {
  _inherits(UserItems, _Component);

  function UserItems() {
    _classCallCheck(this, UserItems);

    var _this = _possibleConstructorReturn(this, (UserItems.__proto__ || Object.getPrototypeOf(UserItems)).call(this));

    _this.loopItems = function () {
      var _this$props = _this.props,
          match = _this$props.match,
          history = _this$props.history;

      if (_this.state.itemsData != undefined) {
        return _this.state.itemsData.map(function (item, i) {
          return _react2.default.createElement(
            "a",
            { href: "/categories/" + match.params.category + "/" + item._id, className: "item", key: i },
            _react2.default.createElement(
              "div",
              {
                className: "image",
                style: {
                  backgroundImage: "url('" + item.url + "')"
                }
              },
              _react2.default.createElement(
                "div",
                { className: "price" },
                "\xA3",
                item.price
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "details" },
              _react2.default.createElement("i", { className: "far fa-star" }),
              _react2.default.createElement(
                "h5",
                null,
                item.title
              ),
              _react2.default.createElement(
                "h6",
                null,
                item.city
              )
            )
          );
        });
      }
    };

    _this.showUser = function () {
      var _this$props2 = _this.props,
          match = _this$props2.match,
          history = _this$props2.history;

      if (_this.state.userData != undefined) {
        return _this.state.userData.map(function (user, i) {
          return _react2.default.createElement(
            "div",
            { className: "container", key: i },
            _react2.default.createElement(
              "div",
              { className: "white-box" },
              _react2.default.createElement(
                "section",
                { className: "content-area" },
                _react2.default.createElement(
                  "div",
                  { className: "details-column" },
                  _react2.default.createElement(
                    "label",
                    null,
                    "Username:"
                  ),
                  _react2.default.createElement(
                    "h3",
                    { className: "title" },
                    user.username
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "more-details" },
                    _react2.default.createElement(
                      "div",
                      { className: "info" },
                      _react2.default.createElement(
                        "label",
                        null,
                        "First Name:"
                      ),
                      _react2.default.createElement(
                        "h5",
                        null,
                        user.firstname
                      )
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: "info" },
                      _react2.default.createElement(
                        "label",
                        null,
                        "Last Name:"
                      ),
                      _react2.default.createElement(
                        "h5",
                        null,
                        user.lastname
                      )
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: "info email" },
                      _react2.default.createElement(
                        "label",
                        null,
                        "Email:"
                      ),
                      _react2.default.createElement(
                        "h5",
                        null,
                        user.email
                      )
                    )
                  )
                )
              )
            )
          );
        });
      }
    };

    _this.state = {};
    return _this;
  }

  _createClass(UserItems, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var _props = this.props,
          match = _props.match,
          history = _props.history;

      var self = this;
      var queryParams = _queryString2.default.parse(this.props.location.search);

      //display all items in the category
      _axios2.default.get("https://webapi-backend.herokuapp.com/api/users/" + match.params.user + "/details").then(function (response) {
        var newData = response.data.filter(function (user) {
          return user.username == match.params.user;
        });
        // handle success
        self.setState({
          userData: newData
        }, function () {
          console.log(self.state);
        });
      }).catch(function (error) {
        // handle error
        console.log(error);
      });
      console.log(this.state.userData);

      _axios2.default.get("https://webapi-backend.herokuapp.com/api/categories/:category").then(function (response) {
        var newData = response.data.filter(function (item) {
          return item.user.username == match.params.user;
        });
        // handle success
        self.setState({
          itemsData: newData
        }, function () {
          console.log(self.state);
        });
      }).catch(function (error) {
        // handle error
        console.log(error);
      });
      console.log(this.state.itemsData);
    }

    //this function loops over the items and displays them in a specific manor

  }, {
    key: "render",
    value: function render() {
      var _props2 = this.props,
          match = _props2.match,
          location = _props2.location,
          history = _props2.history;

      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          "div",
          { className: "user-page" },
          this.showUser()
        ),
        _react2.default.createElement(
          "div",
          { className: "listings-page" },
          _react2.default.createElement(
            "section",
            { id: "list-view" },
            _react2.default.createElement(
              "div",
              { className: "container" },
              _react2.default.createElement(
                "div",
                { className: "white-box" },
                _react2.default.createElement(
                  "h3",
                  null,
                  "Items listed by user"
                ),
                _react2.default.createElement(
                  "section",
                  { className: "all-items" },
                  this.loopItems()
                )
              )
            )
          )
        )
      );
    }
  }]);

  return UserItems;
}(_react.Component);

exports.default = UserItems;

/***/ })

},[277]);