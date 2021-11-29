/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/firstLoad.js":
/*!**************************!*\
  !*** ./src/firstLoad.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\nconst firstLoad = () => {\n    const content = document.querySelector('#content');\n\n    const mainDiv = document.createElement('div');\n    \n    const header = document.createElement('header');\n    const h1 = document.createElement('h1');\n    h1.textContent = 'The Best Restaurant';\n    const nav = document.createElement('nav');\n    const ul = document.createElement('ul');\n    const a1 = document.createElement('a');\n    a1.textContent = 'Home';\n    const a2 = document.createElement('a');\n    a2.textContent = 'Menu';\n    const a3 = document.createElement('a');\n    a3.textContent = 'Contact';\n    ul.append(a1, a2, a3);\n    nav.append(ul);\n    header.append(h1, nav);\n    const div1 = document.createElement('div');\n    const img = document.createElement('img');\n    img.setAttribute('src', '/pexels-stokpic-5317.jpg');\n    img.setAttribute('alt', 'food picture');\n    div1.appendChild(img);\n    const h2 = document.createElement('h2');\n    h2.textContent = 'Welcome to The Best Restaurant';\n    const div2 = document.createElement('div');\n    div2.textContent = 'We use only fresh ingredients, our cook is the best in the world and we are the cheapest at the same time. We are the best at everything.'\n        + ' Come and try our food on the first day opening of the restaurant!';\n    const div3 = document.createElement('div');\n    div3.textContent = '50% OFF TODAY!';\n\n    content.append(header, div1, h2, div2, div3);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (firstLoad);\n\n//# sourceURL=webpack://restaurant-page/./src/firstLoad.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _firstLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./firstLoad */ \"./src/firstLoad.js\");\n\n\n\n\n(0,_firstLoad__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;