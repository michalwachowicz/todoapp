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
/* harmony import */ var _icons_MoreIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../icons/MoreIcon */ "./src/js/components/icons/MoreIcon.js");
/* harmony import */ var _task_TasksView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../task/TasksView */ "./src/js/components/task/TasksView.js");
/* harmony import */ var _tag_TagContextMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../tag/TagContextMenu */ "./src/js/components/tag/TagContextMenu.js");
/* harmony import */ var _CurrentMenuOption__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../CurrentMenuOption */ "./src/js/components/menu/CurrentMenuOption.js");





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

  const moreIcon = (0,_icons_MoreIcon__WEBPACK_IMPORTED_MODULE_0__["default"])('menu__tag__icon menu__tag__icon--more')

  element.appendChild(colorSymbol)
  element.appendChild(titleElement)
  element.appendChild(moreIcon)

  element.addEventListener('click', (e) => {
    e.preventDefault()

    if (e.target == moreIcon || moreIcon.contains(e.target)) {
      _tag_TagContextMenu__WEBPACK_IMPORTED_MODULE_2__["default"].generateMenu(id, e.x, e.y)
      return
    }
    clickEvent()
    _task_TasksView__WEBPACK_IMPORTED_MODULE_1__["default"].generateTasks(title, id, sortedTasks)
    _CurrentMenuOption__WEBPACK_IMPORTED_MODULE_3__["default"].setElement(element)
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
    // Open edit popup
    hide()
  })

  const deleteBtn = document.createElement('button')
  deleteBtn.className = 'tag-menu__btn tag-menu__btn--delete'
  deleteBtn.textContent = 'Delete'
  deleteBtn.addEventListener('click', () => {
    // Open delete popup
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
/* harmony import */ var _Divider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Divider */ "./src/js/components/Divider.js");
/* harmony import */ var _EmptyMessage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../EmptyMessage */ "./src/js/components/EmptyMessage.js");
/* harmony import */ var _icons_AddIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icons/AddIcon */ "./src/js/components/icons/AddIcon.js");
/* harmony import */ var _icons_MoreIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icons/MoreIcon */ "./src/js/components/icons/MoreIcon.js");
/* harmony import */ var _tag_TagContextMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tag/TagContextMenu */ "./src/js/components/tag/TagContextMenu.js");
/* harmony import */ var _NewTaskForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./NewTaskForm */ "./src/js/components/task/NewTaskForm.js");
/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Task */ "./src/js/components/task/Task.js");








const TasksView = (() => {
  let taskElements = []
  const element = document.createElement('main')
  element.className = 'tasks-view'

  const generateTasks = (title, tagId, tasks) => {
    const h1 = document.createElement('h1')
    h1.className = 'tasks-view__title'
    h1.textContent = title

    element.innerHTML = ''
    if (tagId > -1) {
      const header = document.createElement('header')
      header.className = 'tasks-view__header'

      const moreIcon = (0,_icons_MoreIcon__WEBPACK_IMPORTED_MODULE_3__["default"])('tasks-view__icon--more')
      moreIcon.addEventListener('click', (e) =>
        _tag_TagContextMenu__WEBPACK_IMPORTED_MODULE_4__["default"].generateMenu(tagId, e.clientX, e.clientY)
      )

      header.appendChild(h1)
      header.appendChild(moreIcon)

      element.appendChild(header)
    } else {
      element.appendChild(h1)
    }
    element.appendChild((0,_Divider__WEBPACK_IMPORTED_MODULE_0__["default"])())

    if (tasks.length > 0) {
      const tasksContainer = document.createElement('div')
      tasksContainer.className = 'tasks-view__tasks'

      for (let task of tasks) {
        const taskItem = (0,_Task__WEBPACK_IMPORTED_MODULE_6__["default"])(task)
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
    btn.addEventListener('click', () => _NewTaskForm__WEBPACK_IMPORTED_MODULE_5__["default"].updateForm(null))

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
/* harmony import */ var _contentGenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contentGenerator */ "./src/js/contentGenerator.js");








const container = document.querySelector('.container')
;(0,_contentGenerator__WEBPACK_IMPORTED_MODULE_6__.generateContent)(container, _components_Navbar__WEBPACK_IMPORTED_MODULE_1__["default"])
;(0,_contentGenerator__WEBPACK_IMPORTED_MODULE_6__.generateContent)(container, _components_Main__WEBPACK_IMPORTED_MODULE_2__["default"])
;(0,_contentGenerator__WEBPACK_IMPORTED_MODULE_6__.generateContent)(container, _components_ColorPicker__WEBPACK_IMPORTED_MODULE_3__["default"].element)
;(0,_contentGenerator__WEBPACK_IMPORTED_MODULE_6__.generateContent)(container, _components_task_NewTaskForm__WEBPACK_IMPORTED_MODULE_4__["default"].element)
;(0,_contentGenerator__WEBPACK_IMPORTED_MODULE_6__.generateContent)(container, _components_tag_TagContextMenu__WEBPACK_IMPORTED_MODULE_5__["default"].element)

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOMkI7QUFDYTtBQUNKO0FBQ2M7QUFDSztBQUNLO0FBQ1I7O0FBRXBEO0FBQ0EsbUVBQWUsWUFBWSwwREFBTTtBQUNqQyxtRUFBZSxZQUFZLHdEQUFJO0FBQy9CLG1FQUFlLFlBQVksdUVBQW1CO0FBQzlDLG1FQUFlLFlBQVksNEVBQW1CO0FBQzlDLG1FQUFlLFlBQVksOEVBQXNCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvYXNzaWduL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2Nsb25lT2JqZWN0L2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3JvdW5kaW5nTWV0aG9kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vY29tcGFyZUFzYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZGlmZmVyZW5jZUluQ2FsZW5kYXJNb250aHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2RpZmZlcmVuY2VJbk1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZGlmZmVyZW5jZUluTW9udGhzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9kaWZmZXJlbmNlSW5TZWNvbmRzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9lbmRPZkRheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZW5kT2ZNb250aC9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzTGFzdERheU9mTW9udGgvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkRm9ybWF0TG9uZ0ZuL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZExvY2FsaXplRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkTWF0Y2hGbi9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRNYXRjaFBhdHRlcm5Gbi9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdExvbmcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdFJlbGF0aXZlL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9sb2NhbGl6ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvbWF0Y2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vdG9EYXRlL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3Njc3MvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9hc3NldHMvaWNvbnMvaW5ib3guc3ZnIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2Fzc2V0cy9pY29ucy9tZW51LnN2ZyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9hc3NldHMvaWNvbnMvbW9yZS5zdmciLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvYXNzZXRzL2ljb25zL25leHQtNy1kYXlzLnN2ZyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9hc3NldHMvaWNvbnMvcGx1cy5zdmciLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvYXNzZXRzL2ljb25zL3Rhc2tzL2RvbmUuc3ZnIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2Fzc2V0cy9pY29ucy90YXNrcy9oaWdoLnN2ZyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9hc3NldHMvaWNvbnMvdGFza3MvbWVkaXVtLnN2ZyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9hc3NldHMvaWNvbnMvdGFza3Mvbm9uZS5zdmciLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvYXNzZXRzL2ljb25zL3Rhc2tzL3NtYWxsLnN2ZyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9hc3NldHMvaWNvbnMvdG9kYXkuc3ZnIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2pzL2NvbXBvbmVudHMvQ29sb3JQaWNrZXIuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvanMvY29tcG9uZW50cy9EaXZpZGVyLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2pzL2NvbXBvbmVudHMvRW1wdHlNZXNzYWdlLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2pzL2NvbXBvbmVudHMvTWFpbi5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9qcy9jb21wb25lbnRzL05hdmJhci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9qcy9jb21wb25lbnRzL2ljb25zL0FkZEljb24uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvanMvY29tcG9uZW50cy9pY29ucy9JY29uLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2pzL2NvbXBvbmVudHMvaWNvbnMvSW5ib3hJY29uLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2pzL2NvbXBvbmVudHMvaWNvbnMvTWVudUljb24uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvanMvY29tcG9uZW50cy9pY29ucy9Nb3JlSWNvbi5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9qcy9jb21wb25lbnRzL2ljb25zL05leHREYXlzSWNvbi5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9qcy9jb21wb25lbnRzL2ljb25zL1Rhc2tTdGF0dXNJY29uLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2pzL2NvbXBvbmVudHMvaWNvbnMvVG9kYXlJY29uLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2pzL2NvbXBvbmVudHMvbWVudS9DdXJyZW50TWVudU9wdGlvbi5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9qcy9jb21wb25lbnRzL21lbnUvTWVudS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9qcy9jb21wb25lbnRzL21lbnUvTWVudVRpdGxlLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2pzL2NvbXBvbmVudHMvbWVudS9vcHRpb24vTWVudU9wdGlvbi5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9qcy9jb21wb25lbnRzL21lbnUvb3B0aW9uL01lbnVPcHRpb25zLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2pzL2NvbXBvbmVudHMvbWVudS9wcmlvcml0eS9NZW51UHJpb3JpdGllcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9qcy9jb21wb25lbnRzL21lbnUvcHJpb3JpdHkvTWVudVByaW9yaXR5LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2pzL2NvbXBvbmVudHMvbWVudS90YWcvTWVudVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9qcy9jb21wb25lbnRzL21lbnUvdGFnL01lbnVUYWdzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2pzL2NvbXBvbmVudHMvbWVudS90YWcvTmV3VGFnQnRuLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2pzL2NvbXBvbmVudHMvdGFnL1RhZ0NvbnRleHRNZW51LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2pzL2NvbXBvbmVudHMvdGFzay9OZXdUYXNrRm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9qcy9jb21wb25lbnRzL3Rhc2svVGFzay5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9qcy9jb21wb25lbnRzL3Rhc2svVGFza3NWaWV3LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2pzL2NvbnRlbnRHZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvanMvZGF0YS90YWdzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2pzL2RhdGEvdGFza3MuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9qcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhc3NpZ24odGFyZ2V0LCBkaXJ0eU9iamVjdCkge1xuICBpZiAodGFyZ2V0ID09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdhc3NpZ24gcmVxdWlyZXMgdGhhdCBpbnB1dCBwYXJhbWV0ZXIgbm90IGJlIG51bGwgb3IgdW5kZWZpbmVkJyk7XG4gIH1cblxuICBkaXJ0eU9iamVjdCA9IGRpcnR5T2JqZWN0IHx8IHt9O1xuXG4gIGZvciAodmFyIHByb3BlcnR5IGluIGRpcnR5T2JqZWN0KSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChkaXJ0eU9iamVjdCwgcHJvcGVydHkpKSB7XG4gICAgICB0YXJnZXRbcHJvcGVydHldID0gZGlydHlPYmplY3RbcHJvcGVydHldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59IiwiaW1wb3J0IGFzc2lnbiBmcm9tIFwiLi4vYXNzaWduL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjbG9uZU9iamVjdChkaXJ0eU9iamVjdCkge1xuICByZXR1cm4gYXNzaWduKHt9LCBkaXJ0eU9iamVjdCk7XG59IiwiLyoqXG4gKiBHb29nbGUgQ2hyb21lIGFzIG9mIDY3LjAuMzM5Ni44NyBpbnRyb2R1Y2VkIHRpbWV6b25lcyB3aXRoIG9mZnNldCB0aGF0IGluY2x1ZGVzIHNlY29uZHMuXG4gKiBUaGV5IHVzdWFsbHkgYXBwZWFyIGZvciBkYXRlcyB0aGF0IGRlbm90ZSB0aW1lIGJlZm9yZSB0aGUgdGltZXpvbmVzIHdlcmUgaW50cm9kdWNlZFxuICogKGUuZy4gZm9yICdFdXJvcGUvUHJhZ3VlJyB0aW1lem9uZSB0aGUgb2Zmc2V0IGlzIEdNVCswMDo1Nzo0NCBiZWZvcmUgMSBPY3RvYmVyIDE4OTFcbiAqIGFuZCBHTVQrMDE6MDA6MDAgYWZ0ZXIgdGhhdCBkYXRlKVxuICpcbiAqIERhdGUjZ2V0VGltZXpvbmVPZmZzZXQgcmV0dXJucyB0aGUgb2Zmc2V0IGluIG1pbnV0ZXMgYW5kIHdvdWxkIHJldHVybiA1NyBmb3IgdGhlIGV4YW1wbGUgYWJvdmUsXG4gKiB3aGljaCB3b3VsZCBsZWFkIHRvIGluY29ycmVjdCBjYWxjdWxhdGlvbnMuXG4gKlxuICogVGhpcyBmdW5jdGlvbiByZXR1cm5zIHRoZSB0aW1lem9uZSBvZmZzZXQgaW4gbWlsbGlzZWNvbmRzIHRoYXQgdGFrZXMgc2Vjb25kcyBpbiBhY2NvdW50LlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKGRhdGUpIHtcbiAgdmFyIHV0Y0RhdGUgPSBuZXcgRGF0ZShEYXRlLlVUQyhkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSwgZGF0ZS5nZXREYXRlKCksIGRhdGUuZ2V0SG91cnMoKSwgZGF0ZS5nZXRNaW51dGVzKCksIGRhdGUuZ2V0U2Vjb25kcygpLCBkYXRlLmdldE1pbGxpc2Vjb25kcygpKSk7XG4gIHV0Y0RhdGUuc2V0VVRDRnVsbFllYXIoZGF0ZS5nZXRGdWxsWWVhcigpKTtcbiAgcmV0dXJuIGRhdGUuZ2V0VGltZSgpIC0gdXRjRGF0ZS5nZXRUaW1lKCk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZWRBcmdzKHJlcXVpcmVkLCBhcmdzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA8IHJlcXVpcmVkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihyZXF1aXJlZCArICcgYXJndW1lbnQnICsgKHJlcXVpcmVkID4gMSA/ICdzJyA6ICcnKSArICcgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmdzLmxlbmd0aCArICcgcHJlc2VudCcpO1xuICB9XG59IiwidmFyIHJvdW5kaW5nTWFwID0ge1xuICBjZWlsOiBNYXRoLmNlaWwsXG4gIHJvdW5kOiBNYXRoLnJvdW5kLFxuICBmbG9vcjogTWF0aC5mbG9vcixcbiAgdHJ1bmM6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSA8IDAgPyBNYXRoLmNlaWwodmFsdWUpIDogTWF0aC5mbG9vcih2YWx1ZSk7XG4gIH0gLy8gTWF0aC50cnVuYyBpcyBub3Qgc3VwcG9ydGVkIGJ5IElFXG5cbn07XG52YXIgZGVmYXVsdFJvdW5kaW5nTWV0aG9kID0gJ3RydW5jJztcbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3VuZGluZ01ldGhvZChtZXRob2QpIHtcbiAgcmV0dXJuIG1ldGhvZCA/IHJvdW5kaW5nTWFwW21ldGhvZF0gOiByb3VuZGluZ01hcFtkZWZhdWx0Um91bmRpbmdNZXRob2RdO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgY29tcGFyZUFzY1xuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb21wYXJlIHRoZSB0d28gZGF0ZXMgYW5kIHJldHVybiAtMSwgMCBvciAxLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29tcGFyZSB0aGUgdHdvIGRhdGVzIGFuZCByZXR1cm4gMSBpZiB0aGUgZmlyc3QgZGF0ZSBpcyBhZnRlciB0aGUgc2Vjb25kLFxuICogLTEgaWYgdGhlIGZpcnN0IGRhdGUgaXMgYmVmb3JlIHRoZSBzZWNvbmQgb3IgMCBpZiBkYXRlcyBhcmUgZXF1YWwuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBmaXJzdCBkYXRlIHRvIGNvbXBhcmVcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBzZWNvbmQgZGF0ZSB0byBjb21wYXJlXG4gKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgcmVzdWx0IG9mIHRoZSBjb21wYXJpc29uXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbXBhcmUgMTEgRmVicnVhcnkgMTk4NyBhbmQgMTAgSnVseSAxOTg5OlxuICogY29uc3QgcmVzdWx0ID0gY29tcGFyZUFzYyhuZXcgRGF0ZSgxOTg3LCAxLCAxMSksIG5ldyBEYXRlKDE5ODksIDYsIDEwKSlcbiAqIC8vPT4gLTFcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU29ydCB0aGUgYXJyYXkgb2YgZGF0ZXM6XG4gKiBjb25zdCByZXN1bHQgPSBbXG4gKiAgIG5ldyBEYXRlKDE5OTUsIDYsIDIpLFxuICogICBuZXcgRGF0ZSgxOTg3LCAxLCAxMSksXG4gKiAgIG5ldyBEYXRlKDE5ODksIDYsIDEwKVxuICogXS5zb3J0KGNvbXBhcmVBc2MpXG4gKiAvLz0+IFtcbiAqIC8vICAgV2VkIEZlYiAxMSAxOTg3IDAwOjAwOjAwLFxuICogLy8gICBNb24gSnVsIDEwIDE5ODkgMDA6MDA6MDAsXG4gKiAvLyAgIFN1biBKdWwgMDIgMTk5NSAwMDowMDowMFxuICogLy8gXVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbXBhcmVBc2MoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdCA9IHRvRGF0ZShkaXJ0eURhdGVMZWZ0KTtcbiAgdmFyIGRhdGVSaWdodCA9IHRvRGF0ZShkaXJ0eURhdGVSaWdodCk7XG4gIHZhciBkaWZmID0gZGF0ZUxlZnQuZ2V0VGltZSgpIC0gZGF0ZVJpZ2h0LmdldFRpbWUoKTtcblxuICBpZiAoZGlmZiA8IDApIHtcbiAgICByZXR1cm4gLTE7XG4gIH0gZWxzZSBpZiAoZGlmZiA+IDApIHtcbiAgICByZXR1cm4gMTsgLy8gUmV0dXJuIDAgaWYgZGlmZiBpcyAwOyByZXR1cm4gTmFOIGlmIGRpZmYgaXMgTmFOXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGRpZmY7XG4gIH1cbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGRpZmZlcmVuY2VJbkNhbGVuZGFyTW9udGhzXG4gKiBAY2F0ZWdvcnkgTW9udGggSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBudW1iZXIgb2YgY2FsZW5kYXIgbW9udGhzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBudW1iZXIgb2YgY2FsZW5kYXIgbW9udGhzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgbGF0ZXIgZGF0ZVxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIGVhcmxpZXIgZGF0ZVxuICogQHJldHVybnMge051bWJlcn0gdGhlIG51bWJlciBvZiBjYWxlbmRhciBtb250aHNcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSG93IG1hbnkgY2FsZW5kYXIgbW9udGhzIGFyZSBiZXR3ZWVuIDMxIEphbnVhcnkgMjAxNCBhbmQgMSBTZXB0ZW1iZXIgMjAxND9cbiAqIHZhciByZXN1bHQgPSBkaWZmZXJlbmNlSW5DYWxlbmRhck1vbnRocyhcbiAqICAgbmV3IERhdGUoMjAxNCwgOCwgMSksXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDAsIDMxKVxuICogKVxuICogLy89PiA4XG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlmZmVyZW5jZUluQ2FsZW5kYXJNb250aHMoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdCA9IHRvRGF0ZShkaXJ0eURhdGVMZWZ0KTtcbiAgdmFyIGRhdGVSaWdodCA9IHRvRGF0ZShkaXJ0eURhdGVSaWdodCk7XG4gIHZhciB5ZWFyRGlmZiA9IGRhdGVMZWZ0LmdldEZ1bGxZZWFyKCkgLSBkYXRlUmlnaHQuZ2V0RnVsbFllYXIoKTtcbiAgdmFyIG1vbnRoRGlmZiA9IGRhdGVMZWZ0LmdldE1vbnRoKCkgLSBkYXRlUmlnaHQuZ2V0TW9udGgoKTtcbiAgcmV0dXJuIHllYXJEaWZmICogMTIgKyBtb250aERpZmY7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBkaWZmZXJlbmNlSW5NaWxsaXNlY29uZHNcbiAqIEBjYXRlZ29yeSBNaWxsaXNlY29uZCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBsYXRlciBkYXRlXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgZWFybGllciBkYXRlXG4gKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kc1xuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBIb3cgbWFueSBtaWxsaXNlY29uZHMgYXJlIGJldHdlZW5cbiAqIC8vIDIgSnVseSAyMDE0IDEyOjMwOjIwLjYwMCBhbmQgMiBKdWx5IDIwMTQgMTI6MzA6MjEuNzAwP1xuICogY29uc3QgcmVzdWx0ID0gZGlmZmVyZW5jZUluTWlsbGlzZWNvbmRzKFxuICogICBuZXcgRGF0ZSgyMDE0LCA2LCAyLCAxMiwgMzAsIDIxLCA3MDApLFxuICogICBuZXcgRGF0ZSgyMDE0LCA2LCAyLCAxMiwgMzAsIDIwLCA2MDApXG4gKiApXG4gKiAvLz0+IDExMDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaWZmZXJlbmNlSW5NaWxsaXNlY29uZHMoZGF0ZUxlZnQsIGRhdGVSaWdodCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIHRvRGF0ZShkYXRlTGVmdCkuZ2V0VGltZSgpIC0gdG9EYXRlKGRhdGVSaWdodCkuZ2V0VGltZSgpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IGRpZmZlcmVuY2VJbkNhbGVuZGFyTW9udGhzIGZyb20gXCIuLi9kaWZmZXJlbmNlSW5DYWxlbmRhck1vbnRocy9pbmRleC5qc1wiO1xuaW1wb3J0IGNvbXBhcmVBc2MgZnJvbSBcIi4uL2NvbXBhcmVBc2MvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgaXNMYXN0RGF5T2ZNb250aCBmcm9tIFwiLi4vaXNMYXN0RGF5T2ZNb250aC9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBkaWZmZXJlbmNlSW5Nb250aHNcbiAqIEBjYXRlZ29yeSBNb250aCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIG51bWJlciBvZiBmdWxsIG1vbnRocyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbnVtYmVyIG9mIGZ1bGwgbW9udGhzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzIHVzaW5nIHRydW5jIGFzIGEgZGVmYXVsdCByb3VuZGluZyBtZXRob2QuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBsYXRlciBkYXRlXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgZWFybGllciBkYXRlXG4gKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgbnVtYmVyIG9mIGZ1bGwgbW9udGhzXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEhvdyBtYW55IGZ1bGwgbW9udGhzIGFyZSBiZXR3ZWVuIDMxIEphbnVhcnkgMjAxNCBhbmQgMSBTZXB0ZW1iZXIgMjAxND9cbiAqIGNvbnN0IHJlc3VsdCA9IGRpZmZlcmVuY2VJbk1vbnRocyhuZXcgRGF0ZSgyMDE0LCA4LCAxKSwgbmV3IERhdGUoMjAxNCwgMCwgMzEpKVxuICogLy89PiA3XG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlmZmVyZW5jZUluTW9udGhzKGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZUxlZnQgPSB0b0RhdGUoZGlydHlEYXRlTGVmdCk7XG4gIHZhciBkYXRlUmlnaHQgPSB0b0RhdGUoZGlydHlEYXRlUmlnaHQpO1xuICB2YXIgc2lnbiA9IGNvbXBhcmVBc2MoZGF0ZUxlZnQsIGRhdGVSaWdodCk7XG4gIHZhciBkaWZmZXJlbmNlID0gTWF0aC5hYnMoZGlmZmVyZW5jZUluQ2FsZW5kYXJNb250aHMoZGF0ZUxlZnQsIGRhdGVSaWdodCkpO1xuICB2YXIgcmVzdWx0OyAvLyBDaGVjayBmb3IgdGhlIGRpZmZlcmVuY2Ugb2YgbGVzcyB0aGFuIG1vbnRoXG5cbiAgaWYgKGRpZmZlcmVuY2UgPCAxKSB7XG4gICAgcmVzdWx0ID0gMDtcbiAgfSBlbHNlIHtcbiAgICBpZiAoZGF0ZUxlZnQuZ2V0TW9udGgoKSA9PT0gMSAmJiBkYXRlTGVmdC5nZXREYXRlKCkgPiAyNykge1xuICAgICAgLy8gVGhpcyB3aWxsIGNoZWNrIGlmIHRoZSBkYXRlIGlzIGVuZCBvZiBGZWIgYW5kIGFzc2lnbiBhIGhpZ2hlciBlbmQgb2YgbW9udGggZGF0ZVxuICAgICAgLy8gdG8gY29tcGFyZSBpdCB3aXRoIEphblxuICAgICAgZGF0ZUxlZnQuc2V0RGF0ZSgzMCk7XG4gICAgfVxuXG4gICAgZGF0ZUxlZnQuc2V0TW9udGgoZGF0ZUxlZnQuZ2V0TW9udGgoKSAtIHNpZ24gKiBkaWZmZXJlbmNlKTsgLy8gTWF0aC5hYnMoZGlmZiBpbiBmdWxsIG1vbnRocyAtIGRpZmYgaW4gY2FsZW5kYXIgbW9udGhzKSA9PT0gMSBpZiBsYXN0IGNhbGVuZGFyIG1vbnRoIGlzIG5vdCBmdWxsXG4gICAgLy8gSWYgc28sIHJlc3VsdCBtdXN0IGJlIGRlY3JlYXNlZCBieSAxIGluIGFic29sdXRlIHZhbHVlXG5cbiAgICB2YXIgaXNMYXN0TW9udGhOb3RGdWxsID0gY29tcGFyZUFzYyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KSA9PT0gLXNpZ247IC8vIENoZWNrIGZvciBjYXNlcyBvZiBvbmUgZnVsbCBjYWxlbmRhciBtb250aFxuXG4gICAgaWYgKGlzTGFzdERheU9mTW9udGgodG9EYXRlKGRpcnR5RGF0ZUxlZnQpKSAmJiBkaWZmZXJlbmNlID09PSAxICYmIGNvbXBhcmVBc2MoZGlydHlEYXRlTGVmdCwgZGF0ZVJpZ2h0KSA9PT0gMSkge1xuICAgICAgaXNMYXN0TW9udGhOb3RGdWxsID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcmVzdWx0ID0gc2lnbiAqIChkaWZmZXJlbmNlIC0gTnVtYmVyKGlzTGFzdE1vbnRoTm90RnVsbCkpO1xuICB9IC8vIFByZXZlbnQgbmVnYXRpdmUgemVyb1xuXG5cbiAgcmV0dXJuIHJlc3VsdCA9PT0gMCA/IDAgOiByZXN1bHQ7XG59IiwiaW1wb3J0IGRpZmZlcmVuY2VJbk1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vZGlmZmVyZW5jZUluTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHsgZ2V0Um91bmRpbmdNZXRob2QgfSBmcm9tIFwiLi4vX2xpYi9yb3VuZGluZ01ldGhvZHMvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgZGlmZmVyZW5jZUluU2Vjb25kc1xuICogQGNhdGVnb3J5IFNlY29uZCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIG51bWJlciBvZiBzZWNvbmRzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBudW1iZXIgb2Ygc2Vjb25kcyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGxhdGVyIGRhdGVcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBlYXJsaWVyIGRhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLnJvdW5kaW5nTWV0aG9kPSd0cnVuYyddIC0gYSByb3VuZGluZyBtZXRob2QgKGBjZWlsYCwgYGZsb29yYCwgYHJvdW5kYCBvciBgdHJ1bmNgKVxuICogQHJldHVybnMge051bWJlcn0gdGhlIG51bWJlciBvZiBzZWNvbmRzXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEhvdyBtYW55IHNlY29uZHMgYXJlIGJldHdlZW5cbiAqIC8vIDIgSnVseSAyMDE0IDEyOjMwOjA3Ljk5OSBhbmQgMiBKdWx5IDIwMTQgMTI6MzA6MjAuMDAwP1xuICogY29uc3QgcmVzdWx0ID0gZGlmZmVyZW5jZUluU2Vjb25kcyhcbiAqICAgbmV3IERhdGUoMjAxNCwgNiwgMiwgMTIsIDMwLCAyMCwgMCksXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDYsIDIsIDEyLCAzMCwgNywgOTk5KVxuICogKVxuICogLy89PiAxMlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpZmZlcmVuY2VJblNlY29uZHMoZGF0ZUxlZnQsIGRhdGVSaWdodCwgb3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRpZmYgPSBkaWZmZXJlbmNlSW5NaWxsaXNlY29uZHMoZGF0ZUxlZnQsIGRhdGVSaWdodCkgLyAxMDAwO1xuICByZXR1cm4gZ2V0Um91bmRpbmdNZXRob2Qob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLnJvdW5kaW5nTWV0aG9kKShkaWZmKTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGVuZE9mRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgZW5kIG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgZW5kIG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgZW5kIG9mIGEgZGF5XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIGVuZCBvZiBhIGRheSBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IGVuZE9mRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFR1ZSBTZXAgMDIgMjAxNCAyMzo1OTo1OS45OTlcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBlbmRPZkRheShkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIGRhdGUuc2V0SG91cnMoMjMsIDU5LCA1OSwgOTk5KTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBlbmRPZk1vbnRoXG4gKiBAY2F0ZWdvcnkgTW9udGggSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBlbmQgb2YgYSBtb250aCBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIGVuZCBvZiBhIG1vbnRoIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgZW5kIG9mIGEgbW9udGhcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgZW5kIG9mIGEgbW9udGggZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBlbmRPZk1vbnRoKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFR1ZSBTZXAgMzAgMjAxNCAyMzo1OTo1OS45OTlcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBlbmRPZk1vbnRoKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIG1vbnRoID0gZGF0ZS5nZXRNb250aCgpO1xuICBkYXRlLnNldEZ1bGxZZWFyKGRhdGUuZ2V0RnVsbFllYXIoKSwgbW9udGggKyAxLCAwKTtcbiAgZGF0ZS5zZXRIb3VycygyMywgNTksIDU5LCA5OTkpO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgY29tcGFyZUFzYyBmcm9tIFwiLi4vY29tcGFyZUFzYy9pbmRleC5qc1wiO1xuaW1wb3J0IGRpZmZlcmVuY2VJbk1vbnRocyBmcm9tIFwiLi4vZGlmZmVyZW5jZUluTW9udGhzL2luZGV4LmpzXCI7XG5pbXBvcnQgZGlmZmVyZW5jZUluU2Vjb25kcyBmcm9tIFwiLi4vZGlmZmVyZW5jZUluU2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IGRlZmF1bHRMb2NhbGUgZnJvbSBcIi4uL2xvY2FsZS9lbi1VUy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgY2xvbmVPYmplY3QgZnJvbSBcIi4uL19saWIvY2xvbmVPYmplY3QvaW5kZXguanNcIjtcbmltcG9ydCBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9fbGliL2dldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG52YXIgTUlOVVRFU19JTl9EQVkgPSAxNDQwO1xudmFyIE1JTlVURVNfSU5fQUxNT1NUX1RXT19EQVlTID0gMjUyMDtcbnZhciBNSU5VVEVTX0lOX01PTlRIID0gNDMyMDA7XG52YXIgTUlOVVRFU19JTl9UV09fTU9OVEhTID0gODY0MDA7XG4vKipcbiAqIEBuYW1lIGZvcm1hdERpc3RhbmNlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgZGlzdGFuY2UgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMgaW4gd29yZHMuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIGRpc3RhbmNlIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzIGluIHdvcmRzLlxuICpcbiAqIHwgRGlzdGFuY2UgYmV0d2VlbiBkYXRlcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSZXN1bHQgICAgICAgICAgICAgIHxcbiAqIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIHwgMCAuLi4gMzAgc2VjcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBsZXNzIHRoYW4gYSBtaW51dGUgIHxcbiAqIHwgMzAgc2VjcyAuLi4gMSBtaW4gMzAgc2VjcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAxIG1pbnV0ZSAgICAgICAgICAgIHxcbiAqIHwgMSBtaW4gMzAgc2VjcyAuLi4gNDQgbWlucyAzMCBzZWNzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBbMi4uNDRdIG1pbnV0ZXMgICAgIHxcbiAqIHwgNDQgbWlucyAuLi4gMzAgc2VjcyAuLi4gODkgbWlucyAzMCBzZWNzICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYm91dCAxIGhvdXIgICAgICAgIHxcbiAqIHwgODkgbWlucyAzMCBzZWNzIC4uLiAyMyBocnMgNTkgbWlucyAzMCBzZWNzICAgICAgICAgICAgICAgICAgICAgICAgfCBhYm91dCBbMi4uMjRdIGhvdXJzIHxcbiAqIHwgMjMgaHJzIDU5IG1pbnMgMzAgc2VjcyAuLi4gNDEgaHJzIDU5IG1pbnMgMzAgc2VjcyAgICAgICAgICAgICAgICAgfCAxIGRheSAgICAgICAgICAgICAgIHxcbiAqIHwgNDEgaHJzIDU5IG1pbnMgMzAgc2VjcyAuLi4gMjkgZGF5cyAyMyBocnMgNTkgbWlucyAzMCBzZWNzICAgICAgICAgfCBbMi4uMzBdIGRheXMgICAgICAgIHxcbiAqIHwgMjkgZGF5cyAyMyBocnMgNTkgbWlucyAzMCBzZWNzIC4uLiA0NCBkYXlzIDIzIGhycyA1OSBtaW5zIDMwIHNlY3MgfCBhYm91dCAxIG1vbnRoICAgICAgIHxcbiAqIHwgNDQgZGF5cyAyMyBocnMgNTkgbWlucyAzMCBzZWNzIC4uLiA1OSBkYXlzIDIzIGhycyA1OSBtaW5zIDMwIHNlY3MgfCBhYm91dCAyIG1vbnRocyAgICAgIHxcbiAqIHwgNTkgZGF5cyAyMyBocnMgNTkgbWlucyAzMCBzZWNzIC4uLiAxIHlyICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBbMi4uMTJdIG1vbnRocyAgICAgIHxcbiAqIHwgMSB5ciAuLi4gMSB5ciAzIG1vbnRocyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYm91dCAxIHllYXIgICAgICAgIHxcbiAqIHwgMSB5ciAzIG1vbnRocyAuLi4gMSB5ciA5IG1vbnRoIHMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBvdmVyIDEgeWVhciAgICAgICAgIHxcbiAqIHwgMSB5ciA5IG1vbnRocyAuLi4gMiB5cnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhbG1vc3QgMiB5ZWFycyAgICAgIHxcbiAqIHwgTiB5cnMgLi4uIE4geXJzIDMgbW9udGhzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYm91dCBOIHllYXJzICAgICAgIHxcbiAqIHwgTiB5cnMgMyBtb250aHMgLi4uIE4geXJzIDkgbW9udGhzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBvdmVyIE4geWVhcnMgICAgICAgIHxcbiAqIHwgTiB5cnMgOSBtb250aHMgLi4uIE4rMSB5cnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhbG1vc3QgTisxIHllYXJzICAgIHxcbiAqXG4gKiBXaXRoIGBvcHRpb25zLmluY2x1ZGVTZWNvbmRzID09IHRydWVgOlxuICogfCBEaXN0YW5jZSBiZXR3ZWVuIGRhdGVzIHwgUmVzdWx0ICAgICAgICAgICAgICAgfFxuICogfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuICogfCAwIHNlY3MgLi4uIDUgc2VjcyAgICAgIHwgbGVzcyB0aGFuIDUgc2Vjb25kcyAgfFxuICogfCA1IHNlY3MgLi4uIDEwIHNlY3MgICAgIHwgbGVzcyB0aGFuIDEwIHNlY29uZHMgfFxuICogfCAxMCBzZWNzIC4uLiAyMCBzZWNzICAgIHwgbGVzcyB0aGFuIDIwIHNlY29uZHMgfFxuICogfCAyMCBzZWNzIC4uLiA0MCBzZWNzICAgIHwgaGFsZiBhIG1pbnV0ZSAgICAgICAgfFxuICogfCA0MCBzZWNzIC4uLiA2MCBzZWNzICAgIHwgbGVzcyB0aGFuIGEgbWludXRlICAgfFxuICogfCA2MCBzZWNzIC4uLiA5MCBzZWNzICAgIHwgMSBtaW51dGUgICAgICAgICAgICAgfFxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogLSBUaGUgZnVuY3Rpb24gd2FzIHJlbmFtZWQgZnJvbSBgZGlzdGFuY2VJbldvcmRzIGAgdG8gYGZvcm1hdERpc3RhbmNlYFxuICogICB0byBtYWtlIGl0cyBuYW1lIGNvbnNpc3RlbnQgd2l0aCBgZm9ybWF0YCBhbmQgYGZvcm1hdFJlbGF0aXZlYC5cbiAqXG4gKiAtIFRoZSBvcmRlciBvZiBhcmd1bWVudHMgaXMgc3dhcHBlZCB0byBtYWtlIHRoZSBmdW5jdGlvblxuICogICBjb25zaXN0ZW50IHdpdGggYGRpZmZlcmVuY2VJbi4uLmAgZnVuY3Rpb25zLlxuICpcbiAqICAgYGBgamF2YXNjcmlwdFxuICogICAvLyBCZWZvcmUgdjIuMC4wXG4gKlxuICogICBkaXN0YW5jZUluV29yZHMoXG4gKiAgICAgbmV3IERhdGUoMTk4NiwgMywgNCwgMTAsIDMyLCAwKSxcbiAqICAgICBuZXcgRGF0ZSgxOTg2LCAzLCA0LCAxMSwgMzIsIDApLFxuICogICAgIHsgYWRkU3VmZml4OiB0cnVlIH1cbiAqICAgKSAvLz0+ICdpbiBhYm91dCAxIGhvdXInXG4gKlxuICogICAvLyB2Mi4wLjAgb253YXJkXG4gKlxuICogICBmb3JtYXREaXN0YW5jZShcbiAqICAgICBuZXcgRGF0ZSgxOTg2LCAzLCA0LCAxMSwgMzIsIDApLFxuICogICAgIG5ldyBEYXRlKDE5ODYsIDMsIDQsIDEwLCAzMiwgMCksXG4gKiAgICAgeyBhZGRTdWZmaXg6IHRydWUgfVxuICogICApIC8vPT4gJ2luIGFib3V0IDEgaG91cidcbiAqICAgYGBgXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBiYXNlRGF0ZSAtIHRoZSBkYXRlIHRvIGNvbXBhcmUgd2l0aFxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmluY2x1ZGVTZWNvbmRzPWZhbHNlXSAtIGRpc3RhbmNlcyBsZXNzIHRoYW4gYSBtaW51dGUgYXJlIG1vcmUgZGV0YWlsZWRcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuYWRkU3VmZml4PWZhbHNlXSAtIHJlc3VsdCBpbmRpY2F0ZXMgaWYgdGhlIHNlY29uZCBkYXRlIGlzIGVhcmxpZXIgb3IgbGF0ZXIgdGhhbiB0aGUgZmlyc3RcbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHJldHVybnMge1N0cmluZ30gdGhlIGRpc3RhbmNlIGluIHdvcmRzXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgZGF0ZWAgbXVzdCBub3QgYmUgSW52YWxpZCBEYXRlXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgYmFzZURhdGVgIG11c3Qgbm90IGJlIEludmFsaWQgRGF0ZVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMubG9jYWxlYCBtdXN0IGNvbnRhaW4gYGZvcm1hdERpc3RhbmNlYCBwcm9wZXJ0eVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGF0IGlzIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIDIgSnVseSAyMDE0IGFuZCAxIEphbnVhcnkgMjAxNT9cbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdERpc3RhbmNlKG5ldyBEYXRlKDIwMTQsIDYsIDIpLCBuZXcgRGF0ZSgyMDE1LCAwLCAxKSlcbiAqIC8vPT4gJzYgbW9udGhzJ1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGF0IGlzIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIDEgSmFudWFyeSAyMDE1IDAwOjAwOjE1XG4gKiAvLyBhbmQgMSBKYW51YXJ5IDIwMTUgMDA6MDA6MDAsIGluY2x1ZGluZyBzZWNvbmRzP1xuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0RGlzdGFuY2UoXG4gKiAgIG5ldyBEYXRlKDIwMTUsIDAsIDEsIDAsIDAsIDE1KSxcbiAqICAgbmV3IERhdGUoMjAxNSwgMCwgMSwgMCwgMCwgMCksXG4gKiAgIHsgaW5jbHVkZVNlY29uZHM6IHRydWUgfVxuICogKVxuICogLy89PiAnbGVzcyB0aGFuIDIwIHNlY29uZHMnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoYXQgaXMgdGhlIGRpc3RhbmNlIGZyb20gMSBKYW51YXJ5IDIwMTZcbiAqIC8vIHRvIDEgSmFudWFyeSAyMDE1LCB3aXRoIGEgc3VmZml4P1xuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0RGlzdGFuY2UobmV3IERhdGUoMjAxNSwgMCwgMSksIG5ldyBEYXRlKDIwMTYsIDAsIDEpLCB7XG4gKiAgIGFkZFN1ZmZpeDogdHJ1ZVxuICogfSlcbiAqIC8vPT4gJ2Fib3V0IDEgeWVhciBhZ28nXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoYXQgaXMgdGhlIGRpc3RhbmNlIGJldHdlZW4gMSBBdWd1c3QgMjAxNiBhbmQgMSBKYW51YXJ5IDIwMTUgaW4gRXNwZXJhbnRvP1xuICogaW1wb3J0IHsgZW9Mb2NhbGUgfSBmcm9tICdkYXRlLWZucy9sb2NhbGUvZW8nXG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXREaXN0YW5jZShuZXcgRGF0ZSgyMDE2LCA3LCAxKSwgbmV3IERhdGUoMjAxNSwgMCwgMSksIHtcbiAqICAgbG9jYWxlOiBlb0xvY2FsZVxuICogfSlcbiAqIC8vPT4gJ3BsaSBvbCAxIGphcm8nXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9ybWF0RGlzdGFuY2UoZGlydHlEYXRlLCBkaXJ0eUJhc2VEYXRlKSB7XG4gIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fTtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBsb2NhbGUgPSBvcHRpb25zLmxvY2FsZSB8fCBkZWZhdWx0TG9jYWxlO1xuXG4gIGlmICghbG9jYWxlLmZvcm1hdERpc3RhbmNlKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2xvY2FsZSBtdXN0IGNvbnRhaW4gZm9ybWF0RGlzdGFuY2UgcHJvcGVydHknKTtcbiAgfVxuXG4gIHZhciBjb21wYXJpc29uID0gY29tcGFyZUFzYyhkaXJ0eURhdGUsIGRpcnR5QmFzZURhdGUpO1xuXG4gIGlmIChpc05hTihjb21wYXJpc29uKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbnZhbGlkIHRpbWUgdmFsdWUnKTtcbiAgfVxuXG4gIHZhciBsb2NhbGl6ZU9wdGlvbnMgPSBjbG9uZU9iamVjdChvcHRpb25zKTtcbiAgbG9jYWxpemVPcHRpb25zLmFkZFN1ZmZpeCA9IEJvb2xlYW4ob3B0aW9ucy5hZGRTdWZmaXgpO1xuICBsb2NhbGl6ZU9wdGlvbnMuY29tcGFyaXNvbiA9IGNvbXBhcmlzb247XG4gIHZhciBkYXRlTGVmdDtcbiAgdmFyIGRhdGVSaWdodDtcblxuICBpZiAoY29tcGFyaXNvbiA+IDApIHtcbiAgICBkYXRlTGVmdCA9IHRvRGF0ZShkaXJ0eUJhc2VEYXRlKTtcbiAgICBkYXRlUmlnaHQgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgfSBlbHNlIHtcbiAgICBkYXRlTGVmdCA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICAgIGRhdGVSaWdodCA9IHRvRGF0ZShkaXJ0eUJhc2VEYXRlKTtcbiAgfVxuXG4gIHZhciBzZWNvbmRzID0gZGlmZmVyZW5jZUluU2Vjb25kcyhkYXRlUmlnaHQsIGRhdGVMZWZ0KTtcbiAgdmFyIG9mZnNldEluU2Vjb25kcyA9IChnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKGRhdGVSaWdodCkgLSBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKGRhdGVMZWZ0KSkgLyAxMDAwO1xuICB2YXIgbWludXRlcyA9IE1hdGgucm91bmQoKHNlY29uZHMgLSBvZmZzZXRJblNlY29uZHMpIC8gNjApO1xuICB2YXIgbW9udGhzOyAvLyAwIHVwIHRvIDIgbWluc1xuXG4gIGlmIChtaW51dGVzIDwgMikge1xuICAgIGlmIChvcHRpb25zLmluY2x1ZGVTZWNvbmRzKSB7XG4gICAgICBpZiAoc2Vjb25kcyA8IDUpIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgnbGVzc1RoYW5YU2Vjb25kcycsIDUsIGxvY2FsaXplT3B0aW9ucyk7XG4gICAgICB9IGVsc2UgaWYgKHNlY29uZHMgPCAxMCkge1xuICAgICAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCdsZXNzVGhhblhTZWNvbmRzJywgMTAsIGxvY2FsaXplT3B0aW9ucyk7XG4gICAgICB9IGVsc2UgaWYgKHNlY29uZHMgPCAyMCkge1xuICAgICAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCdsZXNzVGhhblhTZWNvbmRzJywgMjAsIGxvY2FsaXplT3B0aW9ucyk7XG4gICAgICB9IGVsc2UgaWYgKHNlY29uZHMgPCA0MCkge1xuICAgICAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCdoYWxmQU1pbnV0ZScsIG51bGwsIGxvY2FsaXplT3B0aW9ucyk7XG4gICAgICB9IGVsc2UgaWYgKHNlY29uZHMgPCA2MCkge1xuICAgICAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCdsZXNzVGhhblhNaW51dGVzJywgMSwgbG9jYWxpemVPcHRpb25zKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ3hNaW51dGVzJywgMSwgbG9jYWxpemVPcHRpb25zKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKG1pbnV0ZXMgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgnbGVzc1RoYW5YTWludXRlcycsIDEsIGxvY2FsaXplT3B0aW9ucyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCd4TWludXRlcycsIG1pbnV0ZXMsIGxvY2FsaXplT3B0aW9ucyk7XG4gICAgICB9XG4gICAgfSAvLyAyIG1pbnMgdXAgdG8gMC43NSBocnNcblxuICB9IGVsc2UgaWYgKG1pbnV0ZXMgPCA0NSkge1xuICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ3hNaW51dGVzJywgbWludXRlcywgbG9jYWxpemVPcHRpb25zKTsgLy8gMC43NSBocnMgdXAgdG8gMS41IGhyc1xuICB9IGVsc2UgaWYgKG1pbnV0ZXMgPCA5MCkge1xuICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ2Fib3V0WEhvdXJzJywgMSwgbG9jYWxpemVPcHRpb25zKTsgLy8gMS41IGhycyB1cCB0byAyNCBocnNcbiAgfSBlbHNlIGlmIChtaW51dGVzIDwgTUlOVVRFU19JTl9EQVkpIHtcbiAgICB2YXIgaG91cnMgPSBNYXRoLnJvdW5kKG1pbnV0ZXMgLyA2MCk7XG4gICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgnYWJvdXRYSG91cnMnLCBob3VycywgbG9jYWxpemVPcHRpb25zKTsgLy8gMSBkYXkgdXAgdG8gMS43NSBkYXlzXG4gIH0gZWxzZSBpZiAobWludXRlcyA8IE1JTlVURVNfSU5fQUxNT1NUX1RXT19EQVlTKSB7XG4gICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgneERheXMnLCAxLCBsb2NhbGl6ZU9wdGlvbnMpOyAvLyAxLjc1IGRheXMgdXAgdG8gMzAgZGF5c1xuICB9IGVsc2UgaWYgKG1pbnV0ZXMgPCBNSU5VVEVTX0lOX01PTlRIKSB7XG4gICAgdmFyIGRheXMgPSBNYXRoLnJvdW5kKG1pbnV0ZXMgLyBNSU5VVEVTX0lOX0RBWSk7XG4gICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgneERheXMnLCBkYXlzLCBsb2NhbGl6ZU9wdGlvbnMpOyAvLyAxIG1vbnRoIHVwIHRvIDIgbW9udGhzXG4gIH0gZWxzZSBpZiAobWludXRlcyA8IE1JTlVURVNfSU5fVFdPX01PTlRIUykge1xuICAgIG1vbnRocyA9IE1hdGgucm91bmQobWludXRlcyAvIE1JTlVURVNfSU5fTU9OVEgpO1xuICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ2Fib3V0WE1vbnRocycsIG1vbnRocywgbG9jYWxpemVPcHRpb25zKTtcbiAgfVxuXG4gIG1vbnRocyA9IGRpZmZlcmVuY2VJbk1vbnRocyhkYXRlUmlnaHQsIGRhdGVMZWZ0KTsgLy8gMiBtb250aHMgdXAgdG8gMTIgbW9udGhzXG5cbiAgaWYgKG1vbnRocyA8IDEyKSB7XG4gICAgdmFyIG5lYXJlc3RNb250aCA9IE1hdGgucm91bmQobWludXRlcyAvIE1JTlVURVNfSU5fTU9OVEgpO1xuICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ3hNb250aHMnLCBuZWFyZXN0TW9udGgsIGxvY2FsaXplT3B0aW9ucyk7IC8vIDEgeWVhciB1cCB0byBtYXggRGF0ZVxuICB9IGVsc2Uge1xuICAgIHZhciBtb250aHNTaW5jZVN0YXJ0T2ZZZWFyID0gbW9udGhzICUgMTI7XG4gICAgdmFyIHllYXJzID0gTWF0aC5mbG9vcihtb250aHMgLyAxMik7IC8vIE4geWVhcnMgdXAgdG8gMSB5ZWFycyAzIG1vbnRoc1xuXG4gICAgaWYgKG1vbnRoc1NpbmNlU3RhcnRPZlllYXIgPCAzKSB7XG4gICAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCdhYm91dFhZZWFycycsIHllYXJzLCBsb2NhbGl6ZU9wdGlvbnMpOyAvLyBOIHllYXJzIDMgbW9udGhzIHVwIHRvIE4geWVhcnMgOSBtb250aHNcbiAgICB9IGVsc2UgaWYgKG1vbnRoc1NpbmNlU3RhcnRPZlllYXIgPCA5KSB7XG4gICAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCdvdmVyWFllYXJzJywgeWVhcnMsIGxvY2FsaXplT3B0aW9ucyk7IC8vIE4geWVhcnMgOSBtb250aHMgdXAgdG8gTiB5ZWFyIDEyIG1vbnRoc1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCdhbG1vc3RYWWVhcnMnLCB5ZWFycyArIDEsIGxvY2FsaXplT3B0aW9ucyk7XG4gICAgfVxuICB9XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgZW5kT2ZEYXkgZnJvbSBcIi4uL2VuZE9mRGF5L2luZGV4LmpzXCI7XG5pbXBvcnQgZW5kT2ZNb250aCBmcm9tIFwiLi4vZW5kT2ZNb250aC9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNMYXN0RGF5T2ZNb250aFxuICogQGNhdGVnb3J5IE1vbnRoIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIHRoZSBsYXN0IGRheSBvZiBhIG1vbnRoP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGdpdmVuIGRhdGUgdGhlIGxhc3QgZGF5IG9mIGEgbW9udGg/XG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyB0aGUgbGFzdCBkYXkgb2YgYSBtb250aFxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElzIDI4IEZlYnJ1YXJ5IDIwMTQgdGhlIGxhc3QgZGF5IG9mIGEgbW9udGg/XG4gKiB2YXIgcmVzdWx0ID0gaXNMYXN0RGF5T2ZNb250aChuZXcgRGF0ZSgyMDE0LCAxLCAyOCkpXG4gKiAvLz0+IHRydWVcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0xhc3REYXlPZk1vbnRoKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgcmV0dXJuIGVuZE9mRGF5KGRhdGUpLmdldFRpbWUoKSA9PT0gZW5kT2ZNb250aChkYXRlKS5nZXRUaW1lKCk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRGb3JtYXRMb25nRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgICAvLyBUT0RPOiBSZW1vdmUgU3RyaW5nKClcbiAgICB2YXIgd2lkdGggPSBvcHRpb25zLndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgdmFyIGZvcm1hdCA9IGFyZ3MuZm9ybWF0c1t3aWR0aF0gfHwgYXJncy5mb3JtYXRzW2FyZ3MuZGVmYXVsdFdpZHRoXTtcbiAgICByZXR1cm4gZm9ybWF0O1xuICB9O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTG9jYWxpemVGbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoZGlydHlJbmRleCwgZGlydHlPcHRpb25zKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBkaXJ0eU9wdGlvbnMgfHwge307XG4gICAgdmFyIGNvbnRleHQgPSBvcHRpb25zLmNvbnRleHQgPyBTdHJpbmcob3B0aW9ucy5jb250ZXh0KSA6ICdzdGFuZGFsb25lJztcbiAgICB2YXIgdmFsdWVzQXJyYXk7XG5cbiAgICBpZiAoY29udGV4dCA9PT0gJ2Zvcm1hdHRpbmcnICYmIGFyZ3MuZm9ybWF0dGluZ1ZhbHVlcykge1xuICAgICAgdmFyIGRlZmF1bHRXaWR0aCA9IGFyZ3MuZGVmYXVsdEZvcm1hdHRpbmdXaWR0aCB8fCBhcmdzLmRlZmF1bHRXaWR0aDtcbiAgICAgIHZhciB3aWR0aCA9IG9wdGlvbnMud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBkZWZhdWx0V2lkdGg7XG4gICAgICB2YWx1ZXNBcnJheSA9IGFyZ3MuZm9ybWF0dGluZ1ZhbHVlc1t3aWR0aF0gfHwgYXJncy5mb3JtYXR0aW5nVmFsdWVzW2RlZmF1bHRXaWR0aF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBfZGVmYXVsdFdpZHRoID0gYXJncy5kZWZhdWx0V2lkdGg7XG5cbiAgICAgIHZhciBfd2lkdGggPSBvcHRpb25zLndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogYXJncy5kZWZhdWx0V2lkdGg7XG5cbiAgICAgIHZhbHVlc0FycmF5ID0gYXJncy52YWx1ZXNbX3dpZHRoXSB8fCBhcmdzLnZhbHVlc1tfZGVmYXVsdFdpZHRoXTtcbiAgICB9XG5cbiAgICB2YXIgaW5kZXggPSBhcmdzLmFyZ3VtZW50Q2FsbGJhY2sgPyBhcmdzLmFyZ3VtZW50Q2FsbGJhY2soZGlydHlJbmRleCkgOiBkaXJ0eUluZGV4OyAvLyBAdHMtaWdub3JlOiBGb3Igc29tZSByZWFzb24gVHlwZVNjcmlwdCBqdXN0IGRvbid0IHdhbnQgdG8gbWF0Y2ggaXQsIG5vIG1hdHRlciBob3cgaGFyZCB3ZSB0cnkuIEkgY2hhbGxhbmdlIHlvdSB0byB0cnkgdG8gcmVtb3ZlIGl0IVxuXG4gICAgcmV0dXJuIHZhbHVlc0FycmF5W2luZGV4XTtcbiAgfTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZE1hdGNoRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKHN0cmluZykge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICB2YXIgd2lkdGggPSBvcHRpb25zLndpZHRoO1xuICAgIHZhciBtYXRjaFBhdHRlcm4gPSB3aWR0aCAmJiBhcmdzLm1hdGNoUGF0dGVybnNbd2lkdGhdIHx8IGFyZ3MubWF0Y2hQYXR0ZXJuc1thcmdzLmRlZmF1bHRNYXRjaFdpZHRoXTtcbiAgICB2YXIgbWF0Y2hSZXN1bHQgPSBzdHJpbmcubWF0Y2gobWF0Y2hQYXR0ZXJuKTtcblxuICAgIGlmICghbWF0Y2hSZXN1bHQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHZhciBtYXRjaGVkU3RyaW5nID0gbWF0Y2hSZXN1bHRbMF07XG4gICAgdmFyIHBhcnNlUGF0dGVybnMgPSB3aWR0aCAmJiBhcmdzLnBhcnNlUGF0dGVybnNbd2lkdGhdIHx8IGFyZ3MucGFyc2VQYXR0ZXJuc1thcmdzLmRlZmF1bHRQYXJzZVdpZHRoXTtcbiAgICB2YXIga2V5ID0gQXJyYXkuaXNBcnJheShwYXJzZVBhdHRlcm5zKSA/IGZpbmRJbmRleChwYXJzZVBhdHRlcm5zLCBmdW5jdGlvbiAocGF0dGVybikge1xuICAgICAgcmV0dXJuIHBhdHRlcm4udGVzdChtYXRjaGVkU3RyaW5nKTtcbiAgICB9KSA6IGZpbmRLZXkocGFyc2VQYXR0ZXJucywgZnVuY3Rpb24gKHBhdHRlcm4pIHtcbiAgICAgIHJldHVybiBwYXR0ZXJuLnRlc3QobWF0Y2hlZFN0cmluZyk7XG4gICAgfSk7XG4gICAgdmFyIHZhbHVlO1xuICAgIHZhbHVlID0gYXJncy52YWx1ZUNhbGxiYWNrID8gYXJncy52YWx1ZUNhbGxiYWNrKGtleSkgOiBrZXk7XG4gICAgdmFsdWUgPSBvcHRpb25zLnZhbHVlQ2FsbGJhY2sgPyBvcHRpb25zLnZhbHVlQ2FsbGJhY2sodmFsdWUpIDogdmFsdWU7XG4gICAgdmFyIHJlc3QgPSBzdHJpbmcuc2xpY2UobWF0Y2hlZFN0cmluZy5sZW5ndGgpO1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICByZXN0OiByZXN0XG4gICAgfTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZmluZEtleShvYmplY3QsIHByZWRpY2F0ZSkge1xuICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgaWYgKG9iamVjdC5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIHByZWRpY2F0ZShvYmplY3Rba2V5XSkpIHtcbiAgICAgIHJldHVybiBrZXk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gZmluZEluZGV4KGFycmF5LCBwcmVkaWNhdGUpIHtcbiAgZm9yICh2YXIga2V5ID0gMDsga2V5IDwgYXJyYXkubGVuZ3RoOyBrZXkrKykge1xuICAgIGlmIChwcmVkaWNhdGUoYXJyYXlba2V5XSkpIHtcbiAgICAgIHJldHVybiBrZXk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZE1hdGNoUGF0dGVybkZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgdmFyIG1hdGNoUmVzdWx0ID0gc3RyaW5nLm1hdGNoKGFyZ3MubWF0Y2hQYXR0ZXJuKTtcbiAgICBpZiAoIW1hdGNoUmVzdWx0KSByZXR1cm4gbnVsbDtcbiAgICB2YXIgbWF0Y2hlZFN0cmluZyA9IG1hdGNoUmVzdWx0WzBdO1xuICAgIHZhciBwYXJzZVJlc3VsdCA9IHN0cmluZy5tYXRjaChhcmdzLnBhcnNlUGF0dGVybik7XG4gICAgaWYgKCFwYXJzZVJlc3VsdCkgcmV0dXJuIG51bGw7XG4gICAgdmFyIHZhbHVlID0gYXJncy52YWx1ZUNhbGxiYWNrID8gYXJncy52YWx1ZUNhbGxiYWNrKHBhcnNlUmVzdWx0WzBdKSA6IHBhcnNlUmVzdWx0WzBdO1xuICAgIHZhbHVlID0gb3B0aW9ucy52YWx1ZUNhbGxiYWNrID8gb3B0aW9ucy52YWx1ZUNhbGxiYWNrKHZhbHVlKSA6IHZhbHVlO1xuICAgIHZhciByZXN0ID0gc3RyaW5nLnNsaWNlKG1hdGNoZWRTdHJpbmcubGVuZ3RoKTtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgcmVzdDogcmVzdFxuICAgIH07XG4gIH07XG59IiwidmFyIGZvcm1hdERpc3RhbmNlTG9jYWxlID0ge1xuICBsZXNzVGhhblhTZWNvbmRzOiB7XG4gICAgb25lOiAnbGVzcyB0aGFuIGEgc2Vjb25kJyxcbiAgICBvdGhlcjogJ2xlc3MgdGhhbiB7e2NvdW50fX0gc2Vjb25kcydcbiAgfSxcbiAgeFNlY29uZHM6IHtcbiAgICBvbmU6ICcxIHNlY29uZCcsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gc2Vjb25kcydcbiAgfSxcbiAgaGFsZkFNaW51dGU6ICdoYWxmIGEgbWludXRlJyxcbiAgbGVzc1RoYW5YTWludXRlczoge1xuICAgIG9uZTogJ2xlc3MgdGhhbiBhIG1pbnV0ZScsXG4gICAgb3RoZXI6ICdsZXNzIHRoYW4ge3tjb3VudH19IG1pbnV0ZXMnXG4gIH0sXG4gIHhNaW51dGVzOiB7XG4gICAgb25lOiAnMSBtaW51dGUnLFxuICAgIG90aGVyOiAne3tjb3VudH19IG1pbnV0ZXMnXG4gIH0sXG4gIGFib3V0WEhvdXJzOiB7XG4gICAgb25lOiAnYWJvdXQgMSBob3VyJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSBob3VycydcbiAgfSxcbiAgeEhvdXJzOiB7XG4gICAgb25lOiAnMSBob3VyJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBob3VycydcbiAgfSxcbiAgeERheXM6IHtcbiAgICBvbmU6ICcxIGRheScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gZGF5cydcbiAgfSxcbiAgYWJvdXRYV2Vla3M6IHtcbiAgICBvbmU6ICdhYm91dCAxIHdlZWsnLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IHdlZWtzJ1xuICB9LFxuICB4V2Vla3M6IHtcbiAgICBvbmU6ICcxIHdlZWsnLFxuICAgIG90aGVyOiAne3tjb3VudH19IHdlZWtzJ1xuICB9LFxuICBhYm91dFhNb250aHM6IHtcbiAgICBvbmU6ICdhYm91dCAxIG1vbnRoJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSBtb250aHMnXG4gIH0sXG4gIHhNb250aHM6IHtcbiAgICBvbmU6ICcxIG1vbnRoJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBtb250aHMnXG4gIH0sXG4gIGFib3V0WFllYXJzOiB7XG4gICAgb25lOiAnYWJvdXQgMSB5ZWFyJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSB5ZWFycydcbiAgfSxcbiAgeFllYXJzOiB7XG4gICAgb25lOiAnMSB5ZWFyJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSB5ZWFycydcbiAgfSxcbiAgb3ZlclhZZWFyczoge1xuICAgIG9uZTogJ292ZXIgMSB5ZWFyJyxcbiAgICBvdGhlcjogJ292ZXIge3tjb3VudH19IHllYXJzJ1xuICB9LFxuICBhbG1vc3RYWWVhcnM6IHtcbiAgICBvbmU6ICdhbG1vc3QgMSB5ZWFyJyxcbiAgICBvdGhlcjogJ2FsbW9zdCB7e2NvdW50fX0geWVhcnMnXG4gIH1cbn07XG5cbnZhciBmb3JtYXREaXN0YW5jZSA9IGZ1bmN0aW9uICh0b2tlbiwgY291bnQsIG9wdGlvbnMpIHtcbiAgdmFyIHJlc3VsdDtcbiAgdmFyIHRva2VuVmFsdWUgPSBmb3JtYXREaXN0YW5jZUxvY2FsZVt0b2tlbl07XG5cbiAgaWYgKHR5cGVvZiB0b2tlblZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWU7XG4gIH0gZWxzZSBpZiAoY291bnQgPT09IDEpIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLm9uZTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLm90aGVyLnJlcGxhY2UoJ3t7Y291bnR9fScsIGNvdW50LnRvU3RyaW5nKCkpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMuYWRkU3VmZml4KSB7XG4gICAgaWYgKG9wdGlvbnMuY29tcGFyaXNvbiAmJiBvcHRpb25zLmNvbXBhcmlzb24gPiAwKSB7XG4gICAgICByZXR1cm4gJ2luICcgKyByZXN1bHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiByZXN1bHQgKyAnIGFnbyc7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZvcm1hdERpc3RhbmNlOyIsImltcG9ydCBidWlsZEZvcm1hdExvbmdGbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZEZvcm1hdExvbmdGbi9pbmRleC5qc1wiO1xudmFyIGRhdGVGb3JtYXRzID0ge1xuICBmdWxsOiAnRUVFRSwgTU1NTSBkbywgeScsXG4gIGxvbmc6ICdNTU1NIGRvLCB5JyxcbiAgbWVkaXVtOiAnTU1NIGQsIHknLFxuICBzaG9ydDogJ01NL2RkL3l5eXknXG59O1xudmFyIHRpbWVGb3JtYXRzID0ge1xuICBmdWxsOiAnaDptbTpzcyBhIHp6enonLFxuICBsb25nOiAnaDptbTpzcyBhIHonLFxuICBtZWRpdW06ICdoOm1tOnNzIGEnLFxuICBzaG9ydDogJ2g6bW0gYSdcbn07XG52YXIgZGF0ZVRpbWVGb3JtYXRzID0ge1xuICBmdWxsOiBcInt7ZGF0ZX19ICdhdCcge3t0aW1lfX1cIixcbiAgbG9uZzogXCJ7e2RhdGV9fSAnYXQnIHt7dGltZX19XCIsXG4gIG1lZGl1bTogJ3t7ZGF0ZX19LCB7e3RpbWV9fScsXG4gIHNob3J0OiAne3tkYXRlfX0sIHt7dGltZX19J1xufTtcbnZhciBmb3JtYXRMb25nID0ge1xuICBkYXRlOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogZGF0ZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSksXG4gIHRpbWU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiB0aW1lRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KSxcbiAgZGF0ZVRpbWU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiBkYXRlVGltZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSlcbn07XG5leHBvcnQgZGVmYXVsdCBmb3JtYXRMb25nOyIsInZhciBmb3JtYXRSZWxhdGl2ZUxvY2FsZSA9IHtcbiAgbGFzdFdlZWs6IFwiJ2xhc3QnIGVlZWUgJ2F0JyBwXCIsXG4gIHllc3RlcmRheTogXCIneWVzdGVyZGF5IGF0JyBwXCIsXG4gIHRvZGF5OiBcIid0b2RheSBhdCcgcFwiLFxuICB0b21vcnJvdzogXCIndG9tb3Jyb3cgYXQnIHBcIixcbiAgbmV4dFdlZWs6IFwiZWVlZSAnYXQnIHBcIixcbiAgb3RoZXI6ICdQJ1xufTtcblxudmFyIGZvcm1hdFJlbGF0aXZlID0gZnVuY3Rpb24gKHRva2VuLCBfZGF0ZSwgX2Jhc2VEYXRlLCBfb3B0aW9ucykge1xuICByZXR1cm4gZm9ybWF0UmVsYXRpdmVMb2NhbGVbdG9rZW5dO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZm9ybWF0UmVsYXRpdmU7IiwiaW1wb3J0IGJ1aWxkTG9jYWxpemVGbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZExvY2FsaXplRm4vaW5kZXguanNcIjtcbnZhciBlcmFWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydCJywgJ0EnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnQkMnLCAnQUQnXSxcbiAgd2lkZTogWydCZWZvcmUgQ2hyaXN0JywgJ0Fubm8gRG9taW5pJ11cbn07XG52YXIgcXVhcnRlclZhbHVlcyA9IHtcbiAgbmFycm93OiBbJzEnLCAnMicsICczJywgJzQnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnUTEnLCAnUTInLCAnUTMnLCAnUTQnXSxcbiAgd2lkZTogWycxc3QgcXVhcnRlcicsICcybmQgcXVhcnRlcicsICczcmQgcXVhcnRlcicsICc0dGggcXVhcnRlciddXG59OyAvLyBOb3RlOiBpbiBFbmdsaXNoLCB0aGUgbmFtZXMgb2YgZGF5cyBvZiB0aGUgd2VlayBhbmQgbW9udGhzIGFyZSBjYXBpdGFsaXplZC5cbi8vIElmIHlvdSBhcmUgbWFraW5nIGEgbmV3IGxvY2FsZSBiYXNlZCBvbiB0aGlzIG9uZSwgY2hlY2sgaWYgdGhlIHNhbWUgaXMgdHJ1ZSBmb3IgdGhlIGxhbmd1YWdlIHlvdSdyZSB3b3JraW5nIG9uLlxuLy8gR2VuZXJhbGx5LCBmb3JtYXR0ZWQgZGF0ZXMgc2hvdWxkIGxvb2sgbGlrZSB0aGV5IGFyZSBpbiB0aGUgbWlkZGxlIG9mIGEgc2VudGVuY2UsXG4vLyBlLmcuIGluIFNwYW5pc2ggbGFuZ3VhZ2UgdGhlIHdlZWtkYXlzIGFuZCBtb250aHMgc2hvdWxkIGJlIGluIHRoZSBsb3dlcmNhc2UuXG5cbnZhciBtb250aFZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ0onLCAnRicsICdNJywgJ0EnLCAnTScsICdKJywgJ0onLCAnQScsICdTJywgJ08nLCAnTicsICdEJ10sXG4gIGFiYnJldmlhdGVkOiBbJ0phbicsICdGZWInLCAnTWFyJywgJ0FwcicsICdNYXknLCAnSnVuJywgJ0p1bCcsICdBdWcnLCAnU2VwJywgJ09jdCcsICdOb3YnLCAnRGVjJ10sXG4gIHdpZGU6IFsnSmFudWFyeScsICdGZWJydWFyeScsICdNYXJjaCcsICdBcHJpbCcsICdNYXknLCAnSnVuZScsICdKdWx5JywgJ0F1Z3VzdCcsICdTZXB0ZW1iZXInLCAnT2N0b2JlcicsICdOb3ZlbWJlcicsICdEZWNlbWJlciddXG59O1xudmFyIGRheVZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ1MnLCAnTScsICdUJywgJ1cnLCAnVCcsICdGJywgJ1MnXSxcbiAgc2hvcnQ6IFsnU3UnLCAnTW8nLCAnVHUnLCAnV2UnLCAnVGgnLCAnRnInLCAnU2EnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnU3VuJywgJ01vbicsICdUdWUnLCAnV2VkJywgJ1RodScsICdGcmknLCAnU2F0J10sXG4gIHdpZGU6IFsnU3VuZGF5JywgJ01vbmRheScsICdUdWVzZGF5JywgJ1dlZG5lc2RheScsICdUaHVyc2RheScsICdGcmlkYXknLCAnU2F0dXJkYXknXVxufTtcbnZhciBkYXlQZXJpb2RWYWx1ZXMgPSB7XG4gIG5hcnJvdzoge1xuICAgIGFtOiAnYScsXG4gICAgcG06ICdwJyxcbiAgICBtaWRuaWdodDogJ21pJyxcbiAgICBub29uOiAnbicsXG4gICAgbW9ybmluZzogJ21vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnbmlnaHQnXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06ICdBTScsXG4gICAgcG06ICdQTScsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgICBuaWdodDogJ25pZ2h0J1xuICB9LFxuICB3aWRlOiB7XG4gICAgYW06ICdhLm0uJyxcbiAgICBwbTogJ3AubS4nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnZXZlbmluZycsXG4gICAgbmlnaHQ6ICduaWdodCdcbiAgfVxufTtcbnZhciBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogJ2EnLFxuICAgIHBtOiAncCcsXG4gICAgbWlkbmlnaHQ6ICdtaScsXG4gICAgbm9vbjogJ24nLFxuICAgIG1vcm5pbmc6ICdpbiB0aGUgbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnaW4gdGhlIGFmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2luIHRoZSBldmVuaW5nJyxcbiAgICBuaWdodDogJ2F0IG5pZ2h0J1xuICB9LFxuICBhYmJyZXZpYXRlZDoge1xuICAgIGFtOiAnQU0nLFxuICAgIHBtOiAnUE0nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnaW4gdGhlIG1vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2luIHRoZSBhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdpbiB0aGUgZXZlbmluZycsXG4gICAgbmlnaHQ6ICdhdCBuaWdodCdcbiAgfSxcbiAgd2lkZToge1xuICAgIGFtOiAnYS5tLicsXG4gICAgcG06ICdwLm0uJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ2luIHRoZSBtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdpbiB0aGUgYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnaW4gdGhlIGV2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnYXQgbmlnaHQnXG4gIH1cbn07XG5cbnZhciBvcmRpbmFsTnVtYmVyID0gZnVuY3Rpb24gKGRpcnR5TnVtYmVyLCBfb3B0aW9ucykge1xuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTsgLy8gSWYgb3JkaW5hbCBudW1iZXJzIGRlcGVuZCBvbiBjb250ZXh0LCBmb3IgZXhhbXBsZSxcbiAgLy8gaWYgdGhleSBhcmUgZGlmZmVyZW50IGZvciBkaWZmZXJlbnQgZ3JhbW1hdGljYWwgZ2VuZGVycyxcbiAgLy8gdXNlIGBvcHRpb25zLnVuaXRgLlxuICAvL1xuICAvLyBgdW5pdGAgY2FuIGJlICd5ZWFyJywgJ3F1YXJ0ZXInLCAnbW9udGgnLCAnd2VlaycsICdkYXRlJywgJ2RheU9mWWVhcicsXG4gIC8vICdkYXknLCAnaG91cicsICdtaW51dGUnLCAnc2Vjb25kJy5cblxuICB2YXIgcmVtMTAwID0gbnVtYmVyICUgMTAwO1xuXG4gIGlmIChyZW0xMDAgPiAyMCB8fCByZW0xMDAgPCAxMCkge1xuICAgIHN3aXRjaCAocmVtMTAwICUgMTApIHtcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgcmV0dXJuIG51bWJlciArICdzdCc7XG5cbiAgICAgIGNhc2UgMjpcbiAgICAgICAgcmV0dXJuIG51bWJlciArICduZCc7XG5cbiAgICAgIGNhc2UgMzpcbiAgICAgICAgcmV0dXJuIG51bWJlciArICdyZCc7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bWJlciArICd0aCc7XG59O1xuXG52YXIgbG9jYWxpemUgPSB7XG4gIG9yZGluYWxOdW1iZXI6IG9yZGluYWxOdW1iZXIsXG4gIGVyYTogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGVyYVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgcXVhcnRlcjogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IHF1YXJ0ZXJWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZScsXG4gICAgYXJndW1lbnRDYWxsYmFjazogZnVuY3Rpb24gKHF1YXJ0ZXIpIHtcbiAgICAgIHJldHVybiBxdWFydGVyIC0gMTtcbiAgICB9XG4gIH0pLFxuICBtb250aDogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IG1vbnRoVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBkYXk6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBkYXlWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIGRheVBlcmlvZDogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGRheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBmb3JtYXR0aW5nVmFsdWVzOiBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRGb3JtYXR0aW5nV2lkdGg6ICd3aWRlJ1xuICB9KVxufTtcbmV4cG9ydCBkZWZhdWx0IGxvY2FsaXplOyIsImltcG9ydCBidWlsZE1hdGNoRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRNYXRjaEZuL2luZGV4LmpzXCI7XG5pbXBvcnQgYnVpbGRNYXRjaFBhdHRlcm5GbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZE1hdGNoUGF0dGVybkZuL2luZGV4LmpzXCI7XG52YXIgbWF0Y2hPcmRpbmFsTnVtYmVyUGF0dGVybiA9IC9eKFxcZCspKHRofHN0fG5kfHJkKT8vaTtcbnZhciBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuID0gL1xcZCsvaTtcbnZhciBtYXRjaEVyYVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eKGJ8YSkvaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKGJcXC4/XFxzP2NcXC4/fGJcXC4/XFxzP2NcXC4/XFxzP2VcXC4/fGFcXC4/XFxzP2RcXC4/fGNcXC4/XFxzP2VcXC4/KS9pLFxuICB3aWRlOiAvXihiZWZvcmUgY2hyaXN0fGJlZm9yZSBjb21tb24gZXJhfGFubm8gZG9taW5pfGNvbW1vbiBlcmEpL2lcbn07XG52YXIgcGFyc2VFcmFQYXR0ZXJucyA9IHtcbiAgYW55OiBbL15iL2ksIC9eKGF8YykvaV1cbn07XG52YXIgbWF0Y2hRdWFydGVyUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bMTIzNF0vaSxcbiAgYWJicmV2aWF0ZWQ6IC9ecVsxMjM0XS9pLFxuICB3aWRlOiAvXlsxMjM0XSh0aHxzdHxuZHxyZCk/IHF1YXJ0ZXIvaVxufTtcbnZhciBwYXJzZVF1YXJ0ZXJQYXR0ZXJucyA9IHtcbiAgYW55OiBbLzEvaSwgLzIvaSwgLzMvaSwgLzQvaV1cbn07XG52YXIgbWF0Y2hNb250aFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eW2pmbWFzb25kXS9pLFxuICBhYmJyZXZpYXRlZDogL14oamFufGZlYnxtYXJ8YXByfG1heXxqdW58anVsfGF1Z3xzZXB8b2N0fG5vdnxkZWMpL2ksXG4gIHdpZGU6IC9eKGphbnVhcnl8ZmVicnVhcnl8bWFyY2h8YXByaWx8bWF5fGp1bmV8anVseXxhdWd1c3R8c2VwdGVtYmVyfG9jdG9iZXJ8bm92ZW1iZXJ8ZGVjZW1iZXIpL2lcbn07XG52YXIgcGFyc2VNb250aFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IFsvXmovaSwgL15mL2ksIC9ebS9pLCAvXmEvaSwgL15tL2ksIC9eai9pLCAvXmovaSwgL15hL2ksIC9ecy9pLCAvXm8vaSwgL15uL2ksIC9eZC9pXSxcbiAgYW55OiBbL15qYS9pLCAvXmYvaSwgL15tYXIvaSwgL15hcC9pLCAvXm1heS9pLCAvXmp1bi9pLCAvXmp1bC9pLCAvXmF1L2ksIC9ecy9pLCAvXm8vaSwgL15uL2ksIC9eZC9pXVxufTtcbnZhciBtYXRjaERheVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eW3NtdHdmXS9pLFxuICBzaG9ydDogL14oc3V8bW98dHV8d2V8dGh8ZnJ8c2EpL2ksXG4gIGFiYnJldmlhdGVkOiAvXihzdW58bW9ufHR1ZXx3ZWR8dGh1fGZyaXxzYXQpL2ksXG4gIHdpZGU6IC9eKHN1bmRheXxtb25kYXl8dHVlc2RheXx3ZWRuZXNkYXl8dGh1cnNkYXl8ZnJpZGF5fHNhdHVyZGF5KS9pXG59O1xudmFyIHBhcnNlRGF5UGF0dGVybnMgPSB7XG4gIG5hcnJvdzogWy9ecy9pLCAvXm0vaSwgL150L2ksIC9edy9pLCAvXnQvaSwgL15mL2ksIC9ecy9pXSxcbiAgYW55OiBbL15zdS9pLCAvXm0vaSwgL150dS9pLCAvXncvaSwgL150aC9pLCAvXmYvaSwgL15zYS9pXVxufTtcbnZhciBtYXRjaERheVBlcmlvZFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eKGF8cHxtaXxufChpbiB0aGV8YXQpIChtb3JuaW5nfGFmdGVybm9vbnxldmVuaW5nfG5pZ2h0KSkvaSxcbiAgYW55OiAvXihbYXBdXFwuP1xccz9tXFwuP3xtaWRuaWdodHxub29ufChpbiB0aGV8YXQpIChtb3JuaW5nfGFmdGVybm9vbnxldmVuaW5nfG5pZ2h0KSkvaVxufTtcbnZhciBwYXJzZURheVBlcmlvZFBhdHRlcm5zID0ge1xuICBhbnk6IHtcbiAgICBhbTogL15hL2ksXG4gICAgcG06IC9ecC9pLFxuICAgIG1pZG5pZ2h0OiAvXm1pL2ksXG4gICAgbm9vbjogL15uby9pLFxuICAgIG1vcm5pbmc6IC9tb3JuaW5nL2ksXG4gICAgYWZ0ZXJub29uOiAvYWZ0ZXJub29uL2ksXG4gICAgZXZlbmluZzogL2V2ZW5pbmcvaSxcbiAgICBuaWdodDogL25pZ2h0L2lcbiAgfVxufTtcbnZhciBtYXRjaCA9IHtcbiAgb3JkaW5hbE51bWJlcjogYnVpbGRNYXRjaFBhdHRlcm5Gbih7XG4gICAgbWF0Y2hQYXR0ZXJuOiBtYXRjaE9yZGluYWxOdW1iZXJQYXR0ZXJuLFxuICAgIHBhcnNlUGF0dGVybjogcGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybixcbiAgICB2YWx1ZUNhbGxiYWNrOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIHJldHVybiBwYXJzZUludCh2YWx1ZSwgMTApO1xuICAgIH1cbiAgfSksXG4gIGVyYTogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaEVyYVBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VFcmFQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIHF1YXJ0ZXI6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hRdWFydGVyUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZVF1YXJ0ZXJQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueScsXG4gICAgdmFsdWVDYWxsYmFjazogZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICByZXR1cm4gaW5kZXggKyAxO1xuICAgIH1cbiAgfSksXG4gIG1vbnRoOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoTW9udGhQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlTW9udGhQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIGRheTogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaERheVBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VEYXlQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIGRheVBlcmlvZDogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaERheVBlcmlvZFBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnYW55JyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZURheVBlcmlvZFBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KVxufTtcbmV4cG9ydCBkZWZhdWx0IG1hdGNoOyIsImltcG9ydCBmb3JtYXREaXN0YW5jZSBmcm9tIFwiLi9fbGliL2Zvcm1hdERpc3RhbmNlL2luZGV4LmpzXCI7XG5pbXBvcnQgZm9ybWF0TG9uZyBmcm9tIFwiLi9fbGliL2Zvcm1hdExvbmcvaW5kZXguanNcIjtcbmltcG9ydCBmb3JtYXRSZWxhdGl2ZSBmcm9tIFwiLi9fbGliL2Zvcm1hdFJlbGF0aXZlL2luZGV4LmpzXCI7XG5pbXBvcnQgbG9jYWxpemUgZnJvbSBcIi4vX2xpYi9sb2NhbGl6ZS9pbmRleC5qc1wiO1xuaW1wb3J0IG1hdGNoIGZyb20gXCIuL19saWIvbWF0Y2gvaW5kZXguanNcIjtcblxuLyoqXG4gKiBAdHlwZSB7TG9jYWxlfVxuICogQGNhdGVnb3J5IExvY2FsZXNcbiAqIEBzdW1tYXJ5IEVuZ2xpc2ggbG9jYWxlIChVbml0ZWQgU3RhdGVzKS5cbiAqIEBsYW5ndWFnZSBFbmdsaXNoXG4gKiBAaXNvLTYzOS0yIGVuZ1xuICogQGF1dGhvciBTYXNoYSBLb3NzIFtAa29zc25vY29ycF17QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2tvc3Nub2NvcnB9XG4gKiBAYXV0aG9yIExlc2hhIEtvc3MgW0BsZXNoYWtvc3Nde0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9sZXNoYWtvc3N9XG4gKi9cbnZhciBsb2NhbGUgPSB7XG4gIGNvZGU6ICdlbi1VUycsXG4gIGZvcm1hdERpc3RhbmNlOiBmb3JtYXREaXN0YW5jZSxcbiAgZm9ybWF0TG9uZzogZm9ybWF0TG9uZyxcbiAgZm9ybWF0UmVsYXRpdmU6IGZvcm1hdFJlbGF0aXZlLFxuICBsb2NhbGl6ZTogbG9jYWxpemUsXG4gIG1hdGNoOiBtYXRjaCxcbiAgb3B0aW9uczoge1xuICAgIHdlZWtTdGFydHNPbjogMFxuICAgIC8qIFN1bmRheSAqL1xuICAgICxcbiAgICBmaXJzdFdlZWtDb250YWluc0RhdGU6IDFcbiAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IGxvY2FsZTsiLCJpbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTsgLy8gQ2xvbmUgdGhlIGRhdGVcblxuICBpZiAoYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8IHR5cGVvZiBhcmd1bWVudCA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXQuaW8vZmp1bGVcIik7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG5cbiAgICAgIGNvbnNvbGUud2FybihuZXcgRXJyb3IoKS5zdGFjayk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn0iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB2aWV3Qm94PVxcXCIwIDAgMzYgMzZcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCI+PHBhdGggZD1cXFwiTTYgNC41SDMwTDMzIDEwLjVWMzBDMzMgMzAuMzk3OCAzMi44NDIgMzAuNzc5NCAzMi41NjA3IDMxLjA2MDdDMzIuMjc5NCAzMS4zNDIgMzEuODk3OCAzMS41IDMxLjUgMzEuNUg0LjVDNC4xMDIxOCAzMS41IDMuNzIwNjQgMzEuMzQyIDMuNDM5MzQgMzEuMDYwN0MzLjE1ODA0IDMwLjc3OTQgMyAzMC4zOTc4IDMgMzBWMTAuNTA2TDYgNC41Wk0xOS41IDIxVjE1SDE2LjVWMjFIMTJMMTggMjdMMjQgMjFIMTkuNVpNMjkuNjQ2IDEwLjVMMjguMTQ2IDcuNUg3Ljg1NTVMNi4zNTU1IDEwLjVIMjkuNjQ2WlxcXCIgZmlsbD1cXFwiIzQ5NTA1N1xcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgdmlld0JveD1cXFwiMCAwIDMwIDMxXFxcIiBmaWxsPVxcXCJub25lXFxcIiB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiPjxwYXRoIGQ9XFxcIk0zLjc1IDUuNUgyNi4yNVY4SDMuNzVWNS41Wk0zLjc1IDE0LjI1SDI2LjI1VjE2Ljc1SDMuNzVWMTQuMjVaTTMuNzUgMjNIMjYuMjVWMjUuNUgzLjc1VjIzWlxcXCIgZmlsbD1cXFwiIzQ5NTA1N1xcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIiBmaWxsPVxcXCJub25lXFxcIiB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiPjxwYXRoIGQ9XFxcIk0xMiAzQzEwLjkgMyAxMCAzLjkgMTAgNUMxMCA2LjEgMTAuOSA3IDEyIDdDMTMuMSA3IDE0IDYuMSAxNCA1QzE0IDMuOSAxMy4xIDMgMTIgM1pNMTIgMTdDMTAuOSAxNyAxMCAxNy45IDEwIDE5QzEwIDIwLjEgMTAuOSAyMSAxMiAyMUMxMy4xIDIxIDE0IDIwLjEgMTQgMTlDMTQgMTcuOSAxMy4xIDE3IDEyIDE3Wk0xMiAxMEMxMC45IDEwIDEwIDEwLjkgMTAgMTJDMTAgMTMuMSAxMC45IDE0IDEyIDE0QzEzLjEgMTQgMTQgMTMuMSAxNCAxMkMxNCAxMC45IDEzLjEgMTAgMTIgMTBaXFxcIiBmaWxsPVxcXCIjMDkxMjFGXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB2aWV3Qm94PVxcXCIwIDAgMzYgMzZcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCI+PHBhdGggZD1cXFwiTTI1LjUgNC41SDMxLjVDMzEuODk3OCA0LjUgMzIuMjc5NCA0LjY1ODA0IDMyLjU2MDcgNC45MzkzNEMzMi44NDIgNS4yMjA2NCAzMyA1LjYwMjE3IDMzIDZWMzBDMzMgMzAuMzk3OCAzMi44NDIgMzAuNzc5NCAzMi41NjA3IDMxLjA2MDdDMzIuMjc5NCAzMS4zNDIgMzEuODk3OCAzMS41IDMxLjUgMzEuNUg0LjVDNC4xMDIxOCAzMS41IDMuNzIwNjQgMzEuMzQyIDMuNDM5MzQgMzEuMDYwN0MzLjE1ODA0IDMwLjc3OTQgMyAzMC4zOTc4IDMgMzBWNkMzIDUuNjAyMTcgMy4xNTgwNCA1LjIyMDY0IDMuNDM5MzQgNC45MzkzNEMzLjcyMDY0IDQuNjU4MDQgNC4xMDIxOCA0LjUgNC41IDQuNUgxMC41VjEuNUgxMy41VjQuNUgyMi41VjEuNUgyNS41VjQuNVpNNiAxMy41VjI4LjVIMzBWMTMuNUg2Wk05IDE5LjVIMTYuNVYyNS41SDlWMTkuNVpcXFwiIGZpbGw9XFxcIiM0OTUwNTdcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHZpZXdCb3g9XFxcIjAgMCAzMCAzMFxcXCIgZmlsbD1cXFwibm9uZVxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIj48cGF0aCBkPVxcXCJNMTIuODU3MSAxMi44NTcxVjBIMTcuMTQyOVYxMi44NTcxSDMwVjE3LjE0MjlIMTcuMTQyOVYzMEgxMi44NTcxVjE3LjE0MjlIMFYxMi44NTcxSDEyLjg1NzFaXFxcIiBmaWxsPVxcXCIjNDk1MDU3XFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB2aWV3Qm94PVxcXCIwIDAgMzYgMzZcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCI+PGNpcmNsZSBjeD1cXFwiMThcXFwiIGN5PVxcXCIxOFxcXCIgcj1cXFwiMThcXFwiIGZpbGw9XFxcIiNDNEM0QzRcXFwiPjwvY2lyY2xlPjxwYXRoIGQ9XFxcIk0xNS4zMzMzIDIyLjIyOTNMMjcuNTg5MyA5Ljk3MkwyOS40NzYgMTEuODU3M0wxNS4zMzMzIDI2TDYuODQ3OTkgMTcuNTE0N0w4LjczMzMzIDE1LjYyOTNMMTUuMzMzMyAyMi4yMjkzWlxcXCIgZmlsbD1cXFwid2hpdGVcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHZpZXdCb3g9XFxcIjAgMCAzNiAzNlxcXCIgZmlsbD1cXFwibm9uZVxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIj48Y2lyY2xlIGN4PVxcXCIxOFxcXCIgY3k9XFxcIjE4XFxcIiByPVxcXCIxOFxcXCIgZmlsbD1cXFwiI0ZGNkI2QlxcXCI+PC9jaXJjbGU+PGNpcmNsZSBjeD1cXFwiMThcXFwiIGN5PVxcXCIxOFxcXCIgcj1cXFwiMTVcXFwiIGZpbGw9XFxcIiNGRkUzRTNcXFwiPjwvY2lyY2xlPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgdmlld0JveD1cXFwiMCAwIDM2IDM2XFxcIiBmaWxsPVxcXCJub25lXFxcIiB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiPjxjaXJjbGUgY3g9XFxcIjE4XFxcIiBjeT1cXFwiMThcXFwiIHI9XFxcIjE4XFxcIiBmaWxsPVxcXCIjRkNDNDE5XFxcIj48L2NpcmNsZT48Y2lyY2xlIGN4PVxcXCIxOFxcXCIgY3k9XFxcIjE4XFxcIiByPVxcXCIxNVxcXCIgZmlsbD1cXFwiI0ZGRUM5OVxcXCI+PC9jaXJjbGU+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB2aWV3Qm94PVxcXCIwIDAgMzYgMzZcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCI+PHBhdGggZmlsbC1ydWxlPVxcXCJldmVub2RkXFxcIiBjbGlwLXJ1bGU9XFxcImV2ZW5vZGRcXFwiIGQ9XFxcIk0xOCAzNkMyNy45NDExIDM2IDM2IDI3Ljk0MTEgMzYgMThDMzYgOC4wNTg4NyAyNy45NDExIDAgMTggMEM4LjA1ODg3IDAgMCA4LjA1ODg3IDAgMThDMCAyNy45NDExIDguMDU4ODcgMzYgMTggMzZaTTE4IDMzQzI2LjI4NDMgMzMgMzMgMjYuMjg0MyAzMyAxOEMzMyA5LjcxNTczIDI2LjI4NDMgMyAxOCAzQzkuNzE1NzMgMyAzIDkuNzE1NzMgMyAxOEMzIDI2LjI4NDMgOS43MTU3MyAzMyAxOCAzM1pcXFwiIGZpbGw9XFxcIiNDRUQ0REFcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHZpZXdCb3g9XFxcIjAgMCAzNiAzNlxcXCIgZmlsbD1cXFwibm9uZVxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIj48Y2lyY2xlIGN4PVxcXCIxOFxcXCIgY3k9XFxcIjE4XFxcIiByPVxcXCIxOFxcXCIgZmlsbD1cXFwiIzk0RDgyRFxcXCI+PC9jaXJjbGU+PGNpcmNsZSBjeD1cXFwiMThcXFwiIGN5PVxcXCIxOFxcXCIgcj1cXFwiMTVcXFwiIGZpbGw9XFxcIiNFOUZBQzhcXFwiPjwvY2lyY2xlPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgdmlld0JveD1cXFwiMCAwIDM2IDM2XFxcIiBmaWxsPVxcXCJub25lXFxcIiB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiPjxwYXRoIGQ9XFxcIk0yNS41IDQuNUgzMS41QzMxLjg5NzggNC41IDMyLjI3OTQgNC42NTgwMyAzMi41NjA3IDQuOTM5MzRDMzIuODQyIDUuMjIwNjQgMzMgNS42MDIxNyAzMyA2VjMwQzMzIDMwLjM5NzggMzIuODQyIDMwLjc3OTQgMzIuNTYwNyAzMS4wNjA3QzMyLjI3OTQgMzEuMzQyIDMxLjg5NzggMzEuNSAzMS41IDMxLjVINC41QzQuMTAyMTggMzEuNSAzLjcyMDY0IDMxLjM0MiAzLjQzOTM0IDMxLjA2MDdDMy4xNTgwNCAzMC43Nzk0IDMgMzAuMzk3OCAzIDMwVjZDMyA1LjYwMjE3IDMuMTU4MDQgNS4yMjA2NCAzLjQzOTM0IDQuOTM5MzRDMy43MjA2NCA0LjY1ODAzIDQuMTAyMTggNC41IDQuNSA0LjVIMTAuNVYxLjVIMTMuNVY0LjVIMjIuNVYxLjVIMjUuNVY0LjVaTTYgMTMuNVYyOC41SDMwVjEzLjVINlpNOSAxNi41SDEyVjE5LjVIOVYxNi41Wk05IDIyLjVIMTJWMjUuNUg5VjIyLjVaTTE1IDE2LjVIMjdWMTkuNUgxNVYxNi41Wk0xNSAyMi41SDIyLjVWMjUuNUgxNVYyMi41WlxcXCIgZmlsbD1cXFwiIzQ5NTA1N1xcXCI+PC9wYXRoPjwvc3ZnPlwiIiwiY29uc3QgY29sb3JzID0gW1xuICAnI2ZmNmI2YicsXG4gICcjZjA2NTk1JyxcbiAgJyNjYzVkZTgnLFxuICAnIzg0NWVmNycsXG4gICcjNWM3Y2ZhJyxcbiAgJyMzMzlhZjAnLFxuICAnIzIyYjhjZicsXG4gICcjMjBjOTk3JyxcbiAgJyM1MWNmNjYnLFxuICAnIzk0ZDgyZCcsXG4gICcjZmNjNDE5JyxcbiAgJyNmZjkyMmInLFxuXVxuXG5jb25zdCBDb2xvclBpY2tlciA9ICgoKSA9PiB7XG4gIGxldCBjdXJyZW50VGFyZ2V0ID0gbnVsbFxuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgZWxlbWVudC5jbGFzc05hbWUgPSAnY29sb3ItcGlja2VyIGhpZGRlbidcblxuICBjb25zdCBoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJylcbiAgaDMuY2xhc3NOYW1lID0gJ2NvbG9yLXBpY2tlcl9fdGl0bGUnXG4gIGgzLnRleHRDb250ZW50ID0gJ1BpY2sgYSBjb2xvcjonXG5cbiAgY29uc3QgY29sb3JDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBjb2xvckNvbnRhaW5lci5jbGFzc05hbWUgPSAnY29sb3ItcGlja2VyX19jb2xvcnMnXG5cbiAgZm9yIChsZXQgY29sb3Igb2YgY29sb3JzKSB7XG4gICAgY29uc3QgY29sb3JFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb2xvckVsZW1lbnQuY2xhc3NOYW1lID0gJ2NvbG9yLXBpY2tlcl9fY29sb3InXG4gICAgY29sb3JFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yXG5cbiAgICBjb2xvckVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBpZiAoY3VycmVudFRhcmdldCAhPSBudWxsKSB7XG4gICAgICAgIGN1cnJlbnRUYXJnZXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3JcbiAgICAgICAgY3VycmVudFRhcmdldC5zZXRBdHRyaWJ1dGUoJ2RhdGEtY29sb3InLCBjb2xvcilcbiAgICAgIH1cbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICB9KVxuICAgIGNvbG9yQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbG9yRWxlbWVudClcbiAgfVxuXG4gIGNvbnN0IGdlbmVyYXRlID0gKHRhcmdldCwgeCwgeSkgPT4ge1xuICAgIGN1cnJlbnRUYXJnZXQgPSB0YXJnZXRcbiAgICBlbGVtZW50LnN0eWxlLnRvcCA9IGAke3l9cHhgXG4gICAgZWxlbWVudC5zdHlsZS5sZWZ0ID0gYCR7eH1weGBcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpXG4gIH1cblxuICBlbGVtZW50LmFwcGVuZENoaWxkKGgzKVxuICBlbGVtZW50LmFwcGVuZENoaWxkKGNvbG9yQ29udGFpbmVyKVxuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0ICE9IGVsZW1lbnQgJiYgIWVsZW1lbnQuY29udGFpbnMoZS50YXJnZXQpKVxuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICB9KVxuXG4gIHJldHVybiB7IGVsZW1lbnQsIGdlbmVyYXRlIH1cbn0pKClcblxuZXhwb3J0IGRlZmF1bHQgQ29sb3JQaWNrZXJcbiIsImNvbnN0IERpdmlkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdocicpXG4gIGVsZW1lbnQuY2xhc3NOYW1lID0gJ2RpdmlkZXInXG5cbiAgcmV0dXJuIGVsZW1lbnRcbn1cblxuZXhwb3J0IGRlZmF1bHQgRGl2aWRlclxuIiwiY29uc3QgRW1wdHlNZXNzYWdlID0gKHRleHQpID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICBlbGVtZW50LmNsYXNzTmFtZSA9ICdlbXB0eS1tZXNzYWdlJ1xuICBlbGVtZW50LnRleHRDb250ZW50ID0gdGV4dFxuICByZXR1cm4gZWxlbWVudFxufVxuXG5leHBvcnQgZGVmYXVsdCBFbXB0eU1lc3NhZ2VcbiIsImltcG9ydCBNZW51IGZyb20gJy4vbWVudS9NZW51J1xuaW1wb3J0IFRhc2tzVmlldyBmcm9tICcuL3Rhc2svVGFza3NWaWV3J1xuaW1wb3J0IE1lbnVPcHRpb25zIGZyb20gJy4vbWVudS9vcHRpb24vTWVudU9wdGlvbnMnXG5cbmNvbnN0IE1haW4gPSAoKCkgPT4ge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgbWFpbi5jbGFzc05hbWUgPSAnbWFpbidcblxuICBtYWluLmFwcGVuZENoaWxkKE1lbnUuZWxlbWVudClcbiAgbWFpbi5hcHBlbmRDaGlsZChUYXNrc1ZpZXcuZWxlbWVudClcbiAgTWVudU9wdGlvbnMubWVudU9wdGlvbnNbMF0uZWxlbWVudC5jbGljaygpXG5cbiAgcmV0dXJuIG1haW5cbn0pKClcblxuZXhwb3J0IGRlZmF1bHQgTWFpblxuIiwiaW1wb3J0IE1lbnVJY29uIGZyb20gJy4vaWNvbnMvTWVudUljb24nXG5pbXBvcnQgQWRkSWNvbiBmcm9tICcuL2ljb25zL0FkZEljb24nXG5pbXBvcnQgTWVudSBmcm9tICcuL21lbnUvTWVudSdcbmltcG9ydCBOZXdUYXNrRm9ybSBmcm9tICcuL3Rhc2svTmV3VGFza0Zvcm0nXG5cbmNvbnN0IE5hdmJhciA9ICgoKSA9PiB7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpXG4gIGhlYWRlci5jbGFzc05hbWUgPSAnaGVhZGVyJ1xuXG4gIGNvbnN0IG5hdkJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpXG4gIG5hdkJhci5jbGFzc05hbWUgPSAnbmF2YmFyJ1xuXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuICB0aXRsZS5jbGFzc05hbWUgPSAnaGVhZGVyX190aXRsZSdcbiAgdGl0bGUudGV4dENvbnRlbnQgPSAnVG9kb0FwcCdcblxuICBjb25zdCBtZW51SWNvbiA9IE1lbnVJY29uKCdoZWFkZXJfX2ljb24gaGVhZGVyX19pY29uLS1tZW51JylcbiAgbWVudUljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBNZW51LnRvZ2dsZUhpZGUpXG5cbiAgY29uc3QgYWRkSWNvbiA9IEFkZEljb24oJ2hlYWRlcl9faWNvbiBoZWFkZXJfX2ljb24tLWFkZCcpXG4gIGFkZEljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBOZXdUYXNrRm9ybS51cGRhdGVGb3JtKG51bGwpKVxuXG4gIG5hdkJhci5hcHBlbmRDaGlsZChtZW51SWNvbilcbiAgbmF2QmFyLmFwcGVuZENoaWxkKHRpdGxlKVxuICBuYXZCYXIuYXBwZW5kQ2hpbGQoYWRkSWNvbilcbiAgaGVhZGVyLmFwcGVuZENoaWxkKG5hdkJhcilcblxuICByZXR1cm4gaGVhZGVyXG59KSgpXG5cbmV4cG9ydCBkZWZhdWx0IE5hdmJhclxuIiwiaW1wb3J0IEljb24gZnJvbSAnLi9JY29uJ1xuaW1wb3J0IEFkZEljb25TdmcgZnJvbSAnLi4vLi4vLi4vYXNzZXRzL2ljb25zL3BsdXMuc3ZnJ1xuXG5jb25zdCBBZGRJY29uID0gKGNsYXNzZXMpID0+IEljb24oQWRkSWNvblN2ZywgY2xhc3NlcylcbmV4cG9ydCBkZWZhdWx0IEFkZEljb25cbiIsImNvbnN0IEljb24gPSAoc3ZnLCBjbGFzc2VzKSA9PiB7XG4gIGNvbnN0IHN2Z0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIHN2Z0NvbnRhaW5lci5jbGFzc05hbWUgPSBjbGFzc2VzXG4gIHN2Z0NvbnRhaW5lci5pbm5lckhUTUwgPSBzdmdcblxuICByZXR1cm4gc3ZnQ29udGFpbmVyXG59XG5cbmV4cG9ydCBkZWZhdWx0IEljb25cbiIsImltcG9ydCBJY29uIGZyb20gJy4vSWNvbidcbmltcG9ydCBJbmJveEljb25TdmcgZnJvbSAnLi4vLi4vLi4vYXNzZXRzL2ljb25zL2luYm94LnN2ZydcblxuY29uc3QgSW5ib3hJY29uID0gKGNsYXNzZXMpID0+IEljb24oSW5ib3hJY29uU3ZnLCBjbGFzc2VzKVxuZXhwb3J0IGRlZmF1bHQgSW5ib3hJY29uXG4iLCJpbXBvcnQgSWNvbiBmcm9tICcuL0ljb24nXG5pbXBvcnQgTWVudUljb25TdmcgZnJvbSAnLi4vLi4vLi4vYXNzZXRzL2ljb25zL21lbnUuc3ZnJ1xuXG5jb25zdCBNZW51SWNvbiA9IChjbGFzc2VzKSA9PiBJY29uKE1lbnVJY29uU3ZnLCBjbGFzc2VzKVxuZXhwb3J0IGRlZmF1bHQgTWVudUljb25cbiIsImltcG9ydCBJY29uIGZyb20gJy4vSWNvbidcbmltcG9ydCBNb3JlSWNvblN2ZyBmcm9tICcuLi8uLi8uLi9hc3NldHMvaWNvbnMvbW9yZS5zdmcnXG5cbmNvbnN0IE1vcmVJY29uID0gKGNsYXNzZXMpID0+IEljb24oTW9yZUljb25TdmcsIGNsYXNzZXMpXG5leHBvcnQgZGVmYXVsdCBNb3JlSWNvblxuIiwiaW1wb3J0IEljb24gZnJvbSAnLi9JY29uJ1xuaW1wb3J0IE5leHREYXlzSWNvblN2ZyBmcm9tICcuLi8uLi8uLi9hc3NldHMvaWNvbnMvbmV4dC03LWRheXMuc3ZnJ1xuXG5jb25zdCBOZXh0RGF5c0ljb24gPSAoY2xhc3NlcykgPT4gSWNvbihOZXh0RGF5c0ljb25TdmcsIGNsYXNzZXMpXG5leHBvcnQgZGVmYXVsdCBOZXh0RGF5c0ljb25cbiIsImltcG9ydCBJY29uIGZyb20gJy4vSWNvbidcbmltcG9ydCBEb25lSWNvblN2ZyBmcm9tICcuLi8uLi8uLi9hc3NldHMvaWNvbnMvdGFza3MvZG9uZS5zdmcnXG5pbXBvcnQgTm9uZUljb25TdmcgZnJvbSAnLi4vLi4vLi4vYXNzZXRzL2ljb25zL3Rhc2tzL25vbmUuc3ZnJ1xuaW1wb3J0IFNtYWxsSWNvblN2ZyBmcm9tICcuLi8uLi8uLi9hc3NldHMvaWNvbnMvdGFza3Mvc21hbGwuc3ZnJ1xuaW1wb3J0IE1lZGl1bUljb25TdmcgZnJvbSAnLi4vLi4vLi4vYXNzZXRzL2ljb25zL3Rhc2tzL21lZGl1bS5zdmcnXG5pbXBvcnQgSGlnaEljb25TdmcgZnJvbSAnLi4vLi4vLi4vYXNzZXRzL2ljb25zL3Rhc2tzL2hpZ2guc3ZnJ1xuXG5jb25zdCBpY29ucyA9IHtcbiAgZG9uZTogRG9uZUljb25TdmcsXG4gIG5vbmU6IE5vbmVJY29uU3ZnLFxuICBsb3c6IFNtYWxsSWNvblN2ZyxcbiAgbWVkaXVtOiBNZWRpdW1JY29uU3ZnLFxuICBoaWdoOiBIaWdoSWNvblN2Zyxcbn1cblxuY29uc3QgVGFza1N0YXR1c0ljb24gPSAodHlwZSwgY2xhc3NlcykgPT4gSWNvbihpY29uc1t0eXBlXSwgY2xhc3NlcylcblxuZXhwb3J0IGRlZmF1bHQgVGFza1N0YXR1c0ljb25cbiIsImltcG9ydCBJY29uIGZyb20gJy4vSWNvbidcbmltcG9ydCBUb2RheUljb25TdmcgZnJvbSAnLi4vLi4vLi4vYXNzZXRzL2ljb25zL3RvZGF5LnN2ZydcblxuY29uc3QgVG9kYXlJY29uID0gKGNsYXNzZXMpID0+IEljb24oVG9kYXlJY29uU3ZnLCBjbGFzc2VzKVxuZXhwb3J0IGRlZmF1bHQgVG9kYXlJY29uXG4iLCJjb25zdCBDdXJyZW50TWVudU9wdGlvbiA9ICgoKSA9PiB7XG4gIGxldCBlbGVtZW50ID0gbnVsbFxuXG4gIGNvbnN0IGdldEVsZW1lbnQgPSAoKSA9PiBlbGVtZW50XG4gIGNvbnN0IHNldEVsZW1lbnQgPSAobmV3RWxlbWVudCkgPT4gKGVsZW1lbnQgPSBuZXdFbGVtZW50KVxuXG4gIHJldHVybiB7IGdldEVsZW1lbnQsIHNldEVsZW1lbnQgfVxufSkoKVxuXG5leHBvcnQgZGVmYXVsdCBDdXJyZW50TWVudU9wdGlvblxuIiwiaW1wb3J0IE1lbnVPcHRpb25zIGZyb20gJy4vb3B0aW9uL01lbnVPcHRpb25zJ1xuaW1wb3J0IE1lbnVUYWdzIGZyb20gJy4vdGFnL01lbnVUYWdzJ1xuaW1wb3J0IERpdmlkZXIgZnJvbSAnLi4vRGl2aWRlcidcbmltcG9ydCBNZW51UHJpb3JpdGllcyBmcm9tICcuL3ByaW9yaXR5L01lbnVQcmlvcml0aWVzJ1xuaW1wb3J0IFRhc2tzIGZyb20gJy4uLy4uL2RhdGEvdGFza3MnXG5pbXBvcnQgQ3VycmVudE1lbnVPcHRpb24gZnJvbSAnLi9DdXJyZW50TWVudU9wdGlvbidcblxuY29uc3QgTWVudSA9ICgoKSA9PiB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhc2lkZScpXG4gIGVsZW1lbnQuY2xhc3NOYW1lID0gJ21lbnUnXG5cbiAgZWxlbWVudC5hcHBlbmRDaGlsZChNZW51T3B0aW9ucy5lbGVtZW50KVxuICBlbGVtZW50LmFwcGVuZENoaWxkKERpdmlkZXIoKSlcbiAgZWxlbWVudC5hcHBlbmRDaGlsZChNZW51VGFncy5lbGVtZW50KVxuICBlbGVtZW50LmFwcGVuZENoaWxkKERpdmlkZXIoKSlcbiAgZWxlbWVudC5hcHBlbmRDaGlsZChNZW51UHJpb3JpdGllcy5lbGVtZW50KVxuXG4gIGNvbnN0IGNsZWFuQWN0aXZlcyA9ICgpID0+IHtcbiAgICBmb3IgKGxldCBvcHRpb24gb2YgTWVudU9wdGlvbnMubWVudU9wdGlvbnMpIHtcbiAgICAgIG9wdGlvbi5yZW1vdmVBY3RpdmVDbGFzcygpXG4gICAgfVxuXG4gICAgZm9yIChsZXQgdGFnIG9mIE1lbnVUYWdzLnRhZ0VsZW1lbnRzKSB7XG4gICAgICB0YWcucmVtb3ZlQWN0aXZlQ2xhc3MoKVxuICAgIH1cblxuICAgIGZvciAobGV0IHByaW9yaXR5IG9mIE1lbnVQcmlvcml0aWVzLnByaW9yaXR5RWxlbWVudHMpIHtcbiAgICAgIHByaW9yaXR5LnJlbW92ZUFjdGl2ZUNsYXNzKClcbiAgICB9XG4gIH1cblxuICBjb25zdCB1cGRhdGVUYXNrcyA9ICgpID0+IHtcbiAgICBjb25zdCB0YXNrcyA9IFRhc2tzLmdldFNvcnRlZFRhc2tzKClcblxuICAgIE1lbnVPcHRpb25zLnVwZGF0ZVRhc2tzKHRhc2tzKVxuICAgIE1lbnVUYWdzLnVwZGF0ZVRhc2tzKHRhc2tzKVxuICAgIE1lbnVQcmlvcml0aWVzLnVwZGF0ZVRhc2tzKHRhc2tzKVxuXG4gICAgY29uc3QgY3VycmVudE1lbnVPcHRpb24gPSBDdXJyZW50TWVudU9wdGlvbi5nZXRFbGVtZW50KClcbiAgICBpZiAoY3VycmVudE1lbnVPcHRpb24pIGN1cnJlbnRNZW51T3B0aW9uLmNsaWNrKClcbiAgfVxuXG4gIGNvbnN0IHRvZ2dsZUhpZGUgPSAoKSA9PiB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKVxuICB9XG5cbiAgcmV0dXJuIHsgZWxlbWVudCwgdG9nZ2xlSGlkZSwgY2xlYW5BY3RpdmVzLCB1cGRhdGVUYXNrcyB9XG59KSgpXG5cbmV4cG9ydCBkZWZhdWx0IE1lbnVcbiIsImNvbnN0IE1lbnVUaXRsZSA9ICh0aXRsZSkgPT4ge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKVxuICBlbGVtZW50LmNsYXNzTmFtZSA9ICdtZW51X190aXRsZSdcbiAgZWxlbWVudC50ZXh0Q29udGVudCA9IHRpdGxlXG5cbiAgcmV0dXJuIGVsZW1lbnRcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWVudVRpdGxlXG4iLCJpbXBvcnQgVGFza3NWaWV3IGZyb20gJy4uLy4uL3Rhc2svVGFza3NWaWV3J1xuaW1wb3J0IEN1cnJlbnRNZW51T3B0aW9uIGZyb20gJy4uL0N1cnJlbnRNZW51T3B0aW9uJ1xuXG5jb25zdCBNZW51T3B0aW9uID0gKGljb24sIHRpdGxlLCB0YXNrcykgPT4ge1xuICBsZXQgc29ydGVkVGFza3MgPSB0YXNrc1xuXG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBlbGVtZW50LmNsYXNzTmFtZSA9ICdtZW51X19vcHRpb24nXG5cbiAgY29uc3QgdGl0bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKVxuICB0aXRsZUVsZW1lbnQuY2xhc3NOYW1lID0gJ21lbnVfX29wdGlvbl9fdGl0bGUnXG4gIHRpdGxlRWxlbWVudC50ZXh0Q29udGVudCA9IHRpdGxlXG5cbiAgY29uc3QgYWRkQWN0aXZlQ2xhc3MgPSAoKSA9PiB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdtZW51X19vcHRpb24tLWFjdGl2ZScpXG4gIH1cblxuICBjb25zdCByZW1vdmVBY3RpdmVDbGFzcyA9ICgpID0+IHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ21lbnVfX29wdGlvbi0tYWN0aXZlJylcbiAgfVxuXG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQoaWNvbilcbiAgZWxlbWVudC5hcHBlbmRDaGlsZCh0aXRsZUVsZW1lbnQpXG5cbiAgY29uc3QgYWRkQ2xpY2tFdmVudCA9IChjbGlja0V2ZW50KSA9PiB7XG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgICAgY2xpY2tFdmVudCgpXG4gICAgICBUYXNrc1ZpZXcuZ2VuZXJhdGVUYXNrcyh0aXRsZSwgLTEsIHNvcnRlZFRhc2tzKVxuICAgICAgQ3VycmVudE1lbnVPcHRpb24uc2V0RWxlbWVudChlbGVtZW50KVxuICAgIH0pXG4gIH1cblxuICBjb25zdCB1cGRhdGVUYXNrcyA9ICh1cGRhdGVkVGFza3MpID0+IChzb3J0ZWRUYXNrcyA9IHVwZGF0ZWRUYXNrcylcblxuICByZXR1cm4ge1xuICAgIGVsZW1lbnQsXG4gICAgYWRkQWN0aXZlQ2xhc3MsXG4gICAgcmVtb3ZlQWN0aXZlQ2xhc3MsXG4gICAgYWRkQ2xpY2tFdmVudCxcbiAgICB1cGRhdGVUYXNrcyxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNZW51T3B0aW9uXG4iLCJpbXBvcnQgSW5ib3hJY29uIGZyb20gJy4uLy4uL2ljb25zL0luYm94SWNvbidcbmltcG9ydCBUb2RheUljb24gZnJvbSAnLi4vLi4vaWNvbnMvVG9kYXlJY29uJ1xuaW1wb3J0IE5leHREYXlzSWNvbiBmcm9tICcuLi8uLi9pY29ucy9OZXh0RGF5c0ljb24nXG5pbXBvcnQgTWVudU9wdGlvbiBmcm9tICcuL01lbnVPcHRpb24nXG5pbXBvcnQgTWVudSBmcm9tICcuLi9NZW51J1xuaW1wb3J0IFRhc2tzIGZyb20gJy4uLy4uLy4uL2RhdGEvdGFza3MnXG5cbmNvbnN0IE1lbnVPcHRpb25zID0gKCgpID0+IHtcbiAgY29uc3QgaWNvbkNsYXNzID0gJ21lbnVfX29wdGlvbl9faWNvbidcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cbiAgY29uc3QgZmlsdGVyRnVuY3Rpb25zID0gW1xuICAgICh1cGRhdGVkVGFza3MpID0+XG4gICAgICB1cGRhdGVkVGFza3MuZmlsdGVyKFxuICAgICAgICAodGFzaykgPT4gdGFzay50YWdJZCA8IDAgJiYgdGFzay5wcmlvcml0eUlkIDwgMCAmJiB0YXNrLmR1ZURhdGUgPT0gbnVsbFxuICAgICAgKSxcbiAgICAodXBkYXRlZFRhc2tzKSA9PlxuICAgICAgdXBkYXRlZFRhc2tzLmZpbHRlcigodGFzaykgPT4ge1xuICAgICAgICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKClcbiAgICAgICAgY3VycmVudERhdGUuc2V0SG91cnMoMCwgMCwgMCwgMClcbiAgICAgICAgcmV0dXJuIHRhc2suZHVlRGF0ZSAmJiB0YXNrLmR1ZURhdGUuZ2V0RGF0ZSgpIDw9IGN1cnJlbnREYXRlLmdldERhdGUoKVxuICAgICAgfSksXG4gICAgKHVwZGF0ZWRUYXNrcykgPT5cbiAgICAgIHVwZGF0ZWRUYXNrcy5maWx0ZXIoKHRhc2spID0+IHtcbiAgICAgICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSgpXG4gICAgICAgIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSArIDcpXG4gICAgICAgIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMClcblxuICAgICAgICByZXR1cm4gdGFzay5kdWVEYXRlICYmIHRhc2suZHVlRGF0ZS5nZXREYXRlKCkgPD0gZGF0ZS5nZXREYXRlKClcbiAgICAgIH0pLFxuICBdXG5cbiAgbGV0IHRhc2tzID0gVGFza3MuZ2V0U29ydGVkVGFza3MoKVxuICBjb25zdCBtZW51T3B0aW9ucyA9IFtcbiAgICBNZW51T3B0aW9uKEluYm94SWNvbihpY29uQ2xhc3MpLCAnSW5ib3gnLCBmaWx0ZXJGdW5jdGlvbnNbMF0odGFza3MpKSxcbiAgICBNZW51T3B0aW9uKFRvZGF5SWNvbihpY29uQ2xhc3MpLCAnVG9kYXknLCBmaWx0ZXJGdW5jdGlvbnNbMV0odGFza3MpKSxcbiAgICBNZW51T3B0aW9uKFxuICAgICAgTmV4dERheXNJY29uKGljb25DbGFzcyksXG4gICAgICAnTmV4dCA3IGRheXMnLFxuICAgICAgZmlsdGVyRnVuY3Rpb25zWzJdKHRhc2tzKVxuICAgICksXG4gIF1cbiAgZWxlbWVudC5jbGFzc05hbWUgPSAnbWVudV9fb3B0aW9ucydcblxuICBtZW51T3B0aW9ucy5mb3JFYWNoKChtZW51T3B0aW9uKSA9PiB7XG4gICAgbWVudU9wdGlvbi5hZGRDbGlja0V2ZW50KCgpID0+IHtcbiAgICAgIE1lbnUuY2xlYW5BY3RpdmVzKClcbiAgICAgIG1lbnVPcHRpb24uYWRkQWN0aXZlQ2xhc3MoKVxuICAgIH0pXG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChtZW51T3B0aW9uLmVsZW1lbnQpXG4gIH0pXG5cbiAgY29uc3QgdXBkYXRlVGFza3MgPSAodXBkYXRlZFRhc2tzKSA9PiB7XG4gICAgdGFza3MgPSB1cGRhdGVkVGFza3NcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWVudU9wdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIG1lbnVPcHRpb25zW2ldLnVwZGF0ZVRhc2tzKGZpbHRlckZ1bmN0aW9uc1tpXSh0YXNrcykpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHsgZWxlbWVudCwgbWVudU9wdGlvbnMsIHVwZGF0ZVRhc2tzIH1cbn0pKClcblxuZXhwb3J0IGRlZmF1bHQgTWVudU9wdGlvbnNcbiIsImltcG9ydCBUYXNrcyBmcm9tICcuLi8uLi8uLi9kYXRhL3Rhc2tzJ1xuaW1wb3J0IE1lbnUgZnJvbSAnLi4vTWVudSdcbmltcG9ydCBNZW51VGl0bGUgZnJvbSAnLi4vTWVudVRpdGxlJ1xuaW1wb3J0IE1lbnVQcmlvcml0eSBmcm9tICcuL01lbnVQcmlvcml0eSdcblxuY29uc3QgTWVudVByaW9yaXRpZXMgPSAoKCkgPT4ge1xuICBjb25zdCBwcmlvcml0aWVzID0gW1xuICAgIHsgaWQ6IDAsIGNvbG9yOiAnIzk0RDgyRCcsIHRpdGxlOiAnTG93JyB9LFxuICAgIHsgaWQ6IDEsIGNvbG9yOiAnI0ZDQzQxOScsIHRpdGxlOiAnTWVkaXVtJyB9LFxuICAgIHsgaWQ6IDIsIGNvbG9yOiAnI0ZGNkI2QicsIHRpdGxlOiAnSGlnaCcgfSxcbiAgXVxuICBjb25zdCBwcmlvcml0eUVsZW1lbnRzID0gW11cblxuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgZWxlbWVudC5jbGFzc05hbWUgPSAnbWVudV9fcHJpb3JpdGllcy1jb250YWluZXInXG5cbiAgY29uc3QgZmlsdGVyID0gKHRhc2tzLCBwcmlvcml0eSkgPT5cbiAgICB0YXNrcy5maWx0ZXIoKHRhc2spID0+IHRhc2sucHJpb3JpdHlJZCA9PSBwcmlvcml0eS5pZClcblxuICBjb25zdCBnZW5lcmF0ZVByaW9yaXRpZXMgPSAoKSA9PiB7XG4gICAgY29uc3QgcHJpb3JpdGllc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgcHJpb3JpdGllc0NvbnRhaW5lci5jbGFzc05hbWUgPSAnbWVudV9fcHJpb3JpdGllcydcblxuICAgIGZvciAobGV0IHByaW9yaXR5IG9mIHByaW9yaXRpZXMpIHtcbiAgICAgIGNvbnN0IHByaW9yaXR5RWxlbWVudCA9IE1lbnVQcmlvcml0eShcbiAgICAgICAgcHJpb3JpdHksXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICBNZW51LmNsZWFuQWN0aXZlcygpXG4gICAgICAgICAgcHJpb3JpdHlFbGVtZW50LmFkZEFjdGl2ZUNsYXNzKClcbiAgICAgICAgfSxcbiAgICAgICAgZmlsdGVyKFRhc2tzLmdldFNvcnRlZFRhc2tzKCksIHByaW9yaXR5KVxuICAgICAgKVxuXG4gICAgICBwcmlvcml0eUVsZW1lbnRzLnB1c2gocHJpb3JpdHlFbGVtZW50KVxuICAgICAgcHJpb3JpdGllc0NvbnRhaW5lci5hcHBlbmRDaGlsZChwcmlvcml0eUVsZW1lbnQuZWxlbWVudClcbiAgICB9XG5cbiAgICBlbGVtZW50LmlubmVySFRNTCA9ICcnXG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChNZW51VGl0bGUoJ1ByaW9yaXRpZXMnKSlcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKHByaW9yaXRpZXNDb250YWluZXIpXG4gIH1cbiAgZ2VuZXJhdGVQcmlvcml0aWVzKHByaW9yaXRpZXMpXG5cbiAgY29uc3QgZ2V0UHJpb3JpdHlCeUlkID0gKGlkKSA9PlxuICAgIHByaW9yaXRpZXMuZmluZCgocHJpb3JpdHkpID0+IHByaW9yaXR5LmlkID09IGlkKVxuXG4gIGNvbnN0IGNsZWFyQWN0aXZlcyA9ICgpID0+IHtcbiAgICBwcmlvcml0eUVsZW1lbnRzLmZvckVhY2goKHByaW9yaXR5RWxlbWVudCkgPT5cbiAgICAgIHByaW9yaXR5RWxlbWVudC5yZW1vdmVBY3RpdmVDbGFzcygpXG4gICAgKVxuICB9XG5cbiAgY29uc3QgdXBkYXRlVGFza3MgPSAodXBkYXRlZFRhc2tzKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcmlvcml0aWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBwcmlvcml0eUVsZW1lbnRzW2ldLnVwZGF0ZVRhc2tzKGZpbHRlcih1cGRhdGVkVGFza3MsIHByaW9yaXRpZXNbaV0pKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZWxlbWVudCxcbiAgICBjbGVhckFjdGl2ZXMsXG4gICAgZ2V0UHJpb3JpdHlCeUlkLFxuICAgIHByaW9yaXR5RWxlbWVudHMsXG4gICAgdXBkYXRlVGFza3MsXG4gIH1cbn0pKClcblxuZXhwb3J0IGRlZmF1bHQgTWVudVByaW9yaXRpZXNcbiIsImltcG9ydCBUYXNrc1ZpZXcgZnJvbSAnLi4vLi4vdGFzay9UYXNrc1ZpZXcnXG5pbXBvcnQgQ3VycmVudE1lbnVPcHRpb24gZnJvbSAnLi4vQ3VycmVudE1lbnVPcHRpb24nXG5cbmNvbnN0IE1lbnVQcmlvcml0eSA9ICh7IGlkLCBjb2xvciwgdGl0bGUgfSwgY2xpY2tFdmVudCwgdGFza3MpID0+IHtcbiAgbGV0IHNvcnRlZFRhc2tzID0gdGFza3NcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgaWQpXG4gIGVsZW1lbnQuY2xhc3NOYW1lID0gJ21lbnVfX3ByaW9yaXR5J1xuXG4gIGNvbnN0IGNvbG9yU3ltYm9sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgY29sb3JTeW1ib2wuY2xhc3NOYW1lID0gJ21lbnVfX2NvbG9yLXN5bWJvbCdcbiAgY29sb3JTeW1ib2wuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3JcblxuICBjb25zdCB0aXRsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpXG4gIHRpdGxlRWxlbWVudC5jbGFzc05hbWUgPSAnbWVudV9fcHJpb3JpdHlfX3RpdGxlJ1xuICB0aXRsZUVsZW1lbnQudGV4dENvbnRlbnQgPSB0aXRsZVxuXG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQoY29sb3JTeW1ib2wpXG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQodGl0bGVFbGVtZW50KVxuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgIGNsaWNrRXZlbnQoKVxuICAgIFRhc2tzVmlldy5nZW5lcmF0ZVRhc2tzKHRpdGxlLCAtMSwgc29ydGVkVGFza3MpXG4gICAgQ3VycmVudE1lbnVPcHRpb24uc2V0RWxlbWVudChlbGVtZW50KVxuICB9KVxuXG4gIGNvbnN0IGFkZEFjdGl2ZUNsYXNzID0gKCkgPT4ge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbWVudV9fcHJpb3JpdHktLWFjdGl2ZScpXG4gIH1cblxuICBjb25zdCByZW1vdmVBY3RpdmVDbGFzcyA9ICgpID0+IHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ21lbnVfX3ByaW9yaXR5LS1hY3RpdmUnKVxuICB9XG5cbiAgY29uc3QgdXBkYXRlVGFza3MgPSAodXBkYXRlZFRhc2tzKSA9PiAoc29ydGVkVGFza3MgPSB1cGRhdGVkVGFza3MpXG5cbiAgcmV0dXJuIHsgZWxlbWVudCwgYWRkQWN0aXZlQ2xhc3MsIHJlbW92ZUFjdGl2ZUNsYXNzLCB1cGRhdGVUYXNrcyB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1lbnVQcmlvcml0eVxuIiwiaW1wb3J0IE1vcmVJY29uIGZyb20gJy4uLy4uL2ljb25zL01vcmVJY29uJ1xuaW1wb3J0IFRhc2tzVmlldyBmcm9tICcuLi8uLi90YXNrL1Rhc2tzVmlldydcbmltcG9ydCBUYWdDb250ZXh0TWVudSBmcm9tICcuLi8uLi90YWcvVGFnQ29udGV4dE1lbnUnXG5pbXBvcnQgQ3VycmVudE1lbnVPcHRpb24gZnJvbSAnLi4vQ3VycmVudE1lbnVPcHRpb24nXG5cbmNvbnN0IE1lbnVUYWcgPSAoeyBpZCwgY29sb3IsIHRpdGxlIH0sIGNsaWNrRXZlbnQsIHRhc2tzKSA9PiB7XG4gIGxldCBzb3J0ZWRUYXNrcyA9IHRhc2tzXG5cbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgaWQpXG4gIGVsZW1lbnQuY2xhc3NOYW1lID0gJ21lbnVfX3RhZydcblxuICBjb25zdCBjb2xvclN5bWJvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGNvbG9yU3ltYm9sLmNsYXNzTmFtZSA9ICdtZW51X19jb2xvci1zeW1ib2wnXG4gIGNvbG9yU3ltYm9sLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yXG5cbiAgY29uc3QgdGl0bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKVxuICB0aXRsZUVsZW1lbnQuY2xhc3NOYW1lID0gJ21lbnVfX3RhZ19fdGl0bGUnXG4gIHRpdGxlRWxlbWVudC50ZXh0Q29udGVudCA9IHRpdGxlXG5cbiAgY29uc3QgbW9yZUljb24gPSBNb3JlSWNvbignbWVudV9fdGFnX19pY29uIG1lbnVfX3RhZ19faWNvbi0tbW9yZScpXG5cbiAgZWxlbWVudC5hcHBlbmRDaGlsZChjb2xvclN5bWJvbClcbiAgZWxlbWVudC5hcHBlbmRDaGlsZCh0aXRsZUVsZW1lbnQpXG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQobW9yZUljb24pXG5cbiAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICBpZiAoZS50YXJnZXQgPT0gbW9yZUljb24gfHwgbW9yZUljb24uY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICBUYWdDb250ZXh0TWVudS5nZW5lcmF0ZU1lbnUoaWQsIGUueCwgZS55KVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGNsaWNrRXZlbnQoKVxuICAgIFRhc2tzVmlldy5nZW5lcmF0ZVRhc2tzKHRpdGxlLCBpZCwgc29ydGVkVGFza3MpXG4gICAgQ3VycmVudE1lbnVPcHRpb24uc2V0RWxlbWVudChlbGVtZW50KVxuICB9KVxuXG4gIGNvbnN0IGFkZEFjdGl2ZUNsYXNzID0gKCkgPT4ge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbWVudV9fdGFnLS1hY3RpdmUnKVxuICB9XG5cbiAgY29uc3QgcmVtb3ZlQWN0aXZlQ2xhc3MgPSAoKSA9PiB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdtZW51X190YWctLWFjdGl2ZScpXG4gIH1cblxuICBjb25zdCB1cGRhdGVUYXNrcyA9ICh1cGRhdGVkVGFza3MpID0+IChzb3J0ZWRUYXNrcyA9IHVwZGF0ZWRUYXNrcylcblxuICByZXR1cm4geyBlbGVtZW50LCBhZGRBY3RpdmVDbGFzcywgcmVtb3ZlQWN0aXZlQ2xhc3MsIHVwZGF0ZVRhc2tzIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTWVudVRhZ1xuIiwiaW1wb3J0IEVtcHR5TWVzc2FnZSBmcm9tICcuLi8uLi9FbXB0eU1lc3NhZ2UnXG5pbXBvcnQgTWVudVRpdGxlIGZyb20gJy4uL01lbnVUaXRsZSdcbmltcG9ydCBNZW51VGFnIGZyb20gJy4vTWVudVRhZydcbmltcG9ydCBOZXdUYWdCdG4gZnJvbSAnLi9OZXdUYWdCdG4nXG5pbXBvcnQgTWVudSBmcm9tICcuLi9NZW51J1xuaW1wb3J0IFRhc2tzIGZyb20gJy4uLy4uLy4uL2RhdGEvdGFza3MnXG5pbXBvcnQgVGFncyBmcm9tICcuLi8uLi8uLi9kYXRhL3RhZ3MnXG5pbXBvcnQgTmV3VGFza0Zvcm0gZnJvbSAnLi4vLi4vdGFzay9OZXdUYXNrRm9ybSdcblxuY29uc3QgTWVudVRhZ3MgPSAoKCkgPT4ge1xuICBsZXQgdGFnRWxlbWVudHMgPSBbXVxuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgZWxlbWVudC5jbGFzc05hbWUgPSAnbWVudV9fdGFncy1jb250YWluZXInXG5cbiAgY29uc3QgZmlsdGVyID0gKHRhc2tzLCB0YWcpID0+IHRhc2tzLmZpbHRlcigodGFzaykgPT4gdGFzay50YWdJZCA9PSB0YWcuaWQpXG5cbiAgY29uc3QgZ2VuZXJhdGVUYWdzID0gKHRhZ3MpID0+IHtcbiAgICBlbGVtZW50LmlubmVySFRNTCA9ICcnXG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChNZW51VGl0bGUoJ1RhZ3MnKSlcbiAgICB0YWdFbGVtZW50cyA9IFtdXG5cbiAgICBpZiAodGFncy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCB0YWdzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgIHRhZ3NDb250YWluZXIuY2xhc3NOYW1lID0gJ21lbnVfX3RhZ3MnXG5cbiAgICAgIGZvciAobGV0IHRhZyBvZiB0YWdzKSB7XG4gICAgICAgIGNvbnN0IHRhZ0VsZW1lbnQgPSBNZW51VGFnKFxuICAgICAgICAgIHRhZyxcbiAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICBNZW51LmNsZWFuQWN0aXZlcygpXG4gICAgICAgICAgICB0YWdFbGVtZW50LmFkZEFjdGl2ZUNsYXNzKClcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZpbHRlcihUYXNrcy5nZXRTb3J0ZWRUYXNrcygpLCB0YWcpXG4gICAgICAgIClcblxuICAgICAgICB0YWdFbGVtZW50cy5wdXNoKHRhZ0VsZW1lbnQpXG4gICAgICAgIHRhZ3NDb250YWluZXIuYXBwZW5kQ2hpbGQodGFnRWxlbWVudC5lbGVtZW50KVxuICAgICAgfVxuXG4gICAgICBlbGVtZW50LmFwcGVuZENoaWxkKHRhZ3NDb250YWluZXIpXG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoXG4gICAgICAgIEVtcHR5TWVzc2FnZShcbiAgICAgICAgICBcIkl0J3MgcHJldHR5IGVtcHR5IGhlcmUg8J+YlS4gTGV0J3MgYWRkIGEgbmV3IHRhZyB3aXRoIHRoZSBidXR0b24gYmVsb3chXCJcbiAgICAgICAgKVxuICAgICAgKVxuICAgIH1cbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKFxuICAgICAgTmV3VGFnQnRuKCh0YWcpID0+IHtcbiAgICAgICAgVGFncy5hZGRUYWcodGFnKVxuICAgICAgICBOZXdUYXNrRm9ybS51cGRhdGVUYWdzKFRhZ3MuZ2V0VGFncygpKVxuXG4gICAgICAgIGdlbmVyYXRlVGFncyhUYWdzLmdldFRhZ3MoKSlcbiAgICAgIH0pXG4gICAgKVxuICB9XG4gIGdlbmVyYXRlVGFncyhUYWdzLmdldFRhZ3MoKSlcblxuICBjb25zdCB1cGRhdGVUYXNrcyA9ICh1cGRhdGVkVGFza3MpID0+IHtcbiAgICBjb25zdCB0YWdzID0gVGFncy5nZXRUYWdzKClcblxuICAgIGlmICh0YWdzLmxlbmd0aCA+IDApIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFncy5sZW5ndGg7IGkrKykge1xuICAgICAgICB0YWdFbGVtZW50c1tpXS51cGRhdGVUYXNrcyhmaWx0ZXIodXBkYXRlZFRhc2tzLCB0YWdzW2ldKSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4geyBlbGVtZW50LCBnZW5lcmF0ZVRhZ3MsIHRhZ0VsZW1lbnRzLCB1cGRhdGVUYXNrcyB9XG59KSgpXG5cbmV4cG9ydCBkZWZhdWx0IE1lbnVUYWdzXG4iLCJpbXBvcnQgQWRkSWNvbiBmcm9tICcuLi8uLi9pY29ucy9BZGRJY29uJ1xuaW1wb3J0IENvbG9yUGlja2VyIGZyb20gJy4uLy4uL0NvbG9yUGlja2VyJ1xuXG5jb25zdCBOZXdUYWdCdG4gPSAoc3VibWl0RXZlbnQpID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGVsZW1lbnQuY2xhc3NOYW1lID0gJ21lbnVfX25ldy10YWcnXG5cbiAgY29uc3QgZ2VuZXJhdGVCdXR0b24gPSAoKSA9PiB7XG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBidG4uY2xhc3NMaXN0ID0gJ21lbnVfX25ldy10YWdfX2J0biBtZW51X19uZXctdGFnX19idG4tLW5ldydcblxuICAgIGNvbnN0IGg0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKVxuICAgIGg0LmNsYXNzTmFtZSA9ICdtZW51X19uZXctdGFnX19idG5fX3RpdGxlJ1xuICAgIGg0LnRleHRDb250ZW50ID0gJ0NyZWF0ZSBuZXcgdGFnJ1xuXG4gICAgYnRuLmFwcGVuZENoaWxkKEFkZEljb24oJ21lbnVfX25ldy10YWdfX2J0bl9faWNvbicpKVxuICAgIGJ0bi5hcHBlbmRDaGlsZChoNClcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBnZW5lcmF0ZUZvcm0pXG5cbiAgICBlbGVtZW50LmlubmVySFRNTCA9ICcnXG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChidG4pXG4gIH1cblxuICBjb25zdCBnZW5lcmF0ZUZvcm0gPSAoKSA9PiB7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKVxuICAgIGZvcm0uY2xhc3NOYW1lID0gJ21lbnVfX25ldy10YWdfX2Zvcm0nXG5cbiAgICBjb25zdCBjb2xvclBpY2tlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgY29sb3JQaWNrZXIuY2xhc3NOYW1lID0gJ21lbnVfX25ldy10YWdfX3BpY2tlcidcblxuICAgIGNvbnN0IGN1cnJlbnRDb2xvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY3VycmVudENvbG9yLmNsYXNzTmFtZSA9ICdtZW51X19uZXctdGFnX19waWNrZXJfX2N1cnJlbnQnXG4gICAgY3VycmVudENvbG9yLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjZmY2YjZiJ1xuICAgIGN1cnJlbnRDb2xvci5zZXRBdHRyaWJ1dGUoJ2RhdGEtY29sb3InLCAnI2ZmNmI2YicpXG5cbiAgICBjb2xvclBpY2tlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgIENvbG9yUGlja2VyLmdlbmVyYXRlKGN1cnJlbnRDb2xvciwgZS54LCBlLmNsaWVudFkpXG4gICAgfSlcbiAgICBjb2xvclBpY2tlci5hcHBlbmRDaGlsZChjdXJyZW50Q29sb3IpXG5cbiAgICBjb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgbmFtZUlucHV0LmNsYXNzTmFtZSA9ICdtZW51X19uZXctdGFnX19mb3JtX19pbnB1dCdcbiAgICBuYW1lSW5wdXQudHlwZSA9ICd0ZXh0J1xuICAgIG5hbWVJbnB1dC5wbGFjZWhvbGRlciA9ICdUYWcgbmFtZSdcbiAgICBuYW1lSW5wdXQucmVxdWlyZWQgPSB0cnVlXG4gICAgbmFtZUlucHV0Lm1heExlbmd0aCA9IDE1XG5cbiAgICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIHN1Ym1pdEJ0bi5jbGFzc05hbWUgPSAnbWVudV9fbmV3LXRhZ19fYnRuIG1lbnVfX25ldy10YWdfX2J0bi0tc3VibWl0J1xuICAgIHN1Ym1pdEJ0bi50eXBlID0gJ3N1Ym1pdCdcbiAgICBzdWJtaXRCdG4udGV4dENvbnRlbnQgPSAnQWRkJ1xuXG4gICAgZm9ybS5hcHBlbmRDaGlsZChjb2xvclBpY2tlcilcbiAgICBmb3JtLmFwcGVuZENoaWxkKG5hbWVJbnB1dClcbiAgICBmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdEJ0bilcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgICAgZ2VuZXJhdGVCdXR0b24oKVxuICAgICAgc3VibWl0RXZlbnQoe1xuICAgICAgICBjb2xvcjogY3VycmVudENvbG9yLmdldEF0dHJpYnV0ZSgnZGF0YS1jb2xvcicpLFxuICAgICAgICB0aXRsZTogbmFtZUlucHV0LnZhbHVlLFxuICAgICAgfSlcbiAgICB9KVxuXG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSAnJ1xuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZm9ybSlcbiAgfVxuXG4gIGdlbmVyYXRlQnV0dG9uKClcbiAgcmV0dXJuIGVsZW1lbnRcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmV3VGFnQnRuXG4iLCJjb25zdCBUYWdDb250ZXh0TWVudSA9ICgoKSA9PiB7XG4gIGxldCB0YWdJZCA9IC0xXG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBlbGVtZW50LmNsYXNzTmFtZSA9ICd0YWctbWVudSBoaWRkZW4nXG5cbiAgY29uc3QgaDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpXG4gIGg0LmNsYXNzTmFtZSA9ICd0YWctbWVudV9fdGl0bGUnXG4gIGg0LnRleHRDb250ZW50ID0gJ1NlbGVjdCBhY3Rpb246J1xuXG4gIGNvbnN0IGVkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICBlZGl0QnRuLmNsYXNzTmFtZSA9ICd0YWctbWVudV9fYnRuIHRhZy1tZW51X19idG4tLWVkaXQnXG4gIGVkaXRCdG4udGV4dENvbnRlbnQgPSAnRWRpdCdcbiAgZWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAvLyBPcGVuIGVkaXQgcG9wdXBcbiAgICBoaWRlKClcbiAgfSlcblxuICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICBkZWxldGVCdG4uY2xhc3NOYW1lID0gJ3RhZy1tZW51X19idG4gdGFnLW1lbnVfX2J0bi0tZGVsZXRlJ1xuICBkZWxldGVCdG4udGV4dENvbnRlbnQgPSAnRGVsZXRlJ1xuICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgLy8gT3BlbiBkZWxldGUgcG9wdXBcbiAgICBoaWRlKClcbiAgfSlcblxuICBjb25zdCBnZW5lcmF0ZU1lbnUgPSAoaWQsIHgsIHkpID0+IHtcbiAgICB0YWdJZCA9IGlkXG4gICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKVxuICAgIGVsZW1lbnQuc3R5bGUudG9wID0gYCR7eX1weGBcbiAgICBlbGVtZW50LnN0eWxlLmxlZnQgPSBgJHt4IC0gZWxlbWVudC5jbGllbnRXaWR0aH1weGBcbiAgfVxuXG4gIGNvbnN0IGhpZGUgPSAoKSA9PiBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG5cbiAgZWxlbWVudC5hcHBlbmRDaGlsZChoNClcbiAgZWxlbWVudC5hcHBlbmRDaGlsZChlZGl0QnRuKVxuICBlbGVtZW50LmFwcGVuZENoaWxkKGRlbGV0ZUJ0bilcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldCAhPSBlbGVtZW50ICYmICFlbGVtZW50LmNvbnRhaW5zKGUudGFyZ2V0KSkgaGlkZSgpXG4gIH0pXG5cbiAgcmV0dXJuIHsgZWxlbWVudCwgZ2VuZXJhdGVNZW51IH1cbn0pKClcblxuZXhwb3J0IGRlZmF1bHQgVGFnQ29udGV4dE1lbnVcbiIsImltcG9ydCBUYWdzIGZyb20gJy4uLy4uL2RhdGEvdGFncydcbmltcG9ydCBUYXNrcyBmcm9tICcuLi8uLi9kYXRhL3Rhc2tzJ1xuaW1wb3J0IE1lbnUgZnJvbSAnLi4vbWVudS9NZW51J1xuXG5jb25zdCBOZXdUYXNrRm9ybSA9ICgoKSA9PiB7XG4gIGxldCB0YXNrID0gbnVsbFxuXG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBlbGVtZW50LmNsYXNzTmFtZSA9ICd0YXNrLWZvcm0gaGlkZGVuJ1xuXG4gIGNvbnN0IHNob3cgPSAoKSA9PiBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpXG4gIGNvbnN0IGhpZGUgPSAoKSA9PiBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG5cbiAgY29uc3QgcG9wdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBwb3B1cC5jbGFzc05hbWUgPSAndGFzay1mb3JtX19wb3B1cCdcblxuICBjb25zdCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbiAgaDIuY2xhc3NOYW1lID0gJ3Rhc2stZm9ybV9fdGl0bGUnXG5cbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKVxuICBmb3JtLmNsYXNzTmFtZSA9ICd0YXNrLWZvcm1fX2Zvcm0nXG5cbiAgY29uc3QgZm9ybUlucHV0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGZvcm1JbnB1dHMuY2xhc3NOYW1lID0gJ3Rhc2stZm9ybV9fZm9ybV9faW5wdXRzJ1xuXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICB0aXRsZS5jbGFzc0xpc3QgPSAndGFzay1mb3JtX19mb3JtX190aXRsZSdcbiAgdGl0bGUucGxhY2Vob2xkZXIgPSAnVGFzayBUaXRsZSdcbiAgdGl0bGUucmVxdWlyZWQgPSB0cnVlXG4gIHRpdGxlLm1heExlbmd0aCA9IDI1XG5cbiAgY29uc3QgZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJylcbiAgZGVzYy5jbGFzc0xpc3QgPSAndGFzay1mb3JtX19mb3JtX19kZXNjJ1xuICBkZXNjLnBsYWNlaG9sZGVyID0gJ0Rlc2NyaXB0aW9uIChPcHRpb25hbCknXG4gIGRlc2MubWF4TGVuZ3RoID0gMTQwXG5cbiAgZm9ybUlucHV0cy5hcHBlbmRDaGlsZCh0aXRsZSlcbiAgZm9ybUlucHV0cy5hcHBlbmRDaGlsZChkZXNjKVxuXG4gIGNvbnN0IGFkZGl0aW9uYWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgYWRkaXRpb25hbHMuY2xhc3NOYW1lID0gJ3Rhc2stZm9ybV9fZm9ybV9fb3B0aW9ucydcblxuICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zdWJzdHJpbmcoMCwgMTApXG4gIGRhdGUuY2xhc3NOYW1lID0gJ3Rhc2stZm9ybV9fZm9ybV9fZGF0ZSdcbiAgZGF0ZS50eXBlID0gJ2RhdGUnXG4gIGRhdGUubWluID0gY3VycmVudERhdGVcblxuICBjb25zdCB0YWdzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0JylcbiAgdGFncy5jbGFzc05hbWUgPSAndGFzay1mb3JtX19mb3JtX19zZWxlY3QnXG5cbiAgY29uc3QgdXBkYXRlVGFncyA9ICh0YWdzTGlzdCkgPT4ge1xuICAgIHRhZ3MuaW5uZXJIVE1MID0gJydcblxuICAgIGZvciAobGV0IHRhZyBvZiBbXG4gICAgICB7IGlkOiAtMiwgdGl0bGU6ICdUYWcgKE9wdGlvbmFsKScgfSxcbiAgICAgIHsgaWQ6IC0xLCB0aXRsZTogJ05vbmUnIH0sXG4gICAgICAuLi50YWdzTGlzdCxcbiAgICBdKSB7XG4gICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxuICAgICAgb3B0aW9uLnZhbHVlID0gdGFnLmlkXG4gICAgICBvcHRpb24udGV4dENvbnRlbnQgPSB0YWcudGl0bGVcblxuICAgICAgaWYgKHRhZy5pZCA9PT0gLTIpIHtcbiAgICAgICAgb3B0aW9uLmRpc2FibGVkID0gdHJ1ZVxuICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSB0cnVlXG4gICAgICB9XG5cbiAgICAgIHRhZ3MuYXBwZW5kQ2hpbGQob3B0aW9uKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHByaW9yaXRpZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKVxuICBwcmlvcml0aWVzLmNsYXNzTmFtZSA9ICd0YXNrLWZvcm1fX2Zvcm1fX3NlbGVjdCdcblxuICBjb25zdCB1cGRhdGVQcmlvcml0aWVzID0gKHByaW9yaXRpZXNMaXN0KSA9PiB7XG4gICAgcHJpb3JpdGllcy5pbm5lckhUTUwgPSAnJ1xuXG4gICAgZm9yIChsZXQgcHJpb3JpdHkgb2YgW1xuICAgICAgeyBpZDogLTIsIHRpdGxlOiAnUHJpb3JpdHkgKE9wdGlvbmFsKScgfSxcbiAgICAgIHsgaWQ6IC0xLCB0aXRsZTogJ05vbmUnIH0sXG4gICAgICAuLi5wcmlvcml0aWVzTGlzdCxcbiAgICBdKSB7XG4gICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxuICAgICAgb3B0aW9uLnZhbHVlID0gcHJpb3JpdHkuaWRcbiAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IHByaW9yaXR5LnRpdGxlXG5cbiAgICAgIGlmIChwcmlvcml0eS5pZCA9PT0gLTIpIHtcbiAgICAgICAgb3B0aW9uLmRpc2FibGVkID0gdHJ1ZVxuICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSB0cnVlXG4gICAgICB9XG5cbiAgICAgIHByaW9yaXRpZXMuYXBwZW5kQ2hpbGQob3B0aW9uKVxuICAgIH1cbiAgfVxuXG4gIGFkZGl0aW9uYWxzLmFwcGVuZENoaWxkKGRhdGUpXG4gIGFkZGl0aW9uYWxzLmFwcGVuZENoaWxkKHRhZ3MpXG4gIGFkZGl0aW9uYWxzLmFwcGVuZENoaWxkKHByaW9yaXRpZXMpXG5cbiAgY29uc3QgYnRucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGJ0bnMuY2xhc3NOYW1lID0gJ3Rhc2stZm9ybV9fZm9ybV9fYnRucydcblxuICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICBzdWJtaXRCdG4uY2xhc3NOYW1lID0gJ3Rhc2stZm9ybV9fZm9ybV9fYnRuIHRhc2stZm9ybV9fZm9ybV9fYnRuLS1zdWJtaXQnXG4gIHN1Ym1pdEJ0bi50eXBlID0gJ3N1Ym1pdCdcblxuICBjb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICBjYW5jZWxCdG4uY2xhc3NOYW1lID0gJ3Rhc2stZm9ybV9fZm9ybV9fYnRuIHRhc2stZm9ybV9fZm9ybV9fYnRuLS1jYW5jZWwnXG4gIGNhbmNlbEJ0bi50ZXh0Q29udGVudCA9ICdDYW5jZWwnXG4gIGNhbmNlbEJ0bi50eXBlID0gJ2J1dHRvbidcbiAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGlkZSlcblxuICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICBkZWxldGVCdG4uY2xhc3NOYW1lID0gJ3Rhc2stZm9ybV9fZm9ybV9fYnRuIHRhc2stZm9ybV9fZm9ybV9fYnRuLS1kZWxldGUnXG4gIGRlbGV0ZUJ0bi50ZXh0Q29udGVudCA9ICdEZWxldGUnXG4gIGRlbGV0ZUJ0bi50eXBlID0gJ2J1dHRvbidcbiAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmICh0YXNrICYmIHRhc2suaWQgPiAtMSkge1xuICAgICAgVGFza3MucmVtb3ZlVGFzayh0YXNrLmlkKVxuICAgICAgTWVudS51cGRhdGVUYXNrcygpXG4gICAgfVxuICAgIGhpZGUoKVxuICB9KVxuXG4gIGJ0bnMuYXBwZW5kQ2hpbGQoc3VibWl0QnRuKVxuICBidG5zLmFwcGVuZENoaWxkKGNhbmNlbEJ0bilcbiAgYnRucy5hcHBlbmRDaGlsZChkZWxldGVCdG4pXG5cbiAgZm9ybS5hcHBlbmRDaGlsZChmb3JtSW5wdXRzKVxuICBmb3JtLmFwcGVuZENoaWxkKGFkZGl0aW9uYWxzKVxuICBmb3JtLmFwcGVuZENoaWxkKGJ0bnMpXG5cbiAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuXG4gICAgY29uc3QgdGFza09iaiA9IHtcbiAgICAgIGlkOiB0YXNrICYmIHRhc2suaWQgPiAtMSA/IHRhc2suaWQgKyAxIDogVGFza3MuZ2V0TGFzdElkKCkgKyAxLFxuICAgICAgdGl0bGU6IHRpdGxlLnZhbHVlLFxuICAgICAgZGVzY3JpcHRpb246IGRlc2MudmFsdWUgPyBkZXNjLnZhbHVlIDogbnVsbCxcbiAgICAgIGR1ZURhdGU6IGRhdGUudmFsdWUgPyBuZXcgRGF0ZShkYXRlLnZhbHVlKSA6IG51bGwsXG4gICAgICBwcmlvcml0eUlkOiBwcmlvcml0aWVzLnZhbHVlID4gLTEgPyBwcmlvcml0aWVzLnZhbHVlIDogLTEsXG4gICAgICB0YWdJZDogdGFncy52YWx1ZSA+IC0xID8gdGFncy52YWx1ZSA6IC0xLFxuICAgICAgZG9uZTogdGFzayA/IHRhc2suZG9uZSA6IGZhbHNlLFxuICAgIH1cblxuICAgIGlmICh0YXNrICYmIHRhc2suaWQgPiAtMSkge1xuICAgICAgY29uc3QgaW5kZXggPSBUYXNrcy5nZXRUYXNrcygpLmZpbmRJbmRleCgodCkgPT4gdC5pZCA9PSB0YXNrLmlkKVxuICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgVGFza3MudXBkYXRlVGFzayhpbmRleCwgdGFza09iailcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgVGFza3MuYWRkVGFzayh0YXNrT2JqKVxuICAgIH1cbiAgICBNZW51LnVwZGF0ZVRhc2tzKClcbiAgICBoaWRlKClcbiAgfSlcblxuICBwb3B1cC5hcHBlbmRDaGlsZChoMilcbiAgcG9wdXAuYXBwZW5kQ2hpbGQoZm9ybSlcbiAgZWxlbWVudC5hcHBlbmRDaGlsZChwb3B1cClcblxuICBjb25zdCB1cGRhdGVGb3JtID0gKHRhc2tPYmopID0+IHtcbiAgICB0YXNrID0gdGFza09ialxuXG4gICAgaWYgKHRhc2spIHtcbiAgICAgIGgyLnRleHRDb250ZW50ID0gJ0VkaXQgdGFzazonXG4gICAgICBzdWJtaXRCdG4udGV4dENvbnRlbnQgPSAnRWRpdCdcbiAgICAgIGRlbGV0ZUJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKVxuXG4gICAgICB0aXRsZS52YWx1ZSA9IHRhc2sudGl0bGVcbiAgICAgIGRlc2MudmFsdWUgPSB0YXNrLmRlc2NyaXB0aW9uXG4gICAgICBpZiAodGFzay5kdWVEYXRlKSBkYXRlLnZhbHVlID0gdGFzay5kdWVEYXRlLnRvSVNPU3RyaW5nKCkuc3Vic3RyaW5nKDAsIDEwKVxuXG4gICAgICBwcmlvcml0aWVzLnZhbHVlID0gdGFzay5wcmlvcml0eUlkXG4gICAgICB0YWdzLnZhbHVlID0gdGFzay50YWdJZFxuICAgIH0gZWxzZSB7XG4gICAgICBoMi50ZXh0Q29udGVudCA9ICdBZGQgbmV3IHRhc2s6J1xuICAgICAgc3VibWl0QnRuLnRleHRDb250ZW50ID0gJ0FkZCdcbiAgICAgIGRlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuXG4gICAgICB0aXRsZS52YWx1ZSA9ICcnXG4gICAgICBkZXNjLnZhbHVlID0gJydcbiAgICAgIGRhdGUudmFsdWUgPSAnJ1xuXG4gICAgICBwcmlvcml0aWVzLnZhbHVlID0gLTJcbiAgICAgIHRhZ3MudmFsdWUgPSAtMlxuICAgIH1cbiAgICBzaG93KClcbiAgfVxuXG4gIHVwZGF0ZVRhZ3MoVGFncy5nZXRUYWdzKCkpXG4gIHVwZGF0ZVByaW9yaXRpZXMoW1xuICAgIHsgaWQ6IDAsIGNvbG9yOiAnIzk0RDgyRCcsIHRpdGxlOiAnTG93JyB9LFxuICAgIHsgaWQ6IDEsIGNvbG9yOiAnI0ZDQzQxOScsIHRpdGxlOiAnTWVkaXVtJyB9LFxuICAgIHsgaWQ6IDIsIGNvbG9yOiAnI0ZGNkI2QicsIHRpdGxlOiAnSGlnaCcgfSxcbiAgXSlcblxuICByZXR1cm4geyBlbGVtZW50LCB1cGRhdGVGb3JtLCBoaWRlLCB1cGRhdGVUYWdzIH1cbn0pKClcblxuZXhwb3J0IGRlZmF1bHQgTmV3VGFza0Zvcm1cbiIsImltcG9ydCBUYXNrU3RhdHVzSWNvbiBmcm9tICcuLi9pY29ucy9UYXNrU3RhdHVzSWNvbidcbmltcG9ydCBNZW51UHJpb3JpdGllcyBmcm9tICcuLi9tZW51L3ByaW9yaXR5L01lbnVQcmlvcml0aWVzJ1xuaW1wb3J0IGZvcm1hdERpc3RhbmNlIGZyb20gJ2RhdGUtZm5zL2Zvcm1hdERpc3RhbmNlJ1xuaW1wb3J0IFRhZ3MgZnJvbSAnLi4vLi4vZGF0YS90YWdzJ1xuaW1wb3J0IE5ld1Rhc2tGb3JtIGZyb20gJy4vTmV3VGFza0Zvcm0nXG5pbXBvcnQgVGFza3MgZnJvbSAnLi4vLi4vZGF0YS90YXNrcydcbmltcG9ydCBNZW51IGZyb20gJy4uL21lbnUvTWVudSdcblxuY29uc3QgVGFzayA9ICh7IGlkLCB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5SWQsIHRhZ0lkLCBkb25lIH0pID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGVsZW1lbnQuY2xhc3NOYW1lID0gZG9uZSA/ICd0YXNrIHRhc2stLWRvbmUnIDogJ3Rhc2snXG5cbiAgY29uc3QgZ2V0SWNvbiA9ICgpID0+XG4gICAgVGFza1N0YXR1c0ljb24oXG4gICAgICBkb25lXG4gICAgICAgID8gJ2RvbmUnXG4gICAgICAgIDogcHJpb3JpdHlJZCA+IC0xXG4gICAgICAgID8gTWVudVByaW9yaXRpZXMuZ2V0UHJpb3JpdHlCeUlkKHByaW9yaXR5SWQpLnRpdGxlLnRvTG93ZXJDYXNlKClcbiAgICAgICAgOiAnbm9uZScsXG4gICAgICAndGFza19faWNvbidcbiAgICApXG5cbiAgbGV0IGljb24gPSBnZXRJY29uKClcblxuICBjb25zdCBpbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgaW5mby5jbGFzc05hbWUgPSAndGFza19faW5mbydcblxuICBjb25zdCB0aXRsZURlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICB0aXRsZURlc2MuY2xhc3NOYW1lID0gJ3Rhc2tfX2luZm9fX2Jhc2ljJ1xuXG4gIGNvbnN0IHRpdGxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbiAgdGl0bGVFbGVtZW50LmNsYXNzTmFtZSA9ICd0YXNrX19pbmZvX190aXRsZSdcbiAgdGl0bGVFbGVtZW50LnRleHRDb250ZW50ID0gdGl0bGVcblxuICBjb25zdCBkZXNjRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICBkZXNjRWxlbWVudC5jbGFzc05hbWUgPSAndGFza19faW5mb19fZGVzYydcbiAgZGVzY0VsZW1lbnQudGV4dENvbnRlbnQgPSBkZXNjcmlwdGlvblxuXG4gIHRpdGxlRGVzYy5hcHBlbmRDaGlsZCh0aXRsZUVsZW1lbnQpXG4gIHRpdGxlRGVzYy5hcHBlbmRDaGlsZChkZXNjRWxlbWVudClcblxuICBjb25zdCBhZGRpdGlvbmFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgYWRkaXRpb25hbC5jbGFzc05hbWUgPSAndGFza19faW5mb19fYWRkaXRpb25hbCdcblxuICBpZiAodGFnSWQgPiAtMSkge1xuICAgIGNvbnN0IHRhZyA9IFRhZ3MuZ2V0VGFnQnlJZCh0YWdJZClcbiAgICBjb25zdCB0YWdDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRhZ0NvbnRhaW5lci5jbGFzc05hbWUgPSAndGFza19faW5mb19fdGFnJ1xuXG4gICAgY29uc3QgdGFnVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpXG4gICAgdGFnVGl0bGUuY2xhc3NOYW1lID0gJ3Rhc2tfX2luZm9fX3RhZ19fdGl0bGUnXG4gICAgdGFnVGl0bGUudGV4dENvbnRlbnQgPSB0YWcudGl0bGVcblxuICAgIGNvbnN0IHRhZ0NvbG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0YWdDb2xvci5jbGFzc05hbWUgPSAndGFza19faW5mb19fdGFnX19jb2xvcidcbiAgICB0YWdDb2xvci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSB0YWcuY29sb3JcblxuICAgIHRhZ0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YWdUaXRsZSlcbiAgICB0YWdDb250YWluZXIuYXBwZW5kQ2hpbGQodGFnQ29sb3IpXG4gICAgYWRkaXRpb25hbC5hcHBlbmRDaGlsZCh0YWdDb250YWluZXIpXG4gIH1cblxuICBpZiAoZHVlRGF0ZSkge1xuICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKClcbiAgICBjdXJyZW50RGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKVxuXG4gICAgZGF0ZS5jbGFzc05hbWUgPSAndGFza19faW5mb19fZGF0ZSdcbiAgICBkYXRlLnRleHRDb250ZW50ID1cbiAgICAgIGR1ZURhdGUuZ2V0RGF0ZSgpID09IGN1cnJlbnREYXRlLmdldERhdGUoKVxuICAgICAgICA/ICdUb2RheSdcbiAgICAgICAgOiBmb3JtYXREaXN0YW5jZShkdWVEYXRlLCBjdXJyZW50RGF0ZSwgeyBhZGRTdWZmaXg6IHRydWUgfSlcbiAgICBkYXRlLnN0eWxlLmNvbG9yID0gZG9uZVxuICAgICAgPyAnJ1xuICAgICAgOiBkdWVEYXRlID49IGN1cnJlbnREYXRlXG4gICAgICA/ICcjNjZhODBmJ1xuICAgICAgOiAnI2UwMzEzMSdcblxuICAgIGFkZGl0aW9uYWwuYXBwZW5kQ2hpbGQoZGF0ZSlcbiAgfVxuICBpbmZvLmFwcGVuZENoaWxkKHRpdGxlRGVzYylcbiAgaW5mby5hcHBlbmRDaGlsZChhZGRpdGlvbmFsKVxuXG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQoaWNvbilcbiAgZWxlbWVudC5hcHBlbmRDaGlsZChpbmZvKVxuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgIGlmIChlLnRhcmdldCA9PSBpY29uIHx8IGljb24uY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICBUYXNrcy51cGRhdGVUYXNrKGlkLCB7XG4gICAgICAgIGlkLFxuICAgICAgICB0aXRsZSxcbiAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgIGR1ZURhdGUsXG4gICAgICAgIHByaW9yaXR5SWQsXG4gICAgICAgIHRhZ0lkLFxuICAgICAgICBkb25lOiAhZG9uZSxcbiAgICAgIH0pXG4gICAgICBNZW51LnVwZGF0ZVRhc2tzKClcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdGFzayA9IFRhc2tzLmdldFRhc2tCeUlkKGlkKVxuICAgICAgaWYgKHRhc2spIE5ld1Rhc2tGb3JtLnVwZGF0ZUZvcm0odGFzaylcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIGVsZW1lbnRcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFza1xuIiwiaW1wb3J0IERpdmlkZXIgZnJvbSAnLi4vRGl2aWRlcidcbmltcG9ydCBFbXB0eU1lc3NhZ2UgZnJvbSAnLi4vRW1wdHlNZXNzYWdlJ1xuaW1wb3J0IEFkZEljb24gZnJvbSAnLi4vaWNvbnMvQWRkSWNvbidcbmltcG9ydCBNb3JlSWNvbiBmcm9tICcuLi9pY29ucy9Nb3JlSWNvbidcbmltcG9ydCBUYWdDb250ZXh0TWVudSBmcm9tICcuLi90YWcvVGFnQ29udGV4dE1lbnUnXG5pbXBvcnQgTmV3VGFza0Zvcm0gZnJvbSAnLi9OZXdUYXNrRm9ybSdcbmltcG9ydCBUYXNrIGZyb20gJy4vVGFzaydcblxuY29uc3QgVGFza3NWaWV3ID0gKCgpID0+IHtcbiAgbGV0IHRhc2tFbGVtZW50cyA9IFtdXG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJylcbiAgZWxlbWVudC5jbGFzc05hbWUgPSAndGFza3MtdmlldydcblxuICBjb25zdCBnZW5lcmF0ZVRhc2tzID0gKHRpdGxlLCB0YWdJZCwgdGFza3MpID0+IHtcbiAgICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcbiAgICBoMS5jbGFzc05hbWUgPSAndGFza3Mtdmlld19fdGl0bGUnXG4gICAgaDEudGV4dENvbnRlbnQgPSB0aXRsZVxuXG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSAnJ1xuICAgIGlmICh0YWdJZCA+IC0xKSB7XG4gICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKVxuICAgICAgaGVhZGVyLmNsYXNzTmFtZSA9ICd0YXNrcy12aWV3X19oZWFkZXInXG5cbiAgICAgIGNvbnN0IG1vcmVJY29uID0gTW9yZUljb24oJ3Rhc2tzLXZpZXdfX2ljb24tLW1vcmUnKVxuICAgICAgbW9yZUljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT5cbiAgICAgICAgVGFnQ29udGV4dE1lbnUuZ2VuZXJhdGVNZW51KHRhZ0lkLCBlLmNsaWVudFgsIGUuY2xpZW50WSlcbiAgICAgIClcblxuICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKGgxKVxuICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKG1vcmVJY29uKVxuXG4gICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGhlYWRlcilcbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChoMSlcbiAgICB9XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChEaXZpZGVyKCkpXG5cbiAgICBpZiAodGFza3MubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgdGFza3NDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgdGFza3NDb250YWluZXIuY2xhc3NOYW1lID0gJ3Rhc2tzLXZpZXdfX3Rhc2tzJ1xuXG4gICAgICBmb3IgKGxldCB0YXNrIG9mIHRhc2tzKSB7XG4gICAgICAgIGNvbnN0IHRhc2tJdGVtID0gVGFzayh0YXNrKVxuICAgICAgICB0YXNrc0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrSXRlbSlcbiAgICAgICAgdGFza0VsZW1lbnRzLnB1c2godGFza0l0ZW0pXG4gICAgICB9XG4gICAgICBlbGVtZW50LmFwcGVuZENoaWxkKHRhc2tzQ29udGFpbmVyKVxuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtZW50LmFwcGVuZENoaWxkKFxuICAgICAgICBFbXB0eU1lc3NhZ2UoXG4gICAgICAgICAgXCJJdCdzIHByZXR0eSBlbXB0eSBoZXJlIPCfmJUuIEFkZCBhIG5ldyB0YXNrIHdpdGggdGhlIGJ1dHRvbiBiZWxvdyFcIlxuICAgICAgICApXG4gICAgICApXG4gICAgfVxuXG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBidG4uY2xhc3NOYW1lID0gJ3Rhc2tzLXZpZXdfX2J0bidcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBOZXdUYXNrRm9ybS51cGRhdGVGb3JtKG51bGwpKVxuXG4gICAgY29uc3QgYnRuVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpXG4gICAgYnRuVGl0bGUuY2xhc3NOYW1lID0gJ3Rhc2tzLXZpZXdfX2J0bl9fdGl0bGUnXG4gICAgYnRuVGl0bGUudGV4dENvbnRlbnQgPSAnQWRkIG5ldyB0YXNrJ1xuXG4gICAgYnRuLmFwcGVuZENoaWxkKEFkZEljb24oJ3Rhc2tzLXZpZXdfX2J0bl9faWNvbicpKVxuICAgIGJ0bi5hcHBlbmRDaGlsZChidG5UaXRsZSlcblxuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoRGl2aWRlcigpKVxuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoYnRuKVxuICB9XG5cbiAgcmV0dXJuIHsgZWxlbWVudCwgZ2VuZXJhdGVUYXNrcyB9XG59KSgpXG5cbmV4cG9ydCBkZWZhdWx0IFRhc2tzVmlld1xuIiwiZXhwb3J0IGNvbnN0IGNsZWFuQ29udGVudCA9IChub2RlKSA9PiB7XG4gIG5vZGUuaW5uZXJIVE1MID0gJydcbn1cblxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlQ29udGVudCA9IChub2RlLCBjb250ZW50KSA9PiB7XG4gIG5vZGUuYXBwZW5kQ2hpbGQoY29udGVudClcbn1cbiIsIi8vIGlkLCB0aXRsZSwgY29sb3JcbmNvbnN0IFRhZ3MgPSAoKCkgPT4ge1xuICBjb25zdCB0YWdzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RhZ3MnKSA/IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLnRhZ3MpIDogW11cbiAgbGV0IGxhc3RJZCA9XG4gICAgdGFncy5sZW5ndGggPiAwICYmIHRhZ3NbdGFncy5sZW5ndGggLSAxXS5pZCA/IHRhZ3NbdGFncy5sZW5ndGggLSAxXSA6IC0xXG5cbiAgY29uc3Qgc2F2ZVRvU3RvcmFnZSA9ICgpID0+IChsb2NhbFN0b3JhZ2UudGFncyA9IEpTT04uc3RyaW5naWZ5KHRhZ3MpKVxuXG4gIGNvbnN0IGdldFRhZ0J5SWQgPSAoaWQpID0+IHRhZ3MuZmluZCgodGFnKSA9PiB0YWcuaWQgPT0gaWQpXG4gIGNvbnN0IGdldFRhZ3MgPSAoKSA9PiB0YWdzXG4gIGNvbnN0IGdldExhc3RJZCA9ICgpID0+IGxhc3RJZFxuXG4gIGNvbnN0IGFkZFRhZyA9ICh0YWcpID0+IHtcbiAgICB0YWcuaWQgPSArK2xhc3RJZFxuICAgIHRhZ3MucHVzaCh0YWcpXG4gICAgc2F2ZVRvU3RvcmFnZSgpXG4gIH1cblxuICBjb25zdCByZW1vdmVUYWcgPSAoaWQpID0+IHtcbiAgICBjb25zdCBpbmRleCA9IHRhZ3MuZmluZEluZGV4KCh0YWcpID0+IHRhZy5pZCA9PSBpZClcbiAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgdGFncy5zcGxpY2UoaW5kZXgsIDEpXG4gICAgICBzYXZlVG9TdG9yYWdlKClcbiAgICB9XG4gIH1cblxuICBjb25zdCB1cGRhdGVUYWcgPSAoaWQsIHRhZykgPT4ge1xuICAgIHRhZ3NbaWRdID0gdGFnXG4gICAgc2F2ZVRvU3RvcmFnZSgpXG4gIH1cblxuICByZXR1cm4geyBnZXRUYWdCeUlkLCBnZXRUYWdzLCBnZXRMYXN0SWQsIGFkZFRhZywgcmVtb3ZlVGFnLCB1cGRhdGVUYWcgfVxufSkoKVxuXG5leHBvcnQgZGVmYXVsdCBUYWdzXG4iLCJjb25zdCBUYXNrcyA9ICgoKSA9PiB7XG4gIGNvbnN0IGxvYWRGcm9tU3RvcmFnZSA9ICgpID0+IHtcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tzJykpIHtcbiAgICAgIGNvbnN0IGxvYWRlZFRhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UudGFza3MpXG4gICAgICBmb3IgKGxldCB0YXNrIG9mIGxvYWRlZFRhc2tzKSB7XG4gICAgICAgIGlmICh0YXNrLmR1ZURhdGUpIHRhc2suZHVlRGF0ZSA9IG5ldyBEYXRlKHBhcnNlSW50KHRhc2suZHVlRGF0ZSkpXG4gICAgICAgIGVsc2UgdGFzay5kdWVEYXRlID0gbnVsbFxuICAgICAgfVxuICAgICAgcmV0dXJuIGxvYWRlZFRhc2tzXG4gICAgfVxuICAgIHJldHVybiBbXVxuICB9XG5cbiAgY29uc3QgdGFza3MgPSBsb2FkRnJvbVN0b3JhZ2UoKVxuICBsZXQgbGFzdElkID0gdGFza3MubGVuZ3RoID4gMCA/IHRhc2tzW3Rhc2tzLmxlbmd0aCAtIDFdLmlkIDogLTFcblxuICBjb25zdCBzYXZlVG9TdG9yYWdlID0gKCkgPT4ge1xuICAgIGNvbnN0IHRhc2tzQ29weSA9IFtdXG4gICAgZm9yIChsZXQgdGFzayBvZiB0YXNrcykge1xuICAgICAgbGV0IHRhc2tDb3B5ID0geyAuLi50YXNrIH1cbiAgICAgIGlmICh0YXNrQ29weS5kdWVEYXRlKSB7XG4gICAgICAgIHRhc2tDb3B5LmR1ZURhdGUgPSArdGFza0NvcHkuZHVlRGF0ZVxuICAgICAgfVxuICAgICAgdGFza3NDb3B5LnB1c2godGFza0NvcHkpXG4gICAgfVxuICAgIGxvY2FsU3RvcmFnZS50YXNrcyA9IEpTT04uc3RyaW5naWZ5KHRhc2tzQ29weSlcbiAgfVxuXG4gIGNvbnN0IGdldFNvcnRlZFRhc2tzID0gKCkgPT4ge1xuICAgIHJldHVybiBbLi4udGFza3NdLnNvcnQoKHRhc2sxLCB0YXNrMikgPT4ge1xuICAgICAgY29uc3QgcHJpb3JpdHkxID0gdGFzazEuZG9uZSA/IC05OSA6IHRhc2sxLnByaW9yaXR5SWRcbiAgICAgIGNvbnN0IHByaW9yaXR5MiA9IHRhc2syLmRvbmUgPyAtOTkgOiB0YXNrMi5wcmlvcml0eUlkXG5cbiAgICAgIGlmIChwcmlvcml0eTEgPiBwcmlvcml0eTIpIHJldHVybiAtMVxuICAgICAgaWYgKHByaW9yaXR5MSA8IHByaW9yaXR5MikgcmV0dXJuIDFcblxuICAgICAgaWYgKHRhc2sxLmR1ZURhdGUgPCB0YXNrMi5kdWVEYXRlKSByZXR1cm4gLTFcbiAgICAgIGlmICh0YXNrMS5kdWVEYXRlID4gdGFzazIuZHVlRGF0ZSkgcmV0dXJuIDFcbiAgICB9KVxuICB9XG5cbiAgY29uc3QgZ2V0VGFza0J5SWQgPSAoaWQpID0+IHRhc2tzLmZpbmQoKHRhc2spID0+IHRhc2suaWQgPT0gaWQpXG4gIGNvbnN0IGdldFRhc2tzID0gKCkgPT4gdGFza3NcbiAgY29uc3QgZ2V0TGFzdElkID0gKCkgPT4gbGFzdElkXG5cbiAgY29uc3QgYWRkVGFzayA9ICh0YXNrKSA9PiB7XG4gICAgdGFza3MucHVzaCh0YXNrKVxuICAgIHNhdmVUb1N0b3JhZ2UoKVxuXG4gICAgbGFzdElkKytcbiAgfVxuXG4gIGNvbnN0IHVwZGF0ZVRhc2sgPSAoaWQsIHRhc2spID0+IHtcbiAgICBjb25zdCBpbmRleCA9IHRhc2tzLmZpbmRJbmRleCgodGFzaykgPT4gdGFzay5pZCA9PSBpZClcbiAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgdGFza3Muc3BsaWNlKGlkLCAxLCB0YXNrKVxuICAgICAgc2F2ZVRvU3RvcmFnZSgpXG4gICAgfVxuICB9XG5cbiAgY29uc3QgcmVtb3ZlVGFzayA9IChpZCkgPT4ge1xuICAgIGNvbnN0IGluZGV4ID0gdGFza3MuZmluZEluZGV4KCh0YXNrKSA9PiB0YXNrLmlkID09IGlkKVxuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICB0YXNrcy5zcGxpY2UoaW5kZXgsIDEpXG4gICAgICBzYXZlVG9TdG9yYWdlKClcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGdldFRhc2tCeUlkLFxuICAgIGdldFRhc2tzLFxuICAgIGdldExhc3RJZCxcbiAgICBnZXRTb3J0ZWRUYXNrcyxcbiAgICBhZGRUYXNrLFxuICAgIHVwZGF0ZVRhc2ssXG4gICAgcmVtb3ZlVGFzayxcbiAgfVxufSkoKVxuXG5leHBvcnQgZGVmYXVsdCBUYXNrc1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi4vc2Nzcy9pbmRleC5zY3NzJ1xuaW1wb3J0IE5hdmJhciBmcm9tICcuL2NvbXBvbmVudHMvTmF2YmFyJ1xuaW1wb3J0IE1haW4gZnJvbSAnLi9jb21wb25lbnRzL01haW4nXG5pbXBvcnQgQ29sb3JQaWNrZXIgZnJvbSAnLi9jb21wb25lbnRzL0NvbG9yUGlja2VyJ1xuaW1wb3J0IE5ld1Rhc2tGb3JtIGZyb20gJy4vY29tcG9uZW50cy90YXNrL05ld1Rhc2tGb3JtJ1xuaW1wb3J0IFRhZ0NvbnRleHRNZW51IGZyb20gJy4vY29tcG9uZW50cy90YWcvVGFnQ29udGV4dE1lbnUnXG5pbXBvcnQgeyBnZW5lcmF0ZUNvbnRlbnQgfSBmcm9tICcuL2NvbnRlbnRHZW5lcmF0b3InXG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKVxuZ2VuZXJhdGVDb250ZW50KGNvbnRhaW5lciwgTmF2YmFyKVxuZ2VuZXJhdGVDb250ZW50KGNvbnRhaW5lciwgTWFpbilcbmdlbmVyYXRlQ29udGVudChjb250YWluZXIsIENvbG9yUGlja2VyLmVsZW1lbnQpXG5nZW5lcmF0ZUNvbnRlbnQoY29udGFpbmVyLCBOZXdUYXNrRm9ybS5lbGVtZW50KVxuZ2VuZXJhdGVDb250ZW50KGNvbnRhaW5lciwgVGFnQ29udGV4dE1lbnUuZWxlbWVudClcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==