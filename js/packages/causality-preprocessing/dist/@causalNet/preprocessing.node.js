(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("causal-net.core"), require("causal-net.log"), require("causal-net.storage"), require("causal-net.utils"));
	else if(typeof define === 'function' && define.amd)
		define(["causal-net.core", "causal-net.log", "causal-net.storage", "causal-net.utils"], factory);
	else if(typeof exports === 'object')
		exports["@causalNet/preprocessing"] = factory(require("causal-net.core"), require("causal-net.log"), require("causal-net.storage"), require("causal-net.utils"));
	else
		root["@causalNet/preprocessing"] = factory(root["causal-net.core"], root["causal-net.log"], root["causal-net.storage"], root["causal-net.utils"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_causal_net_core__, __WEBPACK_EXTERNAL_MODULE_causal_net_log__, __WEBPACK_EXTERNAL_MODULE_causal_net_storage__, __WEBPACK_EXTERNAL_MODULE_causal_net_utils__) {
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

/***/ "./src/Image/boxScaling.js":
/*!*********************************!*\
  !*** ./src/Image/boxScaling.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Buffer) {//origin code: https://github.com/jjstiff/png-scale/blob/master/algos/box-scaling.js
/* harmony default export */ __webpack_exports__["default"] = (function (buffer, originSize, newSize) {
  let sX = 0;
  let sY = 0;
  let [sW, sH] = originSize;
  let dX = 0;
  let dY = 0;
  let [dW, dH] = newSize;
  let targetBuffer = Buffer.alloc(dW * dH * 4);

  var copy = function (ys, yd, xs, xd, count) {
    buffer.copy(targetBuffer, (dY + yd) * dW + dX + xd << 2, (sY + ys) * sW + sX + xs << 2, (sY + ys) * sH + sX + xs + count << 2);
  };

  var y_shrink = function (x_fun) {
    var y_ = [];

    for (var ys = 0; ys < sH; ys++) {
      var yd = Math.floor(ys * dH / sH);
      if (y_[yd]) continue;
      y_[yd] = true;
      x_fun(ys, yd);
    }
  };

  var y_grow = function (x_fun) {
    for (var yd = 0; yd < dH; yd++) {
      var ys = Math.floor(yd * sH / dH);
      x_fun(ys, yd);
    }
  };

  var x_shrink = function (ys, yd) {
    var x_ = [];

    for (var xs = 0; xs < sW; xs++) {
      var xd = Math.floor(xs * dW / sW);
      if (x_[xd]) continue;
      x_[xd] = true;
      copy(ys, yd, xs, xd, 1);
    }
  };

  var x_grow = function (ys, yd) {
    for (var xd = 0; xd < dW; xd++) {
      var xs = Math.floor(xd * sW / dW);
      copy(ys, yd, xs, xd, 1); // Could be faster by doing more than 1 when needed.
    }
  };

  if (sH >= dH && sW >= dW) {
    y_shrink(x_shrink);
  } else if (sH >= dH) {
    y_shrink(x_grow);
  } else if (sW >= dW) {
    y_grow(x_shrink);
  } else {
    y_grow(x_grow);
  }

  return targetBuffer;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/buffer/index.js */ "../../node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "./src/Image/colorTransforming.mixins.js":
/*!***********************************************!*\
  !*** ./src/Image/colorTransforming.mixins.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const ColorTransformingMixins = PreprocessingClass => class extends PreprocessingClass {
  colorTransform(tranformFn, sampleBuffer, channelSize) {
    const R = this.R;
    return R.flatten(R.map(tranformFn, R.splitEvery(channelSize, sampleBuffer)));
  }
  /**
   * Transform color image to black on white image. This function also reduce chanel to 1.
   * @param { Array|Buffer } sampleBuffer
   * @param { Number } channelSize
   * @return { Array } image data after transform
   */


  blackWhiteTransform(sampleBuffer) {
    const BlackWhiteFn = pixel => {
      let pixelValue = (pixel[0] + pixel[1] + pixel[2]) / 3;
      return ~~pixelValue;
    };

    return this.colorTransform(BlackWhiteFn, sampleBuffer, 4);
  }

  oneBitTransform(sampleBuffer) {
    const BlackWhiteFn = pixel => {
      let pixelValue = (pixel[0] + pixel[1] + pixel[2]) / 3;
      return pixelValue > 127 ? 1 : 0;
    };

    return this.colorTransform(BlackWhiteFn, sampleBuffer, 4);
  }

};

/* harmony default export */ __webpack_exports__["default"] = (ColorTransformingMixins);

/***/ }),

/***/ "./src/Image/imageScaling.mixins.js":
/*!******************************************!*\
  !*** ./src/Image/imageScaling.mixins.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Buffer) {/* harmony import */ var _boxScaling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boxScaling */ "./src/Image/boxScaling.js");


const ImageScalingMixins = PreprocessingClass => class extends PreprocessingClass {
  /**
   * scaling image from origin size to new size, image chanel must be 4
   * @param { Array|Buffer } sampleBuffer - original image
   * @param { Array } originSize - originize of image [weight, height]
   * @param { Array } newSize - new size of image [weight, height]
   * @returns { Array } - array of sub image
   */
  imageResize(sampleBuffer, originSize, newSize) {
    sampleBuffer = Buffer.from(sampleBuffer);
    return Object(_boxScaling__WEBPACK_IMPORTED_MODULE_0__["default"])(sampleBuffer, originSize, newSize);
  }

};

/* harmony default export */ __webpack_exports__["default"] = (ImageScalingMixins);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/buffer/index.js */ "../../node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "./src/Image/imageSplitting.mixins.js":
/*!********************************************!*\
  !*** ./src/Image/imageSplitting.mixins.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const ImageSplittingMixins = PreprocessingClass => class extends PreprocessingClass {
  /**
   * Split image into sub images based on split size
   * @param { Array|Buffer } sampleBuffer - original image
   * @param { Number } splitSize - positive number
   * @returns { Array } - array of sub image
   */
  imageSplit(sampleBuffer, splitSize) {
    return this.R.splitEvery(splitSize, sampleBuffer);
  }

};

/* harmony default export */ __webpack_exports__["default"] = (ImageSplittingMixins);

/***/ }),

/***/ "./src/Image/index.js":
/*!****************************!*\
  !*** ./src/Image/index.js ***!
  \****************************/
/*! exports provided: ColorTransformingMixins, ImageSplittingMixins, ImageScalingMixins */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _colorTransforming_mixins__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./colorTransforming.mixins */ "./src/Image/colorTransforming.mixins.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColorTransformingMixins", function() { return _colorTransforming_mixins__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _imageSplitting_mixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imageSplitting.mixins */ "./src/Image/imageSplitting.mixins.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImageSplittingMixins", function() { return _imageSplitting_mixins__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _imageScaling_mixins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./imageScaling.mixins */ "./src/Image/imageScaling.mixins.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImageScalingMixins", function() { return _imageScaling_mixins__WEBPACK_IMPORTED_MODULE_2__["default"]; });





/***/ }),

/***/ "./src/NLP/index.js":
/*!**************************!*\
  !*** ./src/NLP/index.js ***!
  \**************************/
/*! exports provided: TokenTransformingMixins */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tokenTransforming_mixins__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tokenTransforming.mixins */ "./src/NLP/tokenTransforming.mixins.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TokenTransformingMixins", function() { return _tokenTransforming_mixins__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/NLP/tokenTransforming.mixins.js":
/*!*********************************************!*\
  !*** ./src/NLP/tokenTransforming.mixins.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const TokenTransformingMixins = PreprocessingClass => class extends PreprocessingClass {
  /**
   * tokenized sentence
   * @param { String } sentence - array of string sentence
   * @returns { Array } array of tokenized sentences
   */
  tokenize(sentence) {
    const R = this.R,
          Tokenizer = this.tokenizer;
    return Tokenizer.tokenize(sentence);
  }
  /**
   * Remove bad words from tokens
   * @param { Array } tokens - array of string token
   * @param { Array } badWordList - Array of bad words
   * @returns { Array } tokens without bad words
   */


  badWordsFilter(tokens, badWordList) {
    const R = this.R;
    return R.filter(token => R.not(R.find(R.equals(token))(badWordList)), tokens);
  }
  /**
   * Count number of apperance of each token in the token list
   * @param { Array } tokens - array of string tokens
   * @param { Object } [freqCount={}] - objec or previous wordFreqCount, empty object if not provided
   * @returns { Object } - json object with token as key and counting number as corresponding value
   */


  wordFreqCount(tokens, freqCount = {}) {
    const R = this.R;

    const UpdateFreq = (freqCount, token) => {
      if (freqCount[token] === undefined) {
        freqCount[token] = 1;
      } else {
        freqCount[token] += 1;
      }

      return freqCount;
    };

    return R.reduce(UpdateFreq, freqCount, tokens);
  }
  /**
   * Remove duplicated tokens
   * @param { Array } tokens - array of string token
   * @returns
   */


  wordDuplicateRemove(tokens) {
    const R = this.R;
    return R.uniq(tokens);
  }

};

/* harmony default export */ __webpack_exports__["default"] = (TokenTransformingMixins);

/***/ }),

/***/ "./src/Tabular/categoryNormalizing.mixins.js":
/*!***************************************************!*\
  !*** ./src/Tabular/categoryNormalizing.mixins.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * @experiment
 */
const CategoryNormalizingMixins = PreprocessingClass => class extends PreprocessingClass {
  oneHotEncode(sample, categories) {
    const R = this.R;
    let code = this.zeros(categories.length);
    const idx = R.indexOf(sample, categories);

    if (idx > -1) {
      code[idx] = 1;
    }

    return code;
  }

};

/* harmony default export */ __webpack_exports__["default"] = (CategoryNormalizingMixins);

/***/ }),

/***/ "./src/Tabular/index.js":
/*!******************************!*\
  !*** ./src/Tabular/index.js ***!
  \******************************/
/*! exports provided: CategoryNormalizingMixins */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _categoryNormalizing_mixins__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./categoryNormalizing.mixins */ "./src/Tabular/categoryNormalizing.mixins.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CategoryNormalizingMixins", function() { return _categoryNormalizing_mixins__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/Tokenizer/index.js":
/*!********************************!*\
  !*** ./src/Tokenizer/index.js ***!
  \********************************/
/*! exports provided: tokenizer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tokenizer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tokenizer */ "./src/Tokenizer/tokenizer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tokenizer", function() { return _tokenizer__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _sentencePiece__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sentencePiece */ "./src/Tokenizer/sentencePiece.js");



/***/ }),

/***/ "./src/Tokenizer/sentencePiece.js":
/*!****************************************!*\
  !*** ./src/Tokenizer/sentencePiece.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SentencePieceTokenizer; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/Tokenizer/utils.js");
/* harmony import */ var _trie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trie */ "./src/Tokenizer/trie.js");
/**
 * This code origin from 
 * https://github.com/tensorflow/tfjs-models/tree/master/universal-sentence-encoder
 * 
 * Tokenizer.encode() is a port of `EncodeAsIds` from the SentencePiece library
 * (https://github.com/google/sentencepiece). Encode uses the Viterbi algorithm
 * to find the most likely sequence of tokens that comprise the input. For more
 * details, refer to https://arxiv.org/pdf/1804.10959.pdf.
 */


const separator = '\u2581'; // This is the unicode character 'lower one eighth block'.

function processInput(str) {
  const normalized = str.normalize('NFKC');
  return separator + normalized.replace(/ /g, separator);
} // The first tokens are reserved for unk, control symbols, and user-defined
// symbols.


const RESERVED_SYMBOLS_COUNT = 6; // type Vocabulary = Array<[string, number]>;
// type Score = {
//   key: string[],
//   score: number,
//   index: number
// };

class SentencePieceTokenizer {
  constructor(Vocabulary) {
    this.vocabulary = Vocabulary;
    this.trie = new _trie__WEBPACK_IMPORTED_MODULE_1__["default"]();

    for (let i = RESERVED_SYMBOLS_COUNT; i < this.vocabulary.length; i++) {
      this.trie.insert(this.vocabulary[i][0], this.vocabulary[i][1], i);
    }
  }

  encode(input) {
    const nodes = [];
    const words = [];
    const best = [];
    input = processInput(input);
    const symbols = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["default"])(input);

    for (let i = 0; i <= symbols.length; i++) {
      nodes.push({});
      words.push(0);
      best.push(0);
    } // Construct the lattice.


    for (let i = 0; i < symbols.length; i++) {
      const matches = this.trie.commonPrefixSearch(symbols.slice(i));

      for (let j = 0; j < matches.length; j++) {
        const piece = matches[j];
        const obj = {
          key: piece[0],
          score: piece[1],
          index: piece[2]
        };
        const endPos = piece[0].length;

        if (nodes[i + endPos][i] == null) {
          nodes[i + endPos][i] = [];
        }

        nodes[i + endPos][i].push(obj);
      }
    }

    for (let endPos = 0; endPos <= symbols.length; endPos++) {
      for (const startPos in nodes[endPos]) {
        const arr = nodes[endPos][startPos];

        for (let j = 0; j < arr.length; j++) {
          const word = arr[j];
          const score = word.score + best[endPos - word.key.length];

          if (best[endPos] === 0 || score >= best[endPos]) {
            best[endPos] = score;
            words[endPos] = arr[j].index;
          }
        }
      }
    }

    const results = []; // Backward pass.

    let iter = words.length - 1;

    while (iter > 0) {
      results.push(words[iter]);
      iter -= this.vocabulary[words[iter]][0].length;
    } // Merge consecutive unks.


    const merged = [];
    let isPreviousUnk = false;

    for (let i = 0; i < results.length; i++) {
      const id = results[i];

      if (!(isPreviousUnk && id === 0)) {
        merged.push(id);
      }

      isPreviousUnk = id === 0;
    }

    return merged.reverse();
  }

}

/***/ }),

/***/ "./src/Tokenizer/tokenizer.js":
/*!************************************!*\
  !*** ./src/Tokenizer/tokenizer.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sentencePiece__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sentencePiece */ "./src/Tokenizer/sentencePiece.js");
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! causal-net.utils */ "causal-net.utils");
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(causal_net_utils__WEBPACK_IMPORTED_MODULE_1__);


/**
 * This Tokenizer class is for tokenizer sentence
 * @experiment
 * @class Tokenizer
 * @example
 * [EXAMPLE ../../nlpPreprocessing.babel.js]
 */

class Tokenizer {
  constructor() {
    this.model = null;
    this.vocab = [];
  }

  async connect(link) {
    this.vocab = await causal_net_utils__WEBPACK_IMPORTED_MODULE_1__["jsonUtils"].queryJSON(link);
    this.model = new _sentencePiece__WEBPACK_IMPORTED_MODULE_0__["default"](this.vocab);
  }

  tokenize(text, asEncode = true) {
    let wids = this.encode(text);

    if (asEncode) {
      return wids;
    } else {
      return wids.map(id => this.vocab[id][0]);
    }
  }

  encode(text) {
    if (!this.model) {
      throw Error(`model is not loaded`);
    }

    return this.model.encode(text);
  }

}

var tokenizer = new Tokenizer();
/* harmony default export */ __webpack_exports__["default"] = (tokenizer);

/***/ }),

/***/ "./src/Tokenizer/trie.js":
/*!*******************************!*\
  !*** ./src/Tokenizer/trie.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Trie; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/Tokenizer/utils.js");
 // [token, score, index]
// type OutputNode = [string[], number, number];

class TrieNode {
  constructor(key) {
    this.key = key;
    this.parent = null;
    this.children = {};
    this.end = false;
  }
  /**
   * Traverse upwards through the trie to construct the token.
   */


  getWord() {
    const output = [];
    let node = this;

    while (node !== null) {
      if (node.key !== null) {
        output.unshift(node.key);
      }

      node = node.parent;
    }

    return [output, this.score, this.index];
  }

}

class Trie {
  constructor() {
    this.root = new TrieNode(null);
  }
  /**
   * Checks whether a node starts with ss.
   *
   * @param ss The prefix.
   * @param node The node currently being considered.
   * @param arr An array of the matching tokens uncovered so far.
   */


  findAllCommonPrefixes(ss, node, arr) {
    if (node.end) {
      const word = node.getWord();

      if (ss.slice(0, word[0].length).join('') === word[0].join('')) {
        arr.unshift(word);
      }
    }

    for (const child in node.children) {
      this.findAllCommonPrefixes(ss, node.children[child], arr);
    }
  }
  /**
   * Inserts a token into the trie.
   */


  insert(word, score, index) {
    let node = this.root;
    const symbols = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["default"])(word);

    for (let i = 0; i < symbols.length; i++) {
      if (!node.children[symbols[i]]) {
        node.children[symbols[i]] = new TrieNode(symbols[i]);
        node.children[symbols[i]].parent = node;
      }

      node = node.children[symbols[i]];

      if (i === symbols.length - 1) {
        node.end = true;
        node.score = score;
        node.index = index;
      }
    }
  }
  /**
   * Returns an array of all tokens starting with ss.
   *
   * @param ss The prefix to match on.
   */


  commonPrefixSearch(ss) {
    const node = this.root.children[ss[0]];
    const output = [];

    if (node) {
      this.findAllCommonPrefixes(ss, node, output);
    } else {
      output.push([[ss[0]], 0, 0]); // unknown token
    }

    return output;
  }

}

/***/ }),

/***/ "./src/Tokenizer/utils.js":
/*!********************************!*\
  !*** ./src/Tokenizer/utils.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const stringToChars = input => {
  const symbols = [];

  for (const symbol of input) {
    symbols.push(symbol);
  }

  return symbols;
};

/* harmony default export */ __webpack_exports__["default"] = (stringToChars);

/***/ }),

/***/ "./src/causalNetPreprocessingStream.js":
/*!*********************************************!*\
  !*** ./src/causalNetPreprocessingStream.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var causal_net_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! causal-net.core */ "causal-net.core");
/* harmony import */ var causal_net_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(causal_net_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! causal-net.utils */ "causal-net.utils");
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(causal_net_utils__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var causal_net_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! causal-net.storage */ "causal-net.storage");
/* harmony import */ var causal_net_storage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(causal_net_storage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var causal_net_log__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! causal-net.log */ "causal-net.log");
/* harmony import */ var causal_net_log__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(causal_net_log__WEBPACK_IMPORTED_MODULE_3__);





class CausalNetPreprocessingStream extends causal_net_utils__WEBPACK_IMPORTED_MODULE_1__["platform"].mixWith(causal_net_core__WEBPACK_IMPORTED_MODULE_0__["Event"], [causal_net_storage__WEBPACK_IMPORTED_MODULE_2__["StorageMixins"], causal_net_log__WEBPACK_IMPORTED_MODULE_3__["LoggerMixins"]]) {
  constructor(preprocessingStorage, functor, logger) {
    super();
    this.Storage = preprocessingStorage;
    this.F = functor;
    this.R = this.F.CoreFunctor;
    this.Logger = logger;
    this.preprocessingData = {
      samples: [],
      labels: [],
      finished: false,
      trainSet: [],
      testSet: []
    };
  }

  get PreprocessingData() {
    return this.preprocessingData;
  }

  get TrainSet() {
    return this.preprocessingData.trainSet;
  }

  get TestSet() {
    return this.preprocessingData.testSet;
  }

  set SampleTransformer(sampleFn) {
    this.sampleFn = sampleFn;
  }

  set LabelTransformer(labelFn) {
    this.labelFn = labelFn;
  }

  get SampleTransformer() {
    if (!this.sampleFn) {
      throw Error('SampleTransformer is not set');
    }

    return this.sampleFn;
  }

  get LabelTransformer() {
    if (!this.labelFn) {
      throw Error('LabelTransformer is not set');
    }

    return this.labelFn;
  }

  get DataHandler() {
    if (!this.dataHandler) {
      throw Error('DataHandler is not set');
    }

    this.dataHandler;
  }

  setDataHandler() {
    const SampleTransformer = this.SampleTransformer;
    const LabelTransformer = this.LabelTransformer;
    const Storage = this.Storage;

    const ProgressLenses = ({
      idx,
      range,
      message
    }) => {
      if (idx === 0) {
        this.Logger.progressBegin(range);
        return;
      }

      if (idx + 1 === range) {
        this.Logger.progressEnd();
        return;
      }

      this.Logger.progressUpdate(message);
    };

    this.dataHandler = data => {
      return new Promise(async (resolve, reject) => {
        let chunkName = data.ChunkName;

        if (chunkName === undefined) {
          reject(`chunkName is not defined`);
        }

        if (data.Sample) {
          let identity = '';

          for (let [idx, sample] of this.F.enumerate(data.Sample)) {
            ProgressLenses({
              idx,
              range: data.Sample.length,
              message: 'preprocessing Sample: ' + idx
            });
            sample = await SampleTransformer(sample);
            identity = chunkName + '/' + idx;
            await Storage.setItem('preprocessing/sample/' + identity, JSON.stringify(sample));
            this.preprocessingData.samples.push(identity);
          }
        }

        if (data.Label) {
          let identity = '';

          for (let [idx, label] of this.F.enumerate(data.Label)) {
            ProgressLenses({
              idx,
              range: data.Label.length,
              message: 'preprocessing Label: ' + idx
            });
            label = await LabelTransformer(label);
            identity = chunkName + '/' + idx;
            await Storage.setItem('preprocessing/label/' + identity, JSON.stringify(label));
            this.preprocessingData.labels.push(identity);
          }
        }

        resolve(true);
      });
    };

    this.on('data', this.dataHandler);
  }

  splitDataset(trainSize = 0.9) {
    const R = this.F.CoreFunctor; //TODO: enhance this for handle missing data/label case

    let {
      samples,
      labels
    } = this.preprocessingData;
    let data = this.F.zip(samples, labels);

    if (trainSize < 1) {
      trainSize = parseInt(data.length * trainSize);
    }

    const [trainSet, testSet] = R.splitAt(trainSize, data);
    this.preprocessingData.trainSet = trainSet;
    this.preprocessingData.testSet = testSet;
    return [trainSet, testSet];
  }

  makeBatchGenerator(batchData) {
    const Storage = this.Storage;
    let nextIndex = 0;
    const batchGenerator = {
      next: async () => {
        let samples = [],
            labels = [];

        for (let [samplePath, labelPath] of batchData[nextIndex]) {
          samplePath = 'preprocessing/sample/' + samplePath;
          labelPath = 'preprocessing/label/' + labelPath;
          let sampleItem = await Storage.getItem(samplePath);
          let labelItem = await Storage.getItem(labelPath); //TODO: fix this issue of unalign format of item

          let sample = JSON.parse(sampleItem[samplePath]);
          sample = sample.data ? sample.data : sample;
          let label = JSON.parse(labelItem[labelPath]);
          label = label.data ? label.data : label;
          samples.push(sample);
          labels.push(label);
        }

        nextIndex += 1;
        return {
          samples,
          labels
        };
      },

      *[Symbol.iterator]() {
        while (nextIndex < batchData.length) {
          yield this.next();
        }
      }

    };
    return batchGenerator;
  }

  makeTrainDataGenerator() {
    const R = this.R;
    const TrainSet = this.TrainSet;
    return (batchSize = TrainSet.length) => {
      let batchData = R.splitEvery(batchSize, TrainSet);
      return this.makeBatchGenerator(batchData);
    };
  }

  makeTestDataGenerator() {
    const R = this.R;
    const TestSet = this.TestSet;
    return (batchSize = TestSet.length) => {
      //TODO: perform permutate
      let batchData = R.splitEvery(batchSize, TestSet);
      return this.makeBatchGenerator(batchData);
    };
  }

}

var functor = new causal_net_core__WEBPACK_IMPORTED_MODULE_0__["Functor"]();
/* harmony default export */ __webpack_exports__["default"] = (new CausalNetPreprocessingStream(causal_net_storage__WEBPACK_IMPORTED_MODULE_2__["indexDBStorage"], functor, causal_net_log__WEBPACK_IMPORTED_MODULE_3__["termLogger"]));

/***/ }),

/***/ "./src/imagePreprocessing.js":
/*!***********************************!*\
  !*** ./src/imagePreprocessing.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var causal_net_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! causal-net.core */ "causal-net.core");
/* harmony import */ var causal_net_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(causal_net_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! causal-net.utils */ "causal-net.utils");
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(causal_net_utils__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Image_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Image/index */ "./src/Image/index.js");



/**
 * This ImagePreprocessing provide methods for preprocessing image data
 * { MixWith: [
 *         ColorTransformingMixins, ImageSplittingMixins
 *     ] }
 * @class ImagePreprocessing
 * @extends BaseFunctor
 * @example
 * [EXAMPLE ../examples/imagePreprocessing.babel.node.js]
 */

class ImagePreprocessing extends causal_net_utils__WEBPACK_IMPORTED_MODULE_1__["platform"].mixWith(causal_net_core__WEBPACK_IMPORTED_MODULE_0__["Functor"], [_Image_index__WEBPACK_IMPORTED_MODULE_2__["ColorTransformingMixins"], _Image_index__WEBPACK_IMPORTED_MODULE_2__["ImageSplittingMixins"], _Image_index__WEBPACK_IMPORTED_MODULE_2__["ImageScalingMixins"]]) {
  constructor() {
    super();
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new ImagePreprocessing());

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: causalNetPreprocessingStream, PreprocessingMixins, imagePreprocessing, nlpPreprocessing, tabularPreprocessing, tokenizer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _causalNetPreprocessingStream__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./causalNetPreprocessingStream */ "./src/causalNetPreprocessingStream.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "causalNetPreprocessingStream", function() { return _causalNetPreprocessingStream__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _preprocessing_mixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./preprocessing.mixins */ "./src/preprocessing.mixins.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PreprocessingMixins", function() { return _preprocessing_mixins__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _imagePreprocessing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./imagePreprocessing */ "./src/imagePreprocessing.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "imagePreprocessing", function() { return _imagePreprocessing__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _nlpPreprocessing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nlpPreprocessing */ "./src/nlpPreprocessing.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nlpPreprocessing", function() { return _nlpPreprocessing__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _tabularPreprocessing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tabularPreprocessing */ "./src/tabularPreprocessing.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tabularPreprocessing", function() { return _tabularPreprocessing__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _Tokenizer_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Tokenizer/index */ "./src/Tokenizer/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tokenizer", function() { return _Tokenizer_index__WEBPACK_IMPORTED_MODULE_5__["tokenizer"]; });








/***/ }),

/***/ "./src/nlpPreprocessing.js":
/*!*********************************!*\
  !*** ./src/nlpPreprocessing.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var causal_net_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! causal-net.core */ "causal-net.core");
/* harmony import */ var causal_net_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(causal_net_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! causal-net.utils */ "causal-net.utils");
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(causal_net_utils__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _NLP_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NLP/index */ "./src/NLP/index.js");



/**
 * This NLPPreprocessing class provide methods for preprocessing text and output valid tokens.
 * { MixWith:
 *     [ TokenTransformingMixins ]) }
 * @class NLPPreprocessing
 * @extends BaseFunctor
 * @example
 * [!EXAMPLE ../examples/nlpPreprocessing.babel.node.js]
 */

class NLPPreprocessing extends causal_net_utils__WEBPACK_IMPORTED_MODULE_1__["platform"].mixWith(causal_net_core__WEBPACK_IMPORTED_MODULE_0__["Functor"], [_NLP_index__WEBPACK_IMPORTED_MODULE_2__["TokenTransformingMixins"]]) {
  constructor() {
    super();
  }
  /**
   * This method is used in case tokenizer requires data setup.
   * @param { Url|FilePath } configLink
   * @memberof NLPPreprocessing
   */


  connect(configLink) {
    this.tokenizer.connect(configLink);
  }
  /**
   * Get tokenizer
   *
   * @memberof NLPPreprocessing
   */


  get Tokenizer() {
    if (!this.tokenizer) {
      throw Error('tokenizer is not set');
    }

    return this.tokenizer;
  }
  /**
   * Set tokenizer
   * @param { Object } tokenizer - tokenizer object
   * @memberof NLPPreprocessing
   */


  set Tokenizer(tokenizer) {
    this.tokenizer = tokenizer;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new NLPPreprocessing());

/***/ }),

/***/ "./src/preprocessing.mixins.js":
/*!*************************************!*\
  !*** ./src/preprocessing.mixins.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const PreprocessingMixins = BasePipelineClass => class extends BasePipelineClass {
  get Preprocessing() {
    if (!this.streamPreprocessing) {
      throw Error('streamPreprocessing is not set');
    }

    return this.streamPreprocessing;
  }

  set Preprocessing(streamPreprocessing) {
    this.streamPreprocessing = streamPreprocessing;
  }

  splitDataset(ratio = 0.9) {
    return this.Preprocessing.splitDataset(ratio);
  }

  setByConfig(pipelineConfig) {
    if (super.setByConfig) {
      super.setByConfig(pipelineConfig);
    }

    this.Logger.groupBegin('set Preprocessing by config');

    if (this.DataSourceReader) {
      const {
        Preprocessing
      } = pipelineConfig.Dataset;

      if (!Preprocessing) {
        throw Error(`expect { Preprocessing } get ${JSON.stringify(pipelineConfig.Dataset)}`);
      }

      const {
        SampleTransformer,
        LabelTransformer
      } = Preprocessing;

      if (!SampleTransformer || !LabelTransformer) {
        throw Error(`expect { SampleTransformer, LabelTransformer } 
                    get ${JSON.stringify(pipelineConfig.Dataset.Preprocessing)}`);
      }

      this.Preprocessing.SampleTransformer = SampleTransformer;
      this.Preprocessing.LabelTransformer = LabelTransformer;
      this.Preprocessing.SampleTransformer = this.Preprocessing.SampleTransformer.bind(this);
      this.Preprocessing.LabelTransformer = this.Preprocessing.LabelTransformer.bind(this);
      this.Preprocessing.setDataHandler();
      this.DataSourceReader.pipe(this.Preprocessing);
      pipelineConfig.Dataset.TrainDataGenerator = this.Preprocessing.makeTrainDataGenerator();
      pipelineConfig.Dataset.TestDataGenerator = this.Preprocessing.makeTestDataGenerator();
    }

    this.Logger.groupEnd();
    return pipelineConfig;
  }

};

/* harmony default export */ __webpack_exports__["default"] = (PreprocessingMixins);

/***/ }),

/***/ "./src/tabularPreprocessing.js":
/*!*************************************!*\
  !*** ./src/tabularPreprocessing.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var causal_net_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! causal-net.core */ "causal-net.core");
/* harmony import */ var causal_net_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(causal_net_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! causal-net.utils */ "causal-net.utils");
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(causal_net_utils__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Tabular_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Tabular/index */ "./src/Tabular/index.js");




class TabularPreprocessing extends causal_net_utils__WEBPACK_IMPORTED_MODULE_1__["platform"].mixWith(causal_net_core__WEBPACK_IMPORTED_MODULE_0__["Functor"], [_Tabular_index__WEBPACK_IMPORTED_MODULE_2__["CategoryNormalizingMixins"]]) {
  constructor() {
    super();
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new TabularPreprocessing());

/***/ }),

/***/ "causal-net.core":
/*!**********************************!*\
  !*** external "causal-net.core" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_causal_net_core__;

/***/ }),

/***/ "causal-net.log":
/*!*********************************!*\
  !*** external "causal-net.log" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_causal_net_log__;

/***/ }),

/***/ "causal-net.storage":
/*!*************************************!*\
  !*** external "causal-net.storage" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_causal_net_storage__;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3ByZXByb2Nlc3Npbmcvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0BjYXVzYWxOZXQvcHJlcHJvY2Vzc2luZy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3ByZXByb2Nlc3NpbmcvL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvYmFzZTY0LWpzL2luZGV4LmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcHJlcHJvY2Vzc2luZy8vaG9tZS9odXluaG5ndXllbi9naXRodWIvY2F1c2FsaXR5L25vZGVfbW9kdWxlcy9idWZmZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9wcmVwcm9jZXNzaW5nLy9ob21lL2h1eW5obmd1eWVuL2dpdGh1Yi9jYXVzYWxpdHkvbm9kZV9tb2R1bGVzL2J1ZmZlci9ub2RlX21vZHVsZXMvaXNhcnJheS9pbmRleC5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3ByZXByb2Nlc3NpbmcvL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvaWVlZTc1NC9pbmRleC5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3ByZXByb2Nlc3NpbmcvKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcHJlcHJvY2Vzc2luZy8uL3NyYy9JbWFnZS9ib3hTY2FsaW5nLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcHJlcHJvY2Vzc2luZy8uL3NyYy9JbWFnZS9jb2xvclRyYW5zZm9ybWluZy5taXhpbnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9wcmVwcm9jZXNzaW5nLy4vc3JjL0ltYWdlL2ltYWdlU2NhbGluZy5taXhpbnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9wcmVwcm9jZXNzaW5nLy4vc3JjL0ltYWdlL2ltYWdlU3BsaXR0aW5nLm1peGlucy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3ByZXByb2Nlc3NpbmcvLi9zcmMvSW1hZ2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9wcmVwcm9jZXNzaW5nLy4vc3JjL05MUC9pbmRleC5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3ByZXByb2Nlc3NpbmcvLi9zcmMvTkxQL3Rva2VuVHJhbnNmb3JtaW5nLm1peGlucy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3ByZXByb2Nlc3NpbmcvLi9zcmMvVGFidWxhci9jYXRlZ29yeU5vcm1hbGl6aW5nLm1peGlucy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3ByZXByb2Nlc3NpbmcvLi9zcmMvVGFidWxhci9pbmRleC5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3ByZXByb2Nlc3NpbmcvLi9zcmMvVG9rZW5pemVyL2luZGV4LmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcHJlcHJvY2Vzc2luZy8uL3NyYy9Ub2tlbml6ZXIvc2VudGVuY2VQaWVjZS5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3ByZXByb2Nlc3NpbmcvLi9zcmMvVG9rZW5pemVyL3Rva2VuaXplci5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3ByZXByb2Nlc3NpbmcvLi9zcmMvVG9rZW5pemVyL3RyaWUuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9wcmVwcm9jZXNzaW5nLy4vc3JjL1Rva2VuaXplci91dGlscy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3ByZXByb2Nlc3NpbmcvLi9zcmMvY2F1c2FsTmV0UHJlcHJvY2Vzc2luZ1N0cmVhbS5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3ByZXByb2Nlc3NpbmcvLi9zcmMvaW1hZ2VQcmVwcm9jZXNzaW5nLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcHJlcHJvY2Vzc2luZy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3ByZXByb2Nlc3NpbmcvLi9zcmMvbmxwUHJlcHJvY2Vzc2luZy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3ByZXByb2Nlc3NpbmcvLi9zcmMvcHJlcHJvY2Vzc2luZy5taXhpbnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9wcmVwcm9jZXNzaW5nLy4vc3JjL3RhYnVsYXJQcmVwcm9jZXNzaW5nLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcHJlcHJvY2Vzc2luZy9leHRlcm5hbCBcImNhdXNhbC1uZXQuY29yZVwiIiwid2VicGFjazovL0BjYXVzYWxOZXQvcHJlcHJvY2Vzc2luZy9leHRlcm5hbCBcImNhdXNhbC1uZXQubG9nXCIiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9wcmVwcm9jZXNzaW5nL2V4dGVybmFsIFwiY2F1c2FsLW5ldC5zdG9yYWdlXCIiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9wcmVwcm9jZXNzaW5nL2V4dGVybmFsIFwiY2F1c2FsLW5ldC51dGlsc1wiIl0sIm5hbWVzIjpbImJ1ZmZlciIsIm9yaWdpblNpemUiLCJuZXdTaXplIiwic1giLCJzWSIsInNXIiwic0giLCJkWCIsImRZIiwiZFciLCJkSCIsInRhcmdldEJ1ZmZlciIsIkJ1ZmZlciIsImFsbG9jIiwiY29weSIsInlzIiwieWQiLCJ4cyIsInhkIiwiY291bnQiLCJ5X3NocmluayIsInhfZnVuIiwieV8iLCJNYXRoIiwiZmxvb3IiLCJ5X2dyb3ciLCJ4X3NocmluayIsInhfIiwieF9ncm93IiwiQ29sb3JUcmFuc2Zvcm1pbmdNaXhpbnMiLCJQcmVwcm9jZXNzaW5nQ2xhc3MiLCJjb2xvclRyYW5zZm9ybSIsInRyYW5mb3JtRm4iLCJzYW1wbGVCdWZmZXIiLCJjaGFubmVsU2l6ZSIsIlIiLCJmbGF0dGVuIiwibWFwIiwic3BsaXRFdmVyeSIsImJsYWNrV2hpdGVUcmFuc2Zvcm0iLCJCbGFja1doaXRlRm4iLCJwaXhlbCIsInBpeGVsVmFsdWUiLCJvbmVCaXRUcmFuc2Zvcm0iLCJJbWFnZVNjYWxpbmdNaXhpbnMiLCJpbWFnZVJlc2l6ZSIsImZyb20iLCJCb3hTY2FsaW5nIiwiSW1hZ2VTcGxpdHRpbmdNaXhpbnMiLCJpbWFnZVNwbGl0Iiwic3BsaXRTaXplIiwiVG9rZW5UcmFuc2Zvcm1pbmdNaXhpbnMiLCJ0b2tlbml6ZSIsInNlbnRlbmNlIiwiVG9rZW5pemVyIiwidG9rZW5pemVyIiwiYmFkV29yZHNGaWx0ZXIiLCJ0b2tlbnMiLCJiYWRXb3JkTGlzdCIsImZpbHRlciIsInRva2VuIiwibm90IiwiZmluZCIsImVxdWFscyIsIndvcmRGcmVxQ291bnQiLCJmcmVxQ291bnQiLCJVcGRhdGVGcmVxIiwidW5kZWZpbmVkIiwicmVkdWNlIiwid29yZER1cGxpY2F0ZVJlbW92ZSIsInVuaXEiLCJDYXRlZ29yeU5vcm1hbGl6aW5nTWl4aW5zIiwib25lSG90RW5jb2RlIiwic2FtcGxlIiwiY2F0ZWdvcmllcyIsImNvZGUiLCJ6ZXJvcyIsImxlbmd0aCIsImlkeCIsImluZGV4T2YiLCJzZXBhcmF0b3IiLCJwcm9jZXNzSW5wdXQiLCJzdHIiLCJub3JtYWxpemVkIiwibm9ybWFsaXplIiwicmVwbGFjZSIsIlJFU0VSVkVEX1NZTUJPTFNfQ09VTlQiLCJTZW50ZW5jZVBpZWNlVG9rZW5pemVyIiwiY29uc3RydWN0b3IiLCJWb2NhYnVsYXJ5Iiwidm9jYWJ1bGFyeSIsInRyaWUiLCJUcmllIiwiaSIsImluc2VydCIsImVuY29kZSIsImlucHV0Iiwibm9kZXMiLCJ3b3JkcyIsImJlc3QiLCJzeW1ib2xzIiwic3RyaW5nVG9DaGFycyIsInB1c2giLCJtYXRjaGVzIiwiY29tbW9uUHJlZml4U2VhcmNoIiwic2xpY2UiLCJqIiwicGllY2UiLCJvYmoiLCJrZXkiLCJzY29yZSIsImluZGV4IiwiZW5kUG9zIiwic3RhcnRQb3MiLCJhcnIiLCJ3b3JkIiwicmVzdWx0cyIsIml0ZXIiLCJtZXJnZWQiLCJpc1ByZXZpb3VzVW5rIiwiaWQiLCJyZXZlcnNlIiwibW9kZWwiLCJ2b2NhYiIsImNvbm5lY3QiLCJsaW5rIiwianNvblV0aWxzIiwicXVlcnlKU09OIiwiU2VudGVuY2VQaWVjZU1vZGVsIiwidGV4dCIsImFzRW5jb2RlIiwid2lkcyIsIkVycm9yIiwiVHJpZU5vZGUiLCJwYXJlbnQiLCJjaGlsZHJlbiIsImVuZCIsImdldFdvcmQiLCJvdXRwdXQiLCJub2RlIiwidW5zaGlmdCIsInJvb3QiLCJmaW5kQWxsQ29tbW9uUHJlZml4ZXMiLCJzcyIsImpvaW4iLCJjaGlsZCIsInN5bWJvbCIsIkNhdXNhbE5ldFByZXByb2Nlc3NpbmdTdHJlYW0iLCJwbGF0Zm9ybSIsIm1peFdpdGgiLCJFdmVudCIsIlN0b3JhZ2VNaXhpbnMiLCJMb2dnZXJNaXhpbnMiLCJwcmVwcm9jZXNzaW5nU3RvcmFnZSIsImZ1bmN0b3IiLCJsb2dnZXIiLCJTdG9yYWdlIiwiRiIsIkNvcmVGdW5jdG9yIiwiTG9nZ2VyIiwicHJlcHJvY2Vzc2luZ0RhdGEiLCJzYW1wbGVzIiwibGFiZWxzIiwiZmluaXNoZWQiLCJ0cmFpblNldCIsInRlc3RTZXQiLCJQcmVwcm9jZXNzaW5nRGF0YSIsIlRyYWluU2V0IiwiVGVzdFNldCIsIlNhbXBsZVRyYW5zZm9ybWVyIiwic2FtcGxlRm4iLCJMYWJlbFRyYW5zZm9ybWVyIiwibGFiZWxGbiIsIkRhdGFIYW5kbGVyIiwiZGF0YUhhbmRsZXIiLCJzZXREYXRhSGFuZGxlciIsIlByb2dyZXNzTGVuc2VzIiwicmFuZ2UiLCJtZXNzYWdlIiwicHJvZ3Jlc3NCZWdpbiIsInByb2dyZXNzRW5kIiwicHJvZ3Jlc3NVcGRhdGUiLCJkYXRhIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJjaHVua05hbWUiLCJDaHVua05hbWUiLCJTYW1wbGUiLCJpZGVudGl0eSIsImVudW1lcmF0ZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwiTGFiZWwiLCJsYWJlbCIsIm9uIiwic3BsaXREYXRhc2V0IiwidHJhaW5TaXplIiwiemlwIiwicGFyc2VJbnQiLCJzcGxpdEF0IiwibWFrZUJhdGNoR2VuZXJhdG9yIiwiYmF0Y2hEYXRhIiwibmV4dEluZGV4IiwiYmF0Y2hHZW5lcmF0b3IiLCJuZXh0Iiwic2FtcGxlUGF0aCIsImxhYmVsUGF0aCIsInNhbXBsZUl0ZW0iLCJnZXRJdGVtIiwibGFiZWxJdGVtIiwicGFyc2UiLCJTeW1ib2wiLCJpdGVyYXRvciIsIm1ha2VUcmFpbkRhdGFHZW5lcmF0b3IiLCJiYXRjaFNpemUiLCJtYWtlVGVzdERhdGFHZW5lcmF0b3IiLCJGdW5jdG9yIiwiaW5kZXhEQlN0b3JhZ2UiLCJ0ZXJtTG9nZ2VyIiwiSW1hZ2VQcmVwcm9jZXNzaW5nIiwiQmFzZUZ1bmN0b3IiLCJOTFBQcmVwcm9jZXNzaW5nIiwiY29uZmlnTGluayIsIlByZXByb2Nlc3NpbmdNaXhpbnMiLCJCYXNlUGlwZWxpbmVDbGFzcyIsIlByZXByb2Nlc3NpbmciLCJzdHJlYW1QcmVwcm9jZXNzaW5nIiwicmF0aW8iLCJzZXRCeUNvbmZpZyIsInBpcGVsaW5lQ29uZmlnIiwiZ3JvdXBCZWdpbiIsIkRhdGFTb3VyY2VSZWFkZXIiLCJEYXRhc2V0IiwiYmluZCIsInBpcGUiLCJUcmFpbkRhdGFHZW5lcmF0b3IiLCJUZXN0RGF0YUdlbmVyYXRvciIsImdyb3VwRW5kIiwiVGFidWxhclByZXByb2Nlc3NpbmciXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsVUFBVTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsWUFBWTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLHVDQUF1QyxTQUFTO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsaUJBQWlCO0FBQ2hDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxpQkFBaUI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFNBQVM7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixTQUFTO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixTQUFTO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELEVBQUU7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWlCLFNBQVM7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGVBQWU7QUFDdkM7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0Esd0JBQXdCLFFBQVE7QUFDaEM7QUFDQSxxQkFBcUIsZUFBZTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsWUFBWTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLFNBQVM7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixTQUFTO0FBQzlCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQixTQUFTO0FBQzlCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixrQkFBa0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLG1CQUFtQixjQUFjO0FBQ2pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQsT0FBTztBQUM5RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVELE9BQU87QUFDOUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FB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V0FBT1IsY0FBUDtBQUNIOztBQTFDNkUsQ0FBbEY7O0FBNkNlTixrRkFBZixFOzs7Ozs7Ozs7Ozs7QUM3Q0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOztBQUNBLE1BQU1lLG9CQUFOLFNBQW1DNUYseURBQVEsQ0FBQ0MsT0FBVCxDQUFpQnlFLHVEQUFqQixFQUMvQixDQUFDdkosd0VBQUQsQ0FEK0IsQ0FBbkMsQ0FDZ0M7QUFDNUJpQixhQUFXLEdBQUU7QUFDVDtBQUNIOztBQUgyQjs7QUFNakIsbUVBQUl3SixvQkFBSixFQUFmLEU7Ozs7Ozs7Ozs7O0FDVkEsNkQ7Ozs7Ozs7Ozs7O0FDQUEsNEQ7Ozs7Ozs7Ozs7O0FDQUEsZ0U7Ozs7Ozs7Ozs7O0FDQUEsOEQiLCJmaWxlIjoiQGNhdXNhbE5ldC9wcmVwcm9jZXNzaW5nLm5vZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJjYXVzYWwtbmV0LmNvcmVcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LmxvZ1wiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQuc3RvcmFnZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQudXRpbHNcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiY2F1c2FsLW5ldC5jb3JlXCIsIFwiY2F1c2FsLW5ldC5sb2dcIiwgXCJjYXVzYWwtbmV0LnN0b3JhZ2VcIiwgXCJjYXVzYWwtbmV0LnV0aWxzXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkBjYXVzYWxOZXQvcHJlcHJvY2Vzc2luZ1wiXSA9IGZhY3RvcnkocmVxdWlyZShcImNhdXNhbC1uZXQuY29yZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQubG9nXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC5zdG9yYWdlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC51dGlsc1wiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiQGNhdXNhbE5ldC9wcmVwcm9jZXNzaW5nXCJdID0gZmFjdG9yeShyb290W1wiY2F1c2FsLW5ldC5jb3JlXCJdLCByb290W1wiY2F1c2FsLW5ldC5sb2dcIl0sIHJvb3RbXCJjYXVzYWwtbmV0LnN0b3JhZ2VcIl0sIHJvb3RbXCJjYXVzYWwtbmV0LnV0aWxzXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9jb3JlX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9sb2dfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3N0b3JhZ2VfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3V0aWxzX18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIid1c2Ugc3RyaWN0J1xuXG5leHBvcnRzLmJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoXG5leHBvcnRzLnRvQnl0ZUFycmF5ID0gdG9CeXRlQXJyYXlcbmV4cG9ydHMuZnJvbUJ5dGVBcnJheSA9IGZyb21CeXRlQXJyYXlcblxudmFyIGxvb2t1cCA9IFtdXG52YXIgcmV2TG9va3VwID0gW11cbnZhciBBcnIgPSB0eXBlb2YgVWludDhBcnJheSAhPT0gJ3VuZGVmaW5lZCcgPyBVaW50OEFycmF5IDogQXJyYXlcblxudmFyIGNvZGUgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLydcbmZvciAodmFyIGkgPSAwLCBsZW4gPSBjb2RlLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gIGxvb2t1cFtpXSA9IGNvZGVbaV1cbiAgcmV2TG9va3VwW2NvZGUuY2hhckNvZGVBdChpKV0gPSBpXG59XG5cbi8vIFN1cHBvcnQgZGVjb2RpbmcgVVJMLXNhZmUgYmFzZTY0IHN0cmluZ3MsIGFzIE5vZGUuanMgZG9lcy5cbi8vIFNlZTogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQmFzZTY0I1VSTF9hcHBsaWNhdGlvbnNcbnJldkxvb2t1cFsnLScuY2hhckNvZGVBdCgwKV0gPSA2MlxucmV2TG9va3VwWydfJy5jaGFyQ29kZUF0KDApXSA9IDYzXG5cbmZ1bmN0aW9uIGdldExlbnMgKGI2NCkge1xuICB2YXIgbGVuID0gYjY0Lmxlbmd0aFxuXG4gIGlmIChsZW4gJSA0ID4gMCkge1xuICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBzdHJpbmcuIExlbmd0aCBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgNCcpXG4gIH1cblxuICAvLyBUcmltIG9mZiBleHRyYSBieXRlcyBhZnRlciBwbGFjZWhvbGRlciBieXRlcyBhcmUgZm91bmRcbiAgLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vYmVhdGdhbW1pdC9iYXNlNjQtanMvaXNzdWVzLzQyXG4gIHZhciB2YWxpZExlbiA9IGI2NC5pbmRleE9mKCc9JylcbiAgaWYgKHZhbGlkTGVuID09PSAtMSkgdmFsaWRMZW4gPSBsZW5cblxuICB2YXIgcGxhY2VIb2xkZXJzTGVuID0gdmFsaWRMZW4gPT09IGxlblxuICAgID8gMFxuICAgIDogNCAtICh2YWxpZExlbiAlIDQpXG5cbiAgcmV0dXJuIFt2YWxpZExlbiwgcGxhY2VIb2xkZXJzTGVuXVxufVxuXG4vLyBiYXNlNjQgaXMgNC8zICsgdXAgdG8gdHdvIGNoYXJhY3RlcnMgb2YgdGhlIG9yaWdpbmFsIGRhdGFcbmZ1bmN0aW9uIGJ5dGVMZW5ndGggKGI2NCkge1xuICB2YXIgbGVucyA9IGdldExlbnMoYjY0KVxuICB2YXIgdmFsaWRMZW4gPSBsZW5zWzBdXG4gIHZhciBwbGFjZUhvbGRlcnNMZW4gPSBsZW5zWzFdXG4gIHJldHVybiAoKHZhbGlkTGVuICsgcGxhY2VIb2xkZXJzTGVuKSAqIDMgLyA0KSAtIHBsYWNlSG9sZGVyc0xlblxufVxuXG5mdW5jdGlvbiBfYnl0ZUxlbmd0aCAoYjY0LCB2YWxpZExlbiwgcGxhY2VIb2xkZXJzTGVuKSB7XG4gIHJldHVybiAoKHZhbGlkTGVuICsgcGxhY2VIb2xkZXJzTGVuKSAqIDMgLyA0KSAtIHBsYWNlSG9sZGVyc0xlblxufVxuXG5mdW5jdGlvbiB0b0J5dGVBcnJheSAoYjY0KSB7XG4gIHZhciB0bXBcbiAgdmFyIGxlbnMgPSBnZXRMZW5zKGI2NClcbiAgdmFyIHZhbGlkTGVuID0gbGVuc1swXVxuICB2YXIgcGxhY2VIb2xkZXJzTGVuID0gbGVuc1sxXVxuXG4gIHZhciBhcnIgPSBuZXcgQXJyKF9ieXRlTGVuZ3RoKGI2NCwgdmFsaWRMZW4sIHBsYWNlSG9sZGVyc0xlbikpXG5cbiAgdmFyIGN1ckJ5dGUgPSAwXG5cbiAgLy8gaWYgdGhlcmUgYXJlIHBsYWNlaG9sZGVycywgb25seSBnZXQgdXAgdG8gdGhlIGxhc3QgY29tcGxldGUgNCBjaGFyc1xuICB2YXIgbGVuID0gcGxhY2VIb2xkZXJzTGVuID4gMFxuICAgID8gdmFsaWRMZW4gLSA0XG4gICAgOiB2YWxpZExlblxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpICs9IDQpIHtcbiAgICB0bXAgPVxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpKV0gPDwgMTgpIHxcbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDEpXSA8PCAxMikgfFxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMildIDw8IDYpIHxcbiAgICAgIHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMyldXG4gICAgYXJyW2N1ckJ5dGUrK10gPSAodG1wID4+IDE2KSAmIDB4RkZcbiAgICBhcnJbY3VyQnl0ZSsrXSA9ICh0bXAgPj4gOCkgJiAweEZGXG4gICAgYXJyW2N1ckJ5dGUrK10gPSB0bXAgJiAweEZGXG4gIH1cblxuICBpZiAocGxhY2VIb2xkZXJzTGVuID09PSAyKSB7XG4gICAgdG1wID1cbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSldIDw8IDIpIHxcbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDEpXSA+PiA0KVxuICAgIGFycltjdXJCeXRlKytdID0gdG1wICYgMHhGRlxuICB9XG5cbiAgaWYgKHBsYWNlSG9sZGVyc0xlbiA9PT0gMSkge1xuICAgIHRtcCA9XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkpXSA8PCAxMCkgfFxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMSldIDw8IDQpIHxcbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDIpXSA+PiAyKVxuICAgIGFycltjdXJCeXRlKytdID0gKHRtcCA+PiA4KSAmIDB4RkZcbiAgICBhcnJbY3VyQnl0ZSsrXSA9IHRtcCAmIDB4RkZcbiAgfVxuXG4gIHJldHVybiBhcnJcbn1cblxuZnVuY3Rpb24gdHJpcGxldFRvQmFzZTY0IChudW0pIHtcbiAgcmV0dXJuIGxvb2t1cFtudW0gPj4gMTggJiAweDNGXSArXG4gICAgbG9va3VwW251bSA+PiAxMiAmIDB4M0ZdICtcbiAgICBsb29rdXBbbnVtID4+IDYgJiAweDNGXSArXG4gICAgbG9va3VwW251bSAmIDB4M0ZdXG59XG5cbmZ1bmN0aW9uIGVuY29kZUNodW5rICh1aW50OCwgc3RhcnQsIGVuZCkge1xuICB2YXIgdG1wXG4gIHZhciBvdXRwdXQgPSBbXVxuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkgKz0gMykge1xuICAgIHRtcCA9XG4gICAgICAoKHVpbnQ4W2ldIDw8IDE2KSAmIDB4RkYwMDAwKSArXG4gICAgICAoKHVpbnQ4W2kgKyAxXSA8PCA4KSAmIDB4RkYwMCkgK1xuICAgICAgKHVpbnQ4W2kgKyAyXSAmIDB4RkYpXG4gICAgb3V0cHV0LnB1c2godHJpcGxldFRvQmFzZTY0KHRtcCkpXG4gIH1cbiAgcmV0dXJuIG91dHB1dC5qb2luKCcnKVxufVxuXG5mdW5jdGlvbiBmcm9tQnl0ZUFycmF5ICh1aW50OCkge1xuICB2YXIgdG1wXG4gIHZhciBsZW4gPSB1aW50OC5sZW5ndGhcbiAgdmFyIGV4dHJhQnl0ZXMgPSBsZW4gJSAzIC8vIGlmIHdlIGhhdmUgMSBieXRlIGxlZnQsIHBhZCAyIGJ5dGVzXG4gIHZhciBwYXJ0cyA9IFtdXG4gIHZhciBtYXhDaHVua0xlbmd0aCA9IDE2MzgzIC8vIG11c3QgYmUgbXVsdGlwbGUgb2YgM1xuXG4gIC8vIGdvIHRocm91Z2ggdGhlIGFycmF5IGV2ZXJ5IHRocmVlIGJ5dGVzLCB3ZSdsbCBkZWFsIHdpdGggdHJhaWxpbmcgc3R1ZmYgbGF0ZXJcbiAgZm9yICh2YXIgaSA9IDAsIGxlbjIgPSBsZW4gLSBleHRyYUJ5dGVzOyBpIDwgbGVuMjsgaSArPSBtYXhDaHVua0xlbmd0aCkge1xuICAgIHBhcnRzLnB1c2goZW5jb2RlQ2h1bmsoXG4gICAgICB1aW50OCwgaSwgKGkgKyBtYXhDaHVua0xlbmd0aCkgPiBsZW4yID8gbGVuMiA6IChpICsgbWF4Q2h1bmtMZW5ndGgpXG4gICAgKSlcbiAgfVxuXG4gIC8vIHBhZCB0aGUgZW5kIHdpdGggemVyb3MsIGJ1dCBtYWtlIHN1cmUgdG8gbm90IGZvcmdldCB0aGUgZXh0cmEgYnl0ZXNcbiAgaWYgKGV4dHJhQnl0ZXMgPT09IDEpIHtcbiAgICB0bXAgPSB1aW50OFtsZW4gLSAxXVxuICAgIHBhcnRzLnB1c2goXG4gICAgICBsb29rdXBbdG1wID4+IDJdICtcbiAgICAgIGxvb2t1cFsodG1wIDw8IDQpICYgMHgzRl0gK1xuICAgICAgJz09J1xuICAgIClcbiAgfSBlbHNlIGlmIChleHRyYUJ5dGVzID09PSAyKSB7XG4gICAgdG1wID0gKHVpbnQ4W2xlbiAtIDJdIDw8IDgpICsgdWludDhbbGVuIC0gMV1cbiAgICBwYXJ0cy5wdXNoKFxuICAgICAgbG9va3VwW3RtcCA+PiAxMF0gK1xuICAgICAgbG9va3VwWyh0bXAgPj4gNCkgJiAweDNGXSArXG4gICAgICBsb29rdXBbKHRtcCA8PCAyKSAmIDB4M0ZdICtcbiAgICAgICc9J1xuICAgIClcbiAgfVxuXG4gIHJldHVybiBwYXJ0cy5qb2luKCcnKVxufVxuIiwiLyohXG4gKiBUaGUgYnVmZmVyIG1vZHVsZSBmcm9tIG5vZGUuanMsIGZvciB0aGUgYnJvd3Nlci5cbiAqXG4gKiBAYXV0aG9yICAgRmVyb3NzIEFib3VraGFkaWplaCA8ZmVyb3NzQGZlcm9zcy5vcmc+IDxodHRwOi8vZmVyb3NzLm9yZz5cbiAqIEBsaWNlbnNlICBNSVRcbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcHJvdG8gKi9cblxuJ3VzZSBzdHJpY3QnXG5cbnZhciBiYXNlNjQgPSByZXF1aXJlKCdiYXNlNjQtanMnKVxudmFyIGllZWU3NTQgPSByZXF1aXJlKCdpZWVlNzU0JylcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnaXNhcnJheScpXG5cbmV4cG9ydHMuQnVmZmVyID0gQnVmZmVyXG5leHBvcnRzLlNsb3dCdWZmZXIgPSBTbG93QnVmZmVyXG5leHBvcnRzLklOU1BFQ1RfTUFYX0JZVEVTID0gNTBcblxuLyoqXG4gKiBJZiBgQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlRgOlxuICogICA9PT0gdHJ1ZSAgICBVc2UgVWludDhBcnJheSBpbXBsZW1lbnRhdGlvbiAoZmFzdGVzdClcbiAqICAgPT09IGZhbHNlICAgVXNlIE9iamVjdCBpbXBsZW1lbnRhdGlvbiAobW9zdCBjb21wYXRpYmxlLCBldmVuIElFNilcbiAqXG4gKiBCcm93c2VycyB0aGF0IHN1cHBvcnQgdHlwZWQgYXJyYXlzIGFyZSBJRSAxMCssIEZpcmVmb3ggNCssIENocm9tZSA3KywgU2FmYXJpIDUuMSssXG4gKiBPcGVyYSAxMS42KywgaU9TIDQuMisuXG4gKlxuICogRHVlIHRvIHZhcmlvdXMgYnJvd3NlciBidWdzLCBzb21ldGltZXMgdGhlIE9iamVjdCBpbXBsZW1lbnRhdGlvbiB3aWxsIGJlIHVzZWQgZXZlblxuICogd2hlbiB0aGUgYnJvd3NlciBzdXBwb3J0cyB0eXBlZCBhcnJheXMuXG4gKlxuICogTm90ZTpcbiAqXG4gKiAgIC0gRmlyZWZveCA0LTI5IGxhY2tzIHN1cHBvcnQgZm9yIGFkZGluZyBuZXcgcHJvcGVydGllcyB0byBgVWludDhBcnJheWAgaW5zdGFuY2VzLFxuICogICAgIFNlZTogaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9Njk1NDM4LlxuICpcbiAqICAgLSBDaHJvbWUgOS0xMCBpcyBtaXNzaW5nIHRoZSBgVHlwZWRBcnJheS5wcm90b3R5cGUuc3ViYXJyYXlgIGZ1bmN0aW9uLlxuICpcbiAqICAgLSBJRTEwIGhhcyBhIGJyb2tlbiBgVHlwZWRBcnJheS5wcm90b3R5cGUuc3ViYXJyYXlgIGZ1bmN0aW9uIHdoaWNoIHJldHVybnMgYXJyYXlzIG9mXG4gKiAgICAgaW5jb3JyZWN0IGxlbmd0aCBpbiBzb21lIHNpdHVhdGlvbnMuXG5cbiAqIFdlIGRldGVjdCB0aGVzZSBidWdneSBicm93c2VycyBhbmQgc2V0IGBCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVGAgdG8gYGZhbHNlYCBzbyB0aGV5XG4gKiBnZXQgdGhlIE9iamVjdCBpbXBsZW1lbnRhdGlvbiwgd2hpY2ggaXMgc2xvd2VyIGJ1dCBiZWhhdmVzIGNvcnJlY3RseS5cbiAqL1xuQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQgPSBnbG9iYWwuVFlQRURfQVJSQVlfU1VQUE9SVCAhPT0gdW5kZWZpbmVkXG4gID8gZ2xvYmFsLlRZUEVEX0FSUkFZX1NVUFBPUlRcbiAgOiB0eXBlZEFycmF5U3VwcG9ydCgpXG5cbi8qXG4gKiBFeHBvcnQga01heExlbmd0aCBhZnRlciB0eXBlZCBhcnJheSBzdXBwb3J0IGlzIGRldGVybWluZWQuXG4gKi9cbmV4cG9ydHMua01heExlbmd0aCA9IGtNYXhMZW5ndGgoKVxuXG5mdW5jdGlvbiB0eXBlZEFycmF5U3VwcG9ydCAoKSB7XG4gIHRyeSB7XG4gICAgdmFyIGFyciA9IG5ldyBVaW50OEFycmF5KDEpXG4gICAgYXJyLl9fcHJvdG9fXyA9IHtfX3Byb3RvX186IFVpbnQ4QXJyYXkucHJvdG90eXBlLCBmb286IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDQyIH19XG4gICAgcmV0dXJuIGFyci5mb28oKSA9PT0gNDIgJiYgLy8gdHlwZWQgYXJyYXkgaW5zdGFuY2VzIGNhbiBiZSBhdWdtZW50ZWRcbiAgICAgICAgdHlwZW9mIGFyci5zdWJhcnJheSA9PT0gJ2Z1bmN0aW9uJyAmJiAvLyBjaHJvbWUgOS0xMCBsYWNrIGBzdWJhcnJheWBcbiAgICAgICAgYXJyLnN1YmFycmF5KDEsIDEpLmJ5dGVMZW5ndGggPT09IDAgLy8gaWUxMCBoYXMgYnJva2VuIGBzdWJhcnJheWBcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbmZ1bmN0aW9uIGtNYXhMZW5ndGggKCkge1xuICByZXR1cm4gQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlRcbiAgICA/IDB4N2ZmZmZmZmZcbiAgICA6IDB4M2ZmZmZmZmZcbn1cblxuZnVuY3Rpb24gY3JlYXRlQnVmZmVyICh0aGF0LCBsZW5ndGgpIHtcbiAgaWYgKGtNYXhMZW5ndGgoKSA8IGxlbmd0aCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbnZhbGlkIHR5cGVkIGFycmF5IGxlbmd0aCcpXG4gIH1cbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgLy8gUmV0dXJuIGFuIGF1Z21lbnRlZCBgVWludDhBcnJheWAgaW5zdGFuY2UsIGZvciBiZXN0IHBlcmZvcm1hbmNlXG4gICAgdGhhdCA9IG5ldyBVaW50OEFycmF5KGxlbmd0aClcbiAgICB0aGF0Ll9fcHJvdG9fXyA9IEJ1ZmZlci5wcm90b3R5cGVcbiAgfSBlbHNlIHtcbiAgICAvLyBGYWxsYmFjazogUmV0dXJuIGFuIG9iamVjdCBpbnN0YW5jZSBvZiB0aGUgQnVmZmVyIGNsYXNzXG4gICAgaWYgKHRoYXQgPT09IG51bGwpIHtcbiAgICAgIHRoYXQgPSBuZXcgQnVmZmVyKGxlbmd0aClcbiAgICB9XG4gICAgdGhhdC5sZW5ndGggPSBsZW5ndGhcbiAgfVxuXG4gIHJldHVybiB0aGF0XG59XG5cbi8qKlxuICogVGhlIEJ1ZmZlciBjb25zdHJ1Y3RvciByZXR1cm5zIGluc3RhbmNlcyBvZiBgVWludDhBcnJheWAgdGhhdCBoYXZlIHRoZWlyXG4gKiBwcm90b3R5cGUgY2hhbmdlZCB0byBgQnVmZmVyLnByb3RvdHlwZWAuIEZ1cnRoZXJtb3JlLCBgQnVmZmVyYCBpcyBhIHN1YmNsYXNzIG9mXG4gKiBgVWludDhBcnJheWAsIHNvIHRoZSByZXR1cm5lZCBpbnN0YW5jZXMgd2lsbCBoYXZlIGFsbCB0aGUgbm9kZSBgQnVmZmVyYCBtZXRob2RzXG4gKiBhbmQgdGhlIGBVaW50OEFycmF5YCBtZXRob2RzLiBTcXVhcmUgYnJhY2tldCBub3RhdGlvbiB3b3JrcyBhcyBleHBlY3RlZCAtLSBpdFxuICogcmV0dXJucyBhIHNpbmdsZSBvY3RldC5cbiAqXG4gKiBUaGUgYFVpbnQ4QXJyYXlgIHByb3RvdHlwZSByZW1haW5zIHVubW9kaWZpZWQuXG4gKi9cblxuZnVuY3Rpb24gQnVmZmVyIChhcmcsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aCkge1xuICBpZiAoIUJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUICYmICEodGhpcyBpbnN0YW5jZW9mIEJ1ZmZlcikpIHtcbiAgICByZXR1cm4gbmV3IEJ1ZmZlcihhcmcsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aClcbiAgfVxuXG4gIC8vIENvbW1vbiBjYXNlLlxuICBpZiAodHlwZW9mIGFyZyA9PT0gJ251bWJlcicpIHtcbiAgICBpZiAodHlwZW9mIGVuY29kaW5nT3JPZmZzZXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdJZiBlbmNvZGluZyBpcyBzcGVjaWZpZWQgdGhlbiB0aGUgZmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhIHN0cmluZydcbiAgICAgIClcbiAgICB9XG4gICAgcmV0dXJuIGFsbG9jVW5zYWZlKHRoaXMsIGFyZylcbiAgfVxuICByZXR1cm4gZnJvbSh0aGlzLCBhcmcsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aClcbn1cblxuQnVmZmVyLnBvb2xTaXplID0gODE5MiAvLyBub3QgdXNlZCBieSB0aGlzIGltcGxlbWVudGF0aW9uXG5cbi8vIFRPRE86IExlZ2FjeSwgbm90IG5lZWRlZCBhbnltb3JlLiBSZW1vdmUgaW4gbmV4dCBtYWpvciB2ZXJzaW9uLlxuQnVmZmVyLl9hdWdtZW50ID0gZnVuY3Rpb24gKGFycikge1xuICBhcnIuX19wcm90b19fID0gQnVmZmVyLnByb3RvdHlwZVxuICByZXR1cm4gYXJyXG59XG5cbmZ1bmN0aW9uIGZyb20gKHRoYXQsIHZhbHVlLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcInZhbHVlXCIgYXJndW1lbnQgbXVzdCBub3QgYmUgYSBudW1iZXInKVxuICB9XG5cbiAgaWYgKHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcgJiYgdmFsdWUgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikge1xuICAgIHJldHVybiBmcm9tQXJyYXlCdWZmZXIodGhhdCwgdmFsdWUsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aClcbiAgfVxuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGZyb21TdHJpbmcodGhhdCwgdmFsdWUsIGVuY29kaW5nT3JPZmZzZXQpXG4gIH1cblxuICByZXR1cm4gZnJvbU9iamVjdCh0aGF0LCB2YWx1ZSlcbn1cblxuLyoqXG4gKiBGdW5jdGlvbmFsbHkgZXF1aXZhbGVudCB0byBCdWZmZXIoYXJnLCBlbmNvZGluZykgYnV0IHRocm93cyBhIFR5cGVFcnJvclxuICogaWYgdmFsdWUgaXMgYSBudW1iZXIuXG4gKiBCdWZmZXIuZnJvbShzdHJbLCBlbmNvZGluZ10pXG4gKiBCdWZmZXIuZnJvbShhcnJheSlcbiAqIEJ1ZmZlci5mcm9tKGJ1ZmZlcilcbiAqIEJ1ZmZlci5mcm9tKGFycmF5QnVmZmVyWywgYnl0ZU9mZnNldFssIGxlbmd0aF1dKVxuICoqL1xuQnVmZmVyLmZyb20gPSBmdW5jdGlvbiAodmFsdWUsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gZnJvbShudWxsLCB2YWx1ZSwgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKVxufVxuXG5pZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgQnVmZmVyLnByb3RvdHlwZS5fX3Byb3RvX18gPSBVaW50OEFycmF5LnByb3RvdHlwZVxuICBCdWZmZXIuX19wcm90b19fID0gVWludDhBcnJheVxuICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnNwZWNpZXMgJiZcbiAgICAgIEJ1ZmZlcltTeW1ib2wuc3BlY2llc10gPT09IEJ1ZmZlcikge1xuICAgIC8vIEZpeCBzdWJhcnJheSgpIGluIEVTMjAxNi4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZmVyb3NzL2J1ZmZlci9wdWxsLzk3XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEJ1ZmZlciwgU3ltYm9sLnNwZWNpZXMsIHtcbiAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSlcbiAgfVxufVxuXG5mdW5jdGlvbiBhc3NlcnRTaXplIChzaXplKSB7XG4gIGlmICh0eXBlb2Ygc2l6ZSAhPT0gJ251bWJlcicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcInNpemVcIiBhcmd1bWVudCBtdXN0IGJlIGEgbnVtYmVyJylcbiAgfSBlbHNlIGlmIChzaXplIDwgMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdcInNpemVcIiBhcmd1bWVudCBtdXN0IG5vdCBiZSBuZWdhdGl2ZScpXG4gIH1cbn1cblxuZnVuY3Rpb24gYWxsb2MgKHRoYXQsIHNpemUsIGZpbGwsIGVuY29kaW5nKSB7XG4gIGFzc2VydFNpemUoc2l6ZSlcbiAgaWYgKHNpemUgPD0gMCkge1xuICAgIHJldHVybiBjcmVhdGVCdWZmZXIodGhhdCwgc2l6ZSlcbiAgfVxuICBpZiAoZmlsbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgLy8gT25seSBwYXkgYXR0ZW50aW9uIHRvIGVuY29kaW5nIGlmIGl0J3MgYSBzdHJpbmcuIFRoaXNcbiAgICAvLyBwcmV2ZW50cyBhY2NpZGVudGFsbHkgc2VuZGluZyBpbiBhIG51bWJlciB0aGF0IHdvdWxkXG4gICAgLy8gYmUgaW50ZXJwcmV0dGVkIGFzIGEgc3RhcnQgb2Zmc2V0LlxuICAgIHJldHVybiB0eXBlb2YgZW5jb2RpbmcgPT09ICdzdHJpbmcnXG4gICAgICA/IGNyZWF0ZUJ1ZmZlcih0aGF0LCBzaXplKS5maWxsKGZpbGwsIGVuY29kaW5nKVxuICAgICAgOiBjcmVhdGVCdWZmZXIodGhhdCwgc2l6ZSkuZmlsbChmaWxsKVxuICB9XG4gIHJldHVybiBjcmVhdGVCdWZmZXIodGhhdCwgc2l6ZSlcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IGZpbGxlZCBCdWZmZXIgaW5zdGFuY2UuXG4gKiBhbGxvYyhzaXplWywgZmlsbFssIGVuY29kaW5nXV0pXG4gKiovXG5CdWZmZXIuYWxsb2MgPSBmdW5jdGlvbiAoc2l6ZSwgZmlsbCwgZW5jb2RpbmcpIHtcbiAgcmV0dXJuIGFsbG9jKG51bGwsIHNpemUsIGZpbGwsIGVuY29kaW5nKVxufVxuXG5mdW5jdGlvbiBhbGxvY1Vuc2FmZSAodGhhdCwgc2l6ZSkge1xuICBhc3NlcnRTaXplKHNpemUpXG4gIHRoYXQgPSBjcmVhdGVCdWZmZXIodGhhdCwgc2l6ZSA8IDAgPyAwIDogY2hlY2tlZChzaXplKSB8IDApXG4gIGlmICghQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNpemU7ICsraSkge1xuICAgICAgdGhhdFtpXSA9IDBcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRoYXRcbn1cblxuLyoqXG4gKiBFcXVpdmFsZW50IHRvIEJ1ZmZlcihudW0pLCBieSBkZWZhdWx0IGNyZWF0ZXMgYSBub24temVyby1maWxsZWQgQnVmZmVyIGluc3RhbmNlLlxuICogKi9cbkJ1ZmZlci5hbGxvY1Vuc2FmZSA9IGZ1bmN0aW9uIChzaXplKSB7XG4gIHJldHVybiBhbGxvY1Vuc2FmZShudWxsLCBzaXplKVxufVxuLyoqXG4gKiBFcXVpdmFsZW50IHRvIFNsb3dCdWZmZXIobnVtKSwgYnkgZGVmYXVsdCBjcmVhdGVzIGEgbm9uLXplcm8tZmlsbGVkIEJ1ZmZlciBpbnN0YW5jZS5cbiAqL1xuQnVmZmVyLmFsbG9jVW5zYWZlU2xvdyA9IGZ1bmN0aW9uIChzaXplKSB7XG4gIHJldHVybiBhbGxvY1Vuc2FmZShudWxsLCBzaXplKVxufVxuXG5mdW5jdGlvbiBmcm9tU3RyaW5nICh0aGF0LCBzdHJpbmcsIGVuY29kaW5nKSB7XG4gIGlmICh0eXBlb2YgZW5jb2RpbmcgIT09ICdzdHJpbmcnIHx8IGVuY29kaW5nID09PSAnJykge1xuICAgIGVuY29kaW5nID0gJ3V0ZjgnXG4gIH1cblxuICBpZiAoIUJ1ZmZlci5pc0VuY29kaW5nKGVuY29kaW5nKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wiZW5jb2RpbmdcIiBtdXN0IGJlIGEgdmFsaWQgc3RyaW5nIGVuY29kaW5nJylcbiAgfVxuXG4gIHZhciBsZW5ndGggPSBieXRlTGVuZ3RoKHN0cmluZywgZW5jb2RpbmcpIHwgMFxuICB0aGF0ID0gY3JlYXRlQnVmZmVyKHRoYXQsIGxlbmd0aClcblxuICB2YXIgYWN0dWFsID0gdGhhdC53cml0ZShzdHJpbmcsIGVuY29kaW5nKVxuXG4gIGlmIChhY3R1YWwgIT09IGxlbmd0aCkge1xuICAgIC8vIFdyaXRpbmcgYSBoZXggc3RyaW5nLCBmb3IgZXhhbXBsZSwgdGhhdCBjb250YWlucyBpbnZhbGlkIGNoYXJhY3RlcnMgd2lsbFxuICAgIC8vIGNhdXNlIGV2ZXJ5dGhpbmcgYWZ0ZXIgdGhlIGZpcnN0IGludmFsaWQgY2hhcmFjdGVyIHRvIGJlIGlnbm9yZWQuIChlLmcuXG4gICAgLy8gJ2FieHhjZCcgd2lsbCBiZSB0cmVhdGVkIGFzICdhYicpXG4gICAgdGhhdCA9IHRoYXQuc2xpY2UoMCwgYWN0dWFsKVxuICB9XG5cbiAgcmV0dXJuIHRoYXRcbn1cblxuZnVuY3Rpb24gZnJvbUFycmF5TGlrZSAodGhhdCwgYXJyYXkpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aCA8IDAgPyAwIDogY2hlY2tlZChhcnJheS5sZW5ndGgpIHwgMFxuICB0aGF0ID0gY3JlYXRlQnVmZmVyKHRoYXQsIGxlbmd0aClcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgIHRoYXRbaV0gPSBhcnJheVtpXSAmIDI1NVxuICB9XG4gIHJldHVybiB0aGF0XG59XG5cbmZ1bmN0aW9uIGZyb21BcnJheUJ1ZmZlciAodGhhdCwgYXJyYXksIGJ5dGVPZmZzZXQsIGxlbmd0aCkge1xuICBhcnJheS5ieXRlTGVuZ3RoIC8vIHRoaXMgdGhyb3dzIGlmIGBhcnJheWAgaXMgbm90IGEgdmFsaWQgQXJyYXlCdWZmZXJcblxuICBpZiAoYnl0ZU9mZnNldCA8IDAgfHwgYXJyYXkuYnl0ZUxlbmd0aCA8IGJ5dGVPZmZzZXQpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignXFwnb2Zmc2V0XFwnIGlzIG91dCBvZiBib3VuZHMnKVxuICB9XG5cbiAgaWYgKGFycmF5LmJ5dGVMZW5ndGggPCBieXRlT2Zmc2V0ICsgKGxlbmd0aCB8fCAwKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdcXCdsZW5ndGhcXCcgaXMgb3V0IG9mIGJvdW5kcycpXG4gIH1cblxuICBpZiAoYnl0ZU9mZnNldCA9PT0gdW5kZWZpbmVkICYmIGxlbmd0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgYXJyYXkgPSBuZXcgVWludDhBcnJheShhcnJheSlcbiAgfSBlbHNlIGlmIChsZW5ndGggPT09IHVuZGVmaW5lZCkge1xuICAgIGFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXksIGJ5dGVPZmZzZXQpXG4gIH0gZWxzZSB7XG4gICAgYXJyYXkgPSBuZXcgVWludDhBcnJheShhcnJheSwgYnl0ZU9mZnNldCwgbGVuZ3RoKVxuICB9XG5cbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgLy8gUmV0dXJuIGFuIGF1Z21lbnRlZCBgVWludDhBcnJheWAgaW5zdGFuY2UsIGZvciBiZXN0IHBlcmZvcm1hbmNlXG4gICAgdGhhdCA9IGFycmF5XG4gICAgdGhhdC5fX3Byb3RvX18gPSBCdWZmZXIucHJvdG90eXBlXG4gIH0gZWxzZSB7XG4gICAgLy8gRmFsbGJhY2s6IFJldHVybiBhbiBvYmplY3QgaW5zdGFuY2Ugb2YgdGhlIEJ1ZmZlciBjbGFzc1xuICAgIHRoYXQgPSBmcm9tQXJyYXlMaWtlKHRoYXQsIGFycmF5KVxuICB9XG4gIHJldHVybiB0aGF0XG59XG5cbmZ1bmN0aW9uIGZyb21PYmplY3QgKHRoYXQsIG9iaikge1xuICBpZiAoQnVmZmVyLmlzQnVmZmVyKG9iaikpIHtcbiAgICB2YXIgbGVuID0gY2hlY2tlZChvYmoubGVuZ3RoKSB8IDBcbiAgICB0aGF0ID0gY3JlYXRlQnVmZmVyKHRoYXQsIGxlbilcblxuICAgIGlmICh0aGF0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHRoYXRcbiAgICB9XG5cbiAgICBvYmouY29weSh0aGF0LCAwLCAwLCBsZW4pXG4gICAgcmV0dXJuIHRoYXRcbiAgfVxuXG4gIGlmIChvYmopIHtcbiAgICBpZiAoKHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgb2JqLmJ1ZmZlciBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSB8fCAnbGVuZ3RoJyBpbiBvYmopIHtcbiAgICAgIGlmICh0eXBlb2Ygb2JqLmxlbmd0aCAhPT0gJ251bWJlcicgfHwgaXNuYW4ob2JqLmxlbmd0aCkpIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUJ1ZmZlcih0aGF0LCAwKVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZyb21BcnJheUxpa2UodGhhdCwgb2JqKVxuICAgIH1cblxuICAgIGlmIChvYmoudHlwZSA9PT0gJ0J1ZmZlcicgJiYgaXNBcnJheShvYmouZGF0YSkpIHtcbiAgICAgIHJldHVybiBmcm9tQXJyYXlMaWtlKHRoYXQsIG9iai5kYXRhKVxuICAgIH1cbiAgfVxuXG4gIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ZpcnN0IGFyZ3VtZW50IG11c3QgYmUgYSBzdHJpbmcsIEJ1ZmZlciwgQXJyYXlCdWZmZXIsIEFycmF5LCBvciBhcnJheS1saWtlIG9iamVjdC4nKVxufVxuXG5mdW5jdGlvbiBjaGVja2VkIChsZW5ndGgpIHtcbiAgLy8gTm90ZTogY2Fubm90IHVzZSBgbGVuZ3RoIDwga01heExlbmd0aCgpYCBoZXJlIGJlY2F1c2UgdGhhdCBmYWlscyB3aGVuXG4gIC8vIGxlbmd0aCBpcyBOYU4gKHdoaWNoIGlzIG90aGVyd2lzZSBjb2VyY2VkIHRvIHplcm8uKVxuICBpZiAobGVuZ3RoID49IGtNYXhMZW5ndGgoKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdBdHRlbXB0IHRvIGFsbG9jYXRlIEJ1ZmZlciBsYXJnZXIgdGhhbiBtYXhpbXVtICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICdzaXplOiAweCcgKyBrTWF4TGVuZ3RoKCkudG9TdHJpbmcoMTYpICsgJyBieXRlcycpXG4gIH1cbiAgcmV0dXJuIGxlbmd0aCB8IDBcbn1cblxuZnVuY3Rpb24gU2xvd0J1ZmZlciAobGVuZ3RoKSB7XG4gIGlmICgrbGVuZ3RoICE9IGxlbmd0aCkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGVxZXFlcVxuICAgIGxlbmd0aCA9IDBcbiAgfVxuICByZXR1cm4gQnVmZmVyLmFsbG9jKCtsZW5ndGgpXG59XG5cbkJ1ZmZlci5pc0J1ZmZlciA9IGZ1bmN0aW9uIGlzQnVmZmVyIChiKSB7XG4gIHJldHVybiAhIShiICE9IG51bGwgJiYgYi5faXNCdWZmZXIpXG59XG5cbkJ1ZmZlci5jb21wYXJlID0gZnVuY3Rpb24gY29tcGFyZSAoYSwgYikge1xuICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihhKSB8fCAhQnVmZmVyLmlzQnVmZmVyKGIpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnRzIG11c3QgYmUgQnVmZmVycycpXG4gIH1cblxuICBpZiAoYSA9PT0gYikgcmV0dXJuIDBcblxuICB2YXIgeCA9IGEubGVuZ3RoXG4gIHZhciB5ID0gYi5sZW5ndGhcblxuICBmb3IgKHZhciBpID0gMCwgbGVuID0gTWF0aC5taW4oeCwgeSk7IGkgPCBsZW47ICsraSkge1xuICAgIGlmIChhW2ldICE9PSBiW2ldKSB7XG4gICAgICB4ID0gYVtpXVxuICAgICAgeSA9IGJbaV1cbiAgICAgIGJyZWFrXG4gICAgfVxuICB9XG5cbiAgaWYgKHggPCB5KSByZXR1cm4gLTFcbiAgaWYgKHkgPCB4KSByZXR1cm4gMVxuICByZXR1cm4gMFxufVxuXG5CdWZmZXIuaXNFbmNvZGluZyA9IGZ1bmN0aW9uIGlzRW5jb2RpbmcgKGVuY29kaW5nKSB7XG4gIHN3aXRjaCAoU3RyaW5nKGVuY29kaW5nKS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgY2FzZSAnaGV4JzpcbiAgICBjYXNlICd1dGY4JzpcbiAgICBjYXNlICd1dGYtOCc6XG4gICAgY2FzZSAnYXNjaWknOlxuICAgIGNhc2UgJ2xhdGluMSc6XG4gICAgY2FzZSAnYmluYXJ5JzpcbiAgICBjYXNlICdiYXNlNjQnOlxuICAgIGNhc2UgJ3VjczInOlxuICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICBjYXNlICd1dGYxNmxlJzpcbiAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG5CdWZmZXIuY29uY2F0ID0gZnVuY3Rpb24gY29uY2F0IChsaXN0LCBsZW5ndGgpIHtcbiAgaWYgKCFpc0FycmF5KGxpc3QpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJsaXN0XCIgYXJndW1lbnQgbXVzdCBiZSBhbiBBcnJheSBvZiBCdWZmZXJzJylcbiAgfVxuXG4gIGlmIChsaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBCdWZmZXIuYWxsb2MoMClcbiAgfVxuXG4gIHZhciBpXG4gIGlmIChsZW5ndGggPT09IHVuZGVmaW5lZCkge1xuICAgIGxlbmd0aCA9IDBcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7ICsraSkge1xuICAgICAgbGVuZ3RoICs9IGxpc3RbaV0ubGVuZ3RoXG4gICAgfVxuICB9XG5cbiAgdmFyIGJ1ZmZlciA9IEJ1ZmZlci5hbGxvY1Vuc2FmZShsZW5ndGgpXG4gIHZhciBwb3MgPSAwXG4gIGZvciAoaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgKytpKSB7XG4gICAgdmFyIGJ1ZiA9IGxpc3RbaV1cbiAgICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihidWYpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcImxpc3RcIiBhcmd1bWVudCBtdXN0IGJlIGFuIEFycmF5IG9mIEJ1ZmZlcnMnKVxuICAgIH1cbiAgICBidWYuY29weShidWZmZXIsIHBvcylcbiAgICBwb3MgKz0gYnVmLmxlbmd0aFxuICB9XG4gIHJldHVybiBidWZmZXJcbn1cblxuZnVuY3Rpb24gYnl0ZUxlbmd0aCAoc3RyaW5nLCBlbmNvZGluZykge1xuICBpZiAoQnVmZmVyLmlzQnVmZmVyKHN0cmluZykpIHtcbiAgICByZXR1cm4gc3RyaW5nLmxlbmd0aFxuICB9XG4gIGlmICh0eXBlb2YgQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBBcnJheUJ1ZmZlci5pc1ZpZXcgPT09ICdmdW5jdGlvbicgJiZcbiAgICAgIChBcnJheUJ1ZmZlci5pc1ZpZXcoc3RyaW5nKSB8fCBzdHJpbmcgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikpIHtcbiAgICByZXR1cm4gc3RyaW5nLmJ5dGVMZW5ndGhcbiAgfVxuICBpZiAodHlwZW9mIHN0cmluZyAhPT0gJ3N0cmluZycpIHtcbiAgICBzdHJpbmcgPSAnJyArIHN0cmluZ1xuICB9XG5cbiAgdmFyIGxlbiA9IHN0cmluZy5sZW5ndGhcbiAgaWYgKGxlbiA9PT0gMCkgcmV0dXJuIDBcblxuICAvLyBVc2UgYSBmb3IgbG9vcCB0byBhdm9pZCByZWN1cnNpb25cbiAgdmFyIGxvd2VyZWRDYXNlID0gZmFsc2VcbiAgZm9yICg7Oykge1xuICAgIHN3aXRjaCAoZW5jb2RpbmcpIHtcbiAgICAgIGNhc2UgJ2FzY2lpJzpcbiAgICAgIGNhc2UgJ2xhdGluMSc6XG4gICAgICBjYXNlICdiaW5hcnknOlxuICAgICAgICByZXR1cm4gbGVuXG4gICAgICBjYXNlICd1dGY4JzpcbiAgICAgIGNhc2UgJ3V0Zi04JzpcbiAgICAgIGNhc2UgdW5kZWZpbmVkOlxuICAgICAgICByZXR1cm4gdXRmOFRvQnl0ZXMoc3RyaW5nKS5sZW5ndGhcbiAgICAgIGNhc2UgJ3VjczInOlxuICAgICAgY2FzZSAndWNzLTInOlxuICAgICAgY2FzZSAndXRmMTZsZSc6XG4gICAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICAgIHJldHVybiBsZW4gKiAyXG4gICAgICBjYXNlICdoZXgnOlxuICAgICAgICByZXR1cm4gbGVuID4+PiAxXG4gICAgICBjYXNlICdiYXNlNjQnOlxuICAgICAgICByZXR1cm4gYmFzZTY0VG9CeXRlcyhzdHJpbmcpLmxlbmd0aFxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKGxvd2VyZWRDYXNlKSByZXR1cm4gdXRmOFRvQnl0ZXMoc3RyaW5nKS5sZW5ndGggLy8gYXNzdW1lIHV0ZjhcbiAgICAgICAgZW5jb2RpbmcgPSAoJycgKyBlbmNvZGluZykudG9Mb3dlckNhc2UoKVxuICAgICAgICBsb3dlcmVkQ2FzZSA9IHRydWVcbiAgICB9XG4gIH1cbn1cbkJ1ZmZlci5ieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aFxuXG5mdW5jdGlvbiBzbG93VG9TdHJpbmcgKGVuY29kaW5nLCBzdGFydCwgZW5kKSB7XG4gIHZhciBsb3dlcmVkQ2FzZSA9IGZhbHNlXG5cbiAgLy8gTm8gbmVlZCB0byB2ZXJpZnkgdGhhdCBcInRoaXMubGVuZ3RoIDw9IE1BWF9VSU5UMzJcIiBzaW5jZSBpdCdzIGEgcmVhZC1vbmx5XG4gIC8vIHByb3BlcnR5IG9mIGEgdHlwZWQgYXJyYXkuXG5cbiAgLy8gVGhpcyBiZWhhdmVzIG5laXRoZXIgbGlrZSBTdHJpbmcgbm9yIFVpbnQ4QXJyYXkgaW4gdGhhdCB3ZSBzZXQgc3RhcnQvZW5kXG4gIC8vIHRvIHRoZWlyIHVwcGVyL2xvd2VyIGJvdW5kcyBpZiB0aGUgdmFsdWUgcGFzc2VkIGlzIG91dCBvZiByYW5nZS5cbiAgLy8gdW5kZWZpbmVkIGlzIGhhbmRsZWQgc3BlY2lhbGx5IGFzIHBlciBFQ01BLTI2MiA2dGggRWRpdGlvbixcbiAgLy8gU2VjdGlvbiAxMy4zLjMuNyBSdW50aW1lIFNlbWFudGljczogS2V5ZWRCaW5kaW5nSW5pdGlhbGl6YXRpb24uXG4gIGlmIChzdGFydCA9PT0gdW5kZWZpbmVkIHx8IHN0YXJ0IDwgMCkge1xuICAgIHN0YXJ0ID0gMFxuICB9XG4gIC8vIFJldHVybiBlYXJseSBpZiBzdGFydCA+IHRoaXMubGVuZ3RoLiBEb25lIGhlcmUgdG8gcHJldmVudCBwb3RlbnRpYWwgdWludDMyXG4gIC8vIGNvZXJjaW9uIGZhaWwgYmVsb3cuXG4gIGlmIChzdGFydCA+IHRoaXMubGVuZ3RoKSB7XG4gICAgcmV0dXJuICcnXG4gIH1cblxuICBpZiAoZW5kID09PSB1bmRlZmluZWQgfHwgZW5kID4gdGhpcy5sZW5ndGgpIHtcbiAgICBlbmQgPSB0aGlzLmxlbmd0aFxuICB9XG5cbiAgaWYgKGVuZCA8PSAwKSB7XG4gICAgcmV0dXJuICcnXG4gIH1cblxuICAvLyBGb3JjZSBjb2Vyc2lvbiB0byB1aW50MzIuIFRoaXMgd2lsbCBhbHNvIGNvZXJjZSBmYWxzZXkvTmFOIHZhbHVlcyB0byAwLlxuICBlbmQgPj4+PSAwXG4gIHN0YXJ0ID4+Pj0gMFxuXG4gIGlmIChlbmQgPD0gc3RhcnQpIHtcbiAgICByZXR1cm4gJydcbiAgfVxuXG4gIGlmICghZW5jb2RpbmcpIGVuY29kaW5nID0gJ3V0ZjgnXG5cbiAgd2hpbGUgKHRydWUpIHtcbiAgICBzd2l0Y2ggKGVuY29kaW5nKSB7XG4gICAgICBjYXNlICdoZXgnOlxuICAgICAgICByZXR1cm4gaGV4U2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAndXRmOCc6XG4gICAgICBjYXNlICd1dGYtOCc6XG4gICAgICAgIHJldHVybiB1dGY4U2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAnYXNjaWknOlxuICAgICAgICByZXR1cm4gYXNjaWlTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICdsYXRpbjEnOlxuICAgICAgY2FzZSAnYmluYXJ5JzpcbiAgICAgICAgcmV0dXJuIGxhdGluMVNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgICAgIHJldHVybiBiYXNlNjRTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICd1Y3MyJzpcbiAgICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgICByZXR1cm4gdXRmMTZsZVNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlmIChsb3dlcmVkQ2FzZSkgdGhyb3cgbmV3IFR5cGVFcnJvcignVW5rbm93biBlbmNvZGluZzogJyArIGVuY29kaW5nKVxuICAgICAgICBlbmNvZGluZyA9IChlbmNvZGluZyArICcnKS50b0xvd2VyQ2FzZSgpXG4gICAgICAgIGxvd2VyZWRDYXNlID0gdHJ1ZVxuICAgIH1cbiAgfVxufVxuXG4vLyBUaGUgcHJvcGVydHkgaXMgdXNlZCBieSBgQnVmZmVyLmlzQnVmZmVyYCBhbmQgYGlzLWJ1ZmZlcmAgKGluIFNhZmFyaSA1LTcpIHRvIGRldGVjdFxuLy8gQnVmZmVyIGluc3RhbmNlcy5cbkJ1ZmZlci5wcm90b3R5cGUuX2lzQnVmZmVyID0gdHJ1ZVxuXG5mdW5jdGlvbiBzd2FwIChiLCBuLCBtKSB7XG4gIHZhciBpID0gYltuXVxuICBiW25dID0gYlttXVxuICBiW21dID0gaVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnN3YXAxNiA9IGZ1bmN0aW9uIHN3YXAxNiAoKSB7XG4gIHZhciBsZW4gPSB0aGlzLmxlbmd0aFxuICBpZiAobGVuICUgMiAhPT0gMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdCdWZmZXIgc2l6ZSBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgMTYtYml0cycpXG4gIH1cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkgKz0gMikge1xuICAgIHN3YXAodGhpcywgaSwgaSArIDEpXG4gIH1cbiAgcmV0dXJuIHRoaXNcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5zd2FwMzIgPSBmdW5jdGlvbiBzd2FwMzIgKCkge1xuICB2YXIgbGVuID0gdGhpcy5sZW5ndGhcbiAgaWYgKGxlbiAlIDQgIT09IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQnVmZmVyIHNpemUgbXVzdCBiZSBhIG11bHRpcGxlIG9mIDMyLWJpdHMnKVxuICB9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpICs9IDQpIHtcbiAgICBzd2FwKHRoaXMsIGksIGkgKyAzKVxuICAgIHN3YXAodGhpcywgaSArIDEsIGkgKyAyKVxuICB9XG4gIHJldHVybiB0aGlzXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuc3dhcDY0ID0gZnVuY3Rpb24gc3dhcDY0ICgpIHtcbiAgdmFyIGxlbiA9IHRoaXMubGVuZ3RoXG4gIGlmIChsZW4gJSA4ICE9PSAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0J1ZmZlciBzaXplIG11c3QgYmUgYSBtdWx0aXBsZSBvZiA2NC1iaXRzJylcbiAgfVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSArPSA4KSB7XG4gICAgc3dhcCh0aGlzLCBpLCBpICsgNylcbiAgICBzd2FwKHRoaXMsIGkgKyAxLCBpICsgNilcbiAgICBzd2FwKHRoaXMsIGkgKyAyLCBpICsgNSlcbiAgICBzd2FwKHRoaXMsIGkgKyAzLCBpICsgNClcbiAgfVxuICByZXR1cm4gdGhpc1xufVxuXG5CdWZmZXIucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcgKCkge1xuICB2YXIgbGVuZ3RoID0gdGhpcy5sZW5ndGggfCAwXG4gIGlmIChsZW5ndGggPT09IDApIHJldHVybiAnJ1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHV0ZjhTbGljZSh0aGlzLCAwLCBsZW5ndGgpXG4gIHJldHVybiBzbG93VG9TdHJpbmcuYXBwbHkodGhpcywgYXJndW1lbnRzKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLmVxdWFscyA9IGZ1bmN0aW9uIGVxdWFscyAoYikge1xuICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihiKSkgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnQgbXVzdCBiZSBhIEJ1ZmZlcicpXG4gIGlmICh0aGlzID09PSBiKSByZXR1cm4gdHJ1ZVxuICByZXR1cm4gQnVmZmVyLmNvbXBhcmUodGhpcywgYikgPT09IDBcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5pbnNwZWN0ID0gZnVuY3Rpb24gaW5zcGVjdCAoKSB7XG4gIHZhciBzdHIgPSAnJ1xuICB2YXIgbWF4ID0gZXhwb3J0cy5JTlNQRUNUX01BWF9CWVRFU1xuICBpZiAodGhpcy5sZW5ndGggPiAwKSB7XG4gICAgc3RyID0gdGhpcy50b1N0cmluZygnaGV4JywgMCwgbWF4KS5tYXRjaCgvLnsyfS9nKS5qb2luKCcgJylcbiAgICBpZiAodGhpcy5sZW5ndGggPiBtYXgpIHN0ciArPSAnIC4uLiAnXG4gIH1cbiAgcmV0dXJuICc8QnVmZmVyICcgKyBzdHIgKyAnPidcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5jb21wYXJlID0gZnVuY3Rpb24gY29tcGFyZSAodGFyZ2V0LCBzdGFydCwgZW5kLCB0aGlzU3RhcnQsIHRoaXNFbmQpIHtcbiAgaWYgKCFCdWZmZXIuaXNCdWZmZXIodGFyZ2V0KSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50IG11c3QgYmUgYSBCdWZmZXInKVxuICB9XG5cbiAgaWYgKHN0YXJ0ID09PSB1bmRlZmluZWQpIHtcbiAgICBzdGFydCA9IDBcbiAgfVxuICBpZiAoZW5kID09PSB1bmRlZmluZWQpIHtcbiAgICBlbmQgPSB0YXJnZXQgPyB0YXJnZXQubGVuZ3RoIDogMFxuICB9XG4gIGlmICh0aGlzU3RhcnQgPT09IHVuZGVmaW5lZCkge1xuICAgIHRoaXNTdGFydCA9IDBcbiAgfVxuICBpZiAodGhpc0VuZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhpc0VuZCA9IHRoaXMubGVuZ3RoXG4gIH1cblxuICBpZiAoc3RhcnQgPCAwIHx8IGVuZCA+IHRhcmdldC5sZW5ndGggfHwgdGhpc1N0YXJ0IDwgMCB8fCB0aGlzRW5kID4gdGhpcy5sZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignb3V0IG9mIHJhbmdlIGluZGV4JylcbiAgfVxuXG4gIGlmICh0aGlzU3RhcnQgPj0gdGhpc0VuZCAmJiBzdGFydCA+PSBlbmQpIHtcbiAgICByZXR1cm4gMFxuICB9XG4gIGlmICh0aGlzU3RhcnQgPj0gdGhpc0VuZCkge1xuICAgIHJldHVybiAtMVxuICB9XG4gIGlmIChzdGFydCA+PSBlbmQpIHtcbiAgICByZXR1cm4gMVxuICB9XG5cbiAgc3RhcnQgPj4+PSAwXG4gIGVuZCA+Pj49IDBcbiAgdGhpc1N0YXJ0ID4+Pj0gMFxuICB0aGlzRW5kID4+Pj0gMFxuXG4gIGlmICh0aGlzID09PSB0YXJnZXQpIHJldHVybiAwXG5cbiAgdmFyIHggPSB0aGlzRW5kIC0gdGhpc1N0YXJ0XG4gIHZhciB5ID0gZW5kIC0gc3RhcnRcbiAgdmFyIGxlbiA9IE1hdGgubWluKHgsIHkpXG5cbiAgdmFyIHRoaXNDb3B5ID0gdGhpcy5zbGljZSh0aGlzU3RhcnQsIHRoaXNFbmQpXG4gIHZhciB0YXJnZXRDb3B5ID0gdGFyZ2V0LnNsaWNlKHN0YXJ0LCBlbmQpXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47ICsraSkge1xuICAgIGlmICh0aGlzQ29weVtpXSAhPT0gdGFyZ2V0Q29weVtpXSkge1xuICAgICAgeCA9IHRoaXNDb3B5W2ldXG4gICAgICB5ID0gdGFyZ2V0Q29weVtpXVxuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cblxuICBpZiAoeCA8IHkpIHJldHVybiAtMVxuICBpZiAoeSA8IHgpIHJldHVybiAxXG4gIHJldHVybiAwXG59XG5cbi8vIEZpbmRzIGVpdGhlciB0aGUgZmlyc3QgaW5kZXggb2YgYHZhbGAgaW4gYGJ1ZmZlcmAgYXQgb2Zmc2V0ID49IGBieXRlT2Zmc2V0YCxcbi8vIE9SIHRoZSBsYXN0IGluZGV4IG9mIGB2YWxgIGluIGBidWZmZXJgIGF0IG9mZnNldCA8PSBgYnl0ZU9mZnNldGAuXG4vL1xuLy8gQXJndW1lbnRzOlxuLy8gLSBidWZmZXIgLSBhIEJ1ZmZlciB0byBzZWFyY2hcbi8vIC0gdmFsIC0gYSBzdHJpbmcsIEJ1ZmZlciwgb3IgbnVtYmVyXG4vLyAtIGJ5dGVPZmZzZXQgLSBhbiBpbmRleCBpbnRvIGBidWZmZXJgOyB3aWxsIGJlIGNsYW1wZWQgdG8gYW4gaW50MzJcbi8vIC0gZW5jb2RpbmcgLSBhbiBvcHRpb25hbCBlbmNvZGluZywgcmVsZXZhbnQgaXMgdmFsIGlzIGEgc3RyaW5nXG4vLyAtIGRpciAtIHRydWUgZm9yIGluZGV4T2YsIGZhbHNlIGZvciBsYXN0SW5kZXhPZlxuZnVuY3Rpb24gYmlkaXJlY3Rpb25hbEluZGV4T2YgKGJ1ZmZlciwgdmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZywgZGlyKSB7XG4gIC8vIEVtcHR5IGJ1ZmZlciBtZWFucyBubyBtYXRjaFxuICBpZiAoYnVmZmVyLmxlbmd0aCA9PT0gMCkgcmV0dXJuIC0xXG5cbiAgLy8gTm9ybWFsaXplIGJ5dGVPZmZzZXRcbiAgaWYgKHR5cGVvZiBieXRlT2Zmc2V0ID09PSAnc3RyaW5nJykge1xuICAgIGVuY29kaW5nID0gYnl0ZU9mZnNldFxuICAgIGJ5dGVPZmZzZXQgPSAwXG4gIH0gZWxzZSBpZiAoYnl0ZU9mZnNldCA+IDB4N2ZmZmZmZmYpIHtcbiAgICBieXRlT2Zmc2V0ID0gMHg3ZmZmZmZmZlxuICB9IGVsc2UgaWYgKGJ5dGVPZmZzZXQgPCAtMHg4MDAwMDAwMCkge1xuICAgIGJ5dGVPZmZzZXQgPSAtMHg4MDAwMDAwMFxuICB9XG4gIGJ5dGVPZmZzZXQgPSArYnl0ZU9mZnNldCAgLy8gQ29lcmNlIHRvIE51bWJlci5cbiAgaWYgKGlzTmFOKGJ5dGVPZmZzZXQpKSB7XG4gICAgLy8gYnl0ZU9mZnNldDogaXQgaXQncyB1bmRlZmluZWQsIG51bGwsIE5hTiwgXCJmb29cIiwgZXRjLCBzZWFyY2ggd2hvbGUgYnVmZmVyXG4gICAgYnl0ZU9mZnNldCA9IGRpciA/IDAgOiAoYnVmZmVyLmxlbmd0aCAtIDEpXG4gIH1cblxuICAvLyBOb3JtYWxpemUgYnl0ZU9mZnNldDogbmVnYXRpdmUgb2Zmc2V0cyBzdGFydCBmcm9tIHRoZSBlbmQgb2YgdGhlIGJ1ZmZlclxuICBpZiAoYnl0ZU9mZnNldCA8IDApIGJ5dGVPZmZzZXQgPSBidWZmZXIubGVuZ3RoICsgYnl0ZU9mZnNldFxuICBpZiAoYnl0ZU9mZnNldCA+PSBidWZmZXIubGVuZ3RoKSB7XG4gICAgaWYgKGRpcikgcmV0dXJuIC0xXG4gICAgZWxzZSBieXRlT2Zmc2V0ID0gYnVmZmVyLmxlbmd0aCAtIDFcbiAgfSBlbHNlIGlmIChieXRlT2Zmc2V0IDwgMCkge1xuICAgIGlmIChkaXIpIGJ5dGVPZmZzZXQgPSAwXG4gICAgZWxzZSByZXR1cm4gLTFcbiAgfVxuXG4gIC8vIE5vcm1hbGl6ZSB2YWxcbiAgaWYgKHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnKSB7XG4gICAgdmFsID0gQnVmZmVyLmZyb20odmFsLCBlbmNvZGluZylcbiAgfVxuXG4gIC8vIEZpbmFsbHksIHNlYXJjaCBlaXRoZXIgaW5kZXhPZiAoaWYgZGlyIGlzIHRydWUpIG9yIGxhc3RJbmRleE9mXG4gIGlmIChCdWZmZXIuaXNCdWZmZXIodmFsKSkge1xuICAgIC8vIFNwZWNpYWwgY2FzZTogbG9va2luZyBmb3IgZW1wdHkgc3RyaW5nL2J1ZmZlciBhbHdheXMgZmFpbHNcbiAgICBpZiAodmFsLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIC0xXG4gICAgfVxuICAgIHJldHVybiBhcnJheUluZGV4T2YoYnVmZmVyLCB2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCBkaXIpXG4gIH0gZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHtcbiAgICB2YWwgPSB2YWwgJiAweEZGIC8vIFNlYXJjaCBmb3IgYSBieXRlIHZhbHVlIFswLTI1NV1cbiAgICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQgJiZcbiAgICAgICAgdHlwZW9mIFVpbnQ4QXJyYXkucHJvdG90eXBlLmluZGV4T2YgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGlmIChkaXIpIHtcbiAgICAgICAgcmV0dXJuIFVpbnQ4QXJyYXkucHJvdG90eXBlLmluZGV4T2YuY2FsbChidWZmZXIsIHZhbCwgYnl0ZU9mZnNldClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBVaW50OEFycmF5LnByb3RvdHlwZS5sYXN0SW5kZXhPZi5jYWxsKGJ1ZmZlciwgdmFsLCBieXRlT2Zmc2V0KVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYXJyYXlJbmRleE9mKGJ1ZmZlciwgWyB2YWwgXSwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIGRpcilcbiAgfVxuXG4gIHRocm93IG5ldyBUeXBlRXJyb3IoJ3ZhbCBtdXN0IGJlIHN0cmluZywgbnVtYmVyIG9yIEJ1ZmZlcicpXG59XG5cbmZ1bmN0aW9uIGFycmF5SW5kZXhPZiAoYXJyLCB2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCBkaXIpIHtcbiAgdmFyIGluZGV4U2l6ZSA9IDFcbiAgdmFyIGFyckxlbmd0aCA9IGFyci5sZW5ndGhcbiAgdmFyIHZhbExlbmd0aCA9IHZhbC5sZW5ndGhcblxuICBpZiAoZW5jb2RpbmcgIT09IHVuZGVmaW5lZCkge1xuICAgIGVuY29kaW5nID0gU3RyaW5nKGVuY29kaW5nKS50b0xvd2VyQ2FzZSgpXG4gICAgaWYgKGVuY29kaW5nID09PSAndWNzMicgfHwgZW5jb2RpbmcgPT09ICd1Y3MtMicgfHxcbiAgICAgICAgZW5jb2RpbmcgPT09ICd1dGYxNmxlJyB8fCBlbmNvZGluZyA9PT0gJ3V0Zi0xNmxlJykge1xuICAgICAgaWYgKGFyci5sZW5ndGggPCAyIHx8IHZhbC5sZW5ndGggPCAyKSB7XG4gICAgICAgIHJldHVybiAtMVxuICAgICAgfVxuICAgICAgaW5kZXhTaXplID0gMlxuICAgICAgYXJyTGVuZ3RoIC89IDJcbiAgICAgIHZhbExlbmd0aCAvPSAyXG4gICAgICBieXRlT2Zmc2V0IC89IDJcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZWFkIChidWYsIGkpIHtcbiAgICBpZiAoaW5kZXhTaXplID09PSAxKSB7XG4gICAgICByZXR1cm4gYnVmW2ldXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBidWYucmVhZFVJbnQxNkJFKGkgKiBpbmRleFNpemUpXG4gICAgfVxuICB9XG5cbiAgdmFyIGlcbiAgaWYgKGRpcikge1xuICAgIHZhciBmb3VuZEluZGV4ID0gLTFcbiAgICBmb3IgKGkgPSBieXRlT2Zmc2V0OyBpIDwgYXJyTGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChyZWFkKGFyciwgaSkgPT09IHJlYWQodmFsLCBmb3VuZEluZGV4ID09PSAtMSA/IDAgOiBpIC0gZm91bmRJbmRleCkpIHtcbiAgICAgICAgaWYgKGZvdW5kSW5kZXggPT09IC0xKSBmb3VuZEluZGV4ID0gaVxuICAgICAgICBpZiAoaSAtIGZvdW5kSW5kZXggKyAxID09PSB2YWxMZW5ndGgpIHJldHVybiBmb3VuZEluZGV4ICogaW5kZXhTaXplXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoZm91bmRJbmRleCAhPT0gLTEpIGkgLT0gaSAtIGZvdW5kSW5kZXhcbiAgICAgICAgZm91bmRJbmRleCA9IC0xXG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmIChieXRlT2Zmc2V0ICsgdmFsTGVuZ3RoID4gYXJyTGVuZ3RoKSBieXRlT2Zmc2V0ID0gYXJyTGVuZ3RoIC0gdmFsTGVuZ3RoXG4gICAgZm9yIChpID0gYnl0ZU9mZnNldDsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIHZhciBmb3VuZCA9IHRydWVcbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdmFsTGVuZ3RoOyBqKyspIHtcbiAgICAgICAgaWYgKHJlYWQoYXJyLCBpICsgaikgIT09IHJlYWQodmFsLCBqKSkge1xuICAgICAgICAgIGZvdW5kID0gZmFsc2VcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoZm91bmQpIHJldHVybiBpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIC0xXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuaW5jbHVkZXMgPSBmdW5jdGlvbiBpbmNsdWRlcyAodmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZykge1xuICByZXR1cm4gdGhpcy5pbmRleE9mKHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcpICE9PSAtMVxufVxuXG5CdWZmZXIucHJvdG90eXBlLmluZGV4T2YgPSBmdW5jdGlvbiBpbmRleE9mICh2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nKSB7XG4gIHJldHVybiBiaWRpcmVjdGlvbmFsSW5kZXhPZih0aGlzLCB2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCB0cnVlKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLmxhc3RJbmRleE9mID0gZnVuY3Rpb24gbGFzdEluZGV4T2YgKHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcpIHtcbiAgcmV0dXJuIGJpZGlyZWN0aW9uYWxJbmRleE9mKHRoaXMsIHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIGZhbHNlKVxufVxuXG5mdW5jdGlvbiBoZXhXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIG9mZnNldCA9IE51bWJlcihvZmZzZXQpIHx8IDBcbiAgdmFyIHJlbWFpbmluZyA9IGJ1Zi5sZW5ndGggLSBvZmZzZXRcbiAgaWYgKCFsZW5ndGgpIHtcbiAgICBsZW5ndGggPSByZW1haW5pbmdcbiAgfSBlbHNlIHtcbiAgICBsZW5ndGggPSBOdW1iZXIobGVuZ3RoKVxuICAgIGlmIChsZW5ndGggPiByZW1haW5pbmcpIHtcbiAgICAgIGxlbmd0aCA9IHJlbWFpbmluZ1xuICAgIH1cbiAgfVxuXG4gIC8vIG11c3QgYmUgYW4gZXZlbiBudW1iZXIgb2YgZGlnaXRzXG4gIHZhciBzdHJMZW4gPSBzdHJpbmcubGVuZ3RoXG4gIGlmIChzdHJMZW4gJSAyICE9PSAwKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIGhleCBzdHJpbmcnKVxuXG4gIGlmIChsZW5ndGggPiBzdHJMZW4gLyAyKSB7XG4gICAgbGVuZ3RoID0gc3RyTGVuIC8gMlxuICB9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyArK2kpIHtcbiAgICB2YXIgcGFyc2VkID0gcGFyc2VJbnQoc3RyaW5nLnN1YnN0cihpICogMiwgMiksIDE2KVxuICAgIGlmIChpc05hTihwYXJzZWQpKSByZXR1cm4gaVxuICAgIGJ1ZltvZmZzZXQgKyBpXSA9IHBhcnNlZFxuICB9XG4gIHJldHVybiBpXG59XG5cbmZ1bmN0aW9uIHV0ZjhXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBibGl0QnVmZmVyKHV0ZjhUb0J5dGVzKHN0cmluZywgYnVmLmxlbmd0aCAtIG9mZnNldCksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG59XG5cbmZ1bmN0aW9uIGFzY2lpV3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gYmxpdEJ1ZmZlcihhc2NpaVRvQnl0ZXMoc3RyaW5nKSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbn1cblxuZnVuY3Rpb24gbGF0aW4xV3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gYXNjaWlXcml0ZShidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG59XG5cbmZ1bmN0aW9uIGJhc2U2NFdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGJsaXRCdWZmZXIoYmFzZTY0VG9CeXRlcyhzdHJpbmcpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxufVxuXG5mdW5jdGlvbiB1Y3MyV3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gYmxpdEJ1ZmZlcih1dGYxNmxlVG9CeXRlcyhzdHJpbmcsIGJ1Zi5sZW5ndGggLSBvZmZzZXQpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlID0gZnVuY3Rpb24gd3JpdGUgKHN0cmluZywgb2Zmc2V0LCBsZW5ndGgsIGVuY29kaW5nKSB7XG4gIC8vIEJ1ZmZlciN3cml0ZShzdHJpbmcpXG4gIGlmIChvZmZzZXQgPT09IHVuZGVmaW5lZCkge1xuICAgIGVuY29kaW5nID0gJ3V0ZjgnXG4gICAgbGVuZ3RoID0gdGhpcy5sZW5ndGhcbiAgICBvZmZzZXQgPSAwXG4gIC8vIEJ1ZmZlciN3cml0ZShzdHJpbmcsIGVuY29kaW5nKVxuICB9IGVsc2UgaWYgKGxlbmd0aCA9PT0gdW5kZWZpbmVkICYmIHR5cGVvZiBvZmZzZXQgPT09ICdzdHJpbmcnKSB7XG4gICAgZW5jb2RpbmcgPSBvZmZzZXRcbiAgICBsZW5ndGggPSB0aGlzLmxlbmd0aFxuICAgIG9mZnNldCA9IDBcbiAgLy8gQnVmZmVyI3dyaXRlKHN0cmluZywgb2Zmc2V0WywgbGVuZ3RoXVssIGVuY29kaW5nXSlcbiAgfSBlbHNlIGlmIChpc0Zpbml0ZShvZmZzZXQpKSB7XG4gICAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICAgIGlmIChpc0Zpbml0ZShsZW5ndGgpKSB7XG4gICAgICBsZW5ndGggPSBsZW5ndGggfCAwXG4gICAgICBpZiAoZW5jb2RpbmcgPT09IHVuZGVmaW5lZCkgZW5jb2RpbmcgPSAndXRmOCdcbiAgICB9IGVsc2Uge1xuICAgICAgZW5jb2RpbmcgPSBsZW5ndGhcbiAgICAgIGxlbmd0aCA9IHVuZGVmaW5lZFxuICAgIH1cbiAgLy8gbGVnYWN5IHdyaXRlKHN0cmluZywgZW5jb2RpbmcsIG9mZnNldCwgbGVuZ3RoKSAtIHJlbW92ZSBpbiB2MC4xM1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICdCdWZmZXIud3JpdGUoc3RyaW5nLCBlbmNvZGluZywgb2Zmc2V0WywgbGVuZ3RoXSkgaXMgbm8gbG9uZ2VyIHN1cHBvcnRlZCdcbiAgICApXG4gIH1cblxuICB2YXIgcmVtYWluaW5nID0gdGhpcy5sZW5ndGggLSBvZmZzZXRcbiAgaWYgKGxlbmd0aCA9PT0gdW5kZWZpbmVkIHx8IGxlbmd0aCA+IHJlbWFpbmluZykgbGVuZ3RoID0gcmVtYWluaW5nXG5cbiAgaWYgKChzdHJpbmcubGVuZ3RoID4gMCAmJiAobGVuZ3RoIDwgMCB8fCBvZmZzZXQgPCAwKSkgfHwgb2Zmc2V0ID4gdGhpcy5sZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQXR0ZW1wdCB0byB3cml0ZSBvdXRzaWRlIGJ1ZmZlciBib3VuZHMnKVxuICB9XG5cbiAgaWYgKCFlbmNvZGluZykgZW5jb2RpbmcgPSAndXRmOCdcblxuICB2YXIgbG93ZXJlZENhc2UgPSBmYWxzZVxuICBmb3IgKDs7KSB7XG4gICAgc3dpdGNoIChlbmNvZGluZykge1xuICAgICAgY2FzZSAnaGV4JzpcbiAgICAgICAgcmV0dXJuIGhleFdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGNhc2UgJ3V0ZjgnOlxuICAgICAgY2FzZSAndXRmLTgnOlxuICAgICAgICByZXR1cm4gdXRmOFdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGNhc2UgJ2FzY2lpJzpcbiAgICAgICAgcmV0dXJuIGFzY2lpV3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgY2FzZSAnbGF0aW4xJzpcbiAgICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgICAgIHJldHVybiBsYXRpbjFXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBjYXNlICdiYXNlNjQnOlxuICAgICAgICAvLyBXYXJuaW5nOiBtYXhMZW5ndGggbm90IHRha2VuIGludG8gYWNjb3VudCBpbiBiYXNlNjRXcml0ZVxuICAgICAgICByZXR1cm4gYmFzZTY0V3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgY2FzZSAndWNzMic6XG4gICAgICBjYXNlICd1Y3MtMic6XG4gICAgICBjYXNlICd1dGYxNmxlJzpcbiAgICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgICAgcmV0dXJuIHVjczJXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAobG93ZXJlZENhc2UpIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Vua25vd24gZW5jb2Rpbmc6ICcgKyBlbmNvZGluZylcbiAgICAgICAgZW5jb2RpbmcgPSAoJycgKyBlbmNvZGluZykudG9Mb3dlckNhc2UoKVxuICAgICAgICBsb3dlcmVkQ2FzZSA9IHRydWVcbiAgICB9XG4gIH1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS50b0pTT04gPSBmdW5jdGlvbiB0b0pTT04gKCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6ICdCdWZmZXInLFxuICAgIGRhdGE6IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHRoaXMuX2FyciB8fCB0aGlzLCAwKVxuICB9XG59XG5cbmZ1bmN0aW9uIGJhc2U2NFNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgaWYgKHN0YXJ0ID09PSAwICYmIGVuZCA9PT0gYnVmLmxlbmd0aCkge1xuICAgIHJldHVybiBiYXNlNjQuZnJvbUJ5dGVBcnJheShidWYpXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGJhc2U2NC5mcm9tQnl0ZUFycmF5KGJ1Zi5zbGljZShzdGFydCwgZW5kKSlcbiAgfVxufVxuXG5mdW5jdGlvbiB1dGY4U2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICBlbmQgPSBNYXRoLm1pbihidWYubGVuZ3RoLCBlbmQpXG4gIHZhciByZXMgPSBbXVxuXG4gIHZhciBpID0gc3RhcnRcbiAgd2hpbGUgKGkgPCBlbmQpIHtcbiAgICB2YXIgZmlyc3RCeXRlID0gYnVmW2ldXG4gICAgdmFyIGNvZGVQb2ludCA9IG51bGxcbiAgICB2YXIgYnl0ZXNQZXJTZXF1ZW5jZSA9IChmaXJzdEJ5dGUgPiAweEVGKSA/IDRcbiAgICAgIDogKGZpcnN0Qnl0ZSA+IDB4REYpID8gM1xuICAgICAgOiAoZmlyc3RCeXRlID4gMHhCRikgPyAyXG4gICAgICA6IDFcblxuICAgIGlmIChpICsgYnl0ZXNQZXJTZXF1ZW5jZSA8PSBlbmQpIHtcbiAgICAgIHZhciBzZWNvbmRCeXRlLCB0aGlyZEJ5dGUsIGZvdXJ0aEJ5dGUsIHRlbXBDb2RlUG9pbnRcblxuICAgICAgc3dpdGNoIChieXRlc1BlclNlcXVlbmNlKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBpZiAoZmlyc3RCeXRlIDwgMHg4MCkge1xuICAgICAgICAgICAgY29kZVBvaW50ID0gZmlyc3RCeXRlXG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBzZWNvbmRCeXRlID0gYnVmW2kgKyAxXVxuICAgICAgICAgIGlmICgoc2Vjb25kQnl0ZSAmIDB4QzApID09PSAweDgwKSB7XG4gICAgICAgICAgICB0ZW1wQ29kZVBvaW50ID0gKGZpcnN0Qnl0ZSAmIDB4MUYpIDw8IDB4NiB8IChzZWNvbmRCeXRlICYgMHgzRilcbiAgICAgICAgICAgIGlmICh0ZW1wQ29kZVBvaW50ID4gMHg3Rikge1xuICAgICAgICAgICAgICBjb2RlUG9pbnQgPSB0ZW1wQ29kZVBvaW50XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBzZWNvbmRCeXRlID0gYnVmW2kgKyAxXVxuICAgICAgICAgIHRoaXJkQnl0ZSA9IGJ1ZltpICsgMl1cbiAgICAgICAgICBpZiAoKHNlY29uZEJ5dGUgJiAweEMwKSA9PT0gMHg4MCAmJiAodGhpcmRCeXRlICYgMHhDMCkgPT09IDB4ODApIHtcbiAgICAgICAgICAgIHRlbXBDb2RlUG9pbnQgPSAoZmlyc3RCeXRlICYgMHhGKSA8PCAweEMgfCAoc2Vjb25kQnl0ZSAmIDB4M0YpIDw8IDB4NiB8ICh0aGlyZEJ5dGUgJiAweDNGKVxuICAgICAgICAgICAgaWYgKHRlbXBDb2RlUG9pbnQgPiAweDdGRiAmJiAodGVtcENvZGVQb2ludCA8IDB4RDgwMCB8fCB0ZW1wQ29kZVBvaW50ID4gMHhERkZGKSkge1xuICAgICAgICAgICAgICBjb2RlUG9pbnQgPSB0ZW1wQ29kZVBvaW50XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBzZWNvbmRCeXRlID0gYnVmW2kgKyAxXVxuICAgICAgICAgIHRoaXJkQnl0ZSA9IGJ1ZltpICsgMl1cbiAgICAgICAgICBmb3VydGhCeXRlID0gYnVmW2kgKyAzXVxuICAgICAgICAgIGlmICgoc2Vjb25kQnl0ZSAmIDB4QzApID09PSAweDgwICYmICh0aGlyZEJ5dGUgJiAweEMwKSA9PT0gMHg4MCAmJiAoZm91cnRoQnl0ZSAmIDB4QzApID09PSAweDgwKSB7XG4gICAgICAgICAgICB0ZW1wQ29kZVBvaW50ID0gKGZpcnN0Qnl0ZSAmIDB4RikgPDwgMHgxMiB8IChzZWNvbmRCeXRlICYgMHgzRikgPDwgMHhDIHwgKHRoaXJkQnl0ZSAmIDB4M0YpIDw8IDB4NiB8IChmb3VydGhCeXRlICYgMHgzRilcbiAgICAgICAgICAgIGlmICh0ZW1wQ29kZVBvaW50ID4gMHhGRkZGICYmIHRlbXBDb2RlUG9pbnQgPCAweDExMDAwMCkge1xuICAgICAgICAgICAgICBjb2RlUG9pbnQgPSB0ZW1wQ29kZVBvaW50XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChjb2RlUG9pbnQgPT09IG51bGwpIHtcbiAgICAgIC8vIHdlIGRpZCBub3QgZ2VuZXJhdGUgYSB2YWxpZCBjb2RlUG9pbnQgc28gaW5zZXJ0IGFcbiAgICAgIC8vIHJlcGxhY2VtZW50IGNoYXIgKFUrRkZGRCkgYW5kIGFkdmFuY2Ugb25seSAxIGJ5dGVcbiAgICAgIGNvZGVQb2ludCA9IDB4RkZGRFxuICAgICAgYnl0ZXNQZXJTZXF1ZW5jZSA9IDFcbiAgICB9IGVsc2UgaWYgKGNvZGVQb2ludCA+IDB4RkZGRikge1xuICAgICAgLy8gZW5jb2RlIHRvIHV0ZjE2IChzdXJyb2dhdGUgcGFpciBkYW5jZSlcbiAgICAgIGNvZGVQb2ludCAtPSAweDEwMDAwXG4gICAgICByZXMucHVzaChjb2RlUG9pbnQgPj4+IDEwICYgMHgzRkYgfCAweEQ4MDApXG4gICAgICBjb2RlUG9pbnQgPSAweERDMDAgfCBjb2RlUG9pbnQgJiAweDNGRlxuICAgIH1cblxuICAgIHJlcy5wdXNoKGNvZGVQb2ludClcbiAgICBpICs9IGJ5dGVzUGVyU2VxdWVuY2VcbiAgfVxuXG4gIHJldHVybiBkZWNvZGVDb2RlUG9pbnRzQXJyYXkocmVzKVxufVxuXG4vLyBCYXNlZCBvbiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yMjc0NzI3Mi82ODA3NDIsIHRoZSBicm93c2VyIHdpdGhcbi8vIHRoZSBsb3dlc3QgbGltaXQgaXMgQ2hyb21lLCB3aXRoIDB4MTAwMDAgYXJncy5cbi8vIFdlIGdvIDEgbWFnbml0dWRlIGxlc3MsIGZvciBzYWZldHlcbnZhciBNQVhfQVJHVU1FTlRTX0xFTkdUSCA9IDB4MTAwMFxuXG5mdW5jdGlvbiBkZWNvZGVDb2RlUG9pbnRzQXJyYXkgKGNvZGVQb2ludHMpIHtcbiAgdmFyIGxlbiA9IGNvZGVQb2ludHMubGVuZ3RoXG4gIGlmIChsZW4gPD0gTUFYX0FSR1VNRU5UU19MRU5HVEgpIHtcbiAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShTdHJpbmcsIGNvZGVQb2ludHMpIC8vIGF2b2lkIGV4dHJhIHNsaWNlKClcbiAgfVxuXG4gIC8vIERlY29kZSBpbiBjaHVua3MgdG8gYXZvaWQgXCJjYWxsIHN0YWNrIHNpemUgZXhjZWVkZWRcIi5cbiAgdmFyIHJlcyA9ICcnXG4gIHZhciBpID0gMFxuICB3aGlsZSAoaSA8IGxlbikge1xuICAgIHJlcyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KFxuICAgICAgU3RyaW5nLFxuICAgICAgY29kZVBvaW50cy5zbGljZShpLCBpICs9IE1BWF9BUkdVTUVOVFNfTEVOR1RIKVxuICAgIClcbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbmZ1bmN0aW9uIGFzY2lpU2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICB2YXIgcmV0ID0gJydcbiAgZW5kID0gTWF0aC5taW4oYnVmLmxlbmd0aCwgZW5kKVxuXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgKytpKSB7XG4gICAgcmV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnVmW2ldICYgMHg3RilcbiAgfVxuICByZXR1cm4gcmV0XG59XG5cbmZ1bmN0aW9uIGxhdGluMVNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIHJldCA9ICcnXG4gIGVuZCA9IE1hdGgubWluKGJ1Zi5sZW5ndGgsIGVuZClcblxuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7ICsraSkge1xuICAgIHJldCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ1ZltpXSlcbiAgfVxuICByZXR1cm4gcmV0XG59XG5cbmZ1bmN0aW9uIGhleFNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGxlbiA9IGJ1Zi5sZW5ndGhcblxuICBpZiAoIXN0YXJ0IHx8IHN0YXJ0IDwgMCkgc3RhcnQgPSAwXG4gIGlmICghZW5kIHx8IGVuZCA8IDAgfHwgZW5kID4gbGVuKSBlbmQgPSBsZW5cblxuICB2YXIgb3V0ID0gJydcbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyArK2kpIHtcbiAgICBvdXQgKz0gdG9IZXgoYnVmW2ldKVxuICB9XG4gIHJldHVybiBvdXRcbn1cblxuZnVuY3Rpb24gdXRmMTZsZVNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGJ5dGVzID0gYnVmLnNsaWNlKHN0YXJ0LCBlbmQpXG4gIHZhciByZXMgPSAnJ1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGJ5dGVzLmxlbmd0aDsgaSArPSAyKSB7XG4gICAgcmVzICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnl0ZXNbaV0gKyBieXRlc1tpICsgMV0gKiAyNTYpXG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG5CdWZmZXIucHJvdG90eXBlLnNsaWNlID0gZnVuY3Rpb24gc2xpY2UgKHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGxlbiA9IHRoaXMubGVuZ3RoXG4gIHN0YXJ0ID0gfn5zdGFydFxuICBlbmQgPSBlbmQgPT09IHVuZGVmaW5lZCA/IGxlbiA6IH5+ZW5kXG5cbiAgaWYgKHN0YXJ0IDwgMCkge1xuICAgIHN0YXJ0ICs9IGxlblxuICAgIGlmIChzdGFydCA8IDApIHN0YXJ0ID0gMFxuICB9IGVsc2UgaWYgKHN0YXJ0ID4gbGVuKSB7XG4gICAgc3RhcnQgPSBsZW5cbiAgfVxuXG4gIGlmIChlbmQgPCAwKSB7XG4gICAgZW5kICs9IGxlblxuICAgIGlmIChlbmQgPCAwKSBlbmQgPSAwXG4gIH0gZWxzZSBpZiAoZW5kID4gbGVuKSB7XG4gICAgZW5kID0gbGVuXG4gIH1cblxuICBpZiAoZW5kIDwgc3RhcnQpIGVuZCA9IHN0YXJ0XG5cbiAgdmFyIG5ld0J1ZlxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICBuZXdCdWYgPSB0aGlzLnN1YmFycmF5KHN0YXJ0LCBlbmQpXG4gICAgbmV3QnVmLl9fcHJvdG9fXyA9IEJ1ZmZlci5wcm90b3R5cGVcbiAgfSBlbHNlIHtcbiAgICB2YXIgc2xpY2VMZW4gPSBlbmQgLSBzdGFydFxuICAgIG5ld0J1ZiA9IG5ldyBCdWZmZXIoc2xpY2VMZW4sIHVuZGVmaW5lZClcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNsaWNlTGVuOyArK2kpIHtcbiAgICAgIG5ld0J1ZltpXSA9IHRoaXNbaSArIHN0YXJ0XVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuZXdCdWZcbn1cblxuLypcbiAqIE5lZWQgdG8gbWFrZSBzdXJlIHRoYXQgYnVmZmVyIGlzbid0IHRyeWluZyB0byB3cml0ZSBvdXQgb2YgYm91bmRzLlxuICovXG5mdW5jdGlvbiBjaGVja09mZnNldCAob2Zmc2V0LCBleHQsIGxlbmd0aCkge1xuICBpZiAoKG9mZnNldCAlIDEpICE9PSAwIHx8IG9mZnNldCA8IDApIHRocm93IG5ldyBSYW5nZUVycm9yKCdvZmZzZXQgaXMgbm90IHVpbnQnKVxuICBpZiAob2Zmc2V0ICsgZXh0ID4gbGVuZ3RoKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignVHJ5aW5nIHRvIGFjY2VzcyBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnRMRSA9IGZ1bmN0aW9uIHJlYWRVSW50TEUgKG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCBieXRlTGVuZ3RoLCB0aGlzLmxlbmd0aClcblxuICB2YXIgdmFsID0gdGhpc1tvZmZzZXRdXG4gIHZhciBtdWwgPSAxXG4gIHZhciBpID0gMFxuICB3aGlsZSAoKytpIDwgYnl0ZUxlbmd0aCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHZhbCArPSB0aGlzW29mZnNldCArIGldICogbXVsXG4gIH1cblxuICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnRCRSA9IGZ1bmN0aW9uIHJlYWRVSW50QkUgKG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCB8IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGNoZWNrT2Zmc2V0KG9mZnNldCwgYnl0ZUxlbmd0aCwgdGhpcy5sZW5ndGgpXG4gIH1cblxuICB2YXIgdmFsID0gdGhpc1tvZmZzZXQgKyAtLWJ5dGVMZW5ndGhdXG4gIHZhciBtdWwgPSAxXG4gIHdoaWxlIChieXRlTGVuZ3RoID4gMCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHZhbCArPSB0aGlzW29mZnNldCArIC0tYnl0ZUxlbmd0aF0gKiBtdWxcbiAgfVxuXG4gIHJldHVybiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDggPSBmdW5jdGlvbiByZWFkVUludDggKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAxLCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIHRoaXNbb2Zmc2V0XVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MTZMRSA9IGZ1bmN0aW9uIHJlYWRVSW50MTZMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDIsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gdGhpc1tvZmZzZXRdIHwgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgOClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDE2QkUgPSBmdW5jdGlvbiByZWFkVUludDE2QkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAyLCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuICh0aGlzW29mZnNldF0gPDwgOCkgfCB0aGlzW29mZnNldCArIDFdXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQzMkxFID0gZnVuY3Rpb24gcmVhZFVJbnQzMkxFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG5cbiAgcmV0dXJuICgodGhpc1tvZmZzZXRdKSB8XG4gICAgICAodGhpc1tvZmZzZXQgKyAxXSA8PCA4KSB8XG4gICAgICAodGhpc1tvZmZzZXQgKyAyXSA8PCAxNikpICtcbiAgICAgICh0aGlzW29mZnNldCArIDNdICogMHgxMDAwMDAwKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MzJCRSA9IGZ1bmN0aW9uIHJlYWRVSW50MzJCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuXG4gIHJldHVybiAodGhpc1tvZmZzZXRdICogMHgxMDAwMDAwKSArXG4gICAgKCh0aGlzW29mZnNldCArIDFdIDw8IDE2KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgMl0gPDwgOCkgfFxuICAgIHRoaXNbb2Zmc2V0ICsgM10pXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludExFID0gZnVuY3Rpb24gcmVhZEludExFIChvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgYnl0ZUxlbmd0aCwgdGhpcy5sZW5ndGgpXG5cbiAgdmFyIHZhbCA9IHRoaXNbb2Zmc2V0XVxuICB2YXIgbXVsID0gMVxuICB2YXIgaSA9IDBcbiAgd2hpbGUgKCsraSA8IGJ5dGVMZW5ndGggJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB2YWwgKz0gdGhpc1tvZmZzZXQgKyBpXSAqIG11bFxuICB9XG4gIG11bCAqPSAweDgwXG5cbiAgaWYgKHZhbCA+PSBtdWwpIHZhbCAtPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aClcblxuICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludEJFID0gZnVuY3Rpb24gcmVhZEludEJFIChvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgYnl0ZUxlbmd0aCwgdGhpcy5sZW5ndGgpXG5cbiAgdmFyIGkgPSBieXRlTGVuZ3RoXG4gIHZhciBtdWwgPSAxXG4gIHZhciB2YWwgPSB0aGlzW29mZnNldCArIC0taV1cbiAgd2hpbGUgKGkgPiAwICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdmFsICs9IHRoaXNbb2Zmc2V0ICsgLS1pXSAqIG11bFxuICB9XG4gIG11bCAqPSAweDgwXG5cbiAgaWYgKHZhbCA+PSBtdWwpIHZhbCAtPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aClcblxuICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDggPSBmdW5jdGlvbiByZWFkSW50OCAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDEsIHRoaXMubGVuZ3RoKVxuICBpZiAoISh0aGlzW29mZnNldF0gJiAweDgwKSkgcmV0dXJuICh0aGlzW29mZnNldF0pXG4gIHJldHVybiAoKDB4ZmYgLSB0aGlzW29mZnNldF0gKyAxKSAqIC0xKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQxNkxFID0gZnVuY3Rpb24gcmVhZEludDE2TEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAyLCB0aGlzLmxlbmd0aClcbiAgdmFyIHZhbCA9IHRoaXNbb2Zmc2V0XSB8ICh0aGlzW29mZnNldCArIDFdIDw8IDgpXG4gIHJldHVybiAodmFsICYgMHg4MDAwKSA/IHZhbCB8IDB4RkZGRjAwMDAgOiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MTZCRSA9IGZ1bmN0aW9uIHJlYWRJbnQxNkJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMiwgdGhpcy5sZW5ndGgpXG4gIHZhciB2YWwgPSB0aGlzW29mZnNldCArIDFdIHwgKHRoaXNbb2Zmc2V0XSA8PCA4KVxuICByZXR1cm4gKHZhbCAmIDB4ODAwMCkgPyB2YWwgfCAweEZGRkYwMDAwIDogdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDMyTEUgPSBmdW5jdGlvbiByZWFkSW50MzJMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuXG4gIHJldHVybiAodGhpc1tvZmZzZXRdKSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgOCkgfFxuICAgICh0aGlzW29mZnNldCArIDJdIDw8IDE2KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgM10gPDwgMjQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDMyQkUgPSBmdW5jdGlvbiByZWFkSW50MzJCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuXG4gIHJldHVybiAodGhpc1tvZmZzZXRdIDw8IDI0KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgMTYpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAyXSA8PCA4KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgM10pXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEZsb2F0TEUgPSBmdW5jdGlvbiByZWFkRmxvYXRMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gaWVlZTc1NC5yZWFkKHRoaXMsIG9mZnNldCwgdHJ1ZSwgMjMsIDQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEZsb2F0QkUgPSBmdW5jdGlvbiByZWFkRmxvYXRCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gaWVlZTc1NC5yZWFkKHRoaXMsIG9mZnNldCwgZmFsc2UsIDIzLCA0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWREb3VibGVMRSA9IGZ1bmN0aW9uIHJlYWREb3VibGVMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDgsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gaWVlZTc1NC5yZWFkKHRoaXMsIG9mZnNldCwgdHJ1ZSwgNTIsIDgpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZERvdWJsZUJFID0gZnVuY3Rpb24gcmVhZERvdWJsZUJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgOCwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiBpZWVlNzU0LnJlYWQodGhpcywgb2Zmc2V0LCBmYWxzZSwgNTIsIDgpXG59XG5cbmZ1bmN0aW9uIGNoZWNrSW50IChidWYsIHZhbHVlLCBvZmZzZXQsIGV4dCwgbWF4LCBtaW4pIHtcbiAgaWYgKCFCdWZmZXIuaXNCdWZmZXIoYnVmKSkgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJidWZmZXJcIiBhcmd1bWVudCBtdXN0IGJlIGEgQnVmZmVyIGluc3RhbmNlJylcbiAgaWYgKHZhbHVlID4gbWF4IHx8IHZhbHVlIDwgbWluKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignXCJ2YWx1ZVwiIGFyZ3VtZW50IGlzIG91dCBvZiBib3VuZHMnKVxuICBpZiAob2Zmc2V0ICsgZXh0ID4gYnVmLmxlbmd0aCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0luZGV4IG91dCBvZiByYW5nZScpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50TEUgPSBmdW5jdGlvbiB3cml0ZVVJbnRMRSAodmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCB8IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIHZhciBtYXhCeXRlcyA9IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoKSAtIDFcbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBtYXhCeXRlcywgMClcbiAgfVxuXG4gIHZhciBtdWwgPSAxXG4gIHZhciBpID0gMFxuICB0aGlzW29mZnNldF0gPSB2YWx1ZSAmIDB4RkZcbiAgd2hpbGUgKCsraSA8IGJ5dGVMZW5ndGggJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB0aGlzW29mZnNldCArIGldID0gKHZhbHVlIC8gbXVsKSAmIDB4RkZcbiAgfVxuXG4gIHJldHVybiBvZmZzZXQgKyBieXRlTGVuZ3RoXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50QkUgPSBmdW5jdGlvbiB3cml0ZVVJbnRCRSAodmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCB8IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIHZhciBtYXhCeXRlcyA9IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoKSAtIDFcbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBtYXhCeXRlcywgMClcbiAgfVxuXG4gIHZhciBpID0gYnl0ZUxlbmd0aCAtIDFcbiAgdmFyIG11bCA9IDFcbiAgdGhpc1tvZmZzZXQgKyBpXSA9IHZhbHVlICYgMHhGRlxuICB3aGlsZSAoLS1pID49IDAgJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB0aGlzW29mZnNldCArIGldID0gKHZhbHVlIC8gbXVsKSAmIDB4RkZcbiAgfVxuXG4gIHJldHVybiBvZmZzZXQgKyBieXRlTGVuZ3RoXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50OCA9IGZ1bmN0aW9uIHdyaXRlVUludDggKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMSwgMHhmZiwgMClcbiAgaWYgKCFCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkgdmFsdWUgPSBNYXRoLmZsb29yKHZhbHVlKVxuICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICByZXR1cm4gb2Zmc2V0ICsgMVxufVxuXG5mdW5jdGlvbiBvYmplY3RXcml0ZVVJbnQxNiAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4pIHtcbiAgaWYgKHZhbHVlIDwgMCkgdmFsdWUgPSAweGZmZmYgKyB2YWx1ZSArIDFcbiAgZm9yICh2YXIgaSA9IDAsIGogPSBNYXRoLm1pbihidWYubGVuZ3RoIC0gb2Zmc2V0LCAyKTsgaSA8IGo7ICsraSkge1xuICAgIGJ1ZltvZmZzZXQgKyBpXSA9ICh2YWx1ZSAmICgweGZmIDw8ICg4ICogKGxpdHRsZUVuZGlhbiA/IGkgOiAxIC0gaSkpKSkgPj4+XG4gICAgICAobGl0dGxlRW5kaWFuID8gaSA6IDEgLSBpKSAqIDhcbiAgfVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDE2TEUgPSBmdW5jdGlvbiB3cml0ZVVJbnQxNkxFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDIsIDB4ZmZmZiwgMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiA4KVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDE2KHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDJcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQxNkJFID0gZnVuY3Rpb24gd3JpdGVVSW50MTZCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAyLCAweGZmZmYsIDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlICYgMHhmZilcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQxNih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgMlxufVxuXG5mdW5jdGlvbiBvYmplY3RXcml0ZVVJbnQzMiAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4pIHtcbiAgaWYgKHZhbHVlIDwgMCkgdmFsdWUgPSAweGZmZmZmZmZmICsgdmFsdWUgKyAxXG4gIGZvciAodmFyIGkgPSAwLCBqID0gTWF0aC5taW4oYnVmLmxlbmd0aCAtIG9mZnNldCwgNCk7IGkgPCBqOyArK2kpIHtcbiAgICBidWZbb2Zmc2V0ICsgaV0gPSAodmFsdWUgPj4+IChsaXR0bGVFbmRpYW4gPyBpIDogMyAtIGkpICogOCkgJiAweGZmXG4gIH1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQzMkxFID0gZnVuY3Rpb24gd3JpdGVVSW50MzJMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCA0LCAweGZmZmZmZmZmLCAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldCArIDNdID0gKHZhbHVlID4+PiAyNClcbiAgICB0aGlzW29mZnNldCArIDJdID0gKHZhbHVlID4+PiAxNilcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MzIodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDMyQkUgPSBmdW5jdGlvbiB3cml0ZVVJbnQzMkJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDQsIDB4ZmZmZmZmZmYsIDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSA+Pj4gMjQpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gMTYpXG4gICAgdGhpc1tvZmZzZXQgKyAyXSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldCArIDNdID0gKHZhbHVlICYgMHhmZilcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQzMih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50TEUgPSBmdW5jdGlvbiB3cml0ZUludExFICh2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICB2YXIgbGltaXQgPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aCAtIDEpXG5cbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBsaW1pdCAtIDEsIC1saW1pdClcbiAgfVxuXG4gIHZhciBpID0gMFxuICB2YXIgbXVsID0gMVxuICB2YXIgc3ViID0gMFxuICB0aGlzW29mZnNldF0gPSB2YWx1ZSAmIDB4RkZcbiAgd2hpbGUgKCsraSA8IGJ5dGVMZW5ndGggJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICBpZiAodmFsdWUgPCAwICYmIHN1YiA9PT0gMCAmJiB0aGlzW29mZnNldCArIGkgLSAxXSAhPT0gMCkge1xuICAgICAgc3ViID0gMVxuICAgIH1cbiAgICB0aGlzW29mZnNldCArIGldID0gKCh2YWx1ZSAvIG11bCkgPj4gMCkgLSBzdWIgJiAweEZGXG4gIH1cblxuICByZXR1cm4gb2Zmc2V0ICsgYnl0ZUxlbmd0aFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50QkUgPSBmdW5jdGlvbiB3cml0ZUludEJFICh2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICB2YXIgbGltaXQgPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aCAtIDEpXG5cbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBsaW1pdCAtIDEsIC1saW1pdClcbiAgfVxuXG4gIHZhciBpID0gYnl0ZUxlbmd0aCAtIDFcbiAgdmFyIG11bCA9IDFcbiAgdmFyIHN1YiA9IDBcbiAgdGhpc1tvZmZzZXQgKyBpXSA9IHZhbHVlICYgMHhGRlxuICB3aGlsZSAoLS1pID49IDAgJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICBpZiAodmFsdWUgPCAwICYmIHN1YiA9PT0gMCAmJiB0aGlzW29mZnNldCArIGkgKyAxXSAhPT0gMCkge1xuICAgICAgc3ViID0gMVxuICAgIH1cbiAgICB0aGlzW29mZnNldCArIGldID0gKCh2YWx1ZSAvIG11bCkgPj4gMCkgLSBzdWIgJiAweEZGXG4gIH1cblxuICByZXR1cm4gb2Zmc2V0ICsgYnl0ZUxlbmd0aFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50OCA9IGZ1bmN0aW9uIHdyaXRlSW50OCAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAxLCAweDdmLCAtMHg4MClcbiAgaWYgKCFCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkgdmFsdWUgPSBNYXRoLmZsb29yKHZhbHVlKVxuICBpZiAodmFsdWUgPCAwKSB2YWx1ZSA9IDB4ZmYgKyB2YWx1ZSArIDFcbiAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgcmV0dXJuIG9mZnNldCArIDFcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDE2TEUgPSBmdW5jdGlvbiB3cml0ZUludDE2TEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMiwgMHg3ZmZmLCAtMHg4MDAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDgpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MTYodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgMlxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MTZCRSA9IGZ1bmN0aW9uIHdyaXRlSW50MTZCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAyLCAweDdmZmYsIC0weDgwMDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlICYgMHhmZilcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQxNih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgMlxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MzJMRSA9IGZ1bmN0aW9uIHdyaXRlSW50MzJMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCA0LCAweDdmZmZmZmZmLCAtMHg4MDAwMDAwMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0ICsgMl0gPSAodmFsdWUgPj4+IDE2KVxuICAgIHRoaXNbb2Zmc2V0ICsgM10gPSAodmFsdWUgPj4+IDI0KVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDMyKHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDMyQkUgPSBmdW5jdGlvbiB3cml0ZUludDMyQkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgNCwgMHg3ZmZmZmZmZiwgLTB4ODAwMDAwMDApXG4gIGlmICh2YWx1ZSA8IDApIHZhbHVlID0gMHhmZmZmZmZmZiArIHZhbHVlICsgMVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgPj4+IDI0KVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDE2KVxuICAgIHRoaXNbb2Zmc2V0ICsgMl0gPSAodmFsdWUgPj4+IDgpXG4gICAgdGhpc1tvZmZzZXQgKyAzXSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MzIodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuZnVuY3Rpb24gY2hlY2tJRUVFNzU0IChidWYsIHZhbHVlLCBvZmZzZXQsIGV4dCwgbWF4LCBtaW4pIHtcbiAgaWYgKG9mZnNldCArIGV4dCA+IGJ1Zi5sZW5ndGgpIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbmRleCBvdXQgb2YgcmFuZ2UnKVxuICBpZiAob2Zmc2V0IDwgMCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0luZGV4IG91dCBvZiByYW5nZScpXG59XG5cbmZ1bmN0aW9uIHdyaXRlRmxvYXQgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgY2hlY2tJRUVFNzU0KGJ1ZiwgdmFsdWUsIG9mZnNldCwgNCwgMy40MDI4MjM0NjYzODUyODg2ZSszOCwgLTMuNDAyODIzNDY2Mzg1Mjg4NmUrMzgpXG4gIH1cbiAgaWVlZTc1NC53cml0ZShidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgMjMsIDQpXG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVGbG9hdExFID0gZnVuY3Rpb24gd3JpdGVGbG9hdExFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gd3JpdGVGbG9hdCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUZsb2F0QkUgPSBmdW5jdGlvbiB3cml0ZUZsb2F0QkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiB3cml0ZUZsb2F0KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuZnVuY3Rpb24gd3JpdGVEb3VibGUgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgY2hlY2tJRUVFNzU0KGJ1ZiwgdmFsdWUsIG9mZnNldCwgOCwgMS43OTc2OTMxMzQ4NjIzMTU3RSszMDgsIC0xLjc5NzY5MzEzNDg2MjMxNTdFKzMwOClcbiAgfVxuICBpZWVlNzU0LndyaXRlKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCA1MiwgOClcbiAgcmV0dXJuIG9mZnNldCArIDhcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZURvdWJsZUxFID0gZnVuY3Rpb24gd3JpdGVEb3VibGVMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIHdyaXRlRG91YmxlKHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRG91YmxlQkUgPSBmdW5jdGlvbiB3cml0ZURvdWJsZUJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gd3JpdGVEb3VibGUodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG4vLyBjb3B5KHRhcmdldEJ1ZmZlciwgdGFyZ2V0U3RhcnQ9MCwgc291cmNlU3RhcnQ9MCwgc291cmNlRW5kPWJ1ZmZlci5sZW5ndGgpXG5CdWZmZXIucHJvdG90eXBlLmNvcHkgPSBmdW5jdGlvbiBjb3B5ICh0YXJnZXQsIHRhcmdldFN0YXJ0LCBzdGFydCwgZW5kKSB7XG4gIGlmICghc3RhcnQpIHN0YXJ0ID0gMFxuICBpZiAoIWVuZCAmJiBlbmQgIT09IDApIGVuZCA9IHRoaXMubGVuZ3RoXG4gIGlmICh0YXJnZXRTdGFydCA+PSB0YXJnZXQubGVuZ3RoKSB0YXJnZXRTdGFydCA9IHRhcmdldC5sZW5ndGhcbiAgaWYgKCF0YXJnZXRTdGFydCkgdGFyZ2V0U3RhcnQgPSAwXG4gIGlmIChlbmQgPiAwICYmIGVuZCA8IHN0YXJ0KSBlbmQgPSBzdGFydFxuXG4gIC8vIENvcHkgMCBieXRlczsgd2UncmUgZG9uZVxuICBpZiAoZW5kID09PSBzdGFydCkgcmV0dXJuIDBcbiAgaWYgKHRhcmdldC5sZW5ndGggPT09IDAgfHwgdGhpcy5sZW5ndGggPT09IDApIHJldHVybiAwXG5cbiAgLy8gRmF0YWwgZXJyb3IgY29uZGl0aW9uc1xuICBpZiAodGFyZ2V0U3RhcnQgPCAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3RhcmdldFN0YXJ0IG91dCBvZiBib3VuZHMnKVxuICB9XG4gIGlmIChzdGFydCA8IDAgfHwgc3RhcnQgPj0gdGhpcy5sZW5ndGgpIHRocm93IG5ldyBSYW5nZUVycm9yKCdzb3VyY2VTdGFydCBvdXQgb2YgYm91bmRzJylcbiAgaWYgKGVuZCA8IDApIHRocm93IG5ldyBSYW5nZUVycm9yKCdzb3VyY2VFbmQgb3V0IG9mIGJvdW5kcycpXG5cbiAgLy8gQXJlIHdlIG9vYj9cbiAgaWYgKGVuZCA+IHRoaXMubGVuZ3RoKSBlbmQgPSB0aGlzLmxlbmd0aFxuICBpZiAodGFyZ2V0Lmxlbmd0aCAtIHRhcmdldFN0YXJ0IDwgZW5kIC0gc3RhcnQpIHtcbiAgICBlbmQgPSB0YXJnZXQubGVuZ3RoIC0gdGFyZ2V0U3RhcnQgKyBzdGFydFxuICB9XG5cbiAgdmFyIGxlbiA9IGVuZCAtIHN0YXJ0XG4gIHZhciBpXG5cbiAgaWYgKHRoaXMgPT09IHRhcmdldCAmJiBzdGFydCA8IHRhcmdldFN0YXJ0ICYmIHRhcmdldFN0YXJ0IDwgZW5kKSB7XG4gICAgLy8gZGVzY2VuZGluZyBjb3B5IGZyb20gZW5kXG4gICAgZm9yIChpID0gbGVuIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgIHRhcmdldFtpICsgdGFyZ2V0U3RhcnRdID0gdGhpc1tpICsgc3RhcnRdXG4gICAgfVxuICB9IGVsc2UgaWYgKGxlbiA8IDEwMDAgfHwgIUJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgLy8gYXNjZW5kaW5nIGNvcHkgZnJvbSBzdGFydFxuICAgIGZvciAoaSA9IDA7IGkgPCBsZW47ICsraSkge1xuICAgICAgdGFyZ2V0W2kgKyB0YXJnZXRTdGFydF0gPSB0aGlzW2kgKyBzdGFydF1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgVWludDhBcnJheS5wcm90b3R5cGUuc2V0LmNhbGwoXG4gICAgICB0YXJnZXQsXG4gICAgICB0aGlzLnN1YmFycmF5KHN0YXJ0LCBzdGFydCArIGxlbiksXG4gICAgICB0YXJnZXRTdGFydFxuICAgIClcbiAgfVxuXG4gIHJldHVybiBsZW5cbn1cblxuLy8gVXNhZ2U6XG4vLyAgICBidWZmZXIuZmlsbChudW1iZXJbLCBvZmZzZXRbLCBlbmRdXSlcbi8vICAgIGJ1ZmZlci5maWxsKGJ1ZmZlclssIG9mZnNldFssIGVuZF1dKVxuLy8gICAgYnVmZmVyLmZpbGwoc3RyaW5nWywgb2Zmc2V0WywgZW5kXV1bLCBlbmNvZGluZ10pXG5CdWZmZXIucHJvdG90eXBlLmZpbGwgPSBmdW5jdGlvbiBmaWxsICh2YWwsIHN0YXJ0LCBlbmQsIGVuY29kaW5nKSB7XG4gIC8vIEhhbmRsZSBzdHJpbmcgY2FzZXM6XG4gIGlmICh0eXBlb2YgdmFsID09PSAnc3RyaW5nJykge1xuICAgIGlmICh0eXBlb2Ygc3RhcnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBlbmNvZGluZyA9IHN0YXJ0XG4gICAgICBzdGFydCA9IDBcbiAgICAgIGVuZCA9IHRoaXMubGVuZ3RoXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZW5kID09PSAnc3RyaW5nJykge1xuICAgICAgZW5jb2RpbmcgPSBlbmRcbiAgICAgIGVuZCA9IHRoaXMubGVuZ3RoXG4gICAgfVxuICAgIGlmICh2YWwubGVuZ3RoID09PSAxKSB7XG4gICAgICB2YXIgY29kZSA9IHZhbC5jaGFyQ29kZUF0KDApXG4gICAgICBpZiAoY29kZSA8IDI1Nikge1xuICAgICAgICB2YWwgPSBjb2RlXG4gICAgICB9XG4gICAgfVxuICAgIGlmIChlbmNvZGluZyAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiBlbmNvZGluZyAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2VuY29kaW5nIG11c3QgYmUgYSBzdHJpbmcnKVxuICAgIH1cbiAgICBpZiAodHlwZW9mIGVuY29kaW5nID09PSAnc3RyaW5nJyAmJiAhQnVmZmVyLmlzRW5jb2RpbmcoZW5jb2RpbmcpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdVbmtub3duIGVuY29kaW5nOiAnICsgZW5jb2RpbmcpXG4gICAgfVxuICB9IGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgdmFsID0gdmFsICYgMjU1XG4gIH1cblxuICAvLyBJbnZhbGlkIHJhbmdlcyBhcmUgbm90IHNldCB0byBhIGRlZmF1bHQsIHNvIGNhbiByYW5nZSBjaGVjayBlYXJseS5cbiAgaWYgKHN0YXJ0IDwgMCB8fCB0aGlzLmxlbmd0aCA8IHN0YXJ0IHx8IHRoaXMubGVuZ3RoIDwgZW5kKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ091dCBvZiByYW5nZSBpbmRleCcpXG4gIH1cblxuICBpZiAoZW5kIDw9IHN0YXJ0KSB7XG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIHN0YXJ0ID0gc3RhcnQgPj4+IDBcbiAgZW5kID0gZW5kID09PSB1bmRlZmluZWQgPyB0aGlzLmxlbmd0aCA6IGVuZCA+Pj4gMFxuXG4gIGlmICghdmFsKSB2YWwgPSAwXG5cbiAgdmFyIGlcbiAgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgZm9yIChpID0gc3RhcnQ7IGkgPCBlbmQ7ICsraSkge1xuICAgICAgdGhpc1tpXSA9IHZhbFxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YXIgYnl0ZXMgPSBCdWZmZXIuaXNCdWZmZXIodmFsKVxuICAgICAgPyB2YWxcbiAgICAgIDogdXRmOFRvQnl0ZXMobmV3IEJ1ZmZlcih2YWwsIGVuY29kaW5nKS50b1N0cmluZygpKVxuICAgIHZhciBsZW4gPSBieXRlcy5sZW5ndGhcbiAgICBmb3IgKGkgPSAwOyBpIDwgZW5kIC0gc3RhcnQ7ICsraSkge1xuICAgICAgdGhpc1tpICsgc3RhcnRdID0gYnl0ZXNbaSAlIGxlbl1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpc1xufVxuXG4vLyBIRUxQRVIgRlVOQ1RJT05TXG4vLyA9PT09PT09PT09PT09PT09XG5cbnZhciBJTlZBTElEX0JBU0U2NF9SRSA9IC9bXitcXC8wLTlBLVphLXotX10vZ1xuXG5mdW5jdGlvbiBiYXNlNjRjbGVhbiAoc3RyKSB7XG4gIC8vIE5vZGUgc3RyaXBzIG91dCBpbnZhbGlkIGNoYXJhY3RlcnMgbGlrZSBcXG4gYW5kIFxcdCBmcm9tIHRoZSBzdHJpbmcsIGJhc2U2NC1qcyBkb2VzIG5vdFxuICBzdHIgPSBzdHJpbmd0cmltKHN0cikucmVwbGFjZShJTlZBTElEX0JBU0U2NF9SRSwgJycpXG4gIC8vIE5vZGUgY29udmVydHMgc3RyaW5ncyB3aXRoIGxlbmd0aCA8IDIgdG8gJydcbiAgaWYgKHN0ci5sZW5ndGggPCAyKSByZXR1cm4gJydcbiAgLy8gTm9kZSBhbGxvd3MgZm9yIG5vbi1wYWRkZWQgYmFzZTY0IHN0cmluZ3MgKG1pc3NpbmcgdHJhaWxpbmcgPT09KSwgYmFzZTY0LWpzIGRvZXMgbm90XG4gIHdoaWxlIChzdHIubGVuZ3RoICUgNCAhPT0gMCkge1xuICAgIHN0ciA9IHN0ciArICc9J1xuICB9XG4gIHJldHVybiBzdHJcbn1cblxuZnVuY3Rpb24gc3RyaW5ndHJpbSAoc3RyKSB7XG4gIGlmIChzdHIudHJpbSkgcmV0dXJuIHN0ci50cmltKClcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCAnJylcbn1cblxuZnVuY3Rpb24gdG9IZXggKG4pIHtcbiAgaWYgKG4gPCAxNikgcmV0dXJuICcwJyArIG4udG9TdHJpbmcoMTYpXG4gIHJldHVybiBuLnRvU3RyaW5nKDE2KVxufVxuXG5mdW5jdGlvbiB1dGY4VG9CeXRlcyAoc3RyaW5nLCB1bml0cykge1xuICB1bml0cyA9IHVuaXRzIHx8IEluZmluaXR5XG4gIHZhciBjb2RlUG9pbnRcbiAgdmFyIGxlbmd0aCA9IHN0cmluZy5sZW5ndGhcbiAgdmFyIGxlYWRTdXJyb2dhdGUgPSBudWxsXG4gIHZhciBieXRlcyA9IFtdXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7ICsraSkge1xuICAgIGNvZGVQb2ludCA9IHN0cmluZy5jaGFyQ29kZUF0KGkpXG5cbiAgICAvLyBpcyBzdXJyb2dhdGUgY29tcG9uZW50XG4gICAgaWYgKGNvZGVQb2ludCA+IDB4RDdGRiAmJiBjb2RlUG9pbnQgPCAweEUwMDApIHtcbiAgICAgIC8vIGxhc3QgY2hhciB3YXMgYSBsZWFkXG4gICAgICBpZiAoIWxlYWRTdXJyb2dhdGUpIHtcbiAgICAgICAgLy8gbm8gbGVhZCB5ZXRcbiAgICAgICAgaWYgKGNvZGVQb2ludCA+IDB4REJGRikge1xuICAgICAgICAgIC8vIHVuZXhwZWN0ZWQgdHJhaWxcbiAgICAgICAgICBpZiAoKHVuaXRzIC09IDMpID4gLTEpIGJ5dGVzLnB1c2goMHhFRiwgMHhCRiwgMHhCRClcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9IGVsc2UgaWYgKGkgKyAxID09PSBsZW5ndGgpIHtcbiAgICAgICAgICAvLyB1bnBhaXJlZCBsZWFkXG4gICAgICAgICAgaWYgKCh1bml0cyAtPSAzKSA+IC0xKSBieXRlcy5wdXNoKDB4RUYsIDB4QkYsIDB4QkQpXG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHZhbGlkIGxlYWRcbiAgICAgICAgbGVhZFN1cnJvZ2F0ZSA9IGNvZGVQb2ludFxuXG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIC8vIDIgbGVhZHMgaW4gYSByb3dcbiAgICAgIGlmIChjb2RlUG9pbnQgPCAweERDMDApIHtcbiAgICAgICAgaWYgKCh1bml0cyAtPSAzKSA+IC0xKSBieXRlcy5wdXNoKDB4RUYsIDB4QkYsIDB4QkQpXG4gICAgICAgIGxlYWRTdXJyb2dhdGUgPSBjb2RlUG9pbnRcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgLy8gdmFsaWQgc3Vycm9nYXRlIHBhaXJcbiAgICAgIGNvZGVQb2ludCA9IChsZWFkU3Vycm9nYXRlIC0gMHhEODAwIDw8IDEwIHwgY29kZVBvaW50IC0gMHhEQzAwKSArIDB4MTAwMDBcbiAgICB9IGVsc2UgaWYgKGxlYWRTdXJyb2dhdGUpIHtcbiAgICAgIC8vIHZhbGlkIGJtcCBjaGFyLCBidXQgbGFzdCBjaGFyIHdhcyBhIGxlYWRcbiAgICAgIGlmICgodW5pdHMgLT0gMykgPiAtMSkgYnl0ZXMucHVzaCgweEVGLCAweEJGLCAweEJEKVxuICAgIH1cblxuICAgIGxlYWRTdXJyb2dhdGUgPSBudWxsXG5cbiAgICAvLyBlbmNvZGUgdXRmOFxuICAgIGlmIChjb2RlUG9pbnQgPCAweDgwKSB7XG4gICAgICBpZiAoKHVuaXRzIC09IDEpIDwgMCkgYnJlYWtcbiAgICAgIGJ5dGVzLnB1c2goY29kZVBvaW50KVxuICAgIH0gZWxzZSBpZiAoY29kZVBvaW50IDwgMHg4MDApIHtcbiAgICAgIGlmICgodW5pdHMgLT0gMikgPCAwKSBicmVha1xuICAgICAgYnl0ZXMucHVzaChcbiAgICAgICAgY29kZVBvaW50ID4+IDB4NiB8IDB4QzAsXG4gICAgICAgIGNvZGVQb2ludCAmIDB4M0YgfCAweDgwXG4gICAgICApXG4gICAgfSBlbHNlIGlmIChjb2RlUG9pbnQgPCAweDEwMDAwKSB7XG4gICAgICBpZiAoKHVuaXRzIC09IDMpIDwgMCkgYnJlYWtcbiAgICAgIGJ5dGVzLnB1c2goXG4gICAgICAgIGNvZGVQb2ludCA+PiAweEMgfCAweEUwLFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHg2ICYgMHgzRiB8IDB4ODAsXG4gICAgICAgIGNvZGVQb2ludCAmIDB4M0YgfCAweDgwXG4gICAgICApXG4gICAgfSBlbHNlIGlmIChjb2RlUG9pbnQgPCAweDExMDAwMCkge1xuICAgICAgaWYgKCh1bml0cyAtPSA0KSA8IDApIGJyZWFrXG4gICAgICBieXRlcy5wdXNoKFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHgxMiB8IDB4RjAsXG4gICAgICAgIGNvZGVQb2ludCA+PiAweEMgJiAweDNGIHwgMHg4MCxcbiAgICAgICAgY29kZVBvaW50ID4+IDB4NiAmIDB4M0YgfCAweDgwLFxuICAgICAgICBjb2RlUG9pbnQgJiAweDNGIHwgMHg4MFxuICAgICAgKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgY29kZSBwb2ludCcpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGJ5dGVzXG59XG5cbmZ1bmN0aW9uIGFzY2lpVG9CeXRlcyAoc3RyKSB7XG4gIHZhciBieXRlQXJyYXkgPSBbXVxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0ci5sZW5ndGg7ICsraSkge1xuICAgIC8vIE5vZGUncyBjb2RlIHNlZW1zIHRvIGJlIGRvaW5nIHRoaXMgYW5kIG5vdCAmIDB4N0YuLlxuICAgIGJ5dGVBcnJheS5wdXNoKHN0ci5jaGFyQ29kZUF0KGkpICYgMHhGRilcbiAgfVxuICByZXR1cm4gYnl0ZUFycmF5XG59XG5cbmZ1bmN0aW9uIHV0ZjE2bGVUb0J5dGVzIChzdHIsIHVuaXRzKSB7XG4gIHZhciBjLCBoaSwgbG9cbiAgdmFyIGJ5dGVBcnJheSA9IFtdXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgKytpKSB7XG4gICAgaWYgKCh1bml0cyAtPSAyKSA8IDApIGJyZWFrXG5cbiAgICBjID0gc3RyLmNoYXJDb2RlQXQoaSlcbiAgICBoaSA9IGMgPj4gOFxuICAgIGxvID0gYyAlIDI1NlxuICAgIGJ5dGVBcnJheS5wdXNoKGxvKVxuICAgIGJ5dGVBcnJheS5wdXNoKGhpKVxuICB9XG5cbiAgcmV0dXJuIGJ5dGVBcnJheVxufVxuXG5mdW5jdGlvbiBiYXNlNjRUb0J5dGVzIChzdHIpIHtcbiAgcmV0dXJuIGJhc2U2NC50b0J5dGVBcnJheShiYXNlNjRjbGVhbihzdHIpKVxufVxuXG5mdW5jdGlvbiBibGl0QnVmZmVyIChzcmMsIGRzdCwgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7ICsraSkge1xuICAgIGlmICgoaSArIG9mZnNldCA+PSBkc3QubGVuZ3RoKSB8fCAoaSA+PSBzcmMubGVuZ3RoKSkgYnJlYWtcbiAgICBkc3RbaSArIG9mZnNldF0gPSBzcmNbaV1cbiAgfVxuICByZXR1cm4gaVxufVxuXG5mdW5jdGlvbiBpc25hbiAodmFsKSB7XG4gIHJldHVybiB2YWwgIT09IHZhbCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNlbGYtY29tcGFyZVxufVxuIiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiAoYXJyKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGFycikgPT0gJ1tvYmplY3QgQXJyYXldJztcbn07XG4iLCJleHBvcnRzLnJlYWQgPSBmdW5jdGlvbiAoYnVmZmVyLCBvZmZzZXQsIGlzTEUsIG1MZW4sIG5CeXRlcykge1xuICB2YXIgZSwgbVxuICB2YXIgZUxlbiA9IChuQnl0ZXMgKiA4KSAtIG1MZW4gLSAxXG4gIHZhciBlTWF4ID0gKDEgPDwgZUxlbikgLSAxXG4gIHZhciBlQmlhcyA9IGVNYXggPj4gMVxuICB2YXIgbkJpdHMgPSAtN1xuICB2YXIgaSA9IGlzTEUgPyAobkJ5dGVzIC0gMSkgOiAwXG4gIHZhciBkID0gaXNMRSA/IC0xIDogMVxuICB2YXIgcyA9IGJ1ZmZlcltvZmZzZXQgKyBpXVxuXG4gIGkgKz0gZFxuXG4gIGUgPSBzICYgKCgxIDw8ICgtbkJpdHMpKSAtIDEpXG4gIHMgPj49ICgtbkJpdHMpXG4gIG5CaXRzICs9IGVMZW5cbiAgZm9yICg7IG5CaXRzID4gMDsgZSA9IChlICogMjU2KSArIGJ1ZmZlcltvZmZzZXQgKyBpXSwgaSArPSBkLCBuQml0cyAtPSA4KSB7fVxuXG4gIG0gPSBlICYgKCgxIDw8ICgtbkJpdHMpKSAtIDEpXG4gIGUgPj49ICgtbkJpdHMpXG4gIG5CaXRzICs9IG1MZW5cbiAgZm9yICg7IG5CaXRzID4gMDsgbSA9IChtICogMjU2KSArIGJ1ZmZlcltvZmZzZXQgKyBpXSwgaSArPSBkLCBuQml0cyAtPSA4KSB7fVxuXG4gIGlmIChlID09PSAwKSB7XG4gICAgZSA9IDEgLSBlQmlhc1xuICB9IGVsc2UgaWYgKGUgPT09IGVNYXgpIHtcbiAgICByZXR1cm4gbSA/IE5hTiA6ICgocyA/IC0xIDogMSkgKiBJbmZpbml0eSlcbiAgfSBlbHNlIHtcbiAgICBtID0gbSArIE1hdGgucG93KDIsIG1MZW4pXG4gICAgZSA9IGUgLSBlQmlhc1xuICB9XG4gIHJldHVybiAocyA/IC0xIDogMSkgKiBtICogTWF0aC5wb3coMiwgZSAtIG1MZW4pXG59XG5cbmV4cG9ydHMud3JpdGUgPSBmdW5jdGlvbiAoYnVmZmVyLCB2YWx1ZSwgb2Zmc2V0LCBpc0xFLCBtTGVuLCBuQnl0ZXMpIHtcbiAgdmFyIGUsIG0sIGNcbiAgdmFyIGVMZW4gPSAobkJ5dGVzICogOCkgLSBtTGVuIC0gMVxuICB2YXIgZU1heCA9ICgxIDw8IGVMZW4pIC0gMVxuICB2YXIgZUJpYXMgPSBlTWF4ID4+IDFcbiAgdmFyIHJ0ID0gKG1MZW4gPT09IDIzID8gTWF0aC5wb3coMiwgLTI0KSAtIE1hdGgucG93KDIsIC03NykgOiAwKVxuICB2YXIgaSA9IGlzTEUgPyAwIDogKG5CeXRlcyAtIDEpXG4gIHZhciBkID0gaXNMRSA/IDEgOiAtMVxuICB2YXIgcyA9IHZhbHVlIDwgMCB8fCAodmFsdWUgPT09IDAgJiYgMSAvIHZhbHVlIDwgMCkgPyAxIDogMFxuXG4gIHZhbHVlID0gTWF0aC5hYnModmFsdWUpXG5cbiAgaWYgKGlzTmFOKHZhbHVlKSB8fCB2YWx1ZSA9PT0gSW5maW5pdHkpIHtcbiAgICBtID0gaXNOYU4odmFsdWUpID8gMSA6IDBcbiAgICBlID0gZU1heFxuICB9IGVsc2Uge1xuICAgIGUgPSBNYXRoLmZsb29yKE1hdGgubG9nKHZhbHVlKSAvIE1hdGguTE4yKVxuICAgIGlmICh2YWx1ZSAqIChjID0gTWF0aC5wb3coMiwgLWUpKSA8IDEpIHtcbiAgICAgIGUtLVxuICAgICAgYyAqPSAyXG4gICAgfVxuICAgIGlmIChlICsgZUJpYXMgPj0gMSkge1xuICAgICAgdmFsdWUgKz0gcnQgLyBjXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbHVlICs9IHJ0ICogTWF0aC5wb3coMiwgMSAtIGVCaWFzKVxuICAgIH1cbiAgICBpZiAodmFsdWUgKiBjID49IDIpIHtcbiAgICAgIGUrK1xuICAgICAgYyAvPSAyXG4gICAgfVxuXG4gICAgaWYgKGUgKyBlQmlhcyA+PSBlTWF4KSB7XG4gICAgICBtID0gMFxuICAgICAgZSA9IGVNYXhcbiAgICB9IGVsc2UgaWYgKGUgKyBlQmlhcyA+PSAxKSB7XG4gICAgICBtID0gKCh2YWx1ZSAqIGMpIC0gMSkgKiBNYXRoLnBvdygyLCBtTGVuKVxuICAgICAgZSA9IGUgKyBlQmlhc1xuICAgIH0gZWxzZSB7XG4gICAgICBtID0gdmFsdWUgKiBNYXRoLnBvdygyLCBlQmlhcyAtIDEpICogTWF0aC5wb3coMiwgbUxlbilcbiAgICAgIGUgPSAwXG4gICAgfVxuICB9XG5cbiAgZm9yICg7IG1MZW4gPj0gODsgYnVmZmVyW29mZnNldCArIGldID0gbSAmIDB4ZmYsIGkgKz0gZCwgbSAvPSAyNTYsIG1MZW4gLT0gOCkge31cblxuICBlID0gKGUgPDwgbUxlbikgfCBtXG4gIGVMZW4gKz0gbUxlblxuICBmb3IgKDsgZUxlbiA+IDA7IGJ1ZmZlcltvZmZzZXQgKyBpXSA9IGUgJiAweGZmLCBpICs9IGQsIGUgLz0gMjU2LCBlTGVuIC09IDgpIHt9XG5cbiAgYnVmZmVyW29mZnNldCArIGkgLSBkXSB8PSBzICogMTI4XG59XG4iLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCIvL29yaWdpbiBjb2RlOiBodHRwczovL2dpdGh1Yi5jb20vampzdGlmZi9wbmctc2NhbGUvYmxvYi9tYXN0ZXIvYWxnb3MvYm94LXNjYWxpbmcuanNcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGJ1ZmZlciwgb3JpZ2luU2l6ZSwgbmV3U2l6ZSlcbnsgXG4gIGxldCBzWCA9IDA7XG4gIGxldCBzWSA9IDA7XG4gIGxldCBbc1csIHNIXSA9IG9yaWdpblNpemU7XG4gIGxldCBkWCA9IDA7XG4gIGxldCBkWSA9IDA7XG4gIGxldCBbZFcsIGRIXSA9IG5ld1NpemU7XG4gIGxldCB0YXJnZXRCdWZmZXIgPSBCdWZmZXIuYWxsb2MoZFcqZEgqNCk7XG4gIFxuICB2YXIgY29weSA9IGZ1bmN0aW9uKHlzLHlkLHhzLHhkLGNvdW50KSB7XG4gICAgYnVmZmVyLmNvcHkodGFyZ2V0QnVmZmVyLFxuICAgICAgKChkWSArIHlkKSAqIGRXICsgZFggKyB4ZCkgPDwgMixcbiAgICAgICgoc1kgKyB5cykgKiBzVyArIHNYICsgeHMpIDw8IDIsXG4gICAgICAoKHNZICsgeXMpICogc0ggKyBzWCArIHhzICsgY291bnQpIDw8IDJcbiAgICApO1xuICB9O1xuICBcbiAgdmFyIHlfc2hyaW5rID0gZnVuY3Rpb24oeF9mdW4pIHtcbiAgICB2YXIgeV8gPSBbXTtcbiAgICBmb3IgKHZhciB5cyA9IDA7IHlzIDwgc0g7IHlzKyspIHtcbiAgICAgIHZhciB5ZCA9IE1hdGguZmxvb3IoeXMqZEgvc0gpO1xuICAgICAgaWYoeV9beWRdKSBjb250aW51ZTtcbiAgICAgIHlfW3lkXSA9IHRydWU7XG4gICAgICB4X2Z1bih5cyx5ZCk7XG4gICAgfVxuICB9O1xuICBcbiAgdmFyIHlfZ3JvdyA9IGZ1bmN0aW9uKHhfZnVuKSB7XG4gICAgZm9yICh2YXIgeWQgPSAwOyB5ZCA8IGRIOyB5ZCsrKSB7XG4gICAgICB2YXIgeXMgPSBNYXRoLmZsb29yKHlkKnNIL2RIKTtcbiAgICAgIHhfZnVuKHlzLHlkKTtcbiAgICB9XG4gIH07XG4gIFxuICB2YXIgeF9zaHJpbmsgPSBmdW5jdGlvbih5cyx5ZCkge1xuICAgIHZhciB4XyA9IFtdO1xuICAgIGZvcih2YXIgeHMgPSAwOyB4cyA8IHNXOyB4cysrICkge1xuICAgICAgdmFyIHhkID0gTWF0aC5mbG9vcih4cypkVy9zVyk7XG4gICAgICBpZih4X1t4ZF0pIGNvbnRpbnVlO1xuICAgICAgeF9beGRdID0gdHJ1ZTtcbiAgICAgIGNvcHkoeXMseWQseHMseGQsMSk7XG4gICAgfVxuICB9O1xuICBcbiAgdmFyIHhfZ3JvdyA9IGZ1bmN0aW9uKHlzLHlkKSB7XG4gICAgZm9yKHZhciB4ZCA9IDA7IHhkIDwgZFc7IHhkKysgKSB7XG4gICAgICB2YXIgeHMgPSBNYXRoLmZsb29yKHhkKnNXL2RXKTtcbiAgICAgIGNvcHkoeXMseWQseHMseGQsMSk7IC8vIENvdWxkIGJlIGZhc3RlciBieSBkb2luZyBtb3JlIHRoYW4gMSB3aGVuIG5lZWRlZC5cbiAgICB9XG4gIH07XG4gIFxuICBpZihzSCA+PSBkSCAmJiBzVyA+PSBkVykgeyB5X3Nocmluayh4X3Nocmluayk7IH1cbiAgZWxzZSBpZihzSCA+PSBkSCkgeyB5X3Nocmluayh4X2dyb3cpOyB9XG4gIGVsc2UgaWYoc1cgPj0gZFcpIHsgeV9ncm93KHhfc2hyaW5rKTsgfVxuICBlbHNlIHsgeV9ncm93KHhfZ3Jvdyk7IH1cbiAgcmV0dXJuIHRhcmdldEJ1ZmZlcjtcbn1cbiIsImNvbnN0IENvbG9yVHJhbnNmb3JtaW5nTWl4aW5zID0gKFByZXByb2Nlc3NpbmdDbGFzcykgPT4gY2xhc3MgZXh0ZW5kcyBQcmVwcm9jZXNzaW5nQ2xhc3N7XG4gICAgXG4gICAgY29sb3JUcmFuc2Zvcm0odHJhbmZvcm1Gbiwgc2FtcGxlQnVmZmVyLCBjaGFubmVsU2l6ZSl7XG4gICAgICAgIGNvbnN0IFIgPSB0aGlzLlI7XG4gICAgICAgIHJldHVybiBSLmZsYXR0ZW4oUi5tYXAodHJhbmZvcm1GbiwgUi5zcGxpdEV2ZXJ5KGNoYW5uZWxTaXplLCBzYW1wbGVCdWZmZXIpKSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRyYW5zZm9ybSBjb2xvciBpbWFnZSB0byBibGFjayBvbiB3aGl0ZSBpbWFnZS4gVGhpcyBmdW5jdGlvbiBhbHNvIHJlZHVjZSBjaGFuZWwgdG8gMS5cbiAgICAgKiBAcGFyYW0geyBBcnJheXxCdWZmZXIgfSBzYW1wbGVCdWZmZXJcbiAgICAgKiBAcGFyYW0geyBOdW1iZXIgfSBjaGFubmVsU2l6ZVxuICAgICAqIEByZXR1cm4geyBBcnJheSB9IGltYWdlIGRhdGEgYWZ0ZXIgdHJhbnNmb3JtXG4gICAgICovXG4gICAgYmxhY2tXaGl0ZVRyYW5zZm9ybShzYW1wbGVCdWZmZXIpe1xuICAgICAgICBjb25zdCBCbGFja1doaXRlRm4gPSAocGl4ZWwpPT57XG4gICAgICAgICAgICBsZXQgcGl4ZWxWYWx1ZSA9IChwaXhlbFswXSArIHBpeGVsWzFdICtwaXhlbFsyXSkvMztcbiAgICAgICAgICAgIHJldHVybiB+fnBpeGVsVmFsdWU7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiB0aGlzLmNvbG9yVHJhbnNmb3JtKEJsYWNrV2hpdGVGbiwgc2FtcGxlQnVmZmVyLCA0KTtcbiAgICB9XG5cbiAgICBvbmVCaXRUcmFuc2Zvcm0oc2FtcGxlQnVmZmVyKXtcbiAgICAgICAgY29uc3QgQmxhY2tXaGl0ZUZuID0gKHBpeGVsKT0+e1xuICAgICAgICAgICAgbGV0IHBpeGVsVmFsdWUgPSAocGl4ZWxbMF0gKyBwaXhlbFsxXSArcGl4ZWxbMl0pLzM7XG4gICAgICAgICAgICByZXR1cm4gcGl4ZWxWYWx1ZT4xMjc/MTowO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gdGhpcy5jb2xvclRyYW5zZm9ybShCbGFja1doaXRlRm4sIHNhbXBsZUJ1ZmZlciwgNCk7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29sb3JUcmFuc2Zvcm1pbmdNaXhpbnM7IiwiaW1wb3J0IHsgZGVmYXVsdCBhcyBCb3hTY2FsaW5nIH0gZnJvbSAnLi9ib3hTY2FsaW5nJztcbmNvbnN0IEltYWdlU2NhbGluZ01peGlucyA9IChQcmVwcm9jZXNzaW5nQ2xhc3MpID0+IGNsYXNzIGV4dGVuZHMgUHJlcHJvY2Vzc2luZ0NsYXNze1xuICAgIC8qKlxuICAgICAqIHNjYWxpbmcgaW1hZ2UgZnJvbSBvcmlnaW4gc2l6ZSB0byBuZXcgc2l6ZSwgaW1hZ2UgY2hhbmVsIG11c3QgYmUgNFxuICAgICAqIEBwYXJhbSB7IEFycmF5fEJ1ZmZlciB9IHNhbXBsZUJ1ZmZlciAtIG9yaWdpbmFsIGltYWdlXG4gICAgICogQHBhcmFtIHsgQXJyYXkgfSBvcmlnaW5TaXplIC0gb3JpZ2luaXplIG9mIGltYWdlIFt3ZWlnaHQsIGhlaWdodF1cbiAgICAgKiBAcGFyYW0geyBBcnJheSB9IG5ld1NpemUgLSBuZXcgc2l6ZSBvZiBpbWFnZSBbd2VpZ2h0LCBoZWlnaHRdXG4gICAgICogQHJldHVybnMgeyBBcnJheSB9IC0gYXJyYXkgb2Ygc3ViIGltYWdlXG4gICAgICovXG4gICAgaW1hZ2VSZXNpemUoc2FtcGxlQnVmZmVyLCBvcmlnaW5TaXplLCBuZXdTaXplKXtcbiAgICAgICAgc2FtcGxlQnVmZmVyID0gQnVmZmVyLmZyb20oc2FtcGxlQnVmZmVyKTtcbiAgICAgICAgcmV0dXJuIEJveFNjYWxpbmcoc2FtcGxlQnVmZmVyLCBvcmlnaW5TaXplLCBuZXdTaXplKTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbWFnZVNjYWxpbmdNaXhpbnM7IiwiY29uc3QgSW1hZ2VTcGxpdHRpbmdNaXhpbnMgPSAoUHJlcHJvY2Vzc2luZ0NsYXNzKSA9PiBjbGFzcyBleHRlbmRzIFByZXByb2Nlc3NpbmdDbGFzc3tcbiAgICAvKipcbiAgICAgKiBTcGxpdCBpbWFnZSBpbnRvIHN1YiBpbWFnZXMgYmFzZWQgb24gc3BsaXQgc2l6ZVxuICAgICAqIEBwYXJhbSB7IEFycmF5fEJ1ZmZlciB9IHNhbXBsZUJ1ZmZlciAtIG9yaWdpbmFsIGltYWdlXG4gICAgICogQHBhcmFtIHsgTnVtYmVyIH0gc3BsaXRTaXplIC0gcG9zaXRpdmUgbnVtYmVyXG4gICAgICogQHJldHVybnMgeyBBcnJheSB9IC0gYXJyYXkgb2Ygc3ViIGltYWdlXG4gICAgICovXG4gICAgaW1hZ2VTcGxpdChzYW1wbGVCdWZmZXIsIHNwbGl0U2l6ZSl7XG4gICAgICAgIHJldHVybiB0aGlzLlIuc3BsaXRFdmVyeShzcGxpdFNpemUsIHNhbXBsZUJ1ZmZlcik7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VTcGxpdHRpbmdNaXhpbnM7IiwiZXhwb3J0IHtkZWZhdWx0IGFzIENvbG9yVHJhbnNmb3JtaW5nTWl4aW5zIH0gZnJvbSAnLi9jb2xvclRyYW5zZm9ybWluZy5taXhpbnMnO1xuZXhwb3J0IHtkZWZhdWx0IGFzIEltYWdlU3BsaXR0aW5nTWl4aW5zIH0gZnJvbSAnLi9pbWFnZVNwbGl0dGluZy5taXhpbnMnO1xuZXhwb3J0IHtkZWZhdWx0IGFzIEltYWdlU2NhbGluZ01peGlucyB9IGZyb20gJy4vaW1hZ2VTY2FsaW5nLm1peGlucyc7IiwiZXhwb3J0IHtkZWZhdWx0IGFzIFRva2VuVHJhbnNmb3JtaW5nTWl4aW5zIH0gZnJvbSAnLi90b2tlblRyYW5zZm9ybWluZy5taXhpbnMnOyIsImNvbnN0IFRva2VuVHJhbnNmb3JtaW5nTWl4aW5zID0gKFByZXByb2Nlc3NpbmdDbGFzcykgPT4gY2xhc3MgZXh0ZW5kcyBQcmVwcm9jZXNzaW5nQ2xhc3N7XG4gICAgLyoqXG4gICAgICogdG9rZW5pemVkIHNlbnRlbmNlXG4gICAgICogQHBhcmFtIHsgU3RyaW5nIH0gc2VudGVuY2UgLSBhcnJheSBvZiBzdHJpbmcgc2VudGVuY2VcbiAgICAgKiBAcmV0dXJucyB7IEFycmF5IH0gYXJyYXkgb2YgdG9rZW5pemVkIHNlbnRlbmNlc1xuICAgICAqL1xuICAgIHRva2VuaXplKHNlbnRlbmNlKXtcbiAgICAgICAgY29uc3QgUiA9IHRoaXMuUiwgVG9rZW5pemVyID0gdGhpcy50b2tlbml6ZXI7XG4gICAgICAgIHJldHVybiBUb2tlbml6ZXIudG9rZW5pemUoc2VudGVuY2UpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgYmFkIHdvcmRzIGZyb20gdG9rZW5zXG4gICAgICogQHBhcmFtIHsgQXJyYXkgfSB0b2tlbnMgLSBhcnJheSBvZiBzdHJpbmcgdG9rZW5cbiAgICAgKiBAcGFyYW0geyBBcnJheSB9IGJhZFdvcmRMaXN0IC0gQXJyYXkgb2YgYmFkIHdvcmRzXG4gICAgICogQHJldHVybnMgeyBBcnJheSB9IHRva2VucyB3aXRob3V0IGJhZCB3b3Jkc1xuICAgICAqL1xuICAgIGJhZFdvcmRzRmlsdGVyKHRva2VucywgYmFkV29yZExpc3Qpe1xuICAgICAgICBjb25zdCBSID0gdGhpcy5SO1xuICAgICAgICByZXR1cm4gUi5maWx0ZXIoKHRva2VuKT0+Ui5ub3QoUi5maW5kKFIuZXF1YWxzKHRva2VuKSkoYmFkV29yZExpc3QpKSwgdG9rZW5zKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ291bnQgbnVtYmVyIG9mIGFwcGVyYW5jZSBvZiBlYWNoIHRva2VuIGluIHRoZSB0b2tlbiBsaXN0XG4gICAgICogQHBhcmFtIHsgQXJyYXkgfSB0b2tlbnMgLSBhcnJheSBvZiBzdHJpbmcgdG9rZW5zXG4gICAgICogQHBhcmFtIHsgT2JqZWN0IH0gW2ZyZXFDb3VudD17fV0gLSBvYmplYyBvciBwcmV2aW91cyB3b3JkRnJlcUNvdW50LCBlbXB0eSBvYmplY3QgaWYgbm90IHByb3ZpZGVkXG4gICAgICogQHJldHVybnMgeyBPYmplY3QgfSAtIGpzb24gb2JqZWN0IHdpdGggdG9rZW4gYXMga2V5IGFuZCBjb3VudGluZyBudW1iZXIgYXMgY29ycmVzcG9uZGluZyB2YWx1ZVxuICAgICAqL1xuICAgIHdvcmRGcmVxQ291bnQodG9rZW5zLCBmcmVxQ291bnQ9e30pe1xuICAgICAgICBjb25zdCBSID0gdGhpcy5SO1xuICAgICAgICBjb25zdCBVcGRhdGVGcmVxID0gKGZyZXFDb3VudCwgdG9rZW4pPT57XG4gICAgICAgICAgICBpZihmcmVxQ291bnRbdG9rZW5dID09PSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgICAgIGZyZXFDb3VudFt0b2tlbl0gPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICBmcmVxQ291bnRbdG9rZW5dICs9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZnJlcUNvdW50O1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gUi5yZWR1Y2UoVXBkYXRlRnJlcSwgZnJlcUNvdW50LCB0b2tlbnMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgZHVwbGljYXRlZCB0b2tlbnNcbiAgICAgKiBAcGFyYW0geyBBcnJheSB9IHRva2VucyAtIGFycmF5IG9mIHN0cmluZyB0b2tlblxuICAgICAqIEByZXR1cm5zXG4gICAgICovXG4gICAgd29yZER1cGxpY2F0ZVJlbW92ZSh0b2tlbnMpe1xuICAgICAgICBjb25zdCBSID0gdGhpcy5SO1xuICAgICAgICByZXR1cm4gUi51bmlxKHRva2Vucyk7XG4gICAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IFRva2VuVHJhbnNmb3JtaW5nTWl4aW5zOyIsIi8qKlxuICogQGV4cGVyaW1lbnRcbiAqL1xuY29uc3QgQ2F0ZWdvcnlOb3JtYWxpemluZ01peGlucyA9IChQcmVwcm9jZXNzaW5nQ2xhc3MpID0+IGNsYXNzIGV4dGVuZHMgUHJlcHJvY2Vzc2luZ0NsYXNze1xuICAgIG9uZUhvdEVuY29kZShzYW1wbGUsIGNhdGVnb3JpZXMpe1xuICAgICAgICBjb25zdCBSID0gdGhpcy5SO1xuICAgICAgICBsZXQgY29kZSA9IHRoaXMuemVyb3MoY2F0ZWdvcmllcy5sZW5ndGgpO1xuICAgICAgICBjb25zdCBpZHggPSBSLmluZGV4T2Yoc2FtcGxlLCBjYXRlZ29yaWVzKTtcbiAgICAgICAgaWYoaWR4Pi0xKXtcbiAgICAgICAgICAgIGNvZGVbaWR4XSA9IDE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvZGU7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2F0ZWdvcnlOb3JtYWxpemluZ01peGluczsiLCJleHBvcnQgeyBkZWZhdWx0IGFzIENhdGVnb3J5Tm9ybWFsaXppbmdNaXhpbnMgfSBmcm9tICcuL2NhdGVnb3J5Tm9ybWFsaXppbmcubWl4aW5zJzsgIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyB0b2tlbml6ZXIgfSBmcm9tICcuL3Rva2VuaXplcic7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIFNlbnRlbmNlUGllY2VNb2RlbCB9IGZyb20gJy4vc2VudGVuY2VQaWVjZSc7IiwiLyoqXG4gKiBUaGlzIGNvZGUgb3JpZ2luIGZyb20gXG4gKiBodHRwczovL2dpdGh1Yi5jb20vdGVuc29yZmxvdy90ZmpzLW1vZGVscy90cmVlL21hc3Rlci91bml2ZXJzYWwtc2VudGVuY2UtZW5jb2RlclxuICogXG4gKiBUb2tlbml6ZXIuZW5jb2RlKCkgaXMgYSBwb3J0IG9mIGBFbmNvZGVBc0lkc2AgZnJvbSB0aGUgU2VudGVuY2VQaWVjZSBsaWJyYXJ5XG4gKiAoaHR0cHM6Ly9naXRodWIuY29tL2dvb2dsZS9zZW50ZW5jZXBpZWNlKS4gRW5jb2RlIHVzZXMgdGhlIFZpdGVyYmkgYWxnb3JpdGhtXG4gKiB0byBmaW5kIHRoZSBtb3N0IGxpa2VseSBzZXF1ZW5jZSBvZiB0b2tlbnMgdGhhdCBjb21wcmlzZSB0aGUgaW5wdXQuIEZvciBtb3JlXG4gKiBkZXRhaWxzLCByZWZlciB0byBodHRwczovL2FyeGl2Lm9yZy9wZGYvMTgwNC4xMDk1OS5wZGYuXG4gKi9cblxuaW1wb3J0IHsgZGVmYXVsdCBhcyBzdHJpbmdUb0NoYXJzIH0gZnJvbSAnLi91dGlscyc7XG5cbmltcG9ydCB7IGRlZmF1bHQgYXMgVHJpZSB9IGZyb20gJy4vdHJpZSc7XG5cbmNvbnN0IHNlcGFyYXRvciA9ICdcXHUyNTgxJzsgIC8vIFRoaXMgaXMgdGhlIHVuaWNvZGUgY2hhcmFjdGVyICdsb3dlciBvbmUgZWlnaHRoIGJsb2NrJy5cblxuZnVuY3Rpb24gcHJvY2Vzc0lucHV0KHN0cikge1xuICBjb25zdCBub3JtYWxpemVkID0gc3RyLm5vcm1hbGl6ZSgnTkZLQycpO1xuICByZXR1cm4gc2VwYXJhdG9yICsgbm9ybWFsaXplZC5yZXBsYWNlKC8gL2csIHNlcGFyYXRvcik7XG59XG5cbi8vIFRoZSBmaXJzdCB0b2tlbnMgYXJlIHJlc2VydmVkIGZvciB1bmssIGNvbnRyb2wgc3ltYm9scywgYW5kIHVzZXItZGVmaW5lZFxuLy8gc3ltYm9scy5cbmNvbnN0IFJFU0VSVkVEX1NZTUJPTFNfQ09VTlQgPSA2O1xuXG4vLyB0eXBlIFZvY2FidWxhcnkgPSBBcnJheTxbc3RyaW5nLCBudW1iZXJdPjtcblxuLy8gdHlwZSBTY29yZSA9IHtcbi8vICAga2V5OiBzdHJpbmdbXSxcbi8vICAgc2NvcmU6IG51bWJlcixcbi8vICAgaW5kZXg6IG51bWJlclxuLy8gfTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VudGVuY2VQaWVjZVRva2VuaXplciB7XG5cbiAgY29uc3RydWN0b3IoVm9jYWJ1bGFyeSkge1xuICAgIHRoaXMudm9jYWJ1bGFyeSA9IFZvY2FidWxhcnk7XG4gICAgdGhpcy50cmllID0gbmV3IFRyaWUoKTtcblxuICAgIGZvciAobGV0IGkgPSBSRVNFUlZFRF9TWU1CT0xTX0NPVU5UOyBpIDwgdGhpcy52b2NhYnVsYXJ5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLnRyaWUuaW5zZXJ0KHRoaXMudm9jYWJ1bGFyeVtpXVswXSwgdGhpcy52b2NhYnVsYXJ5W2ldWzFdLCBpKTtcbiAgICB9XG4gIH1cblxuICBlbmNvZGUoaW5wdXQpe1xuICAgIGNvbnN0IG5vZGVzID0gW107XG4gICAgY29uc3Qgd29yZHMgPSBbXTtcbiAgICBjb25zdCBiZXN0ID0gW107XG5cbiAgICBpbnB1dCA9IHByb2Nlc3NJbnB1dChpbnB1dCk7XG5cbiAgICBjb25zdCBzeW1ib2xzID0gc3RyaW5nVG9DaGFycyhpbnB1dCk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8PSBzeW1ib2xzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBub2Rlcy5wdXNoKHt9KTtcbiAgICAgIHdvcmRzLnB1c2goMCk7XG4gICAgICBiZXN0LnB1c2goMCk7XG4gICAgfVxuXG4gICAgLy8gQ29uc3RydWN0IHRoZSBsYXR0aWNlLlxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3ltYm9scy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgbWF0Y2hlcyA9IHRoaXMudHJpZS5jb21tb25QcmVmaXhTZWFyY2goc3ltYm9scy5zbGljZShpKSk7XG5cbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbWF0Y2hlcy5sZW5ndGg7IGorKykge1xuICAgICAgICBjb25zdCBwaWVjZSA9IG1hdGNoZXNbal07XG4gICAgICAgIGNvbnN0IG9iaiA9IHtrZXk6IHBpZWNlWzBdLCBzY29yZTogcGllY2VbMV0sIGluZGV4OiBwaWVjZVsyXX07XG5cbiAgICAgICAgY29uc3QgZW5kUG9zID0gcGllY2VbMF0ubGVuZ3RoO1xuICAgICAgICBpZiAobm9kZXNbaSArIGVuZFBvc11baV0gPT0gbnVsbCkge1xuICAgICAgICAgIG5vZGVzW2kgKyBlbmRQb3NdW2ldID0gW107XG4gICAgICAgIH1cblxuICAgICAgICBub2Rlc1tpICsgZW5kUG9zXVtpXS5wdXNoKG9iaik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChsZXQgZW5kUG9zID0gMDsgZW5kUG9zIDw9IHN5bWJvbHMubGVuZ3RoOyBlbmRQb3MrKykge1xuICAgICAgZm9yIChjb25zdCBzdGFydFBvcyBpbiBub2Rlc1tlbmRQb3NdKSB7XG4gICAgICAgIGNvbnN0IGFyciA9IG5vZGVzW2VuZFBvc11bc3RhcnRQb3NdO1xuXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgYXJyLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgY29uc3Qgd29yZCA9IGFycltqXTtcbiAgICAgICAgICBjb25zdCBzY29yZSA9IHdvcmQuc2NvcmUgKyBiZXN0W2VuZFBvcyAtIHdvcmQua2V5Lmxlbmd0aF07XG5cbiAgICAgICAgICBpZiAoYmVzdFtlbmRQb3NdID09PSAwIHx8IHNjb3JlID49IGJlc3RbZW5kUG9zXSkge1xuICAgICAgICAgICAgYmVzdFtlbmRQb3NdID0gc2NvcmU7XG4gICAgICAgICAgICB3b3Jkc1tlbmRQb3NdID0gYXJyW2pdLmluZGV4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHJlc3VsdHMgPSBbXTtcblxuICAgIC8vIEJhY2t3YXJkIHBhc3MuXG4gICAgbGV0IGl0ZXIgPSB3b3Jkcy5sZW5ndGggLSAxO1xuICAgIHdoaWxlIChpdGVyID4gMCkge1xuICAgICAgcmVzdWx0cy5wdXNoKHdvcmRzW2l0ZXJdKTtcbiAgICAgIGl0ZXIgLT0gdGhpcy52b2NhYnVsYXJ5W3dvcmRzW2l0ZXJdXVswXS5sZW5ndGg7XG4gICAgfVxuXG4gICAgLy8gTWVyZ2UgY29uc2VjdXRpdmUgdW5rcy5cbiAgICBjb25zdCBtZXJnZWQgPSBbXTtcbiAgICBsZXQgaXNQcmV2aW91c1VuayA9IGZhbHNlO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVzdWx0cy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgaWQgPSByZXN1bHRzW2ldO1xuICAgICAgaWYgKCEoaXNQcmV2aW91c1VuayAmJiBpZCA9PT0gMCkpIHtcbiAgICAgICAgbWVyZ2VkLnB1c2goaWQpO1xuICAgICAgfVxuXG4gICAgICBpc1ByZXZpb3VzVW5rID0gaWQgPT09IDA7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiBtZXJnZWQucmV2ZXJzZSgpO1xuICB9XG59IiwiaW1wb3J0IHsgZGVmYXVsdCBhcyBTZW50ZW5jZVBpZWNlTW9kZWwgfSBmcm9tICcuL3NlbnRlbmNlUGllY2UnO1xuaW1wb3J0IHsganNvblV0aWxzIH0gZnJvbSAnY2F1c2FsLW5ldC51dGlscyc7XG4vKipcbiAqIFRoaXMgVG9rZW5pemVyIGNsYXNzIGlzIGZvciB0b2tlbml6ZXIgc2VudGVuY2VcbiAqIEBleHBlcmltZW50XG4gKiBAY2xhc3MgVG9rZW5pemVyXG4gKiBAZXhhbXBsZVxuICogW0VYQU1QTEUgLi4vLi4vbmxwUHJlcHJvY2Vzc2luZy5iYWJlbC5qc11cbiAqL1xuY2xhc3MgVG9rZW5pemVye1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMubW9kZWwgPSBudWxsO1xuICAgICAgICB0aGlzLnZvY2FiID0gW107XG4gICAgfVxuICAgIGFzeW5jIGNvbm5lY3QobGluayl7XG4gICAgICAgIHRoaXMudm9jYWIgPSBhd2FpdCBqc29uVXRpbHMucXVlcnlKU09OKGxpbmspO1xuICAgICAgICB0aGlzLm1vZGVsID0gbmV3IFNlbnRlbmNlUGllY2VNb2RlbCh0aGlzLnZvY2FiKTtcbiAgICB9XG4gICAgdG9rZW5pemUodGV4dCwgYXNFbmNvZGU9dHJ1ZSl7XG4gICAgICAgIGxldCB3aWRzID0gIHRoaXMuZW5jb2RlKHRleHQpO1xuICAgICAgICBpZihhc0VuY29kZSl7XG4gICAgICAgICAgICByZXR1cm4gd2lkcztcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgcmV0dXJuIHdpZHMubWFwKGlkPT50aGlzLnZvY2FiW2lkXVswXSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZW5jb2RlKHRleHQpe1xuICAgICAgICBpZighdGhpcy5tb2RlbCl7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcihgbW9kZWwgaXMgbm90IGxvYWRlZGApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLm1vZGVsLmVuY29kZSh0ZXh0KTtcbiAgICB9XG59XG52YXIgdG9rZW5pemVyID0gbmV3IFRva2VuaXplcigpO1xuZXhwb3J0IGRlZmF1bHQgdG9rZW5pemVyOyIsImltcG9ydCB7ZGVmYXVsdCBhcyBzdHJpbmdUb0NoYXJzfSBmcm9tICcuL3V0aWxzJztcbi8vIFt0b2tlbiwgc2NvcmUsIGluZGV4XVxuLy8gdHlwZSBPdXRwdXROb2RlID0gW3N0cmluZ1tdLCBudW1iZXIsIG51bWJlcl07XG5cbmNsYXNzIFRyaWVOb2RlIHtcblxuICBjb25zdHJ1Y3RvcihrZXkpIHtcbiAgICB0aGlzLmtleSA9IGtleTtcbiAgICB0aGlzLnBhcmVudCA9IG51bGw7XG4gICAgdGhpcy5jaGlsZHJlbiA9IHt9O1xuICAgIHRoaXMuZW5kID0gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogVHJhdmVyc2UgdXB3YXJkcyB0aHJvdWdoIHRoZSB0cmllIHRvIGNvbnN0cnVjdCB0aGUgdG9rZW4uXG4gICAqL1xuICBnZXRXb3JkKCkge1xuICAgIGNvbnN0IG91dHB1dCA9IFtdO1xuICAgIGxldCBub2RlID0gdGhpcztcblxuICAgIHdoaWxlIChub2RlICE9PSBudWxsKSB7XG4gICAgICBpZiAobm9kZS5rZXkgIT09IG51bGwpIHtcbiAgICAgICAgb3V0cHV0LnVuc2hpZnQobm9kZS5rZXkpO1xuICAgICAgfVxuICAgICAgbm9kZSA9IG5vZGUucGFyZW50O1xuICAgIH1cblxuICAgIHJldHVybiBbb3V0cHV0LCB0aGlzLnNjb3JlLCB0aGlzLmluZGV4XTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmllIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5yb290ID0gbmV3IFRyaWVOb2RlKG51bGwpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyB3aGV0aGVyIGEgbm9kZSBzdGFydHMgd2l0aCBzcy5cbiAgICpcbiAgICogQHBhcmFtIHNzIFRoZSBwcmVmaXguXG4gICAqIEBwYXJhbSBub2RlIFRoZSBub2RlIGN1cnJlbnRseSBiZWluZyBjb25zaWRlcmVkLlxuICAgKiBAcGFyYW0gYXJyIEFuIGFycmF5IG9mIHRoZSBtYXRjaGluZyB0b2tlbnMgdW5jb3ZlcmVkIHNvIGZhci5cbiAgICovXG4gIGZpbmRBbGxDb21tb25QcmVmaXhlcyhzcywgbm9kZSwgYXJyKSB7XG4gICAgaWYgKG5vZGUuZW5kKSB7XG4gICAgICBjb25zdCB3b3JkID0gbm9kZS5nZXRXb3JkKCk7XG4gICAgICBpZiAoc3Muc2xpY2UoMCwgd29yZFswXS5sZW5ndGgpLmpvaW4oJycpID09PSB3b3JkWzBdLmpvaW4oJycpKSB7XG4gICAgICAgIGFyci51bnNoaWZ0KHdvcmQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoY29uc3QgY2hpbGQgaW4gbm9kZS5jaGlsZHJlbikge1xuICAgICAgdGhpcy5maW5kQWxsQ29tbW9uUHJlZml4ZXMoc3MsIG5vZGUuY2hpbGRyZW5bY2hpbGRdLCBhcnIpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBJbnNlcnRzIGEgdG9rZW4gaW50byB0aGUgdHJpZS5cbiAgICovXG4gIGluc2VydCh3b3JkLCBzY29yZSwgaW5kZXgpIHtcbiAgICBsZXQgbm9kZSA9IHRoaXMucm9vdDtcblxuICAgIGNvbnN0IHN5bWJvbHMgPSBzdHJpbmdUb0NoYXJzKHdvcmQpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzeW1ib2xzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoIW5vZGUuY2hpbGRyZW5bc3ltYm9sc1tpXV0pIHtcbiAgICAgICAgbm9kZS5jaGlsZHJlbltzeW1ib2xzW2ldXSA9IG5ldyBUcmllTm9kZShzeW1ib2xzW2ldKTtcbiAgICAgICAgbm9kZS5jaGlsZHJlbltzeW1ib2xzW2ldXS5wYXJlbnQgPSBub2RlO1xuICAgICAgfVxuXG4gICAgICBub2RlID0gbm9kZS5jaGlsZHJlbltzeW1ib2xzW2ldXTtcblxuICAgICAgaWYgKGkgPT09IHN5bWJvbHMubGVuZ3RoIC0gMSkge1xuICAgICAgICBub2RlLmVuZCA9IHRydWU7XG4gICAgICAgIG5vZGUuc2NvcmUgPSBzY29yZTtcbiAgICAgICAgbm9kZS5pbmRleCA9IGluZGV4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIGFycmF5IG9mIGFsbCB0b2tlbnMgc3RhcnRpbmcgd2l0aCBzcy5cbiAgICpcbiAgICogQHBhcmFtIHNzIFRoZSBwcmVmaXggdG8gbWF0Y2ggb24uXG4gICAqL1xuICBjb21tb25QcmVmaXhTZWFyY2goc3Mpe1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLnJvb3QuY2hpbGRyZW5bc3NbMF1dO1xuICAgIGNvbnN0IG91dHB1dCA9IFtdO1xuICAgIGlmIChub2RlKSB7XG4gICAgICB0aGlzLmZpbmRBbGxDb21tb25QcmVmaXhlcyhzcywgbm9kZSwgb3V0cHV0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3V0cHV0LnB1c2goW1tzc1swXV0sIDAsIDBdKTsgIC8vIHVua25vd24gdG9rZW5cbiAgICB9XG4gICAgcmV0dXJuIG91dHB1dDtcbiAgfVxufVxuIiwiY29uc3Qgc3RyaW5nVG9DaGFycyA9IChpbnB1dCkgPT4ge1xuICAgIGNvbnN0IHN5bWJvbHMgPSBbXTtcbiAgICBmb3IgKGNvbnN0IHN5bWJvbCBvZiBpbnB1dCkge1xuICAgICAgc3ltYm9scy5wdXNoKHN5bWJvbCk7XG4gICAgfVxuICAgIHJldHVybiBzeW1ib2xzO1xufTtcbmV4cG9ydCBkZWZhdWx0IHN0cmluZ1RvQ2hhcnM7IiwiaW1wb3J0IHsgRXZlbnQsIEZ1bmN0b3IgfSBmcm9tICdjYXVzYWwtbmV0LmNvcmUnO1xuaW1wb3J0IHsgcGxhdGZvcm0gfSBmcm9tICdjYXVzYWwtbmV0LnV0aWxzJztcbmltcG9ydCB7IGluZGV4REJTdG9yYWdlLCBTdG9yYWdlTWl4aW5zIH0gZnJvbSAnY2F1c2FsLW5ldC5zdG9yYWdlJztcbmltcG9ydCB7IHRlcm1Mb2dnZXIsIExvZ2dlck1peGlucyB9IGZyb20gJ2NhdXNhbC1uZXQubG9nJztcbmNsYXNzIENhdXNhbE5ldFByZXByb2Nlc3NpbmdTdHJlYW0gZXh0ZW5kcyBwbGF0Zm9ybS5taXhXaXRoKEV2ZW50LCBcbiAgICBbIFN0b3JhZ2VNaXhpbnMsIExvZ2dlck1peGlucyBdKXtcbiAgICBjb25zdHJ1Y3RvcihwcmVwcm9jZXNzaW5nU3RvcmFnZSwgZnVuY3RvciwgbG9nZ2VyKXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5TdG9yYWdlID0gcHJlcHJvY2Vzc2luZ1N0b3JhZ2U7XG4gICAgICAgIHRoaXMuRiA9IGZ1bmN0b3I7XG4gICAgICAgIHRoaXMuUiA9IHRoaXMuRi5Db3JlRnVuY3RvcjtcbiAgICAgICAgdGhpcy5Mb2dnZXIgPSBsb2dnZXI7XG4gICAgICAgIHRoaXMucHJlcHJvY2Vzc2luZ0RhdGEgPSB7IHNhbXBsZXM6IFtdLCBsYWJlbHM6IFtdLCBmaW5pc2hlZDogZmFsc2UsIHRyYWluU2V0OiBbXSwgdGVzdFNldDogW10gfTsgIFxuICAgIH1cbiAgICBnZXQgUHJlcHJvY2Vzc2luZ0RhdGEoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJlcHJvY2Vzc2luZ0RhdGE7XG4gICAgfVxuXG4gICAgZ2V0IFRyYWluU2V0KCl7XG4gICAgICAgIHJldHVybiB0aGlzLnByZXByb2Nlc3NpbmdEYXRhLnRyYWluU2V0O1xuICAgIH1cblxuICAgIGdldCBUZXN0U2V0KCl7XG4gICAgICAgIHJldHVybiB0aGlzLnByZXByb2Nlc3NpbmdEYXRhLnRlc3RTZXQ7XG4gICAgfVxuICAgIFxuICAgIHNldCBTYW1wbGVUcmFuc2Zvcm1lcihzYW1wbGVGbil7XG4gICAgICAgIHRoaXMuc2FtcGxlRm4gPSBzYW1wbGVGbjtcbiAgICB9XG4gICAgc2V0IExhYmVsVHJhbnNmb3JtZXIobGFiZWxGbil7XG4gICAgICAgIHRoaXMubGFiZWxGbiA9IGxhYmVsRm47XG4gICAgfVxuICAgIGdldCBTYW1wbGVUcmFuc2Zvcm1lcigpe1xuICAgICAgICBpZighdGhpcy5zYW1wbGVGbil7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignU2FtcGxlVHJhbnNmb3JtZXIgaXMgbm90IHNldCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnNhbXBsZUZuO1xuICAgIH1cbiAgICBnZXQgTGFiZWxUcmFuc2Zvcm1lcigpe1xuICAgICAgICBpZighdGhpcy5sYWJlbEZuKXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdMYWJlbFRyYW5zZm9ybWVyIGlzIG5vdCBzZXQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5sYWJlbEZuO1xuICAgIH1cbiAgICBnZXQgRGF0YUhhbmRsZXIoKXtcbiAgICAgICAgaWYoIXRoaXMuZGF0YUhhbmRsZXIpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ0RhdGFIYW5kbGVyIGlzIG5vdCBzZXQnKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRhdGFIYW5kbGVyO1xuICAgIH1cblxuICAgIHNldERhdGFIYW5kbGVyKCl7XG4gICAgICAgIGNvbnN0IFNhbXBsZVRyYW5zZm9ybWVyID0gdGhpcy5TYW1wbGVUcmFuc2Zvcm1lcjtcbiAgICAgICAgY29uc3QgTGFiZWxUcmFuc2Zvcm1lciA9IHRoaXMuTGFiZWxUcmFuc2Zvcm1lcjtcbiAgICAgICAgY29uc3QgU3RvcmFnZSA9IHRoaXMuU3RvcmFnZTtcbiAgICAgICAgY29uc3QgUHJvZ3Jlc3NMZW5zZXMgPSAoe2lkeCwgcmFuZ2UsIG1lc3NhZ2V9KT0+eyBcbiAgICAgICAgICAgIGlmKGlkeCA9PT0gMCl7XG4gICAgICAgICAgICAgICAgdGhpcy5Mb2dnZXIucHJvZ3Jlc3NCZWdpbihyYW5nZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoaWR4ICsgMSA9PT0gcmFuZ2Upe1xuICAgICAgICAgICAgICAgIHRoaXMuTG9nZ2VyLnByb2dyZXNzRW5kKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5Mb2dnZXIucHJvZ3Jlc3NVcGRhdGUobWVzc2FnZSk7XG4gICAgICAgIH07XG4gICAgICAgICAgICBcbiAgICAgICAgdGhpcy5kYXRhSGFuZGxlciA9IChkYXRhKT0+e1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlLCByZWplY3QpPT57XG4gICAgICAgICAgICAgICAgbGV0IGNodW5rTmFtZSA9IGRhdGEuQ2h1bmtOYW1lO1xuICAgICAgICAgICAgICAgIGlmKGNodW5rTmFtZSA9PT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGBjaHVua05hbWUgaXMgbm90IGRlZmluZWRgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYoZGF0YS5TYW1wbGUpe1xuICAgICAgICAgICAgICAgICAgICBsZXQgaWRlbnRpdHkgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGZvcihsZXQgW2lkeCwgc2FtcGxlXSBvZiB0aGlzLkYuZW51bWVyYXRlKGRhdGEuU2FtcGxlKSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBQcm9ncmVzc0xlbnNlcyh7aWR4LCByYW5nZTogZGF0YS5TYW1wbGUubGVuZ3RoLCBtZXNzYWdlOiAncHJlcHJvY2Vzc2luZyBTYW1wbGU6ICcgKyBpZHggfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzYW1wbGUgPSBhd2FpdCBTYW1wbGVUcmFuc2Zvcm1lcihzYW1wbGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWRlbnRpdHkgPSBjaHVua05hbWUgKyAnLycgKyBpZHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBTdG9yYWdlLnNldEl0ZW0oJ3ByZXByb2Nlc3Npbmcvc2FtcGxlLycgKyBpZGVudGl0eSwgSlNPTi5zdHJpbmdpZnkoc2FtcGxlKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByZXByb2Nlc3NpbmdEYXRhLnNhbXBsZXMucHVzaChpZGVudGl0eSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZihkYXRhLkxhYmVsKXtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGlkZW50aXR5ID0gJyc7XG4gICAgICAgICAgICAgICAgICAgIGZvcihsZXQgW2lkeCwgbGFiZWxdIG9mIHRoaXMuRi5lbnVtZXJhdGUoZGF0YS5MYWJlbCkpe1xuICAgICAgICAgICAgICAgICAgICAgICAgUHJvZ3Jlc3NMZW5zZXMoe2lkeCwgcmFuZ2U6IGRhdGEuTGFiZWwubGVuZ3RoLCBtZXNzYWdlOiAncHJlcHJvY2Vzc2luZyBMYWJlbDogJyArIGlkeCB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsID0gYXdhaXQgTGFiZWxUcmFuc2Zvcm1lcihsYWJlbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZGVudGl0eSA9IGNodW5rTmFtZSArICcvJyArIGlkeDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IFN0b3JhZ2Uuc2V0SXRlbSgncHJlcHJvY2Vzc2luZy9sYWJlbC8nICsgaWRlbnRpdHksIEpTT04uc3RyaW5naWZ5KGxhYmVsKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByZXByb2Nlc3NpbmdEYXRhLmxhYmVscy5wdXNoKGlkZW50aXR5KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgfSk7IFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLm9uKCdkYXRhJywgdGhpcy5kYXRhSGFuZGxlcik7XG4gICAgfVxuICAgIFxuICAgIHNwbGl0RGF0YXNldCh0cmFpblNpemU9MC45KXtcbiAgICAgICAgY29uc3QgUiA9IHRoaXMuRi5Db3JlRnVuY3RvcjtcbiAgICAgICAgLy9UT0RPOiBlbmhhbmNlIHRoaXMgZm9yIGhhbmRsZSBtaXNzaW5nIGRhdGEvbGFiZWwgY2FzZVxuICAgICAgICBsZXQgeyBzYW1wbGVzLCBsYWJlbHMgfSA9IHRoaXMucHJlcHJvY2Vzc2luZ0RhdGE7XG4gICAgICAgIGxldCBkYXRhID0gdGhpcy5GLnppcChzYW1wbGVzLCBsYWJlbHMpO1xuICAgICAgICBpZih0cmFpblNpemUgPCAxKXtcbiAgICAgICAgICAgIHRyYWluU2l6ZSA9IHBhcnNlSW50KGRhdGEubGVuZ3RoKnRyYWluU2l6ZSk7XG4gICAgICAgIH0gICAgXG4gICAgICAgIGNvbnN0IFsgdHJhaW5TZXQsIHRlc3RTZXQgXSA9IFIuc3BsaXRBdCh0cmFpblNpemUsIGRhdGEpO1xuICAgICAgICB0aGlzLnByZXByb2Nlc3NpbmdEYXRhLnRyYWluU2V0ID0gdHJhaW5TZXQ7XG4gICAgICAgIHRoaXMucHJlcHJvY2Vzc2luZ0RhdGEudGVzdFNldCA9IHRlc3RTZXQ7XG4gICAgICAgIHJldHVybiBbdHJhaW5TZXQsIHRlc3RTZXRdO1xuICAgIH1cbiAgICBtYWtlQmF0Y2hHZW5lcmF0b3IoYmF0Y2hEYXRhKXtcbiAgICAgICAgY29uc3QgU3RvcmFnZSA9IHRoaXMuU3RvcmFnZTtcbiAgICAgICAgbGV0IG5leHRJbmRleCA9IDA7XG4gICAgICAgIGNvbnN0IGJhdGNoR2VuZXJhdG9yID0ge1xuICAgICAgICAgICAgICAgIG5leHQ6IGFzeW5jKCk9PntcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNhbXBsZXMgPSBbXSwgbGFiZWxzID0gW107XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IFtzYW1wbGVQYXRoLCBsYWJlbFBhdGhdIG9mIGJhdGNoRGF0YVtuZXh0SW5kZXhdKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNhbXBsZVBhdGggPSAncHJlcHJvY2Vzc2luZy9zYW1wbGUvJyArIHNhbXBsZVBhdGg7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbFBhdGggPSAncHJlcHJvY2Vzc2luZy9sYWJlbC8nICsgbGFiZWxQYXRoO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNhbXBsZUl0ZW0gPSBhd2FpdCBTdG9yYWdlLmdldEl0ZW0oc2FtcGxlUGF0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbGFiZWxJdGVtID0gYXdhaXQgU3RvcmFnZS5nZXRJdGVtKGxhYmVsUGF0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL1RPRE86IGZpeCB0aGlzIGlzc3VlIG9mIHVuYWxpZ24gZm9ybWF0IG9mIGl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzYW1wbGUgPSBKU09OLnBhcnNlKHNhbXBsZUl0ZW1bc2FtcGxlUGF0aF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2FtcGxlID0gKHNhbXBsZS5kYXRhKT9zYW1wbGUuZGF0YTpzYW1wbGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbGFiZWwgPSBKU09OLnBhcnNlKGxhYmVsSXRlbVtsYWJlbFBhdGhdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsID0gKGxhYmVsLmRhdGEpP2xhYmVsLmRhdGE6bGFiZWw7XG4gICAgICAgICAgICAgICAgICAgICAgICBzYW1wbGVzLnB1c2goc2FtcGxlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVscy5wdXNoKGxhYmVsKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBuZXh0SW5kZXggKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7IHNhbXBsZXMsIGxhYmVscyB9O1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgKltTeW1ib2wuaXRlcmF0b3JdKCkge1xuICAgICAgICAgICAgICAgICAgICB3aGlsZShuZXh0SW5kZXggPCBiYXRjaERhdGEubGVuZ3RoKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHlpZWxkIHRoaXMubmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIGJhdGNoR2VuZXJhdG9yO1xuICAgIH1cbiAgICBtYWtlVHJhaW5EYXRhR2VuZXJhdG9yKCl7XG4gICAgICAgIGNvbnN0IFIgPSB0aGlzLlI7XG4gICAgICAgIGNvbnN0IFRyYWluU2V0ID0gdGhpcy5UcmFpblNldDtcbiAgICAgICAgcmV0dXJuIChiYXRjaFNpemU9VHJhaW5TZXQubGVuZ3RoKT0+e1xuICAgICAgICAgICAgbGV0IGJhdGNoRGF0YSA9IFIuc3BsaXRFdmVyeShiYXRjaFNpemUsIFRyYWluU2V0KTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1ha2VCYXRjaEdlbmVyYXRvcihiYXRjaERhdGEpO1xuICAgICAgICB9O1xuICAgICAgICBcbiAgICB9XG4gICAgbWFrZVRlc3REYXRhR2VuZXJhdG9yKCl7XG4gICAgICAgIGNvbnN0IFIgPSB0aGlzLlI7XG4gICAgICAgIGNvbnN0IFRlc3RTZXQgPSB0aGlzLlRlc3RTZXQ7XG4gICAgICAgIHJldHVybiAoYmF0Y2hTaXplPVRlc3RTZXQubGVuZ3RoKT0+e1xuICAgICAgICAgICAgLy9UT0RPOiBwZXJmb3JtIHBlcm11dGF0ZVxuICAgICAgICAgICAgbGV0IGJhdGNoRGF0YSA9IFIuc3BsaXRFdmVyeShiYXRjaFNpemUsIFRlc3RTZXQpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubWFrZUJhdGNoR2VuZXJhdG9yKGJhdGNoRGF0YSk7XG4gICAgICAgIH07XG4gICAgfVxufVxudmFyIGZ1bmN0b3IgPSBuZXcgRnVuY3RvcigpO1xuZXhwb3J0IGRlZmF1bHQgbmV3IENhdXNhbE5ldFByZXByb2Nlc3NpbmdTdHJlYW0oaW5kZXhEQlN0b3JhZ2UsIGZ1bmN0b3IsIHRlcm1Mb2dnZXIpOyIsImltcG9ydCB7IEZ1bmN0b3IgYXMgQmFzZUZ1bmN0b3IgfSBmcm9tICdjYXVzYWwtbmV0LmNvcmUnO1xuaW1wb3J0IHsgcGxhdGZvcm0gfSBmcm9tICdjYXVzYWwtbmV0LnV0aWxzJztcbmltcG9ydCB7IENvbG9yVHJhbnNmb3JtaW5nTWl4aW5zLCBJbWFnZVNwbGl0dGluZ01peGlucywgSW1hZ2VTY2FsaW5nTWl4aW5zIH0gZnJvbSAnLi9JbWFnZS9pbmRleCc7XG5cbi8qKlxuICogVGhpcyBJbWFnZVByZXByb2Nlc3NpbmcgcHJvdmlkZSBtZXRob2RzIGZvciBwcmVwcm9jZXNzaW5nIGltYWdlIGRhdGFcbiAqIHsgTWl4V2l0aDogW1xuICogICAgICAgICBDb2xvclRyYW5zZm9ybWluZ01peGlucywgSW1hZ2VTcGxpdHRpbmdNaXhpbnNcbiAqICAgICBdIH1cbiAqIEBjbGFzcyBJbWFnZVByZXByb2Nlc3NpbmdcbiAqIEBleHRlbmRzIEJhc2VGdW5jdG9yXG4gKiBAZXhhbXBsZVxuICogW0VYQU1QTEUgLi4vZXhhbXBsZXMvaW1hZ2VQcmVwcm9jZXNzaW5nLmJhYmVsLm5vZGUuanNdXG4gKi9cbmNsYXNzIEltYWdlUHJlcHJvY2Vzc2luZyBleHRlbmRzIHBsYXRmb3JtLm1peFdpdGgoQmFzZUZ1bmN0b3IsIFtcbiAgICAgICAgQ29sb3JUcmFuc2Zvcm1pbmdNaXhpbnMsIFxuICAgICAgICBJbWFnZVNwbGl0dGluZ01peGlucyxcbiAgICAgICAgSW1hZ2VTY2FsaW5nTWl4aW5zIF0pe1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgSW1hZ2VQcmVwcm9jZXNzaW5nOyIsImV4cG9ydCB7IGRlZmF1bHQgYXMgY2F1c2FsTmV0UHJlcHJvY2Vzc2luZ1N0cmVhbSB9IGZyb20gJy4vY2F1c2FsTmV0UHJlcHJvY2Vzc2luZ1N0cmVhbSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFByZXByb2Nlc3NpbmdNaXhpbnN9IGZyb20gJy4vcHJlcHJvY2Vzc2luZy5taXhpbnMnO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIGltYWdlUHJlcHJvY2Vzc2luZyB9IGZyb20gJy4vaW1hZ2VQcmVwcm9jZXNzaW5nJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgbmxwUHJlcHJvY2Vzc2luZyB9IGZyb20gJy4vbmxwUHJlcHJvY2Vzc2luZyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHRhYnVsYXJQcmVwcm9jZXNzaW5nIH0gZnJvbSAnLi90YWJ1bGFyUHJlcHJvY2Vzc2luZyc7XG5cbmV4cG9ydCB7IHRva2VuaXplciB9IGZyb20gJy4vVG9rZW5pemVyL2luZGV4JzsiLCJpbXBvcnQgeyBGdW5jdG9yIGFzIEJhc2VGdW5jdG9yIH0gZnJvbSAnY2F1c2FsLW5ldC5jb3JlJztcbmltcG9ydCB7IHBsYXRmb3JtIH0gZnJvbSAnY2F1c2FsLW5ldC51dGlscyc7XG5pbXBvcnQgeyBUb2tlblRyYW5zZm9ybWluZ01peGlucyB9IGZyb20gJy4vTkxQL2luZGV4Jztcbi8qKlxuICogVGhpcyBOTFBQcmVwcm9jZXNzaW5nIGNsYXNzIHByb3ZpZGUgbWV0aG9kcyBmb3IgcHJlcHJvY2Vzc2luZyB0ZXh0IGFuZCBvdXRwdXQgdmFsaWQgdG9rZW5zLlxuICogeyBNaXhXaXRoOlxuICogICAgIFsgVG9rZW5UcmFuc2Zvcm1pbmdNaXhpbnMgXSkgfVxuICogQGNsYXNzIE5MUFByZXByb2Nlc3NpbmdcbiAqIEBleHRlbmRzIEJhc2VGdW5jdG9yXG4gKiBAZXhhbXBsZVxuICogWyFFWEFNUExFIC4uL2V4YW1wbGVzL25scFByZXByb2Nlc3NpbmcuYmFiZWwubm9kZS5qc11cbiAqL1xuXG5jbGFzcyBOTFBQcmVwcm9jZXNzaW5nIGV4dGVuZHMgcGxhdGZvcm0ubWl4V2l0aChCYXNlRnVuY3RvciwgXG4gICAgWyBUb2tlblRyYW5zZm9ybWluZ01peGlucyBdKXtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBUaGlzIG1ldGhvZCBpcyB1c2VkIGluIGNhc2UgdG9rZW5pemVyIHJlcXVpcmVzIGRhdGEgc2V0dXAuXG4gICAgICogQHBhcmFtIHsgVXJsfEZpbGVQYXRoIH0gY29uZmlnTGlua1xuICAgICAqIEBtZW1iZXJvZiBOTFBQcmVwcm9jZXNzaW5nXG4gICAgICovXG4gICAgY29ubmVjdChjb25maWdMaW5rKXtcbiAgICAgICAgdGhpcy50b2tlbml6ZXIuY29ubmVjdChjb25maWdMaW5rKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IHRva2VuaXplclxuICAgICAqXG4gICAgICogQG1lbWJlcm9mIE5MUFByZXByb2Nlc3NpbmdcbiAgICAgKi9cbiAgICBnZXQgVG9rZW5pemVyKCl7XG4gICAgICAgIGlmKCF0aGlzLnRva2VuaXplcil7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcigndG9rZW5pemVyIGlzIG5vdCBzZXQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy50b2tlbml6ZXI7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldCB0b2tlbml6ZXJcbiAgICAgKiBAcGFyYW0geyBPYmplY3QgfSB0b2tlbml6ZXIgLSB0b2tlbml6ZXIgb2JqZWN0XG4gICAgICogQG1lbWJlcm9mIE5MUFByZXByb2Nlc3NpbmdcbiAgICAgKi9cbiAgICBzZXQgVG9rZW5pemVyKHRva2VuaXplcil7XG4gICAgICAgIHRoaXMudG9rZW5pemVyID0gdG9rZW5pemVyO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IE5MUFByZXByb2Nlc3Npbmc7IiwiY29uc3QgUHJlcHJvY2Vzc2luZ01peGlucyA9IChCYXNlUGlwZWxpbmVDbGFzcykgPT4gY2xhc3MgZXh0ZW5kcyBCYXNlUGlwZWxpbmVDbGFzc3tcbiAgICBnZXQgUHJlcHJvY2Vzc2luZygpe1xuICAgICAgICBpZiggIXRoaXMuc3RyZWFtUHJlcHJvY2Vzc2luZyApe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ3N0cmVhbVByZXByb2Nlc3NpbmcgaXMgbm90IHNldCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnN0cmVhbVByZXByb2Nlc3Npbmc7XG4gICAgfVxuXG4gICAgc2V0IFByZXByb2Nlc3Npbmcoc3RyZWFtUHJlcHJvY2Vzc2luZyl7XG4gICAgICAgIHRoaXMuc3RyZWFtUHJlcHJvY2Vzc2luZyA9IHN0cmVhbVByZXByb2Nlc3Npbmc7XG4gICAgfVxuXG4gICAgc3BsaXREYXRhc2V0KHJhdGlvPTAuOSl7XG4gICAgICAgIHJldHVybiB0aGlzLlByZXByb2Nlc3Npbmcuc3BsaXREYXRhc2V0KHJhdGlvKTtcbiAgICB9XG5cbiAgICBzZXRCeUNvbmZpZyhwaXBlbGluZUNvbmZpZyl7XG4gICAgICAgIGlmKHN1cGVyLnNldEJ5Q29uZmlnKXtcbiAgICAgICAgICAgIHN1cGVyLnNldEJ5Q29uZmlnKHBpcGVsaW5lQ29uZmlnKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLkxvZ2dlci5ncm91cEJlZ2luKCdzZXQgUHJlcHJvY2Vzc2luZyBieSBjb25maWcnKTtcbiAgICAgICAgaWYodGhpcy5EYXRhU291cmNlUmVhZGVyKXtcbiAgICAgICAgICAgIGNvbnN0IHsgUHJlcHJvY2Vzc2luZyB9ID0gcGlwZWxpbmVDb25maWcuRGF0YXNldDtcbiAgICAgICAgICAgIGlmKCFQcmVwcm9jZXNzaW5nKXtcbiAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihgZXhwZWN0IHsgUHJlcHJvY2Vzc2luZyB9IGdldCAke0pTT04uc3RyaW5naWZ5KHBpcGVsaW5lQ29uZmlnLkRhdGFzZXQpfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgeyBTYW1wbGVUcmFuc2Zvcm1lciwgTGFiZWxUcmFuc2Zvcm1lciB9ID0gUHJlcHJvY2Vzc2luZztcbiAgICAgICAgICAgIGlmKCFTYW1wbGVUcmFuc2Zvcm1lciB8fCAhTGFiZWxUcmFuc2Zvcm1lcil7XG4gICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoYGV4cGVjdCB7IFNhbXBsZVRyYW5zZm9ybWVyLCBMYWJlbFRyYW5zZm9ybWVyIH0gXG4gICAgICAgICAgICAgICAgICAgIGdldCAke0pTT04uc3RyaW5naWZ5KHBpcGVsaW5lQ29uZmlnLkRhdGFzZXQuUHJlcHJvY2Vzc2luZyl9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLlByZXByb2Nlc3NpbmcuU2FtcGxlVHJhbnNmb3JtZXIgPSBTYW1wbGVUcmFuc2Zvcm1lcjtcbiAgICAgICAgICAgIHRoaXMuUHJlcHJvY2Vzc2luZy5MYWJlbFRyYW5zZm9ybWVyID0gTGFiZWxUcmFuc2Zvcm1lcjtcbiAgICAgICAgICAgIHRoaXMuUHJlcHJvY2Vzc2luZy5TYW1wbGVUcmFuc2Zvcm1lciA9IHRoaXMuUHJlcHJvY2Vzc2luZy5TYW1wbGVUcmFuc2Zvcm1lci5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5QcmVwcm9jZXNzaW5nLkxhYmVsVHJhbnNmb3JtZXIgPSB0aGlzLlByZXByb2Nlc3NpbmcuTGFiZWxUcmFuc2Zvcm1lci5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5QcmVwcm9jZXNzaW5nLnNldERhdGFIYW5kbGVyKCk7XG4gICAgICAgICAgICB0aGlzLkRhdGFTb3VyY2VSZWFkZXIucGlwZSh0aGlzLlByZXByb2Nlc3NpbmcpO1xuICAgICAgICAgICAgcGlwZWxpbmVDb25maWcuRGF0YXNldC5UcmFpbkRhdGFHZW5lcmF0b3IgPSB0aGlzLlByZXByb2Nlc3NpbmcubWFrZVRyYWluRGF0YUdlbmVyYXRvcigpO1xuICAgICAgICAgICAgcGlwZWxpbmVDb25maWcuRGF0YXNldC5UZXN0RGF0YUdlbmVyYXRvciA9IHRoaXMuUHJlcHJvY2Vzc2luZy5tYWtlVGVzdERhdGFHZW5lcmF0b3IoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLkxvZ2dlci5ncm91cEVuZCgpO1xuICAgICAgICByZXR1cm4gcGlwZWxpbmVDb25maWc7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJlcHJvY2Vzc2luZ01peGluczsiLCJpbXBvcnQgeyBGdW5jdG9yIGFzIEJhc2VGdW5jdG9yIH0gZnJvbSAnY2F1c2FsLW5ldC5jb3JlJztcbmltcG9ydCB7IHBsYXRmb3JtIH0gZnJvbSAnY2F1c2FsLW5ldC51dGlscyc7XG5pbXBvcnQgeyBDYXRlZ29yeU5vcm1hbGl6aW5nTWl4aW5zIH0gZnJvbSAnLi9UYWJ1bGFyL2luZGV4JztcbmNsYXNzIFRhYnVsYXJQcmVwcm9jZXNzaW5nIGV4dGVuZHMgcGxhdGZvcm0ubWl4V2l0aChCYXNlRnVuY3RvciwgXG4gICAgW0NhdGVnb3J5Tm9ybWFsaXppbmdNaXhpbnNdKXtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFRhYnVsYXJQcmVwcm9jZXNzaW5nOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9sb2dfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9zdG9yYWdlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfdXRpbHNfXzsiXSwic291cmNlUm9vdCI6IiJ9