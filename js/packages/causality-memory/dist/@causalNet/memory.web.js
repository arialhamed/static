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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L21lbW9yeS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9tZW1vcnkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9tZW1vcnkvLi4vY2F1c2FsaXR5LW1lbWNhY2hlL2Rpc3QvQGNhdXNhbE5ldC9tZW1jYWNoZS53ZWIuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9tZW1vcnkvLi9zcmMvY2F1c2FsTmV0TWVtb3J5LmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbWVtb3J5Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbWVtb3J5L2V4dGVybmFsIFwiY2F1c2FsLW5ldC5jb3JlXCIiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9tZW1vcnkvZXh0ZXJuYWwgXCJjYXVzYWwtbmV0LnV0aWxzXCIiXSwibmFtZXMiOlsiQ2F1c2FsTmV0TWVtb3J5IiwiVGVuc29yIiwiY29uc3RydWN0b3IiLCJNZW1vcnkiLCJtZW1Eb3duQ2FjaGUiLCJSIiwiY2F1c2FsTmV0Q29yZSIsIkNvcmVGdW5jdGlvbiIsIm1lbW9yeSIsIkVycm9yIiwiTWVtb3J5U2l6ZSIsIm1lbW9yeVNpemUiLCJzaXplIiwiTnVtU2xvdHMiLCJTbG90U2l6ZSIsImluaXRNZW1vcnkiLCJpbml0VGVuc29yIiwiVCIsInJhbmRvbU5vcm1hbCIsInNsb3RJZHhzIiwicmFuZ2UiLCJ3cml0ZVNsb3RzIiwibm9ybWFsaXplIiwibWVtVmFsdWVzIiwicmVjYWxsIiwiYWxsVHMiLCJ0ZW5zb3IiLCJtZWFuVHMiLCJtZWFuIiwic3RkVHMiLCJzdWIiLCJwb3ciLCJkaXYiLCJnZXRNYXRjaFNjb3JlIiwibm9ybVRzIiwiY1RzIiwiZ2F0aGVyIiwic2ltaWxhcml0eVNjb3JlIiwiZG90IiwidHJhbnNwb3NlIiwiZ2V0VG9wS1NpbWlsYXIiLCJrIiwibWF0Y2hTY29yZVRlbnNvciIsInZhbHVlcyIsImluZGljZXMiLCJ0b3BrIiwibWVtb3J5VGVuc29yIiwidGVuc29yRGF0YSIsImRhdGEiLCJzcGxpdEV2ZXJ5IiwiaWR4IiwibGVuZ3RoIiwid3JpdGUiLCJyZWFkU2xvdHMiLCJzbG90SW5kZXhzIiwic2xvdElkeCIsInZhbHVlIiwicmVhZCIsInB1c2giLCJ2YXJpYWJsZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBLElBQUksSUFBeUQ7QUFDN0QsMkJBQTJCLG1CQUFPLENBQUMsd0NBQWlCLEdBQUcsbUJBQU8sQ0FBQywwQ0FBa0I7QUFDakYsTUFBTSxFQUtxRjtBQUMzRixDQUFDO0FBQ0Qsb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELGdDQUFnQztBQUNsRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRUFBZ0Usa0JBQWtCO0FBQ2xGO0FBQ0EseURBQXlELGNBQWM7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsaUNBQWlDO0FBQ2xGLHdIQUF3SCxtQkFBbUIsRUFBRTtBQUM3STtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsMEJBQTBCLEVBQUU7QUFDL0QseUNBQXlDLGVBQWU7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhEQUE4RCwrREFBK0Q7QUFDN0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsK0NBQStDOztBQUUvQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsWUFBWTs7QUFFWjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSx5QkFBeUIsc0NBQXNDO0FBQy9EOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZOztBQUVaO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHlCQUF5Qix3QkFBd0I7QUFDakQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLHNDQUFzQztBQUN0QztBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsYUFBYTs7QUFFakQ7O0FBRUE7QUFDQSwwQ0FBMEM7O0FBRTFDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLDRCQUE0Qjs7QUFFNUIsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsK0NBQStDOztBQUUvQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEI7O0FBRTVCLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHVEQUF1RDs7QUFFdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxzQ0FBc0M7O0FBRXRDO0FBQ0E7QUFDQTs7QUFFQSxvQ0FBb0MsYUFBYTs7QUFFakQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0NBQXNDOztBQUV0QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxvQ0FBb0MsYUFBYTs7QUFFakQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGdDQUFnQyxrQ0FBa0M7QUFDbEU7O0FBRUE7QUFDQSxzQ0FBc0M7O0FBRXRDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsb0NBQW9DLGFBQWE7O0FBRWpEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0NBQXNDOztBQUV0QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxvQ0FBb0MsYUFBYTs7QUFFakQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEI7O0FBRTFCLHNDQUFzQzs7QUFFdEMsb0NBQW9DOztBQUVwQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGdEQUFnRCxhQUFhOztBQUU3RDs7QUFFQSxpQkFBaUIsa0JBQWtCO0FBQ25DO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSwyQkFBMkI7O0FBRTNCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0MsYUFBYTtBQUNqRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLDRCQUE0Qjs7QUFFNUIsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtDQUFrQyxTQUFTO0FBQzNDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsU0FBUztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLFNBQVM7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQ0FBMEMsVUFBVTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4Q0FBOEM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsbURBQW1EO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsVUFBVTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsWUFBWTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLHVDQUF1QyxTQUFTO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsaUJBQWlCO0FBQ2hDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxpQkFBaUI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFNBQVM7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixTQUFTO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixTQUFTO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELEVBQUU7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWlCLFNBQVM7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGVBQWU7QUFDdkM7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0Esd0JBQXdCLFFBQVE7QUFDaEM7QUFDQSxxQkFBcUIsZUFBZTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsWUFBWTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLFNBQVM7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixTQUFTO0FBQzlCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQixTQUFTO0FBQzlCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixrQkFBa0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLG1CQUFtQixjQUFjO0FBQ2pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQsT0FBTztBQUM5RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVELE9BQU87QUFDOUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCO0FBQ2xCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUJBQXFCLFFBQVE7QUFDN0I7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLGVBQWUsU0FBUztBQUN4QjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQixTQUFTO0FBQzVCO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGlCQUFpQjtBQUNoQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixZQUFZO0FBQzdCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsZ0JBQWdCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGdCQUFnQjtBQUNqQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsWUFBWTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSw0QkFBNEI7O0FBRTVCLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBOzs7QUFHQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLE1BQU07QUFDbkM7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsS0FBSztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsTUFBTTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLE1BQU07QUFDakM7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhCQUE4QixVQUFVO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0QsaUJBQWlCOztBQUVuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixpQkFBaUI7QUFDakM7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsbUJBQW1CO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLENBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLDZCQUE2QixNQUFNO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLEtBQUs7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsTUFBTTtBQUNqQztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixLQUFLO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsV0FBVzs7QUFFbkI7QUFDQTtBQUNBO0FBQ0EsUUFBUSxXQUFXOztBQUVuQjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsUUFBUSxXQUFXOztBQUVuQjtBQUNBO0FBQ0EsUUFBUSxVQUFVOztBQUVsQjtBQUNBOzs7QUFHQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixzQkFBc0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7O0FBRTVCLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qjs7QUFFNUIsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNEJBQTRCOztBQUU1QixPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qjs7QUFFNUIsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQixPQUFPO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBLDRCQUE0Qjs7QUFFNUIsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFDQUFxQzs7QUFFckM7QUFDQTtBQUNBOztBQUVBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsVUFBVTs7O0FBR3RDLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBNEM7O0FBRTVDOzs7QUFHQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLG1CQUFtQixzQkFBc0I7QUFDekM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHFHQUFxRyw4REFBOEQsRUFBRTs7QUFFcks7QUFDQSx1R0FBdUcsaUVBQWlFLEVBQUU7Ozs7O0FBSzFLLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsZ0JBQWdCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsZ0JBQWdCO0FBQzdCLGFBQWEsUUFBUTtBQUNyQixlQUFlLFVBQVU7QUFDekI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsRUFBRTtBQUNmO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsT0FBTzs7QUFFUCxVQUFVO0FBQ1YsQ0FBQztBQUNELDJDQUEyQyxjQUFjLG0rZ007Ozs7Ozs7Ozs7OztBQzV2SnpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFNQSxNQUFNQSxlQUFOLFNBQThCQyxzREFBOUIsQ0FBb0M7QUFDaENDLGFBQVcsR0FBRTtBQUNUO0FBQ0EsU0FBS0MsTUFBTCxHQUFjQyxnRUFBZDtBQUNBLFNBQUtDLENBQUwsR0FBU0MsNkRBQWEsQ0FBQ0MsWUFBdkI7QUFDSDs7QUFDRCxNQUFJSixNQUFKLENBQVdLLE1BQVgsRUFBa0I7QUFDZDtBQUNBLFNBQUtBLE1BQUwsR0FBY0EsTUFBZDtBQUNIOztBQUNELE1BQUlMLE1BQUosR0FBWTtBQUNSLFFBQUcsQ0FBQyxLQUFLSyxNQUFULEVBQWdCO0FBQ1osWUFBTUMsS0FBSyxDQUFFLG1CQUFGLENBQVg7QUFDSDs7QUFDRCxXQUFPLEtBQUtELE1BQVo7QUFDSDs7QUFDRCxNQUFJRSxVQUFKLEdBQWdCO0FBQ1osV0FBTyxLQUFLQyxVQUFaO0FBQ0g7O0FBQ0QsTUFBSUQsVUFBSixDQUFlRSxJQUFmLEVBQW9CO0FBQ2hCLFNBQUtELFVBQUwsR0FBa0JDLElBQWxCO0FBQ0g7O0FBQ0QsTUFBSUMsUUFBSixHQUFjO0FBQ1YsV0FBTyxLQUFLRixVQUFMLENBQWdCLENBQWhCLENBQVA7QUFDSDs7QUFDRCxNQUFJRyxRQUFKLEdBQWM7QUFFVixXQUFPLEtBQUtILFVBQUwsQ0FBZ0IsQ0FBaEIsQ0FBUDtBQUNIOztBQUNELFFBQU1JLFVBQU4sQ0FBaUJILElBQWpCLEVBQXVCSSxVQUFVLEdBQUMsSUFBbEMsRUFBdUM7QUFDbkMsU0FBS04sVUFBTCxHQUFrQkUsSUFBbEI7QUFDQSxVQUFNUCxDQUFDLEdBQUcsS0FBS0EsQ0FBZjs7QUFDQSxRQUFHLENBQUNXLFVBQUosRUFBZTtBQUNYQSxnQkFBVSxHQUFHLE1BQU0sS0FBS0MsQ0FBTCxDQUFPQyxZQUFQLENBQW9CTixJQUFwQixDQUFuQjtBQUNIOztBQUNELFFBQUlPLFFBQVEsR0FBR2QsQ0FBQyxDQUFDZSxLQUFGLENBQVEsQ0FBUixFQUFXLEtBQUtQLFFBQWhCLENBQWY7QUFDQSxXQUFPLEtBQUtRLFVBQUwsQ0FBZ0JGLFFBQWhCLEVBQTBCSCxVQUExQixDQUFQO0FBQ0g7O0FBRUQsUUFBTU0sU0FBTixHQUFpQjtBQUNiLFVBQU1uQixNQUFNLEdBQUcsS0FBS0EsTUFBcEI7QUFBQSxVQUE0QlUsUUFBUSxHQUFHLEtBQUtBLFFBQTVDO0FBQUEsVUFBc0RSLENBQUMsR0FBRyxLQUFLQSxDQUEvRDtBQUNBLFFBQUlrQixTQUFTLEdBQUcsTUFBTXBCLE1BQU0sQ0FBQ3FCLE1BQVAsQ0FBY25CLENBQUMsQ0FBQ2UsS0FBRixDQUFRLENBQVIsRUFBV1AsUUFBWCxDQUFkLENBQXRCO0FBQ0EsUUFBSVksS0FBSyxHQUFHLEtBQUtSLENBQUwsQ0FBT1MsTUFBUCxDQUFjSCxTQUFkLENBQVo7QUFDQSxRQUFJSSxNQUFNLEdBQUdGLEtBQUssQ0FBQ0csSUFBTixDQUFXLENBQVgsRUFBYyxJQUFkLENBQWI7QUFDQSxRQUFJQyxLQUFLLEdBQUdKLEtBQUssQ0FBQ0ssR0FBTixDQUFVSCxNQUFWLEVBQWtCSSxHQUFsQixDQUFzQixDQUF0QixFQUF5QkgsSUFBekIsQ0FBOEIsQ0FBOUIsRUFBaUMsSUFBakMsRUFBdUNHLEdBQXZDLENBQTJDLEdBQTNDLENBQVo7QUFDQSxXQUFPTixLQUFLLENBQUNLLEdBQU4sQ0FBVUgsTUFBVixFQUFrQkssR0FBbEIsQ0FBc0JILEtBQXRCLENBQVA7QUFDSDs7QUFFRCxRQUFNSSxhQUFOLENBQW9CZCxRQUFwQixFQUE2QjtBQUN6QixRQUFJZSxNQUFNLEdBQUcsTUFBTSxLQUFLWixTQUFMLEVBQW5CO0FBQ0EsUUFBSWEsR0FBRyxHQUFHRCxNQUFNLENBQUNFLE1BQVAsQ0FBY2pCLFFBQWQsQ0FBVjtBQUNBLFFBQUlrQixlQUFlLEdBQUdILE1BQU0sQ0FBQ0ksR0FBUCxDQUFXSCxHQUFHLENBQUNJLFNBQUosRUFBWCxDQUF0QjtBQUNBLFdBQU9GLGVBQVA7QUFDSDs7QUFFRCxRQUFNRyxjQUFOLENBQXFCckIsUUFBckIsRUFBK0JzQixDQUEvQixFQUFpQztBQUM3QixRQUFJQyxnQkFBZ0IsR0FBRyxNQUFNLEtBQUtULGFBQUwsQ0FBbUJkLFFBQW5CLENBQTdCO0FBQ0EsVUFBTTtBQUFDd0IsWUFBRDtBQUFTQztBQUFULFFBQW9CRixnQkFBZ0IsQ0FBQ0gsU0FBakIsR0FBNkJNLElBQTdCLENBQWtDSixDQUFsQyxDQUExQjtBQUNBLFdBQU9HLE9BQVA7QUFDSDs7QUFFRCxRQUFNdkIsVUFBTixDQUFpQkYsUUFBakIsRUFBMkIyQixZQUEzQixFQUF3QztBQUNwQyxVQUFNekMsQ0FBQyxHQUFHLEtBQUtBLENBQWY7QUFBQSxVQUFrQlMsUUFBUSxHQUFHLEtBQUtBLFFBQWxDO0FBQUEsVUFBNENYLE1BQU0sR0FBRyxLQUFLQSxNQUExRDtBQUNBLFFBQUk0QyxVQUFVLEdBQUcsTUFBTUQsWUFBWSxDQUFDRSxJQUFiLEVBQXZCO0FBQ0EsUUFBSUwsTUFBTSxHQUFHdEMsQ0FBQyxDQUFDNEMsVUFBRixDQUFhbkMsUUFBYixFQUF1QmlDLFVBQXZCLENBQWI7O0FBQ0EsU0FBSSxJQUFJRyxHQUFSLElBQWU3QyxDQUFDLENBQUNlLEtBQUYsQ0FBUSxDQUFSLEVBQVdELFFBQVEsQ0FBQ2dDLE1BQXBCLENBQWYsRUFBMkM7QUFDdkMsWUFBTWhELE1BQU0sQ0FBQ2lELEtBQVAsQ0FBYWpDLFFBQVEsQ0FBQytCLEdBQUQsQ0FBckIsRUFBNEJQLE1BQU0sQ0FBQ08sR0FBRCxDQUFsQyxDQUFOO0FBQ0g7O0FBQ0QsV0FBT0osWUFBUDtBQUNIOztBQUNELFFBQU1PLFNBQU4sQ0FBZ0JDLFVBQWhCLEVBQTJCO0FBQ3ZCLFVBQU1uRCxNQUFNLEdBQUcsS0FBS0EsTUFBcEI7QUFBQSxVQUE0QmMsQ0FBQyxHQUFHLEtBQUtBLENBQXJDO0FBQ0EsUUFBSTBCLE1BQU0sR0FBRyxFQUFiOztBQUNBLFNBQUksSUFBSVksT0FBUixJQUFtQkQsVUFBbkIsRUFBOEI7QUFDMUIsVUFBSUUsS0FBSyxHQUFHLE1BQU1yRCxNQUFNLENBQUNzRCxJQUFQLENBQVlGLE9BQVosQ0FBbEI7QUFDQVosWUFBTSxDQUFDZSxJQUFQLENBQVlGLEtBQVo7QUFDSDs7QUFDRCxXQUFPdkMsQ0FBQyxDQUFDMEMsUUFBRixDQUFXMUMsQ0FBQyxDQUFDUyxNQUFGLENBQVNpQixNQUFULENBQVgsQ0FBUDtBQUNIOztBQTlFK0I7O0FBaUZyQixtRUFBSTNDLGVBQUosRUFBZixFOzs7Ozs7Ozs7Ozs7QUN6RkE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7OztBQ0FBLDZEOzs7Ozs7Ozs7OztBQ0FBLDhEIiwiZmlsZSI6IkBjYXVzYWxOZXQvbWVtb3J5LndlYi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImNhdXNhbC1uZXQuY29yZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQudXRpbHNcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiY2F1c2FsLW5ldC5jb3JlXCIsIFwiY2F1c2FsLW5ldC51dGlsc1wiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJAY2F1c2FsTmV0L21lbW9yeVwiXSA9IGZhY3RvcnkocmVxdWlyZShcImNhdXNhbC1uZXQuY29yZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQudXRpbHNcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkBjYXVzYWxOZXQvbWVtb3J5XCJdID0gZmFjdG9yeShyb290W1wiY2F1c2FsLW5ldC5jb3JlXCJdLCByb290W1wiY2F1c2FsLW5ldC51dGlsc1wiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfY29yZV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfdXRpbHNfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiY2F1c2FsLW5ldC5jb3JlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC51dGlsc1wiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJjYXVzYWwtbmV0LmNvcmVcIiwgXCJjYXVzYWwtbmV0LnV0aWxzXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkBjYXVzYWxOZXQvbWVtY2FjaGVcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJjYXVzYWwtbmV0LmNvcmVcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnV0aWxzXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJAY2F1c2FsTmV0L21lbWNhY2hlXCJdID0gZmFjdG9yeShyb290W1wiY2F1c2FsLW5ldC5jb3JlXCJdLCByb290W1wiY2F1c2FsLW5ldC51dGlsc1wiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfY29yZV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfdXRpbHNfXykge1xucmV0dXJuIC8qKioqKiovIChmdW5jdGlvbihtb2R1bGVzKSB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbi8qKioqKiovIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuLyoqKioqKi8gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0aTogbW9kdWxlSWQsXG4vKioqKioqLyBcdFx0XHRsOiBmYWxzZSxcbi8qKioqKiovIFx0XHRcdGV4cG9ydHM6IHt9XG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbi8qKioqKiovIFx0XHRtb2R1bGUubCA9IHRydWU7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4vKioqKioqLyBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHR9XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4vKioqKioqLyBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4vKioqKioqLyBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuLyoqKioqKi8gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4vKioqKioqLyBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuLyoqKioqKi8gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4vKioqKioqLyBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4vKioqKioqLyBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbi8qKioqKiovIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuLyoqKioqKi8gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbi8qKioqKiovIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4vKioqKioqLyBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuLyoqKioqKi8gXHRcdHJldHVybiBucztcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuLyoqKioqKi8gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuLyoqKioqKi8gXHRcdHJldHVybiBnZXR0ZXI7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8qKioqKiovIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbi8qKioqKiovIH0pXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gKHtcblxuLyoqKi8gXCIuLi8uLi9ub2RlX21vZHVsZXMvYWJzdHJhY3QtbGV2ZWxkb3duL2Fic3RyYWN0LWNoYWluZWQtYmF0Y2guanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvYWJzdHJhY3QtbGV2ZWxkb3duL2Fic3RyYWN0LWNoYWluZWQtYmF0Y2guanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuLyogV0VCUEFDSyBWQVIgSU5KRUNUSU9OICovKGZ1bmN0aW9uKHByb2Nlc3MpIHsvKiBDb3B5cmlnaHQgKGMpIDIwMTcgUm9kIFZhZ2csIE1JVCBMaWNlbnNlICovXG5cbmZ1bmN0aW9uIEFic3RyYWN0Q2hhaW5lZEJhdGNoIChkYikge1xuICB0aGlzLl9kYiA9IGRiXG4gIHRoaXMuX29wZXJhdGlvbnMgPSBbXVxuICB0aGlzLl93cml0dGVuID0gZmFsc2Vcbn1cblxuQWJzdHJhY3RDaGFpbmVkQmF0Y2gucHJvdG90eXBlLl9zZXJpYWxpemVLZXkgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiB0aGlzLl9kYi5fc2VyaWFsaXplS2V5KGtleSlcbn1cblxuQWJzdHJhY3RDaGFpbmVkQmF0Y2gucHJvdG90eXBlLl9zZXJpYWxpemVWYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICByZXR1cm4gdGhpcy5fZGIuX3NlcmlhbGl6ZVZhbHVlKHZhbHVlKVxufVxuXG5BYnN0cmFjdENoYWluZWRCYXRjaC5wcm90b3R5cGUuX2NoZWNrV3JpdHRlbiA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMuX3dyaXR0ZW4pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3dyaXRlKCkgYWxyZWFkeSBjYWxsZWQgb24gdGhpcyBiYXRjaCcpXG4gIH1cbn1cblxuQWJzdHJhY3RDaGFpbmVkQmF0Y2gucHJvdG90eXBlLnB1dCA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gIHRoaXMuX2NoZWNrV3JpdHRlbigpXG5cbiAgdmFyIGVyciA9IHRoaXMuX2RiLl9jaGVja0tleShrZXksICdrZXknKVxuICBpZiAoZXJyKSB7IHRocm93IGVyciB9XG5cbiAga2V5ID0gdGhpcy5fc2VyaWFsaXplS2V5KGtleSlcbiAgdmFsdWUgPSB0aGlzLl9zZXJpYWxpemVWYWx1ZSh2YWx1ZSlcblxuICB0aGlzLl9wdXQoa2V5LCB2YWx1ZSlcblxuICByZXR1cm4gdGhpc1xufVxuXG5BYnN0cmFjdENoYWluZWRCYXRjaC5wcm90b3R5cGUuX3B1dCA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gIHRoaXMuX29wZXJhdGlvbnMucHVzaCh7IHR5cGU6ICdwdXQnLCBrZXk6IGtleSwgdmFsdWU6IHZhbHVlIH0pXG59XG5cbkFic3RyYWN0Q2hhaW5lZEJhdGNoLnByb3RvdHlwZS5kZWwgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHRoaXMuX2NoZWNrV3JpdHRlbigpXG5cbiAgdmFyIGVyciA9IHRoaXMuX2RiLl9jaGVja0tleShrZXksICdrZXknKVxuICBpZiAoZXJyKSB7IHRocm93IGVyciB9XG5cbiAga2V5ID0gdGhpcy5fc2VyaWFsaXplS2V5KGtleSlcbiAgdGhpcy5fZGVsKGtleSlcblxuICByZXR1cm4gdGhpc1xufVxuXG5BYnN0cmFjdENoYWluZWRCYXRjaC5wcm90b3R5cGUuX2RlbCA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgdGhpcy5fb3BlcmF0aW9ucy5wdXNoKHsgdHlwZTogJ2RlbCcsIGtleToga2V5IH0pXG59XG5cbkFic3RyYWN0Q2hhaW5lZEJhdGNoLnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5fY2hlY2tXcml0dGVuKClcbiAgdGhpcy5fb3BlcmF0aW9ucyA9IFtdXG4gIHRoaXMuX2NsZWFyKClcblxuICByZXR1cm4gdGhpc1xufVxuXG5BYnN0cmFjdENoYWluZWRCYXRjaC5wcm90b3R5cGUuX2NsZWFyID0gZnVuY3Rpb24gbm9vcCAoKSB7fVxuXG5BYnN0cmFjdENoYWluZWRCYXRjaC5wcm90b3R5cGUud3JpdGUgPSBmdW5jdGlvbiAob3B0aW9ucywgY2FsbGJhY2spIHtcbiAgdGhpcy5fY2hlY2tXcml0dGVuKClcblxuICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdmdW5jdGlvbicpIHsgY2FsbGJhY2sgPSBvcHRpb25zIH1cbiAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBFcnJvcignd3JpdGUoKSByZXF1aXJlcyBhIGNhbGxiYWNrIGFyZ3VtZW50JylcbiAgfVxuICBpZiAodHlwZW9mIG9wdGlvbnMgIT09ICdvYmplY3QnKSB7IG9wdGlvbnMgPSB7fSB9XG5cbiAgdGhpcy5fd3JpdHRlbiA9IHRydWVcblxuICAvLyBAdHMtaWdub3JlXG4gIGlmICh0eXBlb2YgdGhpcy5fd3JpdGUgPT09ICdmdW5jdGlvbicpIHsgcmV0dXJuIHRoaXMuX3dyaXRlKGNhbGxiYWNrKSB9XG5cbiAgaWYgKHR5cGVvZiB0aGlzLl9kYi5fYmF0Y2ggPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdGhpcy5fZGIuX2JhdGNoKHRoaXMuX29wZXJhdGlvbnMsIG9wdGlvbnMsIGNhbGxiYWNrKVxuICB9XG5cbiAgcHJvY2Vzcy5uZXh0VGljayhjYWxsYmFjaylcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBBYnN0cmFjdENoYWluZWRCYXRjaFxuXG4vKiBXRUJQQUNLIFZBUiBJTkpFQ1RJT04gKi99LmNhbGwodGhpcywgX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi8uLi9wcm9jZXNzL2Jyb3dzZXIuanMgKi8gXCIuLi8uLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzXCIpKSlcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Fic3RyYWN0LWxldmVsZG93bi9hYnN0cmFjdC1pdGVyYXRvci5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvYWJzdHJhY3QtbGV2ZWxkb3duL2Fic3RyYWN0LWl0ZXJhdG9yLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG4vKiBXRUJQQUNLIFZBUiBJTkpFQ1RJT04gKi8oZnVuY3Rpb24ocHJvY2Vzcykgey8qIENvcHlyaWdodCAoYykgMjAxNyBSb2QgVmFnZywgTUlUIExpY2Vuc2UgKi9cblxuZnVuY3Rpb24gQWJzdHJhY3RJdGVyYXRvciAoZGIpIHtcbiAgdGhpcy5kYiA9IGRiXG4gIHRoaXMuX2VuZGVkID0gZmFsc2VcbiAgdGhpcy5fbmV4dGluZyA9IGZhbHNlXG59XG5cbkFic3RyYWN0SXRlcmF0b3IucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG5cbiAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBFcnJvcignbmV4dCgpIHJlcXVpcmVzIGEgY2FsbGJhY2sgYXJndW1lbnQnKVxuICB9XG5cbiAgaWYgKHNlbGYuX2VuZGVkKSB7XG4gICAgcHJvY2Vzcy5uZXh0VGljayhjYWxsYmFjaywgbmV3IEVycm9yKCdjYW5ub3QgY2FsbCBuZXh0KCkgYWZ0ZXIgZW5kKCknKSlcbiAgICByZXR1cm4gc2VsZlxuICB9XG5cbiAgaWYgKHNlbGYuX25leHRpbmcpIHtcbiAgICBwcm9jZXNzLm5leHRUaWNrKGNhbGxiYWNrLCBuZXcgRXJyb3IoJ2Nhbm5vdCBjYWxsIG5leHQoKSBiZWZvcmUgcHJldmlvdXMgbmV4dCgpIGhhcyBjb21wbGV0ZWQnKSlcbiAgICByZXR1cm4gc2VsZlxuICB9XG5cbiAgc2VsZi5fbmV4dGluZyA9IHRydWVcbiAgc2VsZi5fbmV4dChmdW5jdGlvbiAoKSB7XG4gICAgc2VsZi5fbmV4dGluZyA9IGZhbHNlXG4gICAgY2FsbGJhY2suYXBwbHkobnVsbCwgYXJndW1lbnRzKVxuICB9KVxuXG4gIHJldHVybiBzZWxmXG59XG5cbkFic3RyYWN0SXRlcmF0b3IucHJvdG90eXBlLl9uZXh0ID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gIHByb2Nlc3MubmV4dFRpY2soY2FsbGJhY2spXG59XG5cbkFic3RyYWN0SXRlcmF0b3IucHJvdG90eXBlLmVuZCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICBpZiAodHlwZW9mIGNhbGxiYWNrICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdlbmQoKSByZXF1aXJlcyBhIGNhbGxiYWNrIGFyZ3VtZW50JylcbiAgfVxuXG4gIGlmICh0aGlzLl9lbmRlZCkge1xuICAgIHJldHVybiBwcm9jZXNzLm5leHRUaWNrKGNhbGxiYWNrLCBuZXcgRXJyb3IoJ2VuZCgpIGFscmVhZHkgY2FsbGVkIG9uIGl0ZXJhdG9yJykpXG4gIH1cblxuICB0aGlzLl9lbmRlZCA9IHRydWVcbiAgdGhpcy5fZW5kKGNhbGxiYWNrKVxufVxuXG5BYnN0cmFjdEl0ZXJhdG9yLnByb3RvdHlwZS5fZW5kID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gIHByb2Nlc3MubmV4dFRpY2soY2FsbGJhY2spXG59XG5cbm1vZHVsZS5leHBvcnRzID0gQWJzdHJhY3RJdGVyYXRvclxuXG4vKiBXRUJQQUNLIFZBUiBJTkpFQ1RJT04gKi99LmNhbGwodGhpcywgX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi8uLi9wcm9jZXNzL2Jyb3dzZXIuanMgKi8gXCIuLi8uLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzXCIpKSlcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Fic3RyYWN0LWxldmVsZG93bi9hYnN0cmFjdC1sZXZlbGRvd24uanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAvaG9tZS9odXluaG5ndXllbi9naXRodWIvY2F1c2FsaXR5L25vZGVfbW9kdWxlcy9hYnN0cmFjdC1sZXZlbGRvd24vYWJzdHJhY3QtbGV2ZWxkb3duLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuLyogV0VCUEFDSyBWQVIgSU5KRUNUSU9OICovKGZ1bmN0aW9uKHByb2Nlc3MsIEJ1ZmZlcikgey8qIENvcHlyaWdodCAoYykgMjAxNyBSb2QgVmFnZywgTUlUIExpY2Vuc2UgKi9cblxudmFyIHh0ZW5kID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgeHRlbmQgKi8gXCIuLi8uLi9ub2RlX21vZHVsZXMveHRlbmQvaW1tdXRhYmxlLmpzXCIpXG52YXIgQWJzdHJhY3RJdGVyYXRvciA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vYWJzdHJhY3QtaXRlcmF0b3IgKi8gXCIuLi8uLi9ub2RlX21vZHVsZXMvYWJzdHJhY3QtbGV2ZWxkb3duL2Fic3RyYWN0LWl0ZXJhdG9yLmpzXCIpXG52YXIgQWJzdHJhY3RDaGFpbmVkQmF0Y2ggPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL2Fic3RyYWN0LWNoYWluZWQtYmF0Y2ggKi8gXCIuLi8uLi9ub2RlX21vZHVsZXMvYWJzdHJhY3QtbGV2ZWxkb3duL2Fic3RyYWN0LWNoYWluZWQtYmF0Y2guanNcIilcbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHlcbnZhciByYW5nZU9wdGlvbnMgPSAnc3RhcnQgZW5kIGd0IGd0ZSBsdCBsdGUnLnNwbGl0KCcgJylcblxuZnVuY3Rpb24gQWJzdHJhY3RMZXZlbERPV04gKGxvY2F0aW9uKSB7XG4gIGlmICghYXJndW1lbnRzLmxlbmd0aCB8fCBsb2NhdGlvbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjb25zdHJ1Y3RvciByZXF1aXJlcyBhdCBsZWFzdCBhIGxvY2F0aW9uIGFyZ3VtZW50JylcbiAgfVxuXG4gIGlmICh0eXBlb2YgbG9jYXRpb24gIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjb25zdHJ1Y3RvciByZXF1aXJlcyBhIGxvY2F0aW9uIHN0cmluZyBhcmd1bWVudCcpXG4gIH1cblxuICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb25cbiAgdGhpcy5zdGF0dXMgPSAnbmV3J1xufVxuXG5BYnN0cmFjdExldmVsRE9XTi5wcm90b3R5cGUub3BlbiA9IGZ1bmN0aW9uIChvcHRpb25zLCBjYWxsYmFjaykge1xuICB2YXIgc2VsZiA9IHRoaXNcbiAgdmFyIG9sZFN0YXR1cyA9IHRoaXMuc3RhdHVzXG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnZnVuY3Rpb24nKSB7IGNhbGxiYWNrID0gb3B0aW9ucyB9XG5cbiAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBFcnJvcignb3BlbigpIHJlcXVpcmVzIGEgY2FsbGJhY2sgYXJndW1lbnQnKVxuICB9XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zICE9PSAnb2JqZWN0JykgeyBvcHRpb25zID0ge30gfVxuXG4gIG9wdGlvbnMuY3JlYXRlSWZNaXNzaW5nID0gb3B0aW9ucy5jcmVhdGVJZk1pc3NpbmcgIT09IGZhbHNlXG4gIG9wdGlvbnMuZXJyb3JJZkV4aXN0cyA9ICEhb3B0aW9ucy5lcnJvcklmRXhpc3RzXG5cbiAgdGhpcy5zdGF0dXMgPSAnb3BlbmluZydcbiAgdGhpcy5fb3BlbihvcHRpb25zLCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgaWYgKGVycikge1xuICAgICAgc2VsZi5zdGF0dXMgPSBvbGRTdGF0dXNcbiAgICAgIHJldHVybiBjYWxsYmFjayhlcnIpXG4gICAgfVxuICAgIHNlbGYuc3RhdHVzID0gJ29wZW4nXG4gICAgY2FsbGJhY2soKVxuICB9KVxufVxuXG5BYnN0cmFjdExldmVsRE9XTi5wcm90b3R5cGUuX29wZW4gPSBmdW5jdGlvbiAob3B0aW9ucywgY2FsbGJhY2spIHtcbiAgcHJvY2Vzcy5uZXh0VGljayhjYWxsYmFjaylcbn1cblxuQWJzdHJhY3RMZXZlbERPV04ucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gIHZhciBzZWxmID0gdGhpc1xuICB2YXIgb2xkU3RhdHVzID0gdGhpcy5zdGF0dXNcblxuICBpZiAodHlwZW9mIGNhbGxiYWNrICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbG9zZSgpIHJlcXVpcmVzIGEgY2FsbGJhY2sgYXJndW1lbnQnKVxuICB9XG5cbiAgdGhpcy5zdGF0dXMgPSAnY2xvc2luZydcbiAgdGhpcy5fY2xvc2UoZnVuY3Rpb24gKGVycikge1xuICAgIGlmIChlcnIpIHtcbiAgICAgIHNlbGYuc3RhdHVzID0gb2xkU3RhdHVzXG4gICAgICByZXR1cm4gY2FsbGJhY2soZXJyKVxuICAgIH1cbiAgICBzZWxmLnN0YXR1cyA9ICdjbG9zZWQnXG4gICAgY2FsbGJhY2soKVxuICB9KVxufVxuXG5BYnN0cmFjdExldmVsRE9XTi5wcm90b3R5cGUuX2Nsb3NlID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gIHByb2Nlc3MubmV4dFRpY2soY2FsbGJhY2spXG59XG5cbkFic3RyYWN0TGV2ZWxET1dOLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAoa2V5LCBvcHRpb25zLCBjYWxsYmFjaykge1xuICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdmdW5jdGlvbicpIHsgY2FsbGJhY2sgPSBvcHRpb25zIH1cblxuICBpZiAodHlwZW9mIGNhbGxiYWNrICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdnZXQoKSByZXF1aXJlcyBhIGNhbGxiYWNrIGFyZ3VtZW50JylcbiAgfVxuXG4gIHZhciBlcnIgPSB0aGlzLl9jaGVja0tleShrZXksICdrZXknKVxuICBpZiAoZXJyKSByZXR1cm4gcHJvY2Vzcy5uZXh0VGljayhjYWxsYmFjaywgZXJyKVxuXG4gIGtleSA9IHRoaXMuX3NlcmlhbGl6ZUtleShrZXkpXG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zICE9PSAnb2JqZWN0JykgeyBvcHRpb25zID0ge30gfVxuXG4gIG9wdGlvbnMuYXNCdWZmZXIgPSBvcHRpb25zLmFzQnVmZmVyICE9PSBmYWxzZVxuXG4gIHRoaXMuX2dldChrZXksIG9wdGlvbnMsIGNhbGxiYWNrKVxufVxuXG5BYnN0cmFjdExldmVsRE9XTi5wcm90b3R5cGUuX2dldCA9IGZ1bmN0aW9uIChrZXksIG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gIHByb2Nlc3MubmV4dFRpY2soZnVuY3Rpb24gKCkgeyBjYWxsYmFjayhuZXcgRXJyb3IoJ05vdEZvdW5kJykpIH0pXG59XG5cbkFic3RyYWN0TGV2ZWxET1dOLnByb3RvdHlwZS5wdXQgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSwgb3B0aW9ucywgY2FsbGJhY2spIHtcbiAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnZnVuY3Rpb24nKSB7IGNhbGxiYWNrID0gb3B0aW9ucyB9XG5cbiAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBFcnJvcigncHV0KCkgcmVxdWlyZXMgYSBjYWxsYmFjayBhcmd1bWVudCcpXG4gIH1cblxuICB2YXIgZXJyID0gdGhpcy5fY2hlY2tLZXkoa2V5LCAna2V5JylcbiAgaWYgKGVycikgcmV0dXJuIHByb2Nlc3MubmV4dFRpY2soY2FsbGJhY2ssIGVycilcblxuICBrZXkgPSB0aGlzLl9zZXJpYWxpemVLZXkoa2V5KVxuICB2YWx1ZSA9IHRoaXMuX3NlcmlhbGl6ZVZhbHVlKHZhbHVlKVxuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucyAhPT0gJ29iamVjdCcpIHsgb3B0aW9ucyA9IHt9IH1cblxuICB0aGlzLl9wdXQoa2V5LCB2YWx1ZSwgb3B0aW9ucywgY2FsbGJhY2spXG59XG5cbkFic3RyYWN0TGV2ZWxET1dOLnByb3RvdHlwZS5fcHV0ID0gZnVuY3Rpb24gKGtleSwgdmFsdWUsIG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gIHByb2Nlc3MubmV4dFRpY2soY2FsbGJhY2spXG59XG5cbkFic3RyYWN0TGV2ZWxET1dOLnByb3RvdHlwZS5kZWwgPSBmdW5jdGlvbiAoa2V5LCBvcHRpb25zLCBjYWxsYmFjaykge1xuICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdmdW5jdGlvbicpIHsgY2FsbGJhY2sgPSBvcHRpb25zIH1cblxuICBpZiAodHlwZW9mIGNhbGxiYWNrICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdkZWwoKSByZXF1aXJlcyBhIGNhbGxiYWNrIGFyZ3VtZW50JylcbiAgfVxuXG4gIHZhciBlcnIgPSB0aGlzLl9jaGVja0tleShrZXksICdrZXknKVxuICBpZiAoZXJyKSByZXR1cm4gcHJvY2Vzcy5uZXh0VGljayhjYWxsYmFjaywgZXJyKVxuXG4gIGtleSA9IHRoaXMuX3NlcmlhbGl6ZUtleShrZXkpXG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zICE9PSAnb2JqZWN0JykgeyBvcHRpb25zID0ge30gfVxuXG4gIHRoaXMuX2RlbChrZXksIG9wdGlvbnMsIGNhbGxiYWNrKVxufVxuXG5BYnN0cmFjdExldmVsRE9XTi5wcm90b3R5cGUuX2RlbCA9IGZ1bmN0aW9uIChrZXksIG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gIHByb2Nlc3MubmV4dFRpY2soY2FsbGJhY2spXG59XG5cbkFic3RyYWN0TGV2ZWxET1dOLnByb3RvdHlwZS5iYXRjaCA9IGZ1bmN0aW9uIChhcnJheSwgb3B0aW9ucywgY2FsbGJhY2spIHtcbiAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7IHJldHVybiB0aGlzLl9jaGFpbmVkQmF0Y2goKSB9XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnZnVuY3Rpb24nKSB7IGNhbGxiYWNrID0gb3B0aW9ucyB9XG5cbiAgaWYgKHR5cGVvZiBhcnJheSA9PT0gJ2Z1bmN0aW9uJykgeyBjYWxsYmFjayA9IGFycmF5IH1cblxuICBpZiAodHlwZW9mIGNhbGxiYWNrICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdiYXRjaChhcnJheSkgcmVxdWlyZXMgYSBjYWxsYmFjayBhcmd1bWVudCcpXG4gIH1cblxuICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyYXkpKSB7XG4gICAgcmV0dXJuIHByb2Nlc3MubmV4dFRpY2soY2FsbGJhY2ssIG5ldyBFcnJvcignYmF0Y2goYXJyYXkpIHJlcXVpcmVzIGFuIGFycmF5IGFyZ3VtZW50JykpXG4gIH1cblxuICBpZiAoIW9wdGlvbnMgfHwgdHlwZW9mIG9wdGlvbnMgIT09ICdvYmplY3QnKSB7IG9wdGlvbnMgPSB7fSB9XG5cbiAgdmFyIHNlcmlhbGl6ZWQgPSBuZXcgQXJyYXkoYXJyYXkubGVuZ3RoKVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAodHlwZW9mIGFycmF5W2ldICE9PSAnb2JqZWN0JyB8fCBhcnJheVtpXSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHByb2Nlc3MubmV4dFRpY2soY2FsbGJhY2ssIG5ldyBFcnJvcignYmF0Y2goYXJyYXkpIGVsZW1lbnQgbXVzdCBiZSBhbiBvYmplY3QgYW5kIG5vdCBgbnVsbGAnKSlcbiAgICB9XG5cbiAgICB2YXIgZSA9IHh0ZW5kKGFycmF5W2ldKVxuXG4gICAgaWYgKGUudHlwZSAhPT0gJ3B1dCcgJiYgZS50eXBlICE9PSAnZGVsJykge1xuICAgICAgcmV0dXJuIHByb2Nlc3MubmV4dFRpY2soY2FsbGJhY2ssIG5ldyBFcnJvcihcImB0eXBlYCBtdXN0IGJlICdwdXQnIG9yICdkZWwnXCIpKVxuICAgIH1cblxuICAgIHZhciBlcnIgPSB0aGlzLl9jaGVja0tleShlLmtleSwgJ2tleScpXG4gICAgaWYgKGVycikgcmV0dXJuIHByb2Nlc3MubmV4dFRpY2soY2FsbGJhY2ssIGVycilcblxuICAgIGUua2V5ID0gdGhpcy5fc2VyaWFsaXplS2V5KGUua2V5KVxuXG4gICAgaWYgKGUudHlwZSA9PT0gJ3B1dCcpIHsgZS52YWx1ZSA9IHRoaXMuX3NlcmlhbGl6ZVZhbHVlKGUudmFsdWUpIH1cblxuICAgIHNlcmlhbGl6ZWRbaV0gPSBlXG4gIH1cblxuICB0aGlzLl9iYXRjaChzZXJpYWxpemVkLCBvcHRpb25zLCBjYWxsYmFjaylcbn1cblxuQWJzdHJhY3RMZXZlbERPV04ucHJvdG90eXBlLl9iYXRjaCA9IGZ1bmN0aW9uIChhcnJheSwgb3B0aW9ucywgY2FsbGJhY2spIHtcbiAgcHJvY2Vzcy5uZXh0VGljayhjYWxsYmFjaylcbn1cblxuQWJzdHJhY3RMZXZlbERPV04ucHJvdG90eXBlLl9zZXR1cEl0ZXJhdG9yT3B0aW9ucyA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBjbGVhblJhbmdlT3B0aW9ucyhvcHRpb25zKVxuXG4gIG9wdGlvbnMucmV2ZXJzZSA9ICEhb3B0aW9ucy5yZXZlcnNlXG4gIG9wdGlvbnMua2V5cyA9IG9wdGlvbnMua2V5cyAhPT0gZmFsc2VcbiAgb3B0aW9ucy52YWx1ZXMgPSBvcHRpb25zLnZhbHVlcyAhPT0gZmFsc2VcbiAgb3B0aW9ucy5saW1pdCA9ICdsaW1pdCcgaW4gb3B0aW9ucyA/IG9wdGlvbnMubGltaXQgOiAtMVxuICBvcHRpb25zLmtleUFzQnVmZmVyID0gb3B0aW9ucy5rZXlBc0J1ZmZlciAhPT0gZmFsc2VcbiAgb3B0aW9ucy52YWx1ZUFzQnVmZmVyID0gb3B0aW9ucy52YWx1ZUFzQnVmZmVyICE9PSBmYWxzZVxuXG4gIHJldHVybiBvcHRpb25zXG59XG5cbmZ1bmN0aW9uIGNsZWFuUmFuZ2VPcHRpb25zIChvcHRpb25zKSB7XG4gIHZhciByZXN1bHQgPSB7fVxuXG4gIGZvciAodmFyIGsgaW4gb3B0aW9ucykge1xuICAgIGlmICghaGFzT3duUHJvcGVydHkuY2FsbChvcHRpb25zLCBrKSkgY29udGludWVcbiAgICBpZiAoaXNSYW5nZU9wdGlvbihrKSAmJiBpc0VtcHR5UmFuZ2VPcHRpb24ob3B0aW9uc1trXSkpIGNvbnRpbnVlXG5cbiAgICByZXN1bHRba10gPSBvcHRpb25zW2tdXG4gIH1cblxuICByZXR1cm4gcmVzdWx0XG59XG5cbmZ1bmN0aW9uIGlzUmFuZ2VPcHRpb24gKGspIHtcbiAgcmV0dXJuIHJhbmdlT3B0aW9ucy5pbmRleE9mKGspICE9PSAtMVxufVxuXG5mdW5jdGlvbiBpc0VtcHR5UmFuZ2VPcHRpb24gKHYpIHtcbiAgcmV0dXJuIHYgPT09ICcnIHx8IHYgPT0gbnVsbCB8fCBpc0VtcHR5QnVmZmVyKHYpXG59XG5cbmZ1bmN0aW9uIGlzRW1wdHlCdWZmZXIgKHYpIHtcbiAgcmV0dXJuIEJ1ZmZlci5pc0J1ZmZlcih2KSAmJiB2Lmxlbmd0aCA9PT0gMFxufVxuXG5BYnN0cmFjdExldmVsRE9XTi5wcm90b3R5cGUuaXRlcmF0b3IgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICBpZiAodHlwZW9mIG9wdGlvbnMgIT09ICdvYmplY3QnKSB7IG9wdGlvbnMgPSB7fSB9XG4gIG9wdGlvbnMgPSB0aGlzLl9zZXR1cEl0ZXJhdG9yT3B0aW9ucyhvcHRpb25zKVxuICByZXR1cm4gdGhpcy5faXRlcmF0b3Iob3B0aW9ucylcbn1cblxuQWJzdHJhY3RMZXZlbERPV04ucHJvdG90eXBlLl9pdGVyYXRvciA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gIHJldHVybiBuZXcgQWJzdHJhY3RJdGVyYXRvcih0aGlzKVxufVxuXG5BYnN0cmFjdExldmVsRE9XTi5wcm90b3R5cGUuX2NoYWluZWRCYXRjaCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIG5ldyBBYnN0cmFjdENoYWluZWRCYXRjaCh0aGlzKVxufVxuXG5BYnN0cmFjdExldmVsRE9XTi5wcm90b3R5cGUuX3NlcmlhbGl6ZUtleSA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuIEJ1ZmZlci5pc0J1ZmZlcihrZXkpID8ga2V5IDogU3RyaW5nKGtleSlcbn1cblxuQWJzdHJhY3RMZXZlbERPV04ucHJvdG90eXBlLl9zZXJpYWxpemVWYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICBpZiAodmFsdWUgPT0gbnVsbCkgcmV0dXJuICcnXG4gIHJldHVybiBCdWZmZXIuaXNCdWZmZXIodmFsdWUpIHx8IHByb2Nlc3MuYnJvd3NlciA/IHZhbHVlIDogU3RyaW5nKHZhbHVlKVxufVxuXG5BYnN0cmFjdExldmVsRE9XTi5wcm90b3R5cGUuX2NoZWNrS2V5ID0gZnVuY3Rpb24gKG9iaiwgdHlwZSkge1xuICBpZiAob2JqID09PSBudWxsIHx8IG9iaiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIG5ldyBFcnJvcih0eXBlICsgJyBjYW5ub3QgYmUgYG51bGxgIG9yIGB1bmRlZmluZWRgJylcbiAgfVxuXG4gIGlmIChCdWZmZXIuaXNCdWZmZXIob2JqKSAmJiBvYmoubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIG5ldyBFcnJvcih0eXBlICsgJyBjYW5ub3QgYmUgYW4gZW1wdHkgQnVmZmVyJylcbiAgfVxuXG4gIGlmIChTdHJpbmcob2JqKSA9PT0gJycpIHtcbiAgICByZXR1cm4gbmV3IEVycm9yKHR5cGUgKyAnIGNhbm5vdCBiZSBhbiBlbXB0eSBTdHJpbmcnKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQWJzdHJhY3RMZXZlbERPV05cblxuLyogV0VCUEFDSyBWQVIgSU5KRUNUSU9OICovfS5jYWxsKHRoaXMsIF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vLi4vcHJvY2Vzcy9icm93c2VyLmpzICovIFwiLi4vLi4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qc1wiKSwgX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi8uLi9idWZmZXIvaW5kZXguanMgKi8gXCIuLi8uLi9ub2RlX21vZHVsZXMvYnVmZmVyL2luZGV4LmpzXCIpLkJ1ZmZlcikpXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4uLy4uL25vZGVfbW9kdWxlcy9hYnN0cmFjdC1sZXZlbGRvd24vaW5kZXguanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC9ob21lL2h1eW5obmd1eWVuL2dpdGh1Yi9jYXVzYWxpdHkvbm9kZV9tb2R1bGVzL2Fic3RyYWN0LWxldmVsZG93bi9pbmRleC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuZXhwb3J0cy5BYnN0cmFjdExldmVsRE9XTiA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vYWJzdHJhY3QtbGV2ZWxkb3duICovIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Fic3RyYWN0LWxldmVsZG93bi9hYnN0cmFjdC1sZXZlbGRvd24uanNcIilcbmV4cG9ydHMuQWJzdHJhY3RJdGVyYXRvciA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vYWJzdHJhY3QtaXRlcmF0b3IgKi8gXCIuLi8uLi9ub2RlX21vZHVsZXMvYWJzdHJhY3QtbGV2ZWxkb3duL2Fic3RyYWN0LWl0ZXJhdG9yLmpzXCIpXG5leHBvcnRzLkFic3RyYWN0Q2hhaW5lZEJhdGNoID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9hYnN0cmFjdC1jaGFpbmVkLWJhdGNoICovIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Fic3RyYWN0LWxldmVsZG93bi9hYnN0cmFjdC1jaGFpbmVkLWJhdGNoLmpzXCIpXG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Jhc2U2NC1qcy9pbmRleC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvYmFzZTY0LWpzL2luZGV4LmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5leHBvcnRzLmJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoXG5leHBvcnRzLnRvQnl0ZUFycmF5ID0gdG9CeXRlQXJyYXlcbmV4cG9ydHMuZnJvbUJ5dGVBcnJheSA9IGZyb21CeXRlQXJyYXlcblxudmFyIGxvb2t1cCA9IFtdXG52YXIgcmV2TG9va3VwID0gW11cbnZhciBBcnIgPSB0eXBlb2YgVWludDhBcnJheSAhPT0gJ3VuZGVmaW5lZCcgPyBVaW50OEFycmF5IDogQXJyYXlcblxudmFyIGNvZGUgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLydcbmZvciAodmFyIGkgPSAwLCBsZW4gPSBjb2RlLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gIGxvb2t1cFtpXSA9IGNvZGVbaV1cbiAgcmV2TG9va3VwW2NvZGUuY2hhckNvZGVBdChpKV0gPSBpXG59XG5cbi8vIFN1cHBvcnQgZGVjb2RpbmcgVVJMLXNhZmUgYmFzZTY0IHN0cmluZ3MsIGFzIE5vZGUuanMgZG9lcy5cbi8vIFNlZTogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQmFzZTY0I1VSTF9hcHBsaWNhdGlvbnNcbnJldkxvb2t1cFsnLScuY2hhckNvZGVBdCgwKV0gPSA2MlxucmV2TG9va3VwWydfJy5jaGFyQ29kZUF0KDApXSA9IDYzXG5cbmZ1bmN0aW9uIGdldExlbnMgKGI2NCkge1xuICB2YXIgbGVuID0gYjY0Lmxlbmd0aFxuXG4gIGlmIChsZW4gJSA0ID4gMCkge1xuICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBzdHJpbmcuIExlbmd0aCBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgNCcpXG4gIH1cblxuICAvLyBUcmltIG9mZiBleHRyYSBieXRlcyBhZnRlciBwbGFjZWhvbGRlciBieXRlcyBhcmUgZm91bmRcbiAgLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vYmVhdGdhbW1pdC9iYXNlNjQtanMvaXNzdWVzLzQyXG4gIHZhciB2YWxpZExlbiA9IGI2NC5pbmRleE9mKCc9JylcbiAgaWYgKHZhbGlkTGVuID09PSAtMSkgdmFsaWRMZW4gPSBsZW5cblxuICB2YXIgcGxhY2VIb2xkZXJzTGVuID0gdmFsaWRMZW4gPT09IGxlblxuICAgID8gMFxuICAgIDogNCAtICh2YWxpZExlbiAlIDQpXG5cbiAgcmV0dXJuIFt2YWxpZExlbiwgcGxhY2VIb2xkZXJzTGVuXVxufVxuXG4vLyBiYXNlNjQgaXMgNC8zICsgdXAgdG8gdHdvIGNoYXJhY3RlcnMgb2YgdGhlIG9yaWdpbmFsIGRhdGFcbmZ1bmN0aW9uIGJ5dGVMZW5ndGggKGI2NCkge1xuICB2YXIgbGVucyA9IGdldExlbnMoYjY0KVxuICB2YXIgdmFsaWRMZW4gPSBsZW5zWzBdXG4gIHZhciBwbGFjZUhvbGRlcnNMZW4gPSBsZW5zWzFdXG4gIHJldHVybiAoKHZhbGlkTGVuICsgcGxhY2VIb2xkZXJzTGVuKSAqIDMgLyA0KSAtIHBsYWNlSG9sZGVyc0xlblxufVxuXG5mdW5jdGlvbiBfYnl0ZUxlbmd0aCAoYjY0LCB2YWxpZExlbiwgcGxhY2VIb2xkZXJzTGVuKSB7XG4gIHJldHVybiAoKHZhbGlkTGVuICsgcGxhY2VIb2xkZXJzTGVuKSAqIDMgLyA0KSAtIHBsYWNlSG9sZGVyc0xlblxufVxuXG5mdW5jdGlvbiB0b0J5dGVBcnJheSAoYjY0KSB7XG4gIHZhciB0bXBcbiAgdmFyIGxlbnMgPSBnZXRMZW5zKGI2NClcbiAgdmFyIHZhbGlkTGVuID0gbGVuc1swXVxuICB2YXIgcGxhY2VIb2xkZXJzTGVuID0gbGVuc1sxXVxuXG4gIHZhciBhcnIgPSBuZXcgQXJyKF9ieXRlTGVuZ3RoKGI2NCwgdmFsaWRMZW4sIHBsYWNlSG9sZGVyc0xlbikpXG5cbiAgdmFyIGN1ckJ5dGUgPSAwXG5cbiAgLy8gaWYgdGhlcmUgYXJlIHBsYWNlaG9sZGVycywgb25seSBnZXQgdXAgdG8gdGhlIGxhc3QgY29tcGxldGUgNCBjaGFyc1xuICB2YXIgbGVuID0gcGxhY2VIb2xkZXJzTGVuID4gMFxuICAgID8gdmFsaWRMZW4gLSA0XG4gICAgOiB2YWxpZExlblxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpICs9IDQpIHtcbiAgICB0bXAgPVxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpKV0gPDwgMTgpIHxcbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDEpXSA8PCAxMikgfFxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMildIDw8IDYpIHxcbiAgICAgIHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMyldXG4gICAgYXJyW2N1ckJ5dGUrK10gPSAodG1wID4+IDE2KSAmIDB4RkZcbiAgICBhcnJbY3VyQnl0ZSsrXSA9ICh0bXAgPj4gOCkgJiAweEZGXG4gICAgYXJyW2N1ckJ5dGUrK10gPSB0bXAgJiAweEZGXG4gIH1cblxuICBpZiAocGxhY2VIb2xkZXJzTGVuID09PSAyKSB7XG4gICAgdG1wID1cbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSldIDw8IDIpIHxcbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDEpXSA+PiA0KVxuICAgIGFycltjdXJCeXRlKytdID0gdG1wICYgMHhGRlxuICB9XG5cbiAgaWYgKHBsYWNlSG9sZGVyc0xlbiA9PT0gMSkge1xuICAgIHRtcCA9XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkpXSA8PCAxMCkgfFxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMSldIDw8IDQpIHxcbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDIpXSA+PiAyKVxuICAgIGFycltjdXJCeXRlKytdID0gKHRtcCA+PiA4KSAmIDB4RkZcbiAgICBhcnJbY3VyQnl0ZSsrXSA9IHRtcCAmIDB4RkZcbiAgfVxuXG4gIHJldHVybiBhcnJcbn1cblxuZnVuY3Rpb24gdHJpcGxldFRvQmFzZTY0IChudW0pIHtcbiAgcmV0dXJuIGxvb2t1cFtudW0gPj4gMTggJiAweDNGXSArXG4gICAgbG9va3VwW251bSA+PiAxMiAmIDB4M0ZdICtcbiAgICBsb29rdXBbbnVtID4+IDYgJiAweDNGXSArXG4gICAgbG9va3VwW251bSAmIDB4M0ZdXG59XG5cbmZ1bmN0aW9uIGVuY29kZUNodW5rICh1aW50OCwgc3RhcnQsIGVuZCkge1xuICB2YXIgdG1wXG4gIHZhciBvdXRwdXQgPSBbXVxuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkgKz0gMykge1xuICAgIHRtcCA9XG4gICAgICAoKHVpbnQ4W2ldIDw8IDE2KSAmIDB4RkYwMDAwKSArXG4gICAgICAoKHVpbnQ4W2kgKyAxXSA8PCA4KSAmIDB4RkYwMCkgK1xuICAgICAgKHVpbnQ4W2kgKyAyXSAmIDB4RkYpXG4gICAgb3V0cHV0LnB1c2godHJpcGxldFRvQmFzZTY0KHRtcCkpXG4gIH1cbiAgcmV0dXJuIG91dHB1dC5qb2luKCcnKVxufVxuXG5mdW5jdGlvbiBmcm9tQnl0ZUFycmF5ICh1aW50OCkge1xuICB2YXIgdG1wXG4gIHZhciBsZW4gPSB1aW50OC5sZW5ndGhcbiAgdmFyIGV4dHJhQnl0ZXMgPSBsZW4gJSAzIC8vIGlmIHdlIGhhdmUgMSBieXRlIGxlZnQsIHBhZCAyIGJ5dGVzXG4gIHZhciBwYXJ0cyA9IFtdXG4gIHZhciBtYXhDaHVua0xlbmd0aCA9IDE2MzgzIC8vIG11c3QgYmUgbXVsdGlwbGUgb2YgM1xuXG4gIC8vIGdvIHRocm91Z2ggdGhlIGFycmF5IGV2ZXJ5IHRocmVlIGJ5dGVzLCB3ZSdsbCBkZWFsIHdpdGggdHJhaWxpbmcgc3R1ZmYgbGF0ZXJcbiAgZm9yICh2YXIgaSA9IDAsIGxlbjIgPSBsZW4gLSBleHRyYUJ5dGVzOyBpIDwgbGVuMjsgaSArPSBtYXhDaHVua0xlbmd0aCkge1xuICAgIHBhcnRzLnB1c2goZW5jb2RlQ2h1bmsoXG4gICAgICB1aW50OCwgaSwgKGkgKyBtYXhDaHVua0xlbmd0aCkgPiBsZW4yID8gbGVuMiA6IChpICsgbWF4Q2h1bmtMZW5ndGgpXG4gICAgKSlcbiAgfVxuXG4gIC8vIHBhZCB0aGUgZW5kIHdpdGggemVyb3MsIGJ1dCBtYWtlIHN1cmUgdG8gbm90IGZvcmdldCB0aGUgZXh0cmEgYnl0ZXNcbiAgaWYgKGV4dHJhQnl0ZXMgPT09IDEpIHtcbiAgICB0bXAgPSB1aW50OFtsZW4gLSAxXVxuICAgIHBhcnRzLnB1c2goXG4gICAgICBsb29rdXBbdG1wID4+IDJdICtcbiAgICAgIGxvb2t1cFsodG1wIDw8IDQpICYgMHgzRl0gK1xuICAgICAgJz09J1xuICAgIClcbiAgfSBlbHNlIGlmIChleHRyYUJ5dGVzID09PSAyKSB7XG4gICAgdG1wID0gKHVpbnQ4W2xlbiAtIDJdIDw8IDgpICsgdWludDhbbGVuIC0gMV1cbiAgICBwYXJ0cy5wdXNoKFxuICAgICAgbG9va3VwW3RtcCA+PiAxMF0gK1xuICAgICAgbG9va3VwWyh0bXAgPj4gNCkgJiAweDNGXSArXG4gICAgICBsb29rdXBbKHRtcCA8PCAyKSAmIDB4M0ZdICtcbiAgICAgICc9J1xuICAgIClcbiAgfVxuXG4gIHJldHVybiBwYXJ0cy5qb2luKCcnKVxufVxuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4uLy4uL25vZGVfbW9kdWxlcy9idWZmZXIvaW5kZXguanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC9ob21lL2h1eW5obmd1eWVuL2dpdGh1Yi9jYXVzYWxpdHkvbm9kZV9tb2R1bGVzL2J1ZmZlci9pbmRleC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG4vKiBXRUJQQUNLIFZBUiBJTkpFQ1RJT04gKi8oZnVuY3Rpb24oZ2xvYmFsKSB7LyohXG4gKiBUaGUgYnVmZmVyIG1vZHVsZSBmcm9tIG5vZGUuanMsIGZvciB0aGUgYnJvd3Nlci5cbiAqXG4gKiBAYXV0aG9yICAgRmVyb3NzIEFib3VraGFkaWplaCA8ZmVyb3NzQGZlcm9zcy5vcmc+IDxodHRwOi8vZmVyb3NzLm9yZz5cbiAqIEBsaWNlbnNlICBNSVRcbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcHJvdG8gKi9cblxuXG5cbnZhciBiYXNlNjQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBiYXNlNjQtanMgKi8gXCIuLi8uLi9ub2RlX21vZHVsZXMvYmFzZTY0LWpzL2luZGV4LmpzXCIpXG52YXIgaWVlZTc1NCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIGllZWU3NTQgKi8gXCIuLi8uLi9ub2RlX21vZHVsZXMvaWVlZTc1NC9pbmRleC5qc1wiKVxudmFyIGlzQXJyYXkgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBpc2FycmF5ICovIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2J1ZmZlci9ub2RlX21vZHVsZXMvaXNhcnJheS9pbmRleC5qc1wiKVxuXG5leHBvcnRzLkJ1ZmZlciA9IEJ1ZmZlclxuZXhwb3J0cy5TbG93QnVmZmVyID0gU2xvd0J1ZmZlclxuZXhwb3J0cy5JTlNQRUNUX01BWF9CWVRFUyA9IDUwXG5cbi8qKlxuICogSWYgYEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUYDpcbiAqICAgPT09IHRydWUgICAgVXNlIFVpbnQ4QXJyYXkgaW1wbGVtZW50YXRpb24gKGZhc3Rlc3QpXG4gKiAgID09PSBmYWxzZSAgIFVzZSBPYmplY3QgaW1wbGVtZW50YXRpb24gKG1vc3QgY29tcGF0aWJsZSwgZXZlbiBJRTYpXG4gKlxuICogQnJvd3NlcnMgdGhhdCBzdXBwb3J0IHR5cGVkIGFycmF5cyBhcmUgSUUgMTArLCBGaXJlZm94IDQrLCBDaHJvbWUgNyssIFNhZmFyaSA1LjErLFxuICogT3BlcmEgMTEuNissIGlPUyA0LjIrLlxuICpcbiAqIER1ZSB0byB2YXJpb3VzIGJyb3dzZXIgYnVncywgc29tZXRpbWVzIHRoZSBPYmplY3QgaW1wbGVtZW50YXRpb24gd2lsbCBiZSB1c2VkIGV2ZW5cbiAqIHdoZW4gdGhlIGJyb3dzZXIgc3VwcG9ydHMgdHlwZWQgYXJyYXlzLlxuICpcbiAqIE5vdGU6XG4gKlxuICogICAtIEZpcmVmb3ggNC0yOSBsYWNrcyBzdXBwb3J0IGZvciBhZGRpbmcgbmV3IHByb3BlcnRpZXMgdG8gYFVpbnQ4QXJyYXlgIGluc3RhbmNlcyxcbiAqICAgICBTZWU6IGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTY5NTQzOC5cbiAqXG4gKiAgIC0gQ2hyb21lIDktMTAgaXMgbWlzc2luZyB0aGUgYFR5cGVkQXJyYXkucHJvdG90eXBlLnN1YmFycmF5YCBmdW5jdGlvbi5cbiAqXG4gKiAgIC0gSUUxMCBoYXMgYSBicm9rZW4gYFR5cGVkQXJyYXkucHJvdG90eXBlLnN1YmFycmF5YCBmdW5jdGlvbiB3aGljaCByZXR1cm5zIGFycmF5cyBvZlxuICogICAgIGluY29ycmVjdCBsZW5ndGggaW4gc29tZSBzaXR1YXRpb25zLlxuXG4gKiBXZSBkZXRlY3QgdGhlc2UgYnVnZ3kgYnJvd3NlcnMgYW5kIHNldCBgQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlRgIHRvIGBmYWxzZWAgc28gdGhleVxuICogZ2V0IHRoZSBPYmplY3QgaW1wbGVtZW50YXRpb24sIHdoaWNoIGlzIHNsb3dlciBidXQgYmVoYXZlcyBjb3JyZWN0bHkuXG4gKi9cbkJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUID0gZ2xvYmFsLlRZUEVEX0FSUkFZX1NVUFBPUlQgIT09IHVuZGVmaW5lZFxuICA/IGdsb2JhbC5UWVBFRF9BUlJBWV9TVVBQT1JUXG4gIDogdHlwZWRBcnJheVN1cHBvcnQoKVxuXG4vKlxuICogRXhwb3J0IGtNYXhMZW5ndGggYWZ0ZXIgdHlwZWQgYXJyYXkgc3VwcG9ydCBpcyBkZXRlcm1pbmVkLlxuICovXG5leHBvcnRzLmtNYXhMZW5ndGggPSBrTWF4TGVuZ3RoKClcblxuZnVuY3Rpb24gdHlwZWRBcnJheVN1cHBvcnQgKCkge1xuICB0cnkge1xuICAgIHZhciBhcnIgPSBuZXcgVWludDhBcnJheSgxKVxuICAgIGFyci5fX3Byb3RvX18gPSB7X19wcm90b19fOiBVaW50OEFycmF5LnByb3RvdHlwZSwgZm9vOiBmdW5jdGlvbiAoKSB7IHJldHVybiA0MiB9fVxuICAgIHJldHVybiBhcnIuZm9vKCkgPT09IDQyICYmIC8vIHR5cGVkIGFycmF5IGluc3RhbmNlcyBjYW4gYmUgYXVnbWVudGVkXG4gICAgICAgIHR5cGVvZiBhcnIuc3ViYXJyYXkgPT09ICdmdW5jdGlvbicgJiYgLy8gY2hyb21lIDktMTAgbGFjayBgc3ViYXJyYXlgXG4gICAgICAgIGFyci5zdWJhcnJheSgxLCAxKS5ieXRlTGVuZ3RoID09PSAwIC8vIGllMTAgaGFzIGJyb2tlbiBgc3ViYXJyYXlgXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG5mdW5jdGlvbiBrTWF4TGVuZ3RoICgpIHtcbiAgcmV0dXJuIEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUXG4gICAgPyAweDdmZmZmZmZmXG4gICAgOiAweDNmZmZmZmZmXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUJ1ZmZlciAodGhhdCwgbGVuZ3RoKSB7XG4gIGlmIChrTWF4TGVuZ3RoKCkgPCBsZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW52YWxpZCB0eXBlZCBhcnJheSBsZW5ndGgnKVxuICB9XG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIC8vIFJldHVybiBhbiBhdWdtZW50ZWQgYFVpbnQ4QXJyYXlgIGluc3RhbmNlLCBmb3IgYmVzdCBwZXJmb3JtYW5jZVxuICAgIHRoYXQgPSBuZXcgVWludDhBcnJheShsZW5ndGgpXG4gICAgdGhhdC5fX3Byb3RvX18gPSBCdWZmZXIucHJvdG90eXBlXG4gIH0gZWxzZSB7XG4gICAgLy8gRmFsbGJhY2s6IFJldHVybiBhbiBvYmplY3QgaW5zdGFuY2Ugb2YgdGhlIEJ1ZmZlciBjbGFzc1xuICAgIGlmICh0aGF0ID09PSBudWxsKSB7XG4gICAgICB0aGF0ID0gbmV3IEJ1ZmZlcihsZW5ndGgpXG4gICAgfVxuICAgIHRoYXQubGVuZ3RoID0gbGVuZ3RoXG4gIH1cblxuICByZXR1cm4gdGhhdFxufVxuXG4vKipcbiAqIFRoZSBCdWZmZXIgY29uc3RydWN0b3IgcmV0dXJucyBpbnN0YW5jZXMgb2YgYFVpbnQ4QXJyYXlgIHRoYXQgaGF2ZSB0aGVpclxuICogcHJvdG90eXBlIGNoYW5nZWQgdG8gYEJ1ZmZlci5wcm90b3R5cGVgLiBGdXJ0aGVybW9yZSwgYEJ1ZmZlcmAgaXMgYSBzdWJjbGFzcyBvZlxuICogYFVpbnQ4QXJyYXlgLCBzbyB0aGUgcmV0dXJuZWQgaW5zdGFuY2VzIHdpbGwgaGF2ZSBhbGwgdGhlIG5vZGUgYEJ1ZmZlcmAgbWV0aG9kc1xuICogYW5kIHRoZSBgVWludDhBcnJheWAgbWV0aG9kcy4gU3F1YXJlIGJyYWNrZXQgbm90YXRpb24gd29ya3MgYXMgZXhwZWN0ZWQgLS0gaXRcbiAqIHJldHVybnMgYSBzaW5nbGUgb2N0ZXQuXG4gKlxuICogVGhlIGBVaW50OEFycmF5YCBwcm90b3R5cGUgcmVtYWlucyB1bm1vZGlmaWVkLlxuICovXG5cbmZ1bmN0aW9uIEJ1ZmZlciAoYXJnLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpIHtcbiAgaWYgKCFCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCAmJiAhKHRoaXMgaW5zdGFuY2VvZiBCdWZmZXIpKSB7XG4gICAgcmV0dXJuIG5ldyBCdWZmZXIoYXJnLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpXG4gIH1cblxuICAvLyBDb21tb24gY2FzZS5cbiAgaWYgKHR5cGVvZiBhcmcgPT09ICdudW1iZXInKSB7XG4gICAgaWYgKHR5cGVvZiBlbmNvZGluZ09yT2Zmc2V0ID09PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnSWYgZW5jb2RpbmcgaXMgc3BlY2lmaWVkIHRoZW4gdGhlIGZpcnN0IGFyZ3VtZW50IG11c3QgYmUgYSBzdHJpbmcnXG4gICAgICApXG4gICAgfVxuICAgIHJldHVybiBhbGxvY1Vuc2FmZSh0aGlzLCBhcmcpXG4gIH1cbiAgcmV0dXJuIGZyb20odGhpcywgYXJnLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpXG59XG5cbkJ1ZmZlci5wb29sU2l6ZSA9IDgxOTIgLy8gbm90IHVzZWQgYnkgdGhpcyBpbXBsZW1lbnRhdGlvblxuXG4vLyBUT0RPOiBMZWdhY3ksIG5vdCBuZWVkZWQgYW55bW9yZS4gUmVtb3ZlIGluIG5leHQgbWFqb3IgdmVyc2lvbi5cbkJ1ZmZlci5fYXVnbWVudCA9IGZ1bmN0aW9uIChhcnIpIHtcbiAgYXJyLl9fcHJvdG9fXyA9IEJ1ZmZlci5wcm90b3R5cGVcbiAgcmV0dXJuIGFyclxufVxuXG5mdW5jdGlvbiBmcm9tICh0aGF0LCB2YWx1ZSwgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJ2YWx1ZVwiIGFyZ3VtZW50IG11c3Qgbm90IGJlIGEgbnVtYmVyJylcbiAgfVxuXG4gIGlmICh0eXBlb2YgQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnICYmIHZhbHVlIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHtcbiAgICByZXR1cm4gZnJvbUFycmF5QnVmZmVyKHRoYXQsIHZhbHVlLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpXG4gIH1cblxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBmcm9tU3RyaW5nKHRoYXQsIHZhbHVlLCBlbmNvZGluZ09yT2Zmc2V0KVxuICB9XG5cbiAgcmV0dXJuIGZyb21PYmplY3QodGhhdCwgdmFsdWUpXG59XG5cbi8qKlxuICogRnVuY3Rpb25hbGx5IGVxdWl2YWxlbnQgdG8gQnVmZmVyKGFyZywgZW5jb2RpbmcpIGJ1dCB0aHJvd3MgYSBUeXBlRXJyb3JcbiAqIGlmIHZhbHVlIGlzIGEgbnVtYmVyLlxuICogQnVmZmVyLmZyb20oc3RyWywgZW5jb2RpbmddKVxuICogQnVmZmVyLmZyb20oYXJyYXkpXG4gKiBCdWZmZXIuZnJvbShidWZmZXIpXG4gKiBCdWZmZXIuZnJvbShhcnJheUJ1ZmZlclssIGJ5dGVPZmZzZXRbLCBsZW5ndGhdXSlcbiAqKi9cbkJ1ZmZlci5mcm9tID0gZnVuY3Rpb24gKHZhbHVlLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGZyb20obnVsbCwgdmFsdWUsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aClcbn1cblxuaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gIEJ1ZmZlci5wcm90b3R5cGUuX19wcm90b19fID0gVWludDhBcnJheS5wcm90b3R5cGVcbiAgQnVmZmVyLl9fcHJvdG9fXyA9IFVpbnQ4QXJyYXlcbiAgaWYgKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC5zcGVjaWVzICYmXG4gICAgICBCdWZmZXJbU3ltYm9sLnNwZWNpZXNdID09PSBCdWZmZXIpIHtcbiAgICAvLyBGaXggc3ViYXJyYXkoKSBpbiBFUzIwMTYuIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2Zlcm9zcy9idWZmZXIvcHVsbC85N1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShCdWZmZXIsIFN5bWJvbC5zcGVjaWVzLCB7XG4gICAgICB2YWx1ZTogbnVsbCxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pXG4gIH1cbn1cblxuZnVuY3Rpb24gYXNzZXJ0U2l6ZSAoc2l6ZSkge1xuICBpZiAodHlwZW9mIHNpemUgIT09ICdudW1iZXInKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJzaXplXCIgYXJndW1lbnQgbXVzdCBiZSBhIG51bWJlcicpXG4gIH0gZWxzZSBpZiAoc2l6ZSA8IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignXCJzaXplXCIgYXJndW1lbnQgbXVzdCBub3QgYmUgbmVnYXRpdmUnKVxuICB9XG59XG5cbmZ1bmN0aW9uIGFsbG9jICh0aGF0LCBzaXplLCBmaWxsLCBlbmNvZGluZykge1xuICBhc3NlcnRTaXplKHNpemUpXG4gIGlmIChzaXplIDw9IDApIHtcbiAgICByZXR1cm4gY3JlYXRlQnVmZmVyKHRoYXQsIHNpemUpXG4gIH1cbiAgaWYgKGZpbGwgIT09IHVuZGVmaW5lZCkge1xuICAgIC8vIE9ubHkgcGF5IGF0dGVudGlvbiB0byBlbmNvZGluZyBpZiBpdCdzIGEgc3RyaW5nLiBUaGlzXG4gICAgLy8gcHJldmVudHMgYWNjaWRlbnRhbGx5IHNlbmRpbmcgaW4gYSBudW1iZXIgdGhhdCB3b3VsZFxuICAgIC8vIGJlIGludGVycHJldHRlZCBhcyBhIHN0YXJ0IG9mZnNldC5cbiAgICByZXR1cm4gdHlwZW9mIGVuY29kaW5nID09PSAnc3RyaW5nJ1xuICAgICAgPyBjcmVhdGVCdWZmZXIodGhhdCwgc2l6ZSkuZmlsbChmaWxsLCBlbmNvZGluZylcbiAgICAgIDogY3JlYXRlQnVmZmVyKHRoYXQsIHNpemUpLmZpbGwoZmlsbClcbiAgfVxuICByZXR1cm4gY3JlYXRlQnVmZmVyKHRoYXQsIHNpemUpXG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBmaWxsZWQgQnVmZmVyIGluc3RhbmNlLlxuICogYWxsb2Moc2l6ZVssIGZpbGxbLCBlbmNvZGluZ11dKVxuICoqL1xuQnVmZmVyLmFsbG9jID0gZnVuY3Rpb24gKHNpemUsIGZpbGwsIGVuY29kaW5nKSB7XG4gIHJldHVybiBhbGxvYyhudWxsLCBzaXplLCBmaWxsLCBlbmNvZGluZylcbn1cblxuZnVuY3Rpb24gYWxsb2NVbnNhZmUgKHRoYXQsIHNpemUpIHtcbiAgYXNzZXJ0U2l6ZShzaXplKVxuICB0aGF0ID0gY3JlYXRlQnVmZmVyKHRoYXQsIHNpemUgPCAwID8gMCA6IGNoZWNrZWQoc2l6ZSkgfCAwKVxuICBpZiAoIUJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzaXplOyArK2kpIHtcbiAgICAgIHRoYXRbaV0gPSAwXG4gICAgfVxuICB9XG4gIHJldHVybiB0aGF0XG59XG5cbi8qKlxuICogRXF1aXZhbGVudCB0byBCdWZmZXIobnVtKSwgYnkgZGVmYXVsdCBjcmVhdGVzIGEgbm9uLXplcm8tZmlsbGVkIEJ1ZmZlciBpbnN0YW5jZS5cbiAqICovXG5CdWZmZXIuYWxsb2NVbnNhZmUgPSBmdW5jdGlvbiAoc2l6ZSkge1xuICByZXR1cm4gYWxsb2NVbnNhZmUobnVsbCwgc2l6ZSlcbn1cbi8qKlxuICogRXF1aXZhbGVudCB0byBTbG93QnVmZmVyKG51bSksIGJ5IGRlZmF1bHQgY3JlYXRlcyBhIG5vbi16ZXJvLWZpbGxlZCBCdWZmZXIgaW5zdGFuY2UuXG4gKi9cbkJ1ZmZlci5hbGxvY1Vuc2FmZVNsb3cgPSBmdW5jdGlvbiAoc2l6ZSkge1xuICByZXR1cm4gYWxsb2NVbnNhZmUobnVsbCwgc2l6ZSlcbn1cblxuZnVuY3Rpb24gZnJvbVN0cmluZyAodGhhdCwgc3RyaW5nLCBlbmNvZGluZykge1xuICBpZiAodHlwZW9mIGVuY29kaW5nICE9PSAnc3RyaW5nJyB8fCBlbmNvZGluZyA9PT0gJycpIHtcbiAgICBlbmNvZGluZyA9ICd1dGY4J1xuICB9XG5cbiAgaWYgKCFCdWZmZXIuaXNFbmNvZGluZyhlbmNvZGluZykpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcImVuY29kaW5nXCIgbXVzdCBiZSBhIHZhbGlkIHN0cmluZyBlbmNvZGluZycpXG4gIH1cblxuICB2YXIgbGVuZ3RoID0gYnl0ZUxlbmd0aChzdHJpbmcsIGVuY29kaW5nKSB8IDBcbiAgdGhhdCA9IGNyZWF0ZUJ1ZmZlcih0aGF0LCBsZW5ndGgpXG5cbiAgdmFyIGFjdHVhbCA9IHRoYXQud3JpdGUoc3RyaW5nLCBlbmNvZGluZylcblxuICBpZiAoYWN0dWFsICE9PSBsZW5ndGgpIHtcbiAgICAvLyBXcml0aW5nIGEgaGV4IHN0cmluZywgZm9yIGV4YW1wbGUsIHRoYXQgY29udGFpbnMgaW52YWxpZCBjaGFyYWN0ZXJzIHdpbGxcbiAgICAvLyBjYXVzZSBldmVyeXRoaW5nIGFmdGVyIHRoZSBmaXJzdCBpbnZhbGlkIGNoYXJhY3RlciB0byBiZSBpZ25vcmVkLiAoZS5nLlxuICAgIC8vICdhYnh4Y2QnIHdpbGwgYmUgdHJlYXRlZCBhcyAnYWInKVxuICAgIHRoYXQgPSB0aGF0LnNsaWNlKDAsIGFjdHVhbClcbiAgfVxuXG4gIHJldHVybiB0aGF0XG59XG5cbmZ1bmN0aW9uIGZyb21BcnJheUxpa2UgKHRoYXQsIGFycmF5KSB7XG4gIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGggPCAwID8gMCA6IGNoZWNrZWQoYXJyYXkubGVuZ3RoKSB8IDBcbiAgdGhhdCA9IGNyZWF0ZUJ1ZmZlcih0aGF0LCBsZW5ndGgpXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICB0aGF0W2ldID0gYXJyYXlbaV0gJiAyNTVcbiAgfVxuICByZXR1cm4gdGhhdFxufVxuXG5mdW5jdGlvbiBmcm9tQXJyYXlCdWZmZXIgKHRoYXQsIGFycmF5LCBieXRlT2Zmc2V0LCBsZW5ndGgpIHtcbiAgYXJyYXkuYnl0ZUxlbmd0aCAvLyB0aGlzIHRocm93cyBpZiBgYXJyYXlgIGlzIG5vdCBhIHZhbGlkIEFycmF5QnVmZmVyXG5cbiAgaWYgKGJ5dGVPZmZzZXQgPCAwIHx8IGFycmF5LmJ5dGVMZW5ndGggPCBieXRlT2Zmc2V0KSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1xcJ29mZnNldFxcJyBpcyBvdXQgb2YgYm91bmRzJylcbiAgfVxuXG4gIGlmIChhcnJheS5ieXRlTGVuZ3RoIDwgYnl0ZU9mZnNldCArIChsZW5ndGggfHwgMCkpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignXFwnbGVuZ3RoXFwnIGlzIG91dCBvZiBib3VuZHMnKVxuICB9XG5cbiAgaWYgKGJ5dGVPZmZzZXQgPT09IHVuZGVmaW5lZCAmJiBsZW5ndGggPT09IHVuZGVmaW5lZCkge1xuICAgIGFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXkpXG4gIH0gZWxzZSBpZiAobGVuZ3RoID09PSB1bmRlZmluZWQpIHtcbiAgICBhcnJheSA9IG5ldyBVaW50OEFycmF5KGFycmF5LCBieXRlT2Zmc2V0KVxuICB9IGVsc2Uge1xuICAgIGFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXksIGJ5dGVPZmZzZXQsIGxlbmd0aClcbiAgfVxuXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIC8vIFJldHVybiBhbiBhdWdtZW50ZWQgYFVpbnQ4QXJyYXlgIGluc3RhbmNlLCBmb3IgYmVzdCBwZXJmb3JtYW5jZVxuICAgIHRoYXQgPSBhcnJheVxuICAgIHRoYXQuX19wcm90b19fID0gQnVmZmVyLnByb3RvdHlwZVxuICB9IGVsc2Uge1xuICAgIC8vIEZhbGxiYWNrOiBSZXR1cm4gYW4gb2JqZWN0IGluc3RhbmNlIG9mIHRoZSBCdWZmZXIgY2xhc3NcbiAgICB0aGF0ID0gZnJvbUFycmF5TGlrZSh0aGF0LCBhcnJheSlcbiAgfVxuICByZXR1cm4gdGhhdFxufVxuXG5mdW5jdGlvbiBmcm9tT2JqZWN0ICh0aGF0LCBvYmopIHtcbiAgaWYgKEJ1ZmZlci5pc0J1ZmZlcihvYmopKSB7XG4gICAgdmFyIGxlbiA9IGNoZWNrZWQob2JqLmxlbmd0aCkgfCAwXG4gICAgdGhhdCA9IGNyZWF0ZUJ1ZmZlcih0aGF0LCBsZW4pXG5cbiAgICBpZiAodGhhdC5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB0aGF0XG4gICAgfVxuXG4gICAgb2JqLmNvcHkodGhhdCwgMCwgMCwgbGVuKVxuICAgIHJldHVybiB0aGF0XG4gIH1cblxuICBpZiAob2JqKSB7XG4gICAgaWYgKCh0eXBlb2YgQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgIG9iai5idWZmZXIgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikgfHwgJ2xlbmd0aCcgaW4gb2JqKSB7XG4gICAgICBpZiAodHlwZW9mIG9iai5sZW5ndGggIT09ICdudW1iZXInIHx8IGlzbmFuKG9iai5sZW5ndGgpKSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVCdWZmZXIodGhhdCwgMClcbiAgICAgIH1cbiAgICAgIHJldHVybiBmcm9tQXJyYXlMaWtlKHRoYXQsIG9iailcbiAgICB9XG5cbiAgICBpZiAob2JqLnR5cGUgPT09ICdCdWZmZXInICYmIGlzQXJyYXkob2JqLmRhdGEpKSB7XG4gICAgICByZXR1cm4gZnJvbUFycmF5TGlrZSh0aGF0LCBvYmouZGF0YSlcbiAgICB9XG4gIH1cblxuICB0aHJvdyBuZXcgVHlwZUVycm9yKCdGaXJzdCBhcmd1bWVudCBtdXN0IGJlIGEgc3RyaW5nLCBCdWZmZXIsIEFycmF5QnVmZmVyLCBBcnJheSwgb3IgYXJyYXktbGlrZSBvYmplY3QuJylcbn1cblxuZnVuY3Rpb24gY2hlY2tlZCAobGVuZ3RoKSB7XG4gIC8vIE5vdGU6IGNhbm5vdCB1c2UgYGxlbmd0aCA8IGtNYXhMZW5ndGgoKWAgaGVyZSBiZWNhdXNlIHRoYXQgZmFpbHMgd2hlblxuICAvLyBsZW5ndGggaXMgTmFOICh3aGljaCBpcyBvdGhlcndpc2UgY29lcmNlZCB0byB6ZXJvLilcbiAgaWYgKGxlbmd0aCA+PSBrTWF4TGVuZ3RoKCkpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQXR0ZW1wdCB0byBhbGxvY2F0ZSBCdWZmZXIgbGFyZ2VyIHRoYW4gbWF4aW11bSAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAnc2l6ZTogMHgnICsga01heExlbmd0aCgpLnRvU3RyaW5nKDE2KSArICcgYnl0ZXMnKVxuICB9XG4gIHJldHVybiBsZW5ndGggfCAwXG59XG5cbmZ1bmN0aW9uIFNsb3dCdWZmZXIgKGxlbmd0aCkge1xuICBpZiAoK2xlbmd0aCAhPSBsZW5ndGgpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBlcWVxZXFcbiAgICBsZW5ndGggPSAwXG4gIH1cbiAgcmV0dXJuIEJ1ZmZlci5hbGxvYygrbGVuZ3RoKVxufVxuXG5CdWZmZXIuaXNCdWZmZXIgPSBmdW5jdGlvbiBpc0J1ZmZlciAoYikge1xuICByZXR1cm4gISEoYiAhPSBudWxsICYmIGIuX2lzQnVmZmVyKVxufVxuXG5CdWZmZXIuY29tcGFyZSA9IGZ1bmN0aW9uIGNvbXBhcmUgKGEsIGIpIHtcbiAgaWYgKCFCdWZmZXIuaXNCdWZmZXIoYSkgfHwgIUJ1ZmZlci5pc0J1ZmZlcihiKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50cyBtdXN0IGJlIEJ1ZmZlcnMnKVxuICB9XG5cbiAgaWYgKGEgPT09IGIpIHJldHVybiAwXG5cbiAgdmFyIHggPSBhLmxlbmd0aFxuICB2YXIgeSA9IGIubGVuZ3RoXG5cbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IE1hdGgubWluKHgsIHkpOyBpIDwgbGVuOyArK2kpIHtcbiAgICBpZiAoYVtpXSAhPT0gYltpXSkge1xuICAgICAgeCA9IGFbaV1cbiAgICAgIHkgPSBiW2ldXG4gICAgICBicmVha1xuICAgIH1cbiAgfVxuXG4gIGlmICh4IDwgeSkgcmV0dXJuIC0xXG4gIGlmICh5IDwgeCkgcmV0dXJuIDFcbiAgcmV0dXJuIDBcbn1cblxuQnVmZmVyLmlzRW5jb2RpbmcgPSBmdW5jdGlvbiBpc0VuY29kaW5nIChlbmNvZGluZykge1xuICBzd2l0Y2ggKFN0cmluZyhlbmNvZGluZykudG9Mb3dlckNhc2UoKSkge1xuICAgIGNhc2UgJ2hleCc6XG4gICAgY2FzZSAndXRmOCc6XG4gICAgY2FzZSAndXRmLTgnOlxuICAgIGNhc2UgJ2FzY2lpJzpcbiAgICBjYXNlICdsYXRpbjEnOlxuICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgY2FzZSAnYmFzZTY0JzpcbiAgICBjYXNlICd1Y3MyJzpcbiAgICBjYXNlICd1Y3MtMic6XG4gICAgY2FzZSAndXRmMTZsZSc6XG4gICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgcmV0dXJuIHRydWVcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuQnVmZmVyLmNvbmNhdCA9IGZ1bmN0aW9uIGNvbmNhdCAobGlzdCwgbGVuZ3RoKSB7XG4gIGlmICghaXNBcnJheShsaXN0KSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wibGlzdFwiIGFyZ3VtZW50IG11c3QgYmUgYW4gQXJyYXkgb2YgQnVmZmVycycpXG4gIH1cblxuICBpZiAobGlzdC5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gQnVmZmVyLmFsbG9jKDApXG4gIH1cblxuICB2YXIgaVxuICBpZiAobGVuZ3RoID09PSB1bmRlZmluZWQpIHtcbiAgICBsZW5ndGggPSAwXG4gICAgZm9yIChpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyArK2kpIHtcbiAgICAgIGxlbmd0aCArPSBsaXN0W2ldLmxlbmd0aFxuICAgIH1cbiAgfVxuXG4gIHZhciBidWZmZXIgPSBCdWZmZXIuYWxsb2NVbnNhZmUobGVuZ3RoKVxuICB2YXIgcG9zID0gMFxuICBmb3IgKGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7ICsraSkge1xuICAgIHZhciBidWYgPSBsaXN0W2ldXG4gICAgaWYgKCFCdWZmZXIuaXNCdWZmZXIoYnVmKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJsaXN0XCIgYXJndW1lbnQgbXVzdCBiZSBhbiBBcnJheSBvZiBCdWZmZXJzJylcbiAgICB9XG4gICAgYnVmLmNvcHkoYnVmZmVyLCBwb3MpXG4gICAgcG9zICs9IGJ1Zi5sZW5ndGhcbiAgfVxuICByZXR1cm4gYnVmZmVyXG59XG5cbmZ1bmN0aW9uIGJ5dGVMZW5ndGggKHN0cmluZywgZW5jb2RpbmcpIHtcbiAgaWYgKEJ1ZmZlci5pc0J1ZmZlcihzdHJpbmcpKSB7XG4gICAgcmV0dXJuIHN0cmluZy5sZW5ndGhcbiAgfVxuICBpZiAodHlwZW9mIEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgQXJyYXlCdWZmZXIuaXNWaWV3ID09PSAnZnVuY3Rpb24nICYmXG4gICAgICAoQXJyYXlCdWZmZXIuaXNWaWV3KHN0cmluZykgfHwgc3RyaW5nIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpKSB7XG4gICAgcmV0dXJuIHN0cmluZy5ieXRlTGVuZ3RoXG4gIH1cbiAgaWYgKHR5cGVvZiBzdHJpbmcgIT09ICdzdHJpbmcnKSB7XG4gICAgc3RyaW5nID0gJycgKyBzdHJpbmdcbiAgfVxuXG4gIHZhciBsZW4gPSBzdHJpbmcubGVuZ3RoXG4gIGlmIChsZW4gPT09IDApIHJldHVybiAwXG5cbiAgLy8gVXNlIGEgZm9yIGxvb3AgdG8gYXZvaWQgcmVjdXJzaW9uXG4gIHZhciBsb3dlcmVkQ2FzZSA9IGZhbHNlXG4gIGZvciAoOzspIHtcbiAgICBzd2l0Y2ggKGVuY29kaW5nKSB7XG4gICAgICBjYXNlICdhc2NpaSc6XG4gICAgICBjYXNlICdsYXRpbjEnOlxuICAgICAgY2FzZSAnYmluYXJ5JzpcbiAgICAgICAgcmV0dXJuIGxlblxuICAgICAgY2FzZSAndXRmOCc6XG4gICAgICBjYXNlICd1dGYtOCc6XG4gICAgICBjYXNlIHVuZGVmaW5lZDpcbiAgICAgICAgcmV0dXJuIHV0ZjhUb0J5dGVzKHN0cmluZykubGVuZ3RoXG4gICAgICBjYXNlICd1Y3MyJzpcbiAgICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgICByZXR1cm4gbGVuICogMlxuICAgICAgY2FzZSAnaGV4JzpcbiAgICAgICAgcmV0dXJuIGxlbiA+Pj4gMVxuICAgICAgY2FzZSAnYmFzZTY0JzpcbiAgICAgICAgcmV0dXJuIGJhc2U2NFRvQnl0ZXMoc3RyaW5nKS5sZW5ndGhcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlmIChsb3dlcmVkQ2FzZSkgcmV0dXJuIHV0ZjhUb0J5dGVzKHN0cmluZykubGVuZ3RoIC8vIGFzc3VtZSB1dGY4XG4gICAgICAgIGVuY29kaW5nID0gKCcnICsgZW5jb2RpbmcpLnRvTG93ZXJDYXNlKClcbiAgICAgICAgbG93ZXJlZENhc2UgPSB0cnVlXG4gICAgfVxuICB9XG59XG5CdWZmZXIuYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGhcblxuZnVuY3Rpb24gc2xvd1RvU3RyaW5nIChlbmNvZGluZywgc3RhcnQsIGVuZCkge1xuICB2YXIgbG93ZXJlZENhc2UgPSBmYWxzZVxuXG4gIC8vIE5vIG5lZWQgdG8gdmVyaWZ5IHRoYXQgXCJ0aGlzLmxlbmd0aCA8PSBNQVhfVUlOVDMyXCIgc2luY2UgaXQncyBhIHJlYWQtb25seVxuICAvLyBwcm9wZXJ0eSBvZiBhIHR5cGVkIGFycmF5LlxuXG4gIC8vIFRoaXMgYmVoYXZlcyBuZWl0aGVyIGxpa2UgU3RyaW5nIG5vciBVaW50OEFycmF5IGluIHRoYXQgd2Ugc2V0IHN0YXJ0L2VuZFxuICAvLyB0byB0aGVpciB1cHBlci9sb3dlciBib3VuZHMgaWYgdGhlIHZhbHVlIHBhc3NlZCBpcyBvdXQgb2YgcmFuZ2UuXG4gIC8vIHVuZGVmaW5lZCBpcyBoYW5kbGVkIHNwZWNpYWxseSBhcyBwZXIgRUNNQS0yNjIgNnRoIEVkaXRpb24sXG4gIC8vIFNlY3Rpb24gMTMuMy4zLjcgUnVudGltZSBTZW1hbnRpY3M6IEtleWVkQmluZGluZ0luaXRpYWxpemF0aW9uLlxuICBpZiAoc3RhcnQgPT09IHVuZGVmaW5lZCB8fCBzdGFydCA8IDApIHtcbiAgICBzdGFydCA9IDBcbiAgfVxuICAvLyBSZXR1cm4gZWFybHkgaWYgc3RhcnQgPiB0aGlzLmxlbmd0aC4gRG9uZSBoZXJlIHRvIHByZXZlbnQgcG90ZW50aWFsIHVpbnQzMlxuICAvLyBjb2VyY2lvbiBmYWlsIGJlbG93LlxuICBpZiAoc3RhcnQgPiB0aGlzLmxlbmd0aCkge1xuICAgIHJldHVybiAnJ1xuICB9XG5cbiAgaWYgKGVuZCA9PT0gdW5kZWZpbmVkIHx8IGVuZCA+IHRoaXMubGVuZ3RoKSB7XG4gICAgZW5kID0gdGhpcy5sZW5ndGhcbiAgfVxuXG4gIGlmIChlbmQgPD0gMCkge1xuICAgIHJldHVybiAnJ1xuICB9XG5cbiAgLy8gRm9yY2UgY29lcnNpb24gdG8gdWludDMyLiBUaGlzIHdpbGwgYWxzbyBjb2VyY2UgZmFsc2V5L05hTiB2YWx1ZXMgdG8gMC5cbiAgZW5kID4+Pj0gMFxuICBzdGFydCA+Pj49IDBcblxuICBpZiAoZW5kIDw9IHN0YXJ0KSB7XG4gICAgcmV0dXJuICcnXG4gIH1cblxuICBpZiAoIWVuY29kaW5nKSBlbmNvZGluZyA9ICd1dGY4J1xuXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgc3dpdGNoIChlbmNvZGluZykge1xuICAgICAgY2FzZSAnaGV4JzpcbiAgICAgICAgcmV0dXJuIGhleFNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ3V0ZjgnOlxuICAgICAgY2FzZSAndXRmLTgnOlxuICAgICAgICByZXR1cm4gdXRmOFNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ2FzY2lpJzpcbiAgICAgICAgcmV0dXJuIGFzY2lpU2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAnbGF0aW4xJzpcbiAgICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgICAgIHJldHVybiBsYXRpbjFTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICdiYXNlNjQnOlxuICAgICAgICByZXR1cm4gYmFzZTY0U2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAndWNzMic6XG4gICAgICBjYXNlICd1Y3MtMic6XG4gICAgICBjYXNlICd1dGYxNmxlJzpcbiAgICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgICAgcmV0dXJuIHV0ZjE2bGVTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAobG93ZXJlZENhc2UpIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Vua25vd24gZW5jb2Rpbmc6ICcgKyBlbmNvZGluZylcbiAgICAgICAgZW5jb2RpbmcgPSAoZW5jb2RpbmcgKyAnJykudG9Mb3dlckNhc2UoKVxuICAgICAgICBsb3dlcmVkQ2FzZSA9IHRydWVcbiAgICB9XG4gIH1cbn1cblxuLy8gVGhlIHByb3BlcnR5IGlzIHVzZWQgYnkgYEJ1ZmZlci5pc0J1ZmZlcmAgYW5kIGBpcy1idWZmZXJgIChpbiBTYWZhcmkgNS03KSB0byBkZXRlY3Rcbi8vIEJ1ZmZlciBpbnN0YW5jZXMuXG5CdWZmZXIucHJvdG90eXBlLl9pc0J1ZmZlciA9IHRydWVcblxuZnVuY3Rpb24gc3dhcCAoYiwgbiwgbSkge1xuICB2YXIgaSA9IGJbbl1cbiAgYltuXSA9IGJbbV1cbiAgYlttXSA9IGlcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5zd2FwMTYgPSBmdW5jdGlvbiBzd2FwMTYgKCkge1xuICB2YXIgbGVuID0gdGhpcy5sZW5ndGhcbiAgaWYgKGxlbiAlIDIgIT09IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQnVmZmVyIHNpemUgbXVzdCBiZSBhIG11bHRpcGxlIG9mIDE2LWJpdHMnKVxuICB9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpICs9IDIpIHtcbiAgICBzd2FwKHRoaXMsIGksIGkgKyAxKVxuICB9XG4gIHJldHVybiB0aGlzXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuc3dhcDMyID0gZnVuY3Rpb24gc3dhcDMyICgpIHtcbiAgdmFyIGxlbiA9IHRoaXMubGVuZ3RoXG4gIGlmIChsZW4gJSA0ICE9PSAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0J1ZmZlciBzaXplIG11c3QgYmUgYSBtdWx0aXBsZSBvZiAzMi1iaXRzJylcbiAgfVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSArPSA0KSB7XG4gICAgc3dhcCh0aGlzLCBpLCBpICsgMylcbiAgICBzd2FwKHRoaXMsIGkgKyAxLCBpICsgMilcbiAgfVxuICByZXR1cm4gdGhpc1xufVxuXG5CdWZmZXIucHJvdG90eXBlLnN3YXA2NCA9IGZ1bmN0aW9uIHN3YXA2NCAoKSB7XG4gIHZhciBsZW4gPSB0aGlzLmxlbmd0aFxuICBpZiAobGVuICUgOCAhPT0gMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdCdWZmZXIgc2l6ZSBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgNjQtYml0cycpXG4gIH1cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkgKz0gOCkge1xuICAgIHN3YXAodGhpcywgaSwgaSArIDcpXG4gICAgc3dhcCh0aGlzLCBpICsgMSwgaSArIDYpXG4gICAgc3dhcCh0aGlzLCBpICsgMiwgaSArIDUpXG4gICAgc3dhcCh0aGlzLCBpICsgMywgaSArIDQpXG4gIH1cbiAgcmV0dXJuIHRoaXNcbn1cblxuQnVmZmVyLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nICgpIHtcbiAgdmFyIGxlbmd0aCA9IHRoaXMubGVuZ3RoIHwgMFxuICBpZiAobGVuZ3RoID09PSAwKSByZXR1cm4gJydcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHJldHVybiB1dGY4U2xpY2UodGhpcywgMCwgbGVuZ3RoKVxuICByZXR1cm4gc2xvd1RvU3RyaW5nLmFwcGx5KHRoaXMsIGFyZ3VtZW50cylcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5lcXVhbHMgPSBmdW5jdGlvbiBlcXVhbHMgKGIpIHtcbiAgaWYgKCFCdWZmZXIuaXNCdWZmZXIoYikpIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50IG11c3QgYmUgYSBCdWZmZXInKVxuICBpZiAodGhpcyA9PT0gYikgcmV0dXJuIHRydWVcbiAgcmV0dXJuIEJ1ZmZlci5jb21wYXJlKHRoaXMsIGIpID09PSAwXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuaW5zcGVjdCA9IGZ1bmN0aW9uIGluc3BlY3QgKCkge1xuICB2YXIgc3RyID0gJydcbiAgdmFyIG1heCA9IGV4cG9ydHMuSU5TUEVDVF9NQVhfQllURVNcbiAgaWYgKHRoaXMubGVuZ3RoID4gMCkge1xuICAgIHN0ciA9IHRoaXMudG9TdHJpbmcoJ2hleCcsIDAsIG1heCkubWF0Y2goLy57Mn0vZykuam9pbignICcpXG4gICAgaWYgKHRoaXMubGVuZ3RoID4gbWF4KSBzdHIgKz0gJyAuLi4gJ1xuICB9XG4gIHJldHVybiAnPEJ1ZmZlciAnICsgc3RyICsgJz4nXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuY29tcGFyZSA9IGZ1bmN0aW9uIGNvbXBhcmUgKHRhcmdldCwgc3RhcnQsIGVuZCwgdGhpc1N0YXJ0LCB0aGlzRW5kKSB7XG4gIGlmICghQnVmZmVyLmlzQnVmZmVyKHRhcmdldCkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudCBtdXN0IGJlIGEgQnVmZmVyJylcbiAgfVxuXG4gIGlmIChzdGFydCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgc3RhcnQgPSAwXG4gIH1cbiAgaWYgKGVuZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgZW5kID0gdGFyZ2V0ID8gdGFyZ2V0Lmxlbmd0aCA6IDBcbiAgfVxuICBpZiAodGhpc1N0YXJ0ID09PSB1bmRlZmluZWQpIHtcbiAgICB0aGlzU3RhcnQgPSAwXG4gIH1cbiAgaWYgKHRoaXNFbmQgPT09IHVuZGVmaW5lZCkge1xuICAgIHRoaXNFbmQgPSB0aGlzLmxlbmd0aFxuICB9XG5cbiAgaWYgKHN0YXJ0IDwgMCB8fCBlbmQgPiB0YXJnZXQubGVuZ3RoIHx8IHRoaXNTdGFydCA8IDAgfHwgdGhpc0VuZCA+IHRoaXMubGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ291dCBvZiByYW5nZSBpbmRleCcpXG4gIH1cblxuICBpZiAodGhpc1N0YXJ0ID49IHRoaXNFbmQgJiYgc3RhcnQgPj0gZW5kKSB7XG4gICAgcmV0dXJuIDBcbiAgfVxuICBpZiAodGhpc1N0YXJ0ID49IHRoaXNFbmQpIHtcbiAgICByZXR1cm4gLTFcbiAgfVxuICBpZiAoc3RhcnQgPj0gZW5kKSB7XG4gICAgcmV0dXJuIDFcbiAgfVxuXG4gIHN0YXJ0ID4+Pj0gMFxuICBlbmQgPj4+PSAwXG4gIHRoaXNTdGFydCA+Pj49IDBcbiAgdGhpc0VuZCA+Pj49IDBcblxuICBpZiAodGhpcyA9PT0gdGFyZ2V0KSByZXR1cm4gMFxuXG4gIHZhciB4ID0gdGhpc0VuZCAtIHRoaXNTdGFydFxuICB2YXIgeSA9IGVuZCAtIHN0YXJ0XG4gIHZhciBsZW4gPSBNYXRoLm1pbih4LCB5KVxuXG4gIHZhciB0aGlzQ29weSA9IHRoaXMuc2xpY2UodGhpc1N0YXJ0LCB0aGlzRW5kKVxuICB2YXIgdGFyZ2V0Q29weSA9IHRhcmdldC5zbGljZShzdGFydCwgZW5kKVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyArK2kpIHtcbiAgICBpZiAodGhpc0NvcHlbaV0gIT09IHRhcmdldENvcHlbaV0pIHtcbiAgICAgIHggPSB0aGlzQ29weVtpXVxuICAgICAgeSA9IHRhcmdldENvcHlbaV1cbiAgICAgIGJyZWFrXG4gICAgfVxuICB9XG5cbiAgaWYgKHggPCB5KSByZXR1cm4gLTFcbiAgaWYgKHkgPCB4KSByZXR1cm4gMVxuICByZXR1cm4gMFxufVxuXG4vLyBGaW5kcyBlaXRoZXIgdGhlIGZpcnN0IGluZGV4IG9mIGB2YWxgIGluIGBidWZmZXJgIGF0IG9mZnNldCA+PSBgYnl0ZU9mZnNldGAsXG4vLyBPUiB0aGUgbGFzdCBpbmRleCBvZiBgdmFsYCBpbiBgYnVmZmVyYCBhdCBvZmZzZXQgPD0gYGJ5dGVPZmZzZXRgLlxuLy9cbi8vIEFyZ3VtZW50czpcbi8vIC0gYnVmZmVyIC0gYSBCdWZmZXIgdG8gc2VhcmNoXG4vLyAtIHZhbCAtIGEgc3RyaW5nLCBCdWZmZXIsIG9yIG51bWJlclxuLy8gLSBieXRlT2Zmc2V0IC0gYW4gaW5kZXggaW50byBgYnVmZmVyYDsgd2lsbCBiZSBjbGFtcGVkIHRvIGFuIGludDMyXG4vLyAtIGVuY29kaW5nIC0gYW4gb3B0aW9uYWwgZW5jb2RpbmcsIHJlbGV2YW50IGlzIHZhbCBpcyBhIHN0cmluZ1xuLy8gLSBkaXIgLSB0cnVlIGZvciBpbmRleE9mLCBmYWxzZSBmb3IgbGFzdEluZGV4T2ZcbmZ1bmN0aW9uIGJpZGlyZWN0aW9uYWxJbmRleE9mIChidWZmZXIsIHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIGRpcikge1xuICAvLyBFbXB0eSBidWZmZXIgbWVhbnMgbm8gbWF0Y2hcbiAgaWYgKGJ1ZmZlci5sZW5ndGggPT09IDApIHJldHVybiAtMVxuXG4gIC8vIE5vcm1hbGl6ZSBieXRlT2Zmc2V0XG4gIGlmICh0eXBlb2YgYnl0ZU9mZnNldCA9PT0gJ3N0cmluZycpIHtcbiAgICBlbmNvZGluZyA9IGJ5dGVPZmZzZXRcbiAgICBieXRlT2Zmc2V0ID0gMFxuICB9IGVsc2UgaWYgKGJ5dGVPZmZzZXQgPiAweDdmZmZmZmZmKSB7XG4gICAgYnl0ZU9mZnNldCA9IDB4N2ZmZmZmZmZcbiAgfSBlbHNlIGlmIChieXRlT2Zmc2V0IDwgLTB4ODAwMDAwMDApIHtcbiAgICBieXRlT2Zmc2V0ID0gLTB4ODAwMDAwMDBcbiAgfVxuICBieXRlT2Zmc2V0ID0gK2J5dGVPZmZzZXQgIC8vIENvZXJjZSB0byBOdW1iZXIuXG4gIGlmIChpc05hTihieXRlT2Zmc2V0KSkge1xuICAgIC8vIGJ5dGVPZmZzZXQ6IGl0IGl0J3MgdW5kZWZpbmVkLCBudWxsLCBOYU4sIFwiZm9vXCIsIGV0Yywgc2VhcmNoIHdob2xlIGJ1ZmZlclxuICAgIGJ5dGVPZmZzZXQgPSBkaXIgPyAwIDogKGJ1ZmZlci5sZW5ndGggLSAxKVxuICB9XG5cbiAgLy8gTm9ybWFsaXplIGJ5dGVPZmZzZXQ6IG5lZ2F0aXZlIG9mZnNldHMgc3RhcnQgZnJvbSB0aGUgZW5kIG9mIHRoZSBidWZmZXJcbiAgaWYgKGJ5dGVPZmZzZXQgPCAwKSBieXRlT2Zmc2V0ID0gYnVmZmVyLmxlbmd0aCArIGJ5dGVPZmZzZXRcbiAgaWYgKGJ5dGVPZmZzZXQgPj0gYnVmZmVyLmxlbmd0aCkge1xuICAgIGlmIChkaXIpIHJldHVybiAtMVxuICAgIGVsc2UgYnl0ZU9mZnNldCA9IGJ1ZmZlci5sZW5ndGggLSAxXG4gIH0gZWxzZSBpZiAoYnl0ZU9mZnNldCA8IDApIHtcbiAgICBpZiAoZGlyKSBieXRlT2Zmc2V0ID0gMFxuICAgIGVsc2UgcmV0dXJuIC0xXG4gIH1cblxuICAvLyBOb3JtYWxpemUgdmFsXG4gIGlmICh0eXBlb2YgdmFsID09PSAnc3RyaW5nJykge1xuICAgIHZhbCA9IEJ1ZmZlci5mcm9tKHZhbCwgZW5jb2RpbmcpXG4gIH1cblxuICAvLyBGaW5hbGx5LCBzZWFyY2ggZWl0aGVyIGluZGV4T2YgKGlmIGRpciBpcyB0cnVlKSBvciBsYXN0SW5kZXhPZlxuICBpZiAoQnVmZmVyLmlzQnVmZmVyKHZhbCkpIHtcbiAgICAvLyBTcGVjaWFsIGNhc2U6IGxvb2tpbmcgZm9yIGVtcHR5IHN0cmluZy9idWZmZXIgYWx3YXlzIGZhaWxzXG4gICAgaWYgKHZhbC5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiAtMVxuICAgIH1cbiAgICByZXR1cm4gYXJyYXlJbmRleE9mKGJ1ZmZlciwgdmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZywgZGlyKVxuICB9IGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgdmFsID0gdmFsICYgMHhGRiAvLyBTZWFyY2ggZm9yIGEgYnl0ZSB2YWx1ZSBbMC0yNTVdXG4gICAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUICYmXG4gICAgICAgIHR5cGVvZiBVaW50OEFycmF5LnByb3RvdHlwZS5pbmRleE9mID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBpZiAoZGlyKSB7XG4gICAgICAgIHJldHVybiBVaW50OEFycmF5LnByb3RvdHlwZS5pbmRleE9mLmNhbGwoYnVmZmVyLCB2YWwsIGJ5dGVPZmZzZXQpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gVWludDhBcnJheS5wcm90b3R5cGUubGFzdEluZGV4T2YuY2FsbChidWZmZXIsIHZhbCwgYnl0ZU9mZnNldClcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGFycmF5SW5kZXhPZihidWZmZXIsIFsgdmFsIF0sIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCBkaXIpXG4gIH1cblxuICB0aHJvdyBuZXcgVHlwZUVycm9yKCd2YWwgbXVzdCBiZSBzdHJpbmcsIG51bWJlciBvciBCdWZmZXInKVxufVxuXG5mdW5jdGlvbiBhcnJheUluZGV4T2YgKGFyciwgdmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZywgZGlyKSB7XG4gIHZhciBpbmRleFNpemUgPSAxXG4gIHZhciBhcnJMZW5ndGggPSBhcnIubGVuZ3RoXG4gIHZhciB2YWxMZW5ndGggPSB2YWwubGVuZ3RoXG5cbiAgaWYgKGVuY29kaW5nICE9PSB1bmRlZmluZWQpIHtcbiAgICBlbmNvZGluZyA9IFN0cmluZyhlbmNvZGluZykudG9Mb3dlckNhc2UoKVxuICAgIGlmIChlbmNvZGluZyA9PT0gJ3VjczInIHx8IGVuY29kaW5nID09PSAndWNzLTInIHx8XG4gICAgICAgIGVuY29kaW5nID09PSAndXRmMTZsZScgfHwgZW5jb2RpbmcgPT09ICd1dGYtMTZsZScpIHtcbiAgICAgIGlmIChhcnIubGVuZ3RoIDwgMiB8fCB2YWwubGVuZ3RoIDwgMikge1xuICAgICAgICByZXR1cm4gLTFcbiAgICAgIH1cbiAgICAgIGluZGV4U2l6ZSA9IDJcbiAgICAgIGFyckxlbmd0aCAvPSAyXG4gICAgICB2YWxMZW5ndGggLz0gMlxuICAgICAgYnl0ZU9mZnNldCAvPSAyXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVhZCAoYnVmLCBpKSB7XG4gICAgaWYgKGluZGV4U2l6ZSA9PT0gMSkge1xuICAgICAgcmV0dXJuIGJ1ZltpXVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gYnVmLnJlYWRVSW50MTZCRShpICogaW5kZXhTaXplKVxuICAgIH1cbiAgfVxuXG4gIHZhciBpXG4gIGlmIChkaXIpIHtcbiAgICB2YXIgZm91bmRJbmRleCA9IC0xXG4gICAgZm9yIChpID0gYnl0ZU9mZnNldDsgaSA8IGFyckxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAocmVhZChhcnIsIGkpID09PSByZWFkKHZhbCwgZm91bmRJbmRleCA9PT0gLTEgPyAwIDogaSAtIGZvdW5kSW5kZXgpKSB7XG4gICAgICAgIGlmIChmb3VuZEluZGV4ID09PSAtMSkgZm91bmRJbmRleCA9IGlcbiAgICAgICAgaWYgKGkgLSBmb3VuZEluZGV4ICsgMSA9PT0gdmFsTGVuZ3RoKSByZXR1cm4gZm91bmRJbmRleCAqIGluZGV4U2l6ZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGZvdW5kSW5kZXggIT09IC0xKSBpIC09IGkgLSBmb3VuZEluZGV4XG4gICAgICAgIGZvdW5kSW5kZXggPSAtMVxuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpZiAoYnl0ZU9mZnNldCArIHZhbExlbmd0aCA+IGFyckxlbmd0aCkgYnl0ZU9mZnNldCA9IGFyckxlbmd0aCAtIHZhbExlbmd0aFxuICAgIGZvciAoaSA9IGJ5dGVPZmZzZXQ7IGkgPj0gMDsgaS0tKSB7XG4gICAgICB2YXIgZm91bmQgPSB0cnVlXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHZhbExlbmd0aDsgaisrKSB7XG4gICAgICAgIGlmIChyZWFkKGFyciwgaSArIGopICE9PSByZWFkKHZhbCwgaikpIHtcbiAgICAgICAgICBmb3VuZCA9IGZhbHNlXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGZvdW5kKSByZXR1cm4gaVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAtMVxufVxuXG5CdWZmZXIucHJvdG90eXBlLmluY2x1ZGVzID0gZnVuY3Rpb24gaW5jbHVkZXMgKHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcpIHtcbiAgcmV0dXJuIHRoaXMuaW5kZXhPZih2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nKSAhPT0gLTFcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5pbmRleE9mID0gZnVuY3Rpb24gaW5kZXhPZiAodmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZykge1xuICByZXR1cm4gYmlkaXJlY3Rpb25hbEluZGV4T2YodGhpcywgdmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZywgdHJ1ZSlcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5sYXN0SW5kZXhPZiA9IGZ1bmN0aW9uIGxhc3RJbmRleE9mICh2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nKSB7XG4gIHJldHVybiBiaWRpcmVjdGlvbmFsSW5kZXhPZih0aGlzLCB2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCBmYWxzZSlcbn1cblxuZnVuY3Rpb24gaGV4V3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICBvZmZzZXQgPSBOdW1iZXIob2Zmc2V0KSB8fCAwXG4gIHZhciByZW1haW5pbmcgPSBidWYubGVuZ3RoIC0gb2Zmc2V0XG4gIGlmICghbGVuZ3RoKSB7XG4gICAgbGVuZ3RoID0gcmVtYWluaW5nXG4gIH0gZWxzZSB7XG4gICAgbGVuZ3RoID0gTnVtYmVyKGxlbmd0aClcbiAgICBpZiAobGVuZ3RoID4gcmVtYWluaW5nKSB7XG4gICAgICBsZW5ndGggPSByZW1haW5pbmdcbiAgICB9XG4gIH1cblxuICAvLyBtdXN0IGJlIGFuIGV2ZW4gbnVtYmVyIG9mIGRpZ2l0c1xuICB2YXIgc3RyTGVuID0gc3RyaW5nLmxlbmd0aFxuICBpZiAoc3RyTGVuICUgMiAhPT0gMCkgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBoZXggc3RyaW5nJylcblxuICBpZiAobGVuZ3RoID4gc3RyTGVuIC8gMikge1xuICAgIGxlbmd0aCA9IHN0ckxlbiAvIDJcbiAgfVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgKytpKSB7XG4gICAgdmFyIHBhcnNlZCA9IHBhcnNlSW50KHN0cmluZy5zdWJzdHIoaSAqIDIsIDIpLCAxNilcbiAgICBpZiAoaXNOYU4ocGFyc2VkKSkgcmV0dXJuIGlcbiAgICBidWZbb2Zmc2V0ICsgaV0gPSBwYXJzZWRcbiAgfVxuICByZXR1cm4gaVxufVxuXG5mdW5jdGlvbiB1dGY4V3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gYmxpdEJ1ZmZlcih1dGY4VG9CeXRlcyhzdHJpbmcsIGJ1Zi5sZW5ndGggLSBvZmZzZXQpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxufVxuXG5mdW5jdGlvbiBhc2NpaVdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGJsaXRCdWZmZXIoYXNjaWlUb0J5dGVzKHN0cmluZyksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG59XG5cbmZ1bmN0aW9uIGxhdGluMVdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGFzY2lpV3JpdGUoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxufVxuXG5mdW5jdGlvbiBiYXNlNjRXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBibGl0QnVmZmVyKGJhc2U2NFRvQnl0ZXMoc3RyaW5nKSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbn1cblxuZnVuY3Rpb24gdWNzMldyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGJsaXRCdWZmZXIodXRmMTZsZVRvQnl0ZXMoc3RyaW5nLCBidWYubGVuZ3RoIC0gb2Zmc2V0KSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZSA9IGZ1bmN0aW9uIHdyaXRlIChzdHJpbmcsIG9mZnNldCwgbGVuZ3RoLCBlbmNvZGluZykge1xuICAvLyBCdWZmZXIjd3JpdGUoc3RyaW5nKVxuICBpZiAob2Zmc2V0ID09PSB1bmRlZmluZWQpIHtcbiAgICBlbmNvZGluZyA9ICd1dGY4J1xuICAgIGxlbmd0aCA9IHRoaXMubGVuZ3RoXG4gICAgb2Zmc2V0ID0gMFxuICAvLyBCdWZmZXIjd3JpdGUoc3RyaW5nLCBlbmNvZGluZylcbiAgfSBlbHNlIGlmIChsZW5ndGggPT09IHVuZGVmaW5lZCAmJiB0eXBlb2Ygb2Zmc2V0ID09PSAnc3RyaW5nJykge1xuICAgIGVuY29kaW5nID0gb2Zmc2V0XG4gICAgbGVuZ3RoID0gdGhpcy5sZW5ndGhcbiAgICBvZmZzZXQgPSAwXG4gIC8vIEJ1ZmZlciN3cml0ZShzdHJpbmcsIG9mZnNldFssIGxlbmd0aF1bLCBlbmNvZGluZ10pXG4gIH0gZWxzZSBpZiAoaXNGaW5pdGUob2Zmc2V0KSkge1xuICAgIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgICBpZiAoaXNGaW5pdGUobGVuZ3RoKSkge1xuICAgICAgbGVuZ3RoID0gbGVuZ3RoIHwgMFxuICAgICAgaWYgKGVuY29kaW5nID09PSB1bmRlZmluZWQpIGVuY29kaW5nID0gJ3V0ZjgnXG4gICAgfSBlbHNlIHtcbiAgICAgIGVuY29kaW5nID0gbGVuZ3RoXG4gICAgICBsZW5ndGggPSB1bmRlZmluZWRcbiAgICB9XG4gIC8vIGxlZ2FjeSB3cml0ZShzdHJpbmcsIGVuY29kaW5nLCBvZmZzZXQsIGxlbmd0aCkgLSByZW1vdmUgaW4gdjAuMTNcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAnQnVmZmVyLndyaXRlKHN0cmluZywgZW5jb2RpbmcsIG9mZnNldFssIGxlbmd0aF0pIGlzIG5vIGxvbmdlciBzdXBwb3J0ZWQnXG4gICAgKVxuICB9XG5cbiAgdmFyIHJlbWFpbmluZyA9IHRoaXMubGVuZ3RoIC0gb2Zmc2V0XG4gIGlmIChsZW5ndGggPT09IHVuZGVmaW5lZCB8fCBsZW5ndGggPiByZW1haW5pbmcpIGxlbmd0aCA9IHJlbWFpbmluZ1xuXG4gIGlmICgoc3RyaW5nLmxlbmd0aCA+IDAgJiYgKGxlbmd0aCA8IDAgfHwgb2Zmc2V0IDwgMCkpIHx8IG9mZnNldCA+IHRoaXMubGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0F0dGVtcHQgdG8gd3JpdGUgb3V0c2lkZSBidWZmZXIgYm91bmRzJylcbiAgfVxuXG4gIGlmICghZW5jb2RpbmcpIGVuY29kaW5nID0gJ3V0ZjgnXG5cbiAgdmFyIGxvd2VyZWRDYXNlID0gZmFsc2VcbiAgZm9yICg7Oykge1xuICAgIHN3aXRjaCAoZW5jb2RpbmcpIHtcbiAgICAgIGNhc2UgJ2hleCc6XG4gICAgICAgIHJldHVybiBoZXhXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBjYXNlICd1dGY4JzpcbiAgICAgIGNhc2UgJ3V0Zi04JzpcbiAgICAgICAgcmV0dXJuIHV0ZjhXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBjYXNlICdhc2NpaSc6XG4gICAgICAgIHJldHVybiBhc2NpaVdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGNhc2UgJ2xhdGluMSc6XG4gICAgICBjYXNlICdiaW5hcnknOlxuICAgICAgICByZXR1cm4gbGF0aW4xV3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgY2FzZSAnYmFzZTY0JzpcbiAgICAgICAgLy8gV2FybmluZzogbWF4TGVuZ3RoIG5vdCB0YWtlbiBpbnRvIGFjY291bnQgaW4gYmFzZTY0V3JpdGVcbiAgICAgICAgcmV0dXJuIGJhc2U2NFdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGNhc2UgJ3VjczInOlxuICAgICAgY2FzZSAndWNzLTInOlxuICAgICAgY2FzZSAndXRmMTZsZSc6XG4gICAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICAgIHJldHVybiB1Y3MyV3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKGxvd2VyZWRDYXNlKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdVbmtub3duIGVuY29kaW5nOiAnICsgZW5jb2RpbmcpXG4gICAgICAgIGVuY29kaW5nID0gKCcnICsgZW5jb2RpbmcpLnRvTG93ZXJDYXNlKClcbiAgICAgICAgbG93ZXJlZENhc2UgPSB0cnVlXG4gICAgfVxuICB9XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUudG9KU09OID0gZnVuY3Rpb24gdG9KU09OICgpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAnQnVmZmVyJyxcbiAgICBkYXRhOiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCh0aGlzLl9hcnIgfHwgdGhpcywgMClcbiAgfVxufVxuXG5mdW5jdGlvbiBiYXNlNjRTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIGlmIChzdGFydCA9PT0gMCAmJiBlbmQgPT09IGJ1Zi5sZW5ndGgpIHtcbiAgICByZXR1cm4gYmFzZTY0LmZyb21CeXRlQXJyYXkoYnVmKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBiYXNlNjQuZnJvbUJ5dGVBcnJheShidWYuc2xpY2Uoc3RhcnQsIGVuZCkpXG4gIH1cbn1cblxuZnVuY3Rpb24gdXRmOFNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgZW5kID0gTWF0aC5taW4oYnVmLmxlbmd0aCwgZW5kKVxuICB2YXIgcmVzID0gW11cblxuICB2YXIgaSA9IHN0YXJ0XG4gIHdoaWxlIChpIDwgZW5kKSB7XG4gICAgdmFyIGZpcnN0Qnl0ZSA9IGJ1ZltpXVxuICAgIHZhciBjb2RlUG9pbnQgPSBudWxsXG4gICAgdmFyIGJ5dGVzUGVyU2VxdWVuY2UgPSAoZmlyc3RCeXRlID4gMHhFRikgPyA0XG4gICAgICA6IChmaXJzdEJ5dGUgPiAweERGKSA/IDNcbiAgICAgIDogKGZpcnN0Qnl0ZSA+IDB4QkYpID8gMlxuICAgICAgOiAxXG5cbiAgICBpZiAoaSArIGJ5dGVzUGVyU2VxdWVuY2UgPD0gZW5kKSB7XG4gICAgICB2YXIgc2Vjb25kQnl0ZSwgdGhpcmRCeXRlLCBmb3VydGhCeXRlLCB0ZW1wQ29kZVBvaW50XG5cbiAgICAgIHN3aXRjaCAoYnl0ZXNQZXJTZXF1ZW5jZSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgaWYgKGZpcnN0Qnl0ZSA8IDB4ODApIHtcbiAgICAgICAgICAgIGNvZGVQb2ludCA9IGZpcnN0Qnl0ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgc2Vjb25kQnl0ZSA9IGJ1ZltpICsgMV1cbiAgICAgICAgICBpZiAoKHNlY29uZEJ5dGUgJiAweEMwKSA9PT0gMHg4MCkge1xuICAgICAgICAgICAgdGVtcENvZGVQb2ludCA9IChmaXJzdEJ5dGUgJiAweDFGKSA8PCAweDYgfCAoc2Vjb25kQnl0ZSAmIDB4M0YpXG4gICAgICAgICAgICBpZiAodGVtcENvZGVQb2ludCA+IDB4N0YpIHtcbiAgICAgICAgICAgICAgY29kZVBvaW50ID0gdGVtcENvZGVQb2ludFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgc2Vjb25kQnl0ZSA9IGJ1ZltpICsgMV1cbiAgICAgICAgICB0aGlyZEJ5dGUgPSBidWZbaSArIDJdXG4gICAgICAgICAgaWYgKChzZWNvbmRCeXRlICYgMHhDMCkgPT09IDB4ODAgJiYgKHRoaXJkQnl0ZSAmIDB4QzApID09PSAweDgwKSB7XG4gICAgICAgICAgICB0ZW1wQ29kZVBvaW50ID0gKGZpcnN0Qnl0ZSAmIDB4RikgPDwgMHhDIHwgKHNlY29uZEJ5dGUgJiAweDNGKSA8PCAweDYgfCAodGhpcmRCeXRlICYgMHgzRilcbiAgICAgICAgICAgIGlmICh0ZW1wQ29kZVBvaW50ID4gMHg3RkYgJiYgKHRlbXBDb2RlUG9pbnQgPCAweEQ4MDAgfHwgdGVtcENvZGVQb2ludCA+IDB4REZGRikpIHtcbiAgICAgICAgICAgICAgY29kZVBvaW50ID0gdGVtcENvZGVQb2ludFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgc2Vjb25kQnl0ZSA9IGJ1ZltpICsgMV1cbiAgICAgICAgICB0aGlyZEJ5dGUgPSBidWZbaSArIDJdXG4gICAgICAgICAgZm91cnRoQnl0ZSA9IGJ1ZltpICsgM11cbiAgICAgICAgICBpZiAoKHNlY29uZEJ5dGUgJiAweEMwKSA9PT0gMHg4MCAmJiAodGhpcmRCeXRlICYgMHhDMCkgPT09IDB4ODAgJiYgKGZvdXJ0aEJ5dGUgJiAweEMwKSA9PT0gMHg4MCkge1xuICAgICAgICAgICAgdGVtcENvZGVQb2ludCA9IChmaXJzdEJ5dGUgJiAweEYpIDw8IDB4MTIgfCAoc2Vjb25kQnl0ZSAmIDB4M0YpIDw8IDB4QyB8ICh0aGlyZEJ5dGUgJiAweDNGKSA8PCAweDYgfCAoZm91cnRoQnl0ZSAmIDB4M0YpXG4gICAgICAgICAgICBpZiAodGVtcENvZGVQb2ludCA+IDB4RkZGRiAmJiB0ZW1wQ29kZVBvaW50IDwgMHgxMTAwMDApIHtcbiAgICAgICAgICAgICAgY29kZVBvaW50ID0gdGVtcENvZGVQb2ludFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY29kZVBvaW50ID09PSBudWxsKSB7XG4gICAgICAvLyB3ZSBkaWQgbm90IGdlbmVyYXRlIGEgdmFsaWQgY29kZVBvaW50IHNvIGluc2VydCBhXG4gICAgICAvLyByZXBsYWNlbWVudCBjaGFyIChVK0ZGRkQpIGFuZCBhZHZhbmNlIG9ubHkgMSBieXRlXG4gICAgICBjb2RlUG9pbnQgPSAweEZGRkRcbiAgICAgIGJ5dGVzUGVyU2VxdWVuY2UgPSAxXG4gICAgfSBlbHNlIGlmIChjb2RlUG9pbnQgPiAweEZGRkYpIHtcbiAgICAgIC8vIGVuY29kZSB0byB1dGYxNiAoc3Vycm9nYXRlIHBhaXIgZGFuY2UpXG4gICAgICBjb2RlUG9pbnQgLT0gMHgxMDAwMFxuICAgICAgcmVzLnB1c2goY29kZVBvaW50ID4+PiAxMCAmIDB4M0ZGIHwgMHhEODAwKVxuICAgICAgY29kZVBvaW50ID0gMHhEQzAwIHwgY29kZVBvaW50ICYgMHgzRkZcbiAgICB9XG5cbiAgICByZXMucHVzaChjb2RlUG9pbnQpXG4gICAgaSArPSBieXRlc1BlclNlcXVlbmNlXG4gIH1cblxuICByZXR1cm4gZGVjb2RlQ29kZVBvaW50c0FycmF5KHJlcylcbn1cblxuLy8gQmFzZWQgb24gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjI3NDcyNzIvNjgwNzQyLCB0aGUgYnJvd3NlciB3aXRoXG4vLyB0aGUgbG93ZXN0IGxpbWl0IGlzIENocm9tZSwgd2l0aCAweDEwMDAwIGFyZ3MuXG4vLyBXZSBnbyAxIG1hZ25pdHVkZSBsZXNzLCBmb3Igc2FmZXR5XG52YXIgTUFYX0FSR1VNRU5UU19MRU5HVEggPSAweDEwMDBcblxuZnVuY3Rpb24gZGVjb2RlQ29kZVBvaW50c0FycmF5IChjb2RlUG9pbnRzKSB7XG4gIHZhciBsZW4gPSBjb2RlUG9pbnRzLmxlbmd0aFxuICBpZiAobGVuIDw9IE1BWF9BUkdVTUVOVFNfTEVOR1RIKSB7XG4gICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkoU3RyaW5nLCBjb2RlUG9pbnRzKSAvLyBhdm9pZCBleHRyYSBzbGljZSgpXG4gIH1cblxuICAvLyBEZWNvZGUgaW4gY2h1bmtzIHRvIGF2b2lkIFwiY2FsbCBzdGFjayBzaXplIGV4Y2VlZGVkXCIuXG4gIHZhciByZXMgPSAnJ1xuICB2YXIgaSA9IDBcbiAgd2hpbGUgKGkgPCBsZW4pIHtcbiAgICByZXMgKz0gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShcbiAgICAgIFN0cmluZyxcbiAgICAgIGNvZGVQb2ludHMuc2xpY2UoaSwgaSArPSBNQVhfQVJHVU1FTlRTX0xFTkdUSClcbiAgICApXG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG5mdW5jdGlvbiBhc2NpaVNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIHJldCA9ICcnXG4gIGVuZCA9IE1hdGgubWluKGJ1Zi5sZW5ndGgsIGVuZClcblxuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7ICsraSkge1xuICAgIHJldCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ1ZltpXSAmIDB4N0YpXG4gIH1cbiAgcmV0dXJuIHJldFxufVxuXG5mdW5jdGlvbiBsYXRpbjFTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHZhciByZXQgPSAnJ1xuICBlbmQgPSBNYXRoLm1pbihidWYubGVuZ3RoLCBlbmQpXG5cbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyArK2kpIHtcbiAgICByZXQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShidWZbaV0pXG4gIH1cbiAgcmV0dXJuIHJldFxufVxuXG5mdW5jdGlvbiBoZXhTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHZhciBsZW4gPSBidWYubGVuZ3RoXG5cbiAgaWYgKCFzdGFydCB8fCBzdGFydCA8IDApIHN0YXJ0ID0gMFxuICBpZiAoIWVuZCB8fCBlbmQgPCAwIHx8IGVuZCA+IGxlbikgZW5kID0gbGVuXG5cbiAgdmFyIG91dCA9ICcnXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgKytpKSB7XG4gICAgb3V0ICs9IHRvSGV4KGJ1ZltpXSlcbiAgfVxuICByZXR1cm4gb3V0XG59XG5cbmZ1bmN0aW9uIHV0ZjE2bGVTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHZhciBieXRlcyA9IGJ1Zi5zbGljZShzdGFydCwgZW5kKVxuICB2YXIgcmVzID0gJydcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBieXRlcy5sZW5ndGg7IGkgKz0gMikge1xuICAgIHJlcyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ5dGVzW2ldICsgYnl0ZXNbaSArIDFdICogMjU2KVxuICB9XG4gIHJldHVybiByZXNcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5zbGljZSA9IGZ1bmN0aW9uIHNsaWNlIChzdGFydCwgZW5kKSB7XG4gIHZhciBsZW4gPSB0aGlzLmxlbmd0aFxuICBzdGFydCA9IH5+c3RhcnRcbiAgZW5kID0gZW5kID09PSB1bmRlZmluZWQgPyBsZW4gOiB+fmVuZFxuXG4gIGlmIChzdGFydCA8IDApIHtcbiAgICBzdGFydCArPSBsZW5cbiAgICBpZiAoc3RhcnQgPCAwKSBzdGFydCA9IDBcbiAgfSBlbHNlIGlmIChzdGFydCA+IGxlbikge1xuICAgIHN0YXJ0ID0gbGVuXG4gIH1cblxuICBpZiAoZW5kIDwgMCkge1xuICAgIGVuZCArPSBsZW5cbiAgICBpZiAoZW5kIDwgMCkgZW5kID0gMFxuICB9IGVsc2UgaWYgKGVuZCA+IGxlbikge1xuICAgIGVuZCA9IGxlblxuICB9XG5cbiAgaWYgKGVuZCA8IHN0YXJ0KSBlbmQgPSBzdGFydFxuXG4gIHZhciBuZXdCdWZcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgbmV3QnVmID0gdGhpcy5zdWJhcnJheShzdGFydCwgZW5kKVxuICAgIG5ld0J1Zi5fX3Byb3RvX18gPSBCdWZmZXIucHJvdG90eXBlXG4gIH0gZWxzZSB7XG4gICAgdmFyIHNsaWNlTGVuID0gZW5kIC0gc3RhcnRcbiAgICBuZXdCdWYgPSBuZXcgQnVmZmVyKHNsaWNlTGVuLCB1bmRlZmluZWQpXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzbGljZUxlbjsgKytpKSB7XG4gICAgICBuZXdCdWZbaV0gPSB0aGlzW2kgKyBzdGFydF1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV3QnVmXG59XG5cbi8qXG4gKiBOZWVkIHRvIG1ha2Ugc3VyZSB0aGF0IGJ1ZmZlciBpc24ndCB0cnlpbmcgdG8gd3JpdGUgb3V0IG9mIGJvdW5kcy5cbiAqL1xuZnVuY3Rpb24gY2hlY2tPZmZzZXQgKG9mZnNldCwgZXh0LCBsZW5ndGgpIHtcbiAgaWYgKChvZmZzZXQgJSAxKSAhPT0gMCB8fCBvZmZzZXQgPCAwKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignb2Zmc2V0IGlzIG5vdCB1aW50JylcbiAgaWYgKG9mZnNldCArIGV4dCA+IGxlbmd0aCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1RyeWluZyB0byBhY2Nlc3MgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50TEUgPSBmdW5jdGlvbiByZWFkVUludExFIChvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgYnl0ZUxlbmd0aCwgdGhpcy5sZW5ndGgpXG5cbiAgdmFyIHZhbCA9IHRoaXNbb2Zmc2V0XVxuICB2YXIgbXVsID0gMVxuICB2YXIgaSA9IDBcbiAgd2hpbGUgKCsraSA8IGJ5dGVMZW5ndGggJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB2YWwgKz0gdGhpc1tvZmZzZXQgKyBpXSAqIG11bFxuICB9XG5cbiAgcmV0dXJuIHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50QkUgPSBmdW5jdGlvbiByZWFkVUludEJFIChvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggfCAwXG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBjaGVja09mZnNldChvZmZzZXQsIGJ5dGVMZW5ndGgsIHRoaXMubGVuZ3RoKVxuICB9XG5cbiAgdmFyIHZhbCA9IHRoaXNbb2Zmc2V0ICsgLS1ieXRlTGVuZ3RoXVxuICB2YXIgbXVsID0gMVxuICB3aGlsZSAoYnl0ZUxlbmd0aCA+IDAgJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB2YWwgKz0gdGhpc1tvZmZzZXQgKyAtLWJ5dGVMZW5ndGhdICogbXVsXG4gIH1cblxuICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQ4ID0gZnVuY3Rpb24gcmVhZFVJbnQ4IChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMSwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiB0aGlzW29mZnNldF1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDE2TEUgPSBmdW5jdGlvbiByZWFkVUludDE2TEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAyLCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIHRoaXNbb2Zmc2V0XSB8ICh0aGlzW29mZnNldCArIDFdIDw8IDgpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQxNkJFID0gZnVuY3Rpb24gcmVhZFVJbnQxNkJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMiwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiAodGhpc1tvZmZzZXRdIDw8IDgpIHwgdGhpc1tvZmZzZXQgKyAxXVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MzJMRSA9IGZ1bmN0aW9uIHJlYWRVSW50MzJMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuXG4gIHJldHVybiAoKHRoaXNbb2Zmc2V0XSkgfFxuICAgICAgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgOCkgfFxuICAgICAgKHRoaXNbb2Zmc2V0ICsgMl0gPDwgMTYpKSArXG4gICAgICAodGhpc1tvZmZzZXQgKyAzXSAqIDB4MTAwMDAwMClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDMyQkUgPSBmdW5jdGlvbiByZWFkVUludDMyQkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcblxuICByZXR1cm4gKHRoaXNbb2Zmc2V0XSAqIDB4MTAwMDAwMCkgK1xuICAgICgodGhpc1tvZmZzZXQgKyAxXSA8PCAxNikgfFxuICAgICh0aGlzW29mZnNldCArIDJdIDw8IDgpIHxcbiAgICB0aGlzW29mZnNldCArIDNdKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnRMRSA9IGZ1bmN0aW9uIHJlYWRJbnRMRSAob2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoIHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIGJ5dGVMZW5ndGgsIHRoaXMubGVuZ3RoKVxuXG4gIHZhciB2YWwgPSB0aGlzW29mZnNldF1cbiAgdmFyIG11bCA9IDFcbiAgdmFyIGkgPSAwXG4gIHdoaWxlICgrK2kgPCBieXRlTGVuZ3RoICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdmFsICs9IHRoaXNbb2Zmc2V0ICsgaV0gKiBtdWxcbiAgfVxuICBtdWwgKj0gMHg4MFxuXG4gIGlmICh2YWwgPj0gbXVsKSB2YWwgLT0gTWF0aC5wb3coMiwgOCAqIGJ5dGVMZW5ndGgpXG5cbiAgcmV0dXJuIHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnRCRSA9IGZ1bmN0aW9uIHJlYWRJbnRCRSAob2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoIHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIGJ5dGVMZW5ndGgsIHRoaXMubGVuZ3RoKVxuXG4gIHZhciBpID0gYnl0ZUxlbmd0aFxuICB2YXIgbXVsID0gMVxuICB2YXIgdmFsID0gdGhpc1tvZmZzZXQgKyAtLWldXG4gIHdoaWxlIChpID4gMCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHZhbCArPSB0aGlzW29mZnNldCArIC0taV0gKiBtdWxcbiAgfVxuICBtdWwgKj0gMHg4MFxuXG4gIGlmICh2YWwgPj0gbXVsKSB2YWwgLT0gTWF0aC5wb3coMiwgOCAqIGJ5dGVMZW5ndGgpXG5cbiAgcmV0dXJuIHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQ4ID0gZnVuY3Rpb24gcmVhZEludDggKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAxLCB0aGlzLmxlbmd0aClcbiAgaWYgKCEodGhpc1tvZmZzZXRdICYgMHg4MCkpIHJldHVybiAodGhpc1tvZmZzZXRdKVxuICByZXR1cm4gKCgweGZmIC0gdGhpc1tvZmZzZXRdICsgMSkgKiAtMSlcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MTZMRSA9IGZ1bmN0aW9uIHJlYWRJbnQxNkxFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMiwgdGhpcy5sZW5ndGgpXG4gIHZhciB2YWwgPSB0aGlzW29mZnNldF0gfCAodGhpc1tvZmZzZXQgKyAxXSA8PCA4KVxuICByZXR1cm4gKHZhbCAmIDB4ODAwMCkgPyB2YWwgfCAweEZGRkYwMDAwIDogdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDE2QkUgPSBmdW5jdGlvbiByZWFkSW50MTZCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDIsIHRoaXMubGVuZ3RoKVxuICB2YXIgdmFsID0gdGhpc1tvZmZzZXQgKyAxXSB8ICh0aGlzW29mZnNldF0gPDwgOClcbiAgcmV0dXJuICh2YWwgJiAweDgwMDApID8gdmFsIHwgMHhGRkZGMDAwMCA6IHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQzMkxFID0gZnVuY3Rpb24gcmVhZEludDMyTEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcblxuICByZXR1cm4gKHRoaXNbb2Zmc2V0XSkgfFxuICAgICh0aGlzW29mZnNldCArIDFdIDw8IDgpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAyXSA8PCAxNikgfFxuICAgICh0aGlzW29mZnNldCArIDNdIDw8IDI0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQzMkJFID0gZnVuY3Rpb24gcmVhZEludDMyQkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcblxuICByZXR1cm4gKHRoaXNbb2Zmc2V0XSA8PCAyNCkgfFxuICAgICh0aGlzW29mZnNldCArIDFdIDw8IDE2KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgMl0gPDwgOCkgfFxuICAgICh0aGlzW29mZnNldCArIDNdKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRGbG9hdExFID0gZnVuY3Rpb24gcmVhZEZsb2F0TEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIGllZWU3NTQucmVhZCh0aGlzLCBvZmZzZXQsIHRydWUsIDIzLCA0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRGbG9hdEJFID0gZnVuY3Rpb24gcmVhZEZsb2F0QkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIGllZWU3NTQucmVhZCh0aGlzLCBvZmZzZXQsIGZhbHNlLCAyMywgNClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRG91YmxlTEUgPSBmdW5jdGlvbiByZWFkRG91YmxlTEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA4LCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIGllZWU3NTQucmVhZCh0aGlzLCBvZmZzZXQsIHRydWUsIDUyLCA4KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWREb3VibGVCRSA9IGZ1bmN0aW9uIHJlYWREb3VibGVCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDgsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gaWVlZTc1NC5yZWFkKHRoaXMsIG9mZnNldCwgZmFsc2UsIDUyLCA4KVxufVxuXG5mdW5jdGlvbiBjaGVja0ludCAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBleHQsIG1heCwgbWluKSB7XG4gIGlmICghQnVmZmVyLmlzQnVmZmVyKGJ1ZikpIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wiYnVmZmVyXCIgYXJndW1lbnQgbXVzdCBiZSBhIEJ1ZmZlciBpbnN0YW5jZScpXG4gIGlmICh2YWx1ZSA+IG1heCB8fCB2YWx1ZSA8IG1pbikgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1widmFsdWVcIiBhcmd1bWVudCBpcyBvdXQgb2YgYm91bmRzJylcbiAgaWYgKG9mZnNldCArIGV4dCA+IGJ1Zi5sZW5ndGgpIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbmRleCBvdXQgb2YgcmFuZ2UnKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludExFID0gZnVuY3Rpb24gd3JpdGVVSW50TEUgKHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggfCAwXG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICB2YXIgbWF4Qnl0ZXMgPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aCkgLSAxXG4gICAgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbWF4Qnl0ZXMsIDApXG4gIH1cblxuICB2YXIgbXVsID0gMVxuICB2YXIgaSA9IDBcbiAgdGhpc1tvZmZzZXRdID0gdmFsdWUgJiAweEZGXG4gIHdoaWxlICgrK2kgPCBieXRlTGVuZ3RoICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdGhpc1tvZmZzZXQgKyBpXSA9ICh2YWx1ZSAvIG11bCkgJiAweEZGXG4gIH1cblxuICByZXR1cm4gb2Zmc2V0ICsgYnl0ZUxlbmd0aFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludEJFID0gZnVuY3Rpb24gd3JpdGVVSW50QkUgKHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggfCAwXG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICB2YXIgbWF4Qnl0ZXMgPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aCkgLSAxXG4gICAgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbWF4Qnl0ZXMsIDApXG4gIH1cblxuICB2YXIgaSA9IGJ5dGVMZW5ndGggLSAxXG4gIHZhciBtdWwgPSAxXG4gIHRoaXNbb2Zmc2V0ICsgaV0gPSB2YWx1ZSAmIDB4RkZcbiAgd2hpbGUgKC0taSA+PSAwICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdGhpc1tvZmZzZXQgKyBpXSA9ICh2YWx1ZSAvIG11bCkgJiAweEZGXG4gIH1cblxuICByZXR1cm4gb2Zmc2V0ICsgYnl0ZUxlbmd0aFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDggPSBmdW5jdGlvbiB3cml0ZVVJbnQ4ICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDEsIDB4ZmYsIDApXG4gIGlmICghQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHZhbHVlID0gTWF0aC5mbG9vcih2YWx1ZSlcbiAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgcmV0dXJuIG9mZnNldCArIDFcbn1cblxuZnVuY3Rpb24gb2JqZWN0V3JpdGVVSW50MTYgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuKSB7XG4gIGlmICh2YWx1ZSA8IDApIHZhbHVlID0gMHhmZmZmICsgdmFsdWUgKyAxXG4gIGZvciAodmFyIGkgPSAwLCBqID0gTWF0aC5taW4oYnVmLmxlbmd0aCAtIG9mZnNldCwgMik7IGkgPCBqOyArK2kpIHtcbiAgICBidWZbb2Zmc2V0ICsgaV0gPSAodmFsdWUgJiAoMHhmZiA8PCAoOCAqIChsaXR0bGVFbmRpYW4gPyBpIDogMSAtIGkpKSkpID4+PlxuICAgICAgKGxpdHRsZUVuZGlhbiA/IGkgOiAxIC0gaSkgKiA4XG4gIH1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQxNkxFID0gZnVuY3Rpb24gd3JpdGVVSW50MTZMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAyLCAweGZmZmYsIDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gOClcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQxNih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlKVxuICB9XG4gIHJldHVybiBvZmZzZXQgKyAyXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MTZCRSA9IGZ1bmN0aW9uIHdyaXRlVUludDE2QkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMiwgMHhmZmZmLCAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgPj4+IDgpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MTYodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDJcbn1cblxuZnVuY3Rpb24gb2JqZWN0V3JpdGVVSW50MzIgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuKSB7XG4gIGlmICh2YWx1ZSA8IDApIHZhbHVlID0gMHhmZmZmZmZmZiArIHZhbHVlICsgMVxuICBmb3IgKHZhciBpID0gMCwgaiA9IE1hdGgubWluKGJ1Zi5sZW5ndGggLSBvZmZzZXQsIDQpOyBpIDwgajsgKytpKSB7XG4gICAgYnVmW29mZnNldCArIGldID0gKHZhbHVlID4+PiAobGl0dGxlRW5kaWFuID8gaSA6IDMgLSBpKSAqIDgpICYgMHhmZlxuICB9XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MzJMRSA9IGZ1bmN0aW9uIHdyaXRlVUludDMyTEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgNCwgMHhmZmZmZmZmZiwgMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXQgKyAzXSA9ICh2YWx1ZSA+Pj4gMjQpXG4gICAgdGhpc1tvZmZzZXQgKyAyXSA9ICh2YWx1ZSA+Pj4gMTYpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDMyKHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQzMkJFID0gZnVuY3Rpb24gd3JpdGVVSW50MzJCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCA0LCAweGZmZmZmZmZmLCAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgPj4+IDI0KVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDE2KVxuICAgIHRoaXNbb2Zmc2V0ICsgMl0gPSAodmFsdWUgPj4+IDgpXG4gICAgdGhpc1tvZmZzZXQgKyAzXSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MzIodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludExFID0gZnVuY3Rpb24gd3JpdGVJbnRMRSAodmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgdmFyIGxpbWl0ID0gTWF0aC5wb3coMiwgOCAqIGJ5dGVMZW5ndGggLSAxKVxuXG4gICAgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbGltaXQgLSAxLCAtbGltaXQpXG4gIH1cblxuICB2YXIgaSA9IDBcbiAgdmFyIG11bCA9IDFcbiAgdmFyIHN1YiA9IDBcbiAgdGhpc1tvZmZzZXRdID0gdmFsdWUgJiAweEZGXG4gIHdoaWxlICgrK2kgPCBieXRlTGVuZ3RoICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgaWYgKHZhbHVlIDwgMCAmJiBzdWIgPT09IDAgJiYgdGhpc1tvZmZzZXQgKyBpIC0gMV0gIT09IDApIHtcbiAgICAgIHN1YiA9IDFcbiAgICB9XG4gICAgdGhpc1tvZmZzZXQgKyBpXSA9ICgodmFsdWUgLyBtdWwpID4+IDApIC0gc3ViICYgMHhGRlxuICB9XG5cbiAgcmV0dXJuIG9mZnNldCArIGJ5dGVMZW5ndGhcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludEJFID0gZnVuY3Rpb24gd3JpdGVJbnRCRSAodmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgdmFyIGxpbWl0ID0gTWF0aC5wb3coMiwgOCAqIGJ5dGVMZW5ndGggLSAxKVxuXG4gICAgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbGltaXQgLSAxLCAtbGltaXQpXG4gIH1cblxuICB2YXIgaSA9IGJ5dGVMZW5ndGggLSAxXG4gIHZhciBtdWwgPSAxXG4gIHZhciBzdWIgPSAwXG4gIHRoaXNbb2Zmc2V0ICsgaV0gPSB2YWx1ZSAmIDB4RkZcbiAgd2hpbGUgKC0taSA+PSAwICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgaWYgKHZhbHVlIDwgMCAmJiBzdWIgPT09IDAgJiYgdGhpc1tvZmZzZXQgKyBpICsgMV0gIT09IDApIHtcbiAgICAgIHN1YiA9IDFcbiAgICB9XG4gICAgdGhpc1tvZmZzZXQgKyBpXSA9ICgodmFsdWUgLyBtdWwpID4+IDApIC0gc3ViICYgMHhGRlxuICB9XG5cbiAgcmV0dXJuIG9mZnNldCArIGJ5dGVMZW5ndGhcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDggPSBmdW5jdGlvbiB3cml0ZUludDggKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMSwgMHg3ZiwgLTB4ODApXG4gIGlmICghQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHZhbHVlID0gTWF0aC5mbG9vcih2YWx1ZSlcbiAgaWYgKHZhbHVlIDwgMCkgdmFsdWUgPSAweGZmICsgdmFsdWUgKyAxXG4gIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIHJldHVybiBvZmZzZXQgKyAxXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQxNkxFID0gZnVuY3Rpb24gd3JpdGVJbnQxNkxFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDIsIDB4N2ZmZiwgLTB4ODAwMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiA4KVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDE2KHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDJcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDE2QkUgPSBmdW5jdGlvbiB3cml0ZUludDE2QkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMiwgMHg3ZmZmLCAtMHg4MDAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgPj4+IDgpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MTYodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDJcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDMyTEUgPSBmdW5jdGlvbiB3cml0ZUludDMyTEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgNCwgMHg3ZmZmZmZmZiwgLTB4ODAwMDAwMDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldCArIDJdID0gKHZhbHVlID4+PiAxNilcbiAgICB0aGlzW29mZnNldCArIDNdID0gKHZhbHVlID4+PiAyNClcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQzMih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlKVxuICB9XG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQzMkJFID0gZnVuY3Rpb24gd3JpdGVJbnQzMkJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDQsIDB4N2ZmZmZmZmYsIC0weDgwMDAwMDAwKVxuICBpZiAodmFsdWUgPCAwKSB2YWx1ZSA9IDB4ZmZmZmZmZmYgKyB2YWx1ZSArIDFcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlID4+PiAyNClcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiAxNilcbiAgICB0aGlzW29mZnNldCArIDJdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0ICsgM10gPSAodmFsdWUgJiAweGZmKVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDMyKHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlKVxuICB9XG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbmZ1bmN0aW9uIGNoZWNrSUVFRTc1NCAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBleHQsIG1heCwgbWluKSB7XG4gIGlmIChvZmZzZXQgKyBleHQgPiBidWYubGVuZ3RoKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW5kZXggb3V0IG9mIHJhbmdlJylcbiAgaWYgKG9mZnNldCA8IDApIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbmRleCBvdXQgb2YgcmFuZ2UnKVxufVxuXG5mdW5jdGlvbiB3cml0ZUZsb2F0IChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGNoZWNrSUVFRTc1NChidWYsIHZhbHVlLCBvZmZzZXQsIDQsIDMuNDAyODIzNDY2Mzg1Mjg4NmUrMzgsIC0zLjQwMjgyMzQ2NjM4NTI4ODZlKzM4KVxuICB9XG4gIGllZWU3NTQud3JpdGUoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIDIzLCA0KVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRmxvYXRMRSA9IGZ1bmN0aW9uIHdyaXRlRmxvYXRMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIHdyaXRlRmxvYXQodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVGbG9hdEJFID0gZnVuY3Rpb24gd3JpdGVGbG9hdEJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gd3JpdGVGbG9hdCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbmZ1bmN0aW9uIHdyaXRlRG91YmxlIChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGNoZWNrSUVFRTc1NChidWYsIHZhbHVlLCBvZmZzZXQsIDgsIDEuNzk3NjkzMTM0ODYyMzE1N0UrMzA4LCAtMS43OTc2OTMxMzQ4NjIzMTU3RSszMDgpXG4gIH1cbiAgaWVlZTc1NC53cml0ZShidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgNTIsIDgpXG4gIHJldHVybiBvZmZzZXQgKyA4XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVEb3VibGVMRSA9IGZ1bmN0aW9uIHdyaXRlRG91YmxlTEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiB3cml0ZURvdWJsZSh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZURvdWJsZUJFID0gZnVuY3Rpb24gd3JpdGVEb3VibGVCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIHdyaXRlRG91YmxlKHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuLy8gY29weSh0YXJnZXRCdWZmZXIsIHRhcmdldFN0YXJ0PTAsIHNvdXJjZVN0YXJ0PTAsIHNvdXJjZUVuZD1idWZmZXIubGVuZ3RoKVxuQnVmZmVyLnByb3RvdHlwZS5jb3B5ID0gZnVuY3Rpb24gY29weSAodGFyZ2V0LCB0YXJnZXRTdGFydCwgc3RhcnQsIGVuZCkge1xuICBpZiAoIXN0YXJ0KSBzdGFydCA9IDBcbiAgaWYgKCFlbmQgJiYgZW5kICE9PSAwKSBlbmQgPSB0aGlzLmxlbmd0aFxuICBpZiAodGFyZ2V0U3RhcnQgPj0gdGFyZ2V0Lmxlbmd0aCkgdGFyZ2V0U3RhcnQgPSB0YXJnZXQubGVuZ3RoXG4gIGlmICghdGFyZ2V0U3RhcnQpIHRhcmdldFN0YXJ0ID0gMFxuICBpZiAoZW5kID4gMCAmJiBlbmQgPCBzdGFydCkgZW5kID0gc3RhcnRcblxuICAvLyBDb3B5IDAgYnl0ZXM7IHdlJ3JlIGRvbmVcbiAgaWYgKGVuZCA9PT0gc3RhcnQpIHJldHVybiAwXG4gIGlmICh0YXJnZXQubGVuZ3RoID09PSAwIHx8IHRoaXMubGVuZ3RoID09PSAwKSByZXR1cm4gMFxuXG4gIC8vIEZhdGFsIGVycm9yIGNvbmRpdGlvbnNcbiAgaWYgKHRhcmdldFN0YXJ0IDwgMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCd0YXJnZXRTdGFydCBvdXQgb2YgYm91bmRzJylcbiAgfVxuICBpZiAoc3RhcnQgPCAwIHx8IHN0YXJ0ID49IHRoaXMubGVuZ3RoKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignc291cmNlU3RhcnQgb3V0IG9mIGJvdW5kcycpXG4gIGlmIChlbmQgPCAwKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignc291cmNlRW5kIG91dCBvZiBib3VuZHMnKVxuXG4gIC8vIEFyZSB3ZSBvb2I/XG4gIGlmIChlbmQgPiB0aGlzLmxlbmd0aCkgZW5kID0gdGhpcy5sZW5ndGhcbiAgaWYgKHRhcmdldC5sZW5ndGggLSB0YXJnZXRTdGFydCA8IGVuZCAtIHN0YXJ0KSB7XG4gICAgZW5kID0gdGFyZ2V0Lmxlbmd0aCAtIHRhcmdldFN0YXJ0ICsgc3RhcnRcbiAgfVxuXG4gIHZhciBsZW4gPSBlbmQgLSBzdGFydFxuICB2YXIgaVxuXG4gIGlmICh0aGlzID09PSB0YXJnZXQgJiYgc3RhcnQgPCB0YXJnZXRTdGFydCAmJiB0YXJnZXRTdGFydCA8IGVuZCkge1xuICAgIC8vIGRlc2NlbmRpbmcgY29weSBmcm9tIGVuZFxuICAgIGZvciAoaSA9IGxlbiAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICB0YXJnZXRbaSArIHRhcmdldFN0YXJ0XSA9IHRoaXNbaSArIHN0YXJ0XVxuICAgIH1cbiAgfSBlbHNlIGlmIChsZW4gPCAxMDAwIHx8ICFCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIC8vIGFzY2VuZGluZyBjb3B5IGZyb20gc3RhcnRcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgIHRhcmdldFtpICsgdGFyZ2V0U3RhcnRdID0gdGhpc1tpICsgc3RhcnRdXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIFVpbnQ4QXJyYXkucHJvdG90eXBlLnNldC5jYWxsKFxuICAgICAgdGFyZ2V0LFxuICAgICAgdGhpcy5zdWJhcnJheShzdGFydCwgc3RhcnQgKyBsZW4pLFxuICAgICAgdGFyZ2V0U3RhcnRcbiAgICApXG4gIH1cblxuICByZXR1cm4gbGVuXG59XG5cbi8vIFVzYWdlOlxuLy8gICAgYnVmZmVyLmZpbGwobnVtYmVyWywgb2Zmc2V0WywgZW5kXV0pXG4vLyAgICBidWZmZXIuZmlsbChidWZmZXJbLCBvZmZzZXRbLCBlbmRdXSlcbi8vICAgIGJ1ZmZlci5maWxsKHN0cmluZ1ssIG9mZnNldFssIGVuZF1dWywgZW5jb2RpbmddKVxuQnVmZmVyLnByb3RvdHlwZS5maWxsID0gZnVuY3Rpb24gZmlsbCAodmFsLCBzdGFydCwgZW5kLCBlbmNvZGluZykge1xuICAvLyBIYW5kbGUgc3RyaW5nIGNhc2VzOlxuICBpZiAodHlwZW9mIHZhbCA9PT0gJ3N0cmluZycpIHtcbiAgICBpZiAodHlwZW9mIHN0YXJ0ID09PSAnc3RyaW5nJykge1xuICAgICAgZW5jb2RpbmcgPSBzdGFydFxuICAgICAgc3RhcnQgPSAwXG4gICAgICBlbmQgPSB0aGlzLmxlbmd0aFxuICAgIH0gZWxzZSBpZiAodHlwZW9mIGVuZCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGVuY29kaW5nID0gZW5kXG4gICAgICBlbmQgPSB0aGlzLmxlbmd0aFxuICAgIH1cbiAgICBpZiAodmFsLmxlbmd0aCA9PT0gMSkge1xuICAgICAgdmFyIGNvZGUgPSB2YWwuY2hhckNvZGVBdCgwKVxuICAgICAgaWYgKGNvZGUgPCAyNTYpIHtcbiAgICAgICAgdmFsID0gY29kZVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoZW5jb2RpbmcgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2YgZW5jb2RpbmcgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdlbmNvZGluZyBtdXN0IGJlIGEgc3RyaW5nJylcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBlbmNvZGluZyA9PT0gJ3N0cmluZycgJiYgIUJ1ZmZlci5pc0VuY29kaW5nKGVuY29kaW5nKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVW5rbm93biBlbmNvZGluZzogJyArIGVuY29kaW5nKVxuICAgIH1cbiAgfSBlbHNlIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJykge1xuICAgIHZhbCA9IHZhbCAmIDI1NVxuICB9XG5cbiAgLy8gSW52YWxpZCByYW5nZXMgYXJlIG5vdCBzZXQgdG8gYSBkZWZhdWx0LCBzbyBjYW4gcmFuZ2UgY2hlY2sgZWFybHkuXG4gIGlmIChzdGFydCA8IDAgfHwgdGhpcy5sZW5ndGggPCBzdGFydCB8fCB0aGlzLmxlbmd0aCA8IGVuZCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdPdXQgb2YgcmFuZ2UgaW5kZXgnKVxuICB9XG5cbiAgaWYgKGVuZCA8PSBzdGFydCkge1xuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBzdGFydCA9IHN0YXJ0ID4+PiAwXG4gIGVuZCA9IGVuZCA9PT0gdW5kZWZpbmVkID8gdGhpcy5sZW5ndGggOiBlbmQgPj4+IDBcblxuICBpZiAoIXZhbCkgdmFsID0gMFxuXG4gIHZhciBpXG4gIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJykge1xuICAgIGZvciAoaSA9IHN0YXJ0OyBpIDwgZW5kOyArK2kpIHtcbiAgICAgIHRoaXNbaV0gPSB2YWxcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdmFyIGJ5dGVzID0gQnVmZmVyLmlzQnVmZmVyKHZhbClcbiAgICAgID8gdmFsXG4gICAgICA6IHV0ZjhUb0J5dGVzKG5ldyBCdWZmZXIodmFsLCBlbmNvZGluZykudG9TdHJpbmcoKSlcbiAgICB2YXIgbGVuID0gYnl0ZXMubGVuZ3RoXG4gICAgZm9yIChpID0gMDsgaSA8IGVuZCAtIHN0YXJ0OyArK2kpIHtcbiAgICAgIHRoaXNbaSArIHN0YXJ0XSA9IGJ5dGVzW2kgJSBsZW5dXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRoaXNcbn1cblxuLy8gSEVMUEVSIEZVTkNUSU9OU1xuLy8gPT09PT09PT09PT09PT09PVxuXG52YXIgSU5WQUxJRF9CQVNFNjRfUkUgPSAvW14rXFwvMC05QS1aYS16LV9dL2dcblxuZnVuY3Rpb24gYmFzZTY0Y2xlYW4gKHN0cikge1xuICAvLyBOb2RlIHN0cmlwcyBvdXQgaW52YWxpZCBjaGFyYWN0ZXJzIGxpa2UgXFxuIGFuZCBcXHQgZnJvbSB0aGUgc3RyaW5nLCBiYXNlNjQtanMgZG9lcyBub3RcbiAgc3RyID0gc3RyaW5ndHJpbShzdHIpLnJlcGxhY2UoSU5WQUxJRF9CQVNFNjRfUkUsICcnKVxuICAvLyBOb2RlIGNvbnZlcnRzIHN0cmluZ3Mgd2l0aCBsZW5ndGggPCAyIHRvICcnXG4gIGlmIChzdHIubGVuZ3RoIDwgMikgcmV0dXJuICcnXG4gIC8vIE5vZGUgYWxsb3dzIGZvciBub24tcGFkZGVkIGJhc2U2NCBzdHJpbmdzIChtaXNzaW5nIHRyYWlsaW5nID09PSksIGJhc2U2NC1qcyBkb2VzIG5vdFxuICB3aGlsZSAoc3RyLmxlbmd0aCAlIDQgIT09IDApIHtcbiAgICBzdHIgPSBzdHIgKyAnPSdcbiAgfVxuICByZXR1cm4gc3RyXG59XG5cbmZ1bmN0aW9uIHN0cmluZ3RyaW0gKHN0cikge1xuICBpZiAoc3RyLnRyaW0pIHJldHVybiBzdHIudHJpbSgpXG4gIHJldHVybiBzdHIucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgJycpXG59XG5cbmZ1bmN0aW9uIHRvSGV4IChuKSB7XG4gIGlmIChuIDwgMTYpIHJldHVybiAnMCcgKyBuLnRvU3RyaW5nKDE2KVxuICByZXR1cm4gbi50b1N0cmluZygxNilcbn1cblxuZnVuY3Rpb24gdXRmOFRvQnl0ZXMgKHN0cmluZywgdW5pdHMpIHtcbiAgdW5pdHMgPSB1bml0cyB8fCBJbmZpbml0eVxuICB2YXIgY29kZVBvaW50XG4gIHZhciBsZW5ndGggPSBzdHJpbmcubGVuZ3RoXG4gIHZhciBsZWFkU3Vycm9nYXRlID0gbnVsbFxuICB2YXIgYnl0ZXMgPSBbXVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyArK2kpIHtcbiAgICBjb2RlUG9pbnQgPSBzdHJpbmcuY2hhckNvZGVBdChpKVxuXG4gICAgLy8gaXMgc3Vycm9nYXRlIGNvbXBvbmVudFxuICAgIGlmIChjb2RlUG9pbnQgPiAweEQ3RkYgJiYgY29kZVBvaW50IDwgMHhFMDAwKSB7XG4gICAgICAvLyBsYXN0IGNoYXIgd2FzIGEgbGVhZFxuICAgICAgaWYgKCFsZWFkU3Vycm9nYXRlKSB7XG4gICAgICAgIC8vIG5vIGxlYWQgeWV0XG4gICAgICAgIGlmIChjb2RlUG9pbnQgPiAweERCRkYpIHtcbiAgICAgICAgICAvLyB1bmV4cGVjdGVkIHRyYWlsXG4gICAgICAgICAgaWYgKCh1bml0cyAtPSAzKSA+IC0xKSBieXRlcy5wdXNoKDB4RUYsIDB4QkYsIDB4QkQpXG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfSBlbHNlIGlmIChpICsgMSA9PT0gbGVuZ3RoKSB7XG4gICAgICAgICAgLy8gdW5wYWlyZWQgbGVhZFxuICAgICAgICAgIGlmICgodW5pdHMgLT0gMykgPiAtMSkgYnl0ZXMucHVzaCgweEVGLCAweEJGLCAweEJEKVxuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH1cblxuICAgICAgICAvLyB2YWxpZCBsZWFkXG4gICAgICAgIGxlYWRTdXJyb2dhdGUgPSBjb2RlUG9pbnRcblxuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICAvLyAyIGxlYWRzIGluIGEgcm93XG4gICAgICBpZiAoY29kZVBvaW50IDwgMHhEQzAwKSB7XG4gICAgICAgIGlmICgodW5pdHMgLT0gMykgPiAtMSkgYnl0ZXMucHVzaCgweEVGLCAweEJGLCAweEJEKVxuICAgICAgICBsZWFkU3Vycm9nYXRlID0gY29kZVBvaW50XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIC8vIHZhbGlkIHN1cnJvZ2F0ZSBwYWlyXG4gICAgICBjb2RlUG9pbnQgPSAobGVhZFN1cnJvZ2F0ZSAtIDB4RDgwMCA8PCAxMCB8IGNvZGVQb2ludCAtIDB4REMwMCkgKyAweDEwMDAwXG4gICAgfSBlbHNlIGlmIChsZWFkU3Vycm9nYXRlKSB7XG4gICAgICAvLyB2YWxpZCBibXAgY2hhciwgYnV0IGxhc3QgY2hhciB3YXMgYSBsZWFkXG4gICAgICBpZiAoKHVuaXRzIC09IDMpID4gLTEpIGJ5dGVzLnB1c2goMHhFRiwgMHhCRiwgMHhCRClcbiAgICB9XG5cbiAgICBsZWFkU3Vycm9nYXRlID0gbnVsbFxuXG4gICAgLy8gZW5jb2RlIHV0ZjhcbiAgICBpZiAoY29kZVBvaW50IDwgMHg4MCkge1xuICAgICAgaWYgKCh1bml0cyAtPSAxKSA8IDApIGJyZWFrXG4gICAgICBieXRlcy5wdXNoKGNvZGVQb2ludClcbiAgICB9IGVsc2UgaWYgKGNvZGVQb2ludCA8IDB4ODAwKSB7XG4gICAgICBpZiAoKHVuaXRzIC09IDIpIDwgMCkgYnJlYWtcbiAgICAgIGJ5dGVzLnB1c2goXG4gICAgICAgIGNvZGVQb2ludCA+PiAweDYgfCAweEMwLFxuICAgICAgICBjb2RlUG9pbnQgJiAweDNGIHwgMHg4MFxuICAgICAgKVxuICAgIH0gZWxzZSBpZiAoY29kZVBvaW50IDwgMHgxMDAwMCkge1xuICAgICAgaWYgKCh1bml0cyAtPSAzKSA8IDApIGJyZWFrXG4gICAgICBieXRlcy5wdXNoKFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHhDIHwgMHhFMCxcbiAgICAgICAgY29kZVBvaW50ID4+IDB4NiAmIDB4M0YgfCAweDgwLFxuICAgICAgICBjb2RlUG9pbnQgJiAweDNGIHwgMHg4MFxuICAgICAgKVxuICAgIH0gZWxzZSBpZiAoY29kZVBvaW50IDwgMHgxMTAwMDApIHtcbiAgICAgIGlmICgodW5pdHMgLT0gNCkgPCAwKSBicmVha1xuICAgICAgYnl0ZXMucHVzaChcbiAgICAgICAgY29kZVBvaW50ID4+IDB4MTIgfCAweEYwLFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHhDICYgMHgzRiB8IDB4ODAsXG4gICAgICAgIGNvZGVQb2ludCA+PiAweDYgJiAweDNGIHwgMHg4MCxcbiAgICAgICAgY29kZVBvaW50ICYgMHgzRiB8IDB4ODBcbiAgICAgIClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGNvZGUgcG9pbnQnKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBieXRlc1xufVxuXG5mdW5jdGlvbiBhc2NpaVRvQnl0ZXMgKHN0cikge1xuICB2YXIgYnl0ZUFycmF5ID0gW11cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyArK2kpIHtcbiAgICAvLyBOb2RlJ3MgY29kZSBzZWVtcyB0byBiZSBkb2luZyB0aGlzIGFuZCBub3QgJiAweDdGLi5cbiAgICBieXRlQXJyYXkucHVzaChzdHIuY2hhckNvZGVBdChpKSAmIDB4RkYpXG4gIH1cbiAgcmV0dXJuIGJ5dGVBcnJheVxufVxuXG5mdW5jdGlvbiB1dGYxNmxlVG9CeXRlcyAoc3RyLCB1bml0cykge1xuICB2YXIgYywgaGksIGxvXG4gIHZhciBieXRlQXJyYXkgPSBbXVxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0ci5sZW5ndGg7ICsraSkge1xuICAgIGlmICgodW5pdHMgLT0gMikgPCAwKSBicmVha1xuXG4gICAgYyA9IHN0ci5jaGFyQ29kZUF0KGkpXG4gICAgaGkgPSBjID4+IDhcbiAgICBsbyA9IGMgJSAyNTZcbiAgICBieXRlQXJyYXkucHVzaChsbylcbiAgICBieXRlQXJyYXkucHVzaChoaSlcbiAgfVxuXG4gIHJldHVybiBieXRlQXJyYXlcbn1cblxuZnVuY3Rpb24gYmFzZTY0VG9CeXRlcyAoc3RyKSB7XG4gIHJldHVybiBiYXNlNjQudG9CeXRlQXJyYXkoYmFzZTY0Y2xlYW4oc3RyKSlcbn1cblxuZnVuY3Rpb24gYmxpdEJ1ZmZlciAoc3JjLCBkc3QsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyArK2kpIHtcbiAgICBpZiAoKGkgKyBvZmZzZXQgPj0gZHN0Lmxlbmd0aCkgfHwgKGkgPj0gc3JjLmxlbmd0aCkpIGJyZWFrXG4gICAgZHN0W2kgKyBvZmZzZXRdID0gc3JjW2ldXG4gIH1cbiAgcmV0dXJuIGlcbn1cblxuZnVuY3Rpb24gaXNuYW4gKHZhbCkge1xuICByZXR1cm4gdmFsICE9PSB2YWwgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1zZWxmLWNvbXBhcmVcbn1cblxuLyogV0VCUEFDSyBWQVIgSU5KRUNUSU9OICovfS5jYWxsKHRoaXMsIF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vLi4vd2VicGFjay9idWlsZGluL2dsb2JhbC5qcyAqLyBcIi4uLy4uL25vZGVfbW9kdWxlcy93ZWJwYWNrL2J1aWxkaW4vZ2xvYmFsLmpzXCIpKSlcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2J1ZmZlci9ub2RlX21vZHVsZXMvaXNhcnJheS9pbmRleC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvYnVmZmVyL25vZGVfbW9kdWxlcy9pc2FycmF5L2luZGV4LmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG52YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIChhcnIpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoYXJyKSA9PSAnW29iamVjdCBBcnJheV0nO1xufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuLi8uLi9ub2RlX21vZHVsZXMvZnVuY3Rpb25hbC1yZWQtYmxhY2stdHJlZS9yYnRyZWUuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvZnVuY3Rpb25hbC1yZWQtYmxhY2stdHJlZS9yYnRyZWUuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVSQlRyZWVcblxudmFyIFJFRCAgID0gMFxudmFyIEJMQUNLID0gMVxuXG5mdW5jdGlvbiBSQk5vZGUoY29sb3IsIGtleSwgdmFsdWUsIGxlZnQsIHJpZ2h0LCBjb3VudCkge1xuICB0aGlzLl9jb2xvciA9IGNvbG9yXG4gIHRoaXMua2V5ID0ga2V5XG4gIHRoaXMudmFsdWUgPSB2YWx1ZVxuICB0aGlzLmxlZnQgPSBsZWZ0XG4gIHRoaXMucmlnaHQgPSByaWdodFxuICB0aGlzLl9jb3VudCA9IGNvdW50XG59XG5cbmZ1bmN0aW9uIGNsb25lTm9kZShub2RlKSB7XG4gIHJldHVybiBuZXcgUkJOb2RlKG5vZGUuX2NvbG9yLCBub2RlLmtleSwgbm9kZS52YWx1ZSwgbm9kZS5sZWZ0LCBub2RlLnJpZ2h0LCBub2RlLl9jb3VudClcbn1cblxuZnVuY3Rpb24gcmVwYWludChjb2xvciwgbm9kZSkge1xuICByZXR1cm4gbmV3IFJCTm9kZShjb2xvciwgbm9kZS5rZXksIG5vZGUudmFsdWUsIG5vZGUubGVmdCwgbm9kZS5yaWdodCwgbm9kZS5fY291bnQpXG59XG5cbmZ1bmN0aW9uIHJlY291bnQobm9kZSkge1xuICBub2RlLl9jb3VudCA9IDEgKyAobm9kZS5sZWZ0ID8gbm9kZS5sZWZ0Ll9jb3VudCA6IDApICsgKG5vZGUucmlnaHQgPyBub2RlLnJpZ2h0Ll9jb3VudCA6IDApXG59XG5cbmZ1bmN0aW9uIFJlZEJsYWNrVHJlZShjb21wYXJlLCByb290KSB7XG4gIHRoaXMuX2NvbXBhcmUgPSBjb21wYXJlXG4gIHRoaXMucm9vdCA9IHJvb3Rcbn1cblxudmFyIHByb3RvID0gUmVkQmxhY2tUcmVlLnByb3RvdHlwZVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkocHJvdG8sIFwia2V5c1wiLCB7XG4gIGdldDogZnVuY3Rpb24oKSB7XG4gICAgdmFyIHJlc3VsdCA9IFtdXG4gICAgdGhpcy5mb3JFYWNoKGZ1bmN0aW9uKGssdikge1xuICAgICAgcmVzdWx0LnB1c2goaylcbiAgICB9KVxuICAgIHJldHVybiByZXN1bHRcbiAgfVxufSlcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3RvLCBcInZhbHVlc1wiLCB7XG4gIGdldDogZnVuY3Rpb24oKSB7XG4gICAgdmFyIHJlc3VsdCA9IFtdXG4gICAgdGhpcy5mb3JFYWNoKGZ1bmN0aW9uKGssdikge1xuICAgICAgcmVzdWx0LnB1c2godilcbiAgICB9KVxuICAgIHJldHVybiByZXN1bHRcbiAgfVxufSlcblxuLy9SZXR1cm5zIHRoZSBudW1iZXIgb2Ygbm9kZXMgaW4gdGhlIHRyZWVcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm90bywgXCJsZW5ndGhcIiwge1xuICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgIGlmKHRoaXMucm9vdCkge1xuICAgICAgcmV0dXJuIHRoaXMucm9vdC5fY291bnRcbiAgICB9XG4gICAgcmV0dXJuIDBcbiAgfVxufSlcblxuLy9JbnNlcnQgYSBuZXcgaXRlbSBpbnRvIHRoZSB0cmVlXG5wcm90by5pbnNlcnQgPSBmdW5jdGlvbihrZXksIHZhbHVlKSB7XG4gIHZhciBjbXAgPSB0aGlzLl9jb21wYXJlXG4gIC8vRmluZCBwb2ludCB0byBpbnNlcnQgbmV3IG5vZGUgYXRcbiAgdmFyIG4gPSB0aGlzLnJvb3RcbiAgdmFyIG5fc3RhY2sgPSBbXVxuICB2YXIgZF9zdGFjayA9IFtdXG4gIHdoaWxlKG4pIHtcbiAgICB2YXIgZCA9IGNtcChrZXksIG4ua2V5KVxuICAgIG5fc3RhY2sucHVzaChuKVxuICAgIGRfc3RhY2sucHVzaChkKVxuICAgIGlmKGQgPD0gMCkge1xuICAgICAgbiA9IG4ubGVmdFxuICAgIH0gZWxzZSB7XG4gICAgICBuID0gbi5yaWdodFxuICAgIH1cbiAgfVxuICAvL1JlYnVpbGQgcGF0aCB0byBsZWFmIG5vZGVcbiAgbl9zdGFjay5wdXNoKG5ldyBSQk5vZGUoUkVELCBrZXksIHZhbHVlLCBudWxsLCBudWxsLCAxKSlcbiAgZm9yKHZhciBzPW5fc3RhY2subGVuZ3RoLTI7IHM+PTA7IC0tcykge1xuICAgIHZhciBuID0gbl9zdGFja1tzXVxuICAgIGlmKGRfc3RhY2tbc10gPD0gMCkge1xuICAgICAgbl9zdGFja1tzXSA9IG5ldyBSQk5vZGUobi5fY29sb3IsIG4ua2V5LCBuLnZhbHVlLCBuX3N0YWNrW3MrMV0sIG4ucmlnaHQsIG4uX2NvdW50KzEpXG4gICAgfSBlbHNlIHtcbiAgICAgIG5fc3RhY2tbc10gPSBuZXcgUkJOb2RlKG4uX2NvbG9yLCBuLmtleSwgbi52YWx1ZSwgbi5sZWZ0LCBuX3N0YWNrW3MrMV0sIG4uX2NvdW50KzEpXG4gICAgfVxuICB9XG4gIC8vUmViYWxhbmNlIHRyZWUgdXNpbmcgcm90YXRpb25zXG4gIC8vY29uc29sZS5sb2coXCJzdGFydCBpbnNlcnRcIiwga2V5LCBkX3N0YWNrKVxuICBmb3IodmFyIHM9bl9zdGFjay5sZW5ndGgtMTsgcz4xOyAtLXMpIHtcbiAgICB2YXIgcCA9IG5fc3RhY2tbcy0xXVxuICAgIHZhciBuID0gbl9zdGFja1tzXVxuICAgIGlmKHAuX2NvbG9yID09PSBCTEFDSyB8fCBuLl9jb2xvciA9PT0gQkxBQ0spIHtcbiAgICAgIGJyZWFrXG4gICAgfVxuICAgIHZhciBwcCA9IG5fc3RhY2tbcy0yXVxuICAgIGlmKHBwLmxlZnQgPT09IHApIHtcbiAgICAgIGlmKHAubGVmdCA9PT0gbikge1xuICAgICAgICB2YXIgeSA9IHBwLnJpZ2h0XG4gICAgICAgIGlmKHkgJiYgeS5fY29sb3IgPT09IFJFRCkge1xuICAgICAgICAgIC8vY29uc29sZS5sb2coXCJMTHJcIilcbiAgICAgICAgICBwLl9jb2xvciA9IEJMQUNLXG4gICAgICAgICAgcHAucmlnaHQgPSByZXBhaW50KEJMQUNLLCB5KVxuICAgICAgICAgIHBwLl9jb2xvciA9IFJFRFxuICAgICAgICAgIHMgLT0gMVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vY29uc29sZS5sb2coXCJMTGJcIilcbiAgICAgICAgICBwcC5fY29sb3IgPSBSRURcbiAgICAgICAgICBwcC5sZWZ0ID0gcC5yaWdodFxuICAgICAgICAgIHAuX2NvbG9yID0gQkxBQ0tcbiAgICAgICAgICBwLnJpZ2h0ID0gcHBcbiAgICAgICAgICBuX3N0YWNrW3MtMl0gPSBwXG4gICAgICAgICAgbl9zdGFja1tzLTFdID0gblxuICAgICAgICAgIHJlY291bnQocHApXG4gICAgICAgICAgcmVjb3VudChwKVxuICAgICAgICAgIGlmKHMgPj0gMykge1xuICAgICAgICAgICAgdmFyIHBwcCA9IG5fc3RhY2tbcy0zXVxuICAgICAgICAgICAgaWYocHBwLmxlZnQgPT09IHBwKSB7XG4gICAgICAgICAgICAgIHBwcC5sZWZ0ID0gcFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcHBwLnJpZ2h0ID0gcFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgeSA9IHBwLnJpZ2h0XG4gICAgICAgIGlmKHkgJiYgeS5fY29sb3IgPT09IFJFRCkge1xuICAgICAgICAgIC8vY29uc29sZS5sb2coXCJMUnJcIilcbiAgICAgICAgICBwLl9jb2xvciA9IEJMQUNLXG4gICAgICAgICAgcHAucmlnaHQgPSByZXBhaW50KEJMQUNLLCB5KVxuICAgICAgICAgIHBwLl9jb2xvciA9IFJFRFxuICAgICAgICAgIHMgLT0gMVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vY29uc29sZS5sb2coXCJMUmJcIilcbiAgICAgICAgICBwLnJpZ2h0ID0gbi5sZWZ0XG4gICAgICAgICAgcHAuX2NvbG9yID0gUkVEXG4gICAgICAgICAgcHAubGVmdCA9IG4ucmlnaHRcbiAgICAgICAgICBuLl9jb2xvciA9IEJMQUNLXG4gICAgICAgICAgbi5sZWZ0ID0gcFxuICAgICAgICAgIG4ucmlnaHQgPSBwcFxuICAgICAgICAgIG5fc3RhY2tbcy0yXSA9IG5cbiAgICAgICAgICBuX3N0YWNrW3MtMV0gPSBwXG4gICAgICAgICAgcmVjb3VudChwcClcbiAgICAgICAgICByZWNvdW50KHApXG4gICAgICAgICAgcmVjb3VudChuKVxuICAgICAgICAgIGlmKHMgPj0gMykge1xuICAgICAgICAgICAgdmFyIHBwcCA9IG5fc3RhY2tbcy0zXVxuICAgICAgICAgICAgaWYocHBwLmxlZnQgPT09IHBwKSB7XG4gICAgICAgICAgICAgIHBwcC5sZWZ0ID0gblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcHBwLnJpZ2h0ID0gblxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmKHAucmlnaHQgPT09IG4pIHtcbiAgICAgICAgdmFyIHkgPSBwcC5sZWZ0XG4gICAgICAgIGlmKHkgJiYgeS5fY29sb3IgPT09IFJFRCkge1xuICAgICAgICAgIC8vY29uc29sZS5sb2coXCJSUnJcIiwgeS5rZXkpXG4gICAgICAgICAgcC5fY29sb3IgPSBCTEFDS1xuICAgICAgICAgIHBwLmxlZnQgPSByZXBhaW50KEJMQUNLLCB5KVxuICAgICAgICAgIHBwLl9jb2xvciA9IFJFRFxuICAgICAgICAgIHMgLT0gMVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vY29uc29sZS5sb2coXCJSUmJcIilcbiAgICAgICAgICBwcC5fY29sb3IgPSBSRURcbiAgICAgICAgICBwcC5yaWdodCA9IHAubGVmdFxuICAgICAgICAgIHAuX2NvbG9yID0gQkxBQ0tcbiAgICAgICAgICBwLmxlZnQgPSBwcFxuICAgICAgICAgIG5fc3RhY2tbcy0yXSA9IHBcbiAgICAgICAgICBuX3N0YWNrW3MtMV0gPSBuXG4gICAgICAgICAgcmVjb3VudChwcClcbiAgICAgICAgICByZWNvdW50KHApXG4gICAgICAgICAgaWYocyA+PSAzKSB7XG4gICAgICAgICAgICB2YXIgcHBwID0gbl9zdGFja1tzLTNdXG4gICAgICAgICAgICBpZihwcHAucmlnaHQgPT09IHBwKSB7XG4gICAgICAgICAgICAgIHBwcC5yaWdodCA9IHBcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHBwcC5sZWZ0ID0gcFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgeSA9IHBwLmxlZnRcbiAgICAgICAgaWYoeSAmJiB5Ll9jb2xvciA9PT0gUkVEKSB7XG4gICAgICAgICAgLy9jb25zb2xlLmxvZyhcIlJMclwiKVxuICAgICAgICAgIHAuX2NvbG9yID0gQkxBQ0tcbiAgICAgICAgICBwcC5sZWZ0ID0gcmVwYWludChCTEFDSywgeSlcbiAgICAgICAgICBwcC5fY29sb3IgPSBSRURcbiAgICAgICAgICBzIC09IDFcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiUkxiXCIpXG4gICAgICAgICAgcC5sZWZ0ID0gbi5yaWdodFxuICAgICAgICAgIHBwLl9jb2xvciA9IFJFRFxuICAgICAgICAgIHBwLnJpZ2h0ID0gbi5sZWZ0XG4gICAgICAgICAgbi5fY29sb3IgPSBCTEFDS1xuICAgICAgICAgIG4ucmlnaHQgPSBwXG4gICAgICAgICAgbi5sZWZ0ID0gcHBcbiAgICAgICAgICBuX3N0YWNrW3MtMl0gPSBuXG4gICAgICAgICAgbl9zdGFja1tzLTFdID0gcFxuICAgICAgICAgIHJlY291bnQocHApXG4gICAgICAgICAgcmVjb3VudChwKVxuICAgICAgICAgIHJlY291bnQobilcbiAgICAgICAgICBpZihzID49IDMpIHtcbiAgICAgICAgICAgIHZhciBwcHAgPSBuX3N0YWNrW3MtM11cbiAgICAgICAgICAgIGlmKHBwcC5yaWdodCA9PT0gcHApIHtcbiAgICAgICAgICAgICAgcHBwLnJpZ2h0ID0gblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcHBwLmxlZnQgPSBuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLy9SZXR1cm4gbmV3IHRyZWVcbiAgbl9zdGFja1swXS5fY29sb3IgPSBCTEFDS1xuICByZXR1cm4gbmV3IFJlZEJsYWNrVHJlZShjbXAsIG5fc3RhY2tbMF0pXG59XG5cblxuLy9WaXNpdCBhbGwgbm9kZXMgaW5vcmRlclxuZnVuY3Rpb24gZG9WaXNpdEZ1bGwodmlzaXQsIG5vZGUpIHtcbiAgaWYobm9kZS5sZWZ0KSB7XG4gICAgdmFyIHYgPSBkb1Zpc2l0RnVsbCh2aXNpdCwgbm9kZS5sZWZ0KVxuICAgIGlmKHYpIHsgcmV0dXJuIHYgfVxuICB9XG4gIHZhciB2ID0gdmlzaXQobm9kZS5rZXksIG5vZGUudmFsdWUpXG4gIGlmKHYpIHsgcmV0dXJuIHYgfVxuICBpZihub2RlLnJpZ2h0KSB7XG4gICAgcmV0dXJuIGRvVmlzaXRGdWxsKHZpc2l0LCBub2RlLnJpZ2h0KVxuICB9XG59XG5cbi8vVmlzaXQgaGFsZiBub2RlcyBpbiBvcmRlclxuZnVuY3Rpb24gZG9WaXNpdEhhbGYobG8sIGNvbXBhcmUsIHZpc2l0LCBub2RlKSB7XG4gIHZhciBsID0gY29tcGFyZShsbywgbm9kZS5rZXkpXG4gIGlmKGwgPD0gMCkge1xuICAgIGlmKG5vZGUubGVmdCkge1xuICAgICAgdmFyIHYgPSBkb1Zpc2l0SGFsZihsbywgY29tcGFyZSwgdmlzaXQsIG5vZGUubGVmdClcbiAgICAgIGlmKHYpIHsgcmV0dXJuIHYgfVxuICAgIH1cbiAgICB2YXIgdiA9IHZpc2l0KG5vZGUua2V5LCBub2RlLnZhbHVlKVxuICAgIGlmKHYpIHsgcmV0dXJuIHYgfVxuICB9XG4gIGlmKG5vZGUucmlnaHQpIHtcbiAgICByZXR1cm4gZG9WaXNpdEhhbGYobG8sIGNvbXBhcmUsIHZpc2l0LCBub2RlLnJpZ2h0KVxuICB9XG59XG5cbi8vVmlzaXQgYWxsIG5vZGVzIHdpdGhpbiBhIHJhbmdlXG5mdW5jdGlvbiBkb1Zpc2l0KGxvLCBoaSwgY29tcGFyZSwgdmlzaXQsIG5vZGUpIHtcbiAgdmFyIGwgPSBjb21wYXJlKGxvLCBub2RlLmtleSlcbiAgdmFyIGggPSBjb21wYXJlKGhpLCBub2RlLmtleSlcbiAgdmFyIHZcbiAgaWYobCA8PSAwKSB7XG4gICAgaWYobm9kZS5sZWZ0KSB7XG4gICAgICB2ID0gZG9WaXNpdChsbywgaGksIGNvbXBhcmUsIHZpc2l0LCBub2RlLmxlZnQpXG4gICAgICBpZih2KSB7IHJldHVybiB2IH1cbiAgICB9XG4gICAgaWYoaCA+IDApIHtcbiAgICAgIHYgPSB2aXNpdChub2RlLmtleSwgbm9kZS52YWx1ZSlcbiAgICAgIGlmKHYpIHsgcmV0dXJuIHYgfVxuICAgIH1cbiAgfVxuICBpZihoID4gMCAmJiBub2RlLnJpZ2h0KSB7XG4gICAgcmV0dXJuIGRvVmlzaXQobG8sIGhpLCBjb21wYXJlLCB2aXNpdCwgbm9kZS5yaWdodClcbiAgfVxufVxuXG5cbnByb3RvLmZvckVhY2ggPSBmdW5jdGlvbiByYlRyZWVGb3JFYWNoKHZpc2l0LCBsbywgaGkpIHtcbiAgaWYoIXRoaXMucm9vdCkge1xuICAgIHJldHVyblxuICB9XG4gIHN3aXRjaChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgY2FzZSAxOlxuICAgICAgcmV0dXJuIGRvVmlzaXRGdWxsKHZpc2l0LCB0aGlzLnJvb3QpXG4gICAgYnJlYWtcblxuICAgIGNhc2UgMjpcbiAgICAgIHJldHVybiBkb1Zpc2l0SGFsZihsbywgdGhpcy5fY29tcGFyZSwgdmlzaXQsIHRoaXMucm9vdClcbiAgICBicmVha1xuXG4gICAgY2FzZSAzOlxuICAgICAgaWYodGhpcy5fY29tcGFyZShsbywgaGkpID49IDApIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICByZXR1cm4gZG9WaXNpdChsbywgaGksIHRoaXMuX2NvbXBhcmUsIHZpc2l0LCB0aGlzLnJvb3QpXG4gICAgYnJlYWtcbiAgfVxufVxuXG4vL0ZpcnN0IGl0ZW0gaW4gbGlzdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3RvLCBcImJlZ2luXCIsIHtcbiAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICB2YXIgc3RhY2sgPSBbXVxuICAgIHZhciBuID0gdGhpcy5yb290XG4gICAgd2hpbGUobikge1xuICAgICAgc3RhY2sucHVzaChuKVxuICAgICAgbiA9IG4ubGVmdFxuICAgIH1cbiAgICByZXR1cm4gbmV3IFJlZEJsYWNrVHJlZUl0ZXJhdG9yKHRoaXMsIHN0YWNrKVxuICB9XG59KVxuXG4vL0xhc3QgaXRlbSBpbiBsaXN0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkocHJvdG8sIFwiZW5kXCIsIHtcbiAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICB2YXIgc3RhY2sgPSBbXVxuICAgIHZhciBuID0gdGhpcy5yb290XG4gICAgd2hpbGUobikge1xuICAgICAgc3RhY2sucHVzaChuKVxuICAgICAgbiA9IG4ucmlnaHRcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBSZWRCbGFja1RyZWVJdGVyYXRvcih0aGlzLCBzdGFjaylcbiAgfVxufSlcblxuLy9GaW5kIHRoZSBpdGggaXRlbSBpbiB0aGUgdHJlZVxucHJvdG8uYXQgPSBmdW5jdGlvbihpZHgpIHtcbiAgaWYoaWR4IDwgMCkge1xuICAgIHJldHVybiBuZXcgUmVkQmxhY2tUcmVlSXRlcmF0b3IodGhpcywgW10pXG4gIH1cbiAgdmFyIG4gPSB0aGlzLnJvb3RcbiAgdmFyIHN0YWNrID0gW11cbiAgd2hpbGUodHJ1ZSkge1xuICAgIHN0YWNrLnB1c2gobilcbiAgICBpZihuLmxlZnQpIHtcbiAgICAgIGlmKGlkeCA8IG4ubGVmdC5fY291bnQpIHtcbiAgICAgICAgbiA9IG4ubGVmdFxuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuICAgICAgaWR4IC09IG4ubGVmdC5fY291bnRcbiAgICB9XG4gICAgaWYoIWlkeCkge1xuICAgICAgcmV0dXJuIG5ldyBSZWRCbGFja1RyZWVJdGVyYXRvcih0aGlzLCBzdGFjaylcbiAgICB9XG4gICAgaWR4IC09IDFcbiAgICBpZihuLnJpZ2h0KSB7XG4gICAgICBpZihpZHggPj0gbi5yaWdodC5fY291bnQpIHtcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICAgIG4gPSBuLnJpZ2h0XG4gICAgfSBlbHNlIHtcbiAgICAgIGJyZWFrXG4gICAgfVxuICB9XG4gIHJldHVybiBuZXcgUmVkQmxhY2tUcmVlSXRlcmF0b3IodGhpcywgW10pXG59XG5cbnByb3RvLmdlID0gZnVuY3Rpb24oa2V5KSB7XG4gIHZhciBjbXAgPSB0aGlzLl9jb21wYXJlXG4gIHZhciBuID0gdGhpcy5yb290XG4gIHZhciBzdGFjayA9IFtdXG4gIHZhciBsYXN0X3B0ciA9IDBcbiAgd2hpbGUobikge1xuICAgIHZhciBkID0gY21wKGtleSwgbi5rZXkpXG4gICAgc3RhY2sucHVzaChuKVxuICAgIGlmKGQgPD0gMCkge1xuICAgICAgbGFzdF9wdHIgPSBzdGFjay5sZW5ndGhcbiAgICB9XG4gICAgaWYoZCA8PSAwKSB7XG4gICAgICBuID0gbi5sZWZ0XG4gICAgfSBlbHNlIHtcbiAgICAgIG4gPSBuLnJpZ2h0XG4gICAgfVxuICB9XG4gIHN0YWNrLmxlbmd0aCA9IGxhc3RfcHRyXG4gIHJldHVybiBuZXcgUmVkQmxhY2tUcmVlSXRlcmF0b3IodGhpcywgc3RhY2spXG59XG5cbnByb3RvLmd0ID0gZnVuY3Rpb24oa2V5KSB7XG4gIHZhciBjbXAgPSB0aGlzLl9jb21wYXJlXG4gIHZhciBuID0gdGhpcy5yb290XG4gIHZhciBzdGFjayA9IFtdXG4gIHZhciBsYXN0X3B0ciA9IDBcbiAgd2hpbGUobikge1xuICAgIHZhciBkID0gY21wKGtleSwgbi5rZXkpXG4gICAgc3RhY2sucHVzaChuKVxuICAgIGlmKGQgPCAwKSB7XG4gICAgICBsYXN0X3B0ciA9IHN0YWNrLmxlbmd0aFxuICAgIH1cbiAgICBpZihkIDwgMCkge1xuICAgICAgbiA9IG4ubGVmdFxuICAgIH0gZWxzZSB7XG4gICAgICBuID0gbi5yaWdodFxuICAgIH1cbiAgfVxuICBzdGFjay5sZW5ndGggPSBsYXN0X3B0clxuICByZXR1cm4gbmV3IFJlZEJsYWNrVHJlZUl0ZXJhdG9yKHRoaXMsIHN0YWNrKVxufVxuXG5wcm90by5sdCA9IGZ1bmN0aW9uKGtleSkge1xuICB2YXIgY21wID0gdGhpcy5fY29tcGFyZVxuICB2YXIgbiA9IHRoaXMucm9vdFxuICB2YXIgc3RhY2sgPSBbXVxuICB2YXIgbGFzdF9wdHIgPSAwXG4gIHdoaWxlKG4pIHtcbiAgICB2YXIgZCA9IGNtcChrZXksIG4ua2V5KVxuICAgIHN0YWNrLnB1c2gobilcbiAgICBpZihkID4gMCkge1xuICAgICAgbGFzdF9wdHIgPSBzdGFjay5sZW5ndGhcbiAgICB9XG4gICAgaWYoZCA8PSAwKSB7XG4gICAgICBuID0gbi5sZWZ0XG4gICAgfSBlbHNlIHtcbiAgICAgIG4gPSBuLnJpZ2h0XG4gICAgfVxuICB9XG4gIHN0YWNrLmxlbmd0aCA9IGxhc3RfcHRyXG4gIHJldHVybiBuZXcgUmVkQmxhY2tUcmVlSXRlcmF0b3IodGhpcywgc3RhY2spXG59XG5cbnByb3RvLmxlID0gZnVuY3Rpb24oa2V5KSB7XG4gIHZhciBjbXAgPSB0aGlzLl9jb21wYXJlXG4gIHZhciBuID0gdGhpcy5yb290XG4gIHZhciBzdGFjayA9IFtdXG4gIHZhciBsYXN0X3B0ciA9IDBcbiAgd2hpbGUobikge1xuICAgIHZhciBkID0gY21wKGtleSwgbi5rZXkpXG4gICAgc3RhY2sucHVzaChuKVxuICAgIGlmKGQgPj0gMCkge1xuICAgICAgbGFzdF9wdHIgPSBzdGFjay5sZW5ndGhcbiAgICB9XG4gICAgaWYoZCA8IDApIHtcbiAgICAgIG4gPSBuLmxlZnRcbiAgICB9IGVsc2Uge1xuICAgICAgbiA9IG4ucmlnaHRcbiAgICB9XG4gIH1cbiAgc3RhY2subGVuZ3RoID0gbGFzdF9wdHJcbiAgcmV0dXJuIG5ldyBSZWRCbGFja1RyZWVJdGVyYXRvcih0aGlzLCBzdGFjaylcbn1cblxuLy9GaW5kcyB0aGUgaXRlbSB3aXRoIGtleSBpZiBpdCBleGlzdHNcbnByb3RvLmZpbmQgPSBmdW5jdGlvbihrZXkpIHtcbiAgdmFyIGNtcCA9IHRoaXMuX2NvbXBhcmVcbiAgdmFyIG4gPSB0aGlzLnJvb3RcbiAgdmFyIHN0YWNrID0gW11cbiAgd2hpbGUobikge1xuICAgIHZhciBkID0gY21wKGtleSwgbi5rZXkpXG4gICAgc3RhY2sucHVzaChuKVxuICAgIGlmKGQgPT09IDApIHtcbiAgICAgIHJldHVybiBuZXcgUmVkQmxhY2tUcmVlSXRlcmF0b3IodGhpcywgc3RhY2spXG4gICAgfVxuICAgIGlmKGQgPD0gMCkge1xuICAgICAgbiA9IG4ubGVmdFxuICAgIH0gZWxzZSB7XG4gICAgICBuID0gbi5yaWdodFxuICAgIH1cbiAgfVxuICByZXR1cm4gbmV3IFJlZEJsYWNrVHJlZUl0ZXJhdG9yKHRoaXMsIFtdKVxufVxuXG4vL1JlbW92ZXMgaXRlbSB3aXRoIGtleSBmcm9tIHRyZWVcbnByb3RvLnJlbW92ZSA9IGZ1bmN0aW9uKGtleSkge1xuICB2YXIgaXRlciA9IHRoaXMuZmluZChrZXkpXG4gIGlmKGl0ZXIpIHtcbiAgICByZXR1cm4gaXRlci5yZW1vdmUoKVxuICB9XG4gIHJldHVybiB0aGlzXG59XG5cbi8vUmV0dXJucyB0aGUgaXRlbSBhdCBga2V5YFxucHJvdG8uZ2V0ID0gZnVuY3Rpb24oa2V5KSB7XG4gIHZhciBjbXAgPSB0aGlzLl9jb21wYXJlXG4gIHZhciBuID0gdGhpcy5yb290XG4gIHdoaWxlKG4pIHtcbiAgICB2YXIgZCA9IGNtcChrZXksIG4ua2V5KVxuICAgIGlmKGQgPT09IDApIHtcbiAgICAgIHJldHVybiBuLnZhbHVlXG4gICAgfVxuICAgIGlmKGQgPD0gMCkge1xuICAgICAgbiA9IG4ubGVmdFxuICAgIH0gZWxzZSB7XG4gICAgICBuID0gbi5yaWdodFxuICAgIH1cbiAgfVxuICByZXR1cm5cbn1cblxuLy9JdGVyYXRvciBmb3IgcmVkIGJsYWNrIHRyZWVcbmZ1bmN0aW9uIFJlZEJsYWNrVHJlZUl0ZXJhdG9yKHRyZWUsIHN0YWNrKSB7XG4gIHRoaXMudHJlZSA9IHRyZWVcbiAgdGhpcy5fc3RhY2sgPSBzdGFja1xufVxuXG52YXIgaXByb3RvID0gUmVkQmxhY2tUcmVlSXRlcmF0b3IucHJvdG90eXBlXG5cbi8vVGVzdCBpZiBpdGVyYXRvciBpcyB2YWxpZFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGlwcm90bywgXCJ2YWxpZFwiLCB7XG4gIGdldDogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YWNrLmxlbmd0aCA+IDBcbiAgfVxufSlcblxuLy9Ob2RlIG9mIHRoZSBpdGVyYXRvclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGlwcm90bywgXCJub2RlXCIsIHtcbiAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICBpZih0aGlzLl9zdGFjay5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc3RhY2tbdGhpcy5fc3RhY2subGVuZ3RoLTFdXG4gICAgfVxuICAgIHJldHVybiBudWxsXG4gIH0sXG4gIGVudW1lcmFibGU6IHRydWVcbn0pXG5cbi8vTWFrZXMgYSBjb3B5IG9mIGFuIGl0ZXJhdG9yXG5pcHJvdG8uY2xvbmUgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBSZWRCbGFja1RyZWVJdGVyYXRvcih0aGlzLnRyZWUsIHRoaXMuX3N0YWNrLnNsaWNlKCkpXG59XG5cbi8vU3dhcHMgdHdvIG5vZGVzXG5mdW5jdGlvbiBzd2FwTm9kZShuLCB2KSB7XG4gIG4ua2V5ID0gdi5rZXlcbiAgbi52YWx1ZSA9IHYudmFsdWVcbiAgbi5sZWZ0ID0gdi5sZWZ0XG4gIG4ucmlnaHQgPSB2LnJpZ2h0XG4gIG4uX2NvbG9yID0gdi5fY29sb3JcbiAgbi5fY291bnQgPSB2Ll9jb3VudFxufVxuXG4vL0ZpeCB1cCBhIGRvdWJsZSBibGFjayBub2RlIGluIGEgdHJlZVxuZnVuY3Rpb24gZml4RG91YmxlQmxhY2soc3RhY2spIHtcbiAgdmFyIG4sIHAsIHMsIHpcbiAgZm9yKHZhciBpPXN0YWNrLmxlbmd0aC0xOyBpPj0wOyAtLWkpIHtcbiAgICBuID0gc3RhY2tbaV1cbiAgICBpZihpID09PSAwKSB7XG4gICAgICBuLl9jb2xvciA9IEJMQUNLXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy9jb25zb2xlLmxvZyhcInZpc2l0IG5vZGU6XCIsIG4ua2V5LCBpLCBzdGFja1tpXS5rZXksIHN0YWNrW2ktMV0ua2V5KVxuICAgIHAgPSBzdGFja1tpLTFdXG4gICAgaWYocC5sZWZ0ID09PSBuKSB7XG4gICAgICAvL2NvbnNvbGUubG9nKFwibGVmdCBjaGlsZFwiKVxuICAgICAgcyA9IHAucmlnaHRcbiAgICAgIGlmKHMucmlnaHQgJiYgcy5yaWdodC5fY29sb3IgPT09IFJFRCkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwiY2FzZSAxOiByaWdodCBzaWJsaW5nIGNoaWxkIHJlZFwiKVxuICAgICAgICBzID0gcC5yaWdodCA9IGNsb25lTm9kZShzKVxuICAgICAgICB6ID0gcy5yaWdodCA9IGNsb25lTm9kZShzLnJpZ2h0KVxuICAgICAgICBwLnJpZ2h0ID0gcy5sZWZ0XG4gICAgICAgIHMubGVmdCA9IHBcbiAgICAgICAgcy5yaWdodCA9IHpcbiAgICAgICAgcy5fY29sb3IgPSBwLl9jb2xvclxuICAgICAgICBuLl9jb2xvciA9IEJMQUNLXG4gICAgICAgIHAuX2NvbG9yID0gQkxBQ0tcbiAgICAgICAgei5fY29sb3IgPSBCTEFDS1xuICAgICAgICByZWNvdW50KHApXG4gICAgICAgIHJlY291bnQocylcbiAgICAgICAgaWYoaSA+IDEpIHtcbiAgICAgICAgICB2YXIgcHAgPSBzdGFja1tpLTJdXG4gICAgICAgICAgaWYocHAubGVmdCA9PT0gcCkge1xuICAgICAgICAgICAgcHAubGVmdCA9IHNcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHAucmlnaHQgPSBzXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHN0YWNrW2ktMV0gPSBzXG4gICAgICAgIHJldHVyblxuICAgICAgfSBlbHNlIGlmKHMubGVmdCAmJiBzLmxlZnQuX2NvbG9yID09PSBSRUQpIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcImNhc2UgMTogbGVmdCBzaWJsaW5nIGNoaWxkIHJlZFwiKVxuICAgICAgICBzID0gcC5yaWdodCA9IGNsb25lTm9kZShzKVxuICAgICAgICB6ID0gcy5sZWZ0ID0gY2xvbmVOb2RlKHMubGVmdClcbiAgICAgICAgcC5yaWdodCA9IHoubGVmdFxuICAgICAgICBzLmxlZnQgPSB6LnJpZ2h0XG4gICAgICAgIHoubGVmdCA9IHBcbiAgICAgICAgei5yaWdodCA9IHNcbiAgICAgICAgei5fY29sb3IgPSBwLl9jb2xvclxuICAgICAgICBwLl9jb2xvciA9IEJMQUNLXG4gICAgICAgIHMuX2NvbG9yID0gQkxBQ0tcbiAgICAgICAgbi5fY29sb3IgPSBCTEFDS1xuICAgICAgICByZWNvdW50KHApXG4gICAgICAgIHJlY291bnQocylcbiAgICAgICAgcmVjb3VudCh6KVxuICAgICAgICBpZihpID4gMSkge1xuICAgICAgICAgIHZhciBwcCA9IHN0YWNrW2ktMl1cbiAgICAgICAgICBpZihwcC5sZWZ0ID09PSBwKSB7XG4gICAgICAgICAgICBwcC5sZWZ0ID0gelxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwcC5yaWdodCA9IHpcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc3RhY2tbaS0xXSA9IHpcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBpZihzLl9jb2xvciA9PT0gQkxBQ0spIHtcbiAgICAgICAgaWYocC5fY29sb3IgPT09IFJFRCkge1xuICAgICAgICAgIC8vY29uc29sZS5sb2coXCJjYXNlIDI6IGJsYWNrIHNpYmxpbmcsIHJlZCBwYXJlbnRcIiwgcC5yaWdodC52YWx1ZSlcbiAgICAgICAgICBwLl9jb2xvciA9IEJMQUNLXG4gICAgICAgICAgcC5yaWdodCA9IHJlcGFpbnQoUkVELCBzKVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vY29uc29sZS5sb2coXCJjYXNlIDI6IGJsYWNrIHNpYmxpbmcsIGJsYWNrIHBhcmVudFwiLCBwLnJpZ2h0LnZhbHVlKVxuICAgICAgICAgIHAucmlnaHQgPSByZXBhaW50KFJFRCwgcylcbiAgICAgICAgICBjb250aW51ZSAgXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vY29uc29sZS5sb2coXCJjYXNlIDM6IHJlZCBzaWJsaW5nXCIpXG4gICAgICAgIHMgPSBjbG9uZU5vZGUocylcbiAgICAgICAgcC5yaWdodCA9IHMubGVmdFxuICAgICAgICBzLmxlZnQgPSBwXG4gICAgICAgIHMuX2NvbG9yID0gcC5fY29sb3JcbiAgICAgICAgcC5fY29sb3IgPSBSRURcbiAgICAgICAgcmVjb3VudChwKVxuICAgICAgICByZWNvdW50KHMpXG4gICAgICAgIGlmKGkgPiAxKSB7XG4gICAgICAgICAgdmFyIHBwID0gc3RhY2tbaS0yXVxuICAgICAgICAgIGlmKHBwLmxlZnQgPT09IHApIHtcbiAgICAgICAgICAgIHBwLmxlZnQgPSBzXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBwLnJpZ2h0ID0gc1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzdGFja1tpLTFdID0gc1xuICAgICAgICBzdGFja1tpXSA9IHBcbiAgICAgICAgaWYoaSsxIDwgc3RhY2subGVuZ3RoKSB7XG4gICAgICAgICAgc3RhY2tbaSsxXSA9IG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzdGFjay5wdXNoKG4pXG4gICAgICAgIH1cbiAgICAgICAgaSA9IGkrMlxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvL2NvbnNvbGUubG9nKFwicmlnaHQgY2hpbGRcIilcbiAgICAgIHMgPSBwLmxlZnRcbiAgICAgIGlmKHMubGVmdCAmJiBzLmxlZnQuX2NvbG9yID09PSBSRUQpIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcImNhc2UgMTogbGVmdCBzaWJsaW5nIGNoaWxkIHJlZFwiLCBwLnZhbHVlLCBwLl9jb2xvcilcbiAgICAgICAgcyA9IHAubGVmdCA9IGNsb25lTm9kZShzKVxuICAgICAgICB6ID0gcy5sZWZ0ID0gY2xvbmVOb2RlKHMubGVmdClcbiAgICAgICAgcC5sZWZ0ID0gcy5yaWdodFxuICAgICAgICBzLnJpZ2h0ID0gcFxuICAgICAgICBzLmxlZnQgPSB6XG4gICAgICAgIHMuX2NvbG9yID0gcC5fY29sb3JcbiAgICAgICAgbi5fY29sb3IgPSBCTEFDS1xuICAgICAgICBwLl9jb2xvciA9IEJMQUNLXG4gICAgICAgIHouX2NvbG9yID0gQkxBQ0tcbiAgICAgICAgcmVjb3VudChwKVxuICAgICAgICByZWNvdW50KHMpXG4gICAgICAgIGlmKGkgPiAxKSB7XG4gICAgICAgICAgdmFyIHBwID0gc3RhY2tbaS0yXVxuICAgICAgICAgIGlmKHBwLnJpZ2h0ID09PSBwKSB7XG4gICAgICAgICAgICBwcC5yaWdodCA9IHNcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHAubGVmdCA9IHNcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc3RhY2tbaS0xXSA9IHNcbiAgICAgICAgcmV0dXJuXG4gICAgICB9IGVsc2UgaWYocy5yaWdodCAmJiBzLnJpZ2h0Ll9jb2xvciA9PT0gUkVEKSB7XG4gICAgICAgIC8vY29uc29sZS5sb2coXCJjYXNlIDE6IHJpZ2h0IHNpYmxpbmcgY2hpbGQgcmVkXCIpXG4gICAgICAgIHMgPSBwLmxlZnQgPSBjbG9uZU5vZGUocylcbiAgICAgICAgeiA9IHMucmlnaHQgPSBjbG9uZU5vZGUocy5yaWdodClcbiAgICAgICAgcC5sZWZ0ID0gei5yaWdodFxuICAgICAgICBzLnJpZ2h0ID0gei5sZWZ0XG4gICAgICAgIHoucmlnaHQgPSBwXG4gICAgICAgIHoubGVmdCA9IHNcbiAgICAgICAgei5fY29sb3IgPSBwLl9jb2xvclxuICAgICAgICBwLl9jb2xvciA9IEJMQUNLXG4gICAgICAgIHMuX2NvbG9yID0gQkxBQ0tcbiAgICAgICAgbi5fY29sb3IgPSBCTEFDS1xuICAgICAgICByZWNvdW50KHApXG4gICAgICAgIHJlY291bnQocylcbiAgICAgICAgcmVjb3VudCh6KVxuICAgICAgICBpZihpID4gMSkge1xuICAgICAgICAgIHZhciBwcCA9IHN0YWNrW2ktMl1cbiAgICAgICAgICBpZihwcC5yaWdodCA9PT0gcCkge1xuICAgICAgICAgICAgcHAucmlnaHQgPSB6XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBwLmxlZnQgPSB6XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHN0YWNrW2ktMV0gPSB6XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgaWYocy5fY29sb3IgPT09IEJMQUNLKSB7XG4gICAgICAgIGlmKHAuX2NvbG9yID09PSBSRUQpIHtcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiY2FzZSAyOiBibGFjayBzaWJsaW5nLCByZWQgcGFyZW50XCIpXG4gICAgICAgICAgcC5fY29sb3IgPSBCTEFDS1xuICAgICAgICAgIHAubGVmdCA9IHJlcGFpbnQoUkVELCBzKVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vY29uc29sZS5sb2coXCJjYXNlIDI6IGJsYWNrIHNpYmxpbmcsIGJsYWNrIHBhcmVudFwiKVxuICAgICAgICAgIHAubGVmdCA9IHJlcGFpbnQoUkVELCBzKVxuICAgICAgICAgIGNvbnRpbnVlICBcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcImNhc2UgMzogcmVkIHNpYmxpbmdcIilcbiAgICAgICAgcyA9IGNsb25lTm9kZShzKVxuICAgICAgICBwLmxlZnQgPSBzLnJpZ2h0XG4gICAgICAgIHMucmlnaHQgPSBwXG4gICAgICAgIHMuX2NvbG9yID0gcC5fY29sb3JcbiAgICAgICAgcC5fY29sb3IgPSBSRURcbiAgICAgICAgcmVjb3VudChwKVxuICAgICAgICByZWNvdW50KHMpXG4gICAgICAgIGlmKGkgPiAxKSB7XG4gICAgICAgICAgdmFyIHBwID0gc3RhY2tbaS0yXVxuICAgICAgICAgIGlmKHBwLnJpZ2h0ID09PSBwKSB7XG4gICAgICAgICAgICBwcC5yaWdodCA9IHNcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHAubGVmdCA9IHNcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc3RhY2tbaS0xXSA9IHNcbiAgICAgICAgc3RhY2tbaV0gPSBwXG4gICAgICAgIGlmKGkrMSA8IHN0YWNrLmxlbmd0aCkge1xuICAgICAgICAgIHN0YWNrW2krMV0gPSBuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3RhY2sucHVzaChuKVxuICAgICAgICB9XG4gICAgICAgIGkgPSBpKzJcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy9SZW1vdmVzIGl0ZW0gYXQgaXRlcmF0b3IgZnJvbSB0cmVlXG5pcHJvdG8ucmVtb3ZlID0gZnVuY3Rpb24oKSB7XG4gIHZhciBzdGFjayA9IHRoaXMuX3N0YWNrXG4gIGlmKHN0YWNrLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiB0aGlzLnRyZWVcbiAgfVxuICAvL0ZpcnN0IGNvcHkgcGF0aCB0byBub2RlXG4gIHZhciBjc3RhY2sgPSBuZXcgQXJyYXkoc3RhY2subGVuZ3RoKVxuICB2YXIgbiA9IHN0YWNrW3N0YWNrLmxlbmd0aC0xXVxuICBjc3RhY2tbY3N0YWNrLmxlbmd0aC0xXSA9IG5ldyBSQk5vZGUobi5fY29sb3IsIG4ua2V5LCBuLnZhbHVlLCBuLmxlZnQsIG4ucmlnaHQsIG4uX2NvdW50KVxuICBmb3IodmFyIGk9c3RhY2subGVuZ3RoLTI7IGk+PTA7IC0taSkge1xuICAgIHZhciBuID0gc3RhY2tbaV1cbiAgICBpZihuLmxlZnQgPT09IHN0YWNrW2krMV0pIHtcbiAgICAgIGNzdGFja1tpXSA9IG5ldyBSQk5vZGUobi5fY29sb3IsIG4ua2V5LCBuLnZhbHVlLCBjc3RhY2tbaSsxXSwgbi5yaWdodCwgbi5fY291bnQpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNzdGFja1tpXSA9IG5ldyBSQk5vZGUobi5fY29sb3IsIG4ua2V5LCBuLnZhbHVlLCBuLmxlZnQsIGNzdGFja1tpKzFdLCBuLl9jb3VudClcbiAgICB9XG4gIH1cblxuICAvL0dldCBub2RlXG4gIG4gPSBjc3RhY2tbY3N0YWNrLmxlbmd0aC0xXVxuICAvL2NvbnNvbGUubG9nKFwic3RhcnQgcmVtb3ZlOiBcIiwgbi52YWx1ZSlcblxuICAvL0lmIG5vdCBsZWFmLCB0aGVuIHN3YXAgd2l0aCBwcmV2aW91cyBub2RlXG4gIGlmKG4ubGVmdCAmJiBuLnJpZ2h0KSB7XG4gICAgLy9jb25zb2xlLmxvZyhcIm1vdmluZyB0byBsZWFmXCIpXG5cbiAgICAvL0ZpcnN0IHdhbGsgdG8gcHJldmlvdXMgbGVhZlxuICAgIHZhciBzcGxpdCA9IGNzdGFjay5sZW5ndGhcbiAgICBuID0gbi5sZWZ0XG4gICAgd2hpbGUobi5yaWdodCkge1xuICAgICAgY3N0YWNrLnB1c2gobilcbiAgICAgIG4gPSBuLnJpZ2h0XG4gICAgfVxuICAgIC8vQ29weSBwYXRoIHRvIGxlYWZcbiAgICB2YXIgdiA9IGNzdGFja1tzcGxpdC0xXVxuICAgIGNzdGFjay5wdXNoKG5ldyBSQk5vZGUobi5fY29sb3IsIHYua2V5LCB2LnZhbHVlLCBuLmxlZnQsIG4ucmlnaHQsIG4uX2NvdW50KSlcbiAgICBjc3RhY2tbc3BsaXQtMV0ua2V5ID0gbi5rZXlcbiAgICBjc3RhY2tbc3BsaXQtMV0udmFsdWUgPSBuLnZhbHVlXG5cbiAgICAvL0ZpeCB1cCBzdGFja1xuICAgIGZvcih2YXIgaT1jc3RhY2subGVuZ3RoLTI7IGk+PXNwbGl0OyAtLWkpIHtcbiAgICAgIG4gPSBjc3RhY2tbaV1cbiAgICAgIGNzdGFja1tpXSA9IG5ldyBSQk5vZGUobi5fY29sb3IsIG4ua2V5LCBuLnZhbHVlLCBuLmxlZnQsIGNzdGFja1tpKzFdLCBuLl9jb3VudClcbiAgICB9XG4gICAgY3N0YWNrW3NwbGl0LTFdLmxlZnQgPSBjc3RhY2tbc3BsaXRdXG4gIH1cbiAgLy9jb25zb2xlLmxvZyhcInN0YWNrPVwiLCBjc3RhY2subWFwKGZ1bmN0aW9uKHYpIHsgcmV0dXJuIHYudmFsdWUgfSkpXG5cbiAgLy9SZW1vdmUgbGVhZiBub2RlXG4gIG4gPSBjc3RhY2tbY3N0YWNrLmxlbmd0aC0xXVxuICBpZihuLl9jb2xvciA9PT0gUkVEKSB7XG4gICAgLy9FYXN5IGNhc2U6IHJlbW92aW5nIHJlZCBsZWFmXG4gICAgLy9jb25zb2xlLmxvZyhcIlJFRCBsZWFmXCIpXG4gICAgdmFyIHAgPSBjc3RhY2tbY3N0YWNrLmxlbmd0aC0yXVxuICAgIGlmKHAubGVmdCA9PT0gbikge1xuICAgICAgcC5sZWZ0ID0gbnVsbFxuICAgIH0gZWxzZSBpZihwLnJpZ2h0ID09PSBuKSB7XG4gICAgICBwLnJpZ2h0ID0gbnVsbFxuICAgIH1cbiAgICBjc3RhY2sucG9wKClcbiAgICBmb3IodmFyIGk9MDsgaTxjc3RhY2subGVuZ3RoOyArK2kpIHtcbiAgICAgIGNzdGFja1tpXS5fY291bnQtLVxuICAgIH1cbiAgICByZXR1cm4gbmV3IFJlZEJsYWNrVHJlZSh0aGlzLnRyZWUuX2NvbXBhcmUsIGNzdGFja1swXSlcbiAgfSBlbHNlIHtcbiAgICBpZihuLmxlZnQgfHwgbi5yaWdodCkge1xuICAgICAgLy9TZWNvbmQgZWFzeSBjYXNlOiAgU2luZ2xlIGNoaWxkIGJsYWNrIHBhcmVudFxuICAgICAgLy9jb25zb2xlLmxvZyhcIkJMQUNLIHNpbmdsZSBjaGlsZFwiKVxuICAgICAgaWYobi5sZWZ0KSB7XG4gICAgICAgIHN3YXBOb2RlKG4sIG4ubGVmdClcbiAgICAgIH0gZWxzZSBpZihuLnJpZ2h0KSB7XG4gICAgICAgIHN3YXBOb2RlKG4sIG4ucmlnaHQpXG4gICAgICB9XG4gICAgICAvL0NoaWxkIG11c3QgYmUgcmVkLCBzbyByZXBhaW50IGl0IGJsYWNrIHRvIGJhbGFuY2UgY29sb3JcbiAgICAgIG4uX2NvbG9yID0gQkxBQ0tcbiAgICAgIGZvcih2YXIgaT0wOyBpPGNzdGFjay5sZW5ndGgtMTsgKytpKSB7XG4gICAgICAgIGNzdGFja1tpXS5fY291bnQtLVxuICAgICAgfVxuICAgICAgcmV0dXJuIG5ldyBSZWRCbGFja1RyZWUodGhpcy50cmVlLl9jb21wYXJlLCBjc3RhY2tbMF0pXG4gICAgfSBlbHNlIGlmKGNzdGFjay5sZW5ndGggPT09IDEpIHtcbiAgICAgIC8vVGhpcmQgZWFzeSBjYXNlOiByb290XG4gICAgICAvL2NvbnNvbGUubG9nKFwiUk9PVFwiKVxuICAgICAgcmV0dXJuIG5ldyBSZWRCbGFja1RyZWUodGhpcy50cmVlLl9jb21wYXJlLCBudWxsKVxuICAgIH0gZWxzZSB7XG4gICAgICAvL0hhcmQgY2FzZTogUmVwYWludCBuLCBhbmQgdGhlbiBkbyBzb21lIG5hc3R5IHN0dWZmXG4gICAgICAvL2NvbnNvbGUubG9nKFwiQkxBQ0sgbGVhZiBubyBjaGlsZHJlblwiKVxuICAgICAgZm9yKHZhciBpPTA7IGk8Y3N0YWNrLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIGNzdGFja1tpXS5fY291bnQtLVxuICAgICAgfVxuICAgICAgdmFyIHBhcmVudCA9IGNzdGFja1tjc3RhY2subGVuZ3RoLTJdXG4gICAgICBmaXhEb3VibGVCbGFjayhjc3RhY2spXG4gICAgICAvL0ZpeCB1cCBsaW5rc1xuICAgICAgaWYocGFyZW50LmxlZnQgPT09IG4pIHtcbiAgICAgICAgcGFyZW50LmxlZnQgPSBudWxsXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJlbnQucmlnaHQgPSBudWxsXG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBuZXcgUmVkQmxhY2tUcmVlKHRoaXMudHJlZS5fY29tcGFyZSwgY3N0YWNrWzBdKVxufVxuXG4vL1JldHVybnMga2V5XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoaXByb3RvLCBcImtleVwiLCB7XG4gIGdldDogZnVuY3Rpb24oKSB7XG4gICAgaWYodGhpcy5fc3RhY2subGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3N0YWNrW3RoaXMuX3N0YWNrLmxlbmd0aC0xXS5rZXlcbiAgICB9XG4gICAgcmV0dXJuXG4gIH0sXG4gIGVudW1lcmFibGU6IHRydWVcbn0pXG5cbi8vUmV0dXJucyB2YWx1ZVxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGlwcm90bywgXCJ2YWx1ZVwiLCB7XG4gIGdldDogZnVuY3Rpb24oKSB7XG4gICAgaWYodGhpcy5fc3RhY2subGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3N0YWNrW3RoaXMuX3N0YWNrLmxlbmd0aC0xXS52YWx1ZVxuICAgIH1cbiAgICByZXR1cm5cbiAgfSxcbiAgZW51bWVyYWJsZTogdHJ1ZVxufSlcblxuXG4vL1JldHVybnMgdGhlIHBvc2l0aW9uIG9mIHRoaXMgaXRlcmF0b3IgaW4gdGhlIHNvcnRlZCBsaXN0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoaXByb3RvLCBcImluZGV4XCIsIHtcbiAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICB2YXIgaWR4ID0gMFxuICAgIHZhciBzdGFjayA9IHRoaXMuX3N0YWNrXG4gICAgaWYoc3RhY2subGVuZ3RoID09PSAwKSB7XG4gICAgICB2YXIgciA9IHRoaXMudHJlZS5yb290XG4gICAgICBpZihyKSB7XG4gICAgICAgIHJldHVybiByLl9jb3VudFxuICAgICAgfVxuICAgICAgcmV0dXJuIDBcbiAgICB9IGVsc2UgaWYoc3RhY2tbc3RhY2subGVuZ3RoLTFdLmxlZnQpIHtcbiAgICAgIGlkeCA9IHN0YWNrW3N0YWNrLmxlbmd0aC0xXS5sZWZ0Ll9jb3VudFxuICAgIH1cbiAgICBmb3IodmFyIHM9c3RhY2subGVuZ3RoLTI7IHM+PTA7IC0tcykge1xuICAgICAgaWYoc3RhY2tbcysxXSA9PT0gc3RhY2tbc10ucmlnaHQpIHtcbiAgICAgICAgKytpZHhcbiAgICAgICAgaWYoc3RhY2tbc10ubGVmdCkge1xuICAgICAgICAgIGlkeCArPSBzdGFja1tzXS5sZWZ0Ll9jb3VudFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBpZHhcbiAgfSxcbiAgZW51bWVyYWJsZTogdHJ1ZVxufSlcblxuLy9BZHZhbmNlcyBpdGVyYXRvciB0byBuZXh0IGVsZW1lbnQgaW4gbGlzdFxuaXByb3RvLm5leHQgPSBmdW5jdGlvbigpIHtcbiAgdmFyIHN0YWNrID0gdGhpcy5fc3RhY2tcbiAgaWYoc3RhY2subGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgdmFyIG4gPSBzdGFja1tzdGFjay5sZW5ndGgtMV1cbiAgaWYobi5yaWdodCkge1xuICAgIG4gPSBuLnJpZ2h0XG4gICAgd2hpbGUobikge1xuICAgICAgc3RhY2sucHVzaChuKVxuICAgICAgbiA9IG4ubGVmdFxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBzdGFjay5wb3AoKVxuICAgIHdoaWxlKHN0YWNrLmxlbmd0aCA+IDAgJiYgc3RhY2tbc3RhY2subGVuZ3RoLTFdLnJpZ2h0ID09PSBuKSB7XG4gICAgICBuID0gc3RhY2tbc3RhY2subGVuZ3RoLTFdXG4gICAgICBzdGFjay5wb3AoKVxuICAgIH1cbiAgfVxufVxuXG4vL0NoZWNrcyBpZiBpdGVyYXRvciBpcyBhdCBlbmQgb2YgdHJlZVxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGlwcm90bywgXCJoYXNOZXh0XCIsIHtcbiAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICB2YXIgc3RhY2sgPSB0aGlzLl9zdGFja1xuICAgIGlmKHN0YWNrLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIGlmKHN0YWNrW3N0YWNrLmxlbmd0aC0xXS5yaWdodCkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gICAgZm9yKHZhciBzPXN0YWNrLmxlbmd0aC0xOyBzPjA7IC0tcykge1xuICAgICAgaWYoc3RhY2tbcy0xXS5sZWZ0ID09PSBzdGFja1tzXSkge1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufSlcblxuLy9VcGRhdGUgdmFsdWVcbmlwcm90by51cGRhdGUgPSBmdW5jdGlvbih2YWx1ZSkge1xuICB2YXIgc3RhY2sgPSB0aGlzLl9zdGFja1xuICBpZihzdGFjay5sZW5ndGggPT09IDApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW4ndCB1cGRhdGUgZW1wdHkgbm9kZSFcIilcbiAgfVxuICB2YXIgY3N0YWNrID0gbmV3IEFycmF5KHN0YWNrLmxlbmd0aClcbiAgdmFyIG4gPSBzdGFja1tzdGFjay5sZW5ndGgtMV1cbiAgY3N0YWNrW2NzdGFjay5sZW5ndGgtMV0gPSBuZXcgUkJOb2RlKG4uX2NvbG9yLCBuLmtleSwgdmFsdWUsIG4ubGVmdCwgbi5yaWdodCwgbi5fY291bnQpXG4gIGZvcih2YXIgaT1zdGFjay5sZW5ndGgtMjsgaT49MDsgLS1pKSB7XG4gICAgbiA9IHN0YWNrW2ldXG4gICAgaWYobi5sZWZ0ID09PSBzdGFja1tpKzFdKSB7XG4gICAgICBjc3RhY2tbaV0gPSBuZXcgUkJOb2RlKG4uX2NvbG9yLCBuLmtleSwgbi52YWx1ZSwgY3N0YWNrW2krMV0sIG4ucmlnaHQsIG4uX2NvdW50KVxuICAgIH0gZWxzZSB7XG4gICAgICBjc3RhY2tbaV0gPSBuZXcgUkJOb2RlKG4uX2NvbG9yLCBuLmtleSwgbi52YWx1ZSwgbi5sZWZ0LCBjc3RhY2tbaSsxXSwgbi5fY291bnQpXG4gICAgfVxuICB9XG4gIHJldHVybiBuZXcgUmVkQmxhY2tUcmVlKHRoaXMudHJlZS5fY29tcGFyZSwgY3N0YWNrWzBdKVxufVxuXG4vL01vdmVzIGl0ZXJhdG9yIGJhY2t3YXJkIG9uZSBlbGVtZW50XG5pcHJvdG8ucHJldiA9IGZ1bmN0aW9uKCkge1xuICB2YXIgc3RhY2sgPSB0aGlzLl9zdGFja1xuICBpZihzdGFjay5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm5cbiAgfVxuICB2YXIgbiA9IHN0YWNrW3N0YWNrLmxlbmd0aC0xXVxuICBpZihuLmxlZnQpIHtcbiAgICBuID0gbi5sZWZ0XG4gICAgd2hpbGUobikge1xuICAgICAgc3RhY2sucHVzaChuKVxuICAgICAgbiA9IG4ucmlnaHRcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgc3RhY2sucG9wKClcbiAgICB3aGlsZShzdGFjay5sZW5ndGggPiAwICYmIHN0YWNrW3N0YWNrLmxlbmd0aC0xXS5sZWZ0ID09PSBuKSB7XG4gICAgICBuID0gc3RhY2tbc3RhY2subGVuZ3RoLTFdXG4gICAgICBzdGFjay5wb3AoKVxuICAgIH1cbiAgfVxufVxuXG4vL0NoZWNrcyBpZiBpdGVyYXRvciBpcyBhdCBzdGFydCBvZiB0cmVlXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoaXByb3RvLCBcImhhc1ByZXZcIiwge1xuICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBzdGFjayA9IHRoaXMuX3N0YWNrXG4gICAgaWYoc3RhY2subGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gICAgaWYoc3RhY2tbc3RhY2subGVuZ3RoLTFdLmxlZnQpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICAgIGZvcih2YXIgcz1zdGFjay5sZW5ndGgtMTsgcz4wOyAtLXMpIHtcbiAgICAgIGlmKHN0YWNrW3MtMV0ucmlnaHQgPT09IHN0YWNrW3NdKSB7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9XG59KVxuXG4vL0RlZmF1bHQgY29tcGFyaXNvbiBmdW5jdGlvblxuZnVuY3Rpb24gZGVmYXVsdENvbXBhcmUoYSwgYikge1xuICBpZihhIDwgYikge1xuICAgIHJldHVybiAtMVxuICB9XG4gIGlmKGEgPiBiKSB7XG4gICAgcmV0dXJuIDFcbiAgfVxuICByZXR1cm4gMFxufVxuXG4vL0J1aWxkIGEgdHJlZVxuZnVuY3Rpb24gY3JlYXRlUkJUcmVlKGNvbXBhcmUpIHtcbiAgcmV0dXJuIG5ldyBSZWRCbGFja1RyZWUoY29tcGFyZSB8fCBkZWZhdWx0Q29tcGFyZSwgbnVsbClcbn1cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2llZWU3NTQvaW5kZXguanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAvaG9tZS9odXluaG5ndXllbi9naXRodWIvY2F1c2FsaXR5L25vZGVfbW9kdWxlcy9pZWVlNzU0L2luZGV4LmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuZXhwb3J0cy5yZWFkID0gZnVuY3Rpb24gKGJ1ZmZlciwgb2Zmc2V0LCBpc0xFLCBtTGVuLCBuQnl0ZXMpIHtcbiAgdmFyIGUsIG1cbiAgdmFyIGVMZW4gPSAobkJ5dGVzICogOCkgLSBtTGVuIC0gMVxuICB2YXIgZU1heCA9ICgxIDw8IGVMZW4pIC0gMVxuICB2YXIgZUJpYXMgPSBlTWF4ID4+IDFcbiAgdmFyIG5CaXRzID0gLTdcbiAgdmFyIGkgPSBpc0xFID8gKG5CeXRlcyAtIDEpIDogMFxuICB2YXIgZCA9IGlzTEUgPyAtMSA6IDFcbiAgdmFyIHMgPSBidWZmZXJbb2Zmc2V0ICsgaV1cblxuICBpICs9IGRcblxuICBlID0gcyAmICgoMSA8PCAoLW5CaXRzKSkgLSAxKVxuICBzID4+PSAoLW5CaXRzKVxuICBuQml0cyArPSBlTGVuXG4gIGZvciAoOyBuQml0cyA+IDA7IGUgPSAoZSAqIDI1NikgKyBidWZmZXJbb2Zmc2V0ICsgaV0sIGkgKz0gZCwgbkJpdHMgLT0gOCkge31cblxuICBtID0gZSAmICgoMSA8PCAoLW5CaXRzKSkgLSAxKVxuICBlID4+PSAoLW5CaXRzKVxuICBuQml0cyArPSBtTGVuXG4gIGZvciAoOyBuQml0cyA+IDA7IG0gPSAobSAqIDI1NikgKyBidWZmZXJbb2Zmc2V0ICsgaV0sIGkgKz0gZCwgbkJpdHMgLT0gOCkge31cblxuICBpZiAoZSA9PT0gMCkge1xuICAgIGUgPSAxIC0gZUJpYXNcbiAgfSBlbHNlIGlmIChlID09PSBlTWF4KSB7XG4gICAgcmV0dXJuIG0gPyBOYU4gOiAoKHMgPyAtMSA6IDEpICogSW5maW5pdHkpXG4gIH0gZWxzZSB7XG4gICAgbSA9IG0gKyBNYXRoLnBvdygyLCBtTGVuKVxuICAgIGUgPSBlIC0gZUJpYXNcbiAgfVxuICByZXR1cm4gKHMgPyAtMSA6IDEpICogbSAqIE1hdGgucG93KDIsIGUgLSBtTGVuKVxufVxuXG5leHBvcnRzLndyaXRlID0gZnVuY3Rpb24gKGJ1ZmZlciwgdmFsdWUsIG9mZnNldCwgaXNMRSwgbUxlbiwgbkJ5dGVzKSB7XG4gIHZhciBlLCBtLCBjXG4gIHZhciBlTGVuID0gKG5CeXRlcyAqIDgpIC0gbUxlbiAtIDFcbiAgdmFyIGVNYXggPSAoMSA8PCBlTGVuKSAtIDFcbiAgdmFyIGVCaWFzID0gZU1heCA+PiAxXG4gIHZhciBydCA9IChtTGVuID09PSAyMyA/IE1hdGgucG93KDIsIC0yNCkgLSBNYXRoLnBvdygyLCAtNzcpIDogMClcbiAgdmFyIGkgPSBpc0xFID8gMCA6IChuQnl0ZXMgLSAxKVxuICB2YXIgZCA9IGlzTEUgPyAxIDogLTFcbiAgdmFyIHMgPSB2YWx1ZSA8IDAgfHwgKHZhbHVlID09PSAwICYmIDEgLyB2YWx1ZSA8IDApID8gMSA6IDBcblxuICB2YWx1ZSA9IE1hdGguYWJzKHZhbHVlKVxuXG4gIGlmIChpc05hTih2YWx1ZSkgfHwgdmFsdWUgPT09IEluZmluaXR5KSB7XG4gICAgbSA9IGlzTmFOKHZhbHVlKSA/IDEgOiAwXG4gICAgZSA9IGVNYXhcbiAgfSBlbHNlIHtcbiAgICBlID0gTWF0aC5mbG9vcihNYXRoLmxvZyh2YWx1ZSkgLyBNYXRoLkxOMilcbiAgICBpZiAodmFsdWUgKiAoYyA9IE1hdGgucG93KDIsIC1lKSkgPCAxKSB7XG4gICAgICBlLS1cbiAgICAgIGMgKj0gMlxuICAgIH1cbiAgICBpZiAoZSArIGVCaWFzID49IDEpIHtcbiAgICAgIHZhbHVlICs9IHJ0IC8gY1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWx1ZSArPSBydCAqIE1hdGgucG93KDIsIDEgLSBlQmlhcylcbiAgICB9XG4gICAgaWYgKHZhbHVlICogYyA+PSAyKSB7XG4gICAgICBlKytcbiAgICAgIGMgLz0gMlxuICAgIH1cblxuICAgIGlmIChlICsgZUJpYXMgPj0gZU1heCkge1xuICAgICAgbSA9IDBcbiAgICAgIGUgPSBlTWF4XG4gICAgfSBlbHNlIGlmIChlICsgZUJpYXMgPj0gMSkge1xuICAgICAgbSA9ICgodmFsdWUgKiBjKSAtIDEpICogTWF0aC5wb3coMiwgbUxlbilcbiAgICAgIGUgPSBlICsgZUJpYXNcbiAgICB9IGVsc2Uge1xuICAgICAgbSA9IHZhbHVlICogTWF0aC5wb3coMiwgZUJpYXMgLSAxKSAqIE1hdGgucG93KDIsIG1MZW4pXG4gICAgICBlID0gMFxuICAgIH1cbiAgfVxuXG4gIGZvciAoOyBtTGVuID49IDg7IGJ1ZmZlcltvZmZzZXQgKyBpXSA9IG0gJiAweGZmLCBpICs9IGQsIG0gLz0gMjU2LCBtTGVuIC09IDgpIHt9XG5cbiAgZSA9IChlIDw8IG1MZW4pIHwgbVxuICBlTGVuICs9IG1MZW5cbiAgZm9yICg7IGVMZW4gPiAwOyBidWZmZXJbb2Zmc2V0ICsgaV0gPSBlICYgMHhmZiwgaSArPSBkLCBlIC89IDI1NiwgZUxlbiAtPSA4KSB7fVxuXG4gIGJ1ZmZlcltvZmZzZXQgKyBpIC0gZF0gfD0gcyAqIDEyOFxufVxuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4uLy4uL25vZGVfbW9kdWxlcy9pbW1lZGlhdGUvbGliL2luZGV4LmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvaW1tZWRpYXRlL2xpYi9pbmRleC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG52YXIgdHlwZXMgPSBbXG4gIF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vbmV4dFRpY2sgKi8gXCIuLi8uLi9ub2RlX21vZHVsZXMvaW1tZWRpYXRlL2xpYi9uZXh0VGljay5qc1wiKSxcbiAgX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9tdXRhdGlvbi5qcyAqLyBcIi4uLy4uL25vZGVfbW9kdWxlcy9pbW1lZGlhdGUvbGliL211dGF0aW9uLmpzXCIpLFxuICBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL21lc3NhZ2VDaGFubmVsICovIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2ltbWVkaWF0ZS9saWIvbWVzc2FnZUNoYW5uZWwuanNcIiksXG4gIF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vc3RhdGVDaGFuZ2UgKi8gXCIuLi8uLi9ub2RlX21vZHVsZXMvaW1tZWRpYXRlL2xpYi9zdGF0ZUNoYW5nZS5qc1wiKSxcbiAgX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi90aW1lb3V0ICovIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2ltbWVkaWF0ZS9saWIvdGltZW91dC5qc1wiKVxuXTtcbnZhciBkcmFpbmluZztcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xudmFyIHF1ZXVlID0gW107XG52YXIgc2NoZWR1bGVkID0gZmFsc2U7XG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgIHJldHVybjtcbiAgfVxuICBkcmFpbmluZyA9IGZhbHNlO1xuICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gIH0gZWxzZSB7XG4gICAgcXVldWVJbmRleCA9IC0xO1xuICB9XG4gIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICBuZXh0VGljaygpO1xuICB9XG59XG5cbi8vbmFtZWQgbmV4dFRpY2sgZm9yIGxlc3MgY29uZnVzaW5nIHN0YWNrIHRyYWNlc1xuZnVuY3Rpb24gbmV4dFRpY2soKSB7XG4gIGlmIChkcmFpbmluZykge1xuICAgIHJldHVybjtcbiAgfVxuICBzY2hlZHVsZWQgPSBmYWxzZTtcbiAgZHJhaW5pbmcgPSB0cnVlO1xuICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICB2YXIgdGltZW91dCA9IHNldFRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgd2hpbGUgKGxlbikge1xuICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgIHF1ZXVlID0gW107XG4gICAgd2hpbGUgKGN1cnJlbnRRdWV1ZSAmJiArK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICB9XG4gICAgcXVldWVJbmRleCA9IC0xO1xuICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgfVxuICBjdXJyZW50UXVldWUgPSBudWxsO1xuICBxdWV1ZUluZGV4ID0gLTE7XG4gIGRyYWluaW5nID0gZmFsc2U7XG4gIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cbnZhciBzY2hlZHVsZURyYWluO1xudmFyIGkgPSAtMTtcbnZhciBsZW4gPSB0eXBlcy5sZW5ndGg7XG53aGlsZSAoKytpIDwgbGVuKSB7XG4gIGlmICh0eXBlc1tpXSAmJiB0eXBlc1tpXS50ZXN0ICYmIHR5cGVzW2ldLnRlc3QoKSkge1xuICAgIHNjaGVkdWxlRHJhaW4gPSB0eXBlc1tpXS5pbnN0YWxsKG5leHRUaWNrKTtcbiAgICBicmVhaztcbiAgfVxufVxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gIHRoaXMuZnVuID0gZnVuO1xuICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBmdW4gPSB0aGlzLmZ1bjtcbiAgdmFyIGFycmF5ID0gdGhpcy5hcnJheTtcbiAgc3dpdGNoIChhcnJheS5sZW5ndGgpIHtcbiAgY2FzZSAwOlxuICAgIHJldHVybiBmdW4oKTtcbiAgY2FzZSAxOlxuICAgIHJldHVybiBmdW4oYXJyYXlbMF0pO1xuICBjYXNlIDI6XG4gICAgcmV0dXJuIGZ1bihhcnJheVswXSwgYXJyYXlbMV0pO1xuICBjYXNlIDM6XG4gICAgcmV0dXJuIGZ1bihhcnJheVswXSwgYXJyYXlbMV0sIGFycmF5WzJdKTtcbiAgZGVmYXVsdDpcbiAgICByZXR1cm4gZnVuLmFwcGx5KG51bGwsIGFycmF5KTtcbiAgfVxuXG59O1xubW9kdWxlLmV4cG9ydHMgPSBpbW1lZGlhdGU7XG5mdW5jdGlvbiBpbW1lZGlhdGUodGFzaykge1xuICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICB9XG4gIH1cbiAgcXVldWUucHVzaChuZXcgSXRlbSh0YXNrLCBhcmdzKSk7XG4gIGlmICghc2NoZWR1bGVkICYmICFkcmFpbmluZykge1xuICAgIHNjaGVkdWxlZCA9IHRydWU7XG4gICAgc2NoZWR1bGVEcmFpbigpO1xuICB9XG59XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2ltbWVkaWF0ZS9saWIvbWVzc2FnZUNoYW5uZWwuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAvaG9tZS9odXluaG5ndXllbi9naXRodWIvY2F1c2FsaXR5L25vZGVfbW9kdWxlcy9pbW1lZGlhdGUvbGliL21lc3NhZ2VDaGFubmVsLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG4vKiBXRUJQQUNLIFZBUiBJTkpFQ1RJT04gKi8oZnVuY3Rpb24oZ2xvYmFsKSB7XG5cbmV4cG9ydHMudGVzdCA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKGdsb2JhbC5zZXRJbW1lZGlhdGUpIHtcbiAgICAvLyB3ZSBjYW4gb25seSBnZXQgaGVyZSBpbiBJRTEwXG4gICAgLy8gd2hpY2ggZG9lc24ndCBoYW5kZWwgcG9zdE1lc3NhZ2Ugd2VsbFxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gdHlwZW9mIGdsb2JhbC5NZXNzYWdlQ2hhbm5lbCAhPT0gJ3VuZGVmaW5lZCc7XG59O1xuXG5leHBvcnRzLmluc3RhbGwgPSBmdW5jdGlvbiAoZnVuYykge1xuICB2YXIgY2hhbm5lbCA9IG5ldyBnbG9iYWwuTWVzc2FnZUNoYW5uZWwoKTtcbiAgY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSBmdW5jO1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGNoYW5uZWwucG9ydDIucG9zdE1lc3NhZ2UoMCk7XG4gIH07XG59O1xuLyogV0VCUEFDSyBWQVIgSU5KRUNUSU9OICovfS5jYWxsKHRoaXMsIF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vLi4vLi4vd2VicGFjay9idWlsZGluL2dsb2JhbC5qcyAqLyBcIi4uLy4uL25vZGVfbW9kdWxlcy93ZWJwYWNrL2J1aWxkaW4vZ2xvYmFsLmpzXCIpKSlcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2ltbWVkaWF0ZS9saWIvbXV0YXRpb24uanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAvaG9tZS9odXluaG5ndXllbi9naXRodWIvY2F1c2FsaXR5L25vZGVfbW9kdWxlcy9pbW1lZGlhdGUvbGliL211dGF0aW9uLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG4vKiBXRUJQQUNLIFZBUiBJTkpFQ1RJT04gKi8oZnVuY3Rpb24oZ2xvYmFsKSB7XG4vL2Jhc2VkIG9mZiByc3ZwIGh0dHBzOi8vZ2l0aHViLmNvbS90aWxkZWlvL3JzdnAuanNcbi8vbGljZW5zZSBodHRwczovL2dpdGh1Yi5jb20vdGlsZGVpby9yc3ZwLmpzL2Jsb2IvbWFzdGVyL0xJQ0VOU0Vcbi8vaHR0cHM6Ly9naXRodWIuY29tL3RpbGRlaW8vcnN2cC5qcy9ibG9iL21hc3Rlci9saWIvcnN2cC9hc2FwLmpzXG5cbnZhciBNdXRhdGlvbiA9IGdsb2JhbC5NdXRhdGlvbk9ic2VydmVyIHx8IGdsb2JhbC5XZWJLaXRNdXRhdGlvbk9ic2VydmVyO1xuXG5leHBvcnRzLnRlc3QgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBNdXRhdGlvbjtcbn07XG5cbmV4cG9ydHMuaW5zdGFsbCA9IGZ1bmN0aW9uIChoYW5kbGUpIHtcbiAgdmFyIGNhbGxlZCA9IDA7XG4gIHZhciBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbihoYW5kbGUpO1xuICB2YXIgZWxlbWVudCA9IGdsb2JhbC5kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJyk7XG4gIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudCwge1xuICAgIGNoYXJhY3RlckRhdGE6IHRydWVcbiAgfSk7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgZWxlbWVudC5kYXRhID0gKGNhbGxlZCA9ICsrY2FsbGVkICUgMik7XG4gIH07XG59O1xuLyogV0VCUEFDSyBWQVIgSU5KRUNUSU9OICovfS5jYWxsKHRoaXMsIF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vLi4vLi4vd2VicGFjay9idWlsZGluL2dsb2JhbC5qcyAqLyBcIi4uLy4uL25vZGVfbW9kdWxlcy93ZWJwYWNrL2J1aWxkaW4vZ2xvYmFsLmpzXCIpKSlcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2ltbWVkaWF0ZS9saWIvbmV4dFRpY2suanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAvaG9tZS9odXluaG5ndXllbi9naXRodWIvY2F1c2FsaXR5L25vZGVfbW9kdWxlcy9pbW1lZGlhdGUvbGliL25leHRUaWNrLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG4vKiBXRUJQQUNLIFZBUiBJTkpFQ1RJT04gKi8oZnVuY3Rpb24ocHJvY2Vzcykge1xuZXhwb3J0cy50ZXN0ID0gZnVuY3Rpb24gKCkge1xuICAvLyBEb24ndCBnZXQgZm9vbGVkIGJ5IGUuZy4gYnJvd3NlcmlmeSBlbnZpcm9ubWVudHMuXG4gIHJldHVybiAodHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnKSAmJiAhcHJvY2Vzcy5icm93c2VyO1xufTtcblxuZXhwb3J0cy5pbnN0YWxsID0gZnVuY3Rpb24gKGZ1bmMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBwcm9jZXNzLm5leHRUaWNrKGZ1bmMpO1xuICB9O1xufTtcblxuLyogV0VCUEFDSyBWQVIgSU5KRUNUSU9OICovfS5jYWxsKHRoaXMsIF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vLi4vLi4vcHJvY2Vzcy9icm93c2VyLmpzICovIFwiLi4vLi4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qc1wiKSkpXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4uLy4uL25vZGVfbW9kdWxlcy9pbW1lZGlhdGUvbGliL3N0YXRlQ2hhbmdlLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvaW1tZWRpYXRlL2xpYi9zdGF0ZUNoYW5nZS5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuLyogV0VCUEFDSyBWQVIgSU5KRUNUSU9OICovKGZ1bmN0aW9uKGdsb2JhbCkge1xuXG5leHBvcnRzLnRlc3QgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiAnZG9jdW1lbnQnIGluIGdsb2JhbCAmJiAnb25yZWFkeXN0YXRlY2hhbmdlJyBpbiBnbG9iYWwuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG59O1xuXG5leHBvcnRzLmluc3RhbGwgPSBmdW5jdGlvbiAoaGFuZGxlKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG5cbiAgICAvLyBDcmVhdGUgYSA8c2NyaXB0PiBlbGVtZW50OyBpdHMgcmVhZHlzdGF0ZWNoYW5nZSBldmVudCB3aWxsIGJlIGZpcmVkIGFzeW5jaHJvbm91c2x5IG9uY2UgaXQgaXMgaW5zZXJ0ZWRcbiAgICAvLyBpbnRvIHRoZSBkb2N1bWVudC4gRG8gc28sIHRodXMgcXVldWluZyB1cCB0aGUgdGFzay4gUmVtZW1iZXIgdG8gY2xlYW4gdXAgb25jZSBpdCdzIGJlZW4gY2FsbGVkLlxuICAgIHZhciBzY3JpcHRFbCA9IGdsb2JhbC5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICBzY3JpcHRFbC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBoYW5kbGUoKTtcblxuICAgICAgc2NyaXB0RWwub25yZWFkeXN0YXRlY2hhbmdlID0gbnVsbDtcbiAgICAgIHNjcmlwdEVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc2NyaXB0RWwpO1xuICAgICAgc2NyaXB0RWwgPSBudWxsO1xuICAgIH07XG4gICAgZ2xvYmFsLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hcHBlbmRDaGlsZChzY3JpcHRFbCk7XG5cbiAgICByZXR1cm4gaGFuZGxlO1xuICB9O1xufTtcbi8qIFdFQlBBQ0sgVkFSIElOSkVDVElPTiAqL30uY2FsbCh0aGlzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLy4uLy4uL3dlYnBhY2svYnVpbGRpbi9nbG9iYWwuanMgKi8gXCIuLi8uLi9ub2RlX21vZHVsZXMvd2VicGFjay9idWlsZGluL2dsb2JhbC5qc1wiKSkpXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4uLy4uL25vZGVfbW9kdWxlcy9pbW1lZGlhdGUvbGliL3RpbWVvdXQuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC9ob21lL2h1eW5obmd1eWVuL2dpdGh1Yi9jYXVzYWxpdHkvbm9kZV9tb2R1bGVzL2ltbWVkaWF0ZS9saWIvdGltZW91dC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMudGVzdCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRydWU7XG59O1xuXG5leHBvcnRzLmluc3RhbGwgPSBmdW5jdGlvbiAodCkge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHNldFRpbWVvdXQodCwgMCk7XG4gIH07XG59O1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuLi8uLi9ub2RlX21vZHVsZXMvaW5oZXJpdHMvaW5oZXJpdHNfYnJvd3Nlci5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC9ob21lL2h1eW5obmd1eWVuL2dpdGh1Yi9jYXVzYWxpdHkvbm9kZV9tb2R1bGVzL2luaGVyaXRzL2luaGVyaXRzX2Jyb3dzZXIuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5pZiAodHlwZW9mIE9iamVjdC5jcmVhdGUgPT09ICdmdW5jdGlvbicpIHtcbiAgLy8gaW1wbGVtZW50YXRpb24gZnJvbSBzdGFuZGFyZCBub2RlLmpzICd1dGlsJyBtb2R1bGVcbiAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpbmhlcml0cyhjdG9yLCBzdXBlckN0b3IpIHtcbiAgICBjdG9yLnN1cGVyXyA9IHN1cGVyQ3RvclxuICAgIGN0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckN0b3IucHJvdG90eXBlLCB7XG4gICAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgICB2YWx1ZTogY3RvcixcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbn0gZWxzZSB7XG4gIC8vIG9sZCBzY2hvb2wgc2hpbSBmb3Igb2xkIGJyb3dzZXJzXG4gIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaW5oZXJpdHMoY3Rvciwgc3VwZXJDdG9yKSB7XG4gICAgY3Rvci5zdXBlcl8gPSBzdXBlckN0b3JcbiAgICB2YXIgVGVtcEN0b3IgPSBmdW5jdGlvbiAoKSB7fVxuICAgIFRlbXBDdG9yLnByb3RvdHlwZSA9IHN1cGVyQ3Rvci5wcm90b3R5cGVcbiAgICBjdG9yLnByb3RvdHlwZSA9IG5ldyBUZW1wQ3RvcigpXG4gICAgY3Rvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBjdG9yXG4gIH1cbn1cblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuLi8uLi9ub2RlX21vZHVsZXMvbHRndC9pbmRleC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC9ob21lL2h1eW5obmd1eWVuL2dpdGh1Yi9jYXVzYWxpdHkvbm9kZV9tb2R1bGVzL2x0Z3QvaW5kZXguanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG4vKiBXRUJQQUNLIFZBUiBJTkpFQ1RJT04gKi8oZnVuY3Rpb24oQnVmZmVyKSB7XG5leHBvcnRzLmNvbXBhcmUgPSBmdW5jdGlvbiAoYSwgYikge1xuXG4gIGlmKEJ1ZmZlci5pc0J1ZmZlcihhKSkge1xuICAgIHZhciBsID0gTWF0aC5taW4oYS5sZW5ndGgsIGIubGVuZ3RoKVxuICAgIGZvcih2YXIgaSA9IDA7IGkgPCBsOyBpKyspIHtcbiAgICAgIHZhciBjbXAgPSBhW2ldIC0gYltpXVxuICAgICAgaWYoY21wKSByZXR1cm4gY21wXG4gICAgfVxuICAgIHJldHVybiBhLmxlbmd0aCAtIGIubGVuZ3RoXG4gIH1cblxuICByZXR1cm4gYSA8IGIgPyAtMSA6IGEgPiBiID8gMSA6IDBcbn1cblxuLy8gdG8gYmUgY29tcGF0aWJsZSB3aXRoIHRoZSBjdXJyZW50IGFic3RyYWN0LWxldmVsZG93biB0ZXN0c1xuLy8gbnVsbGlzaCBvciBlbXB0eSBzdHJpbmdzLlxuLy8gSSBjb3VsZCB1c2UgISF2YWwgYnV0IEkgd2FudCB0byBwZXJtaXQgbnVtYmVycyBhbmQgYm9vbGVhbnMsXG4vLyBpZiBwb3NzaWJsZS5cblxuZnVuY3Rpb24gaXNEZWYgKHZhbCkge1xuICByZXR1cm4gdmFsICE9PSB1bmRlZmluZWQgJiYgdmFsICE9PSAnJ1xufVxuXG5mdW5jdGlvbiBoYXMgKHJhbmdlLCBuYW1lKSB7XG4gIHJldHVybiBPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChyYW5nZSwgbmFtZSlcbn1cblxuZnVuY3Rpb24gaGFzS2V5KHJhbmdlLCBuYW1lKSB7XG4gIHJldHVybiBPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChyYW5nZSwgbmFtZSkgJiYgbmFtZVxufVxuXG52YXIgbG93ZXJCb3VuZEtleSA9IGV4cG9ydHMubG93ZXJCb3VuZEtleSA9IGZ1bmN0aW9uIChyYW5nZSkge1xuICAgIHJldHVybiAoXG4gICAgICAgaGFzS2V5KHJhbmdlLCAnZ3QnKVxuICAgIHx8IGhhc0tleShyYW5nZSwgJ2d0ZScpXG4gICAgfHwgaGFzS2V5KHJhbmdlLCAnbWluJylcbiAgICB8fCAocmFuZ2UucmV2ZXJzZSA/IGhhc0tleShyYW5nZSwgJ2VuZCcpIDogaGFzS2V5KHJhbmdlLCAnc3RhcnQnKSlcbiAgICB8fCB1bmRlZmluZWRcbiAgICApXG59XG5cbnZhciBsb3dlckJvdW5kID0gZXhwb3J0cy5sb3dlckJvdW5kID0gZnVuY3Rpb24gKHJhbmdlLCBkZWYpIHtcbiAgdmFyIGsgPSBsb3dlckJvdW5kS2V5KHJhbmdlKVxuICByZXR1cm4gayA/IHJhbmdlW2tdIDogZGVmXG59XG5cbnZhciBsb3dlckJvdW5kSW5jbHVzaXZlID0gZXhwb3J0cy5sb3dlckJvdW5kSW5jbHVzaXZlID0gZnVuY3Rpb24gKHJhbmdlKSB7XG4gIHJldHVybiBoYXMocmFuZ2UsICdndCcpID8gZmFsc2UgOiB0cnVlXG59XG5cbnZhciB1cHBlckJvdW5kSW5jbHVzaXZlID0gZXhwb3J0cy51cHBlckJvdW5kSW5jbHVzaXZlID1cbiAgZnVuY3Rpb24gKHJhbmdlKSB7XG4gICAgcmV0dXJuIChoYXMocmFuZ2UsICdsdCcpIC8qJiYgIXJhbmdlLm1heEV4Ki8pID8gZmFsc2UgOiB0cnVlXG4gIH1cblxudmFyIGxvd2VyQm91bmRFeGNsdXNpdmUgPSBleHBvcnRzLmxvd2VyQm91bmRFeGNsdXNpdmUgPVxuICBmdW5jdGlvbiAocmFuZ2UpIHtcbiAgICByZXR1cm4gIWxvd2VyQm91bmRJbmNsdXNpdmUocmFuZ2UpXG4gIH1cblxudmFyIHVwcGVyQm91bmRFeGNsdXNpdmUgPSBleHBvcnRzLnVwcGVyQm91bmRFeGNsdXNpdmUgPVxuICBmdW5jdGlvbiAocmFuZ2UpIHtcbiAgICByZXR1cm4gIXVwcGVyQm91bmRJbmNsdXNpdmUocmFuZ2UpXG4gIH1cblxudmFyIHVwcGVyQm91bmRLZXkgPSBleHBvcnRzLnVwcGVyQm91bmRLZXkgPSBmdW5jdGlvbiAocmFuZ2UpIHtcbiAgICByZXR1cm4gKFxuICAgICAgIGhhc0tleShyYW5nZSwgJ2x0JylcbiAgICB8fCBoYXNLZXkocmFuZ2UsICdsdGUnKVxuICAgIHx8IGhhc0tleShyYW5nZSwgJ21heCcpXG4gICAgfHwgKHJhbmdlLnJldmVyc2UgPyBoYXNLZXkocmFuZ2UsICdzdGFydCcpIDogaGFzS2V5KHJhbmdlLCAnZW5kJykpXG4gICAgfHwgdW5kZWZpbmVkXG4gICAgKVxufVxuXG52YXIgdXBwZXJCb3VuZCA9IGV4cG9ydHMudXBwZXJCb3VuZCA9IGZ1bmN0aW9uIChyYW5nZSwgZGVmKSB7XG4gIHZhciBrID0gdXBwZXJCb3VuZEtleShyYW5nZSlcbiAgcmV0dXJuIGsgPyByYW5nZVtrXSA6IGRlZlxufVxuXG5leHBvcnRzLnN0YXJ0ID0gZnVuY3Rpb24gKHJhbmdlLCBkZWYpIHtcbiAgcmV0dXJuIHJhbmdlLnJldmVyc2UgPyB1cHBlckJvdW5kKHJhbmdlLCBkZWYpIDogbG93ZXJCb3VuZChyYW5nZSwgZGVmKVxufVxuZXhwb3J0cy5lbmQgPSBmdW5jdGlvbiAocmFuZ2UsIGRlZikge1xuICByZXR1cm4gcmFuZ2UucmV2ZXJzZSA/IGxvd2VyQm91bmQocmFuZ2UsIGRlZikgOiB1cHBlckJvdW5kKHJhbmdlLCBkZWYpXG59XG5leHBvcnRzLnN0YXJ0SW5jbHVzaXZlID0gZnVuY3Rpb24gKHJhbmdlKSB7XG4gIHJldHVybiAoXG4gICAgcmFuZ2UucmV2ZXJzZVxuICA/IHVwcGVyQm91bmRJbmNsdXNpdmUocmFuZ2UpXG4gIDogbG93ZXJCb3VuZEluY2x1c2l2ZShyYW5nZSlcbiAgKVxufVxuZXhwb3J0cy5lbmRJbmNsdXNpdmUgPSBmdW5jdGlvbiAocmFuZ2UpIHtcbiAgcmV0dXJuIChcbiAgICByYW5nZS5yZXZlcnNlXG4gID8gbG93ZXJCb3VuZEluY2x1c2l2ZShyYW5nZSlcbiAgOiB1cHBlckJvdW5kSW5jbHVzaXZlKHJhbmdlKVxuICApXG59XG5cbmZ1bmN0aW9uIGlkIChlKSB7IHJldHVybiBlIH1cblxuZXhwb3J0cy50b0x0Z3QgPSBmdW5jdGlvbiAocmFuZ2UsIF9yYW5nZSwgbWFwLCBsb3dlciwgdXBwZXIpIHtcbiAgX3JhbmdlID0gX3JhbmdlIHx8IHt9XG4gIG1hcCA9IG1hcCB8fCBpZFxuICB2YXIgZGVmYXVsdHMgPSBhcmd1bWVudHMubGVuZ3RoID4gM1xuICB2YXIgbGIgPSBleHBvcnRzLmxvd2VyQm91bmRLZXkocmFuZ2UpXG4gIHZhciB1YiA9IGV4cG9ydHMudXBwZXJCb3VuZEtleShyYW5nZSlcbiAgaWYobGIpIHtcbiAgICBpZihsYiA9PT0gJ2d0JykgX3JhbmdlLmd0ID0gbWFwKHJhbmdlLmd0LCBmYWxzZSlcbiAgICBlbHNlICAgICAgICAgICAgX3JhbmdlLmd0ZSA9IG1hcChyYW5nZVtsYl0sIGZhbHNlKVxuICB9XG4gIGVsc2UgaWYoZGVmYXVsdHMpXG4gICAgX3JhbmdlLmd0ZSA9IG1hcChsb3dlciwgZmFsc2UpXG5cbiAgaWYodWIpIHtcbiAgICBpZih1YiA9PT0gJ2x0JykgX3JhbmdlLmx0ID0gbWFwKHJhbmdlLmx0LCB0cnVlKVxuICAgIGVsc2UgICAgICAgICAgICBfcmFuZ2UubHRlID0gbWFwKHJhbmdlW3ViXSwgdHJ1ZSlcbiAgfVxuICBlbHNlIGlmKGRlZmF1bHRzKVxuICAgIF9yYW5nZS5sdGUgPSBtYXAodXBwZXIsIHRydWUpXG5cbiAgaWYocmFuZ2UucmV2ZXJzZSAhPSBudWxsKVxuICAgIF9yYW5nZS5yZXZlcnNlID0gISFyYW5nZS5yZXZlcnNlXG5cbiAgLy9pZiByYW5nZSB3YXMgdXNlZCBtdXRhYmx5XG4gIC8vKGluIGxldmVsLXN1YmxldmVsIGl0J3MgcGFydCBvZiBhbiBvcHRpb25zIG9iamVjdFxuICAvL3RoYXQgaGFzIG1vcmUgcHJvcGVydGllcyBvbiBpdC4pXG4gIGlmKGhhcyhfcmFuZ2UsICdtYXgnKSkgICBkZWxldGUgX3JhbmdlLm1heFxuICBpZihoYXMoX3JhbmdlLCAnbWluJykpICAgZGVsZXRlIF9yYW5nZS5taW5cbiAgaWYoaGFzKF9yYW5nZSwgJ3N0YXJ0JykpIGRlbGV0ZSBfcmFuZ2Uuc3RhcnRcbiAgaWYoaGFzKF9yYW5nZSwgJ2VuZCcpKSAgIGRlbGV0ZSBfcmFuZ2UuZW5kXG5cbiAgcmV0dXJuIF9yYW5nZVxufVxuXG5leHBvcnRzLmNvbnRhaW5zID0gZnVuY3Rpb24gKHJhbmdlLCBrZXksIGNvbXBhcmUpIHtcbiAgY29tcGFyZSA9IGNvbXBhcmUgfHwgZXhwb3J0cy5jb21wYXJlXG5cbiAgdmFyIGxiID0gbG93ZXJCb3VuZChyYW5nZSlcbiAgaWYoaXNEZWYobGIpKSB7XG4gICAgdmFyIGNtcCA9IGNvbXBhcmUoa2V5LCBsYilcbiAgICBpZihjbXAgPCAwIHx8IChjbXAgPT09IDAgJiYgbG93ZXJCb3VuZEV4Y2x1c2l2ZShyYW5nZSkpKVxuICAgICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICB2YXIgdWIgPSB1cHBlckJvdW5kKHJhbmdlKVxuICBpZihpc0RlZih1YikpIHtcbiAgICB2YXIgY21wID0gY29tcGFyZShrZXksIHViKVxuICAgIGlmKGNtcCA+IDAgfHwgKGNtcCA9PT0gMCkgJiYgdXBwZXJCb3VuZEV4Y2x1c2l2ZShyYW5nZSkpXG4gICAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIHJldHVybiB0cnVlXG59XG5cbmV4cG9ydHMuZmlsdGVyID0gZnVuY3Rpb24gKHJhbmdlLCBjb21wYXJlKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuIGV4cG9ydHMuY29udGFpbnMocmFuZ2UsIGtleSwgY29tcGFyZSlcbiAgfVxufVxuXG5cblxuLyogV0VCUEFDSyBWQVIgSU5KRUNUSU9OICovfS5jYWxsKHRoaXMsIF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vLi4vYnVmZmVyL2luZGV4LmpzICovIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2J1ZmZlci9pbmRleC5qc1wiKS5CdWZmZXIpKVxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuLi8uLi9ub2RlX21vZHVsZXMvbWVtZG93bi9pbW1lZGlhdGUtYnJvd3Nlci5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC9ob21lL2h1eW5obmd1eWVuL2dpdGh1Yi9jYXVzYWxpdHkvbm9kZV9tb2R1bGVzL21lbWRvd24vaW1tZWRpYXRlLWJyb3dzZXIuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5tb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIGltbWVkaWF0ZSAqLyBcIi4uLy4uL25vZGVfbW9kdWxlcy9pbW1lZGlhdGUvbGliL2luZGV4LmpzXCIpXG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi4vLi4vbm9kZV9tb2R1bGVzL21lbWRvd24vbWVtZG93bi5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvbWVtZG93bi9tZW1kb3duLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgaW5oZXJpdHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBpbmhlcml0cyAqLyBcIi4uLy4uL25vZGVfbW9kdWxlcy9pbmhlcml0cy9pbmhlcml0c19icm93c2VyLmpzXCIpXG52YXIgQWJzdHJhY3RMZXZlbERPV04gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBhYnN0cmFjdC1sZXZlbGRvd24gKi8gXCIuLi8uLi9ub2RlX21vZHVsZXMvYWJzdHJhY3QtbGV2ZWxkb3duL2luZGV4LmpzXCIpLkFic3RyYWN0TGV2ZWxET1dOXG52YXIgQWJzdHJhY3RJdGVyYXRvciA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIGFic3RyYWN0LWxldmVsZG93biAqLyBcIi4uLy4uL25vZGVfbW9kdWxlcy9hYnN0cmFjdC1sZXZlbGRvd24vaW5kZXguanNcIikuQWJzdHJhY3RJdGVyYXRvclxudmFyIGx0Z3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBsdGd0ICovIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2x0Z3QvaW5kZXguanNcIilcbnZhciBjcmVhdGVSQlQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBmdW5jdGlvbmFsLXJlZC1ibGFjay10cmVlICovIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Z1bmN0aW9uYWwtcmVkLWJsYWNrLXRyZWUvcmJ0cmVlLmpzXCIpXG52YXIgQnVmZmVyID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgc2FmZS1idWZmZXIgKi8gXCIuLi8uLi9ub2RlX21vZHVsZXMvc2FmZS1idWZmZXIvaW5kZXguanNcIikuQnVmZmVyXG5cbi8vIEluIE5vZGUsIHVzZSBnbG9iYWwuc2V0SW1tZWRpYXRlLiBJbiB0aGUgYnJvd3NlciwgdXNlIGEgY29uc2lzdGVudFxuLy8gbWljcm90YXNrIGxpYnJhcnkgdG8gZ2l2ZSBjb25zaXN0ZW50IG1pY3JvdGFzayBleHBlcmllbmNlIHRvIGFsbCBicm93c2Vyc1xudmFyIHNldEltbWVkaWF0ZSA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vaW1tZWRpYXRlICovIFwiLi4vLi4vbm9kZV9tb2R1bGVzL21lbWRvd24vaW1tZWRpYXRlLWJyb3dzZXIuanNcIilcblxuZnVuY3Rpb24gZ3QgKHZhbHVlKSB7XG4gIHJldHVybiBsdGd0LmNvbXBhcmUodmFsdWUsIHRoaXMuX3VwcGVyQm91bmQpID4gMFxufVxuXG5mdW5jdGlvbiBndGUgKHZhbHVlKSB7XG4gIHJldHVybiBsdGd0LmNvbXBhcmUodmFsdWUsIHRoaXMuX3VwcGVyQm91bmQpID49IDBcbn1cblxuZnVuY3Rpb24gbHQgKHZhbHVlKSB7XG4gIHJldHVybiBsdGd0LmNvbXBhcmUodmFsdWUsIHRoaXMuX3VwcGVyQm91bmQpIDwgMFxufVxuXG5mdW5jdGlvbiBsdGUgKHZhbHVlKSB7XG4gIHJldHVybiBsdGd0LmNvbXBhcmUodmFsdWUsIHRoaXMuX3VwcGVyQm91bmQpIDw9IDBcbn1cblxuZnVuY3Rpb24gTWVtSXRlcmF0b3IgKGRiLCBvcHRpb25zKSB7XG4gIEFic3RyYWN0SXRlcmF0b3IuY2FsbCh0aGlzLCBkYilcbiAgdGhpcy5fbGltaXQgPSBvcHRpb25zLmxpbWl0XG5cbiAgaWYgKHRoaXMuX2xpbWl0ID09PSAtMSkgdGhpcy5fbGltaXQgPSBJbmZpbml0eVxuXG4gIHZhciB0cmVlID0gZGIuX3N0b3JlXG5cbiAgdGhpcy5rZXlBc0J1ZmZlciA9IG9wdGlvbnMua2V5QXNCdWZmZXIgIT09IGZhbHNlXG4gIHRoaXMudmFsdWVBc0J1ZmZlciA9IG9wdGlvbnMudmFsdWVBc0J1ZmZlciAhPT0gZmFsc2VcbiAgdGhpcy5fcmV2ZXJzZSA9IG9wdGlvbnMucmV2ZXJzZVxuICB0aGlzLl9vcHRpb25zID0gb3B0aW9uc1xuICB0aGlzLl9kb25lID0gMFxuXG4gIGlmICghdGhpcy5fcmV2ZXJzZSkge1xuICAgIHRoaXMuX2luY3IgPSAnbmV4dCdcbiAgICB0aGlzLl9sb3dlckJvdW5kID0gbHRndC5sb3dlckJvdW5kKG9wdGlvbnMpXG4gICAgdGhpcy5fdXBwZXJCb3VuZCA9IGx0Z3QudXBwZXJCb3VuZChvcHRpb25zKVxuXG4gICAgaWYgKHR5cGVvZiB0aGlzLl9sb3dlckJvdW5kID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5fdHJlZSA9IHRyZWUuYmVnaW5cbiAgICB9IGVsc2UgaWYgKGx0Z3QubG93ZXJCb3VuZEluY2x1c2l2ZShvcHRpb25zKSkge1xuICAgICAgdGhpcy5fdHJlZSA9IHRyZWUuZ2UodGhpcy5fbG93ZXJCb3VuZClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fdHJlZSA9IHRyZWUuZ3QodGhpcy5fbG93ZXJCb3VuZClcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fdXBwZXJCb3VuZCkge1xuICAgICAgaWYgKGx0Z3QudXBwZXJCb3VuZEluY2x1c2l2ZShvcHRpb25zKSkge1xuICAgICAgICB0aGlzLl90ZXN0ID0gbHRlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl90ZXN0ID0gbHRcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5faW5jciA9ICdwcmV2J1xuICAgIHRoaXMuX2xvd2VyQm91bmQgPSBsdGd0LnVwcGVyQm91bmQob3B0aW9ucylcbiAgICB0aGlzLl91cHBlckJvdW5kID0gbHRndC5sb3dlckJvdW5kKG9wdGlvbnMpXG5cbiAgICBpZiAodHlwZW9mIHRoaXMuX2xvd2VyQm91bmQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLl90cmVlID0gdHJlZS5lbmRcbiAgICB9IGVsc2UgaWYgKGx0Z3QudXBwZXJCb3VuZEluY2x1c2l2ZShvcHRpb25zKSkge1xuICAgICAgdGhpcy5fdHJlZSA9IHRyZWUubGUodGhpcy5fbG93ZXJCb3VuZClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fdHJlZSA9IHRyZWUubHQodGhpcy5fbG93ZXJCb3VuZClcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fdXBwZXJCb3VuZCkge1xuICAgICAgaWYgKGx0Z3QubG93ZXJCb3VuZEluY2x1c2l2ZShvcHRpb25zKSkge1xuICAgICAgICB0aGlzLl90ZXN0ID0gZ3RlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl90ZXN0ID0gZ3RcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuaW5oZXJpdHMoTWVtSXRlcmF0b3IsIEFic3RyYWN0SXRlcmF0b3IpXG5cbk1lbUl0ZXJhdG9yLnByb3RvdHlwZS5fbmV4dCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICB2YXIga2V5XG4gIHZhciB2YWx1ZVxuXG4gIGlmICh0aGlzLl9kb25lKysgPj0gdGhpcy5fbGltaXQpIHJldHVybiBzZXRJbW1lZGlhdGUoY2FsbGJhY2spXG4gIGlmICghdGhpcy5fdHJlZS52YWxpZCkgcmV0dXJuIHNldEltbWVkaWF0ZShjYWxsYmFjaylcblxuICBrZXkgPSB0aGlzLl90cmVlLmtleVxuICB2YWx1ZSA9IHRoaXMuX3RyZWUudmFsdWVcblxuICBpZiAoIXRoaXMuX3Rlc3Qoa2V5KSkgcmV0dXJuIHNldEltbWVkaWF0ZShjYWxsYmFjaylcblxuICBpZiAodGhpcy5rZXlBc0J1ZmZlciAmJiAhQnVmZmVyLmlzQnVmZmVyKGtleSkpIHtcbiAgICBrZXkgPSBCdWZmZXIuZnJvbShTdHJpbmcoa2V5KSlcbiAgfVxuXG4gIGlmICh0aGlzLnZhbHVlQXNCdWZmZXIgJiYgIUJ1ZmZlci5pc0J1ZmZlcih2YWx1ZSkpIHtcbiAgICB2YWx1ZSA9IEJ1ZmZlci5mcm9tKFN0cmluZyh2YWx1ZSkpXG4gIH1cblxuICB0aGlzLl90cmVlW3RoaXMuX2luY3JdKClcblxuICBzZXRJbW1lZGlhdGUoZnVuY3Rpb24gY2FsbE5leHQgKCkge1xuICAgIGNhbGxiYWNrKG51bGwsIGtleSwgdmFsdWUpXG4gIH0pXG59XG5cbk1lbUl0ZXJhdG9yLnByb3RvdHlwZS5fdGVzdCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRydWVcbn1cblxuZnVuY3Rpb24gTWVtRE9XTiAoKSB7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBNZW1ET1dOKSkgcmV0dXJuIG5ldyBNZW1ET1dOKClcblxuICBBYnN0cmFjdExldmVsRE9XTi5jYWxsKHRoaXMsICcnKVxuXG4gIHRoaXMuX3N0b3JlID0gY3JlYXRlUkJUKGx0Z3QuY29tcGFyZSlcbn1cblxuaW5oZXJpdHMoTWVtRE9XTiwgQWJzdHJhY3RMZXZlbERPV04pXG5cbk1lbURPV04ucHJvdG90eXBlLl9vcGVuID0gZnVuY3Rpb24gKG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gIHZhciBzZWxmID0gdGhpc1xuICBzZXRJbW1lZGlhdGUoZnVuY3Rpb24gY2FsbE5leHQgKCkge1xuICAgIGNhbGxiYWNrKG51bGwsIHNlbGYpXG4gIH0pXG59XG5cbk1lbURPV04ucHJvdG90eXBlLl9zZXJpYWxpemVLZXkgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiBrZXlcbn1cblxuTWVtRE9XTi5wcm90b3R5cGUuX3NlcmlhbGl6ZVZhbHVlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA9PSBudWxsID8gJycgOiB2YWx1ZVxufVxuXG5NZW1ET1dOLnByb3RvdHlwZS5fcHV0ID0gZnVuY3Rpb24gKGtleSwgdmFsdWUsIG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gIHZhciBpdGVyID0gdGhpcy5fc3RvcmUuZmluZChrZXkpXG5cbiAgaWYgKGl0ZXIudmFsaWQpIHtcbiAgICB0aGlzLl9zdG9yZSA9IGl0ZXIudXBkYXRlKHZhbHVlKVxuICB9IGVsc2Uge1xuICAgIHRoaXMuX3N0b3JlID0gdGhpcy5fc3RvcmUuaW5zZXJ0KGtleSwgdmFsdWUpXG4gIH1cblxuICBzZXRJbW1lZGlhdGUoY2FsbGJhY2spXG59XG5cbk1lbURPV04ucHJvdG90eXBlLl9nZXQgPSBmdW5jdGlvbiAoa2V5LCBvcHRpb25zLCBjYWxsYmFjaykge1xuICB2YXIgdmFsdWUgPSB0aGlzLl9zdG9yZS5nZXQoa2V5KVxuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgLy8gJ05vdEZvdW5kJyBlcnJvciwgY29uc2lzdGVudCB3aXRoIExldmVsRE9XTiBBUElcbiAgICByZXR1cm4gc2V0SW1tZWRpYXRlKGZ1bmN0aW9uIGNhbGxOZXh0ICgpIHtcbiAgICAgIGNhbGxiYWNrKG5ldyBFcnJvcignTm90Rm91bmQnKSlcbiAgICB9KVxuICB9XG5cbiAgaWYgKG9wdGlvbnMuYXNCdWZmZXIgIT09IGZhbHNlICYmICFCdWZmZXIuaXNCdWZmZXIodmFsdWUpKSB7XG4gICAgdmFsdWUgPSBCdWZmZXIuZnJvbShTdHJpbmcodmFsdWUpKVxuICB9XG5cbiAgc2V0SW1tZWRpYXRlKGZ1bmN0aW9uIGNhbGxOZXh0ICgpIHtcbiAgICBjYWxsYmFjayhudWxsLCB2YWx1ZSlcbiAgfSlcbn1cblxuTWVtRE9XTi5wcm90b3R5cGUuX2RlbCA9IGZ1bmN0aW9uIChrZXksIG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gIHRoaXMuX3N0b3JlID0gdGhpcy5fc3RvcmUucmVtb3ZlKGtleSlcbiAgc2V0SW1tZWRpYXRlKGNhbGxiYWNrKVxufVxuXG5NZW1ET1dOLnByb3RvdHlwZS5fYmF0Y2ggPSBmdW5jdGlvbiAoYXJyYXksIG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gIHZhciBpID0gLTFcbiAgdmFyIGtleVxuICB2YXIgdmFsdWVcbiAgdmFyIGl0ZXJcbiAgdmFyIGxlbiA9IGFycmF5Lmxlbmd0aFxuICB2YXIgdHJlZSA9IHRoaXMuX3N0b3JlXG5cbiAgd2hpbGUgKCsraSA8IGxlbikge1xuICAgIGtleSA9IGFycmF5W2ldLmtleVxuICAgIGl0ZXIgPSB0cmVlLmZpbmQoa2V5KVxuXG4gICAgaWYgKGFycmF5W2ldLnR5cGUgPT09ICdwdXQnKSB7XG4gICAgICB2YWx1ZSA9IGFycmF5W2ldLnZhbHVlXG4gICAgICB0cmVlID0gaXRlci52YWxpZCA/IGl0ZXIudXBkYXRlKHZhbHVlKSA6IHRyZWUuaW5zZXJ0KGtleSwgdmFsdWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRyZWUgPSBpdGVyLnJlbW92ZSgpXG4gICAgfVxuICB9XG5cbiAgdGhpcy5fc3RvcmUgPSB0cmVlXG5cbiAgc2V0SW1tZWRpYXRlKGNhbGxiYWNrKVxufVxuXG5NZW1ET1dOLnByb3RvdHlwZS5faXRlcmF0b3IgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICByZXR1cm4gbmV3IE1lbUl0ZXJhdG9yKHRoaXMsIG9wdGlvbnMpXG59XG5cbm1vZHVsZS5leHBvcnRzID0gTWVtRE9XTi5kZWZhdWx0ID0gTWVtRE9XTlxuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4uLy4uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC9ob21lL2h1eW5obmd1eWVuL2dpdGh1Yi9jYXVzYWxpdHkvbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuLi8uLi9ub2RlX21vZHVsZXMvc2FmZS1idWZmZXIvaW5kZXguanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvc2FmZS1idWZmZXIvaW5kZXguanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuLyogZXNsaW50LWRpc2FibGUgbm9kZS9uby1kZXByZWNhdGVkLWFwaSAqL1xudmFyIGJ1ZmZlciA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIGJ1ZmZlciAqLyBcIi4uLy4uL25vZGVfbW9kdWxlcy9idWZmZXIvaW5kZXguanNcIilcbnZhciBCdWZmZXIgPSBidWZmZXIuQnVmZmVyXG5cbi8vIGFsdGVybmF0aXZlIHRvIHVzaW5nIE9iamVjdC5rZXlzIGZvciBvbGQgYnJvd3NlcnNcbmZ1bmN0aW9uIGNvcHlQcm9wcyAoc3JjLCBkc3QpIHtcbiAgZm9yICh2YXIga2V5IGluIHNyYykge1xuICAgIGRzdFtrZXldID0gc3JjW2tleV1cbiAgfVxufVxuaWYgKEJ1ZmZlci5mcm9tICYmIEJ1ZmZlci5hbGxvYyAmJiBCdWZmZXIuYWxsb2NVbnNhZmUgJiYgQnVmZmVyLmFsbG9jVW5zYWZlU2xvdykge1xuICBtb2R1bGUuZXhwb3J0cyA9IGJ1ZmZlclxufSBlbHNlIHtcbiAgLy8gQ29weSBwcm9wZXJ0aWVzIGZyb20gcmVxdWlyZSgnYnVmZmVyJylcbiAgY29weVByb3BzKGJ1ZmZlciwgZXhwb3J0cylcbiAgZXhwb3J0cy5CdWZmZXIgPSBTYWZlQnVmZmVyXG59XG5cbmZ1bmN0aW9uIFNhZmVCdWZmZXIgKGFyZywgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBCdWZmZXIoYXJnLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpXG59XG5cbi8vIENvcHkgc3RhdGljIG1ldGhvZHMgZnJvbSBCdWZmZXJcbmNvcHlQcm9wcyhCdWZmZXIsIFNhZmVCdWZmZXIpXG5cblNhZmVCdWZmZXIuZnJvbSA9IGZ1bmN0aW9uIChhcmcsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aCkge1xuICBpZiAodHlwZW9mIGFyZyA9PT0gJ251bWJlcicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudCBtdXN0IG5vdCBiZSBhIG51bWJlcicpXG4gIH1cbiAgcmV0dXJuIEJ1ZmZlcihhcmcsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aClcbn1cblxuU2FmZUJ1ZmZlci5hbGxvYyA9IGZ1bmN0aW9uIChzaXplLCBmaWxsLCBlbmNvZGluZykge1xuICBpZiAodHlwZW9mIHNpemUgIT09ICdudW1iZXInKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnQgbXVzdCBiZSBhIG51bWJlcicpXG4gIH1cbiAgdmFyIGJ1ZiA9IEJ1ZmZlcihzaXplKVxuICBpZiAoZmlsbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgaWYgKHR5cGVvZiBlbmNvZGluZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGJ1Zi5maWxsKGZpbGwsIGVuY29kaW5nKVxuICAgIH0gZWxzZSB7XG4gICAgICBidWYuZmlsbChmaWxsKVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBidWYuZmlsbCgwKVxuICB9XG4gIHJldHVybiBidWZcbn1cblxuU2FmZUJ1ZmZlci5hbGxvY1Vuc2FmZSA9IGZ1bmN0aW9uIChzaXplKSB7XG4gIGlmICh0eXBlb2Ygc2l6ZSAhPT0gJ251bWJlcicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudCBtdXN0IGJlIGEgbnVtYmVyJylcbiAgfVxuICByZXR1cm4gQnVmZmVyKHNpemUpXG59XG5cblNhZmVCdWZmZXIuYWxsb2NVbnNhZmVTbG93ID0gZnVuY3Rpb24gKHNpemUpIHtcbiAgaWYgKHR5cGVvZiBzaXplICE9PSAnbnVtYmVyJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50IG11c3QgYmUgYSBudW1iZXInKVxuICB9XG4gIHJldHVybiBidWZmZXIuU2xvd0J1ZmZlcihzaXplKVxufVxuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4uLy4uL25vZGVfbW9kdWxlcy93ZWJwYWNrL2J1aWxkaW4vZ2xvYmFsLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAod2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbnZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuLi8uLi9ub2RlX21vZHVsZXMveHRlbmQvaW1tdXRhYmxlLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAvaG9tZS9odXluaG5ndXllbi9naXRodWIvY2F1c2FsaXR5L25vZGVfbW9kdWxlcy94dGVuZC9pbW11dGFibGUuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbm1vZHVsZS5leHBvcnRzID0gZXh0ZW5kXG5cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbmZ1bmN0aW9uIGV4dGVuZCgpIHtcbiAgICB2YXIgdGFyZ2V0ID0ge31cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV1cblxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0XG59XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvaW5kZXguanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvaW5kZXguanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgZXhwb3J0cyBwcm92aWRlZDogbWVtRG93bkNhY2hlLCBNZW1DYWNoZU1peGlucyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbl9fd2VicGFja19yZXF1aXJlX18ucihfX3dlYnBhY2tfZXhwb3J0c19fKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfbWVtZG93bkNhY2hlX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL21lbWRvd25DYWNoZSAqLyBcIi4vc3JjL21lbWRvd25DYWNoZS5qc1wiKTtcbi8qIGhhcm1vbnkgcmVleHBvcnQgKHNhZmUpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcIm1lbURvd25DYWNoZVwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIF9tZW1kb3duQ2FjaGVfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX1tcImRlZmF1bHRcIl07IH0pO1xuXG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX21lbWNhY2hlX21peGluc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9tZW1jYWNoZS5taXhpbnMgKi8gXCIuL3NyYy9tZW1jYWNoZS5taXhpbnMuanNcIik7XG4vKiBoYXJtb255IHJlZXhwb3J0IChzYWZlKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJNZW1DYWNoZU1peGluc1wiLCBmdW5jdGlvbigpIHsgcmV0dXJuIF9tZW1jYWNoZV9taXhpbnNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX1tcImRlZmF1bHRcIl07IH0pO1xuXG5cblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9tZW1jYWNoZS5taXhpbnMuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL21lbWNhY2hlLm1peGlucy5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgZXhwb3J0cyBwcm92aWRlZDogZGVmYXVsdCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbl9fd2VicGFja19yZXF1aXJlX18ucihfX3dlYnBhY2tfZXhwb3J0c19fKTtcbi8qKlxuICogVGhpcyBtaXhpbnMgY2xhc3MgcHJvdmlkZXMgYXR0cmlidXRlczogKipNZW1DYWNoZSoqLlxuICogQGNsYXNzIE1lbUNhY2hlTWl4aW5zXG4gKiBAZXh0ZW5kcyB7QmFzZUNsYXNzfVxuICovXG5jb25zdCBNZW1DYWNoZU1peGlucyA9IEJhc2VDbGFzcyA9PiBjbGFzcyBleHRlbmRzIEJhc2VDbGFzcyB7XG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZHMgcmV0dXJuIHN1bW1hcnkgYWJvdXQgaXRlbXMgb2YgdGhlIGN1cnJlbnQgbWVtY2FjaGUgXG4gICAqIEByZXR1cm5zXG4gICAqL1xuICBhc3luYyBtZW1DYWNoZVN1bW1hcnkoKSB7XG4gICAgcmV0dXJuIGF3YWl0IHRoaXMubWVtQ2FjaGUuZ2V0SXRlbUxpc3QoKTtcbiAgfVxuXG4gIHNldCBNZW1DYWNoZShtZW1DYWNoZSkge1xuICAgIHRoaXMubWVtQ2FjaGUgPSBtZW1DYWNoZTtcbiAgfVxuXG4gIGdldCBNZW1DYWNoZSgpIHtcbiAgICByZXR1cm4gdGhpcy5tZW1DYWNoZTtcbiAgfVxuXG59O1xuXG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIF9fd2VicGFja19leHBvcnRzX19bXCJkZWZhdWx0XCJdID0gKE1lbUNhY2hlTWl4aW5zKTtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvbWVtZG93bkNhY2hlLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9tZW1kb3duQ2FjaGUuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIGV4cG9ydHMgcHJvdmlkZWQ6IGRlZmF1bHQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgY2F1c2FsX25ldF91dGlsc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgY2F1c2FsLW5ldC51dGlscyAqLyBcImNhdXNhbC1uZXQudXRpbHNcIik7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgY2F1c2FsX25ldF91dGlsc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovX193ZWJwYWNrX3JlcXVpcmVfXy5uKGNhdXNhbF9uZXRfdXRpbHNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgY2F1c2FsX25ldF9jb3JlX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBjYXVzYWwtbmV0LmNvcmUgKi8gXCJjYXVzYWwtbmV0LmNvcmVcIik7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgY2F1c2FsX25ldF9jb3JlX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19fZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9fX3dlYnBhY2tfcmVxdWlyZV9fLm4oY2F1c2FsX25ldF9jb3JlX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX18pO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9tZW1vcml6aW5nX21peGluc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9tZW1vcml6aW5nLm1peGlucyAqLyBcIi4vc3JjL21lbW9yaXppbmcubWl4aW5zLmpzXCIpO1xuXG5cblxuLyoqXG4gKiBUaGlzIGNsYXNzIHByb3ZpZGVzIHN0b3JhZ2UgaW1wbGVtZW50YXRpb24gZm9yIG1lbW9yeSBjYWNoaW5nIG9uIHRvcCBvZlxuICogW21lbWRvd25dKGh0dHBzOi8vd3d3Lm5wbWpzLmNvbS9wYWNrYWdlL21lbWRvd24pIHdoaWNoIGNhbiBiZSBhY2Nlc3NlZCB2aWEgKiptZW1Eb3duQ2FjaGUqKi5cbiAqIHsgbWl4V2l0aDogWyBNZW1vcml6aW5nTWl4aW5zIF0gfVxuICogQGNsYXNzIE1lbWRvd25DYWNoZVxuICogQGV4dGVuZHMgQmFzZU1lbUNhY2hlXG4gKi9cblxuY2xhc3MgTWVtZG93bkNhY2hlIGV4dGVuZHMgY2F1c2FsX25ldF91dGlsc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fW1wicGxhdGZvcm1cIl0ubWl4V2l0aChjYXVzYWxfbmV0X2NvcmVfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX1tcIlN0b3JlXCJdLCBbX21lbW9yaXppbmdfbWl4aW5zX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19bXCJkZWZhdWx0XCJdXSkge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuY29ubmVjdCgpO1xuICB9XG4gIC8qKlxuICAgKiBDb25uZWN0IHRvIGRhdGFiYXNlLCB0aGlzIGZ1bmN0aW9uIHNoYWxsIGJlIGNhbGwgd2hlbiBjb25zdHJ1Y3QgaW5zdGFuY2VcbiAgICogQG1lbWJlcm9mIE1lbWRvd25DYWNoZVxuICAgKi9cblxuXG4gIGNvbm5lY3QoKSB7XG4gICAgbGV0IG1lbWRvd24gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBtZW1kb3duICovIFwiLi4vLi4vbm9kZV9tb2R1bGVzL21lbWRvd24vbWVtZG93bi5qc1wiKTtcblxuICAgIHRoaXMuc3RvcmUgPSB0aGlzLmxldmVsdXAobWVtZG93bigpKTtcbiAgfVxuXG59XG5cbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gX193ZWJwYWNrX2V4cG9ydHNfX1tcImRlZmF1bHRcIl0gPSAobmV3IE1lbWRvd25DYWNoZSgpKTtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvbWVtb3JpemluZy5taXhpbnMuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvbWVtb3JpemluZy5taXhpbnMuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgZXhwb3J0cyBwcm92aWRlZDogZGVmYXVsdCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbl9fd2VicGFja19yZXF1aXJlX18ucihfX3dlYnBhY2tfZXhwb3J0c19fKTtcbi8qKlxuICogVGhpcyBNZW1vcml6aW5nTWl4aW5zIGNsYXNzIGlzIGEgbWl4aW5zIGNsYXNzIGZvciBpbXBsZW1lbnQgbWVtb3J5IG1ldGhvZHNcbiAqIEBjbGFzcyBNZW1vcml6aW5nTWl4aW5zXG4gKiBAZXhwZXJpbWVudFxuICogQGV4dGVuZHMgQmFzZU1lbUNhY2hlQ2xhc3NcbiAqL1xuY29uc3QgTWVtb3JpemluZ01peGlucyA9IEJhc2VNZW1DYWNoZUNsYXNzID0+IGNsYXNzIGV4dGVuZHMgQmFzZU1lbUNhY2hlQ2xhc3Mge1xuICAvKipcbiAgICogUmVhZCBjb250ZW50IGZyb20gXG4gICAqIEBleHBlcmltZW50XG4gICAqIEBwYXJhbSB7IFN0cmluZ3xOdW1iZXIgfSBtZW1vcnlTbG90SW5kZXggLSBtZW1vcnkgc2xvdCBpbmRleFxuICAgKiBAcmV0dXJuc1xuICAgKi9cbiAgYXN5bmMgcmVhZChtZW1vcnlTbG90SW5kZXgpIHtcbiAgICBjb25zdCBHZXRGcm9tTWVtb3J5ID0gYXN5bmMgbWVtb3J5U2xvdEluZGV4ID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGxldCBkYXRhID0gYXdhaXQgdGhpcy5nZXRJdGVtKG1lbW9yeVNsb3RJbmRleCk7XG4gICAgICAgIHJldHVybiBPYmplY3QudmFsdWVzKGRhdGEpWzBdO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gYXdhaXQgR2V0RnJvbU1lbW9yeShtZW1vcnlTbG90SW5kZXgpO1xuICB9XG4gIC8qKlxuICAgKiBcbiAgICogQHBhcmFtIHsgU3RyaW5nfE51bWJlciB9IG1lbW9yeVNsb3RJbmRleCAtIHBvc2l0aXZlIG51bWJlciBmb3IgbWVtb3J5IHNsb3RcbiAgICogQHBhcmFtIHsgQXJyYXkgfSBtZW1vcnkgdmFsdWVcbiAgICogQHJldHVybnMgeyBQcm9taXNlIH0gbWVtb3J5IHNsb3QgaW5kZXggdmFsdWVcbiAgICovXG5cblxuICBhc3luYyB3cml0ZShtZW1vcnlTbG90SW5kZXgsIHZhbHVlKSB7XG4gICAgcmV0dXJuIGF3YWl0IHRoaXMuc2V0SXRlbShtZW1vcnlTbG90SW5kZXgsIHZhbHVlKTtcbiAgfVxuICAvKipcbiAgICpcbiAgICpcbiAgICogQHBhcmFtIHsqfSBzbG90SWR4c1xuICAgKiBAcmV0dXJuc1xuICAgKi9cblxuXG4gIGFzeW5jIHJlY2FsbChzbG90SWR4cykge1xuICAgIGxldCBtZW1vcnkgPSBbXTtcblxuICAgIGZvciAobGV0IHNsb3RJZHggb2Ygc2xvdElkeHMpIHtcbiAgICAgIG1lbW9yeS5wdXNoKChhd2FpdCB0aGlzLnJlYWQoc2xvdElkeCkpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb3J5O1xuICB9XG5cbn07XG5cbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gX193ZWJwYWNrX2V4cG9ydHNfX1tcImRlZmF1bHRcIl0gPSAoTWVtb3JpemluZ01peGlucyk7XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcImNhdXNhbC1uZXQuY29yZVwiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiBleHRlcm5hbCBcImNhdXNhbC1uZXQuY29yZVwiICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X2NvcmVfXztcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiY2F1c2FsLW5ldC51dGlsc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogZXh0ZXJuYWwgXCJjYXVzYWwtbmV0LnV0aWxzXCIgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3V0aWxzX187XG5cbi8qKiovIH0pXG5cbi8qKioqKiovIH0pO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbmRsWW5CaFkyczZMeTlBWTJGMWMyRnNUbVYwTDIxbGJXTmhZMmhsTDNkbFluQmhZMnN2ZFc1cGRtVnljMkZzVFc5a2RXeGxSR1ZtYVc1cGRHbHZiaUlzSW5kbFluQmhZMnM2THk5QVkyRjFjMkZzVG1WMEwyMWxiV05oWTJobEwzZGxZbkJoWTJzdlltOXZkSE4wY21Gd0lpd2lkMlZpY0dGamF6b3ZMMEJqWVhWellXeE9aWFF2YldWdFkyRmphR1V2TDJodmJXVXZhSFY1Ym1odVozVjVaVzR2WjJsMGFIVmlMMk5oZFhOaGJHbDBlUzl1YjJSbFgyMXZaSFZzWlhNdllXSnpkSEpoWTNRdGJHVjJaV3hrYjNkdUwyRmljM1J5WVdOMExXTm9ZV2x1WldRdFltRjBZMmd1YW5NaUxDSjNaV0p3WVdOck9pOHZRR05oZFhOaGJFNWxkQzl0WlcxallXTm9aUzh2YUc5dFpTOW9kWGx1YUc1bmRYbGxiaTluYVhSb2RXSXZZMkYxYzJGc2FYUjVMMjV2WkdWZmJXOWtkV3hsY3k5aFluTjBjbUZqZEMxc1pYWmxiR1J2ZDI0dllXSnpkSEpoWTNRdGFYUmxjbUYwYjNJdWFuTWlMQ0ozWldKd1lXTnJPaTh2UUdOaGRYTmhiRTVsZEM5dFpXMWpZV05vWlM4dmFHOXRaUzlvZFhsdWFHNW5kWGxsYmk5bmFYUm9kV0l2WTJGMWMyRnNhWFI1TDI1dlpHVmZiVzlrZFd4bGN5OWhZbk4wY21GamRDMXNaWFpsYkdSdmQyNHZZV0p6ZEhKaFkzUXRiR1YyWld4a2IzZHVMbXB6SWl3aWQyVmljR0ZqYXpvdkwwQmpZWFZ6WVd4T1pYUXZiV1Z0WTJGamFHVXZMMmh2YldVdmFIVjVibWh1WjNWNVpXNHZaMmwwYUhWaUwyTmhkWE5oYkdsMGVTOXViMlJsWDIxdlpIVnNaWE12WVdKemRISmhZM1F0YkdWMlpXeGtiM2R1TDJsdVpHVjRMbXB6SWl3aWQyVmljR0ZqYXpvdkwwQmpZWFZ6WVd4T1pYUXZiV1Z0WTJGamFHVXZMMmh2YldVdmFIVjVibWh1WjNWNVpXNHZaMmwwYUhWaUwyTmhkWE5oYkdsMGVTOXViMlJsWDIxdlpIVnNaWE12WW1GelpUWTBMV3B6TDJsdVpHVjRMbXB6SWl3aWQyVmljR0ZqYXpvdkwwQmpZWFZ6WVd4T1pYUXZiV1Z0WTJGamFHVXZMMmh2YldVdmFIVjVibWh1WjNWNVpXNHZaMmwwYUhWaUwyTmhkWE5oYkdsMGVTOXViMlJsWDIxdlpIVnNaWE12WW5WbVptVnlMMmx1WkdWNExtcHpJaXdpZDJWaWNHRmphem92TDBCallYVnpZV3hPWlhRdmJXVnRZMkZqYUdVdkwyaHZiV1V2YUhWNWJtaHVaM1Y1Wlc0dloybDBhSFZpTDJOaGRYTmhiR2wwZVM5dWIyUmxYMjF2WkhWc1pYTXZZblZtWm1WeUwyNXZaR1ZmYlc5a2RXeGxjeTlwYzJGeWNtRjVMMmx1WkdWNExtcHpJaXdpZDJWaWNHRmphem92TDBCallYVnpZV3hPWlhRdmJXVnRZMkZqYUdVdkwyaHZiV1V2YUhWNWJtaHVaM1Y1Wlc0dloybDBhSFZpTDJOaGRYTmhiR2wwZVM5dWIyUmxYMjF2WkhWc1pYTXZablZ1WTNScGIyNWhiQzF5WldRdFlteGhZMnN0ZEhKbFpTOXlZblJ5WldVdWFuTWlMQ0ozWldKd1lXTnJPaTh2UUdOaGRYTmhiRTVsZEM5dFpXMWpZV05vWlM4dmFHOXRaUzlvZFhsdWFHNW5kWGxsYmk5bmFYUm9kV0l2WTJGMWMyRnNhWFI1TDI1dlpHVmZiVzlrZFd4bGN5OXBaV1ZsTnpVMEwybHVaR1Y0TG1weklpd2lkMlZpY0dGamF6b3ZMMEJqWVhWellXeE9aWFF2YldWdFkyRmphR1V2TDJodmJXVXZhSFY1Ym1odVozVjVaVzR2WjJsMGFIVmlMMk5oZFhOaGJHbDBlUzl1YjJSbFgyMXZaSFZzWlhNdmFXMXRaV1JwWVhSbEwyeHBZaTlwYm1SbGVDNXFjeUlzSW5kbFluQmhZMnM2THk5QVkyRjFjMkZzVG1WMEwyMWxiV05oWTJobEx5OW9iMjFsTDJoMWVXNW9ibWQxZVdWdUwyZHBkR2gxWWk5allYVnpZV3hwZEhrdmJtOWtaVjl0YjJSMWJHVnpMMmx0YldWa2FXRjBaUzlzYVdJdmJXVnpjMkZuWlVOb1lXNXVaV3d1YW5NaUxDSjNaV0p3WVdOck9pOHZRR05oZFhOaGJFNWxkQzl0WlcxallXTm9aUzh2YUc5dFpTOW9kWGx1YUc1bmRYbGxiaTluYVhSb2RXSXZZMkYxYzJGc2FYUjVMMjV2WkdWZmJXOWtkV3hsY3k5cGJXMWxaR2xoZEdVdmJHbGlMMjExZEdGMGFXOXVMbXB6SWl3aWQyVmljR0ZqYXpvdkwwQmpZWFZ6WVd4T1pYUXZiV1Z0WTJGamFHVXZMMmh2YldVdmFIVjVibWh1WjNWNVpXNHZaMmwwYUhWaUwyTmhkWE5oYkdsMGVTOXViMlJsWDIxdlpIVnNaWE12YVcxdFpXUnBZWFJsTDJ4cFlpOXVaWGgwVkdsamF5NXFjeUlzSW5kbFluQmhZMnM2THk5QVkyRjFjMkZzVG1WMEwyMWxiV05oWTJobEx5OW9iMjFsTDJoMWVXNW9ibWQxZVdWdUwyZHBkR2gxWWk5allYVnpZV3hwZEhrdmJtOWtaVjl0YjJSMWJHVnpMMmx0YldWa2FXRjBaUzlzYVdJdmMzUmhkR1ZEYUdGdVoyVXVhbk1pTENKM1pXSndZV05yT2k4dlFHTmhkWE5oYkU1bGRDOXRaVzFqWVdOb1pTOHZhRzl0WlM5b2RYbHVhRzVuZFhsbGJpOW5hWFJvZFdJdlkyRjFjMkZzYVhSNUwyNXZaR1ZmYlc5a2RXeGxjeTlwYlcxbFpHbGhkR1V2YkdsaUwzUnBiV1Z2ZFhRdWFuTWlMQ0ozWldKd1lXTnJPaTh2UUdOaGRYTmhiRTVsZEM5dFpXMWpZV05vWlM4dmFHOXRaUzlvZFhsdWFHNW5kWGxsYmk5bmFYUm9kV0l2WTJGMWMyRnNhWFI1TDI1dlpHVmZiVzlrZFd4bGN5OXBibWhsY21sMGN5OXBibWhsY21sMGMxOWljbTkzYzJWeUxtcHpJaXdpZDJWaWNHRmphem92TDBCallYVnpZV3hPWlhRdmJXVnRZMkZqYUdVdkwyaHZiV1V2YUhWNWJtaHVaM1Y1Wlc0dloybDBhSFZpTDJOaGRYTmhiR2wwZVM5dWIyUmxYMjF2WkhWc1pYTXZiSFJuZEM5cGJtUmxlQzVxY3lJc0luZGxZbkJoWTJzNkx5OUFZMkYxYzJGc1RtVjBMMjFsYldOaFkyaGxMeTlvYjIxbEwyaDFlVzVvYm1kMWVXVnVMMmRwZEdoMVlpOWpZWFZ6WVd4cGRIa3ZibTlrWlY5dGIyUjFiR1Z6TDIxbGJXUnZkMjR2YVcxdFpXUnBZWFJsTFdKeWIzZHpaWEl1YW5NaUxDSjNaV0p3WVdOck9pOHZRR05oZFhOaGJFNWxkQzl0WlcxallXTm9aUzh2YUc5dFpTOW9kWGx1YUc1bmRYbGxiaTluYVhSb2RXSXZZMkYxYzJGc2FYUjVMMjV2WkdWZmJXOWtkV3hsY3k5dFpXMWtiM2R1TDIxbGJXUnZkMjR1YW5NaUxDSjNaV0p3WVdOck9pOHZRR05oZFhOaGJFNWxkQzl0WlcxallXTm9aUzh2YUc5dFpTOW9kWGx1YUc1bmRYbGxiaTluYVhSb2RXSXZZMkYxYzJGc2FYUjVMMjV2WkdWZmJXOWtkV3hsY3k5d2NtOWpaWE56TDJKeWIzZHpaWEl1YW5NaUxDSjNaV0p3WVdOck9pOHZRR05oZFhOaGJFNWxkQzl0WlcxallXTm9aUzh2YUc5dFpTOW9kWGx1YUc1bmRYbGxiaTluYVhSb2RXSXZZMkYxYzJGc2FYUjVMMjV2WkdWZmJXOWtkV3hsY3k5ellXWmxMV0oxWm1abGNpOXBibVJsZUM1cWN5SXNJbmRsWW5CaFkyczZMeTlBWTJGMWMyRnNUbVYwTDIxbGJXTmhZMmhsTHloM1pXSndZV05yS1M5aWRXbHNaR2x1TDJkc2IySmhiQzVxY3lJc0luZGxZbkJoWTJzNkx5OUFZMkYxYzJGc1RtVjBMMjFsYldOaFkyaGxMeTlvYjIxbEwyaDFlVzVvYm1kMWVXVnVMMmRwZEdoMVlpOWpZWFZ6WVd4cGRIa3ZibTlrWlY5dGIyUjFiR1Z6TDNoMFpXNWtMMmx0YlhWMFlXSnNaUzVxY3lJc0luZGxZbkJoWTJzNkx5OUFZMkYxYzJGc1RtVjBMMjFsYldOaFkyaGxMeTR2YzNKakwybHVaR1Y0TG1weklpd2lkMlZpY0dGamF6b3ZMMEJqWVhWellXeE9aWFF2YldWdFkyRmphR1V2TGk5emNtTXZiV1Z0WTJGamFHVXViV2w0YVc1ekxtcHpJaXdpZDJWaWNHRmphem92TDBCallYVnpZV3hPWlhRdmJXVnRZMkZqYUdVdkxpOXpjbU12YldWdFpHOTNia05oWTJobExtcHpJaXdpZDJWaWNHRmphem92TDBCallYVnpZV3hPWlhRdmJXVnRZMkZqYUdVdkxpOXpjbU12YldWdGIzSnBlbWx1Wnk1dGFYaHBibk11YW5NaUxDSjNaV0p3WVdOck9pOHZRR05oZFhOaGJFNWxkQzl0WlcxallXTm9aUzlsZUhSbGNtNWhiQ0JjSW1OaGRYTmhiQzF1WlhRdVkyOXlaVndpSWl3aWQyVmljR0ZqYXpvdkwwQmpZWFZ6WVd4T1pYUXZiV1Z0WTJGamFHVXZaWGgwWlhKdVlXd2dYQ0pqWVhWellXd3RibVYwTG5WMGFXeHpYQ0lpWFN3aWJtRnRaWE1pT2xzaVRXVnRRMkZqYUdWTmFYaHBibk1pTENKQ1lYTmxRMnhoYzNNaUxDSnRaVzFEWVdOb1pWTjFiVzFoY25raUxDSnRaVzFEWVdOb1pTSXNJbWRsZEVsMFpXMU1hWE4wSWl3aVRXVnRRMkZqYUdVaUxDSk5aVzFrYjNkdVEyRmphR1VpTENKd2JHRjBabTl5YlNJc0ltMXBlRmRwZEdnaUxDSkNZWE5sVFdWdFEyRmphR1VpTENKTlpXMXZjbWw2YVc1blRXbDRhVzV6SWl3aVkyOXVjM1J5ZFdOMGIzSWlMQ0pqYjI1dVpXTjBJaXdpYldWdFpHOTNiaUlzSW5KbGNYVnBjbVVpTENKemRHOXlaU0lzSW14bGRtVnNkWEFpTENKQ1lYTmxUV1Z0UTJGamFHVkRiR0Z6Y3lJc0luSmxZV1FpTENKdFpXMXZjbmxUYkc5MFNXNWtaWGdpTENKSFpYUkdjbTl0VFdWdGIzSjVJaXdpWkdGMFlTSXNJbWRsZEVsMFpXMGlMQ0pQWW1wbFkzUWlMQ0oyWVd4MVpYTWlMQ0psY25JaUxDSjNjbWwwWlNJc0luWmhiSFZsSWl3aWMyVjBTWFJsYlNJc0luSmxZMkZzYkNJc0luTnNiM1JKWkhoeklpd2liV1Z0YjNKNUlpd2ljMnh2ZEVsa2VDSXNJbkIxYzJnaVhTd2liV0Z3Y0dsdVozTWlPaUpCUVVGQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFTkJRVU03UVVGRFJDeFBPMEZEVmtFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3T3p0QlFVZEJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hyUkVGQk1FTXNaME5CUVdkRE8wRkJRekZGTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEVzWjBWQlFYZEVMR3RDUVVGclFqdEJRVU14UlR0QlFVTkJMSGxFUVVGcFJDeGpRVUZqTzBGQlF5OUVPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeHBSRUZCZVVNc2FVTkJRV2xETzBGQlF6RkZMSGRJUVVGblNDeHRRa0ZCYlVJc1JVRkJSVHRCUVVOeVNUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxHMURRVUV5UWl3d1FrRkJNRUlzUlVGQlJUdEJRVU4yUkN4NVEwRkJhVU1zWlVGQlpUdEJRVU5vUkR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFTdzRSRUZCYzBRc0swUkJRU3RFT3p0QlFVVnlTRHRCUVVOQk96czdRVUZIUVR0QlFVTkJPenM3T3pzN096czdPenM3UVVOc1JrRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQkxGbEJRVms3TzBGQlJWbzdRVUZEUVRzN1FVRkZRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFc2VVSkJRWGxDTEhORFFVRnpRenRCUVVNdlJEczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEVzV1VGQldUczdRVUZGV2p0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVN4NVFrRkJlVUlzZDBKQlFYZENPMEZCUTJwRU96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFTeHpRMEZCYzBNN1FVRkRkRU03UVVGRFFUdEJRVU5CTzBGQlEwRXNiME5CUVc5RExHRkJRV0U3TzBGQlJXcEVPenRCUVVWQk8wRkJRMEVzTUVOQlFUQkRPenRCUVVVeFF6dEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUczdPenM3T3pzN096czdPenRCUTNaR1FUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzUjBGQlJ6czdRVUZGU0R0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHM3T3pzN096czdPenM3T3p0QlEzWkVRVHM3UVVGRlFTeFpRVUZaTEcxQ1FVRlBMRU5CUVVNc2IwUkJRVTg3UVVGRE0wSXNkVUpCUVhWQ0xHMUNRVUZQTEVOQlFVTXNkVVpCUVhGQ08wRkJRM0JFTERKQ1FVRXlRaXh0UWtGQlR5eERRVUZETEdsSFFVRXdRanRCUVVNM1JEdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQkxITkRRVUZ6UXpzN1FVRkZkRU03UVVGRFFUdEJRVU5CT3p0QlFVVkJMRzlEUVVGdlF5eGhRVUZoT3p0QlFVVnFSRHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeEhRVUZITzBGQlEwZzdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEVkQlFVYzdRVUZEU0RzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVN4elEwRkJjME03TzBGQlJYUkRPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPenRCUVVWQkxHOURRVUZ2UXl4aFFVRmhPenRCUVVWcVJEczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEVzWjBOQlFXZERMR3REUVVGclF6dEJRVU5zUlRzN1FVRkZRVHRCUVVOQkxITkRRVUZ6UXpzN1FVRkZkRU03UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVN4dlEwRkJiME1zWVVGQllUczdRVUZGYWtRN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRU3h6UTBGQmMwTTdPMEZCUlhSRE8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk96dEJRVVZCTEc5RFFVRnZReXhoUVVGaE96dEJRVVZxUkR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJMREJDUVVFd1FqczdRVUZGTVVJc2MwTkJRWE5ET3p0QlFVVjBReXh2UTBGQmIwTTdPMEZCUlhCRE8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUVzWjBSQlFXZEVMR0ZCUVdFN08wRkJSVGRFT3p0QlFVVkJMR2xDUVVGcFFpeHJRa0ZCYTBJN1FVRkRia003UVVGRFFUdEJRVU5CT3p0QlFVVkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk96dEJRVVZCTERKQ1FVRXlRanM3UVVGRk0wSTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTEc5RFFVRnZReXhoUVVGaE8wRkJRMnBFTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3T3pzN096czdPenM3T3pzN1FVTjBVVUVzTkVKQlFUUkNMRzFDUVVGUExFTkJRVU1zZVVaQlFYTkNPMEZCUXpGRUxESkNRVUV5UWl4dFFrRkJUeXhEUVVGRExIVkdRVUZ4UWp0QlFVTjRSQ3dyUWtGQkswSXNiVUpCUVU4c1EwRkJReXhwUjBGQk1FSTdPenM3T3pzN096czdPenM3UVVOR2NrUTdPMEZCUlZvN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQkxHdERRVUZyUXl4VFFVRlRPMEZCUXpORE8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUczdRVUZGUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVN4cFFrRkJhVUlzVTBGQlV6dEJRVU14UWp0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRXNjVUpCUVhGQ0xGTkJRVk03UVVGRE9VSTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVN3d1EwRkJNRU1zVlVGQlZUdEJRVU53UkR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzUjBGQlJ6dEJRVU5JTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN096czdPenM3T3pzN096dEJRM1JLUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGV1RzN1FVRkZXaXhoUVVGaExHMUNRVUZQTEVOQlFVTXNkMFJCUVZjN1FVRkRhRU1zWTBGQll5eHRRa0ZCVHl4RFFVRkRMRzlFUVVGVE8wRkJReTlDTEdOQlFXTXNiVUpCUVU4c1EwRkJReXgzUlVGQlV6czdRVUZGTDBJN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJMSEZDUVVGeFFpeHRSRUZCYlVRN1FVRkRlRVU3UVVGRFFUdEJRVU5CTzBGQlEwRXNSMEZCUnp0QlFVTklPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hIUVVGSE8wRkJRMGc3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4TFFVRkxPMEZCUTB3N1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4SFFVRkhPMEZCUTBnN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRzFDUVVGdFFpeFZRVUZWTzBGQlF6ZENPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJMR2xDUVVGcFFpeFpRVUZaTzBGQlF6ZENPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEVzUjBGQlJ6dEJRVU5JTzBGQlEwRXNSMEZCUnp0QlFVTklPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4SFFVRkhPMEZCUTBnN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRU3d3UWtGQk1FSTdRVUZETVVJN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRXNkVU5CUVhWRExGTkJRVk03UVVGRGFFUTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1pVRkJaU3hwUWtGQmFVSTdRVUZEYUVNN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVN4aFFVRmhMR2xDUVVGcFFqdEJRVU01UWp0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRU3hUUVVGVE8wRkJRMVE3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4cFFrRkJhVUlzVTBGQlV6dEJRVU14UWp0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc2FVSkJRV2xDTEZOQlFWTTdRVUZETVVJN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzYVVKQlFXbENMRk5CUVZNN1FVRkRNVUk3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeG5SRUZCWjBRc1JVRkJSVHRCUVVOc1JEdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRU3hwUWtGQmFVSXNVMEZCVXp0QlFVTXhRanRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzZVVOQlFYbERPMEZCUTNwRE8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeEhRVUZITzBGQlEwZzdRVUZEUVN4SFFVRkhPMEZCUTBnN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEVkQlFVYzdRVUZEU0R0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4SFFVRkhPMEZCUTBnN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEU5QlFVODdRVUZEVUR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRXNTMEZCU3p0QlFVTk1PMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4M1FrRkJkMElzWlVGQlpUdEJRVU4yUXp0QlFVTkJPMEZCUTBFN1FVRkRRU3hQUVVGUE8wRkJRMUE3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4SFFVRkhPMEZCUTBnN1FVRkRRU3gzUWtGQmQwSXNVVUZCVVR0QlFVTm9RenRCUVVOQkxIRkNRVUZ4UWl4bFFVRmxPMEZCUTNCRE8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1IwRkJSenRCUVVOSU8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJMR2xDUVVGcFFpeFpRVUZaTzBGQlF6ZENPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzUjBGQlJ6dEJRVU5JTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1IwRkJSenRCUVVOSU8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNTMEZCU3p0QlFVTk1PMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzUjBGQlJ6dEJRVU5JTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk96dEJRVVZCTzBGQlEwRXNVMEZCVXp0QlFVTlVPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEVkQlFVYzdRVUZEU0R0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzUzBGQlN6dEJRVU5NTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVN4eFFrRkJjVUlzVTBGQlV6dEJRVU01UWp0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFc2NVSkJRWEZDTEZOQlFWTTdRVUZET1VJN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRXNjVUpCUVhGQ0xGTkJRVk03UVVGRE9VSTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRXNhVUpCUVdsQ0xHdENRVUZyUWp0QlFVTnVRenRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4SFFVRkhPMEZCUTBnN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4SFFVRkhPMEZCUTBnN1FVRkRRVHM3UVVGRlFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFZEJRVWM3UVVGRFNEdEJRVU5CTzBGQlEwRXNiVUpCUVcxQ0xHTkJRV003UVVGRGFrTTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTEhWRVFVRjFSQ3hQUVVGUE8wRkJRemxFTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1IwRkJSenRCUVVOSU8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNSMEZCUnp0QlFVTklPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVN4MVJFRkJkVVFzVDBGQlR6dEJRVU01UkR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzUjBGQlJ6dEJRVU5JTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFZEJRVWM3UVVGRFNEdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hIUVVGSE8wRkJRMGc3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4SFFVRkhPMEZCUTBnN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNSMEZCUnp0QlFVTklPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNSMEZCUnp0QlFVTklPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFTeHJRa0ZCYTBJN1FVRkRiRUk3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRU3h4UWtGQmNVSXNVVUZCVVR0QlFVTTNRanRCUVVOQk8wRkJRMEVzUjBGQlJ6dEJRVU5JTzBGQlEwRXNaVUZCWlN4VFFVRlRPMEZCUTNoQ08wRkJRMEU3UVVGRFFTeEhRVUZITzBGQlEwZzdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFdEJRVXM3UVVGRFREdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hIUVVGSE8wRkJRMGc3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUczdRVUZGUVR0QlFVTkJPMEZCUTBFc2JVSkJRVzFDTEZOQlFWTTdRVUZETlVJN1FVRkRRVHRCUVVOQkxFZEJRVWM3UVVGRFNEdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMR1ZCUVdVc2FVSkJRV2xDTzBGQlEyaERPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUVzYVVKQlFXbENMRmxCUVZrN1FVRkROMEk3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNVMEZCVXp0QlFVTlVPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTEV0QlFVczdRVUZEVER0QlFVTkJPMEZCUTBFN08wRkJSVUU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hMUVVGTE8wRkJRMHc3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRXRCUVVzN1FVRkRURHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4TFFVRkxPMEZCUTB3N1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4TFFVRkxPMEZCUTB3N1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQkxHbENRVUZwUWl4blFrRkJaMEk3UVVGRGFrTTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4cFFrRkJhVUlzWjBKQlFXZENPMEZCUTJwRE96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTEdsQ1FVRnBRaXhaUVVGWk8wRkJRemRDTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3pzN096czdPenM3T3pzN08wRkROWFpFUVN4cFFrRkJhVUk3TzBGQlJXcENPMEZCUTBFN1FVRkRRVHM3T3pzN096czdPenM3T3p0QlEwcFpPenRCUVVWYU96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzUzBGQlN6dEJRVU5NTzBGQlEwRTdRVUZEUVN4RFFVRkRPenRCUVVWRU8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4TFFVRkxPMEZCUTB3N1FVRkRRVHRCUVVOQkxFTkJRVU03TzBGQlJVUTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEVOQlFVTTdPMEZCUlVRN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeExRVUZMTzBGQlEwdzdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxEWkNRVUUyUWl4TlFVRk5PMEZCUTI1RE8wRkJRMEU3UVVGRFFUdEJRVU5CTEV0QlFVczdRVUZEVER0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzTmtKQlFUWkNMRXRCUVVzN1FVRkRiRU03UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1UwRkJVenRCUVVOVU8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNZVUZCWVR0QlFVTmlPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeFBRVUZQTzBGQlExQTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeFRRVUZUTzBGQlExUTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeGhRVUZoTzBGQlEySTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzUzBGQlN6dEJRVU5NTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeFRRVUZUTzBGQlExUTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hoUVVGaE8wRkJRMkk3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRTlCUVU4N1FVRkRVRHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRk5CUVZNN1FVRkRWRHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMR0ZCUVdFN1FVRkRZanRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3T3p0QlFVZEJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzVjBGQlZ6dEJRVU5ZTzBGQlEwRTdRVUZEUVN4VFFVRlRPMEZCUTFRN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzWVVGQllUdEJRVU5pTzBGQlEwRTdRVUZEUVN4WFFVRlhPMEZCUTFnN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNZVUZCWVR0QlFVTmlPMEZCUTBFN1FVRkRRVHRCUVVOQkxHRkJRV0U3UVVGRFlqdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN096dEJRVWRCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEVOQlFVTTdPMEZCUlVRN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFTkJRVU03TzBGQlJVUTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeExRVUZMTzBGQlEwdzdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRXRCUVVzN1FVRkRURHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeExRVUZMTzBGQlEwdzdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1MwRkJTenRCUVVOTU8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEV0QlFVczdRVUZEVER0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hMUVVGTE8wRkJRMHc3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeExRVUZMTzBGQlEwdzdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hEUVVGRE96dEJRVVZFTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzUjBGQlJ6dEJRVU5JTzBGQlEwRXNRMEZCUXpzN1FVRkZSRHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEVzTWtKQlFUSkNMRTFCUVUwN1FVRkRha003UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzVjBGQlZ6dEJRVU5ZTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hQUVVGUE8wRkJRMUE3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzVjBGQlZ6dEJRVU5ZTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRk5CUVZNN1FVRkRWRHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEU5QlFVODdRVUZEVUR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hYUVVGWE8wRkJRMWc3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hUUVVGVE8wRkJRMVE3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4TFFVRkxPMEZCUTB3N1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hYUVVGWE8wRkJRMWc3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRTlCUVU4N1FVRkRVRHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hYUVVGWE8wRkJRMWc3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNVMEZCVXp0QlFVTlVPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzVDBGQlR6dEJRVU5RTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRmRCUVZjN1FVRkRXRHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRk5CUVZNN1FVRkRWRHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxESkNRVUV5UWl4TlFVRk5PMEZCUTJwRE8wRkJRMEU3UVVGRFFUdEJRVU5CTEV0QlFVczdRVUZEVER0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRU3c0UWtGQk9FSXNWVUZCVlR0QlFVTjRRenRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNhMFJCUVd0RUxHbENRVUZwUWpzN1FVRkZia1U3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFdEJRVXM3UVVGRFREdEJRVU5CTzBGQlEwRTdRVUZEUVN4blFrRkJaMElzYVVKQlFXbENPMEZCUTJwRE8wRkJRMEU3UVVGRFFUdEJRVU5CTEVkQlFVYzdRVUZEU0R0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzVDBGQlR6dEJRVU5RTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc2EwSkJRV3RDTEcxQ1FVRnRRanRCUVVOeVF6dEJRVU5CTzBGQlEwRTdRVUZEUVN4TFFVRkxPMEZCUTB3N1FVRkRRVHRCUVVOQk8wRkJRMEVzUzBGQlN6dEJRVU5NTzBGQlEwRTdRVUZEUVN4clFrRkJhMElzYVVKQlFXbENPMEZCUTI1RE8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1QwRkJUenRCUVVOUU8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRWRCUVVjN1FVRkRTRHRCUVVOQkxFTkJRVU03TzBGQlJVUTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeEhRVUZITzBGQlEwZzdRVUZEUVN4RFFVRkRPenM3UVVGSFJEdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNTMEZCU3p0QlFVTk1PMEZCUTBFN1FVRkRRU3cyUWtGQk5rSXNUVUZCVFR0QlFVTnVRenRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1IwRkJSenRCUVVOSU8wRkJRMEVzUTBGQlF6czdRVUZGUkR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFZEJRVWM3UVVGRFNEdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTERaQ1FVRTJRaXhMUVVGTE8wRkJRMnhETzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFTkJRVU03TzBGQlJVUTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNNa0pCUVRKQ0xFMUJRVTA3UVVGRGFrTTdRVUZEUVR0QlFVTkJPMEZCUTBFc1MwRkJTenRCUVVOTU8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeEhRVUZITzBGQlEwZzdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN3MlFrRkJOa0lzUzBGQlN6dEJRVU5zUXp0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeERRVUZET3p0QlFVVkVPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEVNN096czdPenM3T3pzN08wRkRiaXRDUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRXNVVUZCVVN4WFFVRlhPenRCUVVWdVFqdEJRVU5CTzBGQlEwRTdRVUZEUVN4UlFVRlJMRmRCUVZjN08wRkJSVzVDTzBGQlEwRTdRVUZEUVN4SFFVRkhPMEZCUTBnN1FVRkRRU3hIUVVGSE8wRkJRMGc3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1IwRkJSenRCUVVOSU8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1MwRkJTenRCUVVOTU8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeExRVUZMTzBGQlEwdzdRVUZEUVR0QlFVTkJMRXRCUVVzN1FVRkRURHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVN4UlFVRlJMRmRCUVZjN08wRkJSVzVDTzBGQlEwRTdRVUZEUVN4UlFVRlJMRlZCUVZVN08wRkJSV3hDTzBGQlEwRTdPenM3T3pzN096czdPenM3UVVOdVJtRTdRVUZEWWp0QlFVTkJMRVZCUVVVc2JVSkJRVThzUTBGQlF5eG5SVUZCV1R0QlFVTjBRaXhGUVVGRkxHMUNRVUZQTEVOQlFVTXNiVVZCUVdVN1FVRkRla0lzUlVGQlJTeHRRa0ZCVHl4RFFVRkRMRFJGUVVGclFqdEJRVU0xUWl4RlFVRkZMRzFDUVVGUExFTkJRVU1zYzBWQlFXVTdRVUZEZWtJc1JVRkJSU3h0UWtGQlR5eERRVUZETERoRVFVRlhPMEZCUTNKQ08wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNSMEZCUnp0QlFVTklPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzYlVKQlFXMUNMSE5DUVVGelFqdEJRVU42UXp0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPenM3T3pzN096czdPenM3UVVNdlJrRXNPRU5CUVdFN08wRkJSV0k3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hGT3pzN096czdPenM3T3pzN08wRkRha0pCTERoRFFVRmhPMEZCUTJJN1FVRkRRVHRCUVVOQk96dEJRVVZCT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hIUVVGSE8wRkJRMGc3UVVGRFFUdEJRVU5CTzBGQlEwRXNSVHM3T3pzN096czdPenM3T3p0QlEzSkNRU3dyUTBGQllUdEJRVU5pTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPenM3T3pzN096czdPenM3TzBGRFZrRXNPRU5CUVdFN08wRkJSV0k3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUVzYVVOQlFXbERPMEZCUTJwRE8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJMRVU3T3pzN096czdPenM3T3pzN1FVTjJRbUU3UVVGRFlqdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeEZPenM3T3pzN096czdPenRCUTFSQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeExRVUZMTzBGQlEwdzdRVUZEUVN4RFFVRkRPMEZCUTBRN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenM3T3pzN096czdPenM3TzBGRGNrSkJPenRCUVVWQk8wRkJRMEU3UVVGRFFTeHJRa0ZCYTBJc1QwRkJUenRCUVVONlFqdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVN4cFFrRkJhVUk3TzBGQlJXcENPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3T3pzN096czdPenM3T3pzN096dEJRMnhMUVN4cFFrRkJhVUlzYlVKQlFVOHNRMEZCUXl3MFJFRkJWenM3T3pzN096czdPenM3TzBGRFFYQkRMR1ZCUVdVc2JVSkJRVThzUTBGQlF5eHBSVUZCVlR0QlFVTnFReXgzUWtGQmQwSXNiVUpCUVU4c1EwRkJReXd3UlVGQmIwSTdRVUZEY0VRc2RVSkJRWFZDTEcxQ1FVRlBMRU5CUVVNc01FVkJRVzlDTzBGQlEyNUVMRmRCUVZjc2JVSkJRVThzUTBGQlF5dzRRMEZCVFR0QlFVTjZRaXhuUWtGQlowSXNiVUpCUVU4c1EwRkJReXg1UmtGQk1rSTdRVUZEYmtRc1lVRkJZU3h0UWtGQlR5eERRVUZETERSRVFVRmhPenRCUVVWc1F6dEJRVU5CTzBGQlEwRXNiVUpCUVcxQ0xHMUNRVUZQTEVOQlFVTXNiMFZCUVdFN08wRkJSWGhETzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3TzBGQlJVRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRXNTMEZCU3p0QlFVTk1PMEZCUTBFc1MwRkJTenRCUVVOTU8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1QwRkJUenRCUVVOUU8wRkJRMEU3UVVGRFFUdEJRVU5CTEVkQlFVYzdRVUZEU0R0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTEV0QlFVczdRVUZEVER0QlFVTkJMRXRCUVVzN1FVRkRURHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJMRTlCUVU4N1FVRkRVRHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRXNSMEZCUnp0QlFVTklPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4SFFVRkhPMEZCUTBnN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRU3hIUVVGSE8wRkJRMGc3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hMUVVGTE8wRkJRMHc3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFTeEhRVUZITzBGQlEwZzdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEV0QlFVczdRVUZEVER0QlFVTkJPMEZCUTBFN08wRkJSVUU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdPenM3T3pzN096czdPenRCUXk5TlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hUUVVGVE8wRkJRMVE3UVVGRFFUdEJRVU5CTEV0QlFVczdRVUZEVER0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzVTBGQlV6dEJRVU5VTzBGQlEwRTdRVUZEUVN4TFFVRkxPMEZCUTB3N1FVRkRRVHRCUVVOQkxFTkJRVU03UVVGRFJEdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRXRCUVVzN1FVRkRURHRCUVVOQk8wRkJRMEU3UVVGRFFTeFRRVUZUTzBGQlExUTdRVUZEUVR0QlFVTkJPMEZCUTBFN096dEJRVWRCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hMUVVGTE8wRkJRMHc3UVVGRFFUdEJRVU5CTzBGQlEwRXNVMEZCVXp0QlFVTlVPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3T3pzN1FVRkpRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNTMEZCU3p0QlFVTk1PMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFc2RVSkJRWFZDTEhOQ1FVRnpRanRCUVVNM1F6dEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMSEZDUVVGeFFqdEJRVU55UWpzN1FVRkZRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRXNjVU5CUVhGRE96dEJRVVZ5UXp0QlFVTkJPMEZCUTBFN08wRkJSVUVzTWtKQlFUSkNPMEZCUXpOQ08wRkJRMEU3UVVGRFFUdEJRVU5CTERSQ1FVRTBRaXhWUVVGVk96czdPenM3T3pzN096czdRVU4yVEhSRE8wRkJRMEVzWVVGQllTeHRRa0ZCVHl4RFFVRkRMR3RFUVVGUk8wRkJRemRDT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4RFFVRkRPMEZCUTBRN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeExRVUZMTzBGQlEwdzdRVUZEUVR0QlFVTkJMRWRCUVVjN1FVRkRTRHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96czdPenM3T3pzN096czdRVU0zUkVFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRXNRMEZCUXpzN1FVRkZSRHRCUVVOQk8wRkJRMEU3UVVGRFFTeERRVUZETzBGQlEwUTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFTdzBRMEZCTkVNN08wRkJSVFZET3pzN096czdPenM3T3pzN1FVTnVRa0U3TzBGQlJVRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFTeHRRa0ZCYlVJc2MwSkJRWE5DTzBGQlEzcERPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96czdPenM3T3pzN096czdPMEZEYkVKQk8wRkJRVUU3UVVGQlFUdEJRVUZCTzBGQlFVRTdRVUZCUVR0QlFVRkJPMEZCUVVFN096czdPenM3T3pzN096czdRVU5CUVR0QlFVRkJPenM3T3p0QlFVdEJMRTFCUVUxQkxHTkJRV01zUjBGQlNVTXNVMEZCUkN4SlFVRmpMR05CUVdOQkxGTkJRV1FzUTBGQmRVSTdRVUZEZUVRN096czdRVUZKUVN4UlFVRk5ReXhsUVVGT0xFZEJRWFZDTzBGQlEyNUNMRmRCUVU4c1RVRkJUU3hMUVVGTFF5eFJRVUZNTEVOQlFXTkRMRmRCUVdRc1JVRkJZanRCUVVOSU96dEJRVVZFTEUxQlFVbERMRkZCUVVvc1EwRkJZVVlzVVVGQllpeEZRVUZ6UWp0QlFVTnNRaXhUUVVGTFFTeFJRVUZNTEVkQlFXZENRU3hSUVVGb1FqdEJRVU5JT3p0QlFVVkVMRTFCUVVsRkxGRkJRVW9zUjBGQll6dEJRVU5XTEZkQlFVOHNTMEZCUzBZc1VVRkJXanRCUVVOSU96dEJRV1oxUkN4RFFVRTFSRHM3UVVGcFFtVklMRFpGUVVGbUxFVTdPenM3T3pzN096czdPenRCUTNSQ1FUdEJRVUZCTzBGQlFVRTdRVUZCUVR0QlFVRkJPMEZCUVVFN1FVRkJRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdPenM3T3pzN1FVRlBRU3hOUVVGTlRTeFpRVUZPTEZOQlFUSkNReXg1UkVGQlVTeERRVUZEUXl4UFFVRlVMRU5CUVd0Q1F5eHhSRUZCYkVJc1JVRkRka0lzUTBGQlJVTXNNRVJCUVVZc1EwRkVkVUlzUTBGQk0wSXNRMEZEZVVJN1FVRkRja0pETEdGQlFWY3NSMEZCUlR0QlFVTlVPMEZCUTBFc1UwRkJTME1zVDBGQlREdEJRVU5JTzBGQlEwUTdPenM3T3p0QlFVbEJRU3hUUVVGUExFZEJRVVU3UVVGRFRDeFJRVUZKUXl4UFFVRlBMRWRCUVVkRExHMUNRVUZQTEVOQlFVTXNjMFJCUVVRc1EwRkJja0k3TzBGQlEwRXNVMEZCUzBNc1MwRkJUQ3hIUVVGaExFdEJRVXRETEU5QlFVd3NRMEZCWVVnc1QwRkJUeXhGUVVGd1FpeERRVUZpTzBGQlEwZzdPMEZCV205Q096dEJRV1ZXTEcxRlFVRkpVQ3haUVVGS0xFVkJRV1lzUlRzN096czdPenM3T3pzN08wRkRNVUpCTzBGQlFVRTdPenM3T3p0QlFVMUJMRTFCUVUxSkxHZENRVUZuUWl4SFFVRkpUeXhwUWtGQlJDeEpRVUZ6UWl4alFVRmpRU3hwUWtGQlpDeERRVUVyUWp0QlFVTXhSVHM3T3pzN08wRkJUVUVzVVVGQlRVTXNTVUZCVGl4RFFVRlhReXhsUVVGWUxFVkJRVEpDTzBGQlEzWkNMRlZCUVUxRExHRkJRV0VzUjBGQlJ5eE5RVUZQUkN4bFFVRlFMRWxCUVhsQ08wRkJRek5ETEZWQlFVYzdRVUZEUXl4WlFVRkpSU3hKUVVGSkxFZEJRVWNzVFVGQlRTeExRVUZMUXl4UFFVRk1MRU5CUVdGSUxHVkJRV0lzUTBGQmFrSTdRVUZEUVN4bFFVRlBTU3hOUVVGTkxFTkJRVU5ETEUxQlFWQXNRMEZCWTBnc1NVRkJaQ3hGUVVGdlFpeERRVUZ3UWl4RFFVRlFPMEZCUTBnc1QwRklSQ3hEUVVsQkxFOUJRVTFKTEVkQlFVNHNSVUZCVlR0QlFVTk9MR1ZCUVU4c1NVRkJVRHRCUVVOSU8wRkJRMG9zUzBGU1JEczdRVUZUUVN4WFFVRlBMRTFCUVUxTUxHRkJRV0VzUTBGQlEwUXNaVUZCUkN4RFFVRXhRanRCUVVOSU8wRkJRMFE3T3pzN096czdPMEZCVFVFc1VVRkJUVThzUzBGQlRpeERRVUZaVUN4bFFVRmFMRVZCUVRaQ1VTeExRVUUzUWl4RlFVRnRRenRCUVVNdlFpeFhRVUZQTEUxQlFVMHNTMEZCUzBNc1QwRkJUQ3hEUVVGaFZDeGxRVUZpTEVWQlFUaENVU3hMUVVFNVFpeERRVUZpTzBGQlEwZzdRVUZEUkRzN096czdPenM3UVVGTlFTeFJRVUZOUlN4TlFVRk9MRU5CUVdGRExGRkJRV0lzUlVGQmMwSTdRVUZEYkVJc1VVRkJTVU1zVFVGQlRTeEhRVUZITEVWQlFXSTdPMEZCUTBFc1UwRkJTU3hKUVVGSlF5eFBRVUZTTEVsQlFXMUNSaXhSUVVGdVFpeEZRVUUwUWp0QlFVTjRRa01zV1VGQlRTeERRVUZEUlN4SlFVRlFMRVZCUVZrc1RVRkJUU3hMUVVGTFppeEpRVUZNTEVOQlFWVmpMRTlCUVZZc1EwRkJiRUk3UVVGRFNEczdRVUZEUkN4WFFVRlBSQ3hOUVVGUU8wRkJRMGc3TzBGQmVFTjVSU3hEUVVFNVJUczdRVUV3UTJWeVFpd3JSVUZCWml4Rk96czdPenM3T3pzN096dEJRMmhFUVN3MlJEczdPenM3T3pzN096czdRVU5CUVN3NFJDSXNJbVpwYkdVaU9pSkFZMkYxYzJGc1RtVjBMMjFsYldOaFkyaGxMbmRsWWk1cWN5SXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJaWhtZFc1amRHbHZiaUIzWldKd1lXTnJWVzVwZG1WeWMyRnNUVzlrZFd4bFJHVm1hVzVwZEdsdmJpaHliMjkwTENCbVlXTjBiM0o1S1NCN1hHNWNkR2xtS0hSNWNHVnZaaUJsZUhCdmNuUnpJRDA5UFNBbmIySnFaV04wSnlBbUppQjBlWEJsYjJZZ2JXOWtkV3hsSUQwOVBTQW5iMkpxWldOMEp5bGNibHgwWEhSdGIyUjFiR1V1Wlhod2IzSjBjeUE5SUdaaFkzUnZjbmtvY21WeGRXbHlaU2hjSW1OaGRYTmhiQzF1WlhRdVkyOXlaVndpS1N3Z2NtVnhkV2x5WlNoY0ltTmhkWE5oYkMxdVpYUXVkWFJwYkhOY0lpa3BPMXh1WEhSbGJITmxJR2xtS0hSNWNHVnZaaUJrWldacGJtVWdQVDA5SUNkbWRXNWpkR2x2YmljZ0ppWWdaR1ZtYVc1bExtRnRaQ2xjYmx4MFhIUmtaV1pwYm1Vb1cxd2lZMkYxYzJGc0xXNWxkQzVqYjNKbFhDSXNJRndpWTJGMWMyRnNMVzVsZEM1MWRHbHNjMXdpWFN3Z1ptRmpkRzl5ZVNrN1hHNWNkR1ZzYzJVZ2FXWW9kSGx3Wlc5bUlHVjRjRzl5ZEhNZ1BUMDlJQ2R2WW1wbFkzUW5LVnh1WEhSY2RHVjRjRzl5ZEhOYlhDSkFZMkYxYzJGc1RtVjBMMjFsYldOaFkyaGxYQ0pkSUQwZ1ptRmpkRzl5ZVNoeVpYRjFhWEpsS0Z3aVkyRjFjMkZzTFc1bGRDNWpiM0psWENJcExDQnlaWEYxYVhKbEtGd2lZMkYxYzJGc0xXNWxkQzUxZEdsc2Mxd2lLU2s3WEc1Y2RHVnNjMlZjYmx4MFhIUnliMjkwVzF3aVFHTmhkWE5oYkU1bGRDOXRaVzFqWVdOb1pWd2lYU0E5SUdaaFkzUnZjbmtvY205dmRGdGNJbU5oZFhOaGJDMXVaWFF1WTI5eVpWd2lYU3dnY205dmRGdGNJbU5oZFhOaGJDMXVaWFF1ZFhScGJITmNJbDBwTzF4dWZTa29kR2hwY3l3Z1puVnVZM1JwYjI0b1gxOVhSVUpRUVVOTFgwVllWRVZTVGtGTVgwMVBSRlZNUlY5allYVnpZV3hmYm1WMFgyTnZjbVZmWHl3Z1gxOVhSVUpRUVVOTFgwVllWRVZTVGtGTVgwMVBSRlZNUlY5allYVnpZV3hmYm1WMFgzVjBhV3h6WDE4cElIdGNibkpsZEhWeWJpQWlMQ0lnWEhRdkx5QlVhR1VnYlc5a2RXeGxJR05oWTJobFhHNGdYSFIyWVhJZ2FXNXpkR0ZzYkdWa1RXOWtkV3hsY3lBOUlIdDlPMXh1WEc0Z1hIUXZMeUJVYUdVZ2NtVnhkV2x5WlNCbWRXNWpkR2x2Ymx4dUlGeDBablZ1WTNScGIyNGdYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeWh0YjJSMWJHVkpaQ2tnZTF4dVhHNGdYSFJjZEM4dklFTm9aV05ySUdsbUlHMXZaSFZzWlNCcGN5QnBiaUJqWVdOb1pWeHVJRngwWEhScFppaHBibk4wWVd4c1pXUk5iMlIxYkdWelcyMXZaSFZzWlVsa1hTa2dlMXh1SUZ4MFhIUmNkSEpsZEhWeWJpQnBibk4wWVd4c1pXUk5iMlIxYkdWelcyMXZaSFZzWlVsa1hTNWxlSEJ2Y25Sek8xeHVJRngwWEhSOVhHNGdYSFJjZEM4dklFTnlaV0YwWlNCaElHNWxkeUJ0YjJSMWJHVWdLR0Z1WkNCd2RYUWdhWFFnYVc1MGJ5QjBhR1VnWTJGamFHVXBYRzRnWEhSY2RIWmhjaUJ0YjJSMWJHVWdQU0JwYm5OMFlXeHNaV1JOYjJSMWJHVnpXMjF2WkhWc1pVbGtYU0E5SUh0Y2JpQmNkRngwWEhScE9pQnRiMlIxYkdWSlpDeGNiaUJjZEZ4MFhIUnNPaUJtWVd4elpTeGNiaUJjZEZ4MFhIUmxlSEJ2Y25Sek9pQjdmVnh1SUZ4MFhIUjlPMXh1WEc0Z1hIUmNkQzh2SUVWNFpXTjFkR1VnZEdobElHMXZaSFZzWlNCbWRXNWpkR2x2Ymx4dUlGeDBYSFJ0YjJSMWJHVnpXMjF2WkhWc1pVbGtYUzVqWVd4c0tHMXZaSFZzWlM1bGVIQnZjblJ6TENCdGIyUjFiR1VzSUcxdlpIVnNaUzVsZUhCdmNuUnpMQ0JmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmS1R0Y2JseHVJRngwWEhRdkx5QkdiR0ZuSUhSb1pTQnRiMlIxYkdVZ1lYTWdiRzloWkdWa1hHNGdYSFJjZEcxdlpIVnNaUzVzSUQwZ2RISjFaVHRjYmx4dUlGeDBYSFF2THlCU1pYUjFjbTRnZEdobElHVjRjRzl5ZEhNZ2IyWWdkR2hsSUcxdlpIVnNaVnh1SUZ4MFhIUnlaWFIxY200Z2JXOWtkV3hsTG1WNGNHOXlkSE03WEc0Z1hIUjlYRzVjYmx4dUlGeDBMeThnWlhod2IzTmxJSFJvWlNCdGIyUjFiR1Z6SUc5aWFtVmpkQ0FvWDE5M1pXSndZV05yWDIxdlpIVnNaWE5mWHlsY2JpQmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1YlNBOUlHMXZaSFZzWlhNN1hHNWNiaUJjZEM4dklHVjRjRzl6WlNCMGFHVWdiVzlrZFd4bElHTmhZMmhsWEc0Z1hIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbU1nUFNCcGJuTjBZV3hzWldSTmIyUjFiR1Z6TzF4dVhHNGdYSFF2THlCa1pXWnBibVVnWjJWMGRHVnlJR1oxYm1OMGFXOXVJR1p2Y2lCb1lYSnRiMjU1SUdWNGNHOXlkSE5jYmlCY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVaQ0E5SUdaMWJtTjBhVzl1S0dWNGNHOXlkSE1zSUc1aGJXVXNJR2RsZEhSbGNpa2dlMXh1SUZ4MFhIUnBaaWdoWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1dktHVjRjRzl5ZEhNc0lHNWhiV1VwS1NCN1hHNGdYSFJjZEZ4MFQySnFaV04wTG1SbFptbHVaVkJ5YjNCbGNuUjVLR1Y0Y0c5eWRITXNJRzVoYldVc0lIc2daVzUxYldWeVlXSnNaVG9nZEhKMVpTd2daMlYwT2lCblpYUjBaWElnZlNrN1hHNGdYSFJjZEgxY2JpQmNkSDA3WEc1Y2JpQmNkQzh2SUdSbFptbHVaU0JmWDJWelRXOWtkV3hsSUc5dUlHVjRjRzl5ZEhOY2JpQmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1Y2lBOUlHWjFibU4wYVc5dUtHVjRjRzl5ZEhNcElIdGNiaUJjZEZ4MGFXWW9kSGx3Wlc5bUlGTjViV0p2YkNBaFBUMGdKM1Z1WkdWbWFXNWxaQ2NnSmlZZ1UzbHRZbTlzTG5SdlUzUnlhVzVuVkdGbktTQjdYRzRnWEhSY2RGeDBUMkpxWldOMExtUmxabWx1WlZCeWIzQmxjblI1S0dWNGNHOXlkSE1zSUZONWJXSnZiQzUwYjFOMGNtbHVaMVJoWnl3Z2V5QjJZV3gxWlRvZ0owMXZaSFZzWlNjZ2ZTazdYRzRnWEhSY2RIMWNiaUJjZEZ4MFQySnFaV04wTG1SbFptbHVaVkJ5YjNCbGNuUjVLR1Y0Y0c5eWRITXNJQ2RmWDJWelRXOWtkV3hsSnl3Z2V5QjJZV3gxWlRvZ2RISjFaU0I5S1R0Y2JpQmNkSDA3WEc1Y2JpQmNkQzh2SUdOeVpXRjBaU0JoSUdaaGEyVWdibUZ0WlhOd1lXTmxJRzlpYW1WamRGeHVJRngwTHk4Z2JXOWtaU0FtSURFNklIWmhiSFZsSUdseklHRWdiVzlrZFd4bElHbGtMQ0J5WlhGMWFYSmxJR2wwWEc0Z1hIUXZMeUJ0YjJSbElDWWdNam9nYldWeVoyVWdZV3hzSUhCeWIzQmxjblJwWlhNZ2IyWWdkbUZzZFdVZ2FXNTBieUIwYUdVZ2JuTmNiaUJjZEM4dklHMXZaR1VnSmlBME9pQnlaWFIxY200Z2RtRnNkV1VnZDJobGJpQmhiSEpsWVdSNUlHNXpJRzlpYW1WamRGeHVJRngwTHk4Z2JXOWtaU0FtSURoOE1Ub2dZbVZvWVhabElHeHBhMlVnY21WeGRXbHlaVnh1SUZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NTBJRDBnWm5WdVkzUnBiMjRvZG1Gc2RXVXNJRzF2WkdVcElIdGNiaUJjZEZ4MGFXWW9iVzlrWlNBbUlERXBJSFpoYkhWbElEMGdYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeWgyWVd4MVpTazdYRzRnWEhSY2RHbG1LRzF2WkdVZ0ppQTRLU0J5WlhSMWNtNGdkbUZzZFdVN1hHNGdYSFJjZEdsbUtDaHRiMlJsSUNZZ05Da2dKaVlnZEhsd1pXOW1JSFpoYkhWbElEMDlQU0FuYjJKcVpXTjBKeUFtSmlCMllXeDFaU0FtSmlCMllXeDFaUzVmWDJWelRXOWtkV3hsS1NCeVpYUjFjbTRnZG1Gc2RXVTdYRzRnWEhSY2RIWmhjaUJ1Y3lBOUlFOWlhbVZqZEM1amNtVmhkR1VvYm5Wc2JDazdYRzRnWEhSY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVjaWh1Y3lrN1hHNGdYSFJjZEU5aWFtVmpkQzVrWldacGJtVlFjbTl3WlhKMGVTaHVjeXdnSjJSbFptRjFiSFFuTENCN0lHVnVkVzFsY21GaWJHVTZJSFJ5ZFdVc0lIWmhiSFZsT2lCMllXeDFaU0I5S1R0Y2JpQmNkRngwYVdZb2JXOWtaU0FtSURJZ0ppWWdkSGx3Wlc5bUlIWmhiSFZsSUNFOUlDZHpkSEpwYm1jbktTQm1iM0lvZG1GeUlHdGxlU0JwYmlCMllXeDFaU2tnWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1a0tHNXpMQ0JyWlhrc0lHWjFibU4wYVc5dUtHdGxlU2tnZXlCeVpYUjFjbTRnZG1Gc2RXVmJhMlY1WFRzZ2ZTNWlhVzVrS0c1MWJHd3NJR3RsZVNrcE8xeHVJRngwWEhSeVpYUjFjbTRnYm5NN1hHNGdYSFI5TzF4dVhHNGdYSFF2THlCblpYUkVaV1poZFd4MFJYaHdiM0owSUdaMWJtTjBhVzl1SUdadmNpQmpiMjF3WVhScFltbHNhWFI1SUhkcGRHZ2dibTl1TFdoaGNtMXZibmtnYlc5a2RXeGxjMXh1SUZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXVJRDBnWm5WdVkzUnBiMjRvYlc5a2RXeGxLU0I3WEc0Z1hIUmNkSFpoY2lCblpYUjBaWElnUFNCdGIyUjFiR1VnSmlZZ2JXOWtkV3hsTGw5ZlpYTk5iMlIxYkdVZ1AxeHVJRngwWEhSY2RHWjFibU4wYVc5dUlHZGxkRVJsWm1GMWJIUW9LU0I3SUhKbGRIVnliaUJ0YjJSMWJHVmJKMlJsWm1GMWJIUW5YVHNnZlNBNlhHNGdYSFJjZEZ4MFpuVnVZM1JwYjI0Z1oyVjBUVzlrZFd4bFJYaHdiM0owY3lncElIc2djbVYwZFhKdUlHMXZaSFZzWlRzZ2ZUdGNiaUJjZEZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NWtLR2RsZEhSbGNpd2dKMkVuTENCblpYUjBaWElwTzF4dUlGeDBYSFJ5WlhSMWNtNGdaMlYwZEdWeU8xeHVJRngwZlR0Y2JseHVJRngwTHk4Z1QySnFaV04wTG5CeWIzUnZkSGx3WlM1b1lYTlBkMjVRY205d1pYSjBlUzVqWVd4c1hHNGdYSFJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG04Z1BTQm1kVzVqZEdsdmJpaHZZbXBsWTNRc0lIQnliM0JsY25SNUtTQjdJSEpsZEhWeWJpQlBZbXBsWTNRdWNISnZkRzkwZVhCbExtaGhjMDkzYmxCeWIzQmxjblI1TG1OaGJHd29iMkpxWldOMExDQndjbTl3WlhKMGVTazdJSDA3WEc1Y2JpQmNkQzh2SUY5ZmQyVmljR0ZqYTE5d2RXSnNhV05mY0dGMGFGOWZYRzRnWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxuQWdQU0JjSWx3aU8xeHVYRzVjYmlCY2RDOHZJRXh2WVdRZ1pXNTBjbmtnYlc5a2RXeGxJR0Z1WkNCeVpYUjFjbTRnWlhod2IzSjBjMXh1SUZ4MGNtVjBkWEp1SUY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4b1gxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXpJRDBnWENJdUwzTnlZeTlwYm1SbGVDNXFjMXdpS1R0Y2JpSXNJaThxSUVOdmNIbHlhV2RvZENBb1l5a2dNakF4TnlCU2IyUWdWbUZuWnl3Z1RVbFVJRXhwWTJWdWMyVWdLaTljYmx4dVpuVnVZM1JwYjI0Z1FXSnpkSEpoWTNSRGFHRnBibVZrUW1GMFkyZ2dLR1JpS1NCN1hHNGdJSFJvYVhNdVgyUmlJRDBnWkdKY2JpQWdkR2hwY3k1ZmIzQmxjbUYwYVc5dWN5QTlJRnRkWEc0Z0lIUm9hWE11WDNkeWFYUjBaVzRnUFNCbVlXeHpaVnh1ZlZ4dVhHNUJZbk4wY21GamRFTm9ZV2x1WldSQ1lYUmphQzV3Y205MGIzUjVjR1V1WDNObGNtbGhiR2w2WlV0bGVTQTlJR1oxYm1OMGFXOXVJQ2hyWlhrcElIdGNiaUFnY21WMGRYSnVJSFJvYVhNdVgyUmlMbDl6WlhKcFlXeHBlbVZMWlhrb2EyVjVLVnh1ZlZ4dVhHNUJZbk4wY21GamRFTm9ZV2x1WldSQ1lYUmphQzV3Y205MGIzUjVjR1V1WDNObGNtbGhiR2w2WlZaaGJIVmxJRDBnWm5WdVkzUnBiMjRnS0haaGJIVmxLU0I3WEc0Z0lISmxkSFZ5YmlCMGFHbHpMbDlrWWk1ZmMyVnlhV0ZzYVhwbFZtRnNkV1VvZG1Gc2RXVXBYRzU5WEc1Y2JrRmljM1J5WVdOMFEyaGhhVzVsWkVKaGRHTm9MbkJ5YjNSdmRIbHdaUzVmWTJobFkydFhjbWwwZEdWdUlEMGdablZ1WTNScGIyNGdLQ2tnZTF4dUlDQnBaaUFvZEdocGN5NWZkM0pwZEhSbGJpa2dlMXh1SUNBZ0lIUm9jbTkzSUc1bGR5QkZjbkp2Y2lnbmQzSnBkR1VvS1NCaGJISmxZV1I1SUdOaGJHeGxaQ0J2YmlCMGFHbHpJR0poZEdOb0p5bGNiaUFnZlZ4dWZWeHVYRzVCWW5OMGNtRmpkRU5vWVdsdVpXUkNZWFJqYUM1d2NtOTBiM1I1Y0dVdWNIVjBJRDBnWm5WdVkzUnBiMjRnS0d0bGVTd2dkbUZzZFdVcElIdGNiaUFnZEdocGN5NWZZMmhsWTJ0WGNtbDBkR1Z1S0NsY2JseHVJQ0IyWVhJZ1pYSnlJRDBnZEdocGN5NWZaR0l1WDJOb1pXTnJTMlY1S0d0bGVTd2dKMnRsZVNjcFhHNGdJR2xtSUNobGNuSXBJSHNnZEdoeWIzY2daWEp5SUgxY2JseHVJQ0JyWlhrZ1BTQjBhR2x6TGw5elpYSnBZV3hwZW1WTFpYa29hMlY1S1Z4dUlDQjJZV3gxWlNBOUlIUm9hWE11WDNObGNtbGhiR2w2WlZaaGJIVmxLSFpoYkhWbEtWeHVYRzRnSUhSb2FYTXVYM0IxZENoclpYa3NJSFpoYkhWbEtWeHVYRzRnSUhKbGRIVnliaUIwYUdselhHNTlYRzVjYmtGaWMzUnlZV04wUTJoaGFXNWxaRUpoZEdOb0xuQnliM1J2ZEhsd1pTNWZjSFYwSUQwZ1puVnVZM1JwYjI0Z0tHdGxlU3dnZG1Gc2RXVXBJSHRjYmlBZ2RHaHBjeTVmYjNCbGNtRjBhVzl1Y3k1d2RYTm9LSHNnZEhsd1pUb2dKM0IxZENjc0lHdGxlVG9nYTJWNUxDQjJZV3gxWlRvZ2RtRnNkV1VnZlNsY2JuMWNibHh1UVdKemRISmhZM1JEYUdGcGJtVmtRbUYwWTJndWNISnZkRzkwZVhCbExtUmxiQ0E5SUdaMWJtTjBhVzl1SUNoclpYa3BJSHRjYmlBZ2RHaHBjeTVmWTJobFkydFhjbWwwZEdWdUtDbGNibHh1SUNCMllYSWdaWEp5SUQwZ2RHaHBjeTVmWkdJdVgyTm9aV05yUzJWNUtHdGxlU3dnSjJ0bGVTY3BYRzRnSUdsbUlDaGxjbklwSUhzZ2RHaHliM2NnWlhKeUlIMWNibHh1SUNCclpYa2dQU0IwYUdsekxsOXpaWEpwWVd4cGVtVkxaWGtvYTJWNUtWeHVJQ0IwYUdsekxsOWtaV3dvYTJWNUtWeHVYRzRnSUhKbGRIVnliaUIwYUdselhHNTlYRzVjYmtGaWMzUnlZV04wUTJoaGFXNWxaRUpoZEdOb0xuQnliM1J2ZEhsd1pTNWZaR1ZzSUQwZ1puVnVZM1JwYjI0Z0tHdGxlU2tnZTF4dUlDQjBhR2x6TGw5dmNHVnlZWFJwYjI1ekxuQjFjMmdvZXlCMGVYQmxPaUFuWkdWc0p5d2dhMlY1T2lCclpYa2dmU2xjYm4xY2JseHVRV0p6ZEhKaFkzUkRhR0ZwYm1Wa1FtRjBZMmd1Y0hKdmRHOTBlWEJsTG1Oc1pXRnlJRDBnWm5WdVkzUnBiMjRnS0NrZ2UxeHVJQ0IwYUdsekxsOWphR1ZqYTFkeWFYUjBaVzRvS1Z4dUlDQjBhR2x6TGw5dmNHVnlZWFJwYjI1eklEMGdXMTFjYmlBZ2RHaHBjeTVmWTJ4bFlYSW9LVnh1WEc0Z0lISmxkSFZ5YmlCMGFHbHpYRzU5WEc1Y2JrRmljM1J5WVdOMFEyaGhhVzVsWkVKaGRHTm9MbkJ5YjNSdmRIbHdaUzVmWTJ4bFlYSWdQU0JtZFc1amRHbHZiaUJ1YjI5d0lDZ3BJSHQ5WEc1Y2JrRmljM1J5WVdOMFEyaGhhVzVsWkVKaGRHTm9MbkJ5YjNSdmRIbHdaUzUzY21sMFpTQTlJR1oxYm1OMGFXOXVJQ2h2Y0hScGIyNXpMQ0JqWVd4c1ltRmpheWtnZTF4dUlDQjBhR2x6TGw5amFHVmphMWR5YVhSMFpXNG9LVnh1WEc0Z0lHbG1JQ2gwZVhCbGIyWWdiM0IwYVc5dWN5QTlQVDBnSjJaMWJtTjBhVzl1SnlrZ2V5QmpZV3hzWW1GamF5QTlJRzl3ZEdsdmJuTWdmVnh1SUNCcFppQW9kSGx3Wlc5bUlHTmhiR3hpWVdOcklDRTlQU0FuWm5WdVkzUnBiMjRuS1NCN1hHNGdJQ0FnZEdoeWIzY2dibVYzSUVWeWNtOXlLQ2QzY21sMFpTZ3BJSEpsY1hWcGNtVnpJR0VnWTJGc2JHSmhZMnNnWVhKbmRXMWxiblFuS1Z4dUlDQjlYRzRnSUdsbUlDaDBlWEJsYjJZZ2IzQjBhVzl1Y3lBaFBUMGdKMjlpYW1WamRDY3BJSHNnYjNCMGFXOXVjeUE5SUh0OUlIMWNibHh1SUNCMGFHbHpMbDkzY21sMGRHVnVJRDBnZEhKMVpWeHVYRzRnSUM4dklFQjBjeTFwWjI1dmNtVmNiaUFnYVdZZ0tIUjVjR1Z2WmlCMGFHbHpMbDkzY21sMFpTQTlQVDBnSjJaMWJtTjBhVzl1SnlrZ2V5QnlaWFIxY200Z2RHaHBjeTVmZDNKcGRHVW9ZMkZzYkdKaFkyc3BJSDFjYmx4dUlDQnBaaUFvZEhsd1pXOW1JSFJvYVhNdVgyUmlMbDlpWVhSamFDQTlQVDBnSjJaMWJtTjBhVzl1SnlrZ2UxeHVJQ0FnSUhKbGRIVnliaUIwYUdsekxsOWtZaTVmWW1GMFkyZ29kR2hwY3k1ZmIzQmxjbUYwYVc5dWN5d2diM0IwYVc5dWN5d2dZMkZzYkdKaFkyc3BYRzRnSUgxY2JseHVJQ0J3Y205alpYTnpMbTVsZUhSVWFXTnJLR05oYkd4aVlXTnJLVnh1ZlZ4dVhHNXRiMlIxYkdVdVpYaHdiM0owY3lBOUlFRmljM1J5WVdOMFEyaGhhVzVsWkVKaGRHTm9YRzRpTENJdktpQkRiM0I1Y21sbmFIUWdLR01wSURJd01UY2dVbTlrSUZaaFoyY3NJRTFKVkNCTWFXTmxibk5sSUNvdlhHNWNibVoxYm1OMGFXOXVJRUZpYzNSeVlXTjBTWFJsY21GMGIzSWdLR1JpS1NCN1hHNGdJSFJvYVhNdVpHSWdQU0JrWWx4dUlDQjBhR2x6TGw5bGJtUmxaQ0E5SUdaaGJITmxYRzRnSUhSb2FYTXVYMjVsZUhScGJtY2dQU0JtWVd4elpWeHVmVnh1WEc1QlluTjBjbUZqZEVsMFpYSmhkRzl5TG5CeWIzUnZkSGx3WlM1dVpYaDBJRDBnWm5WdVkzUnBiMjRnS0dOaGJHeGlZV05yS1NCN1hHNGdJSFpoY2lCelpXeG1JRDBnZEdocGMxeHVYRzRnSUdsbUlDaDBlWEJsYjJZZ1kyRnNiR0poWTJzZ0lUMDlJQ2RtZFc1amRHbHZiaWNwSUh0Y2JpQWdJQ0IwYUhKdmR5QnVaWGNnUlhKeWIzSW9KMjVsZUhRb0tTQnlaWEYxYVhKbGN5QmhJR05oYkd4aVlXTnJJR0Z5WjNWdFpXNTBKeWxjYmlBZ2ZWeHVYRzRnSUdsbUlDaHpaV3htTGw5bGJtUmxaQ2tnZTF4dUlDQWdJSEJ5YjJObGMzTXVibVY0ZEZScFkyc29ZMkZzYkdKaFkyc3NJRzVsZHlCRmNuSnZjaWduWTJGdWJtOTBJR05oYkd3Z2JtVjRkQ2dwSUdGbWRHVnlJR1Z1WkNncEp5a3BYRzRnSUNBZ2NtVjBkWEp1SUhObGJHWmNiaUFnZlZ4dVhHNGdJR2xtSUNoelpXeG1MbDl1WlhoMGFXNW5LU0I3WEc0Z0lDQWdjSEp2WTJWemN5NXVaWGgwVkdsamF5aGpZV3hzWW1GamF5d2dibVYzSUVWeWNtOXlLQ2RqWVc1dWIzUWdZMkZzYkNCdVpYaDBLQ2tnWW1WbWIzSmxJSEJ5WlhacGIzVnpJRzVsZUhRb0tTQm9ZWE1nWTI5dGNHeGxkR1ZrSnlrcFhHNGdJQ0FnY21WMGRYSnVJSE5sYkdaY2JpQWdmVnh1WEc0Z0lITmxiR1l1WDI1bGVIUnBibWNnUFNCMGNuVmxYRzRnSUhObGJHWXVYMjVsZUhRb1puVnVZM1JwYjI0Z0tDa2dlMXh1SUNBZ0lITmxiR1l1WDI1bGVIUnBibWNnUFNCbVlXeHpaVnh1SUNBZ0lHTmhiR3hpWVdOckxtRndjR3g1S0c1MWJHd3NJR0Z5WjNWdFpXNTBjeWxjYmlBZ2ZTbGNibHh1SUNCeVpYUjFjbTRnYzJWc1pseHVmVnh1WEc1QlluTjBjbUZqZEVsMFpYSmhkRzl5TG5CeWIzUnZkSGx3WlM1ZmJtVjRkQ0E5SUdaMWJtTjBhVzl1SUNoallXeHNZbUZqYXlrZ2UxeHVJQ0J3Y205alpYTnpMbTVsZUhSVWFXTnJLR05oYkd4aVlXTnJLVnh1ZlZ4dVhHNUJZbk4wY21GamRFbDBaWEpoZEc5eUxuQnliM1J2ZEhsd1pTNWxibVFnUFNCbWRXNWpkR2x2YmlBb1kyRnNiR0poWTJzcElIdGNiaUFnYVdZZ0tIUjVjR1Z2WmlCallXeHNZbUZqYXlBaFBUMGdKMloxYm1OMGFXOXVKeWtnZTF4dUlDQWdJSFJvY205M0lHNWxkeUJGY25KdmNpZ25aVzVrS0NrZ2NtVnhkV2x5WlhNZ1lTQmpZV3hzWW1GamF5QmhjbWQxYldWdWRDY3BYRzRnSUgxY2JseHVJQ0JwWmlBb2RHaHBjeTVmWlc1a1pXUXBJSHRjYmlBZ0lDQnlaWFIxY200Z2NISnZZMlZ6Y3k1dVpYaDBWR2xqYXloallXeHNZbUZqYXl3Z2JtVjNJRVZ5Y205eUtDZGxibVFvS1NCaGJISmxZV1I1SUdOaGJHeGxaQ0J2YmlCcGRHVnlZWFJ2Y2ljcEtWeHVJQ0I5WEc1Y2JpQWdkR2hwY3k1ZlpXNWtaV1FnUFNCMGNuVmxYRzRnSUhSb2FYTXVYMlZ1WkNoallXeHNZbUZqYXlsY2JuMWNibHh1UVdKemRISmhZM1JKZEdWeVlYUnZjaTV3Y205MGIzUjVjR1V1WDJWdVpDQTlJR1oxYm1OMGFXOXVJQ2hqWVd4c1ltRmpheWtnZTF4dUlDQndjbTlqWlhOekxtNWxlSFJVYVdOcktHTmhiR3hpWVdOcktWeHVmVnh1WEc1dGIyUjFiR1V1Wlhod2IzSjBjeUE5SUVGaWMzUnlZV04wU1hSbGNtRjBiM0pjYmlJc0lpOHFJRU52Y0hseWFXZG9kQ0FvWXlrZ01qQXhOeUJTYjJRZ1ZtRm5aeXdnVFVsVUlFeHBZMlZ1YzJVZ0tpOWNibHh1ZG1GeUlIaDBaVzVrSUQwZ2NtVnhkV2x5WlNnbmVIUmxibVFuS1Z4dWRtRnlJRUZpYzNSeVlXTjBTWFJsY21GMGIzSWdQU0J5WlhGMWFYSmxLQ2N1TDJGaWMzUnlZV04wTFdsMFpYSmhkRzl5SnlsY2JuWmhjaUJCWW5OMGNtRmpkRU5vWVdsdVpXUkNZWFJqYUNBOUlISmxjWFZwY21Vb0p5NHZZV0p6ZEhKaFkzUXRZMmhoYVc1bFpDMWlZWFJqYUNjcFhHNTJZWElnYUdGelQzZHVVSEp2Y0dWeWRIa2dQU0JQWW1wbFkzUXVjSEp2ZEc5MGVYQmxMbWhoYzA5M2JsQnliM0JsY25SNVhHNTJZWElnY21GdVoyVlBjSFJwYjI1eklEMGdKM04wWVhKMElHVnVaQ0JuZENCbmRHVWdiSFFnYkhSbEp5NXpjR3hwZENnbklDY3BYRzVjYm1aMWJtTjBhVzl1SUVGaWMzUnlZV04wVEdWMlpXeEVUMWRPSUNoc2IyTmhkR2x2YmlrZ2UxeHVJQ0JwWmlBb0lXRnlaM1Z0Wlc1MGN5NXNaVzVuZEdnZ2ZId2diRzlqWVhScGIyNGdQVDA5SUhWdVpHVm1hVzVsWkNrZ2UxeHVJQ0FnSUhSb2NtOTNJRzVsZHlCRmNuSnZjaWduWTI5dWMzUnlkV04wYjNJZ2NtVnhkV2x5WlhNZ1lYUWdiR1ZoYzNRZ1lTQnNiMk5oZEdsdmJpQmhjbWQxYldWdWRDY3BYRzRnSUgxY2JseHVJQ0JwWmlBb2RIbHdaVzltSUd4dlkyRjBhVzl1SUNFOVBTQW5jM1J5YVc1bkp5a2dlMXh1SUNBZ0lIUm9jbTkzSUc1bGR5QkZjbkp2Y2lnblkyOXVjM1J5ZFdOMGIzSWdjbVZ4ZFdseVpYTWdZU0JzYjJOaGRHbHZiaUJ6ZEhKcGJtY2dZWEpuZFcxbGJuUW5LVnh1SUNCOVhHNWNiaUFnZEdocGN5NXNiMk5oZEdsdmJpQTlJR3h2WTJGMGFXOXVYRzRnSUhSb2FYTXVjM1JoZEhWeklEMGdKMjVsZHlkY2JuMWNibHh1UVdKemRISmhZM1JNWlhabGJFUlBWMDR1Y0hKdmRHOTBlWEJsTG05d1pXNGdQU0JtZFc1amRHbHZiaUFvYjNCMGFXOXVjeXdnWTJGc2JHSmhZMnNwSUh0Y2JpQWdkbUZ5SUhObGJHWWdQU0IwYUdselhHNGdJSFpoY2lCdmJHUlRkR0YwZFhNZ1BTQjBhR2x6TG5OMFlYUjFjMXh1WEc0Z0lHbG1JQ2gwZVhCbGIyWWdiM0IwYVc5dWN5QTlQVDBnSjJaMWJtTjBhVzl1SnlrZ2V5QmpZV3hzWW1GamF5QTlJRzl3ZEdsdmJuTWdmVnh1WEc0Z0lHbG1JQ2gwZVhCbGIyWWdZMkZzYkdKaFkyc2dJVDA5SUNkbWRXNWpkR2x2YmljcElIdGNiaUFnSUNCMGFISnZkeUJ1WlhjZ1JYSnliM0lvSjI5d1pXNG9LU0J5WlhGMWFYSmxjeUJoSUdOaGJHeGlZV05ySUdGeVozVnRaVzUwSnlsY2JpQWdmVnh1WEc0Z0lHbG1JQ2gwZVhCbGIyWWdiM0IwYVc5dWN5QWhQVDBnSjI5aWFtVmpkQ2NwSUhzZ2IzQjBhVzl1Y3lBOUlIdDlJSDFjYmx4dUlDQnZjSFJwYjI1ekxtTnlaV0YwWlVsbVRXbHpjMmx1WnlBOUlHOXdkR2x2Ym5NdVkzSmxZWFJsU1daTmFYTnphVzVuSUNFOVBTQm1ZV3h6WlZ4dUlDQnZjSFJwYjI1ekxtVnljbTl5U1daRmVHbHpkSE1nUFNBaElXOXdkR2x2Ym5NdVpYSnliM0pKWmtWNGFYTjBjMXh1WEc0Z0lIUm9hWE11YzNSaGRIVnpJRDBnSjI5d1pXNXBibWNuWEc0Z0lIUm9hWE11WDI5d1pXNG9iM0IwYVc5dWN5d2dablZ1WTNScGIyNGdLR1Z5Y2lrZ2UxeHVJQ0FnSUdsbUlDaGxjbklwSUh0Y2JpQWdJQ0FnSUhObGJHWXVjM1JoZEhWeklEMGdiMnhrVTNSaGRIVnpYRzRnSUNBZ0lDQnlaWFIxY200Z1kyRnNiR0poWTJzb1pYSnlLVnh1SUNBZ0lIMWNiaUFnSUNCelpXeG1Mbk4wWVhSMWN5QTlJQ2R2Y0dWdUoxeHVJQ0FnSUdOaGJHeGlZV05yS0NsY2JpQWdmU2xjYm4xY2JseHVRV0p6ZEhKaFkzUk1aWFpsYkVSUFYwNHVjSEp2ZEc5MGVYQmxMbDl2Y0dWdUlEMGdablZ1WTNScGIyNGdLRzl3ZEdsdmJuTXNJR05oYkd4aVlXTnJLU0I3WEc0Z0lIQnliMk5sYzNNdWJtVjRkRlJwWTJzb1kyRnNiR0poWTJzcFhHNTlYRzVjYmtGaWMzUnlZV04wVEdWMlpXeEVUMWRPTG5CeWIzUnZkSGx3WlM1amJHOXpaU0E5SUdaMWJtTjBhVzl1SUNoallXeHNZbUZqYXlrZ2UxeHVJQ0IyWVhJZ2MyVnNaaUE5SUhSb2FYTmNiaUFnZG1GeUlHOXNaRk4wWVhSMWN5QTlJSFJvYVhNdWMzUmhkSFZ6WEc1Y2JpQWdhV1lnS0hSNWNHVnZaaUJqWVd4c1ltRmpheUFoUFQwZ0oyWjFibU4wYVc5dUp5a2dlMXh1SUNBZ0lIUm9jbTkzSUc1bGR5QkZjbkp2Y2lnblkyeHZjMlVvS1NCeVpYRjFhWEpsY3lCaElHTmhiR3hpWVdOcklHRnlaM1Z0Wlc1MEp5bGNiaUFnZlZ4dVhHNGdJSFJvYVhNdWMzUmhkSFZ6SUQwZ0oyTnNiM05wYm1jblhHNGdJSFJvYVhNdVgyTnNiM05sS0daMWJtTjBhVzl1SUNobGNuSXBJSHRjYmlBZ0lDQnBaaUFvWlhKeUtTQjdYRzRnSUNBZ0lDQnpaV3htTG5OMFlYUjFjeUE5SUc5c1pGTjBZWFIxYzF4dUlDQWdJQ0FnY21WMGRYSnVJR05oYkd4aVlXTnJLR1Z5Y2lsY2JpQWdJQ0I5WEc0Z0lDQWdjMlZzWmk1emRHRjBkWE1nUFNBblkyeHZjMlZrSjF4dUlDQWdJR05oYkd4aVlXTnJLQ2xjYmlBZ2ZTbGNibjFjYmx4dVFXSnpkSEpoWTNSTVpYWmxiRVJQVjA0dWNISnZkRzkwZVhCbExsOWpiRzl6WlNBOUlHWjFibU4wYVc5dUlDaGpZV3hzWW1GamF5a2dlMXh1SUNCd2NtOWpaWE56TG01bGVIUlVhV05yS0dOaGJHeGlZV05yS1Z4dWZWeHVYRzVCWW5OMGNtRmpkRXhsZG1Wc1JFOVhUaTV3Y205MGIzUjVjR1V1WjJWMElEMGdablZ1WTNScGIyNGdLR3RsZVN3Z2IzQjBhVzl1Y3l3Z1kyRnNiR0poWTJzcElIdGNiaUFnYVdZZ0tIUjVjR1Z2WmlCdmNIUnBiMjV6SUQwOVBTQW5ablZ1WTNScGIyNG5LU0I3SUdOaGJHeGlZV05ySUQwZ2IzQjBhVzl1Y3lCOVhHNWNiaUFnYVdZZ0tIUjVjR1Z2WmlCallXeHNZbUZqYXlBaFBUMGdKMloxYm1OMGFXOXVKeWtnZTF4dUlDQWdJSFJvY205M0lHNWxkeUJGY25KdmNpZ25aMlYwS0NrZ2NtVnhkV2x5WlhNZ1lTQmpZV3hzWW1GamF5QmhjbWQxYldWdWRDY3BYRzRnSUgxY2JseHVJQ0IyWVhJZ1pYSnlJRDBnZEdocGN5NWZZMmhsWTJ0TFpYa29hMlY1TENBbmEyVjVKeWxjYmlBZ2FXWWdLR1Z5Y2lrZ2NtVjBkWEp1SUhCeWIyTmxjM011Ym1WNGRGUnBZMnNvWTJGc2JHSmhZMnNzSUdWeWNpbGNibHh1SUNCclpYa2dQU0IwYUdsekxsOXpaWEpwWVd4cGVtVkxaWGtvYTJWNUtWeHVYRzRnSUdsbUlDaDBlWEJsYjJZZ2IzQjBhVzl1Y3lBaFBUMGdKMjlpYW1WamRDY3BJSHNnYjNCMGFXOXVjeUE5SUh0OUlIMWNibHh1SUNCdmNIUnBiMjV6TG1GelFuVm1abVZ5SUQwZ2IzQjBhVzl1Y3k1aGMwSjFabVpsY2lBaFBUMGdabUZzYzJWY2JseHVJQ0IwYUdsekxsOW5aWFFvYTJWNUxDQnZjSFJwYjI1ekxDQmpZV3hzWW1GamF5bGNibjFjYmx4dVFXSnpkSEpoWTNSTVpYWmxiRVJQVjA0dWNISnZkRzkwZVhCbExsOW5aWFFnUFNCbWRXNWpkR2x2YmlBb2EyVjVMQ0J2Y0hScGIyNXpMQ0JqWVd4c1ltRmpheWtnZTF4dUlDQndjbTlqWlhOekxtNWxlSFJVYVdOcktHWjFibU4wYVc5dUlDZ3BJSHNnWTJGc2JHSmhZMnNvYm1WM0lFVnljbTl5S0NkT2IzUkdiM1Z1WkNjcEtTQjlLVnh1ZlZ4dVhHNUJZbk4wY21GamRFeGxkbVZzUkU5WFRpNXdjbTkwYjNSNWNHVXVjSFYwSUQwZ1puVnVZM1JwYjI0Z0tHdGxlU3dnZG1Gc2RXVXNJRzl3ZEdsdmJuTXNJR05oYkd4aVlXTnJLU0I3WEc0Z0lHbG1JQ2gwZVhCbGIyWWdiM0IwYVc5dWN5QTlQVDBnSjJaMWJtTjBhVzl1SnlrZ2V5QmpZV3hzWW1GamF5QTlJRzl3ZEdsdmJuTWdmVnh1WEc0Z0lHbG1JQ2gwZVhCbGIyWWdZMkZzYkdKaFkyc2dJVDA5SUNkbWRXNWpkR2x2YmljcElIdGNiaUFnSUNCMGFISnZkeUJ1WlhjZ1JYSnliM0lvSjNCMWRDZ3BJSEpsY1hWcGNtVnpJR0VnWTJGc2JHSmhZMnNnWVhKbmRXMWxiblFuS1Z4dUlDQjlYRzVjYmlBZ2RtRnlJR1Z5Y2lBOUlIUm9hWE11WDJOb1pXTnJTMlY1S0d0bGVTd2dKMnRsZVNjcFhHNGdJR2xtSUNobGNuSXBJSEpsZEhWeWJpQndjbTlqWlhOekxtNWxlSFJVYVdOcktHTmhiR3hpWVdOckxDQmxjbklwWEc1Y2JpQWdhMlY1SUQwZ2RHaHBjeTVmYzJWeWFXRnNhWHBsUzJWNUtHdGxlU2xjYmlBZ2RtRnNkV1VnUFNCMGFHbHpMbDl6WlhKcFlXeHBlbVZXWVd4MVpTaDJZV3gxWlNsY2JseHVJQ0JwWmlBb2RIbHdaVzltSUc5d2RHbHZibk1nSVQwOUlDZHZZbXBsWTNRbktTQjdJRzl3ZEdsdmJuTWdQU0I3ZlNCOVhHNWNiaUFnZEdocGN5NWZjSFYwS0d0bGVTd2dkbUZzZFdVc0lHOXdkR2x2Ym5Nc0lHTmhiR3hpWVdOcktWeHVmVnh1WEc1QlluTjBjbUZqZEV4bGRtVnNSRTlYVGk1d2NtOTBiM1I1Y0dVdVgzQjFkQ0E5SUdaMWJtTjBhVzl1SUNoclpYa3NJSFpoYkhWbExDQnZjSFJwYjI1ekxDQmpZV3hzWW1GamF5a2dlMXh1SUNCd2NtOWpaWE56TG01bGVIUlVhV05yS0dOaGJHeGlZV05yS1Z4dWZWeHVYRzVCWW5OMGNtRmpkRXhsZG1Wc1JFOVhUaTV3Y205MGIzUjVjR1V1WkdWc0lEMGdablZ1WTNScGIyNGdLR3RsZVN3Z2IzQjBhVzl1Y3l3Z1kyRnNiR0poWTJzcElIdGNiaUFnYVdZZ0tIUjVjR1Z2WmlCdmNIUnBiMjV6SUQwOVBTQW5ablZ1WTNScGIyNG5LU0I3SUdOaGJHeGlZV05ySUQwZ2IzQjBhVzl1Y3lCOVhHNWNiaUFnYVdZZ0tIUjVjR1Z2WmlCallXeHNZbUZqYXlBaFBUMGdKMloxYm1OMGFXOXVKeWtnZTF4dUlDQWdJSFJvY205M0lHNWxkeUJGY25KdmNpZ25aR1ZzS0NrZ2NtVnhkV2x5WlhNZ1lTQmpZV3hzWW1GamF5QmhjbWQxYldWdWRDY3BYRzRnSUgxY2JseHVJQ0IyWVhJZ1pYSnlJRDBnZEdocGN5NWZZMmhsWTJ0TFpYa29hMlY1TENBbmEyVjVKeWxjYmlBZ2FXWWdLR1Z5Y2lrZ2NtVjBkWEp1SUhCeWIyTmxjM011Ym1WNGRGUnBZMnNvWTJGc2JHSmhZMnNzSUdWeWNpbGNibHh1SUNCclpYa2dQU0IwYUdsekxsOXpaWEpwWVd4cGVtVkxaWGtvYTJWNUtWeHVYRzRnSUdsbUlDaDBlWEJsYjJZZ2IzQjBhVzl1Y3lBaFBUMGdKMjlpYW1WamRDY3BJSHNnYjNCMGFXOXVjeUE5SUh0OUlIMWNibHh1SUNCMGFHbHpMbDlrWld3b2EyVjVMQ0J2Y0hScGIyNXpMQ0JqWVd4c1ltRmpheWxjYm4xY2JseHVRV0p6ZEhKaFkzUk1aWFpsYkVSUFYwNHVjSEp2ZEc5MGVYQmxMbDlrWld3Z1BTQm1kVzVqZEdsdmJpQW9hMlY1TENCdmNIUnBiMjV6TENCallXeHNZbUZqYXlrZ2UxeHVJQ0J3Y205alpYTnpMbTVsZUhSVWFXTnJLR05oYkd4aVlXTnJLVnh1ZlZ4dVhHNUJZbk4wY21GamRFeGxkbVZzUkU5WFRpNXdjbTkwYjNSNWNHVXVZbUYwWTJnZ1BTQm1kVzVqZEdsdmJpQW9ZWEp5WVhrc0lHOXdkR2x2Ym5Nc0lHTmhiR3hpWVdOcktTQjdYRzRnSUdsbUlDZ2hZWEpuZFcxbGJuUnpMbXhsYm1kMGFDa2dleUJ5WlhSMWNtNGdkR2hwY3k1ZlkyaGhhVzVsWkVKaGRHTm9LQ2tnZlZ4dVhHNGdJR2xtSUNoMGVYQmxiMllnYjNCMGFXOXVjeUE5UFQwZ0oyWjFibU4wYVc5dUp5a2dleUJqWVd4c1ltRmpheUE5SUc5d2RHbHZibk1nZlZ4dVhHNGdJR2xtSUNoMGVYQmxiMllnWVhKeVlYa2dQVDA5SUNkbWRXNWpkR2x2YmljcElIc2dZMkZzYkdKaFkyc2dQU0JoY25KaGVTQjlYRzVjYmlBZ2FXWWdLSFI1Y0dWdlppQmpZV3hzWW1GamF5QWhQVDBnSjJaMWJtTjBhVzl1SnlrZ2UxeHVJQ0FnSUhSb2NtOTNJRzVsZHlCRmNuSnZjaWduWW1GMFkyZ29ZWEp5WVhrcElISmxjWFZwY21WeklHRWdZMkZzYkdKaFkyc2dZWEpuZFcxbGJuUW5LVnh1SUNCOVhHNWNiaUFnYVdZZ0tDRkJjbkpoZVM1cGMwRnljbUY1S0dGeWNtRjVLU2tnZTF4dUlDQWdJSEpsZEhWeWJpQndjbTlqWlhOekxtNWxlSFJVYVdOcktHTmhiR3hpWVdOckxDQnVaWGNnUlhKeWIzSW9KMkpoZEdOb0tHRnljbUY1S1NCeVpYRjFhWEpsY3lCaGJpQmhjbkpoZVNCaGNtZDFiV1Z1ZENjcEtWeHVJQ0I5WEc1Y2JpQWdhV1lnS0NGdmNIUnBiMjV6SUh4OElIUjVjR1Z2WmlCdmNIUnBiMjV6SUNFOVBTQW5iMkpxWldOMEp5a2dleUJ2Y0hScGIyNXpJRDBnZTMwZ2ZWeHVYRzRnSUhaaGNpQnpaWEpwWVd4cGVtVmtJRDBnYm1WM0lFRnljbUY1S0dGeWNtRjVMbXhsYm1kMGFDbGNibHh1SUNCbWIzSWdLSFpoY2lCcElEMGdNRHNnYVNBOElHRnljbUY1TG14bGJtZDBhRHNnYVNzcktTQjdYRzRnSUNBZ2FXWWdLSFI1Y0dWdlppQmhjbkpoZVZ0cFhTQWhQVDBnSjI5aWFtVmpkQ2NnZkh3Z1lYSnlZWGxiYVYwZ1BUMDlJRzUxYkd3cElIdGNiaUFnSUNBZ0lISmxkSFZ5YmlCd2NtOWpaWE56TG01bGVIUlVhV05yS0dOaGJHeGlZV05yTENCdVpYY2dSWEp5YjNJb0oySmhkR05vS0dGeWNtRjVLU0JsYkdWdFpXNTBJRzExYzNRZ1ltVWdZVzRnYjJKcVpXTjBJR0Z1WkNCdWIzUWdZRzUxYkd4Z0p5a3BYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2RtRnlJR1VnUFNCNGRHVnVaQ2hoY25KaGVWdHBYU2xjYmx4dUlDQWdJR2xtSUNobExuUjVjR1VnSVQwOUlDZHdkWFFuSUNZbUlHVXVkSGx3WlNBaFBUMGdKMlJsYkNjcElIdGNiaUFnSUNBZ0lISmxkSFZ5YmlCd2NtOWpaWE56TG01bGVIUlVhV05yS0dOaGJHeGlZV05yTENCdVpYY2dSWEp5YjNJb1hDSmdkSGx3WldBZ2JYVnpkQ0JpWlNBbmNIVjBKeUJ2Y2lBblpHVnNKMXdpS1NsY2JpQWdJQ0I5WEc1Y2JpQWdJQ0IyWVhJZ1pYSnlJRDBnZEdocGN5NWZZMmhsWTJ0TFpYa29aUzVyWlhrc0lDZHJaWGtuS1Z4dUlDQWdJR2xtSUNobGNuSXBJSEpsZEhWeWJpQndjbTlqWlhOekxtNWxlSFJVYVdOcktHTmhiR3hpWVdOckxDQmxjbklwWEc1Y2JpQWdJQ0JsTG10bGVTQTlJSFJvYVhNdVgzTmxjbWxoYkdsNlpVdGxlU2hsTG10bGVTbGNibHh1SUNBZ0lHbG1JQ2hsTG5SNWNHVWdQVDA5SUNkd2RYUW5LU0I3SUdVdWRtRnNkV1VnUFNCMGFHbHpMbDl6WlhKcFlXeHBlbVZXWVd4MVpTaGxMblpoYkhWbEtTQjlYRzVjYmlBZ0lDQnpaWEpwWVd4cGVtVmtXMmxkSUQwZ1pWeHVJQ0I5WEc1Y2JpQWdkR2hwY3k1ZlltRjBZMmdvYzJWeWFXRnNhWHBsWkN3Z2IzQjBhVzl1Y3l3Z1kyRnNiR0poWTJzcFhHNTlYRzVjYmtGaWMzUnlZV04wVEdWMlpXeEVUMWRPTG5CeWIzUnZkSGx3WlM1ZlltRjBZMmdnUFNCbWRXNWpkR2x2YmlBb1lYSnlZWGtzSUc5d2RHbHZibk1zSUdOaGJHeGlZV05yS1NCN1hHNGdJSEJ5YjJObGMzTXVibVY0ZEZScFkyc29ZMkZzYkdKaFkyc3BYRzU5WEc1Y2JrRmljM1J5WVdOMFRHVjJaV3hFVDFkT0xuQnliM1J2ZEhsd1pTNWZjMlYwZFhCSmRHVnlZWFJ2Y2s5d2RHbHZibk1nUFNCbWRXNWpkR2x2YmlBb2IzQjBhVzl1Y3lrZ2UxeHVJQ0J2Y0hScGIyNXpJRDBnWTJ4bFlXNVNZVzVuWlU5d2RHbHZibk1vYjNCMGFXOXVjeWxjYmx4dUlDQnZjSFJwYjI1ekxuSmxkbVZ5YzJVZ1BTQWhJVzl3ZEdsdmJuTXVjbVYyWlhKelpWeHVJQ0J2Y0hScGIyNXpMbXRsZVhNZ1BTQnZjSFJwYjI1ekxtdGxlWE1nSVQwOUlHWmhiSE5sWEc0Z0lHOXdkR2x2Ym5NdWRtRnNkV1Z6SUQwZ2IzQjBhVzl1Y3k1MllXeDFaWE1nSVQwOUlHWmhiSE5sWEc0Z0lHOXdkR2x2Ym5NdWJHbHRhWFFnUFNBbmJHbHRhWFFuSUdsdUlHOXdkR2x2Ym5NZ1B5QnZjSFJwYjI1ekxteHBiV2wwSURvZ0xURmNiaUFnYjNCMGFXOXVjeTVyWlhsQmMwSjFabVpsY2lBOUlHOXdkR2x2Ym5NdWEyVjVRWE5DZFdabVpYSWdJVDA5SUdaaGJITmxYRzRnSUc5d2RHbHZibk11ZG1Gc2RXVkJjMEoxWm1abGNpQTlJRzl3ZEdsdmJuTXVkbUZzZFdWQmMwSjFabVpsY2lBaFBUMGdabUZzYzJWY2JseHVJQ0J5WlhSMWNtNGdiM0IwYVc5dWMxeHVmVnh1WEc1bWRXNWpkR2x2YmlCamJHVmhibEpoYm1kbFQzQjBhVzl1Y3lBb2IzQjBhVzl1Y3lrZ2UxeHVJQ0IyWVhJZ2NtVnpkV3gwSUQwZ2UzMWNibHh1SUNCbWIzSWdLSFpoY2lCcklHbHVJRzl3ZEdsdmJuTXBJSHRjYmlBZ0lDQnBaaUFvSVdoaGMwOTNibEJ5YjNCbGNuUjVMbU5oYkd3b2IzQjBhVzl1Y3l3Z2F5a3BJR052Ym5ScGJuVmxYRzRnSUNBZ2FXWWdLR2x6VW1GdVoyVlBjSFJwYjI0b2F5a2dKaVlnYVhORmJYQjBlVkpoYm1kbFQzQjBhVzl1S0c5d2RHbHZibk5iYTEwcEtTQmpiMjUwYVc1MVpWeHVYRzRnSUNBZ2NtVnpkV3gwVzJ0ZElEMGdiM0IwYVc5dWMxdHJYVnh1SUNCOVhHNWNiaUFnY21WMGRYSnVJSEpsYzNWc2RGeHVmVnh1WEc1bWRXNWpkR2x2YmlCcGMxSmhibWRsVDNCMGFXOXVJQ2hyS1NCN1hHNGdJSEpsZEhWeWJpQnlZVzVuWlU5d2RHbHZibk11YVc1a1pYaFBaaWhyS1NBaFBUMGdMVEZjYm4xY2JseHVablZ1WTNScGIyNGdhWE5GYlhCMGVWSmhibWRsVDNCMGFXOXVJQ2gyS1NCN1hHNGdJSEpsZEhWeWJpQjJJRDA5UFNBbkp5QjhmQ0IySUQwOUlHNTFiR3dnZkh3Z2FYTkZiWEIwZVVKMVptWmxjaWgyS1Z4dWZWeHVYRzVtZFc1amRHbHZiaUJwYzBWdGNIUjVRblZtWm1WeUlDaDJLU0I3WEc0Z0lISmxkSFZ5YmlCQ2RXWm1aWEl1YVhOQ2RXWm1aWElvZGlrZ0ppWWdkaTVzWlc1bmRHZ2dQVDA5SURCY2JuMWNibHh1UVdKemRISmhZM1JNWlhabGJFUlBWMDR1Y0hKdmRHOTBlWEJsTG1sMFpYSmhkRzl5SUQwZ1puVnVZM1JwYjI0Z0tHOXdkR2x2Ym5NcElIdGNiaUFnYVdZZ0tIUjVjR1Z2WmlCdmNIUnBiMjV6SUNFOVBTQW5iMkpxWldOMEp5a2dleUJ2Y0hScGIyNXpJRDBnZTMwZ2ZWeHVJQ0J2Y0hScGIyNXpJRDBnZEdocGN5NWZjMlYwZFhCSmRHVnlZWFJ2Y2s5d2RHbHZibk1vYjNCMGFXOXVjeWxjYmlBZ2NtVjBkWEp1SUhSb2FYTXVYMmwwWlhKaGRHOXlLRzl3ZEdsdmJuTXBYRzU5WEc1Y2JrRmljM1J5WVdOMFRHVjJaV3hFVDFkT0xuQnliM1J2ZEhsd1pTNWZhWFJsY21GMGIzSWdQU0JtZFc1amRHbHZiaUFvYjNCMGFXOXVjeWtnZTF4dUlDQnlaWFIxY200Z2JtVjNJRUZpYzNSeVlXTjBTWFJsY21GMGIzSW9kR2hwY3lsY2JuMWNibHh1UVdKemRISmhZM1JNWlhabGJFUlBWMDR1Y0hKdmRHOTBlWEJsTGw5amFHRnBibVZrUW1GMFkyZ2dQU0JtZFc1amRHbHZiaUFvS1NCN1hHNGdJSEpsZEhWeWJpQnVaWGNnUVdKemRISmhZM1JEYUdGcGJtVmtRbUYwWTJnb2RHaHBjeWxjYm4xY2JseHVRV0p6ZEhKaFkzUk1aWFpsYkVSUFYwNHVjSEp2ZEc5MGVYQmxMbDl6WlhKcFlXeHBlbVZMWlhrZ1BTQm1kVzVqZEdsdmJpQW9hMlY1S1NCN1hHNGdJSEpsZEhWeWJpQkNkV1ptWlhJdWFYTkNkV1ptWlhJb2EyVjVLU0EvSUd0bGVTQTZJRk4wY21sdVp5aHJaWGtwWEc1OVhHNWNia0ZpYzNSeVlXTjBUR1YyWld4RVQxZE9MbkJ5YjNSdmRIbHdaUzVmYzJWeWFXRnNhWHBsVm1Gc2RXVWdQU0JtZFc1amRHbHZiaUFvZG1Gc2RXVXBJSHRjYmlBZ2FXWWdLSFpoYkhWbElEMDlJRzUxYkd3cElISmxkSFZ5YmlBbkoxeHVJQ0J5WlhSMWNtNGdRblZtWm1WeUxtbHpRblZtWm1WeUtIWmhiSFZsS1NCOGZDQndjbTlqWlhOekxtSnliM2R6WlhJZ1B5QjJZV3gxWlNBNklGTjBjbWx1WnloMllXeDFaU2xjYm4xY2JseHVRV0p6ZEhKaFkzUk1aWFpsYkVSUFYwNHVjSEp2ZEc5MGVYQmxMbDlqYUdWamEwdGxlU0E5SUdaMWJtTjBhVzl1SUNodlltb3NJSFI1Y0dVcElIdGNiaUFnYVdZZ0tHOWlhaUE5UFQwZ2JuVnNiQ0I4ZkNCdlltb2dQVDA5SUhWdVpHVm1hVzVsWkNrZ2UxeHVJQ0FnSUhKbGRIVnliaUJ1WlhjZ1JYSnliM0lvZEhsd1pTQXJJQ2NnWTJGdWJtOTBJR0psSUdCdWRXeHNZQ0J2Y2lCZ2RXNWtaV1pwYm1Wa1lDY3BYRzRnSUgxY2JseHVJQ0JwWmlBb1FuVm1abVZ5TG1selFuVm1abVZ5S0c5aWFpa2dKaVlnYjJKcUxteGxibWQwYUNBOVBUMGdNQ2tnZTF4dUlDQWdJSEpsZEhWeWJpQnVaWGNnUlhKeWIzSW9kSGx3WlNBcklDY2dZMkZ1Ym05MElHSmxJR0Z1SUdWdGNIUjVJRUoxWm1abGNpY3BYRzRnSUgxY2JseHVJQ0JwWmlBb1UzUnlhVzVuS0c5aWFpa2dQVDA5SUNjbktTQjdYRzRnSUNBZ2NtVjBkWEp1SUc1bGR5QkZjbkp2Y2loMGVYQmxJQ3NnSnlCallXNXViM1FnWW1VZ1lXNGdaVzF3ZEhrZ1UzUnlhVzVuSnlsY2JpQWdmVnh1ZlZ4dVhHNXRiMlIxYkdVdVpYaHdiM0owY3lBOUlFRmljM1J5WVdOMFRHVjJaV3hFVDFkT1hHNGlMQ0psZUhCdmNuUnpMa0ZpYzNSeVlXTjBUR1YyWld4RVQxZE9JRDBnY21WeGRXbHlaU2duTGk5aFluTjBjbUZqZEMxc1pYWmxiR1J2ZDI0bktWeHVaWGh3YjNKMGN5NUJZbk4wY21GamRFbDBaWEpoZEc5eUlEMGdjbVZ4ZFdseVpTZ25MaTloWW5OMGNtRmpkQzFwZEdWeVlYUnZjaWNwWEc1bGVIQnZjblJ6TGtGaWMzUnlZV04wUTJoaGFXNWxaRUpoZEdOb0lEMGdjbVZ4ZFdseVpTZ25MaTloWW5OMGNtRmpkQzFqYUdGcGJtVmtMV0poZEdOb0p5bGNiaUlzSWlkMWMyVWdjM1J5YVdOMEoxeHVYRzVsZUhCdmNuUnpMbUo1ZEdWTVpXNW5kR2dnUFNCaWVYUmxUR1Z1WjNSb1hHNWxlSEJ2Y25SekxuUnZRbmwwWlVGeWNtRjVJRDBnZEc5Q2VYUmxRWEp5WVhsY2JtVjRjRzl5ZEhNdVpuSnZiVUo1ZEdWQmNuSmhlU0E5SUdaeWIyMUNlWFJsUVhKeVlYbGNibHh1ZG1GeUlHeHZiMnQxY0NBOUlGdGRYRzUyWVhJZ2NtVjJURzl2YTNWd0lEMGdXMTFjYm5aaGNpQkJjbklnUFNCMGVYQmxiMllnVldsdWREaEJjbkpoZVNBaFBUMGdKM1Z1WkdWbWFXNWxaQ2NnUHlCVmFXNTBPRUZ5Y21GNUlEb2dRWEp5WVhsY2JseHVkbUZ5SUdOdlpHVWdQU0FuUVVKRFJFVkdSMGhKU2t0TVRVNVBVRkZTVTFSVlZsZFlXVnBoWW1Oa1pXWm5hR2xxYTJ4dGJtOXdjWEp6ZEhWMmQzaDVlakF4TWpNME5UWTNPRGtyTHlkY2JtWnZjaUFvZG1GeUlHa2dQU0F3TENCc1pXNGdQU0JqYjJSbExteGxibWQwYURzZ2FTQThJR3hsYmpzZ0t5dHBLU0I3WEc0Z0lHeHZiMnQxY0Z0cFhTQTlJR052WkdWYmFWMWNiaUFnY21WMlRHOXZhM1Z3VzJOdlpHVXVZMmhoY2tOdlpHVkJkQ2hwS1YwZ1BTQnBYRzU5WEc1Y2JpOHZJRk4xY0hCdmNuUWdaR1ZqYjJScGJtY2dWVkpNTFhOaFptVWdZbUZ6WlRZMElITjBjbWx1WjNNc0lHRnpJRTV2WkdVdWFuTWdaRzlsY3k1Y2JpOHZJRk5sWlRvZ2FIUjBjSE02THk5bGJpNTNhV3RwY0dWa2FXRXViM0puTDNkcGEya3ZRbUZ6WlRZMEkxVlNURjloY0hCc2FXTmhkR2x2Ym5OY2JuSmxka3h2YjJ0MWNGc25MU2N1WTJoaGNrTnZaR1ZCZENnd0tWMGdQU0EyTWx4dWNtVjJURzl2YTNWd1d5ZGZKeTVqYUdGeVEyOWtaVUYwS0RBcFhTQTlJRFl6WEc1Y2JtWjFibU4wYVc5dUlHZGxkRXhsYm5NZ0tHSTJOQ2tnZTF4dUlDQjJZWElnYkdWdUlEMGdZalkwTG14bGJtZDBhRnh1WEc0Z0lHbG1JQ2hzWlc0Z0pTQTBJRDRnTUNrZ2UxeHVJQ0FnSUhSb2NtOTNJRzVsZHlCRmNuSnZjaWduU1c1MllXeHBaQ0J6ZEhKcGJtY3VJRXhsYm1kMGFDQnRkWE4wSUdKbElHRWdiWFZzZEdsd2JHVWdiMllnTkNjcFhHNGdJSDFjYmx4dUlDQXZMeUJVY21sdElHOW1aaUJsZUhSeVlTQmllWFJsY3lCaFpuUmxjaUJ3YkdGalpXaHZiR1JsY2lCaWVYUmxjeUJoY21VZ1ptOTFibVJjYmlBZ0x5OGdVMlZsT2lCb2RIUndjem92TDJkcGRHaDFZaTVqYjIwdlltVmhkR2RoYlcxcGRDOWlZWE5sTmpRdGFuTXZhWE56ZFdWekx6UXlYRzRnSUhaaGNpQjJZV3hwWkV4bGJpQTlJR0kyTkM1cGJtUmxlRTltS0NjOUp5bGNiaUFnYVdZZ0tIWmhiR2xrVEdWdUlEMDlQU0F0TVNrZ2RtRnNhV1JNWlc0Z1BTQnNaVzVjYmx4dUlDQjJZWElnY0d4aFkyVkliMnhrWlhKelRHVnVJRDBnZG1Gc2FXUk1aVzRnUFQwOUlHeGxibHh1SUNBZ0lEOGdNRnh1SUNBZ0lEb2dOQ0F0SUNoMllXeHBaRXhsYmlBbElEUXBYRzVjYmlBZ2NtVjBkWEp1SUZ0MllXeHBaRXhsYml3Z2NHeGhZMlZJYjJ4a1pYSnpUR1Z1WFZ4dWZWeHVYRzR2THlCaVlYTmxOalFnYVhNZ05DOHpJQ3NnZFhBZ2RHOGdkSGR2SUdOb1lYSmhZM1JsY25NZ2IyWWdkR2hsSUc5eWFXZHBibUZzSUdSaGRHRmNibVoxYm1OMGFXOXVJR0o1ZEdWTVpXNW5kR2dnS0dJMk5Da2dlMXh1SUNCMllYSWdiR1Z1Y3lBOUlHZGxkRXhsYm5Nb1lqWTBLVnh1SUNCMllYSWdkbUZzYVdSTVpXNGdQU0JzWlc1eld6QmRYRzRnSUhaaGNpQndiR0ZqWlVodmJHUmxjbk5NWlc0Z1BTQnNaVzV6V3pGZFhHNGdJSEpsZEhWeWJpQW9LSFpoYkdsa1RHVnVJQ3NnY0d4aFkyVkliMnhrWlhKelRHVnVLU0FxSURNZ0x5QTBLU0F0SUhCc1lXTmxTRzlzWkdWeWMweGxibHh1ZlZ4dVhHNW1kVzVqZEdsdmJpQmZZbmwwWlV4bGJtZDBhQ0FvWWpZMExDQjJZV3hwWkV4bGJpd2djR3hoWTJWSWIyeGtaWEp6VEdWdUtTQjdYRzRnSUhKbGRIVnliaUFvS0haaGJHbGtUR1Z1SUNzZ2NHeGhZMlZJYjJ4a1pYSnpUR1Z1S1NBcUlETWdMeUEwS1NBdElIQnNZV05sU0c5c1pHVnljMHhsYmx4dWZWeHVYRzVtZFc1amRHbHZiaUIwYjBKNWRHVkJjbkpoZVNBb1lqWTBLU0I3WEc0Z0lIWmhjaUIwYlhCY2JpQWdkbUZ5SUd4bGJuTWdQU0JuWlhSTVpXNXpLR0kyTkNsY2JpQWdkbUZ5SUhaaGJHbGtUR1Z1SUQwZ2JHVnVjMXN3WFZ4dUlDQjJZWElnY0d4aFkyVkliMnhrWlhKelRHVnVJRDBnYkdWdWMxc3hYVnh1WEc0Z0lIWmhjaUJoY25JZ1BTQnVaWGNnUVhKeUtGOWllWFJsVEdWdVozUm9LR0kyTkN3Z2RtRnNhV1JNWlc0c0lIQnNZV05sU0c5c1pHVnljMHhsYmlrcFhHNWNiaUFnZG1GeUlHTjFja0o1ZEdVZ1BTQXdYRzVjYmlBZ0x5OGdhV1lnZEdobGNtVWdZWEpsSUhCc1lXTmxhRzlzWkdWeWN5d2diMjVzZVNCblpYUWdkWEFnZEc4Z2RHaGxJR3hoYzNRZ1kyOXRjR3hsZEdVZ05DQmphR0Z5YzF4dUlDQjJZWElnYkdWdUlEMGdjR3hoWTJWSWIyeGtaWEp6VEdWdUlENGdNRnh1SUNBZ0lEOGdkbUZzYVdSTVpXNGdMU0EwWEc0Z0lDQWdPaUIyWVd4cFpFeGxibHh1WEc0Z0lHWnZjaUFvZG1GeUlHa2dQU0F3T3lCcElEd2diR1Z1T3lCcElDczlJRFFwSUh0Y2JpQWdJQ0IwYlhBZ1BWeHVJQ0FnSUNBZ0tISmxka3h2YjJ0MWNGdGlOalF1WTJoaGNrTnZaR1ZCZENocEtWMGdQRHdnTVRncElIeGNiaUFnSUNBZ0lDaHlaWFpNYjI5cmRYQmJZalkwTG1Ob1lYSkRiMlJsUVhRb2FTQXJJREVwWFNBOFBDQXhNaWtnZkZ4dUlDQWdJQ0FnS0hKbGRreHZiMnQxY0Z0aU5qUXVZMmhoY2tOdlpHVkJkQ2hwSUNzZ01pbGRJRHc4SURZcElIeGNiaUFnSUNBZ0lISmxka3h2YjJ0MWNGdGlOalF1WTJoaGNrTnZaR1ZCZENocElDc2dNeWxkWEc0Z0lDQWdZWEp5VzJOMWNrSjVkR1VySzEwZ1BTQW9kRzF3SUQ0K0lERTJLU0FtSURCNFJrWmNiaUFnSUNCaGNuSmJZM1Z5UW5sMFpTc3JYU0E5SUNoMGJYQWdQajRnT0NrZ0ppQXdlRVpHWEc0Z0lDQWdZWEp5VzJOMWNrSjVkR1VySzEwZ1BTQjBiWEFnSmlBd2VFWkdYRzRnSUgxY2JseHVJQ0JwWmlBb2NHeGhZMlZJYjJ4a1pYSnpUR1Z1SUQwOVBTQXlLU0I3WEc0Z0lDQWdkRzF3SUQxY2JpQWdJQ0FnSUNoeVpYWk1iMjlyZFhCYllqWTBMbU5vWVhKRGIyUmxRWFFvYVNsZElEdzhJRElwSUh4Y2JpQWdJQ0FnSUNoeVpYWk1iMjlyZFhCYllqWTBMbU5vWVhKRGIyUmxRWFFvYVNBcklERXBYU0ErUGlBMEtWeHVJQ0FnSUdGeWNsdGpkWEpDZVhSbEt5dGRJRDBnZEcxd0lDWWdNSGhHUmx4dUlDQjlYRzVjYmlBZ2FXWWdLSEJzWVdObFNHOXNaR1Z5YzB4bGJpQTlQVDBnTVNrZ2UxeHVJQ0FnSUhSdGNDQTlYRzRnSUNBZ0lDQW9jbVYyVEc5dmEzVndXMkkyTkM1amFHRnlRMjlrWlVGMEtHa3BYU0E4UENBeE1Da2dmRnh1SUNBZ0lDQWdLSEpsZGt4dmIydDFjRnRpTmpRdVkyaGhja052WkdWQmRDaHBJQ3NnTVNsZElEdzhJRFFwSUh4Y2JpQWdJQ0FnSUNoeVpYWk1iMjlyZFhCYllqWTBMbU5vWVhKRGIyUmxRWFFvYVNBcklESXBYU0ErUGlBeUtWeHVJQ0FnSUdGeWNsdGpkWEpDZVhSbEt5dGRJRDBnS0hSdGNDQStQaUE0S1NBbUlEQjRSa1pjYmlBZ0lDQmhjbkpiWTNWeVFubDBaU3NyWFNBOUlIUnRjQ0FtSURCNFJrWmNiaUFnZlZ4dVhHNGdJSEpsZEhWeWJpQmhjbkpjYm4xY2JseHVablZ1WTNScGIyNGdkSEpwY0d4bGRGUnZRbUZ6WlRZMElDaHVkVzBwSUh0Y2JpQWdjbVYwZFhKdUlHeHZiMnQxY0Z0dWRXMGdQajRnTVRnZ0ppQXdlRE5HWFNBclhHNGdJQ0FnYkc5dmEzVndXMjUxYlNBK1BpQXhNaUFtSURCNE0wWmRJQ3RjYmlBZ0lDQnNiMjlyZFhCYmJuVnRJRDQrSURZZ0ppQXdlRE5HWFNBclhHNGdJQ0FnYkc5dmEzVndXMjUxYlNBbUlEQjRNMFpkWEc1OVhHNWNibVoxYm1OMGFXOXVJR1Z1WTI5a1pVTm9kVzVySUNoMWFXNTBPQ3dnYzNSaGNuUXNJR1Z1WkNrZ2UxeHVJQ0IyWVhJZ2RHMXdYRzRnSUhaaGNpQnZkWFJ3ZFhRZ1BTQmJYVnh1SUNCbWIzSWdLSFpoY2lCcElEMGdjM1JoY25RN0lHa2dQQ0JsYm1RN0lHa2dLejBnTXlrZ2UxeHVJQ0FnSUhSdGNDQTlYRzRnSUNBZ0lDQW9LSFZwYm5RNFcybGRJRHc4SURFMktTQW1JREI0UmtZd01EQXdLU0FyWEc0Z0lDQWdJQ0FvS0hWcGJuUTRXMmtnS3lBeFhTQThQQ0E0S1NBbUlEQjRSa1l3TUNrZ0sxeHVJQ0FnSUNBZ0tIVnBiblE0VzJrZ0t5QXlYU0FtSURCNFJrWXBYRzRnSUNBZ2IzVjBjSFYwTG5CMWMyZ29kSEpwY0d4bGRGUnZRbUZ6WlRZMEtIUnRjQ2twWEc0Z0lIMWNiaUFnY21WMGRYSnVJRzkxZEhCMWRDNXFiMmx1S0NjbktWeHVmVnh1WEc1bWRXNWpkR2x2YmlCbWNtOXRRbmwwWlVGeWNtRjVJQ2gxYVc1ME9Da2dlMXh1SUNCMllYSWdkRzF3WEc0Z0lIWmhjaUJzWlc0Z1BTQjFhVzUwT0M1c1pXNW5kR2hjYmlBZ2RtRnlJR1Y0ZEhKaFFubDBaWE1nUFNCc1pXNGdKU0F6SUM4dklHbG1JSGRsSUdoaGRtVWdNU0JpZVhSbElHeGxablFzSUhCaFpDQXlJR0o1ZEdWelhHNGdJSFpoY2lCd1lYSjBjeUE5SUZ0ZFhHNGdJSFpoY2lCdFlYaERhSFZ1YTB4bGJtZDBhQ0E5SURFMk16Z3pJQzh2SUcxMWMzUWdZbVVnYlhWc2RHbHdiR1VnYjJZZ00xeHVYRzRnSUM4dklHZHZJSFJvY205MVoyZ2dkR2hsSUdGeWNtRjVJR1YyWlhKNUlIUm9jbVZsSUdKNWRHVnpMQ0IzWlNkc2JDQmtaV0ZzSUhkcGRHZ2dkSEpoYVd4cGJtY2djM1IxWm1ZZ2JHRjBaWEpjYmlBZ1ptOXlJQ2gyWVhJZ2FTQTlJREFzSUd4bGJqSWdQU0JzWlc0Z0xTQmxlSFJ5WVVKNWRHVnpPeUJwSUR3Z2JHVnVNanNnYVNBclBTQnRZWGhEYUhWdWEweGxibWQwYUNrZ2UxeHVJQ0FnSUhCaGNuUnpMbkIxYzJnb1pXNWpiMlJsUTJoMWJtc29YRzRnSUNBZ0lDQjFhVzUwT0N3Z2FTd2dLR2tnS3lCdFlYaERhSFZ1YTB4bGJtZDBhQ2tnUGlCc1pXNHlJRDhnYkdWdU1pQTZJQ2hwSUNzZ2JXRjRRMmgxYm10TVpXNW5kR2dwWEc0Z0lDQWdLU2xjYmlBZ2ZWeHVYRzRnSUM4dklIQmhaQ0IwYUdVZ1pXNWtJSGRwZEdnZ2VtVnliM01zSUdKMWRDQnRZV3RsSUhOMWNtVWdkRzhnYm05MElHWnZjbWRsZENCMGFHVWdaWGgwY21FZ1lubDBaWE5jYmlBZ2FXWWdLR1Y0ZEhKaFFubDBaWE1nUFQwOUlERXBJSHRjYmlBZ0lDQjBiWEFnUFNCMWFXNTBPRnRzWlc0Z0xTQXhYVnh1SUNBZ0lIQmhjblJ6TG5CMWMyZ29YRzRnSUNBZ0lDQnNiMjlyZFhCYmRHMXdJRDQrSURKZElDdGNiaUFnSUNBZ0lHeHZiMnQxY0Zzb2RHMXdJRHc4SURRcElDWWdNSGd6UmwwZ0sxeHVJQ0FnSUNBZ0p6MDlKMXh1SUNBZ0lDbGNiaUFnZlNCbGJITmxJR2xtSUNobGVIUnlZVUo1ZEdWeklEMDlQU0F5S1NCN1hHNGdJQ0FnZEcxd0lEMGdLSFZwYm5RNFcyeGxiaUF0SURKZElEdzhJRGdwSUNzZ2RXbHVkRGhiYkdWdUlDMGdNVjFjYmlBZ0lDQndZWEowY3k1d2RYTm9LRnh1SUNBZ0lDQWdiRzl2YTNWd1czUnRjQ0ErUGlBeE1GMGdLMXh1SUNBZ0lDQWdiRzl2YTNWd1d5aDBiWEFnUGo0Z05Da2dKaUF3ZUROR1hTQXJYRzRnSUNBZ0lDQnNiMjlyZFhCYktIUnRjQ0E4UENBeUtTQW1JREI0TTBaZElDdGNiaUFnSUNBZ0lDYzlKMXh1SUNBZ0lDbGNiaUFnZlZ4dVhHNGdJSEpsZEhWeWJpQndZWEowY3k1cWIybHVLQ2NuS1Z4dWZWeHVJaXdpTHlvaFhHNGdLaUJVYUdVZ1luVm1abVZ5SUcxdlpIVnNaU0JtY205dElHNXZaR1V1YW5Nc0lHWnZjaUIwYUdVZ1luSnZkM05sY2k1Y2JpQXFYRzRnS2lCQVlYVjBhRzl5SUNBZ1JtVnliM056SUVGaWIzVnJhR0ZrYVdwbGFDQThabVZ5YjNOelFHWmxjbTl6Y3k1dmNtYytJRHhvZEhSd09pOHZabVZ5YjNOekxtOXlaejVjYmlBcUlFQnNhV05sYm5ObElDQk5TVlJjYmlBcUwxeHVMeW9nWlhOc2FXNTBMV1JwYzJGaWJHVWdibTh0Y0hKdmRHOGdLaTljYmx4dUozVnpaU0J6ZEhKcFkzUW5YRzVjYm5aaGNpQmlZWE5sTmpRZ1BTQnlaWEYxYVhKbEtDZGlZWE5sTmpRdGFuTW5LVnh1ZG1GeUlHbGxaV1UzTlRRZ1BTQnlaWEYxYVhKbEtDZHBaV1ZsTnpVMEp5bGNiblpoY2lCcGMwRnljbUY1SUQwZ2NtVnhkV2x5WlNnbmFYTmhjbkpoZVNjcFhHNWNibVY0Y0c5eWRITXVRblZtWm1WeUlEMGdRblZtWm1WeVhHNWxlSEJ2Y25SekxsTnNiM2RDZFdabVpYSWdQU0JUYkc5M1FuVm1abVZ5WEc1bGVIQnZjblJ6TGtsT1UxQkZRMVJmVFVGWVgwSlpWRVZUSUQwZ05UQmNibHh1THlvcVhHNGdLaUJKWmlCZ1FuVm1abVZ5TGxSWlVFVkVYMEZTVWtGWlgxTlZVRkJQVWxSZ09seHVJQ29nSUNBOVBUMGdkSEoxWlNBZ0lDQlZjMlVnVldsdWREaEJjbkpoZVNCcGJYQnNaVzFsYm5SaGRHbHZiaUFvWm1GemRHVnpkQ2xjYmlBcUlDQWdQVDA5SUdaaGJITmxJQ0FnVlhObElFOWlhbVZqZENCcGJYQnNaVzFsYm5SaGRHbHZiaUFvYlc5emRDQmpiMjF3WVhScFlteGxMQ0JsZG1WdUlFbEZOaWxjYmlBcVhHNGdLaUJDY205M2MyVnljeUIwYUdGMElITjFjSEJ2Y25RZ2RIbHdaV1FnWVhKeVlYbHpJR0Z5WlNCSlJTQXhNQ3NzSUVacGNtVm1iM2dnTkNzc0lFTm9jbTl0WlNBM0t5d2dVMkZtWVhKcElEVXVNU3NzWEc0Z0tpQlBjR1Z5WVNBeE1TNDJLeXdnYVU5VElEUXVNaXN1WEc0Z0tseHVJQ29nUkhWbElIUnZJSFpoY21sdmRYTWdZbkp2ZDNObGNpQmlkV2R6TENCemIyMWxkR2x0WlhNZ2RHaGxJRTlpYW1WamRDQnBiWEJzWlcxbGJuUmhkR2x2YmlCM2FXeHNJR0psSUhWelpXUWdaWFpsYmx4dUlDb2dkMmhsYmlCMGFHVWdZbkp2ZDNObGNpQnpkWEJ3YjNKMGN5QjBlWEJsWkNCaGNuSmhlWE11WEc0Z0tseHVJQ29nVG05MFpUcGNiaUFxWEc0Z0tpQWdJQzBnUm1seVpXWnZlQ0EwTFRJNUlHeGhZMnR6SUhOMWNIQnZjblFnWm05eUlHRmtaR2x1WnlCdVpYY2djSEp2Y0dWeWRHbGxjeUIwYnlCZ1ZXbHVkRGhCY25KaGVXQWdhVzV6ZEdGdVkyVnpMRnh1SUNvZ0lDQWdJRk5sWlRvZ2FIUjBjSE02THk5aWRXZDZhV3hzWVM1dGIzcHBiR3hoTG05eVp5OXphRzkzWDJKMVp5NWpaMmsvYVdROU5qazFORE00TGx4dUlDcGNiaUFxSUNBZ0xTQkRhSEp2YldVZ09TMHhNQ0JwY3lCdGFYTnphVzVuSUhSb1pTQmdWSGx3WldSQmNuSmhlUzV3Y205MGIzUjVjR1V1YzNWaVlYSnlZWGxnSUdaMWJtTjBhVzl1TGx4dUlDcGNiaUFxSUNBZ0xTQkpSVEV3SUdoaGN5QmhJR0p5YjJ0bGJpQmdWSGx3WldSQmNuSmhlUzV3Y205MGIzUjVjR1V1YzNWaVlYSnlZWGxnSUdaMWJtTjBhVzl1SUhkb2FXTm9JSEpsZEhWeWJuTWdZWEp5WVhseklHOW1YRzRnS2lBZ0lDQWdhVzVqYjNKeVpXTjBJR3hsYm1kMGFDQnBiaUJ6YjIxbElITnBkSFZoZEdsdmJuTXVYRzVjYmlBcUlGZGxJR1JsZEdWamRDQjBhR1Z6WlNCaWRXZG5lU0JpY205M2MyVnljeUJoYm1RZ2MyVjBJR0JDZFdabVpYSXVWRmxRUlVSZlFWSlNRVmxmVTFWUVVFOVNWR0FnZEc4Z1lHWmhiSE5sWUNCemJ5QjBhR1Y1WEc0Z0tpQm5aWFFnZEdobElFOWlhbVZqZENCcGJYQnNaVzFsYm5SaGRHbHZiaXdnZDJocFkyZ2dhWE1nYzJ4dmQyVnlJR0oxZENCaVpXaGhkbVZ6SUdOdmNuSmxZM1JzZVM1Y2JpQXFMMXh1UW5WbVptVnlMbFJaVUVWRVgwRlNVa0ZaWDFOVlVGQlBVbFFnUFNCbmJHOWlZV3d1VkZsUVJVUmZRVkpTUVZsZlUxVlFVRTlTVkNBaFBUMGdkVzVrWldacGJtVmtYRzRnSUQ4Z1oyeHZZbUZzTGxSWlVFVkVYMEZTVWtGWlgxTlZVRkJQVWxSY2JpQWdPaUIwZVhCbFpFRnljbUY1VTNWd2NHOXlkQ2dwWEc1Y2JpOHFYRzRnS2lCRmVIQnZjblFnYTAxaGVFeGxibWQwYUNCaFpuUmxjaUIwZVhCbFpDQmhjbkpoZVNCemRYQndiM0owSUdseklHUmxkR1Z5YldsdVpXUXVYRzRnS2k5Y2JtVjRjRzl5ZEhNdWEwMWhlRXhsYm1kMGFDQTlJR3ROWVhoTVpXNW5kR2dvS1Z4dVhHNW1kVzVqZEdsdmJpQjBlWEJsWkVGeWNtRjVVM1Z3Y0c5eWRDQW9LU0I3WEc0Z0lIUnllU0I3WEc0Z0lDQWdkbUZ5SUdGeWNpQTlJRzVsZHlCVmFXNTBPRUZ5Y21GNUtERXBYRzRnSUNBZ1lYSnlMbDlmY0hKdmRHOWZYeUE5SUh0ZlgzQnliM1J2WDE4NklGVnBiblE0UVhKeVlYa3VjSEp2ZEc5MGVYQmxMQ0JtYjI4NklHWjFibU4wYVc5dUlDZ3BJSHNnY21WMGRYSnVJRFF5SUgxOVhHNGdJQ0FnY21WMGRYSnVJR0Z5Y2k1bWIyOG9LU0E5UFQwZ05ESWdKaVlnTHk4Z2RIbHdaV1FnWVhKeVlYa2dhVzV6ZEdGdVkyVnpJR05oYmlCaVpTQmhkV2R0Wlc1MFpXUmNiaUFnSUNBZ0lDQWdkSGx3Wlc5bUlHRnljaTV6ZFdKaGNuSmhlU0E5UFQwZ0oyWjFibU4wYVc5dUp5QW1KaUF2THlCamFISnZiV1VnT1MweE1DQnNZV05ySUdCemRXSmhjbkpoZVdCY2JpQWdJQ0FnSUNBZ1lYSnlMbk4xWW1GeWNtRjVLREVzSURFcExtSjVkR1ZNWlc1bmRHZ2dQVDA5SURBZ0x5OGdhV1V4TUNCb1lYTWdZbkp2YTJWdUlHQnpkV0poY25KaGVXQmNiaUFnZlNCallYUmphQ0FvWlNrZ2UxeHVJQ0FnSUhKbGRIVnliaUJtWVd4elpWeHVJQ0I5WEc1OVhHNWNibVoxYm1OMGFXOXVJR3ROWVhoTVpXNW5kR2dnS0NrZ2UxeHVJQ0J5WlhSMWNtNGdRblZtWm1WeUxsUlpVRVZFWDBGU1VrRlpYMU5WVUZCUFVsUmNiaUFnSUNBL0lEQjROMlptWm1abVptWmNiaUFnSUNBNklEQjRNMlptWm1abVptWmNibjFjYmx4dVpuVnVZM1JwYjI0Z1kzSmxZWFJsUW5WbVptVnlJQ2gwYUdGMExDQnNaVzVuZEdncElIdGNiaUFnYVdZZ0tHdE5ZWGhNWlc1bmRHZ29LU0E4SUd4bGJtZDBhQ2tnZTF4dUlDQWdJSFJvY205M0lHNWxkeUJTWVc1blpVVnljbTl5S0NkSmJuWmhiR2xrSUhSNWNHVmtJR0Z5Y21GNUlHeGxibWQwYUNjcFhHNGdJSDFjYmlBZ2FXWWdLRUoxWm1abGNpNVVXVkJGUkY5QlVsSkJXVjlUVlZCUVQxSlVLU0I3WEc0Z0lDQWdMeThnVW1WMGRYSnVJR0Z1SUdGMVoyMWxiblJsWkNCZ1ZXbHVkRGhCY25KaGVXQWdhVzV6ZEdGdVkyVXNJR1p2Y2lCaVpYTjBJSEJsY21admNtMWhibU5sWEc0Z0lDQWdkR2hoZENBOUlHNWxkeUJWYVc1ME9FRnljbUY1S0d4bGJtZDBhQ2xjYmlBZ0lDQjBhR0YwTGw5ZmNISnZkRzlmWHlBOUlFSjFabVpsY2k1d2NtOTBiM1I1Y0dWY2JpQWdmU0JsYkhObElIdGNiaUFnSUNBdkx5QkdZV3hzWW1GamF6b2dVbVYwZFhKdUlHRnVJRzlpYW1WamRDQnBibk4wWVc1alpTQnZaaUIwYUdVZ1FuVm1abVZ5SUdOc1lYTnpYRzRnSUNBZ2FXWWdLSFJvWVhRZ1BUMDlJRzUxYkd3cElIdGNiaUFnSUNBZ0lIUm9ZWFFnUFNCdVpYY2dRblZtWm1WeUtHeGxibWQwYUNsY2JpQWdJQ0I5WEc0Z0lDQWdkR2hoZEM1c1pXNW5kR2dnUFNCc1pXNW5kR2hjYmlBZ2ZWeHVYRzRnSUhKbGRIVnliaUIwYUdGMFhHNTlYRzVjYmk4cUtseHVJQ29nVkdobElFSjFabVpsY2lCamIyNXpkSEoxWTNSdmNpQnlaWFIxY201eklHbHVjM1JoYm1ObGN5QnZaaUJnVldsdWREaEJjbkpoZVdBZ2RHaGhkQ0JvWVhabElIUm9aV2x5WEc0Z0tpQndjbTkwYjNSNWNHVWdZMmhoYm1kbFpDQjBieUJnUW5WbVptVnlMbkJ5YjNSdmRIbHdaV0F1SUVaMWNuUm9aWEp0YjNKbExDQmdRblZtWm1WeVlDQnBjeUJoSUhOMVltTnNZWE56SUc5bVhHNGdLaUJnVldsdWREaEJjbkpoZVdBc0lITnZJSFJvWlNCeVpYUjFjbTVsWkNCcGJuTjBZVzVqWlhNZ2QybHNiQ0JvWVhabElHRnNiQ0IwYUdVZ2JtOWtaU0JnUW5WbVptVnlZQ0J0WlhSb2IyUnpYRzRnS2lCaGJtUWdkR2hsSUdCVmFXNTBPRUZ5Y21GNVlDQnRaWFJvYjJSekxpQlRjWFZoY21VZ1luSmhZMnRsZENCdWIzUmhkR2x2YmlCM2IzSnJjeUJoY3lCbGVIQmxZM1JsWkNBdExTQnBkRnh1SUNvZ2NtVjBkWEp1Y3lCaElITnBibWRzWlNCdlkzUmxkQzVjYmlBcVhHNGdLaUJVYUdVZ1lGVnBiblE0UVhKeVlYbGdJSEJ5YjNSdmRIbHdaU0J5WlcxaGFXNXpJSFZ1Ylc5a2FXWnBaV1F1WEc0Z0tpOWNibHh1Wm5WdVkzUnBiMjRnUW5WbVptVnlJQ2hoY21jc0lHVnVZMjlrYVc1blQzSlBabVp6WlhRc0lHeGxibWQwYUNrZ2UxeHVJQ0JwWmlBb0lVSjFabVpsY2k1VVdWQkZSRjlCVWxKQldWOVRWVkJRVDFKVUlDWW1JQ0VvZEdocGN5QnBibk4wWVc1alpXOW1JRUoxWm1abGNpa3BJSHRjYmlBZ0lDQnlaWFIxY200Z2JtVjNJRUoxWm1abGNpaGhjbWNzSUdWdVkyOWthVzVuVDNKUFptWnpaWFFzSUd4bGJtZDBhQ2xjYmlBZ2ZWeHVYRzRnSUM4dklFTnZiVzF2YmlCallYTmxMbHh1SUNCcFppQW9kSGx3Wlc5bUlHRnlaeUE5UFQwZ0oyNTFiV0psY2ljcElIdGNiaUFnSUNCcFppQW9kSGx3Wlc5bUlHVnVZMjlrYVc1blQzSlBabVp6WlhRZ1BUMDlJQ2R6ZEhKcGJtY25LU0I3WEc0Z0lDQWdJQ0IwYUhKdmR5QnVaWGNnUlhKeWIzSW9YRzRnSUNBZ0lDQWdJQ2RKWmlCbGJtTnZaR2x1WnlCcGN5QnpjR1ZqYVdacFpXUWdkR2hsYmlCMGFHVWdabWx5YzNRZ1lYSm5kVzFsYm5RZ2JYVnpkQ0JpWlNCaElITjBjbWx1WnlkY2JpQWdJQ0FnSUNsY2JpQWdJQ0I5WEc0Z0lDQWdjbVYwZFhKdUlHRnNiRzlqVlc1ellXWmxLSFJvYVhNc0lHRnlaeWxjYmlBZ2ZWeHVJQ0J5WlhSMWNtNGdabkp2YlNoMGFHbHpMQ0JoY21jc0lHVnVZMjlrYVc1blQzSlBabVp6WlhRc0lHeGxibWQwYUNsY2JuMWNibHh1UW5WbVptVnlMbkJ2YjJ4VGFYcGxJRDBnT0RFNU1pQXZMeUJ1YjNRZ2RYTmxaQ0JpZVNCMGFHbHpJR2x0Y0d4bGJXVnVkR0YwYVc5dVhHNWNiaTh2SUZSUFJFODZJRXhsWjJGamVTd2dibTkwSUc1bFpXUmxaQ0JoYm5sdGIzSmxMaUJTWlcxdmRtVWdhVzRnYm1WNGRDQnRZV3B2Y2lCMlpYSnphVzl1TGx4dVFuVm1abVZ5TGw5aGRXZHRaVzUwSUQwZ1puVnVZM1JwYjI0Z0tHRnljaWtnZTF4dUlDQmhjbkl1WDE5d2NtOTBiMTlmSUQwZ1FuVm1abVZ5TG5CeWIzUnZkSGx3WlZ4dUlDQnlaWFIxY200Z1lYSnlYRzU5WEc1Y2JtWjFibU4wYVc5dUlHWnliMjBnS0hSb1lYUXNJSFpoYkhWbExDQmxibU52WkdsdVowOXlUMlptYzJWMExDQnNaVzVuZEdncElIdGNiaUFnYVdZZ0tIUjVjR1Z2WmlCMllXeDFaU0E5UFQwZ0oyNTFiV0psY2ljcElIdGNiaUFnSUNCMGFISnZkeUJ1WlhjZ1ZIbHdaVVZ5Y205eUtDZGNJblpoYkhWbFhDSWdZWEpuZFcxbGJuUWdiWFZ6ZENCdWIzUWdZbVVnWVNCdWRXMWlaWEluS1Z4dUlDQjlYRzVjYmlBZ2FXWWdLSFI1Y0dWdlppQkJjbkpoZVVKMVptWmxjaUFoUFQwZ0ozVnVaR1ZtYVc1bFpDY2dKaVlnZG1Gc2RXVWdhVzV6ZEdGdVkyVnZaaUJCY25KaGVVSjFabVpsY2lrZ2UxeHVJQ0FnSUhKbGRIVnliaUJtY205dFFYSnlZWGxDZFdabVpYSW9kR2hoZEN3Z2RtRnNkV1VzSUdWdVkyOWthVzVuVDNKUFptWnpaWFFzSUd4bGJtZDBhQ2xjYmlBZ2ZWeHVYRzRnSUdsbUlDaDBlWEJsYjJZZ2RtRnNkV1VnUFQwOUlDZHpkSEpwYm1jbktTQjdYRzRnSUNBZ2NtVjBkWEp1SUdaeWIyMVRkSEpwYm1jb2RHaGhkQ3dnZG1Gc2RXVXNJR1Z1WTI5a2FXNW5UM0pQWm1aelpYUXBYRzRnSUgxY2JseHVJQ0J5WlhSMWNtNGdabkp2YlU5aWFtVmpkQ2gwYUdGMExDQjJZV3gxWlNsY2JuMWNibHh1THlvcVhHNGdLaUJHZFc1amRHbHZibUZzYkhrZ1pYRjFhWFpoYkdWdWRDQjBieUJDZFdabVpYSW9ZWEpuTENCbGJtTnZaR2x1WnlrZ1luVjBJSFJvY205M2N5QmhJRlI1Y0dWRmNuSnZjbHh1SUNvZ2FXWWdkbUZzZFdVZ2FYTWdZU0J1ZFcxaVpYSXVYRzRnS2lCQ2RXWm1aWEl1Wm5KdmJTaHpkSEpiTENCbGJtTnZaR2x1WjEwcFhHNGdLaUJDZFdabVpYSXVabkp2YlNoaGNuSmhlU2xjYmlBcUlFSjFabVpsY2k1bWNtOXRLR0oxWm1abGNpbGNiaUFxSUVKMVptWmxjaTVtY205dEtHRnljbUY1UW5WbVptVnlXeXdnWW5sMFpVOW1abk5sZEZzc0lHeGxibWQwYUYxZEtWeHVJQ29xTDF4dVFuVm1abVZ5TG1aeWIyMGdQU0JtZFc1amRHbHZiaUFvZG1Gc2RXVXNJR1Z1WTI5a2FXNW5UM0pQWm1aelpYUXNJR3hsYm1kMGFDa2dlMXh1SUNCeVpYUjFjbTRnWm5KdmJTaHVkV3hzTENCMllXeDFaU3dnWlc1amIyUnBibWRQY2s5bVpuTmxkQ3dnYkdWdVozUm9LVnh1ZlZ4dVhHNXBaaUFvUW5WbVptVnlMbFJaVUVWRVgwRlNVa0ZaWDFOVlVGQlBVbFFwSUh0Y2JpQWdRblZtWm1WeUxuQnliM1J2ZEhsd1pTNWZYM0J5YjNSdlgxOGdQU0JWYVc1ME9FRnljbUY1TG5CeWIzUnZkSGx3WlZ4dUlDQkNkV1ptWlhJdVgxOXdjbTkwYjE5ZklEMGdWV2x1ZERoQmNuSmhlVnh1SUNCcFppQW9kSGx3Wlc5bUlGTjViV0p2YkNBaFBUMGdKM1Z1WkdWbWFXNWxaQ2NnSmlZZ1UzbHRZbTlzTG5Od1pXTnBaWE1nSmlaY2JpQWdJQ0FnSUVKMVptWmxjbHRUZVcxaWIyd3VjM0JsWTJsbGMxMGdQVDA5SUVKMVptWmxjaWtnZTF4dUlDQWdJQzh2SUVacGVDQnpkV0poY25KaGVTZ3BJR2x1SUVWVE1qQXhOaTRnVTJWbE9pQm9kSFJ3Y3pvdkwyZHBkR2gxWWk1amIyMHZabVZ5YjNOekwySjFabVpsY2k5d2RXeHNMemszWEc0Z0lDQWdUMkpxWldOMExtUmxabWx1WlZCeWIzQmxjblI1S0VKMVptWmxjaXdnVTNsdFltOXNMbk53WldOcFpYTXNJSHRjYmlBZ0lDQWdJSFpoYkhWbE9pQnVkV3hzTEZ4dUlDQWdJQ0FnWTI5dVptbG5kWEpoWW14bE9pQjBjblZsWEc0Z0lDQWdmU2xjYmlBZ2ZWeHVmVnh1WEc1bWRXNWpkR2x2YmlCaGMzTmxjblJUYVhwbElDaHphWHBsS1NCN1hHNGdJR2xtSUNoMGVYQmxiMllnYzJsNlpTQWhQVDBnSjI1MWJXSmxjaWNwSUh0Y2JpQWdJQ0IwYUhKdmR5QnVaWGNnVkhsd1pVVnljbTl5S0NkY0luTnBlbVZjSWlCaGNtZDFiV1Z1ZENCdGRYTjBJR0psSUdFZ2JuVnRZbVZ5SnlsY2JpQWdmU0JsYkhObElHbG1JQ2h6YVhwbElEd2dNQ2tnZTF4dUlDQWdJSFJvY205M0lHNWxkeUJTWVc1blpVVnljbTl5S0NkY0luTnBlbVZjSWlCaGNtZDFiV1Z1ZENCdGRYTjBJRzV2ZENCaVpTQnVaV2RoZEdsMlpTY3BYRzRnSUgxY2JuMWNibHh1Wm5WdVkzUnBiMjRnWVd4c2IyTWdLSFJvWVhRc0lITnBlbVVzSUdacGJHd3NJR1Z1WTI5a2FXNW5LU0I3WEc0Z0lHRnpjMlZ5ZEZOcGVtVW9jMmw2WlNsY2JpQWdhV1lnS0hOcGVtVWdQRDBnTUNrZ2UxeHVJQ0FnSUhKbGRIVnliaUJqY21WaGRHVkNkV1ptWlhJb2RHaGhkQ3dnYzJsNlpTbGNiaUFnZlZ4dUlDQnBaaUFvWm1sc2JDQWhQVDBnZFc1a1pXWnBibVZrS1NCN1hHNGdJQ0FnTHk4Z1QyNXNlU0J3WVhrZ1lYUjBaVzUwYVc5dUlIUnZJR1Z1WTI5a2FXNW5JR2xtSUdsMEozTWdZU0J6ZEhKcGJtY3VJRlJvYVhOY2JpQWdJQ0F2THlCd2NtVjJaVzUwY3lCaFkyTnBaR1Z1ZEdGc2JIa2djMlZ1WkdsdVp5QnBiaUJoSUc1MWJXSmxjaUIwYUdGMElIZHZkV3hrWEc0Z0lDQWdMeThnWW1VZ2FXNTBaWEp3Y21WMGRHVmtJR0Z6SUdFZ2MzUmhjblFnYjJabWMyVjBMbHh1SUNBZ0lISmxkSFZ5YmlCMGVYQmxiMllnWlc1amIyUnBibWNnUFQwOUlDZHpkSEpwYm1jblhHNGdJQ0FnSUNBL0lHTnlaV0YwWlVKMVptWmxjaWgwYUdGMExDQnphWHBsS1M1bWFXeHNLR1pwYkd3c0lHVnVZMjlrYVc1bktWeHVJQ0FnSUNBZ09pQmpjbVZoZEdWQ2RXWm1aWElvZEdoaGRDd2djMmw2WlNrdVptbHNiQ2htYVd4c0tWeHVJQ0I5WEc0Z0lISmxkSFZ5YmlCamNtVmhkR1ZDZFdabVpYSW9kR2hoZEN3Z2MybDZaU2xjYm4xY2JseHVMeW9xWEc0Z0tpQkRjbVZoZEdWeklHRWdibVYzSUdacGJHeGxaQ0JDZFdabVpYSWdhVzV6ZEdGdVkyVXVYRzRnS2lCaGJHeHZZeWh6YVhwbFd5d2dabWxzYkZzc0lHVnVZMjlrYVc1blhWMHBYRzRnS2lvdlhHNUNkV1ptWlhJdVlXeHNiMk1nUFNCbWRXNWpkR2x2YmlBb2MybDZaU3dnWm1sc2JDd2daVzVqYjJScGJtY3BJSHRjYmlBZ2NtVjBkWEp1SUdGc2JHOWpLRzUxYkd3c0lITnBlbVVzSUdacGJHd3NJR1Z1WTI5a2FXNW5LVnh1ZlZ4dVhHNW1kVzVqZEdsdmJpQmhiR3h2WTFWdWMyRm1aU0FvZEdoaGRDd2djMmw2WlNrZ2UxeHVJQ0JoYzNObGNuUlRhWHBsS0hOcGVtVXBYRzRnSUhSb1lYUWdQU0JqY21WaGRHVkNkV1ptWlhJb2RHaGhkQ3dnYzJsNlpTQThJREFnUHlBd0lEb2dZMmhsWTJ0bFpDaHphWHBsS1NCOElEQXBYRzRnSUdsbUlDZ2hRblZtWm1WeUxsUlpVRVZFWDBGU1VrRlpYMU5WVUZCUFVsUXBJSHRjYmlBZ0lDQm1iM0lnS0haaGNpQnBJRDBnTURzZ2FTQThJSE5wZW1VN0lDc3JhU2tnZTF4dUlDQWdJQ0FnZEdoaGRGdHBYU0E5SURCY2JpQWdJQ0I5WEc0Z0lIMWNiaUFnY21WMGRYSnVJSFJvWVhSY2JuMWNibHh1THlvcVhHNGdLaUJGY1hWcGRtRnNaVzUwSUhSdklFSjFabVpsY2lodWRXMHBMQ0JpZVNCa1pXWmhkV3gwSUdOeVpXRjBaWE1nWVNCdWIyNHRlbVZ5YnkxbWFXeHNaV1FnUW5WbVptVnlJR2x1YzNSaGJtTmxMbHh1SUNvZ0tpOWNia0oxWm1abGNpNWhiR3h2WTFWdWMyRm1aU0E5SUdaMWJtTjBhVzl1SUNoemFYcGxLU0I3WEc0Z0lISmxkSFZ5YmlCaGJHeHZZMVZ1YzJGbVpTaHVkV3hzTENCemFYcGxLVnh1ZlZ4dUx5b3FYRzRnS2lCRmNYVnBkbUZzWlc1MElIUnZJRk5zYjNkQ2RXWm1aWElvYm5WdEtTd2dZbmtnWkdWbVlYVnNkQ0JqY21WaGRHVnpJR0VnYm05dUxYcGxjbTh0Wm1sc2JHVmtJRUoxWm1abGNpQnBibk4wWVc1alpTNWNiaUFxTDF4dVFuVm1abVZ5TG1Gc2JHOWpWVzV6WVdabFUyeHZkeUE5SUdaMWJtTjBhVzl1SUNoemFYcGxLU0I3WEc0Z0lISmxkSFZ5YmlCaGJHeHZZMVZ1YzJGbVpTaHVkV3hzTENCemFYcGxLVnh1ZlZ4dVhHNW1kVzVqZEdsdmJpQm1jbTl0VTNSeWFXNW5JQ2gwYUdGMExDQnpkSEpwYm1jc0lHVnVZMjlrYVc1bktTQjdYRzRnSUdsbUlDaDBlWEJsYjJZZ1pXNWpiMlJwYm1jZ0lUMDlJQ2R6ZEhKcGJtY25JSHg4SUdWdVkyOWthVzVuSUQwOVBTQW5KeWtnZTF4dUlDQWdJR1Z1WTI5a2FXNW5JRDBnSjNWMFpqZ25YRzRnSUgxY2JseHVJQ0JwWmlBb0lVSjFabVpsY2k1cGMwVnVZMjlrYVc1bktHVnVZMjlrYVc1bktTa2dlMXh1SUNBZ0lIUm9jbTkzSUc1bGR5QlVlWEJsUlhKeWIzSW9KMXdpWlc1amIyUnBibWRjSWlCdGRYTjBJR0psSUdFZ2RtRnNhV1FnYzNSeWFXNW5JR1Z1WTI5a2FXNW5KeWxjYmlBZ2ZWeHVYRzRnSUhaaGNpQnNaVzVuZEdnZ1BTQmllWFJsVEdWdVozUm9LSE4wY21sdVp5d2daVzVqYjJScGJtY3BJSHdnTUZ4dUlDQjBhR0YwSUQwZ1kzSmxZWFJsUW5WbVptVnlLSFJvWVhRc0lHeGxibWQwYUNsY2JseHVJQ0IyWVhJZ1lXTjBkV0ZzSUQwZ2RHaGhkQzUzY21sMFpTaHpkSEpwYm1jc0lHVnVZMjlrYVc1bktWeHVYRzRnSUdsbUlDaGhZM1IxWVd3Z0lUMDlJR3hsYm1kMGFDa2dlMXh1SUNBZ0lDOHZJRmR5YVhScGJtY2dZU0JvWlhnZ2MzUnlhVzVuTENCbWIzSWdaWGhoYlhCc1pTd2dkR2hoZENCamIyNTBZV2x1Y3lCcGJuWmhiR2xrSUdOb1lYSmhZM1JsY25NZ2QybHNiRnh1SUNBZ0lDOHZJR05oZFhObElHVjJaWEo1ZEdocGJtY2dZV1owWlhJZ2RHaGxJR1pwY25OMElHbHVkbUZzYVdRZ1kyaGhjbUZqZEdWeUlIUnZJR0psSUdsbmJtOXlaV1F1SUNobExtY3VYRzRnSUNBZ0x5OGdKMkZpZUhoalpDY2dkMmxzYkNCaVpTQjBjbVZoZEdWa0lHRnpJQ2RoWWljcFhHNGdJQ0FnZEdoaGRDQTlJSFJvWVhRdWMyeHBZMlVvTUN3Z1lXTjBkV0ZzS1Z4dUlDQjlYRzVjYmlBZ2NtVjBkWEp1SUhSb1lYUmNibjFjYmx4dVpuVnVZM1JwYjI0Z1puSnZiVUZ5Y21GNVRHbHJaU0FvZEdoaGRDd2dZWEp5WVhrcElIdGNiaUFnZG1GeUlHeGxibWQwYUNBOUlHRnljbUY1TG14bGJtZDBhQ0E4SURBZ1B5QXdJRG9nWTJobFkydGxaQ2hoY25KaGVTNXNaVzVuZEdncElId2dNRnh1SUNCMGFHRjBJRDBnWTNKbFlYUmxRblZtWm1WeUtIUm9ZWFFzSUd4bGJtZDBhQ2xjYmlBZ1ptOXlJQ2gyWVhJZ2FTQTlJREE3SUdrZ1BDQnNaVzVuZEdnN0lHa2dLejBnTVNrZ2UxeHVJQ0FnSUhSb1lYUmJhVjBnUFNCaGNuSmhlVnRwWFNBbUlESTFOVnh1SUNCOVhHNGdJSEpsZEhWeWJpQjBhR0YwWEc1OVhHNWNibVoxYm1OMGFXOXVJR1p5YjIxQmNuSmhlVUoxWm1abGNpQW9kR2hoZEN3Z1lYSnlZWGtzSUdKNWRHVlBabVp6WlhRc0lHeGxibWQwYUNrZ2UxeHVJQ0JoY25KaGVTNWllWFJsVEdWdVozUm9JQzh2SUhSb2FYTWdkR2h5YjNkeklHbG1JR0JoY25KaGVXQWdhWE1nYm05MElHRWdkbUZzYVdRZ1FYSnlZWGxDZFdabVpYSmNibHh1SUNCcFppQW9ZbmwwWlU5bVpuTmxkQ0E4SURBZ2ZId2dZWEp5WVhrdVlubDBaVXhsYm1kMGFDQThJR0o1ZEdWUFptWnpaWFFwSUh0Y2JpQWdJQ0IwYUhKdmR5QnVaWGNnVW1GdVoyVkZjbkp2Y2lnblhGd25iMlptYzJWMFhGd25JR2x6SUc5MWRDQnZaaUJpYjNWdVpITW5LVnh1SUNCOVhHNWNiaUFnYVdZZ0tHRnljbUY1TG1KNWRHVk1aVzVuZEdnZ1BDQmllWFJsVDJabWMyVjBJQ3NnS0d4bGJtZDBhQ0I4ZkNBd0tTa2dlMXh1SUNBZ0lIUm9jbTkzSUc1bGR5QlNZVzVuWlVWeWNtOXlLQ2RjWENkc1pXNW5kR2hjWENjZ2FYTWdiM1YwSUc5bUlHSnZkVzVrY3ljcFhHNGdJSDFjYmx4dUlDQnBaaUFvWW5sMFpVOW1abk5sZENBOVBUMGdkVzVrWldacGJtVmtJQ1ltSUd4bGJtZDBhQ0E5UFQwZ2RXNWtaV1pwYm1Wa0tTQjdYRzRnSUNBZ1lYSnlZWGtnUFNCdVpYY2dWV2x1ZERoQmNuSmhlU2hoY25KaGVTbGNiaUFnZlNCbGJITmxJR2xtSUNoc1pXNW5kR2dnUFQwOUlIVnVaR1ZtYVc1bFpDa2dlMXh1SUNBZ0lHRnljbUY1SUQwZ2JtVjNJRlZwYm5RNFFYSnlZWGtvWVhKeVlYa3NJR0o1ZEdWUFptWnpaWFFwWEc0Z0lIMGdaV3h6WlNCN1hHNGdJQ0FnWVhKeVlYa2dQU0J1WlhjZ1ZXbHVkRGhCY25KaGVTaGhjbkpoZVN3Z1lubDBaVTltWm5ObGRDd2diR1Z1WjNSb0tWeHVJQ0I5WEc1Y2JpQWdhV1lnS0VKMVptWmxjaTVVV1ZCRlJGOUJVbEpCV1Y5VFZWQlFUMUpVS1NCN1hHNGdJQ0FnTHk4Z1VtVjBkWEp1SUdGdUlHRjFaMjFsYm5SbFpDQmdWV2x1ZERoQmNuSmhlV0FnYVc1emRHRnVZMlVzSUdadmNpQmlaWE4wSUhCbGNtWnZjbTFoYm1ObFhHNGdJQ0FnZEdoaGRDQTlJR0Z5Y21GNVhHNGdJQ0FnZEdoaGRDNWZYM0J5YjNSdlgxOGdQU0JDZFdabVpYSXVjSEp2ZEc5MGVYQmxYRzRnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdMeThnUm1Gc2JHSmhZMnM2SUZKbGRIVnliaUJoYmlCdlltcGxZM1FnYVc1emRHRnVZMlVnYjJZZ2RHaGxJRUoxWm1abGNpQmpiR0Z6YzF4dUlDQWdJSFJvWVhRZ1BTQm1jbTl0UVhKeVlYbE1hV3RsS0hSb1lYUXNJR0Z5Y21GNUtWeHVJQ0I5WEc0Z0lISmxkSFZ5YmlCMGFHRjBYRzU5WEc1Y2JtWjFibU4wYVc5dUlHWnliMjFQWW1wbFkzUWdLSFJvWVhRc0lHOWlhaWtnZTF4dUlDQnBaaUFvUW5WbVptVnlMbWx6UW5WbVptVnlLRzlpYWlrcElIdGNiaUFnSUNCMllYSWdiR1Z1SUQwZ1kyaGxZMnRsWkNodlltb3ViR1Z1WjNSb0tTQjhJREJjYmlBZ0lDQjBhR0YwSUQwZ1kzSmxZWFJsUW5WbVptVnlLSFJvWVhRc0lHeGxiaWxjYmx4dUlDQWdJR2xtSUNoMGFHRjBMbXhsYm1kMGFDQTlQVDBnTUNrZ2UxeHVJQ0FnSUNBZ2NtVjBkWEp1SUhSb1lYUmNiaUFnSUNCOVhHNWNiaUFnSUNCdlltb3VZMjl3ZVNoMGFHRjBMQ0F3TENBd0xDQnNaVzRwWEc0Z0lDQWdjbVYwZFhKdUlIUm9ZWFJjYmlBZ2ZWeHVYRzRnSUdsbUlDaHZZbW9wSUh0Y2JpQWdJQ0JwWmlBb0tIUjVjR1Z2WmlCQmNuSmhlVUoxWm1abGNpQWhQVDBnSjNWdVpHVm1hVzVsWkNjZ0ppWmNiaUFnSUNBZ0lDQWdiMkpxTG1KMVptWmxjaUJwYm5OMFlXNWpaVzltSUVGeWNtRjVRblZtWm1WeUtTQjhmQ0FuYkdWdVozUm9KeUJwYmlCdlltb3BJSHRjYmlBZ0lDQWdJR2xtSUNoMGVYQmxiMllnYjJKcUxteGxibWQwYUNBaFBUMGdKMjUxYldKbGNpY2dmSHdnYVhOdVlXNG9iMkpxTG14bGJtZDBhQ2twSUh0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUdOeVpXRjBaVUoxWm1abGNpaDBhR0YwTENBd0tWeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ2NtVjBkWEp1SUdaeWIyMUJjbkpoZVV4cGEyVW9kR2hoZEN3Z2IySnFLVnh1SUNBZ0lIMWNibHh1SUNBZ0lHbG1JQ2h2WW1vdWRIbHdaU0E5UFQwZ0owSjFabVpsY2ljZ0ppWWdhWE5CY25KaGVTaHZZbW91WkdGMFlTa3BJSHRjYmlBZ0lDQWdJSEpsZEhWeWJpQm1jbTl0UVhKeVlYbE1hV3RsS0hSb1lYUXNJRzlpYWk1a1lYUmhLVnh1SUNBZ0lIMWNiaUFnZlZ4dVhHNGdJSFJvY205M0lHNWxkeUJVZVhCbFJYSnliM0lvSjBacGNuTjBJR0Z5WjNWdFpXNTBJRzExYzNRZ1ltVWdZU0J6ZEhKcGJtY3NJRUoxWm1abGNpd2dRWEp5WVhsQ2RXWm1aWElzSUVGeWNtRjVMQ0J2Y2lCaGNuSmhlUzFzYVd0bElHOWlhbVZqZEM0bktWeHVmVnh1WEc1bWRXNWpkR2x2YmlCamFHVmphMlZrSUNoc1pXNW5kR2dwSUh0Y2JpQWdMeThnVG05MFpUb2dZMkZ1Ym05MElIVnpaU0JnYkdWdVozUm9JRHdnYTAxaGVFeGxibWQwYUNncFlDQm9aWEpsSUdKbFkyRjFjMlVnZEdoaGRDQm1ZV2xzY3lCM2FHVnVYRzRnSUM4dklHeGxibWQwYUNCcGN5Qk9ZVTRnS0hkb2FXTm9JR2x6SUc5MGFHVnlkMmx6WlNCamIyVnlZMlZrSUhSdklIcGxjbTh1S1Z4dUlDQnBaaUFvYkdWdVozUm9JRDQ5SUd0TllYaE1aVzVuZEdnb0tTa2dlMXh1SUNBZ0lIUm9jbTkzSUc1bGR5QlNZVzVuWlVWeWNtOXlLQ2RCZEhSbGJYQjBJSFJ2SUdGc2JHOWpZWFJsSUVKMVptWmxjaUJzWVhKblpYSWdkR2hoYmlCdFlYaHBiWFZ0SUNjZ0sxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDZHphWHBsT2lBd2VDY2dLeUJyVFdGNFRHVnVaM1JvS0NrdWRHOVRkSEpwYm1jb01UWXBJQ3NnSnlCaWVYUmxjeWNwWEc0Z0lIMWNiaUFnY21WMGRYSnVJR3hsYm1kMGFDQjhJREJjYm4xY2JseHVablZ1WTNScGIyNGdVMnh2ZDBKMVptWmxjaUFvYkdWdVozUm9LU0I3WEc0Z0lHbG1JQ2dyYkdWdVozUm9JQ0U5SUd4bGJtZDBhQ2tnZXlBdkx5QmxjMnhwYm5RdFpHbHpZV0pzWlMxc2FXNWxJR1Z4WlhGbGNWeHVJQ0FnSUd4bGJtZDBhQ0E5SURCY2JpQWdmVnh1SUNCeVpYUjFjbTRnUW5WbVptVnlMbUZzYkc5aktDdHNaVzVuZEdncFhHNTlYRzVjYmtKMVptWmxjaTVwYzBKMVptWmxjaUE5SUdaMWJtTjBhVzl1SUdselFuVm1abVZ5SUNoaUtTQjdYRzRnSUhKbGRIVnliaUFoSVNoaUlDRTlJRzUxYkd3Z0ppWWdZaTVmYVhOQ2RXWm1aWElwWEc1OVhHNWNia0oxWm1abGNpNWpiMjF3WVhKbElEMGdablZ1WTNScGIyNGdZMjl0Y0dGeVpTQW9ZU3dnWWlrZ2UxeHVJQ0JwWmlBb0lVSjFabVpsY2k1cGMwSjFabVpsY2loaEtTQjhmQ0FoUW5WbVptVnlMbWx6UW5WbVptVnlLR0lwS1NCN1hHNGdJQ0FnZEdoeWIzY2dibVYzSUZSNWNHVkZjbkp2Y2lnblFYSm5kVzFsYm5SeklHMTFjM1FnWW1VZ1FuVm1abVZ5Y3ljcFhHNGdJSDFjYmx4dUlDQnBaaUFvWVNBOVBUMGdZaWtnY21WMGRYSnVJREJjYmx4dUlDQjJZWElnZUNBOUlHRXViR1Z1WjNSb1hHNGdJSFpoY2lCNUlEMGdZaTVzWlc1bmRHaGNibHh1SUNCbWIzSWdLSFpoY2lCcElEMGdNQ3dnYkdWdUlEMGdUV0YwYUM1dGFXNG9lQ3dnZVNrN0lHa2dQQ0JzWlc0N0lDc3JhU2tnZTF4dUlDQWdJR2xtSUNoaFcybGRJQ0U5UFNCaVcybGRLU0I3WEc0Z0lDQWdJQ0I0SUQwZ1lWdHBYVnh1SUNBZ0lDQWdlU0E5SUdKYmFWMWNiaUFnSUNBZ0lHSnlaV0ZyWEc0Z0lDQWdmVnh1SUNCOVhHNWNiaUFnYVdZZ0tIZ2dQQ0I1S1NCeVpYUjFjbTRnTFRGY2JpQWdhV1lnS0hrZ1BDQjRLU0J5WlhSMWNtNGdNVnh1SUNCeVpYUjFjbTRnTUZ4dWZWeHVYRzVDZFdabVpYSXVhWE5GYm1OdlpHbHVaeUE5SUdaMWJtTjBhVzl1SUdselJXNWpiMlJwYm1jZ0tHVnVZMjlrYVc1bktTQjdYRzRnSUhOM2FYUmphQ0FvVTNSeWFXNW5LR1Z1WTI5a2FXNW5LUzUwYjB4dmQyVnlRMkZ6WlNncEtTQjdYRzRnSUNBZ1kyRnpaU0FuYUdWNEp6cGNiaUFnSUNCallYTmxJQ2QxZEdZNEp6cGNiaUFnSUNCallYTmxJQ2QxZEdZdE9DYzZYRzRnSUNBZ1kyRnpaU0FuWVhOamFXa25PbHh1SUNBZ0lHTmhjMlVnSjJ4aGRHbHVNU2M2WEc0Z0lDQWdZMkZ6WlNBblltbHVZWEo1SnpwY2JpQWdJQ0JqWVhObElDZGlZWE5sTmpRbk9seHVJQ0FnSUdOaGMyVWdKM1ZqY3pJbk9seHVJQ0FnSUdOaGMyVWdKM1ZqY3kweUp6cGNiaUFnSUNCallYTmxJQ2QxZEdZeE5teGxKenBjYmlBZ0lDQmpZWE5sSUNkMWRHWXRNVFpzWlNjNlhHNGdJQ0FnSUNCeVpYUjFjbTRnZEhKMVpWeHVJQ0FnSUdSbFptRjFiSFE2WEc0Z0lDQWdJQ0J5WlhSMWNtNGdabUZzYzJWY2JpQWdmVnh1ZlZ4dVhHNUNkV1ptWlhJdVkyOXVZMkYwSUQwZ1puVnVZM1JwYjI0Z1kyOXVZMkYwSUNoc2FYTjBMQ0JzWlc1bmRHZ3BJSHRjYmlBZ2FXWWdLQ0ZwYzBGeWNtRjVLR3hwYzNRcEtTQjdYRzRnSUNBZ2RHaHliM2NnYm1WM0lGUjVjR1ZGY25KdmNpZ25YQ0pzYVhOMFhDSWdZWEpuZFcxbGJuUWdiWFZ6ZENCaVpTQmhiaUJCY25KaGVTQnZaaUJDZFdabVpYSnpKeWxjYmlBZ2ZWeHVYRzRnSUdsbUlDaHNhWE4wTG14bGJtZDBhQ0E5UFQwZ01Da2dlMXh1SUNBZ0lISmxkSFZ5YmlCQ2RXWm1aWEl1WVd4c2IyTW9NQ2xjYmlBZ2ZWeHVYRzRnSUhaaGNpQnBYRzRnSUdsbUlDaHNaVzVuZEdnZ1BUMDlJSFZ1WkdWbWFXNWxaQ2tnZTF4dUlDQWdJR3hsYm1kMGFDQTlJREJjYmlBZ0lDQm1iM0lnS0drZ1BTQXdPeUJwSUR3Z2JHbHpkQzVzWlc1bmRHZzdJQ3NyYVNrZ2UxeHVJQ0FnSUNBZ2JHVnVaM1JvSUNzOUlHeHBjM1JiYVYwdWJHVnVaM1JvWEc0Z0lDQWdmVnh1SUNCOVhHNWNiaUFnZG1GeUlHSjFabVpsY2lBOUlFSjFabVpsY2k1aGJHeHZZMVZ1YzJGbVpTaHNaVzVuZEdncFhHNGdJSFpoY2lCd2IzTWdQU0F3WEc0Z0lHWnZjaUFvYVNBOUlEQTdJR2tnUENCc2FYTjBMbXhsYm1kMGFEc2dLeXRwS1NCN1hHNGdJQ0FnZG1GeUlHSjFaaUE5SUd4cGMzUmJhVjFjYmlBZ0lDQnBaaUFvSVVKMVptWmxjaTVwYzBKMVptWmxjaWhpZFdZcEtTQjdYRzRnSUNBZ0lDQjBhSEp2ZHlCdVpYY2dWSGx3WlVWeWNtOXlLQ2RjSW14cGMzUmNJaUJoY21kMWJXVnVkQ0J0ZFhOMElHSmxJR0Z1SUVGeWNtRjVJRzltSUVKMVptWmxjbk1uS1Z4dUlDQWdJSDFjYmlBZ0lDQmlkV1l1WTI5d2VTaGlkV1ptWlhJc0lIQnZjeWxjYmlBZ0lDQndiM01nS3owZ1luVm1MbXhsYm1kMGFGeHVJQ0I5WEc0Z0lISmxkSFZ5YmlCaWRXWm1aWEpjYm4xY2JseHVablZ1WTNScGIyNGdZbmwwWlV4bGJtZDBhQ0FvYzNSeWFXNW5MQ0JsYm1OdlpHbHVaeWtnZTF4dUlDQnBaaUFvUW5WbVptVnlMbWx6UW5WbVptVnlLSE4wY21sdVp5a3BJSHRjYmlBZ0lDQnlaWFIxY200Z2MzUnlhVzVuTG14bGJtZDBhRnh1SUNCOVhHNGdJR2xtSUNoMGVYQmxiMllnUVhKeVlYbENkV1ptWlhJZ0lUMDlJQ2QxYm1SbFptbHVaV1FuSUNZbUlIUjVjR1Z2WmlCQmNuSmhlVUoxWm1abGNpNXBjMVpwWlhjZ1BUMDlJQ2RtZFc1amRHbHZiaWNnSmlaY2JpQWdJQ0FnSUNoQmNuSmhlVUoxWm1abGNpNXBjMVpwWlhjb2MzUnlhVzVuS1NCOGZDQnpkSEpwYm1jZ2FXNXpkR0Z1WTJWdlppQkJjbkpoZVVKMVptWmxjaWtwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdjM1J5YVc1bkxtSjVkR1ZNWlc1bmRHaGNiaUFnZlZ4dUlDQnBaaUFvZEhsd1pXOW1JSE4wY21sdVp5QWhQVDBnSjNOMGNtbHVaeWNwSUh0Y2JpQWdJQ0J6ZEhKcGJtY2dQU0FuSnlBcklITjBjbWx1WjF4dUlDQjlYRzVjYmlBZ2RtRnlJR3hsYmlBOUlITjBjbWx1Wnk1c1pXNW5kR2hjYmlBZ2FXWWdLR3hsYmlBOVBUMGdNQ2tnY21WMGRYSnVJREJjYmx4dUlDQXZMeUJWYzJVZ1lTQm1iM0lnYkc5dmNDQjBieUJoZG05cFpDQnlaV04xY25OcGIyNWNiaUFnZG1GeUlHeHZkMlZ5WldSRFlYTmxJRDBnWm1Gc2MyVmNiaUFnWm05eUlDZzdPeWtnZTF4dUlDQWdJSE4zYVhSamFDQW9aVzVqYjJScGJtY3BJSHRjYmlBZ0lDQWdJR05oYzJVZ0oyRnpZMmxwSnpwY2JpQWdJQ0FnSUdOaGMyVWdKMnhoZEdsdU1TYzZYRzRnSUNBZ0lDQmpZWE5sSUNkaWFXNWhjbmtuT2x4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnYkdWdVhHNGdJQ0FnSUNCallYTmxJQ2QxZEdZNEp6cGNiaUFnSUNBZ0lHTmhjMlVnSjNWMFppMDRKenBjYmlBZ0lDQWdJR05oYzJVZ2RXNWtaV1pwYm1Wa09seHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2RYUm1PRlJ2UW5sMFpYTW9jM1J5YVc1bktTNXNaVzVuZEdoY2JpQWdJQ0FnSUdOaGMyVWdKM1ZqY3pJbk9seHVJQ0FnSUNBZ1kyRnpaU0FuZFdOekxUSW5PbHh1SUNBZ0lDQWdZMkZ6WlNBbmRYUm1NVFpzWlNjNlhHNGdJQ0FnSUNCallYTmxJQ2QxZEdZdE1UWnNaU2M2WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJzWlc0Z0tpQXlYRzRnSUNBZ0lDQmpZWE5sSUNkb1pYZ25PbHh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdiR1Z1SUQ0K1BpQXhYRzRnSUNBZ0lDQmpZWE5sSUNkaVlYTmxOalFuT2x4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnWW1GelpUWTBWRzlDZVhSbGN5aHpkSEpwYm1jcExteGxibWQwYUZ4dUlDQWdJQ0FnWkdWbVlYVnNkRHBjYmlBZ0lDQWdJQ0FnYVdZZ0tHeHZkMlZ5WldSRFlYTmxLU0J5WlhSMWNtNGdkWFJtT0ZSdlFubDBaWE1vYzNSeWFXNW5LUzVzWlc1bmRHZ2dMeThnWVhOemRXMWxJSFYwWmpoY2JpQWdJQ0FnSUNBZ1pXNWpiMlJwYm1jZ1BTQW9KeWNnS3lCbGJtTnZaR2x1WnlrdWRHOU1iM2RsY2tOaGMyVW9LVnh1SUNBZ0lDQWdJQ0JzYjNkbGNtVmtRMkZ6WlNBOUlIUnlkV1ZjYmlBZ0lDQjlYRzRnSUgxY2JuMWNia0oxWm1abGNpNWllWFJsVEdWdVozUm9JRDBnWW5sMFpVeGxibWQwYUZ4dVhHNW1kVzVqZEdsdmJpQnpiRzkzVkc5VGRISnBibWNnS0dWdVkyOWthVzVuTENCemRHRnlkQ3dnWlc1a0tTQjdYRzRnSUhaaGNpQnNiM2RsY21Wa1EyRnpaU0E5SUdaaGJITmxYRzVjYmlBZ0x5OGdUbThnYm1WbFpDQjBieUIyWlhKcFpua2dkR2hoZENCY0luUm9hWE11YkdWdVozUm9JRHc5SUUxQldGOVZTVTVVTXpKY0lpQnphVzVqWlNCcGRDZHpJR0VnY21WaFpDMXZibXg1WEc0Z0lDOHZJSEJ5YjNCbGNuUjVJRzltSUdFZ2RIbHdaV1FnWVhKeVlYa3VYRzVjYmlBZ0x5OGdWR2hwY3lCaVpXaGhkbVZ6SUc1bGFYUm9aWElnYkdsclpTQlRkSEpwYm1jZ2JtOXlJRlZwYm5RNFFYSnlZWGtnYVc0Z2RHaGhkQ0IzWlNCelpYUWdjM1JoY25RdlpXNWtYRzRnSUM4dklIUnZJSFJvWldseUlIVndjR1Z5TDJ4dmQyVnlJR0p2ZFc1a2N5QnBaaUIwYUdVZ2RtRnNkV1VnY0dGemMyVmtJR2x6SUc5MWRDQnZaaUJ5WVc1blpTNWNiaUFnTHk4Z2RXNWtaV1pwYm1Wa0lHbHpJR2hoYm1Sc1pXUWdjM0JsWTJsaGJHeDVJR0Z6SUhCbGNpQkZRMDFCTFRJMk1pQTJkR2dnUldScGRHbHZiaXhjYmlBZ0x5OGdVMlZqZEdsdmJpQXhNeTR6TGpNdU55QlNkVzUwYVcxbElGTmxiV0Z1ZEdsamN6b2dTMlY1WldSQ2FXNWthVzVuU1c1cGRHbGhiR2w2WVhScGIyNHVYRzRnSUdsbUlDaHpkR0Z5ZENBOVBUMGdkVzVrWldacGJtVmtJSHg4SUhOMFlYSjBJRHdnTUNrZ2UxeHVJQ0FnSUhOMFlYSjBJRDBnTUZ4dUlDQjlYRzRnSUM4dklGSmxkSFZ5YmlCbFlYSnNlU0JwWmlCemRHRnlkQ0ErSUhSb2FYTXViR1Z1WjNSb0xpQkViMjVsSUdobGNtVWdkRzhnY0hKbGRtVnVkQ0J3YjNSbGJuUnBZV3dnZFdsdWRETXlYRzRnSUM4dklHTnZaWEpqYVc5dUlHWmhhV3dnWW1Wc2IzY3VYRzRnSUdsbUlDaHpkR0Z5ZENBK0lIUm9hWE11YkdWdVozUm9LU0I3WEc0Z0lDQWdjbVYwZFhKdUlDY25YRzRnSUgxY2JseHVJQ0JwWmlBb1pXNWtJRDA5UFNCMWJtUmxabWx1WldRZ2ZId2daVzVrSUQ0Z2RHaHBjeTVzWlc1bmRHZ3BJSHRjYmlBZ0lDQmxibVFnUFNCMGFHbHpMbXhsYm1kMGFGeHVJQ0I5WEc1Y2JpQWdhV1lnS0dWdVpDQThQU0F3S1NCN1hHNGdJQ0FnY21WMGRYSnVJQ2NuWEc0Z0lIMWNibHh1SUNBdkx5QkdiM0pqWlNCamIyVnljMmx2YmlCMGJ5QjFhVzUwTXpJdUlGUm9hWE1nZDJsc2JDQmhiSE52SUdOdlpYSmpaU0JtWVd4elpYa3ZUbUZPSUhaaGJIVmxjeUIwYnlBd0xseHVJQ0JsYm1RZ1BqNCtQU0F3WEc0Z0lITjBZWEowSUQ0K1BqMGdNRnh1WEc0Z0lHbG1JQ2hsYm1RZ1BEMGdjM1JoY25RcElIdGNiaUFnSUNCeVpYUjFjbTRnSnlkY2JpQWdmVnh1WEc0Z0lHbG1JQ2doWlc1amIyUnBibWNwSUdWdVkyOWthVzVuSUQwZ0ozVjBaamduWEc1Y2JpQWdkMmhwYkdVZ0tIUnlkV1VwSUh0Y2JpQWdJQ0J6ZDJsMFkyZ2dLR1Z1WTI5a2FXNW5LU0I3WEc0Z0lDQWdJQ0JqWVhObElDZG9aWGduT2x4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnYUdWNFUyeHBZMlVvZEdocGN5d2djM1JoY25Rc0lHVnVaQ2xjYmx4dUlDQWdJQ0FnWTJGelpTQW5kWFJtT0NjNlhHNGdJQ0FnSUNCallYTmxJQ2QxZEdZdE9DYzZYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQjFkR1k0VTJ4cFkyVW9kR2hwY3l3Z2MzUmhjblFzSUdWdVpDbGNibHh1SUNBZ0lDQWdZMkZ6WlNBbllYTmphV2tuT2x4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnWVhOamFXbFRiR2xqWlNoMGFHbHpMQ0J6ZEdGeWRDd2daVzVrS1Z4dVhHNGdJQ0FnSUNCallYTmxJQ2RzWVhScGJqRW5PbHh1SUNBZ0lDQWdZMkZ6WlNBblltbHVZWEo1SnpwY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUd4aGRHbHVNVk5zYVdObEtIUm9hWE1zSUhOMFlYSjBMQ0JsYm1RcFhHNWNiaUFnSUNBZ0lHTmhjMlVnSjJKaGMyVTJOQ2M2WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJpWVhObE5qUlRiR2xqWlNoMGFHbHpMQ0J6ZEdGeWRDd2daVzVrS1Z4dVhHNGdJQ0FnSUNCallYTmxJQ2QxWTNNeUp6cGNiaUFnSUNBZ0lHTmhjMlVnSjNWamN5MHlKenBjYmlBZ0lDQWdJR05oYzJVZ0ozVjBaakUyYkdVbk9seHVJQ0FnSUNBZ1kyRnpaU0FuZFhSbUxURTJiR1VuT2x4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnZFhSbU1UWnNaVk5zYVdObEtIUm9hWE1zSUhOMFlYSjBMQ0JsYm1RcFhHNWNiaUFnSUNBZ0lHUmxabUYxYkhRNlhHNGdJQ0FnSUNBZ0lHbG1JQ2hzYjNkbGNtVmtRMkZ6WlNrZ2RHaHliM2NnYm1WM0lGUjVjR1ZGY25KdmNpZ25WVzVyYm05M2JpQmxibU52WkdsdVp6b2dKeUFySUdWdVkyOWthVzVuS1Z4dUlDQWdJQ0FnSUNCbGJtTnZaR2x1WnlBOUlDaGxibU52WkdsdVp5QXJJQ2NuS1M1MGIweHZkMlZ5UTJGelpTZ3BYRzRnSUNBZ0lDQWdJR3h2ZDJWeVpXUkRZWE5sSUQwZ2RISjFaVnh1SUNBZ0lIMWNiaUFnZlZ4dWZWeHVYRzR2THlCVWFHVWdjSEp2Y0dWeWRIa2dhWE1nZFhObFpDQmllU0JnUW5WbVptVnlMbWx6UW5WbVptVnlZQ0JoYm1RZ1lHbHpMV0oxWm1abGNtQWdLR2x1SUZOaFptRnlhU0ExTFRjcElIUnZJR1JsZEdWamRGeHVMeThnUW5WbVptVnlJR2x1YzNSaGJtTmxjeTVjYmtKMVptWmxjaTV3Y205MGIzUjVjR1V1WDJselFuVm1abVZ5SUQwZ2RISjFaVnh1WEc1bWRXNWpkR2x2YmlCemQyRndJQ2hpTENCdUxDQnRLU0I3WEc0Z0lIWmhjaUJwSUQwZ1lsdHVYVnh1SUNCaVcyNWRJRDBnWWx0dFhWeHVJQ0JpVzIxZElEMGdhVnh1ZlZ4dVhHNUNkV1ptWlhJdWNISnZkRzkwZVhCbExuTjNZWEF4TmlBOUlHWjFibU4wYVc5dUlITjNZWEF4TmlBb0tTQjdYRzRnSUhaaGNpQnNaVzRnUFNCMGFHbHpMbXhsYm1kMGFGeHVJQ0JwWmlBb2JHVnVJQ1VnTWlBaFBUMGdNQ2tnZTF4dUlDQWdJSFJvY205M0lHNWxkeUJTWVc1blpVVnljbTl5S0NkQ2RXWm1aWElnYzJsNlpTQnRkWE4wSUdKbElHRWdiWFZzZEdsd2JHVWdiMllnTVRZdFltbDBjeWNwWEc0Z0lIMWNiaUFnWm05eUlDaDJZWElnYVNBOUlEQTdJR2tnUENCc1pXNDdJR2tnS3owZ01pa2dlMXh1SUNBZ0lITjNZWEFvZEdocGN5d2dhU3dnYVNBcklERXBYRzRnSUgxY2JpQWdjbVYwZFhKdUlIUm9hWE5jYm4xY2JseHVRblZtWm1WeUxuQnliM1J2ZEhsd1pTNXpkMkZ3TXpJZ1BTQm1kVzVqZEdsdmJpQnpkMkZ3TXpJZ0tDa2dlMXh1SUNCMllYSWdiR1Z1SUQwZ2RHaHBjeTVzWlc1bmRHaGNiaUFnYVdZZ0tHeGxiaUFsSURRZ0lUMDlJREFwSUh0Y2JpQWdJQ0IwYUhKdmR5QnVaWGNnVW1GdVoyVkZjbkp2Y2lnblFuVm1abVZ5SUhOcGVtVWdiWFZ6ZENCaVpTQmhJRzExYkhScGNHeGxJRzltSURNeUxXSnBkSE1uS1Z4dUlDQjlYRzRnSUdadmNpQW9kbUZ5SUdrZ1BTQXdPeUJwSUR3Z2JHVnVPeUJwSUNzOUlEUXBJSHRjYmlBZ0lDQnpkMkZ3S0hSb2FYTXNJR2tzSUdrZ0t5QXpLVnh1SUNBZ0lITjNZWEFvZEdocGN5d2dhU0FySURFc0lHa2dLeUF5S1Z4dUlDQjlYRzRnSUhKbGRIVnliaUIwYUdselhHNTlYRzVjYmtKMVptWmxjaTV3Y205MGIzUjVjR1V1YzNkaGNEWTBJRDBnWm5WdVkzUnBiMjRnYzNkaGNEWTBJQ2dwSUh0Y2JpQWdkbUZ5SUd4bGJpQTlJSFJvYVhNdWJHVnVaM1JvWEc0Z0lHbG1JQ2hzWlc0Z0pTQTRJQ0U5UFNBd0tTQjdYRzRnSUNBZ2RHaHliM2NnYm1WM0lGSmhibWRsUlhKeWIzSW9KMEoxWm1abGNpQnphWHBsSUcxMWMzUWdZbVVnWVNCdGRXeDBhWEJzWlNCdlppQTJOQzFpYVhSekp5bGNiaUFnZlZ4dUlDQm1iM0lnS0haaGNpQnBJRDBnTURzZ2FTQThJR3hsYmpzZ2FTQXJQU0E0S1NCN1hHNGdJQ0FnYzNkaGNDaDBhR2x6TENCcExDQnBJQ3NnTnlsY2JpQWdJQ0J6ZDJGd0tIUm9hWE1zSUdrZ0t5QXhMQ0JwSUNzZ05pbGNiaUFnSUNCemQyRndLSFJvYVhNc0lHa2dLeUF5TENCcElDc2dOU2xjYmlBZ0lDQnpkMkZ3S0hSb2FYTXNJR2tnS3lBekxDQnBJQ3NnTkNsY2JpQWdmVnh1SUNCeVpYUjFjbTRnZEdocGMxeHVmVnh1WEc1Q2RXWm1aWEl1Y0hKdmRHOTBlWEJsTG5SdlUzUnlhVzVuSUQwZ1puVnVZM1JwYjI0Z2RHOVRkSEpwYm1jZ0tDa2dlMXh1SUNCMllYSWdiR1Z1WjNSb0lEMGdkR2hwY3k1c1pXNW5kR2dnZkNBd1hHNGdJR2xtSUNoc1pXNW5kR2dnUFQwOUlEQXBJSEpsZEhWeWJpQW5KMXh1SUNCcFppQW9ZWEpuZFcxbGJuUnpMbXhsYm1kMGFDQTlQVDBnTUNrZ2NtVjBkWEp1SUhWMFpqaFRiR2xqWlNoMGFHbHpMQ0F3TENCc1pXNW5kR2dwWEc0Z0lISmxkSFZ5YmlCemJHOTNWRzlUZEhKcGJtY3VZWEJ3Ykhrb2RHaHBjeXdnWVhKbmRXMWxiblJ6S1Z4dWZWeHVYRzVDZFdabVpYSXVjSEp2ZEc5MGVYQmxMbVZ4ZFdGc2N5QTlJR1oxYm1OMGFXOXVJR1Z4ZFdGc2N5QW9ZaWtnZTF4dUlDQnBaaUFvSVVKMVptWmxjaTVwYzBKMVptWmxjaWhpS1NrZ2RHaHliM2NnYm1WM0lGUjVjR1ZGY25KdmNpZ25RWEpuZFcxbGJuUWdiWFZ6ZENCaVpTQmhJRUoxWm1abGNpY3BYRzRnSUdsbUlDaDBhR2x6SUQwOVBTQmlLU0J5WlhSMWNtNGdkSEoxWlZ4dUlDQnlaWFIxY200Z1FuVm1abVZ5TG1OdmJYQmhjbVVvZEdocGN5d2dZaWtnUFQwOUlEQmNibjFjYmx4dVFuVm1abVZ5TG5CeWIzUnZkSGx3WlM1cGJuTndaV04wSUQwZ1puVnVZM1JwYjI0Z2FXNXpjR1ZqZENBb0tTQjdYRzRnSUhaaGNpQnpkSElnUFNBbkoxeHVJQ0IyWVhJZ2JXRjRJRDBnWlhod2IzSjBjeTVKVGxOUVJVTlVYMDFCV0Y5Q1dWUkZVMXh1SUNCcFppQW9kR2hwY3k1c1pXNW5kR2dnUGlBd0tTQjdYRzRnSUNBZ2MzUnlJRDBnZEdocGN5NTBiMU4wY21sdVp5Z25hR1Y0Snl3Z01Dd2diV0Y0S1M1dFlYUmphQ2d2TG5zeWZTOW5LUzVxYjJsdUtDY2dKeWxjYmlBZ0lDQnBaaUFvZEdocGN5NXNaVzVuZEdnZ1BpQnRZWGdwSUhOMGNpQXJQU0FuSUM0dUxpQW5YRzRnSUgxY2JpQWdjbVYwZFhKdUlDYzhRblZtWm1WeUlDY2dLeUJ6ZEhJZ0t5QW5QaWRjYm4xY2JseHVRblZtWm1WeUxuQnliM1J2ZEhsd1pTNWpiMjF3WVhKbElEMGdablZ1WTNScGIyNGdZMjl0Y0dGeVpTQW9kR0Z5WjJWMExDQnpkR0Z5ZEN3Z1pXNWtMQ0IwYUdselUzUmhjblFzSUhSb2FYTkZibVFwSUh0Y2JpQWdhV1lnS0NGQ2RXWm1aWEl1YVhOQ2RXWm1aWElvZEdGeVoyVjBLU2tnZTF4dUlDQWdJSFJvY205M0lHNWxkeUJVZVhCbFJYSnliM0lvSjBGeVozVnRaVzUwSUcxMWMzUWdZbVVnWVNCQ2RXWm1aWEluS1Z4dUlDQjlYRzVjYmlBZ2FXWWdLSE4wWVhKMElEMDlQU0IxYm1SbFptbHVaV1FwSUh0Y2JpQWdJQ0J6ZEdGeWRDQTlJREJjYmlBZ2ZWeHVJQ0JwWmlBb1pXNWtJRDA5UFNCMWJtUmxabWx1WldRcElIdGNiaUFnSUNCbGJtUWdQU0IwWVhKblpYUWdQeUIwWVhKblpYUXViR1Z1WjNSb0lEb2dNRnh1SUNCOVhHNGdJR2xtSUNoMGFHbHpVM1JoY25RZ1BUMDlJSFZ1WkdWbWFXNWxaQ2tnZTF4dUlDQWdJSFJvYVhOVGRHRnlkQ0E5SURCY2JpQWdmVnh1SUNCcFppQW9kR2hwYzBWdVpDQTlQVDBnZFc1a1pXWnBibVZrS1NCN1hHNGdJQ0FnZEdocGMwVnVaQ0E5SUhSb2FYTXViR1Z1WjNSb1hHNGdJSDFjYmx4dUlDQnBaaUFvYzNSaGNuUWdQQ0F3SUh4OElHVnVaQ0ErSUhSaGNtZGxkQzVzWlc1bmRHZ2dmSHdnZEdocGMxTjBZWEowSUR3Z01DQjhmQ0IwYUdselJXNWtJRDRnZEdocGN5NXNaVzVuZEdncElIdGNiaUFnSUNCMGFISnZkeUJ1WlhjZ1VtRnVaMlZGY25KdmNpZ25iM1YwSUc5bUlISmhibWRsSUdsdVpHVjRKeWxjYmlBZ2ZWeHVYRzRnSUdsbUlDaDBhR2x6VTNSaGNuUWdQajBnZEdocGMwVnVaQ0FtSmlCemRHRnlkQ0ErUFNCbGJtUXBJSHRjYmlBZ0lDQnlaWFIxY200Z01GeHVJQ0I5WEc0Z0lHbG1JQ2gwYUdselUzUmhjblFnUGowZ2RHaHBjMFZ1WkNrZ2UxeHVJQ0FnSUhKbGRIVnliaUF0TVZ4dUlDQjlYRzRnSUdsbUlDaHpkR0Z5ZENBK1BTQmxibVFwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdNVnh1SUNCOVhHNWNiaUFnYzNSaGNuUWdQajQrUFNBd1hHNGdJR1Z1WkNBK1BqNDlJREJjYmlBZ2RHaHBjMU4wWVhKMElENCtQajBnTUZ4dUlDQjBhR2x6Ulc1a0lENCtQajBnTUZ4dVhHNGdJR2xtSUNoMGFHbHpJRDA5UFNCMFlYSm5aWFFwSUhKbGRIVnliaUF3WEc1Y2JpQWdkbUZ5SUhnZ1BTQjBhR2x6Ulc1a0lDMGdkR2hwYzFOMFlYSjBYRzRnSUhaaGNpQjVJRDBnWlc1a0lDMGdjM1JoY25SY2JpQWdkbUZ5SUd4bGJpQTlJRTFoZEdndWJXbHVLSGdzSUhrcFhHNWNiaUFnZG1GeUlIUm9hWE5EYjNCNUlEMGdkR2hwY3k1emJHbGpaU2gwYUdselUzUmhjblFzSUhSb2FYTkZibVFwWEc0Z0lIWmhjaUIwWVhKblpYUkRiM0I1SUQwZ2RHRnlaMlYwTG5Oc2FXTmxLSE4wWVhKMExDQmxibVFwWEc1Y2JpQWdabTl5SUNoMllYSWdhU0E5SURBN0lHa2dQQ0JzWlc0N0lDc3JhU2tnZTF4dUlDQWdJR2xtSUNoMGFHbHpRMjl3ZVZ0cFhTQWhQVDBnZEdGeVoyVjBRMjl3ZVZ0cFhTa2dlMXh1SUNBZ0lDQWdlQ0E5SUhSb2FYTkRiM0I1VzJsZFhHNGdJQ0FnSUNCNUlEMGdkR0Z5WjJWMFEyOXdlVnRwWFZ4dUlDQWdJQ0FnWW5KbFlXdGNiaUFnSUNCOVhHNGdJSDFjYmx4dUlDQnBaaUFvZUNBOElIa3BJSEpsZEhWeWJpQXRNVnh1SUNCcFppQW9lU0E4SUhncElISmxkSFZ5YmlBeFhHNGdJSEpsZEhWeWJpQXdYRzU5WEc1Y2JpOHZJRVpwYm1SeklHVnBkR2hsY2lCMGFHVWdabWx5YzNRZ2FXNWtaWGdnYjJZZ1lIWmhiR0FnYVc0Z1lHSjFabVpsY21BZ1lYUWdiMlptYzJWMElENDlJR0JpZVhSbFQyWm1jMlYwWUN4Y2JpOHZJRTlTSUhSb1pTQnNZWE4wSUdsdVpHVjRJRzltSUdCMllXeGdJR2x1SUdCaWRXWm1aWEpnSUdGMElHOW1abk5sZENBOFBTQmdZbmwwWlU5bVpuTmxkR0F1WEc0dkwxeHVMeThnUVhKbmRXMWxiblJ6T2x4dUx5OGdMU0JpZFdabVpYSWdMU0JoSUVKMVptWmxjaUIwYnlCelpXRnlZMmhjYmk4dklDMGdkbUZzSUMwZ1lTQnpkSEpwYm1jc0lFSjFabVpsY2l3Z2IzSWdiblZ0WW1WeVhHNHZMeUF0SUdKNWRHVlBabVp6WlhRZ0xTQmhiaUJwYm1SbGVDQnBiblJ2SUdCaWRXWm1aWEpnT3lCM2FXeHNJR0psSUdOc1lXMXdaV1FnZEc4Z1lXNGdhVzUwTXpKY2JpOHZJQzBnWlc1amIyUnBibWNnTFNCaGJpQnZjSFJwYjI1aGJDQmxibU52WkdsdVp5d2djbVZzWlhaaGJuUWdhWE1nZG1Gc0lHbHpJR0VnYzNSeWFXNW5YRzR2THlBdElHUnBjaUF0SUhSeWRXVWdabTl5SUdsdVpHVjRUMllzSUdaaGJITmxJR1p2Y2lCc1lYTjBTVzVrWlhoUFpseHVablZ1WTNScGIyNGdZbWxrYVhKbFkzUnBiMjVoYkVsdVpHVjRUMllnS0dKMVptWmxjaXdnZG1Gc0xDQmllWFJsVDJabWMyVjBMQ0JsYm1OdlpHbHVaeXdnWkdseUtTQjdYRzRnSUM4dklFVnRjSFI1SUdKMVptWmxjaUJ0WldGdWN5QnVieUJ0WVhSamFGeHVJQ0JwWmlBb1luVm1abVZ5TG14bGJtZDBhQ0E5UFQwZ01Da2djbVYwZFhKdUlDMHhYRzVjYmlBZ0x5OGdUbTl5YldGc2FYcGxJR0o1ZEdWUFptWnpaWFJjYmlBZ2FXWWdLSFI1Y0dWdlppQmllWFJsVDJabWMyVjBJRDA5UFNBbmMzUnlhVzVuSnlrZ2UxeHVJQ0FnSUdWdVkyOWthVzVuSUQwZ1lubDBaVTltWm5ObGRGeHVJQ0FnSUdKNWRHVlBabVp6WlhRZ1BTQXdYRzRnSUgwZ1pXeHpaU0JwWmlBb1lubDBaVTltWm5ObGRDQStJREI0TjJabVptWm1abVlwSUh0Y2JpQWdJQ0JpZVhSbFQyWm1jMlYwSUQwZ01IZzNabVptWm1abVpseHVJQ0I5SUdWc2MyVWdhV1lnS0dKNWRHVlBabVp6WlhRZ1BDQXRNSGc0TURBd01EQXdNQ2tnZTF4dUlDQWdJR0o1ZEdWUFptWnpaWFFnUFNBdE1IZzRNREF3TURBd01GeHVJQ0I5WEc0Z0lHSjVkR1ZQWm1aelpYUWdQU0FyWW5sMFpVOW1abk5sZENBZ0x5OGdRMjlsY21ObElIUnZJRTUxYldKbGNpNWNiaUFnYVdZZ0tHbHpUbUZPS0dKNWRHVlBabVp6WlhRcEtTQjdYRzRnSUNBZ0x5OGdZbmwwWlU5bVpuTmxkRG9nYVhRZ2FYUW5jeUIxYm1SbFptbHVaV1FzSUc1MWJHd3NJRTVoVGl3Z1hDSm1iMjljSWl3Z1pYUmpMQ0J6WldGeVkyZ2dkMmh2YkdVZ1luVm1abVZ5WEc0Z0lDQWdZbmwwWlU5bVpuTmxkQ0E5SUdScGNpQS9JREFnT2lBb1luVm1abVZ5TG14bGJtZDBhQ0F0SURFcFhHNGdJSDFjYmx4dUlDQXZMeUJPYjNKdFlXeHBlbVVnWW5sMFpVOW1abk5sZERvZ2JtVm5ZWFJwZG1VZ2IyWm1jMlYwY3lCemRHRnlkQ0JtY205dElIUm9aU0JsYm1RZ2IyWWdkR2hsSUdKMVptWmxjbHh1SUNCcFppQW9ZbmwwWlU5bVpuTmxkQ0E4SURBcElHSjVkR1ZQWm1aelpYUWdQU0JpZFdabVpYSXViR1Z1WjNSb0lDc2dZbmwwWlU5bVpuTmxkRnh1SUNCcFppQW9ZbmwwWlU5bVpuTmxkQ0ErUFNCaWRXWm1aWEl1YkdWdVozUm9LU0I3WEc0Z0lDQWdhV1lnS0dScGNpa2djbVYwZFhKdUlDMHhYRzRnSUNBZ1pXeHpaU0JpZVhSbFQyWm1jMlYwSUQwZ1luVm1abVZ5TG14bGJtZDBhQ0F0SURGY2JpQWdmU0JsYkhObElHbG1JQ2hpZVhSbFQyWm1jMlYwSUR3Z01Da2dlMXh1SUNBZ0lHbG1JQ2hrYVhJcElHSjVkR1ZQWm1aelpYUWdQU0F3WEc0Z0lDQWdaV3h6WlNCeVpYUjFjbTRnTFRGY2JpQWdmVnh1WEc0Z0lDOHZJRTV2Y20xaGJHbDZaU0IyWVd4Y2JpQWdhV1lnS0hSNWNHVnZaaUIyWVd3Z1BUMDlJQ2R6ZEhKcGJtY25LU0I3WEc0Z0lDQWdkbUZzSUQwZ1FuVm1abVZ5TG1aeWIyMG9kbUZzTENCbGJtTnZaR2x1WnlsY2JpQWdmVnh1WEc0Z0lDOHZJRVpwYm1Gc2JIa3NJSE5sWVhKamFDQmxhWFJvWlhJZ2FXNWtaWGhQWmlBb2FXWWdaR2x5SUdseklIUnlkV1VwSUc5eUlHeGhjM1JKYm1SbGVFOW1YRzRnSUdsbUlDaENkV1ptWlhJdWFYTkNkV1ptWlhJb2RtRnNLU2tnZTF4dUlDQWdJQzh2SUZOd1pXTnBZV3dnWTJGelpUb2diRzl2YTJsdVp5Qm1iM0lnWlcxd2RIa2djM1J5YVc1bkwySjFabVpsY2lCaGJIZGhlWE1nWm1GcGJITmNiaUFnSUNCcFppQW9kbUZzTG14bGJtZDBhQ0E5UFQwZ01Da2dlMXh1SUNBZ0lDQWdjbVYwZFhKdUlDMHhYRzRnSUNBZ2ZWeHVJQ0FnSUhKbGRIVnliaUJoY25KaGVVbHVaR1Y0VDJZb1luVm1abVZ5TENCMllXd3NJR0o1ZEdWUFptWnpaWFFzSUdWdVkyOWthVzVuTENCa2FYSXBYRzRnSUgwZ1pXeHpaU0JwWmlBb2RIbHdaVzltSUhaaGJDQTlQVDBnSjI1MWJXSmxjaWNwSUh0Y2JpQWdJQ0IyWVd3Z1BTQjJZV3dnSmlBd2VFWkdJQzh2SUZObFlYSmphQ0JtYjNJZ1lTQmllWFJsSUhaaGJIVmxJRnN3TFRJMU5WMWNiaUFnSUNCcFppQW9RblZtWm1WeUxsUlpVRVZFWDBGU1VrRlpYMU5WVUZCUFVsUWdKaVpjYmlBZ0lDQWdJQ0FnZEhsd1pXOW1JRlZwYm5RNFFYSnlZWGt1Y0hKdmRHOTBlWEJsTG1sdVpHVjRUMllnUFQwOUlDZG1kVzVqZEdsdmJpY3BJSHRjYmlBZ0lDQWdJR2xtSUNoa2FYSXBJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJRlZwYm5RNFFYSnlZWGt1Y0hKdmRHOTBlWEJsTG1sdVpHVjRUMll1WTJGc2JDaGlkV1ptWlhJc0lIWmhiQ3dnWW5sMFpVOW1abk5sZENsY2JpQWdJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJWYVc1ME9FRnljbUY1TG5CeWIzUnZkSGx3WlM1c1lYTjBTVzVrWlhoUFppNWpZV3hzS0dKMVptWmxjaXdnZG1Gc0xDQmllWFJsVDJabWMyVjBLVnh1SUNBZ0lDQWdmVnh1SUNBZ0lIMWNiaUFnSUNCeVpYUjFjbTRnWVhKeVlYbEpibVJsZUU5bUtHSjFabVpsY2l3Z1d5QjJZV3dnWFN3Z1lubDBaVTltWm5ObGRDd2daVzVqYjJScGJtY3NJR1JwY2lsY2JpQWdmVnh1WEc0Z0lIUm9jbTkzSUc1bGR5QlVlWEJsUlhKeWIzSW9KM1poYkNCdGRYTjBJR0psSUhOMGNtbHVaeXdnYm5WdFltVnlJRzl5SUVKMVptWmxjaWNwWEc1OVhHNWNibVoxYm1OMGFXOXVJR0Z5Y21GNVNXNWtaWGhQWmlBb1lYSnlMQ0IyWVd3c0lHSjVkR1ZQWm1aelpYUXNJR1Z1WTI5a2FXNW5MQ0JrYVhJcElIdGNiaUFnZG1GeUlHbHVaR1Y0VTJsNlpTQTlJREZjYmlBZ2RtRnlJR0Z5Y2t4bGJtZDBhQ0E5SUdGeWNpNXNaVzVuZEdoY2JpQWdkbUZ5SUhaaGJFeGxibWQwYUNBOUlIWmhiQzVzWlc1bmRHaGNibHh1SUNCcFppQW9aVzVqYjJScGJtY2dJVDA5SUhWdVpHVm1hVzVsWkNrZ2UxeHVJQ0FnSUdWdVkyOWthVzVuSUQwZ1UzUnlhVzVuS0dWdVkyOWthVzVuS1M1MGIweHZkMlZ5UTJGelpTZ3BYRzRnSUNBZ2FXWWdLR1Z1WTI5a2FXNW5JRDA5UFNBbmRXTnpNaWNnZkh3Z1pXNWpiMlJwYm1jZ1BUMDlJQ2QxWTNNdE1pY2dmSHhjYmlBZ0lDQWdJQ0FnWlc1amIyUnBibWNnUFQwOUlDZDFkR1l4Tm14bEp5QjhmQ0JsYm1OdlpHbHVaeUE5UFQwZ0ozVjBaaTB4Tm14bEp5a2dlMXh1SUNBZ0lDQWdhV1lnS0dGeWNpNXNaVzVuZEdnZ1BDQXlJSHg4SUhaaGJDNXNaVzVuZEdnZ1BDQXlLU0I3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUF0TVZ4dUlDQWdJQ0FnZlZ4dUlDQWdJQ0FnYVc1a1pYaFRhWHBsSUQwZ01seHVJQ0FnSUNBZ1lYSnlUR1Z1WjNSb0lDODlJREpjYmlBZ0lDQWdJSFpoYkV4bGJtZDBhQ0F2UFNBeVhHNGdJQ0FnSUNCaWVYUmxUMlptYzJWMElDODlJREpjYmlBZ0lDQjlYRzRnSUgxY2JseHVJQ0JtZFc1amRHbHZiaUJ5WldGa0lDaGlkV1lzSUdrcElIdGNiaUFnSUNCcFppQW9hVzVrWlhoVGFYcGxJRDA5UFNBeEtTQjdYRzRnSUNBZ0lDQnlaWFIxY200Z1luVm1XMmxkWEc0Z0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lISmxkSFZ5YmlCaWRXWXVjbVZoWkZWSmJuUXhOa0pGS0drZ0tpQnBibVJsZUZOcGVtVXBYRzRnSUNBZ2ZWeHVJQ0I5WEc1Y2JpQWdkbUZ5SUdsY2JpQWdhV1lnS0dScGNpa2dlMXh1SUNBZ0lIWmhjaUJtYjNWdVpFbHVaR1Y0SUQwZ0xURmNiaUFnSUNCbWIzSWdLR2tnUFNCaWVYUmxUMlptYzJWME95QnBJRHdnWVhKeVRHVnVaM1JvT3lCcEt5c3BJSHRjYmlBZ0lDQWdJR2xtSUNoeVpXRmtLR0Z5Y2l3Z2FTa2dQVDA5SUhKbFlXUW9kbUZzTENCbWIzVnVaRWx1WkdWNElEMDlQU0F0TVNBL0lEQWdPaUJwSUMwZ1ptOTFibVJKYm1SbGVDa3BJSHRjYmlBZ0lDQWdJQ0FnYVdZZ0tHWnZkVzVrU1c1a1pYZ2dQVDA5SUMweEtTQm1iM1Z1WkVsdVpHVjRJRDBnYVZ4dUlDQWdJQ0FnSUNCcFppQW9hU0F0SUdadmRXNWtTVzVrWlhnZ0t5QXhJRDA5UFNCMllXeE1aVzVuZEdncElISmxkSFZ5YmlCbWIzVnVaRWx1WkdWNElDb2dhVzVrWlhoVGFYcGxYRzRnSUNBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ0lDQnBaaUFvWm05MWJtUkpibVJsZUNBaFBUMGdMVEVwSUdrZ0xUMGdhU0F0SUdadmRXNWtTVzVrWlhoY2JpQWdJQ0FnSUNBZ1ptOTFibVJKYm1SbGVDQTlJQzB4WEc0Z0lDQWdJQ0I5WEc0Z0lDQWdmVnh1SUNCOUlHVnNjMlVnZTF4dUlDQWdJR2xtSUNoaWVYUmxUMlptYzJWMElDc2dkbUZzVEdWdVozUm9JRDRnWVhKeVRHVnVaM1JvS1NCaWVYUmxUMlptYzJWMElEMGdZWEp5VEdWdVozUm9JQzBnZG1Gc1RHVnVaM1JvWEc0Z0lDQWdabTl5SUNocElEMGdZbmwwWlU5bVpuTmxkRHNnYVNBK1BTQXdPeUJwTFMwcElIdGNiaUFnSUNBZ0lIWmhjaUJtYjNWdVpDQTlJSFJ5ZFdWY2JpQWdJQ0FnSUdadmNpQW9kbUZ5SUdvZ1BTQXdPeUJxSUR3Z2RtRnNUR1Z1WjNSb095QnFLeXNwSUh0Y2JpQWdJQ0FnSUNBZ2FXWWdLSEpsWVdRb1lYSnlMQ0JwSUNzZ2Fpa2dJVDA5SUhKbFlXUW9kbUZzTENCcUtTa2dlMXh1SUNBZ0lDQWdJQ0FnSUdadmRXNWtJRDBnWm1Gc2MyVmNiaUFnSUNBZ0lDQWdJQ0JpY21WaGExeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQjlYRzRnSUNBZ0lDQnBaaUFvWm05MWJtUXBJSEpsZEhWeWJpQnBYRzRnSUNBZ2ZWeHVJQ0I5WEc1Y2JpQWdjbVYwZFhKdUlDMHhYRzU5WEc1Y2JrSjFabVpsY2k1d2NtOTBiM1I1Y0dVdWFXNWpiSFZrWlhNZ1BTQm1kVzVqZEdsdmJpQnBibU5zZFdSbGN5QW9kbUZzTENCaWVYUmxUMlptYzJWMExDQmxibU52WkdsdVp5a2dlMXh1SUNCeVpYUjFjbTRnZEdocGN5NXBibVJsZUU5bUtIWmhiQ3dnWW5sMFpVOW1abk5sZEN3Z1pXNWpiMlJwYm1jcElDRTlQU0F0TVZ4dWZWeHVYRzVDZFdabVpYSXVjSEp2ZEc5MGVYQmxMbWx1WkdWNFQyWWdQU0JtZFc1amRHbHZiaUJwYm1SbGVFOW1JQ2gyWVd3c0lHSjVkR1ZQWm1aelpYUXNJR1Z1WTI5a2FXNW5LU0I3WEc0Z0lISmxkSFZ5YmlCaWFXUnBjbVZqZEdsdmJtRnNTVzVrWlhoUFppaDBhR2x6TENCMllXd3NJR0o1ZEdWUFptWnpaWFFzSUdWdVkyOWthVzVuTENCMGNuVmxLVnh1ZlZ4dVhHNUNkV1ptWlhJdWNISnZkRzkwZVhCbExteGhjM1JKYm1SbGVFOW1JRDBnWm5WdVkzUnBiMjRnYkdGemRFbHVaR1Y0VDJZZ0tIWmhiQ3dnWW5sMFpVOW1abk5sZEN3Z1pXNWpiMlJwYm1jcElIdGNiaUFnY21WMGRYSnVJR0pwWkdseVpXTjBhVzl1WVd4SmJtUmxlRTltS0hSb2FYTXNJSFpoYkN3Z1lubDBaVTltWm5ObGRDd2daVzVqYjJScGJtY3NJR1poYkhObEtWeHVmVnh1WEc1bWRXNWpkR2x2YmlCb1pYaFhjbWwwWlNBb1luVm1MQ0J6ZEhKcGJtY3NJRzltWm5ObGRDd2diR1Z1WjNSb0tTQjdYRzRnSUc5bVpuTmxkQ0E5SUU1MWJXSmxjaWh2Wm1aelpYUXBJSHg4SURCY2JpQWdkbUZ5SUhKbGJXRnBibWx1WnlBOUlHSjFaaTVzWlc1bmRHZ2dMU0J2Wm1aelpYUmNiaUFnYVdZZ0tDRnNaVzVuZEdncElIdGNiaUFnSUNCc1pXNW5kR2dnUFNCeVpXMWhhVzVwYm1kY2JpQWdmU0JsYkhObElIdGNiaUFnSUNCc1pXNW5kR2dnUFNCT2RXMWlaWElvYkdWdVozUm9LVnh1SUNBZ0lHbG1JQ2hzWlc1bmRHZ2dQaUJ5WlcxaGFXNXBibWNwSUh0Y2JpQWdJQ0FnSUd4bGJtZDBhQ0E5SUhKbGJXRnBibWx1WjF4dUlDQWdJSDFjYmlBZ2ZWeHVYRzRnSUM4dklHMTFjM1FnWW1VZ1lXNGdaWFpsYmlCdWRXMWlaWElnYjJZZ1pHbG5hWFJ6WEc0Z0lIWmhjaUJ6ZEhKTVpXNGdQU0J6ZEhKcGJtY3ViR1Z1WjNSb1hHNGdJR2xtSUNoemRISk1aVzRnSlNBeUlDRTlQU0F3S1NCMGFISnZkeUJ1WlhjZ1ZIbHdaVVZ5Y205eUtDZEpiblpoYkdsa0lHaGxlQ0J6ZEhKcGJtY25LVnh1WEc0Z0lHbG1JQ2hzWlc1bmRHZ2dQaUJ6ZEhKTVpXNGdMeUF5S1NCN1hHNGdJQ0FnYkdWdVozUm9JRDBnYzNSeVRHVnVJQzhnTWx4dUlDQjlYRzRnSUdadmNpQW9kbUZ5SUdrZ1BTQXdPeUJwSUR3Z2JHVnVaM1JvT3lBcksya3BJSHRjYmlBZ0lDQjJZWElnY0dGeWMyVmtJRDBnY0dGeWMyVkpiblFvYzNSeWFXNW5Mbk4xWW5OMGNpaHBJQ29nTWl3Z01pa3NJREUyS1Z4dUlDQWdJR2xtSUNocGMwNWhUaWh3WVhKelpXUXBLU0J5WlhSMWNtNGdhVnh1SUNBZ0lHSjFabHR2Wm1aelpYUWdLeUJwWFNBOUlIQmhjbk5sWkZ4dUlDQjlYRzRnSUhKbGRIVnliaUJwWEc1OVhHNWNibVoxYm1OMGFXOXVJSFYwWmpoWGNtbDBaU0FvWW5WbUxDQnpkSEpwYm1jc0lHOW1abk5sZEN3Z2JHVnVaM1JvS1NCN1hHNGdJSEpsZEhWeWJpQmliR2wwUW5WbVptVnlLSFYwWmpoVWIwSjVkR1Z6S0hOMGNtbHVaeXdnWW5WbUxteGxibWQwYUNBdElHOW1abk5sZENrc0lHSjFaaXdnYjJabWMyVjBMQ0JzWlc1bmRHZ3BYRzU5WEc1Y2JtWjFibU4wYVc5dUlHRnpZMmxwVjNKcGRHVWdLR0oxWml3Z2MzUnlhVzVuTENCdlptWnpaWFFzSUd4bGJtZDBhQ2tnZTF4dUlDQnlaWFIxY200Z1lteHBkRUoxWm1abGNpaGhjMk5wYVZSdlFubDBaWE1vYzNSeWFXNW5LU3dnWW5WbUxDQnZabVp6WlhRc0lHeGxibWQwYUNsY2JuMWNibHh1Wm5WdVkzUnBiMjRnYkdGMGFXNHhWM0pwZEdVZ0tHSjFaaXdnYzNSeWFXNW5MQ0J2Wm1aelpYUXNJR3hsYm1kMGFDa2dlMXh1SUNCeVpYUjFjbTRnWVhOamFXbFhjbWwwWlNoaWRXWXNJSE4wY21sdVp5d2diMlptYzJWMExDQnNaVzVuZEdncFhHNTlYRzVjYm1aMWJtTjBhVzl1SUdKaGMyVTJORmR5YVhSbElDaGlkV1lzSUhOMGNtbHVaeXdnYjJabWMyVjBMQ0JzWlc1bmRHZ3BJSHRjYmlBZ2NtVjBkWEp1SUdKc2FYUkNkV1ptWlhJb1ltRnpaVFkwVkc5Q2VYUmxjeWh6ZEhKcGJtY3BMQ0JpZFdZc0lHOW1abk5sZEN3Z2JHVnVaM1JvS1Z4dWZWeHVYRzVtZFc1amRHbHZiaUIxWTNNeVYzSnBkR1VnS0dKMVppd2djM1J5YVc1bkxDQnZabVp6WlhRc0lHeGxibWQwYUNrZ2UxeHVJQ0J5WlhSMWNtNGdZbXhwZEVKMVptWmxjaWgxZEdZeE5teGxWRzlDZVhSbGN5aHpkSEpwYm1jc0lHSjFaaTVzWlc1bmRHZ2dMU0J2Wm1aelpYUXBMQ0JpZFdZc0lHOW1abk5sZEN3Z2JHVnVaM1JvS1Z4dWZWeHVYRzVDZFdabVpYSXVjSEp2ZEc5MGVYQmxMbmR5YVhSbElEMGdablZ1WTNScGIyNGdkM0pwZEdVZ0tITjBjbWx1Wnl3Z2IyWm1jMlYwTENCc1pXNW5kR2dzSUdWdVkyOWthVzVuS1NCN1hHNGdJQzh2SUVKMVptWmxjaU4zY21sMFpTaHpkSEpwYm1jcFhHNGdJR2xtSUNodlptWnpaWFFnUFQwOUlIVnVaR1ZtYVc1bFpDa2dlMXh1SUNBZ0lHVnVZMjlrYVc1bklEMGdKM1YwWmpnblhHNGdJQ0FnYkdWdVozUm9JRDBnZEdocGN5NXNaVzVuZEdoY2JpQWdJQ0J2Wm1aelpYUWdQU0F3WEc0Z0lDOHZJRUoxWm1abGNpTjNjbWwwWlNoemRISnBibWNzSUdWdVkyOWthVzVuS1Z4dUlDQjlJR1ZzYzJVZ2FXWWdLR3hsYm1kMGFDQTlQVDBnZFc1a1pXWnBibVZrSUNZbUlIUjVjR1Z2WmlCdlptWnpaWFFnUFQwOUlDZHpkSEpwYm1jbktTQjdYRzRnSUNBZ1pXNWpiMlJwYm1jZ1BTQnZabVp6WlhSY2JpQWdJQ0JzWlc1bmRHZ2dQU0IwYUdsekxteGxibWQwYUZ4dUlDQWdJRzltWm5ObGRDQTlJREJjYmlBZ0x5OGdRblZtWm1WeUkzZHlhWFJsS0hOMGNtbHVaeXdnYjJabWMyVjBXeXdnYkdWdVozUm9YVnNzSUdWdVkyOWthVzVuWFNsY2JpQWdmU0JsYkhObElHbG1JQ2hwYzBacGJtbDBaU2h2Wm1aelpYUXBLU0I3WEc0Z0lDQWdiMlptYzJWMElEMGdiMlptYzJWMElId2dNRnh1SUNBZ0lHbG1JQ2hwYzBacGJtbDBaU2hzWlc1bmRHZ3BLU0I3WEc0Z0lDQWdJQ0JzWlc1bmRHZ2dQU0JzWlc1bmRHZ2dmQ0F3WEc0Z0lDQWdJQ0JwWmlBb1pXNWpiMlJwYm1jZ1BUMDlJSFZ1WkdWbWFXNWxaQ2tnWlc1amIyUnBibWNnUFNBbmRYUm1PQ2RjYmlBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ1pXNWpiMlJwYm1jZ1BTQnNaVzVuZEdoY2JpQWdJQ0FnSUd4bGJtZDBhQ0E5SUhWdVpHVm1hVzVsWkZ4dUlDQWdJSDFjYmlBZ0x5OGdiR1ZuWVdONUlIZHlhWFJsS0hOMGNtbHVaeXdnWlc1amIyUnBibWNzSUc5bVpuTmxkQ3dnYkdWdVozUm9LU0F0SUhKbGJXOTJaU0JwYmlCMk1DNHhNMXh1SUNCOUlHVnNjMlVnZTF4dUlDQWdJSFJvY205M0lHNWxkeUJGY25KdmNpaGNiaUFnSUNBZ0lDZENkV1ptWlhJdWQzSnBkR1VvYzNSeWFXNW5MQ0JsYm1OdlpHbHVaeXdnYjJabWMyVjBXeXdnYkdWdVozUm9YU2tnYVhNZ2JtOGdiRzl1WjJWeUlITjFjSEJ2Y25SbFpDZGNiaUFnSUNBcFhHNGdJSDFjYmx4dUlDQjJZWElnY21WdFlXbHVhVzVuSUQwZ2RHaHBjeTVzWlc1bmRHZ2dMU0J2Wm1aelpYUmNiaUFnYVdZZ0tHeGxibWQwYUNBOVBUMGdkVzVrWldacGJtVmtJSHg4SUd4bGJtZDBhQ0ErSUhKbGJXRnBibWx1WnlrZ2JHVnVaM1JvSUQwZ2NtVnRZV2x1YVc1blhHNWNiaUFnYVdZZ0tDaHpkSEpwYm1jdWJHVnVaM1JvSUQ0Z01DQW1KaUFvYkdWdVozUm9JRHdnTUNCOGZDQnZabVp6WlhRZ1BDQXdLU2tnZkh3Z2IyWm1jMlYwSUQ0Z2RHaHBjeTVzWlc1bmRHZ3BJSHRjYmlBZ0lDQjBhSEp2ZHlCdVpYY2dVbUZ1WjJWRmNuSnZjaWduUVhSMFpXMXdkQ0IwYnlCM2NtbDBaU0J2ZFhSemFXUmxJR0oxWm1abGNpQmliM1Z1WkhNbktWeHVJQ0I5WEc1Y2JpQWdhV1lnS0NGbGJtTnZaR2x1WnlrZ1pXNWpiMlJwYm1jZ1BTQW5kWFJtT0NkY2JseHVJQ0IyWVhJZ2JHOTNaWEpsWkVOaGMyVWdQU0JtWVd4elpWeHVJQ0JtYjNJZ0tEczdLU0I3WEc0Z0lDQWdjM2RwZEdOb0lDaGxibU52WkdsdVp5a2dlMXh1SUNBZ0lDQWdZMkZ6WlNBbmFHVjRKenBjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJR2hsZUZkeWFYUmxLSFJvYVhNc0lITjBjbWx1Wnl3Z2IyWm1jMlYwTENCc1pXNW5kR2dwWEc1Y2JpQWdJQ0FnSUdOaGMyVWdKM1YwWmpnbk9seHVJQ0FnSUNBZ1kyRnpaU0FuZFhSbUxUZ25PbHh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdkWFJtT0ZkeWFYUmxLSFJvYVhNc0lITjBjbWx1Wnl3Z2IyWm1jMlYwTENCc1pXNW5kR2dwWEc1Y2JpQWdJQ0FnSUdOaGMyVWdKMkZ6WTJscEp6cGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlHRnpZMmxwVjNKcGRHVW9kR2hwY3l3Z2MzUnlhVzVuTENCdlptWnpaWFFzSUd4bGJtZDBhQ2xjYmx4dUlDQWdJQ0FnWTJGelpTQW5iR0YwYVc0eEp6cGNiaUFnSUNBZ0lHTmhjMlVnSjJKcGJtRnllU2M2WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJzWVhScGJqRlhjbWwwWlNoMGFHbHpMQ0J6ZEhKcGJtY3NJRzltWm5ObGRDd2diR1Z1WjNSb0tWeHVYRzRnSUNBZ0lDQmpZWE5sSUNkaVlYTmxOalFuT2x4dUlDQWdJQ0FnSUNBdkx5QlhZWEp1YVc1bk9pQnRZWGhNWlc1bmRHZ2dibTkwSUhSaGEyVnVJR2x1ZEc4Z1lXTmpiM1Z1ZENCcGJpQmlZWE5sTmpSWGNtbDBaVnh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdZbUZ6WlRZMFYzSnBkR1VvZEdocGN5d2djM1J5YVc1bkxDQnZabVp6WlhRc0lHeGxibWQwYUNsY2JseHVJQ0FnSUNBZ1kyRnpaU0FuZFdOek1pYzZYRzRnSUNBZ0lDQmpZWE5sSUNkMVkzTXRNaWM2WEc0Z0lDQWdJQ0JqWVhObElDZDFkR1l4Tm14bEp6cGNiaUFnSUNBZ0lHTmhjMlVnSjNWMFppMHhObXhsSnpwY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhWamN6SlhjbWwwWlNoMGFHbHpMQ0J6ZEhKcGJtY3NJRzltWm5ObGRDd2diR1Z1WjNSb0tWeHVYRzRnSUNBZ0lDQmtaV1poZFd4ME9seHVJQ0FnSUNBZ0lDQnBaaUFvYkc5M1pYSmxaRU5oYzJVcElIUm9jbTkzSUc1bGR5QlVlWEJsUlhKeWIzSW9KMVZ1YTI1dmQyNGdaVzVqYjJScGJtYzZJQ2NnS3lCbGJtTnZaR2x1WnlsY2JpQWdJQ0FnSUNBZ1pXNWpiMlJwYm1jZ1BTQW9KeWNnS3lCbGJtTnZaR2x1WnlrdWRHOU1iM2RsY2tOaGMyVW9LVnh1SUNBZ0lDQWdJQ0JzYjNkbGNtVmtRMkZ6WlNBOUlIUnlkV1ZjYmlBZ0lDQjlYRzRnSUgxY2JuMWNibHh1UW5WbVptVnlMbkJ5YjNSdmRIbHdaUzUwYjBwVFQwNGdQU0JtZFc1amRHbHZiaUIwYjBwVFQwNGdLQ2tnZTF4dUlDQnlaWFIxY200Z2UxeHVJQ0FnSUhSNWNHVTZJQ2RDZFdabVpYSW5MRnh1SUNBZ0lHUmhkR0U2SUVGeWNtRjVMbkJ5YjNSdmRIbHdaUzV6YkdsalpTNWpZV3hzS0hSb2FYTXVYMkZ5Y2lCOGZDQjBhR2x6TENBd0tWeHVJQ0I5WEc1OVhHNWNibVoxYm1OMGFXOXVJR0poYzJVMk5GTnNhV05sSUNoaWRXWXNJSE4wWVhKMExDQmxibVFwSUh0Y2JpQWdhV1lnS0hOMFlYSjBJRDA5UFNBd0lDWW1JR1Z1WkNBOVBUMGdZblZtTG14bGJtZDBhQ2tnZTF4dUlDQWdJSEpsZEhWeWJpQmlZWE5sTmpRdVpuSnZiVUo1ZEdWQmNuSmhlU2hpZFdZcFhHNGdJSDBnWld4elpTQjdYRzRnSUNBZ2NtVjBkWEp1SUdKaGMyVTJOQzVtY205dFFubDBaVUZ5Y21GNUtHSjFaaTV6YkdsalpTaHpkR0Z5ZEN3Z1pXNWtLU2xjYmlBZ2ZWeHVmVnh1WEc1bWRXNWpkR2x2YmlCMWRHWTRVMnhwWTJVZ0tHSjFaaXdnYzNSaGNuUXNJR1Z1WkNrZ2UxeHVJQ0JsYm1RZ1BTQk5ZWFJvTG0xcGJpaGlkV1l1YkdWdVozUm9MQ0JsYm1RcFhHNGdJSFpoY2lCeVpYTWdQU0JiWFZ4dVhHNGdJSFpoY2lCcElEMGdjM1JoY25SY2JpQWdkMmhwYkdVZ0tHa2dQQ0JsYm1RcElIdGNiaUFnSUNCMllYSWdabWx5YzNSQ2VYUmxJRDBnWW5WbVcybGRYRzRnSUNBZ2RtRnlJR052WkdWUWIybHVkQ0E5SUc1MWJHeGNiaUFnSUNCMllYSWdZbmwwWlhOUVpYSlRaWEYxWlc1alpTQTlJQ2htYVhKemRFSjVkR1VnUGlBd2VFVkdLU0EvSURSY2JpQWdJQ0FnSURvZ0tHWnBjbk4wUW5sMFpTQStJREI0UkVZcElEOGdNMXh1SUNBZ0lDQWdPaUFvWm1seWMzUkNlWFJsSUQ0Z01IaENSaWtnUHlBeVhHNGdJQ0FnSUNBNklERmNibHh1SUNBZ0lHbG1JQ2hwSUNzZ1lubDBaWE5RWlhKVFpYRjFaVzVqWlNBOFBTQmxibVFwSUh0Y2JpQWdJQ0FnSUhaaGNpQnpaV052Ym1SQ2VYUmxMQ0IwYUdseVpFSjVkR1VzSUdadmRYSjBhRUo1ZEdVc0lIUmxiWEJEYjJSbFVHOXBiblJjYmx4dUlDQWdJQ0FnYzNkcGRHTm9JQ2hpZVhSbGMxQmxjbE5sY1hWbGJtTmxLU0I3WEc0Z0lDQWdJQ0FnSUdOaGMyVWdNVHBjYmlBZ0lDQWdJQ0FnSUNCcFppQW9abWx5YzNSQ2VYUmxJRHdnTUhnNE1Da2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ1kyOWtaVkJ2YVc1MElEMGdabWx5YzNSQ2VYUmxYRzRnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNBZ0lHSnlaV0ZyWEc0Z0lDQWdJQ0FnSUdOaGMyVWdNanBjYmlBZ0lDQWdJQ0FnSUNCelpXTnZibVJDZVhSbElEMGdZblZtVzJrZ0t5QXhYVnh1SUNBZ0lDQWdJQ0FnSUdsbUlDZ29jMlZqYjI1a1FubDBaU0FtSURCNFF6QXBJRDA5UFNBd2VEZ3dLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBaVzF3UTI5a1pWQnZhVzUwSUQwZ0tHWnBjbk4wUW5sMFpTQW1JREI0TVVZcElEdzhJREI0TmlCOElDaHpaV052Ym1SQ2VYUmxJQ1lnTUhnelJpbGNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDaDBaVzF3UTI5a1pWQnZhVzUwSUQ0Z01IZzNSaWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0JqYjJSbFVHOXBiblFnUFNCMFpXMXdRMjlrWlZCdmFXNTBYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0FnSUdKeVpXRnJYRzRnSUNBZ0lDQWdJR05oYzJVZ016cGNiaUFnSUNBZ0lDQWdJQ0J6WldOdmJtUkNlWFJsSUQwZ1luVm1XMmtnS3lBeFhWeHVJQ0FnSUNBZ0lDQWdJSFJvYVhKa1FubDBaU0E5SUdKMVpsdHBJQ3NnTWwxY2JpQWdJQ0FnSUNBZ0lDQnBaaUFvS0hObFkyOXVaRUo1ZEdVZ0ppQXdlRU13S1NBOVBUMGdNSGc0TUNBbUppQW9kR2hwY21SQ2VYUmxJQ1lnTUhoRE1Da2dQVDA5SURCNE9EQXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIUmxiWEJEYjJSbFVHOXBiblFnUFNBb1ptbHljM1JDZVhSbElDWWdNSGhHS1NBOFBDQXdlRU1nZkNBb2MyVmpiMjVrUW5sMFpTQW1JREI0TTBZcElEdzhJREI0TmlCOElDaDBhR2x5WkVKNWRHVWdKaUF3ZUROR0tWeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tIUmxiWEJEYjJSbFVHOXBiblFnUGlBd2VEZEdSaUFtSmlBb2RHVnRjRU52WkdWUWIybHVkQ0E4SURCNFJEZ3dNQ0I4ZkNCMFpXMXdRMjlrWlZCdmFXNTBJRDRnTUhoRVJrWkdLU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0JqYjJSbFVHOXBiblFnUFNCMFpXMXdRMjlrWlZCdmFXNTBYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0FnSUdKeVpXRnJYRzRnSUNBZ0lDQWdJR05oYzJVZ05EcGNiaUFnSUNBZ0lDQWdJQ0J6WldOdmJtUkNlWFJsSUQwZ1luVm1XMmtnS3lBeFhWeHVJQ0FnSUNBZ0lDQWdJSFJvYVhKa1FubDBaU0E5SUdKMVpsdHBJQ3NnTWwxY2JpQWdJQ0FnSUNBZ0lDQm1iM1Z5ZEdoQ2VYUmxJRDBnWW5WbVcya2dLeUF6WFZ4dUlDQWdJQ0FnSUNBZ0lHbG1JQ2dvYzJWamIyNWtRbmwwWlNBbUlEQjRRekFwSUQwOVBTQXdlRGd3SUNZbUlDaDBhR2x5WkVKNWRHVWdKaUF3ZUVNd0tTQTlQVDBnTUhnNE1DQW1KaUFvWm05MWNuUm9RbmwwWlNBbUlEQjRRekFwSUQwOVBTQXdlRGd3S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwWlcxd1EyOWtaVkJ2YVc1MElEMGdLR1pwY25OMFFubDBaU0FtSURCNFJpa2dQRHdnTUhneE1pQjhJQ2h6WldOdmJtUkNlWFJsSUNZZ01IZ3pSaWtnUER3Z01IaERJSHdnS0hSb2FYSmtRbmwwWlNBbUlEQjRNMFlwSUR3OElEQjROaUI4SUNobWIzVnlkR2hDZVhSbElDWWdNSGd6UmlsY2JpQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoMFpXMXdRMjlrWlZCdmFXNTBJRDRnTUhoR1JrWkdJQ1ltSUhSbGJYQkRiMlJsVUc5cGJuUWdQQ0F3ZURFeE1EQXdNQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0JqYjJSbFVHOXBiblFnUFNCMFpXMXdRMjlrWlZCdmFXNTBYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdmVnh1SUNBZ0lIMWNibHh1SUNBZ0lHbG1JQ2hqYjJSbFVHOXBiblFnUFQwOUlHNTFiR3dwSUh0Y2JpQWdJQ0FnSUM4dklIZGxJR1JwWkNCdWIzUWdaMlZ1WlhKaGRHVWdZU0IyWVd4cFpDQmpiMlJsVUc5cGJuUWdjMjhnYVc1elpYSjBJR0ZjYmlBZ0lDQWdJQzh2SUhKbGNHeGhZMlZ0Wlc1MElHTm9ZWElnS0ZVclJrWkdSQ2tnWVc1a0lHRmtkbUZ1WTJVZ2IyNXNlU0F4SUdKNWRHVmNiaUFnSUNBZ0lHTnZaR1ZRYjJsdWRDQTlJREI0UmtaR1JGeHVJQ0FnSUNBZ1lubDBaWE5RWlhKVFpYRjFaVzVqWlNBOUlERmNiaUFnSUNCOUlHVnNjMlVnYVdZZ0tHTnZaR1ZRYjJsdWRDQStJREI0UmtaR1Jpa2dlMXh1SUNBZ0lDQWdMeThnWlc1amIyUmxJSFJ2SUhWMFpqRTJJQ2h6ZFhKeWIyZGhkR1VnY0dGcGNpQmtZVzVqWlNsY2JpQWdJQ0FnSUdOdlpHVlFiMmx1ZENBdFBTQXdlREV3TURBd1hHNGdJQ0FnSUNCeVpYTXVjSFZ6YUNoamIyUmxVRzlwYm5RZ1BqNCtJREV3SUNZZ01IZ3pSa1lnZkNBd2VFUTRNREFwWEc0Z0lDQWdJQ0JqYjJSbFVHOXBiblFnUFNBd2VFUkRNREFnZkNCamIyUmxVRzlwYm5RZ0ppQXdlRE5HUmx4dUlDQWdJSDFjYmx4dUlDQWdJSEpsY3k1d2RYTm9LR052WkdWUWIybHVkQ2xjYmlBZ0lDQnBJQ3M5SUdKNWRHVnpVR1Z5VTJWeGRXVnVZMlZjYmlBZ2ZWeHVYRzRnSUhKbGRIVnliaUJrWldOdlpHVkRiMlJsVUc5cGJuUnpRWEp5WVhrb2NtVnpLVnh1ZlZ4dVhHNHZMeUJDWVhObFpDQnZiaUJvZEhSd09pOHZjM1JoWTJ0dmRtVnlabXh2ZHk1amIyMHZZUzh5TWpjME56STNNaTgyT0RBM05ESXNJSFJvWlNCaWNtOTNjMlZ5SUhkcGRHaGNiaTh2SUhSb1pTQnNiM2RsYzNRZ2JHbHRhWFFnYVhNZ1EyaHliMjFsTENCM2FYUm9JREI0TVRBd01EQWdZWEpuY3k1Y2JpOHZJRmRsSUdkdklERWdiV0ZuYm1sMGRXUmxJR3hsYzNNc0lHWnZjaUJ6WVdabGRIbGNiblpoY2lCTlFWaGZRVkpIVlUxRlRsUlRYMHhGVGtkVVNDQTlJREI0TVRBd01GeHVYRzVtZFc1amRHbHZiaUJrWldOdlpHVkRiMlJsVUc5cGJuUnpRWEp5WVhrZ0tHTnZaR1ZRYjJsdWRITXBJSHRjYmlBZ2RtRnlJR3hsYmlBOUlHTnZaR1ZRYjJsdWRITXViR1Z1WjNSb1hHNGdJR2xtSUNoc1pXNGdQRDBnVFVGWVgwRlNSMVZOUlU1VVUxOU1SVTVIVkVncElIdGNiaUFnSUNCeVpYUjFjbTRnVTNSeWFXNW5MbVp5YjIxRGFHRnlRMjlrWlM1aGNIQnNlU2hUZEhKcGJtY3NJR052WkdWUWIybHVkSE1wSUM4dklHRjJiMmxrSUdWNGRISmhJSE5zYVdObEtDbGNiaUFnZlZ4dVhHNGdJQzh2SUVSbFkyOWtaU0JwYmlCamFIVnVhM01nZEc4Z1lYWnZhV1FnWENKallXeHNJSE4wWVdOcklITnBlbVVnWlhoalpXVmtaV1JjSWk1Y2JpQWdkbUZ5SUhKbGN5QTlJQ2NuWEc0Z0lIWmhjaUJwSUQwZ01GeHVJQ0IzYUdsc1pTQW9hU0E4SUd4bGJpa2dlMXh1SUNBZ0lISmxjeUFyUFNCVGRISnBibWN1Wm5KdmJVTm9ZWEpEYjJSbExtRndjR3g1S0Z4dUlDQWdJQ0FnVTNSeWFXNW5MRnh1SUNBZ0lDQWdZMjlrWlZCdmFXNTBjeTV6YkdsalpTaHBMQ0JwSUNzOUlFMUJXRjlCVWtkVlRVVk9WRk5mVEVWT1IxUklLVnh1SUNBZ0lDbGNiaUFnZlZ4dUlDQnlaWFIxY200Z2NtVnpYRzU5WEc1Y2JtWjFibU4wYVc5dUlHRnpZMmxwVTJ4cFkyVWdLR0oxWml3Z2MzUmhjblFzSUdWdVpDa2dlMXh1SUNCMllYSWdjbVYwSUQwZ0p5ZGNiaUFnWlc1a0lEMGdUV0YwYUM1dGFXNG9ZblZtTG14bGJtZDBhQ3dnWlc1a0tWeHVYRzRnSUdadmNpQW9kbUZ5SUdrZ1BTQnpkR0Z5ZERzZ2FTQThJR1Z1WkRzZ0t5dHBLU0I3WEc0Z0lDQWdjbVYwSUNzOUlGTjBjbWx1Wnk1bWNtOXRRMmhoY2tOdlpHVW9ZblZtVzJsZElDWWdNSGczUmlsY2JpQWdmVnh1SUNCeVpYUjFjbTRnY21WMFhHNTlYRzVjYm1aMWJtTjBhVzl1SUd4aGRHbHVNVk5zYVdObElDaGlkV1lzSUhOMFlYSjBMQ0JsYm1RcElIdGNiaUFnZG1GeUlISmxkQ0E5SUNjblhHNGdJR1Z1WkNBOUlFMWhkR2d1YldsdUtHSjFaaTVzWlc1bmRHZ3NJR1Z1WkNsY2JseHVJQ0JtYjNJZ0tIWmhjaUJwSUQwZ2MzUmhjblE3SUdrZ1BDQmxibVE3SUNzcmFTa2dlMXh1SUNBZ0lISmxkQ0FyUFNCVGRISnBibWN1Wm5KdmJVTm9ZWEpEYjJSbEtHSjFabHRwWFNsY2JpQWdmVnh1SUNCeVpYUjFjbTRnY21WMFhHNTlYRzVjYm1aMWJtTjBhVzl1SUdobGVGTnNhV05sSUNoaWRXWXNJSE4wWVhKMExDQmxibVFwSUh0Y2JpQWdkbUZ5SUd4bGJpQTlJR0oxWmk1c1pXNW5kR2hjYmx4dUlDQnBaaUFvSVhOMFlYSjBJSHg4SUhOMFlYSjBJRHdnTUNrZ2MzUmhjblFnUFNBd1hHNGdJR2xtSUNnaFpXNWtJSHg4SUdWdVpDQThJREFnZkh3Z1pXNWtJRDRnYkdWdUtTQmxibVFnUFNCc1pXNWNibHh1SUNCMllYSWdiM1YwSUQwZ0p5ZGNiaUFnWm05eUlDaDJZWElnYVNBOUlITjBZWEowT3lCcElEd2daVzVrT3lBcksya3BJSHRjYmlBZ0lDQnZkWFFnS3owZ2RHOUlaWGdvWW5WbVcybGRLVnh1SUNCOVhHNGdJSEpsZEhWeWJpQnZkWFJjYm4xY2JseHVablZ1WTNScGIyNGdkWFJtTVRac1pWTnNhV05sSUNoaWRXWXNJSE4wWVhKMExDQmxibVFwSUh0Y2JpQWdkbUZ5SUdKNWRHVnpJRDBnWW5WbUxuTnNhV05sS0hOMFlYSjBMQ0JsYm1RcFhHNGdJSFpoY2lCeVpYTWdQU0FuSjF4dUlDQm1iM0lnS0haaGNpQnBJRDBnTURzZ2FTQThJR0o1ZEdWekxteGxibWQwYURzZ2FTQXJQU0F5S1NCN1hHNGdJQ0FnY21WeklDczlJRk4wY21sdVp5NW1jbTl0UTJoaGNrTnZaR1VvWW5sMFpYTmJhVjBnS3lCaWVYUmxjMXRwSUNzZ01WMGdLaUF5TlRZcFhHNGdJSDFjYmlBZ2NtVjBkWEp1SUhKbGMxeHVmVnh1WEc1Q2RXWm1aWEl1Y0hKdmRHOTBlWEJsTG5Oc2FXTmxJRDBnWm5WdVkzUnBiMjRnYzJ4cFkyVWdLSE4wWVhKMExDQmxibVFwSUh0Y2JpQWdkbUZ5SUd4bGJpQTlJSFJvYVhNdWJHVnVaM1JvWEc0Z0lITjBZWEowSUQwZ2ZuNXpkR0Z5ZEZ4dUlDQmxibVFnUFNCbGJtUWdQVDA5SUhWdVpHVm1hVzVsWkNBL0lHeGxiaUE2SUg1K1pXNWtYRzVjYmlBZ2FXWWdLSE4wWVhKMElEd2dNQ2tnZTF4dUlDQWdJSE4wWVhKMElDczlJR3hsYmx4dUlDQWdJR2xtSUNoemRHRnlkQ0E4SURBcElITjBZWEowSUQwZ01GeHVJQ0I5SUdWc2MyVWdhV1lnS0hOMFlYSjBJRDRnYkdWdUtTQjdYRzRnSUNBZ2MzUmhjblFnUFNCc1pXNWNiaUFnZlZ4dVhHNGdJR2xtSUNobGJtUWdQQ0F3S1NCN1hHNGdJQ0FnWlc1a0lDczlJR3hsYmx4dUlDQWdJR2xtSUNobGJtUWdQQ0F3S1NCbGJtUWdQU0F3WEc0Z0lIMGdaV3h6WlNCcFppQW9aVzVrSUQ0Z2JHVnVLU0I3WEc0Z0lDQWdaVzVrSUQwZ2JHVnVYRzRnSUgxY2JseHVJQ0JwWmlBb1pXNWtJRHdnYzNSaGNuUXBJR1Z1WkNBOUlITjBZWEowWEc1Y2JpQWdkbUZ5SUc1bGQwSjFabHh1SUNCcFppQW9RblZtWm1WeUxsUlpVRVZFWDBGU1VrRlpYMU5WVUZCUFVsUXBJSHRjYmlBZ0lDQnVaWGRDZFdZZ1BTQjBhR2x6TG5OMVltRnljbUY1S0hOMFlYSjBMQ0JsYm1RcFhHNGdJQ0FnYm1WM1FuVm1MbDlmY0hKdmRHOWZYeUE5SUVKMVptWmxjaTV3Y205MGIzUjVjR1ZjYmlBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0IyWVhJZ2MyeHBZMlZNWlc0Z1BTQmxibVFnTFNCemRHRnlkRnh1SUNBZ0lHNWxkMEoxWmlBOUlHNWxkeUJDZFdabVpYSW9jMnhwWTJWTVpXNHNJSFZ1WkdWbWFXNWxaQ2xjYmlBZ0lDQm1iM0lnS0haaGNpQnBJRDBnTURzZ2FTQThJSE5zYVdObFRHVnVPeUFySzJrcElIdGNiaUFnSUNBZ0lHNWxkMEoxWmx0cFhTQTlJSFJvYVhOYmFTQXJJSE4wWVhKMFhWeHVJQ0FnSUgxY2JpQWdmVnh1WEc0Z0lISmxkSFZ5YmlCdVpYZENkV1pjYm4xY2JseHVMeXBjYmlBcUlFNWxaV1FnZEc4Z2JXRnJaU0J6ZFhKbElIUm9ZWFFnWW5WbVptVnlJR2x6YmlkMElIUnllV2x1WnlCMGJ5QjNjbWwwWlNCdmRYUWdiMllnWW05MWJtUnpMbHh1SUNvdlhHNW1kVzVqZEdsdmJpQmphR1ZqYTA5bVpuTmxkQ0FvYjJabWMyVjBMQ0JsZUhRc0lHeGxibWQwYUNrZ2UxeHVJQ0JwWmlBb0tHOW1abk5sZENBbElERXBJQ0U5UFNBd0lIeDhJRzltWm5ObGRDQThJREFwSUhSb2NtOTNJRzVsZHlCU1lXNW5aVVZ5Y205eUtDZHZabVp6WlhRZ2FYTWdibTkwSUhWcGJuUW5LVnh1SUNCcFppQW9iMlptYzJWMElDc2daWGgwSUQ0Z2JHVnVaM1JvS1NCMGFISnZkeUJ1WlhjZ1VtRnVaMlZGY25KdmNpZ25WSEo1YVc1bklIUnZJR0ZqWTJWemN5QmlaWGx2Ym1RZ1luVm1abVZ5SUd4bGJtZDBhQ2NwWEc1OVhHNWNia0oxWm1abGNpNXdjbTkwYjNSNWNHVXVjbVZoWkZWSmJuUk1SU0E5SUdaMWJtTjBhVzl1SUhKbFlXUlZTVzUwVEVVZ0tHOW1abk5sZEN3Z1lubDBaVXhsYm1kMGFDd2dibTlCYzNObGNuUXBJSHRjYmlBZ2IyWm1jMlYwSUQwZ2IyWm1jMlYwSUh3Z01GeHVJQ0JpZVhSbFRHVnVaM1JvSUQwZ1lubDBaVXhsYm1kMGFDQjhJREJjYmlBZ2FXWWdLQ0Z1YjBGemMyVnlkQ2tnWTJobFkydFBabVp6WlhRb2IyWm1jMlYwTENCaWVYUmxUR1Z1WjNSb0xDQjBhR2x6TG14bGJtZDBhQ2xjYmx4dUlDQjJZWElnZG1Gc0lEMGdkR2hwYzF0dlptWnpaWFJkWEc0Z0lIWmhjaUJ0ZFd3Z1BTQXhYRzRnSUhaaGNpQnBJRDBnTUZ4dUlDQjNhR2xzWlNBb0t5dHBJRHdnWW5sMFpVeGxibWQwYUNBbUppQW9iWFZzSUNvOUlEQjRNVEF3S1NrZ2UxeHVJQ0FnSUhaaGJDQXJQU0IwYUdselcyOW1abk5sZENBcklHbGRJQ29nYlhWc1hHNGdJSDFjYmx4dUlDQnlaWFIxY200Z2RtRnNYRzU5WEc1Y2JrSjFabVpsY2k1d2NtOTBiM1I1Y0dVdWNtVmhaRlZKYm5SQ1JTQTlJR1oxYm1OMGFXOXVJSEpsWVdSVlNXNTBRa1VnS0c5bVpuTmxkQ3dnWW5sMFpVeGxibWQwYUN3Z2JtOUJjM05sY25RcElIdGNiaUFnYjJabWMyVjBJRDBnYjJabWMyVjBJSHdnTUZ4dUlDQmllWFJsVEdWdVozUm9JRDBnWW5sMFpVeGxibWQwYUNCOElEQmNiaUFnYVdZZ0tDRnViMEZ6YzJWeWRDa2dlMXh1SUNBZ0lHTm9aV05yVDJabWMyVjBLRzltWm5ObGRDd2dZbmwwWlV4bGJtZDBhQ3dnZEdocGN5NXNaVzVuZEdncFhHNGdJSDFjYmx4dUlDQjJZWElnZG1Gc0lEMGdkR2hwYzF0dlptWnpaWFFnS3lBdExXSjVkR1ZNWlc1bmRHaGRYRzRnSUhaaGNpQnRkV3dnUFNBeFhHNGdJSGRvYVd4bElDaGllWFJsVEdWdVozUm9JRDRnTUNBbUppQW9iWFZzSUNvOUlEQjRNVEF3S1NrZ2UxeHVJQ0FnSUhaaGJDQXJQU0IwYUdselcyOW1abk5sZENBcklDMHRZbmwwWlV4bGJtZDBhRjBnS2lCdGRXeGNiaUFnZlZ4dVhHNGdJSEpsZEhWeWJpQjJZV3hjYm4xY2JseHVRblZtWm1WeUxuQnliM1J2ZEhsd1pTNXlaV0ZrVlVsdWREZ2dQU0JtZFc1amRHbHZiaUJ5WldGa1ZVbHVkRGdnS0c5bVpuTmxkQ3dnYm05QmMzTmxjblFwSUh0Y2JpQWdhV1lnS0NGdWIwRnpjMlZ5ZENrZ1kyaGxZMnRQWm1aelpYUW9iMlptYzJWMExDQXhMQ0IwYUdsekxteGxibWQwYUNsY2JpQWdjbVYwZFhKdUlIUm9hWE5iYjJabWMyVjBYVnh1ZlZ4dVhHNUNkV1ptWlhJdWNISnZkRzkwZVhCbExuSmxZV1JWU1c1ME1UWk1SU0E5SUdaMWJtTjBhVzl1SUhKbFlXUlZTVzUwTVRaTVJTQW9iMlptYzJWMExDQnViMEZ6YzJWeWRDa2dlMXh1SUNCcFppQW9JVzV2UVhOelpYSjBLU0JqYUdWamEwOW1abk5sZENodlptWnpaWFFzSURJc0lIUm9hWE11YkdWdVozUm9LVnh1SUNCeVpYUjFjbTRnZEdocGMxdHZabVp6WlhSZElId2dLSFJvYVhOYmIyWm1jMlYwSUNzZ01WMGdQRHdnT0NsY2JuMWNibHh1UW5WbVptVnlMbkJ5YjNSdmRIbHdaUzV5WldGa1ZVbHVkREUyUWtVZ1BTQm1kVzVqZEdsdmJpQnlaV0ZrVlVsdWRERTJRa1VnS0c5bVpuTmxkQ3dnYm05QmMzTmxjblFwSUh0Y2JpQWdhV1lnS0NGdWIwRnpjMlZ5ZENrZ1kyaGxZMnRQWm1aelpYUW9iMlptYzJWMExDQXlMQ0IwYUdsekxteGxibWQwYUNsY2JpQWdjbVYwZFhKdUlDaDBhR2x6VzI5bVpuTmxkRjBnUER3Z09Da2dmQ0IwYUdselcyOW1abk5sZENBcklERmRYRzU5WEc1Y2JrSjFabVpsY2k1d2NtOTBiM1I1Y0dVdWNtVmhaRlZKYm5Rek1reEZJRDBnWm5WdVkzUnBiMjRnY21WaFpGVkpiblF6TWt4RklDaHZabVp6WlhRc0lHNXZRWE56WlhKMEtTQjdYRzRnSUdsbUlDZ2hibTlCYzNObGNuUXBJR05vWldOclQyWm1jMlYwS0c5bVpuTmxkQ3dnTkN3Z2RHaHBjeTVzWlc1bmRHZ3BYRzVjYmlBZ2NtVjBkWEp1SUNnb2RHaHBjMXR2Wm1aelpYUmRLU0I4WEc0Z0lDQWdJQ0FvZEdocGMxdHZabVp6WlhRZ0t5QXhYU0E4UENBNEtTQjhYRzRnSUNBZ0lDQW9kR2hwYzF0dlptWnpaWFFnS3lBeVhTQThQQ0F4TmlrcElDdGNiaUFnSUNBZ0lDaDBhR2x6VzI5bVpuTmxkQ0FySUROZElDb2dNSGd4TURBd01EQXdLVnh1ZlZ4dVhHNUNkV1ptWlhJdWNISnZkRzkwZVhCbExuSmxZV1JWU1c1ME16SkNSU0E5SUdaMWJtTjBhVzl1SUhKbFlXUlZTVzUwTXpKQ1JTQW9iMlptYzJWMExDQnViMEZ6YzJWeWRDa2dlMXh1SUNCcFppQW9JVzV2UVhOelpYSjBLU0JqYUdWamEwOW1abk5sZENodlptWnpaWFFzSURRc0lIUm9hWE11YkdWdVozUm9LVnh1WEc0Z0lISmxkSFZ5YmlBb2RHaHBjMXR2Wm1aelpYUmRJQ29nTUhneE1EQXdNREF3S1NBclhHNGdJQ0FnS0NoMGFHbHpXMjltWm5ObGRDQXJJREZkSUR3OElERTJLU0I4WEc0Z0lDQWdLSFJvYVhOYmIyWm1jMlYwSUNzZ01sMGdQRHdnT0NrZ2ZGeHVJQ0FnSUhSb2FYTmJiMlptYzJWMElDc2dNMTBwWEc1OVhHNWNia0oxWm1abGNpNXdjbTkwYjNSNWNHVXVjbVZoWkVsdWRFeEZJRDBnWm5WdVkzUnBiMjRnY21WaFpFbHVkRXhGSUNodlptWnpaWFFzSUdKNWRHVk1aVzVuZEdnc0lHNXZRWE56WlhKMEtTQjdYRzRnSUc5bVpuTmxkQ0E5SUc5bVpuTmxkQ0I4SURCY2JpQWdZbmwwWlV4bGJtZDBhQ0E5SUdKNWRHVk1aVzVuZEdnZ2ZDQXdYRzRnSUdsbUlDZ2hibTlCYzNObGNuUXBJR05vWldOclQyWm1jMlYwS0c5bVpuTmxkQ3dnWW5sMFpVeGxibWQwYUN3Z2RHaHBjeTVzWlc1bmRHZ3BYRzVjYmlBZ2RtRnlJSFpoYkNBOUlIUm9hWE5iYjJabWMyVjBYVnh1SUNCMllYSWdiWFZzSUQwZ01WeHVJQ0IyWVhJZ2FTQTlJREJjYmlBZ2QyaHBiR1VnS0NzcmFTQThJR0o1ZEdWTVpXNW5kR2dnSmlZZ0tHMTFiQ0FxUFNBd2VERXdNQ2twSUh0Y2JpQWdJQ0IyWVd3Z0t6MGdkR2hwYzF0dlptWnpaWFFnS3lCcFhTQXFJRzExYkZ4dUlDQjlYRzRnSUcxMWJDQXFQU0F3ZURnd1hHNWNiaUFnYVdZZ0tIWmhiQ0ErUFNCdGRXd3BJSFpoYkNBdFBTQk5ZWFJvTG5CdmR5Z3lMQ0E0SUNvZ1lubDBaVXhsYm1kMGFDbGNibHh1SUNCeVpYUjFjbTRnZG1Gc1hHNTlYRzVjYmtKMVptWmxjaTV3Y205MGIzUjVjR1V1Y21WaFpFbHVkRUpGSUQwZ1puVnVZM1JwYjI0Z2NtVmhaRWx1ZEVKRklDaHZabVp6WlhRc0lHSjVkR1ZNWlc1bmRHZ3NJRzV2UVhOelpYSjBLU0I3WEc0Z0lHOW1abk5sZENBOUlHOW1abk5sZENCOElEQmNiaUFnWW5sMFpVeGxibWQwYUNBOUlHSjVkR1ZNWlc1bmRHZ2dmQ0F3WEc0Z0lHbG1JQ2doYm05QmMzTmxjblFwSUdOb1pXTnJUMlptYzJWMEtHOW1abk5sZEN3Z1lubDBaVXhsYm1kMGFDd2dkR2hwY3k1c1pXNW5kR2dwWEc1Y2JpQWdkbUZ5SUdrZ1BTQmllWFJsVEdWdVozUm9YRzRnSUhaaGNpQnRkV3dnUFNBeFhHNGdJSFpoY2lCMllXd2dQU0IwYUdselcyOW1abk5sZENBcklDMHRhVjFjYmlBZ2QyaHBiR1VnS0drZ1BpQXdJQ1ltSUNodGRXd2dLajBnTUhneE1EQXBLU0I3WEc0Z0lDQWdkbUZzSUNzOUlIUm9hWE5iYjJabWMyVjBJQ3NnTFMxcFhTQXFJRzExYkZ4dUlDQjlYRzRnSUcxMWJDQXFQU0F3ZURnd1hHNWNiaUFnYVdZZ0tIWmhiQ0ErUFNCdGRXd3BJSFpoYkNBdFBTQk5ZWFJvTG5CdmR5Z3lMQ0E0SUNvZ1lubDBaVXhsYm1kMGFDbGNibHh1SUNCeVpYUjFjbTRnZG1Gc1hHNTlYRzVjYmtKMVptWmxjaTV3Y205MGIzUjVjR1V1Y21WaFpFbHVkRGdnUFNCbWRXNWpkR2x2YmlCeVpXRmtTVzUwT0NBb2IyWm1jMlYwTENCdWIwRnpjMlZ5ZENrZ2UxeHVJQ0JwWmlBb0lXNXZRWE56WlhKMEtTQmphR1ZqYTA5bVpuTmxkQ2h2Wm1aelpYUXNJREVzSUhSb2FYTXViR1Z1WjNSb0tWeHVJQ0JwWmlBb0lTaDBhR2x6VzI5bVpuTmxkRjBnSmlBd2VEZ3dLU2tnY21WMGRYSnVJQ2gwYUdselcyOW1abk5sZEYwcFhHNGdJSEpsZEhWeWJpQW9LREI0Wm1ZZ0xTQjBhR2x6VzI5bVpuTmxkRjBnS3lBeEtTQXFJQzB4S1Z4dWZWeHVYRzVDZFdabVpYSXVjSEp2ZEc5MGVYQmxMbkpsWVdSSmJuUXhOa3hGSUQwZ1puVnVZM1JwYjI0Z2NtVmhaRWx1ZERFMlRFVWdLRzltWm5ObGRDd2dibTlCYzNObGNuUXBJSHRjYmlBZ2FXWWdLQ0Z1YjBGemMyVnlkQ2tnWTJobFkydFBabVp6WlhRb2IyWm1jMlYwTENBeUxDQjBhR2x6TG14bGJtZDBhQ2xjYmlBZ2RtRnlJSFpoYkNBOUlIUm9hWE5iYjJabWMyVjBYU0I4SUNoMGFHbHpXMjltWm5ObGRDQXJJREZkSUR3OElEZ3BYRzRnSUhKbGRIVnliaUFvZG1Gc0lDWWdNSGc0TURBd0tTQS9JSFpoYkNCOElEQjRSa1pHUmpBd01EQWdPaUIyWVd4Y2JuMWNibHh1UW5WbVptVnlMbkJ5YjNSdmRIbHdaUzV5WldGa1NXNTBNVFpDUlNBOUlHWjFibU4wYVc5dUlISmxZV1JKYm5ReE5rSkZJQ2h2Wm1aelpYUXNJRzV2UVhOelpYSjBLU0I3WEc0Z0lHbG1JQ2doYm05QmMzTmxjblFwSUdOb1pXTnJUMlptYzJWMEtHOW1abk5sZEN3Z01pd2dkR2hwY3k1c1pXNW5kR2dwWEc0Z0lIWmhjaUIyWVd3Z1BTQjBhR2x6VzI5bVpuTmxkQ0FySURGZElId2dLSFJvYVhOYmIyWm1jMlYwWFNBOFBDQTRLVnh1SUNCeVpYUjFjbTRnS0haaGJDQW1JREI0T0RBd01Da2dQeUIyWVd3Z2ZDQXdlRVpHUmtZd01EQXdJRG9nZG1Gc1hHNTlYRzVjYmtKMVptWmxjaTV3Y205MGIzUjVjR1V1Y21WaFpFbHVkRE15VEVVZ1BTQm1kVzVqZEdsdmJpQnlaV0ZrU1c1ME16Sk1SU0FvYjJabWMyVjBMQ0J1YjBGemMyVnlkQ2tnZTF4dUlDQnBaaUFvSVc1dlFYTnpaWEowS1NCamFHVmphMDltWm5ObGRDaHZabVp6WlhRc0lEUXNJSFJvYVhNdWJHVnVaM1JvS1Z4dVhHNGdJSEpsZEhWeWJpQW9kR2hwYzF0dlptWnpaWFJkS1NCOFhHNGdJQ0FnS0hSb2FYTmJiMlptYzJWMElDc2dNVjBnUER3Z09Da2dmRnh1SUNBZ0lDaDBhR2x6VzI5bVpuTmxkQ0FySURKZElEdzhJREUyS1NCOFhHNGdJQ0FnS0hSb2FYTmJiMlptYzJWMElDc2dNMTBnUER3Z01qUXBYRzU5WEc1Y2JrSjFabVpsY2k1d2NtOTBiM1I1Y0dVdWNtVmhaRWx1ZERNeVFrVWdQU0JtZFc1amRHbHZiaUJ5WldGa1NXNTBNekpDUlNBb2IyWm1jMlYwTENCdWIwRnpjMlZ5ZENrZ2UxeHVJQ0JwWmlBb0lXNXZRWE56WlhKMEtTQmphR1ZqYTA5bVpuTmxkQ2h2Wm1aelpYUXNJRFFzSUhSb2FYTXViR1Z1WjNSb0tWeHVYRzRnSUhKbGRIVnliaUFvZEdocGMxdHZabVp6WlhSZElEdzhJREkwS1NCOFhHNGdJQ0FnS0hSb2FYTmJiMlptYzJWMElDc2dNVjBnUER3Z01UWXBJSHhjYmlBZ0lDQW9kR2hwYzF0dlptWnpaWFFnS3lBeVhTQThQQ0E0S1NCOFhHNGdJQ0FnS0hSb2FYTmJiMlptYzJWMElDc2dNMTBwWEc1OVhHNWNia0oxWm1abGNpNXdjbTkwYjNSNWNHVXVjbVZoWkVac2IyRjBURVVnUFNCbWRXNWpkR2x2YmlCeVpXRmtSbXh2WVhSTVJTQW9iMlptYzJWMExDQnViMEZ6YzJWeWRDa2dlMXh1SUNCcFppQW9JVzV2UVhOelpYSjBLU0JqYUdWamEwOW1abk5sZENodlptWnpaWFFzSURRc0lIUm9hWE11YkdWdVozUm9LVnh1SUNCeVpYUjFjbTRnYVdWbFpUYzFOQzV5WldGa0tIUm9hWE1zSUc5bVpuTmxkQ3dnZEhKMVpTd2dNak1zSURRcFhHNTlYRzVjYmtKMVptWmxjaTV3Y205MGIzUjVjR1V1Y21WaFpFWnNiMkYwUWtVZ1BTQm1kVzVqZEdsdmJpQnlaV0ZrUm14dllYUkNSU0FvYjJabWMyVjBMQ0J1YjBGemMyVnlkQ2tnZTF4dUlDQnBaaUFvSVc1dlFYTnpaWEowS1NCamFHVmphMDltWm5ObGRDaHZabVp6WlhRc0lEUXNJSFJvYVhNdWJHVnVaM1JvS1Z4dUlDQnlaWFIxY200Z2FXVmxaVGMxTkM1eVpXRmtLSFJvYVhNc0lHOW1abk5sZEN3Z1ptRnNjMlVzSURJekxDQTBLVnh1ZlZ4dVhHNUNkV1ptWlhJdWNISnZkRzkwZVhCbExuSmxZV1JFYjNWaWJHVk1SU0E5SUdaMWJtTjBhVzl1SUhKbFlXUkViM1ZpYkdWTVJTQW9iMlptYzJWMExDQnViMEZ6YzJWeWRDa2dlMXh1SUNCcFppQW9JVzV2UVhOelpYSjBLU0JqYUdWamEwOW1abk5sZENodlptWnpaWFFzSURnc0lIUm9hWE11YkdWdVozUm9LVnh1SUNCeVpYUjFjbTRnYVdWbFpUYzFOQzV5WldGa0tIUm9hWE1zSUc5bVpuTmxkQ3dnZEhKMVpTd2dOVElzSURncFhHNTlYRzVjYmtKMVptWmxjaTV3Y205MGIzUjVjR1V1Y21WaFpFUnZkV0pzWlVKRklEMGdablZ1WTNScGIyNGdjbVZoWkVSdmRXSnNaVUpGSUNodlptWnpaWFFzSUc1dlFYTnpaWEowS1NCN1hHNGdJR2xtSUNnaGJtOUJjM05sY25RcElHTm9aV05yVDJabWMyVjBLRzltWm5ObGRDd2dPQ3dnZEdocGN5NXNaVzVuZEdncFhHNGdJSEpsZEhWeWJpQnBaV1ZsTnpVMExuSmxZV1FvZEdocGN5d2diMlptYzJWMExDQm1ZV3h6WlN3Z05USXNJRGdwWEc1OVhHNWNibVoxYm1OMGFXOXVJR05vWldOclNXNTBJQ2hpZFdZc0lIWmhiSFZsTENCdlptWnpaWFFzSUdWNGRDd2diV0Y0TENCdGFXNHBJSHRjYmlBZ2FXWWdLQ0ZDZFdabVpYSXVhWE5DZFdabVpYSW9ZblZtS1NrZ2RHaHliM2NnYm1WM0lGUjVjR1ZGY25KdmNpZ25YQ0ppZFdabVpYSmNJaUJoY21kMWJXVnVkQ0J0ZFhOMElHSmxJR0VnUW5WbVptVnlJR2x1YzNSaGJtTmxKeWxjYmlBZ2FXWWdLSFpoYkhWbElENGdiV0Y0SUh4OElIWmhiSFZsSUR3Z2JXbHVLU0IwYUhKdmR5QnVaWGNnVW1GdVoyVkZjbkp2Y2lnblhDSjJZV3gxWlZ3aUlHRnlaM1Z0Wlc1MElHbHpJRzkxZENCdlppQmliM1Z1WkhNbktWeHVJQ0JwWmlBb2IyWm1jMlYwSUNzZ1pYaDBJRDRnWW5WbUxteGxibWQwYUNrZ2RHaHliM2NnYm1WM0lGSmhibWRsUlhKeWIzSW9KMGx1WkdWNElHOTFkQ0J2WmlCeVlXNW5aU2NwWEc1OVhHNWNia0oxWm1abGNpNXdjbTkwYjNSNWNHVXVkM0pwZEdWVlNXNTBURVVnUFNCbWRXNWpkR2x2YmlCM2NtbDBaVlZKYm5STVJTQW9kbUZzZFdVc0lHOW1abk5sZEN3Z1lubDBaVXhsYm1kMGFDd2dibTlCYzNObGNuUXBJSHRjYmlBZ2RtRnNkV1VnUFNBcmRtRnNkV1ZjYmlBZ2IyWm1jMlYwSUQwZ2IyWm1jMlYwSUh3Z01GeHVJQ0JpZVhSbFRHVnVaM1JvSUQwZ1lubDBaVXhsYm1kMGFDQjhJREJjYmlBZ2FXWWdLQ0Z1YjBGemMyVnlkQ2tnZTF4dUlDQWdJSFpoY2lCdFlYaENlWFJsY3lBOUlFMWhkR2d1Y0c5M0tESXNJRGdnS2lCaWVYUmxUR1Z1WjNSb0tTQXRJREZjYmlBZ0lDQmphR1ZqYTBsdWRDaDBhR2x6TENCMllXeDFaU3dnYjJabWMyVjBMQ0JpZVhSbFRHVnVaM1JvTENCdFlYaENlWFJsY3l3Z01DbGNiaUFnZlZ4dVhHNGdJSFpoY2lCdGRXd2dQU0F4WEc0Z0lIWmhjaUJwSUQwZ01GeHVJQ0IwYUdselcyOW1abk5sZEYwZ1BTQjJZV3gxWlNBbUlEQjRSa1pjYmlBZ2QyaHBiR1VnS0NzcmFTQThJR0o1ZEdWTVpXNW5kR2dnSmlZZ0tHMTFiQ0FxUFNBd2VERXdNQ2twSUh0Y2JpQWdJQ0IwYUdselcyOW1abk5sZENBcklHbGRJRDBnS0haaGJIVmxJQzhnYlhWc0tTQW1JREI0UmtaY2JpQWdmVnh1WEc0Z0lISmxkSFZ5YmlCdlptWnpaWFFnS3lCaWVYUmxUR1Z1WjNSb1hHNTlYRzVjYmtKMVptWmxjaTV3Y205MGIzUjVjR1V1ZDNKcGRHVlZTVzUwUWtVZ1BTQm1kVzVqZEdsdmJpQjNjbWwwWlZWSmJuUkNSU0FvZG1Gc2RXVXNJRzltWm5ObGRDd2dZbmwwWlV4bGJtZDBhQ3dnYm05QmMzTmxjblFwSUh0Y2JpQWdkbUZzZFdVZ1BTQXJkbUZzZFdWY2JpQWdiMlptYzJWMElEMGdiMlptYzJWMElId2dNRnh1SUNCaWVYUmxUR1Z1WjNSb0lEMGdZbmwwWlV4bGJtZDBhQ0I4SURCY2JpQWdhV1lnS0NGdWIwRnpjMlZ5ZENrZ2UxeHVJQ0FnSUhaaGNpQnRZWGhDZVhSbGN5QTlJRTFoZEdndWNHOTNLRElzSURnZ0tpQmllWFJsVEdWdVozUm9LU0F0SURGY2JpQWdJQ0JqYUdWamEwbHVkQ2gwYUdsekxDQjJZV3gxWlN3Z2IyWm1jMlYwTENCaWVYUmxUR1Z1WjNSb0xDQnRZWGhDZVhSbGN5d2dNQ2xjYmlBZ2ZWeHVYRzRnSUhaaGNpQnBJRDBnWW5sMFpVeGxibWQwYUNBdElERmNiaUFnZG1GeUlHMTFiQ0E5SURGY2JpQWdkR2hwYzF0dlptWnpaWFFnS3lCcFhTQTlJSFpoYkhWbElDWWdNSGhHUmx4dUlDQjNhR2xzWlNBb0xTMXBJRDQ5SURBZ0ppWWdLRzExYkNBcVBTQXdlREV3TUNrcElIdGNiaUFnSUNCMGFHbHpXMjltWm5ObGRDQXJJR2xkSUQwZ0tIWmhiSFZsSUM4Z2JYVnNLU0FtSURCNFJrWmNiaUFnZlZ4dVhHNGdJSEpsZEhWeWJpQnZabVp6WlhRZ0t5QmllWFJsVEdWdVozUm9YRzU5WEc1Y2JrSjFabVpsY2k1d2NtOTBiM1I1Y0dVdWQzSnBkR1ZWU1c1ME9DQTlJR1oxYm1OMGFXOXVJSGR5YVhSbFZVbHVkRGdnS0haaGJIVmxMQ0J2Wm1aelpYUXNJRzV2UVhOelpYSjBLU0I3WEc0Z0lIWmhiSFZsSUQwZ0szWmhiSFZsWEc0Z0lHOW1abk5sZENBOUlHOW1abk5sZENCOElEQmNiaUFnYVdZZ0tDRnViMEZ6YzJWeWRDa2dZMmhsWTJ0SmJuUW9kR2hwY3l3Z2RtRnNkV1VzSUc5bVpuTmxkQ3dnTVN3Z01IaG1aaXdnTUNsY2JpQWdhV1lnS0NGQ2RXWm1aWEl1VkZsUVJVUmZRVkpTUVZsZlUxVlFVRTlTVkNrZ2RtRnNkV1VnUFNCTllYUm9MbVpzYjI5eUtIWmhiSFZsS1Z4dUlDQjBhR2x6VzI5bVpuTmxkRjBnUFNBb2RtRnNkV1VnSmlBd2VHWm1LVnh1SUNCeVpYUjFjbTRnYjJabWMyVjBJQ3NnTVZ4dWZWeHVYRzVtZFc1amRHbHZiaUJ2WW1wbFkzUlhjbWwwWlZWSmJuUXhOaUFvWW5WbUxDQjJZV3gxWlN3Z2IyWm1jMlYwTENCc2FYUjBiR1ZGYm1ScFlXNHBJSHRjYmlBZ2FXWWdLSFpoYkhWbElEd2dNQ2tnZG1Gc2RXVWdQU0F3ZUdabVptWWdLeUIyWVd4MVpTQXJJREZjYmlBZ1ptOXlJQ2gyWVhJZ2FTQTlJREFzSUdvZ1BTQk5ZWFJvTG0xcGJpaGlkV1l1YkdWdVozUm9JQzBnYjJabWMyVjBMQ0F5S1RzZ2FTQThJR283SUNzcmFTa2dlMXh1SUNBZ0lHSjFabHR2Wm1aelpYUWdLeUJwWFNBOUlDaDJZV3gxWlNBbUlDZ3dlR1ptSUR3OElDZzRJQ29nS0d4cGRIUnNaVVZ1WkdsaGJpQS9JR2tnT2lBeElDMGdhU2twS1NrZ1BqNCtYRzRnSUNBZ0lDQW9iR2wwZEd4bFJXNWthV0Z1SUQ4Z2FTQTZJREVnTFNCcEtTQXFJRGhjYmlBZ2ZWeHVmVnh1WEc1Q2RXWm1aWEl1Y0hKdmRHOTBlWEJsTG5keWFYUmxWVWx1ZERFMlRFVWdQU0JtZFc1amRHbHZiaUIzY21sMFpWVkpiblF4Tmt4RklDaDJZV3gxWlN3Z2IyWm1jMlYwTENCdWIwRnpjMlZ5ZENrZ2UxeHVJQ0IyWVd4MVpTQTlJQ3QyWVd4MVpWeHVJQ0J2Wm1aelpYUWdQU0J2Wm1aelpYUWdmQ0F3WEc0Z0lHbG1JQ2doYm05QmMzTmxjblFwSUdOb1pXTnJTVzUwS0hSb2FYTXNJSFpoYkhWbExDQnZabVp6WlhRc0lESXNJREI0Wm1abVppd2dNQ2xjYmlBZ2FXWWdLRUoxWm1abGNpNVVXVkJGUkY5QlVsSkJXVjlUVlZCUVQxSlVLU0I3WEc0Z0lDQWdkR2hwYzF0dlptWnpaWFJkSUQwZ0tIWmhiSFZsSUNZZ01IaG1aaWxjYmlBZ0lDQjBhR2x6VzI5bVpuTmxkQ0FySURGZElEMGdLSFpoYkhWbElENCtQaUE0S1Z4dUlDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUc5aWFtVmpkRmR5YVhSbFZVbHVkREUyS0hSb2FYTXNJSFpoYkhWbExDQnZabVp6WlhRc0lIUnlkV1VwWEc0Z0lIMWNiaUFnY21WMGRYSnVJRzltWm5ObGRDQXJJREpjYm4xY2JseHVRblZtWm1WeUxuQnliM1J2ZEhsd1pTNTNjbWwwWlZWSmJuUXhOa0pGSUQwZ1puVnVZM1JwYjI0Z2QzSnBkR1ZWU1c1ME1UWkNSU0FvZG1Gc2RXVXNJRzltWm5ObGRDd2dibTlCYzNObGNuUXBJSHRjYmlBZ2RtRnNkV1VnUFNBcmRtRnNkV1ZjYmlBZ2IyWm1jMlYwSUQwZ2IyWm1jMlYwSUh3Z01GeHVJQ0JwWmlBb0lXNXZRWE56WlhKMEtTQmphR1ZqYTBsdWRDaDBhR2x6TENCMllXeDFaU3dnYjJabWMyVjBMQ0F5TENBd2VHWm1abVlzSURBcFhHNGdJR2xtSUNoQ2RXWm1aWEl1VkZsUVJVUmZRVkpTUVZsZlUxVlFVRTlTVkNrZ2UxeHVJQ0FnSUhSb2FYTmJiMlptYzJWMFhTQTlJQ2gyWVd4MVpTQStQajRnT0NsY2JpQWdJQ0IwYUdselcyOW1abk5sZENBcklERmRJRDBnS0haaGJIVmxJQ1lnTUhobVppbGNiaUFnZlNCbGJITmxJSHRjYmlBZ0lDQnZZbXBsWTNSWGNtbDBaVlZKYm5ReE5paDBhR2x6TENCMllXeDFaU3dnYjJabWMyVjBMQ0JtWVd4elpTbGNiaUFnZlZ4dUlDQnlaWFIxY200Z2IyWm1jMlYwSUNzZ01seHVmVnh1WEc1bWRXNWpkR2x2YmlCdlltcGxZM1JYY21sMFpWVkpiblF6TWlBb1luVm1MQ0IyWVd4MVpTd2diMlptYzJWMExDQnNhWFIwYkdWRmJtUnBZVzRwSUh0Y2JpQWdhV1lnS0haaGJIVmxJRHdnTUNrZ2RtRnNkV1VnUFNBd2VHWm1abVptWm1abUlDc2dkbUZzZFdVZ0t5QXhYRzRnSUdadmNpQW9kbUZ5SUdrZ1BTQXdMQ0JxSUQwZ1RXRjBhQzV0YVc0b1luVm1MbXhsYm1kMGFDQXRJRzltWm5ObGRDd2dOQ2s3SUdrZ1BDQnFPeUFySzJrcElIdGNiaUFnSUNCaWRXWmJiMlptYzJWMElDc2dhVjBnUFNBb2RtRnNkV1VnUGo0K0lDaHNhWFIwYkdWRmJtUnBZVzRnUHlCcElEb2dNeUF0SUdrcElDb2dPQ2tnSmlBd2VHWm1YRzRnSUgxY2JuMWNibHh1UW5WbVptVnlMbkJ5YjNSdmRIbHdaUzUzY21sMFpWVkpiblF6TWt4RklEMGdablZ1WTNScGIyNGdkM0pwZEdWVlNXNTBNekpNUlNBb2RtRnNkV1VzSUc5bVpuTmxkQ3dnYm05QmMzTmxjblFwSUh0Y2JpQWdkbUZzZFdVZ1BTQXJkbUZzZFdWY2JpQWdiMlptYzJWMElEMGdiMlptYzJWMElId2dNRnh1SUNCcFppQW9JVzV2UVhOelpYSjBLU0JqYUdWamEwbHVkQ2gwYUdsekxDQjJZV3gxWlN3Z2IyWm1jMlYwTENBMExDQXdlR1ptWm1abVptWm1MQ0F3S1Z4dUlDQnBaaUFvUW5WbVptVnlMbFJaVUVWRVgwRlNVa0ZaWDFOVlVGQlBVbFFwSUh0Y2JpQWdJQ0IwYUdselcyOW1abk5sZENBcklETmRJRDBnS0haaGJIVmxJRDQrUGlBeU5DbGNiaUFnSUNCMGFHbHpXMjltWm5ObGRDQXJJREpkSUQwZ0tIWmhiSFZsSUQ0K1BpQXhOaWxjYmlBZ0lDQjBhR2x6VzI5bVpuTmxkQ0FySURGZElEMGdLSFpoYkhWbElENCtQaUE0S1Z4dUlDQWdJSFJvYVhOYmIyWm1jMlYwWFNBOUlDaDJZV3gxWlNBbUlEQjRabVlwWEc0Z0lIMGdaV3h6WlNCN1hHNGdJQ0FnYjJKcVpXTjBWM0pwZEdWVlNXNTBNeklvZEdocGN5d2dkbUZzZFdVc0lHOW1abk5sZEN3Z2RISjFaU2xjYmlBZ2ZWeHVJQ0J5WlhSMWNtNGdiMlptYzJWMElDc2dORnh1ZlZ4dVhHNUNkV1ptWlhJdWNISnZkRzkwZVhCbExuZHlhWFJsVlVsdWRETXlRa1VnUFNCbWRXNWpkR2x2YmlCM2NtbDBaVlZKYm5Rek1rSkZJQ2gyWVd4MVpTd2diMlptYzJWMExDQnViMEZ6YzJWeWRDa2dlMXh1SUNCMllXeDFaU0E5SUN0MllXeDFaVnh1SUNCdlptWnpaWFFnUFNCdlptWnpaWFFnZkNBd1hHNGdJR2xtSUNnaGJtOUJjM05sY25RcElHTm9aV05yU1c1MEtIUm9hWE1zSUhaaGJIVmxMQ0J2Wm1aelpYUXNJRFFzSURCNFptWm1abVptWm1Zc0lEQXBYRzRnSUdsbUlDaENkV1ptWlhJdVZGbFFSVVJmUVZKU1FWbGZVMVZRVUU5U1ZDa2dlMXh1SUNBZ0lIUm9hWE5iYjJabWMyVjBYU0E5SUNoMllXeDFaU0ErUGo0Z01qUXBYRzRnSUNBZ2RHaHBjMXR2Wm1aelpYUWdLeUF4WFNBOUlDaDJZV3gxWlNBK1BqNGdNVFlwWEc0Z0lDQWdkR2hwYzF0dlptWnpaWFFnS3lBeVhTQTlJQ2gyWVd4MVpTQStQajRnT0NsY2JpQWdJQ0IwYUdselcyOW1abk5sZENBcklETmRJRDBnS0haaGJIVmxJQ1lnTUhobVppbGNiaUFnZlNCbGJITmxJSHRjYmlBZ0lDQnZZbXBsWTNSWGNtbDBaVlZKYm5Rek1paDBhR2x6TENCMllXeDFaU3dnYjJabWMyVjBMQ0JtWVd4elpTbGNiaUFnZlZ4dUlDQnlaWFIxY200Z2IyWm1jMlYwSUNzZ05GeHVmVnh1WEc1Q2RXWm1aWEl1Y0hKdmRHOTBlWEJsTG5keWFYUmxTVzUwVEVVZ1BTQm1kVzVqZEdsdmJpQjNjbWwwWlVsdWRFeEZJQ2gyWVd4MVpTd2diMlptYzJWMExDQmllWFJsVEdWdVozUm9MQ0J1YjBGemMyVnlkQ2tnZTF4dUlDQjJZV3gxWlNBOUlDdDJZV3gxWlZ4dUlDQnZabVp6WlhRZ1BTQnZabVp6WlhRZ2ZDQXdYRzRnSUdsbUlDZ2hibTlCYzNObGNuUXBJSHRjYmlBZ0lDQjJZWElnYkdsdGFYUWdQU0JOWVhSb0xuQnZkeWd5TENBNElDb2dZbmwwWlV4bGJtZDBhQ0F0SURFcFhHNWNiaUFnSUNCamFHVmphMGx1ZENoMGFHbHpMQ0IyWVd4MVpTd2diMlptYzJWMExDQmllWFJsVEdWdVozUm9MQ0JzYVcxcGRDQXRJREVzSUMxc2FXMXBkQ2xjYmlBZ2ZWeHVYRzRnSUhaaGNpQnBJRDBnTUZ4dUlDQjJZWElnYlhWc0lEMGdNVnh1SUNCMllYSWdjM1ZpSUQwZ01GeHVJQ0IwYUdselcyOW1abk5sZEYwZ1BTQjJZV3gxWlNBbUlEQjRSa1pjYmlBZ2QyaHBiR1VnS0NzcmFTQThJR0o1ZEdWTVpXNW5kR2dnSmlZZ0tHMTFiQ0FxUFNBd2VERXdNQ2twSUh0Y2JpQWdJQ0JwWmlBb2RtRnNkV1VnUENBd0lDWW1JSE4xWWlBOVBUMGdNQ0FtSmlCMGFHbHpXMjltWm5ObGRDQXJJR2tnTFNBeFhTQWhQVDBnTUNrZ2UxeHVJQ0FnSUNBZ2MzVmlJRDBnTVZ4dUlDQWdJSDFjYmlBZ0lDQjBhR2x6VzI5bVpuTmxkQ0FySUdsZElEMGdLQ2gyWVd4MVpTQXZJRzExYkNrZ1BqNGdNQ2tnTFNCemRXSWdKaUF3ZUVaR1hHNGdJSDFjYmx4dUlDQnlaWFIxY200Z2IyWm1jMlYwSUNzZ1lubDBaVXhsYm1kMGFGeHVmVnh1WEc1Q2RXWm1aWEl1Y0hKdmRHOTBlWEJsTG5keWFYUmxTVzUwUWtVZ1BTQm1kVzVqZEdsdmJpQjNjbWwwWlVsdWRFSkZJQ2gyWVd4MVpTd2diMlptYzJWMExDQmllWFJsVEdWdVozUm9MQ0J1YjBGemMyVnlkQ2tnZTF4dUlDQjJZV3gxWlNBOUlDdDJZV3gxWlZ4dUlDQnZabVp6WlhRZ1BTQnZabVp6WlhRZ2ZDQXdYRzRnSUdsbUlDZ2hibTlCYzNObGNuUXBJSHRjYmlBZ0lDQjJZWElnYkdsdGFYUWdQU0JOWVhSb0xuQnZkeWd5TENBNElDb2dZbmwwWlV4bGJtZDBhQ0F0SURFcFhHNWNiaUFnSUNCamFHVmphMGx1ZENoMGFHbHpMQ0IyWVd4MVpTd2diMlptYzJWMExDQmllWFJsVEdWdVozUm9MQ0JzYVcxcGRDQXRJREVzSUMxc2FXMXBkQ2xjYmlBZ2ZWeHVYRzRnSUhaaGNpQnBJRDBnWW5sMFpVeGxibWQwYUNBdElERmNiaUFnZG1GeUlHMTFiQ0E5SURGY2JpQWdkbUZ5SUhOMVlpQTlJREJjYmlBZ2RHaHBjMXR2Wm1aelpYUWdLeUJwWFNBOUlIWmhiSFZsSUNZZ01IaEdSbHh1SUNCM2FHbHNaU0FvTFMxcElENDlJREFnSmlZZ0tHMTFiQ0FxUFNBd2VERXdNQ2twSUh0Y2JpQWdJQ0JwWmlBb2RtRnNkV1VnUENBd0lDWW1JSE4xWWlBOVBUMGdNQ0FtSmlCMGFHbHpXMjltWm5ObGRDQXJJR2tnS3lBeFhTQWhQVDBnTUNrZ2UxeHVJQ0FnSUNBZ2MzVmlJRDBnTVZ4dUlDQWdJSDFjYmlBZ0lDQjBhR2x6VzI5bVpuTmxkQ0FySUdsZElEMGdLQ2gyWVd4MVpTQXZJRzExYkNrZ1BqNGdNQ2tnTFNCemRXSWdKaUF3ZUVaR1hHNGdJSDFjYmx4dUlDQnlaWFIxY200Z2IyWm1jMlYwSUNzZ1lubDBaVXhsYm1kMGFGeHVmVnh1WEc1Q2RXWm1aWEl1Y0hKdmRHOTBlWEJsTG5keWFYUmxTVzUwT0NBOUlHWjFibU4wYVc5dUlIZHlhWFJsU1c1ME9DQW9kbUZzZFdVc0lHOW1abk5sZEN3Z2JtOUJjM05sY25RcElIdGNiaUFnZG1Gc2RXVWdQU0FyZG1Gc2RXVmNiaUFnYjJabWMyVjBJRDBnYjJabWMyVjBJSHdnTUZ4dUlDQnBaaUFvSVc1dlFYTnpaWEowS1NCamFHVmphMGx1ZENoMGFHbHpMQ0IyWVd4MVpTd2diMlptYzJWMExDQXhMQ0F3ZURkbUxDQXRNSGc0TUNsY2JpQWdhV1lnS0NGQ2RXWm1aWEl1VkZsUVJVUmZRVkpTUVZsZlUxVlFVRTlTVkNrZ2RtRnNkV1VnUFNCTllYUm9MbVpzYjI5eUtIWmhiSFZsS1Z4dUlDQnBaaUFvZG1Gc2RXVWdQQ0F3S1NCMllXeDFaU0E5SURCNFptWWdLeUIyWVd4MVpTQXJJREZjYmlBZ2RHaHBjMXR2Wm1aelpYUmRJRDBnS0haaGJIVmxJQ1lnTUhobVppbGNiaUFnY21WMGRYSnVJRzltWm5ObGRDQXJJREZjYm4xY2JseHVRblZtWm1WeUxuQnliM1J2ZEhsd1pTNTNjbWwwWlVsdWRERTJURVVnUFNCbWRXNWpkR2x2YmlCM2NtbDBaVWx1ZERFMlRFVWdLSFpoYkhWbExDQnZabVp6WlhRc0lHNXZRWE56WlhKMEtTQjdYRzRnSUhaaGJIVmxJRDBnSzNaaGJIVmxYRzRnSUc5bVpuTmxkQ0E5SUc5bVpuTmxkQ0I4SURCY2JpQWdhV1lnS0NGdWIwRnpjMlZ5ZENrZ1kyaGxZMnRKYm5Rb2RHaHBjeXdnZG1Gc2RXVXNJRzltWm5ObGRDd2dNaXdnTUhnM1ptWm1MQ0F0TUhnNE1EQXdLVnh1SUNCcFppQW9RblZtWm1WeUxsUlpVRVZFWDBGU1VrRlpYMU5WVUZCUFVsUXBJSHRjYmlBZ0lDQjBhR2x6VzI5bVpuTmxkRjBnUFNBb2RtRnNkV1VnSmlBd2VHWm1LVnh1SUNBZ0lIUm9hWE5iYjJabWMyVjBJQ3NnTVYwZ1BTQW9kbUZzZFdVZ1BqNCtJRGdwWEc0Z0lIMGdaV3h6WlNCN1hHNGdJQ0FnYjJKcVpXTjBWM0pwZEdWVlNXNTBNVFlvZEdocGN5d2dkbUZzZFdVc0lHOW1abk5sZEN3Z2RISjFaU2xjYmlBZ2ZWeHVJQ0J5WlhSMWNtNGdiMlptYzJWMElDc2dNbHh1ZlZ4dVhHNUNkV1ptWlhJdWNISnZkRzkwZVhCbExuZHlhWFJsU1c1ME1UWkNSU0E5SUdaMWJtTjBhVzl1SUhkeWFYUmxTVzUwTVRaQ1JTQW9kbUZzZFdVc0lHOW1abk5sZEN3Z2JtOUJjM05sY25RcElIdGNiaUFnZG1Gc2RXVWdQU0FyZG1Gc2RXVmNiaUFnYjJabWMyVjBJRDBnYjJabWMyVjBJSHdnTUZ4dUlDQnBaaUFvSVc1dlFYTnpaWEowS1NCamFHVmphMGx1ZENoMGFHbHpMQ0IyWVd4MVpTd2diMlptYzJWMExDQXlMQ0F3ZURkbVptWXNJQzB3ZURnd01EQXBYRzRnSUdsbUlDaENkV1ptWlhJdVZGbFFSVVJmUVZKU1FWbGZVMVZRVUU5U1ZDa2dlMXh1SUNBZ0lIUm9hWE5iYjJabWMyVjBYU0E5SUNoMllXeDFaU0ErUGo0Z09DbGNiaUFnSUNCMGFHbHpXMjltWm5ObGRDQXJJREZkSUQwZ0tIWmhiSFZsSUNZZ01IaG1aaWxjYmlBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0J2WW1wbFkzUlhjbWwwWlZWSmJuUXhOaWgwYUdsekxDQjJZV3gxWlN3Z2IyWm1jMlYwTENCbVlXeHpaU2xjYmlBZ2ZWeHVJQ0J5WlhSMWNtNGdiMlptYzJWMElDc2dNbHh1ZlZ4dVhHNUNkV1ptWlhJdWNISnZkRzkwZVhCbExuZHlhWFJsU1c1ME16Sk1SU0E5SUdaMWJtTjBhVzl1SUhkeWFYUmxTVzUwTXpKTVJTQW9kbUZzZFdVc0lHOW1abk5sZEN3Z2JtOUJjM05sY25RcElIdGNiaUFnZG1Gc2RXVWdQU0FyZG1Gc2RXVmNiaUFnYjJabWMyVjBJRDBnYjJabWMyVjBJSHdnTUZ4dUlDQnBaaUFvSVc1dlFYTnpaWEowS1NCamFHVmphMGx1ZENoMGFHbHpMQ0IyWVd4MVpTd2diMlptYzJWMExDQTBMQ0F3ZURkbVptWm1abVptTENBdE1IZzRNREF3TURBd01DbGNiaUFnYVdZZ0tFSjFabVpsY2k1VVdWQkZSRjlCVWxKQldWOVRWVkJRVDFKVUtTQjdYRzRnSUNBZ2RHaHBjMXR2Wm1aelpYUmRJRDBnS0haaGJIVmxJQ1lnTUhobVppbGNiaUFnSUNCMGFHbHpXMjltWm5ObGRDQXJJREZkSUQwZ0tIWmhiSFZsSUQ0K1BpQTRLVnh1SUNBZ0lIUm9hWE5iYjJabWMyVjBJQ3NnTWwwZ1BTQW9kbUZzZFdVZ1BqNCtJREUyS1Z4dUlDQWdJSFJvYVhOYmIyWm1jMlYwSUNzZ00xMGdQU0FvZG1Gc2RXVWdQajQrSURJMEtWeHVJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lHOWlhbVZqZEZkeWFYUmxWVWx1ZERNeUtIUm9hWE1zSUhaaGJIVmxMQ0J2Wm1aelpYUXNJSFJ5ZFdVcFhHNGdJSDFjYmlBZ2NtVjBkWEp1SUc5bVpuTmxkQ0FySURSY2JuMWNibHh1UW5WbVptVnlMbkJ5YjNSdmRIbHdaUzUzY21sMFpVbHVkRE15UWtVZ1BTQm1kVzVqZEdsdmJpQjNjbWwwWlVsdWRETXlRa1VnS0haaGJIVmxMQ0J2Wm1aelpYUXNJRzV2UVhOelpYSjBLU0I3WEc0Z0lIWmhiSFZsSUQwZ0szWmhiSFZsWEc0Z0lHOW1abk5sZENBOUlHOW1abk5sZENCOElEQmNiaUFnYVdZZ0tDRnViMEZ6YzJWeWRDa2dZMmhsWTJ0SmJuUW9kR2hwY3l3Z2RtRnNkV1VzSUc5bVpuTmxkQ3dnTkN3Z01IZzNabVptWm1abVppd2dMVEI0T0RBd01EQXdNREFwWEc0Z0lHbG1JQ2gyWVd4MVpTQThJREFwSUhaaGJIVmxJRDBnTUhobVptWm1abVptWmlBcklIWmhiSFZsSUNzZ01WeHVJQ0JwWmlBb1FuVm1abVZ5TGxSWlVFVkVYMEZTVWtGWlgxTlZVRkJQVWxRcElIdGNiaUFnSUNCMGFHbHpXMjltWm5ObGRGMGdQU0FvZG1Gc2RXVWdQajQrSURJMEtWeHVJQ0FnSUhSb2FYTmJiMlptYzJWMElDc2dNVjBnUFNBb2RtRnNkV1VnUGo0K0lERTJLVnh1SUNBZ0lIUm9hWE5iYjJabWMyVjBJQ3NnTWwwZ1BTQW9kbUZzZFdVZ1BqNCtJRGdwWEc0Z0lDQWdkR2hwYzF0dlptWnpaWFFnS3lBelhTQTlJQ2gyWVd4MVpTQW1JREI0Wm1ZcFhHNGdJSDBnWld4elpTQjdYRzRnSUNBZ2IySnFaV04wVjNKcGRHVlZTVzUwTXpJb2RHaHBjeXdnZG1Gc2RXVXNJRzltWm5ObGRDd2dabUZzYzJVcFhHNGdJSDFjYmlBZ2NtVjBkWEp1SUc5bVpuTmxkQ0FySURSY2JuMWNibHh1Wm5WdVkzUnBiMjRnWTJobFkydEpSVVZGTnpVMElDaGlkV1lzSUhaaGJIVmxMQ0J2Wm1aelpYUXNJR1Y0ZEN3Z2JXRjRMQ0J0YVc0cElIdGNiaUFnYVdZZ0tHOW1abk5sZENBcklHVjRkQ0ErSUdKMVppNXNaVzVuZEdncElIUm9jbTkzSUc1bGR5QlNZVzVuWlVWeWNtOXlLQ2RKYm1SbGVDQnZkWFFnYjJZZ2NtRnVaMlVuS1Z4dUlDQnBaaUFvYjJabWMyVjBJRHdnTUNrZ2RHaHliM2NnYm1WM0lGSmhibWRsUlhKeWIzSW9KMGx1WkdWNElHOTFkQ0J2WmlCeVlXNW5aU2NwWEc1OVhHNWNibVoxYm1OMGFXOXVJSGR5YVhSbFJteHZZWFFnS0dKMVppd2dkbUZzZFdVc0lHOW1abk5sZEN3Z2JHbDBkR3hsUlc1a2FXRnVMQ0J1YjBGemMyVnlkQ2tnZTF4dUlDQnBaaUFvSVc1dlFYTnpaWEowS1NCN1hHNGdJQ0FnWTJobFkydEpSVVZGTnpVMEtHSjFaaXdnZG1Gc2RXVXNJRzltWm5ObGRDd2dOQ3dnTXk0ME1ESTRNak0wTmpZek9EVXlPRGcyWlNzek9Dd2dMVE11TkRBeU9ESXpORFkyTXpnMU1qZzRObVVyTXpncFhHNGdJSDFjYmlBZ2FXVmxaVGMxTkM1M2NtbDBaU2hpZFdZc0lIWmhiSFZsTENCdlptWnpaWFFzSUd4cGRIUnNaVVZ1WkdsaGJpd2dNak1zSURRcFhHNGdJSEpsZEhWeWJpQnZabVp6WlhRZ0t5QTBYRzU5WEc1Y2JrSjFabVpsY2k1d2NtOTBiM1I1Y0dVdWQzSnBkR1ZHYkc5aGRFeEZJRDBnWm5WdVkzUnBiMjRnZDNKcGRHVkdiRzloZEV4RklDaDJZV3gxWlN3Z2IyWm1jMlYwTENCdWIwRnpjMlZ5ZENrZ2UxeHVJQ0J5WlhSMWNtNGdkM0pwZEdWR2JHOWhkQ2gwYUdsekxDQjJZV3gxWlN3Z2IyWm1jMlYwTENCMGNuVmxMQ0J1YjBGemMyVnlkQ2xjYm4xY2JseHVRblZtWm1WeUxuQnliM1J2ZEhsd1pTNTNjbWwwWlVac2IyRjBRa1VnUFNCbWRXNWpkR2x2YmlCM2NtbDBaVVpzYjJGMFFrVWdLSFpoYkhWbExDQnZabVp6WlhRc0lHNXZRWE56WlhKMEtTQjdYRzRnSUhKbGRIVnliaUIzY21sMFpVWnNiMkYwS0hSb2FYTXNJSFpoYkhWbExDQnZabVp6WlhRc0lHWmhiSE5sTENCdWIwRnpjMlZ5ZENsY2JuMWNibHh1Wm5WdVkzUnBiMjRnZDNKcGRHVkViM1ZpYkdVZ0tHSjFaaXdnZG1Gc2RXVXNJRzltWm5ObGRDd2diR2wwZEd4bFJXNWthV0Z1TENCdWIwRnpjMlZ5ZENrZ2UxeHVJQ0JwWmlBb0lXNXZRWE56WlhKMEtTQjdYRzRnSUNBZ1kyaGxZMnRKUlVWRk56VTBLR0oxWml3Z2RtRnNkV1VzSUc5bVpuTmxkQ3dnT0N3Z01TNDNPVGMyT1RNeE16UTROakl6TVRVM1JTc3pNRGdzSUMweExqYzVOelk1TXpFek5EZzJNak14TlRkRkt6TXdPQ2xjYmlBZ2ZWeHVJQ0JwWldWbE56VTBMbmR5YVhSbEtHSjFaaXdnZG1Gc2RXVXNJRzltWm5ObGRDd2diR2wwZEd4bFJXNWthV0Z1TENBMU1pd2dPQ2xjYmlBZ2NtVjBkWEp1SUc5bVpuTmxkQ0FySURoY2JuMWNibHh1UW5WbVptVnlMbkJ5YjNSdmRIbHdaUzUzY21sMFpVUnZkV0pzWlV4RklEMGdablZ1WTNScGIyNGdkM0pwZEdWRWIzVmliR1ZNUlNBb2RtRnNkV1VzSUc5bVpuTmxkQ3dnYm05QmMzTmxjblFwSUh0Y2JpQWdjbVYwZFhKdUlIZHlhWFJsUkc5MVlteGxLSFJvYVhNc0lIWmhiSFZsTENCdlptWnpaWFFzSUhSeWRXVXNJRzV2UVhOelpYSjBLVnh1ZlZ4dVhHNUNkV1ptWlhJdWNISnZkRzkwZVhCbExuZHlhWFJsUkc5MVlteGxRa1VnUFNCbWRXNWpkR2x2YmlCM2NtbDBaVVJ2ZFdKc1pVSkZJQ2gyWVd4MVpTd2diMlptYzJWMExDQnViMEZ6YzJWeWRDa2dlMXh1SUNCeVpYUjFjbTRnZDNKcGRHVkViM1ZpYkdVb2RHaHBjeXdnZG1Gc2RXVXNJRzltWm5ObGRDd2dabUZzYzJVc0lHNXZRWE56WlhKMEtWeHVmVnh1WEc0dkx5QmpiM0I1S0hSaGNtZGxkRUoxWm1abGNpd2dkR0Z5WjJWMFUzUmhjblE5TUN3Z2MyOTFjbU5sVTNSaGNuUTlNQ3dnYzI5MWNtTmxSVzVrUFdKMVptWmxjaTVzWlc1bmRHZ3BYRzVDZFdabVpYSXVjSEp2ZEc5MGVYQmxMbU52Y0hrZ1BTQm1kVzVqZEdsdmJpQmpiM0I1SUNoMFlYSm5aWFFzSUhSaGNtZGxkRk4wWVhKMExDQnpkR0Z5ZEN3Z1pXNWtLU0I3WEc0Z0lHbG1JQ2doYzNSaGNuUXBJSE4wWVhKMElEMGdNRnh1SUNCcFppQW9JV1Z1WkNBbUppQmxibVFnSVQwOUlEQXBJR1Z1WkNBOUlIUm9hWE11YkdWdVozUm9YRzRnSUdsbUlDaDBZWEpuWlhSVGRHRnlkQ0ErUFNCMFlYSm5aWFF1YkdWdVozUm9LU0IwWVhKblpYUlRkR0Z5ZENBOUlIUmhjbWRsZEM1c1pXNW5kR2hjYmlBZ2FXWWdLQ0YwWVhKblpYUlRkR0Z5ZENrZ2RHRnlaMlYwVTNSaGNuUWdQU0F3WEc0Z0lHbG1JQ2hsYm1RZ1BpQXdJQ1ltSUdWdVpDQThJSE4wWVhKMEtTQmxibVFnUFNCemRHRnlkRnh1WEc0Z0lDOHZJRU52Y0hrZ01DQmllWFJsY3pzZ2QyVW5jbVVnWkc5dVpWeHVJQ0JwWmlBb1pXNWtJRDA5UFNCemRHRnlkQ2tnY21WMGRYSnVJREJjYmlBZ2FXWWdLSFJoY21kbGRDNXNaVzVuZEdnZ1BUMDlJREFnZkh3Z2RHaHBjeTVzWlc1bmRHZ2dQVDA5SURBcElISmxkSFZ5YmlBd1hHNWNiaUFnTHk4Z1JtRjBZV3dnWlhKeWIzSWdZMjl1WkdsMGFXOXVjMXh1SUNCcFppQW9kR0Z5WjJWMFUzUmhjblFnUENBd0tTQjdYRzRnSUNBZ2RHaHliM2NnYm1WM0lGSmhibWRsUlhKeWIzSW9KM1JoY21kbGRGTjBZWEowSUc5MWRDQnZaaUJpYjNWdVpITW5LVnh1SUNCOVhHNGdJR2xtSUNoemRHRnlkQ0E4SURBZ2ZId2djM1JoY25RZ1BqMGdkR2hwY3k1c1pXNW5kR2dwSUhSb2NtOTNJRzVsZHlCU1lXNW5aVVZ5Y205eUtDZHpiM1Z5WTJWVGRHRnlkQ0J2ZFhRZ2IyWWdZbTkxYm1Sekp5bGNiaUFnYVdZZ0tHVnVaQ0E4SURBcElIUm9jbTkzSUc1bGR5QlNZVzVuWlVWeWNtOXlLQ2R6YjNWeVkyVkZibVFnYjNWMElHOW1JR0p2ZFc1a2N5Y3BYRzVjYmlBZ0x5OGdRWEpsSUhkbElHOXZZajljYmlBZ2FXWWdLR1Z1WkNBK0lIUm9hWE11YkdWdVozUm9LU0JsYm1RZ1BTQjBhR2x6TG14bGJtZDBhRnh1SUNCcFppQW9kR0Z5WjJWMExteGxibWQwYUNBdElIUmhjbWRsZEZOMFlYSjBJRHdnWlc1a0lDMGdjM1JoY25RcElIdGNiaUFnSUNCbGJtUWdQU0IwWVhKblpYUXViR1Z1WjNSb0lDMGdkR0Z5WjJWMFUzUmhjblFnS3lCemRHRnlkRnh1SUNCOVhHNWNiaUFnZG1GeUlHeGxiaUE5SUdWdVpDQXRJSE4wWVhKMFhHNGdJSFpoY2lCcFhHNWNiaUFnYVdZZ0tIUm9hWE1nUFQwOUlIUmhjbWRsZENBbUppQnpkR0Z5ZENBOElIUmhjbWRsZEZOMFlYSjBJQ1ltSUhSaGNtZGxkRk4wWVhKMElEd2daVzVrS1NCN1hHNGdJQ0FnTHk4Z1pHVnpZMlZ1WkdsdVp5QmpiM0I1SUdaeWIyMGdaVzVrWEc0Z0lDQWdabTl5SUNocElEMGdiR1Z1SUMwZ01Uc2dhU0ErUFNBd095QXRMV2twSUh0Y2JpQWdJQ0FnSUhSaGNtZGxkRnRwSUNzZ2RHRnlaMlYwVTNSaGNuUmRJRDBnZEdocGMxdHBJQ3NnYzNSaGNuUmRYRzRnSUNBZ2ZWeHVJQ0I5SUdWc2MyVWdhV1lnS0d4bGJpQThJREV3TURBZ2ZId2dJVUoxWm1abGNpNVVXVkJGUkY5QlVsSkJXVjlUVlZCUVQxSlVLU0I3WEc0Z0lDQWdMeThnWVhOalpXNWthVzVuSUdOdmNIa2dabkp2YlNCemRHRnlkRnh1SUNBZ0lHWnZjaUFvYVNBOUlEQTdJR2tnUENCc1pXNDdJQ3NyYVNrZ2UxeHVJQ0FnSUNBZ2RHRnlaMlYwVzJrZ0t5QjBZWEpuWlhSVGRHRnlkRjBnUFNCMGFHbHpXMmtnS3lCemRHRnlkRjFjYmlBZ0lDQjlYRzRnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdWV2x1ZERoQmNuSmhlUzV3Y205MGIzUjVjR1V1YzJWMExtTmhiR3dvWEc0Z0lDQWdJQ0IwWVhKblpYUXNYRzRnSUNBZ0lDQjBhR2x6TG5OMVltRnljbUY1S0hOMFlYSjBMQ0J6ZEdGeWRDQXJJR3hsYmlrc1hHNGdJQ0FnSUNCMFlYSm5aWFJUZEdGeWRGeHVJQ0FnSUNsY2JpQWdmVnh1WEc0Z0lISmxkSFZ5YmlCc1pXNWNibjFjYmx4dUx5OGdWWE5oWjJVNlhHNHZMeUFnSUNCaWRXWm1aWEl1Wm1sc2JDaHVkVzFpWlhKYkxDQnZabVp6WlhSYkxDQmxibVJkWFNsY2JpOHZJQ0FnSUdKMVptWmxjaTVtYVd4c0tHSjFabVpsY2xzc0lHOW1abk5sZEZzc0lHVnVaRjFkS1Z4dUx5OGdJQ0FnWW5WbVptVnlMbVpwYkd3b2MzUnlhVzVuV3l3Z2IyWm1jMlYwV3l3Z1pXNWtYVjFiTENCbGJtTnZaR2x1WjEwcFhHNUNkV1ptWlhJdWNISnZkRzkwZVhCbExtWnBiR3dnUFNCbWRXNWpkR2x2YmlCbWFXeHNJQ2gyWVd3c0lITjBZWEowTENCbGJtUXNJR1Z1WTI5a2FXNW5LU0I3WEc0Z0lDOHZJRWhoYm1Sc1pTQnpkSEpwYm1jZ1kyRnpaWE02WEc0Z0lHbG1JQ2gwZVhCbGIyWWdkbUZzSUQwOVBTQW5jM1J5YVc1bkp5a2dlMXh1SUNBZ0lHbG1JQ2gwZVhCbGIyWWdjM1JoY25RZ1BUMDlJQ2R6ZEhKcGJtY25LU0I3WEc0Z0lDQWdJQ0JsYm1OdlpHbHVaeUE5SUhOMFlYSjBYRzRnSUNBZ0lDQnpkR0Z5ZENBOUlEQmNiaUFnSUNBZ0lHVnVaQ0E5SUhSb2FYTXViR1Z1WjNSb1hHNGdJQ0FnZlNCbGJITmxJR2xtSUNoMGVYQmxiMllnWlc1a0lEMDlQU0FuYzNSeWFXNW5KeWtnZTF4dUlDQWdJQ0FnWlc1amIyUnBibWNnUFNCbGJtUmNiaUFnSUNBZ0lHVnVaQ0E5SUhSb2FYTXViR1Z1WjNSb1hHNGdJQ0FnZlZ4dUlDQWdJR2xtSUNoMllXd3ViR1Z1WjNSb0lEMDlQU0F4S1NCN1hHNGdJQ0FnSUNCMllYSWdZMjlrWlNBOUlIWmhiQzVqYUdGeVEyOWtaVUYwS0RBcFhHNGdJQ0FnSUNCcFppQW9ZMjlrWlNBOElESTFOaWtnZTF4dUlDQWdJQ0FnSUNCMllXd2dQU0JqYjJSbFhHNGdJQ0FnSUNCOVhHNGdJQ0FnZlZ4dUlDQWdJR2xtSUNobGJtTnZaR2x1WnlBaFBUMGdkVzVrWldacGJtVmtJQ1ltSUhSNWNHVnZaaUJsYm1OdlpHbHVaeUFoUFQwZ0ozTjBjbWx1WnljcElIdGNiaUFnSUNBZ0lIUm9jbTkzSUc1bGR5QlVlWEJsUlhKeWIzSW9KMlZ1WTI5a2FXNW5JRzExYzNRZ1ltVWdZU0J6ZEhKcGJtY25LVnh1SUNBZ0lIMWNiaUFnSUNCcFppQW9kSGx3Wlc5bUlHVnVZMjlrYVc1bklEMDlQU0FuYzNSeWFXNW5KeUFtSmlBaFFuVm1abVZ5TG1selJXNWpiMlJwYm1jb1pXNWpiMlJwYm1jcEtTQjdYRzRnSUNBZ0lDQjBhSEp2ZHlCdVpYY2dWSGx3WlVWeWNtOXlLQ2RWYm10dWIzZHVJR1Z1WTI5a2FXNW5PaUFuSUNzZ1pXNWpiMlJwYm1jcFhHNGdJQ0FnZlZ4dUlDQjlJR1ZzYzJVZ2FXWWdLSFI1Y0dWdlppQjJZV3dnUFQwOUlDZHVkVzFpWlhJbktTQjdYRzRnSUNBZ2RtRnNJRDBnZG1Gc0lDWWdNalUxWEc0Z0lIMWNibHh1SUNBdkx5QkpiblpoYkdsa0lISmhibWRsY3lCaGNtVWdibTkwSUhObGRDQjBieUJoSUdSbFptRjFiSFFzSUhOdklHTmhiaUJ5WVc1blpTQmphR1ZqYXlCbFlYSnNlUzVjYmlBZ2FXWWdLSE4wWVhKMElEd2dNQ0I4ZkNCMGFHbHpMbXhsYm1kMGFDQThJSE4wWVhKMElIeDhJSFJvYVhNdWJHVnVaM1JvSUR3Z1pXNWtLU0I3WEc0Z0lDQWdkR2h5YjNjZ2JtVjNJRkpoYm1kbFJYSnliM0lvSjA5MWRDQnZaaUJ5WVc1blpTQnBibVJsZUNjcFhHNGdJSDFjYmx4dUlDQnBaaUFvWlc1a0lEdzlJSE4wWVhKMEtTQjdYRzRnSUNBZ2NtVjBkWEp1SUhSb2FYTmNiaUFnZlZ4dVhHNGdJSE4wWVhKMElEMGdjM1JoY25RZ1BqNCtJREJjYmlBZ1pXNWtJRDBnWlc1a0lEMDlQU0IxYm1SbFptbHVaV1FnUHlCMGFHbHpMbXhsYm1kMGFDQTZJR1Z1WkNBK1BqNGdNRnh1WEc0Z0lHbG1JQ2doZG1Gc0tTQjJZV3dnUFNBd1hHNWNiaUFnZG1GeUlHbGNiaUFnYVdZZ0tIUjVjR1Z2WmlCMllXd2dQVDA5SUNkdWRXMWlaWEluS1NCN1hHNGdJQ0FnWm05eUlDaHBJRDBnYzNSaGNuUTdJR2tnUENCbGJtUTdJQ3NyYVNrZ2UxeHVJQ0FnSUNBZ2RHaHBjMXRwWFNBOUlIWmhiRnh1SUNBZ0lIMWNiaUFnZlNCbGJITmxJSHRjYmlBZ0lDQjJZWElnWW5sMFpYTWdQU0JDZFdabVpYSXVhWE5DZFdabVpYSW9kbUZzS1Z4dUlDQWdJQ0FnUHlCMllXeGNiaUFnSUNBZ0lEb2dkWFJtT0ZSdlFubDBaWE1vYm1WM0lFSjFabVpsY2loMllXd3NJR1Z1WTI5a2FXNW5LUzUwYjFOMGNtbHVaeWdwS1Z4dUlDQWdJSFpoY2lCc1pXNGdQU0JpZVhSbGN5NXNaVzVuZEdoY2JpQWdJQ0JtYjNJZ0tHa2dQU0F3T3lCcElEd2daVzVrSUMwZ2MzUmhjblE3SUNzcmFTa2dlMXh1SUNBZ0lDQWdkR2hwYzF0cElDc2djM1JoY25SZElEMGdZbmwwWlhOYmFTQWxJR3hsYmwxY2JpQWdJQ0I5WEc0Z0lIMWNibHh1SUNCeVpYUjFjbTRnZEdocGMxeHVmVnh1WEc0dkx5QklSVXhRUlZJZ1JsVk9RMVJKVDA1VFhHNHZMeUE5UFQwOVBUMDlQVDA5UFQwOVBUMDlYRzVjYm5aaGNpQkpUbFpCVEVsRVgwSkJVMFUyTkY5U1JTQTlJQzliWGl0Y1hDOHdMVGxCTFZwaExYb3RYMTB2WjF4dVhHNW1kVzVqZEdsdmJpQmlZWE5sTmpSamJHVmhiaUFvYzNSeUtTQjdYRzRnSUM4dklFNXZaR1VnYzNSeWFYQnpJRzkxZENCcGJuWmhiR2xrSUdOb1lYSmhZM1JsY25NZ2JHbHJaU0JjWEc0Z1lXNWtJRnhjZENCbWNtOXRJSFJvWlNCemRISnBibWNzSUdKaGMyVTJOQzFxY3lCa2IyVnpJRzV2ZEZ4dUlDQnpkSElnUFNCemRISnBibWQwY21sdEtITjBjaWt1Y21Wd2JHRmpaU2hKVGxaQlRFbEVYMEpCVTBVMk5GOVNSU3dnSnljcFhHNGdJQzh2SUU1dlpHVWdZMjl1ZG1WeWRITWdjM1J5YVc1bmN5QjNhWFJvSUd4bGJtZDBhQ0E4SURJZ2RHOGdKeWRjYmlBZ2FXWWdLSE4wY2k1c1pXNW5kR2dnUENBeUtTQnlaWFIxY200Z0p5ZGNiaUFnTHk4Z1RtOWtaU0JoYkd4dmQzTWdabTl5SUc1dmJpMXdZV1JrWldRZ1ltRnpaVFkwSUhOMGNtbHVaM01nS0cxcGMzTnBibWNnZEhKaGFXeHBibWNnUFQwOUtTd2dZbUZ6WlRZMExXcHpJR1J2WlhNZ2JtOTBYRzRnSUhkb2FXeGxJQ2h6ZEhJdWJHVnVaM1JvSUNVZ05DQWhQVDBnTUNrZ2UxeHVJQ0FnSUhOMGNpQTlJSE4wY2lBcklDYzlKMXh1SUNCOVhHNGdJSEpsZEhWeWJpQnpkSEpjYm4xY2JseHVablZ1WTNScGIyNGdjM1J5YVc1bmRISnBiU0FvYzNSeUtTQjdYRzRnSUdsbUlDaHpkSEl1ZEhKcGJTa2djbVYwZFhKdUlITjBjaTUwY21sdEtDbGNiaUFnY21WMGRYSnVJSE4wY2k1eVpYQnNZV05sS0M5ZVhGeHpLM3hjWEhNckpDOW5MQ0FuSnlsY2JuMWNibHh1Wm5WdVkzUnBiMjRnZEc5SVpYZ2dLRzRwSUh0Y2JpQWdhV1lnS0c0Z1BDQXhOaWtnY21WMGRYSnVJQ2N3SnlBcklHNHVkRzlUZEhKcGJtY29NVFlwWEc0Z0lISmxkSFZ5YmlCdUxuUnZVM1J5YVc1bktERTJLVnh1ZlZ4dVhHNW1kVzVqZEdsdmJpQjFkR1k0Vkc5Q2VYUmxjeUFvYzNSeWFXNW5MQ0IxYm1sMGN5a2dlMXh1SUNCMWJtbDBjeUE5SUhWdWFYUnpJSHg4SUVsdVptbHVhWFI1WEc0Z0lIWmhjaUJqYjJSbFVHOXBiblJjYmlBZ2RtRnlJR3hsYm1kMGFDQTlJSE4wY21sdVp5NXNaVzVuZEdoY2JpQWdkbUZ5SUd4bFlXUlRkWEp5YjJkaGRHVWdQU0J1ZFd4c1hHNGdJSFpoY2lCaWVYUmxjeUE5SUZ0ZFhHNWNiaUFnWm05eUlDaDJZWElnYVNBOUlEQTdJR2tnUENCc1pXNW5kR2c3SUNzcmFTa2dlMXh1SUNBZ0lHTnZaR1ZRYjJsdWRDQTlJSE4wY21sdVp5NWphR0Z5UTI5a1pVRjBLR2twWEc1Y2JpQWdJQ0F2THlCcGN5QnpkWEp5YjJkaGRHVWdZMjl0Y0c5dVpXNTBYRzRnSUNBZ2FXWWdLR052WkdWUWIybHVkQ0ErSURCNFJEZEdSaUFtSmlCamIyUmxVRzlwYm5RZ1BDQXdlRVV3TURBcElIdGNiaUFnSUNBZ0lDOHZJR3hoYzNRZ1kyaGhjaUIzWVhNZ1lTQnNaV0ZrWEc0Z0lDQWdJQ0JwWmlBb0lXeGxZV1JUZFhKeWIyZGhkR1VwSUh0Y2JpQWdJQ0FnSUNBZ0x5OGdibThnYkdWaFpDQjVaWFJjYmlBZ0lDQWdJQ0FnYVdZZ0tHTnZaR1ZRYjJsdWRDQStJREI0UkVKR1Jpa2dlMXh1SUNBZ0lDQWdJQ0FnSUM4dklIVnVaWGh3WldOMFpXUWdkSEpoYVd4Y2JpQWdJQ0FnSUNBZ0lDQnBaaUFvS0hWdWFYUnpJQzA5SURNcElENGdMVEVwSUdKNWRHVnpMbkIxYzJnb01IaEZSaXdnTUhoQ1Jpd2dNSGhDUkNsY2JpQWdJQ0FnSUNBZ0lDQmpiMjUwYVc1MVpWeHVJQ0FnSUNBZ0lDQjlJR1ZzYzJVZ2FXWWdLR2tnS3lBeElEMDlQU0JzWlc1bmRHZ3BJSHRjYmlBZ0lDQWdJQ0FnSUNBdkx5QjFibkJoYVhKbFpDQnNaV0ZrWEc0Z0lDQWdJQ0FnSUNBZ2FXWWdLQ2gxYm1sMGN5QXRQU0F6S1NBK0lDMHhLU0JpZVhSbGN5NXdkWE5vS0RCNFJVWXNJREI0UWtZc0lEQjRRa1FwWEc0Z0lDQWdJQ0FnSUNBZ1kyOXVkR2x1ZFdWY2JpQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJQzh2SUhaaGJHbGtJR3hsWVdSY2JpQWdJQ0FnSUNBZ2JHVmhaRk4xY25KdloyRjBaU0E5SUdOdlpHVlFiMmx1ZEZ4dVhHNGdJQ0FnSUNBZ0lHTnZiblJwYm5WbFhHNGdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDOHZJRElnYkdWaFpITWdhVzRnWVNCeWIzZGNiaUFnSUNBZ0lHbG1JQ2hqYjJSbFVHOXBiblFnUENBd2VFUkRNREFwSUh0Y2JpQWdJQ0FnSUNBZ2FXWWdLQ2gxYm1sMGN5QXRQU0F6S1NBK0lDMHhLU0JpZVhSbGN5NXdkWE5vS0RCNFJVWXNJREI0UWtZc0lEQjRRa1FwWEc0Z0lDQWdJQ0FnSUd4bFlXUlRkWEp5YjJkaGRHVWdQU0JqYjJSbFVHOXBiblJjYmlBZ0lDQWdJQ0FnWTI5dWRHbHVkV1ZjYmlBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnTHk4Z2RtRnNhV1FnYzNWeWNtOW5ZWFJsSUhCaGFYSmNiaUFnSUNBZ0lHTnZaR1ZRYjJsdWRDQTlJQ2hzWldGa1UzVnljbTluWVhSbElDMGdNSGhFT0RBd0lEdzhJREV3SUh3Z1kyOWtaVkJ2YVc1MElDMGdNSGhFUXpBd0tTQXJJREI0TVRBd01EQmNiaUFnSUNCOUlHVnNjMlVnYVdZZ0tHeGxZV1JUZFhKeWIyZGhkR1VwSUh0Y2JpQWdJQ0FnSUM4dklIWmhiR2xrSUdKdGNDQmphR0Z5TENCaWRYUWdiR0Z6ZENCamFHRnlJSGRoY3lCaElHeGxZV1JjYmlBZ0lDQWdJR2xtSUNnb2RXNXBkSE1nTFQwZ015a2dQaUF0TVNrZ1lubDBaWE11Y0hWemFDZ3dlRVZHTENBd2VFSkdMQ0F3ZUVKRUtWeHVJQ0FnSUgxY2JseHVJQ0FnSUd4bFlXUlRkWEp5YjJkaGRHVWdQU0J1ZFd4c1hHNWNiaUFnSUNBdkx5QmxibU52WkdVZ2RYUm1PRnh1SUNBZ0lHbG1JQ2hqYjJSbFVHOXBiblFnUENBd2VEZ3dLU0I3WEc0Z0lDQWdJQ0JwWmlBb0tIVnVhWFJ6SUMwOUlERXBJRHdnTUNrZ1luSmxZV3RjYmlBZ0lDQWdJR0o1ZEdWekxuQjFjMmdvWTI5a1pWQnZhVzUwS1Z4dUlDQWdJSDBnWld4elpTQnBaaUFvWTI5a1pWQnZhVzUwSUR3Z01IZzRNREFwSUh0Y2JpQWdJQ0FnSUdsbUlDZ29kVzVwZEhNZ0xUMGdNaWtnUENBd0tTQmljbVZoYTF4dUlDQWdJQ0FnWW5sMFpYTXVjSFZ6YUNoY2JpQWdJQ0FnSUNBZ1kyOWtaVkJ2YVc1MElENCtJREI0TmlCOElEQjRRekFzWEc0Z0lDQWdJQ0FnSUdOdlpHVlFiMmx1ZENBbUlEQjRNMFlnZkNBd2VEZ3dYRzRnSUNBZ0lDQXBYRzRnSUNBZ2ZTQmxiSE5sSUdsbUlDaGpiMlJsVUc5cGJuUWdQQ0F3ZURFd01EQXdLU0I3WEc0Z0lDQWdJQ0JwWmlBb0tIVnVhWFJ6SUMwOUlETXBJRHdnTUNrZ1luSmxZV3RjYmlBZ0lDQWdJR0o1ZEdWekxuQjFjMmdvWEc0Z0lDQWdJQ0FnSUdOdlpHVlFiMmx1ZENBK1BpQXdlRU1nZkNBd2VFVXdMRnh1SUNBZ0lDQWdJQ0JqYjJSbFVHOXBiblFnUGo0Z01IZzJJQ1lnTUhnelJpQjhJREI0T0RBc1hHNGdJQ0FnSUNBZ0lHTnZaR1ZRYjJsdWRDQW1JREI0TTBZZ2ZDQXdlRGd3WEc0Z0lDQWdJQ0FwWEc0Z0lDQWdmU0JsYkhObElHbG1JQ2hqYjJSbFVHOXBiblFnUENBd2VERXhNREF3TUNrZ2UxeHVJQ0FnSUNBZ2FXWWdLQ2gxYm1sMGN5QXRQU0EwS1NBOElEQXBJR0p5WldGclhHNGdJQ0FnSUNCaWVYUmxjeTV3ZFhOb0tGeHVJQ0FnSUNBZ0lDQmpiMlJsVUc5cGJuUWdQajRnTUhneE1pQjhJREI0UmpBc1hHNGdJQ0FnSUNBZ0lHTnZaR1ZRYjJsdWRDQStQaUF3ZUVNZ0ppQXdlRE5HSUh3Z01IZzRNQ3hjYmlBZ0lDQWdJQ0FnWTI5a1pWQnZhVzUwSUQ0K0lEQjROaUFtSURCNE0wWWdmQ0F3ZURnd0xGeHVJQ0FnSUNBZ0lDQmpiMlJsVUc5cGJuUWdKaUF3ZUROR0lId2dNSGc0TUZ4dUlDQWdJQ0FnS1Z4dUlDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQjBhSEp2ZHlCdVpYY2dSWEp5YjNJb0owbHVkbUZzYVdRZ1kyOWtaU0J3YjJsdWRDY3BYRzRnSUNBZ2ZWeHVJQ0I5WEc1Y2JpQWdjbVYwZFhKdUlHSjVkR1Z6WEc1OVhHNWNibVoxYm1OMGFXOXVJR0Z6WTJscFZHOUNlWFJsY3lBb2MzUnlLU0I3WEc0Z0lIWmhjaUJpZVhSbFFYSnlZWGtnUFNCYlhWeHVJQ0JtYjNJZ0tIWmhjaUJwSUQwZ01Ec2dhU0E4SUhOMGNpNXNaVzVuZEdnN0lDc3JhU2tnZTF4dUlDQWdJQzh2SUU1dlpHVW5jeUJqYjJSbElITmxaVzF6SUhSdklHSmxJR1J2YVc1bklIUm9hWE1nWVc1a0lHNXZkQ0FtSURCNE4wWXVMbHh1SUNBZ0lHSjVkR1ZCY25KaGVTNXdkWE5vS0hOMGNpNWphR0Z5UTI5a1pVRjBLR2twSUNZZ01IaEdSaWxjYmlBZ2ZWeHVJQ0J5WlhSMWNtNGdZbmwwWlVGeWNtRjVYRzU5WEc1Y2JtWjFibU4wYVc5dUlIVjBaakUyYkdWVWIwSjVkR1Z6SUNoemRISXNJSFZ1YVhSektTQjdYRzRnSUhaaGNpQmpMQ0JvYVN3Z2JHOWNiaUFnZG1GeUlHSjVkR1ZCY25KaGVTQTlJRnRkWEc0Z0lHWnZjaUFvZG1GeUlHa2dQU0F3T3lCcElEd2djM1J5TG14bGJtZDBhRHNnS3l0cEtTQjdYRzRnSUNBZ2FXWWdLQ2gxYm1sMGN5QXRQU0F5S1NBOElEQXBJR0p5WldGclhHNWNiaUFnSUNCaklEMGdjM1J5TG1Ob1lYSkRiMlJsUVhRb2FTbGNiaUFnSUNCb2FTQTlJR01nUGo0Z09GeHVJQ0FnSUd4dklEMGdZeUFsSURJMU5seHVJQ0FnSUdKNWRHVkJjbkpoZVM1d2RYTm9LR3h2S1Z4dUlDQWdJR0o1ZEdWQmNuSmhlUzV3ZFhOb0tHaHBLVnh1SUNCOVhHNWNiaUFnY21WMGRYSnVJR0o1ZEdWQmNuSmhlVnh1ZlZ4dVhHNW1kVzVqZEdsdmJpQmlZWE5sTmpSVWIwSjVkR1Z6SUNoemRISXBJSHRjYmlBZ2NtVjBkWEp1SUdKaGMyVTJOQzUwYjBKNWRHVkJjbkpoZVNoaVlYTmxOalJqYkdWaGJpaHpkSElwS1Z4dWZWeHVYRzVtZFc1amRHbHZiaUJpYkdsMFFuVm1abVZ5SUNoemNtTXNJR1J6ZEN3Z2IyWm1jMlYwTENCc1pXNW5kR2dwSUh0Y2JpQWdabTl5SUNoMllYSWdhU0E5SURBN0lHa2dQQ0JzWlc1bmRHZzdJQ3NyYVNrZ2UxeHVJQ0FnSUdsbUlDZ29hU0FySUc5bVpuTmxkQ0ErUFNCa2MzUXViR1Z1WjNSb0tTQjhmQ0FvYVNBK1BTQnpjbU11YkdWdVozUm9LU2tnWW5KbFlXdGNiaUFnSUNCa2MzUmJhU0FySUc5bVpuTmxkRjBnUFNCemNtTmJhVjFjYmlBZ2ZWeHVJQ0J5WlhSMWNtNGdhVnh1ZlZ4dVhHNW1kVzVqZEdsdmJpQnBjMjVoYmlBb2RtRnNLU0I3WEc0Z0lISmxkSFZ5YmlCMllXd2dJVDA5SUhaaGJDQXZMeUJsYzJ4cGJuUXRaR2x6WVdKc1pTMXNhVzVsSUc1dkxYTmxiR1l0WTI5dGNHRnlaVnh1ZlZ4dUlpd2lkbUZ5SUhSdlUzUnlhVzVuSUQwZ2UzMHVkRzlUZEhKcGJtYzdYRzVjYm0xdlpIVnNaUzVsZUhCdmNuUnpJRDBnUVhKeVlYa3VhWE5CY25KaGVTQjhmQ0JtZFc1amRHbHZiaUFvWVhKeUtTQjdYRzRnSUhKbGRIVnliaUIwYjFOMGNtbHVaeTVqWVd4c0tHRnljaWtnUFQwZ0oxdHZZbXBsWTNRZ1FYSnlZWGxkSnp0Y2JuMDdYRzRpTENKY0luVnpaU0J6ZEhKcFkzUmNJbHh1WEc1dGIyUjFiR1V1Wlhod2IzSjBjeUE5SUdOeVpXRjBaVkpDVkhKbFpWeHVYRzUyWVhJZ1VrVkVJQ0FnUFNBd1hHNTJZWElnUWt4QlEwc2dQU0F4WEc1Y2JtWjFibU4wYVc5dUlGSkNUbTlrWlNoamIyeHZjaXdnYTJWNUxDQjJZV3gxWlN3Z2JHVm1kQ3dnY21sbmFIUXNJR052ZFc1MEtTQjdYRzRnSUhSb2FYTXVYMk52Ykc5eUlEMGdZMjlzYjNKY2JpQWdkR2hwY3k1clpYa2dQU0JyWlhsY2JpQWdkR2hwY3k1MllXeDFaU0E5SUhaaGJIVmxYRzRnSUhSb2FYTXViR1ZtZENBOUlHeGxablJjYmlBZ2RHaHBjeTV5YVdkb2RDQTlJSEpwWjJoMFhHNGdJSFJvYVhNdVgyTnZkVzUwSUQwZ1kyOTFiblJjYm4xY2JseHVablZ1WTNScGIyNGdZMnh2Ym1WT2IyUmxLRzV2WkdVcElIdGNiaUFnY21WMGRYSnVJRzVsZHlCU1FrNXZaR1VvYm05a1pTNWZZMjlzYjNJc0lHNXZaR1V1YTJWNUxDQnViMlJsTG5aaGJIVmxMQ0J1YjJSbExteGxablFzSUc1dlpHVXVjbWxuYUhRc0lHNXZaR1V1WDJOdmRXNTBLVnh1ZlZ4dVhHNW1kVzVqZEdsdmJpQnlaWEJoYVc1MEtHTnZiRzl5TENCdWIyUmxLU0I3WEc0Z0lISmxkSFZ5YmlCdVpYY2dVa0pPYjJSbEtHTnZiRzl5TENCdWIyUmxMbXRsZVN3Z2JtOWtaUzUyWVd4MVpTd2dibTlrWlM1c1pXWjBMQ0J1YjJSbExuSnBaMmgwTENCdWIyUmxMbDlqYjNWdWRDbGNibjFjYmx4dVpuVnVZM1JwYjI0Z2NtVmpiM1Z1ZENodWIyUmxLU0I3WEc0Z0lHNXZaR1V1WDJOdmRXNTBJRDBnTVNBcklDaHViMlJsTG14bFpuUWdQeUJ1YjJSbExteGxablF1WDJOdmRXNTBJRG9nTUNrZ0t5QW9ibTlrWlM1eWFXZG9kQ0EvSUc1dlpHVXVjbWxuYUhRdVgyTnZkVzUwSURvZ01DbGNibjFjYmx4dVpuVnVZM1JwYjI0Z1VtVmtRbXhoWTJ0VWNtVmxLR052YlhCaGNtVXNJSEp2YjNRcElIdGNiaUFnZEdocGN5NWZZMjl0Y0dGeVpTQTlJR052YlhCaGNtVmNiaUFnZEdocGN5NXliMjkwSUQwZ2NtOXZkRnh1ZlZ4dVhHNTJZWElnY0hKdmRHOGdQU0JTWldSQ2JHRmphMVJ5WldVdWNISnZkRzkwZVhCbFhHNWNiazlpYW1WamRDNWtaV1pwYm1WUWNtOXdaWEowZVNod2NtOTBieXdnWENKclpYbHpYQ0lzSUh0Y2JpQWdaMlYwT2lCbWRXNWpkR2x2YmlncElIdGNiaUFnSUNCMllYSWdjbVZ6ZFd4MElEMGdXMTFjYmlBZ0lDQjBhR2x6TG1admNrVmhZMmdvWm5WdVkzUnBiMjRvYXl4MktTQjdYRzRnSUNBZ0lDQnlaWE4xYkhRdWNIVnphQ2hyS1Z4dUlDQWdJSDBwWEc0Z0lDQWdjbVYwZFhKdUlISmxjM1ZzZEZ4dUlDQjlYRzU5S1Z4dVhHNVBZbXBsWTNRdVpHVm1hVzVsVUhKdmNHVnlkSGtvY0hKdmRHOHNJRndpZG1Gc2RXVnpYQ0lzSUh0Y2JpQWdaMlYwT2lCbWRXNWpkR2x2YmlncElIdGNiaUFnSUNCMllYSWdjbVZ6ZFd4MElEMGdXMTFjYmlBZ0lDQjBhR2x6TG1admNrVmhZMmdvWm5WdVkzUnBiMjRvYXl4MktTQjdYRzRnSUNBZ0lDQnlaWE4xYkhRdWNIVnphQ2gyS1Z4dUlDQWdJSDBwWEc0Z0lDQWdjbVYwZFhKdUlISmxjM1ZzZEZ4dUlDQjlYRzU5S1Z4dVhHNHZMMUpsZEhWeWJuTWdkR2hsSUc1MWJXSmxjaUJ2WmlCdWIyUmxjeUJwYmlCMGFHVWdkSEpsWlZ4dVQySnFaV04wTG1SbFptbHVaVkJ5YjNCbGNuUjVLSEJ5YjNSdkxDQmNJbXhsYm1kMGFGd2lMQ0I3WEc0Z0lHZGxkRG9nWm5WdVkzUnBiMjRvS1NCN1hHNGdJQ0FnYVdZb2RHaHBjeTV5YjI5MEtTQjdYRzRnSUNBZ0lDQnlaWFIxY200Z2RHaHBjeTV5YjI5MExsOWpiM1Z1ZEZ4dUlDQWdJSDFjYmlBZ0lDQnlaWFIxY200Z01GeHVJQ0I5WEc1OUtWeHVYRzR2TDBsdWMyVnlkQ0JoSUc1bGR5QnBkR1Z0SUdsdWRHOGdkR2hsSUhSeVpXVmNibkJ5YjNSdkxtbHVjMlZ5ZENBOUlHWjFibU4wYVc5dUtHdGxlU3dnZG1Gc2RXVXBJSHRjYmlBZ2RtRnlJR050Y0NBOUlIUm9hWE11WDJOdmJYQmhjbVZjYmlBZ0x5OUdhVzVrSUhCdmFXNTBJSFJ2SUdsdWMyVnlkQ0J1WlhjZ2JtOWtaU0JoZEZ4dUlDQjJZWElnYmlBOUlIUm9hWE11Y205dmRGeHVJQ0IyWVhJZ2JsOXpkR0ZqYXlBOUlGdGRYRzRnSUhaaGNpQmtYM04wWVdOcklEMGdXMTFjYmlBZ2QyaHBiR1VvYmlrZ2UxeHVJQ0FnSUhaaGNpQmtJRDBnWTIxd0tHdGxlU3dnYmk1clpYa3BYRzRnSUNBZ2JsOXpkR0ZqYXk1d2RYTm9LRzRwWEc0Z0lDQWdaRjl6ZEdGamF5NXdkWE5vS0dRcFhHNGdJQ0FnYVdZb1pDQThQU0F3S1NCN1hHNGdJQ0FnSUNCdUlEMGdiaTVzWldaMFhHNGdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJRzRnUFNCdUxuSnBaMmgwWEc0Z0lDQWdmVnh1SUNCOVhHNGdJQzh2VW1WaWRXbHNaQ0J3WVhSb0lIUnZJR3hsWVdZZ2JtOWtaVnh1SUNCdVgzTjBZV05yTG5CMWMyZ29ibVYzSUZKQ1RtOWtaU2hTUlVRc0lHdGxlU3dnZG1Gc2RXVXNJRzUxYkd3c0lHNTFiR3dzSURFcEtWeHVJQ0JtYjNJb2RtRnlJSE05Ymw5emRHRmpheTVzWlc1bmRHZ3RNanNnY3o0OU1Ec2dMUzF6S1NCN1hHNGdJQ0FnZG1GeUlHNGdQU0J1WDNOMFlXTnJXM05kWEc0Z0lDQWdhV1lvWkY5emRHRmphMXR6WFNBOFBTQXdLU0I3WEc0Z0lDQWdJQ0J1WDNOMFlXTnJXM05kSUQwZ2JtVjNJRkpDVG05a1pTaHVMbDlqYjJ4dmNpd2diaTVyWlhrc0lHNHVkbUZzZFdVc0lHNWZjM1JoWTJ0YmN5c3hYU3dnYmk1eWFXZG9kQ3dnYmk1ZlkyOTFiblFyTVNsY2JpQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdibDl6ZEdGamExdHpYU0E5SUc1bGR5QlNRazV2WkdVb2JpNWZZMjlzYjNJc0lHNHVhMlY1TENCdUxuWmhiSFZsTENCdUxteGxablFzSUc1ZmMzUmhZMnRiY3lzeFhTd2diaTVmWTI5MWJuUXJNU2xjYmlBZ0lDQjlYRzRnSUgxY2JpQWdMeTlTWldKaGJHRnVZMlVnZEhKbFpTQjFjMmx1WnlCeWIzUmhkR2x2Ym5OY2JpQWdMeTlqYjI1emIyeGxMbXh2WnloY0luTjBZWEowSUdsdWMyVnlkRndpTENCclpYa3NJR1JmYzNSaFkyc3BYRzRnSUdadmNpaDJZWElnY3oxdVgzTjBZV05yTG14bGJtZDBhQzB4T3lCelBqRTdJQzB0Y3lrZ2UxeHVJQ0FnSUhaaGNpQndJRDBnYmw5emRHRmphMXR6TFRGZFhHNGdJQ0FnZG1GeUlHNGdQU0J1WDNOMFlXTnJXM05kWEc0Z0lDQWdhV1lvY0M1ZlkyOXNiM0lnUFQwOUlFSk1RVU5MSUh4OElHNHVYMk52Ykc5eUlEMDlQU0JDVEVGRFN5a2dlMXh1SUNBZ0lDQWdZbkpsWVd0Y2JpQWdJQ0I5WEc0Z0lDQWdkbUZ5SUhCd0lEMGdibDl6ZEdGamExdHpMVEpkWEc0Z0lDQWdhV1lvY0hBdWJHVm1kQ0E5UFQwZ2NDa2dlMXh1SUNBZ0lDQWdhV1lvY0M1c1pXWjBJRDA5UFNCdUtTQjdYRzRnSUNBZ0lDQWdJSFpoY2lCNUlEMGdjSEF1Y21sbmFIUmNiaUFnSUNBZ0lDQWdhV1lvZVNBbUppQjVMbDlqYjJ4dmNpQTlQVDBnVWtWRUtTQjdYRzRnSUNBZ0lDQWdJQ0FnTHk5amIyNXpiMnhsTG14dlp5aGNJa3hNY2x3aUtWeHVJQ0FnSUNBZ0lDQWdJSEF1WDJOdmJHOXlJRDBnUWt4QlEwdGNiaUFnSUNBZ0lDQWdJQ0J3Y0M1eWFXZG9kQ0E5SUhKbGNHRnBiblFvUWt4QlEwc3NJSGtwWEc0Z0lDQWdJQ0FnSUNBZ2NIQXVYMk52Ykc5eUlEMGdVa1ZFWEc0Z0lDQWdJQ0FnSUNBZ2N5QXRQU0F4WEc0Z0lDQWdJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUNBZ0x5OWpiMjV6YjJ4bExteHZaeWhjSWt4TVlsd2lLVnh1SUNBZ0lDQWdJQ0FnSUhCd0xsOWpiMnh2Y2lBOUlGSkZSRnh1SUNBZ0lDQWdJQ0FnSUhCd0xteGxablFnUFNCd0xuSnBaMmgwWEc0Z0lDQWdJQ0FnSUNBZ2NDNWZZMjlzYjNJZ1BTQkNURUZEUzF4dUlDQWdJQ0FnSUNBZ0lIQXVjbWxuYUhRZ1BTQndjRnh1SUNBZ0lDQWdJQ0FnSUc1ZmMzUmhZMnRiY3kweVhTQTlJSEJjYmlBZ0lDQWdJQ0FnSUNCdVgzTjBZV05yVzNNdE1WMGdQU0J1WEc0Z0lDQWdJQ0FnSUNBZ2NtVmpiM1Z1ZENod2NDbGNiaUFnSUNBZ0lDQWdJQ0J5WldOdmRXNTBLSEFwWEc0Z0lDQWdJQ0FnSUNBZ2FXWW9jeUErUFNBektTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCMllYSWdjSEJ3SUQwZ2JsOXpkR0ZqYTF0ekxUTmRYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppaHdjSEF1YkdWbWRDQTlQVDBnY0hBcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ2NIQndMbXhsWm5RZ1BTQndYRzRnSUNBZ0lDQWdJQ0FnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0J3Y0hBdWNtbG5hSFFnUFNCd1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQWdJR0p5WldGclhHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNBZ0lIWmhjaUI1SUQwZ2NIQXVjbWxuYUhSY2JpQWdJQ0FnSUNBZ2FXWW9lU0FtSmlCNUxsOWpiMnh2Y2lBOVBUMGdVa1ZFS1NCN1hHNGdJQ0FnSUNBZ0lDQWdMeTlqYjI1emIyeGxMbXh2WnloY0lreFNjbHdpS1Z4dUlDQWdJQ0FnSUNBZ0lIQXVYMk52Ykc5eUlEMGdRa3hCUTB0Y2JpQWdJQ0FnSUNBZ0lDQndjQzV5YVdkb2RDQTlJSEpsY0dGcGJuUW9Ra3hCUTBzc0lIa3BYRzRnSUNBZ0lDQWdJQ0FnY0hBdVgyTnZiRzl5SUQwZ1VrVkVYRzRnSUNBZ0lDQWdJQ0FnY3lBdFBTQXhYRzRnSUNBZ0lDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQWdJQ0FnTHk5amIyNXpiMnhsTG14dlp5aGNJa3hTWWx3aUtWeHVJQ0FnSUNBZ0lDQWdJSEF1Y21sbmFIUWdQU0J1TG14bFpuUmNiaUFnSUNBZ0lDQWdJQ0J3Y0M1ZlkyOXNiM0lnUFNCU1JVUmNiaUFnSUNBZ0lDQWdJQ0J3Y0M1c1pXWjBJRDBnYmk1eWFXZG9kRnh1SUNBZ0lDQWdJQ0FnSUc0dVgyTnZiRzl5SUQwZ1FreEJRMHRjYmlBZ0lDQWdJQ0FnSUNCdUxteGxablFnUFNCd1hHNGdJQ0FnSUNBZ0lDQWdiaTV5YVdkb2RDQTlJSEJ3WEc0Z0lDQWdJQ0FnSUNBZ2JsOXpkR0ZqYTF0ekxUSmRJRDBnYmx4dUlDQWdJQ0FnSUNBZ0lHNWZjM1JoWTJ0YmN5MHhYU0E5SUhCY2JpQWdJQ0FnSUNBZ0lDQnlaV052ZFc1MEtIQndLVnh1SUNBZ0lDQWdJQ0FnSUhKbFkyOTFiblFvY0NsY2JpQWdJQ0FnSUNBZ0lDQnlaV052ZFc1MEtHNHBYRzRnSUNBZ0lDQWdJQ0FnYVdZb2N5QStQU0F6S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IyWVhJZ2NIQndJRDBnYmw5emRHRmphMXR6TFROZFhHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlod2NIQXViR1ZtZENBOVBUMGdjSEFwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnY0hCd0xteGxablFnUFNCdVhHNGdJQ0FnSUNBZ0lDQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQndjSEF1Y21sbmFIUWdQU0J1WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNBZ0lHSnlaV0ZyWEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUgxY2JpQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdhV1lvY0M1eWFXZG9kQ0E5UFQwZ2Jpa2dlMXh1SUNBZ0lDQWdJQ0IyWVhJZ2VTQTlJSEJ3TG14bFpuUmNiaUFnSUNBZ0lDQWdhV1lvZVNBbUppQjVMbDlqYjJ4dmNpQTlQVDBnVWtWRUtTQjdYRzRnSUNBZ0lDQWdJQ0FnTHk5amIyNXpiMnhsTG14dlp5aGNJbEpTY2x3aUxDQjVMbXRsZVNsY2JpQWdJQ0FnSUNBZ0lDQndMbDlqYjJ4dmNpQTlJRUpNUVVOTFhHNGdJQ0FnSUNBZ0lDQWdjSEF1YkdWbWRDQTlJSEpsY0dGcGJuUW9Ra3hCUTBzc0lIa3BYRzRnSUNBZ0lDQWdJQ0FnY0hBdVgyTnZiRzl5SUQwZ1VrVkVYRzRnSUNBZ0lDQWdJQ0FnY3lBdFBTQXhYRzRnSUNBZ0lDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQWdJQ0FnTHk5amIyNXpiMnhsTG14dlp5aGNJbEpTWWx3aUtWeHVJQ0FnSUNBZ0lDQWdJSEJ3TGw5amIyeHZjaUE5SUZKRlJGeHVJQ0FnSUNBZ0lDQWdJSEJ3TG5KcFoyaDBJRDBnY0M1c1pXWjBYRzRnSUNBZ0lDQWdJQ0FnY0M1ZlkyOXNiM0lnUFNCQ1RFRkRTMXh1SUNBZ0lDQWdJQ0FnSUhBdWJHVm1kQ0E5SUhCd1hHNGdJQ0FnSUNBZ0lDQWdibDl6ZEdGamExdHpMVEpkSUQwZ2NGeHVJQ0FnSUNBZ0lDQWdJRzVmYzNSaFkydGJjeTB4WFNBOUlHNWNiaUFnSUNBZ0lDQWdJQ0J5WldOdmRXNTBLSEJ3S1Z4dUlDQWdJQ0FnSUNBZ0lISmxZMjkxYm5Rb2NDbGNiaUFnSUNBZ0lDQWdJQ0JwWmloeklENDlJRE1wSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFpoY2lCd2NIQWdQU0J1WDNOMFlXTnJXM010TTExY2JpQWdJQ0FnSUNBZ0lDQWdJR2xtS0hCd2NDNXlhV2RvZENBOVBUMGdjSEFwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnY0hCd0xuSnBaMmgwSUQwZ2NGeHVJQ0FnSUNBZ0lDQWdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdjSEJ3TG14bFpuUWdQU0J3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNBZ0lHSnlaV0ZyWEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUhaaGNpQjVJRDBnY0hBdWJHVm1kRnh1SUNBZ0lDQWdJQ0JwWmloNUlDWW1JSGt1WDJOdmJHOXlJRDA5UFNCU1JVUXBJSHRjYmlBZ0lDQWdJQ0FnSUNBdkwyTnZibk52YkdVdWJHOW5LRndpVWt4eVhDSXBYRzRnSUNBZ0lDQWdJQ0FnY0M1ZlkyOXNiM0lnUFNCQ1RFRkRTMXh1SUNBZ0lDQWdJQ0FnSUhCd0xteGxablFnUFNCeVpYQmhhVzUwS0VKTVFVTkxMQ0I1S1Z4dUlDQWdJQ0FnSUNBZ0lIQndMbDlqYjJ4dmNpQTlJRkpGUkZ4dUlDQWdJQ0FnSUNBZ0lITWdMVDBnTVZ4dUlDQWdJQ0FnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnSUNBZ0lDOHZZMjl1YzI5c1pTNXNiMmNvWENKU1RHSmNJaWxjYmlBZ0lDQWdJQ0FnSUNCd0xteGxablFnUFNCdUxuSnBaMmgwWEc0Z0lDQWdJQ0FnSUNBZ2NIQXVYMk52Ykc5eUlEMGdVa1ZFWEc0Z0lDQWdJQ0FnSUNBZ2NIQXVjbWxuYUhRZ1BTQnVMbXhsWm5SY2JpQWdJQ0FnSUNBZ0lDQnVMbDlqYjJ4dmNpQTlJRUpNUVVOTFhHNGdJQ0FnSUNBZ0lDQWdiaTV5YVdkb2RDQTlJSEJjYmlBZ0lDQWdJQ0FnSUNCdUxteGxablFnUFNCd2NGeHVJQ0FnSUNBZ0lDQWdJRzVmYzNSaFkydGJjeTB5WFNBOUlHNWNiaUFnSUNBZ0lDQWdJQ0J1WDNOMFlXTnJXM010TVYwZ1BTQndYRzRnSUNBZ0lDQWdJQ0FnY21WamIzVnVkQ2h3Y0NsY2JpQWdJQ0FnSUNBZ0lDQnlaV052ZFc1MEtIQXBYRzRnSUNBZ0lDQWdJQ0FnY21WamIzVnVkQ2h1S1Z4dUlDQWdJQ0FnSUNBZ0lHbG1LSE1nUGowZ015a2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RtRnlJSEJ3Y0NBOUlHNWZjM1JoWTJ0YmN5MHpYVnh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWW9jSEJ3TG5KcFoyaDBJRDA5UFNCd2NDa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQndjSEF1Y21sbmFIUWdQU0J1WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNCd2NIQXViR1ZtZENBOUlHNWNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJQ0FnWW5KbFlXdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdmVnh1SUNBZ0lIMWNiaUFnZlZ4dUlDQXZMMUpsZEhWeWJpQnVaWGNnZEhKbFpWeHVJQ0J1WDNOMFlXTnJXekJkTGw5amIyeHZjaUE5SUVKTVFVTkxYRzRnSUhKbGRIVnliaUJ1WlhjZ1VtVmtRbXhoWTJ0VWNtVmxLR050Y0N3Z2JsOXpkR0ZqYTFzd1hTbGNibjFjYmx4dVhHNHZMMVpwYzJsMElHRnNiQ0J1YjJSbGN5QnBibTl5WkdWeVhHNW1kVzVqZEdsdmJpQmtiMVpwYzJsMFJuVnNiQ2gyYVhOcGRDd2dibTlrWlNrZ2UxeHVJQ0JwWmlodWIyUmxMbXhsWm5RcElIdGNiaUFnSUNCMllYSWdkaUE5SUdSdlZtbHphWFJHZFd4c0tIWnBjMmwwTENCdWIyUmxMbXhsWm5RcFhHNGdJQ0FnYVdZb2Rpa2dleUJ5WlhSMWNtNGdkaUI5WEc0Z0lIMWNiaUFnZG1GeUlIWWdQU0IyYVhOcGRDaHViMlJsTG10bGVTd2dibTlrWlM1MllXeDFaU2xjYmlBZ2FXWW9kaWtnZXlCeVpYUjFjbTRnZGlCOVhHNGdJR2xtS0c1dlpHVXVjbWxuYUhRcElIdGNiaUFnSUNCeVpYUjFjbTRnWkc5V2FYTnBkRVoxYkd3b2RtbHphWFFzSUc1dlpHVXVjbWxuYUhRcFhHNGdJSDFjYm4xY2JseHVMeTlXYVhOcGRDQm9ZV3htSUc1dlpHVnpJR2x1SUc5eVpHVnlYRzVtZFc1amRHbHZiaUJrYjFacGMybDBTR0ZzWmloc2J5d2dZMjl0Y0dGeVpTd2dkbWx6YVhRc0lHNXZaR1VwSUh0Y2JpQWdkbUZ5SUd3Z1BTQmpiMjF3WVhKbEtHeHZMQ0J1YjJSbExtdGxlU2xjYmlBZ2FXWW9iQ0E4UFNBd0tTQjdYRzRnSUNBZ2FXWW9ibTlrWlM1c1pXWjBLU0I3WEc0Z0lDQWdJQ0IyWVhJZ2RpQTlJR1J2Vm1semFYUklZV3htS0d4dkxDQmpiMjF3WVhKbExDQjJhWE5wZEN3Z2JtOWtaUzVzWldaMEtWeHVJQ0FnSUNBZ2FXWW9kaWtnZXlCeVpYUjFjbTRnZGlCOVhHNGdJQ0FnZlZ4dUlDQWdJSFpoY2lCMklEMGdkbWx6YVhRb2JtOWtaUzVyWlhrc0lHNXZaR1V1ZG1Gc2RXVXBYRzRnSUNBZ2FXWW9kaWtnZXlCeVpYUjFjbTRnZGlCOVhHNGdJSDFjYmlBZ2FXWW9ibTlrWlM1eWFXZG9kQ2tnZTF4dUlDQWdJSEpsZEhWeWJpQmtiMVpwYzJsMFNHRnNaaWhzYnl3Z1kyOXRjR0Z5WlN3Z2RtbHphWFFzSUc1dlpHVXVjbWxuYUhRcFhHNGdJSDFjYm4xY2JseHVMeTlXYVhOcGRDQmhiR3dnYm05a1pYTWdkMmwwYUdsdUlHRWdjbUZ1WjJWY2JtWjFibU4wYVc5dUlHUnZWbWx6YVhRb2JHOHNJR2hwTENCamIyMXdZWEpsTENCMmFYTnBkQ3dnYm05a1pTa2dlMXh1SUNCMllYSWdiQ0E5SUdOdmJYQmhjbVVvYkc4c0lHNXZaR1V1YTJWNUtWeHVJQ0IyWVhJZ2FDQTlJR052YlhCaGNtVW9hR2tzSUc1dlpHVXVhMlY1S1Z4dUlDQjJZWElnZGx4dUlDQnBaaWhzSUR3OUlEQXBJSHRjYmlBZ0lDQnBaaWh1YjJSbExteGxablFwSUh0Y2JpQWdJQ0FnSUhZZ1BTQmtiMVpwYzJsMEtHeHZMQ0JvYVN3Z1kyOXRjR0Z5WlN3Z2RtbHphWFFzSUc1dlpHVXViR1ZtZENsY2JpQWdJQ0FnSUdsbUtIWXBJSHNnY21WMGRYSnVJSFlnZlZ4dUlDQWdJSDFjYmlBZ0lDQnBaaWhvSUQ0Z01Da2dlMXh1SUNBZ0lDQWdkaUE5SUhacGMybDBLRzV2WkdVdWEyVjVMQ0J1YjJSbExuWmhiSFZsS1Z4dUlDQWdJQ0FnYVdZb2Rpa2dleUJ5WlhSMWNtNGdkaUI5WEc0Z0lDQWdmVnh1SUNCOVhHNGdJR2xtS0dnZ1BpQXdJQ1ltSUc1dlpHVXVjbWxuYUhRcElIdGNiaUFnSUNCeVpYUjFjbTRnWkc5V2FYTnBkQ2hzYnl3Z2FHa3NJR052YlhCaGNtVXNJSFpwYzJsMExDQnViMlJsTG5KcFoyaDBLVnh1SUNCOVhHNTlYRzVjYmx4dWNISnZkRzh1Wm05eVJXRmphQ0E5SUdaMWJtTjBhVzl1SUhKaVZISmxaVVp2Y2tWaFkyZ29kbWx6YVhRc0lHeHZMQ0JvYVNrZ2UxeHVJQ0JwWmlnaGRHaHBjeTV5YjI5MEtTQjdYRzRnSUNBZ2NtVjBkWEp1WEc0Z0lIMWNiaUFnYzNkcGRHTm9LR0Z5WjNWdFpXNTBjeTVzWlc1bmRHZ3BJSHRjYmlBZ0lDQmpZWE5sSURFNlhHNGdJQ0FnSUNCeVpYUjFjbTRnWkc5V2FYTnBkRVoxYkd3b2RtbHphWFFzSUhSb2FYTXVjbTl2ZENsY2JpQWdJQ0JpY21WaGExeHVYRzRnSUNBZ1kyRnpaU0F5T2x4dUlDQWdJQ0FnY21WMGRYSnVJR1J2Vm1semFYUklZV3htS0d4dkxDQjBhR2x6TGw5amIyMXdZWEpsTENCMmFYTnBkQ3dnZEdocGN5NXliMjkwS1Z4dUlDQWdJR0p5WldGclhHNWNiaUFnSUNCallYTmxJRE02WEc0Z0lDQWdJQ0JwWmloMGFHbHpMbDlqYjIxd1lYSmxLR3h2TENCb2FTa2dQajBnTUNrZ2UxeHVJQ0FnSUNBZ0lDQnlaWFIxY201Y2JpQWdJQ0FnSUgxY2JpQWdJQ0FnSUhKbGRIVnliaUJrYjFacGMybDBLR3h2TENCb2FTd2dkR2hwY3k1ZlkyOXRjR0Z5WlN3Z2RtbHphWFFzSUhSb2FYTXVjbTl2ZENsY2JpQWdJQ0JpY21WaGExeHVJQ0I5WEc1OVhHNWNiaTh2Um1seWMzUWdhWFJsYlNCcGJpQnNhWE4wWEc1UFltcGxZM1F1WkdWbWFXNWxVSEp2Y0dWeWRIa29jSEp2ZEc4c0lGd2lZbVZuYVc1Y0lpd2dlMXh1SUNCblpYUTZJR1oxYm1OMGFXOXVLQ2tnZTF4dUlDQWdJSFpoY2lCemRHRmpheUE5SUZ0ZFhHNGdJQ0FnZG1GeUlHNGdQU0IwYUdsekxuSnZiM1JjYmlBZ0lDQjNhR2xzWlNodUtTQjdYRzRnSUNBZ0lDQnpkR0ZqYXk1d2RYTm9LRzRwWEc0Z0lDQWdJQ0J1SUQwZ2JpNXNaV1owWEc0Z0lDQWdmVnh1SUNBZ0lISmxkSFZ5YmlCdVpYY2dVbVZrUW14aFkydFVjbVZsU1hSbGNtRjBiM0lvZEdocGN5d2djM1JoWTJzcFhHNGdJSDFjYm4wcFhHNWNiaTh2VEdGemRDQnBkR1Z0SUdsdUlHeHBjM1JjYms5aWFtVmpkQzVrWldacGJtVlFjbTl3WlhKMGVTaHdjbTkwYnl3Z1hDSmxibVJjSWl3Z2UxeHVJQ0JuWlhRNklHWjFibU4wYVc5dUtDa2dlMXh1SUNBZ0lIWmhjaUJ6ZEdGamF5QTlJRnRkWEc0Z0lDQWdkbUZ5SUc0Z1BTQjBhR2x6TG5KdmIzUmNiaUFnSUNCM2FHbHNaU2h1S1NCN1hHNGdJQ0FnSUNCemRHRmpheTV3ZFhOb0tHNHBYRzRnSUNBZ0lDQnVJRDBnYmk1eWFXZG9kRnh1SUNBZ0lIMWNiaUFnSUNCeVpYUjFjbTRnYm1WM0lGSmxaRUpzWVdOclZISmxaVWwwWlhKaGRHOXlLSFJvYVhNc0lITjBZV05yS1Z4dUlDQjlYRzU5S1Z4dVhHNHZMMFpwYm1RZ2RHaGxJR2wwYUNCcGRHVnRJR2x1SUhSb1pTQjBjbVZsWEc1d2NtOTBieTVoZENBOUlHWjFibU4wYVc5dUtHbGtlQ2tnZTF4dUlDQnBaaWhwWkhnZ1BDQXdLU0I3WEc0Z0lDQWdjbVYwZFhKdUlHNWxkeUJTWldSQ2JHRmphMVJ5WldWSmRHVnlZWFJ2Y2loMGFHbHpMQ0JiWFNsY2JpQWdmVnh1SUNCMllYSWdiaUE5SUhSb2FYTXVjbTl2ZEZ4dUlDQjJZWElnYzNSaFkyc2dQU0JiWFZ4dUlDQjNhR2xzWlNoMGNuVmxLU0I3WEc0Z0lDQWdjM1JoWTJzdWNIVnphQ2h1S1Z4dUlDQWdJR2xtS0c0dWJHVm1kQ2tnZTF4dUlDQWdJQ0FnYVdZb2FXUjRJRHdnYmk1c1pXWjBMbDlqYjNWdWRDa2dlMXh1SUNBZ0lDQWdJQ0J1SUQwZ2JpNXNaV1owWEc0Z0lDQWdJQ0FnSUdOdmJuUnBiblZsWEc0Z0lDQWdJQ0I5WEc0Z0lDQWdJQ0JwWkhnZ0xUMGdiaTVzWldaMExsOWpiM1Z1ZEZ4dUlDQWdJSDFjYmlBZ0lDQnBaaWdoYVdSNEtTQjdYRzRnSUNBZ0lDQnlaWFIxY200Z2JtVjNJRkpsWkVKc1lXTnJWSEpsWlVsMFpYSmhkRzl5S0hSb2FYTXNJSE4wWVdOcktWeHVJQ0FnSUgxY2JpQWdJQ0JwWkhnZ0xUMGdNVnh1SUNBZ0lHbG1LRzR1Y21sbmFIUXBJSHRjYmlBZ0lDQWdJR2xtS0dsa2VDQStQU0J1TG5KcFoyaDBMbDlqYjNWdWRDa2dlMXh1SUNBZ0lDQWdJQ0JpY21WaGExeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ2JpQTlJRzR1Y21sbmFIUmNiaUFnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnWW5KbFlXdGNiaUFnSUNCOVhHNGdJSDFjYmlBZ2NtVjBkWEp1SUc1bGR5QlNaV1JDYkdGamExUnlaV1ZKZEdWeVlYUnZjaWgwYUdsekxDQmJYU2xjYm4xY2JseHVjSEp2ZEc4dVoyVWdQU0JtZFc1amRHbHZiaWhyWlhrcElIdGNiaUFnZG1GeUlHTnRjQ0E5SUhSb2FYTXVYMk52YlhCaGNtVmNiaUFnZG1GeUlHNGdQU0IwYUdsekxuSnZiM1JjYmlBZ2RtRnlJSE4wWVdOcklEMGdXMTFjYmlBZ2RtRnlJR3hoYzNSZmNIUnlJRDBnTUZ4dUlDQjNhR2xzWlNodUtTQjdYRzRnSUNBZ2RtRnlJR1FnUFNCamJYQW9hMlY1TENCdUxtdGxlU2xjYmlBZ0lDQnpkR0ZqYXk1d2RYTm9LRzRwWEc0Z0lDQWdhV1lvWkNBOFBTQXdLU0I3WEc0Z0lDQWdJQ0JzWVhOMFgzQjBjaUE5SUhOMFlXTnJMbXhsYm1kMGFGeHVJQ0FnSUgxY2JpQWdJQ0JwWmloa0lEdzlJREFwSUh0Y2JpQWdJQ0FnSUc0Z1BTQnVMbXhsWm5SY2JpQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdiaUE5SUc0dWNtbG5hSFJjYmlBZ0lDQjlYRzRnSUgxY2JpQWdjM1JoWTJzdWJHVnVaM1JvSUQwZ2JHRnpkRjl3ZEhKY2JpQWdjbVYwZFhKdUlHNWxkeUJTWldSQ2JHRmphMVJ5WldWSmRHVnlZWFJ2Y2loMGFHbHpMQ0J6ZEdGamF5bGNibjFjYmx4dWNISnZkRzh1WjNRZ1BTQm1kVzVqZEdsdmJpaHJaWGtwSUh0Y2JpQWdkbUZ5SUdOdGNDQTlJSFJvYVhNdVgyTnZiWEJoY21WY2JpQWdkbUZ5SUc0Z1BTQjBhR2x6TG5KdmIzUmNiaUFnZG1GeUlITjBZV05ySUQwZ1cxMWNiaUFnZG1GeUlHeGhjM1JmY0hSeUlEMGdNRnh1SUNCM2FHbHNaU2h1S1NCN1hHNGdJQ0FnZG1GeUlHUWdQU0JqYlhBb2EyVjVMQ0J1TG10bGVTbGNiaUFnSUNCemRHRmpheTV3ZFhOb0tHNHBYRzRnSUNBZ2FXWW9aQ0E4SURBcElIdGNiaUFnSUNBZ0lHeGhjM1JmY0hSeUlEMGdjM1JoWTJzdWJHVnVaM1JvWEc0Z0lDQWdmVnh1SUNBZ0lHbG1LR1FnUENBd0tTQjdYRzRnSUNBZ0lDQnVJRDBnYmk1c1pXWjBYRzRnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUc0Z1BTQnVMbkpwWjJoMFhHNGdJQ0FnZlZ4dUlDQjlYRzRnSUhOMFlXTnJMbXhsYm1kMGFDQTlJR3hoYzNSZmNIUnlYRzRnSUhKbGRIVnliaUJ1WlhjZ1VtVmtRbXhoWTJ0VWNtVmxTWFJsY21GMGIzSW9kR2hwY3l3Z2MzUmhZMnNwWEc1OVhHNWNibkJ5YjNSdkxteDBJRDBnWm5WdVkzUnBiMjRvYTJWNUtTQjdYRzRnSUhaaGNpQmpiWEFnUFNCMGFHbHpMbDlqYjIxd1lYSmxYRzRnSUhaaGNpQnVJRDBnZEdocGN5NXliMjkwWEc0Z0lIWmhjaUJ6ZEdGamF5QTlJRnRkWEc0Z0lIWmhjaUJzWVhOMFgzQjBjaUE5SURCY2JpQWdkMmhwYkdVb2Jpa2dlMXh1SUNBZ0lIWmhjaUJrSUQwZ1kyMXdLR3RsZVN3Z2JpNXJaWGtwWEc0Z0lDQWdjM1JoWTJzdWNIVnphQ2h1S1Z4dUlDQWdJR2xtS0dRZ1BpQXdLU0I3WEc0Z0lDQWdJQ0JzWVhOMFgzQjBjaUE5SUhOMFlXTnJMbXhsYm1kMGFGeHVJQ0FnSUgxY2JpQWdJQ0JwWmloa0lEdzlJREFwSUh0Y2JpQWdJQ0FnSUc0Z1BTQnVMbXhsWm5SY2JpQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdiaUE5SUc0dWNtbG5hSFJjYmlBZ0lDQjlYRzRnSUgxY2JpQWdjM1JoWTJzdWJHVnVaM1JvSUQwZ2JHRnpkRjl3ZEhKY2JpQWdjbVYwZFhKdUlHNWxkeUJTWldSQ2JHRmphMVJ5WldWSmRHVnlZWFJ2Y2loMGFHbHpMQ0J6ZEdGamF5bGNibjFjYmx4dWNISnZkRzh1YkdVZ1BTQm1kVzVqZEdsdmJpaHJaWGtwSUh0Y2JpQWdkbUZ5SUdOdGNDQTlJSFJvYVhNdVgyTnZiWEJoY21WY2JpQWdkbUZ5SUc0Z1BTQjBhR2x6TG5KdmIzUmNiaUFnZG1GeUlITjBZV05ySUQwZ1cxMWNiaUFnZG1GeUlHeGhjM1JmY0hSeUlEMGdNRnh1SUNCM2FHbHNaU2h1S1NCN1hHNGdJQ0FnZG1GeUlHUWdQU0JqYlhBb2EyVjVMQ0J1TG10bGVTbGNiaUFnSUNCemRHRmpheTV3ZFhOb0tHNHBYRzRnSUNBZ2FXWW9aQ0ErUFNBd0tTQjdYRzRnSUNBZ0lDQnNZWE4wWDNCMGNpQTlJSE4wWVdOckxteGxibWQwYUZ4dUlDQWdJSDFjYmlBZ0lDQnBaaWhrSUR3Z01Da2dlMXh1SUNBZ0lDQWdiaUE5SUc0dWJHVm1kRnh1SUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNCdUlEMGdiaTV5YVdkb2RGeHVJQ0FnSUgxY2JpQWdmVnh1SUNCemRHRmpheTVzWlc1bmRHZ2dQU0JzWVhOMFgzQjBjbHh1SUNCeVpYUjFjbTRnYm1WM0lGSmxaRUpzWVdOclZISmxaVWwwWlhKaGRHOXlLSFJvYVhNc0lITjBZV05yS1Z4dWZWeHVYRzR2TDBacGJtUnpJSFJvWlNCcGRHVnRJSGRwZEdnZ2EyVjVJR2xtSUdsMElHVjRhWE4wYzF4dWNISnZkRzh1Wm1sdVpDQTlJR1oxYm1OMGFXOXVLR3RsZVNrZ2UxeHVJQ0IyWVhJZ1kyMXdJRDBnZEdocGN5NWZZMjl0Y0dGeVpWeHVJQ0IyWVhJZ2JpQTlJSFJvYVhNdWNtOXZkRnh1SUNCMllYSWdjM1JoWTJzZ1BTQmJYVnh1SUNCM2FHbHNaU2h1S1NCN1hHNGdJQ0FnZG1GeUlHUWdQU0JqYlhBb2EyVjVMQ0J1TG10bGVTbGNiaUFnSUNCemRHRmpheTV3ZFhOb0tHNHBYRzRnSUNBZ2FXWW9aQ0E5UFQwZ01Da2dlMXh1SUNBZ0lDQWdjbVYwZFhKdUlHNWxkeUJTWldSQ2JHRmphMVJ5WldWSmRHVnlZWFJ2Y2loMGFHbHpMQ0J6ZEdGamF5bGNiaUFnSUNCOVhHNGdJQ0FnYVdZb1pDQThQU0F3S1NCN1hHNGdJQ0FnSUNCdUlEMGdiaTVzWldaMFhHNGdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJRzRnUFNCdUxuSnBaMmgwWEc0Z0lDQWdmVnh1SUNCOVhHNGdJSEpsZEhWeWJpQnVaWGNnVW1Wa1FteGhZMnRVY21WbFNYUmxjbUYwYjNJb2RHaHBjeXdnVzEwcFhHNTlYRzVjYmk4dlVtVnRiM1psY3lCcGRHVnRJSGRwZEdnZ2EyVjVJR1p5YjIwZ2RISmxaVnh1Y0hKdmRHOHVjbVZ0YjNabElEMGdablZ1WTNScGIyNG9hMlY1S1NCN1hHNGdJSFpoY2lCcGRHVnlJRDBnZEdocGN5NW1hVzVrS0d0bGVTbGNiaUFnYVdZb2FYUmxjaWtnZTF4dUlDQWdJSEpsZEhWeWJpQnBkR1Z5TG5KbGJXOTJaU2dwWEc0Z0lIMWNiaUFnY21WMGRYSnVJSFJvYVhOY2JuMWNibHh1THk5U1pYUjFjbTV6SUhSb1pTQnBkR1Z0SUdGMElHQnJaWGxnWEc1d2NtOTBieTVuWlhRZ1BTQm1kVzVqZEdsdmJpaHJaWGtwSUh0Y2JpQWdkbUZ5SUdOdGNDQTlJSFJvYVhNdVgyTnZiWEJoY21WY2JpQWdkbUZ5SUc0Z1BTQjBhR2x6TG5KdmIzUmNiaUFnZDJocGJHVW9iaWtnZTF4dUlDQWdJSFpoY2lCa0lEMGdZMjF3S0d0bGVTd2diaTVyWlhrcFhHNGdJQ0FnYVdZb1pDQTlQVDBnTUNrZ2UxeHVJQ0FnSUNBZ2NtVjBkWEp1SUc0dWRtRnNkV1ZjYmlBZ0lDQjlYRzRnSUNBZ2FXWW9aQ0E4UFNBd0tTQjdYRzRnSUNBZ0lDQnVJRDBnYmk1c1pXWjBYRzRnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUc0Z1BTQnVMbkpwWjJoMFhHNGdJQ0FnZlZ4dUlDQjlYRzRnSUhKbGRIVnlibHh1ZlZ4dVhHNHZMMGwwWlhKaGRHOXlJR1p2Y2lCeVpXUWdZbXhoWTJzZ2RISmxaVnh1Wm5WdVkzUnBiMjRnVW1Wa1FteGhZMnRVY21WbFNYUmxjbUYwYjNJb2RISmxaU3dnYzNSaFkyc3BJSHRjYmlBZ2RHaHBjeTUwY21WbElEMGdkSEpsWlZ4dUlDQjBhR2x6TGw5emRHRmpheUE5SUhOMFlXTnJYRzU5WEc1Y2JuWmhjaUJwY0hKdmRHOGdQU0JTWldSQ2JHRmphMVJ5WldWSmRHVnlZWFJ2Y2k1d2NtOTBiM1I1Y0dWY2JseHVMeTlVWlhOMElHbG1JR2wwWlhKaGRHOXlJR2x6SUhaaGJHbGtYRzVQWW1wbFkzUXVaR1ZtYVc1bFVISnZjR1Z5ZEhrb2FYQnliM1J2TENCY0luWmhiR2xrWENJc0lIdGNiaUFnWjJWME9pQm1kVzVqZEdsdmJpZ3BJSHRjYmlBZ0lDQnlaWFIxY200Z2RHaHBjeTVmYzNSaFkyc3ViR1Z1WjNSb0lENGdNRnh1SUNCOVhHNTlLVnh1WEc0dkwwNXZaR1VnYjJZZ2RHaGxJR2wwWlhKaGRHOXlYRzVQWW1wbFkzUXVaR1ZtYVc1bFVISnZjR1Z5ZEhrb2FYQnliM1J2TENCY0ltNXZaR1ZjSWl3Z2UxeHVJQ0JuWlhRNklHWjFibU4wYVc5dUtDa2dlMXh1SUNBZ0lHbG1LSFJvYVhNdVgzTjBZV05yTG14bGJtZDBhQ0ErSURBcElIdGNiaUFnSUNBZ0lISmxkSFZ5YmlCMGFHbHpMbDl6ZEdGamExdDBhR2x6TGw5emRHRmpheTVzWlc1bmRHZ3RNVjFjYmlBZ0lDQjlYRzRnSUNBZ2NtVjBkWEp1SUc1MWJHeGNiaUFnZlN4Y2JpQWdaVzUxYldWeVlXSnNaVG9nZEhKMVpWeHVmU2xjYmx4dUx5OU5ZV3RsY3lCaElHTnZjSGtnYjJZZ1lXNGdhWFJsY21GMGIzSmNibWx3Y205MGJ5NWpiRzl1WlNBOUlHWjFibU4wYVc5dUtDa2dlMXh1SUNCeVpYUjFjbTRnYm1WM0lGSmxaRUpzWVdOclZISmxaVWwwWlhKaGRHOXlLSFJvYVhNdWRISmxaU3dnZEdocGN5NWZjM1JoWTJzdWMyeHBZMlVvS1NsY2JuMWNibHh1THk5VGQyRndjeUIwZDI4Z2JtOWtaWE5jYm1aMWJtTjBhVzl1SUhOM1lYQk9iMlJsS0c0c0lIWXBJSHRjYmlBZ2JpNXJaWGtnUFNCMkxtdGxlVnh1SUNCdUxuWmhiSFZsSUQwZ2RpNTJZV3gxWlZ4dUlDQnVMbXhsWm5RZ1BTQjJMbXhsWm5SY2JpQWdiaTV5YVdkb2RDQTlJSFl1Y21sbmFIUmNiaUFnYmk1ZlkyOXNiM0lnUFNCMkxsOWpiMnh2Y2x4dUlDQnVMbDlqYjNWdWRDQTlJSFl1WDJOdmRXNTBYRzU5WEc1Y2JpOHZSbWw0SUhWd0lHRWdaRzkxWW14bElHSnNZV05ySUc1dlpHVWdhVzRnWVNCMGNtVmxYRzVtZFc1amRHbHZiaUJtYVhoRWIzVmliR1ZDYkdGamF5aHpkR0ZqYXlrZ2UxeHVJQ0IyWVhJZ2Jpd2djQ3dnY3l3Z2VseHVJQ0JtYjNJb2RtRnlJR2s5YzNSaFkyc3ViR1Z1WjNSb0xURTdJR2srUFRBN0lDMHRhU2tnZTF4dUlDQWdJRzRnUFNCemRHRmphMXRwWFZ4dUlDQWdJR2xtS0drZ1BUMDlJREFwSUh0Y2JpQWdJQ0FnSUc0dVgyTnZiRzl5SUQwZ1FreEJRMHRjYmlBZ0lDQWdJSEpsZEhWeWJseHVJQ0FnSUgxY2JpQWdJQ0F2TDJOdmJuTnZiR1V1Ykc5bktGd2lkbWx6YVhRZ2JtOWtaVHBjSWl3Z2JpNXJaWGtzSUdrc0lITjBZV05yVzJsZExtdGxlU3dnYzNSaFkydGJhUzB4WFM1clpYa3BYRzRnSUNBZ2NDQTlJSE4wWVdOclcya3RNVjFjYmlBZ0lDQnBaaWh3TG14bFpuUWdQVDA5SUc0cElIdGNiaUFnSUNBZ0lDOHZZMjl1YzI5c1pTNXNiMmNvWENKc1pXWjBJR05vYVd4a1hDSXBYRzRnSUNBZ0lDQnpJRDBnY0M1eWFXZG9kRnh1SUNBZ0lDQWdhV1lvY3k1eWFXZG9kQ0FtSmlCekxuSnBaMmgwTGw5amIyeHZjaUE5UFQwZ1VrVkVLU0I3WEc0Z0lDQWdJQ0FnSUM4dlkyOXVjMjlzWlM1c2IyY29YQ0pqWVhObElERTZJSEpwWjJoMElITnBZbXhwYm1jZ1kyaHBiR1FnY21Wa1hDSXBYRzRnSUNBZ0lDQWdJSE1nUFNCd0xuSnBaMmgwSUQwZ1kyeHZibVZPYjJSbEtITXBYRzRnSUNBZ0lDQWdJSG9nUFNCekxuSnBaMmgwSUQwZ1kyeHZibVZPYjJSbEtITXVjbWxuYUhRcFhHNGdJQ0FnSUNBZ0lIQXVjbWxuYUhRZ1BTQnpMbXhsWm5SY2JpQWdJQ0FnSUNBZ2N5NXNaV1owSUQwZ2NGeHVJQ0FnSUNBZ0lDQnpMbkpwWjJoMElEMGdlbHh1SUNBZ0lDQWdJQ0J6TGw5amIyeHZjaUE5SUhBdVgyTnZiRzl5WEc0Z0lDQWdJQ0FnSUc0dVgyTnZiRzl5SUQwZ1FreEJRMHRjYmlBZ0lDQWdJQ0FnY0M1ZlkyOXNiM0lnUFNCQ1RFRkRTMXh1SUNBZ0lDQWdJQ0I2TGw5amIyeHZjaUE5SUVKTVFVTkxYRzRnSUNBZ0lDQWdJSEpsWTI5MWJuUW9jQ2xjYmlBZ0lDQWdJQ0FnY21WamIzVnVkQ2h6S1Z4dUlDQWdJQ0FnSUNCcFppaHBJRDRnTVNrZ2UxeHVJQ0FnSUNBZ0lDQWdJSFpoY2lCd2NDQTlJSE4wWVdOclcya3RNbDFjYmlBZ0lDQWdJQ0FnSUNCcFppaHdjQzVzWldaMElEMDlQU0J3S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J3Y0M1c1pXWjBJRDBnYzF4dUlDQWdJQ0FnSUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J3Y0M1eWFXZG9kQ0E5SUhOY2JpQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnYzNSaFkydGJhUzB4WFNBOUlITmNiaUFnSUNBZ0lDQWdjbVYwZFhKdVhHNGdJQ0FnSUNCOUlHVnNjMlVnYVdZb2N5NXNaV1owSUNZbUlITXViR1ZtZEM1ZlkyOXNiM0lnUFQwOUlGSkZSQ2tnZTF4dUlDQWdJQ0FnSUNBdkwyTnZibk52YkdVdWJHOW5LRndpWTJGelpTQXhPaUJzWldaMElITnBZbXhwYm1jZ1kyaHBiR1FnY21Wa1hDSXBYRzRnSUNBZ0lDQWdJSE1nUFNCd0xuSnBaMmgwSUQwZ1kyeHZibVZPYjJSbEtITXBYRzRnSUNBZ0lDQWdJSG9nUFNCekxteGxablFnUFNCamJHOXVaVTV2WkdVb2N5NXNaV1owS1Z4dUlDQWdJQ0FnSUNCd0xuSnBaMmgwSUQwZ2VpNXNaV1owWEc0Z0lDQWdJQ0FnSUhNdWJHVm1kQ0E5SUhvdWNtbG5hSFJjYmlBZ0lDQWdJQ0FnZWk1c1pXWjBJRDBnY0Z4dUlDQWdJQ0FnSUNCNkxuSnBaMmgwSUQwZ2MxeHVJQ0FnSUNBZ0lDQjZMbDlqYjJ4dmNpQTlJSEF1WDJOdmJHOXlYRzRnSUNBZ0lDQWdJSEF1WDJOdmJHOXlJRDBnUWt4QlEwdGNiaUFnSUNBZ0lDQWdjeTVmWTI5c2IzSWdQU0JDVEVGRFMxeHVJQ0FnSUNBZ0lDQnVMbDlqYjJ4dmNpQTlJRUpNUVVOTFhHNGdJQ0FnSUNBZ0lISmxZMjkxYm5Rb2NDbGNiaUFnSUNBZ0lDQWdjbVZqYjNWdWRDaHpLVnh1SUNBZ0lDQWdJQ0J5WldOdmRXNTBLSG9wWEc0Z0lDQWdJQ0FnSUdsbUtHa2dQaUF4S1NCN1hHNGdJQ0FnSUNBZ0lDQWdkbUZ5SUhCd0lEMGdjM1JoWTJ0YmFTMHlYVnh1SUNBZ0lDQWdJQ0FnSUdsbUtIQndMbXhsWm5RZ1BUMDlJSEFwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSEJ3TG14bFpuUWdQU0I2WEc0Z0lDQWdJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSEJ3TG5KcFoyaDBJRDBnZWx4dUlDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0J6ZEdGamExdHBMVEZkSUQwZ2VseHVJQ0FnSUNBZ0lDQnlaWFIxY201Y2JpQWdJQ0FnSUgxY2JpQWdJQ0FnSUdsbUtITXVYMk52Ykc5eUlEMDlQU0JDVEVGRFN5a2dlMXh1SUNBZ0lDQWdJQ0JwWmlod0xsOWpiMnh2Y2lBOVBUMGdVa1ZFS1NCN1hHNGdJQ0FnSUNBZ0lDQWdMeTlqYjI1emIyeGxMbXh2WnloY0ltTmhjMlVnTWpvZ1lteGhZMnNnYzJsaWJHbHVaeXdnY21Wa0lIQmhjbVZ1ZEZ3aUxDQndMbkpwWjJoMExuWmhiSFZsS1Z4dUlDQWdJQ0FnSUNBZ0lIQXVYMk52Ykc5eUlEMGdRa3hCUTB0Y2JpQWdJQ0FnSUNBZ0lDQndMbkpwWjJoMElEMGdjbVZ3WVdsdWRDaFNSVVFzSUhNcFhHNGdJQ0FnSUNBZ0lDQWdjbVYwZFhKdVhHNGdJQ0FnSUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNBZ0lDQWdMeTlqYjI1emIyeGxMbXh2WnloY0ltTmhjMlVnTWpvZ1lteGhZMnNnYzJsaWJHbHVaeXdnWW14aFkyc2djR0Z5Wlc1MFhDSXNJSEF1Y21sbmFIUXVkbUZzZFdVcFhHNGdJQ0FnSUNBZ0lDQWdjQzV5YVdkb2RDQTlJSEpsY0dGcGJuUW9Va1ZFTENCektWeHVJQ0FnSUNBZ0lDQWdJR052Ym5ScGJuVmxJQ0JjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnTHk5amIyNXpiMnhsTG14dlp5aGNJbU5oYzJVZ016b2djbVZrSUhOcFlteHBibWRjSWlsY2JpQWdJQ0FnSUNBZ2N5QTlJR05zYjI1bFRtOWtaU2h6S1Z4dUlDQWdJQ0FnSUNCd0xuSnBaMmgwSUQwZ2N5NXNaV1owWEc0Z0lDQWdJQ0FnSUhNdWJHVm1kQ0E5SUhCY2JpQWdJQ0FnSUNBZ2N5NWZZMjlzYjNJZ1BTQndMbDlqYjJ4dmNseHVJQ0FnSUNBZ0lDQndMbDlqYjJ4dmNpQTlJRkpGUkZ4dUlDQWdJQ0FnSUNCeVpXTnZkVzUwS0hBcFhHNGdJQ0FnSUNBZ0lISmxZMjkxYm5Rb2N5bGNiaUFnSUNBZ0lDQWdhV1lvYVNBK0lERXBJSHRjYmlBZ0lDQWdJQ0FnSUNCMllYSWdjSEFnUFNCemRHRmphMXRwTFRKZFhHNGdJQ0FnSUNBZ0lDQWdhV1lvY0hBdWJHVm1kQ0E5UFQwZ2NDa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2NIQXViR1ZtZENBOUlITmNiaUFnSUNBZ0lDQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2NIQXVjbWxuYUhRZ1BTQnpYRzRnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lITjBZV05yVzJrdE1WMGdQU0J6WEc0Z0lDQWdJQ0FnSUhOMFlXTnJXMmxkSUQwZ2NGeHVJQ0FnSUNBZ0lDQnBaaWhwS3pFZ1BDQnpkR0ZqYXk1c1pXNW5kR2dwSUh0Y2JpQWdJQ0FnSUNBZ0lDQnpkR0ZqYTF0cEt6RmRJRDBnYmx4dUlDQWdJQ0FnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnSUNBZ0lITjBZV05yTG5CMWMyZ29iaWxjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCcElEMGdhU3N5WEc0Z0lDQWdJQ0I5WEc0Z0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDOHZZMjl1YzI5c1pTNXNiMmNvWENKeWFXZG9kQ0JqYUdsc1pGd2lLVnh1SUNBZ0lDQWdjeUE5SUhBdWJHVm1kRnh1SUNBZ0lDQWdhV1lvY3k1c1pXWjBJQ1ltSUhNdWJHVm1kQzVmWTI5c2IzSWdQVDA5SUZKRlJDa2dlMXh1SUNBZ0lDQWdJQ0F2TDJOdmJuTnZiR1V1Ykc5bktGd2lZMkZ6WlNBeE9pQnNaV1owSUhOcFlteHBibWNnWTJocGJHUWdjbVZrWENJc0lIQXVkbUZzZFdVc0lIQXVYMk52Ykc5eUtWeHVJQ0FnSUNBZ0lDQnpJRDBnY0M1c1pXWjBJRDBnWTJ4dmJtVk9iMlJsS0hNcFhHNGdJQ0FnSUNBZ0lIb2dQU0J6TG14bFpuUWdQU0JqYkc5dVpVNXZaR1VvY3k1c1pXWjBLVnh1SUNBZ0lDQWdJQ0J3TG14bFpuUWdQU0J6TG5KcFoyaDBYRzRnSUNBZ0lDQWdJSE11Y21sbmFIUWdQU0J3WEc0Z0lDQWdJQ0FnSUhNdWJHVm1kQ0E5SUhwY2JpQWdJQ0FnSUNBZ2N5NWZZMjlzYjNJZ1BTQndMbDlqYjJ4dmNseHVJQ0FnSUNBZ0lDQnVMbDlqYjJ4dmNpQTlJRUpNUVVOTFhHNGdJQ0FnSUNBZ0lIQXVYMk52Ykc5eUlEMGdRa3hCUTB0Y2JpQWdJQ0FnSUNBZ2VpNWZZMjlzYjNJZ1BTQkNURUZEUzF4dUlDQWdJQ0FnSUNCeVpXTnZkVzUwS0hBcFhHNGdJQ0FnSUNBZ0lISmxZMjkxYm5Rb2N5bGNiaUFnSUNBZ0lDQWdhV1lvYVNBK0lERXBJSHRjYmlBZ0lDQWdJQ0FnSUNCMllYSWdjSEFnUFNCemRHRmphMXRwTFRKZFhHNGdJQ0FnSUNBZ0lDQWdhV1lvY0hBdWNtbG5hSFFnUFQwOUlIQXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIQndMbkpwWjJoMElEMGdjMXh1SUNBZ0lDQWdJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQndjQzVzWldaMElEMGdjMXh1SUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQnpkR0ZqYTF0cExURmRJRDBnYzF4dUlDQWdJQ0FnSUNCeVpYUjFjbTVjYmlBZ0lDQWdJSDBnWld4elpTQnBaaWh6TG5KcFoyaDBJQ1ltSUhNdWNtbG5hSFF1WDJOdmJHOXlJRDA5UFNCU1JVUXBJSHRjYmlBZ0lDQWdJQ0FnTHk5amIyNXpiMnhsTG14dlp5aGNJbU5oYzJVZ01Ub2djbWxuYUhRZ2MybGliR2x1WnlCamFHbHNaQ0J5WldSY0lpbGNiaUFnSUNBZ0lDQWdjeUE5SUhBdWJHVm1kQ0E5SUdOc2IyNWxUbTlrWlNoektWeHVJQ0FnSUNBZ0lDQjZJRDBnY3k1eWFXZG9kQ0E5SUdOc2IyNWxUbTlrWlNoekxuSnBaMmgwS1Z4dUlDQWdJQ0FnSUNCd0xteGxablFnUFNCNkxuSnBaMmgwWEc0Z0lDQWdJQ0FnSUhNdWNtbG5hSFFnUFNCNkxteGxablJjYmlBZ0lDQWdJQ0FnZWk1eWFXZG9kQ0E5SUhCY2JpQWdJQ0FnSUNBZ2VpNXNaV1owSUQwZ2MxeHVJQ0FnSUNBZ0lDQjZMbDlqYjJ4dmNpQTlJSEF1WDJOdmJHOXlYRzRnSUNBZ0lDQWdJSEF1WDJOdmJHOXlJRDBnUWt4QlEwdGNiaUFnSUNBZ0lDQWdjeTVmWTI5c2IzSWdQU0JDVEVGRFMxeHVJQ0FnSUNBZ0lDQnVMbDlqYjJ4dmNpQTlJRUpNUVVOTFhHNGdJQ0FnSUNBZ0lISmxZMjkxYm5Rb2NDbGNiaUFnSUNBZ0lDQWdjbVZqYjNWdWRDaHpLVnh1SUNBZ0lDQWdJQ0J5WldOdmRXNTBLSG9wWEc0Z0lDQWdJQ0FnSUdsbUtHa2dQaUF4S1NCN1hHNGdJQ0FnSUNBZ0lDQWdkbUZ5SUhCd0lEMGdjM1JoWTJ0YmFTMHlYVnh1SUNBZ0lDQWdJQ0FnSUdsbUtIQndMbkpwWjJoMElEMDlQU0J3S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J3Y0M1eWFXZG9kQ0E5SUhwY2JpQWdJQ0FnSUNBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnY0hBdWJHVm1kQ0E5SUhwY2JpQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnYzNSaFkydGJhUzB4WFNBOUlIcGNiaUFnSUNBZ0lDQWdjbVYwZFhKdVhHNGdJQ0FnSUNCOVhHNGdJQ0FnSUNCcFppaHpMbDlqYjJ4dmNpQTlQVDBnUWt4QlEwc3BJSHRjYmlBZ0lDQWdJQ0FnYVdZb2NDNWZZMjlzYjNJZ1BUMDlJRkpGUkNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQzh2WTI5dWMyOXNaUzVzYjJjb1hDSmpZWE5sSURJNklHSnNZV05ySUhOcFlteHBibWNzSUhKbFpDQndZWEpsYm5SY0lpbGNiaUFnSUNBZ0lDQWdJQ0J3TGw5amIyeHZjaUE5SUVKTVFVTkxYRzRnSUNBZ0lDQWdJQ0FnY0M1c1pXWjBJRDBnY21Wd1lXbHVkQ2hTUlVRc0lITXBYRzRnSUNBZ0lDQWdJQ0FnY21WMGRYSnVYRzRnSUNBZ0lDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQWdJQ0FnTHk5amIyNXpiMnhsTG14dlp5aGNJbU5oYzJVZ01qb2dZbXhoWTJzZ2MybGliR2x1Wnl3Z1lteGhZMnNnY0dGeVpXNTBYQ0lwWEc0Z0lDQWdJQ0FnSUNBZ2NDNXNaV1owSUQwZ2NtVndZV2x1ZENoU1JVUXNJSE1wWEc0Z0lDQWdJQ0FnSUNBZ1kyOXVkR2x1ZFdVZ0lGeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ0lDQXZMMk52Ym5OdmJHVXViRzluS0Z3aVkyRnpaU0F6T2lCeVpXUWdjMmxpYkdsdVoxd2lLVnh1SUNBZ0lDQWdJQ0J6SUQwZ1kyeHZibVZPYjJSbEtITXBYRzRnSUNBZ0lDQWdJSEF1YkdWbWRDQTlJSE11Y21sbmFIUmNiaUFnSUNBZ0lDQWdjeTV5YVdkb2RDQTlJSEJjYmlBZ0lDQWdJQ0FnY3k1ZlkyOXNiM0lnUFNCd0xsOWpiMnh2Y2x4dUlDQWdJQ0FnSUNCd0xsOWpiMnh2Y2lBOUlGSkZSRnh1SUNBZ0lDQWdJQ0J5WldOdmRXNTBLSEFwWEc0Z0lDQWdJQ0FnSUhKbFkyOTFiblFvY3lsY2JpQWdJQ0FnSUNBZ2FXWW9hU0ErSURFcElIdGNiaUFnSUNBZ0lDQWdJQ0IyWVhJZ2NIQWdQU0J6ZEdGamExdHBMVEpkWEc0Z0lDQWdJQ0FnSUNBZ2FXWW9jSEF1Y21sbmFIUWdQVDA5SUhBcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhCd0xuSnBaMmgwSUQwZ2MxeHVJQ0FnSUNBZ0lDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCd2NDNXNaV1owSUQwZ2MxeHVJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCemRHRmphMXRwTFRGZElEMGdjMXh1SUNBZ0lDQWdJQ0J6ZEdGamExdHBYU0E5SUhCY2JpQWdJQ0FnSUNBZ2FXWW9hU3N4SUR3Z2MzUmhZMnN1YkdWdVozUm9LU0I3WEc0Z0lDQWdJQ0FnSUNBZ2MzUmhZMnRiYVNzeFhTQTlJRzVjYmlBZ0lDQWdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnSUNCemRHRmpheTV3ZFhOb0tHNHBYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnYVNBOUlHa3JNbHh1SUNBZ0lDQWdmVnh1SUNBZ0lIMWNiaUFnZlZ4dWZWeHVYRzR2TDFKbGJXOTJaWE1nYVhSbGJTQmhkQ0JwZEdWeVlYUnZjaUJtY205dElIUnlaV1ZjYm1sd2NtOTBieTV5WlcxdmRtVWdQU0JtZFc1amRHbHZiaWdwSUh0Y2JpQWdkbUZ5SUhOMFlXTnJJRDBnZEdocGN5NWZjM1JoWTJ0Y2JpQWdhV1lvYzNSaFkyc3ViR1Z1WjNSb0lEMDlQU0F3S1NCN1hHNGdJQ0FnY21WMGRYSnVJSFJvYVhNdWRISmxaVnh1SUNCOVhHNGdJQzh2Um1seWMzUWdZMjl3ZVNCd1lYUm9JSFJ2SUc1dlpHVmNiaUFnZG1GeUlHTnpkR0ZqYXlBOUlHNWxkeUJCY25KaGVTaHpkR0ZqYXk1c1pXNW5kR2dwWEc0Z0lIWmhjaUJ1SUQwZ2MzUmhZMnRiYzNSaFkyc3ViR1Z1WjNSb0xURmRYRzRnSUdOemRHRmphMXRqYzNSaFkyc3ViR1Z1WjNSb0xURmRJRDBnYm1WM0lGSkNUbTlrWlNodUxsOWpiMnh2Y2l3Z2JpNXJaWGtzSUc0dWRtRnNkV1VzSUc0dWJHVm1kQ3dnYmk1eWFXZG9kQ3dnYmk1ZlkyOTFiblFwWEc0Z0lHWnZjaWgyWVhJZ2FUMXpkR0ZqYXk1c1pXNW5kR2d0TWpzZ2FUNDlNRHNnTFMxcEtTQjdYRzRnSUNBZ2RtRnlJRzRnUFNCemRHRmphMXRwWFZ4dUlDQWdJR2xtS0c0dWJHVm1kQ0E5UFQwZ2MzUmhZMnRiYVNzeFhTa2dlMXh1SUNBZ0lDQWdZM04wWVdOclcybGRJRDBnYm1WM0lGSkNUbTlrWlNodUxsOWpiMnh2Y2l3Z2JpNXJaWGtzSUc0dWRtRnNkV1VzSUdOemRHRmphMXRwS3pGZExDQnVMbkpwWjJoMExDQnVMbDlqYjNWdWRDbGNiaUFnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnWTNOMFlXTnJXMmxkSUQwZ2JtVjNJRkpDVG05a1pTaHVMbDlqYjJ4dmNpd2diaTVyWlhrc0lHNHVkbUZzZFdVc0lHNHViR1ZtZEN3Z1kzTjBZV05yVzJrck1WMHNJRzR1WDJOdmRXNTBLVnh1SUNBZ0lIMWNiaUFnZlZ4dVhHNGdJQzh2UjJWMElHNXZaR1ZjYmlBZ2JpQTlJR056ZEdGamExdGpjM1JoWTJzdWJHVnVaM1JvTFRGZFhHNGdJQzh2WTI5dWMyOXNaUzVzYjJjb1hDSnpkR0Z5ZENCeVpXMXZkbVU2SUZ3aUxDQnVMblpoYkhWbEtWeHVYRzRnSUM4dlNXWWdibTkwSUd4bFlXWXNJSFJvWlc0Z2MzZGhjQ0IzYVhSb0lIQnlaWFpwYjNWeklHNXZaR1ZjYmlBZ2FXWW9iaTVzWldaMElDWW1JRzR1Y21sbmFIUXBJSHRjYmlBZ0lDQXZMMk52Ym5OdmJHVXViRzluS0Z3aWJXOTJhVzVuSUhSdklHeGxZV1pjSWlsY2JseHVJQ0FnSUM4dlJtbHljM1FnZDJGc2F5QjBieUJ3Y21WMmFXOTFjeUJzWldGbVhHNGdJQ0FnZG1GeUlITndiR2wwSUQwZ1kzTjBZV05yTG14bGJtZDBhRnh1SUNBZ0lHNGdQU0J1TG14bFpuUmNiaUFnSUNCM2FHbHNaU2h1TG5KcFoyaDBLU0I3WEc0Z0lDQWdJQ0JqYzNSaFkyc3VjSFZ6YUNodUtWeHVJQ0FnSUNBZ2JpQTlJRzR1Y21sbmFIUmNiaUFnSUNCOVhHNGdJQ0FnTHk5RGIzQjVJSEJoZEdnZ2RHOGdiR1ZoWmx4dUlDQWdJSFpoY2lCMklEMGdZM04wWVdOclczTndiR2wwTFRGZFhHNGdJQ0FnWTNOMFlXTnJMbkIxYzJnb2JtVjNJRkpDVG05a1pTaHVMbDlqYjJ4dmNpd2dkaTVyWlhrc0lIWXVkbUZzZFdVc0lHNHViR1ZtZEN3Z2JpNXlhV2RvZEN3Z2JpNWZZMjkxYm5RcEtWeHVJQ0FnSUdOemRHRmphMXR6Y0d4cGRDMHhYUzVyWlhrZ1BTQnVMbXRsZVZ4dUlDQWdJR056ZEdGamExdHpjR3hwZEMweFhTNTJZV3gxWlNBOUlHNHVkbUZzZFdWY2JseHVJQ0FnSUM4dlJtbDRJSFZ3SUhOMFlXTnJYRzRnSUNBZ1ptOXlLSFpoY2lCcFBXTnpkR0ZqYXk1c1pXNW5kR2d0TWpzZ2FUNDljM0JzYVhRN0lDMHRhU2tnZTF4dUlDQWdJQ0FnYmlBOUlHTnpkR0ZqYTF0cFhWeHVJQ0FnSUNBZ1kzTjBZV05yVzJsZElEMGdibVYzSUZKQ1RtOWtaU2h1TGw5amIyeHZjaXdnYmk1clpYa3NJRzR1ZG1Gc2RXVXNJRzR1YkdWbWRDd2dZM04wWVdOclcya3JNVjBzSUc0dVgyTnZkVzUwS1Z4dUlDQWdJSDFjYmlBZ0lDQmpjM1JoWTJ0YmMzQnNhWFF0TVYwdWJHVm1kQ0E5SUdOemRHRmphMXR6Y0d4cGRGMWNiaUFnZlZ4dUlDQXZMMk52Ym5OdmJHVXViRzluS0Z3aWMzUmhZMnM5WENJc0lHTnpkR0ZqYXk1dFlYQW9ablZ1WTNScGIyNG9kaWtnZXlCeVpYUjFjbTRnZGk1MllXeDFaU0I5S1NsY2JseHVJQ0F2TDFKbGJXOTJaU0JzWldGbUlHNXZaR1ZjYmlBZ2JpQTlJR056ZEdGamExdGpjM1JoWTJzdWJHVnVaM1JvTFRGZFhHNGdJR2xtS0c0dVgyTnZiRzl5SUQwOVBTQlNSVVFwSUh0Y2JpQWdJQ0F2TDBWaGMza2dZMkZ6WlRvZ2NtVnRiM1pwYm1jZ2NtVmtJR3hsWVdaY2JpQWdJQ0F2TDJOdmJuTnZiR1V1Ykc5bktGd2lVa1ZFSUd4bFlXWmNJaWxjYmlBZ0lDQjJZWElnY0NBOUlHTnpkR0ZqYTF0amMzUmhZMnN1YkdWdVozUm9MVEpkWEc0Z0lDQWdhV1lvY0M1c1pXWjBJRDA5UFNCdUtTQjdYRzRnSUNBZ0lDQndMbXhsWm5RZ1BTQnVkV3hzWEc0Z0lDQWdmU0JsYkhObElHbG1LSEF1Y21sbmFIUWdQVDA5SUc0cElIdGNiaUFnSUNBZ0lIQXVjbWxuYUhRZ1BTQnVkV3hzWEc0Z0lDQWdmVnh1SUNBZ0lHTnpkR0ZqYXk1d2IzQW9LVnh1SUNBZ0lHWnZjaWgyWVhJZ2FUMHdPeUJwUEdOemRHRmpheTVzWlc1bmRHZzdJQ3NyYVNrZ2UxeHVJQ0FnSUNBZ1kzTjBZV05yVzJsZExsOWpiM1Z1ZEMwdFhHNGdJQ0FnZlZ4dUlDQWdJSEpsZEhWeWJpQnVaWGNnVW1Wa1FteGhZMnRVY21WbEtIUm9hWE11ZEhKbFpTNWZZMjl0Y0dGeVpTd2dZM04wWVdOcld6QmRLVnh1SUNCOUlHVnNjMlVnZTF4dUlDQWdJR2xtS0c0dWJHVm1kQ0I4ZkNCdUxuSnBaMmgwS1NCN1hHNGdJQ0FnSUNBdkwxTmxZMjl1WkNCbFlYTjVJR05oYzJVNklDQlRhVzVuYkdVZ1kyaHBiR1FnWW14aFkyc2djR0Z5Wlc1MFhHNGdJQ0FnSUNBdkwyTnZibk52YkdVdWJHOW5LRndpUWt4QlEwc2djMmx1WjJ4bElHTm9hV3hrWENJcFhHNGdJQ0FnSUNCcFppaHVMbXhsWm5RcElIdGNiaUFnSUNBZ0lDQWdjM2RoY0U1dlpHVW9iaXdnYmk1c1pXWjBLVnh1SUNBZ0lDQWdmU0JsYkhObElHbG1LRzR1Y21sbmFIUXBJSHRjYmlBZ0lDQWdJQ0FnYzNkaGNFNXZaR1VvYml3Z2JpNXlhV2RvZENsY2JpQWdJQ0FnSUgxY2JpQWdJQ0FnSUM4dlEyaHBiR1FnYlhWemRDQmlaU0J5WldRc0lITnZJSEpsY0dGcGJuUWdhWFFnWW14aFkyc2dkRzhnWW1Gc1lXNWpaU0JqYjJ4dmNseHVJQ0FnSUNBZ2JpNWZZMjlzYjNJZ1BTQkNURUZEUzF4dUlDQWdJQ0FnWm05eUtIWmhjaUJwUFRBN0lHazhZM04wWVdOckxteGxibWQwYUMweE95QXJLMmtwSUh0Y2JpQWdJQ0FnSUNBZ1kzTjBZV05yVzJsZExsOWpiM1Z1ZEMwdFhHNGdJQ0FnSUNCOVhHNGdJQ0FnSUNCeVpYUjFjbTRnYm1WM0lGSmxaRUpzWVdOclZISmxaU2gwYUdsekxuUnlaV1V1WDJOdmJYQmhjbVVzSUdOemRHRmphMXN3WFNsY2JpQWdJQ0I5SUdWc2MyVWdhV1lvWTNOMFlXTnJMbXhsYm1kMGFDQTlQVDBnTVNrZ2UxeHVJQ0FnSUNBZ0x5OVVhR2x5WkNCbFlYTjVJR05oYzJVNklISnZiM1JjYmlBZ0lDQWdJQzh2WTI5dWMyOXNaUzVzYjJjb1hDSlNUMDlVWENJcFhHNGdJQ0FnSUNCeVpYUjFjbTRnYm1WM0lGSmxaRUpzWVdOclZISmxaU2gwYUdsekxuUnlaV1V1WDJOdmJYQmhjbVVzSUc1MWJHd3BYRzRnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUM4dlNHRnlaQ0JqWVhObE9pQlNaWEJoYVc1MElHNHNJR0Z1WkNCMGFHVnVJR1J2SUhOdmJXVWdibUZ6ZEhrZ2MzUjFabVpjYmlBZ0lDQWdJQzh2WTI5dWMyOXNaUzVzYjJjb1hDSkNURUZEU3lCc1pXRm1JRzV2SUdOb2FXeGtjbVZ1WENJcFhHNGdJQ0FnSUNCbWIzSW9kbUZ5SUdrOU1Ec2dhVHhqYzNSaFkyc3ViR1Z1WjNSb095QXJLMmtwSUh0Y2JpQWdJQ0FnSUNBZ1kzTjBZV05yVzJsZExsOWpiM1Z1ZEMwdFhHNGdJQ0FnSUNCOVhHNGdJQ0FnSUNCMllYSWdjR0Z5Wlc1MElEMGdZM04wWVdOclcyTnpkR0ZqYXk1c1pXNW5kR2d0TWwxY2JpQWdJQ0FnSUdacGVFUnZkV0pzWlVKc1lXTnJLR056ZEdGamF5bGNiaUFnSUNBZ0lDOHZSbWw0SUhWd0lHeHBibXR6WEc0Z0lDQWdJQ0JwWmlod1lYSmxiblF1YkdWbWRDQTlQVDBnYmlrZ2UxeHVJQ0FnSUNBZ0lDQndZWEpsYm5RdWJHVm1kQ0E5SUc1MWJHeGNiaUFnSUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNBZ0lIQmhjbVZ1ZEM1eWFXZG9kQ0E5SUc1MWJHeGNiaUFnSUNBZ0lIMWNiaUFnSUNCOVhHNGdJSDFjYmlBZ2NtVjBkWEp1SUc1bGR5QlNaV1JDYkdGamExUnlaV1VvZEdocGN5NTBjbVZsTGw5amIyMXdZWEpsTENCamMzUmhZMnRiTUYwcFhHNTlYRzVjYmk4dlVtVjBkWEp1Y3lCclpYbGNiazlpYW1WamRDNWtaV1pwYm1WUWNtOXdaWEowZVNocGNISnZkRzhzSUZ3aWEyVjVYQ0lzSUh0Y2JpQWdaMlYwT2lCbWRXNWpkR2x2YmlncElIdGNiaUFnSUNCcFppaDBhR2x6TGw5emRHRmpheTVzWlc1bmRHZ2dQaUF3S1NCN1hHNGdJQ0FnSUNCeVpYUjFjbTRnZEdocGN5NWZjM1JoWTJ0YmRHaHBjeTVmYzNSaFkyc3ViR1Z1WjNSb0xURmRMbXRsZVZ4dUlDQWdJSDFjYmlBZ0lDQnlaWFIxY201Y2JpQWdmU3hjYmlBZ1pXNTFiV1Z5WVdKc1pUb2dkSEoxWlZ4dWZTbGNibHh1THk5U1pYUjFjbTV6SUhaaGJIVmxYRzVQWW1wbFkzUXVaR1ZtYVc1bFVISnZjR1Z5ZEhrb2FYQnliM1J2TENCY0luWmhiSFZsWENJc0lIdGNiaUFnWjJWME9pQm1kVzVqZEdsdmJpZ3BJSHRjYmlBZ0lDQnBaaWgwYUdsekxsOXpkR0ZqYXk1c1pXNW5kR2dnUGlBd0tTQjdYRzRnSUNBZ0lDQnlaWFIxY200Z2RHaHBjeTVmYzNSaFkydGJkR2hwY3k1ZmMzUmhZMnN1YkdWdVozUm9MVEZkTG5aaGJIVmxYRzRnSUNBZ2ZWeHVJQ0FnSUhKbGRIVnlibHh1SUNCOUxGeHVJQ0JsYm5WdFpYSmhZbXhsT2lCMGNuVmxYRzU5S1Z4dVhHNWNiaTh2VW1WMGRYSnVjeUIwYUdVZ2NHOXphWFJwYjI0Z2IyWWdkR2hwY3lCcGRHVnlZWFJ2Y2lCcGJpQjBhR1VnYzI5eWRHVmtJR3hwYzNSY2JrOWlhbVZqZEM1a1pXWnBibVZRY205d1pYSjBlU2hwY0hKdmRHOHNJRndpYVc1a1pYaGNJaXdnZTF4dUlDQm5aWFE2SUdaMWJtTjBhVzl1S0NrZ2UxeHVJQ0FnSUhaaGNpQnBaSGdnUFNBd1hHNGdJQ0FnZG1GeUlITjBZV05ySUQwZ2RHaHBjeTVmYzNSaFkydGNiaUFnSUNCcFppaHpkR0ZqYXk1c1pXNW5kR2dnUFQwOUlEQXBJSHRjYmlBZ0lDQWdJSFpoY2lCeUlEMGdkR2hwY3k1MGNtVmxMbkp2YjNSY2JpQWdJQ0FnSUdsbUtISXBJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSEl1WDJOdmRXNTBYRzRnSUNBZ0lDQjlYRzRnSUNBZ0lDQnlaWFIxY200Z01GeHVJQ0FnSUgwZ1pXeHpaU0JwWmloemRHRmphMXR6ZEdGamF5NXNaVzVuZEdndE1WMHViR1ZtZENrZ2UxeHVJQ0FnSUNBZ2FXUjRJRDBnYzNSaFkydGJjM1JoWTJzdWJHVnVaM1JvTFRGZExteGxablF1WDJOdmRXNTBYRzRnSUNBZ2ZWeHVJQ0FnSUdadmNpaDJZWElnY3oxemRHRmpheTVzWlc1bmRHZ3RNanNnY3o0OU1Ec2dMUzF6S1NCN1hHNGdJQ0FnSUNCcFppaHpkR0ZqYTF0ekt6RmRJRDA5UFNCemRHRmphMXR6WFM1eWFXZG9kQ2tnZTF4dUlDQWdJQ0FnSUNBcksybGtlRnh1SUNBZ0lDQWdJQ0JwWmloemRHRmphMXR6WFM1c1pXWjBLU0I3WEc0Z0lDQWdJQ0FnSUNBZ2FXUjRJQ3M5SUhOMFlXTnJXM05kTG14bFpuUXVYMk52ZFc1MFhHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lIMWNiaUFnSUNCOVhHNGdJQ0FnY21WMGRYSnVJR2xrZUZ4dUlDQjlMRnh1SUNCbGJuVnRaWEpoWW14bE9pQjBjblZsWEc1OUtWeHVYRzR2TDBGa2RtRnVZMlZ6SUdsMFpYSmhkRzl5SUhSdklHNWxlSFFnWld4bGJXVnVkQ0JwYmlCc2FYTjBYRzVwY0hKdmRHOHVibVY0ZENBOUlHWjFibU4wYVc5dUtDa2dlMXh1SUNCMllYSWdjM1JoWTJzZ1BTQjBhR2x6TGw5emRHRmphMXh1SUNCcFppaHpkR0ZqYXk1c1pXNW5kR2dnUFQwOUlEQXBJSHRjYmlBZ0lDQnlaWFIxY201Y2JpQWdmVnh1SUNCMllYSWdiaUE5SUhOMFlXTnJXM04wWVdOckxteGxibWQwYUMweFhWeHVJQ0JwWmlodUxuSnBaMmgwS1NCN1hHNGdJQ0FnYmlBOUlHNHVjbWxuYUhSY2JpQWdJQ0IzYUdsc1pTaHVLU0I3WEc0Z0lDQWdJQ0J6ZEdGamF5NXdkWE5vS0c0cFhHNGdJQ0FnSUNCdUlEMGdiaTVzWldaMFhHNGdJQ0FnZlZ4dUlDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUhOMFlXTnJMbkJ2Y0NncFhHNGdJQ0FnZDJocGJHVW9jM1JoWTJzdWJHVnVaM1JvSUQ0Z01DQW1KaUJ6ZEdGamExdHpkR0ZqYXk1c1pXNW5kR2d0TVYwdWNtbG5hSFFnUFQwOUlHNHBJSHRjYmlBZ0lDQWdJRzRnUFNCemRHRmphMXR6ZEdGamF5NXNaVzVuZEdndE1WMWNiaUFnSUNBZ0lITjBZV05yTG5CdmNDZ3BYRzRnSUNBZ2ZWeHVJQ0I5WEc1OVhHNWNiaTh2UTJobFkydHpJR2xtSUdsMFpYSmhkRzl5SUdseklHRjBJR1Z1WkNCdlppQjBjbVZsWEc1UFltcGxZM1F1WkdWbWFXNWxVSEp2Y0dWeWRIa29hWEJ5YjNSdkxDQmNJbWhoYzA1bGVIUmNJaXdnZTF4dUlDQm5aWFE2SUdaMWJtTjBhVzl1S0NrZ2UxeHVJQ0FnSUhaaGNpQnpkR0ZqYXlBOUlIUm9hWE11WDNOMFlXTnJYRzRnSUNBZ2FXWW9jM1JoWTJzdWJHVnVaM1JvSUQwOVBTQXdLU0I3WEc0Z0lDQWdJQ0J5WlhSMWNtNGdabUZzYzJWY2JpQWdJQ0I5WEc0Z0lDQWdhV1lvYzNSaFkydGJjM1JoWTJzdWJHVnVaM1JvTFRGZExuSnBaMmgwS1NCN1hHNGdJQ0FnSUNCeVpYUjFjbTRnZEhKMVpWeHVJQ0FnSUgxY2JpQWdJQ0JtYjNJb2RtRnlJSE05YzNSaFkyc3ViR1Z1WjNSb0xURTdJSE0rTURzZ0xTMXpLU0I3WEc0Z0lDQWdJQ0JwWmloemRHRmphMXR6TFRGZExteGxablFnUFQwOUlITjBZV05yVzNOZEtTQjdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQjBjblZsWEc0Z0lDQWdJQ0I5WEc0Z0lDQWdmVnh1SUNBZ0lISmxkSFZ5YmlCbVlXeHpaVnh1SUNCOVhHNTlLVnh1WEc0dkwxVndaR0YwWlNCMllXeDFaVnh1YVhCeWIzUnZMblZ3WkdGMFpTQTlJR1oxYm1OMGFXOXVLSFpoYkhWbEtTQjdYRzRnSUhaaGNpQnpkR0ZqYXlBOUlIUm9hWE11WDNOMFlXTnJYRzRnSUdsbUtITjBZV05yTG14bGJtZDBhQ0E5UFQwZ01Da2dlMXh1SUNBZ0lIUm9jbTkzSUc1bGR5QkZjbkp2Y2loY0lrTmhiaWQwSUhWd1pHRjBaU0JsYlhCMGVTQnViMlJsSVZ3aUtWeHVJQ0I5WEc0Z0lIWmhjaUJqYzNSaFkyc2dQU0J1WlhjZ1FYSnlZWGtvYzNSaFkyc3ViR1Z1WjNSb0tWeHVJQ0IyWVhJZ2JpQTlJSE4wWVdOclczTjBZV05yTG14bGJtZDBhQzB4WFZ4dUlDQmpjM1JoWTJ0YlkzTjBZV05yTG14bGJtZDBhQzB4WFNBOUlHNWxkeUJTUWs1dlpHVW9iaTVmWTI5c2IzSXNJRzR1YTJWNUxDQjJZV3gxWlN3Z2JpNXNaV1owTENCdUxuSnBaMmgwTENCdUxsOWpiM1Z1ZENsY2JpQWdabTl5S0haaGNpQnBQWE4wWVdOckxteGxibWQwYUMweU95QnBQajB3T3lBdExXa3BJSHRjYmlBZ0lDQnVJRDBnYzNSaFkydGJhVjFjYmlBZ0lDQnBaaWh1TG14bFpuUWdQVDA5SUhOMFlXTnJXMmtyTVYwcElIdGNiaUFnSUNBZ0lHTnpkR0ZqYTF0cFhTQTlJRzVsZHlCU1FrNXZaR1VvYmk1ZlkyOXNiM0lzSUc0dWEyVjVMQ0J1TG5aaGJIVmxMQ0JqYzNSaFkydGJhU3N4WFN3Z2JpNXlhV2RvZEN3Z2JpNWZZMjkxYm5RcFhHNGdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJR056ZEdGamExdHBYU0E5SUc1bGR5QlNRazV2WkdVb2JpNWZZMjlzYjNJc0lHNHVhMlY1TENCdUxuWmhiSFZsTENCdUxteGxablFzSUdOemRHRmphMXRwS3pGZExDQnVMbDlqYjNWdWRDbGNiaUFnSUNCOVhHNGdJSDFjYmlBZ2NtVjBkWEp1SUc1bGR5QlNaV1JDYkdGamExUnlaV1VvZEdocGN5NTBjbVZsTGw5amIyMXdZWEpsTENCamMzUmhZMnRiTUYwcFhHNTlYRzVjYmk4dlRXOTJaWE1nYVhSbGNtRjBiM0lnWW1GamEzZGhjbVFnYjI1bElHVnNaVzFsYm5SY2JtbHdjbTkwYnk1d2NtVjJJRDBnWm5WdVkzUnBiMjRvS1NCN1hHNGdJSFpoY2lCemRHRmpheUE5SUhSb2FYTXVYM04wWVdOclhHNGdJR2xtS0hOMFlXTnJMbXhsYm1kMGFDQTlQVDBnTUNrZ2UxeHVJQ0FnSUhKbGRIVnlibHh1SUNCOVhHNGdJSFpoY2lCdUlEMGdjM1JoWTJ0YmMzUmhZMnN1YkdWdVozUm9MVEZkWEc0Z0lHbG1LRzR1YkdWbWRDa2dlMXh1SUNBZ0lHNGdQU0J1TG14bFpuUmNiaUFnSUNCM2FHbHNaU2h1S1NCN1hHNGdJQ0FnSUNCemRHRmpheTV3ZFhOb0tHNHBYRzRnSUNBZ0lDQnVJRDBnYmk1eWFXZG9kRnh1SUNBZ0lIMWNiaUFnZlNCbGJITmxJSHRjYmlBZ0lDQnpkR0ZqYXk1d2IzQW9LVnh1SUNBZ0lIZG9hV3hsS0hOMFlXTnJMbXhsYm1kMGFDQStJREFnSmlZZ2MzUmhZMnRiYzNSaFkyc3ViR1Z1WjNSb0xURmRMbXhsWm5RZ1BUMDlJRzRwSUh0Y2JpQWdJQ0FnSUc0Z1BTQnpkR0ZqYTF0emRHRmpheTVzWlc1bmRHZ3RNVjFjYmlBZ0lDQWdJSE4wWVdOckxuQnZjQ2dwWEc0Z0lDQWdmVnh1SUNCOVhHNTlYRzVjYmk4dlEyaGxZMnR6SUdsbUlHbDBaWEpoZEc5eUlHbHpJR0YwSUhOMFlYSjBJRzltSUhSeVpXVmNiazlpYW1WamRDNWtaV1pwYm1WUWNtOXdaWEowZVNocGNISnZkRzhzSUZ3aWFHRnpVSEpsZGx3aUxDQjdYRzRnSUdkbGREb2dablZ1WTNScGIyNG9LU0I3WEc0Z0lDQWdkbUZ5SUhOMFlXTnJJRDBnZEdocGN5NWZjM1JoWTJ0Y2JpQWdJQ0JwWmloemRHRmpheTVzWlc1bmRHZ2dQVDA5SURBcElIdGNiaUFnSUNBZ0lISmxkSFZ5YmlCbVlXeHpaVnh1SUNBZ0lIMWNiaUFnSUNCcFppaHpkR0ZqYTF0emRHRmpheTVzWlc1bmRHZ3RNVjB1YkdWbWRDa2dlMXh1SUNBZ0lDQWdjbVYwZFhKdUlIUnlkV1ZjYmlBZ0lDQjlYRzRnSUNBZ1ptOXlLSFpoY2lCelBYTjBZV05yTG14bGJtZDBhQzB4T3lCelBqQTdJQzB0Y3lrZ2UxeHVJQ0FnSUNBZ2FXWW9jM1JoWTJ0YmN5MHhYUzV5YVdkb2RDQTlQVDBnYzNSaFkydGJjMTBwSUh0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhSeWRXVmNiaUFnSUNBZ0lIMWNiaUFnSUNCOVhHNGdJQ0FnY21WMGRYSnVJR1poYkhObFhHNGdJSDFjYm4wcFhHNWNiaTh2UkdWbVlYVnNkQ0JqYjIxd1lYSnBjMjl1SUdaMWJtTjBhVzl1WEc1bWRXNWpkR2x2YmlCa1pXWmhkV3gwUTI5dGNHRnlaU2hoTENCaUtTQjdYRzRnSUdsbUtHRWdQQ0JpS1NCN1hHNGdJQ0FnY21WMGRYSnVJQzB4WEc0Z0lIMWNiaUFnYVdZb1lTQStJR0lwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdNVnh1SUNCOVhHNGdJSEpsZEhWeWJpQXdYRzU5WEc1Y2JpOHZRblZwYkdRZ1lTQjBjbVZsWEc1bWRXNWpkR2x2YmlCamNtVmhkR1ZTUWxSeVpXVW9ZMjl0Y0dGeVpTa2dlMXh1SUNCeVpYUjFjbTRnYm1WM0lGSmxaRUpzWVdOclZISmxaU2hqYjIxd1lYSmxJSHg4SUdSbFptRjFiSFJEYjIxd1lYSmxMQ0J1ZFd4c0tWeHVmU0lzSW1WNGNHOXlkSE11Y21WaFpDQTlJR1oxYm1OMGFXOXVJQ2hpZFdabVpYSXNJRzltWm5ObGRDd2dhWE5NUlN3Z2JVeGxiaXdnYmtKNWRHVnpLU0I3WEc0Z0lIWmhjaUJsTENCdFhHNGdJSFpoY2lCbFRHVnVJRDBnS0c1Q2VYUmxjeUFxSURncElDMGdiVXhsYmlBdElERmNiaUFnZG1GeUlHVk5ZWGdnUFNBb01TQThQQ0JsVEdWdUtTQXRJREZjYmlBZ2RtRnlJR1ZDYVdGeklEMGdaVTFoZUNBK1BpQXhYRzRnSUhaaGNpQnVRbWwwY3lBOUlDMDNYRzRnSUhaaGNpQnBJRDBnYVhOTVJTQS9JQ2h1UW5sMFpYTWdMU0F4S1NBNklEQmNiaUFnZG1GeUlHUWdQU0JwYzB4RklEOGdMVEVnT2lBeFhHNGdJSFpoY2lCeklEMGdZblZtWm1WeVcyOW1abk5sZENBcklHbGRYRzVjYmlBZ2FTQXJQU0JrWEc1Y2JpQWdaU0E5SUhNZ0ppQW9LREVnUER3Z0tDMXVRbWwwY3lrcElDMGdNU2xjYmlBZ2N5QStQajBnS0MxdVFtbDBjeWxjYmlBZ2JrSnBkSE1nS3owZ1pVeGxibHh1SUNCbWIzSWdLRHNnYmtKcGRITWdQaUF3T3lCbElEMGdLR1VnS2lBeU5UWXBJQ3NnWW5WbVptVnlXMjltWm5ObGRDQXJJR2xkTENCcElDczlJR1FzSUc1Q2FYUnpJQzA5SURncElIdDlYRzVjYmlBZ2JTQTlJR1VnSmlBb0tERWdQRHdnS0MxdVFtbDBjeWtwSUMwZ01TbGNiaUFnWlNBK1BqMGdLQzF1UW1sMGN5bGNiaUFnYmtKcGRITWdLejBnYlV4bGJseHVJQ0JtYjNJZ0tEc2dia0pwZEhNZ1BpQXdPeUJ0SUQwZ0tHMGdLaUF5TlRZcElDc2dZblZtWm1WeVcyOW1abk5sZENBcklHbGRMQ0JwSUNzOUlHUXNJRzVDYVhSeklDMDlJRGdwSUh0OVhHNWNiaUFnYVdZZ0tHVWdQVDA5SURBcElIdGNiaUFnSUNCbElEMGdNU0F0SUdWQ2FXRnpYRzRnSUgwZ1pXeHpaU0JwWmlBb1pTQTlQVDBnWlUxaGVDa2dlMXh1SUNBZ0lISmxkSFZ5YmlCdElEOGdUbUZPSURvZ0tDaHpJRDhnTFRFZ09pQXhLU0FxSUVsdVptbHVhWFI1S1Z4dUlDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUcwZ1BTQnRJQ3NnVFdGMGFDNXdiM2NvTWl3Z2JVeGxiaWxjYmlBZ0lDQmxJRDBnWlNBdElHVkNhV0Z6WEc0Z0lIMWNiaUFnY21WMGRYSnVJQ2h6SUQ4Z0xURWdPaUF4S1NBcUlHMGdLaUJOWVhSb0xuQnZkeWd5TENCbElDMGdiVXhsYmlsY2JuMWNibHh1Wlhod2IzSjBjeTUzY21sMFpTQTlJR1oxYm1OMGFXOXVJQ2hpZFdabVpYSXNJSFpoYkhWbExDQnZabVp6WlhRc0lHbHpURVVzSUcxTVpXNHNJRzVDZVhSbGN5a2dlMXh1SUNCMllYSWdaU3dnYlN3Z1kxeHVJQ0IyWVhJZ1pVeGxiaUE5SUNodVFubDBaWE1nS2lBNEtTQXRJRzFNWlc0Z0xTQXhYRzRnSUhaaGNpQmxUV0Y0SUQwZ0tERWdQRHdnWlV4bGJpa2dMU0F4WEc0Z0lIWmhjaUJsUW1saGN5QTlJR1ZOWVhnZ1BqNGdNVnh1SUNCMllYSWdjblFnUFNBb2JVeGxiaUE5UFQwZ01qTWdQeUJOWVhSb0xuQnZkeWd5TENBdE1qUXBJQzBnVFdGMGFDNXdiM2NvTWl3Z0xUYzNLU0E2SURBcFhHNGdJSFpoY2lCcElEMGdhWE5NUlNBL0lEQWdPaUFvYmtKNWRHVnpJQzBnTVNsY2JpQWdkbUZ5SUdRZ1BTQnBjMHhGSUQ4Z01TQTZJQzB4WEc0Z0lIWmhjaUJ6SUQwZ2RtRnNkV1VnUENBd0lIeDhJQ2gyWVd4MVpTQTlQVDBnTUNBbUppQXhJQzhnZG1Gc2RXVWdQQ0F3S1NBL0lERWdPaUF3WEc1Y2JpQWdkbUZzZFdVZ1BTQk5ZWFJvTG1GaWN5aDJZV3gxWlNsY2JseHVJQ0JwWmlBb2FYTk9ZVTRvZG1Gc2RXVXBJSHg4SUhaaGJIVmxJRDA5UFNCSmJtWnBibWwwZVNrZ2UxeHVJQ0FnSUcwZ1BTQnBjMDVoVGloMllXeDFaU2tnUHlBeElEb2dNRnh1SUNBZ0lHVWdQU0JsVFdGNFhHNGdJSDBnWld4elpTQjdYRzRnSUNBZ1pTQTlJRTFoZEdndVpteHZiM0lvVFdGMGFDNXNiMmNvZG1Gc2RXVXBJQzhnVFdGMGFDNU1UaklwWEc0Z0lDQWdhV1lnS0haaGJIVmxJQ29nS0dNZ1BTQk5ZWFJvTG5CdmR5Z3lMQ0F0WlNrcElEd2dNU2tnZTF4dUlDQWdJQ0FnWlMwdFhHNGdJQ0FnSUNCaklDbzlJREpjYmlBZ0lDQjlYRzRnSUNBZ2FXWWdLR1VnS3lCbFFtbGhjeUErUFNBeEtTQjdYRzRnSUNBZ0lDQjJZV3gxWlNBclBTQnlkQ0F2SUdOY2JpQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdkbUZzZFdVZ0t6MGdjblFnS2lCTllYUm9MbkJ2ZHlneUxDQXhJQzBnWlVKcFlYTXBYRzRnSUNBZ2ZWeHVJQ0FnSUdsbUlDaDJZV3gxWlNBcUlHTWdQajBnTWlrZ2UxeHVJQ0FnSUNBZ1pTc3JYRzRnSUNBZ0lDQmpJQzg5SURKY2JpQWdJQ0I5WEc1Y2JpQWdJQ0JwWmlBb1pTQXJJR1ZDYVdGeklENDlJR1ZOWVhncElIdGNiaUFnSUNBZ0lHMGdQU0F3WEc0Z0lDQWdJQ0JsSUQwZ1pVMWhlRnh1SUNBZ0lIMGdaV3h6WlNCcFppQW9aU0FySUdWQ2FXRnpJRDQ5SURFcElIdGNiaUFnSUNBZ0lHMGdQU0FvS0haaGJIVmxJQ29nWXlrZ0xTQXhLU0FxSUUxaGRHZ3VjRzkzS0RJc0lHMU1aVzRwWEc0Z0lDQWdJQ0JsSUQwZ1pTQXJJR1ZDYVdGelhHNGdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJRzBnUFNCMllXeDFaU0FxSUUxaGRHZ3VjRzkzS0RJc0lHVkNhV0Z6SUMwZ01Ta2dLaUJOWVhSb0xuQnZkeWd5TENCdFRHVnVLVnh1SUNBZ0lDQWdaU0E5SURCY2JpQWdJQ0I5WEc0Z0lIMWNibHh1SUNCbWIzSWdLRHNnYlV4bGJpQStQU0E0T3lCaWRXWm1aWEpiYjJabWMyVjBJQ3NnYVYwZ1BTQnRJQ1lnTUhobVppd2dhU0FyUFNCa0xDQnRJQzg5SURJMU5pd2diVXhsYmlBdFBTQTRLU0I3ZlZ4dVhHNGdJR1VnUFNBb1pTQThQQ0J0VEdWdUtTQjhJRzFjYmlBZ1pVeGxiaUFyUFNCdFRHVnVYRzRnSUdadmNpQW9PeUJsVEdWdUlENGdNRHNnWW5WbVptVnlXMjltWm5ObGRDQXJJR2xkSUQwZ1pTQW1JREI0Wm1Zc0lHa2dLejBnWkN3Z1pTQXZQU0F5TlRZc0lHVk1aVzRnTFQwZ09Da2dlMzFjYmx4dUlDQmlkV1ptWlhKYmIyWm1jMlYwSUNzZ2FTQXRJR1JkSUh3OUlITWdLaUF4TWpoY2JuMWNiaUlzSWlkMWMyVWdjM1J5YVdOMEp6dGNiblpoY2lCMGVYQmxjeUE5SUZ0Y2JpQWdjbVZ4ZFdseVpTZ25MaTl1WlhoMFZHbGpheWNwTEZ4dUlDQnlaWEYxYVhKbEtDY3VMMjExZEdGMGFXOXVMbXB6Snlrc1hHNGdJSEpsY1hWcGNtVW9KeTR2YldWemMyRm5aVU5vWVc1dVpXd25LU3hjYmlBZ2NtVnhkV2x5WlNnbkxpOXpkR0YwWlVOb1lXNW5aU2NwTEZ4dUlDQnlaWEYxYVhKbEtDY3VMM1JwYldWdmRYUW5LVnh1WFR0Y2JuWmhjaUJrY21GcGJtbHVaenRjYm5aaGNpQmpkWEp5Wlc1MFVYVmxkV1U3WEc1MllYSWdjWFZsZFdWSmJtUmxlQ0E5SUMweE8xeHVkbUZ5SUhGMVpYVmxJRDBnVzEwN1hHNTJZWElnYzJOb1pXUjFiR1ZrSUQwZ1ptRnNjMlU3WEc1bWRXNWpkR2x2YmlCamJHVmhibFZ3VG1WNGRGUnBZMnNvS1NCN1hHNGdJR2xtSUNnaFpISmhhVzVwYm1jZ2ZId2dJV04xY25KbGJuUlJkV1YxWlNrZ2UxeHVJQ0FnSUhKbGRIVnlianRjYmlBZ2ZWeHVJQ0JrY21GcGJtbHVaeUE5SUdaaGJITmxPMXh1SUNCcFppQW9ZM1Z5Y21WdWRGRjFaWFZsTG14bGJtZDBhQ2tnZTF4dUlDQWdJSEYxWlhWbElEMGdZM1Z5Y21WdWRGRjFaWFZsTG1OdmJtTmhkQ2h4ZFdWMVpTazdYRzRnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdjWFZsZFdWSmJtUmxlQ0E5SUMweE8xeHVJQ0I5WEc0Z0lHbG1JQ2h4ZFdWMVpTNXNaVzVuZEdncElIdGNiaUFnSUNCdVpYaDBWR2xqYXlncE8xeHVJQ0I5WEc1OVhHNWNiaTh2Ym1GdFpXUWdibVY0ZEZScFkyc2dabTl5SUd4bGMzTWdZMjl1Wm5WemFXNW5JSE4wWVdOcklIUnlZV05sYzF4dVpuVnVZM1JwYjI0Z2JtVjRkRlJwWTJzb0tTQjdYRzRnSUdsbUlDaGtjbUZwYm1sdVp5a2dlMXh1SUNBZ0lISmxkSFZ5Ymp0Y2JpQWdmVnh1SUNCelkyaGxaSFZzWldRZ1BTQm1ZV3h6WlR0Y2JpQWdaSEpoYVc1cGJtY2dQU0IwY25WbE8xeHVJQ0IyWVhJZ2JHVnVJRDBnY1hWbGRXVXViR1Z1WjNSb08xeHVJQ0IyWVhJZ2RHbHRaVzkxZENBOUlITmxkRlJwYldWdmRYUW9ZMnhsWVc1VmNFNWxlSFJVYVdOcktUdGNiaUFnZDJocGJHVWdLR3hsYmlrZ2UxeHVJQ0FnSUdOMWNuSmxiblJSZFdWMVpTQTlJSEYxWlhWbE8xeHVJQ0FnSUhGMVpYVmxJRDBnVzEwN1hHNGdJQ0FnZDJocGJHVWdLR04xY25KbGJuUlJkV1YxWlNBbUppQXJLM0YxWlhWbFNXNWtaWGdnUENCc1pXNHBJSHRjYmlBZ0lDQWdJR04xY25KbGJuUlJkV1YxWlZ0eGRXVjFaVWx1WkdWNFhTNXlkVzRvS1R0Y2JpQWdJQ0I5WEc0Z0lDQWdjWFZsZFdWSmJtUmxlQ0E5SUMweE8xeHVJQ0FnSUd4bGJpQTlJSEYxWlhWbExteGxibWQwYUR0Y2JpQWdmVnh1SUNCamRYSnlaVzUwVVhWbGRXVWdQU0J1ZFd4c08xeHVJQ0J4ZFdWMVpVbHVaR1Y0SUQwZ0xURTdYRzRnSUdSeVlXbHVhVzVuSUQwZ1ptRnNjMlU3WEc0Z0lHTnNaV0Z5VkdsdFpXOTFkQ2gwYVcxbGIzVjBLVHRjYm4xY2JuWmhjaUJ6WTJobFpIVnNaVVJ5WVdsdU8xeHVkbUZ5SUdrZ1BTQXRNVHRjYm5aaGNpQnNaVzRnUFNCMGVYQmxjeTVzWlc1bmRHZzdYRzUzYUdsc1pTQW9LeXRwSUR3Z2JHVnVLU0I3WEc0Z0lHbG1JQ2gwZVhCbGMxdHBYU0FtSmlCMGVYQmxjMXRwWFM1MFpYTjBJQ1ltSUhSNWNHVnpXMmxkTG5SbGMzUW9LU2tnZTF4dUlDQWdJSE5qYUdWa2RXeGxSSEpoYVc0Z1BTQjBlWEJsYzF0cFhTNXBibk4wWVd4c0tHNWxlSFJVYVdOcktUdGNiaUFnSUNCaWNtVmhhenRjYmlBZ2ZWeHVmVnh1THk4Z2RqZ2diR2xyWlhNZ2NISmxaR2xqZEdsaWJHVWdiMkpxWldOMGMxeHVablZ1WTNScGIyNGdTWFJsYlNobWRXNHNJR0Z5Y21GNUtTQjdYRzRnSUhSb2FYTXVablZ1SUQwZ1puVnVPMXh1SUNCMGFHbHpMbUZ5Y21GNUlEMGdZWEp5WVhrN1hHNTlYRzVKZEdWdExuQnliM1J2ZEhsd1pTNXlkVzRnUFNCbWRXNWpkR2x2YmlBb0tTQjdYRzRnSUhaaGNpQm1kVzRnUFNCMGFHbHpMbVoxYmp0Y2JpQWdkbUZ5SUdGeWNtRjVJRDBnZEdocGN5NWhjbkpoZVR0Y2JpQWdjM2RwZEdOb0lDaGhjbkpoZVM1c1pXNW5kR2dwSUh0Y2JpQWdZMkZ6WlNBd09seHVJQ0FnSUhKbGRIVnliaUJtZFc0b0tUdGNiaUFnWTJGelpTQXhPbHh1SUNBZ0lISmxkSFZ5YmlCbWRXNG9ZWEp5WVhsYk1GMHBPMXh1SUNCallYTmxJREk2WEc0Z0lDQWdjbVYwZFhKdUlHWjFiaWhoY25KaGVWc3dYU3dnWVhKeVlYbGJNVjBwTzF4dUlDQmpZWE5sSURNNlhHNGdJQ0FnY21WMGRYSnVJR1oxYmloaGNuSmhlVnN3WFN3Z1lYSnlZWGxiTVYwc0lHRnljbUY1V3pKZEtUdGNiaUFnWkdWbVlYVnNkRHBjYmlBZ0lDQnlaWFIxY200Z1puVnVMbUZ3Y0d4NUtHNTFiR3dzSUdGeWNtRjVLVHRjYmlBZ2ZWeHVYRzU5TzF4dWJXOWtkV3hsTG1WNGNHOXlkSE1nUFNCcGJXMWxaR2xoZEdVN1hHNW1kVzVqZEdsdmJpQnBiVzFsWkdsaGRHVW9kR0Z6YXlrZ2UxeHVJQ0IyWVhJZ1lYSm5jeUE5SUc1bGR5QkJjbkpoZVNoaGNtZDFiV1Z1ZEhNdWJHVnVaM1JvSUMwZ01TazdYRzRnSUdsbUlDaGhjbWQxYldWdWRITXViR1Z1WjNSb0lENGdNU2tnZTF4dUlDQWdJR1p2Y2lBb2RtRnlJR2tnUFNBeE95QnBJRHdnWVhKbmRXMWxiblJ6TG14bGJtZDBhRHNnYVNzcktTQjdYRzRnSUNBZ0lDQmhjbWR6VzJrZ0xTQXhYU0E5SUdGeVozVnRaVzUwYzF0cFhUdGNiaUFnSUNCOVhHNGdJSDFjYmlBZ2NYVmxkV1V1Y0hWemFDaHVaWGNnU1hSbGJTaDBZWE5yTENCaGNtZHpLU2s3WEc0Z0lHbG1JQ2doYzJOb1pXUjFiR1ZrSUNZbUlDRmtjbUZwYm1sdVp5a2dlMXh1SUNBZ0lITmphR1ZrZFd4bFpDQTlJSFJ5ZFdVN1hHNGdJQ0FnYzJOb1pXUjFiR1ZFY21GcGJpZ3BPMXh1SUNCOVhHNTlYRzRpTENJbmRYTmxJSE4wY21samRDYzdYRzVjYm1WNGNHOXlkSE11ZEdWemRDQTlJR1oxYm1OMGFXOXVJQ2dwSUh0Y2JpQWdhV1lnS0dkc2IySmhiQzV6WlhSSmJXMWxaR2xoZEdVcElIdGNiaUFnSUNBdkx5QjNaU0JqWVc0Z2IyNXNlU0JuWlhRZ2FHVnlaU0JwYmlCSlJURXdYRzRnSUNBZ0x5OGdkMmhwWTJnZ1pHOWxjMjRuZENCb1lXNWtaV3dnY0c5emRFMWxjM05oWjJVZ2QyVnNiRnh1SUNBZ0lISmxkSFZ5YmlCbVlXeHpaVHRjYmlBZ2ZWeHVJQ0J5WlhSMWNtNGdkSGx3Wlc5bUlHZHNiMkpoYkM1TlpYTnpZV2RsUTJoaGJtNWxiQ0FoUFQwZ0ozVnVaR1ZtYVc1bFpDYzdYRzU5TzF4dVhHNWxlSEJ2Y25SekxtbHVjM1JoYkd3Z1BTQm1kVzVqZEdsdmJpQW9ablZ1WXlrZ2UxeHVJQ0IyWVhJZ1kyaGhibTVsYkNBOUlHNWxkeUJuYkc5aVlXd3VUV1Z6YzJGblpVTm9ZVzV1Wld3b0tUdGNiaUFnWTJoaGJtNWxiQzV3YjNKME1TNXZibTFsYzNOaFoyVWdQU0JtZFc1ak8xeHVJQ0J5WlhSMWNtNGdablZ1WTNScGIyNGdLQ2tnZTF4dUlDQWdJR05vWVc1dVpXd3VjRzl5ZERJdWNHOXpkRTFsYzNOaFoyVW9NQ2s3WEc0Z0lIMDdYRzU5T3lJc0lpZDFjMlVnYzNSeWFXTjBKenRjYmk4dlltRnpaV1FnYjJabUlISnpkbkFnYUhSMGNITTZMeTluYVhSb2RXSXVZMjl0TDNScGJHUmxhVzh2Y25OMmNDNXFjMXh1THk5c2FXTmxibk5sSUdoMGRIQnpPaTh2WjJsMGFIVmlMbU52YlM5MGFXeGtaV2x2TDNKemRuQXVhbk12WW14dllpOXRZWE4wWlhJdlRFbERSVTVUUlZ4dUx5OW9kSFJ3Y3pvdkwyZHBkR2gxWWk1amIyMHZkR2xzWkdWcGJ5OXljM1p3TG1wekwySnNiMkl2YldGemRHVnlMMnhwWWk5eWMzWndMMkZ6WVhBdWFuTmNibHh1ZG1GeUlFMTFkR0YwYVc5dUlEMGdaMnh2WW1Gc0xrMTFkR0YwYVc5dVQySnpaWEoyWlhJZ2ZId2daMnh2WW1Gc0xsZGxZa3RwZEUxMWRHRjBhVzl1VDJKelpYSjJaWEk3WEc1Y2JtVjRjRzl5ZEhNdWRHVnpkQ0E5SUdaMWJtTjBhVzl1SUNncElIdGNiaUFnY21WMGRYSnVJRTExZEdGMGFXOXVPMXh1ZlR0Y2JseHVaWGh3YjNKMGN5NXBibk4wWVd4c0lEMGdablZ1WTNScGIyNGdLR2hoYm1Sc1pTa2dlMXh1SUNCMllYSWdZMkZzYkdWa0lEMGdNRHRjYmlBZ2RtRnlJRzlpYzJWeWRtVnlJRDBnYm1WM0lFMTFkR0YwYVc5dUtHaGhibVJzWlNrN1hHNGdJSFpoY2lCbGJHVnRaVzUwSUQwZ1oyeHZZbUZzTG1SdlkzVnRaVzUwTG1OeVpXRjBaVlJsZUhST2IyUmxLQ2NuS1R0Y2JpQWdiMkp6WlhKMlpYSXViMkp6WlhKMlpTaGxiR1Z0Wlc1MExDQjdYRzRnSUNBZ1kyaGhjbUZqZEdWeVJHRjBZVG9nZEhKMVpWeHVJQ0I5S1R0Y2JpQWdjbVYwZFhKdUlHWjFibU4wYVc5dUlDZ3BJSHRjYmlBZ0lDQmxiR1Z0Wlc1MExtUmhkR0VnUFNBb1kyRnNiR1ZrSUQwZ0t5dGpZV3hzWldRZ0pTQXlLVHRjYmlBZ2ZUdGNibjA3SWl3aUozVnpaU0J6ZEhKcFkzUW5PMXh1Wlhod2IzSjBjeTUwWlhOMElEMGdablZ1WTNScGIyNGdLQ2tnZTF4dUlDQXZMeUJFYjI0bmRDQm5aWFFnWm05dmJHVmtJR0o1SUdVdVp5NGdZbkp2ZDNObGNtbG1lU0JsYm5acGNtOXViV1Z1ZEhNdVhHNGdJSEpsZEhWeWJpQW9kSGx3Wlc5bUlIQnliMk5sYzNNZ0lUMDlJQ2QxYm1SbFptbHVaV1FuS1NBbUppQWhjSEp2WTJWemN5NWljbTkzYzJWeU8xeHVmVHRjYmx4dVpYaHdiM0owY3k1cGJuTjBZV3hzSUQwZ1puVnVZM1JwYjI0Z0tHWjFibU1wSUh0Y2JpQWdjbVYwZFhKdUlHWjFibU4wYVc5dUlDZ3BJSHRjYmlBZ0lDQndjbTlqWlhOekxtNWxlSFJVYVdOcktHWjFibU1wTzF4dUlDQjlPMXh1ZlR0Y2JpSXNJaWQxYzJVZ2MzUnlhV04wSnp0Y2JseHVaWGh3YjNKMGN5NTBaWE4wSUQwZ1puVnVZM1JwYjI0Z0tDa2dlMXh1SUNCeVpYUjFjbTRnSjJSdlkzVnRaVzUwSnlCcGJpQm5iRzlpWVd3Z0ppWWdKMjl1Y21WaFpIbHpkR0YwWldOb1lXNW5aU2NnYVc0Z1oyeHZZbUZzTG1SdlkzVnRaVzUwTG1OeVpXRjBaVVZzWlcxbGJuUW9KM05qY21sd2RDY3BPMXh1ZlR0Y2JseHVaWGh3YjNKMGN5NXBibk4wWVd4c0lEMGdablZ1WTNScGIyNGdLR2hoYm1Sc1pTa2dlMXh1SUNCeVpYUjFjbTRnWm5WdVkzUnBiMjRnS0NrZ2UxeHVYRzRnSUNBZ0x5OGdRM0psWVhSbElHRWdQSE5qY21sd2RENGdaV3hsYldWdWREc2dhWFJ6SUhKbFlXUjVjM1JoZEdWamFHRnVaMlVnWlhabGJuUWdkMmxzYkNCaVpTQm1hWEpsWkNCaGMzbHVZMmh5YjI1dmRYTnNlU0J2Ym1ObElHbDBJR2x6SUdsdWMyVnlkR1ZrWEc0Z0lDQWdMeThnYVc1MGJ5QjBhR1VnWkc5amRXMWxiblF1SUVSdklITnZMQ0IwYUhWeklIRjFaWFZwYm1jZ2RYQWdkR2hsSUhSaGMyc3VJRkpsYldWdFltVnlJSFJ2SUdOc1pXRnVJSFZ3SUc5dVkyVWdhWFFuY3lCaVpXVnVJR05oYkd4bFpDNWNiaUFnSUNCMllYSWdjMk55YVhCMFJXd2dQU0JuYkc5aVlXd3VaRzlqZFcxbGJuUXVZM0psWVhSbFJXeGxiV1Z1ZENnbmMyTnlhWEIwSnlrN1hHNGdJQ0FnYzJOeWFYQjBSV3d1YjI1eVpXRmtlWE4wWVhSbFkyaGhibWRsSUQwZ1puVnVZM1JwYjI0Z0tDa2dlMXh1SUNBZ0lDQWdhR0Z1Wkd4bEtDazdYRzVjYmlBZ0lDQWdJSE5qY21sd2RFVnNMbTl1Y21WaFpIbHpkR0YwWldOb1lXNW5aU0E5SUc1MWJHdzdYRzRnSUNBZ0lDQnpZM0pwY0hSRmJDNXdZWEpsYm5ST2IyUmxMbkpsYlc5MlpVTm9hV3hrS0hOamNtbHdkRVZzS1R0Y2JpQWdJQ0FnSUhOamNtbHdkRVZzSUQwZ2JuVnNiRHRjYmlBZ0lDQjlPMXh1SUNBZ0lHZHNiMkpoYkM1a2IyTjFiV1Z1ZEM1a2IyTjFiV1Z1ZEVWc1pXMWxiblF1WVhCd1pXNWtRMmhwYkdRb2MyTnlhWEIwUld3cE8xeHVYRzRnSUNBZ2NtVjBkWEp1SUdoaGJtUnNaVHRjYmlBZ2ZUdGNibjA3SWl3aUozVnpaU0J6ZEhKcFkzUW5PMXh1Wlhod2IzSjBjeTUwWlhOMElEMGdablZ1WTNScGIyNGdLQ2tnZTF4dUlDQnlaWFIxY200Z2RISjFaVHRjYm4wN1hHNWNibVY0Y0c5eWRITXVhVzV6ZEdGc2JDQTlJR1oxYm1OMGFXOXVJQ2gwS1NCN1hHNGdJSEpsZEhWeWJpQm1kVzVqZEdsdmJpQW9LU0I3WEc0Z0lDQWdjMlYwVkdsdFpXOTFkQ2gwTENBd0tUdGNiaUFnZlR0Y2JuMDdJaXdpYVdZZ0tIUjVjR1Z2WmlCUFltcGxZM1F1WTNKbFlYUmxJRDA5UFNBblpuVnVZM1JwYjI0bktTQjdYRzRnSUM4dklHbHRjR3hsYldWdWRHRjBhVzl1SUdaeWIyMGdjM1JoYm1SaGNtUWdibTlrWlM1cWN5QW5kWFJwYkNjZ2JXOWtkV3hsWEc0Z0lHMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ1puVnVZM1JwYjI0Z2FXNW9aWEpwZEhNb1kzUnZjaXdnYzNWd1pYSkRkRzl5S1NCN1hHNGdJQ0FnWTNSdmNpNXpkWEJsY2w4Z1BTQnpkWEJsY2tOMGIzSmNiaUFnSUNCamRHOXlMbkJ5YjNSdmRIbHdaU0E5SUU5aWFtVmpkQzVqY21WaGRHVW9jM1Z3WlhKRGRHOXlMbkJ5YjNSdmRIbHdaU3dnZTF4dUlDQWdJQ0FnWTI5dWMzUnlkV04wYjNJNklIdGNiaUFnSUNBZ0lDQWdkbUZzZFdVNklHTjBiM0lzWEc0Z0lDQWdJQ0FnSUdWdWRXMWxjbUZpYkdVNklHWmhiSE5sTEZ4dUlDQWdJQ0FnSUNCM2NtbDBZV0pzWlRvZ2RISjFaU3hjYmlBZ0lDQWdJQ0FnWTI5dVptbG5kWEpoWW14bE9pQjBjblZsWEc0Z0lDQWdJQ0I5WEc0Z0lDQWdmU2s3WEc0Z0lIMDdYRzU5SUdWc2MyVWdlMXh1SUNBdkx5QnZiR1FnYzJOb2IyOXNJSE5vYVcwZ1ptOXlJRzlzWkNCaWNtOTNjMlZ5YzF4dUlDQnRiMlIxYkdVdVpYaHdiM0owY3lBOUlHWjFibU4wYVc5dUlHbHVhR1Z5YVhSektHTjBiM0lzSUhOMWNHVnlRM1J2Y2lrZ2UxeHVJQ0FnSUdOMGIzSXVjM1Z3WlhKZklEMGdjM1Z3WlhKRGRHOXlYRzRnSUNBZ2RtRnlJRlJsYlhCRGRHOXlJRDBnWm5WdVkzUnBiMjRnS0NrZ2UzMWNiaUFnSUNCVVpXMXdRM1J2Y2k1d2NtOTBiM1I1Y0dVZ1BTQnpkWEJsY2tOMGIzSXVjSEp2ZEc5MGVYQmxYRzRnSUNBZ1kzUnZjaTV3Y205MGIzUjVjR1VnUFNCdVpYY2dWR1Z0Y0VOMGIzSW9LVnh1SUNBZ0lHTjBiM0l1Y0hKdmRHOTBlWEJsTG1OdmJuTjBjblZqZEc5eUlEMGdZM1J2Y2x4dUlDQjlYRzU5WEc0aUxDSmNibVY0Y0c5eWRITXVZMjl0Y0dGeVpTQTlJR1oxYm1OMGFXOXVJQ2hoTENCaUtTQjdYRzVjYmlBZ2FXWW9RblZtWm1WeUxtbHpRblZtWm1WeUtHRXBLU0I3WEc0Z0lDQWdkbUZ5SUd3Z1BTQk5ZWFJvTG0xcGJpaGhMbXhsYm1kMGFDd2dZaTVzWlc1bmRHZ3BYRzRnSUNBZ1ptOXlLSFpoY2lCcElEMGdNRHNnYVNBOElHdzdJR2tyS3lrZ2UxeHVJQ0FnSUNBZ2RtRnlJR050Y0NBOUlHRmJhVjBnTFNCaVcybGRYRzRnSUNBZ0lDQnBaaWhqYlhBcElISmxkSFZ5YmlCamJYQmNiaUFnSUNCOVhHNGdJQ0FnY21WMGRYSnVJR0V1YkdWdVozUm9JQzBnWWk1c1pXNW5kR2hjYmlBZ2ZWeHVYRzRnSUhKbGRIVnliaUJoSUR3Z1lpQS9JQzB4SURvZ1lTQStJR0lnUHlBeElEb2dNRnh1ZlZ4dVhHNHZMeUIwYnlCaVpTQmpiMjF3WVhScFlteGxJSGRwZEdnZ2RHaGxJR04xY25KbGJuUWdZV0p6ZEhKaFkzUXRiR1YyWld4a2IzZHVJSFJsYzNSelhHNHZMeUJ1ZFd4c2FYTm9JRzl5SUdWdGNIUjVJSE4wY21sdVozTXVYRzR2THlCSklHTnZkV3hrSUhWelpTQWhJWFpoYkNCaWRYUWdTU0IzWVc1MElIUnZJSEJsY20xcGRDQnVkVzFpWlhKeklHRnVaQ0JpYjI5c1pXRnVjeXhjYmk4dklHbG1JSEJ2YzNOcFlteGxMbHh1WEc1bWRXNWpkR2x2YmlCcGMwUmxaaUFvZG1Gc0tTQjdYRzRnSUhKbGRIVnliaUIyWVd3Z0lUMDlJSFZ1WkdWbWFXNWxaQ0FtSmlCMllXd2dJVDA5SUNjblhHNTlYRzVjYm1aMWJtTjBhVzl1SUdoaGN5QW9jbUZ1WjJVc0lHNWhiV1VwSUh0Y2JpQWdjbVYwZFhKdUlFOWlhbVZqZEM1b1lYTlBkMjVRY205d1pYSjBlUzVqWVd4c0tISmhibWRsTENCdVlXMWxLVnh1ZlZ4dVhHNW1kVzVqZEdsdmJpQm9ZWE5MWlhrb2NtRnVaMlVzSUc1aGJXVXBJSHRjYmlBZ2NtVjBkWEp1SUU5aWFtVmpkQzVvWVhOUGQyNVFjbTl3WlhKMGVTNWpZV3hzS0hKaGJtZGxMQ0J1WVcxbEtTQW1KaUJ1WVcxbFhHNTlYRzVjYm5aaGNpQnNiM2RsY2tKdmRXNWtTMlY1SUQwZ1pYaHdiM0owY3k1c2IzZGxja0p2ZFc1a1MyVjVJRDBnWm5WdVkzUnBiMjRnS0hKaGJtZGxLU0I3WEc0Z0lDQWdjbVYwZFhKdUlDaGNiaUFnSUNBZ0lDQm9ZWE5MWlhrb2NtRnVaMlVzSUNkbmRDY3BYRzRnSUNBZ2ZId2dhR0Z6UzJWNUtISmhibWRsTENBblozUmxKeWxjYmlBZ0lDQjhmQ0JvWVhOTFpYa29jbUZ1WjJVc0lDZHRhVzRuS1Z4dUlDQWdJSHg4SUNoeVlXNW5aUzV5WlhabGNuTmxJRDhnYUdGelMyVjVLSEpoYm1kbExDQW5aVzVrSnlrZ09pQm9ZWE5MWlhrb2NtRnVaMlVzSUNkemRHRnlkQ2NwS1Z4dUlDQWdJSHg4SUhWdVpHVm1hVzVsWkZ4dUlDQWdJQ2xjYm4xY2JseHVkbUZ5SUd4dmQyVnlRbTkxYm1RZ1BTQmxlSEJ2Y25SekxteHZkMlZ5UW05MWJtUWdQU0JtZFc1amRHbHZiaUFvY21GdVoyVXNJR1JsWmlrZ2UxeHVJQ0IyWVhJZ2F5QTlJR3h2ZDJWeVFtOTFibVJMWlhrb2NtRnVaMlVwWEc0Z0lISmxkSFZ5YmlCcklEOGdjbUZ1WjJWYmExMGdPaUJrWldaY2JuMWNibHh1ZG1GeUlHeHZkMlZ5UW05MWJtUkpibU5zZFhOcGRtVWdQU0JsZUhCdmNuUnpMbXh2ZDJWeVFtOTFibVJKYm1Oc2RYTnBkbVVnUFNCbWRXNWpkR2x2YmlBb2NtRnVaMlVwSUh0Y2JpQWdjbVYwZFhKdUlHaGhjeWh5WVc1blpTd2dKMmQwSnlrZ1B5Qm1ZV3h6WlNBNklIUnlkV1ZjYm4xY2JseHVkbUZ5SUhWd2NHVnlRbTkxYm1SSmJtTnNkWE5wZG1VZ1BTQmxlSEJ2Y25SekxuVndjR1Z5UW05MWJtUkpibU5zZFhOcGRtVWdQVnh1SUNCbWRXNWpkR2x2YmlBb2NtRnVaMlVwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdLR2hoY3loeVlXNW5aU3dnSjJ4MEp5a2dMeW9tSmlBaGNtRnVaMlV1YldGNFJYZ3FMeWtnUHlCbVlXeHpaU0E2SUhSeWRXVmNiaUFnZlZ4dVhHNTJZWElnYkc5M1pYSkNiM1Z1WkVWNFkyeDFjMmwyWlNBOUlHVjRjRzl5ZEhNdWJHOTNaWEpDYjNWdVpFVjRZMngxYzJsMlpTQTlYRzRnSUdaMWJtTjBhVzl1SUNoeVlXNW5aU2tnZTF4dUlDQWdJSEpsZEhWeWJpQWhiRzkzWlhKQ2IzVnVaRWx1WTJ4MWMybDJaU2h5WVc1blpTbGNiaUFnZlZ4dVhHNTJZWElnZFhCd1pYSkNiM1Z1WkVWNFkyeDFjMmwyWlNBOUlHVjRjRzl5ZEhNdWRYQndaWEpDYjNWdVpFVjRZMngxYzJsMlpTQTlYRzRnSUdaMWJtTjBhVzl1SUNoeVlXNW5aU2tnZTF4dUlDQWdJSEpsZEhWeWJpQWhkWEJ3WlhKQ2IzVnVaRWx1WTJ4MWMybDJaU2h5WVc1blpTbGNiaUFnZlZ4dVhHNTJZWElnZFhCd1pYSkNiM1Z1WkV0bGVTQTlJR1Y0Y0c5eWRITXVkWEJ3WlhKQ2IzVnVaRXRsZVNBOUlHWjFibU4wYVc5dUlDaHlZVzVuWlNrZ2UxeHVJQ0FnSUhKbGRIVnliaUFvWEc0Z0lDQWdJQ0FnYUdGelMyVjVLSEpoYm1kbExDQW5iSFFuS1Z4dUlDQWdJSHg4SUdoaGMwdGxlU2h5WVc1blpTd2dKMngwWlNjcFhHNGdJQ0FnZkh3Z2FHRnpTMlY1S0hKaGJtZGxMQ0FuYldGNEp5bGNiaUFnSUNCOGZDQW9jbUZ1WjJVdWNtVjJaWEp6WlNBL0lHaGhjMHRsZVNoeVlXNW5aU3dnSjNOMFlYSjBKeWtnT2lCb1lYTkxaWGtvY21GdVoyVXNJQ2RsYm1RbktTbGNiaUFnSUNCOGZDQjFibVJsWm1sdVpXUmNiaUFnSUNBcFhHNTlYRzVjYm5aaGNpQjFjSEJsY2tKdmRXNWtJRDBnWlhod2IzSjBjeTUxY0hCbGNrSnZkVzVrSUQwZ1puVnVZM1JwYjI0Z0tISmhibWRsTENCa1pXWXBJSHRjYmlBZ2RtRnlJR3NnUFNCMWNIQmxja0p2ZFc1a1MyVjVLSEpoYm1kbEtWeHVJQ0J5WlhSMWNtNGdheUEvSUhKaGJtZGxXMnRkSURvZ1pHVm1YRzU5WEc1Y2JtVjRjRzl5ZEhNdWMzUmhjblFnUFNCbWRXNWpkR2x2YmlBb2NtRnVaMlVzSUdSbFppa2dlMXh1SUNCeVpYUjFjbTRnY21GdVoyVXVjbVYyWlhKelpTQS9JSFZ3Y0dWeVFtOTFibVFvY21GdVoyVXNJR1JsWmlrZ09pQnNiM2RsY2tKdmRXNWtLSEpoYm1kbExDQmtaV1lwWEc1OVhHNWxlSEJ2Y25SekxtVnVaQ0E5SUdaMWJtTjBhVzl1SUNoeVlXNW5aU3dnWkdWbUtTQjdYRzRnSUhKbGRIVnliaUJ5WVc1blpTNXlaWFpsY25ObElEOGdiRzkzWlhKQ2IzVnVaQ2h5WVc1blpTd2daR1ZtS1NBNklIVndjR1Z5UW05MWJtUW9jbUZ1WjJVc0lHUmxaaWxjYm4xY2JtVjRjRzl5ZEhNdWMzUmhjblJKYm1Oc2RYTnBkbVVnUFNCbWRXNWpkR2x2YmlBb2NtRnVaMlVwSUh0Y2JpQWdjbVYwZFhKdUlDaGNiaUFnSUNCeVlXNW5aUzV5WlhabGNuTmxYRzRnSUQ4Z2RYQndaWEpDYjNWdVpFbHVZMngxYzJsMlpTaHlZVzVuWlNsY2JpQWdPaUJzYjNkbGNrSnZkVzVrU1c1amJIVnphWFpsS0hKaGJtZGxLVnh1SUNBcFhHNTlYRzVsZUhCdmNuUnpMbVZ1WkVsdVkyeDFjMmwyWlNBOUlHWjFibU4wYVc5dUlDaHlZVzVuWlNrZ2UxeHVJQ0J5WlhSMWNtNGdLRnh1SUNBZ0lISmhibWRsTG5KbGRtVnljMlZjYmlBZ1B5QnNiM2RsY2tKdmRXNWtTVzVqYkhWemFYWmxLSEpoYm1kbEtWeHVJQ0E2SUhWd2NHVnlRbTkxYm1SSmJtTnNkWE5wZG1Vb2NtRnVaMlVwWEc0Z0lDbGNibjFjYmx4dVpuVnVZM1JwYjI0Z2FXUWdLR1VwSUhzZ2NtVjBkWEp1SUdVZ2ZWeHVYRzVsZUhCdmNuUnpMblJ2VEhSbmRDQTlJR1oxYm1OMGFXOXVJQ2h5WVc1blpTd2dYM0poYm1kbExDQnRZWEFzSUd4dmQyVnlMQ0IxY0hCbGNpa2dlMXh1SUNCZmNtRnVaMlVnUFNCZmNtRnVaMlVnZkh3Z2UzMWNiaUFnYldGd0lEMGdiV0Z3SUh4OElHbGtYRzRnSUhaaGNpQmtaV1poZFd4MGN5QTlJR0Z5WjNWdFpXNTBjeTVzWlc1bmRHZ2dQaUF6WEc0Z0lIWmhjaUJzWWlBOUlHVjRjRzl5ZEhNdWJHOTNaWEpDYjNWdVpFdGxlU2h5WVc1blpTbGNiaUFnZG1GeUlIVmlJRDBnWlhod2IzSjBjeTUxY0hCbGNrSnZkVzVrUzJWNUtISmhibWRsS1Z4dUlDQnBaaWhzWWlrZ2UxeHVJQ0FnSUdsbUtHeGlJRDA5UFNBblozUW5LU0JmY21GdVoyVXVaM1FnUFNCdFlYQW9jbUZ1WjJVdVozUXNJR1poYkhObEtWeHVJQ0FnSUdWc2MyVWdJQ0FnSUNBZ0lDQWdJQ0JmY21GdVoyVXVaM1JsSUQwZ2JXRndLSEpoYm1kbFcyeGlYU3dnWm1Gc2MyVXBYRzRnSUgxY2JpQWdaV3h6WlNCcFppaGtaV1poZFd4MGN5bGNiaUFnSUNCZmNtRnVaMlV1WjNSbElEMGdiV0Z3S0d4dmQyVnlMQ0JtWVd4elpTbGNibHh1SUNCcFppaDFZaWtnZTF4dUlDQWdJR2xtS0hWaUlEMDlQU0FuYkhRbktTQmZjbUZ1WjJVdWJIUWdQU0J0WVhBb2NtRnVaMlV1YkhRc0lIUnlkV1VwWEc0Z0lDQWdaV3h6WlNBZ0lDQWdJQ0FnSUNBZ0lGOXlZVzVuWlM1c2RHVWdQU0J0WVhBb2NtRnVaMlZiZFdKZExDQjBjblZsS1Z4dUlDQjlYRzRnSUdWc2MyVWdhV1lvWkdWbVlYVnNkSE1wWEc0Z0lDQWdYM0poYm1kbExteDBaU0E5SUcxaGNDaDFjSEJsY2l3Z2RISjFaU2xjYmx4dUlDQnBaaWh5WVc1blpTNXlaWFpsY25ObElDRTlJRzUxYkd3cFhHNGdJQ0FnWDNKaGJtZGxMbkpsZG1WeWMyVWdQU0FoSVhKaGJtZGxMbkpsZG1WeWMyVmNibHh1SUNBdkwybG1JSEpoYm1kbElIZGhjeUIxYzJWa0lHMTFkR0ZpYkhsY2JpQWdMeThvYVc0Z2JHVjJaV3d0YzNWaWJHVjJaV3dnYVhRbmN5QndZWEowSUc5bUlHRnVJRzl3ZEdsdmJuTWdiMkpxWldOMFhHNGdJQzh2ZEdoaGRDQm9ZWE1nYlc5eVpTQndjbTl3WlhKMGFXVnpJRzl1SUdsMExpbGNiaUFnYVdZb2FHRnpLRjl5WVc1blpTd2dKMjFoZUNjcEtTQWdJR1JsYkdWMFpTQmZjbUZ1WjJVdWJXRjRYRzRnSUdsbUtHaGhjeWhmY21GdVoyVXNJQ2R0YVc0bktTa2dJQ0JrWld4bGRHVWdYM0poYm1kbExtMXBibHh1SUNCcFppaG9ZWE1vWDNKaGJtZGxMQ0FuYzNSaGNuUW5LU2tnWkdWc1pYUmxJRjl5WVc1blpTNXpkR0Z5ZEZ4dUlDQnBaaWhvWVhNb1gzSmhibWRsTENBblpXNWtKeWtwSUNBZ1pHVnNaWFJsSUY5eVlXNW5aUzVsYm1SY2JseHVJQ0J5WlhSMWNtNGdYM0poYm1kbFhHNTlYRzVjYm1WNGNHOXlkSE11WTI5dWRHRnBibk1nUFNCbWRXNWpkR2x2YmlBb2NtRnVaMlVzSUd0bGVTd2dZMjl0Y0dGeVpTa2dlMXh1SUNCamIyMXdZWEpsSUQwZ1kyOXRjR0Z5WlNCOGZDQmxlSEJ2Y25SekxtTnZiWEJoY21WY2JseHVJQ0IyWVhJZ2JHSWdQU0JzYjNkbGNrSnZkVzVrS0hKaGJtZGxLVnh1SUNCcFppaHBjMFJsWmloc1lpa3BJSHRjYmlBZ0lDQjJZWElnWTIxd0lEMGdZMjl0Y0dGeVpTaHJaWGtzSUd4aUtWeHVJQ0FnSUdsbUtHTnRjQ0E4SURBZ2ZId2dLR050Y0NBOVBUMGdNQ0FtSmlCc2IzZGxja0p2ZFc1a1JYaGpiSFZ6YVhabEtISmhibWRsS1NrcFhHNGdJQ0FnSUNCeVpYUjFjbTRnWm1Gc2MyVmNiaUFnZlZ4dVhHNGdJSFpoY2lCMVlpQTlJSFZ3Y0dWeVFtOTFibVFvY21GdVoyVXBYRzRnSUdsbUtHbHpSR1ZtS0hWaUtTa2dlMXh1SUNBZ0lIWmhjaUJqYlhBZ1BTQmpiMjF3WVhKbEtHdGxlU3dnZFdJcFhHNGdJQ0FnYVdZb1kyMXdJRDRnTUNCOGZDQW9ZMjF3SUQwOVBTQXdLU0FtSmlCMWNIQmxja0p2ZFc1a1JYaGpiSFZ6YVhabEtISmhibWRsS1NsY2JpQWdJQ0FnSUhKbGRIVnliaUJtWVd4elpWeHVJQ0I5WEc1Y2JpQWdjbVYwZFhKdUlIUnlkV1ZjYm4xY2JseHVaWGh3YjNKMGN5NW1hV3gwWlhJZ1BTQm1kVzVqZEdsdmJpQW9jbUZ1WjJVc0lHTnZiWEJoY21VcElIdGNiaUFnY21WMGRYSnVJR1oxYm1OMGFXOXVJQ2hyWlhrcElIdGNiaUFnSUNCeVpYUjFjbTRnWlhod2IzSjBjeTVqYjI1MFlXbHVjeWh5WVc1blpTd2dhMlY1TENCamIyMXdZWEpsS1Z4dUlDQjlYRzU5WEc1Y2JseHVJaXdpYlc5a2RXeGxMbVY0Y0c5eWRITWdQU0J5WlhGMWFYSmxLQ2RwYlcxbFpHbGhkR1VuS1Z4dUlpd2lkbUZ5SUdsdWFHVnlhWFJ6SUQwZ2NtVnhkV2x5WlNnbmFXNW9aWEpwZEhNbktWeHVkbUZ5SUVGaWMzUnlZV04wVEdWMlpXeEVUMWRPSUQwZ2NtVnhkV2x5WlNnbllXSnpkSEpoWTNRdGJHVjJaV3hrYjNkdUp5a3VRV0p6ZEhKaFkzUk1aWFpsYkVSUFYwNWNiblpoY2lCQlluTjBjbUZqZEVsMFpYSmhkRzl5SUQwZ2NtVnhkV2x5WlNnbllXSnpkSEpoWTNRdGJHVjJaV3hrYjNkdUp5a3VRV0p6ZEhKaFkzUkpkR1Z5WVhSdmNseHVkbUZ5SUd4MFozUWdQU0J5WlhGMWFYSmxLQ2RzZEdkMEp5bGNiblpoY2lCamNtVmhkR1ZTUWxRZ1BTQnlaWEYxYVhKbEtDZG1kVzVqZEdsdmJtRnNMWEpsWkMxaWJHRmpheTEwY21WbEp5bGNiblpoY2lCQ2RXWm1aWElnUFNCeVpYRjFhWEpsS0NkellXWmxMV0oxWm1abGNpY3BMa0oxWm1abGNseHVYRzR2THlCSmJpQk9iMlJsTENCMWMyVWdaMnh2WW1Gc0xuTmxkRWx0YldWa2FXRjBaUzRnU1c0Z2RHaGxJR0p5YjNkelpYSXNJSFZ6WlNCaElHTnZibk5wYzNSbGJuUmNiaTh2SUcxcFkzSnZkR0Z6YXlCc2FXSnlZWEo1SUhSdklHZHBkbVVnWTI5dWMybHpkR1Z1ZENCdGFXTnliM1JoYzJzZ1pYaHdaWEpwWlc1alpTQjBieUJoYkd3Z1luSnZkM05sY25OY2JuWmhjaUJ6WlhSSmJXMWxaR2xoZEdVZ1BTQnlaWEYxYVhKbEtDY3VMMmx0YldWa2FXRjBaU2NwWEc1Y2JtWjFibU4wYVc5dUlHZDBJQ2gyWVd4MVpTa2dlMXh1SUNCeVpYUjFjbTRnYkhSbmRDNWpiMjF3WVhKbEtIWmhiSFZsTENCMGFHbHpMbDkxY0hCbGNrSnZkVzVrS1NBK0lEQmNibjFjYmx4dVpuVnVZM1JwYjI0Z1ozUmxJQ2gyWVd4MVpTa2dlMXh1SUNCeVpYUjFjbTRnYkhSbmRDNWpiMjF3WVhKbEtIWmhiSFZsTENCMGFHbHpMbDkxY0hCbGNrSnZkVzVrS1NBK1BTQXdYRzU5WEc1Y2JtWjFibU4wYVc5dUlHeDBJQ2gyWVd4MVpTa2dlMXh1SUNCeVpYUjFjbTRnYkhSbmRDNWpiMjF3WVhKbEtIWmhiSFZsTENCMGFHbHpMbDkxY0hCbGNrSnZkVzVrS1NBOElEQmNibjFjYmx4dVpuVnVZM1JwYjI0Z2JIUmxJQ2gyWVd4MVpTa2dlMXh1SUNCeVpYUjFjbTRnYkhSbmRDNWpiMjF3WVhKbEtIWmhiSFZsTENCMGFHbHpMbDkxY0hCbGNrSnZkVzVrS1NBOFBTQXdYRzU5WEc1Y2JtWjFibU4wYVc5dUlFMWxiVWwwWlhKaGRHOXlJQ2hrWWl3Z2IzQjBhVzl1Y3lrZ2UxeHVJQ0JCWW5OMGNtRmpkRWwwWlhKaGRHOXlMbU5oYkd3b2RHaHBjeXdnWkdJcFhHNGdJSFJvYVhNdVgyeHBiV2wwSUQwZ2IzQjBhVzl1Y3k1c2FXMXBkRnh1WEc0Z0lHbG1JQ2gwYUdsekxsOXNhVzFwZENBOVBUMGdMVEVwSUhSb2FYTXVYMnhwYldsMElEMGdTVzVtYVc1cGRIbGNibHh1SUNCMllYSWdkSEpsWlNBOUlHUmlMbDl6ZEc5eVpWeHVYRzRnSUhSb2FYTXVhMlY1UVhOQ2RXWm1aWElnUFNCdmNIUnBiMjV6TG10bGVVRnpRblZtWm1WeUlDRTlQU0JtWVd4elpWeHVJQ0IwYUdsekxuWmhiSFZsUVhOQ2RXWm1aWElnUFNCdmNIUnBiMjV6TG5aaGJIVmxRWE5DZFdabVpYSWdJVDA5SUdaaGJITmxYRzRnSUhSb2FYTXVYM0psZG1WeWMyVWdQU0J2Y0hScGIyNXpMbkpsZG1WeWMyVmNiaUFnZEdocGN5NWZiM0IwYVc5dWN5QTlJRzl3ZEdsdmJuTmNiaUFnZEdocGN5NWZaRzl1WlNBOUlEQmNibHh1SUNCcFppQW9JWFJvYVhNdVgzSmxkbVZ5YzJVcElIdGNiaUFnSUNCMGFHbHpMbDlwYm1OeUlEMGdKMjVsZUhRblhHNGdJQ0FnZEdocGN5NWZiRzkzWlhKQ2IzVnVaQ0E5SUd4MFozUXViRzkzWlhKQ2IzVnVaQ2h2Y0hScGIyNXpLVnh1SUNBZ0lIUm9hWE11WDNWd2NHVnlRbTkxYm1RZ1BTQnNkR2QwTG5Wd2NHVnlRbTkxYm1Rb2IzQjBhVzl1Y3lsY2JseHVJQ0FnSUdsbUlDaDBlWEJsYjJZZ2RHaHBjeTVmYkc5M1pYSkNiM1Z1WkNBOVBUMGdKM1Z1WkdWbWFXNWxaQ2NwSUh0Y2JpQWdJQ0FnSUhSb2FYTXVYM1J5WldVZ1BTQjBjbVZsTG1KbFoybHVYRzRnSUNBZ2ZTQmxiSE5sSUdsbUlDaHNkR2QwTG14dmQyVnlRbTkxYm1SSmJtTnNkWE5wZG1Vb2IzQjBhVzl1Y3lrcElIdGNiaUFnSUNBZ0lIUm9hWE11WDNSeVpXVWdQU0IwY21WbExtZGxLSFJvYVhNdVgyeHZkMlZ5UW05MWJtUXBYRzRnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUhSb2FYTXVYM1J5WldVZ1BTQjBjbVZsTG1kMEtIUm9hWE11WDJ4dmQyVnlRbTkxYm1RcFhHNGdJQ0FnZlZ4dVhHNGdJQ0FnYVdZZ0tIUm9hWE11WDNWd2NHVnlRbTkxYm1RcElIdGNiaUFnSUNBZ0lHbG1JQ2hzZEdkMExuVndjR1Z5UW05MWJtUkpibU5zZFhOcGRtVW9iM0IwYVc5dWN5a3BJSHRjYmlBZ0lDQWdJQ0FnZEdocGN5NWZkR1Z6ZENBOUlHeDBaVnh1SUNBZ0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDQWdkR2hwY3k1ZmRHVnpkQ0E5SUd4MFhHNGdJQ0FnSUNCOVhHNGdJQ0FnZlZ4dUlDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUhSb2FYTXVYMmx1WTNJZ1BTQW5jSEpsZGlkY2JpQWdJQ0IwYUdsekxsOXNiM2RsY2tKdmRXNWtJRDBnYkhSbmRDNTFjSEJsY2tKdmRXNWtLRzl3ZEdsdmJuTXBYRzRnSUNBZ2RHaHBjeTVmZFhCd1pYSkNiM1Z1WkNBOUlHeDBaM1F1Ykc5M1pYSkNiM1Z1WkNodmNIUnBiMjV6S1Z4dVhHNGdJQ0FnYVdZZ0tIUjVjR1Z2WmlCMGFHbHpMbDlzYjNkbGNrSnZkVzVrSUQwOVBTQW5kVzVrWldacGJtVmtKeWtnZTF4dUlDQWdJQ0FnZEdocGN5NWZkSEpsWlNBOUlIUnlaV1V1Wlc1a1hHNGdJQ0FnZlNCbGJITmxJR2xtSUNoc2RHZDBMblZ3Y0dWeVFtOTFibVJKYm1Oc2RYTnBkbVVvYjNCMGFXOXVjeWtwSUh0Y2JpQWdJQ0FnSUhSb2FYTXVYM1J5WldVZ1BTQjBjbVZsTG14bEtIUm9hWE11WDJ4dmQyVnlRbTkxYm1RcFhHNGdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJSFJvYVhNdVgzUnlaV1VnUFNCMGNtVmxMbXgwS0hSb2FYTXVYMnh2ZDJWeVFtOTFibVFwWEc0Z0lDQWdmVnh1WEc0Z0lDQWdhV1lnS0hSb2FYTXVYM1Z3Y0dWeVFtOTFibVFwSUh0Y2JpQWdJQ0FnSUdsbUlDaHNkR2QwTG14dmQyVnlRbTkxYm1SSmJtTnNkWE5wZG1Vb2IzQjBhVzl1Y3lrcElIdGNiaUFnSUNBZ0lDQWdkR2hwY3k1ZmRHVnpkQ0E5SUdkMFpWeHVJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVmZEdWemRDQTlJR2QwWEc0Z0lDQWdJQ0I5WEc0Z0lDQWdmVnh1SUNCOVhHNTlYRzVjYm1sdWFHVnlhWFJ6S0UxbGJVbDBaWEpoZEc5eUxDQkJZbk4wY21GamRFbDBaWEpoZEc5eUtWeHVYRzVOWlcxSmRHVnlZWFJ2Y2k1d2NtOTBiM1I1Y0dVdVgyNWxlSFFnUFNCbWRXNWpkR2x2YmlBb1kyRnNiR0poWTJzcElIdGNiaUFnZG1GeUlHdGxlVnh1SUNCMllYSWdkbUZzZFdWY2JseHVJQ0JwWmlBb2RHaHBjeTVmWkc5dVpTc3JJRDQ5SUhSb2FYTXVYMnhwYldsMEtTQnlaWFIxY200Z2MyVjBTVzF0WldScFlYUmxLR05oYkd4aVlXTnJLVnh1SUNCcFppQW9JWFJvYVhNdVgzUnlaV1V1ZG1Gc2FXUXBJSEpsZEhWeWJpQnpaWFJKYlcxbFpHbGhkR1VvWTJGc2JHSmhZMnNwWEc1Y2JpQWdhMlY1SUQwZ2RHaHBjeTVmZEhKbFpTNXJaWGxjYmlBZ2RtRnNkV1VnUFNCMGFHbHpMbDkwY21WbExuWmhiSFZsWEc1Y2JpQWdhV1lnS0NGMGFHbHpMbDkwWlhOMEtHdGxlU2twSUhKbGRIVnliaUJ6WlhSSmJXMWxaR2xoZEdVb1kyRnNiR0poWTJzcFhHNWNiaUFnYVdZZ0tIUm9hWE11YTJWNVFYTkNkV1ptWlhJZ0ppWWdJVUoxWm1abGNpNXBjMEoxWm1abGNpaHJaWGtwS1NCN1hHNGdJQ0FnYTJWNUlEMGdRblZtWm1WeUxtWnliMjBvVTNSeWFXNW5LR3RsZVNrcFhHNGdJSDFjYmx4dUlDQnBaaUFvZEdocGN5NTJZV3gxWlVGelFuVm1abVZ5SUNZbUlDRkNkV1ptWlhJdWFYTkNkV1ptWlhJb2RtRnNkV1VwS1NCN1hHNGdJQ0FnZG1Gc2RXVWdQU0JDZFdabVpYSXVabkp2YlNoVGRISnBibWNvZG1Gc2RXVXBLVnh1SUNCOVhHNWNiaUFnZEdocGN5NWZkSEpsWlZ0MGFHbHpMbDlwYm1OeVhTZ3BYRzVjYmlBZ2MyVjBTVzF0WldScFlYUmxLR1oxYm1OMGFXOXVJR05oYkd4T1pYaDBJQ2dwSUh0Y2JpQWdJQ0JqWVd4c1ltRmpheWh1ZFd4c0xDQnJaWGtzSUhaaGJIVmxLVnh1SUNCOUtWeHVmVnh1WEc1TlpXMUpkR1Z5WVhSdmNpNXdjbTkwYjNSNWNHVXVYM1JsYzNRZ1BTQm1kVzVqZEdsdmJpQW9LU0I3WEc0Z0lISmxkSFZ5YmlCMGNuVmxYRzU5WEc1Y2JtWjFibU4wYVc5dUlFMWxiVVJQVjA0Z0tDa2dlMXh1SUNCcFppQW9JU2gwYUdseklHbHVjM1JoYm1ObGIyWWdUV1Z0UkU5WFRpa3BJSEpsZEhWeWJpQnVaWGNnVFdWdFJFOVhUaWdwWEc1Y2JpQWdRV0p6ZEhKaFkzUk1aWFpsYkVSUFYwNHVZMkZzYkNoMGFHbHpMQ0FuSnlsY2JseHVJQ0IwYUdsekxsOXpkRzl5WlNBOUlHTnlaV0YwWlZKQ1ZDaHNkR2QwTG1OdmJYQmhjbVVwWEc1OVhHNWNibWx1YUdWeWFYUnpLRTFsYlVSUFYwNHNJRUZpYzNSeVlXTjBUR1YyWld4RVQxZE9LVnh1WEc1TlpXMUVUMWRPTG5CeWIzUnZkSGx3WlM1ZmIzQmxiaUE5SUdaMWJtTjBhVzl1SUNodmNIUnBiMjV6TENCallXeHNZbUZqYXlrZ2UxeHVJQ0IyWVhJZ2MyVnNaaUE5SUhSb2FYTmNiaUFnYzJWMFNXMXRaV1JwWVhSbEtHWjFibU4wYVc5dUlHTmhiR3hPWlhoMElDZ3BJSHRjYmlBZ0lDQmpZV3hzWW1GamF5aHVkV3hzTENCelpXeG1LVnh1SUNCOUtWeHVmVnh1WEc1TlpXMUVUMWRPTG5CeWIzUnZkSGx3WlM1ZmMyVnlhV0ZzYVhwbFMyVjVJRDBnWm5WdVkzUnBiMjRnS0d0bGVTa2dlMXh1SUNCeVpYUjFjbTRnYTJWNVhHNTlYRzVjYmsxbGJVUlBWMDR1Y0hKdmRHOTBlWEJsTGw5elpYSnBZV3hwZW1WV1lXeDFaU0E5SUdaMWJtTjBhVzl1SUNoMllXeDFaU2tnZTF4dUlDQnlaWFIxY200Z2RtRnNkV1VnUFQwZ2JuVnNiQ0EvSUNjbklEb2dkbUZzZFdWY2JuMWNibHh1VFdWdFJFOVhUaTV3Y205MGIzUjVjR1V1WDNCMWRDQTlJR1oxYm1OMGFXOXVJQ2hyWlhrc0lIWmhiSFZsTENCdmNIUnBiMjV6TENCallXeHNZbUZqYXlrZ2UxeHVJQ0IyWVhJZ2FYUmxjaUE5SUhSb2FYTXVYM04wYjNKbExtWnBibVFvYTJWNUtWeHVYRzRnSUdsbUlDaHBkR1Z5TG5aaGJHbGtLU0I3WEc0Z0lDQWdkR2hwY3k1ZmMzUnZjbVVnUFNCcGRHVnlMblZ3WkdGMFpTaDJZV3gxWlNsY2JpQWdmU0JsYkhObElIdGNiaUFnSUNCMGFHbHpMbDl6ZEc5eVpTQTlJSFJvYVhNdVgzTjBiM0psTG1sdWMyVnlkQ2hyWlhrc0lIWmhiSFZsS1Z4dUlDQjlYRzVjYmlBZ2MyVjBTVzF0WldScFlYUmxLR05oYkd4aVlXTnJLVnh1ZlZ4dVhHNU5aVzFFVDFkT0xuQnliM1J2ZEhsd1pTNWZaMlYwSUQwZ1puVnVZM1JwYjI0Z0tHdGxlU3dnYjNCMGFXOXVjeXdnWTJGc2JHSmhZMnNwSUh0Y2JpQWdkbUZ5SUhaaGJIVmxJRDBnZEdocGN5NWZjM1J2Y21VdVoyVjBLR3RsZVNsY2JseHVJQ0JwWmlBb2RIbHdaVzltSUhaaGJIVmxJRDA5UFNBbmRXNWtaV1pwYm1Wa0p5a2dlMXh1SUNBZ0lDOHZJQ2RPYjNSR2IzVnVaQ2NnWlhKeWIzSXNJR052Ym5OcGMzUmxiblFnZDJsMGFDQk1aWFpsYkVSUFYwNGdRVkJKWEc0Z0lDQWdjbVYwZFhKdUlITmxkRWx0YldWa2FXRjBaU2htZFc1amRHbHZiaUJqWVd4c1RtVjRkQ0FvS1NCN1hHNGdJQ0FnSUNCallXeHNZbUZqYXlodVpYY2dSWEp5YjNJb0owNXZkRVp2ZFc1a0p5a3BYRzRnSUNBZ2ZTbGNiaUFnZlZ4dVhHNGdJR2xtSUNodmNIUnBiMjV6TG1GelFuVm1abVZ5SUNFOVBTQm1ZV3h6WlNBbUppQWhRblZtWm1WeUxtbHpRblZtWm1WeUtIWmhiSFZsS1NrZ2UxeHVJQ0FnSUhaaGJIVmxJRDBnUW5WbVptVnlMbVp5YjIwb1UzUnlhVzVuS0haaGJIVmxLU2xjYmlBZ2ZWeHVYRzRnSUhObGRFbHRiV1ZrYVdGMFpTaG1kVzVqZEdsdmJpQmpZV3hzVG1WNGRDQW9LU0I3WEc0Z0lDQWdZMkZzYkdKaFkyc29iblZzYkN3Z2RtRnNkV1VwWEc0Z0lIMHBYRzU5WEc1Y2JrMWxiVVJQVjA0dWNISnZkRzkwZVhCbExsOWtaV3dnUFNCbWRXNWpkR2x2YmlBb2EyVjVMQ0J2Y0hScGIyNXpMQ0JqWVd4c1ltRmpheWtnZTF4dUlDQjBhR2x6TGw5emRHOXlaU0E5SUhSb2FYTXVYM04wYjNKbExuSmxiVzkyWlNoclpYa3BYRzRnSUhObGRFbHRiV1ZrYVdGMFpTaGpZV3hzWW1GamF5bGNibjFjYmx4dVRXVnRSRTlYVGk1d2NtOTBiM1I1Y0dVdVgySmhkR05vSUQwZ1puVnVZM1JwYjI0Z0tHRnljbUY1TENCdmNIUnBiMjV6TENCallXeHNZbUZqYXlrZ2UxeHVJQ0IyWVhJZ2FTQTlJQzB4WEc0Z0lIWmhjaUJyWlhsY2JpQWdkbUZ5SUhaaGJIVmxYRzRnSUhaaGNpQnBkR1Z5WEc0Z0lIWmhjaUJzWlc0Z1BTQmhjbkpoZVM1c1pXNW5kR2hjYmlBZ2RtRnlJSFJ5WldVZ1BTQjBhR2x6TGw5emRHOXlaVnh1WEc0Z0lIZG9hV3hsSUNncksya2dQQ0JzWlc0cElIdGNiaUFnSUNCclpYa2dQU0JoY25KaGVWdHBYUzVyWlhsY2JpQWdJQ0JwZEdWeUlEMGdkSEpsWlM1bWFXNWtLR3RsZVNsY2JseHVJQ0FnSUdsbUlDaGhjbkpoZVZ0cFhTNTBlWEJsSUQwOVBTQW5jSFYwSnlrZ2UxeHVJQ0FnSUNBZ2RtRnNkV1VnUFNCaGNuSmhlVnRwWFM1MllXeDFaVnh1SUNBZ0lDQWdkSEpsWlNBOUlHbDBaWEl1ZG1Gc2FXUWdQeUJwZEdWeUxuVndaR0YwWlNoMllXeDFaU2tnT2lCMGNtVmxMbWx1YzJWeWRDaHJaWGtzSUhaaGJIVmxLVnh1SUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNCMGNtVmxJRDBnYVhSbGNpNXlaVzF2ZG1Vb0tWeHVJQ0FnSUgxY2JpQWdmVnh1WEc0Z0lIUm9hWE11WDNOMGIzSmxJRDBnZEhKbFpWeHVYRzRnSUhObGRFbHRiV1ZrYVdGMFpTaGpZV3hzWW1GamF5bGNibjFjYmx4dVRXVnRSRTlYVGk1d2NtOTBiM1I1Y0dVdVgybDBaWEpoZEc5eUlEMGdablZ1WTNScGIyNGdLRzl3ZEdsdmJuTXBJSHRjYmlBZ2NtVjBkWEp1SUc1bGR5Qk5aVzFKZEdWeVlYUnZjaWgwYUdsekxDQnZjSFJwYjI1ektWeHVmVnh1WEc1dGIyUjFiR1V1Wlhod2IzSjBjeUE5SUUxbGJVUlBWMDR1WkdWbVlYVnNkQ0E5SUUxbGJVUlBWMDVjYmlJc0lpOHZJSE5vYVcwZ1ptOXlJSFZ6YVc1bklIQnliMk5sYzNNZ2FXNGdZbkp2ZDNObGNseHVkbUZ5SUhCeWIyTmxjM01nUFNCdGIyUjFiR1V1Wlhod2IzSjBjeUE5SUh0OU8xeHVYRzR2THlCallXTm9aV1FnWm5KdmJTQjNhR0YwWlhabGNpQm5iRzlpWVd3Z2FYTWdjSEpsYzJWdWRDQnpieUIwYUdGMElIUmxjM1FnY25WdWJtVnljeUIwYUdGMElITjBkV0lnYVhSY2JpOHZJR1J2YmlkMElHSnlaV0ZySUhSb2FXNW5jeTRnSUVKMWRDQjNaU0J1WldWa0lIUnZJSGR5WVhBZ2FYUWdhVzRnWVNCMGNua2dZMkYwWTJnZ2FXNGdZMkZ6WlNCcGRDQnBjMXh1THk4Z2QzSmhjSEJsWkNCcGJpQnpkSEpwWTNRZ2JXOWtaU0JqYjJSbElIZG9hV05vSUdSdlpYTnVKM1FnWkdWbWFXNWxJR0Z1ZVNCbmJHOWlZV3h6TGlBZ1NYUW5jeUJwYm5OcFpHVWdZVnh1THk4Z1puVnVZM1JwYjI0Z1ltVmpZWFZ6WlNCMGNua3ZZMkYwWTJobGN5QmtaVzl3ZEdsdGFYcGxJR2x1SUdObGNuUmhhVzRnWlc1bmFXNWxjeTVjYmx4dWRtRnlJR05oWTJobFpGTmxkRlJwYldWdmRYUTdYRzUyWVhJZ1kyRmphR1ZrUTJ4bFlYSlVhVzFsYjNWME8xeHVYRzVtZFc1amRHbHZiaUJrWldaaGRXeDBVMlYwVkdsdGIzVjBLQ2tnZTF4dUlDQWdJSFJvY205M0lHNWxkeUJGY25KdmNpZ25jMlYwVkdsdFpXOTFkQ0JvWVhNZ2JtOTBJR0psWlc0Z1pHVm1hVzVsWkNjcE8xeHVmVnh1Wm5WdVkzUnBiMjRnWkdWbVlYVnNkRU5zWldGeVZHbHRaVzkxZENBb0tTQjdYRzRnSUNBZ2RHaHliM2NnYm1WM0lFVnljbTl5S0NkamJHVmhjbFJwYldWdmRYUWdhR0Z6SUc1dmRDQmlaV1Z1SUdSbFptbHVaV1FuS1R0Y2JuMWNiaWhtZFc1amRHbHZiaUFvS1NCN1hHNGdJQ0FnZEhKNUlIdGNiaUFnSUNBZ0lDQWdhV1lnS0hSNWNHVnZaaUJ6WlhSVWFXMWxiM1YwSUQwOVBTQW5ablZ1WTNScGIyNG5LU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpZV05vWldSVFpYUlVhVzFsYjNWMElEMGdjMlYwVkdsdFpXOTFkRHRjYmlBZ0lDQWdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHTmhZMmhsWkZObGRGUnBiV1Z2ZFhRZ1BTQmtaV1poZFd4MFUyVjBWR2x0YjNWME8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ2ZTQmpZWFJqYUNBb1pTa2dlMXh1SUNBZ0lDQWdJQ0JqWVdOb1pXUlRaWFJVYVcxbGIzVjBJRDBnWkdWbVlYVnNkRk5sZEZScGJXOTFkRHRjYmlBZ0lDQjlYRzRnSUNBZ2RISjVJSHRjYmlBZ0lDQWdJQ0FnYVdZZ0tIUjVjR1Z2WmlCamJHVmhjbFJwYldWdmRYUWdQVDA5SUNkbWRXNWpkR2x2YmljcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdOaFkyaGxaRU5zWldGeVZHbHRaVzkxZENBOUlHTnNaV0Z5VkdsdFpXOTFkRHRjYmlBZ0lDQWdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHTmhZMmhsWkVOc1pXRnlWR2x0Wlc5MWRDQTlJR1JsWm1GMWJIUkRiR1ZoY2xScGJXVnZkWFE3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0I5SUdOaGRHTm9JQ2hsS1NCN1hHNGdJQ0FnSUNBZ0lHTmhZMmhsWkVOc1pXRnlWR2x0Wlc5MWRDQTlJR1JsWm1GMWJIUkRiR1ZoY2xScGJXVnZkWFE3WEc0Z0lDQWdmVnh1ZlNBb0tTbGNibVoxYm1OMGFXOXVJSEoxYmxScGJXVnZkWFFvWm5WdUtTQjdYRzRnSUNBZ2FXWWdLR05oWTJobFpGTmxkRlJwYldWdmRYUWdQVDA5SUhObGRGUnBiV1Z2ZFhRcElIdGNiaUFnSUNBZ0lDQWdMeTl1YjNKdFlXd2daVzUyYVhKdmJXVnVkSE1nYVc0Z2MyRnVaU0J6YVhSMVlYUnBiMjV6WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJ6WlhSVWFXMWxiM1YwS0daMWJpd2dNQ2s3WEc0Z0lDQWdmVnh1SUNBZ0lDOHZJR2xtSUhObGRGUnBiV1Z2ZFhRZ2QyRnpiaWQwSUdGMllXbHNZV0pzWlNCaWRYUWdkMkZ6SUd4aGRIUmxjaUJrWldacGJtVmtYRzRnSUNBZ2FXWWdLQ2hqWVdOb1pXUlRaWFJVYVcxbGIzVjBJRDA5UFNCa1pXWmhkV3gwVTJWMFZHbHRiM1YwSUh4OElDRmpZV05vWldSVFpYUlVhVzFsYjNWMEtTQW1KaUJ6WlhSVWFXMWxiM1YwS1NCN1hHNGdJQ0FnSUNBZ0lHTmhZMmhsWkZObGRGUnBiV1Z2ZFhRZ1BTQnpaWFJVYVcxbGIzVjBPMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdjMlYwVkdsdFpXOTFkQ2htZFc0c0lEQXBPMXh1SUNBZ0lIMWNiaUFnSUNCMGNua2dlMXh1SUNBZ0lDQWdJQ0F2THlCM2FHVnVJSGRvWlc0Z2MyOXRaV0p2WkhrZ2FHRnpJSE5qY21WM1pXUWdkMmwwYUNCelpYUlVhVzFsYjNWMElHSjFkQ0J1YnlCSkxrVXVJRzFoWkdSdVpYTnpYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQmpZV05vWldSVFpYUlVhVzFsYjNWMEtHWjFiaXdnTUNrN1hHNGdJQ0FnZlNCallYUmphQ2hsS1h0Y2JpQWdJQ0FnSUNBZ2RISjVJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDOHZJRmRvWlc0Z2QyVWdZWEpsSUdsdUlFa3VSUzRnWW5WMElIUm9aU0J6WTNKcGNIUWdhR0Z6SUdKbFpXNGdaWFpoYkdWa0lITnZJRWt1UlM0Z1pHOWxjMjRuZENCMGNuVnpkQ0IwYUdVZ1oyeHZZbUZzSUc5aWFtVmpkQ0IzYUdWdUlHTmhiR3hsWkNCdWIzSnRZV3hzZVZ4dUlDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlHTmhZMmhsWkZObGRGUnBiV1Z2ZFhRdVkyRnNiQ2h1ZFd4c0xDQm1kVzRzSURBcE8xeHVJQ0FnSUNBZ0lDQjlJR05oZEdOb0tHVXBlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0x5OGdjMkZ0WlNCaGN5QmhZbTkyWlNCaWRYUWdkMmhsYmlCcGRDZHpJR0VnZG1WeWMybHZiaUJ2WmlCSkxrVXVJSFJvWVhRZ2JYVnpkQ0JvWVhabElIUm9aU0JuYkc5aVlXd2diMkpxWldOMElHWnZjaUFuZEdocGN5Y3NJR2h2Y0daMWJHeDVJRzkxY2lCamIyNTBaWGgwSUdOdmNuSmxZM1FnYjNSb1pYSjNhWE5sSUdsMElIZHBiR3dnZEdoeWIzY2dZU0JuYkc5aVlXd2daWEp5YjNKY2JpQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQmpZV05vWldSVFpYUlVhVzFsYjNWMExtTmhiR3dvZEdocGN5d2dablZ1TENBd0tUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lIMWNibHh1WEc1OVhHNW1kVzVqZEdsdmJpQnlkVzVEYkdWaGNsUnBiV1Z2ZFhRb2JXRnlhMlZ5S1NCN1hHNGdJQ0FnYVdZZ0tHTmhZMmhsWkVOc1pXRnlWR2x0Wlc5MWRDQTlQVDBnWTJ4bFlYSlVhVzFsYjNWMEtTQjdYRzRnSUNBZ0lDQWdJQzh2Ym05eWJXRnNJR1Z1ZG1seWIyMWxiblJ6SUdsdUlITmhibVVnYzJsMGRXRjBhVzl1YzF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnWTJ4bFlYSlVhVzFsYjNWMEtHMWhjbXRsY2lrN1hHNGdJQ0FnZlZ4dUlDQWdJQzh2SUdsbUlHTnNaV0Z5VkdsdFpXOTFkQ0IzWVhOdUozUWdZWFpoYVd4aFlteGxJR0oxZENCM1lYTWdiR0YwZEdWeUlHUmxabWx1WldSY2JpQWdJQ0JwWmlBb0tHTmhZMmhsWkVOc1pXRnlWR2x0Wlc5MWRDQTlQVDBnWkdWbVlYVnNkRU5zWldGeVZHbHRaVzkxZENCOGZDQWhZMkZqYUdWa1EyeGxZWEpVYVcxbGIzVjBLU0FtSmlCamJHVmhjbFJwYldWdmRYUXBJSHRjYmlBZ0lDQWdJQ0FnWTJGamFHVmtRMnhsWVhKVWFXMWxiM1YwSUQwZ1kyeGxZWEpVYVcxbGIzVjBPMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdZMnhsWVhKVWFXMWxiM1YwS0cxaGNtdGxjaWs3WEc0Z0lDQWdmVnh1SUNBZ0lIUnllU0I3WEc0Z0lDQWdJQ0FnSUM4dklIZG9aVzRnZDJobGJpQnpiMjFsWW05a2VTQm9ZWE1nYzJOeVpYZGxaQ0IzYVhSb0lITmxkRlJwYldWdmRYUWdZblYwSUc1dklFa3VSUzRnYldGa1pHNWxjM05jYmlBZ0lDQWdJQ0FnY21WMGRYSnVJR05oWTJobFpFTnNaV0Z5VkdsdFpXOTFkQ2h0WVhKclpYSXBPMXh1SUNBZ0lIMGdZMkYwWTJnZ0tHVXBlMXh1SUNBZ0lDQWdJQ0IwY25rZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z1YyaGxiaUIzWlNCaGNtVWdhVzRnU1M1RkxpQmlkWFFnZEdobElITmpjbWx3ZENCb1lYTWdZbVZsYmlCbGRtRnNaV1FnYzI4Z1NTNUZMaUJrYjJWemJpZDBJQ0IwY25WemRDQjBhR1VnWjJ4dlltRnNJRzlpYW1WamRDQjNhR1Z1SUdOaGJHeGxaQ0J1YjNKdFlXeHNlVnh1SUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUdOaFkyaGxaRU5zWldGeVZHbHRaVzkxZEM1allXeHNLRzUxYkd3c0lHMWhjbXRsY2lrN1hHNGdJQ0FnSUNBZ0lIMGdZMkYwWTJnZ0tHVXBlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0x5OGdjMkZ0WlNCaGN5QmhZbTkyWlNCaWRYUWdkMmhsYmlCcGRDZHpJR0VnZG1WeWMybHZiaUJ2WmlCSkxrVXVJSFJvWVhRZ2JYVnpkQ0JvWVhabElIUm9aU0JuYkc5aVlXd2diMkpxWldOMElHWnZjaUFuZEdocGN5Y3NJR2h2Y0daMWJHeDVJRzkxY2lCamIyNTBaWGgwSUdOdmNuSmxZM1FnYjNSb1pYSjNhWE5sSUdsMElIZHBiR3dnZEdoeWIzY2dZU0JuYkc5aVlXd2daWEp5YjNJdVhHNGdJQ0FnSUNBZ0lDQWdJQ0F2THlCVGIyMWxJSFpsY25OcGIyNXpJRzltSUVrdVJTNGdhR0YyWlNCa2FXWm1aWEpsYm5RZ2NuVnNaWE1nWm05eUlHTnNaV0Z5VkdsdFpXOTFkQ0IyY3lCelpYUlVhVzFsYjNWMFhHNGdJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdZMkZqYUdWa1EyeGxZWEpVYVcxbGIzVjBMbU5oYkd3b2RHaHBjeXdnYldGeWEyVnlLVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJSDFjYmx4dVhHNWNibjFjYm5aaGNpQnhkV1YxWlNBOUlGdGRPMXh1ZG1GeUlHUnlZV2x1YVc1bklEMGdabUZzYzJVN1hHNTJZWElnWTNWeWNtVnVkRkYxWlhWbE8xeHVkbUZ5SUhGMVpYVmxTVzVrWlhnZ1BTQXRNVHRjYmx4dVpuVnVZM1JwYjI0Z1kyeGxZVzVWY0U1bGVIUlVhV05yS0NrZ2UxeHVJQ0FnSUdsbUlDZ2haSEpoYVc1cGJtY2dmSHdnSVdOMWNuSmxiblJSZFdWMVpTa2dlMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNDdYRzRnSUNBZ2ZWeHVJQ0FnSUdSeVlXbHVhVzVuSUQwZ1ptRnNjMlU3WEc0Z0lDQWdhV1lnS0dOMWNuSmxiblJSZFdWMVpTNXNaVzVuZEdncElIdGNiaUFnSUNBZ0lDQWdjWFZsZFdVZ1BTQmpkWEp5Wlc1MFVYVmxkV1V1WTI5dVkyRjBLSEYxWlhWbEtUdGNiaUFnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnSUNCeGRXVjFaVWx1WkdWNElEMGdMVEU3WEc0Z0lDQWdmVnh1SUNBZ0lHbG1JQ2h4ZFdWMVpTNXNaVzVuZEdncElIdGNiaUFnSUNBZ0lDQWdaSEpoYVc1UmRXVjFaU2dwTzF4dUlDQWdJSDFjYm4xY2JseHVablZ1WTNScGIyNGdaSEpoYVc1UmRXVjFaU2dwSUh0Y2JpQWdJQ0JwWmlBb1pISmhhVzVwYm1jcElIdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdU8xeHVJQ0FnSUgxY2JpQWdJQ0IyWVhJZ2RHbHRaVzkxZENBOUlISjFibFJwYldWdmRYUW9ZMnhsWVc1VmNFNWxlSFJVYVdOcktUdGNiaUFnSUNCa2NtRnBibWx1WnlBOUlIUnlkV1U3WEc1Y2JpQWdJQ0IyWVhJZ2JHVnVJRDBnY1hWbGRXVXViR1Z1WjNSb08xeHVJQ0FnSUhkb2FXeGxLR3hsYmlrZ2UxeHVJQ0FnSUNBZ0lDQmpkWEp5Wlc1MFVYVmxkV1VnUFNCeGRXVjFaVHRjYmlBZ0lDQWdJQ0FnY1hWbGRXVWdQU0JiWFR0Y2JpQWdJQ0FnSUNBZ2QyaHBiR1VnS0NzcmNYVmxkV1ZKYm1SbGVDQThJR3hsYmlrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tHTjFjbkpsYm5SUmRXVjFaU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdOMWNuSmxiblJSZFdWMVpWdHhkV1YxWlVsdVpHVjRYUzV5ZFc0b0tUdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQnhkV1YxWlVsdVpHVjRJRDBnTFRFN1hHNGdJQ0FnSUNBZ0lHeGxiaUE5SUhGMVpYVmxMbXhsYm1kMGFEdGNiaUFnSUNCOVhHNGdJQ0FnWTNWeWNtVnVkRkYxWlhWbElEMGdiblZzYkR0Y2JpQWdJQ0JrY21GcGJtbHVaeUE5SUdaaGJITmxPMXh1SUNBZ0lISjFia05zWldGeVZHbHRaVzkxZENoMGFXMWxiM1YwS1R0Y2JuMWNibHh1Y0hKdlkyVnpjeTV1WlhoMFZHbGpheUE5SUdaMWJtTjBhVzl1SUNobWRXNHBJSHRjYmlBZ0lDQjJZWElnWVhKbmN5QTlJRzVsZHlCQmNuSmhlU2hoY21kMWJXVnVkSE11YkdWdVozUm9JQzBnTVNrN1hHNGdJQ0FnYVdZZ0tHRnlaM1Z0Wlc1MGN5NXNaVzVuZEdnZ1BpQXhLU0I3WEc0Z0lDQWdJQ0FnSUdadmNpQW9kbUZ5SUdrZ1BTQXhPeUJwSUR3Z1lYSm5kVzFsYm5SekxteGxibWQwYURzZ2FTc3JLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmhjbWR6VzJrZ0xTQXhYU0E5SUdGeVozVnRaVzUwYzF0cFhUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lIMWNiaUFnSUNCeGRXVjFaUzV3ZFhOb0tHNWxkeUJKZEdWdEtHWjFiaXdnWVhKbmN5a3BPMXh1SUNBZ0lHbG1JQ2h4ZFdWMVpTNXNaVzVuZEdnZ1BUMDlJREVnSmlZZ0lXUnlZV2x1YVc1bktTQjdYRzRnSUNBZ0lDQWdJSEoxYmxScGJXVnZkWFFvWkhKaGFXNVJkV1YxWlNrN1hHNGdJQ0FnZlZ4dWZUdGNibHh1THk4Z2RqZ2diR2xyWlhNZ2NISmxaR2xqZEdsaWJHVWdiMkpxWldOMGMxeHVablZ1WTNScGIyNGdTWFJsYlNobWRXNHNJR0Z5Y21GNUtTQjdYRzRnSUNBZ2RHaHBjeTVtZFc0Z1BTQm1kVzQ3WEc0Z0lDQWdkR2hwY3k1aGNuSmhlU0E5SUdGeWNtRjVPMXh1ZlZ4dVNYUmxiUzV3Y205MGIzUjVjR1V1Y25WdUlEMGdablZ1WTNScGIyNGdLQ2tnZTF4dUlDQWdJSFJvYVhNdVpuVnVMbUZ3Y0d4NUtHNTFiR3dzSUhSb2FYTXVZWEp5WVhrcE8xeHVmVHRjYm5CeWIyTmxjM011ZEdsMGJHVWdQU0FuWW5KdmQzTmxjaWM3WEc1d2NtOWpaWE56TG1KeWIzZHpaWElnUFNCMGNuVmxPMXh1Y0hKdlkyVnpjeTVsYm5ZZ1BTQjdmVHRjYm5CeWIyTmxjM011WVhKbmRpQTlJRnRkTzF4dWNISnZZMlZ6Y3k1MlpYSnphVzl1SUQwZ0p5YzdJQzh2SUdWdGNIUjVJSE4wY21sdVp5QjBieUJoZG05cFpDQnlaV2RsZUhBZ2FYTnpkV1Z6WEc1d2NtOWpaWE56TG5abGNuTnBiMjV6SUQwZ2UzMDdYRzVjYm1aMWJtTjBhVzl1SUc1dmIzQW9LU0I3ZlZ4dVhHNXdjbTlqWlhOekxtOXVJRDBnYm05dmNEdGNibkJ5YjJObGMzTXVZV1JrVEdsemRHVnVaWElnUFNCdWIyOXdPMXh1Y0hKdlkyVnpjeTV2Ym1ObElEMGdibTl2Y0R0Y2JuQnliMk5sYzNNdWIyWm1JRDBnYm05dmNEdGNibkJ5YjJObGMzTXVjbVZ0YjNabFRHbHpkR1Z1WlhJZ1BTQnViMjl3TzF4dWNISnZZMlZ6Y3k1eVpXMXZkbVZCYkd4TWFYTjBaVzVsY25NZ1BTQnViMjl3TzF4dWNISnZZMlZ6Y3k1bGJXbDBJRDBnYm05dmNEdGNibkJ5YjJObGMzTXVjSEpsY0dWdVpFeHBjM1JsYm1WeUlEMGdibTl2Y0R0Y2JuQnliMk5sYzNNdWNISmxjR1Z1WkU5dVkyVk1hWE4wWlc1bGNpQTlJRzV2YjNBN1hHNWNibkJ5YjJObGMzTXViR2x6ZEdWdVpYSnpJRDBnWm5WdVkzUnBiMjRnS0c1aGJXVXBJSHNnY21WMGRYSnVJRnRkSUgxY2JseHVjSEp2WTJWemN5NWlhVzVrYVc1bklEMGdablZ1WTNScGIyNGdLRzVoYldVcElIdGNiaUFnSUNCMGFISnZkeUJ1WlhjZ1JYSnliM0lvSjNCeWIyTmxjM011WW1sdVpHbHVaeUJwY3lCdWIzUWdjM1Z3Y0c5eWRHVmtKeWs3WEc1OU8xeHVYRzV3Y205alpYTnpMbU4zWkNBOUlHWjFibU4wYVc5dUlDZ3BJSHNnY21WMGRYSnVJQ2N2SnlCOU8xeHVjSEp2WTJWemN5NWphR1JwY2lBOUlHWjFibU4wYVc5dUlDaGthWElwSUh0Y2JpQWdJQ0IwYUhKdmR5QnVaWGNnUlhKeWIzSW9KM0J5YjJObGMzTXVZMmhrYVhJZ2FYTWdibTkwSUhOMWNIQnZjblJsWkNjcE8xeHVmVHRjYm5CeWIyTmxjM011ZFcxaGMyc2dQU0JtZFc1amRHbHZiaWdwSUhzZ2NtVjBkWEp1SURBN0lIMDdYRzRpTENJdktpQmxjMnhwYm5RdFpHbHpZV0pzWlNCdWIyUmxMMjV2TFdSbGNISmxZMkYwWldRdFlYQnBJQ292WEc1MllYSWdZblZtWm1WeUlEMGdjbVZ4ZFdseVpTZ25ZblZtWm1WeUp5bGNiblpoY2lCQ2RXWm1aWElnUFNCaWRXWm1aWEl1UW5WbVptVnlYRzVjYmk4dklHRnNkR1Z5Ym1GMGFYWmxJSFJ2SUhWemFXNW5JRTlpYW1WamRDNXJaWGx6SUdadmNpQnZiR1FnWW5KdmQzTmxjbk5jYm1aMWJtTjBhVzl1SUdOdmNIbFFjbTl3Y3lBb2MzSmpMQ0JrYzNRcElIdGNiaUFnWm05eUlDaDJZWElnYTJWNUlHbHVJSE55WXlrZ2UxeHVJQ0FnSUdSemRGdHJaWGxkSUQwZ2MzSmpXMnRsZVYxY2JpQWdmVnh1ZlZ4dWFXWWdLRUoxWm1abGNpNW1jbTl0SUNZbUlFSjFabVpsY2k1aGJHeHZZeUFtSmlCQ2RXWm1aWEl1WVd4c2IyTlZibk5oWm1VZ0ppWWdRblZtWm1WeUxtRnNiRzlqVlc1ellXWmxVMnh2ZHlrZ2UxeHVJQ0J0YjJSMWJHVXVaWGh3YjNKMGN5QTlJR0oxWm1abGNseHVmU0JsYkhObElIdGNiaUFnTHk4Z1EyOXdlU0J3Y205d1pYSjBhV1Z6SUdaeWIyMGdjbVZ4ZFdseVpTZ25ZblZtWm1WeUp5bGNiaUFnWTI5d2VWQnliM0J6S0dKMVptWmxjaXdnWlhod2IzSjBjeWxjYmlBZ1pYaHdiM0owY3k1Q2RXWm1aWElnUFNCVFlXWmxRblZtWm1WeVhHNTlYRzVjYm1aMWJtTjBhVzl1SUZOaFptVkNkV1ptWlhJZ0tHRnlaeXdnWlc1amIyUnBibWRQY2s5bVpuTmxkQ3dnYkdWdVozUm9LU0I3WEc0Z0lISmxkSFZ5YmlCQ2RXWm1aWElvWVhKbkxDQmxibU52WkdsdVowOXlUMlptYzJWMExDQnNaVzVuZEdncFhHNTlYRzVjYmk4dklFTnZjSGtnYzNSaGRHbGpJRzFsZEdodlpITWdabkp2YlNCQ2RXWm1aWEpjYm1OdmNIbFFjbTl3Y3loQ2RXWm1aWElzSUZOaFptVkNkV1ptWlhJcFhHNWNibE5oWm1WQ2RXWm1aWEl1Wm5KdmJTQTlJR1oxYm1OMGFXOXVJQ2hoY21jc0lHVnVZMjlrYVc1blQzSlBabVp6WlhRc0lHeGxibWQwYUNrZ2UxeHVJQ0JwWmlBb2RIbHdaVzltSUdGeVp5QTlQVDBnSjI1MWJXSmxjaWNwSUh0Y2JpQWdJQ0IwYUhKdmR5QnVaWGNnVkhsd1pVVnljbTl5S0NkQmNtZDFiV1Z1ZENCdGRYTjBJRzV2ZENCaVpTQmhJRzUxYldKbGNpY3BYRzRnSUgxY2JpQWdjbVYwZFhKdUlFSjFabVpsY2loaGNtY3NJR1Z1WTI5a2FXNW5UM0pQWm1aelpYUXNJR3hsYm1kMGFDbGNibjFjYmx4dVUyRm1aVUoxWm1abGNpNWhiR3h2WXlBOUlHWjFibU4wYVc5dUlDaHphWHBsTENCbWFXeHNMQ0JsYm1OdlpHbHVaeWtnZTF4dUlDQnBaaUFvZEhsd1pXOW1JSE5wZW1VZ0lUMDlJQ2R1ZFcxaVpYSW5LU0I3WEc0Z0lDQWdkR2h5YjNjZ2JtVjNJRlI1Y0dWRmNuSnZjaWduUVhKbmRXMWxiblFnYlhWemRDQmlaU0JoSUc1MWJXSmxjaWNwWEc0Z0lIMWNiaUFnZG1GeUlHSjFaaUE5SUVKMVptWmxjaWh6YVhwbEtWeHVJQ0JwWmlBb1ptbHNiQ0FoUFQwZ2RXNWtaV1pwYm1Wa0tTQjdYRzRnSUNBZ2FXWWdLSFI1Y0dWdlppQmxibU52WkdsdVp5QTlQVDBnSjNOMGNtbHVaeWNwSUh0Y2JpQWdJQ0FnSUdKMVppNW1hV3hzS0dacGJHd3NJR1Z1WTI5a2FXNW5LVnh1SUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNCaWRXWXVabWxzYkNobWFXeHNLVnh1SUNBZ0lIMWNiaUFnZlNCbGJITmxJSHRjYmlBZ0lDQmlkV1l1Wm1sc2JDZ3dLVnh1SUNCOVhHNGdJSEpsZEhWeWJpQmlkV1pjYm4xY2JseHVVMkZtWlVKMVptWmxjaTVoYkd4dlkxVnVjMkZtWlNBOUlHWjFibU4wYVc5dUlDaHphWHBsS1NCN1hHNGdJR2xtSUNoMGVYQmxiMllnYzJsNlpTQWhQVDBnSjI1MWJXSmxjaWNwSUh0Y2JpQWdJQ0IwYUhKdmR5QnVaWGNnVkhsd1pVVnljbTl5S0NkQmNtZDFiV1Z1ZENCdGRYTjBJR0psSUdFZ2JuVnRZbVZ5SnlsY2JpQWdmVnh1SUNCeVpYUjFjbTRnUW5WbVptVnlLSE5wZW1VcFhHNTlYRzVjYmxOaFptVkNkV1ptWlhJdVlXeHNiMk5WYm5OaFptVlRiRzkzSUQwZ1puVnVZM1JwYjI0Z0tITnBlbVVwSUh0Y2JpQWdhV1lnS0hSNWNHVnZaaUJ6YVhwbElDRTlQU0FuYm5WdFltVnlKeWtnZTF4dUlDQWdJSFJvY205M0lHNWxkeUJVZVhCbFJYSnliM0lvSjBGeVozVnRaVzUwSUcxMWMzUWdZbVVnWVNCdWRXMWlaWEluS1Z4dUlDQjlYRzRnSUhKbGRIVnliaUJpZFdabVpYSXVVMnh2ZDBKMVptWmxjaWh6YVhwbEtWeHVmVnh1SWl3aWRtRnlJR2M3WEc1Y2JpOHZJRlJvYVhNZ2QyOXlhM01nYVc0Z2JtOXVMWE4wY21samRDQnRiMlJsWEc1bklEMGdLR1oxYm1OMGFXOXVLQ2tnZTF4dVhIUnlaWFIxY200Z2RHaHBjenRjYm4wcEtDazdYRzVjYm5SeWVTQjdYRzVjZEM4dklGUm9hWE1nZDI5eWEzTWdhV1lnWlhaaGJDQnBjeUJoYkd4dmQyVmtJQ2h6WldVZ1ExTlFLVnh1WEhSbklEMGdaeUI4ZkNCdVpYY2dSblZ1WTNScGIyNG9YQ0p5WlhSMWNtNGdkR2hwYzF3aUtTZ3BPMXh1ZlNCallYUmphQ0FvWlNrZ2UxeHVYSFF2THlCVWFHbHpJSGR2Y210eklHbG1JSFJvWlNCM2FXNWtiM2NnY21WbVpYSmxibU5sSUdseklHRjJZV2xzWVdKc1pWeHVYSFJwWmlBb2RIbHdaVzltSUhkcGJtUnZkeUE5UFQwZ1hDSnZZbXBsWTNSY0lpa2daeUE5SUhkcGJtUnZkenRjYm4xY2JseHVMeThnWnlCallXNGdjM1JwYkd3Z1ltVWdkVzVrWldacGJtVmtMQ0JpZFhRZ2JtOTBhR2x1WnlCMGJ5QmtieUJoWW05MWRDQnBkQzR1TGx4dUx5OGdWMlVnY21WMGRYSnVJSFZ1WkdWbWFXNWxaQ3dnYVc1emRHVmhaQ0J2WmlCdWIzUm9hVzVuSUdobGNtVXNJSE52SUdsMEozTmNiaTh2SUdWaGMybGxjaUIwYnlCb1lXNWtiR1VnZEdocGN5QmpZWE5sTGlCcFppZ2haMnh2WW1Gc0tTQjdJQzR1TG4xY2JseHViVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQm5PMXh1SWl3aWJXOWtkV3hsTG1WNGNHOXlkSE1nUFNCbGVIUmxibVJjYmx4dWRtRnlJR2hoYzA5M2JsQnliM0JsY25SNUlEMGdUMkpxWldOMExuQnliM1J2ZEhsd1pTNW9ZWE5QZDI1UWNtOXdaWEowZVR0Y2JseHVablZ1WTNScGIyNGdaWGgwWlc1a0tDa2dlMXh1SUNBZ0lIWmhjaUIwWVhKblpYUWdQU0I3ZlZ4dVhHNGdJQ0FnWm05eUlDaDJZWElnYVNBOUlEQTdJR2tnUENCaGNtZDFiV1Z1ZEhNdWJHVnVaM1JvT3lCcEt5c3BJSHRjYmlBZ0lDQWdJQ0FnZG1GeUlITnZkWEpqWlNBOUlHRnlaM1Z0Wlc1MGMxdHBYVnh1WEc0Z0lDQWdJQ0FnSUdadmNpQW9kbUZ5SUd0bGVTQnBiaUJ6YjNWeVkyVXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2hvWVhOUGQyNVFjbTl3WlhKMGVTNWpZV3hzS0hOdmRYSmpaU3dnYTJWNUtTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFJoY21kbGRGdHJaWGxkSUQwZ2MyOTFjbU5sVzJ0bGVWMWNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JseHVJQ0FnSUhKbGRIVnliaUIwWVhKblpYUmNibjFjYmlJc0ltVjRjRzl5ZENCN0lHUmxabUYxYkhRZ1lYTWdiV1Z0Ukc5M2JrTmhZMmhsSUgwZ1puSnZiU0FuTGk5dFpXMWtiM2R1UTJGamFHVW5PMXh1Wlhod2IzSjBJSHNnWkdWbVlYVnNkQ0JoY3lCTlpXMURZV05vWlUxcGVHbHVjeUI5SUdaeWIyMGdKeTR2YldWdFkyRmphR1V1YldsNGFXNXpKenRjYmlJc0lpOHFLbHh1SUNvZ1ZHaHBjeUJ0YVhocGJuTWdZMnhoYzNNZ2NISnZkbWxrWlhNZ1lYUjBjbWxpZFhSbGN6b2dLaXBOWlcxRFlXTm9aU29xTGx4dUlDb2dRR05zWVhOeklFMWxiVU5oWTJobFRXbDRhVzV6WEc0Z0tpQkFaWGgwWlc1a2N5QjdRbUZ6WlVOc1lYTnpmVnh1SUNvdlhHNWpiMjV6ZENCTlpXMURZV05vWlUxcGVHbHVjeUE5SUNoQ1lYTmxRMnhoYzNNcFBUNGdZMnhoYzNNZ1pYaDBaVzVrY3lCQ1lYTmxRMnhoYzNON1hHNGdJQ0FnTHlvcVhHNGdJQ0FnSUNvZ1ZHaHBjeUJ0WlhSb2IyUnpJSEpsZEhWeWJpQnpkVzF0WVhKNUlHRmliM1YwSUdsMFpXMXpJRzltSUhSb1pTQmpkWEp5Wlc1MElHMWxiV05oWTJobElGeHVJQ0FnSUNBcUlFQnlaWFIxY201elhHNGdJQ0FnSUNvdlhHNGdJQ0FnWVhONWJtTWdiV1Z0UTJGamFHVlRkVzF0WVhKNUtDbDdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQmhkMkZwZENCMGFHbHpMbTFsYlVOaFkyaGxMbWRsZEVsMFpXMU1hWE4wS0NrN1hHNGdJQ0FnZlZ4dUlDQWdJRnh1SUNBZ0lITmxkQ0JOWlcxRFlXTm9aU2h0WlcxRFlXTm9aU2w3WEc0Z0lDQWdJQ0FnSUhSb2FYTXViV1Z0UTJGamFHVWdQU0J0WlcxRFlXTm9aVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQm5aWFFnVFdWdFEyRmphR1VvS1h0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhSb2FYTXViV1Z0UTJGamFHVTdYRzRnSUNBZ2ZWeHVmVHRjYm1WNGNHOXlkQ0JrWldaaGRXeDBJRTFsYlVOaFkyaGxUV2w0YVc1ek95SXNJbWx0Y0c5eWRDQjdJSEJzWVhSbWIzSnRJSDBnWm5KdmJTQW5ZMkYxYzJGc0xXNWxkQzUxZEdsc2N5YzdYRzVwYlhCdmNuUWdleUJUZEc5eVpTQmhjeUJDWVhObFRXVnRRMkZqYUdVZ2ZTQm1jbTl0SUNkallYVnpZV3d0Ym1WMExtTnZjbVVuTzF4dWFXMXdiM0owSUhzZ1pHVm1ZWFZzZENCaGN5Qk5aVzF2Y21sNmFXNW5UV2w0YVc1eklIMGdabkp2YlNBbkxpOXRaVzF2Y21sNmFXNW5MbTFwZUdsdWN5YzdYRzR2S2lwY2JpQXFJRlJvYVhNZ1kyeGhjM01nY0hKdmRtbGtaWE1nYzNSdmNtRm5aU0JwYlhCc1pXMWxiblJoZEdsdmJpQm1iM0lnYldWdGIzSjVJR05oWTJocGJtY2diMjRnZEc5d0lHOW1YRzRnS2lCYmJXVnRaRzkzYmwwb2FIUjBjSE02THk5M2QzY3VibkJ0YW5NdVkyOXRMM0JoWTJ0aFoyVXZiV1Z0Wkc5M2Jpa2dkMmhwWTJnZ1kyRnVJR0psSUdGalkyVnpjMlZrSUhacFlTQXFLbTFsYlVSdmQyNURZV05vWlNvcUxseHVJQ29nZXlCdGFYaFhhWFJvT2lCYklFMWxiVzl5YVhwcGJtZE5hWGhwYm5NZ1hTQjlYRzRnS2lCQVkyeGhjM01nVFdWdFpHOTNia05oWTJobFhHNGdLaUJBWlhoMFpXNWtjeUJDWVhObFRXVnRRMkZqYUdWY2JpQXFMMXh1WTJ4aGMzTWdUV1Z0Wkc5M2JrTmhZMmhsSUdWNGRHVnVaSE1nY0d4aGRHWnZjbTB1YldsNFYybDBhQ2dnUW1GelpVMWxiVU5oWTJobExGeHVJQ0FnSUZzZ1RXVnRiM0pwZW1sdVowMXBlR2x1Y3lCZEtYdGNiaUFnSUNCamIyNXpkSEoxWTNSdmNpZ3BlMXh1SUNBZ0lDQWdJQ0J6ZFhCbGNpZ3BPMXh1SUNBZ0lDQWdJQ0IwYUdsekxtTnZibTVsWTNRb0tUdGNiaUFnSUNCOVhHNGdJQ0FnTHlvcVhHNGdJQ0FnSUNvZ1EyOXVibVZqZENCMGJ5QmtZWFJoWW1GelpTd2dkR2hwY3lCbWRXNWpkR2x2YmlCemFHRnNiQ0JpWlNCallXeHNJSGRvWlc0Z1kyOXVjM1J5ZFdOMElHbHVjM1JoYm1ObFhHNGdJQ0FnSUNvZ1FHMWxiV0psY205bUlFMWxiV1J2ZDI1RFlXTm9aVnh1SUNBZ0lDQXFMMXh1SUNBZ0lHTnZibTVsWTNRb0tYdGNiaUFnSUNBZ0lDQWdiR1YwSUcxbGJXUnZkMjRnUFNCeVpYRjFhWEpsS0NkdFpXMWtiM2R1SnlrN1hHNGdJQ0FnSUNBZ0lIUm9hWE11YzNSdmNtVWdQU0IwYUdsekxteGxkbVZzZFhBb2JXVnRaRzkzYmlncEtUc2dJQ0FnSUNBZ0lGeHVJQ0FnSUgxY2JuMWNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdibVYzSUUxbGJXUnZkMjVEWVdOb1pTZ3BPeUlzSWk4cUtseHVJQ29nVkdocGN5Qk5aVzF2Y21sNmFXNW5UV2w0YVc1eklHTnNZWE56SUdseklHRWdiV2w0YVc1eklHTnNZWE56SUdadmNpQnBiWEJzWlcxbGJuUWdiV1Z0YjNKNUlHMWxkR2h2WkhOY2JpQXFJRUJqYkdGemN5Qk5aVzF2Y21sNmFXNW5UV2w0YVc1elhHNGdLaUJBWlhod1pYSnBiV1Z1ZEZ4dUlDb2dRR1Y0ZEdWdVpITWdRbUZ6WlUxbGJVTmhZMmhsUTJ4aGMzTmNiaUFxTDF4dVkyOXVjM1FnVFdWdGIzSnBlbWx1WjAxcGVHbHVjeUE5SUNoQ1lYTmxUV1Z0UTJGamFHVkRiR0Z6Y3lrOVBpQmpiR0Z6Y3lCbGVIUmxibVJ6SUVKaGMyVk5aVzFEWVdOb1pVTnNZWE56ZTF4dUlDQWdJQzhxS2x4dUlDQWdJQ0FxSUZKbFlXUWdZMjl1ZEdWdWRDQm1jbTl0SUZ4dUlDQWdJQ0FxSUVCbGVIQmxjbWx0Wlc1MFhHNGdJQ0FnSUNvZ1FIQmhjbUZ0SUhzZ1UzUnlhVzVuZkU1MWJXSmxjaUI5SUcxbGJXOXllVk5zYjNSSmJtUmxlQ0F0SUcxbGJXOXllU0J6Ykc5MElHbHVaR1Y0WEc0Z0lDQWdJQ29nUUhKbGRIVnlibk5jYmlBZ0lDQWdLaTljYmlBZ0lDQmhjM2x1WXlCeVpXRmtLRzFsYlc5eWVWTnNiM1JKYm1SbGVDbDdYRzRnSUNBZ0lDQWdJR052Ym5OMElFZGxkRVp5YjIxTlpXMXZjbmtnUFNCaGMzbHVZeUFvYldWdGIzSjVVMnh2ZEVsdVpHVjRLVDArZTF4dUlDQWdJQ0FnSUNBZ0lDQWdkSEo1ZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUd4bGRDQmtZWFJoSUQwZ1lYZGhhWFFnZEdocGN5NW5aWFJKZEdWdEtHMWxiVzl5ZVZOc2IzUkpibVJsZUNrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUU5aWFtVmpkQzUyWVd4MVpYTW9aR0YwWVNsYk1GMDdYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lDQWdJQ0JqWVhSamFDaGxjbklwZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUJ1ZFd4c095QWdJQ0JjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmVHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJR0YzWVdsMElFZGxkRVp5YjIxTlpXMXZjbmtvYldWdGIzSjVVMnh2ZEVsdVpHVjRLVHRjYmlBZ0lDQjlYRzRnSUNBZ0x5b3FYRzRnSUNBZ0lDb2dYRzRnSUNBZ0lDb2dRSEJoY21GdElIc2dVM1J5YVc1bmZFNTFiV0psY2lCOUlHMWxiVzl5ZVZOc2IzUkpibVJsZUNBdElIQnZjMmwwYVhabElHNTFiV0psY2lCbWIzSWdiV1Z0YjNKNUlITnNiM1JjYmlBZ0lDQWdLaUJBY0dGeVlXMGdleUJCY25KaGVTQjlJRzFsYlc5eWVTQjJZV3gxWlZ4dUlDQWdJQ0FxSUVCeVpYUjFjbTV6SUhzZ1VISnZiV2x6WlNCOUlHMWxiVzl5ZVNCemJHOTBJR2x1WkdWNElIWmhiSFZsWEc0Z0lDQWdJQ292WEc0Z0lDQWdZWE41Ym1NZ2QzSnBkR1VvYldWdGIzSjVVMnh2ZEVsdVpHVjRMQ0IyWVd4MVpTbDdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQmhkMkZwZENCMGFHbHpMbk5sZEVsMFpXMG9iV1Z0YjNKNVUyeHZkRWx1WkdWNExDQjJZV3gxWlNrN1hHNGdJQ0FnZlZ4dUlDQWdJQzhxS2x4dUlDQWdJQ0FxWEc0Z0lDQWdJQ3BjYmlBZ0lDQWdLaUJBY0dGeVlXMGdleXA5SUhOc2IzUkpaSGh6WEc0Z0lDQWdJQ29nUUhKbGRIVnlibk5jYmlBZ0lDQWdLaTljYmlBZ0lDQmhjM2x1WXlCeVpXTmhiR3dvYzJ4dmRFbGtlSE1wZTF4dUlDQWdJQ0FnSUNCc1pYUWdiV1Z0YjNKNUlEMGdXMTA3WEc0Z0lDQWdJQ0FnSUdadmNpaHNaWFFnYzJ4dmRFbGtlQ0J2WmlCemJHOTBTV1I0Y3lsN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J0WlcxdmNua3VjSFZ6YUNoaGQyRnBkQ0IwYUdsekxuSmxZV1FvYzJ4dmRFbGtlQ2twTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCdFpXMXZjbms3WEc0Z0lDQWdmVnh1ZlR0Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUUxbGJXOXlhWHBwYm1kTmFYaHBibk03SWl3aWJXOWtkV3hsTG1WNGNHOXlkSE1nUFNCZlgxZEZRbEJCUTB0ZlJWaFVSVkpPUVV4ZlRVOUVWVXhGWDJOaGRYTmhiRjl1WlhSZlkyOXlaVjlmT3lJc0ltMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ1gxOVhSVUpRUVVOTFgwVllWRVZTVGtGTVgwMVBSRlZNUlY5allYVnpZV3hmYm1WMFgzVjBhV3h6WDE4N0lsMHNJbk52ZFhKalpWSnZiM1FpT2lJaWZRPT0iLCJpbXBvcnQgeyBUZW5zb3IsIGNhdXNhbE5ldENvcmUgfSBmcm9tICdjYXVzYWwtbmV0LmNvcmUnO1xuaW1wb3J0IHsgbWVtRG93bkNhY2hlIH0gZnJvbSAnY2F1c2FsLW5ldC5tZW1jYWNoZSc7XG4vKipcbiAqIFRoaXMgY2xhc3MgaXMgdW5kZXIgZXhwZXJpbWVudGVkXG4gKiBAZXhwZXJpbWVudFxuICogQGNsYXNzIENhdXNhbE5ldE1lbW9yeVxuICogQGV4dGVuZHMge1RlbnNvcn1cbiAqL1xuY2xhc3MgQ2F1c2FsTmV0TWVtb3J5IGV4dGVuZHMgVGVuc29ye1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuTWVtb3J5ID0gbWVtRG93bkNhY2hlO1xuICAgICAgICB0aGlzLlIgPSBjYXVzYWxOZXRDb3JlLkNvcmVGdW5jdGlvbjtcbiAgICB9XG4gICAgc2V0IE1lbW9yeShtZW1vcnkpe1xuICAgICAgICAvL1RPRE86IHR5cGUgY2hlY2tpbmcgXG4gICAgICAgIHRoaXMubWVtb3J5ID0gbWVtb3J5O1xuICAgIH1cbiAgICBnZXQgTWVtb3J5KCl7XG4gICAgICAgIGlmKCF0aGlzLm1lbW9yeSl7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcihgbWVtb3J5IGlzIG5vdCBzZXRgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5tZW1vcnk7XG4gICAgfVxuICAgIGdldCBNZW1vcnlTaXplKCl7XG4gICAgICAgIHJldHVybiB0aGlzLm1lbW9yeVNpemU7XG4gICAgfVxuICAgIHNldCBNZW1vcnlTaXplKHNpemUpe1xuICAgICAgICB0aGlzLm1lbW9yeVNpemUgPSBzaXplO1xuICAgIH1cbiAgICBnZXQgTnVtU2xvdHMoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMubWVtb3J5U2l6ZVswXTtcbiAgICB9XG4gICAgZ2V0IFNsb3RTaXplKCl7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdGhpcy5tZW1vcnlTaXplWzFdO1xuICAgIH1cbiAgICBhc3luYyBpbml0TWVtb3J5KHNpemUsIGluaXRUZW5zb3I9bnVsbCl7XG4gICAgICAgIHRoaXMuTWVtb3J5U2l6ZSA9IHNpemU7XG4gICAgICAgIGNvbnN0IFIgPSB0aGlzLlI7XG4gICAgICAgIGlmKCFpbml0VGVuc29yKXtcbiAgICAgICAgICAgIGluaXRUZW5zb3IgPSBhd2FpdCB0aGlzLlQucmFuZG9tTm9ybWFsKHNpemUpO1xuICAgICAgICB9ICAgICAgICBcbiAgICAgICAgbGV0IHNsb3RJZHhzID0gUi5yYW5nZSgwLCB0aGlzLk51bVNsb3RzKTtcbiAgICAgICAgcmV0dXJuIHRoaXMud3JpdGVTbG90cyhzbG90SWR4cywgaW5pdFRlbnNvcik7XG4gICAgfVxuXG4gICAgYXN5bmMgbm9ybWFsaXplKCl7XG4gICAgICAgIGNvbnN0IE1lbW9yeSA9IHRoaXMuTWVtb3J5LCBOdW1TbG90cyA9IHRoaXMuTnVtU2xvdHMsIFIgPSB0aGlzLlI7XG4gICAgICAgIGxldCBtZW1WYWx1ZXMgPSBhd2FpdCBNZW1vcnkucmVjYWxsKFIucmFuZ2UoMCwgTnVtU2xvdHMpKTtcbiAgICAgICAgbGV0IGFsbFRzID0gdGhpcy5ULnRlbnNvcihtZW1WYWx1ZXMpO1xuICAgICAgICBsZXQgbWVhblRzID0gYWxsVHMubWVhbigxLCB0cnVlKTtcbiAgICAgICAgbGV0IHN0ZFRzID0gYWxsVHMuc3ViKG1lYW5UcykucG93KDIpLm1lYW4oMSwgdHJ1ZSkucG93KDAuNSk7XG4gICAgICAgIHJldHVybiBhbGxUcy5zdWIobWVhblRzKS5kaXYoc3RkVHMpOyAgICBcbiAgICB9XG5cbiAgICBhc3luYyBnZXRNYXRjaFNjb3JlKHNsb3RJZHhzKXtcbiAgICAgICAgbGV0IG5vcm1UcyA9IGF3YWl0IHRoaXMubm9ybWFsaXplKCk7XG4gICAgICAgIGxldCBjVHMgPSBub3JtVHMuZ2F0aGVyKHNsb3RJZHhzKTtcbiAgICAgICAgbGV0IHNpbWlsYXJpdHlTY29yZSA9IG5vcm1Ucy5kb3QoY1RzLnRyYW5zcG9zZSgpKTtcbiAgICAgICAgcmV0dXJuIHNpbWlsYXJpdHlTY29yZTtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRUb3BLU2ltaWxhcihzbG90SWR4cywgayl7XG4gICAgICAgIGxldCBtYXRjaFNjb3JlVGVuc29yID0gYXdhaXQgdGhpcy5nZXRNYXRjaFNjb3JlKHNsb3RJZHhzKTtcbiAgICAgICAgY29uc3Qge3ZhbHVlcywgaW5kaWNlc30gPSBtYXRjaFNjb3JlVGVuc29yLnRyYW5zcG9zZSgpLnRvcGsoayk7XG4gICAgICAgIHJldHVybiBpbmRpY2VzO1xuICAgIH1cbiAgICBcbiAgICBhc3luYyB3cml0ZVNsb3RzKHNsb3RJZHhzLCBtZW1vcnlUZW5zb3IpeyAgIFxuICAgICAgICBjb25zdCBSID0gdGhpcy5SLCBTbG90U2l6ZSA9IHRoaXMuU2xvdFNpemUsIE1lbW9yeSA9IHRoaXMuTWVtb3J5O1xuICAgICAgICBsZXQgdGVuc29yRGF0YSA9IGF3YWl0IG1lbW9yeVRlbnNvci5kYXRhKCk7IFxuICAgICAgICBsZXQgdmFsdWVzID0gUi5zcGxpdEV2ZXJ5KFNsb3RTaXplLCB0ZW5zb3JEYXRhKTtcbiAgICAgICAgZm9yKGxldCBpZHggb2YgUi5yYW5nZSgwLCBzbG90SWR4cy5sZW5ndGgpKXtcbiAgICAgICAgICAgIGF3YWl0IE1lbW9yeS53cml0ZShzbG90SWR4c1tpZHhdLCB2YWx1ZXNbaWR4XSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1lbW9yeVRlbnNvcjtcbiAgICB9XG4gICAgYXN5bmMgcmVhZFNsb3RzKHNsb3RJbmRleHMpe1xuICAgICAgICBjb25zdCBNZW1vcnkgPSB0aGlzLk1lbW9yeSwgVCA9IHRoaXMuVDtcbiAgICAgICAgbGV0IHZhbHVlcyA9IFtdO1xuICAgICAgICBmb3IobGV0IHNsb3RJZHggb2Ygc2xvdEluZGV4cyl7XG4gICAgICAgICAgICBsZXQgdmFsdWUgPSBhd2FpdCBNZW1vcnkucmVhZChzbG90SWR4KTtcbiAgICAgICAgICAgIHZhbHVlcy5wdXNoKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gVC52YXJpYWJsZShULnRlbnNvcih2YWx1ZXMpKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBDYXVzYWxOZXRNZW1vcnkoKTsiLCJleHBvcnQgeyBkZWZhdWx0IGFzIGNhdXNhbE5ldE1lbW9yeSB9IGZyb20gJy4vY2F1c2FsTmV0TWVtb3J5JzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9jb3JlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfdXRpbHNfXzsiXSwic291cmNlUm9vdCI6IiJ9