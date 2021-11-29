/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scss/index.scss":
/*!*****************************!*\
  !*** ./src/scss/index.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/assets/icons/inbox.svg":
/*!************************************!*\
  !*** ./src/assets/icons/inbox.svg ***!
  \************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 36 36\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M6 4.5H30L33 10.5V30C33 30.3978 32.842 30.7794 32.5607 31.0607C32.2794 31.342 31.8978 31.5 31.5 31.5H4.5C4.10218 31.5 3.72064 31.342 3.43934 31.0607C3.15804 30.7794 3 30.3978 3 30V10.506L6 4.5ZM19.5 21V15H16.5V21H12L18 27L24 21H19.5ZM29.646 10.5L28.146 7.5H7.8555L6.3555 10.5H29.646Z\" fill=\"#495057\"></path></svg>"

/***/ }),

/***/ "./src/assets/icons/menu.svg":
/*!***********************************!*\
  !*** ./src/assets/icons/menu.svg ***!
  \***********************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 30 31\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M3.75 5.5H26.25V8H3.75V5.5ZM3.75 14.25H26.25V16.75H3.75V14.25ZM3.75 23H26.25V25.5H3.75V23Z\" fill=\"#495057\"></path></svg>"

/***/ }),

/***/ "./src/assets/icons/next-7-days.svg":
/*!******************************************!*\
  !*** ./src/assets/icons/next-7-days.svg ***!
  \******************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 36 36\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M25.5 4.5H31.5C31.8978 4.5 32.2794 4.65804 32.5607 4.93934C32.842 5.22064 33 5.60217 33 6V30C33 30.3978 32.842 30.7794 32.5607 31.0607C32.2794 31.342 31.8978 31.5 31.5 31.5H4.5C4.10218 31.5 3.72064 31.342 3.43934 31.0607C3.15804 30.7794 3 30.3978 3 30V6C3 5.60217 3.15804 5.22064 3.43934 4.93934C3.72064 4.65804 4.10218 4.5 4.5 4.5H10.5V1.5H13.5V4.5H22.5V1.5H25.5V4.5ZM6 13.5V28.5H30V13.5H6ZM9 19.5H16.5V25.5H9V19.5Z\" fill=\"#495057\"></path></svg>"

/***/ }),

/***/ "./src/assets/icons/plus.svg":
/*!***********************************!*\
  !*** ./src/assets/icons/plus.svg ***!
  \***********************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 30 30\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12.8571 12.8571V0H17.1429V12.8571H30V17.1429H17.1429V30H12.8571V17.1429H0V12.8571H12.8571Z\" fill=\"#495057\"></path></svg>"

/***/ }),

/***/ "./src/assets/icons/today.svg":
/*!************************************!*\
  !*** ./src/assets/icons/today.svg ***!
  \************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 36 36\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M25.5 4.5H31.5C31.8978 4.5 32.2794 4.65803 32.5607 4.93934C32.842 5.22064 33 5.60217 33 6V30C33 30.3978 32.842 30.7794 32.5607 31.0607C32.2794 31.342 31.8978 31.5 31.5 31.5H4.5C4.10218 31.5 3.72064 31.342 3.43934 31.0607C3.15804 30.7794 3 30.3978 3 30V6C3 5.60217 3.15804 5.22064 3.43934 4.93934C3.72064 4.65803 4.10218 4.5 4.5 4.5H10.5V1.5H13.5V4.5H22.5V1.5H25.5V4.5ZM6 13.5V28.5H30V13.5H6ZM9 16.5H12V19.5H9V16.5ZM9 22.5H12V25.5H9V22.5ZM15 16.5H27V19.5H15V16.5ZM15 22.5H22.5V25.5H15V22.5Z\" fill=\"#495057\"></path></svg>"

/***/ }),

/***/ "./src/js/components/Divider.js":
/*!**************************************!*\
  !*** ./src/js/components/Divider.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Divider = () => {
  const element = document.createElement('hr')
  element.className = 'divider'

  return element
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Divider);


/***/ }),

/***/ "./src/js/components/Main.js":
/*!***********************************!*\
  !*** ./src/js/components/Main.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Menu */ "./src/js/components/Menu.js");
/* harmony import */ var _TasksView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TasksView */ "./src/js/components/TasksView.js");



const Main = (() => {
  const main = document.createElement('div')
  main.className = 'main'

  main.appendChild(_Menu__WEBPACK_IMPORTED_MODULE_0__["default"].element)
  main.appendChild(_TasksView__WEBPACK_IMPORTED_MODULE_1__["default"].element)

  return main
})()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Main);


/***/ }),

/***/ "./src/js/components/Menu.js":
/*!***********************************!*\
  !*** ./src/js/components/Menu.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MenuOptions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MenuOptions */ "./src/js/components/MenuOptions.js");
/* harmony import */ var _Divider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Divider */ "./src/js/components/Divider.js");



const Menu = (() => {
  const element = document.createElement('aside')
  element.className = 'menu'

  element.appendChild(_MenuOptions__WEBPACK_IMPORTED_MODULE_0__["default"])
  element.appendChild((0,_Divider__WEBPACK_IMPORTED_MODULE_1__["default"])())

  const toggleHide = () => {
    element.classList.toggle('hidden')
  }

  const generateTags = (tags) => {}

  return { element, toggleHide, generateTags }
})()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Menu);


/***/ }),

/***/ "./src/js/components/MenuOption.js":
/*!*****************************************!*\
  !*** ./src/js/components/MenuOption.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const MenuOption = (icon, title, active, clickEvent) => {
  const element = document.createElement('div')
  element.className = active
    ? 'menu__option menu__option--active'
    : 'menu__option'
  element.addEventListener('click', clickEvent)

  const titleElement = document.createElement('h3')
  titleElement.className = 'menu__option__title'
  titleElement.textContent = title

  element.appendChild(icon)
  element.appendChild(titleElement)

  return element
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MenuOption);


/***/ }),

/***/ "./src/js/components/MenuOptions.js":
/*!******************************************!*\
  !*** ./src/js/components/MenuOptions.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _icons_InboxIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icons/InboxIcon */ "./src/js/components/icons/InboxIcon.js");
/* harmony import */ var _icons_TodayIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons/TodayIcon */ "./src/js/components/icons/TodayIcon.js");
/* harmony import */ var _icons_NextDaysIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons/NextDaysIcon */ "./src/js/components/icons/NextDaysIcon.js");
/* harmony import */ var _MenuOption__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MenuOption */ "./src/js/components/MenuOption.js");





const MenuOptions = (() => {
  const element = document.createElement('div')
  element.className = 'menu__options'

  const iconClass = 'menu__option__icon'
  element.appendChild(
    (0,_MenuOption__WEBPACK_IMPORTED_MODULE_3__["default"])((0,_icons_InboxIcon__WEBPACK_IMPORTED_MODULE_0__["default"])(iconClass), 'Inbox', false, (e) => console.log(e))
  )
  element.appendChild(
    (0,_MenuOption__WEBPACK_IMPORTED_MODULE_3__["default"])((0,_icons_TodayIcon__WEBPACK_IMPORTED_MODULE_1__["default"])(iconClass), 'Today', true, (e) => console.log(e))
  )
  element.appendChild(
    (0,_MenuOption__WEBPACK_IMPORTED_MODULE_3__["default"])((0,_icons_NextDaysIcon__WEBPACK_IMPORTED_MODULE_2__["default"])(iconClass), 'Next 7 days', false, (e) =>
      console.log(e)
    )
  )

  return element
})()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MenuOptions);


/***/ }),

/***/ "./src/js/components/Navbar.js":
/*!*************************************!*\
  !*** ./src/js/components/Navbar.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _icons_MenuIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icons/MenuIcon */ "./src/js/components/icons/MenuIcon.js");
/* harmony import */ var _icons_AddIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons/AddIcon */ "./src/js/components/icons/AddIcon.js");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Menu */ "./src/js/components/Menu.js");




const Navbar = (() => {
  const header = document.createElement('header')
  header.className = 'header'

  const navBar = document.createElement('nav')
  navBar.className = 'navbar'

  const title = document.createElement('h2')
  title.className = 'header__title'
  title.textContent = 'TodoApp'

  const menuIcon = (0,_icons_MenuIcon__WEBPACK_IMPORTED_MODULE_0__["default"])('header__icon header__icon--menu')
  menuIcon.addEventListener('click', _Menu__WEBPACK_IMPORTED_MODULE_2__["default"].toggleHide)

  navBar.appendChild(menuIcon)
  navBar.appendChild(title)
  navBar.appendChild((0,_icons_AddIcon__WEBPACK_IMPORTED_MODULE_1__["default"])('header__icon header__icon--add'))
  header.appendChild(navBar)

  return header
})()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);


/***/ }),

/***/ "./src/js/components/TasksView.js":
/*!****************************************!*\
  !*** ./src/js/components/TasksView.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const TasksView = (() => {
  const element = document.createElement('main')
  element.className = 'tasks-view'

  const generateTasks = (title, tasks) => {}

  return { element, generateTasks }
})()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TasksView);


/***/ }),

/***/ "./src/js/components/icons/AddIcon.js":
/*!********************************************!*\
  !*** ./src/js/components/icons/AddIcon.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Icon */ "./src/js/components/icons/Icon.js");
/* harmony import */ var _assets_icons_plus_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/icons/plus.svg */ "./src/assets/icons/plus.svg");
/* harmony import */ var _assets_icons_plus_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_plus_svg__WEBPACK_IMPORTED_MODULE_1__);



const AddIcon = (classes) => (0,_Icon__WEBPACK_IMPORTED_MODULE_0__["default"])((_assets_icons_plus_svg__WEBPACK_IMPORTED_MODULE_1___default()), classes)
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddIcon);


/***/ }),

/***/ "./src/js/components/icons/Icon.js":
/*!*****************************************!*\
  !*** ./src/js/components/icons/Icon.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Icon = (svg, classes) => {
  const svgContainer = document.createElement('div')
  svgContainer.className = classes
  svgContainer.innerHTML = svg

  return svgContainer
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);


/***/ }),

/***/ "./src/js/components/icons/InboxIcon.js":
/*!**********************************************!*\
  !*** ./src/js/components/icons/InboxIcon.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Icon */ "./src/js/components/icons/Icon.js");
/* harmony import */ var _assets_icons_inbox_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/icons/inbox.svg */ "./src/assets/icons/inbox.svg");
/* harmony import */ var _assets_icons_inbox_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_inbox_svg__WEBPACK_IMPORTED_MODULE_1__);



const InboxIcon = (classes) => (0,_Icon__WEBPACK_IMPORTED_MODULE_0__["default"])((_assets_icons_inbox_svg__WEBPACK_IMPORTED_MODULE_1___default()), classes)
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InboxIcon);


/***/ }),

/***/ "./src/js/components/icons/MenuIcon.js":
/*!*********************************************!*\
  !*** ./src/js/components/icons/MenuIcon.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Icon */ "./src/js/components/icons/Icon.js");
/* harmony import */ var _assets_icons_menu_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/icons/menu.svg */ "./src/assets/icons/menu.svg");
/* harmony import */ var _assets_icons_menu_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_menu_svg__WEBPACK_IMPORTED_MODULE_1__);



const MenuIcon = (classes) => (0,_Icon__WEBPACK_IMPORTED_MODULE_0__["default"])((_assets_icons_menu_svg__WEBPACK_IMPORTED_MODULE_1___default()), classes)
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MenuIcon);


/***/ }),

/***/ "./src/js/components/icons/NextDaysIcon.js":
/*!*************************************************!*\
  !*** ./src/js/components/icons/NextDaysIcon.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Icon */ "./src/js/components/icons/Icon.js");
/* harmony import */ var _assets_icons_next_7_days_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/icons/next-7-days.svg */ "./src/assets/icons/next-7-days.svg");
/* harmony import */ var _assets_icons_next_7_days_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_next_7_days_svg__WEBPACK_IMPORTED_MODULE_1__);



const NextDaysIcon = (classes) => (0,_Icon__WEBPACK_IMPORTED_MODULE_0__["default"])((_assets_icons_next_7_days_svg__WEBPACK_IMPORTED_MODULE_1___default()), classes)
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NextDaysIcon);


/***/ }),

/***/ "./src/js/components/icons/TodayIcon.js":
/*!**********************************************!*\
  !*** ./src/js/components/icons/TodayIcon.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Icon */ "./src/js/components/icons/Icon.js");
/* harmony import */ var _assets_icons_today_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/icons/today.svg */ "./src/assets/icons/today.svg");
/* harmony import */ var _assets_icons_today_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_today_svg__WEBPACK_IMPORTED_MODULE_1__);



const TodayIcon = (classes) => (0,_Icon__WEBPACK_IMPORTED_MODULE_0__["default"])((_assets_icons_today_svg__WEBPACK_IMPORTED_MODULE_1___default()), classes)
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TodayIcon);


/***/ }),

/***/ "./src/js/contentGenerator.js":
/*!************************************!*\
  !*** ./src/js/contentGenerator.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cleanContent": () => (/* binding */ cleanContent),
/* harmony export */   "generateContent": () => (/* binding */ generateContent)
/* harmony export */ });
const cleanContent = (node) => {
  node.innerHTML = node
}

const generateContent = (node, content) => {
  node.appendChild(content)
}


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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/index.scss */ "./src/scss/index.scss");
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Navbar */ "./src/js/components/Navbar.js");
/* harmony import */ var _components_Main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Main */ "./src/js/components/Main.js");
/* harmony import */ var _contentGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contentGenerator */ "./src/js/contentGenerator.js");





const container = document.querySelector('.container')
;(0,_contentGenerator__WEBPACK_IMPORTED_MODULE_3__.generateContent)(container, _components_Navbar__WEBPACK_IMPORTED_MODULE_1__["default"])
;(0,_contentGenerator__WEBPACK_IMPORTED_MODULE_3__.generateContent)(container, _components_Main__WEBPACK_IMPORTED_MODULE_2__["default"])

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7OztBQ04yQjtBQUNhO0FBQ0o7QUFDZ0I7O0FBRXBEO0FBQ0EsbUVBQWUsWUFBWSwwREFBTTtBQUNqQyxtRUFBZSxZQUFZLHdEQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc2Nzcy9pbmRleC5zY3NzPzAzNTgiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvYXNzZXRzL2ljb25zL2luYm94LnN2ZyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9hc3NldHMvaWNvbnMvbWVudS5zdmciLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvYXNzZXRzL2ljb25zL25leHQtNy1kYXlzLnN2ZyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9hc3NldHMvaWNvbnMvcGx1cy5zdmciLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvYXNzZXRzL2ljb25zL3RvZGF5LnN2ZyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9qcy9jb21wb25lbnRzL0RpdmlkZXIuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvanMvY29tcG9uZW50cy9NYWluLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2pzL2NvbXBvbmVudHMvTWVudS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9qcy9jb21wb25lbnRzL01lbnVPcHRpb24uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvanMvY29tcG9uZW50cy9NZW51T3B0aW9ucy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9qcy9jb21wb25lbnRzL05hdmJhci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9qcy9jb21wb25lbnRzL1Rhc2tzVmlldy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9qcy9jb21wb25lbnRzL2ljb25zL0FkZEljb24uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvanMvY29tcG9uZW50cy9pY29ucy9JY29uLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2pzL2NvbXBvbmVudHMvaWNvbnMvSW5ib3hJY29uLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2pzL2NvbXBvbmVudHMvaWNvbnMvTWVudUljb24uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvanMvY29tcG9uZW50cy9pY29ucy9OZXh0RGF5c0ljb24uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvanMvY29tcG9uZW50cy9pY29ucy9Ub2RheUljb24uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvanMvY29udGVudEdlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2pzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHZpZXdCb3g9XFxcIjAgMCAzNiAzNlxcXCIgZmlsbD1cXFwibm9uZVxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIj48cGF0aCBkPVxcXCJNNiA0LjVIMzBMMzMgMTAuNVYzMEMzMyAzMC4zOTc4IDMyLjg0MiAzMC43Nzk0IDMyLjU2MDcgMzEuMDYwN0MzMi4yNzk0IDMxLjM0MiAzMS44OTc4IDMxLjUgMzEuNSAzMS41SDQuNUM0LjEwMjE4IDMxLjUgMy43MjA2NCAzMS4zNDIgMy40MzkzNCAzMS4wNjA3QzMuMTU4MDQgMzAuNzc5NCAzIDMwLjM5NzggMyAzMFYxMC41MDZMNiA0LjVaTTE5LjUgMjFWMTVIMTYuNVYyMUgxMkwxOCAyN0wyNCAyMUgxOS41Wk0yOS42NDYgMTAuNUwyOC4xNDYgNy41SDcuODU1NUw2LjM1NTUgMTAuNUgyOS42NDZaXFxcIiBmaWxsPVxcXCIjNDk1MDU3XFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB2aWV3Qm94PVxcXCIwIDAgMzAgMzFcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCI+PHBhdGggZD1cXFwiTTMuNzUgNS41SDI2LjI1VjhIMy43NVY1LjVaTTMuNzUgMTQuMjVIMjYuMjVWMTYuNzVIMy43NVYxNC4yNVpNMy43NSAyM0gyNi4yNVYyNS41SDMuNzVWMjNaXFxcIiBmaWxsPVxcXCIjNDk1MDU3XFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB2aWV3Qm94PVxcXCIwIDAgMzYgMzZcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCI+PHBhdGggZD1cXFwiTTI1LjUgNC41SDMxLjVDMzEuODk3OCA0LjUgMzIuMjc5NCA0LjY1ODA0IDMyLjU2MDcgNC45MzkzNEMzMi44NDIgNS4yMjA2NCAzMyA1LjYwMjE3IDMzIDZWMzBDMzMgMzAuMzk3OCAzMi44NDIgMzAuNzc5NCAzMi41NjA3IDMxLjA2MDdDMzIuMjc5NCAzMS4zNDIgMzEuODk3OCAzMS41IDMxLjUgMzEuNUg0LjVDNC4xMDIxOCAzMS41IDMuNzIwNjQgMzEuMzQyIDMuNDM5MzQgMzEuMDYwN0MzLjE1ODA0IDMwLjc3OTQgMyAzMC4zOTc4IDMgMzBWNkMzIDUuNjAyMTcgMy4xNTgwNCA1LjIyMDY0IDMuNDM5MzQgNC45MzkzNEMzLjcyMDY0IDQuNjU4MDQgNC4xMDIxOCA0LjUgNC41IDQuNUgxMC41VjEuNUgxMy41VjQuNUgyMi41VjEuNUgyNS41VjQuNVpNNiAxMy41VjI4LjVIMzBWMTMuNUg2Wk05IDE5LjVIMTYuNVYyNS41SDlWMTkuNVpcXFwiIGZpbGw9XFxcIiM0OTUwNTdcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHZpZXdCb3g9XFxcIjAgMCAzMCAzMFxcXCIgZmlsbD1cXFwibm9uZVxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIj48cGF0aCBkPVxcXCJNMTIuODU3MSAxMi44NTcxVjBIMTcuMTQyOVYxMi44NTcxSDMwVjE3LjE0MjlIMTcuMTQyOVYzMEgxMi44NTcxVjE3LjE0MjlIMFYxMi44NTcxSDEyLjg1NzFaXFxcIiBmaWxsPVxcXCIjNDk1MDU3XFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB2aWV3Qm94PVxcXCIwIDAgMzYgMzZcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCI+PHBhdGggZD1cXFwiTTI1LjUgNC41SDMxLjVDMzEuODk3OCA0LjUgMzIuMjc5NCA0LjY1ODAzIDMyLjU2MDcgNC45MzkzNEMzMi44NDIgNS4yMjA2NCAzMyA1LjYwMjE3IDMzIDZWMzBDMzMgMzAuMzk3OCAzMi44NDIgMzAuNzc5NCAzMi41NjA3IDMxLjA2MDdDMzIuMjc5NCAzMS4zNDIgMzEuODk3OCAzMS41IDMxLjUgMzEuNUg0LjVDNC4xMDIxOCAzMS41IDMuNzIwNjQgMzEuMzQyIDMuNDM5MzQgMzEuMDYwN0MzLjE1ODA0IDMwLjc3OTQgMyAzMC4zOTc4IDMgMzBWNkMzIDUuNjAyMTcgMy4xNTgwNCA1LjIyMDY0IDMuNDM5MzQgNC45MzkzNEMzLjcyMDY0IDQuNjU4MDMgNC4xMDIxOCA0LjUgNC41IDQuNUgxMC41VjEuNUgxMy41VjQuNUgyMi41VjEuNUgyNS41VjQuNVpNNiAxMy41VjI4LjVIMzBWMTMuNUg2Wk05IDE2LjVIMTJWMTkuNUg5VjE2LjVaTTkgMjIuNUgxMlYyNS41SDlWMjIuNVpNMTUgMTYuNUgyN1YxOS41SDE1VjE2LjVaTTE1IDIyLjVIMjIuNVYyNS41SDE1VjIyLjVaXFxcIiBmaWxsPVxcXCIjNDk1MDU3XFxcIj48L3BhdGg+PC9zdmc+XCIiLCJjb25zdCBEaXZpZGVyID0gKCkgPT4ge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaHInKVxuICBlbGVtZW50LmNsYXNzTmFtZSA9ICdkaXZpZGVyJ1xuXG4gIHJldHVybiBlbGVtZW50XG59XG5cbmV4cG9ydCBkZWZhdWx0IERpdmlkZXJcbiIsImltcG9ydCBNZW51IGZyb20gJy4vTWVudSdcbmltcG9ydCBUYXNrc1ZpZXcgZnJvbSAnLi9UYXNrc1ZpZXcnXG5cbmNvbnN0IE1haW4gPSAoKCkgPT4ge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgbWFpbi5jbGFzc05hbWUgPSAnbWFpbidcblxuICBtYWluLmFwcGVuZENoaWxkKE1lbnUuZWxlbWVudClcbiAgbWFpbi5hcHBlbmRDaGlsZChUYXNrc1ZpZXcuZWxlbWVudClcblxuICByZXR1cm4gbWFpblxufSkoKVxuXG5leHBvcnQgZGVmYXVsdCBNYWluXG4iLCJpbXBvcnQgTWVudU9wdGlvbnMgZnJvbSAnLi9NZW51T3B0aW9ucydcbmltcG9ydCBEaXZpZGVyIGZyb20gJy4vRGl2aWRlcidcblxuY29uc3QgTWVudSA9ICgoKSA9PiB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhc2lkZScpXG4gIGVsZW1lbnQuY2xhc3NOYW1lID0gJ21lbnUnXG5cbiAgZWxlbWVudC5hcHBlbmRDaGlsZChNZW51T3B0aW9ucylcbiAgZWxlbWVudC5hcHBlbmRDaGlsZChEaXZpZGVyKCkpXG5cbiAgY29uc3QgdG9nZ2xlSGlkZSA9ICgpID0+IHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpXG4gIH1cblxuICBjb25zdCBnZW5lcmF0ZVRhZ3MgPSAodGFncykgPT4ge31cblxuICByZXR1cm4geyBlbGVtZW50LCB0b2dnbGVIaWRlLCBnZW5lcmF0ZVRhZ3MgfVxufSkoKVxuXG5leHBvcnQgZGVmYXVsdCBNZW51XG4iLCJjb25zdCBNZW51T3B0aW9uID0gKGljb24sIHRpdGxlLCBhY3RpdmUsIGNsaWNrRXZlbnQpID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGVsZW1lbnQuY2xhc3NOYW1lID0gYWN0aXZlXG4gICAgPyAnbWVudV9fb3B0aW9uIG1lbnVfX29wdGlvbi0tYWN0aXZlJ1xuICAgIDogJ21lbnVfX29wdGlvbidcbiAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrRXZlbnQpXG5cbiAgY29uc3QgdGl0bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKVxuICB0aXRsZUVsZW1lbnQuY2xhc3NOYW1lID0gJ21lbnVfX29wdGlvbl9fdGl0bGUnXG4gIHRpdGxlRWxlbWVudC50ZXh0Q29udGVudCA9IHRpdGxlXG5cbiAgZWxlbWVudC5hcHBlbmRDaGlsZChpY29uKVxuICBlbGVtZW50LmFwcGVuZENoaWxkKHRpdGxlRWxlbWVudClcblxuICByZXR1cm4gZWxlbWVudFxufVxuXG5leHBvcnQgZGVmYXVsdCBNZW51T3B0aW9uXG4iLCJpbXBvcnQgSW5ib3hJY29uIGZyb20gJy4vaWNvbnMvSW5ib3hJY29uJ1xuaW1wb3J0IFRvZGF5SWNvbiBmcm9tICcuL2ljb25zL1RvZGF5SWNvbidcbmltcG9ydCBOZXh0RGF5c0ljb24gZnJvbSAnLi9pY29ucy9OZXh0RGF5c0ljb24nXG5pbXBvcnQgTWVudU9wdGlvbiBmcm9tICcuL01lbnVPcHRpb24nXG5cbmNvbnN0IE1lbnVPcHRpb25zID0gKCgpID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGVsZW1lbnQuY2xhc3NOYW1lID0gJ21lbnVfX29wdGlvbnMnXG5cbiAgY29uc3QgaWNvbkNsYXNzID0gJ21lbnVfX29wdGlvbl9faWNvbidcbiAgZWxlbWVudC5hcHBlbmRDaGlsZChcbiAgICBNZW51T3B0aW9uKEluYm94SWNvbihpY29uQ2xhc3MpLCAnSW5ib3gnLCBmYWxzZSwgKGUpID0+IGNvbnNvbGUubG9nKGUpKVxuICApXG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQoXG4gICAgTWVudU9wdGlvbihUb2RheUljb24oaWNvbkNsYXNzKSwgJ1RvZGF5JywgdHJ1ZSwgKGUpID0+IGNvbnNvbGUubG9nKGUpKVxuICApXG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQoXG4gICAgTWVudU9wdGlvbihOZXh0RGF5c0ljb24oaWNvbkNsYXNzKSwgJ05leHQgNyBkYXlzJywgZmFsc2UsIChlKSA9PlxuICAgICAgY29uc29sZS5sb2coZSlcbiAgICApXG4gIClcblxuICByZXR1cm4gZWxlbWVudFxufSkoKVxuXG5leHBvcnQgZGVmYXVsdCBNZW51T3B0aW9uc1xuIiwiaW1wb3J0IE1lbnVJY29uIGZyb20gJy4vaWNvbnMvTWVudUljb24nXG5pbXBvcnQgQWRkSWNvbiBmcm9tICcuL2ljb25zL0FkZEljb24nXG5pbXBvcnQgTWVudSBmcm9tICcuL01lbnUnXG5cbmNvbnN0IE5hdmJhciA9ICgoKSA9PiB7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpXG4gIGhlYWRlci5jbGFzc05hbWUgPSAnaGVhZGVyJ1xuXG4gIGNvbnN0IG5hdkJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpXG4gIG5hdkJhci5jbGFzc05hbWUgPSAnbmF2YmFyJ1xuXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuICB0aXRsZS5jbGFzc05hbWUgPSAnaGVhZGVyX190aXRsZSdcbiAgdGl0bGUudGV4dENvbnRlbnQgPSAnVG9kb0FwcCdcblxuICBjb25zdCBtZW51SWNvbiA9IE1lbnVJY29uKCdoZWFkZXJfX2ljb24gaGVhZGVyX19pY29uLS1tZW51JylcbiAgbWVudUljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBNZW51LnRvZ2dsZUhpZGUpXG5cbiAgbmF2QmFyLmFwcGVuZENoaWxkKG1lbnVJY29uKVxuICBuYXZCYXIuYXBwZW5kQ2hpbGQodGl0bGUpXG4gIG5hdkJhci5hcHBlbmRDaGlsZChBZGRJY29uKCdoZWFkZXJfX2ljb24gaGVhZGVyX19pY29uLS1hZGQnKSlcbiAgaGVhZGVyLmFwcGVuZENoaWxkKG5hdkJhcilcblxuICByZXR1cm4gaGVhZGVyXG59KSgpXG5cbmV4cG9ydCBkZWZhdWx0IE5hdmJhclxuIiwiY29uc3QgVGFza3NWaWV3ID0gKCgpID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKVxuICBlbGVtZW50LmNsYXNzTmFtZSA9ICd0YXNrcy12aWV3J1xuXG4gIGNvbnN0IGdlbmVyYXRlVGFza3MgPSAodGl0bGUsIHRhc2tzKSA9PiB7fVxuXG4gIHJldHVybiB7IGVsZW1lbnQsIGdlbmVyYXRlVGFza3MgfVxufSkoKVxuXG5leHBvcnQgZGVmYXVsdCBUYXNrc1ZpZXdcbiIsImltcG9ydCBJY29uIGZyb20gJy4vSWNvbidcbmltcG9ydCBBZGRJY29uU3ZnIGZyb20gJy4uLy4uLy4uL2Fzc2V0cy9pY29ucy9wbHVzLnN2ZydcblxuY29uc3QgQWRkSWNvbiA9IChjbGFzc2VzKSA9PiBJY29uKEFkZEljb25TdmcsIGNsYXNzZXMpXG5leHBvcnQgZGVmYXVsdCBBZGRJY29uXG4iLCJjb25zdCBJY29uID0gKHN2ZywgY2xhc3NlcykgPT4ge1xuICBjb25zdCBzdmdDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBzdmdDb250YWluZXIuY2xhc3NOYW1lID0gY2xhc3Nlc1xuICBzdmdDb250YWluZXIuaW5uZXJIVE1MID0gc3ZnXG5cbiAgcmV0dXJuIHN2Z0NvbnRhaW5lclxufVxuXG5leHBvcnQgZGVmYXVsdCBJY29uXG4iLCJpbXBvcnQgSWNvbiBmcm9tICcuL0ljb24nXG5pbXBvcnQgSW5ib3hJY29uU3ZnIGZyb20gJy4uLy4uLy4uL2Fzc2V0cy9pY29ucy9pbmJveC5zdmcnXG5cbmNvbnN0IEluYm94SWNvbiA9IChjbGFzc2VzKSA9PiBJY29uKEluYm94SWNvblN2ZywgY2xhc3NlcylcbmV4cG9ydCBkZWZhdWx0IEluYm94SWNvblxuIiwiaW1wb3J0IEljb24gZnJvbSAnLi9JY29uJ1xuaW1wb3J0IE1lbnVJY29uU3ZnIGZyb20gJy4uLy4uLy4uL2Fzc2V0cy9pY29ucy9tZW51LnN2ZydcblxuY29uc3QgTWVudUljb24gPSAoY2xhc3NlcykgPT4gSWNvbihNZW51SWNvblN2ZywgY2xhc3NlcylcbmV4cG9ydCBkZWZhdWx0IE1lbnVJY29uXG4iLCJpbXBvcnQgSWNvbiBmcm9tICcuL0ljb24nXG5pbXBvcnQgTmV4dERheXNJY29uU3ZnIGZyb20gJy4uLy4uLy4uL2Fzc2V0cy9pY29ucy9uZXh0LTctZGF5cy5zdmcnXG5cbmNvbnN0IE5leHREYXlzSWNvbiA9IChjbGFzc2VzKSA9PiBJY29uKE5leHREYXlzSWNvblN2ZywgY2xhc3NlcylcbmV4cG9ydCBkZWZhdWx0IE5leHREYXlzSWNvblxuIiwiaW1wb3J0IEljb24gZnJvbSAnLi9JY29uJ1xuaW1wb3J0IFRvZGF5SWNvblN2ZyBmcm9tICcuLi8uLi8uLi9hc3NldHMvaWNvbnMvdG9kYXkuc3ZnJ1xuXG5jb25zdCBUb2RheUljb24gPSAoY2xhc3NlcykgPT4gSWNvbihUb2RheUljb25TdmcsIGNsYXNzZXMpXG5leHBvcnQgZGVmYXVsdCBUb2RheUljb25cbiIsImV4cG9ydCBjb25zdCBjbGVhbkNvbnRlbnQgPSAobm9kZSkgPT4ge1xuICBub2RlLmlubmVySFRNTCA9IG5vZGVcbn1cblxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlQ29udGVudCA9IChub2RlLCBjb250ZW50KSA9PiB7XG4gIG5vZGUuYXBwZW5kQ2hpbGQoY29udGVudClcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4uL3Njc3MvaW5kZXguc2NzcydcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi9jb21wb25lbnRzL05hdmJhcidcbmltcG9ydCBNYWluIGZyb20gJy4vY29tcG9uZW50cy9NYWluJ1xuaW1wb3J0IHsgZ2VuZXJhdGVDb250ZW50IH0gZnJvbSAnLi9jb250ZW50R2VuZXJhdG9yJ1xuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJylcbmdlbmVyYXRlQ29udGVudChjb250YWluZXIsIE5hdmJhcilcbmdlbmVyYXRlQ29udGVudChjb250YWluZXIsIE1haW4pXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=