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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getContactPage\": () => (/* binding */ getContactPage)\n/* harmony export */ });\nfunction getContactPage() {\r\n    const content = document.querySelector('.content');\r\n    content.innerHTML = '';\r\n\r\n    const contact = document.createElement('div');\r\n    contact.innerHTML = '<h3>CONTACT DETAILS</h3>'+'<h2>Restaurant Prime Cut</h2>'+'<p>Twarda 18, 00-105 Warsaw<p>'+'<p>tel: +48 733 08 22 33<p>'+'<p>e-mail: reservation@primecut.pl<p>'+'<h2>OPENING HOURS</h2>'+'<p>Monday - Thursday: 12 a.m. - 11 p.m.<p>'+'<p>Friday: 12 a.m. - 12 p.m.<p>'+'<p>Saturday: 4 p.m. - 12 p.m.<p>'+'<p>Sunday: 4 p.m. - 10 p.m.<p>';\r\n    contact.classList.add('contact-page');\r\n\r\n    return content.appendChild(contact);\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getHomePage\": () => (/* binding */ getHomePage)\n/* harmony export */ });\nfunction getHomePage(){\r\n    const content = document.querySelector('.content');\r\n    content.innerHTML = '';\r\n\r\n    const home = document.createElement('div');\r\n    home.innerHTML = \"<h3>Best Steaks in Poland<h3>\" + \"<h4>Prime Cut is the best steak house restaurant in Warsaw. Run in a classic New York style with an addition of European cuisine elements.</h4>\"+\"<h4>Prime Cut is most known of its delicious, seasoned meat and fresh, daily delivered seafood.<h4>\"+\"<h4>The quality of the dishes is supervised by the best Polish cooks, carefully selected by Krystian Grejman - the chef known for his innovative, careful approach to cooking and high care for the final quality of the meal.</h4>\"+\"<h4>Prime Cut uses only the highest quality products which guarantee the best culinary experience. In order to maintain the right taste and flavor, steaks and fishes are prepared on a classic wood-burning grill.<h4>\"+\"<h4>The restaurant also offers fresh bread (baked on the spot), seasonal vegetables and various types of desserts, perfectly blending with the main dishes.<h4>\"+\"<h4>Prime Cut also offers an afternoon lunch menu, especially popular among business clients from Poland and abroad. Connoisseurs and regular customers will also appreciate a wide range of spirits, starting with wines and ending with tasty coctails.<h4>\";\r\n    home.classList.add('homepage');\r\n\r\n    return content.appendChild(home);\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n\r\n\r\n\r\nconst createContent = (function() {\r\n    \r\n    //start page\r\n    const content = document.querySelector('.content');\r\n    content.appendChild((0,_home_js__WEBPACK_IMPORTED_MODULE_0__.getHomePage)());\r\n\r\n    //menu page\r\n    const menu = document.querySelector('#menu');\r\n    menu.addEventListener('click', ()=> (0,_menu_js__WEBPACK_IMPORTED_MODULE_1__.getMenuPage)());\r\n    \r\n    //contact page\r\n    const contact = document.querySelector('#contact');\r\n    contact.addEventListener('click', ()=> (0,_contact_js__WEBPACK_IMPORTED_MODULE_2__.getContactPage)());\r\n    \r\n    //home page\r\n    const home = document.querySelector('#home');\r\n    home.addEventListener('click', ()=> (0,_home_js__WEBPACK_IMPORTED_MODULE_0__.getHomePage)());\r\n})();\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getMenuPage\": () => (/* binding */ getMenuPage)\n/* harmony export */ });\nfunction getMenuPage() {\r\n    const content = document.querySelector('.content');\r\n    content.innerHTML = '';\r\n\r\n    const menu = document.createElement('div');\r\n    menu.innerHTML = '<h3>Menu<h3>';\r\n    menu.classList.add('menupage');\r\n    \r\n    //MENU\r\n    const menuContainer = document.createElement('div');\r\n    menuContainer.classList.add('menu-container');\r\n\r\n    const menu_1 = document.createElement('div');\r\n    menu_1.innerHTML = '<h4>Position 1</h4>';\r\n    menu_1.classList.add('menuList');\r\n    menuContainer.appendChild(menu_1);\r\n\r\n    const menu_2 = document.createElement('div');\r\n    menu_2.innerHTML = '<h4>Position 2</h4>';\r\n    menu_2.classList.add('menuList');\r\n    menuContainer.appendChild(menu_2);\r\n\r\n    const menu_3 = document.createElement('div');\r\n    menu_3.innerHTML = '<h4>Position 3</h4>';\r\n    menu_3.classList.add('menuList');\r\n    menuContainer.appendChild(menu_3);\r\n\r\n    const menu_4 = document.createElement('div');\r\n    menu_4.innerHTML = '<h4>Position 4</h4>';\r\n    menu_4.classList.add('menuList');\r\n    menuContainer.appendChild(menu_4);\r\n\r\n    const menu_5 = document.createElement('div');\r\n    menu_5.innerHTML = '<h4>Position 5</h4>';\r\n    menu_5.classList.add('menuList');\r\n    menuContainer.appendChild(menu_5);\r\n\r\n    const menu_6 = document.createElement('div');\r\n    menu_6.innerHTML = '<h4>Position 6</h4>';\r\n    menu_6.classList.add('menuList');\r\n    menuContainer.appendChild(menu_6);\r\n\r\n    menu.appendChild(menuContainer);\r\n  \r\n\r\n    return content.appendChild(menu);\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

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