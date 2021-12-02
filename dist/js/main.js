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
    for (let option of _option_MenuOptions__WEBPACK_IMPORTED_MODULE_0__["default"].menuOptions) {
      option.removeActiveClass()
    }

    for (let tag of _tag_MenuTags__WEBPACK_IMPORTED_MODULE_1__["default"].tagElements) {
      tag.removeActiveClass()
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
      _task_TasksView__WEBPACK_IMPORTED_MODULE_0__["default"].generateTasks(title, sortedTasks)
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
/* harmony import */ var _data_tasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../data/tasks */ "./src/js/data/tasks.js");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Menu */ "./src/js/components/menu/Menu.js");
/* harmony import */ var _MenuTitle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../MenuTitle */ "./src/js/components/menu/MenuTitle.js");
/* harmony import */ var _MenuPriority__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MenuPriority */ "./src/js/components/menu/priority/MenuPriority.js");





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
      const priorityElement = (0,_MenuPriority__WEBPACK_IMPORTED_MODULE_3__["default"])(
        priority,
        () => {
          _Menu__WEBPACK_IMPORTED_MODULE_1__["default"].cleanActives()
          priorityElement.addActiveClass()
        },
        filter(_data_tasks__WEBPACK_IMPORTED_MODULE_0__["default"].getSortedTasks(), priority)
      )

      priorityElements.push(priorityElement)
      prioritiesContainer.appendChild(priorityElement.element)
    }

    element.innerHTML = ''
    element.appendChild((0,_MenuTitle__WEBPACK_IMPORTED_MODULE_2__["default"])('Priorities'))
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
    _task_TasksView__WEBPACK_IMPORTED_MODULE_0__["default"].generateTasks(title, sortedTasks)
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
/* harmony import */ var _task_TasksView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../task/TasksView */ "./src/js/components/task/TasksView.js");
/* harmony import */ var _CurrentMenuOption__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../CurrentMenuOption */ "./src/js/components/menu/CurrentMenuOption.js");



const MenuTag = ({ id, color, title }, clickEvent, tasks) => {
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

  element.appendChild(colorSymbol)
  element.appendChild(titleElement)
  element.addEventListener('click', (e) => {
    e.preventDefault()

    clickEvent()
    _task_TasksView__WEBPACK_IMPORTED_MODULE_0__["default"].generateTasks(title, sortedTasks)
    _CurrentMenuOption__WEBPACK_IMPORTED_MODULE_1__["default"].setElement(element)
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









const MenuTags = (() => {
  let tagElements = []
  const element = document.createElement('div')
  element.className = 'menu__tags-container'

  const filter = (tasks, tag) => tasks.filter((task) => task.tagId == tag.id)

  const generateTags = (tags) => {
    element.innerHTML = ''
    element.appendChild((0,_MenuTitle__WEBPACK_IMPORTED_MODULE_1__["default"])('Tags'))
    tagElements = []

    if (tags.length > 0) {
      const tagsContainer = document.createElement('div')
      tagsContainer.className = 'menu__tags'

      for (let tag of tags) {
        const tagElement = (0,_MenuTag__WEBPACK_IMPORTED_MODULE_2__["default"])(
          tag,
          () => {
            _Menu__WEBPACK_IMPORTED_MODULE_4__["default"].cleanActives()
            tagElement.addActiveClass()
          },
          filter(_data_tasks__WEBPACK_IMPORTED_MODULE_5__["default"].getSortedTasks(), tag)
        )

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
    element.appendChild(
      (0,_NewTagBtn__WEBPACK_IMPORTED_MODULE_3__["default"])((tag) => {
        _data_tags__WEBPACK_IMPORTED_MODULE_6__["default"].addTag(tag)
        _task_NewTaskForm__WEBPACK_IMPORTED_MODULE_7__["default"].updateTags(_data_tags__WEBPACK_IMPORTED_MODULE_6__["default"].getTags())

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

  return { element, generateTags, tagElements, updateTasks }
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
      _ColorPicker__WEBPACK_IMPORTED_MODULE_1__["default"].generate(currentColor, e.x, e.clientY)
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
      submitEvent({
        color: currentColor.getAttribute('data-color'),
        title: nameInput.value,
      })
    })

    element.innerHTML = ''
    element.appendChild(form)
  }

  generateButton()
  return element
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewTagBtn);


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
/* harmony import */ var _data_tags__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data/tags */ "./src/js/data/tags.js");
/* harmony import */ var _data_tasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data/tasks */ "./src/js/data/tasks.js");
/* harmony import */ var _menu_Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../menu/Menu */ "./src/js/components/menu/Menu.js");




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
    priorities.innerHTML = ''

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
      _data_tasks__WEBPACK_IMPORTED_MODULE_1__["default"].removeTask(task.id)
      _menu_Menu__WEBPACK_IMPORTED_MODULE_2__["default"].updateTasks()
    }
    hide()
  })

  btns.appendChild(submitBtn)
  btns.appendChild(cancelBtn)
  btns.appendChild(deleteBtn)

  form.appendChild(formInputs)
  form.appendChild(additionals)
  form.appendChild(btns)

  form.addEventListener('submit', (e) => {
    e.preventDefault()

    const taskObj = {
      id: task && task.id > -1 ? task.id + 1 : _data_tasks__WEBPACK_IMPORTED_MODULE_1__["default"].getLastId() + 1,
      title: title.value,
      description: desc.value ? desc.value : null,
      dueDate: date.value ? new Date(date.value) : null,
      priorityId: priorities.value > -1 ? priorities.value : -1,
      tagId: tags.value > -1 ? tags.value : -1,
      done: task ? task.done : false,
    }

    if (task && task.id > -1) {
      const index = _data_tasks__WEBPACK_IMPORTED_MODULE_1__["default"].getTasks().findIndex((t) => t.id == task.id)
      if (index > -1) {
        _data_tasks__WEBPACK_IMPORTED_MODULE_1__["default"].updateTask(index, taskObj)
      }
    } else {
      _data_tasks__WEBPACK_IMPORTED_MODULE_1__["default"].addTask(taskObj)
    }
    _menu_Menu__WEBPACK_IMPORTED_MODULE_2__["default"].updateTasks()
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
    } else {
      h2.textContent = 'Add new task:'
      submitBtn.textContent = 'Add'
      deleteBtn.classList.add('hidden')

      title.value = ''
      desc.value = ''
      date.value = ''
    }
    show()
  }

  updateTags(_data_tags__WEBPACK_IMPORTED_MODULE_0__["default"].getTags())
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
/* harmony import */ var date_fns_formatDistance__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns/formatDistance */ "./node_modules/date-fns/esm/formatDistance/index.js");
/* harmony import */ var _data_tags__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data/tags */ "./src/js/data/tags.js");
/* harmony import */ var _NewTaskForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NewTaskForm */ "./src/js/components/task/NewTaskForm.js");
/* harmony import */ var _data_tasks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data/tasks */ "./src/js/data/tasks.js");







const Task = ({ id, title, description, dueDate, priorityId, tagId, done }) => {
  const element = document.createElement('div')
  element.className = done ? 'task task--done' : 'task'

  const icon = (0,_icons_TaskStatusIcon__WEBPACK_IMPORTED_MODULE_0__["default"])(
    done
      ? 'done'
      : priorityId > -1
      ? _menu_priority_MenuPriorities__WEBPACK_IMPORTED_MODULE_1__["default"].getPriorityById(priorityId).title.toLowerCase()
      : 'none',
    'task__icon'
  )
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
        : (0,date_fns_formatDistance__WEBPACK_IMPORTED_MODULE_5__["default"])(dueDate, currentDate, { addSuffix: true })
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

    const task = _data_tasks__WEBPACK_IMPORTED_MODULE_4__["default"].getTaskById(id)
    if (task) _NewTaskForm__WEBPACK_IMPORTED_MODULE_3__["default"].updateForm(task)
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
/* harmony import */ var _Divider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Divider */ "./src/js/components/Divider.js");
/* harmony import */ var _EmptyMessage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../EmptyMessage */ "./src/js/components/EmptyMessage.js");
/* harmony import */ var _icons_AddIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icons/AddIcon */ "./src/js/components/icons/AddIcon.js");
/* harmony import */ var _NewTaskForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NewTaskForm */ "./src/js/components/task/NewTaskForm.js");
/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Task */ "./src/js/components/task/Task.js");






const TasksView = (() => {
  let taskElements = []
  const element = document.createElement('main')
  element.className = 'tasks-view'

  const generateTasks = (title, tasks) => {
    const h1 = document.createElement('h1')
    h1.className = 'tasks-view__title'
    h1.textContent = title

    element.innerHTML = ''
    element.appendChild(h1)
    element.appendChild((0,_Divider__WEBPACK_IMPORTED_MODULE_0__["default"])())

    if (tasks.length > 0) {
      const tasksContainer = document.createElement('div')
      tasksContainer.className = 'tasks-view__tasks'

      for (let task of tasks) {
        const taskItem = (0,_Task__WEBPACK_IMPORTED_MODULE_4__["default"])(task)
        tasksContainer.appendChild(taskItem)
        taskElements.push(taskItem)
      }
      element.appendChild(tasksContainer)
    } else {
      element.appendChild(
        (0,_EmptyMessage__WEBPACK_IMPORTED_MODULE_1__["default"])(
          "It's pretty empty here 😕. Add a new task with the button below!"
        )
      )
    }

    const btn = document.createElement('button')
    btn.className = 'tasks-view__btn'
    btn.addEventListener('click', () => _NewTaskForm__WEBPACK_IMPORTED_MODULE_3__["default"].updateForm(null))

    const btnTitle = document.createElement('h3')
    btnTitle.className = 'tasks-view__btn__title'
    btnTitle.textContent = 'Add new task'

    btn.appendChild((0,_icons_AddIcon__WEBPACK_IMPORTED_MODULE_2__["default"])('tasks-view__btn__icon'))
    btn.appendChild(btnTitle)

    element.appendChild((0,_Divider__WEBPACK_IMPORTED_MODULE_0__["default"])())
    element.appendChild(btn)
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
  node.innerHTML = ''
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
  let lastId =
    tags.length > 0 && tags[tags.length - 1].id ? tags[tags.length - 1] : -1

  const saveToStorage = () => (localStorage.tags = JSON.stringify(tags))

  const getTagById = (id) => tags.find((tag) => tag.id == id)
  const getTags = () => tags
  const getLastId = () => lastId

  const addTag = (tag) => {
    tag.id = ++lastId
    tags.push(tag)
    saveToStorage()
  }

  const removeTag = (id) => {
    const index = tags.findIndex((tag) => tag.id == id)
    if (index > -1) {
      tags.splice(index, 1)
      saveToStorage()
    }
  }

  const updateTag = (id, tag) => {
    tags[id] = tag
    saveToStorage()
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
      if (task1.dueDate < task2.dueDate) return -1
      if (task1.dueDate > task2.dueDate) return 1

      if (task1.priorityId > task2.priorityId) return -1
      if (task1.priorityId < task2.priorityId) return 1
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
    tasks[id] = task
    saveToStorage()
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
/* harmony import */ var _contentGenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contentGenerator */ "./src/js/contentGenerator.js");







const container = document.querySelector('.container')
;(0,_contentGenerator__WEBPACK_IMPORTED_MODULE_5__.generateContent)(container, _components_Navbar__WEBPACK_IMPORTED_MODULE_1__["default"])
;(0,_contentGenerator__WEBPACK_IMPORTED_MODULE_5__.generateContent)(container, _components_Main__WEBPACK_IMPORTED_MODULE_2__["default"])
;(0,_contentGenerator__WEBPACK_IMPORTED_MODULE_5__.generateContent)(container, _components_ColorPicker__WEBPACK_IMPORTED_MODULE_3__["default"].element)
;(0,_contentGenerator__WEBPACK_IMPORTED_MODULE_5__.generateContent)(container, _components_task_NewTaskForm__WEBPACK_IMPORTED_MODULE_4__["default"].element)

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVELGlFQUFlLEtBQUs7Ozs7Ozs7VUN6RXBCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOMkI7QUFDYTtBQUNKO0FBQ2M7QUFDSztBQUNIOztBQUVwRDtBQUNBLG1FQUFlLFlBQVksMERBQU07QUFDakMsbUVBQWUsWUFBWSx3REFBSTtBQUMvQixtRUFBZSxZQUFZLHVFQUFtQjtBQUM5QyxtRUFBZSxZQUFZLDRFQUFtQiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2Fzc2lnbi9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9jbG9uZU9iamVjdC9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yb3VuZGluZ01ldGhvZHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2NvbXBhcmVBc2MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2RpZmZlcmVuY2VJbkNhbGVuZGFyTW9udGhzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9kaWZmZXJlbmNlSW5NaWxsaXNlY29uZHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2RpZmZlcmVuY2VJbk1vbnRocy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZGlmZmVyZW5jZUluU2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZW5kT2ZEYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2VuZE9mTW9udGgvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2Zvcm1hdERpc3RhbmNlL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc0xhc3REYXlPZk1vbnRoL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZEZvcm1hdExvbmdGbi9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRMb2NhbGl6ZUZuL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZE1hdGNoRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkTWF0Y2hQYXR0ZXJuRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdERpc3RhbmNlL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXRMb25nL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXRSZWxhdGl2ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvbG9jYWxpemUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL21hdGNoL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zY3NzL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvYXNzZXRzL2ljb25zL2luYm94LnN2ZyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9hc3NldHMvaWNvbnMvbWVudS5zdmciLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvYXNzZXRzL2ljb25zL25leHQtNy1kYXlzLnN2ZyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9hc3NldHMvaWNvbnMvcGx1cy5zdmciLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvYXNzZXRzL2ljb25zL3Rhc2tzL2RvbmUuc3ZnIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2Fzc2V0cy9pY29ucy90YXNrcy9oaWdoLnN2ZyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9hc3NldHMvaWNvbnMvdGFza3MvbWVkaXVtLnN2ZyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9hc3NldHMvaWNvbnMvdGFza3Mvbm9uZS5zdmciLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvYXNzZXRzL2ljb25zL3Rhc2tzL3NtYWxsLnN2ZyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9hc3NldHMvaWNvbnMvdG9kYXkuc3ZnIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2pzL2NvbXBvbmVudHMvQ29sb3JQaWNrZXIuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvanMvY29tcG9uZW50cy9EaXZpZGVyLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2pzL2NvbXBvbmVudHMvRW1wdHlNZXNzYWdlLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2pzL2NvbXBvbmVudHMvTWFpbi5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9qcy9jb21wb25lbnRzL05hdmJhci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9qcy9jb21wb25lbnRzL2ljb25zL0FkZEljb24uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvanMvY29tcG9uZW50cy9pY29ucy9JY29uLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2pzL2NvbXBvbmVudHMvaWNvbnMvSW5ib3hJY29uLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2pzL2NvbXBvbmVudHMvaWNvbnMvTWVudUljb24uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvanMvY29tcG9uZW50cy9pY29ucy9OZXh0RGF5c0ljb24uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvanMvY29tcG9uZW50cy9pY29ucy9UYXNrU3RhdHVzSWNvbi5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9qcy9jb21wb25lbnRzL2ljb25zL1RvZGF5SWNvbi5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9qcy9jb21wb25lbnRzL21lbnUvQ3VycmVudE1lbnVPcHRpb24uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvanMvY29tcG9uZW50cy9tZW51L01lbnUuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvanMvY29tcG9uZW50cy9tZW51L01lbnVUaXRsZS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9qcy9jb21wb25lbnRzL21lbnUvb3B0aW9uL01lbnVPcHRpb24uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvanMvY29tcG9uZW50cy9tZW51L29wdGlvbi9NZW51T3B0aW9ucy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9qcy9jb21wb25lbnRzL21lbnUvcHJpb3JpdHkvTWVudVByaW9yaXRpZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvanMvY29tcG9uZW50cy9tZW51L3ByaW9yaXR5L01lbnVQcmlvcml0eS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9qcy9jb21wb25lbnRzL21lbnUvdGFnL01lbnVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvanMvY29tcG9uZW50cy9tZW51L3RhZy9NZW51VGFncy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9qcy9jb21wb25lbnRzL21lbnUvdGFnL05ld1RhZ0J0bi5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9qcy9jb21wb25lbnRzL3Rhc2svTmV3VGFza0Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvanMvY29tcG9uZW50cy90YXNrL1Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvanMvY29tcG9uZW50cy90YXNrL1Rhc2tzVmlldy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9qcy9jb250ZW50R2VuZXJhdG9yLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2pzL2RhdGEvdGFncy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9qcy9kYXRhL3Rhc2tzLmpzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvanMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXNzaWduKHRhcmdldCwgZGlydHlPYmplY3QpIHtcbiAgaWYgKHRhcmdldCA9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignYXNzaWduIHJlcXVpcmVzIHRoYXQgaW5wdXQgcGFyYW1ldGVyIG5vdCBiZSBudWxsIG9yIHVuZGVmaW5lZCcpO1xuICB9XG5cbiAgZGlydHlPYmplY3QgPSBkaXJ0eU9iamVjdCB8fCB7fTtcblxuICBmb3IgKHZhciBwcm9wZXJ0eSBpbiBkaXJ0eU9iamVjdCkge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZGlydHlPYmplY3QsIHByb3BlcnR5KSkge1xuICAgICAgdGFyZ2V0W3Byb3BlcnR5XSA9IGRpcnR5T2JqZWN0W3Byb3BlcnR5XTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufSIsImltcG9ydCBhc3NpZ24gZnJvbSBcIi4uL2Fzc2lnbi9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2xvbmVPYmplY3QoZGlydHlPYmplY3QpIHtcbiAgcmV0dXJuIGFzc2lnbih7fSwgZGlydHlPYmplY3QpO1xufSIsIi8qKlxuICogR29vZ2xlIENocm9tZSBhcyBvZiA2Ny4wLjMzOTYuODcgaW50cm9kdWNlZCB0aW1lem9uZXMgd2l0aCBvZmZzZXQgdGhhdCBpbmNsdWRlcyBzZWNvbmRzLlxuICogVGhleSB1c3VhbGx5IGFwcGVhciBmb3IgZGF0ZXMgdGhhdCBkZW5vdGUgdGltZSBiZWZvcmUgdGhlIHRpbWV6b25lcyB3ZXJlIGludHJvZHVjZWRcbiAqIChlLmcuIGZvciAnRXVyb3BlL1ByYWd1ZScgdGltZXpvbmUgdGhlIG9mZnNldCBpcyBHTVQrMDA6NTc6NDQgYmVmb3JlIDEgT2N0b2JlciAxODkxXG4gKiBhbmQgR01UKzAxOjAwOjAwIGFmdGVyIHRoYXQgZGF0ZSlcbiAqXG4gKiBEYXRlI2dldFRpbWV6b25lT2Zmc2V0IHJldHVybnMgdGhlIG9mZnNldCBpbiBtaW51dGVzIGFuZCB3b3VsZCByZXR1cm4gNTcgZm9yIHRoZSBleGFtcGxlIGFib3ZlLFxuICogd2hpY2ggd291bGQgbGVhZCB0byBpbmNvcnJlY3QgY2FsY3VsYXRpb25zLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gcmV0dXJucyB0aGUgdGltZXpvbmUgb2Zmc2V0IGluIG1pbGxpc2Vjb25kcyB0aGF0IHRha2VzIHNlY29uZHMgaW4gYWNjb3VudC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhkYXRlKSB7XG4gIHZhciB1dGNEYXRlID0gbmV3IERhdGUoRGF0ZS5VVEMoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCksIGRhdGUuZ2V0RGF0ZSgpLCBkYXRlLmdldEhvdXJzKCksIGRhdGUuZ2V0TWludXRlcygpLCBkYXRlLmdldFNlY29uZHMoKSwgZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSkpO1xuICB1dGNEYXRlLnNldFVUQ0Z1bGxZZWFyKGRhdGUuZ2V0RnVsbFllYXIoKSk7XG4gIHJldHVybiBkYXRlLmdldFRpbWUoKSAtIHV0Y0RhdGUuZ2V0VGltZSgpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVpcmVkQXJncyhyZXF1aXJlZCwgYXJncykge1xuICBpZiAoYXJncy5sZW5ndGggPCByZXF1aXJlZCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocmVxdWlyZWQgKyAnIGFyZ3VtZW50JyArIChyZXF1aXJlZCA+IDEgPyAncycgOiAnJykgKyAnIHJlcXVpcmVkLCBidXQgb25seSAnICsgYXJncy5sZW5ndGggKyAnIHByZXNlbnQnKTtcbiAgfVxufSIsInZhciByb3VuZGluZ01hcCA9IHtcbiAgY2VpbDogTWF0aC5jZWlsLFxuICByb3VuZDogTWF0aC5yb3VuZCxcbiAgZmxvb3I6IE1hdGguZmxvb3IsXG4gIHRydW5jOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgPCAwID8gTWF0aC5jZWlsKHZhbHVlKSA6IE1hdGguZmxvb3IodmFsdWUpO1xuICB9IC8vIE1hdGgudHJ1bmMgaXMgbm90IHN1cHBvcnRlZCBieSBJRVxuXG59O1xudmFyIGRlZmF1bHRSb3VuZGluZ01ldGhvZCA9ICd0cnVuYyc7XG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91bmRpbmdNZXRob2QobWV0aG9kKSB7XG4gIHJldHVybiBtZXRob2QgPyByb3VuZGluZ01hcFttZXRob2RdIDogcm91bmRpbmdNYXBbZGVmYXVsdFJvdW5kaW5nTWV0aG9kXTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGNvbXBhcmVBc2NcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29tcGFyZSB0aGUgdHdvIGRhdGVzIGFuZCByZXR1cm4gLTEsIDAgb3IgMS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbXBhcmUgdGhlIHR3byBkYXRlcyBhbmQgcmV0dXJuIDEgaWYgdGhlIGZpcnN0IGRhdGUgaXMgYWZ0ZXIgdGhlIHNlY29uZCxcbiAqIC0xIGlmIHRoZSBmaXJzdCBkYXRlIGlzIGJlZm9yZSB0aGUgc2Vjb25kIG9yIDAgaWYgZGF0ZXMgYXJlIGVxdWFsLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgZmlyc3QgZGF0ZSB0byBjb21wYXJlXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgc2Vjb25kIGRhdGUgdG8gY29tcGFyZVxuICogQHJldHVybnMge051bWJlcn0gdGhlIHJlc3VsdCBvZiB0aGUgY29tcGFyaXNvblxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb21wYXJlIDExIEZlYnJ1YXJ5IDE5ODcgYW5kIDEwIEp1bHkgMTk4OTpcbiAqIGNvbnN0IHJlc3VsdCA9IGNvbXBhcmVBc2MobmV3IERhdGUoMTk4NywgMSwgMTEpLCBuZXcgRGF0ZSgxOTg5LCA2LCAxMCkpXG4gKiAvLz0+IC0xXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFNvcnQgdGhlIGFycmF5IG9mIGRhdGVzOlxuICogY29uc3QgcmVzdWx0ID0gW1xuICogICBuZXcgRGF0ZSgxOTk1LCA2LCAyKSxcbiAqICAgbmV3IERhdGUoMTk4NywgMSwgMTEpLFxuICogICBuZXcgRGF0ZSgxOTg5LCA2LCAxMClcbiAqIF0uc29ydChjb21wYXJlQXNjKVxuICogLy89PiBbXG4gKiAvLyAgIFdlZCBGZWIgMTEgMTk4NyAwMDowMDowMCxcbiAqIC8vICAgTW9uIEp1bCAxMCAxOTg5IDAwOjAwOjAwLFxuICogLy8gICBTdW4gSnVsIDAyIDE5OTUgMDA6MDA6MDBcbiAqIC8vIF1cbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21wYXJlQXNjKGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZUxlZnQgPSB0b0RhdGUoZGlydHlEYXRlTGVmdCk7XG4gIHZhciBkYXRlUmlnaHQgPSB0b0RhdGUoZGlydHlEYXRlUmlnaHQpO1xuICB2YXIgZGlmZiA9IGRhdGVMZWZ0LmdldFRpbWUoKSAtIGRhdGVSaWdodC5nZXRUaW1lKCk7XG5cbiAgaWYgKGRpZmYgPCAwKSB7XG4gICAgcmV0dXJuIC0xO1xuICB9IGVsc2UgaWYgKGRpZmYgPiAwKSB7XG4gICAgcmV0dXJuIDE7IC8vIFJldHVybiAwIGlmIGRpZmYgaXMgMDsgcmV0dXJuIE5hTiBpZiBkaWZmIGlzIE5hTlxuICB9IGVsc2Uge1xuICAgIHJldHVybiBkaWZmO1xuICB9XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBkaWZmZXJlbmNlSW5DYWxlbmRhck1vbnRoc1xuICogQGNhdGVnb3J5IE1vbnRoIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgbnVtYmVyIG9mIGNhbGVuZGFyIG1vbnRocyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbnVtYmVyIG9mIGNhbGVuZGFyIG1vbnRocyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGxhdGVyIGRhdGVcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBlYXJsaWVyIGRhdGVcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSBudW1iZXIgb2YgY2FsZW5kYXIgbW9udGhzXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEhvdyBtYW55IGNhbGVuZGFyIG1vbnRocyBhcmUgYmV0d2VlbiAzMSBKYW51YXJ5IDIwMTQgYW5kIDEgU2VwdGVtYmVyIDIwMTQ/XG4gKiB2YXIgcmVzdWx0ID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJNb250aHMoXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDgsIDEpLFxuICogICBuZXcgRGF0ZSgyMDE0LCAwLCAzMSlcbiAqIClcbiAqIC8vPT4gOFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpZmZlcmVuY2VJbkNhbGVuZGFyTW9udGhzKGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZUxlZnQgPSB0b0RhdGUoZGlydHlEYXRlTGVmdCk7XG4gIHZhciBkYXRlUmlnaHQgPSB0b0RhdGUoZGlydHlEYXRlUmlnaHQpO1xuICB2YXIgeWVhckRpZmYgPSBkYXRlTGVmdC5nZXRGdWxsWWVhcigpIC0gZGF0ZVJpZ2h0LmdldEZ1bGxZZWFyKCk7XG4gIHZhciBtb250aERpZmYgPSBkYXRlTGVmdC5nZXRNb250aCgpIC0gZGF0ZVJpZ2h0LmdldE1vbnRoKCk7XG4gIHJldHVybiB5ZWFyRGlmZiAqIDEyICsgbW9udGhEaWZmO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgZGlmZmVyZW5jZUluTWlsbGlzZWNvbmRzXG4gKiBAY2F0ZWdvcnkgTWlsbGlzZWNvbmQgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgbGF0ZXIgZGF0ZVxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIGVhcmxpZXIgZGF0ZVxuICogQHJldHVybnMge051bWJlcn0gdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHNcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSG93IG1hbnkgbWlsbGlzZWNvbmRzIGFyZSBiZXR3ZWVuXG4gKiAvLyAyIEp1bHkgMjAxNCAxMjozMDoyMC42MDAgYW5kIDIgSnVseSAyMDE0IDEyOjMwOjIxLjcwMD9cbiAqIGNvbnN0IHJlc3VsdCA9IGRpZmZlcmVuY2VJbk1pbGxpc2Vjb25kcyhcbiAqICAgbmV3IERhdGUoMjAxNCwgNiwgMiwgMTIsIDMwLCAyMSwgNzAwKSxcbiAqICAgbmV3IERhdGUoMjAxNCwgNiwgMiwgMTIsIDMwLCAyMCwgNjAwKVxuICogKVxuICogLy89PiAxMTAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlmZmVyZW5jZUluTWlsbGlzZWNvbmRzKGRhdGVMZWZ0LCBkYXRlUmlnaHQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHJldHVybiB0b0RhdGUoZGF0ZUxlZnQpLmdldFRpbWUoKSAtIHRvRGF0ZShkYXRlUmlnaHQpLmdldFRpbWUoKTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCBkaWZmZXJlbmNlSW5DYWxlbmRhck1vbnRocyBmcm9tIFwiLi4vZGlmZmVyZW5jZUluQ2FsZW5kYXJNb250aHMvaW5kZXguanNcIjtcbmltcG9ydCBjb21wYXJlQXNjIGZyb20gXCIuLi9jb21wYXJlQXNjL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IGlzTGFzdERheU9mTW9udGggZnJvbSBcIi4uL2lzTGFzdERheU9mTW9udGgvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgZGlmZmVyZW5jZUluTW9udGhzXG4gKiBAY2F0ZWdvcnkgTW9udGggSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBudW1iZXIgb2YgZnVsbCBtb250aHMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIG51bWJlciBvZiBmdWxsIG1vbnRocyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcyB1c2luZyB0cnVuYyBhcyBhIGRlZmF1bHQgcm91bmRpbmcgbWV0aG9kLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgbGF0ZXIgZGF0ZVxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIGVhcmxpZXIgZGF0ZVxuICogQHJldHVybnMge051bWJlcn0gdGhlIG51bWJlciBvZiBmdWxsIG1vbnRoc1xuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBIb3cgbWFueSBmdWxsIG1vbnRocyBhcmUgYmV0d2VlbiAzMSBKYW51YXJ5IDIwMTQgYW5kIDEgU2VwdGVtYmVyIDIwMTQ/XG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5Nb250aHMobmV3IERhdGUoMjAxNCwgOCwgMSksIG5ldyBEYXRlKDIwMTQsIDAsIDMxKSlcbiAqIC8vPT4gN1xuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpZmZlcmVuY2VJbk1vbnRocyhkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVMZWZ0ID0gdG9EYXRlKGRpcnR5RGF0ZUxlZnQpO1xuICB2YXIgZGF0ZVJpZ2h0ID0gdG9EYXRlKGRpcnR5RGF0ZVJpZ2h0KTtcbiAgdmFyIHNpZ24gPSBjb21wYXJlQXNjKGRhdGVMZWZ0LCBkYXRlUmlnaHQpO1xuICB2YXIgZGlmZmVyZW5jZSA9IE1hdGguYWJzKGRpZmZlcmVuY2VJbkNhbGVuZGFyTW9udGhzKGRhdGVMZWZ0LCBkYXRlUmlnaHQpKTtcbiAgdmFyIHJlc3VsdDsgLy8gQ2hlY2sgZm9yIHRoZSBkaWZmZXJlbmNlIG9mIGxlc3MgdGhhbiBtb250aFxuXG4gIGlmIChkaWZmZXJlbmNlIDwgMSkge1xuICAgIHJlc3VsdCA9IDA7XG4gIH0gZWxzZSB7XG4gICAgaWYgKGRhdGVMZWZ0LmdldE1vbnRoKCkgPT09IDEgJiYgZGF0ZUxlZnQuZ2V0RGF0ZSgpID4gMjcpIHtcbiAgICAgIC8vIFRoaXMgd2lsbCBjaGVjayBpZiB0aGUgZGF0ZSBpcyBlbmQgb2YgRmViIGFuZCBhc3NpZ24gYSBoaWdoZXIgZW5kIG9mIG1vbnRoIGRhdGVcbiAgICAgIC8vIHRvIGNvbXBhcmUgaXQgd2l0aCBKYW5cbiAgICAgIGRhdGVMZWZ0LnNldERhdGUoMzApO1xuICAgIH1cblxuICAgIGRhdGVMZWZ0LnNldE1vbnRoKGRhdGVMZWZ0LmdldE1vbnRoKCkgLSBzaWduICogZGlmZmVyZW5jZSk7IC8vIE1hdGguYWJzKGRpZmYgaW4gZnVsbCBtb250aHMgLSBkaWZmIGluIGNhbGVuZGFyIG1vbnRocykgPT09IDEgaWYgbGFzdCBjYWxlbmRhciBtb250aCBpcyBub3QgZnVsbFxuICAgIC8vIElmIHNvLCByZXN1bHQgbXVzdCBiZSBkZWNyZWFzZWQgYnkgMSBpbiBhYnNvbHV0ZSB2YWx1ZVxuXG4gICAgdmFyIGlzTGFzdE1vbnRoTm90RnVsbCA9IGNvbXBhcmVBc2MoZGF0ZUxlZnQsIGRhdGVSaWdodCkgPT09IC1zaWduOyAvLyBDaGVjayBmb3IgY2FzZXMgb2Ygb25lIGZ1bGwgY2FsZW5kYXIgbW9udGhcblxuICAgIGlmIChpc0xhc3REYXlPZk1vbnRoKHRvRGF0ZShkaXJ0eURhdGVMZWZ0KSkgJiYgZGlmZmVyZW5jZSA9PT0gMSAmJiBjb21wYXJlQXNjKGRpcnR5RGF0ZUxlZnQsIGRhdGVSaWdodCkgPT09IDEpIHtcbiAgICAgIGlzTGFzdE1vbnRoTm90RnVsbCA9IGZhbHNlO1xuICAgIH1cblxuICAgIHJlc3VsdCA9IHNpZ24gKiAoZGlmZmVyZW5jZSAtIE51bWJlcihpc0xhc3RNb250aE5vdEZ1bGwpKTtcbiAgfSAvLyBQcmV2ZW50IG5lZ2F0aXZlIHplcm9cblxuXG4gIHJldHVybiByZXN1bHQgPT09IDAgPyAwIDogcmVzdWx0O1xufSIsImltcG9ydCBkaWZmZXJlbmNlSW5NaWxsaXNlY29uZHMgZnJvbSBcIi4uL2RpZmZlcmVuY2VJbk1pbGxpc2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCB7IGdldFJvdW5kaW5nTWV0aG9kIH0gZnJvbSBcIi4uL19saWIvcm91bmRpbmdNZXRob2RzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGRpZmZlcmVuY2VJblNlY29uZHNcbiAqIEBjYXRlZ29yeSBTZWNvbmQgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBudW1iZXIgb2Ygc2Vjb25kcyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbnVtYmVyIG9mIHNlY29uZHMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBsYXRlciBkYXRlXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgZWFybGllciBkYXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5yb3VuZGluZ01ldGhvZD0ndHJ1bmMnXSAtIGEgcm91bmRpbmcgbWV0aG9kIChgY2VpbGAsIGBmbG9vcmAsIGByb3VuZGAgb3IgYHRydW5jYClcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSBudW1iZXIgb2Ygc2Vjb25kc1xuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBIb3cgbWFueSBzZWNvbmRzIGFyZSBiZXR3ZWVuXG4gKiAvLyAyIEp1bHkgMjAxNCAxMjozMDowNy45OTkgYW5kIDIgSnVseSAyMDE0IDEyOjMwOjIwLjAwMD9cbiAqIGNvbnN0IHJlc3VsdCA9IGRpZmZlcmVuY2VJblNlY29uZHMoXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDYsIDIsIDEyLCAzMCwgMjAsIDApLFxuICogICBuZXcgRGF0ZSgyMDE0LCA2LCAyLCAxMiwgMzAsIDcsIDk5OSlcbiAqIClcbiAqIC8vPT4gMTJcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaWZmZXJlbmNlSW5TZWNvbmRzKGRhdGVMZWZ0LCBkYXRlUmlnaHQsIG9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkaWZmID0gZGlmZmVyZW5jZUluTWlsbGlzZWNvbmRzKGRhdGVMZWZ0LCBkYXRlUmlnaHQpIC8gMTAwMDtcbiAgcmV0dXJuIGdldFJvdW5kaW5nTWV0aG9kKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5yb3VuZGluZ01ldGhvZCkoZGlmZik7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBlbmRPZkRheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIGVuZCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIGVuZCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIGVuZCBvZiBhIGRheVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBlbmQgb2YgYSBkYXkgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBlbmRPZkRheShuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBUdWUgU2VwIDAyIDIwMTQgMjM6NTk6NTkuOTk5XG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZW5kT2ZEYXkoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICBkYXRlLnNldEhvdXJzKDIzLCA1OSwgNTksIDk5OSk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgZW5kT2ZNb250aFxuICogQGNhdGVnb3J5IE1vbnRoIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgZW5kIG9mIGEgbW9udGggZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBlbmQgb2YgYSBtb250aCBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIGVuZCBvZiBhIG1vbnRoXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIGVuZCBvZiBhIG1vbnRoIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gZW5kT2ZNb250aChuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBUdWUgU2VwIDMwIDIwMTQgMjM6NTk6NTkuOTk5XG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZW5kT2ZNb250aChkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBtb250aCA9IGRhdGUuZ2V0TW9udGgoKTtcbiAgZGF0ZS5zZXRGdWxsWWVhcihkYXRlLmdldEZ1bGxZZWFyKCksIG1vbnRoICsgMSwgMCk7XG4gIGRhdGUuc2V0SG91cnMoMjMsIDU5LCA1OSwgOTk5KTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IGNvbXBhcmVBc2MgZnJvbSBcIi4uL2NvbXBhcmVBc2MvaW5kZXguanNcIjtcbmltcG9ydCBkaWZmZXJlbmNlSW5Nb250aHMgZnJvbSBcIi4uL2RpZmZlcmVuY2VJbk1vbnRocy9pbmRleC5qc1wiO1xuaW1wb3J0IGRpZmZlcmVuY2VJblNlY29uZHMgZnJvbSBcIi4uL2RpZmZlcmVuY2VJblNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCBkZWZhdWx0TG9jYWxlIGZyb20gXCIuLi9sb2NhbGUvZW4tVVMvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IGNsb25lT2JqZWN0IGZyb20gXCIuLi9fbGliL2Nsb25lT2JqZWN0L2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vX2xpYi9nZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xudmFyIE1JTlVURVNfSU5fREFZID0gMTQ0MDtcbnZhciBNSU5VVEVTX0lOX0FMTU9TVF9UV09fREFZUyA9IDI1MjA7XG52YXIgTUlOVVRFU19JTl9NT05USCA9IDQzMjAwO1xudmFyIE1JTlVURVNfSU5fVFdPX01PTlRIUyA9IDg2NDAwO1xuLyoqXG4gKiBAbmFtZSBmb3JtYXREaXN0YW5jZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIGRpc3RhbmNlIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzIGluIHdvcmRzLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcyBpbiB3b3Jkcy5cbiAqXG4gKiB8IERpc3RhbmNlIGJldHdlZW4gZGF0ZXMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUmVzdWx0ICAgICAgICAgICAgICB8XG4gKiB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS18XG4gKiB8IDAgLi4uIDMwIHNlY3MgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbGVzcyB0aGFuIGEgbWludXRlICB8XG4gKiB8IDMwIHNlY3MgLi4uIDEgbWluIDMwIHNlY3MgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMSBtaW51dGUgICAgICAgICAgICB8XG4gKiB8IDEgbWluIDMwIHNlY3MgLi4uIDQ0IG1pbnMgMzAgc2VjcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWzIuLjQ0XSBtaW51dGVzICAgICB8XG4gKiB8IDQ0IG1pbnMgLi4uIDMwIHNlY3MgLi4uIDg5IG1pbnMgMzAgc2VjcyAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWJvdXQgMSBob3VyICAgICAgICB8XG4gKiB8IDg5IG1pbnMgMzAgc2VjcyAuLi4gMjMgaHJzIDU5IG1pbnMgMzAgc2VjcyAgICAgICAgICAgICAgICAgICAgICAgIHwgYWJvdXQgWzIuLjI0XSBob3VycyB8XG4gKiB8IDIzIGhycyA1OSBtaW5zIDMwIHNlY3MgLi4uIDQxIGhycyA1OSBtaW5zIDMwIHNlY3MgICAgICAgICAgICAgICAgIHwgMSBkYXkgICAgICAgICAgICAgICB8XG4gKiB8IDQxIGhycyA1OSBtaW5zIDMwIHNlY3MgLi4uIDI5IGRheXMgMjMgaHJzIDU5IG1pbnMgMzAgc2VjcyAgICAgICAgIHwgWzIuLjMwXSBkYXlzICAgICAgICB8XG4gKiB8IDI5IGRheXMgMjMgaHJzIDU5IG1pbnMgMzAgc2VjcyAuLi4gNDQgZGF5cyAyMyBocnMgNTkgbWlucyAzMCBzZWNzIHwgYWJvdXQgMSBtb250aCAgICAgICB8XG4gKiB8IDQ0IGRheXMgMjMgaHJzIDU5IG1pbnMgMzAgc2VjcyAuLi4gNTkgZGF5cyAyMyBocnMgNTkgbWlucyAzMCBzZWNzIHwgYWJvdXQgMiBtb250aHMgICAgICB8XG4gKiB8IDU5IGRheXMgMjMgaHJzIDU5IG1pbnMgMzAgc2VjcyAuLi4gMSB5ciAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWzIuLjEyXSBtb250aHMgICAgICB8XG4gKiB8IDEgeXIgLi4uIDEgeXIgMyBtb250aHMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWJvdXQgMSB5ZWFyICAgICAgICB8XG4gKiB8IDEgeXIgMyBtb250aHMgLi4uIDEgeXIgOSBtb250aCBzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgb3ZlciAxIHllYXIgICAgICAgICB8XG4gKiB8IDEgeXIgOSBtb250aHMgLi4uIDIgeXJzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWxtb3N0IDIgeWVhcnMgICAgICB8XG4gKiB8IE4geXJzIC4uLiBOIHlycyAzIG1vbnRocyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWJvdXQgTiB5ZWFycyAgICAgICB8XG4gKiB8IE4geXJzIDMgbW9udGhzIC4uLiBOIHlycyA5IG1vbnRocyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgb3ZlciBOIHllYXJzICAgICAgICB8XG4gKiB8IE4geXJzIDkgbW9udGhzIC4uLiBOKzEgeXJzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWxtb3N0IE4rMSB5ZWFycyAgICB8XG4gKlxuICogV2l0aCBgb3B0aW9ucy5pbmNsdWRlU2Vjb25kcyA9PSB0cnVlYDpcbiAqIHwgRGlzdGFuY2UgYmV0d2VlbiBkYXRlcyB8IFJlc3VsdCAgICAgICAgICAgICAgIHxcbiAqIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIHwgMCBzZWNzIC4uLiA1IHNlY3MgICAgICB8IGxlc3MgdGhhbiA1IHNlY29uZHMgIHxcbiAqIHwgNSBzZWNzIC4uLiAxMCBzZWNzICAgICB8IGxlc3MgdGhhbiAxMCBzZWNvbmRzIHxcbiAqIHwgMTAgc2VjcyAuLi4gMjAgc2VjcyAgICB8IGxlc3MgdGhhbiAyMCBzZWNvbmRzIHxcbiAqIHwgMjAgc2VjcyAuLi4gNDAgc2VjcyAgICB8IGhhbGYgYSBtaW51dGUgICAgICAgIHxcbiAqIHwgNDAgc2VjcyAuLi4gNjAgc2VjcyAgICB8IGxlc3MgdGhhbiBhIG1pbnV0ZSAgIHxcbiAqIHwgNjAgc2VjcyAuLi4gOTAgc2VjcyAgICB8IDEgbWludXRlICAgICAgICAgICAgIHxcbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIC0gVGhlIGZ1bmN0aW9uIHdhcyByZW5hbWVkIGZyb20gYGRpc3RhbmNlSW5Xb3JkcyBgIHRvIGBmb3JtYXREaXN0YW5jZWBcbiAqICAgdG8gbWFrZSBpdHMgbmFtZSBjb25zaXN0ZW50IHdpdGggYGZvcm1hdGAgYW5kIGBmb3JtYXRSZWxhdGl2ZWAuXG4gKlxuICogLSBUaGUgb3JkZXIgb2YgYXJndW1lbnRzIGlzIHN3YXBwZWQgdG8gbWFrZSB0aGUgZnVuY3Rpb25cbiAqICAgY29uc2lzdGVudCB3aXRoIGBkaWZmZXJlbmNlSW4uLi5gIGZ1bmN0aW9ucy5cbiAqXG4gKiAgIGBgYGphdmFzY3JpcHRcbiAqICAgLy8gQmVmb3JlIHYyLjAuMFxuICpcbiAqICAgZGlzdGFuY2VJbldvcmRzKFxuICogICAgIG5ldyBEYXRlKDE5ODYsIDMsIDQsIDEwLCAzMiwgMCksXG4gKiAgICAgbmV3IERhdGUoMTk4NiwgMywgNCwgMTEsIDMyLCAwKSxcbiAqICAgICB7IGFkZFN1ZmZpeDogdHJ1ZSB9XG4gKiAgICkgLy89PiAnaW4gYWJvdXQgMSBob3VyJ1xuICpcbiAqICAgLy8gdjIuMC4wIG9ud2FyZFxuICpcbiAqICAgZm9ybWF0RGlzdGFuY2UoXG4gKiAgICAgbmV3IERhdGUoMTk4NiwgMywgNCwgMTEsIDMyLCAwKSxcbiAqICAgICBuZXcgRGF0ZSgxOTg2LCAzLCA0LCAxMCwgMzIsIDApLFxuICogICAgIHsgYWRkU3VmZml4OiB0cnVlIH1cbiAqICAgKSAvLz0+ICdpbiBhYm91dCAxIGhvdXInXG4gKiAgIGBgYFxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZVxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYmFzZURhdGUgLSB0aGUgZGF0ZSB0byBjb21wYXJlIHdpdGhcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5pbmNsdWRlU2Vjb25kcz1mYWxzZV0gLSBkaXN0YW5jZXMgbGVzcyB0aGFuIGEgbWludXRlIGFyZSBtb3JlIGRldGFpbGVkXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmFkZFN1ZmZpeD1mYWxzZV0gLSByZXN1bHQgaW5kaWNhdGVzIGlmIHRoZSBzZWNvbmQgZGF0ZSBpcyBlYXJsaWVyIG9yIGxhdGVyIHRoYW4gdGhlIGZpcnN0XG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEByZXR1cm5zIHtTdHJpbmd9IHRoZSBkaXN0YW5jZSBpbiB3b3Jkc1xuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYGRhdGVgIG11c3Qgbm90IGJlIEludmFsaWQgRGF0ZVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYGJhc2VEYXRlYCBtdXN0IG5vdCBiZSBJbnZhbGlkIERhdGVcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmxvY2FsZWAgbXVzdCBjb250YWluIGBmb3JtYXREaXN0YW5jZWAgcHJvcGVydHlcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hhdCBpcyB0aGUgZGlzdGFuY2UgYmV0d2VlbiAyIEp1bHkgMjAxNCBhbmQgMSBKYW51YXJ5IDIwMTU/XG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXREaXN0YW5jZShuZXcgRGF0ZSgyMDE0LCA2LCAyKSwgbmV3IERhdGUoMjAxNSwgMCwgMSkpXG4gKiAvLz0+ICc2IG1vbnRocydcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hhdCBpcyB0aGUgZGlzdGFuY2UgYmV0d2VlbiAxIEphbnVhcnkgMjAxNSAwMDowMDoxNVxuICogLy8gYW5kIDEgSmFudWFyeSAyMDE1IDAwOjAwOjAwLCBpbmNsdWRpbmcgc2Vjb25kcz9cbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdERpc3RhbmNlKFxuICogICBuZXcgRGF0ZSgyMDE1LCAwLCAxLCAwLCAwLCAxNSksXG4gKiAgIG5ldyBEYXRlKDIwMTUsIDAsIDEsIDAsIDAsIDApLFxuICogICB7IGluY2x1ZGVTZWNvbmRzOiB0cnVlIH1cbiAqIClcbiAqIC8vPT4gJ2xlc3MgdGhhbiAyMCBzZWNvbmRzJ1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGF0IGlzIHRoZSBkaXN0YW5jZSBmcm9tIDEgSmFudWFyeSAyMDE2XG4gKiAvLyB0byAxIEphbnVhcnkgMjAxNSwgd2l0aCBhIHN1ZmZpeD9cbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdERpc3RhbmNlKG5ldyBEYXRlKDIwMTUsIDAsIDEpLCBuZXcgRGF0ZSgyMDE2LCAwLCAxKSwge1xuICogICBhZGRTdWZmaXg6IHRydWVcbiAqIH0pXG4gKiAvLz0+ICdhYm91dCAxIHllYXIgYWdvJ1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGF0IGlzIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIDEgQXVndXN0IDIwMTYgYW5kIDEgSmFudWFyeSAyMDE1IGluIEVzcGVyYW50bz9cbiAqIGltcG9ydCB7IGVvTG9jYWxlIH0gZnJvbSAnZGF0ZS1mbnMvbG9jYWxlL2VvJ1xuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0RGlzdGFuY2UobmV3IERhdGUoMjAxNiwgNywgMSksIG5ldyBEYXRlKDIwMTUsIDAsIDEpLCB7XG4gKiAgIGxvY2FsZTogZW9Mb2NhbGVcbiAqIH0pXG4gKiAvLz0+ICdwbGkgb2wgMSBqYXJvJ1xuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvcm1hdERpc3RhbmNlKGRpcnR5RGF0ZSwgZGlydHlCYXNlRGF0ZSkge1xuICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgbG9jYWxlID0gb3B0aW9ucy5sb2NhbGUgfHwgZGVmYXVsdExvY2FsZTtcblxuICBpZiAoIWxvY2FsZS5mb3JtYXREaXN0YW5jZSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdsb2NhbGUgbXVzdCBjb250YWluIGZvcm1hdERpc3RhbmNlIHByb3BlcnR5Jyk7XG4gIH1cblxuICB2YXIgY29tcGFyaXNvbiA9IGNvbXBhcmVBc2MoZGlydHlEYXRlLCBkaXJ0eUJhc2VEYXRlKTtcblxuICBpZiAoaXNOYU4oY29tcGFyaXNvbikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW52YWxpZCB0aW1lIHZhbHVlJyk7XG4gIH1cblxuICB2YXIgbG9jYWxpemVPcHRpb25zID0gY2xvbmVPYmplY3Qob3B0aW9ucyk7XG4gIGxvY2FsaXplT3B0aW9ucy5hZGRTdWZmaXggPSBCb29sZWFuKG9wdGlvbnMuYWRkU3VmZml4KTtcbiAgbG9jYWxpemVPcHRpb25zLmNvbXBhcmlzb24gPSBjb21wYXJpc29uO1xuICB2YXIgZGF0ZUxlZnQ7XG4gIHZhciBkYXRlUmlnaHQ7XG5cbiAgaWYgKGNvbXBhcmlzb24gPiAwKSB7XG4gICAgZGF0ZUxlZnQgPSB0b0RhdGUoZGlydHlCYXNlRGF0ZSk7XG4gICAgZGF0ZVJpZ2h0ID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIH0gZWxzZSB7XG4gICAgZGF0ZUxlZnQgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgICBkYXRlUmlnaHQgPSB0b0RhdGUoZGlydHlCYXNlRGF0ZSk7XG4gIH1cblxuICB2YXIgc2Vjb25kcyA9IGRpZmZlcmVuY2VJblNlY29uZHMoZGF0ZVJpZ2h0LCBkYXRlTGVmdCk7XG4gIHZhciBvZmZzZXRJblNlY29uZHMgPSAoZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhkYXRlUmlnaHQpIC0gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhkYXRlTGVmdCkpIC8gMTAwMDtcbiAgdmFyIG1pbnV0ZXMgPSBNYXRoLnJvdW5kKChzZWNvbmRzIC0gb2Zmc2V0SW5TZWNvbmRzKSAvIDYwKTtcbiAgdmFyIG1vbnRoczsgLy8gMCB1cCB0byAyIG1pbnNcblxuICBpZiAobWludXRlcyA8IDIpIHtcbiAgICBpZiAob3B0aW9ucy5pbmNsdWRlU2Vjb25kcykge1xuICAgICAgaWYgKHNlY29uZHMgPCA1KSB7XG4gICAgICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ2xlc3NUaGFuWFNlY29uZHMnLCA1LCBsb2NhbGl6ZU9wdGlvbnMpO1xuICAgICAgfSBlbHNlIGlmIChzZWNvbmRzIDwgMTApIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgnbGVzc1RoYW5YU2Vjb25kcycsIDEwLCBsb2NhbGl6ZU9wdGlvbnMpO1xuICAgICAgfSBlbHNlIGlmIChzZWNvbmRzIDwgMjApIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgnbGVzc1RoYW5YU2Vjb25kcycsIDIwLCBsb2NhbGl6ZU9wdGlvbnMpO1xuICAgICAgfSBlbHNlIGlmIChzZWNvbmRzIDwgNDApIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgnaGFsZkFNaW51dGUnLCBudWxsLCBsb2NhbGl6ZU9wdGlvbnMpO1xuICAgICAgfSBlbHNlIGlmIChzZWNvbmRzIDwgNjApIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgnbGVzc1RoYW5YTWludXRlcycsIDEsIGxvY2FsaXplT3B0aW9ucyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCd4TWludXRlcycsIDEsIGxvY2FsaXplT3B0aW9ucyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChtaW51dGVzID09PSAwKSB7XG4gICAgICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ2xlc3NUaGFuWE1pbnV0ZXMnLCAxLCBsb2NhbGl6ZU9wdGlvbnMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgneE1pbnV0ZXMnLCBtaW51dGVzLCBsb2NhbGl6ZU9wdGlvbnMpO1xuICAgICAgfVxuICAgIH0gLy8gMiBtaW5zIHVwIHRvIDAuNzUgaHJzXG5cbiAgfSBlbHNlIGlmIChtaW51dGVzIDwgNDUpIHtcbiAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCd4TWludXRlcycsIG1pbnV0ZXMsIGxvY2FsaXplT3B0aW9ucyk7IC8vIDAuNzUgaHJzIHVwIHRvIDEuNSBocnNcbiAgfSBlbHNlIGlmIChtaW51dGVzIDwgOTApIHtcbiAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCdhYm91dFhIb3VycycsIDEsIGxvY2FsaXplT3B0aW9ucyk7IC8vIDEuNSBocnMgdXAgdG8gMjQgaHJzXG4gIH0gZWxzZSBpZiAobWludXRlcyA8IE1JTlVURVNfSU5fREFZKSB7XG4gICAgdmFyIGhvdXJzID0gTWF0aC5yb3VuZChtaW51dGVzIC8gNjApO1xuICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ2Fib3V0WEhvdXJzJywgaG91cnMsIGxvY2FsaXplT3B0aW9ucyk7IC8vIDEgZGF5IHVwIHRvIDEuNzUgZGF5c1xuICB9IGVsc2UgaWYgKG1pbnV0ZXMgPCBNSU5VVEVTX0lOX0FMTU9TVF9UV09fREFZUykge1xuICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ3hEYXlzJywgMSwgbG9jYWxpemVPcHRpb25zKTsgLy8gMS43NSBkYXlzIHVwIHRvIDMwIGRheXNcbiAgfSBlbHNlIGlmIChtaW51dGVzIDwgTUlOVVRFU19JTl9NT05USCkge1xuICAgIHZhciBkYXlzID0gTWF0aC5yb3VuZChtaW51dGVzIC8gTUlOVVRFU19JTl9EQVkpO1xuICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ3hEYXlzJywgZGF5cywgbG9jYWxpemVPcHRpb25zKTsgLy8gMSBtb250aCB1cCB0byAyIG1vbnRoc1xuICB9IGVsc2UgaWYgKG1pbnV0ZXMgPCBNSU5VVEVTX0lOX1RXT19NT05USFMpIHtcbiAgICBtb250aHMgPSBNYXRoLnJvdW5kKG1pbnV0ZXMgLyBNSU5VVEVTX0lOX01PTlRIKTtcbiAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCdhYm91dFhNb250aHMnLCBtb250aHMsIGxvY2FsaXplT3B0aW9ucyk7XG4gIH1cblxuICBtb250aHMgPSBkaWZmZXJlbmNlSW5Nb250aHMoZGF0ZVJpZ2h0LCBkYXRlTGVmdCk7IC8vIDIgbW9udGhzIHVwIHRvIDEyIG1vbnRoc1xuXG4gIGlmIChtb250aHMgPCAxMikge1xuICAgIHZhciBuZWFyZXN0TW9udGggPSBNYXRoLnJvdW5kKG1pbnV0ZXMgLyBNSU5VVEVTX0lOX01PTlRIKTtcbiAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCd4TW9udGhzJywgbmVhcmVzdE1vbnRoLCBsb2NhbGl6ZU9wdGlvbnMpOyAvLyAxIHllYXIgdXAgdG8gbWF4IERhdGVcbiAgfSBlbHNlIHtcbiAgICB2YXIgbW9udGhzU2luY2VTdGFydE9mWWVhciA9IG1vbnRocyAlIDEyO1xuICAgIHZhciB5ZWFycyA9IE1hdGguZmxvb3IobW9udGhzIC8gMTIpOyAvLyBOIHllYXJzIHVwIHRvIDEgeWVhcnMgMyBtb250aHNcblxuICAgIGlmIChtb250aHNTaW5jZVN0YXJ0T2ZZZWFyIDwgMykge1xuICAgICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgnYWJvdXRYWWVhcnMnLCB5ZWFycywgbG9jYWxpemVPcHRpb25zKTsgLy8gTiB5ZWFycyAzIG1vbnRocyB1cCB0byBOIHllYXJzIDkgbW9udGhzXG4gICAgfSBlbHNlIGlmIChtb250aHNTaW5jZVN0YXJ0T2ZZZWFyIDwgOSkge1xuICAgICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgnb3ZlclhZZWFycycsIHllYXJzLCBsb2NhbGl6ZU9wdGlvbnMpOyAvLyBOIHllYXJzIDkgbW9udGhzIHVwIHRvIE4geWVhciAxMiBtb250aHNcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgnYWxtb3N0WFllYXJzJywgeWVhcnMgKyAxLCBsb2NhbGl6ZU9wdGlvbnMpO1xuICAgIH1cbiAgfVxufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IGVuZE9mRGF5IGZyb20gXCIuLi9lbmRPZkRheS9pbmRleC5qc1wiO1xuaW1wb3J0IGVuZE9mTW9udGggZnJvbSBcIi4uL2VuZE9mTW9udGgvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzTGFzdERheU9mTW9udGhcbiAqIEBjYXRlZ29yeSBNb250aCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSB0aGUgbGFzdCBkYXkgb2YgYSBtb250aD9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBnaXZlbiBkYXRlIHRoZSBsYXN0IGRheSBvZiBhIG1vbnRoP1xuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgdGhlIGxhc3QgZGF5IG9mIGEgbW9udGhcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJcyAyOCBGZWJydWFyeSAyMDE0IHRoZSBsYXN0IGRheSBvZiBhIG1vbnRoP1xuICogdmFyIHJlc3VsdCA9IGlzTGFzdERheU9mTW9udGgobmV3IERhdGUoMjAxNCwgMSwgMjgpKVxuICogLy89PiB0cnVlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNMYXN0RGF5T2ZNb250aChkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHJldHVybiBlbmRPZkRheShkYXRlKS5nZXRUaW1lKCkgPT09IGVuZE9mTW9udGgoZGF0ZSkuZ2V0VGltZSgpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkRm9ybWF0TG9uZ0ZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gICAgLy8gVE9ETzogUmVtb3ZlIFN0cmluZygpXG4gICAgdmFyIHdpZHRoID0gb3B0aW9ucy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGFyZ3MuZGVmYXVsdFdpZHRoO1xuICAgIHZhciBmb3JtYXQgPSBhcmdzLmZvcm1hdHNbd2lkdGhdIHx8IGFyZ3MuZm9ybWF0c1thcmdzLmRlZmF1bHRXaWR0aF07XG4gICAgcmV0dXJuIGZvcm1hdDtcbiAgfTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZExvY2FsaXplRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKGRpcnR5SW5kZXgsIGRpcnR5T3B0aW9ucykge1xuICAgIHZhciBvcHRpb25zID0gZGlydHlPcHRpb25zIHx8IHt9O1xuICAgIHZhciBjb250ZXh0ID0gb3B0aW9ucy5jb250ZXh0ID8gU3RyaW5nKG9wdGlvbnMuY29udGV4dCkgOiAnc3RhbmRhbG9uZSc7XG4gICAgdmFyIHZhbHVlc0FycmF5O1xuXG4gICAgaWYgKGNvbnRleHQgPT09ICdmb3JtYXR0aW5nJyAmJiBhcmdzLmZvcm1hdHRpbmdWYWx1ZXMpIHtcbiAgICAgIHZhciBkZWZhdWx0V2lkdGggPSBhcmdzLmRlZmF1bHRGb3JtYXR0aW5nV2lkdGggfHwgYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgICB2YXIgd2lkdGggPSBvcHRpb25zLndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogZGVmYXVsdFdpZHRoO1xuICAgICAgdmFsdWVzQXJyYXkgPSBhcmdzLmZvcm1hdHRpbmdWYWx1ZXNbd2lkdGhdIHx8IGFyZ3MuZm9ybWF0dGluZ1ZhbHVlc1tkZWZhdWx0V2lkdGhdO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgX2RlZmF1bHRXaWR0aCA9IGFyZ3MuZGVmYXVsdFdpZHRoO1xuXG4gICAgICB2YXIgX3dpZHRoID0gb3B0aW9ucy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGFyZ3MuZGVmYXVsdFdpZHRoO1xuXG4gICAgICB2YWx1ZXNBcnJheSA9IGFyZ3MudmFsdWVzW193aWR0aF0gfHwgYXJncy52YWx1ZXNbX2RlZmF1bHRXaWR0aF07XG4gICAgfVxuXG4gICAgdmFyIGluZGV4ID0gYXJncy5hcmd1bWVudENhbGxiYWNrID8gYXJncy5hcmd1bWVudENhbGxiYWNrKGRpcnR5SW5kZXgpIDogZGlydHlJbmRleDsgLy8gQHRzLWlnbm9yZTogRm9yIHNvbWUgcmVhc29uIFR5cGVTY3JpcHQganVzdCBkb24ndCB3YW50IHRvIG1hdGNoIGl0LCBubyBtYXR0ZXIgaG93IGhhcmQgd2UgdHJ5LiBJIGNoYWxsYW5nZSB5b3UgdG8gdHJ5IHRvIHJlbW92ZSBpdCFcblxuICAgIHJldHVybiB2YWx1ZXNBcnJheVtpbmRleF07XG4gIH07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRNYXRjaEZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgdmFyIHdpZHRoID0gb3B0aW9ucy53aWR0aDtcbiAgICB2YXIgbWF0Y2hQYXR0ZXJuID0gd2lkdGggJiYgYXJncy5tYXRjaFBhdHRlcm5zW3dpZHRoXSB8fCBhcmdzLm1hdGNoUGF0dGVybnNbYXJncy5kZWZhdWx0TWF0Y2hXaWR0aF07XG4gICAgdmFyIG1hdGNoUmVzdWx0ID0gc3RyaW5nLm1hdGNoKG1hdGNoUGF0dGVybik7XG5cbiAgICBpZiAoIW1hdGNoUmVzdWx0KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgbWF0Y2hlZFN0cmluZyA9IG1hdGNoUmVzdWx0WzBdO1xuICAgIHZhciBwYXJzZVBhdHRlcm5zID0gd2lkdGggJiYgYXJncy5wYXJzZVBhdHRlcm5zW3dpZHRoXSB8fCBhcmdzLnBhcnNlUGF0dGVybnNbYXJncy5kZWZhdWx0UGFyc2VXaWR0aF07XG4gICAgdmFyIGtleSA9IEFycmF5LmlzQXJyYXkocGFyc2VQYXR0ZXJucykgPyBmaW5kSW5kZXgocGFyc2VQYXR0ZXJucywgZnVuY3Rpb24gKHBhdHRlcm4pIHtcbiAgICAgIHJldHVybiBwYXR0ZXJuLnRlc3QobWF0Y2hlZFN0cmluZyk7XG4gICAgfSkgOiBmaW5kS2V5KHBhcnNlUGF0dGVybnMsIGZ1bmN0aW9uIChwYXR0ZXJuKSB7XG4gICAgICByZXR1cm4gcGF0dGVybi50ZXN0KG1hdGNoZWRTdHJpbmcpO1xuICAgIH0pO1xuICAgIHZhciB2YWx1ZTtcbiAgICB2YWx1ZSA9IGFyZ3MudmFsdWVDYWxsYmFjayA/IGFyZ3MudmFsdWVDYWxsYmFjayhrZXkpIDoga2V5O1xuICAgIHZhbHVlID0gb3B0aW9ucy52YWx1ZUNhbGxiYWNrID8gb3B0aW9ucy52YWx1ZUNhbGxiYWNrKHZhbHVlKSA6IHZhbHVlO1xuICAgIHZhciByZXN0ID0gc3RyaW5nLnNsaWNlKG1hdGNoZWRTdHJpbmcubGVuZ3RoKTtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgcmVzdDogcmVzdFxuICAgIH07XG4gIH07XG59XG5cbmZ1bmN0aW9uIGZpbmRLZXkob2JqZWN0LCBwcmVkaWNhdGUpIHtcbiAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgIGlmIChvYmplY3QuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBwcmVkaWNhdGUob2JqZWN0W2tleV0pKSB7XG4gICAgICByZXR1cm4ga2V5O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGZpbmRJbmRleChhcnJheSwgcHJlZGljYXRlKSB7XG4gIGZvciAodmFyIGtleSA9IDA7IGtleSA8IGFycmF5Lmxlbmd0aDsga2V5KyspIHtcbiAgICBpZiAocHJlZGljYXRlKGFycmF5W2tleV0pKSB7XG4gICAgICByZXR1cm4ga2V5O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRNYXRjaFBhdHRlcm5GbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIHZhciBtYXRjaFJlc3VsdCA9IHN0cmluZy5tYXRjaChhcmdzLm1hdGNoUGF0dGVybik7XG4gICAgaWYgKCFtYXRjaFJlc3VsdCkgcmV0dXJuIG51bGw7XG4gICAgdmFyIG1hdGNoZWRTdHJpbmcgPSBtYXRjaFJlc3VsdFswXTtcbiAgICB2YXIgcGFyc2VSZXN1bHQgPSBzdHJpbmcubWF0Y2goYXJncy5wYXJzZVBhdHRlcm4pO1xuICAgIGlmICghcGFyc2VSZXN1bHQpIHJldHVybiBudWxsO1xuICAgIHZhciB2YWx1ZSA9IGFyZ3MudmFsdWVDYWxsYmFjayA/IGFyZ3MudmFsdWVDYWxsYmFjayhwYXJzZVJlc3VsdFswXSkgOiBwYXJzZVJlc3VsdFswXTtcbiAgICB2YWx1ZSA9IG9wdGlvbnMudmFsdWVDYWxsYmFjayA/IG9wdGlvbnMudmFsdWVDYWxsYmFjayh2YWx1ZSkgOiB2YWx1ZTtcbiAgICB2YXIgcmVzdCA9IHN0cmluZy5zbGljZShtYXRjaGVkU3RyaW5nLmxlbmd0aCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIHJlc3Q6IHJlc3RcbiAgICB9O1xuICB9O1xufSIsInZhciBmb3JtYXREaXN0YW5jZUxvY2FsZSA9IHtcbiAgbGVzc1RoYW5YU2Vjb25kczoge1xuICAgIG9uZTogJ2xlc3MgdGhhbiBhIHNlY29uZCcsXG4gICAgb3RoZXI6ICdsZXNzIHRoYW4ge3tjb3VudH19IHNlY29uZHMnXG4gIH0sXG4gIHhTZWNvbmRzOiB7XG4gICAgb25lOiAnMSBzZWNvbmQnLFxuICAgIG90aGVyOiAne3tjb3VudH19IHNlY29uZHMnXG4gIH0sXG4gIGhhbGZBTWludXRlOiAnaGFsZiBhIG1pbnV0ZScsXG4gIGxlc3NUaGFuWE1pbnV0ZXM6IHtcbiAgICBvbmU6ICdsZXNzIHRoYW4gYSBtaW51dGUnLFxuICAgIG90aGVyOiAnbGVzcyB0aGFuIHt7Y291bnR9fSBtaW51dGVzJ1xuICB9LFxuICB4TWludXRlczoge1xuICAgIG9uZTogJzEgbWludXRlJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBtaW51dGVzJ1xuICB9LFxuICBhYm91dFhIb3Vyczoge1xuICAgIG9uZTogJ2Fib3V0IDEgaG91cicsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0gaG91cnMnXG4gIH0sXG4gIHhIb3Vyczoge1xuICAgIG9uZTogJzEgaG91cicsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gaG91cnMnXG4gIH0sXG4gIHhEYXlzOiB7XG4gICAgb25lOiAnMSBkYXknLFxuICAgIG90aGVyOiAne3tjb3VudH19IGRheXMnXG4gIH0sXG4gIGFib3V0WFdlZWtzOiB7XG4gICAgb25lOiAnYWJvdXQgMSB3ZWVrJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSB3ZWVrcydcbiAgfSxcbiAgeFdlZWtzOiB7XG4gICAgb25lOiAnMSB3ZWVrJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSB3ZWVrcydcbiAgfSxcbiAgYWJvdXRYTW9udGhzOiB7XG4gICAgb25lOiAnYWJvdXQgMSBtb250aCcsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0gbW9udGhzJ1xuICB9LFxuICB4TW9udGhzOiB7XG4gICAgb25lOiAnMSBtb250aCcsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gbW9udGhzJ1xuICB9LFxuICBhYm91dFhZZWFyczoge1xuICAgIG9uZTogJ2Fib3V0IDEgeWVhcicsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0geWVhcnMnXG4gIH0sXG4gIHhZZWFyczoge1xuICAgIG9uZTogJzEgeWVhcicsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0geWVhcnMnXG4gIH0sXG4gIG92ZXJYWWVhcnM6IHtcbiAgICBvbmU6ICdvdmVyIDEgeWVhcicsXG4gICAgb3RoZXI6ICdvdmVyIHt7Y291bnR9fSB5ZWFycydcbiAgfSxcbiAgYWxtb3N0WFllYXJzOiB7XG4gICAgb25lOiAnYWxtb3N0IDEgeWVhcicsXG4gICAgb3RoZXI6ICdhbG1vc3Qge3tjb3VudH19IHllYXJzJ1xuICB9XG59O1xuXG52YXIgZm9ybWF0RGlzdGFuY2UgPSBmdW5jdGlvbiAodG9rZW4sIGNvdW50LCBvcHRpb25zKSB7XG4gIHZhciByZXN1bHQ7XG4gIHZhciB0b2tlblZhbHVlID0gZm9ybWF0RGlzdGFuY2VMb2NhbGVbdG9rZW5dO1xuXG4gIGlmICh0eXBlb2YgdG9rZW5WYWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlO1xuICB9IGVsc2UgaWYgKGNvdW50ID09PSAxKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZS5vbmU7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZS5vdGhlci5yZXBsYWNlKCd7e2NvdW50fX0nLCBjb3VudC50b1N0cmluZygpKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLmFkZFN1ZmZpeCkge1xuICAgIGlmIChvcHRpb25zLmNvbXBhcmlzb24gJiYgb3B0aW9ucy5jb21wYXJpc29uID4gMCkge1xuICAgICAgcmV0dXJuICdpbiAnICsgcmVzdWx0O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcmVzdWx0ICsgJyBhZ28nO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmb3JtYXREaXN0YW5jZTsiLCJpbXBvcnQgYnVpbGRGb3JtYXRMb25nRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRGb3JtYXRMb25nRm4vaW5kZXguanNcIjtcbnZhciBkYXRlRm9ybWF0cyA9IHtcbiAgZnVsbDogJ0VFRUUsIE1NTU0gZG8sIHknLFxuICBsb25nOiAnTU1NTSBkbywgeScsXG4gIG1lZGl1bTogJ01NTSBkLCB5JyxcbiAgc2hvcnQ6ICdNTS9kZC95eXl5J1xufTtcbnZhciB0aW1lRm9ybWF0cyA9IHtcbiAgZnVsbDogJ2g6bW06c3MgYSB6enp6JyxcbiAgbG9uZzogJ2g6bW06c3MgYSB6JyxcbiAgbWVkaXVtOiAnaDptbTpzcyBhJyxcbiAgc2hvcnQ6ICdoOm1tIGEnXG59O1xudmFyIGRhdGVUaW1lRm9ybWF0cyA9IHtcbiAgZnVsbDogXCJ7e2RhdGV9fSAnYXQnIHt7dGltZX19XCIsXG4gIGxvbmc6IFwie3tkYXRlfX0gJ2F0JyB7e3RpbWV9fVwiLFxuICBtZWRpdW06ICd7e2RhdGV9fSwge3t0aW1lfX0nLFxuICBzaG9ydDogJ3t7ZGF0ZX19LCB7e3RpbWV9fSdcbn07XG52YXIgZm9ybWF0TG9uZyA9IHtcbiAgZGF0ZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IGRhdGVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogJ2Z1bGwnXG4gIH0pLFxuICB0aW1lOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogdGltZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSksXG4gIGRhdGVUaW1lOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogZGF0ZVRpbWVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogJ2Z1bGwnXG4gIH0pXG59O1xuZXhwb3J0IGRlZmF1bHQgZm9ybWF0TG9uZzsiLCJ2YXIgZm9ybWF0UmVsYXRpdmVMb2NhbGUgPSB7XG4gIGxhc3RXZWVrOiBcIidsYXN0JyBlZWVlICdhdCcgcFwiLFxuICB5ZXN0ZXJkYXk6IFwiJ3llc3RlcmRheSBhdCcgcFwiLFxuICB0b2RheTogXCIndG9kYXkgYXQnIHBcIixcbiAgdG9tb3Jyb3c6IFwiJ3RvbW9ycm93IGF0JyBwXCIsXG4gIG5leHRXZWVrOiBcImVlZWUgJ2F0JyBwXCIsXG4gIG90aGVyOiAnUCdcbn07XG5cbnZhciBmb3JtYXRSZWxhdGl2ZSA9IGZ1bmN0aW9uICh0b2tlbiwgX2RhdGUsIF9iYXNlRGF0ZSwgX29wdGlvbnMpIHtcbiAgcmV0dXJuIGZvcm1hdFJlbGF0aXZlTG9jYWxlW3Rva2VuXTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZvcm1hdFJlbGF0aXZlOyIsImltcG9ydCBidWlsZExvY2FsaXplRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRMb2NhbGl6ZUZuL2luZGV4LmpzXCI7XG52YXIgZXJhVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnQicsICdBJ10sXG4gIGFiYnJldmlhdGVkOiBbJ0JDJywgJ0FEJ10sXG4gIHdpZGU6IFsnQmVmb3JlIENocmlzdCcsICdBbm5vIERvbWluaSddXG59O1xudmFyIHF1YXJ0ZXJWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWycxJywgJzInLCAnMycsICc0J10sXG4gIGFiYnJldmlhdGVkOiBbJ1ExJywgJ1EyJywgJ1EzJywgJ1E0J10sXG4gIHdpZGU6IFsnMXN0IHF1YXJ0ZXInLCAnMm5kIHF1YXJ0ZXInLCAnM3JkIHF1YXJ0ZXInLCAnNHRoIHF1YXJ0ZXInXVxufTsgLy8gTm90ZTogaW4gRW5nbGlzaCwgdGhlIG5hbWVzIG9mIGRheXMgb2YgdGhlIHdlZWsgYW5kIG1vbnRocyBhcmUgY2FwaXRhbGl6ZWQuXG4vLyBJZiB5b3UgYXJlIG1ha2luZyBhIG5ldyBsb2NhbGUgYmFzZWQgb24gdGhpcyBvbmUsIGNoZWNrIGlmIHRoZSBzYW1lIGlzIHRydWUgZm9yIHRoZSBsYW5ndWFnZSB5b3UncmUgd29ya2luZyBvbi5cbi8vIEdlbmVyYWxseSwgZm9ybWF0dGVkIGRhdGVzIHNob3VsZCBsb29rIGxpa2UgdGhleSBhcmUgaW4gdGhlIG1pZGRsZSBvZiBhIHNlbnRlbmNlLFxuLy8gZS5nLiBpbiBTcGFuaXNoIGxhbmd1YWdlIHRoZSB3ZWVrZGF5cyBhbmQgbW9udGhzIHNob3VsZCBiZSBpbiB0aGUgbG93ZXJjYXNlLlxuXG52YXIgbW9udGhWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydKJywgJ0YnLCAnTScsICdBJywgJ00nLCAnSicsICdKJywgJ0EnLCAnUycsICdPJywgJ04nLCAnRCddLFxuICBhYmJyZXZpYXRlZDogWydKYW4nLCAnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWwnLCAnQXVnJywgJ1NlcCcsICdPY3QnLCAnTm92JywgJ0RlYyddLFxuICB3aWRlOiBbJ0phbnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAnQXByaWwnLCAnTWF5JywgJ0p1bmUnLCAnSnVseScsICdBdWd1c3QnLCAnU2VwdGVtYmVyJywgJ09jdG9iZXInLCAnTm92ZW1iZXInLCAnRGVjZW1iZXInXVxufTtcbnZhciBkYXlWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydTJywgJ00nLCAnVCcsICdXJywgJ1QnLCAnRicsICdTJ10sXG4gIHNob3J0OiBbJ1N1JywgJ01vJywgJ1R1JywgJ1dlJywgJ1RoJywgJ0ZyJywgJ1NhJ10sXG4gIGFiYnJldmlhdGVkOiBbJ1N1bicsICdNb24nLCAnVHVlJywgJ1dlZCcsICdUaHUnLCAnRnJpJywgJ1NhdCddLFxuICB3aWRlOiBbJ1N1bmRheScsICdNb25kYXknLCAnVHVlc2RheScsICdXZWRuZXNkYXknLCAnVGh1cnNkYXknLCAnRnJpZGF5JywgJ1NhdHVyZGF5J11cbn07XG52YXIgZGF5UGVyaW9kVmFsdWVzID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogJ2EnLFxuICAgIHBtOiAncCcsXG4gICAgbWlkbmlnaHQ6ICdtaScsXG4gICAgbm9vbjogJ24nLFxuICAgIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgICBuaWdodDogJ25pZ2h0J1xuICB9LFxuICBhYmJyZXZpYXRlZDoge1xuICAgIGFtOiAnQU0nLFxuICAgIHBtOiAnUE0nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnZXZlbmluZycsXG4gICAgbmlnaHQ6ICduaWdodCdcbiAgfSxcbiAgd2lkZToge1xuICAgIGFtOiAnYS5tLicsXG4gICAgcG06ICdwLm0uJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ21vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnbmlnaHQnXG4gIH1cbn07XG52YXIgZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06ICdhJyxcbiAgICBwbTogJ3AnLFxuICAgIG1pZG5pZ2h0OiAnbWknLFxuICAgIG5vb246ICduJyxcbiAgICBtb3JuaW5nOiAnaW4gdGhlIG1vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2luIHRoZSBhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdpbiB0aGUgZXZlbmluZycsXG4gICAgbmlnaHQ6ICdhdCBuaWdodCdcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogJ0FNJyxcbiAgICBwbTogJ1BNJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ2luIHRoZSBtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdpbiB0aGUgYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnaW4gdGhlIGV2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnYXQgbmlnaHQnXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogJ2EubS4nLFxuICAgIHBtOiAncC5tLicsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdpbiB0aGUgbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnaW4gdGhlIGFmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2luIHRoZSBldmVuaW5nJyxcbiAgICBuaWdodDogJ2F0IG5pZ2h0J1xuICB9XG59O1xuXG52YXIgb3JkaW5hbE51bWJlciA9IGZ1bmN0aW9uIChkaXJ0eU51bWJlciwgX29wdGlvbnMpIHtcbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7IC8vIElmIG9yZGluYWwgbnVtYmVycyBkZXBlbmQgb24gY29udGV4dCwgZm9yIGV4YW1wbGUsXG4gIC8vIGlmIHRoZXkgYXJlIGRpZmZlcmVudCBmb3IgZGlmZmVyZW50IGdyYW1tYXRpY2FsIGdlbmRlcnMsXG4gIC8vIHVzZSBgb3B0aW9ucy51bml0YC5cbiAgLy9cbiAgLy8gYHVuaXRgIGNhbiBiZSAneWVhcicsICdxdWFydGVyJywgJ21vbnRoJywgJ3dlZWsnLCAnZGF0ZScsICdkYXlPZlllYXInLFxuICAvLyAnZGF5JywgJ2hvdXInLCAnbWludXRlJywgJ3NlY29uZCcuXG5cbiAgdmFyIHJlbTEwMCA9IG51bWJlciAlIDEwMDtcblxuICBpZiAocmVtMTAwID4gMjAgfHwgcmVtMTAwIDwgMTApIHtcbiAgICBzd2l0Y2ggKHJlbTEwMCAlIDEwKSB7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyAnc3QnO1xuXG4gICAgICBjYXNlIDI6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyAnbmQnO1xuXG4gICAgICBjYXNlIDM6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyAncmQnO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudW1iZXIgKyAndGgnO1xufTtcblxudmFyIGxvY2FsaXplID0ge1xuICBvcmRpbmFsTnVtYmVyOiBvcmRpbmFsTnVtYmVyLFxuICBlcmE6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBlcmFWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIHF1YXJ0ZXI6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBxdWFydGVyVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnLFxuICAgIGFyZ3VtZW50Q2FsbGJhY2s6IGZ1bmN0aW9uIChxdWFydGVyKSB7XG4gICAgICByZXR1cm4gcXVhcnRlciAtIDE7XG4gICAgfVxuICB9KSxcbiAgbW9udGg6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBtb250aFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5OiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZGF5VmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBkYXlQZXJpb2Q6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBkYXlQZXJpb2RWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZScsXG4gICAgZm9ybWF0dGluZ1ZhbHVlczogZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0Rm9ybWF0dGluZ1dpZHRoOiAnd2lkZSdcbiAgfSlcbn07XG5leHBvcnQgZGVmYXVsdCBsb2NhbGl6ZTsiLCJpbXBvcnQgYnVpbGRNYXRjaEZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkTWF0Y2hGbi9pbmRleC5qc1wiO1xuaW1wb3J0IGJ1aWxkTWF0Y2hQYXR0ZXJuRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRNYXRjaFBhdHRlcm5Gbi9pbmRleC5qc1wiO1xudmFyIG1hdGNoT3JkaW5hbE51bWJlclBhdHRlcm4gPSAvXihcXGQrKSh0aHxzdHxuZHxyZCk/L2k7XG52YXIgcGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybiA9IC9cXGQrL2k7XG52YXIgbWF0Y2hFcmFQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXihifGEpL2ksXG4gIGFiYnJldmlhdGVkOiAvXihiXFwuP1xccz9jXFwuP3xiXFwuP1xccz9jXFwuP1xccz9lXFwuP3xhXFwuP1xccz9kXFwuP3xjXFwuP1xccz9lXFwuPykvaSxcbiAgd2lkZTogL14oYmVmb3JlIGNocmlzdHxiZWZvcmUgY29tbW9uIGVyYXxhbm5vIGRvbWluaXxjb21tb24gZXJhKS9pXG59O1xudmFyIHBhcnNlRXJhUGF0dGVybnMgPSB7XG4gIGFueTogWy9eYi9pLCAvXihhfGMpL2ldXG59O1xudmFyIG1hdGNoUXVhcnRlclBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eWzEyMzRdL2ksXG4gIGFiYnJldmlhdGVkOiAvXnFbMTIzNF0vaSxcbiAgd2lkZTogL15bMTIzNF0odGh8c3R8bmR8cmQpPyBxdWFydGVyL2lcbn07XG52YXIgcGFyc2VRdWFydGVyUGF0dGVybnMgPSB7XG4gIGFueTogWy8xL2ksIC8yL2ksIC8zL2ksIC80L2ldXG59O1xudmFyIG1hdGNoTW9udGhQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXltqZm1hc29uZF0vaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKGphbnxmZWJ8bWFyfGFwcnxtYXl8anVufGp1bHxhdWd8c2VwfG9jdHxub3Z8ZGVjKS9pLFxuICB3aWRlOiAvXihqYW51YXJ5fGZlYnJ1YXJ5fG1hcmNofGFwcmlsfG1heXxqdW5lfGp1bHl8YXVndXN0fHNlcHRlbWJlcnxvY3RvYmVyfG5vdmVtYmVyfGRlY2VtYmVyKS9pXG59O1xudmFyIHBhcnNlTW9udGhQYXR0ZXJucyA9IHtcbiAgbmFycm93OiBbL15qL2ksIC9eZi9pLCAvXm0vaSwgL15hL2ksIC9ebS9pLCAvXmovaSwgL15qL2ksIC9eYS9pLCAvXnMvaSwgL15vL2ksIC9ebi9pLCAvXmQvaV0sXG4gIGFueTogWy9eamEvaSwgL15mL2ksIC9ebWFyL2ksIC9eYXAvaSwgL15tYXkvaSwgL15qdW4vaSwgL15qdWwvaSwgL15hdS9pLCAvXnMvaSwgL15vL2ksIC9ebi9pLCAvXmQvaV1cbn07XG52YXIgbWF0Y2hEYXlQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXltzbXR3Zl0vaSxcbiAgc2hvcnQ6IC9eKHN1fG1vfHR1fHdlfHRofGZyfHNhKS9pLFxuICBhYmJyZXZpYXRlZDogL14oc3VufG1vbnx0dWV8d2VkfHRodXxmcml8c2F0KS9pLFxuICB3aWRlOiAvXihzdW5kYXl8bW9uZGF5fHR1ZXNkYXl8d2VkbmVzZGF5fHRodXJzZGF5fGZyaWRheXxzYXR1cmRheSkvaVxufTtcbnZhciBwYXJzZURheVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IFsvXnMvaSwgL15tL2ksIC9edC9pLCAvXncvaSwgL150L2ksIC9eZi9pLCAvXnMvaV0sXG4gIGFueTogWy9ec3UvaSwgL15tL2ksIC9edHUvaSwgL153L2ksIC9edGgvaSwgL15mL2ksIC9ec2EvaV1cbn07XG52YXIgbWF0Y2hEYXlQZXJpb2RQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXihhfHB8bWl8bnwoaW4gdGhlfGF0KSAobW9ybmluZ3xhZnRlcm5vb258ZXZlbmluZ3xuaWdodCkpL2ksXG4gIGFueTogL14oW2FwXVxcLj9cXHM/bVxcLj98bWlkbmlnaHR8bm9vbnwoaW4gdGhlfGF0KSAobW9ybmluZ3xhZnRlcm5vb258ZXZlbmluZ3xuaWdodCkpL2lcbn07XG52YXIgcGFyc2VEYXlQZXJpb2RQYXR0ZXJucyA9IHtcbiAgYW55OiB7XG4gICAgYW06IC9eYS9pLFxuICAgIHBtOiAvXnAvaSxcbiAgICBtaWRuaWdodDogL15taS9pLFxuICAgIG5vb246IC9ebm8vaSxcbiAgICBtb3JuaW5nOiAvbW9ybmluZy9pLFxuICAgIGFmdGVybm9vbjogL2FmdGVybm9vbi9pLFxuICAgIGV2ZW5pbmc6IC9ldmVuaW5nL2ksXG4gICAgbmlnaHQ6IC9uaWdodC9pXG4gIH1cbn07XG52YXIgbWF0Y2ggPSB7XG4gIG9yZGluYWxOdW1iZXI6IGJ1aWxkTWF0Y2hQYXR0ZXJuRm4oe1xuICAgIG1hdGNoUGF0dGVybjogbWF0Y2hPcmRpbmFsTnVtYmVyUGF0dGVybixcbiAgICBwYXJzZVBhdHRlcm46IHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4sXG4gICAgdmFsdWVDYWxsYmFjazogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICByZXR1cm4gcGFyc2VJbnQodmFsdWUsIDEwKTtcbiAgICB9XG4gIH0pLFxuICBlcmE6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hFcmFQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRXJhUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pLFxuICBxdWFydGVyOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoUXVhcnRlclBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VRdWFydGVyUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknLFxuICAgIHZhbHVlQ2FsbGJhY2s6IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgcmV0dXJuIGluZGV4ICsgMTtcbiAgICB9XG4gIH0pLFxuICBtb250aDogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaE1vbnRoUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZU1vbnRoUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pLFxuICBkYXk6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hEYXlQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRGF5UGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pLFxuICBkYXlQZXJpb2Q6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hEYXlQZXJpb2RQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ2FueScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VEYXlQZXJpb2RQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSlcbn07XG5leHBvcnQgZGVmYXVsdCBtYXRjaDsiLCJpbXBvcnQgZm9ybWF0RGlzdGFuY2UgZnJvbSBcIi4vX2xpYi9mb3JtYXREaXN0YW5jZS9pbmRleC5qc1wiO1xuaW1wb3J0IGZvcm1hdExvbmcgZnJvbSBcIi4vX2xpYi9mb3JtYXRMb25nL2luZGV4LmpzXCI7XG5pbXBvcnQgZm9ybWF0UmVsYXRpdmUgZnJvbSBcIi4vX2xpYi9mb3JtYXRSZWxhdGl2ZS9pbmRleC5qc1wiO1xuaW1wb3J0IGxvY2FsaXplIGZyb20gXCIuL19saWIvbG9jYWxpemUvaW5kZXguanNcIjtcbmltcG9ydCBtYXRjaCBmcm9tIFwiLi9fbGliL21hdGNoL2luZGV4LmpzXCI7XG5cbi8qKlxuICogQHR5cGUge0xvY2FsZX1cbiAqIEBjYXRlZ29yeSBMb2NhbGVzXG4gKiBAc3VtbWFyeSBFbmdsaXNoIGxvY2FsZSAoVW5pdGVkIFN0YXRlcykuXG4gKiBAbGFuZ3VhZ2UgRW5nbGlzaFxuICogQGlzby02MzktMiBlbmdcbiAqIEBhdXRob3IgU2FzaGEgS29zcyBbQGtvc3Nub2NvcnBde0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9rb3Nzbm9jb3JwfVxuICogQGF1dGhvciBMZXNoYSBLb3NzIFtAbGVzaGFrb3NzXXtAbGluayBodHRwczovL2dpdGh1Yi5jb20vbGVzaGFrb3NzfVxuICovXG52YXIgbG9jYWxlID0ge1xuICBjb2RlOiAnZW4tVVMnLFxuICBmb3JtYXREaXN0YW5jZTogZm9ybWF0RGlzdGFuY2UsXG4gIGZvcm1hdExvbmc6IGZvcm1hdExvbmcsXG4gIGZvcm1hdFJlbGF0aXZlOiBmb3JtYXRSZWxhdGl2ZSxcbiAgbG9jYWxpemU6IGxvY2FsaXplLFxuICBtYXRjaDogbWF0Y2gsXG4gIG9wdGlvbnM6IHtcbiAgICB3ZWVrU3RhcnRzT246IDBcbiAgICAvKiBTdW5kYXkgKi9cbiAgICAsXG4gICAgZmlyc3RXZWVrQ29udGFpbnNEYXRlOiAxXG4gIH1cbn07XG5leHBvcnQgZGVmYXVsdCBsb2NhbGU7IiwiaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7IC8vIENsb25lIHRoZSBkYXRlXG5cbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCB0eXBlb2YgYXJndW1lbnQgPT09ICdvYmplY3QnICYmIGFyZ1N0ciA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50LmdldFRpbWUoKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50ID09PSAnbnVtYmVyJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IE51bWJlcl0nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgYXJnU3RyID09PSAnW29iamVjdCBTdHJpbmddJykgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFwiU3RhcnRpbmcgd2l0aCB2Mi4wLjAtYmV0YS4xIGRhdGUtZm5zIGRvZXNuJ3QgYWNjZXB0IHN0cmluZ3MgYXMgZGF0ZSBhcmd1bWVudHMuIFBsZWFzZSB1c2UgYHBhcnNlSVNPYCB0byBwYXJzZSBzdHJpbmdzLiBTZWU6IGh0dHBzOi8vZ2l0LmlvL2ZqdWxlXCIpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuXG4gICAgICBjb25zb2xlLndhcm4obmV3IEVycm9yKCkuc3RhY2spO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgdmlld0JveD1cXFwiMCAwIDM2IDM2XFxcIiBmaWxsPVxcXCJub25lXFxcIiB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiPjxwYXRoIGQ9XFxcIk02IDQuNUgzMEwzMyAxMC41VjMwQzMzIDMwLjM5NzggMzIuODQyIDMwLjc3OTQgMzIuNTYwNyAzMS4wNjA3QzMyLjI3OTQgMzEuMzQyIDMxLjg5NzggMzEuNSAzMS41IDMxLjVINC41QzQuMTAyMTggMzEuNSAzLjcyMDY0IDMxLjM0MiAzLjQzOTM0IDMxLjA2MDdDMy4xNTgwNCAzMC43Nzk0IDMgMzAuMzk3OCAzIDMwVjEwLjUwNkw2IDQuNVpNMTkuNSAyMVYxNUgxNi41VjIxSDEyTDE4IDI3TDI0IDIxSDE5LjVaTTI5LjY0NiAxMC41TDI4LjE0NiA3LjVINy44NTU1TDYuMzU1NSAxMC41SDI5LjY0NlpcXFwiIGZpbGw9XFxcIiM0OTUwNTdcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHZpZXdCb3g9XFxcIjAgMCAzMCAzMVxcXCIgZmlsbD1cXFwibm9uZVxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIj48cGF0aCBkPVxcXCJNMy43NSA1LjVIMjYuMjVWOEgzLjc1VjUuNVpNMy43NSAxNC4yNUgyNi4yNVYxNi43NUgzLjc1VjE0LjI1Wk0zLjc1IDIzSDI2LjI1VjI1LjVIMy43NVYyM1pcXFwiIGZpbGw9XFxcIiM0OTUwNTdcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHZpZXdCb3g9XFxcIjAgMCAzNiAzNlxcXCIgZmlsbD1cXFwibm9uZVxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIj48cGF0aCBkPVxcXCJNMjUuNSA0LjVIMzEuNUMzMS44OTc4IDQuNSAzMi4yNzk0IDQuNjU4MDQgMzIuNTYwNyA0LjkzOTM0QzMyLjg0MiA1LjIyMDY0IDMzIDUuNjAyMTcgMzMgNlYzMEMzMyAzMC4zOTc4IDMyLjg0MiAzMC43Nzk0IDMyLjU2MDcgMzEuMDYwN0MzMi4yNzk0IDMxLjM0MiAzMS44OTc4IDMxLjUgMzEuNSAzMS41SDQuNUM0LjEwMjE4IDMxLjUgMy43MjA2NCAzMS4zNDIgMy40MzkzNCAzMS4wNjA3QzMuMTU4MDQgMzAuNzc5NCAzIDMwLjM5NzggMyAzMFY2QzMgNS42MDIxNyAzLjE1ODA0IDUuMjIwNjQgMy40MzkzNCA0LjkzOTM0QzMuNzIwNjQgNC42NTgwNCA0LjEwMjE4IDQuNSA0LjUgNC41SDEwLjVWMS41SDEzLjVWNC41SDIyLjVWMS41SDI1LjVWNC41Wk02IDEzLjVWMjguNUgzMFYxMy41SDZaTTkgMTkuNUgxNi41VjI1LjVIOVYxOS41WlxcXCIgZmlsbD1cXFwiIzQ5NTA1N1xcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgdmlld0JveD1cXFwiMCAwIDMwIDMwXFxcIiBmaWxsPVxcXCJub25lXFxcIiB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiPjxwYXRoIGQ9XFxcIk0xMi44NTcxIDEyLjg1NzFWMEgxNy4xNDI5VjEyLjg1NzFIMzBWMTcuMTQyOUgxNy4xNDI5VjMwSDEyLjg1NzFWMTcuMTQyOUgwVjEyLjg1NzFIMTIuODU3MVpcXFwiIGZpbGw9XFxcIiM0OTUwNTdcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHZpZXdCb3g9XFxcIjAgMCAzNiAzNlxcXCIgZmlsbD1cXFwibm9uZVxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIj48Y2lyY2xlIGN4PVxcXCIxOFxcXCIgY3k9XFxcIjE4XFxcIiByPVxcXCIxOFxcXCIgZmlsbD1cXFwiI0M0QzRDNFxcXCI+PC9jaXJjbGU+PHBhdGggZD1cXFwiTTE1LjMzMzMgMjIuMjI5M0wyNy41ODkzIDkuOTcyTDI5LjQ3NiAxMS44NTczTDE1LjMzMzMgMjZMNi44NDc5OSAxNy41MTQ3TDguNzMzMzMgMTUuNjI5M0wxNS4zMzMzIDIyLjIyOTNaXFxcIiBmaWxsPVxcXCJ3aGl0ZVxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgdmlld0JveD1cXFwiMCAwIDM2IDM2XFxcIiBmaWxsPVxcXCJub25lXFxcIiB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiPjxjaXJjbGUgY3g9XFxcIjE4XFxcIiBjeT1cXFwiMThcXFwiIHI9XFxcIjE4XFxcIiBmaWxsPVxcXCIjRkY2QjZCXFxcIj48L2NpcmNsZT48Y2lyY2xlIGN4PVxcXCIxOFxcXCIgY3k9XFxcIjE4XFxcIiByPVxcXCIxNVxcXCIgZmlsbD1cXFwiI0ZGRTNFM1xcXCI+PC9jaXJjbGU+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB2aWV3Qm94PVxcXCIwIDAgMzYgMzZcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCI+PGNpcmNsZSBjeD1cXFwiMThcXFwiIGN5PVxcXCIxOFxcXCIgcj1cXFwiMThcXFwiIGZpbGw9XFxcIiNGQ0M0MTlcXFwiPjwvY2lyY2xlPjxjaXJjbGUgY3g9XFxcIjE4XFxcIiBjeT1cXFwiMThcXFwiIHI9XFxcIjE1XFxcIiBmaWxsPVxcXCIjRkZFQzk5XFxcIj48L2NpcmNsZT48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHZpZXdCb3g9XFxcIjAgMCAzNiAzNlxcXCIgZmlsbD1cXFwibm9uZVxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIj48cGF0aCBmaWxsLXJ1bGU9XFxcImV2ZW5vZGRcXFwiIGNsaXAtcnVsZT1cXFwiZXZlbm9kZFxcXCIgZD1cXFwiTTE4IDM2QzI3Ljk0MTEgMzYgMzYgMjcuOTQxMSAzNiAxOEMzNiA4LjA1ODg3IDI3Ljk0MTEgMCAxOCAwQzguMDU4ODcgMCAwIDguMDU4ODcgMCAxOEMwIDI3Ljk0MTEgOC4wNTg4NyAzNiAxOCAzNlpNMTggMzNDMjYuMjg0MyAzMyAzMyAyNi4yODQzIDMzIDE4QzMzIDkuNzE1NzMgMjYuMjg0MyAzIDE4IDNDOS43MTU3MyAzIDMgOS43MTU3MyAzIDE4QzMgMjYuMjg0MyA5LjcxNTczIDMzIDE4IDMzWlxcXCIgZmlsbD1cXFwiI0NFRDREQVxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgdmlld0JveD1cXFwiMCAwIDM2IDM2XFxcIiBmaWxsPVxcXCJub25lXFxcIiB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiPjxjaXJjbGUgY3g9XFxcIjE4XFxcIiBjeT1cXFwiMThcXFwiIHI9XFxcIjE4XFxcIiBmaWxsPVxcXCIjOTREODJEXFxcIj48L2NpcmNsZT48Y2lyY2xlIGN4PVxcXCIxOFxcXCIgY3k9XFxcIjE4XFxcIiByPVxcXCIxNVxcXCIgZmlsbD1cXFwiI0U5RkFDOFxcXCI+PC9jaXJjbGU+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB2aWV3Qm94PVxcXCIwIDAgMzYgMzZcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCI+PHBhdGggZD1cXFwiTTI1LjUgNC41SDMxLjVDMzEuODk3OCA0LjUgMzIuMjc5NCA0LjY1ODAzIDMyLjU2MDcgNC45MzkzNEMzMi44NDIgNS4yMjA2NCAzMyA1LjYwMjE3IDMzIDZWMzBDMzMgMzAuMzk3OCAzMi44NDIgMzAuNzc5NCAzMi41NjA3IDMxLjA2MDdDMzIuMjc5NCAzMS4zNDIgMzEuODk3OCAzMS41IDMxLjUgMzEuNUg0LjVDNC4xMDIxOCAzMS41IDMuNzIwNjQgMzEuMzQyIDMuNDM5MzQgMzEuMDYwN0MzLjE1ODA0IDMwLjc3OTQgMyAzMC4zOTc4IDMgMzBWNkMzIDUuNjAyMTcgMy4xNTgwNCA1LjIyMDY0IDMuNDM5MzQgNC45MzkzNEMzLjcyMDY0IDQuNjU4MDMgNC4xMDIxOCA0LjUgNC41IDQuNUgxMC41VjEuNUgxMy41VjQuNUgyMi41VjEuNUgyNS41VjQuNVpNNiAxMy41VjI4LjVIMzBWMTMuNUg2Wk05IDE2LjVIMTJWMTkuNUg5VjE2LjVaTTkgMjIuNUgxMlYyNS41SDlWMjIuNVpNMTUgMTYuNUgyN1YxOS41SDE1VjE2LjVaTTE1IDIyLjVIMjIuNVYyNS41SDE1VjIyLjVaXFxcIiBmaWxsPVxcXCIjNDk1MDU3XFxcIj48L3BhdGg+PC9zdmc+XCIiLCJjb25zdCBjb2xvcnMgPSBbXG4gICcjZmY2YjZiJyxcbiAgJyNmMDY1OTUnLFxuICAnI2NjNWRlOCcsXG4gICcjODQ1ZWY3JyxcbiAgJyM1YzdjZmEnLFxuICAnIzMzOWFmMCcsXG4gICcjMjJiOGNmJyxcbiAgJyMyMGM5OTcnLFxuICAnIzUxY2Y2NicsXG4gICcjOTRkODJkJyxcbiAgJyNmY2M0MTknLFxuICAnI2ZmOTIyYicsXG5dXG5cbmNvbnN0IENvbG9yUGlja2VyID0gKCgpID0+IHtcbiAgbGV0IGN1cnJlbnRUYXJnZXQgPSBudWxsXG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBlbGVtZW50LmNsYXNzTmFtZSA9ICdjb2xvci1waWNrZXIgaGlkZGVuJ1xuXG4gIGNvbnN0IGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKVxuICBoMy5jbGFzc05hbWUgPSAnY29sb3ItcGlja2VyX190aXRsZSdcbiAgaDMudGV4dENvbnRlbnQgPSAnUGljayBhIGNvbG9yOidcblxuICBjb25zdCBjb2xvckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGNvbG9yQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdjb2xvci1waWNrZXJfX2NvbG9ycydcblxuICBmb3IgKGxldCBjb2xvciBvZiBjb2xvcnMpIHtcbiAgICBjb25zdCBjb2xvckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbG9yRWxlbWVudC5jbGFzc05hbWUgPSAnY29sb3ItcGlja2VyX19jb2xvcidcbiAgICBjb2xvckVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3JcblxuICAgIGNvbG9yRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGlmIChjdXJyZW50VGFyZ2V0ICE9IG51bGwpIHtcbiAgICAgICAgY3VycmVudFRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvclxuICAgICAgICBjdXJyZW50VGFyZ2V0LnNldEF0dHJpYnV0ZSgnZGF0YS1jb2xvcicsIGNvbG9yKVxuICAgICAgfVxuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICAgIH0pXG4gICAgY29sb3JDb250YWluZXIuYXBwZW5kQ2hpbGQoY29sb3JFbGVtZW50KVxuICB9XG5cbiAgY29uc3QgZ2VuZXJhdGUgPSAodGFyZ2V0LCB4LCB5KSA9PiB7XG4gICAgY3VycmVudFRhcmdldCA9IHRhcmdldFxuICAgIGVsZW1lbnQuc3R5bGUudG9wID0gYCR7eX1weGBcbiAgICBlbGVtZW50LnN0eWxlLmxlZnQgPSBgJHt4fXB4YFxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJylcbiAgfVxuXG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQoaDMpXG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQoY29sb3JDb250YWluZXIpXG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQgIT0gZWxlbWVudCAmJiAhZWxlbWVudC5jb250YWlucyhlLnRhcmdldCkpXG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gIH0pXG5cbiAgcmV0dXJuIHsgZWxlbWVudCwgZ2VuZXJhdGUgfVxufSkoKVxuXG5leHBvcnQgZGVmYXVsdCBDb2xvclBpY2tlclxuIiwiY29uc3QgRGl2aWRlciA9ICgpID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hyJylcbiAgZWxlbWVudC5jbGFzc05hbWUgPSAnZGl2aWRlcidcblxuICByZXR1cm4gZWxlbWVudFxufVxuXG5leHBvcnQgZGVmYXVsdCBEaXZpZGVyXG4iLCJjb25zdCBFbXB0eU1lc3NhZ2UgPSAodGV4dCkgPT4ge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gIGVsZW1lbnQuY2xhc3NOYW1lID0gJ2VtcHR5LW1lc3NhZ2UnXG4gIGVsZW1lbnQudGV4dENvbnRlbnQgPSB0ZXh0XG4gIHJldHVybiBlbGVtZW50XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVtcHR5TWVzc2FnZVxuIiwiaW1wb3J0IE1lbnUgZnJvbSAnLi9tZW51L01lbnUnXG5pbXBvcnQgVGFza3NWaWV3IGZyb20gJy4vdGFzay9UYXNrc1ZpZXcnXG5pbXBvcnQgTWVudU9wdGlvbnMgZnJvbSAnLi9tZW51L29wdGlvbi9NZW51T3B0aW9ucydcblxuY29uc3QgTWFpbiA9ICgoKSA9PiB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBtYWluLmNsYXNzTmFtZSA9ICdtYWluJ1xuXG4gIG1haW4uYXBwZW5kQ2hpbGQoTWVudS5lbGVtZW50KVxuICBtYWluLmFwcGVuZENoaWxkKFRhc2tzVmlldy5lbGVtZW50KVxuICBNZW51T3B0aW9ucy5tZW51T3B0aW9uc1swXS5lbGVtZW50LmNsaWNrKClcblxuICByZXR1cm4gbWFpblxufSkoKVxuXG5leHBvcnQgZGVmYXVsdCBNYWluXG4iLCJpbXBvcnQgTWVudUljb24gZnJvbSAnLi9pY29ucy9NZW51SWNvbidcbmltcG9ydCBBZGRJY29uIGZyb20gJy4vaWNvbnMvQWRkSWNvbidcbmltcG9ydCBNZW51IGZyb20gJy4vbWVudS9NZW51J1xuaW1wb3J0IE5ld1Rhc2tGb3JtIGZyb20gJy4vdGFzay9OZXdUYXNrRm9ybSdcblxuY29uc3QgTmF2YmFyID0gKCgpID0+IHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJylcbiAgaGVhZGVyLmNsYXNzTmFtZSA9ICdoZWFkZXInXG5cbiAgY29uc3QgbmF2QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2JylcbiAgbmF2QmFyLmNsYXNzTmFtZSA9ICduYXZiYXInXG5cbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gIHRpdGxlLmNsYXNzTmFtZSA9ICdoZWFkZXJfX3RpdGxlJ1xuICB0aXRsZS50ZXh0Q29udGVudCA9ICdUb2RvQXBwJ1xuXG4gIGNvbnN0IG1lbnVJY29uID0gTWVudUljb24oJ2hlYWRlcl9faWNvbiBoZWFkZXJfX2ljb24tLW1lbnUnKVxuICBtZW51SWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIE1lbnUudG9nZ2xlSGlkZSlcblxuICBjb25zdCBhZGRJY29uID0gQWRkSWNvbignaGVhZGVyX19pY29uIGhlYWRlcl9faWNvbi0tYWRkJylcbiAgYWRkSWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IE5ld1Rhc2tGb3JtLnVwZGF0ZUZvcm0obnVsbCkpXG5cbiAgbmF2QmFyLmFwcGVuZENoaWxkKG1lbnVJY29uKVxuICBuYXZCYXIuYXBwZW5kQ2hpbGQodGl0bGUpXG4gIG5hdkJhci5hcHBlbmRDaGlsZChhZGRJY29uKVxuICBoZWFkZXIuYXBwZW5kQ2hpbGQobmF2QmFyKVxuXG4gIHJldHVybiBoZWFkZXJcbn0pKClcblxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyXG4iLCJpbXBvcnQgSWNvbiBmcm9tICcuL0ljb24nXG5pbXBvcnQgQWRkSWNvblN2ZyBmcm9tICcuLi8uLi8uLi9hc3NldHMvaWNvbnMvcGx1cy5zdmcnXG5cbmNvbnN0IEFkZEljb24gPSAoY2xhc3NlcykgPT4gSWNvbihBZGRJY29uU3ZnLCBjbGFzc2VzKVxuZXhwb3J0IGRlZmF1bHQgQWRkSWNvblxuIiwiY29uc3QgSWNvbiA9IChzdmcsIGNsYXNzZXMpID0+IHtcbiAgY29uc3Qgc3ZnQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgc3ZnQ29udGFpbmVyLmNsYXNzTmFtZSA9IGNsYXNzZXNcbiAgc3ZnQ29udGFpbmVyLmlubmVySFRNTCA9IHN2Z1xuXG4gIHJldHVybiBzdmdDb250YWluZXJcbn1cblxuZXhwb3J0IGRlZmF1bHQgSWNvblxuIiwiaW1wb3J0IEljb24gZnJvbSAnLi9JY29uJ1xuaW1wb3J0IEluYm94SWNvblN2ZyBmcm9tICcuLi8uLi8uLi9hc3NldHMvaWNvbnMvaW5ib3guc3ZnJ1xuXG5jb25zdCBJbmJveEljb24gPSAoY2xhc3NlcykgPT4gSWNvbihJbmJveEljb25TdmcsIGNsYXNzZXMpXG5leHBvcnQgZGVmYXVsdCBJbmJveEljb25cbiIsImltcG9ydCBJY29uIGZyb20gJy4vSWNvbidcbmltcG9ydCBNZW51SWNvblN2ZyBmcm9tICcuLi8uLi8uLi9hc3NldHMvaWNvbnMvbWVudS5zdmcnXG5cbmNvbnN0IE1lbnVJY29uID0gKGNsYXNzZXMpID0+IEljb24oTWVudUljb25TdmcsIGNsYXNzZXMpXG5leHBvcnQgZGVmYXVsdCBNZW51SWNvblxuIiwiaW1wb3J0IEljb24gZnJvbSAnLi9JY29uJ1xuaW1wb3J0IE5leHREYXlzSWNvblN2ZyBmcm9tICcuLi8uLi8uLi9hc3NldHMvaWNvbnMvbmV4dC03LWRheXMuc3ZnJ1xuXG5jb25zdCBOZXh0RGF5c0ljb24gPSAoY2xhc3NlcykgPT4gSWNvbihOZXh0RGF5c0ljb25TdmcsIGNsYXNzZXMpXG5leHBvcnQgZGVmYXVsdCBOZXh0RGF5c0ljb25cbiIsImltcG9ydCBJY29uIGZyb20gJy4vSWNvbidcbmltcG9ydCBEb25lSWNvblN2ZyBmcm9tICcuLi8uLi8uLi9hc3NldHMvaWNvbnMvdGFza3MvZG9uZS5zdmcnXG5pbXBvcnQgTm9uZUljb25TdmcgZnJvbSAnLi4vLi4vLi4vYXNzZXRzL2ljb25zL3Rhc2tzL25vbmUuc3ZnJ1xuaW1wb3J0IFNtYWxsSWNvblN2ZyBmcm9tICcuLi8uLi8uLi9hc3NldHMvaWNvbnMvdGFza3Mvc21hbGwuc3ZnJ1xuaW1wb3J0IE1lZGl1bUljb25TdmcgZnJvbSAnLi4vLi4vLi4vYXNzZXRzL2ljb25zL3Rhc2tzL21lZGl1bS5zdmcnXG5pbXBvcnQgSGlnaEljb25TdmcgZnJvbSAnLi4vLi4vLi4vYXNzZXRzL2ljb25zL3Rhc2tzL2hpZ2guc3ZnJ1xuXG5jb25zdCBpY29ucyA9IHtcbiAgZG9uZTogRG9uZUljb25TdmcsXG4gIG5vbmU6IE5vbmVJY29uU3ZnLFxuICBsb3c6IFNtYWxsSWNvblN2ZyxcbiAgbWVkaXVtOiBNZWRpdW1JY29uU3ZnLFxuICBoaWdoOiBIaWdoSWNvblN2Zyxcbn1cblxuY29uc3QgVGFza1N0YXR1c0ljb24gPSAodHlwZSwgY2xhc3NlcykgPT4gSWNvbihpY29uc1t0eXBlXSwgY2xhc3NlcylcblxuZXhwb3J0IGRlZmF1bHQgVGFza1N0YXR1c0ljb25cbiIsImltcG9ydCBJY29uIGZyb20gJy4vSWNvbidcbmltcG9ydCBUb2RheUljb25TdmcgZnJvbSAnLi4vLi4vLi4vYXNzZXRzL2ljb25zL3RvZGF5LnN2ZydcblxuY29uc3QgVG9kYXlJY29uID0gKGNsYXNzZXMpID0+IEljb24oVG9kYXlJY29uU3ZnLCBjbGFzc2VzKVxuZXhwb3J0IGRlZmF1bHQgVG9kYXlJY29uXG4iLCJjb25zdCBDdXJyZW50TWVudU9wdGlvbiA9ICgoKSA9PiB7XG4gIGxldCBlbGVtZW50ID0gbnVsbFxuXG4gIGNvbnN0IGdldEVsZW1lbnQgPSAoKSA9PiBlbGVtZW50XG4gIGNvbnN0IHNldEVsZW1lbnQgPSAobmV3RWxlbWVudCkgPT4gKGVsZW1lbnQgPSBuZXdFbGVtZW50KVxuXG4gIHJldHVybiB7IGdldEVsZW1lbnQsIHNldEVsZW1lbnQgfVxufSkoKVxuXG5leHBvcnQgZGVmYXVsdCBDdXJyZW50TWVudU9wdGlvblxuIiwiaW1wb3J0IE1lbnVPcHRpb25zIGZyb20gJy4vb3B0aW9uL01lbnVPcHRpb25zJ1xuaW1wb3J0IE1lbnVUYWdzIGZyb20gJy4vdGFnL01lbnVUYWdzJ1xuaW1wb3J0IERpdmlkZXIgZnJvbSAnLi4vRGl2aWRlcidcbmltcG9ydCBNZW51UHJpb3JpdGllcyBmcm9tICcuL3ByaW9yaXR5L01lbnVQcmlvcml0aWVzJ1xuaW1wb3J0IFRhc2tzIGZyb20gJy4uLy4uL2RhdGEvdGFza3MnXG5pbXBvcnQgQ3VycmVudE1lbnVPcHRpb24gZnJvbSAnLi9DdXJyZW50TWVudU9wdGlvbidcblxuY29uc3QgTWVudSA9ICgoKSA9PiB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhc2lkZScpXG4gIGVsZW1lbnQuY2xhc3NOYW1lID0gJ21lbnUnXG5cbiAgZWxlbWVudC5hcHBlbmRDaGlsZChNZW51T3B0aW9ucy5lbGVtZW50KVxuICBlbGVtZW50LmFwcGVuZENoaWxkKERpdmlkZXIoKSlcbiAgZWxlbWVudC5hcHBlbmRDaGlsZChNZW51VGFncy5lbGVtZW50KVxuICBlbGVtZW50LmFwcGVuZENoaWxkKERpdmlkZXIoKSlcbiAgZWxlbWVudC5hcHBlbmRDaGlsZChNZW51UHJpb3JpdGllcy5lbGVtZW50KVxuXG4gIGNvbnN0IGNsZWFuQWN0aXZlcyA9ICgpID0+IHtcbiAgICBmb3IgKGxldCBvcHRpb24gb2YgTWVudU9wdGlvbnMubWVudU9wdGlvbnMpIHtcbiAgICAgIG9wdGlvbi5yZW1vdmVBY3RpdmVDbGFzcygpXG4gICAgfVxuXG4gICAgZm9yIChsZXQgdGFnIG9mIE1lbnVUYWdzLnRhZ0VsZW1lbnRzKSB7XG4gICAgICB0YWcucmVtb3ZlQWN0aXZlQ2xhc3MoKVxuICAgIH1cblxuICAgIGZvciAobGV0IHByaW9yaXR5IG9mIE1lbnVQcmlvcml0aWVzLnByaW9yaXR5RWxlbWVudHMpIHtcbiAgICAgIHByaW9yaXR5LnJlbW92ZUFjdGl2ZUNsYXNzKClcbiAgICB9XG4gIH1cblxuICBjb25zdCB1cGRhdGVUYXNrcyA9ICgpID0+IHtcbiAgICBjb25zdCB0YXNrcyA9IFRhc2tzLmdldFNvcnRlZFRhc2tzKClcblxuICAgIE1lbnVPcHRpb25zLnVwZGF0ZVRhc2tzKHRhc2tzKVxuICAgIE1lbnVUYWdzLnVwZGF0ZVRhc2tzKHRhc2tzKVxuICAgIE1lbnVQcmlvcml0aWVzLnVwZGF0ZVRhc2tzKHRhc2tzKVxuXG4gICAgY29uc3QgY3VycmVudE1lbnVPcHRpb24gPSBDdXJyZW50TWVudU9wdGlvbi5nZXRFbGVtZW50KClcbiAgICBpZiAoY3VycmVudE1lbnVPcHRpb24pIGN1cnJlbnRNZW51T3B0aW9uLmNsaWNrKClcbiAgfVxuXG4gIGNvbnN0IHRvZ2dsZUhpZGUgPSAoKSA9PiB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKVxuICB9XG5cbiAgcmV0dXJuIHsgZWxlbWVudCwgdG9nZ2xlSGlkZSwgY2xlYW5BY3RpdmVzLCB1cGRhdGVUYXNrcyB9XG59KSgpXG5cbmV4cG9ydCBkZWZhdWx0IE1lbnVcbiIsImNvbnN0IE1lbnVUaXRsZSA9ICh0aXRsZSkgPT4ge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKVxuICBlbGVtZW50LmNsYXNzTmFtZSA9ICdtZW51X190aXRsZSdcbiAgZWxlbWVudC50ZXh0Q29udGVudCA9IHRpdGxlXG5cbiAgcmV0dXJuIGVsZW1lbnRcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWVudVRpdGxlXG4iLCJpbXBvcnQgVGFza3NWaWV3IGZyb20gJy4uLy4uL3Rhc2svVGFza3NWaWV3J1xuaW1wb3J0IEN1cnJlbnRNZW51T3B0aW9uIGZyb20gJy4uL0N1cnJlbnRNZW51T3B0aW9uJ1xuXG5jb25zdCBNZW51T3B0aW9uID0gKGljb24sIHRpdGxlLCB0YXNrcykgPT4ge1xuICBsZXQgc29ydGVkVGFza3MgPSB0YXNrc1xuXG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBlbGVtZW50LmNsYXNzTmFtZSA9ICdtZW51X19vcHRpb24nXG5cbiAgY29uc3QgdGl0bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKVxuICB0aXRsZUVsZW1lbnQuY2xhc3NOYW1lID0gJ21lbnVfX29wdGlvbl9fdGl0bGUnXG4gIHRpdGxlRWxlbWVudC50ZXh0Q29udGVudCA9IHRpdGxlXG5cbiAgY29uc3QgYWRkQWN0aXZlQ2xhc3MgPSAoKSA9PiB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdtZW51X19vcHRpb24tLWFjdGl2ZScpXG4gIH1cblxuICBjb25zdCByZW1vdmVBY3RpdmVDbGFzcyA9ICgpID0+IHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ21lbnVfX29wdGlvbi0tYWN0aXZlJylcbiAgfVxuXG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQoaWNvbilcbiAgZWxlbWVudC5hcHBlbmRDaGlsZCh0aXRsZUVsZW1lbnQpXG5cbiAgY29uc3QgYWRkQ2xpY2tFdmVudCA9IChjbGlja0V2ZW50KSA9PiB7XG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgICAgY2xpY2tFdmVudCgpXG4gICAgICBUYXNrc1ZpZXcuZ2VuZXJhdGVUYXNrcyh0aXRsZSwgc29ydGVkVGFza3MpXG4gICAgICBDdXJyZW50TWVudU9wdGlvbi5zZXRFbGVtZW50KGVsZW1lbnQpXG4gICAgfSlcbiAgfVxuXG4gIGNvbnN0IHVwZGF0ZVRhc2tzID0gKHVwZGF0ZWRUYXNrcykgPT4gKHNvcnRlZFRhc2tzID0gdXBkYXRlZFRhc2tzKVxuXG4gIHJldHVybiB7XG4gICAgZWxlbWVudCxcbiAgICBhZGRBY3RpdmVDbGFzcyxcbiAgICByZW1vdmVBY3RpdmVDbGFzcyxcbiAgICBhZGRDbGlja0V2ZW50LFxuICAgIHVwZGF0ZVRhc2tzLFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1lbnVPcHRpb25cbiIsImltcG9ydCBJbmJveEljb24gZnJvbSAnLi4vLi4vaWNvbnMvSW5ib3hJY29uJ1xuaW1wb3J0IFRvZGF5SWNvbiBmcm9tICcuLi8uLi9pY29ucy9Ub2RheUljb24nXG5pbXBvcnQgTmV4dERheXNJY29uIGZyb20gJy4uLy4uL2ljb25zL05leHREYXlzSWNvbidcbmltcG9ydCBNZW51T3B0aW9uIGZyb20gJy4vTWVudU9wdGlvbidcbmltcG9ydCBNZW51IGZyb20gJy4uL01lbnUnXG5pbXBvcnQgVGFza3MgZnJvbSAnLi4vLi4vLi4vZGF0YS90YXNrcydcblxuY29uc3QgTWVudU9wdGlvbnMgPSAoKCkgPT4ge1xuICBjb25zdCBpY29uQ2xhc3MgPSAnbWVudV9fb3B0aW9uX19pY29uJ1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxuICBjb25zdCBmaWx0ZXJGdW5jdGlvbnMgPSBbXG4gICAgKHVwZGF0ZWRUYXNrcykgPT5cbiAgICAgIHVwZGF0ZWRUYXNrcy5maWx0ZXIoXG4gICAgICAgICh0YXNrKSA9PiB0YXNrLnRhZ0lkIDwgMCAmJiB0YXNrLnByaW9yaXR5SWQgPCAwICYmIHRhc2suZHVlRGF0ZSA9PSBudWxsXG4gICAgICApLFxuICAgICh1cGRhdGVkVGFza3MpID0+XG4gICAgICB1cGRhdGVkVGFza3MuZmlsdGVyKCh0YXNrKSA9PiB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKVxuICAgICAgICBjdXJyZW50RGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKVxuICAgICAgICByZXR1cm4gdGFzay5kdWVEYXRlICYmIHRhc2suZHVlRGF0ZS5nZXREYXRlKCkgPD0gY3VycmVudERhdGUuZ2V0RGF0ZSgpXG4gICAgICB9KSxcbiAgICAodXBkYXRlZFRhc2tzKSA9PlxuICAgICAgdXBkYXRlZFRhc2tzLmZpbHRlcigodGFzaykgPT4ge1xuICAgICAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKClcbiAgICAgICAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpICsgNylcbiAgICAgICAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKVxuXG4gICAgICAgIHJldHVybiB0YXNrLmR1ZURhdGUgJiYgdGFzay5kdWVEYXRlLmdldERhdGUoKSA8PSBkYXRlLmdldERhdGUoKVxuICAgICAgfSksXG4gIF1cblxuICBsZXQgdGFza3MgPSBUYXNrcy5nZXRTb3J0ZWRUYXNrcygpXG4gIGNvbnN0IG1lbnVPcHRpb25zID0gW1xuICAgIE1lbnVPcHRpb24oSW5ib3hJY29uKGljb25DbGFzcyksICdJbmJveCcsIGZpbHRlckZ1bmN0aW9uc1swXSh0YXNrcykpLFxuICAgIE1lbnVPcHRpb24oVG9kYXlJY29uKGljb25DbGFzcyksICdUb2RheScsIGZpbHRlckZ1bmN0aW9uc1sxXSh0YXNrcykpLFxuICAgIE1lbnVPcHRpb24oXG4gICAgICBOZXh0RGF5c0ljb24oaWNvbkNsYXNzKSxcbiAgICAgICdOZXh0IDcgZGF5cycsXG4gICAgICBmaWx0ZXJGdW5jdGlvbnNbMl0odGFza3MpXG4gICAgKSxcbiAgXVxuICBlbGVtZW50LmNsYXNzTmFtZSA9ICdtZW51X19vcHRpb25zJ1xuXG4gIG1lbnVPcHRpb25zLmZvckVhY2goKG1lbnVPcHRpb24pID0+IHtcbiAgICBtZW51T3B0aW9uLmFkZENsaWNrRXZlbnQoKCkgPT4ge1xuICAgICAgTWVudS5jbGVhbkFjdGl2ZXMoKVxuICAgICAgbWVudU9wdGlvbi5hZGRBY3RpdmVDbGFzcygpXG4gICAgfSlcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKG1lbnVPcHRpb24uZWxlbWVudClcbiAgfSlcblxuICBjb25zdCB1cGRhdGVUYXNrcyA9ICh1cGRhdGVkVGFza3MpID0+IHtcbiAgICB0YXNrcyA9IHVwZGF0ZWRUYXNrc1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtZW51T3B0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgbWVudU9wdGlvbnNbaV0udXBkYXRlVGFza3MoZmlsdGVyRnVuY3Rpb25zW2ldKHRhc2tzKSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4geyBlbGVtZW50LCBtZW51T3B0aW9ucywgdXBkYXRlVGFza3MgfVxufSkoKVxuXG5leHBvcnQgZGVmYXVsdCBNZW51T3B0aW9uc1xuIiwiaW1wb3J0IFRhc2tzIGZyb20gJy4uLy4uLy4uL2RhdGEvdGFza3MnXG5pbXBvcnQgTWVudSBmcm9tICcuLi9NZW51J1xuaW1wb3J0IE1lbnVUaXRsZSBmcm9tICcuLi9NZW51VGl0bGUnXG5pbXBvcnQgTWVudVByaW9yaXR5IGZyb20gJy4vTWVudVByaW9yaXR5J1xuXG5jb25zdCBNZW51UHJpb3JpdGllcyA9ICgoKSA9PiB7XG4gIGNvbnN0IHByaW9yaXRpZXMgPSBbXG4gICAgeyBpZDogMCwgY29sb3I6ICcjOTREODJEJywgdGl0bGU6ICdMb3cnIH0sXG4gICAgeyBpZDogMSwgY29sb3I6ICcjRkNDNDE5JywgdGl0bGU6ICdNZWRpdW0nIH0sXG4gICAgeyBpZDogMiwgY29sb3I6ICcjRkY2QjZCJywgdGl0bGU6ICdIaWdoJyB9LFxuICBdXG4gIGNvbnN0IHByaW9yaXR5RWxlbWVudHMgPSBbXVxuXG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBlbGVtZW50LmNsYXNzTmFtZSA9ICdtZW51X19wcmlvcml0aWVzLWNvbnRhaW5lcidcblxuICBjb25zdCBmaWx0ZXIgPSAodGFza3MsIHByaW9yaXR5KSA9PlxuICAgIHRhc2tzLmZpbHRlcigodGFzaykgPT4gdGFzay5wcmlvcml0eUlkID09IHByaW9yaXR5LmlkKVxuXG4gIGNvbnN0IGdlbmVyYXRlUHJpb3JpdGllcyA9ICgpID0+IHtcbiAgICBjb25zdCBwcmlvcml0aWVzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBwcmlvcml0aWVzQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdtZW51X19wcmlvcml0aWVzJ1xuXG4gICAgZm9yIChsZXQgcHJpb3JpdHkgb2YgcHJpb3JpdGllcykge1xuICAgICAgY29uc3QgcHJpb3JpdHlFbGVtZW50ID0gTWVudVByaW9yaXR5KFxuICAgICAgICBwcmlvcml0eSxcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIE1lbnUuY2xlYW5BY3RpdmVzKClcbiAgICAgICAgICBwcmlvcml0eUVsZW1lbnQuYWRkQWN0aXZlQ2xhc3MoKVxuICAgICAgICB9LFxuICAgICAgICBmaWx0ZXIoVGFza3MuZ2V0U29ydGVkVGFza3MoKSwgcHJpb3JpdHkpXG4gICAgICApXG5cbiAgICAgIHByaW9yaXR5RWxlbWVudHMucHVzaChwcmlvcml0eUVsZW1lbnQpXG4gICAgICBwcmlvcml0aWVzQ29udGFpbmVyLmFwcGVuZENoaWxkKHByaW9yaXR5RWxlbWVudC5lbGVtZW50KVxuICAgIH1cblxuICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gJydcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKE1lbnVUaXRsZSgnUHJpb3JpdGllcycpKVxuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQocHJpb3JpdGllc0NvbnRhaW5lcilcbiAgfVxuICBnZW5lcmF0ZVByaW9yaXRpZXMocHJpb3JpdGllcylcblxuICBjb25zdCBnZXRQcmlvcml0eUJ5SWQgPSAoaWQpID0+XG4gICAgcHJpb3JpdGllcy5maW5kKChwcmlvcml0eSkgPT4gcHJpb3JpdHkuaWQgPT0gaWQpXG5cbiAgY29uc3QgY2xlYXJBY3RpdmVzID0gKCkgPT4ge1xuICAgIHByaW9yaXR5RWxlbWVudHMuZm9yRWFjaCgocHJpb3JpdHlFbGVtZW50KSA9PlxuICAgICAgcHJpb3JpdHlFbGVtZW50LnJlbW92ZUFjdGl2ZUNsYXNzKClcbiAgICApXG4gIH1cblxuICBjb25zdCB1cGRhdGVUYXNrcyA9ICh1cGRhdGVkVGFza3MpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByaW9yaXRpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHByaW9yaXR5RWxlbWVudHNbaV0udXBkYXRlVGFza3MoZmlsdGVyKHVwZGF0ZWRUYXNrcywgcHJpb3JpdGllc1tpXSkpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBlbGVtZW50LFxuICAgIGNsZWFyQWN0aXZlcyxcbiAgICBnZXRQcmlvcml0eUJ5SWQsXG4gICAgcHJpb3JpdHlFbGVtZW50cyxcbiAgICB1cGRhdGVUYXNrcyxcbiAgfVxufSkoKVxuXG5leHBvcnQgZGVmYXVsdCBNZW51UHJpb3JpdGllc1xuIiwiaW1wb3J0IFRhc2tzVmlldyBmcm9tICcuLi8uLi90YXNrL1Rhc2tzVmlldydcbmltcG9ydCBDdXJyZW50TWVudU9wdGlvbiBmcm9tICcuLi9DdXJyZW50TWVudU9wdGlvbidcblxuY29uc3QgTWVudVByaW9yaXR5ID0gKHsgaWQsIGNvbG9yLCB0aXRsZSB9LCBjbGlja0V2ZW50LCB0YXNrcykgPT4ge1xuICBsZXQgc29ydGVkVGFza3MgPSB0YXNrc1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBpZClcbiAgZWxlbWVudC5jbGFzc05hbWUgPSAnbWVudV9fcHJpb3JpdHknXG5cbiAgY29uc3QgY29sb3JTeW1ib2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBjb2xvclN5bWJvbC5jbGFzc05hbWUgPSAnbWVudV9fY29sb3Itc3ltYm9sJ1xuICBjb2xvclN5bWJvbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvclxuXG4gIGNvbnN0IHRpdGxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0JylcbiAgdGl0bGVFbGVtZW50LmNsYXNzTmFtZSA9ICdtZW51X19wcmlvcml0eV9fdGl0bGUnXG4gIHRpdGxlRWxlbWVudC50ZXh0Q29udGVudCA9IHRpdGxlXG5cbiAgZWxlbWVudC5hcHBlbmRDaGlsZChjb2xvclN5bWJvbClcbiAgZWxlbWVudC5hcHBlbmRDaGlsZCh0aXRsZUVsZW1lbnQpXG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuXG4gICAgY2xpY2tFdmVudCgpXG4gICAgVGFza3NWaWV3LmdlbmVyYXRlVGFza3ModGl0bGUsIHNvcnRlZFRhc2tzKVxuICAgIEN1cnJlbnRNZW51T3B0aW9uLnNldEVsZW1lbnQoZWxlbWVudClcbiAgfSlcblxuICBjb25zdCBhZGRBY3RpdmVDbGFzcyA9ICgpID0+IHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ21lbnVfX3ByaW9yaXR5LS1hY3RpdmUnKVxuICB9XG5cbiAgY29uc3QgcmVtb3ZlQWN0aXZlQ2xhc3MgPSAoKSA9PiB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdtZW51X19wcmlvcml0eS0tYWN0aXZlJylcbiAgfVxuXG4gIGNvbnN0IHVwZGF0ZVRhc2tzID0gKHVwZGF0ZWRUYXNrcykgPT4gKHNvcnRlZFRhc2tzID0gdXBkYXRlZFRhc2tzKVxuXG4gIHJldHVybiB7IGVsZW1lbnQsIGFkZEFjdGl2ZUNsYXNzLCByZW1vdmVBY3RpdmVDbGFzcywgdXBkYXRlVGFza3MgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNZW51UHJpb3JpdHlcbiIsImltcG9ydCBUYXNrc1ZpZXcgZnJvbSAnLi4vLi4vdGFzay9UYXNrc1ZpZXcnXG5pbXBvcnQgQ3VycmVudE1lbnVPcHRpb24gZnJvbSAnLi4vQ3VycmVudE1lbnVPcHRpb24nXG5cbmNvbnN0IE1lbnVUYWcgPSAoeyBpZCwgY29sb3IsIHRpdGxlIH0sIGNsaWNrRXZlbnQsIHRhc2tzKSA9PiB7XG4gIGxldCBzb3J0ZWRUYXNrcyA9IHRhc2tzXG5cbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgaWQpXG4gIGVsZW1lbnQuY2xhc3NOYW1lID0gJ21lbnVfX3RhZydcblxuICBjb25zdCBjb2xvclN5bWJvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGNvbG9yU3ltYm9sLmNsYXNzTmFtZSA9ICdtZW51X19jb2xvci1zeW1ib2wnXG4gIGNvbG9yU3ltYm9sLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yXG5cbiAgY29uc3QgdGl0bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKVxuICB0aXRsZUVsZW1lbnQuY2xhc3NOYW1lID0gJ21lbnVfX3RhZ19fdGl0bGUnXG4gIHRpdGxlRWxlbWVudC50ZXh0Q29udGVudCA9IHRpdGxlXG5cbiAgZWxlbWVudC5hcHBlbmRDaGlsZChjb2xvclN5bWJvbClcbiAgZWxlbWVudC5hcHBlbmRDaGlsZCh0aXRsZUVsZW1lbnQpXG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuXG4gICAgY2xpY2tFdmVudCgpXG4gICAgVGFza3NWaWV3LmdlbmVyYXRlVGFza3ModGl0bGUsIHNvcnRlZFRhc2tzKVxuICAgIEN1cnJlbnRNZW51T3B0aW9uLnNldEVsZW1lbnQoZWxlbWVudClcbiAgfSlcblxuICBjb25zdCBhZGRBY3RpdmVDbGFzcyA9ICgpID0+IHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ21lbnVfX3RhZy0tYWN0aXZlJylcbiAgfVxuXG4gIGNvbnN0IHJlbW92ZUFjdGl2ZUNsYXNzID0gKCkgPT4ge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnbWVudV9fdGFnLS1hY3RpdmUnKVxuICB9XG5cbiAgY29uc3QgdXBkYXRlVGFza3MgPSAodXBkYXRlZFRhc2tzKSA9PiAoc29ydGVkVGFza3MgPSB1cGRhdGVkVGFza3MpXG5cbiAgcmV0dXJuIHsgZWxlbWVudCwgYWRkQWN0aXZlQ2xhc3MsIHJlbW92ZUFjdGl2ZUNsYXNzLCB1cGRhdGVUYXNrcyB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1lbnVUYWdcbiIsImltcG9ydCBFbXB0eU1lc3NhZ2UgZnJvbSAnLi4vLi4vRW1wdHlNZXNzYWdlJ1xuaW1wb3J0IE1lbnVUaXRsZSBmcm9tICcuLi9NZW51VGl0bGUnXG5pbXBvcnQgTWVudVRhZyBmcm9tICcuL01lbnVUYWcnXG5pbXBvcnQgTmV3VGFnQnRuIGZyb20gJy4vTmV3VGFnQnRuJ1xuaW1wb3J0IE1lbnUgZnJvbSAnLi4vTWVudSdcbmltcG9ydCBUYXNrcyBmcm9tICcuLi8uLi8uLi9kYXRhL3Rhc2tzJ1xuaW1wb3J0IFRhZ3MgZnJvbSAnLi4vLi4vLi4vZGF0YS90YWdzJ1xuaW1wb3J0IE5ld1Rhc2tGb3JtIGZyb20gJy4uLy4uL3Rhc2svTmV3VGFza0Zvcm0nXG5cbmNvbnN0IE1lbnVUYWdzID0gKCgpID0+IHtcbiAgbGV0IHRhZ0VsZW1lbnRzID0gW11cbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGVsZW1lbnQuY2xhc3NOYW1lID0gJ21lbnVfX3RhZ3MtY29udGFpbmVyJ1xuXG4gIGNvbnN0IGZpbHRlciA9ICh0YXNrcywgdGFnKSA9PiB0YXNrcy5maWx0ZXIoKHRhc2spID0+IHRhc2sudGFnSWQgPT0gdGFnLmlkKVxuXG4gIGNvbnN0IGdlbmVyYXRlVGFncyA9ICh0YWdzKSA9PiB7XG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSAnJ1xuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoTWVudVRpdGxlKCdUYWdzJykpXG4gICAgdGFnRWxlbWVudHMgPSBbXVxuXG4gICAgaWYgKHRhZ3MubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgdGFnc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICB0YWdzQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdtZW51X190YWdzJ1xuXG4gICAgICBmb3IgKGxldCB0YWcgb2YgdGFncykge1xuICAgICAgICBjb25zdCB0YWdFbGVtZW50ID0gTWVudVRhZyhcbiAgICAgICAgICB0YWcsXG4gICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgTWVudS5jbGVhbkFjdGl2ZXMoKVxuICAgICAgICAgICAgdGFnRWxlbWVudC5hZGRBY3RpdmVDbGFzcygpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBmaWx0ZXIoVGFza3MuZ2V0U29ydGVkVGFza3MoKSwgdGFnKVxuICAgICAgICApXG5cbiAgICAgICAgdGFnRWxlbWVudHMucHVzaCh0YWdFbGVtZW50KVxuICAgICAgICB0YWdzQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhZ0VsZW1lbnQuZWxlbWVudClcbiAgICAgIH1cblxuICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZCh0YWdzQ29udGFpbmVyKVxuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtZW50LmFwcGVuZENoaWxkKFxuICAgICAgICBFbXB0eU1lc3NhZ2UoXG4gICAgICAgICAgXCJJdCdzIHByZXR0eSBlbXB0eSBoZXJlIPCfmJUuIExldCdzIGFkZCBhIG5ldyB0YWcgd2l0aCB0aGUgYnV0dG9uIGJlbG93IVwiXG4gICAgICAgIClcbiAgICAgIClcbiAgICB9XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChcbiAgICAgIE5ld1RhZ0J0bigodGFnKSA9PiB7XG4gICAgICAgIFRhZ3MuYWRkVGFnKHRhZylcbiAgICAgICAgTmV3VGFza0Zvcm0udXBkYXRlVGFncyhUYWdzLmdldFRhZ3MoKSlcblxuICAgICAgICBnZW5lcmF0ZVRhZ3MoVGFncy5nZXRUYWdzKCkpXG4gICAgICB9KVxuICAgIClcbiAgfVxuICBnZW5lcmF0ZVRhZ3MoVGFncy5nZXRUYWdzKCkpXG5cbiAgY29uc3QgdXBkYXRlVGFza3MgPSAodXBkYXRlZFRhc2tzKSA9PiB7XG4gICAgY29uc3QgdGFncyA9IFRhZ3MuZ2V0VGFncygpXG5cbiAgICBpZiAodGFncy5sZW5ndGggPiAwKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGFnRWxlbWVudHNbaV0udXBkYXRlVGFza3MoZmlsdGVyKHVwZGF0ZWRUYXNrcywgdGFnc1tpXSkpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHsgZWxlbWVudCwgZ2VuZXJhdGVUYWdzLCB0YWdFbGVtZW50cywgdXBkYXRlVGFza3MgfVxufSkoKVxuXG5leHBvcnQgZGVmYXVsdCBNZW51VGFnc1xuIiwiaW1wb3J0IEFkZEljb24gZnJvbSAnLi4vLi4vaWNvbnMvQWRkSWNvbidcbmltcG9ydCBDb2xvclBpY2tlciBmcm9tICcuLi8uLi9Db2xvclBpY2tlcidcblxuY29uc3QgTmV3VGFnQnRuID0gKHN1Ym1pdEV2ZW50KSA9PiB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBlbGVtZW50LmNsYXNzTmFtZSA9ICdtZW51X19uZXctdGFnJ1xuXG4gIGNvbnN0IGdlbmVyYXRlQnV0dG9uID0gKCkgPT4ge1xuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgYnRuLmNsYXNzTGlzdCA9ICdtZW51X19uZXctdGFnX19idG4gbWVudV9fbmV3LXRhZ19fYnRuLS1uZXcnXG5cbiAgICBjb25zdCBoNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0JylcbiAgICBoNC5jbGFzc05hbWUgPSAnbWVudV9fbmV3LXRhZ19fYnRuX190aXRsZSdcbiAgICBoNC50ZXh0Q29udGVudCA9ICdDcmVhdGUgbmV3IHRhZydcblxuICAgIGJ0bi5hcHBlbmRDaGlsZChBZGRJY29uKCdtZW51X19uZXctdGFnX19idG5fX2ljb24nKSlcbiAgICBidG4uYXBwZW5kQ2hpbGQoaDQpXG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZ2VuZXJhdGVGb3JtKVxuXG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSAnJ1xuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoYnRuKVxuICB9XG5cbiAgY29uc3QgZ2VuZXJhdGVGb3JtID0gKCkgPT4ge1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJylcbiAgICBmb3JtLmNsYXNzTmFtZSA9ICdtZW51X19uZXctdGFnX19mb3JtJ1xuXG4gICAgY29uc3QgY29sb3JQaWNrZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGNvbG9yUGlja2VyLmNsYXNzTmFtZSA9ICdtZW51X19uZXctdGFnX19waWNrZXInXG5cbiAgICBjb25zdCBjdXJyZW50Q29sb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGN1cnJlbnRDb2xvci5jbGFzc05hbWUgPSAnbWVudV9fbmV3LXRhZ19fcGlja2VyX19jdXJyZW50J1xuICAgIGN1cnJlbnRDb2xvci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2ZmNmI2YidcbiAgICBjdXJyZW50Q29sb3Iuc2V0QXR0cmlidXRlKCdkYXRhLWNvbG9yJywgJyNmZjZiNmInKVxuXG4gICAgY29sb3JQaWNrZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICBDb2xvclBpY2tlci5nZW5lcmF0ZShjdXJyZW50Q29sb3IsIGUueCwgZS5jbGllbnRZKVxuICAgIH0pXG4gICAgY29sb3JQaWNrZXIuYXBwZW5kQ2hpbGQoY3VycmVudENvbG9yKVxuXG4gICAgY29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIG5hbWVJbnB1dC5jbGFzc05hbWUgPSAnbWVudV9fbmV3LXRhZ19fZm9ybV9faW5wdXQnXG4gICAgbmFtZUlucHV0LnR5cGUgPSAndGV4dCdcbiAgICBuYW1lSW5wdXQucGxhY2Vob2xkZXIgPSAnVGFnIG5hbWUnXG4gICAgbmFtZUlucHV0LnJlcXVpcmVkID0gdHJ1ZVxuICAgIG5hbWVJbnB1dC5tYXhMZW5ndGggPSAxNVxuXG4gICAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBzdWJtaXRCdG4uY2xhc3NOYW1lID0gJ21lbnVfX25ldy10YWdfX2J0biBtZW51X19uZXctdGFnX19idG4tLXN1Ym1pdCdcbiAgICBzdWJtaXRCdG4udHlwZSA9ICdzdWJtaXQnXG4gICAgc3VibWl0QnRuLnRleHRDb250ZW50ID0gJ0FkZCdcblxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoY29sb3JQaWNrZXIpXG4gICAgZm9ybS5hcHBlbmRDaGlsZChuYW1lSW5wdXQpXG4gICAgZm9ybS5hcHBlbmRDaGlsZChzdWJtaXRCdG4pXG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAgIGdlbmVyYXRlQnV0dG9uKClcbiAgICAgIHN1Ym1pdEV2ZW50KHtcbiAgICAgICAgY29sb3I6IGN1cnJlbnRDb2xvci5nZXRBdHRyaWJ1dGUoJ2RhdGEtY29sb3InKSxcbiAgICAgICAgdGl0bGU6IG5hbWVJbnB1dC52YWx1ZSxcbiAgICAgIH0pXG4gICAgfSlcblxuICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gJydcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGZvcm0pXG4gIH1cblxuICBnZW5lcmF0ZUJ1dHRvbigpXG4gIHJldHVybiBlbGVtZW50XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5ld1RhZ0J0blxuIiwiaW1wb3J0IFRhZ3MgZnJvbSAnLi4vLi4vZGF0YS90YWdzJ1xuaW1wb3J0IFRhc2tzIGZyb20gJy4uLy4uL2RhdGEvdGFza3MnXG5pbXBvcnQgTWVudSBmcm9tICcuLi9tZW51L01lbnUnXG5cbmNvbnN0IE5ld1Rhc2tGb3JtID0gKCgpID0+IHtcbiAgbGV0IHRhc2sgPSBudWxsXG5cbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGVsZW1lbnQuY2xhc3NOYW1lID0gJ3Rhc2stZm9ybSBoaWRkZW4nXG5cbiAgY29uc3Qgc2hvdyA9ICgpID0+IGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJylcbiAgY29uc3QgaGlkZSA9ICgpID0+IGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcblxuICBjb25zdCBwb3B1cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIHBvcHVwLmNsYXNzTmFtZSA9ICd0YXNrLWZvcm1fX3BvcHVwJ1xuXG4gIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuICBoMi5jbGFzc05hbWUgPSAndGFzay1mb3JtX190aXRsZSdcblxuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpXG4gIGZvcm0uY2xhc3NOYW1lID0gJ3Rhc2stZm9ybV9fZm9ybSdcblxuICBjb25zdCBmb3JtSW5wdXRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgZm9ybUlucHV0cy5jbGFzc05hbWUgPSAndGFzay1mb3JtX19mb3JtX19pbnB1dHMnXG5cbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gIHRpdGxlLmNsYXNzTGlzdCA9ICd0YXNrLWZvcm1fX2Zvcm1fX3RpdGxlJ1xuICB0aXRsZS5wbGFjZWhvbGRlciA9ICdUYXNrIFRpdGxlJ1xuICB0aXRsZS5yZXF1aXJlZCA9IHRydWVcbiAgdGl0bGUubWF4TGVuZ3RoID0gMjVcblxuICBjb25zdCBkZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKVxuICBkZXNjLmNsYXNzTGlzdCA9ICd0YXNrLWZvcm1fX2Zvcm1fX2Rlc2MnXG4gIGRlc2MucGxhY2Vob2xkZXIgPSAnRGVzY3JpcHRpb24gKE9wdGlvbmFsKSdcbiAgZGVzYy5tYXhMZW5ndGggPSAxNDBcblxuICBmb3JtSW5wdXRzLmFwcGVuZENoaWxkKHRpdGxlKVxuICBmb3JtSW5wdXRzLmFwcGVuZENoaWxkKGRlc2MpXG5cbiAgY29uc3QgYWRkaXRpb25hbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBhZGRpdGlvbmFscy5jbGFzc05hbWUgPSAndGFzay1mb3JtX19mb3JtX19vcHRpb25zJ1xuXG4gIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnN1YnN0cmluZygwLCAxMClcbiAgZGF0ZS5jbGFzc05hbWUgPSAndGFzay1mb3JtX19mb3JtX19kYXRlJ1xuICBkYXRlLnR5cGUgPSAnZGF0ZSdcbiAgZGF0ZS5taW4gPSBjdXJyZW50RGF0ZVxuXG4gIGNvbnN0IHRhZ3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKVxuICB0YWdzLmNsYXNzTmFtZSA9ICd0YXNrLWZvcm1fX2Zvcm1fX3NlbGVjdCdcblxuICBjb25zdCB1cGRhdGVUYWdzID0gKHRhZ3NMaXN0KSA9PiB7XG4gICAgdGFncy5pbm5lckhUTUwgPSAnJ1xuXG4gICAgZm9yIChsZXQgdGFnIG9mIFtcbiAgICAgIHsgaWQ6IC0yLCB0aXRsZTogJ1RhZyAoT3B0aW9uYWwpJyB9LFxuICAgICAgeyBpZDogLTEsIHRpdGxlOiAnTm9uZScgfSxcbiAgICAgIC4uLnRhZ3NMaXN0LFxuICAgIF0pIHtcbiAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpXG4gICAgICBvcHRpb24udmFsdWUgPSB0YWcuaWRcbiAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IHRhZy50aXRsZVxuXG4gICAgICBpZiAodGFnLmlkID09PSAtMikge1xuICAgICAgICBvcHRpb24uZGlzYWJsZWQgPSB0cnVlXG4gICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IHRydWVcbiAgICAgIH1cblxuICAgICAgdGFncy5hcHBlbmRDaGlsZChvcHRpb24pXG4gICAgfVxuICB9XG5cbiAgY29uc3QgcHJpb3JpdGllcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpXG4gIHByaW9yaXRpZXMuY2xhc3NOYW1lID0gJ3Rhc2stZm9ybV9fZm9ybV9fc2VsZWN0J1xuXG4gIGNvbnN0IHVwZGF0ZVByaW9yaXRpZXMgPSAocHJpb3JpdGllc0xpc3QpID0+IHtcbiAgICBwcmlvcml0aWVzLmlubmVySFRNTCA9ICcnXG5cbiAgICBmb3IgKGxldCBwcmlvcml0eSBvZiBbXG4gICAgICB7IGlkOiAtMiwgdGl0bGU6ICdQcmlvcml0eSAoT3B0aW9uYWwpJyB9LFxuICAgICAgeyBpZDogLTEsIHRpdGxlOiAnTm9uZScgfSxcbiAgICAgIC4uLnByaW9yaXRpZXNMaXN0LFxuICAgIF0pIHtcbiAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpXG4gICAgICBvcHRpb24udmFsdWUgPSBwcmlvcml0eS5pZFxuICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gcHJpb3JpdHkudGl0bGVcblxuICAgICAgaWYgKHByaW9yaXR5LmlkID09PSAtMikge1xuICAgICAgICBvcHRpb24uZGlzYWJsZWQgPSB0cnVlXG4gICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IHRydWVcbiAgICAgIH1cblxuICAgICAgcHJpb3JpdGllcy5hcHBlbmRDaGlsZChvcHRpb24pXG4gICAgfVxuICB9XG5cbiAgYWRkaXRpb25hbHMuYXBwZW5kQ2hpbGQoZGF0ZSlcbiAgYWRkaXRpb25hbHMuYXBwZW5kQ2hpbGQodGFncylcbiAgYWRkaXRpb25hbHMuYXBwZW5kQ2hpbGQocHJpb3JpdGllcylcblxuICBjb25zdCBidG5zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgYnRucy5jbGFzc05hbWUgPSAndGFzay1mb3JtX19mb3JtX19idG5zJ1xuXG4gIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gIHN1Ym1pdEJ0bi5jbGFzc05hbWUgPSAndGFzay1mb3JtX19mb3JtX19idG4gdGFzay1mb3JtX19mb3JtX19idG4tLXN1Ym1pdCdcbiAgc3VibWl0QnRuLnR5cGUgPSAnc3VibWl0J1xuXG4gIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gIGNhbmNlbEJ0bi5jbGFzc05hbWUgPSAndGFzay1mb3JtX19mb3JtX19idG4gdGFzay1mb3JtX19mb3JtX19idG4tLWNhbmNlbCdcbiAgY2FuY2VsQnRuLnRleHRDb250ZW50ID0gJ0NhbmNlbCdcbiAgY2FuY2VsQnRuLnR5cGUgPSAnYnV0dG9uJ1xuICBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoaWRlKVxuXG4gIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gIGRlbGV0ZUJ0bi5jbGFzc05hbWUgPSAndGFzay1mb3JtX19mb3JtX19idG4gdGFzay1mb3JtX19mb3JtX19idG4tLWRlbGV0ZSdcbiAgZGVsZXRlQnRuLnRleHRDb250ZW50ID0gJ0RlbGV0ZSdcbiAgZGVsZXRlQnRuLnR5cGUgPSAnYnV0dG9uJ1xuICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaWYgKHRhc2sgJiYgdGFzay5pZCA+IC0xKSB7XG4gICAgICBUYXNrcy5yZW1vdmVUYXNrKHRhc2suaWQpXG4gICAgICBNZW51LnVwZGF0ZVRhc2tzKClcbiAgICB9XG4gICAgaGlkZSgpXG4gIH0pXG5cbiAgYnRucy5hcHBlbmRDaGlsZChzdWJtaXRCdG4pXG4gIGJ0bnMuYXBwZW5kQ2hpbGQoY2FuY2VsQnRuKVxuICBidG5zLmFwcGVuZENoaWxkKGRlbGV0ZUJ0bilcblxuICBmb3JtLmFwcGVuZENoaWxkKGZvcm1JbnB1dHMpXG4gIGZvcm0uYXBwZW5kQ2hpbGQoYWRkaXRpb25hbHMpXG4gIGZvcm0uYXBwZW5kQ2hpbGQoYnRucylcblxuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICBjb25zdCB0YXNrT2JqID0ge1xuICAgICAgaWQ6IHRhc2sgJiYgdGFzay5pZCA+IC0xID8gdGFzay5pZCArIDEgOiBUYXNrcy5nZXRMYXN0SWQoKSArIDEsXG4gICAgICB0aXRsZTogdGl0bGUudmFsdWUsXG4gICAgICBkZXNjcmlwdGlvbjogZGVzYy52YWx1ZSA/IGRlc2MudmFsdWUgOiBudWxsLFxuICAgICAgZHVlRGF0ZTogZGF0ZS52YWx1ZSA/IG5ldyBEYXRlKGRhdGUudmFsdWUpIDogbnVsbCxcbiAgICAgIHByaW9yaXR5SWQ6IHByaW9yaXRpZXMudmFsdWUgPiAtMSA/IHByaW9yaXRpZXMudmFsdWUgOiAtMSxcbiAgICAgIHRhZ0lkOiB0YWdzLnZhbHVlID4gLTEgPyB0YWdzLnZhbHVlIDogLTEsXG4gICAgICBkb25lOiB0YXNrID8gdGFzay5kb25lIDogZmFsc2UsXG4gICAgfVxuXG4gICAgaWYgKHRhc2sgJiYgdGFzay5pZCA+IC0xKSB7XG4gICAgICBjb25zdCBpbmRleCA9IFRhc2tzLmdldFRhc2tzKCkuZmluZEluZGV4KCh0KSA9PiB0LmlkID09IHRhc2suaWQpXG4gICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICBUYXNrcy51cGRhdGVUYXNrKGluZGV4LCB0YXNrT2JqKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBUYXNrcy5hZGRUYXNrKHRhc2tPYmopXG4gICAgfVxuICAgIE1lbnUudXBkYXRlVGFza3MoKVxuICAgIGhpZGUoKVxuICB9KVxuXG4gIHBvcHVwLmFwcGVuZENoaWxkKGgyKVxuICBwb3B1cC5hcHBlbmRDaGlsZChmb3JtKVxuICBlbGVtZW50LmFwcGVuZENoaWxkKHBvcHVwKVxuXG4gIGNvbnN0IHVwZGF0ZUZvcm0gPSAodGFza09iaikgPT4ge1xuICAgIHRhc2sgPSB0YXNrT2JqXG5cbiAgICBpZiAodGFzaykge1xuICAgICAgaDIudGV4dENvbnRlbnQgPSAnRWRpdCB0YXNrOidcbiAgICAgIHN1Ym1pdEJ0bi50ZXh0Q29udGVudCA9ICdFZGl0J1xuICAgICAgZGVsZXRlQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpXG5cbiAgICAgIHRpdGxlLnZhbHVlID0gdGFzay50aXRsZVxuICAgICAgZGVzYy52YWx1ZSA9IHRhc2suZGVzY3JpcHRpb25cbiAgICAgIGlmICh0YXNrLmR1ZURhdGUpIGRhdGUudmFsdWUgPSB0YXNrLmR1ZURhdGUudG9JU09TdHJpbmcoKS5zdWJzdHJpbmcoMCwgMTApXG4gICAgfSBlbHNlIHtcbiAgICAgIGgyLnRleHRDb250ZW50ID0gJ0FkZCBuZXcgdGFzazonXG4gICAgICBzdWJtaXRCdG4udGV4dENvbnRlbnQgPSAnQWRkJ1xuICAgICAgZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG5cbiAgICAgIHRpdGxlLnZhbHVlID0gJydcbiAgICAgIGRlc2MudmFsdWUgPSAnJ1xuICAgICAgZGF0ZS52YWx1ZSA9ICcnXG4gICAgfVxuICAgIHNob3coKVxuICB9XG5cbiAgdXBkYXRlVGFncyhUYWdzLmdldFRhZ3MoKSlcbiAgdXBkYXRlUHJpb3JpdGllcyhbXG4gICAgeyBpZDogMCwgY29sb3I6ICcjOTREODJEJywgdGl0bGU6ICdMb3cnIH0sXG4gICAgeyBpZDogMSwgY29sb3I6ICcjRkNDNDE5JywgdGl0bGU6ICdNZWRpdW0nIH0sXG4gICAgeyBpZDogMiwgY29sb3I6ICcjRkY2QjZCJywgdGl0bGU6ICdIaWdoJyB9LFxuICBdKVxuXG4gIHJldHVybiB7IGVsZW1lbnQsIHVwZGF0ZUZvcm0sIGhpZGUsIHVwZGF0ZVRhZ3MgfVxufSkoKVxuXG5leHBvcnQgZGVmYXVsdCBOZXdUYXNrRm9ybVxuIiwiaW1wb3J0IFRhc2tTdGF0dXNJY29uIGZyb20gJy4uL2ljb25zL1Rhc2tTdGF0dXNJY29uJ1xuaW1wb3J0IE1lbnVQcmlvcml0aWVzIGZyb20gJy4uL21lbnUvcHJpb3JpdHkvTWVudVByaW9yaXRpZXMnXG5pbXBvcnQgZm9ybWF0RGlzdGFuY2UgZnJvbSAnZGF0ZS1mbnMvZm9ybWF0RGlzdGFuY2UnXG5pbXBvcnQgVGFncyBmcm9tICcuLi8uLi9kYXRhL3RhZ3MnXG5pbXBvcnQgTmV3VGFza0Zvcm0gZnJvbSAnLi9OZXdUYXNrRm9ybSdcbmltcG9ydCBUYXNrcyBmcm9tICcuLi8uLi9kYXRhL3Rhc2tzJ1xuXG5jb25zdCBUYXNrID0gKHsgaWQsIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHlJZCwgdGFnSWQsIGRvbmUgfSkgPT4ge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgZWxlbWVudC5jbGFzc05hbWUgPSBkb25lID8gJ3Rhc2sgdGFzay0tZG9uZScgOiAndGFzaydcblxuICBjb25zdCBpY29uID0gVGFza1N0YXR1c0ljb24oXG4gICAgZG9uZVxuICAgICAgPyAnZG9uZSdcbiAgICAgIDogcHJpb3JpdHlJZCA+IC0xXG4gICAgICA/IE1lbnVQcmlvcml0aWVzLmdldFByaW9yaXR5QnlJZChwcmlvcml0eUlkKS50aXRsZS50b0xvd2VyQ2FzZSgpXG4gICAgICA6ICdub25lJyxcbiAgICAndGFza19faWNvbidcbiAgKVxuICBjb25zdCBpbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgaW5mby5jbGFzc05hbWUgPSAndGFza19faW5mbydcblxuICBjb25zdCB0aXRsZURlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICB0aXRsZURlc2MuY2xhc3NOYW1lID0gJ3Rhc2tfX2luZm9fX2Jhc2ljJ1xuXG4gIGNvbnN0IHRpdGxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbiAgdGl0bGVFbGVtZW50LmNsYXNzTmFtZSA9ICd0YXNrX19pbmZvX190aXRsZSdcbiAgdGl0bGVFbGVtZW50LnRleHRDb250ZW50ID0gdGl0bGVcblxuICBjb25zdCBkZXNjRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICBkZXNjRWxlbWVudC5jbGFzc05hbWUgPSAndGFza19faW5mb19fZGVzYydcbiAgZGVzY0VsZW1lbnQudGV4dENvbnRlbnQgPSBkZXNjcmlwdGlvblxuXG4gIHRpdGxlRGVzYy5hcHBlbmRDaGlsZCh0aXRsZUVsZW1lbnQpXG4gIHRpdGxlRGVzYy5hcHBlbmRDaGlsZChkZXNjRWxlbWVudClcblxuICBjb25zdCBhZGRpdGlvbmFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgYWRkaXRpb25hbC5jbGFzc05hbWUgPSAndGFza19faW5mb19fYWRkaXRpb25hbCdcblxuICBpZiAodGFnSWQgPiAtMSkge1xuICAgIGNvbnN0IHRhZyA9IFRhZ3MuZ2V0VGFnQnlJZCh0YWdJZClcbiAgICBjb25zdCB0YWdDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRhZ0NvbnRhaW5lci5jbGFzc05hbWUgPSAndGFza19faW5mb19fdGFnJ1xuXG4gICAgY29uc3QgdGFnVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpXG4gICAgdGFnVGl0bGUuY2xhc3NOYW1lID0gJ3Rhc2tfX2luZm9fX3RhZ19fdGl0bGUnXG4gICAgdGFnVGl0bGUudGV4dENvbnRlbnQgPSB0YWcudGl0bGVcblxuICAgIGNvbnN0IHRhZ0NvbG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0YWdDb2xvci5jbGFzc05hbWUgPSAndGFza19faW5mb19fdGFnX19jb2xvcidcbiAgICB0YWdDb2xvci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSB0YWcuY29sb3JcblxuICAgIHRhZ0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YWdUaXRsZSlcbiAgICB0YWdDb250YWluZXIuYXBwZW5kQ2hpbGQodGFnQ29sb3IpXG4gICAgYWRkaXRpb25hbC5hcHBlbmRDaGlsZCh0YWdDb250YWluZXIpXG4gIH1cblxuICBpZiAoZHVlRGF0ZSkge1xuICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKClcbiAgICBjdXJyZW50RGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKVxuXG4gICAgZGF0ZS5jbGFzc05hbWUgPSAndGFza19faW5mb19fZGF0ZSdcbiAgICBkYXRlLnRleHRDb250ZW50ID1cbiAgICAgIGR1ZURhdGUuZ2V0RGF0ZSgpID09IGN1cnJlbnREYXRlLmdldERhdGUoKVxuICAgICAgICA/ICdUb2RheSdcbiAgICAgICAgOiBmb3JtYXREaXN0YW5jZShkdWVEYXRlLCBjdXJyZW50RGF0ZSwgeyBhZGRTdWZmaXg6IHRydWUgfSlcbiAgICBkYXRlLnN0eWxlLmNvbG9yID0gZG9uZVxuICAgICAgPyAnJ1xuICAgICAgOiBkdWVEYXRlID49IGN1cnJlbnREYXRlXG4gICAgICA/ICcjNjZhODBmJ1xuICAgICAgOiAnI2UwMzEzMSdcblxuICAgIGFkZGl0aW9uYWwuYXBwZW5kQ2hpbGQoZGF0ZSlcbiAgfVxuICBpbmZvLmFwcGVuZENoaWxkKHRpdGxlRGVzYylcbiAgaW5mby5hcHBlbmRDaGlsZChhZGRpdGlvbmFsKVxuXG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQoaWNvbilcbiAgZWxlbWVudC5hcHBlbmRDaGlsZChpbmZvKVxuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgIGNvbnN0IHRhc2sgPSBUYXNrcy5nZXRUYXNrQnlJZChpZClcbiAgICBpZiAodGFzaykgTmV3VGFza0Zvcm0udXBkYXRlRm9ybSh0YXNrKVxuICB9KVxuXG4gIHJldHVybiBlbGVtZW50XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRhc2tcbiIsImltcG9ydCBEaXZpZGVyIGZyb20gJy4uL0RpdmlkZXInXG5pbXBvcnQgRW1wdHlNZXNzYWdlIGZyb20gJy4uL0VtcHR5TWVzc2FnZSdcbmltcG9ydCBBZGRJY29uIGZyb20gJy4uL2ljb25zL0FkZEljb24nXG5pbXBvcnQgTmV3VGFza0Zvcm0gZnJvbSAnLi9OZXdUYXNrRm9ybSdcbmltcG9ydCBUYXNrIGZyb20gJy4vVGFzaydcblxuY29uc3QgVGFza3NWaWV3ID0gKCgpID0+IHtcbiAgbGV0IHRhc2tFbGVtZW50cyA9IFtdXG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJylcbiAgZWxlbWVudC5jbGFzc05hbWUgPSAndGFza3MtdmlldydcblxuICBjb25zdCBnZW5lcmF0ZVRhc2tzID0gKHRpdGxlLCB0YXNrcykgPT4ge1xuICAgIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKVxuICAgIGgxLmNsYXNzTmFtZSA9ICd0YXNrcy12aWV3X190aXRsZSdcbiAgICBoMS50ZXh0Q29udGVudCA9IHRpdGxlXG5cbiAgICBlbGVtZW50LmlubmVySFRNTCA9ICcnXG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChoMSlcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKERpdmlkZXIoKSlcblxuICAgIGlmICh0YXNrcy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCB0YXNrc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICB0YXNrc0NvbnRhaW5lci5jbGFzc05hbWUgPSAndGFza3Mtdmlld19fdGFza3MnXG5cbiAgICAgIGZvciAobGV0IHRhc2sgb2YgdGFza3MpIHtcbiAgICAgICAgY29uc3QgdGFza0l0ZW0gPSBUYXNrKHRhc2spXG4gICAgICAgIHRhc2tzQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tJdGVtKVxuICAgICAgICB0YXNrRWxlbWVudHMucHVzaCh0YXNrSXRlbSlcbiAgICAgIH1cbiAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQodGFza3NDb250YWluZXIpXG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoXG4gICAgICAgIEVtcHR5TWVzc2FnZShcbiAgICAgICAgICBcIkl0J3MgcHJldHR5IGVtcHR5IGhlcmUg8J+YlS4gQWRkIGEgbmV3IHRhc2sgd2l0aCB0aGUgYnV0dG9uIGJlbG93IVwiXG4gICAgICAgIClcbiAgICAgIClcbiAgICB9XG5cbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGJ0bi5jbGFzc05hbWUgPSAndGFza3Mtdmlld19fYnRuJ1xuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IE5ld1Rhc2tGb3JtLnVwZGF0ZUZvcm0obnVsbCkpXG5cbiAgICBjb25zdCBidG5UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJylcbiAgICBidG5UaXRsZS5jbGFzc05hbWUgPSAndGFza3Mtdmlld19fYnRuX190aXRsZSdcbiAgICBidG5UaXRsZS50ZXh0Q29udGVudCA9ICdBZGQgbmV3IHRhc2snXG5cbiAgICBidG4uYXBwZW5kQ2hpbGQoQWRkSWNvbigndGFza3Mtdmlld19fYnRuX19pY29uJykpXG4gICAgYnRuLmFwcGVuZENoaWxkKGJ0blRpdGxlKVxuXG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChEaXZpZGVyKCkpXG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChidG4pXG4gIH1cblxuICByZXR1cm4geyBlbGVtZW50LCBnZW5lcmF0ZVRhc2tzIH1cbn0pKClcblxuZXhwb3J0IGRlZmF1bHQgVGFza3NWaWV3XG4iLCJleHBvcnQgY29uc3QgY2xlYW5Db250ZW50ID0gKG5vZGUpID0+IHtcbiAgbm9kZS5pbm5lckhUTUwgPSAnJ1xufVxuXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVDb250ZW50ID0gKG5vZGUsIGNvbnRlbnQpID0+IHtcbiAgbm9kZS5hcHBlbmRDaGlsZChjb250ZW50KVxufVxuIiwiLy8gaWQsIHRpdGxlLCBjb2xvclxuY29uc3QgVGFncyA9ICgoKSA9PiB7XG4gIGNvbnN0IHRhZ3MgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFncycpID8gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UudGFncykgOiBbXVxuICBsZXQgbGFzdElkID1cbiAgICB0YWdzLmxlbmd0aCA+IDAgJiYgdGFnc1t0YWdzLmxlbmd0aCAtIDFdLmlkID8gdGFnc1t0YWdzLmxlbmd0aCAtIDFdIDogLTFcblxuICBjb25zdCBzYXZlVG9TdG9yYWdlID0gKCkgPT4gKGxvY2FsU3RvcmFnZS50YWdzID0gSlNPTi5zdHJpbmdpZnkodGFncykpXG5cbiAgY29uc3QgZ2V0VGFnQnlJZCA9IChpZCkgPT4gdGFncy5maW5kKCh0YWcpID0+IHRhZy5pZCA9PSBpZClcbiAgY29uc3QgZ2V0VGFncyA9ICgpID0+IHRhZ3NcbiAgY29uc3QgZ2V0TGFzdElkID0gKCkgPT4gbGFzdElkXG5cbiAgY29uc3QgYWRkVGFnID0gKHRhZykgPT4ge1xuICAgIHRhZy5pZCA9ICsrbGFzdElkXG4gICAgdGFncy5wdXNoKHRhZylcbiAgICBzYXZlVG9TdG9yYWdlKClcbiAgfVxuXG4gIGNvbnN0IHJlbW92ZVRhZyA9IChpZCkgPT4ge1xuICAgIGNvbnN0IGluZGV4ID0gdGFncy5maW5kSW5kZXgoKHRhZykgPT4gdGFnLmlkID09IGlkKVxuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICB0YWdzLnNwbGljZShpbmRleCwgMSlcbiAgICAgIHNhdmVUb1N0b3JhZ2UoKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHVwZGF0ZVRhZyA9IChpZCwgdGFnKSA9PiB7XG4gICAgdGFnc1tpZF0gPSB0YWdcbiAgICBzYXZlVG9TdG9yYWdlKClcbiAgfVxuXG4gIHJldHVybiB7IGdldFRhZ0J5SWQsIGdldFRhZ3MsIGdldExhc3RJZCwgYWRkVGFnLCByZW1vdmVUYWcsIHVwZGF0ZVRhZyB9XG59KSgpXG5cbmV4cG9ydCBkZWZhdWx0IFRhZ3NcbiIsImNvbnN0IFRhc2tzID0gKCgpID0+IHtcbiAgY29uc3QgbG9hZEZyb21TdG9yYWdlID0gKCkgPT4ge1xuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza3MnKSkge1xuICAgICAgY29uc3QgbG9hZGVkVGFza3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS50YXNrcylcbiAgICAgIGZvciAobGV0IHRhc2sgb2YgbG9hZGVkVGFza3MpIHtcbiAgICAgICAgaWYgKHRhc2suZHVlRGF0ZSkgdGFzay5kdWVEYXRlID0gbmV3IERhdGUocGFyc2VJbnQodGFzay5kdWVEYXRlKSlcbiAgICAgICAgZWxzZSB0YXNrLmR1ZURhdGUgPSBudWxsXG4gICAgICB9XG4gICAgICByZXR1cm4gbG9hZGVkVGFza3NcbiAgICB9XG4gICAgcmV0dXJuIFtdXG4gIH1cblxuICBjb25zdCB0YXNrcyA9IGxvYWRGcm9tU3RvcmFnZSgpXG4gIGxldCBsYXN0SWQgPSB0YXNrcy5sZW5ndGggPiAwID8gdGFza3NbdGFza3MubGVuZ3RoIC0gMV0uaWQgOiAtMVxuXG4gIGNvbnN0IHNhdmVUb1N0b3JhZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgdGFza3NDb3B5ID0gW11cbiAgICBmb3IgKGxldCB0YXNrIG9mIHRhc2tzKSB7XG4gICAgICBsZXQgdGFza0NvcHkgPSB7IC4uLnRhc2sgfVxuICAgICAgaWYgKHRhc2tDb3B5LmR1ZURhdGUpIHtcbiAgICAgICAgdGFza0NvcHkuZHVlRGF0ZSA9ICt0YXNrQ29weS5kdWVEYXRlXG4gICAgICB9XG4gICAgICB0YXNrc0NvcHkucHVzaCh0YXNrQ29weSlcbiAgICB9XG4gICAgbG9jYWxTdG9yYWdlLnRhc2tzID0gSlNPTi5zdHJpbmdpZnkodGFza3NDb3B5KVxuICB9XG5cbiAgY29uc3QgZ2V0U29ydGVkVGFza3MgPSAoKSA9PiB7XG4gICAgcmV0dXJuIFsuLi50YXNrc10uc29ydCgodGFzazEsIHRhc2syKSA9PiB7XG4gICAgICBpZiAodGFzazEuZHVlRGF0ZSA8IHRhc2syLmR1ZURhdGUpIHJldHVybiAtMVxuICAgICAgaWYgKHRhc2sxLmR1ZURhdGUgPiB0YXNrMi5kdWVEYXRlKSByZXR1cm4gMVxuXG4gICAgICBpZiAodGFzazEucHJpb3JpdHlJZCA+IHRhc2syLnByaW9yaXR5SWQpIHJldHVybiAtMVxuICAgICAgaWYgKHRhc2sxLnByaW9yaXR5SWQgPCB0YXNrMi5wcmlvcml0eUlkKSByZXR1cm4gMVxuICAgIH0pXG4gIH1cblxuICBjb25zdCBnZXRUYXNrQnlJZCA9IChpZCkgPT4gdGFza3MuZmluZCgodGFzaykgPT4gdGFzay5pZCA9PSBpZClcbiAgY29uc3QgZ2V0VGFza3MgPSAoKSA9PiB0YXNrc1xuICBjb25zdCBnZXRMYXN0SWQgPSAoKSA9PiBsYXN0SWRcblxuICBjb25zdCBhZGRUYXNrID0gKHRhc2spID0+IHtcbiAgICB0YXNrcy5wdXNoKHRhc2spXG4gICAgc2F2ZVRvU3RvcmFnZSgpXG5cbiAgICBsYXN0SWQrK1xuICB9XG5cbiAgY29uc3QgdXBkYXRlVGFzayA9IChpZCwgdGFzaykgPT4ge1xuICAgIHRhc2tzW2lkXSA9IHRhc2tcbiAgICBzYXZlVG9TdG9yYWdlKClcbiAgfVxuXG4gIGNvbnN0IHJlbW92ZVRhc2sgPSAoaWQpID0+IHtcbiAgICBjb25zdCBpbmRleCA9IHRhc2tzLmZpbmRJbmRleCgodGFzaykgPT4gdGFzay5pZCA9PSBpZClcbiAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgdGFza3Muc3BsaWNlKGluZGV4LCAxKVxuICAgICAgc2F2ZVRvU3RvcmFnZSgpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBnZXRUYXNrQnlJZCxcbiAgICBnZXRUYXNrcyxcbiAgICBnZXRMYXN0SWQsXG4gICAgZ2V0U29ydGVkVGFza3MsXG4gICAgYWRkVGFzayxcbiAgICB1cGRhdGVUYXNrLFxuICAgIHJlbW92ZVRhc2ssXG4gIH1cbn0pKClcblxuZXhwb3J0IGRlZmF1bHQgVGFza3NcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4uL3Njc3MvaW5kZXguc2NzcydcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi9jb21wb25lbnRzL05hdmJhcidcbmltcG9ydCBNYWluIGZyb20gJy4vY29tcG9uZW50cy9NYWluJ1xuaW1wb3J0IENvbG9yUGlja2VyIGZyb20gJy4vY29tcG9uZW50cy9Db2xvclBpY2tlcidcbmltcG9ydCBOZXdUYXNrRm9ybSBmcm9tICcuL2NvbXBvbmVudHMvdGFzay9OZXdUYXNrRm9ybSdcbmltcG9ydCB7IGdlbmVyYXRlQ29udGVudCB9IGZyb20gJy4vY29udGVudEdlbmVyYXRvcidcblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpXG5nZW5lcmF0ZUNvbnRlbnQoY29udGFpbmVyLCBOYXZiYXIpXG5nZW5lcmF0ZUNvbnRlbnQoY29udGFpbmVyLCBNYWluKVxuZ2VuZXJhdGVDb250ZW50KGNvbnRhaW5lciwgQ29sb3JQaWNrZXIuZWxlbWVudClcbmdlbmVyYXRlQ29udGVudChjb250YWluZXIsIE5ld1Rhc2tGb3JtLmVsZW1lbnQpXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=