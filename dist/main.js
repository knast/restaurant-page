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

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"content\": () => (/* binding */ content),\n/* harmony export */   \"default\": () => (/* binding */ displayAbout)\n/* harmony export */ });\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n\n\nfunction displayAbout() {\n\n\n    const body = document.querySelector('body');\n    const content = document.querySelector('.content');\n    const contentMenu = document.querySelector('.menu-content');\n    \n    \n    \n    \n    const contentContainer = document.createElement('div');\n    contentContainer.classList.add('content');\n    \n\n    \n    \n\n    \n    const title = document.createElement('h1');\n    title.textContent = 'About';\n    const description = document.createElement('article');\n    contentContainer.appendChild(title);\n    contentContainer.appendChild(description);\n    \n    description.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'\n    body.appendChild(contentContainer);\n    \n\n\n\n}\n\nconst content = document.querySelector('.content');\n\n//# sourceURL=webpack://restaurant/./src/about.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ displayContact)\n/* harmony export */ });\nfunction displayContact() {\n    const body = document.querySelector('body');\n\n    const contactsFactory = (fullName, phoneNumber, email) => {\n        return {fullName, phoneNumber, email};\n    }\n\n    const contactContent = document.createElement('div');\n    contactContent.classList.add('contact-content');\n    body.appendChild(contactContent);\n    const contactContainer = document.querySelector('.contact-content');\n\n    const infoContent = document.createElement('div');\n    infoContent.classList.add('info-container');\n    contactContainer.appendChild(infoContent);\n                       \n\n    \n    const infoContainer = document.querySelector('.info-container');\n\n    const contacts = [];\n\n    const firstContact = contactsFactory('Jan Kowalski', '455-645-980', 'jankowalski@onet.pl');\n    contacts.push(firstContact);\n\n    console.log(firstContact);\n    const secondContact = contactsFactory('Krzysztof Nowak', '540-766-666', 'knowak@gmail.com');\n    contacts.push(secondContact);\n    \n    const cards = [];\n    contacts.forEach(contact => {\n        const infoCard = document.createElement('div');\n        infoCard.classList.add('info-card');\n        infoContainer.appendChild(infoCard);\n    });\n    \n    \n    const dataInfo = document.querySelectorAll('.info-card');\n    const infoCards = Array.from(dataInfo);\n\n    infoCards.forEach(infoCard => {\n        const image = new Image(100,100);\n        image.src = '../src/images/avatar1.png';\n        image.classList.add('image');\n        infoCard.appendChild(image);\n        const infoSection = document.createElement('div');\n        infoSection.classList.add('info-section');\n        infoCard.appendChild(infoSection);\n    })\n\n    const sectionsList = document.querySelectorAll('.info-section');\n    const sections = Array.from(sectionsList);\n\n    sections.forEach(section => {\n        const fullName = document.createElement('h3');\n        fullName.classList.add('infos');\n        const phoneNumber = document.createElement('h3');\n        phoneNumber.classList.add('infos');\n        const email = document.createElement('h3');\n        email.classList.add('infos');\n        section.appendChild(fullName);\n        section.appendChild(phoneNumber);\n        section.appendChild(email);\n        \n    })\n\n    const infosList = document.querySelectorAll('.infos');\n    const infos = Array.from(infosList);\n\n    const firstContactInfos = infos.splice(0,3);\n    const secondContactInfos = infos.splice(0,3);\n\n    console.log(firstContactInfos, secondContactInfos);\n\n\n    firstContactInfos[0].textContent = firstContact['fullName'];\n    firstContactInfos[1].textContent = firstContact['phoneNumber'];\n    firstContactInfos[2].textContent = firstContact['email'];\n\n    secondContactInfos[0].textContent = secondContact['fullName'];\n    secondContactInfos[1].textContent = secondContact['phoneNumber'];\n    secondContactInfos[2].textContent = secondContact['email'];\n    \n    \n        \n\n\n}\n\n//# sourceURL=webpack://restaurant/./src/contact.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _navbar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar.js */ \"./src/navbar.js\");\n/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about.js */ \"./src/about.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n\n\n\n\n\n\n\n(() => {\n    (0,_navbar_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    (0,_about_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n    \n    const about = document.querySelector('.About');\n    const menu = document.querySelector('.Menu');\n    const contact = document.querySelector('.Contact');\n    const menuContainer = document.querySelector('.menu-container');\n    const body = document.querySelector('body');\n    const aboutContent = document.querySelector('.content');\n    const menuContent = document.querySelector('.content-menu');\n    \n    \n    const state = {\n        about: true,\n        menu: false,\n        contact: false\n    }\n\n\n\n\n    menu.addEventListener('click', function() {\n        if(state.menu === false) {\n\n            const menuContent = document.querySelector('.content-menu');\n            const aboutContent = document.querySelector('.content')\n            const contentContact = document.querySelector('.contact-content');\n            if(state.about === true) {\n                body.removeChild(aboutContent);\n            } else if(state.contact === true) {\n                body.removeChild(contentContact);\n            }\n            (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n            \n            state.about = false;\n            state.menu = true;\n            state.contact = false;\n        }\n        console.log(aboutContent);\n    });\n\n    about.addEventListener('click', function() {\n        console.log(menuContent);\n        if(state.about === false) {\n            \n            const aboutContent = document.querySelector('.content');\n            const menuContent = document.querySelector('.content-menu');\n            const contactContent = document.querySelector('.content-contact');\n        if(state.menu === true) { \n            body.removeChild(menuContent);\n        } else if(state.contact === true) {\n            body.removeChild(contactContent);\n        }\n            \n            \n            (0,_about_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n            state.about = true;\n            state.menu = false;\n            state.contact = false;\n        }\n        \n    })\n\n    contact.addEventListener('click', function() {\n        if(state.contact === false) {\n            const aboutContent = document.querySelector('.content');\n            const menuContent = document.querySelector('.content-menu');\n            const contactContent = document.querySelector('.contact-content');\n            if(state.about === true) {\n                body.removeChild(aboutContent);\n            } else if(state.menu === true) {\n                body.removeChild(menuContent);\n            }\n            (0,_contact_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n            state.about = false;\n            state.menu = false;\n            state.contact = true;\n        }\n    })\n\n\n\n   \n\n\n})();\n\n\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"contentMenu\": () => (/* binding */ contentMenu),\n/* harmony export */   \"default\": () => (/* binding */ displayMenu)\n/* harmony export */ });\n\nfunction displayMenu() {\n\n    const body = document.querySelector('body');\n    const content = document.querySelector('.content');\n\n    \n    \n\n    const contentContainer = document.createElement('div');\n    contentContainer.classList.add('content-menu')\n    const menuContainer = document.createElement('div');\n    const titleMenu = document.createElement('h1');\n    menuContainer.classList.add('menu-container');\n    contentContainer.appendChild(menuContainer);\n    contentContainer.appendChild(titleMenu);\n    \n\n\n    \n    const imageWidth = 100;\n    const imageHeight = 100;\n    const dishes = [];\n\n    const dishOne = new Image(imageWidth, imageHeight);\n    dishOne.src = '../src/images/dish1.jpg';\n    dishOne.classList.add('image');\n    dishes.push(dishOne);\n\n    const dishTwo = new Image(imageWidth, imageHeight);\n    dishTwo.src = '../src/images/dish2.jpg';\n    dishTwo.classList.add('image');\n    dishes.push(dishTwo);\n\n    const dishThree = new Image(imageWidth, imageHeight);\n    dishThree.src = '../src/images/dish3.jpg';\n    dishThree.classList.add('image');\n    dishes.push(dishThree);\n\n    const dishFour = new Image(imageWidth, imageHeight);\n    dishFour.src = '../src/images/dish4.jpg';\n    dishFour.classList.add('image');\n    dishes.push(dishFour);\n\n    const dishFive = new Image(imageWidth, imageHeight);\n    dishFive.src = '../src/images/dish5.jpg';\n    dishFive.classList.add('image');\n    dishes.push(dishFive);\n\n    const dishSix = new Image(imageWidth, imageHeight);\n    dishSix.src = '../src/images/dish6.jpg';\n    dishSix.classList.add('image');\n    dishes.push(dishSix);\n\n    dishes.forEach((dish) => {\n        const dishCard = document.createElement('div');\n        dishCard.classList.add('card');\n        const dishDescription = document.createElement('article');\n        dishDescription.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ';\n        dishDescription.classList.add('dish-description');\n        dishCard.appendChild(dish);\n        dishCard.appendChild(dishDescription);\n        menuContainer.appendChild(dishCard);\n\n    })\n\n    contentContainer.appendChild(menuContainer);\n    body.appendChild(contentContainer);\n\n\n    \n\n    \n\n}\n\nconst contentMenu = document.querySelector('.content-menu');\n\n//# sourceURL=webpack://restaurant/./src/menu.js?");

/***/ }),

/***/ "./src/navbar.js":
/*!***********************!*\
  !*** ./src/navbar.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ displayNavbar)\n/* harmony export */ });\nfunction displayNavbar() {\n\n    const header = document.createElement('header');\n    const logo = document.createElement('a');\n    const navigation = document.createElement('nav');\n    const navList = document.createElement('ul');\n    const body = document.querySelector('body');\n\n\n    \n    \n\n    const list = ['About', 'Menu', 'Contact'];\n    navigation.appendChild(navList);\n    for(let i = 0; i < list.length; i++) {\n        const partList = document.createElement('li');\n        const listBtn = document.createElement('button');\n        listBtn.classList.add(`${list[i]}`);\n        \n        listBtn.textContent = list[i];\n        partList.appendChild(listBtn);\n        navList.appendChild(partList);\n        \n\n    }\n\n    logo.textContent = 'RESTAURANT';\n    header.appendChild(logo);\n    header.appendChild(navigation);\n    \n    body.appendChild(header);\n    \n    \n\n\n} \n\n//# sourceURL=webpack://restaurant/./src/navbar.js?");

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