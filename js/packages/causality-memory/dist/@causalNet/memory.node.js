(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("causal-net.core"), require("causal-net.utils"));
	else if(typeof define === 'function' && define.amd)
		define(["causal-net.core", "causal-net.utils"], factory);
	else if(typeof exports === 'object')
		exports["@causalNet/memory"] = factory(require("causal-net.core"), require("causal-net.utils"));
	else
		root["@causalNet/memory"] = factory(root["causal-net.core"], root["causal-net.utils"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_causal_net_core__, __WEBPACK_EXTERNAL_MODULE_causal_net_utils__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../causality-memcache/dist/@causalNet/memcache.web.js":
/*!*************************************************************!*\
  !*** ../causality-memcache/dist/@causalNet/memcache.web.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(/*! causal-net.core */ "causal-net.core"), __webpack_require__(/*! causal-net.utils */ "causal-net.utils"));
	else {}
})(this, function(__WEBPACK_EXTERNAL_MODULE_causal_net_core__, __WEBPACK_EXTERNAL_MODULE_causal_net_utils__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../node_modules/abstract-leveldown/abstract-chained-batch.js":
/*!****************************************************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/abstract-leveldown/abstract-chained-batch.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/* Copyright (c) 2017 Rod Vagg, MIT License */

function AbstractChainedBatch (db) {
  this._db = db
  this._operations = []
  this._written = false
}

AbstractChainedBatch.prototype._serializeKey = function (key) {
  return this._db._serializeKey(key)
}

AbstractChainedBatch.prototype._serializeValue = function (value) {
  return this._db._serializeValue(value)
}

AbstractChainedBatch.prototype._checkWritten = function () {
  if (this._written) {
    throw new Error('write() already called on this batch')
  }
}

AbstractChainedBatch.prototype.put = function (key, value) {
  this._checkWritten()

  var err = this._db._checkKey(key, 'key')
  if (err) { throw err }

  key = this._serializeKey(key)
  value = this._serializeValue(value)

  this._put(key, value)

  return this
}

AbstractChainedBatch.prototype._put = function (key, value) {
  this._operations.push({ type: 'put', key: key, value: value })
}

AbstractChainedBatch.prototype.del = function (key) {
  this._checkWritten()

  var err = this._db._checkKey(key, 'key')
  if (err) { throw err }

  key = this._serializeKey(key)
  this._del(key)

  return this
}

AbstractChainedBatch.prototype._del = function (key) {
  this._operations.push({ type: 'del', key: key })
}

AbstractChainedBatch.prototype.clear = function () {
  this._checkWritten()
  this._operations = []
  this._clear()

  return this
}

AbstractChainedBatch.prototype._clear = function noop () {}

AbstractChainedBatch.prototype.write = function (options, callback) {
  this._checkWritten()

  if (typeof options === 'function') { callback = options }
  if (typeof callback !== 'function') {
    throw new Error('write() requires a callback argument')
  }
  if (typeof options !== 'object') { options = {} }

  this._written = true

  // @ts-ignore
  if (typeof this._write === 'function') { return this._write(callback) }

  if (typeof this._db._batch === 'function') {
    return this._db._batch(this._operations, options, callback)
  }

  process.nextTick(callback)
}

module.exports = AbstractChainedBatch

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ "../../node_modules/process/browser.js")))

/***/ }),

/***/ "../../node_modules/abstract-leveldown/abstract-iterator.js":
/*!***********************************************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/abstract-leveldown/abstract-iterator.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/* Copyright (c) 2017 Rod Vagg, MIT License */

function AbstractIterator (db) {
  this.db = db
  this._ended = false
  this._nexting = false
}

AbstractIterator.prototype.next = function (callback) {
  var self = this

  if (typeof callback !== 'function') {
    throw new Error('next() requires a callback argument')
  }

  if (self._ended) {
    process.nextTick(callback, new Error('cannot call next() after end()'))
    return self
  }

  if (self._nexting) {
    process.nextTick(callback, new Error('cannot call next() before previous next() has completed'))
    return self
  }

  self._nexting = true
  self._next(function () {
    self._nexting = false
    callback.apply(null, arguments)
  })

  return self
}

AbstractIterator.prototype._next = function (callback) {
  process.nextTick(callback)
}

AbstractIterator.prototype.end = function (callback) {
  if (typeof callback !== 'function') {
    throw new Error('end() requires a callback argument')
  }

  if (this._ended) {
    return process.nextTick(callback, new Error('end() already called on iterator'))
  }

  this._ended = true
  this._end(callback)
}

AbstractIterator.prototype._end = function (callback) {
  process.nextTick(callback)
}

module.exports = AbstractIterator

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ "../../node_modules/process/browser.js")))

/***/ }),

/***/ "../../node_modules/abstract-leveldown/abstract-leveldown.js":
/*!************************************************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/abstract-leveldown/abstract-leveldown.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process, Buffer) {/* Copyright (c) 2017 Rod Vagg, MIT License */

var xtend = __webpack_require__(/*! xtend */ "../../node_modules/xtend/immutable.js")
var AbstractIterator = __webpack_require__(/*! ./abstract-iterator */ "../../node_modules/abstract-leveldown/abstract-iterator.js")
var AbstractChainedBatch = __webpack_require__(/*! ./abstract-chained-batch */ "../../node_modules/abstract-leveldown/abstract-chained-batch.js")
var hasOwnProperty = Object.prototype.hasOwnProperty
var rangeOptions = 'start end gt gte lt lte'.split(' ')

function AbstractLevelDOWN (location) {
  if (!arguments.length || location === undefined) {
    throw new Error('constructor requires at least a location argument')
  }

  if (typeof location !== 'string') {
    throw new Error('constructor requires a location string argument')
  }

  this.location = location
  this.status = 'new'
}

AbstractLevelDOWN.prototype.open = function (options, callback) {
  var self = this
  var oldStatus = this.status

  if (typeof options === 'function') { callback = options }

  if (typeof callback !== 'function') {
    throw new Error('open() requires a callback argument')
  }

  if (typeof options !== 'object') { options = {} }

  options.createIfMissing = options.createIfMissing !== false
  options.errorIfExists = !!options.errorIfExists

  this.status = 'opening'
  this._open(options, function (err) {
    if (err) {
      self.status = oldStatus
      return callback(err)
    }
    self.status = 'open'
    callback()
  })
}

AbstractLevelDOWN.prototype._open = function (options, callback) {
  process.nextTick(callback)
}

AbstractLevelDOWN.prototype.close = function (callback) {
  var self = this
  var oldStatus = this.status

  if (typeof callback !== 'function') {
    throw new Error('close() requires a callback argument')
  }

  this.status = 'closing'
  this._close(function (err) {
    if (err) {
      self.status = oldStatus
      return callback(err)
    }
    self.status = 'closed'
    callback()
  })
}

AbstractLevelDOWN.prototype._close = function (callback) {
  process.nextTick(callback)
}

AbstractLevelDOWN.prototype.get = function (key, options, callback) {
  if (typeof options === 'function') { callback = options }

  if (typeof callback !== 'function') {
    throw new Error('get() requires a callback argument')
  }

  var err = this._checkKey(key, 'key')
  if (err) return process.nextTick(callback, err)

  key = this._serializeKey(key)

  if (typeof options !== 'object') { options = {} }

  options.asBuffer = options.asBuffer !== false

  this._get(key, options, callback)
}

AbstractLevelDOWN.prototype._get = function (key, options, callback) {
  process.nextTick(function () { callback(new Error('NotFound')) })
}

AbstractLevelDOWN.prototype.put = function (key, value, options, callback) {
  if (typeof options === 'function') { callback = options }

  if (typeof callback !== 'function') {
    throw new Error('put() requires a callback argument')
  }

  var err = this._checkKey(key, 'key')
  if (err) return process.nextTick(callback, err)

  key = this._serializeKey(key)
  value = this._serializeValue(value)

  if (typeof options !== 'object') { options = {} }

  this._put(key, value, options, callback)
}

AbstractLevelDOWN.prototype._put = function (key, value, options, callback) {
  process.nextTick(callback)
}

AbstractLevelDOWN.prototype.del = function (key, options, callback) {
  if (typeof options === 'function') { callback = options }

  if (typeof callback !== 'function') {
    throw new Error('del() requires a callback argument')
  }

  var err = this._checkKey(key, 'key')
  if (err) return process.nextTick(callback, err)

  key = this._serializeKey(key)

  if (typeof options !== 'object') { options = {} }

  this._del(key, options, callback)
}

AbstractLevelDOWN.prototype._del = function (key, options, callback) {
  process.nextTick(callback)
}

AbstractLevelDOWN.prototype.batch = function (array, options, callback) {
  if (!arguments.length) { return this._chainedBatch() }

  if (typeof options === 'function') { callback = options }

  if (typeof array === 'function') { callback = array }

  if (typeof callback !== 'function') {
    throw new Error('batch(array) requires a callback argument')
  }

  if (!Array.isArray(array)) {
    return process.nextTick(callback, new Error('batch(array) requires an array argument'))
  }

  if (!options || typeof options !== 'object') { options = {} }

  var serialized = new Array(array.length)

  for (var i = 0; i < array.length; i++) {
    if (typeof array[i] !== 'object' || array[i] === null) {
      return process.nextTick(callback, new Error('batch(array) element must be an object and not `null`'))
    }

    var e = xtend(array[i])

    if (e.type !== 'put' && e.type !== 'del') {
      return process.nextTick(callback, new Error("`type` must be 'put' or 'del'"))
    }

    var err = this._checkKey(e.key, 'key')
    if (err) return process.nextTick(callback, err)

    e.key = this._serializeKey(e.key)

    if (e.type === 'put') { e.value = this._serializeValue(e.value) }

    serialized[i] = e
  }

  this._batch(serialized, options, callback)
}

AbstractLevelDOWN.prototype._batch = function (array, options, callback) {
  process.nextTick(callback)
}

AbstractLevelDOWN.prototype._setupIteratorOptions = function (options) {
  options = cleanRangeOptions(options)

  options.reverse = !!options.reverse
  options.keys = options.keys !== false
  options.values = options.values !== false
  options.limit = 'limit' in options ? options.limit : -1
  options.keyAsBuffer = options.keyAsBuffer !== false
  options.valueAsBuffer = options.valueAsBuffer !== false

  return options
}

function cleanRangeOptions (options) {
  var result = {}

  for (var k in options) {
    if (!hasOwnProperty.call(options, k)) continue
    if (isRangeOption(k) && isEmptyRangeOption(options[k])) continue

    result[k] = options[k]
  }

  return result
}

function isRangeOption (k) {
  return rangeOptions.indexOf(k) !== -1
}

function isEmptyRangeOption (v) {
  return v === '' || v == null || isEmptyBuffer(v)
}

function isEmptyBuffer (v) {
  return Buffer.isBuffer(v) && v.length === 0
}

AbstractLevelDOWN.prototype.iterator = function (options) {
  if (typeof options !== 'object') { options = {} }
  options = this._setupIteratorOptions(options)
  return this._iterator(options)
}

AbstractLevelDOWN.prototype._iterator = function (options) {
  return new AbstractIterator(this)
}

AbstractLevelDOWN.prototype._chainedBatch = function () {
  return new AbstractChainedBatch(this)
}

AbstractLevelDOWN.prototype._serializeKey = function (key) {
  return Buffer.isBuffer(key) ? key : String(key)
}

AbstractLevelDOWN.prototype._serializeValue = function (value) {
  if (value == null) return ''
  return Buffer.isBuffer(value) || process.browser ? value : String(value)
}

AbstractLevelDOWN.prototype._checkKey = function (obj, type) {
  if (obj === null || obj === undefined) {
    return new Error(type + ' cannot be `null` or `undefined`')
  }

  if (Buffer.isBuffer(obj) && obj.length === 0) {
    return new Error(type + ' cannot be an empty Buffer')
  }

  if (String(obj) === '') {
    return new Error(type + ' cannot be an empty String')
  }
}

module.exports = AbstractLevelDOWN

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ "../../node_modules/process/browser.js"), __webpack_require__(/*! ./../buffer/index.js */ "../../node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "../../node_modules/abstract-leveldown/index.js":
/*!***********************************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/abstract-leveldown/index.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.AbstractLevelDOWN = __webpack_require__(/*! ./abstract-leveldown */ "../../node_modules/abstract-leveldown/abstract-leveldown.js")
exports.AbstractIterator = __webpack_require__(/*! ./abstract-iterator */ "../../node_modules/abstract-leveldown/abstract-iterator.js")
exports.AbstractChainedBatch = __webpack_require__(/*! ./abstract-chained-batch */ "../../node_modules/abstract-leveldown/abstract-chained-batch.js")


/***/ }),

/***/ "../../node_modules/base64-js/index.js":
/*!**************************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/base64-js/index.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  for (var i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(
      uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)
    ))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),

/***/ "../../node_modules/buffer/index.js":
/*!***********************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/buffer/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(/*! base64-js */ "../../node_modules/base64-js/index.js")
var ieee754 = __webpack_require__(/*! ieee754 */ "../../node_modules/ieee754/index.js")
var isArray = __webpack_require__(/*! isarray */ "../../node_modules/buffer/node_modules/isarray/index.js")

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../../node_modules/buffer/node_modules/isarray/index.js":
/*!********************************************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/buffer/node_modules/isarray/index.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ "../../node_modules/functional-red-black-tree/rbtree.js":
/*!*******************************************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/functional-red-black-tree/rbtree.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = createRBTree

var RED   = 0
var BLACK = 1

function RBNode(color, key, value, left, right, count) {
  this._color = color
  this.key = key
  this.value = value
  this.left = left
  this.right = right
  this._count = count
}

function cloneNode(node) {
  return new RBNode(node._color, node.key, node.value, node.left, node.right, node._count)
}

function repaint(color, node) {
  return new RBNode(color, node.key, node.value, node.left, node.right, node._count)
}

function recount(node) {
  node._count = 1 + (node.left ? node.left._count : 0) + (node.right ? node.right._count : 0)
}

function RedBlackTree(compare, root) {
  this._compare = compare
  this.root = root
}

var proto = RedBlackTree.prototype

Object.defineProperty(proto, "keys", {
  get: function() {
    var result = []
    this.forEach(function(k,v) {
      result.push(k)
    })
    return result
  }
})

Object.defineProperty(proto, "values", {
  get: function() {
    var result = []
    this.forEach(function(k,v) {
      result.push(v)
    })
    return result
  }
})

//Returns the number of nodes in the tree
Object.defineProperty(proto, "length", {
  get: function() {
    if(this.root) {
      return this.root._count
    }
    return 0
  }
})

//Insert a new item into the tree
proto.insert = function(key, value) {
  var cmp = this._compare
  //Find point to insert new node at
  var n = this.root
  var n_stack = []
  var d_stack = []
  while(n) {
    var d = cmp(key, n.key)
    n_stack.push(n)
    d_stack.push(d)
    if(d <= 0) {
      n = n.left
    } else {
      n = n.right
    }
  }
  //Rebuild path to leaf node
  n_stack.push(new RBNode(RED, key, value, null, null, 1))
  for(var s=n_stack.length-2; s>=0; --s) {
    var n = n_stack[s]
    if(d_stack[s] <= 0) {
      n_stack[s] = new RBNode(n._color, n.key, n.value, n_stack[s+1], n.right, n._count+1)
    } else {
      n_stack[s] = new RBNode(n._color, n.key, n.value, n.left, n_stack[s+1], n._count+1)
    }
  }
  //Rebalance tree using rotations
  //console.log("start insert", key, d_stack)
  for(var s=n_stack.length-1; s>1; --s) {
    var p = n_stack[s-1]
    var n = n_stack[s]
    if(p._color === BLACK || n._color === BLACK) {
      break
    }
    var pp = n_stack[s-2]
    if(pp.left === p) {
      if(p.left === n) {
        var y = pp.right
        if(y && y._color === RED) {
          //console.log("LLr")
          p._color = BLACK
          pp.right = repaint(BLACK, y)
          pp._color = RED
          s -= 1
        } else {
          //console.log("LLb")
          pp._color = RED
          pp.left = p.right
          p._color = BLACK
          p.right = pp
          n_stack[s-2] = p
          n_stack[s-1] = n
          recount(pp)
          recount(p)
          if(s >= 3) {
            var ppp = n_stack[s-3]
            if(ppp.left === pp) {
              ppp.left = p
            } else {
              ppp.right = p
            }
          }
          break
        }
      } else {
        var y = pp.right
        if(y && y._color === RED) {
          //console.log("LRr")
          p._color = BLACK
          pp.right = repaint(BLACK, y)
          pp._color = RED
          s -= 1
        } else {
          //console.log("LRb")
          p.right = n.left
          pp._color = RED
          pp.left = n.right
          n._color = BLACK
          n.left = p
          n.right = pp
          n_stack[s-2] = n
          n_stack[s-1] = p
          recount(pp)
          recount(p)
          recount(n)
          if(s >= 3) {
            var ppp = n_stack[s-3]
            if(ppp.left === pp) {
              ppp.left = n
            } else {
              ppp.right = n
            }
          }
          break
        }
      }
    } else {
      if(p.right === n) {
        var y = pp.left
        if(y && y._color === RED) {
          //console.log("RRr", y.key)
          p._color = BLACK
          pp.left = repaint(BLACK, y)
          pp._color = RED
          s -= 1
        } else {
          //console.log("RRb")
          pp._color = RED
          pp.right = p.left
          p._color = BLACK
          p.left = pp
          n_stack[s-2] = p
          n_stack[s-1] = n
          recount(pp)
          recount(p)
          if(s >= 3) {
            var ppp = n_stack[s-3]
            if(ppp.right === pp) {
              ppp.right = p
            } else {
              ppp.left = p
            }
          }
          break
        }
      } else {
        var y = pp.left
        if(y && y._color === RED) {
          //console.log("RLr")
          p._color = BLACK
          pp.left = repaint(BLACK, y)
          pp._color = RED
          s -= 1
        } else {
          //console.log("RLb")
          p.left = n.right
          pp._color = RED
          pp.right = n.left
          n._color = BLACK
          n.right = p
          n.left = pp
          n_stack[s-2] = n
          n_stack[s-1] = p
          recount(pp)
          recount(p)
          recount(n)
          if(s >= 3) {
            var ppp = n_stack[s-3]
            if(ppp.right === pp) {
              ppp.right = n
            } else {
              ppp.left = n
            }
          }
          break
        }
      }
    }
  }
  //Return new tree
  n_stack[0]._color = BLACK
  return new RedBlackTree(cmp, n_stack[0])
}


//Visit all nodes inorder
function doVisitFull(visit, node) {
  if(node.left) {
    var v = doVisitFull(visit, node.left)
    if(v) { return v }
  }
  var v = visit(node.key, node.value)
  if(v) { return v }
  if(node.right) {
    return doVisitFull(visit, node.right)
  }
}

//Visit half nodes in order
function doVisitHalf(lo, compare, visit, node) {
  var l = compare(lo, node.key)
  if(l <= 0) {
    if(node.left) {
      var v = doVisitHalf(lo, compare, visit, node.left)
      if(v) { return v }
    }
    var v = visit(node.key, node.value)
    if(v) { return v }
  }
  if(node.right) {
    return doVisitHalf(lo, compare, visit, node.right)
  }
}

//Visit all nodes within a range
function doVisit(lo, hi, compare, visit, node) {
  var l = compare(lo, node.key)
  var h = compare(hi, node.key)
  var v
  if(l <= 0) {
    if(node.left) {
      v = doVisit(lo, hi, compare, visit, node.left)
      if(v) { return v }
    }
    if(h > 0) {
      v = visit(node.key, node.value)
      if(v) { return v }
    }
  }
  if(h > 0 && node.right) {
    return doVisit(lo, hi, compare, visit, node.right)
  }
}


proto.forEach = function rbTreeForEach(visit, lo, hi) {
  if(!this.root) {
    return
  }
  switch(arguments.length) {
    case 1:
      return doVisitFull(visit, this.root)
    break

    case 2:
      return doVisitHalf(lo, this._compare, visit, this.root)
    break

    case 3:
      if(this._compare(lo, hi) >= 0) {
        return
      }
      return doVisit(lo, hi, this._compare, visit, this.root)
    break
  }
}

//First item in list
Object.defineProperty(proto, "begin", {
  get: function() {
    var stack = []
    var n = this.root
    while(n) {
      stack.push(n)
      n = n.left
    }
    return new RedBlackTreeIterator(this, stack)
  }
})

//Last item in list
Object.defineProperty(proto, "end", {
  get: function() {
    var stack = []
    var n = this.root
    while(n) {
      stack.push(n)
      n = n.right
    }
    return new RedBlackTreeIterator(this, stack)
  }
})

//Find the ith item in the tree
proto.at = function(idx) {
  if(idx < 0) {
    return new RedBlackTreeIterator(this, [])
  }
  var n = this.root
  var stack = []
  while(true) {
    stack.push(n)
    if(n.left) {
      if(idx < n.left._count) {
        n = n.left
        continue
      }
      idx -= n.left._count
    }
    if(!idx) {
      return new RedBlackTreeIterator(this, stack)
    }
    idx -= 1
    if(n.right) {
      if(idx >= n.right._count) {
        break
      }
      n = n.right
    } else {
      break
    }
  }
  return new RedBlackTreeIterator(this, [])
}

proto.ge = function(key) {
  var cmp = this._compare
  var n = this.root
  var stack = []
  var last_ptr = 0
  while(n) {
    var d = cmp(key, n.key)
    stack.push(n)
    if(d <= 0) {
      last_ptr = stack.length
    }
    if(d <= 0) {
      n = n.left
    } else {
      n = n.right
    }
  }
  stack.length = last_ptr
  return new RedBlackTreeIterator(this, stack)
}

proto.gt = function(key) {
  var cmp = this._compare
  var n = this.root
  var stack = []
  var last_ptr = 0
  while(n) {
    var d = cmp(key, n.key)
    stack.push(n)
    if(d < 0) {
      last_ptr = stack.length
    }
    if(d < 0) {
      n = n.left
    } else {
      n = n.right
    }
  }
  stack.length = last_ptr
  return new RedBlackTreeIterator(this, stack)
}

proto.lt = function(key) {
  var cmp = this._compare
  var n = this.root
  var stack = []
  var last_ptr = 0
  while(n) {
    var d = cmp(key, n.key)
    stack.push(n)
    if(d > 0) {
      last_ptr = stack.length
    }
    if(d <= 0) {
      n = n.left
    } else {
      n = n.right
    }
  }
  stack.length = last_ptr
  return new RedBlackTreeIterator(this, stack)
}

proto.le = function(key) {
  var cmp = this._compare
  var n = this.root
  var stack = []
  var last_ptr = 0
  while(n) {
    var d = cmp(key, n.key)
    stack.push(n)
    if(d >= 0) {
      last_ptr = stack.length
    }
    if(d < 0) {
      n = n.left
    } else {
      n = n.right
    }
  }
  stack.length = last_ptr
  return new RedBlackTreeIterator(this, stack)
}

//Finds the item with key if it exists
proto.find = function(key) {
  var cmp = this._compare
  var n = this.root
  var stack = []
  while(n) {
    var d = cmp(key, n.key)
    stack.push(n)
    if(d === 0) {
      return new RedBlackTreeIterator(this, stack)
    }
    if(d <= 0) {
      n = n.left
    } else {
      n = n.right
    }
  }
  return new RedBlackTreeIterator(this, [])
}

//Removes item with key from tree
proto.remove = function(key) {
  var iter = this.find(key)
  if(iter) {
    return iter.remove()
  }
  return this
}

//Returns the item at `key`
proto.get = function(key) {
  var cmp = this._compare
  var n = this.root
  while(n) {
    var d = cmp(key, n.key)
    if(d === 0) {
      return n.value
    }
    if(d <= 0) {
      n = n.left
    } else {
      n = n.right
    }
  }
  return
}

//Iterator for red black tree
function RedBlackTreeIterator(tree, stack) {
  this.tree = tree
  this._stack = stack
}

var iproto = RedBlackTreeIterator.prototype

//Test if iterator is valid
Object.defineProperty(iproto, "valid", {
  get: function() {
    return this._stack.length > 0
  }
})

//Node of the iterator
Object.defineProperty(iproto, "node", {
  get: function() {
    if(this._stack.length > 0) {
      return this._stack[this._stack.length-1]
    }
    return null
  },
  enumerable: true
})

//Makes a copy of an iterator
iproto.clone = function() {
  return new RedBlackTreeIterator(this.tree, this._stack.slice())
}

//Swaps two nodes
function swapNode(n, v) {
  n.key = v.key
  n.value = v.value
  n.left = v.left
  n.right = v.right
  n._color = v._color
  n._count = v._count
}

//Fix up a double black node in a tree
function fixDoubleBlack(stack) {
  var n, p, s, z
  for(var i=stack.length-1; i>=0; --i) {
    n = stack[i]
    if(i === 0) {
      n._color = BLACK
      return
    }
    //console.log("visit node:", n.key, i, stack[i].key, stack[i-1].key)
    p = stack[i-1]
    if(p.left === n) {
      //console.log("left child")
      s = p.right
      if(s.right && s.right._color === RED) {
        //console.log("case 1: right sibling child red")
        s = p.right = cloneNode(s)
        z = s.right = cloneNode(s.right)
        p.right = s.left
        s.left = p
        s.right = z
        s._color = p._color
        n._color = BLACK
        p._color = BLACK
        z._color = BLACK
        recount(p)
        recount(s)
        if(i > 1) {
          var pp = stack[i-2]
          if(pp.left === p) {
            pp.left = s
          } else {
            pp.right = s
          }
        }
        stack[i-1] = s
        return
      } else if(s.left && s.left._color === RED) {
        //console.log("case 1: left sibling child red")
        s = p.right = cloneNode(s)
        z = s.left = cloneNode(s.left)
        p.right = z.left
        s.left = z.right
        z.left = p
        z.right = s
        z._color = p._color
        p._color = BLACK
        s._color = BLACK
        n._color = BLACK
        recount(p)
        recount(s)
        recount(z)
        if(i > 1) {
          var pp = stack[i-2]
          if(pp.left === p) {
            pp.left = z
          } else {
            pp.right = z
          }
        }
        stack[i-1] = z
        return
      }
      if(s._color === BLACK) {
        if(p._color === RED) {
          //console.log("case 2: black sibling, red parent", p.right.value)
          p._color = BLACK
          p.right = repaint(RED, s)
          return
        } else {
          //console.log("case 2: black sibling, black parent", p.right.value)
          p.right = repaint(RED, s)
          continue  
        }
      } else {
        //console.log("case 3: red sibling")
        s = cloneNode(s)
        p.right = s.left
        s.left = p
        s._color = p._color
        p._color = RED
        recount(p)
        recount(s)
        if(i > 1) {
          var pp = stack[i-2]
          if(pp.left === p) {
            pp.left = s
          } else {
            pp.right = s
          }
        }
        stack[i-1] = s
        stack[i] = p
        if(i+1 < stack.length) {
          stack[i+1] = n
        } else {
          stack.push(n)
        }
        i = i+2
      }
    } else {
      //console.log("right child")
      s = p.left
      if(s.left && s.left._color === RED) {
        //console.log("case 1: left sibling child red", p.value, p._color)
        s = p.left = cloneNode(s)
        z = s.left = cloneNode(s.left)
        p.left = s.right
        s.right = p
        s.left = z
        s._color = p._color
        n._color = BLACK
        p._color = BLACK
        z._color = BLACK
        recount(p)
        recount(s)
        if(i > 1) {
          var pp = stack[i-2]
          if(pp.right === p) {
            pp.right = s
          } else {
            pp.left = s
          }
        }
        stack[i-1] = s
        return
      } else if(s.right && s.right._color === RED) {
        //console.log("case 1: right sibling child red")
        s = p.left = cloneNode(s)
        z = s.right = cloneNode(s.right)
        p.left = z.right
        s.right = z.left
        z.right = p
        z.left = s
        z._color = p._color
        p._color = BLACK
        s._color = BLACK
        n._color = BLACK
        recount(p)
        recount(s)
        recount(z)
        if(i > 1) {
          var pp = stack[i-2]
          if(pp.right === p) {
            pp.right = z
          } else {
            pp.left = z
          }
        }
        stack[i-1] = z
        return
      }
      if(s._color === BLACK) {
        if(p._color === RED) {
          //console.log("case 2: black sibling, red parent")
          p._color = BLACK
          p.left = repaint(RED, s)
          return
        } else {
          //console.log("case 2: black sibling, black parent")
          p.left = repaint(RED, s)
          continue  
        }
      } else {
        //console.log("case 3: red sibling")
        s = cloneNode(s)
        p.left = s.right
        s.right = p
        s._color = p._color
        p._color = RED
        recount(p)
        recount(s)
        if(i > 1) {
          var pp = stack[i-2]
          if(pp.right === p) {
            pp.right = s
          } else {
            pp.left = s
          }
        }
        stack[i-1] = s
        stack[i] = p
        if(i+1 < stack.length) {
          stack[i+1] = n
        } else {
          stack.push(n)
        }
        i = i+2
      }
    }
  }
}

//Removes item at iterator from tree
iproto.remove = function() {
  var stack = this._stack
  if(stack.length === 0) {
    return this.tree
  }
  //First copy path to node
  var cstack = new Array(stack.length)
  var n = stack[stack.length-1]
  cstack[cstack.length-1] = new RBNode(n._color, n.key, n.value, n.left, n.right, n._count)
  for(var i=stack.length-2; i>=0; --i) {
    var n = stack[i]
    if(n.left === stack[i+1]) {
      cstack[i] = new RBNode(n._color, n.key, n.value, cstack[i+1], n.right, n._count)
    } else {
      cstack[i] = new RBNode(n._color, n.key, n.value, n.left, cstack[i+1], n._count)
    }
  }

  //Get node
  n = cstack[cstack.length-1]
  //console.log("start remove: ", n.value)

  //If not leaf, then swap with previous node
  if(n.left && n.right) {
    //console.log("moving to leaf")

    //First walk to previous leaf
    var split = cstack.length
    n = n.left
    while(n.right) {
      cstack.push(n)
      n = n.right
    }
    //Copy path to leaf
    var v = cstack[split-1]
    cstack.push(new RBNode(n._color, v.key, v.value, n.left, n.right, n._count))
    cstack[split-1].key = n.key
    cstack[split-1].value = n.value

    //Fix up stack
    for(var i=cstack.length-2; i>=split; --i) {
      n = cstack[i]
      cstack[i] = new RBNode(n._color, n.key, n.value, n.left, cstack[i+1], n._count)
    }
    cstack[split-1].left = cstack[split]
  }
  //console.log("stack=", cstack.map(function(v) { return v.value }))

  //Remove leaf node
  n = cstack[cstack.length-1]
  if(n._color === RED) {
    //Easy case: removing red leaf
    //console.log("RED leaf")
    var p = cstack[cstack.length-2]
    if(p.left === n) {
      p.left = null
    } else if(p.right === n) {
      p.right = null
    }
    cstack.pop()
    for(var i=0; i<cstack.length; ++i) {
      cstack[i]._count--
    }
    return new RedBlackTree(this.tree._compare, cstack[0])
  } else {
    if(n.left || n.right) {
      //Second easy case:  Single child black parent
      //console.log("BLACK single child")
      if(n.left) {
        swapNode(n, n.left)
      } else if(n.right) {
        swapNode(n, n.right)
      }
      //Child must be red, so repaint it black to balance color
      n._color = BLACK
      for(var i=0; i<cstack.length-1; ++i) {
        cstack[i]._count--
      }
      return new RedBlackTree(this.tree._compare, cstack[0])
    } else if(cstack.length === 1) {
      //Third easy case: root
      //console.log("ROOT")
      return new RedBlackTree(this.tree._compare, null)
    } else {
      //Hard case: Repaint n, and then do some nasty stuff
      //console.log("BLACK leaf no children")
      for(var i=0; i<cstack.length; ++i) {
        cstack[i]._count--
      }
      var parent = cstack[cstack.length-2]
      fixDoubleBlack(cstack)
      //Fix up links
      if(parent.left === n) {
        parent.left = null
      } else {
        parent.right = null
      }
    }
  }
  return new RedBlackTree(this.tree._compare, cstack[0])
}

//Returns key
Object.defineProperty(iproto, "key", {
  get: function() {
    if(this._stack.length > 0) {
      return this._stack[this._stack.length-1].key
    }
    return
  },
  enumerable: true
})

//Returns value
Object.defineProperty(iproto, "value", {
  get: function() {
    if(this._stack.length > 0) {
      return this._stack[this._stack.length-1].value
    }
    return
  },
  enumerable: true
})


//Returns the position of this iterator in the sorted list
Object.defineProperty(iproto, "index", {
  get: function() {
    var idx = 0
    var stack = this._stack
    if(stack.length === 0) {
      var r = this.tree.root
      if(r) {
        return r._count
      }
      return 0
    } else if(stack[stack.length-1].left) {
      idx = stack[stack.length-1].left._count
    }
    for(var s=stack.length-2; s>=0; --s) {
      if(stack[s+1] === stack[s].right) {
        ++idx
        if(stack[s].left) {
          idx += stack[s].left._count
        }
      }
    }
    return idx
  },
  enumerable: true
})

//Advances iterator to next element in list
iproto.next = function() {
  var stack = this._stack
  if(stack.length === 0) {
    return
  }
  var n = stack[stack.length-1]
  if(n.right) {
    n = n.right
    while(n) {
      stack.push(n)
      n = n.left
    }
  } else {
    stack.pop()
    while(stack.length > 0 && stack[stack.length-1].right === n) {
      n = stack[stack.length-1]
      stack.pop()
    }
  }
}

//Checks if iterator is at end of tree
Object.defineProperty(iproto, "hasNext", {
  get: function() {
    var stack = this._stack
    if(stack.length === 0) {
      return false
    }
    if(stack[stack.length-1].right) {
      return true
    }
    for(var s=stack.length-1; s>0; --s) {
      if(stack[s-1].left === stack[s]) {
        return true
      }
    }
    return false
  }
})

//Update value
iproto.update = function(value) {
  var stack = this._stack
  if(stack.length === 0) {
    throw new Error("Can't update empty node!")
  }
  var cstack = new Array(stack.length)
  var n = stack[stack.length-1]
  cstack[cstack.length-1] = new RBNode(n._color, n.key, value, n.left, n.right, n._count)
  for(var i=stack.length-2; i>=0; --i) {
    n = stack[i]
    if(n.left === stack[i+1]) {
      cstack[i] = new RBNode(n._color, n.key, n.value, cstack[i+1], n.right, n._count)
    } else {
      cstack[i] = new RBNode(n._color, n.key, n.value, n.left, cstack[i+1], n._count)
    }
  }
  return new RedBlackTree(this.tree._compare, cstack[0])
}

//Moves iterator backward one element
iproto.prev = function() {
  var stack = this._stack
  if(stack.length === 0) {
    return
  }
  var n = stack[stack.length-1]
  if(n.left) {
    n = n.left
    while(n) {
      stack.push(n)
      n = n.right
    }
  } else {
    stack.pop()
    while(stack.length > 0 && stack[stack.length-1].left === n) {
      n = stack[stack.length-1]
      stack.pop()
    }
  }
}

//Checks if iterator is at start of tree
Object.defineProperty(iproto, "hasPrev", {
  get: function() {
    var stack = this._stack
    if(stack.length === 0) {
      return false
    }
    if(stack[stack.length-1].left) {
      return true
    }
    for(var s=stack.length-1; s>0; --s) {
      if(stack[s-1].right === stack[s]) {
        return true
      }
    }
    return false
  }
})

//Default comparison function
function defaultCompare(a, b) {
  if(a < b) {
    return -1
  }
  if(a > b) {
    return 1
  }
  return 0
}

//Build a tree
function createRBTree(compare) {
  return new RedBlackTree(compare || defaultCompare, null)
}

/***/ }),

/***/ "../../node_modules/ieee754/index.js":
/*!************************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/ieee754/index.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),

/***/ "../../node_modules/immediate/lib/index.js":
/*!******************************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/immediate/lib/index.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var types = [
  __webpack_require__(/*! ./nextTick */ "../../node_modules/immediate/lib/nextTick.js"),
  __webpack_require__(/*! ./mutation.js */ "../../node_modules/immediate/lib/mutation.js"),
  __webpack_require__(/*! ./messageChannel */ "../../node_modules/immediate/lib/messageChannel.js"),
  __webpack_require__(/*! ./stateChange */ "../../node_modules/immediate/lib/stateChange.js"),
  __webpack_require__(/*! ./timeout */ "../../node_modules/immediate/lib/timeout.js")
];
var draining;
var currentQueue;
var queueIndex = -1;
var queue = [];
var scheduled = false;
function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }
  draining = false;
  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }
  if (queue.length) {
    nextTick();
  }
}

//named nextTick for less confusing stack traces
function nextTick() {
  if (draining) {
    return;
  }
  scheduled = false;
  draining = true;
  var len = queue.length;
  var timeout = setTimeout(cleanUpNextTick);
  while (len) {
    currentQueue = queue;
    queue = [];
    while (currentQueue && ++queueIndex < len) {
      currentQueue[queueIndex].run();
    }
    queueIndex = -1;
    len = queue.length;
  }
  currentQueue = null;
  queueIndex = -1;
  draining = false;
  clearTimeout(timeout);
}
var scheduleDrain;
var i = -1;
var len = types.length;
while (++i < len) {
  if (types[i] && types[i].test && types[i].test()) {
    scheduleDrain = types[i].install(nextTick);
    break;
  }
}
// v8 likes predictible objects
function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}
Item.prototype.run = function () {
  var fun = this.fun;
  var array = this.array;
  switch (array.length) {
  case 0:
    return fun();
  case 1:
    return fun(array[0]);
  case 2:
    return fun(array[0], array[1]);
  case 3:
    return fun(array[0], array[1], array[2]);
  default:
    return fun.apply(null, array);
  }

};
module.exports = immediate;
function immediate(task) {
  var args = new Array(arguments.length - 1);
  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }
  queue.push(new Item(task, args));
  if (!scheduled && !draining) {
    scheduled = true;
    scheduleDrain();
  }
}


/***/ }),

/***/ "../../node_modules/immediate/lib/messageChannel.js":
/*!***************************************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/immediate/lib/messageChannel.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

exports.test = function () {
  if (global.setImmediate) {
    // we can only get here in IE10
    // which doesn't handel postMessage well
    return false;
  }
  return typeof global.MessageChannel !== 'undefined';
};

exports.install = function (func) {
  var channel = new global.MessageChannel();
  channel.port1.onmessage = func;
  return function () {
    channel.port2.postMessage(0);
  };
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../../node_modules/immediate/lib/mutation.js":
/*!*********************************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/immediate/lib/mutation.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
//based off rsvp https://github.com/tildeio/rsvp.js
//license https://github.com/tildeio/rsvp.js/blob/master/LICENSE
//https://github.com/tildeio/rsvp.js/blob/master/lib/rsvp/asap.js

var Mutation = global.MutationObserver || global.WebKitMutationObserver;

exports.test = function () {
  return Mutation;
};

exports.install = function (handle) {
  var called = 0;
  var observer = new Mutation(handle);
  var element = global.document.createTextNode('');
  observer.observe(element, {
    characterData: true
  });
  return function () {
    element.data = (called = ++called % 2);
  };
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../../node_modules/immediate/lib/nextTick.js":
/*!*********************************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/immediate/lib/nextTick.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {
exports.test = function () {
  // Don't get fooled by e.g. browserify environments.
  return (typeof process !== 'undefined') && !process.browser;
};

exports.install = function (func) {
  return function () {
    process.nextTick(func);
  };
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "../../node_modules/process/browser.js")))

/***/ }),

/***/ "../../node_modules/immediate/lib/stateChange.js":
/*!************************************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/immediate/lib/stateChange.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

exports.test = function () {
  return 'document' in global && 'onreadystatechange' in global.document.createElement('script');
};

exports.install = function (handle) {
  return function () {

    // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
    // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
    var scriptEl = global.document.createElement('script');
    scriptEl.onreadystatechange = function () {
      handle();

      scriptEl.onreadystatechange = null;
      scriptEl.parentNode.removeChild(scriptEl);
      scriptEl = null;
    };
    global.document.documentElement.appendChild(scriptEl);

    return handle;
  };
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../../node_modules/immediate/lib/timeout.js":
/*!********************************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/immediate/lib/timeout.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.test = function () {
  return true;
};

exports.install = function (t) {
  return function () {
    setTimeout(t, 0);
  };
};

/***/ }),

/***/ "../../node_modules/inherits/inherits_browser.js":
/*!************************************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/inherits/inherits_browser.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}


/***/ }),

/***/ "../../node_modules/ltgt/index.js":
/*!*********************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/ltgt/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer) {
exports.compare = function (a, b) {

  if(Buffer.isBuffer(a)) {
    var l = Math.min(a.length, b.length)
    for(var i = 0; i < l; i++) {
      var cmp = a[i] - b[i]
      if(cmp) return cmp
    }
    return a.length - b.length
  }

  return a < b ? -1 : a > b ? 1 : 0
}

// to be compatible with the current abstract-leveldown tests
// nullish or empty strings.
// I could use !!val but I want to permit numbers and booleans,
// if possible.

function isDef (val) {
  return val !== undefined && val !== ''
}

function has (range, name) {
  return Object.hasOwnProperty.call(range, name)
}

function hasKey(range, name) {
  return Object.hasOwnProperty.call(range, name) && name
}

var lowerBoundKey = exports.lowerBoundKey = function (range) {
    return (
       hasKey(range, 'gt')
    || hasKey(range, 'gte')
    || hasKey(range, 'min')
    || (range.reverse ? hasKey(range, 'end') : hasKey(range, 'start'))
    || undefined
    )
}

var lowerBound = exports.lowerBound = function (range, def) {
  var k = lowerBoundKey(range)
  return k ? range[k] : def
}

var lowerBoundInclusive = exports.lowerBoundInclusive = function (range) {
  return has(range, 'gt') ? false : true
}

var upperBoundInclusive = exports.upperBoundInclusive =
  function (range) {
    return (has(range, 'lt') /*&& !range.maxEx*/) ? false : true
  }

var lowerBoundExclusive = exports.lowerBoundExclusive =
  function (range) {
    return !lowerBoundInclusive(range)
  }

var upperBoundExclusive = exports.upperBoundExclusive =
  function (range) {
    return !upperBoundInclusive(range)
  }

var upperBoundKey = exports.upperBoundKey = function (range) {
    return (
       hasKey(range, 'lt')
    || hasKey(range, 'lte')
    || hasKey(range, 'max')
    || (range.reverse ? hasKey(range, 'start') : hasKey(range, 'end'))
    || undefined
    )
}

var upperBound = exports.upperBound = function (range, def) {
  var k = upperBoundKey(range)
  return k ? range[k] : def
}

exports.start = function (range, def) {
  return range.reverse ? upperBound(range, def) : lowerBound(range, def)
}
exports.end = function (range, def) {
  return range.reverse ? lowerBound(range, def) : upperBound(range, def)
}
exports.startInclusive = function (range) {
  return (
    range.reverse
  ? upperBoundInclusive(range)
  : lowerBoundInclusive(range)
  )
}
exports.endInclusive = function (range) {
  return (
    range.reverse
  ? lowerBoundInclusive(range)
  : upperBoundInclusive(range)
  )
}

function id (e) { return e }

exports.toLtgt = function (range, _range, map, lower, upper) {
  _range = _range || {}
  map = map || id
  var defaults = arguments.length > 3
  var lb = exports.lowerBoundKey(range)
  var ub = exports.upperBoundKey(range)
  if(lb) {
    if(lb === 'gt') _range.gt = map(range.gt, false)
    else            _range.gte = map(range[lb], false)
  }
  else if(defaults)
    _range.gte = map(lower, false)

  if(ub) {
    if(ub === 'lt') _range.lt = map(range.lt, true)
    else            _range.lte = map(range[ub], true)
  }
  else if(defaults)
    _range.lte = map(upper, true)

  if(range.reverse != null)
    _range.reverse = !!range.reverse

  //if range was used mutably
  //(in level-sublevel it's part of an options object
  //that has more properties on it.)
  if(has(_range, 'max'))   delete _range.max
  if(has(_range, 'min'))   delete _range.min
  if(has(_range, 'start')) delete _range.start
  if(has(_range, 'end'))   delete _range.end

  return _range
}

exports.contains = function (range, key, compare) {
  compare = compare || exports.compare

  var lb = lowerBound(range)
  if(isDef(lb)) {
    var cmp = compare(key, lb)
    if(cmp < 0 || (cmp === 0 && lowerBoundExclusive(range)))
      return false
  }

  var ub = upperBound(range)
  if(isDef(ub)) {
    var cmp = compare(key, ub)
    if(cmp > 0 || (cmp === 0) && upperBoundExclusive(range))
      return false
  }

  return true
}

exports.filter = function (range, compare) {
  return function (key) {
    return exports.contains(range, key, compare)
  }
}



/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../buffer/index.js */ "../../node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "../../node_modules/memdown/immediate-browser.js":
/*!************************************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/memdown/immediate-browser.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! immediate */ "../../node_modules/immediate/lib/index.js")


/***/ }),

/***/ "../../node_modules/memdown/memdown.js":
/*!**************************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/memdown/memdown.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var inherits = __webpack_require__(/*! inherits */ "../../node_modules/inherits/inherits_browser.js")
var AbstractLevelDOWN = __webpack_require__(/*! abstract-leveldown */ "../../node_modules/abstract-leveldown/index.js").AbstractLevelDOWN
var AbstractIterator = __webpack_require__(/*! abstract-leveldown */ "../../node_modules/abstract-leveldown/index.js").AbstractIterator
var ltgt = __webpack_require__(/*! ltgt */ "../../node_modules/ltgt/index.js")
var createRBT = __webpack_require__(/*! functional-red-black-tree */ "../../node_modules/functional-red-black-tree/rbtree.js")
var Buffer = __webpack_require__(/*! safe-buffer */ "../../node_modules/safe-buffer/index.js").Buffer

// In Node, use global.setImmediate. In the browser, use a consistent
// microtask library to give consistent microtask experience to all browsers
var setImmediate = __webpack_require__(/*! ./immediate */ "../../node_modules/memdown/immediate-browser.js")

function gt (value) {
  return ltgt.compare(value, this._upperBound) > 0
}

function gte (value) {
  return ltgt.compare(value, this._upperBound) >= 0
}

function lt (value) {
  return ltgt.compare(value, this._upperBound) < 0
}

function lte (value) {
  return ltgt.compare(value, this._upperBound) <= 0
}

function MemIterator (db, options) {
  AbstractIterator.call(this, db)
  this._limit = options.limit

  if (this._limit === -1) this._limit = Infinity

  var tree = db._store

  this.keyAsBuffer = options.keyAsBuffer !== false
  this.valueAsBuffer = options.valueAsBuffer !== false
  this._reverse = options.reverse
  this._options = options
  this._done = 0

  if (!this._reverse) {
    this._incr = 'next'
    this._lowerBound = ltgt.lowerBound(options)
    this._upperBound = ltgt.upperBound(options)

    if (typeof this._lowerBound === 'undefined') {
      this._tree = tree.begin
    } else if (ltgt.lowerBoundInclusive(options)) {
      this._tree = tree.ge(this._lowerBound)
    } else {
      this._tree = tree.gt(this._lowerBound)
    }

    if (this._upperBound) {
      if (ltgt.upperBoundInclusive(options)) {
        this._test = lte
      } else {
        this._test = lt
      }
    }
  } else {
    this._incr = 'prev'
    this._lowerBound = ltgt.upperBound(options)
    this._upperBound = ltgt.lowerBound(options)

    if (typeof this._lowerBound === 'undefined') {
      this._tree = tree.end
    } else if (ltgt.upperBoundInclusive(options)) {
      this._tree = tree.le(this._lowerBound)
    } else {
      this._tree = tree.lt(this._lowerBound)
    }

    if (this._upperBound) {
      if (ltgt.lowerBoundInclusive(options)) {
        this._test = gte
      } else {
        this._test = gt
      }
    }
  }
}

inherits(MemIterator, AbstractIterator)

MemIterator.prototype._next = function (callback) {
  var key
  var value

  if (this._done++ >= this._limit) return setImmediate(callback)
  if (!this._tree.valid) return setImmediate(callback)

  key = this._tree.key
  value = this._tree.value

  if (!this._test(key)) return setImmediate(callback)

  if (this.keyAsBuffer && !Buffer.isBuffer(key)) {
    key = Buffer.from(String(key))
  }

  if (this.valueAsBuffer && !Buffer.isBuffer(value)) {
    value = Buffer.from(String(value))
  }

  this._tree[this._incr]()

  setImmediate(function callNext () {
    callback(null, key, value)
  })
}

MemIterator.prototype._test = function () {
  return true
}

function MemDOWN () {
  if (!(this instanceof MemDOWN)) return new MemDOWN()

  AbstractLevelDOWN.call(this, '')

  this._store = createRBT(ltgt.compare)
}

inherits(MemDOWN, AbstractLevelDOWN)

MemDOWN.prototype._open = function (options, callback) {
  var self = this
  setImmediate(function callNext () {
    callback(null, self)
  })
}

MemDOWN.prototype._serializeKey = function (key) {
  return key
}

MemDOWN.prototype._serializeValue = function (value) {
  return value == null ? '' : value
}

MemDOWN.prototype._put = function (key, value, options, callback) {
  var iter = this._store.find(key)

  if (iter.valid) {
    this._store = iter.update(value)
  } else {
    this._store = this._store.insert(key, value)
  }

  setImmediate(callback)
}

MemDOWN.prototype._get = function (key, options, callback) {
  var value = this._store.get(key)

  if (typeof value === 'undefined') {
    // 'NotFound' error, consistent with LevelDOWN API
    return setImmediate(function callNext () {
      callback(new Error('NotFound'))
    })
  }

  if (options.asBuffer !== false && !Buffer.isBuffer(value)) {
    value = Buffer.from(String(value))
  }

  setImmediate(function callNext () {
    callback(null, value)
  })
}

MemDOWN.prototype._del = function (key, options, callback) {
  this._store = this._store.remove(key)
  setImmediate(callback)
}

MemDOWN.prototype._batch = function (array, options, callback) {
  var i = -1
  var key
  var value
  var iter
  var len = array.length
  var tree = this._store

  while (++i < len) {
    key = array[i].key
    iter = tree.find(key)

    if (array[i].type === 'put') {
      value = array[i].value
      tree = iter.valid ? iter.update(value) : tree.insert(key, value)
    } else {
      tree = iter.remove()
    }
  }

  this._store = tree

  setImmediate(callback)
}

MemDOWN.prototype._iterator = function (options) {
  return new MemIterator(this, options)
}

module.exports = MemDOWN.default = MemDOWN


/***/ }),

/***/ "../../node_modules/process/browser.js":
/*!**************************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/process/browser.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "../../node_modules/safe-buffer/index.js":
/*!****************************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/safe-buffer/index.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable node/no-deprecated-api */
var buffer = __webpack_require__(/*! buffer */ "../../node_modules/buffer/index.js")
var Buffer = buffer.Buffer

// alternative to using Object.keys for old browsers
function copyProps (src, dst) {
  for (var key in src) {
    dst[key] = src[key]
  }
}
if (Buffer.from && Buffer.alloc && Buffer.allocUnsafe && Buffer.allocUnsafeSlow) {
  module.exports = buffer
} else {
  // Copy properties from require('buffer')
  copyProps(buffer, exports)
  exports.Buffer = SafeBuffer
}

function SafeBuffer (arg, encodingOrOffset, length) {
  return Buffer(arg, encodingOrOffset, length)
}

// Copy static methods from Buffer
copyProps(Buffer, SafeBuffer)

SafeBuffer.from = function (arg, encodingOrOffset, length) {
  if (typeof arg === 'number') {
    throw new TypeError('Argument must not be a number')
  }
  return Buffer(arg, encodingOrOffset, length)
}

SafeBuffer.alloc = function (size, fill, encoding) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  var buf = Buffer(size)
  if (fill !== undefined) {
    if (typeof encoding === 'string') {
      buf.fill(fill, encoding)
    } else {
      buf.fill(fill)
    }
  } else {
    buf.fill(0)
  }
  return buf
}

SafeBuffer.allocUnsafe = function (size) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  return Buffer(size)
}

SafeBuffer.allocUnsafeSlow = function (size) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  return buffer.SlowBuffer(size)
}


/***/ }),

/***/ "../../node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "../../node_modules/xtend/immutable.js":
/*!**************************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/xtend/immutable.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = extend

var hasOwnProperty = Object.prototype.hasOwnProperty;

function extend() {
    var target = {}

    for (var i = 0; i < arguments.length; i++) {
        var source = arguments[i]

        for (var key in source) {
            if (hasOwnProperty.call(source, key)) {
                target[key] = source[key]
            }
        }
    }

    return target
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: memDownCache, MemCacheMixins */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _memdownCache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./memdownCache */ "./src/memdownCache.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "memDownCache", function() { return _memdownCache__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _memcache_mixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./memcache.mixins */ "./src/memcache.mixins.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MemCacheMixins", function() { return _memcache_mixins__WEBPACK_IMPORTED_MODULE_1__["default"]; });




/***/ }),

/***/ "./src/memcache.mixins.js":
/*!********************************!*\
  !*** ./src/memcache.mixins.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * This mixins class provides attributes: **MemCache**.
 * @class MemCacheMixins
 * @extends {BaseClass}
 */
const MemCacheMixins = BaseClass => class extends BaseClass {
  /**
   * This methods return summary about items of the current memcache 
   * @returns
   */
  async memCacheSummary() {
    return await this.memCache.getItemList();
  }

  set MemCache(memCache) {
    this.memCache = memCache;
  }

  get MemCache() {
    return this.memCache;
  }

};

/* harmony default export */ __webpack_exports__["default"] = (MemCacheMixins);

/***/ }),

/***/ "./src/memdownCache.js":
/*!*****************************!*\
  !*** ./src/memdownCache.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! causal-net.utils */ "causal-net.utils");
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(causal_net_utils__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var causal_net_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! causal-net.core */ "causal-net.core");
/* harmony import */ var causal_net_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(causal_net_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _memorizing_mixins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./memorizing.mixins */ "./src/memorizing.mixins.js");



/**
 * This class provides storage implementation for memory caching on top of
 * [memdown](https://www.npmjs.com/package/memdown) which can be accessed via **memDownCache**.
 * { mixWith: [ MemorizingMixins ] }
 * @class MemdownCache
 * @extends BaseMemCache
 */

class MemdownCache extends causal_net_utils__WEBPACK_IMPORTED_MODULE_0__["platform"].mixWith(causal_net_core__WEBPACK_IMPORTED_MODULE_1__["Store"], [_memorizing_mixins__WEBPACK_IMPORTED_MODULE_2__["default"]]) {
  constructor() {
    super();
    this.connect();
  }
  /**
   * Connect to database, this function shall be call when construct instance
   * @memberof MemdownCache
   */


  connect() {
    let memdown = __webpack_require__(/*! memdown */ "../../node_modules/memdown/memdown.js");

    this.store = this.levelup(memdown());
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new MemdownCache());

/***/ }),

/***/ "./src/memorizing.mixins.js":
/*!**********************************!*\
  !*** ./src/memorizing.mixins.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * This MemorizingMixins class is a mixins class for implement memory methods
 * @class MemorizingMixins
 * @experiment
 * @extends BaseMemCacheClass
 */
const MemorizingMixins = BaseMemCacheClass => class extends BaseMemCacheClass {
  /**
   * Read content from 
   * @experiment
   * @param { String|Number } memorySlotIndex - memory slot index
   * @returns
   */
  async read(memorySlotIndex) {
    const GetFromMemory = async memorySlotIndex => {
      try {
        let data = await this.getItem(memorySlotIndex);
        return Object.values(data)[0];
      } catch (err) {
        return null;
      }
    };

    return await GetFromMemory(memorySlotIndex);
  }
  /**
   * 
   * @param { String|Number } memorySlotIndex - positive number for memory slot
   * @param { Array } memory value
   * @returns { Promise } memory slot index value
   */


  async write(memorySlotIndex, value) {
    return await this.setItem(memorySlotIndex, value);
  }
  /**
   *
   *
   * @param {*} slotIdxs
   * @returns
   */


  async recall(slotIdxs) {
    let memory = [];

    for (let slotIdx of slotIdxs) {
      memory.push((await this.read(slotIdx)));
    }

    return memory;
  }

};

/* harmony default export */ __webpack_exports__["default"] = (MemorizingMixins);

/***/ }),

/***/ "causal-net.core":
/*!**********************************!*\
  !*** external "causal-net.core" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_causal_net_core__;

/***/ }),

/***/ "causal-net.utils":
/*!***********************************!*\
  !*** external "causal-net.utils" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_causal_net_utils__;

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L21lbWNhY2hlL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L21lbWNhY2hlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0BjYXVzYWxOZXQvbWVtY2FjaGUvL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvYWJzdHJhY3QtbGV2ZWxkb3duL2Fic3RyYWN0LWNoYWluZWQtYmF0Y2guanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9tZW1jYWNoZS8vaG9tZS9odXluaG5ndXllbi9naXRodWIvY2F1c2FsaXR5L25vZGVfbW9kdWxlcy9hYnN0cmFjdC1sZXZlbGRvd24vYWJzdHJhY3QtaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9tZW1jYWNoZS8vaG9tZS9odXluaG5ndXllbi9naXRodWIvY2F1c2FsaXR5L25vZGVfbW9kdWxlcy9hYnN0cmFjdC1sZXZlbGRvd24vYWJzdHJhY3QtbGV2ZWxkb3duLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbWVtY2FjaGUvL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvYWJzdHJhY3QtbGV2ZWxkb3duL2luZGV4LmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbWVtY2FjaGUvL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvYmFzZTY0LWpzL2luZGV4LmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbWVtY2FjaGUvL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvYnVmZmVyL2luZGV4LmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbWVtY2FjaGUvL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvYnVmZmVyL25vZGVfbW9kdWxlcy9pc2FycmF5L2luZGV4LmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbWVtY2FjaGUvL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvZnVuY3Rpb25hbC1yZWQtYmxhY2stdHJlZS9yYnRyZWUuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9tZW1jYWNoZS8vaG9tZS9odXluaG5ndXllbi9naXRodWIvY2F1c2FsaXR5L25vZGVfbW9kdWxlcy9pZWVlNzU0L2luZGV4LmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbWVtY2FjaGUvL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvaW1tZWRpYXRlL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L21lbWNhY2hlLy9ob21lL2h1eW5obmd1eWVuL2dpdGh1Yi9jYXVzYWxpdHkvbm9kZV9tb2R1bGVzL2ltbWVkaWF0ZS9saWIvbWVzc2FnZUNoYW5uZWwuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9tZW1jYWNoZS8vaG9tZS9odXluaG5ndXllbi9naXRodWIvY2F1c2FsaXR5L25vZGVfbW9kdWxlcy9pbW1lZGlhdGUvbGliL211dGF0aW9uLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbWVtY2FjaGUvL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvaW1tZWRpYXRlL2xpYi9uZXh0VGljay5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L21lbWNhY2hlLy9ob21lL2h1eW5obmd1eWVuL2dpdGh1Yi9jYXVzYWxpdHkvbm9kZV9tb2R1bGVzL2ltbWVkaWF0ZS9saWIvc3RhdGVDaGFuZ2UuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9tZW1jYWNoZS8vaG9tZS9odXluaG5ndXllbi9naXRodWIvY2F1c2FsaXR5L25vZGVfbW9kdWxlcy9pbW1lZGlhdGUvbGliL3RpbWVvdXQuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9tZW1jYWNoZS8vaG9tZS9odXluaG5ndXllbi9naXRodWIvY2F1c2FsaXR5L25vZGVfbW9kdWxlcy9pbmhlcml0cy9pbmhlcml0c19icm93c2VyLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbWVtY2FjaGUvL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvbHRndC9pbmRleC5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L21lbWNhY2hlLy9ob21lL2h1eW5obmd1eWVuL2dpdGh1Yi9jYXVzYWxpdHkvbm9kZV9tb2R1bGVzL21lbWRvd24vaW1tZWRpYXRlLWJyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9tZW1jYWNoZS8vaG9tZS9odXluaG5ndXllbi9naXRodWIvY2F1c2FsaXR5L25vZGVfbW9kdWxlcy9tZW1kb3duL21lbWRvd24uanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9tZW1jYWNoZS8vaG9tZS9odXluaG5ndXllbi9naXRodWIvY2F1c2FsaXR5L25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9tZW1jYWNoZS8vaG9tZS9odXluaG5ndXllbi9naXRodWIvY2F1c2FsaXR5L25vZGVfbW9kdWxlcy9zYWZlLWJ1ZmZlci9pbmRleC5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L21lbWNhY2hlLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L21lbWNhY2hlLy9ob21lL2h1eW5obmd1eWVuL2dpdGh1Yi9jYXVzYWxpdHkvbm9kZV9tb2R1bGVzL3h0ZW5kL2ltbXV0YWJsZS5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L21lbWNhY2hlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbWVtY2FjaGUvLi9zcmMvbWVtY2FjaGUubWl4aW5zLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbWVtY2FjaGUvLi9zcmMvbWVtZG93bkNhY2hlLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbWVtY2FjaGUvLi9zcmMvbWVtb3JpemluZy5taXhpbnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9tZW1jYWNoZS9leHRlcm5hbCBcImNhdXNhbC1uZXQuY29yZVwiIiwid2VicGFjazovL0BjYXVzYWxOZXQvbWVtY2FjaGUvZXh0ZXJuYWwgXCJjYXVzYWwtbmV0LnV0aWxzXCIiXSwibmFtZXMiOlsiTWVtQ2FjaGVNaXhpbnMiLCJCYXNlQ2xhc3MiLCJtZW1DYWNoZVN1bW1hcnkiLCJtZW1DYWNoZSIsImdldEl0ZW1MaXN0IiwiTWVtQ2FjaGUiLCJNZW1kb3duQ2FjaGUiLCJwbGF0Zm9ybSIsIm1peFdpdGgiLCJCYXNlTWVtQ2FjaGUiLCJNZW1vcml6aW5nTWl4aW5zIiwiY29uc3RydWN0b3IiLCJjb25uZWN0IiwibWVtZG93biIsInJlcXVpcmUiLCJzdG9yZSIsImxldmVsdXAiLCJCYXNlTWVtQ2FjaGVDbGFzcyIsInJlYWQiLCJtZW1vcnlTbG90SW5kZXgiLCJHZXRGcm9tTWVtb3J5IiwiZGF0YSIsImdldEl0ZW0iLCJPYmplY3QiLCJ2YWx1ZXMiLCJlcnIiLCJ3cml0ZSIsInZhbHVlIiwic2V0SXRlbSIsInJlY2FsbCIsInNsb3RJZHhzIiwibWVtb3J5Iiwic2xvdElkeCIsInB1c2giXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLFlBQVk7O0FBRVo7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EseUJBQXlCLHNDQUFzQztBQUMvRDs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsWUFBWTs7QUFFWjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSx5QkFBeUIsd0JBQXdCO0FBQ2pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxzQ0FBc0M7QUFDdEM7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLGFBQWE7O0FBRWpEOztBQUVBO0FBQ0EsMENBQTBDOztBQUUxQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7OztBQ3ZGQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7OztBQ3ZEQTs7QUFFQSxZQUFZLG1CQUFPLENBQUMsb0RBQU87QUFDM0IsdUJBQXVCLG1CQUFPLENBQUMsdUZBQXFCO0FBQ3BELDJCQUEyQixtQkFBTyxDQUFDLGlHQUEwQjtBQUM3RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHNDQUFzQzs7QUFFdEM7QUFDQTtBQUNBOztBQUVBLG9DQUFvQyxhQUFhOztBQUVqRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQ0FBc0M7O0FBRXRDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLG9DQUFvQyxhQUFhOztBQUVqRDs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsZ0NBQWdDLGtDQUFrQztBQUNsRTs7QUFFQTtBQUNBLHNDQUFzQzs7QUFFdEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxvQ0FBb0MsYUFBYTs7QUFFakQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQ0FBc0M7O0FBRXRDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLG9DQUFvQyxhQUFhOztBQUVqRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQjs7QUFFMUIsc0NBQXNDOztBQUV0QyxvQ0FBb0M7O0FBRXBDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsZ0RBQWdELGFBQWE7O0FBRTdEOztBQUVBLGlCQUFpQixrQkFBa0I7QUFDbkM7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLDJCQUEyQjs7QUFFM0I7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9DQUFvQyxhQUFhO0FBQ2pEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7QUN0UUEsNEJBQTRCLG1CQUFPLENBQUMseUZBQXNCO0FBQzFELDJCQUEyQixtQkFBTyxDQUFDLHVGQUFxQjtBQUN4RCwrQkFBK0IsbUJBQU8sQ0FBQyxpR0FBMEI7Ozs7Ozs7Ozs7Ozs7QUNGckQ7O0FBRVo7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtDQUFrQyxTQUFTO0FBQzNDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsU0FBUztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLFNBQVM7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQ0FBMEMsVUFBVTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3RKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFWTs7QUFFWixhQUFhLG1CQUFPLENBQUMsd0RBQVc7QUFDaEMsY0FBYyxtQkFBTyxDQUFDLG9EQUFTO0FBQy9CLGNBQWMsbUJBQU8sQ0FBQyx3RUFBUzs7QUFFL0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixtREFBbUQ7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixVQUFVO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixZQUFZO0FBQzdCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsdUNBQXVDLFNBQVM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxpQkFBaUI7QUFDaEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLGlCQUFpQjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsU0FBUztBQUMxQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFNBQVM7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFNBQVM7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsRUFBRTtBQUNsRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpQkFBaUIsU0FBUztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZUFBZTtBQUN2QztBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSx3QkFBd0IsUUFBUTtBQUNoQztBQUNBLHFCQUFxQixlQUFlO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixZQUFZO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIsU0FBUztBQUM5QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLFNBQVM7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCLFNBQVM7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGtCQUFrQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsbUJBQW1CLGNBQWM7QUFDakM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RCxPQUFPO0FBQzlEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQsT0FBTztBQUM5RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0I7QUFDbEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUIsUUFBUTtBQUM3QjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsZUFBZSxTQUFTO0FBQ3hCO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CLFNBQVM7QUFDNUI7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsaUJBQWlCO0FBQ2hDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLFlBQVk7QUFDN0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQixnQkFBZ0I7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsZ0JBQWdCO0FBQ2pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixZQUFZO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDNXZEQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ0pZOztBQUVaOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixNQUFNO0FBQ25DO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLEtBQUs7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLE1BQU07QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixNQUFNO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4QkFBOEIsVUFBVTtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELGlCQUFpQjs7QUFFbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsaUJBQWlCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLG1CQUFtQjtBQUNyQztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSw2QkFBNkIsTUFBTTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixLQUFLO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLE1BQU07QUFDakM7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsS0FBSztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7O0FDbitCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUSxXQUFXOztBQUVuQjtBQUNBO0FBQ0E7QUFDQSxRQUFRLFdBQVc7O0FBRW5CO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxRQUFRLFdBQVc7O0FBRW5CO0FBQ0E7QUFDQSxRQUFRLFVBQVU7O0FBRWxCO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNuRmE7QUFDYjtBQUNBLEVBQUUsbUJBQU8sQ0FBQyxnRUFBWTtBQUN0QixFQUFFLG1CQUFPLENBQUMsbUVBQWU7QUFDekIsRUFBRSxtQkFBTyxDQUFDLDRFQUFrQjtBQUM1QixFQUFFLG1CQUFPLENBQUMsc0VBQWU7QUFDekIsRUFBRSxtQkFBTyxDQUFDLDhEQUFXO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHNCQUFzQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUMvRkEsOENBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7Ozs7O0FDakJBLDhDQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7Ozs7Ozs7OztBQ3JCQSwrQ0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDVkEsOENBQWE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7Ozs7QUN2QmE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7OztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDckJBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0IsT0FBTztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2xLQSxpQkFBaUIsbUJBQU8sQ0FBQyw0REFBVzs7Ozs7Ozs7Ozs7O0FDQXBDLGVBQWUsbUJBQU8sQ0FBQyxpRUFBVTtBQUNqQyx3QkFBd0IsbUJBQU8sQ0FBQywwRUFBb0I7QUFDcEQsdUJBQXVCLG1CQUFPLENBQUMsMEVBQW9CO0FBQ25ELFdBQVcsbUJBQU8sQ0FBQyw4Q0FBTTtBQUN6QixnQkFBZ0IsbUJBQU8sQ0FBQyx5RkFBMkI7QUFDbkQsYUFBYSxtQkFBTyxDQUFDLDREQUFhOztBQUVsQztBQUNBO0FBQ0EsbUJBQW1CLG1CQUFPLENBQUMsb0VBQWE7O0FBRXhDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQy9NQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUNBQXFDOztBQUVyQztBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixVQUFVOzs7Ozs7Ozs7Ozs7QUN2THRDO0FBQ0EsYUFBYSxtQkFBTyxDQUFDLGtEQUFRO0FBQzdCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUM3REE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBNEM7O0FBRTVDOzs7Ozs7Ozs7Ozs7QUNuQkE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxtQkFBbUIsc0JBQXNCO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBOzs7OztBQUtBLE1BQU1BLGNBQWMsR0FBSUMsU0FBRCxJQUFjLGNBQWNBLFNBQWQsQ0FBdUI7QUFDeEQ7Ozs7QUFJQSxRQUFNQyxlQUFOLEdBQXVCO0FBQ25CLFdBQU8sTUFBTSxLQUFLQyxRQUFMLENBQWNDLFdBQWQsRUFBYjtBQUNIOztBQUVELE1BQUlDLFFBQUosQ0FBYUYsUUFBYixFQUFzQjtBQUNsQixTQUFLQSxRQUFMLEdBQWdCQSxRQUFoQjtBQUNIOztBQUVELE1BQUlFLFFBQUosR0FBYztBQUNWLFdBQU8sS0FBS0YsUUFBWjtBQUNIOztBQWZ1RCxDQUE1RDs7QUFpQmVILDZFQUFmLEU7Ozs7Ozs7Ozs7OztBQ3RCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUFPQSxNQUFNTSxZQUFOLFNBQTJCQyx5REFBUSxDQUFDQyxPQUFULENBQWtCQyxxREFBbEIsRUFDdkIsQ0FBRUMsMERBQUYsQ0FEdUIsQ0FBM0IsQ0FDeUI7QUFDckJDLGFBQVcsR0FBRTtBQUNUO0FBQ0EsU0FBS0MsT0FBTDtBQUNIO0FBQ0Q7Ozs7OztBQUlBQSxTQUFPLEdBQUU7QUFDTCxRQUFJQyxPQUFPLEdBQUdDLG1CQUFPLENBQUMsc0RBQUQsQ0FBckI7O0FBQ0EsU0FBS0MsS0FBTCxHQUFhLEtBQUtDLE9BQUwsQ0FBYUgsT0FBTyxFQUFwQixDQUFiO0FBQ0g7O0FBWm9COztBQWVWLG1FQUFJUCxZQUFKLEVBQWYsRTs7Ozs7Ozs7Ozs7O0FDMUJBO0FBQUE7Ozs7OztBQU1BLE1BQU1JLGdCQUFnQixHQUFJTyxpQkFBRCxJQUFzQixjQUFjQSxpQkFBZCxDQUErQjtBQUMxRTs7Ozs7O0FBTUEsUUFBTUMsSUFBTixDQUFXQyxlQUFYLEVBQTJCO0FBQ3ZCLFVBQU1DLGFBQWEsR0FBRyxNQUFPRCxlQUFQLElBQXlCO0FBQzNDLFVBQUc7QUFDQyxZQUFJRSxJQUFJLEdBQUcsTUFBTSxLQUFLQyxPQUFMLENBQWFILGVBQWIsQ0FBakI7QUFDQSxlQUFPSSxNQUFNLENBQUNDLE1BQVAsQ0FBY0gsSUFBZCxFQUFvQixDQUFwQixDQUFQO0FBQ0gsT0FIRCxDQUlBLE9BQU1JLEdBQU4sRUFBVTtBQUNOLGVBQU8sSUFBUDtBQUNIO0FBQ0osS0FSRDs7QUFTQSxXQUFPLE1BQU1MLGFBQWEsQ0FBQ0QsZUFBRCxDQUExQjtBQUNIO0FBQ0Q7Ozs7Ozs7O0FBTUEsUUFBTU8sS0FBTixDQUFZUCxlQUFaLEVBQTZCUSxLQUE3QixFQUFtQztBQUMvQixXQUFPLE1BQU0sS0FBS0MsT0FBTCxDQUFhVCxlQUFiLEVBQThCUSxLQUE5QixDQUFiO0FBQ0g7QUFDRDs7Ozs7Ozs7QUFNQSxRQUFNRSxNQUFOLENBQWFDLFFBQWIsRUFBc0I7QUFDbEIsUUFBSUMsTUFBTSxHQUFHLEVBQWI7O0FBQ0EsU0FBSSxJQUFJQyxPQUFSLElBQW1CRixRQUFuQixFQUE0QjtBQUN4QkMsWUFBTSxDQUFDRSxJQUFQLEVBQVksTUFBTSxLQUFLZixJQUFMLENBQVVjLE9BQVYsQ0FBbEI7QUFDSDs7QUFDRCxXQUFPRCxNQUFQO0FBQ0g7O0FBeEN5RSxDQUE5RTs7QUEwQ2VyQiwrRUFBZixFOzs7Ozs7Ozs7OztBQ2hEQSw2RDs7Ozs7Ozs7Ozs7QUNBQSw4RCIsImZpbGUiOiJAY2F1c2FsTmV0L21lbWNhY2hlLndlYi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImNhdXNhbC1uZXQuY29yZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQudXRpbHNcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiY2F1c2FsLW5ldC5jb3JlXCIsIFwiY2F1c2FsLW5ldC51dGlsc1wiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJAY2F1c2FsTmV0L21lbWNhY2hlXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiY2F1c2FsLW5ldC5jb3JlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC51dGlsc1wiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiQGNhdXNhbE5ldC9tZW1jYWNoZVwiXSA9IGZhY3Rvcnkocm9vdFtcImNhdXNhbC1uZXQuY29yZVwiXSwgcm9vdFtcImNhdXNhbC1uZXQudXRpbHNcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X2NvcmVfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3V0aWxzX18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8qIENvcHlyaWdodCAoYykgMjAxNyBSb2QgVmFnZywgTUlUIExpY2Vuc2UgKi9cblxuZnVuY3Rpb24gQWJzdHJhY3RDaGFpbmVkQmF0Y2ggKGRiKSB7XG4gIHRoaXMuX2RiID0gZGJcbiAgdGhpcy5fb3BlcmF0aW9ucyA9IFtdXG4gIHRoaXMuX3dyaXR0ZW4gPSBmYWxzZVxufVxuXG5BYnN0cmFjdENoYWluZWRCYXRjaC5wcm90b3R5cGUuX3NlcmlhbGl6ZUtleSA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuIHRoaXMuX2RiLl9zZXJpYWxpemVLZXkoa2V5KVxufVxuXG5BYnN0cmFjdENoYWluZWRCYXRjaC5wcm90b3R5cGUuX3NlcmlhbGl6ZVZhbHVlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiB0aGlzLl9kYi5fc2VyaWFsaXplVmFsdWUodmFsdWUpXG59XG5cbkFic3RyYWN0Q2hhaW5lZEJhdGNoLnByb3RvdHlwZS5fY2hlY2tXcml0dGVuID0gZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy5fd3JpdHRlbikge1xuICAgIHRocm93IG5ldyBFcnJvcignd3JpdGUoKSBhbHJlYWR5IGNhbGxlZCBvbiB0aGlzIGJhdGNoJylcbiAgfVxufVxuXG5BYnN0cmFjdENoYWluZWRCYXRjaC5wcm90b3R5cGUucHV0ID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgdGhpcy5fY2hlY2tXcml0dGVuKClcblxuICB2YXIgZXJyID0gdGhpcy5fZGIuX2NoZWNrS2V5KGtleSwgJ2tleScpXG4gIGlmIChlcnIpIHsgdGhyb3cgZXJyIH1cblxuICBrZXkgPSB0aGlzLl9zZXJpYWxpemVLZXkoa2V5KVxuICB2YWx1ZSA9IHRoaXMuX3NlcmlhbGl6ZVZhbHVlKHZhbHVlKVxuXG4gIHRoaXMuX3B1dChrZXksIHZhbHVlKVxuXG4gIHJldHVybiB0aGlzXG59XG5cbkFic3RyYWN0Q2hhaW5lZEJhdGNoLnByb3RvdHlwZS5fcHV0ID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgdGhpcy5fb3BlcmF0aW9ucy5wdXNoKHsgdHlwZTogJ3B1dCcsIGtleToga2V5LCB2YWx1ZTogdmFsdWUgfSlcbn1cblxuQWJzdHJhY3RDaGFpbmVkQmF0Y2gucHJvdG90eXBlLmRlbCA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgdGhpcy5fY2hlY2tXcml0dGVuKClcblxuICB2YXIgZXJyID0gdGhpcy5fZGIuX2NoZWNrS2V5KGtleSwgJ2tleScpXG4gIGlmIChlcnIpIHsgdGhyb3cgZXJyIH1cblxuICBrZXkgPSB0aGlzLl9zZXJpYWxpemVLZXkoa2V5KVxuICB0aGlzLl9kZWwoa2V5KVxuXG4gIHJldHVybiB0aGlzXG59XG5cbkFic3RyYWN0Q2hhaW5lZEJhdGNoLnByb3RvdHlwZS5fZGVsID0gZnVuY3Rpb24gKGtleSkge1xuICB0aGlzLl9vcGVyYXRpb25zLnB1c2goeyB0eXBlOiAnZGVsJywga2V5OiBrZXkgfSlcbn1cblxuQWJzdHJhY3RDaGFpbmVkQmF0Y2gucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLl9jaGVja1dyaXR0ZW4oKVxuICB0aGlzLl9vcGVyYXRpb25zID0gW11cbiAgdGhpcy5fY2xlYXIoKVxuXG4gIHJldHVybiB0aGlzXG59XG5cbkFic3RyYWN0Q2hhaW5lZEJhdGNoLnByb3RvdHlwZS5fY2xlYXIgPSBmdW5jdGlvbiBub29wICgpIHt9XG5cbkFic3RyYWN0Q2hhaW5lZEJhdGNoLnByb3RvdHlwZS53cml0ZSA9IGZ1bmN0aW9uIChvcHRpb25zLCBjYWxsYmFjaykge1xuICB0aGlzLl9jaGVja1dyaXR0ZW4oKVxuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJykgeyBjYWxsYmFjayA9IG9wdGlvbnMgfVxuICBpZiAodHlwZW9mIGNhbGxiYWNrICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCd3cml0ZSgpIHJlcXVpcmVzIGEgY2FsbGJhY2sgYXJndW1lbnQnKVxuICB9XG4gIGlmICh0eXBlb2Ygb3B0aW9ucyAhPT0gJ29iamVjdCcpIHsgb3B0aW9ucyA9IHt9IH1cblxuICB0aGlzLl93cml0dGVuID0gdHJ1ZVxuXG4gIC8vIEB0cy1pZ25vcmVcbiAgaWYgKHR5cGVvZiB0aGlzLl93cml0ZSA9PT0gJ2Z1bmN0aW9uJykgeyByZXR1cm4gdGhpcy5fd3JpdGUoY2FsbGJhY2spIH1cblxuICBpZiAodHlwZW9mIHRoaXMuX2RiLl9iYXRjaCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB0aGlzLl9kYi5fYmF0Y2godGhpcy5fb3BlcmF0aW9ucywgb3B0aW9ucywgY2FsbGJhY2spXG4gIH1cblxuICBwcm9jZXNzLm5leHRUaWNrKGNhbGxiYWNrKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEFic3RyYWN0Q2hhaW5lZEJhdGNoXG4iLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTcgUm9kIFZhZ2csIE1JVCBMaWNlbnNlICovXG5cbmZ1bmN0aW9uIEFic3RyYWN0SXRlcmF0b3IgKGRiKSB7XG4gIHRoaXMuZGIgPSBkYlxuICB0aGlzLl9lbmRlZCA9IGZhbHNlXG4gIHRoaXMuX25leHRpbmcgPSBmYWxzZVxufVxuXG5BYnN0cmFjdEl0ZXJhdG9yLnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gIHZhciBzZWxmID0gdGhpc1xuXG4gIGlmICh0eXBlb2YgY2FsbGJhY2sgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ25leHQoKSByZXF1aXJlcyBhIGNhbGxiYWNrIGFyZ3VtZW50JylcbiAgfVxuXG4gIGlmIChzZWxmLl9lbmRlZCkge1xuICAgIHByb2Nlc3MubmV4dFRpY2soY2FsbGJhY2ssIG5ldyBFcnJvcignY2Fubm90IGNhbGwgbmV4dCgpIGFmdGVyIGVuZCgpJykpXG4gICAgcmV0dXJuIHNlbGZcbiAgfVxuXG4gIGlmIChzZWxmLl9uZXh0aW5nKSB7XG4gICAgcHJvY2Vzcy5uZXh0VGljayhjYWxsYmFjaywgbmV3IEVycm9yKCdjYW5ub3QgY2FsbCBuZXh0KCkgYmVmb3JlIHByZXZpb3VzIG5leHQoKSBoYXMgY29tcGxldGVkJykpXG4gICAgcmV0dXJuIHNlbGZcbiAgfVxuXG4gIHNlbGYuX25leHRpbmcgPSB0cnVlXG4gIHNlbGYuX25leHQoZnVuY3Rpb24gKCkge1xuICAgIHNlbGYuX25leHRpbmcgPSBmYWxzZVxuICAgIGNhbGxiYWNrLmFwcGx5KG51bGwsIGFyZ3VtZW50cylcbiAgfSlcblxuICByZXR1cm4gc2VsZlxufVxuXG5BYnN0cmFjdEl0ZXJhdG9yLnByb3RvdHlwZS5fbmV4dCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICBwcm9jZXNzLm5leHRUaWNrKGNhbGxiYWNrKVxufVxuXG5BYnN0cmFjdEl0ZXJhdG9yLnByb3RvdHlwZS5lbmQgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBFcnJvcignZW5kKCkgcmVxdWlyZXMgYSBjYWxsYmFjayBhcmd1bWVudCcpXG4gIH1cblxuICBpZiAodGhpcy5fZW5kZWQpIHtcbiAgICByZXR1cm4gcHJvY2Vzcy5uZXh0VGljayhjYWxsYmFjaywgbmV3IEVycm9yKCdlbmQoKSBhbHJlYWR5IGNhbGxlZCBvbiBpdGVyYXRvcicpKVxuICB9XG5cbiAgdGhpcy5fZW5kZWQgPSB0cnVlXG4gIHRoaXMuX2VuZChjYWxsYmFjaylcbn1cblxuQWJzdHJhY3RJdGVyYXRvci5wcm90b3R5cGUuX2VuZCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICBwcm9jZXNzLm5leHRUaWNrKGNhbGxiYWNrKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEFic3RyYWN0SXRlcmF0b3JcbiIsIi8qIENvcHlyaWdodCAoYykgMjAxNyBSb2QgVmFnZywgTUlUIExpY2Vuc2UgKi9cblxudmFyIHh0ZW5kID0gcmVxdWlyZSgneHRlbmQnKVxudmFyIEFic3RyYWN0SXRlcmF0b3IgPSByZXF1aXJlKCcuL2Fic3RyYWN0LWl0ZXJhdG9yJylcbnZhciBBYnN0cmFjdENoYWluZWRCYXRjaCA9IHJlcXVpcmUoJy4vYWJzdHJhY3QtY2hhaW5lZC1iYXRjaCcpXG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5XG52YXIgcmFuZ2VPcHRpb25zID0gJ3N0YXJ0IGVuZCBndCBndGUgbHQgbHRlJy5zcGxpdCgnICcpXG5cbmZ1bmN0aW9uIEFic3RyYWN0TGV2ZWxET1dOIChsb2NhdGlvbikge1xuICBpZiAoIWFyZ3VtZW50cy5sZW5ndGggfHwgbG9jYXRpb24gPT09IHVuZGVmaW5lZCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY29uc3RydWN0b3IgcmVxdWlyZXMgYXQgbGVhc3QgYSBsb2NhdGlvbiBhcmd1bWVudCcpXG4gIH1cblxuICBpZiAodHlwZW9mIGxvY2F0aW9uICE9PSAnc3RyaW5nJykge1xuICAgIHRocm93IG5ldyBFcnJvcignY29uc3RydWN0b3IgcmVxdWlyZXMgYSBsb2NhdGlvbiBzdHJpbmcgYXJndW1lbnQnKVxuICB9XG5cbiAgdGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uXG4gIHRoaXMuc3RhdHVzID0gJ25ldydcbn1cblxuQWJzdHJhY3RMZXZlbERPV04ucHJvdG90eXBlLm9wZW4gPSBmdW5jdGlvbiAob3B0aW9ucywgY2FsbGJhY2spIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG4gIHZhciBvbGRTdGF0dXMgPSB0aGlzLnN0YXR1c1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJykgeyBjYWxsYmFjayA9IG9wdGlvbnMgfVxuXG4gIGlmICh0eXBlb2YgY2FsbGJhY2sgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ29wZW4oKSByZXF1aXJlcyBhIGNhbGxiYWNrIGFyZ3VtZW50JylcbiAgfVxuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucyAhPT0gJ29iamVjdCcpIHsgb3B0aW9ucyA9IHt9IH1cblxuICBvcHRpb25zLmNyZWF0ZUlmTWlzc2luZyA9IG9wdGlvbnMuY3JlYXRlSWZNaXNzaW5nICE9PSBmYWxzZVxuICBvcHRpb25zLmVycm9ySWZFeGlzdHMgPSAhIW9wdGlvbnMuZXJyb3JJZkV4aXN0c1xuXG4gIHRoaXMuc3RhdHVzID0gJ29wZW5pbmcnXG4gIHRoaXMuX29wZW4ob3B0aW9ucywgZnVuY3Rpb24gKGVycikge1xuICAgIGlmIChlcnIpIHtcbiAgICAgIHNlbGYuc3RhdHVzID0gb2xkU3RhdHVzXG4gICAgICByZXR1cm4gY2FsbGJhY2soZXJyKVxuICAgIH1cbiAgICBzZWxmLnN0YXR1cyA9ICdvcGVuJ1xuICAgIGNhbGxiYWNrKClcbiAgfSlcbn1cblxuQWJzdHJhY3RMZXZlbERPV04ucHJvdG90eXBlLl9vcGVuID0gZnVuY3Rpb24gKG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gIHByb2Nlc3MubmV4dFRpY2soY2FsbGJhY2spXG59XG5cbkFic3RyYWN0TGV2ZWxET1dOLnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICB2YXIgc2VsZiA9IHRoaXNcbiAgdmFyIG9sZFN0YXR1cyA9IHRoaXMuc3RhdHVzXG5cbiAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xvc2UoKSByZXF1aXJlcyBhIGNhbGxiYWNrIGFyZ3VtZW50JylcbiAgfVxuXG4gIHRoaXMuc3RhdHVzID0gJ2Nsb3NpbmcnXG4gIHRoaXMuX2Nsb3NlKGZ1bmN0aW9uIChlcnIpIHtcbiAgICBpZiAoZXJyKSB7XG4gICAgICBzZWxmLnN0YXR1cyA9IG9sZFN0YXR1c1xuICAgICAgcmV0dXJuIGNhbGxiYWNrKGVycilcbiAgICB9XG4gICAgc2VsZi5zdGF0dXMgPSAnY2xvc2VkJ1xuICAgIGNhbGxiYWNrKClcbiAgfSlcbn1cblxuQWJzdHJhY3RMZXZlbERPV04ucHJvdG90eXBlLl9jbG9zZSA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICBwcm9jZXNzLm5leHRUaWNrKGNhbGxiYWNrKVxufVxuXG5BYnN0cmFjdExldmVsRE9XTi5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKGtleSwgb3B0aW9ucywgY2FsbGJhY2spIHtcbiAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnZnVuY3Rpb24nKSB7IGNhbGxiYWNrID0gb3B0aW9ucyB9XG5cbiAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBFcnJvcignZ2V0KCkgcmVxdWlyZXMgYSBjYWxsYmFjayBhcmd1bWVudCcpXG4gIH1cblxuICB2YXIgZXJyID0gdGhpcy5fY2hlY2tLZXkoa2V5LCAna2V5JylcbiAgaWYgKGVycikgcmV0dXJuIHByb2Nlc3MubmV4dFRpY2soY2FsbGJhY2ssIGVycilcblxuICBrZXkgPSB0aGlzLl9zZXJpYWxpemVLZXkoa2V5KVxuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucyAhPT0gJ29iamVjdCcpIHsgb3B0aW9ucyA9IHt9IH1cblxuICBvcHRpb25zLmFzQnVmZmVyID0gb3B0aW9ucy5hc0J1ZmZlciAhPT0gZmFsc2VcblxuICB0aGlzLl9nZXQoa2V5LCBvcHRpb25zLCBjYWxsYmFjaylcbn1cblxuQWJzdHJhY3RMZXZlbERPV04ucHJvdG90eXBlLl9nZXQgPSBmdW5jdGlvbiAoa2V5LCBvcHRpb25zLCBjYWxsYmFjaykge1xuICBwcm9jZXNzLm5leHRUaWNrKGZ1bmN0aW9uICgpIHsgY2FsbGJhY2sobmV3IEVycm9yKCdOb3RGb3VuZCcpKSB9KVxufVxuXG5BYnN0cmFjdExldmVsRE9XTi5wcm90b3R5cGUucHV0ID0gZnVuY3Rpb24gKGtleSwgdmFsdWUsIG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJykgeyBjYWxsYmFjayA9IG9wdGlvbnMgfVxuXG4gIGlmICh0eXBlb2YgY2FsbGJhY2sgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3B1dCgpIHJlcXVpcmVzIGEgY2FsbGJhY2sgYXJndW1lbnQnKVxuICB9XG5cbiAgdmFyIGVyciA9IHRoaXMuX2NoZWNrS2V5KGtleSwgJ2tleScpXG4gIGlmIChlcnIpIHJldHVybiBwcm9jZXNzLm5leHRUaWNrKGNhbGxiYWNrLCBlcnIpXG5cbiAga2V5ID0gdGhpcy5fc2VyaWFsaXplS2V5KGtleSlcbiAgdmFsdWUgPSB0aGlzLl9zZXJpYWxpemVWYWx1ZSh2YWx1ZSlcblxuICBpZiAodHlwZW9mIG9wdGlvbnMgIT09ICdvYmplY3QnKSB7IG9wdGlvbnMgPSB7fSB9XG5cbiAgdGhpcy5fcHV0KGtleSwgdmFsdWUsIG9wdGlvbnMsIGNhbGxiYWNrKVxufVxuXG5BYnN0cmFjdExldmVsRE9XTi5wcm90b3R5cGUuX3B1dCA9IGZ1bmN0aW9uIChrZXksIHZhbHVlLCBvcHRpb25zLCBjYWxsYmFjaykge1xuICBwcm9jZXNzLm5leHRUaWNrKGNhbGxiYWNrKVxufVxuXG5BYnN0cmFjdExldmVsRE9XTi5wcm90b3R5cGUuZGVsID0gZnVuY3Rpb24gKGtleSwgb3B0aW9ucywgY2FsbGJhY2spIHtcbiAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnZnVuY3Rpb24nKSB7IGNhbGxiYWNrID0gb3B0aW9ucyB9XG5cbiAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBFcnJvcignZGVsKCkgcmVxdWlyZXMgYSBjYWxsYmFjayBhcmd1bWVudCcpXG4gIH1cblxuICB2YXIgZXJyID0gdGhpcy5fY2hlY2tLZXkoa2V5LCAna2V5JylcbiAgaWYgKGVycikgcmV0dXJuIHByb2Nlc3MubmV4dFRpY2soY2FsbGJhY2ssIGVycilcblxuICBrZXkgPSB0aGlzLl9zZXJpYWxpemVLZXkoa2V5KVxuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucyAhPT0gJ29iamVjdCcpIHsgb3B0aW9ucyA9IHt9IH1cblxuICB0aGlzLl9kZWwoa2V5LCBvcHRpb25zLCBjYWxsYmFjaylcbn1cblxuQWJzdHJhY3RMZXZlbERPV04ucHJvdG90eXBlLl9kZWwgPSBmdW5jdGlvbiAoa2V5LCBvcHRpb25zLCBjYWxsYmFjaykge1xuICBwcm9jZXNzLm5leHRUaWNrKGNhbGxiYWNrKVxufVxuXG5BYnN0cmFjdExldmVsRE9XTi5wcm90b3R5cGUuYmF0Y2ggPSBmdW5jdGlvbiAoYXJyYXksIG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gIGlmICghYXJndW1lbnRzLmxlbmd0aCkgeyByZXR1cm4gdGhpcy5fY2hhaW5lZEJhdGNoKCkgfVxuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJykgeyBjYWxsYmFjayA9IG9wdGlvbnMgfVxuXG4gIGlmICh0eXBlb2YgYXJyYXkgPT09ICdmdW5jdGlvbicpIHsgY2FsbGJhY2sgPSBhcnJheSB9XG5cbiAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBFcnJvcignYmF0Y2goYXJyYXkpIHJlcXVpcmVzIGEgY2FsbGJhY2sgYXJndW1lbnQnKVxuICB9XG5cbiAgaWYgKCFBcnJheS5pc0FycmF5KGFycmF5KSkge1xuICAgIHJldHVybiBwcm9jZXNzLm5leHRUaWNrKGNhbGxiYWNrLCBuZXcgRXJyb3IoJ2JhdGNoKGFycmF5KSByZXF1aXJlcyBhbiBhcnJheSBhcmd1bWVudCcpKVxuICB9XG5cbiAgaWYgKCFvcHRpb25zIHx8IHR5cGVvZiBvcHRpb25zICE9PSAnb2JqZWN0JykgeyBvcHRpb25zID0ge30gfVxuXG4gIHZhciBzZXJpYWxpemVkID0gbmV3IEFycmF5KGFycmF5Lmxlbmd0aClcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHR5cGVvZiBhcnJheVtpXSAhPT0gJ29iamVjdCcgfHwgYXJyYXlbaV0gPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBwcm9jZXNzLm5leHRUaWNrKGNhbGxiYWNrLCBuZXcgRXJyb3IoJ2JhdGNoKGFycmF5KSBlbGVtZW50IG11c3QgYmUgYW4gb2JqZWN0IGFuZCBub3QgYG51bGxgJykpXG4gICAgfVxuXG4gICAgdmFyIGUgPSB4dGVuZChhcnJheVtpXSlcblxuICAgIGlmIChlLnR5cGUgIT09ICdwdXQnICYmIGUudHlwZSAhPT0gJ2RlbCcpIHtcbiAgICAgIHJldHVybiBwcm9jZXNzLm5leHRUaWNrKGNhbGxiYWNrLCBuZXcgRXJyb3IoXCJgdHlwZWAgbXVzdCBiZSAncHV0JyBvciAnZGVsJ1wiKSlcbiAgICB9XG5cbiAgICB2YXIgZXJyID0gdGhpcy5fY2hlY2tLZXkoZS5rZXksICdrZXknKVxuICAgIGlmIChlcnIpIHJldHVybiBwcm9jZXNzLm5leHRUaWNrKGNhbGxiYWNrLCBlcnIpXG5cbiAgICBlLmtleSA9IHRoaXMuX3NlcmlhbGl6ZUtleShlLmtleSlcblxuICAgIGlmIChlLnR5cGUgPT09ICdwdXQnKSB7IGUudmFsdWUgPSB0aGlzLl9zZXJpYWxpemVWYWx1ZShlLnZhbHVlKSB9XG5cbiAgICBzZXJpYWxpemVkW2ldID0gZVxuICB9XG5cbiAgdGhpcy5fYmF0Y2goc2VyaWFsaXplZCwgb3B0aW9ucywgY2FsbGJhY2spXG59XG5cbkFic3RyYWN0TGV2ZWxET1dOLnByb3RvdHlwZS5fYmF0Y2ggPSBmdW5jdGlvbiAoYXJyYXksIG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gIHByb2Nlc3MubmV4dFRpY2soY2FsbGJhY2spXG59XG5cbkFic3RyYWN0TGV2ZWxET1dOLnByb3RvdHlwZS5fc2V0dXBJdGVyYXRvck9wdGlvbnMgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICBvcHRpb25zID0gY2xlYW5SYW5nZU9wdGlvbnMob3B0aW9ucylcblxuICBvcHRpb25zLnJldmVyc2UgPSAhIW9wdGlvbnMucmV2ZXJzZVxuICBvcHRpb25zLmtleXMgPSBvcHRpb25zLmtleXMgIT09IGZhbHNlXG4gIG9wdGlvbnMudmFsdWVzID0gb3B0aW9ucy52YWx1ZXMgIT09IGZhbHNlXG4gIG9wdGlvbnMubGltaXQgPSAnbGltaXQnIGluIG9wdGlvbnMgPyBvcHRpb25zLmxpbWl0IDogLTFcbiAgb3B0aW9ucy5rZXlBc0J1ZmZlciA9IG9wdGlvbnMua2V5QXNCdWZmZXIgIT09IGZhbHNlXG4gIG9wdGlvbnMudmFsdWVBc0J1ZmZlciA9IG9wdGlvbnMudmFsdWVBc0J1ZmZlciAhPT0gZmFsc2VcblxuICByZXR1cm4gb3B0aW9uc1xufVxuXG5mdW5jdGlvbiBjbGVhblJhbmdlT3B0aW9ucyAob3B0aW9ucykge1xuICB2YXIgcmVzdWx0ID0ge31cblxuICBmb3IgKHZhciBrIGluIG9wdGlvbnMpIHtcbiAgICBpZiAoIWhhc093blByb3BlcnR5LmNhbGwob3B0aW9ucywgaykpIGNvbnRpbnVlXG4gICAgaWYgKGlzUmFuZ2VPcHRpb24oaykgJiYgaXNFbXB0eVJhbmdlT3B0aW9uKG9wdGlvbnNba10pKSBjb250aW51ZVxuXG4gICAgcmVzdWx0W2tdID0gb3B0aW9uc1trXVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5mdW5jdGlvbiBpc1JhbmdlT3B0aW9uIChrKSB7XG4gIHJldHVybiByYW5nZU9wdGlvbnMuaW5kZXhPZihrKSAhPT0gLTFcbn1cblxuZnVuY3Rpb24gaXNFbXB0eVJhbmdlT3B0aW9uICh2KSB7XG4gIHJldHVybiB2ID09PSAnJyB8fCB2ID09IG51bGwgfHwgaXNFbXB0eUJ1ZmZlcih2KVxufVxuXG5mdW5jdGlvbiBpc0VtcHR5QnVmZmVyICh2KSB7XG4gIHJldHVybiBCdWZmZXIuaXNCdWZmZXIodikgJiYgdi5sZW5ndGggPT09IDBcbn1cblxuQWJzdHJhY3RMZXZlbERPV04ucHJvdG90eXBlLml0ZXJhdG9yID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBvcHRpb25zICE9PSAnb2JqZWN0JykgeyBvcHRpb25zID0ge30gfVxuICBvcHRpb25zID0gdGhpcy5fc2V0dXBJdGVyYXRvck9wdGlvbnMob3B0aW9ucylcbiAgcmV0dXJuIHRoaXMuX2l0ZXJhdG9yKG9wdGlvbnMpXG59XG5cbkFic3RyYWN0TGV2ZWxET1dOLnByb3RvdHlwZS5faXRlcmF0b3IgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICByZXR1cm4gbmV3IEFic3RyYWN0SXRlcmF0b3IodGhpcylcbn1cblxuQWJzdHJhY3RMZXZlbERPV04ucHJvdG90eXBlLl9jaGFpbmVkQmF0Y2ggPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBuZXcgQWJzdHJhY3RDaGFpbmVkQmF0Y2godGhpcylcbn1cblxuQWJzdHJhY3RMZXZlbERPV04ucHJvdG90eXBlLl9zZXJpYWxpemVLZXkgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiBCdWZmZXIuaXNCdWZmZXIoa2V5KSA/IGtleSA6IFN0cmluZyhrZXkpXG59XG5cbkFic3RyYWN0TGV2ZWxET1dOLnByb3RvdHlwZS5fc2VyaWFsaXplVmFsdWUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgaWYgKHZhbHVlID09IG51bGwpIHJldHVybiAnJ1xuICByZXR1cm4gQnVmZmVyLmlzQnVmZmVyKHZhbHVlKSB8fCBwcm9jZXNzLmJyb3dzZXIgPyB2YWx1ZSA6IFN0cmluZyh2YWx1ZSlcbn1cblxuQWJzdHJhY3RMZXZlbERPV04ucHJvdG90eXBlLl9jaGVja0tleSA9IGZ1bmN0aW9uIChvYmosIHR5cGUpIHtcbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBvYmogPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBuZXcgRXJyb3IodHlwZSArICcgY2Fubm90IGJlIGBudWxsYCBvciBgdW5kZWZpbmVkYCcpXG4gIH1cblxuICBpZiAoQnVmZmVyLmlzQnVmZmVyKG9iaikgJiYgb2JqLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBuZXcgRXJyb3IodHlwZSArICcgY2Fubm90IGJlIGFuIGVtcHR5IEJ1ZmZlcicpXG4gIH1cblxuICBpZiAoU3RyaW5nKG9iaikgPT09ICcnKSB7XG4gICAgcmV0dXJuIG5ldyBFcnJvcih0eXBlICsgJyBjYW5ub3QgYmUgYW4gZW1wdHkgU3RyaW5nJylcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEFic3RyYWN0TGV2ZWxET1dOXG4iLCJleHBvcnRzLkFic3RyYWN0TGV2ZWxET1dOID0gcmVxdWlyZSgnLi9hYnN0cmFjdC1sZXZlbGRvd24nKVxuZXhwb3J0cy5BYnN0cmFjdEl0ZXJhdG9yID0gcmVxdWlyZSgnLi9hYnN0cmFjdC1pdGVyYXRvcicpXG5leHBvcnRzLkFic3RyYWN0Q2hhaW5lZEJhdGNoID0gcmVxdWlyZSgnLi9hYnN0cmFjdC1jaGFpbmVkLWJhdGNoJylcbiIsIid1c2Ugc3RyaWN0J1xuXG5leHBvcnRzLmJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoXG5leHBvcnRzLnRvQnl0ZUFycmF5ID0gdG9CeXRlQXJyYXlcbmV4cG9ydHMuZnJvbUJ5dGVBcnJheSA9IGZyb21CeXRlQXJyYXlcblxudmFyIGxvb2t1cCA9IFtdXG52YXIgcmV2TG9va3VwID0gW11cbnZhciBBcnIgPSB0eXBlb2YgVWludDhBcnJheSAhPT0gJ3VuZGVmaW5lZCcgPyBVaW50OEFycmF5IDogQXJyYXlcblxudmFyIGNvZGUgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLydcbmZvciAodmFyIGkgPSAwLCBsZW4gPSBjb2RlLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gIGxvb2t1cFtpXSA9IGNvZGVbaV1cbiAgcmV2TG9va3VwW2NvZGUuY2hhckNvZGVBdChpKV0gPSBpXG59XG5cbi8vIFN1cHBvcnQgZGVjb2RpbmcgVVJMLXNhZmUgYmFzZTY0IHN0cmluZ3MsIGFzIE5vZGUuanMgZG9lcy5cbi8vIFNlZTogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQmFzZTY0I1VSTF9hcHBsaWNhdGlvbnNcbnJldkxvb2t1cFsnLScuY2hhckNvZGVBdCgwKV0gPSA2MlxucmV2TG9va3VwWydfJy5jaGFyQ29kZUF0KDApXSA9IDYzXG5cbmZ1bmN0aW9uIGdldExlbnMgKGI2NCkge1xuICB2YXIgbGVuID0gYjY0Lmxlbmd0aFxuXG4gIGlmIChsZW4gJSA0ID4gMCkge1xuICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBzdHJpbmcuIExlbmd0aCBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgNCcpXG4gIH1cblxuICAvLyBUcmltIG9mZiBleHRyYSBieXRlcyBhZnRlciBwbGFjZWhvbGRlciBieXRlcyBhcmUgZm91bmRcbiAgLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vYmVhdGdhbW1pdC9iYXNlNjQtanMvaXNzdWVzLzQyXG4gIHZhciB2YWxpZExlbiA9IGI2NC5pbmRleE9mKCc9JylcbiAgaWYgKHZhbGlkTGVuID09PSAtMSkgdmFsaWRMZW4gPSBsZW5cblxuICB2YXIgcGxhY2VIb2xkZXJzTGVuID0gdmFsaWRMZW4gPT09IGxlblxuICAgID8gMFxuICAgIDogNCAtICh2YWxpZExlbiAlIDQpXG5cbiAgcmV0dXJuIFt2YWxpZExlbiwgcGxhY2VIb2xkZXJzTGVuXVxufVxuXG4vLyBiYXNlNjQgaXMgNC8zICsgdXAgdG8gdHdvIGNoYXJhY3RlcnMgb2YgdGhlIG9yaWdpbmFsIGRhdGFcbmZ1bmN0aW9uIGJ5dGVMZW5ndGggKGI2NCkge1xuICB2YXIgbGVucyA9IGdldExlbnMoYjY0KVxuICB2YXIgdmFsaWRMZW4gPSBsZW5zWzBdXG4gIHZhciBwbGFjZUhvbGRlcnNMZW4gPSBsZW5zWzFdXG4gIHJldHVybiAoKHZhbGlkTGVuICsgcGxhY2VIb2xkZXJzTGVuKSAqIDMgLyA0KSAtIHBsYWNlSG9sZGVyc0xlblxufVxuXG5mdW5jdGlvbiBfYnl0ZUxlbmd0aCAoYjY0LCB2YWxpZExlbiwgcGxhY2VIb2xkZXJzTGVuKSB7XG4gIHJldHVybiAoKHZhbGlkTGVuICsgcGxhY2VIb2xkZXJzTGVuKSAqIDMgLyA0KSAtIHBsYWNlSG9sZGVyc0xlblxufVxuXG5mdW5jdGlvbiB0b0J5dGVBcnJheSAoYjY0KSB7XG4gIHZhciB0bXBcbiAgdmFyIGxlbnMgPSBnZXRMZW5zKGI2NClcbiAgdmFyIHZhbGlkTGVuID0gbGVuc1swXVxuICB2YXIgcGxhY2VIb2xkZXJzTGVuID0gbGVuc1sxXVxuXG4gIHZhciBhcnIgPSBuZXcgQXJyKF9ieXRlTGVuZ3RoKGI2NCwgdmFsaWRMZW4sIHBsYWNlSG9sZGVyc0xlbikpXG5cbiAgdmFyIGN1ckJ5dGUgPSAwXG5cbiAgLy8gaWYgdGhlcmUgYXJlIHBsYWNlaG9sZGVycywgb25seSBnZXQgdXAgdG8gdGhlIGxhc3QgY29tcGxldGUgNCBjaGFyc1xuICB2YXIgbGVuID0gcGxhY2VIb2xkZXJzTGVuID4gMFxuICAgID8gdmFsaWRMZW4gLSA0XG4gICAgOiB2YWxpZExlblxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpICs9IDQpIHtcbiAgICB0bXAgPVxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpKV0gPDwgMTgpIHxcbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDEpXSA8PCAxMikgfFxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMildIDw8IDYpIHxcbiAgICAgIHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMyldXG4gICAgYXJyW2N1ckJ5dGUrK10gPSAodG1wID4+IDE2KSAmIDB4RkZcbiAgICBhcnJbY3VyQnl0ZSsrXSA9ICh0bXAgPj4gOCkgJiAweEZGXG4gICAgYXJyW2N1ckJ5dGUrK10gPSB0bXAgJiAweEZGXG4gIH1cblxuICBpZiAocGxhY2VIb2xkZXJzTGVuID09PSAyKSB7XG4gICAgdG1wID1cbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSldIDw8IDIpIHxcbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDEpXSA+PiA0KVxuICAgIGFycltjdXJCeXRlKytdID0gdG1wICYgMHhGRlxuICB9XG5cbiAgaWYgKHBsYWNlSG9sZGVyc0xlbiA9PT0gMSkge1xuICAgIHRtcCA9XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkpXSA8PCAxMCkgfFxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMSldIDw8IDQpIHxcbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDIpXSA+PiAyKVxuICAgIGFycltjdXJCeXRlKytdID0gKHRtcCA+PiA4KSAmIDB4RkZcbiAgICBhcnJbY3VyQnl0ZSsrXSA9IHRtcCAmIDB4RkZcbiAgfVxuXG4gIHJldHVybiBhcnJcbn1cblxuZnVuY3Rpb24gdHJpcGxldFRvQmFzZTY0IChudW0pIHtcbiAgcmV0dXJuIGxvb2t1cFtudW0gPj4gMTggJiAweDNGXSArXG4gICAgbG9va3VwW251bSA+PiAxMiAmIDB4M0ZdICtcbiAgICBsb29rdXBbbnVtID4+IDYgJiAweDNGXSArXG4gICAgbG9va3VwW251bSAmIDB4M0ZdXG59XG5cbmZ1bmN0aW9uIGVuY29kZUNodW5rICh1aW50OCwgc3RhcnQsIGVuZCkge1xuICB2YXIgdG1wXG4gIHZhciBvdXRwdXQgPSBbXVxuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkgKz0gMykge1xuICAgIHRtcCA9XG4gICAgICAoKHVpbnQ4W2ldIDw8IDE2KSAmIDB4RkYwMDAwKSArXG4gICAgICAoKHVpbnQ4W2kgKyAxXSA8PCA4KSAmIDB4RkYwMCkgK1xuICAgICAgKHVpbnQ4W2kgKyAyXSAmIDB4RkYpXG4gICAgb3V0cHV0LnB1c2godHJpcGxldFRvQmFzZTY0KHRtcCkpXG4gIH1cbiAgcmV0dXJuIG91dHB1dC5qb2luKCcnKVxufVxuXG5mdW5jdGlvbiBmcm9tQnl0ZUFycmF5ICh1aW50OCkge1xuICB2YXIgdG1wXG4gIHZhciBsZW4gPSB1aW50OC5sZW5ndGhcbiAgdmFyIGV4dHJhQnl0ZXMgPSBsZW4gJSAzIC8vIGlmIHdlIGhhdmUgMSBieXRlIGxlZnQsIHBhZCAyIGJ5dGVzXG4gIHZhciBwYXJ0cyA9IFtdXG4gIHZhciBtYXhDaHVua0xlbmd0aCA9IDE2MzgzIC8vIG11c3QgYmUgbXVsdGlwbGUgb2YgM1xuXG4gIC8vIGdvIHRocm91Z2ggdGhlIGFycmF5IGV2ZXJ5IHRocmVlIGJ5dGVzLCB3ZSdsbCBkZWFsIHdpdGggdHJhaWxpbmcgc3R1ZmYgbGF0ZXJcbiAgZm9yICh2YXIgaSA9IDAsIGxlbjIgPSBsZW4gLSBleHRyYUJ5dGVzOyBpIDwgbGVuMjsgaSArPSBtYXhDaHVua0xlbmd0aCkge1xuICAgIHBhcnRzLnB1c2goZW5jb2RlQ2h1bmsoXG4gICAgICB1aW50OCwgaSwgKGkgKyBtYXhDaHVua0xlbmd0aCkgPiBsZW4yID8gbGVuMiA6IChpICsgbWF4Q2h1bmtMZW5ndGgpXG4gICAgKSlcbiAgfVxuXG4gIC8vIHBhZCB0aGUgZW5kIHdpdGggemVyb3MsIGJ1dCBtYWtlIHN1cmUgdG8gbm90IGZvcmdldCB0aGUgZXh0cmEgYnl0ZXNcbiAgaWYgKGV4dHJhQnl0ZXMgPT09IDEpIHtcbiAgICB0bXAgPSB1aW50OFtsZW4gLSAxXVxuICAgIHBhcnRzLnB1c2goXG4gICAgICBsb29rdXBbdG1wID4+IDJdICtcbiAgICAgIGxvb2t1cFsodG1wIDw8IDQpICYgMHgzRl0gK1xuICAgICAgJz09J1xuICAgIClcbiAgfSBlbHNlIGlmIChleHRyYUJ5dGVzID09PSAyKSB7XG4gICAgdG1wID0gKHVpbnQ4W2xlbiAtIDJdIDw8IDgpICsgdWludDhbbGVuIC0gMV1cbiAgICBwYXJ0cy5wdXNoKFxuICAgICAgbG9va3VwW3RtcCA+PiAxMF0gK1xuICAgICAgbG9va3VwWyh0bXAgPj4gNCkgJiAweDNGXSArXG4gICAgICBsb29rdXBbKHRtcCA8PCAyKSAmIDB4M0ZdICtcbiAgICAgICc9J1xuICAgIClcbiAgfVxuXG4gIHJldHVybiBwYXJ0cy5qb2luKCcnKVxufVxuIiwiLyohXG4gKiBUaGUgYnVmZmVyIG1vZHVsZSBmcm9tIG5vZGUuanMsIGZvciB0aGUgYnJvd3Nlci5cbiAqXG4gKiBAYXV0aG9yICAgRmVyb3NzIEFib3VraGFkaWplaCA8ZmVyb3NzQGZlcm9zcy5vcmc+IDxodHRwOi8vZmVyb3NzLm9yZz5cbiAqIEBsaWNlbnNlICBNSVRcbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcHJvdG8gKi9cblxuJ3VzZSBzdHJpY3QnXG5cbnZhciBiYXNlNjQgPSByZXF1aXJlKCdiYXNlNjQtanMnKVxudmFyIGllZWU3NTQgPSByZXF1aXJlKCdpZWVlNzU0JylcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnaXNhcnJheScpXG5cbmV4cG9ydHMuQnVmZmVyID0gQnVmZmVyXG5leHBvcnRzLlNsb3dCdWZmZXIgPSBTbG93QnVmZmVyXG5leHBvcnRzLklOU1BFQ1RfTUFYX0JZVEVTID0gNTBcblxuLyoqXG4gKiBJZiBgQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlRgOlxuICogICA9PT0gdHJ1ZSAgICBVc2UgVWludDhBcnJheSBpbXBsZW1lbnRhdGlvbiAoZmFzdGVzdClcbiAqICAgPT09IGZhbHNlICAgVXNlIE9iamVjdCBpbXBsZW1lbnRhdGlvbiAobW9zdCBjb21wYXRpYmxlLCBldmVuIElFNilcbiAqXG4gKiBCcm93c2VycyB0aGF0IHN1cHBvcnQgdHlwZWQgYXJyYXlzIGFyZSBJRSAxMCssIEZpcmVmb3ggNCssIENocm9tZSA3KywgU2FmYXJpIDUuMSssXG4gKiBPcGVyYSAxMS42KywgaU9TIDQuMisuXG4gKlxuICogRHVlIHRvIHZhcmlvdXMgYnJvd3NlciBidWdzLCBzb21ldGltZXMgdGhlIE9iamVjdCBpbXBsZW1lbnRhdGlvbiB3aWxsIGJlIHVzZWQgZXZlblxuICogd2hlbiB0aGUgYnJvd3NlciBzdXBwb3J0cyB0eXBlZCBhcnJheXMuXG4gKlxuICogTm90ZTpcbiAqXG4gKiAgIC0gRmlyZWZveCA0LTI5IGxhY2tzIHN1cHBvcnQgZm9yIGFkZGluZyBuZXcgcHJvcGVydGllcyB0byBgVWludDhBcnJheWAgaW5zdGFuY2VzLFxuICogICAgIFNlZTogaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9Njk1NDM4LlxuICpcbiAqICAgLSBDaHJvbWUgOS0xMCBpcyBtaXNzaW5nIHRoZSBgVHlwZWRBcnJheS5wcm90b3R5cGUuc3ViYXJyYXlgIGZ1bmN0aW9uLlxuICpcbiAqICAgLSBJRTEwIGhhcyBhIGJyb2tlbiBgVHlwZWRBcnJheS5wcm90b3R5cGUuc3ViYXJyYXlgIGZ1bmN0aW9uIHdoaWNoIHJldHVybnMgYXJyYXlzIG9mXG4gKiAgICAgaW5jb3JyZWN0IGxlbmd0aCBpbiBzb21lIHNpdHVhdGlvbnMuXG5cbiAqIFdlIGRldGVjdCB0aGVzZSBidWdneSBicm93c2VycyBhbmQgc2V0IGBCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVGAgdG8gYGZhbHNlYCBzbyB0aGV5XG4gKiBnZXQgdGhlIE9iamVjdCBpbXBsZW1lbnRhdGlvbiwgd2hpY2ggaXMgc2xvd2VyIGJ1dCBiZWhhdmVzIGNvcnJlY3RseS5cbiAqL1xuQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQgPSBnbG9iYWwuVFlQRURfQVJSQVlfU1VQUE9SVCAhPT0gdW5kZWZpbmVkXG4gID8gZ2xvYmFsLlRZUEVEX0FSUkFZX1NVUFBPUlRcbiAgOiB0eXBlZEFycmF5U3VwcG9ydCgpXG5cbi8qXG4gKiBFeHBvcnQga01heExlbmd0aCBhZnRlciB0eXBlZCBhcnJheSBzdXBwb3J0IGlzIGRldGVybWluZWQuXG4gKi9cbmV4cG9ydHMua01heExlbmd0aCA9IGtNYXhMZW5ndGgoKVxuXG5mdW5jdGlvbiB0eXBlZEFycmF5U3VwcG9ydCAoKSB7XG4gIHRyeSB7XG4gICAgdmFyIGFyciA9IG5ldyBVaW50OEFycmF5KDEpXG4gICAgYXJyLl9fcHJvdG9fXyA9IHtfX3Byb3RvX186IFVpbnQ4QXJyYXkucHJvdG90eXBlLCBmb286IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDQyIH19XG4gICAgcmV0dXJuIGFyci5mb28oKSA9PT0gNDIgJiYgLy8gdHlwZWQgYXJyYXkgaW5zdGFuY2VzIGNhbiBiZSBhdWdtZW50ZWRcbiAgICAgICAgdHlwZW9mIGFyci5zdWJhcnJheSA9PT0gJ2Z1bmN0aW9uJyAmJiAvLyBjaHJvbWUgOS0xMCBsYWNrIGBzdWJhcnJheWBcbiAgICAgICAgYXJyLnN1YmFycmF5KDEsIDEpLmJ5dGVMZW5ndGggPT09IDAgLy8gaWUxMCBoYXMgYnJva2VuIGBzdWJhcnJheWBcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbmZ1bmN0aW9uIGtNYXhMZW5ndGggKCkge1xuICByZXR1cm4gQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlRcbiAgICA/IDB4N2ZmZmZmZmZcbiAgICA6IDB4M2ZmZmZmZmZcbn1cblxuZnVuY3Rpb24gY3JlYXRlQnVmZmVyICh0aGF0LCBsZW5ndGgpIHtcbiAgaWYgKGtNYXhMZW5ndGgoKSA8IGxlbmd0aCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbnZhbGlkIHR5cGVkIGFycmF5IGxlbmd0aCcpXG4gIH1cbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgLy8gUmV0dXJuIGFuIGF1Z21lbnRlZCBgVWludDhBcnJheWAgaW5zdGFuY2UsIGZvciBiZXN0IHBlcmZvcm1hbmNlXG4gICAgdGhhdCA9IG5ldyBVaW50OEFycmF5KGxlbmd0aClcbiAgICB0aGF0Ll9fcHJvdG9fXyA9IEJ1ZmZlci5wcm90b3R5cGVcbiAgfSBlbHNlIHtcbiAgICAvLyBGYWxsYmFjazogUmV0dXJuIGFuIG9iamVjdCBpbnN0YW5jZSBvZiB0aGUgQnVmZmVyIGNsYXNzXG4gICAgaWYgKHRoYXQgPT09IG51bGwpIHtcbiAgICAgIHRoYXQgPSBuZXcgQnVmZmVyKGxlbmd0aClcbiAgICB9XG4gICAgdGhhdC5sZW5ndGggPSBsZW5ndGhcbiAgfVxuXG4gIHJldHVybiB0aGF0XG59XG5cbi8qKlxuICogVGhlIEJ1ZmZlciBjb25zdHJ1Y3RvciByZXR1cm5zIGluc3RhbmNlcyBvZiBgVWludDhBcnJheWAgdGhhdCBoYXZlIHRoZWlyXG4gKiBwcm90b3R5cGUgY2hhbmdlZCB0byBgQnVmZmVyLnByb3RvdHlwZWAuIEZ1cnRoZXJtb3JlLCBgQnVmZmVyYCBpcyBhIHN1YmNsYXNzIG9mXG4gKiBgVWludDhBcnJheWAsIHNvIHRoZSByZXR1cm5lZCBpbnN0YW5jZXMgd2lsbCBoYXZlIGFsbCB0aGUgbm9kZSBgQnVmZmVyYCBtZXRob2RzXG4gKiBhbmQgdGhlIGBVaW50OEFycmF5YCBtZXRob2RzLiBTcXVhcmUgYnJhY2tldCBub3RhdGlvbiB3b3JrcyBhcyBleHBlY3RlZCAtLSBpdFxuICogcmV0dXJucyBhIHNpbmdsZSBvY3RldC5cbiAqXG4gKiBUaGUgYFVpbnQ4QXJyYXlgIHByb3RvdHlwZSByZW1haW5zIHVubW9kaWZpZWQuXG4gKi9cblxuZnVuY3Rpb24gQnVmZmVyIChhcmcsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aCkge1xuICBpZiAoIUJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUICYmICEodGhpcyBpbnN0YW5jZW9mIEJ1ZmZlcikpIHtcbiAgICByZXR1cm4gbmV3IEJ1ZmZlcihhcmcsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aClcbiAgfVxuXG4gIC8vIENvbW1vbiBjYXNlLlxuICBpZiAodHlwZW9mIGFyZyA9PT0gJ251bWJlcicpIHtcbiAgICBpZiAodHlwZW9mIGVuY29kaW5nT3JPZmZzZXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdJZiBlbmNvZGluZyBpcyBzcGVjaWZpZWQgdGhlbiB0aGUgZmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhIHN0cmluZydcbiAgICAgIClcbiAgICB9XG4gICAgcmV0dXJuIGFsbG9jVW5zYWZlKHRoaXMsIGFyZylcbiAgfVxuICByZXR1cm4gZnJvbSh0aGlzLCBhcmcsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aClcbn1cblxuQnVmZmVyLnBvb2xTaXplID0gODE5MiAvLyBub3QgdXNlZCBieSB0aGlzIGltcGxlbWVudGF0aW9uXG5cbi8vIFRPRE86IExlZ2FjeSwgbm90IG5lZWRlZCBhbnltb3JlLiBSZW1vdmUgaW4gbmV4dCBtYWpvciB2ZXJzaW9uLlxuQnVmZmVyLl9hdWdtZW50ID0gZnVuY3Rpb24gKGFycikge1xuICBhcnIuX19wcm90b19fID0gQnVmZmVyLnByb3RvdHlwZVxuICByZXR1cm4gYXJyXG59XG5cbmZ1bmN0aW9uIGZyb20gKHRoYXQsIHZhbHVlLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcInZhbHVlXCIgYXJndW1lbnQgbXVzdCBub3QgYmUgYSBudW1iZXInKVxuICB9XG5cbiAgaWYgKHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcgJiYgdmFsdWUgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikge1xuICAgIHJldHVybiBmcm9tQXJyYXlCdWZmZXIodGhhdCwgdmFsdWUsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aClcbiAgfVxuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGZyb21TdHJpbmcodGhhdCwgdmFsdWUsIGVuY29kaW5nT3JPZmZzZXQpXG4gIH1cblxuICByZXR1cm4gZnJvbU9iamVjdCh0aGF0LCB2YWx1ZSlcbn1cblxuLyoqXG4gKiBGdW5jdGlvbmFsbHkgZXF1aXZhbGVudCB0byBCdWZmZXIoYXJnLCBlbmNvZGluZykgYnV0IHRocm93cyBhIFR5cGVFcnJvclxuICogaWYgdmFsdWUgaXMgYSBudW1iZXIuXG4gKiBCdWZmZXIuZnJvbShzdHJbLCBlbmNvZGluZ10pXG4gKiBCdWZmZXIuZnJvbShhcnJheSlcbiAqIEJ1ZmZlci5mcm9tKGJ1ZmZlcilcbiAqIEJ1ZmZlci5mcm9tKGFycmF5QnVmZmVyWywgYnl0ZU9mZnNldFssIGxlbmd0aF1dKVxuICoqL1xuQnVmZmVyLmZyb20gPSBmdW5jdGlvbiAodmFsdWUsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gZnJvbShudWxsLCB2YWx1ZSwgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKVxufVxuXG5pZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgQnVmZmVyLnByb3RvdHlwZS5fX3Byb3RvX18gPSBVaW50OEFycmF5LnByb3RvdHlwZVxuICBCdWZmZXIuX19wcm90b19fID0gVWludDhBcnJheVxuICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnNwZWNpZXMgJiZcbiAgICAgIEJ1ZmZlcltTeW1ib2wuc3BlY2llc10gPT09IEJ1ZmZlcikge1xuICAgIC8vIEZpeCBzdWJhcnJheSgpIGluIEVTMjAxNi4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZmVyb3NzL2J1ZmZlci9wdWxsLzk3XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEJ1ZmZlciwgU3ltYm9sLnNwZWNpZXMsIHtcbiAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSlcbiAgfVxufVxuXG5mdW5jdGlvbiBhc3NlcnRTaXplIChzaXplKSB7XG4gIGlmICh0eXBlb2Ygc2l6ZSAhPT0gJ251bWJlcicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcInNpemVcIiBhcmd1bWVudCBtdXN0IGJlIGEgbnVtYmVyJylcbiAgfSBlbHNlIGlmIChzaXplIDwgMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdcInNpemVcIiBhcmd1bWVudCBtdXN0IG5vdCBiZSBuZWdhdGl2ZScpXG4gIH1cbn1cblxuZnVuY3Rpb24gYWxsb2MgKHRoYXQsIHNpemUsIGZpbGwsIGVuY29kaW5nKSB7XG4gIGFzc2VydFNpemUoc2l6ZSlcbiAgaWYgKHNpemUgPD0gMCkge1xuICAgIHJldHVybiBjcmVhdGVCdWZmZXIodGhhdCwgc2l6ZSlcbiAgfVxuICBpZiAoZmlsbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgLy8gT25seSBwYXkgYXR0ZW50aW9uIHRvIGVuY29kaW5nIGlmIGl0J3MgYSBzdHJpbmcuIFRoaXNcbiAgICAvLyBwcmV2ZW50cyBhY2NpZGVudGFsbHkgc2VuZGluZyBpbiBhIG51bWJlciB0aGF0IHdvdWxkXG4gICAgLy8gYmUgaW50ZXJwcmV0dGVkIGFzIGEgc3RhcnQgb2Zmc2V0LlxuICAgIHJldHVybiB0eXBlb2YgZW5jb2RpbmcgPT09ICdzdHJpbmcnXG4gICAgICA/IGNyZWF0ZUJ1ZmZlcih0aGF0LCBzaXplKS5maWxsKGZpbGwsIGVuY29kaW5nKVxuICAgICAgOiBjcmVhdGVCdWZmZXIodGhhdCwgc2l6ZSkuZmlsbChmaWxsKVxuICB9XG4gIHJldHVybiBjcmVhdGVCdWZmZXIodGhhdCwgc2l6ZSlcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IGZpbGxlZCBCdWZmZXIgaW5zdGFuY2UuXG4gKiBhbGxvYyhzaXplWywgZmlsbFssIGVuY29kaW5nXV0pXG4gKiovXG5CdWZmZXIuYWxsb2MgPSBmdW5jdGlvbiAoc2l6ZSwgZmlsbCwgZW5jb2RpbmcpIHtcbiAgcmV0dXJuIGFsbG9jKG51bGwsIHNpemUsIGZpbGwsIGVuY29kaW5nKVxufVxuXG5mdW5jdGlvbiBhbGxvY1Vuc2FmZSAodGhhdCwgc2l6ZSkge1xuICBhc3NlcnRTaXplKHNpemUpXG4gIHRoYXQgPSBjcmVhdGVCdWZmZXIodGhhdCwgc2l6ZSA8IDAgPyAwIDogY2hlY2tlZChzaXplKSB8IDApXG4gIGlmICghQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNpemU7ICsraSkge1xuICAgICAgdGhhdFtpXSA9IDBcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRoYXRcbn1cblxuLyoqXG4gKiBFcXVpdmFsZW50IHRvIEJ1ZmZlcihudW0pLCBieSBkZWZhdWx0IGNyZWF0ZXMgYSBub24temVyby1maWxsZWQgQnVmZmVyIGluc3RhbmNlLlxuICogKi9cbkJ1ZmZlci5hbGxvY1Vuc2FmZSA9IGZ1bmN0aW9uIChzaXplKSB7XG4gIHJldHVybiBhbGxvY1Vuc2FmZShudWxsLCBzaXplKVxufVxuLyoqXG4gKiBFcXVpdmFsZW50IHRvIFNsb3dCdWZmZXIobnVtKSwgYnkgZGVmYXVsdCBjcmVhdGVzIGEgbm9uLXplcm8tZmlsbGVkIEJ1ZmZlciBpbnN0YW5jZS5cbiAqL1xuQnVmZmVyLmFsbG9jVW5zYWZlU2xvdyA9IGZ1bmN0aW9uIChzaXplKSB7XG4gIHJldHVybiBhbGxvY1Vuc2FmZShudWxsLCBzaXplKVxufVxuXG5mdW5jdGlvbiBmcm9tU3RyaW5nICh0aGF0LCBzdHJpbmcsIGVuY29kaW5nKSB7XG4gIGlmICh0eXBlb2YgZW5jb2RpbmcgIT09ICdzdHJpbmcnIHx8IGVuY29kaW5nID09PSAnJykge1xuICAgIGVuY29kaW5nID0gJ3V0ZjgnXG4gIH1cblxuICBpZiAoIUJ1ZmZlci5pc0VuY29kaW5nKGVuY29kaW5nKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wiZW5jb2RpbmdcIiBtdXN0IGJlIGEgdmFsaWQgc3RyaW5nIGVuY29kaW5nJylcbiAgfVxuXG4gIHZhciBsZW5ndGggPSBieXRlTGVuZ3RoKHN0cmluZywgZW5jb2RpbmcpIHwgMFxuICB0aGF0ID0gY3JlYXRlQnVmZmVyKHRoYXQsIGxlbmd0aClcblxuICB2YXIgYWN0dWFsID0gdGhhdC53cml0ZShzdHJpbmcsIGVuY29kaW5nKVxuXG4gIGlmIChhY3R1YWwgIT09IGxlbmd0aCkge1xuICAgIC8vIFdyaXRpbmcgYSBoZXggc3RyaW5nLCBmb3IgZXhhbXBsZSwgdGhhdCBjb250YWlucyBpbnZhbGlkIGNoYXJhY3RlcnMgd2lsbFxuICAgIC8vIGNhdXNlIGV2ZXJ5dGhpbmcgYWZ0ZXIgdGhlIGZpcnN0IGludmFsaWQgY2hhcmFjdGVyIHRvIGJlIGlnbm9yZWQuIChlLmcuXG4gICAgLy8gJ2FieHhjZCcgd2lsbCBiZSB0cmVhdGVkIGFzICdhYicpXG4gICAgdGhhdCA9IHRoYXQuc2xpY2UoMCwgYWN0dWFsKVxuICB9XG5cbiAgcmV0dXJuIHRoYXRcbn1cblxuZnVuY3Rpb24gZnJvbUFycmF5TGlrZSAodGhhdCwgYXJyYXkpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aCA8IDAgPyAwIDogY2hlY2tlZChhcnJheS5sZW5ndGgpIHwgMFxuICB0aGF0ID0gY3JlYXRlQnVmZmVyKHRoYXQsIGxlbmd0aClcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgIHRoYXRbaV0gPSBhcnJheVtpXSAmIDI1NVxuICB9XG4gIHJldHVybiB0aGF0XG59XG5cbmZ1bmN0aW9uIGZyb21BcnJheUJ1ZmZlciAodGhhdCwgYXJyYXksIGJ5dGVPZmZzZXQsIGxlbmd0aCkge1xuICBhcnJheS5ieXRlTGVuZ3RoIC8vIHRoaXMgdGhyb3dzIGlmIGBhcnJheWAgaXMgbm90IGEgdmFsaWQgQXJyYXlCdWZmZXJcblxuICBpZiAoYnl0ZU9mZnNldCA8IDAgfHwgYXJyYXkuYnl0ZUxlbmd0aCA8IGJ5dGVPZmZzZXQpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignXFwnb2Zmc2V0XFwnIGlzIG91dCBvZiBib3VuZHMnKVxuICB9XG5cbiAgaWYgKGFycmF5LmJ5dGVMZW5ndGggPCBieXRlT2Zmc2V0ICsgKGxlbmd0aCB8fCAwKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdcXCdsZW5ndGhcXCcgaXMgb3V0IG9mIGJvdW5kcycpXG4gIH1cblxuICBpZiAoYnl0ZU9mZnNldCA9PT0gdW5kZWZpbmVkICYmIGxlbmd0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgYXJyYXkgPSBuZXcgVWludDhBcnJheShhcnJheSlcbiAgfSBlbHNlIGlmIChsZW5ndGggPT09IHVuZGVmaW5lZCkge1xuICAgIGFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXksIGJ5dGVPZmZzZXQpXG4gIH0gZWxzZSB7XG4gICAgYXJyYXkgPSBuZXcgVWludDhBcnJheShhcnJheSwgYnl0ZU9mZnNldCwgbGVuZ3RoKVxuICB9XG5cbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgLy8gUmV0dXJuIGFuIGF1Z21lbnRlZCBgVWludDhBcnJheWAgaW5zdGFuY2UsIGZvciBiZXN0IHBlcmZvcm1hbmNlXG4gICAgdGhhdCA9IGFycmF5XG4gICAgdGhhdC5fX3Byb3RvX18gPSBCdWZmZXIucHJvdG90eXBlXG4gIH0gZWxzZSB7XG4gICAgLy8gRmFsbGJhY2s6IFJldHVybiBhbiBvYmplY3QgaW5zdGFuY2Ugb2YgdGhlIEJ1ZmZlciBjbGFzc1xuICAgIHRoYXQgPSBmcm9tQXJyYXlMaWtlKHRoYXQsIGFycmF5KVxuICB9XG4gIHJldHVybiB0aGF0XG59XG5cbmZ1bmN0aW9uIGZyb21PYmplY3QgKHRoYXQsIG9iaikge1xuICBpZiAoQnVmZmVyLmlzQnVmZmVyKG9iaikpIHtcbiAgICB2YXIgbGVuID0gY2hlY2tlZChvYmoubGVuZ3RoKSB8IDBcbiAgICB0aGF0ID0gY3JlYXRlQnVmZmVyKHRoYXQsIGxlbilcblxuICAgIGlmICh0aGF0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHRoYXRcbiAgICB9XG5cbiAgICBvYmouY29weSh0aGF0LCAwLCAwLCBsZW4pXG4gICAgcmV0dXJuIHRoYXRcbiAgfVxuXG4gIGlmIChvYmopIHtcbiAgICBpZiAoKHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgb2JqLmJ1ZmZlciBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSB8fCAnbGVuZ3RoJyBpbiBvYmopIHtcbiAgICAgIGlmICh0eXBlb2Ygb2JqLmxlbmd0aCAhPT0gJ251bWJlcicgfHwgaXNuYW4ob2JqLmxlbmd0aCkpIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUJ1ZmZlcih0aGF0LCAwKVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZyb21BcnJheUxpa2UodGhhdCwgb2JqKVxuICAgIH1cblxuICAgIGlmIChvYmoudHlwZSA9PT0gJ0J1ZmZlcicgJiYgaXNBcnJheShvYmouZGF0YSkpIHtcbiAgICAgIHJldHVybiBmcm9tQXJyYXlMaWtlKHRoYXQsIG9iai5kYXRhKVxuICAgIH1cbiAgfVxuXG4gIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ZpcnN0IGFyZ3VtZW50IG11c3QgYmUgYSBzdHJpbmcsIEJ1ZmZlciwgQXJyYXlCdWZmZXIsIEFycmF5LCBvciBhcnJheS1saWtlIG9iamVjdC4nKVxufVxuXG5mdW5jdGlvbiBjaGVja2VkIChsZW5ndGgpIHtcbiAgLy8gTm90ZTogY2Fubm90IHVzZSBgbGVuZ3RoIDwga01heExlbmd0aCgpYCBoZXJlIGJlY2F1c2UgdGhhdCBmYWlscyB3aGVuXG4gIC8vIGxlbmd0aCBpcyBOYU4gKHdoaWNoIGlzIG90aGVyd2lzZSBjb2VyY2VkIHRvIHplcm8uKVxuICBpZiAobGVuZ3RoID49IGtNYXhMZW5ndGgoKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdBdHRlbXB0IHRvIGFsbG9jYXRlIEJ1ZmZlciBsYXJnZXIgdGhhbiBtYXhpbXVtICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICdzaXplOiAweCcgKyBrTWF4TGVuZ3RoKCkudG9TdHJpbmcoMTYpICsgJyBieXRlcycpXG4gIH1cbiAgcmV0dXJuIGxlbmd0aCB8IDBcbn1cblxuZnVuY3Rpb24gU2xvd0J1ZmZlciAobGVuZ3RoKSB7XG4gIGlmICgrbGVuZ3RoICE9IGxlbmd0aCkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGVxZXFlcVxuICAgIGxlbmd0aCA9IDBcbiAgfVxuICByZXR1cm4gQnVmZmVyLmFsbG9jKCtsZW5ndGgpXG59XG5cbkJ1ZmZlci5pc0J1ZmZlciA9IGZ1bmN0aW9uIGlzQnVmZmVyIChiKSB7XG4gIHJldHVybiAhIShiICE9IG51bGwgJiYgYi5faXNCdWZmZXIpXG59XG5cbkJ1ZmZlci5jb21wYXJlID0gZnVuY3Rpb24gY29tcGFyZSAoYSwgYikge1xuICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihhKSB8fCAhQnVmZmVyLmlzQnVmZmVyKGIpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnRzIG11c3QgYmUgQnVmZmVycycpXG4gIH1cblxuICBpZiAoYSA9PT0gYikgcmV0dXJuIDBcblxuICB2YXIgeCA9IGEubGVuZ3RoXG4gIHZhciB5ID0gYi5sZW5ndGhcblxuICBmb3IgKHZhciBpID0gMCwgbGVuID0gTWF0aC5taW4oeCwgeSk7IGkgPCBsZW47ICsraSkge1xuICAgIGlmIChhW2ldICE9PSBiW2ldKSB7XG4gICAgICB4ID0gYVtpXVxuICAgICAgeSA9IGJbaV1cbiAgICAgIGJyZWFrXG4gICAgfVxuICB9XG5cbiAgaWYgKHggPCB5KSByZXR1cm4gLTFcbiAgaWYgKHkgPCB4KSByZXR1cm4gMVxuICByZXR1cm4gMFxufVxuXG5CdWZmZXIuaXNFbmNvZGluZyA9IGZ1bmN0aW9uIGlzRW5jb2RpbmcgKGVuY29kaW5nKSB7XG4gIHN3aXRjaCAoU3RyaW5nKGVuY29kaW5nKS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgY2FzZSAnaGV4JzpcbiAgICBjYXNlICd1dGY4JzpcbiAgICBjYXNlICd1dGYtOCc6XG4gICAgY2FzZSAnYXNjaWknOlxuICAgIGNhc2UgJ2xhdGluMSc6XG4gICAgY2FzZSAnYmluYXJ5JzpcbiAgICBjYXNlICdiYXNlNjQnOlxuICAgIGNhc2UgJ3VjczInOlxuICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICBjYXNlICd1dGYxNmxlJzpcbiAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG5CdWZmZXIuY29uY2F0ID0gZnVuY3Rpb24gY29uY2F0IChsaXN0LCBsZW5ndGgpIHtcbiAgaWYgKCFpc0FycmF5KGxpc3QpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJsaXN0XCIgYXJndW1lbnQgbXVzdCBiZSBhbiBBcnJheSBvZiBCdWZmZXJzJylcbiAgfVxuXG4gIGlmIChsaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBCdWZmZXIuYWxsb2MoMClcbiAgfVxuXG4gIHZhciBpXG4gIGlmIChsZW5ndGggPT09IHVuZGVmaW5lZCkge1xuICAgIGxlbmd0aCA9IDBcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7ICsraSkge1xuICAgICAgbGVuZ3RoICs9IGxpc3RbaV0ubGVuZ3RoXG4gICAgfVxuICB9XG5cbiAgdmFyIGJ1ZmZlciA9IEJ1ZmZlci5hbGxvY1Vuc2FmZShsZW5ndGgpXG4gIHZhciBwb3MgPSAwXG4gIGZvciAoaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgKytpKSB7XG4gICAgdmFyIGJ1ZiA9IGxpc3RbaV1cbiAgICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihidWYpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcImxpc3RcIiBhcmd1bWVudCBtdXN0IGJlIGFuIEFycmF5IG9mIEJ1ZmZlcnMnKVxuICAgIH1cbiAgICBidWYuY29weShidWZmZXIsIHBvcylcbiAgICBwb3MgKz0gYnVmLmxlbmd0aFxuICB9XG4gIHJldHVybiBidWZmZXJcbn1cblxuZnVuY3Rpb24gYnl0ZUxlbmd0aCAoc3RyaW5nLCBlbmNvZGluZykge1xuICBpZiAoQnVmZmVyLmlzQnVmZmVyKHN0cmluZykpIHtcbiAgICByZXR1cm4gc3RyaW5nLmxlbmd0aFxuICB9XG4gIGlmICh0eXBlb2YgQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBBcnJheUJ1ZmZlci5pc1ZpZXcgPT09ICdmdW5jdGlvbicgJiZcbiAgICAgIChBcnJheUJ1ZmZlci5pc1ZpZXcoc3RyaW5nKSB8fCBzdHJpbmcgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikpIHtcbiAgICByZXR1cm4gc3RyaW5nLmJ5dGVMZW5ndGhcbiAgfVxuICBpZiAodHlwZW9mIHN0cmluZyAhPT0gJ3N0cmluZycpIHtcbiAgICBzdHJpbmcgPSAnJyArIHN0cmluZ1xuICB9XG5cbiAgdmFyIGxlbiA9IHN0cmluZy5sZW5ndGhcbiAgaWYgKGxlbiA9PT0gMCkgcmV0dXJuIDBcblxuICAvLyBVc2UgYSBmb3IgbG9vcCB0byBhdm9pZCByZWN1cnNpb25cbiAgdmFyIGxvd2VyZWRDYXNlID0gZmFsc2VcbiAgZm9yICg7Oykge1xuICAgIHN3aXRjaCAoZW5jb2RpbmcpIHtcbiAgICAgIGNhc2UgJ2FzY2lpJzpcbiAgICAgIGNhc2UgJ2xhdGluMSc6XG4gICAgICBjYXNlICdiaW5hcnknOlxuICAgICAgICByZXR1cm4gbGVuXG4gICAgICBjYXNlICd1dGY4JzpcbiAgICAgIGNhc2UgJ3V0Zi04JzpcbiAgICAgIGNhc2UgdW5kZWZpbmVkOlxuICAgICAgICByZXR1cm4gdXRmOFRvQnl0ZXMoc3RyaW5nKS5sZW5ndGhcbiAgICAgIGNhc2UgJ3VjczInOlxuICAgICAgY2FzZSAndWNzLTInOlxuICAgICAgY2FzZSAndXRmMTZsZSc6XG4gICAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICAgIHJldHVybiBsZW4gKiAyXG4gICAgICBjYXNlICdoZXgnOlxuICAgICAgICByZXR1cm4gbGVuID4+PiAxXG4gICAgICBjYXNlICdiYXNlNjQnOlxuICAgICAgICByZXR1cm4gYmFzZTY0VG9CeXRlcyhzdHJpbmcpLmxlbmd0aFxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKGxvd2VyZWRDYXNlKSByZXR1cm4gdXRmOFRvQnl0ZXMoc3RyaW5nKS5sZW5ndGggLy8gYXNzdW1lIHV0ZjhcbiAgICAgICAgZW5jb2RpbmcgPSAoJycgKyBlbmNvZGluZykudG9Mb3dlckNhc2UoKVxuICAgICAgICBsb3dlcmVkQ2FzZSA9IHRydWVcbiAgICB9XG4gIH1cbn1cbkJ1ZmZlci5ieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aFxuXG5mdW5jdGlvbiBzbG93VG9TdHJpbmcgKGVuY29kaW5nLCBzdGFydCwgZW5kKSB7XG4gIHZhciBsb3dlcmVkQ2FzZSA9IGZhbHNlXG5cbiAgLy8gTm8gbmVlZCB0byB2ZXJpZnkgdGhhdCBcInRoaXMubGVuZ3RoIDw9IE1BWF9VSU5UMzJcIiBzaW5jZSBpdCdzIGEgcmVhZC1vbmx5XG4gIC8vIHByb3BlcnR5IG9mIGEgdHlwZWQgYXJyYXkuXG5cbiAgLy8gVGhpcyBiZWhhdmVzIG5laXRoZXIgbGlrZSBTdHJpbmcgbm9yIFVpbnQ4QXJyYXkgaW4gdGhhdCB3ZSBzZXQgc3RhcnQvZW5kXG4gIC8vIHRvIHRoZWlyIHVwcGVyL2xvd2VyIGJvdW5kcyBpZiB0aGUgdmFsdWUgcGFzc2VkIGlzIG91dCBvZiByYW5nZS5cbiAgLy8gdW5kZWZpbmVkIGlzIGhhbmRsZWQgc3BlY2lhbGx5IGFzIHBlciBFQ01BLTI2MiA2dGggRWRpdGlvbixcbiAgLy8gU2VjdGlvbiAxMy4zLjMuNyBSdW50aW1lIFNlbWFudGljczogS2V5ZWRCaW5kaW5nSW5pdGlhbGl6YXRpb24uXG4gIGlmIChzdGFydCA9PT0gdW5kZWZpbmVkIHx8IHN0YXJ0IDwgMCkge1xuICAgIHN0YXJ0ID0gMFxuICB9XG4gIC8vIFJldHVybiBlYXJseSBpZiBzdGFydCA+IHRoaXMubGVuZ3RoLiBEb25lIGhlcmUgdG8gcHJldmVudCBwb3RlbnRpYWwgdWludDMyXG4gIC8vIGNvZXJjaW9uIGZhaWwgYmVsb3cuXG4gIGlmIChzdGFydCA+IHRoaXMubGVuZ3RoKSB7XG4gICAgcmV0dXJuICcnXG4gIH1cblxuICBpZiAoZW5kID09PSB1bmRlZmluZWQgfHwgZW5kID4gdGhpcy5sZW5ndGgpIHtcbiAgICBlbmQgPSB0aGlzLmxlbmd0aFxuICB9XG5cbiAgaWYgKGVuZCA8PSAwKSB7XG4gICAgcmV0dXJuICcnXG4gIH1cblxuICAvLyBGb3JjZSBjb2Vyc2lvbiB0byB1aW50MzIuIFRoaXMgd2lsbCBhbHNvIGNvZXJjZSBmYWxzZXkvTmFOIHZhbHVlcyB0byAwLlxuICBlbmQgPj4+PSAwXG4gIHN0YXJ0ID4+Pj0gMFxuXG4gIGlmIChlbmQgPD0gc3RhcnQpIHtcbiAgICByZXR1cm4gJydcbiAgfVxuXG4gIGlmICghZW5jb2RpbmcpIGVuY29kaW5nID0gJ3V0ZjgnXG5cbiAgd2hpbGUgKHRydWUpIHtcbiAgICBzd2l0Y2ggKGVuY29kaW5nKSB7XG4gICAgICBjYXNlICdoZXgnOlxuICAgICAgICByZXR1cm4gaGV4U2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAndXRmOCc6XG4gICAgICBjYXNlICd1dGYtOCc6XG4gICAgICAgIHJldHVybiB1dGY4U2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAnYXNjaWknOlxuICAgICAgICByZXR1cm4gYXNjaWlTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICdsYXRpbjEnOlxuICAgICAgY2FzZSAnYmluYXJ5JzpcbiAgICAgICAgcmV0dXJuIGxhdGluMVNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgICAgIHJldHVybiBiYXNlNjRTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICd1Y3MyJzpcbiAgICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgICByZXR1cm4gdXRmMTZsZVNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlmIChsb3dlcmVkQ2FzZSkgdGhyb3cgbmV3IFR5cGVFcnJvcignVW5rbm93biBlbmNvZGluZzogJyArIGVuY29kaW5nKVxuICAgICAgICBlbmNvZGluZyA9IChlbmNvZGluZyArICcnKS50b0xvd2VyQ2FzZSgpXG4gICAgICAgIGxvd2VyZWRDYXNlID0gdHJ1ZVxuICAgIH1cbiAgfVxufVxuXG4vLyBUaGUgcHJvcGVydHkgaXMgdXNlZCBieSBgQnVmZmVyLmlzQnVmZmVyYCBhbmQgYGlzLWJ1ZmZlcmAgKGluIFNhZmFyaSA1LTcpIHRvIGRldGVjdFxuLy8gQnVmZmVyIGluc3RhbmNlcy5cbkJ1ZmZlci5wcm90b3R5cGUuX2lzQnVmZmVyID0gdHJ1ZVxuXG5mdW5jdGlvbiBzd2FwIChiLCBuLCBtKSB7XG4gIHZhciBpID0gYltuXVxuICBiW25dID0gYlttXVxuICBiW21dID0gaVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnN3YXAxNiA9IGZ1bmN0aW9uIHN3YXAxNiAoKSB7XG4gIHZhciBsZW4gPSB0aGlzLmxlbmd0aFxuICBpZiAobGVuICUgMiAhPT0gMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdCdWZmZXIgc2l6ZSBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgMTYtYml0cycpXG4gIH1cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkgKz0gMikge1xuICAgIHN3YXAodGhpcywgaSwgaSArIDEpXG4gIH1cbiAgcmV0dXJuIHRoaXNcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5zd2FwMzIgPSBmdW5jdGlvbiBzd2FwMzIgKCkge1xuICB2YXIgbGVuID0gdGhpcy5sZW5ndGhcbiAgaWYgKGxlbiAlIDQgIT09IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQnVmZmVyIHNpemUgbXVzdCBiZSBhIG11bHRpcGxlIG9mIDMyLWJpdHMnKVxuICB9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpICs9IDQpIHtcbiAgICBzd2FwKHRoaXMsIGksIGkgKyAzKVxuICAgIHN3YXAodGhpcywgaSArIDEsIGkgKyAyKVxuICB9XG4gIHJldHVybiB0aGlzXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuc3dhcDY0ID0gZnVuY3Rpb24gc3dhcDY0ICgpIHtcbiAgdmFyIGxlbiA9IHRoaXMubGVuZ3RoXG4gIGlmIChsZW4gJSA4ICE9PSAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0J1ZmZlciBzaXplIG11c3QgYmUgYSBtdWx0aXBsZSBvZiA2NC1iaXRzJylcbiAgfVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSArPSA4KSB7XG4gICAgc3dhcCh0aGlzLCBpLCBpICsgNylcbiAgICBzd2FwKHRoaXMsIGkgKyAxLCBpICsgNilcbiAgICBzd2FwKHRoaXMsIGkgKyAyLCBpICsgNSlcbiAgICBzd2FwKHRoaXMsIGkgKyAzLCBpICsgNClcbiAgfVxuICByZXR1cm4gdGhpc1xufVxuXG5CdWZmZXIucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcgKCkge1xuICB2YXIgbGVuZ3RoID0gdGhpcy5sZW5ndGggfCAwXG4gIGlmIChsZW5ndGggPT09IDApIHJldHVybiAnJ1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHV0ZjhTbGljZSh0aGlzLCAwLCBsZW5ndGgpXG4gIHJldHVybiBzbG93VG9TdHJpbmcuYXBwbHkodGhpcywgYXJndW1lbnRzKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLmVxdWFscyA9IGZ1bmN0aW9uIGVxdWFscyAoYikge1xuICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihiKSkgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnQgbXVzdCBiZSBhIEJ1ZmZlcicpXG4gIGlmICh0aGlzID09PSBiKSByZXR1cm4gdHJ1ZVxuICByZXR1cm4gQnVmZmVyLmNvbXBhcmUodGhpcywgYikgPT09IDBcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5pbnNwZWN0ID0gZnVuY3Rpb24gaW5zcGVjdCAoKSB7XG4gIHZhciBzdHIgPSAnJ1xuICB2YXIgbWF4ID0gZXhwb3J0cy5JTlNQRUNUX01BWF9CWVRFU1xuICBpZiAodGhpcy5sZW5ndGggPiAwKSB7XG4gICAgc3RyID0gdGhpcy50b1N0cmluZygnaGV4JywgMCwgbWF4KS5tYXRjaCgvLnsyfS9nKS5qb2luKCcgJylcbiAgICBpZiAodGhpcy5sZW5ndGggPiBtYXgpIHN0ciArPSAnIC4uLiAnXG4gIH1cbiAgcmV0dXJuICc8QnVmZmVyICcgKyBzdHIgKyAnPidcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5jb21wYXJlID0gZnVuY3Rpb24gY29tcGFyZSAodGFyZ2V0LCBzdGFydCwgZW5kLCB0aGlzU3RhcnQsIHRoaXNFbmQpIHtcbiAgaWYgKCFCdWZmZXIuaXNCdWZmZXIodGFyZ2V0KSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50IG11c3QgYmUgYSBCdWZmZXInKVxuICB9XG5cbiAgaWYgKHN0YXJ0ID09PSB1bmRlZmluZWQpIHtcbiAgICBzdGFydCA9IDBcbiAgfVxuICBpZiAoZW5kID09PSB1bmRlZmluZWQpIHtcbiAgICBlbmQgPSB0YXJnZXQgPyB0YXJnZXQubGVuZ3RoIDogMFxuICB9XG4gIGlmICh0aGlzU3RhcnQgPT09IHVuZGVmaW5lZCkge1xuICAgIHRoaXNTdGFydCA9IDBcbiAgfVxuICBpZiAodGhpc0VuZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhpc0VuZCA9IHRoaXMubGVuZ3RoXG4gIH1cblxuICBpZiAoc3RhcnQgPCAwIHx8IGVuZCA+IHRhcmdldC5sZW5ndGggfHwgdGhpc1N0YXJ0IDwgMCB8fCB0aGlzRW5kID4gdGhpcy5sZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignb3V0IG9mIHJhbmdlIGluZGV4JylcbiAgfVxuXG4gIGlmICh0aGlzU3RhcnQgPj0gdGhpc0VuZCAmJiBzdGFydCA+PSBlbmQpIHtcbiAgICByZXR1cm4gMFxuICB9XG4gIGlmICh0aGlzU3RhcnQgPj0gdGhpc0VuZCkge1xuICAgIHJldHVybiAtMVxuICB9XG4gIGlmIChzdGFydCA+PSBlbmQpIHtcbiAgICByZXR1cm4gMVxuICB9XG5cbiAgc3RhcnQgPj4+PSAwXG4gIGVuZCA+Pj49IDBcbiAgdGhpc1N0YXJ0ID4+Pj0gMFxuICB0aGlzRW5kID4+Pj0gMFxuXG4gIGlmICh0aGlzID09PSB0YXJnZXQpIHJldHVybiAwXG5cbiAgdmFyIHggPSB0aGlzRW5kIC0gdGhpc1N0YXJ0XG4gIHZhciB5ID0gZW5kIC0gc3RhcnRcbiAgdmFyIGxlbiA9IE1hdGgubWluKHgsIHkpXG5cbiAgdmFyIHRoaXNDb3B5ID0gdGhpcy5zbGljZSh0aGlzU3RhcnQsIHRoaXNFbmQpXG4gIHZhciB0YXJnZXRDb3B5ID0gdGFyZ2V0LnNsaWNlKHN0YXJ0LCBlbmQpXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47ICsraSkge1xuICAgIGlmICh0aGlzQ29weVtpXSAhPT0gdGFyZ2V0Q29weVtpXSkge1xuICAgICAgeCA9IHRoaXNDb3B5W2ldXG4gICAgICB5ID0gdGFyZ2V0Q29weVtpXVxuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cblxuICBpZiAoeCA8IHkpIHJldHVybiAtMVxuICBpZiAoeSA8IHgpIHJldHVybiAxXG4gIHJldHVybiAwXG59XG5cbi8vIEZpbmRzIGVpdGhlciB0aGUgZmlyc3QgaW5kZXggb2YgYHZhbGAgaW4gYGJ1ZmZlcmAgYXQgb2Zmc2V0ID49IGBieXRlT2Zmc2V0YCxcbi8vIE9SIHRoZSBsYXN0IGluZGV4IG9mIGB2YWxgIGluIGBidWZmZXJgIGF0IG9mZnNldCA8PSBgYnl0ZU9mZnNldGAuXG4vL1xuLy8gQXJndW1lbnRzOlxuLy8gLSBidWZmZXIgLSBhIEJ1ZmZlciB0byBzZWFyY2hcbi8vIC0gdmFsIC0gYSBzdHJpbmcsIEJ1ZmZlciwgb3IgbnVtYmVyXG4vLyAtIGJ5dGVPZmZzZXQgLSBhbiBpbmRleCBpbnRvIGBidWZmZXJgOyB3aWxsIGJlIGNsYW1wZWQgdG8gYW4gaW50MzJcbi8vIC0gZW5jb2RpbmcgLSBhbiBvcHRpb25hbCBlbmNvZGluZywgcmVsZXZhbnQgaXMgdmFsIGlzIGEgc3RyaW5nXG4vLyAtIGRpciAtIHRydWUgZm9yIGluZGV4T2YsIGZhbHNlIGZvciBsYXN0SW5kZXhPZlxuZnVuY3Rpb24gYmlkaXJlY3Rpb25hbEluZGV4T2YgKGJ1ZmZlciwgdmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZywgZGlyKSB7XG4gIC8vIEVtcHR5IGJ1ZmZlciBtZWFucyBubyBtYXRjaFxuICBpZiAoYnVmZmVyLmxlbmd0aCA9PT0gMCkgcmV0dXJuIC0xXG5cbiAgLy8gTm9ybWFsaXplIGJ5dGVPZmZzZXRcbiAgaWYgKHR5cGVvZiBieXRlT2Zmc2V0ID09PSAnc3RyaW5nJykge1xuICAgIGVuY29kaW5nID0gYnl0ZU9mZnNldFxuICAgIGJ5dGVPZmZzZXQgPSAwXG4gIH0gZWxzZSBpZiAoYnl0ZU9mZnNldCA+IDB4N2ZmZmZmZmYpIHtcbiAgICBieXRlT2Zmc2V0ID0gMHg3ZmZmZmZmZlxuICB9IGVsc2UgaWYgKGJ5dGVPZmZzZXQgPCAtMHg4MDAwMDAwMCkge1xuICAgIGJ5dGVPZmZzZXQgPSAtMHg4MDAwMDAwMFxuICB9XG4gIGJ5dGVPZmZzZXQgPSArYnl0ZU9mZnNldCAgLy8gQ29lcmNlIHRvIE51bWJlci5cbiAgaWYgKGlzTmFOKGJ5dGVPZmZzZXQpKSB7XG4gICAgLy8gYnl0ZU9mZnNldDogaXQgaXQncyB1bmRlZmluZWQsIG51bGwsIE5hTiwgXCJmb29cIiwgZXRjLCBzZWFyY2ggd2hvbGUgYnVmZmVyXG4gICAgYnl0ZU9mZnNldCA9IGRpciA/IDAgOiAoYnVmZmVyLmxlbmd0aCAtIDEpXG4gIH1cblxuICAvLyBOb3JtYWxpemUgYnl0ZU9mZnNldDogbmVnYXRpdmUgb2Zmc2V0cyBzdGFydCBmcm9tIHRoZSBlbmQgb2YgdGhlIGJ1ZmZlclxuICBpZiAoYnl0ZU9mZnNldCA8IDApIGJ5dGVPZmZzZXQgPSBidWZmZXIubGVuZ3RoICsgYnl0ZU9mZnNldFxuICBpZiAoYnl0ZU9mZnNldCA+PSBidWZmZXIubGVuZ3RoKSB7XG4gICAgaWYgKGRpcikgcmV0dXJuIC0xXG4gICAgZWxzZSBieXRlT2Zmc2V0ID0gYnVmZmVyLmxlbmd0aCAtIDFcbiAgfSBlbHNlIGlmIChieXRlT2Zmc2V0IDwgMCkge1xuICAgIGlmIChkaXIpIGJ5dGVPZmZzZXQgPSAwXG4gICAgZWxzZSByZXR1cm4gLTFcbiAgfVxuXG4gIC8vIE5vcm1hbGl6ZSB2YWxcbiAgaWYgKHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnKSB7XG4gICAgdmFsID0gQnVmZmVyLmZyb20odmFsLCBlbmNvZGluZylcbiAgfVxuXG4gIC8vIEZpbmFsbHksIHNlYXJjaCBlaXRoZXIgaW5kZXhPZiAoaWYgZGlyIGlzIHRydWUpIG9yIGxhc3RJbmRleE9mXG4gIGlmIChCdWZmZXIuaXNCdWZmZXIodmFsKSkge1xuICAgIC8vIFNwZWNpYWwgY2FzZTogbG9va2luZyBmb3IgZW1wdHkgc3RyaW5nL2J1ZmZlciBhbHdheXMgZmFpbHNcbiAgICBpZiAodmFsLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIC0xXG4gICAgfVxuICAgIHJldHVybiBhcnJheUluZGV4T2YoYnVmZmVyLCB2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCBkaXIpXG4gIH0gZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHtcbiAgICB2YWwgPSB2YWwgJiAweEZGIC8vIFNlYXJjaCBmb3IgYSBieXRlIHZhbHVlIFswLTI1NV1cbiAgICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQgJiZcbiAgICAgICAgdHlwZW9mIFVpbnQ4QXJyYXkucHJvdG90eXBlLmluZGV4T2YgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGlmIChkaXIpIHtcbiAgICAgICAgcmV0dXJuIFVpbnQ4QXJyYXkucHJvdG90eXBlLmluZGV4T2YuY2FsbChidWZmZXIsIHZhbCwgYnl0ZU9mZnNldClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBVaW50OEFycmF5LnByb3RvdHlwZS5sYXN0SW5kZXhPZi5jYWxsKGJ1ZmZlciwgdmFsLCBieXRlT2Zmc2V0KVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYXJyYXlJbmRleE9mKGJ1ZmZlciwgWyB2YWwgXSwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIGRpcilcbiAgfVxuXG4gIHRocm93IG5ldyBUeXBlRXJyb3IoJ3ZhbCBtdXN0IGJlIHN0cmluZywgbnVtYmVyIG9yIEJ1ZmZlcicpXG59XG5cbmZ1bmN0aW9uIGFycmF5SW5kZXhPZiAoYXJyLCB2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCBkaXIpIHtcbiAgdmFyIGluZGV4U2l6ZSA9IDFcbiAgdmFyIGFyckxlbmd0aCA9IGFyci5sZW5ndGhcbiAgdmFyIHZhbExlbmd0aCA9IHZhbC5sZW5ndGhcblxuICBpZiAoZW5jb2RpbmcgIT09IHVuZGVmaW5lZCkge1xuICAgIGVuY29kaW5nID0gU3RyaW5nKGVuY29kaW5nKS50b0xvd2VyQ2FzZSgpXG4gICAgaWYgKGVuY29kaW5nID09PSAndWNzMicgfHwgZW5jb2RpbmcgPT09ICd1Y3MtMicgfHxcbiAgICAgICAgZW5jb2RpbmcgPT09ICd1dGYxNmxlJyB8fCBlbmNvZGluZyA9PT0gJ3V0Zi0xNmxlJykge1xuICAgICAgaWYgKGFyci5sZW5ndGggPCAyIHx8IHZhbC5sZW5ndGggPCAyKSB7XG4gICAgICAgIHJldHVybiAtMVxuICAgICAgfVxuICAgICAgaW5kZXhTaXplID0gMlxuICAgICAgYXJyTGVuZ3RoIC89IDJcbiAgICAgIHZhbExlbmd0aCAvPSAyXG4gICAgICBieXRlT2Zmc2V0IC89IDJcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZWFkIChidWYsIGkpIHtcbiAgICBpZiAoaW5kZXhTaXplID09PSAxKSB7XG4gICAgICByZXR1cm4gYnVmW2ldXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBidWYucmVhZFVJbnQxNkJFKGkgKiBpbmRleFNpemUpXG4gICAgfVxuICB9XG5cbiAgdmFyIGlcbiAgaWYgKGRpcikge1xuICAgIHZhciBmb3VuZEluZGV4ID0gLTFcbiAgICBmb3IgKGkgPSBieXRlT2Zmc2V0OyBpIDwgYXJyTGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChyZWFkKGFyciwgaSkgPT09IHJlYWQodmFsLCBmb3VuZEluZGV4ID09PSAtMSA/IDAgOiBpIC0gZm91bmRJbmRleCkpIHtcbiAgICAgICAgaWYgKGZvdW5kSW5kZXggPT09IC0xKSBmb3VuZEluZGV4ID0gaVxuICAgICAgICBpZiAoaSAtIGZvdW5kSW5kZXggKyAxID09PSB2YWxMZW5ndGgpIHJldHVybiBmb3VuZEluZGV4ICogaW5kZXhTaXplXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoZm91bmRJbmRleCAhPT0gLTEpIGkgLT0gaSAtIGZvdW5kSW5kZXhcbiAgICAgICAgZm91bmRJbmRleCA9IC0xXG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmIChieXRlT2Zmc2V0ICsgdmFsTGVuZ3RoID4gYXJyTGVuZ3RoKSBieXRlT2Zmc2V0ID0gYXJyTGVuZ3RoIC0gdmFsTGVuZ3RoXG4gICAgZm9yIChpID0gYnl0ZU9mZnNldDsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIHZhciBmb3VuZCA9IHRydWVcbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdmFsTGVuZ3RoOyBqKyspIHtcbiAgICAgICAgaWYgKHJlYWQoYXJyLCBpICsgaikgIT09IHJlYWQodmFsLCBqKSkge1xuICAgICAgICAgIGZvdW5kID0gZmFsc2VcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoZm91bmQpIHJldHVybiBpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIC0xXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuaW5jbHVkZXMgPSBmdW5jdGlvbiBpbmNsdWRlcyAodmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZykge1xuICByZXR1cm4gdGhpcy5pbmRleE9mKHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcpICE9PSAtMVxufVxuXG5CdWZmZXIucHJvdG90eXBlLmluZGV4T2YgPSBmdW5jdGlvbiBpbmRleE9mICh2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nKSB7XG4gIHJldHVybiBiaWRpcmVjdGlvbmFsSW5kZXhPZih0aGlzLCB2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCB0cnVlKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLmxhc3RJbmRleE9mID0gZnVuY3Rpb24gbGFzdEluZGV4T2YgKHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcpIHtcbiAgcmV0dXJuIGJpZGlyZWN0aW9uYWxJbmRleE9mKHRoaXMsIHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIGZhbHNlKVxufVxuXG5mdW5jdGlvbiBoZXhXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIG9mZnNldCA9IE51bWJlcihvZmZzZXQpIHx8IDBcbiAgdmFyIHJlbWFpbmluZyA9IGJ1Zi5sZW5ndGggLSBvZmZzZXRcbiAgaWYgKCFsZW5ndGgpIHtcbiAgICBsZW5ndGggPSByZW1haW5pbmdcbiAgfSBlbHNlIHtcbiAgICBsZW5ndGggPSBOdW1iZXIobGVuZ3RoKVxuICAgIGlmIChsZW5ndGggPiByZW1haW5pbmcpIHtcbiAgICAgIGxlbmd0aCA9IHJlbWFpbmluZ1xuICAgIH1cbiAgfVxuXG4gIC8vIG11c3QgYmUgYW4gZXZlbiBudW1iZXIgb2YgZGlnaXRzXG4gIHZhciBzdHJMZW4gPSBzdHJpbmcubGVuZ3RoXG4gIGlmIChzdHJMZW4gJSAyICE9PSAwKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIGhleCBzdHJpbmcnKVxuXG4gIGlmIChsZW5ndGggPiBzdHJMZW4gLyAyKSB7XG4gICAgbGVuZ3RoID0gc3RyTGVuIC8gMlxuICB9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyArK2kpIHtcbiAgICB2YXIgcGFyc2VkID0gcGFyc2VJbnQoc3RyaW5nLnN1YnN0cihpICogMiwgMiksIDE2KVxuICAgIGlmIChpc05hTihwYXJzZWQpKSByZXR1cm4gaVxuICAgIGJ1ZltvZmZzZXQgKyBpXSA9IHBhcnNlZFxuICB9XG4gIHJldHVybiBpXG59XG5cbmZ1bmN0aW9uIHV0ZjhXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBibGl0QnVmZmVyKHV0ZjhUb0J5dGVzKHN0cmluZywgYnVmLmxlbmd0aCAtIG9mZnNldCksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG59XG5cbmZ1bmN0aW9uIGFzY2lpV3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gYmxpdEJ1ZmZlcihhc2NpaVRvQnl0ZXMoc3RyaW5nKSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbn1cblxuZnVuY3Rpb24gbGF0aW4xV3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gYXNjaWlXcml0ZShidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG59XG5cbmZ1bmN0aW9uIGJhc2U2NFdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGJsaXRCdWZmZXIoYmFzZTY0VG9CeXRlcyhzdHJpbmcpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxufVxuXG5mdW5jdGlvbiB1Y3MyV3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gYmxpdEJ1ZmZlcih1dGYxNmxlVG9CeXRlcyhzdHJpbmcsIGJ1Zi5sZW5ndGggLSBvZmZzZXQpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlID0gZnVuY3Rpb24gd3JpdGUgKHN0cmluZywgb2Zmc2V0LCBsZW5ndGgsIGVuY29kaW5nKSB7XG4gIC8vIEJ1ZmZlciN3cml0ZShzdHJpbmcpXG4gIGlmIChvZmZzZXQgPT09IHVuZGVmaW5lZCkge1xuICAgIGVuY29kaW5nID0gJ3V0ZjgnXG4gICAgbGVuZ3RoID0gdGhpcy5sZW5ndGhcbiAgICBvZmZzZXQgPSAwXG4gIC8vIEJ1ZmZlciN3cml0ZShzdHJpbmcsIGVuY29kaW5nKVxuICB9IGVsc2UgaWYgKGxlbmd0aCA9PT0gdW5kZWZpbmVkICYmIHR5cGVvZiBvZmZzZXQgPT09ICdzdHJpbmcnKSB7XG4gICAgZW5jb2RpbmcgPSBvZmZzZXRcbiAgICBsZW5ndGggPSB0aGlzLmxlbmd0aFxuICAgIG9mZnNldCA9IDBcbiAgLy8gQnVmZmVyI3dyaXRlKHN0cmluZywgb2Zmc2V0WywgbGVuZ3RoXVssIGVuY29kaW5nXSlcbiAgfSBlbHNlIGlmIChpc0Zpbml0ZShvZmZzZXQpKSB7XG4gICAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICAgIGlmIChpc0Zpbml0ZShsZW5ndGgpKSB7XG4gICAgICBsZW5ndGggPSBsZW5ndGggfCAwXG4gICAgICBpZiAoZW5jb2RpbmcgPT09IHVuZGVmaW5lZCkgZW5jb2RpbmcgPSAndXRmOCdcbiAgICB9IGVsc2Uge1xuICAgICAgZW5jb2RpbmcgPSBsZW5ndGhcbiAgICAgIGxlbmd0aCA9IHVuZGVmaW5lZFxuICAgIH1cbiAgLy8gbGVnYWN5IHdyaXRlKHN0cmluZywgZW5jb2RpbmcsIG9mZnNldCwgbGVuZ3RoKSAtIHJlbW92ZSBpbiB2MC4xM1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICdCdWZmZXIud3JpdGUoc3RyaW5nLCBlbmNvZGluZywgb2Zmc2V0WywgbGVuZ3RoXSkgaXMgbm8gbG9uZ2VyIHN1cHBvcnRlZCdcbiAgICApXG4gIH1cblxuICB2YXIgcmVtYWluaW5nID0gdGhpcy5sZW5ndGggLSBvZmZzZXRcbiAgaWYgKGxlbmd0aCA9PT0gdW5kZWZpbmVkIHx8IGxlbmd0aCA+IHJlbWFpbmluZykgbGVuZ3RoID0gcmVtYWluaW5nXG5cbiAgaWYgKChzdHJpbmcubGVuZ3RoID4gMCAmJiAobGVuZ3RoIDwgMCB8fCBvZmZzZXQgPCAwKSkgfHwgb2Zmc2V0ID4gdGhpcy5sZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQXR0ZW1wdCB0byB3cml0ZSBvdXRzaWRlIGJ1ZmZlciBib3VuZHMnKVxuICB9XG5cbiAgaWYgKCFlbmNvZGluZykgZW5jb2RpbmcgPSAndXRmOCdcblxuICB2YXIgbG93ZXJlZENhc2UgPSBmYWxzZVxuICBmb3IgKDs7KSB7XG4gICAgc3dpdGNoIChlbmNvZGluZykge1xuICAgICAgY2FzZSAnaGV4JzpcbiAgICAgICAgcmV0dXJuIGhleFdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGNhc2UgJ3V0ZjgnOlxuICAgICAgY2FzZSAndXRmLTgnOlxuICAgICAgICByZXR1cm4gdXRmOFdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGNhc2UgJ2FzY2lpJzpcbiAgICAgICAgcmV0dXJuIGFzY2lpV3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgY2FzZSAnbGF0aW4xJzpcbiAgICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgICAgIHJldHVybiBsYXRpbjFXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBjYXNlICdiYXNlNjQnOlxuICAgICAgICAvLyBXYXJuaW5nOiBtYXhMZW5ndGggbm90IHRha2VuIGludG8gYWNjb3VudCBpbiBiYXNlNjRXcml0ZVxuICAgICAgICByZXR1cm4gYmFzZTY0V3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgY2FzZSAndWNzMic6XG4gICAgICBjYXNlICd1Y3MtMic6XG4gICAgICBjYXNlICd1dGYxNmxlJzpcbiAgICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgICAgcmV0dXJuIHVjczJXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAobG93ZXJlZENhc2UpIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Vua25vd24gZW5jb2Rpbmc6ICcgKyBlbmNvZGluZylcbiAgICAgICAgZW5jb2RpbmcgPSAoJycgKyBlbmNvZGluZykudG9Mb3dlckNhc2UoKVxuICAgICAgICBsb3dlcmVkQ2FzZSA9IHRydWVcbiAgICB9XG4gIH1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS50b0pTT04gPSBmdW5jdGlvbiB0b0pTT04gKCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6ICdCdWZmZXInLFxuICAgIGRhdGE6IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHRoaXMuX2FyciB8fCB0aGlzLCAwKVxuICB9XG59XG5cbmZ1bmN0aW9uIGJhc2U2NFNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgaWYgKHN0YXJ0ID09PSAwICYmIGVuZCA9PT0gYnVmLmxlbmd0aCkge1xuICAgIHJldHVybiBiYXNlNjQuZnJvbUJ5dGVBcnJheShidWYpXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGJhc2U2NC5mcm9tQnl0ZUFycmF5KGJ1Zi5zbGljZShzdGFydCwgZW5kKSlcbiAgfVxufVxuXG5mdW5jdGlvbiB1dGY4U2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICBlbmQgPSBNYXRoLm1pbihidWYubGVuZ3RoLCBlbmQpXG4gIHZhciByZXMgPSBbXVxuXG4gIHZhciBpID0gc3RhcnRcbiAgd2hpbGUgKGkgPCBlbmQpIHtcbiAgICB2YXIgZmlyc3RCeXRlID0gYnVmW2ldXG4gICAgdmFyIGNvZGVQb2ludCA9IG51bGxcbiAgICB2YXIgYnl0ZXNQZXJTZXF1ZW5jZSA9IChmaXJzdEJ5dGUgPiAweEVGKSA/IDRcbiAgICAgIDogKGZpcnN0Qnl0ZSA+IDB4REYpID8gM1xuICAgICAgOiAoZmlyc3RCeXRlID4gMHhCRikgPyAyXG4gICAgICA6IDFcblxuICAgIGlmIChpICsgYnl0ZXNQZXJTZXF1ZW5jZSA8PSBlbmQpIHtcbiAgICAgIHZhciBzZWNvbmRCeXRlLCB0aGlyZEJ5dGUsIGZvdXJ0aEJ5dGUsIHRlbXBDb2RlUG9pbnRcblxuICAgICAgc3dpdGNoIChieXRlc1BlclNlcXVlbmNlKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBpZiAoZmlyc3RCeXRlIDwgMHg4MCkge1xuICAgICAgICAgICAgY29kZVBvaW50ID0gZmlyc3RCeXRlXG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBzZWNvbmRCeXRlID0gYnVmW2kgKyAxXVxuICAgICAgICAgIGlmICgoc2Vjb25kQnl0ZSAmIDB4QzApID09PSAweDgwKSB7XG4gICAgICAgICAgICB0ZW1wQ29kZVBvaW50ID0gKGZpcnN0Qnl0ZSAmIDB4MUYpIDw8IDB4NiB8IChzZWNvbmRCeXRlICYgMHgzRilcbiAgICAgICAgICAgIGlmICh0ZW1wQ29kZVBvaW50ID4gMHg3Rikge1xuICAgICAgICAgICAgICBjb2RlUG9pbnQgPSB0ZW1wQ29kZVBvaW50XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBzZWNvbmRCeXRlID0gYnVmW2kgKyAxXVxuICAgICAgICAgIHRoaXJkQnl0ZSA9IGJ1ZltpICsgMl1cbiAgICAgICAgICBpZiAoKHNlY29uZEJ5dGUgJiAweEMwKSA9PT0gMHg4MCAmJiAodGhpcmRCeXRlICYgMHhDMCkgPT09IDB4ODApIHtcbiAgICAgICAgICAgIHRlbXBDb2RlUG9pbnQgPSAoZmlyc3RCeXRlICYgMHhGKSA8PCAweEMgfCAoc2Vjb25kQnl0ZSAmIDB4M0YpIDw8IDB4NiB8ICh0aGlyZEJ5dGUgJiAweDNGKVxuICAgICAgICAgICAgaWYgKHRlbXBDb2RlUG9pbnQgPiAweDdGRiAmJiAodGVtcENvZGVQb2ludCA8IDB4RDgwMCB8fCB0ZW1wQ29kZVBvaW50ID4gMHhERkZGKSkge1xuICAgICAgICAgICAgICBjb2RlUG9pbnQgPSB0ZW1wQ29kZVBvaW50XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBzZWNvbmRCeXRlID0gYnVmW2kgKyAxXVxuICAgICAgICAgIHRoaXJkQnl0ZSA9IGJ1ZltpICsgMl1cbiAgICAgICAgICBmb3VydGhCeXRlID0gYnVmW2kgKyAzXVxuICAgICAgICAgIGlmICgoc2Vjb25kQnl0ZSAmIDB4QzApID09PSAweDgwICYmICh0aGlyZEJ5dGUgJiAweEMwKSA9PT0gMHg4MCAmJiAoZm91cnRoQnl0ZSAmIDB4QzApID09PSAweDgwKSB7XG4gICAgICAgICAgICB0ZW1wQ29kZVBvaW50ID0gKGZpcnN0Qnl0ZSAmIDB4RikgPDwgMHgxMiB8IChzZWNvbmRCeXRlICYgMHgzRikgPDwgMHhDIHwgKHRoaXJkQnl0ZSAmIDB4M0YpIDw8IDB4NiB8IChmb3VydGhCeXRlICYgMHgzRilcbiAgICAgICAgICAgIGlmICh0ZW1wQ29kZVBvaW50ID4gMHhGRkZGICYmIHRlbXBDb2RlUG9pbnQgPCAweDExMDAwMCkge1xuICAgICAgICAgICAgICBjb2RlUG9pbnQgPSB0ZW1wQ29kZVBvaW50XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChjb2RlUG9pbnQgPT09IG51bGwpIHtcbiAgICAgIC8vIHdlIGRpZCBub3QgZ2VuZXJhdGUgYSB2YWxpZCBjb2RlUG9pbnQgc28gaW5zZXJ0IGFcbiAgICAgIC8vIHJlcGxhY2VtZW50IGNoYXIgKFUrRkZGRCkgYW5kIGFkdmFuY2Ugb25seSAxIGJ5dGVcbiAgICAgIGNvZGVQb2ludCA9IDB4RkZGRFxuICAgICAgYnl0ZXNQZXJTZXF1ZW5jZSA9IDFcbiAgICB9IGVsc2UgaWYgKGNvZGVQb2ludCA+IDB4RkZGRikge1xuICAgICAgLy8gZW5jb2RlIHRvIHV0ZjE2IChzdXJyb2dhdGUgcGFpciBkYW5jZSlcbiAgICAgIGNvZGVQb2ludCAtPSAweDEwMDAwXG4gICAgICByZXMucHVzaChjb2RlUG9pbnQgPj4+IDEwICYgMHgzRkYgfCAweEQ4MDApXG4gICAgICBjb2RlUG9pbnQgPSAweERDMDAgfCBjb2RlUG9pbnQgJiAweDNGRlxuICAgIH1cblxuICAgIHJlcy5wdXNoKGNvZGVQb2ludClcbiAgICBpICs9IGJ5dGVzUGVyU2VxdWVuY2VcbiAgfVxuXG4gIHJldHVybiBkZWNvZGVDb2RlUG9pbnRzQXJyYXkocmVzKVxufVxuXG4vLyBCYXNlZCBvbiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yMjc0NzI3Mi82ODA3NDIsIHRoZSBicm93c2VyIHdpdGhcbi8vIHRoZSBsb3dlc3QgbGltaXQgaXMgQ2hyb21lLCB3aXRoIDB4MTAwMDAgYXJncy5cbi8vIFdlIGdvIDEgbWFnbml0dWRlIGxlc3MsIGZvciBzYWZldHlcbnZhciBNQVhfQVJHVU1FTlRTX0xFTkdUSCA9IDB4MTAwMFxuXG5mdW5jdGlvbiBkZWNvZGVDb2RlUG9pbnRzQXJyYXkgKGNvZGVQb2ludHMpIHtcbiAgdmFyIGxlbiA9IGNvZGVQb2ludHMubGVuZ3RoXG4gIGlmIChsZW4gPD0gTUFYX0FSR1VNRU5UU19MRU5HVEgpIHtcbiAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShTdHJpbmcsIGNvZGVQb2ludHMpIC8vIGF2b2lkIGV4dHJhIHNsaWNlKClcbiAgfVxuXG4gIC8vIERlY29kZSBpbiBjaHVua3MgdG8gYXZvaWQgXCJjYWxsIHN0YWNrIHNpemUgZXhjZWVkZWRcIi5cbiAgdmFyIHJlcyA9ICcnXG4gIHZhciBpID0gMFxuICB3aGlsZSAoaSA8IGxlbikge1xuICAgIHJlcyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KFxuICAgICAgU3RyaW5nLFxuICAgICAgY29kZVBvaW50cy5zbGljZShpLCBpICs9IE1BWF9BUkdVTUVOVFNfTEVOR1RIKVxuICAgIClcbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbmZ1bmN0aW9uIGFzY2lpU2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICB2YXIgcmV0ID0gJydcbiAgZW5kID0gTWF0aC5taW4oYnVmLmxlbmd0aCwgZW5kKVxuXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgKytpKSB7XG4gICAgcmV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnVmW2ldICYgMHg3RilcbiAgfVxuICByZXR1cm4gcmV0XG59XG5cbmZ1bmN0aW9uIGxhdGluMVNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIHJldCA9ICcnXG4gIGVuZCA9IE1hdGgubWluKGJ1Zi5sZW5ndGgsIGVuZClcblxuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7ICsraSkge1xuICAgIHJldCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ1ZltpXSlcbiAgfVxuICByZXR1cm4gcmV0XG59XG5cbmZ1bmN0aW9uIGhleFNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGxlbiA9IGJ1Zi5sZW5ndGhcblxuICBpZiAoIXN0YXJ0IHx8IHN0YXJ0IDwgMCkgc3RhcnQgPSAwXG4gIGlmICghZW5kIHx8IGVuZCA8IDAgfHwgZW5kID4gbGVuKSBlbmQgPSBsZW5cblxuICB2YXIgb3V0ID0gJydcbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyArK2kpIHtcbiAgICBvdXQgKz0gdG9IZXgoYnVmW2ldKVxuICB9XG4gIHJldHVybiBvdXRcbn1cblxuZnVuY3Rpb24gdXRmMTZsZVNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGJ5dGVzID0gYnVmLnNsaWNlKHN0YXJ0LCBlbmQpXG4gIHZhciByZXMgPSAnJ1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGJ5dGVzLmxlbmd0aDsgaSArPSAyKSB7XG4gICAgcmVzICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnl0ZXNbaV0gKyBieXRlc1tpICsgMV0gKiAyNTYpXG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG5CdWZmZXIucHJvdG90eXBlLnNsaWNlID0gZnVuY3Rpb24gc2xpY2UgKHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGxlbiA9IHRoaXMubGVuZ3RoXG4gIHN0YXJ0ID0gfn5zdGFydFxuICBlbmQgPSBlbmQgPT09IHVuZGVmaW5lZCA/IGxlbiA6IH5+ZW5kXG5cbiAgaWYgKHN0YXJ0IDwgMCkge1xuICAgIHN0YXJ0ICs9IGxlblxuICAgIGlmIChzdGFydCA8IDApIHN0YXJ0ID0gMFxuICB9IGVsc2UgaWYgKHN0YXJ0ID4gbGVuKSB7XG4gICAgc3RhcnQgPSBsZW5cbiAgfVxuXG4gIGlmIChlbmQgPCAwKSB7XG4gICAgZW5kICs9IGxlblxuICAgIGlmIChlbmQgPCAwKSBlbmQgPSAwXG4gIH0gZWxzZSBpZiAoZW5kID4gbGVuKSB7XG4gICAgZW5kID0gbGVuXG4gIH1cblxuICBpZiAoZW5kIDwgc3RhcnQpIGVuZCA9IHN0YXJ0XG5cbiAgdmFyIG5ld0J1ZlxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICBuZXdCdWYgPSB0aGlzLnN1YmFycmF5KHN0YXJ0LCBlbmQpXG4gICAgbmV3QnVmLl9fcHJvdG9fXyA9IEJ1ZmZlci5wcm90b3R5cGVcbiAgfSBlbHNlIHtcbiAgICB2YXIgc2xpY2VMZW4gPSBlbmQgLSBzdGFydFxuICAgIG5ld0J1ZiA9IG5ldyBCdWZmZXIoc2xpY2VMZW4sIHVuZGVmaW5lZClcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNsaWNlTGVuOyArK2kpIHtcbiAgICAgIG5ld0J1ZltpXSA9IHRoaXNbaSArIHN0YXJ0XVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuZXdCdWZcbn1cblxuLypcbiAqIE5lZWQgdG8gbWFrZSBzdXJlIHRoYXQgYnVmZmVyIGlzbid0IHRyeWluZyB0byB3cml0ZSBvdXQgb2YgYm91bmRzLlxuICovXG5mdW5jdGlvbiBjaGVja09mZnNldCAob2Zmc2V0LCBleHQsIGxlbmd0aCkge1xuICBpZiAoKG9mZnNldCAlIDEpICE9PSAwIHx8IG9mZnNldCA8IDApIHRocm93IG5ldyBSYW5nZUVycm9yKCdvZmZzZXQgaXMgbm90IHVpbnQnKVxuICBpZiAob2Zmc2V0ICsgZXh0ID4gbGVuZ3RoKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignVHJ5aW5nIHRvIGFjY2VzcyBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnRMRSA9IGZ1bmN0aW9uIHJlYWRVSW50TEUgKG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCBieXRlTGVuZ3RoLCB0aGlzLmxlbmd0aClcblxuICB2YXIgdmFsID0gdGhpc1tvZmZzZXRdXG4gIHZhciBtdWwgPSAxXG4gIHZhciBpID0gMFxuICB3aGlsZSAoKytpIDwgYnl0ZUxlbmd0aCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHZhbCArPSB0aGlzW29mZnNldCArIGldICogbXVsXG4gIH1cblxuICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnRCRSA9IGZ1bmN0aW9uIHJlYWRVSW50QkUgKG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCB8IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGNoZWNrT2Zmc2V0KG9mZnNldCwgYnl0ZUxlbmd0aCwgdGhpcy5sZW5ndGgpXG4gIH1cblxuICB2YXIgdmFsID0gdGhpc1tvZmZzZXQgKyAtLWJ5dGVMZW5ndGhdXG4gIHZhciBtdWwgPSAxXG4gIHdoaWxlIChieXRlTGVuZ3RoID4gMCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHZhbCArPSB0aGlzW29mZnNldCArIC0tYnl0ZUxlbmd0aF0gKiBtdWxcbiAgfVxuXG4gIHJldHVybiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDggPSBmdW5jdGlvbiByZWFkVUludDggKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAxLCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIHRoaXNbb2Zmc2V0XVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MTZMRSA9IGZ1bmN0aW9uIHJlYWRVSW50MTZMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDIsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gdGhpc1tvZmZzZXRdIHwgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgOClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDE2QkUgPSBmdW5jdGlvbiByZWFkVUludDE2QkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAyLCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuICh0aGlzW29mZnNldF0gPDwgOCkgfCB0aGlzW29mZnNldCArIDFdXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQzMkxFID0gZnVuY3Rpb24gcmVhZFVJbnQzMkxFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG5cbiAgcmV0dXJuICgodGhpc1tvZmZzZXRdKSB8XG4gICAgICAodGhpc1tvZmZzZXQgKyAxXSA8PCA4KSB8XG4gICAgICAodGhpc1tvZmZzZXQgKyAyXSA8PCAxNikpICtcbiAgICAgICh0aGlzW29mZnNldCArIDNdICogMHgxMDAwMDAwKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MzJCRSA9IGZ1bmN0aW9uIHJlYWRVSW50MzJCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuXG4gIHJldHVybiAodGhpc1tvZmZzZXRdICogMHgxMDAwMDAwKSArXG4gICAgKCh0aGlzW29mZnNldCArIDFdIDw8IDE2KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgMl0gPDwgOCkgfFxuICAgIHRoaXNbb2Zmc2V0ICsgM10pXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludExFID0gZnVuY3Rpb24gcmVhZEludExFIChvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgYnl0ZUxlbmd0aCwgdGhpcy5sZW5ndGgpXG5cbiAgdmFyIHZhbCA9IHRoaXNbb2Zmc2V0XVxuICB2YXIgbXVsID0gMVxuICB2YXIgaSA9IDBcbiAgd2hpbGUgKCsraSA8IGJ5dGVMZW5ndGggJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB2YWwgKz0gdGhpc1tvZmZzZXQgKyBpXSAqIG11bFxuICB9XG4gIG11bCAqPSAweDgwXG5cbiAgaWYgKHZhbCA+PSBtdWwpIHZhbCAtPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aClcblxuICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludEJFID0gZnVuY3Rpb24gcmVhZEludEJFIChvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgYnl0ZUxlbmd0aCwgdGhpcy5sZW5ndGgpXG5cbiAgdmFyIGkgPSBieXRlTGVuZ3RoXG4gIHZhciBtdWwgPSAxXG4gIHZhciB2YWwgPSB0aGlzW29mZnNldCArIC0taV1cbiAgd2hpbGUgKGkgPiAwICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdmFsICs9IHRoaXNbb2Zmc2V0ICsgLS1pXSAqIG11bFxuICB9XG4gIG11bCAqPSAweDgwXG5cbiAgaWYgKHZhbCA+PSBtdWwpIHZhbCAtPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aClcblxuICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDggPSBmdW5jdGlvbiByZWFkSW50OCAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDEsIHRoaXMubGVuZ3RoKVxuICBpZiAoISh0aGlzW29mZnNldF0gJiAweDgwKSkgcmV0dXJuICh0aGlzW29mZnNldF0pXG4gIHJldHVybiAoKDB4ZmYgLSB0aGlzW29mZnNldF0gKyAxKSAqIC0xKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQxNkxFID0gZnVuY3Rpb24gcmVhZEludDE2TEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAyLCB0aGlzLmxlbmd0aClcbiAgdmFyIHZhbCA9IHRoaXNbb2Zmc2V0XSB8ICh0aGlzW29mZnNldCArIDFdIDw8IDgpXG4gIHJldHVybiAodmFsICYgMHg4MDAwKSA/IHZhbCB8IDB4RkZGRjAwMDAgOiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MTZCRSA9IGZ1bmN0aW9uIHJlYWRJbnQxNkJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMiwgdGhpcy5sZW5ndGgpXG4gIHZhciB2YWwgPSB0aGlzW29mZnNldCArIDFdIHwgKHRoaXNbb2Zmc2V0XSA8PCA4KVxuICByZXR1cm4gKHZhbCAmIDB4ODAwMCkgPyB2YWwgfCAweEZGRkYwMDAwIDogdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDMyTEUgPSBmdW5jdGlvbiByZWFkSW50MzJMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuXG4gIHJldHVybiAodGhpc1tvZmZzZXRdKSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgOCkgfFxuICAgICh0aGlzW29mZnNldCArIDJdIDw8IDE2KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgM10gPDwgMjQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDMyQkUgPSBmdW5jdGlvbiByZWFkSW50MzJCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuXG4gIHJldHVybiAodGhpc1tvZmZzZXRdIDw8IDI0KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgMTYpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAyXSA8PCA4KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgM10pXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEZsb2F0TEUgPSBmdW5jdGlvbiByZWFkRmxvYXRMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gaWVlZTc1NC5yZWFkKHRoaXMsIG9mZnNldCwgdHJ1ZSwgMjMsIDQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEZsb2F0QkUgPSBmdW5jdGlvbiByZWFkRmxvYXRCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gaWVlZTc1NC5yZWFkKHRoaXMsIG9mZnNldCwgZmFsc2UsIDIzLCA0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWREb3VibGVMRSA9IGZ1bmN0aW9uIHJlYWREb3VibGVMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDgsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gaWVlZTc1NC5yZWFkKHRoaXMsIG9mZnNldCwgdHJ1ZSwgNTIsIDgpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZERvdWJsZUJFID0gZnVuY3Rpb24gcmVhZERvdWJsZUJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgOCwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiBpZWVlNzU0LnJlYWQodGhpcywgb2Zmc2V0LCBmYWxzZSwgNTIsIDgpXG59XG5cbmZ1bmN0aW9uIGNoZWNrSW50IChidWYsIHZhbHVlLCBvZmZzZXQsIGV4dCwgbWF4LCBtaW4pIHtcbiAgaWYgKCFCdWZmZXIuaXNCdWZmZXIoYnVmKSkgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJidWZmZXJcIiBhcmd1bWVudCBtdXN0IGJlIGEgQnVmZmVyIGluc3RhbmNlJylcbiAgaWYgKHZhbHVlID4gbWF4IHx8IHZhbHVlIDwgbWluKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignXCJ2YWx1ZVwiIGFyZ3VtZW50IGlzIG91dCBvZiBib3VuZHMnKVxuICBpZiAob2Zmc2V0ICsgZXh0ID4gYnVmLmxlbmd0aCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0luZGV4IG91dCBvZiByYW5nZScpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50TEUgPSBmdW5jdGlvbiB3cml0ZVVJbnRMRSAodmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCB8IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIHZhciBtYXhCeXRlcyA9IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoKSAtIDFcbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBtYXhCeXRlcywgMClcbiAgfVxuXG4gIHZhciBtdWwgPSAxXG4gIHZhciBpID0gMFxuICB0aGlzW29mZnNldF0gPSB2YWx1ZSAmIDB4RkZcbiAgd2hpbGUgKCsraSA8IGJ5dGVMZW5ndGggJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB0aGlzW29mZnNldCArIGldID0gKHZhbHVlIC8gbXVsKSAmIDB4RkZcbiAgfVxuXG4gIHJldHVybiBvZmZzZXQgKyBieXRlTGVuZ3RoXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50QkUgPSBmdW5jdGlvbiB3cml0ZVVJbnRCRSAodmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCB8IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIHZhciBtYXhCeXRlcyA9IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoKSAtIDFcbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBtYXhCeXRlcywgMClcbiAgfVxuXG4gIHZhciBpID0gYnl0ZUxlbmd0aCAtIDFcbiAgdmFyIG11bCA9IDFcbiAgdGhpc1tvZmZzZXQgKyBpXSA9IHZhbHVlICYgMHhGRlxuICB3aGlsZSAoLS1pID49IDAgJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB0aGlzW29mZnNldCArIGldID0gKHZhbHVlIC8gbXVsKSAmIDB4RkZcbiAgfVxuXG4gIHJldHVybiBvZmZzZXQgKyBieXRlTGVuZ3RoXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50OCA9IGZ1bmN0aW9uIHdyaXRlVUludDggKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMSwgMHhmZiwgMClcbiAgaWYgKCFCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkgdmFsdWUgPSBNYXRoLmZsb29yKHZhbHVlKVxuICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICByZXR1cm4gb2Zmc2V0ICsgMVxufVxuXG5mdW5jdGlvbiBvYmplY3RXcml0ZVVJbnQxNiAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4pIHtcbiAgaWYgKHZhbHVlIDwgMCkgdmFsdWUgPSAweGZmZmYgKyB2YWx1ZSArIDFcbiAgZm9yICh2YXIgaSA9IDAsIGogPSBNYXRoLm1pbihidWYubGVuZ3RoIC0gb2Zmc2V0LCAyKTsgaSA8IGo7ICsraSkge1xuICAgIGJ1ZltvZmZzZXQgKyBpXSA9ICh2YWx1ZSAmICgweGZmIDw8ICg4ICogKGxpdHRsZUVuZGlhbiA/IGkgOiAxIC0gaSkpKSkgPj4+XG4gICAgICAobGl0dGxlRW5kaWFuID8gaSA6IDEgLSBpKSAqIDhcbiAgfVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDE2TEUgPSBmdW5jdGlvbiB3cml0ZVVJbnQxNkxFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDIsIDB4ZmZmZiwgMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiA4KVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDE2KHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDJcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQxNkJFID0gZnVuY3Rpb24gd3JpdGVVSW50MTZCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAyLCAweGZmZmYsIDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlICYgMHhmZilcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQxNih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgMlxufVxuXG5mdW5jdGlvbiBvYmplY3RXcml0ZVVJbnQzMiAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4pIHtcbiAgaWYgKHZhbHVlIDwgMCkgdmFsdWUgPSAweGZmZmZmZmZmICsgdmFsdWUgKyAxXG4gIGZvciAodmFyIGkgPSAwLCBqID0gTWF0aC5taW4oYnVmLmxlbmd0aCAtIG9mZnNldCwgNCk7IGkgPCBqOyArK2kpIHtcbiAgICBidWZbb2Zmc2V0ICsgaV0gPSAodmFsdWUgPj4+IChsaXR0bGVFbmRpYW4gPyBpIDogMyAtIGkpICogOCkgJiAweGZmXG4gIH1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQzMkxFID0gZnVuY3Rpb24gd3JpdGVVSW50MzJMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCA0LCAweGZmZmZmZmZmLCAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldCArIDNdID0gKHZhbHVlID4+PiAyNClcbiAgICB0aGlzW29mZnNldCArIDJdID0gKHZhbHVlID4+PiAxNilcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MzIodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDMyQkUgPSBmdW5jdGlvbiB3cml0ZVVJbnQzMkJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDQsIDB4ZmZmZmZmZmYsIDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSA+Pj4gMjQpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gMTYpXG4gICAgdGhpc1tvZmZzZXQgKyAyXSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldCArIDNdID0gKHZhbHVlICYgMHhmZilcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQzMih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50TEUgPSBmdW5jdGlvbiB3cml0ZUludExFICh2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICB2YXIgbGltaXQgPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aCAtIDEpXG5cbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBsaW1pdCAtIDEsIC1saW1pdClcbiAgfVxuXG4gIHZhciBpID0gMFxuICB2YXIgbXVsID0gMVxuICB2YXIgc3ViID0gMFxuICB0aGlzW29mZnNldF0gPSB2YWx1ZSAmIDB4RkZcbiAgd2hpbGUgKCsraSA8IGJ5dGVMZW5ndGggJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICBpZiAodmFsdWUgPCAwICYmIHN1YiA9PT0gMCAmJiB0aGlzW29mZnNldCArIGkgLSAxXSAhPT0gMCkge1xuICAgICAgc3ViID0gMVxuICAgIH1cbiAgICB0aGlzW29mZnNldCArIGldID0gKCh2YWx1ZSAvIG11bCkgPj4gMCkgLSBzdWIgJiAweEZGXG4gIH1cblxuICByZXR1cm4gb2Zmc2V0ICsgYnl0ZUxlbmd0aFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50QkUgPSBmdW5jdGlvbiB3cml0ZUludEJFICh2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICB2YXIgbGltaXQgPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aCAtIDEpXG5cbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBsaW1pdCAtIDEsIC1saW1pdClcbiAgfVxuXG4gIHZhciBpID0gYnl0ZUxlbmd0aCAtIDFcbiAgdmFyIG11bCA9IDFcbiAgdmFyIHN1YiA9IDBcbiAgdGhpc1tvZmZzZXQgKyBpXSA9IHZhbHVlICYgMHhGRlxuICB3aGlsZSAoLS1pID49IDAgJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICBpZiAodmFsdWUgPCAwICYmIHN1YiA9PT0gMCAmJiB0aGlzW29mZnNldCArIGkgKyAxXSAhPT0gMCkge1xuICAgICAgc3ViID0gMVxuICAgIH1cbiAgICB0aGlzW29mZnNldCArIGldID0gKCh2YWx1ZSAvIG11bCkgPj4gMCkgLSBzdWIgJiAweEZGXG4gIH1cblxuICByZXR1cm4gb2Zmc2V0ICsgYnl0ZUxlbmd0aFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50OCA9IGZ1bmN0aW9uIHdyaXRlSW50OCAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAxLCAweDdmLCAtMHg4MClcbiAgaWYgKCFCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkgdmFsdWUgPSBNYXRoLmZsb29yKHZhbHVlKVxuICBpZiAodmFsdWUgPCAwKSB2YWx1ZSA9IDB4ZmYgKyB2YWx1ZSArIDFcbiAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgcmV0dXJuIG9mZnNldCArIDFcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDE2TEUgPSBmdW5jdGlvbiB3cml0ZUludDE2TEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMiwgMHg3ZmZmLCAtMHg4MDAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDgpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MTYodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgMlxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MTZCRSA9IGZ1bmN0aW9uIHdyaXRlSW50MTZCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAyLCAweDdmZmYsIC0weDgwMDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlICYgMHhmZilcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQxNih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgMlxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MzJMRSA9IGZ1bmN0aW9uIHdyaXRlSW50MzJMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCA0LCAweDdmZmZmZmZmLCAtMHg4MDAwMDAwMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0ICsgMl0gPSAodmFsdWUgPj4+IDE2KVxuICAgIHRoaXNbb2Zmc2V0ICsgM10gPSAodmFsdWUgPj4+IDI0KVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDMyKHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDMyQkUgPSBmdW5jdGlvbiB3cml0ZUludDMyQkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgNCwgMHg3ZmZmZmZmZiwgLTB4ODAwMDAwMDApXG4gIGlmICh2YWx1ZSA8IDApIHZhbHVlID0gMHhmZmZmZmZmZiArIHZhbHVlICsgMVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgPj4+IDI0KVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDE2KVxuICAgIHRoaXNbb2Zmc2V0ICsgMl0gPSAodmFsdWUgPj4+IDgpXG4gICAgdGhpc1tvZmZzZXQgKyAzXSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MzIodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuZnVuY3Rpb24gY2hlY2tJRUVFNzU0IChidWYsIHZhbHVlLCBvZmZzZXQsIGV4dCwgbWF4LCBtaW4pIHtcbiAgaWYgKG9mZnNldCArIGV4dCA+IGJ1Zi5sZW5ndGgpIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbmRleCBvdXQgb2YgcmFuZ2UnKVxuICBpZiAob2Zmc2V0IDwgMCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0luZGV4IG91dCBvZiByYW5nZScpXG59XG5cbmZ1bmN0aW9uIHdyaXRlRmxvYXQgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgY2hlY2tJRUVFNzU0KGJ1ZiwgdmFsdWUsIG9mZnNldCwgNCwgMy40MDI4MjM0NjYzODUyODg2ZSszOCwgLTMuNDAyODIzNDY2Mzg1Mjg4NmUrMzgpXG4gIH1cbiAgaWVlZTc1NC53cml0ZShidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgMjMsIDQpXG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVGbG9hdExFID0gZnVuY3Rpb24gd3JpdGVGbG9hdExFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gd3JpdGVGbG9hdCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUZsb2F0QkUgPSBmdW5jdGlvbiB3cml0ZUZsb2F0QkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiB3cml0ZUZsb2F0KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuZnVuY3Rpb24gd3JpdGVEb3VibGUgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgY2hlY2tJRUVFNzU0KGJ1ZiwgdmFsdWUsIG9mZnNldCwgOCwgMS43OTc2OTMxMzQ4NjIzMTU3RSszMDgsIC0xLjc5NzY5MzEzNDg2MjMxNTdFKzMwOClcbiAgfVxuICBpZWVlNzU0LndyaXRlKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCA1MiwgOClcbiAgcmV0dXJuIG9mZnNldCArIDhcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZURvdWJsZUxFID0gZnVuY3Rpb24gd3JpdGVEb3VibGVMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIHdyaXRlRG91YmxlKHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRG91YmxlQkUgPSBmdW5jdGlvbiB3cml0ZURvdWJsZUJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gd3JpdGVEb3VibGUodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG4vLyBjb3B5KHRhcmdldEJ1ZmZlciwgdGFyZ2V0U3RhcnQ9MCwgc291cmNlU3RhcnQ9MCwgc291cmNlRW5kPWJ1ZmZlci5sZW5ndGgpXG5CdWZmZXIucHJvdG90eXBlLmNvcHkgPSBmdW5jdGlvbiBjb3B5ICh0YXJnZXQsIHRhcmdldFN0YXJ0LCBzdGFydCwgZW5kKSB7XG4gIGlmICghc3RhcnQpIHN0YXJ0ID0gMFxuICBpZiAoIWVuZCAmJiBlbmQgIT09IDApIGVuZCA9IHRoaXMubGVuZ3RoXG4gIGlmICh0YXJnZXRTdGFydCA+PSB0YXJnZXQubGVuZ3RoKSB0YXJnZXRTdGFydCA9IHRhcmdldC5sZW5ndGhcbiAgaWYgKCF0YXJnZXRTdGFydCkgdGFyZ2V0U3RhcnQgPSAwXG4gIGlmIChlbmQgPiAwICYmIGVuZCA8IHN0YXJ0KSBlbmQgPSBzdGFydFxuXG4gIC8vIENvcHkgMCBieXRlczsgd2UncmUgZG9uZVxuICBpZiAoZW5kID09PSBzdGFydCkgcmV0dXJuIDBcbiAgaWYgKHRhcmdldC5sZW5ndGggPT09IDAgfHwgdGhpcy5sZW5ndGggPT09IDApIHJldHVybiAwXG5cbiAgLy8gRmF0YWwgZXJyb3IgY29uZGl0aW9uc1xuICBpZiAodGFyZ2V0U3RhcnQgPCAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3RhcmdldFN0YXJ0IG91dCBvZiBib3VuZHMnKVxuICB9XG4gIGlmIChzdGFydCA8IDAgfHwgc3RhcnQgPj0gdGhpcy5sZW5ndGgpIHRocm93IG5ldyBSYW5nZUVycm9yKCdzb3VyY2VTdGFydCBvdXQgb2YgYm91bmRzJylcbiAgaWYgKGVuZCA8IDApIHRocm93IG5ldyBSYW5nZUVycm9yKCdzb3VyY2VFbmQgb3V0IG9mIGJvdW5kcycpXG5cbiAgLy8gQXJlIHdlIG9vYj9cbiAgaWYgKGVuZCA+IHRoaXMubGVuZ3RoKSBlbmQgPSB0aGlzLmxlbmd0aFxuICBpZiAodGFyZ2V0Lmxlbmd0aCAtIHRhcmdldFN0YXJ0IDwgZW5kIC0gc3RhcnQpIHtcbiAgICBlbmQgPSB0YXJnZXQubGVuZ3RoIC0gdGFyZ2V0U3RhcnQgKyBzdGFydFxuICB9XG5cbiAgdmFyIGxlbiA9IGVuZCAtIHN0YXJ0XG4gIHZhciBpXG5cbiAgaWYgKHRoaXMgPT09IHRhcmdldCAmJiBzdGFydCA8IHRhcmdldFN0YXJ0ICYmIHRhcmdldFN0YXJ0IDwgZW5kKSB7XG4gICAgLy8gZGVzY2VuZGluZyBjb3B5IGZyb20gZW5kXG4gICAgZm9yIChpID0gbGVuIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgIHRhcmdldFtpICsgdGFyZ2V0U3RhcnRdID0gdGhpc1tpICsgc3RhcnRdXG4gICAgfVxuICB9IGVsc2UgaWYgKGxlbiA8IDEwMDAgfHwgIUJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgLy8gYXNjZW5kaW5nIGNvcHkgZnJvbSBzdGFydFxuICAgIGZvciAoaSA9IDA7IGkgPCBsZW47ICsraSkge1xuICAgICAgdGFyZ2V0W2kgKyB0YXJnZXRTdGFydF0gPSB0aGlzW2kgKyBzdGFydF1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgVWludDhBcnJheS5wcm90b3R5cGUuc2V0LmNhbGwoXG4gICAgICB0YXJnZXQsXG4gICAgICB0aGlzLnN1YmFycmF5KHN0YXJ0LCBzdGFydCArIGxlbiksXG4gICAgICB0YXJnZXRTdGFydFxuICAgIClcbiAgfVxuXG4gIHJldHVybiBsZW5cbn1cblxuLy8gVXNhZ2U6XG4vLyAgICBidWZmZXIuZmlsbChudW1iZXJbLCBvZmZzZXRbLCBlbmRdXSlcbi8vICAgIGJ1ZmZlci5maWxsKGJ1ZmZlclssIG9mZnNldFssIGVuZF1dKVxuLy8gICAgYnVmZmVyLmZpbGwoc3RyaW5nWywgb2Zmc2V0WywgZW5kXV1bLCBlbmNvZGluZ10pXG5CdWZmZXIucHJvdG90eXBlLmZpbGwgPSBmdW5jdGlvbiBmaWxsICh2YWwsIHN0YXJ0LCBlbmQsIGVuY29kaW5nKSB7XG4gIC8vIEhhbmRsZSBzdHJpbmcgY2FzZXM6XG4gIGlmICh0eXBlb2YgdmFsID09PSAnc3RyaW5nJykge1xuICAgIGlmICh0eXBlb2Ygc3RhcnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBlbmNvZGluZyA9IHN0YXJ0XG4gICAgICBzdGFydCA9IDBcbiAgICAgIGVuZCA9IHRoaXMubGVuZ3RoXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZW5kID09PSAnc3RyaW5nJykge1xuICAgICAgZW5jb2RpbmcgPSBlbmRcbiAgICAgIGVuZCA9IHRoaXMubGVuZ3RoXG4gICAgfVxuICAgIGlmICh2YWwubGVuZ3RoID09PSAxKSB7XG4gICAgICB2YXIgY29kZSA9IHZhbC5jaGFyQ29kZUF0KDApXG4gICAgICBpZiAoY29kZSA8IDI1Nikge1xuICAgICAgICB2YWwgPSBjb2RlXG4gICAgICB9XG4gICAgfVxuICAgIGlmIChlbmNvZGluZyAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiBlbmNvZGluZyAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2VuY29kaW5nIG11c3QgYmUgYSBzdHJpbmcnKVxuICAgIH1cbiAgICBpZiAodHlwZW9mIGVuY29kaW5nID09PSAnc3RyaW5nJyAmJiAhQnVmZmVyLmlzRW5jb2RpbmcoZW5jb2RpbmcpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdVbmtub3duIGVuY29kaW5nOiAnICsgZW5jb2RpbmcpXG4gICAgfVxuICB9IGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgdmFsID0gdmFsICYgMjU1XG4gIH1cblxuICAvLyBJbnZhbGlkIHJhbmdlcyBhcmUgbm90IHNldCB0byBhIGRlZmF1bHQsIHNvIGNhbiByYW5nZSBjaGVjayBlYXJseS5cbiAgaWYgKHN0YXJ0IDwgMCB8fCB0aGlzLmxlbmd0aCA8IHN0YXJ0IHx8IHRoaXMubGVuZ3RoIDwgZW5kKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ091dCBvZiByYW5nZSBpbmRleCcpXG4gIH1cblxuICBpZiAoZW5kIDw9IHN0YXJ0KSB7XG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIHN0YXJ0ID0gc3RhcnQgPj4+IDBcbiAgZW5kID0gZW5kID09PSB1bmRlZmluZWQgPyB0aGlzLmxlbmd0aCA6IGVuZCA+Pj4gMFxuXG4gIGlmICghdmFsKSB2YWwgPSAwXG5cbiAgdmFyIGlcbiAgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgZm9yIChpID0gc3RhcnQ7IGkgPCBlbmQ7ICsraSkge1xuICAgICAgdGhpc1tpXSA9IHZhbFxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YXIgYnl0ZXMgPSBCdWZmZXIuaXNCdWZmZXIodmFsKVxuICAgICAgPyB2YWxcbiAgICAgIDogdXRmOFRvQnl0ZXMobmV3IEJ1ZmZlcih2YWwsIGVuY29kaW5nKS50b1N0cmluZygpKVxuICAgIHZhciBsZW4gPSBieXRlcy5sZW5ndGhcbiAgICBmb3IgKGkgPSAwOyBpIDwgZW5kIC0gc3RhcnQ7ICsraSkge1xuICAgICAgdGhpc1tpICsgc3RhcnRdID0gYnl0ZXNbaSAlIGxlbl1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpc1xufVxuXG4vLyBIRUxQRVIgRlVOQ1RJT05TXG4vLyA9PT09PT09PT09PT09PT09XG5cbnZhciBJTlZBTElEX0JBU0U2NF9SRSA9IC9bXitcXC8wLTlBLVphLXotX10vZ1xuXG5mdW5jdGlvbiBiYXNlNjRjbGVhbiAoc3RyKSB7XG4gIC8vIE5vZGUgc3RyaXBzIG91dCBpbnZhbGlkIGNoYXJhY3RlcnMgbGlrZSBcXG4gYW5kIFxcdCBmcm9tIHRoZSBzdHJpbmcsIGJhc2U2NC1qcyBkb2VzIG5vdFxuICBzdHIgPSBzdHJpbmd0cmltKHN0cikucmVwbGFjZShJTlZBTElEX0JBU0U2NF9SRSwgJycpXG4gIC8vIE5vZGUgY29udmVydHMgc3RyaW5ncyB3aXRoIGxlbmd0aCA8IDIgdG8gJydcbiAgaWYgKHN0ci5sZW5ndGggPCAyKSByZXR1cm4gJydcbiAgLy8gTm9kZSBhbGxvd3MgZm9yIG5vbi1wYWRkZWQgYmFzZTY0IHN0cmluZ3MgKG1pc3NpbmcgdHJhaWxpbmcgPT09KSwgYmFzZTY0LWpzIGRvZXMgbm90XG4gIHdoaWxlIChzdHIubGVuZ3RoICUgNCAhPT0gMCkge1xuICAgIHN0ciA9IHN0ciArICc9J1xuICB9XG4gIHJldHVybiBzdHJcbn1cblxuZnVuY3Rpb24gc3RyaW5ndHJpbSAoc3RyKSB7XG4gIGlmIChzdHIudHJpbSkgcmV0dXJuIHN0ci50cmltKClcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCAnJylcbn1cblxuZnVuY3Rpb24gdG9IZXggKG4pIHtcbiAgaWYgKG4gPCAxNikgcmV0dXJuICcwJyArIG4udG9TdHJpbmcoMTYpXG4gIHJldHVybiBuLnRvU3RyaW5nKDE2KVxufVxuXG5mdW5jdGlvbiB1dGY4VG9CeXRlcyAoc3RyaW5nLCB1bml0cykge1xuICB1bml0cyA9IHVuaXRzIHx8IEluZmluaXR5XG4gIHZhciBjb2RlUG9pbnRcbiAgdmFyIGxlbmd0aCA9IHN0cmluZy5sZW5ndGhcbiAgdmFyIGxlYWRTdXJyb2dhdGUgPSBudWxsXG4gIHZhciBieXRlcyA9IFtdXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7ICsraSkge1xuICAgIGNvZGVQb2ludCA9IHN0cmluZy5jaGFyQ29kZUF0KGkpXG5cbiAgICAvLyBpcyBzdXJyb2dhdGUgY29tcG9uZW50XG4gICAgaWYgKGNvZGVQb2ludCA+IDB4RDdGRiAmJiBjb2RlUG9pbnQgPCAweEUwMDApIHtcbiAgICAgIC8vIGxhc3QgY2hhciB3YXMgYSBsZWFkXG4gICAgICBpZiAoIWxlYWRTdXJyb2dhdGUpIHtcbiAgICAgICAgLy8gbm8gbGVhZCB5ZXRcbiAgICAgICAgaWYgKGNvZGVQb2ludCA+IDB4REJGRikge1xuICAgICAgICAgIC8vIHVuZXhwZWN0ZWQgdHJhaWxcbiAgICAgICAgICBpZiAoKHVuaXRzIC09IDMpID4gLTEpIGJ5dGVzLnB1c2goMHhFRiwgMHhCRiwgMHhCRClcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9IGVsc2UgaWYgKGkgKyAxID09PSBsZW5ndGgpIHtcbiAgICAgICAgICAvLyB1bnBhaXJlZCBsZWFkXG4gICAgICAgICAgaWYgKCh1bml0cyAtPSAzKSA+IC0xKSBieXRlcy5wdXNoKDB4RUYsIDB4QkYsIDB4QkQpXG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHZhbGlkIGxlYWRcbiAgICAgICAgbGVhZFN1cnJvZ2F0ZSA9IGNvZGVQb2ludFxuXG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIC8vIDIgbGVhZHMgaW4gYSByb3dcbiAgICAgIGlmIChjb2RlUG9pbnQgPCAweERDMDApIHtcbiAgICAgICAgaWYgKCh1bml0cyAtPSAzKSA+IC0xKSBieXRlcy5wdXNoKDB4RUYsIDB4QkYsIDB4QkQpXG4gICAgICAgIGxlYWRTdXJyb2dhdGUgPSBjb2RlUG9pbnRcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgLy8gdmFsaWQgc3Vycm9nYXRlIHBhaXJcbiAgICAgIGNvZGVQb2ludCA9IChsZWFkU3Vycm9nYXRlIC0gMHhEODAwIDw8IDEwIHwgY29kZVBvaW50IC0gMHhEQzAwKSArIDB4MTAwMDBcbiAgICB9IGVsc2UgaWYgKGxlYWRTdXJyb2dhdGUpIHtcbiAgICAgIC8vIHZhbGlkIGJtcCBjaGFyLCBidXQgbGFzdCBjaGFyIHdhcyBhIGxlYWRcbiAgICAgIGlmICgodW5pdHMgLT0gMykgPiAtMSkgYnl0ZXMucHVzaCgweEVGLCAweEJGLCAweEJEKVxuICAgIH1cblxuICAgIGxlYWRTdXJyb2dhdGUgPSBudWxsXG5cbiAgICAvLyBlbmNvZGUgdXRmOFxuICAgIGlmIChjb2RlUG9pbnQgPCAweDgwKSB7XG4gICAgICBpZiAoKHVuaXRzIC09IDEpIDwgMCkgYnJlYWtcbiAgICAgIGJ5dGVzLnB1c2goY29kZVBvaW50KVxuICAgIH0gZWxzZSBpZiAoY29kZVBvaW50IDwgMHg4MDApIHtcbiAgICAgIGlmICgodW5pdHMgLT0gMikgPCAwKSBicmVha1xuICAgICAgYnl0ZXMucHVzaChcbiAgICAgICAgY29kZVBvaW50ID4+IDB4NiB8IDB4QzAsXG4gICAgICAgIGNvZGVQb2ludCAmIDB4M0YgfCAweDgwXG4gICAgICApXG4gICAgfSBlbHNlIGlmIChjb2RlUG9pbnQgPCAweDEwMDAwKSB7XG4gICAgICBpZiAoKHVuaXRzIC09IDMpIDwgMCkgYnJlYWtcbiAgICAgIGJ5dGVzLnB1c2goXG4gICAgICAgIGNvZGVQb2ludCA+PiAweEMgfCAweEUwLFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHg2ICYgMHgzRiB8IDB4ODAsXG4gICAgICAgIGNvZGVQb2ludCAmIDB4M0YgfCAweDgwXG4gICAgICApXG4gICAgfSBlbHNlIGlmIChjb2RlUG9pbnQgPCAweDExMDAwMCkge1xuICAgICAgaWYgKCh1bml0cyAtPSA0KSA8IDApIGJyZWFrXG4gICAgICBieXRlcy5wdXNoKFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHgxMiB8IDB4RjAsXG4gICAgICAgIGNvZGVQb2ludCA+PiAweEMgJiAweDNGIHwgMHg4MCxcbiAgICAgICAgY29kZVBvaW50ID4+IDB4NiAmIDB4M0YgfCAweDgwLFxuICAgICAgICBjb2RlUG9pbnQgJiAweDNGIHwgMHg4MFxuICAgICAgKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgY29kZSBwb2ludCcpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGJ5dGVzXG59XG5cbmZ1bmN0aW9uIGFzY2lpVG9CeXRlcyAoc3RyKSB7XG4gIHZhciBieXRlQXJyYXkgPSBbXVxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0ci5sZW5ndGg7ICsraSkge1xuICAgIC8vIE5vZGUncyBjb2RlIHNlZW1zIHRvIGJlIGRvaW5nIHRoaXMgYW5kIG5vdCAmIDB4N0YuLlxuICAgIGJ5dGVBcnJheS5wdXNoKHN0ci5jaGFyQ29kZUF0KGkpICYgMHhGRilcbiAgfVxuICByZXR1cm4gYnl0ZUFycmF5XG59XG5cbmZ1bmN0aW9uIHV0ZjE2bGVUb0J5dGVzIChzdHIsIHVuaXRzKSB7XG4gIHZhciBjLCBoaSwgbG9cbiAgdmFyIGJ5dGVBcnJheSA9IFtdXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgKytpKSB7XG4gICAgaWYgKCh1bml0cyAtPSAyKSA8IDApIGJyZWFrXG5cbiAgICBjID0gc3RyLmNoYXJDb2RlQXQoaSlcbiAgICBoaSA9IGMgPj4gOFxuICAgIGxvID0gYyAlIDI1NlxuICAgIGJ5dGVBcnJheS5wdXNoKGxvKVxuICAgIGJ5dGVBcnJheS5wdXNoKGhpKVxuICB9XG5cbiAgcmV0dXJuIGJ5dGVBcnJheVxufVxuXG5mdW5jdGlvbiBiYXNlNjRUb0J5dGVzIChzdHIpIHtcbiAgcmV0dXJuIGJhc2U2NC50b0J5dGVBcnJheShiYXNlNjRjbGVhbihzdHIpKVxufVxuXG5mdW5jdGlvbiBibGl0QnVmZmVyIChzcmMsIGRzdCwgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7ICsraSkge1xuICAgIGlmICgoaSArIG9mZnNldCA+PSBkc3QubGVuZ3RoKSB8fCAoaSA+PSBzcmMubGVuZ3RoKSkgYnJlYWtcbiAgICBkc3RbaSArIG9mZnNldF0gPSBzcmNbaV1cbiAgfVxuICByZXR1cm4gaVxufVxuXG5mdW5jdGlvbiBpc25hbiAodmFsKSB7XG4gIHJldHVybiB2YWwgIT09IHZhbCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNlbGYtY29tcGFyZVxufVxuIiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiAoYXJyKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGFycikgPT0gJ1tvYmplY3QgQXJyYXldJztcbn07XG4iLCJcInVzZSBzdHJpY3RcIlxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZVJCVHJlZVxuXG52YXIgUkVEICAgPSAwXG52YXIgQkxBQ0sgPSAxXG5cbmZ1bmN0aW9uIFJCTm9kZShjb2xvciwga2V5LCB2YWx1ZSwgbGVmdCwgcmlnaHQsIGNvdW50KSB7XG4gIHRoaXMuX2NvbG9yID0gY29sb3JcbiAgdGhpcy5rZXkgPSBrZXlcbiAgdGhpcy52YWx1ZSA9IHZhbHVlXG4gIHRoaXMubGVmdCA9IGxlZnRcbiAgdGhpcy5yaWdodCA9IHJpZ2h0XG4gIHRoaXMuX2NvdW50ID0gY291bnRcbn1cblxuZnVuY3Rpb24gY2xvbmVOb2RlKG5vZGUpIHtcbiAgcmV0dXJuIG5ldyBSQk5vZGUobm9kZS5fY29sb3IsIG5vZGUua2V5LCBub2RlLnZhbHVlLCBub2RlLmxlZnQsIG5vZGUucmlnaHQsIG5vZGUuX2NvdW50KVxufVxuXG5mdW5jdGlvbiByZXBhaW50KGNvbG9yLCBub2RlKSB7XG4gIHJldHVybiBuZXcgUkJOb2RlKGNvbG9yLCBub2RlLmtleSwgbm9kZS52YWx1ZSwgbm9kZS5sZWZ0LCBub2RlLnJpZ2h0LCBub2RlLl9jb3VudClcbn1cblxuZnVuY3Rpb24gcmVjb3VudChub2RlKSB7XG4gIG5vZGUuX2NvdW50ID0gMSArIChub2RlLmxlZnQgPyBub2RlLmxlZnQuX2NvdW50IDogMCkgKyAobm9kZS5yaWdodCA/IG5vZGUucmlnaHQuX2NvdW50IDogMClcbn1cblxuZnVuY3Rpb24gUmVkQmxhY2tUcmVlKGNvbXBhcmUsIHJvb3QpIHtcbiAgdGhpcy5fY29tcGFyZSA9IGNvbXBhcmVcbiAgdGhpcy5yb290ID0gcm9vdFxufVxuXG52YXIgcHJvdG8gPSBSZWRCbGFja1RyZWUucHJvdG90eXBlXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm90bywgXCJrZXlzXCIsIHtcbiAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICB2YXIgcmVzdWx0ID0gW11cbiAgICB0aGlzLmZvckVhY2goZnVuY3Rpb24oayx2KSB7XG4gICAgICByZXN1bHQucHVzaChrKVxuICAgIH0pXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG59KVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkocHJvdG8sIFwidmFsdWVzXCIsIHtcbiAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICB2YXIgcmVzdWx0ID0gW11cbiAgICB0aGlzLmZvckVhY2goZnVuY3Rpb24oayx2KSB7XG4gICAgICByZXN1bHQucHVzaCh2KVxuICAgIH0pXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG59KVxuXG4vL1JldHVybnMgdGhlIG51bWJlciBvZiBub2RlcyBpbiB0aGUgdHJlZVxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3RvLCBcImxlbmd0aFwiLCB7XG4gIGdldDogZnVuY3Rpb24oKSB7XG4gICAgaWYodGhpcy5yb290KSB7XG4gICAgICByZXR1cm4gdGhpcy5yb290Ll9jb3VudFxuICAgIH1cbiAgICByZXR1cm4gMFxuICB9XG59KVxuXG4vL0luc2VydCBhIG5ldyBpdGVtIGludG8gdGhlIHRyZWVcbnByb3RvLmluc2VydCA9IGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcbiAgdmFyIGNtcCA9IHRoaXMuX2NvbXBhcmVcbiAgLy9GaW5kIHBvaW50IHRvIGluc2VydCBuZXcgbm9kZSBhdFxuICB2YXIgbiA9IHRoaXMucm9vdFxuICB2YXIgbl9zdGFjayA9IFtdXG4gIHZhciBkX3N0YWNrID0gW11cbiAgd2hpbGUobikge1xuICAgIHZhciBkID0gY21wKGtleSwgbi5rZXkpXG4gICAgbl9zdGFjay5wdXNoKG4pXG4gICAgZF9zdGFjay5wdXNoKGQpXG4gICAgaWYoZCA8PSAwKSB7XG4gICAgICBuID0gbi5sZWZ0XG4gICAgfSBlbHNlIHtcbiAgICAgIG4gPSBuLnJpZ2h0XG4gICAgfVxuICB9XG4gIC8vUmVidWlsZCBwYXRoIHRvIGxlYWYgbm9kZVxuICBuX3N0YWNrLnB1c2gobmV3IFJCTm9kZShSRUQsIGtleSwgdmFsdWUsIG51bGwsIG51bGwsIDEpKVxuICBmb3IodmFyIHM9bl9zdGFjay5sZW5ndGgtMjsgcz49MDsgLS1zKSB7XG4gICAgdmFyIG4gPSBuX3N0YWNrW3NdXG4gICAgaWYoZF9zdGFja1tzXSA8PSAwKSB7XG4gICAgICBuX3N0YWNrW3NdID0gbmV3IFJCTm9kZShuLl9jb2xvciwgbi5rZXksIG4udmFsdWUsIG5fc3RhY2tbcysxXSwgbi5yaWdodCwgbi5fY291bnQrMSlcbiAgICB9IGVsc2Uge1xuICAgICAgbl9zdGFja1tzXSA9IG5ldyBSQk5vZGUobi5fY29sb3IsIG4ua2V5LCBuLnZhbHVlLCBuLmxlZnQsIG5fc3RhY2tbcysxXSwgbi5fY291bnQrMSlcbiAgICB9XG4gIH1cbiAgLy9SZWJhbGFuY2UgdHJlZSB1c2luZyByb3RhdGlvbnNcbiAgLy9jb25zb2xlLmxvZyhcInN0YXJ0IGluc2VydFwiLCBrZXksIGRfc3RhY2spXG4gIGZvcih2YXIgcz1uX3N0YWNrLmxlbmd0aC0xOyBzPjE7IC0tcykge1xuICAgIHZhciBwID0gbl9zdGFja1tzLTFdXG4gICAgdmFyIG4gPSBuX3N0YWNrW3NdXG4gICAgaWYocC5fY29sb3IgPT09IEJMQUNLIHx8IG4uX2NvbG9yID09PSBCTEFDSykge1xuICAgICAgYnJlYWtcbiAgICB9XG4gICAgdmFyIHBwID0gbl9zdGFja1tzLTJdXG4gICAgaWYocHAubGVmdCA9PT0gcCkge1xuICAgICAgaWYocC5sZWZ0ID09PSBuKSB7XG4gICAgICAgIHZhciB5ID0gcHAucmlnaHRcbiAgICAgICAgaWYoeSAmJiB5Ll9jb2xvciA9PT0gUkVEKSB7XG4gICAgICAgICAgLy9jb25zb2xlLmxvZyhcIkxMclwiKVxuICAgICAgICAgIHAuX2NvbG9yID0gQkxBQ0tcbiAgICAgICAgICBwcC5yaWdodCA9IHJlcGFpbnQoQkxBQ0ssIHkpXG4gICAgICAgICAgcHAuX2NvbG9yID0gUkVEXG4gICAgICAgICAgcyAtPSAxXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy9jb25zb2xlLmxvZyhcIkxMYlwiKVxuICAgICAgICAgIHBwLl9jb2xvciA9IFJFRFxuICAgICAgICAgIHBwLmxlZnQgPSBwLnJpZ2h0XG4gICAgICAgICAgcC5fY29sb3IgPSBCTEFDS1xuICAgICAgICAgIHAucmlnaHQgPSBwcFxuICAgICAgICAgIG5fc3RhY2tbcy0yXSA9IHBcbiAgICAgICAgICBuX3N0YWNrW3MtMV0gPSBuXG4gICAgICAgICAgcmVjb3VudChwcClcbiAgICAgICAgICByZWNvdW50KHApXG4gICAgICAgICAgaWYocyA+PSAzKSB7XG4gICAgICAgICAgICB2YXIgcHBwID0gbl9zdGFja1tzLTNdXG4gICAgICAgICAgICBpZihwcHAubGVmdCA9PT0gcHApIHtcbiAgICAgICAgICAgICAgcHBwLmxlZnQgPSBwXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBwcHAucmlnaHQgPSBwXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciB5ID0gcHAucmlnaHRcbiAgICAgICAgaWYoeSAmJiB5Ll9jb2xvciA9PT0gUkVEKSB7XG4gICAgICAgICAgLy9jb25zb2xlLmxvZyhcIkxSclwiKVxuICAgICAgICAgIHAuX2NvbG9yID0gQkxBQ0tcbiAgICAgICAgICBwcC5yaWdodCA9IHJlcGFpbnQoQkxBQ0ssIHkpXG4gICAgICAgICAgcHAuX2NvbG9yID0gUkVEXG4gICAgICAgICAgcyAtPSAxXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy9jb25zb2xlLmxvZyhcIkxSYlwiKVxuICAgICAgICAgIHAucmlnaHQgPSBuLmxlZnRcbiAgICAgICAgICBwcC5fY29sb3IgPSBSRURcbiAgICAgICAgICBwcC5sZWZ0ID0gbi5yaWdodFxuICAgICAgICAgIG4uX2NvbG9yID0gQkxBQ0tcbiAgICAgICAgICBuLmxlZnQgPSBwXG4gICAgICAgICAgbi5yaWdodCA9IHBwXG4gICAgICAgICAgbl9zdGFja1tzLTJdID0gblxuICAgICAgICAgIG5fc3RhY2tbcy0xXSA9IHBcbiAgICAgICAgICByZWNvdW50KHBwKVxuICAgICAgICAgIHJlY291bnQocClcbiAgICAgICAgICByZWNvdW50KG4pXG4gICAgICAgICAgaWYocyA+PSAzKSB7XG4gICAgICAgICAgICB2YXIgcHBwID0gbl9zdGFja1tzLTNdXG4gICAgICAgICAgICBpZihwcHAubGVmdCA9PT0gcHApIHtcbiAgICAgICAgICAgICAgcHBwLmxlZnQgPSBuXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBwcHAucmlnaHQgPSBuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYocC5yaWdodCA9PT0gbikge1xuICAgICAgICB2YXIgeSA9IHBwLmxlZnRcbiAgICAgICAgaWYoeSAmJiB5Ll9jb2xvciA9PT0gUkVEKSB7XG4gICAgICAgICAgLy9jb25zb2xlLmxvZyhcIlJSclwiLCB5LmtleSlcbiAgICAgICAgICBwLl9jb2xvciA9IEJMQUNLXG4gICAgICAgICAgcHAubGVmdCA9IHJlcGFpbnQoQkxBQ0ssIHkpXG4gICAgICAgICAgcHAuX2NvbG9yID0gUkVEXG4gICAgICAgICAgcyAtPSAxXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy9jb25zb2xlLmxvZyhcIlJSYlwiKVxuICAgICAgICAgIHBwLl9jb2xvciA9IFJFRFxuICAgICAgICAgIHBwLnJpZ2h0ID0gcC5sZWZ0XG4gICAgICAgICAgcC5fY29sb3IgPSBCTEFDS1xuICAgICAgICAgIHAubGVmdCA9IHBwXG4gICAgICAgICAgbl9zdGFja1tzLTJdID0gcFxuICAgICAgICAgIG5fc3RhY2tbcy0xXSA9IG5cbiAgICAgICAgICByZWNvdW50KHBwKVxuICAgICAgICAgIHJlY291bnQocClcbiAgICAgICAgICBpZihzID49IDMpIHtcbiAgICAgICAgICAgIHZhciBwcHAgPSBuX3N0YWNrW3MtM11cbiAgICAgICAgICAgIGlmKHBwcC5yaWdodCA9PT0gcHApIHtcbiAgICAgICAgICAgICAgcHBwLnJpZ2h0ID0gcFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcHBwLmxlZnQgPSBwXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciB5ID0gcHAubGVmdFxuICAgICAgICBpZih5ICYmIHkuX2NvbG9yID09PSBSRUQpIHtcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiUkxyXCIpXG4gICAgICAgICAgcC5fY29sb3IgPSBCTEFDS1xuICAgICAgICAgIHBwLmxlZnQgPSByZXBhaW50KEJMQUNLLCB5KVxuICAgICAgICAgIHBwLl9jb2xvciA9IFJFRFxuICAgICAgICAgIHMgLT0gMVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vY29uc29sZS5sb2coXCJSTGJcIilcbiAgICAgICAgICBwLmxlZnQgPSBuLnJpZ2h0XG4gICAgICAgICAgcHAuX2NvbG9yID0gUkVEXG4gICAgICAgICAgcHAucmlnaHQgPSBuLmxlZnRcbiAgICAgICAgICBuLl9jb2xvciA9IEJMQUNLXG4gICAgICAgICAgbi5yaWdodCA9IHBcbiAgICAgICAgICBuLmxlZnQgPSBwcFxuICAgICAgICAgIG5fc3RhY2tbcy0yXSA9IG5cbiAgICAgICAgICBuX3N0YWNrW3MtMV0gPSBwXG4gICAgICAgICAgcmVjb3VudChwcClcbiAgICAgICAgICByZWNvdW50KHApXG4gICAgICAgICAgcmVjb3VudChuKVxuICAgICAgICAgIGlmKHMgPj0gMykge1xuICAgICAgICAgICAgdmFyIHBwcCA9IG5fc3RhY2tbcy0zXVxuICAgICAgICAgICAgaWYocHBwLnJpZ2h0ID09PSBwcCkge1xuICAgICAgICAgICAgICBwcHAucmlnaHQgPSBuXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBwcHAubGVmdCA9IG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICAvL1JldHVybiBuZXcgdHJlZVxuICBuX3N0YWNrWzBdLl9jb2xvciA9IEJMQUNLXG4gIHJldHVybiBuZXcgUmVkQmxhY2tUcmVlKGNtcCwgbl9zdGFja1swXSlcbn1cblxuXG4vL1Zpc2l0IGFsbCBub2RlcyBpbm9yZGVyXG5mdW5jdGlvbiBkb1Zpc2l0RnVsbCh2aXNpdCwgbm9kZSkge1xuICBpZihub2RlLmxlZnQpIHtcbiAgICB2YXIgdiA9IGRvVmlzaXRGdWxsKHZpc2l0LCBub2RlLmxlZnQpXG4gICAgaWYodikgeyByZXR1cm4gdiB9XG4gIH1cbiAgdmFyIHYgPSB2aXNpdChub2RlLmtleSwgbm9kZS52YWx1ZSlcbiAgaWYodikgeyByZXR1cm4gdiB9XG4gIGlmKG5vZGUucmlnaHQpIHtcbiAgICByZXR1cm4gZG9WaXNpdEZ1bGwodmlzaXQsIG5vZGUucmlnaHQpXG4gIH1cbn1cblxuLy9WaXNpdCBoYWxmIG5vZGVzIGluIG9yZGVyXG5mdW5jdGlvbiBkb1Zpc2l0SGFsZihsbywgY29tcGFyZSwgdmlzaXQsIG5vZGUpIHtcbiAgdmFyIGwgPSBjb21wYXJlKGxvLCBub2RlLmtleSlcbiAgaWYobCA8PSAwKSB7XG4gICAgaWYobm9kZS5sZWZ0KSB7XG4gICAgICB2YXIgdiA9IGRvVmlzaXRIYWxmKGxvLCBjb21wYXJlLCB2aXNpdCwgbm9kZS5sZWZ0KVxuICAgICAgaWYodikgeyByZXR1cm4gdiB9XG4gICAgfVxuICAgIHZhciB2ID0gdmlzaXQobm9kZS5rZXksIG5vZGUudmFsdWUpXG4gICAgaWYodikgeyByZXR1cm4gdiB9XG4gIH1cbiAgaWYobm9kZS5yaWdodCkge1xuICAgIHJldHVybiBkb1Zpc2l0SGFsZihsbywgY29tcGFyZSwgdmlzaXQsIG5vZGUucmlnaHQpXG4gIH1cbn1cblxuLy9WaXNpdCBhbGwgbm9kZXMgd2l0aGluIGEgcmFuZ2VcbmZ1bmN0aW9uIGRvVmlzaXQobG8sIGhpLCBjb21wYXJlLCB2aXNpdCwgbm9kZSkge1xuICB2YXIgbCA9IGNvbXBhcmUobG8sIG5vZGUua2V5KVxuICB2YXIgaCA9IGNvbXBhcmUoaGksIG5vZGUua2V5KVxuICB2YXIgdlxuICBpZihsIDw9IDApIHtcbiAgICBpZihub2RlLmxlZnQpIHtcbiAgICAgIHYgPSBkb1Zpc2l0KGxvLCBoaSwgY29tcGFyZSwgdmlzaXQsIG5vZGUubGVmdClcbiAgICAgIGlmKHYpIHsgcmV0dXJuIHYgfVxuICAgIH1cbiAgICBpZihoID4gMCkge1xuICAgICAgdiA9IHZpc2l0KG5vZGUua2V5LCBub2RlLnZhbHVlKVxuICAgICAgaWYodikgeyByZXR1cm4gdiB9XG4gICAgfVxuICB9XG4gIGlmKGggPiAwICYmIG5vZGUucmlnaHQpIHtcbiAgICByZXR1cm4gZG9WaXNpdChsbywgaGksIGNvbXBhcmUsIHZpc2l0LCBub2RlLnJpZ2h0KVxuICB9XG59XG5cblxucHJvdG8uZm9yRWFjaCA9IGZ1bmN0aW9uIHJiVHJlZUZvckVhY2godmlzaXQsIGxvLCBoaSkge1xuICBpZighdGhpcy5yb290KSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgc3dpdGNoKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICBjYXNlIDE6XG4gICAgICByZXR1cm4gZG9WaXNpdEZ1bGwodmlzaXQsIHRoaXMucm9vdClcbiAgICBicmVha1xuXG4gICAgY2FzZSAyOlxuICAgICAgcmV0dXJuIGRvVmlzaXRIYWxmKGxvLCB0aGlzLl9jb21wYXJlLCB2aXNpdCwgdGhpcy5yb290KVxuICAgIGJyZWFrXG5cbiAgICBjYXNlIDM6XG4gICAgICBpZih0aGlzLl9jb21wYXJlKGxvLCBoaSkgPj0gMCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIHJldHVybiBkb1Zpc2l0KGxvLCBoaSwgdGhpcy5fY29tcGFyZSwgdmlzaXQsIHRoaXMucm9vdClcbiAgICBicmVha1xuICB9XG59XG5cbi8vRmlyc3QgaXRlbSBpbiBsaXN0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkocHJvdG8sIFwiYmVnaW5cIiwge1xuICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBzdGFjayA9IFtdXG4gICAgdmFyIG4gPSB0aGlzLnJvb3RcbiAgICB3aGlsZShuKSB7XG4gICAgICBzdGFjay5wdXNoKG4pXG4gICAgICBuID0gbi5sZWZ0XG4gICAgfVxuICAgIHJldHVybiBuZXcgUmVkQmxhY2tUcmVlSXRlcmF0b3IodGhpcywgc3RhY2spXG4gIH1cbn0pXG5cbi8vTGFzdCBpdGVtIGluIGxpc3Rcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm90bywgXCJlbmRcIiwge1xuICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBzdGFjayA9IFtdXG4gICAgdmFyIG4gPSB0aGlzLnJvb3RcbiAgICB3aGlsZShuKSB7XG4gICAgICBzdGFjay5wdXNoKG4pXG4gICAgICBuID0gbi5yaWdodFxuICAgIH1cbiAgICByZXR1cm4gbmV3IFJlZEJsYWNrVHJlZUl0ZXJhdG9yKHRoaXMsIHN0YWNrKVxuICB9XG59KVxuXG4vL0ZpbmQgdGhlIGl0aCBpdGVtIGluIHRoZSB0cmVlXG5wcm90by5hdCA9IGZ1bmN0aW9uKGlkeCkge1xuICBpZihpZHggPCAwKSB7XG4gICAgcmV0dXJuIG5ldyBSZWRCbGFja1RyZWVJdGVyYXRvcih0aGlzLCBbXSlcbiAgfVxuICB2YXIgbiA9IHRoaXMucm9vdFxuICB2YXIgc3RhY2sgPSBbXVxuICB3aGlsZSh0cnVlKSB7XG4gICAgc3RhY2sucHVzaChuKVxuICAgIGlmKG4ubGVmdCkge1xuICAgICAgaWYoaWR4IDwgbi5sZWZ0Ll9jb3VudCkge1xuICAgICAgICBuID0gbi5sZWZ0XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG4gICAgICBpZHggLT0gbi5sZWZ0Ll9jb3VudFxuICAgIH1cbiAgICBpZighaWR4KSB7XG4gICAgICByZXR1cm4gbmV3IFJlZEJsYWNrVHJlZUl0ZXJhdG9yKHRoaXMsIHN0YWNrKVxuICAgIH1cbiAgICBpZHggLT0gMVxuICAgIGlmKG4ucmlnaHQpIHtcbiAgICAgIGlmKGlkeCA+PSBuLnJpZ2h0Ll9jb3VudCkge1xuICAgICAgICBicmVha1xuICAgICAgfVxuICAgICAgbiA9IG4ucmlnaHRcbiAgICB9IGVsc2Uge1xuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG5ldyBSZWRCbGFja1RyZWVJdGVyYXRvcih0aGlzLCBbXSlcbn1cblxucHJvdG8uZ2UgPSBmdW5jdGlvbihrZXkpIHtcbiAgdmFyIGNtcCA9IHRoaXMuX2NvbXBhcmVcbiAgdmFyIG4gPSB0aGlzLnJvb3RcbiAgdmFyIHN0YWNrID0gW11cbiAgdmFyIGxhc3RfcHRyID0gMFxuICB3aGlsZShuKSB7XG4gICAgdmFyIGQgPSBjbXAoa2V5LCBuLmtleSlcbiAgICBzdGFjay5wdXNoKG4pXG4gICAgaWYoZCA8PSAwKSB7XG4gICAgICBsYXN0X3B0ciA9IHN0YWNrLmxlbmd0aFxuICAgIH1cbiAgICBpZihkIDw9IDApIHtcbiAgICAgIG4gPSBuLmxlZnRcbiAgICB9IGVsc2Uge1xuICAgICAgbiA9IG4ucmlnaHRcbiAgICB9XG4gIH1cbiAgc3RhY2subGVuZ3RoID0gbGFzdF9wdHJcbiAgcmV0dXJuIG5ldyBSZWRCbGFja1RyZWVJdGVyYXRvcih0aGlzLCBzdGFjaylcbn1cblxucHJvdG8uZ3QgPSBmdW5jdGlvbihrZXkpIHtcbiAgdmFyIGNtcCA9IHRoaXMuX2NvbXBhcmVcbiAgdmFyIG4gPSB0aGlzLnJvb3RcbiAgdmFyIHN0YWNrID0gW11cbiAgdmFyIGxhc3RfcHRyID0gMFxuICB3aGlsZShuKSB7XG4gICAgdmFyIGQgPSBjbXAoa2V5LCBuLmtleSlcbiAgICBzdGFjay5wdXNoKG4pXG4gICAgaWYoZCA8IDApIHtcbiAgICAgIGxhc3RfcHRyID0gc3RhY2subGVuZ3RoXG4gICAgfVxuICAgIGlmKGQgPCAwKSB7XG4gICAgICBuID0gbi5sZWZ0XG4gICAgfSBlbHNlIHtcbiAgICAgIG4gPSBuLnJpZ2h0XG4gICAgfVxuICB9XG4gIHN0YWNrLmxlbmd0aCA9IGxhc3RfcHRyXG4gIHJldHVybiBuZXcgUmVkQmxhY2tUcmVlSXRlcmF0b3IodGhpcywgc3RhY2spXG59XG5cbnByb3RvLmx0ID0gZnVuY3Rpb24oa2V5KSB7XG4gIHZhciBjbXAgPSB0aGlzLl9jb21wYXJlXG4gIHZhciBuID0gdGhpcy5yb290XG4gIHZhciBzdGFjayA9IFtdXG4gIHZhciBsYXN0X3B0ciA9IDBcbiAgd2hpbGUobikge1xuICAgIHZhciBkID0gY21wKGtleSwgbi5rZXkpXG4gICAgc3RhY2sucHVzaChuKVxuICAgIGlmKGQgPiAwKSB7XG4gICAgICBsYXN0X3B0ciA9IHN0YWNrLmxlbmd0aFxuICAgIH1cbiAgICBpZihkIDw9IDApIHtcbiAgICAgIG4gPSBuLmxlZnRcbiAgICB9IGVsc2Uge1xuICAgICAgbiA9IG4ucmlnaHRcbiAgICB9XG4gIH1cbiAgc3RhY2subGVuZ3RoID0gbGFzdF9wdHJcbiAgcmV0dXJuIG5ldyBSZWRCbGFja1RyZWVJdGVyYXRvcih0aGlzLCBzdGFjaylcbn1cblxucHJvdG8ubGUgPSBmdW5jdGlvbihrZXkpIHtcbiAgdmFyIGNtcCA9IHRoaXMuX2NvbXBhcmVcbiAgdmFyIG4gPSB0aGlzLnJvb3RcbiAgdmFyIHN0YWNrID0gW11cbiAgdmFyIGxhc3RfcHRyID0gMFxuICB3aGlsZShuKSB7XG4gICAgdmFyIGQgPSBjbXAoa2V5LCBuLmtleSlcbiAgICBzdGFjay5wdXNoKG4pXG4gICAgaWYoZCA+PSAwKSB7XG4gICAgICBsYXN0X3B0ciA9IHN0YWNrLmxlbmd0aFxuICAgIH1cbiAgICBpZihkIDwgMCkge1xuICAgICAgbiA9IG4ubGVmdFxuICAgIH0gZWxzZSB7XG4gICAgICBuID0gbi5yaWdodFxuICAgIH1cbiAgfVxuICBzdGFjay5sZW5ndGggPSBsYXN0X3B0clxuICByZXR1cm4gbmV3IFJlZEJsYWNrVHJlZUl0ZXJhdG9yKHRoaXMsIHN0YWNrKVxufVxuXG4vL0ZpbmRzIHRoZSBpdGVtIHdpdGgga2V5IGlmIGl0IGV4aXN0c1xucHJvdG8uZmluZCA9IGZ1bmN0aW9uKGtleSkge1xuICB2YXIgY21wID0gdGhpcy5fY29tcGFyZVxuICB2YXIgbiA9IHRoaXMucm9vdFxuICB2YXIgc3RhY2sgPSBbXVxuICB3aGlsZShuKSB7XG4gICAgdmFyIGQgPSBjbXAoa2V5LCBuLmtleSlcbiAgICBzdGFjay5wdXNoKG4pXG4gICAgaWYoZCA9PT0gMCkge1xuICAgICAgcmV0dXJuIG5ldyBSZWRCbGFja1RyZWVJdGVyYXRvcih0aGlzLCBzdGFjaylcbiAgICB9XG4gICAgaWYoZCA8PSAwKSB7XG4gICAgICBuID0gbi5sZWZ0XG4gICAgfSBlbHNlIHtcbiAgICAgIG4gPSBuLnJpZ2h0XG4gICAgfVxuICB9XG4gIHJldHVybiBuZXcgUmVkQmxhY2tUcmVlSXRlcmF0b3IodGhpcywgW10pXG59XG5cbi8vUmVtb3ZlcyBpdGVtIHdpdGgga2V5IGZyb20gdHJlZVxucHJvdG8ucmVtb3ZlID0gZnVuY3Rpb24oa2V5KSB7XG4gIHZhciBpdGVyID0gdGhpcy5maW5kKGtleSlcbiAgaWYoaXRlcikge1xuICAgIHJldHVybiBpdGVyLnJlbW92ZSgpXG4gIH1cbiAgcmV0dXJuIHRoaXNcbn1cblxuLy9SZXR1cm5zIHRoZSBpdGVtIGF0IGBrZXlgXG5wcm90by5nZXQgPSBmdW5jdGlvbihrZXkpIHtcbiAgdmFyIGNtcCA9IHRoaXMuX2NvbXBhcmVcbiAgdmFyIG4gPSB0aGlzLnJvb3RcbiAgd2hpbGUobikge1xuICAgIHZhciBkID0gY21wKGtleSwgbi5rZXkpXG4gICAgaWYoZCA9PT0gMCkge1xuICAgICAgcmV0dXJuIG4udmFsdWVcbiAgICB9XG4gICAgaWYoZCA8PSAwKSB7XG4gICAgICBuID0gbi5sZWZ0XG4gICAgfSBlbHNlIHtcbiAgICAgIG4gPSBuLnJpZ2h0XG4gICAgfVxuICB9XG4gIHJldHVyblxufVxuXG4vL0l0ZXJhdG9yIGZvciByZWQgYmxhY2sgdHJlZVxuZnVuY3Rpb24gUmVkQmxhY2tUcmVlSXRlcmF0b3IodHJlZSwgc3RhY2spIHtcbiAgdGhpcy50cmVlID0gdHJlZVxuICB0aGlzLl9zdGFjayA9IHN0YWNrXG59XG5cbnZhciBpcHJvdG8gPSBSZWRCbGFja1RyZWVJdGVyYXRvci5wcm90b3R5cGVcblxuLy9UZXN0IGlmIGl0ZXJhdG9yIGlzIHZhbGlkXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoaXByb3RvLCBcInZhbGlkXCIsIHtcbiAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhY2subGVuZ3RoID4gMFxuICB9XG59KVxuXG4vL05vZGUgb2YgdGhlIGl0ZXJhdG9yXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoaXByb3RvLCBcIm5vZGVcIiwge1xuICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgIGlmKHRoaXMuX3N0YWNrLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiB0aGlzLl9zdGFja1t0aGlzLl9zdGFjay5sZW5ndGgtMV1cbiAgICB9XG4gICAgcmV0dXJuIG51bGxcbiAgfSxcbiAgZW51bWVyYWJsZTogdHJ1ZVxufSlcblxuLy9NYWtlcyBhIGNvcHkgb2YgYW4gaXRlcmF0b3Jcbmlwcm90by5jbG9uZSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFJlZEJsYWNrVHJlZUl0ZXJhdG9yKHRoaXMudHJlZSwgdGhpcy5fc3RhY2suc2xpY2UoKSlcbn1cblxuLy9Td2FwcyB0d28gbm9kZXNcbmZ1bmN0aW9uIHN3YXBOb2RlKG4sIHYpIHtcbiAgbi5rZXkgPSB2LmtleVxuICBuLnZhbHVlID0gdi52YWx1ZVxuICBuLmxlZnQgPSB2LmxlZnRcbiAgbi5yaWdodCA9IHYucmlnaHRcbiAgbi5fY29sb3IgPSB2Ll9jb2xvclxuICBuLl9jb3VudCA9IHYuX2NvdW50XG59XG5cbi8vRml4IHVwIGEgZG91YmxlIGJsYWNrIG5vZGUgaW4gYSB0cmVlXG5mdW5jdGlvbiBmaXhEb3VibGVCbGFjayhzdGFjaykge1xuICB2YXIgbiwgcCwgcywgelxuICBmb3IodmFyIGk9c3RhY2subGVuZ3RoLTE7IGk+PTA7IC0taSkge1xuICAgIG4gPSBzdGFja1tpXVxuICAgIGlmKGkgPT09IDApIHtcbiAgICAgIG4uX2NvbG9yID0gQkxBQ0tcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICAvL2NvbnNvbGUubG9nKFwidmlzaXQgbm9kZTpcIiwgbi5rZXksIGksIHN0YWNrW2ldLmtleSwgc3RhY2tbaS0xXS5rZXkpXG4gICAgcCA9IHN0YWNrW2ktMV1cbiAgICBpZihwLmxlZnQgPT09IG4pIHtcbiAgICAgIC8vY29uc29sZS5sb2coXCJsZWZ0IGNoaWxkXCIpXG4gICAgICBzID0gcC5yaWdodFxuICAgICAgaWYocy5yaWdodCAmJiBzLnJpZ2h0Ll9jb2xvciA9PT0gUkVEKSB7XG4gICAgICAgIC8vY29uc29sZS5sb2coXCJjYXNlIDE6IHJpZ2h0IHNpYmxpbmcgY2hpbGQgcmVkXCIpXG4gICAgICAgIHMgPSBwLnJpZ2h0ID0gY2xvbmVOb2RlKHMpXG4gICAgICAgIHogPSBzLnJpZ2h0ID0gY2xvbmVOb2RlKHMucmlnaHQpXG4gICAgICAgIHAucmlnaHQgPSBzLmxlZnRcbiAgICAgICAgcy5sZWZ0ID0gcFxuICAgICAgICBzLnJpZ2h0ID0gelxuICAgICAgICBzLl9jb2xvciA9IHAuX2NvbG9yXG4gICAgICAgIG4uX2NvbG9yID0gQkxBQ0tcbiAgICAgICAgcC5fY29sb3IgPSBCTEFDS1xuICAgICAgICB6Ll9jb2xvciA9IEJMQUNLXG4gICAgICAgIHJlY291bnQocClcbiAgICAgICAgcmVjb3VudChzKVxuICAgICAgICBpZihpID4gMSkge1xuICAgICAgICAgIHZhciBwcCA9IHN0YWNrW2ktMl1cbiAgICAgICAgICBpZihwcC5sZWZ0ID09PSBwKSB7XG4gICAgICAgICAgICBwcC5sZWZ0ID0gc1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwcC5yaWdodCA9IHNcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc3RhY2tbaS0xXSA9IHNcbiAgICAgICAgcmV0dXJuXG4gICAgICB9IGVsc2UgaWYocy5sZWZ0ICYmIHMubGVmdC5fY29sb3IgPT09IFJFRCkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwiY2FzZSAxOiBsZWZ0IHNpYmxpbmcgY2hpbGQgcmVkXCIpXG4gICAgICAgIHMgPSBwLnJpZ2h0ID0gY2xvbmVOb2RlKHMpXG4gICAgICAgIHogPSBzLmxlZnQgPSBjbG9uZU5vZGUocy5sZWZ0KVxuICAgICAgICBwLnJpZ2h0ID0gei5sZWZ0XG4gICAgICAgIHMubGVmdCA9IHoucmlnaHRcbiAgICAgICAgei5sZWZ0ID0gcFxuICAgICAgICB6LnJpZ2h0ID0gc1xuICAgICAgICB6Ll9jb2xvciA9IHAuX2NvbG9yXG4gICAgICAgIHAuX2NvbG9yID0gQkxBQ0tcbiAgICAgICAgcy5fY29sb3IgPSBCTEFDS1xuICAgICAgICBuLl9jb2xvciA9IEJMQUNLXG4gICAgICAgIHJlY291bnQocClcbiAgICAgICAgcmVjb3VudChzKVxuICAgICAgICByZWNvdW50KHopXG4gICAgICAgIGlmKGkgPiAxKSB7XG4gICAgICAgICAgdmFyIHBwID0gc3RhY2tbaS0yXVxuICAgICAgICAgIGlmKHBwLmxlZnQgPT09IHApIHtcbiAgICAgICAgICAgIHBwLmxlZnQgPSB6XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBwLnJpZ2h0ID0gelxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzdGFja1tpLTFdID0gelxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGlmKHMuX2NvbG9yID09PSBCTEFDSykge1xuICAgICAgICBpZihwLl9jb2xvciA9PT0gUkVEKSB7XG4gICAgICAgICAgLy9jb25zb2xlLmxvZyhcImNhc2UgMjogYmxhY2sgc2libGluZywgcmVkIHBhcmVudFwiLCBwLnJpZ2h0LnZhbHVlKVxuICAgICAgICAgIHAuX2NvbG9yID0gQkxBQ0tcbiAgICAgICAgICBwLnJpZ2h0ID0gcmVwYWludChSRUQsIHMpXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy9jb25zb2xlLmxvZyhcImNhc2UgMjogYmxhY2sgc2libGluZywgYmxhY2sgcGFyZW50XCIsIHAucmlnaHQudmFsdWUpXG4gICAgICAgICAgcC5yaWdodCA9IHJlcGFpbnQoUkVELCBzKVxuICAgICAgICAgIGNvbnRpbnVlICBcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcImNhc2UgMzogcmVkIHNpYmxpbmdcIilcbiAgICAgICAgcyA9IGNsb25lTm9kZShzKVxuICAgICAgICBwLnJpZ2h0ID0gcy5sZWZ0XG4gICAgICAgIHMubGVmdCA9IHBcbiAgICAgICAgcy5fY29sb3IgPSBwLl9jb2xvclxuICAgICAgICBwLl9jb2xvciA9IFJFRFxuICAgICAgICByZWNvdW50KHApXG4gICAgICAgIHJlY291bnQocylcbiAgICAgICAgaWYoaSA+IDEpIHtcbiAgICAgICAgICB2YXIgcHAgPSBzdGFja1tpLTJdXG4gICAgICAgICAgaWYocHAubGVmdCA9PT0gcCkge1xuICAgICAgICAgICAgcHAubGVmdCA9IHNcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHAucmlnaHQgPSBzXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHN0YWNrW2ktMV0gPSBzXG4gICAgICAgIHN0YWNrW2ldID0gcFxuICAgICAgICBpZihpKzEgPCBzdGFjay5sZW5ndGgpIHtcbiAgICAgICAgICBzdGFja1tpKzFdID0gblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN0YWNrLnB1c2gobilcbiAgICAgICAgfVxuICAgICAgICBpID0gaSsyXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vY29uc29sZS5sb2coXCJyaWdodCBjaGlsZFwiKVxuICAgICAgcyA9IHAubGVmdFxuICAgICAgaWYocy5sZWZ0ICYmIHMubGVmdC5fY29sb3IgPT09IFJFRCkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwiY2FzZSAxOiBsZWZ0IHNpYmxpbmcgY2hpbGQgcmVkXCIsIHAudmFsdWUsIHAuX2NvbG9yKVxuICAgICAgICBzID0gcC5sZWZ0ID0gY2xvbmVOb2RlKHMpXG4gICAgICAgIHogPSBzLmxlZnQgPSBjbG9uZU5vZGUocy5sZWZ0KVxuICAgICAgICBwLmxlZnQgPSBzLnJpZ2h0XG4gICAgICAgIHMucmlnaHQgPSBwXG4gICAgICAgIHMubGVmdCA9IHpcbiAgICAgICAgcy5fY29sb3IgPSBwLl9jb2xvclxuICAgICAgICBuLl9jb2xvciA9IEJMQUNLXG4gICAgICAgIHAuX2NvbG9yID0gQkxBQ0tcbiAgICAgICAgei5fY29sb3IgPSBCTEFDS1xuICAgICAgICByZWNvdW50KHApXG4gICAgICAgIHJlY291bnQocylcbiAgICAgICAgaWYoaSA+IDEpIHtcbiAgICAgICAgICB2YXIgcHAgPSBzdGFja1tpLTJdXG4gICAgICAgICAgaWYocHAucmlnaHQgPT09IHApIHtcbiAgICAgICAgICAgIHBwLnJpZ2h0ID0gc1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwcC5sZWZ0ID0gc1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzdGFja1tpLTFdID0gc1xuICAgICAgICByZXR1cm5cbiAgICAgIH0gZWxzZSBpZihzLnJpZ2h0ICYmIHMucmlnaHQuX2NvbG9yID09PSBSRUQpIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcImNhc2UgMTogcmlnaHQgc2libGluZyBjaGlsZCByZWRcIilcbiAgICAgICAgcyA9IHAubGVmdCA9IGNsb25lTm9kZShzKVxuICAgICAgICB6ID0gcy5yaWdodCA9IGNsb25lTm9kZShzLnJpZ2h0KVxuICAgICAgICBwLmxlZnQgPSB6LnJpZ2h0XG4gICAgICAgIHMucmlnaHQgPSB6LmxlZnRcbiAgICAgICAgei5yaWdodCA9IHBcbiAgICAgICAgei5sZWZ0ID0gc1xuICAgICAgICB6Ll9jb2xvciA9IHAuX2NvbG9yXG4gICAgICAgIHAuX2NvbG9yID0gQkxBQ0tcbiAgICAgICAgcy5fY29sb3IgPSBCTEFDS1xuICAgICAgICBuLl9jb2xvciA9IEJMQUNLXG4gICAgICAgIHJlY291bnQocClcbiAgICAgICAgcmVjb3VudChzKVxuICAgICAgICByZWNvdW50KHopXG4gICAgICAgIGlmKGkgPiAxKSB7XG4gICAgICAgICAgdmFyIHBwID0gc3RhY2tbaS0yXVxuICAgICAgICAgIGlmKHBwLnJpZ2h0ID09PSBwKSB7XG4gICAgICAgICAgICBwcC5yaWdodCA9IHpcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHAubGVmdCA9IHpcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc3RhY2tbaS0xXSA9IHpcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBpZihzLl9jb2xvciA9PT0gQkxBQ0spIHtcbiAgICAgICAgaWYocC5fY29sb3IgPT09IFJFRCkge1xuICAgICAgICAgIC8vY29uc29sZS5sb2coXCJjYXNlIDI6IGJsYWNrIHNpYmxpbmcsIHJlZCBwYXJlbnRcIilcbiAgICAgICAgICBwLl9jb2xvciA9IEJMQUNLXG4gICAgICAgICAgcC5sZWZ0ID0gcmVwYWludChSRUQsIHMpXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy9jb25zb2xlLmxvZyhcImNhc2UgMjogYmxhY2sgc2libGluZywgYmxhY2sgcGFyZW50XCIpXG4gICAgICAgICAgcC5sZWZ0ID0gcmVwYWludChSRUQsIHMpXG4gICAgICAgICAgY29udGludWUgIFxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwiY2FzZSAzOiByZWQgc2libGluZ1wiKVxuICAgICAgICBzID0gY2xvbmVOb2RlKHMpXG4gICAgICAgIHAubGVmdCA9IHMucmlnaHRcbiAgICAgICAgcy5yaWdodCA9IHBcbiAgICAgICAgcy5fY29sb3IgPSBwLl9jb2xvclxuICAgICAgICBwLl9jb2xvciA9IFJFRFxuICAgICAgICByZWNvdW50KHApXG4gICAgICAgIHJlY291bnQocylcbiAgICAgICAgaWYoaSA+IDEpIHtcbiAgICAgICAgICB2YXIgcHAgPSBzdGFja1tpLTJdXG4gICAgICAgICAgaWYocHAucmlnaHQgPT09IHApIHtcbiAgICAgICAgICAgIHBwLnJpZ2h0ID0gc1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwcC5sZWZ0ID0gc1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzdGFja1tpLTFdID0gc1xuICAgICAgICBzdGFja1tpXSA9IHBcbiAgICAgICAgaWYoaSsxIDwgc3RhY2subGVuZ3RoKSB7XG4gICAgICAgICAgc3RhY2tbaSsxXSA9IG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzdGFjay5wdXNoKG4pXG4gICAgICAgIH1cbiAgICAgICAgaSA9IGkrMlxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vL1JlbW92ZXMgaXRlbSBhdCBpdGVyYXRvciBmcm9tIHRyZWVcbmlwcm90by5yZW1vdmUgPSBmdW5jdGlvbigpIHtcbiAgdmFyIHN0YWNrID0gdGhpcy5fc3RhY2tcbiAgaWYoc3RhY2subGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIHRoaXMudHJlZVxuICB9XG4gIC8vRmlyc3QgY29weSBwYXRoIHRvIG5vZGVcbiAgdmFyIGNzdGFjayA9IG5ldyBBcnJheShzdGFjay5sZW5ndGgpXG4gIHZhciBuID0gc3RhY2tbc3RhY2subGVuZ3RoLTFdXG4gIGNzdGFja1tjc3RhY2subGVuZ3RoLTFdID0gbmV3IFJCTm9kZShuLl9jb2xvciwgbi5rZXksIG4udmFsdWUsIG4ubGVmdCwgbi5yaWdodCwgbi5fY291bnQpXG4gIGZvcih2YXIgaT1zdGFjay5sZW5ndGgtMjsgaT49MDsgLS1pKSB7XG4gICAgdmFyIG4gPSBzdGFja1tpXVxuICAgIGlmKG4ubGVmdCA9PT0gc3RhY2tbaSsxXSkge1xuICAgICAgY3N0YWNrW2ldID0gbmV3IFJCTm9kZShuLl9jb2xvciwgbi5rZXksIG4udmFsdWUsIGNzdGFja1tpKzFdLCBuLnJpZ2h0LCBuLl9jb3VudClcbiAgICB9IGVsc2Uge1xuICAgICAgY3N0YWNrW2ldID0gbmV3IFJCTm9kZShuLl9jb2xvciwgbi5rZXksIG4udmFsdWUsIG4ubGVmdCwgY3N0YWNrW2krMV0sIG4uX2NvdW50KVxuICAgIH1cbiAgfVxuXG4gIC8vR2V0IG5vZGVcbiAgbiA9IGNzdGFja1tjc3RhY2subGVuZ3RoLTFdXG4gIC8vY29uc29sZS5sb2coXCJzdGFydCByZW1vdmU6IFwiLCBuLnZhbHVlKVxuXG4gIC8vSWYgbm90IGxlYWYsIHRoZW4gc3dhcCB3aXRoIHByZXZpb3VzIG5vZGVcbiAgaWYobi5sZWZ0ICYmIG4ucmlnaHQpIHtcbiAgICAvL2NvbnNvbGUubG9nKFwibW92aW5nIHRvIGxlYWZcIilcblxuICAgIC8vRmlyc3Qgd2FsayB0byBwcmV2aW91cyBsZWFmXG4gICAgdmFyIHNwbGl0ID0gY3N0YWNrLmxlbmd0aFxuICAgIG4gPSBuLmxlZnRcbiAgICB3aGlsZShuLnJpZ2h0KSB7XG4gICAgICBjc3RhY2sucHVzaChuKVxuICAgICAgbiA9IG4ucmlnaHRcbiAgICB9XG4gICAgLy9Db3B5IHBhdGggdG8gbGVhZlxuICAgIHZhciB2ID0gY3N0YWNrW3NwbGl0LTFdXG4gICAgY3N0YWNrLnB1c2gobmV3IFJCTm9kZShuLl9jb2xvciwgdi5rZXksIHYudmFsdWUsIG4ubGVmdCwgbi5yaWdodCwgbi5fY291bnQpKVxuICAgIGNzdGFja1tzcGxpdC0xXS5rZXkgPSBuLmtleVxuICAgIGNzdGFja1tzcGxpdC0xXS52YWx1ZSA9IG4udmFsdWVcblxuICAgIC8vRml4IHVwIHN0YWNrXG4gICAgZm9yKHZhciBpPWNzdGFjay5sZW5ndGgtMjsgaT49c3BsaXQ7IC0taSkge1xuICAgICAgbiA9IGNzdGFja1tpXVxuICAgICAgY3N0YWNrW2ldID0gbmV3IFJCTm9kZShuLl9jb2xvciwgbi5rZXksIG4udmFsdWUsIG4ubGVmdCwgY3N0YWNrW2krMV0sIG4uX2NvdW50KVxuICAgIH1cbiAgICBjc3RhY2tbc3BsaXQtMV0ubGVmdCA9IGNzdGFja1tzcGxpdF1cbiAgfVxuICAvL2NvbnNvbGUubG9nKFwic3RhY2s9XCIsIGNzdGFjay5tYXAoZnVuY3Rpb24odikgeyByZXR1cm4gdi52YWx1ZSB9KSlcblxuICAvL1JlbW92ZSBsZWFmIG5vZGVcbiAgbiA9IGNzdGFja1tjc3RhY2subGVuZ3RoLTFdXG4gIGlmKG4uX2NvbG9yID09PSBSRUQpIHtcbiAgICAvL0Vhc3kgY2FzZTogcmVtb3ZpbmcgcmVkIGxlYWZcbiAgICAvL2NvbnNvbGUubG9nKFwiUkVEIGxlYWZcIilcbiAgICB2YXIgcCA9IGNzdGFja1tjc3RhY2subGVuZ3RoLTJdXG4gICAgaWYocC5sZWZ0ID09PSBuKSB7XG4gICAgICBwLmxlZnQgPSBudWxsXG4gICAgfSBlbHNlIGlmKHAucmlnaHQgPT09IG4pIHtcbiAgICAgIHAucmlnaHQgPSBudWxsXG4gICAgfVxuICAgIGNzdGFjay5wb3AoKVxuICAgIGZvcih2YXIgaT0wOyBpPGNzdGFjay5sZW5ndGg7ICsraSkge1xuICAgICAgY3N0YWNrW2ldLl9jb3VudC0tXG4gICAgfVxuICAgIHJldHVybiBuZXcgUmVkQmxhY2tUcmVlKHRoaXMudHJlZS5fY29tcGFyZSwgY3N0YWNrWzBdKVxuICB9IGVsc2Uge1xuICAgIGlmKG4ubGVmdCB8fCBuLnJpZ2h0KSB7XG4gICAgICAvL1NlY29uZCBlYXN5IGNhc2U6ICBTaW5nbGUgY2hpbGQgYmxhY2sgcGFyZW50XG4gICAgICAvL2NvbnNvbGUubG9nKFwiQkxBQ0sgc2luZ2xlIGNoaWxkXCIpXG4gICAgICBpZihuLmxlZnQpIHtcbiAgICAgICAgc3dhcE5vZGUobiwgbi5sZWZ0KVxuICAgICAgfSBlbHNlIGlmKG4ucmlnaHQpIHtcbiAgICAgICAgc3dhcE5vZGUobiwgbi5yaWdodClcbiAgICAgIH1cbiAgICAgIC8vQ2hpbGQgbXVzdCBiZSByZWQsIHNvIHJlcGFpbnQgaXQgYmxhY2sgdG8gYmFsYW5jZSBjb2xvclxuICAgICAgbi5fY29sb3IgPSBCTEFDS1xuICAgICAgZm9yKHZhciBpPTA7IGk8Y3N0YWNrLmxlbmd0aC0xOyArK2kpIHtcbiAgICAgICAgY3N0YWNrW2ldLl9jb3VudC0tXG4gICAgICB9XG4gICAgICByZXR1cm4gbmV3IFJlZEJsYWNrVHJlZSh0aGlzLnRyZWUuX2NvbXBhcmUsIGNzdGFja1swXSlcbiAgICB9IGVsc2UgaWYoY3N0YWNrLmxlbmd0aCA9PT0gMSkge1xuICAgICAgLy9UaGlyZCBlYXN5IGNhc2U6IHJvb3RcbiAgICAgIC8vY29uc29sZS5sb2coXCJST09UXCIpXG4gICAgICByZXR1cm4gbmV3IFJlZEJsYWNrVHJlZSh0aGlzLnRyZWUuX2NvbXBhcmUsIG51bGwpXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vSGFyZCBjYXNlOiBSZXBhaW50IG4sIGFuZCB0aGVuIGRvIHNvbWUgbmFzdHkgc3R1ZmZcbiAgICAgIC8vY29uc29sZS5sb2coXCJCTEFDSyBsZWFmIG5vIGNoaWxkcmVuXCIpXG4gICAgICBmb3IodmFyIGk9MDsgaTxjc3RhY2subGVuZ3RoOyArK2kpIHtcbiAgICAgICAgY3N0YWNrW2ldLl9jb3VudC0tXG4gICAgICB9XG4gICAgICB2YXIgcGFyZW50ID0gY3N0YWNrW2NzdGFjay5sZW5ndGgtMl1cbiAgICAgIGZpeERvdWJsZUJsYWNrKGNzdGFjaylcbiAgICAgIC8vRml4IHVwIGxpbmtzXG4gICAgICBpZihwYXJlbnQubGVmdCA9PT0gbikge1xuICAgICAgICBwYXJlbnQubGVmdCA9IG51bGxcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcmVudC5yaWdodCA9IG51bGxcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIG5ldyBSZWRCbGFja1RyZWUodGhpcy50cmVlLl9jb21wYXJlLCBjc3RhY2tbMF0pXG59XG5cbi8vUmV0dXJucyBrZXlcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShpcHJvdG8sIFwia2V5XCIsIHtcbiAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICBpZih0aGlzLl9zdGFjay5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc3RhY2tbdGhpcy5fc3RhY2subGVuZ3RoLTFdLmtleVxuICAgIH1cbiAgICByZXR1cm5cbiAgfSxcbiAgZW51bWVyYWJsZTogdHJ1ZVxufSlcblxuLy9SZXR1cm5zIHZhbHVlXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoaXByb3RvLCBcInZhbHVlXCIsIHtcbiAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICBpZih0aGlzLl9zdGFjay5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc3RhY2tbdGhpcy5fc3RhY2subGVuZ3RoLTFdLnZhbHVlXG4gICAgfVxuICAgIHJldHVyblxuICB9LFxuICBlbnVtZXJhYmxlOiB0cnVlXG59KVxuXG5cbi8vUmV0dXJucyB0aGUgcG9zaXRpb24gb2YgdGhpcyBpdGVyYXRvciBpbiB0aGUgc29ydGVkIGxpc3Rcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShpcHJvdG8sIFwiaW5kZXhcIiwge1xuICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBpZHggPSAwXG4gICAgdmFyIHN0YWNrID0gdGhpcy5fc3RhY2tcbiAgICBpZihzdGFjay5sZW5ndGggPT09IDApIHtcbiAgICAgIHZhciByID0gdGhpcy50cmVlLnJvb3RcbiAgICAgIGlmKHIpIHtcbiAgICAgICAgcmV0dXJuIHIuX2NvdW50XG4gICAgICB9XG4gICAgICByZXR1cm4gMFxuICAgIH0gZWxzZSBpZihzdGFja1tzdGFjay5sZW5ndGgtMV0ubGVmdCkge1xuICAgICAgaWR4ID0gc3RhY2tbc3RhY2subGVuZ3RoLTFdLmxlZnQuX2NvdW50XG4gICAgfVxuICAgIGZvcih2YXIgcz1zdGFjay5sZW5ndGgtMjsgcz49MDsgLS1zKSB7XG4gICAgICBpZihzdGFja1tzKzFdID09PSBzdGFja1tzXS5yaWdodCkge1xuICAgICAgICArK2lkeFxuICAgICAgICBpZihzdGFja1tzXS5sZWZ0KSB7XG4gICAgICAgICAgaWR4ICs9IHN0YWNrW3NdLmxlZnQuX2NvdW50XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGlkeFxuICB9LFxuICBlbnVtZXJhYmxlOiB0cnVlXG59KVxuXG4vL0FkdmFuY2VzIGl0ZXJhdG9yIHRvIG5leHQgZWxlbWVudCBpbiBsaXN0XG5pcHJvdG8ubmV4dCA9IGZ1bmN0aW9uKCkge1xuICB2YXIgc3RhY2sgPSB0aGlzLl9zdGFja1xuICBpZihzdGFjay5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm5cbiAgfVxuICB2YXIgbiA9IHN0YWNrW3N0YWNrLmxlbmd0aC0xXVxuICBpZihuLnJpZ2h0KSB7XG4gICAgbiA9IG4ucmlnaHRcbiAgICB3aGlsZShuKSB7XG4gICAgICBzdGFjay5wdXNoKG4pXG4gICAgICBuID0gbi5sZWZ0XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHN0YWNrLnBvcCgpXG4gICAgd2hpbGUoc3RhY2subGVuZ3RoID4gMCAmJiBzdGFja1tzdGFjay5sZW5ndGgtMV0ucmlnaHQgPT09IG4pIHtcbiAgICAgIG4gPSBzdGFja1tzdGFjay5sZW5ndGgtMV1cbiAgICAgIHN0YWNrLnBvcCgpXG4gICAgfVxuICB9XG59XG5cbi8vQ2hlY2tzIGlmIGl0ZXJhdG9yIGlzIGF0IGVuZCBvZiB0cmVlXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoaXByb3RvLCBcImhhc05leHRcIiwge1xuICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBzdGFjayA9IHRoaXMuX3N0YWNrXG4gICAgaWYoc3RhY2subGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gICAgaWYoc3RhY2tbc3RhY2subGVuZ3RoLTFdLnJpZ2h0KSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgICBmb3IodmFyIHM9c3RhY2subGVuZ3RoLTE7IHM+MDsgLS1zKSB7XG4gICAgICBpZihzdGFja1tzLTFdLmxlZnQgPT09IHN0YWNrW3NdKSB7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9XG59KVxuXG4vL1VwZGF0ZSB2YWx1ZVxuaXByb3RvLnVwZGF0ZSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHZhciBzdGFjayA9IHRoaXMuX3N0YWNrXG4gIGlmKHN0YWNrLmxlbmd0aCA9PT0gMCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNhbid0IHVwZGF0ZSBlbXB0eSBub2RlIVwiKVxuICB9XG4gIHZhciBjc3RhY2sgPSBuZXcgQXJyYXkoc3RhY2subGVuZ3RoKVxuICB2YXIgbiA9IHN0YWNrW3N0YWNrLmxlbmd0aC0xXVxuICBjc3RhY2tbY3N0YWNrLmxlbmd0aC0xXSA9IG5ldyBSQk5vZGUobi5fY29sb3IsIG4ua2V5LCB2YWx1ZSwgbi5sZWZ0LCBuLnJpZ2h0LCBuLl9jb3VudClcbiAgZm9yKHZhciBpPXN0YWNrLmxlbmd0aC0yOyBpPj0wOyAtLWkpIHtcbiAgICBuID0gc3RhY2tbaV1cbiAgICBpZihuLmxlZnQgPT09IHN0YWNrW2krMV0pIHtcbiAgICAgIGNzdGFja1tpXSA9IG5ldyBSQk5vZGUobi5fY29sb3IsIG4ua2V5LCBuLnZhbHVlLCBjc3RhY2tbaSsxXSwgbi5yaWdodCwgbi5fY291bnQpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNzdGFja1tpXSA9IG5ldyBSQk5vZGUobi5fY29sb3IsIG4ua2V5LCBuLnZhbHVlLCBuLmxlZnQsIGNzdGFja1tpKzFdLCBuLl9jb3VudClcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG5ldyBSZWRCbGFja1RyZWUodGhpcy50cmVlLl9jb21wYXJlLCBjc3RhY2tbMF0pXG59XG5cbi8vTW92ZXMgaXRlcmF0b3IgYmFja3dhcmQgb25lIGVsZW1lbnRcbmlwcm90by5wcmV2ID0gZnVuY3Rpb24oKSB7XG4gIHZhciBzdGFjayA9IHRoaXMuX3N0YWNrXG4gIGlmKHN0YWNrLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVyblxuICB9XG4gIHZhciBuID0gc3RhY2tbc3RhY2subGVuZ3RoLTFdXG4gIGlmKG4ubGVmdCkge1xuICAgIG4gPSBuLmxlZnRcbiAgICB3aGlsZShuKSB7XG4gICAgICBzdGFjay5wdXNoKG4pXG4gICAgICBuID0gbi5yaWdodFxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBzdGFjay5wb3AoKVxuICAgIHdoaWxlKHN0YWNrLmxlbmd0aCA+IDAgJiYgc3RhY2tbc3RhY2subGVuZ3RoLTFdLmxlZnQgPT09IG4pIHtcbiAgICAgIG4gPSBzdGFja1tzdGFjay5sZW5ndGgtMV1cbiAgICAgIHN0YWNrLnBvcCgpXG4gICAgfVxuICB9XG59XG5cbi8vQ2hlY2tzIGlmIGl0ZXJhdG9yIGlzIGF0IHN0YXJ0IG9mIHRyZWVcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShpcHJvdG8sIFwiaGFzUHJldlwiLCB7XG4gIGdldDogZnVuY3Rpb24oKSB7XG4gICAgdmFyIHN0YWNrID0gdGhpcy5fc3RhY2tcbiAgICBpZihzdGFjay5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgICBpZihzdGFja1tzdGFjay5sZW5ndGgtMV0ubGVmdCkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gICAgZm9yKHZhciBzPXN0YWNrLmxlbmd0aC0xOyBzPjA7IC0tcykge1xuICAgICAgaWYoc3RhY2tbcy0xXS5yaWdodCA9PT0gc3RhY2tbc10pIHtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn0pXG5cbi8vRGVmYXVsdCBjb21wYXJpc29uIGZ1bmN0aW9uXG5mdW5jdGlvbiBkZWZhdWx0Q29tcGFyZShhLCBiKSB7XG4gIGlmKGEgPCBiKSB7XG4gICAgcmV0dXJuIC0xXG4gIH1cbiAgaWYoYSA+IGIpIHtcbiAgICByZXR1cm4gMVxuICB9XG4gIHJldHVybiAwXG59XG5cbi8vQnVpbGQgYSB0cmVlXG5mdW5jdGlvbiBjcmVhdGVSQlRyZWUoY29tcGFyZSkge1xuICByZXR1cm4gbmV3IFJlZEJsYWNrVHJlZShjb21wYXJlIHx8IGRlZmF1bHRDb21wYXJlLCBudWxsKVxufSIsImV4cG9ydHMucmVhZCA9IGZ1bmN0aW9uIChidWZmZXIsIG9mZnNldCwgaXNMRSwgbUxlbiwgbkJ5dGVzKSB7XG4gIHZhciBlLCBtXG4gIHZhciBlTGVuID0gKG5CeXRlcyAqIDgpIC0gbUxlbiAtIDFcbiAgdmFyIGVNYXggPSAoMSA8PCBlTGVuKSAtIDFcbiAgdmFyIGVCaWFzID0gZU1heCA+PiAxXG4gIHZhciBuQml0cyA9IC03XG4gIHZhciBpID0gaXNMRSA/IChuQnl0ZXMgLSAxKSA6IDBcbiAgdmFyIGQgPSBpc0xFID8gLTEgOiAxXG4gIHZhciBzID0gYnVmZmVyW29mZnNldCArIGldXG5cbiAgaSArPSBkXG5cbiAgZSA9IHMgJiAoKDEgPDwgKC1uQml0cykpIC0gMSlcbiAgcyA+Pj0gKC1uQml0cylcbiAgbkJpdHMgKz0gZUxlblxuICBmb3IgKDsgbkJpdHMgPiAwOyBlID0gKGUgKiAyNTYpICsgYnVmZmVyW29mZnNldCArIGldLCBpICs9IGQsIG5CaXRzIC09IDgpIHt9XG5cbiAgbSA9IGUgJiAoKDEgPDwgKC1uQml0cykpIC0gMSlcbiAgZSA+Pj0gKC1uQml0cylcbiAgbkJpdHMgKz0gbUxlblxuICBmb3IgKDsgbkJpdHMgPiAwOyBtID0gKG0gKiAyNTYpICsgYnVmZmVyW29mZnNldCArIGldLCBpICs9IGQsIG5CaXRzIC09IDgpIHt9XG5cbiAgaWYgKGUgPT09IDApIHtcbiAgICBlID0gMSAtIGVCaWFzXG4gIH0gZWxzZSBpZiAoZSA9PT0gZU1heCkge1xuICAgIHJldHVybiBtID8gTmFOIDogKChzID8gLTEgOiAxKSAqIEluZmluaXR5KVxuICB9IGVsc2Uge1xuICAgIG0gPSBtICsgTWF0aC5wb3coMiwgbUxlbilcbiAgICBlID0gZSAtIGVCaWFzXG4gIH1cbiAgcmV0dXJuIChzID8gLTEgOiAxKSAqIG0gKiBNYXRoLnBvdygyLCBlIC0gbUxlbilcbn1cblxuZXhwb3J0cy53cml0ZSA9IGZ1bmN0aW9uIChidWZmZXIsIHZhbHVlLCBvZmZzZXQsIGlzTEUsIG1MZW4sIG5CeXRlcykge1xuICB2YXIgZSwgbSwgY1xuICB2YXIgZUxlbiA9IChuQnl0ZXMgKiA4KSAtIG1MZW4gLSAxXG4gIHZhciBlTWF4ID0gKDEgPDwgZUxlbikgLSAxXG4gIHZhciBlQmlhcyA9IGVNYXggPj4gMVxuICB2YXIgcnQgPSAobUxlbiA9PT0gMjMgPyBNYXRoLnBvdygyLCAtMjQpIC0gTWF0aC5wb3coMiwgLTc3KSA6IDApXG4gIHZhciBpID0gaXNMRSA/IDAgOiAobkJ5dGVzIC0gMSlcbiAgdmFyIGQgPSBpc0xFID8gMSA6IC0xXG4gIHZhciBzID0gdmFsdWUgPCAwIHx8ICh2YWx1ZSA9PT0gMCAmJiAxIC8gdmFsdWUgPCAwKSA/IDEgOiAwXG5cbiAgdmFsdWUgPSBNYXRoLmFicyh2YWx1ZSlcblxuICBpZiAoaXNOYU4odmFsdWUpIHx8IHZhbHVlID09PSBJbmZpbml0eSkge1xuICAgIG0gPSBpc05hTih2YWx1ZSkgPyAxIDogMFxuICAgIGUgPSBlTWF4XG4gIH0gZWxzZSB7XG4gICAgZSA9IE1hdGguZmxvb3IoTWF0aC5sb2codmFsdWUpIC8gTWF0aC5MTjIpXG4gICAgaWYgKHZhbHVlICogKGMgPSBNYXRoLnBvdygyLCAtZSkpIDwgMSkge1xuICAgICAgZS0tXG4gICAgICBjICo9IDJcbiAgICB9XG4gICAgaWYgKGUgKyBlQmlhcyA+PSAxKSB7XG4gICAgICB2YWx1ZSArPSBydCAvIGNcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsdWUgKz0gcnQgKiBNYXRoLnBvdygyLCAxIC0gZUJpYXMpXG4gICAgfVxuICAgIGlmICh2YWx1ZSAqIGMgPj0gMikge1xuICAgICAgZSsrXG4gICAgICBjIC89IDJcbiAgICB9XG5cbiAgICBpZiAoZSArIGVCaWFzID49IGVNYXgpIHtcbiAgICAgIG0gPSAwXG4gICAgICBlID0gZU1heFxuICAgIH0gZWxzZSBpZiAoZSArIGVCaWFzID49IDEpIHtcbiAgICAgIG0gPSAoKHZhbHVlICogYykgLSAxKSAqIE1hdGgucG93KDIsIG1MZW4pXG4gICAgICBlID0gZSArIGVCaWFzXG4gICAgfSBlbHNlIHtcbiAgICAgIG0gPSB2YWx1ZSAqIE1hdGgucG93KDIsIGVCaWFzIC0gMSkgKiBNYXRoLnBvdygyLCBtTGVuKVxuICAgICAgZSA9IDBcbiAgICB9XG4gIH1cblxuICBmb3IgKDsgbUxlbiA+PSA4OyBidWZmZXJbb2Zmc2V0ICsgaV0gPSBtICYgMHhmZiwgaSArPSBkLCBtIC89IDI1NiwgbUxlbiAtPSA4KSB7fVxuXG4gIGUgPSAoZSA8PCBtTGVuKSB8IG1cbiAgZUxlbiArPSBtTGVuXG4gIGZvciAoOyBlTGVuID4gMDsgYnVmZmVyW29mZnNldCArIGldID0gZSAmIDB4ZmYsIGkgKz0gZCwgZSAvPSAyNTYsIGVMZW4gLT0gOCkge31cblxuICBidWZmZXJbb2Zmc2V0ICsgaSAtIGRdIHw9IHMgKiAxMjhcbn1cbiIsIid1c2Ugc3RyaWN0JztcbnZhciB0eXBlcyA9IFtcbiAgcmVxdWlyZSgnLi9uZXh0VGljaycpLFxuICByZXF1aXJlKCcuL211dGF0aW9uLmpzJyksXG4gIHJlcXVpcmUoJy4vbWVzc2FnZUNoYW5uZWwnKSxcbiAgcmVxdWlyZSgnLi9zdGF0ZUNoYW5nZScpLFxuICByZXF1aXJlKCcuL3RpbWVvdXQnKVxuXTtcbnZhciBkcmFpbmluZztcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xudmFyIHF1ZXVlID0gW107XG52YXIgc2NoZWR1bGVkID0gZmFsc2U7XG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgIHJldHVybjtcbiAgfVxuICBkcmFpbmluZyA9IGZhbHNlO1xuICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gIH0gZWxzZSB7XG4gICAgcXVldWVJbmRleCA9IC0xO1xuICB9XG4gIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICBuZXh0VGljaygpO1xuICB9XG59XG5cbi8vbmFtZWQgbmV4dFRpY2sgZm9yIGxlc3MgY29uZnVzaW5nIHN0YWNrIHRyYWNlc1xuZnVuY3Rpb24gbmV4dFRpY2soKSB7XG4gIGlmIChkcmFpbmluZykge1xuICAgIHJldHVybjtcbiAgfVxuICBzY2hlZHVsZWQgPSBmYWxzZTtcbiAgZHJhaW5pbmcgPSB0cnVlO1xuICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICB2YXIgdGltZW91dCA9IHNldFRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgd2hpbGUgKGxlbikge1xuICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgIHF1ZXVlID0gW107XG4gICAgd2hpbGUgKGN1cnJlbnRRdWV1ZSAmJiArK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICB9XG4gICAgcXVldWVJbmRleCA9IC0xO1xuICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgfVxuICBjdXJyZW50UXVldWUgPSBudWxsO1xuICBxdWV1ZUluZGV4ID0gLTE7XG4gIGRyYWluaW5nID0gZmFsc2U7XG4gIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cbnZhciBzY2hlZHVsZURyYWluO1xudmFyIGkgPSAtMTtcbnZhciBsZW4gPSB0eXBlcy5sZW5ndGg7XG53aGlsZSAoKytpIDwgbGVuKSB7XG4gIGlmICh0eXBlc1tpXSAmJiB0eXBlc1tpXS50ZXN0ICYmIHR5cGVzW2ldLnRlc3QoKSkge1xuICAgIHNjaGVkdWxlRHJhaW4gPSB0eXBlc1tpXS5pbnN0YWxsKG5leHRUaWNrKTtcbiAgICBicmVhaztcbiAgfVxufVxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gIHRoaXMuZnVuID0gZnVuO1xuICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBmdW4gPSB0aGlzLmZ1bjtcbiAgdmFyIGFycmF5ID0gdGhpcy5hcnJheTtcbiAgc3dpdGNoIChhcnJheS5sZW5ndGgpIHtcbiAgY2FzZSAwOlxuICAgIHJldHVybiBmdW4oKTtcbiAgY2FzZSAxOlxuICAgIHJldHVybiBmdW4oYXJyYXlbMF0pO1xuICBjYXNlIDI6XG4gICAgcmV0dXJuIGZ1bihhcnJheVswXSwgYXJyYXlbMV0pO1xuICBjYXNlIDM6XG4gICAgcmV0dXJuIGZ1bihhcnJheVswXSwgYXJyYXlbMV0sIGFycmF5WzJdKTtcbiAgZGVmYXVsdDpcbiAgICByZXR1cm4gZnVuLmFwcGx5KG51bGwsIGFycmF5KTtcbiAgfVxuXG59O1xubW9kdWxlLmV4cG9ydHMgPSBpbW1lZGlhdGU7XG5mdW5jdGlvbiBpbW1lZGlhdGUodGFzaykge1xuICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICB9XG4gIH1cbiAgcXVldWUucHVzaChuZXcgSXRlbSh0YXNrLCBhcmdzKSk7XG4gIGlmICghc2NoZWR1bGVkICYmICFkcmFpbmluZykge1xuICAgIHNjaGVkdWxlZCA9IHRydWU7XG4gICAgc2NoZWR1bGVEcmFpbigpO1xuICB9XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMudGVzdCA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKGdsb2JhbC5zZXRJbW1lZGlhdGUpIHtcbiAgICAvLyB3ZSBjYW4gb25seSBnZXQgaGVyZSBpbiBJRTEwXG4gICAgLy8gd2hpY2ggZG9lc24ndCBoYW5kZWwgcG9zdE1lc3NhZ2Ugd2VsbFxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gdHlwZW9mIGdsb2JhbC5NZXNzYWdlQ2hhbm5lbCAhPT0gJ3VuZGVmaW5lZCc7XG59O1xuXG5leHBvcnRzLmluc3RhbGwgPSBmdW5jdGlvbiAoZnVuYykge1xuICB2YXIgY2hhbm5lbCA9IG5ldyBnbG9iYWwuTWVzc2FnZUNoYW5uZWwoKTtcbiAgY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSBmdW5jO1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGNoYW5uZWwucG9ydDIucG9zdE1lc3NhZ2UoMCk7XG4gIH07XG59OyIsIid1c2Ugc3RyaWN0Jztcbi8vYmFzZWQgb2ZmIHJzdnAgaHR0cHM6Ly9naXRodWIuY29tL3RpbGRlaW8vcnN2cC5qc1xuLy9saWNlbnNlIGh0dHBzOi8vZ2l0aHViLmNvbS90aWxkZWlvL3JzdnAuanMvYmxvYi9tYXN0ZXIvTElDRU5TRVxuLy9odHRwczovL2dpdGh1Yi5jb20vdGlsZGVpby9yc3ZwLmpzL2Jsb2IvbWFzdGVyL2xpYi9yc3ZwL2FzYXAuanNcblxudmFyIE11dGF0aW9uID0gZ2xvYmFsLk11dGF0aW9uT2JzZXJ2ZXIgfHwgZ2xvYmFsLldlYktpdE11dGF0aW9uT2JzZXJ2ZXI7XG5cbmV4cG9ydHMudGVzdCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE11dGF0aW9uO1xufTtcblxuZXhwb3J0cy5pbnN0YWxsID0gZnVuY3Rpb24gKGhhbmRsZSkge1xuICB2YXIgY2FsbGVkID0gMDtcbiAgdmFyIG9ic2VydmVyID0gbmV3IE11dGF0aW9uKGhhbmRsZSk7XG4gIHZhciBlbGVtZW50ID0gZ2xvYmFsLmRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKTtcbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50LCB7XG4gICAgY2hhcmFjdGVyRGF0YTogdHJ1ZVxuICB9KTtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBlbGVtZW50LmRhdGEgPSAoY2FsbGVkID0gKytjYWxsZWQgJSAyKTtcbiAgfTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xuZXhwb3J0cy50ZXN0ID0gZnVuY3Rpb24gKCkge1xuICAvLyBEb24ndCBnZXQgZm9vbGVkIGJ5IGUuZy4gYnJvd3NlcmlmeSBlbnZpcm9ubWVudHMuXG4gIHJldHVybiAodHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnKSAmJiAhcHJvY2Vzcy5icm93c2VyO1xufTtcblxuZXhwb3J0cy5pbnN0YWxsID0gZnVuY3Rpb24gKGZ1bmMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBwcm9jZXNzLm5leHRUaWNrKGZ1bmMpO1xuICB9O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy50ZXN0ID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gJ2RvY3VtZW50JyBpbiBnbG9iYWwgJiYgJ29ucmVhZHlzdGF0ZWNoYW5nZScgaW4gZ2xvYmFsLmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xufTtcblxuZXhwb3J0cy5pbnN0YWxsID0gZnVuY3Rpb24gKGhhbmRsZSkge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuXG4gICAgLy8gQ3JlYXRlIGEgPHNjcmlwdD4gZWxlbWVudDsgaXRzIHJlYWR5c3RhdGVjaGFuZ2UgZXZlbnQgd2lsbCBiZSBmaXJlZCBhc3luY2hyb25vdXNseSBvbmNlIGl0IGlzIGluc2VydGVkXG4gICAgLy8gaW50byB0aGUgZG9jdW1lbnQuIERvIHNvLCB0aHVzIHF1ZXVpbmcgdXAgdGhlIHRhc2suIFJlbWVtYmVyIHRvIGNsZWFuIHVwIG9uY2UgaXQncyBiZWVuIGNhbGxlZC5cbiAgICB2YXIgc2NyaXB0RWwgPSBnbG9iYWwuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgc2NyaXB0RWwub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgaGFuZGxlKCk7XG5cbiAgICAgIHNjcmlwdEVsLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IG51bGw7XG4gICAgICBzY3JpcHRFbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHNjcmlwdEVsKTtcbiAgICAgIHNjcmlwdEVsID0gbnVsbDtcbiAgICB9O1xuICAgIGdsb2JhbC5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoc2NyaXB0RWwpO1xuXG4gICAgcmV0dXJuIGhhbmRsZTtcbiAgfTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xuZXhwb3J0cy50ZXN0ID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdHJ1ZTtcbn07XG5cbmV4cG9ydHMuaW5zdGFsbCA9IGZ1bmN0aW9uICh0KSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgc2V0VGltZW91dCh0LCAwKTtcbiAgfTtcbn07IiwiaWYgKHR5cGVvZiBPYmplY3QuY3JlYXRlID09PSAnZnVuY3Rpb24nKSB7XG4gIC8vIGltcGxlbWVudGF0aW9uIGZyb20gc3RhbmRhcmQgbm9kZS5qcyAndXRpbCcgbW9kdWxlXG4gIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaW5oZXJpdHMoY3Rvciwgc3VwZXJDdG9yKSB7XG4gICAgY3Rvci5zdXBlcl8gPSBzdXBlckN0b3JcbiAgICBjdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDdG9yLnByb3RvdHlwZSwge1xuICAgICAgY29uc3RydWN0b3I6IHtcbiAgICAgICAgdmFsdWU6IGN0b3IsXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICB9XG4gICAgfSk7XG4gIH07XG59IGVsc2Uge1xuICAvLyBvbGQgc2Nob29sIHNoaW0gZm9yIG9sZCBicm93c2Vyc1xuICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGluaGVyaXRzKGN0b3IsIHN1cGVyQ3Rvcikge1xuICAgIGN0b3Iuc3VwZXJfID0gc3VwZXJDdG9yXG4gICAgdmFyIFRlbXBDdG9yID0gZnVuY3Rpb24gKCkge31cbiAgICBUZW1wQ3Rvci5wcm90b3R5cGUgPSBzdXBlckN0b3IucHJvdG90eXBlXG4gICAgY3Rvci5wcm90b3R5cGUgPSBuZXcgVGVtcEN0b3IoKVxuICAgIGN0b3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gY3RvclxuICB9XG59XG4iLCJcbmV4cG9ydHMuY29tcGFyZSA9IGZ1bmN0aW9uIChhLCBiKSB7XG5cbiAgaWYoQnVmZmVyLmlzQnVmZmVyKGEpKSB7XG4gICAgdmFyIGwgPSBNYXRoLm1pbihhLmxlbmd0aCwgYi5sZW5ndGgpXG4gICAgZm9yKHZhciBpID0gMDsgaSA8IGw7IGkrKykge1xuICAgICAgdmFyIGNtcCA9IGFbaV0gLSBiW2ldXG4gICAgICBpZihjbXApIHJldHVybiBjbXBcbiAgICB9XG4gICAgcmV0dXJuIGEubGVuZ3RoIC0gYi5sZW5ndGhcbiAgfVxuXG4gIHJldHVybiBhIDwgYiA/IC0xIDogYSA+IGIgPyAxIDogMFxufVxuXG4vLyB0byBiZSBjb21wYXRpYmxlIHdpdGggdGhlIGN1cnJlbnQgYWJzdHJhY3QtbGV2ZWxkb3duIHRlc3RzXG4vLyBudWxsaXNoIG9yIGVtcHR5IHN0cmluZ3MuXG4vLyBJIGNvdWxkIHVzZSAhIXZhbCBidXQgSSB3YW50IHRvIHBlcm1pdCBudW1iZXJzIGFuZCBib29sZWFucyxcbi8vIGlmIHBvc3NpYmxlLlxuXG5mdW5jdGlvbiBpc0RlZiAodmFsKSB7XG4gIHJldHVybiB2YWwgIT09IHVuZGVmaW5lZCAmJiB2YWwgIT09ICcnXG59XG5cbmZ1bmN0aW9uIGhhcyAocmFuZ2UsIG5hbWUpIHtcbiAgcmV0dXJuIE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKHJhbmdlLCBuYW1lKVxufVxuXG5mdW5jdGlvbiBoYXNLZXkocmFuZ2UsIG5hbWUpIHtcbiAgcmV0dXJuIE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKHJhbmdlLCBuYW1lKSAmJiBuYW1lXG59XG5cbnZhciBsb3dlckJvdW5kS2V5ID0gZXhwb3J0cy5sb3dlckJvdW5kS2V5ID0gZnVuY3Rpb24gKHJhbmdlKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICBoYXNLZXkocmFuZ2UsICdndCcpXG4gICAgfHwgaGFzS2V5KHJhbmdlLCAnZ3RlJylcbiAgICB8fCBoYXNLZXkocmFuZ2UsICdtaW4nKVxuICAgIHx8IChyYW5nZS5yZXZlcnNlID8gaGFzS2V5KHJhbmdlLCAnZW5kJykgOiBoYXNLZXkocmFuZ2UsICdzdGFydCcpKVxuICAgIHx8IHVuZGVmaW5lZFxuICAgIClcbn1cblxudmFyIGxvd2VyQm91bmQgPSBleHBvcnRzLmxvd2VyQm91bmQgPSBmdW5jdGlvbiAocmFuZ2UsIGRlZikge1xuICB2YXIgayA9IGxvd2VyQm91bmRLZXkocmFuZ2UpXG4gIHJldHVybiBrID8gcmFuZ2Vba10gOiBkZWZcbn1cblxudmFyIGxvd2VyQm91bmRJbmNsdXNpdmUgPSBleHBvcnRzLmxvd2VyQm91bmRJbmNsdXNpdmUgPSBmdW5jdGlvbiAocmFuZ2UpIHtcbiAgcmV0dXJuIGhhcyhyYW5nZSwgJ2d0JykgPyBmYWxzZSA6IHRydWVcbn1cblxudmFyIHVwcGVyQm91bmRJbmNsdXNpdmUgPSBleHBvcnRzLnVwcGVyQm91bmRJbmNsdXNpdmUgPVxuICBmdW5jdGlvbiAocmFuZ2UpIHtcbiAgICByZXR1cm4gKGhhcyhyYW5nZSwgJ2x0JykgLyomJiAhcmFuZ2UubWF4RXgqLykgPyBmYWxzZSA6IHRydWVcbiAgfVxuXG52YXIgbG93ZXJCb3VuZEV4Y2x1c2l2ZSA9IGV4cG9ydHMubG93ZXJCb3VuZEV4Y2x1c2l2ZSA9XG4gIGZ1bmN0aW9uIChyYW5nZSkge1xuICAgIHJldHVybiAhbG93ZXJCb3VuZEluY2x1c2l2ZShyYW5nZSlcbiAgfVxuXG52YXIgdXBwZXJCb3VuZEV4Y2x1c2l2ZSA9IGV4cG9ydHMudXBwZXJCb3VuZEV4Y2x1c2l2ZSA9XG4gIGZ1bmN0aW9uIChyYW5nZSkge1xuICAgIHJldHVybiAhdXBwZXJCb3VuZEluY2x1c2l2ZShyYW5nZSlcbiAgfVxuXG52YXIgdXBwZXJCb3VuZEtleSA9IGV4cG9ydHMudXBwZXJCb3VuZEtleSA9IGZ1bmN0aW9uIChyYW5nZSkge1xuICAgIHJldHVybiAoXG4gICAgICAgaGFzS2V5KHJhbmdlLCAnbHQnKVxuICAgIHx8IGhhc0tleShyYW5nZSwgJ2x0ZScpXG4gICAgfHwgaGFzS2V5KHJhbmdlLCAnbWF4JylcbiAgICB8fCAocmFuZ2UucmV2ZXJzZSA/IGhhc0tleShyYW5nZSwgJ3N0YXJ0JykgOiBoYXNLZXkocmFuZ2UsICdlbmQnKSlcbiAgICB8fCB1bmRlZmluZWRcbiAgICApXG59XG5cbnZhciB1cHBlckJvdW5kID0gZXhwb3J0cy51cHBlckJvdW5kID0gZnVuY3Rpb24gKHJhbmdlLCBkZWYpIHtcbiAgdmFyIGsgPSB1cHBlckJvdW5kS2V5KHJhbmdlKVxuICByZXR1cm4gayA/IHJhbmdlW2tdIDogZGVmXG59XG5cbmV4cG9ydHMuc3RhcnQgPSBmdW5jdGlvbiAocmFuZ2UsIGRlZikge1xuICByZXR1cm4gcmFuZ2UucmV2ZXJzZSA/IHVwcGVyQm91bmQocmFuZ2UsIGRlZikgOiBsb3dlckJvdW5kKHJhbmdlLCBkZWYpXG59XG5leHBvcnRzLmVuZCA9IGZ1bmN0aW9uIChyYW5nZSwgZGVmKSB7XG4gIHJldHVybiByYW5nZS5yZXZlcnNlID8gbG93ZXJCb3VuZChyYW5nZSwgZGVmKSA6IHVwcGVyQm91bmQocmFuZ2UsIGRlZilcbn1cbmV4cG9ydHMuc3RhcnRJbmNsdXNpdmUgPSBmdW5jdGlvbiAocmFuZ2UpIHtcbiAgcmV0dXJuIChcbiAgICByYW5nZS5yZXZlcnNlXG4gID8gdXBwZXJCb3VuZEluY2x1c2l2ZShyYW5nZSlcbiAgOiBsb3dlckJvdW5kSW5jbHVzaXZlKHJhbmdlKVxuICApXG59XG5leHBvcnRzLmVuZEluY2x1c2l2ZSA9IGZ1bmN0aW9uIChyYW5nZSkge1xuICByZXR1cm4gKFxuICAgIHJhbmdlLnJldmVyc2VcbiAgPyBsb3dlckJvdW5kSW5jbHVzaXZlKHJhbmdlKVxuICA6IHVwcGVyQm91bmRJbmNsdXNpdmUocmFuZ2UpXG4gIClcbn1cblxuZnVuY3Rpb24gaWQgKGUpIHsgcmV0dXJuIGUgfVxuXG5leHBvcnRzLnRvTHRndCA9IGZ1bmN0aW9uIChyYW5nZSwgX3JhbmdlLCBtYXAsIGxvd2VyLCB1cHBlcikge1xuICBfcmFuZ2UgPSBfcmFuZ2UgfHwge31cbiAgbWFwID0gbWFwIHx8IGlkXG4gIHZhciBkZWZhdWx0cyA9IGFyZ3VtZW50cy5sZW5ndGggPiAzXG4gIHZhciBsYiA9IGV4cG9ydHMubG93ZXJCb3VuZEtleShyYW5nZSlcbiAgdmFyIHViID0gZXhwb3J0cy51cHBlckJvdW5kS2V5KHJhbmdlKVxuICBpZihsYikge1xuICAgIGlmKGxiID09PSAnZ3QnKSBfcmFuZ2UuZ3QgPSBtYXAocmFuZ2UuZ3QsIGZhbHNlKVxuICAgIGVsc2UgICAgICAgICAgICBfcmFuZ2UuZ3RlID0gbWFwKHJhbmdlW2xiXSwgZmFsc2UpXG4gIH1cbiAgZWxzZSBpZihkZWZhdWx0cylcbiAgICBfcmFuZ2UuZ3RlID0gbWFwKGxvd2VyLCBmYWxzZSlcblxuICBpZih1Yikge1xuICAgIGlmKHViID09PSAnbHQnKSBfcmFuZ2UubHQgPSBtYXAocmFuZ2UubHQsIHRydWUpXG4gICAgZWxzZSAgICAgICAgICAgIF9yYW5nZS5sdGUgPSBtYXAocmFuZ2VbdWJdLCB0cnVlKVxuICB9XG4gIGVsc2UgaWYoZGVmYXVsdHMpXG4gICAgX3JhbmdlLmx0ZSA9IG1hcCh1cHBlciwgdHJ1ZSlcblxuICBpZihyYW5nZS5yZXZlcnNlICE9IG51bGwpXG4gICAgX3JhbmdlLnJldmVyc2UgPSAhIXJhbmdlLnJldmVyc2VcblxuICAvL2lmIHJhbmdlIHdhcyB1c2VkIG11dGFibHlcbiAgLy8oaW4gbGV2ZWwtc3VibGV2ZWwgaXQncyBwYXJ0IG9mIGFuIG9wdGlvbnMgb2JqZWN0XG4gIC8vdGhhdCBoYXMgbW9yZSBwcm9wZXJ0aWVzIG9uIGl0LilcbiAgaWYoaGFzKF9yYW5nZSwgJ21heCcpKSAgIGRlbGV0ZSBfcmFuZ2UubWF4XG4gIGlmKGhhcyhfcmFuZ2UsICdtaW4nKSkgICBkZWxldGUgX3JhbmdlLm1pblxuICBpZihoYXMoX3JhbmdlLCAnc3RhcnQnKSkgZGVsZXRlIF9yYW5nZS5zdGFydFxuICBpZihoYXMoX3JhbmdlLCAnZW5kJykpICAgZGVsZXRlIF9yYW5nZS5lbmRcblxuICByZXR1cm4gX3JhbmdlXG59XG5cbmV4cG9ydHMuY29udGFpbnMgPSBmdW5jdGlvbiAocmFuZ2UsIGtleSwgY29tcGFyZSkge1xuICBjb21wYXJlID0gY29tcGFyZSB8fCBleHBvcnRzLmNvbXBhcmVcblxuICB2YXIgbGIgPSBsb3dlckJvdW5kKHJhbmdlKVxuICBpZihpc0RlZihsYikpIHtcbiAgICB2YXIgY21wID0gY29tcGFyZShrZXksIGxiKVxuICAgIGlmKGNtcCA8IDAgfHwgKGNtcCA9PT0gMCAmJiBsb3dlckJvdW5kRXhjbHVzaXZlKHJhbmdlKSkpXG4gICAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIHZhciB1YiA9IHVwcGVyQm91bmQocmFuZ2UpXG4gIGlmKGlzRGVmKHViKSkge1xuICAgIHZhciBjbXAgPSBjb21wYXJlKGtleSwgdWIpXG4gICAgaWYoY21wID4gMCB8fCAoY21wID09PSAwKSAmJiB1cHBlckJvdW5kRXhjbHVzaXZlKHJhbmdlKSlcbiAgICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgcmV0dXJuIHRydWVcbn1cblxuZXhwb3J0cy5maWx0ZXIgPSBmdW5jdGlvbiAocmFuZ2UsIGNvbXBhcmUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gZXhwb3J0cy5jb250YWlucyhyYW5nZSwga2V5LCBjb21wYXJlKVxuICB9XG59XG5cblxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCdpbW1lZGlhdGUnKVxuIiwidmFyIGluaGVyaXRzID0gcmVxdWlyZSgnaW5oZXJpdHMnKVxudmFyIEFic3RyYWN0TGV2ZWxET1dOID0gcmVxdWlyZSgnYWJzdHJhY3QtbGV2ZWxkb3duJykuQWJzdHJhY3RMZXZlbERPV05cbnZhciBBYnN0cmFjdEl0ZXJhdG9yID0gcmVxdWlyZSgnYWJzdHJhY3QtbGV2ZWxkb3duJykuQWJzdHJhY3RJdGVyYXRvclxudmFyIGx0Z3QgPSByZXF1aXJlKCdsdGd0JylcbnZhciBjcmVhdGVSQlQgPSByZXF1aXJlKCdmdW5jdGlvbmFsLXJlZC1ibGFjay10cmVlJylcbnZhciBCdWZmZXIgPSByZXF1aXJlKCdzYWZlLWJ1ZmZlcicpLkJ1ZmZlclxuXG4vLyBJbiBOb2RlLCB1c2UgZ2xvYmFsLnNldEltbWVkaWF0ZS4gSW4gdGhlIGJyb3dzZXIsIHVzZSBhIGNvbnNpc3RlbnRcbi8vIG1pY3JvdGFzayBsaWJyYXJ5IHRvIGdpdmUgY29uc2lzdGVudCBtaWNyb3Rhc2sgZXhwZXJpZW5jZSB0byBhbGwgYnJvd3NlcnNcbnZhciBzZXRJbW1lZGlhdGUgPSByZXF1aXJlKCcuL2ltbWVkaWF0ZScpXG5cbmZ1bmN0aW9uIGd0ICh2YWx1ZSkge1xuICByZXR1cm4gbHRndC5jb21wYXJlKHZhbHVlLCB0aGlzLl91cHBlckJvdW5kKSA+IDBcbn1cblxuZnVuY3Rpb24gZ3RlICh2YWx1ZSkge1xuICByZXR1cm4gbHRndC5jb21wYXJlKHZhbHVlLCB0aGlzLl91cHBlckJvdW5kKSA+PSAwXG59XG5cbmZ1bmN0aW9uIGx0ICh2YWx1ZSkge1xuICByZXR1cm4gbHRndC5jb21wYXJlKHZhbHVlLCB0aGlzLl91cHBlckJvdW5kKSA8IDBcbn1cblxuZnVuY3Rpb24gbHRlICh2YWx1ZSkge1xuICByZXR1cm4gbHRndC5jb21wYXJlKHZhbHVlLCB0aGlzLl91cHBlckJvdW5kKSA8PSAwXG59XG5cbmZ1bmN0aW9uIE1lbUl0ZXJhdG9yIChkYiwgb3B0aW9ucykge1xuICBBYnN0cmFjdEl0ZXJhdG9yLmNhbGwodGhpcywgZGIpXG4gIHRoaXMuX2xpbWl0ID0gb3B0aW9ucy5saW1pdFxuXG4gIGlmICh0aGlzLl9saW1pdCA9PT0gLTEpIHRoaXMuX2xpbWl0ID0gSW5maW5pdHlcblxuICB2YXIgdHJlZSA9IGRiLl9zdG9yZVxuXG4gIHRoaXMua2V5QXNCdWZmZXIgPSBvcHRpb25zLmtleUFzQnVmZmVyICE9PSBmYWxzZVxuICB0aGlzLnZhbHVlQXNCdWZmZXIgPSBvcHRpb25zLnZhbHVlQXNCdWZmZXIgIT09IGZhbHNlXG4gIHRoaXMuX3JldmVyc2UgPSBvcHRpb25zLnJldmVyc2VcbiAgdGhpcy5fb3B0aW9ucyA9IG9wdGlvbnNcbiAgdGhpcy5fZG9uZSA9IDBcblxuICBpZiAoIXRoaXMuX3JldmVyc2UpIHtcbiAgICB0aGlzLl9pbmNyID0gJ25leHQnXG4gICAgdGhpcy5fbG93ZXJCb3VuZCA9IGx0Z3QubG93ZXJCb3VuZChvcHRpb25zKVxuICAgIHRoaXMuX3VwcGVyQm91bmQgPSBsdGd0LnVwcGVyQm91bmQob3B0aW9ucylcblxuICAgIGlmICh0eXBlb2YgdGhpcy5fbG93ZXJCb3VuZCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMuX3RyZWUgPSB0cmVlLmJlZ2luXG4gICAgfSBlbHNlIGlmIChsdGd0Lmxvd2VyQm91bmRJbmNsdXNpdmUob3B0aW9ucykpIHtcbiAgICAgIHRoaXMuX3RyZWUgPSB0cmVlLmdlKHRoaXMuX2xvd2VyQm91bmQpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3RyZWUgPSB0cmVlLmd0KHRoaXMuX2xvd2VyQm91bmQpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3VwcGVyQm91bmQpIHtcbiAgICAgIGlmIChsdGd0LnVwcGVyQm91bmRJbmNsdXNpdmUob3B0aW9ucykpIHtcbiAgICAgICAgdGhpcy5fdGVzdCA9IGx0ZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fdGVzdCA9IGx0XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHRoaXMuX2luY3IgPSAncHJldidcbiAgICB0aGlzLl9sb3dlckJvdW5kID0gbHRndC51cHBlckJvdW5kKG9wdGlvbnMpXG4gICAgdGhpcy5fdXBwZXJCb3VuZCA9IGx0Z3QubG93ZXJCb3VuZChvcHRpb25zKVxuXG4gICAgaWYgKHR5cGVvZiB0aGlzLl9sb3dlckJvdW5kID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5fdHJlZSA9IHRyZWUuZW5kXG4gICAgfSBlbHNlIGlmIChsdGd0LnVwcGVyQm91bmRJbmNsdXNpdmUob3B0aW9ucykpIHtcbiAgICAgIHRoaXMuX3RyZWUgPSB0cmVlLmxlKHRoaXMuX2xvd2VyQm91bmQpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3RyZWUgPSB0cmVlLmx0KHRoaXMuX2xvd2VyQm91bmQpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3VwcGVyQm91bmQpIHtcbiAgICAgIGlmIChsdGd0Lmxvd2VyQm91bmRJbmNsdXNpdmUob3B0aW9ucykpIHtcbiAgICAgICAgdGhpcy5fdGVzdCA9IGd0ZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fdGVzdCA9IGd0XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmluaGVyaXRzKE1lbUl0ZXJhdG9yLCBBYnN0cmFjdEl0ZXJhdG9yKVxuXG5NZW1JdGVyYXRvci5wcm90b3R5cGUuX25leHQgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgdmFyIGtleVxuICB2YXIgdmFsdWVcblxuICBpZiAodGhpcy5fZG9uZSsrID49IHRoaXMuX2xpbWl0KSByZXR1cm4gc2V0SW1tZWRpYXRlKGNhbGxiYWNrKVxuICBpZiAoIXRoaXMuX3RyZWUudmFsaWQpIHJldHVybiBzZXRJbW1lZGlhdGUoY2FsbGJhY2spXG5cbiAga2V5ID0gdGhpcy5fdHJlZS5rZXlcbiAgdmFsdWUgPSB0aGlzLl90cmVlLnZhbHVlXG5cbiAgaWYgKCF0aGlzLl90ZXN0KGtleSkpIHJldHVybiBzZXRJbW1lZGlhdGUoY2FsbGJhY2spXG5cbiAgaWYgKHRoaXMua2V5QXNCdWZmZXIgJiYgIUJ1ZmZlci5pc0J1ZmZlcihrZXkpKSB7XG4gICAga2V5ID0gQnVmZmVyLmZyb20oU3RyaW5nKGtleSkpXG4gIH1cblxuICBpZiAodGhpcy52YWx1ZUFzQnVmZmVyICYmICFCdWZmZXIuaXNCdWZmZXIodmFsdWUpKSB7XG4gICAgdmFsdWUgPSBCdWZmZXIuZnJvbShTdHJpbmcodmFsdWUpKVxuICB9XG5cbiAgdGhpcy5fdHJlZVt0aGlzLl9pbmNyXSgpXG5cbiAgc2V0SW1tZWRpYXRlKGZ1bmN0aW9uIGNhbGxOZXh0ICgpIHtcbiAgICBjYWxsYmFjayhudWxsLCBrZXksIHZhbHVlKVxuICB9KVxufVxuXG5NZW1JdGVyYXRvci5wcm90b3R5cGUuX3Rlc3QgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0cnVlXG59XG5cbmZ1bmN0aW9uIE1lbURPV04gKCkge1xuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgTWVtRE9XTikpIHJldHVybiBuZXcgTWVtRE9XTigpXG5cbiAgQWJzdHJhY3RMZXZlbERPV04uY2FsbCh0aGlzLCAnJylcblxuICB0aGlzLl9zdG9yZSA9IGNyZWF0ZVJCVChsdGd0LmNvbXBhcmUpXG59XG5cbmluaGVyaXRzKE1lbURPV04sIEFic3RyYWN0TGV2ZWxET1dOKVxuXG5NZW1ET1dOLnByb3RvdHlwZS5fb3BlbiA9IGZ1bmN0aW9uIChvcHRpb25zLCBjYWxsYmFjaykge1xuICB2YXIgc2VsZiA9IHRoaXNcbiAgc2V0SW1tZWRpYXRlKGZ1bmN0aW9uIGNhbGxOZXh0ICgpIHtcbiAgICBjYWxsYmFjayhudWxsLCBzZWxmKVxuICB9KVxufVxuXG5NZW1ET1dOLnByb3RvdHlwZS5fc2VyaWFsaXplS2V5ID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4ga2V5XG59XG5cbk1lbURPV04ucHJvdG90eXBlLl9zZXJpYWxpemVWYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPT0gbnVsbCA/ICcnIDogdmFsdWVcbn1cblxuTWVtRE9XTi5wcm90b3R5cGUuX3B1dCA9IGZ1bmN0aW9uIChrZXksIHZhbHVlLCBvcHRpb25zLCBjYWxsYmFjaykge1xuICB2YXIgaXRlciA9IHRoaXMuX3N0b3JlLmZpbmQoa2V5KVxuXG4gIGlmIChpdGVyLnZhbGlkKSB7XG4gICAgdGhpcy5fc3RvcmUgPSBpdGVyLnVwZGF0ZSh2YWx1ZSlcbiAgfSBlbHNlIHtcbiAgICB0aGlzLl9zdG9yZSA9IHRoaXMuX3N0b3JlLmluc2VydChrZXksIHZhbHVlKVxuICB9XG5cbiAgc2V0SW1tZWRpYXRlKGNhbGxiYWNrKVxufVxuXG5NZW1ET1dOLnByb3RvdHlwZS5fZ2V0ID0gZnVuY3Rpb24gKGtleSwgb3B0aW9ucywgY2FsbGJhY2spIHtcbiAgdmFyIHZhbHVlID0gdGhpcy5fc3RvcmUuZ2V0KGtleSlcblxuICBpZiAodHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJykge1xuICAgIC8vICdOb3RGb3VuZCcgZXJyb3IsIGNvbnNpc3RlbnQgd2l0aCBMZXZlbERPV04gQVBJXG4gICAgcmV0dXJuIHNldEltbWVkaWF0ZShmdW5jdGlvbiBjYWxsTmV4dCAoKSB7XG4gICAgICBjYWxsYmFjayhuZXcgRXJyb3IoJ05vdEZvdW5kJykpXG4gICAgfSlcbiAgfVxuXG4gIGlmIChvcHRpb25zLmFzQnVmZmVyICE9PSBmYWxzZSAmJiAhQnVmZmVyLmlzQnVmZmVyKHZhbHVlKSkge1xuICAgIHZhbHVlID0gQnVmZmVyLmZyb20oU3RyaW5nKHZhbHVlKSlcbiAgfVxuXG4gIHNldEltbWVkaWF0ZShmdW5jdGlvbiBjYWxsTmV4dCAoKSB7XG4gICAgY2FsbGJhY2sobnVsbCwgdmFsdWUpXG4gIH0pXG59XG5cbk1lbURPV04ucHJvdG90eXBlLl9kZWwgPSBmdW5jdGlvbiAoa2V5LCBvcHRpb25zLCBjYWxsYmFjaykge1xuICB0aGlzLl9zdG9yZSA9IHRoaXMuX3N0b3JlLnJlbW92ZShrZXkpXG4gIHNldEltbWVkaWF0ZShjYWxsYmFjaylcbn1cblxuTWVtRE9XTi5wcm90b3R5cGUuX2JhdGNoID0gZnVuY3Rpb24gKGFycmF5LCBvcHRpb25zLCBjYWxsYmFjaykge1xuICB2YXIgaSA9IC0xXG4gIHZhciBrZXlcbiAgdmFyIHZhbHVlXG4gIHZhciBpdGVyXG4gIHZhciBsZW4gPSBhcnJheS5sZW5ndGhcbiAgdmFyIHRyZWUgPSB0aGlzLl9zdG9yZVxuXG4gIHdoaWxlICgrK2kgPCBsZW4pIHtcbiAgICBrZXkgPSBhcnJheVtpXS5rZXlcbiAgICBpdGVyID0gdHJlZS5maW5kKGtleSlcblxuICAgIGlmIChhcnJheVtpXS50eXBlID09PSAncHV0Jykge1xuICAgICAgdmFsdWUgPSBhcnJheVtpXS52YWx1ZVxuICAgICAgdHJlZSA9IGl0ZXIudmFsaWQgPyBpdGVyLnVwZGF0ZSh2YWx1ZSkgOiB0cmVlLmluc2VydChrZXksIHZhbHVlKVxuICAgIH0gZWxzZSB7XG4gICAgICB0cmVlID0gaXRlci5yZW1vdmUoKVxuICAgIH1cbiAgfVxuXG4gIHRoaXMuX3N0b3JlID0gdHJlZVxuXG4gIHNldEltbWVkaWF0ZShjYWxsYmFjaylcbn1cblxuTWVtRE9XTi5wcm90b3R5cGUuX2l0ZXJhdG9yID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgcmV0dXJuIG5ldyBNZW1JdGVyYXRvcih0aGlzLCBvcHRpb25zKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE1lbURPV04uZGVmYXVsdCA9IE1lbURPV05cbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBub2RlL25vLWRlcHJlY2F0ZWQtYXBpICovXG52YXIgYnVmZmVyID0gcmVxdWlyZSgnYnVmZmVyJylcbnZhciBCdWZmZXIgPSBidWZmZXIuQnVmZmVyXG5cbi8vIGFsdGVybmF0aXZlIHRvIHVzaW5nIE9iamVjdC5rZXlzIGZvciBvbGQgYnJvd3NlcnNcbmZ1bmN0aW9uIGNvcHlQcm9wcyAoc3JjLCBkc3QpIHtcbiAgZm9yICh2YXIga2V5IGluIHNyYykge1xuICAgIGRzdFtrZXldID0gc3JjW2tleV1cbiAgfVxufVxuaWYgKEJ1ZmZlci5mcm9tICYmIEJ1ZmZlci5hbGxvYyAmJiBCdWZmZXIuYWxsb2NVbnNhZmUgJiYgQnVmZmVyLmFsbG9jVW5zYWZlU2xvdykge1xuICBtb2R1bGUuZXhwb3J0cyA9IGJ1ZmZlclxufSBlbHNlIHtcbiAgLy8gQ29weSBwcm9wZXJ0aWVzIGZyb20gcmVxdWlyZSgnYnVmZmVyJylcbiAgY29weVByb3BzKGJ1ZmZlciwgZXhwb3J0cylcbiAgZXhwb3J0cy5CdWZmZXIgPSBTYWZlQnVmZmVyXG59XG5cbmZ1bmN0aW9uIFNhZmVCdWZmZXIgKGFyZywgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBCdWZmZXIoYXJnLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpXG59XG5cbi8vIENvcHkgc3RhdGljIG1ldGhvZHMgZnJvbSBCdWZmZXJcbmNvcHlQcm9wcyhCdWZmZXIsIFNhZmVCdWZmZXIpXG5cblNhZmVCdWZmZXIuZnJvbSA9IGZ1bmN0aW9uIChhcmcsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aCkge1xuICBpZiAodHlwZW9mIGFyZyA9PT0gJ251bWJlcicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudCBtdXN0IG5vdCBiZSBhIG51bWJlcicpXG4gIH1cbiAgcmV0dXJuIEJ1ZmZlcihhcmcsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aClcbn1cblxuU2FmZUJ1ZmZlci5hbGxvYyA9IGZ1bmN0aW9uIChzaXplLCBmaWxsLCBlbmNvZGluZykge1xuICBpZiAodHlwZW9mIHNpemUgIT09ICdudW1iZXInKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnQgbXVzdCBiZSBhIG51bWJlcicpXG4gIH1cbiAgdmFyIGJ1ZiA9IEJ1ZmZlcihzaXplKVxuICBpZiAoZmlsbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgaWYgKHR5cGVvZiBlbmNvZGluZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGJ1Zi5maWxsKGZpbGwsIGVuY29kaW5nKVxuICAgIH0gZWxzZSB7XG4gICAgICBidWYuZmlsbChmaWxsKVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBidWYuZmlsbCgwKVxuICB9XG4gIHJldHVybiBidWZcbn1cblxuU2FmZUJ1ZmZlci5hbGxvY1Vuc2FmZSA9IGZ1bmN0aW9uIChzaXplKSB7XG4gIGlmICh0eXBlb2Ygc2l6ZSAhPT0gJ251bWJlcicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudCBtdXN0IGJlIGEgbnVtYmVyJylcbiAgfVxuICByZXR1cm4gQnVmZmVyKHNpemUpXG59XG5cblNhZmVCdWZmZXIuYWxsb2NVbnNhZmVTbG93ID0gZnVuY3Rpb24gKHNpemUpIHtcbiAgaWYgKHR5cGVvZiBzaXplICE9PSAnbnVtYmVyJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50IG11c3QgYmUgYSBudW1iZXInKVxuICB9XG4gIHJldHVybiBidWZmZXIuU2xvd0J1ZmZlcihzaXplKVxufVxuIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBleHRlbmRcblxudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxuZnVuY3Rpb24gZXh0ZW5kKCkge1xuICAgIHZhciB0YXJnZXQgPSB7fVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXVxuXG4gICAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXRcbn1cbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgbWVtRG93bkNhY2hlIH0gZnJvbSAnLi9tZW1kb3duQ2FjaGUnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBNZW1DYWNoZU1peGlucyB9IGZyb20gJy4vbWVtY2FjaGUubWl4aW5zJztcbiIsIi8qKlxuICogVGhpcyBtaXhpbnMgY2xhc3MgcHJvdmlkZXMgYXR0cmlidXRlczogKipNZW1DYWNoZSoqLlxuICogQGNsYXNzIE1lbUNhY2hlTWl4aW5zXG4gKiBAZXh0ZW5kcyB7QmFzZUNsYXNzfVxuICovXG5jb25zdCBNZW1DYWNoZU1peGlucyA9IChCYXNlQ2xhc3MpPT4gY2xhc3MgZXh0ZW5kcyBCYXNlQ2xhc3N7XG4gICAgLyoqXG4gICAgICogVGhpcyBtZXRob2RzIHJldHVybiBzdW1tYXJ5IGFib3V0IGl0ZW1zIG9mIHRoZSBjdXJyZW50IG1lbWNhY2hlIFxuICAgICAqIEByZXR1cm5zXG4gICAgICovXG4gICAgYXN5bmMgbWVtQ2FjaGVTdW1tYXJ5KCl7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLm1lbUNhY2hlLmdldEl0ZW1MaXN0KCk7XG4gICAgfVxuICAgIFxuICAgIHNldCBNZW1DYWNoZShtZW1DYWNoZSl7XG4gICAgICAgIHRoaXMubWVtQ2FjaGUgPSBtZW1DYWNoZTtcbiAgICB9XG5cbiAgICBnZXQgTWVtQ2FjaGUoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMubWVtQ2FjaGU7XG4gICAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IE1lbUNhY2hlTWl4aW5zOyIsImltcG9ydCB7IHBsYXRmb3JtIH0gZnJvbSAnY2F1c2FsLW5ldC51dGlscyc7XG5pbXBvcnQgeyBTdG9yZSBhcyBCYXNlTWVtQ2FjaGUgfSBmcm9tICdjYXVzYWwtbmV0LmNvcmUnO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBNZW1vcml6aW5nTWl4aW5zIH0gZnJvbSAnLi9tZW1vcml6aW5nLm1peGlucyc7XG4vKipcbiAqIFRoaXMgY2xhc3MgcHJvdmlkZXMgc3RvcmFnZSBpbXBsZW1lbnRhdGlvbiBmb3IgbWVtb3J5IGNhY2hpbmcgb24gdG9wIG9mXG4gKiBbbWVtZG93bl0oaHR0cHM6Ly93d3cubnBtanMuY29tL3BhY2thZ2UvbWVtZG93bikgd2hpY2ggY2FuIGJlIGFjY2Vzc2VkIHZpYSAqKm1lbURvd25DYWNoZSoqLlxuICogeyBtaXhXaXRoOiBbIE1lbW9yaXppbmdNaXhpbnMgXSB9XG4gKiBAY2xhc3MgTWVtZG93bkNhY2hlXG4gKiBAZXh0ZW5kcyBCYXNlTWVtQ2FjaGVcbiAqL1xuY2xhc3MgTWVtZG93bkNhY2hlIGV4dGVuZHMgcGxhdGZvcm0ubWl4V2l0aCggQmFzZU1lbUNhY2hlLFxuICAgIFsgTWVtb3JpemluZ01peGlucyBdKXtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmNvbm5lY3QoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ29ubmVjdCB0byBkYXRhYmFzZSwgdGhpcyBmdW5jdGlvbiBzaGFsbCBiZSBjYWxsIHdoZW4gY29uc3RydWN0IGluc3RhbmNlXG4gICAgICogQG1lbWJlcm9mIE1lbWRvd25DYWNoZVxuICAgICAqL1xuICAgIGNvbm5lY3QoKXtcbiAgICAgICAgbGV0IG1lbWRvd24gPSByZXF1aXJlKCdtZW1kb3duJyk7XG4gICAgICAgIHRoaXMuc3RvcmUgPSB0aGlzLmxldmVsdXAobWVtZG93bigpKTsgICAgICAgIFxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IE1lbWRvd25DYWNoZSgpOyIsIi8qKlxuICogVGhpcyBNZW1vcml6aW5nTWl4aW5zIGNsYXNzIGlzIGEgbWl4aW5zIGNsYXNzIGZvciBpbXBsZW1lbnQgbWVtb3J5IG1ldGhvZHNcbiAqIEBjbGFzcyBNZW1vcml6aW5nTWl4aW5zXG4gKiBAZXhwZXJpbWVudFxuICogQGV4dGVuZHMgQmFzZU1lbUNhY2hlQ2xhc3NcbiAqL1xuY29uc3QgTWVtb3JpemluZ01peGlucyA9IChCYXNlTWVtQ2FjaGVDbGFzcyk9PiBjbGFzcyBleHRlbmRzIEJhc2VNZW1DYWNoZUNsYXNze1xuICAgIC8qKlxuICAgICAqIFJlYWQgY29udGVudCBmcm9tIFxuICAgICAqIEBleHBlcmltZW50XG4gICAgICogQHBhcmFtIHsgU3RyaW5nfE51bWJlciB9IG1lbW9yeVNsb3RJbmRleCAtIG1lbW9yeSBzbG90IGluZGV4XG4gICAgICogQHJldHVybnNcbiAgICAgKi9cbiAgICBhc3luYyByZWFkKG1lbW9yeVNsb3RJbmRleCl7XG4gICAgICAgIGNvbnN0IEdldEZyb21NZW1vcnkgPSBhc3luYyAobWVtb3J5U2xvdEluZGV4KT0+e1xuICAgICAgICAgICAgdHJ5e1xuICAgICAgICAgICAgICAgIGxldCBkYXRhID0gYXdhaXQgdGhpcy5nZXRJdGVtKG1lbW9yeVNsb3RJbmRleCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC52YWx1ZXMoZGF0YSlbMF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaChlcnIpe1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsOyAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIGF3YWl0IEdldEZyb21NZW1vcnkobWVtb3J5U2xvdEluZGV4KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHBhcmFtIHsgU3RyaW5nfE51bWJlciB9IG1lbW9yeVNsb3RJbmRleCAtIHBvc2l0aXZlIG51bWJlciBmb3IgbWVtb3J5IHNsb3RcbiAgICAgKiBAcGFyYW0geyBBcnJheSB9IG1lbW9yeSB2YWx1ZVxuICAgICAqIEByZXR1cm5zIHsgUHJvbWlzZSB9IG1lbW9yeSBzbG90IGluZGV4IHZhbHVlXG4gICAgICovXG4gICAgYXN5bmMgd3JpdGUobWVtb3J5U2xvdEluZGV4LCB2YWx1ZSl7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLnNldEl0ZW0obWVtb3J5U2xvdEluZGV4LCB2YWx1ZSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqXG4gICAgICpcbiAgICAgKiBAcGFyYW0geyp9IHNsb3RJZHhzXG4gICAgICogQHJldHVybnNcbiAgICAgKi9cbiAgICBhc3luYyByZWNhbGwoc2xvdElkeHMpe1xuICAgICAgICBsZXQgbWVtb3J5ID0gW107XG4gICAgICAgIGZvcihsZXQgc2xvdElkeCBvZiBzbG90SWR4cyl7XG4gICAgICAgICAgICBtZW1vcnkucHVzaChhd2FpdCB0aGlzLnJlYWQoc2xvdElkeCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtZW1vcnk7XG4gICAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IE1lbW9yaXppbmdNaXhpbnM7IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfY29yZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3V0aWxzX187Il0sInNvdXJjZVJvb3QiOiIifQ==

/***/ }),

/***/ "./src/causalNetMemory.js":
/*!********************************!*\
  !*** ./src/causalNetMemory.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var causal_net_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! causal-net.core */ "causal-net.core");
/* harmony import */ var causal_net_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(causal_net_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var causal_net_memcache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! causal-net.memcache */ "../causality-memcache/dist/@causalNet/memcache.web.js");
/* harmony import */ var causal_net_memcache__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(causal_net_memcache__WEBPACK_IMPORTED_MODULE_1__);


/**
 * This class is under experimented
 * @experiment
 * @class CausalNetMemory
 * @extends {Tensor}
 */

class CausalNetMemory extends causal_net_core__WEBPACK_IMPORTED_MODULE_0__["Tensor"] {
  constructor() {
    super();
    this.Memory = causal_net_memcache__WEBPACK_IMPORTED_MODULE_1__["memDownCache"];
    this.R = causal_net_core__WEBPACK_IMPORTED_MODULE_0__["causalNetCore"].CoreFunction;
  }

  set Memory(memory) {
    //TODO: type checking 
    this.memory = memory;
  }

  get Memory() {
    if (!this.memory) {
      throw Error(`memory is not set`);
    }

    return this.memory;
  }

  get MemorySize() {
    return this.memorySize;
  }

  set MemorySize(size) {
    this.memorySize = size;
  }

  get NumSlots() {
    return this.memorySize[0];
  }

  get SlotSize() {
    return this.memorySize[1];
  }

  async initMemory(size, initTensor = null) {
    this.MemorySize = size;
    const R = this.R;

    if (!initTensor) {
      initTensor = await this.T.randomNormal(size);
    }

    let slotIdxs = R.range(0, this.NumSlots);
    return this.writeSlots(slotIdxs, initTensor);
  }

  async normalize() {
    const Memory = this.Memory,
          NumSlots = this.NumSlots,
          R = this.R;
    let memValues = await Memory.recall(R.range(0, NumSlots));
    let allTs = this.T.tensor(memValues);
    let meanTs = allTs.mean(1, true);
    let stdTs = allTs.sub(meanTs).pow(2).mean(1, true).pow(0.5);
    return allTs.sub(meanTs).div(stdTs);
  }

  async getMatchScore(slotIdxs) {
    let normTs = await this.normalize();
    let cTs = normTs.gather(slotIdxs);
    let similarityScore = normTs.dot(cTs.transpose());
    return similarityScore;
  }

  async getTopKSimilar(slotIdxs, k) {
    let matchScoreTensor = await this.getMatchScore(slotIdxs);
    const {
      values,
      indices
    } = matchScoreTensor.transpose().topk(k);
    return indices;
  }

  async writeSlots(slotIdxs, memoryTensor) {
    const R = this.R,
          SlotSize = this.SlotSize,
          Memory = this.Memory;
    let tensorData = await memoryTensor.data();
    let values = R.splitEvery(SlotSize, tensorData);

    for (let idx of R.range(0, slotIdxs.length)) {
      await Memory.write(slotIdxs[idx], values[idx]);
    }

    return memoryTensor;
  }

  async readSlots(slotIndexs) {
    const Memory = this.Memory,
          T = this.T;
    let values = [];

    for (let slotIdx of slotIndexs) {
      let value = await Memory.read(slotIdx);
      values.push(value);
    }

    return T.variable(T.tensor(values));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new CausalNetMemory());

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: causalNetMemory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _causalNetMemory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./causalNetMemory */ "./src/causalNetMemory.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "causalNetMemory", function() { return _causalNetMemory__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "causal-net.core":
/*!**********************************!*\
  !*** external "causal-net.core" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_causal_net_core__;

/***/ }),

/***/ "causal-net.utils":
/*!***********************************!*\
  !*** external "causal-net.utils" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_causal_net_utils__;

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L21lbW9yeS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9tZW1vcnkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9tZW1vcnkvLi4vY2F1c2FsaXR5LW1lbWNhY2hlL2Rpc3QvQGNhdXNhbE5ldC9tZW1jYWNoZS53ZWIuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9tZW1vcnkvLi9zcmMvY2F1c2FsTmV0TWVtb3J5LmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbWVtb3J5Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbWVtb3J5L2V4dGVybmFsIFwiY2F1c2FsLW5ldC5jb3JlXCIiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9tZW1vcnkvZXh0ZXJuYWwgXCJjYXVzYWwtbmV0LnV0aWxzXCIiXSwibmFtZXMiOlsiQ2F1c2FsTmV0TWVtb3J5IiwiVGVuc29yIiwiY29uc3RydWN0b3IiLCJNZW1vcnkiLCJtZW1Eb3duQ2FjaGUiLCJSIiwiY2F1c2FsTmV0Q29yZSIsIkNvcmVGdW5jdGlvbiIsIm1lbW9yeSIsIkVycm9yIiwiTWVtb3J5U2l6ZSIsIm1lbW9yeVNpemUiLCJzaXplIiwiTnVtU2xvdHMiLCJTbG90U2l6ZSIsImluaXRNZW1vcnkiLCJpbml0VGVuc29yIiwiVCIsInJhbmRvbU5vcm1hbCIsInNsb3RJZHhzIiwicmFuZ2UiLCJ3cml0ZVNsb3RzIiwibm9ybWFsaXplIiwibWVtVmFsdWVzIiwicmVjYWxsIiwiYWxsVHMiLCJ0ZW5zb3IiLCJtZWFuVHMiLCJtZWFuIiwic3RkVHMiLCJzdWIiLCJwb3ciLCJkaXYiLCJnZXRNYXRjaFNjb3JlIiwibm9ybVRzIiwiY1RzIiwiZ2F0aGVyIiwic2ltaWxhcml0eVNjb3JlIiwiZG90IiwidHJhbnNwb3NlIiwiZ2V0VG9wS1NpbWlsYXIiLCJrIiwibWF0Y2hTY29yZVRlbnNvciIsInZhbHVlcyIsImluZGljZXMiLCJ0b3BrIiwibWVtb3J5VGVuc29yIiwidGVuc29yRGF0YSIsImRhdGEiLCJzcGxpdEV2ZXJ5IiwiaWR4IiwibGVuZ3RoIiwid3JpdGUiLCJyZWFkU2xvdHMiLCJzbG90SW5kZXhzIiwic2xvdElkeCIsInZhbHVlIiwicmVhZCIsInB1c2giLCJ2YXJpYWJsZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBLElBQUksSUFBeUQ7QUFDN0QsMkJBQTJCLG1CQUFPLENBQUMsd0NBQWlCLEdBQUcsbUJBQU8sQ0FBQywwQ0FBa0I7QUFDakYsTUFBTSxFQUtxRjtBQUMzRixDQUFDO0FBQ0Qsb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELGdDQUFnQztBQUNsRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRUFBZ0Usa0JBQWtCO0FBQ2xGO0FBQ0EseURBQXlELGNBQWM7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsaUNBQWlDO0FBQ2xGLHdIQUF3SCxtQkFBbUIsRUFBRTtBQUM3STtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsMEJBQTBCLEVBQUU7QUFDL0QseUNBQXlDLGVBQWU7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhEQUE4RCwrREFBK0Q7QUFDN0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsK0NBQStDOztBQUUvQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsWUFBWTs7QUFFWjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSx5QkFBeUIsc0NBQXNDO0FBQy9EOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZOztBQUVaO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHlCQUF5Qix3QkFBd0I7QUFDakQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLHNDQUFzQztBQUN0QztBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsYUFBYTs7QUFFakQ7O0FBRUE7QUFDQSwwQ0FBMEM7O0FBRTFDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLDRCQUE0Qjs7QUFFNUIsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsK0NBQStDOztBQUUvQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEI7O0FBRTVCLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHVEQUF1RDs7QUFFdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxzQ0FBc0M7O0FBRXRDO0FBQ0E7QUFDQTs7QUFFQSxvQ0FBb0MsYUFBYTs7QUFFakQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0NBQXNDOztBQUV0QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxvQ0FBb0MsYUFBYTs7QUFFakQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGdDQUFnQyxrQ0FBa0M7QUFDbEU7O0FBRUE7QUFDQSxzQ0FBc0M7O0FBRXRDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsb0NBQW9DLGFBQWE7O0FBRWpEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0NBQXNDOztBQUV0QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxvQ0FBb0MsYUFBYTs7QUFFakQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEI7O0FBRTFCLHNDQUFzQzs7QUFFdEMsb0NBQW9DOztBQUVwQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGdEQUFnRCxhQUFhOztBQUU3RDs7QUFFQSxpQkFBaUIsa0JBQWtCO0FBQ25DO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSwyQkFBMkI7O0FBRTNCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0MsYUFBYTtBQUNqRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLDRCQUE0Qjs7QUFFNUIsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtDQUFrQyxTQUFTO0FBQzNDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsU0FBUztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLFNBQVM7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQ0FBMEMsVUFBVTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4Q0FBOEM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsbURBQW1EO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsVUFBVTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsWUFBWTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLHVDQUF1QyxTQUFTO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsaUJBQWlCO0FBQ2hDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxpQkFBaUI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFNBQVM7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixTQUFTO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixTQUFTO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELEVBQUU7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWlCLFNBQVM7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGVBQWU7QUFDdkM7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0Esd0JBQXdCLFFBQVE7QUFDaEM7QUFDQSxxQkFBcUIsZUFBZTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsWUFBWTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLFNBQVM7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixTQUFTO0FBQzlCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQixTQUFTO0FBQzlCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixrQkFBa0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLG1CQUFtQixjQUFjO0FBQ2pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQsT0FBTztBQUM5RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVELE9BQU87QUFDOUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCO0FBQ2xCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUJBQXFCLFFBQVE7QUFDN0I7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLGVBQWUsU0FBUztBQUN4QjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQixTQUFTO0FBQzVCO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGlCQUFpQjtBQUNoQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixZQUFZO0FBQzdCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsZ0JBQWdCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGdCQUFnQjtBQUNqQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsWUFBWTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSw0QkFBNEI7O0FBRTVCLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBOzs7QUFHQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLE1BQU07QUFDbkM7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsS0FBSztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsTUFBTTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLE1BQU07QUFDakM7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhCQUE4QixVQUFVO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0QsaUJBQWlCOztBQUVuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixpQkFBaUI7QUFDakM7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsbUJBQW1CO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLENBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLDZCQUE2QixNQUFNO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLEtBQUs7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsTUFBTTtBQUNqQztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixLQUFLO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsV0FBVzs7QUFFbkI7QUFDQTtBQUNBO0FBQ0EsUUFBUSxXQUFXOztBQUVuQjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsUUFBUSxXQUFXOztBQUVuQjtBQUNBO0FBQ0EsUUFBUSxVQUFVOztBQUVsQjtBQUNBOzs7QUFHQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixzQkFBc0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7O0FBRTVCLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qjs7QUFFNUIsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNEJBQTRCOztBQUU1QixPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qjs7QUFFNUIsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQixPQUFPO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBLDRCQUE0Qjs7QUFFNUIsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFDQUFxQzs7QUFFckM7QUFDQTtBQUNBOztBQUVBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsVUFBVTs7O0FBR3RDLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBNEM7O0FBRTVDOzs7QUFHQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLG1CQUFtQixzQkFBc0I7QUFDekM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHFHQUFxRyw4REFBOEQsRUFBRTs7QUFFcks7QUFDQSx1R0FBdUcsaUVBQWlFLEVBQUU7Ozs7O0FBSzFLLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsZ0JBQWdCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsZ0JBQWdCO0FBQzdCLGFBQWEsUUFBUTtBQUNyQixlQUFlLFVBQVU7QUFDekI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsRUFBRTtBQUNmO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsT0FBTzs7QUFFUCxVQUFVO0FBQ1YsQ0FBQztBQUNELDJDQUEyQyxjQUFjLG0rZ007Ozs7Ozs7Ozs7OztBQzV2SnpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFNQSxNQUFNQSxlQUFOLFNBQThCQyxzREFBOUIsQ0FBb0M7QUFDaENDLGFBQVcsR0FBRTtBQUNUO0FBQ0EsU0FBS0MsTUFBTCxHQUFjQyxnRUFBZDtBQUNBLFNBQUtDLENBQUwsR0FBU0MsNkRBQWEsQ0FBQ0MsWUFBdkI7QUFDSDs7QUFDRCxNQUFJSixNQUFKLENBQVdLLE1BQVgsRUFBa0I7QUFDZDtBQUNBLFNBQUtBLE1BQUwsR0FBY0EsTUFBZDtBQUNIOztBQUNELE1BQUlMLE1BQUosR0FBWTtBQUNSLFFBQUcsQ0FBQyxLQUFLSyxNQUFULEVBQWdCO0FBQ1osWUFBTUMsS0FBSyxDQUFFLG1CQUFGLENBQVg7QUFDSDs7QUFDRCxXQUFPLEtBQUtELE1BQVo7QUFDSDs7QUFDRCxNQUFJRSxVQUFKLEdBQWdCO0FBQ1osV0FBTyxLQUFLQyxVQUFaO0FBQ0g7O0FBQ0QsTUFBSUQsVUFBSixDQUFlRSxJQUFmLEVBQW9CO0FBQ2hCLFNBQUtELFVBQUwsR0FBa0JDLElBQWxCO0FBQ0g7O0FBQ0QsTUFBSUMsUUFBSixHQUFjO0FBQ1YsV0FBTyxLQUFLRixVQUFMLENBQWdCLENBQWhCLENBQVA7QUFDSDs7QUFDRCxNQUFJRyxRQUFKLEdBQWM7QUFFVixXQUFPLEtBQUtILFVBQUwsQ0FBZ0IsQ0FBaEIsQ0FBUDtBQUNIOztBQUNELFFBQU1JLFVBQU4sQ0FBaUJILElBQWpCLEVBQXVCSSxVQUFVLEdBQUMsSUFBbEMsRUFBdUM7QUFDbkMsU0FBS04sVUFBTCxHQUFrQkUsSUFBbEI7QUFDQSxVQUFNUCxDQUFDLEdBQUcsS0FBS0EsQ0FBZjs7QUFDQSxRQUFHLENBQUNXLFVBQUosRUFBZTtBQUNYQSxnQkFBVSxHQUFHLE1BQU0sS0FBS0MsQ0FBTCxDQUFPQyxZQUFQLENBQW9CTixJQUFwQixDQUFuQjtBQUNIOztBQUNELFFBQUlPLFFBQVEsR0FBR2QsQ0FBQyxDQUFDZSxLQUFGLENBQVEsQ0FBUixFQUFXLEtBQUtQLFFBQWhCLENBQWY7QUFDQSxXQUFPLEtBQUtRLFVBQUwsQ0FBZ0JGLFFBQWhCLEVBQTBCSCxVQUExQixDQUFQO0FBQ0g7O0FBRUQsUUFBTU0sU0FBTixHQUFpQjtBQUNiLFVBQU1uQixNQUFNLEdBQUcsS0FBS0EsTUFBcEI7QUFBQSxVQUE0QlUsUUFBUSxHQUFHLEtBQUtBLFFBQTVDO0FBQUEsVUFBc0RSLENBQUMsR0FBRyxLQUFLQSxDQUEvRDtBQUNBLFFBQUlrQixTQUFTLEdBQUcsTUFBTXBCLE1BQU0sQ0FBQ3FCLE1BQVAsQ0FBY25CLENBQUMsQ0FBQ2UsS0FBRixDQUFRLENBQVIsRUFBV1AsUUFBWCxDQUFkLENBQXRCO0FBQ0EsUUFBSVksS0FBSyxHQUFHLEtBQUtSLENBQUwsQ0FBT1MsTUFBUCxDQUFjSCxTQUFkLENBQVo7QUFDQSxRQUFJSSxNQUFNLEdBQUdGLEtBQUssQ0FBQ0csSUFBTixDQUFXLENBQVgsRUFBYyxJQUFkLENBQWI7QUFDQSxRQUFJQyxLQUFLLEdBQUdKLEtBQUssQ0FBQ0ssR0FBTixDQUFVSCxNQUFWLEVBQWtCSSxHQUFsQixDQUFzQixDQUF0QixFQUF5QkgsSUFBekIsQ0FBOEIsQ0FBOUIsRUFBaUMsSUFBakMsRUFBdUNHLEdBQXZDLENBQTJDLEdBQTNDLENBQVo7QUFDQSxXQUFPTixLQUFLLENBQUNLLEdBQU4sQ0FBVUgsTUFBVixFQUFrQkssR0FBbEIsQ0FBc0JILEtBQXRCLENBQVA7QUFDSDs7QUFFRCxRQUFNSSxhQUFOLENBQW9CZCxRQUFwQixFQUE2QjtBQUN6QixRQUFJZSxNQUFNLEdBQUcsTUFBTSxLQUFLWixTQUFMLEVBQW5CO0FBQ0EsUUFBSWEsR0FBRyxHQUFHRCxNQUFNLENBQUNFLE1BQVAsQ0FBY2pCLFFBQWQsQ0FBVjtBQUNBLFFBQUlrQixlQUFlLEdBQUdILE1BQU0sQ0FBQ0ksR0FBUCxDQUFXSCxHQUFHLENBQUNJLFNBQUosRUFBWCxDQUF0QjtBQUNBLFdBQU9GLGVBQVA7QUFDSDs7QUFFRCxRQUFNRyxjQUFOLENBQXFCckIsUUFBckIsRUFBK0JzQixDQUEvQixFQUFpQztBQUM3QixRQUFJQyxnQkFBZ0IsR0FBRyxNQUFNLEtBQUtULGFBQUwsQ0FBbUJkLFFBQW5CLENBQTdCO0FBQ0EsVUFBTTtBQUFDd0IsWUFBRDtBQUFTQztBQUFULFFBQW9CRixnQkFBZ0IsQ0FBQ0gsU0FBakIsR0FBNkJNLElBQTdCLENBQWtDSixDQUFsQyxDQUExQjtBQUNBLFdBQU9HLE9BQVA7QUFDSDs7QUFFRCxRQUFNdkIsVUFBTixDQUFpQkYsUUFBakIsRUFBMkIyQixZQUEzQixFQUF3QztBQUNwQyxVQUFNekMsQ0FBQyxHQUFHLEtBQUtBLENBQWY7QUFBQSxVQUFrQlMsUUFBUSxHQUFHLEtBQUtBLFFBQWxDO0FBQUEsVUFBNENYLE1BQU0sR0FBRyxLQUFLQSxNQUExRDtBQUNBLFFBQUk0QyxVQUFVLEdBQUcsTUFBTUQsWUFBWSxDQUFDRSxJQUFiLEVBQXZCO0FBQ0EsUUFBSUwsTUFBTSxHQUFHdEMsQ0FBQyxDQUFDNEMsVUFBRixDQUFhbkMsUUFBYixFQUF1QmlDLFVBQXZCLENBQWI7O0FBQ0EsU0FBSSxJQUFJRyxHQUFSLElBQWU3QyxDQUFDLENBQUNlLEtBQUYsQ0FBUSxDQUFSLEVBQVdELFFBQVEsQ0FBQ2dDLE1BQXBCLENBQWYsRUFBMkM7QUFDdkMsWUFBTWhELE1BQU0sQ0FBQ2lELEtBQVAsQ0FBYWpDLFFBQVEsQ0FBQytCLEdBQUQsQ0FBckIsRUFBNEJQLE1BQU0sQ0FBQ08sR0FBRCxDQUFsQyxDQUFOO0FBQ0g7O0FBQ0QsV0FBT0osWUFBUDtBQUNIOztBQUNELFFBQU1PLFNBQU4sQ0FBZ0JDLFVBQWhCLEVBQTJCO0FBQ3ZCLFVBQU1uRCxNQUFNLEdBQUcsS0FBS0EsTUFBcEI7QUFBQSxVQUE0QmMsQ0FBQyxHQUFHLEtBQUtBLENBQXJDO0FBQ0EsUUFBSTBCLE1BQU0sR0FBRyxFQUFiOztBQUNBLFNBQUksSUFBSVksT0FBUixJQUFtQkQsVUFBbkIsRUFBOEI7QUFDMUIsVUFBSUUsS0FBSyxHQUFHLE1BQU1yRCxNQUFNLENBQUNzRCxJQUFQLENBQVlGLE9BQVosQ0FBbEI7QUFDQVosWUFBTSxDQUFDZSxJQUFQLENBQVlGLEtBQVo7QUFDSDs7QUFDRCxXQUFPdkMsQ0FBQyxDQUFDMEMsUUFBRixDQUFXMUMsQ0FBQyxDQUFDUyxNQUFGLENBQVNpQixNQUFULENBQVgsQ0FBUDtBQUNIOztBQTlFK0I7O0FBaUZyQixtRUFBSTNDLGVBQUosRUFBZixFOzs7Ozs7Ozs7Ozs7QUN6RkE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7OztBQ0FBLDZEOzs7Ozs7Ozs7OztBQ0FBLDhEIiwiZmlsZSI6IkBjYXVzYWxOZXQvbWVtb3J5Lm5vZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJjYXVzYWwtbmV0LmNvcmVcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnV0aWxzXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcImNhdXNhbC1uZXQuY29yZVwiLCBcImNhdXNhbC1uZXQudXRpbHNcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQGNhdXNhbE5ldC9tZW1vcnlcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJjYXVzYWwtbmV0LmNvcmVcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnV0aWxzXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJAY2F1c2FsTmV0L21lbW9yeVwiXSA9IGZhY3Rvcnkocm9vdFtcImNhdXNhbC1uZXQuY29yZVwiXSwgcm9vdFtcImNhdXNhbC1uZXQudXRpbHNcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X2NvcmVfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3V0aWxzX18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImNhdXNhbC1uZXQuY29yZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQudXRpbHNcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiY2F1c2FsLW5ldC5jb3JlXCIsIFwiY2F1c2FsLW5ldC51dGlsc1wiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJAY2F1c2FsTmV0L21lbWNhY2hlXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiY2F1c2FsLW5ldC5jb3JlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC51dGlsc1wiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiQGNhdXNhbE5ldC9tZW1jYWNoZVwiXSA9IGZhY3Rvcnkocm9vdFtcImNhdXNhbC1uZXQuY29yZVwiXSwgcm9vdFtcImNhdXNhbC1uZXQudXRpbHNcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X2NvcmVfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3V0aWxzX18pIHtcbnJldHVybiAvKioqKioqLyAoZnVuY3Rpb24obW9kdWxlcykgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbi8qKioqKiovIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdGk6IG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0bDogZmFsc2UsXG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4vKioqKioqLyBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuLyoqKioqKi8gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuLyoqKioqKi8gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3Rcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4vKioqKioqLyBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuLyoqKioqKi8gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3Rcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4vKioqKioqLyBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbi8qKioqKiovIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4vKioqKioqLyBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gbnM7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbi8qKioqKiovIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gZ2V0dGVyO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4vKioqKioqLyB9KVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovICh7XG5cbi8qKiovIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Fic3RyYWN0LWxldmVsZG93bi9hYnN0cmFjdC1jaGFpbmVkLWJhdGNoLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC9ob21lL2h1eW5obmd1eWVuL2dpdGh1Yi9jYXVzYWxpdHkvbm9kZV9tb2R1bGVzL2Fic3RyYWN0LWxldmVsZG93bi9hYnN0cmFjdC1jaGFpbmVkLWJhdGNoLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbi8qIFdFQlBBQ0sgVkFSIElOSkVDVElPTiAqLyhmdW5jdGlvbihwcm9jZXNzKSB7LyogQ29weXJpZ2h0IChjKSAyMDE3IFJvZCBWYWdnLCBNSVQgTGljZW5zZSAqL1xuXG5mdW5jdGlvbiBBYnN0cmFjdENoYWluZWRCYXRjaCAoZGIpIHtcbiAgdGhpcy5fZGIgPSBkYlxuICB0aGlzLl9vcGVyYXRpb25zID0gW11cbiAgdGhpcy5fd3JpdHRlbiA9IGZhbHNlXG59XG5cbkFic3RyYWN0Q2hhaW5lZEJhdGNoLnByb3RvdHlwZS5fc2VyaWFsaXplS2V5ID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gdGhpcy5fZGIuX3NlcmlhbGl6ZUtleShrZXkpXG59XG5cbkFic3RyYWN0Q2hhaW5lZEJhdGNoLnByb3RvdHlwZS5fc2VyaWFsaXplVmFsdWUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIHRoaXMuX2RiLl9zZXJpYWxpemVWYWx1ZSh2YWx1ZSlcbn1cblxuQWJzdHJhY3RDaGFpbmVkQmF0Y2gucHJvdG90eXBlLl9jaGVja1dyaXR0ZW4gPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLl93cml0dGVuKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCd3cml0ZSgpIGFscmVhZHkgY2FsbGVkIG9uIHRoaXMgYmF0Y2gnKVxuICB9XG59XG5cbkFic3RyYWN0Q2hhaW5lZEJhdGNoLnByb3RvdHlwZS5wdXQgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICB0aGlzLl9jaGVja1dyaXR0ZW4oKVxuXG4gIHZhciBlcnIgPSB0aGlzLl9kYi5fY2hlY2tLZXkoa2V5LCAna2V5JylcbiAgaWYgKGVycikgeyB0aHJvdyBlcnIgfVxuXG4gIGtleSA9IHRoaXMuX3NlcmlhbGl6ZUtleShrZXkpXG4gIHZhbHVlID0gdGhpcy5fc2VyaWFsaXplVmFsdWUodmFsdWUpXG5cbiAgdGhpcy5fcHV0KGtleSwgdmFsdWUpXG5cbiAgcmV0dXJuIHRoaXNcbn1cblxuQWJzdHJhY3RDaGFpbmVkQmF0Y2gucHJvdG90eXBlLl9wdXQgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICB0aGlzLl9vcGVyYXRpb25zLnB1c2goeyB0eXBlOiAncHV0Jywga2V5OiBrZXksIHZhbHVlOiB2YWx1ZSB9KVxufVxuXG5BYnN0cmFjdENoYWluZWRCYXRjaC5wcm90b3R5cGUuZGVsID0gZnVuY3Rpb24gKGtleSkge1xuICB0aGlzLl9jaGVja1dyaXR0ZW4oKVxuXG4gIHZhciBlcnIgPSB0aGlzLl9kYi5fY2hlY2tLZXkoa2V5LCAna2V5JylcbiAgaWYgKGVycikgeyB0aHJvdyBlcnIgfVxuXG4gIGtleSA9IHRoaXMuX3NlcmlhbGl6ZUtleShrZXkpXG4gIHRoaXMuX2RlbChrZXkpXG5cbiAgcmV0dXJuIHRoaXNcbn1cblxuQWJzdHJhY3RDaGFpbmVkQmF0Y2gucHJvdG90eXBlLl9kZWwgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHRoaXMuX29wZXJhdGlvbnMucHVzaCh7IHR5cGU6ICdkZWwnLCBrZXk6IGtleSB9KVxufVxuXG5BYnN0cmFjdENoYWluZWRCYXRjaC5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuX2NoZWNrV3JpdHRlbigpXG4gIHRoaXMuX29wZXJhdGlvbnMgPSBbXVxuICB0aGlzLl9jbGVhcigpXG5cbiAgcmV0dXJuIHRoaXNcbn1cblxuQWJzdHJhY3RDaGFpbmVkQmF0Y2gucHJvdG90eXBlLl9jbGVhciA9IGZ1bmN0aW9uIG5vb3AgKCkge31cblxuQWJzdHJhY3RDaGFpbmVkQmF0Y2gucHJvdG90eXBlLndyaXRlID0gZnVuY3Rpb24gKG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gIHRoaXMuX2NoZWNrV3JpdHRlbigpXG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnZnVuY3Rpb24nKSB7IGNhbGxiYWNrID0gb3B0aW9ucyB9XG4gIGlmICh0eXBlb2YgY2FsbGJhY2sgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3dyaXRlKCkgcmVxdWlyZXMgYSBjYWxsYmFjayBhcmd1bWVudCcpXG4gIH1cbiAgaWYgKHR5cGVvZiBvcHRpb25zICE9PSAnb2JqZWN0JykgeyBvcHRpb25zID0ge30gfVxuXG4gIHRoaXMuX3dyaXR0ZW4gPSB0cnVlXG5cbiAgLy8gQHRzLWlnbm9yZVxuICBpZiAodHlwZW9mIHRoaXMuX3dyaXRlID09PSAnZnVuY3Rpb24nKSB7IHJldHVybiB0aGlzLl93cml0ZShjYWxsYmFjaykgfVxuXG4gIGlmICh0eXBlb2YgdGhpcy5fZGIuX2JhdGNoID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RiLl9iYXRjaCh0aGlzLl9vcGVyYXRpb25zLCBvcHRpb25zLCBjYWxsYmFjaylcbiAgfVxuXG4gIHByb2Nlc3MubmV4dFRpY2soY2FsbGJhY2spXG59XG5cbm1vZHVsZS5leHBvcnRzID0gQWJzdHJhY3RDaGFpbmVkQmF0Y2hcblxuLyogV0VCUEFDSyBWQVIgSU5KRUNUSU9OICovfS5jYWxsKHRoaXMsIF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vLi4vcHJvY2Vzcy9icm93c2VyLmpzICovIFwiLi4vLi4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qc1wiKSkpXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4uLy4uL25vZGVfbW9kdWxlcy9hYnN0cmFjdC1sZXZlbGRvd24vYWJzdHJhY3QtaXRlcmF0b3IuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC9ob21lL2h1eW5obmd1eWVuL2dpdGh1Yi9jYXVzYWxpdHkvbm9kZV9tb2R1bGVzL2Fic3RyYWN0LWxldmVsZG93bi9hYnN0cmFjdC1pdGVyYXRvci5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuLyogV0VCUEFDSyBWQVIgSU5KRUNUSU9OICovKGZ1bmN0aW9uKHByb2Nlc3MpIHsvKiBDb3B5cmlnaHQgKGMpIDIwMTcgUm9kIFZhZ2csIE1JVCBMaWNlbnNlICovXG5cbmZ1bmN0aW9uIEFic3RyYWN0SXRlcmF0b3IgKGRiKSB7XG4gIHRoaXMuZGIgPSBkYlxuICB0aGlzLl9lbmRlZCA9IGZhbHNlXG4gIHRoaXMuX25leHRpbmcgPSBmYWxzZVxufVxuXG5BYnN0cmFjdEl0ZXJhdG9yLnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gIHZhciBzZWxmID0gdGhpc1xuXG4gIGlmICh0eXBlb2YgY2FsbGJhY2sgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ25leHQoKSByZXF1aXJlcyBhIGNhbGxiYWNrIGFyZ3VtZW50JylcbiAgfVxuXG4gIGlmIChzZWxmLl9lbmRlZCkge1xuICAgIHByb2Nlc3MubmV4dFRpY2soY2FsbGJhY2ssIG5ldyBFcnJvcignY2Fubm90IGNhbGwgbmV4dCgpIGFmdGVyIGVuZCgpJykpXG4gICAgcmV0dXJuIHNlbGZcbiAgfVxuXG4gIGlmIChzZWxmLl9uZXh0aW5nKSB7XG4gICAgcHJvY2Vzcy5uZXh0VGljayhjYWxsYmFjaywgbmV3IEVycm9yKCdjYW5ub3QgY2FsbCBuZXh0KCkgYmVmb3JlIHByZXZpb3VzIG5leHQoKSBoYXMgY29tcGxldGVkJykpXG4gICAgcmV0dXJuIHNlbGZcbiAgfVxuXG4gIHNlbGYuX25leHRpbmcgPSB0cnVlXG4gIHNlbGYuX25leHQoZnVuY3Rpb24gKCkge1xuICAgIHNlbGYuX25leHRpbmcgPSBmYWxzZVxuICAgIGNhbGxiYWNrLmFwcGx5KG51bGwsIGFyZ3VtZW50cylcbiAgfSlcblxuICByZXR1cm4gc2VsZlxufVxuXG5BYnN0cmFjdEl0ZXJhdG9yLnByb3RvdHlwZS5fbmV4dCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICBwcm9jZXNzLm5leHRUaWNrKGNhbGxiYWNrKVxufVxuXG5BYnN0cmFjdEl0ZXJhdG9yLnByb3RvdHlwZS5lbmQgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBFcnJvcignZW5kKCkgcmVxdWlyZXMgYSBjYWxsYmFjayBhcmd1bWVudCcpXG4gIH1cblxuICBpZiAodGhpcy5fZW5kZWQpIHtcbiAgICByZXR1cm4gcHJvY2Vzcy5uZXh0VGljayhjYWxsYmFjaywgbmV3IEVycm9yKCdlbmQoKSBhbHJlYWR5IGNhbGxlZCBvbiBpdGVyYXRvcicpKVxuICB9XG5cbiAgdGhpcy5fZW5kZWQgPSB0cnVlXG4gIHRoaXMuX2VuZChjYWxsYmFjaylcbn1cblxuQWJzdHJhY3RJdGVyYXRvci5wcm90b3R5cGUuX2VuZCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICBwcm9jZXNzLm5leHRUaWNrKGNhbGxiYWNrKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEFic3RyYWN0SXRlcmF0b3JcblxuLyogV0VCUEFDSyBWQVIgSU5KRUNUSU9OICovfS5jYWxsKHRoaXMsIF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vLi4vcHJvY2Vzcy9icm93c2VyLmpzICovIFwiLi4vLi4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qc1wiKSkpXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4uLy4uL25vZGVfbW9kdWxlcy9hYnN0cmFjdC1sZXZlbGRvd24vYWJzdHJhY3QtbGV2ZWxkb3duLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvYWJzdHJhY3QtbGV2ZWxkb3duL2Fic3RyYWN0LWxldmVsZG93bi5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbi8qIFdFQlBBQ0sgVkFSIElOSkVDVElPTiAqLyhmdW5jdGlvbihwcm9jZXNzLCBCdWZmZXIpIHsvKiBDb3B5cmlnaHQgKGMpIDIwMTcgUm9kIFZhZ2csIE1JVCBMaWNlbnNlICovXG5cbnZhciB4dGVuZCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIHh0ZW5kICovIFwiLi4vLi4vbm9kZV9tb2R1bGVzL3h0ZW5kL2ltbXV0YWJsZS5qc1wiKVxudmFyIEFic3RyYWN0SXRlcmF0b3IgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL2Fic3RyYWN0LWl0ZXJhdG9yICovIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Fic3RyYWN0LWxldmVsZG93bi9hYnN0cmFjdC1pdGVyYXRvci5qc1wiKVxudmFyIEFic3RyYWN0Q2hhaW5lZEJhdGNoID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9hYnN0cmFjdC1jaGFpbmVkLWJhdGNoICovIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Fic3RyYWN0LWxldmVsZG93bi9hYnN0cmFjdC1jaGFpbmVkLWJhdGNoLmpzXCIpXG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5XG52YXIgcmFuZ2VPcHRpb25zID0gJ3N0YXJ0IGVuZCBndCBndGUgbHQgbHRlJy5zcGxpdCgnICcpXG5cbmZ1bmN0aW9uIEFic3RyYWN0TGV2ZWxET1dOIChsb2NhdGlvbikge1xuICBpZiAoIWFyZ3VtZW50cy5sZW5ndGggfHwgbG9jYXRpb24gPT09IHVuZGVmaW5lZCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY29uc3RydWN0b3IgcmVxdWlyZXMgYXQgbGVhc3QgYSBsb2NhdGlvbiBhcmd1bWVudCcpXG4gIH1cblxuICBpZiAodHlwZW9mIGxvY2F0aW9uICE9PSAnc3RyaW5nJykge1xuICAgIHRocm93IG5ldyBFcnJvcignY29uc3RydWN0b3IgcmVxdWlyZXMgYSBsb2NhdGlvbiBzdHJpbmcgYXJndW1lbnQnKVxuICB9XG5cbiAgdGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uXG4gIHRoaXMuc3RhdHVzID0gJ25ldydcbn1cblxuQWJzdHJhY3RMZXZlbERPV04ucHJvdG90eXBlLm9wZW4gPSBmdW5jdGlvbiAob3B0aW9ucywgY2FsbGJhY2spIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG4gIHZhciBvbGRTdGF0dXMgPSB0aGlzLnN0YXR1c1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJykgeyBjYWxsYmFjayA9IG9wdGlvbnMgfVxuXG4gIGlmICh0eXBlb2YgY2FsbGJhY2sgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ29wZW4oKSByZXF1aXJlcyBhIGNhbGxiYWNrIGFyZ3VtZW50JylcbiAgfVxuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucyAhPT0gJ29iamVjdCcpIHsgb3B0aW9ucyA9IHt9IH1cblxuICBvcHRpb25zLmNyZWF0ZUlmTWlzc2luZyA9IG9wdGlvbnMuY3JlYXRlSWZNaXNzaW5nICE9PSBmYWxzZVxuICBvcHRpb25zLmVycm9ySWZFeGlzdHMgPSAhIW9wdGlvbnMuZXJyb3JJZkV4aXN0c1xuXG4gIHRoaXMuc3RhdHVzID0gJ29wZW5pbmcnXG4gIHRoaXMuX29wZW4ob3B0aW9ucywgZnVuY3Rpb24gKGVycikge1xuICAgIGlmIChlcnIpIHtcbiAgICAgIHNlbGYuc3RhdHVzID0gb2xkU3RhdHVzXG4gICAgICByZXR1cm4gY2FsbGJhY2soZXJyKVxuICAgIH1cbiAgICBzZWxmLnN0YXR1cyA9ICdvcGVuJ1xuICAgIGNhbGxiYWNrKClcbiAgfSlcbn1cblxuQWJzdHJhY3RMZXZlbERPV04ucHJvdG90eXBlLl9vcGVuID0gZnVuY3Rpb24gKG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gIHByb2Nlc3MubmV4dFRpY2soY2FsbGJhY2spXG59XG5cbkFic3RyYWN0TGV2ZWxET1dOLnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICB2YXIgc2VsZiA9IHRoaXNcbiAgdmFyIG9sZFN0YXR1cyA9IHRoaXMuc3RhdHVzXG5cbiAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xvc2UoKSByZXF1aXJlcyBhIGNhbGxiYWNrIGFyZ3VtZW50JylcbiAgfVxuXG4gIHRoaXMuc3RhdHVzID0gJ2Nsb3NpbmcnXG4gIHRoaXMuX2Nsb3NlKGZ1bmN0aW9uIChlcnIpIHtcbiAgICBpZiAoZXJyKSB7XG4gICAgICBzZWxmLnN0YXR1cyA9IG9sZFN0YXR1c1xuICAgICAgcmV0dXJuIGNhbGxiYWNrKGVycilcbiAgICB9XG4gICAgc2VsZi5zdGF0dXMgPSAnY2xvc2VkJ1xuICAgIGNhbGxiYWNrKClcbiAgfSlcbn1cblxuQWJzdHJhY3RMZXZlbERPV04ucHJvdG90eXBlLl9jbG9zZSA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICBwcm9jZXNzLm5leHRUaWNrKGNhbGxiYWNrKVxufVxuXG5BYnN0cmFjdExldmVsRE9XTi5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKGtleSwgb3B0aW9ucywgY2FsbGJhY2spIHtcbiAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnZnVuY3Rpb24nKSB7IGNhbGxiYWNrID0gb3B0aW9ucyB9XG5cbiAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBFcnJvcignZ2V0KCkgcmVxdWlyZXMgYSBjYWxsYmFjayBhcmd1bWVudCcpXG4gIH1cblxuICB2YXIgZXJyID0gdGhpcy5fY2hlY2tLZXkoa2V5LCAna2V5JylcbiAgaWYgKGVycikgcmV0dXJuIHByb2Nlc3MubmV4dFRpY2soY2FsbGJhY2ssIGVycilcblxuICBrZXkgPSB0aGlzLl9zZXJpYWxpemVLZXkoa2V5KVxuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucyAhPT0gJ29iamVjdCcpIHsgb3B0aW9ucyA9IHt9IH1cblxuICBvcHRpb25zLmFzQnVmZmVyID0gb3B0aW9ucy5hc0J1ZmZlciAhPT0gZmFsc2VcblxuICB0aGlzLl9nZXQoa2V5LCBvcHRpb25zLCBjYWxsYmFjaylcbn1cblxuQWJzdHJhY3RMZXZlbERPV04ucHJvdG90eXBlLl9nZXQgPSBmdW5jdGlvbiAoa2V5LCBvcHRpb25zLCBjYWxsYmFjaykge1xuICBwcm9jZXNzLm5leHRUaWNrKGZ1bmN0aW9uICgpIHsgY2FsbGJhY2sobmV3IEVycm9yKCdOb3RGb3VuZCcpKSB9KVxufVxuXG5BYnN0cmFjdExldmVsRE9XTi5wcm90b3R5cGUucHV0ID0gZnVuY3Rpb24gKGtleSwgdmFsdWUsIG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJykgeyBjYWxsYmFjayA9IG9wdGlvbnMgfVxuXG4gIGlmICh0eXBlb2YgY2FsbGJhY2sgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3B1dCgpIHJlcXVpcmVzIGEgY2FsbGJhY2sgYXJndW1lbnQnKVxuICB9XG5cbiAgdmFyIGVyciA9IHRoaXMuX2NoZWNrS2V5KGtleSwgJ2tleScpXG4gIGlmIChlcnIpIHJldHVybiBwcm9jZXNzLm5leHRUaWNrKGNhbGxiYWNrLCBlcnIpXG5cbiAga2V5ID0gdGhpcy5fc2VyaWFsaXplS2V5KGtleSlcbiAgdmFsdWUgPSB0aGlzLl9zZXJpYWxpemVWYWx1ZSh2YWx1ZSlcblxuICBpZiAodHlwZW9mIG9wdGlvbnMgIT09ICdvYmplY3QnKSB7IG9wdGlvbnMgPSB7fSB9XG5cbiAgdGhpcy5fcHV0KGtleSwgdmFsdWUsIG9wdGlvbnMsIGNhbGxiYWNrKVxufVxuXG5BYnN0cmFjdExldmVsRE9XTi5wcm90b3R5cGUuX3B1dCA9IGZ1bmN0aW9uIChrZXksIHZhbHVlLCBvcHRpb25zLCBjYWxsYmFjaykge1xuICBwcm9jZXNzLm5leHRUaWNrKGNhbGxiYWNrKVxufVxuXG5BYnN0cmFjdExldmVsRE9XTi5wcm90b3R5cGUuZGVsID0gZnVuY3Rpb24gKGtleSwgb3B0aW9ucywgY2FsbGJhY2spIHtcbiAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnZnVuY3Rpb24nKSB7IGNhbGxiYWNrID0gb3B0aW9ucyB9XG5cbiAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBFcnJvcignZGVsKCkgcmVxdWlyZXMgYSBjYWxsYmFjayBhcmd1bWVudCcpXG4gIH1cblxuICB2YXIgZXJyID0gdGhpcy5fY2hlY2tLZXkoa2V5LCAna2V5JylcbiAgaWYgKGVycikgcmV0dXJuIHByb2Nlc3MubmV4dFRpY2soY2FsbGJhY2ssIGVycilcblxuICBrZXkgPSB0aGlzLl9zZXJpYWxpemVLZXkoa2V5KVxuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucyAhPT0gJ29iamVjdCcpIHsgb3B0aW9ucyA9IHt9IH1cblxuICB0aGlzLl9kZWwoa2V5LCBvcHRpb25zLCBjYWxsYmFjaylcbn1cblxuQWJzdHJhY3RMZXZlbERPV04ucHJvdG90eXBlLl9kZWwgPSBmdW5jdGlvbiAoa2V5LCBvcHRpb25zLCBjYWxsYmFjaykge1xuICBwcm9jZXNzLm5leHRUaWNrKGNhbGxiYWNrKVxufVxuXG5BYnN0cmFjdExldmVsRE9XTi5wcm90b3R5cGUuYmF0Y2ggPSBmdW5jdGlvbiAoYXJyYXksIG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gIGlmICghYXJndW1lbnRzLmxlbmd0aCkgeyByZXR1cm4gdGhpcy5fY2hhaW5lZEJhdGNoKCkgfVxuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJykgeyBjYWxsYmFjayA9IG9wdGlvbnMgfVxuXG4gIGlmICh0eXBlb2YgYXJyYXkgPT09ICdmdW5jdGlvbicpIHsgY2FsbGJhY2sgPSBhcnJheSB9XG5cbiAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBFcnJvcignYmF0Y2goYXJyYXkpIHJlcXVpcmVzIGEgY2FsbGJhY2sgYXJndW1lbnQnKVxuICB9XG5cbiAgaWYgKCFBcnJheS5pc0FycmF5KGFycmF5KSkge1xuICAgIHJldHVybiBwcm9jZXNzLm5leHRUaWNrKGNhbGxiYWNrLCBuZXcgRXJyb3IoJ2JhdGNoKGFycmF5KSByZXF1aXJlcyBhbiBhcnJheSBhcmd1bWVudCcpKVxuICB9XG5cbiAgaWYgKCFvcHRpb25zIHx8IHR5cGVvZiBvcHRpb25zICE9PSAnb2JqZWN0JykgeyBvcHRpb25zID0ge30gfVxuXG4gIHZhciBzZXJpYWxpemVkID0gbmV3IEFycmF5KGFycmF5Lmxlbmd0aClcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHR5cGVvZiBhcnJheVtpXSAhPT0gJ29iamVjdCcgfHwgYXJyYXlbaV0gPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBwcm9jZXNzLm5leHRUaWNrKGNhbGxiYWNrLCBuZXcgRXJyb3IoJ2JhdGNoKGFycmF5KSBlbGVtZW50IG11c3QgYmUgYW4gb2JqZWN0IGFuZCBub3QgYG51bGxgJykpXG4gICAgfVxuXG4gICAgdmFyIGUgPSB4dGVuZChhcnJheVtpXSlcblxuICAgIGlmIChlLnR5cGUgIT09ICdwdXQnICYmIGUudHlwZSAhPT0gJ2RlbCcpIHtcbiAgICAgIHJldHVybiBwcm9jZXNzLm5leHRUaWNrKGNhbGxiYWNrLCBuZXcgRXJyb3IoXCJgdHlwZWAgbXVzdCBiZSAncHV0JyBvciAnZGVsJ1wiKSlcbiAgICB9XG5cbiAgICB2YXIgZXJyID0gdGhpcy5fY2hlY2tLZXkoZS5rZXksICdrZXknKVxuICAgIGlmIChlcnIpIHJldHVybiBwcm9jZXNzLm5leHRUaWNrKGNhbGxiYWNrLCBlcnIpXG5cbiAgICBlLmtleSA9IHRoaXMuX3NlcmlhbGl6ZUtleShlLmtleSlcblxuICAgIGlmIChlLnR5cGUgPT09ICdwdXQnKSB7IGUudmFsdWUgPSB0aGlzLl9zZXJpYWxpemVWYWx1ZShlLnZhbHVlKSB9XG5cbiAgICBzZXJpYWxpemVkW2ldID0gZVxuICB9XG5cbiAgdGhpcy5fYmF0Y2goc2VyaWFsaXplZCwgb3B0aW9ucywgY2FsbGJhY2spXG59XG5cbkFic3RyYWN0TGV2ZWxET1dOLnByb3RvdHlwZS5fYmF0Y2ggPSBmdW5jdGlvbiAoYXJyYXksIG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gIHByb2Nlc3MubmV4dFRpY2soY2FsbGJhY2spXG59XG5cbkFic3RyYWN0TGV2ZWxET1dOLnByb3RvdHlwZS5fc2V0dXBJdGVyYXRvck9wdGlvbnMgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICBvcHRpb25zID0gY2xlYW5SYW5nZU9wdGlvbnMob3B0aW9ucylcblxuICBvcHRpb25zLnJldmVyc2UgPSAhIW9wdGlvbnMucmV2ZXJzZVxuICBvcHRpb25zLmtleXMgPSBvcHRpb25zLmtleXMgIT09IGZhbHNlXG4gIG9wdGlvbnMudmFsdWVzID0gb3B0aW9ucy52YWx1ZXMgIT09IGZhbHNlXG4gIG9wdGlvbnMubGltaXQgPSAnbGltaXQnIGluIG9wdGlvbnMgPyBvcHRpb25zLmxpbWl0IDogLTFcbiAgb3B0aW9ucy5rZXlBc0J1ZmZlciA9IG9wdGlvbnMua2V5QXNCdWZmZXIgIT09IGZhbHNlXG4gIG9wdGlvbnMudmFsdWVBc0J1ZmZlciA9IG9wdGlvbnMudmFsdWVBc0J1ZmZlciAhPT0gZmFsc2VcblxuICByZXR1cm4gb3B0aW9uc1xufVxuXG5mdW5jdGlvbiBjbGVhblJhbmdlT3B0aW9ucyAob3B0aW9ucykge1xuICB2YXIgcmVzdWx0ID0ge31cblxuICBmb3IgKHZhciBrIGluIG9wdGlvbnMpIHtcbiAgICBpZiAoIWhhc093blByb3BlcnR5LmNhbGwob3B0aW9ucywgaykpIGNvbnRpbnVlXG4gICAgaWYgKGlzUmFuZ2VPcHRpb24oaykgJiYgaXNFbXB0eVJhbmdlT3B0aW9uKG9wdGlvbnNba10pKSBjb250aW51ZVxuXG4gICAgcmVzdWx0W2tdID0gb3B0aW9uc1trXVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5mdW5jdGlvbiBpc1JhbmdlT3B0aW9uIChrKSB7XG4gIHJldHVybiByYW5nZU9wdGlvbnMuaW5kZXhPZihrKSAhPT0gLTFcbn1cblxuZnVuY3Rpb24gaXNFbXB0eVJhbmdlT3B0aW9uICh2KSB7XG4gIHJldHVybiB2ID09PSAnJyB8fCB2ID09IG51bGwgfHwgaXNFbXB0eUJ1ZmZlcih2KVxufVxuXG5mdW5jdGlvbiBpc0VtcHR5QnVmZmVyICh2KSB7XG4gIHJldHVybiBCdWZmZXIuaXNCdWZmZXIodikgJiYgdi5sZW5ndGggPT09IDBcbn1cblxuQWJzdHJhY3RMZXZlbERPV04ucHJvdG90eXBlLml0ZXJhdG9yID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBvcHRpb25zICE9PSAnb2JqZWN0JykgeyBvcHRpb25zID0ge30gfVxuICBvcHRpb25zID0gdGhpcy5fc2V0dXBJdGVyYXRvck9wdGlvbnMob3B0aW9ucylcbiAgcmV0dXJuIHRoaXMuX2l0ZXJhdG9yKG9wdGlvbnMpXG59XG5cbkFic3RyYWN0TGV2ZWxET1dOLnByb3RvdHlwZS5faXRlcmF0b3IgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICByZXR1cm4gbmV3IEFic3RyYWN0SXRlcmF0b3IodGhpcylcbn1cblxuQWJzdHJhY3RMZXZlbERPV04ucHJvdG90eXBlLl9jaGFpbmVkQmF0Y2ggPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBuZXcgQWJzdHJhY3RDaGFpbmVkQmF0Y2godGhpcylcbn1cblxuQWJzdHJhY3RMZXZlbERPV04ucHJvdG90eXBlLl9zZXJpYWxpemVLZXkgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiBCdWZmZXIuaXNCdWZmZXIoa2V5KSA/IGtleSA6IFN0cmluZyhrZXkpXG59XG5cbkFic3RyYWN0TGV2ZWxET1dOLnByb3RvdHlwZS5fc2VyaWFsaXplVmFsdWUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgaWYgKHZhbHVlID09IG51bGwpIHJldHVybiAnJ1xuICByZXR1cm4gQnVmZmVyLmlzQnVmZmVyKHZhbHVlKSB8fCBwcm9jZXNzLmJyb3dzZXIgPyB2YWx1ZSA6IFN0cmluZyh2YWx1ZSlcbn1cblxuQWJzdHJhY3RMZXZlbERPV04ucHJvdG90eXBlLl9jaGVja0tleSA9IGZ1bmN0aW9uIChvYmosIHR5cGUpIHtcbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBvYmogPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBuZXcgRXJyb3IodHlwZSArICcgY2Fubm90IGJlIGBudWxsYCBvciBgdW5kZWZpbmVkYCcpXG4gIH1cblxuICBpZiAoQnVmZmVyLmlzQnVmZmVyKG9iaikgJiYgb2JqLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBuZXcgRXJyb3IodHlwZSArICcgY2Fubm90IGJlIGFuIGVtcHR5IEJ1ZmZlcicpXG4gIH1cblxuICBpZiAoU3RyaW5nKG9iaikgPT09ICcnKSB7XG4gICAgcmV0dXJuIG5ldyBFcnJvcih0eXBlICsgJyBjYW5ub3QgYmUgYW4gZW1wdHkgU3RyaW5nJylcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEFic3RyYWN0TGV2ZWxET1dOXG5cbi8qIFdFQlBBQ0sgVkFSIElOSkVDVElPTiAqL30uY2FsbCh0aGlzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLy4uL3Byb2Nlc3MvYnJvd3Nlci5qcyAqLyBcIi4uLy4uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanNcIiksIF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vLi4vYnVmZmVyL2luZGV4LmpzICovIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2J1ZmZlci9pbmRleC5qc1wiKS5CdWZmZXIpKVxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuLi8uLi9ub2RlX21vZHVsZXMvYWJzdHJhY3QtbGV2ZWxkb3duL2luZGV4LmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAvaG9tZS9odXluaG5ndXllbi9naXRodWIvY2F1c2FsaXR5L25vZGVfbW9kdWxlcy9hYnN0cmFjdC1sZXZlbGRvd24vaW5kZXguanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbmV4cG9ydHMuQWJzdHJhY3RMZXZlbERPV04gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL2Fic3RyYWN0LWxldmVsZG93biAqLyBcIi4uLy4uL25vZGVfbW9kdWxlcy9hYnN0cmFjdC1sZXZlbGRvd24vYWJzdHJhY3QtbGV2ZWxkb3duLmpzXCIpXG5leHBvcnRzLkFic3RyYWN0SXRlcmF0b3IgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL2Fic3RyYWN0LWl0ZXJhdG9yICovIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Fic3RyYWN0LWxldmVsZG93bi9hYnN0cmFjdC1pdGVyYXRvci5qc1wiKVxuZXhwb3J0cy5BYnN0cmFjdENoYWluZWRCYXRjaCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vYWJzdHJhY3QtY2hhaW5lZC1iYXRjaCAqLyBcIi4uLy4uL25vZGVfbW9kdWxlcy9hYnN0cmFjdC1sZXZlbGRvd24vYWJzdHJhY3QtY2hhaW5lZC1iYXRjaC5qc1wiKVxuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4uLy4uL25vZGVfbW9kdWxlcy9iYXNlNjQtanMvaW5kZXguanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC9ob21lL2h1eW5obmd1eWVuL2dpdGh1Yi9jYXVzYWxpdHkvbm9kZV9tb2R1bGVzL2Jhc2U2NC1qcy9pbmRleC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuZXhwb3J0cy5ieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aFxuZXhwb3J0cy50b0J5dGVBcnJheSA9IHRvQnl0ZUFycmF5XG5leHBvcnRzLmZyb21CeXRlQXJyYXkgPSBmcm9tQnl0ZUFycmF5XG5cbnZhciBsb29rdXAgPSBbXVxudmFyIHJldkxvb2t1cCA9IFtdXG52YXIgQXJyID0gdHlwZW9mIFVpbnQ4QXJyYXkgIT09ICd1bmRlZmluZWQnID8gVWludDhBcnJheSA6IEFycmF5XG5cbnZhciBjb2RlID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky8nXG5mb3IgKHZhciBpID0gMCwgbGVuID0gY29kZS5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICBsb29rdXBbaV0gPSBjb2RlW2ldXG4gIHJldkxvb2t1cFtjb2RlLmNoYXJDb2RlQXQoaSldID0gaVxufVxuXG4vLyBTdXBwb3J0IGRlY29kaW5nIFVSTC1zYWZlIGJhc2U2NCBzdHJpbmdzLCBhcyBOb2RlLmpzIGRvZXMuXG4vLyBTZWU6IGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0Jhc2U2NCNVUkxfYXBwbGljYXRpb25zXG5yZXZMb29rdXBbJy0nLmNoYXJDb2RlQXQoMCldID0gNjJcbnJldkxvb2t1cFsnXycuY2hhckNvZGVBdCgwKV0gPSA2M1xuXG5mdW5jdGlvbiBnZXRMZW5zIChiNjQpIHtcbiAgdmFyIGxlbiA9IGI2NC5sZW5ndGhcblxuICBpZiAobGVuICUgNCA+IDApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgc3RyaW5nLiBMZW5ndGggbXVzdCBiZSBhIG11bHRpcGxlIG9mIDQnKVxuICB9XG5cbiAgLy8gVHJpbSBvZmYgZXh0cmEgYnl0ZXMgYWZ0ZXIgcGxhY2Vob2xkZXIgYnl0ZXMgYXJlIGZvdW5kXG4gIC8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2JlYXRnYW1taXQvYmFzZTY0LWpzL2lzc3Vlcy80MlxuICB2YXIgdmFsaWRMZW4gPSBiNjQuaW5kZXhPZignPScpXG4gIGlmICh2YWxpZExlbiA9PT0gLTEpIHZhbGlkTGVuID0gbGVuXG5cbiAgdmFyIHBsYWNlSG9sZGVyc0xlbiA9IHZhbGlkTGVuID09PSBsZW5cbiAgICA/IDBcbiAgICA6IDQgLSAodmFsaWRMZW4gJSA0KVxuXG4gIHJldHVybiBbdmFsaWRMZW4sIHBsYWNlSG9sZGVyc0xlbl1cbn1cblxuLy8gYmFzZTY0IGlzIDQvMyArIHVwIHRvIHR3byBjaGFyYWN0ZXJzIG9mIHRoZSBvcmlnaW5hbCBkYXRhXG5mdW5jdGlvbiBieXRlTGVuZ3RoIChiNjQpIHtcbiAgdmFyIGxlbnMgPSBnZXRMZW5zKGI2NClcbiAgdmFyIHZhbGlkTGVuID0gbGVuc1swXVxuICB2YXIgcGxhY2VIb2xkZXJzTGVuID0gbGVuc1sxXVxuICByZXR1cm4gKCh2YWxpZExlbiArIHBsYWNlSG9sZGVyc0xlbikgKiAzIC8gNCkgLSBwbGFjZUhvbGRlcnNMZW5cbn1cblxuZnVuY3Rpb24gX2J5dGVMZW5ndGggKGI2NCwgdmFsaWRMZW4sIHBsYWNlSG9sZGVyc0xlbikge1xuICByZXR1cm4gKCh2YWxpZExlbiArIHBsYWNlSG9sZGVyc0xlbikgKiAzIC8gNCkgLSBwbGFjZUhvbGRlcnNMZW5cbn1cblxuZnVuY3Rpb24gdG9CeXRlQXJyYXkgKGI2NCkge1xuICB2YXIgdG1wXG4gIHZhciBsZW5zID0gZ2V0TGVucyhiNjQpXG4gIHZhciB2YWxpZExlbiA9IGxlbnNbMF1cbiAgdmFyIHBsYWNlSG9sZGVyc0xlbiA9IGxlbnNbMV1cblxuICB2YXIgYXJyID0gbmV3IEFycihfYnl0ZUxlbmd0aChiNjQsIHZhbGlkTGVuLCBwbGFjZUhvbGRlcnNMZW4pKVxuXG4gIHZhciBjdXJCeXRlID0gMFxuXG4gIC8vIGlmIHRoZXJlIGFyZSBwbGFjZWhvbGRlcnMsIG9ubHkgZ2V0IHVwIHRvIHRoZSBsYXN0IGNvbXBsZXRlIDQgY2hhcnNcbiAgdmFyIGxlbiA9IHBsYWNlSG9sZGVyc0xlbiA+IDBcbiAgICA/IHZhbGlkTGVuIC0gNFxuICAgIDogdmFsaWRMZW5cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSArPSA0KSB7XG4gICAgdG1wID1cbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSldIDw8IDE4KSB8XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAxKV0gPDwgMTIpIHxcbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDIpXSA8PCA2KSB8XG4gICAgICByZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDMpXVxuICAgIGFycltjdXJCeXRlKytdID0gKHRtcCA+PiAxNikgJiAweEZGXG4gICAgYXJyW2N1ckJ5dGUrK10gPSAodG1wID4+IDgpICYgMHhGRlxuICAgIGFycltjdXJCeXRlKytdID0gdG1wICYgMHhGRlxuICB9XG5cbiAgaWYgKHBsYWNlSG9sZGVyc0xlbiA9PT0gMikge1xuICAgIHRtcCA9XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkpXSA8PCAyKSB8XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAxKV0gPj4gNClcbiAgICBhcnJbY3VyQnl0ZSsrXSA9IHRtcCAmIDB4RkZcbiAgfVxuXG4gIGlmIChwbGFjZUhvbGRlcnNMZW4gPT09IDEpIHtcbiAgICB0bXAgPVxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpKV0gPDwgMTApIHxcbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDEpXSA8PCA0KSB8XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAyKV0gPj4gMilcbiAgICBhcnJbY3VyQnl0ZSsrXSA9ICh0bXAgPj4gOCkgJiAweEZGXG4gICAgYXJyW2N1ckJ5dGUrK10gPSB0bXAgJiAweEZGXG4gIH1cblxuICByZXR1cm4gYXJyXG59XG5cbmZ1bmN0aW9uIHRyaXBsZXRUb0Jhc2U2NCAobnVtKSB7XG4gIHJldHVybiBsb29rdXBbbnVtID4+IDE4ICYgMHgzRl0gK1xuICAgIGxvb2t1cFtudW0gPj4gMTIgJiAweDNGXSArXG4gICAgbG9va3VwW251bSA+PiA2ICYgMHgzRl0gK1xuICAgIGxvb2t1cFtudW0gJiAweDNGXVxufVxuXG5mdW5jdGlvbiBlbmNvZGVDaHVuayAodWludDgsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIHRtcFxuICB2YXIgb3V0cHV0ID0gW11cbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyBpICs9IDMpIHtcbiAgICB0bXAgPVxuICAgICAgKCh1aW50OFtpXSA8PCAxNikgJiAweEZGMDAwMCkgK1xuICAgICAgKCh1aW50OFtpICsgMV0gPDwgOCkgJiAweEZGMDApICtcbiAgICAgICh1aW50OFtpICsgMl0gJiAweEZGKVxuICAgIG91dHB1dC5wdXNoKHRyaXBsZXRUb0Jhc2U2NCh0bXApKVxuICB9XG4gIHJldHVybiBvdXRwdXQuam9pbignJylcbn1cblxuZnVuY3Rpb24gZnJvbUJ5dGVBcnJheSAodWludDgpIHtcbiAgdmFyIHRtcFxuICB2YXIgbGVuID0gdWludDgubGVuZ3RoXG4gIHZhciBleHRyYUJ5dGVzID0gbGVuICUgMyAvLyBpZiB3ZSBoYXZlIDEgYnl0ZSBsZWZ0LCBwYWQgMiBieXRlc1xuICB2YXIgcGFydHMgPSBbXVxuICB2YXIgbWF4Q2h1bmtMZW5ndGggPSAxNjM4MyAvLyBtdXN0IGJlIG11bHRpcGxlIG9mIDNcblxuICAvLyBnbyB0aHJvdWdoIHRoZSBhcnJheSBldmVyeSB0aHJlZSBieXRlcywgd2UnbGwgZGVhbCB3aXRoIHRyYWlsaW5nIHN0dWZmIGxhdGVyXG4gIGZvciAodmFyIGkgPSAwLCBsZW4yID0gbGVuIC0gZXh0cmFCeXRlczsgaSA8IGxlbjI7IGkgKz0gbWF4Q2h1bmtMZW5ndGgpIHtcbiAgICBwYXJ0cy5wdXNoKGVuY29kZUNodW5rKFxuICAgICAgdWludDgsIGksIChpICsgbWF4Q2h1bmtMZW5ndGgpID4gbGVuMiA/IGxlbjIgOiAoaSArIG1heENodW5rTGVuZ3RoKVxuICAgICkpXG4gIH1cblxuICAvLyBwYWQgdGhlIGVuZCB3aXRoIHplcm9zLCBidXQgbWFrZSBzdXJlIHRvIG5vdCBmb3JnZXQgdGhlIGV4dHJhIGJ5dGVzXG4gIGlmIChleHRyYUJ5dGVzID09PSAxKSB7XG4gICAgdG1wID0gdWludDhbbGVuIC0gMV1cbiAgICBwYXJ0cy5wdXNoKFxuICAgICAgbG9va3VwW3RtcCA+PiAyXSArXG4gICAgICBsb29rdXBbKHRtcCA8PCA0KSAmIDB4M0ZdICtcbiAgICAgICc9PSdcbiAgICApXG4gIH0gZWxzZSBpZiAoZXh0cmFCeXRlcyA9PT0gMikge1xuICAgIHRtcCA9ICh1aW50OFtsZW4gLSAyXSA8PCA4KSArIHVpbnQ4W2xlbiAtIDFdXG4gICAgcGFydHMucHVzaChcbiAgICAgIGxvb2t1cFt0bXAgPj4gMTBdICtcbiAgICAgIGxvb2t1cFsodG1wID4+IDQpICYgMHgzRl0gK1xuICAgICAgbG9va3VwWyh0bXAgPDwgMikgJiAweDNGXSArXG4gICAgICAnPSdcbiAgICApXG4gIH1cblxuICByZXR1cm4gcGFydHMuam9pbignJylcbn1cblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuLi8uLi9ub2RlX21vZHVsZXMvYnVmZmVyL2luZGV4LmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAvaG9tZS9odXluaG5ndXllbi9naXRodWIvY2F1c2FsaXR5L25vZGVfbW9kdWxlcy9idWZmZXIvaW5kZXguanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuLyogV0VCUEFDSyBWQVIgSU5KRUNUSU9OICovKGZ1bmN0aW9uKGdsb2JhbCkgey8qIVxuICogVGhlIGJ1ZmZlciBtb2R1bGUgZnJvbSBub2RlLmpzLCBmb3IgdGhlIGJyb3dzZXIuXG4gKlxuICogQGF1dGhvciAgIEZlcm9zcyBBYm91a2hhZGlqZWggPGZlcm9zc0BmZXJvc3Mub3JnPiA8aHR0cDovL2Zlcm9zcy5vcmc+XG4gKiBAbGljZW5zZSAgTUlUXG4gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXByb3RvICovXG5cblxuXG52YXIgYmFzZTY0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgYmFzZTY0LWpzICovIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Jhc2U2NC1qcy9pbmRleC5qc1wiKVxudmFyIGllZWU3NTQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBpZWVlNzU0ICovIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2llZWU3NTQvaW5kZXguanNcIilcbnZhciBpc0FycmF5ID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgaXNhcnJheSAqLyBcIi4uLy4uL25vZGVfbW9kdWxlcy9idWZmZXIvbm9kZV9tb2R1bGVzL2lzYXJyYXkvaW5kZXguanNcIilcblxuZXhwb3J0cy5CdWZmZXIgPSBCdWZmZXJcbmV4cG9ydHMuU2xvd0J1ZmZlciA9IFNsb3dCdWZmZXJcbmV4cG9ydHMuSU5TUEVDVF9NQVhfQllURVMgPSA1MFxuXG4vKipcbiAqIElmIGBCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVGA6XG4gKiAgID09PSB0cnVlICAgIFVzZSBVaW50OEFycmF5IGltcGxlbWVudGF0aW9uIChmYXN0ZXN0KVxuICogICA9PT0gZmFsc2UgICBVc2UgT2JqZWN0IGltcGxlbWVudGF0aW9uIChtb3N0IGNvbXBhdGlibGUsIGV2ZW4gSUU2KVxuICpcbiAqIEJyb3dzZXJzIHRoYXQgc3VwcG9ydCB0eXBlZCBhcnJheXMgYXJlIElFIDEwKywgRmlyZWZveCA0KywgQ2hyb21lIDcrLCBTYWZhcmkgNS4xKyxcbiAqIE9wZXJhIDExLjYrLCBpT1MgNC4yKy5cbiAqXG4gKiBEdWUgdG8gdmFyaW91cyBicm93c2VyIGJ1Z3MsIHNvbWV0aW1lcyB0aGUgT2JqZWN0IGltcGxlbWVudGF0aW9uIHdpbGwgYmUgdXNlZCBldmVuXG4gKiB3aGVuIHRoZSBicm93c2VyIHN1cHBvcnRzIHR5cGVkIGFycmF5cy5cbiAqXG4gKiBOb3RlOlxuICpcbiAqICAgLSBGaXJlZm94IDQtMjkgbGFja3Mgc3VwcG9ydCBmb3IgYWRkaW5nIG5ldyBwcm9wZXJ0aWVzIHRvIGBVaW50OEFycmF5YCBpbnN0YW5jZXMsXG4gKiAgICAgU2VlOiBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD02OTU0MzguXG4gKlxuICogICAtIENocm9tZSA5LTEwIGlzIG1pc3NpbmcgdGhlIGBUeXBlZEFycmF5LnByb3RvdHlwZS5zdWJhcnJheWAgZnVuY3Rpb24uXG4gKlxuICogICAtIElFMTAgaGFzIGEgYnJva2VuIGBUeXBlZEFycmF5LnByb3RvdHlwZS5zdWJhcnJheWAgZnVuY3Rpb24gd2hpY2ggcmV0dXJucyBhcnJheXMgb2ZcbiAqICAgICBpbmNvcnJlY3QgbGVuZ3RoIGluIHNvbWUgc2l0dWF0aW9ucy5cblxuICogV2UgZGV0ZWN0IHRoZXNlIGJ1Z2d5IGJyb3dzZXJzIGFuZCBzZXQgYEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUYCB0byBgZmFsc2VgIHNvIHRoZXlcbiAqIGdldCB0aGUgT2JqZWN0IGltcGxlbWVudGF0aW9uLCB3aGljaCBpcyBzbG93ZXIgYnV0IGJlaGF2ZXMgY29ycmVjdGx5LlxuICovXG5CdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCA9IGdsb2JhbC5UWVBFRF9BUlJBWV9TVVBQT1JUICE9PSB1bmRlZmluZWRcbiAgPyBnbG9iYWwuVFlQRURfQVJSQVlfU1VQUE9SVFxuICA6IHR5cGVkQXJyYXlTdXBwb3J0KClcblxuLypcbiAqIEV4cG9ydCBrTWF4TGVuZ3RoIGFmdGVyIHR5cGVkIGFycmF5IHN1cHBvcnQgaXMgZGV0ZXJtaW5lZC5cbiAqL1xuZXhwb3J0cy5rTWF4TGVuZ3RoID0ga01heExlbmd0aCgpXG5cbmZ1bmN0aW9uIHR5cGVkQXJyYXlTdXBwb3J0ICgpIHtcbiAgdHJ5IHtcbiAgICB2YXIgYXJyID0gbmV3IFVpbnQ4QXJyYXkoMSlcbiAgICBhcnIuX19wcm90b19fID0ge19fcHJvdG9fXzogVWludDhBcnJheS5wcm90b3R5cGUsIGZvbzogZnVuY3Rpb24gKCkgeyByZXR1cm4gNDIgfX1cbiAgICByZXR1cm4gYXJyLmZvbygpID09PSA0MiAmJiAvLyB0eXBlZCBhcnJheSBpbnN0YW5jZXMgY2FuIGJlIGF1Z21lbnRlZFxuICAgICAgICB0eXBlb2YgYXJyLnN1YmFycmF5ID09PSAnZnVuY3Rpb24nICYmIC8vIGNocm9tZSA5LTEwIGxhY2sgYHN1YmFycmF5YFxuICAgICAgICBhcnIuc3ViYXJyYXkoMSwgMSkuYnl0ZUxlbmd0aCA9PT0gMCAvLyBpZTEwIGhhcyBicm9rZW4gYHN1YmFycmF5YFxuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuZnVuY3Rpb24ga01heExlbmd0aCAoKSB7XG4gIHJldHVybiBCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVFxuICAgID8gMHg3ZmZmZmZmZlxuICAgIDogMHgzZmZmZmZmZlxufVxuXG5mdW5jdGlvbiBjcmVhdGVCdWZmZXIgKHRoYXQsIGxlbmd0aCkge1xuICBpZiAoa01heExlbmd0aCgpIDwgbGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0ludmFsaWQgdHlwZWQgYXJyYXkgbGVuZ3RoJylcbiAgfVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICAvLyBSZXR1cm4gYW4gYXVnbWVudGVkIGBVaW50OEFycmF5YCBpbnN0YW5jZSwgZm9yIGJlc3QgcGVyZm9ybWFuY2VcbiAgICB0aGF0ID0gbmV3IFVpbnQ4QXJyYXkobGVuZ3RoKVxuICAgIHRoYXQuX19wcm90b19fID0gQnVmZmVyLnByb3RvdHlwZVxuICB9IGVsc2Uge1xuICAgIC8vIEZhbGxiYWNrOiBSZXR1cm4gYW4gb2JqZWN0IGluc3RhbmNlIG9mIHRoZSBCdWZmZXIgY2xhc3NcbiAgICBpZiAodGhhdCA9PT0gbnVsbCkge1xuICAgICAgdGhhdCA9IG5ldyBCdWZmZXIobGVuZ3RoKVxuICAgIH1cbiAgICB0aGF0Lmxlbmd0aCA9IGxlbmd0aFxuICB9XG5cbiAgcmV0dXJuIHRoYXRcbn1cblxuLyoqXG4gKiBUaGUgQnVmZmVyIGNvbnN0cnVjdG9yIHJldHVybnMgaW5zdGFuY2VzIG9mIGBVaW50OEFycmF5YCB0aGF0IGhhdmUgdGhlaXJcbiAqIHByb3RvdHlwZSBjaGFuZ2VkIHRvIGBCdWZmZXIucHJvdG90eXBlYC4gRnVydGhlcm1vcmUsIGBCdWZmZXJgIGlzIGEgc3ViY2xhc3Mgb2ZcbiAqIGBVaW50OEFycmF5YCwgc28gdGhlIHJldHVybmVkIGluc3RhbmNlcyB3aWxsIGhhdmUgYWxsIHRoZSBub2RlIGBCdWZmZXJgIG1ldGhvZHNcbiAqIGFuZCB0aGUgYFVpbnQ4QXJyYXlgIG1ldGhvZHMuIFNxdWFyZSBicmFja2V0IG5vdGF0aW9uIHdvcmtzIGFzIGV4cGVjdGVkIC0tIGl0XG4gKiByZXR1cm5zIGEgc2luZ2xlIG9jdGV0LlxuICpcbiAqIFRoZSBgVWludDhBcnJheWAgcHJvdG90eXBlIHJlbWFpbnMgdW5tb2RpZmllZC5cbiAqL1xuXG5mdW5jdGlvbiBCdWZmZXIgKGFyZywgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKSB7XG4gIGlmICghQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQgJiYgISh0aGlzIGluc3RhbmNlb2YgQnVmZmVyKSkge1xuICAgIHJldHVybiBuZXcgQnVmZmVyKGFyZywgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKVxuICB9XG5cbiAgLy8gQ29tbW9uIGNhc2UuXG4gIGlmICh0eXBlb2YgYXJnID09PSAnbnVtYmVyJykge1xuICAgIGlmICh0eXBlb2YgZW5jb2RpbmdPck9mZnNldCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ0lmIGVuY29kaW5nIGlzIHNwZWNpZmllZCB0aGVuIHRoZSBmaXJzdCBhcmd1bWVudCBtdXN0IGJlIGEgc3RyaW5nJ1xuICAgICAgKVxuICAgIH1cbiAgICByZXR1cm4gYWxsb2NVbnNhZmUodGhpcywgYXJnKVxuICB9XG4gIHJldHVybiBmcm9tKHRoaXMsIGFyZywgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKVxufVxuXG5CdWZmZXIucG9vbFNpemUgPSA4MTkyIC8vIG5vdCB1c2VkIGJ5IHRoaXMgaW1wbGVtZW50YXRpb25cblxuLy8gVE9ETzogTGVnYWN5LCBub3QgbmVlZGVkIGFueW1vcmUuIFJlbW92ZSBpbiBuZXh0IG1ham9yIHZlcnNpb24uXG5CdWZmZXIuX2F1Z21lbnQgPSBmdW5jdGlvbiAoYXJyKSB7XG4gIGFyci5fX3Byb3RvX18gPSBCdWZmZXIucHJvdG90eXBlXG4gIHJldHVybiBhcnJcbn1cblxuZnVuY3Rpb24gZnJvbSAodGhhdCwgdmFsdWUsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aCkge1xuICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1widmFsdWVcIiBhcmd1bWVudCBtdXN0IG5vdCBiZSBhIG51bWJlcicpXG4gIH1cblxuICBpZiAodHlwZW9mIEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJyAmJiB2YWx1ZSBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSB7XG4gICAgcmV0dXJuIGZyb21BcnJheUJ1ZmZlcih0aGF0LCB2YWx1ZSwgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKVxuICB9XG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZnJvbVN0cmluZyh0aGF0LCB2YWx1ZSwgZW5jb2RpbmdPck9mZnNldClcbiAgfVxuXG4gIHJldHVybiBmcm9tT2JqZWN0KHRoYXQsIHZhbHVlKVxufVxuXG4vKipcbiAqIEZ1bmN0aW9uYWxseSBlcXVpdmFsZW50IHRvIEJ1ZmZlcihhcmcsIGVuY29kaW5nKSBidXQgdGhyb3dzIGEgVHlwZUVycm9yXG4gKiBpZiB2YWx1ZSBpcyBhIG51bWJlci5cbiAqIEJ1ZmZlci5mcm9tKHN0clssIGVuY29kaW5nXSlcbiAqIEJ1ZmZlci5mcm9tKGFycmF5KVxuICogQnVmZmVyLmZyb20oYnVmZmVyKVxuICogQnVmZmVyLmZyb20oYXJyYXlCdWZmZXJbLCBieXRlT2Zmc2V0WywgbGVuZ3RoXV0pXG4gKiovXG5CdWZmZXIuZnJvbSA9IGZ1bmN0aW9uICh2YWx1ZSwgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBmcm9tKG51bGwsIHZhbHVlLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpXG59XG5cbmlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICBCdWZmZXIucHJvdG90eXBlLl9fcHJvdG9fXyA9IFVpbnQ4QXJyYXkucHJvdG90eXBlXG4gIEJ1ZmZlci5fX3Byb3RvX18gPSBVaW50OEFycmF5XG4gIGlmICh0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wuc3BlY2llcyAmJlxuICAgICAgQnVmZmVyW1N5bWJvbC5zcGVjaWVzXSA9PT0gQnVmZmVyKSB7XG4gICAgLy8gRml4IHN1YmFycmF5KCkgaW4gRVMyMDE2LiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9mZXJvc3MvYnVmZmVyL3B1bGwvOTdcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQnVmZmVyLCBTeW1ib2wuc3BlY2llcywge1xuICAgICAgdmFsdWU6IG51bGwsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KVxuICB9XG59XG5cbmZ1bmN0aW9uIGFzc2VydFNpemUgKHNpemUpIHtcbiAgaWYgKHR5cGVvZiBzaXplICE9PSAnbnVtYmVyJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wic2l6ZVwiIGFyZ3VtZW50IG11c3QgYmUgYSBudW1iZXInKVxuICB9IGVsc2UgaWYgKHNpemUgPCAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1wic2l6ZVwiIGFyZ3VtZW50IG11c3Qgbm90IGJlIG5lZ2F0aXZlJylcbiAgfVxufVxuXG5mdW5jdGlvbiBhbGxvYyAodGhhdCwgc2l6ZSwgZmlsbCwgZW5jb2RpbmcpIHtcbiAgYXNzZXJ0U2l6ZShzaXplKVxuICBpZiAoc2l6ZSA8PSAwKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUJ1ZmZlcih0aGF0LCBzaXplKVxuICB9XG4gIGlmIChmaWxsICE9PSB1bmRlZmluZWQpIHtcbiAgICAvLyBPbmx5IHBheSBhdHRlbnRpb24gdG8gZW5jb2RpbmcgaWYgaXQncyBhIHN0cmluZy4gVGhpc1xuICAgIC8vIHByZXZlbnRzIGFjY2lkZW50YWxseSBzZW5kaW5nIGluIGEgbnVtYmVyIHRoYXQgd291bGRcbiAgICAvLyBiZSBpbnRlcnByZXR0ZWQgYXMgYSBzdGFydCBvZmZzZXQuXG4gICAgcmV0dXJuIHR5cGVvZiBlbmNvZGluZyA9PT0gJ3N0cmluZydcbiAgICAgID8gY3JlYXRlQnVmZmVyKHRoYXQsIHNpemUpLmZpbGwoZmlsbCwgZW5jb2RpbmcpXG4gICAgICA6IGNyZWF0ZUJ1ZmZlcih0aGF0LCBzaXplKS5maWxsKGZpbGwpXG4gIH1cbiAgcmV0dXJuIGNyZWF0ZUJ1ZmZlcih0aGF0LCBzaXplKVxufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgZmlsbGVkIEJ1ZmZlciBpbnN0YW5jZS5cbiAqIGFsbG9jKHNpemVbLCBmaWxsWywgZW5jb2RpbmddXSlcbiAqKi9cbkJ1ZmZlci5hbGxvYyA9IGZ1bmN0aW9uIChzaXplLCBmaWxsLCBlbmNvZGluZykge1xuICByZXR1cm4gYWxsb2MobnVsbCwgc2l6ZSwgZmlsbCwgZW5jb2RpbmcpXG59XG5cbmZ1bmN0aW9uIGFsbG9jVW5zYWZlICh0aGF0LCBzaXplKSB7XG4gIGFzc2VydFNpemUoc2l6ZSlcbiAgdGhhdCA9IGNyZWF0ZUJ1ZmZlcih0aGF0LCBzaXplIDwgMCA/IDAgOiBjaGVja2VkKHNpemUpIHwgMClcbiAgaWYgKCFCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2l6ZTsgKytpKSB7XG4gICAgICB0aGF0W2ldID0gMFxuICAgIH1cbiAgfVxuICByZXR1cm4gdGhhdFxufVxuXG4vKipcbiAqIEVxdWl2YWxlbnQgdG8gQnVmZmVyKG51bSksIGJ5IGRlZmF1bHQgY3JlYXRlcyBhIG5vbi16ZXJvLWZpbGxlZCBCdWZmZXIgaW5zdGFuY2UuXG4gKiAqL1xuQnVmZmVyLmFsbG9jVW5zYWZlID0gZnVuY3Rpb24gKHNpemUpIHtcbiAgcmV0dXJuIGFsbG9jVW5zYWZlKG51bGwsIHNpemUpXG59XG4vKipcbiAqIEVxdWl2YWxlbnQgdG8gU2xvd0J1ZmZlcihudW0pLCBieSBkZWZhdWx0IGNyZWF0ZXMgYSBub24temVyby1maWxsZWQgQnVmZmVyIGluc3RhbmNlLlxuICovXG5CdWZmZXIuYWxsb2NVbnNhZmVTbG93ID0gZnVuY3Rpb24gKHNpemUpIHtcbiAgcmV0dXJuIGFsbG9jVW5zYWZlKG51bGwsIHNpemUpXG59XG5cbmZ1bmN0aW9uIGZyb21TdHJpbmcgKHRoYXQsIHN0cmluZywgZW5jb2RpbmcpIHtcbiAgaWYgKHR5cGVvZiBlbmNvZGluZyAhPT0gJ3N0cmluZycgfHwgZW5jb2RpbmcgPT09ICcnKSB7XG4gICAgZW5jb2RpbmcgPSAndXRmOCdcbiAgfVxuXG4gIGlmICghQnVmZmVyLmlzRW5jb2RpbmcoZW5jb2RpbmcpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJlbmNvZGluZ1wiIG11c3QgYmUgYSB2YWxpZCBzdHJpbmcgZW5jb2RpbmcnKVxuICB9XG5cbiAgdmFyIGxlbmd0aCA9IGJ5dGVMZW5ndGgoc3RyaW5nLCBlbmNvZGluZykgfCAwXG4gIHRoYXQgPSBjcmVhdGVCdWZmZXIodGhhdCwgbGVuZ3RoKVxuXG4gIHZhciBhY3R1YWwgPSB0aGF0LndyaXRlKHN0cmluZywgZW5jb2RpbmcpXG5cbiAgaWYgKGFjdHVhbCAhPT0gbGVuZ3RoKSB7XG4gICAgLy8gV3JpdGluZyBhIGhleCBzdHJpbmcsIGZvciBleGFtcGxlLCB0aGF0IGNvbnRhaW5zIGludmFsaWQgY2hhcmFjdGVycyB3aWxsXG4gICAgLy8gY2F1c2UgZXZlcnl0aGluZyBhZnRlciB0aGUgZmlyc3QgaW52YWxpZCBjaGFyYWN0ZXIgdG8gYmUgaWdub3JlZC4gKGUuZy5cbiAgICAvLyAnYWJ4eGNkJyB3aWxsIGJlIHRyZWF0ZWQgYXMgJ2FiJylcbiAgICB0aGF0ID0gdGhhdC5zbGljZSgwLCBhY3R1YWwpXG4gIH1cblxuICByZXR1cm4gdGhhdFxufVxuXG5mdW5jdGlvbiBmcm9tQXJyYXlMaWtlICh0aGF0LCBhcnJheSkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoIDwgMCA/IDAgOiBjaGVja2VkKGFycmF5Lmxlbmd0aCkgfCAwXG4gIHRoYXQgPSBjcmVhdGVCdWZmZXIodGhhdCwgbGVuZ3RoKVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgdGhhdFtpXSA9IGFycmF5W2ldICYgMjU1XG4gIH1cbiAgcmV0dXJuIHRoYXRcbn1cblxuZnVuY3Rpb24gZnJvbUFycmF5QnVmZmVyICh0aGF0LCBhcnJheSwgYnl0ZU9mZnNldCwgbGVuZ3RoKSB7XG4gIGFycmF5LmJ5dGVMZW5ndGggLy8gdGhpcyB0aHJvd3MgaWYgYGFycmF5YCBpcyBub3QgYSB2YWxpZCBBcnJheUJ1ZmZlclxuXG4gIGlmIChieXRlT2Zmc2V0IDwgMCB8fCBhcnJheS5ieXRlTGVuZ3RoIDwgYnl0ZU9mZnNldCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdcXCdvZmZzZXRcXCcgaXMgb3V0IG9mIGJvdW5kcycpXG4gIH1cblxuICBpZiAoYXJyYXkuYnl0ZUxlbmd0aCA8IGJ5dGVPZmZzZXQgKyAobGVuZ3RoIHx8IDApKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1xcJ2xlbmd0aFxcJyBpcyBvdXQgb2YgYm91bmRzJylcbiAgfVxuXG4gIGlmIChieXRlT2Zmc2V0ID09PSB1bmRlZmluZWQgJiYgbGVuZ3RoID09PSB1bmRlZmluZWQpIHtcbiAgICBhcnJheSA9IG5ldyBVaW50OEFycmF5KGFycmF5KVxuICB9IGVsc2UgaWYgKGxlbmd0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgYXJyYXkgPSBuZXcgVWludDhBcnJheShhcnJheSwgYnl0ZU9mZnNldClcbiAgfSBlbHNlIHtcbiAgICBhcnJheSA9IG5ldyBVaW50OEFycmF5KGFycmF5LCBieXRlT2Zmc2V0LCBsZW5ndGgpXG4gIH1cblxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICAvLyBSZXR1cm4gYW4gYXVnbWVudGVkIGBVaW50OEFycmF5YCBpbnN0YW5jZSwgZm9yIGJlc3QgcGVyZm9ybWFuY2VcbiAgICB0aGF0ID0gYXJyYXlcbiAgICB0aGF0Ll9fcHJvdG9fXyA9IEJ1ZmZlci5wcm90b3R5cGVcbiAgfSBlbHNlIHtcbiAgICAvLyBGYWxsYmFjazogUmV0dXJuIGFuIG9iamVjdCBpbnN0YW5jZSBvZiB0aGUgQnVmZmVyIGNsYXNzXG4gICAgdGhhdCA9IGZyb21BcnJheUxpa2UodGhhdCwgYXJyYXkpXG4gIH1cbiAgcmV0dXJuIHRoYXRcbn1cblxuZnVuY3Rpb24gZnJvbU9iamVjdCAodGhhdCwgb2JqKSB7XG4gIGlmIChCdWZmZXIuaXNCdWZmZXIob2JqKSkge1xuICAgIHZhciBsZW4gPSBjaGVja2VkKG9iai5sZW5ndGgpIHwgMFxuICAgIHRoYXQgPSBjcmVhdGVCdWZmZXIodGhhdCwgbGVuKVxuXG4gICAgaWYgKHRoYXQubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gdGhhdFxuICAgIH1cblxuICAgIG9iai5jb3B5KHRoYXQsIDAsIDAsIGxlbilcbiAgICByZXR1cm4gdGhhdFxuICB9XG5cbiAgaWYgKG9iaikge1xuICAgIGlmICgodHlwZW9mIEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICBvYmouYnVmZmVyIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHx8ICdsZW5ndGgnIGluIG9iaikge1xuICAgICAgaWYgKHR5cGVvZiBvYmoubGVuZ3RoICE9PSAnbnVtYmVyJyB8fCBpc25hbihvYmoubGVuZ3RoKSkge1xuICAgICAgICByZXR1cm4gY3JlYXRlQnVmZmVyKHRoYXQsIDApXG4gICAgICB9XG4gICAgICByZXR1cm4gZnJvbUFycmF5TGlrZSh0aGF0LCBvYmopXG4gICAgfVxuXG4gICAgaWYgKG9iai50eXBlID09PSAnQnVmZmVyJyAmJiBpc0FycmF5KG9iai5kYXRhKSkge1xuICAgICAgcmV0dXJuIGZyb21BcnJheUxpa2UodGhhdCwgb2JqLmRhdGEpXG4gICAgfVxuICB9XG5cbiAgdGhyb3cgbmV3IFR5cGVFcnJvcignRmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhIHN0cmluZywgQnVmZmVyLCBBcnJheUJ1ZmZlciwgQXJyYXksIG9yIGFycmF5LWxpa2Ugb2JqZWN0LicpXG59XG5cbmZ1bmN0aW9uIGNoZWNrZWQgKGxlbmd0aCkge1xuICAvLyBOb3RlOiBjYW5ub3QgdXNlIGBsZW5ndGggPCBrTWF4TGVuZ3RoKClgIGhlcmUgYmVjYXVzZSB0aGF0IGZhaWxzIHdoZW5cbiAgLy8gbGVuZ3RoIGlzIE5hTiAod2hpY2ggaXMgb3RoZXJ3aXNlIGNvZXJjZWQgdG8gemVyby4pXG4gIGlmIChsZW5ndGggPj0ga01heExlbmd0aCgpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0F0dGVtcHQgdG8gYWxsb2NhdGUgQnVmZmVyIGxhcmdlciB0aGFuIG1heGltdW0gJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgJ3NpemU6IDB4JyArIGtNYXhMZW5ndGgoKS50b1N0cmluZygxNikgKyAnIGJ5dGVzJylcbiAgfVxuICByZXR1cm4gbGVuZ3RoIHwgMFxufVxuXG5mdW5jdGlvbiBTbG93QnVmZmVyIChsZW5ndGgpIHtcbiAgaWYgKCtsZW5ndGggIT0gbGVuZ3RoKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZXFlcWVxXG4gICAgbGVuZ3RoID0gMFxuICB9XG4gIHJldHVybiBCdWZmZXIuYWxsb2MoK2xlbmd0aClcbn1cblxuQnVmZmVyLmlzQnVmZmVyID0gZnVuY3Rpb24gaXNCdWZmZXIgKGIpIHtcbiAgcmV0dXJuICEhKGIgIT0gbnVsbCAmJiBiLl9pc0J1ZmZlcilcbn1cblxuQnVmZmVyLmNvbXBhcmUgPSBmdW5jdGlvbiBjb21wYXJlIChhLCBiKSB7XG4gIGlmICghQnVmZmVyLmlzQnVmZmVyKGEpIHx8ICFCdWZmZXIuaXNCdWZmZXIoYikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudHMgbXVzdCBiZSBCdWZmZXJzJylcbiAgfVxuXG4gIGlmIChhID09PSBiKSByZXR1cm4gMFxuXG4gIHZhciB4ID0gYS5sZW5ndGhcbiAgdmFyIHkgPSBiLmxlbmd0aFxuXG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBNYXRoLm1pbih4LCB5KTsgaSA8IGxlbjsgKytpKSB7XG4gICAgaWYgKGFbaV0gIT09IGJbaV0pIHtcbiAgICAgIHggPSBhW2ldXG4gICAgICB5ID0gYltpXVxuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cblxuICBpZiAoeCA8IHkpIHJldHVybiAtMVxuICBpZiAoeSA8IHgpIHJldHVybiAxXG4gIHJldHVybiAwXG59XG5cbkJ1ZmZlci5pc0VuY29kaW5nID0gZnVuY3Rpb24gaXNFbmNvZGluZyAoZW5jb2RpbmcpIHtcbiAgc3dpdGNoIChTdHJpbmcoZW5jb2RpbmcpLnRvTG93ZXJDYXNlKCkpIHtcbiAgICBjYXNlICdoZXgnOlxuICAgIGNhc2UgJ3V0ZjgnOlxuICAgIGNhc2UgJ3V0Zi04JzpcbiAgICBjYXNlICdhc2NpaSc6XG4gICAgY2FzZSAnbGF0aW4xJzpcbiAgICBjYXNlICdiaW5hcnknOlxuICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgY2FzZSAndWNzMic6XG4gICAgY2FzZSAndWNzLTInOlxuICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgIHJldHVybiB0cnVlXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbkJ1ZmZlci5jb25jYXQgPSBmdW5jdGlvbiBjb25jYXQgKGxpc3QsIGxlbmd0aCkge1xuICBpZiAoIWlzQXJyYXkobGlzdCkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcImxpc3RcIiBhcmd1bWVudCBtdXN0IGJlIGFuIEFycmF5IG9mIEJ1ZmZlcnMnKVxuICB9XG5cbiAgaWYgKGxpc3QubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIEJ1ZmZlci5hbGxvYygwKVxuICB9XG5cbiAgdmFyIGlcbiAgaWYgKGxlbmd0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgbGVuZ3RoID0gMFxuICAgIGZvciAoaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgKytpKSB7XG4gICAgICBsZW5ndGggKz0gbGlzdFtpXS5sZW5ndGhcbiAgICB9XG4gIH1cblxuICB2YXIgYnVmZmVyID0gQnVmZmVyLmFsbG9jVW5zYWZlKGxlbmd0aClcbiAgdmFyIHBvcyA9IDBcbiAgZm9yIChpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyArK2kpIHtcbiAgICB2YXIgYnVmID0gbGlzdFtpXVxuICAgIGlmICghQnVmZmVyLmlzQnVmZmVyKGJ1ZikpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wibGlzdFwiIGFyZ3VtZW50IG11c3QgYmUgYW4gQXJyYXkgb2YgQnVmZmVycycpXG4gICAgfVxuICAgIGJ1Zi5jb3B5KGJ1ZmZlciwgcG9zKVxuICAgIHBvcyArPSBidWYubGVuZ3RoXG4gIH1cbiAgcmV0dXJuIGJ1ZmZlclxufVxuXG5mdW5jdGlvbiBieXRlTGVuZ3RoIChzdHJpbmcsIGVuY29kaW5nKSB7XG4gIGlmIChCdWZmZXIuaXNCdWZmZXIoc3RyaW5nKSkge1xuICAgIHJldHVybiBzdHJpbmcubGVuZ3RoXG4gIH1cbiAgaWYgKHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIEFycmF5QnVmZmVyLmlzVmlldyA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgICAgKEFycmF5QnVmZmVyLmlzVmlldyhzdHJpbmcpIHx8IHN0cmluZyBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSkge1xuICAgIHJldHVybiBzdHJpbmcuYnl0ZUxlbmd0aFxuICB9XG4gIGlmICh0eXBlb2Ygc3RyaW5nICE9PSAnc3RyaW5nJykge1xuICAgIHN0cmluZyA9ICcnICsgc3RyaW5nXG4gIH1cblxuICB2YXIgbGVuID0gc3RyaW5nLmxlbmd0aFxuICBpZiAobGVuID09PSAwKSByZXR1cm4gMFxuXG4gIC8vIFVzZSBhIGZvciBsb29wIHRvIGF2b2lkIHJlY3Vyc2lvblxuICB2YXIgbG93ZXJlZENhc2UgPSBmYWxzZVxuICBmb3IgKDs7KSB7XG4gICAgc3dpdGNoIChlbmNvZGluZykge1xuICAgICAgY2FzZSAnYXNjaWknOlxuICAgICAgY2FzZSAnbGF0aW4xJzpcbiAgICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgICAgIHJldHVybiBsZW5cbiAgICAgIGNhc2UgJ3V0ZjgnOlxuICAgICAgY2FzZSAndXRmLTgnOlxuICAgICAgY2FzZSB1bmRlZmluZWQ6XG4gICAgICAgIHJldHVybiB1dGY4VG9CeXRlcyhzdHJpbmcpLmxlbmd0aFxuICAgICAgY2FzZSAndWNzMic6XG4gICAgICBjYXNlICd1Y3MtMic6XG4gICAgICBjYXNlICd1dGYxNmxlJzpcbiAgICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgICAgcmV0dXJuIGxlbiAqIDJcbiAgICAgIGNhc2UgJ2hleCc6XG4gICAgICAgIHJldHVybiBsZW4gPj4+IDFcbiAgICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgICAgIHJldHVybiBiYXNlNjRUb0J5dGVzKHN0cmluZykubGVuZ3RoXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAobG93ZXJlZENhc2UpIHJldHVybiB1dGY4VG9CeXRlcyhzdHJpbmcpLmxlbmd0aCAvLyBhc3N1bWUgdXRmOFxuICAgICAgICBlbmNvZGluZyA9ICgnJyArIGVuY29kaW5nKS50b0xvd2VyQ2FzZSgpXG4gICAgICAgIGxvd2VyZWRDYXNlID0gdHJ1ZVxuICAgIH1cbiAgfVxufVxuQnVmZmVyLmJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoXG5cbmZ1bmN0aW9uIHNsb3dUb1N0cmluZyAoZW5jb2RpbmcsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGxvd2VyZWRDYXNlID0gZmFsc2VcblxuICAvLyBObyBuZWVkIHRvIHZlcmlmeSB0aGF0IFwidGhpcy5sZW5ndGggPD0gTUFYX1VJTlQzMlwiIHNpbmNlIGl0J3MgYSByZWFkLW9ubHlcbiAgLy8gcHJvcGVydHkgb2YgYSB0eXBlZCBhcnJheS5cblxuICAvLyBUaGlzIGJlaGF2ZXMgbmVpdGhlciBsaWtlIFN0cmluZyBub3IgVWludDhBcnJheSBpbiB0aGF0IHdlIHNldCBzdGFydC9lbmRcbiAgLy8gdG8gdGhlaXIgdXBwZXIvbG93ZXIgYm91bmRzIGlmIHRoZSB2YWx1ZSBwYXNzZWQgaXMgb3V0IG9mIHJhbmdlLlxuICAvLyB1bmRlZmluZWQgaXMgaGFuZGxlZCBzcGVjaWFsbHkgYXMgcGVyIEVDTUEtMjYyIDZ0aCBFZGl0aW9uLFxuICAvLyBTZWN0aW9uIDEzLjMuMy43IFJ1bnRpbWUgU2VtYW50aWNzOiBLZXllZEJpbmRpbmdJbml0aWFsaXphdGlvbi5cbiAgaWYgKHN0YXJ0ID09PSB1bmRlZmluZWQgfHwgc3RhcnQgPCAwKSB7XG4gICAgc3RhcnQgPSAwXG4gIH1cbiAgLy8gUmV0dXJuIGVhcmx5IGlmIHN0YXJ0ID4gdGhpcy5sZW5ndGguIERvbmUgaGVyZSB0byBwcmV2ZW50IHBvdGVudGlhbCB1aW50MzJcbiAgLy8gY29lcmNpb24gZmFpbCBiZWxvdy5cbiAgaWYgKHN0YXJ0ID4gdGhpcy5sZW5ndGgpIHtcbiAgICByZXR1cm4gJydcbiAgfVxuXG4gIGlmIChlbmQgPT09IHVuZGVmaW5lZCB8fCBlbmQgPiB0aGlzLmxlbmd0aCkge1xuICAgIGVuZCA9IHRoaXMubGVuZ3RoXG4gIH1cblxuICBpZiAoZW5kIDw9IDApIHtcbiAgICByZXR1cm4gJydcbiAgfVxuXG4gIC8vIEZvcmNlIGNvZXJzaW9uIHRvIHVpbnQzMi4gVGhpcyB3aWxsIGFsc28gY29lcmNlIGZhbHNleS9OYU4gdmFsdWVzIHRvIDAuXG4gIGVuZCA+Pj49IDBcbiAgc3RhcnQgPj4+PSAwXG5cbiAgaWYgKGVuZCA8PSBzdGFydCkge1xuICAgIHJldHVybiAnJ1xuICB9XG5cbiAgaWYgKCFlbmNvZGluZykgZW5jb2RpbmcgPSAndXRmOCdcblxuICB3aGlsZSAodHJ1ZSkge1xuICAgIHN3aXRjaCAoZW5jb2RpbmcpIHtcbiAgICAgIGNhc2UgJ2hleCc6XG4gICAgICAgIHJldHVybiBoZXhTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICd1dGY4JzpcbiAgICAgIGNhc2UgJ3V0Zi04JzpcbiAgICAgICAgcmV0dXJuIHV0ZjhTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICdhc2NpaSc6XG4gICAgICAgIHJldHVybiBhc2NpaVNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ2xhdGluMSc6XG4gICAgICBjYXNlICdiaW5hcnknOlxuICAgICAgICByZXR1cm4gbGF0aW4xU2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAnYmFzZTY0JzpcbiAgICAgICAgcmV0dXJuIGJhc2U2NFNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ3VjczInOlxuICAgICAgY2FzZSAndWNzLTInOlxuICAgICAgY2FzZSAndXRmMTZsZSc6XG4gICAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICAgIHJldHVybiB1dGYxNmxlU2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKGxvd2VyZWRDYXNlKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdVbmtub3duIGVuY29kaW5nOiAnICsgZW5jb2RpbmcpXG4gICAgICAgIGVuY29kaW5nID0gKGVuY29kaW5nICsgJycpLnRvTG93ZXJDYXNlKClcbiAgICAgICAgbG93ZXJlZENhc2UgPSB0cnVlXG4gICAgfVxuICB9XG59XG5cbi8vIFRoZSBwcm9wZXJ0eSBpcyB1c2VkIGJ5IGBCdWZmZXIuaXNCdWZmZXJgIGFuZCBgaXMtYnVmZmVyYCAoaW4gU2FmYXJpIDUtNykgdG8gZGV0ZWN0XG4vLyBCdWZmZXIgaW5zdGFuY2VzLlxuQnVmZmVyLnByb3RvdHlwZS5faXNCdWZmZXIgPSB0cnVlXG5cbmZ1bmN0aW9uIHN3YXAgKGIsIG4sIG0pIHtcbiAgdmFyIGkgPSBiW25dXG4gIGJbbl0gPSBiW21dXG4gIGJbbV0gPSBpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuc3dhcDE2ID0gZnVuY3Rpb24gc3dhcDE2ICgpIHtcbiAgdmFyIGxlbiA9IHRoaXMubGVuZ3RoXG4gIGlmIChsZW4gJSAyICE9PSAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0J1ZmZlciBzaXplIG11c3QgYmUgYSBtdWx0aXBsZSBvZiAxNi1iaXRzJylcbiAgfVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSArPSAyKSB7XG4gICAgc3dhcCh0aGlzLCBpLCBpICsgMSlcbiAgfVxuICByZXR1cm4gdGhpc1xufVxuXG5CdWZmZXIucHJvdG90eXBlLnN3YXAzMiA9IGZ1bmN0aW9uIHN3YXAzMiAoKSB7XG4gIHZhciBsZW4gPSB0aGlzLmxlbmd0aFxuICBpZiAobGVuICUgNCAhPT0gMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdCdWZmZXIgc2l6ZSBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgMzItYml0cycpXG4gIH1cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkgKz0gNCkge1xuICAgIHN3YXAodGhpcywgaSwgaSArIDMpXG4gICAgc3dhcCh0aGlzLCBpICsgMSwgaSArIDIpXG4gIH1cbiAgcmV0dXJuIHRoaXNcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5zd2FwNjQgPSBmdW5jdGlvbiBzd2FwNjQgKCkge1xuICB2YXIgbGVuID0gdGhpcy5sZW5ndGhcbiAgaWYgKGxlbiAlIDggIT09IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQnVmZmVyIHNpemUgbXVzdCBiZSBhIG11bHRpcGxlIG9mIDY0LWJpdHMnKVxuICB9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpICs9IDgpIHtcbiAgICBzd2FwKHRoaXMsIGksIGkgKyA3KVxuICAgIHN3YXAodGhpcywgaSArIDEsIGkgKyA2KVxuICAgIHN3YXAodGhpcywgaSArIDIsIGkgKyA1KVxuICAgIHN3YXAodGhpcywgaSArIDMsIGkgKyA0KVxuICB9XG4gIHJldHVybiB0aGlzXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZyAoKSB7XG4gIHZhciBsZW5ndGggPSB0aGlzLmxlbmd0aCB8IDBcbiAgaWYgKGxlbmd0aCA9PT0gMCkgcmV0dXJuICcnXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSByZXR1cm4gdXRmOFNsaWNlKHRoaXMsIDAsIGxlbmd0aClcbiAgcmV0dXJuIHNsb3dUb1N0cmluZy5hcHBseSh0aGlzLCBhcmd1bWVudHMpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuZXF1YWxzID0gZnVuY3Rpb24gZXF1YWxzIChiKSB7XG4gIGlmICghQnVmZmVyLmlzQnVmZmVyKGIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudCBtdXN0IGJlIGEgQnVmZmVyJylcbiAgaWYgKHRoaXMgPT09IGIpIHJldHVybiB0cnVlXG4gIHJldHVybiBCdWZmZXIuY29tcGFyZSh0aGlzLCBiKSA9PT0gMFxufVxuXG5CdWZmZXIucHJvdG90eXBlLmluc3BlY3QgPSBmdW5jdGlvbiBpbnNwZWN0ICgpIHtcbiAgdmFyIHN0ciA9ICcnXG4gIHZhciBtYXggPSBleHBvcnRzLklOU1BFQ1RfTUFYX0JZVEVTXG4gIGlmICh0aGlzLmxlbmd0aCA+IDApIHtcbiAgICBzdHIgPSB0aGlzLnRvU3RyaW5nKCdoZXgnLCAwLCBtYXgpLm1hdGNoKC8uezJ9L2cpLmpvaW4oJyAnKVxuICAgIGlmICh0aGlzLmxlbmd0aCA+IG1heCkgc3RyICs9ICcgLi4uICdcbiAgfVxuICByZXR1cm4gJzxCdWZmZXIgJyArIHN0ciArICc+J1xufVxuXG5CdWZmZXIucHJvdG90eXBlLmNvbXBhcmUgPSBmdW5jdGlvbiBjb21wYXJlICh0YXJnZXQsIHN0YXJ0LCBlbmQsIHRoaXNTdGFydCwgdGhpc0VuZCkge1xuICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcih0YXJnZXQpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnQgbXVzdCBiZSBhIEJ1ZmZlcicpXG4gIH1cblxuICBpZiAoc3RhcnQgPT09IHVuZGVmaW5lZCkge1xuICAgIHN0YXJ0ID0gMFxuICB9XG4gIGlmIChlbmQgPT09IHVuZGVmaW5lZCkge1xuICAgIGVuZCA9IHRhcmdldCA/IHRhcmdldC5sZW5ndGggOiAwXG4gIH1cbiAgaWYgKHRoaXNTdGFydCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhpc1N0YXJ0ID0gMFxuICB9XG4gIGlmICh0aGlzRW5kID09PSB1bmRlZmluZWQpIHtcbiAgICB0aGlzRW5kID0gdGhpcy5sZW5ndGhcbiAgfVxuXG4gIGlmIChzdGFydCA8IDAgfHwgZW5kID4gdGFyZ2V0Lmxlbmd0aCB8fCB0aGlzU3RhcnQgPCAwIHx8IHRoaXNFbmQgPiB0aGlzLmxlbmd0aCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdvdXQgb2YgcmFuZ2UgaW5kZXgnKVxuICB9XG5cbiAgaWYgKHRoaXNTdGFydCA+PSB0aGlzRW5kICYmIHN0YXJ0ID49IGVuZCkge1xuICAgIHJldHVybiAwXG4gIH1cbiAgaWYgKHRoaXNTdGFydCA+PSB0aGlzRW5kKSB7XG4gICAgcmV0dXJuIC0xXG4gIH1cbiAgaWYgKHN0YXJ0ID49IGVuZCkge1xuICAgIHJldHVybiAxXG4gIH1cblxuICBzdGFydCA+Pj49IDBcbiAgZW5kID4+Pj0gMFxuICB0aGlzU3RhcnQgPj4+PSAwXG4gIHRoaXNFbmQgPj4+PSAwXG5cbiAgaWYgKHRoaXMgPT09IHRhcmdldCkgcmV0dXJuIDBcblxuICB2YXIgeCA9IHRoaXNFbmQgLSB0aGlzU3RhcnRcbiAgdmFyIHkgPSBlbmQgLSBzdGFydFxuICB2YXIgbGVuID0gTWF0aC5taW4oeCwgeSlcblxuICB2YXIgdGhpc0NvcHkgPSB0aGlzLnNsaWNlKHRoaXNTdGFydCwgdGhpc0VuZClcbiAgdmFyIHRhcmdldENvcHkgPSB0YXJnZXQuc2xpY2Uoc3RhcnQsIGVuZClcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKSB7XG4gICAgaWYgKHRoaXNDb3B5W2ldICE9PSB0YXJnZXRDb3B5W2ldKSB7XG4gICAgICB4ID0gdGhpc0NvcHlbaV1cbiAgICAgIHkgPSB0YXJnZXRDb3B5W2ldXG4gICAgICBicmVha1xuICAgIH1cbiAgfVxuXG4gIGlmICh4IDwgeSkgcmV0dXJuIC0xXG4gIGlmICh5IDwgeCkgcmV0dXJuIDFcbiAgcmV0dXJuIDBcbn1cblxuLy8gRmluZHMgZWl0aGVyIHRoZSBmaXJzdCBpbmRleCBvZiBgdmFsYCBpbiBgYnVmZmVyYCBhdCBvZmZzZXQgPj0gYGJ5dGVPZmZzZXRgLFxuLy8gT1IgdGhlIGxhc3QgaW5kZXggb2YgYHZhbGAgaW4gYGJ1ZmZlcmAgYXQgb2Zmc2V0IDw9IGBieXRlT2Zmc2V0YC5cbi8vXG4vLyBBcmd1bWVudHM6XG4vLyAtIGJ1ZmZlciAtIGEgQnVmZmVyIHRvIHNlYXJjaFxuLy8gLSB2YWwgLSBhIHN0cmluZywgQnVmZmVyLCBvciBudW1iZXJcbi8vIC0gYnl0ZU9mZnNldCAtIGFuIGluZGV4IGludG8gYGJ1ZmZlcmA7IHdpbGwgYmUgY2xhbXBlZCB0byBhbiBpbnQzMlxuLy8gLSBlbmNvZGluZyAtIGFuIG9wdGlvbmFsIGVuY29kaW5nLCByZWxldmFudCBpcyB2YWwgaXMgYSBzdHJpbmdcbi8vIC0gZGlyIC0gdHJ1ZSBmb3IgaW5kZXhPZiwgZmFsc2UgZm9yIGxhc3RJbmRleE9mXG5mdW5jdGlvbiBiaWRpcmVjdGlvbmFsSW5kZXhPZiAoYnVmZmVyLCB2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCBkaXIpIHtcbiAgLy8gRW1wdHkgYnVmZmVyIG1lYW5zIG5vIG1hdGNoXG4gIGlmIChidWZmZXIubGVuZ3RoID09PSAwKSByZXR1cm4gLTFcblxuICAvLyBOb3JtYWxpemUgYnl0ZU9mZnNldFxuICBpZiAodHlwZW9mIGJ5dGVPZmZzZXQgPT09ICdzdHJpbmcnKSB7XG4gICAgZW5jb2RpbmcgPSBieXRlT2Zmc2V0XG4gICAgYnl0ZU9mZnNldCA9IDBcbiAgfSBlbHNlIGlmIChieXRlT2Zmc2V0ID4gMHg3ZmZmZmZmZikge1xuICAgIGJ5dGVPZmZzZXQgPSAweDdmZmZmZmZmXG4gIH0gZWxzZSBpZiAoYnl0ZU9mZnNldCA8IC0weDgwMDAwMDAwKSB7XG4gICAgYnl0ZU9mZnNldCA9IC0weDgwMDAwMDAwXG4gIH1cbiAgYnl0ZU9mZnNldCA9ICtieXRlT2Zmc2V0ICAvLyBDb2VyY2UgdG8gTnVtYmVyLlxuICBpZiAoaXNOYU4oYnl0ZU9mZnNldCkpIHtcbiAgICAvLyBieXRlT2Zmc2V0OiBpdCBpdCdzIHVuZGVmaW5lZCwgbnVsbCwgTmFOLCBcImZvb1wiLCBldGMsIHNlYXJjaCB3aG9sZSBidWZmZXJcbiAgICBieXRlT2Zmc2V0ID0gZGlyID8gMCA6IChidWZmZXIubGVuZ3RoIC0gMSlcbiAgfVxuXG4gIC8vIE5vcm1hbGl6ZSBieXRlT2Zmc2V0OiBuZWdhdGl2ZSBvZmZzZXRzIHN0YXJ0IGZyb20gdGhlIGVuZCBvZiB0aGUgYnVmZmVyXG4gIGlmIChieXRlT2Zmc2V0IDwgMCkgYnl0ZU9mZnNldCA9IGJ1ZmZlci5sZW5ndGggKyBieXRlT2Zmc2V0XG4gIGlmIChieXRlT2Zmc2V0ID49IGJ1ZmZlci5sZW5ndGgpIHtcbiAgICBpZiAoZGlyKSByZXR1cm4gLTFcbiAgICBlbHNlIGJ5dGVPZmZzZXQgPSBidWZmZXIubGVuZ3RoIC0gMVxuICB9IGVsc2UgaWYgKGJ5dGVPZmZzZXQgPCAwKSB7XG4gICAgaWYgKGRpcikgYnl0ZU9mZnNldCA9IDBcbiAgICBlbHNlIHJldHVybiAtMVxuICB9XG5cbiAgLy8gTm9ybWFsaXplIHZhbFxuICBpZiAodHlwZW9mIHZhbCA9PT0gJ3N0cmluZycpIHtcbiAgICB2YWwgPSBCdWZmZXIuZnJvbSh2YWwsIGVuY29kaW5nKVxuICB9XG5cbiAgLy8gRmluYWxseSwgc2VhcmNoIGVpdGhlciBpbmRleE9mIChpZiBkaXIgaXMgdHJ1ZSkgb3IgbGFzdEluZGV4T2ZcbiAgaWYgKEJ1ZmZlci5pc0J1ZmZlcih2YWwpKSB7XG4gICAgLy8gU3BlY2lhbCBjYXNlOiBsb29raW5nIGZvciBlbXB0eSBzdHJpbmcvYnVmZmVyIGFsd2F5cyBmYWlsc1xuICAgIGlmICh2YWwubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gLTFcbiAgICB9XG4gICAgcmV0dXJuIGFycmF5SW5kZXhPZihidWZmZXIsIHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIGRpcilcbiAgfSBlbHNlIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJykge1xuICAgIHZhbCA9IHZhbCAmIDB4RkYgLy8gU2VhcmNoIGZvciBhIGJ5dGUgdmFsdWUgWzAtMjU1XVxuICAgIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCAmJlxuICAgICAgICB0eXBlb2YgVWludDhBcnJheS5wcm90b3R5cGUuaW5kZXhPZiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgaWYgKGRpcikge1xuICAgICAgICByZXR1cm4gVWludDhBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKGJ1ZmZlciwgdmFsLCBieXRlT2Zmc2V0KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFVpbnQ4QXJyYXkucHJvdG90eXBlLmxhc3RJbmRleE9mLmNhbGwoYnVmZmVyLCB2YWwsIGJ5dGVPZmZzZXQpXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBhcnJheUluZGV4T2YoYnVmZmVyLCBbIHZhbCBdLCBieXRlT2Zmc2V0LCBlbmNvZGluZywgZGlyKVxuICB9XG5cbiAgdGhyb3cgbmV3IFR5cGVFcnJvcigndmFsIG11c3QgYmUgc3RyaW5nLCBudW1iZXIgb3IgQnVmZmVyJylcbn1cblxuZnVuY3Rpb24gYXJyYXlJbmRleE9mIChhcnIsIHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIGRpcikge1xuICB2YXIgaW5kZXhTaXplID0gMVxuICB2YXIgYXJyTGVuZ3RoID0gYXJyLmxlbmd0aFxuICB2YXIgdmFsTGVuZ3RoID0gdmFsLmxlbmd0aFxuXG4gIGlmIChlbmNvZGluZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgZW5jb2RpbmcgPSBTdHJpbmcoZW5jb2RpbmcpLnRvTG93ZXJDYXNlKClcbiAgICBpZiAoZW5jb2RpbmcgPT09ICd1Y3MyJyB8fCBlbmNvZGluZyA9PT0gJ3Vjcy0yJyB8fFxuICAgICAgICBlbmNvZGluZyA9PT0gJ3V0ZjE2bGUnIHx8IGVuY29kaW5nID09PSAndXRmLTE2bGUnKSB7XG4gICAgICBpZiAoYXJyLmxlbmd0aCA8IDIgfHwgdmFsLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgcmV0dXJuIC0xXG4gICAgICB9XG4gICAgICBpbmRleFNpemUgPSAyXG4gICAgICBhcnJMZW5ndGggLz0gMlxuICAgICAgdmFsTGVuZ3RoIC89IDJcbiAgICAgIGJ5dGVPZmZzZXQgLz0gMlxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlYWQgKGJ1ZiwgaSkge1xuICAgIGlmIChpbmRleFNpemUgPT09IDEpIHtcbiAgICAgIHJldHVybiBidWZbaV1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGJ1Zi5yZWFkVUludDE2QkUoaSAqIGluZGV4U2l6ZSlcbiAgICB9XG4gIH1cblxuICB2YXIgaVxuICBpZiAoZGlyKSB7XG4gICAgdmFyIGZvdW5kSW5kZXggPSAtMVxuICAgIGZvciAoaSA9IGJ5dGVPZmZzZXQ7IGkgPCBhcnJMZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHJlYWQoYXJyLCBpKSA9PT0gcmVhZCh2YWwsIGZvdW5kSW5kZXggPT09IC0xID8gMCA6IGkgLSBmb3VuZEluZGV4KSkge1xuICAgICAgICBpZiAoZm91bmRJbmRleCA9PT0gLTEpIGZvdW5kSW5kZXggPSBpXG4gICAgICAgIGlmIChpIC0gZm91bmRJbmRleCArIDEgPT09IHZhbExlbmd0aCkgcmV0dXJuIGZvdW5kSW5kZXggKiBpbmRleFNpemVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChmb3VuZEluZGV4ICE9PSAtMSkgaSAtPSBpIC0gZm91bmRJbmRleFxuICAgICAgICBmb3VuZEluZGV4ID0gLTFcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKGJ5dGVPZmZzZXQgKyB2YWxMZW5ndGggPiBhcnJMZW5ndGgpIGJ5dGVPZmZzZXQgPSBhcnJMZW5ndGggLSB2YWxMZW5ndGhcbiAgICBmb3IgKGkgPSBieXRlT2Zmc2V0OyBpID49IDA7IGktLSkge1xuICAgICAgdmFyIGZvdW5kID0gdHJ1ZVxuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB2YWxMZW5ndGg7IGorKykge1xuICAgICAgICBpZiAocmVhZChhcnIsIGkgKyBqKSAhPT0gcmVhZCh2YWwsIGopKSB7XG4gICAgICAgICAgZm91bmQgPSBmYWxzZVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChmb3VuZCkgcmV0dXJuIGlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gLTFcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5pbmNsdWRlcyA9IGZ1bmN0aW9uIGluY2x1ZGVzICh2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nKSB7XG4gIHJldHVybiB0aGlzLmluZGV4T2YodmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZykgIT09IC0xXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuaW5kZXhPZiA9IGZ1bmN0aW9uIGluZGV4T2YgKHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcpIHtcbiAgcmV0dXJuIGJpZGlyZWN0aW9uYWxJbmRleE9mKHRoaXMsIHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIHRydWUpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUubGFzdEluZGV4T2YgPSBmdW5jdGlvbiBsYXN0SW5kZXhPZiAodmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZykge1xuICByZXR1cm4gYmlkaXJlY3Rpb25hbEluZGV4T2YodGhpcywgdmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZywgZmFsc2UpXG59XG5cbmZ1bmN0aW9uIGhleFdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgb2Zmc2V0ID0gTnVtYmVyKG9mZnNldCkgfHwgMFxuICB2YXIgcmVtYWluaW5nID0gYnVmLmxlbmd0aCAtIG9mZnNldFxuICBpZiAoIWxlbmd0aCkge1xuICAgIGxlbmd0aCA9IHJlbWFpbmluZ1xuICB9IGVsc2Uge1xuICAgIGxlbmd0aCA9IE51bWJlcihsZW5ndGgpXG4gICAgaWYgKGxlbmd0aCA+IHJlbWFpbmluZykge1xuICAgICAgbGVuZ3RoID0gcmVtYWluaW5nXG4gICAgfVxuICB9XG5cbiAgLy8gbXVzdCBiZSBhbiBldmVuIG51bWJlciBvZiBkaWdpdHNcbiAgdmFyIHN0ckxlbiA9IHN0cmluZy5sZW5ndGhcbiAgaWYgKHN0ckxlbiAlIDIgIT09IDApIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgaGV4IHN0cmluZycpXG5cbiAgaWYgKGxlbmd0aCA+IHN0ckxlbiAvIDIpIHtcbiAgICBsZW5ndGggPSBzdHJMZW4gLyAyXG4gIH1cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7ICsraSkge1xuICAgIHZhciBwYXJzZWQgPSBwYXJzZUludChzdHJpbmcuc3Vic3RyKGkgKiAyLCAyKSwgMTYpXG4gICAgaWYgKGlzTmFOKHBhcnNlZCkpIHJldHVybiBpXG4gICAgYnVmW29mZnNldCArIGldID0gcGFyc2VkXG4gIH1cbiAgcmV0dXJuIGlcbn1cblxuZnVuY3Rpb24gdXRmOFdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGJsaXRCdWZmZXIodXRmOFRvQnl0ZXMoc3RyaW5nLCBidWYubGVuZ3RoIC0gb2Zmc2V0KSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbn1cblxuZnVuY3Rpb24gYXNjaWlXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBibGl0QnVmZmVyKGFzY2lpVG9CeXRlcyhzdHJpbmcpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxufVxuXG5mdW5jdGlvbiBsYXRpbjFXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBhc2NpaVdyaXRlKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcbn1cblxuZnVuY3Rpb24gYmFzZTY0V3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gYmxpdEJ1ZmZlcihiYXNlNjRUb0J5dGVzKHN0cmluZyksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG59XG5cbmZ1bmN0aW9uIHVjczJXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBibGl0QnVmZmVyKHV0ZjE2bGVUb0J5dGVzKHN0cmluZywgYnVmLmxlbmd0aCAtIG9mZnNldCksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGUgPSBmdW5jdGlvbiB3cml0ZSAoc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCwgZW5jb2RpbmcpIHtcbiAgLy8gQnVmZmVyI3dyaXRlKHN0cmluZylcbiAgaWYgKG9mZnNldCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgZW5jb2RpbmcgPSAndXRmOCdcbiAgICBsZW5ndGggPSB0aGlzLmxlbmd0aFxuICAgIG9mZnNldCA9IDBcbiAgLy8gQnVmZmVyI3dyaXRlKHN0cmluZywgZW5jb2RpbmcpXG4gIH0gZWxzZSBpZiAobGVuZ3RoID09PSB1bmRlZmluZWQgJiYgdHlwZW9mIG9mZnNldCA9PT0gJ3N0cmluZycpIHtcbiAgICBlbmNvZGluZyA9IG9mZnNldFxuICAgIGxlbmd0aCA9IHRoaXMubGVuZ3RoXG4gICAgb2Zmc2V0ID0gMFxuICAvLyBCdWZmZXIjd3JpdGUoc3RyaW5nLCBvZmZzZXRbLCBsZW5ndGhdWywgZW5jb2RpbmddKVxuICB9IGVsc2UgaWYgKGlzRmluaXRlKG9mZnNldCkpIHtcbiAgICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gICAgaWYgKGlzRmluaXRlKGxlbmd0aCkpIHtcbiAgICAgIGxlbmd0aCA9IGxlbmd0aCB8IDBcbiAgICAgIGlmIChlbmNvZGluZyA9PT0gdW5kZWZpbmVkKSBlbmNvZGluZyA9ICd1dGY4J1xuICAgIH0gZWxzZSB7XG4gICAgICBlbmNvZGluZyA9IGxlbmd0aFxuICAgICAgbGVuZ3RoID0gdW5kZWZpbmVkXG4gICAgfVxuICAvLyBsZWdhY3kgd3JpdGUoc3RyaW5nLCBlbmNvZGluZywgb2Zmc2V0LCBsZW5ndGgpIC0gcmVtb3ZlIGluIHYwLjEzXG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgJ0J1ZmZlci53cml0ZShzdHJpbmcsIGVuY29kaW5nLCBvZmZzZXRbLCBsZW5ndGhdKSBpcyBubyBsb25nZXIgc3VwcG9ydGVkJ1xuICAgIClcbiAgfVxuXG4gIHZhciByZW1haW5pbmcgPSB0aGlzLmxlbmd0aCAtIG9mZnNldFxuICBpZiAobGVuZ3RoID09PSB1bmRlZmluZWQgfHwgbGVuZ3RoID4gcmVtYWluaW5nKSBsZW5ndGggPSByZW1haW5pbmdcblxuICBpZiAoKHN0cmluZy5sZW5ndGggPiAwICYmIChsZW5ndGggPCAwIHx8IG9mZnNldCA8IDApKSB8fCBvZmZzZXQgPiB0aGlzLmxlbmd0aCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdBdHRlbXB0IHRvIHdyaXRlIG91dHNpZGUgYnVmZmVyIGJvdW5kcycpXG4gIH1cblxuICBpZiAoIWVuY29kaW5nKSBlbmNvZGluZyA9ICd1dGY4J1xuXG4gIHZhciBsb3dlcmVkQ2FzZSA9IGZhbHNlXG4gIGZvciAoOzspIHtcbiAgICBzd2l0Y2ggKGVuY29kaW5nKSB7XG4gICAgICBjYXNlICdoZXgnOlxuICAgICAgICByZXR1cm4gaGV4V3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgY2FzZSAndXRmOCc6XG4gICAgICBjYXNlICd1dGYtOCc6XG4gICAgICAgIHJldHVybiB1dGY4V3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgY2FzZSAnYXNjaWknOlxuICAgICAgICByZXR1cm4gYXNjaWlXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBjYXNlICdsYXRpbjEnOlxuICAgICAgY2FzZSAnYmluYXJ5JzpcbiAgICAgICAgcmV0dXJuIGxhdGluMVdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgICAgIC8vIFdhcm5pbmc6IG1heExlbmd0aCBub3QgdGFrZW4gaW50byBhY2NvdW50IGluIGJhc2U2NFdyaXRlXG4gICAgICAgIHJldHVybiBiYXNlNjRXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBjYXNlICd1Y3MyJzpcbiAgICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgICByZXR1cm4gdWNzMldyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlmIChsb3dlcmVkQ2FzZSkgdGhyb3cgbmV3IFR5cGVFcnJvcignVW5rbm93biBlbmNvZGluZzogJyArIGVuY29kaW5nKVxuICAgICAgICBlbmNvZGluZyA9ICgnJyArIGVuY29kaW5nKS50b0xvd2VyQ2FzZSgpXG4gICAgICAgIGxvd2VyZWRDYXNlID0gdHJ1ZVxuICAgIH1cbiAgfVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uIHRvSlNPTiAoKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogJ0J1ZmZlcicsXG4gICAgZGF0YTogQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwodGhpcy5fYXJyIHx8IHRoaXMsIDApXG4gIH1cbn1cblxuZnVuY3Rpb24gYmFzZTY0U2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICBpZiAoc3RhcnQgPT09IDAgJiYgZW5kID09PSBidWYubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGJhc2U2NC5mcm9tQnl0ZUFycmF5KGJ1ZilcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gYmFzZTY0LmZyb21CeXRlQXJyYXkoYnVmLnNsaWNlKHN0YXJ0LCBlbmQpKVxuICB9XG59XG5cbmZ1bmN0aW9uIHV0ZjhTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIGVuZCA9IE1hdGgubWluKGJ1Zi5sZW5ndGgsIGVuZClcbiAgdmFyIHJlcyA9IFtdXG5cbiAgdmFyIGkgPSBzdGFydFxuICB3aGlsZSAoaSA8IGVuZCkge1xuICAgIHZhciBmaXJzdEJ5dGUgPSBidWZbaV1cbiAgICB2YXIgY29kZVBvaW50ID0gbnVsbFxuICAgIHZhciBieXRlc1BlclNlcXVlbmNlID0gKGZpcnN0Qnl0ZSA+IDB4RUYpID8gNFxuICAgICAgOiAoZmlyc3RCeXRlID4gMHhERikgPyAzXG4gICAgICA6IChmaXJzdEJ5dGUgPiAweEJGKSA/IDJcbiAgICAgIDogMVxuXG4gICAgaWYgKGkgKyBieXRlc1BlclNlcXVlbmNlIDw9IGVuZCkge1xuICAgICAgdmFyIHNlY29uZEJ5dGUsIHRoaXJkQnl0ZSwgZm91cnRoQnl0ZSwgdGVtcENvZGVQb2ludFxuXG4gICAgICBzd2l0Y2ggKGJ5dGVzUGVyU2VxdWVuY2UpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGlmIChmaXJzdEJ5dGUgPCAweDgwKSB7XG4gICAgICAgICAgICBjb2RlUG9pbnQgPSBmaXJzdEJ5dGVcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIHNlY29uZEJ5dGUgPSBidWZbaSArIDFdXG4gICAgICAgICAgaWYgKChzZWNvbmRCeXRlICYgMHhDMCkgPT09IDB4ODApIHtcbiAgICAgICAgICAgIHRlbXBDb2RlUG9pbnQgPSAoZmlyc3RCeXRlICYgMHgxRikgPDwgMHg2IHwgKHNlY29uZEJ5dGUgJiAweDNGKVxuICAgICAgICAgICAgaWYgKHRlbXBDb2RlUG9pbnQgPiAweDdGKSB7XG4gICAgICAgICAgICAgIGNvZGVQb2ludCA9IHRlbXBDb2RlUG9pbnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIHNlY29uZEJ5dGUgPSBidWZbaSArIDFdXG4gICAgICAgICAgdGhpcmRCeXRlID0gYnVmW2kgKyAyXVxuICAgICAgICAgIGlmICgoc2Vjb25kQnl0ZSAmIDB4QzApID09PSAweDgwICYmICh0aGlyZEJ5dGUgJiAweEMwKSA9PT0gMHg4MCkge1xuICAgICAgICAgICAgdGVtcENvZGVQb2ludCA9IChmaXJzdEJ5dGUgJiAweEYpIDw8IDB4QyB8IChzZWNvbmRCeXRlICYgMHgzRikgPDwgMHg2IHwgKHRoaXJkQnl0ZSAmIDB4M0YpXG4gICAgICAgICAgICBpZiAodGVtcENvZGVQb2ludCA+IDB4N0ZGICYmICh0ZW1wQ29kZVBvaW50IDwgMHhEODAwIHx8IHRlbXBDb2RlUG9pbnQgPiAweERGRkYpKSB7XG4gICAgICAgICAgICAgIGNvZGVQb2ludCA9IHRlbXBDb2RlUG9pbnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIHNlY29uZEJ5dGUgPSBidWZbaSArIDFdXG4gICAgICAgICAgdGhpcmRCeXRlID0gYnVmW2kgKyAyXVxuICAgICAgICAgIGZvdXJ0aEJ5dGUgPSBidWZbaSArIDNdXG4gICAgICAgICAgaWYgKChzZWNvbmRCeXRlICYgMHhDMCkgPT09IDB4ODAgJiYgKHRoaXJkQnl0ZSAmIDB4QzApID09PSAweDgwICYmIChmb3VydGhCeXRlICYgMHhDMCkgPT09IDB4ODApIHtcbiAgICAgICAgICAgIHRlbXBDb2RlUG9pbnQgPSAoZmlyc3RCeXRlICYgMHhGKSA8PCAweDEyIHwgKHNlY29uZEJ5dGUgJiAweDNGKSA8PCAweEMgfCAodGhpcmRCeXRlICYgMHgzRikgPDwgMHg2IHwgKGZvdXJ0aEJ5dGUgJiAweDNGKVxuICAgICAgICAgICAgaWYgKHRlbXBDb2RlUG9pbnQgPiAweEZGRkYgJiYgdGVtcENvZGVQb2ludCA8IDB4MTEwMDAwKSB7XG4gICAgICAgICAgICAgIGNvZGVQb2ludCA9IHRlbXBDb2RlUG9pbnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNvZGVQb2ludCA9PT0gbnVsbCkge1xuICAgICAgLy8gd2UgZGlkIG5vdCBnZW5lcmF0ZSBhIHZhbGlkIGNvZGVQb2ludCBzbyBpbnNlcnQgYVxuICAgICAgLy8gcmVwbGFjZW1lbnQgY2hhciAoVStGRkZEKSBhbmQgYWR2YW5jZSBvbmx5IDEgYnl0ZVxuICAgICAgY29kZVBvaW50ID0gMHhGRkZEXG4gICAgICBieXRlc1BlclNlcXVlbmNlID0gMVxuICAgIH0gZWxzZSBpZiAoY29kZVBvaW50ID4gMHhGRkZGKSB7XG4gICAgICAvLyBlbmNvZGUgdG8gdXRmMTYgKHN1cnJvZ2F0ZSBwYWlyIGRhbmNlKVxuICAgICAgY29kZVBvaW50IC09IDB4MTAwMDBcbiAgICAgIHJlcy5wdXNoKGNvZGVQb2ludCA+Pj4gMTAgJiAweDNGRiB8IDB4RDgwMClcbiAgICAgIGNvZGVQb2ludCA9IDB4REMwMCB8IGNvZGVQb2ludCAmIDB4M0ZGXG4gICAgfVxuXG4gICAgcmVzLnB1c2goY29kZVBvaW50KVxuICAgIGkgKz0gYnl0ZXNQZXJTZXF1ZW5jZVxuICB9XG5cbiAgcmV0dXJuIGRlY29kZUNvZGVQb2ludHNBcnJheShyZXMpXG59XG5cbi8vIEJhc2VkIG9uIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzIyNzQ3MjcyLzY4MDc0MiwgdGhlIGJyb3dzZXIgd2l0aFxuLy8gdGhlIGxvd2VzdCBsaW1pdCBpcyBDaHJvbWUsIHdpdGggMHgxMDAwMCBhcmdzLlxuLy8gV2UgZ28gMSBtYWduaXR1ZGUgbGVzcywgZm9yIHNhZmV0eVxudmFyIE1BWF9BUkdVTUVOVFNfTEVOR1RIID0gMHgxMDAwXG5cbmZ1bmN0aW9uIGRlY29kZUNvZGVQb2ludHNBcnJheSAoY29kZVBvaW50cykge1xuICB2YXIgbGVuID0gY29kZVBvaW50cy5sZW5ndGhcbiAgaWYgKGxlbiA8PSBNQVhfQVJHVU1FTlRTX0xFTkdUSCkge1xuICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KFN0cmluZywgY29kZVBvaW50cykgLy8gYXZvaWQgZXh0cmEgc2xpY2UoKVxuICB9XG5cbiAgLy8gRGVjb2RlIGluIGNodW5rcyB0byBhdm9pZCBcImNhbGwgc3RhY2sgc2l6ZSBleGNlZWRlZFwiLlxuICB2YXIgcmVzID0gJydcbiAgdmFyIGkgPSAwXG4gIHdoaWxlIChpIDwgbGVuKSB7XG4gICAgcmVzICs9IFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkoXG4gICAgICBTdHJpbmcsXG4gICAgICBjb2RlUG9pbnRzLnNsaWNlKGksIGkgKz0gTUFYX0FSR1VNRU5UU19MRU5HVEgpXG4gICAgKVxuICB9XG4gIHJldHVybiByZXNcbn1cblxuZnVuY3Rpb24gYXNjaWlTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHZhciByZXQgPSAnJ1xuICBlbmQgPSBNYXRoLm1pbihidWYubGVuZ3RoLCBlbmQpXG5cbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyArK2kpIHtcbiAgICByZXQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShidWZbaV0gJiAweDdGKVxuICB9XG4gIHJldHVybiByZXRcbn1cblxuZnVuY3Rpb24gbGF0aW4xU2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICB2YXIgcmV0ID0gJydcbiAgZW5kID0gTWF0aC5taW4oYnVmLmxlbmd0aCwgZW5kKVxuXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgKytpKSB7XG4gICAgcmV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnVmW2ldKVxuICB9XG4gIHJldHVybiByZXRcbn1cblxuZnVuY3Rpb24gaGV4U2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICB2YXIgbGVuID0gYnVmLmxlbmd0aFxuXG4gIGlmICghc3RhcnQgfHwgc3RhcnQgPCAwKSBzdGFydCA9IDBcbiAgaWYgKCFlbmQgfHwgZW5kIDwgMCB8fCBlbmQgPiBsZW4pIGVuZCA9IGxlblxuXG4gIHZhciBvdXQgPSAnJ1xuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7ICsraSkge1xuICAgIG91dCArPSB0b0hleChidWZbaV0pXG4gIH1cbiAgcmV0dXJuIG91dFxufVxuXG5mdW5jdGlvbiB1dGYxNmxlU2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICB2YXIgYnl0ZXMgPSBidWYuc2xpY2Uoc3RhcnQsIGVuZClcbiAgdmFyIHJlcyA9ICcnXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYnl0ZXMubGVuZ3RoOyBpICs9IDIpIHtcbiAgICByZXMgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShieXRlc1tpXSArIGJ5dGVzW2kgKyAxXSAqIDI1NilcbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuc2xpY2UgPSBmdW5jdGlvbiBzbGljZSAoc3RhcnQsIGVuZCkge1xuICB2YXIgbGVuID0gdGhpcy5sZW5ndGhcbiAgc3RhcnQgPSB+fnN0YXJ0XG4gIGVuZCA9IGVuZCA9PT0gdW5kZWZpbmVkID8gbGVuIDogfn5lbmRcblxuICBpZiAoc3RhcnQgPCAwKSB7XG4gICAgc3RhcnQgKz0gbGVuXG4gICAgaWYgKHN0YXJ0IDwgMCkgc3RhcnQgPSAwXG4gIH0gZWxzZSBpZiAoc3RhcnQgPiBsZW4pIHtcbiAgICBzdGFydCA9IGxlblxuICB9XG5cbiAgaWYgKGVuZCA8IDApIHtcbiAgICBlbmQgKz0gbGVuXG4gICAgaWYgKGVuZCA8IDApIGVuZCA9IDBcbiAgfSBlbHNlIGlmIChlbmQgPiBsZW4pIHtcbiAgICBlbmQgPSBsZW5cbiAgfVxuXG4gIGlmIChlbmQgPCBzdGFydCkgZW5kID0gc3RhcnRcblxuICB2YXIgbmV3QnVmXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIG5ld0J1ZiA9IHRoaXMuc3ViYXJyYXkoc3RhcnQsIGVuZClcbiAgICBuZXdCdWYuX19wcm90b19fID0gQnVmZmVyLnByb3RvdHlwZVxuICB9IGVsc2Uge1xuICAgIHZhciBzbGljZUxlbiA9IGVuZCAtIHN0YXJ0XG4gICAgbmV3QnVmID0gbmV3IEJ1ZmZlcihzbGljZUxlbiwgdW5kZWZpbmVkKVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2xpY2VMZW47ICsraSkge1xuICAgICAgbmV3QnVmW2ldID0gdGhpc1tpICsgc3RhcnRdXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5ld0J1ZlxufVxuXG4vKlxuICogTmVlZCB0byBtYWtlIHN1cmUgdGhhdCBidWZmZXIgaXNuJ3QgdHJ5aW5nIHRvIHdyaXRlIG91dCBvZiBib3VuZHMuXG4gKi9cbmZ1bmN0aW9uIGNoZWNrT2Zmc2V0IChvZmZzZXQsIGV4dCwgbGVuZ3RoKSB7XG4gIGlmICgob2Zmc2V0ICUgMSkgIT09IDAgfHwgb2Zmc2V0IDwgMCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ29mZnNldCBpcyBub3QgdWludCcpXG4gIGlmIChvZmZzZXQgKyBleHQgPiBsZW5ndGgpIHRocm93IG5ldyBSYW5nZUVycm9yKCdUcnlpbmcgdG8gYWNjZXNzIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludExFID0gZnVuY3Rpb24gcmVhZFVJbnRMRSAob2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoIHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIGJ5dGVMZW5ndGgsIHRoaXMubGVuZ3RoKVxuXG4gIHZhciB2YWwgPSB0aGlzW29mZnNldF1cbiAgdmFyIG11bCA9IDFcbiAgdmFyIGkgPSAwXG4gIHdoaWxlICgrK2kgPCBieXRlTGVuZ3RoICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdmFsICs9IHRoaXNbb2Zmc2V0ICsgaV0gKiBtdWxcbiAgfVxuXG4gIHJldHVybiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludEJFID0gZnVuY3Rpb24gcmVhZFVJbnRCRSAob2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoIHwgMFxuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgY2hlY2tPZmZzZXQob2Zmc2V0LCBieXRlTGVuZ3RoLCB0aGlzLmxlbmd0aClcbiAgfVxuXG4gIHZhciB2YWwgPSB0aGlzW29mZnNldCArIC0tYnl0ZUxlbmd0aF1cbiAgdmFyIG11bCA9IDFcbiAgd2hpbGUgKGJ5dGVMZW5ndGggPiAwICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdmFsICs9IHRoaXNbb2Zmc2V0ICsgLS1ieXRlTGVuZ3RoXSAqIG11bFxuICB9XG5cbiAgcmV0dXJuIHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50OCA9IGZ1bmN0aW9uIHJlYWRVSW50OCAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDEsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gdGhpc1tvZmZzZXRdXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQxNkxFID0gZnVuY3Rpb24gcmVhZFVJbnQxNkxFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMiwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiB0aGlzW29mZnNldF0gfCAodGhpc1tvZmZzZXQgKyAxXSA8PCA4KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MTZCRSA9IGZ1bmN0aW9uIHJlYWRVSW50MTZCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDIsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gKHRoaXNbb2Zmc2V0XSA8PCA4KSB8IHRoaXNbb2Zmc2V0ICsgMV1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDMyTEUgPSBmdW5jdGlvbiByZWFkVUludDMyTEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcblxuICByZXR1cm4gKCh0aGlzW29mZnNldF0pIHxcbiAgICAgICh0aGlzW29mZnNldCArIDFdIDw8IDgpIHxcbiAgICAgICh0aGlzW29mZnNldCArIDJdIDw8IDE2KSkgK1xuICAgICAgKHRoaXNbb2Zmc2V0ICsgM10gKiAweDEwMDAwMDApXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQzMkJFID0gZnVuY3Rpb24gcmVhZFVJbnQzMkJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG5cbiAgcmV0dXJuICh0aGlzW29mZnNldF0gKiAweDEwMDAwMDApICtcbiAgICAoKHRoaXNbb2Zmc2V0ICsgMV0gPDwgMTYpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAyXSA8PCA4KSB8XG4gICAgdGhpc1tvZmZzZXQgKyAzXSlcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50TEUgPSBmdW5jdGlvbiByZWFkSW50TEUgKG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCBieXRlTGVuZ3RoLCB0aGlzLmxlbmd0aClcblxuICB2YXIgdmFsID0gdGhpc1tvZmZzZXRdXG4gIHZhciBtdWwgPSAxXG4gIHZhciBpID0gMFxuICB3aGlsZSAoKytpIDwgYnl0ZUxlbmd0aCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHZhbCArPSB0aGlzW29mZnNldCArIGldICogbXVsXG4gIH1cbiAgbXVsICo9IDB4ODBcblxuICBpZiAodmFsID49IG11bCkgdmFsIC09IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoKVxuXG4gIHJldHVybiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50QkUgPSBmdW5jdGlvbiByZWFkSW50QkUgKG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCBieXRlTGVuZ3RoLCB0aGlzLmxlbmd0aClcblxuICB2YXIgaSA9IGJ5dGVMZW5ndGhcbiAgdmFyIG11bCA9IDFcbiAgdmFyIHZhbCA9IHRoaXNbb2Zmc2V0ICsgLS1pXVxuICB3aGlsZSAoaSA+IDAgJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB2YWwgKz0gdGhpc1tvZmZzZXQgKyAtLWldICogbXVsXG4gIH1cbiAgbXVsICo9IDB4ODBcblxuICBpZiAodmFsID49IG11bCkgdmFsIC09IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoKVxuXG4gIHJldHVybiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50OCA9IGZ1bmN0aW9uIHJlYWRJbnQ4IChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMSwgdGhpcy5sZW5ndGgpXG4gIGlmICghKHRoaXNbb2Zmc2V0XSAmIDB4ODApKSByZXR1cm4gKHRoaXNbb2Zmc2V0XSlcbiAgcmV0dXJuICgoMHhmZiAtIHRoaXNbb2Zmc2V0XSArIDEpICogLTEpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDE2TEUgPSBmdW5jdGlvbiByZWFkSW50MTZMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDIsIHRoaXMubGVuZ3RoKVxuICB2YXIgdmFsID0gdGhpc1tvZmZzZXRdIHwgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgOClcbiAgcmV0dXJuICh2YWwgJiAweDgwMDApID8gdmFsIHwgMHhGRkZGMDAwMCA6IHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQxNkJFID0gZnVuY3Rpb24gcmVhZEludDE2QkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAyLCB0aGlzLmxlbmd0aClcbiAgdmFyIHZhbCA9IHRoaXNbb2Zmc2V0ICsgMV0gfCAodGhpc1tvZmZzZXRdIDw8IDgpXG4gIHJldHVybiAodmFsICYgMHg4MDAwKSA/IHZhbCB8IDB4RkZGRjAwMDAgOiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MzJMRSA9IGZ1bmN0aW9uIHJlYWRJbnQzMkxFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG5cbiAgcmV0dXJuICh0aGlzW29mZnNldF0pIHxcbiAgICAodGhpc1tvZmZzZXQgKyAxXSA8PCA4KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgMl0gPDwgMTYpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAzXSA8PCAyNClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MzJCRSA9IGZ1bmN0aW9uIHJlYWRJbnQzMkJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG5cbiAgcmV0dXJuICh0aGlzW29mZnNldF0gPDwgMjQpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAxXSA8PCAxNikgfFxuICAgICh0aGlzW29mZnNldCArIDJdIDw8IDgpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAzXSlcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRmxvYXRMRSA9IGZ1bmN0aW9uIHJlYWRGbG9hdExFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiBpZWVlNzU0LnJlYWQodGhpcywgb2Zmc2V0LCB0cnVlLCAyMywgNClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRmxvYXRCRSA9IGZ1bmN0aW9uIHJlYWRGbG9hdEJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiBpZWVlNzU0LnJlYWQodGhpcywgb2Zmc2V0LCBmYWxzZSwgMjMsIDQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZERvdWJsZUxFID0gZnVuY3Rpb24gcmVhZERvdWJsZUxFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgOCwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiBpZWVlNzU0LnJlYWQodGhpcywgb2Zmc2V0LCB0cnVlLCA1MiwgOClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRG91YmxlQkUgPSBmdW5jdGlvbiByZWFkRG91YmxlQkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA4LCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIGllZWU3NTQucmVhZCh0aGlzLCBvZmZzZXQsIGZhbHNlLCA1MiwgOClcbn1cblxuZnVuY3Rpb24gY2hlY2tJbnQgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgZXh0LCBtYXgsIG1pbikge1xuICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihidWYpKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdcImJ1ZmZlclwiIGFyZ3VtZW50IG11c3QgYmUgYSBCdWZmZXIgaW5zdGFuY2UnKVxuICBpZiAodmFsdWUgPiBtYXggfHwgdmFsdWUgPCBtaW4pIHRocm93IG5ldyBSYW5nZUVycm9yKCdcInZhbHVlXCIgYXJndW1lbnQgaXMgb3V0IG9mIGJvdW5kcycpXG4gIGlmIChvZmZzZXQgKyBleHQgPiBidWYubGVuZ3RoKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW5kZXggb3V0IG9mIHJhbmdlJylcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnRMRSA9IGZ1bmN0aW9uIHdyaXRlVUludExFICh2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoIHwgMFxuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgdmFyIG1heEJ5dGVzID0gTWF0aC5wb3coMiwgOCAqIGJ5dGVMZW5ndGgpIC0gMVxuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIG1heEJ5dGVzLCAwKVxuICB9XG5cbiAgdmFyIG11bCA9IDFcbiAgdmFyIGkgPSAwXG4gIHRoaXNbb2Zmc2V0XSA9IHZhbHVlICYgMHhGRlxuICB3aGlsZSAoKytpIDwgYnl0ZUxlbmd0aCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHRoaXNbb2Zmc2V0ICsgaV0gPSAodmFsdWUgLyBtdWwpICYgMHhGRlxuICB9XG5cbiAgcmV0dXJuIG9mZnNldCArIGJ5dGVMZW5ndGhcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnRCRSA9IGZ1bmN0aW9uIHdyaXRlVUludEJFICh2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoIHwgMFxuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgdmFyIG1heEJ5dGVzID0gTWF0aC5wb3coMiwgOCAqIGJ5dGVMZW5ndGgpIC0gMVxuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIG1heEJ5dGVzLCAwKVxuICB9XG5cbiAgdmFyIGkgPSBieXRlTGVuZ3RoIC0gMVxuICB2YXIgbXVsID0gMVxuICB0aGlzW29mZnNldCArIGldID0gdmFsdWUgJiAweEZGXG4gIHdoaWxlICgtLWkgPj0gMCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHRoaXNbb2Zmc2V0ICsgaV0gPSAodmFsdWUgLyBtdWwpICYgMHhGRlxuICB9XG5cbiAgcmV0dXJuIG9mZnNldCArIGJ5dGVMZW5ndGhcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQ4ID0gZnVuY3Rpb24gd3JpdGVVSW50OCAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAxLCAweGZmLCAwKVxuICBpZiAoIUJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB2YWx1ZSA9IE1hdGguZmxvb3IodmFsdWUpXG4gIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIHJldHVybiBvZmZzZXQgKyAxXG59XG5cbmZ1bmN0aW9uIG9iamVjdFdyaXRlVUludDE2IChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbikge1xuICBpZiAodmFsdWUgPCAwKSB2YWx1ZSA9IDB4ZmZmZiArIHZhbHVlICsgMVxuICBmb3IgKHZhciBpID0gMCwgaiA9IE1hdGgubWluKGJ1Zi5sZW5ndGggLSBvZmZzZXQsIDIpOyBpIDwgajsgKytpKSB7XG4gICAgYnVmW29mZnNldCArIGldID0gKHZhbHVlICYgKDB4ZmYgPDwgKDggKiAobGl0dGxlRW5kaWFuID8gaSA6IDEgLSBpKSkpKSA+Pj5cbiAgICAgIChsaXR0bGVFbmRpYW4gPyBpIDogMSAtIGkpICogOFxuICB9XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MTZMRSA9IGZ1bmN0aW9uIHdyaXRlVUludDE2TEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMiwgMHhmZmZmLCAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDgpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MTYodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgMlxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDE2QkUgPSBmdW5jdGlvbiB3cml0ZVVJbnQxNkJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDIsIDB4ZmZmZiwgMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgJiAweGZmKVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDE2KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlKVxuICB9XG4gIHJldHVybiBvZmZzZXQgKyAyXG59XG5cbmZ1bmN0aW9uIG9iamVjdFdyaXRlVUludDMyIChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbikge1xuICBpZiAodmFsdWUgPCAwKSB2YWx1ZSA9IDB4ZmZmZmZmZmYgKyB2YWx1ZSArIDFcbiAgZm9yICh2YXIgaSA9IDAsIGogPSBNYXRoLm1pbihidWYubGVuZ3RoIC0gb2Zmc2V0LCA0KTsgaSA8IGo7ICsraSkge1xuICAgIGJ1ZltvZmZzZXQgKyBpXSA9ICh2YWx1ZSA+Pj4gKGxpdHRsZUVuZGlhbiA/IGkgOiAzIC0gaSkgKiA4KSAmIDB4ZmZcbiAgfVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDMyTEUgPSBmdW5jdGlvbiB3cml0ZVVJbnQzMkxFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDQsIDB4ZmZmZmZmZmYsIDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0ICsgM10gPSAodmFsdWUgPj4+IDI0KVxuICAgIHRoaXNbb2Zmc2V0ICsgMl0gPSAodmFsdWUgPj4+IDE2KVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDgpXG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQzMih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlKVxuICB9XG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MzJCRSA9IGZ1bmN0aW9uIHdyaXRlVUludDMyQkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgNCwgMHhmZmZmZmZmZiwgMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlID4+PiAyNClcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiAxNilcbiAgICB0aGlzW29mZnNldCArIDJdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0ICsgM10gPSAodmFsdWUgJiAweGZmKVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDMyKHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlKVxuICB9XG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnRMRSA9IGZ1bmN0aW9uIHdyaXRlSW50TEUgKHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIHZhciBsaW1pdCA9IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoIC0gMSlcblxuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIGxpbWl0IC0gMSwgLWxpbWl0KVxuICB9XG5cbiAgdmFyIGkgPSAwXG4gIHZhciBtdWwgPSAxXG4gIHZhciBzdWIgPSAwXG4gIHRoaXNbb2Zmc2V0XSA9IHZhbHVlICYgMHhGRlxuICB3aGlsZSAoKytpIDwgYnl0ZUxlbmd0aCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIGlmICh2YWx1ZSA8IDAgJiYgc3ViID09PSAwICYmIHRoaXNbb2Zmc2V0ICsgaSAtIDFdICE9PSAwKSB7XG4gICAgICBzdWIgPSAxXG4gICAgfVxuICAgIHRoaXNbb2Zmc2V0ICsgaV0gPSAoKHZhbHVlIC8gbXVsKSA+PiAwKSAtIHN1YiAmIDB4RkZcbiAgfVxuXG4gIHJldHVybiBvZmZzZXQgKyBieXRlTGVuZ3RoXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnRCRSA9IGZ1bmN0aW9uIHdyaXRlSW50QkUgKHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIHZhciBsaW1pdCA9IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoIC0gMSlcblxuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIGxpbWl0IC0gMSwgLWxpbWl0KVxuICB9XG5cbiAgdmFyIGkgPSBieXRlTGVuZ3RoIC0gMVxuICB2YXIgbXVsID0gMVxuICB2YXIgc3ViID0gMFxuICB0aGlzW29mZnNldCArIGldID0gdmFsdWUgJiAweEZGXG4gIHdoaWxlICgtLWkgPj0gMCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIGlmICh2YWx1ZSA8IDAgJiYgc3ViID09PSAwICYmIHRoaXNbb2Zmc2V0ICsgaSArIDFdICE9PSAwKSB7XG4gICAgICBzdWIgPSAxXG4gICAgfVxuICAgIHRoaXNbb2Zmc2V0ICsgaV0gPSAoKHZhbHVlIC8gbXVsKSA+PiAwKSAtIHN1YiAmIDB4RkZcbiAgfVxuXG4gIHJldHVybiBvZmZzZXQgKyBieXRlTGVuZ3RoXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQ4ID0gZnVuY3Rpb24gd3JpdGVJbnQ4ICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDEsIDB4N2YsIC0weDgwKVxuICBpZiAoIUJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB2YWx1ZSA9IE1hdGguZmxvb3IodmFsdWUpXG4gIGlmICh2YWx1ZSA8IDApIHZhbHVlID0gMHhmZiArIHZhbHVlICsgMVxuICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICByZXR1cm4gb2Zmc2V0ICsgMVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MTZMRSA9IGZ1bmN0aW9uIHdyaXRlSW50MTZMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAyLCAweDdmZmYsIC0weDgwMDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gOClcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQxNih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlKVxuICB9XG4gIHJldHVybiBvZmZzZXQgKyAyXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQxNkJFID0gZnVuY3Rpb24gd3JpdGVJbnQxNkJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDIsIDB4N2ZmZiwgLTB4ODAwMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgJiAweGZmKVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDE2KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlKVxuICB9XG4gIHJldHVybiBvZmZzZXQgKyAyXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQzMkxFID0gZnVuY3Rpb24gd3JpdGVJbnQzMkxFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDQsIDB4N2ZmZmZmZmYsIC0weDgwMDAwMDAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDgpXG4gICAgdGhpc1tvZmZzZXQgKyAyXSA9ICh2YWx1ZSA+Pj4gMTYpXG4gICAgdGhpc1tvZmZzZXQgKyAzXSA9ICh2YWx1ZSA+Pj4gMjQpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MzIodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MzJCRSA9IGZ1bmN0aW9uIHdyaXRlSW50MzJCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCA0LCAweDdmZmZmZmZmLCAtMHg4MDAwMDAwMClcbiAgaWYgKHZhbHVlIDwgMCkgdmFsdWUgPSAweGZmZmZmZmZmICsgdmFsdWUgKyAxXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSA+Pj4gMjQpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gMTYpXG4gICAgdGhpc1tvZmZzZXQgKyAyXSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldCArIDNdID0gKHZhbHVlICYgMHhmZilcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQzMih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5mdW5jdGlvbiBjaGVja0lFRUU3NTQgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgZXh0LCBtYXgsIG1pbikge1xuICBpZiAob2Zmc2V0ICsgZXh0ID4gYnVmLmxlbmd0aCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0luZGV4IG91dCBvZiByYW5nZScpXG4gIGlmIChvZmZzZXQgPCAwKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW5kZXggb3V0IG9mIHJhbmdlJylcbn1cblxuZnVuY3Rpb24gd3JpdGVGbG9hdCAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBjaGVja0lFRUU3NTQoYnVmLCB2YWx1ZSwgb2Zmc2V0LCA0LCAzLjQwMjgyMzQ2NjM4NTI4ODZlKzM4LCAtMy40MDI4MjM0NjYzODUyODg2ZSszOClcbiAgfVxuICBpZWVlNzU0LndyaXRlKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCAyMywgNClcbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUZsb2F0TEUgPSBmdW5jdGlvbiB3cml0ZUZsb2F0TEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiB3cml0ZUZsb2F0KHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRmxvYXRCRSA9IGZ1bmN0aW9uIHdyaXRlRmxvYXRCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIHdyaXRlRmxvYXQodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG5mdW5jdGlvbiB3cml0ZURvdWJsZSAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBjaGVja0lFRUU3NTQoYnVmLCB2YWx1ZSwgb2Zmc2V0LCA4LCAxLjc5NzY5MzEzNDg2MjMxNTdFKzMwOCwgLTEuNzk3NjkzMTM0ODYyMzE1N0UrMzA4KVxuICB9XG4gIGllZWU3NTQud3JpdGUoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIDUyLCA4KVxuICByZXR1cm4gb2Zmc2V0ICsgOFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRG91YmxlTEUgPSBmdW5jdGlvbiB3cml0ZURvdWJsZUxFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gd3JpdGVEb3VibGUodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVEb3VibGVCRSA9IGZ1bmN0aW9uIHdyaXRlRG91YmxlQkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiB3cml0ZURvdWJsZSh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbi8vIGNvcHkodGFyZ2V0QnVmZmVyLCB0YXJnZXRTdGFydD0wLCBzb3VyY2VTdGFydD0wLCBzb3VyY2VFbmQ9YnVmZmVyLmxlbmd0aClcbkJ1ZmZlci5wcm90b3R5cGUuY29weSA9IGZ1bmN0aW9uIGNvcHkgKHRhcmdldCwgdGFyZ2V0U3RhcnQsIHN0YXJ0LCBlbmQpIHtcbiAgaWYgKCFzdGFydCkgc3RhcnQgPSAwXG4gIGlmICghZW5kICYmIGVuZCAhPT0gMCkgZW5kID0gdGhpcy5sZW5ndGhcbiAgaWYgKHRhcmdldFN0YXJ0ID49IHRhcmdldC5sZW5ndGgpIHRhcmdldFN0YXJ0ID0gdGFyZ2V0Lmxlbmd0aFxuICBpZiAoIXRhcmdldFN0YXJ0KSB0YXJnZXRTdGFydCA9IDBcbiAgaWYgKGVuZCA+IDAgJiYgZW5kIDwgc3RhcnQpIGVuZCA9IHN0YXJ0XG5cbiAgLy8gQ29weSAwIGJ5dGVzOyB3ZSdyZSBkb25lXG4gIGlmIChlbmQgPT09IHN0YXJ0KSByZXR1cm4gMFxuICBpZiAodGFyZ2V0Lmxlbmd0aCA9PT0gMCB8fCB0aGlzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIDBcblxuICAvLyBGYXRhbCBlcnJvciBjb25kaXRpb25zXG4gIGlmICh0YXJnZXRTdGFydCA8IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcigndGFyZ2V0U3RhcnQgb3V0IG9mIGJvdW5kcycpXG4gIH1cbiAgaWYgKHN0YXJ0IDwgMCB8fCBzdGFydCA+PSB0aGlzLmxlbmd0aCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3NvdXJjZVN0YXJ0IG91dCBvZiBib3VuZHMnKVxuICBpZiAoZW5kIDwgMCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3NvdXJjZUVuZCBvdXQgb2YgYm91bmRzJylcblxuICAvLyBBcmUgd2Ugb29iP1xuICBpZiAoZW5kID4gdGhpcy5sZW5ndGgpIGVuZCA9IHRoaXMubGVuZ3RoXG4gIGlmICh0YXJnZXQubGVuZ3RoIC0gdGFyZ2V0U3RhcnQgPCBlbmQgLSBzdGFydCkge1xuICAgIGVuZCA9IHRhcmdldC5sZW5ndGggLSB0YXJnZXRTdGFydCArIHN0YXJ0XG4gIH1cblxuICB2YXIgbGVuID0gZW5kIC0gc3RhcnRcbiAgdmFyIGlcblxuICBpZiAodGhpcyA9PT0gdGFyZ2V0ICYmIHN0YXJ0IDwgdGFyZ2V0U3RhcnQgJiYgdGFyZ2V0U3RhcnQgPCBlbmQpIHtcbiAgICAvLyBkZXNjZW5kaW5nIGNvcHkgZnJvbSBlbmRcbiAgICBmb3IgKGkgPSBsZW4gLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgdGFyZ2V0W2kgKyB0YXJnZXRTdGFydF0gPSB0aGlzW2kgKyBzdGFydF1cbiAgICB9XG4gIH0gZWxzZSBpZiAobGVuIDwgMTAwMCB8fCAhQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICAvLyBhc2NlbmRpbmcgY29weSBmcm9tIHN0YXJ0XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICB0YXJnZXRbaSArIHRhcmdldFN0YXJ0XSA9IHRoaXNbaSArIHN0YXJ0XVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBVaW50OEFycmF5LnByb3RvdHlwZS5zZXQuY2FsbChcbiAgICAgIHRhcmdldCxcbiAgICAgIHRoaXMuc3ViYXJyYXkoc3RhcnQsIHN0YXJ0ICsgbGVuKSxcbiAgICAgIHRhcmdldFN0YXJ0XG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIGxlblxufVxuXG4vLyBVc2FnZTpcbi8vICAgIGJ1ZmZlci5maWxsKG51bWJlclssIG9mZnNldFssIGVuZF1dKVxuLy8gICAgYnVmZmVyLmZpbGwoYnVmZmVyWywgb2Zmc2V0WywgZW5kXV0pXG4vLyAgICBidWZmZXIuZmlsbChzdHJpbmdbLCBvZmZzZXRbLCBlbmRdXVssIGVuY29kaW5nXSlcbkJ1ZmZlci5wcm90b3R5cGUuZmlsbCA9IGZ1bmN0aW9uIGZpbGwgKHZhbCwgc3RhcnQsIGVuZCwgZW5jb2RpbmcpIHtcbiAgLy8gSGFuZGxlIHN0cmluZyBjYXNlczpcbiAgaWYgKHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnKSB7XG4gICAgaWYgKHR5cGVvZiBzdGFydCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGVuY29kaW5nID0gc3RhcnRcbiAgICAgIHN0YXJ0ID0gMFxuICAgICAgZW5kID0gdGhpcy5sZW5ndGhcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBlbmQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBlbmNvZGluZyA9IGVuZFxuICAgICAgZW5kID0gdGhpcy5sZW5ndGhcbiAgICB9XG4gICAgaWYgKHZhbC5sZW5ndGggPT09IDEpIHtcbiAgICAgIHZhciBjb2RlID0gdmFsLmNoYXJDb2RlQXQoMClcbiAgICAgIGlmIChjb2RlIDwgMjU2KSB7XG4gICAgICAgIHZhbCA9IGNvZGVcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGVuY29kaW5nICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIGVuY29kaW5nICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignZW5jb2RpbmcgbXVzdCBiZSBhIHN0cmluZycpXG4gICAgfVxuICAgIGlmICh0eXBlb2YgZW5jb2RpbmcgPT09ICdzdHJpbmcnICYmICFCdWZmZXIuaXNFbmNvZGluZyhlbmNvZGluZykpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Vua25vd24gZW5jb2Rpbmc6ICcgKyBlbmNvZGluZylcbiAgICB9XG4gIH0gZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHtcbiAgICB2YWwgPSB2YWwgJiAyNTVcbiAgfVxuXG4gIC8vIEludmFsaWQgcmFuZ2VzIGFyZSBub3Qgc2V0IHRvIGEgZGVmYXVsdCwgc28gY2FuIHJhbmdlIGNoZWNrIGVhcmx5LlxuICBpZiAoc3RhcnQgPCAwIHx8IHRoaXMubGVuZ3RoIDwgc3RhcnQgfHwgdGhpcy5sZW5ndGggPCBlbmQpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignT3V0IG9mIHJhbmdlIGluZGV4JylcbiAgfVxuXG4gIGlmIChlbmQgPD0gc3RhcnQpIHtcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgc3RhcnQgPSBzdGFydCA+Pj4gMFxuICBlbmQgPSBlbmQgPT09IHVuZGVmaW5lZCA/IHRoaXMubGVuZ3RoIDogZW5kID4+PiAwXG5cbiAgaWYgKCF2YWwpIHZhbCA9IDBcblxuICB2YXIgaVxuICBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHtcbiAgICBmb3IgKGkgPSBzdGFydDsgaSA8IGVuZDsgKytpKSB7XG4gICAgICB0aGlzW2ldID0gdmFsXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciBieXRlcyA9IEJ1ZmZlci5pc0J1ZmZlcih2YWwpXG4gICAgICA/IHZhbFxuICAgICAgOiB1dGY4VG9CeXRlcyhuZXcgQnVmZmVyKHZhbCwgZW5jb2RpbmcpLnRvU3RyaW5nKCkpXG4gICAgdmFyIGxlbiA9IGJ5dGVzLmxlbmd0aFxuICAgIGZvciAoaSA9IDA7IGkgPCBlbmQgLSBzdGFydDsgKytpKSB7XG4gICAgICB0aGlzW2kgKyBzdGFydF0gPSBieXRlc1tpICUgbGVuXVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzXG59XG5cbi8vIEhFTFBFUiBGVU5DVElPTlNcbi8vID09PT09PT09PT09PT09PT1cblxudmFyIElOVkFMSURfQkFTRTY0X1JFID0gL1teK1xcLzAtOUEtWmEtei1fXS9nXG5cbmZ1bmN0aW9uIGJhc2U2NGNsZWFuIChzdHIpIHtcbiAgLy8gTm9kZSBzdHJpcHMgb3V0IGludmFsaWQgY2hhcmFjdGVycyBsaWtlIFxcbiBhbmQgXFx0IGZyb20gdGhlIHN0cmluZywgYmFzZTY0LWpzIGRvZXMgbm90XG4gIHN0ciA9IHN0cmluZ3RyaW0oc3RyKS5yZXBsYWNlKElOVkFMSURfQkFTRTY0X1JFLCAnJylcbiAgLy8gTm9kZSBjb252ZXJ0cyBzdHJpbmdzIHdpdGggbGVuZ3RoIDwgMiB0byAnJ1xuICBpZiAoc3RyLmxlbmd0aCA8IDIpIHJldHVybiAnJ1xuICAvLyBOb2RlIGFsbG93cyBmb3Igbm9uLXBhZGRlZCBiYXNlNjQgc3RyaW5ncyAobWlzc2luZyB0cmFpbGluZyA9PT0pLCBiYXNlNjQtanMgZG9lcyBub3RcbiAgd2hpbGUgKHN0ci5sZW5ndGggJSA0ICE9PSAwKSB7XG4gICAgc3RyID0gc3RyICsgJz0nXG4gIH1cbiAgcmV0dXJuIHN0clxufVxuXG5mdW5jdGlvbiBzdHJpbmd0cmltIChzdHIpIHtcbiAgaWYgKHN0ci50cmltKSByZXR1cm4gc3RyLnRyaW0oKVxuICByZXR1cm4gc3RyLnJlcGxhY2UoL15cXHMrfFxccyskL2csICcnKVxufVxuXG5mdW5jdGlvbiB0b0hleCAobikge1xuICBpZiAobiA8IDE2KSByZXR1cm4gJzAnICsgbi50b1N0cmluZygxNilcbiAgcmV0dXJuIG4udG9TdHJpbmcoMTYpXG59XG5cbmZ1bmN0aW9uIHV0ZjhUb0J5dGVzIChzdHJpbmcsIHVuaXRzKSB7XG4gIHVuaXRzID0gdW5pdHMgfHwgSW5maW5pdHlcbiAgdmFyIGNvZGVQb2ludFxuICB2YXIgbGVuZ3RoID0gc3RyaW5nLmxlbmd0aFxuICB2YXIgbGVhZFN1cnJvZ2F0ZSA9IG51bGxcbiAgdmFyIGJ5dGVzID0gW11cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgKytpKSB7XG4gICAgY29kZVBvaW50ID0gc3RyaW5nLmNoYXJDb2RlQXQoaSlcblxuICAgIC8vIGlzIHN1cnJvZ2F0ZSBjb21wb25lbnRcbiAgICBpZiAoY29kZVBvaW50ID4gMHhEN0ZGICYmIGNvZGVQb2ludCA8IDB4RTAwMCkge1xuICAgICAgLy8gbGFzdCBjaGFyIHdhcyBhIGxlYWRcbiAgICAgIGlmICghbGVhZFN1cnJvZ2F0ZSkge1xuICAgICAgICAvLyBubyBsZWFkIHlldFxuICAgICAgICBpZiAoY29kZVBvaW50ID4gMHhEQkZGKSB7XG4gICAgICAgICAgLy8gdW5leHBlY3RlZCB0cmFpbFxuICAgICAgICAgIGlmICgodW5pdHMgLT0gMykgPiAtMSkgYnl0ZXMucHVzaCgweEVGLCAweEJGLCAweEJEKVxuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH0gZWxzZSBpZiAoaSArIDEgPT09IGxlbmd0aCkge1xuICAgICAgICAgIC8vIHVucGFpcmVkIGxlYWRcbiAgICAgICAgICBpZiAoKHVuaXRzIC09IDMpID4gLTEpIGJ5dGVzLnB1c2goMHhFRiwgMHhCRiwgMHhCRClcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gdmFsaWQgbGVhZFxuICAgICAgICBsZWFkU3Vycm9nYXRlID0gY29kZVBvaW50XG5cbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgLy8gMiBsZWFkcyBpbiBhIHJvd1xuICAgICAgaWYgKGNvZGVQb2ludCA8IDB4REMwMCkge1xuICAgICAgICBpZiAoKHVuaXRzIC09IDMpID4gLTEpIGJ5dGVzLnB1c2goMHhFRiwgMHhCRiwgMHhCRClcbiAgICAgICAgbGVhZFN1cnJvZ2F0ZSA9IGNvZGVQb2ludFxuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICAvLyB2YWxpZCBzdXJyb2dhdGUgcGFpclxuICAgICAgY29kZVBvaW50ID0gKGxlYWRTdXJyb2dhdGUgLSAweEQ4MDAgPDwgMTAgfCBjb2RlUG9pbnQgLSAweERDMDApICsgMHgxMDAwMFxuICAgIH0gZWxzZSBpZiAobGVhZFN1cnJvZ2F0ZSkge1xuICAgICAgLy8gdmFsaWQgYm1wIGNoYXIsIGJ1dCBsYXN0IGNoYXIgd2FzIGEgbGVhZFxuICAgICAgaWYgKCh1bml0cyAtPSAzKSA+IC0xKSBieXRlcy5wdXNoKDB4RUYsIDB4QkYsIDB4QkQpXG4gICAgfVxuXG4gICAgbGVhZFN1cnJvZ2F0ZSA9IG51bGxcblxuICAgIC8vIGVuY29kZSB1dGY4XG4gICAgaWYgKGNvZGVQb2ludCA8IDB4ODApIHtcbiAgICAgIGlmICgodW5pdHMgLT0gMSkgPCAwKSBicmVha1xuICAgICAgYnl0ZXMucHVzaChjb2RlUG9pbnQpXG4gICAgfSBlbHNlIGlmIChjb2RlUG9pbnQgPCAweDgwMCkge1xuICAgICAgaWYgKCh1bml0cyAtPSAyKSA8IDApIGJyZWFrXG4gICAgICBieXRlcy5wdXNoKFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHg2IHwgMHhDMCxcbiAgICAgICAgY29kZVBvaW50ICYgMHgzRiB8IDB4ODBcbiAgICAgIClcbiAgICB9IGVsc2UgaWYgKGNvZGVQb2ludCA8IDB4MTAwMDApIHtcbiAgICAgIGlmICgodW5pdHMgLT0gMykgPCAwKSBicmVha1xuICAgICAgYnl0ZXMucHVzaChcbiAgICAgICAgY29kZVBvaW50ID4+IDB4QyB8IDB4RTAsXG4gICAgICAgIGNvZGVQb2ludCA+PiAweDYgJiAweDNGIHwgMHg4MCxcbiAgICAgICAgY29kZVBvaW50ICYgMHgzRiB8IDB4ODBcbiAgICAgIClcbiAgICB9IGVsc2UgaWYgKGNvZGVQb2ludCA8IDB4MTEwMDAwKSB7XG4gICAgICBpZiAoKHVuaXRzIC09IDQpIDwgMCkgYnJlYWtcbiAgICAgIGJ5dGVzLnB1c2goXG4gICAgICAgIGNvZGVQb2ludCA+PiAweDEyIHwgMHhGMCxcbiAgICAgICAgY29kZVBvaW50ID4+IDB4QyAmIDB4M0YgfCAweDgwLFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHg2ICYgMHgzRiB8IDB4ODAsXG4gICAgICAgIGNvZGVQb2ludCAmIDB4M0YgfCAweDgwXG4gICAgICApXG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBjb2RlIHBvaW50JylcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYnl0ZXNcbn1cblxuZnVuY3Rpb24gYXNjaWlUb0J5dGVzIChzdHIpIHtcbiAgdmFyIGJ5dGVBcnJheSA9IFtdXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgKytpKSB7XG4gICAgLy8gTm9kZSdzIGNvZGUgc2VlbXMgdG8gYmUgZG9pbmcgdGhpcyBhbmQgbm90ICYgMHg3Ri4uXG4gICAgYnl0ZUFycmF5LnB1c2goc3RyLmNoYXJDb2RlQXQoaSkgJiAweEZGKVxuICB9XG4gIHJldHVybiBieXRlQXJyYXlcbn1cblxuZnVuY3Rpb24gdXRmMTZsZVRvQnl0ZXMgKHN0ciwgdW5pdHMpIHtcbiAgdmFyIGMsIGhpLCBsb1xuICB2YXIgYnl0ZUFycmF5ID0gW11cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyArK2kpIHtcbiAgICBpZiAoKHVuaXRzIC09IDIpIDwgMCkgYnJlYWtcblxuICAgIGMgPSBzdHIuY2hhckNvZGVBdChpKVxuICAgIGhpID0gYyA+PiA4XG4gICAgbG8gPSBjICUgMjU2XG4gICAgYnl0ZUFycmF5LnB1c2gobG8pXG4gICAgYnl0ZUFycmF5LnB1c2goaGkpXG4gIH1cblxuICByZXR1cm4gYnl0ZUFycmF5XG59XG5cbmZ1bmN0aW9uIGJhc2U2NFRvQnl0ZXMgKHN0cikge1xuICByZXR1cm4gYmFzZTY0LnRvQnl0ZUFycmF5KGJhc2U2NGNsZWFuKHN0cikpXG59XG5cbmZ1bmN0aW9uIGJsaXRCdWZmZXIgKHNyYywgZHN0LCBvZmZzZXQsIGxlbmd0aCkge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgKytpKSB7XG4gICAgaWYgKChpICsgb2Zmc2V0ID49IGRzdC5sZW5ndGgpIHx8IChpID49IHNyYy5sZW5ndGgpKSBicmVha1xuICAgIGRzdFtpICsgb2Zmc2V0XSA9IHNyY1tpXVxuICB9XG4gIHJldHVybiBpXG59XG5cbmZ1bmN0aW9uIGlzbmFuICh2YWwpIHtcbiAgcmV0dXJuIHZhbCAhPT0gdmFsIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2VsZi1jb21wYXJlXG59XG5cbi8qIFdFQlBBQ0sgVkFSIElOSkVDVElPTiAqL30uY2FsbCh0aGlzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLy4uL3dlYnBhY2svYnVpbGRpbi9nbG9iYWwuanMgKi8gXCIuLi8uLi9ub2RlX21vZHVsZXMvd2VicGFjay9idWlsZGluL2dsb2JhbC5qc1wiKSkpXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4uLy4uL25vZGVfbW9kdWxlcy9idWZmZXIvbm9kZV9tb2R1bGVzL2lzYXJyYXkvaW5kZXguanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC9ob21lL2h1eW5obmd1eWVuL2dpdGh1Yi9jYXVzYWxpdHkvbm9kZV9tb2R1bGVzL2J1ZmZlci9ub2RlX21vZHVsZXMvaXNhcnJheS9pbmRleC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxudmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiAoYXJyKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGFycikgPT0gJ1tvYmplY3QgQXJyYXldJztcbn07XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Z1bmN0aW9uYWwtcmVkLWJsYWNrLXRyZWUvcmJ0cmVlLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC9ob21lL2h1eW5obmd1eWVuL2dpdGh1Yi9jYXVzYWxpdHkvbm9kZV9tb2R1bGVzL2Z1bmN0aW9uYWwtcmVkLWJsYWNrLXRyZWUvcmJ0cmVlLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlUkJUcmVlXG5cbnZhciBSRUQgICA9IDBcbnZhciBCTEFDSyA9IDFcblxuZnVuY3Rpb24gUkJOb2RlKGNvbG9yLCBrZXksIHZhbHVlLCBsZWZ0LCByaWdodCwgY291bnQpIHtcbiAgdGhpcy5fY29sb3IgPSBjb2xvclxuICB0aGlzLmtleSA9IGtleVxuICB0aGlzLnZhbHVlID0gdmFsdWVcbiAgdGhpcy5sZWZ0ID0gbGVmdFxuICB0aGlzLnJpZ2h0ID0gcmlnaHRcbiAgdGhpcy5fY291bnQgPSBjb3VudFxufVxuXG5mdW5jdGlvbiBjbG9uZU5vZGUobm9kZSkge1xuICByZXR1cm4gbmV3IFJCTm9kZShub2RlLl9jb2xvciwgbm9kZS5rZXksIG5vZGUudmFsdWUsIG5vZGUubGVmdCwgbm9kZS5yaWdodCwgbm9kZS5fY291bnQpXG59XG5cbmZ1bmN0aW9uIHJlcGFpbnQoY29sb3IsIG5vZGUpIHtcbiAgcmV0dXJuIG5ldyBSQk5vZGUoY29sb3IsIG5vZGUua2V5LCBub2RlLnZhbHVlLCBub2RlLmxlZnQsIG5vZGUucmlnaHQsIG5vZGUuX2NvdW50KVxufVxuXG5mdW5jdGlvbiByZWNvdW50KG5vZGUpIHtcbiAgbm9kZS5fY291bnQgPSAxICsgKG5vZGUubGVmdCA/IG5vZGUubGVmdC5fY291bnQgOiAwKSArIChub2RlLnJpZ2h0ID8gbm9kZS5yaWdodC5fY291bnQgOiAwKVxufVxuXG5mdW5jdGlvbiBSZWRCbGFja1RyZWUoY29tcGFyZSwgcm9vdCkge1xuICB0aGlzLl9jb21wYXJlID0gY29tcGFyZVxuICB0aGlzLnJvb3QgPSByb290XG59XG5cbnZhciBwcm90byA9IFJlZEJsYWNrVHJlZS5wcm90b3R5cGVcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3RvLCBcImtleXNcIiwge1xuICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgIHZhciByZXN1bHQgPSBbXVxuICAgIHRoaXMuZm9yRWFjaChmdW5jdGlvbihrLHYpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGspXG4gICAgfSlcbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cbn0pXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm90bywgXCJ2YWx1ZXNcIiwge1xuICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgIHZhciByZXN1bHQgPSBbXVxuICAgIHRoaXMuZm9yRWFjaChmdW5jdGlvbihrLHYpIHtcbiAgICAgIHJlc3VsdC5wdXNoKHYpXG4gICAgfSlcbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cbn0pXG5cbi8vUmV0dXJucyB0aGUgbnVtYmVyIG9mIG5vZGVzIGluIHRoZSB0cmVlXG5PYmplY3QuZGVmaW5lUHJvcGVydHkocHJvdG8sIFwibGVuZ3RoXCIsIHtcbiAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICBpZih0aGlzLnJvb3QpIHtcbiAgICAgIHJldHVybiB0aGlzLnJvb3QuX2NvdW50XG4gICAgfVxuICAgIHJldHVybiAwXG4gIH1cbn0pXG5cbi8vSW5zZXJ0IGEgbmV3IGl0ZW0gaW50byB0aGUgdHJlZVxucHJvdG8uaW5zZXJ0ID0gZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xuICB2YXIgY21wID0gdGhpcy5fY29tcGFyZVxuICAvL0ZpbmQgcG9pbnQgdG8gaW5zZXJ0IG5ldyBub2RlIGF0XG4gIHZhciBuID0gdGhpcy5yb290XG4gIHZhciBuX3N0YWNrID0gW11cbiAgdmFyIGRfc3RhY2sgPSBbXVxuICB3aGlsZShuKSB7XG4gICAgdmFyIGQgPSBjbXAoa2V5LCBuLmtleSlcbiAgICBuX3N0YWNrLnB1c2gobilcbiAgICBkX3N0YWNrLnB1c2goZClcbiAgICBpZihkIDw9IDApIHtcbiAgICAgIG4gPSBuLmxlZnRcbiAgICB9IGVsc2Uge1xuICAgICAgbiA9IG4ucmlnaHRcbiAgICB9XG4gIH1cbiAgLy9SZWJ1aWxkIHBhdGggdG8gbGVhZiBub2RlXG4gIG5fc3RhY2sucHVzaChuZXcgUkJOb2RlKFJFRCwga2V5LCB2YWx1ZSwgbnVsbCwgbnVsbCwgMSkpXG4gIGZvcih2YXIgcz1uX3N0YWNrLmxlbmd0aC0yOyBzPj0wOyAtLXMpIHtcbiAgICB2YXIgbiA9IG5fc3RhY2tbc11cbiAgICBpZihkX3N0YWNrW3NdIDw9IDApIHtcbiAgICAgIG5fc3RhY2tbc10gPSBuZXcgUkJOb2RlKG4uX2NvbG9yLCBuLmtleSwgbi52YWx1ZSwgbl9zdGFja1tzKzFdLCBuLnJpZ2h0LCBuLl9jb3VudCsxKVxuICAgIH0gZWxzZSB7XG4gICAgICBuX3N0YWNrW3NdID0gbmV3IFJCTm9kZShuLl9jb2xvciwgbi5rZXksIG4udmFsdWUsIG4ubGVmdCwgbl9zdGFja1tzKzFdLCBuLl9jb3VudCsxKVxuICAgIH1cbiAgfVxuICAvL1JlYmFsYW5jZSB0cmVlIHVzaW5nIHJvdGF0aW9uc1xuICAvL2NvbnNvbGUubG9nKFwic3RhcnQgaW5zZXJ0XCIsIGtleSwgZF9zdGFjaylcbiAgZm9yKHZhciBzPW5fc3RhY2subGVuZ3RoLTE7IHM+MTsgLS1zKSB7XG4gICAgdmFyIHAgPSBuX3N0YWNrW3MtMV1cbiAgICB2YXIgbiA9IG5fc3RhY2tbc11cbiAgICBpZihwLl9jb2xvciA9PT0gQkxBQ0sgfHwgbi5fY29sb3IgPT09IEJMQUNLKSB7XG4gICAgICBicmVha1xuICAgIH1cbiAgICB2YXIgcHAgPSBuX3N0YWNrW3MtMl1cbiAgICBpZihwcC5sZWZ0ID09PSBwKSB7XG4gICAgICBpZihwLmxlZnQgPT09IG4pIHtcbiAgICAgICAgdmFyIHkgPSBwcC5yaWdodFxuICAgICAgICBpZih5ICYmIHkuX2NvbG9yID09PSBSRUQpIHtcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiTExyXCIpXG4gICAgICAgICAgcC5fY29sb3IgPSBCTEFDS1xuICAgICAgICAgIHBwLnJpZ2h0ID0gcmVwYWludChCTEFDSywgeSlcbiAgICAgICAgICBwcC5fY29sb3IgPSBSRURcbiAgICAgICAgICBzIC09IDFcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiTExiXCIpXG4gICAgICAgICAgcHAuX2NvbG9yID0gUkVEXG4gICAgICAgICAgcHAubGVmdCA9IHAucmlnaHRcbiAgICAgICAgICBwLl9jb2xvciA9IEJMQUNLXG4gICAgICAgICAgcC5yaWdodCA9IHBwXG4gICAgICAgICAgbl9zdGFja1tzLTJdID0gcFxuICAgICAgICAgIG5fc3RhY2tbcy0xXSA9IG5cbiAgICAgICAgICByZWNvdW50KHBwKVxuICAgICAgICAgIHJlY291bnQocClcbiAgICAgICAgICBpZihzID49IDMpIHtcbiAgICAgICAgICAgIHZhciBwcHAgPSBuX3N0YWNrW3MtM11cbiAgICAgICAgICAgIGlmKHBwcC5sZWZ0ID09PSBwcCkge1xuICAgICAgICAgICAgICBwcHAubGVmdCA9IHBcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHBwcC5yaWdodCA9IHBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHkgPSBwcC5yaWdodFxuICAgICAgICBpZih5ICYmIHkuX2NvbG9yID09PSBSRUQpIHtcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiTFJyXCIpXG4gICAgICAgICAgcC5fY29sb3IgPSBCTEFDS1xuICAgICAgICAgIHBwLnJpZ2h0ID0gcmVwYWludChCTEFDSywgeSlcbiAgICAgICAgICBwcC5fY29sb3IgPSBSRURcbiAgICAgICAgICBzIC09IDFcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiTFJiXCIpXG4gICAgICAgICAgcC5yaWdodCA9IG4ubGVmdFxuICAgICAgICAgIHBwLl9jb2xvciA9IFJFRFxuICAgICAgICAgIHBwLmxlZnQgPSBuLnJpZ2h0XG4gICAgICAgICAgbi5fY29sb3IgPSBCTEFDS1xuICAgICAgICAgIG4ubGVmdCA9IHBcbiAgICAgICAgICBuLnJpZ2h0ID0gcHBcbiAgICAgICAgICBuX3N0YWNrW3MtMl0gPSBuXG4gICAgICAgICAgbl9zdGFja1tzLTFdID0gcFxuICAgICAgICAgIHJlY291bnQocHApXG4gICAgICAgICAgcmVjb3VudChwKVxuICAgICAgICAgIHJlY291bnQobilcbiAgICAgICAgICBpZihzID49IDMpIHtcbiAgICAgICAgICAgIHZhciBwcHAgPSBuX3N0YWNrW3MtM11cbiAgICAgICAgICAgIGlmKHBwcC5sZWZ0ID09PSBwcCkge1xuICAgICAgICAgICAgICBwcHAubGVmdCA9IG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHBwcC5yaWdodCA9IG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZihwLnJpZ2h0ID09PSBuKSB7XG4gICAgICAgIHZhciB5ID0gcHAubGVmdFxuICAgICAgICBpZih5ICYmIHkuX2NvbG9yID09PSBSRUQpIHtcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiUlJyXCIsIHkua2V5KVxuICAgICAgICAgIHAuX2NvbG9yID0gQkxBQ0tcbiAgICAgICAgICBwcC5sZWZ0ID0gcmVwYWludChCTEFDSywgeSlcbiAgICAgICAgICBwcC5fY29sb3IgPSBSRURcbiAgICAgICAgICBzIC09IDFcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiUlJiXCIpXG4gICAgICAgICAgcHAuX2NvbG9yID0gUkVEXG4gICAgICAgICAgcHAucmlnaHQgPSBwLmxlZnRcbiAgICAgICAgICBwLl9jb2xvciA9IEJMQUNLXG4gICAgICAgICAgcC5sZWZ0ID0gcHBcbiAgICAgICAgICBuX3N0YWNrW3MtMl0gPSBwXG4gICAgICAgICAgbl9zdGFja1tzLTFdID0gblxuICAgICAgICAgIHJlY291bnQocHApXG4gICAgICAgICAgcmVjb3VudChwKVxuICAgICAgICAgIGlmKHMgPj0gMykge1xuICAgICAgICAgICAgdmFyIHBwcCA9IG5fc3RhY2tbcy0zXVxuICAgICAgICAgICAgaWYocHBwLnJpZ2h0ID09PSBwcCkge1xuICAgICAgICAgICAgICBwcHAucmlnaHQgPSBwXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBwcHAubGVmdCA9IHBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHkgPSBwcC5sZWZ0XG4gICAgICAgIGlmKHkgJiYgeS5fY29sb3IgPT09IFJFRCkge1xuICAgICAgICAgIC8vY29uc29sZS5sb2coXCJSTHJcIilcbiAgICAgICAgICBwLl9jb2xvciA9IEJMQUNLXG4gICAgICAgICAgcHAubGVmdCA9IHJlcGFpbnQoQkxBQ0ssIHkpXG4gICAgICAgICAgcHAuX2NvbG9yID0gUkVEXG4gICAgICAgICAgcyAtPSAxXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy9jb25zb2xlLmxvZyhcIlJMYlwiKVxuICAgICAgICAgIHAubGVmdCA9IG4ucmlnaHRcbiAgICAgICAgICBwcC5fY29sb3IgPSBSRURcbiAgICAgICAgICBwcC5yaWdodCA9IG4ubGVmdFxuICAgICAgICAgIG4uX2NvbG9yID0gQkxBQ0tcbiAgICAgICAgICBuLnJpZ2h0ID0gcFxuICAgICAgICAgIG4ubGVmdCA9IHBwXG4gICAgICAgICAgbl9zdGFja1tzLTJdID0gblxuICAgICAgICAgIG5fc3RhY2tbcy0xXSA9IHBcbiAgICAgICAgICByZWNvdW50KHBwKVxuICAgICAgICAgIHJlY291bnQocClcbiAgICAgICAgICByZWNvdW50KG4pXG4gICAgICAgICAgaWYocyA+PSAzKSB7XG4gICAgICAgICAgICB2YXIgcHBwID0gbl9zdGFja1tzLTNdXG4gICAgICAgICAgICBpZihwcHAucmlnaHQgPT09IHBwKSB7XG4gICAgICAgICAgICAgIHBwcC5yaWdodCA9IG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHBwcC5sZWZ0ID0gblxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC8vUmV0dXJuIG5ldyB0cmVlXG4gIG5fc3RhY2tbMF0uX2NvbG9yID0gQkxBQ0tcbiAgcmV0dXJuIG5ldyBSZWRCbGFja1RyZWUoY21wLCBuX3N0YWNrWzBdKVxufVxuXG5cbi8vVmlzaXQgYWxsIG5vZGVzIGlub3JkZXJcbmZ1bmN0aW9uIGRvVmlzaXRGdWxsKHZpc2l0LCBub2RlKSB7XG4gIGlmKG5vZGUubGVmdCkge1xuICAgIHZhciB2ID0gZG9WaXNpdEZ1bGwodmlzaXQsIG5vZGUubGVmdClcbiAgICBpZih2KSB7IHJldHVybiB2IH1cbiAgfVxuICB2YXIgdiA9IHZpc2l0KG5vZGUua2V5LCBub2RlLnZhbHVlKVxuICBpZih2KSB7IHJldHVybiB2IH1cbiAgaWYobm9kZS5yaWdodCkge1xuICAgIHJldHVybiBkb1Zpc2l0RnVsbCh2aXNpdCwgbm9kZS5yaWdodClcbiAgfVxufVxuXG4vL1Zpc2l0IGhhbGYgbm9kZXMgaW4gb3JkZXJcbmZ1bmN0aW9uIGRvVmlzaXRIYWxmKGxvLCBjb21wYXJlLCB2aXNpdCwgbm9kZSkge1xuICB2YXIgbCA9IGNvbXBhcmUobG8sIG5vZGUua2V5KVxuICBpZihsIDw9IDApIHtcbiAgICBpZihub2RlLmxlZnQpIHtcbiAgICAgIHZhciB2ID0gZG9WaXNpdEhhbGYobG8sIGNvbXBhcmUsIHZpc2l0LCBub2RlLmxlZnQpXG4gICAgICBpZih2KSB7IHJldHVybiB2IH1cbiAgICB9XG4gICAgdmFyIHYgPSB2aXNpdChub2RlLmtleSwgbm9kZS52YWx1ZSlcbiAgICBpZih2KSB7IHJldHVybiB2IH1cbiAgfVxuICBpZihub2RlLnJpZ2h0KSB7XG4gICAgcmV0dXJuIGRvVmlzaXRIYWxmKGxvLCBjb21wYXJlLCB2aXNpdCwgbm9kZS5yaWdodClcbiAgfVxufVxuXG4vL1Zpc2l0IGFsbCBub2RlcyB3aXRoaW4gYSByYW5nZVxuZnVuY3Rpb24gZG9WaXNpdChsbywgaGksIGNvbXBhcmUsIHZpc2l0LCBub2RlKSB7XG4gIHZhciBsID0gY29tcGFyZShsbywgbm9kZS5rZXkpXG4gIHZhciBoID0gY29tcGFyZShoaSwgbm9kZS5rZXkpXG4gIHZhciB2XG4gIGlmKGwgPD0gMCkge1xuICAgIGlmKG5vZGUubGVmdCkge1xuICAgICAgdiA9IGRvVmlzaXQobG8sIGhpLCBjb21wYXJlLCB2aXNpdCwgbm9kZS5sZWZ0KVxuICAgICAgaWYodikgeyByZXR1cm4gdiB9XG4gICAgfVxuICAgIGlmKGggPiAwKSB7XG4gICAgICB2ID0gdmlzaXQobm9kZS5rZXksIG5vZGUudmFsdWUpXG4gICAgICBpZih2KSB7IHJldHVybiB2IH1cbiAgICB9XG4gIH1cbiAgaWYoaCA+IDAgJiYgbm9kZS5yaWdodCkge1xuICAgIHJldHVybiBkb1Zpc2l0KGxvLCBoaSwgY29tcGFyZSwgdmlzaXQsIG5vZGUucmlnaHQpXG4gIH1cbn1cblxuXG5wcm90by5mb3JFYWNoID0gZnVuY3Rpb24gcmJUcmVlRm9yRWFjaCh2aXNpdCwgbG8sIGhpKSB7XG4gIGlmKCF0aGlzLnJvb3QpIHtcbiAgICByZXR1cm5cbiAgfVxuICBzd2l0Y2goYXJndW1lbnRzLmxlbmd0aCkge1xuICAgIGNhc2UgMTpcbiAgICAgIHJldHVybiBkb1Zpc2l0RnVsbCh2aXNpdCwgdGhpcy5yb290KVxuICAgIGJyZWFrXG5cbiAgICBjYXNlIDI6XG4gICAgICByZXR1cm4gZG9WaXNpdEhhbGYobG8sIHRoaXMuX2NvbXBhcmUsIHZpc2l0LCB0aGlzLnJvb3QpXG4gICAgYnJlYWtcblxuICAgIGNhc2UgMzpcbiAgICAgIGlmKHRoaXMuX2NvbXBhcmUobG8sIGhpKSA+PSAwKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgcmV0dXJuIGRvVmlzaXQobG8sIGhpLCB0aGlzLl9jb21wYXJlLCB2aXNpdCwgdGhpcy5yb290KVxuICAgIGJyZWFrXG4gIH1cbn1cblxuLy9GaXJzdCBpdGVtIGluIGxpc3Rcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm90bywgXCJiZWdpblwiLCB7XG4gIGdldDogZnVuY3Rpb24oKSB7XG4gICAgdmFyIHN0YWNrID0gW11cbiAgICB2YXIgbiA9IHRoaXMucm9vdFxuICAgIHdoaWxlKG4pIHtcbiAgICAgIHN0YWNrLnB1c2gobilcbiAgICAgIG4gPSBuLmxlZnRcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBSZWRCbGFja1RyZWVJdGVyYXRvcih0aGlzLCBzdGFjaylcbiAgfVxufSlcblxuLy9MYXN0IGl0ZW0gaW4gbGlzdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3RvLCBcImVuZFwiLCB7XG4gIGdldDogZnVuY3Rpb24oKSB7XG4gICAgdmFyIHN0YWNrID0gW11cbiAgICB2YXIgbiA9IHRoaXMucm9vdFxuICAgIHdoaWxlKG4pIHtcbiAgICAgIHN0YWNrLnB1c2gobilcbiAgICAgIG4gPSBuLnJpZ2h0XG4gICAgfVxuICAgIHJldHVybiBuZXcgUmVkQmxhY2tUcmVlSXRlcmF0b3IodGhpcywgc3RhY2spXG4gIH1cbn0pXG5cbi8vRmluZCB0aGUgaXRoIGl0ZW0gaW4gdGhlIHRyZWVcbnByb3RvLmF0ID0gZnVuY3Rpb24oaWR4KSB7XG4gIGlmKGlkeCA8IDApIHtcbiAgICByZXR1cm4gbmV3IFJlZEJsYWNrVHJlZUl0ZXJhdG9yKHRoaXMsIFtdKVxuICB9XG4gIHZhciBuID0gdGhpcy5yb290XG4gIHZhciBzdGFjayA9IFtdXG4gIHdoaWxlKHRydWUpIHtcbiAgICBzdGFjay5wdXNoKG4pXG4gICAgaWYobi5sZWZ0KSB7XG4gICAgICBpZihpZHggPCBuLmxlZnQuX2NvdW50KSB7XG4gICAgICAgIG4gPSBuLmxlZnRcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cbiAgICAgIGlkeCAtPSBuLmxlZnQuX2NvdW50XG4gICAgfVxuICAgIGlmKCFpZHgpIHtcbiAgICAgIHJldHVybiBuZXcgUmVkQmxhY2tUcmVlSXRlcmF0b3IodGhpcywgc3RhY2spXG4gICAgfVxuICAgIGlkeCAtPSAxXG4gICAgaWYobi5yaWdodCkge1xuICAgICAgaWYoaWR4ID49IG4ucmlnaHQuX2NvdW50KSB7XG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgICBuID0gbi5yaWdodFxuICAgIH0gZWxzZSB7XG4gICAgICBicmVha1xuICAgIH1cbiAgfVxuICByZXR1cm4gbmV3IFJlZEJsYWNrVHJlZUl0ZXJhdG9yKHRoaXMsIFtdKVxufVxuXG5wcm90by5nZSA9IGZ1bmN0aW9uKGtleSkge1xuICB2YXIgY21wID0gdGhpcy5fY29tcGFyZVxuICB2YXIgbiA9IHRoaXMucm9vdFxuICB2YXIgc3RhY2sgPSBbXVxuICB2YXIgbGFzdF9wdHIgPSAwXG4gIHdoaWxlKG4pIHtcbiAgICB2YXIgZCA9IGNtcChrZXksIG4ua2V5KVxuICAgIHN0YWNrLnB1c2gobilcbiAgICBpZihkIDw9IDApIHtcbiAgICAgIGxhc3RfcHRyID0gc3RhY2subGVuZ3RoXG4gICAgfVxuICAgIGlmKGQgPD0gMCkge1xuICAgICAgbiA9IG4ubGVmdFxuICAgIH0gZWxzZSB7XG4gICAgICBuID0gbi5yaWdodFxuICAgIH1cbiAgfVxuICBzdGFjay5sZW5ndGggPSBsYXN0X3B0clxuICByZXR1cm4gbmV3IFJlZEJsYWNrVHJlZUl0ZXJhdG9yKHRoaXMsIHN0YWNrKVxufVxuXG5wcm90by5ndCA9IGZ1bmN0aW9uKGtleSkge1xuICB2YXIgY21wID0gdGhpcy5fY29tcGFyZVxuICB2YXIgbiA9IHRoaXMucm9vdFxuICB2YXIgc3RhY2sgPSBbXVxuICB2YXIgbGFzdF9wdHIgPSAwXG4gIHdoaWxlKG4pIHtcbiAgICB2YXIgZCA9IGNtcChrZXksIG4ua2V5KVxuICAgIHN0YWNrLnB1c2gobilcbiAgICBpZihkIDwgMCkge1xuICAgICAgbGFzdF9wdHIgPSBzdGFjay5sZW5ndGhcbiAgICB9XG4gICAgaWYoZCA8IDApIHtcbiAgICAgIG4gPSBuLmxlZnRcbiAgICB9IGVsc2Uge1xuICAgICAgbiA9IG4ucmlnaHRcbiAgICB9XG4gIH1cbiAgc3RhY2subGVuZ3RoID0gbGFzdF9wdHJcbiAgcmV0dXJuIG5ldyBSZWRCbGFja1RyZWVJdGVyYXRvcih0aGlzLCBzdGFjaylcbn1cblxucHJvdG8ubHQgPSBmdW5jdGlvbihrZXkpIHtcbiAgdmFyIGNtcCA9IHRoaXMuX2NvbXBhcmVcbiAgdmFyIG4gPSB0aGlzLnJvb3RcbiAgdmFyIHN0YWNrID0gW11cbiAgdmFyIGxhc3RfcHRyID0gMFxuICB3aGlsZShuKSB7XG4gICAgdmFyIGQgPSBjbXAoa2V5LCBuLmtleSlcbiAgICBzdGFjay5wdXNoKG4pXG4gICAgaWYoZCA+IDApIHtcbiAgICAgIGxhc3RfcHRyID0gc3RhY2subGVuZ3RoXG4gICAgfVxuICAgIGlmKGQgPD0gMCkge1xuICAgICAgbiA9IG4ubGVmdFxuICAgIH0gZWxzZSB7XG4gICAgICBuID0gbi5yaWdodFxuICAgIH1cbiAgfVxuICBzdGFjay5sZW5ndGggPSBsYXN0X3B0clxuICByZXR1cm4gbmV3IFJlZEJsYWNrVHJlZUl0ZXJhdG9yKHRoaXMsIHN0YWNrKVxufVxuXG5wcm90by5sZSA9IGZ1bmN0aW9uKGtleSkge1xuICB2YXIgY21wID0gdGhpcy5fY29tcGFyZVxuICB2YXIgbiA9IHRoaXMucm9vdFxuICB2YXIgc3RhY2sgPSBbXVxuICB2YXIgbGFzdF9wdHIgPSAwXG4gIHdoaWxlKG4pIHtcbiAgICB2YXIgZCA9IGNtcChrZXksIG4ua2V5KVxuICAgIHN0YWNrLnB1c2gobilcbiAgICBpZihkID49IDApIHtcbiAgICAgIGxhc3RfcHRyID0gc3RhY2subGVuZ3RoXG4gICAgfVxuICAgIGlmKGQgPCAwKSB7XG4gICAgICBuID0gbi5sZWZ0XG4gICAgfSBlbHNlIHtcbiAgICAgIG4gPSBuLnJpZ2h0XG4gICAgfVxuICB9XG4gIHN0YWNrLmxlbmd0aCA9IGxhc3RfcHRyXG4gIHJldHVybiBuZXcgUmVkQmxhY2tUcmVlSXRlcmF0b3IodGhpcywgc3RhY2spXG59XG5cbi8vRmluZHMgdGhlIGl0ZW0gd2l0aCBrZXkgaWYgaXQgZXhpc3RzXG5wcm90by5maW5kID0gZnVuY3Rpb24oa2V5KSB7XG4gIHZhciBjbXAgPSB0aGlzLl9jb21wYXJlXG4gIHZhciBuID0gdGhpcy5yb290XG4gIHZhciBzdGFjayA9IFtdXG4gIHdoaWxlKG4pIHtcbiAgICB2YXIgZCA9IGNtcChrZXksIG4ua2V5KVxuICAgIHN0YWNrLnB1c2gobilcbiAgICBpZihkID09PSAwKSB7XG4gICAgICByZXR1cm4gbmV3IFJlZEJsYWNrVHJlZUl0ZXJhdG9yKHRoaXMsIHN0YWNrKVxuICAgIH1cbiAgICBpZihkIDw9IDApIHtcbiAgICAgIG4gPSBuLmxlZnRcbiAgICB9IGVsc2Uge1xuICAgICAgbiA9IG4ucmlnaHRcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG5ldyBSZWRCbGFja1RyZWVJdGVyYXRvcih0aGlzLCBbXSlcbn1cblxuLy9SZW1vdmVzIGl0ZW0gd2l0aCBrZXkgZnJvbSB0cmVlXG5wcm90by5yZW1vdmUgPSBmdW5jdGlvbihrZXkpIHtcbiAgdmFyIGl0ZXIgPSB0aGlzLmZpbmQoa2V5KVxuICBpZihpdGVyKSB7XG4gICAgcmV0dXJuIGl0ZXIucmVtb3ZlKClcbiAgfVxuICByZXR1cm4gdGhpc1xufVxuXG4vL1JldHVybnMgdGhlIGl0ZW0gYXQgYGtleWBcbnByb3RvLmdldCA9IGZ1bmN0aW9uKGtleSkge1xuICB2YXIgY21wID0gdGhpcy5fY29tcGFyZVxuICB2YXIgbiA9IHRoaXMucm9vdFxuICB3aGlsZShuKSB7XG4gICAgdmFyIGQgPSBjbXAoa2V5LCBuLmtleSlcbiAgICBpZihkID09PSAwKSB7XG4gICAgICByZXR1cm4gbi52YWx1ZVxuICAgIH1cbiAgICBpZihkIDw9IDApIHtcbiAgICAgIG4gPSBuLmxlZnRcbiAgICB9IGVsc2Uge1xuICAgICAgbiA9IG4ucmlnaHRcbiAgICB9XG4gIH1cbiAgcmV0dXJuXG59XG5cbi8vSXRlcmF0b3IgZm9yIHJlZCBibGFjayB0cmVlXG5mdW5jdGlvbiBSZWRCbGFja1RyZWVJdGVyYXRvcih0cmVlLCBzdGFjaykge1xuICB0aGlzLnRyZWUgPSB0cmVlXG4gIHRoaXMuX3N0YWNrID0gc3RhY2tcbn1cblxudmFyIGlwcm90byA9IFJlZEJsYWNrVHJlZUl0ZXJhdG9yLnByb3RvdHlwZVxuXG4vL1Rlc3QgaWYgaXRlcmF0b3IgaXMgdmFsaWRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShpcHJvdG8sIFwidmFsaWRcIiwge1xuICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9zdGFjay5sZW5ndGggPiAwXG4gIH1cbn0pXG5cbi8vTm9kZSBvZiB0aGUgaXRlcmF0b3Jcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShpcHJvdG8sIFwibm9kZVwiLCB7XG4gIGdldDogZnVuY3Rpb24oKSB7XG4gICAgaWYodGhpcy5fc3RhY2subGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3N0YWNrW3RoaXMuX3N0YWNrLmxlbmd0aC0xXVxuICAgIH1cbiAgICByZXR1cm4gbnVsbFxuICB9LFxuICBlbnVtZXJhYmxlOiB0cnVlXG59KVxuXG4vL01ha2VzIGEgY29weSBvZiBhbiBpdGVyYXRvclxuaXByb3RvLmNsb25lID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgUmVkQmxhY2tUcmVlSXRlcmF0b3IodGhpcy50cmVlLCB0aGlzLl9zdGFjay5zbGljZSgpKVxufVxuXG4vL1N3YXBzIHR3byBub2Rlc1xuZnVuY3Rpb24gc3dhcE5vZGUobiwgdikge1xuICBuLmtleSA9IHYua2V5XG4gIG4udmFsdWUgPSB2LnZhbHVlXG4gIG4ubGVmdCA9IHYubGVmdFxuICBuLnJpZ2h0ID0gdi5yaWdodFxuICBuLl9jb2xvciA9IHYuX2NvbG9yXG4gIG4uX2NvdW50ID0gdi5fY291bnRcbn1cblxuLy9GaXggdXAgYSBkb3VibGUgYmxhY2sgbm9kZSBpbiBhIHRyZWVcbmZ1bmN0aW9uIGZpeERvdWJsZUJsYWNrKHN0YWNrKSB7XG4gIHZhciBuLCBwLCBzLCB6XG4gIGZvcih2YXIgaT1zdGFjay5sZW5ndGgtMTsgaT49MDsgLS1pKSB7XG4gICAgbiA9IHN0YWNrW2ldXG4gICAgaWYoaSA9PT0gMCkge1xuICAgICAgbi5fY29sb3IgPSBCTEFDS1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIC8vY29uc29sZS5sb2coXCJ2aXNpdCBub2RlOlwiLCBuLmtleSwgaSwgc3RhY2tbaV0ua2V5LCBzdGFja1tpLTFdLmtleSlcbiAgICBwID0gc3RhY2tbaS0xXVxuICAgIGlmKHAubGVmdCA9PT0gbikge1xuICAgICAgLy9jb25zb2xlLmxvZyhcImxlZnQgY2hpbGRcIilcbiAgICAgIHMgPSBwLnJpZ2h0XG4gICAgICBpZihzLnJpZ2h0ICYmIHMucmlnaHQuX2NvbG9yID09PSBSRUQpIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcImNhc2UgMTogcmlnaHQgc2libGluZyBjaGlsZCByZWRcIilcbiAgICAgICAgcyA9IHAucmlnaHQgPSBjbG9uZU5vZGUocylcbiAgICAgICAgeiA9IHMucmlnaHQgPSBjbG9uZU5vZGUocy5yaWdodClcbiAgICAgICAgcC5yaWdodCA9IHMubGVmdFxuICAgICAgICBzLmxlZnQgPSBwXG4gICAgICAgIHMucmlnaHQgPSB6XG4gICAgICAgIHMuX2NvbG9yID0gcC5fY29sb3JcbiAgICAgICAgbi5fY29sb3IgPSBCTEFDS1xuICAgICAgICBwLl9jb2xvciA9IEJMQUNLXG4gICAgICAgIHouX2NvbG9yID0gQkxBQ0tcbiAgICAgICAgcmVjb3VudChwKVxuICAgICAgICByZWNvdW50KHMpXG4gICAgICAgIGlmKGkgPiAxKSB7XG4gICAgICAgICAgdmFyIHBwID0gc3RhY2tbaS0yXVxuICAgICAgICAgIGlmKHBwLmxlZnQgPT09IHApIHtcbiAgICAgICAgICAgIHBwLmxlZnQgPSBzXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBwLnJpZ2h0ID0gc1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzdGFja1tpLTFdID0gc1xuICAgICAgICByZXR1cm5cbiAgICAgIH0gZWxzZSBpZihzLmxlZnQgJiYgcy5sZWZ0Ll9jb2xvciA9PT0gUkVEKSB7XG4gICAgICAgIC8vY29uc29sZS5sb2coXCJjYXNlIDE6IGxlZnQgc2libGluZyBjaGlsZCByZWRcIilcbiAgICAgICAgcyA9IHAucmlnaHQgPSBjbG9uZU5vZGUocylcbiAgICAgICAgeiA9IHMubGVmdCA9IGNsb25lTm9kZShzLmxlZnQpXG4gICAgICAgIHAucmlnaHQgPSB6LmxlZnRcbiAgICAgICAgcy5sZWZ0ID0gei5yaWdodFxuICAgICAgICB6LmxlZnQgPSBwXG4gICAgICAgIHoucmlnaHQgPSBzXG4gICAgICAgIHouX2NvbG9yID0gcC5fY29sb3JcbiAgICAgICAgcC5fY29sb3IgPSBCTEFDS1xuICAgICAgICBzLl9jb2xvciA9IEJMQUNLXG4gICAgICAgIG4uX2NvbG9yID0gQkxBQ0tcbiAgICAgICAgcmVjb3VudChwKVxuICAgICAgICByZWNvdW50KHMpXG4gICAgICAgIHJlY291bnQoeilcbiAgICAgICAgaWYoaSA+IDEpIHtcbiAgICAgICAgICB2YXIgcHAgPSBzdGFja1tpLTJdXG4gICAgICAgICAgaWYocHAubGVmdCA9PT0gcCkge1xuICAgICAgICAgICAgcHAubGVmdCA9IHpcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHAucmlnaHQgPSB6XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHN0YWNrW2ktMV0gPSB6XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgaWYocy5fY29sb3IgPT09IEJMQUNLKSB7XG4gICAgICAgIGlmKHAuX2NvbG9yID09PSBSRUQpIHtcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiY2FzZSAyOiBibGFjayBzaWJsaW5nLCByZWQgcGFyZW50XCIsIHAucmlnaHQudmFsdWUpXG4gICAgICAgICAgcC5fY29sb3IgPSBCTEFDS1xuICAgICAgICAgIHAucmlnaHQgPSByZXBhaW50KFJFRCwgcylcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiY2FzZSAyOiBibGFjayBzaWJsaW5nLCBibGFjayBwYXJlbnRcIiwgcC5yaWdodC52YWx1ZSlcbiAgICAgICAgICBwLnJpZ2h0ID0gcmVwYWludChSRUQsIHMpXG4gICAgICAgICAgY29udGludWUgIFxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwiY2FzZSAzOiByZWQgc2libGluZ1wiKVxuICAgICAgICBzID0gY2xvbmVOb2RlKHMpXG4gICAgICAgIHAucmlnaHQgPSBzLmxlZnRcbiAgICAgICAgcy5sZWZ0ID0gcFxuICAgICAgICBzLl9jb2xvciA9IHAuX2NvbG9yXG4gICAgICAgIHAuX2NvbG9yID0gUkVEXG4gICAgICAgIHJlY291bnQocClcbiAgICAgICAgcmVjb3VudChzKVxuICAgICAgICBpZihpID4gMSkge1xuICAgICAgICAgIHZhciBwcCA9IHN0YWNrW2ktMl1cbiAgICAgICAgICBpZihwcC5sZWZ0ID09PSBwKSB7XG4gICAgICAgICAgICBwcC5sZWZ0ID0gc1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwcC5yaWdodCA9IHNcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc3RhY2tbaS0xXSA9IHNcbiAgICAgICAgc3RhY2tbaV0gPSBwXG4gICAgICAgIGlmKGkrMSA8IHN0YWNrLmxlbmd0aCkge1xuICAgICAgICAgIHN0YWNrW2krMV0gPSBuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3RhY2sucHVzaChuKVxuICAgICAgICB9XG4gICAgICAgIGkgPSBpKzJcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy9jb25zb2xlLmxvZyhcInJpZ2h0IGNoaWxkXCIpXG4gICAgICBzID0gcC5sZWZ0XG4gICAgICBpZihzLmxlZnQgJiYgcy5sZWZ0Ll9jb2xvciA9PT0gUkVEKSB7XG4gICAgICAgIC8vY29uc29sZS5sb2coXCJjYXNlIDE6IGxlZnQgc2libGluZyBjaGlsZCByZWRcIiwgcC52YWx1ZSwgcC5fY29sb3IpXG4gICAgICAgIHMgPSBwLmxlZnQgPSBjbG9uZU5vZGUocylcbiAgICAgICAgeiA9IHMubGVmdCA9IGNsb25lTm9kZShzLmxlZnQpXG4gICAgICAgIHAubGVmdCA9IHMucmlnaHRcbiAgICAgICAgcy5yaWdodCA9IHBcbiAgICAgICAgcy5sZWZ0ID0gelxuICAgICAgICBzLl9jb2xvciA9IHAuX2NvbG9yXG4gICAgICAgIG4uX2NvbG9yID0gQkxBQ0tcbiAgICAgICAgcC5fY29sb3IgPSBCTEFDS1xuICAgICAgICB6Ll9jb2xvciA9IEJMQUNLXG4gICAgICAgIHJlY291bnQocClcbiAgICAgICAgcmVjb3VudChzKVxuICAgICAgICBpZihpID4gMSkge1xuICAgICAgICAgIHZhciBwcCA9IHN0YWNrW2ktMl1cbiAgICAgICAgICBpZihwcC5yaWdodCA9PT0gcCkge1xuICAgICAgICAgICAgcHAucmlnaHQgPSBzXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBwLmxlZnQgPSBzXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHN0YWNrW2ktMV0gPSBzXG4gICAgICAgIHJldHVyblxuICAgICAgfSBlbHNlIGlmKHMucmlnaHQgJiYgcy5yaWdodC5fY29sb3IgPT09IFJFRCkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwiY2FzZSAxOiByaWdodCBzaWJsaW5nIGNoaWxkIHJlZFwiKVxuICAgICAgICBzID0gcC5sZWZ0ID0gY2xvbmVOb2RlKHMpXG4gICAgICAgIHogPSBzLnJpZ2h0ID0gY2xvbmVOb2RlKHMucmlnaHQpXG4gICAgICAgIHAubGVmdCA9IHoucmlnaHRcbiAgICAgICAgcy5yaWdodCA9IHoubGVmdFxuICAgICAgICB6LnJpZ2h0ID0gcFxuICAgICAgICB6LmxlZnQgPSBzXG4gICAgICAgIHouX2NvbG9yID0gcC5fY29sb3JcbiAgICAgICAgcC5fY29sb3IgPSBCTEFDS1xuICAgICAgICBzLl9jb2xvciA9IEJMQUNLXG4gICAgICAgIG4uX2NvbG9yID0gQkxBQ0tcbiAgICAgICAgcmVjb3VudChwKVxuICAgICAgICByZWNvdW50KHMpXG4gICAgICAgIHJlY291bnQoeilcbiAgICAgICAgaWYoaSA+IDEpIHtcbiAgICAgICAgICB2YXIgcHAgPSBzdGFja1tpLTJdXG4gICAgICAgICAgaWYocHAucmlnaHQgPT09IHApIHtcbiAgICAgICAgICAgIHBwLnJpZ2h0ID0gelxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwcC5sZWZ0ID0gelxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzdGFja1tpLTFdID0gelxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGlmKHMuX2NvbG9yID09PSBCTEFDSykge1xuICAgICAgICBpZihwLl9jb2xvciA9PT0gUkVEKSB7XG4gICAgICAgICAgLy9jb25zb2xlLmxvZyhcImNhc2UgMjogYmxhY2sgc2libGluZywgcmVkIHBhcmVudFwiKVxuICAgICAgICAgIHAuX2NvbG9yID0gQkxBQ0tcbiAgICAgICAgICBwLmxlZnQgPSByZXBhaW50KFJFRCwgcylcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiY2FzZSAyOiBibGFjayBzaWJsaW5nLCBibGFjayBwYXJlbnRcIilcbiAgICAgICAgICBwLmxlZnQgPSByZXBhaW50KFJFRCwgcylcbiAgICAgICAgICBjb250aW51ZSAgXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vY29uc29sZS5sb2coXCJjYXNlIDM6IHJlZCBzaWJsaW5nXCIpXG4gICAgICAgIHMgPSBjbG9uZU5vZGUocylcbiAgICAgICAgcC5sZWZ0ID0gcy5yaWdodFxuICAgICAgICBzLnJpZ2h0ID0gcFxuICAgICAgICBzLl9jb2xvciA9IHAuX2NvbG9yXG4gICAgICAgIHAuX2NvbG9yID0gUkVEXG4gICAgICAgIHJlY291bnQocClcbiAgICAgICAgcmVjb3VudChzKVxuICAgICAgICBpZihpID4gMSkge1xuICAgICAgICAgIHZhciBwcCA9IHN0YWNrW2ktMl1cbiAgICAgICAgICBpZihwcC5yaWdodCA9PT0gcCkge1xuICAgICAgICAgICAgcHAucmlnaHQgPSBzXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBwLmxlZnQgPSBzXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHN0YWNrW2ktMV0gPSBzXG4gICAgICAgIHN0YWNrW2ldID0gcFxuICAgICAgICBpZihpKzEgPCBzdGFjay5sZW5ndGgpIHtcbiAgICAgICAgICBzdGFja1tpKzFdID0gblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN0YWNrLnB1c2gobilcbiAgICAgICAgfVxuICAgICAgICBpID0gaSsyXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vUmVtb3ZlcyBpdGVtIGF0IGl0ZXJhdG9yIGZyb20gdHJlZVxuaXByb3RvLnJlbW92ZSA9IGZ1bmN0aW9uKCkge1xuICB2YXIgc3RhY2sgPSB0aGlzLl9zdGFja1xuICBpZihzdGFjay5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gdGhpcy50cmVlXG4gIH1cbiAgLy9GaXJzdCBjb3B5IHBhdGggdG8gbm9kZVxuICB2YXIgY3N0YWNrID0gbmV3IEFycmF5KHN0YWNrLmxlbmd0aClcbiAgdmFyIG4gPSBzdGFja1tzdGFjay5sZW5ndGgtMV1cbiAgY3N0YWNrW2NzdGFjay5sZW5ndGgtMV0gPSBuZXcgUkJOb2RlKG4uX2NvbG9yLCBuLmtleSwgbi52YWx1ZSwgbi5sZWZ0LCBuLnJpZ2h0LCBuLl9jb3VudClcbiAgZm9yKHZhciBpPXN0YWNrLmxlbmd0aC0yOyBpPj0wOyAtLWkpIHtcbiAgICB2YXIgbiA9IHN0YWNrW2ldXG4gICAgaWYobi5sZWZ0ID09PSBzdGFja1tpKzFdKSB7XG4gICAgICBjc3RhY2tbaV0gPSBuZXcgUkJOb2RlKG4uX2NvbG9yLCBuLmtleSwgbi52YWx1ZSwgY3N0YWNrW2krMV0sIG4ucmlnaHQsIG4uX2NvdW50KVxuICAgIH0gZWxzZSB7XG4gICAgICBjc3RhY2tbaV0gPSBuZXcgUkJOb2RlKG4uX2NvbG9yLCBuLmtleSwgbi52YWx1ZSwgbi5sZWZ0LCBjc3RhY2tbaSsxXSwgbi5fY291bnQpXG4gICAgfVxuICB9XG5cbiAgLy9HZXQgbm9kZVxuICBuID0gY3N0YWNrW2NzdGFjay5sZW5ndGgtMV1cbiAgLy9jb25zb2xlLmxvZyhcInN0YXJ0IHJlbW92ZTogXCIsIG4udmFsdWUpXG5cbiAgLy9JZiBub3QgbGVhZiwgdGhlbiBzd2FwIHdpdGggcHJldmlvdXMgbm9kZVxuICBpZihuLmxlZnQgJiYgbi5yaWdodCkge1xuICAgIC8vY29uc29sZS5sb2coXCJtb3ZpbmcgdG8gbGVhZlwiKVxuXG4gICAgLy9GaXJzdCB3YWxrIHRvIHByZXZpb3VzIGxlYWZcbiAgICB2YXIgc3BsaXQgPSBjc3RhY2subGVuZ3RoXG4gICAgbiA9IG4ubGVmdFxuICAgIHdoaWxlKG4ucmlnaHQpIHtcbiAgICAgIGNzdGFjay5wdXNoKG4pXG4gICAgICBuID0gbi5yaWdodFxuICAgIH1cbiAgICAvL0NvcHkgcGF0aCB0byBsZWFmXG4gICAgdmFyIHYgPSBjc3RhY2tbc3BsaXQtMV1cbiAgICBjc3RhY2sucHVzaChuZXcgUkJOb2RlKG4uX2NvbG9yLCB2LmtleSwgdi52YWx1ZSwgbi5sZWZ0LCBuLnJpZ2h0LCBuLl9jb3VudCkpXG4gICAgY3N0YWNrW3NwbGl0LTFdLmtleSA9IG4ua2V5XG4gICAgY3N0YWNrW3NwbGl0LTFdLnZhbHVlID0gbi52YWx1ZVxuXG4gICAgLy9GaXggdXAgc3RhY2tcbiAgICBmb3IodmFyIGk9Y3N0YWNrLmxlbmd0aC0yOyBpPj1zcGxpdDsgLS1pKSB7XG4gICAgICBuID0gY3N0YWNrW2ldXG4gICAgICBjc3RhY2tbaV0gPSBuZXcgUkJOb2RlKG4uX2NvbG9yLCBuLmtleSwgbi52YWx1ZSwgbi5sZWZ0LCBjc3RhY2tbaSsxXSwgbi5fY291bnQpXG4gICAgfVxuICAgIGNzdGFja1tzcGxpdC0xXS5sZWZ0ID0gY3N0YWNrW3NwbGl0XVxuICB9XG4gIC8vY29uc29sZS5sb2coXCJzdGFjaz1cIiwgY3N0YWNrLm1hcChmdW5jdGlvbih2KSB7IHJldHVybiB2LnZhbHVlIH0pKVxuXG4gIC8vUmVtb3ZlIGxlYWYgbm9kZVxuICBuID0gY3N0YWNrW2NzdGFjay5sZW5ndGgtMV1cbiAgaWYobi5fY29sb3IgPT09IFJFRCkge1xuICAgIC8vRWFzeSBjYXNlOiByZW1vdmluZyByZWQgbGVhZlxuICAgIC8vY29uc29sZS5sb2coXCJSRUQgbGVhZlwiKVxuICAgIHZhciBwID0gY3N0YWNrW2NzdGFjay5sZW5ndGgtMl1cbiAgICBpZihwLmxlZnQgPT09IG4pIHtcbiAgICAgIHAubGVmdCA9IG51bGxcbiAgICB9IGVsc2UgaWYocC5yaWdodCA9PT0gbikge1xuICAgICAgcC5yaWdodCA9IG51bGxcbiAgICB9XG4gICAgY3N0YWNrLnBvcCgpXG4gICAgZm9yKHZhciBpPTA7IGk8Y3N0YWNrLmxlbmd0aDsgKytpKSB7XG4gICAgICBjc3RhY2tbaV0uX2NvdW50LS1cbiAgICB9XG4gICAgcmV0dXJuIG5ldyBSZWRCbGFja1RyZWUodGhpcy50cmVlLl9jb21wYXJlLCBjc3RhY2tbMF0pXG4gIH0gZWxzZSB7XG4gICAgaWYobi5sZWZ0IHx8IG4ucmlnaHQpIHtcbiAgICAgIC8vU2Vjb25kIGVhc3kgY2FzZTogIFNpbmdsZSBjaGlsZCBibGFjayBwYXJlbnRcbiAgICAgIC8vY29uc29sZS5sb2coXCJCTEFDSyBzaW5nbGUgY2hpbGRcIilcbiAgICAgIGlmKG4ubGVmdCkge1xuICAgICAgICBzd2FwTm9kZShuLCBuLmxlZnQpXG4gICAgICB9IGVsc2UgaWYobi5yaWdodCkge1xuICAgICAgICBzd2FwTm9kZShuLCBuLnJpZ2h0KVxuICAgICAgfVxuICAgICAgLy9DaGlsZCBtdXN0IGJlIHJlZCwgc28gcmVwYWludCBpdCBibGFjayB0byBiYWxhbmNlIGNvbG9yXG4gICAgICBuLl9jb2xvciA9IEJMQUNLXG4gICAgICBmb3IodmFyIGk9MDsgaTxjc3RhY2subGVuZ3RoLTE7ICsraSkge1xuICAgICAgICBjc3RhY2tbaV0uX2NvdW50LS1cbiAgICAgIH1cbiAgICAgIHJldHVybiBuZXcgUmVkQmxhY2tUcmVlKHRoaXMudHJlZS5fY29tcGFyZSwgY3N0YWNrWzBdKVxuICAgIH0gZWxzZSBpZihjc3RhY2subGVuZ3RoID09PSAxKSB7XG4gICAgICAvL1RoaXJkIGVhc3kgY2FzZTogcm9vdFxuICAgICAgLy9jb25zb2xlLmxvZyhcIlJPT1RcIilcbiAgICAgIHJldHVybiBuZXcgUmVkQmxhY2tUcmVlKHRoaXMudHJlZS5fY29tcGFyZSwgbnVsbClcbiAgICB9IGVsc2Uge1xuICAgICAgLy9IYXJkIGNhc2U6IFJlcGFpbnQgbiwgYW5kIHRoZW4gZG8gc29tZSBuYXN0eSBzdHVmZlxuICAgICAgLy9jb25zb2xlLmxvZyhcIkJMQUNLIGxlYWYgbm8gY2hpbGRyZW5cIilcbiAgICAgIGZvcih2YXIgaT0wOyBpPGNzdGFjay5sZW5ndGg7ICsraSkge1xuICAgICAgICBjc3RhY2tbaV0uX2NvdW50LS1cbiAgICAgIH1cbiAgICAgIHZhciBwYXJlbnQgPSBjc3RhY2tbY3N0YWNrLmxlbmd0aC0yXVxuICAgICAgZml4RG91YmxlQmxhY2soY3N0YWNrKVxuICAgICAgLy9GaXggdXAgbGlua3NcbiAgICAgIGlmKHBhcmVudC5sZWZ0ID09PSBuKSB7XG4gICAgICAgIHBhcmVudC5sZWZ0ID0gbnVsbFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFyZW50LnJpZ2h0ID0gbnVsbFxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gbmV3IFJlZEJsYWNrVHJlZSh0aGlzLnRyZWUuX2NvbXBhcmUsIGNzdGFja1swXSlcbn1cblxuLy9SZXR1cm5zIGtleVxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGlwcm90bywgXCJrZXlcIiwge1xuICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgIGlmKHRoaXMuX3N0YWNrLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiB0aGlzLl9zdGFja1t0aGlzLl9zdGFjay5sZW5ndGgtMV0ua2V5XG4gICAgfVxuICAgIHJldHVyblxuICB9LFxuICBlbnVtZXJhYmxlOiB0cnVlXG59KVxuXG4vL1JldHVybnMgdmFsdWVcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShpcHJvdG8sIFwidmFsdWVcIiwge1xuICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgIGlmKHRoaXMuX3N0YWNrLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiB0aGlzLl9zdGFja1t0aGlzLl9zdGFjay5sZW5ndGgtMV0udmFsdWVcbiAgICB9XG4gICAgcmV0dXJuXG4gIH0sXG4gIGVudW1lcmFibGU6IHRydWVcbn0pXG5cblxuLy9SZXR1cm5zIHRoZSBwb3NpdGlvbiBvZiB0aGlzIGl0ZXJhdG9yIGluIHRoZSBzb3J0ZWQgbGlzdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGlwcm90bywgXCJpbmRleFwiLCB7XG4gIGdldDogZnVuY3Rpb24oKSB7XG4gICAgdmFyIGlkeCA9IDBcbiAgICB2YXIgc3RhY2sgPSB0aGlzLl9zdGFja1xuICAgIGlmKHN0YWNrLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdmFyIHIgPSB0aGlzLnRyZWUucm9vdFxuICAgICAgaWYocikge1xuICAgICAgICByZXR1cm4gci5fY291bnRcbiAgICAgIH1cbiAgICAgIHJldHVybiAwXG4gICAgfSBlbHNlIGlmKHN0YWNrW3N0YWNrLmxlbmd0aC0xXS5sZWZ0KSB7XG4gICAgICBpZHggPSBzdGFja1tzdGFjay5sZW5ndGgtMV0ubGVmdC5fY291bnRcbiAgICB9XG4gICAgZm9yKHZhciBzPXN0YWNrLmxlbmd0aC0yOyBzPj0wOyAtLXMpIHtcbiAgICAgIGlmKHN0YWNrW3MrMV0gPT09IHN0YWNrW3NdLnJpZ2h0KSB7XG4gICAgICAgICsraWR4XG4gICAgICAgIGlmKHN0YWNrW3NdLmxlZnQpIHtcbiAgICAgICAgICBpZHggKz0gc3RhY2tbc10ubGVmdC5fY291bnRcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaWR4XG4gIH0sXG4gIGVudW1lcmFibGU6IHRydWVcbn0pXG5cbi8vQWR2YW5jZXMgaXRlcmF0b3IgdG8gbmV4dCBlbGVtZW50IGluIGxpc3Rcbmlwcm90by5uZXh0ID0gZnVuY3Rpb24oKSB7XG4gIHZhciBzdGFjayA9IHRoaXMuX3N0YWNrXG4gIGlmKHN0YWNrLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVyblxuICB9XG4gIHZhciBuID0gc3RhY2tbc3RhY2subGVuZ3RoLTFdXG4gIGlmKG4ucmlnaHQpIHtcbiAgICBuID0gbi5yaWdodFxuICAgIHdoaWxlKG4pIHtcbiAgICAgIHN0YWNrLnB1c2gobilcbiAgICAgIG4gPSBuLmxlZnRcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgc3RhY2sucG9wKClcbiAgICB3aGlsZShzdGFjay5sZW5ndGggPiAwICYmIHN0YWNrW3N0YWNrLmxlbmd0aC0xXS5yaWdodCA9PT0gbikge1xuICAgICAgbiA9IHN0YWNrW3N0YWNrLmxlbmd0aC0xXVxuICAgICAgc3RhY2sucG9wKClcbiAgICB9XG4gIH1cbn1cblxuLy9DaGVja3MgaWYgaXRlcmF0b3IgaXMgYXQgZW5kIG9mIHRyZWVcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShpcHJvdG8sIFwiaGFzTmV4dFwiLCB7XG4gIGdldDogZnVuY3Rpb24oKSB7XG4gICAgdmFyIHN0YWNrID0gdGhpcy5fc3RhY2tcbiAgICBpZihzdGFjay5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgICBpZihzdGFja1tzdGFjay5sZW5ndGgtMV0ucmlnaHQpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICAgIGZvcih2YXIgcz1zdGFjay5sZW5ndGgtMTsgcz4wOyAtLXMpIHtcbiAgICAgIGlmKHN0YWNrW3MtMV0ubGVmdCA9PT0gc3RhY2tbc10pIHtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn0pXG5cbi8vVXBkYXRlIHZhbHVlXG5pcHJvdG8udXBkYXRlID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgdmFyIHN0YWNrID0gdGhpcy5fc3RhY2tcbiAgaWYoc3RhY2subGVuZ3RoID09PSAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ2FuJ3QgdXBkYXRlIGVtcHR5IG5vZGUhXCIpXG4gIH1cbiAgdmFyIGNzdGFjayA9IG5ldyBBcnJheShzdGFjay5sZW5ndGgpXG4gIHZhciBuID0gc3RhY2tbc3RhY2subGVuZ3RoLTFdXG4gIGNzdGFja1tjc3RhY2subGVuZ3RoLTFdID0gbmV3IFJCTm9kZShuLl9jb2xvciwgbi5rZXksIHZhbHVlLCBuLmxlZnQsIG4ucmlnaHQsIG4uX2NvdW50KVxuICBmb3IodmFyIGk9c3RhY2subGVuZ3RoLTI7IGk+PTA7IC0taSkge1xuICAgIG4gPSBzdGFja1tpXVxuICAgIGlmKG4ubGVmdCA9PT0gc3RhY2tbaSsxXSkge1xuICAgICAgY3N0YWNrW2ldID0gbmV3IFJCTm9kZShuLl9jb2xvciwgbi5rZXksIG4udmFsdWUsIGNzdGFja1tpKzFdLCBuLnJpZ2h0LCBuLl9jb3VudClcbiAgICB9IGVsc2Uge1xuICAgICAgY3N0YWNrW2ldID0gbmV3IFJCTm9kZShuLl9jb2xvciwgbi5rZXksIG4udmFsdWUsIG4ubGVmdCwgY3N0YWNrW2krMV0sIG4uX2NvdW50KVxuICAgIH1cbiAgfVxuICByZXR1cm4gbmV3IFJlZEJsYWNrVHJlZSh0aGlzLnRyZWUuX2NvbXBhcmUsIGNzdGFja1swXSlcbn1cblxuLy9Nb3ZlcyBpdGVyYXRvciBiYWNrd2FyZCBvbmUgZWxlbWVudFxuaXByb3RvLnByZXYgPSBmdW5jdGlvbigpIHtcbiAgdmFyIHN0YWNrID0gdGhpcy5fc3RhY2tcbiAgaWYoc3RhY2subGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgdmFyIG4gPSBzdGFja1tzdGFjay5sZW5ndGgtMV1cbiAgaWYobi5sZWZ0KSB7XG4gICAgbiA9IG4ubGVmdFxuICAgIHdoaWxlKG4pIHtcbiAgICAgIHN0YWNrLnB1c2gobilcbiAgICAgIG4gPSBuLnJpZ2h0XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHN0YWNrLnBvcCgpXG4gICAgd2hpbGUoc3RhY2subGVuZ3RoID4gMCAmJiBzdGFja1tzdGFjay5sZW5ndGgtMV0ubGVmdCA9PT0gbikge1xuICAgICAgbiA9IHN0YWNrW3N0YWNrLmxlbmd0aC0xXVxuICAgICAgc3RhY2sucG9wKClcbiAgICB9XG4gIH1cbn1cblxuLy9DaGVja3MgaWYgaXRlcmF0b3IgaXMgYXQgc3RhcnQgb2YgdHJlZVxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGlwcm90bywgXCJoYXNQcmV2XCIsIHtcbiAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICB2YXIgc3RhY2sgPSB0aGlzLl9zdGFja1xuICAgIGlmKHN0YWNrLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIGlmKHN0YWNrW3N0YWNrLmxlbmd0aC0xXS5sZWZ0KSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgICBmb3IodmFyIHM9c3RhY2subGVuZ3RoLTE7IHM+MDsgLS1zKSB7XG4gICAgICBpZihzdGFja1tzLTFdLnJpZ2h0ID09PSBzdGFja1tzXSkge1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufSlcblxuLy9EZWZhdWx0IGNvbXBhcmlzb24gZnVuY3Rpb25cbmZ1bmN0aW9uIGRlZmF1bHRDb21wYXJlKGEsIGIpIHtcbiAgaWYoYSA8IGIpIHtcbiAgICByZXR1cm4gLTFcbiAgfVxuICBpZihhID4gYikge1xuICAgIHJldHVybiAxXG4gIH1cbiAgcmV0dXJuIDBcbn1cblxuLy9CdWlsZCBhIHRyZWVcbmZ1bmN0aW9uIGNyZWF0ZVJCVHJlZShjb21wYXJlKSB7XG4gIHJldHVybiBuZXcgUmVkQmxhY2tUcmVlKGNvbXBhcmUgfHwgZGVmYXVsdENvbXBhcmUsIG51bGwpXG59XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4uLy4uL25vZGVfbW9kdWxlcy9pZWVlNzU0L2luZGV4LmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvaWVlZTc1NC9pbmRleC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbmV4cG9ydHMucmVhZCA9IGZ1bmN0aW9uIChidWZmZXIsIG9mZnNldCwgaXNMRSwgbUxlbiwgbkJ5dGVzKSB7XG4gIHZhciBlLCBtXG4gIHZhciBlTGVuID0gKG5CeXRlcyAqIDgpIC0gbUxlbiAtIDFcbiAgdmFyIGVNYXggPSAoMSA8PCBlTGVuKSAtIDFcbiAgdmFyIGVCaWFzID0gZU1heCA+PiAxXG4gIHZhciBuQml0cyA9IC03XG4gIHZhciBpID0gaXNMRSA/IChuQnl0ZXMgLSAxKSA6IDBcbiAgdmFyIGQgPSBpc0xFID8gLTEgOiAxXG4gIHZhciBzID0gYnVmZmVyW29mZnNldCArIGldXG5cbiAgaSArPSBkXG5cbiAgZSA9IHMgJiAoKDEgPDwgKC1uQml0cykpIC0gMSlcbiAgcyA+Pj0gKC1uQml0cylcbiAgbkJpdHMgKz0gZUxlblxuICBmb3IgKDsgbkJpdHMgPiAwOyBlID0gKGUgKiAyNTYpICsgYnVmZmVyW29mZnNldCArIGldLCBpICs9IGQsIG5CaXRzIC09IDgpIHt9XG5cbiAgbSA9IGUgJiAoKDEgPDwgKC1uQml0cykpIC0gMSlcbiAgZSA+Pj0gKC1uQml0cylcbiAgbkJpdHMgKz0gbUxlblxuICBmb3IgKDsgbkJpdHMgPiAwOyBtID0gKG0gKiAyNTYpICsgYnVmZmVyW29mZnNldCArIGldLCBpICs9IGQsIG5CaXRzIC09IDgpIHt9XG5cbiAgaWYgKGUgPT09IDApIHtcbiAgICBlID0gMSAtIGVCaWFzXG4gIH0gZWxzZSBpZiAoZSA9PT0gZU1heCkge1xuICAgIHJldHVybiBtID8gTmFOIDogKChzID8gLTEgOiAxKSAqIEluZmluaXR5KVxuICB9IGVsc2Uge1xuICAgIG0gPSBtICsgTWF0aC5wb3coMiwgbUxlbilcbiAgICBlID0gZSAtIGVCaWFzXG4gIH1cbiAgcmV0dXJuIChzID8gLTEgOiAxKSAqIG0gKiBNYXRoLnBvdygyLCBlIC0gbUxlbilcbn1cblxuZXhwb3J0cy53cml0ZSA9IGZ1bmN0aW9uIChidWZmZXIsIHZhbHVlLCBvZmZzZXQsIGlzTEUsIG1MZW4sIG5CeXRlcykge1xuICB2YXIgZSwgbSwgY1xuICB2YXIgZUxlbiA9IChuQnl0ZXMgKiA4KSAtIG1MZW4gLSAxXG4gIHZhciBlTWF4ID0gKDEgPDwgZUxlbikgLSAxXG4gIHZhciBlQmlhcyA9IGVNYXggPj4gMVxuICB2YXIgcnQgPSAobUxlbiA9PT0gMjMgPyBNYXRoLnBvdygyLCAtMjQpIC0gTWF0aC5wb3coMiwgLTc3KSA6IDApXG4gIHZhciBpID0gaXNMRSA/IDAgOiAobkJ5dGVzIC0gMSlcbiAgdmFyIGQgPSBpc0xFID8gMSA6IC0xXG4gIHZhciBzID0gdmFsdWUgPCAwIHx8ICh2YWx1ZSA9PT0gMCAmJiAxIC8gdmFsdWUgPCAwKSA/IDEgOiAwXG5cbiAgdmFsdWUgPSBNYXRoLmFicyh2YWx1ZSlcblxuICBpZiAoaXNOYU4odmFsdWUpIHx8IHZhbHVlID09PSBJbmZpbml0eSkge1xuICAgIG0gPSBpc05hTih2YWx1ZSkgPyAxIDogMFxuICAgIGUgPSBlTWF4XG4gIH0gZWxzZSB7XG4gICAgZSA9IE1hdGguZmxvb3IoTWF0aC5sb2codmFsdWUpIC8gTWF0aC5MTjIpXG4gICAgaWYgKHZhbHVlICogKGMgPSBNYXRoLnBvdygyLCAtZSkpIDwgMSkge1xuICAgICAgZS0tXG4gICAgICBjICo9IDJcbiAgICB9XG4gICAgaWYgKGUgKyBlQmlhcyA+PSAxKSB7XG4gICAgICB2YWx1ZSArPSBydCAvIGNcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsdWUgKz0gcnQgKiBNYXRoLnBvdygyLCAxIC0gZUJpYXMpXG4gICAgfVxuICAgIGlmICh2YWx1ZSAqIGMgPj0gMikge1xuICAgICAgZSsrXG4gICAgICBjIC89IDJcbiAgICB9XG5cbiAgICBpZiAoZSArIGVCaWFzID49IGVNYXgpIHtcbiAgICAgIG0gPSAwXG4gICAgICBlID0gZU1heFxuICAgIH0gZWxzZSBpZiAoZSArIGVCaWFzID49IDEpIHtcbiAgICAgIG0gPSAoKHZhbHVlICogYykgLSAxKSAqIE1hdGgucG93KDIsIG1MZW4pXG4gICAgICBlID0gZSArIGVCaWFzXG4gICAgfSBlbHNlIHtcbiAgICAgIG0gPSB2YWx1ZSAqIE1hdGgucG93KDIsIGVCaWFzIC0gMSkgKiBNYXRoLnBvdygyLCBtTGVuKVxuICAgICAgZSA9IDBcbiAgICB9XG4gIH1cblxuICBmb3IgKDsgbUxlbiA+PSA4OyBidWZmZXJbb2Zmc2V0ICsgaV0gPSBtICYgMHhmZiwgaSArPSBkLCBtIC89IDI1NiwgbUxlbiAtPSA4KSB7fVxuXG4gIGUgPSAoZSA8PCBtTGVuKSB8IG1cbiAgZUxlbiArPSBtTGVuXG4gIGZvciAoOyBlTGVuID4gMDsgYnVmZmVyW29mZnNldCArIGldID0gZSAmIDB4ZmYsIGkgKz0gZCwgZSAvPSAyNTYsIGVMZW4gLT0gOCkge31cblxuICBidWZmZXJbb2Zmc2V0ICsgaSAtIGRdIHw9IHMgKiAxMjhcbn1cblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuLi8uLi9ub2RlX21vZHVsZXMvaW1tZWRpYXRlL2xpYi9pbmRleC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC9ob21lL2h1eW5obmd1eWVuL2dpdGh1Yi9jYXVzYWxpdHkvbm9kZV9tb2R1bGVzL2ltbWVkaWF0ZS9saWIvaW5kZXguanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIHR5cGVzID0gW1xuICBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL25leHRUaWNrICovIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2ltbWVkaWF0ZS9saWIvbmV4dFRpY2suanNcIiksXG4gIF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vbXV0YXRpb24uanMgKi8gXCIuLi8uLi9ub2RlX21vZHVsZXMvaW1tZWRpYXRlL2xpYi9tdXRhdGlvbi5qc1wiKSxcbiAgX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9tZXNzYWdlQ2hhbm5lbCAqLyBcIi4uLy4uL25vZGVfbW9kdWxlcy9pbW1lZGlhdGUvbGliL21lc3NhZ2VDaGFubmVsLmpzXCIpLFxuICBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL3N0YXRlQ2hhbmdlICovIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2ltbWVkaWF0ZS9saWIvc3RhdGVDaGFuZ2UuanNcIiksXG4gIF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vdGltZW91dCAqLyBcIi4uLy4uL25vZGVfbW9kdWxlcy9pbW1lZGlhdGUvbGliL3RpbWVvdXQuanNcIilcbl07XG52YXIgZHJhaW5pbmc7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcbnZhciBxdWV1ZSA9IFtdO1xudmFyIHNjaGVkdWxlZCA9IGZhbHNlO1xuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICB9IGVsc2Uge1xuICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgfVxuICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgbmV4dFRpY2soKTtcbiAgfVxufVxuXG4vL25hbWVkIG5leHRUaWNrIGZvciBsZXNzIGNvbmZ1c2luZyBzdGFjayB0cmFjZXNcbmZ1bmN0aW9uIG5leHRUaWNrKCkge1xuICBpZiAoZHJhaW5pbmcpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgc2NoZWR1bGVkID0gZmFsc2U7XG4gIGRyYWluaW5nID0gdHJ1ZTtcbiAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgdmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gIHdoaWxlIChsZW4pIHtcbiAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICBxdWV1ZSA9IFtdO1xuICAgIHdoaWxlIChjdXJyZW50UXVldWUgJiYgKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgfVxuICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gIH1cbiAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgcXVldWVJbmRleCA9IC0xO1xuICBkcmFpbmluZyA9IGZhbHNlO1xuICBjbGVhclRpbWVvdXQodGltZW91dCk7XG59XG52YXIgc2NoZWR1bGVEcmFpbjtcbnZhciBpID0gLTE7XG52YXIgbGVuID0gdHlwZXMubGVuZ3RoO1xud2hpbGUgKCsraSA8IGxlbikge1xuICBpZiAodHlwZXNbaV0gJiYgdHlwZXNbaV0udGVzdCAmJiB0eXBlc1tpXS50ZXN0KCkpIHtcbiAgICBzY2hlZHVsZURyYWluID0gdHlwZXNbaV0uaW5zdGFsbChuZXh0VGljayk7XG4gICAgYnJlYWs7XG4gIH1cbn1cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICB0aGlzLmZ1biA9IGZ1bjtcbiAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICB2YXIgZnVuID0gdGhpcy5mdW47XG4gIHZhciBhcnJheSA9IHRoaXMuYXJyYXk7XG4gIHN3aXRjaCAoYXJyYXkubGVuZ3RoKSB7XG4gIGNhc2UgMDpcbiAgICByZXR1cm4gZnVuKCk7XG4gIGNhc2UgMTpcbiAgICByZXR1cm4gZnVuKGFycmF5WzBdKTtcbiAgY2FzZSAyOlxuICAgIHJldHVybiBmdW4oYXJyYXlbMF0sIGFycmF5WzFdKTtcbiAgY2FzZSAzOlxuICAgIHJldHVybiBmdW4oYXJyYXlbMF0sIGFycmF5WzFdLCBhcnJheVsyXSk7XG4gIGRlZmF1bHQ6XG4gICAgcmV0dXJuIGZ1bi5hcHBseShudWxsLCBhcnJheSk7XG4gIH1cblxufTtcbm1vZHVsZS5leHBvcnRzID0gaW1tZWRpYXRlO1xuZnVuY3Rpb24gaW1tZWRpYXRlKHRhc2spIHtcbiAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgfVxuICB9XG4gIHF1ZXVlLnB1c2gobmV3IEl0ZW0odGFzaywgYXJncykpO1xuICBpZiAoIXNjaGVkdWxlZCAmJiAhZHJhaW5pbmcpIHtcbiAgICBzY2hlZHVsZWQgPSB0cnVlO1xuICAgIHNjaGVkdWxlRHJhaW4oKTtcbiAgfVxufVxuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4uLy4uL25vZGVfbW9kdWxlcy9pbW1lZGlhdGUvbGliL21lc3NhZ2VDaGFubmVsLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvaW1tZWRpYXRlL2xpYi9tZXNzYWdlQ2hhbm5lbC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuLyogV0VCUEFDSyBWQVIgSU5KRUNUSU9OICovKGZ1bmN0aW9uKGdsb2JhbCkge1xuXG5leHBvcnRzLnRlc3QgPSBmdW5jdGlvbiAoKSB7XG4gIGlmIChnbG9iYWwuc2V0SW1tZWRpYXRlKSB7XG4gICAgLy8gd2UgY2FuIG9ubHkgZ2V0IGhlcmUgaW4gSUUxMFxuICAgIC8vIHdoaWNoIGRvZXNuJ3QgaGFuZGVsIHBvc3RNZXNzYWdlIHdlbGxcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHR5cGVvZiBnbG9iYWwuTWVzc2FnZUNoYW5uZWwgIT09ICd1bmRlZmluZWQnO1xufTtcblxuZXhwb3J0cy5pbnN0YWxsID0gZnVuY3Rpb24gKGZ1bmMpIHtcbiAgdmFyIGNoYW5uZWwgPSBuZXcgZ2xvYmFsLk1lc3NhZ2VDaGFubmVsKCk7XG4gIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gZnVuYztcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBjaGFubmVsLnBvcnQyLnBvc3RNZXNzYWdlKDApO1xuICB9O1xufTtcbi8qIFdFQlBBQ0sgVkFSIElOSkVDVElPTiAqL30uY2FsbCh0aGlzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLy4uLy4uL3dlYnBhY2svYnVpbGRpbi9nbG9iYWwuanMgKi8gXCIuLi8uLi9ub2RlX21vZHVsZXMvd2VicGFjay9idWlsZGluL2dsb2JhbC5qc1wiKSkpXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4uLy4uL25vZGVfbW9kdWxlcy9pbW1lZGlhdGUvbGliL211dGF0aW9uLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvaW1tZWRpYXRlL2xpYi9tdXRhdGlvbi5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuLyogV0VCUEFDSyBWQVIgSU5KRUNUSU9OICovKGZ1bmN0aW9uKGdsb2JhbCkge1xuLy9iYXNlZCBvZmYgcnN2cCBodHRwczovL2dpdGh1Yi5jb20vdGlsZGVpby9yc3ZwLmpzXG4vL2xpY2Vuc2UgaHR0cHM6Ly9naXRodWIuY29tL3RpbGRlaW8vcnN2cC5qcy9ibG9iL21hc3Rlci9MSUNFTlNFXG4vL2h0dHBzOi8vZ2l0aHViLmNvbS90aWxkZWlvL3JzdnAuanMvYmxvYi9tYXN0ZXIvbGliL3JzdnAvYXNhcC5qc1xuXG52YXIgTXV0YXRpb24gPSBnbG9iYWwuTXV0YXRpb25PYnNlcnZlciB8fCBnbG9iYWwuV2ViS2l0TXV0YXRpb25PYnNlcnZlcjtcblxuZXhwb3J0cy50ZXN0ID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gTXV0YXRpb247XG59O1xuXG5leHBvcnRzLmluc3RhbGwgPSBmdW5jdGlvbiAoaGFuZGxlKSB7XG4gIHZhciBjYWxsZWQgPSAwO1xuICB2YXIgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb24oaGFuZGxlKTtcbiAgdmFyIGVsZW1lbnQgPSBnbG9iYWwuZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpO1xuICBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQsIHtcbiAgICBjaGFyYWN0ZXJEYXRhOiB0cnVlXG4gIH0pO1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGVsZW1lbnQuZGF0YSA9IChjYWxsZWQgPSArK2NhbGxlZCAlIDIpO1xuICB9O1xufTtcbi8qIFdFQlBBQ0sgVkFSIElOSkVDVElPTiAqL30uY2FsbCh0aGlzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLy4uLy4uL3dlYnBhY2svYnVpbGRpbi9nbG9iYWwuanMgKi8gXCIuLi8uLi9ub2RlX21vZHVsZXMvd2VicGFjay9idWlsZGluL2dsb2JhbC5qc1wiKSkpXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4uLy4uL25vZGVfbW9kdWxlcy9pbW1lZGlhdGUvbGliL25leHRUaWNrLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvaW1tZWRpYXRlL2xpYi9uZXh0VGljay5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuLyogV0VCUEFDSyBWQVIgSU5KRUNUSU9OICovKGZ1bmN0aW9uKHByb2Nlc3MpIHtcbmV4cG9ydHMudGVzdCA9IGZ1bmN0aW9uICgpIHtcbiAgLy8gRG9uJ3QgZ2V0IGZvb2xlZCBieSBlLmcuIGJyb3dzZXJpZnkgZW52aXJvbm1lbnRzLlxuICByZXR1cm4gKHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJykgJiYgIXByb2Nlc3MuYnJvd3Nlcjtcbn07XG5cbmV4cG9ydHMuaW5zdGFsbCA9IGZ1bmN0aW9uIChmdW5jKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcHJvY2Vzcy5uZXh0VGljayhmdW5jKTtcbiAgfTtcbn07XG5cbi8qIFdFQlBBQ0sgVkFSIElOSkVDVElPTiAqL30uY2FsbCh0aGlzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLy4uLy4uL3Byb2Nlc3MvYnJvd3Nlci5qcyAqLyBcIi4uLy4uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanNcIikpKVxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuLi8uLi9ub2RlX21vZHVsZXMvaW1tZWRpYXRlL2xpYi9zdGF0ZUNoYW5nZS5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC9ob21lL2h1eW5obmd1eWVuL2dpdGh1Yi9jYXVzYWxpdHkvbm9kZV9tb2R1bGVzL2ltbWVkaWF0ZS9saWIvc3RhdGVDaGFuZ2UuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbi8qIFdFQlBBQ0sgVkFSIElOSkVDVElPTiAqLyhmdW5jdGlvbihnbG9iYWwpIHtcblxuZXhwb3J0cy50ZXN0ID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gJ2RvY3VtZW50JyBpbiBnbG9iYWwgJiYgJ29ucmVhZHlzdGF0ZWNoYW5nZScgaW4gZ2xvYmFsLmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xufTtcblxuZXhwb3J0cy5pbnN0YWxsID0gZnVuY3Rpb24gKGhhbmRsZSkge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuXG4gICAgLy8gQ3JlYXRlIGEgPHNjcmlwdD4gZWxlbWVudDsgaXRzIHJlYWR5c3RhdGVjaGFuZ2UgZXZlbnQgd2lsbCBiZSBmaXJlZCBhc3luY2hyb25vdXNseSBvbmNlIGl0IGlzIGluc2VydGVkXG4gICAgLy8gaW50byB0aGUgZG9jdW1lbnQuIERvIHNvLCB0aHVzIHF1ZXVpbmcgdXAgdGhlIHRhc2suIFJlbWVtYmVyIHRvIGNsZWFuIHVwIG9uY2UgaXQncyBiZWVuIGNhbGxlZC5cbiAgICB2YXIgc2NyaXB0RWwgPSBnbG9iYWwuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgc2NyaXB0RWwub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgaGFuZGxlKCk7XG5cbiAgICAgIHNjcmlwdEVsLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IG51bGw7XG4gICAgICBzY3JpcHRFbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHNjcmlwdEVsKTtcbiAgICAgIHNjcmlwdEVsID0gbnVsbDtcbiAgICB9O1xuICAgIGdsb2JhbC5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoc2NyaXB0RWwpO1xuXG4gICAgcmV0dXJuIGhhbmRsZTtcbiAgfTtcbn07XG4vKiBXRUJQQUNLIFZBUiBJTkpFQ1RJT04gKi99LmNhbGwodGhpcywgX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi8uLi8uLi93ZWJwYWNrL2J1aWxkaW4vZ2xvYmFsLmpzICovIFwiLi4vLi4vbm9kZV9tb2R1bGVzL3dlYnBhY2svYnVpbGRpbi9nbG9iYWwuanNcIikpKVxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuLi8uLi9ub2RlX21vZHVsZXMvaW1tZWRpYXRlL2xpYi90aW1lb3V0LmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAvaG9tZS9odXluaG5ndXllbi9naXRodWIvY2F1c2FsaXR5L25vZGVfbW9kdWxlcy9pbW1lZGlhdGUvbGliL3RpbWVvdXQuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLnRlc3QgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0cnVlO1xufTtcblxuZXhwb3J0cy5pbnN0YWxsID0gZnVuY3Rpb24gKHQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBzZXRUaW1lb3V0KHQsIDApO1xuICB9O1xufTtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2luaGVyaXRzL2luaGVyaXRzX2Jyb3dzZXIuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAvaG9tZS9odXluaG5ndXllbi9naXRodWIvY2F1c2FsaXR5L25vZGVfbW9kdWxlcy9pbmhlcml0cy9pbmhlcml0c19icm93c2VyLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuaWYgKHR5cGVvZiBPYmplY3QuY3JlYXRlID09PSAnZnVuY3Rpb24nKSB7XG4gIC8vIGltcGxlbWVudGF0aW9uIGZyb20gc3RhbmRhcmQgbm9kZS5qcyAndXRpbCcgbW9kdWxlXG4gIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaW5oZXJpdHMoY3Rvciwgc3VwZXJDdG9yKSB7XG4gICAgY3Rvci5zdXBlcl8gPSBzdXBlckN0b3JcbiAgICBjdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDdG9yLnByb3RvdHlwZSwge1xuICAgICAgY29uc3RydWN0b3I6IHtcbiAgICAgICAgdmFsdWU6IGN0b3IsXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICB9XG4gICAgfSk7XG4gIH07XG59IGVsc2Uge1xuICAvLyBvbGQgc2Nob29sIHNoaW0gZm9yIG9sZCBicm93c2Vyc1xuICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGluaGVyaXRzKGN0b3IsIHN1cGVyQ3Rvcikge1xuICAgIGN0b3Iuc3VwZXJfID0gc3VwZXJDdG9yXG4gICAgdmFyIFRlbXBDdG9yID0gZnVuY3Rpb24gKCkge31cbiAgICBUZW1wQ3Rvci5wcm90b3R5cGUgPSBzdXBlckN0b3IucHJvdG90eXBlXG4gICAgY3Rvci5wcm90b3R5cGUgPSBuZXcgVGVtcEN0b3IoKVxuICAgIGN0b3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gY3RvclxuICB9XG59XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2x0Z3QvaW5kZXguanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAvaG9tZS9odXluaG5ndXllbi9naXRodWIvY2F1c2FsaXR5L25vZGVfbW9kdWxlcy9sdGd0L2luZGV4LmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuLyogV0VCUEFDSyBWQVIgSU5KRUNUSU9OICovKGZ1bmN0aW9uKEJ1ZmZlcikge1xuZXhwb3J0cy5jb21wYXJlID0gZnVuY3Rpb24gKGEsIGIpIHtcblxuICBpZihCdWZmZXIuaXNCdWZmZXIoYSkpIHtcbiAgICB2YXIgbCA9IE1hdGgubWluKGEubGVuZ3RoLCBiLmxlbmd0aClcbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gICAgICB2YXIgY21wID0gYVtpXSAtIGJbaV1cbiAgICAgIGlmKGNtcCkgcmV0dXJuIGNtcFxuICAgIH1cbiAgICByZXR1cm4gYS5sZW5ndGggLSBiLmxlbmd0aFxuICB9XG5cbiAgcmV0dXJuIGEgPCBiID8gLTEgOiBhID4gYiA/IDEgOiAwXG59XG5cbi8vIHRvIGJlIGNvbXBhdGlibGUgd2l0aCB0aGUgY3VycmVudCBhYnN0cmFjdC1sZXZlbGRvd24gdGVzdHNcbi8vIG51bGxpc2ggb3IgZW1wdHkgc3RyaW5ncy5cbi8vIEkgY291bGQgdXNlICEhdmFsIGJ1dCBJIHdhbnQgdG8gcGVybWl0IG51bWJlcnMgYW5kIGJvb2xlYW5zLFxuLy8gaWYgcG9zc2libGUuXG5cbmZ1bmN0aW9uIGlzRGVmICh2YWwpIHtcbiAgcmV0dXJuIHZhbCAhPT0gdW5kZWZpbmVkICYmIHZhbCAhPT0gJydcbn1cblxuZnVuY3Rpb24gaGFzIChyYW5nZSwgbmFtZSkge1xuICByZXR1cm4gT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwocmFuZ2UsIG5hbWUpXG59XG5cbmZ1bmN0aW9uIGhhc0tleShyYW5nZSwgbmFtZSkge1xuICByZXR1cm4gT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwocmFuZ2UsIG5hbWUpICYmIG5hbWVcbn1cblxudmFyIGxvd2VyQm91bmRLZXkgPSBleHBvcnRzLmxvd2VyQm91bmRLZXkgPSBmdW5jdGlvbiAocmFuZ2UpIHtcbiAgICByZXR1cm4gKFxuICAgICAgIGhhc0tleShyYW5nZSwgJ2d0JylcbiAgICB8fCBoYXNLZXkocmFuZ2UsICdndGUnKVxuICAgIHx8IGhhc0tleShyYW5nZSwgJ21pbicpXG4gICAgfHwgKHJhbmdlLnJldmVyc2UgPyBoYXNLZXkocmFuZ2UsICdlbmQnKSA6IGhhc0tleShyYW5nZSwgJ3N0YXJ0JykpXG4gICAgfHwgdW5kZWZpbmVkXG4gICAgKVxufVxuXG52YXIgbG93ZXJCb3VuZCA9IGV4cG9ydHMubG93ZXJCb3VuZCA9IGZ1bmN0aW9uIChyYW5nZSwgZGVmKSB7XG4gIHZhciBrID0gbG93ZXJCb3VuZEtleShyYW5nZSlcbiAgcmV0dXJuIGsgPyByYW5nZVtrXSA6IGRlZlxufVxuXG52YXIgbG93ZXJCb3VuZEluY2x1c2l2ZSA9IGV4cG9ydHMubG93ZXJCb3VuZEluY2x1c2l2ZSA9IGZ1bmN0aW9uIChyYW5nZSkge1xuICByZXR1cm4gaGFzKHJhbmdlLCAnZ3QnKSA/IGZhbHNlIDogdHJ1ZVxufVxuXG52YXIgdXBwZXJCb3VuZEluY2x1c2l2ZSA9IGV4cG9ydHMudXBwZXJCb3VuZEluY2x1c2l2ZSA9XG4gIGZ1bmN0aW9uIChyYW5nZSkge1xuICAgIHJldHVybiAoaGFzKHJhbmdlLCAnbHQnKSAvKiYmICFyYW5nZS5tYXhFeCovKSA/IGZhbHNlIDogdHJ1ZVxuICB9XG5cbnZhciBsb3dlckJvdW5kRXhjbHVzaXZlID0gZXhwb3J0cy5sb3dlckJvdW5kRXhjbHVzaXZlID1cbiAgZnVuY3Rpb24gKHJhbmdlKSB7XG4gICAgcmV0dXJuICFsb3dlckJvdW5kSW5jbHVzaXZlKHJhbmdlKVxuICB9XG5cbnZhciB1cHBlckJvdW5kRXhjbHVzaXZlID0gZXhwb3J0cy51cHBlckJvdW5kRXhjbHVzaXZlID1cbiAgZnVuY3Rpb24gKHJhbmdlKSB7XG4gICAgcmV0dXJuICF1cHBlckJvdW5kSW5jbHVzaXZlKHJhbmdlKVxuICB9XG5cbnZhciB1cHBlckJvdW5kS2V5ID0gZXhwb3J0cy51cHBlckJvdW5kS2V5ID0gZnVuY3Rpb24gKHJhbmdlKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICBoYXNLZXkocmFuZ2UsICdsdCcpXG4gICAgfHwgaGFzS2V5KHJhbmdlLCAnbHRlJylcbiAgICB8fCBoYXNLZXkocmFuZ2UsICdtYXgnKVxuICAgIHx8IChyYW5nZS5yZXZlcnNlID8gaGFzS2V5KHJhbmdlLCAnc3RhcnQnKSA6IGhhc0tleShyYW5nZSwgJ2VuZCcpKVxuICAgIHx8IHVuZGVmaW5lZFxuICAgIClcbn1cblxudmFyIHVwcGVyQm91bmQgPSBleHBvcnRzLnVwcGVyQm91bmQgPSBmdW5jdGlvbiAocmFuZ2UsIGRlZikge1xuICB2YXIgayA9IHVwcGVyQm91bmRLZXkocmFuZ2UpXG4gIHJldHVybiBrID8gcmFuZ2Vba10gOiBkZWZcbn1cblxuZXhwb3J0cy5zdGFydCA9IGZ1bmN0aW9uIChyYW5nZSwgZGVmKSB7XG4gIHJldHVybiByYW5nZS5yZXZlcnNlID8gdXBwZXJCb3VuZChyYW5nZSwgZGVmKSA6IGxvd2VyQm91bmQocmFuZ2UsIGRlZilcbn1cbmV4cG9ydHMuZW5kID0gZnVuY3Rpb24gKHJhbmdlLCBkZWYpIHtcbiAgcmV0dXJuIHJhbmdlLnJldmVyc2UgPyBsb3dlckJvdW5kKHJhbmdlLCBkZWYpIDogdXBwZXJCb3VuZChyYW5nZSwgZGVmKVxufVxuZXhwb3J0cy5zdGFydEluY2x1c2l2ZSA9IGZ1bmN0aW9uIChyYW5nZSkge1xuICByZXR1cm4gKFxuICAgIHJhbmdlLnJldmVyc2VcbiAgPyB1cHBlckJvdW5kSW5jbHVzaXZlKHJhbmdlKVxuICA6IGxvd2VyQm91bmRJbmNsdXNpdmUocmFuZ2UpXG4gIClcbn1cbmV4cG9ydHMuZW5kSW5jbHVzaXZlID0gZnVuY3Rpb24gKHJhbmdlKSB7XG4gIHJldHVybiAoXG4gICAgcmFuZ2UucmV2ZXJzZVxuICA/IGxvd2VyQm91bmRJbmNsdXNpdmUocmFuZ2UpXG4gIDogdXBwZXJCb3VuZEluY2x1c2l2ZShyYW5nZSlcbiAgKVxufVxuXG5mdW5jdGlvbiBpZCAoZSkgeyByZXR1cm4gZSB9XG5cbmV4cG9ydHMudG9MdGd0ID0gZnVuY3Rpb24gKHJhbmdlLCBfcmFuZ2UsIG1hcCwgbG93ZXIsIHVwcGVyKSB7XG4gIF9yYW5nZSA9IF9yYW5nZSB8fCB7fVxuICBtYXAgPSBtYXAgfHwgaWRcbiAgdmFyIGRlZmF1bHRzID0gYXJndW1lbnRzLmxlbmd0aCA+IDNcbiAgdmFyIGxiID0gZXhwb3J0cy5sb3dlckJvdW5kS2V5KHJhbmdlKVxuICB2YXIgdWIgPSBleHBvcnRzLnVwcGVyQm91bmRLZXkocmFuZ2UpXG4gIGlmKGxiKSB7XG4gICAgaWYobGIgPT09ICdndCcpIF9yYW5nZS5ndCA9IG1hcChyYW5nZS5ndCwgZmFsc2UpXG4gICAgZWxzZSAgICAgICAgICAgIF9yYW5nZS5ndGUgPSBtYXAocmFuZ2VbbGJdLCBmYWxzZSlcbiAgfVxuICBlbHNlIGlmKGRlZmF1bHRzKVxuICAgIF9yYW5nZS5ndGUgPSBtYXAobG93ZXIsIGZhbHNlKVxuXG4gIGlmKHViKSB7XG4gICAgaWYodWIgPT09ICdsdCcpIF9yYW5nZS5sdCA9IG1hcChyYW5nZS5sdCwgdHJ1ZSlcbiAgICBlbHNlICAgICAgICAgICAgX3JhbmdlLmx0ZSA9IG1hcChyYW5nZVt1Yl0sIHRydWUpXG4gIH1cbiAgZWxzZSBpZihkZWZhdWx0cylcbiAgICBfcmFuZ2UubHRlID0gbWFwKHVwcGVyLCB0cnVlKVxuXG4gIGlmKHJhbmdlLnJldmVyc2UgIT0gbnVsbClcbiAgICBfcmFuZ2UucmV2ZXJzZSA9ICEhcmFuZ2UucmV2ZXJzZVxuXG4gIC8vaWYgcmFuZ2Ugd2FzIHVzZWQgbXV0YWJseVxuICAvLyhpbiBsZXZlbC1zdWJsZXZlbCBpdCdzIHBhcnQgb2YgYW4gb3B0aW9ucyBvYmplY3RcbiAgLy90aGF0IGhhcyBtb3JlIHByb3BlcnRpZXMgb24gaXQuKVxuICBpZihoYXMoX3JhbmdlLCAnbWF4JykpICAgZGVsZXRlIF9yYW5nZS5tYXhcbiAgaWYoaGFzKF9yYW5nZSwgJ21pbicpKSAgIGRlbGV0ZSBfcmFuZ2UubWluXG4gIGlmKGhhcyhfcmFuZ2UsICdzdGFydCcpKSBkZWxldGUgX3JhbmdlLnN0YXJ0XG4gIGlmKGhhcyhfcmFuZ2UsICdlbmQnKSkgICBkZWxldGUgX3JhbmdlLmVuZFxuXG4gIHJldHVybiBfcmFuZ2Vcbn1cblxuZXhwb3J0cy5jb250YWlucyA9IGZ1bmN0aW9uIChyYW5nZSwga2V5LCBjb21wYXJlKSB7XG4gIGNvbXBhcmUgPSBjb21wYXJlIHx8IGV4cG9ydHMuY29tcGFyZVxuXG4gIHZhciBsYiA9IGxvd2VyQm91bmQocmFuZ2UpXG4gIGlmKGlzRGVmKGxiKSkge1xuICAgIHZhciBjbXAgPSBjb21wYXJlKGtleSwgbGIpXG4gICAgaWYoY21wIDwgMCB8fCAoY21wID09PSAwICYmIGxvd2VyQm91bmRFeGNsdXNpdmUocmFuZ2UpKSlcbiAgICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgdmFyIHViID0gdXBwZXJCb3VuZChyYW5nZSlcbiAgaWYoaXNEZWYodWIpKSB7XG4gICAgdmFyIGNtcCA9IGNvbXBhcmUoa2V5LCB1YilcbiAgICBpZihjbXAgPiAwIHx8IChjbXAgPT09IDApICYmIHVwcGVyQm91bmRFeGNsdXNpdmUocmFuZ2UpKVxuICAgICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICByZXR1cm4gdHJ1ZVxufVxuXG5leHBvcnRzLmZpbHRlciA9IGZ1bmN0aW9uIChyYW5nZSwgY29tcGFyZSkge1xuICByZXR1cm4gZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiBleHBvcnRzLmNvbnRhaW5zKHJhbmdlLCBrZXksIGNvbXBhcmUpXG4gIH1cbn1cblxuXG5cbi8qIFdFQlBBQ0sgVkFSIElOSkVDVElPTiAqL30uY2FsbCh0aGlzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLy4uL2J1ZmZlci9pbmRleC5qcyAqLyBcIi4uLy4uL25vZGVfbW9kdWxlcy9idWZmZXIvaW5kZXguanNcIikuQnVmZmVyKSlcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi4vLi4vbm9kZV9tb2R1bGVzL21lbWRvd24vaW1tZWRpYXRlLWJyb3dzZXIuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAvaG9tZS9odXluaG5ndXllbi9naXRodWIvY2F1c2FsaXR5L25vZGVfbW9kdWxlcy9tZW1kb3duL2ltbWVkaWF0ZS1icm93c2VyLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxubW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBpbW1lZGlhdGUgKi8gXCIuLi8uLi9ub2RlX21vZHVsZXMvaW1tZWRpYXRlL2xpYi9pbmRleC5qc1wiKVxuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4uLy4uL25vZGVfbW9kdWxlcy9tZW1kb3duL21lbWRvd24uanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC9ob21lL2h1eW5obmd1eWVuL2dpdGh1Yi9jYXVzYWxpdHkvbm9kZV9tb2R1bGVzL21lbWRvd24vbWVtZG93bi5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIGluaGVyaXRzID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgaW5oZXJpdHMgKi8gXCIuLi8uLi9ub2RlX21vZHVsZXMvaW5oZXJpdHMvaW5oZXJpdHNfYnJvd3Nlci5qc1wiKVxudmFyIEFic3RyYWN0TGV2ZWxET1dOID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgYWJzdHJhY3QtbGV2ZWxkb3duICovIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Fic3RyYWN0LWxldmVsZG93bi9pbmRleC5qc1wiKS5BYnN0cmFjdExldmVsRE9XTlxudmFyIEFic3RyYWN0SXRlcmF0b3IgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBhYnN0cmFjdC1sZXZlbGRvd24gKi8gXCIuLi8uLi9ub2RlX21vZHVsZXMvYWJzdHJhY3QtbGV2ZWxkb3duL2luZGV4LmpzXCIpLkFic3RyYWN0SXRlcmF0b3JcbnZhciBsdGd0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgbHRndCAqLyBcIi4uLy4uL25vZGVfbW9kdWxlcy9sdGd0L2luZGV4LmpzXCIpXG52YXIgY3JlYXRlUkJUID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgZnVuY3Rpb25hbC1yZWQtYmxhY2stdHJlZSAqLyBcIi4uLy4uL25vZGVfbW9kdWxlcy9mdW5jdGlvbmFsLXJlZC1ibGFjay10cmVlL3JidHJlZS5qc1wiKVxudmFyIEJ1ZmZlciA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIHNhZmUtYnVmZmVyICovIFwiLi4vLi4vbm9kZV9tb2R1bGVzL3NhZmUtYnVmZmVyL2luZGV4LmpzXCIpLkJ1ZmZlclxuXG4vLyBJbiBOb2RlLCB1c2UgZ2xvYmFsLnNldEltbWVkaWF0ZS4gSW4gdGhlIGJyb3dzZXIsIHVzZSBhIGNvbnNpc3RlbnRcbi8vIG1pY3JvdGFzayBsaWJyYXJ5IHRvIGdpdmUgY29uc2lzdGVudCBtaWNyb3Rhc2sgZXhwZXJpZW5jZSB0byBhbGwgYnJvd3NlcnNcbnZhciBzZXRJbW1lZGlhdGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL2ltbWVkaWF0ZSAqLyBcIi4uLy4uL25vZGVfbW9kdWxlcy9tZW1kb3duL2ltbWVkaWF0ZS1icm93c2VyLmpzXCIpXG5cbmZ1bmN0aW9uIGd0ICh2YWx1ZSkge1xuICByZXR1cm4gbHRndC5jb21wYXJlKHZhbHVlLCB0aGlzLl91cHBlckJvdW5kKSA+IDBcbn1cblxuZnVuY3Rpb24gZ3RlICh2YWx1ZSkge1xuICByZXR1cm4gbHRndC5jb21wYXJlKHZhbHVlLCB0aGlzLl91cHBlckJvdW5kKSA+PSAwXG59XG5cbmZ1bmN0aW9uIGx0ICh2YWx1ZSkge1xuICByZXR1cm4gbHRndC5jb21wYXJlKHZhbHVlLCB0aGlzLl91cHBlckJvdW5kKSA8IDBcbn1cblxuZnVuY3Rpb24gbHRlICh2YWx1ZSkge1xuICByZXR1cm4gbHRndC5jb21wYXJlKHZhbHVlLCB0aGlzLl91cHBlckJvdW5kKSA8PSAwXG59XG5cbmZ1bmN0aW9uIE1lbUl0ZXJhdG9yIChkYiwgb3B0aW9ucykge1xuICBBYnN0cmFjdEl0ZXJhdG9yLmNhbGwodGhpcywgZGIpXG4gIHRoaXMuX2xpbWl0ID0gb3B0aW9ucy5saW1pdFxuXG4gIGlmICh0aGlzLl9saW1pdCA9PT0gLTEpIHRoaXMuX2xpbWl0ID0gSW5maW5pdHlcblxuICB2YXIgdHJlZSA9IGRiLl9zdG9yZVxuXG4gIHRoaXMua2V5QXNCdWZmZXIgPSBvcHRpb25zLmtleUFzQnVmZmVyICE9PSBmYWxzZVxuICB0aGlzLnZhbHVlQXNCdWZmZXIgPSBvcHRpb25zLnZhbHVlQXNCdWZmZXIgIT09IGZhbHNlXG4gIHRoaXMuX3JldmVyc2UgPSBvcHRpb25zLnJldmVyc2VcbiAgdGhpcy5fb3B0aW9ucyA9IG9wdGlvbnNcbiAgdGhpcy5fZG9uZSA9IDBcblxuICBpZiAoIXRoaXMuX3JldmVyc2UpIHtcbiAgICB0aGlzLl9pbmNyID0gJ25leHQnXG4gICAgdGhpcy5fbG93ZXJCb3VuZCA9IGx0Z3QubG93ZXJCb3VuZChvcHRpb25zKVxuICAgIHRoaXMuX3VwcGVyQm91bmQgPSBsdGd0LnVwcGVyQm91bmQob3B0aW9ucylcblxuICAgIGlmICh0eXBlb2YgdGhpcy5fbG93ZXJCb3VuZCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMuX3RyZWUgPSB0cmVlLmJlZ2luXG4gICAgfSBlbHNlIGlmIChsdGd0Lmxvd2VyQm91bmRJbmNsdXNpdmUob3B0aW9ucykpIHtcbiAgICAgIHRoaXMuX3RyZWUgPSB0cmVlLmdlKHRoaXMuX2xvd2VyQm91bmQpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3RyZWUgPSB0cmVlLmd0KHRoaXMuX2xvd2VyQm91bmQpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3VwcGVyQm91bmQpIHtcbiAgICAgIGlmIChsdGd0LnVwcGVyQm91bmRJbmNsdXNpdmUob3B0aW9ucykpIHtcbiAgICAgICAgdGhpcy5fdGVzdCA9IGx0ZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fdGVzdCA9IGx0XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHRoaXMuX2luY3IgPSAncHJldidcbiAgICB0aGlzLl9sb3dlckJvdW5kID0gbHRndC51cHBlckJvdW5kKG9wdGlvbnMpXG4gICAgdGhpcy5fdXBwZXJCb3VuZCA9IGx0Z3QubG93ZXJCb3VuZChvcHRpb25zKVxuXG4gICAgaWYgKHR5cGVvZiB0aGlzLl9sb3dlckJvdW5kID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5fdHJlZSA9IHRyZWUuZW5kXG4gICAgfSBlbHNlIGlmIChsdGd0LnVwcGVyQm91bmRJbmNsdXNpdmUob3B0aW9ucykpIHtcbiAgICAgIHRoaXMuX3RyZWUgPSB0cmVlLmxlKHRoaXMuX2xvd2VyQm91bmQpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3RyZWUgPSB0cmVlLmx0KHRoaXMuX2xvd2VyQm91bmQpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3VwcGVyQm91bmQpIHtcbiAgICAgIGlmIChsdGd0Lmxvd2VyQm91bmRJbmNsdXNpdmUob3B0aW9ucykpIHtcbiAgICAgICAgdGhpcy5fdGVzdCA9IGd0ZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fdGVzdCA9IGd0XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmluaGVyaXRzKE1lbUl0ZXJhdG9yLCBBYnN0cmFjdEl0ZXJhdG9yKVxuXG5NZW1JdGVyYXRvci5wcm90b3R5cGUuX25leHQgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgdmFyIGtleVxuICB2YXIgdmFsdWVcblxuICBpZiAodGhpcy5fZG9uZSsrID49IHRoaXMuX2xpbWl0KSByZXR1cm4gc2V0SW1tZWRpYXRlKGNhbGxiYWNrKVxuICBpZiAoIXRoaXMuX3RyZWUudmFsaWQpIHJldHVybiBzZXRJbW1lZGlhdGUoY2FsbGJhY2spXG5cbiAga2V5ID0gdGhpcy5fdHJlZS5rZXlcbiAgdmFsdWUgPSB0aGlzLl90cmVlLnZhbHVlXG5cbiAgaWYgKCF0aGlzLl90ZXN0KGtleSkpIHJldHVybiBzZXRJbW1lZGlhdGUoY2FsbGJhY2spXG5cbiAgaWYgKHRoaXMua2V5QXNCdWZmZXIgJiYgIUJ1ZmZlci5pc0J1ZmZlcihrZXkpKSB7XG4gICAga2V5ID0gQnVmZmVyLmZyb20oU3RyaW5nKGtleSkpXG4gIH1cblxuICBpZiAodGhpcy52YWx1ZUFzQnVmZmVyICYmICFCdWZmZXIuaXNCdWZmZXIodmFsdWUpKSB7XG4gICAgdmFsdWUgPSBCdWZmZXIuZnJvbShTdHJpbmcodmFsdWUpKVxuICB9XG5cbiAgdGhpcy5fdHJlZVt0aGlzLl9pbmNyXSgpXG5cbiAgc2V0SW1tZWRpYXRlKGZ1bmN0aW9uIGNhbGxOZXh0ICgpIHtcbiAgICBjYWxsYmFjayhudWxsLCBrZXksIHZhbHVlKVxuICB9KVxufVxuXG5NZW1JdGVyYXRvci5wcm90b3R5cGUuX3Rlc3QgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0cnVlXG59XG5cbmZ1bmN0aW9uIE1lbURPV04gKCkge1xuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgTWVtRE9XTikpIHJldHVybiBuZXcgTWVtRE9XTigpXG5cbiAgQWJzdHJhY3RMZXZlbERPV04uY2FsbCh0aGlzLCAnJylcblxuICB0aGlzLl9zdG9yZSA9IGNyZWF0ZVJCVChsdGd0LmNvbXBhcmUpXG59XG5cbmluaGVyaXRzKE1lbURPV04sIEFic3RyYWN0TGV2ZWxET1dOKVxuXG5NZW1ET1dOLnByb3RvdHlwZS5fb3BlbiA9IGZ1bmN0aW9uIChvcHRpb25zLCBjYWxsYmFjaykge1xuICB2YXIgc2VsZiA9IHRoaXNcbiAgc2V0SW1tZWRpYXRlKGZ1bmN0aW9uIGNhbGxOZXh0ICgpIHtcbiAgICBjYWxsYmFjayhudWxsLCBzZWxmKVxuICB9KVxufVxuXG5NZW1ET1dOLnByb3RvdHlwZS5fc2VyaWFsaXplS2V5ID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4ga2V5XG59XG5cbk1lbURPV04ucHJvdG90eXBlLl9zZXJpYWxpemVWYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPT0gbnVsbCA/ICcnIDogdmFsdWVcbn1cblxuTWVtRE9XTi5wcm90b3R5cGUuX3B1dCA9IGZ1bmN0aW9uIChrZXksIHZhbHVlLCBvcHRpb25zLCBjYWxsYmFjaykge1xuICB2YXIgaXRlciA9IHRoaXMuX3N0b3JlLmZpbmQoa2V5KVxuXG4gIGlmIChpdGVyLnZhbGlkKSB7XG4gICAgdGhpcy5fc3RvcmUgPSBpdGVyLnVwZGF0ZSh2YWx1ZSlcbiAgfSBlbHNlIHtcbiAgICB0aGlzLl9zdG9yZSA9IHRoaXMuX3N0b3JlLmluc2VydChrZXksIHZhbHVlKVxuICB9XG5cbiAgc2V0SW1tZWRpYXRlKGNhbGxiYWNrKVxufVxuXG5NZW1ET1dOLnByb3RvdHlwZS5fZ2V0ID0gZnVuY3Rpb24gKGtleSwgb3B0aW9ucywgY2FsbGJhY2spIHtcbiAgdmFyIHZhbHVlID0gdGhpcy5fc3RvcmUuZ2V0KGtleSlcblxuICBpZiAodHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJykge1xuICAgIC8vICdOb3RGb3VuZCcgZXJyb3IsIGNvbnNpc3RlbnQgd2l0aCBMZXZlbERPV04gQVBJXG4gICAgcmV0dXJuIHNldEltbWVkaWF0ZShmdW5jdGlvbiBjYWxsTmV4dCAoKSB7XG4gICAgICBjYWxsYmFjayhuZXcgRXJyb3IoJ05vdEZvdW5kJykpXG4gICAgfSlcbiAgfVxuXG4gIGlmIChvcHRpb25zLmFzQnVmZmVyICE9PSBmYWxzZSAmJiAhQnVmZmVyLmlzQnVmZmVyKHZhbHVlKSkge1xuICAgIHZhbHVlID0gQnVmZmVyLmZyb20oU3RyaW5nKHZhbHVlKSlcbiAgfVxuXG4gIHNldEltbWVkaWF0ZShmdW5jdGlvbiBjYWxsTmV4dCAoKSB7XG4gICAgY2FsbGJhY2sobnVsbCwgdmFsdWUpXG4gIH0pXG59XG5cbk1lbURPV04ucHJvdG90eXBlLl9kZWwgPSBmdW5jdGlvbiAoa2V5LCBvcHRpb25zLCBjYWxsYmFjaykge1xuICB0aGlzLl9zdG9yZSA9IHRoaXMuX3N0b3JlLnJlbW92ZShrZXkpXG4gIHNldEltbWVkaWF0ZShjYWxsYmFjaylcbn1cblxuTWVtRE9XTi5wcm90b3R5cGUuX2JhdGNoID0gZnVuY3Rpb24gKGFycmF5LCBvcHRpb25zLCBjYWxsYmFjaykge1xuICB2YXIgaSA9IC0xXG4gIHZhciBrZXlcbiAgdmFyIHZhbHVlXG4gIHZhciBpdGVyXG4gIHZhciBsZW4gPSBhcnJheS5sZW5ndGhcbiAgdmFyIHRyZWUgPSB0aGlzLl9zdG9yZVxuXG4gIHdoaWxlICgrK2kgPCBsZW4pIHtcbiAgICBrZXkgPSBhcnJheVtpXS5rZXlcbiAgICBpdGVyID0gdHJlZS5maW5kKGtleSlcblxuICAgIGlmIChhcnJheVtpXS50eXBlID09PSAncHV0Jykge1xuICAgICAgdmFsdWUgPSBhcnJheVtpXS52YWx1ZVxuICAgICAgdHJlZSA9IGl0ZXIudmFsaWQgPyBpdGVyLnVwZGF0ZSh2YWx1ZSkgOiB0cmVlLmluc2VydChrZXksIHZhbHVlKVxuICAgIH0gZWxzZSB7XG4gICAgICB0cmVlID0gaXRlci5yZW1vdmUoKVxuICAgIH1cbiAgfVxuXG4gIHRoaXMuX3N0b3JlID0gdHJlZVxuXG4gIHNldEltbWVkaWF0ZShjYWxsYmFjaylcbn1cblxuTWVtRE9XTi5wcm90b3R5cGUuX2l0ZXJhdG9yID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgcmV0dXJuIG5ldyBNZW1JdGVyYXRvcih0aGlzLCBvcHRpb25zKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE1lbURPV04uZGVmYXVsdCA9IE1lbURPV05cblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuLi8uLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAvaG9tZS9odXluaG5ndXllbi9naXRodWIvY2F1c2FsaXR5L25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi4vLi4vbm9kZV9tb2R1bGVzL3NhZmUtYnVmZmVyL2luZGV4LmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC9ob21lL2h1eW5obmd1eWVuL2dpdGh1Yi9jYXVzYWxpdHkvbm9kZV9tb2R1bGVzL3NhZmUtYnVmZmVyL2luZGV4LmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbi8qIGVzbGludC1kaXNhYmxlIG5vZGUvbm8tZGVwcmVjYXRlZC1hcGkgKi9cbnZhciBidWZmZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBidWZmZXIgKi8gXCIuLi8uLi9ub2RlX21vZHVsZXMvYnVmZmVyL2luZGV4LmpzXCIpXG52YXIgQnVmZmVyID0gYnVmZmVyLkJ1ZmZlclxuXG4vLyBhbHRlcm5hdGl2ZSB0byB1c2luZyBPYmplY3Qua2V5cyBmb3Igb2xkIGJyb3dzZXJzXG5mdW5jdGlvbiBjb3B5UHJvcHMgKHNyYywgZHN0KSB7XG4gIGZvciAodmFyIGtleSBpbiBzcmMpIHtcbiAgICBkc3Rba2V5XSA9IHNyY1trZXldXG4gIH1cbn1cbmlmIChCdWZmZXIuZnJvbSAmJiBCdWZmZXIuYWxsb2MgJiYgQnVmZmVyLmFsbG9jVW5zYWZlICYmIEJ1ZmZlci5hbGxvY1Vuc2FmZVNsb3cpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBidWZmZXJcbn0gZWxzZSB7XG4gIC8vIENvcHkgcHJvcGVydGllcyBmcm9tIHJlcXVpcmUoJ2J1ZmZlcicpXG4gIGNvcHlQcm9wcyhidWZmZXIsIGV4cG9ydHMpXG4gIGV4cG9ydHMuQnVmZmVyID0gU2FmZUJ1ZmZlclxufVxuXG5mdW5jdGlvbiBTYWZlQnVmZmVyIChhcmcsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gQnVmZmVyKGFyZywgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKVxufVxuXG4vLyBDb3B5IHN0YXRpYyBtZXRob2RzIGZyb20gQnVmZmVyXG5jb3B5UHJvcHMoQnVmZmVyLCBTYWZlQnVmZmVyKVxuXG5TYWZlQnVmZmVyLmZyb20gPSBmdW5jdGlvbiAoYXJnLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpIHtcbiAgaWYgKHR5cGVvZiBhcmcgPT09ICdudW1iZXInKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnQgbXVzdCBub3QgYmUgYSBudW1iZXInKVxuICB9XG4gIHJldHVybiBCdWZmZXIoYXJnLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpXG59XG5cblNhZmVCdWZmZXIuYWxsb2MgPSBmdW5jdGlvbiAoc2l6ZSwgZmlsbCwgZW5jb2RpbmcpIHtcbiAgaWYgKHR5cGVvZiBzaXplICE9PSAnbnVtYmVyJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50IG11c3QgYmUgYSBudW1iZXInKVxuICB9XG4gIHZhciBidWYgPSBCdWZmZXIoc2l6ZSlcbiAgaWYgKGZpbGwgIT09IHVuZGVmaW5lZCkge1xuICAgIGlmICh0eXBlb2YgZW5jb2RpbmcgPT09ICdzdHJpbmcnKSB7XG4gICAgICBidWYuZmlsbChmaWxsLCBlbmNvZGluZylcbiAgICB9IGVsc2Uge1xuICAgICAgYnVmLmZpbGwoZmlsbClcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgYnVmLmZpbGwoMClcbiAgfVxuICByZXR1cm4gYnVmXG59XG5cblNhZmVCdWZmZXIuYWxsb2NVbnNhZmUgPSBmdW5jdGlvbiAoc2l6ZSkge1xuICBpZiAodHlwZW9mIHNpemUgIT09ICdudW1iZXInKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnQgbXVzdCBiZSBhIG51bWJlcicpXG4gIH1cbiAgcmV0dXJuIEJ1ZmZlcihzaXplKVxufVxuXG5TYWZlQnVmZmVyLmFsbG9jVW5zYWZlU2xvdyA9IGZ1bmN0aW9uIChzaXplKSB7XG4gIGlmICh0eXBlb2Ygc2l6ZSAhPT0gJ251bWJlcicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudCBtdXN0IGJlIGEgbnVtYmVyJylcbiAgfVxuICByZXR1cm4gYnVmZmVyLlNsb3dCdWZmZXIoc2l6ZSlcbn1cblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuLi8uLi9ub2RlX21vZHVsZXMvd2VicGFjay9idWlsZGluL2dsb2JhbC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG52YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi4vLi4vbm9kZV9tb2R1bGVzL3h0ZW5kL2ltbXV0YWJsZS5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMveHRlbmQvaW1tdXRhYmxlLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4dGVuZFxuXG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG5mdW5jdGlvbiBleHRlbmQoKSB7XG4gICAgdmFyIHRhcmdldCA9IHt9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldXG5cbiAgICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldFxufVxuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL2luZGV4LmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL2luZGV4LmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIGV4cG9ydHMgcHJvdmlkZWQ6IG1lbURvd25DYWNoZSwgTWVtQ2FjaGVNaXhpbnMgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX21lbWRvd25DYWNoZV9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9tZW1kb3duQ2FjaGUgKi8gXCIuL3NyYy9tZW1kb3duQ2FjaGUuanNcIik7XG4vKiBoYXJtb255IHJlZXhwb3J0IChzYWZlKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJtZW1Eb3duQ2FjaGVcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBfbWVtZG93bkNhY2hlX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19bXCJkZWZhdWx0XCJdOyB9KTtcblxuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9tZW1jYWNoZV9taXhpbnNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vbWVtY2FjaGUubWl4aW5zICovIFwiLi9zcmMvbWVtY2FjaGUubWl4aW5zLmpzXCIpO1xuLyogaGFybW9ueSByZWV4cG9ydCAoc2FmZSkgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiTWVtQ2FjaGVNaXhpbnNcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBfbWVtY2FjaGVfbWl4aW5zX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19bXCJkZWZhdWx0XCJdOyB9KTtcblxuXG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvbWVtY2FjaGUubWl4aW5zLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9tZW1jYWNoZS5taXhpbnMuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIGV4cG9ydHMgcHJvdmlkZWQ6IGRlZmF1bHQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4vKipcbiAqIFRoaXMgbWl4aW5zIGNsYXNzIHByb3ZpZGVzIGF0dHJpYnV0ZXM6ICoqTWVtQ2FjaGUqKi5cbiAqIEBjbGFzcyBNZW1DYWNoZU1peGluc1xuICogQGV4dGVuZHMge0Jhc2VDbGFzc31cbiAqL1xuY29uc3QgTWVtQ2FjaGVNaXhpbnMgPSBCYXNlQ2xhc3MgPT4gY2xhc3MgZXh0ZW5kcyBCYXNlQ2xhc3Mge1xuICAvKipcbiAgICogVGhpcyBtZXRob2RzIHJldHVybiBzdW1tYXJ5IGFib3V0IGl0ZW1zIG9mIHRoZSBjdXJyZW50IG1lbWNhY2hlIFxuICAgKiBAcmV0dXJuc1xuICAgKi9cbiAgYXN5bmMgbWVtQ2FjaGVTdW1tYXJ5KCkge1xuICAgIHJldHVybiBhd2FpdCB0aGlzLm1lbUNhY2hlLmdldEl0ZW1MaXN0KCk7XG4gIH1cblxuICBzZXQgTWVtQ2FjaGUobWVtQ2FjaGUpIHtcbiAgICB0aGlzLm1lbUNhY2hlID0gbWVtQ2FjaGU7XG4gIH1cblxuICBnZXQgTWVtQ2FjaGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubWVtQ2FjaGU7XG4gIH1cblxufTtcblxuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyBfX3dlYnBhY2tfZXhwb3J0c19fW1wiZGVmYXVsdFwiXSA9IChNZW1DYWNoZU1peGlucyk7XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL21lbWRvd25DYWNoZS5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvbWVtZG93bkNhY2hlLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBleHBvcnRzIHByb3ZpZGVkOiBkZWZhdWx0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIGNhdXNhbF9uZXRfdXRpbHNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIGNhdXNhbC1uZXQudXRpbHMgKi8gXCJjYXVzYWwtbmV0LnV0aWxzXCIpO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIGNhdXNhbF9uZXRfdXRpbHNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX19kZWZhdWx0ID0gLyojX19QVVJFX18qL19fd2VicGFja19yZXF1aXJlX18ubihjYXVzYWxfbmV0X3V0aWxzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18pO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIGNhdXNhbF9uZXRfY29yZV9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgY2F1c2FsLW5ldC5jb3JlICovIFwiY2F1c2FsLW5ldC5jb3JlXCIpO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIGNhdXNhbF9uZXRfY29yZV9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovX193ZWJwYWNrX3JlcXVpcmVfXy5uKGNhdXNhbF9uZXRfY29yZV9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfbWVtb3JpemluZ19taXhpbnNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vbWVtb3JpemluZy5taXhpbnMgKi8gXCIuL3NyYy9tZW1vcml6aW5nLm1peGlucy5qc1wiKTtcblxuXG5cbi8qKlxuICogVGhpcyBjbGFzcyBwcm92aWRlcyBzdG9yYWdlIGltcGxlbWVudGF0aW9uIGZvciBtZW1vcnkgY2FjaGluZyBvbiB0b3Agb2ZcbiAqIFttZW1kb3duXShodHRwczovL3d3dy5ucG1qcy5jb20vcGFja2FnZS9tZW1kb3duKSB3aGljaCBjYW4gYmUgYWNjZXNzZWQgdmlhICoqbWVtRG93bkNhY2hlKiouXG4gKiB7IG1peFdpdGg6IFsgTWVtb3JpemluZ01peGlucyBdIH1cbiAqIEBjbGFzcyBNZW1kb3duQ2FjaGVcbiAqIEBleHRlbmRzIEJhc2VNZW1DYWNoZVxuICovXG5cbmNsYXNzIE1lbWRvd25DYWNoZSBleHRlbmRzIGNhdXNhbF9uZXRfdXRpbHNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX1tcInBsYXRmb3JtXCJdLm1peFdpdGgoY2F1c2FsX25ldF9jb3JlX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19bXCJTdG9yZVwiXSwgW19tZW1vcml6aW5nX21peGluc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fW1wiZGVmYXVsdFwiXV0pIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmNvbm5lY3QoKTtcbiAgfVxuICAvKipcbiAgICogQ29ubmVjdCB0byBkYXRhYmFzZSwgdGhpcyBmdW5jdGlvbiBzaGFsbCBiZSBjYWxsIHdoZW4gY29uc3RydWN0IGluc3RhbmNlXG4gICAqIEBtZW1iZXJvZiBNZW1kb3duQ2FjaGVcbiAgICovXG5cblxuICBjb25uZWN0KCkge1xuICAgIGxldCBtZW1kb3duID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgbWVtZG93biAqLyBcIi4uLy4uL25vZGVfbW9kdWxlcy9tZW1kb3duL21lbWRvd24uanNcIik7XG5cbiAgICB0aGlzLnN0b3JlID0gdGhpcy5sZXZlbHVwKG1lbWRvd24oKSk7XG4gIH1cblxufVxuXG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIF9fd2VicGFja19leHBvcnRzX19bXCJkZWZhdWx0XCJdID0gKG5ldyBNZW1kb3duQ2FjaGUoKSk7XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL21lbW9yaXppbmcubWl4aW5zLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL21lbW9yaXppbmcubWl4aW5zLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIGV4cG9ydHMgcHJvdmlkZWQ6IGRlZmF1bHQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4vKipcbiAqIFRoaXMgTWVtb3JpemluZ01peGlucyBjbGFzcyBpcyBhIG1peGlucyBjbGFzcyBmb3IgaW1wbGVtZW50IG1lbW9yeSBtZXRob2RzXG4gKiBAY2xhc3MgTWVtb3JpemluZ01peGluc1xuICogQGV4cGVyaW1lbnRcbiAqIEBleHRlbmRzIEJhc2VNZW1DYWNoZUNsYXNzXG4gKi9cbmNvbnN0IE1lbW9yaXppbmdNaXhpbnMgPSBCYXNlTWVtQ2FjaGVDbGFzcyA9PiBjbGFzcyBleHRlbmRzIEJhc2VNZW1DYWNoZUNsYXNzIHtcbiAgLyoqXG4gICAqIFJlYWQgY29udGVudCBmcm9tIFxuICAgKiBAZXhwZXJpbWVudFxuICAgKiBAcGFyYW0geyBTdHJpbmd8TnVtYmVyIH0gbWVtb3J5U2xvdEluZGV4IC0gbWVtb3J5IHNsb3QgaW5kZXhcbiAgICogQHJldHVybnNcbiAgICovXG4gIGFzeW5jIHJlYWQobWVtb3J5U2xvdEluZGV4KSB7XG4gICAgY29uc3QgR2V0RnJvbU1lbW9yeSA9IGFzeW5jIG1lbW9yeVNsb3RJbmRleCA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBsZXQgZGF0YSA9IGF3YWl0IHRoaXMuZ2V0SXRlbShtZW1vcnlTbG90SW5kZXgpO1xuICAgICAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyhkYXRhKVswXTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIGF3YWl0IEdldEZyb21NZW1vcnkobWVtb3J5U2xvdEluZGV4KTtcbiAgfVxuICAvKipcbiAgICogXG4gICAqIEBwYXJhbSB7IFN0cmluZ3xOdW1iZXIgfSBtZW1vcnlTbG90SW5kZXggLSBwb3NpdGl2ZSBudW1iZXIgZm9yIG1lbW9yeSBzbG90XG4gICAqIEBwYXJhbSB7IEFycmF5IH0gbWVtb3J5IHZhbHVlXG4gICAqIEByZXR1cm5zIHsgUHJvbWlzZSB9IG1lbW9yeSBzbG90IGluZGV4IHZhbHVlXG4gICAqL1xuXG5cbiAgYXN5bmMgd3JpdGUobWVtb3J5U2xvdEluZGV4LCB2YWx1ZSkge1xuICAgIHJldHVybiBhd2FpdCB0aGlzLnNldEl0ZW0obWVtb3J5U2xvdEluZGV4LCB2YWx1ZSk7XG4gIH1cbiAgLyoqXG4gICAqXG4gICAqXG4gICAqIEBwYXJhbSB7Kn0gc2xvdElkeHNcbiAgICogQHJldHVybnNcbiAgICovXG5cblxuICBhc3luYyByZWNhbGwoc2xvdElkeHMpIHtcbiAgICBsZXQgbWVtb3J5ID0gW107XG5cbiAgICBmb3IgKGxldCBzbG90SWR4IG9mIHNsb3RJZHhzKSB7XG4gICAgICBtZW1vcnkucHVzaCgoYXdhaXQgdGhpcy5yZWFkKHNsb3RJZHgpKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9yeTtcbiAgfVxuXG59O1xuXG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIF9fd2VicGFja19leHBvcnRzX19bXCJkZWZhdWx0XCJdID0gKE1lbW9yaXppbmdNaXhpbnMpO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCJjYXVzYWwtbmV0LmNvcmVcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogZXh0ZXJuYWwgXCJjYXVzYWwtbmV0LmNvcmVcIiAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5tb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9jb3JlX187XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcImNhdXNhbC1uZXQudXRpbHNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIGV4dGVybmFsIFwiY2F1c2FsLW5ldC51dGlsc1wiICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5tb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF91dGlsc19fO1xuXG4vKioqLyB9KVxuXG4vKioqKioqLyB9KTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5kbFluQmhZMnM2THk5QVkyRjFjMkZzVG1WMEwyMWxiV05oWTJobEwzZGxZbkJoWTJzdmRXNXBkbVZ5YzJGc1RXOWtkV3hsUkdWbWFXNXBkR2x2YmlJc0luZGxZbkJoWTJzNkx5OUFZMkYxYzJGc1RtVjBMMjFsYldOaFkyaGxMM2RsWW5CaFkyc3ZZbTl2ZEhOMGNtRndJaXdpZDJWaWNHRmphem92TDBCallYVnpZV3hPWlhRdmJXVnRZMkZqYUdVdkwyaHZiV1V2YUhWNWJtaHVaM1Y1Wlc0dloybDBhSFZpTDJOaGRYTmhiR2wwZVM5dWIyUmxYMjF2WkhWc1pYTXZZV0p6ZEhKaFkzUXRiR1YyWld4a2IzZHVMMkZpYzNSeVlXTjBMV05vWVdsdVpXUXRZbUYwWTJndWFuTWlMQ0ozWldKd1lXTnJPaTh2UUdOaGRYTmhiRTVsZEM5dFpXMWpZV05vWlM4dmFHOXRaUzlvZFhsdWFHNW5kWGxsYmk5bmFYUm9kV0l2WTJGMWMyRnNhWFI1TDI1dlpHVmZiVzlrZFd4bGN5OWhZbk4wY21GamRDMXNaWFpsYkdSdmQyNHZZV0p6ZEhKaFkzUXRhWFJsY21GMGIzSXVhbk1pTENKM1pXSndZV05yT2k4dlFHTmhkWE5oYkU1bGRDOXRaVzFqWVdOb1pTOHZhRzl0WlM5b2RYbHVhRzVuZFhsbGJpOW5hWFJvZFdJdlkyRjFjMkZzYVhSNUwyNXZaR1ZmYlc5a2RXeGxjeTloWW5OMGNtRmpkQzFzWlhabGJHUnZkMjR2WVdKemRISmhZM1F0YkdWMlpXeGtiM2R1TG1weklpd2lkMlZpY0dGamF6b3ZMMEJqWVhWellXeE9aWFF2YldWdFkyRmphR1V2TDJodmJXVXZhSFY1Ym1odVozVjVaVzR2WjJsMGFIVmlMMk5oZFhOaGJHbDBlUzl1YjJSbFgyMXZaSFZzWlhNdllXSnpkSEpoWTNRdGJHVjJaV3hrYjNkdUwybHVaR1Y0TG1weklpd2lkMlZpY0dGamF6b3ZMMEJqWVhWellXeE9aWFF2YldWdFkyRmphR1V2TDJodmJXVXZhSFY1Ym1odVozVjVaVzR2WjJsMGFIVmlMMk5oZFhOaGJHbDBlUzl1YjJSbFgyMXZaSFZzWlhNdlltRnpaVFkwTFdwekwybHVaR1Y0TG1weklpd2lkMlZpY0dGamF6b3ZMMEJqWVhWellXeE9aWFF2YldWdFkyRmphR1V2TDJodmJXVXZhSFY1Ym1odVozVjVaVzR2WjJsMGFIVmlMMk5oZFhOaGJHbDBlUzl1YjJSbFgyMXZaSFZzWlhNdlluVm1abVZ5TDJsdVpHVjRMbXB6SWl3aWQyVmljR0ZqYXpvdkwwQmpZWFZ6WVd4T1pYUXZiV1Z0WTJGamFHVXZMMmh2YldVdmFIVjVibWh1WjNWNVpXNHZaMmwwYUhWaUwyTmhkWE5oYkdsMGVTOXViMlJsWDIxdlpIVnNaWE12WW5WbVptVnlMMjV2WkdWZmJXOWtkV3hsY3k5cGMyRnljbUY1TDJsdVpHVjRMbXB6SWl3aWQyVmljR0ZqYXpvdkwwQmpZWFZ6WVd4T1pYUXZiV1Z0WTJGamFHVXZMMmh2YldVdmFIVjVibWh1WjNWNVpXNHZaMmwwYUhWaUwyTmhkWE5oYkdsMGVTOXViMlJsWDIxdlpIVnNaWE12Wm5WdVkzUnBiMjVoYkMxeVpXUXRZbXhoWTJzdGRISmxaUzl5WW5SeVpXVXVhbk1pTENKM1pXSndZV05yT2k4dlFHTmhkWE5oYkU1bGRDOXRaVzFqWVdOb1pTOHZhRzl0WlM5b2RYbHVhRzVuZFhsbGJpOW5hWFJvZFdJdlkyRjFjMkZzYVhSNUwyNXZaR1ZmYlc5a2RXeGxjeTlwWldWbE56VTBMMmx1WkdWNExtcHpJaXdpZDJWaWNHRmphem92TDBCallYVnpZV3hPWlhRdmJXVnRZMkZqYUdVdkwyaHZiV1V2YUhWNWJtaHVaM1Y1Wlc0dloybDBhSFZpTDJOaGRYTmhiR2wwZVM5dWIyUmxYMjF2WkhWc1pYTXZhVzF0WldScFlYUmxMMnhwWWk5cGJtUmxlQzVxY3lJc0luZGxZbkJoWTJzNkx5OUFZMkYxYzJGc1RtVjBMMjFsYldOaFkyaGxMeTlvYjIxbEwyaDFlVzVvYm1kMWVXVnVMMmRwZEdoMVlpOWpZWFZ6WVd4cGRIa3ZibTlrWlY5dGIyUjFiR1Z6TDJsdGJXVmthV0YwWlM5c2FXSXZiV1Z6YzJGblpVTm9ZVzV1Wld3dWFuTWlMQ0ozWldKd1lXTnJPaTh2UUdOaGRYTmhiRTVsZEM5dFpXMWpZV05vWlM4dmFHOXRaUzlvZFhsdWFHNW5kWGxsYmk5bmFYUm9kV0l2WTJGMWMyRnNhWFI1TDI1dlpHVmZiVzlrZFd4bGN5OXBiVzFsWkdsaGRHVXZiR2xpTDIxMWRHRjBhVzl1TG1weklpd2lkMlZpY0dGamF6b3ZMMEJqWVhWellXeE9aWFF2YldWdFkyRmphR1V2TDJodmJXVXZhSFY1Ym1odVozVjVaVzR2WjJsMGFIVmlMMk5oZFhOaGJHbDBlUzl1YjJSbFgyMXZaSFZzWlhNdmFXMXRaV1JwWVhSbEwyeHBZaTl1WlhoMFZHbGpheTVxY3lJc0luZGxZbkJoWTJzNkx5OUFZMkYxYzJGc1RtVjBMMjFsYldOaFkyaGxMeTlvYjIxbEwyaDFlVzVvYm1kMWVXVnVMMmRwZEdoMVlpOWpZWFZ6WVd4cGRIa3ZibTlrWlY5dGIyUjFiR1Z6TDJsdGJXVmthV0YwWlM5c2FXSXZjM1JoZEdWRGFHRnVaMlV1YW5NaUxDSjNaV0p3WVdOck9pOHZRR05oZFhOaGJFNWxkQzl0WlcxallXTm9aUzh2YUc5dFpTOW9kWGx1YUc1bmRYbGxiaTluYVhSb2RXSXZZMkYxYzJGc2FYUjVMMjV2WkdWZmJXOWtkV3hsY3k5cGJXMWxaR2xoZEdVdmJHbGlMM1JwYldWdmRYUXVhbk1pTENKM1pXSndZV05yT2k4dlFHTmhkWE5oYkU1bGRDOXRaVzFqWVdOb1pTOHZhRzl0WlM5b2RYbHVhRzVuZFhsbGJpOW5hWFJvZFdJdlkyRjFjMkZzYVhSNUwyNXZaR1ZmYlc5a2RXeGxjeTlwYm1obGNtbDBjeTlwYm1obGNtbDBjMTlpY205M2MyVnlMbXB6SWl3aWQyVmljR0ZqYXpvdkwwQmpZWFZ6WVd4T1pYUXZiV1Z0WTJGamFHVXZMMmh2YldVdmFIVjVibWh1WjNWNVpXNHZaMmwwYUhWaUwyTmhkWE5oYkdsMGVTOXViMlJsWDIxdlpIVnNaWE12YkhSbmRDOXBibVJsZUM1cWN5SXNJbmRsWW5CaFkyczZMeTlBWTJGMWMyRnNUbVYwTDIxbGJXTmhZMmhsTHk5b2IyMWxMMmgxZVc1b2JtZDFlV1Z1TDJkcGRHaDFZaTlqWVhWellXeHBkSGt2Ym05a1pWOXRiMlIxYkdWekwyMWxiV1J2ZDI0dmFXMXRaV1JwWVhSbExXSnliM2R6WlhJdWFuTWlMQ0ozWldKd1lXTnJPaTh2UUdOaGRYTmhiRTVsZEM5dFpXMWpZV05vWlM4dmFHOXRaUzlvZFhsdWFHNW5kWGxsYmk5bmFYUm9kV0l2WTJGMWMyRnNhWFI1TDI1dlpHVmZiVzlrZFd4bGN5OXRaVzFrYjNkdUwyMWxiV1J2ZDI0dWFuTWlMQ0ozWldKd1lXTnJPaTh2UUdOaGRYTmhiRTVsZEM5dFpXMWpZV05vWlM4dmFHOXRaUzlvZFhsdWFHNW5kWGxsYmk5bmFYUm9kV0l2WTJGMWMyRnNhWFI1TDI1dlpHVmZiVzlrZFd4bGN5OXdjbTlqWlhOekwySnliM2R6WlhJdWFuTWlMQ0ozWldKd1lXTnJPaTh2UUdOaGRYTmhiRTVsZEM5dFpXMWpZV05vWlM4dmFHOXRaUzlvZFhsdWFHNW5kWGxsYmk5bmFYUm9kV0l2WTJGMWMyRnNhWFI1TDI1dlpHVmZiVzlrZFd4bGN5OXpZV1psTFdKMVptWmxjaTlwYm1SbGVDNXFjeUlzSW5kbFluQmhZMnM2THk5QVkyRjFjMkZzVG1WMEwyMWxiV05oWTJobEx5aDNaV0p3WVdOcktTOWlkV2xzWkdsdUwyZHNiMkpoYkM1cWN5SXNJbmRsWW5CaFkyczZMeTlBWTJGMWMyRnNUbVYwTDIxbGJXTmhZMmhsTHk5b2IyMWxMMmgxZVc1b2JtZDFlV1Z1TDJkcGRHaDFZaTlqWVhWellXeHBkSGt2Ym05a1pWOXRiMlIxYkdWekwzaDBaVzVrTDJsdGJYVjBZV0pzWlM1cWN5SXNJbmRsWW5CaFkyczZMeTlBWTJGMWMyRnNUbVYwTDIxbGJXTmhZMmhsTHk0dmMzSmpMMmx1WkdWNExtcHpJaXdpZDJWaWNHRmphem92TDBCallYVnpZV3hPWlhRdmJXVnRZMkZqYUdVdkxpOXpjbU12YldWdFkyRmphR1V1YldsNGFXNXpMbXB6SWl3aWQyVmljR0ZqYXpvdkwwQmpZWFZ6WVd4T1pYUXZiV1Z0WTJGamFHVXZMaTl6Y21NdmJXVnRaRzkzYmtOaFkyaGxMbXB6SWl3aWQyVmljR0ZqYXpvdkwwQmpZWFZ6WVd4T1pYUXZiV1Z0WTJGamFHVXZMaTl6Y21NdmJXVnRiM0pwZW1sdVp5NXRhWGhwYm5NdWFuTWlMQ0ozWldKd1lXTnJPaTh2UUdOaGRYTmhiRTVsZEM5dFpXMWpZV05vWlM5bGVIUmxjbTVoYkNCY0ltTmhkWE5oYkMxdVpYUXVZMjl5WlZ3aUlpd2lkMlZpY0dGamF6b3ZMMEJqWVhWellXeE9aWFF2YldWdFkyRmphR1V2WlhoMFpYSnVZV3dnWENKallYVnpZV3d0Ym1WMExuVjBhV3h6WENJaVhTd2libUZ0WlhNaU9sc2lUV1Z0UTJGamFHVk5hWGhwYm5NaUxDSkNZWE5sUTJ4aGMzTWlMQ0p0WlcxRFlXTm9aVk4xYlcxaGNua2lMQ0p0WlcxRFlXTm9aU0lzSW1kbGRFbDBaVzFNYVhOMElpd2lUV1Z0UTJGamFHVWlMQ0pOWlcxa2IzZHVRMkZqYUdVaUxDSndiR0YwWm05eWJTSXNJbTFwZUZkcGRHZ2lMQ0pDWVhObFRXVnRRMkZqYUdVaUxDSk5aVzF2Y21sNmFXNW5UV2w0YVc1eklpd2lZMjl1YzNSeWRXTjBiM0lpTENKamIyNXVaV04wSWl3aWJXVnRaRzkzYmlJc0luSmxjWFZwY21VaUxDSnpkRzl5WlNJc0lteGxkbVZzZFhBaUxDSkNZWE5sVFdWdFEyRmphR1ZEYkdGemN5SXNJbkpsWVdRaUxDSnRaVzF2Y25sVGJHOTBTVzVrWlhnaUxDSkhaWFJHY205dFRXVnRiM0o1SWl3aVpHRjBZU0lzSW1kbGRFbDBaVzBpTENKUFltcGxZM1FpTENKMllXeDFaWE1pTENKbGNuSWlMQ0ozY21sMFpTSXNJblpoYkhWbElpd2ljMlYwU1hSbGJTSXNJbkpsWTJGc2JDSXNJbk5zYjNSSlpIaHpJaXdpYldWdGIzSjVJaXdpYzJ4dmRFbGtlQ0lzSW5CMWMyZ2lYU3dpYldGd2NHbHVaM01pT2lKQlFVRkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRU5CUVVNN1FVRkRSQ3hQTzBGRFZrRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN096dEJRVWRCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4clJFRkJNRU1zWjBOQlFXZERPMEZCUXpGRk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1owVkJRWGRFTEd0Q1FVRnJRanRCUVVNeFJUdEJRVU5CTEhsRVFVRnBSQ3hqUVVGak8wRkJReTlFT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hwUkVGQmVVTXNhVU5CUVdsRE8wRkJRekZGTEhkSVFVRm5TQ3h0UWtGQmJVSXNSVUZCUlR0QlFVTnlTVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJMRzFEUVVFeVFpd3dRa0ZCTUVJc1JVRkJSVHRCUVVOMlJDeDVRMEZCYVVNc1pVRkJaVHRCUVVOb1JEdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRU3c0UkVGQmMwUXNLMFJCUVN0RU96dEJRVVZ5U0R0QlFVTkJPenM3UVVGSFFUdEJRVU5CT3pzN096czdPenM3T3pzN1FVTnNSa0U3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJMRmxCUVZrN08wRkJSVm83UVVGRFFUczdRVUZGUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRXNlVUpCUVhsQ0xITkRRVUZ6UXp0QlFVTXZSRHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFc1dVRkJXVHM3UVVGRldqdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFTeDVRa0ZCZVVJc2QwSkJRWGRDTzBGQlEycEVPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRU3h6UTBGQmMwTTdRVUZEZEVNN1FVRkRRVHRCUVVOQk8wRkJRMEVzYjBOQlFXOURMR0ZCUVdFN08wRkJSV3BFT3p0QlFVVkJPMEZCUTBFc01FTkJRVEJET3p0QlFVVXhRenRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHM3T3pzN096czdPenM3T3p0QlEzWkdRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1IwRkJSenM3UVVGRlNEdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVRzN096czdPenM3T3pzN096dEJRM1pFUVRzN1FVRkZRU3haUVVGWkxHMUNRVUZQTEVOQlFVTXNiMFJCUVU4N1FVRkRNMElzZFVKQlFYVkNMRzFDUVVGUExFTkJRVU1zZFVaQlFYRkNPMEZCUTNCRUxESkNRVUV5UWl4dFFrRkJUeXhEUVVGRExHbEhRVUV3UWp0QlFVTTNSRHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJMSE5EUVVGelF6czdRVUZGZEVNN1FVRkRRVHRCUVVOQk96dEJRVVZCTEc5RFFVRnZReXhoUVVGaE96dEJRVVZxUkR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hIUVVGSE8wRkJRMGc3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFZEJRVWM3UVVGRFNEczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFTeHpRMEZCYzBNN08wRkJSWFJETzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCT3p0QlFVVkJMRzlEUVVGdlF5eGhRVUZoT3p0QlFVVnFSRHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFc1owTkJRV2RETEd0RFFVRnJRenRCUVVOc1JUczdRVUZGUVR0QlFVTkJMSE5EUVVGelF6czdRVUZGZEVNN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFTeHZRMEZCYjBNc1lVRkJZVHM3UVVGRmFrUTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVN4elEwRkJjME03TzBGQlJYUkRPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPenRCUVVWQkxHOURRVUZ2UXl4aFFVRmhPenRCUVVWcVJEdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTERCQ1FVRXdRanM3UVVGRk1VSXNjME5CUVhORE96dEJRVVYwUXl4dlEwRkJiME03TzBGQlJYQkRPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFc1owUkJRV2RFTEdGQlFXRTdPMEZCUlRkRU96dEJRVVZCTEdsQ1FVRnBRaXhyUWtGQmEwSTdRVUZEYmtNN1FVRkRRVHRCUVVOQk96dEJRVVZCT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPenRCUVVWQkxESkNRVUV5UWpzN1FVRkZNMEk3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQkxHOURRVUZ2UXl4aFFVRmhPMEZCUTJwRU8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN096czdPenM3T3pzN096czdRVU4wVVVFc05FSkJRVFJDTEcxQ1FVRlBMRU5CUVVNc2VVWkJRWE5DTzBGQlF6RkVMREpDUVVFeVFpeHRRa0ZCVHl4RFFVRkRMSFZHUVVGeFFqdEJRVU40UkN3clFrRkJLMElzYlVKQlFVOHNRMEZCUXl4cFIwRkJNRUk3T3pzN096czdPenM3T3pzN1FVTkdja1E3TzBGQlJWbzdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJMR3REUVVGclF5eFRRVUZUTzBGQlF6TkRPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHM3UVVGRlFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFTeHBRa0ZCYVVJc1UwRkJVenRCUVVNeFFqdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEVzY1VKQlFYRkNMRk5CUVZNN1FVRkRPVUk3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFTd3dRMEZCTUVNc1ZVRkJWVHRCUVVOd1JEdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1IwRkJSenRCUVVOSU8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdPenM3T3pzN096czdPenRCUTNSS1FUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRldUczdRVUZGV2l4aFFVRmhMRzFDUVVGUExFTkJRVU1zZDBSQlFWYzdRVUZEYUVNc1kwRkJZeXh0UWtGQlR5eERRVUZETEc5RVFVRlRPMEZCUXk5Q0xHTkJRV01zYlVKQlFVOHNRMEZCUXl4M1JVRkJVenM3UVVGRkwwSTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEhGQ1FVRnhRaXh0UkVGQmJVUTdRVUZEZUVVN1FVRkRRVHRCUVVOQk8wRkJRMEVzUjBGQlJ6dEJRVU5JTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4SFFVRkhPMEZCUTBnN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeExRVUZMTzBGQlEwdzdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeEhRVUZITzBGQlEwZzdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEcxQ1FVRnRRaXhWUVVGVk8wRkJRemRDTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEdsQ1FVRnBRaXhaUVVGWk8wRkJRemRDTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFc1IwRkJSenRCUVVOSU8wRkJRMEVzUjBGQlJ6dEJRVU5JTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeEhRVUZITzBGQlEwZzdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVN3d1FrRkJNRUk3UVVGRE1VSTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCT3p0QlFVVkJPMEZCUTBFN08wRkJSVUVzZFVOQlFYVkRMRk5CUVZNN1FVRkRhRVE3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRXNaVUZCWlN4cFFrRkJhVUk3UVVGRGFFTTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFTeGhRVUZoTEdsQ1FVRnBRanRCUVVNNVFqdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVN4VFFVRlRPMEZCUTFRN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeHBRa0ZCYVVJc1UwRkJVenRCUVVNeFFqdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNhVUpCUVdsQ0xGTkJRVk03UVVGRE1VSTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc2FVSkJRV2xDTEZOQlFWTTdRVUZETVVJN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3huUkVGQlowUXNSVUZCUlR0QlFVTnNSRHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVN4cFFrRkJhVUlzVTBGQlV6dEJRVU14UWp0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc2VVTkJRWGxETzBGQlEzcERPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hIUVVGSE8wRkJRMGc3UVVGRFFTeEhRVUZITzBGQlEwZzdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFZEJRVWM3UVVGRFNEdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeEhRVUZITzBGQlEwZzdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFOUJRVTg3UVVGRFVEdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEVzUzBGQlN6dEJRVU5NTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeDNRa0ZCZDBJc1pVRkJaVHRCUVVOMlF6dEJRVU5CTzBGQlEwRTdRVUZEUVN4UFFVRlBPMEZCUTFBN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeEhRVUZITzBGQlEwZzdRVUZEUVN4M1FrRkJkMElzVVVGQlVUdEJRVU5vUXp0QlFVTkJMSEZDUVVGeFFpeGxRVUZsTzBGQlEzQkRPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNSMEZCUnp0QlFVTklPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEdsQ1FVRnBRaXhaUVVGWk8wRkJRemRDTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1IwRkJSenRCUVVOSU8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNSMEZCUnp0QlFVTklPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzUzBGQlN6dEJRVU5NTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1IwRkJSenRCUVVOSU8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPenRCUVVWQk8wRkJRMEVzVTBGQlV6dEJRVU5VTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFZEJRVWM3UVVGRFNEdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1MwRkJTenRCUVVOTU8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFTeHhRa0ZCY1VJc1UwRkJVenRCUVVNNVFqdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRXNjVUpCUVhGQ0xGTkJRVk03UVVGRE9VSTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEVzY1VKQlFYRkNMRk5CUVZNN1FVRkRPVUk3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEVzYVVKQlFXbENMR3RDUVVGclFqdEJRVU51UXp0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeEhRVUZITzBGQlEwZzdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeEhRVUZITzBGQlEwZzdRVUZEUVRzN1FVRkZRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRWRCUVVjN1FVRkRTRHRCUVVOQk8wRkJRMEVzYlVKQlFXMUNMR05CUVdNN1FVRkRha003UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQkxIVkVRVUYxUkN4UFFVRlBPMEZCUXpsRU8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNSMEZCUnp0QlFVTklPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzUjBGQlJ6dEJRVU5JTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFTeDFSRUZCZFVRc1QwRkJUenRCUVVNNVJEdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1IwRkJSenRCUVVOSU8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRWRCUVVjN1FVRkRTRHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4SFFVRkhPMEZCUTBnN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeEhRVUZITzBGQlEwZzdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzUjBGQlJ6dEJRVU5JTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzUjBGQlJ6dEJRVU5JTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRU3hyUWtGQmEwSTdRVUZEYkVJN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVN4eFFrRkJjVUlzVVVGQlVUdEJRVU0zUWp0QlFVTkJPMEZCUTBFc1IwRkJSenRCUVVOSU8wRkJRMEVzWlVGQlpTeFRRVUZUTzBGQlEzaENPMEZCUTBFN1FVRkRRU3hIUVVGSE8wRkJRMGc3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRXRCUVVzN1FVRkRURHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4SFFVRkhPMEZCUTBnN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRXNiVUpCUVcxQ0xGTkJRVk03UVVGRE5VSTdRVUZEUVR0QlFVTkJMRWRCUVVjN1FVRkRTRHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEdWQlFXVXNhVUpCUVdsQ08wRkJRMmhETzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFc2FVSkJRV2xDTEZsQlFWazdRVUZETjBJN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzVTBGQlV6dEJRVU5VTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQkxFdEJRVXM3UVVGRFREdEJRVU5CTzBGQlEwRTdPMEZCUlVFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4TFFVRkxPMEZCUTB3N1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEV0QlFVczdRVUZEVER0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeExRVUZMTzBGQlEwdzdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeExRVUZMTzBGQlEwdzdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJMR2xDUVVGcFFpeG5Ra0ZCWjBJN1FVRkRha003UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeHBRa0ZCYVVJc1owSkJRV2RDTzBGQlEycERPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQkxHbENRVUZwUWl4WlFVRlpPMEZCUXpkQ08wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96czdPenM3T3pzN096czdPMEZETlhaRVFTeHBRa0ZCYVVJN08wRkJSV3BDTzBGQlEwRTdRVUZEUVRzN096czdPenM3T3pzN096dEJRMHBaT3p0QlFVVmFPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1MwRkJTenRCUVVOTU8wRkJRMEU3UVVGRFFTeERRVUZET3p0QlFVVkVPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeExRVUZMTzBGQlEwdzdRVUZEUVR0QlFVTkJMRU5CUVVNN08wRkJSVVE3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFTkJRVU03TzBGQlJVUTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hMUVVGTE8wRkJRMHc3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRFpDUVVFMlFpeE5RVUZOTzBGQlEyNURPMEZCUTBFN1FVRkRRVHRCUVVOQkxFdEJRVXM3UVVGRFREdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc05rSkJRVFpDTEV0QlFVczdRVUZEYkVNN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNVMEZCVXp0QlFVTlVPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzWVVGQllUdEJRVU5pTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hQUVVGUE8wRkJRMUE3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hUUVVGVE8wRkJRMVE3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hoUVVGaE8wRkJRMkk3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1MwRkJTenRCUVVOTU8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hUUVVGVE8wRkJRMVE3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4aFFVRmhPMEZCUTJJN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEU5QlFVODdRVUZEVUR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEZOQlFWTTdRVUZEVkR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEdGQlFXRTdRVUZEWWp0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN096dEJRVWRCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1YwRkJWenRCUVVOWU8wRkJRMEU3UVVGRFFTeFRRVUZUTzBGQlExUTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1lVRkJZVHRCUVVOaU8wRkJRMEU3UVVGRFFTeFhRVUZYTzBGQlExZzdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzWVVGQllUdEJRVU5pTzBGQlEwRTdRVUZEUVR0QlFVTkJMR0ZCUVdFN1FVRkRZanRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPenRCUVVkQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFTkJRVU03TzBGQlJVUTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRU5CUVVNN08wRkJSVVE3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hMUVVGTE8wRkJRMHc3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEV0QlFVczdRVUZEVER0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hMUVVGTE8wRkJRMHc3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNTMEZCU3p0QlFVTk1PMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFdEJRVXM3UVVGRFREdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4TFFVRkxPMEZCUTB3N1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hMUVVGTE8wRkJRMHc3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4RFFVRkRPenRCUVVWRU8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1IwRkJSenRCUVVOSU8wRkJRMEVzUTBGQlF6czdRVUZGUkR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFc01rSkJRVEpDTEUxQlFVMDdRVUZEYWtNN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1YwRkJWenRCUVVOWU8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4UFFVRlBPMEZCUTFBN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1YwRkJWenRCUVVOWU8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEZOQlFWTTdRVUZEVkR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFOUJRVTg3UVVGRFVEdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4WFFVRlhPMEZCUTFnN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4VFFVRlRPMEZCUTFRN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeExRVUZMTzBGQlEwdzdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4WFFVRlhPMEZCUTFnN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEU5QlFVODdRVUZEVUR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4WFFVRlhPMEZCUTFnN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzVTBGQlV6dEJRVU5VTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1QwRkJUenRCUVVOUU8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEZkQlFWYzdRVUZEV0R0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEZOQlFWTTdRVUZEVkR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMREpDUVVFeVFpeE5RVUZOTzBGQlEycERPMEZCUTBFN1FVRkRRVHRCUVVOQkxFdEJRVXM3UVVGRFREdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVN3NFFrRkJPRUlzVlVGQlZUdEJRVU40UXp0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzYTBSQlFXdEVMR2xDUVVGcFFqczdRVUZGYmtVN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRXRCUVVzN1FVRkRURHRCUVVOQk8wRkJRMEU3UVVGRFFTeG5Ra0ZCWjBJc2FVSkJRV2xDTzBGQlEycERPMEZCUTBFN1FVRkRRVHRCUVVOQkxFZEJRVWM3UVVGRFNEdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1QwRkJUenRCUVVOUU8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNhMEpCUVd0Q0xHMUNRVUZ0UWp0QlFVTnlRenRCUVVOQk8wRkJRMEU3UVVGRFFTeExRVUZMTzBGQlEwdzdRVUZEUVR0QlFVTkJPMEZCUTBFc1MwRkJTenRCUVVOTU8wRkJRMEU3UVVGRFFTeHJRa0ZCYTBJc2FVSkJRV2xDTzBGQlEyNURPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNUMEZCVHp0QlFVTlFPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEVkQlFVYzdRVUZEU0R0QlFVTkJMRU5CUVVNN08wRkJSVVE3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hIUVVGSE8wRkJRMGc3UVVGRFFTeERRVUZET3pzN1FVRkhSRHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzUzBGQlN6dEJRVU5NTzBGQlEwRTdRVUZEUVN3MlFrRkJOa0lzVFVGQlRUdEJRVU51UXp0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNSMEZCUnp0QlFVTklPMEZCUTBFc1EwRkJRenM3UVVGRlJEdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRWRCUVVjN1FVRkRTRHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxEWkNRVUUyUWl4TFFVRkxPMEZCUTJ4RE8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRU5CUVVNN08wRkJSVVE3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzTWtKQlFUSkNMRTFCUVUwN1FVRkRha003UVVGRFFUdEJRVU5CTzBGQlEwRXNTMEZCU3p0QlFVTk1PMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hIUVVGSE8wRkJRMGc3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTdzJRa0ZCTmtJc1MwRkJTenRCUVVOc1F6dEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hEUVVGRE96dEJRVVZFTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFTTdPenM3T3pzN096czdPMEZEYml0Q1FUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEVzVVVGQlVTeFhRVUZYT3p0QlFVVnVRanRCUVVOQk8wRkJRMEU3UVVGRFFTeFJRVUZSTEZkQlFWYzdPMEZCUlc1Q08wRkJRMEU3UVVGRFFTeEhRVUZITzBGQlEwZzdRVUZEUVN4SFFVRkhPMEZCUTBnN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRXNSMEZCUnp0QlFVTklPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNTMEZCU3p0QlFVTk1PMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hMUVVGTE8wRkJRMHc3UVVGRFFUdEJRVU5CTEV0QlFVczdRVUZEVER0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFTeFJRVUZSTEZkQlFWYzdPMEZCUlc1Q08wRkJRMEU3UVVGRFFTeFJRVUZSTEZWQlFWVTdPMEZCUld4Q08wRkJRMEU3T3pzN096czdPenM3T3pzN1FVTnVSbUU3UVVGRFlqdEJRVU5CTEVWQlFVVXNiVUpCUVU4c1EwRkJReXhuUlVGQldUdEJRVU4wUWl4RlFVRkZMRzFDUVVGUExFTkJRVU1zYlVWQlFXVTdRVUZEZWtJc1JVRkJSU3h0UWtGQlR5eERRVUZETERSRlFVRnJRanRCUVVNMVFpeEZRVUZGTEcxQ1FVRlBMRU5CUVVNc2MwVkJRV1U3UVVGRGVrSXNSVUZCUlN4dFFrRkJUeXhEUVVGRExEaEVRVUZYTzBGQlEzSkNPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzUjBGQlJ6dEJRVU5JTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc2JVSkJRVzFDTEhOQ1FVRnpRanRCUVVONlF6dEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3T3pzN096czdPenM3T3pzN1FVTXZSa0VzT0VOQlFXRTdPMEZCUldJN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4Rk96czdPenM3T3pzN096czdPMEZEYWtKQkxEaERRVUZoTzBGQlEySTdRVUZEUVR0QlFVTkJPenRCUVVWQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4SFFVRkhPMEZCUTBnN1FVRkRRVHRCUVVOQk8wRkJRMEVzUlRzN096czdPenM3T3pzN096dEJRM0pDUVN3clEwRkJZVHRCUVVOaU8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3T3pzN096czdPenM3T3pzN08wRkRWa0VzT0VOQlFXRTdPMEZCUldJN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFc2FVTkJRV2xETzBGQlEycERPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTEVVN096czdPenM3T3pzN096czdRVU4yUW1FN1FVRkRZanRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hGT3pzN096czdPenM3T3p0QlExUkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hMUVVGTE8wRkJRMHc3UVVGRFFTeERRVUZETzBGQlEwUTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3pzN096czdPenM3T3pzN08wRkRja0pCT3p0QlFVVkJPMEZCUTBFN1FVRkRRU3hyUWtGQmEwSXNUMEZCVHp0QlFVTjZRanRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFTeHBRa0ZCYVVJN08wRkJSV3BDTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN096czdPenM3T3pzN096czdPenRCUTJ4TFFTeHBRa0ZCYVVJc2JVSkJRVThzUTBGQlF5dzBSRUZCVnpzN096czdPenM3T3pzN08wRkRRWEJETEdWQlFXVXNiVUpCUVU4c1EwRkJReXhwUlVGQlZUdEJRVU5xUXl4M1FrRkJkMElzYlVKQlFVOHNRMEZCUXl3d1JVRkJiMEk3UVVGRGNFUXNkVUpCUVhWQ0xHMUNRVUZQTEVOQlFVTXNNRVZCUVc5Q08wRkJRMjVFTEZkQlFWY3NiVUpCUVU4c1EwRkJReXc0UTBGQlRUdEJRVU42UWl4blFrRkJaMElzYlVKQlFVOHNRMEZCUXl4NVJrRkJNa0k3UVVGRGJrUXNZVUZCWVN4dFFrRkJUeXhEUVVGRExEUkVRVUZoT3p0QlFVVnNRenRCUVVOQk8wRkJRMEVzYlVKQlFXMUNMRzFDUVVGUExFTkJRVU1zYjBWQlFXRTdPMEZCUlhoRE8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN08wRkJSVUU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEVzUzBGQlN6dEJRVU5NTzBGQlEwRXNTMEZCU3p0QlFVTk1PMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRXNUMEZCVHp0QlFVTlFPMEZCUTBFN1FVRkRRVHRCUVVOQkxFZEJRVWM3UVVGRFNEdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQkxFdEJRVXM3UVVGRFREdEJRVU5CTEV0QlFVczdRVUZEVER0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEU5QlFVODdRVUZEVUR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEVzUjBGQlJ6dEJRVU5JT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeEhRVUZITzBGQlEwZzdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVN4SFFVRkhPMEZCUTBnN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4TFFVRkxPMEZCUTB3N08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRU3hIUVVGSE8wRkJRMGc3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFdEJRVXM3UVVGRFREdEJRVU5CTzBGQlEwRTdPMEZCUlVFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3T3pzN096czdPenM3T3p0QlF5OU5RVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4VFFVRlRPMEZCUTFRN1FVRkRRVHRCUVVOQkxFdEJRVXM3UVVGRFREdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1UwRkJVenRCUVVOVU8wRkJRMEU3UVVGRFFTeExRVUZMTzBGQlEwdzdRVUZEUVR0QlFVTkJMRU5CUVVNN1FVRkRSRHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEV0QlFVczdRVUZEVER0QlFVTkJPMEZCUTBFN1FVRkRRU3hUUVVGVE8wRkJRMVE3UVVGRFFUdEJRVU5CTzBGQlEwRTdPenRCUVVkQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4TFFVRkxPMEZCUTB3N1FVRkRRVHRCUVVOQk8wRkJRMEVzVTBGQlV6dEJRVU5VTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN096czdRVUZKUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzUzBGQlN6dEJRVU5NTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRXNkVUpCUVhWQ0xITkNRVUZ6UWp0QlFVTTNRenRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEhGQ1FVRnhRanRCUVVOeVFqczdRVUZGUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUVzY1VOQlFYRkRPenRCUVVWeVF6dEJRVU5CTzBGQlEwRTdPMEZCUlVFc01rSkJRVEpDTzBGQlF6TkNPMEZCUTBFN1FVRkRRVHRCUVVOQkxEUkNRVUUwUWl4VlFVRlZPenM3T3pzN096czdPenM3UVVOMlRIUkRPMEZCUTBFc1lVRkJZU3h0UWtGQlR5eERRVUZETEd0RVFVRlJPMEZCUXpkQ096dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeERRVUZETzBGQlEwUTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hMUVVGTE8wRkJRMHc3UVVGRFFUdEJRVU5CTEVkQlFVYzdRVUZEU0R0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenM3T3pzN096czdPenM3UVVNM1JFRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEVzUTBGQlF6czdRVUZGUkR0QlFVTkJPMEZCUTBFN1FVRkRRU3hEUVVGRE8wRkJRMFE3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRU3cwUTBGQk5FTTdPMEZCUlRWRE96czdPenM3T3pzN096czdRVU51UWtFN08wRkJSVUU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRU3h0UWtGQmJVSXNjMEpCUVhOQ08wRkJRM3BET3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenM3T3pzN096czdPenM3TzBGRGJFSkJPMEZCUVVFN1FVRkJRVHRCUVVGQk8wRkJRVUU3UVVGQlFUdEJRVUZCTzBGQlFVRTdPenM3T3pzN096czdPenM3UVVOQlFUdEJRVUZCT3pzN096dEJRVXRCTEUxQlFVMUJMR05CUVdNc1IwRkJTVU1zVTBGQlJDeEpRVUZqTEdOQlFXTkJMRk5CUVdRc1EwRkJkVUk3UVVGRGVFUTdPenM3UVVGSlFTeFJRVUZOUXl4bFFVRk9MRWRCUVhWQ08wRkJRMjVDTEZkQlFVOHNUVUZCVFN4TFFVRkxReXhSUVVGTUxFTkJRV05ETEZkQlFXUXNSVUZCWWp0QlFVTklPenRCUVVWRUxFMUJRVWxETEZGQlFVb3NRMEZCWVVZc1VVRkJZaXhGUVVGelFqdEJRVU5zUWl4VFFVRkxRU3hSUVVGTUxFZEJRV2RDUVN4UlFVRm9RanRCUVVOSU96dEJRVVZFTEUxQlFVbEZMRkZCUVVvc1IwRkJZenRCUVVOV0xGZEJRVThzUzBGQlMwWXNVVUZCV2p0QlFVTklPenRCUVdaMVJDeERRVUUxUkRzN1FVRnBRbVZJTERaRlFVRm1MRVU3T3pzN096czdPenM3T3p0QlEzUkNRVHRCUVVGQk8wRkJRVUU3UVVGQlFUdEJRVUZCTzBGQlFVRTdRVUZCUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3T3pzN096czdRVUZQUVN4TlFVRk5UU3haUVVGT0xGTkJRVEpDUXl4NVJFRkJVU3hEUVVGRFF5eFBRVUZVTEVOQlFXdENReXh4UkVGQmJFSXNSVUZEZGtJc1EwRkJSVU1zTUVSQlFVWXNRMEZFZFVJc1EwRkJNMElzUTBGRGVVSTdRVUZEY2tKRExHRkJRVmNzUjBGQlJUdEJRVU5VTzBGQlEwRXNVMEZCUzBNc1QwRkJURHRCUVVOSU8wRkJRMFE3T3pzN096dEJRVWxCUVN4VFFVRlBMRWRCUVVVN1FVRkRUQ3hSUVVGSlF5eFBRVUZQTEVkQlFVZERMRzFDUVVGUExFTkJRVU1zYzBSQlFVUXNRMEZCY2tJN08wRkJRMEVzVTBGQlMwTXNTMEZCVEN4SFFVRmhMRXRCUVV0RExFOUJRVXdzUTBGQllVZ3NUMEZCVHl4RlFVRndRaXhEUVVGaU8wRkJRMGc3TzBGQldtOUNPenRCUVdWV0xHMUZRVUZKVUN4WlFVRktMRVZCUVdZc1JUczdPenM3T3pzN096czdPMEZETVVKQk8wRkJRVUU3T3pzN096dEJRVTFCTEUxQlFVMUpMR2RDUVVGblFpeEhRVUZKVHl4cFFrRkJSQ3hKUVVGelFpeGpRVUZqUVN4cFFrRkJaQ3hEUVVFclFqdEJRVU14UlRzN096czdPMEZCVFVFc1VVRkJUVU1zU1VGQlRpeERRVUZYUXl4bFFVRllMRVZCUVRKQ08wRkJRM1pDTEZWQlFVMURMR0ZCUVdFc1IwRkJSeXhOUVVGUFJDeGxRVUZRTEVsQlFYbENPMEZCUXpORExGVkJRVWM3UVVGRFF5eFpRVUZKUlN4SlFVRkpMRWRCUVVjc1RVRkJUU3hMUVVGTFF5eFBRVUZNTEVOQlFXRklMR1ZCUVdJc1EwRkJha0k3UVVGRFFTeGxRVUZQU1N4TlFVRk5MRU5CUVVORExFMUJRVkFzUTBGQlkwZ3NTVUZCWkN4RlFVRnZRaXhEUVVGd1FpeERRVUZRTzBGQlEwZ3NUMEZJUkN4RFFVbEJMRTlCUVUxSkxFZEJRVTRzUlVGQlZUdEJRVU5PTEdWQlFVOHNTVUZCVUR0QlFVTklPMEZCUTBvc1MwRlNSRHM3UVVGVFFTeFhRVUZQTEUxQlFVMU1MR0ZCUVdFc1EwRkJRMFFzWlVGQlJDeERRVUV4UWp0QlFVTklPMEZCUTBRN096czdPenM3TzBGQlRVRXNVVUZCVFU4c1MwRkJUaXhEUVVGWlVDeGxRVUZhTEVWQlFUWkNVU3hMUVVFM1FpeEZRVUZ0UXp0QlFVTXZRaXhYUVVGUExFMUJRVTBzUzBGQlMwTXNUMEZCVEN4RFFVRmhWQ3hsUVVGaUxFVkJRVGhDVVN4TFFVRTVRaXhEUVVGaU8wRkJRMGc3UVVGRFJEczdPenM3T3pzN1FVRk5RU3hSUVVGTlJTeE5RVUZPTEVOQlFXRkRMRkZCUVdJc1JVRkJjMEk3UVVGRGJFSXNVVUZCU1VNc1RVRkJUU3hIUVVGSExFVkJRV0k3TzBGQlEwRXNVMEZCU1N4SlFVRkpReXhQUVVGU0xFbEJRVzFDUml4UlFVRnVRaXhGUVVFMFFqdEJRVU40UWtNc1dVRkJUU3hEUVVGRFJTeEpRVUZRTEVWQlFWa3NUVUZCVFN4TFFVRkxaaXhKUVVGTUxFTkJRVlZqTEU5QlFWWXNRMEZCYkVJN1FVRkRTRHM3UVVGRFJDeFhRVUZQUkN4TlFVRlFPMEZCUTBnN08wRkJlRU41UlN4RFFVRTVSVHM3UVVFd1EyVnlRaXdyUlVGQlppeEZPenM3T3pzN096czdPenRCUTJoRVFTdzJSRHM3T3pzN096czdPenM3UVVOQlFTdzRSQ0lzSW1acGJHVWlPaUpBWTJGMWMyRnNUbVYwTDIxbGJXTmhZMmhsTG5kbFlpNXFjeUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSWlobWRXNWpkR2x2YmlCM1pXSndZV05yVlc1cGRtVnljMkZzVFc5a2RXeGxSR1ZtYVc1cGRHbHZiaWh5YjI5MExDQm1ZV04wYjNKNUtTQjdYRzVjZEdsbUtIUjVjR1Z2WmlCbGVIQnZjblJ6SUQwOVBTQW5iMkpxWldOMEp5QW1KaUIwZVhCbGIyWWdiVzlrZFd4bElEMDlQU0FuYjJKcVpXTjBKeWxjYmx4MFhIUnRiMlIxYkdVdVpYaHdiM0owY3lBOUlHWmhZM1J2Y25rb2NtVnhkV2x5WlNoY0ltTmhkWE5oYkMxdVpYUXVZMjl5WlZ3aUtTd2djbVZ4ZFdseVpTaGNJbU5oZFhOaGJDMXVaWFF1ZFhScGJITmNJaWtwTzF4dVhIUmxiSE5sSUdsbUtIUjVjR1Z2WmlCa1pXWnBibVVnUFQwOUlDZG1kVzVqZEdsdmJpY2dKaVlnWkdWbWFXNWxMbUZ0WkNsY2JseDBYSFJrWldacGJtVW9XMXdpWTJGMWMyRnNMVzVsZEM1amIzSmxYQ0lzSUZ3aVkyRjFjMkZzTFc1bGRDNTFkR2xzYzF3aVhTd2dabUZqZEc5eWVTazdYRzVjZEdWc2MyVWdhV1lvZEhsd1pXOW1JR1Y0Y0c5eWRITWdQVDA5SUNkdlltcGxZM1FuS1Z4dVhIUmNkR1Y0Y0c5eWRITmJYQ0pBWTJGMWMyRnNUbVYwTDIxbGJXTmhZMmhsWENKZElEMGdabUZqZEc5eWVTaHlaWEYxYVhKbEtGd2lZMkYxYzJGc0xXNWxkQzVqYjNKbFhDSXBMQ0J5WlhGMWFYSmxLRndpWTJGMWMyRnNMVzVsZEM1MWRHbHNjMXdpS1NrN1hHNWNkR1ZzYzJWY2JseDBYSFJ5YjI5MFcxd2lRR05oZFhOaGJFNWxkQzl0WlcxallXTm9aVndpWFNBOUlHWmhZM1J2Y25rb2NtOXZkRnRjSW1OaGRYTmhiQzF1WlhRdVkyOXlaVndpWFN3Z2NtOXZkRnRjSW1OaGRYTmhiQzF1WlhRdWRYUnBiSE5jSWwwcE8xeHVmU2tvZEdocGN5d2dablZ1WTNScGIyNG9YMTlYUlVKUVFVTkxYMFZZVkVWU1RrRk1YMDFQUkZWTVJWOWpZWFZ6WVd4ZmJtVjBYMk52Y21WZlh5d2dYMTlYUlVKUVFVTkxYMFZZVkVWU1RrRk1YMDFQUkZWTVJWOWpZWFZ6WVd4ZmJtVjBYM1YwYVd4elgxOHBJSHRjYm5KbGRIVnliaUFpTENJZ1hIUXZMeUJVYUdVZ2JXOWtkV3hsSUdOaFkyaGxYRzRnWEhSMllYSWdhVzV6ZEdGc2JHVmtUVzlrZFd4bGN5QTlJSHQ5TzF4dVhHNGdYSFF2THlCVWFHVWdjbVZ4ZFdseVpTQm1kVzVqZEdsdmJseHVJRngwWm5WdVkzUnBiMjRnWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHlodGIyUjFiR1ZKWkNrZ2UxeHVYRzRnWEhSY2RDOHZJRU5vWldOcklHbG1JRzF2WkhWc1pTQnBjeUJwYmlCallXTm9aVnh1SUZ4MFhIUnBaaWhwYm5OMFlXeHNaV1JOYjJSMWJHVnpXMjF2WkhWc1pVbGtYU2tnZTF4dUlGeDBYSFJjZEhKbGRIVnliaUJwYm5OMFlXeHNaV1JOYjJSMWJHVnpXMjF2WkhWc1pVbGtYUzVsZUhCdmNuUnpPMXh1SUZ4MFhIUjlYRzRnWEhSY2RDOHZJRU55WldGMFpTQmhJRzVsZHlCdGIyUjFiR1VnS0dGdVpDQndkWFFnYVhRZ2FXNTBieUIwYUdVZ1kyRmphR1VwWEc0Z1hIUmNkSFpoY2lCdGIyUjFiR1VnUFNCcGJuTjBZV3hzWldSTmIyUjFiR1Z6VzIxdlpIVnNaVWxrWFNBOUlIdGNiaUJjZEZ4MFhIUnBPaUJ0YjJSMWJHVkpaQ3hjYmlCY2RGeDBYSFJzT2lCbVlXeHpaU3hjYmlCY2RGeDBYSFJsZUhCdmNuUnpPaUI3ZlZ4dUlGeDBYSFI5TzF4dVhHNGdYSFJjZEM4dklFVjRaV04xZEdVZ2RHaGxJRzF2WkhWc1pTQm1kVzVqZEdsdmJseHVJRngwWEhSdGIyUjFiR1Z6VzIxdlpIVnNaVWxrWFM1allXeHNLRzF2WkhWc1pTNWxlSEJ2Y25SekxDQnRiMlIxYkdVc0lHMXZaSFZzWlM1bGVIQnZjblJ6TENCZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZktUdGNibHh1SUZ4MFhIUXZMeUJHYkdGbklIUm9aU0J0YjJSMWJHVWdZWE1nYkc5aFpHVmtYRzRnWEhSY2RHMXZaSFZzWlM1c0lEMGdkSEoxWlR0Y2JseHVJRngwWEhRdkx5QlNaWFIxY200Z2RHaGxJR1Y0Y0c5eWRITWdiMllnZEdobElHMXZaSFZzWlZ4dUlGeDBYSFJ5WlhSMWNtNGdiVzlrZFd4bExtVjRjRzl5ZEhNN1hHNGdYSFI5WEc1Y2JseHVJRngwTHk4Z1pYaHdiM05sSUhSb1pTQnRiMlIxYkdWeklHOWlhbVZqZENBb1gxOTNaV0p3WVdOclgyMXZaSFZzWlhOZlh5bGNiaUJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dWJTQTlJRzF2WkhWc1pYTTdYRzVjYmlCY2RDOHZJR1Y0Y0c5elpTQjBhR1VnYlc5a2RXeGxJR05oWTJobFhHNGdYSFJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG1NZ1BTQnBibk4wWVd4c1pXUk5iMlIxYkdWek8xeHVYRzRnWEhRdkx5QmtaV1pwYm1VZ1oyVjBkR1Z5SUdaMWJtTjBhVzl1SUdadmNpQm9ZWEp0YjI1NUlHVjRjRzl5ZEhOY2JpQmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1WkNBOUlHWjFibU4wYVc5dUtHVjRjRzl5ZEhNc0lHNWhiV1VzSUdkbGRIUmxjaWtnZTF4dUlGeDBYSFJwWmlnaFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXZLR1Y0Y0c5eWRITXNJRzVoYldVcEtTQjdYRzRnWEhSY2RGeDBUMkpxWldOMExtUmxabWx1WlZCeWIzQmxjblI1S0dWNGNHOXlkSE1zSUc1aGJXVXNJSHNnWlc1MWJXVnlZV0pzWlRvZ2RISjFaU3dnWjJWME9pQm5aWFIwWlhJZ2ZTazdYRzRnWEhSY2RIMWNiaUJjZEgwN1hHNWNiaUJjZEM4dklHUmxabWx1WlNCZlgyVnpUVzlrZFd4bElHOXVJR1Y0Y0c5eWRITmNiaUJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dWNpQTlJR1oxYm1OMGFXOXVLR1Y0Y0c5eWRITXBJSHRjYmlCY2RGeDBhV1lvZEhsd1pXOW1JRk41YldKdmJDQWhQVDBnSjNWdVpHVm1hVzVsWkNjZ0ppWWdVM2x0WW05c0xuUnZVM1J5YVc1blZHRm5LU0I3WEc0Z1hIUmNkRngwVDJKcVpXTjBMbVJsWm1sdVpWQnliM0JsY25SNUtHVjRjRzl5ZEhNc0lGTjViV0p2YkM1MGIxTjBjbWx1WjFSaFp5d2dleUIyWVd4MVpUb2dKMDF2WkhWc1pTY2dmU2s3WEc0Z1hIUmNkSDFjYmlCY2RGeDBUMkpxWldOMExtUmxabWx1WlZCeWIzQmxjblI1S0dWNGNHOXlkSE1zSUNkZlgyVnpUVzlrZFd4bEp5d2dleUIyWVd4MVpUb2dkSEoxWlNCOUtUdGNiaUJjZEgwN1hHNWNiaUJjZEM4dklHTnlaV0YwWlNCaElHWmhhMlVnYm1GdFpYTndZV05sSUc5aWFtVmpkRnh1SUZ4MEx5OGdiVzlrWlNBbUlERTZJSFpoYkhWbElHbHpJR0VnYlc5a2RXeGxJR2xrTENCeVpYRjFhWEpsSUdsMFhHNGdYSFF2THlCdGIyUmxJQ1lnTWpvZ2JXVnlaMlVnWVd4c0lIQnliM0JsY25ScFpYTWdiMllnZG1Gc2RXVWdhVzUwYnlCMGFHVWdibk5jYmlCY2RDOHZJRzF2WkdVZ0ppQTBPaUJ5WlhSMWNtNGdkbUZzZFdVZ2QyaGxiaUJoYkhKbFlXUjVJRzV6SUc5aWFtVmpkRnh1SUZ4MEx5OGdiVzlrWlNBbUlEaDhNVG9nWW1Wb1lYWmxJR3hwYTJVZ2NtVnhkV2x5WlZ4dUlGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTUwSUQwZ1puVnVZM1JwYjI0b2RtRnNkV1VzSUcxdlpHVXBJSHRjYmlCY2RGeDBhV1lvYlc5a1pTQW1JREVwSUhaaGJIVmxJRDBnWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHloMllXeDFaU2s3WEc0Z1hIUmNkR2xtS0cxdlpHVWdKaUE0S1NCeVpYUjFjbTRnZG1Gc2RXVTdYRzRnWEhSY2RHbG1LQ2h0YjJSbElDWWdOQ2tnSmlZZ2RIbHdaVzltSUhaaGJIVmxJRDA5UFNBbmIySnFaV04wSnlBbUppQjJZV3gxWlNBbUppQjJZV3gxWlM1ZlgyVnpUVzlrZFd4bEtTQnlaWFIxY200Z2RtRnNkV1U3WEc0Z1hIUmNkSFpoY2lCdWN5QTlJRTlpYW1WamRDNWpjbVZoZEdVb2JuVnNiQ2s3WEc0Z1hIUmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1Y2lodWN5azdYRzRnWEhSY2RFOWlhbVZqZEM1a1pXWnBibVZRY205d1pYSjBlU2h1Y3l3Z0oyUmxabUYxYkhRbkxDQjdJR1Z1ZFcxbGNtRmliR1U2SUhSeWRXVXNJSFpoYkhWbE9pQjJZV3gxWlNCOUtUdGNiaUJjZEZ4MGFXWW9iVzlrWlNBbUlESWdKaVlnZEhsd1pXOW1JSFpoYkhWbElDRTlJQ2R6ZEhKcGJtY25LU0JtYjNJb2RtRnlJR3RsZVNCcGJpQjJZV3gxWlNrZ1gxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NWtLRzV6TENCclpYa3NJR1oxYm1OMGFXOXVLR3RsZVNrZ2V5QnlaWFIxY200Z2RtRnNkV1ZiYTJWNVhUc2dmUzVpYVc1a0tHNTFiR3dzSUd0bGVTa3BPMXh1SUZ4MFhIUnlaWFIxY200Z2JuTTdYRzRnWEhSOU8xeHVYRzRnWEhRdkx5Qm5aWFJFWldaaGRXeDBSWGh3YjNKMElHWjFibU4wYVc5dUlHWnZjaUJqYjIxd1lYUnBZbWxzYVhSNUlIZHBkR2dnYm05dUxXaGhjbTF2Ym5rZ2JXOWtkV3hsYzF4dUlGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV1SUQwZ1puVnVZM1JwYjI0b2JXOWtkV3hsS1NCN1hHNGdYSFJjZEhaaGNpQm5aWFIwWlhJZ1BTQnRiMlIxYkdVZ0ppWWdiVzlrZFd4bExsOWZaWE5OYjJSMWJHVWdQMXh1SUZ4MFhIUmNkR1oxYm1OMGFXOXVJR2RsZEVSbFptRjFiSFFvS1NCN0lISmxkSFZ5YmlCdGIyUjFiR1ZiSjJSbFptRjFiSFFuWFRzZ2ZTQTZYRzRnWEhSY2RGeDBablZ1WTNScGIyNGdaMlYwVFc5a2RXeGxSWGh3YjNKMGN5Z3BJSHNnY21WMGRYSnVJRzF2WkhWc1pUc2dmVHRjYmlCY2RGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTVrS0dkbGRIUmxjaXdnSjJFbkxDQm5aWFIwWlhJcE8xeHVJRngwWEhSeVpYUjFjbTRnWjJWMGRHVnlPMXh1SUZ4MGZUdGNibHh1SUZ4MEx5OGdUMkpxWldOMExuQnliM1J2ZEhsd1pTNW9ZWE5QZDI1UWNtOXdaWEowZVM1allXeHNYRzRnWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtOGdQU0JtZFc1amRHbHZiaWh2WW1wbFkzUXNJSEJ5YjNCbGNuUjVLU0I3SUhKbGRIVnliaUJQWW1wbFkzUXVjSEp2ZEc5MGVYQmxMbWhoYzA5M2JsQnliM0JsY25SNUxtTmhiR3dvYjJKcVpXTjBMQ0J3Y205d1pYSjBlU2s3SUgwN1hHNWNiaUJjZEM4dklGOWZkMlZpY0dGamExOXdkV0pzYVdOZmNHRjBhRjlmWEc0Z1hIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbkFnUFNCY0lsd2lPMXh1WEc1Y2JpQmNkQzh2SUV4dllXUWdaVzUwY25rZ2JXOWtkV3hsSUdGdVpDQnlaWFIxY200Z1pYaHdiM0owYzF4dUlGeDBjbVYwZFhKdUlGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOG9YMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV6SUQwZ1hDSXVMM055WXk5cGJtUmxlQzVxYzF3aUtUdGNiaUlzSWk4cUlFTnZjSGx5YVdkb2RDQW9ZeWtnTWpBeE55QlNiMlFnVm1Gblp5d2dUVWxVSUV4cFkyVnVjMlVnS2k5Y2JseHVablZ1WTNScGIyNGdRV0p6ZEhKaFkzUkRhR0ZwYm1Wa1FtRjBZMmdnS0dSaUtTQjdYRzRnSUhSb2FYTXVYMlJpSUQwZ1pHSmNiaUFnZEdocGN5NWZiM0JsY21GMGFXOXVjeUE5SUZ0ZFhHNGdJSFJvYVhNdVgzZHlhWFIwWlc0Z1BTQm1ZV3h6WlZ4dWZWeHVYRzVCWW5OMGNtRmpkRU5vWVdsdVpXUkNZWFJqYUM1d2NtOTBiM1I1Y0dVdVgzTmxjbWxoYkdsNlpVdGxlU0E5SUdaMWJtTjBhVzl1SUNoclpYa3BJSHRjYmlBZ2NtVjBkWEp1SUhSb2FYTXVYMlJpTGw5elpYSnBZV3hwZW1WTFpYa29hMlY1S1Z4dWZWeHVYRzVCWW5OMGNtRmpkRU5vWVdsdVpXUkNZWFJqYUM1d2NtOTBiM1I1Y0dVdVgzTmxjbWxoYkdsNlpWWmhiSFZsSUQwZ1puVnVZM1JwYjI0Z0tIWmhiSFZsS1NCN1hHNGdJSEpsZEhWeWJpQjBhR2x6TGw5a1lpNWZjMlZ5YVdGc2FYcGxWbUZzZFdVb2RtRnNkV1VwWEc1OVhHNWNia0ZpYzNSeVlXTjBRMmhoYVc1bFpFSmhkR05vTG5CeWIzUnZkSGx3WlM1ZlkyaGxZMnRYY21sMGRHVnVJRDBnWm5WdVkzUnBiMjRnS0NrZ2UxeHVJQ0JwWmlBb2RHaHBjeTVmZDNKcGRIUmxiaWtnZTF4dUlDQWdJSFJvY205M0lHNWxkeUJGY25KdmNpZ25kM0pwZEdVb0tTQmhiSEpsWVdSNUlHTmhiR3hsWkNCdmJpQjBhR2x6SUdKaGRHTm9KeWxjYmlBZ2ZWeHVmVnh1WEc1QlluTjBjbUZqZEVOb1lXbHVaV1JDWVhSamFDNXdjbTkwYjNSNWNHVXVjSFYwSUQwZ1puVnVZM1JwYjI0Z0tHdGxlU3dnZG1Gc2RXVXBJSHRjYmlBZ2RHaHBjeTVmWTJobFkydFhjbWwwZEdWdUtDbGNibHh1SUNCMllYSWdaWEp5SUQwZ2RHaHBjeTVmWkdJdVgyTm9aV05yUzJWNUtHdGxlU3dnSjJ0bGVTY3BYRzRnSUdsbUlDaGxjbklwSUhzZ2RHaHliM2NnWlhKeUlIMWNibHh1SUNCclpYa2dQU0IwYUdsekxsOXpaWEpwWVd4cGVtVkxaWGtvYTJWNUtWeHVJQ0IyWVd4MVpTQTlJSFJvYVhNdVgzTmxjbWxoYkdsNlpWWmhiSFZsS0haaGJIVmxLVnh1WEc0Z0lIUm9hWE11WDNCMWRDaHJaWGtzSUhaaGJIVmxLVnh1WEc0Z0lISmxkSFZ5YmlCMGFHbHpYRzU5WEc1Y2JrRmljM1J5WVdOMFEyaGhhVzVsWkVKaGRHTm9MbkJ5YjNSdmRIbHdaUzVmY0hWMElEMGdablZ1WTNScGIyNGdLR3RsZVN3Z2RtRnNkV1VwSUh0Y2JpQWdkR2hwY3k1ZmIzQmxjbUYwYVc5dWN5NXdkWE5vS0hzZ2RIbHdaVG9nSjNCMWRDY3NJR3RsZVRvZ2EyVjVMQ0IyWVd4MVpUb2dkbUZzZFdVZ2ZTbGNibjFjYmx4dVFXSnpkSEpoWTNSRGFHRnBibVZrUW1GMFkyZ3VjSEp2ZEc5MGVYQmxMbVJsYkNBOUlHWjFibU4wYVc5dUlDaHJaWGtwSUh0Y2JpQWdkR2hwY3k1ZlkyaGxZMnRYY21sMGRHVnVLQ2xjYmx4dUlDQjJZWElnWlhKeUlEMGdkR2hwY3k1ZlpHSXVYMk5vWldOclMyVjVLR3RsZVN3Z0oydGxlU2NwWEc0Z0lHbG1JQ2hsY25JcElIc2dkR2h5YjNjZ1pYSnlJSDFjYmx4dUlDQnJaWGtnUFNCMGFHbHpMbDl6WlhKcFlXeHBlbVZMWlhrb2EyVjVLVnh1SUNCMGFHbHpMbDlrWld3b2EyVjVLVnh1WEc0Z0lISmxkSFZ5YmlCMGFHbHpYRzU5WEc1Y2JrRmljM1J5WVdOMFEyaGhhVzVsWkVKaGRHTm9MbkJ5YjNSdmRIbHdaUzVmWkdWc0lEMGdablZ1WTNScGIyNGdLR3RsZVNrZ2UxeHVJQ0IwYUdsekxsOXZjR1Z5WVhScGIyNXpMbkIxYzJnb2V5QjBlWEJsT2lBblpHVnNKeXdnYTJWNU9pQnJaWGtnZlNsY2JuMWNibHh1UVdKemRISmhZM1JEYUdGcGJtVmtRbUYwWTJndWNISnZkRzkwZVhCbExtTnNaV0Z5SUQwZ1puVnVZM1JwYjI0Z0tDa2dlMXh1SUNCMGFHbHpMbDlqYUdWamExZHlhWFIwWlc0b0tWeHVJQ0IwYUdsekxsOXZjR1Z5WVhScGIyNXpJRDBnVzExY2JpQWdkR2hwY3k1ZlkyeGxZWElvS1Z4dVhHNGdJSEpsZEhWeWJpQjBhR2x6WEc1OVhHNWNia0ZpYzNSeVlXTjBRMmhoYVc1bFpFSmhkR05vTG5CeWIzUnZkSGx3WlM1ZlkyeGxZWElnUFNCbWRXNWpkR2x2YmlCdWIyOXdJQ2dwSUh0OVhHNWNia0ZpYzNSeVlXTjBRMmhoYVc1bFpFSmhkR05vTG5CeWIzUnZkSGx3WlM1M2NtbDBaU0E5SUdaMWJtTjBhVzl1SUNodmNIUnBiMjV6TENCallXeHNZbUZqYXlrZ2UxeHVJQ0IwYUdsekxsOWphR1ZqYTFkeWFYUjBaVzRvS1Z4dVhHNGdJR2xtSUNoMGVYQmxiMllnYjNCMGFXOXVjeUE5UFQwZ0oyWjFibU4wYVc5dUp5a2dleUJqWVd4c1ltRmpheUE5SUc5d2RHbHZibk1nZlZ4dUlDQnBaaUFvZEhsd1pXOW1JR05oYkd4aVlXTnJJQ0U5UFNBblpuVnVZM1JwYjI0bktTQjdYRzRnSUNBZ2RHaHliM2NnYm1WM0lFVnljbTl5S0NkM2NtbDBaU2dwSUhKbGNYVnBjbVZ6SUdFZ1kyRnNiR0poWTJzZ1lYSm5kVzFsYm5RbktWeHVJQ0I5WEc0Z0lHbG1JQ2gwZVhCbGIyWWdiM0IwYVc5dWN5QWhQVDBnSjI5aWFtVmpkQ2NwSUhzZ2IzQjBhVzl1Y3lBOUlIdDlJSDFjYmx4dUlDQjBhR2x6TGw5M2NtbDBkR1Z1SUQwZ2RISjFaVnh1WEc0Z0lDOHZJRUIwY3kxcFoyNXZjbVZjYmlBZ2FXWWdLSFI1Y0dWdlppQjBhR2x6TGw5M2NtbDBaU0E5UFQwZ0oyWjFibU4wYVc5dUp5a2dleUJ5WlhSMWNtNGdkR2hwY3k1ZmQzSnBkR1VvWTJGc2JHSmhZMnNwSUgxY2JseHVJQ0JwWmlBb2RIbHdaVzltSUhSb2FYTXVYMlJpTGw5aVlYUmphQ0E5UFQwZ0oyWjFibU4wYVc5dUp5a2dlMXh1SUNBZ0lISmxkSFZ5YmlCMGFHbHpMbDlrWWk1ZlltRjBZMmdvZEdocGN5NWZiM0JsY21GMGFXOXVjeXdnYjNCMGFXOXVjeXdnWTJGc2JHSmhZMnNwWEc0Z0lIMWNibHh1SUNCd2NtOWpaWE56TG01bGVIUlVhV05yS0dOaGJHeGlZV05yS1Z4dWZWeHVYRzV0YjJSMWJHVXVaWGh3YjNKMGN5QTlJRUZpYzNSeVlXTjBRMmhoYVc1bFpFSmhkR05vWEc0aUxDSXZLaUJEYjNCNWNtbG5hSFFnS0dNcElESXdNVGNnVW05a0lGWmhaMmNzSUUxSlZDQk1hV05sYm5ObElDb3ZYRzVjYm1aMWJtTjBhVzl1SUVGaWMzUnlZV04wU1hSbGNtRjBiM0lnS0dSaUtTQjdYRzRnSUhSb2FYTXVaR0lnUFNCa1lseHVJQ0IwYUdsekxsOWxibVJsWkNBOUlHWmhiSE5sWEc0Z0lIUm9hWE11WDI1bGVIUnBibWNnUFNCbVlXeHpaVnh1ZlZ4dVhHNUJZbk4wY21GamRFbDBaWEpoZEc5eUxuQnliM1J2ZEhsd1pTNXVaWGgwSUQwZ1puVnVZM1JwYjI0Z0tHTmhiR3hpWVdOcktTQjdYRzRnSUhaaGNpQnpaV3htSUQwZ2RHaHBjMXh1WEc0Z0lHbG1JQ2gwZVhCbGIyWWdZMkZzYkdKaFkyc2dJVDA5SUNkbWRXNWpkR2x2YmljcElIdGNiaUFnSUNCMGFISnZkeUJ1WlhjZ1JYSnliM0lvSjI1bGVIUW9LU0J5WlhGMWFYSmxjeUJoSUdOaGJHeGlZV05ySUdGeVozVnRaVzUwSnlsY2JpQWdmVnh1WEc0Z0lHbG1JQ2h6Wld4bUxsOWxibVJsWkNrZ2UxeHVJQ0FnSUhCeWIyTmxjM011Ym1WNGRGUnBZMnNvWTJGc2JHSmhZMnNzSUc1bGR5QkZjbkp2Y2lnblkyRnVibTkwSUdOaGJHd2dibVY0ZENncElHRm1kR1Z5SUdWdVpDZ3BKeWtwWEc0Z0lDQWdjbVYwZFhKdUlITmxiR1pjYmlBZ2ZWeHVYRzRnSUdsbUlDaHpaV3htTGw5dVpYaDBhVzVuS1NCN1hHNGdJQ0FnY0hKdlkyVnpjeTV1WlhoMFZHbGpheWhqWVd4c1ltRmpheXdnYm1WM0lFVnljbTl5S0NkallXNXViM1FnWTJGc2JDQnVaWGgwS0NrZ1ltVm1iM0psSUhCeVpYWnBiM1Z6SUc1bGVIUW9LU0JvWVhNZ1kyOXRjR3hsZEdWa0p5a3BYRzRnSUNBZ2NtVjBkWEp1SUhObGJHWmNiaUFnZlZ4dVhHNGdJSE5sYkdZdVgyNWxlSFJwYm1jZ1BTQjBjblZsWEc0Z0lITmxiR1l1WDI1bGVIUW9ablZ1WTNScGIyNGdLQ2tnZTF4dUlDQWdJSE5sYkdZdVgyNWxlSFJwYm1jZ1BTQm1ZV3h6WlZ4dUlDQWdJR05oYkd4aVlXTnJMbUZ3Y0d4NUtHNTFiR3dzSUdGeVozVnRaVzUwY3lsY2JpQWdmU2xjYmx4dUlDQnlaWFIxY200Z2MyVnNabHh1ZlZ4dVhHNUJZbk4wY21GamRFbDBaWEpoZEc5eUxuQnliM1J2ZEhsd1pTNWZibVY0ZENBOUlHWjFibU4wYVc5dUlDaGpZV3hzWW1GamF5a2dlMXh1SUNCd2NtOWpaWE56TG01bGVIUlVhV05yS0dOaGJHeGlZV05yS1Z4dWZWeHVYRzVCWW5OMGNtRmpkRWwwWlhKaGRHOXlMbkJ5YjNSdmRIbHdaUzVsYm1RZ1BTQm1kVzVqZEdsdmJpQW9ZMkZzYkdKaFkyc3BJSHRjYmlBZ2FXWWdLSFI1Y0dWdlppQmpZV3hzWW1GamF5QWhQVDBnSjJaMWJtTjBhVzl1SnlrZ2UxeHVJQ0FnSUhSb2NtOTNJRzVsZHlCRmNuSnZjaWduWlc1a0tDa2djbVZ4ZFdseVpYTWdZU0JqWVd4c1ltRmpheUJoY21kMWJXVnVkQ2NwWEc0Z0lIMWNibHh1SUNCcFppQW9kR2hwY3k1ZlpXNWtaV1FwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdjSEp2WTJWemN5NXVaWGgwVkdsamF5aGpZV3hzWW1GamF5d2dibVYzSUVWeWNtOXlLQ2RsYm1Rb0tTQmhiSEpsWVdSNUlHTmhiR3hsWkNCdmJpQnBkR1Z5WVhSdmNpY3BLVnh1SUNCOVhHNWNiaUFnZEdocGN5NWZaVzVrWldRZ1BTQjBjblZsWEc0Z0lIUm9hWE11WDJWdVpDaGpZV3hzWW1GamF5bGNibjFjYmx4dVFXSnpkSEpoWTNSSmRHVnlZWFJ2Y2k1d2NtOTBiM1I1Y0dVdVgyVnVaQ0E5SUdaMWJtTjBhVzl1SUNoallXeHNZbUZqYXlrZ2UxeHVJQ0J3Y205alpYTnpMbTVsZUhSVWFXTnJLR05oYkd4aVlXTnJLVnh1ZlZ4dVhHNXRiMlIxYkdVdVpYaHdiM0owY3lBOUlFRmljM1J5WVdOMFNYUmxjbUYwYjNKY2JpSXNJaThxSUVOdmNIbHlhV2RvZENBb1l5a2dNakF4TnlCU2IyUWdWbUZuWnl3Z1RVbFVJRXhwWTJWdWMyVWdLaTljYmx4dWRtRnlJSGgwWlc1a0lEMGdjbVZ4ZFdseVpTZ25lSFJsYm1RbktWeHVkbUZ5SUVGaWMzUnlZV04wU1hSbGNtRjBiM0lnUFNCeVpYRjFhWEpsS0NjdUwyRmljM1J5WVdOMExXbDBaWEpoZEc5eUp5bGNiblpoY2lCQlluTjBjbUZqZEVOb1lXbHVaV1JDWVhSamFDQTlJSEpsY1hWcGNtVW9KeTR2WVdKemRISmhZM1F0WTJoaGFXNWxaQzFpWVhSamFDY3BYRzUyWVhJZ2FHRnpUM2R1VUhKdmNHVnlkSGtnUFNCUFltcGxZM1F1Y0hKdmRHOTBlWEJsTG1oaGMwOTNibEJ5YjNCbGNuUjVYRzUyWVhJZ2NtRnVaMlZQY0hScGIyNXpJRDBnSjNOMFlYSjBJR1Z1WkNCbmRDQm5kR1VnYkhRZ2JIUmxKeTV6Y0d4cGRDZ25JQ2NwWEc1Y2JtWjFibU4wYVc5dUlFRmljM1J5WVdOMFRHVjJaV3hFVDFkT0lDaHNiMk5oZEdsdmJpa2dlMXh1SUNCcFppQW9JV0Z5WjNWdFpXNTBjeTVzWlc1bmRHZ2dmSHdnYkc5allYUnBiMjRnUFQwOUlIVnVaR1ZtYVc1bFpDa2dlMXh1SUNBZ0lIUm9jbTkzSUc1bGR5QkZjbkp2Y2lnblkyOXVjM1J5ZFdOMGIzSWdjbVZ4ZFdseVpYTWdZWFFnYkdWaGMzUWdZU0JzYjJOaGRHbHZiaUJoY21kMWJXVnVkQ2NwWEc0Z0lIMWNibHh1SUNCcFppQW9kSGx3Wlc5bUlHeHZZMkYwYVc5dUlDRTlQU0FuYzNSeWFXNW5KeWtnZTF4dUlDQWdJSFJvY205M0lHNWxkeUJGY25KdmNpZ25ZMjl1YzNSeWRXTjBiM0lnY21WeGRXbHlaWE1nWVNCc2IyTmhkR2x2YmlCemRISnBibWNnWVhKbmRXMWxiblFuS1Z4dUlDQjlYRzVjYmlBZ2RHaHBjeTVzYjJOaGRHbHZiaUE5SUd4dlkyRjBhVzl1WEc0Z0lIUm9hWE11YzNSaGRIVnpJRDBnSjI1bGR5ZGNibjFjYmx4dVFXSnpkSEpoWTNSTVpYWmxiRVJQVjA0dWNISnZkRzkwZVhCbExtOXdaVzRnUFNCbWRXNWpkR2x2YmlBb2IzQjBhVzl1Y3l3Z1kyRnNiR0poWTJzcElIdGNiaUFnZG1GeUlITmxiR1lnUFNCMGFHbHpYRzRnSUhaaGNpQnZiR1JUZEdGMGRYTWdQU0IwYUdsekxuTjBZWFIxYzF4dVhHNGdJR2xtSUNoMGVYQmxiMllnYjNCMGFXOXVjeUE5UFQwZ0oyWjFibU4wYVc5dUp5a2dleUJqWVd4c1ltRmpheUE5SUc5d2RHbHZibk1nZlZ4dVhHNGdJR2xtSUNoMGVYQmxiMllnWTJGc2JHSmhZMnNnSVQwOUlDZG1kVzVqZEdsdmJpY3BJSHRjYmlBZ0lDQjBhSEp2ZHlCdVpYY2dSWEp5YjNJb0oyOXdaVzRvS1NCeVpYRjFhWEpsY3lCaElHTmhiR3hpWVdOcklHRnlaM1Z0Wlc1MEp5bGNiaUFnZlZ4dVhHNGdJR2xtSUNoMGVYQmxiMllnYjNCMGFXOXVjeUFoUFQwZ0oyOWlhbVZqZENjcElIc2diM0IwYVc5dWN5QTlJSHQ5SUgxY2JseHVJQ0J2Y0hScGIyNXpMbU55WldGMFpVbG1UV2x6YzJsdVp5QTlJRzl3ZEdsdmJuTXVZM0psWVhSbFNXWk5hWE56YVc1bklDRTlQU0JtWVd4elpWeHVJQ0J2Y0hScGIyNXpMbVZ5Y205eVNXWkZlR2x6ZEhNZ1BTQWhJVzl3ZEdsdmJuTXVaWEp5YjNKSlprVjRhWE4wYzF4dVhHNGdJSFJvYVhNdWMzUmhkSFZ6SUQwZ0oyOXdaVzVwYm1jblhHNGdJSFJvYVhNdVgyOXdaVzRvYjNCMGFXOXVjeXdnWm5WdVkzUnBiMjRnS0dWeWNpa2dlMXh1SUNBZ0lHbG1JQ2hsY25JcElIdGNiaUFnSUNBZ0lITmxiR1l1YzNSaGRIVnpJRDBnYjJ4a1UzUmhkSFZ6WEc0Z0lDQWdJQ0J5WlhSMWNtNGdZMkZzYkdKaFkyc29aWEp5S1Z4dUlDQWdJSDFjYmlBZ0lDQnpaV3htTG5OMFlYUjFjeUE5SUNkdmNHVnVKMXh1SUNBZ0lHTmhiR3hpWVdOcktDbGNiaUFnZlNsY2JuMWNibHh1UVdKemRISmhZM1JNWlhabGJFUlBWMDR1Y0hKdmRHOTBlWEJsTGw5dmNHVnVJRDBnWm5WdVkzUnBiMjRnS0c5d2RHbHZibk1zSUdOaGJHeGlZV05yS1NCN1hHNGdJSEJ5YjJObGMzTXVibVY0ZEZScFkyc29ZMkZzYkdKaFkyc3BYRzU5WEc1Y2JrRmljM1J5WVdOMFRHVjJaV3hFVDFkT0xuQnliM1J2ZEhsd1pTNWpiRzl6WlNBOUlHWjFibU4wYVc5dUlDaGpZV3hzWW1GamF5a2dlMXh1SUNCMllYSWdjMlZzWmlBOUlIUm9hWE5jYmlBZ2RtRnlJRzlzWkZOMFlYUjFjeUE5SUhSb2FYTXVjM1JoZEhWelhHNWNiaUFnYVdZZ0tIUjVjR1Z2WmlCallXeHNZbUZqYXlBaFBUMGdKMloxYm1OMGFXOXVKeWtnZTF4dUlDQWdJSFJvY205M0lHNWxkeUJGY25KdmNpZ25ZMnh2YzJVb0tTQnlaWEYxYVhKbGN5QmhJR05oYkd4aVlXTnJJR0Z5WjNWdFpXNTBKeWxjYmlBZ2ZWeHVYRzRnSUhSb2FYTXVjM1JoZEhWeklEMGdKMk5zYjNOcGJtY25YRzRnSUhSb2FYTXVYMk5zYjNObEtHWjFibU4wYVc5dUlDaGxjbklwSUh0Y2JpQWdJQ0JwWmlBb1pYSnlLU0I3WEc0Z0lDQWdJQ0J6Wld4bUxuTjBZWFIxY3lBOUlHOXNaRk4wWVhSMWMxeHVJQ0FnSUNBZ2NtVjBkWEp1SUdOaGJHeGlZV05yS0dWeWNpbGNiaUFnSUNCOVhHNGdJQ0FnYzJWc1ppNXpkR0YwZFhNZ1BTQW5ZMnh2YzJWa0oxeHVJQ0FnSUdOaGJHeGlZV05yS0NsY2JpQWdmU2xjYm4xY2JseHVRV0p6ZEhKaFkzUk1aWFpsYkVSUFYwNHVjSEp2ZEc5MGVYQmxMbDlqYkc5elpTQTlJR1oxYm1OMGFXOXVJQ2hqWVd4c1ltRmpheWtnZTF4dUlDQndjbTlqWlhOekxtNWxlSFJVYVdOcktHTmhiR3hpWVdOcktWeHVmVnh1WEc1QlluTjBjbUZqZEV4bGRtVnNSRTlYVGk1d2NtOTBiM1I1Y0dVdVoyVjBJRDBnWm5WdVkzUnBiMjRnS0d0bGVTd2diM0IwYVc5dWN5d2dZMkZzYkdKaFkyc3BJSHRjYmlBZ2FXWWdLSFI1Y0dWdlppQnZjSFJwYjI1eklEMDlQU0FuWm5WdVkzUnBiMjRuS1NCN0lHTmhiR3hpWVdOcklEMGdiM0IwYVc5dWN5QjlYRzVjYmlBZ2FXWWdLSFI1Y0dWdlppQmpZV3hzWW1GamF5QWhQVDBnSjJaMWJtTjBhVzl1SnlrZ2UxeHVJQ0FnSUhSb2NtOTNJRzVsZHlCRmNuSnZjaWduWjJWMEtDa2djbVZ4ZFdseVpYTWdZU0JqWVd4c1ltRmpheUJoY21kMWJXVnVkQ2NwWEc0Z0lIMWNibHh1SUNCMllYSWdaWEp5SUQwZ2RHaHBjeTVmWTJobFkydExaWGtvYTJWNUxDQW5hMlY1SnlsY2JpQWdhV1lnS0dWeWNpa2djbVYwZFhKdUlIQnliMk5sYzNNdWJtVjRkRlJwWTJzb1kyRnNiR0poWTJzc0lHVnljaWxjYmx4dUlDQnJaWGtnUFNCMGFHbHpMbDl6WlhKcFlXeHBlbVZMWlhrb2EyVjVLVnh1WEc0Z0lHbG1JQ2gwZVhCbGIyWWdiM0IwYVc5dWN5QWhQVDBnSjI5aWFtVmpkQ2NwSUhzZ2IzQjBhVzl1Y3lBOUlIdDlJSDFjYmx4dUlDQnZjSFJwYjI1ekxtRnpRblZtWm1WeUlEMGdiM0IwYVc5dWN5NWhjMEoxWm1abGNpQWhQVDBnWm1Gc2MyVmNibHh1SUNCMGFHbHpMbDluWlhRb2EyVjVMQ0J2Y0hScGIyNXpMQ0JqWVd4c1ltRmpheWxjYm4xY2JseHVRV0p6ZEhKaFkzUk1aWFpsYkVSUFYwNHVjSEp2ZEc5MGVYQmxMbDluWlhRZ1BTQm1kVzVqZEdsdmJpQW9hMlY1TENCdmNIUnBiMjV6TENCallXeHNZbUZqYXlrZ2UxeHVJQ0J3Y205alpYTnpMbTVsZUhSVWFXTnJLR1oxYm1OMGFXOXVJQ2dwSUhzZ1kyRnNiR0poWTJzb2JtVjNJRVZ5Y205eUtDZE9iM1JHYjNWdVpDY3BLU0I5S1Z4dWZWeHVYRzVCWW5OMGNtRmpkRXhsZG1Wc1JFOVhUaTV3Y205MGIzUjVjR1V1Y0hWMElEMGdablZ1WTNScGIyNGdLR3RsZVN3Z2RtRnNkV1VzSUc5d2RHbHZibk1zSUdOaGJHeGlZV05yS1NCN1hHNGdJR2xtSUNoMGVYQmxiMllnYjNCMGFXOXVjeUE5UFQwZ0oyWjFibU4wYVc5dUp5a2dleUJqWVd4c1ltRmpheUE5SUc5d2RHbHZibk1nZlZ4dVhHNGdJR2xtSUNoMGVYQmxiMllnWTJGc2JHSmhZMnNnSVQwOUlDZG1kVzVqZEdsdmJpY3BJSHRjYmlBZ0lDQjBhSEp2ZHlCdVpYY2dSWEp5YjNJb0ozQjFkQ2dwSUhKbGNYVnBjbVZ6SUdFZ1kyRnNiR0poWTJzZ1lYSm5kVzFsYm5RbktWeHVJQ0I5WEc1Y2JpQWdkbUZ5SUdWeWNpQTlJSFJvYVhNdVgyTm9aV05yUzJWNUtHdGxlU3dnSjJ0bGVTY3BYRzRnSUdsbUlDaGxjbklwSUhKbGRIVnliaUJ3Y205alpYTnpMbTVsZUhSVWFXTnJLR05oYkd4aVlXTnJMQ0JsY25JcFhHNWNiaUFnYTJWNUlEMGdkR2hwY3k1ZmMyVnlhV0ZzYVhwbFMyVjVLR3RsZVNsY2JpQWdkbUZzZFdVZ1BTQjBhR2x6TGw5elpYSnBZV3hwZW1WV1lXeDFaU2gyWVd4MVpTbGNibHh1SUNCcFppQW9kSGx3Wlc5bUlHOXdkR2x2Ym5NZ0lUMDlJQ2R2WW1wbFkzUW5LU0I3SUc5d2RHbHZibk1nUFNCN2ZTQjlYRzVjYmlBZ2RHaHBjeTVmY0hWMEtHdGxlU3dnZG1Gc2RXVXNJRzl3ZEdsdmJuTXNJR05oYkd4aVlXTnJLVnh1ZlZ4dVhHNUJZbk4wY21GamRFeGxkbVZzUkU5WFRpNXdjbTkwYjNSNWNHVXVYM0IxZENBOUlHWjFibU4wYVc5dUlDaHJaWGtzSUhaaGJIVmxMQ0J2Y0hScGIyNXpMQ0JqWVd4c1ltRmpheWtnZTF4dUlDQndjbTlqWlhOekxtNWxlSFJVYVdOcktHTmhiR3hpWVdOcktWeHVmVnh1WEc1QlluTjBjbUZqZEV4bGRtVnNSRTlYVGk1d2NtOTBiM1I1Y0dVdVpHVnNJRDBnWm5WdVkzUnBiMjRnS0d0bGVTd2diM0IwYVc5dWN5d2dZMkZzYkdKaFkyc3BJSHRjYmlBZ2FXWWdLSFI1Y0dWdlppQnZjSFJwYjI1eklEMDlQU0FuWm5WdVkzUnBiMjRuS1NCN0lHTmhiR3hpWVdOcklEMGdiM0IwYVc5dWN5QjlYRzVjYmlBZ2FXWWdLSFI1Y0dWdlppQmpZV3hzWW1GamF5QWhQVDBnSjJaMWJtTjBhVzl1SnlrZ2UxeHVJQ0FnSUhSb2NtOTNJRzVsZHlCRmNuSnZjaWduWkdWc0tDa2djbVZ4ZFdseVpYTWdZU0JqWVd4c1ltRmpheUJoY21kMWJXVnVkQ2NwWEc0Z0lIMWNibHh1SUNCMllYSWdaWEp5SUQwZ2RHaHBjeTVmWTJobFkydExaWGtvYTJWNUxDQW5hMlY1SnlsY2JpQWdhV1lnS0dWeWNpa2djbVYwZFhKdUlIQnliMk5sYzNNdWJtVjRkRlJwWTJzb1kyRnNiR0poWTJzc0lHVnljaWxjYmx4dUlDQnJaWGtnUFNCMGFHbHpMbDl6WlhKcFlXeHBlbVZMWlhrb2EyVjVLVnh1WEc0Z0lHbG1JQ2gwZVhCbGIyWWdiM0IwYVc5dWN5QWhQVDBnSjI5aWFtVmpkQ2NwSUhzZ2IzQjBhVzl1Y3lBOUlIdDlJSDFjYmx4dUlDQjBhR2x6TGw5a1pXd29hMlY1TENCdmNIUnBiMjV6TENCallXeHNZbUZqYXlsY2JuMWNibHh1UVdKemRISmhZM1JNWlhabGJFUlBWMDR1Y0hKdmRHOTBlWEJsTGw5a1pXd2dQU0JtZFc1amRHbHZiaUFvYTJWNUxDQnZjSFJwYjI1ekxDQmpZV3hzWW1GamF5a2dlMXh1SUNCd2NtOWpaWE56TG01bGVIUlVhV05yS0dOaGJHeGlZV05yS1Z4dWZWeHVYRzVCWW5OMGNtRmpkRXhsZG1Wc1JFOVhUaTV3Y205MGIzUjVjR1V1WW1GMFkyZ2dQU0JtZFc1amRHbHZiaUFvWVhKeVlYa3NJRzl3ZEdsdmJuTXNJR05oYkd4aVlXTnJLU0I3WEc0Z0lHbG1JQ2doWVhKbmRXMWxiblJ6TG14bGJtZDBhQ2tnZXlCeVpYUjFjbTRnZEdocGN5NWZZMmhoYVc1bFpFSmhkR05vS0NrZ2ZWeHVYRzRnSUdsbUlDaDBlWEJsYjJZZ2IzQjBhVzl1Y3lBOVBUMGdKMloxYm1OMGFXOXVKeWtnZXlCallXeHNZbUZqYXlBOUlHOXdkR2x2Ym5NZ2ZWeHVYRzRnSUdsbUlDaDBlWEJsYjJZZ1lYSnlZWGtnUFQwOUlDZG1kVzVqZEdsdmJpY3BJSHNnWTJGc2JHSmhZMnNnUFNCaGNuSmhlU0I5WEc1Y2JpQWdhV1lnS0hSNWNHVnZaaUJqWVd4c1ltRmpheUFoUFQwZ0oyWjFibU4wYVc5dUp5a2dlMXh1SUNBZ0lIUm9jbTkzSUc1bGR5QkZjbkp2Y2lnblltRjBZMmdvWVhKeVlYa3BJSEpsY1hWcGNtVnpJR0VnWTJGc2JHSmhZMnNnWVhKbmRXMWxiblFuS1Z4dUlDQjlYRzVjYmlBZ2FXWWdLQ0ZCY25KaGVTNXBjMEZ5Y21GNUtHRnljbUY1S1NrZ2UxeHVJQ0FnSUhKbGRIVnliaUJ3Y205alpYTnpMbTVsZUhSVWFXTnJLR05oYkd4aVlXTnJMQ0J1WlhjZ1JYSnliM0lvSjJKaGRHTm9LR0Z5Y21GNUtTQnlaWEYxYVhKbGN5QmhiaUJoY25KaGVTQmhjbWQxYldWdWRDY3BLVnh1SUNCOVhHNWNiaUFnYVdZZ0tDRnZjSFJwYjI1eklIeDhJSFI1Y0dWdlppQnZjSFJwYjI1eklDRTlQU0FuYjJKcVpXTjBKeWtnZXlCdmNIUnBiMjV6SUQwZ2UzMGdmVnh1WEc0Z0lIWmhjaUJ6WlhKcFlXeHBlbVZrSUQwZ2JtVjNJRUZ5Y21GNUtHRnljbUY1TG14bGJtZDBhQ2xjYmx4dUlDQm1iM0lnS0haaGNpQnBJRDBnTURzZ2FTQThJR0Z5Y21GNUxteGxibWQwYURzZ2FTc3JLU0I3WEc0Z0lDQWdhV1lnS0hSNWNHVnZaaUJoY25KaGVWdHBYU0FoUFQwZ0oyOWlhbVZqZENjZ2ZId2dZWEp5WVhsYmFWMGdQVDA5SUc1MWJHd3BJSHRjYmlBZ0lDQWdJSEpsZEhWeWJpQndjbTlqWlhOekxtNWxlSFJVYVdOcktHTmhiR3hpWVdOckxDQnVaWGNnUlhKeWIzSW9KMkpoZEdOb0tHRnljbUY1S1NCbGJHVnRaVzUwSUcxMWMzUWdZbVVnWVc0Z2IySnFaV04wSUdGdVpDQnViM1FnWUc1MWJHeGdKeWtwWEc0Z0lDQWdmVnh1WEc0Z0lDQWdkbUZ5SUdVZ1BTQjRkR1Z1WkNoaGNuSmhlVnRwWFNsY2JseHVJQ0FnSUdsbUlDaGxMblI1Y0dVZ0lUMDlJQ2R3ZFhRbklDWW1JR1V1ZEhsd1pTQWhQVDBnSjJSbGJDY3BJSHRjYmlBZ0lDQWdJSEpsZEhWeWJpQndjbTlqWlhOekxtNWxlSFJVYVdOcktHTmhiR3hpWVdOckxDQnVaWGNnUlhKeWIzSW9YQ0pnZEhsd1pXQWdiWFZ6ZENCaVpTQW5jSFYwSnlCdmNpQW5aR1ZzSjF3aUtTbGNiaUFnSUNCOVhHNWNiaUFnSUNCMllYSWdaWEp5SUQwZ2RHaHBjeTVmWTJobFkydExaWGtvWlM1clpYa3NJQ2RyWlhrbktWeHVJQ0FnSUdsbUlDaGxjbklwSUhKbGRIVnliaUJ3Y205alpYTnpMbTVsZUhSVWFXTnJLR05oYkd4aVlXTnJMQ0JsY25JcFhHNWNiaUFnSUNCbExtdGxlU0E5SUhSb2FYTXVYM05sY21saGJHbDZaVXRsZVNobExtdGxlU2xjYmx4dUlDQWdJR2xtSUNobExuUjVjR1VnUFQwOUlDZHdkWFFuS1NCN0lHVXVkbUZzZFdVZ1BTQjBhR2x6TGw5elpYSnBZV3hwZW1WV1lXeDFaU2hsTG5aaGJIVmxLU0I5WEc1Y2JpQWdJQ0J6WlhKcFlXeHBlbVZrVzJsZElEMGdaVnh1SUNCOVhHNWNiaUFnZEdocGN5NWZZbUYwWTJnb2MyVnlhV0ZzYVhwbFpDd2diM0IwYVc5dWN5d2dZMkZzYkdKaFkyc3BYRzU5WEc1Y2JrRmljM1J5WVdOMFRHVjJaV3hFVDFkT0xuQnliM1J2ZEhsd1pTNWZZbUYwWTJnZ1BTQm1kVzVqZEdsdmJpQW9ZWEp5WVhrc0lHOXdkR2x2Ym5Nc0lHTmhiR3hpWVdOcktTQjdYRzRnSUhCeWIyTmxjM011Ym1WNGRGUnBZMnNvWTJGc2JHSmhZMnNwWEc1OVhHNWNia0ZpYzNSeVlXTjBUR1YyWld4RVQxZE9MbkJ5YjNSdmRIbHdaUzVmYzJWMGRYQkpkR1Z5WVhSdmNrOXdkR2x2Ym5NZ1BTQm1kVzVqZEdsdmJpQW9iM0IwYVc5dWN5a2dlMXh1SUNCdmNIUnBiMjV6SUQwZ1kyeGxZVzVTWVc1blpVOXdkR2x2Ym5Nb2IzQjBhVzl1Y3lsY2JseHVJQ0J2Y0hScGIyNXpMbkpsZG1WeWMyVWdQU0FoSVc5d2RHbHZibk11Y21WMlpYSnpaVnh1SUNCdmNIUnBiMjV6TG10bGVYTWdQU0J2Y0hScGIyNXpMbXRsZVhNZ0lUMDlJR1poYkhObFhHNGdJRzl3ZEdsdmJuTXVkbUZzZFdWeklEMGdiM0IwYVc5dWN5NTJZV3gxWlhNZ0lUMDlJR1poYkhObFhHNGdJRzl3ZEdsdmJuTXViR2x0YVhRZ1BTQW5iR2x0YVhRbklHbHVJRzl3ZEdsdmJuTWdQeUJ2Y0hScGIyNXpMbXhwYldsMElEb2dMVEZjYmlBZ2IzQjBhVzl1Y3k1clpYbEJjMEoxWm1abGNpQTlJRzl3ZEdsdmJuTXVhMlY1UVhOQ2RXWm1aWElnSVQwOUlHWmhiSE5sWEc0Z0lHOXdkR2x2Ym5NdWRtRnNkV1ZCYzBKMVptWmxjaUE5SUc5d2RHbHZibk11ZG1Gc2RXVkJjMEoxWm1abGNpQWhQVDBnWm1Gc2MyVmNibHh1SUNCeVpYUjFjbTRnYjNCMGFXOXVjMXh1ZlZ4dVhHNW1kVzVqZEdsdmJpQmpiR1ZoYmxKaGJtZGxUM0IwYVc5dWN5QW9iM0IwYVc5dWN5a2dlMXh1SUNCMllYSWdjbVZ6ZFd4MElEMGdlMzFjYmx4dUlDQm1iM0lnS0haaGNpQnJJR2x1SUc5d2RHbHZibk1wSUh0Y2JpQWdJQ0JwWmlBb0lXaGhjMDkzYmxCeWIzQmxjblI1TG1OaGJHd29iM0IwYVc5dWN5d2dheWtwSUdOdmJuUnBiblZsWEc0Z0lDQWdhV1lnS0dselVtRnVaMlZQY0hScGIyNG9heWtnSmlZZ2FYTkZiWEIwZVZKaGJtZGxUM0IwYVc5dUtHOXdkR2x2Ym5OYmExMHBLU0JqYjI1MGFXNTFaVnh1WEc0Z0lDQWdjbVZ6ZFd4MFcydGRJRDBnYjNCMGFXOXVjMXRyWFZ4dUlDQjlYRzVjYmlBZ2NtVjBkWEp1SUhKbGMzVnNkRnh1ZlZ4dVhHNW1kVzVqZEdsdmJpQnBjMUpoYm1kbFQzQjBhVzl1SUNocktTQjdYRzRnSUhKbGRIVnliaUJ5WVc1blpVOXdkR2x2Ym5NdWFXNWtaWGhQWmlocktTQWhQVDBnTFRGY2JuMWNibHh1Wm5WdVkzUnBiMjRnYVhORmJYQjBlVkpoYm1kbFQzQjBhVzl1SUNoMktTQjdYRzRnSUhKbGRIVnliaUIySUQwOVBTQW5KeUI4ZkNCMklEMDlJRzUxYkd3Z2ZId2dhWE5GYlhCMGVVSjFabVpsY2loMktWeHVmVnh1WEc1bWRXNWpkR2x2YmlCcGMwVnRjSFI1UW5WbVptVnlJQ2gyS1NCN1hHNGdJSEpsZEhWeWJpQkNkV1ptWlhJdWFYTkNkV1ptWlhJb2Rpa2dKaVlnZGk1c1pXNW5kR2dnUFQwOUlEQmNibjFjYmx4dVFXSnpkSEpoWTNSTVpYWmxiRVJQVjA0dWNISnZkRzkwZVhCbExtbDBaWEpoZEc5eUlEMGdablZ1WTNScGIyNGdLRzl3ZEdsdmJuTXBJSHRjYmlBZ2FXWWdLSFI1Y0dWdlppQnZjSFJwYjI1eklDRTlQU0FuYjJKcVpXTjBKeWtnZXlCdmNIUnBiMjV6SUQwZ2UzMGdmVnh1SUNCdmNIUnBiMjV6SUQwZ2RHaHBjeTVmYzJWMGRYQkpkR1Z5WVhSdmNrOXdkR2x2Ym5Nb2IzQjBhVzl1Y3lsY2JpQWdjbVYwZFhKdUlIUm9hWE11WDJsMFpYSmhkRzl5S0c5d2RHbHZibk1wWEc1OVhHNWNia0ZpYzNSeVlXTjBUR1YyWld4RVQxZE9MbkJ5YjNSdmRIbHdaUzVmYVhSbGNtRjBiM0lnUFNCbWRXNWpkR2x2YmlBb2IzQjBhVzl1Y3lrZ2UxeHVJQ0J5WlhSMWNtNGdibVYzSUVGaWMzUnlZV04wU1hSbGNtRjBiM0lvZEdocGN5bGNibjFjYmx4dVFXSnpkSEpoWTNSTVpYWmxiRVJQVjA0dWNISnZkRzkwZVhCbExsOWphR0ZwYm1Wa1FtRjBZMmdnUFNCbWRXNWpkR2x2YmlBb0tTQjdYRzRnSUhKbGRIVnliaUJ1WlhjZ1FXSnpkSEpoWTNSRGFHRnBibVZrUW1GMFkyZ29kR2hwY3lsY2JuMWNibHh1UVdKemRISmhZM1JNWlhabGJFUlBWMDR1Y0hKdmRHOTBlWEJsTGw5elpYSnBZV3hwZW1WTFpYa2dQU0JtZFc1amRHbHZiaUFvYTJWNUtTQjdYRzRnSUhKbGRIVnliaUJDZFdabVpYSXVhWE5DZFdabVpYSW9hMlY1S1NBL0lHdGxlU0E2SUZOMGNtbHVaeWhyWlhrcFhHNTlYRzVjYmtGaWMzUnlZV04wVEdWMlpXeEVUMWRPTG5CeWIzUnZkSGx3WlM1ZmMyVnlhV0ZzYVhwbFZtRnNkV1VnUFNCbWRXNWpkR2x2YmlBb2RtRnNkV1VwSUh0Y2JpQWdhV1lnS0haaGJIVmxJRDA5SUc1MWJHd3BJSEpsZEhWeWJpQW5KMXh1SUNCeVpYUjFjbTRnUW5WbVptVnlMbWx6UW5WbVptVnlLSFpoYkhWbEtTQjhmQ0J3Y205alpYTnpMbUp5YjNkelpYSWdQeUIyWVd4MVpTQTZJRk4wY21sdVp5aDJZV3gxWlNsY2JuMWNibHh1UVdKemRISmhZM1JNWlhabGJFUlBWMDR1Y0hKdmRHOTBlWEJsTGw5amFHVmphMHRsZVNBOUlHWjFibU4wYVc5dUlDaHZZbW9zSUhSNWNHVXBJSHRjYmlBZ2FXWWdLRzlpYWlBOVBUMGdiblZzYkNCOGZDQnZZbW9nUFQwOUlIVnVaR1ZtYVc1bFpDa2dlMXh1SUNBZ0lISmxkSFZ5YmlCdVpYY2dSWEp5YjNJb2RIbHdaU0FySUNjZ1kyRnVibTkwSUdKbElHQnVkV3hzWUNCdmNpQmdkVzVrWldacGJtVmtZQ2NwWEc0Z0lIMWNibHh1SUNCcFppQW9RblZtWm1WeUxtbHpRblZtWm1WeUtHOWlhaWtnSmlZZ2IySnFMbXhsYm1kMGFDQTlQVDBnTUNrZ2UxeHVJQ0FnSUhKbGRIVnliaUJ1WlhjZ1JYSnliM0lvZEhsd1pTQXJJQ2NnWTJGdWJtOTBJR0psSUdGdUlHVnRjSFI1SUVKMVptWmxjaWNwWEc0Z0lIMWNibHh1SUNCcFppQW9VM1J5YVc1bktHOWlhaWtnUFQwOUlDY25LU0I3WEc0Z0lDQWdjbVYwZFhKdUlHNWxkeUJGY25KdmNpaDBlWEJsSUNzZ0p5QmpZVzV1YjNRZ1ltVWdZVzRnWlcxd2RIa2dVM1J5YVc1bkp5bGNiaUFnZlZ4dWZWeHVYRzV0YjJSMWJHVXVaWGh3YjNKMGN5QTlJRUZpYzNSeVlXTjBUR1YyWld4RVQxZE9YRzRpTENKbGVIQnZjblJ6TGtGaWMzUnlZV04wVEdWMlpXeEVUMWRPSUQwZ2NtVnhkV2x5WlNnbkxpOWhZbk4wY21GamRDMXNaWFpsYkdSdmQyNG5LVnh1Wlhod2IzSjBjeTVCWW5OMGNtRmpkRWwwWlhKaGRHOXlJRDBnY21WeGRXbHlaU2duTGk5aFluTjBjbUZqZEMxcGRHVnlZWFJ2Y2ljcFhHNWxlSEJ2Y25SekxrRmljM1J5WVdOMFEyaGhhVzVsWkVKaGRHTm9JRDBnY21WeGRXbHlaU2duTGk5aFluTjBjbUZqZEMxamFHRnBibVZrTFdKaGRHTm9KeWxjYmlJc0lpZDFjMlVnYzNSeWFXTjBKMXh1WEc1bGVIQnZjblJ6TG1KNWRHVk1aVzVuZEdnZ1BTQmllWFJsVEdWdVozUm9YRzVsZUhCdmNuUnpMblJ2UW5sMFpVRnljbUY1SUQwZ2RHOUNlWFJsUVhKeVlYbGNibVY0Y0c5eWRITXVabkp2YlVKNWRHVkJjbkpoZVNBOUlHWnliMjFDZVhSbFFYSnlZWGxjYmx4dWRtRnlJR3h2YjJ0MWNDQTlJRnRkWEc1MllYSWdjbVYyVEc5dmEzVndJRDBnVzExY2JuWmhjaUJCY25JZ1BTQjBlWEJsYjJZZ1ZXbHVkRGhCY25KaGVTQWhQVDBnSjNWdVpHVm1hVzVsWkNjZ1B5QlZhVzUwT0VGeWNtRjVJRG9nUVhKeVlYbGNibHh1ZG1GeUlHTnZaR1VnUFNBblFVSkRSRVZHUjBoSlNrdE1UVTVQVUZGU1UxUlZWbGRZV1ZwaFltTmtaV1puYUdscWEyeHRibTl3Y1hKemRIVjJkM2g1ZWpBeE1qTTBOVFkzT0Rrckx5ZGNibVp2Y2lBb2RtRnlJR2tnUFNBd0xDQnNaVzRnUFNCamIyUmxMbXhsYm1kMGFEc2dhU0E4SUd4bGJqc2dLeXRwS1NCN1hHNGdJR3h2YjJ0MWNGdHBYU0E5SUdOdlpHVmJhVjFjYmlBZ2NtVjJURzl2YTNWd1cyTnZaR1V1WTJoaGNrTnZaR1ZCZENocEtWMGdQU0JwWEc1OVhHNWNiaTh2SUZOMWNIQnZjblFnWkdWamIyUnBibWNnVlZKTUxYTmhabVVnWW1GelpUWTBJSE4wY21sdVozTXNJR0Z6SUU1dlpHVXVhbk1nWkc5bGN5NWNiaTh2SUZObFpUb2dhSFIwY0hNNkx5OWxiaTUzYVd0cGNHVmthV0V1YjNKbkwzZHBhMmt2UW1GelpUWTBJMVZTVEY5aGNIQnNhV05oZEdsdmJuTmNibkpsZGt4dmIydDFjRnNuTFNjdVkyaGhja052WkdWQmRDZ3dLVjBnUFNBMk1seHVjbVYyVEc5dmEzVndXeWRmSnk1amFHRnlRMjlrWlVGMEtEQXBYU0E5SURZelhHNWNibVoxYm1OMGFXOXVJR2RsZEV4bGJuTWdLR0kyTkNrZ2UxeHVJQ0IyWVhJZ2JHVnVJRDBnWWpZMExteGxibWQwYUZ4dVhHNGdJR2xtSUNoc1pXNGdKU0EwSUQ0Z01Da2dlMXh1SUNBZ0lIUm9jbTkzSUc1bGR5QkZjbkp2Y2lnblNXNTJZV3hwWkNCemRISnBibWN1SUV4bGJtZDBhQ0J0ZFhOMElHSmxJR0VnYlhWc2RHbHdiR1VnYjJZZ05DY3BYRzRnSUgxY2JseHVJQ0F2THlCVWNtbHRJRzltWmlCbGVIUnlZU0JpZVhSbGN5QmhablJsY2lCd2JHRmpaV2h2YkdSbGNpQmllWFJsY3lCaGNtVWdabTkxYm1SY2JpQWdMeThnVTJWbE9pQm9kSFJ3Y3pvdkwyZHBkR2gxWWk1amIyMHZZbVZoZEdkaGJXMXBkQzlpWVhObE5qUXRhbk12YVhOemRXVnpMelF5WEc0Z0lIWmhjaUIyWVd4cFpFeGxiaUE5SUdJMk5DNXBibVJsZUU5bUtDYzlKeWxjYmlBZ2FXWWdLSFpoYkdsa1RHVnVJRDA5UFNBdE1Ta2dkbUZzYVdSTVpXNGdQU0JzWlc1Y2JseHVJQ0IyWVhJZ2NHeGhZMlZJYjJ4a1pYSnpUR1Z1SUQwZ2RtRnNhV1JNWlc0Z1BUMDlJR3hsYmx4dUlDQWdJRDhnTUZ4dUlDQWdJRG9nTkNBdElDaDJZV3hwWkV4bGJpQWxJRFFwWEc1Y2JpQWdjbVYwZFhKdUlGdDJZV3hwWkV4bGJpd2djR3hoWTJWSWIyeGtaWEp6VEdWdVhWeHVmVnh1WEc0dkx5QmlZWE5sTmpRZ2FYTWdOQzh6SUNzZ2RYQWdkRzhnZEhkdklHTm9ZWEpoWTNSbGNuTWdiMllnZEdobElHOXlhV2RwYm1Gc0lHUmhkR0ZjYm1aMWJtTjBhVzl1SUdKNWRHVk1aVzVuZEdnZ0tHSTJOQ2tnZTF4dUlDQjJZWElnYkdWdWN5QTlJR2RsZEV4bGJuTW9ZalkwS1Z4dUlDQjJZWElnZG1Gc2FXUk1aVzRnUFNCc1pXNXpXekJkWEc0Z0lIWmhjaUJ3YkdGalpVaHZiR1JsY25OTVpXNGdQU0JzWlc1eld6RmRYRzRnSUhKbGRIVnliaUFvS0haaGJHbGtUR1Z1SUNzZ2NHeGhZMlZJYjJ4a1pYSnpUR1Z1S1NBcUlETWdMeUEwS1NBdElIQnNZV05sU0c5c1pHVnljMHhsYmx4dWZWeHVYRzVtZFc1amRHbHZiaUJmWW5sMFpVeGxibWQwYUNBb1lqWTBMQ0IyWVd4cFpFeGxiaXdnY0d4aFkyVkliMnhrWlhKelRHVnVLU0I3WEc0Z0lISmxkSFZ5YmlBb0tIWmhiR2xrVEdWdUlDc2djR3hoWTJWSWIyeGtaWEp6VEdWdUtTQXFJRE1nTHlBMEtTQXRJSEJzWVdObFNHOXNaR1Z5YzB4bGJseHVmVnh1WEc1bWRXNWpkR2x2YmlCMGIwSjVkR1ZCY25KaGVTQW9ZalkwS1NCN1hHNGdJSFpoY2lCMGJYQmNiaUFnZG1GeUlHeGxibk1nUFNCblpYUk1aVzV6S0dJMk5DbGNiaUFnZG1GeUlIWmhiR2xrVEdWdUlEMGdiR1Z1YzFzd1hWeHVJQ0IyWVhJZ2NHeGhZMlZJYjJ4a1pYSnpUR1Z1SUQwZ2JHVnVjMXN4WFZ4dVhHNGdJSFpoY2lCaGNuSWdQU0J1WlhjZ1FYSnlLRjlpZVhSbFRHVnVaM1JvS0dJMk5Dd2dkbUZzYVdSTVpXNHNJSEJzWVdObFNHOXNaR1Z5YzB4bGJpa3BYRzVjYmlBZ2RtRnlJR04xY2tKNWRHVWdQU0F3WEc1Y2JpQWdMeThnYVdZZ2RHaGxjbVVnWVhKbElIQnNZV05sYUc5c1pHVnljeXdnYjI1c2VTQm5aWFFnZFhBZ2RHOGdkR2hsSUd4aGMzUWdZMjl0Y0d4bGRHVWdOQ0JqYUdGeWMxeHVJQ0IyWVhJZ2JHVnVJRDBnY0d4aFkyVkliMnhrWlhKelRHVnVJRDRnTUZ4dUlDQWdJRDhnZG1Gc2FXUk1aVzRnTFNBMFhHNGdJQ0FnT2lCMllXeHBaRXhsYmx4dVhHNGdJR1p2Y2lBb2RtRnlJR2tnUFNBd095QnBJRHdnYkdWdU95QnBJQ3M5SURRcElIdGNiaUFnSUNCMGJYQWdQVnh1SUNBZ0lDQWdLSEpsZGt4dmIydDFjRnRpTmpRdVkyaGhja052WkdWQmRDaHBLVjBnUER3Z01UZ3BJSHhjYmlBZ0lDQWdJQ2h5WlhaTWIyOXJkWEJiWWpZMExtTm9ZWEpEYjJSbFFYUW9hU0FySURFcFhTQThQQ0F4TWlrZ2ZGeHVJQ0FnSUNBZ0tISmxka3h2YjJ0MWNGdGlOalF1WTJoaGNrTnZaR1ZCZENocElDc2dNaWxkSUR3OElEWXBJSHhjYmlBZ0lDQWdJSEpsZGt4dmIydDFjRnRpTmpRdVkyaGhja052WkdWQmRDaHBJQ3NnTXlsZFhHNGdJQ0FnWVhKeVcyTjFja0o1ZEdVcksxMGdQU0FvZEcxd0lENCtJREUyS1NBbUlEQjRSa1pjYmlBZ0lDQmhjbkpiWTNWeVFubDBaU3NyWFNBOUlDaDBiWEFnUGo0Z09Da2dKaUF3ZUVaR1hHNGdJQ0FnWVhKeVcyTjFja0o1ZEdVcksxMGdQU0IwYlhBZ0ppQXdlRVpHWEc0Z0lIMWNibHh1SUNCcFppQW9jR3hoWTJWSWIyeGtaWEp6VEdWdUlEMDlQU0F5S1NCN1hHNGdJQ0FnZEcxd0lEMWNiaUFnSUNBZ0lDaHlaWFpNYjI5cmRYQmJZalkwTG1Ob1lYSkRiMlJsUVhRb2FTbGRJRHc4SURJcElIeGNiaUFnSUNBZ0lDaHlaWFpNYjI5cmRYQmJZalkwTG1Ob1lYSkRiMlJsUVhRb2FTQXJJREVwWFNBK1BpQTBLVnh1SUNBZ0lHRnljbHRqZFhKQ2VYUmxLeXRkSUQwZ2RHMXdJQ1lnTUhoR1JseHVJQ0I5WEc1Y2JpQWdhV1lnS0hCc1lXTmxTRzlzWkdWeWMweGxiaUE5UFQwZ01Ta2dlMXh1SUNBZ0lIUnRjQ0E5WEc0Z0lDQWdJQ0FvY21WMlRHOXZhM1Z3VzJJMk5DNWphR0Z5UTI5a1pVRjBLR2twWFNBOFBDQXhNQ2tnZkZ4dUlDQWdJQ0FnS0hKbGRreHZiMnQxY0Z0aU5qUXVZMmhoY2tOdlpHVkJkQ2hwSUNzZ01TbGRJRHc4SURRcElIeGNiaUFnSUNBZ0lDaHlaWFpNYjI5cmRYQmJZalkwTG1Ob1lYSkRiMlJsUVhRb2FTQXJJRElwWFNBK1BpQXlLVnh1SUNBZ0lHRnljbHRqZFhKQ2VYUmxLeXRkSUQwZ0tIUnRjQ0ErUGlBNEtTQW1JREI0UmtaY2JpQWdJQ0JoY25KYlkzVnlRbmwwWlNzclhTQTlJSFJ0Y0NBbUlEQjRSa1pjYmlBZ2ZWeHVYRzRnSUhKbGRIVnliaUJoY25KY2JuMWNibHh1Wm5WdVkzUnBiMjRnZEhKcGNHeGxkRlJ2UW1GelpUWTBJQ2h1ZFcwcElIdGNiaUFnY21WMGRYSnVJR3h2YjJ0MWNGdHVkVzBnUGo0Z01UZ2dKaUF3ZUROR1hTQXJYRzRnSUNBZ2JHOXZhM1Z3VzI1MWJTQStQaUF4TWlBbUlEQjRNMFpkSUN0Y2JpQWdJQ0JzYjI5cmRYQmJiblZ0SUQ0K0lEWWdKaUF3ZUROR1hTQXJYRzRnSUNBZ2JHOXZhM1Z3VzI1MWJTQW1JREI0TTBaZFhHNTlYRzVjYm1aMWJtTjBhVzl1SUdWdVkyOWtaVU5vZFc1cklDaDFhVzUwT0N3Z2MzUmhjblFzSUdWdVpDa2dlMXh1SUNCMllYSWdkRzF3WEc0Z0lIWmhjaUJ2ZFhSd2RYUWdQU0JiWFZ4dUlDQm1iM0lnS0haaGNpQnBJRDBnYzNSaGNuUTdJR2tnUENCbGJtUTdJR2tnS3owZ015a2dlMXh1SUNBZ0lIUnRjQ0E5WEc0Z0lDQWdJQ0FvS0hWcGJuUTRXMmxkSUR3OElERTJLU0FtSURCNFJrWXdNREF3S1NBclhHNGdJQ0FnSUNBb0tIVnBiblE0VzJrZ0t5QXhYU0E4UENBNEtTQW1JREI0UmtZd01Da2dLMXh1SUNBZ0lDQWdLSFZwYm5RNFcya2dLeUF5WFNBbUlEQjRSa1lwWEc0Z0lDQWdiM1YwY0hWMExuQjFjMmdvZEhKcGNHeGxkRlJ2UW1GelpUWTBLSFJ0Y0NrcFhHNGdJSDFjYmlBZ2NtVjBkWEp1SUc5MWRIQjFkQzVxYjJsdUtDY25LVnh1ZlZ4dVhHNW1kVzVqZEdsdmJpQm1jbTl0UW5sMFpVRnljbUY1SUNoMWFXNTBPQ2tnZTF4dUlDQjJZWElnZEcxd1hHNGdJSFpoY2lCc1pXNGdQU0IxYVc1ME9DNXNaVzVuZEdoY2JpQWdkbUZ5SUdWNGRISmhRbmwwWlhNZ1BTQnNaVzRnSlNBeklDOHZJR2xtSUhkbElHaGhkbVVnTVNCaWVYUmxJR3hsWm5Rc0lIQmhaQ0F5SUdKNWRHVnpYRzRnSUhaaGNpQndZWEowY3lBOUlGdGRYRzRnSUhaaGNpQnRZWGhEYUhWdWEweGxibWQwYUNBOUlERTJNemd6SUM4dklHMTFjM1FnWW1VZ2JYVnNkR2x3YkdVZ2IyWWdNMXh1WEc0Z0lDOHZJR2R2SUhSb2NtOTFaMmdnZEdobElHRnljbUY1SUdWMlpYSjVJSFJvY21WbElHSjVkR1Z6TENCM1pTZHNiQ0JrWldGc0lIZHBkR2dnZEhKaGFXeHBibWNnYzNSMVptWWdiR0YwWlhKY2JpQWdabTl5SUNoMllYSWdhU0E5SURBc0lHeGxiaklnUFNCc1pXNGdMU0JsZUhSeVlVSjVkR1Z6T3lCcElEd2diR1Z1TWpzZ2FTQXJQU0J0WVhoRGFIVnVhMHhsYm1kMGFDa2dlMXh1SUNBZ0lIQmhjblJ6TG5CMWMyZ29aVzVqYjJSbFEyaDFibXNvWEc0Z0lDQWdJQ0IxYVc1ME9Dd2dhU3dnS0drZ0t5QnRZWGhEYUhWdWEweGxibWQwYUNrZ1BpQnNaVzR5SUQ4Z2JHVnVNaUE2SUNocElDc2diV0Y0UTJoMWJtdE1aVzVuZEdncFhHNGdJQ0FnS1NsY2JpQWdmVnh1WEc0Z0lDOHZJSEJoWkNCMGFHVWdaVzVrSUhkcGRHZ2dlbVZ5YjNNc0lHSjFkQ0J0WVd0bElITjFjbVVnZEc4Z2JtOTBJR1p2Y21kbGRDQjBhR1VnWlhoMGNtRWdZbmwwWlhOY2JpQWdhV1lnS0dWNGRISmhRbmwwWlhNZ1BUMDlJREVwSUh0Y2JpQWdJQ0IwYlhBZ1BTQjFhVzUwT0Z0c1pXNGdMU0F4WFZ4dUlDQWdJSEJoY25SekxuQjFjMmdvWEc0Z0lDQWdJQ0JzYjI5cmRYQmJkRzF3SUQ0K0lESmRJQ3RjYmlBZ0lDQWdJR3h2YjJ0MWNGc29kRzF3SUR3OElEUXBJQ1lnTUhnelJsMGdLMXh1SUNBZ0lDQWdKejA5SjF4dUlDQWdJQ2xjYmlBZ2ZTQmxiSE5sSUdsbUlDaGxlSFJ5WVVKNWRHVnpJRDA5UFNBeUtTQjdYRzRnSUNBZ2RHMXdJRDBnS0hWcGJuUTRXMnhsYmlBdElESmRJRHc4SURncElDc2dkV2x1ZERoYmJHVnVJQzBnTVYxY2JpQWdJQ0J3WVhKMGN5NXdkWE5vS0Z4dUlDQWdJQ0FnYkc5dmEzVndXM1J0Y0NBK1BpQXhNRjBnSzF4dUlDQWdJQ0FnYkc5dmEzVndXeWgwYlhBZ1BqNGdOQ2tnSmlBd2VETkdYU0FyWEc0Z0lDQWdJQ0JzYjI5cmRYQmJLSFJ0Y0NBOFBDQXlLU0FtSURCNE0wWmRJQ3RjYmlBZ0lDQWdJQ2M5SjF4dUlDQWdJQ2xjYmlBZ2ZWeHVYRzRnSUhKbGRIVnliaUJ3WVhKMGN5NXFiMmx1S0NjbktWeHVmVnh1SWl3aUx5b2hYRzRnS2lCVWFHVWdZblZtWm1WeUlHMXZaSFZzWlNCbWNtOXRJRzV2WkdVdWFuTXNJR1p2Y2lCMGFHVWdZbkp2ZDNObGNpNWNiaUFxWEc0Z0tpQkFZWFYwYUc5eUlDQWdSbVZ5YjNOeklFRmliM1ZyYUdGa2FXcGxhQ0E4Wm1WeWIzTnpRR1psY205emN5NXZjbWMrSUR4b2RIUndPaTh2Wm1WeWIzTnpMbTl5Wno1Y2JpQXFJRUJzYVdObGJuTmxJQ0JOU1ZSY2JpQXFMMXh1THlvZ1pYTnNhVzUwTFdScGMyRmliR1VnYm04dGNISnZkRzhnS2k5Y2JseHVKM1Z6WlNCemRISnBZM1FuWEc1Y2JuWmhjaUJpWVhObE5qUWdQU0J5WlhGMWFYSmxLQ2RpWVhObE5qUXRhbk1uS1Z4dWRtRnlJR2xsWldVM05UUWdQU0J5WlhGMWFYSmxLQ2RwWldWbE56VTBKeWxjYm5aaGNpQnBjMEZ5Y21GNUlEMGdjbVZ4ZFdseVpTZ25hWE5oY25KaGVTY3BYRzVjYm1WNGNHOXlkSE11UW5WbVptVnlJRDBnUW5WbVptVnlYRzVsZUhCdmNuUnpMbE5zYjNkQ2RXWm1aWElnUFNCVGJHOTNRblZtWm1WeVhHNWxlSEJ2Y25SekxrbE9VMUJGUTFSZlRVRllYMEpaVkVWVElEMGdOVEJjYmx4dUx5b3FYRzRnS2lCSlppQmdRblZtWm1WeUxsUlpVRVZFWDBGU1VrRlpYMU5WVUZCUFVsUmdPbHh1SUNvZ0lDQTlQVDBnZEhKMVpTQWdJQ0JWYzJVZ1ZXbHVkRGhCY25KaGVTQnBiWEJzWlcxbGJuUmhkR2x2YmlBb1ptRnpkR1Z6ZENsY2JpQXFJQ0FnUFQwOUlHWmhiSE5sSUNBZ1ZYTmxJRTlpYW1WamRDQnBiWEJzWlcxbGJuUmhkR2x2YmlBb2JXOXpkQ0JqYjIxd1lYUnBZbXhsTENCbGRtVnVJRWxGTmlsY2JpQXFYRzRnS2lCQ2NtOTNjMlZ5Y3lCMGFHRjBJSE4xY0hCdmNuUWdkSGx3WldRZ1lYSnlZWGx6SUdGeVpTQkpSU0F4TUNzc0lFWnBjbVZtYjNnZ05Dc3NJRU5vY205dFpTQTNLeXdnVTJGbVlYSnBJRFV1TVNzc1hHNGdLaUJQY0dWeVlTQXhNUzQyS3l3Z2FVOVRJRFF1TWlzdVhHNGdLbHh1SUNvZ1JIVmxJSFJ2SUhaaGNtbHZkWE1nWW5KdmQzTmxjaUJpZFdkekxDQnpiMjFsZEdsdFpYTWdkR2hsSUU5aWFtVmpkQ0JwYlhCc1pXMWxiblJoZEdsdmJpQjNhV3hzSUdKbElIVnpaV1FnWlhabGJseHVJQ29nZDJobGJpQjBhR1VnWW5KdmQzTmxjaUJ6ZFhCd2IzSjBjeUIwZVhCbFpDQmhjbkpoZVhNdVhHNGdLbHh1SUNvZ1RtOTBaVHBjYmlBcVhHNGdLaUFnSUMwZ1JtbHlaV1p2ZUNBMExUSTVJR3hoWTJ0eklITjFjSEJ2Y25RZ1ptOXlJR0ZrWkdsdVp5QnVaWGNnY0hKdmNHVnlkR2xsY3lCMGJ5QmdWV2x1ZERoQmNuSmhlV0FnYVc1emRHRnVZMlZ6TEZ4dUlDb2dJQ0FnSUZObFpUb2dhSFIwY0hNNkx5OWlkV2Q2YVd4c1lTNXRiM3BwYkd4aExtOXlaeTl6YUc5M1gySjFaeTVqWjJrL2FXUTlOamsxTkRNNExseHVJQ3BjYmlBcUlDQWdMU0JEYUhKdmJXVWdPUzB4TUNCcGN5QnRhWE56YVc1bklIUm9aU0JnVkhsd1pXUkJjbkpoZVM1d2NtOTBiM1I1Y0dVdWMzVmlZWEp5WVhsZ0lHWjFibU4wYVc5dUxseHVJQ3BjYmlBcUlDQWdMU0JKUlRFd0lHaGhjeUJoSUdKeWIydGxiaUJnVkhsd1pXUkJjbkpoZVM1d2NtOTBiM1I1Y0dVdWMzVmlZWEp5WVhsZ0lHWjFibU4wYVc5dUlIZG9hV05vSUhKbGRIVnlibk1nWVhKeVlYbHpJRzltWEc0Z0tpQWdJQ0FnYVc1amIzSnlaV04wSUd4bGJtZDBhQ0JwYmlCemIyMWxJSE5wZEhWaGRHbHZibk11WEc1Y2JpQXFJRmRsSUdSbGRHVmpkQ0IwYUdWelpTQmlkV2RuZVNCaWNtOTNjMlZ5Y3lCaGJtUWdjMlYwSUdCQ2RXWm1aWEl1VkZsUVJVUmZRVkpTUVZsZlUxVlFVRTlTVkdBZ2RHOGdZR1poYkhObFlDQnpieUIwYUdWNVhHNGdLaUJuWlhRZ2RHaGxJRTlpYW1WamRDQnBiWEJzWlcxbGJuUmhkR2x2Yml3Z2QyaHBZMmdnYVhNZ2MyeHZkMlZ5SUdKMWRDQmlaV2hoZG1WeklHTnZjbkpsWTNSc2VTNWNiaUFxTDF4dVFuVm1abVZ5TGxSWlVFVkVYMEZTVWtGWlgxTlZVRkJQVWxRZ1BTQm5iRzlpWVd3dVZGbFFSVVJmUVZKU1FWbGZVMVZRVUU5U1ZDQWhQVDBnZFc1a1pXWnBibVZrWEc0Z0lEOGdaMnh2WW1Gc0xsUlpVRVZFWDBGU1VrRlpYMU5WVUZCUFVsUmNiaUFnT2lCMGVYQmxaRUZ5Y21GNVUzVndjRzl5ZENncFhHNWNiaThxWEc0Z0tpQkZlSEJ2Y25RZ2EwMWhlRXhsYm1kMGFDQmhablJsY2lCMGVYQmxaQ0JoY25KaGVTQnpkWEJ3YjNKMElHbHpJR1JsZEdWeWJXbHVaV1F1WEc0Z0tpOWNibVY0Y0c5eWRITXVhMDFoZUV4bGJtZDBhQ0E5SUd0TllYaE1aVzVuZEdnb0tWeHVYRzVtZFc1amRHbHZiaUIwZVhCbFpFRnljbUY1VTNWd2NHOXlkQ0FvS1NCN1hHNGdJSFJ5ZVNCN1hHNGdJQ0FnZG1GeUlHRnljaUE5SUc1bGR5QlZhVzUwT0VGeWNtRjVLREVwWEc0Z0lDQWdZWEp5TGw5ZmNISnZkRzlmWHlBOUlIdGZYM0J5YjNSdlgxODZJRlZwYm5RNFFYSnlZWGt1Y0hKdmRHOTBlWEJsTENCbWIyODZJR1oxYm1OMGFXOXVJQ2dwSUhzZ2NtVjBkWEp1SURReUlIMTlYRzRnSUNBZ2NtVjBkWEp1SUdGeWNpNW1iMjhvS1NBOVBUMGdORElnSmlZZ0x5OGdkSGx3WldRZ1lYSnlZWGtnYVc1emRHRnVZMlZ6SUdOaGJpQmlaU0JoZFdkdFpXNTBaV1JjYmlBZ0lDQWdJQ0FnZEhsd1pXOW1JR0Z5Y2k1emRXSmhjbkpoZVNBOVBUMGdKMloxYm1OMGFXOXVKeUFtSmlBdkx5QmphSEp2YldVZ09TMHhNQ0JzWVdOcklHQnpkV0poY25KaGVXQmNiaUFnSUNBZ0lDQWdZWEp5TG5OMVltRnljbUY1S0RFc0lERXBMbUo1ZEdWTVpXNW5kR2dnUFQwOUlEQWdMeThnYVdVeE1DQm9ZWE1nWW5KdmEyVnVJR0J6ZFdKaGNuSmhlV0JjYmlBZ2ZTQmpZWFJqYUNBb1pTa2dlMXh1SUNBZ0lISmxkSFZ5YmlCbVlXeHpaVnh1SUNCOVhHNTlYRzVjYm1aMWJtTjBhVzl1SUd0TllYaE1aVzVuZEdnZ0tDa2dlMXh1SUNCeVpYUjFjbTRnUW5WbVptVnlMbFJaVUVWRVgwRlNVa0ZaWDFOVlVGQlBVbFJjYmlBZ0lDQS9JREI0TjJabVptWm1abVpjYmlBZ0lDQTZJREI0TTJabVptWm1abVpjYm4xY2JseHVablZ1WTNScGIyNGdZM0psWVhSbFFuVm1abVZ5SUNoMGFHRjBMQ0JzWlc1bmRHZ3BJSHRjYmlBZ2FXWWdLR3ROWVhoTVpXNW5kR2dvS1NBOElHeGxibWQwYUNrZ2UxeHVJQ0FnSUhSb2NtOTNJRzVsZHlCU1lXNW5aVVZ5Y205eUtDZEpiblpoYkdsa0lIUjVjR1ZrSUdGeWNtRjVJR3hsYm1kMGFDY3BYRzRnSUgxY2JpQWdhV1lnS0VKMVptWmxjaTVVV1ZCRlJGOUJVbEpCV1Y5VFZWQlFUMUpVS1NCN1hHNGdJQ0FnTHk4Z1VtVjBkWEp1SUdGdUlHRjFaMjFsYm5SbFpDQmdWV2x1ZERoQmNuSmhlV0FnYVc1emRHRnVZMlVzSUdadmNpQmlaWE4wSUhCbGNtWnZjbTFoYm1ObFhHNGdJQ0FnZEdoaGRDQTlJRzVsZHlCVmFXNTBPRUZ5Y21GNUtHeGxibWQwYUNsY2JpQWdJQ0IwYUdGMExsOWZjSEp2ZEc5Zlh5QTlJRUoxWm1abGNpNXdjbTkwYjNSNWNHVmNiaUFnZlNCbGJITmxJSHRjYmlBZ0lDQXZMeUJHWVd4c1ltRmphem9nVW1WMGRYSnVJR0Z1SUc5aWFtVmpkQ0JwYm5OMFlXNWpaU0J2WmlCMGFHVWdRblZtWm1WeUlHTnNZWE56WEc0Z0lDQWdhV1lnS0hSb1lYUWdQVDA5SUc1MWJHd3BJSHRjYmlBZ0lDQWdJSFJvWVhRZ1BTQnVaWGNnUW5WbVptVnlLR3hsYm1kMGFDbGNiaUFnSUNCOVhHNGdJQ0FnZEdoaGRDNXNaVzVuZEdnZ1BTQnNaVzVuZEdoY2JpQWdmVnh1WEc0Z0lISmxkSFZ5YmlCMGFHRjBYRzU5WEc1Y2JpOHFLbHh1SUNvZ1ZHaGxJRUoxWm1abGNpQmpiMjV6ZEhKMVkzUnZjaUJ5WlhSMWNtNXpJR2x1YzNSaGJtTmxjeUJ2WmlCZ1ZXbHVkRGhCY25KaGVXQWdkR2hoZENCb1lYWmxJSFJvWldseVhHNGdLaUJ3Y205MGIzUjVjR1VnWTJoaGJtZGxaQ0IwYnlCZ1FuVm1abVZ5TG5CeWIzUnZkSGx3WldBdUlFWjFjblJvWlhKdGIzSmxMQ0JnUW5WbVptVnlZQ0JwY3lCaElITjFZbU5zWVhOeklHOW1YRzRnS2lCZ1ZXbHVkRGhCY25KaGVXQXNJSE52SUhSb1pTQnlaWFIxY201bFpDQnBibk4wWVc1alpYTWdkMmxzYkNCb1lYWmxJR0ZzYkNCMGFHVWdibTlrWlNCZ1FuVm1abVZ5WUNCdFpYUm9iMlJ6WEc0Z0tpQmhibVFnZEdobElHQlZhVzUwT0VGeWNtRjVZQ0J0WlhSb2IyUnpMaUJUY1hWaGNtVWdZbkpoWTJ0bGRDQnViM1JoZEdsdmJpQjNiM0pyY3lCaGN5QmxlSEJsWTNSbFpDQXRMU0JwZEZ4dUlDb2djbVYwZFhKdWN5QmhJSE5wYm1kc1pTQnZZM1JsZEM1Y2JpQXFYRzRnS2lCVWFHVWdZRlZwYm5RNFFYSnlZWGxnSUhCeWIzUnZkSGx3WlNCeVpXMWhhVzV6SUhWdWJXOWthV1pwWldRdVhHNGdLaTljYmx4dVpuVnVZM1JwYjI0Z1FuVm1abVZ5SUNoaGNtY3NJR1Z1WTI5a2FXNW5UM0pQWm1aelpYUXNJR3hsYm1kMGFDa2dlMXh1SUNCcFppQW9JVUoxWm1abGNpNVVXVkJGUkY5QlVsSkJXVjlUVlZCUVQxSlVJQ1ltSUNFb2RHaHBjeUJwYm5OMFlXNWpaVzltSUVKMVptWmxjaWtwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdibVYzSUVKMVptWmxjaWhoY21jc0lHVnVZMjlrYVc1blQzSlBabVp6WlhRc0lHeGxibWQwYUNsY2JpQWdmVnh1WEc0Z0lDOHZJRU52YlcxdmJpQmpZWE5sTGx4dUlDQnBaaUFvZEhsd1pXOW1JR0Z5WnlBOVBUMGdKMjUxYldKbGNpY3BJSHRjYmlBZ0lDQnBaaUFvZEhsd1pXOW1JR1Z1WTI5a2FXNW5UM0pQWm1aelpYUWdQVDA5SUNkemRISnBibWNuS1NCN1hHNGdJQ0FnSUNCMGFISnZkeUJ1WlhjZ1JYSnliM0lvWEc0Z0lDQWdJQ0FnSUNkSlppQmxibU52WkdsdVp5QnBjeUJ6Y0dWamFXWnBaV1FnZEdobGJpQjBhR1VnWm1seWMzUWdZWEpuZFcxbGJuUWdiWFZ6ZENCaVpTQmhJSE4wY21sdVp5ZGNiaUFnSUNBZ0lDbGNiaUFnSUNCOVhHNGdJQ0FnY21WMGRYSnVJR0ZzYkc5alZXNXpZV1psS0hSb2FYTXNJR0Z5WnlsY2JpQWdmVnh1SUNCeVpYUjFjbTRnWm5KdmJTaDBhR2x6TENCaGNtY3NJR1Z1WTI5a2FXNW5UM0pQWm1aelpYUXNJR3hsYm1kMGFDbGNibjFjYmx4dVFuVm1abVZ5TG5CdmIyeFRhWHBsSUQwZ09ERTVNaUF2THlCdWIzUWdkWE5sWkNCaWVTQjBhR2x6SUdsdGNHeGxiV1Z1ZEdGMGFXOXVYRzVjYmk4dklGUlBSRTg2SUV4bFoyRmplU3dnYm05MElHNWxaV1JsWkNCaGJubHRiM0psTGlCU1pXMXZkbVVnYVc0Z2JtVjRkQ0J0WVdwdmNpQjJaWEp6YVc5dUxseHVRblZtWm1WeUxsOWhkV2R0Wlc1MElEMGdablZ1WTNScGIyNGdLR0Z5Y2lrZ2UxeHVJQ0JoY25JdVgxOXdjbTkwYjE5ZklEMGdRblZtWm1WeUxuQnliM1J2ZEhsd1pWeHVJQ0J5WlhSMWNtNGdZWEp5WEc1OVhHNWNibVoxYm1OMGFXOXVJR1p5YjIwZ0tIUm9ZWFFzSUhaaGJIVmxMQ0JsYm1OdlpHbHVaMDl5VDJabWMyVjBMQ0JzWlc1bmRHZ3BJSHRjYmlBZ2FXWWdLSFI1Y0dWdlppQjJZV3gxWlNBOVBUMGdKMjUxYldKbGNpY3BJSHRjYmlBZ0lDQjBhSEp2ZHlCdVpYY2dWSGx3WlVWeWNtOXlLQ2RjSW5aaGJIVmxYQ0lnWVhKbmRXMWxiblFnYlhWemRDQnViM1FnWW1VZ1lTQnVkVzFpWlhJbktWeHVJQ0I5WEc1Y2JpQWdhV1lnS0hSNWNHVnZaaUJCY25KaGVVSjFabVpsY2lBaFBUMGdKM1Z1WkdWbWFXNWxaQ2NnSmlZZ2RtRnNkV1VnYVc1emRHRnVZMlZ2WmlCQmNuSmhlVUoxWm1abGNpa2dlMXh1SUNBZ0lISmxkSFZ5YmlCbWNtOXRRWEp5WVhsQ2RXWm1aWElvZEdoaGRDd2dkbUZzZFdVc0lHVnVZMjlrYVc1blQzSlBabVp6WlhRc0lHeGxibWQwYUNsY2JpQWdmVnh1WEc0Z0lHbG1JQ2gwZVhCbGIyWWdkbUZzZFdVZ1BUMDlJQ2R6ZEhKcGJtY25LU0I3WEc0Z0lDQWdjbVYwZFhKdUlHWnliMjFUZEhKcGJtY29kR2hoZEN3Z2RtRnNkV1VzSUdWdVkyOWthVzVuVDNKUFptWnpaWFFwWEc0Z0lIMWNibHh1SUNCeVpYUjFjbTRnWm5KdmJVOWlhbVZqZENoMGFHRjBMQ0IyWVd4MVpTbGNibjFjYmx4dUx5b3FYRzRnS2lCR2RXNWpkR2x2Ym1Gc2JIa2daWEYxYVhaaGJHVnVkQ0IwYnlCQ2RXWm1aWElvWVhKbkxDQmxibU52WkdsdVp5a2dZblYwSUhSb2NtOTNjeUJoSUZSNWNHVkZjbkp2Y2x4dUlDb2dhV1lnZG1Gc2RXVWdhWE1nWVNCdWRXMWlaWEl1WEc0Z0tpQkNkV1ptWlhJdVpuSnZiU2h6ZEhKYkxDQmxibU52WkdsdVoxMHBYRzRnS2lCQ2RXWm1aWEl1Wm5KdmJTaGhjbkpoZVNsY2JpQXFJRUoxWm1abGNpNW1jbTl0S0dKMVptWmxjaWxjYmlBcUlFSjFabVpsY2k1bWNtOXRLR0Z5Y21GNVFuVm1abVZ5V3l3Z1lubDBaVTltWm5ObGRGc3NJR3hsYm1kMGFGMWRLVnh1SUNvcUwxeHVRblZtWm1WeUxtWnliMjBnUFNCbWRXNWpkR2x2YmlBb2RtRnNkV1VzSUdWdVkyOWthVzVuVDNKUFptWnpaWFFzSUd4bGJtZDBhQ2tnZTF4dUlDQnlaWFIxY200Z1puSnZiU2h1ZFd4c0xDQjJZV3gxWlN3Z1pXNWpiMlJwYm1kUGNrOW1abk5sZEN3Z2JHVnVaM1JvS1Z4dWZWeHVYRzVwWmlBb1FuVm1abVZ5TGxSWlVFVkVYMEZTVWtGWlgxTlZVRkJQVWxRcElIdGNiaUFnUW5WbVptVnlMbkJ5YjNSdmRIbHdaUzVmWDNCeWIzUnZYMThnUFNCVmFXNTBPRUZ5Y21GNUxuQnliM1J2ZEhsd1pWeHVJQ0JDZFdabVpYSXVYMTl3Y205MGIxOWZJRDBnVldsdWREaEJjbkpoZVZ4dUlDQnBaaUFvZEhsd1pXOW1JRk41YldKdmJDQWhQVDBnSjNWdVpHVm1hVzVsWkNjZ0ppWWdVM2x0WW05c0xuTndaV05wWlhNZ0ppWmNiaUFnSUNBZ0lFSjFabVpsY2x0VGVXMWliMnd1YzNCbFkybGxjMTBnUFQwOUlFSjFabVpsY2lrZ2UxeHVJQ0FnSUM4dklFWnBlQ0J6ZFdKaGNuSmhlU2dwSUdsdUlFVlRNakF4Tmk0Z1UyVmxPaUJvZEhSd2N6b3ZMMmRwZEdoMVlpNWpiMjB2Wm1WeWIzTnpMMkoxWm1abGNpOXdkV3hzTHprM1hHNGdJQ0FnVDJKcVpXTjBMbVJsWm1sdVpWQnliM0JsY25SNUtFSjFabVpsY2l3Z1UzbHRZbTlzTG5Od1pXTnBaWE1zSUh0Y2JpQWdJQ0FnSUhaaGJIVmxPaUJ1ZFd4c0xGeHVJQ0FnSUNBZ1kyOXVabWxuZFhKaFlteGxPaUIwY25WbFhHNGdJQ0FnZlNsY2JpQWdmVnh1ZlZ4dVhHNW1kVzVqZEdsdmJpQmhjM05sY25SVGFYcGxJQ2h6YVhwbEtTQjdYRzRnSUdsbUlDaDBlWEJsYjJZZ2MybDZaU0FoUFQwZ0oyNTFiV0psY2ljcElIdGNiaUFnSUNCMGFISnZkeUJ1WlhjZ1ZIbHdaVVZ5Y205eUtDZGNJbk5wZW1WY0lpQmhjbWQxYldWdWRDQnRkWE4wSUdKbElHRWdiblZ0WW1WeUp5bGNiaUFnZlNCbGJITmxJR2xtSUNoemFYcGxJRHdnTUNrZ2UxeHVJQ0FnSUhSb2NtOTNJRzVsZHlCU1lXNW5aVVZ5Y205eUtDZGNJbk5wZW1WY0lpQmhjbWQxYldWdWRDQnRkWE4wSUc1dmRDQmlaU0J1WldkaGRHbDJaU2NwWEc0Z0lIMWNibjFjYmx4dVpuVnVZM1JwYjI0Z1lXeHNiMk1nS0hSb1lYUXNJSE5wZW1Vc0lHWnBiR3dzSUdWdVkyOWthVzVuS1NCN1hHNGdJR0Z6YzJWeWRGTnBlbVVvYzJsNlpTbGNiaUFnYVdZZ0tITnBlbVVnUEQwZ01Da2dlMXh1SUNBZ0lISmxkSFZ5YmlCamNtVmhkR1ZDZFdabVpYSW9kR2hoZEN3Z2MybDZaU2xjYmlBZ2ZWeHVJQ0JwWmlBb1ptbHNiQ0FoUFQwZ2RXNWtaV1pwYm1Wa0tTQjdYRzRnSUNBZ0x5OGdUMjVzZVNCd1lYa2dZWFIwWlc1MGFXOXVJSFJ2SUdWdVkyOWthVzVuSUdsbUlHbDBKM01nWVNCemRISnBibWN1SUZSb2FYTmNiaUFnSUNBdkx5QndjbVYyWlc1MGN5QmhZMk5wWkdWdWRHRnNiSGtnYzJWdVpHbHVaeUJwYmlCaElHNTFiV0psY2lCMGFHRjBJSGR2ZFd4a1hHNGdJQ0FnTHk4Z1ltVWdhVzUwWlhKd2NtVjBkR1ZrSUdGeklHRWdjM1JoY25RZ2IyWm1jMlYwTGx4dUlDQWdJSEpsZEhWeWJpQjBlWEJsYjJZZ1pXNWpiMlJwYm1jZ1BUMDlJQ2R6ZEhKcGJtY25YRzRnSUNBZ0lDQS9JR055WldGMFpVSjFabVpsY2loMGFHRjBMQ0J6YVhwbEtTNW1hV3hzS0dacGJHd3NJR1Z1WTI5a2FXNW5LVnh1SUNBZ0lDQWdPaUJqY21WaGRHVkNkV1ptWlhJb2RHaGhkQ3dnYzJsNlpTa3VabWxzYkNobWFXeHNLVnh1SUNCOVhHNGdJSEpsZEhWeWJpQmpjbVZoZEdWQ2RXWm1aWElvZEdoaGRDd2djMmw2WlNsY2JuMWNibHh1THlvcVhHNGdLaUJEY21WaGRHVnpJR0VnYm1WM0lHWnBiR3hsWkNCQ2RXWm1aWElnYVc1emRHRnVZMlV1WEc0Z0tpQmhiR3h2WXloemFYcGxXeXdnWm1sc2JGc3NJR1Z1WTI5a2FXNW5YVjBwWEc0Z0tpb3ZYRzVDZFdabVpYSXVZV3hzYjJNZ1BTQm1kVzVqZEdsdmJpQW9jMmw2WlN3Z1ptbHNiQ3dnWlc1amIyUnBibWNwSUh0Y2JpQWdjbVYwZFhKdUlHRnNiRzlqS0c1MWJHd3NJSE5wZW1Vc0lHWnBiR3dzSUdWdVkyOWthVzVuS1Z4dWZWeHVYRzVtZFc1amRHbHZiaUJoYkd4dlkxVnVjMkZtWlNBb2RHaGhkQ3dnYzJsNlpTa2dlMXh1SUNCaGMzTmxjblJUYVhwbEtITnBlbVVwWEc0Z0lIUm9ZWFFnUFNCamNtVmhkR1ZDZFdabVpYSW9kR2hoZEN3Z2MybDZaU0E4SURBZ1B5QXdJRG9nWTJobFkydGxaQ2h6YVhwbEtTQjhJREFwWEc0Z0lHbG1JQ2doUW5WbVptVnlMbFJaVUVWRVgwRlNVa0ZaWDFOVlVGQlBVbFFwSUh0Y2JpQWdJQ0JtYjNJZ0tIWmhjaUJwSUQwZ01Ec2dhU0E4SUhOcGVtVTdJQ3NyYVNrZ2UxeHVJQ0FnSUNBZ2RHaGhkRnRwWFNBOUlEQmNiaUFnSUNCOVhHNGdJSDFjYmlBZ2NtVjBkWEp1SUhSb1lYUmNibjFjYmx4dUx5b3FYRzRnS2lCRmNYVnBkbUZzWlc1MElIUnZJRUoxWm1abGNpaHVkVzBwTENCaWVTQmtaV1poZFd4MElHTnlaV0YwWlhNZ1lTQnViMjR0ZW1WeWJ5MW1hV3hzWldRZ1FuVm1abVZ5SUdsdWMzUmhibU5sTGx4dUlDb2dLaTljYmtKMVptWmxjaTVoYkd4dlkxVnVjMkZtWlNBOUlHWjFibU4wYVc5dUlDaHphWHBsS1NCN1hHNGdJSEpsZEhWeWJpQmhiR3h2WTFWdWMyRm1aU2h1ZFd4c0xDQnphWHBsS1Z4dWZWeHVMeW9xWEc0Z0tpQkZjWFZwZG1Gc1pXNTBJSFJ2SUZOc2IzZENkV1ptWlhJb2JuVnRLU3dnWW5rZ1pHVm1ZWFZzZENCamNtVmhkR1Z6SUdFZ2JtOXVMWHBsY204dFptbHNiR1ZrSUVKMVptWmxjaUJwYm5OMFlXNWpaUzVjYmlBcUwxeHVRblZtWm1WeUxtRnNiRzlqVlc1ellXWmxVMnh2ZHlBOUlHWjFibU4wYVc5dUlDaHphWHBsS1NCN1hHNGdJSEpsZEhWeWJpQmhiR3h2WTFWdWMyRm1aU2h1ZFd4c0xDQnphWHBsS1Z4dWZWeHVYRzVtZFc1amRHbHZiaUJtY205dFUzUnlhVzVuSUNoMGFHRjBMQ0J6ZEhKcGJtY3NJR1Z1WTI5a2FXNW5LU0I3WEc0Z0lHbG1JQ2gwZVhCbGIyWWdaVzVqYjJScGJtY2dJVDA5SUNkemRISnBibWNuSUh4OElHVnVZMjlrYVc1bklEMDlQU0FuSnlrZ2UxeHVJQ0FnSUdWdVkyOWthVzVuSUQwZ0ozVjBaamduWEc0Z0lIMWNibHh1SUNCcFppQW9JVUoxWm1abGNpNXBjMFZ1WTI5a2FXNW5LR1Z1WTI5a2FXNW5LU2tnZTF4dUlDQWdJSFJvY205M0lHNWxkeUJVZVhCbFJYSnliM0lvSjF3aVpXNWpiMlJwYm1kY0lpQnRkWE4wSUdKbElHRWdkbUZzYVdRZ2MzUnlhVzVuSUdWdVkyOWthVzVuSnlsY2JpQWdmVnh1WEc0Z0lIWmhjaUJzWlc1bmRHZ2dQU0JpZVhSbFRHVnVaM1JvS0hOMGNtbHVaeXdnWlc1amIyUnBibWNwSUh3Z01GeHVJQ0IwYUdGMElEMGdZM0psWVhSbFFuVm1abVZ5S0hSb1lYUXNJR3hsYm1kMGFDbGNibHh1SUNCMllYSWdZV04wZFdGc0lEMGdkR2hoZEM1M2NtbDBaU2h6ZEhKcGJtY3NJR1Z1WTI5a2FXNW5LVnh1WEc0Z0lHbG1JQ2hoWTNSMVlXd2dJVDA5SUd4bGJtZDBhQ2tnZTF4dUlDQWdJQzh2SUZkeWFYUnBibWNnWVNCb1pYZ2djM1J5YVc1bkxDQm1iM0lnWlhoaGJYQnNaU3dnZEdoaGRDQmpiMjUwWVdsdWN5QnBiblpoYkdsa0lHTm9ZWEpoWTNSbGNuTWdkMmxzYkZ4dUlDQWdJQzh2SUdOaGRYTmxJR1YyWlhKNWRHaHBibWNnWVdaMFpYSWdkR2hsSUdacGNuTjBJR2x1ZG1Gc2FXUWdZMmhoY21GamRHVnlJSFJ2SUdKbElHbG5ibTl5WldRdUlDaGxMbWN1WEc0Z0lDQWdMeThnSjJGaWVIaGpaQ2NnZDJsc2JDQmlaU0IwY21WaGRHVmtJR0Z6SUNkaFlpY3BYRzRnSUNBZ2RHaGhkQ0E5SUhSb1lYUXVjMnhwWTJVb01Dd2dZV04wZFdGc0tWeHVJQ0I5WEc1Y2JpQWdjbVYwZFhKdUlIUm9ZWFJjYm4xY2JseHVablZ1WTNScGIyNGdabkp2YlVGeWNtRjVUR2xyWlNBb2RHaGhkQ3dnWVhKeVlYa3BJSHRjYmlBZ2RtRnlJR3hsYm1kMGFDQTlJR0Z5Y21GNUxteGxibWQwYUNBOElEQWdQeUF3SURvZ1kyaGxZMnRsWkNoaGNuSmhlUzVzWlc1bmRHZ3BJSHdnTUZ4dUlDQjBhR0YwSUQwZ1kzSmxZWFJsUW5WbVptVnlLSFJvWVhRc0lHeGxibWQwYUNsY2JpQWdabTl5SUNoMllYSWdhU0E5SURBN0lHa2dQQ0JzWlc1bmRHZzdJR2tnS3owZ01Ta2dlMXh1SUNBZ0lIUm9ZWFJiYVYwZ1BTQmhjbkpoZVZ0cFhTQW1JREkxTlZ4dUlDQjlYRzRnSUhKbGRIVnliaUIwYUdGMFhHNTlYRzVjYm1aMWJtTjBhVzl1SUdaeWIyMUJjbkpoZVVKMVptWmxjaUFvZEdoaGRDd2dZWEp5WVhrc0lHSjVkR1ZQWm1aelpYUXNJR3hsYm1kMGFDa2dlMXh1SUNCaGNuSmhlUzVpZVhSbFRHVnVaM1JvSUM4dklIUm9hWE1nZEdoeWIzZHpJR2xtSUdCaGNuSmhlV0FnYVhNZ2JtOTBJR0VnZG1Gc2FXUWdRWEp5WVhsQ2RXWm1aWEpjYmx4dUlDQnBaaUFvWW5sMFpVOW1abk5sZENBOElEQWdmSHdnWVhKeVlYa3VZbmwwWlV4bGJtZDBhQ0E4SUdKNWRHVlBabVp6WlhRcElIdGNiaUFnSUNCMGFISnZkeUJ1WlhjZ1VtRnVaMlZGY25KdmNpZ25YRnduYjJabWMyVjBYRnduSUdseklHOTFkQ0J2WmlCaWIzVnVaSE1uS1Z4dUlDQjlYRzVjYmlBZ2FXWWdLR0Z5Y21GNUxtSjVkR1ZNWlc1bmRHZ2dQQ0JpZVhSbFQyWm1jMlYwSUNzZ0tHeGxibWQwYUNCOGZDQXdLU2tnZTF4dUlDQWdJSFJvY205M0lHNWxkeUJTWVc1blpVVnljbTl5S0NkY1hDZHNaVzVuZEdoY1hDY2dhWE1nYjNWMElHOW1JR0p2ZFc1a2N5Y3BYRzRnSUgxY2JseHVJQ0JwWmlBb1lubDBaVTltWm5ObGRDQTlQVDBnZFc1a1pXWnBibVZrSUNZbUlHeGxibWQwYUNBOVBUMGdkVzVrWldacGJtVmtLU0I3WEc0Z0lDQWdZWEp5WVhrZ1BTQnVaWGNnVldsdWREaEJjbkpoZVNoaGNuSmhlU2xjYmlBZ2ZTQmxiSE5sSUdsbUlDaHNaVzVuZEdnZ1BUMDlJSFZ1WkdWbWFXNWxaQ2tnZTF4dUlDQWdJR0Z5Y21GNUlEMGdibVYzSUZWcGJuUTRRWEp5WVhrb1lYSnlZWGtzSUdKNWRHVlBabVp6WlhRcFhHNGdJSDBnWld4elpTQjdYRzRnSUNBZ1lYSnlZWGtnUFNCdVpYY2dWV2x1ZERoQmNuSmhlU2hoY25KaGVTd2dZbmwwWlU5bVpuTmxkQ3dnYkdWdVozUm9LVnh1SUNCOVhHNWNiaUFnYVdZZ0tFSjFabVpsY2k1VVdWQkZSRjlCVWxKQldWOVRWVkJRVDFKVUtTQjdYRzRnSUNBZ0x5OGdVbVYwZFhKdUlHRnVJR0YxWjIxbGJuUmxaQ0JnVldsdWREaEJjbkpoZVdBZ2FXNXpkR0Z1WTJVc0lHWnZjaUJpWlhOMElIQmxjbVp2Y20xaGJtTmxYRzRnSUNBZ2RHaGhkQ0E5SUdGeWNtRjVYRzRnSUNBZ2RHaGhkQzVmWDNCeWIzUnZYMThnUFNCQ2RXWm1aWEl1Y0hKdmRHOTBlWEJsWEc0Z0lIMGdaV3h6WlNCN1hHNGdJQ0FnTHk4Z1JtRnNiR0poWTJzNklGSmxkSFZ5YmlCaGJpQnZZbXBsWTNRZ2FXNXpkR0Z1WTJVZ2IyWWdkR2hsSUVKMVptWmxjaUJqYkdGemMxeHVJQ0FnSUhSb1lYUWdQU0JtY205dFFYSnlZWGxNYVd0bEtIUm9ZWFFzSUdGeWNtRjVLVnh1SUNCOVhHNGdJSEpsZEhWeWJpQjBhR0YwWEc1OVhHNWNibVoxYm1OMGFXOXVJR1p5YjIxUFltcGxZM1FnS0hSb1lYUXNJRzlpYWlrZ2UxeHVJQ0JwWmlBb1FuVm1abVZ5TG1selFuVm1abVZ5S0c5aWFpa3BJSHRjYmlBZ0lDQjJZWElnYkdWdUlEMGdZMmhsWTJ0bFpDaHZZbW91YkdWdVozUm9LU0I4SURCY2JpQWdJQ0IwYUdGMElEMGdZM0psWVhSbFFuVm1abVZ5S0hSb1lYUXNJR3hsYmlsY2JseHVJQ0FnSUdsbUlDaDBhR0YwTG14bGJtZDBhQ0E5UFQwZ01Da2dlMXh1SUNBZ0lDQWdjbVYwZFhKdUlIUm9ZWFJjYmlBZ0lDQjlYRzVjYmlBZ0lDQnZZbW91WTI5d2VTaDBhR0YwTENBd0xDQXdMQ0JzWlc0cFhHNGdJQ0FnY21WMGRYSnVJSFJvWVhSY2JpQWdmVnh1WEc0Z0lHbG1JQ2h2WW1vcElIdGNiaUFnSUNCcFppQW9LSFI1Y0dWdlppQkJjbkpoZVVKMVptWmxjaUFoUFQwZ0ozVnVaR1ZtYVc1bFpDY2dKaVpjYmlBZ0lDQWdJQ0FnYjJKcUxtSjFabVpsY2lCcGJuTjBZVzVqWlc5bUlFRnljbUY1UW5WbVptVnlLU0I4ZkNBbmJHVnVaM1JvSnlCcGJpQnZZbW9wSUh0Y2JpQWdJQ0FnSUdsbUlDaDBlWEJsYjJZZ2IySnFMbXhsYm1kMGFDQWhQVDBnSjI1MWJXSmxjaWNnZkh3Z2FYTnVZVzRvYjJKcUxteGxibWQwYUNrcElIdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlHTnlaV0YwWlVKMVptWmxjaWgwYUdGMExDQXdLVnh1SUNBZ0lDQWdmVnh1SUNBZ0lDQWdjbVYwZFhKdUlHWnliMjFCY25KaGVVeHBhMlVvZEdoaGRDd2diMkpxS1Z4dUlDQWdJSDFjYmx4dUlDQWdJR2xtSUNodlltb3VkSGx3WlNBOVBUMGdKMEoxWm1abGNpY2dKaVlnYVhOQmNuSmhlU2h2WW1vdVpHRjBZU2twSUh0Y2JpQWdJQ0FnSUhKbGRIVnliaUJtY205dFFYSnlZWGxNYVd0bEtIUm9ZWFFzSUc5aWFpNWtZWFJoS1Z4dUlDQWdJSDFjYmlBZ2ZWeHVYRzRnSUhSb2NtOTNJRzVsZHlCVWVYQmxSWEp5YjNJb0owWnBjbk4wSUdGeVozVnRaVzUwSUcxMWMzUWdZbVVnWVNCemRISnBibWNzSUVKMVptWmxjaXdnUVhKeVlYbENkV1ptWlhJc0lFRnljbUY1TENCdmNpQmhjbkpoZVMxc2FXdGxJRzlpYW1WamRDNG5LVnh1ZlZ4dVhHNW1kVzVqZEdsdmJpQmphR1ZqYTJWa0lDaHNaVzVuZEdncElIdGNiaUFnTHk4Z1RtOTBaVG9nWTJGdWJtOTBJSFZ6WlNCZ2JHVnVaM1JvSUR3Z2EwMWhlRXhsYm1kMGFDZ3BZQ0JvWlhKbElHSmxZMkYxYzJVZ2RHaGhkQ0JtWVdsc2N5QjNhR1Z1WEc0Z0lDOHZJR3hsYm1kMGFDQnBjeUJPWVU0Z0tIZG9hV05vSUdseklHOTBhR1Z5ZDJselpTQmpiMlZ5WTJWa0lIUnZJSHBsY204dUtWeHVJQ0JwWmlBb2JHVnVaM1JvSUQ0OUlHdE5ZWGhNWlc1bmRHZ29LU2tnZTF4dUlDQWdJSFJvY205M0lHNWxkeUJTWVc1blpVVnljbTl5S0NkQmRIUmxiWEIwSUhSdklHRnNiRzlqWVhSbElFSjFabVpsY2lCc1lYSm5aWElnZEdoaGJpQnRZWGhwYlhWdElDY2dLMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ2R6YVhwbE9pQXdlQ2NnS3lCclRXRjRUR1Z1WjNSb0tDa3VkRzlUZEhKcGJtY29NVFlwSUNzZ0p5QmllWFJsY3ljcFhHNGdJSDFjYmlBZ2NtVjBkWEp1SUd4bGJtZDBhQ0I4SURCY2JuMWNibHh1Wm5WdVkzUnBiMjRnVTJ4dmQwSjFabVpsY2lBb2JHVnVaM1JvS1NCN1hHNGdJR2xtSUNncmJHVnVaM1JvSUNFOUlHeGxibWQwYUNrZ2V5QXZMeUJsYzJ4cGJuUXRaR2x6WVdKc1pTMXNhVzVsSUdWeFpYRmxjVnh1SUNBZ0lHeGxibWQwYUNBOUlEQmNiaUFnZlZ4dUlDQnlaWFIxY200Z1FuVm1abVZ5TG1Gc2JHOWpLQ3RzWlc1bmRHZ3BYRzU5WEc1Y2JrSjFabVpsY2k1cGMwSjFabVpsY2lBOUlHWjFibU4wYVc5dUlHbHpRblZtWm1WeUlDaGlLU0I3WEc0Z0lISmxkSFZ5YmlBaElTaGlJQ0U5SUc1MWJHd2dKaVlnWWk1ZmFYTkNkV1ptWlhJcFhHNTlYRzVjYmtKMVptWmxjaTVqYjIxd1lYSmxJRDBnWm5WdVkzUnBiMjRnWTI5dGNHRnlaU0FvWVN3Z1lpa2dlMXh1SUNCcFppQW9JVUoxWm1abGNpNXBjMEoxWm1abGNpaGhLU0I4ZkNBaFFuVm1abVZ5TG1selFuVm1abVZ5S0dJcEtTQjdYRzRnSUNBZ2RHaHliM2NnYm1WM0lGUjVjR1ZGY25KdmNpZ25RWEpuZFcxbGJuUnpJRzExYzNRZ1ltVWdRblZtWm1WeWN5Y3BYRzRnSUgxY2JseHVJQ0JwWmlBb1lTQTlQVDBnWWlrZ2NtVjBkWEp1SURCY2JseHVJQ0IyWVhJZ2VDQTlJR0V1YkdWdVozUm9YRzRnSUhaaGNpQjVJRDBnWWk1c1pXNW5kR2hjYmx4dUlDQm1iM0lnS0haaGNpQnBJRDBnTUN3Z2JHVnVJRDBnVFdGMGFDNXRhVzRvZUN3Z2VTazdJR2tnUENCc1pXNDdJQ3NyYVNrZ2UxeHVJQ0FnSUdsbUlDaGhXMmxkSUNFOVBTQmlXMmxkS1NCN1hHNGdJQ0FnSUNCNElEMGdZVnRwWFZ4dUlDQWdJQ0FnZVNBOUlHSmJhVjFjYmlBZ0lDQWdJR0p5WldGclhHNGdJQ0FnZlZ4dUlDQjlYRzVjYmlBZ2FXWWdLSGdnUENCNUtTQnlaWFIxY200Z0xURmNiaUFnYVdZZ0tIa2dQQ0I0S1NCeVpYUjFjbTRnTVZ4dUlDQnlaWFIxY200Z01GeHVmVnh1WEc1Q2RXWm1aWEl1YVhORmJtTnZaR2x1WnlBOUlHWjFibU4wYVc5dUlHbHpSVzVqYjJScGJtY2dLR1Z1WTI5a2FXNW5LU0I3WEc0Z0lITjNhWFJqYUNBb1UzUnlhVzVuS0dWdVkyOWthVzVuS1M1MGIweHZkMlZ5UTJGelpTZ3BLU0I3WEc0Z0lDQWdZMkZ6WlNBbmFHVjRKenBjYmlBZ0lDQmpZWE5sSUNkMWRHWTRKenBjYmlBZ0lDQmpZWE5sSUNkMWRHWXRPQ2M2WEc0Z0lDQWdZMkZ6WlNBbllYTmphV2tuT2x4dUlDQWdJR05oYzJVZ0oyeGhkR2x1TVNjNlhHNGdJQ0FnWTJGelpTQW5ZbWx1WVhKNUp6cGNiaUFnSUNCallYTmxJQ2RpWVhObE5qUW5PbHh1SUNBZ0lHTmhjMlVnSjNWamN6SW5PbHh1SUNBZ0lHTmhjMlVnSjNWamN5MHlKenBjYmlBZ0lDQmpZWE5sSUNkMWRHWXhObXhsSnpwY2JpQWdJQ0JqWVhObElDZDFkR1l0TVRac1pTYzZYRzRnSUNBZ0lDQnlaWFIxY200Z2RISjFaVnh1SUNBZ0lHUmxabUYxYkhRNlhHNGdJQ0FnSUNCeVpYUjFjbTRnWm1Gc2MyVmNiaUFnZlZ4dWZWeHVYRzVDZFdabVpYSXVZMjl1WTJGMElEMGdablZ1WTNScGIyNGdZMjl1WTJGMElDaHNhWE4wTENCc1pXNW5kR2dwSUh0Y2JpQWdhV1lnS0NGcGMwRnljbUY1S0d4cGMzUXBLU0I3WEc0Z0lDQWdkR2h5YjNjZ2JtVjNJRlI1Y0dWRmNuSnZjaWduWENKc2FYTjBYQ0lnWVhKbmRXMWxiblFnYlhWemRDQmlaU0JoYmlCQmNuSmhlU0J2WmlCQ2RXWm1aWEp6SnlsY2JpQWdmVnh1WEc0Z0lHbG1JQ2hzYVhOMExteGxibWQwYUNBOVBUMGdNQ2tnZTF4dUlDQWdJSEpsZEhWeWJpQkNkV1ptWlhJdVlXeHNiMk1vTUNsY2JpQWdmVnh1WEc0Z0lIWmhjaUJwWEc0Z0lHbG1JQ2hzWlc1bmRHZ2dQVDA5SUhWdVpHVm1hVzVsWkNrZ2UxeHVJQ0FnSUd4bGJtZDBhQ0E5SURCY2JpQWdJQ0JtYjNJZ0tHa2dQU0F3T3lCcElEd2diR2x6ZEM1c1pXNW5kR2c3SUNzcmFTa2dlMXh1SUNBZ0lDQWdiR1Z1WjNSb0lDczlJR3hwYzNSYmFWMHViR1Z1WjNSb1hHNGdJQ0FnZlZ4dUlDQjlYRzVjYmlBZ2RtRnlJR0oxWm1abGNpQTlJRUoxWm1abGNpNWhiR3h2WTFWdWMyRm1aU2hzWlc1bmRHZ3BYRzRnSUhaaGNpQndiM01nUFNBd1hHNGdJR1p2Y2lBb2FTQTlJREE3SUdrZ1BDQnNhWE4wTG14bGJtZDBhRHNnS3l0cEtTQjdYRzRnSUNBZ2RtRnlJR0oxWmlBOUlHeHBjM1JiYVYxY2JpQWdJQ0JwWmlBb0lVSjFabVpsY2k1cGMwSjFabVpsY2loaWRXWXBLU0I3WEc0Z0lDQWdJQ0IwYUhKdmR5QnVaWGNnVkhsd1pVVnljbTl5S0NkY0lteHBjM1JjSWlCaGNtZDFiV1Z1ZENCdGRYTjBJR0psSUdGdUlFRnljbUY1SUc5bUlFSjFabVpsY25NbktWeHVJQ0FnSUgxY2JpQWdJQ0JpZFdZdVkyOXdlU2hpZFdabVpYSXNJSEJ2Y3lsY2JpQWdJQ0J3YjNNZ0t6MGdZblZtTG14bGJtZDBhRnh1SUNCOVhHNGdJSEpsZEhWeWJpQmlkV1ptWlhKY2JuMWNibHh1Wm5WdVkzUnBiMjRnWW5sMFpVeGxibWQwYUNBb2MzUnlhVzVuTENCbGJtTnZaR2x1WnlrZ2UxeHVJQ0JwWmlBb1FuVm1abVZ5TG1selFuVm1abVZ5S0hOMGNtbHVaeWtwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdjM1J5YVc1bkxteGxibWQwYUZ4dUlDQjlYRzRnSUdsbUlDaDBlWEJsYjJZZ1FYSnlZWGxDZFdabVpYSWdJVDA5SUNkMWJtUmxabWx1WldRbklDWW1JSFI1Y0dWdlppQkJjbkpoZVVKMVptWmxjaTVwYzFacFpYY2dQVDA5SUNkbWRXNWpkR2x2YmljZ0ppWmNiaUFnSUNBZ0lDaEJjbkpoZVVKMVptWmxjaTVwYzFacFpYY29jM1J5YVc1bktTQjhmQ0J6ZEhKcGJtY2dhVzV6ZEdGdVkyVnZaaUJCY25KaGVVSjFabVpsY2lrcElIdGNiaUFnSUNCeVpYUjFjbTRnYzNSeWFXNW5MbUo1ZEdWTVpXNW5kR2hjYmlBZ2ZWeHVJQ0JwWmlBb2RIbHdaVzltSUhOMGNtbHVaeUFoUFQwZ0ozTjBjbWx1WnljcElIdGNiaUFnSUNCemRISnBibWNnUFNBbkp5QXJJSE4wY21sdVoxeHVJQ0I5WEc1Y2JpQWdkbUZ5SUd4bGJpQTlJSE4wY21sdVp5NXNaVzVuZEdoY2JpQWdhV1lnS0d4bGJpQTlQVDBnTUNrZ2NtVjBkWEp1SURCY2JseHVJQ0F2THlCVmMyVWdZU0JtYjNJZ2JHOXZjQ0IwYnlCaGRtOXBaQ0J5WldOMWNuTnBiMjVjYmlBZ2RtRnlJR3h2ZDJWeVpXUkRZWE5sSUQwZ1ptRnNjMlZjYmlBZ1ptOXlJQ2c3T3lrZ2UxeHVJQ0FnSUhOM2FYUmphQ0FvWlc1amIyUnBibWNwSUh0Y2JpQWdJQ0FnSUdOaGMyVWdKMkZ6WTJscEp6cGNiaUFnSUNBZ0lHTmhjMlVnSjJ4aGRHbHVNU2M2WEc0Z0lDQWdJQ0JqWVhObElDZGlhVzVoY25rbk9seHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2JHVnVYRzRnSUNBZ0lDQmpZWE5sSUNkMWRHWTRKenBjYmlBZ0lDQWdJR05oYzJVZ0ozVjBaaTA0SnpwY2JpQWdJQ0FnSUdOaGMyVWdkVzVrWldacGJtVmtPbHh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdkWFJtT0ZSdlFubDBaWE1vYzNSeWFXNW5LUzVzWlc1bmRHaGNiaUFnSUNBZ0lHTmhjMlVnSjNWamN6SW5PbHh1SUNBZ0lDQWdZMkZ6WlNBbmRXTnpMVEluT2x4dUlDQWdJQ0FnWTJGelpTQW5kWFJtTVRac1pTYzZYRzRnSUNBZ0lDQmpZWE5sSUNkMWRHWXRNVFpzWlNjNlhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCc1pXNGdLaUF5WEc0Z0lDQWdJQ0JqWVhObElDZG9aWGduT2x4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnYkdWdUlENCtQaUF4WEc0Z0lDQWdJQ0JqWVhObElDZGlZWE5sTmpRbk9seHVJQ0FnSUNBZ0lDQnlaWFIxY200Z1ltRnpaVFkwVkc5Q2VYUmxjeWh6ZEhKcGJtY3BMbXhsYm1kMGFGeHVJQ0FnSUNBZ1pHVm1ZWFZzZERwY2JpQWdJQ0FnSUNBZ2FXWWdLR3h2ZDJWeVpXUkRZWE5sS1NCeVpYUjFjbTRnZFhSbU9GUnZRbmwwWlhNb2MzUnlhVzVuS1M1c1pXNW5kR2dnTHk4Z1lYTnpkVzFsSUhWMFpqaGNiaUFnSUNBZ0lDQWdaVzVqYjJScGJtY2dQU0FvSnljZ0t5QmxibU52WkdsdVp5a3VkRzlNYjNkbGNrTmhjMlVvS1Z4dUlDQWdJQ0FnSUNCc2IzZGxjbVZrUTJGelpTQTlJSFJ5ZFdWY2JpQWdJQ0I5WEc0Z0lIMWNibjFjYmtKMVptWmxjaTVpZVhSbFRHVnVaM1JvSUQwZ1lubDBaVXhsYm1kMGFGeHVYRzVtZFc1amRHbHZiaUJ6Ykc5M1ZHOVRkSEpwYm1jZ0tHVnVZMjlrYVc1bkxDQnpkR0Z5ZEN3Z1pXNWtLU0I3WEc0Z0lIWmhjaUJzYjNkbGNtVmtRMkZ6WlNBOUlHWmhiSE5sWEc1Y2JpQWdMeThnVG04Z2JtVmxaQ0IwYnlCMlpYSnBabmtnZEdoaGRDQmNJblJvYVhNdWJHVnVaM1JvSUR3OUlFMUJXRjlWU1U1VU16SmNJaUJ6YVc1alpTQnBkQ2R6SUdFZ2NtVmhaQzF2Ym14NVhHNGdJQzh2SUhCeWIzQmxjblI1SUc5bUlHRWdkSGx3WldRZ1lYSnlZWGt1WEc1Y2JpQWdMeThnVkdocGN5QmlaV2hoZG1WeklHNWxhWFJvWlhJZ2JHbHJaU0JUZEhKcGJtY2dibTl5SUZWcGJuUTRRWEp5WVhrZ2FXNGdkR2hoZENCM1pTQnpaWFFnYzNSaGNuUXZaVzVrWEc0Z0lDOHZJSFJ2SUhSb1pXbHlJSFZ3Y0dWeUwyeHZkMlZ5SUdKdmRXNWtjeUJwWmlCMGFHVWdkbUZzZFdVZ2NHRnpjMlZrSUdseklHOTFkQ0J2WmlCeVlXNW5aUzVjYmlBZ0x5OGdkVzVrWldacGJtVmtJR2x6SUdoaGJtUnNaV1FnYzNCbFkybGhiR3g1SUdGeklIQmxjaUJGUTAxQkxUSTJNaUEyZEdnZ1JXUnBkR2x2Yml4Y2JpQWdMeThnVTJWamRHbHZiaUF4TXk0ekxqTXVOeUJTZFc1MGFXMWxJRk5sYldGdWRHbGpjem9nUzJWNVpXUkNhVzVrYVc1blNXNXBkR2xoYkdsNllYUnBiMjR1WEc0Z0lHbG1JQ2h6ZEdGeWRDQTlQVDBnZFc1a1pXWnBibVZrSUh4OElITjBZWEowSUR3Z01Da2dlMXh1SUNBZ0lITjBZWEowSUQwZ01GeHVJQ0I5WEc0Z0lDOHZJRkpsZEhWeWJpQmxZWEpzZVNCcFppQnpkR0Z5ZENBK0lIUm9hWE11YkdWdVozUm9MaUJFYjI1bElHaGxjbVVnZEc4Z2NISmxkbVZ1ZENCd2IzUmxiblJwWVd3Z2RXbHVkRE15WEc0Z0lDOHZJR052WlhKamFXOXVJR1poYVd3Z1ltVnNiM2N1WEc0Z0lHbG1JQ2h6ZEdGeWRDQStJSFJvYVhNdWJHVnVaM1JvS1NCN1hHNGdJQ0FnY21WMGRYSnVJQ2NuWEc0Z0lIMWNibHh1SUNCcFppQW9aVzVrSUQwOVBTQjFibVJsWm1sdVpXUWdmSHdnWlc1a0lENGdkR2hwY3k1c1pXNW5kR2dwSUh0Y2JpQWdJQ0JsYm1RZ1BTQjBhR2x6TG14bGJtZDBhRnh1SUNCOVhHNWNiaUFnYVdZZ0tHVnVaQ0E4UFNBd0tTQjdYRzRnSUNBZ2NtVjBkWEp1SUNjblhHNGdJSDFjYmx4dUlDQXZMeUJHYjNKalpTQmpiMlZ5YzJsdmJpQjBieUIxYVc1ME16SXVJRlJvYVhNZ2QybHNiQ0JoYkhOdklHTnZaWEpqWlNCbVlXeHpaWGt2VG1GT0lIWmhiSFZsY3lCMGJ5QXdMbHh1SUNCbGJtUWdQajQrUFNBd1hHNGdJSE4wWVhKMElENCtQajBnTUZ4dVhHNGdJR2xtSUNobGJtUWdQRDBnYzNSaGNuUXBJSHRjYmlBZ0lDQnlaWFIxY200Z0p5ZGNiaUFnZlZ4dVhHNGdJR2xtSUNnaFpXNWpiMlJwYm1jcElHVnVZMjlrYVc1bklEMGdKM1YwWmpnblhHNWNiaUFnZDJocGJHVWdLSFJ5ZFdVcElIdGNiaUFnSUNCemQybDBZMmdnS0dWdVkyOWthVzVuS1NCN1hHNGdJQ0FnSUNCallYTmxJQ2RvWlhnbk9seHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2FHVjRVMnhwWTJVb2RHaHBjeXdnYzNSaGNuUXNJR1Z1WkNsY2JseHVJQ0FnSUNBZ1kyRnpaU0FuZFhSbU9DYzZYRzRnSUNBZ0lDQmpZWE5sSUNkMWRHWXRPQ2M2WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUIxZEdZNFUyeHBZMlVvZEdocGN5d2djM1JoY25Rc0lHVnVaQ2xjYmx4dUlDQWdJQ0FnWTJGelpTQW5ZWE5qYVdrbk9seHVJQ0FnSUNBZ0lDQnlaWFIxY200Z1lYTmphV2xUYkdsalpTaDBhR2x6TENCemRHRnlkQ3dnWlc1a0tWeHVYRzRnSUNBZ0lDQmpZWE5sSUNkc1lYUnBiakVuT2x4dUlDQWdJQ0FnWTJGelpTQW5ZbWx1WVhKNUp6cGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlHeGhkR2x1TVZOc2FXTmxLSFJvYVhNc0lITjBZWEowTENCbGJtUXBYRzVjYmlBZ0lDQWdJR05oYzJVZ0oySmhjMlUyTkNjNlhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCaVlYTmxOalJUYkdsalpTaDBhR2x6TENCemRHRnlkQ3dnWlc1a0tWeHVYRzRnSUNBZ0lDQmpZWE5sSUNkMVkzTXlKenBjYmlBZ0lDQWdJR05oYzJVZ0ozVmpjeTB5SnpwY2JpQWdJQ0FnSUdOaGMyVWdKM1YwWmpFMmJHVW5PbHh1SUNBZ0lDQWdZMkZ6WlNBbmRYUm1MVEUyYkdVbk9seHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2RYUm1NVFpzWlZOc2FXTmxLSFJvYVhNc0lITjBZWEowTENCbGJtUXBYRzVjYmlBZ0lDQWdJR1JsWm1GMWJIUTZYRzRnSUNBZ0lDQWdJR2xtSUNoc2IzZGxjbVZrUTJGelpTa2dkR2h5YjNjZ2JtVjNJRlI1Y0dWRmNuSnZjaWduVlc1cmJtOTNiaUJsYm1OdlpHbHVaem9nSnlBcklHVnVZMjlrYVc1bktWeHVJQ0FnSUNBZ0lDQmxibU52WkdsdVp5QTlJQ2hsYm1OdlpHbHVaeUFySUNjbktTNTBiMHh2ZDJWeVEyRnpaU2dwWEc0Z0lDQWdJQ0FnSUd4dmQyVnlaV1JEWVhObElEMGdkSEoxWlZ4dUlDQWdJSDFjYmlBZ2ZWeHVmVnh1WEc0dkx5QlVhR1VnY0hKdmNHVnlkSGtnYVhNZ2RYTmxaQ0JpZVNCZ1FuVm1abVZ5TG1selFuVm1abVZ5WUNCaGJtUWdZR2x6TFdKMVptWmxjbUFnS0dsdUlGTmhabUZ5YVNBMUxUY3BJSFJ2SUdSbGRHVmpkRnh1THk4Z1FuVm1abVZ5SUdsdWMzUmhibU5sY3k1Y2JrSjFabVpsY2k1d2NtOTBiM1I1Y0dVdVgybHpRblZtWm1WeUlEMGdkSEoxWlZ4dVhHNW1kVzVqZEdsdmJpQnpkMkZ3SUNoaUxDQnVMQ0J0S1NCN1hHNGdJSFpoY2lCcElEMGdZbHR1WFZ4dUlDQmlXMjVkSUQwZ1lsdHRYVnh1SUNCaVcyMWRJRDBnYVZ4dWZWeHVYRzVDZFdabVpYSXVjSEp2ZEc5MGVYQmxMbk4zWVhBeE5pQTlJR1oxYm1OMGFXOXVJSE4zWVhBeE5pQW9LU0I3WEc0Z0lIWmhjaUJzWlc0Z1BTQjBhR2x6TG14bGJtZDBhRnh1SUNCcFppQW9iR1Z1SUNVZ01pQWhQVDBnTUNrZ2UxeHVJQ0FnSUhSb2NtOTNJRzVsZHlCU1lXNW5aVVZ5Y205eUtDZENkV1ptWlhJZ2MybDZaU0J0ZFhOMElHSmxJR0VnYlhWc2RHbHdiR1VnYjJZZ01UWXRZbWwwY3ljcFhHNGdJSDFjYmlBZ1ptOXlJQ2gyWVhJZ2FTQTlJREE3SUdrZ1BDQnNaVzQ3SUdrZ0t6MGdNaWtnZTF4dUlDQWdJSE4zWVhBb2RHaHBjeXdnYVN3Z2FTQXJJREVwWEc0Z0lIMWNiaUFnY21WMGRYSnVJSFJvYVhOY2JuMWNibHh1UW5WbVptVnlMbkJ5YjNSdmRIbHdaUzV6ZDJGd016SWdQU0JtZFc1amRHbHZiaUJ6ZDJGd016SWdLQ2tnZTF4dUlDQjJZWElnYkdWdUlEMGdkR2hwY3k1c1pXNW5kR2hjYmlBZ2FXWWdLR3hsYmlBbElEUWdJVDA5SURBcElIdGNiaUFnSUNCMGFISnZkeUJ1WlhjZ1VtRnVaMlZGY25KdmNpZ25RblZtWm1WeUlITnBlbVVnYlhWemRDQmlaU0JoSUcxMWJIUnBjR3hsSUc5bUlETXlMV0pwZEhNbktWeHVJQ0I5WEc0Z0lHWnZjaUFvZG1GeUlHa2dQU0F3T3lCcElEd2diR1Z1T3lCcElDczlJRFFwSUh0Y2JpQWdJQ0J6ZDJGd0tIUm9hWE1zSUdrc0lHa2dLeUF6S1Z4dUlDQWdJSE4zWVhBb2RHaHBjeXdnYVNBcklERXNJR2tnS3lBeUtWeHVJQ0I5WEc0Z0lISmxkSFZ5YmlCMGFHbHpYRzU5WEc1Y2JrSjFabVpsY2k1d2NtOTBiM1I1Y0dVdWMzZGhjRFkwSUQwZ1puVnVZM1JwYjI0Z2MzZGhjRFkwSUNncElIdGNiaUFnZG1GeUlHeGxiaUE5SUhSb2FYTXViR1Z1WjNSb1hHNGdJR2xtSUNoc1pXNGdKU0E0SUNFOVBTQXdLU0I3WEc0Z0lDQWdkR2h5YjNjZ2JtVjNJRkpoYm1kbFJYSnliM0lvSjBKMVptWmxjaUJ6YVhwbElHMTFjM1FnWW1VZ1lTQnRkV3gwYVhCc1pTQnZaaUEyTkMxaWFYUnpKeWxjYmlBZ2ZWeHVJQ0JtYjNJZ0tIWmhjaUJwSUQwZ01Ec2dhU0E4SUd4bGJqc2dhU0FyUFNBNEtTQjdYRzRnSUNBZ2MzZGhjQ2gwYUdsekxDQnBMQ0JwSUNzZ055bGNiaUFnSUNCemQyRndLSFJvYVhNc0lHa2dLeUF4TENCcElDc2dOaWxjYmlBZ0lDQnpkMkZ3S0hSb2FYTXNJR2tnS3lBeUxDQnBJQ3NnTlNsY2JpQWdJQ0J6ZDJGd0tIUm9hWE1zSUdrZ0t5QXpMQ0JwSUNzZ05DbGNiaUFnZlZ4dUlDQnlaWFIxY200Z2RHaHBjMXh1ZlZ4dVhHNUNkV1ptWlhJdWNISnZkRzkwZVhCbExuUnZVM1J5YVc1bklEMGdablZ1WTNScGIyNGdkRzlUZEhKcGJtY2dLQ2tnZTF4dUlDQjJZWElnYkdWdVozUm9JRDBnZEdocGN5NXNaVzVuZEdnZ2ZDQXdYRzRnSUdsbUlDaHNaVzVuZEdnZ1BUMDlJREFwSUhKbGRIVnliaUFuSjF4dUlDQnBaaUFvWVhKbmRXMWxiblJ6TG14bGJtZDBhQ0E5UFQwZ01Da2djbVYwZFhKdUlIVjBaamhUYkdsalpTaDBhR2x6TENBd0xDQnNaVzVuZEdncFhHNGdJSEpsZEhWeWJpQnpiRzkzVkc5VGRISnBibWN1WVhCd2JIa29kR2hwY3l3Z1lYSm5kVzFsYm5SektWeHVmVnh1WEc1Q2RXWm1aWEl1Y0hKdmRHOTBlWEJsTG1WeGRXRnNjeUE5SUdaMWJtTjBhVzl1SUdWeGRXRnNjeUFvWWlrZ2UxeHVJQ0JwWmlBb0lVSjFabVpsY2k1cGMwSjFabVpsY2loaUtTa2dkR2h5YjNjZ2JtVjNJRlI1Y0dWRmNuSnZjaWduUVhKbmRXMWxiblFnYlhWemRDQmlaU0JoSUVKMVptWmxjaWNwWEc0Z0lHbG1JQ2gwYUdseklEMDlQU0JpS1NCeVpYUjFjbTRnZEhKMVpWeHVJQ0J5WlhSMWNtNGdRblZtWm1WeUxtTnZiWEJoY21Vb2RHaHBjeXdnWWlrZ1BUMDlJREJjYm4xY2JseHVRblZtWm1WeUxuQnliM1J2ZEhsd1pTNXBibk53WldOMElEMGdablZ1WTNScGIyNGdhVzV6Y0dWamRDQW9LU0I3WEc0Z0lIWmhjaUJ6ZEhJZ1BTQW5KMXh1SUNCMllYSWdiV0Y0SUQwZ1pYaHdiM0owY3k1SlRsTlFSVU5VWDAxQldGOUNXVlJGVTF4dUlDQnBaaUFvZEdocGN5NXNaVzVuZEdnZ1BpQXdLU0I3WEc0Z0lDQWdjM1J5SUQwZ2RHaHBjeTUwYjFOMGNtbHVaeWduYUdWNEp5d2dNQ3dnYldGNEtTNXRZWFJqYUNndkxuc3lmUzluS1M1cWIybHVLQ2NnSnlsY2JpQWdJQ0JwWmlBb2RHaHBjeTVzWlc1bmRHZ2dQaUJ0WVhncElITjBjaUFyUFNBbklDNHVMaUFuWEc0Z0lIMWNiaUFnY21WMGRYSnVJQ2M4UW5WbVptVnlJQ2NnS3lCemRISWdLeUFuUGlkY2JuMWNibHh1UW5WbVptVnlMbkJ5YjNSdmRIbHdaUzVqYjIxd1lYSmxJRDBnWm5WdVkzUnBiMjRnWTI5dGNHRnlaU0FvZEdGeVoyVjBMQ0J6ZEdGeWRDd2daVzVrTENCMGFHbHpVM1JoY25Rc0lIUm9hWE5GYm1RcElIdGNiaUFnYVdZZ0tDRkNkV1ptWlhJdWFYTkNkV1ptWlhJb2RHRnlaMlYwS1NrZ2UxeHVJQ0FnSUhSb2NtOTNJRzVsZHlCVWVYQmxSWEp5YjNJb0owRnlaM1Z0Wlc1MElHMTFjM1FnWW1VZ1lTQkNkV1ptWlhJbktWeHVJQ0I5WEc1Y2JpQWdhV1lnS0hOMFlYSjBJRDA5UFNCMWJtUmxabWx1WldRcElIdGNiaUFnSUNCemRHRnlkQ0E5SURCY2JpQWdmVnh1SUNCcFppQW9aVzVrSUQwOVBTQjFibVJsWm1sdVpXUXBJSHRjYmlBZ0lDQmxibVFnUFNCMFlYSm5aWFFnUHlCMFlYSm5aWFF1YkdWdVozUm9JRG9nTUZ4dUlDQjlYRzRnSUdsbUlDaDBhR2x6VTNSaGNuUWdQVDA5SUhWdVpHVm1hVzVsWkNrZ2UxeHVJQ0FnSUhSb2FYTlRkR0Z5ZENBOUlEQmNiaUFnZlZ4dUlDQnBaaUFvZEdocGMwVnVaQ0E5UFQwZ2RXNWtaV1pwYm1Wa0tTQjdYRzRnSUNBZ2RHaHBjMFZ1WkNBOUlIUm9hWE11YkdWdVozUm9YRzRnSUgxY2JseHVJQ0JwWmlBb2MzUmhjblFnUENBd0lIeDhJR1Z1WkNBK0lIUmhjbWRsZEM1c1pXNW5kR2dnZkh3Z2RHaHBjMU4wWVhKMElEd2dNQ0I4ZkNCMGFHbHpSVzVrSUQ0Z2RHaHBjeTVzWlc1bmRHZ3BJSHRjYmlBZ0lDQjBhSEp2ZHlCdVpYY2dVbUZ1WjJWRmNuSnZjaWduYjNWMElHOW1JSEpoYm1kbElHbHVaR1Y0SnlsY2JpQWdmVnh1WEc0Z0lHbG1JQ2gwYUdselUzUmhjblFnUGowZ2RHaHBjMFZ1WkNBbUppQnpkR0Z5ZENBK1BTQmxibVFwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdNRnh1SUNCOVhHNGdJR2xtSUNoMGFHbHpVM1JoY25RZ1BqMGdkR2hwYzBWdVpDa2dlMXh1SUNBZ0lISmxkSFZ5YmlBdE1WeHVJQ0I5WEc0Z0lHbG1JQ2h6ZEdGeWRDQStQU0JsYm1RcElIdGNiaUFnSUNCeVpYUjFjbTRnTVZ4dUlDQjlYRzVjYmlBZ2MzUmhjblFnUGo0K1BTQXdYRzRnSUdWdVpDQStQajQ5SURCY2JpQWdkR2hwYzFOMFlYSjBJRDQrUGowZ01GeHVJQ0IwYUdselJXNWtJRDQrUGowZ01GeHVYRzRnSUdsbUlDaDBhR2x6SUQwOVBTQjBZWEpuWlhRcElISmxkSFZ5YmlBd1hHNWNiaUFnZG1GeUlIZ2dQU0IwYUdselJXNWtJQzBnZEdocGMxTjBZWEowWEc0Z0lIWmhjaUI1SUQwZ1pXNWtJQzBnYzNSaGNuUmNiaUFnZG1GeUlHeGxiaUE5SUUxaGRHZ3ViV2x1S0hnc0lIa3BYRzVjYmlBZ2RtRnlJSFJvYVhORGIzQjVJRDBnZEdocGN5NXpiR2xqWlNoMGFHbHpVM1JoY25Rc0lIUm9hWE5GYm1RcFhHNGdJSFpoY2lCMFlYSm5aWFJEYjNCNUlEMGdkR0Z5WjJWMExuTnNhV05sS0hOMFlYSjBMQ0JsYm1RcFhHNWNiaUFnWm05eUlDaDJZWElnYVNBOUlEQTdJR2tnUENCc1pXNDdJQ3NyYVNrZ2UxeHVJQ0FnSUdsbUlDaDBhR2x6UTI5d2VWdHBYU0FoUFQwZ2RHRnlaMlYwUTI5d2VWdHBYU2tnZTF4dUlDQWdJQ0FnZUNBOUlIUm9hWE5EYjNCNVcybGRYRzRnSUNBZ0lDQjVJRDBnZEdGeVoyVjBRMjl3ZVZ0cFhWeHVJQ0FnSUNBZ1luSmxZV3RjYmlBZ0lDQjlYRzRnSUgxY2JseHVJQ0JwWmlBb2VDQThJSGtwSUhKbGRIVnliaUF0TVZ4dUlDQnBaaUFvZVNBOElIZ3BJSEpsZEhWeWJpQXhYRzRnSUhKbGRIVnliaUF3WEc1OVhHNWNiaTh2SUVacGJtUnpJR1ZwZEdobGNpQjBhR1VnWm1seWMzUWdhVzVrWlhnZ2IyWWdZSFpoYkdBZ2FXNGdZR0oxWm1abGNtQWdZWFFnYjJabWMyVjBJRDQ5SUdCaWVYUmxUMlptYzJWMFlDeGNiaTh2SUU5U0lIUm9aU0JzWVhOMElHbHVaR1Y0SUc5bUlHQjJZV3hnSUdsdUlHQmlkV1ptWlhKZ0lHRjBJRzltWm5ObGRDQThQU0JnWW5sMFpVOW1abk5sZEdBdVhHNHZMMXh1THk4Z1FYSm5kVzFsYm5Sek9seHVMeThnTFNCaWRXWm1aWElnTFNCaElFSjFabVpsY2lCMGJ5QnpaV0Z5WTJoY2JpOHZJQzBnZG1Gc0lDMGdZU0J6ZEhKcGJtY3NJRUoxWm1abGNpd2diM0lnYm5WdFltVnlYRzR2THlBdElHSjVkR1ZQWm1aelpYUWdMU0JoYmlCcGJtUmxlQ0JwYm5SdklHQmlkV1ptWlhKZ095QjNhV3hzSUdKbElHTnNZVzF3WldRZ2RHOGdZVzRnYVc1ME16SmNiaTh2SUMwZ1pXNWpiMlJwYm1jZ0xTQmhiaUJ2Y0hScGIyNWhiQ0JsYm1OdlpHbHVaeXdnY21Wc1pYWmhiblFnYVhNZ2RtRnNJR2x6SUdFZ2MzUnlhVzVuWEc0dkx5QXRJR1JwY2lBdElIUnlkV1VnWm05eUlHbHVaR1Y0VDJZc0lHWmhiSE5sSUdadmNpQnNZWE4wU1c1a1pYaFBabHh1Wm5WdVkzUnBiMjRnWW1sa2FYSmxZM1JwYjI1aGJFbHVaR1Y0VDJZZ0tHSjFabVpsY2l3Z2RtRnNMQ0JpZVhSbFQyWm1jMlYwTENCbGJtTnZaR2x1Wnl3Z1pHbHlLU0I3WEc0Z0lDOHZJRVZ0Y0hSNUlHSjFabVpsY2lCdFpXRnVjeUJ1YnlCdFlYUmphRnh1SUNCcFppQW9ZblZtWm1WeUxteGxibWQwYUNBOVBUMGdNQ2tnY21WMGRYSnVJQzB4WEc1Y2JpQWdMeThnVG05eWJXRnNhWHBsSUdKNWRHVlBabVp6WlhSY2JpQWdhV1lnS0hSNWNHVnZaaUJpZVhSbFQyWm1jMlYwSUQwOVBTQW5jM1J5YVc1bkp5a2dlMXh1SUNBZ0lHVnVZMjlrYVc1bklEMGdZbmwwWlU5bVpuTmxkRnh1SUNBZ0lHSjVkR1ZQWm1aelpYUWdQU0F3WEc0Z0lIMGdaV3h6WlNCcFppQW9ZbmwwWlU5bVpuTmxkQ0ErSURCNE4yWm1abVptWm1ZcElIdGNiaUFnSUNCaWVYUmxUMlptYzJWMElEMGdNSGczWm1abVptWm1abHh1SUNCOUlHVnNjMlVnYVdZZ0tHSjVkR1ZQWm1aelpYUWdQQ0F0TUhnNE1EQXdNREF3TUNrZ2UxeHVJQ0FnSUdKNWRHVlBabVp6WlhRZ1BTQXRNSGc0TURBd01EQXdNRnh1SUNCOVhHNGdJR0o1ZEdWUFptWnpaWFFnUFNBcllubDBaVTltWm5ObGRDQWdMeThnUTI5bGNtTmxJSFJ2SUU1MWJXSmxjaTVjYmlBZ2FXWWdLR2x6VG1GT0tHSjVkR1ZQWm1aelpYUXBLU0I3WEc0Z0lDQWdMeThnWW5sMFpVOW1abk5sZERvZ2FYUWdhWFFuY3lCMWJtUmxabWx1WldRc0lHNTFiR3dzSUU1aFRpd2dYQ0ptYjI5Y0lpd2daWFJqTENCelpXRnlZMmdnZDJodmJHVWdZblZtWm1WeVhHNGdJQ0FnWW5sMFpVOW1abk5sZENBOUlHUnBjaUEvSURBZ09pQW9ZblZtWm1WeUxteGxibWQwYUNBdElERXBYRzRnSUgxY2JseHVJQ0F2THlCT2IzSnRZV3hwZW1VZ1lubDBaVTltWm5ObGREb2dibVZuWVhScGRtVWdiMlptYzJWMGN5QnpkR0Z5ZENCbWNtOXRJSFJvWlNCbGJtUWdiMllnZEdobElHSjFabVpsY2x4dUlDQnBaaUFvWW5sMFpVOW1abk5sZENBOElEQXBJR0o1ZEdWUFptWnpaWFFnUFNCaWRXWm1aWEl1YkdWdVozUm9JQ3NnWW5sMFpVOW1abk5sZEZ4dUlDQnBaaUFvWW5sMFpVOW1abk5sZENBK1BTQmlkV1ptWlhJdWJHVnVaM1JvS1NCN1hHNGdJQ0FnYVdZZ0tHUnBjaWtnY21WMGRYSnVJQzB4WEc0Z0lDQWdaV3h6WlNCaWVYUmxUMlptYzJWMElEMGdZblZtWm1WeUxteGxibWQwYUNBdElERmNiaUFnZlNCbGJITmxJR2xtSUNoaWVYUmxUMlptYzJWMElEd2dNQ2tnZTF4dUlDQWdJR2xtSUNoa2FYSXBJR0o1ZEdWUFptWnpaWFFnUFNBd1hHNGdJQ0FnWld4elpTQnlaWFIxY200Z0xURmNiaUFnZlZ4dVhHNGdJQzh2SUU1dmNtMWhiR2w2WlNCMllXeGNiaUFnYVdZZ0tIUjVjR1Z2WmlCMllXd2dQVDA5SUNkemRISnBibWNuS1NCN1hHNGdJQ0FnZG1Gc0lEMGdRblZtWm1WeUxtWnliMjBvZG1Gc0xDQmxibU52WkdsdVp5bGNiaUFnZlZ4dVhHNGdJQzh2SUVacGJtRnNiSGtzSUhObFlYSmphQ0JsYVhSb1pYSWdhVzVrWlhoUFppQW9hV1lnWkdseUlHbHpJSFJ5ZFdVcElHOXlJR3hoYzNSSmJtUmxlRTltWEc0Z0lHbG1JQ2hDZFdabVpYSXVhWE5DZFdabVpYSW9kbUZzS1NrZ2UxeHVJQ0FnSUM4dklGTndaV05wWVd3Z1kyRnpaVG9nYkc5dmEybHVaeUJtYjNJZ1pXMXdkSGtnYzNSeWFXNW5MMkoxWm1abGNpQmhiSGRoZVhNZ1ptRnBiSE5jYmlBZ0lDQnBaaUFvZG1Gc0xteGxibWQwYUNBOVBUMGdNQ2tnZTF4dUlDQWdJQ0FnY21WMGRYSnVJQzB4WEc0Z0lDQWdmVnh1SUNBZ0lISmxkSFZ5YmlCaGNuSmhlVWx1WkdWNFQyWW9ZblZtWm1WeUxDQjJZV3dzSUdKNWRHVlBabVp6WlhRc0lHVnVZMjlrYVc1bkxDQmthWElwWEc0Z0lIMGdaV3h6WlNCcFppQW9kSGx3Wlc5bUlIWmhiQ0E5UFQwZ0oyNTFiV0psY2ljcElIdGNiaUFnSUNCMllXd2dQU0IyWVd3Z0ppQXdlRVpHSUM4dklGTmxZWEpqYUNCbWIzSWdZU0JpZVhSbElIWmhiSFZsSUZzd0xUSTFOVjFjYmlBZ0lDQnBaaUFvUW5WbVptVnlMbFJaVUVWRVgwRlNVa0ZaWDFOVlVGQlBVbFFnSmlaY2JpQWdJQ0FnSUNBZ2RIbHdaVzltSUZWcGJuUTRRWEp5WVhrdWNISnZkRzkwZVhCbExtbHVaR1Y0VDJZZ1BUMDlJQ2RtZFc1amRHbHZiaWNwSUh0Y2JpQWdJQ0FnSUdsbUlDaGthWElwSUh0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUZWcGJuUTRRWEp5WVhrdWNISnZkRzkwZVhCbExtbHVaR1Y0VDJZdVkyRnNiQ2hpZFdabVpYSXNJSFpoYkN3Z1lubDBaVTltWm5ObGRDbGNiaUFnSUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCVmFXNTBPRUZ5Y21GNUxuQnliM1J2ZEhsd1pTNXNZWE4wU1c1a1pYaFBaaTVqWVd4c0tHSjFabVpsY2l3Z2RtRnNMQ0JpZVhSbFQyWm1jMlYwS1Z4dUlDQWdJQ0FnZlZ4dUlDQWdJSDFjYmlBZ0lDQnlaWFIxY200Z1lYSnlZWGxKYm1SbGVFOW1LR0oxWm1abGNpd2dXeUIyWVd3Z1hTd2dZbmwwWlU5bVpuTmxkQ3dnWlc1amIyUnBibWNzSUdScGNpbGNiaUFnZlZ4dVhHNGdJSFJvY205M0lHNWxkeUJVZVhCbFJYSnliM0lvSjNaaGJDQnRkWE4wSUdKbElITjBjbWx1Wnl3Z2JuVnRZbVZ5SUc5eUlFSjFabVpsY2ljcFhHNTlYRzVjYm1aMWJtTjBhVzl1SUdGeWNtRjVTVzVrWlhoUFppQW9ZWEp5TENCMllXd3NJR0o1ZEdWUFptWnpaWFFzSUdWdVkyOWthVzVuTENCa2FYSXBJSHRjYmlBZ2RtRnlJR2x1WkdWNFUybDZaU0E5SURGY2JpQWdkbUZ5SUdGeWNreGxibWQwYUNBOUlHRnljaTVzWlc1bmRHaGNiaUFnZG1GeUlIWmhiRXhsYm1kMGFDQTlJSFpoYkM1c1pXNW5kR2hjYmx4dUlDQnBaaUFvWlc1amIyUnBibWNnSVQwOUlIVnVaR1ZtYVc1bFpDa2dlMXh1SUNBZ0lHVnVZMjlrYVc1bklEMGdVM1J5YVc1bktHVnVZMjlrYVc1bktTNTBiMHh2ZDJWeVEyRnpaU2dwWEc0Z0lDQWdhV1lnS0dWdVkyOWthVzVuSUQwOVBTQW5kV056TWljZ2ZId2daVzVqYjJScGJtY2dQVDA5SUNkMVkzTXRNaWNnZkh4Y2JpQWdJQ0FnSUNBZ1pXNWpiMlJwYm1jZ1BUMDlJQ2QxZEdZeE5teGxKeUI4ZkNCbGJtTnZaR2x1WnlBOVBUMGdKM1YwWmkweE5teGxKeWtnZTF4dUlDQWdJQ0FnYVdZZ0tHRnljaTVzWlc1bmRHZ2dQQ0F5SUh4OElIWmhiQzVzWlc1bmRHZ2dQQ0F5S1NCN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlBdE1WeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ2FXNWtaWGhUYVhwbElEMGdNbHh1SUNBZ0lDQWdZWEp5VEdWdVozUm9JQzg5SURKY2JpQWdJQ0FnSUhaaGJFeGxibWQwYUNBdlBTQXlYRzRnSUNBZ0lDQmllWFJsVDJabWMyVjBJQzg5SURKY2JpQWdJQ0I5WEc0Z0lIMWNibHh1SUNCbWRXNWpkR2x2YmlCeVpXRmtJQ2hpZFdZc0lHa3BJSHRjYmlBZ0lDQnBaaUFvYVc1a1pYaFRhWHBsSUQwOVBTQXhLU0I3WEc0Z0lDQWdJQ0J5WlhSMWNtNGdZblZtVzJsZFhHNGdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJSEpsZEhWeWJpQmlkV1l1Y21WaFpGVkpiblF4TmtKRktHa2dLaUJwYm1SbGVGTnBlbVVwWEc0Z0lDQWdmVnh1SUNCOVhHNWNiaUFnZG1GeUlHbGNiaUFnYVdZZ0tHUnBjaWtnZTF4dUlDQWdJSFpoY2lCbWIzVnVaRWx1WkdWNElEMGdMVEZjYmlBZ0lDQm1iM0lnS0drZ1BTQmllWFJsVDJabWMyVjBPeUJwSUR3Z1lYSnlUR1Z1WjNSb095QnBLeXNwSUh0Y2JpQWdJQ0FnSUdsbUlDaHlaV0ZrS0dGeWNpd2dhU2tnUFQwOUlISmxZV1FvZG1Gc0xDQm1iM1Z1WkVsdVpHVjRJRDA5UFNBdE1TQS9JREFnT2lCcElDMGdabTkxYm1SSmJtUmxlQ2twSUh0Y2JpQWdJQ0FnSUNBZ2FXWWdLR1p2ZFc1a1NXNWtaWGdnUFQwOUlDMHhLU0JtYjNWdVpFbHVaR1Y0SUQwZ2FWeHVJQ0FnSUNBZ0lDQnBaaUFvYVNBdElHWnZkVzVrU1c1a1pYZ2dLeUF4SUQwOVBTQjJZV3hNWlc1bmRHZ3BJSEpsZEhWeWJpQm1iM1Z1WkVsdVpHVjRJQ29nYVc1a1pYaFRhWHBsWEc0Z0lDQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdJQ0JwWmlBb1ptOTFibVJKYm1SbGVDQWhQVDBnTFRFcElHa2dMVDBnYVNBdElHWnZkVzVrU1c1a1pYaGNiaUFnSUNBZ0lDQWdabTkxYm1SSmJtUmxlQ0E5SUMweFhHNGdJQ0FnSUNCOVhHNGdJQ0FnZlZ4dUlDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUdsbUlDaGllWFJsVDJabWMyVjBJQ3NnZG1Gc1RHVnVaM1JvSUQ0Z1lYSnlUR1Z1WjNSb0tTQmllWFJsVDJabWMyVjBJRDBnWVhKeVRHVnVaM1JvSUMwZ2RtRnNUR1Z1WjNSb1hHNGdJQ0FnWm05eUlDaHBJRDBnWW5sMFpVOW1abk5sZERzZ2FTQStQU0F3T3lCcExTMHBJSHRjYmlBZ0lDQWdJSFpoY2lCbWIzVnVaQ0E5SUhSeWRXVmNiaUFnSUNBZ0lHWnZjaUFvZG1GeUlHb2dQU0F3T3lCcUlEd2dkbUZzVEdWdVozUm9PeUJxS3lzcElIdGNiaUFnSUNBZ0lDQWdhV1lnS0hKbFlXUW9ZWEp5TENCcElDc2dhaWtnSVQwOUlISmxZV1FvZG1Gc0xDQnFLU2tnZTF4dUlDQWdJQ0FnSUNBZ0lHWnZkVzVrSUQwZ1ptRnNjMlZjYmlBZ0lDQWdJQ0FnSUNCaWNtVmhhMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0I5WEc0Z0lDQWdJQ0JwWmlBb1ptOTFibVFwSUhKbGRIVnliaUJwWEc0Z0lDQWdmVnh1SUNCOVhHNWNiaUFnY21WMGRYSnVJQzB4WEc1OVhHNWNia0oxWm1abGNpNXdjbTkwYjNSNWNHVXVhVzVqYkhWa1pYTWdQU0JtZFc1amRHbHZiaUJwYm1Oc2RXUmxjeUFvZG1Gc0xDQmllWFJsVDJabWMyVjBMQ0JsYm1OdlpHbHVaeWtnZTF4dUlDQnlaWFIxY200Z2RHaHBjeTVwYm1SbGVFOW1LSFpoYkN3Z1lubDBaVTltWm5ObGRDd2daVzVqYjJScGJtY3BJQ0U5UFNBdE1WeHVmVnh1WEc1Q2RXWm1aWEl1Y0hKdmRHOTBlWEJsTG1sdVpHVjRUMllnUFNCbWRXNWpkR2x2YmlCcGJtUmxlRTltSUNoMllXd3NJR0o1ZEdWUFptWnpaWFFzSUdWdVkyOWthVzVuS1NCN1hHNGdJSEpsZEhWeWJpQmlhV1JwY21WamRHbHZibUZzU1c1a1pYaFBaaWgwYUdsekxDQjJZV3dzSUdKNWRHVlBabVp6WlhRc0lHVnVZMjlrYVc1bkxDQjBjblZsS1Z4dWZWeHVYRzVDZFdabVpYSXVjSEp2ZEc5MGVYQmxMbXhoYzNSSmJtUmxlRTltSUQwZ1puVnVZM1JwYjI0Z2JHRnpkRWx1WkdWNFQyWWdLSFpoYkN3Z1lubDBaVTltWm5ObGRDd2daVzVqYjJScGJtY3BJSHRjYmlBZ2NtVjBkWEp1SUdKcFpHbHlaV04wYVc5dVlXeEpibVJsZUU5bUtIUm9hWE1zSUhaaGJDd2dZbmwwWlU5bVpuTmxkQ3dnWlc1amIyUnBibWNzSUdaaGJITmxLVnh1ZlZ4dVhHNW1kVzVqZEdsdmJpQm9aWGhYY21sMFpTQW9ZblZtTENCemRISnBibWNzSUc5bVpuTmxkQ3dnYkdWdVozUm9LU0I3WEc0Z0lHOW1abk5sZENBOUlFNTFiV0psY2lodlptWnpaWFFwSUh4OElEQmNiaUFnZG1GeUlISmxiV0ZwYm1sdVp5QTlJR0oxWmk1c1pXNW5kR2dnTFNCdlptWnpaWFJjYmlBZ2FXWWdLQ0ZzWlc1bmRHZ3BJSHRjYmlBZ0lDQnNaVzVuZEdnZ1BTQnlaVzFoYVc1cGJtZGNiaUFnZlNCbGJITmxJSHRjYmlBZ0lDQnNaVzVuZEdnZ1BTQk9kVzFpWlhJb2JHVnVaM1JvS1Z4dUlDQWdJR2xtSUNoc1pXNW5kR2dnUGlCeVpXMWhhVzVwYm1jcElIdGNiaUFnSUNBZ0lHeGxibWQwYUNBOUlISmxiV0ZwYm1sdVoxeHVJQ0FnSUgxY2JpQWdmVnh1WEc0Z0lDOHZJRzExYzNRZ1ltVWdZVzRnWlhabGJpQnVkVzFpWlhJZ2IyWWdaR2xuYVhSelhHNGdJSFpoY2lCemRISk1aVzRnUFNCemRISnBibWN1YkdWdVozUm9YRzRnSUdsbUlDaHpkSEpNWlc0Z0pTQXlJQ0U5UFNBd0tTQjBhSEp2ZHlCdVpYY2dWSGx3WlVWeWNtOXlLQ2RKYm5aaGJHbGtJR2hsZUNCemRISnBibWNuS1Z4dVhHNGdJR2xtSUNoc1pXNW5kR2dnUGlCemRISk1aVzRnTHlBeUtTQjdYRzRnSUNBZ2JHVnVaM1JvSUQwZ2MzUnlUR1Z1SUM4Z01seHVJQ0I5WEc0Z0lHWnZjaUFvZG1GeUlHa2dQU0F3T3lCcElEd2diR1Z1WjNSb095QXJLMmtwSUh0Y2JpQWdJQ0IyWVhJZ2NHRnljMlZrSUQwZ2NHRnljMlZKYm5Rb2MzUnlhVzVuTG5OMVluTjBjaWhwSUNvZ01pd2dNaWtzSURFMktWeHVJQ0FnSUdsbUlDaHBjMDVoVGlod1lYSnpaV1FwS1NCeVpYUjFjbTRnYVZ4dUlDQWdJR0oxWmx0dlptWnpaWFFnS3lCcFhTQTlJSEJoY25ObFpGeHVJQ0I5WEc0Z0lISmxkSFZ5YmlCcFhHNTlYRzVjYm1aMWJtTjBhVzl1SUhWMFpqaFhjbWwwWlNBb1luVm1MQ0J6ZEhKcGJtY3NJRzltWm5ObGRDd2diR1Z1WjNSb0tTQjdYRzRnSUhKbGRIVnliaUJpYkdsMFFuVm1abVZ5S0hWMFpqaFViMEo1ZEdWektITjBjbWx1Wnl3Z1luVm1MbXhsYm1kMGFDQXRJRzltWm5ObGRDa3NJR0oxWml3Z2IyWm1jMlYwTENCc1pXNW5kR2dwWEc1OVhHNWNibVoxYm1OMGFXOXVJR0Z6WTJscFYzSnBkR1VnS0dKMVppd2djM1J5YVc1bkxDQnZabVp6WlhRc0lHeGxibWQwYUNrZ2UxeHVJQ0J5WlhSMWNtNGdZbXhwZEVKMVptWmxjaWhoYzJOcGFWUnZRbmwwWlhNb2MzUnlhVzVuS1N3Z1luVm1MQ0J2Wm1aelpYUXNJR3hsYm1kMGFDbGNibjFjYmx4dVpuVnVZM1JwYjI0Z2JHRjBhVzR4VjNKcGRHVWdLR0oxWml3Z2MzUnlhVzVuTENCdlptWnpaWFFzSUd4bGJtZDBhQ2tnZTF4dUlDQnlaWFIxY200Z1lYTmphV2xYY21sMFpTaGlkV1lzSUhOMGNtbHVaeXdnYjJabWMyVjBMQ0JzWlc1bmRHZ3BYRzU5WEc1Y2JtWjFibU4wYVc5dUlHSmhjMlUyTkZkeWFYUmxJQ2hpZFdZc0lITjBjbWx1Wnl3Z2IyWm1jMlYwTENCc1pXNW5kR2dwSUh0Y2JpQWdjbVYwZFhKdUlHSnNhWFJDZFdabVpYSW9ZbUZ6WlRZMFZHOUNlWFJsY3loemRISnBibWNwTENCaWRXWXNJRzltWm5ObGRDd2diR1Z1WjNSb0tWeHVmVnh1WEc1bWRXNWpkR2x2YmlCMVkzTXlWM0pwZEdVZ0tHSjFaaXdnYzNSeWFXNW5MQ0J2Wm1aelpYUXNJR3hsYm1kMGFDa2dlMXh1SUNCeVpYUjFjbTRnWW14cGRFSjFabVpsY2loMWRHWXhObXhsVkc5Q2VYUmxjeWh6ZEhKcGJtY3NJR0oxWmk1c1pXNW5kR2dnTFNCdlptWnpaWFFwTENCaWRXWXNJRzltWm5ObGRDd2diR1Z1WjNSb0tWeHVmVnh1WEc1Q2RXWm1aWEl1Y0hKdmRHOTBlWEJsTG5keWFYUmxJRDBnWm5WdVkzUnBiMjRnZDNKcGRHVWdLSE4wY21sdVp5d2diMlptYzJWMExDQnNaVzVuZEdnc0lHVnVZMjlrYVc1bktTQjdYRzRnSUM4dklFSjFabVpsY2lOM2NtbDBaU2h6ZEhKcGJtY3BYRzRnSUdsbUlDaHZabVp6WlhRZ1BUMDlJSFZ1WkdWbWFXNWxaQ2tnZTF4dUlDQWdJR1Z1WTI5a2FXNW5JRDBnSjNWMFpqZ25YRzRnSUNBZ2JHVnVaM1JvSUQwZ2RHaHBjeTVzWlc1bmRHaGNiaUFnSUNCdlptWnpaWFFnUFNBd1hHNGdJQzh2SUVKMVptWmxjaU4zY21sMFpTaHpkSEpwYm1jc0lHVnVZMjlrYVc1bktWeHVJQ0I5SUdWc2MyVWdhV1lnS0d4bGJtZDBhQ0E5UFQwZ2RXNWtaV1pwYm1Wa0lDWW1JSFI1Y0dWdlppQnZabVp6WlhRZ1BUMDlJQ2R6ZEhKcGJtY25LU0I3WEc0Z0lDQWdaVzVqYjJScGJtY2dQU0J2Wm1aelpYUmNiaUFnSUNCc1pXNW5kR2dnUFNCMGFHbHpMbXhsYm1kMGFGeHVJQ0FnSUc5bVpuTmxkQ0E5SURCY2JpQWdMeThnUW5WbVptVnlJM2R5YVhSbEtITjBjbWx1Wnl3Z2IyWm1jMlYwV3l3Z2JHVnVaM1JvWFZzc0lHVnVZMjlrYVc1blhTbGNiaUFnZlNCbGJITmxJR2xtSUNocGMwWnBibWwwWlNodlptWnpaWFFwS1NCN1hHNGdJQ0FnYjJabWMyVjBJRDBnYjJabWMyVjBJSHdnTUZ4dUlDQWdJR2xtSUNocGMwWnBibWwwWlNoc1pXNW5kR2dwS1NCN1hHNGdJQ0FnSUNCc1pXNW5kR2dnUFNCc1pXNW5kR2dnZkNBd1hHNGdJQ0FnSUNCcFppQW9aVzVqYjJScGJtY2dQVDA5SUhWdVpHVm1hVzVsWkNrZ1pXNWpiMlJwYm1jZ1BTQW5kWFJtT0NkY2JpQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdaVzVqYjJScGJtY2dQU0JzWlc1bmRHaGNiaUFnSUNBZ0lHeGxibWQwYUNBOUlIVnVaR1ZtYVc1bFpGeHVJQ0FnSUgxY2JpQWdMeThnYkdWbllXTjVJSGR5YVhSbEtITjBjbWx1Wnl3Z1pXNWpiMlJwYm1jc0lHOW1abk5sZEN3Z2JHVnVaM1JvS1NBdElISmxiVzkyWlNCcGJpQjJNQzR4TTF4dUlDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUhSb2NtOTNJRzVsZHlCRmNuSnZjaWhjYmlBZ0lDQWdJQ2RDZFdabVpYSXVkM0pwZEdVb2MzUnlhVzVuTENCbGJtTnZaR2x1Wnl3Z2IyWm1jMlYwV3l3Z2JHVnVaM1JvWFNrZ2FYTWdibThnYkc5dVoyVnlJSE4xY0hCdmNuUmxaQ2RjYmlBZ0lDQXBYRzRnSUgxY2JseHVJQ0IyWVhJZ2NtVnRZV2x1YVc1bklEMGdkR2hwY3k1c1pXNW5kR2dnTFNCdlptWnpaWFJjYmlBZ2FXWWdLR3hsYm1kMGFDQTlQVDBnZFc1a1pXWnBibVZrSUh4OElHeGxibWQwYUNBK0lISmxiV0ZwYm1sdVp5a2diR1Z1WjNSb0lEMGdjbVZ0WVdsdWFXNW5YRzVjYmlBZ2FXWWdLQ2h6ZEhKcGJtY3ViR1Z1WjNSb0lENGdNQ0FtSmlBb2JHVnVaM1JvSUR3Z01DQjhmQ0J2Wm1aelpYUWdQQ0F3S1NrZ2ZId2diMlptYzJWMElENGdkR2hwY3k1c1pXNW5kR2dwSUh0Y2JpQWdJQ0IwYUhKdmR5QnVaWGNnVW1GdVoyVkZjbkp2Y2lnblFYUjBaVzF3ZENCMGJ5QjNjbWwwWlNCdmRYUnphV1JsSUdKMVptWmxjaUJpYjNWdVpITW5LVnh1SUNCOVhHNWNiaUFnYVdZZ0tDRmxibU52WkdsdVp5a2daVzVqYjJScGJtY2dQU0FuZFhSbU9DZGNibHh1SUNCMllYSWdiRzkzWlhKbFpFTmhjMlVnUFNCbVlXeHpaVnh1SUNCbWIzSWdLRHM3S1NCN1hHNGdJQ0FnYzNkcGRHTm9JQ2hsYm1OdlpHbHVaeWtnZTF4dUlDQWdJQ0FnWTJGelpTQW5hR1Y0SnpwY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUdobGVGZHlhWFJsS0hSb2FYTXNJSE4wY21sdVp5d2diMlptYzJWMExDQnNaVzVuZEdncFhHNWNiaUFnSUNBZ0lHTmhjMlVnSjNWMFpqZ25PbHh1SUNBZ0lDQWdZMkZ6WlNBbmRYUm1MVGduT2x4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnZFhSbU9GZHlhWFJsS0hSb2FYTXNJSE4wY21sdVp5d2diMlptYzJWMExDQnNaVzVuZEdncFhHNWNiaUFnSUNBZ0lHTmhjMlVnSjJGelkybHBKenBjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJR0Z6WTJscFYzSnBkR1VvZEdocGN5d2djM1J5YVc1bkxDQnZabVp6WlhRc0lHeGxibWQwYUNsY2JseHVJQ0FnSUNBZ1kyRnpaU0FuYkdGMGFXNHhKenBjYmlBZ0lDQWdJR05oYzJVZ0oySnBibUZ5ZVNjNlhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCc1lYUnBiakZYY21sMFpTaDBhR2x6TENCemRISnBibWNzSUc5bVpuTmxkQ3dnYkdWdVozUm9LVnh1WEc0Z0lDQWdJQ0JqWVhObElDZGlZWE5sTmpRbk9seHVJQ0FnSUNBZ0lDQXZMeUJYWVhKdWFXNW5PaUJ0WVhoTVpXNW5kR2dnYm05MElIUmhhMlZ1SUdsdWRHOGdZV05qYjNWdWRDQnBiaUJpWVhObE5qUlhjbWwwWlZ4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnWW1GelpUWTBWM0pwZEdVb2RHaHBjeXdnYzNSeWFXNW5MQ0J2Wm1aelpYUXNJR3hsYm1kMGFDbGNibHh1SUNBZ0lDQWdZMkZ6WlNBbmRXTnpNaWM2WEc0Z0lDQWdJQ0JqWVhObElDZDFZM010TWljNlhHNGdJQ0FnSUNCallYTmxJQ2QxZEdZeE5teGxKenBjYmlBZ0lDQWdJR05oYzJVZ0ozVjBaaTB4Tm14bEp6cGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlIVmpjekpYY21sMFpTaDBhR2x6TENCemRISnBibWNzSUc5bVpuTmxkQ3dnYkdWdVozUm9LVnh1WEc0Z0lDQWdJQ0JrWldaaGRXeDBPbHh1SUNBZ0lDQWdJQ0JwWmlBb2JHOTNaWEpsWkVOaGMyVXBJSFJvY205M0lHNWxkeUJVZVhCbFJYSnliM0lvSjFWdWEyNXZkMjRnWlc1amIyUnBibWM2SUNjZ0t5QmxibU52WkdsdVp5bGNiaUFnSUNBZ0lDQWdaVzVqYjJScGJtY2dQU0FvSnljZ0t5QmxibU52WkdsdVp5a3VkRzlNYjNkbGNrTmhjMlVvS1Z4dUlDQWdJQ0FnSUNCc2IzZGxjbVZrUTJGelpTQTlJSFJ5ZFdWY2JpQWdJQ0I5WEc0Z0lIMWNibjFjYmx4dVFuVm1abVZ5TG5CeWIzUnZkSGx3WlM1MGIwcFRUMDRnUFNCbWRXNWpkR2x2YmlCMGIwcFRUMDRnS0NrZ2UxeHVJQ0J5WlhSMWNtNGdlMXh1SUNBZ0lIUjVjR1U2SUNkQ2RXWm1aWEluTEZ4dUlDQWdJR1JoZEdFNklFRnljbUY1TG5CeWIzUnZkSGx3WlM1emJHbGpaUzVqWVd4c0tIUm9hWE11WDJGeWNpQjhmQ0IwYUdsekxDQXdLVnh1SUNCOVhHNTlYRzVjYm1aMWJtTjBhVzl1SUdKaGMyVTJORk5zYVdObElDaGlkV1lzSUhOMFlYSjBMQ0JsYm1RcElIdGNiaUFnYVdZZ0tITjBZWEowSUQwOVBTQXdJQ1ltSUdWdVpDQTlQVDBnWW5WbUxteGxibWQwYUNrZ2UxeHVJQ0FnSUhKbGRIVnliaUJpWVhObE5qUXVabkp2YlVKNWRHVkJjbkpoZVNoaWRXWXBYRzRnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdjbVYwZFhKdUlHSmhjMlUyTkM1bWNtOXRRbmwwWlVGeWNtRjVLR0oxWmk1emJHbGpaU2h6ZEdGeWRDd2daVzVrS1NsY2JpQWdmVnh1ZlZ4dVhHNW1kVzVqZEdsdmJpQjFkR1k0VTJ4cFkyVWdLR0oxWml3Z2MzUmhjblFzSUdWdVpDa2dlMXh1SUNCbGJtUWdQU0JOWVhSb0xtMXBiaWhpZFdZdWJHVnVaM1JvTENCbGJtUXBYRzRnSUhaaGNpQnlaWE1nUFNCYlhWeHVYRzRnSUhaaGNpQnBJRDBnYzNSaGNuUmNiaUFnZDJocGJHVWdLR2tnUENCbGJtUXBJSHRjYmlBZ0lDQjJZWElnWm1seWMzUkNlWFJsSUQwZ1luVm1XMmxkWEc0Z0lDQWdkbUZ5SUdOdlpHVlFiMmx1ZENBOUlHNTFiR3hjYmlBZ0lDQjJZWElnWW5sMFpYTlFaWEpUWlhGMVpXNWpaU0E5SUNobWFYSnpkRUo1ZEdVZ1BpQXdlRVZHS1NBL0lEUmNiaUFnSUNBZ0lEb2dLR1pwY25OMFFubDBaU0ErSURCNFJFWXBJRDhnTTF4dUlDQWdJQ0FnT2lBb1ptbHljM1JDZVhSbElENGdNSGhDUmlrZ1B5QXlYRzRnSUNBZ0lDQTZJREZjYmx4dUlDQWdJR2xtSUNocElDc2dZbmwwWlhOUVpYSlRaWEYxWlc1alpTQThQU0JsYm1RcElIdGNiaUFnSUNBZ0lIWmhjaUJ6WldOdmJtUkNlWFJsTENCMGFHbHlaRUo1ZEdVc0lHWnZkWEowYUVKNWRHVXNJSFJsYlhCRGIyUmxVRzlwYm5SY2JseHVJQ0FnSUNBZ2MzZHBkR05vSUNoaWVYUmxjMUJsY2xObGNYVmxibU5sS1NCN1hHNGdJQ0FnSUNBZ0lHTmhjMlVnTVRwY2JpQWdJQ0FnSUNBZ0lDQnBaaUFvWm1seWMzUkNlWFJsSUR3Z01IZzRNQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdZMjlrWlZCdmFXNTBJRDBnWm1seWMzUkNlWFJsWEc0Z0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQWdJR0p5WldGclhHNGdJQ0FnSUNBZ0lHTmhjMlVnTWpwY2JpQWdJQ0FnSUNBZ0lDQnpaV052Ym1SQ2VYUmxJRDBnWW5WbVcya2dLeUF4WFZ4dUlDQWdJQ0FnSUNBZ0lHbG1JQ2dvYzJWamIyNWtRbmwwWlNBbUlEQjRRekFwSUQwOVBTQXdlRGd3S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwWlcxd1EyOWtaVkJ2YVc1MElEMGdLR1pwY25OMFFubDBaU0FtSURCNE1VWXBJRHc4SURCNE5pQjhJQ2h6WldOdmJtUkNlWFJsSUNZZ01IZ3pSaWxjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2gwWlcxd1EyOWtaVkJ2YVc1MElENGdNSGczUmlrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNCamIyUmxVRzlwYm5RZ1BTQjBaVzF3UTI5a1pWQnZhVzUwWEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNBZ0lHSnlaV0ZyWEc0Z0lDQWdJQ0FnSUdOaGMyVWdNenBjYmlBZ0lDQWdJQ0FnSUNCelpXTnZibVJDZVhSbElEMGdZblZtVzJrZ0t5QXhYVnh1SUNBZ0lDQWdJQ0FnSUhSb2FYSmtRbmwwWlNBOUlHSjFabHRwSUNzZ01sMWNiaUFnSUNBZ0lDQWdJQ0JwWmlBb0tITmxZMjl1WkVKNWRHVWdKaUF3ZUVNd0tTQTlQVDBnTUhnNE1DQW1KaUFvZEdocGNtUkNlWFJsSUNZZ01IaERNQ2tnUFQwOUlEQjRPREFwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJsYlhCRGIyUmxVRzlwYm5RZ1BTQW9abWx5YzNSQ2VYUmxJQ1lnTUhoR0tTQThQQ0F3ZUVNZ2ZDQW9jMlZqYjI1a1FubDBaU0FtSURCNE0wWXBJRHc4SURCNE5pQjhJQ2gwYUdseVpFSjVkR1VnSmlBd2VETkdLVnh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLSFJsYlhCRGIyUmxVRzlwYm5RZ1BpQXdlRGRHUmlBbUppQW9kR1Z0Y0VOdlpHVlFiMmx1ZENBOElEQjRSRGd3TUNCOGZDQjBaVzF3UTI5a1pWQnZhVzUwSUQ0Z01IaEVSa1pHS1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNCamIyUmxVRzlwYm5RZ1BTQjBaVzF3UTI5a1pWQnZhVzUwWEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNBZ0lHSnlaV0ZyWEc0Z0lDQWdJQ0FnSUdOaGMyVWdORHBjYmlBZ0lDQWdJQ0FnSUNCelpXTnZibVJDZVhSbElEMGdZblZtVzJrZ0t5QXhYVnh1SUNBZ0lDQWdJQ0FnSUhSb2FYSmtRbmwwWlNBOUlHSjFabHRwSUNzZ01sMWNiaUFnSUNBZ0lDQWdJQ0JtYjNWeWRHaENlWFJsSUQwZ1luVm1XMmtnS3lBelhWeHVJQ0FnSUNBZ0lDQWdJR2xtSUNnb2MyVmpiMjVrUW5sMFpTQW1JREI0UXpBcElEMDlQU0F3ZURnd0lDWW1JQ2gwYUdseVpFSjVkR1VnSmlBd2VFTXdLU0E5UFQwZ01IZzRNQ0FtSmlBb1ptOTFjblJvUW5sMFpTQW1JREI0UXpBcElEMDlQU0F3ZURnd0tTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCMFpXMXdRMjlrWlZCdmFXNTBJRDBnS0dacGNuTjBRbmwwWlNBbUlEQjRSaWtnUER3Z01IZ3hNaUI4SUNoelpXTnZibVJDZVhSbElDWWdNSGd6UmlrZ1BEd2dNSGhESUh3Z0tIUm9hWEprUW5sMFpTQW1JREI0TTBZcElEdzhJREI0TmlCOElDaG1iM1Z5ZEdoQ2VYUmxJQ1lnTUhnelJpbGNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDaDBaVzF3UTI5a1pWQnZhVzUwSUQ0Z01IaEdSa1pHSUNZbUlIUmxiWEJEYjJSbFVHOXBiblFnUENBd2VERXhNREF3TUNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNCamIyUmxVRzlwYm5RZ1BTQjBaVzF3UTI5a1pWQnZhVzUwWEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnZlZ4dUlDQWdJSDFjYmx4dUlDQWdJR2xtSUNoamIyUmxVRzlwYm5RZ1BUMDlJRzUxYkd3cElIdGNiaUFnSUNBZ0lDOHZJSGRsSUdScFpDQnViM1FnWjJWdVpYSmhkR1VnWVNCMllXeHBaQ0JqYjJSbFVHOXBiblFnYzI4Z2FXNXpaWEowSUdGY2JpQWdJQ0FnSUM4dklISmxjR3hoWTJWdFpXNTBJR05vWVhJZ0tGVXJSa1pHUkNrZ1lXNWtJR0ZrZG1GdVkyVWdiMjVzZVNBeElHSjVkR1ZjYmlBZ0lDQWdJR052WkdWUWIybHVkQ0E5SURCNFJrWkdSRnh1SUNBZ0lDQWdZbmwwWlhOUVpYSlRaWEYxWlc1alpTQTlJREZjYmlBZ0lDQjlJR1ZzYzJVZ2FXWWdLR052WkdWUWIybHVkQ0ErSURCNFJrWkdSaWtnZTF4dUlDQWdJQ0FnTHk4Z1pXNWpiMlJsSUhSdklIVjBaakUySUNoemRYSnliMmRoZEdVZ2NHRnBjaUJrWVc1alpTbGNiaUFnSUNBZ0lHTnZaR1ZRYjJsdWRDQXRQU0F3ZURFd01EQXdYRzRnSUNBZ0lDQnlaWE11Y0hWemFDaGpiMlJsVUc5cGJuUWdQajQrSURFd0lDWWdNSGd6UmtZZ2ZDQXdlRVE0TURBcFhHNGdJQ0FnSUNCamIyUmxVRzlwYm5RZ1BTQXdlRVJETURBZ2ZDQmpiMlJsVUc5cGJuUWdKaUF3ZUROR1JseHVJQ0FnSUgxY2JseHVJQ0FnSUhKbGN5NXdkWE5vS0dOdlpHVlFiMmx1ZENsY2JpQWdJQ0JwSUNzOUlHSjVkR1Z6VUdWeVUyVnhkV1Z1WTJWY2JpQWdmVnh1WEc0Z0lISmxkSFZ5YmlCa1pXTnZaR1ZEYjJSbFVHOXBiblJ6UVhKeVlYa29jbVZ6S1Z4dWZWeHVYRzR2THlCQ1lYTmxaQ0J2YmlCb2RIUndPaTh2YzNSaFkydHZkbVZ5Wm14dmR5NWpiMjB2WVM4eU1qYzBOekkzTWk4Mk9EQTNORElzSUhSb1pTQmljbTkzYzJWeUlIZHBkR2hjYmk4dklIUm9aU0JzYjNkbGMzUWdiR2x0YVhRZ2FYTWdRMmh5YjIxbExDQjNhWFJvSURCNE1UQXdNREFnWVhKbmN5NWNiaTh2SUZkbElHZHZJREVnYldGbmJtbDBkV1JsSUd4bGMzTXNJR1p2Y2lCellXWmxkSGxjYm5aaGNpQk5RVmhmUVZKSFZVMUZUbFJUWDB4RlRrZFVTQ0E5SURCNE1UQXdNRnh1WEc1bWRXNWpkR2x2YmlCa1pXTnZaR1ZEYjJSbFVHOXBiblJ6UVhKeVlYa2dLR052WkdWUWIybHVkSE1wSUh0Y2JpQWdkbUZ5SUd4bGJpQTlJR052WkdWUWIybHVkSE11YkdWdVozUm9YRzRnSUdsbUlDaHNaVzRnUEQwZ1RVRllYMEZTUjFWTlJVNVVVMTlNUlU1SFZFZ3BJSHRjYmlBZ0lDQnlaWFIxY200Z1UzUnlhVzVuTG1aeWIyMURhR0Z5UTI5a1pTNWhjSEJzZVNoVGRISnBibWNzSUdOdlpHVlFiMmx1ZEhNcElDOHZJR0YyYjJsa0lHVjRkSEpoSUhOc2FXTmxLQ2xjYmlBZ2ZWeHVYRzRnSUM4dklFUmxZMjlrWlNCcGJpQmphSFZ1YTNNZ2RHOGdZWFp2YVdRZ1hDSmpZV3hzSUhOMFlXTnJJSE5wZW1VZ1pYaGpaV1ZrWldSY0lpNWNiaUFnZG1GeUlISmxjeUE5SUNjblhHNGdJSFpoY2lCcElEMGdNRnh1SUNCM2FHbHNaU0FvYVNBOElHeGxiaWtnZTF4dUlDQWdJSEpsY3lBclBTQlRkSEpwYm1jdVpuSnZiVU5vWVhKRGIyUmxMbUZ3Y0d4NUtGeHVJQ0FnSUNBZ1UzUnlhVzVuTEZ4dUlDQWdJQ0FnWTI5a1pWQnZhVzUwY3k1emJHbGpaU2hwTENCcElDczlJRTFCV0Y5QlVrZFZUVVZPVkZOZlRFVk9SMVJJS1Z4dUlDQWdJQ2xjYmlBZ2ZWeHVJQ0J5WlhSMWNtNGdjbVZ6WEc1OVhHNWNibVoxYm1OMGFXOXVJR0Z6WTJscFUyeHBZMlVnS0dKMVppd2djM1JoY25Rc0lHVnVaQ2tnZTF4dUlDQjJZWElnY21WMElEMGdKeWRjYmlBZ1pXNWtJRDBnVFdGMGFDNXRhVzRvWW5WbUxteGxibWQwYUN3Z1pXNWtLVnh1WEc0Z0lHWnZjaUFvZG1GeUlHa2dQU0J6ZEdGeWREc2dhU0E4SUdWdVpEc2dLeXRwS1NCN1hHNGdJQ0FnY21WMElDczlJRk4wY21sdVp5NW1jbTl0UTJoaGNrTnZaR1VvWW5WbVcybGRJQ1lnTUhnM1JpbGNiaUFnZlZ4dUlDQnlaWFIxY200Z2NtVjBYRzU5WEc1Y2JtWjFibU4wYVc5dUlHeGhkR2x1TVZOc2FXTmxJQ2hpZFdZc0lITjBZWEowTENCbGJtUXBJSHRjYmlBZ2RtRnlJSEpsZENBOUlDY25YRzRnSUdWdVpDQTlJRTFoZEdndWJXbHVLR0oxWmk1c1pXNW5kR2dzSUdWdVpDbGNibHh1SUNCbWIzSWdLSFpoY2lCcElEMGdjM1JoY25RN0lHa2dQQ0JsYm1RN0lDc3JhU2tnZTF4dUlDQWdJSEpsZENBclBTQlRkSEpwYm1jdVpuSnZiVU5vWVhKRGIyUmxLR0oxWmx0cFhTbGNiaUFnZlZ4dUlDQnlaWFIxY200Z2NtVjBYRzU5WEc1Y2JtWjFibU4wYVc5dUlHaGxlRk5zYVdObElDaGlkV1lzSUhOMFlYSjBMQ0JsYm1RcElIdGNiaUFnZG1GeUlHeGxiaUE5SUdKMVppNXNaVzVuZEdoY2JseHVJQ0JwWmlBb0lYTjBZWEowSUh4OElITjBZWEowSUR3Z01Da2djM1JoY25RZ1BTQXdYRzRnSUdsbUlDZ2haVzVrSUh4OElHVnVaQ0E4SURBZ2ZId2daVzVrSUQ0Z2JHVnVLU0JsYm1RZ1BTQnNaVzVjYmx4dUlDQjJZWElnYjNWMElEMGdKeWRjYmlBZ1ptOXlJQ2gyWVhJZ2FTQTlJSE4wWVhKME95QnBJRHdnWlc1a095QXJLMmtwSUh0Y2JpQWdJQ0J2ZFhRZ0t6MGdkRzlJWlhnb1luVm1XMmxkS1Z4dUlDQjlYRzRnSUhKbGRIVnliaUJ2ZFhSY2JuMWNibHh1Wm5WdVkzUnBiMjRnZFhSbU1UWnNaVk5zYVdObElDaGlkV1lzSUhOMFlYSjBMQ0JsYm1RcElIdGNiaUFnZG1GeUlHSjVkR1Z6SUQwZ1luVm1Mbk5zYVdObEtITjBZWEowTENCbGJtUXBYRzRnSUhaaGNpQnlaWE1nUFNBbkoxeHVJQ0JtYjNJZ0tIWmhjaUJwSUQwZ01Ec2dhU0E4SUdKNWRHVnpMbXhsYm1kMGFEc2dhU0FyUFNBeUtTQjdYRzRnSUNBZ2NtVnpJQ3M5SUZOMGNtbHVaeTVtY205dFEyaGhja052WkdVb1lubDBaWE5iYVYwZ0t5QmllWFJsYzF0cElDc2dNVjBnS2lBeU5UWXBYRzRnSUgxY2JpQWdjbVYwZFhKdUlISmxjMXh1ZlZ4dVhHNUNkV1ptWlhJdWNISnZkRzkwZVhCbExuTnNhV05sSUQwZ1puVnVZM1JwYjI0Z2MyeHBZMlVnS0hOMFlYSjBMQ0JsYm1RcElIdGNiaUFnZG1GeUlHeGxiaUE5SUhSb2FYTXViR1Z1WjNSb1hHNGdJSE4wWVhKMElEMGdmbjV6ZEdGeWRGeHVJQ0JsYm1RZ1BTQmxibVFnUFQwOUlIVnVaR1ZtYVc1bFpDQS9JR3hsYmlBNklINStaVzVrWEc1Y2JpQWdhV1lnS0hOMFlYSjBJRHdnTUNrZ2UxeHVJQ0FnSUhOMFlYSjBJQ3M5SUd4bGJseHVJQ0FnSUdsbUlDaHpkR0Z5ZENBOElEQXBJSE4wWVhKMElEMGdNRnh1SUNCOUlHVnNjMlVnYVdZZ0tITjBZWEowSUQ0Z2JHVnVLU0I3WEc0Z0lDQWdjM1JoY25RZ1BTQnNaVzVjYmlBZ2ZWeHVYRzRnSUdsbUlDaGxibVFnUENBd0tTQjdYRzRnSUNBZ1pXNWtJQ3M5SUd4bGJseHVJQ0FnSUdsbUlDaGxibVFnUENBd0tTQmxibVFnUFNBd1hHNGdJSDBnWld4elpTQnBaaUFvWlc1a0lENGdiR1Z1S1NCN1hHNGdJQ0FnWlc1a0lEMGdiR1Z1WEc0Z0lIMWNibHh1SUNCcFppQW9aVzVrSUR3Z2MzUmhjblFwSUdWdVpDQTlJSE4wWVhKMFhHNWNiaUFnZG1GeUlHNWxkMEoxWmx4dUlDQnBaaUFvUW5WbVptVnlMbFJaVUVWRVgwRlNVa0ZaWDFOVlVGQlBVbFFwSUh0Y2JpQWdJQ0J1WlhkQ2RXWWdQU0IwYUdsekxuTjFZbUZ5Y21GNUtITjBZWEowTENCbGJtUXBYRzRnSUNBZ2JtVjNRblZtTGw5ZmNISnZkRzlmWHlBOUlFSjFabVpsY2k1d2NtOTBiM1I1Y0dWY2JpQWdmU0JsYkhObElIdGNiaUFnSUNCMllYSWdjMnhwWTJWTVpXNGdQU0JsYm1RZ0xTQnpkR0Z5ZEZ4dUlDQWdJRzVsZDBKMVppQTlJRzVsZHlCQ2RXWm1aWElvYzJ4cFkyVk1aVzRzSUhWdVpHVm1hVzVsWkNsY2JpQWdJQ0JtYjNJZ0tIWmhjaUJwSUQwZ01Ec2dhU0E4SUhOc2FXTmxUR1Z1T3lBcksya3BJSHRjYmlBZ0lDQWdJRzVsZDBKMVpsdHBYU0E5SUhSb2FYTmJhU0FySUhOMFlYSjBYVnh1SUNBZ0lIMWNiaUFnZlZ4dVhHNGdJSEpsZEhWeWJpQnVaWGRDZFdaY2JuMWNibHh1THlwY2JpQXFJRTVsWldRZ2RHOGdiV0ZyWlNCemRYSmxJSFJvWVhRZ1luVm1abVZ5SUdsemJpZDBJSFJ5ZVdsdVp5QjBieUIzY21sMFpTQnZkWFFnYjJZZ1ltOTFibVJ6TGx4dUlDb3ZYRzVtZFc1amRHbHZiaUJqYUdWamEwOW1abk5sZENBb2IyWm1jMlYwTENCbGVIUXNJR3hsYm1kMGFDa2dlMXh1SUNCcFppQW9LRzltWm5ObGRDQWxJREVwSUNFOVBTQXdJSHg4SUc5bVpuTmxkQ0E4SURBcElIUm9jbTkzSUc1bGR5QlNZVzVuWlVWeWNtOXlLQ2R2Wm1aelpYUWdhWE1nYm05MElIVnBiblFuS1Z4dUlDQnBaaUFvYjJabWMyVjBJQ3NnWlhoMElENGdiR1Z1WjNSb0tTQjBhSEp2ZHlCdVpYY2dVbUZ1WjJWRmNuSnZjaWduVkhKNWFXNW5JSFJ2SUdGalkyVnpjeUJpWlhsdmJtUWdZblZtWm1WeUlHeGxibWQwYUNjcFhHNTlYRzVjYmtKMVptWmxjaTV3Y205MGIzUjVjR1V1Y21WaFpGVkpiblJNUlNBOUlHWjFibU4wYVc5dUlISmxZV1JWU1c1MFRFVWdLRzltWm5ObGRDd2dZbmwwWlV4bGJtZDBhQ3dnYm05QmMzTmxjblFwSUh0Y2JpQWdiMlptYzJWMElEMGdiMlptYzJWMElId2dNRnh1SUNCaWVYUmxUR1Z1WjNSb0lEMGdZbmwwWlV4bGJtZDBhQ0I4SURCY2JpQWdhV1lnS0NGdWIwRnpjMlZ5ZENrZ1kyaGxZMnRQWm1aelpYUW9iMlptYzJWMExDQmllWFJsVEdWdVozUm9MQ0IwYUdsekxteGxibWQwYUNsY2JseHVJQ0IyWVhJZ2RtRnNJRDBnZEdocGMxdHZabVp6WlhSZFhHNGdJSFpoY2lCdGRXd2dQU0F4WEc0Z0lIWmhjaUJwSUQwZ01GeHVJQ0IzYUdsc1pTQW9LeXRwSUR3Z1lubDBaVXhsYm1kMGFDQW1KaUFvYlhWc0lDbzlJREI0TVRBd0tTa2dlMXh1SUNBZ0lIWmhiQ0FyUFNCMGFHbHpXMjltWm5ObGRDQXJJR2xkSUNvZ2JYVnNYRzRnSUgxY2JseHVJQ0J5WlhSMWNtNGdkbUZzWEc1OVhHNWNia0oxWm1abGNpNXdjbTkwYjNSNWNHVXVjbVZoWkZWSmJuUkNSU0E5SUdaMWJtTjBhVzl1SUhKbFlXUlZTVzUwUWtVZ0tHOW1abk5sZEN3Z1lubDBaVXhsYm1kMGFDd2dibTlCYzNObGNuUXBJSHRjYmlBZ2IyWm1jMlYwSUQwZ2IyWm1jMlYwSUh3Z01GeHVJQ0JpZVhSbFRHVnVaM1JvSUQwZ1lubDBaVXhsYm1kMGFDQjhJREJjYmlBZ2FXWWdLQ0Z1YjBGemMyVnlkQ2tnZTF4dUlDQWdJR05vWldOclQyWm1jMlYwS0c5bVpuTmxkQ3dnWW5sMFpVeGxibWQwYUN3Z2RHaHBjeTVzWlc1bmRHZ3BYRzRnSUgxY2JseHVJQ0IyWVhJZ2RtRnNJRDBnZEdocGMxdHZabVp6WlhRZ0t5QXRMV0o1ZEdWTVpXNW5kR2hkWEc0Z0lIWmhjaUJ0ZFd3Z1BTQXhYRzRnSUhkb2FXeGxJQ2hpZVhSbFRHVnVaM1JvSUQ0Z01DQW1KaUFvYlhWc0lDbzlJREI0TVRBd0tTa2dlMXh1SUNBZ0lIWmhiQ0FyUFNCMGFHbHpXMjltWm5ObGRDQXJJQzB0WW5sMFpVeGxibWQwYUYwZ0tpQnRkV3hjYmlBZ2ZWeHVYRzRnSUhKbGRIVnliaUIyWVd4Y2JuMWNibHh1UW5WbVptVnlMbkJ5YjNSdmRIbHdaUzV5WldGa1ZVbHVkRGdnUFNCbWRXNWpkR2x2YmlCeVpXRmtWVWx1ZERnZ0tHOW1abk5sZEN3Z2JtOUJjM05sY25RcElIdGNiaUFnYVdZZ0tDRnViMEZ6YzJWeWRDa2dZMmhsWTJ0UFptWnpaWFFvYjJabWMyVjBMQ0F4TENCMGFHbHpMbXhsYm1kMGFDbGNiaUFnY21WMGRYSnVJSFJvYVhOYmIyWm1jMlYwWFZ4dWZWeHVYRzVDZFdabVpYSXVjSEp2ZEc5MGVYQmxMbkpsWVdSVlNXNTBNVFpNUlNBOUlHWjFibU4wYVc5dUlISmxZV1JWU1c1ME1UWk1SU0FvYjJabWMyVjBMQ0J1YjBGemMyVnlkQ2tnZTF4dUlDQnBaaUFvSVc1dlFYTnpaWEowS1NCamFHVmphMDltWm5ObGRDaHZabVp6WlhRc0lESXNJSFJvYVhNdWJHVnVaM1JvS1Z4dUlDQnlaWFIxY200Z2RHaHBjMXR2Wm1aelpYUmRJSHdnS0hSb2FYTmJiMlptYzJWMElDc2dNVjBnUER3Z09DbGNibjFjYmx4dVFuVm1abVZ5TG5CeWIzUnZkSGx3WlM1eVpXRmtWVWx1ZERFMlFrVWdQU0JtZFc1amRHbHZiaUJ5WldGa1ZVbHVkREUyUWtVZ0tHOW1abk5sZEN3Z2JtOUJjM05sY25RcElIdGNiaUFnYVdZZ0tDRnViMEZ6YzJWeWRDa2dZMmhsWTJ0UFptWnpaWFFvYjJabWMyVjBMQ0F5TENCMGFHbHpMbXhsYm1kMGFDbGNiaUFnY21WMGRYSnVJQ2gwYUdselcyOW1abk5sZEYwZ1BEd2dPQ2tnZkNCMGFHbHpXMjltWm5ObGRDQXJJREZkWEc1OVhHNWNia0oxWm1abGNpNXdjbTkwYjNSNWNHVXVjbVZoWkZWSmJuUXpNa3hGSUQwZ1puVnVZM1JwYjI0Z2NtVmhaRlZKYm5Rek1reEZJQ2h2Wm1aelpYUXNJRzV2UVhOelpYSjBLU0I3WEc0Z0lHbG1JQ2doYm05QmMzTmxjblFwSUdOb1pXTnJUMlptYzJWMEtHOW1abk5sZEN3Z05Dd2dkR2hwY3k1c1pXNW5kR2dwWEc1Y2JpQWdjbVYwZFhKdUlDZ29kR2hwYzF0dlptWnpaWFJkS1NCOFhHNGdJQ0FnSUNBb2RHaHBjMXR2Wm1aelpYUWdLeUF4WFNBOFBDQTRLU0I4WEc0Z0lDQWdJQ0FvZEdocGMxdHZabVp6WlhRZ0t5QXlYU0E4UENBeE5pa3BJQ3RjYmlBZ0lDQWdJQ2gwYUdselcyOW1abk5sZENBcklETmRJQ29nTUhneE1EQXdNREF3S1Z4dWZWeHVYRzVDZFdabVpYSXVjSEp2ZEc5MGVYQmxMbkpsWVdSVlNXNTBNekpDUlNBOUlHWjFibU4wYVc5dUlISmxZV1JWU1c1ME16SkNSU0FvYjJabWMyVjBMQ0J1YjBGemMyVnlkQ2tnZTF4dUlDQnBaaUFvSVc1dlFYTnpaWEowS1NCamFHVmphMDltWm5ObGRDaHZabVp6WlhRc0lEUXNJSFJvYVhNdWJHVnVaM1JvS1Z4dVhHNGdJSEpsZEhWeWJpQW9kR2hwYzF0dlptWnpaWFJkSUNvZ01IZ3hNREF3TURBd0tTQXJYRzRnSUNBZ0tDaDBhR2x6VzI5bVpuTmxkQ0FySURGZElEdzhJREUyS1NCOFhHNGdJQ0FnS0hSb2FYTmJiMlptYzJWMElDc2dNbDBnUER3Z09Da2dmRnh1SUNBZ0lIUm9hWE5iYjJabWMyVjBJQ3NnTTEwcFhHNTlYRzVjYmtKMVptWmxjaTV3Y205MGIzUjVjR1V1Y21WaFpFbHVkRXhGSUQwZ1puVnVZM1JwYjI0Z2NtVmhaRWx1ZEV4RklDaHZabVp6WlhRc0lHSjVkR1ZNWlc1bmRHZ3NJRzV2UVhOelpYSjBLU0I3WEc0Z0lHOW1abk5sZENBOUlHOW1abk5sZENCOElEQmNiaUFnWW5sMFpVeGxibWQwYUNBOUlHSjVkR1ZNWlc1bmRHZ2dmQ0F3WEc0Z0lHbG1JQ2doYm05QmMzTmxjblFwSUdOb1pXTnJUMlptYzJWMEtHOW1abk5sZEN3Z1lubDBaVXhsYm1kMGFDd2dkR2hwY3k1c1pXNW5kR2dwWEc1Y2JpQWdkbUZ5SUhaaGJDQTlJSFJvYVhOYmIyWm1jMlYwWFZ4dUlDQjJZWElnYlhWc0lEMGdNVnh1SUNCMllYSWdhU0E5SURCY2JpQWdkMmhwYkdVZ0tDc3JhU0E4SUdKNWRHVk1aVzVuZEdnZ0ppWWdLRzExYkNBcVBTQXdlREV3TUNrcElIdGNiaUFnSUNCMllXd2dLejBnZEdocGMxdHZabVp6WlhRZ0t5QnBYU0FxSUcxMWJGeHVJQ0I5WEc0Z0lHMTFiQ0FxUFNBd2VEZ3dYRzVjYmlBZ2FXWWdLSFpoYkNBK1BTQnRkV3dwSUhaaGJDQXRQU0JOWVhSb0xuQnZkeWd5TENBNElDb2dZbmwwWlV4bGJtZDBhQ2xjYmx4dUlDQnlaWFIxY200Z2RtRnNYRzU5WEc1Y2JrSjFabVpsY2k1d2NtOTBiM1I1Y0dVdWNtVmhaRWx1ZEVKRklEMGdablZ1WTNScGIyNGdjbVZoWkVsdWRFSkZJQ2h2Wm1aelpYUXNJR0o1ZEdWTVpXNW5kR2dzSUc1dlFYTnpaWEowS1NCN1hHNGdJRzltWm5ObGRDQTlJRzltWm5ObGRDQjhJREJjYmlBZ1lubDBaVXhsYm1kMGFDQTlJR0o1ZEdWTVpXNW5kR2dnZkNBd1hHNGdJR2xtSUNnaGJtOUJjM05sY25RcElHTm9aV05yVDJabWMyVjBLRzltWm5ObGRDd2dZbmwwWlV4bGJtZDBhQ3dnZEdocGN5NXNaVzVuZEdncFhHNWNiaUFnZG1GeUlHa2dQU0JpZVhSbFRHVnVaM1JvWEc0Z0lIWmhjaUJ0ZFd3Z1BTQXhYRzRnSUhaaGNpQjJZV3dnUFNCMGFHbHpXMjltWm5ObGRDQXJJQzB0YVYxY2JpQWdkMmhwYkdVZ0tHa2dQaUF3SUNZbUlDaHRkV3dnS2owZ01IZ3hNREFwS1NCN1hHNGdJQ0FnZG1Gc0lDczlJSFJvYVhOYmIyWm1jMlYwSUNzZ0xTMXBYU0FxSUcxMWJGeHVJQ0I5WEc0Z0lHMTFiQ0FxUFNBd2VEZ3dYRzVjYmlBZ2FXWWdLSFpoYkNBK1BTQnRkV3dwSUhaaGJDQXRQU0JOWVhSb0xuQnZkeWd5TENBNElDb2dZbmwwWlV4bGJtZDBhQ2xjYmx4dUlDQnlaWFIxY200Z2RtRnNYRzU5WEc1Y2JrSjFabVpsY2k1d2NtOTBiM1I1Y0dVdWNtVmhaRWx1ZERnZ1BTQm1kVzVqZEdsdmJpQnlaV0ZrU1c1ME9DQW9iMlptYzJWMExDQnViMEZ6YzJWeWRDa2dlMXh1SUNCcFppQW9JVzV2UVhOelpYSjBLU0JqYUdWamEwOW1abk5sZENodlptWnpaWFFzSURFc0lIUm9hWE11YkdWdVozUm9LVnh1SUNCcFppQW9JU2gwYUdselcyOW1abk5sZEYwZ0ppQXdlRGd3S1NrZ2NtVjBkWEp1SUNoMGFHbHpXMjltWm5ObGRGMHBYRzRnSUhKbGRIVnliaUFvS0RCNFptWWdMU0IwYUdselcyOW1abk5sZEYwZ0t5QXhLU0FxSUMweEtWeHVmVnh1WEc1Q2RXWm1aWEl1Y0hKdmRHOTBlWEJsTG5KbFlXUkpiblF4Tmt4RklEMGdablZ1WTNScGIyNGdjbVZoWkVsdWRERTJURVVnS0c5bVpuTmxkQ3dnYm05QmMzTmxjblFwSUh0Y2JpQWdhV1lnS0NGdWIwRnpjMlZ5ZENrZ1kyaGxZMnRQWm1aelpYUW9iMlptYzJWMExDQXlMQ0IwYUdsekxteGxibWQwYUNsY2JpQWdkbUZ5SUhaaGJDQTlJSFJvYVhOYmIyWm1jMlYwWFNCOElDaDBhR2x6VzI5bVpuTmxkQ0FySURGZElEdzhJRGdwWEc0Z0lISmxkSFZ5YmlBb2RtRnNJQ1lnTUhnNE1EQXdLU0EvSUhaaGJDQjhJREI0UmtaR1JqQXdNREFnT2lCMllXeGNibjFjYmx4dVFuVm1abVZ5TG5CeWIzUnZkSGx3WlM1eVpXRmtTVzUwTVRaQ1JTQTlJR1oxYm1OMGFXOXVJSEpsWVdSSmJuUXhOa0pGSUNodlptWnpaWFFzSUc1dlFYTnpaWEowS1NCN1hHNGdJR2xtSUNnaGJtOUJjM05sY25RcElHTm9aV05yVDJabWMyVjBLRzltWm5ObGRDd2dNaXdnZEdocGN5NXNaVzVuZEdncFhHNGdJSFpoY2lCMllXd2dQU0IwYUdselcyOW1abk5sZENBcklERmRJSHdnS0hSb2FYTmJiMlptYzJWMFhTQThQQ0E0S1Z4dUlDQnlaWFIxY200Z0tIWmhiQ0FtSURCNE9EQXdNQ2tnUHlCMllXd2dmQ0F3ZUVaR1JrWXdNREF3SURvZ2RtRnNYRzU5WEc1Y2JrSjFabVpsY2k1d2NtOTBiM1I1Y0dVdWNtVmhaRWx1ZERNeVRFVWdQU0JtZFc1amRHbHZiaUJ5WldGa1NXNTBNekpNUlNBb2IyWm1jMlYwTENCdWIwRnpjMlZ5ZENrZ2UxeHVJQ0JwWmlBb0lXNXZRWE56WlhKMEtTQmphR1ZqYTA5bVpuTmxkQ2h2Wm1aelpYUXNJRFFzSUhSb2FYTXViR1Z1WjNSb0tWeHVYRzRnSUhKbGRIVnliaUFvZEdocGMxdHZabVp6WlhSZEtTQjhYRzRnSUNBZ0tIUm9hWE5iYjJabWMyVjBJQ3NnTVYwZ1BEd2dPQ2tnZkZ4dUlDQWdJQ2gwYUdselcyOW1abk5sZENBcklESmRJRHc4SURFMktTQjhYRzRnSUNBZ0tIUm9hWE5iYjJabWMyVjBJQ3NnTTEwZ1BEd2dNalFwWEc1OVhHNWNia0oxWm1abGNpNXdjbTkwYjNSNWNHVXVjbVZoWkVsdWRETXlRa1VnUFNCbWRXNWpkR2x2YmlCeVpXRmtTVzUwTXpKQ1JTQW9iMlptYzJWMExDQnViMEZ6YzJWeWRDa2dlMXh1SUNCcFppQW9JVzV2UVhOelpYSjBLU0JqYUdWamEwOW1abk5sZENodlptWnpaWFFzSURRc0lIUm9hWE11YkdWdVozUm9LVnh1WEc0Z0lISmxkSFZ5YmlBb2RHaHBjMXR2Wm1aelpYUmRJRHc4SURJMEtTQjhYRzRnSUNBZ0tIUm9hWE5iYjJabWMyVjBJQ3NnTVYwZ1BEd2dNVFlwSUh4Y2JpQWdJQ0FvZEdocGMxdHZabVp6WlhRZ0t5QXlYU0E4UENBNEtTQjhYRzRnSUNBZ0tIUm9hWE5iYjJabWMyVjBJQ3NnTTEwcFhHNTlYRzVjYmtKMVptWmxjaTV3Y205MGIzUjVjR1V1Y21WaFpFWnNiMkYwVEVVZ1BTQm1kVzVqZEdsdmJpQnlaV0ZrUm14dllYUk1SU0FvYjJabWMyVjBMQ0J1YjBGemMyVnlkQ2tnZTF4dUlDQnBaaUFvSVc1dlFYTnpaWEowS1NCamFHVmphMDltWm5ObGRDaHZabVp6WlhRc0lEUXNJSFJvYVhNdWJHVnVaM1JvS1Z4dUlDQnlaWFIxY200Z2FXVmxaVGMxTkM1eVpXRmtLSFJvYVhNc0lHOW1abk5sZEN3Z2RISjFaU3dnTWpNc0lEUXBYRzU5WEc1Y2JrSjFabVpsY2k1d2NtOTBiM1I1Y0dVdWNtVmhaRVpzYjJGMFFrVWdQU0JtZFc1amRHbHZiaUJ5WldGa1JteHZZWFJDUlNBb2IyWm1jMlYwTENCdWIwRnpjMlZ5ZENrZ2UxeHVJQ0JwWmlBb0lXNXZRWE56WlhKMEtTQmphR1ZqYTA5bVpuTmxkQ2h2Wm1aelpYUXNJRFFzSUhSb2FYTXViR1Z1WjNSb0tWeHVJQ0J5WlhSMWNtNGdhV1ZsWlRjMU5DNXlaV0ZrS0hSb2FYTXNJRzltWm5ObGRDd2dabUZzYzJVc0lESXpMQ0EwS1Z4dWZWeHVYRzVDZFdabVpYSXVjSEp2ZEc5MGVYQmxMbkpsWVdSRWIzVmliR1ZNUlNBOUlHWjFibU4wYVc5dUlISmxZV1JFYjNWaWJHVk1SU0FvYjJabWMyVjBMQ0J1YjBGemMyVnlkQ2tnZTF4dUlDQnBaaUFvSVc1dlFYTnpaWEowS1NCamFHVmphMDltWm5ObGRDaHZabVp6WlhRc0lEZ3NJSFJvYVhNdWJHVnVaM1JvS1Z4dUlDQnlaWFIxY200Z2FXVmxaVGMxTkM1eVpXRmtLSFJvYVhNc0lHOW1abk5sZEN3Z2RISjFaU3dnTlRJc0lEZ3BYRzU5WEc1Y2JrSjFabVpsY2k1d2NtOTBiM1I1Y0dVdWNtVmhaRVJ2ZFdKc1pVSkZJRDBnWm5WdVkzUnBiMjRnY21WaFpFUnZkV0pzWlVKRklDaHZabVp6WlhRc0lHNXZRWE56WlhKMEtTQjdYRzRnSUdsbUlDZ2hibTlCYzNObGNuUXBJR05vWldOclQyWm1jMlYwS0c5bVpuTmxkQ3dnT0N3Z2RHaHBjeTVzWlc1bmRHZ3BYRzRnSUhKbGRIVnliaUJwWldWbE56VTBMbkpsWVdRb2RHaHBjeXdnYjJabWMyVjBMQ0JtWVd4elpTd2dOVElzSURncFhHNTlYRzVjYm1aMWJtTjBhVzl1SUdOb1pXTnJTVzUwSUNoaWRXWXNJSFpoYkhWbExDQnZabVp6WlhRc0lHVjRkQ3dnYldGNExDQnRhVzRwSUh0Y2JpQWdhV1lnS0NGQ2RXWm1aWEl1YVhOQ2RXWm1aWElvWW5WbUtTa2dkR2h5YjNjZ2JtVjNJRlI1Y0dWRmNuSnZjaWduWENKaWRXWm1aWEpjSWlCaGNtZDFiV1Z1ZENCdGRYTjBJR0psSUdFZ1FuVm1abVZ5SUdsdWMzUmhibU5sSnlsY2JpQWdhV1lnS0haaGJIVmxJRDRnYldGNElIeDhJSFpoYkhWbElEd2diV2x1S1NCMGFISnZkeUJ1WlhjZ1VtRnVaMlZGY25KdmNpZ25YQ0oyWVd4MVpWd2lJR0Z5WjNWdFpXNTBJR2x6SUc5MWRDQnZaaUJpYjNWdVpITW5LVnh1SUNCcFppQW9iMlptYzJWMElDc2daWGgwSUQ0Z1luVm1MbXhsYm1kMGFDa2dkR2h5YjNjZ2JtVjNJRkpoYm1kbFJYSnliM0lvSjBsdVpHVjRJRzkxZENCdlppQnlZVzVuWlNjcFhHNTlYRzVjYmtKMVptWmxjaTV3Y205MGIzUjVjR1V1ZDNKcGRHVlZTVzUwVEVVZ1BTQm1kVzVqZEdsdmJpQjNjbWwwWlZWSmJuUk1SU0FvZG1Gc2RXVXNJRzltWm5ObGRDd2dZbmwwWlV4bGJtZDBhQ3dnYm05QmMzTmxjblFwSUh0Y2JpQWdkbUZzZFdVZ1BTQXJkbUZzZFdWY2JpQWdiMlptYzJWMElEMGdiMlptYzJWMElId2dNRnh1SUNCaWVYUmxUR1Z1WjNSb0lEMGdZbmwwWlV4bGJtZDBhQ0I4SURCY2JpQWdhV1lnS0NGdWIwRnpjMlZ5ZENrZ2UxeHVJQ0FnSUhaaGNpQnRZWGhDZVhSbGN5QTlJRTFoZEdndWNHOTNLRElzSURnZ0tpQmllWFJsVEdWdVozUm9LU0F0SURGY2JpQWdJQ0JqYUdWamEwbHVkQ2gwYUdsekxDQjJZV3gxWlN3Z2IyWm1jMlYwTENCaWVYUmxUR1Z1WjNSb0xDQnRZWGhDZVhSbGN5d2dNQ2xjYmlBZ2ZWeHVYRzRnSUhaaGNpQnRkV3dnUFNBeFhHNGdJSFpoY2lCcElEMGdNRnh1SUNCMGFHbHpXMjltWm5ObGRGMGdQU0IyWVd4MVpTQW1JREI0UmtaY2JpQWdkMmhwYkdVZ0tDc3JhU0E4SUdKNWRHVk1aVzVuZEdnZ0ppWWdLRzExYkNBcVBTQXdlREV3TUNrcElIdGNiaUFnSUNCMGFHbHpXMjltWm5ObGRDQXJJR2xkSUQwZ0tIWmhiSFZsSUM4Z2JYVnNLU0FtSURCNFJrWmNiaUFnZlZ4dVhHNGdJSEpsZEhWeWJpQnZabVp6WlhRZ0t5QmllWFJsVEdWdVozUm9YRzU5WEc1Y2JrSjFabVpsY2k1d2NtOTBiM1I1Y0dVdWQzSnBkR1ZWU1c1MFFrVWdQU0JtZFc1amRHbHZiaUIzY21sMFpWVkpiblJDUlNBb2RtRnNkV1VzSUc5bVpuTmxkQ3dnWW5sMFpVeGxibWQwYUN3Z2JtOUJjM05sY25RcElIdGNiaUFnZG1Gc2RXVWdQU0FyZG1Gc2RXVmNiaUFnYjJabWMyVjBJRDBnYjJabWMyVjBJSHdnTUZ4dUlDQmllWFJsVEdWdVozUm9JRDBnWW5sMFpVeGxibWQwYUNCOElEQmNiaUFnYVdZZ0tDRnViMEZ6YzJWeWRDa2dlMXh1SUNBZ0lIWmhjaUJ0WVhoQ2VYUmxjeUE5SUUxaGRHZ3VjRzkzS0RJc0lEZ2dLaUJpZVhSbFRHVnVaM1JvS1NBdElERmNiaUFnSUNCamFHVmphMGx1ZENoMGFHbHpMQ0IyWVd4MVpTd2diMlptYzJWMExDQmllWFJsVEdWdVozUm9MQ0J0WVhoQ2VYUmxjeXdnTUNsY2JpQWdmVnh1WEc0Z0lIWmhjaUJwSUQwZ1lubDBaVXhsYm1kMGFDQXRJREZjYmlBZ2RtRnlJRzExYkNBOUlERmNiaUFnZEdocGMxdHZabVp6WlhRZ0t5QnBYU0E5SUhaaGJIVmxJQ1lnTUhoR1JseHVJQ0IzYUdsc1pTQW9MUzFwSUQ0OUlEQWdKaVlnS0cxMWJDQXFQU0F3ZURFd01Da3BJSHRjYmlBZ0lDQjBhR2x6VzI5bVpuTmxkQ0FySUdsZElEMGdLSFpoYkhWbElDOGdiWFZzS1NBbUlEQjRSa1pjYmlBZ2ZWeHVYRzRnSUhKbGRIVnliaUJ2Wm1aelpYUWdLeUJpZVhSbFRHVnVaM1JvWEc1OVhHNWNia0oxWm1abGNpNXdjbTkwYjNSNWNHVXVkM0pwZEdWVlNXNTBPQ0E5SUdaMWJtTjBhVzl1SUhkeWFYUmxWVWx1ZERnZ0tIWmhiSFZsTENCdlptWnpaWFFzSUc1dlFYTnpaWEowS1NCN1hHNGdJSFpoYkhWbElEMGdLM1poYkhWbFhHNGdJRzltWm5ObGRDQTlJRzltWm5ObGRDQjhJREJjYmlBZ2FXWWdLQ0Z1YjBGemMyVnlkQ2tnWTJobFkydEpiblFvZEdocGN5d2dkbUZzZFdVc0lHOW1abk5sZEN3Z01Td2dNSGhtWml3Z01DbGNiaUFnYVdZZ0tDRkNkV1ptWlhJdVZGbFFSVVJmUVZKU1FWbGZVMVZRVUU5U1ZDa2dkbUZzZFdVZ1BTQk5ZWFJvTG1ac2IyOXlLSFpoYkhWbEtWeHVJQ0IwYUdselcyOW1abk5sZEYwZ1BTQW9kbUZzZFdVZ0ppQXdlR1ptS1Z4dUlDQnlaWFIxY200Z2IyWm1jMlYwSUNzZ01WeHVmVnh1WEc1bWRXNWpkR2x2YmlCdlltcGxZM1JYY21sMFpWVkpiblF4TmlBb1luVm1MQ0IyWVd4MVpTd2diMlptYzJWMExDQnNhWFIwYkdWRmJtUnBZVzRwSUh0Y2JpQWdhV1lnS0haaGJIVmxJRHdnTUNrZ2RtRnNkV1VnUFNBd2VHWm1abVlnS3lCMllXeDFaU0FySURGY2JpQWdabTl5SUNoMllYSWdhU0E5SURBc0lHb2dQU0JOWVhSb0xtMXBiaWhpZFdZdWJHVnVaM1JvSUMwZ2IyWm1jMlYwTENBeUtUc2dhU0E4SUdvN0lDc3JhU2tnZTF4dUlDQWdJR0oxWmx0dlptWnpaWFFnS3lCcFhTQTlJQ2gyWVd4MVpTQW1JQ2d3ZUdabUlEdzhJQ2c0SUNvZ0tHeHBkSFJzWlVWdVpHbGhiaUEvSUdrZ09pQXhJQzBnYVNrcEtTa2dQajQrWEc0Z0lDQWdJQ0FvYkdsMGRHeGxSVzVrYVdGdUlEOGdhU0E2SURFZ0xTQnBLU0FxSURoY2JpQWdmVnh1ZlZ4dVhHNUNkV1ptWlhJdWNISnZkRzkwZVhCbExuZHlhWFJsVlVsdWRERTJURVVnUFNCbWRXNWpkR2x2YmlCM2NtbDBaVlZKYm5ReE5reEZJQ2gyWVd4MVpTd2diMlptYzJWMExDQnViMEZ6YzJWeWRDa2dlMXh1SUNCMllXeDFaU0E5SUN0MllXeDFaVnh1SUNCdlptWnpaWFFnUFNCdlptWnpaWFFnZkNBd1hHNGdJR2xtSUNnaGJtOUJjM05sY25RcElHTm9aV05yU1c1MEtIUm9hWE1zSUhaaGJIVmxMQ0J2Wm1aelpYUXNJRElzSURCNFptWm1aaXdnTUNsY2JpQWdhV1lnS0VKMVptWmxjaTVVV1ZCRlJGOUJVbEpCV1Y5VFZWQlFUMUpVS1NCN1hHNGdJQ0FnZEdocGMxdHZabVp6WlhSZElEMGdLSFpoYkhWbElDWWdNSGhtWmlsY2JpQWdJQ0IwYUdselcyOW1abk5sZENBcklERmRJRDBnS0haaGJIVmxJRDQrUGlBNEtWeHVJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lHOWlhbVZqZEZkeWFYUmxWVWx1ZERFMktIUm9hWE1zSUhaaGJIVmxMQ0J2Wm1aelpYUXNJSFJ5ZFdVcFhHNGdJSDFjYmlBZ2NtVjBkWEp1SUc5bVpuTmxkQ0FySURKY2JuMWNibHh1UW5WbVptVnlMbkJ5YjNSdmRIbHdaUzUzY21sMFpWVkpiblF4TmtKRklEMGdablZ1WTNScGIyNGdkM0pwZEdWVlNXNTBNVFpDUlNBb2RtRnNkV1VzSUc5bVpuTmxkQ3dnYm05QmMzTmxjblFwSUh0Y2JpQWdkbUZzZFdVZ1BTQXJkbUZzZFdWY2JpQWdiMlptYzJWMElEMGdiMlptYzJWMElId2dNRnh1SUNCcFppQW9JVzV2UVhOelpYSjBLU0JqYUdWamEwbHVkQ2gwYUdsekxDQjJZV3gxWlN3Z2IyWm1jMlYwTENBeUxDQXdlR1ptWm1Zc0lEQXBYRzRnSUdsbUlDaENkV1ptWlhJdVZGbFFSVVJmUVZKU1FWbGZVMVZRVUU5U1ZDa2dlMXh1SUNBZ0lIUm9hWE5iYjJabWMyVjBYU0E5SUNoMllXeDFaU0ErUGo0Z09DbGNiaUFnSUNCMGFHbHpXMjltWm5ObGRDQXJJREZkSUQwZ0tIWmhiSFZsSUNZZ01IaG1aaWxjYmlBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0J2WW1wbFkzUlhjbWwwWlZWSmJuUXhOaWgwYUdsekxDQjJZV3gxWlN3Z2IyWm1jMlYwTENCbVlXeHpaU2xjYmlBZ2ZWeHVJQ0J5WlhSMWNtNGdiMlptYzJWMElDc2dNbHh1ZlZ4dVhHNW1kVzVqZEdsdmJpQnZZbXBsWTNSWGNtbDBaVlZKYm5Rek1pQW9ZblZtTENCMllXeDFaU3dnYjJabWMyVjBMQ0JzYVhSMGJHVkZibVJwWVc0cElIdGNiaUFnYVdZZ0tIWmhiSFZsSUR3Z01Da2dkbUZzZFdVZ1BTQXdlR1ptWm1abVptWm1JQ3NnZG1Gc2RXVWdLeUF4WEc0Z0lHWnZjaUFvZG1GeUlHa2dQU0F3TENCcUlEMGdUV0YwYUM1dGFXNG9ZblZtTG14bGJtZDBhQ0F0SUc5bVpuTmxkQ3dnTkNrN0lHa2dQQ0JxT3lBcksya3BJSHRjYmlBZ0lDQmlkV1piYjJabWMyVjBJQ3NnYVYwZ1BTQW9kbUZzZFdVZ1BqNCtJQ2hzYVhSMGJHVkZibVJwWVc0Z1B5QnBJRG9nTXlBdElHa3BJQ29nT0NrZ0ppQXdlR1ptWEc0Z0lIMWNibjFjYmx4dVFuVm1abVZ5TG5CeWIzUnZkSGx3WlM1M2NtbDBaVlZKYm5Rek1reEZJRDBnWm5WdVkzUnBiMjRnZDNKcGRHVlZTVzUwTXpKTVJTQW9kbUZzZFdVc0lHOW1abk5sZEN3Z2JtOUJjM05sY25RcElIdGNiaUFnZG1Gc2RXVWdQU0FyZG1Gc2RXVmNiaUFnYjJabWMyVjBJRDBnYjJabWMyVjBJSHdnTUZ4dUlDQnBaaUFvSVc1dlFYTnpaWEowS1NCamFHVmphMGx1ZENoMGFHbHpMQ0IyWVd4MVpTd2diMlptYzJWMExDQTBMQ0F3ZUdabVptWm1abVptTENBd0tWeHVJQ0JwWmlBb1FuVm1abVZ5TGxSWlVFVkVYMEZTVWtGWlgxTlZVRkJQVWxRcElIdGNiaUFnSUNCMGFHbHpXMjltWm5ObGRDQXJJRE5kSUQwZ0tIWmhiSFZsSUQ0K1BpQXlOQ2xjYmlBZ0lDQjBhR2x6VzI5bVpuTmxkQ0FySURKZElEMGdLSFpoYkhWbElENCtQaUF4TmlsY2JpQWdJQ0IwYUdselcyOW1abk5sZENBcklERmRJRDBnS0haaGJIVmxJRDQrUGlBNEtWeHVJQ0FnSUhSb2FYTmJiMlptYzJWMFhTQTlJQ2gyWVd4MVpTQW1JREI0Wm1ZcFhHNGdJSDBnWld4elpTQjdYRzRnSUNBZ2IySnFaV04wVjNKcGRHVlZTVzUwTXpJb2RHaHBjeXdnZG1Gc2RXVXNJRzltWm5ObGRDd2dkSEoxWlNsY2JpQWdmVnh1SUNCeVpYUjFjbTRnYjJabWMyVjBJQ3NnTkZ4dWZWeHVYRzVDZFdabVpYSXVjSEp2ZEc5MGVYQmxMbmR5YVhSbFZVbHVkRE15UWtVZ1BTQm1kVzVqZEdsdmJpQjNjbWwwWlZWSmJuUXpNa0pGSUNoMllXeDFaU3dnYjJabWMyVjBMQ0J1YjBGemMyVnlkQ2tnZTF4dUlDQjJZV3gxWlNBOUlDdDJZV3gxWlZ4dUlDQnZabVp6WlhRZ1BTQnZabVp6WlhRZ2ZDQXdYRzRnSUdsbUlDZ2hibTlCYzNObGNuUXBJR05vWldOclNXNTBLSFJvYVhNc0lIWmhiSFZsTENCdlptWnpaWFFzSURRc0lEQjRabVptWm1abVptWXNJREFwWEc0Z0lHbG1JQ2hDZFdabVpYSXVWRmxRUlVSZlFWSlNRVmxmVTFWUVVFOVNWQ2tnZTF4dUlDQWdJSFJvYVhOYmIyWm1jMlYwWFNBOUlDaDJZV3gxWlNBK1BqNGdNalFwWEc0Z0lDQWdkR2hwYzF0dlptWnpaWFFnS3lBeFhTQTlJQ2gyWVd4MVpTQStQajRnTVRZcFhHNGdJQ0FnZEdocGMxdHZabVp6WlhRZ0t5QXlYU0E5SUNoMllXeDFaU0ErUGo0Z09DbGNiaUFnSUNCMGFHbHpXMjltWm5ObGRDQXJJRE5kSUQwZ0tIWmhiSFZsSUNZZ01IaG1aaWxjYmlBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0J2WW1wbFkzUlhjbWwwWlZWSmJuUXpNaWgwYUdsekxDQjJZV3gxWlN3Z2IyWm1jMlYwTENCbVlXeHpaU2xjYmlBZ2ZWeHVJQ0J5WlhSMWNtNGdiMlptYzJWMElDc2dORnh1ZlZ4dVhHNUNkV1ptWlhJdWNISnZkRzkwZVhCbExuZHlhWFJsU1c1MFRFVWdQU0JtZFc1amRHbHZiaUIzY21sMFpVbHVkRXhGSUNoMllXeDFaU3dnYjJabWMyVjBMQ0JpZVhSbFRHVnVaM1JvTENCdWIwRnpjMlZ5ZENrZ2UxeHVJQ0IyWVd4MVpTQTlJQ3QyWVd4MVpWeHVJQ0J2Wm1aelpYUWdQU0J2Wm1aelpYUWdmQ0F3WEc0Z0lHbG1JQ2doYm05QmMzTmxjblFwSUh0Y2JpQWdJQ0IyWVhJZ2JHbHRhWFFnUFNCTllYUm9MbkJ2ZHlneUxDQTRJQ29nWW5sMFpVeGxibWQwYUNBdElERXBYRzVjYmlBZ0lDQmphR1ZqYTBsdWRDaDBhR2x6TENCMllXeDFaU3dnYjJabWMyVjBMQ0JpZVhSbFRHVnVaM1JvTENCc2FXMXBkQ0F0SURFc0lDMXNhVzFwZENsY2JpQWdmVnh1WEc0Z0lIWmhjaUJwSUQwZ01GeHVJQ0IyWVhJZ2JYVnNJRDBnTVZ4dUlDQjJZWElnYzNWaUlEMGdNRnh1SUNCMGFHbHpXMjltWm5ObGRGMGdQU0IyWVd4MVpTQW1JREI0UmtaY2JpQWdkMmhwYkdVZ0tDc3JhU0E4SUdKNWRHVk1aVzVuZEdnZ0ppWWdLRzExYkNBcVBTQXdlREV3TUNrcElIdGNiaUFnSUNCcFppQW9kbUZzZFdVZ1BDQXdJQ1ltSUhOMVlpQTlQVDBnTUNBbUppQjBhR2x6VzI5bVpuTmxkQ0FySUdrZ0xTQXhYU0FoUFQwZ01Da2dlMXh1SUNBZ0lDQWdjM1ZpSUQwZ01WeHVJQ0FnSUgxY2JpQWdJQ0IwYUdselcyOW1abk5sZENBcklHbGRJRDBnS0NoMllXeDFaU0F2SUcxMWJDa2dQajRnTUNrZ0xTQnpkV0lnSmlBd2VFWkdYRzRnSUgxY2JseHVJQ0J5WlhSMWNtNGdiMlptYzJWMElDc2dZbmwwWlV4bGJtZDBhRnh1ZlZ4dVhHNUNkV1ptWlhJdWNISnZkRzkwZVhCbExuZHlhWFJsU1c1MFFrVWdQU0JtZFc1amRHbHZiaUIzY21sMFpVbHVkRUpGSUNoMllXeDFaU3dnYjJabWMyVjBMQ0JpZVhSbFRHVnVaM1JvTENCdWIwRnpjMlZ5ZENrZ2UxeHVJQ0IyWVd4MVpTQTlJQ3QyWVd4MVpWeHVJQ0J2Wm1aelpYUWdQU0J2Wm1aelpYUWdmQ0F3WEc0Z0lHbG1JQ2doYm05QmMzTmxjblFwSUh0Y2JpQWdJQ0IyWVhJZ2JHbHRhWFFnUFNCTllYUm9MbkJ2ZHlneUxDQTRJQ29nWW5sMFpVeGxibWQwYUNBdElERXBYRzVjYmlBZ0lDQmphR1ZqYTBsdWRDaDBhR2x6TENCMllXeDFaU3dnYjJabWMyVjBMQ0JpZVhSbFRHVnVaM1JvTENCc2FXMXBkQ0F0SURFc0lDMXNhVzFwZENsY2JpQWdmVnh1WEc0Z0lIWmhjaUJwSUQwZ1lubDBaVXhsYm1kMGFDQXRJREZjYmlBZ2RtRnlJRzExYkNBOUlERmNiaUFnZG1GeUlITjFZaUE5SURCY2JpQWdkR2hwYzF0dlptWnpaWFFnS3lCcFhTQTlJSFpoYkhWbElDWWdNSGhHUmx4dUlDQjNhR2xzWlNBb0xTMXBJRDQ5SURBZ0ppWWdLRzExYkNBcVBTQXdlREV3TUNrcElIdGNiaUFnSUNCcFppQW9kbUZzZFdVZ1BDQXdJQ1ltSUhOMVlpQTlQVDBnTUNBbUppQjBhR2x6VzI5bVpuTmxkQ0FySUdrZ0t5QXhYU0FoUFQwZ01Da2dlMXh1SUNBZ0lDQWdjM1ZpSUQwZ01WeHVJQ0FnSUgxY2JpQWdJQ0IwYUdselcyOW1abk5sZENBcklHbGRJRDBnS0NoMllXeDFaU0F2SUcxMWJDa2dQajRnTUNrZ0xTQnpkV0lnSmlBd2VFWkdYRzRnSUgxY2JseHVJQ0J5WlhSMWNtNGdiMlptYzJWMElDc2dZbmwwWlV4bGJtZDBhRnh1ZlZ4dVhHNUNkV1ptWlhJdWNISnZkRzkwZVhCbExuZHlhWFJsU1c1ME9DQTlJR1oxYm1OMGFXOXVJSGR5YVhSbFNXNTBPQ0FvZG1Gc2RXVXNJRzltWm5ObGRDd2dibTlCYzNObGNuUXBJSHRjYmlBZ2RtRnNkV1VnUFNBcmRtRnNkV1ZjYmlBZ2IyWm1jMlYwSUQwZ2IyWm1jMlYwSUh3Z01GeHVJQ0JwWmlBb0lXNXZRWE56WlhKMEtTQmphR1ZqYTBsdWRDaDBhR2x6TENCMllXeDFaU3dnYjJabWMyVjBMQ0F4TENBd2VEZG1MQ0F0TUhnNE1DbGNiaUFnYVdZZ0tDRkNkV1ptWlhJdVZGbFFSVVJmUVZKU1FWbGZVMVZRVUU5U1ZDa2dkbUZzZFdVZ1BTQk5ZWFJvTG1ac2IyOXlLSFpoYkhWbEtWeHVJQ0JwWmlBb2RtRnNkV1VnUENBd0tTQjJZV3gxWlNBOUlEQjRabVlnS3lCMllXeDFaU0FySURGY2JpQWdkR2hwYzF0dlptWnpaWFJkSUQwZ0tIWmhiSFZsSUNZZ01IaG1aaWxjYmlBZ2NtVjBkWEp1SUc5bVpuTmxkQ0FySURGY2JuMWNibHh1UW5WbVptVnlMbkJ5YjNSdmRIbHdaUzUzY21sMFpVbHVkREUyVEVVZ1BTQm1kVzVqZEdsdmJpQjNjbWwwWlVsdWRERTJURVVnS0haaGJIVmxMQ0J2Wm1aelpYUXNJRzV2UVhOelpYSjBLU0I3WEc0Z0lIWmhiSFZsSUQwZ0szWmhiSFZsWEc0Z0lHOW1abk5sZENBOUlHOW1abk5sZENCOElEQmNiaUFnYVdZZ0tDRnViMEZ6YzJWeWRDa2dZMmhsWTJ0SmJuUW9kR2hwY3l3Z2RtRnNkV1VzSUc5bVpuTmxkQ3dnTWl3Z01IZzNabVptTENBdE1IZzRNREF3S1Z4dUlDQnBaaUFvUW5WbVptVnlMbFJaVUVWRVgwRlNVa0ZaWDFOVlVGQlBVbFFwSUh0Y2JpQWdJQ0IwYUdselcyOW1abk5sZEYwZ1BTQW9kbUZzZFdVZ0ppQXdlR1ptS1Z4dUlDQWdJSFJvYVhOYmIyWm1jMlYwSUNzZ01WMGdQU0FvZG1Gc2RXVWdQajQrSURncFhHNGdJSDBnWld4elpTQjdYRzRnSUNBZ2IySnFaV04wVjNKcGRHVlZTVzUwTVRZb2RHaHBjeXdnZG1Gc2RXVXNJRzltWm5ObGRDd2dkSEoxWlNsY2JpQWdmVnh1SUNCeVpYUjFjbTRnYjJabWMyVjBJQ3NnTWx4dWZWeHVYRzVDZFdabVpYSXVjSEp2ZEc5MGVYQmxMbmR5YVhSbFNXNTBNVFpDUlNBOUlHWjFibU4wYVc5dUlIZHlhWFJsU1c1ME1UWkNSU0FvZG1Gc2RXVXNJRzltWm5ObGRDd2dibTlCYzNObGNuUXBJSHRjYmlBZ2RtRnNkV1VnUFNBcmRtRnNkV1ZjYmlBZ2IyWm1jMlYwSUQwZ2IyWm1jMlYwSUh3Z01GeHVJQ0JwWmlBb0lXNXZRWE56WlhKMEtTQmphR1ZqYTBsdWRDaDBhR2x6TENCMllXeDFaU3dnYjJabWMyVjBMQ0F5TENBd2VEZG1abVlzSUMwd2VEZ3dNREFwWEc0Z0lHbG1JQ2hDZFdabVpYSXVWRmxRUlVSZlFWSlNRVmxmVTFWUVVFOVNWQ2tnZTF4dUlDQWdJSFJvYVhOYmIyWm1jMlYwWFNBOUlDaDJZV3gxWlNBK1BqNGdPQ2xjYmlBZ0lDQjBhR2x6VzI5bVpuTmxkQ0FySURGZElEMGdLSFpoYkhWbElDWWdNSGhtWmlsY2JpQWdmU0JsYkhObElIdGNiaUFnSUNCdlltcGxZM1JYY21sMFpWVkpiblF4TmloMGFHbHpMQ0IyWVd4MVpTd2diMlptYzJWMExDQm1ZV3h6WlNsY2JpQWdmVnh1SUNCeVpYUjFjbTRnYjJabWMyVjBJQ3NnTWx4dWZWeHVYRzVDZFdabVpYSXVjSEp2ZEc5MGVYQmxMbmR5YVhSbFNXNTBNekpNUlNBOUlHWjFibU4wYVc5dUlIZHlhWFJsU1c1ME16Sk1SU0FvZG1Gc2RXVXNJRzltWm5ObGRDd2dibTlCYzNObGNuUXBJSHRjYmlBZ2RtRnNkV1VnUFNBcmRtRnNkV1ZjYmlBZ2IyWm1jMlYwSUQwZ2IyWm1jMlYwSUh3Z01GeHVJQ0JwWmlBb0lXNXZRWE56WlhKMEtTQmphR1ZqYTBsdWRDaDBhR2x6TENCMllXeDFaU3dnYjJabWMyVjBMQ0EwTENBd2VEZG1abVptWm1abUxDQXRNSGc0TURBd01EQXdNQ2xjYmlBZ2FXWWdLRUoxWm1abGNpNVVXVkJGUkY5QlVsSkJXVjlUVlZCUVQxSlVLU0I3WEc0Z0lDQWdkR2hwYzF0dlptWnpaWFJkSUQwZ0tIWmhiSFZsSUNZZ01IaG1aaWxjYmlBZ0lDQjBhR2x6VzI5bVpuTmxkQ0FySURGZElEMGdLSFpoYkhWbElENCtQaUE0S1Z4dUlDQWdJSFJvYVhOYmIyWm1jMlYwSUNzZ01sMGdQU0FvZG1Gc2RXVWdQajQrSURFMktWeHVJQ0FnSUhSb2FYTmJiMlptYzJWMElDc2dNMTBnUFNBb2RtRnNkV1VnUGo0K0lESTBLVnh1SUNCOUlHVnNjMlVnZTF4dUlDQWdJRzlpYW1WamRGZHlhWFJsVlVsdWRETXlLSFJvYVhNc0lIWmhiSFZsTENCdlptWnpaWFFzSUhSeWRXVXBYRzRnSUgxY2JpQWdjbVYwZFhKdUlHOW1abk5sZENBcklEUmNibjFjYmx4dVFuVm1abVZ5TG5CeWIzUnZkSGx3WlM1M2NtbDBaVWx1ZERNeVFrVWdQU0JtZFc1amRHbHZiaUIzY21sMFpVbHVkRE15UWtVZ0tIWmhiSFZsTENCdlptWnpaWFFzSUc1dlFYTnpaWEowS1NCN1hHNGdJSFpoYkhWbElEMGdLM1poYkhWbFhHNGdJRzltWm5ObGRDQTlJRzltWm5ObGRDQjhJREJjYmlBZ2FXWWdLQ0Z1YjBGemMyVnlkQ2tnWTJobFkydEpiblFvZEdocGN5d2dkbUZzZFdVc0lHOW1abk5sZEN3Z05Dd2dNSGczWm1abVptWm1aaXdnTFRCNE9EQXdNREF3TURBcFhHNGdJR2xtSUNoMllXeDFaU0E4SURBcElIWmhiSFZsSUQwZ01IaG1abVptWm1abVppQXJJSFpoYkhWbElDc2dNVnh1SUNCcFppQW9RblZtWm1WeUxsUlpVRVZFWDBGU1VrRlpYMU5WVUZCUFVsUXBJSHRjYmlBZ0lDQjBhR2x6VzI5bVpuTmxkRjBnUFNBb2RtRnNkV1VnUGo0K0lESTBLVnh1SUNBZ0lIUm9hWE5iYjJabWMyVjBJQ3NnTVYwZ1BTQW9kbUZzZFdVZ1BqNCtJREUyS1Z4dUlDQWdJSFJvYVhOYmIyWm1jMlYwSUNzZ01sMGdQU0FvZG1Gc2RXVWdQajQrSURncFhHNGdJQ0FnZEdocGMxdHZabVp6WlhRZ0t5QXpYU0E5SUNoMllXeDFaU0FtSURCNFptWXBYRzRnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdiMkpxWldOMFYzSnBkR1ZWU1c1ME16SW9kR2hwY3l3Z2RtRnNkV1VzSUc5bVpuTmxkQ3dnWm1Gc2MyVXBYRzRnSUgxY2JpQWdjbVYwZFhKdUlHOW1abk5sZENBcklEUmNibjFjYmx4dVpuVnVZM1JwYjI0Z1kyaGxZMnRKUlVWRk56VTBJQ2hpZFdZc0lIWmhiSFZsTENCdlptWnpaWFFzSUdWNGRDd2diV0Y0TENCdGFXNHBJSHRjYmlBZ2FXWWdLRzltWm5ObGRDQXJJR1Y0ZENBK0lHSjFaaTVzWlc1bmRHZ3BJSFJvY205M0lHNWxkeUJTWVc1blpVVnljbTl5S0NkSmJtUmxlQ0J2ZFhRZ2IyWWdjbUZ1WjJVbktWeHVJQ0JwWmlBb2IyWm1jMlYwSUR3Z01Da2dkR2h5YjNjZ2JtVjNJRkpoYm1kbFJYSnliM0lvSjBsdVpHVjRJRzkxZENCdlppQnlZVzVuWlNjcFhHNTlYRzVjYm1aMWJtTjBhVzl1SUhkeWFYUmxSbXh2WVhRZ0tHSjFaaXdnZG1Gc2RXVXNJRzltWm5ObGRDd2diR2wwZEd4bFJXNWthV0Z1TENCdWIwRnpjMlZ5ZENrZ2UxeHVJQ0JwWmlBb0lXNXZRWE56WlhKMEtTQjdYRzRnSUNBZ1kyaGxZMnRKUlVWRk56VTBLR0oxWml3Z2RtRnNkV1VzSUc5bVpuTmxkQ3dnTkN3Z015NDBNREk0TWpNME5qWXpPRFV5T0RnMlpTc3pPQ3dnTFRNdU5EQXlPREl6TkRZMk16ZzFNamc0Tm1Vck16Z3BYRzRnSUgxY2JpQWdhV1ZsWlRjMU5DNTNjbWwwWlNoaWRXWXNJSFpoYkhWbExDQnZabVp6WlhRc0lHeHBkSFJzWlVWdVpHbGhiaXdnTWpNc0lEUXBYRzRnSUhKbGRIVnliaUJ2Wm1aelpYUWdLeUEwWEc1OVhHNWNia0oxWm1abGNpNXdjbTkwYjNSNWNHVXVkM0pwZEdWR2JHOWhkRXhGSUQwZ1puVnVZM1JwYjI0Z2QzSnBkR1ZHYkc5aGRFeEZJQ2gyWVd4MVpTd2diMlptYzJWMExDQnViMEZ6YzJWeWRDa2dlMXh1SUNCeVpYUjFjbTRnZDNKcGRHVkdiRzloZENoMGFHbHpMQ0IyWVd4MVpTd2diMlptYzJWMExDQjBjblZsTENCdWIwRnpjMlZ5ZENsY2JuMWNibHh1UW5WbVptVnlMbkJ5YjNSdmRIbHdaUzUzY21sMFpVWnNiMkYwUWtVZ1BTQm1kVzVqZEdsdmJpQjNjbWwwWlVac2IyRjBRa1VnS0haaGJIVmxMQ0J2Wm1aelpYUXNJRzV2UVhOelpYSjBLU0I3WEc0Z0lISmxkSFZ5YmlCM2NtbDBaVVpzYjJGMEtIUm9hWE1zSUhaaGJIVmxMQ0J2Wm1aelpYUXNJR1poYkhObExDQnViMEZ6YzJWeWRDbGNibjFjYmx4dVpuVnVZM1JwYjI0Z2QzSnBkR1ZFYjNWaWJHVWdLR0oxWml3Z2RtRnNkV1VzSUc5bVpuTmxkQ3dnYkdsMGRHeGxSVzVrYVdGdUxDQnViMEZ6YzJWeWRDa2dlMXh1SUNCcFppQW9JVzV2UVhOelpYSjBLU0I3WEc0Z0lDQWdZMmhsWTJ0SlJVVkZOelUwS0dKMVppd2dkbUZzZFdVc0lHOW1abk5sZEN3Z09Dd2dNUzQzT1RjMk9UTXhNelE0TmpJek1UVTNSU3N6TURnc0lDMHhMamM1TnpZNU16RXpORGcyTWpNeE5UZEZLek13T0NsY2JpQWdmVnh1SUNCcFpXVmxOelUwTG5keWFYUmxLR0oxWml3Z2RtRnNkV1VzSUc5bVpuTmxkQ3dnYkdsMGRHeGxSVzVrYVdGdUxDQTFNaXdnT0NsY2JpQWdjbVYwZFhKdUlHOW1abk5sZENBcklEaGNibjFjYmx4dVFuVm1abVZ5TG5CeWIzUnZkSGx3WlM1M2NtbDBaVVJ2ZFdKc1pVeEZJRDBnWm5WdVkzUnBiMjRnZDNKcGRHVkViM1ZpYkdWTVJTQW9kbUZzZFdVc0lHOW1abk5sZEN3Z2JtOUJjM05sY25RcElIdGNiaUFnY21WMGRYSnVJSGR5YVhSbFJHOTFZbXhsS0hSb2FYTXNJSFpoYkhWbExDQnZabVp6WlhRc0lIUnlkV1VzSUc1dlFYTnpaWEowS1Z4dWZWeHVYRzVDZFdabVpYSXVjSEp2ZEc5MGVYQmxMbmR5YVhSbFJHOTFZbXhsUWtVZ1BTQm1kVzVqZEdsdmJpQjNjbWwwWlVSdmRXSnNaVUpGSUNoMllXeDFaU3dnYjJabWMyVjBMQ0J1YjBGemMyVnlkQ2tnZTF4dUlDQnlaWFIxY200Z2QzSnBkR1ZFYjNWaWJHVW9kR2hwY3l3Z2RtRnNkV1VzSUc5bVpuTmxkQ3dnWm1Gc2MyVXNJRzV2UVhOelpYSjBLVnh1ZlZ4dVhHNHZMeUJqYjNCNUtIUmhjbWRsZEVKMVptWmxjaXdnZEdGeVoyVjBVM1JoY25ROU1Dd2djMjkxY21ObFUzUmhjblE5TUN3Z2MyOTFjbU5sUlc1a1BXSjFabVpsY2k1c1pXNW5kR2dwWEc1Q2RXWm1aWEl1Y0hKdmRHOTBlWEJsTG1OdmNIa2dQU0JtZFc1amRHbHZiaUJqYjNCNUlDaDBZWEpuWlhRc0lIUmhjbWRsZEZOMFlYSjBMQ0J6ZEdGeWRDd2daVzVrS1NCN1hHNGdJR2xtSUNnaGMzUmhjblFwSUhOMFlYSjBJRDBnTUZ4dUlDQnBaaUFvSVdWdVpDQW1KaUJsYm1RZ0lUMDlJREFwSUdWdVpDQTlJSFJvYVhNdWJHVnVaM1JvWEc0Z0lHbG1JQ2gwWVhKblpYUlRkR0Z5ZENBK1BTQjBZWEpuWlhRdWJHVnVaM1JvS1NCMFlYSm5aWFJUZEdGeWRDQTlJSFJoY21kbGRDNXNaVzVuZEdoY2JpQWdhV1lnS0NGMFlYSm5aWFJUZEdGeWRDa2dkR0Z5WjJWMFUzUmhjblFnUFNBd1hHNGdJR2xtSUNobGJtUWdQaUF3SUNZbUlHVnVaQ0E4SUhOMFlYSjBLU0JsYm1RZ1BTQnpkR0Z5ZEZ4dVhHNGdJQzh2SUVOdmNIa2dNQ0JpZVhSbGN6c2dkMlVuY21VZ1pHOXVaVnh1SUNCcFppQW9aVzVrSUQwOVBTQnpkR0Z5ZENrZ2NtVjBkWEp1SURCY2JpQWdhV1lnS0hSaGNtZGxkQzVzWlc1bmRHZ2dQVDA5SURBZ2ZId2dkR2hwY3k1c1pXNW5kR2dnUFQwOUlEQXBJSEpsZEhWeWJpQXdYRzVjYmlBZ0x5OGdSbUYwWVd3Z1pYSnliM0lnWTI5dVpHbDBhVzl1YzF4dUlDQnBaaUFvZEdGeVoyVjBVM1JoY25RZ1BDQXdLU0I3WEc0Z0lDQWdkR2h5YjNjZ2JtVjNJRkpoYm1kbFJYSnliM0lvSjNSaGNtZGxkRk4wWVhKMElHOTFkQ0J2WmlCaWIzVnVaSE1uS1Z4dUlDQjlYRzRnSUdsbUlDaHpkR0Z5ZENBOElEQWdmSHdnYzNSaGNuUWdQajBnZEdocGN5NXNaVzVuZEdncElIUm9jbTkzSUc1bGR5QlNZVzVuWlVWeWNtOXlLQ2R6YjNWeVkyVlRkR0Z5ZENCdmRYUWdiMllnWW05MWJtUnpKeWxjYmlBZ2FXWWdLR1Z1WkNBOElEQXBJSFJvY205M0lHNWxkeUJTWVc1blpVVnljbTl5S0NkemIzVnlZMlZGYm1RZ2IzVjBJRzltSUdKdmRXNWtjeWNwWEc1Y2JpQWdMeThnUVhKbElIZGxJRzl2WWo5Y2JpQWdhV1lnS0dWdVpDQStJSFJvYVhNdWJHVnVaM1JvS1NCbGJtUWdQU0IwYUdsekxteGxibWQwYUZ4dUlDQnBaaUFvZEdGeVoyVjBMbXhsYm1kMGFDQXRJSFJoY21kbGRGTjBZWEowSUR3Z1pXNWtJQzBnYzNSaGNuUXBJSHRjYmlBZ0lDQmxibVFnUFNCMFlYSm5aWFF1YkdWdVozUm9JQzBnZEdGeVoyVjBVM1JoY25RZ0t5QnpkR0Z5ZEZ4dUlDQjlYRzVjYmlBZ2RtRnlJR3hsYmlBOUlHVnVaQ0F0SUhOMFlYSjBYRzRnSUhaaGNpQnBYRzVjYmlBZ2FXWWdLSFJvYVhNZ1BUMDlJSFJoY21kbGRDQW1KaUJ6ZEdGeWRDQThJSFJoY21kbGRGTjBZWEowSUNZbUlIUmhjbWRsZEZOMFlYSjBJRHdnWlc1a0tTQjdYRzRnSUNBZ0x5OGdaR1Z6WTJWdVpHbHVaeUJqYjNCNUlHWnliMjBnWlc1a1hHNGdJQ0FnWm05eUlDaHBJRDBnYkdWdUlDMGdNVHNnYVNBK1BTQXdPeUF0TFdrcElIdGNiaUFnSUNBZ0lIUmhjbWRsZEZ0cElDc2dkR0Z5WjJWMFUzUmhjblJkSUQwZ2RHaHBjMXRwSUNzZ2MzUmhjblJkWEc0Z0lDQWdmVnh1SUNCOUlHVnNjMlVnYVdZZ0tHeGxiaUE4SURFd01EQWdmSHdnSVVKMVptWmxjaTVVV1ZCRlJGOUJVbEpCV1Y5VFZWQlFUMUpVS1NCN1hHNGdJQ0FnTHk4Z1lYTmpaVzVrYVc1bklHTnZjSGtnWm5KdmJTQnpkR0Z5ZEZ4dUlDQWdJR1p2Y2lBb2FTQTlJREE3SUdrZ1BDQnNaVzQ3SUNzcmFTa2dlMXh1SUNBZ0lDQWdkR0Z5WjJWMFcya2dLeUIwWVhKblpYUlRkR0Z5ZEYwZ1BTQjBhR2x6VzJrZ0t5QnpkR0Z5ZEYxY2JpQWdJQ0I5WEc0Z0lIMGdaV3h6WlNCN1hHNGdJQ0FnVldsdWREaEJjbkpoZVM1d2NtOTBiM1I1Y0dVdWMyVjBMbU5oYkd3b1hHNGdJQ0FnSUNCMFlYSm5aWFFzWEc0Z0lDQWdJQ0IwYUdsekxuTjFZbUZ5Y21GNUtITjBZWEowTENCemRHRnlkQ0FySUd4bGJpa3NYRzRnSUNBZ0lDQjBZWEpuWlhSVGRHRnlkRnh1SUNBZ0lDbGNiaUFnZlZ4dVhHNGdJSEpsZEhWeWJpQnNaVzVjYm4xY2JseHVMeThnVlhOaFoyVTZYRzR2THlBZ0lDQmlkV1ptWlhJdVptbHNiQ2h1ZFcxaVpYSmJMQ0J2Wm1aelpYUmJMQ0JsYm1SZFhTbGNiaTh2SUNBZ0lHSjFabVpsY2k1bWFXeHNLR0oxWm1abGNsc3NJRzltWm5ObGRGc3NJR1Z1WkYxZEtWeHVMeThnSUNBZ1luVm1abVZ5TG1acGJHd29jM1J5YVc1bld5d2diMlptYzJWMFd5d2daVzVrWFYxYkxDQmxibU52WkdsdVoxMHBYRzVDZFdabVpYSXVjSEp2ZEc5MGVYQmxMbVpwYkd3Z1BTQm1kVzVqZEdsdmJpQm1hV3hzSUNoMllXd3NJSE4wWVhKMExDQmxibVFzSUdWdVkyOWthVzVuS1NCN1hHNGdJQzh2SUVoaGJtUnNaU0J6ZEhKcGJtY2dZMkZ6WlhNNlhHNGdJR2xtSUNoMGVYQmxiMllnZG1Gc0lEMDlQU0FuYzNSeWFXNW5KeWtnZTF4dUlDQWdJR2xtSUNoMGVYQmxiMllnYzNSaGNuUWdQVDA5SUNkemRISnBibWNuS1NCN1hHNGdJQ0FnSUNCbGJtTnZaR2x1WnlBOUlITjBZWEowWEc0Z0lDQWdJQ0J6ZEdGeWRDQTlJREJjYmlBZ0lDQWdJR1Z1WkNBOUlIUm9hWE11YkdWdVozUm9YRzRnSUNBZ2ZTQmxiSE5sSUdsbUlDaDBlWEJsYjJZZ1pXNWtJRDA5UFNBbmMzUnlhVzVuSnlrZ2UxeHVJQ0FnSUNBZ1pXNWpiMlJwYm1jZ1BTQmxibVJjYmlBZ0lDQWdJR1Z1WkNBOUlIUm9hWE11YkdWdVozUm9YRzRnSUNBZ2ZWeHVJQ0FnSUdsbUlDaDJZV3d1YkdWdVozUm9JRDA5UFNBeEtTQjdYRzRnSUNBZ0lDQjJZWElnWTI5a1pTQTlJSFpoYkM1amFHRnlRMjlrWlVGMEtEQXBYRzRnSUNBZ0lDQnBaaUFvWTI5a1pTQThJREkxTmlrZ2UxeHVJQ0FnSUNBZ0lDQjJZV3dnUFNCamIyUmxYRzRnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVJQ0FnSUdsbUlDaGxibU52WkdsdVp5QWhQVDBnZFc1a1pXWnBibVZrSUNZbUlIUjVjR1Z2WmlCbGJtTnZaR2x1WnlBaFBUMGdKM04wY21sdVp5Y3BJSHRjYmlBZ0lDQWdJSFJvY205M0lHNWxkeUJVZVhCbFJYSnliM0lvSjJWdVkyOWthVzVuSUcxMWMzUWdZbVVnWVNCemRISnBibWNuS1Z4dUlDQWdJSDFjYmlBZ0lDQnBaaUFvZEhsd1pXOW1JR1Z1WTI5a2FXNW5JRDA5UFNBbmMzUnlhVzVuSnlBbUppQWhRblZtWm1WeUxtbHpSVzVqYjJScGJtY29aVzVqYjJScGJtY3BLU0I3WEc0Z0lDQWdJQ0IwYUhKdmR5QnVaWGNnVkhsd1pVVnljbTl5S0NkVmJtdHViM2R1SUdWdVkyOWthVzVuT2lBbklDc2daVzVqYjJScGJtY3BYRzRnSUNBZ2ZWeHVJQ0I5SUdWc2MyVWdhV1lnS0hSNWNHVnZaaUIyWVd3Z1BUMDlJQ2R1ZFcxaVpYSW5LU0I3WEc0Z0lDQWdkbUZzSUQwZ2RtRnNJQ1lnTWpVMVhHNGdJSDFjYmx4dUlDQXZMeUJKYm5aaGJHbGtJSEpoYm1kbGN5QmhjbVVnYm05MElITmxkQ0IwYnlCaElHUmxabUYxYkhRc0lITnZJR05oYmlCeVlXNW5aU0JqYUdWamF5QmxZWEpzZVM1Y2JpQWdhV1lnS0hOMFlYSjBJRHdnTUNCOGZDQjBhR2x6TG14bGJtZDBhQ0E4SUhOMFlYSjBJSHg4SUhSb2FYTXViR1Z1WjNSb0lEd2daVzVrS1NCN1hHNGdJQ0FnZEdoeWIzY2dibVYzSUZKaGJtZGxSWEp5YjNJb0owOTFkQ0J2WmlCeVlXNW5aU0JwYm1SbGVDY3BYRzRnSUgxY2JseHVJQ0JwWmlBb1pXNWtJRHc5SUhOMFlYSjBLU0I3WEc0Z0lDQWdjbVYwZFhKdUlIUm9hWE5jYmlBZ2ZWeHVYRzRnSUhOMFlYSjBJRDBnYzNSaGNuUWdQajQrSURCY2JpQWdaVzVrSUQwZ1pXNWtJRDA5UFNCMWJtUmxabWx1WldRZ1B5QjBhR2x6TG14bGJtZDBhQ0E2SUdWdVpDQStQajRnTUZ4dVhHNGdJR2xtSUNnaGRtRnNLU0IyWVd3Z1BTQXdYRzVjYmlBZ2RtRnlJR2xjYmlBZ2FXWWdLSFI1Y0dWdlppQjJZV3dnUFQwOUlDZHVkVzFpWlhJbktTQjdYRzRnSUNBZ1ptOXlJQ2hwSUQwZ2MzUmhjblE3SUdrZ1BDQmxibVE3SUNzcmFTa2dlMXh1SUNBZ0lDQWdkR2hwYzF0cFhTQTlJSFpoYkZ4dUlDQWdJSDFjYmlBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0IyWVhJZ1lubDBaWE1nUFNCQ2RXWm1aWEl1YVhOQ2RXWm1aWElvZG1Gc0tWeHVJQ0FnSUNBZ1B5QjJZV3hjYmlBZ0lDQWdJRG9nZFhSbU9GUnZRbmwwWlhNb2JtVjNJRUoxWm1abGNpaDJZV3dzSUdWdVkyOWthVzVuS1M1MGIxTjBjbWx1WnlncEtWeHVJQ0FnSUhaaGNpQnNaVzRnUFNCaWVYUmxjeTVzWlc1bmRHaGNiaUFnSUNCbWIzSWdLR2tnUFNBd095QnBJRHdnWlc1a0lDMGdjM1JoY25RN0lDc3JhU2tnZTF4dUlDQWdJQ0FnZEdocGMxdHBJQ3NnYzNSaGNuUmRJRDBnWW5sMFpYTmJhU0FsSUd4bGJsMWNiaUFnSUNCOVhHNGdJSDFjYmx4dUlDQnlaWFIxY200Z2RHaHBjMXh1ZlZ4dVhHNHZMeUJJUlV4UVJWSWdSbFZPUTFSSlQwNVRYRzR2THlBOVBUMDlQVDA5UFQwOVBUMDlQVDA5WEc1Y2JuWmhjaUJKVGxaQlRFbEVYMEpCVTBVMk5GOVNSU0E5SUM5YlhpdGNYQzh3TFRsQkxWcGhMWG90WDEwdloxeHVYRzVtZFc1amRHbHZiaUJpWVhObE5qUmpiR1ZoYmlBb2MzUnlLU0I3WEc0Z0lDOHZJRTV2WkdVZ2MzUnlhWEJ6SUc5MWRDQnBiblpoYkdsa0lHTm9ZWEpoWTNSbGNuTWdiR2xyWlNCY1hHNGdZVzVrSUZ4Y2RDQm1jbTl0SUhSb1pTQnpkSEpwYm1jc0lHSmhjMlUyTkMxcWN5QmtiMlZ6SUc1dmRGeHVJQ0J6ZEhJZ1BTQnpkSEpwYm1kMGNtbHRLSE4wY2lrdWNtVndiR0ZqWlNoSlRsWkJURWxFWDBKQlUwVTJORjlTUlN3Z0p5Y3BYRzRnSUM4dklFNXZaR1VnWTI5dWRtVnlkSE1nYzNSeWFXNW5jeUIzYVhSb0lHeGxibWQwYUNBOElESWdkRzhnSnlkY2JpQWdhV1lnS0hOMGNpNXNaVzVuZEdnZ1BDQXlLU0J5WlhSMWNtNGdKeWRjYmlBZ0x5OGdUbTlrWlNCaGJHeHZkM01nWm05eUlHNXZiaTF3WVdSa1pXUWdZbUZ6WlRZMElITjBjbWx1WjNNZ0tHMXBjM05wYm1jZ2RISmhhV3hwYm1jZ1BUMDlLU3dnWW1GelpUWTBMV3B6SUdSdlpYTWdibTkwWEc0Z0lIZG9hV3hsSUNoemRISXViR1Z1WjNSb0lDVWdOQ0FoUFQwZ01Da2dlMXh1SUNBZ0lITjBjaUE5SUhOMGNpQXJJQ2M5SjF4dUlDQjlYRzRnSUhKbGRIVnliaUJ6ZEhKY2JuMWNibHh1Wm5WdVkzUnBiMjRnYzNSeWFXNW5kSEpwYlNBb2MzUnlLU0I3WEc0Z0lHbG1JQ2h6ZEhJdWRISnBiU2tnY21WMGRYSnVJSE4wY2k1MGNtbHRLQ2xjYmlBZ2NtVjBkWEp1SUhOMGNpNXlaWEJzWVdObEtDOWVYRnh6SzN4Y1hITXJKQzluTENBbkp5bGNibjFjYmx4dVpuVnVZM1JwYjI0Z2RHOUlaWGdnS0c0cElIdGNiaUFnYVdZZ0tHNGdQQ0F4TmlrZ2NtVjBkWEp1SUNjd0p5QXJJRzR1ZEc5VGRISnBibWNvTVRZcFhHNGdJSEpsZEhWeWJpQnVMblJ2VTNSeWFXNW5LREUyS1Z4dWZWeHVYRzVtZFc1amRHbHZiaUIxZEdZNFZHOUNlWFJsY3lBb2MzUnlhVzVuTENCMWJtbDBjeWtnZTF4dUlDQjFibWwwY3lBOUlIVnVhWFJ6SUh4OElFbHVabWx1YVhSNVhHNGdJSFpoY2lCamIyUmxVRzlwYm5SY2JpQWdkbUZ5SUd4bGJtZDBhQ0E5SUhOMGNtbHVaeTVzWlc1bmRHaGNiaUFnZG1GeUlHeGxZV1JUZFhKeWIyZGhkR1VnUFNCdWRXeHNYRzRnSUhaaGNpQmllWFJsY3lBOUlGdGRYRzVjYmlBZ1ptOXlJQ2gyWVhJZ2FTQTlJREE3SUdrZ1BDQnNaVzVuZEdnN0lDc3JhU2tnZTF4dUlDQWdJR052WkdWUWIybHVkQ0E5SUhOMGNtbHVaeTVqYUdGeVEyOWtaVUYwS0drcFhHNWNiaUFnSUNBdkx5QnBjeUJ6ZFhKeWIyZGhkR1VnWTI5dGNHOXVaVzUwWEc0Z0lDQWdhV1lnS0dOdlpHVlFiMmx1ZENBK0lEQjRSRGRHUmlBbUppQmpiMlJsVUc5cGJuUWdQQ0F3ZUVVd01EQXBJSHRjYmlBZ0lDQWdJQzh2SUd4aGMzUWdZMmhoY2lCM1lYTWdZU0JzWldGa1hHNGdJQ0FnSUNCcFppQW9JV3hsWVdSVGRYSnliMmRoZEdVcElIdGNiaUFnSUNBZ0lDQWdMeThnYm04Z2JHVmhaQ0I1WlhSY2JpQWdJQ0FnSUNBZ2FXWWdLR052WkdWUWIybHVkQ0ErSURCNFJFSkdSaWtnZTF4dUlDQWdJQ0FnSUNBZ0lDOHZJSFZ1Wlhod1pXTjBaV1FnZEhKaGFXeGNiaUFnSUNBZ0lDQWdJQ0JwWmlBb0tIVnVhWFJ6SUMwOUlETXBJRDRnTFRFcElHSjVkR1Z6TG5CMWMyZ29NSGhGUml3Z01IaENSaXdnTUhoQ1JDbGNiaUFnSUNBZ0lDQWdJQ0JqYjI1MGFXNTFaVnh1SUNBZ0lDQWdJQ0I5SUdWc2MyVWdhV1lnS0drZ0t5QXhJRDA5UFNCc1pXNW5kR2dwSUh0Y2JpQWdJQ0FnSUNBZ0lDQXZMeUIxYm5CaGFYSmxaQ0JzWldGa1hHNGdJQ0FnSUNBZ0lDQWdhV1lnS0NoMWJtbDBjeUF0UFNBektTQStJQzB4S1NCaWVYUmxjeTV3ZFhOb0tEQjRSVVlzSURCNFFrWXNJREI0UWtRcFhHNGdJQ0FnSUNBZ0lDQWdZMjl1ZEdsdWRXVmNiaUFnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUM4dklIWmhiR2xrSUd4bFlXUmNiaUFnSUNBZ0lDQWdiR1ZoWkZOMWNuSnZaMkYwWlNBOUlHTnZaR1ZRYjJsdWRGeHVYRzRnSUNBZ0lDQWdJR052Ym5ScGJuVmxYRzRnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQzh2SURJZ2JHVmhaSE1nYVc0Z1lTQnliM2RjYmlBZ0lDQWdJR2xtSUNoamIyUmxVRzlwYm5RZ1BDQXdlRVJETURBcElIdGNiaUFnSUNBZ0lDQWdhV1lnS0NoMWJtbDBjeUF0UFNBektTQStJQzB4S1NCaWVYUmxjeTV3ZFhOb0tEQjRSVVlzSURCNFFrWXNJREI0UWtRcFhHNGdJQ0FnSUNBZ0lHeGxZV1JUZFhKeWIyZGhkR1VnUFNCamIyUmxVRzlwYm5SY2JpQWdJQ0FnSUNBZ1kyOXVkR2x1ZFdWY2JpQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0x5OGdkbUZzYVdRZ2MzVnljbTluWVhSbElIQmhhWEpjYmlBZ0lDQWdJR052WkdWUWIybHVkQ0E5SUNoc1pXRmtVM1Z5Y205bllYUmxJQzBnTUhoRU9EQXdJRHc4SURFd0lId2dZMjlrWlZCdmFXNTBJQzBnTUhoRVF6QXdLU0FySURCNE1UQXdNREJjYmlBZ0lDQjlJR1ZzYzJVZ2FXWWdLR3hsWVdSVGRYSnliMmRoZEdVcElIdGNiaUFnSUNBZ0lDOHZJSFpoYkdsa0lHSnRjQ0JqYUdGeUxDQmlkWFFnYkdGemRDQmphR0Z5SUhkaGN5QmhJR3hsWVdSY2JpQWdJQ0FnSUdsbUlDZ29kVzVwZEhNZ0xUMGdNeWtnUGlBdE1Ta2dZbmwwWlhNdWNIVnphQ2d3ZUVWR0xDQXdlRUpHTENBd2VFSkVLVnh1SUNBZ0lIMWNibHh1SUNBZ0lHeGxZV1JUZFhKeWIyZGhkR1VnUFNCdWRXeHNYRzVjYmlBZ0lDQXZMeUJsYm1OdlpHVWdkWFJtT0Z4dUlDQWdJR2xtSUNoamIyUmxVRzlwYm5RZ1BDQXdlRGd3S1NCN1hHNGdJQ0FnSUNCcFppQW9LSFZ1YVhSeklDMDlJREVwSUR3Z01Da2dZbkpsWVd0Y2JpQWdJQ0FnSUdKNWRHVnpMbkIxYzJnb1kyOWtaVkJ2YVc1MEtWeHVJQ0FnSUgwZ1pXeHpaU0JwWmlBb1kyOWtaVkJ2YVc1MElEd2dNSGc0TURBcElIdGNiaUFnSUNBZ0lHbG1JQ2dvZFc1cGRITWdMVDBnTWlrZ1BDQXdLU0JpY21WaGExeHVJQ0FnSUNBZ1lubDBaWE11Y0hWemFDaGNiaUFnSUNBZ0lDQWdZMjlrWlZCdmFXNTBJRDQrSURCNE5pQjhJREI0UXpBc1hHNGdJQ0FnSUNBZ0lHTnZaR1ZRYjJsdWRDQW1JREI0TTBZZ2ZDQXdlRGd3WEc0Z0lDQWdJQ0FwWEc0Z0lDQWdmU0JsYkhObElHbG1JQ2hqYjJSbFVHOXBiblFnUENBd2VERXdNREF3S1NCN1hHNGdJQ0FnSUNCcFppQW9LSFZ1YVhSeklDMDlJRE1wSUR3Z01Da2dZbkpsWVd0Y2JpQWdJQ0FnSUdKNWRHVnpMbkIxYzJnb1hHNGdJQ0FnSUNBZ0lHTnZaR1ZRYjJsdWRDQStQaUF3ZUVNZ2ZDQXdlRVV3TEZ4dUlDQWdJQ0FnSUNCamIyUmxVRzlwYm5RZ1BqNGdNSGcySUNZZ01IZ3pSaUI4SURCNE9EQXNYRzRnSUNBZ0lDQWdJR052WkdWUWIybHVkQ0FtSURCNE0wWWdmQ0F3ZURnd1hHNGdJQ0FnSUNBcFhHNGdJQ0FnZlNCbGJITmxJR2xtSUNoamIyUmxVRzlwYm5RZ1BDQXdlREV4TURBd01Da2dlMXh1SUNBZ0lDQWdhV1lnS0NoMWJtbDBjeUF0UFNBMEtTQThJREFwSUdKeVpXRnJYRzRnSUNBZ0lDQmllWFJsY3k1d2RYTm9LRnh1SUNBZ0lDQWdJQ0JqYjJSbFVHOXBiblFnUGo0Z01IZ3hNaUI4SURCNFJqQXNYRzRnSUNBZ0lDQWdJR052WkdWUWIybHVkQ0ErUGlBd2VFTWdKaUF3ZUROR0lId2dNSGc0TUN4Y2JpQWdJQ0FnSUNBZ1kyOWtaVkJ2YVc1MElENCtJREI0TmlBbUlEQjRNMFlnZkNBd2VEZ3dMRnh1SUNBZ0lDQWdJQ0JqYjJSbFVHOXBiblFnSmlBd2VETkdJSHdnTUhnNE1GeHVJQ0FnSUNBZ0tWeHVJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0IwYUhKdmR5QnVaWGNnUlhKeWIzSW9KMGx1ZG1Gc2FXUWdZMjlrWlNCd2IybHVkQ2NwWEc0Z0lDQWdmVnh1SUNCOVhHNWNiaUFnY21WMGRYSnVJR0o1ZEdWelhHNTlYRzVjYm1aMWJtTjBhVzl1SUdGelkybHBWRzlDZVhSbGN5QW9jM1J5S1NCN1hHNGdJSFpoY2lCaWVYUmxRWEp5WVhrZ1BTQmJYVnh1SUNCbWIzSWdLSFpoY2lCcElEMGdNRHNnYVNBOElITjBjaTVzWlc1bmRHZzdJQ3NyYVNrZ2UxeHVJQ0FnSUM4dklFNXZaR1VuY3lCamIyUmxJSE5sWlcxeklIUnZJR0psSUdSdmFXNW5JSFJvYVhNZ1lXNWtJRzV2ZENBbUlEQjROMFl1TGx4dUlDQWdJR0o1ZEdWQmNuSmhlUzV3ZFhOb0tITjBjaTVqYUdGeVEyOWtaVUYwS0drcElDWWdNSGhHUmlsY2JpQWdmVnh1SUNCeVpYUjFjbTRnWW5sMFpVRnljbUY1WEc1OVhHNWNibVoxYm1OMGFXOXVJSFYwWmpFMmJHVlViMEo1ZEdWeklDaHpkSElzSUhWdWFYUnpLU0I3WEc0Z0lIWmhjaUJqTENCb2FTd2diRzljYmlBZ2RtRnlJR0o1ZEdWQmNuSmhlU0E5SUZ0ZFhHNGdJR1p2Y2lBb2RtRnlJR2tnUFNBd095QnBJRHdnYzNSeUxteGxibWQwYURzZ0t5dHBLU0I3WEc0Z0lDQWdhV1lnS0NoMWJtbDBjeUF0UFNBeUtTQThJREFwSUdKeVpXRnJYRzVjYmlBZ0lDQmpJRDBnYzNSeUxtTm9ZWEpEYjJSbFFYUW9hU2xjYmlBZ0lDQm9hU0E5SUdNZ1BqNGdPRnh1SUNBZ0lHeHZJRDBnWXlBbElESTFObHh1SUNBZ0lHSjVkR1ZCY25KaGVTNXdkWE5vS0d4dktWeHVJQ0FnSUdKNWRHVkJjbkpoZVM1d2RYTm9LR2hwS1Z4dUlDQjlYRzVjYmlBZ2NtVjBkWEp1SUdKNWRHVkJjbkpoZVZ4dWZWeHVYRzVtZFc1amRHbHZiaUJpWVhObE5qUlViMEo1ZEdWeklDaHpkSElwSUh0Y2JpQWdjbVYwZFhKdUlHSmhjMlUyTkM1MGIwSjVkR1ZCY25KaGVTaGlZWE5sTmpSamJHVmhiaWh6ZEhJcEtWeHVmVnh1WEc1bWRXNWpkR2x2YmlCaWJHbDBRblZtWm1WeUlDaHpjbU1zSUdSemRDd2diMlptYzJWMExDQnNaVzVuZEdncElIdGNiaUFnWm05eUlDaDJZWElnYVNBOUlEQTdJR2tnUENCc1pXNW5kR2c3SUNzcmFTa2dlMXh1SUNBZ0lHbG1JQ2dvYVNBcklHOW1abk5sZENBK1BTQmtjM1F1YkdWdVozUm9LU0I4ZkNBb2FTQStQU0J6Y21NdWJHVnVaM1JvS1NrZ1luSmxZV3RjYmlBZ0lDQmtjM1JiYVNBcklHOW1abk5sZEYwZ1BTQnpjbU5iYVYxY2JpQWdmVnh1SUNCeVpYUjFjbTRnYVZ4dWZWeHVYRzVtZFc1amRHbHZiaUJwYzI1aGJpQW9kbUZzS1NCN1hHNGdJSEpsZEhWeWJpQjJZV3dnSVQwOUlIWmhiQ0F2THlCbGMyeHBiblF0WkdsellXSnNaUzFzYVc1bElHNXZMWE5sYkdZdFkyOXRjR0Z5WlZ4dWZWeHVJaXdpZG1GeUlIUnZVM1J5YVc1bklEMGdlMzB1ZEc5VGRISnBibWM3WEc1Y2JtMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ1FYSnlZWGt1YVhOQmNuSmhlU0I4ZkNCbWRXNWpkR2x2YmlBb1lYSnlLU0I3WEc0Z0lISmxkSFZ5YmlCMGIxTjBjbWx1Wnk1allXeHNLR0Z5Y2lrZ1BUMGdKMXR2WW1wbFkzUWdRWEp5WVhsZEp6dGNibjA3WEc0aUxDSmNJblZ6WlNCemRISnBZM1JjSWx4dVhHNXRiMlIxYkdVdVpYaHdiM0owY3lBOUlHTnlaV0YwWlZKQ1ZISmxaVnh1WEc1MllYSWdVa1ZFSUNBZ1BTQXdYRzUyWVhJZ1FreEJRMHNnUFNBeFhHNWNibVoxYm1OMGFXOXVJRkpDVG05a1pTaGpiMnh2Y2l3Z2EyVjVMQ0IyWVd4MVpTd2diR1ZtZEN3Z2NtbG5hSFFzSUdOdmRXNTBLU0I3WEc0Z0lIUm9hWE11WDJOdmJHOXlJRDBnWTI5c2IzSmNiaUFnZEdocGN5NXJaWGtnUFNCclpYbGNiaUFnZEdocGN5NTJZV3gxWlNBOUlIWmhiSFZsWEc0Z0lIUm9hWE11YkdWbWRDQTlJR3hsWm5SY2JpQWdkR2hwY3k1eWFXZG9kQ0E5SUhKcFoyaDBYRzRnSUhSb2FYTXVYMk52ZFc1MElEMGdZMjkxYm5SY2JuMWNibHh1Wm5WdVkzUnBiMjRnWTJ4dmJtVk9iMlJsS0c1dlpHVXBJSHRjYmlBZ2NtVjBkWEp1SUc1bGR5QlNRazV2WkdVb2JtOWtaUzVmWTI5c2IzSXNJRzV2WkdVdWEyVjVMQ0J1YjJSbExuWmhiSFZsTENCdWIyUmxMbXhsWm5Rc0lHNXZaR1V1Y21sbmFIUXNJRzV2WkdVdVgyTnZkVzUwS1Z4dWZWeHVYRzVtZFc1amRHbHZiaUJ5WlhCaGFXNTBLR052Ykc5eUxDQnViMlJsS1NCN1hHNGdJSEpsZEhWeWJpQnVaWGNnVWtKT2IyUmxLR052Ykc5eUxDQnViMlJsTG10bGVTd2dibTlrWlM1MllXeDFaU3dnYm05a1pTNXNaV1owTENCdWIyUmxMbkpwWjJoMExDQnViMlJsTGw5amIzVnVkQ2xjYm4xY2JseHVablZ1WTNScGIyNGdjbVZqYjNWdWRDaHViMlJsS1NCN1hHNGdJRzV2WkdVdVgyTnZkVzUwSUQwZ01TQXJJQ2h1YjJSbExteGxablFnUHlCdWIyUmxMbXhsWm5RdVgyTnZkVzUwSURvZ01Da2dLeUFvYm05a1pTNXlhV2RvZENBL0lHNXZaR1V1Y21sbmFIUXVYMk52ZFc1MElEb2dNQ2xjYm4xY2JseHVablZ1WTNScGIyNGdVbVZrUW14aFkydFVjbVZsS0dOdmJYQmhjbVVzSUhKdmIzUXBJSHRjYmlBZ2RHaHBjeTVmWTI5dGNHRnlaU0E5SUdOdmJYQmhjbVZjYmlBZ2RHaHBjeTV5YjI5MElEMGdjbTl2ZEZ4dWZWeHVYRzUyWVhJZ2NISnZkRzhnUFNCU1pXUkNiR0ZqYTFSeVpXVXVjSEp2ZEc5MGVYQmxYRzVjYms5aWFtVmpkQzVrWldacGJtVlFjbTl3WlhKMGVTaHdjbTkwYnl3Z1hDSnJaWGx6WENJc0lIdGNiaUFnWjJWME9pQm1kVzVqZEdsdmJpZ3BJSHRjYmlBZ0lDQjJZWElnY21WemRXeDBJRDBnVzExY2JpQWdJQ0IwYUdsekxtWnZja1ZoWTJnb1puVnVZM1JwYjI0b2F5eDJLU0I3WEc0Z0lDQWdJQ0J5WlhOMWJIUXVjSFZ6YUNocktWeHVJQ0FnSUgwcFhHNGdJQ0FnY21WMGRYSnVJSEpsYzNWc2RGeHVJQ0I5WEc1OUtWeHVYRzVQWW1wbFkzUXVaR1ZtYVc1bFVISnZjR1Z5ZEhrb2NISnZkRzhzSUZ3aWRtRnNkV1Z6WENJc0lIdGNiaUFnWjJWME9pQm1kVzVqZEdsdmJpZ3BJSHRjYmlBZ0lDQjJZWElnY21WemRXeDBJRDBnVzExY2JpQWdJQ0IwYUdsekxtWnZja1ZoWTJnb1puVnVZM1JwYjI0b2F5eDJLU0I3WEc0Z0lDQWdJQ0J5WlhOMWJIUXVjSFZ6YUNoMktWeHVJQ0FnSUgwcFhHNGdJQ0FnY21WMGRYSnVJSEpsYzNWc2RGeHVJQ0I5WEc1OUtWeHVYRzR2TDFKbGRIVnlibk1nZEdobElHNTFiV0psY2lCdlppQnViMlJsY3lCcGJpQjBhR1VnZEhKbFpWeHVUMkpxWldOMExtUmxabWx1WlZCeWIzQmxjblI1S0hCeWIzUnZMQ0JjSW14bGJtZDBhRndpTENCN1hHNGdJR2RsZERvZ1puVnVZM1JwYjI0b0tTQjdYRzRnSUNBZ2FXWW9kR2hwY3k1eWIyOTBLU0I3WEc0Z0lDQWdJQ0J5WlhSMWNtNGdkR2hwY3k1eWIyOTBMbDlqYjNWdWRGeHVJQ0FnSUgxY2JpQWdJQ0J5WlhSMWNtNGdNRnh1SUNCOVhHNTlLVnh1WEc0dkwwbHVjMlZ5ZENCaElHNWxkeUJwZEdWdElHbHVkRzhnZEdobElIUnlaV1ZjYm5CeWIzUnZMbWx1YzJWeWRDQTlJR1oxYm1OMGFXOXVLR3RsZVN3Z2RtRnNkV1VwSUh0Y2JpQWdkbUZ5SUdOdGNDQTlJSFJvYVhNdVgyTnZiWEJoY21WY2JpQWdMeTlHYVc1a0lIQnZhVzUwSUhSdklHbHVjMlZ5ZENCdVpYY2dibTlrWlNCaGRGeHVJQ0IyWVhJZ2JpQTlJSFJvYVhNdWNtOXZkRnh1SUNCMllYSWdibDl6ZEdGamF5QTlJRnRkWEc0Z0lIWmhjaUJrWDNOMFlXTnJJRDBnVzExY2JpQWdkMmhwYkdVb2Jpa2dlMXh1SUNBZ0lIWmhjaUJrSUQwZ1kyMXdLR3RsZVN3Z2JpNXJaWGtwWEc0Z0lDQWdibDl6ZEdGamF5NXdkWE5vS0c0cFhHNGdJQ0FnWkY5emRHRmpheTV3ZFhOb0tHUXBYRzRnSUNBZ2FXWW9aQ0E4UFNBd0tTQjdYRzRnSUNBZ0lDQnVJRDBnYmk1c1pXWjBYRzRnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUc0Z1BTQnVMbkpwWjJoMFhHNGdJQ0FnZlZ4dUlDQjlYRzRnSUM4dlVtVmlkV2xzWkNCd1lYUm9JSFJ2SUd4bFlXWWdibTlrWlZ4dUlDQnVYM04wWVdOckxuQjFjMmdvYm1WM0lGSkNUbTlrWlNoU1JVUXNJR3RsZVN3Z2RtRnNkV1VzSUc1MWJHd3NJRzUxYkd3c0lERXBLVnh1SUNCbWIzSW9kbUZ5SUhNOWJsOXpkR0ZqYXk1c1pXNW5kR2d0TWpzZ2N6NDlNRHNnTFMxektTQjdYRzRnSUNBZ2RtRnlJRzRnUFNCdVgzTjBZV05yVzNOZFhHNGdJQ0FnYVdZb1pGOXpkR0ZqYTF0elhTQThQU0F3S1NCN1hHNGdJQ0FnSUNCdVgzTjBZV05yVzNOZElEMGdibVYzSUZKQ1RtOWtaU2h1TGw5amIyeHZjaXdnYmk1clpYa3NJRzR1ZG1Gc2RXVXNJRzVmYzNSaFkydGJjeXN4WFN3Z2JpNXlhV2RvZEN3Z2JpNWZZMjkxYm5Rck1TbGNiaUFnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnYmw5emRHRmphMXR6WFNBOUlHNWxkeUJTUWs1dlpHVW9iaTVmWTI5c2IzSXNJRzR1YTJWNUxDQnVMblpoYkhWbExDQnVMbXhsWm5Rc0lHNWZjM1JoWTJ0YmN5c3hYU3dnYmk1ZlkyOTFiblFyTVNsY2JpQWdJQ0I5WEc0Z0lIMWNiaUFnTHk5U1pXSmhiR0Z1WTJVZ2RISmxaU0IxYzJsdVp5QnliM1JoZEdsdmJuTmNiaUFnTHk5amIyNXpiMnhsTG14dlp5aGNJbk4wWVhKMElHbHVjMlZ5ZEZ3aUxDQnJaWGtzSUdSZmMzUmhZMnNwWEc0Z0lHWnZjaWgyWVhJZ2N6MXVYM04wWVdOckxteGxibWQwYUMweE95QnpQakU3SUMwdGN5a2dlMXh1SUNBZ0lIWmhjaUJ3SUQwZ2JsOXpkR0ZqYTF0ekxURmRYRzRnSUNBZ2RtRnlJRzRnUFNCdVgzTjBZV05yVzNOZFhHNGdJQ0FnYVdZb2NDNWZZMjlzYjNJZ1BUMDlJRUpNUVVOTElIeDhJRzR1WDJOdmJHOXlJRDA5UFNCQ1RFRkRTeWtnZTF4dUlDQWdJQ0FnWW5KbFlXdGNiaUFnSUNCOVhHNGdJQ0FnZG1GeUlIQndJRDBnYmw5emRHRmphMXR6TFRKZFhHNGdJQ0FnYVdZb2NIQXViR1ZtZENBOVBUMGdjQ2tnZTF4dUlDQWdJQ0FnYVdZb2NDNXNaV1owSUQwOVBTQnVLU0I3WEc0Z0lDQWdJQ0FnSUhaaGNpQjVJRDBnY0hBdWNtbG5hSFJjYmlBZ0lDQWdJQ0FnYVdZb2VTQW1KaUI1TGw5amIyeHZjaUE5UFQwZ1VrVkVLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0x5OWpiMjV6YjJ4bExteHZaeWhjSWt4TWNsd2lLVnh1SUNBZ0lDQWdJQ0FnSUhBdVgyTnZiRzl5SUQwZ1FreEJRMHRjYmlBZ0lDQWdJQ0FnSUNCd2NDNXlhV2RvZENBOUlISmxjR0ZwYm5Rb1FreEJRMHNzSUhrcFhHNGdJQ0FnSUNBZ0lDQWdjSEF1WDJOdmJHOXlJRDBnVWtWRVhHNGdJQ0FnSUNBZ0lDQWdjeUF0UFNBeFhHNGdJQ0FnSUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNBZ0lDQWdMeTlqYjI1emIyeGxMbXh2WnloY0lreE1ZbHdpS1Z4dUlDQWdJQ0FnSUNBZ0lIQndMbDlqYjJ4dmNpQTlJRkpGUkZ4dUlDQWdJQ0FnSUNBZ0lIQndMbXhsWm5RZ1BTQndMbkpwWjJoMFhHNGdJQ0FnSUNBZ0lDQWdjQzVmWTI5c2IzSWdQU0JDVEVGRFMxeHVJQ0FnSUNBZ0lDQWdJSEF1Y21sbmFIUWdQU0J3Y0Z4dUlDQWdJQ0FnSUNBZ0lHNWZjM1JoWTJ0YmN5MHlYU0E5SUhCY2JpQWdJQ0FnSUNBZ0lDQnVYM04wWVdOclczTXRNVjBnUFNCdVhHNGdJQ0FnSUNBZ0lDQWdjbVZqYjNWdWRDaHdjQ2xjYmlBZ0lDQWdJQ0FnSUNCeVpXTnZkVzUwS0hBcFhHNGdJQ0FnSUNBZ0lDQWdhV1lvY3lBK1BTQXpLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjJZWElnY0hCd0lEMGdibDl6ZEdGamExdHpMVE5kWEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaWh3Y0hBdWJHVm1kQ0E5UFQwZ2NIQXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdjSEJ3TG14bFpuUWdQU0J3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNCd2NIQXVjbWxuYUhRZ1BTQndYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0FnSUdKeVpXRnJYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQWdJSFpoY2lCNUlEMGdjSEF1Y21sbmFIUmNiaUFnSUNBZ0lDQWdhV1lvZVNBbUppQjVMbDlqYjJ4dmNpQTlQVDBnVWtWRUtTQjdYRzRnSUNBZ0lDQWdJQ0FnTHk5amIyNXpiMnhsTG14dlp5aGNJa3hTY2x3aUtWeHVJQ0FnSUNBZ0lDQWdJSEF1WDJOdmJHOXlJRDBnUWt4QlEwdGNiaUFnSUNBZ0lDQWdJQ0J3Y0M1eWFXZG9kQ0E5SUhKbGNHRnBiblFvUWt4QlEwc3NJSGtwWEc0Z0lDQWdJQ0FnSUNBZ2NIQXVYMk52Ykc5eUlEMGdVa1ZFWEc0Z0lDQWdJQ0FnSUNBZ2N5QXRQU0F4WEc0Z0lDQWdJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUNBZ0x5OWpiMjV6YjJ4bExteHZaeWhjSWt4U1lsd2lLVnh1SUNBZ0lDQWdJQ0FnSUhBdWNtbG5hSFFnUFNCdUxteGxablJjYmlBZ0lDQWdJQ0FnSUNCd2NDNWZZMjlzYjNJZ1BTQlNSVVJjYmlBZ0lDQWdJQ0FnSUNCd2NDNXNaV1owSUQwZ2JpNXlhV2RvZEZ4dUlDQWdJQ0FnSUNBZ0lHNHVYMk52Ykc5eUlEMGdRa3hCUTB0Y2JpQWdJQ0FnSUNBZ0lDQnVMbXhsWm5RZ1BTQndYRzRnSUNBZ0lDQWdJQ0FnYmk1eWFXZG9kQ0E5SUhCd1hHNGdJQ0FnSUNBZ0lDQWdibDl6ZEdGamExdHpMVEpkSUQwZ2JseHVJQ0FnSUNBZ0lDQWdJRzVmYzNSaFkydGJjeTB4WFNBOUlIQmNiaUFnSUNBZ0lDQWdJQ0J5WldOdmRXNTBLSEJ3S1Z4dUlDQWdJQ0FnSUNBZ0lISmxZMjkxYm5Rb2NDbGNiaUFnSUNBZ0lDQWdJQ0J5WldOdmRXNTBLRzRwWEc0Z0lDQWdJQ0FnSUNBZ2FXWW9jeUErUFNBektTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCMllYSWdjSEJ3SUQwZ2JsOXpkR0ZqYTF0ekxUTmRYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppaHdjSEF1YkdWbWRDQTlQVDBnY0hBcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ2NIQndMbXhsWm5RZ1BTQnVYRzRnSUNBZ0lDQWdJQ0FnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0J3Y0hBdWNtbG5hSFFnUFNCdVhHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQWdJR0p5WldGclhHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lIMWNiaUFnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnYVdZb2NDNXlhV2RvZENBOVBUMGdiaWtnZTF4dUlDQWdJQ0FnSUNCMllYSWdlU0E5SUhCd0xteGxablJjYmlBZ0lDQWdJQ0FnYVdZb2VTQW1KaUI1TGw5amIyeHZjaUE5UFQwZ1VrVkVLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0x5OWpiMjV6YjJ4bExteHZaeWhjSWxKU2Nsd2lMQ0I1TG10bGVTbGNiaUFnSUNBZ0lDQWdJQ0J3TGw5amIyeHZjaUE5SUVKTVFVTkxYRzRnSUNBZ0lDQWdJQ0FnY0hBdWJHVm1kQ0E5SUhKbGNHRnBiblFvUWt4QlEwc3NJSGtwWEc0Z0lDQWdJQ0FnSUNBZ2NIQXVYMk52Ykc5eUlEMGdVa1ZFWEc0Z0lDQWdJQ0FnSUNBZ2N5QXRQU0F4WEc0Z0lDQWdJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUNBZ0x5OWpiMjV6YjJ4bExteHZaeWhjSWxKU1lsd2lLVnh1SUNBZ0lDQWdJQ0FnSUhCd0xsOWpiMnh2Y2lBOUlGSkZSRnh1SUNBZ0lDQWdJQ0FnSUhCd0xuSnBaMmgwSUQwZ2NDNXNaV1owWEc0Z0lDQWdJQ0FnSUNBZ2NDNWZZMjlzYjNJZ1BTQkNURUZEUzF4dUlDQWdJQ0FnSUNBZ0lIQXViR1ZtZENBOUlIQndYRzRnSUNBZ0lDQWdJQ0FnYmw5emRHRmphMXR6TFRKZElEMGdjRnh1SUNBZ0lDQWdJQ0FnSUc1ZmMzUmhZMnRiY3kweFhTQTlJRzVjYmlBZ0lDQWdJQ0FnSUNCeVpXTnZkVzUwS0hCd0tWeHVJQ0FnSUNBZ0lDQWdJSEpsWTI5MWJuUW9jQ2xjYmlBZ0lDQWdJQ0FnSUNCcFppaHpJRDQ5SURNcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhaaGNpQndjSEFnUFNCdVgzTjBZV05yVzNNdE0xMWNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUtIQndjQzV5YVdkb2RDQTlQVDBnY0hBcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ2NIQndMbkpwWjJoMElEMGdjRnh1SUNBZ0lDQWdJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnY0hCd0xteGxablFnUFNCd1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQWdJR0p5WldGclhHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNBZ0lIWmhjaUI1SUQwZ2NIQXViR1ZtZEZ4dUlDQWdJQ0FnSUNCcFppaDVJQ1ltSUhrdVgyTnZiRzl5SUQwOVBTQlNSVVFwSUh0Y2JpQWdJQ0FnSUNBZ0lDQXZMMk52Ym5OdmJHVXViRzluS0Z3aVVreHlYQ0lwWEc0Z0lDQWdJQ0FnSUNBZ2NDNWZZMjlzYjNJZ1BTQkNURUZEUzF4dUlDQWdJQ0FnSUNBZ0lIQndMbXhsWm5RZ1BTQnlaWEJoYVc1MEtFSk1RVU5MTENCNUtWeHVJQ0FnSUNBZ0lDQWdJSEJ3TGw5amIyeHZjaUE5SUZKRlJGeHVJQ0FnSUNBZ0lDQWdJSE1nTFQwZ01WeHVJQ0FnSUNBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ0lDQWdJQzh2WTI5dWMyOXNaUzVzYjJjb1hDSlNUR0pjSWlsY2JpQWdJQ0FnSUNBZ0lDQndMbXhsWm5RZ1BTQnVMbkpwWjJoMFhHNGdJQ0FnSUNBZ0lDQWdjSEF1WDJOdmJHOXlJRDBnVWtWRVhHNGdJQ0FnSUNBZ0lDQWdjSEF1Y21sbmFIUWdQU0J1TG14bFpuUmNiaUFnSUNBZ0lDQWdJQ0J1TGw5amIyeHZjaUE5SUVKTVFVTkxYRzRnSUNBZ0lDQWdJQ0FnYmk1eWFXZG9kQ0E5SUhCY2JpQWdJQ0FnSUNBZ0lDQnVMbXhsWm5RZ1BTQndjRnh1SUNBZ0lDQWdJQ0FnSUc1ZmMzUmhZMnRiY3kweVhTQTlJRzVjYmlBZ0lDQWdJQ0FnSUNCdVgzTjBZV05yVzNNdE1WMGdQU0J3WEc0Z0lDQWdJQ0FnSUNBZ2NtVmpiM1Z1ZENod2NDbGNiaUFnSUNBZ0lDQWdJQ0J5WldOdmRXNTBLSEFwWEc0Z0lDQWdJQ0FnSUNBZ2NtVmpiM1Z1ZENodUtWeHVJQ0FnSUNBZ0lDQWdJR2xtS0hNZ1BqMGdNeWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdkbUZ5SUhCd2NDQTlJRzVmYzNSaFkydGJjeTB6WFZ4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lvY0hCd0xuSnBaMmgwSUQwOVBTQndjQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0J3Y0hBdWNtbG5hSFFnUFNCdVhHNGdJQ0FnSUNBZ0lDQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQndjSEF1YkdWbWRDQTlJRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUNBZ1luSmxZV3RjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnZlZ4dUlDQWdJSDFjYmlBZ2ZWeHVJQ0F2TDFKbGRIVnliaUJ1WlhjZ2RISmxaVnh1SUNCdVgzTjBZV05yV3pCZExsOWpiMnh2Y2lBOUlFSk1RVU5MWEc0Z0lISmxkSFZ5YmlCdVpYY2dVbVZrUW14aFkydFVjbVZsS0dOdGNDd2dibDl6ZEdGamExc3dYU2xjYm4xY2JseHVYRzR2TDFacGMybDBJR0ZzYkNCdWIyUmxjeUJwYm05eVpHVnlYRzVtZFc1amRHbHZiaUJrYjFacGMybDBSblZzYkNoMmFYTnBkQ3dnYm05a1pTa2dlMXh1SUNCcFppaHViMlJsTG14bFpuUXBJSHRjYmlBZ0lDQjJZWElnZGlBOUlHUnZWbWx6YVhSR2RXeHNLSFpwYzJsMExDQnViMlJsTG14bFpuUXBYRzRnSUNBZ2FXWW9kaWtnZXlCeVpYUjFjbTRnZGlCOVhHNGdJSDFjYmlBZ2RtRnlJSFlnUFNCMmFYTnBkQ2h1YjJSbExtdGxlU3dnYm05a1pTNTJZV3gxWlNsY2JpQWdhV1lvZGlrZ2V5QnlaWFIxY200Z2RpQjlYRzRnSUdsbUtHNXZaR1V1Y21sbmFIUXBJSHRjYmlBZ0lDQnlaWFIxY200Z1pHOVdhWE5wZEVaMWJHd29kbWx6YVhRc0lHNXZaR1V1Y21sbmFIUXBYRzRnSUgxY2JuMWNibHh1THk5V2FYTnBkQ0JvWVd4bUlHNXZaR1Z6SUdsdUlHOXlaR1Z5WEc1bWRXNWpkR2x2YmlCa2IxWnBjMmwwU0dGc1ppaHNieXdnWTI5dGNHRnlaU3dnZG1semFYUXNJRzV2WkdVcElIdGNiaUFnZG1GeUlHd2dQU0JqYjIxd1lYSmxLR3h2TENCdWIyUmxMbXRsZVNsY2JpQWdhV1lvYkNBOFBTQXdLU0I3WEc0Z0lDQWdhV1lvYm05a1pTNXNaV1owS1NCN1hHNGdJQ0FnSUNCMllYSWdkaUE5SUdSdlZtbHphWFJJWVd4bUtHeHZMQ0JqYjIxd1lYSmxMQ0IyYVhOcGRDd2dibTlrWlM1c1pXWjBLVnh1SUNBZ0lDQWdhV1lvZGlrZ2V5QnlaWFIxY200Z2RpQjlYRzRnSUNBZ2ZWeHVJQ0FnSUhaaGNpQjJJRDBnZG1semFYUW9ibTlrWlM1clpYa3NJRzV2WkdVdWRtRnNkV1VwWEc0Z0lDQWdhV1lvZGlrZ2V5QnlaWFIxY200Z2RpQjlYRzRnSUgxY2JpQWdhV1lvYm05a1pTNXlhV2RvZENrZ2UxeHVJQ0FnSUhKbGRIVnliaUJrYjFacGMybDBTR0ZzWmloc2J5d2dZMjl0Y0dGeVpTd2dkbWx6YVhRc0lHNXZaR1V1Y21sbmFIUXBYRzRnSUgxY2JuMWNibHh1THk5V2FYTnBkQ0JoYkd3Z2JtOWtaWE1nZDJsMGFHbHVJR0VnY21GdVoyVmNibVoxYm1OMGFXOXVJR1J2Vm1semFYUW9iRzhzSUdocExDQmpiMjF3WVhKbExDQjJhWE5wZEN3Z2JtOWtaU2tnZTF4dUlDQjJZWElnYkNBOUlHTnZiWEJoY21Vb2JHOHNJRzV2WkdVdWEyVjVLVnh1SUNCMllYSWdhQ0E5SUdOdmJYQmhjbVVvYUdrc0lHNXZaR1V1YTJWNUtWeHVJQ0IyWVhJZ2RseHVJQ0JwWmloc0lEdzlJREFwSUh0Y2JpQWdJQ0JwWmlodWIyUmxMbXhsWm5RcElIdGNiaUFnSUNBZ0lIWWdQU0JrYjFacGMybDBLR3h2TENCb2FTd2dZMjl0Y0dGeVpTd2dkbWx6YVhRc0lHNXZaR1V1YkdWbWRDbGNiaUFnSUNBZ0lHbG1LSFlwSUhzZ2NtVjBkWEp1SUhZZ2ZWeHVJQ0FnSUgxY2JpQWdJQ0JwWmlob0lENGdNQ2tnZTF4dUlDQWdJQ0FnZGlBOUlIWnBjMmwwS0c1dlpHVXVhMlY1TENCdWIyUmxMblpoYkhWbEtWeHVJQ0FnSUNBZ2FXWW9kaWtnZXlCeVpYUjFjbTRnZGlCOVhHNGdJQ0FnZlZ4dUlDQjlYRzRnSUdsbUtHZ2dQaUF3SUNZbUlHNXZaR1V1Y21sbmFIUXBJSHRjYmlBZ0lDQnlaWFIxY200Z1pHOVdhWE5wZENoc2J5d2dhR2tzSUdOdmJYQmhjbVVzSUhacGMybDBMQ0J1YjJSbExuSnBaMmgwS1Z4dUlDQjlYRzU5WEc1Y2JseHVjSEp2ZEc4dVptOXlSV0ZqYUNBOUlHWjFibU4wYVc5dUlISmlWSEpsWlVadmNrVmhZMmdvZG1semFYUXNJR3h2TENCb2FTa2dlMXh1SUNCcFppZ2hkR2hwY3k1eWIyOTBLU0I3WEc0Z0lDQWdjbVYwZFhKdVhHNGdJSDFjYmlBZ2MzZHBkR05vS0dGeVozVnRaVzUwY3k1c1pXNW5kR2dwSUh0Y2JpQWdJQ0JqWVhObElERTZYRzRnSUNBZ0lDQnlaWFIxY200Z1pHOVdhWE5wZEVaMWJHd29kbWx6YVhRc0lIUm9hWE11Y205dmRDbGNiaUFnSUNCaWNtVmhhMXh1WEc0Z0lDQWdZMkZ6WlNBeU9seHVJQ0FnSUNBZ2NtVjBkWEp1SUdSdlZtbHphWFJJWVd4bUtHeHZMQ0IwYUdsekxsOWpiMjF3WVhKbExDQjJhWE5wZEN3Z2RHaHBjeTV5YjI5MEtWeHVJQ0FnSUdKeVpXRnJYRzVjYmlBZ0lDQmpZWE5sSURNNlhHNGdJQ0FnSUNCcFppaDBhR2x6TGw5amIyMXdZWEpsS0d4dkxDQm9hU2tnUGowZ01Da2dlMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNWNiaUFnSUNBZ0lIMWNiaUFnSUNBZ0lISmxkSFZ5YmlCa2IxWnBjMmwwS0d4dkxDQm9hU3dnZEdocGN5NWZZMjl0Y0dGeVpTd2dkbWx6YVhRc0lIUm9hWE11Y205dmRDbGNiaUFnSUNCaWNtVmhhMXh1SUNCOVhHNTlYRzVjYmk4dlJtbHljM1FnYVhSbGJTQnBiaUJzYVhOMFhHNVBZbXBsWTNRdVpHVm1hVzVsVUhKdmNHVnlkSGtvY0hKdmRHOHNJRndpWW1WbmFXNWNJaXdnZTF4dUlDQm5aWFE2SUdaMWJtTjBhVzl1S0NrZ2UxeHVJQ0FnSUhaaGNpQnpkR0ZqYXlBOUlGdGRYRzRnSUNBZ2RtRnlJRzRnUFNCMGFHbHpMbkp2YjNSY2JpQWdJQ0IzYUdsc1pTaHVLU0I3WEc0Z0lDQWdJQ0J6ZEdGamF5NXdkWE5vS0c0cFhHNGdJQ0FnSUNCdUlEMGdiaTVzWldaMFhHNGdJQ0FnZlZ4dUlDQWdJSEpsZEhWeWJpQnVaWGNnVW1Wa1FteGhZMnRVY21WbFNYUmxjbUYwYjNJb2RHaHBjeXdnYzNSaFkyc3BYRzRnSUgxY2JuMHBYRzVjYmk4dlRHRnpkQ0JwZEdWdElHbHVJR3hwYzNSY2JrOWlhbVZqZEM1a1pXWnBibVZRY205d1pYSjBlU2h3Y205MGJ5d2dYQ0psYm1SY0lpd2dlMXh1SUNCblpYUTZJR1oxYm1OMGFXOXVLQ2tnZTF4dUlDQWdJSFpoY2lCemRHRmpheUE5SUZ0ZFhHNGdJQ0FnZG1GeUlHNGdQU0IwYUdsekxuSnZiM1JjYmlBZ0lDQjNhR2xzWlNodUtTQjdYRzRnSUNBZ0lDQnpkR0ZqYXk1d2RYTm9LRzRwWEc0Z0lDQWdJQ0J1SUQwZ2JpNXlhV2RvZEZ4dUlDQWdJSDFjYmlBZ0lDQnlaWFIxY200Z2JtVjNJRkpsWkVKc1lXTnJWSEpsWlVsMFpYSmhkRzl5S0hSb2FYTXNJSE4wWVdOcktWeHVJQ0I5WEc1OUtWeHVYRzR2TDBacGJtUWdkR2hsSUdsMGFDQnBkR1Z0SUdsdUlIUm9aU0IwY21WbFhHNXdjbTkwYnk1aGRDQTlJR1oxYm1OMGFXOXVLR2xrZUNrZ2UxeHVJQ0JwWmlocFpIZ2dQQ0F3S1NCN1hHNGdJQ0FnY21WMGRYSnVJRzVsZHlCU1pXUkNiR0ZqYTFSeVpXVkpkR1Z5WVhSdmNpaDBhR2x6TENCYlhTbGNiaUFnZlZ4dUlDQjJZWElnYmlBOUlIUm9hWE11Y205dmRGeHVJQ0IyWVhJZ2MzUmhZMnNnUFNCYlhWeHVJQ0IzYUdsc1pTaDBjblZsS1NCN1hHNGdJQ0FnYzNSaFkyc3VjSFZ6YUNodUtWeHVJQ0FnSUdsbUtHNHViR1ZtZENrZ2UxeHVJQ0FnSUNBZ2FXWW9hV1I0SUR3Z2JpNXNaV1owTGw5amIzVnVkQ2tnZTF4dUlDQWdJQ0FnSUNCdUlEMGdiaTVzWldaMFhHNGdJQ0FnSUNBZ0lHTnZiblJwYm5WbFhHNGdJQ0FnSUNCOVhHNGdJQ0FnSUNCcFpIZ2dMVDBnYmk1c1pXWjBMbDlqYjNWdWRGeHVJQ0FnSUgxY2JpQWdJQ0JwWmlnaGFXUjRLU0I3WEc0Z0lDQWdJQ0J5WlhSMWNtNGdibVYzSUZKbFpFSnNZV05yVkhKbFpVbDBaWEpoZEc5eUtIUm9hWE1zSUhOMFlXTnJLVnh1SUNBZ0lIMWNiaUFnSUNCcFpIZ2dMVDBnTVZ4dUlDQWdJR2xtS0c0dWNtbG5hSFFwSUh0Y2JpQWdJQ0FnSUdsbUtHbGtlQ0ErUFNCdUxuSnBaMmgwTGw5amIzVnVkQ2tnZTF4dUlDQWdJQ0FnSUNCaWNtVmhhMXh1SUNBZ0lDQWdmVnh1SUNBZ0lDQWdiaUE5SUc0dWNtbG5hSFJjYmlBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ1luSmxZV3RjYmlBZ0lDQjlYRzRnSUgxY2JpQWdjbVYwZFhKdUlHNWxkeUJTWldSQ2JHRmphMVJ5WldWSmRHVnlZWFJ2Y2loMGFHbHpMQ0JiWFNsY2JuMWNibHh1Y0hKdmRHOHVaMlVnUFNCbWRXNWpkR2x2YmloclpYa3BJSHRjYmlBZ2RtRnlJR050Y0NBOUlIUm9hWE11WDJOdmJYQmhjbVZjYmlBZ2RtRnlJRzRnUFNCMGFHbHpMbkp2YjNSY2JpQWdkbUZ5SUhOMFlXTnJJRDBnVzExY2JpQWdkbUZ5SUd4aGMzUmZjSFJ5SUQwZ01GeHVJQ0IzYUdsc1pTaHVLU0I3WEc0Z0lDQWdkbUZ5SUdRZ1BTQmpiWEFvYTJWNUxDQnVMbXRsZVNsY2JpQWdJQ0J6ZEdGamF5NXdkWE5vS0c0cFhHNGdJQ0FnYVdZb1pDQThQU0F3S1NCN1hHNGdJQ0FnSUNCc1lYTjBYM0IwY2lBOUlITjBZV05yTG14bGJtZDBhRnh1SUNBZ0lIMWNiaUFnSUNCcFppaGtJRHc5SURBcElIdGNiaUFnSUNBZ0lHNGdQU0J1TG14bFpuUmNiaUFnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnYmlBOUlHNHVjbWxuYUhSY2JpQWdJQ0I5WEc0Z0lIMWNiaUFnYzNSaFkyc3ViR1Z1WjNSb0lEMGdiR0Z6ZEY5d2RISmNiaUFnY21WMGRYSnVJRzVsZHlCU1pXUkNiR0ZqYTFSeVpXVkpkR1Z5WVhSdmNpaDBhR2x6TENCemRHRmpheWxjYm4xY2JseHVjSEp2ZEc4dVozUWdQU0JtZFc1amRHbHZiaWhyWlhrcElIdGNiaUFnZG1GeUlHTnRjQ0E5SUhSb2FYTXVYMk52YlhCaGNtVmNiaUFnZG1GeUlHNGdQU0IwYUdsekxuSnZiM1JjYmlBZ2RtRnlJSE4wWVdOcklEMGdXMTFjYmlBZ2RtRnlJR3hoYzNSZmNIUnlJRDBnTUZ4dUlDQjNhR2xzWlNodUtTQjdYRzRnSUNBZ2RtRnlJR1FnUFNCamJYQW9hMlY1TENCdUxtdGxlU2xjYmlBZ0lDQnpkR0ZqYXk1d2RYTm9LRzRwWEc0Z0lDQWdhV1lvWkNBOElEQXBJSHRjYmlBZ0lDQWdJR3hoYzNSZmNIUnlJRDBnYzNSaFkyc3ViR1Z1WjNSb1hHNGdJQ0FnZlZ4dUlDQWdJR2xtS0dRZ1BDQXdLU0I3WEc0Z0lDQWdJQ0J1SUQwZ2JpNXNaV1owWEc0Z0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lHNGdQU0J1TG5KcFoyaDBYRzRnSUNBZ2ZWeHVJQ0I5WEc0Z0lITjBZV05yTG14bGJtZDBhQ0E5SUd4aGMzUmZjSFJ5WEc0Z0lISmxkSFZ5YmlCdVpYY2dVbVZrUW14aFkydFVjbVZsU1hSbGNtRjBiM0lvZEdocGN5d2djM1JoWTJzcFhHNTlYRzVjYm5CeWIzUnZMbXgwSUQwZ1puVnVZM1JwYjI0b2EyVjVLU0I3WEc0Z0lIWmhjaUJqYlhBZ1BTQjBhR2x6TGw5amIyMXdZWEpsWEc0Z0lIWmhjaUJ1SUQwZ2RHaHBjeTV5YjI5MFhHNGdJSFpoY2lCemRHRmpheUE5SUZ0ZFhHNGdJSFpoY2lCc1lYTjBYM0IwY2lBOUlEQmNiaUFnZDJocGJHVW9iaWtnZTF4dUlDQWdJSFpoY2lCa0lEMGdZMjF3S0d0bGVTd2diaTVyWlhrcFhHNGdJQ0FnYzNSaFkyc3VjSFZ6YUNodUtWeHVJQ0FnSUdsbUtHUWdQaUF3S1NCN1hHNGdJQ0FnSUNCc1lYTjBYM0IwY2lBOUlITjBZV05yTG14bGJtZDBhRnh1SUNBZ0lIMWNiaUFnSUNCcFppaGtJRHc5SURBcElIdGNiaUFnSUNBZ0lHNGdQU0J1TG14bFpuUmNiaUFnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnYmlBOUlHNHVjbWxuYUhSY2JpQWdJQ0I5WEc0Z0lIMWNiaUFnYzNSaFkyc3ViR1Z1WjNSb0lEMGdiR0Z6ZEY5d2RISmNiaUFnY21WMGRYSnVJRzVsZHlCU1pXUkNiR0ZqYTFSeVpXVkpkR1Z5WVhSdmNpaDBhR2x6TENCemRHRmpheWxjYm4xY2JseHVjSEp2ZEc4dWJHVWdQU0JtZFc1amRHbHZiaWhyWlhrcElIdGNiaUFnZG1GeUlHTnRjQ0E5SUhSb2FYTXVYMk52YlhCaGNtVmNiaUFnZG1GeUlHNGdQU0IwYUdsekxuSnZiM1JjYmlBZ2RtRnlJSE4wWVdOcklEMGdXMTFjYmlBZ2RtRnlJR3hoYzNSZmNIUnlJRDBnTUZ4dUlDQjNhR2xzWlNodUtTQjdYRzRnSUNBZ2RtRnlJR1FnUFNCamJYQW9hMlY1TENCdUxtdGxlU2xjYmlBZ0lDQnpkR0ZqYXk1d2RYTm9LRzRwWEc0Z0lDQWdhV1lvWkNBK1BTQXdLU0I3WEc0Z0lDQWdJQ0JzWVhOMFgzQjBjaUE5SUhOMFlXTnJMbXhsYm1kMGFGeHVJQ0FnSUgxY2JpQWdJQ0JwWmloa0lEd2dNQ2tnZTF4dUlDQWdJQ0FnYmlBOUlHNHViR1ZtZEZ4dUlDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQnVJRDBnYmk1eWFXZG9kRnh1SUNBZ0lIMWNiaUFnZlZ4dUlDQnpkR0ZqYXk1c1pXNW5kR2dnUFNCc1lYTjBYM0IwY2x4dUlDQnlaWFIxY200Z2JtVjNJRkpsWkVKc1lXTnJWSEpsWlVsMFpYSmhkRzl5S0hSb2FYTXNJSE4wWVdOcktWeHVmVnh1WEc0dkwwWnBibVJ6SUhSb1pTQnBkR1Z0SUhkcGRHZ2dhMlY1SUdsbUlHbDBJR1Y0YVhOMGMxeHVjSEp2ZEc4dVptbHVaQ0E5SUdaMWJtTjBhVzl1S0d0bGVTa2dlMXh1SUNCMllYSWdZMjF3SUQwZ2RHaHBjeTVmWTI5dGNHRnlaVnh1SUNCMllYSWdiaUE5SUhSb2FYTXVjbTl2ZEZ4dUlDQjJZWElnYzNSaFkyc2dQU0JiWFZ4dUlDQjNhR2xzWlNodUtTQjdYRzRnSUNBZ2RtRnlJR1FnUFNCamJYQW9hMlY1TENCdUxtdGxlU2xjYmlBZ0lDQnpkR0ZqYXk1d2RYTm9LRzRwWEc0Z0lDQWdhV1lvWkNBOVBUMGdNQ2tnZTF4dUlDQWdJQ0FnY21WMGRYSnVJRzVsZHlCU1pXUkNiR0ZqYTFSeVpXVkpkR1Z5WVhSdmNpaDBhR2x6TENCemRHRmpheWxjYmlBZ0lDQjlYRzRnSUNBZ2FXWW9aQ0E4UFNBd0tTQjdYRzRnSUNBZ0lDQnVJRDBnYmk1c1pXWjBYRzRnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUc0Z1BTQnVMbkpwWjJoMFhHNGdJQ0FnZlZ4dUlDQjlYRzRnSUhKbGRIVnliaUJ1WlhjZ1VtVmtRbXhoWTJ0VWNtVmxTWFJsY21GMGIzSW9kR2hwY3l3Z1cxMHBYRzU5WEc1Y2JpOHZVbVZ0YjNabGN5QnBkR1Z0SUhkcGRHZ2dhMlY1SUdaeWIyMGdkSEpsWlZ4dWNISnZkRzh1Y21WdGIzWmxJRDBnWm5WdVkzUnBiMjRvYTJWNUtTQjdYRzRnSUhaaGNpQnBkR1Z5SUQwZ2RHaHBjeTVtYVc1a0tHdGxlU2xjYmlBZ2FXWW9hWFJsY2lrZ2UxeHVJQ0FnSUhKbGRIVnliaUJwZEdWeUxuSmxiVzkyWlNncFhHNGdJSDFjYmlBZ2NtVjBkWEp1SUhSb2FYTmNibjFjYmx4dUx5OVNaWFIxY201eklIUm9aU0JwZEdWdElHRjBJR0JyWlhsZ1hHNXdjbTkwYnk1blpYUWdQU0JtZFc1amRHbHZiaWhyWlhrcElIdGNiaUFnZG1GeUlHTnRjQ0E5SUhSb2FYTXVYMk52YlhCaGNtVmNiaUFnZG1GeUlHNGdQU0IwYUdsekxuSnZiM1JjYmlBZ2QyaHBiR1VvYmlrZ2UxeHVJQ0FnSUhaaGNpQmtJRDBnWTIxd0tHdGxlU3dnYmk1clpYa3BYRzRnSUNBZ2FXWW9aQ0E5UFQwZ01Da2dlMXh1SUNBZ0lDQWdjbVYwZFhKdUlHNHVkbUZzZFdWY2JpQWdJQ0I5WEc0Z0lDQWdhV1lvWkNBOFBTQXdLU0I3WEc0Z0lDQWdJQ0J1SUQwZ2JpNXNaV1owWEc0Z0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lHNGdQU0J1TG5KcFoyaDBYRzRnSUNBZ2ZWeHVJQ0I5WEc0Z0lISmxkSFZ5Ymx4dWZWeHVYRzR2TDBsMFpYSmhkRzl5SUdadmNpQnlaV1FnWW14aFkyc2dkSEpsWlZ4dVpuVnVZM1JwYjI0Z1VtVmtRbXhoWTJ0VWNtVmxTWFJsY21GMGIzSW9kSEpsWlN3Z2MzUmhZMnNwSUh0Y2JpQWdkR2hwY3k1MGNtVmxJRDBnZEhKbFpWeHVJQ0IwYUdsekxsOXpkR0ZqYXlBOUlITjBZV05yWEc1OVhHNWNiblpoY2lCcGNISnZkRzhnUFNCU1pXUkNiR0ZqYTFSeVpXVkpkR1Z5WVhSdmNpNXdjbTkwYjNSNWNHVmNibHh1THk5VVpYTjBJR2xtSUdsMFpYSmhkRzl5SUdseklIWmhiR2xrWEc1UFltcGxZM1F1WkdWbWFXNWxVSEp2Y0dWeWRIa29hWEJ5YjNSdkxDQmNJblpoYkdsa1hDSXNJSHRjYmlBZ1oyVjBPaUJtZFc1amRHbHZiaWdwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdkR2hwY3k1ZmMzUmhZMnN1YkdWdVozUm9JRDRnTUZ4dUlDQjlYRzU5S1Z4dVhHNHZMMDV2WkdVZ2IyWWdkR2hsSUdsMFpYSmhkRzl5WEc1UFltcGxZM1F1WkdWbWFXNWxVSEp2Y0dWeWRIa29hWEJ5YjNSdkxDQmNJbTV2WkdWY0lpd2dlMXh1SUNCblpYUTZJR1oxYm1OMGFXOXVLQ2tnZTF4dUlDQWdJR2xtS0hSb2FYTXVYM04wWVdOckxteGxibWQwYUNBK0lEQXBJSHRjYmlBZ0lDQWdJSEpsZEhWeWJpQjBhR2x6TGw5emRHRmphMXQwYUdsekxsOXpkR0ZqYXk1c1pXNW5kR2d0TVYxY2JpQWdJQ0I5WEc0Z0lDQWdjbVYwZFhKdUlHNTFiR3hjYmlBZ2ZTeGNiaUFnWlc1MWJXVnlZV0pzWlRvZ2RISjFaVnh1ZlNsY2JseHVMeTlOWVd0bGN5QmhJR052Y0hrZ2IyWWdZVzRnYVhSbGNtRjBiM0pjYm1sd2NtOTBieTVqYkc5dVpTQTlJR1oxYm1OMGFXOXVLQ2tnZTF4dUlDQnlaWFIxY200Z2JtVjNJRkpsWkVKc1lXTnJWSEpsWlVsMFpYSmhkRzl5S0hSb2FYTXVkSEpsWlN3Z2RHaHBjeTVmYzNSaFkyc3VjMnhwWTJVb0tTbGNibjFjYmx4dUx5OVRkMkZ3Y3lCMGQyOGdibTlrWlhOY2JtWjFibU4wYVc5dUlITjNZWEJPYjJSbEtHNHNJSFlwSUh0Y2JpQWdiaTVyWlhrZ1BTQjJMbXRsZVZ4dUlDQnVMblpoYkhWbElEMGdkaTUyWVd4MVpWeHVJQ0J1TG14bFpuUWdQU0IyTG14bFpuUmNiaUFnYmk1eWFXZG9kQ0E5SUhZdWNtbG5hSFJjYmlBZ2JpNWZZMjlzYjNJZ1BTQjJMbDlqYjJ4dmNseHVJQ0J1TGw5amIzVnVkQ0E5SUhZdVgyTnZkVzUwWEc1OVhHNWNiaTh2Um1sNElIVndJR0VnWkc5MVlteGxJR0pzWVdOcklHNXZaR1VnYVc0Z1lTQjBjbVZsWEc1bWRXNWpkR2x2YmlCbWFYaEViM1ZpYkdWQ2JHRmpheWh6ZEdGamF5a2dlMXh1SUNCMllYSWdiaXdnY0N3Z2N5d2dlbHh1SUNCbWIzSW9kbUZ5SUdrOWMzUmhZMnN1YkdWdVozUm9MVEU3SUdrK1BUQTdJQzB0YVNrZ2UxeHVJQ0FnSUc0Z1BTQnpkR0ZqYTF0cFhWeHVJQ0FnSUdsbUtHa2dQVDA5SURBcElIdGNiaUFnSUNBZ0lHNHVYMk52Ykc5eUlEMGdRa3hCUTB0Y2JpQWdJQ0FnSUhKbGRIVnlibHh1SUNBZ0lIMWNiaUFnSUNBdkwyTnZibk52YkdVdWJHOW5LRndpZG1semFYUWdibTlrWlRwY0lpd2diaTVyWlhrc0lHa3NJSE4wWVdOclcybGRMbXRsZVN3Z2MzUmhZMnRiYVMweFhTNXJaWGtwWEc0Z0lDQWdjQ0E5SUhOMFlXTnJXMmt0TVYxY2JpQWdJQ0JwWmlod0xteGxablFnUFQwOUlHNHBJSHRjYmlBZ0lDQWdJQzh2WTI5dWMyOXNaUzVzYjJjb1hDSnNaV1owSUdOb2FXeGtYQ0lwWEc0Z0lDQWdJQ0J6SUQwZ2NDNXlhV2RvZEZ4dUlDQWdJQ0FnYVdZb2N5NXlhV2RvZENBbUppQnpMbkpwWjJoMExsOWpiMnh2Y2lBOVBUMGdVa1ZFS1NCN1hHNGdJQ0FnSUNBZ0lDOHZZMjl1YzI5c1pTNXNiMmNvWENKallYTmxJREU2SUhKcFoyaDBJSE5wWW14cGJtY2dZMmhwYkdRZ2NtVmtYQ0lwWEc0Z0lDQWdJQ0FnSUhNZ1BTQndMbkpwWjJoMElEMGdZMnh2Ym1WT2IyUmxLSE1wWEc0Z0lDQWdJQ0FnSUhvZ1BTQnpMbkpwWjJoMElEMGdZMnh2Ym1WT2IyUmxLSE11Y21sbmFIUXBYRzRnSUNBZ0lDQWdJSEF1Y21sbmFIUWdQU0J6TG14bFpuUmNiaUFnSUNBZ0lDQWdjeTVzWldaMElEMGdjRnh1SUNBZ0lDQWdJQ0J6TG5KcFoyaDBJRDBnZWx4dUlDQWdJQ0FnSUNCekxsOWpiMnh2Y2lBOUlIQXVYMk52Ykc5eVhHNGdJQ0FnSUNBZ0lHNHVYMk52Ykc5eUlEMGdRa3hCUTB0Y2JpQWdJQ0FnSUNBZ2NDNWZZMjlzYjNJZ1BTQkNURUZEUzF4dUlDQWdJQ0FnSUNCNkxsOWpiMnh2Y2lBOUlFSk1RVU5MWEc0Z0lDQWdJQ0FnSUhKbFkyOTFiblFvY0NsY2JpQWdJQ0FnSUNBZ2NtVmpiM1Z1ZENoektWeHVJQ0FnSUNBZ0lDQnBaaWhwSUQ0Z01Ta2dlMXh1SUNBZ0lDQWdJQ0FnSUhaaGNpQndjQ0E5SUhOMFlXTnJXMmt0TWwxY2JpQWdJQ0FnSUNBZ0lDQnBaaWh3Y0M1c1pXWjBJRDA5UFNCd0tTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCd2NDNXNaV1owSUQwZ2MxeHVJQ0FnSUNBZ0lDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCd2NDNXlhV2RvZENBOUlITmNiaUFnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2MzUmhZMnRiYVMweFhTQTlJSE5jYmlBZ0lDQWdJQ0FnY21WMGRYSnVYRzRnSUNBZ0lDQjlJR1ZzYzJVZ2FXWW9jeTVzWldaMElDWW1JSE11YkdWbWRDNWZZMjlzYjNJZ1BUMDlJRkpGUkNrZ2UxeHVJQ0FnSUNBZ0lDQXZMMk52Ym5OdmJHVXViRzluS0Z3aVkyRnpaU0F4T2lCc1pXWjBJSE5wWW14cGJtY2dZMmhwYkdRZ2NtVmtYQ0lwWEc0Z0lDQWdJQ0FnSUhNZ1BTQndMbkpwWjJoMElEMGdZMnh2Ym1WT2IyUmxLSE1wWEc0Z0lDQWdJQ0FnSUhvZ1BTQnpMbXhsWm5RZ1BTQmpiRzl1WlU1dlpHVW9jeTVzWldaMEtWeHVJQ0FnSUNBZ0lDQndMbkpwWjJoMElEMGdlaTVzWldaMFhHNGdJQ0FnSUNBZ0lITXViR1ZtZENBOUlIb3VjbWxuYUhSY2JpQWdJQ0FnSUNBZ2VpNXNaV1owSUQwZ2NGeHVJQ0FnSUNBZ0lDQjZMbkpwWjJoMElEMGdjMXh1SUNBZ0lDQWdJQ0I2TGw5amIyeHZjaUE5SUhBdVgyTnZiRzl5WEc0Z0lDQWdJQ0FnSUhBdVgyTnZiRzl5SUQwZ1FreEJRMHRjYmlBZ0lDQWdJQ0FnY3k1ZlkyOXNiM0lnUFNCQ1RFRkRTMXh1SUNBZ0lDQWdJQ0J1TGw5amIyeHZjaUE5SUVKTVFVTkxYRzRnSUNBZ0lDQWdJSEpsWTI5MWJuUW9jQ2xjYmlBZ0lDQWdJQ0FnY21WamIzVnVkQ2h6S1Z4dUlDQWdJQ0FnSUNCeVpXTnZkVzUwS0hvcFhHNGdJQ0FnSUNBZ0lHbG1LR2tnUGlBeEtTQjdYRzRnSUNBZ0lDQWdJQ0FnZG1GeUlIQndJRDBnYzNSaFkydGJhUzB5WFZ4dUlDQWdJQ0FnSUNBZ0lHbG1LSEJ3TG14bFpuUWdQVDA5SUhBcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhCd0xteGxablFnUFNCNlhHNGdJQ0FnSUNBZ0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhCd0xuSnBaMmgwSUQwZ2VseHVJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCemRHRmphMXRwTFRGZElEMGdlbHh1SUNBZ0lDQWdJQ0J5WlhSMWNtNWNiaUFnSUNBZ0lIMWNiaUFnSUNBZ0lHbG1LSE11WDJOdmJHOXlJRDA5UFNCQ1RFRkRTeWtnZTF4dUlDQWdJQ0FnSUNCcFppaHdMbDlqYjJ4dmNpQTlQVDBnVWtWRUtTQjdYRzRnSUNBZ0lDQWdJQ0FnTHk5amIyNXpiMnhsTG14dlp5aGNJbU5oYzJVZ01qb2dZbXhoWTJzZ2MybGliR2x1Wnl3Z2NtVmtJSEJoY21WdWRGd2lMQ0J3TG5KcFoyaDBMblpoYkhWbEtWeHVJQ0FnSUNBZ0lDQWdJSEF1WDJOdmJHOXlJRDBnUWt4QlEwdGNiaUFnSUNBZ0lDQWdJQ0J3TG5KcFoyaDBJRDBnY21Wd1lXbHVkQ2hTUlVRc0lITXBYRzRnSUNBZ0lDQWdJQ0FnY21WMGRYSnVYRzRnSUNBZ0lDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQWdJQ0FnTHk5amIyNXpiMnhsTG14dlp5aGNJbU5oYzJVZ01qb2dZbXhoWTJzZ2MybGliR2x1Wnl3Z1lteGhZMnNnY0dGeVpXNTBYQ0lzSUhBdWNtbG5hSFF1ZG1Gc2RXVXBYRzRnSUNBZ0lDQWdJQ0FnY0M1eWFXZG9kQ0E5SUhKbGNHRnBiblFvVWtWRUxDQnpLVnh1SUNBZ0lDQWdJQ0FnSUdOdmJuUnBiblZsSUNCY2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ0x5OWpiMjV6YjJ4bExteHZaeWhjSW1OaGMyVWdNem9nY21Wa0lITnBZbXhwYm1kY0lpbGNiaUFnSUNBZ0lDQWdjeUE5SUdOc2IyNWxUbTlrWlNoektWeHVJQ0FnSUNBZ0lDQndMbkpwWjJoMElEMGdjeTVzWldaMFhHNGdJQ0FnSUNBZ0lITXViR1ZtZENBOUlIQmNiaUFnSUNBZ0lDQWdjeTVmWTI5c2IzSWdQU0J3TGw5amIyeHZjbHh1SUNBZ0lDQWdJQ0J3TGw5amIyeHZjaUE5SUZKRlJGeHVJQ0FnSUNBZ0lDQnlaV052ZFc1MEtIQXBYRzRnSUNBZ0lDQWdJSEpsWTI5MWJuUW9jeWxjYmlBZ0lDQWdJQ0FnYVdZb2FTQStJREVwSUh0Y2JpQWdJQ0FnSUNBZ0lDQjJZWElnY0hBZ1BTQnpkR0ZqYTF0cExUSmRYRzRnSUNBZ0lDQWdJQ0FnYVdZb2NIQXViR1ZtZENBOVBUMGdjQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdjSEF1YkdWbWRDQTlJSE5jYmlBZ0lDQWdJQ0FnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdjSEF1Y21sbmFIUWdQU0J6WEc0Z0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSE4wWVdOclcya3RNVjBnUFNCelhHNGdJQ0FnSUNBZ0lITjBZV05yVzJsZElEMGdjRnh1SUNBZ0lDQWdJQ0JwWmlocEt6RWdQQ0J6ZEdGamF5NXNaVzVuZEdncElIdGNiaUFnSUNBZ0lDQWdJQ0J6ZEdGamExdHBLekZkSUQwZ2JseHVJQ0FnSUNBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ0lDQWdJSE4wWVdOckxuQjFjMmdvYmlsY2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQnBJRDBnYVNzeVhHNGdJQ0FnSUNCOVhHNGdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQzh2WTI5dWMyOXNaUzVzYjJjb1hDSnlhV2RvZENCamFHbHNaRndpS1Z4dUlDQWdJQ0FnY3lBOUlIQXViR1ZtZEZ4dUlDQWdJQ0FnYVdZb2N5NXNaV1owSUNZbUlITXViR1ZtZEM1ZlkyOXNiM0lnUFQwOUlGSkZSQ2tnZTF4dUlDQWdJQ0FnSUNBdkwyTnZibk52YkdVdWJHOW5LRndpWTJGelpTQXhPaUJzWldaMElITnBZbXhwYm1jZ1kyaHBiR1FnY21Wa1hDSXNJSEF1ZG1Gc2RXVXNJSEF1WDJOdmJHOXlLVnh1SUNBZ0lDQWdJQ0J6SUQwZ2NDNXNaV1owSUQwZ1kyeHZibVZPYjJSbEtITXBYRzRnSUNBZ0lDQWdJSG9nUFNCekxteGxablFnUFNCamJHOXVaVTV2WkdVb2N5NXNaV1owS1Z4dUlDQWdJQ0FnSUNCd0xteGxablFnUFNCekxuSnBaMmgwWEc0Z0lDQWdJQ0FnSUhNdWNtbG5hSFFnUFNCd1hHNGdJQ0FnSUNBZ0lITXViR1ZtZENBOUlIcGNiaUFnSUNBZ0lDQWdjeTVmWTI5c2IzSWdQU0J3TGw5amIyeHZjbHh1SUNBZ0lDQWdJQ0J1TGw5amIyeHZjaUE5SUVKTVFVTkxYRzRnSUNBZ0lDQWdJSEF1WDJOdmJHOXlJRDBnUWt4QlEwdGNiaUFnSUNBZ0lDQWdlaTVmWTI5c2IzSWdQU0JDVEVGRFMxeHVJQ0FnSUNBZ0lDQnlaV052ZFc1MEtIQXBYRzRnSUNBZ0lDQWdJSEpsWTI5MWJuUW9jeWxjYmlBZ0lDQWdJQ0FnYVdZb2FTQStJREVwSUh0Y2JpQWdJQ0FnSUNBZ0lDQjJZWElnY0hBZ1BTQnpkR0ZqYTF0cExUSmRYRzRnSUNBZ0lDQWdJQ0FnYVdZb2NIQXVjbWxuYUhRZ1BUMDlJSEFwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSEJ3TG5KcFoyaDBJRDBnYzF4dUlDQWdJQ0FnSUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J3Y0M1c1pXWjBJRDBnYzF4dUlDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0J6ZEdGamExdHBMVEZkSUQwZ2MxeHVJQ0FnSUNBZ0lDQnlaWFIxY201Y2JpQWdJQ0FnSUgwZ1pXeHpaU0JwWmloekxuSnBaMmgwSUNZbUlITXVjbWxuYUhRdVgyTnZiRzl5SUQwOVBTQlNSVVFwSUh0Y2JpQWdJQ0FnSUNBZ0x5OWpiMjV6YjJ4bExteHZaeWhjSW1OaGMyVWdNVG9nY21sbmFIUWdjMmxpYkdsdVp5QmphR2xzWkNCeVpXUmNJaWxjYmlBZ0lDQWdJQ0FnY3lBOUlIQXViR1ZtZENBOUlHTnNiMjVsVG05a1pTaHpLVnh1SUNBZ0lDQWdJQ0I2SUQwZ2N5NXlhV2RvZENBOUlHTnNiMjVsVG05a1pTaHpMbkpwWjJoMEtWeHVJQ0FnSUNBZ0lDQndMbXhsWm5RZ1BTQjZMbkpwWjJoMFhHNGdJQ0FnSUNBZ0lITXVjbWxuYUhRZ1BTQjZMbXhsWm5SY2JpQWdJQ0FnSUNBZ2VpNXlhV2RvZENBOUlIQmNiaUFnSUNBZ0lDQWdlaTVzWldaMElEMGdjMXh1SUNBZ0lDQWdJQ0I2TGw5amIyeHZjaUE5SUhBdVgyTnZiRzl5WEc0Z0lDQWdJQ0FnSUhBdVgyTnZiRzl5SUQwZ1FreEJRMHRjYmlBZ0lDQWdJQ0FnY3k1ZlkyOXNiM0lnUFNCQ1RFRkRTMXh1SUNBZ0lDQWdJQ0J1TGw5amIyeHZjaUE5SUVKTVFVTkxYRzRnSUNBZ0lDQWdJSEpsWTI5MWJuUW9jQ2xjYmlBZ0lDQWdJQ0FnY21WamIzVnVkQ2h6S1Z4dUlDQWdJQ0FnSUNCeVpXTnZkVzUwS0hvcFhHNGdJQ0FnSUNBZ0lHbG1LR2tnUGlBeEtTQjdYRzRnSUNBZ0lDQWdJQ0FnZG1GeUlIQndJRDBnYzNSaFkydGJhUzB5WFZ4dUlDQWdJQ0FnSUNBZ0lHbG1LSEJ3TG5KcFoyaDBJRDA5UFNCd0tTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCd2NDNXlhV2RvZENBOUlIcGNiaUFnSUNBZ0lDQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2NIQXViR1ZtZENBOUlIcGNiaUFnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2MzUmhZMnRiYVMweFhTQTlJSHBjYmlBZ0lDQWdJQ0FnY21WMGRYSnVYRzRnSUNBZ0lDQjlYRzRnSUNBZ0lDQnBaaWh6TGw5amIyeHZjaUE5UFQwZ1FreEJRMHNwSUh0Y2JpQWdJQ0FnSUNBZ2FXWW9jQzVmWTI5c2IzSWdQVDA5SUZKRlJDa2dlMXh1SUNBZ0lDQWdJQ0FnSUM4dlkyOXVjMjlzWlM1c2IyY29YQ0pqWVhObElESTZJR0pzWVdOcklITnBZbXhwYm1jc0lISmxaQ0J3WVhKbGJuUmNJaWxjYmlBZ0lDQWdJQ0FnSUNCd0xsOWpiMnh2Y2lBOUlFSk1RVU5MWEc0Z0lDQWdJQ0FnSUNBZ2NDNXNaV1owSUQwZ2NtVndZV2x1ZENoU1JVUXNJSE1wWEc0Z0lDQWdJQ0FnSUNBZ2NtVjBkWEp1WEc0Z0lDQWdJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUNBZ0x5OWpiMjV6YjJ4bExteHZaeWhjSW1OaGMyVWdNam9nWW14aFkyc2djMmxpYkdsdVp5d2dZbXhoWTJzZ2NHRnlaVzUwWENJcFhHNGdJQ0FnSUNBZ0lDQWdjQzVzWldaMElEMGdjbVZ3WVdsdWRDaFNSVVFzSUhNcFhHNGdJQ0FnSUNBZ0lDQWdZMjl1ZEdsdWRXVWdJRnh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdJQ0F2TDJOdmJuTnZiR1V1Ykc5bktGd2lZMkZ6WlNBek9pQnlaV1FnYzJsaWJHbHVaMXdpS1Z4dUlDQWdJQ0FnSUNCeklEMGdZMnh2Ym1WT2IyUmxLSE1wWEc0Z0lDQWdJQ0FnSUhBdWJHVm1kQ0E5SUhNdWNtbG5hSFJjYmlBZ0lDQWdJQ0FnY3k1eWFXZG9kQ0E5SUhCY2JpQWdJQ0FnSUNBZ2N5NWZZMjlzYjNJZ1BTQndMbDlqYjJ4dmNseHVJQ0FnSUNBZ0lDQndMbDlqYjJ4dmNpQTlJRkpGUkZ4dUlDQWdJQ0FnSUNCeVpXTnZkVzUwS0hBcFhHNGdJQ0FnSUNBZ0lISmxZMjkxYm5Rb2N5bGNiaUFnSUNBZ0lDQWdhV1lvYVNBK0lERXBJSHRjYmlBZ0lDQWdJQ0FnSUNCMllYSWdjSEFnUFNCemRHRmphMXRwTFRKZFhHNGdJQ0FnSUNBZ0lDQWdhV1lvY0hBdWNtbG5hSFFnUFQwOUlIQXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIQndMbkpwWjJoMElEMGdjMXh1SUNBZ0lDQWdJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQndjQzVzWldaMElEMGdjMXh1SUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQnpkR0ZqYTF0cExURmRJRDBnYzF4dUlDQWdJQ0FnSUNCemRHRmphMXRwWFNBOUlIQmNiaUFnSUNBZ0lDQWdhV1lvYVNzeElEd2djM1JoWTJzdWJHVnVaM1JvS1NCN1hHNGdJQ0FnSUNBZ0lDQWdjM1JoWTJ0YmFTc3hYU0E5SUc1Y2JpQWdJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ0lDQnpkR0ZqYXk1d2RYTm9LRzRwWEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2FTQTlJR2tyTWx4dUlDQWdJQ0FnZlZ4dUlDQWdJSDFjYmlBZ2ZWeHVmVnh1WEc0dkwxSmxiVzkyWlhNZ2FYUmxiU0JoZENCcGRHVnlZWFJ2Y2lCbWNtOXRJSFJ5WldWY2JtbHdjbTkwYnk1eVpXMXZkbVVnUFNCbWRXNWpkR2x2YmlncElIdGNiaUFnZG1GeUlITjBZV05ySUQwZ2RHaHBjeTVmYzNSaFkydGNiaUFnYVdZb2MzUmhZMnN1YkdWdVozUm9JRDA5UFNBd0tTQjdYRzRnSUNBZ2NtVjBkWEp1SUhSb2FYTXVkSEpsWlZ4dUlDQjlYRzRnSUM4dlJtbHljM1FnWTI5d2VTQndZWFJvSUhSdklHNXZaR1ZjYmlBZ2RtRnlJR056ZEdGamF5QTlJRzVsZHlCQmNuSmhlU2h6ZEdGamF5NXNaVzVuZEdncFhHNGdJSFpoY2lCdUlEMGdjM1JoWTJ0YmMzUmhZMnN1YkdWdVozUm9MVEZkWEc0Z0lHTnpkR0ZqYTF0amMzUmhZMnN1YkdWdVozUm9MVEZkSUQwZ2JtVjNJRkpDVG05a1pTaHVMbDlqYjJ4dmNpd2diaTVyWlhrc0lHNHVkbUZzZFdVc0lHNHViR1ZtZEN3Z2JpNXlhV2RvZEN3Z2JpNWZZMjkxYm5RcFhHNGdJR1p2Y2loMllYSWdhVDF6ZEdGamF5NXNaVzVuZEdndE1qc2dhVDQ5TURzZ0xTMXBLU0I3WEc0Z0lDQWdkbUZ5SUc0Z1BTQnpkR0ZqYTF0cFhWeHVJQ0FnSUdsbUtHNHViR1ZtZENBOVBUMGdjM1JoWTJ0YmFTc3hYU2tnZTF4dUlDQWdJQ0FnWTNOMFlXTnJXMmxkSUQwZ2JtVjNJRkpDVG05a1pTaHVMbDlqYjJ4dmNpd2diaTVyWlhrc0lHNHVkbUZzZFdVc0lHTnpkR0ZqYTF0cEt6RmRMQ0J1TG5KcFoyaDBMQ0J1TGw5amIzVnVkQ2xjYmlBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ1kzTjBZV05yVzJsZElEMGdibVYzSUZKQ1RtOWtaU2h1TGw5amIyeHZjaXdnYmk1clpYa3NJRzR1ZG1Gc2RXVXNJRzR1YkdWbWRDd2dZM04wWVdOclcya3JNVjBzSUc0dVgyTnZkVzUwS1Z4dUlDQWdJSDFjYmlBZ2ZWeHVYRzRnSUM4dlIyVjBJRzV2WkdWY2JpQWdiaUE5SUdOemRHRmphMXRqYzNSaFkyc3ViR1Z1WjNSb0xURmRYRzRnSUM4dlkyOXVjMjlzWlM1c2IyY29YQ0p6ZEdGeWRDQnlaVzF2ZG1VNklGd2lMQ0J1TG5aaGJIVmxLVnh1WEc0Z0lDOHZTV1lnYm05MElHeGxZV1lzSUhSb1pXNGdjM2RoY0NCM2FYUm9JSEJ5WlhacGIzVnpJRzV2WkdWY2JpQWdhV1lvYmk1c1pXWjBJQ1ltSUc0dWNtbG5hSFFwSUh0Y2JpQWdJQ0F2TDJOdmJuTnZiR1V1Ykc5bktGd2liVzkyYVc1bklIUnZJR3hsWVdaY0lpbGNibHh1SUNBZ0lDOHZSbWx5YzNRZ2QyRnNheUIwYnlCd2NtVjJhVzkxY3lCc1pXRm1YRzRnSUNBZ2RtRnlJSE53YkdsMElEMGdZM04wWVdOckxteGxibWQwYUZ4dUlDQWdJRzRnUFNCdUxteGxablJjYmlBZ0lDQjNhR2xzWlNodUxuSnBaMmgwS1NCN1hHNGdJQ0FnSUNCamMzUmhZMnN1Y0hWemFDaHVLVnh1SUNBZ0lDQWdiaUE5SUc0dWNtbG5hSFJjYmlBZ0lDQjlYRzRnSUNBZ0x5OURiM0I1SUhCaGRHZ2dkRzhnYkdWaFpseHVJQ0FnSUhaaGNpQjJJRDBnWTNOMFlXTnJXM053YkdsMExURmRYRzRnSUNBZ1kzTjBZV05yTG5CMWMyZ29ibVYzSUZKQ1RtOWtaU2h1TGw5amIyeHZjaXdnZGk1clpYa3NJSFl1ZG1Gc2RXVXNJRzR1YkdWbWRDd2diaTV5YVdkb2RDd2diaTVmWTI5MWJuUXBLVnh1SUNBZ0lHTnpkR0ZqYTF0emNHeHBkQzB4WFM1clpYa2dQU0J1TG10bGVWeHVJQ0FnSUdOemRHRmphMXR6Y0d4cGRDMHhYUzUyWVd4MVpTQTlJRzR1ZG1Gc2RXVmNibHh1SUNBZ0lDOHZSbWw0SUhWd0lITjBZV05yWEc0Z0lDQWdabTl5S0haaGNpQnBQV056ZEdGamF5NXNaVzVuZEdndE1qc2dhVDQ5YzNCc2FYUTdJQzB0YVNrZ2UxeHVJQ0FnSUNBZ2JpQTlJR056ZEdGamExdHBYVnh1SUNBZ0lDQWdZM04wWVdOclcybGRJRDBnYm1WM0lGSkNUbTlrWlNodUxsOWpiMnh2Y2l3Z2JpNXJaWGtzSUc0dWRtRnNkV1VzSUc0dWJHVm1kQ3dnWTNOMFlXTnJXMmtyTVYwc0lHNHVYMk52ZFc1MEtWeHVJQ0FnSUgxY2JpQWdJQ0JqYzNSaFkydGJjM0JzYVhRdE1WMHViR1ZtZENBOUlHTnpkR0ZqYTF0emNHeHBkRjFjYmlBZ2ZWeHVJQ0F2TDJOdmJuTnZiR1V1Ykc5bktGd2ljM1JoWTJzOVhDSXNJR056ZEdGamF5NXRZWEFvWm5WdVkzUnBiMjRvZGlrZ2V5QnlaWFIxY200Z2RpNTJZV3gxWlNCOUtTbGNibHh1SUNBdkwxSmxiVzkyWlNCc1pXRm1JRzV2WkdWY2JpQWdiaUE5SUdOemRHRmphMXRqYzNSaFkyc3ViR1Z1WjNSb0xURmRYRzRnSUdsbUtHNHVYMk52Ykc5eUlEMDlQU0JTUlVRcElIdGNiaUFnSUNBdkwwVmhjM2tnWTJGelpUb2djbVZ0YjNacGJtY2djbVZrSUd4bFlXWmNiaUFnSUNBdkwyTnZibk52YkdVdWJHOW5LRndpVWtWRUlHeGxZV1pjSWlsY2JpQWdJQ0IyWVhJZ2NDQTlJR056ZEdGamExdGpjM1JoWTJzdWJHVnVaM1JvTFRKZFhHNGdJQ0FnYVdZb2NDNXNaV1owSUQwOVBTQnVLU0I3WEc0Z0lDQWdJQ0J3TG14bFpuUWdQU0J1ZFd4c1hHNGdJQ0FnZlNCbGJITmxJR2xtS0hBdWNtbG5hSFFnUFQwOUlHNHBJSHRjYmlBZ0lDQWdJSEF1Y21sbmFIUWdQU0J1ZFd4c1hHNGdJQ0FnZlZ4dUlDQWdJR056ZEdGamF5NXdiM0FvS1Z4dUlDQWdJR1p2Y2loMllYSWdhVDB3T3lCcFBHTnpkR0ZqYXk1c1pXNW5kR2c3SUNzcmFTa2dlMXh1SUNBZ0lDQWdZM04wWVdOclcybGRMbDlqYjNWdWRDMHRYRzRnSUNBZ2ZWeHVJQ0FnSUhKbGRIVnliaUJ1WlhjZ1VtVmtRbXhoWTJ0VWNtVmxLSFJvYVhNdWRISmxaUzVmWTI5dGNHRnlaU3dnWTNOMFlXTnJXekJkS1Z4dUlDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUdsbUtHNHViR1ZtZENCOGZDQnVMbkpwWjJoMEtTQjdYRzRnSUNBZ0lDQXZMMU5sWTI5dVpDQmxZWE41SUdOaGMyVTZJQ0JUYVc1bmJHVWdZMmhwYkdRZ1lteGhZMnNnY0dGeVpXNTBYRzRnSUNBZ0lDQXZMMk52Ym5OdmJHVXViRzluS0Z3aVFreEJRMHNnYzJsdVoyeGxJR05vYVd4a1hDSXBYRzRnSUNBZ0lDQnBaaWh1TG14bFpuUXBJSHRjYmlBZ0lDQWdJQ0FnYzNkaGNFNXZaR1VvYml3Z2JpNXNaV1owS1Z4dUlDQWdJQ0FnZlNCbGJITmxJR2xtS0c0dWNtbG5hSFFwSUh0Y2JpQWdJQ0FnSUNBZ2MzZGhjRTV2WkdVb2Jpd2diaTV5YVdkb2RDbGNiaUFnSUNBZ0lIMWNiaUFnSUNBZ0lDOHZRMmhwYkdRZ2JYVnpkQ0JpWlNCeVpXUXNJSE52SUhKbGNHRnBiblFnYVhRZ1lteGhZMnNnZEc4Z1ltRnNZVzVqWlNCamIyeHZjbHh1SUNBZ0lDQWdiaTVmWTI5c2IzSWdQU0JDVEVGRFMxeHVJQ0FnSUNBZ1ptOXlLSFpoY2lCcFBUQTdJR2s4WTNOMFlXTnJMbXhsYm1kMGFDMHhPeUFySzJrcElIdGNiaUFnSUNBZ0lDQWdZM04wWVdOclcybGRMbDlqYjNWdWRDMHRYRzRnSUNBZ0lDQjlYRzRnSUNBZ0lDQnlaWFIxY200Z2JtVjNJRkpsWkVKc1lXTnJWSEpsWlNoMGFHbHpMblJ5WldVdVgyTnZiWEJoY21Vc0lHTnpkR0ZqYTFzd1hTbGNiaUFnSUNCOUlHVnNjMlVnYVdZb1kzTjBZV05yTG14bGJtZDBhQ0E5UFQwZ01Ta2dlMXh1SUNBZ0lDQWdMeTlVYUdseVpDQmxZWE41SUdOaGMyVTZJSEp2YjNSY2JpQWdJQ0FnSUM4dlkyOXVjMjlzWlM1c2IyY29YQ0pTVDA5VVhDSXBYRzRnSUNBZ0lDQnlaWFIxY200Z2JtVjNJRkpsWkVKc1lXTnJWSEpsWlNoMGFHbHpMblJ5WldVdVgyTnZiWEJoY21Vc0lHNTFiR3dwWEc0Z0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDOHZTR0Z5WkNCallYTmxPaUJTWlhCaGFXNTBJRzRzSUdGdVpDQjBhR1Z1SUdSdklITnZiV1VnYm1GemRIa2djM1IxWm1aY2JpQWdJQ0FnSUM4dlkyOXVjMjlzWlM1c2IyY29YQ0pDVEVGRFN5QnNaV0ZtSUc1dklHTm9hV3hrY21WdVhDSXBYRzRnSUNBZ0lDQm1iM0lvZG1GeUlHazlNRHNnYVR4amMzUmhZMnN1YkdWdVozUm9PeUFySzJrcElIdGNiaUFnSUNBZ0lDQWdZM04wWVdOclcybGRMbDlqYjNWdWRDMHRYRzRnSUNBZ0lDQjlYRzRnSUNBZ0lDQjJZWElnY0dGeVpXNTBJRDBnWTNOMFlXTnJXMk56ZEdGamF5NXNaVzVuZEdndE1sMWNiaUFnSUNBZ0lHWnBlRVJ2ZFdKc1pVSnNZV05yS0dOemRHRmpheWxjYmlBZ0lDQWdJQzh2Um1sNElIVndJR3hwYm10elhHNGdJQ0FnSUNCcFppaHdZWEpsYm5RdWJHVm1kQ0E5UFQwZ2Jpa2dlMXh1SUNBZ0lDQWdJQ0J3WVhKbGJuUXViR1ZtZENBOUlHNTFiR3hjYmlBZ0lDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQWdJSEJoY21WdWRDNXlhV2RvZENBOUlHNTFiR3hjYmlBZ0lDQWdJSDFjYmlBZ0lDQjlYRzRnSUgxY2JpQWdjbVYwZFhKdUlHNWxkeUJTWldSQ2JHRmphMVJ5WldVb2RHaHBjeTUwY21WbExsOWpiMjF3WVhKbExDQmpjM1JoWTJ0Yk1GMHBYRzU5WEc1Y2JpOHZVbVYwZFhKdWN5QnJaWGxjYms5aWFtVmpkQzVrWldacGJtVlFjbTl3WlhKMGVTaHBjSEp2ZEc4c0lGd2lhMlY1WENJc0lIdGNiaUFnWjJWME9pQm1kVzVqZEdsdmJpZ3BJSHRjYmlBZ0lDQnBaaWgwYUdsekxsOXpkR0ZqYXk1c1pXNW5kR2dnUGlBd0tTQjdYRzRnSUNBZ0lDQnlaWFIxY200Z2RHaHBjeTVmYzNSaFkydGJkR2hwY3k1ZmMzUmhZMnN1YkdWdVozUm9MVEZkTG10bGVWeHVJQ0FnSUgxY2JpQWdJQ0J5WlhSMWNtNWNiaUFnZlN4Y2JpQWdaVzUxYldWeVlXSnNaVG9nZEhKMVpWeHVmU2xjYmx4dUx5OVNaWFIxY201eklIWmhiSFZsWEc1UFltcGxZM1F1WkdWbWFXNWxVSEp2Y0dWeWRIa29hWEJ5YjNSdkxDQmNJblpoYkhWbFhDSXNJSHRjYmlBZ1oyVjBPaUJtZFc1amRHbHZiaWdwSUh0Y2JpQWdJQ0JwWmloMGFHbHpMbDl6ZEdGamF5NXNaVzVuZEdnZ1BpQXdLU0I3WEc0Z0lDQWdJQ0J5WlhSMWNtNGdkR2hwY3k1ZmMzUmhZMnRiZEdocGN5NWZjM1JoWTJzdWJHVnVaM1JvTFRGZExuWmhiSFZsWEc0Z0lDQWdmVnh1SUNBZ0lISmxkSFZ5Ymx4dUlDQjlMRnh1SUNCbGJuVnRaWEpoWW14bE9pQjBjblZsWEc1OUtWeHVYRzVjYmk4dlVtVjBkWEp1Y3lCMGFHVWdjRzl6YVhScGIyNGdiMllnZEdocGN5QnBkR1Z5WVhSdmNpQnBiaUIwYUdVZ2MyOXlkR1ZrSUd4cGMzUmNiazlpYW1WamRDNWtaV1pwYm1WUWNtOXdaWEowZVNocGNISnZkRzhzSUZ3aWFXNWtaWGhjSWl3Z2UxeHVJQ0JuWlhRNklHWjFibU4wYVc5dUtDa2dlMXh1SUNBZ0lIWmhjaUJwWkhnZ1BTQXdYRzRnSUNBZ2RtRnlJSE4wWVdOcklEMGdkR2hwY3k1ZmMzUmhZMnRjYmlBZ0lDQnBaaWh6ZEdGamF5NXNaVzVuZEdnZ1BUMDlJREFwSUh0Y2JpQWdJQ0FnSUhaaGNpQnlJRDBnZEdocGN5NTBjbVZsTG5KdmIzUmNiaUFnSUNBZ0lHbG1LSElwSUh0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhJdVgyTnZkVzUwWEc0Z0lDQWdJQ0I5WEc0Z0lDQWdJQ0J5WlhSMWNtNGdNRnh1SUNBZ0lIMGdaV3h6WlNCcFppaHpkR0ZqYTF0emRHRmpheTVzWlc1bmRHZ3RNVjB1YkdWbWRDa2dlMXh1SUNBZ0lDQWdhV1I0SUQwZ2MzUmhZMnRiYzNSaFkyc3ViR1Z1WjNSb0xURmRMbXhsWm5RdVgyTnZkVzUwWEc0Z0lDQWdmVnh1SUNBZ0lHWnZjaWgyWVhJZ2N6MXpkR0ZqYXk1c1pXNW5kR2d0TWpzZ2N6NDlNRHNnTFMxektTQjdYRzRnSUNBZ0lDQnBaaWh6ZEdGamExdHpLekZkSUQwOVBTQnpkR0ZqYTF0elhTNXlhV2RvZENrZ2UxeHVJQ0FnSUNBZ0lDQXJLMmxrZUZ4dUlDQWdJQ0FnSUNCcFppaHpkR0ZqYTF0elhTNXNaV1owS1NCN1hHNGdJQ0FnSUNBZ0lDQWdhV1I0SUNzOUlITjBZV05yVzNOZExteGxablF1WDJOdmRXNTBYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJSDFjYmlBZ0lDQjlYRzRnSUNBZ2NtVjBkWEp1SUdsa2VGeHVJQ0I5TEZ4dUlDQmxiblZ0WlhKaFlteGxPaUIwY25WbFhHNTlLVnh1WEc0dkwwRmtkbUZ1WTJWeklHbDBaWEpoZEc5eUlIUnZJRzVsZUhRZ1pXeGxiV1Z1ZENCcGJpQnNhWE4wWEc1cGNISnZkRzh1Ym1WNGRDQTlJR1oxYm1OMGFXOXVLQ2tnZTF4dUlDQjJZWElnYzNSaFkyc2dQU0IwYUdsekxsOXpkR0ZqYTF4dUlDQnBaaWh6ZEdGamF5NXNaVzVuZEdnZ1BUMDlJREFwSUh0Y2JpQWdJQ0J5WlhSMWNtNWNiaUFnZlZ4dUlDQjJZWElnYmlBOUlITjBZV05yVzNOMFlXTnJMbXhsYm1kMGFDMHhYVnh1SUNCcFppaHVMbkpwWjJoMEtTQjdYRzRnSUNBZ2JpQTlJRzR1Y21sbmFIUmNiaUFnSUNCM2FHbHNaU2h1S1NCN1hHNGdJQ0FnSUNCemRHRmpheTV3ZFhOb0tHNHBYRzRnSUNBZ0lDQnVJRDBnYmk1c1pXWjBYRzRnSUNBZ2ZWeHVJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lITjBZV05yTG5CdmNDZ3BYRzRnSUNBZ2QyaHBiR1VvYzNSaFkyc3ViR1Z1WjNSb0lENGdNQ0FtSmlCemRHRmphMXR6ZEdGamF5NXNaVzVuZEdndE1WMHVjbWxuYUhRZ1BUMDlJRzRwSUh0Y2JpQWdJQ0FnSUc0Z1BTQnpkR0ZqYTF0emRHRmpheTVzWlc1bmRHZ3RNVjFjYmlBZ0lDQWdJSE4wWVdOckxuQnZjQ2dwWEc0Z0lDQWdmVnh1SUNCOVhHNTlYRzVjYmk4dlEyaGxZMnR6SUdsbUlHbDBaWEpoZEc5eUlHbHpJR0YwSUdWdVpDQnZaaUIwY21WbFhHNVBZbXBsWTNRdVpHVm1hVzVsVUhKdmNHVnlkSGtvYVhCeWIzUnZMQ0JjSW1oaGMwNWxlSFJjSWl3Z2UxeHVJQ0JuWlhRNklHWjFibU4wYVc5dUtDa2dlMXh1SUNBZ0lIWmhjaUJ6ZEdGamF5QTlJSFJvYVhNdVgzTjBZV05yWEc0Z0lDQWdhV1lvYzNSaFkyc3ViR1Z1WjNSb0lEMDlQU0F3S1NCN1hHNGdJQ0FnSUNCeVpYUjFjbTRnWm1Gc2MyVmNiaUFnSUNCOVhHNGdJQ0FnYVdZb2MzUmhZMnRiYzNSaFkyc3ViR1Z1WjNSb0xURmRMbkpwWjJoMEtTQjdYRzRnSUNBZ0lDQnlaWFIxY200Z2RISjFaVnh1SUNBZ0lIMWNiaUFnSUNCbWIzSW9kbUZ5SUhNOWMzUmhZMnN1YkdWdVozUm9MVEU3SUhNK01Ec2dMUzF6S1NCN1hHNGdJQ0FnSUNCcFppaHpkR0ZqYTF0ekxURmRMbXhsWm5RZ1BUMDlJSE4wWVdOclczTmRLU0I3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUIwY25WbFhHNGdJQ0FnSUNCOVhHNGdJQ0FnZlZ4dUlDQWdJSEpsZEhWeWJpQm1ZV3h6WlZ4dUlDQjlYRzU5S1Z4dVhHNHZMMVZ3WkdGMFpTQjJZV3gxWlZ4dWFYQnliM1J2TG5Wd1pHRjBaU0E5SUdaMWJtTjBhVzl1S0haaGJIVmxLU0I3WEc0Z0lIWmhjaUJ6ZEdGamF5QTlJSFJvYVhNdVgzTjBZV05yWEc0Z0lHbG1LSE4wWVdOckxteGxibWQwYUNBOVBUMGdNQ2tnZTF4dUlDQWdJSFJvY205M0lHNWxkeUJGY25KdmNpaGNJa05oYmlkMElIVndaR0YwWlNCbGJYQjBlU0J1YjJSbElWd2lLVnh1SUNCOVhHNGdJSFpoY2lCamMzUmhZMnNnUFNCdVpYY2dRWEp5WVhrb2MzUmhZMnN1YkdWdVozUm9LVnh1SUNCMllYSWdiaUE5SUhOMFlXTnJXM04wWVdOckxteGxibWQwYUMweFhWeHVJQ0JqYzNSaFkydGJZM04wWVdOckxteGxibWQwYUMweFhTQTlJRzVsZHlCU1FrNXZaR1VvYmk1ZlkyOXNiM0lzSUc0dWEyVjVMQ0IyWVd4MVpTd2diaTVzWldaMExDQnVMbkpwWjJoMExDQnVMbDlqYjNWdWRDbGNiaUFnWm05eUtIWmhjaUJwUFhOMFlXTnJMbXhsYm1kMGFDMHlPeUJwUGowd095QXRMV2twSUh0Y2JpQWdJQ0J1SUQwZ2MzUmhZMnRiYVYxY2JpQWdJQ0JwWmlodUxteGxablFnUFQwOUlITjBZV05yVzJrck1WMHBJSHRjYmlBZ0lDQWdJR056ZEdGamExdHBYU0E5SUc1bGR5QlNRazV2WkdVb2JpNWZZMjlzYjNJc0lHNHVhMlY1TENCdUxuWmhiSFZsTENCamMzUmhZMnRiYVNzeFhTd2diaTV5YVdkb2RDd2diaTVmWTI5MWJuUXBYRzRnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUdOemRHRmphMXRwWFNBOUlHNWxkeUJTUWs1dlpHVW9iaTVmWTI5c2IzSXNJRzR1YTJWNUxDQnVMblpoYkhWbExDQnVMbXhsWm5Rc0lHTnpkR0ZqYTF0cEt6RmRMQ0J1TGw5amIzVnVkQ2xjYmlBZ0lDQjlYRzRnSUgxY2JpQWdjbVYwZFhKdUlHNWxkeUJTWldSQ2JHRmphMVJ5WldVb2RHaHBjeTUwY21WbExsOWpiMjF3WVhKbExDQmpjM1JoWTJ0Yk1GMHBYRzU5WEc1Y2JpOHZUVzkyWlhNZ2FYUmxjbUYwYjNJZ1ltRmphM2RoY21RZ2IyNWxJR1ZzWlcxbGJuUmNibWx3Y205MGJ5NXdjbVYySUQwZ1puVnVZM1JwYjI0b0tTQjdYRzRnSUhaaGNpQnpkR0ZqYXlBOUlIUm9hWE11WDNOMFlXTnJYRzRnSUdsbUtITjBZV05yTG14bGJtZDBhQ0E5UFQwZ01Da2dlMXh1SUNBZ0lISmxkSFZ5Ymx4dUlDQjlYRzRnSUhaaGNpQnVJRDBnYzNSaFkydGJjM1JoWTJzdWJHVnVaM1JvTFRGZFhHNGdJR2xtS0c0dWJHVm1kQ2tnZTF4dUlDQWdJRzRnUFNCdUxteGxablJjYmlBZ0lDQjNhR2xzWlNodUtTQjdYRzRnSUNBZ0lDQnpkR0ZqYXk1d2RYTm9LRzRwWEc0Z0lDQWdJQ0J1SUQwZ2JpNXlhV2RvZEZ4dUlDQWdJSDFjYmlBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0J6ZEdGamF5NXdiM0FvS1Z4dUlDQWdJSGRvYVd4bEtITjBZV05yTG14bGJtZDBhQ0ErSURBZ0ppWWdjM1JoWTJ0YmMzUmhZMnN1YkdWdVozUm9MVEZkTG14bFpuUWdQVDA5SUc0cElIdGNiaUFnSUNBZ0lHNGdQU0J6ZEdGamExdHpkR0ZqYXk1c1pXNW5kR2d0TVYxY2JpQWdJQ0FnSUhOMFlXTnJMbkJ2Y0NncFhHNGdJQ0FnZlZ4dUlDQjlYRzU5WEc1Y2JpOHZRMmhsWTJ0eklHbG1JR2wwWlhKaGRHOXlJR2x6SUdGMElITjBZWEowSUc5bUlIUnlaV1ZjYms5aWFtVmpkQzVrWldacGJtVlFjbTl3WlhKMGVTaHBjSEp2ZEc4c0lGd2lhR0Z6VUhKbGRsd2lMQ0I3WEc0Z0lHZGxkRG9nWm5WdVkzUnBiMjRvS1NCN1hHNGdJQ0FnZG1GeUlITjBZV05ySUQwZ2RHaHBjeTVmYzNSaFkydGNiaUFnSUNCcFppaHpkR0ZqYXk1c1pXNW5kR2dnUFQwOUlEQXBJSHRjYmlBZ0lDQWdJSEpsZEhWeWJpQm1ZV3h6WlZ4dUlDQWdJSDFjYmlBZ0lDQnBaaWh6ZEdGamExdHpkR0ZqYXk1c1pXNW5kR2d0TVYwdWJHVm1kQ2tnZTF4dUlDQWdJQ0FnY21WMGRYSnVJSFJ5ZFdWY2JpQWdJQ0I5WEc0Z0lDQWdabTl5S0haaGNpQnpQWE4wWVdOckxteGxibWQwYUMweE95QnpQakE3SUMwdGN5a2dlMXh1SUNBZ0lDQWdhV1lvYzNSaFkydGJjeTB4WFM1eWFXZG9kQ0E5UFQwZ2MzUmhZMnRiYzEwcElIdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlIUnlkV1ZjYmlBZ0lDQWdJSDFjYmlBZ0lDQjlYRzRnSUNBZ2NtVjBkWEp1SUdaaGJITmxYRzRnSUgxY2JuMHBYRzVjYmk4dlJHVm1ZWFZzZENCamIyMXdZWEpwYzI5dUlHWjFibU4wYVc5dVhHNW1kVzVqZEdsdmJpQmtaV1poZFd4MFEyOXRjR0Z5WlNoaExDQmlLU0I3WEc0Z0lHbG1LR0VnUENCaUtTQjdYRzRnSUNBZ2NtVjBkWEp1SUMweFhHNGdJSDFjYmlBZ2FXWW9ZU0ErSUdJcElIdGNiaUFnSUNCeVpYUjFjbTRnTVZ4dUlDQjlYRzRnSUhKbGRIVnliaUF3WEc1OVhHNWNiaTh2UW5WcGJHUWdZU0IwY21WbFhHNW1kVzVqZEdsdmJpQmpjbVZoZEdWU1FsUnlaV1VvWTI5dGNHRnlaU2tnZTF4dUlDQnlaWFIxY200Z2JtVjNJRkpsWkVKc1lXTnJWSEpsWlNoamIyMXdZWEpsSUh4OElHUmxabUYxYkhSRGIyMXdZWEpsTENCdWRXeHNLVnh1ZlNJc0ltVjRjRzl5ZEhNdWNtVmhaQ0E5SUdaMWJtTjBhVzl1SUNoaWRXWm1aWElzSUc5bVpuTmxkQ3dnYVhOTVJTd2diVXhsYml3Z2JrSjVkR1Z6S1NCN1hHNGdJSFpoY2lCbExDQnRYRzRnSUhaaGNpQmxUR1Z1SUQwZ0tHNUNlWFJsY3lBcUlEZ3BJQzBnYlV4bGJpQXRJREZjYmlBZ2RtRnlJR1ZOWVhnZ1BTQW9NU0E4UENCbFRHVnVLU0F0SURGY2JpQWdkbUZ5SUdWQ2FXRnpJRDBnWlUxaGVDQStQaUF4WEc0Z0lIWmhjaUJ1UW1sMGN5QTlJQzAzWEc0Z0lIWmhjaUJwSUQwZ2FYTk1SU0EvSUNodVFubDBaWE1nTFNBeEtTQTZJREJjYmlBZ2RtRnlJR1FnUFNCcGMweEZJRDhnTFRFZ09pQXhYRzRnSUhaaGNpQnpJRDBnWW5WbVptVnlXMjltWm5ObGRDQXJJR2xkWEc1Y2JpQWdhU0FyUFNCa1hHNWNiaUFnWlNBOUlITWdKaUFvS0RFZ1BEd2dLQzF1UW1sMGN5a3BJQzBnTVNsY2JpQWdjeUErUGowZ0tDMXVRbWwwY3lsY2JpQWdia0pwZEhNZ0t6MGdaVXhsYmx4dUlDQm1iM0lnS0RzZ2JrSnBkSE1nUGlBd095QmxJRDBnS0dVZ0tpQXlOVFlwSUNzZ1luVm1abVZ5VzI5bVpuTmxkQ0FySUdsZExDQnBJQ3M5SUdRc0lHNUNhWFJ6SUMwOUlEZ3BJSHQ5WEc1Y2JpQWdiU0E5SUdVZ0ppQW9LREVnUER3Z0tDMXVRbWwwY3lrcElDMGdNU2xjYmlBZ1pTQStQajBnS0MxdVFtbDBjeWxjYmlBZ2JrSnBkSE1nS3owZ2JVeGxibHh1SUNCbWIzSWdLRHNnYmtKcGRITWdQaUF3T3lCdElEMGdLRzBnS2lBeU5UWXBJQ3NnWW5WbVptVnlXMjltWm5ObGRDQXJJR2xkTENCcElDczlJR1FzSUc1Q2FYUnpJQzA5SURncElIdDlYRzVjYmlBZ2FXWWdLR1VnUFQwOUlEQXBJSHRjYmlBZ0lDQmxJRDBnTVNBdElHVkNhV0Z6WEc0Z0lIMGdaV3h6WlNCcFppQW9aU0E5UFQwZ1pVMWhlQ2tnZTF4dUlDQWdJSEpsZEhWeWJpQnRJRDhnVG1GT0lEb2dLQ2h6SUQ4Z0xURWdPaUF4S1NBcUlFbHVabWx1YVhSNUtWeHVJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lHMGdQU0J0SUNzZ1RXRjBhQzV3YjNjb01pd2diVXhsYmlsY2JpQWdJQ0JsSUQwZ1pTQXRJR1ZDYVdGelhHNGdJSDFjYmlBZ2NtVjBkWEp1SUNoeklEOGdMVEVnT2lBeEtTQXFJRzBnS2lCTllYUm9MbkJ2ZHlneUxDQmxJQzBnYlV4bGJpbGNibjFjYmx4dVpYaHdiM0owY3k1M2NtbDBaU0E5SUdaMWJtTjBhVzl1SUNoaWRXWm1aWElzSUhaaGJIVmxMQ0J2Wm1aelpYUXNJR2x6VEVVc0lHMU1aVzRzSUc1Q2VYUmxjeWtnZTF4dUlDQjJZWElnWlN3Z2JTd2dZMXh1SUNCMllYSWdaVXhsYmlBOUlDaHVRbmwwWlhNZ0tpQTRLU0F0SUcxTVpXNGdMU0F4WEc0Z0lIWmhjaUJsVFdGNElEMGdLREVnUER3Z1pVeGxiaWtnTFNBeFhHNGdJSFpoY2lCbFFtbGhjeUE5SUdWTllYZ2dQajRnTVZ4dUlDQjJZWElnY25RZ1BTQW9iVXhsYmlBOVBUMGdNak1nUHlCTllYUm9MbkJ2ZHlneUxDQXRNalFwSUMwZ1RXRjBhQzV3YjNjb01pd2dMVGMzS1NBNklEQXBYRzRnSUhaaGNpQnBJRDBnYVhOTVJTQS9JREFnT2lBb2JrSjVkR1Z6SUMwZ01TbGNiaUFnZG1GeUlHUWdQU0JwYzB4RklEOGdNU0E2SUMweFhHNGdJSFpoY2lCeklEMGdkbUZzZFdVZ1BDQXdJSHg4SUNoMllXeDFaU0E5UFQwZ01DQW1KaUF4SUM4Z2RtRnNkV1VnUENBd0tTQS9JREVnT2lBd1hHNWNiaUFnZG1Gc2RXVWdQU0JOWVhSb0xtRmljeWgyWVd4MVpTbGNibHh1SUNCcFppQW9hWE5PWVU0b2RtRnNkV1VwSUh4OElIWmhiSFZsSUQwOVBTQkpibVpwYm1sMGVTa2dlMXh1SUNBZ0lHMGdQU0JwYzA1aFRpaDJZV3gxWlNrZ1B5QXhJRG9nTUZ4dUlDQWdJR1VnUFNCbFRXRjRYRzRnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdaU0E5SUUxaGRHZ3VabXh2YjNJb1RXRjBhQzVzYjJjb2RtRnNkV1VwSUM4Z1RXRjBhQzVNVGpJcFhHNGdJQ0FnYVdZZ0tIWmhiSFZsSUNvZ0tHTWdQU0JOWVhSb0xuQnZkeWd5TENBdFpTa3BJRHdnTVNrZ2UxeHVJQ0FnSUNBZ1pTMHRYRzRnSUNBZ0lDQmpJQ285SURKY2JpQWdJQ0I5WEc0Z0lDQWdhV1lnS0dVZ0t5QmxRbWxoY3lBK1BTQXhLU0I3WEc0Z0lDQWdJQ0IyWVd4MVpTQXJQU0J5ZENBdklHTmNiaUFnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnZG1Gc2RXVWdLejBnY25RZ0tpQk5ZWFJvTG5CdmR5Z3lMQ0F4SUMwZ1pVSnBZWE1wWEc0Z0lDQWdmVnh1SUNBZ0lHbG1JQ2gyWVd4MVpTQXFJR01nUGowZ01pa2dlMXh1SUNBZ0lDQWdaU3NyWEc0Z0lDQWdJQ0JqSUM4OUlESmNiaUFnSUNCOVhHNWNiaUFnSUNCcFppQW9aU0FySUdWQ2FXRnpJRDQ5SUdWTllYZ3BJSHRjYmlBZ0lDQWdJRzBnUFNBd1hHNGdJQ0FnSUNCbElEMGdaVTFoZUZ4dUlDQWdJSDBnWld4elpTQnBaaUFvWlNBcklHVkNhV0Z6SUQ0OUlERXBJSHRjYmlBZ0lDQWdJRzBnUFNBb0tIWmhiSFZsSUNvZ1l5a2dMU0F4S1NBcUlFMWhkR2d1Y0c5M0tESXNJRzFNWlc0cFhHNGdJQ0FnSUNCbElEMGdaU0FySUdWQ2FXRnpYRzRnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUcwZ1BTQjJZV3gxWlNBcUlFMWhkR2d1Y0c5M0tESXNJR1ZDYVdGeklDMGdNU2tnS2lCTllYUm9MbkJ2ZHlneUxDQnRUR1Z1S1Z4dUlDQWdJQ0FnWlNBOUlEQmNiaUFnSUNCOVhHNGdJSDFjYmx4dUlDQm1iM0lnS0RzZ2JVeGxiaUErUFNBNE95QmlkV1ptWlhKYmIyWm1jMlYwSUNzZ2FWMGdQU0J0SUNZZ01IaG1aaXdnYVNBclBTQmtMQ0J0SUM4OUlESTFOaXdnYlV4bGJpQXRQU0E0S1NCN2ZWeHVYRzRnSUdVZ1BTQW9aU0E4UENCdFRHVnVLU0I4SUcxY2JpQWdaVXhsYmlBclBTQnRUR1Z1WEc0Z0lHWnZjaUFvT3lCbFRHVnVJRDRnTURzZ1luVm1abVZ5VzI5bVpuTmxkQ0FySUdsZElEMGdaU0FtSURCNFptWXNJR2tnS3owZ1pDd2daU0F2UFNBeU5UWXNJR1ZNWlc0Z0xUMGdPQ2tnZTMxY2JseHVJQ0JpZFdabVpYSmJiMlptYzJWMElDc2dhU0F0SUdSZElIdzlJSE1nS2lBeE1qaGNibjFjYmlJc0lpZDFjMlVnYzNSeWFXTjBKenRjYm5aaGNpQjBlWEJsY3lBOUlGdGNiaUFnY21WeGRXbHlaU2duTGk5dVpYaDBWR2xqYXljcExGeHVJQ0J5WlhGMWFYSmxLQ2N1TDIxMWRHRjBhVzl1TG1wekp5a3NYRzRnSUhKbGNYVnBjbVVvSnk0dmJXVnpjMkZuWlVOb1lXNXVaV3duS1N4Y2JpQWdjbVZ4ZFdseVpTZ25MaTl6ZEdGMFpVTm9ZVzVuWlNjcExGeHVJQ0J5WlhGMWFYSmxLQ2N1TDNScGJXVnZkWFFuS1Z4dVhUdGNiblpoY2lCa2NtRnBibWx1Wnp0Y2JuWmhjaUJqZFhKeVpXNTBVWFZsZFdVN1hHNTJZWElnY1hWbGRXVkpibVJsZUNBOUlDMHhPMXh1ZG1GeUlIRjFaWFZsSUQwZ1cxMDdYRzUyWVhJZ2MyTm9aV1IxYkdWa0lEMGdabUZzYzJVN1hHNW1kVzVqZEdsdmJpQmpiR1ZoYmxWd1RtVjRkRlJwWTJzb0tTQjdYRzRnSUdsbUlDZ2haSEpoYVc1cGJtY2dmSHdnSVdOMWNuSmxiblJSZFdWMVpTa2dlMXh1SUNBZ0lISmxkSFZ5Ymp0Y2JpQWdmVnh1SUNCa2NtRnBibWx1WnlBOUlHWmhiSE5sTzF4dUlDQnBaaUFvWTNWeWNtVnVkRkYxWlhWbExteGxibWQwYUNrZ2UxeHVJQ0FnSUhGMVpYVmxJRDBnWTNWeWNtVnVkRkYxWlhWbExtTnZibU5oZENoeGRXVjFaU2s3WEc0Z0lIMGdaV3h6WlNCN1hHNGdJQ0FnY1hWbGRXVkpibVJsZUNBOUlDMHhPMXh1SUNCOVhHNGdJR2xtSUNoeGRXVjFaUzVzWlc1bmRHZ3BJSHRjYmlBZ0lDQnVaWGgwVkdsamF5Z3BPMXh1SUNCOVhHNTlYRzVjYmk4dmJtRnRaV1FnYm1WNGRGUnBZMnNnWm05eUlHeGxjM01nWTI5dVpuVnphVzVuSUhOMFlXTnJJSFJ5WVdObGMxeHVablZ1WTNScGIyNGdibVY0ZEZScFkyc29LU0I3WEc0Z0lHbG1JQ2hrY21GcGJtbHVaeWtnZTF4dUlDQWdJSEpsZEhWeWJqdGNiaUFnZlZ4dUlDQnpZMmhsWkhWc1pXUWdQU0JtWVd4elpUdGNiaUFnWkhKaGFXNXBibWNnUFNCMGNuVmxPMXh1SUNCMllYSWdiR1Z1SUQwZ2NYVmxkV1V1YkdWdVozUm9PMXh1SUNCMllYSWdkR2x0Wlc5MWRDQTlJSE5sZEZScGJXVnZkWFFvWTJ4bFlXNVZjRTVsZUhSVWFXTnJLVHRjYmlBZ2QyaHBiR1VnS0d4bGJpa2dlMXh1SUNBZ0lHTjFjbkpsYm5SUmRXVjFaU0E5SUhGMVpYVmxPMXh1SUNBZ0lIRjFaWFZsSUQwZ1cxMDdYRzRnSUNBZ2QyaHBiR1VnS0dOMWNuSmxiblJSZFdWMVpTQW1KaUFySzNGMVpYVmxTVzVrWlhnZ1BDQnNaVzRwSUh0Y2JpQWdJQ0FnSUdOMWNuSmxiblJSZFdWMVpWdHhkV1YxWlVsdVpHVjRYUzV5ZFc0b0tUdGNiaUFnSUNCOVhHNGdJQ0FnY1hWbGRXVkpibVJsZUNBOUlDMHhPMXh1SUNBZ0lHeGxiaUE5SUhGMVpYVmxMbXhsYm1kMGFEdGNiaUFnZlZ4dUlDQmpkWEp5Wlc1MFVYVmxkV1VnUFNCdWRXeHNPMXh1SUNCeGRXVjFaVWx1WkdWNElEMGdMVEU3WEc0Z0lHUnlZV2x1YVc1bklEMGdabUZzYzJVN1hHNGdJR05zWldGeVZHbHRaVzkxZENoMGFXMWxiM1YwS1R0Y2JuMWNiblpoY2lCelkyaGxaSFZzWlVSeVlXbHVPMXh1ZG1GeUlHa2dQU0F0TVR0Y2JuWmhjaUJzWlc0Z1BTQjBlWEJsY3k1c1pXNW5kR2c3WEc1M2FHbHNaU0FvS3l0cElEd2diR1Z1S1NCN1hHNGdJR2xtSUNoMGVYQmxjMXRwWFNBbUppQjBlWEJsYzF0cFhTNTBaWE4wSUNZbUlIUjVjR1Z6VzJsZExuUmxjM1FvS1NrZ2UxeHVJQ0FnSUhOamFHVmtkV3hsUkhKaGFXNGdQU0IwZVhCbGMxdHBYUzVwYm5OMFlXeHNLRzVsZUhSVWFXTnJLVHRjYmlBZ0lDQmljbVZoYXp0Y2JpQWdmVnh1ZlZ4dUx5OGdkamdnYkdsclpYTWdjSEpsWkdsamRHbGliR1VnYjJKcVpXTjBjMXh1Wm5WdVkzUnBiMjRnU1hSbGJTaG1kVzRzSUdGeWNtRjVLU0I3WEc0Z0lIUm9hWE11Wm5WdUlEMGdablZ1TzF4dUlDQjBhR2x6TG1GeWNtRjVJRDBnWVhKeVlYazdYRzU5WEc1SmRHVnRMbkJ5YjNSdmRIbHdaUzV5ZFc0Z1BTQm1kVzVqZEdsdmJpQW9LU0I3WEc0Z0lIWmhjaUJtZFc0Z1BTQjBhR2x6TG1aMWJqdGNiaUFnZG1GeUlHRnljbUY1SUQwZ2RHaHBjeTVoY25KaGVUdGNiaUFnYzNkcGRHTm9JQ2hoY25KaGVTNXNaVzVuZEdncElIdGNiaUFnWTJGelpTQXdPbHh1SUNBZ0lISmxkSFZ5YmlCbWRXNG9LVHRjYmlBZ1kyRnpaU0F4T2x4dUlDQWdJSEpsZEhWeWJpQm1kVzRvWVhKeVlYbGJNRjBwTzF4dUlDQmpZWE5sSURJNlhHNGdJQ0FnY21WMGRYSnVJR1oxYmloaGNuSmhlVnN3WFN3Z1lYSnlZWGxiTVYwcE8xeHVJQ0JqWVhObElETTZYRzRnSUNBZ2NtVjBkWEp1SUdaMWJpaGhjbkpoZVZzd1hTd2dZWEp5WVhsYk1WMHNJR0Z5Y21GNVd6SmRLVHRjYmlBZ1pHVm1ZWFZzZERwY2JpQWdJQ0J5WlhSMWNtNGdablZ1TG1Gd2NHeDVLRzUxYkd3c0lHRnljbUY1S1R0Y2JpQWdmVnh1WEc1OU8xeHViVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQnBiVzFsWkdsaGRHVTdYRzVtZFc1amRHbHZiaUJwYlcxbFpHbGhkR1VvZEdGemF5a2dlMXh1SUNCMllYSWdZWEpuY3lBOUlHNWxkeUJCY25KaGVTaGhjbWQxYldWdWRITXViR1Z1WjNSb0lDMGdNU2s3WEc0Z0lHbG1JQ2hoY21kMWJXVnVkSE11YkdWdVozUm9JRDRnTVNrZ2UxeHVJQ0FnSUdadmNpQW9kbUZ5SUdrZ1BTQXhPeUJwSUR3Z1lYSm5kVzFsYm5SekxteGxibWQwYURzZ2FTc3JLU0I3WEc0Z0lDQWdJQ0JoY21kelcya2dMU0F4WFNBOUlHRnlaM1Z0Wlc1MGMxdHBYVHRjYmlBZ0lDQjlYRzRnSUgxY2JpQWdjWFZsZFdVdWNIVnphQ2h1WlhjZ1NYUmxiU2gwWVhOckxDQmhjbWR6S1NrN1hHNGdJR2xtSUNnaGMyTm9aV1IxYkdWa0lDWW1JQ0ZrY21GcGJtbHVaeWtnZTF4dUlDQWdJSE5qYUdWa2RXeGxaQ0E5SUhSeWRXVTdYRzRnSUNBZ2MyTm9aV1IxYkdWRWNtRnBiaWdwTzF4dUlDQjlYRzU5WEc0aUxDSW5kWE5sSUhOMGNtbGpkQ2M3WEc1Y2JtVjRjRzl5ZEhNdWRHVnpkQ0E5SUdaMWJtTjBhVzl1SUNncElIdGNiaUFnYVdZZ0tHZHNiMkpoYkM1elpYUkpiVzFsWkdsaGRHVXBJSHRjYmlBZ0lDQXZMeUIzWlNCallXNGdiMjVzZVNCblpYUWdhR1Z5WlNCcGJpQkpSVEV3WEc0Z0lDQWdMeThnZDJocFkyZ2daRzlsYzI0bmRDQm9ZVzVrWld3Z2NHOXpkRTFsYzNOaFoyVWdkMlZzYkZ4dUlDQWdJSEpsZEhWeWJpQm1ZV3h6WlR0Y2JpQWdmVnh1SUNCeVpYUjFjbTRnZEhsd1pXOW1JR2RzYjJKaGJDNU5aWE56WVdkbFEyaGhibTVsYkNBaFBUMGdKM1Z1WkdWbWFXNWxaQ2M3WEc1OU8xeHVYRzVsZUhCdmNuUnpMbWx1YzNSaGJHd2dQU0JtZFc1amRHbHZiaUFvWm5WdVl5a2dlMXh1SUNCMllYSWdZMmhoYm01bGJDQTlJRzVsZHlCbmJHOWlZV3d1VFdWemMyRm5aVU5vWVc1dVpXd29LVHRjYmlBZ1kyaGhibTVsYkM1d2IzSjBNUzV2Ym0xbGMzTmhaMlVnUFNCbWRXNWpPMXh1SUNCeVpYUjFjbTRnWm5WdVkzUnBiMjRnS0NrZ2UxeHVJQ0FnSUdOb1lXNXVaV3d1Y0c5eWRESXVjRzl6ZEUxbGMzTmhaMlVvTUNrN1hHNGdJSDA3WEc1OU95SXNJaWQxYzJVZ2MzUnlhV04wSnp0Y2JpOHZZbUZ6WldRZ2IyWm1JSEp6ZG5BZ2FIUjBjSE02THk5bmFYUm9kV0l1WTI5dEwzUnBiR1JsYVc4dmNuTjJjQzVxYzF4dUx5OXNhV05sYm5ObElHaDBkSEJ6T2k4dloybDBhSFZpTG1OdmJTOTBhV3hrWldsdkwzSnpkbkF1YW5NdllteHZZaTl0WVhOMFpYSXZURWxEUlU1VFJWeHVMeTlvZEhSd2N6b3ZMMmRwZEdoMVlpNWpiMjB2ZEdsc1pHVnBieTl5YzNad0xtcHpMMkpzYjJJdmJXRnpkR1Z5TDJ4cFlpOXljM1p3TDJGellYQXVhbk5jYmx4dWRtRnlJRTExZEdGMGFXOXVJRDBnWjJ4dlltRnNMazExZEdGMGFXOXVUMkp6WlhKMlpYSWdmSHdnWjJ4dlltRnNMbGRsWWt0cGRFMTFkR0YwYVc5dVQySnpaWEoyWlhJN1hHNWNibVY0Y0c5eWRITXVkR1Z6ZENBOUlHWjFibU4wYVc5dUlDZ3BJSHRjYmlBZ2NtVjBkWEp1SUUxMWRHRjBhVzl1TzF4dWZUdGNibHh1Wlhod2IzSjBjeTVwYm5OMFlXeHNJRDBnWm5WdVkzUnBiMjRnS0doaGJtUnNaU2tnZTF4dUlDQjJZWElnWTJGc2JHVmtJRDBnTUR0Y2JpQWdkbUZ5SUc5aWMyVnlkbVZ5SUQwZ2JtVjNJRTExZEdGMGFXOXVLR2hoYm1Sc1pTazdYRzRnSUhaaGNpQmxiR1Z0Wlc1MElEMGdaMnh2WW1Gc0xtUnZZM1Z0Wlc1MExtTnlaV0YwWlZSbGVIUk9iMlJsS0NjbktUdGNiaUFnYjJKelpYSjJaWEl1YjJKelpYSjJaU2hsYkdWdFpXNTBMQ0I3WEc0Z0lDQWdZMmhoY21GamRHVnlSR0YwWVRvZ2RISjFaVnh1SUNCOUtUdGNiaUFnY21WMGRYSnVJR1oxYm1OMGFXOXVJQ2dwSUh0Y2JpQWdJQ0JsYkdWdFpXNTBMbVJoZEdFZ1BTQW9ZMkZzYkdWa0lEMGdLeXRqWVd4c1pXUWdKU0F5S1R0Y2JpQWdmVHRjYm4wN0lpd2lKM1Z6WlNCemRISnBZM1FuTzF4dVpYaHdiM0owY3k1MFpYTjBJRDBnWm5WdVkzUnBiMjRnS0NrZ2UxeHVJQ0F2THlCRWIyNG5kQ0JuWlhRZ1ptOXZiR1ZrSUdKNUlHVXVaeTRnWW5KdmQzTmxjbWxtZVNCbGJuWnBjbTl1YldWdWRITXVYRzRnSUhKbGRIVnliaUFvZEhsd1pXOW1JSEJ5YjJObGMzTWdJVDA5SUNkMWJtUmxabWx1WldRbktTQW1KaUFoY0hKdlkyVnpjeTVpY205M2MyVnlPMXh1ZlR0Y2JseHVaWGh3YjNKMGN5NXBibk4wWVd4c0lEMGdablZ1WTNScGIyNGdLR1oxYm1NcElIdGNiaUFnY21WMGRYSnVJR1oxYm1OMGFXOXVJQ2dwSUh0Y2JpQWdJQ0J3Y205alpYTnpMbTVsZUhSVWFXTnJLR1oxYm1NcE8xeHVJQ0I5TzF4dWZUdGNiaUlzSWlkMWMyVWdjM1J5YVdOMEp6dGNibHh1Wlhod2IzSjBjeTUwWlhOMElEMGdablZ1WTNScGIyNGdLQ2tnZTF4dUlDQnlaWFIxY200Z0oyUnZZM1Z0Wlc1MEp5QnBiaUJuYkc5aVlXd2dKaVlnSjI5dWNtVmhaSGx6ZEdGMFpXTm9ZVzVuWlNjZ2FXNGdaMnh2WW1Gc0xtUnZZM1Z0Wlc1MExtTnlaV0YwWlVWc1pXMWxiblFvSjNOamNtbHdkQ2NwTzF4dWZUdGNibHh1Wlhod2IzSjBjeTVwYm5OMFlXeHNJRDBnWm5WdVkzUnBiMjRnS0doaGJtUnNaU2tnZTF4dUlDQnlaWFIxY200Z1puVnVZM1JwYjI0Z0tDa2dlMXh1WEc0Z0lDQWdMeThnUTNKbFlYUmxJR0VnUEhOamNtbHdkRDRnWld4bGJXVnVkRHNnYVhSeklISmxZV1I1YzNSaGRHVmphR0Z1WjJVZ1pYWmxiblFnZDJsc2JDQmlaU0JtYVhKbFpDQmhjM2x1WTJoeWIyNXZkWE5zZVNCdmJtTmxJR2wwSUdseklHbHVjMlZ5ZEdWa1hHNGdJQ0FnTHk4Z2FXNTBieUIwYUdVZ1pHOWpkVzFsYm5RdUlFUnZJSE52TENCMGFIVnpJSEYxWlhWcGJtY2dkWEFnZEdobElIUmhjMnN1SUZKbGJXVnRZbVZ5SUhSdklHTnNaV0Z1SUhWd0lHOXVZMlVnYVhRbmN5QmlaV1Z1SUdOaGJHeGxaQzVjYmlBZ0lDQjJZWElnYzJOeWFYQjBSV3dnUFNCbmJHOWlZV3d1Wkc5amRXMWxiblF1WTNKbFlYUmxSV3hsYldWdWRDZ25jMk55YVhCMEp5azdYRzRnSUNBZ2MyTnlhWEIwUld3dWIyNXlaV0ZrZVhOMFlYUmxZMmhoYm1kbElEMGdablZ1WTNScGIyNGdLQ2tnZTF4dUlDQWdJQ0FnYUdGdVpHeGxLQ2s3WEc1Y2JpQWdJQ0FnSUhOamNtbHdkRVZzTG05dWNtVmhaSGx6ZEdGMFpXTm9ZVzVuWlNBOUlHNTFiR3c3WEc0Z0lDQWdJQ0J6WTNKcGNIUkZiQzV3WVhKbGJuUk9iMlJsTG5KbGJXOTJaVU5vYVd4a0tITmpjbWx3ZEVWc0tUdGNiaUFnSUNBZ0lITmpjbWx3ZEVWc0lEMGdiblZzYkR0Y2JpQWdJQ0I5TzF4dUlDQWdJR2RzYjJKaGJDNWtiMk4xYldWdWRDNWtiMk4xYldWdWRFVnNaVzFsYm5RdVlYQndaVzVrUTJocGJHUW9jMk55YVhCMFJXd3BPMXh1WEc0Z0lDQWdjbVYwZFhKdUlHaGhibVJzWlR0Y2JpQWdmVHRjYm4wN0lpd2lKM1Z6WlNCemRISnBZM1FuTzF4dVpYaHdiM0owY3k1MFpYTjBJRDBnWm5WdVkzUnBiMjRnS0NrZ2UxeHVJQ0J5WlhSMWNtNGdkSEoxWlR0Y2JuMDdYRzVjYm1WNGNHOXlkSE11YVc1emRHRnNiQ0E5SUdaMWJtTjBhVzl1SUNoMEtTQjdYRzRnSUhKbGRIVnliaUJtZFc1amRHbHZiaUFvS1NCN1hHNGdJQ0FnYzJWMFZHbHRaVzkxZENoMExDQXdLVHRjYmlBZ2ZUdGNibjA3SWl3aWFXWWdLSFI1Y0dWdlppQlBZbXBsWTNRdVkzSmxZWFJsSUQwOVBTQW5ablZ1WTNScGIyNG5LU0I3WEc0Z0lDOHZJR2x0Y0d4bGJXVnVkR0YwYVc5dUlHWnliMjBnYzNSaGJtUmhjbVFnYm05a1pTNXFjeUFuZFhScGJDY2diVzlrZFd4bFhHNGdJRzF2WkhWc1pTNWxlSEJ2Y25SeklEMGdablZ1WTNScGIyNGdhVzVvWlhKcGRITW9ZM1J2Y2l3Z2MzVndaWEpEZEc5eUtTQjdYRzRnSUNBZ1kzUnZjaTV6ZFhCbGNsOGdQU0J6ZFhCbGNrTjBiM0pjYmlBZ0lDQmpkRzl5TG5CeWIzUnZkSGx3WlNBOUlFOWlhbVZqZEM1amNtVmhkR1VvYzNWd1pYSkRkRzl5TG5CeWIzUnZkSGx3WlN3Z2UxeHVJQ0FnSUNBZ1kyOXVjM1J5ZFdOMGIzSTZJSHRjYmlBZ0lDQWdJQ0FnZG1Gc2RXVTZJR04wYjNJc1hHNGdJQ0FnSUNBZ0lHVnVkVzFsY21GaWJHVTZJR1poYkhObExGeHVJQ0FnSUNBZ0lDQjNjbWwwWVdKc1pUb2dkSEoxWlN4Y2JpQWdJQ0FnSUNBZ1kyOXVabWxuZFhKaFlteGxPaUIwY25WbFhHNGdJQ0FnSUNCOVhHNGdJQ0FnZlNrN1hHNGdJSDA3WEc1OUlHVnNjMlVnZTF4dUlDQXZMeUJ2YkdRZ2MyTm9iMjlzSUhOb2FXMGdabTl5SUc5c1pDQmljbTkzYzJWeWMxeHVJQ0J0YjJSMWJHVXVaWGh3YjNKMGN5QTlJR1oxYm1OMGFXOXVJR2x1YUdWeWFYUnpLR04wYjNJc0lITjFjR1Z5UTNSdmNpa2dlMXh1SUNBZ0lHTjBiM0l1YzNWd1pYSmZJRDBnYzNWd1pYSkRkRzl5WEc0Z0lDQWdkbUZ5SUZSbGJYQkRkRzl5SUQwZ1puVnVZM1JwYjI0Z0tDa2dlMzFjYmlBZ0lDQlVaVzF3UTNSdmNpNXdjbTkwYjNSNWNHVWdQU0J6ZFhCbGNrTjBiM0l1Y0hKdmRHOTBlWEJsWEc0Z0lDQWdZM1J2Y2k1d2NtOTBiM1I1Y0dVZ1BTQnVaWGNnVkdWdGNFTjBiM0lvS1Z4dUlDQWdJR04wYjNJdWNISnZkRzkwZVhCbExtTnZibk4wY25WamRHOXlJRDBnWTNSdmNseHVJQ0I5WEc1OVhHNGlMQ0pjYm1WNGNHOXlkSE11WTI5dGNHRnlaU0E5SUdaMWJtTjBhVzl1SUNoaExDQmlLU0I3WEc1Y2JpQWdhV1lvUW5WbVptVnlMbWx6UW5WbVptVnlLR0VwS1NCN1hHNGdJQ0FnZG1GeUlHd2dQU0JOWVhSb0xtMXBiaWhoTG14bGJtZDBhQ3dnWWk1c1pXNW5kR2dwWEc0Z0lDQWdabTl5S0haaGNpQnBJRDBnTURzZ2FTQThJR3c3SUdrckt5a2dlMXh1SUNBZ0lDQWdkbUZ5SUdOdGNDQTlJR0ZiYVYwZ0xTQmlXMmxkWEc0Z0lDQWdJQ0JwWmloamJYQXBJSEpsZEhWeWJpQmpiWEJjYmlBZ0lDQjlYRzRnSUNBZ2NtVjBkWEp1SUdFdWJHVnVaM1JvSUMwZ1lpNXNaVzVuZEdoY2JpQWdmVnh1WEc0Z0lISmxkSFZ5YmlCaElEd2dZaUEvSUMweElEb2dZU0ErSUdJZ1B5QXhJRG9nTUZ4dWZWeHVYRzR2THlCMGJ5QmlaU0JqYjIxd1lYUnBZbXhsSUhkcGRHZ2dkR2hsSUdOMWNuSmxiblFnWVdKemRISmhZM1F0YkdWMlpXeGtiM2R1SUhSbGMzUnpYRzR2THlCdWRXeHNhWE5vSUc5eUlHVnRjSFI1SUhOMGNtbHVaM011WEc0dkx5QkpJR052ZFd4a0lIVnpaU0FoSVhaaGJDQmlkWFFnU1NCM1lXNTBJSFJ2SUhCbGNtMXBkQ0J1ZFcxaVpYSnpJR0Z1WkNCaWIyOXNaV0Z1Y3l4Y2JpOHZJR2xtSUhCdmMzTnBZbXhsTGx4dVhHNW1kVzVqZEdsdmJpQnBjMFJsWmlBb2RtRnNLU0I3WEc0Z0lISmxkSFZ5YmlCMllXd2dJVDA5SUhWdVpHVm1hVzVsWkNBbUppQjJZV3dnSVQwOUlDY25YRzU5WEc1Y2JtWjFibU4wYVc5dUlHaGhjeUFvY21GdVoyVXNJRzVoYldVcElIdGNiaUFnY21WMGRYSnVJRTlpYW1WamRDNW9ZWE5QZDI1UWNtOXdaWEowZVM1allXeHNLSEpoYm1kbExDQnVZVzFsS1Z4dWZWeHVYRzVtZFc1amRHbHZiaUJvWVhOTFpYa29jbUZ1WjJVc0lHNWhiV1VwSUh0Y2JpQWdjbVYwZFhKdUlFOWlhbVZqZEM1b1lYTlBkMjVRY205d1pYSjBlUzVqWVd4c0tISmhibWRsTENCdVlXMWxLU0FtSmlCdVlXMWxYRzU5WEc1Y2JuWmhjaUJzYjNkbGNrSnZkVzVrUzJWNUlEMGdaWGh3YjNKMGN5NXNiM2RsY2tKdmRXNWtTMlY1SUQwZ1puVnVZM1JwYjI0Z0tISmhibWRsS1NCN1hHNGdJQ0FnY21WMGRYSnVJQ2hjYmlBZ0lDQWdJQ0JvWVhOTFpYa29jbUZ1WjJVc0lDZG5kQ2NwWEc0Z0lDQWdmSHdnYUdGelMyVjVLSEpoYm1kbExDQW5aM1JsSnlsY2JpQWdJQ0I4ZkNCb1lYTkxaWGtvY21GdVoyVXNJQ2R0YVc0bktWeHVJQ0FnSUh4OElDaHlZVzVuWlM1eVpYWmxjbk5sSUQ4Z2FHRnpTMlY1S0hKaGJtZGxMQ0FuWlc1a0p5a2dPaUJvWVhOTFpYa29jbUZ1WjJVc0lDZHpkR0Z5ZENjcEtWeHVJQ0FnSUh4OElIVnVaR1ZtYVc1bFpGeHVJQ0FnSUNsY2JuMWNibHh1ZG1GeUlHeHZkMlZ5UW05MWJtUWdQU0JsZUhCdmNuUnpMbXh2ZDJWeVFtOTFibVFnUFNCbWRXNWpkR2x2YmlBb2NtRnVaMlVzSUdSbFppa2dlMXh1SUNCMllYSWdheUE5SUd4dmQyVnlRbTkxYm1STFpYa29jbUZ1WjJVcFhHNGdJSEpsZEhWeWJpQnJJRDhnY21GdVoyVmJhMTBnT2lCa1pXWmNibjFjYmx4dWRtRnlJR3h2ZDJWeVFtOTFibVJKYm1Oc2RYTnBkbVVnUFNCbGVIQnZjblJ6TG14dmQyVnlRbTkxYm1SSmJtTnNkWE5wZG1VZ1BTQm1kVzVqZEdsdmJpQW9jbUZ1WjJVcElIdGNiaUFnY21WMGRYSnVJR2hoY3loeVlXNW5aU3dnSjJkMEp5a2dQeUJtWVd4elpTQTZJSFJ5ZFdWY2JuMWNibHh1ZG1GeUlIVndjR1Z5UW05MWJtUkpibU5zZFhOcGRtVWdQU0JsZUhCdmNuUnpMblZ3Y0dWeVFtOTFibVJKYm1Oc2RYTnBkbVVnUFZ4dUlDQm1kVzVqZEdsdmJpQW9jbUZ1WjJVcElIdGNiaUFnSUNCeVpYUjFjbTRnS0doaGN5aHlZVzVuWlN3Z0oyeDBKeWtnTHlvbUppQWhjbUZ1WjJVdWJXRjRSWGdxTHlrZ1B5Qm1ZV3h6WlNBNklIUnlkV1ZjYmlBZ2ZWeHVYRzUyWVhJZ2JHOTNaWEpDYjNWdVpFVjRZMngxYzJsMlpTQTlJR1Y0Y0c5eWRITXViRzkzWlhKQ2IzVnVaRVY0WTJ4MWMybDJaU0E5WEc0Z0lHWjFibU4wYVc5dUlDaHlZVzVuWlNrZ2UxeHVJQ0FnSUhKbGRIVnliaUFoYkc5M1pYSkNiM1Z1WkVsdVkyeDFjMmwyWlNoeVlXNW5aU2xjYmlBZ2ZWeHVYRzUyWVhJZ2RYQndaWEpDYjNWdVpFVjRZMngxYzJsMlpTQTlJR1Y0Y0c5eWRITXVkWEJ3WlhKQ2IzVnVaRVY0WTJ4MWMybDJaU0E5WEc0Z0lHWjFibU4wYVc5dUlDaHlZVzVuWlNrZ2UxeHVJQ0FnSUhKbGRIVnliaUFoZFhCd1pYSkNiM1Z1WkVsdVkyeDFjMmwyWlNoeVlXNW5aU2xjYmlBZ2ZWeHVYRzUyWVhJZ2RYQndaWEpDYjNWdVpFdGxlU0E5SUdWNGNHOXlkSE11ZFhCd1pYSkNiM1Z1WkV0bGVTQTlJR1oxYm1OMGFXOXVJQ2h5WVc1blpTa2dlMXh1SUNBZ0lISmxkSFZ5YmlBb1hHNGdJQ0FnSUNBZ2FHRnpTMlY1S0hKaGJtZGxMQ0FuYkhRbktWeHVJQ0FnSUh4OElHaGhjMHRsZVNoeVlXNW5aU3dnSjJ4MFpTY3BYRzRnSUNBZ2ZId2dhR0Z6UzJWNUtISmhibWRsTENBbmJXRjRKeWxjYmlBZ0lDQjhmQ0FvY21GdVoyVXVjbVYyWlhKelpTQS9JR2hoYzB0bGVTaHlZVzVuWlN3Z0ozTjBZWEowSnlrZ09pQm9ZWE5MWlhrb2NtRnVaMlVzSUNkbGJtUW5LU2xjYmlBZ0lDQjhmQ0IxYm1SbFptbHVaV1JjYmlBZ0lDQXBYRzU5WEc1Y2JuWmhjaUIxY0hCbGNrSnZkVzVrSUQwZ1pYaHdiM0owY3k1MWNIQmxja0p2ZFc1a0lEMGdablZ1WTNScGIyNGdLSEpoYm1kbExDQmtaV1lwSUh0Y2JpQWdkbUZ5SUdzZ1BTQjFjSEJsY2tKdmRXNWtTMlY1S0hKaGJtZGxLVnh1SUNCeVpYUjFjbTRnYXlBL0lISmhibWRsVzJ0ZElEb2daR1ZtWEc1OVhHNWNibVY0Y0c5eWRITXVjM1JoY25RZ1BTQm1kVzVqZEdsdmJpQW9jbUZ1WjJVc0lHUmxaaWtnZTF4dUlDQnlaWFIxY200Z2NtRnVaMlV1Y21WMlpYSnpaU0EvSUhWd2NHVnlRbTkxYm1Rb2NtRnVaMlVzSUdSbFppa2dPaUJzYjNkbGNrSnZkVzVrS0hKaGJtZGxMQ0JrWldZcFhHNTlYRzVsZUhCdmNuUnpMbVZ1WkNBOUlHWjFibU4wYVc5dUlDaHlZVzVuWlN3Z1pHVm1LU0I3WEc0Z0lISmxkSFZ5YmlCeVlXNW5aUzV5WlhabGNuTmxJRDhnYkc5M1pYSkNiM1Z1WkNoeVlXNW5aU3dnWkdWbUtTQTZJSFZ3Y0dWeVFtOTFibVFvY21GdVoyVXNJR1JsWmlsY2JuMWNibVY0Y0c5eWRITXVjM1JoY25SSmJtTnNkWE5wZG1VZ1BTQm1kVzVqZEdsdmJpQW9jbUZ1WjJVcElIdGNiaUFnY21WMGRYSnVJQ2hjYmlBZ0lDQnlZVzVuWlM1eVpYWmxjbk5sWEc0Z0lEOGdkWEJ3WlhKQ2IzVnVaRWx1WTJ4MWMybDJaU2h5WVc1blpTbGNiaUFnT2lCc2IzZGxja0p2ZFc1a1NXNWpiSFZ6YVhabEtISmhibWRsS1Z4dUlDQXBYRzU5WEc1bGVIQnZjblJ6TG1WdVpFbHVZMngxYzJsMlpTQTlJR1oxYm1OMGFXOXVJQ2h5WVc1blpTa2dlMXh1SUNCeVpYUjFjbTRnS0Z4dUlDQWdJSEpoYm1kbExuSmxkbVZ5YzJWY2JpQWdQeUJzYjNkbGNrSnZkVzVrU1c1amJIVnphWFpsS0hKaGJtZGxLVnh1SUNBNklIVndjR1Z5UW05MWJtUkpibU5zZFhOcGRtVW9jbUZ1WjJVcFhHNGdJQ2xjYm4xY2JseHVablZ1WTNScGIyNGdhV1FnS0dVcElIc2djbVYwZFhKdUlHVWdmVnh1WEc1bGVIQnZjblJ6TG5SdlRIUm5kQ0E5SUdaMWJtTjBhVzl1SUNoeVlXNW5aU3dnWDNKaGJtZGxMQ0J0WVhBc0lHeHZkMlZ5TENCMWNIQmxjaWtnZTF4dUlDQmZjbUZ1WjJVZ1BTQmZjbUZ1WjJVZ2ZId2dlMzFjYmlBZ2JXRndJRDBnYldGd0lIeDhJR2xrWEc0Z0lIWmhjaUJrWldaaGRXeDBjeUE5SUdGeVozVnRaVzUwY3k1c1pXNW5kR2dnUGlBelhHNGdJSFpoY2lCc1lpQTlJR1Y0Y0c5eWRITXViRzkzWlhKQ2IzVnVaRXRsZVNoeVlXNW5aU2xjYmlBZ2RtRnlJSFZpSUQwZ1pYaHdiM0owY3k1MWNIQmxja0p2ZFc1a1MyVjVLSEpoYm1kbEtWeHVJQ0JwWmloc1lpa2dlMXh1SUNBZ0lHbG1LR3hpSUQwOVBTQW5aM1FuS1NCZmNtRnVaMlV1WjNRZ1BTQnRZWEFvY21GdVoyVXVaM1FzSUdaaGJITmxLVnh1SUNBZ0lHVnNjMlVnSUNBZ0lDQWdJQ0FnSUNCZmNtRnVaMlV1WjNSbElEMGdiV0Z3S0hKaGJtZGxXMnhpWFN3Z1ptRnNjMlVwWEc0Z0lIMWNiaUFnWld4elpTQnBaaWhrWldaaGRXeDBjeWxjYmlBZ0lDQmZjbUZ1WjJVdVozUmxJRDBnYldGd0tHeHZkMlZ5TENCbVlXeHpaU2xjYmx4dUlDQnBaaWgxWWlrZ2UxeHVJQ0FnSUdsbUtIVmlJRDA5UFNBbmJIUW5LU0JmY21GdVoyVXViSFFnUFNCdFlYQW9jbUZ1WjJVdWJIUXNJSFJ5ZFdVcFhHNGdJQ0FnWld4elpTQWdJQ0FnSUNBZ0lDQWdJRjl5WVc1blpTNXNkR1VnUFNCdFlYQW9jbUZ1WjJWYmRXSmRMQ0IwY25WbEtWeHVJQ0I5WEc0Z0lHVnNjMlVnYVdZb1pHVm1ZWFZzZEhNcFhHNGdJQ0FnWDNKaGJtZGxMbXgwWlNBOUlHMWhjQ2gxY0hCbGNpd2dkSEoxWlNsY2JseHVJQ0JwWmloeVlXNW5aUzV5WlhabGNuTmxJQ0U5SUc1MWJHd3BYRzRnSUNBZ1gzSmhibWRsTG5KbGRtVnljMlVnUFNBaElYSmhibWRsTG5KbGRtVnljMlZjYmx4dUlDQXZMMmxtSUhKaGJtZGxJSGRoY3lCMWMyVmtJRzExZEdGaWJIbGNiaUFnTHk4b2FXNGdiR1YyWld3dGMzVmliR1YyWld3Z2FYUW5jeUJ3WVhKMElHOW1JR0Z1SUc5d2RHbHZibk1nYjJKcVpXTjBYRzRnSUM4dmRHaGhkQ0JvWVhNZ2JXOXlaU0J3Y205d1pYSjBhV1Z6SUc5dUlHbDBMaWxjYmlBZ2FXWW9hR0Z6S0Y5eVlXNW5aU3dnSjIxaGVDY3BLU0FnSUdSbGJHVjBaU0JmY21GdVoyVXViV0Y0WEc0Z0lHbG1LR2hoY3loZmNtRnVaMlVzSUNkdGFXNG5LU2tnSUNCa1pXeGxkR1VnWDNKaGJtZGxMbTFwYmx4dUlDQnBaaWhvWVhNb1gzSmhibWRsTENBbmMzUmhjblFuS1NrZ1pHVnNaWFJsSUY5eVlXNW5aUzV6ZEdGeWRGeHVJQ0JwWmlob1lYTW9YM0poYm1kbExDQW5aVzVrSnlrcElDQWdaR1ZzWlhSbElGOXlZVzVuWlM1bGJtUmNibHh1SUNCeVpYUjFjbTRnWDNKaGJtZGxYRzU5WEc1Y2JtVjRjRzl5ZEhNdVkyOXVkR0ZwYm5NZ1BTQm1kVzVqZEdsdmJpQW9jbUZ1WjJVc0lHdGxlU3dnWTI5dGNHRnlaU2tnZTF4dUlDQmpiMjF3WVhKbElEMGdZMjl0Y0dGeVpTQjhmQ0JsZUhCdmNuUnpMbU52YlhCaGNtVmNibHh1SUNCMllYSWdiR0lnUFNCc2IzZGxja0p2ZFc1a0tISmhibWRsS1Z4dUlDQnBaaWhwYzBSbFppaHNZaWtwSUh0Y2JpQWdJQ0IyWVhJZ1kyMXdJRDBnWTI5dGNHRnlaU2hyWlhrc0lHeGlLVnh1SUNBZ0lHbG1LR050Y0NBOElEQWdmSHdnS0dOdGNDQTlQVDBnTUNBbUppQnNiM2RsY2tKdmRXNWtSWGhqYkhWemFYWmxLSEpoYm1kbEtTa3BYRzRnSUNBZ0lDQnlaWFIxY200Z1ptRnNjMlZjYmlBZ2ZWeHVYRzRnSUhaaGNpQjFZaUE5SUhWd2NHVnlRbTkxYm1Rb2NtRnVaMlVwWEc0Z0lHbG1LR2x6UkdWbUtIVmlLU2tnZTF4dUlDQWdJSFpoY2lCamJYQWdQU0JqYjIxd1lYSmxLR3RsZVN3Z2RXSXBYRzRnSUNBZ2FXWW9ZMjF3SUQ0Z01DQjhmQ0FvWTIxd0lEMDlQU0F3S1NBbUppQjFjSEJsY2tKdmRXNWtSWGhqYkhWemFYWmxLSEpoYm1kbEtTbGNiaUFnSUNBZ0lISmxkSFZ5YmlCbVlXeHpaVnh1SUNCOVhHNWNiaUFnY21WMGRYSnVJSFJ5ZFdWY2JuMWNibHh1Wlhod2IzSjBjeTVtYVd4MFpYSWdQU0JtZFc1amRHbHZiaUFvY21GdVoyVXNJR052YlhCaGNtVXBJSHRjYmlBZ2NtVjBkWEp1SUdaMWJtTjBhVzl1SUNoclpYa3BJSHRjYmlBZ0lDQnlaWFIxY200Z1pYaHdiM0owY3k1amIyNTBZV2x1Y3loeVlXNW5aU3dnYTJWNUxDQmpiMjF3WVhKbEtWeHVJQ0I5WEc1OVhHNWNibHh1SWl3aWJXOWtkV3hsTG1WNGNHOXlkSE1nUFNCeVpYRjFhWEpsS0NkcGJXMWxaR2xoZEdVbktWeHVJaXdpZG1GeUlHbHVhR1Z5YVhSeklEMGdjbVZ4ZFdseVpTZ25hVzVvWlhKcGRITW5LVnh1ZG1GeUlFRmljM1J5WVdOMFRHVjJaV3hFVDFkT0lEMGdjbVZ4ZFdseVpTZ25ZV0p6ZEhKaFkzUXRiR1YyWld4a2IzZHVKeWt1UVdKemRISmhZM1JNWlhabGJFUlBWMDVjYm5aaGNpQkJZbk4wY21GamRFbDBaWEpoZEc5eUlEMGdjbVZ4ZFdseVpTZ25ZV0p6ZEhKaFkzUXRiR1YyWld4a2IzZHVKeWt1UVdKemRISmhZM1JKZEdWeVlYUnZjbHh1ZG1GeUlHeDBaM1FnUFNCeVpYRjFhWEpsS0Nkc2RHZDBKeWxjYm5aaGNpQmpjbVZoZEdWU1FsUWdQU0J5WlhGMWFYSmxLQ2RtZFc1amRHbHZibUZzTFhKbFpDMWliR0ZqYXkxMGNtVmxKeWxjYm5aaGNpQkNkV1ptWlhJZ1BTQnlaWEYxYVhKbEtDZHpZV1psTFdKMVptWmxjaWNwTGtKMVptWmxjbHh1WEc0dkx5QkpiaUJPYjJSbExDQjFjMlVnWjJ4dlltRnNMbk5sZEVsdGJXVmthV0YwWlM0Z1NXNGdkR2hsSUdKeWIzZHpaWElzSUhWelpTQmhJR052Ym5OcGMzUmxiblJjYmk4dklHMXBZM0p2ZEdGemF5QnNhV0p5WVhKNUlIUnZJR2RwZG1VZ1kyOXVjMmx6ZEdWdWRDQnRhV055YjNSaGMyc2daWGh3WlhKcFpXNWpaU0IwYnlCaGJHd2dZbkp2ZDNObGNuTmNiblpoY2lCelpYUkpiVzFsWkdsaGRHVWdQU0J5WlhGMWFYSmxLQ2N1TDJsdGJXVmthV0YwWlNjcFhHNWNibVoxYm1OMGFXOXVJR2QwSUNoMllXeDFaU2tnZTF4dUlDQnlaWFIxY200Z2JIUm5kQzVqYjIxd1lYSmxLSFpoYkhWbExDQjBhR2x6TGw5MWNIQmxja0p2ZFc1a0tTQStJREJjYm4xY2JseHVablZ1WTNScGIyNGdaM1JsSUNoMllXeDFaU2tnZTF4dUlDQnlaWFIxY200Z2JIUm5kQzVqYjIxd1lYSmxLSFpoYkhWbExDQjBhR2x6TGw5MWNIQmxja0p2ZFc1a0tTQStQU0F3WEc1OVhHNWNibVoxYm1OMGFXOXVJR3gwSUNoMllXeDFaU2tnZTF4dUlDQnlaWFIxY200Z2JIUm5kQzVqYjIxd1lYSmxLSFpoYkhWbExDQjBhR2x6TGw5MWNIQmxja0p2ZFc1a0tTQThJREJjYm4xY2JseHVablZ1WTNScGIyNGdiSFJsSUNoMllXeDFaU2tnZTF4dUlDQnlaWFIxY200Z2JIUm5kQzVqYjIxd1lYSmxLSFpoYkhWbExDQjBhR2x6TGw5MWNIQmxja0p2ZFc1a0tTQThQU0F3WEc1OVhHNWNibVoxYm1OMGFXOXVJRTFsYlVsMFpYSmhkRzl5SUNoa1lpd2diM0IwYVc5dWN5a2dlMXh1SUNCQlluTjBjbUZqZEVsMFpYSmhkRzl5TG1OaGJHd29kR2hwY3l3Z1pHSXBYRzRnSUhSb2FYTXVYMnhwYldsMElEMGdiM0IwYVc5dWN5NXNhVzFwZEZ4dVhHNGdJR2xtSUNoMGFHbHpMbDlzYVcxcGRDQTlQVDBnTFRFcElIUm9hWE11WDJ4cGJXbDBJRDBnU1c1bWFXNXBkSGxjYmx4dUlDQjJZWElnZEhKbFpTQTlJR1JpTGw5emRHOXlaVnh1WEc0Z0lIUm9hWE11YTJWNVFYTkNkV1ptWlhJZ1BTQnZjSFJwYjI1ekxtdGxlVUZ6UW5WbVptVnlJQ0U5UFNCbVlXeHpaVnh1SUNCMGFHbHpMblpoYkhWbFFYTkNkV1ptWlhJZ1BTQnZjSFJwYjI1ekxuWmhiSFZsUVhOQ2RXWm1aWElnSVQwOUlHWmhiSE5sWEc0Z0lIUm9hWE11WDNKbGRtVnljMlVnUFNCdmNIUnBiMjV6TG5KbGRtVnljMlZjYmlBZ2RHaHBjeTVmYjNCMGFXOXVjeUE5SUc5d2RHbHZibk5jYmlBZ2RHaHBjeTVmWkc5dVpTQTlJREJjYmx4dUlDQnBaaUFvSVhSb2FYTXVYM0psZG1WeWMyVXBJSHRjYmlBZ0lDQjBhR2x6TGw5cGJtTnlJRDBnSjI1bGVIUW5YRzRnSUNBZ2RHaHBjeTVmYkc5M1pYSkNiM1Z1WkNBOUlHeDBaM1F1Ykc5M1pYSkNiM1Z1WkNodmNIUnBiMjV6S1Z4dUlDQWdJSFJvYVhNdVgzVndjR1Z5UW05MWJtUWdQU0JzZEdkMExuVndjR1Z5UW05MWJtUW9iM0IwYVc5dWN5bGNibHh1SUNBZ0lHbG1JQ2gwZVhCbGIyWWdkR2hwY3k1ZmJHOTNaWEpDYjNWdVpDQTlQVDBnSjNWdVpHVm1hVzVsWkNjcElIdGNiaUFnSUNBZ0lIUm9hWE11WDNSeVpXVWdQU0IwY21WbExtSmxaMmx1WEc0Z0lDQWdmU0JsYkhObElHbG1JQ2hzZEdkMExteHZkMlZ5UW05MWJtUkpibU5zZFhOcGRtVW9iM0IwYVc5dWN5a3BJSHRjYmlBZ0lDQWdJSFJvYVhNdVgzUnlaV1VnUFNCMGNtVmxMbWRsS0hSb2FYTXVYMnh2ZDJWeVFtOTFibVFwWEc0Z0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lIUm9hWE11WDNSeVpXVWdQU0IwY21WbExtZDBLSFJvYVhNdVgyeHZkMlZ5UW05MWJtUXBYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2FXWWdLSFJvYVhNdVgzVndjR1Z5UW05MWJtUXBJSHRjYmlBZ0lDQWdJR2xtSUNoc2RHZDBMblZ3Y0dWeVFtOTFibVJKYm1Oc2RYTnBkbVVvYjNCMGFXOXVjeWtwSUh0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVmZEdWemRDQTlJR3gwWlZ4dUlDQWdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnZEdocGN5NWZkR1Z6ZENBOUlHeDBYRzRnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lIUm9hWE11WDJsdVkzSWdQU0FuY0hKbGRpZGNiaUFnSUNCMGFHbHpMbDlzYjNkbGNrSnZkVzVrSUQwZ2JIUm5kQzUxY0hCbGNrSnZkVzVrS0c5d2RHbHZibk1wWEc0Z0lDQWdkR2hwY3k1ZmRYQndaWEpDYjNWdVpDQTlJR3gwWjNRdWJHOTNaWEpDYjNWdVpDaHZjSFJwYjI1ektWeHVYRzRnSUNBZ2FXWWdLSFI1Y0dWdlppQjBhR2x6TGw5c2IzZGxja0p2ZFc1a0lEMDlQU0FuZFc1a1pXWnBibVZrSnlrZ2UxeHVJQ0FnSUNBZ2RHaHBjeTVmZEhKbFpTQTlJSFJ5WldVdVpXNWtYRzRnSUNBZ2ZTQmxiSE5sSUdsbUlDaHNkR2QwTG5Wd2NHVnlRbTkxYm1SSmJtTnNkWE5wZG1Vb2IzQjBhVzl1Y3lrcElIdGNiaUFnSUNBZ0lIUm9hWE11WDNSeVpXVWdQU0IwY21WbExteGxLSFJvYVhNdVgyeHZkMlZ5UW05MWJtUXBYRzRnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUhSb2FYTXVYM1J5WldVZ1BTQjBjbVZsTG14MEtIUm9hWE11WDJ4dmQyVnlRbTkxYm1RcFhHNGdJQ0FnZlZ4dVhHNGdJQ0FnYVdZZ0tIUm9hWE11WDNWd2NHVnlRbTkxYm1RcElIdGNiaUFnSUNBZ0lHbG1JQ2hzZEdkMExteHZkMlZ5UW05MWJtUkpibU5zZFhOcGRtVW9iM0IwYVc5dWN5a3BJSHRjYmlBZ0lDQWdJQ0FnZEdocGN5NWZkR1Z6ZENBOUlHZDBaVnh1SUNBZ0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDQWdkR2hwY3k1ZmRHVnpkQ0E5SUdkMFhHNGdJQ0FnSUNCOVhHNGdJQ0FnZlZ4dUlDQjlYRzU5WEc1Y2JtbHVhR1Z5YVhSektFMWxiVWwwWlhKaGRHOXlMQ0JCWW5OMGNtRmpkRWwwWlhKaGRHOXlLVnh1WEc1TlpXMUpkR1Z5WVhSdmNpNXdjbTkwYjNSNWNHVXVYMjVsZUhRZ1BTQm1kVzVqZEdsdmJpQW9ZMkZzYkdKaFkyc3BJSHRjYmlBZ2RtRnlJR3RsZVZ4dUlDQjJZWElnZG1Gc2RXVmNibHh1SUNCcFppQW9kR2hwY3k1ZlpHOXVaU3NySUQ0OUlIUm9hWE11WDJ4cGJXbDBLU0J5WlhSMWNtNGdjMlYwU1cxdFpXUnBZWFJsS0dOaGJHeGlZV05yS1Z4dUlDQnBaaUFvSVhSb2FYTXVYM1J5WldVdWRtRnNhV1FwSUhKbGRIVnliaUJ6WlhSSmJXMWxaR2xoZEdVb1kyRnNiR0poWTJzcFhHNWNiaUFnYTJWNUlEMGdkR2hwY3k1ZmRISmxaUzVyWlhsY2JpQWdkbUZzZFdVZ1BTQjBhR2x6TGw5MGNtVmxMblpoYkhWbFhHNWNiaUFnYVdZZ0tDRjBhR2x6TGw5MFpYTjBLR3RsZVNrcElISmxkSFZ5YmlCelpYUkpiVzFsWkdsaGRHVW9ZMkZzYkdKaFkyc3BYRzVjYmlBZ2FXWWdLSFJvYVhNdWEyVjVRWE5DZFdabVpYSWdKaVlnSVVKMVptWmxjaTVwYzBKMVptWmxjaWhyWlhrcEtTQjdYRzRnSUNBZ2EyVjVJRDBnUW5WbVptVnlMbVp5YjIwb1UzUnlhVzVuS0d0bGVTa3BYRzRnSUgxY2JseHVJQ0JwWmlBb2RHaHBjeTUyWVd4MVpVRnpRblZtWm1WeUlDWW1JQ0ZDZFdabVpYSXVhWE5DZFdabVpYSW9kbUZzZFdVcEtTQjdYRzRnSUNBZ2RtRnNkV1VnUFNCQ2RXWm1aWEl1Wm5KdmJTaFRkSEpwYm1jb2RtRnNkV1VwS1Z4dUlDQjlYRzVjYmlBZ2RHaHBjeTVmZEhKbFpWdDBhR2x6TGw5cGJtTnlYU2dwWEc1Y2JpQWdjMlYwU1cxdFpXUnBZWFJsS0daMWJtTjBhVzl1SUdOaGJHeE9aWGgwSUNncElIdGNiaUFnSUNCallXeHNZbUZqYXlodWRXeHNMQ0JyWlhrc0lIWmhiSFZsS1Z4dUlDQjlLVnh1ZlZ4dVhHNU5aVzFKZEdWeVlYUnZjaTV3Y205MGIzUjVjR1V1WDNSbGMzUWdQU0JtZFc1amRHbHZiaUFvS1NCN1hHNGdJSEpsZEhWeWJpQjBjblZsWEc1OVhHNWNibVoxYm1OMGFXOXVJRTFsYlVSUFYwNGdLQ2tnZTF4dUlDQnBaaUFvSVNoMGFHbHpJR2x1YzNSaGJtTmxiMllnVFdWdFJFOVhUaWtwSUhKbGRIVnliaUJ1WlhjZ1RXVnRSRTlYVGlncFhHNWNiaUFnUVdKemRISmhZM1JNWlhabGJFUlBWMDR1WTJGc2JDaDBhR2x6TENBbkp5bGNibHh1SUNCMGFHbHpMbDl6ZEc5eVpTQTlJR055WldGMFpWSkNWQ2hzZEdkMExtTnZiWEJoY21VcFhHNTlYRzVjYm1sdWFHVnlhWFJ6S0UxbGJVUlBWMDRzSUVGaWMzUnlZV04wVEdWMlpXeEVUMWRPS1Z4dVhHNU5aVzFFVDFkT0xuQnliM1J2ZEhsd1pTNWZiM0JsYmlBOUlHWjFibU4wYVc5dUlDaHZjSFJwYjI1ekxDQmpZV3hzWW1GamF5a2dlMXh1SUNCMllYSWdjMlZzWmlBOUlIUm9hWE5jYmlBZ2MyVjBTVzF0WldScFlYUmxLR1oxYm1OMGFXOXVJR05oYkd4T1pYaDBJQ2dwSUh0Y2JpQWdJQ0JqWVd4c1ltRmpheWh1ZFd4c0xDQnpaV3htS1Z4dUlDQjlLVnh1ZlZ4dVhHNU5aVzFFVDFkT0xuQnliM1J2ZEhsd1pTNWZjMlZ5YVdGc2FYcGxTMlY1SUQwZ1puVnVZM1JwYjI0Z0tHdGxlU2tnZTF4dUlDQnlaWFIxY200Z2EyVjVYRzU5WEc1Y2JrMWxiVVJQVjA0dWNISnZkRzkwZVhCbExsOXpaWEpwWVd4cGVtVldZV3gxWlNBOUlHWjFibU4wYVc5dUlDaDJZV3gxWlNrZ2UxeHVJQ0J5WlhSMWNtNGdkbUZzZFdVZ1BUMGdiblZzYkNBL0lDY25JRG9nZG1Gc2RXVmNibjFjYmx4dVRXVnRSRTlYVGk1d2NtOTBiM1I1Y0dVdVgzQjFkQ0E5SUdaMWJtTjBhVzl1SUNoclpYa3NJSFpoYkhWbExDQnZjSFJwYjI1ekxDQmpZV3hzWW1GamF5a2dlMXh1SUNCMllYSWdhWFJsY2lBOUlIUm9hWE11WDNOMGIzSmxMbVpwYm1Rb2EyVjVLVnh1WEc0Z0lHbG1JQ2hwZEdWeUxuWmhiR2xrS1NCN1hHNGdJQ0FnZEdocGN5NWZjM1J2Y21VZ1BTQnBkR1Z5TG5Wd1pHRjBaU2gyWVd4MVpTbGNiaUFnZlNCbGJITmxJSHRjYmlBZ0lDQjBhR2x6TGw5emRHOXlaU0E5SUhSb2FYTXVYM04wYjNKbExtbHVjMlZ5ZENoclpYa3NJSFpoYkhWbEtWeHVJQ0I5WEc1Y2JpQWdjMlYwU1cxdFpXUnBZWFJsS0dOaGJHeGlZV05yS1Z4dWZWeHVYRzVOWlcxRVQxZE9MbkJ5YjNSdmRIbHdaUzVmWjJWMElEMGdablZ1WTNScGIyNGdLR3RsZVN3Z2IzQjBhVzl1Y3l3Z1kyRnNiR0poWTJzcElIdGNiaUFnZG1GeUlIWmhiSFZsSUQwZ2RHaHBjeTVmYzNSdmNtVXVaMlYwS0d0bGVTbGNibHh1SUNCcFppQW9kSGx3Wlc5bUlIWmhiSFZsSUQwOVBTQW5kVzVrWldacGJtVmtKeWtnZTF4dUlDQWdJQzh2SUNkT2IzUkdiM1Z1WkNjZ1pYSnliM0lzSUdOdmJuTnBjM1JsYm5RZ2QybDBhQ0JNWlhabGJFUlBWMDRnUVZCSlhHNGdJQ0FnY21WMGRYSnVJSE5sZEVsdGJXVmthV0YwWlNobWRXNWpkR2x2YmlCallXeHNUbVY0ZENBb0tTQjdYRzRnSUNBZ0lDQmpZV3hzWW1GamF5aHVaWGNnUlhKeWIzSW9KMDV2ZEVadmRXNWtKeWtwWEc0Z0lDQWdmU2xjYmlBZ2ZWeHVYRzRnSUdsbUlDaHZjSFJwYjI1ekxtRnpRblZtWm1WeUlDRTlQU0JtWVd4elpTQW1KaUFoUW5WbVptVnlMbWx6UW5WbVptVnlLSFpoYkhWbEtTa2dlMXh1SUNBZ0lIWmhiSFZsSUQwZ1FuVm1abVZ5TG1aeWIyMG9VM1J5YVc1bktIWmhiSFZsS1NsY2JpQWdmVnh1WEc0Z0lITmxkRWx0YldWa2FXRjBaU2htZFc1amRHbHZiaUJqWVd4c1RtVjRkQ0FvS1NCN1hHNGdJQ0FnWTJGc2JHSmhZMnNvYm5Wc2JDd2dkbUZzZFdVcFhHNGdJSDBwWEc1OVhHNWNiazFsYlVSUFYwNHVjSEp2ZEc5MGVYQmxMbDlrWld3Z1BTQm1kVzVqZEdsdmJpQW9hMlY1TENCdmNIUnBiMjV6TENCallXeHNZbUZqYXlrZ2UxeHVJQ0IwYUdsekxsOXpkRzl5WlNBOUlIUm9hWE11WDNOMGIzSmxMbkpsYlc5MlpTaHJaWGtwWEc0Z0lITmxkRWx0YldWa2FXRjBaU2hqWVd4c1ltRmpheWxjYm4xY2JseHVUV1Z0UkU5WFRpNXdjbTkwYjNSNWNHVXVYMkpoZEdOb0lEMGdablZ1WTNScGIyNGdLR0Z5Y21GNUxDQnZjSFJwYjI1ekxDQmpZV3hzWW1GamF5a2dlMXh1SUNCMllYSWdhU0E5SUMweFhHNGdJSFpoY2lCclpYbGNiaUFnZG1GeUlIWmhiSFZsWEc0Z0lIWmhjaUJwZEdWeVhHNGdJSFpoY2lCc1pXNGdQU0JoY25KaGVTNXNaVzVuZEdoY2JpQWdkbUZ5SUhSeVpXVWdQU0IwYUdsekxsOXpkRzl5WlZ4dVhHNGdJSGRvYVd4bElDZ3JLMmtnUENCc1pXNHBJSHRjYmlBZ0lDQnJaWGtnUFNCaGNuSmhlVnRwWFM1clpYbGNiaUFnSUNCcGRHVnlJRDBnZEhKbFpTNW1hVzVrS0d0bGVTbGNibHh1SUNBZ0lHbG1JQ2hoY25KaGVWdHBYUzUwZVhCbElEMDlQU0FuY0hWMEp5a2dlMXh1SUNBZ0lDQWdkbUZzZFdVZ1BTQmhjbkpoZVZ0cFhTNTJZV3gxWlZ4dUlDQWdJQ0FnZEhKbFpTQTlJR2wwWlhJdWRtRnNhV1FnUHlCcGRHVnlMblZ3WkdGMFpTaDJZV3gxWlNrZ09pQjBjbVZsTG1sdWMyVnlkQ2hyWlhrc0lIWmhiSFZsS1Z4dUlDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQjBjbVZsSUQwZ2FYUmxjaTV5WlcxdmRtVW9LVnh1SUNBZ0lIMWNiaUFnZlZ4dVhHNGdJSFJvYVhNdVgzTjBiM0psSUQwZ2RISmxaVnh1WEc0Z0lITmxkRWx0YldWa2FXRjBaU2hqWVd4c1ltRmpheWxjYm4xY2JseHVUV1Z0UkU5WFRpNXdjbTkwYjNSNWNHVXVYMmwwWlhKaGRHOXlJRDBnWm5WdVkzUnBiMjRnS0c5d2RHbHZibk1wSUh0Y2JpQWdjbVYwZFhKdUlHNWxkeUJOWlcxSmRHVnlZWFJ2Y2loMGFHbHpMQ0J2Y0hScGIyNXpLVnh1ZlZ4dVhHNXRiMlIxYkdVdVpYaHdiM0owY3lBOUlFMWxiVVJQVjA0dVpHVm1ZWFZzZENBOUlFMWxiVVJQVjA1Y2JpSXNJaTh2SUhOb2FXMGdabTl5SUhWemFXNW5JSEJ5YjJObGMzTWdhVzRnWW5KdmQzTmxjbHh1ZG1GeUlIQnliMk5sYzNNZ1BTQnRiMlIxYkdVdVpYaHdiM0owY3lBOUlIdDlPMXh1WEc0dkx5QmpZV05vWldRZ1puSnZiU0IzYUdGMFpYWmxjaUJuYkc5aVlXd2dhWE1nY0hKbGMyVnVkQ0J6YnlCMGFHRjBJSFJsYzNRZ2NuVnVibVZ5Y3lCMGFHRjBJSE4wZFdJZ2FYUmNiaTh2SUdSdmJpZDBJR0p5WldGcklIUm9hVzVuY3k0Z0lFSjFkQ0IzWlNCdVpXVmtJSFJ2SUhkeVlYQWdhWFFnYVc0Z1lTQjBjbmtnWTJGMFkyZ2dhVzRnWTJGelpTQnBkQ0JwYzF4dUx5OGdkM0poY0hCbFpDQnBiaUJ6ZEhKcFkzUWdiVzlrWlNCamIyUmxJSGRvYVdOb0lHUnZaWE51SjNRZ1pHVm1hVzVsSUdGdWVTQm5iRzlpWVd4ekxpQWdTWFFuY3lCcGJuTnBaR1VnWVZ4dUx5OGdablZ1WTNScGIyNGdZbVZqWVhWelpTQjBjbmt2WTJGMFkyaGxjeUJrWlc5d2RHbHRhWHBsSUdsdUlHTmxjblJoYVc0Z1pXNW5hVzVsY3k1Y2JseHVkbUZ5SUdOaFkyaGxaRk5sZEZScGJXVnZkWFE3WEc1MllYSWdZMkZqYUdWa1EyeGxZWEpVYVcxbGIzVjBPMXh1WEc1bWRXNWpkR2x2YmlCa1pXWmhkV3gwVTJWMFZHbHRiM1YwS0NrZ2UxeHVJQ0FnSUhSb2NtOTNJRzVsZHlCRmNuSnZjaWduYzJWMFZHbHRaVzkxZENCb1lYTWdibTkwSUdKbFpXNGdaR1ZtYVc1bFpDY3BPMXh1ZlZ4dVpuVnVZM1JwYjI0Z1pHVm1ZWFZzZEVOc1pXRnlWR2x0Wlc5MWRDQW9LU0I3WEc0Z0lDQWdkR2h5YjNjZ2JtVjNJRVZ5Y205eUtDZGpiR1ZoY2xScGJXVnZkWFFnYUdGeklHNXZkQ0JpWldWdUlHUmxabWx1WldRbktUdGNibjFjYmlobWRXNWpkR2x2YmlBb0tTQjdYRzRnSUNBZ2RISjVJSHRjYmlBZ0lDQWdJQ0FnYVdZZ0tIUjVjR1Z2WmlCelpYUlVhVzFsYjNWMElEMDlQU0FuWm5WdVkzUnBiMjRuS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JqWVdOb1pXUlRaWFJVYVcxbGIzVjBJRDBnYzJWMFZHbHRaVzkxZER0Y2JpQWdJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR05oWTJobFpGTmxkRlJwYldWdmRYUWdQU0JrWldaaGRXeDBVMlYwVkdsdGIzVjBPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdmU0JqWVhSamFDQW9aU2tnZTF4dUlDQWdJQ0FnSUNCallXTm9aV1JUWlhSVWFXMWxiM1YwSUQwZ1pHVm1ZWFZzZEZObGRGUnBiVzkxZER0Y2JpQWdJQ0I5WEc0Z0lDQWdkSEo1SUh0Y2JpQWdJQ0FnSUNBZ2FXWWdLSFI1Y0dWdlppQmpiR1ZoY2xScGJXVnZkWFFnUFQwOUlDZG1kVzVqZEdsdmJpY3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHTmhZMmhsWkVOc1pXRnlWR2x0Wlc5MWRDQTlJR05zWldGeVZHbHRaVzkxZER0Y2JpQWdJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR05oWTJobFpFTnNaV0Z5VkdsdFpXOTFkQ0E5SUdSbFptRjFiSFJEYkdWaGNsUnBiV1Z2ZFhRN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNCOUlHTmhkR05vSUNobEtTQjdYRzRnSUNBZ0lDQWdJR05oWTJobFpFTnNaV0Z5VkdsdFpXOTFkQ0E5SUdSbFptRjFiSFJEYkdWaGNsUnBiV1Z2ZFhRN1hHNGdJQ0FnZlZ4dWZTQW9LU2xjYm1aMWJtTjBhVzl1SUhKMWJsUnBiV1Z2ZFhRb1puVnVLU0I3WEc0Z0lDQWdhV1lnS0dOaFkyaGxaRk5sZEZScGJXVnZkWFFnUFQwOUlITmxkRlJwYldWdmRYUXBJSHRjYmlBZ0lDQWdJQ0FnTHk5dWIzSnRZV3dnWlc1MmFYSnZiV1Z1ZEhNZ2FXNGdjMkZ1WlNCemFYUjFZWFJwYjI1elhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCelpYUlVhVzFsYjNWMEtHWjFiaXdnTUNrN1hHNGdJQ0FnZlZ4dUlDQWdJQzh2SUdsbUlITmxkRlJwYldWdmRYUWdkMkZ6YmlkMElHRjJZV2xzWVdKc1pTQmlkWFFnZDJGeklHeGhkSFJsY2lCa1pXWnBibVZrWEc0Z0lDQWdhV1lnS0NoallXTm9aV1JUWlhSVWFXMWxiM1YwSUQwOVBTQmtaV1poZFd4MFUyVjBWR2x0YjNWMElIeDhJQ0ZqWVdOb1pXUlRaWFJVYVcxbGIzVjBLU0FtSmlCelpYUlVhVzFsYjNWMEtTQjdYRzRnSUNBZ0lDQWdJR05oWTJobFpGTmxkRlJwYldWdmRYUWdQU0J6WlhSVWFXMWxiM1YwTzF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnYzJWMFZHbHRaVzkxZENobWRXNHNJREFwTzF4dUlDQWdJSDFjYmlBZ0lDQjBjbmtnZTF4dUlDQWdJQ0FnSUNBdkx5QjNhR1Z1SUhkb1pXNGdjMjl0WldKdlpIa2dhR0Z6SUhOamNtVjNaV1FnZDJsMGFDQnpaWFJVYVcxbGIzVjBJR0oxZENCdWJ5QkpMa1V1SUcxaFpHUnVaWE56WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJqWVdOb1pXUlRaWFJVYVcxbGIzVjBLR1oxYml3Z01DazdYRzRnSUNBZ2ZTQmpZWFJqYUNobEtYdGNiaUFnSUNBZ0lDQWdkSEo1SUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQzh2SUZkb1pXNGdkMlVnWVhKbElHbHVJRWt1UlM0Z1luVjBJSFJvWlNCelkzSnBjSFFnYUdGeklHSmxaVzRnWlhaaGJHVmtJSE52SUVrdVJTNGdaRzlsYzI0bmRDQjBjblZ6ZENCMGFHVWdaMnh2WW1Gc0lHOWlhbVZqZENCM2FHVnVJR05oYkd4bFpDQnViM0p0WVd4c2VWeHVJQ0FnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJR05oWTJobFpGTmxkRlJwYldWdmRYUXVZMkZzYkNodWRXeHNMQ0JtZFc0c0lEQXBPMXh1SUNBZ0lDQWdJQ0I5SUdOaGRHTm9LR1VwZTF4dUlDQWdJQ0FnSUNBZ0lDQWdMeThnYzJGdFpTQmhjeUJoWW05MlpTQmlkWFFnZDJobGJpQnBkQ2R6SUdFZ2RtVnljMmx2YmlCdlppQkpMa1V1SUhSb1lYUWdiWFZ6ZENCb1lYWmxJSFJvWlNCbmJHOWlZV3dnYjJKcVpXTjBJR1p2Y2lBbmRHaHBjeWNzSUdodmNHWjFiR3g1SUc5MWNpQmpiMjUwWlhoMElHTnZjbkpsWTNRZ2IzUm9aWEozYVhObElHbDBJSGRwYkd3Z2RHaHliM2NnWVNCbmJHOWlZV3dnWlhKeWIzSmNiaUFnSUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUJqWVdOb1pXUlRaWFJVYVcxbGIzVjBMbU5oYkd3b2RHaHBjeXdnWm5WdUxDQXdLVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJSDFjYmx4dVhHNTlYRzVtZFc1amRHbHZiaUJ5ZFc1RGJHVmhjbFJwYldWdmRYUW9iV0Z5YTJWeUtTQjdYRzRnSUNBZ2FXWWdLR05oWTJobFpFTnNaV0Z5VkdsdFpXOTFkQ0E5UFQwZ1kyeGxZWEpVYVcxbGIzVjBLU0I3WEc0Z0lDQWdJQ0FnSUM4dmJtOXliV0ZzSUdWdWRtbHliMjFsYm5SeklHbHVJSE5oYm1VZ2MybDBkV0YwYVc5dWMxeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z1kyeGxZWEpVYVcxbGIzVjBLRzFoY210bGNpazdYRzRnSUNBZ2ZWeHVJQ0FnSUM4dklHbG1JR05zWldGeVZHbHRaVzkxZENCM1lYTnVKM1FnWVhaaGFXeGhZbXhsSUdKMWRDQjNZWE1nYkdGMGRHVnlJR1JsWm1sdVpXUmNiaUFnSUNCcFppQW9LR05oWTJobFpFTnNaV0Z5VkdsdFpXOTFkQ0E5UFQwZ1pHVm1ZWFZzZEVOc1pXRnlWR2x0Wlc5MWRDQjhmQ0FoWTJGamFHVmtRMnhsWVhKVWFXMWxiM1YwS1NBbUppQmpiR1ZoY2xScGJXVnZkWFFwSUh0Y2JpQWdJQ0FnSUNBZ1kyRmphR1ZrUTJ4bFlYSlVhVzFsYjNWMElEMGdZMnhsWVhKVWFXMWxiM1YwTzF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnWTJ4bFlYSlVhVzFsYjNWMEtHMWhjbXRsY2lrN1hHNGdJQ0FnZlZ4dUlDQWdJSFJ5ZVNCN1hHNGdJQ0FnSUNBZ0lDOHZJSGRvWlc0Z2QyaGxiaUJ6YjIxbFltOWtlU0JvWVhNZ2MyTnlaWGRsWkNCM2FYUm9JSE5sZEZScGJXVnZkWFFnWW5WMElHNXZJRWt1UlM0Z2JXRmtaRzVsYzNOY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUdOaFkyaGxaRU5zWldGeVZHbHRaVzkxZENodFlYSnJaWElwTzF4dUlDQWdJSDBnWTJGMFkyZ2dLR1VwZTF4dUlDQWdJQ0FnSUNCMGNua2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0x5OGdWMmhsYmlCM1pTQmhjbVVnYVc0Z1NTNUZMaUJpZFhRZ2RHaGxJSE5qY21sd2RDQm9ZWE1nWW1WbGJpQmxkbUZzWldRZ2MyOGdTUzVGTGlCa2IyVnpiaWQwSUNCMGNuVnpkQ0IwYUdVZ1oyeHZZbUZzSUc5aWFtVmpkQ0IzYUdWdUlHTmhiR3hsWkNCdWIzSnRZV3hzZVZ4dUlDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlHTmhZMmhsWkVOc1pXRnlWR2x0Wlc5MWRDNWpZV3hzS0c1MWJHd3NJRzFoY210bGNpazdYRzRnSUNBZ0lDQWdJSDBnWTJGMFkyZ2dLR1VwZTF4dUlDQWdJQ0FnSUNBZ0lDQWdMeThnYzJGdFpTQmhjeUJoWW05MlpTQmlkWFFnZDJobGJpQnBkQ2R6SUdFZ2RtVnljMmx2YmlCdlppQkpMa1V1SUhSb1lYUWdiWFZ6ZENCb1lYWmxJSFJvWlNCbmJHOWlZV3dnYjJKcVpXTjBJR1p2Y2lBbmRHaHBjeWNzSUdodmNHWjFiR3g1SUc5MWNpQmpiMjUwWlhoMElHTnZjbkpsWTNRZ2IzUm9aWEozYVhObElHbDBJSGRwYkd3Z2RHaHliM2NnWVNCbmJHOWlZV3dnWlhKeWIzSXVYRzRnSUNBZ0lDQWdJQ0FnSUNBdkx5QlRiMjFsSUhabGNuTnBiMjV6SUc5bUlFa3VSUzRnYUdGMlpTQmthV1ptWlhKbGJuUWdjblZzWlhNZ1ptOXlJR05zWldGeVZHbHRaVzkxZENCMmN5QnpaWFJVYVcxbGIzVjBYRzRnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnWTJGamFHVmtRMnhsWVhKVWFXMWxiM1YwTG1OaGJHd29kR2hwY3l3Z2JXRnlhMlZ5S1R0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JseHVYRzVjYm4xY2JuWmhjaUJ4ZFdWMVpTQTlJRnRkTzF4dWRtRnlJR1J5WVdsdWFXNW5JRDBnWm1Gc2MyVTdYRzUyWVhJZ1kzVnljbVZ1ZEZGMVpYVmxPMXh1ZG1GeUlIRjFaWFZsU1c1a1pYZ2dQU0F0TVR0Y2JseHVablZ1WTNScGIyNGdZMnhsWVc1VmNFNWxlSFJVYVdOcktDa2dlMXh1SUNBZ0lHbG1JQ2doWkhKaGFXNXBibWNnZkh3Z0lXTjFjbkpsYm5SUmRXVjFaU2tnZTF4dUlDQWdJQ0FnSUNCeVpYUjFjbTQ3WEc0Z0lDQWdmVnh1SUNBZ0lHUnlZV2x1YVc1bklEMGdabUZzYzJVN1hHNGdJQ0FnYVdZZ0tHTjFjbkpsYm5SUmRXVjFaUzVzWlc1bmRHZ3BJSHRjYmlBZ0lDQWdJQ0FnY1hWbGRXVWdQU0JqZFhKeVpXNTBVWFZsZFdVdVkyOXVZMkYwS0hGMVpYVmxLVHRjYmlBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ0lDQnhkV1YxWlVsdVpHVjRJRDBnTFRFN1hHNGdJQ0FnZlZ4dUlDQWdJR2xtSUNoeGRXVjFaUzVzWlc1bmRHZ3BJSHRjYmlBZ0lDQWdJQ0FnWkhKaGFXNVJkV1YxWlNncE8xeHVJQ0FnSUgxY2JuMWNibHh1Wm5WdVkzUnBiMjRnWkhKaGFXNVJkV1YxWlNncElIdGNiaUFnSUNCcFppQW9aSEpoYVc1cGJtY3BJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVPMXh1SUNBZ0lIMWNiaUFnSUNCMllYSWdkR2x0Wlc5MWRDQTlJSEoxYmxScGJXVnZkWFFvWTJ4bFlXNVZjRTVsZUhSVWFXTnJLVHRjYmlBZ0lDQmtjbUZwYm1sdVp5QTlJSFJ5ZFdVN1hHNWNiaUFnSUNCMllYSWdiR1Z1SUQwZ2NYVmxkV1V1YkdWdVozUm9PMXh1SUNBZ0lIZG9hV3hsS0d4bGJpa2dlMXh1SUNBZ0lDQWdJQ0JqZFhKeVpXNTBVWFZsZFdVZ1BTQnhkV1YxWlR0Y2JpQWdJQ0FnSUNBZ2NYVmxkV1VnUFNCYlhUdGNiaUFnSUNBZ0lDQWdkMmhwYkdVZ0tDc3JjWFZsZFdWSmJtUmxlQ0E4SUd4bGJpa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLR04xY25KbGJuUlJkV1YxWlNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHTjFjbkpsYm5SUmRXVjFaVnR4ZFdWMVpVbHVaR1Y0WFM1eWRXNG9LVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0J4ZFdWMVpVbHVaR1Y0SUQwZ0xURTdYRzRnSUNBZ0lDQWdJR3hsYmlBOUlIRjFaWFZsTG14bGJtZDBhRHRjYmlBZ0lDQjlYRzRnSUNBZ1kzVnljbVZ1ZEZGMVpYVmxJRDBnYm5Wc2JEdGNiaUFnSUNCa2NtRnBibWx1WnlBOUlHWmhiSE5sTzF4dUlDQWdJSEoxYmtOc1pXRnlWR2x0Wlc5MWRDaDBhVzFsYjNWMEtUdGNibjFjYmx4dWNISnZZMlZ6Y3k1dVpYaDBWR2xqYXlBOUlHWjFibU4wYVc5dUlDaG1kVzRwSUh0Y2JpQWdJQ0IyWVhJZ1lYSm5jeUE5SUc1bGR5QkJjbkpoZVNoaGNtZDFiV1Z1ZEhNdWJHVnVaM1JvSUMwZ01TazdYRzRnSUNBZ2FXWWdLR0Z5WjNWdFpXNTBjeTVzWlc1bmRHZ2dQaUF4S1NCN1hHNGdJQ0FnSUNBZ0lHWnZjaUFvZG1GeUlHa2dQU0F4T3lCcElEd2dZWEpuZFcxbGJuUnpMbXhsYm1kMGFEc2dhU3NyS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JoY21kelcya2dMU0F4WFNBOUlHRnlaM1Z0Wlc1MGMxdHBYVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJSDFjYmlBZ0lDQnhkV1YxWlM1d2RYTm9LRzVsZHlCSmRHVnRLR1oxYml3Z1lYSm5jeWtwTzF4dUlDQWdJR2xtSUNoeGRXVjFaUzVzWlc1bmRHZ2dQVDA5SURFZ0ppWWdJV1J5WVdsdWFXNW5LU0I3WEc0Z0lDQWdJQ0FnSUhKMWJsUnBiV1Z2ZFhRb1pISmhhVzVSZFdWMVpTazdYRzRnSUNBZ2ZWeHVmVHRjYmx4dUx5OGdkamdnYkdsclpYTWdjSEpsWkdsamRHbGliR1VnYjJKcVpXTjBjMXh1Wm5WdVkzUnBiMjRnU1hSbGJTaG1kVzRzSUdGeWNtRjVLU0I3WEc0Z0lDQWdkR2hwY3k1bWRXNGdQU0JtZFc0N1hHNGdJQ0FnZEdocGN5NWhjbkpoZVNBOUlHRnljbUY1TzF4dWZWeHVTWFJsYlM1d2NtOTBiM1I1Y0dVdWNuVnVJRDBnWm5WdVkzUnBiMjRnS0NrZ2UxeHVJQ0FnSUhSb2FYTXVablZ1TG1Gd2NHeDVLRzUxYkd3c0lIUm9hWE11WVhKeVlYa3BPMXh1ZlR0Y2JuQnliMk5sYzNNdWRHbDBiR1VnUFNBblluSnZkM05sY2ljN1hHNXdjbTlqWlhOekxtSnliM2R6WlhJZ1BTQjBjblZsTzF4dWNISnZZMlZ6Y3k1bGJuWWdQU0I3ZlR0Y2JuQnliMk5sYzNNdVlYSm5kaUE5SUZ0ZE8xeHVjSEp2WTJWemN5NTJaWEp6YVc5dUlEMGdKeWM3SUM4dklHVnRjSFI1SUhOMGNtbHVaeUIwYnlCaGRtOXBaQ0J5WldkbGVIQWdhWE56ZFdWelhHNXdjbTlqWlhOekxuWmxjbk5wYjI1eklEMGdlMzA3WEc1Y2JtWjFibU4wYVc5dUlHNXZiM0FvS1NCN2ZWeHVYRzV3Y205alpYTnpMbTl1SUQwZ2JtOXZjRHRjYm5CeWIyTmxjM011WVdSa1RHbHpkR1Z1WlhJZ1BTQnViMjl3TzF4dWNISnZZMlZ6Y3k1dmJtTmxJRDBnYm05dmNEdGNibkJ5YjJObGMzTXViMlptSUQwZ2JtOXZjRHRjYm5CeWIyTmxjM011Y21WdGIzWmxUR2x6ZEdWdVpYSWdQU0J1YjI5d08xeHVjSEp2WTJWemN5NXlaVzF2ZG1WQmJHeE1hWE4wWlc1bGNuTWdQU0J1YjI5d08xeHVjSEp2WTJWemN5NWxiV2wwSUQwZ2JtOXZjRHRjYm5CeWIyTmxjM011Y0hKbGNHVnVaRXhwYzNSbGJtVnlJRDBnYm05dmNEdGNibkJ5YjJObGMzTXVjSEpsY0dWdVpFOXVZMlZNYVhOMFpXNWxjaUE5SUc1dmIzQTdYRzVjYm5CeWIyTmxjM011YkdsemRHVnVaWEp6SUQwZ1puVnVZM1JwYjI0Z0tHNWhiV1VwSUhzZ2NtVjBkWEp1SUZ0ZElIMWNibHh1Y0hKdlkyVnpjeTVpYVc1a2FXNW5JRDBnWm5WdVkzUnBiMjRnS0c1aGJXVXBJSHRjYmlBZ0lDQjBhSEp2ZHlCdVpYY2dSWEp5YjNJb0ozQnliMk5sYzNNdVltbHVaR2x1WnlCcGN5QnViM1FnYzNWd2NHOXlkR1ZrSnlrN1hHNTlPMXh1WEc1d2NtOWpaWE56TG1OM1pDQTlJR1oxYm1OMGFXOXVJQ2dwSUhzZ2NtVjBkWEp1SUNjdkp5QjlPMXh1Y0hKdlkyVnpjeTVqYUdScGNpQTlJR1oxYm1OMGFXOXVJQ2hrYVhJcElIdGNiaUFnSUNCMGFISnZkeUJ1WlhjZ1JYSnliM0lvSjNCeWIyTmxjM011WTJoa2FYSWdhWE1nYm05MElITjFjSEJ2Y25SbFpDY3BPMXh1ZlR0Y2JuQnliMk5sYzNNdWRXMWhjMnNnUFNCbWRXNWpkR2x2YmlncElIc2djbVYwZFhKdUlEQTdJSDA3WEc0aUxDSXZLaUJsYzJ4cGJuUXRaR2x6WVdKc1pTQnViMlJsTDI1dkxXUmxjSEpsWTJGMFpXUXRZWEJwSUNvdlhHNTJZWElnWW5WbVptVnlJRDBnY21WeGRXbHlaU2duWW5WbVptVnlKeWxjYm5aaGNpQkNkV1ptWlhJZ1BTQmlkV1ptWlhJdVFuVm1abVZ5WEc1Y2JpOHZJR0ZzZEdWeWJtRjBhWFpsSUhSdklIVnphVzVuSUU5aWFtVmpkQzVyWlhseklHWnZjaUJ2YkdRZ1luSnZkM05sY25OY2JtWjFibU4wYVc5dUlHTnZjSGxRY205d2N5QW9jM0pqTENCa2MzUXBJSHRjYmlBZ1ptOXlJQ2gyWVhJZ2EyVjVJR2x1SUhOeVl5a2dlMXh1SUNBZ0lHUnpkRnRyWlhsZElEMGdjM0pqVzJ0bGVWMWNiaUFnZlZ4dWZWeHVhV1lnS0VKMVptWmxjaTVtY205dElDWW1JRUoxWm1abGNpNWhiR3h2WXlBbUppQkNkV1ptWlhJdVlXeHNiMk5WYm5OaFptVWdKaVlnUW5WbVptVnlMbUZzYkc5alZXNXpZV1psVTJ4dmR5a2dlMXh1SUNCdGIyUjFiR1V1Wlhod2IzSjBjeUE5SUdKMVptWmxjbHh1ZlNCbGJITmxJSHRjYmlBZ0x5OGdRMjl3ZVNCd2NtOXdaWEowYVdWeklHWnliMjBnY21WeGRXbHlaU2duWW5WbVptVnlKeWxjYmlBZ1kyOXdlVkJ5YjNCektHSjFabVpsY2l3Z1pYaHdiM0owY3lsY2JpQWdaWGh3YjNKMGN5NUNkV1ptWlhJZ1BTQlRZV1psUW5WbVptVnlYRzU5WEc1Y2JtWjFibU4wYVc5dUlGTmhabVZDZFdabVpYSWdLR0Z5Wnl3Z1pXNWpiMlJwYm1kUGNrOW1abk5sZEN3Z2JHVnVaM1JvS1NCN1hHNGdJSEpsZEhWeWJpQkNkV1ptWlhJb1lYSm5MQ0JsYm1OdlpHbHVaMDl5VDJabWMyVjBMQ0JzWlc1bmRHZ3BYRzU5WEc1Y2JpOHZJRU52Y0hrZ2MzUmhkR2xqSUcxbGRHaHZaSE1nWm5KdmJTQkNkV1ptWlhKY2JtTnZjSGxRY205d2N5aENkV1ptWlhJc0lGTmhabVZDZFdabVpYSXBYRzVjYmxOaFptVkNkV1ptWlhJdVpuSnZiU0E5SUdaMWJtTjBhVzl1SUNoaGNtY3NJR1Z1WTI5a2FXNW5UM0pQWm1aelpYUXNJR3hsYm1kMGFDa2dlMXh1SUNCcFppQW9kSGx3Wlc5bUlHRnlaeUE5UFQwZ0oyNTFiV0psY2ljcElIdGNiaUFnSUNCMGFISnZkeUJ1WlhjZ1ZIbHdaVVZ5Y205eUtDZEJjbWQxYldWdWRDQnRkWE4wSUc1dmRDQmlaU0JoSUc1MWJXSmxjaWNwWEc0Z0lIMWNiaUFnY21WMGRYSnVJRUoxWm1abGNpaGhjbWNzSUdWdVkyOWthVzVuVDNKUFptWnpaWFFzSUd4bGJtZDBhQ2xjYm4xY2JseHVVMkZtWlVKMVptWmxjaTVoYkd4dll5QTlJR1oxYm1OMGFXOXVJQ2h6YVhwbExDQm1hV3hzTENCbGJtTnZaR2x1WnlrZ2UxeHVJQ0JwWmlBb2RIbHdaVzltSUhOcGVtVWdJVDA5SUNkdWRXMWlaWEluS1NCN1hHNGdJQ0FnZEdoeWIzY2dibVYzSUZSNWNHVkZjbkp2Y2lnblFYSm5kVzFsYm5RZ2JYVnpkQ0JpWlNCaElHNTFiV0psY2ljcFhHNGdJSDFjYmlBZ2RtRnlJR0oxWmlBOUlFSjFabVpsY2loemFYcGxLVnh1SUNCcFppQW9abWxzYkNBaFBUMGdkVzVrWldacGJtVmtLU0I3WEc0Z0lDQWdhV1lnS0hSNWNHVnZaaUJsYm1OdlpHbHVaeUE5UFQwZ0ozTjBjbWx1WnljcElIdGNiaUFnSUNBZ0lHSjFaaTVtYVd4c0tHWnBiR3dzSUdWdVkyOWthVzVuS1Z4dUlDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQmlkV1l1Wm1sc2JDaG1hV3hzS1Z4dUlDQWdJSDFjYmlBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0JpZFdZdVptbHNiQ2d3S1Z4dUlDQjlYRzRnSUhKbGRIVnliaUJpZFdaY2JuMWNibHh1VTJGbVpVSjFabVpsY2k1aGJHeHZZMVZ1YzJGbVpTQTlJR1oxYm1OMGFXOXVJQ2h6YVhwbEtTQjdYRzRnSUdsbUlDaDBlWEJsYjJZZ2MybDZaU0FoUFQwZ0oyNTFiV0psY2ljcElIdGNiaUFnSUNCMGFISnZkeUJ1WlhjZ1ZIbHdaVVZ5Y205eUtDZEJjbWQxYldWdWRDQnRkWE4wSUdKbElHRWdiblZ0WW1WeUp5bGNiaUFnZlZ4dUlDQnlaWFIxY200Z1FuVm1abVZ5S0hOcGVtVXBYRzU5WEc1Y2JsTmhabVZDZFdabVpYSXVZV3hzYjJOVmJuTmhabVZUYkc5M0lEMGdablZ1WTNScGIyNGdLSE5wZW1VcElIdGNiaUFnYVdZZ0tIUjVjR1Z2WmlCemFYcGxJQ0U5UFNBbmJuVnRZbVZ5SnlrZ2UxeHVJQ0FnSUhSb2NtOTNJRzVsZHlCVWVYQmxSWEp5YjNJb0owRnlaM1Z0Wlc1MElHMTFjM1FnWW1VZ1lTQnVkVzFpWlhJbktWeHVJQ0I5WEc0Z0lISmxkSFZ5YmlCaWRXWm1aWEl1VTJ4dmQwSjFabVpsY2loemFYcGxLVnh1ZlZ4dUlpd2lkbUZ5SUdjN1hHNWNiaTh2SUZSb2FYTWdkMjl5YTNNZ2FXNGdibTl1TFhOMGNtbGpkQ0J0YjJSbFhHNW5JRDBnS0daMWJtTjBhVzl1S0NrZ2UxeHVYSFJ5WlhSMWNtNGdkR2hwY3p0Y2JuMHBLQ2s3WEc1Y2JuUnllU0I3WEc1Y2RDOHZJRlJvYVhNZ2QyOXlhM01nYVdZZ1pYWmhiQ0JwY3lCaGJHeHZkMlZrSUNoelpXVWdRMU5RS1Z4dVhIUm5JRDBnWnlCOGZDQnVaWGNnUm5WdVkzUnBiMjRvWENKeVpYUjFjbTRnZEdocGMxd2lLU2dwTzF4dWZTQmpZWFJqYUNBb1pTa2dlMXh1WEhRdkx5QlVhR2x6SUhkdmNtdHpJR2xtSUhSb1pTQjNhVzVrYjNjZ2NtVm1aWEpsYm1ObElHbHpJR0YyWVdsc1lXSnNaVnh1WEhScFppQW9kSGx3Wlc5bUlIZHBibVJ2ZHlBOVBUMGdYQ0p2WW1wbFkzUmNJaWtnWnlBOUlIZHBibVJ2ZHp0Y2JuMWNibHh1THk4Z1p5QmpZVzRnYzNScGJHd2dZbVVnZFc1a1pXWnBibVZrTENCaWRYUWdibTkwYUdsdVp5QjBieUJrYnlCaFltOTFkQ0JwZEM0dUxseHVMeThnVjJVZ2NtVjBkWEp1SUhWdVpHVm1hVzVsWkN3Z2FXNXpkR1ZoWkNCdlppQnViM1JvYVc1bklHaGxjbVVzSUhOdklHbDBKM05jYmk4dklHVmhjMmxsY2lCMGJ5Qm9ZVzVrYkdVZ2RHaHBjeUJqWVhObExpQnBaaWdoWjJ4dlltRnNLU0I3SUM0dUxuMWNibHh1Ylc5a2RXeGxMbVY0Y0c5eWRITWdQU0JuTzF4dUlpd2liVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQmxlSFJsYm1SY2JseHVkbUZ5SUdoaGMwOTNibEJ5YjNCbGNuUjVJRDBnVDJKcVpXTjBMbkJ5YjNSdmRIbHdaUzVvWVhOUGQyNVFjbTl3WlhKMGVUdGNibHh1Wm5WdVkzUnBiMjRnWlhoMFpXNWtLQ2tnZTF4dUlDQWdJSFpoY2lCMFlYSm5aWFFnUFNCN2ZWeHVYRzRnSUNBZ1ptOXlJQ2gyWVhJZ2FTQTlJREE3SUdrZ1BDQmhjbWQxYldWdWRITXViR1Z1WjNSb095QnBLeXNwSUh0Y2JpQWdJQ0FnSUNBZ2RtRnlJSE52ZFhKalpTQTlJR0Z5WjNWdFpXNTBjMXRwWFZ4dVhHNGdJQ0FnSUNBZ0lHWnZjaUFvZG1GeUlHdGxlU0JwYmlCemIzVnlZMlVwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR2xtSUNob1lYTlBkMjVRY205d1pYSjBlUzVqWVd4c0tITnZkWEpqWlN3Z2EyVjVLU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhSaGNtZGxkRnRyWlhsZElEMGdjMjkxY21ObFcydGxlVjFjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lIMWNibHh1SUNBZ0lISmxkSFZ5YmlCMFlYSm5aWFJjYm4xY2JpSXNJbVY0Y0c5eWRDQjdJR1JsWm1GMWJIUWdZWE1nYldWdFJHOTNia05oWTJobElIMGdabkp2YlNBbkxpOXRaVzFrYjNkdVEyRmphR1VuTzF4dVpYaHdiM0owSUhzZ1pHVm1ZWFZzZENCaGN5Qk5aVzFEWVdOb1pVMXBlR2x1Y3lCOUlHWnliMjBnSnk0dmJXVnRZMkZqYUdVdWJXbDRhVzV6Snp0Y2JpSXNJaThxS2x4dUlDb2dWR2hwY3lCdGFYaHBibk1nWTJ4aGMzTWdjSEp2ZG1sa1pYTWdZWFIwY21saWRYUmxjem9nS2lwTlpXMURZV05vWlNvcUxseHVJQ29nUUdOc1lYTnpJRTFsYlVOaFkyaGxUV2w0YVc1elhHNGdLaUJBWlhoMFpXNWtjeUI3UW1GelpVTnNZWE56ZlZ4dUlDb3ZYRzVqYjI1emRDQk5aVzFEWVdOb1pVMXBlR2x1Y3lBOUlDaENZWE5sUTJ4aGMzTXBQVDRnWTJ4aGMzTWdaWGgwWlc1a2N5QkNZWE5sUTJ4aGMzTjdYRzRnSUNBZ0x5b3FYRzRnSUNBZ0lDb2dWR2hwY3lCdFpYUm9iMlJ6SUhKbGRIVnliaUJ6ZFcxdFlYSjVJR0ZpYjNWMElHbDBaVzF6SUc5bUlIUm9aU0JqZFhKeVpXNTBJRzFsYldOaFkyaGxJRnh1SUNBZ0lDQXFJRUJ5WlhSMWNtNXpYRzRnSUNBZ0lDb3ZYRzRnSUNBZ1lYTjVibU1nYldWdFEyRmphR1ZUZFcxdFlYSjVLQ2w3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJoZDJGcGRDQjBhR2x6TG0xbGJVTmhZMmhsTG1kbGRFbDBaVzFNYVhOMEtDazdYRzRnSUNBZ2ZWeHVJQ0FnSUZ4dUlDQWdJSE5sZENCTlpXMURZV05vWlNodFpXMURZV05vWlNsN1hHNGdJQ0FnSUNBZ0lIUm9hWE11YldWdFEyRmphR1VnUFNCdFpXMURZV05vWlR0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0JuWlhRZ1RXVnRRMkZqYUdVb0tYdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlIUm9hWE11YldWdFEyRmphR1U3WEc0Z0lDQWdmVnh1ZlR0Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUUxbGJVTmhZMmhsVFdsNGFXNXpPeUlzSW1sdGNHOXlkQ0I3SUhCc1lYUm1iM0p0SUgwZ1puSnZiU0FuWTJGMWMyRnNMVzVsZEM1MWRHbHNjeWM3WEc1cGJYQnZjblFnZXlCVGRHOXlaU0JoY3lCQ1lYTmxUV1Z0UTJGamFHVWdmU0JtY205dElDZGpZWFZ6WVd3dGJtVjBMbU52Y21Vbk8xeHVhVzF3YjNKMElIc2daR1ZtWVhWc2RDQmhjeUJOWlcxdmNtbDZhVzVuVFdsNGFXNXpJSDBnWm5KdmJTQW5MaTl0WlcxdmNtbDZhVzVuTG0xcGVHbHVjeWM3WEc0dktpcGNiaUFxSUZSb2FYTWdZMnhoYzNNZ2NISnZkbWxrWlhNZ2MzUnZjbUZuWlNCcGJYQnNaVzFsYm5SaGRHbHZiaUJtYjNJZ2JXVnRiM0o1SUdOaFkyaHBibWNnYjI0Z2RHOXdJRzltWEc0Z0tpQmJiV1Z0Wkc5M2JsMG9hSFIwY0hNNkx5OTNkM2N1Ym5CdGFuTXVZMjl0TDNCaFkydGhaMlV2YldWdFpHOTNiaWtnZDJocFkyZ2dZMkZ1SUdKbElHRmpZMlZ6YzJWa0lIWnBZU0FxS20xbGJVUnZkMjVEWVdOb1pTb3FMbHh1SUNvZ2V5QnRhWGhYYVhSb09pQmJJRTFsYlc5eWFYcHBibWROYVhocGJuTWdYU0I5WEc0Z0tpQkFZMnhoYzNNZ1RXVnRaRzkzYmtOaFkyaGxYRzRnS2lCQVpYaDBaVzVrY3lCQ1lYTmxUV1Z0UTJGamFHVmNiaUFxTDF4dVkyeGhjM01nVFdWdFpHOTNia05oWTJobElHVjRkR1Z1WkhNZ2NHeGhkR1p2Y20wdWJXbDRWMmwwYUNnZ1FtRnpaVTFsYlVOaFkyaGxMRnh1SUNBZ0lGc2dUV1Z0YjNKcGVtbHVaMDFwZUdsdWN5QmRLWHRjYmlBZ0lDQmpiMjV6ZEhKMVkzUnZjaWdwZTF4dUlDQWdJQ0FnSUNCemRYQmxjaWdwTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbU52Ym01bFkzUW9LVHRjYmlBZ0lDQjlYRzRnSUNBZ0x5b3FYRzRnSUNBZ0lDb2dRMjl1Ym1WamRDQjBieUJrWVhSaFltRnpaU3dnZEdocGN5Qm1kVzVqZEdsdmJpQnphR0ZzYkNCaVpTQmpZV3hzSUhkb1pXNGdZMjl1YzNSeWRXTjBJR2x1YzNSaGJtTmxYRzRnSUNBZ0lDb2dRRzFsYldKbGNtOW1JRTFsYldSdmQyNURZV05vWlZ4dUlDQWdJQ0FxTDF4dUlDQWdJR052Ym01bFkzUW9LWHRjYmlBZ0lDQWdJQ0FnYkdWMElHMWxiV1J2ZDI0Z1BTQnlaWEYxYVhKbEtDZHRaVzFrYjNkdUp5azdYRzRnSUNBZ0lDQWdJSFJvYVhNdWMzUnZjbVVnUFNCMGFHbHpMbXhsZG1Wc2RYQW9iV1Z0Wkc5M2JpZ3BLVHNnSUNBZ0lDQWdJRnh1SUNBZ0lIMWNibjFjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnYm1WM0lFMWxiV1J2ZDI1RFlXTm9aU2dwT3lJc0lpOHFLbHh1SUNvZ1ZHaHBjeUJOWlcxdmNtbDZhVzVuVFdsNGFXNXpJR05zWVhOeklHbHpJR0VnYldsNGFXNXpJR05zWVhOeklHWnZjaUJwYlhCc1pXMWxiblFnYldWdGIzSjVJRzFsZEdodlpITmNiaUFxSUVCamJHRnpjeUJOWlcxdmNtbDZhVzVuVFdsNGFXNXpYRzRnS2lCQVpYaHdaWEpwYldWdWRGeHVJQ29nUUdWNGRHVnVaSE1nUW1GelpVMWxiVU5oWTJobFEyeGhjM05jYmlBcUwxeHVZMjl1YzNRZ1RXVnRiM0pwZW1sdVowMXBlR2x1Y3lBOUlDaENZWE5sVFdWdFEyRmphR1ZEYkdGemN5azlQaUJqYkdGemN5QmxlSFJsYm1SeklFSmhjMlZOWlcxRFlXTm9aVU5zWVhOemUxeHVJQ0FnSUM4cUtseHVJQ0FnSUNBcUlGSmxZV1FnWTI5dWRHVnVkQ0JtY205dElGeHVJQ0FnSUNBcUlFQmxlSEJsY21sdFpXNTBYRzRnSUNBZ0lDb2dRSEJoY21GdElIc2dVM1J5YVc1bmZFNTFiV0psY2lCOUlHMWxiVzl5ZVZOc2IzUkpibVJsZUNBdElHMWxiVzl5ZVNCemJHOTBJR2x1WkdWNFhHNGdJQ0FnSUNvZ1FISmxkSFZ5Ym5OY2JpQWdJQ0FnS2k5Y2JpQWdJQ0JoYzNsdVl5QnlaV0ZrS0cxbGJXOXllVk5zYjNSSmJtUmxlQ2w3WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJRWRsZEVaeWIyMU5aVzF2Y25rZ1BTQmhjM2x1WXlBb2JXVnRiM0o1VTJ4dmRFbHVaR1Y0S1QwK2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnZEhKNWUxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHeGxkQ0JrWVhSaElEMGdZWGRoYVhRZ2RHaHBjeTVuWlhSSmRHVnRLRzFsYlc5eWVWTnNiM1JKYm1SbGVDazdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlFOWlhbVZqZEM1MllXeDFaWE1vWkdGMFlTbGJNRjA3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJQ0FnSUNCallYUmphQ2hsY25JcGUxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCdWRXeHNPeUFnSUNCY2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZlR0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUdGM1lXbDBJRWRsZEVaeWIyMU5aVzF2Y25rb2JXVnRiM0o1VTJ4dmRFbHVaR1Y0S1R0Y2JpQWdJQ0I5WEc0Z0lDQWdMeW9xWEc0Z0lDQWdJQ29nWEc0Z0lDQWdJQ29nUUhCaGNtRnRJSHNnVTNSeWFXNW5mRTUxYldKbGNpQjlJRzFsYlc5eWVWTnNiM1JKYm1SbGVDQXRJSEJ2YzJsMGFYWmxJRzUxYldKbGNpQm1iM0lnYldWdGIzSjVJSE5zYjNSY2JpQWdJQ0FnS2lCQWNHRnlZVzBnZXlCQmNuSmhlU0I5SUcxbGJXOXllU0IyWVd4MVpWeHVJQ0FnSUNBcUlFQnlaWFIxY201eklIc2dVSEp2YldselpTQjlJRzFsYlc5eWVTQnpiRzkwSUdsdVpHVjRJSFpoYkhWbFhHNGdJQ0FnSUNvdlhHNGdJQ0FnWVhONWJtTWdkM0pwZEdVb2JXVnRiM0o1VTJ4dmRFbHVaR1Y0TENCMllXeDFaU2w3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJoZDJGcGRDQjBhR2x6TG5ObGRFbDBaVzBvYldWdGIzSjVVMnh2ZEVsdVpHVjRMQ0IyWVd4MVpTazdYRzRnSUNBZ2ZWeHVJQ0FnSUM4cUtseHVJQ0FnSUNBcVhHNGdJQ0FnSUNwY2JpQWdJQ0FnS2lCQWNHRnlZVzBnZXlwOUlITnNiM1JKWkhoelhHNGdJQ0FnSUNvZ1FISmxkSFZ5Ym5OY2JpQWdJQ0FnS2k5Y2JpQWdJQ0JoYzNsdVl5QnlaV05oYkd3b2MyeHZkRWxrZUhNcGUxeHVJQ0FnSUNBZ0lDQnNaWFFnYldWdGIzSjVJRDBnVzEwN1hHNGdJQ0FnSUNBZ0lHWnZjaWhzWlhRZ2MyeHZkRWxrZUNCdlppQnpiRzkwU1dSNGN5bDdYRzRnSUNBZ0lDQWdJQ0FnSUNCdFpXMXZjbmt1Y0hWemFDaGhkMkZwZENCMGFHbHpMbkpsWVdRb2MyeHZkRWxrZUNrcE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQnRaVzF2Y25rN1hHNGdJQ0FnZlZ4dWZUdGNibVY0Y0c5eWRDQmtaV1poZFd4MElFMWxiVzl5YVhwcGJtZE5hWGhwYm5NN0lpd2liVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQmZYMWRGUWxCQlEwdGZSVmhVUlZKT1FVeGZUVTlFVlV4RlgyTmhkWE5oYkY5dVpYUmZZMjl5WlY5Zk95SXNJbTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdYMTlYUlVKUVFVTkxYMFZZVkVWU1RrRk1YMDFQUkZWTVJWOWpZWFZ6WVd4ZmJtVjBYM1YwYVd4elgxODdJbDBzSW5OdmRYSmpaVkp2YjNRaU9pSWlmUT09IiwiaW1wb3J0IHsgVGVuc29yLCBjYXVzYWxOZXRDb3JlIH0gZnJvbSAnY2F1c2FsLW5ldC5jb3JlJztcbmltcG9ydCB7IG1lbURvd25DYWNoZSB9IGZyb20gJ2NhdXNhbC1uZXQubWVtY2FjaGUnO1xuLyoqXG4gKiBUaGlzIGNsYXNzIGlzIHVuZGVyIGV4cGVyaW1lbnRlZFxuICogQGV4cGVyaW1lbnRcbiAqIEBjbGFzcyBDYXVzYWxOZXRNZW1vcnlcbiAqIEBleHRlbmRzIHtUZW5zb3J9XG4gKi9cbmNsYXNzIENhdXNhbE5ldE1lbW9yeSBleHRlbmRzIFRlbnNvcntcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLk1lbW9yeSA9IG1lbURvd25DYWNoZTtcbiAgICAgICAgdGhpcy5SID0gY2F1c2FsTmV0Q29yZS5Db3JlRnVuY3Rpb247XG4gICAgfVxuICAgIHNldCBNZW1vcnkobWVtb3J5KXtcbiAgICAgICAgLy9UT0RPOiB0eXBlIGNoZWNraW5nIFxuICAgICAgICB0aGlzLm1lbW9yeSA9IG1lbW9yeTtcbiAgICB9XG4gICAgZ2V0IE1lbW9yeSgpe1xuICAgICAgICBpZighdGhpcy5tZW1vcnkpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoYG1lbW9yeSBpcyBub3Qgc2V0YCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMubWVtb3J5O1xuICAgIH1cbiAgICBnZXQgTWVtb3J5U2l6ZSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5tZW1vcnlTaXplO1xuICAgIH1cbiAgICBzZXQgTWVtb3J5U2l6ZShzaXplKXtcbiAgICAgICAgdGhpcy5tZW1vcnlTaXplID0gc2l6ZTtcbiAgICB9XG4gICAgZ2V0IE51bVNsb3RzKCl7XG4gICAgICAgIHJldHVybiB0aGlzLm1lbW9yeVNpemVbMF07XG4gICAgfVxuICAgIGdldCBTbG90U2l6ZSgpe1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHRoaXMubWVtb3J5U2l6ZVsxXTtcbiAgICB9XG4gICAgYXN5bmMgaW5pdE1lbW9yeShzaXplLCBpbml0VGVuc29yPW51bGwpe1xuICAgICAgICB0aGlzLk1lbW9yeVNpemUgPSBzaXplO1xuICAgICAgICBjb25zdCBSID0gdGhpcy5SO1xuICAgICAgICBpZighaW5pdFRlbnNvcil7XG4gICAgICAgICAgICBpbml0VGVuc29yID0gYXdhaXQgdGhpcy5ULnJhbmRvbU5vcm1hbChzaXplKTtcbiAgICAgICAgfSAgICAgICAgXG4gICAgICAgIGxldCBzbG90SWR4cyA9IFIucmFuZ2UoMCwgdGhpcy5OdW1TbG90cyk7XG4gICAgICAgIHJldHVybiB0aGlzLndyaXRlU2xvdHMoc2xvdElkeHMsIGluaXRUZW5zb3IpO1xuICAgIH1cblxuICAgIGFzeW5jIG5vcm1hbGl6ZSgpe1xuICAgICAgICBjb25zdCBNZW1vcnkgPSB0aGlzLk1lbW9yeSwgTnVtU2xvdHMgPSB0aGlzLk51bVNsb3RzLCBSID0gdGhpcy5SO1xuICAgICAgICBsZXQgbWVtVmFsdWVzID0gYXdhaXQgTWVtb3J5LnJlY2FsbChSLnJhbmdlKDAsIE51bVNsb3RzKSk7XG4gICAgICAgIGxldCBhbGxUcyA9IHRoaXMuVC50ZW5zb3IobWVtVmFsdWVzKTtcbiAgICAgICAgbGV0IG1lYW5UcyA9IGFsbFRzLm1lYW4oMSwgdHJ1ZSk7XG4gICAgICAgIGxldCBzdGRUcyA9IGFsbFRzLnN1YihtZWFuVHMpLnBvdygyKS5tZWFuKDEsIHRydWUpLnBvdygwLjUpO1xuICAgICAgICByZXR1cm4gYWxsVHMuc3ViKG1lYW5UcykuZGl2KHN0ZFRzKTsgICAgXG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0TWF0Y2hTY29yZShzbG90SWR4cyl7XG4gICAgICAgIGxldCBub3JtVHMgPSBhd2FpdCB0aGlzLm5vcm1hbGl6ZSgpO1xuICAgICAgICBsZXQgY1RzID0gbm9ybVRzLmdhdGhlcihzbG90SWR4cyk7XG4gICAgICAgIGxldCBzaW1pbGFyaXR5U2NvcmUgPSBub3JtVHMuZG90KGNUcy50cmFuc3Bvc2UoKSk7XG4gICAgICAgIHJldHVybiBzaW1pbGFyaXR5U2NvcmU7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0VG9wS1NpbWlsYXIoc2xvdElkeHMsIGspe1xuICAgICAgICBsZXQgbWF0Y2hTY29yZVRlbnNvciA9IGF3YWl0IHRoaXMuZ2V0TWF0Y2hTY29yZShzbG90SWR4cyk7XG4gICAgICAgIGNvbnN0IHt2YWx1ZXMsIGluZGljZXN9ID0gbWF0Y2hTY29yZVRlbnNvci50cmFuc3Bvc2UoKS50b3BrKGspO1xuICAgICAgICByZXR1cm4gaW5kaWNlcztcbiAgICB9XG4gICAgXG4gICAgYXN5bmMgd3JpdGVTbG90cyhzbG90SWR4cywgbWVtb3J5VGVuc29yKXsgICBcbiAgICAgICAgY29uc3QgUiA9IHRoaXMuUiwgU2xvdFNpemUgPSB0aGlzLlNsb3RTaXplLCBNZW1vcnkgPSB0aGlzLk1lbW9yeTtcbiAgICAgICAgbGV0IHRlbnNvckRhdGEgPSBhd2FpdCBtZW1vcnlUZW5zb3IuZGF0YSgpOyBcbiAgICAgICAgbGV0IHZhbHVlcyA9IFIuc3BsaXRFdmVyeShTbG90U2l6ZSwgdGVuc29yRGF0YSk7XG4gICAgICAgIGZvcihsZXQgaWR4IG9mIFIucmFuZ2UoMCwgc2xvdElkeHMubGVuZ3RoKSl7XG4gICAgICAgICAgICBhd2FpdCBNZW1vcnkud3JpdGUoc2xvdElkeHNbaWR4XSwgdmFsdWVzW2lkeF0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtZW1vcnlUZW5zb3I7XG4gICAgfVxuICAgIGFzeW5jIHJlYWRTbG90cyhzbG90SW5kZXhzKXtcbiAgICAgICAgY29uc3QgTWVtb3J5ID0gdGhpcy5NZW1vcnksIFQgPSB0aGlzLlQ7XG4gICAgICAgIGxldCB2YWx1ZXMgPSBbXTtcbiAgICAgICAgZm9yKGxldCBzbG90SWR4IG9mIHNsb3RJbmRleHMpe1xuICAgICAgICAgICAgbGV0IHZhbHVlID0gYXdhaXQgTWVtb3J5LnJlYWQoc2xvdElkeCk7XG4gICAgICAgICAgICB2YWx1ZXMucHVzaCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFQudmFyaWFibGUoVC50ZW5zb3IodmFsdWVzKSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgQ2F1c2FsTmV0TWVtb3J5KCk7IiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBjYXVzYWxOZXRNZW1vcnkgfSBmcm9tICcuL2NhdXNhbE5ldE1lbW9yeSc7IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfY29yZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3V0aWxzX187Il0sInNvdXJjZVJvb3QiOiIifQ==