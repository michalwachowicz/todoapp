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

/***/ "./src/js/components/ColorPicker.js":
/*!******************************************!*\
  !*** ./src/js/components/ColorPicker.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const colors = [
  '#ff6b6b',
  '#f06595',
  '#cc5de8',
  '#845ef7',
  '#5c7cfa',
  '#339af0',
  '#22b8cf',
  '#20c997',
  '#51cf66',
  '#94d82d',
  '#fcc419',
  '#ff922b',
]

const ColorPicker = (() => {
  let currentTarget = null
  const element = document.createElement('div')
  element.className = 'color-picker hidden'

  const h3 = document.createElement('h3')
  h3.className = 'color-picker__title'
  h3.textContent = 'Pick a color:'

  const colorContainer = document.createElement('div')
  colorContainer.className = 'color-picker__colors'

  for (let color of colors) {
    const colorElement = document.createElement('div')
    colorElement.className = 'color-picker__color'
    colorElement.style.backgroundColor = color

    colorElement.addEventListener('click', () => {
      if (currentTarget != null) {
        currentTarget.style.backgroundColor = color
        currentTarget.setAttribute('data-color', color)
      }
    })
    colorContainer.appendChild(colorElement)
  }

  const generate = (target, x, y) => {
    currentTarget = target
    element.style.top = `${y}px`
    element.style.left = `${x}px`
    element.classList.remove('hidden')
  }

  element.appendChild(h3)
  element.appendChild(colorContainer)

  document.addEventListener('mousedown', (e) => {
    if (e.target != element && !element.contains(e.target))
      element.classList.add('hidden')
  })

  return { element, generate }
})()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ColorPicker);


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
/* harmony import */ var _NewTagBtn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NewTagBtn */ "./src/js/components/menu/tag/NewTagBtn.js");





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
    element.appendChild((0,_NewTagBtn__WEBPACK_IMPORTED_MODULE_3__["default"])(() => console.log('Test')))
  }
  // generateTags(dummyTags)
  generateTags([])

  return { element, generateTags }
})()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MenuTags);


/***/ }),

/***/ "./src/js/components/menu/tag/NewTagBtn.js":
/*!*************************************************!*\
  !*** ./src/js/components/menu/tag/NewTagBtn.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _icons_AddIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../icons/AddIcon */ "./src/js/components/icons/AddIcon.js");
/* harmony import */ var _ColorPicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ColorPicker */ "./src/js/components/ColorPicker.js");



const NewTagBtn = (submitEvent) => {
  const element = document.createElement('div')
  element.className = 'menu__new-tag'

  const generateButton = () => {
    const btn = document.createElement('button')
    btn.classList = 'menu__new-tag__btn menu__new-tag__btn--new'

    const h4 = document.createElement('h4')
    h4.className = 'menu__new-tag__btn__title'
    h4.textContent = 'Create new tag'

    btn.appendChild((0,_icons_AddIcon__WEBPACK_IMPORTED_MODULE_0__["default"])('menu__new-tag__btn__icon'))
    btn.appendChild(h4)
    btn.addEventListener('click', generateForm)

    element.innerHTML = ''
    element.appendChild(btn)
  }

  const generateForm = () => {
    const form = document.createElement('form')
    form.className = 'menu__new-tag__form'

    const colorPicker = document.createElement('button')
    colorPicker.className = 'menu__new-tag__picker'

    const currentColor = document.createElement('div')
    currentColor.className = 'menu__new-tag__picker__current'
    currentColor.style.backgroundColor = '#ff6b6b'
    currentColor.setAttribute('data-color', '#ff6b6b')

    colorPicker.addEventListener('click', (e) => {
      e.preventDefault()
      _ColorPicker__WEBPACK_IMPORTED_MODULE_1__["default"].generate(currentColor, e.x, e.clientY + 50)
    })
    colorPicker.appendChild(currentColor)

    const nameInput = document.createElement('input')
    nameInput.className = 'menu__new-tag__form__input'
    nameInput.type = 'text'
    nameInput.placeholder = 'Tag name'
    nameInput.required = true
    nameInput.maxLength = 15

    const submitBtn = document.createElement('button')
    submitBtn.className = 'menu__new-tag__btn menu__new-tag__btn--submit'
    submitBtn.type = 'submit'
    submitBtn.textContent = 'Add'

    form.appendChild(colorPicker)
    form.appendChild(nameInput)
    form.appendChild(submitBtn)
    form.addEventListener('submit', (e) => {
      e.preventDefault()

      generateButton()
      submitEvent()
    })

    element.innerHTML = ''
    element.appendChild(form)
  }

  generateButton()
  return element
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewTagBtn);


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
/* harmony import */ var _components_ColorPicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/ColorPicker */ "./src/js/components/ColorPicker.js");
/* harmony import */ var _contentGenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contentGenerator */ "./src/js/contentGenerator.js");






const container = document.querySelector('.container')
;(0,_contentGenerator__WEBPACK_IMPORTED_MODULE_4__.generateContent)(container, _components_Navbar__WEBPACK_IMPORTED_MODULE_1__["default"])
;(0,_contentGenerator__WEBPACK_IMPORTED_MODULE_4__.generateContent)(container, _components_Main__WEBPACK_IMPORTED_MODULE_2__["default"])
;(0,_contentGenerator__WEBPACK_IMPORTED_MODULE_4__.generateContent)(container, _components_ColorPicker__WEBPACK_IMPORTED_MODULE_3__["default"].element)

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7OztBQ04yQjtBQUNhO0FBQ0o7QUFDYztBQUNFOztBQUVwRDtBQUNBLG1FQUFlLFlBQVksMERBQU07QUFDakMsbUVBQWUsWUFBWSx3REFBSTtBQUMvQixtRUFBZSxZQUFZLHVFQUFtQiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3Njc3MvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9hc3NldHMvaWNvbnMvaW5ib3guc3ZnIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2Fzc2V0cy9pY29ucy9tZW51LnN2ZyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9hc3NldHMvaWNvbnMvbmV4dC03LWRheXMuc3ZnIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2Fzc2V0cy9pY29ucy9wbHVzLnN2ZyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9hc3NldHMvaWNvbnMvdG9kYXkuc3ZnIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2pzL2NvbXBvbmVudHMvQ29sb3JQaWNrZXIuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvanMvY29tcG9uZW50cy9EaXZpZGVyLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2pzL2NvbXBvbmVudHMvRW1wdHlNZXNzYWdlLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2pzL2NvbXBvbmVudHMvTWFpbi5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9qcy9jb21wb25lbnRzL05hdmJhci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9qcy9jb21wb25lbnRzL1Rhc2tzVmlldy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9qcy9jb21wb25lbnRzL2ljb25zL0FkZEljb24uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvanMvY29tcG9uZW50cy9pY29ucy9JY29uLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2pzL2NvbXBvbmVudHMvaWNvbnMvSW5ib3hJY29uLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2pzL2NvbXBvbmVudHMvaWNvbnMvTWVudUljb24uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvanMvY29tcG9uZW50cy9pY29ucy9OZXh0RGF5c0ljb24uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvanMvY29tcG9uZW50cy9pY29ucy9Ub2RheUljb24uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvanMvY29tcG9uZW50cy9tZW51L01lbnUuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvanMvY29tcG9uZW50cy9tZW51L01lbnVUaXRsZS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9qcy9jb21wb25lbnRzL21lbnUvb3B0aW9uL01lbnVPcHRpb24uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvanMvY29tcG9uZW50cy9tZW51L29wdGlvbi9NZW51T3B0aW9ucy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9qcy9jb21wb25lbnRzL21lbnUvcHJpb3JpdHkvTWVudVByaW9yaXRpZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvanMvY29tcG9uZW50cy9tZW51L3ByaW9yaXR5L01lbnVQcmlvcml0eS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9qcy9jb21wb25lbnRzL21lbnUvdGFnL01lbnVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvanMvY29tcG9uZW50cy9tZW51L3RhZy9NZW51VGFncy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9qcy9jb21wb25lbnRzL21lbnUvdGFnL05ld1RhZ0J0bi5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9qcy9jb250ZW50R2VuZXJhdG9yLmpzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvanMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgdmlld0JveD1cXFwiMCAwIDM2IDM2XFxcIiBmaWxsPVxcXCJub25lXFxcIiB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiPjxwYXRoIGQ9XFxcIk02IDQuNUgzMEwzMyAxMC41VjMwQzMzIDMwLjM5NzggMzIuODQyIDMwLjc3OTQgMzIuNTYwNyAzMS4wNjA3QzMyLjI3OTQgMzEuMzQyIDMxLjg5NzggMzEuNSAzMS41IDMxLjVINC41QzQuMTAyMTggMzEuNSAzLjcyMDY0IDMxLjM0MiAzLjQzOTM0IDMxLjA2MDdDMy4xNTgwNCAzMC43Nzk0IDMgMzAuMzk3OCAzIDMwVjEwLjUwNkw2IDQuNVpNMTkuNSAyMVYxNUgxNi41VjIxSDEyTDE4IDI3TDI0IDIxSDE5LjVaTTI5LjY0NiAxMC41TDI4LjE0NiA3LjVINy44NTU1TDYuMzU1NSAxMC41SDI5LjY0NlpcXFwiIGZpbGw9XFxcIiM0OTUwNTdcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHZpZXdCb3g9XFxcIjAgMCAzMCAzMVxcXCIgZmlsbD1cXFwibm9uZVxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIj48cGF0aCBkPVxcXCJNMy43NSA1LjVIMjYuMjVWOEgzLjc1VjUuNVpNMy43NSAxNC4yNUgyNi4yNVYxNi43NUgzLjc1VjE0LjI1Wk0zLjc1IDIzSDI2LjI1VjI1LjVIMy43NVYyM1pcXFwiIGZpbGw9XFxcIiM0OTUwNTdcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHZpZXdCb3g9XFxcIjAgMCAzNiAzNlxcXCIgZmlsbD1cXFwibm9uZVxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIj48cGF0aCBkPVxcXCJNMjUuNSA0LjVIMzEuNUMzMS44OTc4IDQuNSAzMi4yNzk0IDQuNjU4MDQgMzIuNTYwNyA0LjkzOTM0QzMyLjg0MiA1LjIyMDY0IDMzIDUuNjAyMTcgMzMgNlYzMEMzMyAzMC4zOTc4IDMyLjg0MiAzMC43Nzk0IDMyLjU2MDcgMzEuMDYwN0MzMi4yNzk0IDMxLjM0MiAzMS44OTc4IDMxLjUgMzEuNSAzMS41SDQuNUM0LjEwMjE4IDMxLjUgMy43MjA2NCAzMS4zNDIgMy40MzkzNCAzMS4wNjA3QzMuMTU4MDQgMzAuNzc5NCAzIDMwLjM5NzggMyAzMFY2QzMgNS42MDIxNyAzLjE1ODA0IDUuMjIwNjQgMy40MzkzNCA0LjkzOTM0QzMuNzIwNjQgNC42NTgwNCA0LjEwMjE4IDQuNSA0LjUgNC41SDEwLjVWMS41SDEzLjVWNC41SDIyLjVWMS41SDI1LjVWNC41Wk02IDEzLjVWMjguNUgzMFYxMy41SDZaTTkgMTkuNUgxNi41VjI1LjVIOVYxOS41WlxcXCIgZmlsbD1cXFwiIzQ5NTA1N1xcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgdmlld0JveD1cXFwiMCAwIDMwIDMwXFxcIiBmaWxsPVxcXCJub25lXFxcIiB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiPjxwYXRoIGQ9XFxcIk0xMi44NTcxIDEyLjg1NzFWMEgxNy4xNDI5VjEyLjg1NzFIMzBWMTcuMTQyOUgxNy4xNDI5VjMwSDEyLjg1NzFWMTcuMTQyOUgwVjEyLjg1NzFIMTIuODU3MVpcXFwiIGZpbGw9XFxcIiM0OTUwNTdcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHZpZXdCb3g9XFxcIjAgMCAzNiAzNlxcXCIgZmlsbD1cXFwibm9uZVxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIj48cGF0aCBkPVxcXCJNMjUuNSA0LjVIMzEuNUMzMS44OTc4IDQuNSAzMi4yNzk0IDQuNjU4MDMgMzIuNTYwNyA0LjkzOTM0QzMyLjg0MiA1LjIyMDY0IDMzIDUuNjAyMTcgMzMgNlYzMEMzMyAzMC4zOTc4IDMyLjg0MiAzMC43Nzk0IDMyLjU2MDcgMzEuMDYwN0MzMi4yNzk0IDMxLjM0MiAzMS44OTc4IDMxLjUgMzEuNSAzMS41SDQuNUM0LjEwMjE4IDMxLjUgMy43MjA2NCAzMS4zNDIgMy40MzkzNCAzMS4wNjA3QzMuMTU4MDQgMzAuNzc5NCAzIDMwLjM5NzggMyAzMFY2QzMgNS42MDIxNyAzLjE1ODA0IDUuMjIwNjQgMy40MzkzNCA0LjkzOTM0QzMuNzIwNjQgNC42NTgwMyA0LjEwMjE4IDQuNSA0LjUgNC41SDEwLjVWMS41SDEzLjVWNC41SDIyLjVWMS41SDI1LjVWNC41Wk02IDEzLjVWMjguNUgzMFYxMy41SDZaTTkgMTYuNUgxMlYxOS41SDlWMTYuNVpNOSAyMi41SDEyVjI1LjVIOVYyMi41Wk0xNSAxNi41SDI3VjE5LjVIMTVWMTYuNVpNMTUgMjIuNUgyMi41VjI1LjVIMTVWMjIuNVpcXFwiIGZpbGw9XFxcIiM0OTUwNTdcXFwiPjwvcGF0aD48L3N2Zz5cIiIsImNvbnN0IGNvbG9ycyA9IFtcbiAgJyNmZjZiNmInLFxuICAnI2YwNjU5NScsXG4gICcjY2M1ZGU4JyxcbiAgJyM4NDVlZjcnLFxuICAnIzVjN2NmYScsXG4gICcjMzM5YWYwJyxcbiAgJyMyMmI4Y2YnLFxuICAnIzIwYzk5NycsXG4gICcjNTFjZjY2JyxcbiAgJyM5NGQ4MmQnLFxuICAnI2ZjYzQxOScsXG4gICcjZmY5MjJiJyxcbl1cblxuY29uc3QgQ29sb3JQaWNrZXIgPSAoKCkgPT4ge1xuICBsZXQgY3VycmVudFRhcmdldCA9IG51bGxcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGVsZW1lbnQuY2xhc3NOYW1lID0gJ2NvbG9yLXBpY2tlciBoaWRkZW4nXG5cbiAgY29uc3QgaDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpXG4gIGgzLmNsYXNzTmFtZSA9ICdjb2xvci1waWNrZXJfX3RpdGxlJ1xuICBoMy50ZXh0Q29udGVudCA9ICdQaWNrIGEgY29sb3I6J1xuXG4gIGNvbnN0IGNvbG9yQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgY29sb3JDb250YWluZXIuY2xhc3NOYW1lID0gJ2NvbG9yLXBpY2tlcl9fY29sb3JzJ1xuXG4gIGZvciAobGV0IGNvbG9yIG9mIGNvbG9ycykge1xuICAgIGNvbnN0IGNvbG9yRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29sb3JFbGVtZW50LmNsYXNzTmFtZSA9ICdjb2xvci1waWNrZXJfX2NvbG9yJ1xuICAgIGNvbG9yRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvclxuXG4gICAgY29sb3JFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgaWYgKGN1cnJlbnRUYXJnZXQgIT0gbnVsbCkge1xuICAgICAgICBjdXJyZW50VGFyZ2V0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yXG4gICAgICAgIGN1cnJlbnRUYXJnZXQuc2V0QXR0cmlidXRlKCdkYXRhLWNvbG9yJywgY29sb3IpXG4gICAgICB9XG4gICAgfSlcbiAgICBjb2xvckNvbnRhaW5lci5hcHBlbmRDaGlsZChjb2xvckVsZW1lbnQpXG4gIH1cblxuICBjb25zdCBnZW5lcmF0ZSA9ICh0YXJnZXQsIHgsIHkpID0+IHtcbiAgICBjdXJyZW50VGFyZ2V0ID0gdGFyZ2V0XG4gICAgZWxlbWVudC5zdHlsZS50b3AgPSBgJHt5fXB4YFxuICAgIGVsZW1lbnQuc3R5bGUubGVmdCA9IGAke3h9cHhgXG4gICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKVxuICB9XG5cbiAgZWxlbWVudC5hcHBlbmRDaGlsZChoMylcbiAgZWxlbWVudC5hcHBlbmRDaGlsZChjb2xvckNvbnRhaW5lcilcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldCAhPSBlbGVtZW50ICYmICFlbGVtZW50LmNvbnRhaW5zKGUudGFyZ2V0KSlcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgfSlcblxuICByZXR1cm4geyBlbGVtZW50LCBnZW5lcmF0ZSB9XG59KSgpXG5cbmV4cG9ydCBkZWZhdWx0IENvbG9yUGlja2VyXG4iLCJjb25zdCBEaXZpZGVyID0gKCkgPT4ge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaHInKVxuICBlbGVtZW50LmNsYXNzTmFtZSA9ICdkaXZpZGVyJ1xuXG4gIHJldHVybiBlbGVtZW50XG59XG5cbmV4cG9ydCBkZWZhdWx0IERpdmlkZXJcbiIsImNvbnN0IEVtcHR5TWVzc2FnZSA9ICh0ZXh0KSA9PiB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgZWxlbWVudC5jbGFzc05hbWUgPSAnZW1wdHktbWVzc2FnZSdcbiAgZWxlbWVudC50ZXh0Q29udGVudCA9IHRleHRcbiAgcmV0dXJuIGVsZW1lbnRcbn1cblxuZXhwb3J0IGRlZmF1bHQgRW1wdHlNZXNzYWdlXG4iLCJpbXBvcnQgTWVudSBmcm9tICcuL21lbnUvTWVudSdcbmltcG9ydCBUYXNrc1ZpZXcgZnJvbSAnLi9UYXNrc1ZpZXcnXG5cbmNvbnN0IE1haW4gPSAoKCkgPT4ge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgbWFpbi5jbGFzc05hbWUgPSAnbWFpbidcblxuICBtYWluLmFwcGVuZENoaWxkKE1lbnUuZWxlbWVudClcbiAgbWFpbi5hcHBlbmRDaGlsZChUYXNrc1ZpZXcuZWxlbWVudClcblxuICByZXR1cm4gbWFpblxufSkoKVxuXG5leHBvcnQgZGVmYXVsdCBNYWluXG4iLCJpbXBvcnQgTWVudUljb24gZnJvbSAnLi9pY29ucy9NZW51SWNvbidcbmltcG9ydCBBZGRJY29uIGZyb20gJy4vaWNvbnMvQWRkSWNvbidcbmltcG9ydCBNZW51IGZyb20gJy4vbWVudS9NZW51J1xuXG5jb25zdCBOYXZiYXIgPSAoKCkgPT4ge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKVxuICBoZWFkZXIuY2xhc3NOYW1lID0gJ2hlYWRlcidcblxuICBjb25zdCBuYXZCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKVxuICBuYXZCYXIuY2xhc3NOYW1lID0gJ25hdmJhcidcblxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbiAgdGl0bGUuY2xhc3NOYW1lID0gJ2hlYWRlcl9fdGl0bGUnXG4gIHRpdGxlLnRleHRDb250ZW50ID0gJ1RvZG9BcHAnXG5cbiAgY29uc3QgbWVudUljb24gPSBNZW51SWNvbignaGVhZGVyX19pY29uIGhlYWRlcl9faWNvbi0tbWVudScpXG4gIG1lbnVJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgTWVudS50b2dnbGVIaWRlKVxuXG4gIG5hdkJhci5hcHBlbmRDaGlsZChtZW51SWNvbilcbiAgbmF2QmFyLmFwcGVuZENoaWxkKHRpdGxlKVxuICBuYXZCYXIuYXBwZW5kQ2hpbGQoQWRkSWNvbignaGVhZGVyX19pY29uIGhlYWRlcl9faWNvbi0tYWRkJykpXG4gIGhlYWRlci5hcHBlbmRDaGlsZChuYXZCYXIpXG5cbiAgcmV0dXJuIGhlYWRlclxufSkoKVxuXG5leHBvcnQgZGVmYXVsdCBOYXZiYXJcbiIsImNvbnN0IFRhc2tzVmlldyA9ICgoKSA9PiB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJylcbiAgZWxlbWVudC5jbGFzc05hbWUgPSAndGFza3MtdmlldydcblxuICBjb25zdCBnZW5lcmF0ZVRhc2tzID0gKHRpdGxlLCB0YXNrcykgPT4ge31cblxuICByZXR1cm4geyBlbGVtZW50LCBnZW5lcmF0ZVRhc2tzIH1cbn0pKClcblxuZXhwb3J0IGRlZmF1bHQgVGFza3NWaWV3XG4iLCJpbXBvcnQgSWNvbiBmcm9tICcuL0ljb24nXG5pbXBvcnQgQWRkSWNvblN2ZyBmcm9tICcuLi8uLi8uLi9hc3NldHMvaWNvbnMvcGx1cy5zdmcnXG5cbmNvbnN0IEFkZEljb24gPSAoY2xhc3NlcykgPT4gSWNvbihBZGRJY29uU3ZnLCBjbGFzc2VzKVxuZXhwb3J0IGRlZmF1bHQgQWRkSWNvblxuIiwiY29uc3QgSWNvbiA9IChzdmcsIGNsYXNzZXMpID0+IHtcbiAgY29uc3Qgc3ZnQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgc3ZnQ29udGFpbmVyLmNsYXNzTmFtZSA9IGNsYXNzZXNcbiAgc3ZnQ29udGFpbmVyLmlubmVySFRNTCA9IHN2Z1xuXG4gIHJldHVybiBzdmdDb250YWluZXJcbn1cblxuZXhwb3J0IGRlZmF1bHQgSWNvblxuIiwiaW1wb3J0IEljb24gZnJvbSAnLi9JY29uJ1xuaW1wb3J0IEluYm94SWNvblN2ZyBmcm9tICcuLi8uLi8uLi9hc3NldHMvaWNvbnMvaW5ib3guc3ZnJ1xuXG5jb25zdCBJbmJveEljb24gPSAoY2xhc3NlcykgPT4gSWNvbihJbmJveEljb25TdmcsIGNsYXNzZXMpXG5leHBvcnQgZGVmYXVsdCBJbmJveEljb25cbiIsImltcG9ydCBJY29uIGZyb20gJy4vSWNvbidcbmltcG9ydCBNZW51SWNvblN2ZyBmcm9tICcuLi8uLi8uLi9hc3NldHMvaWNvbnMvbWVudS5zdmcnXG5cbmNvbnN0IE1lbnVJY29uID0gKGNsYXNzZXMpID0+IEljb24oTWVudUljb25TdmcsIGNsYXNzZXMpXG5leHBvcnQgZGVmYXVsdCBNZW51SWNvblxuIiwiaW1wb3J0IEljb24gZnJvbSAnLi9JY29uJ1xuaW1wb3J0IE5leHREYXlzSWNvblN2ZyBmcm9tICcuLi8uLi8uLi9hc3NldHMvaWNvbnMvbmV4dC03LWRheXMuc3ZnJ1xuXG5jb25zdCBOZXh0RGF5c0ljb24gPSAoY2xhc3NlcykgPT4gSWNvbihOZXh0RGF5c0ljb25TdmcsIGNsYXNzZXMpXG5leHBvcnQgZGVmYXVsdCBOZXh0RGF5c0ljb25cbiIsImltcG9ydCBJY29uIGZyb20gJy4vSWNvbidcbmltcG9ydCBUb2RheUljb25TdmcgZnJvbSAnLi4vLi4vLi4vYXNzZXRzL2ljb25zL3RvZGF5LnN2ZydcblxuY29uc3QgVG9kYXlJY29uID0gKGNsYXNzZXMpID0+IEljb24oVG9kYXlJY29uU3ZnLCBjbGFzc2VzKVxuZXhwb3J0IGRlZmF1bHQgVG9kYXlJY29uXG4iLCJpbXBvcnQgTWVudU9wdGlvbnMgZnJvbSAnLi9vcHRpb24vTWVudU9wdGlvbnMnXG5pbXBvcnQgTWVudVRhZ3MgZnJvbSAnLi90YWcvTWVudVRhZ3MnXG5pbXBvcnQgRGl2aWRlciBmcm9tICcuLi9EaXZpZGVyJ1xuaW1wb3J0IE1lbnVQcmlvcml0aWVzIGZyb20gJy4vcHJpb3JpdHkvTWVudVByaW9yaXRpZXMnXG5cbmNvbnN0IE1lbnUgPSAoKCkgPT4ge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXNpZGUnKVxuICBlbGVtZW50LmNsYXNzTmFtZSA9ICdtZW51J1xuXG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQoTWVudU9wdGlvbnMpXG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQoRGl2aWRlcigpKVxuICBlbGVtZW50LmFwcGVuZENoaWxkKE1lbnVUYWdzLmVsZW1lbnQpXG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQoRGl2aWRlcigpKVxuICBlbGVtZW50LmFwcGVuZENoaWxkKE1lbnVQcmlvcml0aWVzLmVsZW1lbnQpXG5cbiAgY29uc3QgdG9nZ2xlSGlkZSA9ICgpID0+IHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpXG4gIH1cblxuICByZXR1cm4geyBlbGVtZW50LCB0b2dnbGVIaWRlIH1cbn0pKClcblxuZXhwb3J0IGRlZmF1bHQgTWVudVxuIiwiY29uc3QgTWVudVRpdGxlID0gKHRpdGxlKSA9PiB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpXG4gIGVsZW1lbnQuY2xhc3NOYW1lID0gJ21lbnVfX3RpdGxlJ1xuICBlbGVtZW50LnRleHRDb250ZW50ID0gdGl0bGVcblxuICByZXR1cm4gZWxlbWVudFxufVxuXG5leHBvcnQgZGVmYXVsdCBNZW51VGl0bGVcbiIsImNvbnN0IE1lbnVPcHRpb24gPSAoaWNvbiwgdGl0bGUsIGFjdGl2ZSwgY2xpY2tFdmVudCkgPT4ge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgZWxlbWVudC5jbGFzc05hbWUgPSBhY3RpdmVcbiAgICA/ICdtZW51X19vcHRpb24gbWVudV9fb3B0aW9uLS1hY3RpdmUnXG4gICAgOiAnbWVudV9fb3B0aW9uJ1xuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xpY2tFdmVudClcblxuICBjb25zdCB0aXRsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpXG4gIHRpdGxlRWxlbWVudC5jbGFzc05hbWUgPSAnbWVudV9fb3B0aW9uX190aXRsZSdcbiAgdGl0bGVFbGVtZW50LnRleHRDb250ZW50ID0gdGl0bGVcblxuICBlbGVtZW50LmFwcGVuZENoaWxkKGljb24pXG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQodGl0bGVFbGVtZW50KVxuXG4gIHJldHVybiBlbGVtZW50XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1lbnVPcHRpb25cbiIsImltcG9ydCBJbmJveEljb24gZnJvbSAnLi4vLi4vaWNvbnMvSW5ib3hJY29uJ1xuaW1wb3J0IFRvZGF5SWNvbiBmcm9tICcuLi8uLi9pY29ucy9Ub2RheUljb24nXG5pbXBvcnQgTmV4dERheXNJY29uIGZyb20gJy4uLy4uL2ljb25zL05leHREYXlzSWNvbidcbmltcG9ydCBNZW51T3B0aW9uIGZyb20gJy4vTWVudU9wdGlvbidcblxuY29uc3QgTWVudU9wdGlvbnMgPSAoKCkgPT4ge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgZWxlbWVudC5jbGFzc05hbWUgPSAnbWVudV9fb3B0aW9ucydcblxuICBjb25zdCBpY29uQ2xhc3MgPSAnbWVudV9fb3B0aW9uX19pY29uJ1xuICBlbGVtZW50LmFwcGVuZENoaWxkKFxuICAgIE1lbnVPcHRpb24oSW5ib3hJY29uKGljb25DbGFzcyksICdJbmJveCcsIGZhbHNlLCAoZSkgPT4gY29uc29sZS5sb2coZSkpXG4gIClcbiAgZWxlbWVudC5hcHBlbmRDaGlsZChcbiAgICBNZW51T3B0aW9uKFRvZGF5SWNvbihpY29uQ2xhc3MpLCAnVG9kYXknLCB0cnVlLCAoZSkgPT4gY29uc29sZS5sb2coZSkpXG4gIClcbiAgZWxlbWVudC5hcHBlbmRDaGlsZChcbiAgICBNZW51T3B0aW9uKE5leHREYXlzSWNvbihpY29uQ2xhc3MpLCAnTmV4dCA3IGRheXMnLCBmYWxzZSwgKGUpID0+XG4gICAgICBjb25zb2xlLmxvZyhlKVxuICAgIClcbiAgKVxuXG4gIHJldHVybiBlbGVtZW50XG59KSgpXG5cbmV4cG9ydCBkZWZhdWx0IE1lbnVPcHRpb25zXG4iLCJpbXBvcnQgTWVudVRpdGxlIGZyb20gJy4uL01lbnVUaXRsZSdcbmltcG9ydCBNZW51UHJpb3JpdHkgZnJvbSAnLi9NZW51UHJpb3JpdHknXG5cbmNvbnN0IE1lbnVQcmlvcml0aWVzID0gKCgpID0+IHtcbiAgY29uc3QgcHJpb3JpdGllcyA9IFtcbiAgICB7IGlkOiAwLCBjb2xvcjogJyNGRjZCNkInLCB0aXRsZTogJ0hpZ2gnIH0sXG4gICAgeyBpZDogMSwgY29sb3I6ICcjRkNDNDE5JywgdGl0bGU6ICdNZWRpdW0nIH0sXG4gICAgeyBpZDogMiwgY29sb3I6ICcjOTREODJEJywgdGl0bGU6ICdMb3cnIH0sXG4gIF1cbiAgY29uc3QgcHJpb3JpdHlFbGVtZW50cyA9IFtdXG5cbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGVsZW1lbnQuY2xhc3NOYW1lID0gJ21lbnVfX3ByaW9yaXRpZXMtY29udGFpbmVyJ1xuXG4gIGNvbnN0IGdlbmVyYXRlUHJpb3JpdGllcyA9ICgpID0+IHtcbiAgICBjb25zdCBwcmlvcml0aWVzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBwcmlvcml0aWVzQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdtZW51X19wcmlvcml0aWVzJ1xuXG4gICAgZm9yIChsZXQgcHJpb3JpdHkgb2YgcHJpb3JpdGllcykge1xuICAgICAgY29uc3QgcHJpb3JpdHlFbGVtZW50ID0gTWVudVByaW9yaXR5KHByaW9yaXR5LCAoZSkgPT4gY29uc29sZS5sb2coZSkpXG5cbiAgICAgIHByaW9yaXR5RWxlbWVudHMucHVzaChwcmlvcml0eUVsZW1lbnQpXG4gICAgICBwcmlvcml0aWVzQ29udGFpbmVyLmFwcGVuZENoaWxkKHByaW9yaXR5RWxlbWVudC5lbGVtZW50KVxuICAgIH1cblxuICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gJydcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKE1lbnVUaXRsZSgnUHJpb3JpdGllcycpKVxuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQocHJpb3JpdGllc0NvbnRhaW5lcilcbiAgfVxuICBnZW5lcmF0ZVByaW9yaXRpZXMocHJpb3JpdGllcylcblxuICBjb25zdCBjbGVhckFjdGl2ZXMgPSAoKSA9PiB7XG4gICAgcHJpb3JpdHlFbGVtZW50cy5mb3JFYWNoKChwcmlvcml0eUVsZW1lbnQpID0+XG4gICAgICBwcmlvcml0eUVsZW1lbnQucmVtb3ZlQWN0aXZlQ2xhc3MoKVxuICAgIClcbiAgfVxuICByZXR1cm4geyBlbGVtZW50LCBjbGVhckFjdGl2ZXMgfVxufSkoKVxuXG5leHBvcnQgZGVmYXVsdCBNZW51UHJpb3JpdGllc1xuIiwiY29uc3QgTWVudVByaW9yaXR5ID0gKHsgaWQsIGNvbG9yLCB0aXRsZSB9LCBjbGlja0V2ZW50KSA9PiB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIGlkKVxuICBlbGVtZW50LmNsYXNzTmFtZSA9ICdtZW51X19wcmlvcml0eSdcblxuICBjb25zdCBjb2xvclN5bWJvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGNvbG9yU3ltYm9sLmNsYXNzTmFtZSA9ICdtZW51X19jb2xvci1zeW1ib2wnXG4gIGNvbG9yU3ltYm9sLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yXG5cbiAgY29uc3QgdGl0bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKVxuICB0aXRsZUVsZW1lbnQuY2xhc3NOYW1lID0gJ21lbnVfX3ByaW9yaXR5X190aXRsZSdcbiAgdGl0bGVFbGVtZW50LnRleHRDb250ZW50ID0gdGl0bGVcblxuICBlbGVtZW50LmFwcGVuZENoaWxkKGNvbG9yU3ltYm9sKVxuICBlbGVtZW50LmFwcGVuZENoaWxkKHRpdGxlRWxlbWVudClcbiAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrRXZlbnQpXG5cbiAgY29uc3QgYWRkQWN0aXZlQ2xhc3MgPSAoKSA9PiB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdtZW51X19wcmlvcml0eS0tYWN0aXZlJylcbiAgfVxuXG4gIGNvbnN0IHJlbW92ZUFjdGl2ZUNsYXNzID0gKCkgPT4ge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnbWVudV9fcHJpb3JpdHktLWFjdGl2ZScpXG4gIH1cblxuICByZXR1cm4geyBlbGVtZW50LCBhZGRBY3RpdmVDbGFzcywgcmVtb3ZlQWN0aXZlQ2xhc3MgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNZW51UHJpb3JpdHlcbiIsImNvbnN0IE1lbnVUYWcgPSAoeyBpZCwgY29sb3IsIHRpdGxlIH0sIGNsaWNrRXZlbnQpID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgaWQpXG4gIGVsZW1lbnQuY2xhc3NOYW1lID0gJ21lbnVfX3RhZydcblxuICBjb25zdCBjb2xvclN5bWJvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGNvbG9yU3ltYm9sLmNsYXNzTmFtZSA9ICdtZW51X19jb2xvci1zeW1ib2wnXG4gIGNvbG9yU3ltYm9sLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yXG5cbiAgY29uc3QgdGl0bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKVxuICB0aXRsZUVsZW1lbnQuY2xhc3NOYW1lID0gJ21lbnVfX3RhZ19fdGl0bGUnXG4gIHRpdGxlRWxlbWVudC50ZXh0Q29udGVudCA9IHRpdGxlXG5cbiAgZWxlbWVudC5hcHBlbmRDaGlsZChjb2xvclN5bWJvbClcbiAgZWxlbWVudC5hcHBlbmRDaGlsZCh0aXRsZUVsZW1lbnQpXG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGlja0V2ZW50KVxuXG4gIGNvbnN0IGFkZEFjdGl2ZUNsYXNzID0gKCkgPT4ge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbWVudV9fcHJpb3JpdHktLWFjdGl2ZScpXG4gIH1cblxuICBjb25zdCByZW1vdmVBY3RpdmVDbGFzcyA9ICgpID0+IHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ21lbnVfX3ByaW9yaXR5LS1hY3RpdmUnKVxuICB9XG5cbiAgcmV0dXJuIHsgZWxlbWVudCwgYWRkQWN0aXZlQ2xhc3MsIHJlbW92ZUFjdGl2ZUNsYXNzIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTWVudVRhZ1xuIiwiaW1wb3J0IEVtcHR5TWVzc2FnZSBmcm9tICcuLi8uLi9FbXB0eU1lc3NhZ2UnXG5pbXBvcnQgTWVudVRpdGxlIGZyb20gJy4uL01lbnVUaXRsZSdcbmltcG9ydCBNZW51VGFnIGZyb20gJy4vTWVudVRhZydcbmltcG9ydCBOZXdUYWdCdG4gZnJvbSAnLi9OZXdUYWdCdG4nXG5cbmNvbnN0IE1lbnVUYWdzID0gKCgpID0+IHtcbiAgY29uc3QgZHVtbXlUYWdzID0gW1xuICAgIHsgaWQ6IDAsIGNvbG9yOiAnIzREQUJGNycsIHRpdGxlOiAnV29yaycgfSxcbiAgICB7IGlkOiAxLCBjb2xvcjogJyNEQTc3RjInLCB0aXRsZTogJ1NjaG9vbCcgfSxcbiAgICB7IGlkOiAyLCBjb2xvcjogJyNGRkQ0M0InLCB0aXRsZTogJ1BlcnNvbmFsJyB9LFxuICBdXG4gIGNvbnN0IHRhZ0VsZW1lbnRzID0gW11cbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGVsZW1lbnQuY2xhc3NOYW1lID0gJ21lbnVfX3RhZ3MtY29udGFpbmVyJ1xuXG4gIGNvbnN0IGdlbmVyYXRlVGFncyA9ICh0YWdzKSA9PiB7XG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSAnJ1xuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoTWVudVRpdGxlKCdUYWdzJykpXG5cbiAgICBpZiAodGFncy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCB0YWdzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgIHRhZ3NDb250YWluZXIuY2xhc3NOYW1lID0gJ21lbnVfX3RhZ3MnXG5cbiAgICAgIGZvciAobGV0IHRhZyBvZiB0YWdzKSB7XG4gICAgICAgIGNvbnN0IHRhZ0VsZW1lbnQgPSBNZW51VGFnKHRhZywgKGUpID0+IGNvbnNvbGUubG9nKGUpKVxuXG4gICAgICAgIHRhZ0VsZW1lbnRzLnB1c2godGFnRWxlbWVudClcbiAgICAgICAgdGFnc0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YWdFbGVtZW50LmVsZW1lbnQpXG4gICAgICB9XG5cbiAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQodGFnc0NvbnRhaW5lcilcbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChcbiAgICAgICAgRW1wdHlNZXNzYWdlKFxuICAgICAgICAgIFwiSXQncyBwcmV0dHkgZW1wdHkgaGVyZSDwn5iVLiBMZXQncyBhZGQgYSBuZXcgdGFnIHdpdGggdGhlIGJ1dHRvbiBiZWxvdyFcIlxuICAgICAgICApXG4gICAgICApXG4gICAgfVxuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoTmV3VGFnQnRuKCgpID0+IGNvbnNvbGUubG9nKCdUZXN0JykpKVxuICB9XG4gIC8vIGdlbmVyYXRlVGFncyhkdW1teVRhZ3MpXG4gIGdlbmVyYXRlVGFncyhbXSlcblxuICByZXR1cm4geyBlbGVtZW50LCBnZW5lcmF0ZVRhZ3MgfVxufSkoKVxuXG5leHBvcnQgZGVmYXVsdCBNZW51VGFnc1xuIiwiaW1wb3J0IEFkZEljb24gZnJvbSAnLi4vLi4vaWNvbnMvQWRkSWNvbidcbmltcG9ydCBDb2xvclBpY2tlciBmcm9tICcuLi8uLi9Db2xvclBpY2tlcidcblxuY29uc3QgTmV3VGFnQnRuID0gKHN1Ym1pdEV2ZW50KSA9PiB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBlbGVtZW50LmNsYXNzTmFtZSA9ICdtZW51X19uZXctdGFnJ1xuXG4gIGNvbnN0IGdlbmVyYXRlQnV0dG9uID0gKCkgPT4ge1xuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgYnRuLmNsYXNzTGlzdCA9ICdtZW51X19uZXctdGFnX19idG4gbWVudV9fbmV3LXRhZ19fYnRuLS1uZXcnXG5cbiAgICBjb25zdCBoNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0JylcbiAgICBoNC5jbGFzc05hbWUgPSAnbWVudV9fbmV3LXRhZ19fYnRuX190aXRsZSdcbiAgICBoNC50ZXh0Q29udGVudCA9ICdDcmVhdGUgbmV3IHRhZydcblxuICAgIGJ0bi5hcHBlbmRDaGlsZChBZGRJY29uKCdtZW51X19uZXctdGFnX19idG5fX2ljb24nKSlcbiAgICBidG4uYXBwZW5kQ2hpbGQoaDQpXG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZ2VuZXJhdGVGb3JtKVxuXG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSAnJ1xuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoYnRuKVxuICB9XG5cbiAgY29uc3QgZ2VuZXJhdGVGb3JtID0gKCkgPT4ge1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJylcbiAgICBmb3JtLmNsYXNzTmFtZSA9ICdtZW51X19uZXctdGFnX19mb3JtJ1xuXG4gICAgY29uc3QgY29sb3JQaWNrZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGNvbG9yUGlja2VyLmNsYXNzTmFtZSA9ICdtZW51X19uZXctdGFnX19waWNrZXInXG5cbiAgICBjb25zdCBjdXJyZW50Q29sb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGN1cnJlbnRDb2xvci5jbGFzc05hbWUgPSAnbWVudV9fbmV3LXRhZ19fcGlja2VyX19jdXJyZW50J1xuICAgIGN1cnJlbnRDb2xvci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2ZmNmI2YidcbiAgICBjdXJyZW50Q29sb3Iuc2V0QXR0cmlidXRlKCdkYXRhLWNvbG9yJywgJyNmZjZiNmInKVxuXG4gICAgY29sb3JQaWNrZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICBDb2xvclBpY2tlci5nZW5lcmF0ZShjdXJyZW50Q29sb3IsIGUueCwgZS5jbGllbnRZICsgNTApXG4gICAgfSlcbiAgICBjb2xvclBpY2tlci5hcHBlbmRDaGlsZChjdXJyZW50Q29sb3IpXG5cbiAgICBjb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgbmFtZUlucHV0LmNsYXNzTmFtZSA9ICdtZW51X19uZXctdGFnX19mb3JtX19pbnB1dCdcbiAgICBuYW1lSW5wdXQudHlwZSA9ICd0ZXh0J1xuICAgIG5hbWVJbnB1dC5wbGFjZWhvbGRlciA9ICdUYWcgbmFtZSdcbiAgICBuYW1lSW5wdXQucmVxdWlyZWQgPSB0cnVlXG4gICAgbmFtZUlucHV0Lm1heExlbmd0aCA9IDE1XG5cbiAgICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIHN1Ym1pdEJ0bi5jbGFzc05hbWUgPSAnbWVudV9fbmV3LXRhZ19fYnRuIG1lbnVfX25ldy10YWdfX2J0bi0tc3VibWl0J1xuICAgIHN1Ym1pdEJ0bi50eXBlID0gJ3N1Ym1pdCdcbiAgICBzdWJtaXRCdG4udGV4dENvbnRlbnQgPSAnQWRkJ1xuXG4gICAgZm9ybS5hcHBlbmRDaGlsZChjb2xvclBpY2tlcilcbiAgICBmb3JtLmFwcGVuZENoaWxkKG5hbWVJbnB1dClcbiAgICBmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdEJ0bilcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgICAgZ2VuZXJhdGVCdXR0b24oKVxuICAgICAgc3VibWl0RXZlbnQoKVxuICAgIH0pXG5cbiAgICBlbGVtZW50LmlubmVySFRNTCA9ICcnXG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChmb3JtKVxuICB9XG5cbiAgZ2VuZXJhdGVCdXR0b24oKVxuICByZXR1cm4gZWxlbWVudFxufVxuXG5leHBvcnQgZGVmYXVsdCBOZXdUYWdCdG5cbiIsImV4cG9ydCBjb25zdCBjbGVhbkNvbnRlbnQgPSAobm9kZSkgPT4ge1xuICBub2RlLmlubmVySFRNTCA9ICcnXG59XG5cbmV4cG9ydCBjb25zdCBnZW5lcmF0ZUNvbnRlbnQgPSAobm9kZSwgY29udGVudCkgPT4ge1xuICBub2RlLmFwcGVuZENoaWxkKGNvbnRlbnQpXG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuLi9zY3NzL2luZGV4LnNjc3MnXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4vY29tcG9uZW50cy9OYXZiYXInXG5pbXBvcnQgTWFpbiBmcm9tICcuL2NvbXBvbmVudHMvTWFpbidcbmltcG9ydCBDb2xvclBpY2tlciBmcm9tICcuL2NvbXBvbmVudHMvQ29sb3JQaWNrZXInXG5pbXBvcnQgeyBnZW5lcmF0ZUNvbnRlbnQgfSBmcm9tICcuL2NvbnRlbnRHZW5lcmF0b3InXG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKVxuZ2VuZXJhdGVDb250ZW50KGNvbnRhaW5lciwgTmF2YmFyKVxuZ2VuZXJhdGVDb250ZW50KGNvbnRhaW5lciwgTWFpbilcbmdlbmVyYXRlQ29udGVudChjb250YWluZXIsIENvbG9yUGlja2VyLmVsZW1lbnQpXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=