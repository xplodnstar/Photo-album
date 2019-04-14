webpackHotUpdate("main",{

/***/ "./src/components/Image.js":
/*!*********************************!*\
  !*** ./src/components/Image.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_punchcode_PunchCode_albums_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_punchcode_PunchCode_albums_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_punchcode_PunchCode_albums_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_punchcode_PunchCode_albums_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_punchcode_PunchCode_albums_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.mjs");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _styles_Image_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles//Image.css */ "./src/styles/Image.css");
/* harmony import */ var _styles_Image_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_Image_css__WEBPACK_IMPORTED_MODULE_9__);





var _jsxFileName = "/Users/punchcode/PunchCode/albums/src/components/Image.js";







var Image =
/*#__PURE__*/
function (_Component) {
  Object(_Users_punchcode_PunchCode_albums_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Image, _Component);

  function Image() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_punchcode_PunchCode_albums_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Image);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_punchcode_PunchCode_albums_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_Users_punchcode_PunchCode_albums_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Image)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      url: '',
      name: '',
      album: '',
      current: '',
      value: '',
      prev: '',
      next: '' // current = image index. 
      // prev/next is +- 1. 
      // Need to translate index no to id for use in link.
      // create left and right stops

    };

    _this.getImage = function (id) {
      axios__WEBPACK_IMPORTED_MODULE_8___default.a.get("http://localhost:3001/images/".concat(id)).then(function (resp) {
        _this.setState({
          url: resp.data.url,
          name: resp.data.name,
          album: resp.data.albumId,
          current: ''
        });
      });
    };

    _this.goToPrevSlide = function () {
      if (_this.state.current === 0) return;

      _this.setState(function (prevState) {
        return {
          current: prevState.current - 1,
          value: prevState.value + _this.slideWidth()
        };
      });
    };

    _this.goToNextSlide = function () {
      if (_this.state.current === _this.state.images.length - 1) {
        return _this.setState({
          current: 0,
          value: 0
        });
      }

      _this.setState(function (prevState) {
        return {
          current: prevState.current + 1,
          value: prevState.value + -_this.slideWidth()
        };
      });
    };

    _this.slideWidth = function () {
      return document.querySelector('.slide').clientWidth;
    };

    return _this;
  }

  Object(_Users_punchcode_PunchCode_albums_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Image, [{
    key: "componentDidMount",
    //     var Slide = ({ image }) => {
    //     const styles = {
    //         backgroundImage: `url(${image})`,
    //         backgroundSize: 'cover',
    //         backgroundRepeat: 'no-repeat',
    //         backgroundPosition: '50% 60%'
    //     }
    //     return <div className="slide" style={styles}></div>
    // }
    value: function componentDidMount() {
      this.getImage(this.props.match.params.id);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(newProps) {
      if (newProps.match.params.id !== this.props.match.params.id) {
        this.getImage(newProps.match.params.id);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", {
        className: "imageTitle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, this.state.name)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "picBox",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "lArr",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Link"], {
        to: "/image/" + this.goToPrevSlide,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__["FaArrowLeft"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "imageBox",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: this.state.url,
        alt: this.state.name,
        id: "picture",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "rArr",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Link"], {
        to: "/image/" + this.goToNextSlide,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__["FaArrowRight"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      })))));
    }
  }]);

  return Image;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Image);

/***/ })

})
//# sourceMappingURL=main.86b26afebc905c9f996c.hot-update.js.map