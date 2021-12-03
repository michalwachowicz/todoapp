/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/date-fns/esm/_lib/assign/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/assign/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ assign)
/* harmony export */ });
function assign(target, dirtyObject) {
  if (target == null) {
    throw new TypeError('assign requires that input parameter not be null or undefined');
  }

  dirtyObject = dirtyObject || {};

  for (var property in dirtyObject) {
    if (Object.prototype.hasOwnProperty.call(dirtyObject, property)) {
      target[property] = dirtyObject[property];
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/cloneObject/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/cloneObject/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ cloneObject)
/* harmony export */ });
/* harmony import */ var _assign_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assign/index.js */ "./node_modules/date-fns/esm/_lib/assign/index.js");

function cloneObject(dirtyObject) {
  return (0,_assign_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, dirtyObject);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getTimezoneOffsetInMilliseconds)
/* harmony export */ });
/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
  utcDate.setUTCFullYear(date.getFullYear());
  return date.getTime() - utcDate.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/roundingMethods/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/roundingMethods/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getRoundingMethod": () => (/* binding */ getRoundingMethod)
/* harmony export */ });
var roundingMap = {
  ceil: Math.ceil,
  round: Math.round,
  floor: Math.floor,
  trunc: function (value) {
    return value < 0 ? Math.ceil(value) : Math.floor(value);
  } // Math.trunc is not supported by IE

};
var defaultRoundingMethod = 'trunc';
function getRoundingMethod(method) {
  return method ? roundingMap[method] : roundingMap[defaultRoundingMethod];
}

/***/ }),

/***/ "./node_modules/date-fns/esm/compareAsc/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/compareAsc/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ compareAsc)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name compareAsc
 * @category Common Helpers
 * @summary Compare the two dates and return -1, 0 or 1.
 *
 * @description
 * Compare the two dates and return 1 if the first date is after the second,
 * -1 if the first date is before the second or 0 if dates are equal.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the first date to compare
 * @param {Date|Number} dateRight - the second date to compare
 * @returns {Number} the result of the comparison
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Compare 11 February 1987 and 10 July 1989:
 * const result = compareAsc(new Date(1987, 1, 11), new Date(1989, 6, 10))
 * //=> -1
 *
 * @example
 * // Sort the array of dates:
 * const result = [
 *   new Date(1995, 6, 2),
 *   new Date(1987, 1, 11),
 *   new Date(1989, 6, 10)
 * ].sort(compareAsc)
 * //=> [
 * //   Wed Feb 11 1987 00:00:00,
 * //   Mon Jul 10 1989 00:00:00,
 * //   Sun Jul 02 1995 00:00:00
 * // ]
 */

function compareAsc(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  var diff = dateLeft.getTime() - dateRight.getTime();

  if (diff < 0) {
    return -1;
  } else if (diff > 0) {
    return 1; // Return 0 if diff is 0; return NaN if diff is NaN
  } else {
    return diff;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInCalendarMonths/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInCalendarMonths/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ differenceInCalendarMonths)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name differenceInCalendarMonths
 * @category Month Helpers
 * @summary Get the number of calendar months between the given dates.
 *
 * @description
 * Get the number of calendar months between the given dates.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of calendar months
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many calendar months are between 31 January 2014 and 1 September 2014?
 * var result = differenceInCalendarMonths(
 *   new Date(2014, 8, 1),
 *   new Date(2014, 0, 31)
 * )
 * //=> 8
 */

function differenceInCalendarMonths(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  var yearDiff = dateLeft.getFullYear() - dateRight.getFullYear();
  var monthDiff = dateLeft.getMonth() - dateRight.getMonth();
  return yearDiff * 12 + monthDiff;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInMilliseconds/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInMilliseconds/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ differenceInMilliseconds)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name differenceInMilliseconds
 * @category Millisecond Helpers
 * @summary Get the number of milliseconds between the given dates.
 *
 * @description
 * Get the number of milliseconds between the given dates.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of milliseconds
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many milliseconds are between
 * // 2 July 2014 12:30:20.600 and 2 July 2014 12:30:21.700?
 * const result = differenceInMilliseconds(
 *   new Date(2014, 6, 2, 12, 30, 21, 700),
 *   new Date(2014, 6, 2, 12, 30, 20, 600)
 * )
 * //=> 1100
 */

function differenceInMilliseconds(dateLeft, dateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  return (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dateLeft).getTime() - (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dateRight).getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInMonths/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInMonths/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ differenceInMonths)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _differenceInCalendarMonths_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../differenceInCalendarMonths/index.js */ "./node_modules/date-fns/esm/differenceInCalendarMonths/index.js");
/* harmony import */ var _compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../compareAsc/index.js */ "./node_modules/date-fns/esm/compareAsc/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _isLastDayOfMonth_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../isLastDayOfMonth/index.js */ "./node_modules/date-fns/esm/isLastDayOfMonth/index.js");





/**
 * @name differenceInMonths
 * @category Month Helpers
 * @summary Get the number of full months between the given dates.
 *
 * @description
 * Get the number of full months between the given dates using trunc as a default rounding method.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of full months
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many full months are between 31 January 2014 and 1 September 2014?
 * const result = differenceInMonths(new Date(2014, 8, 1), new Date(2014, 0, 31))
 * //=> 7
 */

function differenceInMonths(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  var sign = (0,_compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dateLeft, dateRight);
  var difference = Math.abs((0,_differenceInCalendarMonths_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dateLeft, dateRight));
  var result; // Check for the difference of less than month

  if (difference < 1) {
    result = 0;
  } else {
    if (dateLeft.getMonth() === 1 && dateLeft.getDate() > 27) {
      // This will check if the date is end of Feb and assign a higher end of month date
      // to compare it with Jan
      dateLeft.setDate(30);
    }

    dateLeft.setMonth(dateLeft.getMonth() - sign * difference); // Math.abs(diff in full months - diff in calendar months) === 1 if last calendar month is not full
    // If so, result must be decreased by 1 in absolute value

    var isLastMonthNotFull = (0,_compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dateLeft, dateRight) === -sign; // Check for cases of one full calendar month

    if ((0,_isLastDayOfMonth_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])((0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft)) && difference === 1 && (0,_compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDateLeft, dateRight) === 1) {
      isLastMonthNotFull = false;
    }

    result = sign * (difference - Number(isLastMonthNotFull));
  } // Prevent negative zero


  return result === 0 ? 0 : result;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInSeconds/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInSeconds/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ differenceInSeconds)
/* harmony export */ });
/* harmony import */ var _differenceInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../differenceInMilliseconds/index.js */ "./node_modules/date-fns/esm/differenceInMilliseconds/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_roundingMethods_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/roundingMethods/index.js */ "./node_modules/date-fns/esm/_lib/roundingMethods/index.js");



/**
 * @name differenceInSeconds
 * @category Second Helpers
 * @summary Get the number of seconds between the given dates.
 *
 * @description
 * Get the number of seconds between the given dates.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @param {Object} [options] - an object with options.
 * @param {String} [options.roundingMethod='trunc'] - a rounding method (`ceil`, `floor`, `round` or `trunc`)
 * @returns {Number} the number of seconds
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many seconds are between
 * // 2 July 2014 12:30:07.999 and 2 July 2014 12:30:20.000?
 * const result = differenceInSeconds(
 *   new Date(2014, 6, 2, 12, 30, 20, 0),
 *   new Date(2014, 6, 2, 12, 30, 7, 999)
 * )
 * //=> 12
 */

function differenceInSeconds(dateLeft, dateRight, options) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var diff = (0,_differenceInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dateLeft, dateRight) / 1000;
  return (0,_lib_roundingMethods_index_js__WEBPACK_IMPORTED_MODULE_2__.getRoundingMethod)(options === null || options === void 0 ? void 0 : options.roundingMethod)(diff);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/endOfDay/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/endOfDay/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ endOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name endOfDay
 * @category Day Helpers
 * @summary Return the end of a day for the given date.
 *
 * @description
 * Return the end of a day for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the end of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The end of a day for 2 September 2014 11:55:00:
 * const result = endOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 23:59:59.999
 */

function endOfDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  date.setHours(23, 59, 59, 999);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/endOfMonth/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/endOfMonth/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ endOfMonth)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name endOfMonth
 * @category Month Helpers
 * @summary Return the end of a month for the given date.
 *
 * @description
 * Return the end of a month for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the end of a month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The end of a month for 2 September 2014 11:55:00:
 * const result = endOfMonth(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 30 2014 23:59:59.999
 */

function endOfMonth(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var month = date.getMonth();
  date.setFullYear(date.getFullYear(), month + 1, 0);
  date.setHours(23, 59, 59, 999);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/formatDistance/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/formatDistance/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ formatDistance)
/* harmony export */ });
/* harmony import */ var _compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../compareAsc/index.js */ "./node_modules/date-fns/esm/compareAsc/index.js");
/* harmony import */ var _differenceInMonths_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../differenceInMonths/index.js */ "./node_modules/date-fns/esm/differenceInMonths/index.js");
/* harmony import */ var _differenceInSeconds_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../differenceInSeconds/index.js */ "./node_modules/date-fns/esm/differenceInSeconds/index.js");
/* harmony import */ var _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../locale/en-US/index.js */ "./node_modules/date-fns/esm/locale/en-US/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_cloneObject_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_lib/cloneObject/index.js */ "./node_modules/date-fns/esm/_lib/cloneObject/index.js");
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");








var MINUTES_IN_DAY = 1440;
var MINUTES_IN_ALMOST_TWO_DAYS = 2520;
var MINUTES_IN_MONTH = 43200;
var MINUTES_IN_TWO_MONTHS = 86400;
/**
 * @name formatDistance
 * @category Common Helpers
 * @summary Return the distance between the given dates in words.
 *
 * @description
 * Return the distance between the given dates in words.
 *
 * | Distance between dates                                            | Result              |
 * |-------------------------------------------------------------------|---------------------|
 * | 0 ... 30 secs                                                     | less than a minute  |
 * | 30 secs ... 1 min 30 secs                                         | 1 minute            |
 * | 1 min 30 secs ... 44 mins 30 secs                                 | [2..44] minutes     |
 * | 44 mins ... 30 secs ... 89 mins 30 secs                           | about 1 hour        |
 * | 89 mins 30 secs ... 23 hrs 59 mins 30 secs                        | about [2..24] hours |
 * | 23 hrs 59 mins 30 secs ... 41 hrs 59 mins 30 secs                 | 1 day               |
 * | 41 hrs 59 mins 30 secs ... 29 days 23 hrs 59 mins 30 secs         | [2..30] days        |
 * | 29 days 23 hrs 59 mins 30 secs ... 44 days 23 hrs 59 mins 30 secs | about 1 month       |
 * | 44 days 23 hrs 59 mins 30 secs ... 59 days 23 hrs 59 mins 30 secs | about 2 months      |
 * | 59 days 23 hrs 59 mins 30 secs ... 1 yr                           | [2..12] months      |
 * | 1 yr ... 1 yr 3 months                                            | about 1 year        |
 * | 1 yr 3 months ... 1 yr 9 month s                                  | over 1 year         |
 * | 1 yr 9 months ... 2 yrs                                           | almost 2 years      |
 * | N yrs ... N yrs 3 months                                          | about N years       |
 * | N yrs 3 months ... N yrs 9 months                                 | over N years        |
 * | N yrs 9 months ... N+1 yrs                                        | almost N+1 years    |
 *
 * With `options.includeSeconds == true`:
 * | Distance between dates | Result               |
 * |------------------------|----------------------|
 * | 0 secs ... 5 secs      | less than 5 seconds  |
 * | 5 secs ... 10 secs     | less than 10 seconds |
 * | 10 secs ... 20 secs    | less than 20 seconds |
 * | 20 secs ... 40 secs    | half a minute        |
 * | 40 secs ... 60 secs    | less than a minute   |
 * | 60 secs ... 90 secs    | 1 minute             |
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The function was renamed from `distanceInWords ` to `formatDistance`
 *   to make its name consistent with `format` and `formatRelative`.
 *
 * - The order of arguments is swapped to make the function
 *   consistent with `differenceIn...` functions.
 *
 *   ```javascript
 *   // Before v2.0.0
 *
 *   distanceInWords(
 *     new Date(1986, 3, 4, 10, 32, 0),
 *     new Date(1986, 3, 4, 11, 32, 0),
 *     { addSuffix: true }
 *   ) //=> 'in about 1 hour'
 *
 *   // v2.0.0 onward
 *
 *   formatDistance(
 *     new Date(1986, 3, 4, 11, 32, 0),
 *     new Date(1986, 3, 4, 10, 32, 0),
 *     { addSuffix: true }
 *   ) //=> 'in about 1 hour'
 *   ```
 *
 * @param {Date|Number} date - the date
 * @param {Date|Number} baseDate - the date to compare with
 * @param {Object} [options] - an object with options.
 * @param {Boolean} [options.includeSeconds=false] - distances less than a minute are more detailed
 * @param {Boolean} [options.addSuffix=false] - result indicates if the second date is earlier or later than the first
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @returns {String} the distance in words
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `baseDate` must not be Invalid Date
 * @throws {RangeError} `options.locale` must contain `formatDistance` property
 *
 * @example
 * // What is the distance between 2 July 2014 and 1 January 2015?
 * const result = formatDistance(new Date(2014, 6, 2), new Date(2015, 0, 1))
 * //=> '6 months'
 *
 * @example
 * // What is the distance between 1 January 2015 00:00:15
 * // and 1 January 2015 00:00:00, including seconds?
 * const result = formatDistance(
 *   new Date(2015, 0, 1, 0, 0, 15),
 *   new Date(2015, 0, 1, 0, 0, 0),
 *   { includeSeconds: true }
 * )
 * //=> 'less than 20 seconds'
 *
 * @example
 * // What is the distance from 1 January 2016
 * // to 1 January 2015, with a suffix?
 * const result = formatDistance(new Date(2015, 0, 1), new Date(2016, 0, 1), {
 *   addSuffix: true
 * })
 * //=> 'about 1 year ago'
 *
 * @example
 * // What is the distance between 1 August 2016 and 1 January 2015 in Esperanto?
 * import { eoLocale } from 'date-fns/locale/eo'
 * const result = formatDistance(new Date(2016, 7, 1), new Date(2015, 0, 1), {
 *   locale: eoLocale
 * })
 * //=> 'pli ol 1 jaro'
 */

function formatDistance(dirtyDate, dirtyBaseDate) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var locale = options.locale || _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_1__["default"];

  if (!locale.formatDistance) {
    throw new RangeError('locale must contain formatDistance property');
  }

  var comparison = (0,_compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate, dirtyBaseDate);

  if (isNaN(comparison)) {
    throw new RangeError('Invalid time value');
  }

  var localizeOptions = (0,_lib_cloneObject_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(options);
  localizeOptions.addSuffix = Boolean(options.addSuffix);
  localizeOptions.comparison = comparison;
  var dateLeft;
  var dateRight;

  if (comparison > 0) {
    dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(dirtyBaseDate);
    dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(dirtyDate);
  } else {
    dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(dirtyDate);
    dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(dirtyBaseDate);
  }

  var seconds = (0,_differenceInSeconds_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(dateRight, dateLeft);
  var offsetInSeconds = ((0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(dateRight) - (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(dateLeft)) / 1000;
  var minutes = Math.round((seconds - offsetInSeconds) / 60);
  var months; // 0 up to 2 mins

  if (minutes < 2) {
    if (options.includeSeconds) {
      if (seconds < 5) {
        return locale.formatDistance('lessThanXSeconds', 5, localizeOptions);
      } else if (seconds < 10) {
        return locale.formatDistance('lessThanXSeconds', 10, localizeOptions);
      } else if (seconds < 20) {
        return locale.formatDistance('lessThanXSeconds', 20, localizeOptions);
      } else if (seconds < 40) {
        return locale.formatDistance('halfAMinute', null, localizeOptions);
      } else if (seconds < 60) {
        return locale.formatDistance('lessThanXMinutes', 1, localizeOptions);
      } else {
        return locale.formatDistance('xMinutes', 1, localizeOptions);
      }
    } else {
      if (minutes === 0) {
        return locale.formatDistance('lessThanXMinutes', 1, localizeOptions);
      } else {
        return locale.formatDistance('xMinutes', minutes, localizeOptions);
      }
    } // 2 mins up to 0.75 hrs

  } else if (minutes < 45) {
    return locale.formatDistance('xMinutes', minutes, localizeOptions); // 0.75 hrs up to 1.5 hrs
  } else if (minutes < 90) {
    return locale.formatDistance('aboutXHours', 1, localizeOptions); // 1.5 hrs up to 24 hrs
  } else if (minutes < MINUTES_IN_DAY) {
    var hours = Math.round(minutes / 60);
    return locale.formatDistance('aboutXHours', hours, localizeOptions); // 1 day up to 1.75 days
  } else if (minutes < MINUTES_IN_ALMOST_TWO_DAYS) {
    return locale.formatDistance('xDays', 1, localizeOptions); // 1.75 days up to 30 days
  } else if (minutes < MINUTES_IN_MONTH) {
    var days = Math.round(minutes / MINUTES_IN_DAY);
    return locale.formatDistance('xDays', days, localizeOptions); // 1 month up to 2 months
  } else if (minutes < MINUTES_IN_TWO_MONTHS) {
    months = Math.round(minutes / MINUTES_IN_MONTH);
    return locale.formatDistance('aboutXMonths', months, localizeOptions);
  }

  months = (0,_differenceInMonths_index_js__WEBPACK_IMPORTED_MODULE_7__["default"])(dateRight, dateLeft); // 2 months up to 12 months

  if (months < 12) {
    var nearestMonth = Math.round(minutes / MINUTES_IN_MONTH);
    return locale.formatDistance('xMonths', nearestMonth, localizeOptions); // 1 year up to max Date
  } else {
    var monthsSinceStartOfYear = months % 12;
    var years = Math.floor(months / 12); // N years up to 1 years 3 months

    if (monthsSinceStartOfYear < 3) {
      return locale.formatDistance('aboutXYears', years, localizeOptions); // N years 3 months up to N years 9 months
    } else if (monthsSinceStartOfYear < 9) {
      return locale.formatDistance('overXYears', years, localizeOptions); // N years 9 months up to N year 12 months
    } else {
      return locale.formatDistance('almostXYears', years + 1, localizeOptions);
    }
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isLastDayOfMonth/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/esm/isLastDayOfMonth/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isLastDayOfMonth)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _endOfDay_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../endOfDay/index.js */ "./node_modules/date-fns/esm/endOfDay/index.js");
/* harmony import */ var _endOfMonth_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../endOfMonth/index.js */ "./node_modules/date-fns/esm/endOfMonth/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




/**
 * @name isLastDayOfMonth
 * @category Month Helpers
 * @summary Is the given date the last day of a month?
 *
 * @description
 * Is the given date the last day of a month?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is the last day of a month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Is 28 February 2014 the last day of a month?
 * var result = isLastDayOfMonth(new Date(2014, 1, 28))
 * //=> true
 */

function isLastDayOfMonth(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  return (0,_endOfDay_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date).getTime() === (0,_endOfMonth_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date).getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildFormatLongFn)
/* harmony export */ });
function buildFormatLongFn(args) {
  return function () {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    // TODO: Remove String()
    var width = options.width ? String(options.width) : args.defaultWidth;
    var format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildLocalizeFn)
/* harmony export */ });
function buildLocalizeFn(args) {
  return function (dirtyIndex, dirtyOptions) {
    var options = dirtyOptions || {};
    var context = options.context ? String(options.context) : 'standalone';
    var valuesArray;

    if (context === 'formatting' && args.formattingValues) {
      var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      var width = options.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      var _defaultWidth = args.defaultWidth;

      var _width = options.width ? String(options.width) : args.defaultWidth;

      valuesArray = args.values[_width] || args.values[_defaultWidth];
    }

    var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex; // @ts-ignore: For some reason TypeScript just don't want to match it, no matter how hard we try. I challange you to try to remove it!

    return valuesArray[index];
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchFn)
/* harmony export */ });
function buildMatchFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var width = options.width;
    var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    var matchResult = string.match(matchPattern);

    if (!matchResult) {
      return null;
    }

    var matchedString = matchResult[0];
    var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    var key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    }) : findKey(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    });
    var value;
    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

function findKey(object, predicate) {
  for (var key in object) {
    if (object.hasOwnProperty(key) && predicate(object[key])) {
      return key;
    }
  }

  return undefined;
}

function findIndex(array, predicate) {
  for (var key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }

  return undefined;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchPatternFn)
/* harmony export */ });
function buildMatchPatternFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var matchResult = string.match(args.matchPattern);
    if (!matchResult) return null;
    var matchedString = matchResult[0];
    var parseResult = string.match(args.parsePattern);
    if (!parseResult) return null;
    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'less than a second',
    other: 'less than {{count}} seconds'
  },
  xSeconds: {
    one: '1 second',
    other: '{{count}} seconds'
  },
  halfAMinute: 'half a minute',
  lessThanXMinutes: {
    one: 'less than a minute',
    other: 'less than {{count}} minutes'
  },
  xMinutes: {
    one: '1 minute',
    other: '{{count}} minutes'
  },
  aboutXHours: {
    one: 'about 1 hour',
    other: 'about {{count}} hours'
  },
  xHours: {
    one: '1 hour',
    other: '{{count}} hours'
  },
  xDays: {
    one: '1 day',
    other: '{{count}} days'
  },
  aboutXWeeks: {
    one: 'about 1 week',
    other: 'about {{count}} weeks'
  },
  xWeeks: {
    one: '1 week',
    other: '{{count}} weeks'
  },
  aboutXMonths: {
    one: 'about 1 month',
    other: 'about {{count}} months'
  },
  xMonths: {
    one: '1 month',
    other: '{{count}} months'
  },
  aboutXYears: {
    one: 'about 1 year',
    other: 'about {{count}} years'
  },
  xYears: {
    one: '1 year',
    other: '{{count}} years'
  },
  overXYears: {
    one: 'over 1 year',
    other: 'over {{count}} years'
  },
  almostXYears: {
    one: 'almost 1 year',
    other: 'almost {{count}} years'
  }
};

var formatDistance = function (token, count, options) {
  var result;
  var tokenValue = formatDistanceLocale[token];

  if (typeof tokenValue === 'string') {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace('{{count}}', count.toString());
  }

  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return 'in ' + result;
    } else {
      return result + ' ago';
    }
  }

  return result;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatDistance);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildFormatLongFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js");

var dateFormats = {
  full: 'EEEE, MMMM do, y',
  long: 'MMMM do, y',
  medium: 'MMM d, y',
  short: 'MM/dd/yyyy'
};
var timeFormats = {
  full: 'h:mm:ss a zzzz',
  long: 'h:mm:ss a z',
  medium: 'h:mm:ss a',
  short: 'h:mm a'
};
var dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: '{{date}}, {{time}}',
  short: '{{date}}, {{time}}'
};
var formatLong = {
  date: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateFormats,
    defaultWidth: 'full'
  }),
  time: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: timeFormats,
    defaultWidth: 'full'
  }),
  dateTime: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateTimeFormats,
    defaultWidth: 'full'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatLong);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: 'P'
};

var formatRelative = function (token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatRelative);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildLocalizeFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js");

var eraValues = {
  narrow: ['B', 'A'],
  abbreviated: ['BC', 'AD'],
  wide: ['Before Christ', 'Anno Domini']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter']
}; // Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.

var monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  wide: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
};
var dayValues = {
  narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
};
var dayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  }
};

var ordinalNumber = function (dirtyNumber, _options) {
  var number = Number(dirtyNumber); // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`.
  //
  // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'.

  var rem100 = number % 100;

  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + 'st';

      case 2:
        return number + 'nd';

      case 3:
        return number + 'rd';
    }
  }

  return number + 'th';
};

var localize = {
  ordinalNumber: ordinalNumber,
  era: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: eraValues,
    defaultWidth: 'wide'
  }),
  quarter: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function (quarter) {
      return quarter - 1;
    }
  }),
  month: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: monthValues,
    defaultWidth: 'wide'
  }),
  day: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayValues,
    defaultWidth: 'wide'
  }),
  dayPeriod: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (localize);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/buildMatchFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js");
/* harmony import */ var _lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildMatchPatternFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js");


var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
var match = {
  ordinalNumber: (0,_lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function (value) {
      return parseInt(value, 10);
    }
  }),
  era: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any'
  }),
  quarter: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: function (index) {
      return index + 1;
    }
  }),
  month: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'any'
  }),
  day: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'any'
  }),
  dayPeriod: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (match);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/formatDistance/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js");
/* harmony import */ var _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/formatLong/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js");
/* harmony import */ var _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_lib/formatRelative/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js");
/* harmony import */ var _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_lib/localize/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js");
/* harmony import */ var _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_lib/match/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js");






/**
 * @type {Locale}
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp]{@link https://github.com/kossnocorp}
 * @author Lesha Koss [@leshakoss]{@link https://github.com/leshakoss}
 */
var locale = {
  code: 'en-US',
  formatDistance: _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  formatLong: _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  formatRelative: _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  localize: _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  match: _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  options: {
    weekStartsOn: 0
    /* Sunday */
    ,
    firstWeekContainsDate: 1
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (locale);

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

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

/***/ "./src/assets/icons/more.svg":
/*!***********************************!*\
  !*** ./src/assets/icons/more.svg ***!
  \***********************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12 3C10.9 3 10 3.9 10 5C10 6.1 10.9 7 12 7C13.1 7 14 6.1 14 5C14 3.9 13.1 3 12 3ZM12 17C10.9 17 10 17.9 10 19C10 20.1 10.9 21 12 21C13.1 21 14 20.1 14 19C14 17.9 13.1 17 12 17ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z\" fill=\"#09121F\"></path></svg>"

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

/***/ "./src/assets/icons/tasks/done.svg":
/*!*****************************************!*\
  !*** ./src/assets/icons/tasks/done.svg ***!
  \*****************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 36 36\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"18\" cy=\"18\" r=\"18\" fill=\"#C4C4C4\"></circle><path d=\"M15.3333 22.2293L27.5893 9.972L29.476 11.8573L15.3333 26L6.84799 17.5147L8.73333 15.6293L15.3333 22.2293Z\" fill=\"white\"></path></svg>"

/***/ }),

/***/ "./src/assets/icons/tasks/high.svg":
/*!*****************************************!*\
  !*** ./src/assets/icons/tasks/high.svg ***!
  \*****************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 36 36\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"18\" cy=\"18\" r=\"18\" fill=\"#FF6B6B\"></circle><circle cx=\"18\" cy=\"18\" r=\"15\" fill=\"#FFE3E3\"></circle></svg>"

/***/ }),

/***/ "./src/assets/icons/tasks/medium.svg":
/*!*******************************************!*\
  !*** ./src/assets/icons/tasks/medium.svg ***!
  \*******************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 36 36\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"18\" cy=\"18\" r=\"18\" fill=\"#FCC419\"></circle><circle cx=\"18\" cy=\"18\" r=\"15\" fill=\"#FFEC99\"></circle></svg>"

/***/ }),

/***/ "./src/assets/icons/tasks/none.svg":
/*!*****************************************!*\
  !*** ./src/assets/icons/tasks/none.svg ***!
  \*****************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 36 36\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36ZM18 33C26.2843 33 33 26.2843 33 18C33 9.71573 26.2843 3 18 3C9.71573 3 3 9.71573 3 18C3 26.2843 9.71573 33 18 33Z\" fill=\"#CED4DA\"></path></svg>"

/***/ }),

/***/ "./src/assets/icons/tasks/small.svg":
/*!******************************************!*\
  !*** ./src/assets/icons/tasks/small.svg ***!
  \******************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 36 36\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"18\" cy=\"18\" r=\"18\" fill=\"#94D82D\"></circle><circle cx=\"18\" cy=\"18\" r=\"15\" fill=\"#E9FAC8\"></circle></svg>"

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
      element.classList.add('hidden')
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
/* harmony import */ var _task_TasksView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task/TasksView */ "./src/js/components/task/TasksView.js");
/* harmony import */ var _menu_option_MenuOptions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu/option/MenuOptions */ "./src/js/components/menu/option/MenuOptions.js");




const Main = (() => {
  const main = document.createElement('div')
  main.className = 'main'

  main.appendChild(_menu_Menu__WEBPACK_IMPORTED_MODULE_0__["default"].element)
  main.appendChild(_task_TasksView__WEBPACK_IMPORTED_MODULE_1__["default"].element)
  _menu_option_MenuOptions__WEBPACK_IMPORTED_MODULE_2__["default"].menuOptions[0].element.click()

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
/* harmony import */ var _task_NewTaskForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task/NewTaskForm */ "./src/js/components/task/NewTaskForm.js");





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

  const addIcon = (0,_icons_AddIcon__WEBPACK_IMPORTED_MODULE_1__["default"])('header__icon header__icon--add')
  addIcon.addEventListener('click', () => _task_NewTaskForm__WEBPACK_IMPORTED_MODULE_3__["default"].updateForm(null))

  navBar.appendChild(menuIcon)
  navBar.appendChild(title)
  navBar.appendChild(addIcon)
  header.appendChild(navBar)

  return header
})()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);


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

/***/ "./src/js/components/icons/MoreIcon.js":
/*!*********************************************!*\
  !*** ./src/js/components/icons/MoreIcon.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Icon */ "./src/js/components/icons/Icon.js");
/* harmony import */ var _assets_icons_more_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/icons/more.svg */ "./src/assets/icons/more.svg");
/* harmony import */ var _assets_icons_more_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_more_svg__WEBPACK_IMPORTED_MODULE_1__);



const MoreIcon = (classes) => (0,_Icon__WEBPACK_IMPORTED_MODULE_0__["default"])((_assets_icons_more_svg__WEBPACK_IMPORTED_MODULE_1___default()), classes)
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MoreIcon);


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

/***/ "./src/js/components/icons/TaskStatusIcon.js":
/*!***************************************************!*\
  !*** ./src/js/components/icons/TaskStatusIcon.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Icon */ "./src/js/components/icons/Icon.js");
/* harmony import */ var _assets_icons_tasks_done_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/icons/tasks/done.svg */ "./src/assets/icons/tasks/done.svg");
/* harmony import */ var _assets_icons_tasks_done_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_tasks_done_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_icons_tasks_none_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/icons/tasks/none.svg */ "./src/assets/icons/tasks/none.svg");
/* harmony import */ var _assets_icons_tasks_none_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_tasks_none_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_icons_tasks_small_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/icons/tasks/small.svg */ "./src/assets/icons/tasks/small.svg");
/* harmony import */ var _assets_icons_tasks_small_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_tasks_small_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_icons_tasks_medium_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../assets/icons/tasks/medium.svg */ "./src/assets/icons/tasks/medium.svg");
/* harmony import */ var _assets_icons_tasks_medium_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_tasks_medium_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_icons_tasks_high_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../assets/icons/tasks/high.svg */ "./src/assets/icons/tasks/high.svg");
/* harmony import */ var _assets_icons_tasks_high_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_tasks_high_svg__WEBPACK_IMPORTED_MODULE_5__);







const icons = {
  done: (_assets_icons_tasks_done_svg__WEBPACK_IMPORTED_MODULE_1___default()),
  none: (_assets_icons_tasks_none_svg__WEBPACK_IMPORTED_MODULE_2___default()),
  low: (_assets_icons_tasks_small_svg__WEBPACK_IMPORTED_MODULE_3___default()),
  medium: (_assets_icons_tasks_medium_svg__WEBPACK_IMPORTED_MODULE_4___default()),
  high: (_assets_icons_tasks_high_svg__WEBPACK_IMPORTED_MODULE_5___default()),
}

const TaskStatusIcon = (type, classes) => (0,_Icon__WEBPACK_IMPORTED_MODULE_0__["default"])(icons[type], classes)

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TaskStatusIcon);


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

/***/ "./src/js/components/menu/CurrentMenuOption.js":
/*!*****************************************************!*\
  !*** ./src/js/components/menu/CurrentMenuOption.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const CurrentMenuOption = (() => {
  let element = null

  const getElement = () => element
  const setElement = (newElement) => (element = newElement)

  return { getElement, setElement }
})()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CurrentMenuOption);


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
/* harmony import */ var _data_tasks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data/tasks */ "./src/js/data/tasks.js");
/* harmony import */ var _CurrentMenuOption__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CurrentMenuOption */ "./src/js/components/menu/CurrentMenuOption.js");







const Menu = (() => {
  const element = document.createElement('aside')
  element.className = 'menu'

  element.appendChild(_option_MenuOptions__WEBPACK_IMPORTED_MODULE_0__["default"].element)
  element.appendChild((0,_Divider__WEBPACK_IMPORTED_MODULE_2__["default"])())
  element.appendChild(_tag_MenuTags__WEBPACK_IMPORTED_MODULE_1__["default"].element)
  element.appendChild((0,_Divider__WEBPACK_IMPORTED_MODULE_2__["default"])())
  element.appendChild(_priority_MenuPriorities__WEBPACK_IMPORTED_MODULE_3__["default"].element)

  const cleanActives = () => {
    _tag_MenuTags__WEBPACK_IMPORTED_MODULE_1__["default"].cleanActives()
    for (let option of _option_MenuOptions__WEBPACK_IMPORTED_MODULE_0__["default"].menuOptions) {
      option.removeActiveClass()
    }

    for (let priority of _priority_MenuPriorities__WEBPACK_IMPORTED_MODULE_3__["default"].priorityElements) {
      priority.removeActiveClass()
    }
  }

  const updateTasks = () => {
    const tasks = _data_tasks__WEBPACK_IMPORTED_MODULE_4__["default"].getSortedTasks()

    _option_MenuOptions__WEBPACK_IMPORTED_MODULE_0__["default"].updateTasks(tasks)
    _tag_MenuTags__WEBPACK_IMPORTED_MODULE_1__["default"].updateTasks(tasks)
    _priority_MenuPriorities__WEBPACK_IMPORTED_MODULE_3__["default"].updateTasks(tasks)

    const currentMenuOption = _CurrentMenuOption__WEBPACK_IMPORTED_MODULE_5__["default"].getElement()
    if (currentMenuOption) currentMenuOption.click()
  }

  const toggleHide = () => {
    element.classList.toggle('hidden')
  }

  return { element, toggleHide, cleanActives, updateTasks }
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
/* harmony import */ var _task_TasksView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../task/TasksView */ "./src/js/components/task/TasksView.js");
/* harmony import */ var _CurrentMenuOption__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../CurrentMenuOption */ "./src/js/components/menu/CurrentMenuOption.js");



const MenuOption = (icon, title, tasks) => {
  let sortedTasks = tasks

  const element = document.createElement('div')
  element.className = 'menu__option'

  const titleElement = document.createElement('h3')
  titleElement.className = 'menu__option__title'
  titleElement.textContent = title

  const addActiveClass = () => {
    element.classList.add('menu__option--active')
  }

  const removeActiveClass = () => {
    element.classList.remove('menu__option--active')
  }

  element.appendChild(icon)
  element.appendChild(titleElement)

  const addClickEvent = (clickEvent) => {
    element.addEventListener('click', (e) => {
      e.preventDefault()

      clickEvent()
      _task_TasksView__WEBPACK_IMPORTED_MODULE_0__["default"].generateTasks(title, -1, sortedTasks)
      _CurrentMenuOption__WEBPACK_IMPORTED_MODULE_1__["default"].setElement(element)
    })
  }

  const updateTasks = (updatedTasks) => (sortedTasks = updatedTasks)

  return {
    element,
    addActiveClass,
    removeActiveClass,
    addClickEvent,
    updateTasks,
  }
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
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Menu */ "./src/js/components/menu/Menu.js");
/* harmony import */ var _data_tasks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../data/tasks */ "./src/js/data/tasks.js");







const MenuOptions = (() => {
  const iconClass = 'menu__option__icon'
  const element = document.createElement('div')

  const filterFunctions = [
    (updatedTasks) =>
      updatedTasks.filter(
        (task) => task.tagId < 0 && task.priorityId < 0 && task.dueDate == null
      ),
    (updatedTasks) =>
      updatedTasks.filter((task) => {
        const currentDate = new Date()
        currentDate.setHours(0, 0, 0, 0)
        return task.dueDate && task.dueDate.getDate() <= currentDate.getDate()
      }),
    (updatedTasks) =>
      updatedTasks.filter((task) => {
        let date = new Date()
        date.setDate(date.getDate() + 7)
        date.setHours(0, 0, 0, 0)

        return task.dueDate && task.dueDate.getDate() <= date.getDate()
      }),
  ]

  let tasks = _data_tasks__WEBPACK_IMPORTED_MODULE_5__["default"].getSortedTasks()
  const menuOptions = [
    (0,_MenuOption__WEBPACK_IMPORTED_MODULE_3__["default"])((0,_icons_InboxIcon__WEBPACK_IMPORTED_MODULE_0__["default"])(iconClass), 'Inbox', filterFunctions[0](tasks)),
    (0,_MenuOption__WEBPACK_IMPORTED_MODULE_3__["default"])((0,_icons_TodayIcon__WEBPACK_IMPORTED_MODULE_1__["default"])(iconClass), 'Today', filterFunctions[1](tasks)),
    (0,_MenuOption__WEBPACK_IMPORTED_MODULE_3__["default"])(
      (0,_icons_NextDaysIcon__WEBPACK_IMPORTED_MODULE_2__["default"])(iconClass),
      'Next 7 days',
      filterFunctions[2](tasks)
    ),
  ]
  element.className = 'menu__options'

  menuOptions.forEach((menuOption) => {
    menuOption.addClickEvent(() => {
      _Menu__WEBPACK_IMPORTED_MODULE_4__["default"].cleanActives()
      menuOption.addActiveClass()
    })
    element.appendChild(menuOption.element)
  })

  const updateTasks = (updatedTasks) => {
    tasks = updatedTasks

    for (let i = 0; i < menuOptions.length; i++) {
      menuOptions[i].updateTasks(filterFunctions[i](tasks))
    }
  }

  return { element, menuOptions, updateTasks }
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
/* harmony import */ var _contentGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../contentGenerator */ "./src/js/contentGenerator.js");
/* harmony import */ var _data_tasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../data/tasks */ "./src/js/data/tasks.js");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Menu */ "./src/js/components/menu/Menu.js");
/* harmony import */ var _MenuTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../MenuTitle */ "./src/js/components/menu/MenuTitle.js");
/* harmony import */ var _MenuPriority__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MenuPriority */ "./src/js/components/menu/priority/MenuPriority.js");






const MenuPriorities = (() => {
  const priorities = [
    { id: 0, color: '#94D82D', title: 'Low' },
    { id: 1, color: '#FCC419', title: 'Medium' },
    { id: 2, color: '#FF6B6B', title: 'High' },
  ]
  const priorityElements = []

  const element = document.createElement('div')
  element.className = 'menu__priorities-container'

  const filter = (tasks, priority) =>
    tasks.filter((task) => task.priorityId == priority.id)

  const generatePriorities = () => {
    const prioritiesContainer = document.createElement('div')
    prioritiesContainer.className = 'menu__priorities'

    for (let priority of priorities) {
      const priorityElement = (0,_MenuPriority__WEBPACK_IMPORTED_MODULE_4__["default"])(
        priority,
        () => {
          _Menu__WEBPACK_IMPORTED_MODULE_2__["default"].cleanActives()
          priorityElement.addActiveClass()
        },
        filter(_data_tasks__WEBPACK_IMPORTED_MODULE_1__["default"].getSortedTasks(), priority)
      )

      priorityElements.push(priorityElement)
      prioritiesContainer.appendChild(priorityElement.element)
    }

    (0,_contentGenerator__WEBPACK_IMPORTED_MODULE_0__.cleanContent)(element)
    element.appendChild((0,_MenuTitle__WEBPACK_IMPORTED_MODULE_3__["default"])('Priorities'))
    element.appendChild(prioritiesContainer)
  }
  generatePriorities(priorities)

  const getPriorityById = (id) =>
    priorities.find((priority) => priority.id == id)

  const clearActives = () => {
    priorityElements.forEach((priorityElement) =>
      priorityElement.removeActiveClass()
    )
  }

  const updateTasks = (updatedTasks) => {
    for (let i = 0; i < priorities.length; i++) {
      priorityElements[i].updateTasks(filter(updatedTasks, priorities[i]))
    }
  }

  return {
    element,
    clearActives,
    getPriorityById,
    priorityElements,
    updateTasks,
  }
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
/* harmony import */ var _task_TasksView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../task/TasksView */ "./src/js/components/task/TasksView.js");
/* harmony import */ var _CurrentMenuOption__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../CurrentMenuOption */ "./src/js/components/menu/CurrentMenuOption.js");



const MenuPriority = ({ id, color, title }, clickEvent, tasks) => {
  let sortedTasks = tasks
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
  element.addEventListener('click', (e) => {
    e.preventDefault()

    clickEvent()
    _task_TasksView__WEBPACK_IMPORTED_MODULE_0__["default"].generateTasks(title, -1, sortedTasks)
    _CurrentMenuOption__WEBPACK_IMPORTED_MODULE_1__["default"].setElement(element)
  })

  const addActiveClass = () => {
    element.classList.add('menu__priority--active')
  }

  const removeActiveClass = () => {
    element.classList.remove('menu__priority--active')
  }

  const updateTasks = (updatedTasks) => (sortedTasks = updatedTasks)

  return { element, addActiveClass, removeActiveClass, updateTasks }
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
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Menu */ "./src/js/components/menu/Menu.js");
/* harmony import */ var _icons_MoreIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../icons/MoreIcon */ "./src/js/components/icons/MoreIcon.js");
/* harmony import */ var _task_TasksView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../task/TasksView */ "./src/js/components/task/TasksView.js");
/* harmony import */ var _tag_TagContextMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../tag/TagContextMenu */ "./src/js/components/tag/TagContextMenu.js");
/* harmony import */ var _CurrentMenuOption__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../CurrentMenuOption */ "./src/js/components/menu/CurrentMenuOption.js");






const MenuTag = ({ id, color, title }, tasks) => {
  let sortedTasks = tasks

  const element = document.createElement('div')
  element.setAttribute('data-id', id)
  element.className = 'menu__tag'

  const colorSymbol = document.createElement('div')
  colorSymbol.className = 'menu__color-symbol'
  colorSymbol.style.backgroundColor = color

  const titleElement = document.createElement('h4')
  titleElement.className = 'menu__tag__title'
  titleElement.textContent = title

  const moreIcon = (0,_icons_MoreIcon__WEBPACK_IMPORTED_MODULE_1__["default"])('menu__tag__icon menu__tag__icon--more')

  element.appendChild(colorSymbol)
  element.appendChild(titleElement)
  element.appendChild(moreIcon)

  element.addEventListener('click', (e) => {
    e.preventDefault()

    if (e.target == moreIcon || moreIcon.contains(e.target)) {
      _tag_TagContextMenu__WEBPACK_IMPORTED_MODULE_3__["default"].generateMenu(id, e.x, e.y)
    } else {
      _task_TasksView__WEBPACK_IMPORTED_MODULE_2__["default"].generateTasks(title, id, sortedTasks)
      _CurrentMenuOption__WEBPACK_IMPORTED_MODULE_4__["default"].setElement(element)
      _Menu__WEBPACK_IMPORTED_MODULE_0__["default"].cleanActives()
      addActiveClass()
    }
  })

  const addActiveClass = () => {
    element.classList.add('menu__tag--active')
  }

  const removeActiveClass = () => {
    element.classList.remove('menu__tag--active')
  }

  const updateTasks = (updatedTasks) => (sortedTasks = updatedTasks)

  return { element, addActiveClass, removeActiveClass, updateTasks }
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
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Menu */ "./src/js/components/menu/Menu.js");
/* harmony import */ var _data_tasks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../data/tasks */ "./src/js/data/tasks.js");
/* harmony import */ var _data_tags__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../data/tags */ "./src/js/data/tags.js");
/* harmony import */ var _task_NewTaskForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../task/NewTaskForm */ "./src/js/components/task/NewTaskForm.js");
/* harmony import */ var _contentGenerator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../contentGenerator */ "./src/js/contentGenerator.js");










const MenuTags = (() => {
  let tagElements = []
  const element = document.createElement('div')
  element.className = 'menu__tags-container'

  const filter = (tasks, tag) => tasks.filter((task) => task.tagId == tag.id)

  const generateTags = (tags) => {
    ;(0,_contentGenerator__WEBPACK_IMPORTED_MODULE_8__.cleanContent)(element)
    element.appendChild((0,_MenuTitle__WEBPACK_IMPORTED_MODULE_1__["default"])('Tags'))
    tagElements = []

    if (tags.length > 0) {
      const tagsContainer = document.createElement('div')
      tagsContainer.className = 'menu__tags'

      for (let tag of tags) {
        const tagElement = (0,_MenuTag__WEBPACK_IMPORTED_MODULE_2__["default"])(tag, filter(_data_tasks__WEBPACK_IMPORTED_MODULE_5__["default"].getSortedTasks(), tag))

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
    _task_NewTaskForm__WEBPACK_IMPORTED_MODULE_7__["default"].updateTags(tagElements)

    element.appendChild(
      (0,_NewTagBtn__WEBPACK_IMPORTED_MODULE_3__["default"])((tag) => {
        _data_tags__WEBPACK_IMPORTED_MODULE_6__["default"].addTag({ id: _data_tags__WEBPACK_IMPORTED_MODULE_6__["default"].getLastId() + 1, ...tag })
        generateTags(_data_tags__WEBPACK_IMPORTED_MODULE_6__["default"].getTags())
      })
    )
  }
  generateTags(_data_tags__WEBPACK_IMPORTED_MODULE_6__["default"].getTags())

  const updateTasks = (updatedTasks) => {
    const tags = _data_tags__WEBPACK_IMPORTED_MODULE_6__["default"].getTags()

    if (tags.length > 0) {
      for (let i = 0; i < tags.length; i++) {
        tagElements[i].updateTasks(filter(updatedTasks, tags[i]))
      }
    }
  }

  const cleanActives = () => {
    for (let i = 0; i < tagElements.length; i++) {
      tagElements[i].removeActiveClass()
    }
  }

  return { element, generateTags, tagElements, updateTasks, cleanActives }
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
/* harmony import */ var _contentGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../contentGenerator */ "./src/js/contentGenerator.js");




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

    ;(0,_contentGenerator__WEBPACK_IMPORTED_MODULE_2__.cleanContent)(element)
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
      _ColorPicker__WEBPACK_IMPORTED_MODULE_1__["default"].generate(currentColor, e.x, e.y)
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

      submitEvent({
        color: currentColor.getAttribute('data-color'),
        title: nameInput.value,
      })
    })

    ;(0,_contentGenerator__WEBPACK_IMPORTED_MODULE_2__.cleanContent)(element)
    element.appendChild(form)
  }

  generateButton()
  return element
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewTagBtn);


/***/ }),

/***/ "./src/js/components/tag/TagContextMenu.js":
/*!*************************************************!*\
  !*** ./src/js/components/tag/TagContextMenu.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TagDeletePopup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TagDeletePopup */ "./src/js/components/tag/TagDeletePopup.js");
/* harmony import */ var _TagEditPopup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TagEditPopup */ "./src/js/components/tag/TagEditPopup.js");



const TagContextMenu = (() => {
  let tagId = -1
  const element = document.createElement('div')
  element.className = 'tag-menu hidden'

  const h4 = document.createElement('h4')
  h4.className = 'tag-menu__title'
  h4.textContent = 'Select action:'

  const editBtn = document.createElement('button')
  editBtn.className = 'tag-menu__btn tag-menu__btn--edit'
  editBtn.textContent = 'Edit'
  editBtn.addEventListener('click', () => {
    _TagEditPopup__WEBPACK_IMPORTED_MODULE_1__["default"].generatePopup(tagId)
    hide()
  })

  const deleteBtn = document.createElement('button')
  deleteBtn.className = 'tag-menu__btn tag-menu__btn--delete'
  deleteBtn.textContent = 'Delete'
  deleteBtn.addEventListener('click', () => {
    _TagDeletePopup__WEBPACK_IMPORTED_MODULE_0__["default"].generatePopup(tagId)
    hide()
  })

  const generateMenu = (id, x, y) => {
    tagId = id
    element.classList.remove('hidden')
    element.style.top = `${y}px`
    element.style.left = `${x - element.clientWidth}px`
  }

  const hide = () => element.classList.add('hidden')

  element.appendChild(h4)
  element.appendChild(editBtn)
  element.appendChild(deleteBtn)

  document.addEventListener('mousedown', (e) => {
    if (e.target != element && !element.contains(e.target)) hide()
  })

  return { element, generateMenu }
})()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TagContextMenu);


/***/ }),

/***/ "./src/js/components/tag/TagDeletePopup.js":
/*!*************************************************!*\
  !*** ./src/js/components/tag/TagDeletePopup.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _data_tags__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data/tags */ "./src/js/data/tags.js");
/* harmony import */ var _data_tasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data/tasks */ "./src/js/data/tasks.js");
/* harmony import */ var _menu_option_MenuOptions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../menu/option/MenuOptions */ "./src/js/components/menu/option/MenuOptions.js");
/* harmony import */ var _menu_tag_MenuTags__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../menu/tag/MenuTags */ "./src/js/components/menu/tag/MenuTags.js");





const TagDeletePopup = (() => {
  let tagId = -1
  const element = document.createElement('div')
  element.className = 'tag-popup tag-popup--delete hidden'

  const popup = document.createElement('div')
  popup.className = 'tag-popup__popup'

  const h3 = document.createElement('h3')
  h3.className = 'tag-popup__title'
  h3.textContent = 'Delete tag:'

  const desc = document.createElement('p')
  desc.className = 'tag-popup__desc'
  desc.textContent =
    'Are you sure you want to delete the tag and all the tasks with the tag?'

  const btns = document.createElement('div')
  btns.className = 'tag-popup__btns'

  const deleteBtn = document.createElement('button')
  deleteBtn.className = 'tag-popup__btn tag-popup__btn--delete'
  deleteBtn.textContent = 'Delete'
  deleteBtn.addEventListener('click', () => {
    if (tagId > -1) {
      _data_tags__WEBPACK_IMPORTED_MODULE_0__["default"].removeTag(tagId)

      const tasks = _data_tasks__WEBPACK_IMPORTED_MODULE_1__["default"].getTasks()
      const tasksToDelete = []
      for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].tagId == tagId) {
          tasksToDelete.push(tasks[i])
        }
      }
      for (let task of tasksToDelete) {
        _data_tasks__WEBPACK_IMPORTED_MODULE_1__["default"].removeTask(task.id)
      }
      _menu_tag_MenuTags__WEBPACK_IMPORTED_MODULE_3__["default"].generateTags(_data_tags__WEBPACK_IMPORTED_MODULE_0__["default"].getTags())
      _menu_option_MenuOptions__WEBPACK_IMPORTED_MODULE_2__["default"].menuOptions[0].element.click()
    }
    hide()
  })

  const cancelBtn = document.createElement('button')
  cancelBtn.className = 'tag-popup__btn tag-popup__btn--cancel'
  cancelBtn.textContent = 'Cancel'
  cancelBtn.addEventListener('click', () => hide())

  btns.appendChild(deleteBtn)
  btns.appendChild(cancelBtn)

  popup.appendChild(h3)
  popup.appendChild(desc)
  popup.appendChild(btns)

  element.appendChild(popup)

  const hide = () => element.classList.add('hidden')
  const generatePopup = (id) => {
    tagId = id
    element.classList.remove('hidden')
  }

  return { element, generatePopup }
})()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TagDeletePopup);


/***/ }),

/***/ "./src/js/components/tag/TagEditPopup.js":
/*!***********************************************!*\
  !*** ./src/js/components/tag/TagEditPopup.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _data_tags__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data/tags */ "./src/js/data/tags.js");
/* harmony import */ var _ColorPicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ColorPicker */ "./src/js/components/ColorPicker.js");
/* harmony import */ var _menu_Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../menu/Menu */ "./src/js/components/menu/Menu.js");




const TagEditPopup = (() => {
  let tag = null
  const element = document.createElement('div')
  element.className = 'tag-popup tag-popup--edit hidden'

  const popup = document.createElement('div')
  popup.className = 'tag-popup__popup'

  const h3 = document.createElement('h3')
  h3.className = 'tag-popup__title'
  h3.textContent = 'Edit task:'

  const form = document.createElement('form')
  form.className = 'tag-popup__form'

  const inputs = document.createElement('div')
  inputs.className = 'tag-popup__inputs'

  const colorPicker = document.createElement('button')
  colorPicker.type = 'button'
  colorPicker.className = 'tag-popup__picker'

  const currentColor = document.createElement('div')
  currentColor.className = 'tag-popup__picker__current'
  currentColor.style.backgroundColor = '#ff6b6b'
  currentColor.setAttribute('data-color', '#ff6b6b')

  colorPicker.appendChild(currentColor)
  colorPicker.addEventListener('click', (e) => {
    e.preventDefault()
    _ColorPicker__WEBPACK_IMPORTED_MODULE_1__["default"].generate(currentColor, e.x, e.y)
  })

  const title = document.createElement('input')
  title.className = 'tag-popup__input'
  title.type = 'text'
  title.placeholder = 'Tag title'
  title.required = true

  inputs.appendChild(colorPicker)
  inputs.appendChild(title)

  const btns = document.createElement('div')
  btns.className = 'tag-popup__btns'

  const editBtn = document.createElement('button')
  editBtn.className = 'tag-popup__btn tag-popup__btn--edit'
  editBtn.type = 'submit'
  editBtn.textContent = 'Edit'

  const cancelBtn = document.createElement('button')
  cancelBtn.className = 'tag-popup__btn tag-popup__btn--cancel'
  cancelBtn.type = 'button'
  cancelBtn.textContent = 'Cancel'
  cancelBtn.addEventListener('click', () => hide())

  btns.appendChild(editBtn)
  btns.appendChild(cancelBtn)

  form.appendChild(inputs)
  form.appendChild(btns)

  popup.appendChild(h3)
  popup.appendChild(form)

  element.appendChild(popup)
  element.addEventListener('submit', (e) => {
    e.preventDefault()

    if (tag) {
      tag = {
        ...tag,
        color: currentColor.getAttribute('data-color'),
        title: title.value,
      }
      _data_tags__WEBPACK_IMPORTED_MODULE_0__["default"].updateTag(tag.id, tag)

      const tagDom = document.querySelector(
        `div.menu__tag[data-id="${tag.id}"]`
      )
      tagDom.querySelector('.menu__color-symbol').style.backgroundColor =
        tag.color
      tagDom.querySelector('.menu__tag__title').textContent = tag.title

      _menu_Menu__WEBPACK_IMPORTED_MODULE_2__["default"].updateTasks()
      hide()
    }
  })

  const generatePopup = (tagId) => {
    tag = { ..._data_tags__WEBPACK_IMPORTED_MODULE_0__["default"].getTagById(tagId) }

    if (tag) {
      title.value = tag.title
      currentColor.style.backgroundColor = tag.color
      currentColor.setAttribute('data-color', tag.color)
      element.classList.remove('hidden')
    }
  }

  const hide = () => element.classList.add('hidden')

  return { element, generatePopup }
})()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TagEditPopup);


/***/ }),

/***/ "./src/js/components/task/NewTaskForm.js":
/*!***********************************************!*\
  !*** ./src/js/components/task/NewTaskForm.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _contentGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../contentGenerator */ "./src/js/contentGenerator.js");
/* harmony import */ var _data_tags__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data/tags */ "./src/js/data/tags.js");
/* harmony import */ var _data_tasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data/tasks */ "./src/js/data/tasks.js");
/* harmony import */ var _menu_Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../menu/Menu */ "./src/js/components/menu/Menu.js");





const NewTaskForm = (() => {
  let task = null

  const element = document.createElement('div')
  element.className = 'task-form hidden'

  const show = () => element.classList.remove('hidden')
  const hide = () => element.classList.add('hidden')

  const popup = document.createElement('div')
  popup.className = 'task-form__popup'

  const h2 = document.createElement('h2')
  h2.className = 'task-form__title'

  const form = document.createElement('form')
  form.className = 'task-form__form'

  const formInputs = document.createElement('div')
  formInputs.className = 'task-form__form__inputs'

  const title = document.createElement('input')
  title.classList = 'task-form__form__title'
  title.placeholder = 'Task Title'
  title.required = true
  title.maxLength = 25

  const desc = document.createElement('textarea')
  desc.classList = 'task-form__form__desc'
  desc.placeholder = 'Description (Optional)'
  desc.maxLength = 140

  formInputs.appendChild(title)
  formInputs.appendChild(desc)

  const additionals = document.createElement('div')
  additionals.className = 'task-form__form__options'

  const date = document.createElement('input')
  const currentDate = new Date().toISOString().substring(0, 10)
  date.className = 'task-form__form__date'
  date.type = 'date'
  date.min = currentDate

  const tags = document.createElement('select')
  tags.className = 'task-form__form__select'

  const updateTags = (tagsList) => {
    tags.innerHTML = ''

    for (let tag of [
      { id: -2, title: 'Tag (Optional)' },
      { id: -1, title: 'None' },
      ...tagsList,
    ]) {
      const option = document.createElement('option')
      option.value = tag.id
      option.textContent = tag.title

      if (tag.id === -2) {
        option.disabled = true
        option.selected = true
      }

      tags.appendChild(option)
    }
  }

  const priorities = document.createElement('select')
  priorities.className = 'task-form__form__select'

  const updatePriorities = (prioritiesList) => {
    ;(0,_contentGenerator__WEBPACK_IMPORTED_MODULE_0__.cleanContent)(priorities)

    for (let priority of [
      { id: -2, title: 'Priority (Optional)' },
      { id: -1, title: 'None' },
      ...prioritiesList,
    ]) {
      const option = document.createElement('option')
      option.value = priority.id
      option.textContent = priority.title

      if (priority.id === -2) {
        option.disabled = true
        option.selected = true
      }

      priorities.appendChild(option)
    }
  }

  additionals.appendChild(date)
  additionals.appendChild(tags)
  additionals.appendChild(priorities)

  const btns = document.createElement('div')
  btns.className = 'task-form__form__btns'

  const submitBtn = document.createElement('button')
  submitBtn.className = 'task-form__form__btn task-form__form__btn--submit'
  submitBtn.type = 'submit'

  const cancelBtn = document.createElement('button')
  cancelBtn.className = 'task-form__form__btn task-form__form__btn--cancel'
  cancelBtn.textContent = 'Cancel'
  cancelBtn.type = 'button'
  cancelBtn.addEventListener('click', hide)

  const deleteBtn = document.createElement('button')
  deleteBtn.className = 'task-form__form__btn task-form__form__btn--delete'
  deleteBtn.textContent = 'Delete'
  deleteBtn.type = 'button'
  deleteBtn.addEventListener('click', () => {
    if (task && task.id > -1) {
      _data_tasks__WEBPACK_IMPORTED_MODULE_2__["default"].removeTask(task.id)
      _menu_Menu__WEBPACK_IMPORTED_MODULE_3__["default"].updateTasks()
    }
    hide()
  })

  btns.appendChild(submitBtn)
  btns.appendChild(deleteBtn)
  btns.appendChild(cancelBtn)

  form.appendChild(formInputs)
  form.appendChild(additionals)
  form.appendChild(btns)

  form.addEventListener('submit', (e) => {
    e.preventDefault()

    const taskObj = {
      id: task && task.id > -1 ? task.id + 1 : _data_tasks__WEBPACK_IMPORTED_MODULE_2__["default"].getLastId() + 1,
      title: title.value,
      description: desc.value ? desc.value : null,
      dueDate: date.value ? new Date(date.value) : null,
      priorityId: priorities.value > -1 ? priorities.value : -1,
      tagId: tags.value > -1 ? tags.value : -1,
      done: task ? task.done : false,
    }

    if (task && task.id > -1) {
      const index = _data_tasks__WEBPACK_IMPORTED_MODULE_2__["default"].getTasks().findIndex((t) => t.id == task.id)
      if (index > -1) {
        _data_tasks__WEBPACK_IMPORTED_MODULE_2__["default"].updateTask(index, taskObj)
      }
    } else {
      _data_tasks__WEBPACK_IMPORTED_MODULE_2__["default"].addTask(taskObj)
    }
    _menu_Menu__WEBPACK_IMPORTED_MODULE_3__["default"].updateTasks()
    hide()
  })

  popup.appendChild(h2)
  popup.appendChild(form)
  element.appendChild(popup)

  const updateForm = (taskObj) => {
    task = taskObj

    if (task) {
      h2.textContent = 'Edit task:'
      submitBtn.textContent = 'Edit'
      deleteBtn.classList.remove('hidden')

      title.value = task.title
      desc.value = task.description
      if (task.dueDate) date.value = task.dueDate.toISOString().substring(0, 10)

      priorities.value = task.priorityId
      tags.value = task.tagId
    } else {
      h2.textContent = 'Add new task:'
      submitBtn.textContent = 'Add'
      deleteBtn.classList.add('hidden')

      title.value = ''
      desc.value = ''
      date.value = ''

      priorities.value = -2
      tags.value = -2
    }
    show()
  }

  updateTags(_data_tags__WEBPACK_IMPORTED_MODULE_1__["default"].getTags())
  updatePriorities([
    { id: 0, color: '#94D82D', title: 'Low' },
    { id: 1, color: '#FCC419', title: 'Medium' },
    { id: 2, color: '#FF6B6B', title: 'High' },
  ])

  return { element, updateForm, hide, updateTags }
})()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewTaskForm);


/***/ }),

/***/ "./src/js/components/task/Task.js":
/*!****************************************!*\
  !*** ./src/js/components/task/Task.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _icons_TaskStatusIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../icons/TaskStatusIcon */ "./src/js/components/icons/TaskStatusIcon.js");
/* harmony import */ var _menu_priority_MenuPriorities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../menu/priority/MenuPriorities */ "./src/js/components/menu/priority/MenuPriorities.js");
/* harmony import */ var date_fns_formatDistance__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns/formatDistance */ "./node_modules/date-fns/esm/formatDistance/index.js");
/* harmony import */ var _data_tags__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data/tags */ "./src/js/data/tags.js");
/* harmony import */ var _NewTaskForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NewTaskForm */ "./src/js/components/task/NewTaskForm.js");
/* harmony import */ var _data_tasks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data/tasks */ "./src/js/data/tasks.js");
/* harmony import */ var _menu_Menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../menu/Menu */ "./src/js/components/menu/Menu.js");








const Task = ({ id, title, description, dueDate, priorityId, tagId, done }) => {
  const element = document.createElement('div')
  element.className = done ? 'task task--done' : 'task'

  const getIcon = () =>
    (0,_icons_TaskStatusIcon__WEBPACK_IMPORTED_MODULE_0__["default"])(
      done
        ? 'done'
        : priorityId > -1
        ? _menu_priority_MenuPriorities__WEBPACK_IMPORTED_MODULE_1__["default"].getPriorityById(priorityId).title.toLowerCase()
        : 'none',
      'task__icon'
    )

  let icon = getIcon()

  const info = document.createElement('div')
  info.className = 'task__info'

  const titleDesc = document.createElement('div')
  titleDesc.className = 'task__info__basic'

  const titleElement = document.createElement('h2')
  titleElement.className = 'task__info__title'
  titleElement.textContent = title

  const descElement = document.createElement('p')
  descElement.className = 'task__info__desc'
  descElement.textContent = description

  titleDesc.appendChild(titleElement)
  titleDesc.appendChild(descElement)

  const additional = document.createElement('div')
  additional.className = 'task__info__additional'

  if (tagId > -1) {
    const tag = _data_tags__WEBPACK_IMPORTED_MODULE_2__["default"].getTagById(tagId)
    const tagContainer = document.createElement('div')
    tagContainer.className = 'task__info__tag'

    const tagTitle = document.createElement('h3')
    tagTitle.className = 'task__info__tag__title'
    tagTitle.textContent = tag.title

    const tagColor = document.createElement('div')
    tagColor.className = 'task__info__tag__color'
    tagColor.style.backgroundColor = tag.color

    tagContainer.appendChild(tagTitle)
    tagContainer.appendChild(tagColor)
    additional.appendChild(tagContainer)
  }

  if (dueDate) {
    const date = document.createElement('p')
    const currentDate = new Date()
    currentDate.setHours(0, 0, 0, 0)

    date.className = 'task__info__date'
    date.textContent =
      dueDate.getDate() == currentDate.getDate()
        ? 'Today'
        : (0,date_fns_formatDistance__WEBPACK_IMPORTED_MODULE_6__["default"])(dueDate, currentDate, { addSuffix: true })
    date.style.color = done
      ? ''
      : dueDate >= currentDate
      ? '#66a80f'
      : '#e03131'

    additional.appendChild(date)
  }
  info.appendChild(titleDesc)
  info.appendChild(additional)

  element.appendChild(icon)
  element.appendChild(info)
  element.addEventListener('click', (e) => {
    e.preventDefault()

    if (e.target == icon || icon.contains(e.target)) {
      _data_tasks__WEBPACK_IMPORTED_MODULE_4__["default"].updateTask(id, {
        id,
        title,
        description,
        dueDate,
        priorityId,
        tagId,
        done: !done,
      })
      _menu_Menu__WEBPACK_IMPORTED_MODULE_5__["default"].updateTasks()
    } else {
      const task = _data_tasks__WEBPACK_IMPORTED_MODULE_4__["default"].getTaskById(id)
      if (task) _NewTaskForm__WEBPACK_IMPORTED_MODULE_3__["default"].updateForm(task)
    }
  })

  return element
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);


/***/ }),

/***/ "./src/js/components/task/TasksView.js":
/*!*********************************************!*\
  !*** ./src/js/components/task/TasksView.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _contentGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../contentGenerator */ "./src/js/contentGenerator.js");
/* harmony import */ var _data_tags__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data/tags */ "./src/js/data/tags.js");
/* harmony import */ var _Divider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Divider */ "./src/js/components/Divider.js");
/* harmony import */ var _EmptyMessage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../EmptyMessage */ "./src/js/components/EmptyMessage.js");
/* harmony import */ var _icons_AddIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../icons/AddIcon */ "./src/js/components/icons/AddIcon.js");
/* harmony import */ var _icons_MoreIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../icons/MoreIcon */ "./src/js/components/icons/MoreIcon.js");
/* harmony import */ var _tag_TagContextMenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../tag/TagContextMenu */ "./src/js/components/tag/TagContextMenu.js");
/* harmony import */ var _NewTaskForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./NewTaskForm */ "./src/js/components/task/NewTaskForm.js");
/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Task */ "./src/js/components/task/Task.js");










const TasksView = (() => {
  let taskElements = []
  const element = document.createElement('main')
  element.className = 'tasks-view'

  const generateTasks = (title, tagId, tasks) => {
    const animationContainer = document.createElement('div')
    animationContainer.className = 'animation-fade'

    const h1 = document.createElement('h1')
    h1.className = 'tasks-view__title'
    h1.textContent = title

    ;(0,_contentGenerator__WEBPACK_IMPORTED_MODULE_0__.cleanContent)(element)
    if (tagId > -1) {
      const header = document.createElement('header')
      header.className = 'tasks-view__header'

      const moreIcon = (0,_icons_MoreIcon__WEBPACK_IMPORTED_MODULE_5__["default"])('tasks-view__icon--more')
      moreIcon.addEventListener('click', (e) => {
        _tag_TagContextMenu__WEBPACK_IMPORTED_MODULE_6__["default"].generateMenu(tagId, e.clientX, e.clientY)
      })
      const tag = _data_tags__WEBPACK_IMPORTED_MODULE_1__["default"].getTagById(tagId)
      if (tag) h1.textContent = tag.title

      header.appendChild(h1)
      header.appendChild(moreIcon)

      animationContainer.appendChild(header)
    } else {
      animationContainer.appendChild(h1)
    }
    animationContainer.appendChild((0,_Divider__WEBPACK_IMPORTED_MODULE_2__["default"])())

    if (tasks.length > 0) {
      const tasksContainer = document.createElement('div')
      tasksContainer.className = 'tasks-view__tasks'

      for (let task of tasks) {
        const taskItem = (0,_Task__WEBPACK_IMPORTED_MODULE_8__["default"])(task)
        tasksContainer.appendChild(taskItem)
        taskElements.push(taskItem)
      }
      animationContainer.appendChild(tasksContainer)
    } else {
      animationContainer.appendChild(
        (0,_EmptyMessage__WEBPACK_IMPORTED_MODULE_3__["default"])(
          "It's pretty empty here 😕. Add a new task with the button below!"
        )
      )
    }

    const btn = document.createElement('button')
    btn.className = 'tasks-view__btn'
    btn.addEventListener('click', () => _NewTaskForm__WEBPACK_IMPORTED_MODULE_7__["default"].updateForm(null))

    const btnTitle = document.createElement('h3')
    btnTitle.className = 'tasks-view__btn__title'
    btnTitle.textContent = 'Add new task'

    btn.appendChild((0,_icons_AddIcon__WEBPACK_IMPORTED_MODULE_4__["default"])('tasks-view__btn__icon'))
    btn.appendChild(btnTitle)

    animationContainer.appendChild((0,_Divider__WEBPACK_IMPORTED_MODULE_2__["default"])())
    animationContainer.appendChild(btn)

    element.appendChild(animationContainer)
  }

  return { element, generateTasks }
})()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TasksView);


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
  while (node.firstChild) {
    node.removeChild(node.firstChild)
  }
}

const generateContent = (node, content) => {
  node.appendChild(content)
}


/***/ }),

/***/ "./src/js/data/tags.js":
/*!*****************************!*\
  !*** ./src/js/data/tags.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// id, title, color
const Tags = (() => {
  const tags = localStorage.getItem('tags') ? JSON.parse(localStorage.tags) : []
  let lastId = tags.length > 0 ? tags[tags.length - 1].id : -1

  const saveToStorage = () => (localStorage.tags = JSON.stringify(tags))

  const getTagById = (id) => tags.find((tag) => tag.id == id)
  const getTags = () => tags
  const getLastId = () => lastId

  const addTag = (tag) => {
    tags.push(tag)
    saveToStorage()

    lastId++
  }

  const removeTag = (id) => {
    const index = tags.findIndex((tag) => tag.id == id)
    if (index > -1) {
      tags.splice(index, 1)
      saveToStorage()
    }
  }

  const updateTag = (id, tag) => {
    const index = tags.findIndex((tag) => tag.id == id)
    if (index > -1) {
      tags.splice(id, 1, tag)
      saveToStorage()
    }
  }

  return { getTagById, getTags, getLastId, addTag, removeTag, updateTag }
})()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tags);


/***/ }),

/***/ "./src/js/data/tasks.js":
/*!******************************!*\
  !*** ./src/js/data/tasks.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Tasks = (() => {
  const loadFromStorage = () => {
    if (localStorage.getItem('tasks')) {
      const loadedTasks = JSON.parse(localStorage.tasks)
      for (let task of loadedTasks) {
        if (task.dueDate) task.dueDate = new Date(parseInt(task.dueDate))
        else task.dueDate = null
      }
      return loadedTasks
    }
    return []
  }

  const tasks = loadFromStorage()
  let lastId = tasks.length > 0 ? tasks[tasks.length - 1].id : -1

  const saveToStorage = () => {
    const tasksCopy = []
    for (let task of tasks) {
      let taskCopy = { ...task }
      if (taskCopy.dueDate) {
        taskCopy.dueDate = +taskCopy.dueDate
      }
      tasksCopy.push(taskCopy)
    }
    localStorage.tasks = JSON.stringify(tasksCopy)
  }

  const getSortedTasks = () => {
    return [...tasks].sort((task1, task2) => {
      const priority1 = task1.done ? -99 : task1.priorityId
      const priority2 = task2.done ? -99 : task2.priorityId

      if (priority1 > priority2) return -1
      if (priority1 < priority2) return 1

      if (task1.dueDate < task2.dueDate) return -1
      if (task1.dueDate > task2.dueDate) return 1
    })
  }

  const getTaskById = (id) => tasks.find((task) => task.id == id)
  const getTasks = () => tasks
  const getLastId = () => lastId

  const addTask = (task) => {
    tasks.push(task)
    saveToStorage()

    lastId++
  }

  const updateTask = (id, task) => {
    const index = tasks.findIndex((task) => task.id == id)
    if (index > -1) {
      tasks.splice(id, 1, task)
      saveToStorage()
    }
  }

  const removeTask = (id) => {
    const index = tasks.findIndex((task) => task.id == id)
    if (index > -1) {
      tasks.splice(index, 1)
      saveToStorage()
    }
  }

  return {
    getTaskById,
    getTasks,
    getLastId,
    getSortedTasks,
    addTask,
    updateTask,
    removeTask,
  }
})()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tasks);


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
/* harmony import */ var _components_task_NewTaskForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/task/NewTaskForm */ "./src/js/components/task/NewTaskForm.js");
/* harmony import */ var _components_tag_TagContextMenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/tag/TagContextMenu */ "./src/js/components/tag/TagContextMenu.js");
/* harmony import */ var _components_tag_TagEditPopup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/tag/TagEditPopup */ "./src/js/components/tag/TagEditPopup.js");
/* harmony import */ var _components_tag_TagDeletePopup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/tag/TagDeletePopup */ "./src/js/components/tag/TagDeletePopup.js");
/* harmony import */ var _contentGenerator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contentGenerator */ "./src/js/contentGenerator.js");










const container = document.querySelector('.container')
;(0,_contentGenerator__WEBPACK_IMPORTED_MODULE_8__.generateContent)(container, _components_Navbar__WEBPACK_IMPORTED_MODULE_1__["default"])
;(0,_contentGenerator__WEBPACK_IMPORTED_MODULE_8__.generateContent)(container, _components_Main__WEBPACK_IMPORTED_MODULE_2__["default"])
;(0,_contentGenerator__WEBPACK_IMPORTED_MODULE_8__.generateContent)(container, _components_ColorPicker__WEBPACK_IMPORTED_MODULE_3__["default"].element)
;(0,_contentGenerator__WEBPACK_IMPORTED_MODULE_8__.generateContent)(container, _components_task_NewTaskForm__WEBPACK_IMPORTED_MODULE_4__["default"].element)
;(0,_contentGenerator__WEBPACK_IMPORTED_MODULE_8__.generateContent)(container, _components_tag_TagContextMenu__WEBPACK_IMPORTED_MODULE_5__["default"].element)
;(0,_contentGenerator__WEBPACK_IMPORTED_MODULE_8__.generateContent)(container, _components_tag_TagEditPopup__WEBPACK_IMPORTED_MODULE_6__["default"].element)
;(0,_contentGenerator__WEBPACK_IMPORTED_MODULE_8__.generateContent)(container, _components_tag_TagDeletePopup__WEBPACK_IMPORTED_MODULE_7__["default"].element)

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9hc3NpZ24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvY2xvbmVPYmplY3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcm91bmRpbmdNZXRob2RzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9jb21wYXJlQXNjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9kaWZmZXJlbmNlSW5DYWxlbmRhck1vbnRocy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZGlmZmVyZW5jZUluTWlsbGlzZWNvbmRzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9kaWZmZXJlbmNlSW5Nb250aHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2RpZmZlcmVuY2VJblNlY29uZHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2VuZE9mRGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9lbmRPZk1vbnRoL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9mb3JtYXREaXN0YW5jZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNMYXN0RGF5T2ZNb250aC9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRGb3JtYXRMb25nRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkTG9jYWxpemVGbi9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRNYXRjaEZuL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZE1hdGNoUGF0dGVybkZuL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXREaXN0YW5jZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0TG9uZy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0UmVsYXRpdmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2xvY2FsaXplL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9tYXRjaC9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS90b0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc2Nzcy9pbmRleC5zY3NzPzAzNTgiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvYXNzZXRzL2ljb25zL2luYm94LnN2ZyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9hc3NldHMvaWNvbnMvbWVudS5zdmciLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvYXNzZXRzL2ljb25zL21vcmUuc3ZnIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2Fzc2V0cy9pY29ucy9uZXh0LTctZGF5cy5zdmciLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvYXNzZXRzL2ljb25zL3BsdXMuc3ZnIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2Fzc2V0cy9pY29ucy90YXNrcy9kb25lLnN2ZyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9hc3NldHMvaWNvbnMvdGFza3MvaGlnaC5zdmciLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvYXNzZXRzL2ljb25zL3Rhc2tzL21lZGl1bS5zdmciLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvYXNzZXRzL2ljb25zL3Rhc2tzL25vbmUuc3ZnIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2Fzc2V0cy9pY29ucy90YXNrcy9zbWFsbC5zdmciLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvYXNzZXRzL2ljb25zL3RvZGF5LnN2ZyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9qcy9jb21wb25lbnRzL0NvbG9yUGlja2VyLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2pzL2NvbXBvbmVudHMvRGl2aWRlci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9qcy9jb21wb25lbnRzL0VtcHR5TWVzc2FnZS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9qcy9jb21wb25lbnRzL01haW4uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvanMvY29tcG9uZW50cy9OYXZiYXIuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvanMvY29tcG9uZW50cy9pY29ucy9BZGRJY29uLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2pzL2NvbXBvbmVudHMvaWNvbnMvSWNvbi5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9qcy9jb21wb25lbnRzL2ljb25zL0luYm94SWNvbi5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9qcy9jb21wb25lbnRzL2ljb25zL01lbnVJY29uLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2pzL2NvbXBvbmVudHMvaWNvbnMvTW9yZUljb24uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvanMvY29tcG9uZW50cy9pY29ucy9OZXh0RGF5c0ljb24uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvanMvY29tcG9uZW50cy9pY29ucy9UYXNrU3RhdHVzSWNvbi5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9qcy9jb21wb25lbnRzL2ljb25zL1RvZGF5SWNvbi5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9qcy9jb21wb25lbnRzL21lbnUvQ3VycmVudE1lbnVPcHRpb24uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvanMvY29tcG9uZW50cy9tZW51L01lbnUuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvanMvY29tcG9uZW50cy9tZW51L01lbnVUaXRsZS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9qcy9jb21wb25lbnRzL21lbnUvb3B0aW9uL01lbnVPcHRpb24uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvanMvY29tcG9uZW50cy9tZW51L29wdGlvbi9NZW51T3B0aW9ucy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9qcy9jb21wb25lbnRzL21lbnUvcHJpb3JpdHkvTWVudVByaW9yaXRpZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvanMvY29tcG9uZW50cy9tZW51L3ByaW9yaXR5L01lbnVQcmlvcml0eS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9qcy9jb21wb25lbnRzL21lbnUvdGFnL01lbnVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvanMvY29tcG9uZW50cy9tZW51L3RhZy9NZW51VGFncy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9qcy9jb21wb25lbnRzL21lbnUvdGFnL05ld1RhZ0J0bi5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9qcy9jb21wb25lbnRzL3RhZy9UYWdDb250ZXh0TWVudS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9qcy9jb21wb25lbnRzL3RhZy9UYWdEZWxldGVQb3B1cC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9qcy9jb21wb25lbnRzL3RhZy9UYWdFZGl0UG9wdXAuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvanMvY29tcG9uZW50cy90YXNrL05ld1Rhc2tGb3JtLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2pzL2NvbXBvbmVudHMvdGFzay9UYXNrLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2pzL2NvbXBvbmVudHMvdGFzay9UYXNrc1ZpZXcuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvanMvY29udGVudEdlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9qcy9kYXRhL3RhZ3MuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvanMvZGF0YS90YXNrcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2pzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIGRpcnR5T2JqZWN0KSB7XG4gIGlmICh0YXJnZXQgPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2Fzc2lnbiByZXF1aXJlcyB0aGF0IGlucHV0IHBhcmFtZXRlciBub3QgYmUgbnVsbCBvciB1bmRlZmluZWQnKTtcbiAgfVxuXG4gIGRpcnR5T2JqZWN0ID0gZGlydHlPYmplY3QgfHwge307XG5cbiAgZm9yICh2YXIgcHJvcGVydHkgaW4gZGlydHlPYmplY3QpIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGRpcnR5T2JqZWN0LCBwcm9wZXJ0eSkpIHtcbiAgICAgIHRhcmdldFtwcm9wZXJ0eV0gPSBkaXJ0eU9iamVjdFtwcm9wZXJ0eV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn0iLCJpbXBvcnQgYXNzaWduIGZyb20gXCIuLi9hc3NpZ24vaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNsb25lT2JqZWN0KGRpcnR5T2JqZWN0KSB7XG4gIHJldHVybiBhc3NpZ24oe30sIGRpcnR5T2JqZWN0KTtcbn0iLCIvKipcbiAqIEdvb2dsZSBDaHJvbWUgYXMgb2YgNjcuMC4zMzk2Ljg3IGludHJvZHVjZWQgdGltZXpvbmVzIHdpdGggb2Zmc2V0IHRoYXQgaW5jbHVkZXMgc2Vjb25kcy5cbiAqIFRoZXkgdXN1YWxseSBhcHBlYXIgZm9yIGRhdGVzIHRoYXQgZGVub3RlIHRpbWUgYmVmb3JlIHRoZSB0aW1lem9uZXMgd2VyZSBpbnRyb2R1Y2VkXG4gKiAoZS5nLiBmb3IgJ0V1cm9wZS9QcmFndWUnIHRpbWV6b25lIHRoZSBvZmZzZXQgaXMgR01UKzAwOjU3OjQ0IGJlZm9yZSAxIE9jdG9iZXIgMTg5MVxuICogYW5kIEdNVCswMTowMDowMCBhZnRlciB0aGF0IGRhdGUpXG4gKlxuICogRGF0ZSNnZXRUaW1lem9uZU9mZnNldCByZXR1cm5zIHRoZSBvZmZzZXQgaW4gbWludXRlcyBhbmQgd291bGQgcmV0dXJuIDU3IGZvciB0aGUgZXhhbXBsZSBhYm92ZSxcbiAqIHdoaWNoIHdvdWxkIGxlYWQgdG8gaW5jb3JyZWN0IGNhbGN1bGF0aW9ucy5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIHRpbWV6b25lIG9mZnNldCBpbiBtaWxsaXNlY29uZHMgdGhhdCB0YWtlcyBzZWNvbmRzIGluIGFjY291bnQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoZGF0ZSkge1xuICB2YXIgdXRjRGF0ZSA9IG5ldyBEYXRlKERhdGUuVVRDKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpLCBkYXRlLmdldERhdGUoKSwgZGF0ZS5nZXRIb3VycygpLCBkYXRlLmdldE1pbnV0ZXMoKSwgZGF0ZS5nZXRTZWNvbmRzKCksIGRhdGUuZ2V0TWlsbGlzZWNvbmRzKCkpKTtcbiAgdXRjRGF0ZS5zZXRVVENGdWxsWWVhcihkYXRlLmdldEZ1bGxZZWFyKCkpO1xuICByZXR1cm4gZGF0ZS5nZXRUaW1lKCkgLSB1dGNEYXRlLmdldFRpbWUoKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlZEFyZ3MocmVxdWlyZWQsIGFyZ3MpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoIDwgcmVxdWlyZWQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHJlcXVpcmVkICsgJyBhcmd1bWVudCcgKyAocmVxdWlyZWQgPiAxID8gJ3MnIDogJycpICsgJyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3MubGVuZ3RoICsgJyBwcmVzZW50Jyk7XG4gIH1cbn0iLCJ2YXIgcm91bmRpbmdNYXAgPSB7XG4gIGNlaWw6IE1hdGguY2VpbCxcbiAgcm91bmQ6IE1hdGgucm91bmQsXG4gIGZsb29yOiBNYXRoLmZsb29yLFxuICB0cnVuYzogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlIDwgMCA/IE1hdGguY2VpbCh2YWx1ZSkgOiBNYXRoLmZsb29yKHZhbHVlKTtcbiAgfSAvLyBNYXRoLnRydW5jIGlzIG5vdCBzdXBwb3J0ZWQgYnkgSUVcblxufTtcbnZhciBkZWZhdWx0Um91bmRpbmdNZXRob2QgPSAndHJ1bmMnO1xuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdW5kaW5nTWV0aG9kKG1ldGhvZCkge1xuICByZXR1cm4gbWV0aG9kID8gcm91bmRpbmdNYXBbbWV0aG9kXSA6IHJvdW5kaW5nTWFwW2RlZmF1bHRSb3VuZGluZ01ldGhvZF07XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBjb21wYXJlQXNjXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbXBhcmUgdGhlIHR3byBkYXRlcyBhbmQgcmV0dXJuIC0xLCAwIG9yIDEuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb21wYXJlIHRoZSB0d28gZGF0ZXMgYW5kIHJldHVybiAxIGlmIHRoZSBmaXJzdCBkYXRlIGlzIGFmdGVyIHRoZSBzZWNvbmQsXG4gKiAtMSBpZiB0aGUgZmlyc3QgZGF0ZSBpcyBiZWZvcmUgdGhlIHNlY29uZCBvciAwIGlmIGRhdGVzIGFyZSBlcXVhbC5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGZpcnN0IGRhdGUgdG8gY29tcGFyZVxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIHNlY29uZCBkYXRlIHRvIGNvbXBhcmVcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSByZXN1bHQgb2YgdGhlIGNvbXBhcmlzb25cbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29tcGFyZSAxMSBGZWJydWFyeSAxOTg3IGFuZCAxMCBKdWx5IDE5ODk6XG4gKiBjb25zdCByZXN1bHQgPSBjb21wYXJlQXNjKG5ldyBEYXRlKDE5ODcsIDEsIDExKSwgbmV3IERhdGUoMTk4OSwgNiwgMTApKVxuICogLy89PiAtMVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTb3J0IHRoZSBhcnJheSBvZiBkYXRlczpcbiAqIGNvbnN0IHJlc3VsdCA9IFtcbiAqICAgbmV3IERhdGUoMTk5NSwgNiwgMiksXG4gKiAgIG5ldyBEYXRlKDE5ODcsIDEsIDExKSxcbiAqICAgbmV3IERhdGUoMTk4OSwgNiwgMTApXG4gKiBdLnNvcnQoY29tcGFyZUFzYylcbiAqIC8vPT4gW1xuICogLy8gICBXZWQgRmViIDExIDE5ODcgMDA6MDA6MDAsXG4gKiAvLyAgIE1vbiBKdWwgMTAgMTk4OSAwMDowMDowMCxcbiAqIC8vICAgU3VuIEp1bCAwMiAxOTk1IDAwOjAwOjAwXG4gKiAvLyBdXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tcGFyZUFzYyhkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVMZWZ0ID0gdG9EYXRlKGRpcnR5RGF0ZUxlZnQpO1xuICB2YXIgZGF0ZVJpZ2h0ID0gdG9EYXRlKGRpcnR5RGF0ZVJpZ2h0KTtcbiAgdmFyIGRpZmYgPSBkYXRlTGVmdC5nZXRUaW1lKCkgLSBkYXRlUmlnaHQuZ2V0VGltZSgpO1xuXG4gIGlmIChkaWZmIDwgMCkge1xuICAgIHJldHVybiAtMTtcbiAgfSBlbHNlIGlmIChkaWZmID4gMCkge1xuICAgIHJldHVybiAxOyAvLyBSZXR1cm4gMCBpZiBkaWZmIGlzIDA7IHJldHVybiBOYU4gaWYgZGlmZiBpcyBOYU5cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZGlmZjtcbiAgfVxufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgZGlmZmVyZW5jZUluQ2FsZW5kYXJNb250aHNcbiAqIEBjYXRlZ29yeSBNb250aCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIG51bWJlciBvZiBjYWxlbmRhciBtb250aHMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIG51bWJlciBvZiBjYWxlbmRhciBtb250aHMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBsYXRlciBkYXRlXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgZWFybGllciBkYXRlXG4gKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgbnVtYmVyIG9mIGNhbGVuZGFyIG1vbnRoc1xuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBIb3cgbWFueSBjYWxlbmRhciBtb250aHMgYXJlIGJldHdlZW4gMzEgSmFudWFyeSAyMDE0IGFuZCAxIFNlcHRlbWJlciAyMDE0P1xuICogdmFyIHJlc3VsdCA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyTW9udGhzKFxuICogICBuZXcgRGF0ZSgyMDE0LCA4LCAxKSxcbiAqICAgbmV3IERhdGUoMjAxNCwgMCwgMzEpXG4gKiApXG4gKiAvLz0+IDhcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaWZmZXJlbmNlSW5DYWxlbmRhck1vbnRocyhkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVMZWZ0ID0gdG9EYXRlKGRpcnR5RGF0ZUxlZnQpO1xuICB2YXIgZGF0ZVJpZ2h0ID0gdG9EYXRlKGRpcnR5RGF0ZVJpZ2h0KTtcbiAgdmFyIHllYXJEaWZmID0gZGF0ZUxlZnQuZ2V0RnVsbFllYXIoKSAtIGRhdGVSaWdodC5nZXRGdWxsWWVhcigpO1xuICB2YXIgbW9udGhEaWZmID0gZGF0ZUxlZnQuZ2V0TW9udGgoKSAtIGRhdGVSaWdodC5nZXRNb250aCgpO1xuICByZXR1cm4geWVhckRpZmYgKiAxMiArIG1vbnRoRGlmZjtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGRpZmZlcmVuY2VJbk1pbGxpc2Vjb25kc1xuICogQGNhdGVnb3J5IE1pbGxpc2Vjb25kIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGxhdGVyIGRhdGVcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBlYXJsaWVyIGRhdGVcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEhvdyBtYW55IG1pbGxpc2Vjb25kcyBhcmUgYmV0d2VlblxuICogLy8gMiBKdWx5IDIwMTQgMTI6MzA6MjAuNjAwIGFuZCAyIEp1bHkgMjAxNCAxMjozMDoyMS43MDA/XG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5NaWxsaXNlY29uZHMoXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDYsIDIsIDEyLCAzMCwgMjEsIDcwMCksXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDYsIDIsIDEyLCAzMCwgMjAsIDYwMClcbiAqIClcbiAqIC8vPT4gMTEwMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpZmZlcmVuY2VJbk1pbGxpc2Vjb25kcyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICByZXR1cm4gdG9EYXRlKGRhdGVMZWZ0KS5nZXRUaW1lKCkgLSB0b0RhdGUoZGF0ZVJpZ2h0KS5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgZGlmZmVyZW5jZUluQ2FsZW5kYXJNb250aHMgZnJvbSBcIi4uL2RpZmZlcmVuY2VJbkNhbGVuZGFyTW9udGhzL2luZGV4LmpzXCI7XG5pbXBvcnQgY29tcGFyZUFzYyBmcm9tIFwiLi4vY29tcGFyZUFzYy9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCBpc0xhc3REYXlPZk1vbnRoIGZyb20gXCIuLi9pc0xhc3REYXlPZk1vbnRoL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGRpZmZlcmVuY2VJbk1vbnRoc1xuICogQGNhdGVnb3J5IE1vbnRoIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgbnVtYmVyIG9mIGZ1bGwgbW9udGhzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBudW1iZXIgb2YgZnVsbCBtb250aHMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMgdXNpbmcgdHJ1bmMgYXMgYSBkZWZhdWx0IHJvdW5kaW5nIG1ldGhvZC5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGxhdGVyIGRhdGVcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBlYXJsaWVyIGRhdGVcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSBudW1iZXIgb2YgZnVsbCBtb250aHNcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSG93IG1hbnkgZnVsbCBtb250aHMgYXJlIGJldHdlZW4gMzEgSmFudWFyeSAyMDE0IGFuZCAxIFNlcHRlbWJlciAyMDE0P1xuICogY29uc3QgcmVzdWx0ID0gZGlmZmVyZW5jZUluTW9udGhzKG5ldyBEYXRlKDIwMTQsIDgsIDEpLCBuZXcgRGF0ZSgyMDE0LCAwLCAzMSkpXG4gKiAvLz0+IDdcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaWZmZXJlbmNlSW5Nb250aHMoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdCA9IHRvRGF0ZShkaXJ0eURhdGVMZWZ0KTtcbiAgdmFyIGRhdGVSaWdodCA9IHRvRGF0ZShkaXJ0eURhdGVSaWdodCk7XG4gIHZhciBzaWduID0gY29tcGFyZUFzYyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KTtcbiAgdmFyIGRpZmZlcmVuY2UgPSBNYXRoLmFicyhkaWZmZXJlbmNlSW5DYWxlbmRhck1vbnRocyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KSk7XG4gIHZhciByZXN1bHQ7IC8vIENoZWNrIGZvciB0aGUgZGlmZmVyZW5jZSBvZiBsZXNzIHRoYW4gbW9udGhcblxuICBpZiAoZGlmZmVyZW5jZSA8IDEpIHtcbiAgICByZXN1bHQgPSAwO1xuICB9IGVsc2Uge1xuICAgIGlmIChkYXRlTGVmdC5nZXRNb250aCgpID09PSAxICYmIGRhdGVMZWZ0LmdldERhdGUoKSA+IDI3KSB7XG4gICAgICAvLyBUaGlzIHdpbGwgY2hlY2sgaWYgdGhlIGRhdGUgaXMgZW5kIG9mIEZlYiBhbmQgYXNzaWduIGEgaGlnaGVyIGVuZCBvZiBtb250aCBkYXRlXG4gICAgICAvLyB0byBjb21wYXJlIGl0IHdpdGggSmFuXG4gICAgICBkYXRlTGVmdC5zZXREYXRlKDMwKTtcbiAgICB9XG5cbiAgICBkYXRlTGVmdC5zZXRNb250aChkYXRlTGVmdC5nZXRNb250aCgpIC0gc2lnbiAqIGRpZmZlcmVuY2UpOyAvLyBNYXRoLmFicyhkaWZmIGluIGZ1bGwgbW9udGhzIC0gZGlmZiBpbiBjYWxlbmRhciBtb250aHMpID09PSAxIGlmIGxhc3QgY2FsZW5kYXIgbW9udGggaXMgbm90IGZ1bGxcbiAgICAvLyBJZiBzbywgcmVzdWx0IG11c3QgYmUgZGVjcmVhc2VkIGJ5IDEgaW4gYWJzb2x1dGUgdmFsdWVcblxuICAgIHZhciBpc0xhc3RNb250aE5vdEZ1bGwgPSBjb21wYXJlQXNjKGRhdGVMZWZ0LCBkYXRlUmlnaHQpID09PSAtc2lnbjsgLy8gQ2hlY2sgZm9yIGNhc2VzIG9mIG9uZSBmdWxsIGNhbGVuZGFyIG1vbnRoXG5cbiAgICBpZiAoaXNMYXN0RGF5T2ZNb250aCh0b0RhdGUoZGlydHlEYXRlTGVmdCkpICYmIGRpZmZlcmVuY2UgPT09IDEgJiYgY29tcGFyZUFzYyhkaXJ0eURhdGVMZWZ0LCBkYXRlUmlnaHQpID09PSAxKSB7XG4gICAgICBpc0xhc3RNb250aE5vdEZ1bGwgPSBmYWxzZTtcbiAgICB9XG5cbiAgICByZXN1bHQgPSBzaWduICogKGRpZmZlcmVuY2UgLSBOdW1iZXIoaXNMYXN0TW9udGhOb3RGdWxsKSk7XG4gIH0gLy8gUHJldmVudCBuZWdhdGl2ZSB6ZXJvXG5cblxuICByZXR1cm4gcmVzdWx0ID09PSAwID8gMCA6IHJlc3VsdDtcbn0iLCJpbXBvcnQgZGlmZmVyZW5jZUluTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9kaWZmZXJlbmNlSW5NaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBnZXRSb3VuZGluZ01ldGhvZCB9IGZyb20gXCIuLi9fbGliL3JvdW5kaW5nTWV0aG9kcy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBkaWZmZXJlbmNlSW5TZWNvbmRzXG4gKiBAY2F0ZWdvcnkgU2Vjb25kIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgbnVtYmVyIG9mIHNlY29uZHMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIG51bWJlciBvZiBzZWNvbmRzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgbGF0ZXIgZGF0ZVxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIGVhcmxpZXIgZGF0ZVxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMucm91bmRpbmdNZXRob2Q9J3RydW5jJ10gLSBhIHJvdW5kaW5nIG1ldGhvZCAoYGNlaWxgLCBgZmxvb3JgLCBgcm91bmRgIG9yIGB0cnVuY2ApXG4gKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgbnVtYmVyIG9mIHNlY29uZHNcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSG93IG1hbnkgc2Vjb25kcyBhcmUgYmV0d2VlblxuICogLy8gMiBKdWx5IDIwMTQgMTI6MzA6MDcuOTk5IGFuZCAyIEp1bHkgMjAxNCAxMjozMDoyMC4wMDA/XG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5TZWNvbmRzKFxuICogICBuZXcgRGF0ZSgyMDE0LCA2LCAyLCAxMiwgMzAsIDIwLCAwKSxcbiAqICAgbmV3IERhdGUoMjAxNCwgNiwgMiwgMTIsIDMwLCA3LCA5OTkpXG4gKiApXG4gKiAvLz0+IDEyXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlmZmVyZW5jZUluU2Vjb25kcyhkYXRlTGVmdCwgZGF0ZVJpZ2h0LCBvcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGlmZiA9IGRpZmZlcmVuY2VJbk1pbGxpc2Vjb25kcyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KSAvIDEwMDA7XG4gIHJldHVybiBnZXRSb3VuZGluZ01ldGhvZChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMucm91bmRpbmdNZXRob2QpKGRpZmYpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgZW5kT2ZEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBlbmQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBlbmQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHJldHVybnMge0RhdGV9IHRoZSBlbmQgb2YgYSBkYXlcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgZW5kIG9mIGEgZGF5IGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gZW5kT2ZEYXkobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gVHVlIFNlcCAwMiAyMDE0IDIzOjU5OjU5Ljk5OVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVuZE9mRGF5KGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgZGF0ZS5zZXRIb3VycygyMywgNTksIDU5LCA5OTkpO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGVuZE9mTW9udGhcbiAqIEBjYXRlZ29yeSBNb250aCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIGVuZCBvZiBhIG1vbnRoIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgZW5kIG9mIGEgbW9udGggZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHJldHVybnMge0RhdGV9IHRoZSBlbmQgb2YgYSBtb250aFxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBlbmQgb2YgYSBtb250aCBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IGVuZE9mTW9udGgobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gVHVlIFNlcCAzMCAyMDE0IDIzOjU5OjU5Ljk5OVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVuZE9mTW9udGgoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgbW9udGggPSBkYXRlLmdldE1vbnRoKCk7XG4gIGRhdGUuc2V0RnVsbFllYXIoZGF0ZS5nZXRGdWxsWWVhcigpLCBtb250aCArIDEsIDApO1xuICBkYXRlLnNldEhvdXJzKDIzLCA1OSwgNTksIDk5OSk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCBjb21wYXJlQXNjIGZyb20gXCIuLi9jb21wYXJlQXNjL2luZGV4LmpzXCI7XG5pbXBvcnQgZGlmZmVyZW5jZUluTW9udGhzIGZyb20gXCIuLi9kaWZmZXJlbmNlSW5Nb250aHMvaW5kZXguanNcIjtcbmltcG9ydCBkaWZmZXJlbmNlSW5TZWNvbmRzIGZyb20gXCIuLi9kaWZmZXJlbmNlSW5TZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgZGVmYXVsdExvY2FsZSBmcm9tIFwiLi4vbG9jYWxlL2VuLVVTL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCBjbG9uZU9iamVjdCBmcm9tIFwiLi4vX2xpYi9jbG9uZU9iamVjdC9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMgZnJvbSBcIi4uL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbnZhciBNSU5VVEVTX0lOX0RBWSA9IDE0NDA7XG52YXIgTUlOVVRFU19JTl9BTE1PU1RfVFdPX0RBWVMgPSAyNTIwO1xudmFyIE1JTlVURVNfSU5fTU9OVEggPSA0MzIwMDtcbnZhciBNSU5VVEVTX0lOX1RXT19NT05USFMgPSA4NjQwMDtcbi8qKlxuICogQG5hbWUgZm9ybWF0RGlzdGFuY2VcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcyBpbiB3b3Jkcy5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgZGlzdGFuY2UgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMgaW4gd29yZHMuXG4gKlxuICogfCBEaXN0YW5jZSBiZXR3ZWVuIGRhdGVzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJlc3VsdCAgICAgICAgICAgICAgfFxuICogfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuICogfCAwIC4uLiAzMCBzZWNzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGxlc3MgdGhhbiBhIG1pbnV0ZSAgfFxuICogfCAzMCBzZWNzIC4uLiAxIG1pbiAzMCBzZWNzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDEgbWludXRlICAgICAgICAgICAgfFxuICogfCAxIG1pbiAzMCBzZWNzIC4uLiA0NCBtaW5zIDMwIHNlY3MgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFsyLi40NF0gbWludXRlcyAgICAgfFxuICogfCA0NCBtaW5zIC4uLiAzMCBzZWNzIC4uLiA4OSBtaW5zIDMwIHNlY3MgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFib3V0IDEgaG91ciAgICAgICAgfFxuICogfCA4OSBtaW5zIDMwIHNlY3MgLi4uIDIzIGhycyA1OSBtaW5zIDMwIHNlY3MgICAgICAgICAgICAgICAgICAgICAgICB8IGFib3V0IFsyLi4yNF0gaG91cnMgfFxuICogfCAyMyBocnMgNTkgbWlucyAzMCBzZWNzIC4uLiA0MSBocnMgNTkgbWlucyAzMCBzZWNzICAgICAgICAgICAgICAgICB8IDEgZGF5ICAgICAgICAgICAgICAgfFxuICogfCA0MSBocnMgNTkgbWlucyAzMCBzZWNzIC4uLiAyOSBkYXlzIDIzIGhycyA1OSBtaW5zIDMwIHNlY3MgICAgICAgICB8IFsyLi4zMF0gZGF5cyAgICAgICAgfFxuICogfCAyOSBkYXlzIDIzIGhycyA1OSBtaW5zIDMwIHNlY3MgLi4uIDQ0IGRheXMgMjMgaHJzIDU5IG1pbnMgMzAgc2VjcyB8IGFib3V0IDEgbW9udGggICAgICAgfFxuICogfCA0NCBkYXlzIDIzIGhycyA1OSBtaW5zIDMwIHNlY3MgLi4uIDU5IGRheXMgMjMgaHJzIDU5IG1pbnMgMzAgc2VjcyB8IGFib3V0IDIgbW9udGhzICAgICAgfFxuICogfCA1OSBkYXlzIDIzIGhycyA1OSBtaW5zIDMwIHNlY3MgLi4uIDEgeXIgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFsyLi4xMl0gbW9udGhzICAgICAgfFxuICogfCAxIHlyIC4uLiAxIHlyIDMgbW9udGhzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFib3V0IDEgeWVhciAgICAgICAgfFxuICogfCAxIHlyIDMgbW9udGhzIC4uLiAxIHlyIDkgbW9udGggcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IG92ZXIgMSB5ZWFyICAgICAgICAgfFxuICogfCAxIHlyIDkgbW9udGhzIC4uLiAyIHlycyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFsbW9zdCAyIHllYXJzICAgICAgfFxuICogfCBOIHlycyAuLi4gTiB5cnMgMyBtb250aHMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFib3V0IE4geWVhcnMgICAgICAgfFxuICogfCBOIHlycyAzIG1vbnRocyAuLi4gTiB5cnMgOSBtb250aHMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IG92ZXIgTiB5ZWFycyAgICAgICAgfFxuICogfCBOIHlycyA5IG1vbnRocyAuLi4gTisxIHlycyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFsbW9zdCBOKzEgeWVhcnMgICAgfFxuICpcbiAqIFdpdGggYG9wdGlvbnMuaW5jbHVkZVNlY29uZHMgPT0gdHJ1ZWA6XG4gKiB8IERpc3RhbmNlIGJldHdlZW4gZGF0ZXMgfCBSZXN1bHQgICAgICAgICAgICAgICB8XG4gKiB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS18XG4gKiB8IDAgc2VjcyAuLi4gNSBzZWNzICAgICAgfCBsZXNzIHRoYW4gNSBzZWNvbmRzICB8XG4gKiB8IDUgc2VjcyAuLi4gMTAgc2VjcyAgICAgfCBsZXNzIHRoYW4gMTAgc2Vjb25kcyB8XG4gKiB8IDEwIHNlY3MgLi4uIDIwIHNlY3MgICAgfCBsZXNzIHRoYW4gMjAgc2Vjb25kcyB8XG4gKiB8IDIwIHNlY3MgLi4uIDQwIHNlY3MgICAgfCBoYWxmIGEgbWludXRlICAgICAgICB8XG4gKiB8IDQwIHNlY3MgLi4uIDYwIHNlY3MgICAgfCBsZXNzIHRoYW4gYSBtaW51dGUgICB8XG4gKiB8IDYwIHNlY3MgLi4uIDkwIHNlY3MgICAgfCAxIG1pbnV0ZSAgICAgICAgICAgICB8XG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiAtIFRoZSBmdW5jdGlvbiB3YXMgcmVuYW1lZCBmcm9tIGBkaXN0YW5jZUluV29yZHMgYCB0byBgZm9ybWF0RGlzdGFuY2VgXG4gKiAgIHRvIG1ha2UgaXRzIG5hbWUgY29uc2lzdGVudCB3aXRoIGBmb3JtYXRgIGFuZCBgZm9ybWF0UmVsYXRpdmVgLlxuICpcbiAqIC0gVGhlIG9yZGVyIG9mIGFyZ3VtZW50cyBpcyBzd2FwcGVkIHRvIG1ha2UgdGhlIGZ1bmN0aW9uXG4gKiAgIGNvbnNpc3RlbnQgd2l0aCBgZGlmZmVyZW5jZUluLi4uYCBmdW5jdGlvbnMuXG4gKlxuICogICBgYGBqYXZhc2NyaXB0XG4gKiAgIC8vIEJlZm9yZSB2Mi4wLjBcbiAqXG4gKiAgIGRpc3RhbmNlSW5Xb3JkcyhcbiAqICAgICBuZXcgRGF0ZSgxOTg2LCAzLCA0LCAxMCwgMzIsIDApLFxuICogICAgIG5ldyBEYXRlKDE5ODYsIDMsIDQsIDExLCAzMiwgMCksXG4gKiAgICAgeyBhZGRTdWZmaXg6IHRydWUgfVxuICogICApIC8vPT4gJ2luIGFib3V0IDEgaG91cidcbiAqXG4gKiAgIC8vIHYyLjAuMCBvbndhcmRcbiAqXG4gKiAgIGZvcm1hdERpc3RhbmNlKFxuICogICAgIG5ldyBEYXRlKDE5ODYsIDMsIDQsIDExLCAzMiwgMCksXG4gKiAgICAgbmV3IERhdGUoMTk4NiwgMywgNCwgMTAsIDMyLCAwKSxcbiAqICAgICB7IGFkZFN1ZmZpeDogdHJ1ZSB9XG4gKiAgICkgLy89PiAnaW4gYWJvdXQgMSBob3VyJ1xuICogICBgYGBcbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGVcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGJhc2VEYXRlIC0gdGhlIGRhdGUgdG8gY29tcGFyZSB3aXRoXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuaW5jbHVkZVNlY29uZHM9ZmFsc2VdIC0gZGlzdGFuY2VzIGxlc3MgdGhhbiBhIG1pbnV0ZSBhcmUgbW9yZSBkZXRhaWxlZFxuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5hZGRTdWZmaXg9ZmFsc2VdIC0gcmVzdWx0IGluZGljYXRlcyBpZiB0aGUgc2Vjb25kIGRhdGUgaXMgZWFybGllciBvciBsYXRlciB0aGFuIHRoZSBmaXJzdFxuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcmV0dXJucyB7U3RyaW5nfSB0aGUgZGlzdGFuY2UgaW4gd29yZHNcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBkYXRlYCBtdXN0IG5vdCBiZSBJbnZhbGlkIERhdGVcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBiYXNlRGF0ZWAgbXVzdCBub3QgYmUgSW52YWxpZCBEYXRlXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5sb2NhbGVgIG11c3QgY29udGFpbiBgZm9ybWF0RGlzdGFuY2VgIHByb3BlcnR5XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoYXQgaXMgdGhlIGRpc3RhbmNlIGJldHdlZW4gMiBKdWx5IDIwMTQgYW5kIDEgSmFudWFyeSAyMDE1P1xuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0RGlzdGFuY2UobmV3IERhdGUoMjAxNCwgNiwgMiksIG5ldyBEYXRlKDIwMTUsIDAsIDEpKVxuICogLy89PiAnNiBtb250aHMnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoYXQgaXMgdGhlIGRpc3RhbmNlIGJldHdlZW4gMSBKYW51YXJ5IDIwMTUgMDA6MDA6MTVcbiAqIC8vIGFuZCAxIEphbnVhcnkgMjAxNSAwMDowMDowMCwgaW5jbHVkaW5nIHNlY29uZHM/XG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXREaXN0YW5jZShcbiAqICAgbmV3IERhdGUoMjAxNSwgMCwgMSwgMCwgMCwgMTUpLFxuICogICBuZXcgRGF0ZSgyMDE1LCAwLCAxLCAwLCAwLCAwKSxcbiAqICAgeyBpbmNsdWRlU2Vjb25kczogdHJ1ZSB9XG4gKiApXG4gKiAvLz0+ICdsZXNzIHRoYW4gMjAgc2Vjb25kcydcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hhdCBpcyB0aGUgZGlzdGFuY2UgZnJvbSAxIEphbnVhcnkgMjAxNlxuICogLy8gdG8gMSBKYW51YXJ5IDIwMTUsIHdpdGggYSBzdWZmaXg/XG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXREaXN0YW5jZShuZXcgRGF0ZSgyMDE1LCAwLCAxKSwgbmV3IERhdGUoMjAxNiwgMCwgMSksIHtcbiAqICAgYWRkU3VmZml4OiB0cnVlXG4gKiB9KVxuICogLy89PiAnYWJvdXQgMSB5ZWFyIGFnbydcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hhdCBpcyB0aGUgZGlzdGFuY2UgYmV0d2VlbiAxIEF1Z3VzdCAyMDE2IGFuZCAxIEphbnVhcnkgMjAxNSBpbiBFc3BlcmFudG8/XG4gKiBpbXBvcnQgeyBlb0xvY2FsZSB9IGZyb20gJ2RhdGUtZm5zL2xvY2FsZS9lbydcbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdERpc3RhbmNlKG5ldyBEYXRlKDIwMTYsIDcsIDEpLCBuZXcgRGF0ZSgyMDE1LCAwLCAxKSwge1xuICogICBsb2NhbGU6IGVvTG9jYWxlXG4gKiB9KVxuICogLy89PiAncGxpIG9sIDEgamFybydcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb3JtYXREaXN0YW5jZShkaXJ0eURhdGUsIGRpcnR5QmFzZURhdGUpIHtcbiAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHt9O1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlIHx8IGRlZmF1bHRMb2NhbGU7XG5cbiAgaWYgKCFsb2NhbGUuZm9ybWF0RGlzdGFuY2UpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignbG9jYWxlIG11c3QgY29udGFpbiBmb3JtYXREaXN0YW5jZSBwcm9wZXJ0eScpO1xuICB9XG5cbiAgdmFyIGNvbXBhcmlzb24gPSBjb21wYXJlQXNjKGRpcnR5RGF0ZSwgZGlydHlCYXNlRGF0ZSk7XG5cbiAgaWYgKGlzTmFOKGNvbXBhcmlzb24pKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0ludmFsaWQgdGltZSB2YWx1ZScpO1xuICB9XG5cbiAgdmFyIGxvY2FsaXplT3B0aW9ucyA9IGNsb25lT2JqZWN0KG9wdGlvbnMpO1xuICBsb2NhbGl6ZU9wdGlvbnMuYWRkU3VmZml4ID0gQm9vbGVhbihvcHRpb25zLmFkZFN1ZmZpeCk7XG4gIGxvY2FsaXplT3B0aW9ucy5jb21wYXJpc29uID0gY29tcGFyaXNvbjtcbiAgdmFyIGRhdGVMZWZ0O1xuICB2YXIgZGF0ZVJpZ2h0O1xuXG4gIGlmIChjb21wYXJpc29uID4gMCkge1xuICAgIGRhdGVMZWZ0ID0gdG9EYXRlKGRpcnR5QmFzZURhdGUpO1xuICAgIGRhdGVSaWdodCA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB9IGVsc2Uge1xuICAgIGRhdGVMZWZ0ID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gICAgZGF0ZVJpZ2h0ID0gdG9EYXRlKGRpcnR5QmFzZURhdGUpO1xuICB9XG5cbiAgdmFyIHNlY29uZHMgPSBkaWZmZXJlbmNlSW5TZWNvbmRzKGRhdGVSaWdodCwgZGF0ZUxlZnQpO1xuICB2YXIgb2Zmc2V0SW5TZWNvbmRzID0gKGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoZGF0ZVJpZ2h0KSAtIGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoZGF0ZUxlZnQpKSAvIDEwMDA7XG4gIHZhciBtaW51dGVzID0gTWF0aC5yb3VuZCgoc2Vjb25kcyAtIG9mZnNldEluU2Vjb25kcykgLyA2MCk7XG4gIHZhciBtb250aHM7IC8vIDAgdXAgdG8gMiBtaW5zXG5cbiAgaWYgKG1pbnV0ZXMgPCAyKSB7XG4gICAgaWYgKG9wdGlvbnMuaW5jbHVkZVNlY29uZHMpIHtcbiAgICAgIGlmIChzZWNvbmRzIDwgNSkge1xuICAgICAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCdsZXNzVGhhblhTZWNvbmRzJywgNSwgbG9jYWxpemVPcHRpb25zKTtcbiAgICAgIH0gZWxzZSBpZiAoc2Vjb25kcyA8IDEwKSB7XG4gICAgICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ2xlc3NUaGFuWFNlY29uZHMnLCAxMCwgbG9jYWxpemVPcHRpb25zKTtcbiAgICAgIH0gZWxzZSBpZiAoc2Vjb25kcyA8IDIwKSB7XG4gICAgICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ2xlc3NUaGFuWFNlY29uZHMnLCAyMCwgbG9jYWxpemVPcHRpb25zKTtcbiAgICAgIH0gZWxzZSBpZiAoc2Vjb25kcyA8IDQwKSB7XG4gICAgICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ2hhbGZBTWludXRlJywgbnVsbCwgbG9jYWxpemVPcHRpb25zKTtcbiAgICAgIH0gZWxzZSBpZiAoc2Vjb25kcyA8IDYwKSB7XG4gICAgICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ2xlc3NUaGFuWE1pbnV0ZXMnLCAxLCBsb2NhbGl6ZU9wdGlvbnMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgneE1pbnV0ZXMnLCAxLCBsb2NhbGl6ZU9wdGlvbnMpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAobWludXRlcyA9PT0gMCkge1xuICAgICAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCdsZXNzVGhhblhNaW51dGVzJywgMSwgbG9jYWxpemVPcHRpb25zKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ3hNaW51dGVzJywgbWludXRlcywgbG9jYWxpemVPcHRpb25zKTtcbiAgICAgIH1cbiAgICB9IC8vIDIgbWlucyB1cCB0byAwLjc1IGhyc1xuXG4gIH0gZWxzZSBpZiAobWludXRlcyA8IDQ1KSB7XG4gICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgneE1pbnV0ZXMnLCBtaW51dGVzLCBsb2NhbGl6ZU9wdGlvbnMpOyAvLyAwLjc1IGhycyB1cCB0byAxLjUgaHJzXG4gIH0gZWxzZSBpZiAobWludXRlcyA8IDkwKSB7XG4gICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgnYWJvdXRYSG91cnMnLCAxLCBsb2NhbGl6ZU9wdGlvbnMpOyAvLyAxLjUgaHJzIHVwIHRvIDI0IGhyc1xuICB9IGVsc2UgaWYgKG1pbnV0ZXMgPCBNSU5VVEVTX0lOX0RBWSkge1xuICAgIHZhciBob3VycyA9IE1hdGgucm91bmQobWludXRlcyAvIDYwKTtcbiAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCdhYm91dFhIb3VycycsIGhvdXJzLCBsb2NhbGl6ZU9wdGlvbnMpOyAvLyAxIGRheSB1cCB0byAxLjc1IGRheXNcbiAgfSBlbHNlIGlmIChtaW51dGVzIDwgTUlOVVRFU19JTl9BTE1PU1RfVFdPX0RBWVMpIHtcbiAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCd4RGF5cycsIDEsIGxvY2FsaXplT3B0aW9ucyk7IC8vIDEuNzUgZGF5cyB1cCB0byAzMCBkYXlzXG4gIH0gZWxzZSBpZiAobWludXRlcyA8IE1JTlVURVNfSU5fTU9OVEgpIHtcbiAgICB2YXIgZGF5cyA9IE1hdGgucm91bmQobWludXRlcyAvIE1JTlVURVNfSU5fREFZKTtcbiAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCd4RGF5cycsIGRheXMsIGxvY2FsaXplT3B0aW9ucyk7IC8vIDEgbW9udGggdXAgdG8gMiBtb250aHNcbiAgfSBlbHNlIGlmIChtaW51dGVzIDwgTUlOVVRFU19JTl9UV09fTU9OVEhTKSB7XG4gICAgbW9udGhzID0gTWF0aC5yb3VuZChtaW51dGVzIC8gTUlOVVRFU19JTl9NT05USCk7XG4gICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgnYWJvdXRYTW9udGhzJywgbW9udGhzLCBsb2NhbGl6ZU9wdGlvbnMpO1xuICB9XG5cbiAgbW9udGhzID0gZGlmZmVyZW5jZUluTW9udGhzKGRhdGVSaWdodCwgZGF0ZUxlZnQpOyAvLyAyIG1vbnRocyB1cCB0byAxMiBtb250aHNcblxuICBpZiAobW9udGhzIDwgMTIpIHtcbiAgICB2YXIgbmVhcmVzdE1vbnRoID0gTWF0aC5yb3VuZChtaW51dGVzIC8gTUlOVVRFU19JTl9NT05USCk7XG4gICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgneE1vbnRocycsIG5lYXJlc3RNb250aCwgbG9jYWxpemVPcHRpb25zKTsgLy8gMSB5ZWFyIHVwIHRvIG1heCBEYXRlXG4gIH0gZWxzZSB7XG4gICAgdmFyIG1vbnRoc1NpbmNlU3RhcnRPZlllYXIgPSBtb250aHMgJSAxMjtcbiAgICB2YXIgeWVhcnMgPSBNYXRoLmZsb29yKG1vbnRocyAvIDEyKTsgLy8gTiB5ZWFycyB1cCB0byAxIHllYXJzIDMgbW9udGhzXG5cbiAgICBpZiAobW9udGhzU2luY2VTdGFydE9mWWVhciA8IDMpIHtcbiAgICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ2Fib3V0WFllYXJzJywgeWVhcnMsIGxvY2FsaXplT3B0aW9ucyk7IC8vIE4geWVhcnMgMyBtb250aHMgdXAgdG8gTiB5ZWFycyA5IG1vbnRoc1xuICAgIH0gZWxzZSBpZiAobW9udGhzU2luY2VTdGFydE9mWWVhciA8IDkpIHtcbiAgICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ292ZXJYWWVhcnMnLCB5ZWFycywgbG9jYWxpemVPcHRpb25zKTsgLy8gTiB5ZWFycyA5IG1vbnRocyB1cCB0byBOIHllYXIgMTIgbW9udGhzXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ2FsbW9zdFhZZWFycycsIHllYXJzICsgMSwgbG9jYWxpemVPcHRpb25zKTtcbiAgICB9XG4gIH1cbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCBlbmRPZkRheSBmcm9tIFwiLi4vZW5kT2ZEYXkvaW5kZXguanNcIjtcbmltcG9ydCBlbmRPZk1vbnRoIGZyb20gXCIuLi9lbmRPZk1vbnRoL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc0xhc3REYXlPZk1vbnRoXG4gKiBAY2F0ZWdvcnkgTW9udGggSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgdGhlIGxhc3QgZGF5IG9mIGEgbW9udGg/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSB0aGUgbGFzdCBkYXkgb2YgYSBtb250aD9cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIHRoZSBsYXN0IGRheSBvZiBhIG1vbnRoXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSXMgMjggRmVicnVhcnkgMjAxNCB0aGUgbGFzdCBkYXkgb2YgYSBtb250aD9cbiAqIHZhciByZXN1bHQgPSBpc0xhc3REYXlPZk1vbnRoKG5ldyBEYXRlKDIwMTQsIDEsIDI4KSlcbiAqIC8vPT4gdHJ1ZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzTGFzdERheU9mTW9udGgoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICByZXR1cm4gZW5kT2ZEYXkoZGF0ZSkuZ2V0VGltZSgpID09PSBlbmRPZk1vbnRoKGRhdGUpLmdldFRpbWUoKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZEZvcm1hdExvbmdGbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICAgIC8vIFRPRE86IFJlbW92ZSBTdHJpbmcoKVxuICAgIHZhciB3aWR0aCA9IG9wdGlvbnMud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBhcmdzLmRlZmF1bHRXaWR0aDtcbiAgICB2YXIgZm9ybWF0ID0gYXJncy5mb3JtYXRzW3dpZHRoXSB8fCBhcmdzLmZvcm1hdHNbYXJncy5kZWZhdWx0V2lkdGhdO1xuICAgIHJldHVybiBmb3JtYXQ7XG4gIH07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRMb2NhbGl6ZUZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChkaXJ0eUluZGV4LCBkaXJ0eU9wdGlvbnMpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGRpcnR5T3B0aW9ucyB8fCB7fTtcbiAgICB2YXIgY29udGV4dCA9IG9wdGlvbnMuY29udGV4dCA/IFN0cmluZyhvcHRpb25zLmNvbnRleHQpIDogJ3N0YW5kYWxvbmUnO1xuICAgIHZhciB2YWx1ZXNBcnJheTtcblxuICAgIGlmIChjb250ZXh0ID09PSAnZm9ybWF0dGluZycgJiYgYXJncy5mb3JtYXR0aW5nVmFsdWVzKSB7XG4gICAgICB2YXIgZGVmYXVsdFdpZHRoID0gYXJncy5kZWZhdWx0Rm9ybWF0dGluZ1dpZHRoIHx8IGFyZ3MuZGVmYXVsdFdpZHRoO1xuICAgICAgdmFyIHdpZHRoID0gb3B0aW9ucy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGRlZmF1bHRXaWR0aDtcbiAgICAgIHZhbHVlc0FycmF5ID0gYXJncy5mb3JtYXR0aW5nVmFsdWVzW3dpZHRoXSB8fCBhcmdzLmZvcm1hdHRpbmdWYWx1ZXNbZGVmYXVsdFdpZHRoXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIF9kZWZhdWx0V2lkdGggPSBhcmdzLmRlZmF1bHRXaWR0aDtcblxuICAgICAgdmFyIF93aWR0aCA9IG9wdGlvbnMud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBhcmdzLmRlZmF1bHRXaWR0aDtcblxuICAgICAgdmFsdWVzQXJyYXkgPSBhcmdzLnZhbHVlc1tfd2lkdGhdIHx8IGFyZ3MudmFsdWVzW19kZWZhdWx0V2lkdGhdO1xuICAgIH1cblxuICAgIHZhciBpbmRleCA9IGFyZ3MuYXJndW1lbnRDYWxsYmFjayA/IGFyZ3MuYXJndW1lbnRDYWxsYmFjayhkaXJ0eUluZGV4KSA6IGRpcnR5SW5kZXg7IC8vIEB0cy1pZ25vcmU6IEZvciBzb21lIHJlYXNvbiBUeXBlU2NyaXB0IGp1c3QgZG9uJ3Qgd2FudCB0byBtYXRjaCBpdCwgbm8gbWF0dGVyIGhvdyBoYXJkIHdlIHRyeS4gSSBjaGFsbGFuZ2UgeW91IHRvIHRyeSB0byByZW1vdmUgaXQhXG5cbiAgICByZXR1cm4gdmFsdWVzQXJyYXlbaW5kZXhdO1xuICB9O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTWF0Y2hGbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIHZhciB3aWR0aCA9IG9wdGlvbnMud2lkdGg7XG4gICAgdmFyIG1hdGNoUGF0dGVybiA9IHdpZHRoICYmIGFyZ3MubWF0Y2hQYXR0ZXJuc1t3aWR0aF0gfHwgYXJncy5tYXRjaFBhdHRlcm5zW2FyZ3MuZGVmYXVsdE1hdGNoV2lkdGhdO1xuICAgIHZhciBtYXRjaFJlc3VsdCA9IHN0cmluZy5tYXRjaChtYXRjaFBhdHRlcm4pO1xuXG4gICAgaWYgKCFtYXRjaFJlc3VsdCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdmFyIG1hdGNoZWRTdHJpbmcgPSBtYXRjaFJlc3VsdFswXTtcbiAgICB2YXIgcGFyc2VQYXR0ZXJucyA9IHdpZHRoICYmIGFyZ3MucGFyc2VQYXR0ZXJuc1t3aWR0aF0gfHwgYXJncy5wYXJzZVBhdHRlcm5zW2FyZ3MuZGVmYXVsdFBhcnNlV2lkdGhdO1xuICAgIHZhciBrZXkgPSBBcnJheS5pc0FycmF5KHBhcnNlUGF0dGVybnMpID8gZmluZEluZGV4KHBhcnNlUGF0dGVybnMsIGZ1bmN0aW9uIChwYXR0ZXJuKSB7XG4gICAgICByZXR1cm4gcGF0dGVybi50ZXN0KG1hdGNoZWRTdHJpbmcpO1xuICAgIH0pIDogZmluZEtleShwYXJzZVBhdHRlcm5zLCBmdW5jdGlvbiAocGF0dGVybikge1xuICAgICAgcmV0dXJuIHBhdHRlcm4udGVzdChtYXRjaGVkU3RyaW5nKTtcbiAgICB9KTtcbiAgICB2YXIgdmFsdWU7XG4gICAgdmFsdWUgPSBhcmdzLnZhbHVlQ2FsbGJhY2sgPyBhcmdzLnZhbHVlQ2FsbGJhY2soa2V5KSA6IGtleTtcbiAgICB2YWx1ZSA9IG9wdGlvbnMudmFsdWVDYWxsYmFjayA/IG9wdGlvbnMudmFsdWVDYWxsYmFjayh2YWx1ZSkgOiB2YWx1ZTtcbiAgICB2YXIgcmVzdCA9IHN0cmluZy5zbGljZShtYXRjaGVkU3RyaW5nLmxlbmd0aCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIHJlc3Q6IHJlc3RcbiAgICB9O1xuICB9O1xufVxuXG5mdW5jdGlvbiBmaW5kS2V5KG9iamVjdCwgcHJlZGljYXRlKSB7XG4gIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICBpZiAob2JqZWN0Lmhhc093blByb3BlcnR5KGtleSkgJiYgcHJlZGljYXRlKG9iamVjdFtrZXldKSkge1xuICAgICAgcmV0dXJuIGtleTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBmaW5kSW5kZXgoYXJyYXksIHByZWRpY2F0ZSkge1xuICBmb3IgKHZhciBrZXkgPSAwOyBrZXkgPCBhcnJheS5sZW5ndGg7IGtleSsrKSB7XG4gICAgaWYgKHByZWRpY2F0ZShhcnJheVtrZXldKSkge1xuICAgICAgcmV0dXJuIGtleTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTWF0Y2hQYXR0ZXJuRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKHN0cmluZykge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICB2YXIgbWF0Y2hSZXN1bHQgPSBzdHJpbmcubWF0Y2goYXJncy5tYXRjaFBhdHRlcm4pO1xuICAgIGlmICghbWF0Y2hSZXN1bHQpIHJldHVybiBudWxsO1xuICAgIHZhciBtYXRjaGVkU3RyaW5nID0gbWF0Y2hSZXN1bHRbMF07XG4gICAgdmFyIHBhcnNlUmVzdWx0ID0gc3RyaW5nLm1hdGNoKGFyZ3MucGFyc2VQYXR0ZXJuKTtcbiAgICBpZiAoIXBhcnNlUmVzdWx0KSByZXR1cm4gbnVsbDtcbiAgICB2YXIgdmFsdWUgPSBhcmdzLnZhbHVlQ2FsbGJhY2sgPyBhcmdzLnZhbHVlQ2FsbGJhY2socGFyc2VSZXN1bHRbMF0pIDogcGFyc2VSZXN1bHRbMF07XG4gICAgdmFsdWUgPSBvcHRpb25zLnZhbHVlQ2FsbGJhY2sgPyBvcHRpb25zLnZhbHVlQ2FsbGJhY2sodmFsdWUpIDogdmFsdWU7XG4gICAgdmFyIHJlc3QgPSBzdHJpbmcuc2xpY2UobWF0Y2hlZFN0cmluZy5sZW5ndGgpO1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICByZXN0OiByZXN0XG4gICAgfTtcbiAgfTtcbn0iLCJ2YXIgZm9ybWF0RGlzdGFuY2VMb2NhbGUgPSB7XG4gIGxlc3NUaGFuWFNlY29uZHM6IHtcbiAgICBvbmU6ICdsZXNzIHRoYW4gYSBzZWNvbmQnLFxuICAgIG90aGVyOiAnbGVzcyB0aGFuIHt7Y291bnR9fSBzZWNvbmRzJ1xuICB9LFxuICB4U2Vjb25kczoge1xuICAgIG9uZTogJzEgc2Vjb25kJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBzZWNvbmRzJ1xuICB9LFxuICBoYWxmQU1pbnV0ZTogJ2hhbGYgYSBtaW51dGUnLFxuICBsZXNzVGhhblhNaW51dGVzOiB7XG4gICAgb25lOiAnbGVzcyB0aGFuIGEgbWludXRlJyxcbiAgICBvdGhlcjogJ2xlc3MgdGhhbiB7e2NvdW50fX0gbWludXRlcydcbiAgfSxcbiAgeE1pbnV0ZXM6IHtcbiAgICBvbmU6ICcxIG1pbnV0ZScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gbWludXRlcydcbiAgfSxcbiAgYWJvdXRYSG91cnM6IHtcbiAgICBvbmU6ICdhYm91dCAxIGhvdXInLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IGhvdXJzJ1xuICB9LFxuICB4SG91cnM6IHtcbiAgICBvbmU6ICcxIGhvdXInLFxuICAgIG90aGVyOiAne3tjb3VudH19IGhvdXJzJ1xuICB9LFxuICB4RGF5czoge1xuICAgIG9uZTogJzEgZGF5JyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBkYXlzJ1xuICB9LFxuICBhYm91dFhXZWVrczoge1xuICAgIG9uZTogJ2Fib3V0IDEgd2VlaycsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0gd2Vla3MnXG4gIH0sXG4gIHhXZWVrczoge1xuICAgIG9uZTogJzEgd2VlaycsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gd2Vla3MnXG4gIH0sXG4gIGFib3V0WE1vbnRoczoge1xuICAgIG9uZTogJ2Fib3V0IDEgbW9udGgnLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IG1vbnRocydcbiAgfSxcbiAgeE1vbnRoczoge1xuICAgIG9uZTogJzEgbW9udGgnLFxuICAgIG90aGVyOiAne3tjb3VudH19IG1vbnRocydcbiAgfSxcbiAgYWJvdXRYWWVhcnM6IHtcbiAgICBvbmU6ICdhYm91dCAxIHllYXInLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IHllYXJzJ1xuICB9LFxuICB4WWVhcnM6IHtcbiAgICBvbmU6ICcxIHllYXInLFxuICAgIG90aGVyOiAne3tjb3VudH19IHllYXJzJ1xuICB9LFxuICBvdmVyWFllYXJzOiB7XG4gICAgb25lOiAnb3ZlciAxIHllYXInLFxuICAgIG90aGVyOiAnb3ZlciB7e2NvdW50fX0geWVhcnMnXG4gIH0sXG4gIGFsbW9zdFhZZWFyczoge1xuICAgIG9uZTogJ2FsbW9zdCAxIHllYXInLFxuICAgIG90aGVyOiAnYWxtb3N0IHt7Y291bnR9fSB5ZWFycydcbiAgfVxufTtcblxudmFyIGZvcm1hdERpc3RhbmNlID0gZnVuY3Rpb24gKHRva2VuLCBjb3VudCwgb3B0aW9ucykge1xuICB2YXIgcmVzdWx0O1xuICB2YXIgdG9rZW5WYWx1ZSA9IGZvcm1hdERpc3RhbmNlTG9jYWxlW3Rva2VuXTtcblxuICBpZiAodHlwZW9mIHRva2VuVmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZTtcbiAgfSBlbHNlIGlmIChjb3VudCA9PT0gMSkge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub25lO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub3RoZXIucmVwbGFjZSgne3tjb3VudH19JywgY291bnQudG9TdHJpbmcoKSk7XG4gIH1cblxuICBpZiAob3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy5hZGRTdWZmaXgpIHtcbiAgICBpZiAob3B0aW9ucy5jb21wYXJpc29uICYmIG9wdGlvbnMuY29tcGFyaXNvbiA+IDApIHtcbiAgICAgIHJldHVybiAnaW4gJyArIHJlc3VsdDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHJlc3VsdCArICcgYWdvJztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZm9ybWF0RGlzdGFuY2U7IiwiaW1wb3J0IGJ1aWxkRm9ybWF0TG9uZ0ZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkRm9ybWF0TG9uZ0ZuL2luZGV4LmpzXCI7XG52YXIgZGF0ZUZvcm1hdHMgPSB7XG4gIGZ1bGw6ICdFRUVFLCBNTU1NIGRvLCB5JyxcbiAgbG9uZzogJ01NTU0gZG8sIHknLFxuICBtZWRpdW06ICdNTU0gZCwgeScsXG4gIHNob3J0OiAnTU0vZGQveXl5eSdcbn07XG52YXIgdGltZUZvcm1hdHMgPSB7XG4gIGZ1bGw6ICdoOm1tOnNzIGEgenp6eicsXG4gIGxvbmc6ICdoOm1tOnNzIGEgeicsXG4gIG1lZGl1bTogJ2g6bW06c3MgYScsXG4gIHNob3J0OiAnaDptbSBhJ1xufTtcbnZhciBkYXRlVGltZUZvcm1hdHMgPSB7XG4gIGZ1bGw6IFwie3tkYXRlfX0gJ2F0JyB7e3RpbWV9fVwiLFxuICBsb25nOiBcInt7ZGF0ZX19ICdhdCcge3t0aW1lfX1cIixcbiAgbWVkaXVtOiAne3tkYXRlfX0sIHt7dGltZX19JyxcbiAgc2hvcnQ6ICd7e2RhdGV9fSwge3t0aW1lfX0nXG59O1xudmFyIGZvcm1hdExvbmcgPSB7XG4gIGRhdGU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiBkYXRlRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KSxcbiAgdGltZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IHRpbWVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogJ2Z1bGwnXG4gIH0pLFxuICBkYXRlVGltZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IGRhdGVUaW1lRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KVxufTtcbmV4cG9ydCBkZWZhdWx0IGZvcm1hdExvbmc7IiwidmFyIGZvcm1hdFJlbGF0aXZlTG9jYWxlID0ge1xuICBsYXN0V2VlazogXCInbGFzdCcgZWVlZSAnYXQnIHBcIixcbiAgeWVzdGVyZGF5OiBcIid5ZXN0ZXJkYXkgYXQnIHBcIixcbiAgdG9kYXk6IFwiJ3RvZGF5IGF0JyBwXCIsXG4gIHRvbW9ycm93OiBcIid0b21vcnJvdyBhdCcgcFwiLFxuICBuZXh0V2VlazogXCJlZWVlICdhdCcgcFwiLFxuICBvdGhlcjogJ1AnXG59O1xuXG52YXIgZm9ybWF0UmVsYXRpdmUgPSBmdW5jdGlvbiAodG9rZW4sIF9kYXRlLCBfYmFzZURhdGUsIF9vcHRpb25zKSB7XG4gIHJldHVybiBmb3JtYXRSZWxhdGl2ZUxvY2FsZVt0b2tlbl07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmb3JtYXRSZWxhdGl2ZTsiLCJpbXBvcnQgYnVpbGRMb2NhbGl6ZUZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkTG9jYWxpemVGbi9pbmRleC5qc1wiO1xudmFyIGVyYVZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ0InLCAnQSddLFxuICBhYmJyZXZpYXRlZDogWydCQycsICdBRCddLFxuICB3aWRlOiBbJ0JlZm9yZSBDaHJpc3QnLCAnQW5ubyBEb21pbmknXVxufTtcbnZhciBxdWFydGVyVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnMScsICcyJywgJzMnLCAnNCddLFxuICBhYmJyZXZpYXRlZDogWydRMScsICdRMicsICdRMycsICdRNCddLFxuICB3aWRlOiBbJzFzdCBxdWFydGVyJywgJzJuZCBxdWFydGVyJywgJzNyZCBxdWFydGVyJywgJzR0aCBxdWFydGVyJ11cbn07IC8vIE5vdGU6IGluIEVuZ2xpc2gsIHRoZSBuYW1lcyBvZiBkYXlzIG9mIHRoZSB3ZWVrIGFuZCBtb250aHMgYXJlIGNhcGl0YWxpemVkLlxuLy8gSWYgeW91IGFyZSBtYWtpbmcgYSBuZXcgbG9jYWxlIGJhc2VkIG9uIHRoaXMgb25lLCBjaGVjayBpZiB0aGUgc2FtZSBpcyB0cnVlIGZvciB0aGUgbGFuZ3VhZ2UgeW91J3JlIHdvcmtpbmcgb24uXG4vLyBHZW5lcmFsbHksIGZvcm1hdHRlZCBkYXRlcyBzaG91bGQgbG9vayBsaWtlIHRoZXkgYXJlIGluIHRoZSBtaWRkbGUgb2YgYSBzZW50ZW5jZSxcbi8vIGUuZy4gaW4gU3BhbmlzaCBsYW5ndWFnZSB0aGUgd2Vla2RheXMgYW5kIG1vbnRocyBzaG91bGQgYmUgaW4gdGhlIGxvd2VyY2FzZS5cblxudmFyIG1vbnRoVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnSicsICdGJywgJ00nLCAnQScsICdNJywgJ0onLCAnSicsICdBJywgJ1MnLCAnTycsICdOJywgJ0QnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnSmFuJywgJ0ZlYicsICdNYXInLCAnQXByJywgJ01heScsICdKdW4nLCAnSnVsJywgJ0F1ZycsICdTZXAnLCAnT2N0JywgJ05vdicsICdEZWMnXSxcbiAgd2lkZTogWydKYW51YXJ5JywgJ0ZlYnJ1YXJ5JywgJ01hcmNoJywgJ0FwcmlsJywgJ01heScsICdKdW5lJywgJ0p1bHknLCAnQXVndXN0JywgJ1NlcHRlbWJlcicsICdPY3RvYmVyJywgJ05vdmVtYmVyJywgJ0RlY2VtYmVyJ11cbn07XG52YXIgZGF5VmFsdWVzID0ge1xuICBuYXJyb3c6IFsnUycsICdNJywgJ1QnLCAnVycsICdUJywgJ0YnLCAnUyddLFxuICBzaG9ydDogWydTdScsICdNbycsICdUdScsICdXZScsICdUaCcsICdGcicsICdTYSddLFxuICBhYmJyZXZpYXRlZDogWydTdW4nLCAnTW9uJywgJ1R1ZScsICdXZWQnLCAnVGh1JywgJ0ZyaScsICdTYXQnXSxcbiAgd2lkZTogWydTdW5kYXknLCAnTW9uZGF5JywgJ1R1ZXNkYXknLCAnV2VkbmVzZGF5JywgJ1RodXJzZGF5JywgJ0ZyaWRheScsICdTYXR1cmRheSddXG59O1xudmFyIGRheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06ICdhJyxcbiAgICBwbTogJ3AnLFxuICAgIG1pZG5pZ2h0OiAnbWknLFxuICAgIG5vb246ICduJyxcbiAgICBtb3JuaW5nOiAnbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnZXZlbmluZycsXG4gICAgbmlnaHQ6ICduaWdodCdcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogJ0FNJyxcbiAgICBwbTogJ1BNJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ21vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnbmlnaHQnXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogJ2EubS4nLFxuICAgIHBtOiAncC5tLicsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgICBuaWdodDogJ25pZ2h0J1xuICB9XG59O1xudmFyIGZvcm1hdHRpbmdEYXlQZXJpb2RWYWx1ZXMgPSB7XG4gIG5hcnJvdzoge1xuICAgIGFtOiAnYScsXG4gICAgcG06ICdwJyxcbiAgICBtaWRuaWdodDogJ21pJyxcbiAgICBub29uOiAnbicsXG4gICAgbW9ybmluZzogJ2luIHRoZSBtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdpbiB0aGUgYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnaW4gdGhlIGV2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnYXQgbmlnaHQnXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06ICdBTScsXG4gICAgcG06ICdQTScsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdpbiB0aGUgbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnaW4gdGhlIGFmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2luIHRoZSBldmVuaW5nJyxcbiAgICBuaWdodDogJ2F0IG5pZ2h0J1xuICB9LFxuICB3aWRlOiB7XG4gICAgYW06ICdhLm0uJyxcbiAgICBwbTogJ3AubS4nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnaW4gdGhlIG1vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2luIHRoZSBhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdpbiB0aGUgZXZlbmluZycsXG4gICAgbmlnaHQ6ICdhdCBuaWdodCdcbiAgfVxufTtcblxudmFyIG9yZGluYWxOdW1iZXIgPSBmdW5jdGlvbiAoZGlydHlOdW1iZXIsIF9vcHRpb25zKSB7XG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpOyAvLyBJZiBvcmRpbmFsIG51bWJlcnMgZGVwZW5kIG9uIGNvbnRleHQsIGZvciBleGFtcGxlLFxuICAvLyBpZiB0aGV5IGFyZSBkaWZmZXJlbnQgZm9yIGRpZmZlcmVudCBncmFtbWF0aWNhbCBnZW5kZXJzLFxuICAvLyB1c2UgYG9wdGlvbnMudW5pdGAuXG4gIC8vXG4gIC8vIGB1bml0YCBjYW4gYmUgJ3llYXInLCAncXVhcnRlcicsICdtb250aCcsICd3ZWVrJywgJ2RhdGUnLCAnZGF5T2ZZZWFyJyxcbiAgLy8gJ2RheScsICdob3VyJywgJ21pbnV0ZScsICdzZWNvbmQnLlxuXG4gIHZhciByZW0xMDAgPSBudW1iZXIgJSAxMDA7XG5cbiAgaWYgKHJlbTEwMCA+IDIwIHx8IHJlbTEwMCA8IDEwKSB7XG4gICAgc3dpdGNoIChyZW0xMDAgJSAxMCkge1xuICAgICAgY2FzZSAxOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ3N0JztcblxuICAgICAgY2FzZSAyOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ25kJztcblxuICAgICAgY2FzZSAzOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ3JkJztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVtYmVyICsgJ3RoJztcbn07XG5cbnZhciBsb2NhbGl6ZSA9IHtcbiAgb3JkaW5hbE51bWJlcjogb3JkaW5hbE51bWJlcixcbiAgZXJhOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZXJhVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBxdWFydGVyOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogcXVhcnRlclZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBhcmd1bWVudENhbGxiYWNrOiBmdW5jdGlvbiAocXVhcnRlcikge1xuICAgICAgcmV0dXJuIHF1YXJ0ZXIgLSAxO1xuICAgIH1cbiAgfSksXG4gIG1vbnRoOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogbW9udGhWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIGRheTogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGRheVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5UGVyaW9kOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnLFxuICAgIGZvcm1hdHRpbmdWYWx1ZXM6IGZvcm1hdHRpbmdEYXlQZXJpb2RWYWx1ZXMsXG4gICAgZGVmYXVsdEZvcm1hdHRpbmdXaWR0aDogJ3dpZGUnXG4gIH0pXG59O1xuZXhwb3J0IGRlZmF1bHQgbG9jYWxpemU7IiwiaW1wb3J0IGJ1aWxkTWF0Y2hGbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZE1hdGNoRm4vaW5kZXguanNcIjtcbmltcG9ydCBidWlsZE1hdGNoUGF0dGVybkZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkTWF0Y2hQYXR0ZXJuRm4vaW5kZXguanNcIjtcbnZhciBtYXRjaE9yZGluYWxOdW1iZXJQYXR0ZXJuID0gL14oXFxkKykodGh8c3R8bmR8cmQpPy9pO1xudmFyIHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4gPSAvXFxkKy9pO1xudmFyIG1hdGNoRXJhUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL14oYnxhKS9pLFxuICBhYmJyZXZpYXRlZDogL14oYlxcLj9cXHM/Y1xcLj98YlxcLj9cXHM/Y1xcLj9cXHM/ZVxcLj98YVxcLj9cXHM/ZFxcLj98Y1xcLj9cXHM/ZVxcLj8pL2ksXG4gIHdpZGU6IC9eKGJlZm9yZSBjaHJpc3R8YmVmb3JlIGNvbW1vbiBlcmF8YW5ubyBkb21pbml8Y29tbW9uIGVyYSkvaVxufTtcbnZhciBwYXJzZUVyYVBhdHRlcm5zID0ge1xuICBhbnk6IFsvXmIvaSwgL14oYXxjKS9pXVxufTtcbnZhciBtYXRjaFF1YXJ0ZXJQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXlsxMjM0XS9pLFxuICBhYmJyZXZpYXRlZDogL15xWzEyMzRdL2ksXG4gIHdpZGU6IC9eWzEyMzRdKHRofHN0fG5kfHJkKT8gcXVhcnRlci9pXG59O1xudmFyIHBhcnNlUXVhcnRlclBhdHRlcm5zID0ge1xuICBhbnk6IFsvMS9pLCAvMi9pLCAvMy9pLCAvNC9pXVxufTtcbnZhciBtYXRjaE1vbnRoUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bamZtYXNvbmRdL2ksXG4gIGFiYnJldmlhdGVkOiAvXihqYW58ZmVifG1hcnxhcHJ8bWF5fGp1bnxqdWx8YXVnfHNlcHxvY3R8bm92fGRlYykvaSxcbiAgd2lkZTogL14oamFudWFyeXxmZWJydWFyeXxtYXJjaHxhcHJpbHxtYXl8anVuZXxqdWx5fGF1Z3VzdHxzZXB0ZW1iZXJ8b2N0b2Jlcnxub3ZlbWJlcnxkZWNlbWJlcikvaVxufTtcbnZhciBwYXJzZU1vbnRoUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogWy9eai9pLCAvXmYvaSwgL15tL2ksIC9eYS9pLCAvXm0vaSwgL15qL2ksIC9eai9pLCAvXmEvaSwgL15zL2ksIC9eby9pLCAvXm4vaSwgL15kL2ldLFxuICBhbnk6IFsvXmphL2ksIC9eZi9pLCAvXm1hci9pLCAvXmFwL2ksIC9ebWF5L2ksIC9eanVuL2ksIC9eanVsL2ksIC9eYXUvaSwgL15zL2ksIC9eby9pLCAvXm4vaSwgL15kL2ldXG59O1xudmFyIG1hdGNoRGF5UGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bc210d2ZdL2ksXG4gIHNob3J0OiAvXihzdXxtb3x0dXx3ZXx0aHxmcnxzYSkvaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKHN1bnxtb258dHVlfHdlZHx0aHV8ZnJpfHNhdCkvaSxcbiAgd2lkZTogL14oc3VuZGF5fG1vbmRheXx0dWVzZGF5fHdlZG5lc2RheXx0aHVyc2RheXxmcmlkYXl8c2F0dXJkYXkpL2lcbn07XG52YXIgcGFyc2VEYXlQYXR0ZXJucyA9IHtcbiAgbmFycm93OiBbL15zL2ksIC9ebS9pLCAvXnQvaSwgL153L2ksIC9edC9pLCAvXmYvaSwgL15zL2ldLFxuICBhbnk6IFsvXnN1L2ksIC9ebS9pLCAvXnR1L2ksIC9edy9pLCAvXnRoL2ksIC9eZi9pLCAvXnNhL2ldXG59O1xudmFyIG1hdGNoRGF5UGVyaW9kUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL14oYXxwfG1pfG58KGluIHRoZXxhdCkgKG1vcm5pbmd8YWZ0ZXJub29ufGV2ZW5pbmd8bmlnaHQpKS9pLFxuICBhbnk6IC9eKFthcF1cXC4/XFxzP21cXC4/fG1pZG5pZ2h0fG5vb258KGluIHRoZXxhdCkgKG1vcm5pbmd8YWZ0ZXJub29ufGV2ZW5pbmd8bmlnaHQpKS9pXG59O1xudmFyIHBhcnNlRGF5UGVyaW9kUGF0dGVybnMgPSB7XG4gIGFueToge1xuICAgIGFtOiAvXmEvaSxcbiAgICBwbTogL15wL2ksXG4gICAgbWlkbmlnaHQ6IC9ebWkvaSxcbiAgICBub29uOiAvXm5vL2ksXG4gICAgbW9ybmluZzogL21vcm5pbmcvaSxcbiAgICBhZnRlcm5vb246IC9hZnRlcm5vb24vaSxcbiAgICBldmVuaW5nOiAvZXZlbmluZy9pLFxuICAgIG5pZ2h0OiAvbmlnaHQvaVxuICB9XG59O1xudmFyIG1hdGNoID0ge1xuICBvcmRpbmFsTnVtYmVyOiBidWlsZE1hdGNoUGF0dGVybkZuKHtcbiAgICBtYXRjaFBhdHRlcm46IG1hdGNoT3JkaW5hbE51bWJlclBhdHRlcm4sXG4gICAgcGFyc2VQYXR0ZXJuOiBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuLFxuICAgIHZhbHVlQ2FsbGJhY2s6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHBhcnNlSW50KHZhbHVlLCAxMCk7XG4gICAgfVxuICB9KSxcbiAgZXJhOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRXJhUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZUVyYVBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgcXVhcnRlcjogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaFF1YXJ0ZXJQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlUXVhcnRlclBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55JyxcbiAgICB2YWx1ZUNhbGxiYWNrOiBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgIHJldHVybiBpbmRleCArIDE7XG4gICAgfVxuICB9KSxcbiAgbW9udGg6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hNb250aFBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VNb250aFBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgZGF5OiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRGF5UGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZURheVBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgZGF5UGVyaW9kOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRGF5UGVyaW9kUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICdhbnknLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRGF5UGVyaW9kUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pXG59O1xuZXhwb3J0IGRlZmF1bHQgbWF0Y2g7IiwiaW1wb3J0IGZvcm1hdERpc3RhbmNlIGZyb20gXCIuL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanNcIjtcbmltcG9ydCBmb3JtYXRMb25nIGZyb20gXCIuL19saWIvZm9ybWF0TG9uZy9pbmRleC5qc1wiO1xuaW1wb3J0IGZvcm1hdFJlbGF0aXZlIGZyb20gXCIuL19saWIvZm9ybWF0UmVsYXRpdmUvaW5kZXguanNcIjtcbmltcG9ydCBsb2NhbGl6ZSBmcm9tIFwiLi9fbGliL2xvY2FsaXplL2luZGV4LmpzXCI7XG5pbXBvcnQgbWF0Y2ggZnJvbSBcIi4vX2xpYi9tYXRjaC9pbmRleC5qc1wiO1xuXG4vKipcbiAqIEB0eXBlIHtMb2NhbGV9XG4gKiBAY2F0ZWdvcnkgTG9jYWxlc1xuICogQHN1bW1hcnkgRW5nbGlzaCBsb2NhbGUgKFVuaXRlZCBTdGF0ZXMpLlxuICogQGxhbmd1YWdlIEVuZ2xpc2hcbiAqIEBpc28tNjM5LTIgZW5nXG4gKiBAYXV0aG9yIFNhc2hhIEtvc3MgW0Brb3Nzbm9jb3JwXXtAbGluayBodHRwczovL2dpdGh1Yi5jb20va29zc25vY29ycH1cbiAqIEBhdXRob3IgTGVzaGEgS29zcyBbQGxlc2hha29zc117QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2xlc2hha29zc31cbiAqL1xudmFyIGxvY2FsZSA9IHtcbiAgY29kZTogJ2VuLVVTJyxcbiAgZm9ybWF0RGlzdGFuY2U6IGZvcm1hdERpc3RhbmNlLFxuICBmb3JtYXRMb25nOiBmb3JtYXRMb25nLFxuICBmb3JtYXRSZWxhdGl2ZTogZm9ybWF0UmVsYXRpdmUsXG4gIGxvY2FsaXplOiBsb2NhbGl6ZSxcbiAgbWF0Y2g6IG1hdGNoLFxuICBvcHRpb25zOiB7XG4gICAgd2Vla1N0YXJ0c09uOiAwXG4gICAgLyogU3VuZGF5ICovXG4gICAgLFxuICAgIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogMVxuICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgbG9jYWxlOyIsImltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpOyAvLyBDbG9uZSB0aGUgZGF0ZVxuXG4gIGlmIChhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHwgdHlwZW9mIGFyZ3VtZW50ID09PSAnb2JqZWN0JyAmJiBhcmdTdHIgPT09ICdbb2JqZWN0IERhdGVdJykge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudC5nZXRUaW1lKCkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudCA9PT0gJ251bWJlcicgfHwgYXJnU3RyID09PSAnW29iamVjdCBOdW1iZXJdJykge1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgU3RyaW5nXScpICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihcIlN0YXJ0aW5nIHdpdGggdjIuMC4wLWJldGEuMSBkYXRlLWZucyBkb2Vzbid0IGFjY2VwdCBzdHJpbmdzIGFzIGRhdGUgYXJndW1lbnRzLiBQbGVhc2UgdXNlIGBwYXJzZUlTT2AgdG8gcGFyc2Ugc3RyaW5ncy4gU2VlOiBodHRwczovL2dpdC5pby9manVsZVwiKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcblxuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHZpZXdCb3g9XFxcIjAgMCAzNiAzNlxcXCIgZmlsbD1cXFwibm9uZVxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIj48cGF0aCBkPVxcXCJNNiA0LjVIMzBMMzMgMTAuNVYzMEMzMyAzMC4zOTc4IDMyLjg0MiAzMC43Nzk0IDMyLjU2MDcgMzEuMDYwN0MzMi4yNzk0IDMxLjM0MiAzMS44OTc4IDMxLjUgMzEuNSAzMS41SDQuNUM0LjEwMjE4IDMxLjUgMy43MjA2NCAzMS4zNDIgMy40MzkzNCAzMS4wNjA3QzMuMTU4MDQgMzAuNzc5NCAzIDMwLjM5NzggMyAzMFYxMC41MDZMNiA0LjVaTTE5LjUgMjFWMTVIMTYuNVYyMUgxMkwxOCAyN0wyNCAyMUgxOS41Wk0yOS42NDYgMTAuNUwyOC4xNDYgNy41SDcuODU1NUw2LjM1NTUgMTAuNUgyOS42NDZaXFxcIiBmaWxsPVxcXCIjNDk1MDU3XFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB2aWV3Qm94PVxcXCIwIDAgMzAgMzFcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCI+PHBhdGggZD1cXFwiTTMuNzUgNS41SDI2LjI1VjhIMy43NVY1LjVaTTMuNzUgMTQuMjVIMjYuMjVWMTYuNzVIMy43NVYxNC4yNVpNMy43NSAyM0gyNi4yNVYyNS41SDMuNzVWMjNaXFxcIiBmaWxsPVxcXCIjNDk1MDU3XFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCI+PHBhdGggZD1cXFwiTTEyIDNDMTAuOSAzIDEwIDMuOSAxMCA1QzEwIDYuMSAxMC45IDcgMTIgN0MxMy4xIDcgMTQgNi4xIDE0IDVDMTQgMy45IDEzLjEgMyAxMiAzWk0xMiAxN0MxMC45IDE3IDEwIDE3LjkgMTAgMTlDMTAgMjAuMSAxMC45IDIxIDEyIDIxQzEzLjEgMjEgMTQgMjAuMSAxNCAxOUMxNCAxNy45IDEzLjEgMTcgMTIgMTdaTTEyIDEwQzEwLjkgMTAgMTAgMTAuOSAxMCAxMkMxMCAxMy4xIDEwLjkgMTQgMTIgMTRDMTMuMSAxNCAxNCAxMy4xIDE0IDEyQzE0IDEwLjkgMTMuMSAxMCAxMiAxMFpcXFwiIGZpbGw9XFxcIiMwOTEyMUZcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHZpZXdCb3g9XFxcIjAgMCAzNiAzNlxcXCIgZmlsbD1cXFwibm9uZVxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIj48cGF0aCBkPVxcXCJNMjUuNSA0LjVIMzEuNUMzMS44OTc4IDQuNSAzMi4yNzk0IDQuNjU4MDQgMzIuNTYwNyA0LjkzOTM0QzMyLjg0MiA1LjIyMDY0IDMzIDUuNjAyMTcgMzMgNlYzMEMzMyAzMC4zOTc4IDMyLjg0MiAzMC43Nzk0IDMyLjU2MDcgMzEuMDYwN0MzMi4yNzk0IDMxLjM0MiAzMS44OTc4IDMxLjUgMzEuNSAzMS41SDQuNUM0LjEwMjE4IDMxLjUgMy43MjA2NCAzMS4zNDIgMy40MzkzNCAzMS4wNjA3QzMuMTU4MDQgMzAuNzc5NCAzIDMwLjM5NzggMyAzMFY2QzMgNS42MDIxNyAzLjE1ODA0IDUuMjIwNjQgMy40MzkzNCA0LjkzOTM0QzMuNzIwNjQgNC42NTgwNCA0LjEwMjE4IDQuNSA0LjUgNC41SDEwLjVWMS41SDEzLjVWNC41SDIyLjVWMS41SDI1LjVWNC41Wk02IDEzLjVWMjguNUgzMFYxMy41SDZaTTkgMTkuNUgxNi41VjI1LjVIOVYxOS41WlxcXCIgZmlsbD1cXFwiIzQ5NTA1N1xcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgdmlld0JveD1cXFwiMCAwIDMwIDMwXFxcIiBmaWxsPVxcXCJub25lXFxcIiB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiPjxwYXRoIGQ9XFxcIk0xMi44NTcxIDEyLjg1NzFWMEgxNy4xNDI5VjEyLjg1NzFIMzBWMTcuMTQyOUgxNy4xNDI5VjMwSDEyLjg1NzFWMTcuMTQyOUgwVjEyLjg1NzFIMTIuODU3MVpcXFwiIGZpbGw9XFxcIiM0OTUwNTdcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHZpZXdCb3g9XFxcIjAgMCAzNiAzNlxcXCIgZmlsbD1cXFwibm9uZVxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIj48Y2lyY2xlIGN4PVxcXCIxOFxcXCIgY3k9XFxcIjE4XFxcIiByPVxcXCIxOFxcXCIgZmlsbD1cXFwiI0M0QzRDNFxcXCI+PC9jaXJjbGU+PHBhdGggZD1cXFwiTTE1LjMzMzMgMjIuMjI5M0wyNy41ODkzIDkuOTcyTDI5LjQ3NiAxMS44NTczTDE1LjMzMzMgMjZMNi44NDc5OSAxNy41MTQ3TDguNzMzMzMgMTUuNjI5M0wxNS4zMzMzIDIyLjIyOTNaXFxcIiBmaWxsPVxcXCJ3aGl0ZVxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgdmlld0JveD1cXFwiMCAwIDM2IDM2XFxcIiBmaWxsPVxcXCJub25lXFxcIiB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiPjxjaXJjbGUgY3g9XFxcIjE4XFxcIiBjeT1cXFwiMThcXFwiIHI9XFxcIjE4XFxcIiBmaWxsPVxcXCIjRkY2QjZCXFxcIj48L2NpcmNsZT48Y2lyY2xlIGN4PVxcXCIxOFxcXCIgY3k9XFxcIjE4XFxcIiByPVxcXCIxNVxcXCIgZmlsbD1cXFwiI0ZGRTNFM1xcXCI+PC9jaXJjbGU+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB2aWV3Qm94PVxcXCIwIDAgMzYgMzZcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCI+PGNpcmNsZSBjeD1cXFwiMThcXFwiIGN5PVxcXCIxOFxcXCIgcj1cXFwiMThcXFwiIGZpbGw9XFxcIiNGQ0M0MTlcXFwiPjwvY2lyY2xlPjxjaXJjbGUgY3g9XFxcIjE4XFxcIiBjeT1cXFwiMThcXFwiIHI9XFxcIjE1XFxcIiBmaWxsPVxcXCIjRkZFQzk5XFxcIj48L2NpcmNsZT48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHZpZXdCb3g9XFxcIjAgMCAzNiAzNlxcXCIgZmlsbD1cXFwibm9uZVxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIj48cGF0aCBmaWxsLXJ1bGU9XFxcImV2ZW5vZGRcXFwiIGNsaXAtcnVsZT1cXFwiZXZlbm9kZFxcXCIgZD1cXFwiTTE4IDM2QzI3Ljk0MTEgMzYgMzYgMjcuOTQxMSAzNiAxOEMzNiA4LjA1ODg3IDI3Ljk0MTEgMCAxOCAwQzguMDU4ODcgMCAwIDguMDU4ODcgMCAxOEMwIDI3Ljk0MTEgOC4wNTg4NyAzNiAxOCAzNlpNMTggMzNDMjYuMjg0MyAzMyAzMyAyNi4yODQzIDMzIDE4QzMzIDkuNzE1NzMgMjYuMjg0MyAzIDE4IDNDOS43MTU3MyAzIDMgOS43MTU3MyAzIDE4QzMgMjYuMjg0MyA5LjcxNTczIDMzIDE4IDMzWlxcXCIgZmlsbD1cXFwiI0NFRDREQVxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgdmlld0JveD1cXFwiMCAwIDM2IDM2XFxcIiBmaWxsPVxcXCJub25lXFxcIiB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiPjxjaXJjbGUgY3g9XFxcIjE4XFxcIiBjeT1cXFwiMThcXFwiIHI9XFxcIjE4XFxcIiBmaWxsPVxcXCIjOTREODJEXFxcIj48L2NpcmNsZT48Y2lyY2xlIGN4PVxcXCIxOFxcXCIgY3k9XFxcIjE4XFxcIiByPVxcXCIxNVxcXCIgZmlsbD1cXFwiI0U5RkFDOFxcXCI+PC9jaXJjbGU+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB2aWV3Qm94PVxcXCIwIDAgMzYgMzZcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCI+PHBhdGggZD1cXFwiTTI1LjUgNC41SDMxLjVDMzEuODk3OCA0LjUgMzIuMjc5NCA0LjY1ODAzIDMyLjU2MDcgNC45MzkzNEMzMi44NDIgNS4yMjA2NCAzMyA1LjYwMjE3IDMzIDZWMzBDMzMgMzAuMzk3OCAzMi44NDIgMzAuNzc5NCAzMi41NjA3IDMxLjA2MDdDMzIuMjc5NCAzMS4zNDIgMzEuODk3OCAzMS41IDMxLjUgMzEuNUg0LjVDNC4xMDIxOCAzMS41IDMuNzIwNjQgMzEuMzQyIDMuNDM5MzQgMzEuMDYwN0MzLjE1ODA0IDMwLjc3OTQgMyAzMC4zOTc4IDMgMzBWNkMzIDUuNjAyMTcgMy4xNTgwNCA1LjIyMDY0IDMuNDM5MzQgNC45MzkzNEMzLjcyMDY0IDQuNjU4MDMgNC4xMDIxOCA0LjUgNC41IDQuNUgxMC41VjEuNUgxMy41VjQuNUgyMi41VjEuNUgyNS41VjQuNVpNNiAxMy41VjI4LjVIMzBWMTMuNUg2Wk05IDE2LjVIMTJWMTkuNUg5VjE2LjVaTTkgMjIuNUgxMlYyNS41SDlWMjIuNVpNMTUgMTYuNUgyN1YxOS41SDE1VjE2LjVaTTE1IDIyLjVIMjIuNVYyNS41SDE1VjIyLjVaXFxcIiBmaWxsPVxcXCIjNDk1MDU3XFxcIj48L3BhdGg+PC9zdmc+XCIiLCJjb25zdCBjb2xvcnMgPSBbXG4gICcjZmY2YjZiJyxcbiAgJyNmMDY1OTUnLFxuICAnI2NjNWRlOCcsXG4gICcjODQ1ZWY3JyxcbiAgJyM1YzdjZmEnLFxuICAnIzMzOWFmMCcsXG4gICcjMjJiOGNmJyxcbiAgJyMyMGM5OTcnLFxuICAnIzUxY2Y2NicsXG4gICcjOTRkODJkJyxcbiAgJyNmY2M0MTknLFxuICAnI2ZmOTIyYicsXG5dXG5cbmNvbnN0IENvbG9yUGlja2VyID0gKCgpID0+IHtcbiAgbGV0IGN1cnJlbnRUYXJnZXQgPSBudWxsXG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBlbGVtZW50LmNsYXNzTmFtZSA9ICdjb2xvci1waWNrZXIgaGlkZGVuJ1xuXG4gIGNvbnN0IGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKVxuICBoMy5jbGFzc05hbWUgPSAnY29sb3ItcGlja2VyX190aXRsZSdcbiAgaDMudGV4dENvbnRlbnQgPSAnUGljayBhIGNvbG9yOidcblxuICBjb25zdCBjb2xvckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGNvbG9yQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdjb2xvci1waWNrZXJfX2NvbG9ycydcblxuICBmb3IgKGxldCBjb2xvciBvZiBjb2xvcnMpIHtcbiAgICBjb25zdCBjb2xvckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbG9yRWxlbWVudC5jbGFzc05hbWUgPSAnY29sb3ItcGlja2VyX19jb2xvcidcbiAgICBjb2xvckVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3JcblxuICAgIGNvbG9yRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGlmIChjdXJyZW50VGFyZ2V0ICE9IG51bGwpIHtcbiAgICAgICAgY3VycmVudFRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvclxuICAgICAgICBjdXJyZW50VGFyZ2V0LnNldEF0dHJpYnV0ZSgnZGF0YS1jb2xvcicsIGNvbG9yKVxuICAgICAgfVxuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICAgIH0pXG4gICAgY29sb3JDb250YWluZXIuYXBwZW5kQ2hpbGQoY29sb3JFbGVtZW50KVxuICB9XG5cbiAgY29uc3QgZ2VuZXJhdGUgPSAodGFyZ2V0LCB4LCB5KSA9PiB7XG4gICAgY3VycmVudFRhcmdldCA9IHRhcmdldFxuICAgIGVsZW1lbnQuc3R5bGUudG9wID0gYCR7eX1weGBcbiAgICBlbGVtZW50LnN0eWxlLmxlZnQgPSBgJHt4fXB4YFxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJylcbiAgfVxuXG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQoaDMpXG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQoY29sb3JDb250YWluZXIpXG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQgIT0gZWxlbWVudCAmJiAhZWxlbWVudC5jb250YWlucyhlLnRhcmdldCkpXG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gIH0pXG5cbiAgcmV0dXJuIHsgZWxlbWVudCwgZ2VuZXJhdGUgfVxufSkoKVxuXG5leHBvcnQgZGVmYXVsdCBDb2xvclBpY2tlclxuIiwiY29uc3QgRGl2aWRlciA9ICgpID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hyJylcbiAgZWxlbWVudC5jbGFzc05hbWUgPSAnZGl2aWRlcidcblxuICByZXR1cm4gZWxlbWVudFxufVxuXG5leHBvcnQgZGVmYXVsdCBEaXZpZGVyXG4iLCJjb25zdCBFbXB0eU1lc3NhZ2UgPSAodGV4dCkgPT4ge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gIGVsZW1lbnQuY2xhc3NOYW1lID0gJ2VtcHR5LW1lc3NhZ2UnXG4gIGVsZW1lbnQudGV4dENvbnRlbnQgPSB0ZXh0XG4gIHJldHVybiBlbGVtZW50XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVtcHR5TWVzc2FnZVxuIiwiaW1wb3J0IE1lbnUgZnJvbSAnLi9tZW51L01lbnUnXG5pbXBvcnQgVGFza3NWaWV3IGZyb20gJy4vdGFzay9UYXNrc1ZpZXcnXG5pbXBvcnQgTWVudU9wdGlvbnMgZnJvbSAnLi9tZW51L29wdGlvbi9NZW51T3B0aW9ucydcblxuY29uc3QgTWFpbiA9ICgoKSA9PiB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBtYWluLmNsYXNzTmFtZSA9ICdtYWluJ1xuXG4gIG1haW4uYXBwZW5kQ2hpbGQoTWVudS5lbGVtZW50KVxuICBtYWluLmFwcGVuZENoaWxkKFRhc2tzVmlldy5lbGVtZW50KVxuICBNZW51T3B0aW9ucy5tZW51T3B0aW9uc1swXS5lbGVtZW50LmNsaWNrKClcblxuICByZXR1cm4gbWFpblxufSkoKVxuXG5leHBvcnQgZGVmYXVsdCBNYWluXG4iLCJpbXBvcnQgTWVudUljb24gZnJvbSAnLi9pY29ucy9NZW51SWNvbidcbmltcG9ydCBBZGRJY29uIGZyb20gJy4vaWNvbnMvQWRkSWNvbidcbmltcG9ydCBNZW51IGZyb20gJy4vbWVudS9NZW51J1xuaW1wb3J0IE5ld1Rhc2tGb3JtIGZyb20gJy4vdGFzay9OZXdUYXNrRm9ybSdcblxuY29uc3QgTmF2YmFyID0gKCgpID0+IHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJylcbiAgaGVhZGVyLmNsYXNzTmFtZSA9ICdoZWFkZXInXG5cbiAgY29uc3QgbmF2QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2JylcbiAgbmF2QmFyLmNsYXNzTmFtZSA9ICduYXZiYXInXG5cbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gIHRpdGxlLmNsYXNzTmFtZSA9ICdoZWFkZXJfX3RpdGxlJ1xuICB0aXRsZS50ZXh0Q29udGVudCA9ICdUb2RvQXBwJ1xuXG4gIGNvbnN0IG1lbnVJY29uID0gTWVudUljb24oJ2hlYWRlcl9faWNvbiBoZWFkZXJfX2ljb24tLW1lbnUnKVxuICBtZW51SWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIE1lbnUudG9nZ2xlSGlkZSlcblxuICBjb25zdCBhZGRJY29uID0gQWRkSWNvbignaGVhZGVyX19pY29uIGhlYWRlcl9faWNvbi0tYWRkJylcbiAgYWRkSWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IE5ld1Rhc2tGb3JtLnVwZGF0ZUZvcm0obnVsbCkpXG5cbiAgbmF2QmFyLmFwcGVuZENoaWxkKG1lbnVJY29uKVxuICBuYXZCYXIuYXBwZW5kQ2hpbGQodGl0bGUpXG4gIG5hdkJhci5hcHBlbmRDaGlsZChhZGRJY29uKVxuICBoZWFkZXIuYXBwZW5kQ2hpbGQobmF2QmFyKVxuXG4gIHJldHVybiBoZWFkZXJcbn0pKClcblxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyXG4iLCJpbXBvcnQgSWNvbiBmcm9tICcuL0ljb24nXG5pbXBvcnQgQWRkSWNvblN2ZyBmcm9tICcuLi8uLi8uLi9hc3NldHMvaWNvbnMvcGx1cy5zdmcnXG5cbmNvbnN0IEFkZEljb24gPSAoY2xhc3NlcykgPT4gSWNvbihBZGRJY29uU3ZnLCBjbGFzc2VzKVxuZXhwb3J0IGRlZmF1bHQgQWRkSWNvblxuIiwiY29uc3QgSWNvbiA9IChzdmcsIGNsYXNzZXMpID0+IHtcbiAgY29uc3Qgc3ZnQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgc3ZnQ29udGFpbmVyLmNsYXNzTmFtZSA9IGNsYXNzZXNcbiAgc3ZnQ29udGFpbmVyLmlubmVySFRNTCA9IHN2Z1xuXG4gIHJldHVybiBzdmdDb250YWluZXJcbn1cblxuZXhwb3J0IGRlZmF1bHQgSWNvblxuIiwiaW1wb3J0IEljb24gZnJvbSAnLi9JY29uJ1xuaW1wb3J0IEluYm94SWNvblN2ZyBmcm9tICcuLi8uLi8uLi9hc3NldHMvaWNvbnMvaW5ib3guc3ZnJ1xuXG5jb25zdCBJbmJveEljb24gPSAoY2xhc3NlcykgPT4gSWNvbihJbmJveEljb25TdmcsIGNsYXNzZXMpXG5leHBvcnQgZGVmYXVsdCBJbmJveEljb25cbiIsImltcG9ydCBJY29uIGZyb20gJy4vSWNvbidcbmltcG9ydCBNZW51SWNvblN2ZyBmcm9tICcuLi8uLi8uLi9hc3NldHMvaWNvbnMvbWVudS5zdmcnXG5cbmNvbnN0IE1lbnVJY29uID0gKGNsYXNzZXMpID0+IEljb24oTWVudUljb25TdmcsIGNsYXNzZXMpXG5leHBvcnQgZGVmYXVsdCBNZW51SWNvblxuIiwiaW1wb3J0IEljb24gZnJvbSAnLi9JY29uJ1xuaW1wb3J0IE1vcmVJY29uU3ZnIGZyb20gJy4uLy4uLy4uL2Fzc2V0cy9pY29ucy9tb3JlLnN2ZydcblxuY29uc3QgTW9yZUljb24gPSAoY2xhc3NlcykgPT4gSWNvbihNb3JlSWNvblN2ZywgY2xhc3NlcylcbmV4cG9ydCBkZWZhdWx0IE1vcmVJY29uXG4iLCJpbXBvcnQgSWNvbiBmcm9tICcuL0ljb24nXG5pbXBvcnQgTmV4dERheXNJY29uU3ZnIGZyb20gJy4uLy4uLy4uL2Fzc2V0cy9pY29ucy9uZXh0LTctZGF5cy5zdmcnXG5cbmNvbnN0IE5leHREYXlzSWNvbiA9IChjbGFzc2VzKSA9PiBJY29uKE5leHREYXlzSWNvblN2ZywgY2xhc3NlcylcbmV4cG9ydCBkZWZhdWx0IE5leHREYXlzSWNvblxuIiwiaW1wb3J0IEljb24gZnJvbSAnLi9JY29uJ1xuaW1wb3J0IERvbmVJY29uU3ZnIGZyb20gJy4uLy4uLy4uL2Fzc2V0cy9pY29ucy90YXNrcy9kb25lLnN2ZydcbmltcG9ydCBOb25lSWNvblN2ZyBmcm9tICcuLi8uLi8uLi9hc3NldHMvaWNvbnMvdGFza3Mvbm9uZS5zdmcnXG5pbXBvcnQgU21hbGxJY29uU3ZnIGZyb20gJy4uLy4uLy4uL2Fzc2V0cy9pY29ucy90YXNrcy9zbWFsbC5zdmcnXG5pbXBvcnQgTWVkaXVtSWNvblN2ZyBmcm9tICcuLi8uLi8uLi9hc3NldHMvaWNvbnMvdGFza3MvbWVkaXVtLnN2ZydcbmltcG9ydCBIaWdoSWNvblN2ZyBmcm9tICcuLi8uLi8uLi9hc3NldHMvaWNvbnMvdGFza3MvaGlnaC5zdmcnXG5cbmNvbnN0IGljb25zID0ge1xuICBkb25lOiBEb25lSWNvblN2ZyxcbiAgbm9uZTogTm9uZUljb25TdmcsXG4gIGxvdzogU21hbGxJY29uU3ZnLFxuICBtZWRpdW06IE1lZGl1bUljb25TdmcsXG4gIGhpZ2g6IEhpZ2hJY29uU3ZnLFxufVxuXG5jb25zdCBUYXNrU3RhdHVzSWNvbiA9ICh0eXBlLCBjbGFzc2VzKSA9PiBJY29uKGljb25zW3R5cGVdLCBjbGFzc2VzKVxuXG5leHBvcnQgZGVmYXVsdCBUYXNrU3RhdHVzSWNvblxuIiwiaW1wb3J0IEljb24gZnJvbSAnLi9JY29uJ1xuaW1wb3J0IFRvZGF5SWNvblN2ZyBmcm9tICcuLi8uLi8uLi9hc3NldHMvaWNvbnMvdG9kYXkuc3ZnJ1xuXG5jb25zdCBUb2RheUljb24gPSAoY2xhc3NlcykgPT4gSWNvbihUb2RheUljb25TdmcsIGNsYXNzZXMpXG5leHBvcnQgZGVmYXVsdCBUb2RheUljb25cbiIsImNvbnN0IEN1cnJlbnRNZW51T3B0aW9uID0gKCgpID0+IHtcbiAgbGV0IGVsZW1lbnQgPSBudWxsXG5cbiAgY29uc3QgZ2V0RWxlbWVudCA9ICgpID0+IGVsZW1lbnRcbiAgY29uc3Qgc2V0RWxlbWVudCA9IChuZXdFbGVtZW50KSA9PiAoZWxlbWVudCA9IG5ld0VsZW1lbnQpXG5cbiAgcmV0dXJuIHsgZ2V0RWxlbWVudCwgc2V0RWxlbWVudCB9XG59KSgpXG5cbmV4cG9ydCBkZWZhdWx0IEN1cnJlbnRNZW51T3B0aW9uXG4iLCJpbXBvcnQgTWVudU9wdGlvbnMgZnJvbSAnLi9vcHRpb24vTWVudU9wdGlvbnMnXG5pbXBvcnQgTWVudVRhZ3MgZnJvbSAnLi90YWcvTWVudVRhZ3MnXG5pbXBvcnQgRGl2aWRlciBmcm9tICcuLi9EaXZpZGVyJ1xuaW1wb3J0IE1lbnVQcmlvcml0aWVzIGZyb20gJy4vcHJpb3JpdHkvTWVudVByaW9yaXRpZXMnXG5pbXBvcnQgVGFza3MgZnJvbSAnLi4vLi4vZGF0YS90YXNrcydcbmltcG9ydCBDdXJyZW50TWVudU9wdGlvbiBmcm9tICcuL0N1cnJlbnRNZW51T3B0aW9uJ1xuXG5jb25zdCBNZW51ID0gKCgpID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2FzaWRlJylcbiAgZWxlbWVudC5jbGFzc05hbWUgPSAnbWVudSdcblxuICBlbGVtZW50LmFwcGVuZENoaWxkKE1lbnVPcHRpb25zLmVsZW1lbnQpXG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQoRGl2aWRlcigpKVxuICBlbGVtZW50LmFwcGVuZENoaWxkKE1lbnVUYWdzLmVsZW1lbnQpXG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQoRGl2aWRlcigpKVxuICBlbGVtZW50LmFwcGVuZENoaWxkKE1lbnVQcmlvcml0aWVzLmVsZW1lbnQpXG5cbiAgY29uc3QgY2xlYW5BY3RpdmVzID0gKCkgPT4ge1xuICAgIE1lbnVUYWdzLmNsZWFuQWN0aXZlcygpXG4gICAgZm9yIChsZXQgb3B0aW9uIG9mIE1lbnVPcHRpb25zLm1lbnVPcHRpb25zKSB7XG4gICAgICBvcHRpb24ucmVtb3ZlQWN0aXZlQ2xhc3MoKVxuICAgIH1cblxuICAgIGZvciAobGV0IHByaW9yaXR5IG9mIE1lbnVQcmlvcml0aWVzLnByaW9yaXR5RWxlbWVudHMpIHtcbiAgICAgIHByaW9yaXR5LnJlbW92ZUFjdGl2ZUNsYXNzKClcbiAgICB9XG4gIH1cblxuICBjb25zdCB1cGRhdGVUYXNrcyA9ICgpID0+IHtcbiAgICBjb25zdCB0YXNrcyA9IFRhc2tzLmdldFNvcnRlZFRhc2tzKClcblxuICAgIE1lbnVPcHRpb25zLnVwZGF0ZVRhc2tzKHRhc2tzKVxuICAgIE1lbnVUYWdzLnVwZGF0ZVRhc2tzKHRhc2tzKVxuICAgIE1lbnVQcmlvcml0aWVzLnVwZGF0ZVRhc2tzKHRhc2tzKVxuXG4gICAgY29uc3QgY3VycmVudE1lbnVPcHRpb24gPSBDdXJyZW50TWVudU9wdGlvbi5nZXRFbGVtZW50KClcbiAgICBpZiAoY3VycmVudE1lbnVPcHRpb24pIGN1cnJlbnRNZW51T3B0aW9uLmNsaWNrKClcbiAgfVxuXG4gIGNvbnN0IHRvZ2dsZUhpZGUgPSAoKSA9PiB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKVxuICB9XG5cbiAgcmV0dXJuIHsgZWxlbWVudCwgdG9nZ2xlSGlkZSwgY2xlYW5BY3RpdmVzLCB1cGRhdGVUYXNrcyB9XG59KSgpXG5cbmV4cG9ydCBkZWZhdWx0IE1lbnVcbiIsImNvbnN0IE1lbnVUaXRsZSA9ICh0aXRsZSkgPT4ge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKVxuICBlbGVtZW50LmNsYXNzTmFtZSA9ICdtZW51X190aXRsZSdcbiAgZWxlbWVudC50ZXh0Q29udGVudCA9IHRpdGxlXG5cbiAgcmV0dXJuIGVsZW1lbnRcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWVudVRpdGxlXG4iLCJpbXBvcnQgVGFza3NWaWV3IGZyb20gJy4uLy4uL3Rhc2svVGFza3NWaWV3J1xuaW1wb3J0IEN1cnJlbnRNZW51T3B0aW9uIGZyb20gJy4uL0N1cnJlbnRNZW51T3B0aW9uJ1xuXG5jb25zdCBNZW51T3B0aW9uID0gKGljb24sIHRpdGxlLCB0YXNrcykgPT4ge1xuICBsZXQgc29ydGVkVGFza3MgPSB0YXNrc1xuXG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBlbGVtZW50LmNsYXNzTmFtZSA9ICdtZW51X19vcHRpb24nXG5cbiAgY29uc3QgdGl0bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKVxuICB0aXRsZUVsZW1lbnQuY2xhc3NOYW1lID0gJ21lbnVfX29wdGlvbl9fdGl0bGUnXG4gIHRpdGxlRWxlbWVudC50ZXh0Q29udGVudCA9IHRpdGxlXG5cbiAgY29uc3QgYWRkQWN0aXZlQ2xhc3MgPSAoKSA9PiB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdtZW51X19vcHRpb24tLWFjdGl2ZScpXG4gIH1cblxuICBjb25zdCByZW1vdmVBY3RpdmVDbGFzcyA9ICgpID0+IHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ21lbnVfX29wdGlvbi0tYWN0aXZlJylcbiAgfVxuXG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQoaWNvbilcbiAgZWxlbWVudC5hcHBlbmRDaGlsZCh0aXRsZUVsZW1lbnQpXG5cbiAgY29uc3QgYWRkQ2xpY2tFdmVudCA9IChjbGlja0V2ZW50KSA9PiB7XG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgICAgY2xpY2tFdmVudCgpXG4gICAgICBUYXNrc1ZpZXcuZ2VuZXJhdGVUYXNrcyh0aXRsZSwgLTEsIHNvcnRlZFRhc2tzKVxuICAgICAgQ3VycmVudE1lbnVPcHRpb24uc2V0RWxlbWVudChlbGVtZW50KVxuICAgIH0pXG4gIH1cblxuICBjb25zdCB1cGRhdGVUYXNrcyA9ICh1cGRhdGVkVGFza3MpID0+IChzb3J0ZWRUYXNrcyA9IHVwZGF0ZWRUYXNrcylcblxuICByZXR1cm4ge1xuICAgIGVsZW1lbnQsXG4gICAgYWRkQWN0aXZlQ2xhc3MsXG4gICAgcmVtb3ZlQWN0aXZlQ2xhc3MsXG4gICAgYWRkQ2xpY2tFdmVudCxcbiAgICB1cGRhdGVUYXNrcyxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNZW51T3B0aW9uXG4iLCJpbXBvcnQgSW5ib3hJY29uIGZyb20gJy4uLy4uL2ljb25zL0luYm94SWNvbidcbmltcG9ydCBUb2RheUljb24gZnJvbSAnLi4vLi4vaWNvbnMvVG9kYXlJY29uJ1xuaW1wb3J0IE5leHREYXlzSWNvbiBmcm9tICcuLi8uLi9pY29ucy9OZXh0RGF5c0ljb24nXG5pbXBvcnQgTWVudU9wdGlvbiBmcm9tICcuL01lbnVPcHRpb24nXG5pbXBvcnQgTWVudSBmcm9tICcuLi9NZW51J1xuaW1wb3J0IFRhc2tzIGZyb20gJy4uLy4uLy4uL2RhdGEvdGFza3MnXG5cbmNvbnN0IE1lbnVPcHRpb25zID0gKCgpID0+IHtcbiAgY29uc3QgaWNvbkNsYXNzID0gJ21lbnVfX29wdGlvbl9faWNvbidcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cbiAgY29uc3QgZmlsdGVyRnVuY3Rpb25zID0gW1xuICAgICh1cGRhdGVkVGFza3MpID0+XG4gICAgICB1cGRhdGVkVGFza3MuZmlsdGVyKFxuICAgICAgICAodGFzaykgPT4gdGFzay50YWdJZCA8IDAgJiYgdGFzay5wcmlvcml0eUlkIDwgMCAmJiB0YXNrLmR1ZURhdGUgPT0gbnVsbFxuICAgICAgKSxcbiAgICAodXBkYXRlZFRhc2tzKSA9PlxuICAgICAgdXBkYXRlZFRhc2tzLmZpbHRlcigodGFzaykgPT4ge1xuICAgICAgICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKClcbiAgICAgICAgY3VycmVudERhdGUuc2V0SG91cnMoMCwgMCwgMCwgMClcbiAgICAgICAgcmV0dXJuIHRhc2suZHVlRGF0ZSAmJiB0YXNrLmR1ZURhdGUuZ2V0RGF0ZSgpIDw9IGN1cnJlbnREYXRlLmdldERhdGUoKVxuICAgICAgfSksXG4gICAgKHVwZGF0ZWRUYXNrcykgPT5cbiAgICAgIHVwZGF0ZWRUYXNrcy5maWx0ZXIoKHRhc2spID0+IHtcbiAgICAgICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSgpXG4gICAgICAgIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSArIDcpXG4gICAgICAgIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMClcblxuICAgICAgICByZXR1cm4gdGFzay5kdWVEYXRlICYmIHRhc2suZHVlRGF0ZS5nZXREYXRlKCkgPD0gZGF0ZS5nZXREYXRlKClcbiAgICAgIH0pLFxuICBdXG5cbiAgbGV0IHRhc2tzID0gVGFza3MuZ2V0U29ydGVkVGFza3MoKVxuICBjb25zdCBtZW51T3B0aW9ucyA9IFtcbiAgICBNZW51T3B0aW9uKEluYm94SWNvbihpY29uQ2xhc3MpLCAnSW5ib3gnLCBmaWx0ZXJGdW5jdGlvbnNbMF0odGFza3MpKSxcbiAgICBNZW51T3B0aW9uKFRvZGF5SWNvbihpY29uQ2xhc3MpLCAnVG9kYXknLCBmaWx0ZXJGdW5jdGlvbnNbMV0odGFza3MpKSxcbiAgICBNZW51T3B0aW9uKFxuICAgICAgTmV4dERheXNJY29uKGljb25DbGFzcyksXG4gICAgICAnTmV4dCA3IGRheXMnLFxuICAgICAgZmlsdGVyRnVuY3Rpb25zWzJdKHRhc2tzKVxuICAgICksXG4gIF1cbiAgZWxlbWVudC5jbGFzc05hbWUgPSAnbWVudV9fb3B0aW9ucydcblxuICBtZW51T3B0aW9ucy5mb3JFYWNoKChtZW51T3B0aW9uKSA9PiB7XG4gICAgbWVudU9wdGlvbi5hZGRDbGlja0V2ZW50KCgpID0+IHtcbiAgICAgIE1lbnUuY2xlYW5BY3RpdmVzKClcbiAgICAgIG1lbnVPcHRpb24uYWRkQWN0aXZlQ2xhc3MoKVxuICAgIH0pXG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChtZW51T3B0aW9uLmVsZW1lbnQpXG4gIH0pXG5cbiAgY29uc3QgdXBkYXRlVGFza3MgPSAodXBkYXRlZFRhc2tzKSA9PiB7XG4gICAgdGFza3MgPSB1cGRhdGVkVGFza3NcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWVudU9wdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIG1lbnVPcHRpb25zW2ldLnVwZGF0ZVRhc2tzKGZpbHRlckZ1bmN0aW9uc1tpXSh0YXNrcykpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHsgZWxlbWVudCwgbWVudU9wdGlvbnMsIHVwZGF0ZVRhc2tzIH1cbn0pKClcblxuZXhwb3J0IGRlZmF1bHQgTWVudU9wdGlvbnNcbiIsImltcG9ydCB7IGNsZWFuQ29udGVudCB9IGZyb20gJy4uLy4uLy4uL2NvbnRlbnRHZW5lcmF0b3InXG5pbXBvcnQgVGFza3MgZnJvbSAnLi4vLi4vLi4vZGF0YS90YXNrcydcbmltcG9ydCBNZW51IGZyb20gJy4uL01lbnUnXG5pbXBvcnQgTWVudVRpdGxlIGZyb20gJy4uL01lbnVUaXRsZSdcbmltcG9ydCBNZW51UHJpb3JpdHkgZnJvbSAnLi9NZW51UHJpb3JpdHknXG5cbmNvbnN0IE1lbnVQcmlvcml0aWVzID0gKCgpID0+IHtcbiAgY29uc3QgcHJpb3JpdGllcyA9IFtcbiAgICB7IGlkOiAwLCBjb2xvcjogJyM5NEQ4MkQnLCB0aXRsZTogJ0xvdycgfSxcbiAgICB7IGlkOiAxLCBjb2xvcjogJyNGQ0M0MTknLCB0aXRsZTogJ01lZGl1bScgfSxcbiAgICB7IGlkOiAyLCBjb2xvcjogJyNGRjZCNkInLCB0aXRsZTogJ0hpZ2gnIH0sXG4gIF1cbiAgY29uc3QgcHJpb3JpdHlFbGVtZW50cyA9IFtdXG5cbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGVsZW1lbnQuY2xhc3NOYW1lID0gJ21lbnVfX3ByaW9yaXRpZXMtY29udGFpbmVyJ1xuXG4gIGNvbnN0IGZpbHRlciA9ICh0YXNrcywgcHJpb3JpdHkpID0+XG4gICAgdGFza3MuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLnByaW9yaXR5SWQgPT0gcHJpb3JpdHkuaWQpXG5cbiAgY29uc3QgZ2VuZXJhdGVQcmlvcml0aWVzID0gKCkgPT4ge1xuICAgIGNvbnN0IHByaW9yaXRpZXNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHByaW9yaXRpZXNDb250YWluZXIuY2xhc3NOYW1lID0gJ21lbnVfX3ByaW9yaXRpZXMnXG5cbiAgICBmb3IgKGxldCBwcmlvcml0eSBvZiBwcmlvcml0aWVzKSB7XG4gICAgICBjb25zdCBwcmlvcml0eUVsZW1lbnQgPSBNZW51UHJpb3JpdHkoXG4gICAgICAgIHByaW9yaXR5LFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgTWVudS5jbGVhbkFjdGl2ZXMoKVxuICAgICAgICAgIHByaW9yaXR5RWxlbWVudC5hZGRBY3RpdmVDbGFzcygpXG4gICAgICAgIH0sXG4gICAgICAgIGZpbHRlcihUYXNrcy5nZXRTb3J0ZWRUYXNrcygpLCBwcmlvcml0eSlcbiAgICAgIClcblxuICAgICAgcHJpb3JpdHlFbGVtZW50cy5wdXNoKHByaW9yaXR5RWxlbWVudClcbiAgICAgIHByaW9yaXRpZXNDb250YWluZXIuYXBwZW5kQ2hpbGQocHJpb3JpdHlFbGVtZW50LmVsZW1lbnQpXG4gICAgfVxuXG4gICAgY2xlYW5Db250ZW50KGVsZW1lbnQpXG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChNZW51VGl0bGUoJ1ByaW9yaXRpZXMnKSlcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKHByaW9yaXRpZXNDb250YWluZXIpXG4gIH1cbiAgZ2VuZXJhdGVQcmlvcml0aWVzKHByaW9yaXRpZXMpXG5cbiAgY29uc3QgZ2V0UHJpb3JpdHlCeUlkID0gKGlkKSA9PlxuICAgIHByaW9yaXRpZXMuZmluZCgocHJpb3JpdHkpID0+IHByaW9yaXR5LmlkID09IGlkKVxuXG4gIGNvbnN0IGNsZWFyQWN0aXZlcyA9ICgpID0+IHtcbiAgICBwcmlvcml0eUVsZW1lbnRzLmZvckVhY2goKHByaW9yaXR5RWxlbWVudCkgPT5cbiAgICAgIHByaW9yaXR5RWxlbWVudC5yZW1vdmVBY3RpdmVDbGFzcygpXG4gICAgKVxuICB9XG5cbiAgY29uc3QgdXBkYXRlVGFza3MgPSAodXBkYXRlZFRhc2tzKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcmlvcml0aWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBwcmlvcml0eUVsZW1lbnRzW2ldLnVwZGF0ZVRhc2tzKGZpbHRlcih1cGRhdGVkVGFza3MsIHByaW9yaXRpZXNbaV0pKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZWxlbWVudCxcbiAgICBjbGVhckFjdGl2ZXMsXG4gICAgZ2V0UHJpb3JpdHlCeUlkLFxuICAgIHByaW9yaXR5RWxlbWVudHMsXG4gICAgdXBkYXRlVGFza3MsXG4gIH1cbn0pKClcblxuZXhwb3J0IGRlZmF1bHQgTWVudVByaW9yaXRpZXNcbiIsImltcG9ydCBUYXNrc1ZpZXcgZnJvbSAnLi4vLi4vdGFzay9UYXNrc1ZpZXcnXG5pbXBvcnQgQ3VycmVudE1lbnVPcHRpb24gZnJvbSAnLi4vQ3VycmVudE1lbnVPcHRpb24nXG5cbmNvbnN0IE1lbnVQcmlvcml0eSA9ICh7IGlkLCBjb2xvciwgdGl0bGUgfSwgY2xpY2tFdmVudCwgdGFza3MpID0+IHtcbiAgbGV0IHNvcnRlZFRhc2tzID0gdGFza3NcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgaWQpXG4gIGVsZW1lbnQuY2xhc3NOYW1lID0gJ21lbnVfX3ByaW9yaXR5J1xuXG4gIGNvbnN0IGNvbG9yU3ltYm9sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgY29sb3JTeW1ib2wuY2xhc3NOYW1lID0gJ21lbnVfX2NvbG9yLXN5bWJvbCdcbiAgY29sb3JTeW1ib2wuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3JcblxuICBjb25zdCB0aXRsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpXG4gIHRpdGxlRWxlbWVudC5jbGFzc05hbWUgPSAnbWVudV9fcHJpb3JpdHlfX3RpdGxlJ1xuICB0aXRsZUVsZW1lbnQudGV4dENvbnRlbnQgPSB0aXRsZVxuXG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQoY29sb3JTeW1ib2wpXG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQodGl0bGVFbGVtZW50KVxuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgIGNsaWNrRXZlbnQoKVxuICAgIFRhc2tzVmlldy5nZW5lcmF0ZVRhc2tzKHRpdGxlLCAtMSwgc29ydGVkVGFza3MpXG4gICAgQ3VycmVudE1lbnVPcHRpb24uc2V0RWxlbWVudChlbGVtZW50KVxuICB9KVxuXG4gIGNvbnN0IGFkZEFjdGl2ZUNsYXNzID0gKCkgPT4ge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbWVudV9fcHJpb3JpdHktLWFjdGl2ZScpXG4gIH1cblxuICBjb25zdCByZW1vdmVBY3RpdmVDbGFzcyA9ICgpID0+IHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ21lbnVfX3ByaW9yaXR5LS1hY3RpdmUnKVxuICB9XG5cbiAgY29uc3QgdXBkYXRlVGFza3MgPSAodXBkYXRlZFRhc2tzKSA9PiAoc29ydGVkVGFza3MgPSB1cGRhdGVkVGFza3MpXG5cbiAgcmV0dXJuIHsgZWxlbWVudCwgYWRkQWN0aXZlQ2xhc3MsIHJlbW92ZUFjdGl2ZUNsYXNzLCB1cGRhdGVUYXNrcyB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1lbnVQcmlvcml0eVxuIiwiaW1wb3J0IE1lbnUgZnJvbSAnLi4vTWVudSdcbmltcG9ydCBNb3JlSWNvbiBmcm9tICcuLi8uLi9pY29ucy9Nb3JlSWNvbidcbmltcG9ydCBUYXNrc1ZpZXcgZnJvbSAnLi4vLi4vdGFzay9UYXNrc1ZpZXcnXG5pbXBvcnQgVGFnQ29udGV4dE1lbnUgZnJvbSAnLi4vLi4vdGFnL1RhZ0NvbnRleHRNZW51J1xuaW1wb3J0IEN1cnJlbnRNZW51T3B0aW9uIGZyb20gJy4uL0N1cnJlbnRNZW51T3B0aW9uJ1xuXG5jb25zdCBNZW51VGFnID0gKHsgaWQsIGNvbG9yLCB0aXRsZSB9LCB0YXNrcykgPT4ge1xuICBsZXQgc29ydGVkVGFza3MgPSB0YXNrc1xuXG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIGlkKVxuICBlbGVtZW50LmNsYXNzTmFtZSA9ICdtZW51X190YWcnXG5cbiAgY29uc3QgY29sb3JTeW1ib2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBjb2xvclN5bWJvbC5jbGFzc05hbWUgPSAnbWVudV9fY29sb3Itc3ltYm9sJ1xuICBjb2xvclN5bWJvbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvclxuXG4gIGNvbnN0IHRpdGxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0JylcbiAgdGl0bGVFbGVtZW50LmNsYXNzTmFtZSA9ICdtZW51X190YWdfX3RpdGxlJ1xuICB0aXRsZUVsZW1lbnQudGV4dENvbnRlbnQgPSB0aXRsZVxuXG4gIGNvbnN0IG1vcmVJY29uID0gTW9yZUljb24oJ21lbnVfX3RhZ19faWNvbiBtZW51X190YWdfX2ljb24tLW1vcmUnKVxuXG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQoY29sb3JTeW1ib2wpXG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQodGl0bGVFbGVtZW50KVxuICBlbGVtZW50LmFwcGVuZENoaWxkKG1vcmVJY29uKVxuXG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuXG4gICAgaWYgKGUudGFyZ2V0ID09IG1vcmVJY29uIHx8IG1vcmVJY29uLmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgVGFnQ29udGV4dE1lbnUuZ2VuZXJhdGVNZW51KGlkLCBlLngsIGUueSlcbiAgICB9IGVsc2Uge1xuICAgICAgVGFza3NWaWV3LmdlbmVyYXRlVGFza3ModGl0bGUsIGlkLCBzb3J0ZWRUYXNrcylcbiAgICAgIEN1cnJlbnRNZW51T3B0aW9uLnNldEVsZW1lbnQoZWxlbWVudClcbiAgICAgIE1lbnUuY2xlYW5BY3RpdmVzKClcbiAgICAgIGFkZEFjdGl2ZUNsYXNzKClcbiAgICB9XG4gIH0pXG5cbiAgY29uc3QgYWRkQWN0aXZlQ2xhc3MgPSAoKSA9PiB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdtZW51X190YWctLWFjdGl2ZScpXG4gIH1cblxuICBjb25zdCByZW1vdmVBY3RpdmVDbGFzcyA9ICgpID0+IHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ21lbnVfX3RhZy0tYWN0aXZlJylcbiAgfVxuXG4gIGNvbnN0IHVwZGF0ZVRhc2tzID0gKHVwZGF0ZWRUYXNrcykgPT4gKHNvcnRlZFRhc2tzID0gdXBkYXRlZFRhc2tzKVxuXG4gIHJldHVybiB7IGVsZW1lbnQsIGFkZEFjdGl2ZUNsYXNzLCByZW1vdmVBY3RpdmVDbGFzcywgdXBkYXRlVGFza3MgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNZW51VGFnXG4iLCJpbXBvcnQgRW1wdHlNZXNzYWdlIGZyb20gJy4uLy4uL0VtcHR5TWVzc2FnZSdcbmltcG9ydCBNZW51VGl0bGUgZnJvbSAnLi4vTWVudVRpdGxlJ1xuaW1wb3J0IE1lbnVUYWcgZnJvbSAnLi9NZW51VGFnJ1xuaW1wb3J0IE5ld1RhZ0J0biBmcm9tICcuL05ld1RhZ0J0bidcbmltcG9ydCBNZW51IGZyb20gJy4uL01lbnUnXG5pbXBvcnQgVGFza3MgZnJvbSAnLi4vLi4vLi4vZGF0YS90YXNrcydcbmltcG9ydCBUYWdzIGZyb20gJy4uLy4uLy4uL2RhdGEvdGFncydcbmltcG9ydCBOZXdUYXNrRm9ybSBmcm9tICcuLi8uLi90YXNrL05ld1Rhc2tGb3JtJ1xuaW1wb3J0IHsgY2xlYW5Db250ZW50IH0gZnJvbSAnLi4vLi4vLi4vY29udGVudEdlbmVyYXRvcidcblxuY29uc3QgTWVudVRhZ3MgPSAoKCkgPT4ge1xuICBsZXQgdGFnRWxlbWVudHMgPSBbXVxuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgZWxlbWVudC5jbGFzc05hbWUgPSAnbWVudV9fdGFncy1jb250YWluZXInXG5cbiAgY29uc3QgZmlsdGVyID0gKHRhc2tzLCB0YWcpID0+IHRhc2tzLmZpbHRlcigodGFzaykgPT4gdGFzay50YWdJZCA9PSB0YWcuaWQpXG5cbiAgY29uc3QgZ2VuZXJhdGVUYWdzID0gKHRhZ3MpID0+IHtcbiAgICBjbGVhbkNvbnRlbnQoZWxlbWVudClcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKE1lbnVUaXRsZSgnVGFncycpKVxuICAgIHRhZ0VsZW1lbnRzID0gW11cblxuICAgIGlmICh0YWdzLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHRhZ3NDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgdGFnc0NvbnRhaW5lci5jbGFzc05hbWUgPSAnbWVudV9fdGFncydcblxuICAgICAgZm9yIChsZXQgdGFnIG9mIHRhZ3MpIHtcbiAgICAgICAgY29uc3QgdGFnRWxlbWVudCA9IE1lbnVUYWcodGFnLCBmaWx0ZXIoVGFza3MuZ2V0U29ydGVkVGFza3MoKSwgdGFnKSlcblxuICAgICAgICB0YWdFbGVtZW50cy5wdXNoKHRhZ0VsZW1lbnQpXG4gICAgICAgIHRhZ3NDb250YWluZXIuYXBwZW5kQ2hpbGQodGFnRWxlbWVudC5lbGVtZW50KVxuICAgICAgfVxuXG4gICAgICBlbGVtZW50LmFwcGVuZENoaWxkKHRhZ3NDb250YWluZXIpXG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoXG4gICAgICAgIEVtcHR5TWVzc2FnZShcbiAgICAgICAgICBcIkl0J3MgcHJldHR5IGVtcHR5IGhlcmUg8J+YlS4gTGV0J3MgYWRkIGEgbmV3IHRhZyB3aXRoIHRoZSBidXR0b24gYmVsb3chXCJcbiAgICAgICAgKVxuICAgICAgKVxuICAgIH1cbiAgICBOZXdUYXNrRm9ybS51cGRhdGVUYWdzKHRhZ0VsZW1lbnRzKVxuXG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChcbiAgICAgIE5ld1RhZ0J0bigodGFnKSA9PiB7XG4gICAgICAgIFRhZ3MuYWRkVGFnKHsgaWQ6IFRhZ3MuZ2V0TGFzdElkKCkgKyAxLCAuLi50YWcgfSlcbiAgICAgICAgZ2VuZXJhdGVUYWdzKFRhZ3MuZ2V0VGFncygpKVxuICAgICAgfSlcbiAgICApXG4gIH1cbiAgZ2VuZXJhdGVUYWdzKFRhZ3MuZ2V0VGFncygpKVxuXG4gIGNvbnN0IHVwZGF0ZVRhc2tzID0gKHVwZGF0ZWRUYXNrcykgPT4ge1xuICAgIGNvbnN0IHRhZ3MgPSBUYWdzLmdldFRhZ3MoKVxuXG4gICAgaWYgKHRhZ3MubGVuZ3RoID4gMCkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YWdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRhZ0VsZW1lbnRzW2ldLnVwZGF0ZVRhc2tzKGZpbHRlcih1cGRhdGVkVGFza3MsIHRhZ3NbaV0pKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGNsZWFuQWN0aXZlcyA9ICgpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhZ0VsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0YWdFbGVtZW50c1tpXS5yZW1vdmVBY3RpdmVDbGFzcygpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHsgZWxlbWVudCwgZ2VuZXJhdGVUYWdzLCB0YWdFbGVtZW50cywgdXBkYXRlVGFza3MsIGNsZWFuQWN0aXZlcyB9XG59KSgpXG5cbmV4cG9ydCBkZWZhdWx0IE1lbnVUYWdzXG4iLCJpbXBvcnQgQWRkSWNvbiBmcm9tICcuLi8uLi9pY29ucy9BZGRJY29uJ1xuaW1wb3J0IENvbG9yUGlja2VyIGZyb20gJy4uLy4uL0NvbG9yUGlja2VyJ1xuaW1wb3J0IHsgY2xlYW5Db250ZW50IH0gZnJvbSAnLi4vLi4vLi4vY29udGVudEdlbmVyYXRvcidcblxuY29uc3QgTmV3VGFnQnRuID0gKHN1Ym1pdEV2ZW50KSA9PiB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBlbGVtZW50LmNsYXNzTmFtZSA9ICdtZW51X19uZXctdGFnJ1xuXG4gIGNvbnN0IGdlbmVyYXRlQnV0dG9uID0gKCkgPT4ge1xuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgYnRuLmNsYXNzTGlzdCA9ICdtZW51X19uZXctdGFnX19idG4gbWVudV9fbmV3LXRhZ19fYnRuLS1uZXcnXG5cbiAgICBjb25zdCBoNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0JylcbiAgICBoNC5jbGFzc05hbWUgPSAnbWVudV9fbmV3LXRhZ19fYnRuX190aXRsZSdcbiAgICBoNC50ZXh0Q29udGVudCA9ICdDcmVhdGUgbmV3IHRhZydcblxuICAgIGJ0bi5hcHBlbmRDaGlsZChBZGRJY29uKCdtZW51X19uZXctdGFnX19idG5fX2ljb24nKSlcbiAgICBidG4uYXBwZW5kQ2hpbGQoaDQpXG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZ2VuZXJhdGVGb3JtKVxuXG4gICAgY2xlYW5Db250ZW50KGVsZW1lbnQpXG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChidG4pXG4gIH1cblxuICBjb25zdCBnZW5lcmF0ZUZvcm0gPSAoKSA9PiB7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKVxuICAgIGZvcm0uY2xhc3NOYW1lID0gJ21lbnVfX25ldy10YWdfX2Zvcm0nXG5cbiAgICBjb25zdCBjb2xvclBpY2tlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgY29sb3JQaWNrZXIuY2xhc3NOYW1lID0gJ21lbnVfX25ldy10YWdfX3BpY2tlcidcblxuICAgIGNvbnN0IGN1cnJlbnRDb2xvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY3VycmVudENvbG9yLmNsYXNzTmFtZSA9ICdtZW51X19uZXctdGFnX19waWNrZXJfX2N1cnJlbnQnXG4gICAgY3VycmVudENvbG9yLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjZmY2YjZiJ1xuICAgIGN1cnJlbnRDb2xvci5zZXRBdHRyaWJ1dGUoJ2RhdGEtY29sb3InLCAnI2ZmNmI2YicpXG5cbiAgICBjb2xvclBpY2tlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgIENvbG9yUGlja2VyLmdlbmVyYXRlKGN1cnJlbnRDb2xvciwgZS54LCBlLnkpXG4gICAgfSlcbiAgICBjb2xvclBpY2tlci5hcHBlbmRDaGlsZChjdXJyZW50Q29sb3IpXG5cbiAgICBjb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgbmFtZUlucHV0LmNsYXNzTmFtZSA9ICdtZW51X19uZXctdGFnX19mb3JtX19pbnB1dCdcbiAgICBuYW1lSW5wdXQudHlwZSA9ICd0ZXh0J1xuICAgIG5hbWVJbnB1dC5wbGFjZWhvbGRlciA9ICdUYWcgbmFtZSdcbiAgICBuYW1lSW5wdXQucmVxdWlyZWQgPSB0cnVlXG4gICAgbmFtZUlucHV0Lm1heExlbmd0aCA9IDE1XG5cbiAgICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIHN1Ym1pdEJ0bi5jbGFzc05hbWUgPSAnbWVudV9fbmV3LXRhZ19fYnRuIG1lbnVfX25ldy10YWdfX2J0bi0tc3VibWl0J1xuICAgIHN1Ym1pdEJ0bi50eXBlID0gJ3N1Ym1pdCdcbiAgICBzdWJtaXRCdG4udGV4dENvbnRlbnQgPSAnQWRkJ1xuXG4gICAgZm9ybS5hcHBlbmRDaGlsZChjb2xvclBpY2tlcilcbiAgICBmb3JtLmFwcGVuZENoaWxkKG5hbWVJbnB1dClcbiAgICBmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdEJ0bilcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgICAgc3VibWl0RXZlbnQoe1xuICAgICAgICBjb2xvcjogY3VycmVudENvbG9yLmdldEF0dHJpYnV0ZSgnZGF0YS1jb2xvcicpLFxuICAgICAgICB0aXRsZTogbmFtZUlucHV0LnZhbHVlLFxuICAgICAgfSlcbiAgICB9KVxuXG4gICAgY2xlYW5Db250ZW50KGVsZW1lbnQpXG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChmb3JtKVxuICB9XG5cbiAgZ2VuZXJhdGVCdXR0b24oKVxuICByZXR1cm4gZWxlbWVudFxufVxuXG5leHBvcnQgZGVmYXVsdCBOZXdUYWdCdG5cbiIsImltcG9ydCBUYWdEZWxldGVQb3B1cCBmcm9tICcuL1RhZ0RlbGV0ZVBvcHVwJ1xuaW1wb3J0IFRhZ0VkaXRQb3B1cCBmcm9tICcuL1RhZ0VkaXRQb3B1cCdcblxuY29uc3QgVGFnQ29udGV4dE1lbnUgPSAoKCkgPT4ge1xuICBsZXQgdGFnSWQgPSAtMVxuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgZWxlbWVudC5jbGFzc05hbWUgPSAndGFnLW1lbnUgaGlkZGVuJ1xuXG4gIGNvbnN0IGg0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKVxuICBoNC5jbGFzc05hbWUgPSAndGFnLW1lbnVfX3RpdGxlJ1xuICBoNC50ZXh0Q29udGVudCA9ICdTZWxlY3QgYWN0aW9uOidcblxuICBjb25zdCBlZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgZWRpdEJ0bi5jbGFzc05hbWUgPSAndGFnLW1lbnVfX2J0biB0YWctbWVudV9fYnRuLS1lZGl0J1xuICBlZGl0QnRuLnRleHRDb250ZW50ID0gJ0VkaXQnXG4gIGVkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgVGFnRWRpdFBvcHVwLmdlbmVyYXRlUG9wdXAodGFnSWQpXG4gICAgaGlkZSgpXG4gIH0pXG5cbiAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgZGVsZXRlQnRuLmNsYXNzTmFtZSA9ICd0YWctbWVudV9fYnRuIHRhZy1tZW51X19idG4tLWRlbGV0ZSdcbiAgZGVsZXRlQnRuLnRleHRDb250ZW50ID0gJ0RlbGV0ZSdcbiAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIFRhZ0RlbGV0ZVBvcHVwLmdlbmVyYXRlUG9wdXAodGFnSWQpXG4gICAgaGlkZSgpXG4gIH0pXG5cbiAgY29uc3QgZ2VuZXJhdGVNZW51ID0gKGlkLCB4LCB5KSA9PiB7XG4gICAgdGFnSWQgPSBpZFxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJylcbiAgICBlbGVtZW50LnN0eWxlLnRvcCA9IGAke3l9cHhgXG4gICAgZWxlbWVudC5zdHlsZS5sZWZ0ID0gYCR7eCAtIGVsZW1lbnQuY2xpZW50V2lkdGh9cHhgXG4gIH1cblxuICBjb25zdCBoaWRlID0gKCkgPT4gZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuXG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQoaDQpXG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZWRpdEJ0bilcbiAgZWxlbWVudC5hcHBlbmRDaGlsZChkZWxldGVCdG4pXG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQgIT0gZWxlbWVudCAmJiAhZWxlbWVudC5jb250YWlucyhlLnRhcmdldCkpIGhpZGUoKVxuICB9KVxuXG4gIHJldHVybiB7IGVsZW1lbnQsIGdlbmVyYXRlTWVudSB9XG59KSgpXG5cbmV4cG9ydCBkZWZhdWx0IFRhZ0NvbnRleHRNZW51XG4iLCJpbXBvcnQgVGFncyBmcm9tICcuLi8uLi9kYXRhL3RhZ3MnXG5pbXBvcnQgVGFza3MgZnJvbSAnLi4vLi4vZGF0YS90YXNrcydcbmltcG9ydCBNZW51T3B0aW9ucyBmcm9tICcuLi9tZW51L29wdGlvbi9NZW51T3B0aW9ucydcbmltcG9ydCBNZW51VGFncyBmcm9tICcuLi9tZW51L3RhZy9NZW51VGFncydcblxuY29uc3QgVGFnRGVsZXRlUG9wdXAgPSAoKCkgPT4ge1xuICBsZXQgdGFnSWQgPSAtMVxuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgZWxlbWVudC5jbGFzc05hbWUgPSAndGFnLXBvcHVwIHRhZy1wb3B1cC0tZGVsZXRlIGhpZGRlbidcblxuICBjb25zdCBwb3B1cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIHBvcHVwLmNsYXNzTmFtZSA9ICd0YWctcG9wdXBfX3BvcHVwJ1xuXG4gIGNvbnN0IGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKVxuICBoMy5jbGFzc05hbWUgPSAndGFnLXBvcHVwX190aXRsZSdcbiAgaDMudGV4dENvbnRlbnQgPSAnRGVsZXRlIHRhZzonXG5cbiAgY29uc3QgZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICBkZXNjLmNsYXNzTmFtZSA9ICd0YWctcG9wdXBfX2Rlc2MnXG4gIGRlc2MudGV4dENvbnRlbnQgPVxuICAgICdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoZSB0YWcgYW5kIGFsbCB0aGUgdGFza3Mgd2l0aCB0aGUgdGFnPydcblxuICBjb25zdCBidG5zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgYnRucy5jbGFzc05hbWUgPSAndGFnLXBvcHVwX19idG5zJ1xuXG4gIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gIGRlbGV0ZUJ0bi5jbGFzc05hbWUgPSAndGFnLXBvcHVwX19idG4gdGFnLXBvcHVwX19idG4tLWRlbGV0ZSdcbiAgZGVsZXRlQnRuLnRleHRDb250ZW50ID0gJ0RlbGV0ZSdcbiAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmICh0YWdJZCA+IC0xKSB7XG4gICAgICBUYWdzLnJlbW92ZVRhZyh0YWdJZClcblxuICAgICAgY29uc3QgdGFza3MgPSBUYXNrcy5nZXRUYXNrcygpXG4gICAgICBjb25zdCB0YXNrc1RvRGVsZXRlID0gW11cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHRhc2tzW2ldLnRhZ0lkID09IHRhZ0lkKSB7XG4gICAgICAgICAgdGFza3NUb0RlbGV0ZS5wdXNoKHRhc2tzW2ldKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBmb3IgKGxldCB0YXNrIG9mIHRhc2tzVG9EZWxldGUpIHtcbiAgICAgICAgVGFza3MucmVtb3ZlVGFzayh0YXNrLmlkKVxuICAgICAgfVxuICAgICAgTWVudVRhZ3MuZ2VuZXJhdGVUYWdzKFRhZ3MuZ2V0VGFncygpKVxuICAgICAgTWVudU9wdGlvbnMubWVudU9wdGlvbnNbMF0uZWxlbWVudC5jbGljaygpXG4gICAgfVxuICAgIGhpZGUoKVxuICB9KVxuXG4gIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gIGNhbmNlbEJ0bi5jbGFzc05hbWUgPSAndGFnLXBvcHVwX19idG4gdGFnLXBvcHVwX19idG4tLWNhbmNlbCdcbiAgY2FuY2VsQnRuLnRleHRDb250ZW50ID0gJ0NhbmNlbCdcbiAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gaGlkZSgpKVxuXG4gIGJ0bnMuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKVxuICBidG5zLmFwcGVuZENoaWxkKGNhbmNlbEJ0bilcblxuICBwb3B1cC5hcHBlbmRDaGlsZChoMylcbiAgcG9wdXAuYXBwZW5kQ2hpbGQoZGVzYylcbiAgcG9wdXAuYXBwZW5kQ2hpbGQoYnRucylcblxuICBlbGVtZW50LmFwcGVuZENoaWxkKHBvcHVwKVxuXG4gIGNvbnN0IGhpZGUgPSAoKSA9PiBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gIGNvbnN0IGdlbmVyYXRlUG9wdXAgPSAoaWQpID0+IHtcbiAgICB0YWdJZCA9IGlkXG4gICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKVxuICB9XG5cbiAgcmV0dXJuIHsgZWxlbWVudCwgZ2VuZXJhdGVQb3B1cCB9XG59KSgpXG5cbmV4cG9ydCBkZWZhdWx0IFRhZ0RlbGV0ZVBvcHVwXG4iLCJpbXBvcnQgVGFncyBmcm9tICcuLi8uLi9kYXRhL3RhZ3MnXG5pbXBvcnQgQ29sb3JQaWNrZXIgZnJvbSAnLi4vQ29sb3JQaWNrZXInXG5pbXBvcnQgTWVudSBmcm9tICcuLi9tZW51L01lbnUnXG5cbmNvbnN0IFRhZ0VkaXRQb3B1cCA9ICgoKSA9PiB7XG4gIGxldCB0YWcgPSBudWxsXG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBlbGVtZW50LmNsYXNzTmFtZSA9ICd0YWctcG9wdXAgdGFnLXBvcHVwLS1lZGl0IGhpZGRlbidcblxuICBjb25zdCBwb3B1cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIHBvcHVwLmNsYXNzTmFtZSA9ICd0YWctcG9wdXBfX3BvcHVwJ1xuXG4gIGNvbnN0IGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKVxuICBoMy5jbGFzc05hbWUgPSAndGFnLXBvcHVwX190aXRsZSdcbiAgaDMudGV4dENvbnRlbnQgPSAnRWRpdCB0YXNrOidcblxuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpXG4gIGZvcm0uY2xhc3NOYW1lID0gJ3RhZy1wb3B1cF9fZm9ybSdcblxuICBjb25zdCBpbnB1dHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBpbnB1dHMuY2xhc3NOYW1lID0gJ3RhZy1wb3B1cF9faW5wdXRzJ1xuXG4gIGNvbnN0IGNvbG9yUGlja2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgY29sb3JQaWNrZXIudHlwZSA9ICdidXR0b24nXG4gIGNvbG9yUGlja2VyLmNsYXNzTmFtZSA9ICd0YWctcG9wdXBfX3BpY2tlcidcblxuICBjb25zdCBjdXJyZW50Q29sb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBjdXJyZW50Q29sb3IuY2xhc3NOYW1lID0gJ3RhZy1wb3B1cF9fcGlja2VyX19jdXJyZW50J1xuICBjdXJyZW50Q29sb3Iuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNmZjZiNmInXG4gIGN1cnJlbnRDb2xvci5zZXRBdHRyaWJ1dGUoJ2RhdGEtY29sb3InLCAnI2ZmNmI2YicpXG5cbiAgY29sb3JQaWNrZXIuYXBwZW5kQ2hpbGQoY3VycmVudENvbG9yKVxuICBjb2xvclBpY2tlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgQ29sb3JQaWNrZXIuZ2VuZXJhdGUoY3VycmVudENvbG9yLCBlLngsIGUueSlcbiAgfSlcblxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgdGl0bGUuY2xhc3NOYW1lID0gJ3RhZy1wb3B1cF9faW5wdXQnXG4gIHRpdGxlLnR5cGUgPSAndGV4dCdcbiAgdGl0bGUucGxhY2Vob2xkZXIgPSAnVGFnIHRpdGxlJ1xuICB0aXRsZS5yZXF1aXJlZCA9IHRydWVcblxuICBpbnB1dHMuYXBwZW5kQ2hpbGQoY29sb3JQaWNrZXIpXG4gIGlucHV0cy5hcHBlbmRDaGlsZCh0aXRsZSlcblxuICBjb25zdCBidG5zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgYnRucy5jbGFzc05hbWUgPSAndGFnLXBvcHVwX19idG5zJ1xuXG4gIGNvbnN0IGVkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICBlZGl0QnRuLmNsYXNzTmFtZSA9ICd0YWctcG9wdXBfX2J0biB0YWctcG9wdXBfX2J0bi0tZWRpdCdcbiAgZWRpdEJ0bi50eXBlID0gJ3N1Ym1pdCdcbiAgZWRpdEJ0bi50ZXh0Q29udGVudCA9ICdFZGl0J1xuXG4gIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gIGNhbmNlbEJ0bi5jbGFzc05hbWUgPSAndGFnLXBvcHVwX19idG4gdGFnLXBvcHVwX19idG4tLWNhbmNlbCdcbiAgY2FuY2VsQnRuLnR5cGUgPSAnYnV0dG9uJ1xuICBjYW5jZWxCdG4udGV4dENvbnRlbnQgPSAnQ2FuY2VsJ1xuICBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBoaWRlKCkpXG5cbiAgYnRucy5hcHBlbmRDaGlsZChlZGl0QnRuKVxuICBidG5zLmFwcGVuZENoaWxkKGNhbmNlbEJ0bilcblxuICBmb3JtLmFwcGVuZENoaWxkKGlucHV0cylcbiAgZm9ybS5hcHBlbmRDaGlsZChidG5zKVxuXG4gIHBvcHVwLmFwcGVuZENoaWxkKGgzKVxuICBwb3B1cC5hcHBlbmRDaGlsZChmb3JtKVxuXG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQocG9wdXApXG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgIGlmICh0YWcpIHtcbiAgICAgIHRhZyA9IHtcbiAgICAgICAgLi4udGFnLFxuICAgICAgICBjb2xvcjogY3VycmVudENvbG9yLmdldEF0dHJpYnV0ZSgnZGF0YS1jb2xvcicpLFxuICAgICAgICB0aXRsZTogdGl0bGUudmFsdWUsXG4gICAgICB9XG4gICAgICBUYWdzLnVwZGF0ZVRhZyh0YWcuaWQsIHRhZylcblxuICAgICAgY29uc3QgdGFnRG9tID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgYGRpdi5tZW51X190YWdbZGF0YS1pZD1cIiR7dGFnLmlkfVwiXWBcbiAgICAgIClcbiAgICAgIHRhZ0RvbS5xdWVyeVNlbGVjdG9yKCcubWVudV9fY29sb3Itc3ltYm9sJykuc3R5bGUuYmFja2dyb3VuZENvbG9yID1cbiAgICAgICAgdGFnLmNvbG9yXG4gICAgICB0YWdEb20ucXVlcnlTZWxlY3RvcignLm1lbnVfX3RhZ19fdGl0bGUnKS50ZXh0Q29udGVudCA9IHRhZy50aXRsZVxuXG4gICAgICBNZW51LnVwZGF0ZVRhc2tzKClcbiAgICAgIGhpZGUoKVxuICAgIH1cbiAgfSlcblxuICBjb25zdCBnZW5lcmF0ZVBvcHVwID0gKHRhZ0lkKSA9PiB7XG4gICAgdGFnID0geyAuLi5UYWdzLmdldFRhZ0J5SWQodGFnSWQpIH1cblxuICAgIGlmICh0YWcpIHtcbiAgICAgIHRpdGxlLnZhbHVlID0gdGFnLnRpdGxlXG4gICAgICBjdXJyZW50Q29sb3Iuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gdGFnLmNvbG9yXG4gICAgICBjdXJyZW50Q29sb3Iuc2V0QXR0cmlidXRlKCdkYXRhLWNvbG9yJywgdGFnLmNvbG9yKVxuICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGhpZGUgPSAoKSA9PiBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG5cbiAgcmV0dXJuIHsgZWxlbWVudCwgZ2VuZXJhdGVQb3B1cCB9XG59KSgpXG5cbmV4cG9ydCBkZWZhdWx0IFRhZ0VkaXRQb3B1cFxuIiwiaW1wb3J0IHsgY2xlYW5Db250ZW50IH0gZnJvbSAnLi4vLi4vY29udGVudEdlbmVyYXRvcidcbmltcG9ydCBUYWdzIGZyb20gJy4uLy4uL2RhdGEvdGFncydcbmltcG9ydCBUYXNrcyBmcm9tICcuLi8uLi9kYXRhL3Rhc2tzJ1xuaW1wb3J0IE1lbnUgZnJvbSAnLi4vbWVudS9NZW51J1xuXG5jb25zdCBOZXdUYXNrRm9ybSA9ICgoKSA9PiB7XG4gIGxldCB0YXNrID0gbnVsbFxuXG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBlbGVtZW50LmNsYXNzTmFtZSA9ICd0YXNrLWZvcm0gaGlkZGVuJ1xuXG4gIGNvbnN0IHNob3cgPSAoKSA9PiBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpXG4gIGNvbnN0IGhpZGUgPSAoKSA9PiBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG5cbiAgY29uc3QgcG9wdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBwb3B1cC5jbGFzc05hbWUgPSAndGFzay1mb3JtX19wb3B1cCdcblxuICBjb25zdCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbiAgaDIuY2xhc3NOYW1lID0gJ3Rhc2stZm9ybV9fdGl0bGUnXG5cbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKVxuICBmb3JtLmNsYXNzTmFtZSA9ICd0YXNrLWZvcm1fX2Zvcm0nXG5cbiAgY29uc3QgZm9ybUlucHV0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGZvcm1JbnB1dHMuY2xhc3NOYW1lID0gJ3Rhc2stZm9ybV9fZm9ybV9faW5wdXRzJ1xuXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICB0aXRsZS5jbGFzc0xpc3QgPSAndGFzay1mb3JtX19mb3JtX190aXRsZSdcbiAgdGl0bGUucGxhY2Vob2xkZXIgPSAnVGFzayBUaXRsZSdcbiAgdGl0bGUucmVxdWlyZWQgPSB0cnVlXG4gIHRpdGxlLm1heExlbmd0aCA9IDI1XG5cbiAgY29uc3QgZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJylcbiAgZGVzYy5jbGFzc0xpc3QgPSAndGFzay1mb3JtX19mb3JtX19kZXNjJ1xuICBkZXNjLnBsYWNlaG9sZGVyID0gJ0Rlc2NyaXB0aW9uIChPcHRpb25hbCknXG4gIGRlc2MubWF4TGVuZ3RoID0gMTQwXG5cbiAgZm9ybUlucHV0cy5hcHBlbmRDaGlsZCh0aXRsZSlcbiAgZm9ybUlucHV0cy5hcHBlbmRDaGlsZChkZXNjKVxuXG4gIGNvbnN0IGFkZGl0aW9uYWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgYWRkaXRpb25hbHMuY2xhc3NOYW1lID0gJ3Rhc2stZm9ybV9fZm9ybV9fb3B0aW9ucydcblxuICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zdWJzdHJpbmcoMCwgMTApXG4gIGRhdGUuY2xhc3NOYW1lID0gJ3Rhc2stZm9ybV9fZm9ybV9fZGF0ZSdcbiAgZGF0ZS50eXBlID0gJ2RhdGUnXG4gIGRhdGUubWluID0gY3VycmVudERhdGVcblxuICBjb25zdCB0YWdzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0JylcbiAgdGFncy5jbGFzc05hbWUgPSAndGFzay1mb3JtX19mb3JtX19zZWxlY3QnXG5cbiAgY29uc3QgdXBkYXRlVGFncyA9ICh0YWdzTGlzdCkgPT4ge1xuICAgIHRhZ3MuaW5uZXJIVE1MID0gJydcblxuICAgIGZvciAobGV0IHRhZyBvZiBbXG4gICAgICB7IGlkOiAtMiwgdGl0bGU6ICdUYWcgKE9wdGlvbmFsKScgfSxcbiAgICAgIHsgaWQ6IC0xLCB0aXRsZTogJ05vbmUnIH0sXG4gICAgICAuLi50YWdzTGlzdCxcbiAgICBdKSB7XG4gICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxuICAgICAgb3B0aW9uLnZhbHVlID0gdGFnLmlkXG4gICAgICBvcHRpb24udGV4dENvbnRlbnQgPSB0YWcudGl0bGVcblxuICAgICAgaWYgKHRhZy5pZCA9PT0gLTIpIHtcbiAgICAgICAgb3B0aW9uLmRpc2FibGVkID0gdHJ1ZVxuICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSB0cnVlXG4gICAgICB9XG5cbiAgICAgIHRhZ3MuYXBwZW5kQ2hpbGQob3B0aW9uKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHByaW9yaXRpZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKVxuICBwcmlvcml0aWVzLmNsYXNzTmFtZSA9ICd0YXNrLWZvcm1fX2Zvcm1fX3NlbGVjdCdcblxuICBjb25zdCB1cGRhdGVQcmlvcml0aWVzID0gKHByaW9yaXRpZXNMaXN0KSA9PiB7XG4gICAgY2xlYW5Db250ZW50KHByaW9yaXRpZXMpXG5cbiAgICBmb3IgKGxldCBwcmlvcml0eSBvZiBbXG4gICAgICB7IGlkOiAtMiwgdGl0bGU6ICdQcmlvcml0eSAoT3B0aW9uYWwpJyB9LFxuICAgICAgeyBpZDogLTEsIHRpdGxlOiAnTm9uZScgfSxcbiAgICAgIC4uLnByaW9yaXRpZXNMaXN0LFxuICAgIF0pIHtcbiAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpXG4gICAgICBvcHRpb24udmFsdWUgPSBwcmlvcml0eS5pZFxuICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gcHJpb3JpdHkudGl0bGVcblxuICAgICAgaWYgKHByaW9yaXR5LmlkID09PSAtMikge1xuICAgICAgICBvcHRpb24uZGlzYWJsZWQgPSB0cnVlXG4gICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IHRydWVcbiAgICAgIH1cblxuICAgICAgcHJpb3JpdGllcy5hcHBlbmRDaGlsZChvcHRpb24pXG4gICAgfVxuICB9XG5cbiAgYWRkaXRpb25hbHMuYXBwZW5kQ2hpbGQoZGF0ZSlcbiAgYWRkaXRpb25hbHMuYXBwZW5kQ2hpbGQodGFncylcbiAgYWRkaXRpb25hbHMuYXBwZW5kQ2hpbGQocHJpb3JpdGllcylcblxuICBjb25zdCBidG5zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgYnRucy5jbGFzc05hbWUgPSAndGFzay1mb3JtX19mb3JtX19idG5zJ1xuXG4gIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gIHN1Ym1pdEJ0bi5jbGFzc05hbWUgPSAndGFzay1mb3JtX19mb3JtX19idG4gdGFzay1mb3JtX19mb3JtX19idG4tLXN1Ym1pdCdcbiAgc3VibWl0QnRuLnR5cGUgPSAnc3VibWl0J1xuXG4gIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gIGNhbmNlbEJ0bi5jbGFzc05hbWUgPSAndGFzay1mb3JtX19mb3JtX19idG4gdGFzay1mb3JtX19mb3JtX19idG4tLWNhbmNlbCdcbiAgY2FuY2VsQnRuLnRleHRDb250ZW50ID0gJ0NhbmNlbCdcbiAgY2FuY2VsQnRuLnR5cGUgPSAnYnV0dG9uJ1xuICBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoaWRlKVxuXG4gIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gIGRlbGV0ZUJ0bi5jbGFzc05hbWUgPSAndGFzay1mb3JtX19mb3JtX19idG4gdGFzay1mb3JtX19mb3JtX19idG4tLWRlbGV0ZSdcbiAgZGVsZXRlQnRuLnRleHRDb250ZW50ID0gJ0RlbGV0ZSdcbiAgZGVsZXRlQnRuLnR5cGUgPSAnYnV0dG9uJ1xuICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaWYgKHRhc2sgJiYgdGFzay5pZCA+IC0xKSB7XG4gICAgICBUYXNrcy5yZW1vdmVUYXNrKHRhc2suaWQpXG4gICAgICBNZW51LnVwZGF0ZVRhc2tzKClcbiAgICB9XG4gICAgaGlkZSgpXG4gIH0pXG5cbiAgYnRucy5hcHBlbmRDaGlsZChzdWJtaXRCdG4pXG4gIGJ0bnMuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKVxuICBidG5zLmFwcGVuZENoaWxkKGNhbmNlbEJ0bilcblxuICBmb3JtLmFwcGVuZENoaWxkKGZvcm1JbnB1dHMpXG4gIGZvcm0uYXBwZW5kQ2hpbGQoYWRkaXRpb25hbHMpXG4gIGZvcm0uYXBwZW5kQ2hpbGQoYnRucylcblxuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICBjb25zdCB0YXNrT2JqID0ge1xuICAgICAgaWQ6IHRhc2sgJiYgdGFzay5pZCA+IC0xID8gdGFzay5pZCArIDEgOiBUYXNrcy5nZXRMYXN0SWQoKSArIDEsXG4gICAgICB0aXRsZTogdGl0bGUudmFsdWUsXG4gICAgICBkZXNjcmlwdGlvbjogZGVzYy52YWx1ZSA/IGRlc2MudmFsdWUgOiBudWxsLFxuICAgICAgZHVlRGF0ZTogZGF0ZS52YWx1ZSA/IG5ldyBEYXRlKGRhdGUudmFsdWUpIDogbnVsbCxcbiAgICAgIHByaW9yaXR5SWQ6IHByaW9yaXRpZXMudmFsdWUgPiAtMSA/IHByaW9yaXRpZXMudmFsdWUgOiAtMSxcbiAgICAgIHRhZ0lkOiB0YWdzLnZhbHVlID4gLTEgPyB0YWdzLnZhbHVlIDogLTEsXG4gICAgICBkb25lOiB0YXNrID8gdGFzay5kb25lIDogZmFsc2UsXG4gICAgfVxuXG4gICAgaWYgKHRhc2sgJiYgdGFzay5pZCA+IC0xKSB7XG4gICAgICBjb25zdCBpbmRleCA9IFRhc2tzLmdldFRhc2tzKCkuZmluZEluZGV4KCh0KSA9PiB0LmlkID09IHRhc2suaWQpXG4gICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICBUYXNrcy51cGRhdGVUYXNrKGluZGV4LCB0YXNrT2JqKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBUYXNrcy5hZGRUYXNrKHRhc2tPYmopXG4gICAgfVxuICAgIE1lbnUudXBkYXRlVGFza3MoKVxuICAgIGhpZGUoKVxuICB9KVxuXG4gIHBvcHVwLmFwcGVuZENoaWxkKGgyKVxuICBwb3B1cC5hcHBlbmRDaGlsZChmb3JtKVxuICBlbGVtZW50LmFwcGVuZENoaWxkKHBvcHVwKVxuXG4gIGNvbnN0IHVwZGF0ZUZvcm0gPSAodGFza09iaikgPT4ge1xuICAgIHRhc2sgPSB0YXNrT2JqXG5cbiAgICBpZiAodGFzaykge1xuICAgICAgaDIudGV4dENvbnRlbnQgPSAnRWRpdCB0YXNrOidcbiAgICAgIHN1Ym1pdEJ0bi50ZXh0Q29udGVudCA9ICdFZGl0J1xuICAgICAgZGVsZXRlQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpXG5cbiAgICAgIHRpdGxlLnZhbHVlID0gdGFzay50aXRsZVxuICAgICAgZGVzYy52YWx1ZSA9IHRhc2suZGVzY3JpcHRpb25cbiAgICAgIGlmICh0YXNrLmR1ZURhdGUpIGRhdGUudmFsdWUgPSB0YXNrLmR1ZURhdGUudG9JU09TdHJpbmcoKS5zdWJzdHJpbmcoMCwgMTApXG5cbiAgICAgIHByaW9yaXRpZXMudmFsdWUgPSB0YXNrLnByaW9yaXR5SWRcbiAgICAgIHRhZ3MudmFsdWUgPSB0YXNrLnRhZ0lkXG4gICAgfSBlbHNlIHtcbiAgICAgIGgyLnRleHRDb250ZW50ID0gJ0FkZCBuZXcgdGFzazonXG4gICAgICBzdWJtaXRCdG4udGV4dENvbnRlbnQgPSAnQWRkJ1xuICAgICAgZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG5cbiAgICAgIHRpdGxlLnZhbHVlID0gJydcbiAgICAgIGRlc2MudmFsdWUgPSAnJ1xuICAgICAgZGF0ZS52YWx1ZSA9ICcnXG5cbiAgICAgIHByaW9yaXRpZXMudmFsdWUgPSAtMlxuICAgICAgdGFncy52YWx1ZSA9IC0yXG4gICAgfVxuICAgIHNob3coKVxuICB9XG5cbiAgdXBkYXRlVGFncyhUYWdzLmdldFRhZ3MoKSlcbiAgdXBkYXRlUHJpb3JpdGllcyhbXG4gICAgeyBpZDogMCwgY29sb3I6ICcjOTREODJEJywgdGl0bGU6ICdMb3cnIH0sXG4gICAgeyBpZDogMSwgY29sb3I6ICcjRkNDNDE5JywgdGl0bGU6ICdNZWRpdW0nIH0sXG4gICAgeyBpZDogMiwgY29sb3I6ICcjRkY2QjZCJywgdGl0bGU6ICdIaWdoJyB9LFxuICBdKVxuXG4gIHJldHVybiB7IGVsZW1lbnQsIHVwZGF0ZUZvcm0sIGhpZGUsIHVwZGF0ZVRhZ3MgfVxufSkoKVxuXG5leHBvcnQgZGVmYXVsdCBOZXdUYXNrRm9ybVxuIiwiaW1wb3J0IFRhc2tTdGF0dXNJY29uIGZyb20gJy4uL2ljb25zL1Rhc2tTdGF0dXNJY29uJ1xuaW1wb3J0IE1lbnVQcmlvcml0aWVzIGZyb20gJy4uL21lbnUvcHJpb3JpdHkvTWVudVByaW9yaXRpZXMnXG5pbXBvcnQgZm9ybWF0RGlzdGFuY2UgZnJvbSAnZGF0ZS1mbnMvZm9ybWF0RGlzdGFuY2UnXG5pbXBvcnQgVGFncyBmcm9tICcuLi8uLi9kYXRhL3RhZ3MnXG5pbXBvcnQgTmV3VGFza0Zvcm0gZnJvbSAnLi9OZXdUYXNrRm9ybSdcbmltcG9ydCBUYXNrcyBmcm9tICcuLi8uLi9kYXRhL3Rhc2tzJ1xuaW1wb3J0IE1lbnUgZnJvbSAnLi4vbWVudS9NZW51J1xuXG5jb25zdCBUYXNrID0gKHsgaWQsIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHlJZCwgdGFnSWQsIGRvbmUgfSkgPT4ge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgZWxlbWVudC5jbGFzc05hbWUgPSBkb25lID8gJ3Rhc2sgdGFzay0tZG9uZScgOiAndGFzaydcblxuICBjb25zdCBnZXRJY29uID0gKCkgPT5cbiAgICBUYXNrU3RhdHVzSWNvbihcbiAgICAgIGRvbmVcbiAgICAgICAgPyAnZG9uZSdcbiAgICAgICAgOiBwcmlvcml0eUlkID4gLTFcbiAgICAgICAgPyBNZW51UHJpb3JpdGllcy5nZXRQcmlvcml0eUJ5SWQocHJpb3JpdHlJZCkudGl0bGUudG9Mb3dlckNhc2UoKVxuICAgICAgICA6ICdub25lJyxcbiAgICAgICd0YXNrX19pY29uJ1xuICAgIClcblxuICBsZXQgaWNvbiA9IGdldEljb24oKVxuXG4gIGNvbnN0IGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBpbmZvLmNsYXNzTmFtZSA9ICd0YXNrX19pbmZvJ1xuXG4gIGNvbnN0IHRpdGxlRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIHRpdGxlRGVzYy5jbGFzc05hbWUgPSAndGFza19faW5mb19fYmFzaWMnXG5cbiAgY29uc3QgdGl0bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuICB0aXRsZUVsZW1lbnQuY2xhc3NOYW1lID0gJ3Rhc2tfX2luZm9fX3RpdGxlJ1xuICB0aXRsZUVsZW1lbnQudGV4dENvbnRlbnQgPSB0aXRsZVxuXG4gIGNvbnN0IGRlc2NFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gIGRlc2NFbGVtZW50LmNsYXNzTmFtZSA9ICd0YXNrX19pbmZvX19kZXNjJ1xuICBkZXNjRWxlbWVudC50ZXh0Q29udGVudCA9IGRlc2NyaXB0aW9uXG5cbiAgdGl0bGVEZXNjLmFwcGVuZENoaWxkKHRpdGxlRWxlbWVudClcbiAgdGl0bGVEZXNjLmFwcGVuZENoaWxkKGRlc2NFbGVtZW50KVxuXG4gIGNvbnN0IGFkZGl0aW9uYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBhZGRpdGlvbmFsLmNsYXNzTmFtZSA9ICd0YXNrX19pbmZvX19hZGRpdGlvbmFsJ1xuXG4gIGlmICh0YWdJZCA+IC0xKSB7XG4gICAgY29uc3QgdGFnID0gVGFncy5nZXRUYWdCeUlkKHRhZ0lkKVxuICAgIGNvbnN0IHRhZ0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdGFnQ29udGFpbmVyLmNsYXNzTmFtZSA9ICd0YXNrX19pbmZvX190YWcnXG5cbiAgICBjb25zdCB0YWdUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJylcbiAgICB0YWdUaXRsZS5jbGFzc05hbWUgPSAndGFza19faW5mb19fdGFnX190aXRsZSdcbiAgICB0YWdUaXRsZS50ZXh0Q29udGVudCA9IHRhZy50aXRsZVxuXG4gICAgY29uc3QgdGFnQ29sb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRhZ0NvbG9yLmNsYXNzTmFtZSA9ICd0YXNrX19pbmZvX190YWdfX2NvbG9yJ1xuICAgIHRhZ0NvbG9yLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHRhZy5jb2xvclxuXG4gICAgdGFnQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhZ1RpdGxlKVxuICAgIHRhZ0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YWdDb2xvcilcbiAgICBhZGRpdGlvbmFsLmFwcGVuZENoaWxkKHRhZ0NvbnRhaW5lcilcbiAgfVxuXG4gIGlmIChkdWVEYXRlKSB7XG4gICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKVxuICAgIGN1cnJlbnREYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApXG5cbiAgICBkYXRlLmNsYXNzTmFtZSA9ICd0YXNrX19pbmZvX19kYXRlJ1xuICAgIGRhdGUudGV4dENvbnRlbnQgPVxuICAgICAgZHVlRGF0ZS5nZXREYXRlKCkgPT0gY3VycmVudERhdGUuZ2V0RGF0ZSgpXG4gICAgICAgID8gJ1RvZGF5J1xuICAgICAgICA6IGZvcm1hdERpc3RhbmNlKGR1ZURhdGUsIGN1cnJlbnREYXRlLCB7IGFkZFN1ZmZpeDogdHJ1ZSB9KVxuICAgIGRhdGUuc3R5bGUuY29sb3IgPSBkb25lXG4gICAgICA/ICcnXG4gICAgICA6IGR1ZURhdGUgPj0gY3VycmVudERhdGVcbiAgICAgID8gJyM2NmE4MGYnXG4gICAgICA6ICcjZTAzMTMxJ1xuXG4gICAgYWRkaXRpb25hbC5hcHBlbmRDaGlsZChkYXRlKVxuICB9XG4gIGluZm8uYXBwZW5kQ2hpbGQodGl0bGVEZXNjKVxuICBpbmZvLmFwcGVuZENoaWxkKGFkZGl0aW9uYWwpXG5cbiAgZWxlbWVudC5hcHBlbmRDaGlsZChpY29uKVxuICBlbGVtZW50LmFwcGVuZENoaWxkKGluZm8pXG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuXG4gICAgaWYgKGUudGFyZ2V0ID09IGljb24gfHwgaWNvbi5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICAgIFRhc2tzLnVwZGF0ZVRhc2soaWQsIHtcbiAgICAgICAgaWQsXG4gICAgICAgIHRpdGxlLFxuICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgZHVlRGF0ZSxcbiAgICAgICAgcHJpb3JpdHlJZCxcbiAgICAgICAgdGFnSWQsXG4gICAgICAgIGRvbmU6ICFkb25lLFxuICAgICAgfSlcbiAgICAgIE1lbnUudXBkYXRlVGFza3MoKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0YXNrID0gVGFza3MuZ2V0VGFza0J5SWQoaWQpXG4gICAgICBpZiAodGFzaykgTmV3VGFza0Zvcm0udXBkYXRlRm9ybSh0YXNrKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gZWxlbWVudFxufVxuXG5leHBvcnQgZGVmYXVsdCBUYXNrXG4iLCJpbXBvcnQgeyBjbGVhbkNvbnRlbnQgfSBmcm9tICcuLi8uLi9jb250ZW50R2VuZXJhdG9yJ1xuaW1wb3J0IFRhZ3MgZnJvbSAnLi4vLi4vZGF0YS90YWdzJ1xuaW1wb3J0IERpdmlkZXIgZnJvbSAnLi4vRGl2aWRlcidcbmltcG9ydCBFbXB0eU1lc3NhZ2UgZnJvbSAnLi4vRW1wdHlNZXNzYWdlJ1xuaW1wb3J0IEFkZEljb24gZnJvbSAnLi4vaWNvbnMvQWRkSWNvbidcbmltcG9ydCBNb3JlSWNvbiBmcm9tICcuLi9pY29ucy9Nb3JlSWNvbidcbmltcG9ydCBUYWdDb250ZXh0TWVudSBmcm9tICcuLi90YWcvVGFnQ29udGV4dE1lbnUnXG5pbXBvcnQgTmV3VGFza0Zvcm0gZnJvbSAnLi9OZXdUYXNrRm9ybSdcbmltcG9ydCBUYXNrIGZyb20gJy4vVGFzaydcblxuY29uc3QgVGFza3NWaWV3ID0gKCgpID0+IHtcbiAgbGV0IHRhc2tFbGVtZW50cyA9IFtdXG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJylcbiAgZWxlbWVudC5jbGFzc05hbWUgPSAndGFza3MtdmlldydcblxuICBjb25zdCBnZW5lcmF0ZVRhc2tzID0gKHRpdGxlLCB0YWdJZCwgdGFza3MpID0+IHtcbiAgICBjb25zdCBhbmltYXRpb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGFuaW1hdGlvbkNvbnRhaW5lci5jbGFzc05hbWUgPSAnYW5pbWF0aW9uLWZhZGUnXG5cbiAgICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcbiAgICBoMS5jbGFzc05hbWUgPSAndGFza3Mtdmlld19fdGl0bGUnXG4gICAgaDEudGV4dENvbnRlbnQgPSB0aXRsZVxuXG4gICAgY2xlYW5Db250ZW50KGVsZW1lbnQpXG4gICAgaWYgKHRhZ0lkID4gLTEpIHtcbiAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpXG4gICAgICBoZWFkZXIuY2xhc3NOYW1lID0gJ3Rhc2tzLXZpZXdfX2hlYWRlcidcblxuICAgICAgY29uc3QgbW9yZUljb24gPSBNb3JlSWNvbigndGFza3Mtdmlld19faWNvbi0tbW9yZScpXG4gICAgICBtb3JlSWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIFRhZ0NvbnRleHRNZW51LmdlbmVyYXRlTWVudSh0YWdJZCwgZS5jbGllbnRYLCBlLmNsaWVudFkpXG4gICAgICB9KVxuICAgICAgY29uc3QgdGFnID0gVGFncy5nZXRUYWdCeUlkKHRhZ0lkKVxuICAgICAgaWYgKHRhZykgaDEudGV4dENvbnRlbnQgPSB0YWcudGl0bGVcblxuICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKGgxKVxuICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKG1vcmVJY29uKVxuXG4gICAgICBhbmltYXRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKVxuICAgIH0gZWxzZSB7XG4gICAgICBhbmltYXRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQoaDEpXG4gICAgfVxuICAgIGFuaW1hdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChEaXZpZGVyKCkpXG5cbiAgICBpZiAodGFza3MubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgdGFza3NDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgdGFza3NDb250YWluZXIuY2xhc3NOYW1lID0gJ3Rhc2tzLXZpZXdfX3Rhc2tzJ1xuXG4gICAgICBmb3IgKGxldCB0YXNrIG9mIHRhc2tzKSB7XG4gICAgICAgIGNvbnN0IHRhc2tJdGVtID0gVGFzayh0YXNrKVxuICAgICAgICB0YXNrc0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrSXRlbSlcbiAgICAgICAgdGFza0VsZW1lbnRzLnB1c2godGFza0l0ZW0pXG4gICAgICB9XG4gICAgICBhbmltYXRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQodGFza3NDb250YWluZXIpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFuaW1hdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChcbiAgICAgICAgRW1wdHlNZXNzYWdlKFxuICAgICAgICAgIFwiSXQncyBwcmV0dHkgZW1wdHkgaGVyZSDwn5iVLiBBZGQgYSBuZXcgdGFzayB3aXRoIHRoZSBidXR0b24gYmVsb3chXCJcbiAgICAgICAgKVxuICAgICAgKVxuICAgIH1cblxuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgYnRuLmNsYXNzTmFtZSA9ICd0YXNrcy12aWV3X19idG4nXG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gTmV3VGFza0Zvcm0udXBkYXRlRm9ybShudWxsKSlcblxuICAgIGNvbnN0IGJ0blRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKVxuICAgIGJ0blRpdGxlLmNsYXNzTmFtZSA9ICd0YXNrcy12aWV3X19idG5fX3RpdGxlJ1xuICAgIGJ0blRpdGxlLnRleHRDb250ZW50ID0gJ0FkZCBuZXcgdGFzaydcblxuICAgIGJ0bi5hcHBlbmRDaGlsZChBZGRJY29uKCd0YXNrcy12aWV3X19idG5fX2ljb24nKSlcbiAgICBidG4uYXBwZW5kQ2hpbGQoYnRuVGl0bGUpXG5cbiAgICBhbmltYXRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQoRGl2aWRlcigpKVxuICAgIGFuaW1hdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChidG4pXG5cbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGFuaW1hdGlvbkNvbnRhaW5lcilcbiAgfVxuXG4gIHJldHVybiB7IGVsZW1lbnQsIGdlbmVyYXRlVGFza3MgfVxufSkoKVxuXG5leHBvcnQgZGVmYXVsdCBUYXNrc1ZpZXdcbiIsImV4cG9ydCBjb25zdCBjbGVhbkNvbnRlbnQgPSAobm9kZSkgPT4ge1xuICB3aGlsZSAobm9kZS5maXJzdENoaWxkKSB7XG4gICAgbm9kZS5yZW1vdmVDaGlsZChub2RlLmZpcnN0Q2hpbGQpXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlQ29udGVudCA9IChub2RlLCBjb250ZW50KSA9PiB7XG4gIG5vZGUuYXBwZW5kQ2hpbGQoY29udGVudClcbn1cbiIsIi8vIGlkLCB0aXRsZSwgY29sb3JcbmNvbnN0IFRhZ3MgPSAoKCkgPT4ge1xuICBjb25zdCB0YWdzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RhZ3MnKSA/IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLnRhZ3MpIDogW11cbiAgbGV0IGxhc3RJZCA9IHRhZ3MubGVuZ3RoID4gMCA/IHRhZ3NbdGFncy5sZW5ndGggLSAxXS5pZCA6IC0xXG5cbiAgY29uc3Qgc2F2ZVRvU3RvcmFnZSA9ICgpID0+IChsb2NhbFN0b3JhZ2UudGFncyA9IEpTT04uc3RyaW5naWZ5KHRhZ3MpKVxuXG4gIGNvbnN0IGdldFRhZ0J5SWQgPSAoaWQpID0+IHRhZ3MuZmluZCgodGFnKSA9PiB0YWcuaWQgPT0gaWQpXG4gIGNvbnN0IGdldFRhZ3MgPSAoKSA9PiB0YWdzXG4gIGNvbnN0IGdldExhc3RJZCA9ICgpID0+IGxhc3RJZFxuXG4gIGNvbnN0IGFkZFRhZyA9ICh0YWcpID0+IHtcbiAgICB0YWdzLnB1c2godGFnKVxuICAgIHNhdmVUb1N0b3JhZ2UoKVxuXG4gICAgbGFzdElkKytcbiAgfVxuXG4gIGNvbnN0IHJlbW92ZVRhZyA9IChpZCkgPT4ge1xuICAgIGNvbnN0IGluZGV4ID0gdGFncy5maW5kSW5kZXgoKHRhZykgPT4gdGFnLmlkID09IGlkKVxuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICB0YWdzLnNwbGljZShpbmRleCwgMSlcbiAgICAgIHNhdmVUb1N0b3JhZ2UoKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHVwZGF0ZVRhZyA9IChpZCwgdGFnKSA9PiB7XG4gICAgY29uc3QgaW5kZXggPSB0YWdzLmZpbmRJbmRleCgodGFnKSA9PiB0YWcuaWQgPT0gaWQpXG4gICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgIHRhZ3Muc3BsaWNlKGlkLCAxLCB0YWcpXG4gICAgICBzYXZlVG9TdG9yYWdlKClcbiAgICB9XG4gIH1cblxuICByZXR1cm4geyBnZXRUYWdCeUlkLCBnZXRUYWdzLCBnZXRMYXN0SWQsIGFkZFRhZywgcmVtb3ZlVGFnLCB1cGRhdGVUYWcgfVxufSkoKVxuXG5leHBvcnQgZGVmYXVsdCBUYWdzXG4iLCJjb25zdCBUYXNrcyA9ICgoKSA9PiB7XG4gIGNvbnN0IGxvYWRGcm9tU3RvcmFnZSA9ICgpID0+IHtcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tzJykpIHtcbiAgICAgIGNvbnN0IGxvYWRlZFRhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UudGFza3MpXG4gICAgICBmb3IgKGxldCB0YXNrIG9mIGxvYWRlZFRhc2tzKSB7XG4gICAgICAgIGlmICh0YXNrLmR1ZURhdGUpIHRhc2suZHVlRGF0ZSA9IG5ldyBEYXRlKHBhcnNlSW50KHRhc2suZHVlRGF0ZSkpXG4gICAgICAgIGVsc2UgdGFzay5kdWVEYXRlID0gbnVsbFxuICAgICAgfVxuICAgICAgcmV0dXJuIGxvYWRlZFRhc2tzXG4gICAgfVxuICAgIHJldHVybiBbXVxuICB9XG5cbiAgY29uc3QgdGFza3MgPSBsb2FkRnJvbVN0b3JhZ2UoKVxuICBsZXQgbGFzdElkID0gdGFza3MubGVuZ3RoID4gMCA/IHRhc2tzW3Rhc2tzLmxlbmd0aCAtIDFdLmlkIDogLTFcblxuICBjb25zdCBzYXZlVG9TdG9yYWdlID0gKCkgPT4ge1xuICAgIGNvbnN0IHRhc2tzQ29weSA9IFtdXG4gICAgZm9yIChsZXQgdGFzayBvZiB0YXNrcykge1xuICAgICAgbGV0IHRhc2tDb3B5ID0geyAuLi50YXNrIH1cbiAgICAgIGlmICh0YXNrQ29weS5kdWVEYXRlKSB7XG4gICAgICAgIHRhc2tDb3B5LmR1ZURhdGUgPSArdGFza0NvcHkuZHVlRGF0ZVxuICAgICAgfVxuICAgICAgdGFza3NDb3B5LnB1c2godGFza0NvcHkpXG4gICAgfVxuICAgIGxvY2FsU3RvcmFnZS50YXNrcyA9IEpTT04uc3RyaW5naWZ5KHRhc2tzQ29weSlcbiAgfVxuXG4gIGNvbnN0IGdldFNvcnRlZFRhc2tzID0gKCkgPT4ge1xuICAgIHJldHVybiBbLi4udGFza3NdLnNvcnQoKHRhc2sxLCB0YXNrMikgPT4ge1xuICAgICAgY29uc3QgcHJpb3JpdHkxID0gdGFzazEuZG9uZSA/IC05OSA6IHRhc2sxLnByaW9yaXR5SWRcbiAgICAgIGNvbnN0IHByaW9yaXR5MiA9IHRhc2syLmRvbmUgPyAtOTkgOiB0YXNrMi5wcmlvcml0eUlkXG5cbiAgICAgIGlmIChwcmlvcml0eTEgPiBwcmlvcml0eTIpIHJldHVybiAtMVxuICAgICAgaWYgKHByaW9yaXR5MSA8IHByaW9yaXR5MikgcmV0dXJuIDFcblxuICAgICAgaWYgKHRhc2sxLmR1ZURhdGUgPCB0YXNrMi5kdWVEYXRlKSByZXR1cm4gLTFcbiAgICAgIGlmICh0YXNrMS5kdWVEYXRlID4gdGFzazIuZHVlRGF0ZSkgcmV0dXJuIDFcbiAgICB9KVxuICB9XG5cbiAgY29uc3QgZ2V0VGFza0J5SWQgPSAoaWQpID0+IHRhc2tzLmZpbmQoKHRhc2spID0+IHRhc2suaWQgPT0gaWQpXG4gIGNvbnN0IGdldFRhc2tzID0gKCkgPT4gdGFza3NcbiAgY29uc3QgZ2V0TGFzdElkID0gKCkgPT4gbGFzdElkXG5cbiAgY29uc3QgYWRkVGFzayA9ICh0YXNrKSA9PiB7XG4gICAgdGFza3MucHVzaCh0YXNrKVxuICAgIHNhdmVUb1N0b3JhZ2UoKVxuXG4gICAgbGFzdElkKytcbiAgfVxuXG4gIGNvbnN0IHVwZGF0ZVRhc2sgPSAoaWQsIHRhc2spID0+IHtcbiAgICBjb25zdCBpbmRleCA9IHRhc2tzLmZpbmRJbmRleCgodGFzaykgPT4gdGFzay5pZCA9PSBpZClcbiAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgdGFza3Muc3BsaWNlKGlkLCAxLCB0YXNrKVxuICAgICAgc2F2ZVRvU3RvcmFnZSgpXG4gICAgfVxuICB9XG5cbiAgY29uc3QgcmVtb3ZlVGFzayA9IChpZCkgPT4ge1xuICAgIGNvbnN0IGluZGV4ID0gdGFza3MuZmluZEluZGV4KCh0YXNrKSA9PiB0YXNrLmlkID09IGlkKVxuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICB0YXNrcy5zcGxpY2UoaW5kZXgsIDEpXG4gICAgICBzYXZlVG9TdG9yYWdlKClcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGdldFRhc2tCeUlkLFxuICAgIGdldFRhc2tzLFxuICAgIGdldExhc3RJZCxcbiAgICBnZXRTb3J0ZWRUYXNrcyxcbiAgICBhZGRUYXNrLFxuICAgIHVwZGF0ZVRhc2ssXG4gICAgcmVtb3ZlVGFzayxcbiAgfVxufSkoKVxuXG5leHBvcnQgZGVmYXVsdCBUYXNrc1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi4vc2Nzcy9pbmRleC5zY3NzJ1xuaW1wb3J0IE5hdmJhciBmcm9tICcuL2NvbXBvbmVudHMvTmF2YmFyJ1xuaW1wb3J0IE1haW4gZnJvbSAnLi9jb21wb25lbnRzL01haW4nXG5pbXBvcnQgQ29sb3JQaWNrZXIgZnJvbSAnLi9jb21wb25lbnRzL0NvbG9yUGlja2VyJ1xuaW1wb3J0IE5ld1Rhc2tGb3JtIGZyb20gJy4vY29tcG9uZW50cy90YXNrL05ld1Rhc2tGb3JtJ1xuaW1wb3J0IFRhZ0NvbnRleHRNZW51IGZyb20gJy4vY29tcG9uZW50cy90YWcvVGFnQ29udGV4dE1lbnUnXG5pbXBvcnQgVGFnRWRpdFBvcHVwIGZyb20gJy4vY29tcG9uZW50cy90YWcvVGFnRWRpdFBvcHVwJ1xuaW1wb3J0IFRhZ0RlbGV0ZVBvcHVwIGZyb20gJy4vY29tcG9uZW50cy90YWcvVGFnRGVsZXRlUG9wdXAnXG5pbXBvcnQgeyBnZW5lcmF0ZUNvbnRlbnQgfSBmcm9tICcuL2NvbnRlbnRHZW5lcmF0b3InXG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKVxuZ2VuZXJhdGVDb250ZW50KGNvbnRhaW5lciwgTmF2YmFyKVxuZ2VuZXJhdGVDb250ZW50KGNvbnRhaW5lciwgTWFpbilcbmdlbmVyYXRlQ29udGVudChjb250YWluZXIsIENvbG9yUGlja2VyLmVsZW1lbnQpXG5nZW5lcmF0ZUNvbnRlbnQoY29udGFpbmVyLCBOZXdUYXNrRm9ybS5lbGVtZW50KVxuZ2VuZXJhdGVDb250ZW50KGNvbnRhaW5lciwgVGFnQ29udGV4dE1lbnUuZWxlbWVudClcbmdlbmVyYXRlQ29udGVudChjb250YWluZXIsIFRhZ0VkaXRQb3B1cC5lbGVtZW50KVxuZ2VuZXJhdGVDb250ZW50KGNvbnRhaW5lciwgVGFnRGVsZXRlUG9wdXAuZWxlbWVudClcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==