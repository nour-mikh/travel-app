var Client =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/client/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/client/index.js":
/*!*****************************!*\
  !*** ./src/client/index.js ***!
  \*****************************/
/*! exports provided: generateInfo, getInfo, postData, updateUI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.scss */ \"./src/client/styles/style.scss\");\n/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _js_handleSubmit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/handleSubmit */ \"./src/client/js/handleSubmit.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getInfo\", function() { return _js_handleSubmit__WEBPACK_IMPORTED_MODULE_1__[\"getInfo\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"generateInfo\", function() { return _js_handleSubmit__WEBPACK_IMPORTED_MODULE_1__[\"generateInfo\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"postData\", function() { return _js_handleSubmit__WEBPACK_IMPORTED_MODULE_1__[\"postData\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"updateUI\", function() { return _js_handleSubmit__WEBPACK_IMPORTED_MODULE_1__[\"updateUI\"]; });\n\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://Client/./src/client/index.js?");

/***/ }),

/***/ "./src/client/js/handleSubmit.js":
/*!***************************************!*\
  !*** ./src/client/js/handleSubmit.js ***!
  \***************************************/
/*! exports provided: getInfo, generateInfo, postData, updateUI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getInfo\", function() { return getInfo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"generateInfo\", function() { return generateInfo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"postData\", function() { return postData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateUI\", function() { return updateUI; });\nconst baseUrl = 'http://api.geonames.org/searchJSON?name='\r\nconst user = '&username=nour_m&maxRows=10'\r\n\r\nconst search = document.getElementById('search');\r\n\r\nsearch.addEventListener('click', generateInfo)\r\n\r\nfunction generateInfo(e){\r\n    e.preventDefault();\r\n    let city = document.getElementById('location').value\r\n    getInfo(baseUrl + city + user)\r\n}\r\n\r\nconst getInfo = async (baseUrl, city, user) => {\r\n    const res = await fetch(baseUrl + city + user);\r\n    try{\r\n      const data = await res.json();\r\n      console.log(data);\r\n      postData('/data',\r\n       {countryName: data.geonames[0].countryName,\r\n        latitude: data.geonames[0].lat,\r\n        longitude: data.geonames[0].lng,\r\n      }).then(res => {\r\n        console.log(res);\r\n        updateUI();\r\n      })\r\n      return data;\r\n    }catch(error){\r\n      console.log('error', error)\r\n    }\r\n  }\r\n\r\n\r\nconst postData = async ( url = '', data = {})=>{\r\n    console.log(data)\r\n      const response = await fetch(url, {\r\n      method: 'POST', \r\n      credentials: 'same-origin', \r\n      headers: {\r\n          'Content-Type': 'application/json',\r\n      },\r\n      body: JSON.stringify(data),      \r\n    });\r\n  \r\n      try {\r\n        const newData = await response.json();\r\n        return newData\r\n      }catch(error) {\r\n      console.log(\"error\", error);\r\n      }\r\n  }\r\n\r\n  const updateUI = async() => {\r\n    const update = await fetch('/data');\r\n    const data = await update.json();\r\n    try{\r\n      console.log(data)\r\n      document.getElementById('location').innerHTML = 'Country:' + data.countryName;\r\n      document.getElementById('long').innerHTML = 'Longitude' + data.longitude;\r\n      document.getElementById('lat').innerHTML = 'Latitude' + data.latitude;\r\n    } catch(error) {\r\n      console.log('error', error)\r\n    }\r\n  }\r\n\r\n  \n\n//# sourceURL=webpack://Client/./src/client/js/handleSubmit.js?");

/***/ }),

/***/ "./src/client/styles/style.scss":
/*!**************************************!*\
  !*** ./src/client/styles/style.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack://Client/./src/client/styles/style.scss?");

/***/ })

/******/ });