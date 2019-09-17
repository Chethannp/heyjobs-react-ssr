/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchPopularJobs = fetchPopularJobs;

var _isomorphicFetch = __webpack_require__(18);

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function fetchPopularJobs() {
  var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "all";

  //Proxy setup code to use stubs
  var url = "/repositories?job=" + id;
  if (true) {
    url = process.env.API_ENDPOINT + url;
  }
  var encodedURI = encodeURI(url);
  return new Promise(function (resolve) {
    (0, _isomorphicFetch2.default)(encodedURI).then(function (data) {
      return data.json();
    }).then(function (repos) {
      resolve(repos);
      return repos;
    }).catch(function (error) {
      resolve([]);
      return null;
    });
  });
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Error = exports.ExpandableContent = exports.OrderedList = exports.Button = exports.Fade = exports.InlineBlock = exports.IconHolder = exports.Svg = exports.Anchor = exports.DeckSepeartor = exports.DeckInline = exports.DeckDetails = exports.Deck = exports.Breadcrumb = undefined;

var _templateObject = _taggedTemplateLiteral(["\n  font-size: 12px;\n  margin: 20px 0;\n  text-transform: uppercase;\n"], ["\n  font-size: 12px;\n  margin: 20px 0;\n  text-transform: uppercase;\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n  background: #fff;\n  padding: 20px;\n  margin: 15px 0;\n  border-radius: 3px;\n  h2 {\n    font-size: 16px;\n    font-weight: 600;\n    text-transform: capitalize;\n  }\n  h3 {\n    color: #174a77;\n    font-size: 14px;\n    text-transform: uppercase;\n  }\n  h4 span,\n  h6 span {\n    font-weight: 600;\n  }\n  h5 {\n    font-size: 10px;\n    font-weight: 100;\n    background: #475b6d;\n    color: #fff;\n    padding: 0 10px;\n    border-radius: 3px;\n  }\n  p {\n    font-size: 12px;\n  }\n  ul {\n    padding-left: 0px;\n    margin: 5px 0;\n    li {\n      list-style-type: none;\n      font-size: 12px;\n    }\n  }\n  @media only screen and (min-width: 768px) {\n    width: 600px;\n  }\n  @media only screen and (max-width: 499px) {\n    h2 {\n      font-size: 14px;\n    }\n    h3 {\n      font-size: 12px;\n    }\n  }\n  &:hover {\n    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.2);\n    -webkit-transition: all 0.3s ease-out;\n    -moz-transition: all 0.3s ease-out;\n    transition: all 0.3s ease-out;\n  }\n"], ["\n  background: #fff;\n  padding: 20px;\n  margin: 15px 0;\n  border-radius: 3px;\n  h2 {\n    font-size: 16px;\n    font-weight: 600;\n    text-transform: capitalize;\n  }\n  h3 {\n    color: #174a77;\n    font-size: 14px;\n    text-transform: uppercase;\n  }\n  h4 span,\n  h6 span {\n    font-weight: 600;\n  }\n  h5 {\n    font-size: 10px;\n    font-weight: 100;\n    background: #475b6d;\n    color: #fff;\n    padding: 0 10px;\n    border-radius: 3px;\n  }\n  p {\n    font-size: 12px;\n  }\n  ul {\n    padding-left: 0px;\n    margin: 5px 0;\n    li {\n      list-style-type: none;\n      font-size: 12px;\n    }\n  }\n  @media only screen and (min-width: 768px) {\n    width: 600px;\n  }\n  @media only screen and (max-width: 499px) {\n    h2 {\n      font-size: 14px;\n    }\n    h3 {\n      font-size: 12px;\n    }\n  }\n  &:hover {\n    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.2);\n    -webkit-transition: all 0.3s ease-out;\n    -moz-transition: all 0.3s ease-out;\n    transition: all 0.3s ease-out;\n  }\n"]),
    _templateObject3 = _taggedTemplateLiteral(["\n  padding: 20px;\n  &:hover {\n    box-shadow: none;\n  }\n  h4 {\n    font-size: 16px;\n    font-weight: 600;\n  }\n  @media only screen and (max-width: 768px) {\n    background-color: #fff;\n  }\n"], ["\n  padding: 20px;\n  &:hover {\n    box-shadow: none;\n  }\n  h4 {\n    font-size: 16px;\n    font-weight: 600;\n  }\n  @media only screen and (max-width: 768px) {\n    background-color: #fff;\n  }\n"]),
    _templateObject4 = _taggedTemplateLiteral(["\n  .fade {\n    max-height: 100px;\n    background: -webkit-linear-gradient(#333, #fff) !important;\n    -webkit-background-clip: text !important;\n    -webkit-text-fill-color: transparent !important;\n    -webkit-box-orient: vertical !important;\n  }\n"], ["\n  .fade {\n    max-height: 100px;\n    background: -webkit-linear-gradient(#333, #fff) !important;\n    -webkit-background-clip: text !important;\n    -webkit-text-fill-color: transparent !important;\n    -webkit-box-orient: vertical !important;\n  }\n"]),
    _templateObject5 = _taggedTemplateLiteral(["\n  font-size: 12px;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  background: -webkit-linear-gradient(#333, #eee);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: rgb(0, 0, 0, 0.2);\n  overflow: hidden;\n"], ["\n  font-size: 12px;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  background: -webkit-linear-gradient(#333, #eee);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: rgb(0, 0, 0, 0.2);\n  overflow: hidden;\n"]),
    _templateObject6 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"], ["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]),
    _templateObject7 = _taggedTemplateLiteral(["\n  margin-bottom: 20px;\n  .left {\n    img {\n      display: block;\n      margin: 0 auto;\n    }\n  }\n  @media only screen and (min-width: 767px) {\n    display: flex;\n    justify-content: space-around;\n    align-items: flex-start;\n    .left {\n      display: flex;\n      flex: 20%;\n      background: #fff;\n      border: 1px solid #dfdfdf;\n    }\n    .right {\n      padding-left: 10px;\n      flex: 80%;\n    }\n  }\n"], ["\n  margin-bottom: 20px;\n  .left {\n    img {\n      display: block;\n      margin: 0 auto;\n    }\n  }\n  @media only screen and (min-width: 767px) {\n    display: flex;\n    justify-content: space-around;\n    align-items: flex-start;\n    .left {\n      display: flex;\n      flex: 20%;\n      background: #fff;\n      border: 1px solid #dfdfdf;\n    }\n    .right {\n      padding-left: 10px;\n      flex: 80%;\n    }\n  }\n"]),
    _templateObject8 = _taggedTemplateLiteral(["\n  height: 10px;\n  display: inline-block;\n  margin-right: 5px;\n  vertical-align: baseline;\n"], ["\n  height: 10px;\n  display: inline-block;\n  margin-right: 5px;\n  vertical-align: baseline;\n"]),
    _templateObject9 = _taggedTemplateLiteral(["\n  display: block;\n  height: 100px;\n  margin: 20px auto;\n"], ["\n  display: block;\n  height: 100px;\n  margin: 20px auto;\n"]),
    _templateObject10 = _taggedTemplateLiteral(["\n  display: inline-block;\n  font-size: 10px;\n  margin: 0 5px 5px;\n  box-shadow: 0px 0px 1px #475b6d;\n  padding: 0px 5px;\n  text-transform: uppercase;\n"], ["\n  display: inline-block;\n  font-size: 10px;\n  margin: 0 5px 5px;\n  box-shadow: 0px 0px 1px #475b6d;\n  padding: 0px 5px;\n  text-transform: uppercase;\n"]),
    _templateObject11 = _taggedTemplateLiteral(["\n  display: inline-block;\n  color: #1f3a52;\n  background: #fff;\n  border-radius: 3px;\n  border: 1px solid #1f3a52;\n  font-size: 12px;\n  font-weight: bold;\n  text-transform: uppercase;\n  padding: 4px 8px;\n  cursor: pointer;\n  margin: 8px 0;\n  &:hover,\n  &:focus {\n    outline: none;\n  }\n"], ["\n  display: inline-block;\n  color: #1f3a52;\n  background: #fff;\n  border-radius: 3px;\n  border: 1px solid #1f3a52;\n  font-size: 12px;\n  font-weight: bold;\n  text-transform: uppercase;\n  padding: 4px 8px;\n  cursor: pointer;\n  margin: 8px 0;\n  &:hover,\n  &:focus {\n    outline: none;\n  }\n"]),
    _templateObject12 = _taggedTemplateLiteral(["\n  cursor: pointer;\n  color: #1f3a52;\n  &:focus,\n  &:active {\n    color: inherit;\n  }\n  text-decoration: none;\n"], ["\n  cursor: pointer;\n  color: #1f3a52;\n  &:focus,\n  &:active {\n    color: inherit;\n  }\n  text-decoration: none;\n"]),
    _templateObject13 = _taggedTemplateLiteral(["\n  list-style-type: number;\n  font-size: 12px;\n"], ["\n  list-style-type: number;\n  font-size: 12px;\n"]),
    _templateObject14 = _taggedTemplateLiteral(["\n  padding: 20px 50px;\n  text-align: center;\n  font-size: 14px;\n"], ["\n  padding: 20px 50px;\n  text-align: center;\n  font-size: 14px;\n"]);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactRouterDom = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Breadcrumb = _styledComponents2.default.div(_templateObject);

var Deck = _styledComponents2.default.div(_templateObject2);

var DeckDetails = (0, _styledComponents2.default)(Deck)(_templateObject3);

var ExpandableContent = _styledComponents2.default.div(_templateObject4);

var Fade = _styledComponents2.default.p(_templateObject5);

var DeckInline = _styledComponents2.default.div(_templateObject6);

var DeckSepeartor = _styledComponents2.default.div(_templateObject7);

var Svg = _styledComponents2.default.img(_templateObject8);

var IconHolder = _styledComponents2.default.img(_templateObject9);

var InlineBlock = _styledComponents2.default.span(_templateObject10);

var Button = _styledComponents2.default.button(_templateObject11);

var Anchor = (0, _styledComponents2.default)(_reactRouterDom.Link)(_templateObject12);

var OrderedList = _styledComponents2.default.ol(_templateObject13);

var Error = _styledComponents2.default.h2(_templateObject14);

exports.Breadcrumb = Breadcrumb;
exports.Deck = Deck;
exports.DeckDetails = DeckDetails;
exports.DeckInline = DeckInline;
exports.DeckSepeartor = DeckSepeartor;
exports.Anchor = Anchor;
exports.Svg = Svg;
exports.IconHolder = IconHolder;
exports.InlineBlock = InlineBlock;
exports.Fade = Fade;
exports.Button = Button;
exports.OrderedList = OrderedList;
exports.ExpandableContent = ExpandableContent;
exports.Error = Error;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.saveFetchedJobList = exports.SAVE_JOBS_LIST = undefined;

var _moment = __webpack_require__(19);

var _moment2 = _interopRequireDefault(_moment);

var _helperMethods = __webpack_require__(36);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SAVE_JOBS_LIST = exports.SAVE_JOBS_LIST = "[jobList] saveFetchedJobList";

var saveFetchedJobList = exports.saveFetchedJobList = function saveFetchedJobList(jobsList) {
  return function (dispatch) {
    var newData = (0, _helperMethods.changeKeys)(jobsList); //To convert everything to camelcase for cleaner code.

    newData = jobsList.map(function (list) {
      if (list.timeOfPost) {
        var date = (0, _moment2.default)(list.timeOfPost);
        if ((0, _moment2.default)().diff(date, "days") >= 2) {
          date = date.fromNow(); // hours convention
        } else {
          date = date.calendar().split(" ")[0]; // days convention
        }
        list.timeOfPost = date;
        return list;
      }
    });

    dispatch({
      type: SAVE_JOBS_LIST,
      payload: newData
    });
  };
};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = "/static-assets/location-icon.svg";

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = "/static-assets/experience-icon.svg";

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = "/static-assets/currency-icon.svg";

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _DeckStyle = __webpack_require__(3);

var _sorryIcon = __webpack_require__(28);

var _sorryIcon2 = _interopRequireDefault(_sorryIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ErrorBlockComp = function ErrorBlockComp(_ref) {
  var message = _ref.message,
      buttonText = _ref.buttonText;

  return _react2.default.createElement(
    _DeckStyle.Error,
    null,
    _react2.default.createElement(_DeckStyle.IconHolder, { src: _sorryIcon2.default, alt: "icon", height: "100" }),
    _react2.default.createElement("span", { dangerouslySetInnerHTML: { __html: message } }),
    _react2.default.createElement("br", null),
    _react2.default.createElement("br", null),
    _react2.default.createElement(
      _DeckStyle.Anchor,
      { to: "/" },
      _react2.default.createElement(
        _DeckStyle.Button,
        null,
        buttonText
      )
    )
  );
};

exports.default = ErrorBlockComp;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(13);

var _express2 = _interopRequireDefault(_express);

var _store = __webpack_require__(14);

var _store2 = _interopRequireDefault(_store);

var _renderer = __webpack_require__(20);

var _renderer2 = _interopRequireDefault(_renderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use(_express2.default.static("public"));
process.env.API_ENDPOINT = "http://localhost:9002";

var proxy = __webpack_require__(35);
app.use("/repositories", proxy({ target: process.env.API_ENDPOINT }));

app.get("*", function (req, res, next) {
  var store = (0, _store2.default)();
  (0, _renderer2.default)(req, res, next, store);
});

app.listen(3000, function () {
  console.log("Server is listening on port: 3000");
});

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(7);

var _reduxThunk = __webpack_require__(15);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = __webpack_require__(16);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var store = (0, _redux.createStore)(_reducers2.default, {}, (0, _redux.applyMiddleware)(_reduxThunk2.default));
  return store;
};

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(7);

var _listing = __webpack_require__(17);

var _listing2 = _interopRequireDefault(_listing);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
  jobs: _listing2.default
});

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _listing = __webpack_require__(5);

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    show404: false,
    showError: false,
    jobsList: [],
    showCustomToast: false,
    customMessage: ""
  };
  var action = arguments[1];

  switch (action.type) {
    case _listing.SAVE_JOBS_LIST:
      {
        return _extends({}, state, {
          jobsList: action.payload
        });
      }
    default:
      {
        return state;
      }
  }
};

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _App = __webpack_require__(21);

var _App2 = _interopRequireDefault(_App);

var _server = __webpack_require__(34);

var _reactRouterDom = __webpack_require__(4);

var _reactRedux = __webpack_require__(6);

var _listing = __webpack_require__(5);

var _api = __webpack_require__(2);

var _styledComponents = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req, res, next, store) {
  var promise = (0, _api.fetchPopularJobs)();
  promise.then(function (data) {
    store.dispatch((0, _listing.saveFetchedJobList)(data));
    var preloadedState = store.getState();
    var stateJson = JSON.stringify(preloadedState).replace(/</g, "\\u003c");

    //Wrapping Styled Sheet to React SSR
    var sheet = new _styledComponents.ServerStyleSheet();
    try {
      var markup = (0, _server.renderToString)(_react2.default.createElement(
        _styledComponents.StyleSheetManager,
        { sheet: sheet.instance },
        _react2.default.createElement(
          _reactRedux.Provider,
          { store: store },
          _react2.default.createElement(
            _reactRouterDom.StaticRouter,
            { location: req.url },
            _react2.default.createElement(_App2.default, null)
          )
        )
      ));
      var styleTags = sheet.getStyleTags();
    } catch (error) {
      console.error(error);
    } finally {
      sheet.seal();
    }

    res.send("\n            <!DOCTYPE html>\n            <html>\n            <head>\n                <title>SSR with RR</title>\n                <meta charset=\"utf-8\">\n\t            <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, maximum-scale=5, shrink-to-fit=no, user-scalable=yes\">\n                " + styleTags + "\n                <script src=\"/bundle.js\" defer></script>\n            </head>\n            <body>\n                <div id=\"app\">" + markup + "</div>\n                <script>window.__PRELOADED_STATE__ = " + stateJson + "</script>\n            </body>\n            </html>\n        ");
  }).catch(next);
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  font-size: 40px;\n  padding: 0 10px;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  font-size: 40px;\n  padding: 0 10px;\n"]);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _routes = __webpack_require__(22);

var _routes2 = _interopRequireDefault(_routes);

var _reactRouterDom = __webpack_require__(4);

var _NoMatchBlockComp = __webpack_require__(31);

var _NoMatchBlockComp2 = _interopRequireDefault(_NoMatchBlockComp);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _GlobalStyle = __webpack_require__(32);

var _GlobalStyle2 = _interopRequireDefault(_GlobalStyle);

var _HeaderBlockComp = __webpack_require__(33);

var _HeaderBlockComp2 = _interopRequireDefault(_HeaderBlockComp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var AppContainer = _styledComponents2.default.div(_templateObject);

var App = function App() {
  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(_HeaderBlockComp2.default, null),
    _react2.default.createElement(
      AppContainer,
      null,
      _react2.default.createElement(
        _reactRouterDom.Switch,
        null,
        _routes2.default.map(function (_ref) {
          var path = _ref.path,
              exact = _ref.exact,
              C = _ref.component,
              rest = _objectWithoutProperties(_ref, ["path", "exact", "component"]);

          return _react2.default.createElement(_reactRouterDom.Route, {
            key: path,
            path: path,
            exact: exact,
            render: function render(props) {
              return _react2.default.createElement(C, _extends({}, props, rest));
            }
          });
        }),
        _react2.default.createElement(_reactRouterDom.Route, { render: function render(props) {
            return _react2.default.createElement(_NoMatchBlockComp2.default, props);
          } })
      ),
      _react2.default.createElement(_GlobalStyle2.default, null)
    )
  );
};

exports.default = App;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _api = __webpack_require__(2);

var _ListBlockComp = __webpack_require__(23);

var _ListBlockComp2 = _interopRequireDefault(_ListBlockComp);

var _DetailsBlockComp = __webpack_require__(26);

var _DetailsBlockComp2 = _interopRequireDefault(_DetailsBlockComp);

var _ThankYouBlockComp = __webpack_require__(29);

var _ThankYouBlockComp2 = _interopRequireDefault(_ThankYouBlockComp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = [{
  path: "/",
  exact: true,
  component: _ListBlockComp2.default,
  fetchInitialData: function fetchInitialData() {
    var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    return (0, _api.fetchPopularJobs)(path.split("/").pop());
  }
}, {
  path: "/job/:id",
  component: _DetailsBlockComp2.default,
  fetchInitialData: function fetchInitialData() {
    var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    return (0, _api.fetchPopularJobs)(path.split("/").pop());
  }
}, {
  path: "/applied",
  component: _ThankYouBlockComp2.default
}];

exports.default = routes;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }(); //React Imports


//Redux Imports


//Styled Components


//Icons


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(6);

var _DeckStyle = __webpack_require__(3);

var _SearchBarStyle = __webpack_require__(24);

var _locationIcon = __webpack_require__(8);

var _locationIcon2 = _interopRequireDefault(_locationIcon);

var _experienceIcon = __webpack_require__(9);

var _experienceIcon2 = _interopRequireDefault(_experienceIcon);

var _currencyIcon = __webpack_require__(10);

var _currencyIcon2 = _interopRequireDefault(_currencyIcon);

var _searchIcon = __webpack_require__(25);

var _searchIcon2 = _interopRequireDefault(_searchIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ListBlockComp = function ListBlockComp(props) {
  var _useState = (0, _react.useState)(""),
      _useState2 = _slicedToArray(_useState, 2),
      search = _useState2[0],
      setSearch = _useState2[1];

  var _onChange = function _onChange(e) {
    setSearch(e.target.value);
  };

  var filteredJobs = props.jobsList.filter(function (job) {
    return job.title.toLowerCase().indexOf(search.toLowerCase()) !== -1;
  });

  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(
      _SearchBarStyle.SearchBar,
      null,
      _react2.default.createElement(_SearchBarStyle.InputSearchBox, {
        "aria-label": "jobSearch",
        autoComplete: "off",
        type: "text",
        id: "jobSearch",
        name: "search",
        placeholder: "Search for Jobs...",
        onChange: function onChange(e) {
          return _onChange(e);
        },
        defaultValue: search
      }),
      _react2.default.createElement(
        _SearchBarStyle.SubmitButton,
        null,
        _react2.default.createElement("img", { src: _searchIcon2.default, alt: "search icon", height: "10" })
      )
    ),
    filteredJobs && filteredJobs.length == 0 ? _react2.default.createElement(
      "h1",
      null,
      "No results found"
    ) : filteredJobs.map(function (job) {
      return _react2.default.createElement(
        _DeckStyle.Anchor,
        {
          to: job.jobStatus === "no vacancy" ? "" : "/job/" + job.id,
          key: job.id
        },
        _react2.default.createElement(
          _DeckStyle.Deck,
          {
            style: job.jobStatus === "no vacancy" ? { opacity: ".6" } : { opacity: "1" }
          },
          job.jobStatus === "no vacancy" && _react2.default.createElement(
            "h6",
            { style: { textAlign: "center", color: "red" } },
            "~ Sorry, this vacancy is now closed ~"
          ),
          (job.title || job.isPromoted) && _react2.default.createElement(
            _DeckStyle.DeckInline,
            null,
            job.title && _react2.default.createElement(
              "h2",
              null,
              job.title
            ),
            job.isPromoted && _react2.default.createElement(
              "h5",
              null,
              "Promoted"
            )
          ),
          job.company && _react2.default.createElement(
            "h3",
            null,
            job.company
          ),
          (job.location || job.experienceLevel || job.salaryRange) && _react2.default.createElement(
            "ul",
            null,
            job.location && _react2.default.createElement(
              "li",
              null,
              _react2.default.createElement(_DeckStyle.Svg, { src: _locationIcon2.default, alt: "location icon" }),
              job.location
            ),
            job.experienceLevel && _react2.default.createElement(
              "li",
              null,
              _react2.default.createElement(_DeckStyle.Svg, { src: _experienceIcon2.default, alt: "experience icon" }),
              job.experienceLevel
            ),
            job.salaryRange && _react2.default.createElement(
              "li",
              null,
              _react2.default.createElement(_DeckStyle.Svg, { src: _currencyIcon2.default, alt: "currency icon" }),
              job.salaryRange
            )
          ),
          job.description && _react2.default.createElement(
            _DeckStyle.Fade,
            null,
            job.description
          ),
          job.skills && _react2.default.createElement(
            "h4",
            null,
            _react2.default.createElement(
              "span",
              null,
              "Skills:"
            ),
            job.skills.map(function (skill) {
              return _react2.default.createElement(
                _DeckStyle.InlineBlock,
                { key: skill },
                skill
              );
            })
          ),
          _react2.default.createElement(
            _DeckStyle.DeckInline,
            null,
            job.timeOfPost && _react2.default.createElement(
              "h6",
              null,
              _react2.default.createElement(
                "span",
                null,
                "Posted: "
              ),
              " ",
              job.timeOfPost
            ),
            job.jobStatus && _react2.default.createElement(
              _DeckStyle.Button,
              null,
              job.jobStatus
            )
          )
        )
      );
    })
  );
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    jobsList: state.jobs.jobsList
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(ListBlockComp);

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SubmitButton = exports.InputSearchBox = exports.SearchBar = undefined;

var _templateObject = _taggedTemplateLiteral(["\n  margin: 20px 0 0;\n  display: flex;\n  justify-content: space-around;\n  width: 100%;\n  @media only screen and (min-width: 768px) {\n    width: 600px;\n  }\n"], ["\n  margin: 20px 0 0;\n  display: flex;\n  justify-content: space-around;\n  width: 100%;\n  @media only screen and (min-width: 768px) {\n    width: 600px;\n  }\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n  flex: 95%;\n  box-sizing: border-box;\n  border: 1px solid #888;\n  border-right: none;\n  border-radius: 0;\n  box-shadow: none;\n  font: 12px;\n  height: 30px;\n  padding: 2px 12px 0;\n  color: #1f3a52;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  background: #fff;\n  &:focus {\n    border: 1px solid #1f3a52;\n    outline: none;\n  }\n"], ["\n  flex: 95%;\n  box-sizing: border-box;\n  border: 1px solid #888;\n  border-right: none;\n  border-radius: 0;\n  box-shadow: none;\n  font: 12px;\n  height: 30px;\n  padding: 2px 12px 0;\n  color: #1f3a52;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  background: #fff;\n  &:focus {\n    border: 1px solid #1f3a52;\n    outline: none;\n  }\n"]),
    _templateObject3 = _taggedTemplateLiteral(["\n  flex: 5%;\n  width: 30px;\n  height: 30px;\n  box-sizing: border-box;\n  padding: 0.35em 0.75em;\n  cursor: pointer;\n  &:hover,\n  &:focus {\n    outline: none;\n  }\n"], ["\n  flex: 5%;\n  width: 30px;\n  height: 30px;\n  box-sizing: border-box;\n  padding: 0.35em 0.75em;\n  cursor: pointer;\n  &:hover,\n  &:focus {\n    outline: none;\n  }\n"]);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SearchBar = _styledComponents2.default.div(_templateObject);
var InputSearchBox = _styledComponents2.default.input(_templateObject2);

var SubmitButton = _styledComponents2.default.button(_templateObject3);

exports.SearchBar = SearchBar;
exports.InputSearchBox = InputSearchBox;
exports.SubmitButton = SubmitButton;

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = "/static-assets/search-icon.svg";

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(6);

var _DeckStyle = __webpack_require__(3);

var _api = __webpack_require__(2);

var _listing = __webpack_require__(5);

var _companyLogo = __webpack_require__(27);

var _companyLogo2 = _interopRequireDefault(_companyLogo);

var _locationIcon = __webpack_require__(8);

var _locationIcon2 = _interopRequireDefault(_locationIcon);

var _experienceIcon = __webpack_require__(9);

var _experienceIcon2 = _interopRequireDefault(_experienceIcon);

var _currencyIcon = __webpack_require__(10);

var _currencyIcon2 = _interopRequireDefault(_currencyIcon);

var _ErrorBlockComp = __webpack_require__(11);

var _ErrorBlockComp2 = _interopRequireDefault(_ErrorBlockComp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //React Imports


//Redux Imports


//Fetch Helper


//Action Creators


//Icons


var DetailsBlockComp = function (_Component) {
  _inherits(DetailsBlockComp, _Component);

  function DetailsBlockComp(props) {
    _classCallCheck(this, DetailsBlockComp);

    var _this = _possibleConstructorReturn(this, (DetailsBlockComp.__proto__ || Object.getPrototypeOf(DetailsBlockComp)).call(this, props));

    _this.state = {
      loading: props.jobsList ? false : true,
      showError: false,
      showContent: false,
      jobsList: props.jobsList,
      jobInfo: props.jobsList ? _this.findRightJobDescription(props.jobsList) : {}
    };
    _this.fetchJobs = _this.fetchJobs.bind(_this);
    return _this;
  }

  _createClass(DetailsBlockComp, [{
    key: "fetchJobs",
    value: function fetchJobs() {
      var _this2 = this;

      this.setState(function () {
        return {
          loading: true
        };
      });

      (0, _api.fetchPopularJobs)().then(function (res) {
        _this2.props.saveFetchedJobList(res);
        _this2.setState({
          loading: false
        });
      }).catch(function () {
        _this2.setState({
          loading: false,
          showError: true
        });
      });
    }
  }, {
    key: "findRightJobDescription",
    value: function findRightJobDescription(jobList) {
      var _this3 = this;

      return jobList.find(function (job) {
        return job.id === parseInt(_this3.props.match.params.id);
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.state.jobsList) {
        var data = this.findRightJobDescription(this.state.jobsList);

        if (data) {
          this.setState({
            jobInfo: data
          });
        } else {
          this.setState({
            showError: true
          });
        }
      } else {
        this.fetchJobs();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevProps.match.params.id !== this.props.match.params.id) {
        this.fetchJobs();
      }
    }
  }, {
    key: "toggleContent",
    value: function toggleContent(event) {
      var _this4 = this;

      event.preventDefault();
      this.setState({
        showContent: !this.state.showContent
      }, function () {
        if (!_this4.state.showContent) {
          document.querySelector("#header").scrollIntoView({
            behavior: "smooth"
          });
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      var _state = this.state,
          showError = _state.showError,
          jobInfo = _state.jobInfo,
          showContent = _state.showContent;

      return _react2.default.createElement(
        "div",
        null,
        showError && _react2.default.createElement(_ErrorBlockComp2.default, {
          message: "Oops....!, <br/>  We could not find the job details for this request :( <br /> Sorry for the inconvenience",
          buttonText: "Explore Other Jobs"
        }),
        jobInfo && _react2.default.createElement(
          _react2.default.Fragment,
          null,
          _react2.default.createElement(
            _DeckStyle.Breadcrumb,
            null,
            _react2.default.createElement(
              _DeckStyle.Anchor,
              { to: "/" },
              "Home"
            ),
            " ~> Job Details Page"
          ),
          _react2.default.createElement(
            _DeckStyle.DeckDetails,
            null,
            (jobInfo.title || jobInfo.isPromoted) && _react2.default.createElement(
              _DeckStyle.DeckSepeartor,
              null,
              _react2.default.createElement(
                "div",
                { className: "left" },
                _react2.default.createElement("img", { src: _companyLogo2.default, alt: "logo", height: "100" })
              ),
              _react2.default.createElement(
                "div",
                { className: "right" },
                jobInfo.company && _react2.default.createElement(
                  "h3",
                  null,
                  jobInfo.company
                ),
                jobInfo.title && _react2.default.createElement(
                  "h2",
                  null,
                  jobInfo.title
                ),
                jobInfo.skills && _react2.default.createElement(
                  "h4",
                  null,
                  _react2.default.createElement(
                    "span",
                    { style: { marginLeft: "0px" } },
                    "Skills:"
                  ),
                  jobInfo.skills.map(function (skill) {
                    return _react2.default.createElement(
                      _DeckStyle.InlineBlock,
                      { key: skill },
                      skill
                    );
                  })
                ),
                jobInfo.timeOfPost && _react2.default.createElement(
                  "h6",
                  null,
                  _react2.default.createElement(
                    "span",
                    null,
                    "Posted: "
                  ),
                  jobInfo.timeOfPost
                ),
                (jobInfo.location || jobInfo.experienceLevel || jobInfo.salaryRange) && _react2.default.createElement(
                  "ul",
                  null,
                  jobInfo.location && _react2.default.createElement(
                    "li",
                    null,
                    _react2.default.createElement(_DeckStyle.Svg, { src: _locationIcon2.default, alt: "location icon" }),
                    jobInfo.location
                  ),
                  jobInfo.experienceLevel && _react2.default.createElement(
                    "li",
                    null,
                    _react2.default.createElement(_DeckStyle.Svg, { src: _experienceIcon2.default, alt: "experience icon" }),
                    jobInfo.experienceLevel
                  ),
                  jobInfo.salaryRange && _react2.default.createElement(
                    "li",
                    null,
                    _react2.default.createElement(_DeckStyle.Svg, { src: _currencyIcon2.default, alt: "currency icon" }),
                    jobInfo.salaryRange
                  )
                ),
                jobInfo.jobStatus && _react2.default.createElement(
                  _DeckStyle.Anchor,
                  { to: "/applied" },
                  _react2.default.createElement(
                    _DeckStyle.Button,
                    { style: { display: "block" } },
                    "Apply"
                  )
                )
              )
            ),
            jobInfo.description && _react2.default.createElement(
              _DeckStyle.ExpandableContent,
              null,
              _react2.default.createElement(
                "div",
                {
                  className: "" + (showContent || jobInfo.description.length < 160 ? "" : "fade")
                },
                _react2.default.createElement(
                  "p",
                  null,
                  jobInfo.description
                ),
                showContent && jobInfo.companyInfo && jobInfo.companyInfo.whatWeExpect != [] && _react2.default.createElement(
                  "div",
                  null,
                  _react2.default.createElement(
                    "h4",
                    null,
                    "What we Expect"
                  ),
                  _react2.default.createElement(
                    _DeckStyle.OrderedList,
                    null,
                    jobInfo.companyInfo.whatWeExpect.map(function (offer, i) {
                      return _react2.default.createElement(
                        "li",
                        { key: i * Math.random() },
                        offer
                      );
                    })
                  )
                ),
                showContent && jobInfo.companyInfo && jobInfo.companyInfo.whatWeOffer != [] && _react2.default.createElement(
                  "div",
                  null,
                  _react2.default.createElement(
                    "h4",
                    null,
                    "What we offer"
                  ),
                  _react2.default.createElement(
                    _DeckStyle.OrderedList,
                    null,
                    jobInfo.companyInfo.whatWeOffer.map(function (offer, i) {
                      return _react2.default.createElement(
                        "li",
                        { key: i * Math.random() },
                        offer
                      );
                    })
                  )
                )
              ),
              jobInfo.description.length > 160 && _react2.default.createElement(
                _DeckStyle.Button,
                {
                  style: { display: "block", margin: "0 auto" },
                  onClick: function onClick(e) {
                    return _this5.toggleContent(e);
                  }
                },
                showContent ? "show less" : "show more"
              )
            )
          )
        )
      );
    }
  }]);

  return DetailsBlockComp;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    jobsList: state.jobs.jobsList
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, function (dispatch) {
  return {
    saveFetchedJobList: function saveFetchedJobList(jobsList) {
      return dispatch((0, _listing.saveFetchedJobList)(jobsList));
    }
  };
})(DetailsBlockComp);

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = "/static-assets/company-logo.svg";

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = "/static-assets/sorry-icon.svg";

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _DeckStyle = __webpack_require__(3);

var _goodLuck = __webpack_require__(30);

var _goodLuck2 = _interopRequireDefault(_goodLuck);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ThankYouBlockComp = function ThankYouBlockComp() {
  return _react2.default.createElement(
    _DeckStyle.Error,
    null,
    _react2.default.createElement(_DeckStyle.IconHolder, { src: _goodLuck2.default, alt: "icon", height: "100" }),
    _react2.default.createElement(
      "span",
      null,
      "Yeah...! ",
      _react2.default.createElement("br", null),
      "We have succesfully submitted your application! ",
      _react2.default.createElement("br", null),
      "Start preparing for the best!!!"
    ),
    _react2.default.createElement("br", null),
    _react2.default.createElement("br", null),
    _react2.default.createElement(
      _DeckStyle.Anchor,
      { to: "/" },
      _react2.default.createElement(
        _DeckStyle.Button,
        null,
        "Explore Other Jobs"
      )
    )
  );
};

exports.default = ThankYouBlockComp;

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = "/static-assets/good-luck.svg";

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = NoMatch;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _ErrorBlockComp = __webpack_require__(11);

var _ErrorBlockComp2 = _interopRequireDefault(_ErrorBlockComp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function NoMatch() {
  return _react2.default.createElement(_ErrorBlockComp2.default, {
    message: "Oops....!, <br/>  Sorry we do not serve that page <br /> ",
    buttonText: "Go To Home!"
  });
}

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(["\n    @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600,800&display=swap');\n    *{\n        box-sizing: border-box;\n    }\n    body{\n        font-family: 'Open Sans', sans-serif;\n        -webkit-font-smoothing: antialiased;\n        text-rendering: optimizeLegibility;\n        padding:0;\n        margin:0;\n        background: #f2f2f2;\n    }\n    h1, h2, h3, h4, h5, h6{\n        margin:0;\n        line-height: 2;\n        word-break: break-word;\n        font-size: 12px;\n        font-weight: 100;\n        color: #1f3a52;\n    }\n"], ["\n    @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600,800&display=swap');\n    *{\n        box-sizing: border-box;\n    }\n    body{\n        font-family: 'Open Sans', sans-serif;\n        -webkit-font-smoothing: antialiased;\n        text-rendering: optimizeLegibility;\n        padding:0;\n        margin:0;\n        background: #f2f2f2;\n    }\n    h1, h2, h3, h4, h5, h6{\n        margin:0;\n        line-height: 2;\n        word-break: break-word;\n        font-size: 12px;\n        font-weight: 100;\n        color: #1f3a52;\n    }\n"]);

var _styledComponents = __webpack_require__(1);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var GlobalStyle = (0, _styledComponents.createGlobalStyle)(_templateObject);

exports.default = GlobalStyle;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: sticky;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 9;\n  height: 50px;\n  color: #fff;\n  background-color: #475b6d;\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 0px 16px 0px;\n  padding: 0 10px;\n"], ["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: sticky;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 9;\n  height: 50px;\n  color: #fff;\n  background-color: #475b6d;\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 0px 16px 0px;\n  padding: 0 10px;\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n  font-size: 20px;\n  font-weight: bold;\n"], ["\n  font-size: 20px;\n  font-weight: bold;\n"]),
    _templateObject3 = _taggedTemplateLiteral(["\n  font-size: 14px;\n"], ["\n  font-size: 14px;\n"]),
    _templateObject4 = _taggedTemplateLiteral(["\n  color: #fff;\n  &:focus,\n  &:active {\n    color: #fff;\n  }\n  text-decoration: none;\n"], ["\n  color: #fff;\n  &:focus,\n  &:active {\n    color: #fff;\n  }\n  text-decoration: none;\n"]);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(4);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Header = _styledComponents2.default.div(_templateObject);

var Logo = _styledComponents2.default.div(_templateObject2);

var RightMenu = _styledComponents2.default.div(_templateObject3);

var Anchor = (0, _styledComponents2.default)(_reactRouterDom.Link)(_templateObject4);

var HeaderBlockComp = function HeaderBlockComp() {
  return _react2.default.createElement(
    Header,
    { id: "header" },
    _react2.default.createElement(
      Anchor,
      { to: "/" },
      _react2.default.createElement(
        Logo,
        null,
        "Hey Jobs"
      )
    ),
    _react2.default.createElement(
      RightMenu,
      null,
      _react2.default.createElement(
        Anchor,
        { to: "" },
        "Login"
      )
    )
  );
};

exports.default = HeaderBlockComp;

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("http-proxy-middleware");

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var changeKeys = exports.changeKeys = function changeKeys(obj) {
  if (/^(undefined|string|number)$/.test(typeof obj === "undefined" ? "undefined" : _typeof(obj))) return obj;
  if (obj == null) return obj;
  if (Array.isArray(obj)) {
    //  let newObj = []
    obj.forEach(function (a, i) {
      obj[i] = changeKeys(obj[i]);
    });
    return obj;
  }
  if ((typeof obj === "undefined" ? "undefined" : _typeof(obj)) == "object") {
    var newObj = {};
    var keys = Object.keys(obj);

    keys.forEach(function (key) {
      var newKey = key.replace(/_([a-z])/g, function (g) {
        return g[1].toUpperCase();
      });
      newObj[newKey] = changeKeys(obj[key]);
    });
    return newObj;
  }
  return obj;
};

/***/ })
/******/ ]);