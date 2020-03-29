module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/yonikok/Documents/work/yik.dev/repos/washingtime-fe/components/Layout.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


/* harmony default export */ __webpack_exports__["default"] = (props => {
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }, __jsx("link", {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: "/apple-touch-icon.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 17
    }
  }), __jsx("link", {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: "/favicon-32x32.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 17
    }
  }), __jsx("link", {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: "/favicon-16x16.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 17
    }
  }), __jsx("link", {
    rel: "manifest",
    href: "/site.webmanifest",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }
  }), __jsx("link", {
    rel: "mask-icon",
    href: "/safari-pinned-tab.svg",
    color: "#5bbad5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }
  }), __jsx("meta", {
    name: "msapplication-TileColor",
    content: "#da532c",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  }), __jsx("meta", {
    name: "theme-color",
    content: "#ffffff",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }
  }), __jsx("title", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  }, props.title), __jsx("meta", {
    name: "title",
    content: props.title,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }
  }), __jsx("meta", {
    name: "description",
    content: "Help mee om alle initiatieven rondom COVID-19 in kaart te brengen!",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 17
    }
  }), __jsx("meta", {
    property: "og:type",
    content: "website",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }
  }), __jsx("meta", {
    property: "og:url",
    content: "https://helpdehelpers.nl/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 17
    }
  }), __jsx("meta", {
    property: "og:title",
    content: props.title,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }
  }), __jsx("meta", {
    property: "og:description",
    content: "Help mee om alle initiatieven rondom COVID-19 in kaart te brengen!",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 17
    }
  }), __jsx("meta", {
    property: "og:image",
    content: "https://helpdehelpers.nl/assets/images/metatag.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
    }
  }), __jsx("meta", {
    property: "twitter:card",
    content: "summary_large_image",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 17
    }
  }), __jsx("meta", {
    property: "twitter:url",
    content: "https://helpdehelpers.nl/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 17
    }
  }), __jsx("meta", {
    property: "twitter:title",
    content: props.title,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 17
    }
  }), __jsx("meta", {
    property: "twitter:description",
    content: "Help mee om alle initiatieven rondom COVID-19 in kaart te brengen!",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }
  }), __jsx("meta", {
    property: "twitter:image",
    content: "https://helpdehelpers.nl/assets/images/metatag.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 17
    }
  })), props.children);
});

/***/ }),

/***/ "./components/ReserveCard.js":
/*!***********************************!*\
  !*** ./components/ReserveCard.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/request */ "./services/request.js");
/* harmony import */ var _services_authService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/authService */ "./services/authService.js");
var _jsxFileName = "/Users/yonikok/Documents/work/yik.dev/repos/washingtime-fe/components/ReserveCard.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



/* harmony default export */ __webpack_exports__["default"] = (props => {
  const {
    0: checked,
    1: setChecked
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(props.checked);
  const {
    0: id,
    1: setId
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(props.id);
  return __jsx("div", {
    className: "jsx-2969793673",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, __jsx("label", {
    className: "jsx-2969793673" + " " + ((props.disabled ? "reserve-card_disabled" : "reserve-card") || ""),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, __jsx("input", {
    type: "checkbox",
    disabled: props.disabled,
    value: checked,
    onChange: onClick(props, id, setId, checked, setChecked),
    className: "jsx-2969793673" + " " + "reserve-card__checkbox__hidden",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }
  }), __jsx("span", {
    className: "jsx-2969793673" + " " + ((props.disabled ? "reserve-card__checkbox__disabled" : "reserve-card__checkbox") || ""),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }
  }), __jsx("span", {
    className: "jsx-2969793673",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  }, props.startTime.format('HH:mm'), " - ", props.endTime.format('HH:mm'))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2969793673",
    __self: undefined
  }, ".reserve-card.jsx-2969793673{font-size:1.125rem;color:#718096;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;padding-left:0.5rem;padding-right:0.5rem;padding-top:0.75rem;padding-bottom:0.75rem;border-color:#718096;border-width:1px;border-radius:0.25rem;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-top:0.5rem;margin-bottom:0.5rem;-webkit-transition:all .3s ease,-webkit-all .3s ease;transition:all .3s ease,-webkit-all .3s ease;}.reserve-card__checkbox__hidden.jsx-2969793673{position:absolute;opacity:0;}.reserve-card__checkbox.jsx-2969793673{height:1rem;width:1rem;border-color:#4a5568;border-width:1px;margin-right:0.75rem;border-radius:9999px;-webkit-transition:all .3s ease,-webkit-all .3s ease;transition:all .3s ease,-webkit-all .3s ease;}.reserve-card__checkbox__disabled.jsx-2969793673{height:1rem;width:1rem;border-color:#cbd5e0;border-width:1px;margin-right:0.75rem;border-radius:9999px;}.reserve-card.jsx-2969793673 input.jsx-2969793673:checked~.reserve-card__checkbox.jsx-2969793673{background-color:#edb5f5;}.reserve-card_disabled.jsx-2969793673{font-size:1.125rem;color:#cbd5e0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;padding-left:0.5rem;padding-right:0.5rem;padding-top:0.75rem;padding-bottom:0.75rem;border-color:#cbd5e0;border-width:1px;border-radius:0.25rem;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-top:0.5rem;margin-bottom:0.5rem;}.reserve-card.jsx-2969793673:hover{border-color:#1a202c;cursor:pointer;box-shadow:0 0 2px 2px hsla(0,0%,0%,0),0 0 5px 2px rgba(0,0,0,0.1);-webkit-transform:translate(0px,-2px);-ms-transform:translate(0px,-2px);transform:translate(0px,-2px);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95b25pa29rL0RvY3VtZW50cy93b3JrL3lpay5kZXYvcmVwb3Mvd2FzaGluZ3RpbWUtZmUvY29tcG9uZW50cy9SZXNlcnZlQ2FyZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQndCLEFBRXNCLEFBa0JELEFBSU4sQUFTQSxBQVNhLEFBSU4sQUFrQkUsWUF2Q1YsQUFTQSxNQWJELENBbEJJLEFBNENBLEVBa0JDLEVBdkNNLEFBU0EsRUFRdkIsR0F0QmEsS0FqQkUsQUE0Q0EsR0FrQjRELFFBdkN4RCxBQVNBLGlCQVJJLEFBU0EscUJBUkEsQUFTQSxxQkFSd0IsQUFTL0MsQUE0QmlDLElBOURaLEFBNENBLHFFQTNDQyxBQTRDQSxvQkEzQ0MsQUE0Q0EsS0FyQnlCLElBc0NoRCxZQTVEc0IsQUE0Q0Esb0JBM0NHLEFBNENBLHVCQTNDRixBQTRDQSxxQkEzQ0osQUE0Q0EsaUJBM0NLLEFBNENBLHNCQTNDSixBQTRDQSx1RUEzQ0MsQUE0Q0EsNkZBM0NELEFBNENBLGtCQTNDRyxBQTRDQSxxQkEzQ3dCLEFBNEMvQyxrR0E1Q2dEIiwiZmlsZSI6Ii9Vc2Vycy95b25pa29rL0RvY3VtZW50cy93b3JrL3lpay5kZXYvcmVwb3Mvd2FzaGluZ3RpbWUtZmUvY29tcG9uZW50cy9SZXNlcnZlQ2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBnZXRDbGllbnQgZnJvbSBcIi4uL3NlcnZpY2VzL3JlcXVlc3RcIjtcbmltcG9ydCAqIGFzIGF1dGhTZXJ2aWNlIGZyb20gXCIuLi9zZXJ2aWNlcy9hdXRoU2VydmljZVwiO1xuXG5leHBvcnQgZGVmYXVsdCAocHJvcHMpID0+IHtcbiAgICBjb25zdCBbY2hlY2tlZCwgc2V0Q2hlY2tlZF0gPSB1c2VTdGF0ZShwcm9wcy5jaGVja2VkKTtcbiAgICBjb25zdCBbaWQsIHNldElkXSA9IHVzZVN0YXRlKHByb3BzLmlkKTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17cHJvcHMuZGlzYWJsZWQgPyBcInJlc2VydmUtY2FyZF9kaXNhYmxlZFwiIDogXCJyZXNlcnZlLWNhcmRcIn0+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGRpc2FibGVkPXtwcm9wcy5kaXNhYmxlZH0gY2xhc3NOYW1lPXtcInJlc2VydmUtY2FyZF9fY2hlY2tib3hfX2hpZGRlblwifVxuICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y2hlY2tlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2xpY2socHJvcHMsIGlkLCBzZXRJZCwgY2hlY2tlZCwgc2V0Q2hlY2tlZCl9Lz5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3Byb3BzLmRpc2FibGVkID8gXCJyZXNlcnZlLWNhcmRfX2NoZWNrYm94X19kaXNhYmxlZFwiIDogXCJyZXNlcnZlLWNhcmRfX2NoZWNrYm94XCJ9Lz5cbiAgICAgICAgICAgICAgICA8c3Bhbj57cHJvcHMuc3RhcnRUaW1lLmZvcm1hdCgnSEg6bW0nKX0gLSB7cHJvcHMuZW5kVGltZS5mb3JtYXQoJ0hIOm1tJyl9PC9zcGFuPlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAucmVzZXJ2ZS1jYXJkIHtcbiAgICAgICAgICAgICAgICAgICAgQGFwcGx5IHRleHQtbGcgdGV4dC1ncmF5LTYwMCBmbGV4IGZsZXgtcm93IHB4LTIgcHktMyBib3JkZXItZ3JheS02MDAgYm9yZGVyIHJvdW5kZWQgc2VsZi1jZW50ZXIgaXRlbXMtY2VudGVyIG15LTI7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZSwtd2Via2l0LWFsbCAuM3MgZWFzZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAucmVzZXJ2ZS1jYXJkX19jaGVja2JveF9faGlkZGVuIHtcbiAgICAgICAgICAgICAgICAgIEBhcHBseSBhYnNvbHV0ZSBvcGFjaXR5LTBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnJlc2VydmUtY2FyZF9fY2hlY2tib3h7XG4gICAgICAgICAgICAgICAgICBAYXBwbHkgaC00IHctNCBib3JkZXItZ3JheS03MDAgYm9yZGVyIG1yLTMgcm91bmRlZC1mdWxsO1xuICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlLC13ZWJraXQtYWxsIC4zcyBlYXNlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5yZXNlcnZlLWNhcmRfX2NoZWNrYm94X19kaXNhYmxlZHtcbiAgICAgICAgICAgICAgICAgICBAYXBwbHkgaC00IHctNCBib3JkZXItZ3JheS00MDAgYm9yZGVyIG1yLTMgcm91bmRlZC1mdWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAucmVzZXJ2ZS1jYXJkIGlucHV0OmNoZWNrZWQgfiAucmVzZXJ2ZS1jYXJkX19jaGVja2JveHtcbiAgICAgICAgICAgICAgICAgIEBhcHBseSBiZy1zZWNvbmRhcnk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5yZXNlcnZlLWNhcmRfZGlzYWJsZWQge1xuICAgICAgICAgICAgICAgICAgIEBhcHBseSB0ZXh0LWxnIHRleHQtZ3JheS00MDAgZmxleCBmbGV4LXJvdyBweC0yIHB5LTMgYm9yZGVyLWdyYXktNDAwIGJvcmRlciByb3VuZGVkIHNlbGYtY2VudGVyIGl0ZW1zLWNlbnRlciBteS0yO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAucmVzZXJ2ZS1jYXJkOmhvdmVye1xuICAgICAgICAgICAgICAgICAgQGFwcGx5IGJvcmRlci1ncmF5LTkwMCBjdXJzb3ItcG9pbnRlcjtcbiAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAycHggMnB4IGhzbGEoMCwgMCUsIDAlLCAwKSwwIDAgNXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIC0ycHgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9kaXY+KVxufVxuXG5jb25zdCBvbkNsaWNrID0gKHByb3BzLCBpZCwgc2V0SWQsIGNoZWNrZWQsIHNldENoZWNrZWQpID0+ICgpID0+IHtcbiAgICBpZiAoIWNoZWNrZWQpIHtcbiAgICAgICAgZ2V0Q2xpZW50KGF1dGhTZXJ2aWNlLmdldFRva2VuKCkpLnBvc3QoJ3dhc2hpbmd0aW1lJywge1xuICAgICAgICAgICAgc3RhcnREYXRlVGltZTogcHJvcHMuc3RhcnRUaW1lLmZvcm1hdCgpLFxuICAgICAgICAgICAgZW5kRGF0ZVRpbWU6IHByb3BzLmVuZFRpbWUuZm9ybWF0KClcbiAgICAgICAgfSkudGhlbihyZXNwID0+IHtcbiAgICAgICAgICAgIHNldElkKHJlc3AuZGF0YS5pZCk7XG4gICAgICAgICAgICBzZXRDaGVja2VkKHRydWUpXG4gICAgICAgIH0pLmNhdGNoKGUgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgICAgZ2V0Q2xpZW50KGF1dGhTZXJ2aWNlLmdldFRva2VuKCkpLmRlbGV0ZShgd2FzaGluZ3RpbWUvJHtpZH1gKS50aGVuKHJlc3AgPT4ge1xuICAgICAgICAgICAgc2V0SWQobnVsbCk7XG4gICAgICAgICAgICBzZXRDaGVja2VkKGZhbHNlKVxuICAgICAgICB9KS5jYXRjaChlID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICB9KVxuICAgIH1cbn07Il19 */\n/*@ sourceURL=/Users/yonikok/Documents/work/yik.dev/repos/washingtime-fe/components/ReserveCard.js */"));
});

const onClick = (props, id, setId, checked, setChecked) => () => {
  if (!checked) {
    Object(_services_request__WEBPACK_IMPORTED_MODULE_2__["default"])(_services_authService__WEBPACK_IMPORTED_MODULE_3__["getToken"]()).post('washingtime', {
      startDateTime: props.startTime.format(),
      endDateTime: props.endTime.format()
    }).then(resp => {
      setId(resp.data.id);
      setChecked(true);
    }).catch(e => {
      console.log(e);
    });
  } else {
    Object(_services_request__WEBPACK_IMPORTED_MODULE_2__["default"])(_services_authService__WEBPACK_IMPORTED_MODULE_3__["getToken"]()).delete(`washingtime/${id}`).then(resp => {
      setId(null);
      setChecked(false);
    }).catch(e => {
      console.log(e);
    });
  }
};

/***/ }),

/***/ "./components/ReserveCol.js":
/*!**********************************!*\
  !*** ./components/ReserveCol.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ReserveCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ReserveCard */ "./components/ReserveCard.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/yonikok/Documents/work/yik.dev/repos/washingtime-fe/components/ReserveCol.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



/* harmony default export */ __webpack_exports__["default"] = (props => {
  const {
    0: timeRange,
    1: setTimeRange
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(createTimeRange(props.day));
  return __jsx("div", {
    className: "jsx-3227056558" + " " + "reserve-col",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx("h3", {
    className: "jsx-3227056558" + " " + "reserve-col__header",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }, props.day.format("MMM Do YYYY")), timeRange.slice(0, -1).map((range, i) => {
    let reservation = props.reservation.find(r => {
      return moment__WEBPACK_IMPORTED_MODULE_3___default()(r.startDateTime).valueOf() === range.valueOf();
    });
    return __jsx(_ReserveCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: i,
      date: props.day,
      startTime: range,
      disabled: reservation,
      endTime: timeRange[i + 1],
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 24
      }
    });
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3227056558",
    __self: undefined
  }, ".reserve-col.jsx-3227056558{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding-left:1rem;padding-right:1rem;padding-top:0.75rem;padding-bottom:0.75rem;background-color:#fff;border-radius:0.5rem;margin-top:2.5rem;margin-left:0.75rem;margin-right:0.75rem;}.reserve-col__header.jsx-3227056558{text-align:center;font-size:1.25rem;padding:0.75rem;color:#2d3748;color:#ff896b;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95b25pa29rL0RvY3VtZW50cy93b3JrL3lpay5kZXYvcmVwb3Mvd2FzaGluZ3RpbWUtZmUvY29tcG9uZW50cy9SZXNlcnZlQ29sLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtCNEIsQUFFZ0IsQUFhSyxrQkFDQSxrQkFDRixnQkFDRixjQUNBLFFBaEJRLE1BZ0JQLHdFQWZHLGtCQUNDLG1CQUNDLG9CQUNHLHVCQUNELHNCQUNELHFCQUNILGtCQUNFLG9CQUNDLHFCQUFDIiwiZmlsZSI6Ii9Vc2Vycy95b25pa29rL0RvY3VtZW50cy93b3JrL3lpay5kZXYvcmVwb3Mvd2FzaGluZ3RpbWUtZmUvY29tcG9uZW50cy9SZXNlcnZlQ29sLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlc2VydmVDYXJkIGZyb20gXCIuL1Jlc2VydmVDYXJkXCI7XG5pbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgKHByb3BzKSA9PiB7XG4gICAgY29uc3QgW3RpbWVSYW5nZSwgc2V0VGltZVJhbmdlXSA9IHVzZVN0YXRlKGNyZWF0ZVRpbWVSYW5nZShwcm9wcy5kYXkpKTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlc2VydmUtY29sXCI+XG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPXtcInJlc2VydmUtY29sX19oZWFkZXJcIn0+XG4gICAgICAgICAgICAgICAge3Byb3BzLmRheS5mb3JtYXQoXCJNTU0gRG8gWVlZWVwiKX1cbiAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICB7dGltZVJhbmdlLnNsaWNlKDAsIC0xKS5tYXAoKHJhbmdlLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHJlc2VydmF0aW9uID0gcHJvcHMucmVzZXJ2YXRpb24uZmluZChyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1vbWVudChyLnN0YXJ0RGF0ZVRpbWUpLnZhbHVlT2YoKSA9PT0gcmFuZ2UudmFsdWVPZigpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxSZXNlcnZlQ2FyZCBrZXk9e2l9IGRhdGU9e3Byb3BzLmRheX0gc3RhcnRUaW1lPXtyYW5nZX0gZGlzYWJsZWQ9e3Jlc2VydmF0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kVGltZT17dGltZVJhbmdlW2kgKyAxXX0vPlxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgIC5yZXNlcnZlLWNvbCB7XG4gICAgICAgICAgICAgICAgICAgIEBhcHBseSBmbGV4IGZsZXgtY29sIHB4LTQgcHktMyBiZy13aGl0ZSByb3VuZGVkLWxnIG10LTEwIG14LTNcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnJlc2VydmUtY29sX19oZWFkZXJ7XG4gICAgICAgICAgICAgICAgICBAYXBwbHkgdGV4dC1jZW50ZXIgdGV4dC14bCBwLTMgdGV4dC1ncmF5LTgwMCB0ZXh0LXNlY29uZGFyeVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICAgICAgPC9kaXY+KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgY3JlYXRlVGltZVJhbmdlID0gKGRhdGUpID0+IHtcbiAgICAgICAgICAgIGRhdGUuaG91cnMoNikubWludXRlcyg0NSkuc2Vjb25kcygwKS5taWxsaXNlY29uZCgwKTtcbiAgICAgICAgICAgIHJldHVybiBbMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMF0ubWFwKGkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG1vbWVudChkYXRlLmFkZCg3NSwgJ20nKSk7XG4gICAgICAgIH0pO1xuICAgICAgICB9O1xuXG4iXX0= */\n/*@ sourceURL=/Users/yonikok/Documents/work/yik.dev/repos/washingtime-fe/components/ReserveCol.js */"));
});

const createTimeRange = date => {
  date.hours(6).minutes(45).seconds(0).millisecond(0);
  return [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map(i => {
    return moment__WEBPACK_IMPORTED_MODULE_3___default()(date.add(75, 'm'));
  });
};

/***/ }),

/***/ "./hocs/WithProfile.js":
/*!*****************************!*\
  !*** ./hocs/WithProfile.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_authService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/authService */ "./services/authService.js");
var _jsxFileName = "/Users/yonikok/Documents/work/yik.dev/repos/washingtime-fe/hocs/WithProfile.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




/* harmony default export */ __webpack_exports__["default"] = (Component => {
  return props => {
    const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
    const {
      0: loading,
      1: setLoading
    } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
      if (!_services_authService__WEBPACK_IMPORTED_MODULE_2__["isLoggedIn"]()) {
        router.replace('/login');
      } else {
        setLoading(false);
      }
    });
    return loading ? __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 26
      }
    }) : __jsx(Component, _extends({}, props, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 35
      }
    }));
  };
});

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _hocs_WithProfile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hocs/WithProfile */ "./hocs/WithProfile.js");
/* harmony import */ var _services_request__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/request */ "./services/request.js");
/* harmony import */ var _services_authService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/authService */ "./services/authService.js");
/* harmony import */ var _components_ReserveCol__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/ReserveCol */ "./components/ReserveCol.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "/Users/yonikok/Documents/work/yik.dev/repos/washingtime-fe/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








const Home = props => {
  const {
    0: reservations,
    1: setReservations
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    Object(_services_request__WEBPACK_IMPORTED_MODULE_4__["default"])(_services_authService__WEBPACK_IMPORTED_MODULE_5__["getToken"]()).get(`washingtime?page[size]=10000&filter[dateGte]=${moment__WEBPACK_IMPORTED_MODULE_7___default()().startOf('d').toISOString()}`).then(resp => {
      setReservations(resp.data.data);
    });
  }, []);
  return __jsx("div", {
    className: "jsx-1131185312",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    locale: props.locale,
    title: "#WannaWash?",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }, __jsx("main", {
    className: "jsx-1131185312" + " " + "flex flex-1 justify-center flex-col my-10",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 17
    }
  }, __jsx("h1", {
    className: "jsx-1131185312" + " " + "heading",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 21
    }
  }, "Reserve here \uD83D\uDC5A"), __jsx("div", {
    className: "jsx-1131185312" + " " + "reserve-row__block",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 21
    }
  }, __jsx(_components_ReserveCol__WEBPACK_IMPORTED_MODULE_6__["default"], {
    day: moment__WEBPACK_IMPORTED_MODULE_7___default()(),
    reservation: reservations.filter(res => {
      return moment__WEBPACK_IMPORTED_MODULE_7___default()(res.startDateTime).startOf('d').valueOf() === moment__WEBPACK_IMPORTED_MODULE_7___default()().startOf('d').valueOf();
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 25
    }
  }), __jsx(_components_ReserveCol__WEBPACK_IMPORTED_MODULE_6__["default"], {
    day: moment__WEBPACK_IMPORTED_MODULE_7___default()().add(1, 'd'),
    reservation: reservations.filter(res => {
      return moment__WEBPACK_IMPORTED_MODULE_7___default()(res.startDateTime).startOf('d').valueOf() === moment__WEBPACK_IMPORTED_MODULE_7___default()().startOf('d').add(1, 'd').valueOf();
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 25
    }
  }), __jsx(_components_ReserveCol__WEBPACK_IMPORTED_MODULE_6__["default"], {
    day: moment__WEBPACK_IMPORTED_MODULE_7___default()().add(2, 'd'),
    reservation: reservations.filter(res => {
      return moment__WEBPACK_IMPORTED_MODULE_7___default()(res.startDateTime).startOf('d').valueOf() === moment__WEBPACK_IMPORTED_MODULE_7___default()().startOf('d').add(2, 'd').valueOf();
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 25
    }
  }), __jsx(_components_ReserveCol__WEBPACK_IMPORTED_MODULE_6__["default"], {
    day: moment__WEBPACK_IMPORTED_MODULE_7___default()().add(3, 'd'),
    reservation: reservations.filter(res => {
      return moment__WEBPACK_IMPORTED_MODULE_7___default()(res.startDateTime).startOf('d').valueOf() === moment__WEBPACK_IMPORTED_MODULE_7___default()().startOf('d').add(3, 'd').valueOf();
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 25
    }
  }), __jsx(_components_ReserveCol__WEBPACK_IMPORTED_MODULE_6__["default"], {
    day: moment__WEBPACK_IMPORTED_MODULE_7___default()().add(4, 'd'),
    reservation: reservations.filter(res => {
      return moment__WEBPACK_IMPORTED_MODULE_7___default()(res.startDateTime).startOf('d').valueOf() === moment__WEBPACK_IMPORTED_MODULE_7___default()().startOf('d').add(4, 'd').valueOf();
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 25
    }
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1131185312",
    __self: undefined
  }, ".reserve-row__block.jsx-1131185312{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1 1 0%;-ms-flex:1 1 0%;flex:1 1 0%;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}.heading.jsx-1131185312{font-size:3rem;color:#2d3748;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95b25pa29rL0RvY3VtZW50cy93b3JrL3lpay5kZXYvcmVwb3Mvd2FzaGluZ3RpbWUtZmUvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0N3QixBQUVnQixBQVFFLGVBQ0QsY0FDSSxrQkFBQywyQkFUUCxnREFDVyxtR0FDTCx1RUFDSCx5REFDakIiLCJmaWxlIjoiL1VzZXJzL3lvbmlrb2svRG9jdW1lbnRzL3dvcmsveWlrLmRldi9yZXBvcy93YXNoaW5ndGltZS1mZS9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgV2l0aFByb2ZpbGUgZnJvbSBcIi4uL2hvY3MvV2l0aFByb2ZpbGVcIjtcbmltcG9ydCBnZXRDbGllbnQgZnJvbSBcIi4uL3NlcnZpY2VzL3JlcXVlc3RcIjtcbmltcG9ydCAqIGFzIGF1dGhTZXJ2aWNlIGZyb20gJy4uL3NlcnZpY2VzL2F1dGhTZXJ2aWNlJztcbmltcG9ydCBSZXNlcnZlUm93IGZyb20gXCIuLi9jb21wb25lbnRzL1Jlc2VydmVDb2xcIjtcbmltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xuXG5jb25zdCBIb21lID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgW3Jlc2VydmF0aW9ucywgc2V0UmVzZXJ2YXRpb25zXSA9IHVzZVN0YXRlKFtdKTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBnZXRDbGllbnQoYXV0aFNlcnZpY2UuZ2V0VG9rZW4oKSkuZ2V0KGB3YXNoaW5ndGltZT9wYWdlW3NpemVdPTEwMDAwJmZpbHRlcltkYXRlR3RlXT0ke21vbWVudCgpLnN0YXJ0T2YoJ2QnKS50b0lTT1N0cmluZygpfWApLnRoZW4ocmVzcCA9PiB7XG4gICAgICAgICAgICBzZXRSZXNlcnZhdGlvbnMocmVzcC5kYXRhLmRhdGEpO1xuICAgICAgICB9KVxuICAgIH0sIFtdKTtcbiAgICByZXR1cm4gKDxkaXY+XG4gICAgICAgICAgICA8TGF5b3V0IGxvY2FsZT17cHJvcHMubG9jYWxlfSB0aXRsZT1cIiNXYW5uYVdhc2g/XCI+XG4gICAgICAgICAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwiZmxleCBmbGV4LTEganVzdGlmeS1jZW50ZXIgZmxleC1jb2wgbXktMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17XCJoZWFkaW5nXCJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgUmVzZXJ2ZSBoZXJlIPCfkZpcbiAgICAgICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wicmVzZXJ2ZS1yb3dfX2Jsb2NrXCJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJlc2VydmVSb3cgZGF5PXttb21lbnQoKX0gcmVzZXJ2YXRpb249e3Jlc2VydmF0aW9ucy5maWx0ZXIocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbW9tZW50KHJlcy5zdGFydERhdGVUaW1lKS5zdGFydE9mKCdkJykudmFsdWVPZigpID09PSBtb21lbnQoKS5zdGFydE9mKCdkJykudmFsdWVPZigpXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJlc2VydmVSb3cgZGF5PXttb21lbnQoKS5hZGQoMSwgJ2QnKX0gcmVzZXJ2YXRpb249e3Jlc2VydmF0aW9ucy5maWx0ZXIocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbW9tZW50KHJlcy5zdGFydERhdGVUaW1lKS5zdGFydE9mKCdkJykudmFsdWVPZigpID09PSBtb21lbnQoKS5zdGFydE9mKCdkJykuYWRkKDEsICdkJykudmFsdWVPZigpXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJlc2VydmVSb3cgZGF5PXttb21lbnQoKS5hZGQoMiwgJ2QnKX0gcmVzZXJ2YXRpb249e3Jlc2VydmF0aW9ucy5maWx0ZXIocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbW9tZW50KHJlcy5zdGFydERhdGVUaW1lKS5zdGFydE9mKCdkJykudmFsdWVPZigpID09PSBtb21lbnQoKS5zdGFydE9mKCdkJykuYWRkKDIsICdkJykudmFsdWVPZigpXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJlc2VydmVSb3cgZGF5PXttb21lbnQoKS5hZGQoMywgJ2QnKX0gcmVzZXJ2YXRpb249e3Jlc2VydmF0aW9ucy5maWx0ZXIocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbW9tZW50KHJlcy5zdGFydERhdGVUaW1lKS5zdGFydE9mKCdkJykudmFsdWVPZigpID09PSBtb21lbnQoKS5zdGFydE9mKCdkJykuYWRkKDMsICdkJykudmFsdWVPZigpXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJlc2VydmVSb3cgZGF5PXttb21lbnQoKS5hZGQoNCwgJ2QnKX0gcmVzZXJ2YXRpb249e3Jlc2VydmF0aW9ucy5maWx0ZXIocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbW9tZW50KHJlcy5zdGFydERhdGVUaW1lKS5zdGFydE9mKCdkJykudmFsdWVPZigpID09PSBtb21lbnQoKS5zdGFydE9mKCdkJykuYWRkKDQsICdkJykudmFsdWVPZigpXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX0vPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L21haW4+XG4gICAgICAgICAgICA8L0xheW91dD5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAucmVzZXJ2ZS1yb3dfX2Jsb2NrIHtcbiAgICAgICAgICAgICAgICAgICAgQGFwcGx5IGZsZXggZmxleC0xIGp1c3RpZnktY2VudGVyIHNlbGYtY2VudGVyIGZsZXgtd3JhcDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmhlYWRpbmd7XG4gICAgICAgICAgICAgICAgICAgIEBhcHBseSB0ZXh0LTV4bCB0ZXh0LWdyYXktODAwIHRleHQtY2VudGVyXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufTtcbmV4cG9ydCBkZWZhdWx0IFdpdGhQcm9maWxlKEhvbWUpOyJdfQ== */\n/*@ sourceURL=/Users/yonikok/Documents/work/yik.dev/repos/washingtime-fe/pages/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_hocs_WithProfile__WEBPACK_IMPORTED_MODULE_3__["default"])(Home));

/***/ }),

/***/ "./services/authService.js":
/*!*********************************!*\
  !*** ./services/authService.js ***!
  \*********************************/
/*! exports provided: isLoggedIn, isTokenExpired, getToken, logout, getProfile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLoggedIn", function() { return isLoggedIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTokenExpired", function() { return isTokenExpired; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getToken", function() { return getToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProfile", function() { return getProfile; });
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jwt-decode */ "jwt-decode");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_0__);

function isLoggedIn() {
  const token = getToken();

  if (token) {
    return !isTokenExpired(token);
  } else {
    return false;
  }
}
function isTokenExpired(token) {
  if (token) {
    try {
      const decoded = getProfile(token);
      return decoded.exp < Date.now() / 1000;
    } catch (err) {
      return false;
    }
  }
}
function getToken() {
  return window.localStorage.getItem('idToken');
}
function logout() {
  window.localStorage.removeItem('idToken');
}
function getProfile(token) {
  if (process.env.REACT_APP_DUMMY_DATA === 'true') return {
    given_name: 'Dummy',
    family_name: 'User'
  };
  return jwt_decode__WEBPACK_IMPORTED_MODULE_0___default()(token);
}

/***/ }),

/***/ "./services/request.js":
/*!*****************************!*\
  !*** ./services/request.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);


const getClient = token => axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: 'http://localhost:5000/api',
  timeout: 60000,
  headers: {
    authorization: 'Bearer ' + token
  }
});

/* harmony default export */ __webpack_exports__["default"] = (getClient);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/yonikok/Documents/work/yik.dev/repos/washingtime-fe/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "jwt-decode":
/*!*****************************!*\
  !*** external "jwt-decode" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jwt-decode");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map