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

/***/ "./src/js/components/EmptyMessage.js":
/*!*******************************************!*\
  !*** ./src/js/components/EmptyMessage.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const EmptyMessage = (text) => {
  const element = document.createElement('p')
  element.className = 'empty-message'
  element.textContent = text
  return element
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EmptyMessage);


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
/* harmony import */ var _menu_Menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu/Menu */ "./src/js/components/menu/Menu.js");
/* harmony import */ var _TasksView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TasksView */ "./src/js/components/TasksView.js");



const Main = (() => {
  const main = document.createElement('div')
  main.className = 'main'

  main.appendChild(_menu_Menu__WEBPACK_IMPORTED_MODULE_0__["default"].element)
  main.appendChild(_TasksView__WEBPACK_IMPORTED_MODULE_1__["default"].element)

  return main
})()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Main);


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
/* harmony import */ var _menu_Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu/Menu */ "./src/js/components/menu/Menu.js");




const Navbar = (() => {
  const header = document.createElement('header')
  header.className = 'header'

  const navBar = document.createElement('nav')
  navBar.className = 'navbar'

  const title = document.createElement('h2')
  title.className = 'header__title'
  title.textContent = 'TodoApp'

  const menuIcon = (0,_icons_MenuIcon__WEBPACK_IMPORTED_MODULE_0__["default"])('header__icon header__icon--menu')
  menuIcon.addEventListener('click', _menu_Menu__WEBPACK_IMPORTED_MODULE_2__["default"].toggleHide)

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

/***/ "./src/js/components/menu/Menu.js":
/*!****************************************!*\
  !*** ./src/js/components/menu/Menu.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _option_MenuOptions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./option/MenuOptions */ "./src/js/components/menu/option/MenuOptions.js");
/* harmony import */ var _tag_MenuTags__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tag/MenuTags */ "./src/js/components/menu/tag/MenuTags.js");
/* harmony import */ var _Divider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Divider */ "./src/js/components/Divider.js");
/* harmony import */ var _priority_MenuPriorities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./priority/MenuPriorities */ "./src/js/components/menu/priority/MenuPriorities.js");





const Menu = (() => {
  const element = document.createElement('aside')
  element.className = 'menu'

  element.appendChild(_option_MenuOptions__WEBPACK_IMPORTED_MODULE_0__["default"])
  element.appendChild((0,_Divider__WEBPACK_IMPORTED_MODULE_2__["default"])())
  element.appendChild(_tag_MenuTags__WEBPACK_IMPORTED_MODULE_1__["default"].element)
  element.appendChild((0,_Divider__WEBPACK_IMPORTED_MODULE_2__["default"])())
  element.appendChild(_priority_MenuPriorities__WEBPACK_IMPORTED_MODULE_3__["default"].element)

  const toggleHide = () => {
    element.classList.toggle('hidden')
  }

  return { element, toggleHide }
})()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Menu);


/***/ }),

/***/ "./src/js/components/menu/MenuTitle.js":
/*!*********************************************!*\
  !*** ./src/js/components/menu/MenuTitle.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const MenuTitle = (title) => {
  const element = document.createElement('h3')
  element.className = 'menu__title'
  element.textContent = title

  return element
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MenuTitle);


/***/ }),

/***/ "./src/js/components/menu/option/MenuOption.js":
/*!*****************************************************!*\
  !*** ./src/js/components/menu/option/MenuOption.js ***!
  \*****************************************************/
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

/***/ "./src/js/components/menu/option/MenuOptions.js":
/*!******************************************************!*\
  !*** ./src/js/components/menu/option/MenuOptions.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _icons_InboxIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../icons/InboxIcon */ "./src/js/components/icons/InboxIcon.js");
/* harmony import */ var _icons_TodayIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../icons/TodayIcon */ "./src/js/components/icons/TodayIcon.js");
/* harmony import */ var _icons_NextDaysIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../icons/NextDaysIcon */ "./src/js/components/icons/NextDaysIcon.js");
/* harmony import */ var _MenuOption__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MenuOption */ "./src/js/components/menu/option/MenuOption.js");





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

/***/ "./src/js/components/menu/priority/MenuPriorities.js":
/*!***********************************************************!*\
  !*** ./src/js/components/menu/priority/MenuPriorities.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MenuTitle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../MenuTitle */ "./src/js/components/menu/MenuTitle.js");
/* harmony import */ var _MenuPriority__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MenuPriority */ "./src/js/components/menu/priority/MenuPriority.js");



const MenuPriorities = (() => {
  const priorities = [
    { id: 0, color: '#FF6B6B', title: 'High' },
    { id: 1, color: '#FCC419', title: 'Medium' },
    { id: 2, color: '#94D82D', title: 'Low' },
  ]
  const priorityElements = []

  const element = document.createElement('div')
  element.className = 'menu__priorities-container'

  const generatePriorities = () => {
    const prioritiesContainer = document.createElement('div')
    prioritiesContainer.className = 'menu__priorities'

    for (let priority of priorities) {
      const priorityElement = (0,_MenuPriority__WEBPACK_IMPORTED_MODULE_1__["default"])(priority, (e) => console.log(e))

      priorityElements.push(priorityElement)
      prioritiesContainer.appendChild(priorityElement.element)
    }

    element.innerHTML = ''
    element.appendChild((0,_MenuTitle__WEBPACK_IMPORTED_MODULE_0__["default"])('Priorities'))
    element.appendChild(prioritiesContainer)
  }
  generatePriorities(priorities)

  const clearActives = () => {
    priorityElements.forEach((priorityElement) =>
      priorityElement.removeActiveClass()
    )
  }
  return { element, clearActives }
})()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MenuPriorities);


/***/ }),

/***/ "./src/js/components/menu/priority/MenuPriority.js":
/*!*********************************************************!*\
  !*** ./src/js/components/menu/priority/MenuPriority.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const MenuPriority = ({ id, color, title }, clickEvent) => {
  const element = document.createElement('div')
  element.setAttribute('data-id', id)
  element.className = 'menu__priority'

  const colorSymbol = document.createElement('div')
  colorSymbol.className = 'menu__color-symbol'
  colorSymbol.style.backgroundColor = color

  const titleElement = document.createElement('h4')
  titleElement.className = 'menu__priority__title'
  titleElement.textContent = title

  element.appendChild(colorSymbol)
  element.appendChild(titleElement)
  element.addEventListener('click', clickEvent)

  const addActiveClass = () => {
    element.classList.add('menu__priority--active')
  }

  const removeActiveClass = () => {
    element.classList.remove('menu__priority--active')
  }

  return { element, addActiveClass, removeActiveClass }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MenuPriority);


/***/ }),

/***/ "./src/js/components/menu/tag/MenuTag.js":
/*!***********************************************!*\
  !*** ./src/js/components/menu/tag/MenuTag.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const MenuTag = ({ id, color, title }, clickEvent) => {
  const element = document.createElement('div')
  element.setAttribute('data-id', id)
  element.className = 'menu__tag'

  const colorSymbol = document.createElement('div')
  colorSymbol.className = 'menu__color-symbol'
  colorSymbol.style.backgroundColor = color

  const titleElement = document.createElement('h4')
  titleElement.className = 'menu__tag__title'
  titleElement.textContent = title

  element.appendChild(colorSymbol)
  element.appendChild(titleElement)
  element.addEventListener('click', clickEvent)

  const addActiveClass = () => {
    element.classList.add('menu__priority--active')
  }

  const removeActiveClass = () => {
    element.classList.remove('menu__priority--active')
  }

  return { element, addActiveClass, removeActiveClass }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MenuTag);


/***/ }),

/***/ "./src/js/components/menu/tag/MenuTags.js":
/*!************************************************!*\
  !*** ./src/js/components/menu/tag/MenuTags.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _EmptyMessage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../EmptyMessage */ "./src/js/components/EmptyMessage.js");
/* harmony import */ var _MenuTitle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../MenuTitle */ "./src/js/components/menu/MenuTitle.js");
/* harmony import */ var _MenuTag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MenuTag */ "./src/js/components/menu/tag/MenuTag.js");




const MenuTags = (() => {
  const dummyTags = [
    { id: 0, color: '#4DABF7', title: 'Work' },
    { id: 1, color: '#DA77F2', title: 'School' },
    { id: 2, color: '#FFD43B', title: 'Personal' },
  ]
  const tagElements = []
  const element = document.createElement('div')
  element.className = 'menu__tags-container'

  const generateTags = (tags) => {
    element.innerHTML = ''
    element.appendChild((0,_MenuTitle__WEBPACK_IMPORTED_MODULE_1__["default"])('Tags'))

    if (tags.length > 0) {
      const tagsContainer = document.createElement('div')
      tagsContainer.className = 'menu__tags'

      for (let tag of tags) {
        const tagElement = (0,_MenuTag__WEBPACK_IMPORTED_MODULE_2__["default"])(tag, (e) => console.log(e))

        tagElements.push(tagElement)
        tagsContainer.appendChild(tagElement.element)
      }

      element.appendChild(tagsContainer)
    } else {
      element.appendChild(
        (0,_EmptyMessage__WEBPACK_IMPORTED_MODULE_0__["default"])(
          "It's pretty empty here 😕. Let's add a new tag with the button below!"
        )
      )
    }
  }
  // generateTags(dummyTags)
  generateTags([])

  return { element, generateTags }
})()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MenuTags);


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
  node.innerHTML = ''
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7O0FDTjJCO0FBQ2E7QUFDSjtBQUNnQjs7QUFFcEQ7QUFDQSxtRUFBZSxZQUFZLDBEQUFNO0FBQ2pDLG1FQUFlLFlBQVksd0RBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zY3NzL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvYXNzZXRzL2ljb25zL2luYm94LnN2ZyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9hc3NldHMvaWNvbnMvbWVudS5zdmciLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvYXNzZXRzL2ljb25zL25leHQtNy1kYXlzLnN2ZyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9hc3NldHMvaWNvbnMvcGx1cy5zdmciLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvYXNzZXRzL2ljb25zL3RvZGF5LnN2ZyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9qcy9jb21wb25lbnRzL0RpdmlkZXIuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvanMvY29tcG9uZW50cy9FbXB0eU1lc3NhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvanMvY29tcG9uZW50cy9NYWluLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2pzL2NvbXBvbmVudHMvTmF2YmFyLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2pzL2NvbXBvbmVudHMvVGFza3NWaWV3LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2pzL2NvbXBvbmVudHMvaWNvbnMvQWRkSWNvbi5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9qcy9jb21wb25lbnRzL2ljb25zL0ljb24uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvanMvY29tcG9uZW50cy9pY29ucy9JbmJveEljb24uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvanMvY29tcG9uZW50cy9pY29ucy9NZW51SWNvbi5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9qcy9jb21wb25lbnRzL2ljb25zL05leHREYXlzSWNvbi5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9qcy9jb21wb25lbnRzL2ljb25zL1RvZGF5SWNvbi5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9qcy9jb21wb25lbnRzL21lbnUvTWVudS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9qcy9jb21wb25lbnRzL21lbnUvTWVudVRpdGxlLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2pzL2NvbXBvbmVudHMvbWVudS9vcHRpb24vTWVudU9wdGlvbi5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9qcy9jb21wb25lbnRzL21lbnUvb3B0aW9uL01lbnVPcHRpb25zLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2pzL2NvbXBvbmVudHMvbWVudS9wcmlvcml0eS9NZW51UHJpb3JpdGllcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9qcy9jb21wb25lbnRzL21lbnUvcHJpb3JpdHkvTWVudVByaW9yaXR5LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2pzL2NvbXBvbmVudHMvbWVudS90YWcvTWVudVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9qcy9jb21wb25lbnRzL21lbnUvdGFnL01lbnVUYWdzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2pzL2NvbnRlbnRHZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9qcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB2aWV3Qm94PVxcXCIwIDAgMzYgMzZcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCI+PHBhdGggZD1cXFwiTTYgNC41SDMwTDMzIDEwLjVWMzBDMzMgMzAuMzk3OCAzMi44NDIgMzAuNzc5NCAzMi41NjA3IDMxLjA2MDdDMzIuMjc5NCAzMS4zNDIgMzEuODk3OCAzMS41IDMxLjUgMzEuNUg0LjVDNC4xMDIxOCAzMS41IDMuNzIwNjQgMzEuMzQyIDMuNDM5MzQgMzEuMDYwN0MzLjE1ODA0IDMwLjc3OTQgMyAzMC4zOTc4IDMgMzBWMTAuNTA2TDYgNC41Wk0xOS41IDIxVjE1SDE2LjVWMjFIMTJMMTggMjdMMjQgMjFIMTkuNVpNMjkuNjQ2IDEwLjVMMjguMTQ2IDcuNUg3Ljg1NTVMNi4zNTU1IDEwLjVIMjkuNjQ2WlxcXCIgZmlsbD1cXFwiIzQ5NTA1N1xcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgdmlld0JveD1cXFwiMCAwIDMwIDMxXFxcIiBmaWxsPVxcXCJub25lXFxcIiB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiPjxwYXRoIGQ9XFxcIk0zLjc1IDUuNUgyNi4yNVY4SDMuNzVWNS41Wk0zLjc1IDE0LjI1SDI2LjI1VjE2Ljc1SDMuNzVWMTQuMjVaTTMuNzUgMjNIMjYuMjVWMjUuNUgzLjc1VjIzWlxcXCIgZmlsbD1cXFwiIzQ5NTA1N1xcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgdmlld0JveD1cXFwiMCAwIDM2IDM2XFxcIiBmaWxsPVxcXCJub25lXFxcIiB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiPjxwYXRoIGQ9XFxcIk0yNS41IDQuNUgzMS41QzMxLjg5NzggNC41IDMyLjI3OTQgNC42NTgwNCAzMi41NjA3IDQuOTM5MzRDMzIuODQyIDUuMjIwNjQgMzMgNS42MDIxNyAzMyA2VjMwQzMzIDMwLjM5NzggMzIuODQyIDMwLjc3OTQgMzIuNTYwNyAzMS4wNjA3QzMyLjI3OTQgMzEuMzQyIDMxLjg5NzggMzEuNSAzMS41IDMxLjVINC41QzQuMTAyMTggMzEuNSAzLjcyMDY0IDMxLjM0MiAzLjQzOTM0IDMxLjA2MDdDMy4xNTgwNCAzMC43Nzk0IDMgMzAuMzk3OCAzIDMwVjZDMyA1LjYwMjE3IDMuMTU4MDQgNS4yMjA2NCAzLjQzOTM0IDQuOTM5MzRDMy43MjA2NCA0LjY1ODA0IDQuMTAyMTggNC41IDQuNSA0LjVIMTAuNVYxLjVIMTMuNVY0LjVIMjIuNVYxLjVIMjUuNVY0LjVaTTYgMTMuNVYyOC41SDMwVjEzLjVINlpNOSAxOS41SDE2LjVWMjUuNUg5VjE5LjVaXFxcIiBmaWxsPVxcXCIjNDk1MDU3XFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB2aWV3Qm94PVxcXCIwIDAgMzAgMzBcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCI+PHBhdGggZD1cXFwiTTEyLjg1NzEgMTIuODU3MVYwSDE3LjE0MjlWMTIuODU3MUgzMFYxNy4xNDI5SDE3LjE0MjlWMzBIMTIuODU3MVYxNy4xNDI5SDBWMTIuODU3MUgxMi44NTcxWlxcXCIgZmlsbD1cXFwiIzQ5NTA1N1xcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgdmlld0JveD1cXFwiMCAwIDM2IDM2XFxcIiBmaWxsPVxcXCJub25lXFxcIiB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiPjxwYXRoIGQ9XFxcIk0yNS41IDQuNUgzMS41QzMxLjg5NzggNC41IDMyLjI3OTQgNC42NTgwMyAzMi41NjA3IDQuOTM5MzRDMzIuODQyIDUuMjIwNjQgMzMgNS42MDIxNyAzMyA2VjMwQzMzIDMwLjM5NzggMzIuODQyIDMwLjc3OTQgMzIuNTYwNyAzMS4wNjA3QzMyLjI3OTQgMzEuMzQyIDMxLjg5NzggMzEuNSAzMS41IDMxLjVINC41QzQuMTAyMTggMzEuNSAzLjcyMDY0IDMxLjM0MiAzLjQzOTM0IDMxLjA2MDdDMy4xNTgwNCAzMC43Nzk0IDMgMzAuMzk3OCAzIDMwVjZDMyA1LjYwMjE3IDMuMTU4MDQgNS4yMjA2NCAzLjQzOTM0IDQuOTM5MzRDMy43MjA2NCA0LjY1ODAzIDQuMTAyMTggNC41IDQuNSA0LjVIMTAuNVYxLjVIMTMuNVY0LjVIMjIuNVYxLjVIMjUuNVY0LjVaTTYgMTMuNVYyOC41SDMwVjEzLjVINlpNOSAxNi41SDEyVjE5LjVIOVYxNi41Wk05IDIyLjVIMTJWMjUuNUg5VjIyLjVaTTE1IDE2LjVIMjdWMTkuNUgxNVYxNi41Wk0xNSAyMi41SDIyLjVWMjUuNUgxNVYyMi41WlxcXCIgZmlsbD1cXFwiIzQ5NTA1N1xcXCI+PC9wYXRoPjwvc3ZnPlwiIiwiY29uc3QgRGl2aWRlciA9ICgpID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hyJylcbiAgZWxlbWVudC5jbGFzc05hbWUgPSAnZGl2aWRlcidcblxuICByZXR1cm4gZWxlbWVudFxufVxuXG5leHBvcnQgZGVmYXVsdCBEaXZpZGVyXG4iLCJjb25zdCBFbXB0eU1lc3NhZ2UgPSAodGV4dCkgPT4ge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gIGVsZW1lbnQuY2xhc3NOYW1lID0gJ2VtcHR5LW1lc3NhZ2UnXG4gIGVsZW1lbnQudGV4dENvbnRlbnQgPSB0ZXh0XG4gIHJldHVybiBlbGVtZW50XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVtcHR5TWVzc2FnZVxuIiwiaW1wb3J0IE1lbnUgZnJvbSAnLi9tZW51L01lbnUnXG5pbXBvcnQgVGFza3NWaWV3IGZyb20gJy4vVGFza3NWaWV3J1xuXG5jb25zdCBNYWluID0gKCgpID0+IHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIG1haW4uY2xhc3NOYW1lID0gJ21haW4nXG5cbiAgbWFpbi5hcHBlbmRDaGlsZChNZW51LmVsZW1lbnQpXG4gIG1haW4uYXBwZW5kQ2hpbGQoVGFza3NWaWV3LmVsZW1lbnQpXG5cbiAgcmV0dXJuIG1haW5cbn0pKClcblxuZXhwb3J0IGRlZmF1bHQgTWFpblxuIiwiaW1wb3J0IE1lbnVJY29uIGZyb20gJy4vaWNvbnMvTWVudUljb24nXG5pbXBvcnQgQWRkSWNvbiBmcm9tICcuL2ljb25zL0FkZEljb24nXG5pbXBvcnQgTWVudSBmcm9tICcuL21lbnUvTWVudSdcblxuY29uc3QgTmF2YmFyID0gKCgpID0+IHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJylcbiAgaGVhZGVyLmNsYXNzTmFtZSA9ICdoZWFkZXInXG5cbiAgY29uc3QgbmF2QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2JylcbiAgbmF2QmFyLmNsYXNzTmFtZSA9ICduYXZiYXInXG5cbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gIHRpdGxlLmNsYXNzTmFtZSA9ICdoZWFkZXJfX3RpdGxlJ1xuICB0aXRsZS50ZXh0Q29udGVudCA9ICdUb2RvQXBwJ1xuXG4gIGNvbnN0IG1lbnVJY29uID0gTWVudUljb24oJ2hlYWRlcl9faWNvbiBoZWFkZXJfX2ljb24tLW1lbnUnKVxuICBtZW51SWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIE1lbnUudG9nZ2xlSGlkZSlcblxuICBuYXZCYXIuYXBwZW5kQ2hpbGQobWVudUljb24pXG4gIG5hdkJhci5hcHBlbmRDaGlsZCh0aXRsZSlcbiAgbmF2QmFyLmFwcGVuZENoaWxkKEFkZEljb24oJ2hlYWRlcl9faWNvbiBoZWFkZXJfX2ljb24tLWFkZCcpKVxuICBoZWFkZXIuYXBwZW5kQ2hpbGQobmF2QmFyKVxuXG4gIHJldHVybiBoZWFkZXJcbn0pKClcblxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyXG4iLCJjb25zdCBUYXNrc1ZpZXcgPSAoKCkgPT4ge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpXG4gIGVsZW1lbnQuY2xhc3NOYW1lID0gJ3Rhc2tzLXZpZXcnXG5cbiAgY29uc3QgZ2VuZXJhdGVUYXNrcyA9ICh0aXRsZSwgdGFza3MpID0+IHt9XG5cbiAgcmV0dXJuIHsgZWxlbWVudCwgZ2VuZXJhdGVUYXNrcyB9XG59KSgpXG5cbmV4cG9ydCBkZWZhdWx0IFRhc2tzVmlld1xuIiwiaW1wb3J0IEljb24gZnJvbSAnLi9JY29uJ1xuaW1wb3J0IEFkZEljb25TdmcgZnJvbSAnLi4vLi4vLi4vYXNzZXRzL2ljb25zL3BsdXMuc3ZnJ1xuXG5jb25zdCBBZGRJY29uID0gKGNsYXNzZXMpID0+IEljb24oQWRkSWNvblN2ZywgY2xhc3NlcylcbmV4cG9ydCBkZWZhdWx0IEFkZEljb25cbiIsImNvbnN0IEljb24gPSAoc3ZnLCBjbGFzc2VzKSA9PiB7XG4gIGNvbnN0IHN2Z0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIHN2Z0NvbnRhaW5lci5jbGFzc05hbWUgPSBjbGFzc2VzXG4gIHN2Z0NvbnRhaW5lci5pbm5lckhUTUwgPSBzdmdcblxuICByZXR1cm4gc3ZnQ29udGFpbmVyXG59XG5cbmV4cG9ydCBkZWZhdWx0IEljb25cbiIsImltcG9ydCBJY29uIGZyb20gJy4vSWNvbidcbmltcG9ydCBJbmJveEljb25TdmcgZnJvbSAnLi4vLi4vLi4vYXNzZXRzL2ljb25zL2luYm94LnN2ZydcblxuY29uc3QgSW5ib3hJY29uID0gKGNsYXNzZXMpID0+IEljb24oSW5ib3hJY29uU3ZnLCBjbGFzc2VzKVxuZXhwb3J0IGRlZmF1bHQgSW5ib3hJY29uXG4iLCJpbXBvcnQgSWNvbiBmcm9tICcuL0ljb24nXG5pbXBvcnQgTWVudUljb25TdmcgZnJvbSAnLi4vLi4vLi4vYXNzZXRzL2ljb25zL21lbnUuc3ZnJ1xuXG5jb25zdCBNZW51SWNvbiA9IChjbGFzc2VzKSA9PiBJY29uKE1lbnVJY29uU3ZnLCBjbGFzc2VzKVxuZXhwb3J0IGRlZmF1bHQgTWVudUljb25cbiIsImltcG9ydCBJY29uIGZyb20gJy4vSWNvbidcbmltcG9ydCBOZXh0RGF5c0ljb25TdmcgZnJvbSAnLi4vLi4vLi4vYXNzZXRzL2ljb25zL25leHQtNy1kYXlzLnN2ZydcblxuY29uc3QgTmV4dERheXNJY29uID0gKGNsYXNzZXMpID0+IEljb24oTmV4dERheXNJY29uU3ZnLCBjbGFzc2VzKVxuZXhwb3J0IGRlZmF1bHQgTmV4dERheXNJY29uXG4iLCJpbXBvcnQgSWNvbiBmcm9tICcuL0ljb24nXG5pbXBvcnQgVG9kYXlJY29uU3ZnIGZyb20gJy4uLy4uLy4uL2Fzc2V0cy9pY29ucy90b2RheS5zdmcnXG5cbmNvbnN0IFRvZGF5SWNvbiA9IChjbGFzc2VzKSA9PiBJY29uKFRvZGF5SWNvblN2ZywgY2xhc3NlcylcbmV4cG9ydCBkZWZhdWx0IFRvZGF5SWNvblxuIiwiaW1wb3J0IE1lbnVPcHRpb25zIGZyb20gJy4vb3B0aW9uL01lbnVPcHRpb25zJ1xuaW1wb3J0IE1lbnVUYWdzIGZyb20gJy4vdGFnL01lbnVUYWdzJ1xuaW1wb3J0IERpdmlkZXIgZnJvbSAnLi4vRGl2aWRlcidcbmltcG9ydCBNZW51UHJpb3JpdGllcyBmcm9tICcuL3ByaW9yaXR5L01lbnVQcmlvcml0aWVzJ1xuXG5jb25zdCBNZW51ID0gKCgpID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2FzaWRlJylcbiAgZWxlbWVudC5jbGFzc05hbWUgPSAnbWVudSdcblxuICBlbGVtZW50LmFwcGVuZENoaWxkKE1lbnVPcHRpb25zKVxuICBlbGVtZW50LmFwcGVuZENoaWxkKERpdmlkZXIoKSlcbiAgZWxlbWVudC5hcHBlbmRDaGlsZChNZW51VGFncy5lbGVtZW50KVxuICBlbGVtZW50LmFwcGVuZENoaWxkKERpdmlkZXIoKSlcbiAgZWxlbWVudC5hcHBlbmRDaGlsZChNZW51UHJpb3JpdGllcy5lbGVtZW50KVxuXG4gIGNvbnN0IHRvZ2dsZUhpZGUgPSAoKSA9PiB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKVxuICB9XG5cbiAgcmV0dXJuIHsgZWxlbWVudCwgdG9nZ2xlSGlkZSB9XG59KSgpXG5cbmV4cG9ydCBkZWZhdWx0IE1lbnVcbiIsImNvbnN0IE1lbnVUaXRsZSA9ICh0aXRsZSkgPT4ge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKVxuICBlbGVtZW50LmNsYXNzTmFtZSA9ICdtZW51X190aXRsZSdcbiAgZWxlbWVudC50ZXh0Q29udGVudCA9IHRpdGxlXG5cbiAgcmV0dXJuIGVsZW1lbnRcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWVudVRpdGxlXG4iLCJjb25zdCBNZW51T3B0aW9uID0gKGljb24sIHRpdGxlLCBhY3RpdmUsIGNsaWNrRXZlbnQpID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGVsZW1lbnQuY2xhc3NOYW1lID0gYWN0aXZlXG4gICAgPyAnbWVudV9fb3B0aW9uIG1lbnVfX29wdGlvbi0tYWN0aXZlJ1xuICAgIDogJ21lbnVfX29wdGlvbidcbiAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrRXZlbnQpXG5cbiAgY29uc3QgdGl0bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKVxuICB0aXRsZUVsZW1lbnQuY2xhc3NOYW1lID0gJ21lbnVfX29wdGlvbl9fdGl0bGUnXG4gIHRpdGxlRWxlbWVudC50ZXh0Q29udGVudCA9IHRpdGxlXG5cbiAgZWxlbWVudC5hcHBlbmRDaGlsZChpY29uKVxuICBlbGVtZW50LmFwcGVuZENoaWxkKHRpdGxlRWxlbWVudClcblxuICByZXR1cm4gZWxlbWVudFxufVxuXG5leHBvcnQgZGVmYXVsdCBNZW51T3B0aW9uXG4iLCJpbXBvcnQgSW5ib3hJY29uIGZyb20gJy4uLy4uL2ljb25zL0luYm94SWNvbidcbmltcG9ydCBUb2RheUljb24gZnJvbSAnLi4vLi4vaWNvbnMvVG9kYXlJY29uJ1xuaW1wb3J0IE5leHREYXlzSWNvbiBmcm9tICcuLi8uLi9pY29ucy9OZXh0RGF5c0ljb24nXG5pbXBvcnQgTWVudU9wdGlvbiBmcm9tICcuL01lbnVPcHRpb24nXG5cbmNvbnN0IE1lbnVPcHRpb25zID0gKCgpID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGVsZW1lbnQuY2xhc3NOYW1lID0gJ21lbnVfX29wdGlvbnMnXG5cbiAgY29uc3QgaWNvbkNsYXNzID0gJ21lbnVfX29wdGlvbl9faWNvbidcbiAgZWxlbWVudC5hcHBlbmRDaGlsZChcbiAgICBNZW51T3B0aW9uKEluYm94SWNvbihpY29uQ2xhc3MpLCAnSW5ib3gnLCBmYWxzZSwgKGUpID0+IGNvbnNvbGUubG9nKGUpKVxuICApXG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQoXG4gICAgTWVudU9wdGlvbihUb2RheUljb24oaWNvbkNsYXNzKSwgJ1RvZGF5JywgdHJ1ZSwgKGUpID0+IGNvbnNvbGUubG9nKGUpKVxuICApXG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQoXG4gICAgTWVudU9wdGlvbihOZXh0RGF5c0ljb24oaWNvbkNsYXNzKSwgJ05leHQgNyBkYXlzJywgZmFsc2UsIChlKSA9PlxuICAgICAgY29uc29sZS5sb2coZSlcbiAgICApXG4gIClcblxuICByZXR1cm4gZWxlbWVudFxufSkoKVxuXG5leHBvcnQgZGVmYXVsdCBNZW51T3B0aW9uc1xuIiwiaW1wb3J0IE1lbnVUaXRsZSBmcm9tICcuLi9NZW51VGl0bGUnXG5pbXBvcnQgTWVudVByaW9yaXR5IGZyb20gJy4vTWVudVByaW9yaXR5J1xuXG5jb25zdCBNZW51UHJpb3JpdGllcyA9ICgoKSA9PiB7XG4gIGNvbnN0IHByaW9yaXRpZXMgPSBbXG4gICAgeyBpZDogMCwgY29sb3I6ICcjRkY2QjZCJywgdGl0bGU6ICdIaWdoJyB9LFxuICAgIHsgaWQ6IDEsIGNvbG9yOiAnI0ZDQzQxOScsIHRpdGxlOiAnTWVkaXVtJyB9LFxuICAgIHsgaWQ6IDIsIGNvbG9yOiAnIzk0RDgyRCcsIHRpdGxlOiAnTG93JyB9LFxuICBdXG4gIGNvbnN0IHByaW9yaXR5RWxlbWVudHMgPSBbXVxuXG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBlbGVtZW50LmNsYXNzTmFtZSA9ICdtZW51X19wcmlvcml0aWVzLWNvbnRhaW5lcidcblxuICBjb25zdCBnZW5lcmF0ZVByaW9yaXRpZXMgPSAoKSA9PiB7XG4gICAgY29uc3QgcHJpb3JpdGllc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgcHJpb3JpdGllc0NvbnRhaW5lci5jbGFzc05hbWUgPSAnbWVudV9fcHJpb3JpdGllcydcblxuICAgIGZvciAobGV0IHByaW9yaXR5IG9mIHByaW9yaXRpZXMpIHtcbiAgICAgIGNvbnN0IHByaW9yaXR5RWxlbWVudCA9IE1lbnVQcmlvcml0eShwcmlvcml0eSwgKGUpID0+IGNvbnNvbGUubG9nKGUpKVxuXG4gICAgICBwcmlvcml0eUVsZW1lbnRzLnB1c2gocHJpb3JpdHlFbGVtZW50KVxuICAgICAgcHJpb3JpdGllc0NvbnRhaW5lci5hcHBlbmRDaGlsZChwcmlvcml0eUVsZW1lbnQuZWxlbWVudClcbiAgICB9XG5cbiAgICBlbGVtZW50LmlubmVySFRNTCA9ICcnXG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChNZW51VGl0bGUoJ1ByaW9yaXRpZXMnKSlcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKHByaW9yaXRpZXNDb250YWluZXIpXG4gIH1cbiAgZ2VuZXJhdGVQcmlvcml0aWVzKHByaW9yaXRpZXMpXG5cbiAgY29uc3QgY2xlYXJBY3RpdmVzID0gKCkgPT4ge1xuICAgIHByaW9yaXR5RWxlbWVudHMuZm9yRWFjaCgocHJpb3JpdHlFbGVtZW50KSA9PlxuICAgICAgcHJpb3JpdHlFbGVtZW50LnJlbW92ZUFjdGl2ZUNsYXNzKClcbiAgICApXG4gIH1cbiAgcmV0dXJuIHsgZWxlbWVudCwgY2xlYXJBY3RpdmVzIH1cbn0pKClcblxuZXhwb3J0IGRlZmF1bHQgTWVudVByaW9yaXRpZXNcbiIsImNvbnN0IE1lbnVQcmlvcml0eSA9ICh7IGlkLCBjb2xvciwgdGl0bGUgfSwgY2xpY2tFdmVudCkgPT4ge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBpZClcbiAgZWxlbWVudC5jbGFzc05hbWUgPSAnbWVudV9fcHJpb3JpdHknXG5cbiAgY29uc3QgY29sb3JTeW1ib2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBjb2xvclN5bWJvbC5jbGFzc05hbWUgPSAnbWVudV9fY29sb3Itc3ltYm9sJ1xuICBjb2xvclN5bWJvbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvclxuXG4gIGNvbnN0IHRpdGxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0JylcbiAgdGl0bGVFbGVtZW50LmNsYXNzTmFtZSA9ICdtZW51X19wcmlvcml0eV9fdGl0bGUnXG4gIHRpdGxlRWxlbWVudC50ZXh0Q29udGVudCA9IHRpdGxlXG5cbiAgZWxlbWVudC5hcHBlbmRDaGlsZChjb2xvclN5bWJvbClcbiAgZWxlbWVudC5hcHBlbmRDaGlsZCh0aXRsZUVsZW1lbnQpXG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGlja0V2ZW50KVxuXG4gIGNvbnN0IGFkZEFjdGl2ZUNsYXNzID0gKCkgPT4ge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbWVudV9fcHJpb3JpdHktLWFjdGl2ZScpXG4gIH1cblxuICBjb25zdCByZW1vdmVBY3RpdmVDbGFzcyA9ICgpID0+IHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ21lbnVfX3ByaW9yaXR5LS1hY3RpdmUnKVxuICB9XG5cbiAgcmV0dXJuIHsgZWxlbWVudCwgYWRkQWN0aXZlQ2xhc3MsIHJlbW92ZUFjdGl2ZUNsYXNzIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTWVudVByaW9yaXR5XG4iLCJjb25zdCBNZW51VGFnID0gKHsgaWQsIGNvbG9yLCB0aXRsZSB9LCBjbGlja0V2ZW50KSA9PiB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIGlkKVxuICBlbGVtZW50LmNsYXNzTmFtZSA9ICdtZW51X190YWcnXG5cbiAgY29uc3QgY29sb3JTeW1ib2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBjb2xvclN5bWJvbC5jbGFzc05hbWUgPSAnbWVudV9fY29sb3Itc3ltYm9sJ1xuICBjb2xvclN5bWJvbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvclxuXG4gIGNvbnN0IHRpdGxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0JylcbiAgdGl0bGVFbGVtZW50LmNsYXNzTmFtZSA9ICdtZW51X190YWdfX3RpdGxlJ1xuICB0aXRsZUVsZW1lbnQudGV4dENvbnRlbnQgPSB0aXRsZVxuXG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQoY29sb3JTeW1ib2wpXG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQodGl0bGVFbGVtZW50KVxuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xpY2tFdmVudClcblxuICBjb25zdCBhZGRBY3RpdmVDbGFzcyA9ICgpID0+IHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ21lbnVfX3ByaW9yaXR5LS1hY3RpdmUnKVxuICB9XG5cbiAgY29uc3QgcmVtb3ZlQWN0aXZlQ2xhc3MgPSAoKSA9PiB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdtZW51X19wcmlvcml0eS0tYWN0aXZlJylcbiAgfVxuXG4gIHJldHVybiB7IGVsZW1lbnQsIGFkZEFjdGl2ZUNsYXNzLCByZW1vdmVBY3RpdmVDbGFzcyB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1lbnVUYWdcbiIsImltcG9ydCBFbXB0eU1lc3NhZ2UgZnJvbSAnLi4vLi4vRW1wdHlNZXNzYWdlJ1xuaW1wb3J0IE1lbnVUaXRsZSBmcm9tICcuLi9NZW51VGl0bGUnXG5pbXBvcnQgTWVudVRhZyBmcm9tICcuL01lbnVUYWcnXG5cbmNvbnN0IE1lbnVUYWdzID0gKCgpID0+IHtcbiAgY29uc3QgZHVtbXlUYWdzID0gW1xuICAgIHsgaWQ6IDAsIGNvbG9yOiAnIzREQUJGNycsIHRpdGxlOiAnV29yaycgfSxcbiAgICB7IGlkOiAxLCBjb2xvcjogJyNEQTc3RjInLCB0aXRsZTogJ1NjaG9vbCcgfSxcbiAgICB7IGlkOiAyLCBjb2xvcjogJyNGRkQ0M0InLCB0aXRsZTogJ1BlcnNvbmFsJyB9LFxuICBdXG4gIGNvbnN0IHRhZ0VsZW1lbnRzID0gW11cbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGVsZW1lbnQuY2xhc3NOYW1lID0gJ21lbnVfX3RhZ3MtY29udGFpbmVyJ1xuXG4gIGNvbnN0IGdlbmVyYXRlVGFncyA9ICh0YWdzKSA9PiB7XG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSAnJ1xuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoTWVudVRpdGxlKCdUYWdzJykpXG5cbiAgICBpZiAodGFncy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCB0YWdzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgIHRhZ3NDb250YWluZXIuY2xhc3NOYW1lID0gJ21lbnVfX3RhZ3MnXG5cbiAgICAgIGZvciAobGV0IHRhZyBvZiB0YWdzKSB7XG4gICAgICAgIGNvbnN0IHRhZ0VsZW1lbnQgPSBNZW51VGFnKHRhZywgKGUpID0+IGNvbnNvbGUubG9nKGUpKVxuXG4gICAgICAgIHRhZ0VsZW1lbnRzLnB1c2godGFnRWxlbWVudClcbiAgICAgICAgdGFnc0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YWdFbGVtZW50LmVsZW1lbnQpXG4gICAgICB9XG5cbiAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQodGFnc0NvbnRhaW5lcilcbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChcbiAgICAgICAgRW1wdHlNZXNzYWdlKFxuICAgICAgICAgIFwiSXQncyBwcmV0dHkgZW1wdHkgaGVyZSDwn5iVLiBMZXQncyBhZGQgYSBuZXcgdGFnIHdpdGggdGhlIGJ1dHRvbiBiZWxvdyFcIlxuICAgICAgICApXG4gICAgICApXG4gICAgfVxuICB9XG4gIC8vIGdlbmVyYXRlVGFncyhkdW1teVRhZ3MpXG4gIGdlbmVyYXRlVGFncyhbXSlcblxuICByZXR1cm4geyBlbGVtZW50LCBnZW5lcmF0ZVRhZ3MgfVxufSkoKVxuXG5leHBvcnQgZGVmYXVsdCBNZW51VGFnc1xuIiwiZXhwb3J0IGNvbnN0IGNsZWFuQ29udGVudCA9IChub2RlKSA9PiB7XG4gIG5vZGUuaW5uZXJIVE1MID0gJydcbn1cblxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlQ29udGVudCA9IChub2RlLCBjb250ZW50KSA9PiB7XG4gIG5vZGUuYXBwZW5kQ2hpbGQoY29udGVudClcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4uL3Njc3MvaW5kZXguc2NzcydcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi9jb21wb25lbnRzL05hdmJhcidcbmltcG9ydCBNYWluIGZyb20gJy4vY29tcG9uZW50cy9NYWluJ1xuaW1wb3J0IHsgZ2VuZXJhdGVDb250ZW50IH0gZnJvbSAnLi9jb250ZW50R2VuZXJhdG9yJ1xuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJylcbmdlbmVyYXRlQ29udGVudChjb250YWluZXIsIE5hdmJhcilcbmdlbmVyYXRlQ29udGVudChjb250YWluZXIsIE1haW4pXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=