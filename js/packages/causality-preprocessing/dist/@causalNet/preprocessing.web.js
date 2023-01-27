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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3ByZXByb2Nlc3Npbmcvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0BjYXVzYWxOZXQvcHJlcHJvY2Vzc2luZy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3ByZXByb2Nlc3NpbmcvL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvYmFzZTY0LWpzL2luZGV4LmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcHJlcHJvY2Vzc2luZy8vaG9tZS9odXluaG5ndXllbi9naXRodWIvY2F1c2FsaXR5L25vZGVfbW9kdWxlcy9idWZmZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9wcmVwcm9jZXNzaW5nLy9ob21lL2h1eW5obmd1eWVuL2dpdGh1Yi9jYXVzYWxpdHkvbm9kZV9tb2R1bGVzL2J1ZmZlci9ub2RlX21vZHVsZXMvaXNhcnJheS9pbmRleC5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3ByZXByb2Nlc3NpbmcvL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvaWVlZTc1NC9pbmRleC5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3ByZXByb2Nlc3NpbmcvKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcHJlcHJvY2Vzc2luZy8uL3NyYy9JbWFnZS9ib3hTY2FsaW5nLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcHJlcHJvY2Vzc2luZy8uL3NyYy9JbWFnZS9jb2xvclRyYW5zZm9ybWluZy5taXhpbnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9wcmVwcm9jZXNzaW5nLy4vc3JjL0ltYWdlL2ltYWdlU2NhbGluZy5taXhpbnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9wcmVwcm9jZXNzaW5nLy4vc3JjL0ltYWdlL2ltYWdlU3BsaXR0aW5nLm1peGlucy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3ByZXByb2Nlc3NpbmcvLi9zcmMvSW1hZ2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9wcmVwcm9jZXNzaW5nLy4vc3JjL05MUC9pbmRleC5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3ByZXByb2Nlc3NpbmcvLi9zcmMvTkxQL3Rva2VuVHJhbnNmb3JtaW5nLm1peGlucy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3ByZXByb2Nlc3NpbmcvLi9zcmMvVGFidWxhci9jYXRlZ29yeU5vcm1hbGl6aW5nLm1peGlucy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3ByZXByb2Nlc3NpbmcvLi9zcmMvVGFidWxhci9pbmRleC5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3ByZXByb2Nlc3NpbmcvLi9zcmMvVG9rZW5pemVyL2luZGV4LmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcHJlcHJvY2Vzc2luZy8uL3NyYy9Ub2tlbml6ZXIvc2VudGVuY2VQaWVjZS5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3ByZXByb2Nlc3NpbmcvLi9zcmMvVG9rZW5pemVyL3Rva2VuaXplci5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3ByZXByb2Nlc3NpbmcvLi9zcmMvVG9rZW5pemVyL3RyaWUuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9wcmVwcm9jZXNzaW5nLy4vc3JjL1Rva2VuaXplci91dGlscy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3ByZXByb2Nlc3NpbmcvLi9zcmMvY2F1c2FsTmV0UHJlcHJvY2Vzc2luZ1N0cmVhbS5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3ByZXByb2Nlc3NpbmcvLi9zcmMvaW1hZ2VQcmVwcm9jZXNzaW5nLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcHJlcHJvY2Vzc2luZy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3ByZXByb2Nlc3NpbmcvLi9zcmMvbmxwUHJlcHJvY2Vzc2luZy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3ByZXByb2Nlc3NpbmcvLi9zcmMvcHJlcHJvY2Vzc2luZy5taXhpbnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9wcmVwcm9jZXNzaW5nLy4vc3JjL3RhYnVsYXJQcmVwcm9jZXNzaW5nLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcHJlcHJvY2Vzc2luZy9leHRlcm5hbCBcImNhdXNhbC1uZXQuY29yZVwiIiwid2VicGFjazovL0BjYXVzYWxOZXQvcHJlcHJvY2Vzc2luZy9leHRlcm5hbCBcImNhdXNhbC1uZXQubG9nXCIiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9wcmVwcm9jZXNzaW5nL2V4dGVybmFsIFwiY2F1c2FsLW5ldC5zdG9yYWdlXCIiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9wcmVwcm9jZXNzaW5nL2V4dGVybmFsIFwiY2F1c2FsLW5ldC51dGlsc1wiIl0sIm5hbWVzIjpbImJ1ZmZlciIsIm9yaWdpblNpemUiLCJuZXdTaXplIiwic1giLCJzWSIsInNXIiwic0giLCJkWCIsImRZIiwiZFciLCJkSCIsInRhcmdldEJ1ZmZlciIsIkJ1ZmZlciIsImFsbG9jIiwiY29weSIsInlzIiwieWQiLCJ4cyIsInhkIiwiY291bnQiLCJ5X3NocmluayIsInhfZnVuIiwieV8iLCJNYXRoIiwiZmxvb3IiLCJ5X2dyb3ciLCJ4X3NocmluayIsInhfIiwieF9ncm93IiwiQ29sb3JUcmFuc2Zvcm1pbmdNaXhpbnMiLCJQcmVwcm9jZXNzaW5nQ2xhc3MiLCJjb2xvclRyYW5zZm9ybSIsInRyYW5mb3JtRm4iLCJzYW1wbGVCdWZmZXIiLCJjaGFubmVsU2l6ZSIsIlIiLCJmbGF0dGVuIiwibWFwIiwic3BsaXRFdmVyeSIsImJsYWNrV2hpdGVUcmFuc2Zvcm0iLCJCbGFja1doaXRlRm4iLCJwaXhlbCIsInBpeGVsVmFsdWUiLCJvbmVCaXRUcmFuc2Zvcm0iLCJJbWFnZVNjYWxpbmdNaXhpbnMiLCJpbWFnZVJlc2l6ZSIsImZyb20iLCJCb3hTY2FsaW5nIiwiSW1hZ2VTcGxpdHRpbmdNaXhpbnMiLCJpbWFnZVNwbGl0Iiwic3BsaXRTaXplIiwiVG9rZW5UcmFuc2Zvcm1pbmdNaXhpbnMiLCJ0b2tlbml6ZSIsInNlbnRlbmNlIiwiVG9rZW5pemVyIiwidG9rZW5pemVyIiwiYmFkV29yZHNGaWx0ZXIiLCJ0b2tlbnMiLCJiYWRXb3JkTGlzdCIsImZpbHRlciIsInRva2VuIiwibm90IiwiZmluZCIsImVxdWFscyIsIndvcmRGcmVxQ291bnQiLCJmcmVxQ291bnQiLCJVcGRhdGVGcmVxIiwidW5kZWZpbmVkIiwicmVkdWNlIiwid29yZER1cGxpY2F0ZVJlbW92ZSIsInVuaXEiLCJDYXRlZ29yeU5vcm1hbGl6aW5nTWl4aW5zIiwib25lSG90RW5jb2RlIiwic2FtcGxlIiwiY2F0ZWdvcmllcyIsImNvZGUiLCJ6ZXJvcyIsImxlbmd0aCIsImlkeCIsImluZGV4T2YiLCJzZXBhcmF0b3IiLCJwcm9jZXNzSW5wdXQiLCJzdHIiLCJub3JtYWxpemVkIiwibm9ybWFsaXplIiwicmVwbGFjZSIsIlJFU0VSVkVEX1NZTUJPTFNfQ09VTlQiLCJTZW50ZW5jZVBpZWNlVG9rZW5pemVyIiwiY29uc3RydWN0b3IiLCJWb2NhYnVsYXJ5Iiwidm9jYWJ1bGFyeSIsInRyaWUiLCJUcmllIiwiaSIsImluc2VydCIsImVuY29kZSIsImlucHV0Iiwibm9kZXMiLCJ3b3JkcyIsImJlc3QiLCJzeW1ib2xzIiwic3RyaW5nVG9DaGFycyIsInB1c2giLCJtYXRjaGVzIiwiY29tbW9uUHJlZml4U2VhcmNoIiwic2xpY2UiLCJqIiwicGllY2UiLCJvYmoiLCJrZXkiLCJzY29yZSIsImluZGV4IiwiZW5kUG9zIiwic3RhcnRQb3MiLCJhcnIiLCJ3b3JkIiwicmVzdWx0cyIsIml0ZXIiLCJtZXJnZWQiLCJpc1ByZXZpb3VzVW5rIiwiaWQiLCJyZXZlcnNlIiwibW9kZWwiLCJ2b2NhYiIsImNvbm5lY3QiLCJsaW5rIiwianNvblV0aWxzIiwicXVlcnlKU09OIiwiU2VudGVuY2VQaWVjZU1vZGVsIiwidGV4dCIsImFzRW5jb2RlIiwid2lkcyIsIkVycm9yIiwiVHJpZU5vZGUiLCJwYXJlbnQiLCJjaGlsZHJlbiIsImVuZCIsImdldFdvcmQiLCJvdXRwdXQiLCJub2RlIiwidW5zaGlmdCIsInJvb3QiLCJmaW5kQWxsQ29tbW9uUHJlZml4ZXMiLCJzcyIsImpvaW4iLCJjaGlsZCIsInN5bWJvbCIsIkNhdXNhbE5ldFByZXByb2Nlc3NpbmdTdHJlYW0iLCJwbGF0Zm9ybSIsIm1peFdpdGgiLCJFdmVudCIsIlN0b3JhZ2VNaXhpbnMiLCJMb2dnZXJNaXhpbnMiLCJwcmVwcm9jZXNzaW5nU3RvcmFnZSIsImZ1bmN0b3IiLCJsb2dnZXIiLCJTdG9yYWdlIiwiRiIsIkNvcmVGdW5jdG9yIiwiTG9nZ2VyIiwicHJlcHJvY2Vzc2luZ0RhdGEiLCJzYW1wbGVzIiwibGFiZWxzIiwiZmluaXNoZWQiLCJ0cmFpblNldCIsInRlc3RTZXQiLCJQcmVwcm9jZXNzaW5nRGF0YSIsIlRyYWluU2V0IiwiVGVzdFNldCIsIlNhbXBsZVRyYW5zZm9ybWVyIiwic2FtcGxlRm4iLCJMYWJlbFRyYW5zZm9ybWVyIiwibGFiZWxGbiIsIkRhdGFIYW5kbGVyIiwiZGF0YUhhbmRsZXIiLCJzZXREYXRhSGFuZGxlciIsIlByb2dyZXNzTGVuc2VzIiwicmFuZ2UiLCJtZXNzYWdlIiwicHJvZ3Jlc3NCZWdpbiIsInByb2dyZXNzRW5kIiwicHJvZ3Jlc3NVcGRhdGUiLCJkYXRhIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJjaHVua05hbWUiLCJDaHVua05hbWUiLCJTYW1wbGUiLCJpZGVudGl0eSIsImVudW1lcmF0ZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwiTGFiZWwiLCJsYWJlbCIsIm9uIiwic3BsaXREYXRhc2V0IiwidHJhaW5TaXplIiwiemlwIiwicGFyc2VJbnQiLCJzcGxpdEF0IiwibWFrZUJhdGNoR2VuZXJhdG9yIiwiYmF0Y2hEYXRhIiwibmV4dEluZGV4IiwiYmF0Y2hHZW5lcmF0b3IiLCJuZXh0Iiwic2FtcGxlUGF0aCIsImxhYmVsUGF0aCIsInNhbXBsZUl0ZW0iLCJnZXRJdGVtIiwibGFiZWxJdGVtIiwicGFyc2UiLCJTeW1ib2wiLCJpdGVyYXRvciIsIm1ha2VUcmFpbkRhdGFHZW5lcmF0b3IiLCJiYXRjaFNpemUiLCJtYWtlVGVzdERhdGFHZW5lcmF0b3IiLCJGdW5jdG9yIiwiaW5kZXhEQlN0b3JhZ2UiLCJ0ZXJtTG9nZ2VyIiwiSW1hZ2VQcmVwcm9jZXNzaW5nIiwiQmFzZUZ1bmN0b3IiLCJOTFBQcmVwcm9jZXNzaW5nIiwiY29uZmlnTGluayIsIlByZXByb2Nlc3NpbmdNaXhpbnMiLCJCYXNlUGlwZWxpbmVDbGFzcyIsIlByZXByb2Nlc3NpbmciLCJzdHJlYW1QcmVwcm9jZXNzaW5nIiwicmF0aW8iLCJzZXRCeUNvbmZpZyIsInBpcGVsaW5lQ29uZmlnIiwiZ3JvdXBCZWdpbiIsIkRhdGFTb3VyY2VSZWFkZXIiLCJEYXRhc2V0IiwiYmluZCIsInBpcGUiLCJUcmFpbkRhdGFHZW5lcmF0b3IiLCJUZXN0RGF0YUdlbmVyYXRvciIsImdyb3VwRW5kIiwiVGFidWxhclByZXByb2Nlc3NpbmciXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsVUFBVTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsWUFBWTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLHVDQUF1QyxTQUFTO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsaUJBQWlCO0FBQ2hDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxpQkFBaUI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFNBQVM7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixTQUFTO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixTQUFTO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELEVBQUU7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWlCLFNBQVM7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGVBQWU7QUFDdkM7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0Esd0JBQXdCLFFBQVE7QUFDaEM7QUFDQSxxQkFBcUIsZUFBZTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsWUFBWTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLFNBQVM7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixTQUFTO0FBQzlCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQixTQUFTO0FBQzlCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixrQkFBa0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLG1CQUFtQixjQUFjO0FBQ2pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQsT0FBTztBQUM5RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVELE9BQU87QUFDOUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FB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V0FBT1IsY0FBUDtBQUNIOztBQTFDNkUsQ0FBbEY7O0FBNkNlTixrRkFBZixFOzs7Ozs7Ozs7Ozs7QUM3Q0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOztBQUNBLE1BQU1lLG9CQUFOLFNBQW1DNUYseURBQVEsQ0FBQ0MsT0FBVCxDQUFpQnlFLHVEQUFqQixFQUMvQixDQUFDdkosd0VBQUQsQ0FEK0IsQ0FBbkMsQ0FDZ0M7QUFDNUJpQixhQUFXLEdBQUU7QUFDVDtBQUNIOztBQUgyQjs7QUFNakIsbUVBQUl3SixvQkFBSixFQUFmLEU7Ozs7Ozs7Ozs7O0FDVkEsNkQ7Ozs7Ozs7Ozs7O0FDQUEsNEQ7Ozs7Ozs7Ozs7O0FDQUEsZ0U7Ozs7Ozs7Ozs7O0FDQUEsOEQiLCJmaWxlIjoiQGNhdXNhbE5ldC9wcmVwcm9jZXNzaW5nLndlYi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImNhdXNhbC1uZXQuY29yZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQubG9nXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC5zdG9yYWdlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC51dGlsc1wiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJjYXVzYWwtbmV0LmNvcmVcIiwgXCJjYXVzYWwtbmV0LmxvZ1wiLCBcImNhdXNhbC1uZXQuc3RvcmFnZVwiLCBcImNhdXNhbC1uZXQudXRpbHNcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQGNhdXNhbE5ldC9wcmVwcm9jZXNzaW5nXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiY2F1c2FsLW5ldC5jb3JlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC5sb2dcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnN0b3JhZ2VcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnV0aWxzXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJAY2F1c2FsTmV0L3ByZXByb2Nlc3NpbmdcIl0gPSBmYWN0b3J5KHJvb3RbXCJjYXVzYWwtbmV0LmNvcmVcIl0sIHJvb3RbXCJjYXVzYWwtbmV0LmxvZ1wiXSwgcm9vdFtcImNhdXNhbC1uZXQuc3RvcmFnZVwiXSwgcm9vdFtcImNhdXNhbC1uZXQudXRpbHNcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X2NvcmVfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X2xvZ19fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfc3RvcmFnZV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfdXRpbHNfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiJ3VzZSBzdHJpY3QnXG5cbmV4cG9ydHMuYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGhcbmV4cG9ydHMudG9CeXRlQXJyYXkgPSB0b0J5dGVBcnJheVxuZXhwb3J0cy5mcm9tQnl0ZUFycmF5ID0gZnJvbUJ5dGVBcnJheVxuXG52YXIgbG9va3VwID0gW11cbnZhciByZXZMb29rdXAgPSBbXVxudmFyIEFyciA9IHR5cGVvZiBVaW50OEFycmF5ICE9PSAndW5kZWZpbmVkJyA/IFVpbnQ4QXJyYXkgOiBBcnJheVxuXG52YXIgY29kZSA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvJ1xuZm9yICh2YXIgaSA9IDAsIGxlbiA9IGNvZGUubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgbG9va3VwW2ldID0gY29kZVtpXVxuICByZXZMb29rdXBbY29kZS5jaGFyQ29kZUF0KGkpXSA9IGlcbn1cblxuLy8gU3VwcG9ydCBkZWNvZGluZyBVUkwtc2FmZSBiYXNlNjQgc3RyaW5ncywgYXMgTm9kZS5qcyBkb2VzLlxuLy8gU2VlOiBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9CYXNlNjQjVVJMX2FwcGxpY2F0aW9uc1xucmV2TG9va3VwWyctJy5jaGFyQ29kZUF0KDApXSA9IDYyXG5yZXZMb29rdXBbJ18nLmNoYXJDb2RlQXQoMCldID0gNjNcblxuZnVuY3Rpb24gZ2V0TGVucyAoYjY0KSB7XG4gIHZhciBsZW4gPSBiNjQubGVuZ3RoXG5cbiAgaWYgKGxlbiAlIDQgPiAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHN0cmluZy4gTGVuZ3RoIG11c3QgYmUgYSBtdWx0aXBsZSBvZiA0JylcbiAgfVxuXG4gIC8vIFRyaW0gb2ZmIGV4dHJhIGJ5dGVzIGFmdGVyIHBsYWNlaG9sZGVyIGJ5dGVzIGFyZSBmb3VuZFxuICAvLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9iZWF0Z2FtbWl0L2Jhc2U2NC1qcy9pc3N1ZXMvNDJcbiAgdmFyIHZhbGlkTGVuID0gYjY0LmluZGV4T2YoJz0nKVxuICBpZiAodmFsaWRMZW4gPT09IC0xKSB2YWxpZExlbiA9IGxlblxuXG4gIHZhciBwbGFjZUhvbGRlcnNMZW4gPSB2YWxpZExlbiA9PT0gbGVuXG4gICAgPyAwXG4gICAgOiA0IC0gKHZhbGlkTGVuICUgNClcblxuICByZXR1cm4gW3ZhbGlkTGVuLCBwbGFjZUhvbGRlcnNMZW5dXG59XG5cbi8vIGJhc2U2NCBpcyA0LzMgKyB1cCB0byB0d28gY2hhcmFjdGVycyBvZiB0aGUgb3JpZ2luYWwgZGF0YVxuZnVuY3Rpb24gYnl0ZUxlbmd0aCAoYjY0KSB7XG4gIHZhciBsZW5zID0gZ2V0TGVucyhiNjQpXG4gIHZhciB2YWxpZExlbiA9IGxlbnNbMF1cbiAgdmFyIHBsYWNlSG9sZGVyc0xlbiA9IGxlbnNbMV1cbiAgcmV0dXJuICgodmFsaWRMZW4gKyBwbGFjZUhvbGRlcnNMZW4pICogMyAvIDQpIC0gcGxhY2VIb2xkZXJzTGVuXG59XG5cbmZ1bmN0aW9uIF9ieXRlTGVuZ3RoIChiNjQsIHZhbGlkTGVuLCBwbGFjZUhvbGRlcnNMZW4pIHtcbiAgcmV0dXJuICgodmFsaWRMZW4gKyBwbGFjZUhvbGRlcnNMZW4pICogMyAvIDQpIC0gcGxhY2VIb2xkZXJzTGVuXG59XG5cbmZ1bmN0aW9uIHRvQnl0ZUFycmF5IChiNjQpIHtcbiAgdmFyIHRtcFxuICB2YXIgbGVucyA9IGdldExlbnMoYjY0KVxuICB2YXIgdmFsaWRMZW4gPSBsZW5zWzBdXG4gIHZhciBwbGFjZUhvbGRlcnNMZW4gPSBsZW5zWzFdXG5cbiAgdmFyIGFyciA9IG5ldyBBcnIoX2J5dGVMZW5ndGgoYjY0LCB2YWxpZExlbiwgcGxhY2VIb2xkZXJzTGVuKSlcblxuICB2YXIgY3VyQnl0ZSA9IDBcblxuICAvLyBpZiB0aGVyZSBhcmUgcGxhY2Vob2xkZXJzLCBvbmx5IGdldCB1cCB0byB0aGUgbGFzdCBjb21wbGV0ZSA0IGNoYXJzXG4gIHZhciBsZW4gPSBwbGFjZUhvbGRlcnNMZW4gPiAwXG4gICAgPyB2YWxpZExlbiAtIDRcbiAgICA6IHZhbGlkTGVuXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkgKz0gNCkge1xuICAgIHRtcCA9XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkpXSA8PCAxOCkgfFxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMSldIDw8IDEyKSB8XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAyKV0gPDwgNikgfFxuICAgICAgcmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAzKV1cbiAgICBhcnJbY3VyQnl0ZSsrXSA9ICh0bXAgPj4gMTYpICYgMHhGRlxuICAgIGFycltjdXJCeXRlKytdID0gKHRtcCA+PiA4KSAmIDB4RkZcbiAgICBhcnJbY3VyQnl0ZSsrXSA9IHRtcCAmIDB4RkZcbiAgfVxuXG4gIGlmIChwbGFjZUhvbGRlcnNMZW4gPT09IDIpIHtcbiAgICB0bXAgPVxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpKV0gPDwgMikgfFxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMSldID4+IDQpXG4gICAgYXJyW2N1ckJ5dGUrK10gPSB0bXAgJiAweEZGXG4gIH1cblxuICBpZiAocGxhY2VIb2xkZXJzTGVuID09PSAxKSB7XG4gICAgdG1wID1cbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSldIDw8IDEwKSB8XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAxKV0gPDwgNCkgfFxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMildID4+IDIpXG4gICAgYXJyW2N1ckJ5dGUrK10gPSAodG1wID4+IDgpICYgMHhGRlxuICAgIGFycltjdXJCeXRlKytdID0gdG1wICYgMHhGRlxuICB9XG5cbiAgcmV0dXJuIGFyclxufVxuXG5mdW5jdGlvbiB0cmlwbGV0VG9CYXNlNjQgKG51bSkge1xuICByZXR1cm4gbG9va3VwW251bSA+PiAxOCAmIDB4M0ZdICtcbiAgICBsb29rdXBbbnVtID4+IDEyICYgMHgzRl0gK1xuICAgIGxvb2t1cFtudW0gPj4gNiAmIDB4M0ZdICtcbiAgICBsb29rdXBbbnVtICYgMHgzRl1cbn1cblxuZnVuY3Rpb24gZW5jb2RlQ2h1bmsgKHVpbnQ4LCBzdGFydCwgZW5kKSB7XG4gIHZhciB0bXBcbiAgdmFyIG91dHB1dCA9IFtdXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgaSArPSAzKSB7XG4gICAgdG1wID1cbiAgICAgICgodWludDhbaV0gPDwgMTYpICYgMHhGRjAwMDApICtcbiAgICAgICgodWludDhbaSArIDFdIDw8IDgpICYgMHhGRjAwKSArXG4gICAgICAodWludDhbaSArIDJdICYgMHhGRilcbiAgICBvdXRwdXQucHVzaCh0cmlwbGV0VG9CYXNlNjQodG1wKSlcbiAgfVxuICByZXR1cm4gb3V0cHV0LmpvaW4oJycpXG59XG5cbmZ1bmN0aW9uIGZyb21CeXRlQXJyYXkgKHVpbnQ4KSB7XG4gIHZhciB0bXBcbiAgdmFyIGxlbiA9IHVpbnQ4Lmxlbmd0aFxuICB2YXIgZXh0cmFCeXRlcyA9IGxlbiAlIDMgLy8gaWYgd2UgaGF2ZSAxIGJ5dGUgbGVmdCwgcGFkIDIgYnl0ZXNcbiAgdmFyIHBhcnRzID0gW11cbiAgdmFyIG1heENodW5rTGVuZ3RoID0gMTYzODMgLy8gbXVzdCBiZSBtdWx0aXBsZSBvZiAzXG5cbiAgLy8gZ28gdGhyb3VnaCB0aGUgYXJyYXkgZXZlcnkgdGhyZWUgYnl0ZXMsIHdlJ2xsIGRlYWwgd2l0aCB0cmFpbGluZyBzdHVmZiBsYXRlclxuICBmb3IgKHZhciBpID0gMCwgbGVuMiA9IGxlbiAtIGV4dHJhQnl0ZXM7IGkgPCBsZW4yOyBpICs9IG1heENodW5rTGVuZ3RoKSB7XG4gICAgcGFydHMucHVzaChlbmNvZGVDaHVuayhcbiAgICAgIHVpbnQ4LCBpLCAoaSArIG1heENodW5rTGVuZ3RoKSA+IGxlbjIgPyBsZW4yIDogKGkgKyBtYXhDaHVua0xlbmd0aClcbiAgICApKVxuICB9XG5cbiAgLy8gcGFkIHRoZSBlbmQgd2l0aCB6ZXJvcywgYnV0IG1ha2Ugc3VyZSB0byBub3QgZm9yZ2V0IHRoZSBleHRyYSBieXRlc1xuICBpZiAoZXh0cmFCeXRlcyA9PT0gMSkge1xuICAgIHRtcCA9IHVpbnQ4W2xlbiAtIDFdXG4gICAgcGFydHMucHVzaChcbiAgICAgIGxvb2t1cFt0bXAgPj4gMl0gK1xuICAgICAgbG9va3VwWyh0bXAgPDwgNCkgJiAweDNGXSArXG4gICAgICAnPT0nXG4gICAgKVxuICB9IGVsc2UgaWYgKGV4dHJhQnl0ZXMgPT09IDIpIHtcbiAgICB0bXAgPSAodWludDhbbGVuIC0gMl0gPDwgOCkgKyB1aW50OFtsZW4gLSAxXVxuICAgIHBhcnRzLnB1c2goXG4gICAgICBsb29rdXBbdG1wID4+IDEwXSArXG4gICAgICBsb29rdXBbKHRtcCA+PiA0KSAmIDB4M0ZdICtcbiAgICAgIGxvb2t1cFsodG1wIDw8IDIpICYgMHgzRl0gK1xuICAgICAgJz0nXG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIHBhcnRzLmpvaW4oJycpXG59XG4iLCIvKiFcbiAqIFRoZSBidWZmZXIgbW9kdWxlIGZyb20gbm9kZS5qcywgZm9yIHRoZSBicm93c2VyLlxuICpcbiAqIEBhdXRob3IgICBGZXJvc3MgQWJvdWtoYWRpamVoIDxmZXJvc3NAZmVyb3NzLm9yZz4gPGh0dHA6Ly9mZXJvc3Mub3JnPlxuICogQGxpY2Vuc2UgIE1JVFxuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wcm90byAqL1xuXG4ndXNlIHN0cmljdCdcblxudmFyIGJhc2U2NCA9IHJlcXVpcmUoJ2Jhc2U2NC1qcycpXG52YXIgaWVlZTc1NCA9IHJlcXVpcmUoJ2llZWU3NTQnKVxudmFyIGlzQXJyYXkgPSByZXF1aXJlKCdpc2FycmF5JylcblxuZXhwb3J0cy5CdWZmZXIgPSBCdWZmZXJcbmV4cG9ydHMuU2xvd0J1ZmZlciA9IFNsb3dCdWZmZXJcbmV4cG9ydHMuSU5TUEVDVF9NQVhfQllURVMgPSA1MFxuXG4vKipcbiAqIElmIGBCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVGA6XG4gKiAgID09PSB0cnVlICAgIFVzZSBVaW50OEFycmF5IGltcGxlbWVudGF0aW9uIChmYXN0ZXN0KVxuICogICA9PT0gZmFsc2UgICBVc2UgT2JqZWN0IGltcGxlbWVudGF0aW9uIChtb3N0IGNvbXBhdGlibGUsIGV2ZW4gSUU2KVxuICpcbiAqIEJyb3dzZXJzIHRoYXQgc3VwcG9ydCB0eXBlZCBhcnJheXMgYXJlIElFIDEwKywgRmlyZWZveCA0KywgQ2hyb21lIDcrLCBTYWZhcmkgNS4xKyxcbiAqIE9wZXJhIDExLjYrLCBpT1MgNC4yKy5cbiAqXG4gKiBEdWUgdG8gdmFyaW91cyBicm93c2VyIGJ1Z3MsIHNvbWV0aW1lcyB0aGUgT2JqZWN0IGltcGxlbWVudGF0aW9uIHdpbGwgYmUgdXNlZCBldmVuXG4gKiB3aGVuIHRoZSBicm93c2VyIHN1cHBvcnRzIHR5cGVkIGFycmF5cy5cbiAqXG4gKiBOb3RlOlxuICpcbiAqICAgLSBGaXJlZm94IDQtMjkgbGFja3Mgc3VwcG9ydCBmb3IgYWRkaW5nIG5ldyBwcm9wZXJ0aWVzIHRvIGBVaW50OEFycmF5YCBpbnN0YW5jZXMsXG4gKiAgICAgU2VlOiBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD02OTU0MzguXG4gKlxuICogICAtIENocm9tZSA5LTEwIGlzIG1pc3NpbmcgdGhlIGBUeXBlZEFycmF5LnByb3RvdHlwZS5zdWJhcnJheWAgZnVuY3Rpb24uXG4gKlxuICogICAtIElFMTAgaGFzIGEgYnJva2VuIGBUeXBlZEFycmF5LnByb3RvdHlwZS5zdWJhcnJheWAgZnVuY3Rpb24gd2hpY2ggcmV0dXJucyBhcnJheXMgb2ZcbiAqICAgICBpbmNvcnJlY3QgbGVuZ3RoIGluIHNvbWUgc2l0dWF0aW9ucy5cblxuICogV2UgZGV0ZWN0IHRoZXNlIGJ1Z2d5IGJyb3dzZXJzIGFuZCBzZXQgYEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUYCB0byBgZmFsc2VgIHNvIHRoZXlcbiAqIGdldCB0aGUgT2JqZWN0IGltcGxlbWVudGF0aW9uLCB3aGljaCBpcyBzbG93ZXIgYnV0IGJlaGF2ZXMgY29ycmVjdGx5LlxuICovXG5CdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCA9IGdsb2JhbC5UWVBFRF9BUlJBWV9TVVBQT1JUICE9PSB1bmRlZmluZWRcbiAgPyBnbG9iYWwuVFlQRURfQVJSQVlfU1VQUE9SVFxuICA6IHR5cGVkQXJyYXlTdXBwb3J0KClcblxuLypcbiAqIEV4cG9ydCBrTWF4TGVuZ3RoIGFmdGVyIHR5cGVkIGFycmF5IHN1cHBvcnQgaXMgZGV0ZXJtaW5lZC5cbiAqL1xuZXhwb3J0cy5rTWF4TGVuZ3RoID0ga01heExlbmd0aCgpXG5cbmZ1bmN0aW9uIHR5cGVkQXJyYXlTdXBwb3J0ICgpIHtcbiAgdHJ5IHtcbiAgICB2YXIgYXJyID0gbmV3IFVpbnQ4QXJyYXkoMSlcbiAgICBhcnIuX19wcm90b19fID0ge19fcHJvdG9fXzogVWludDhBcnJheS5wcm90b3R5cGUsIGZvbzogZnVuY3Rpb24gKCkgeyByZXR1cm4gNDIgfX1cbiAgICByZXR1cm4gYXJyLmZvbygpID09PSA0MiAmJiAvLyB0eXBlZCBhcnJheSBpbnN0YW5jZXMgY2FuIGJlIGF1Z21lbnRlZFxuICAgICAgICB0eXBlb2YgYXJyLnN1YmFycmF5ID09PSAnZnVuY3Rpb24nICYmIC8vIGNocm9tZSA5LTEwIGxhY2sgYHN1YmFycmF5YFxuICAgICAgICBhcnIuc3ViYXJyYXkoMSwgMSkuYnl0ZUxlbmd0aCA9PT0gMCAvLyBpZTEwIGhhcyBicm9rZW4gYHN1YmFycmF5YFxuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuZnVuY3Rpb24ga01heExlbmd0aCAoKSB7XG4gIHJldHVybiBCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVFxuICAgID8gMHg3ZmZmZmZmZlxuICAgIDogMHgzZmZmZmZmZlxufVxuXG5mdW5jdGlvbiBjcmVhdGVCdWZmZXIgKHRoYXQsIGxlbmd0aCkge1xuICBpZiAoa01heExlbmd0aCgpIDwgbGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0ludmFsaWQgdHlwZWQgYXJyYXkgbGVuZ3RoJylcbiAgfVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICAvLyBSZXR1cm4gYW4gYXVnbWVudGVkIGBVaW50OEFycmF5YCBpbnN0YW5jZSwgZm9yIGJlc3QgcGVyZm9ybWFuY2VcbiAgICB0aGF0ID0gbmV3IFVpbnQ4QXJyYXkobGVuZ3RoKVxuICAgIHRoYXQuX19wcm90b19fID0gQnVmZmVyLnByb3RvdHlwZVxuICB9IGVsc2Uge1xuICAgIC8vIEZhbGxiYWNrOiBSZXR1cm4gYW4gb2JqZWN0IGluc3RhbmNlIG9mIHRoZSBCdWZmZXIgY2xhc3NcbiAgICBpZiAodGhhdCA9PT0gbnVsbCkge1xuICAgICAgdGhhdCA9IG5ldyBCdWZmZXIobGVuZ3RoKVxuICAgIH1cbiAgICB0aGF0Lmxlbmd0aCA9IGxlbmd0aFxuICB9XG5cbiAgcmV0dXJuIHRoYXRcbn1cblxuLyoqXG4gKiBUaGUgQnVmZmVyIGNvbnN0cnVjdG9yIHJldHVybnMgaW5zdGFuY2VzIG9mIGBVaW50OEFycmF5YCB0aGF0IGhhdmUgdGhlaXJcbiAqIHByb3RvdHlwZSBjaGFuZ2VkIHRvIGBCdWZmZXIucHJvdG90eXBlYC4gRnVydGhlcm1vcmUsIGBCdWZmZXJgIGlzIGEgc3ViY2xhc3Mgb2ZcbiAqIGBVaW50OEFycmF5YCwgc28gdGhlIHJldHVybmVkIGluc3RhbmNlcyB3aWxsIGhhdmUgYWxsIHRoZSBub2RlIGBCdWZmZXJgIG1ldGhvZHNcbiAqIGFuZCB0aGUgYFVpbnQ4QXJyYXlgIG1ldGhvZHMuIFNxdWFyZSBicmFja2V0IG5vdGF0aW9uIHdvcmtzIGFzIGV4cGVjdGVkIC0tIGl0XG4gKiByZXR1cm5zIGEgc2luZ2xlIG9jdGV0LlxuICpcbiAqIFRoZSBgVWludDhBcnJheWAgcHJvdG90eXBlIHJlbWFpbnMgdW5tb2RpZmllZC5cbiAqL1xuXG5mdW5jdGlvbiBCdWZmZXIgKGFyZywgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKSB7XG4gIGlmICghQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQgJiYgISh0aGlzIGluc3RhbmNlb2YgQnVmZmVyKSkge1xuICAgIHJldHVybiBuZXcgQnVmZmVyKGFyZywgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKVxuICB9XG5cbiAgLy8gQ29tbW9uIGNhc2UuXG4gIGlmICh0eXBlb2YgYXJnID09PSAnbnVtYmVyJykge1xuICAgIGlmICh0eXBlb2YgZW5jb2RpbmdPck9mZnNldCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ0lmIGVuY29kaW5nIGlzIHNwZWNpZmllZCB0aGVuIHRoZSBmaXJzdCBhcmd1bWVudCBtdXN0IGJlIGEgc3RyaW5nJ1xuICAgICAgKVxuICAgIH1cbiAgICByZXR1cm4gYWxsb2NVbnNhZmUodGhpcywgYXJnKVxuICB9XG4gIHJldHVybiBmcm9tKHRoaXMsIGFyZywgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKVxufVxuXG5CdWZmZXIucG9vbFNpemUgPSA4MTkyIC8vIG5vdCB1c2VkIGJ5IHRoaXMgaW1wbGVtZW50YXRpb25cblxuLy8gVE9ETzogTGVnYWN5LCBub3QgbmVlZGVkIGFueW1vcmUuIFJlbW92ZSBpbiBuZXh0IG1ham9yIHZlcnNpb24uXG5CdWZmZXIuX2F1Z21lbnQgPSBmdW5jdGlvbiAoYXJyKSB7XG4gIGFyci5fX3Byb3RvX18gPSBCdWZmZXIucHJvdG90eXBlXG4gIHJldHVybiBhcnJcbn1cblxuZnVuY3Rpb24gZnJvbSAodGhhdCwgdmFsdWUsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aCkge1xuICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1widmFsdWVcIiBhcmd1bWVudCBtdXN0IG5vdCBiZSBhIG51bWJlcicpXG4gIH1cblxuICBpZiAodHlwZW9mIEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJyAmJiB2YWx1ZSBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSB7XG4gICAgcmV0dXJuIGZyb21BcnJheUJ1ZmZlcih0aGF0LCB2YWx1ZSwgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKVxuICB9XG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZnJvbVN0cmluZyh0aGF0LCB2YWx1ZSwgZW5jb2RpbmdPck9mZnNldClcbiAgfVxuXG4gIHJldHVybiBmcm9tT2JqZWN0KHRoYXQsIHZhbHVlKVxufVxuXG4vKipcbiAqIEZ1bmN0aW9uYWxseSBlcXVpdmFsZW50IHRvIEJ1ZmZlcihhcmcsIGVuY29kaW5nKSBidXQgdGhyb3dzIGEgVHlwZUVycm9yXG4gKiBpZiB2YWx1ZSBpcyBhIG51bWJlci5cbiAqIEJ1ZmZlci5mcm9tKHN0clssIGVuY29kaW5nXSlcbiAqIEJ1ZmZlci5mcm9tKGFycmF5KVxuICogQnVmZmVyLmZyb20oYnVmZmVyKVxuICogQnVmZmVyLmZyb20oYXJyYXlCdWZmZXJbLCBieXRlT2Zmc2V0WywgbGVuZ3RoXV0pXG4gKiovXG5CdWZmZXIuZnJvbSA9IGZ1bmN0aW9uICh2YWx1ZSwgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBmcm9tKG51bGwsIHZhbHVlLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpXG59XG5cbmlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICBCdWZmZXIucHJvdG90eXBlLl9fcHJvdG9fXyA9IFVpbnQ4QXJyYXkucHJvdG90eXBlXG4gIEJ1ZmZlci5fX3Byb3RvX18gPSBVaW50OEFycmF5XG4gIGlmICh0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wuc3BlY2llcyAmJlxuICAgICAgQnVmZmVyW1N5bWJvbC5zcGVjaWVzXSA9PT0gQnVmZmVyKSB7XG4gICAgLy8gRml4IHN1YmFycmF5KCkgaW4gRVMyMDE2LiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9mZXJvc3MvYnVmZmVyL3B1bGwvOTdcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQnVmZmVyLCBTeW1ib2wuc3BlY2llcywge1xuICAgICAgdmFsdWU6IG51bGwsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KVxuICB9XG59XG5cbmZ1bmN0aW9uIGFzc2VydFNpemUgKHNpemUpIHtcbiAgaWYgKHR5cGVvZiBzaXplICE9PSAnbnVtYmVyJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wic2l6ZVwiIGFyZ3VtZW50IG11c3QgYmUgYSBudW1iZXInKVxuICB9IGVsc2UgaWYgKHNpemUgPCAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1wic2l6ZVwiIGFyZ3VtZW50IG11c3Qgbm90IGJlIG5lZ2F0aXZlJylcbiAgfVxufVxuXG5mdW5jdGlvbiBhbGxvYyAodGhhdCwgc2l6ZSwgZmlsbCwgZW5jb2RpbmcpIHtcbiAgYXNzZXJ0U2l6ZShzaXplKVxuICBpZiAoc2l6ZSA8PSAwKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUJ1ZmZlcih0aGF0LCBzaXplKVxuICB9XG4gIGlmIChmaWxsICE9PSB1bmRlZmluZWQpIHtcbiAgICAvLyBPbmx5IHBheSBhdHRlbnRpb24gdG8gZW5jb2RpbmcgaWYgaXQncyBhIHN0cmluZy4gVGhpc1xuICAgIC8vIHByZXZlbnRzIGFjY2lkZW50YWxseSBzZW5kaW5nIGluIGEgbnVtYmVyIHRoYXQgd291bGRcbiAgICAvLyBiZSBpbnRlcnByZXR0ZWQgYXMgYSBzdGFydCBvZmZzZXQuXG4gICAgcmV0dXJuIHR5cGVvZiBlbmNvZGluZyA9PT0gJ3N0cmluZydcbiAgICAgID8gY3JlYXRlQnVmZmVyKHRoYXQsIHNpemUpLmZpbGwoZmlsbCwgZW5jb2RpbmcpXG4gICAgICA6IGNyZWF0ZUJ1ZmZlcih0aGF0LCBzaXplKS5maWxsKGZpbGwpXG4gIH1cbiAgcmV0dXJuIGNyZWF0ZUJ1ZmZlcih0aGF0LCBzaXplKVxufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgZmlsbGVkIEJ1ZmZlciBpbnN0YW5jZS5cbiAqIGFsbG9jKHNpemVbLCBmaWxsWywgZW5jb2RpbmddXSlcbiAqKi9cbkJ1ZmZlci5hbGxvYyA9IGZ1bmN0aW9uIChzaXplLCBmaWxsLCBlbmNvZGluZykge1xuICByZXR1cm4gYWxsb2MobnVsbCwgc2l6ZSwgZmlsbCwgZW5jb2RpbmcpXG59XG5cbmZ1bmN0aW9uIGFsbG9jVW5zYWZlICh0aGF0LCBzaXplKSB7XG4gIGFzc2VydFNpemUoc2l6ZSlcbiAgdGhhdCA9IGNyZWF0ZUJ1ZmZlcih0aGF0LCBzaXplIDwgMCA/IDAgOiBjaGVja2VkKHNpemUpIHwgMClcbiAgaWYgKCFCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2l6ZTsgKytpKSB7XG4gICAgICB0aGF0W2ldID0gMFxuICAgIH1cbiAgfVxuICByZXR1cm4gdGhhdFxufVxuXG4vKipcbiAqIEVxdWl2YWxlbnQgdG8gQnVmZmVyKG51bSksIGJ5IGRlZmF1bHQgY3JlYXRlcyBhIG5vbi16ZXJvLWZpbGxlZCBCdWZmZXIgaW5zdGFuY2UuXG4gKiAqL1xuQnVmZmVyLmFsbG9jVW5zYWZlID0gZnVuY3Rpb24gKHNpemUpIHtcbiAgcmV0dXJuIGFsbG9jVW5zYWZlKG51bGwsIHNpemUpXG59XG4vKipcbiAqIEVxdWl2YWxlbnQgdG8gU2xvd0J1ZmZlcihudW0pLCBieSBkZWZhdWx0IGNyZWF0ZXMgYSBub24temVyby1maWxsZWQgQnVmZmVyIGluc3RhbmNlLlxuICovXG5CdWZmZXIuYWxsb2NVbnNhZmVTbG93ID0gZnVuY3Rpb24gKHNpemUpIHtcbiAgcmV0dXJuIGFsbG9jVW5zYWZlKG51bGwsIHNpemUpXG59XG5cbmZ1bmN0aW9uIGZyb21TdHJpbmcgKHRoYXQsIHN0cmluZywgZW5jb2RpbmcpIHtcbiAgaWYgKHR5cGVvZiBlbmNvZGluZyAhPT0gJ3N0cmluZycgfHwgZW5jb2RpbmcgPT09ICcnKSB7XG4gICAgZW5jb2RpbmcgPSAndXRmOCdcbiAgfVxuXG4gIGlmICghQnVmZmVyLmlzRW5jb2RpbmcoZW5jb2RpbmcpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJlbmNvZGluZ1wiIG11c3QgYmUgYSB2YWxpZCBzdHJpbmcgZW5jb2RpbmcnKVxuICB9XG5cbiAgdmFyIGxlbmd0aCA9IGJ5dGVMZW5ndGgoc3RyaW5nLCBlbmNvZGluZykgfCAwXG4gIHRoYXQgPSBjcmVhdGVCdWZmZXIodGhhdCwgbGVuZ3RoKVxuXG4gIHZhciBhY3R1YWwgPSB0aGF0LndyaXRlKHN0cmluZywgZW5jb2RpbmcpXG5cbiAgaWYgKGFjdHVhbCAhPT0gbGVuZ3RoKSB7XG4gICAgLy8gV3JpdGluZyBhIGhleCBzdHJpbmcsIGZvciBleGFtcGxlLCB0aGF0IGNvbnRhaW5zIGludmFsaWQgY2hhcmFjdGVycyB3aWxsXG4gICAgLy8gY2F1c2UgZXZlcnl0aGluZyBhZnRlciB0aGUgZmlyc3QgaW52YWxpZCBjaGFyYWN0ZXIgdG8gYmUgaWdub3JlZC4gKGUuZy5cbiAgICAvLyAnYWJ4eGNkJyB3aWxsIGJlIHRyZWF0ZWQgYXMgJ2FiJylcbiAgICB0aGF0ID0gdGhhdC5zbGljZSgwLCBhY3R1YWwpXG4gIH1cblxuICByZXR1cm4gdGhhdFxufVxuXG5mdW5jdGlvbiBmcm9tQXJyYXlMaWtlICh0aGF0LCBhcnJheSkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoIDwgMCA/IDAgOiBjaGVja2VkKGFycmF5Lmxlbmd0aCkgfCAwXG4gIHRoYXQgPSBjcmVhdGVCdWZmZXIodGhhdCwgbGVuZ3RoKVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgdGhhdFtpXSA9IGFycmF5W2ldICYgMjU1XG4gIH1cbiAgcmV0dXJuIHRoYXRcbn1cblxuZnVuY3Rpb24gZnJvbUFycmF5QnVmZmVyICh0aGF0LCBhcnJheSwgYnl0ZU9mZnNldCwgbGVuZ3RoKSB7XG4gIGFycmF5LmJ5dGVMZW5ndGggLy8gdGhpcyB0aHJvd3MgaWYgYGFycmF5YCBpcyBub3QgYSB2YWxpZCBBcnJheUJ1ZmZlclxuXG4gIGlmIChieXRlT2Zmc2V0IDwgMCB8fCBhcnJheS5ieXRlTGVuZ3RoIDwgYnl0ZU9mZnNldCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdcXCdvZmZzZXRcXCcgaXMgb3V0IG9mIGJvdW5kcycpXG4gIH1cblxuICBpZiAoYXJyYXkuYnl0ZUxlbmd0aCA8IGJ5dGVPZmZzZXQgKyAobGVuZ3RoIHx8IDApKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1xcJ2xlbmd0aFxcJyBpcyBvdXQgb2YgYm91bmRzJylcbiAgfVxuXG4gIGlmIChieXRlT2Zmc2V0ID09PSB1bmRlZmluZWQgJiYgbGVuZ3RoID09PSB1bmRlZmluZWQpIHtcbiAgICBhcnJheSA9IG5ldyBVaW50OEFycmF5KGFycmF5KVxuICB9IGVsc2UgaWYgKGxlbmd0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgYXJyYXkgPSBuZXcgVWludDhBcnJheShhcnJheSwgYnl0ZU9mZnNldClcbiAgfSBlbHNlIHtcbiAgICBhcnJheSA9IG5ldyBVaW50OEFycmF5KGFycmF5LCBieXRlT2Zmc2V0LCBsZW5ndGgpXG4gIH1cblxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICAvLyBSZXR1cm4gYW4gYXVnbWVudGVkIGBVaW50OEFycmF5YCBpbnN0YW5jZSwgZm9yIGJlc3QgcGVyZm9ybWFuY2VcbiAgICB0aGF0ID0gYXJyYXlcbiAgICB0aGF0Ll9fcHJvdG9fXyA9IEJ1ZmZlci5wcm90b3R5cGVcbiAgfSBlbHNlIHtcbiAgICAvLyBGYWxsYmFjazogUmV0dXJuIGFuIG9iamVjdCBpbnN0YW5jZSBvZiB0aGUgQnVmZmVyIGNsYXNzXG4gICAgdGhhdCA9IGZyb21BcnJheUxpa2UodGhhdCwgYXJyYXkpXG4gIH1cbiAgcmV0dXJuIHRoYXRcbn1cblxuZnVuY3Rpb24gZnJvbU9iamVjdCAodGhhdCwgb2JqKSB7XG4gIGlmIChCdWZmZXIuaXNCdWZmZXIob2JqKSkge1xuICAgIHZhciBsZW4gPSBjaGVja2VkKG9iai5sZW5ndGgpIHwgMFxuICAgIHRoYXQgPSBjcmVhdGVCdWZmZXIodGhhdCwgbGVuKVxuXG4gICAgaWYgKHRoYXQubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gdGhhdFxuICAgIH1cblxuICAgIG9iai5jb3B5KHRoYXQsIDAsIDAsIGxlbilcbiAgICByZXR1cm4gdGhhdFxuICB9XG5cbiAgaWYgKG9iaikge1xuICAgIGlmICgodHlwZW9mIEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICBvYmouYnVmZmVyIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHx8ICdsZW5ndGgnIGluIG9iaikge1xuICAgICAgaWYgKHR5cGVvZiBvYmoubGVuZ3RoICE9PSAnbnVtYmVyJyB8fCBpc25hbihvYmoubGVuZ3RoKSkge1xuICAgICAgICByZXR1cm4gY3JlYXRlQnVmZmVyKHRoYXQsIDApXG4gICAgICB9XG4gICAgICByZXR1cm4gZnJvbUFycmF5TGlrZSh0aGF0LCBvYmopXG4gICAgfVxuXG4gICAgaWYgKG9iai50eXBlID09PSAnQnVmZmVyJyAmJiBpc0FycmF5KG9iai5kYXRhKSkge1xuICAgICAgcmV0dXJuIGZyb21BcnJheUxpa2UodGhhdCwgb2JqLmRhdGEpXG4gICAgfVxuICB9XG5cbiAgdGhyb3cgbmV3IFR5cGVFcnJvcignRmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhIHN0cmluZywgQnVmZmVyLCBBcnJheUJ1ZmZlciwgQXJyYXksIG9yIGFycmF5LWxpa2Ugb2JqZWN0LicpXG59XG5cbmZ1bmN0aW9uIGNoZWNrZWQgKGxlbmd0aCkge1xuICAvLyBOb3RlOiBjYW5ub3QgdXNlIGBsZW5ndGggPCBrTWF4TGVuZ3RoKClgIGhlcmUgYmVjYXVzZSB0aGF0IGZhaWxzIHdoZW5cbiAgLy8gbGVuZ3RoIGlzIE5hTiAod2hpY2ggaXMgb3RoZXJ3aXNlIGNvZXJjZWQgdG8gemVyby4pXG4gIGlmIChsZW5ndGggPj0ga01heExlbmd0aCgpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0F0dGVtcHQgdG8gYWxsb2NhdGUgQnVmZmVyIGxhcmdlciB0aGFuIG1heGltdW0gJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgJ3NpemU6IDB4JyArIGtNYXhMZW5ndGgoKS50b1N0cmluZygxNikgKyAnIGJ5dGVzJylcbiAgfVxuICByZXR1cm4gbGVuZ3RoIHwgMFxufVxuXG5mdW5jdGlvbiBTbG93QnVmZmVyIChsZW5ndGgpIHtcbiAgaWYgKCtsZW5ndGggIT0gbGVuZ3RoKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZXFlcWVxXG4gICAgbGVuZ3RoID0gMFxuICB9XG4gIHJldHVybiBCdWZmZXIuYWxsb2MoK2xlbmd0aClcbn1cblxuQnVmZmVyLmlzQnVmZmVyID0gZnVuY3Rpb24gaXNCdWZmZXIgKGIpIHtcbiAgcmV0dXJuICEhKGIgIT0gbnVsbCAmJiBiLl9pc0J1ZmZlcilcbn1cblxuQnVmZmVyLmNvbXBhcmUgPSBmdW5jdGlvbiBjb21wYXJlIChhLCBiKSB7XG4gIGlmICghQnVmZmVyLmlzQnVmZmVyKGEpIHx8ICFCdWZmZXIuaXNCdWZmZXIoYikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudHMgbXVzdCBiZSBCdWZmZXJzJylcbiAgfVxuXG4gIGlmIChhID09PSBiKSByZXR1cm4gMFxuXG4gIHZhciB4ID0gYS5sZW5ndGhcbiAgdmFyIHkgPSBiLmxlbmd0aFxuXG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBNYXRoLm1pbih4LCB5KTsgaSA8IGxlbjsgKytpKSB7XG4gICAgaWYgKGFbaV0gIT09IGJbaV0pIHtcbiAgICAgIHggPSBhW2ldXG4gICAgICB5ID0gYltpXVxuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cblxuICBpZiAoeCA8IHkpIHJldHVybiAtMVxuICBpZiAoeSA8IHgpIHJldHVybiAxXG4gIHJldHVybiAwXG59XG5cbkJ1ZmZlci5pc0VuY29kaW5nID0gZnVuY3Rpb24gaXNFbmNvZGluZyAoZW5jb2RpbmcpIHtcbiAgc3dpdGNoIChTdHJpbmcoZW5jb2RpbmcpLnRvTG93ZXJDYXNlKCkpIHtcbiAgICBjYXNlICdoZXgnOlxuICAgIGNhc2UgJ3V0ZjgnOlxuICAgIGNhc2UgJ3V0Zi04JzpcbiAgICBjYXNlICdhc2NpaSc6XG4gICAgY2FzZSAnbGF0aW4xJzpcbiAgICBjYXNlICdiaW5hcnknOlxuICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgY2FzZSAndWNzMic6XG4gICAgY2FzZSAndWNzLTInOlxuICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgIHJldHVybiB0cnVlXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbkJ1ZmZlci5jb25jYXQgPSBmdW5jdGlvbiBjb25jYXQgKGxpc3QsIGxlbmd0aCkge1xuICBpZiAoIWlzQXJyYXkobGlzdCkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcImxpc3RcIiBhcmd1bWVudCBtdXN0IGJlIGFuIEFycmF5IG9mIEJ1ZmZlcnMnKVxuICB9XG5cbiAgaWYgKGxpc3QubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIEJ1ZmZlci5hbGxvYygwKVxuICB9XG5cbiAgdmFyIGlcbiAgaWYgKGxlbmd0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgbGVuZ3RoID0gMFxuICAgIGZvciAoaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgKytpKSB7XG4gICAgICBsZW5ndGggKz0gbGlzdFtpXS5sZW5ndGhcbiAgICB9XG4gIH1cblxuICB2YXIgYnVmZmVyID0gQnVmZmVyLmFsbG9jVW5zYWZlKGxlbmd0aClcbiAgdmFyIHBvcyA9IDBcbiAgZm9yIChpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyArK2kpIHtcbiAgICB2YXIgYnVmID0gbGlzdFtpXVxuICAgIGlmICghQnVmZmVyLmlzQnVmZmVyKGJ1ZikpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wibGlzdFwiIGFyZ3VtZW50IG11c3QgYmUgYW4gQXJyYXkgb2YgQnVmZmVycycpXG4gICAgfVxuICAgIGJ1Zi5jb3B5KGJ1ZmZlciwgcG9zKVxuICAgIHBvcyArPSBidWYubGVuZ3RoXG4gIH1cbiAgcmV0dXJuIGJ1ZmZlclxufVxuXG5mdW5jdGlvbiBieXRlTGVuZ3RoIChzdHJpbmcsIGVuY29kaW5nKSB7XG4gIGlmIChCdWZmZXIuaXNCdWZmZXIoc3RyaW5nKSkge1xuICAgIHJldHVybiBzdHJpbmcubGVuZ3RoXG4gIH1cbiAgaWYgKHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIEFycmF5QnVmZmVyLmlzVmlldyA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgICAgKEFycmF5QnVmZmVyLmlzVmlldyhzdHJpbmcpIHx8IHN0cmluZyBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSkge1xuICAgIHJldHVybiBzdHJpbmcuYnl0ZUxlbmd0aFxuICB9XG4gIGlmICh0eXBlb2Ygc3RyaW5nICE9PSAnc3RyaW5nJykge1xuICAgIHN0cmluZyA9ICcnICsgc3RyaW5nXG4gIH1cblxuICB2YXIgbGVuID0gc3RyaW5nLmxlbmd0aFxuICBpZiAobGVuID09PSAwKSByZXR1cm4gMFxuXG4gIC8vIFVzZSBhIGZvciBsb29wIHRvIGF2b2lkIHJlY3Vyc2lvblxuICB2YXIgbG93ZXJlZENhc2UgPSBmYWxzZVxuICBmb3IgKDs7KSB7XG4gICAgc3dpdGNoIChlbmNvZGluZykge1xuICAgICAgY2FzZSAnYXNjaWknOlxuICAgICAgY2FzZSAnbGF0aW4xJzpcbiAgICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgICAgIHJldHVybiBsZW5cbiAgICAgIGNhc2UgJ3V0ZjgnOlxuICAgICAgY2FzZSAndXRmLTgnOlxuICAgICAgY2FzZSB1bmRlZmluZWQ6XG4gICAgICAgIHJldHVybiB1dGY4VG9CeXRlcyhzdHJpbmcpLmxlbmd0aFxuICAgICAgY2FzZSAndWNzMic6XG4gICAgICBjYXNlICd1Y3MtMic6XG4gICAgICBjYXNlICd1dGYxNmxlJzpcbiAgICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgICAgcmV0dXJuIGxlbiAqIDJcbiAgICAgIGNhc2UgJ2hleCc6XG4gICAgICAgIHJldHVybiBsZW4gPj4+IDFcbiAgICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgICAgIHJldHVybiBiYXNlNjRUb0J5dGVzKHN0cmluZykubGVuZ3RoXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAobG93ZXJlZENhc2UpIHJldHVybiB1dGY4VG9CeXRlcyhzdHJpbmcpLmxlbmd0aCAvLyBhc3N1bWUgdXRmOFxuICAgICAgICBlbmNvZGluZyA9ICgnJyArIGVuY29kaW5nKS50b0xvd2VyQ2FzZSgpXG4gICAgICAgIGxvd2VyZWRDYXNlID0gdHJ1ZVxuICAgIH1cbiAgfVxufVxuQnVmZmVyLmJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoXG5cbmZ1bmN0aW9uIHNsb3dUb1N0cmluZyAoZW5jb2RpbmcsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGxvd2VyZWRDYXNlID0gZmFsc2VcblxuICAvLyBObyBuZWVkIHRvIHZlcmlmeSB0aGF0IFwidGhpcy5sZW5ndGggPD0gTUFYX1VJTlQzMlwiIHNpbmNlIGl0J3MgYSByZWFkLW9ubHlcbiAgLy8gcHJvcGVydHkgb2YgYSB0eXBlZCBhcnJheS5cblxuICAvLyBUaGlzIGJlaGF2ZXMgbmVpdGhlciBsaWtlIFN0cmluZyBub3IgVWludDhBcnJheSBpbiB0aGF0IHdlIHNldCBzdGFydC9lbmRcbiAgLy8gdG8gdGhlaXIgdXBwZXIvbG93ZXIgYm91bmRzIGlmIHRoZSB2YWx1ZSBwYXNzZWQgaXMgb3V0IG9mIHJhbmdlLlxuICAvLyB1bmRlZmluZWQgaXMgaGFuZGxlZCBzcGVjaWFsbHkgYXMgcGVyIEVDTUEtMjYyIDZ0aCBFZGl0aW9uLFxuICAvLyBTZWN0aW9uIDEzLjMuMy43IFJ1bnRpbWUgU2VtYW50aWNzOiBLZXllZEJpbmRpbmdJbml0aWFsaXphdGlvbi5cbiAgaWYgKHN0YXJ0ID09PSB1bmRlZmluZWQgfHwgc3RhcnQgPCAwKSB7XG4gICAgc3RhcnQgPSAwXG4gIH1cbiAgLy8gUmV0dXJuIGVhcmx5IGlmIHN0YXJ0ID4gdGhpcy5sZW5ndGguIERvbmUgaGVyZSB0byBwcmV2ZW50IHBvdGVudGlhbCB1aW50MzJcbiAgLy8gY29lcmNpb24gZmFpbCBiZWxvdy5cbiAgaWYgKHN0YXJ0ID4gdGhpcy5sZW5ndGgpIHtcbiAgICByZXR1cm4gJydcbiAgfVxuXG4gIGlmIChlbmQgPT09IHVuZGVmaW5lZCB8fCBlbmQgPiB0aGlzLmxlbmd0aCkge1xuICAgIGVuZCA9IHRoaXMubGVuZ3RoXG4gIH1cblxuICBpZiAoZW5kIDw9IDApIHtcbiAgICByZXR1cm4gJydcbiAgfVxuXG4gIC8vIEZvcmNlIGNvZXJzaW9uIHRvIHVpbnQzMi4gVGhpcyB3aWxsIGFsc28gY29lcmNlIGZhbHNleS9OYU4gdmFsdWVzIHRvIDAuXG4gIGVuZCA+Pj49IDBcbiAgc3RhcnQgPj4+PSAwXG5cbiAgaWYgKGVuZCA8PSBzdGFydCkge1xuICAgIHJldHVybiAnJ1xuICB9XG5cbiAgaWYgKCFlbmNvZGluZykgZW5jb2RpbmcgPSAndXRmOCdcblxuICB3aGlsZSAodHJ1ZSkge1xuICAgIHN3aXRjaCAoZW5jb2RpbmcpIHtcbiAgICAgIGNhc2UgJ2hleCc6XG4gICAgICAgIHJldHVybiBoZXhTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICd1dGY4JzpcbiAgICAgIGNhc2UgJ3V0Zi04JzpcbiAgICAgICAgcmV0dXJuIHV0ZjhTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICdhc2NpaSc6XG4gICAgICAgIHJldHVybiBhc2NpaVNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ2xhdGluMSc6XG4gICAgICBjYXNlICdiaW5hcnknOlxuICAgICAgICByZXR1cm4gbGF0aW4xU2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAnYmFzZTY0JzpcbiAgICAgICAgcmV0dXJuIGJhc2U2NFNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ3VjczInOlxuICAgICAgY2FzZSAndWNzLTInOlxuICAgICAgY2FzZSAndXRmMTZsZSc6XG4gICAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICAgIHJldHVybiB1dGYxNmxlU2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKGxvd2VyZWRDYXNlKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdVbmtub3duIGVuY29kaW5nOiAnICsgZW5jb2RpbmcpXG4gICAgICAgIGVuY29kaW5nID0gKGVuY29kaW5nICsgJycpLnRvTG93ZXJDYXNlKClcbiAgICAgICAgbG93ZXJlZENhc2UgPSB0cnVlXG4gICAgfVxuICB9XG59XG5cbi8vIFRoZSBwcm9wZXJ0eSBpcyB1c2VkIGJ5IGBCdWZmZXIuaXNCdWZmZXJgIGFuZCBgaXMtYnVmZmVyYCAoaW4gU2FmYXJpIDUtNykgdG8gZGV0ZWN0XG4vLyBCdWZmZXIgaW5zdGFuY2VzLlxuQnVmZmVyLnByb3RvdHlwZS5faXNCdWZmZXIgPSB0cnVlXG5cbmZ1bmN0aW9uIHN3YXAgKGIsIG4sIG0pIHtcbiAgdmFyIGkgPSBiW25dXG4gIGJbbl0gPSBiW21dXG4gIGJbbV0gPSBpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuc3dhcDE2ID0gZnVuY3Rpb24gc3dhcDE2ICgpIHtcbiAgdmFyIGxlbiA9IHRoaXMubGVuZ3RoXG4gIGlmIChsZW4gJSAyICE9PSAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0J1ZmZlciBzaXplIG11c3QgYmUgYSBtdWx0aXBsZSBvZiAxNi1iaXRzJylcbiAgfVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSArPSAyKSB7XG4gICAgc3dhcCh0aGlzLCBpLCBpICsgMSlcbiAgfVxuICByZXR1cm4gdGhpc1xufVxuXG5CdWZmZXIucHJvdG90eXBlLnN3YXAzMiA9IGZ1bmN0aW9uIHN3YXAzMiAoKSB7XG4gIHZhciBsZW4gPSB0aGlzLmxlbmd0aFxuICBpZiAobGVuICUgNCAhPT0gMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdCdWZmZXIgc2l6ZSBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgMzItYml0cycpXG4gIH1cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkgKz0gNCkge1xuICAgIHN3YXAodGhpcywgaSwgaSArIDMpXG4gICAgc3dhcCh0aGlzLCBpICsgMSwgaSArIDIpXG4gIH1cbiAgcmV0dXJuIHRoaXNcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5zd2FwNjQgPSBmdW5jdGlvbiBzd2FwNjQgKCkge1xuICB2YXIgbGVuID0gdGhpcy5sZW5ndGhcbiAgaWYgKGxlbiAlIDggIT09IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQnVmZmVyIHNpemUgbXVzdCBiZSBhIG11bHRpcGxlIG9mIDY0LWJpdHMnKVxuICB9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpICs9IDgpIHtcbiAgICBzd2FwKHRoaXMsIGksIGkgKyA3KVxuICAgIHN3YXAodGhpcywgaSArIDEsIGkgKyA2KVxuICAgIHN3YXAodGhpcywgaSArIDIsIGkgKyA1KVxuICAgIHN3YXAodGhpcywgaSArIDMsIGkgKyA0KVxuICB9XG4gIHJldHVybiB0aGlzXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZyAoKSB7XG4gIHZhciBsZW5ndGggPSB0aGlzLmxlbmd0aCB8IDBcbiAgaWYgKGxlbmd0aCA9PT0gMCkgcmV0dXJuICcnXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSByZXR1cm4gdXRmOFNsaWNlKHRoaXMsIDAsIGxlbmd0aClcbiAgcmV0dXJuIHNsb3dUb1N0cmluZy5hcHBseSh0aGlzLCBhcmd1bWVudHMpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuZXF1YWxzID0gZnVuY3Rpb24gZXF1YWxzIChiKSB7XG4gIGlmICghQnVmZmVyLmlzQnVmZmVyKGIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudCBtdXN0IGJlIGEgQnVmZmVyJylcbiAgaWYgKHRoaXMgPT09IGIpIHJldHVybiB0cnVlXG4gIHJldHVybiBCdWZmZXIuY29tcGFyZSh0aGlzLCBiKSA9PT0gMFxufVxuXG5CdWZmZXIucHJvdG90eXBlLmluc3BlY3QgPSBmdW5jdGlvbiBpbnNwZWN0ICgpIHtcbiAgdmFyIHN0ciA9ICcnXG4gIHZhciBtYXggPSBleHBvcnRzLklOU1BFQ1RfTUFYX0JZVEVTXG4gIGlmICh0aGlzLmxlbmd0aCA+IDApIHtcbiAgICBzdHIgPSB0aGlzLnRvU3RyaW5nKCdoZXgnLCAwLCBtYXgpLm1hdGNoKC8uezJ9L2cpLmpvaW4oJyAnKVxuICAgIGlmICh0aGlzLmxlbmd0aCA+IG1heCkgc3RyICs9ICcgLi4uICdcbiAgfVxuICByZXR1cm4gJzxCdWZmZXIgJyArIHN0ciArICc+J1xufVxuXG5CdWZmZXIucHJvdG90eXBlLmNvbXBhcmUgPSBmdW5jdGlvbiBjb21wYXJlICh0YXJnZXQsIHN0YXJ0LCBlbmQsIHRoaXNTdGFydCwgdGhpc0VuZCkge1xuICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcih0YXJnZXQpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnQgbXVzdCBiZSBhIEJ1ZmZlcicpXG4gIH1cblxuICBpZiAoc3RhcnQgPT09IHVuZGVmaW5lZCkge1xuICAgIHN0YXJ0ID0gMFxuICB9XG4gIGlmIChlbmQgPT09IHVuZGVmaW5lZCkge1xuICAgIGVuZCA9IHRhcmdldCA/IHRhcmdldC5sZW5ndGggOiAwXG4gIH1cbiAgaWYgKHRoaXNTdGFydCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhpc1N0YXJ0ID0gMFxuICB9XG4gIGlmICh0aGlzRW5kID09PSB1bmRlZmluZWQpIHtcbiAgICB0aGlzRW5kID0gdGhpcy5sZW5ndGhcbiAgfVxuXG4gIGlmIChzdGFydCA8IDAgfHwgZW5kID4gdGFyZ2V0Lmxlbmd0aCB8fCB0aGlzU3RhcnQgPCAwIHx8IHRoaXNFbmQgPiB0aGlzLmxlbmd0aCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdvdXQgb2YgcmFuZ2UgaW5kZXgnKVxuICB9XG5cbiAgaWYgKHRoaXNTdGFydCA+PSB0aGlzRW5kICYmIHN0YXJ0ID49IGVuZCkge1xuICAgIHJldHVybiAwXG4gIH1cbiAgaWYgKHRoaXNTdGFydCA+PSB0aGlzRW5kKSB7XG4gICAgcmV0dXJuIC0xXG4gIH1cbiAgaWYgKHN0YXJ0ID49IGVuZCkge1xuICAgIHJldHVybiAxXG4gIH1cblxuICBzdGFydCA+Pj49IDBcbiAgZW5kID4+Pj0gMFxuICB0aGlzU3RhcnQgPj4+PSAwXG4gIHRoaXNFbmQgPj4+PSAwXG5cbiAgaWYgKHRoaXMgPT09IHRhcmdldCkgcmV0dXJuIDBcblxuICB2YXIgeCA9IHRoaXNFbmQgLSB0aGlzU3RhcnRcbiAgdmFyIHkgPSBlbmQgLSBzdGFydFxuICB2YXIgbGVuID0gTWF0aC5taW4oeCwgeSlcblxuICB2YXIgdGhpc0NvcHkgPSB0aGlzLnNsaWNlKHRoaXNTdGFydCwgdGhpc0VuZClcbiAgdmFyIHRhcmdldENvcHkgPSB0YXJnZXQuc2xpY2Uoc3RhcnQsIGVuZClcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKSB7XG4gICAgaWYgKHRoaXNDb3B5W2ldICE9PSB0YXJnZXRDb3B5W2ldKSB7XG4gICAgICB4ID0gdGhpc0NvcHlbaV1cbiAgICAgIHkgPSB0YXJnZXRDb3B5W2ldXG4gICAgICBicmVha1xuICAgIH1cbiAgfVxuXG4gIGlmICh4IDwgeSkgcmV0dXJuIC0xXG4gIGlmICh5IDwgeCkgcmV0dXJuIDFcbiAgcmV0dXJuIDBcbn1cblxuLy8gRmluZHMgZWl0aGVyIHRoZSBmaXJzdCBpbmRleCBvZiBgdmFsYCBpbiBgYnVmZmVyYCBhdCBvZmZzZXQgPj0gYGJ5dGVPZmZzZXRgLFxuLy8gT1IgdGhlIGxhc3QgaW5kZXggb2YgYHZhbGAgaW4gYGJ1ZmZlcmAgYXQgb2Zmc2V0IDw9IGBieXRlT2Zmc2V0YC5cbi8vXG4vLyBBcmd1bWVudHM6XG4vLyAtIGJ1ZmZlciAtIGEgQnVmZmVyIHRvIHNlYXJjaFxuLy8gLSB2YWwgLSBhIHN0cmluZywgQnVmZmVyLCBvciBudW1iZXJcbi8vIC0gYnl0ZU9mZnNldCAtIGFuIGluZGV4IGludG8gYGJ1ZmZlcmA7IHdpbGwgYmUgY2xhbXBlZCB0byBhbiBpbnQzMlxuLy8gLSBlbmNvZGluZyAtIGFuIG9wdGlvbmFsIGVuY29kaW5nLCByZWxldmFudCBpcyB2YWwgaXMgYSBzdHJpbmdcbi8vIC0gZGlyIC0gdHJ1ZSBmb3IgaW5kZXhPZiwgZmFsc2UgZm9yIGxhc3RJbmRleE9mXG5mdW5jdGlvbiBiaWRpcmVjdGlvbmFsSW5kZXhPZiAoYnVmZmVyLCB2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCBkaXIpIHtcbiAgLy8gRW1wdHkgYnVmZmVyIG1lYW5zIG5vIG1hdGNoXG4gIGlmIChidWZmZXIubGVuZ3RoID09PSAwKSByZXR1cm4gLTFcblxuICAvLyBOb3JtYWxpemUgYnl0ZU9mZnNldFxuICBpZiAodHlwZW9mIGJ5dGVPZmZzZXQgPT09ICdzdHJpbmcnKSB7XG4gICAgZW5jb2RpbmcgPSBieXRlT2Zmc2V0XG4gICAgYnl0ZU9mZnNldCA9IDBcbiAgfSBlbHNlIGlmIChieXRlT2Zmc2V0ID4gMHg3ZmZmZmZmZikge1xuICAgIGJ5dGVPZmZzZXQgPSAweDdmZmZmZmZmXG4gIH0gZWxzZSBpZiAoYnl0ZU9mZnNldCA8IC0weDgwMDAwMDAwKSB7XG4gICAgYnl0ZU9mZnNldCA9IC0weDgwMDAwMDAwXG4gIH1cbiAgYnl0ZU9mZnNldCA9ICtieXRlT2Zmc2V0ICAvLyBDb2VyY2UgdG8gTnVtYmVyLlxuICBpZiAoaXNOYU4oYnl0ZU9mZnNldCkpIHtcbiAgICAvLyBieXRlT2Zmc2V0OiBpdCBpdCdzIHVuZGVmaW5lZCwgbnVsbCwgTmFOLCBcImZvb1wiLCBldGMsIHNlYXJjaCB3aG9sZSBidWZmZXJcbiAgICBieXRlT2Zmc2V0ID0gZGlyID8gMCA6IChidWZmZXIubGVuZ3RoIC0gMSlcbiAgfVxuXG4gIC8vIE5vcm1hbGl6ZSBieXRlT2Zmc2V0OiBuZWdhdGl2ZSBvZmZzZXRzIHN0YXJ0IGZyb20gdGhlIGVuZCBvZiB0aGUgYnVmZmVyXG4gIGlmIChieXRlT2Zmc2V0IDwgMCkgYnl0ZU9mZnNldCA9IGJ1ZmZlci5sZW5ndGggKyBieXRlT2Zmc2V0XG4gIGlmIChieXRlT2Zmc2V0ID49IGJ1ZmZlci5sZW5ndGgpIHtcbiAgICBpZiAoZGlyKSByZXR1cm4gLTFcbiAgICBlbHNlIGJ5dGVPZmZzZXQgPSBidWZmZXIubGVuZ3RoIC0gMVxuICB9IGVsc2UgaWYgKGJ5dGVPZmZzZXQgPCAwKSB7XG4gICAgaWYgKGRpcikgYnl0ZU9mZnNldCA9IDBcbiAgICBlbHNlIHJldHVybiAtMVxuICB9XG5cbiAgLy8gTm9ybWFsaXplIHZhbFxuICBpZiAodHlwZW9mIHZhbCA9PT0gJ3N0cmluZycpIHtcbiAgICB2YWwgPSBCdWZmZXIuZnJvbSh2YWwsIGVuY29kaW5nKVxuICB9XG5cbiAgLy8gRmluYWxseSwgc2VhcmNoIGVpdGhlciBpbmRleE9mIChpZiBkaXIgaXMgdHJ1ZSkgb3IgbGFzdEluZGV4T2ZcbiAgaWYgKEJ1ZmZlci5pc0J1ZmZlcih2YWwpKSB7XG4gICAgLy8gU3BlY2lhbCBjYXNlOiBsb29raW5nIGZvciBlbXB0eSBzdHJpbmcvYnVmZmVyIGFsd2F5cyBmYWlsc1xuICAgIGlmICh2YWwubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gLTFcbiAgICB9XG4gICAgcmV0dXJuIGFycmF5SW5kZXhPZihidWZmZXIsIHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIGRpcilcbiAgfSBlbHNlIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJykge1xuICAgIHZhbCA9IHZhbCAmIDB4RkYgLy8gU2VhcmNoIGZvciBhIGJ5dGUgdmFsdWUgWzAtMjU1XVxuICAgIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCAmJlxuICAgICAgICB0eXBlb2YgVWludDhBcnJheS5wcm90b3R5cGUuaW5kZXhPZiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgaWYgKGRpcikge1xuICAgICAgICByZXR1cm4gVWludDhBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKGJ1ZmZlciwgdmFsLCBieXRlT2Zmc2V0KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFVpbnQ4QXJyYXkucHJvdG90eXBlLmxhc3RJbmRleE9mLmNhbGwoYnVmZmVyLCB2YWwsIGJ5dGVPZmZzZXQpXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBhcnJheUluZGV4T2YoYnVmZmVyLCBbIHZhbCBdLCBieXRlT2Zmc2V0LCBlbmNvZGluZywgZGlyKVxuICB9XG5cbiAgdGhyb3cgbmV3IFR5cGVFcnJvcigndmFsIG11c3QgYmUgc3RyaW5nLCBudW1iZXIgb3IgQnVmZmVyJylcbn1cblxuZnVuY3Rpb24gYXJyYXlJbmRleE9mIChhcnIsIHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIGRpcikge1xuICB2YXIgaW5kZXhTaXplID0gMVxuICB2YXIgYXJyTGVuZ3RoID0gYXJyLmxlbmd0aFxuICB2YXIgdmFsTGVuZ3RoID0gdmFsLmxlbmd0aFxuXG4gIGlmIChlbmNvZGluZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgZW5jb2RpbmcgPSBTdHJpbmcoZW5jb2RpbmcpLnRvTG93ZXJDYXNlKClcbiAgICBpZiAoZW5jb2RpbmcgPT09ICd1Y3MyJyB8fCBlbmNvZGluZyA9PT0gJ3Vjcy0yJyB8fFxuICAgICAgICBlbmNvZGluZyA9PT0gJ3V0ZjE2bGUnIHx8IGVuY29kaW5nID09PSAndXRmLTE2bGUnKSB7XG4gICAgICBpZiAoYXJyLmxlbmd0aCA8IDIgfHwgdmFsLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgcmV0dXJuIC0xXG4gICAgICB9XG4gICAgICBpbmRleFNpemUgPSAyXG4gICAgICBhcnJMZW5ndGggLz0gMlxuICAgICAgdmFsTGVuZ3RoIC89IDJcbiAgICAgIGJ5dGVPZmZzZXQgLz0gMlxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlYWQgKGJ1ZiwgaSkge1xuICAgIGlmIChpbmRleFNpemUgPT09IDEpIHtcbiAgICAgIHJldHVybiBidWZbaV1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGJ1Zi5yZWFkVUludDE2QkUoaSAqIGluZGV4U2l6ZSlcbiAgICB9XG4gIH1cblxuICB2YXIgaVxuICBpZiAoZGlyKSB7XG4gICAgdmFyIGZvdW5kSW5kZXggPSAtMVxuICAgIGZvciAoaSA9IGJ5dGVPZmZzZXQ7IGkgPCBhcnJMZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHJlYWQoYXJyLCBpKSA9PT0gcmVhZCh2YWwsIGZvdW5kSW5kZXggPT09IC0xID8gMCA6IGkgLSBmb3VuZEluZGV4KSkge1xuICAgICAgICBpZiAoZm91bmRJbmRleCA9PT0gLTEpIGZvdW5kSW5kZXggPSBpXG4gICAgICAgIGlmIChpIC0gZm91bmRJbmRleCArIDEgPT09IHZhbExlbmd0aCkgcmV0dXJuIGZvdW5kSW5kZXggKiBpbmRleFNpemVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChmb3VuZEluZGV4ICE9PSAtMSkgaSAtPSBpIC0gZm91bmRJbmRleFxuICAgICAgICBmb3VuZEluZGV4ID0gLTFcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKGJ5dGVPZmZzZXQgKyB2YWxMZW5ndGggPiBhcnJMZW5ndGgpIGJ5dGVPZmZzZXQgPSBhcnJMZW5ndGggLSB2YWxMZW5ndGhcbiAgICBmb3IgKGkgPSBieXRlT2Zmc2V0OyBpID49IDA7IGktLSkge1xuICAgICAgdmFyIGZvdW5kID0gdHJ1ZVxuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB2YWxMZW5ndGg7IGorKykge1xuICAgICAgICBpZiAocmVhZChhcnIsIGkgKyBqKSAhPT0gcmVhZCh2YWwsIGopKSB7XG4gICAgICAgICAgZm91bmQgPSBmYWxzZVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChmb3VuZCkgcmV0dXJuIGlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gLTFcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5pbmNsdWRlcyA9IGZ1bmN0aW9uIGluY2x1ZGVzICh2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nKSB7XG4gIHJldHVybiB0aGlzLmluZGV4T2YodmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZykgIT09IC0xXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuaW5kZXhPZiA9IGZ1bmN0aW9uIGluZGV4T2YgKHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcpIHtcbiAgcmV0dXJuIGJpZGlyZWN0aW9uYWxJbmRleE9mKHRoaXMsIHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIHRydWUpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUubGFzdEluZGV4T2YgPSBmdW5jdGlvbiBsYXN0SW5kZXhPZiAodmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZykge1xuICByZXR1cm4gYmlkaXJlY3Rpb25hbEluZGV4T2YodGhpcywgdmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZywgZmFsc2UpXG59XG5cbmZ1bmN0aW9uIGhleFdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgb2Zmc2V0ID0gTnVtYmVyKG9mZnNldCkgfHwgMFxuICB2YXIgcmVtYWluaW5nID0gYnVmLmxlbmd0aCAtIG9mZnNldFxuICBpZiAoIWxlbmd0aCkge1xuICAgIGxlbmd0aCA9IHJlbWFpbmluZ1xuICB9IGVsc2Uge1xuICAgIGxlbmd0aCA9IE51bWJlcihsZW5ndGgpXG4gICAgaWYgKGxlbmd0aCA+IHJlbWFpbmluZykge1xuICAgICAgbGVuZ3RoID0gcmVtYWluaW5nXG4gICAgfVxuICB9XG5cbiAgLy8gbXVzdCBiZSBhbiBldmVuIG51bWJlciBvZiBkaWdpdHNcbiAgdmFyIHN0ckxlbiA9IHN0cmluZy5sZW5ndGhcbiAgaWYgKHN0ckxlbiAlIDIgIT09IDApIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgaGV4IHN0cmluZycpXG5cbiAgaWYgKGxlbmd0aCA+IHN0ckxlbiAvIDIpIHtcbiAgICBsZW5ndGggPSBzdHJMZW4gLyAyXG4gIH1cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7ICsraSkge1xuICAgIHZhciBwYXJzZWQgPSBwYXJzZUludChzdHJpbmcuc3Vic3RyKGkgKiAyLCAyKSwgMTYpXG4gICAgaWYgKGlzTmFOKHBhcnNlZCkpIHJldHVybiBpXG4gICAgYnVmW29mZnNldCArIGldID0gcGFyc2VkXG4gIH1cbiAgcmV0dXJuIGlcbn1cblxuZnVuY3Rpb24gdXRmOFdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGJsaXRCdWZmZXIodXRmOFRvQnl0ZXMoc3RyaW5nLCBidWYubGVuZ3RoIC0gb2Zmc2V0KSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbn1cblxuZnVuY3Rpb24gYXNjaWlXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBibGl0QnVmZmVyKGFzY2lpVG9CeXRlcyhzdHJpbmcpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxufVxuXG5mdW5jdGlvbiBsYXRpbjFXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBhc2NpaVdyaXRlKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcbn1cblxuZnVuY3Rpb24gYmFzZTY0V3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gYmxpdEJ1ZmZlcihiYXNlNjRUb0J5dGVzKHN0cmluZyksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG59XG5cbmZ1bmN0aW9uIHVjczJXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBibGl0QnVmZmVyKHV0ZjE2bGVUb0J5dGVzKHN0cmluZywgYnVmLmxlbmd0aCAtIG9mZnNldCksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGUgPSBmdW5jdGlvbiB3cml0ZSAoc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCwgZW5jb2RpbmcpIHtcbiAgLy8gQnVmZmVyI3dyaXRlKHN0cmluZylcbiAgaWYgKG9mZnNldCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgZW5jb2RpbmcgPSAndXRmOCdcbiAgICBsZW5ndGggPSB0aGlzLmxlbmd0aFxuICAgIG9mZnNldCA9IDBcbiAgLy8gQnVmZmVyI3dyaXRlKHN0cmluZywgZW5jb2RpbmcpXG4gIH0gZWxzZSBpZiAobGVuZ3RoID09PSB1bmRlZmluZWQgJiYgdHlwZW9mIG9mZnNldCA9PT0gJ3N0cmluZycpIHtcbiAgICBlbmNvZGluZyA9IG9mZnNldFxuICAgIGxlbmd0aCA9IHRoaXMubGVuZ3RoXG4gICAgb2Zmc2V0ID0gMFxuICAvLyBCdWZmZXIjd3JpdGUoc3RyaW5nLCBvZmZzZXRbLCBsZW5ndGhdWywgZW5jb2RpbmddKVxuICB9IGVsc2UgaWYgKGlzRmluaXRlKG9mZnNldCkpIHtcbiAgICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gICAgaWYgKGlzRmluaXRlKGxlbmd0aCkpIHtcbiAgICAgIGxlbmd0aCA9IGxlbmd0aCB8IDBcbiAgICAgIGlmIChlbmNvZGluZyA9PT0gdW5kZWZpbmVkKSBlbmNvZGluZyA9ICd1dGY4J1xuICAgIH0gZWxzZSB7XG4gICAgICBlbmNvZGluZyA9IGxlbmd0aFxuICAgICAgbGVuZ3RoID0gdW5kZWZpbmVkXG4gICAgfVxuICAvLyBsZWdhY3kgd3JpdGUoc3RyaW5nLCBlbmNvZGluZywgb2Zmc2V0LCBsZW5ndGgpIC0gcmVtb3ZlIGluIHYwLjEzXG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgJ0J1ZmZlci53cml0ZShzdHJpbmcsIGVuY29kaW5nLCBvZmZzZXRbLCBsZW5ndGhdKSBpcyBubyBsb25nZXIgc3VwcG9ydGVkJ1xuICAgIClcbiAgfVxuXG4gIHZhciByZW1haW5pbmcgPSB0aGlzLmxlbmd0aCAtIG9mZnNldFxuICBpZiAobGVuZ3RoID09PSB1bmRlZmluZWQgfHwgbGVuZ3RoID4gcmVtYWluaW5nKSBsZW5ndGggPSByZW1haW5pbmdcblxuICBpZiAoKHN0cmluZy5sZW5ndGggPiAwICYmIChsZW5ndGggPCAwIHx8IG9mZnNldCA8IDApKSB8fCBvZmZzZXQgPiB0aGlzLmxlbmd0aCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdBdHRlbXB0IHRvIHdyaXRlIG91dHNpZGUgYnVmZmVyIGJvdW5kcycpXG4gIH1cblxuICBpZiAoIWVuY29kaW5nKSBlbmNvZGluZyA9ICd1dGY4J1xuXG4gIHZhciBsb3dlcmVkQ2FzZSA9IGZhbHNlXG4gIGZvciAoOzspIHtcbiAgICBzd2l0Y2ggKGVuY29kaW5nKSB7XG4gICAgICBjYXNlICdoZXgnOlxuICAgICAgICByZXR1cm4gaGV4V3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgY2FzZSAndXRmOCc6XG4gICAgICBjYXNlICd1dGYtOCc6XG4gICAgICAgIHJldHVybiB1dGY4V3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgY2FzZSAnYXNjaWknOlxuICAgICAgICByZXR1cm4gYXNjaWlXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBjYXNlICdsYXRpbjEnOlxuICAgICAgY2FzZSAnYmluYXJ5JzpcbiAgICAgICAgcmV0dXJuIGxhdGluMVdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgICAgIC8vIFdhcm5pbmc6IG1heExlbmd0aCBub3QgdGFrZW4gaW50byBhY2NvdW50IGluIGJhc2U2NFdyaXRlXG4gICAgICAgIHJldHVybiBiYXNlNjRXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBjYXNlICd1Y3MyJzpcbiAgICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgICByZXR1cm4gdWNzMldyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlmIChsb3dlcmVkQ2FzZSkgdGhyb3cgbmV3IFR5cGVFcnJvcignVW5rbm93biBlbmNvZGluZzogJyArIGVuY29kaW5nKVxuICAgICAgICBlbmNvZGluZyA9ICgnJyArIGVuY29kaW5nKS50b0xvd2VyQ2FzZSgpXG4gICAgICAgIGxvd2VyZWRDYXNlID0gdHJ1ZVxuICAgIH1cbiAgfVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uIHRvSlNPTiAoKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogJ0J1ZmZlcicsXG4gICAgZGF0YTogQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwodGhpcy5fYXJyIHx8IHRoaXMsIDApXG4gIH1cbn1cblxuZnVuY3Rpb24gYmFzZTY0U2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICBpZiAoc3RhcnQgPT09IDAgJiYgZW5kID09PSBidWYubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGJhc2U2NC5mcm9tQnl0ZUFycmF5KGJ1ZilcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gYmFzZTY0LmZyb21CeXRlQXJyYXkoYnVmLnNsaWNlKHN0YXJ0LCBlbmQpKVxuICB9XG59XG5cbmZ1bmN0aW9uIHV0ZjhTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIGVuZCA9IE1hdGgubWluKGJ1Zi5sZW5ndGgsIGVuZClcbiAgdmFyIHJlcyA9IFtdXG5cbiAgdmFyIGkgPSBzdGFydFxuICB3aGlsZSAoaSA8IGVuZCkge1xuICAgIHZhciBmaXJzdEJ5dGUgPSBidWZbaV1cbiAgICB2YXIgY29kZVBvaW50ID0gbnVsbFxuICAgIHZhciBieXRlc1BlclNlcXVlbmNlID0gKGZpcnN0Qnl0ZSA+IDB4RUYpID8gNFxuICAgICAgOiAoZmlyc3RCeXRlID4gMHhERikgPyAzXG4gICAgICA6IChmaXJzdEJ5dGUgPiAweEJGKSA/IDJcbiAgICAgIDogMVxuXG4gICAgaWYgKGkgKyBieXRlc1BlclNlcXVlbmNlIDw9IGVuZCkge1xuICAgICAgdmFyIHNlY29uZEJ5dGUsIHRoaXJkQnl0ZSwgZm91cnRoQnl0ZSwgdGVtcENvZGVQb2ludFxuXG4gICAgICBzd2l0Y2ggKGJ5dGVzUGVyU2VxdWVuY2UpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGlmIChmaXJzdEJ5dGUgPCAweDgwKSB7XG4gICAgICAgICAgICBjb2RlUG9pbnQgPSBmaXJzdEJ5dGVcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIHNlY29uZEJ5dGUgPSBidWZbaSArIDFdXG4gICAgICAgICAgaWYgKChzZWNvbmRCeXRlICYgMHhDMCkgPT09IDB4ODApIHtcbiAgICAgICAgICAgIHRlbXBDb2RlUG9pbnQgPSAoZmlyc3RCeXRlICYgMHgxRikgPDwgMHg2IHwgKHNlY29uZEJ5dGUgJiAweDNGKVxuICAgICAgICAgICAgaWYgKHRlbXBDb2RlUG9pbnQgPiAweDdGKSB7XG4gICAgICAgICAgICAgIGNvZGVQb2ludCA9IHRlbXBDb2RlUG9pbnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIHNlY29uZEJ5dGUgPSBidWZbaSArIDFdXG4gICAgICAgICAgdGhpcmRCeXRlID0gYnVmW2kgKyAyXVxuICAgICAgICAgIGlmICgoc2Vjb25kQnl0ZSAmIDB4QzApID09PSAweDgwICYmICh0aGlyZEJ5dGUgJiAweEMwKSA9PT0gMHg4MCkge1xuICAgICAgICAgICAgdGVtcENvZGVQb2ludCA9IChmaXJzdEJ5dGUgJiAweEYpIDw8IDB4QyB8IChzZWNvbmRCeXRlICYgMHgzRikgPDwgMHg2IHwgKHRoaXJkQnl0ZSAmIDB4M0YpXG4gICAgICAgICAgICBpZiAodGVtcENvZGVQb2ludCA+IDB4N0ZGICYmICh0ZW1wQ29kZVBvaW50IDwgMHhEODAwIHx8IHRlbXBDb2RlUG9pbnQgPiAweERGRkYpKSB7XG4gICAgICAgICAgICAgIGNvZGVQb2ludCA9IHRlbXBDb2RlUG9pbnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIHNlY29uZEJ5dGUgPSBidWZbaSArIDFdXG4gICAgICAgICAgdGhpcmRCeXRlID0gYnVmW2kgKyAyXVxuICAgICAgICAgIGZvdXJ0aEJ5dGUgPSBidWZbaSArIDNdXG4gICAgICAgICAgaWYgKChzZWNvbmRCeXRlICYgMHhDMCkgPT09IDB4ODAgJiYgKHRoaXJkQnl0ZSAmIDB4QzApID09PSAweDgwICYmIChmb3VydGhCeXRlICYgMHhDMCkgPT09IDB4ODApIHtcbiAgICAgICAgICAgIHRlbXBDb2RlUG9pbnQgPSAoZmlyc3RCeXRlICYgMHhGKSA8PCAweDEyIHwgKHNlY29uZEJ5dGUgJiAweDNGKSA8PCAweEMgfCAodGhpcmRCeXRlICYgMHgzRikgPDwgMHg2IHwgKGZvdXJ0aEJ5dGUgJiAweDNGKVxuICAgICAgICAgICAgaWYgKHRlbXBDb2RlUG9pbnQgPiAweEZGRkYgJiYgdGVtcENvZGVQb2ludCA8IDB4MTEwMDAwKSB7XG4gICAgICAgICAgICAgIGNvZGVQb2ludCA9IHRlbXBDb2RlUG9pbnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNvZGVQb2ludCA9PT0gbnVsbCkge1xuICAgICAgLy8gd2UgZGlkIG5vdCBnZW5lcmF0ZSBhIHZhbGlkIGNvZGVQb2ludCBzbyBpbnNlcnQgYVxuICAgICAgLy8gcmVwbGFjZW1lbnQgY2hhciAoVStGRkZEKSBhbmQgYWR2YW5jZSBvbmx5IDEgYnl0ZVxuICAgICAgY29kZVBvaW50ID0gMHhGRkZEXG4gICAgICBieXRlc1BlclNlcXVlbmNlID0gMVxuICAgIH0gZWxzZSBpZiAoY29kZVBvaW50ID4gMHhGRkZGKSB7XG4gICAgICAvLyBlbmNvZGUgdG8gdXRmMTYgKHN1cnJvZ2F0ZSBwYWlyIGRhbmNlKVxuICAgICAgY29kZVBvaW50IC09IDB4MTAwMDBcbiAgICAgIHJlcy5wdXNoKGNvZGVQb2ludCA+Pj4gMTAgJiAweDNGRiB8IDB4RDgwMClcbiAgICAgIGNvZGVQb2ludCA9IDB4REMwMCB8IGNvZGVQb2ludCAmIDB4M0ZGXG4gICAgfVxuXG4gICAgcmVzLnB1c2goY29kZVBvaW50KVxuICAgIGkgKz0gYnl0ZXNQZXJTZXF1ZW5jZVxuICB9XG5cbiAgcmV0dXJuIGRlY29kZUNvZGVQb2ludHNBcnJheShyZXMpXG59XG5cbi8vIEJhc2VkIG9uIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzIyNzQ3MjcyLzY4MDc0MiwgdGhlIGJyb3dzZXIgd2l0aFxuLy8gdGhlIGxvd2VzdCBsaW1pdCBpcyBDaHJvbWUsIHdpdGggMHgxMDAwMCBhcmdzLlxuLy8gV2UgZ28gMSBtYWduaXR1ZGUgbGVzcywgZm9yIHNhZmV0eVxudmFyIE1BWF9BUkdVTUVOVFNfTEVOR1RIID0gMHgxMDAwXG5cbmZ1bmN0aW9uIGRlY29kZUNvZGVQb2ludHNBcnJheSAoY29kZVBvaW50cykge1xuICB2YXIgbGVuID0gY29kZVBvaW50cy5sZW5ndGhcbiAgaWYgKGxlbiA8PSBNQVhfQVJHVU1FTlRTX0xFTkdUSCkge1xuICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KFN0cmluZywgY29kZVBvaW50cykgLy8gYXZvaWQgZXh0cmEgc2xpY2UoKVxuICB9XG5cbiAgLy8gRGVjb2RlIGluIGNodW5rcyB0byBhdm9pZCBcImNhbGwgc3RhY2sgc2l6ZSBleGNlZWRlZFwiLlxuICB2YXIgcmVzID0gJydcbiAgdmFyIGkgPSAwXG4gIHdoaWxlIChpIDwgbGVuKSB7XG4gICAgcmVzICs9IFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkoXG4gICAgICBTdHJpbmcsXG4gICAgICBjb2RlUG9pbnRzLnNsaWNlKGksIGkgKz0gTUFYX0FSR1VNRU5UU19MRU5HVEgpXG4gICAgKVxuICB9XG4gIHJldHVybiByZXNcbn1cblxuZnVuY3Rpb24gYXNjaWlTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHZhciByZXQgPSAnJ1xuICBlbmQgPSBNYXRoLm1pbihidWYubGVuZ3RoLCBlbmQpXG5cbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyArK2kpIHtcbiAgICByZXQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShidWZbaV0gJiAweDdGKVxuICB9XG4gIHJldHVybiByZXRcbn1cblxuZnVuY3Rpb24gbGF0aW4xU2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICB2YXIgcmV0ID0gJydcbiAgZW5kID0gTWF0aC5taW4oYnVmLmxlbmd0aCwgZW5kKVxuXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgKytpKSB7XG4gICAgcmV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnVmW2ldKVxuICB9XG4gIHJldHVybiByZXRcbn1cblxuZnVuY3Rpb24gaGV4U2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICB2YXIgbGVuID0gYnVmLmxlbmd0aFxuXG4gIGlmICghc3RhcnQgfHwgc3RhcnQgPCAwKSBzdGFydCA9IDBcbiAgaWYgKCFlbmQgfHwgZW5kIDwgMCB8fCBlbmQgPiBsZW4pIGVuZCA9IGxlblxuXG4gIHZhciBvdXQgPSAnJ1xuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7ICsraSkge1xuICAgIG91dCArPSB0b0hleChidWZbaV0pXG4gIH1cbiAgcmV0dXJuIG91dFxufVxuXG5mdW5jdGlvbiB1dGYxNmxlU2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICB2YXIgYnl0ZXMgPSBidWYuc2xpY2Uoc3RhcnQsIGVuZClcbiAgdmFyIHJlcyA9ICcnXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYnl0ZXMubGVuZ3RoOyBpICs9IDIpIHtcbiAgICByZXMgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShieXRlc1tpXSArIGJ5dGVzW2kgKyAxXSAqIDI1NilcbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuc2xpY2UgPSBmdW5jdGlvbiBzbGljZSAoc3RhcnQsIGVuZCkge1xuICB2YXIgbGVuID0gdGhpcy5sZW5ndGhcbiAgc3RhcnQgPSB+fnN0YXJ0XG4gIGVuZCA9IGVuZCA9PT0gdW5kZWZpbmVkID8gbGVuIDogfn5lbmRcblxuICBpZiAoc3RhcnQgPCAwKSB7XG4gICAgc3RhcnQgKz0gbGVuXG4gICAgaWYgKHN0YXJ0IDwgMCkgc3RhcnQgPSAwXG4gIH0gZWxzZSBpZiAoc3RhcnQgPiBsZW4pIHtcbiAgICBzdGFydCA9IGxlblxuICB9XG5cbiAgaWYgKGVuZCA8IDApIHtcbiAgICBlbmQgKz0gbGVuXG4gICAgaWYgKGVuZCA8IDApIGVuZCA9IDBcbiAgfSBlbHNlIGlmIChlbmQgPiBsZW4pIHtcbiAgICBlbmQgPSBsZW5cbiAgfVxuXG4gIGlmIChlbmQgPCBzdGFydCkgZW5kID0gc3RhcnRcblxuICB2YXIgbmV3QnVmXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIG5ld0J1ZiA9IHRoaXMuc3ViYXJyYXkoc3RhcnQsIGVuZClcbiAgICBuZXdCdWYuX19wcm90b19fID0gQnVmZmVyLnByb3RvdHlwZVxuICB9IGVsc2Uge1xuICAgIHZhciBzbGljZUxlbiA9IGVuZCAtIHN0YXJ0XG4gICAgbmV3QnVmID0gbmV3IEJ1ZmZlcihzbGljZUxlbiwgdW5kZWZpbmVkKVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2xpY2VMZW47ICsraSkge1xuICAgICAgbmV3QnVmW2ldID0gdGhpc1tpICsgc3RhcnRdXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5ld0J1ZlxufVxuXG4vKlxuICogTmVlZCB0byBtYWtlIHN1cmUgdGhhdCBidWZmZXIgaXNuJ3QgdHJ5aW5nIHRvIHdyaXRlIG91dCBvZiBib3VuZHMuXG4gKi9cbmZ1bmN0aW9uIGNoZWNrT2Zmc2V0IChvZmZzZXQsIGV4dCwgbGVuZ3RoKSB7XG4gIGlmICgob2Zmc2V0ICUgMSkgIT09IDAgfHwgb2Zmc2V0IDwgMCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ29mZnNldCBpcyBub3QgdWludCcpXG4gIGlmIChvZmZzZXQgKyBleHQgPiBsZW5ndGgpIHRocm93IG5ldyBSYW5nZUVycm9yKCdUcnlpbmcgdG8gYWNjZXNzIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludExFID0gZnVuY3Rpb24gcmVhZFVJbnRMRSAob2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoIHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIGJ5dGVMZW5ndGgsIHRoaXMubGVuZ3RoKVxuXG4gIHZhciB2YWwgPSB0aGlzW29mZnNldF1cbiAgdmFyIG11bCA9IDFcbiAgdmFyIGkgPSAwXG4gIHdoaWxlICgrK2kgPCBieXRlTGVuZ3RoICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdmFsICs9IHRoaXNbb2Zmc2V0ICsgaV0gKiBtdWxcbiAgfVxuXG4gIHJldHVybiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludEJFID0gZnVuY3Rpb24gcmVhZFVJbnRCRSAob2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoIHwgMFxuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgY2hlY2tPZmZzZXQob2Zmc2V0LCBieXRlTGVuZ3RoLCB0aGlzLmxlbmd0aClcbiAgfVxuXG4gIHZhciB2YWwgPSB0aGlzW29mZnNldCArIC0tYnl0ZUxlbmd0aF1cbiAgdmFyIG11bCA9IDFcbiAgd2hpbGUgKGJ5dGVMZW5ndGggPiAwICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdmFsICs9IHRoaXNbb2Zmc2V0ICsgLS1ieXRlTGVuZ3RoXSAqIG11bFxuICB9XG5cbiAgcmV0dXJuIHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50OCA9IGZ1bmN0aW9uIHJlYWRVSW50OCAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDEsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gdGhpc1tvZmZzZXRdXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQxNkxFID0gZnVuY3Rpb24gcmVhZFVJbnQxNkxFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMiwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiB0aGlzW29mZnNldF0gfCAodGhpc1tvZmZzZXQgKyAxXSA8PCA4KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MTZCRSA9IGZ1bmN0aW9uIHJlYWRVSW50MTZCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDIsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gKHRoaXNbb2Zmc2V0XSA8PCA4KSB8IHRoaXNbb2Zmc2V0ICsgMV1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDMyTEUgPSBmdW5jdGlvbiByZWFkVUludDMyTEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcblxuICByZXR1cm4gKCh0aGlzW29mZnNldF0pIHxcbiAgICAgICh0aGlzW29mZnNldCArIDFdIDw8IDgpIHxcbiAgICAgICh0aGlzW29mZnNldCArIDJdIDw8IDE2KSkgK1xuICAgICAgKHRoaXNbb2Zmc2V0ICsgM10gKiAweDEwMDAwMDApXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQzMkJFID0gZnVuY3Rpb24gcmVhZFVJbnQzMkJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG5cbiAgcmV0dXJuICh0aGlzW29mZnNldF0gKiAweDEwMDAwMDApICtcbiAgICAoKHRoaXNbb2Zmc2V0ICsgMV0gPDwgMTYpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAyXSA8PCA4KSB8XG4gICAgdGhpc1tvZmZzZXQgKyAzXSlcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50TEUgPSBmdW5jdGlvbiByZWFkSW50TEUgKG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCBieXRlTGVuZ3RoLCB0aGlzLmxlbmd0aClcblxuICB2YXIgdmFsID0gdGhpc1tvZmZzZXRdXG4gIHZhciBtdWwgPSAxXG4gIHZhciBpID0gMFxuICB3aGlsZSAoKytpIDwgYnl0ZUxlbmd0aCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHZhbCArPSB0aGlzW29mZnNldCArIGldICogbXVsXG4gIH1cbiAgbXVsICo9IDB4ODBcblxuICBpZiAodmFsID49IG11bCkgdmFsIC09IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoKVxuXG4gIHJldHVybiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50QkUgPSBmdW5jdGlvbiByZWFkSW50QkUgKG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCBieXRlTGVuZ3RoLCB0aGlzLmxlbmd0aClcblxuICB2YXIgaSA9IGJ5dGVMZW5ndGhcbiAgdmFyIG11bCA9IDFcbiAgdmFyIHZhbCA9IHRoaXNbb2Zmc2V0ICsgLS1pXVxuICB3aGlsZSAoaSA+IDAgJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB2YWwgKz0gdGhpc1tvZmZzZXQgKyAtLWldICogbXVsXG4gIH1cbiAgbXVsICo9IDB4ODBcblxuICBpZiAodmFsID49IG11bCkgdmFsIC09IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoKVxuXG4gIHJldHVybiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50OCA9IGZ1bmN0aW9uIHJlYWRJbnQ4IChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMSwgdGhpcy5sZW5ndGgpXG4gIGlmICghKHRoaXNbb2Zmc2V0XSAmIDB4ODApKSByZXR1cm4gKHRoaXNbb2Zmc2V0XSlcbiAgcmV0dXJuICgoMHhmZiAtIHRoaXNbb2Zmc2V0XSArIDEpICogLTEpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDE2TEUgPSBmdW5jdGlvbiByZWFkSW50MTZMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDIsIHRoaXMubGVuZ3RoKVxuICB2YXIgdmFsID0gdGhpc1tvZmZzZXRdIHwgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgOClcbiAgcmV0dXJuICh2YWwgJiAweDgwMDApID8gdmFsIHwgMHhGRkZGMDAwMCA6IHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQxNkJFID0gZnVuY3Rpb24gcmVhZEludDE2QkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAyLCB0aGlzLmxlbmd0aClcbiAgdmFyIHZhbCA9IHRoaXNbb2Zmc2V0ICsgMV0gfCAodGhpc1tvZmZzZXRdIDw8IDgpXG4gIHJldHVybiAodmFsICYgMHg4MDAwKSA/IHZhbCB8IDB4RkZGRjAwMDAgOiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MzJMRSA9IGZ1bmN0aW9uIHJlYWRJbnQzMkxFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG5cbiAgcmV0dXJuICh0aGlzW29mZnNldF0pIHxcbiAgICAodGhpc1tvZmZzZXQgKyAxXSA8PCA4KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgMl0gPDwgMTYpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAzXSA8PCAyNClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MzJCRSA9IGZ1bmN0aW9uIHJlYWRJbnQzMkJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG5cbiAgcmV0dXJuICh0aGlzW29mZnNldF0gPDwgMjQpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAxXSA8PCAxNikgfFxuICAgICh0aGlzW29mZnNldCArIDJdIDw8IDgpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAzXSlcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRmxvYXRMRSA9IGZ1bmN0aW9uIHJlYWRGbG9hdExFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiBpZWVlNzU0LnJlYWQodGhpcywgb2Zmc2V0LCB0cnVlLCAyMywgNClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRmxvYXRCRSA9IGZ1bmN0aW9uIHJlYWRGbG9hdEJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiBpZWVlNzU0LnJlYWQodGhpcywgb2Zmc2V0LCBmYWxzZSwgMjMsIDQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZERvdWJsZUxFID0gZnVuY3Rpb24gcmVhZERvdWJsZUxFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgOCwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiBpZWVlNzU0LnJlYWQodGhpcywgb2Zmc2V0LCB0cnVlLCA1MiwgOClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRG91YmxlQkUgPSBmdW5jdGlvbiByZWFkRG91YmxlQkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA4LCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIGllZWU3NTQucmVhZCh0aGlzLCBvZmZzZXQsIGZhbHNlLCA1MiwgOClcbn1cblxuZnVuY3Rpb24gY2hlY2tJbnQgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgZXh0LCBtYXgsIG1pbikge1xuICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihidWYpKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdcImJ1ZmZlclwiIGFyZ3VtZW50IG11c3QgYmUgYSBCdWZmZXIgaW5zdGFuY2UnKVxuICBpZiAodmFsdWUgPiBtYXggfHwgdmFsdWUgPCBtaW4pIHRocm93IG5ldyBSYW5nZUVycm9yKCdcInZhbHVlXCIgYXJndW1lbnQgaXMgb3V0IG9mIGJvdW5kcycpXG4gIGlmIChvZmZzZXQgKyBleHQgPiBidWYubGVuZ3RoKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW5kZXggb3V0IG9mIHJhbmdlJylcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnRMRSA9IGZ1bmN0aW9uIHdyaXRlVUludExFICh2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoIHwgMFxuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgdmFyIG1heEJ5dGVzID0gTWF0aC5wb3coMiwgOCAqIGJ5dGVMZW5ndGgpIC0gMVxuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIG1heEJ5dGVzLCAwKVxuICB9XG5cbiAgdmFyIG11bCA9IDFcbiAgdmFyIGkgPSAwXG4gIHRoaXNbb2Zmc2V0XSA9IHZhbHVlICYgMHhGRlxuICB3aGlsZSAoKytpIDwgYnl0ZUxlbmd0aCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHRoaXNbb2Zmc2V0ICsgaV0gPSAodmFsdWUgLyBtdWwpICYgMHhGRlxuICB9XG5cbiAgcmV0dXJuIG9mZnNldCArIGJ5dGVMZW5ndGhcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnRCRSA9IGZ1bmN0aW9uIHdyaXRlVUludEJFICh2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoIHwgMFxuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgdmFyIG1heEJ5dGVzID0gTWF0aC5wb3coMiwgOCAqIGJ5dGVMZW5ndGgpIC0gMVxuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIG1heEJ5dGVzLCAwKVxuICB9XG5cbiAgdmFyIGkgPSBieXRlTGVuZ3RoIC0gMVxuICB2YXIgbXVsID0gMVxuICB0aGlzW29mZnNldCArIGldID0gdmFsdWUgJiAweEZGXG4gIHdoaWxlICgtLWkgPj0gMCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHRoaXNbb2Zmc2V0ICsgaV0gPSAodmFsdWUgLyBtdWwpICYgMHhGRlxuICB9XG5cbiAgcmV0dXJuIG9mZnNldCArIGJ5dGVMZW5ndGhcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQ4ID0gZnVuY3Rpb24gd3JpdGVVSW50OCAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAxLCAweGZmLCAwKVxuICBpZiAoIUJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB2YWx1ZSA9IE1hdGguZmxvb3IodmFsdWUpXG4gIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIHJldHVybiBvZmZzZXQgKyAxXG59XG5cbmZ1bmN0aW9uIG9iamVjdFdyaXRlVUludDE2IChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbikge1xuICBpZiAodmFsdWUgPCAwKSB2YWx1ZSA9IDB4ZmZmZiArIHZhbHVlICsgMVxuICBmb3IgKHZhciBpID0gMCwgaiA9IE1hdGgubWluKGJ1Zi5sZW5ndGggLSBvZmZzZXQsIDIpOyBpIDwgajsgKytpKSB7XG4gICAgYnVmW29mZnNldCArIGldID0gKHZhbHVlICYgKDB4ZmYgPDwgKDggKiAobGl0dGxlRW5kaWFuID8gaSA6IDEgLSBpKSkpKSA+Pj5cbiAgICAgIChsaXR0bGVFbmRpYW4gPyBpIDogMSAtIGkpICogOFxuICB9XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MTZMRSA9IGZ1bmN0aW9uIHdyaXRlVUludDE2TEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMiwgMHhmZmZmLCAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDgpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MTYodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgMlxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDE2QkUgPSBmdW5jdGlvbiB3cml0ZVVJbnQxNkJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDIsIDB4ZmZmZiwgMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgJiAweGZmKVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDE2KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlKVxuICB9XG4gIHJldHVybiBvZmZzZXQgKyAyXG59XG5cbmZ1bmN0aW9uIG9iamVjdFdyaXRlVUludDMyIChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbikge1xuICBpZiAodmFsdWUgPCAwKSB2YWx1ZSA9IDB4ZmZmZmZmZmYgKyB2YWx1ZSArIDFcbiAgZm9yICh2YXIgaSA9IDAsIGogPSBNYXRoLm1pbihidWYubGVuZ3RoIC0gb2Zmc2V0LCA0KTsgaSA8IGo7ICsraSkge1xuICAgIGJ1ZltvZmZzZXQgKyBpXSA9ICh2YWx1ZSA+Pj4gKGxpdHRsZUVuZGlhbiA/IGkgOiAzIC0gaSkgKiA4KSAmIDB4ZmZcbiAgfVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDMyTEUgPSBmdW5jdGlvbiB3cml0ZVVJbnQzMkxFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDQsIDB4ZmZmZmZmZmYsIDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0ICsgM10gPSAodmFsdWUgPj4+IDI0KVxuICAgIHRoaXNbb2Zmc2V0ICsgMl0gPSAodmFsdWUgPj4+IDE2KVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDgpXG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQzMih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlKVxuICB9XG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MzJCRSA9IGZ1bmN0aW9uIHdyaXRlVUludDMyQkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgNCwgMHhmZmZmZmZmZiwgMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlID4+PiAyNClcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiAxNilcbiAgICB0aGlzW29mZnNldCArIDJdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0ICsgM10gPSAodmFsdWUgJiAweGZmKVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDMyKHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlKVxuICB9XG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnRMRSA9IGZ1bmN0aW9uIHdyaXRlSW50TEUgKHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIHZhciBsaW1pdCA9IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoIC0gMSlcblxuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIGxpbWl0IC0gMSwgLWxpbWl0KVxuICB9XG5cbiAgdmFyIGkgPSAwXG4gIHZhciBtdWwgPSAxXG4gIHZhciBzdWIgPSAwXG4gIHRoaXNbb2Zmc2V0XSA9IHZhbHVlICYgMHhGRlxuICB3aGlsZSAoKytpIDwgYnl0ZUxlbmd0aCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIGlmICh2YWx1ZSA8IDAgJiYgc3ViID09PSAwICYmIHRoaXNbb2Zmc2V0ICsgaSAtIDFdICE9PSAwKSB7XG4gICAgICBzdWIgPSAxXG4gICAgfVxuICAgIHRoaXNbb2Zmc2V0ICsgaV0gPSAoKHZhbHVlIC8gbXVsKSA+PiAwKSAtIHN1YiAmIDB4RkZcbiAgfVxuXG4gIHJldHVybiBvZmZzZXQgKyBieXRlTGVuZ3RoXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnRCRSA9IGZ1bmN0aW9uIHdyaXRlSW50QkUgKHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIHZhciBsaW1pdCA9IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoIC0gMSlcblxuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIGxpbWl0IC0gMSwgLWxpbWl0KVxuICB9XG5cbiAgdmFyIGkgPSBieXRlTGVuZ3RoIC0gMVxuICB2YXIgbXVsID0gMVxuICB2YXIgc3ViID0gMFxuICB0aGlzW29mZnNldCArIGldID0gdmFsdWUgJiAweEZGXG4gIHdoaWxlICgtLWkgPj0gMCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIGlmICh2YWx1ZSA8IDAgJiYgc3ViID09PSAwICYmIHRoaXNbb2Zmc2V0ICsgaSArIDFdICE9PSAwKSB7XG4gICAgICBzdWIgPSAxXG4gICAgfVxuICAgIHRoaXNbb2Zmc2V0ICsgaV0gPSAoKHZhbHVlIC8gbXVsKSA+PiAwKSAtIHN1YiAmIDB4RkZcbiAgfVxuXG4gIHJldHVybiBvZmZzZXQgKyBieXRlTGVuZ3RoXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQ4ID0gZnVuY3Rpb24gd3JpdGVJbnQ4ICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDEsIDB4N2YsIC0weDgwKVxuICBpZiAoIUJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB2YWx1ZSA9IE1hdGguZmxvb3IodmFsdWUpXG4gIGlmICh2YWx1ZSA8IDApIHZhbHVlID0gMHhmZiArIHZhbHVlICsgMVxuICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICByZXR1cm4gb2Zmc2V0ICsgMVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MTZMRSA9IGZ1bmN0aW9uIHdyaXRlSW50MTZMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAyLCAweDdmZmYsIC0weDgwMDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gOClcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQxNih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlKVxuICB9XG4gIHJldHVybiBvZmZzZXQgKyAyXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQxNkJFID0gZnVuY3Rpb24gd3JpdGVJbnQxNkJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDIsIDB4N2ZmZiwgLTB4ODAwMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgJiAweGZmKVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDE2KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlKVxuICB9XG4gIHJldHVybiBvZmZzZXQgKyAyXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQzMkxFID0gZnVuY3Rpb24gd3JpdGVJbnQzMkxFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDQsIDB4N2ZmZmZmZmYsIC0weDgwMDAwMDAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDgpXG4gICAgdGhpc1tvZmZzZXQgKyAyXSA9ICh2YWx1ZSA+Pj4gMTYpXG4gICAgdGhpc1tvZmZzZXQgKyAzXSA9ICh2YWx1ZSA+Pj4gMjQpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MzIodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MzJCRSA9IGZ1bmN0aW9uIHdyaXRlSW50MzJCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCA0LCAweDdmZmZmZmZmLCAtMHg4MDAwMDAwMClcbiAgaWYgKHZhbHVlIDwgMCkgdmFsdWUgPSAweGZmZmZmZmZmICsgdmFsdWUgKyAxXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSA+Pj4gMjQpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gMTYpXG4gICAgdGhpc1tvZmZzZXQgKyAyXSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldCArIDNdID0gKHZhbHVlICYgMHhmZilcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQzMih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5mdW5jdGlvbiBjaGVja0lFRUU3NTQgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgZXh0LCBtYXgsIG1pbikge1xuICBpZiAob2Zmc2V0ICsgZXh0ID4gYnVmLmxlbmd0aCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0luZGV4IG91dCBvZiByYW5nZScpXG4gIGlmIChvZmZzZXQgPCAwKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW5kZXggb3V0IG9mIHJhbmdlJylcbn1cblxuZnVuY3Rpb24gd3JpdGVGbG9hdCAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBjaGVja0lFRUU3NTQoYnVmLCB2YWx1ZSwgb2Zmc2V0LCA0LCAzLjQwMjgyMzQ2NjM4NTI4ODZlKzM4LCAtMy40MDI4MjM0NjYzODUyODg2ZSszOClcbiAgfVxuICBpZWVlNzU0LndyaXRlKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCAyMywgNClcbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUZsb2F0TEUgPSBmdW5jdGlvbiB3cml0ZUZsb2F0TEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiB3cml0ZUZsb2F0KHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRmxvYXRCRSA9IGZ1bmN0aW9uIHdyaXRlRmxvYXRCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIHdyaXRlRmxvYXQodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG5mdW5jdGlvbiB3cml0ZURvdWJsZSAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBjaGVja0lFRUU3NTQoYnVmLCB2YWx1ZSwgb2Zmc2V0LCA4LCAxLjc5NzY5MzEzNDg2MjMxNTdFKzMwOCwgLTEuNzk3NjkzMTM0ODYyMzE1N0UrMzA4KVxuICB9XG4gIGllZWU3NTQud3JpdGUoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIDUyLCA4KVxuICByZXR1cm4gb2Zmc2V0ICsgOFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRG91YmxlTEUgPSBmdW5jdGlvbiB3cml0ZURvdWJsZUxFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gd3JpdGVEb3VibGUodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVEb3VibGVCRSA9IGZ1bmN0aW9uIHdyaXRlRG91YmxlQkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiB3cml0ZURvdWJsZSh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbi8vIGNvcHkodGFyZ2V0QnVmZmVyLCB0YXJnZXRTdGFydD0wLCBzb3VyY2VTdGFydD0wLCBzb3VyY2VFbmQ9YnVmZmVyLmxlbmd0aClcbkJ1ZmZlci5wcm90b3R5cGUuY29weSA9IGZ1bmN0aW9uIGNvcHkgKHRhcmdldCwgdGFyZ2V0U3RhcnQsIHN0YXJ0LCBlbmQpIHtcbiAgaWYgKCFzdGFydCkgc3RhcnQgPSAwXG4gIGlmICghZW5kICYmIGVuZCAhPT0gMCkgZW5kID0gdGhpcy5sZW5ndGhcbiAgaWYgKHRhcmdldFN0YXJ0ID49IHRhcmdldC5sZW5ndGgpIHRhcmdldFN0YXJ0ID0gdGFyZ2V0Lmxlbmd0aFxuICBpZiAoIXRhcmdldFN0YXJ0KSB0YXJnZXRTdGFydCA9IDBcbiAgaWYgKGVuZCA+IDAgJiYgZW5kIDwgc3RhcnQpIGVuZCA9IHN0YXJ0XG5cbiAgLy8gQ29weSAwIGJ5dGVzOyB3ZSdyZSBkb25lXG4gIGlmIChlbmQgPT09IHN0YXJ0KSByZXR1cm4gMFxuICBpZiAodGFyZ2V0Lmxlbmd0aCA9PT0gMCB8fCB0aGlzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIDBcblxuICAvLyBGYXRhbCBlcnJvciBjb25kaXRpb25zXG4gIGlmICh0YXJnZXRTdGFydCA8IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcigndGFyZ2V0U3RhcnQgb3V0IG9mIGJvdW5kcycpXG4gIH1cbiAgaWYgKHN0YXJ0IDwgMCB8fCBzdGFydCA+PSB0aGlzLmxlbmd0aCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3NvdXJjZVN0YXJ0IG91dCBvZiBib3VuZHMnKVxuICBpZiAoZW5kIDwgMCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3NvdXJjZUVuZCBvdXQgb2YgYm91bmRzJylcblxuICAvLyBBcmUgd2Ugb29iP1xuICBpZiAoZW5kID4gdGhpcy5sZW5ndGgpIGVuZCA9IHRoaXMubGVuZ3RoXG4gIGlmICh0YXJnZXQubGVuZ3RoIC0gdGFyZ2V0U3RhcnQgPCBlbmQgLSBzdGFydCkge1xuICAgIGVuZCA9IHRhcmdldC5sZW5ndGggLSB0YXJnZXRTdGFydCArIHN0YXJ0XG4gIH1cblxuICB2YXIgbGVuID0gZW5kIC0gc3RhcnRcbiAgdmFyIGlcblxuICBpZiAodGhpcyA9PT0gdGFyZ2V0ICYmIHN0YXJ0IDwgdGFyZ2V0U3RhcnQgJiYgdGFyZ2V0U3RhcnQgPCBlbmQpIHtcbiAgICAvLyBkZXNjZW5kaW5nIGNvcHkgZnJvbSBlbmRcbiAgICBmb3IgKGkgPSBsZW4gLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgdGFyZ2V0W2kgKyB0YXJnZXRTdGFydF0gPSB0aGlzW2kgKyBzdGFydF1cbiAgICB9XG4gIH0gZWxzZSBpZiAobGVuIDwgMTAwMCB8fCAhQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICAvLyBhc2NlbmRpbmcgY29weSBmcm9tIHN0YXJ0XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICB0YXJnZXRbaSArIHRhcmdldFN0YXJ0XSA9IHRoaXNbaSArIHN0YXJ0XVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBVaW50OEFycmF5LnByb3RvdHlwZS5zZXQuY2FsbChcbiAgICAgIHRhcmdldCxcbiAgICAgIHRoaXMuc3ViYXJyYXkoc3RhcnQsIHN0YXJ0ICsgbGVuKSxcbiAgICAgIHRhcmdldFN0YXJ0XG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIGxlblxufVxuXG4vLyBVc2FnZTpcbi8vICAgIGJ1ZmZlci5maWxsKG51bWJlclssIG9mZnNldFssIGVuZF1dKVxuLy8gICAgYnVmZmVyLmZpbGwoYnVmZmVyWywgb2Zmc2V0WywgZW5kXV0pXG4vLyAgICBidWZmZXIuZmlsbChzdHJpbmdbLCBvZmZzZXRbLCBlbmRdXVssIGVuY29kaW5nXSlcbkJ1ZmZlci5wcm90b3R5cGUuZmlsbCA9IGZ1bmN0aW9uIGZpbGwgKHZhbCwgc3RhcnQsIGVuZCwgZW5jb2RpbmcpIHtcbiAgLy8gSGFuZGxlIHN0cmluZyBjYXNlczpcbiAgaWYgKHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnKSB7XG4gICAgaWYgKHR5cGVvZiBzdGFydCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGVuY29kaW5nID0gc3RhcnRcbiAgICAgIHN0YXJ0ID0gMFxuICAgICAgZW5kID0gdGhpcy5sZW5ndGhcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBlbmQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBlbmNvZGluZyA9IGVuZFxuICAgICAgZW5kID0gdGhpcy5sZW5ndGhcbiAgICB9XG4gICAgaWYgKHZhbC5sZW5ndGggPT09IDEpIHtcbiAgICAgIHZhciBjb2RlID0gdmFsLmNoYXJDb2RlQXQoMClcbiAgICAgIGlmIChjb2RlIDwgMjU2KSB7XG4gICAgICAgIHZhbCA9IGNvZGVcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGVuY29kaW5nICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIGVuY29kaW5nICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignZW5jb2RpbmcgbXVzdCBiZSBhIHN0cmluZycpXG4gICAgfVxuICAgIGlmICh0eXBlb2YgZW5jb2RpbmcgPT09ICdzdHJpbmcnICYmICFCdWZmZXIuaXNFbmNvZGluZyhlbmNvZGluZykpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Vua25vd24gZW5jb2Rpbmc6ICcgKyBlbmNvZGluZylcbiAgICB9XG4gIH0gZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHtcbiAgICB2YWwgPSB2YWwgJiAyNTVcbiAgfVxuXG4gIC8vIEludmFsaWQgcmFuZ2VzIGFyZSBub3Qgc2V0IHRvIGEgZGVmYXVsdCwgc28gY2FuIHJhbmdlIGNoZWNrIGVhcmx5LlxuICBpZiAoc3RhcnQgPCAwIHx8IHRoaXMubGVuZ3RoIDwgc3RhcnQgfHwgdGhpcy5sZW5ndGggPCBlbmQpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignT3V0IG9mIHJhbmdlIGluZGV4JylcbiAgfVxuXG4gIGlmIChlbmQgPD0gc3RhcnQpIHtcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgc3RhcnQgPSBzdGFydCA+Pj4gMFxuICBlbmQgPSBlbmQgPT09IHVuZGVmaW5lZCA/IHRoaXMubGVuZ3RoIDogZW5kID4+PiAwXG5cbiAgaWYgKCF2YWwpIHZhbCA9IDBcblxuICB2YXIgaVxuICBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHtcbiAgICBmb3IgKGkgPSBzdGFydDsgaSA8IGVuZDsgKytpKSB7XG4gICAgICB0aGlzW2ldID0gdmFsXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciBieXRlcyA9IEJ1ZmZlci5pc0J1ZmZlcih2YWwpXG4gICAgICA/IHZhbFxuICAgICAgOiB1dGY4VG9CeXRlcyhuZXcgQnVmZmVyKHZhbCwgZW5jb2RpbmcpLnRvU3RyaW5nKCkpXG4gICAgdmFyIGxlbiA9IGJ5dGVzLmxlbmd0aFxuICAgIGZvciAoaSA9IDA7IGkgPCBlbmQgLSBzdGFydDsgKytpKSB7XG4gICAgICB0aGlzW2kgKyBzdGFydF0gPSBieXRlc1tpICUgbGVuXVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzXG59XG5cbi8vIEhFTFBFUiBGVU5DVElPTlNcbi8vID09PT09PT09PT09PT09PT1cblxudmFyIElOVkFMSURfQkFTRTY0X1JFID0gL1teK1xcLzAtOUEtWmEtei1fXS9nXG5cbmZ1bmN0aW9uIGJhc2U2NGNsZWFuIChzdHIpIHtcbiAgLy8gTm9kZSBzdHJpcHMgb3V0IGludmFsaWQgY2hhcmFjdGVycyBsaWtlIFxcbiBhbmQgXFx0IGZyb20gdGhlIHN0cmluZywgYmFzZTY0LWpzIGRvZXMgbm90XG4gIHN0ciA9IHN0cmluZ3RyaW0oc3RyKS5yZXBsYWNlKElOVkFMSURfQkFTRTY0X1JFLCAnJylcbiAgLy8gTm9kZSBjb252ZXJ0cyBzdHJpbmdzIHdpdGggbGVuZ3RoIDwgMiB0byAnJ1xuICBpZiAoc3RyLmxlbmd0aCA8IDIpIHJldHVybiAnJ1xuICAvLyBOb2RlIGFsbG93cyBmb3Igbm9uLXBhZGRlZCBiYXNlNjQgc3RyaW5ncyAobWlzc2luZyB0cmFpbGluZyA9PT0pLCBiYXNlNjQtanMgZG9lcyBub3RcbiAgd2hpbGUgKHN0ci5sZW5ndGggJSA0ICE9PSAwKSB7XG4gICAgc3RyID0gc3RyICsgJz0nXG4gIH1cbiAgcmV0dXJuIHN0clxufVxuXG5mdW5jdGlvbiBzdHJpbmd0cmltIChzdHIpIHtcbiAgaWYgKHN0ci50cmltKSByZXR1cm4gc3RyLnRyaW0oKVxuICByZXR1cm4gc3RyLnJlcGxhY2UoL15cXHMrfFxccyskL2csICcnKVxufVxuXG5mdW5jdGlvbiB0b0hleCAobikge1xuICBpZiAobiA8IDE2KSByZXR1cm4gJzAnICsgbi50b1N0cmluZygxNilcbiAgcmV0dXJuIG4udG9TdHJpbmcoMTYpXG59XG5cbmZ1bmN0aW9uIHV0ZjhUb0J5dGVzIChzdHJpbmcsIHVuaXRzKSB7XG4gIHVuaXRzID0gdW5pdHMgfHwgSW5maW5pdHlcbiAgdmFyIGNvZGVQb2ludFxuICB2YXIgbGVuZ3RoID0gc3RyaW5nLmxlbmd0aFxuICB2YXIgbGVhZFN1cnJvZ2F0ZSA9IG51bGxcbiAgdmFyIGJ5dGVzID0gW11cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgKytpKSB7XG4gICAgY29kZVBvaW50ID0gc3RyaW5nLmNoYXJDb2RlQXQoaSlcblxuICAgIC8vIGlzIHN1cnJvZ2F0ZSBjb21wb25lbnRcbiAgICBpZiAoY29kZVBvaW50ID4gMHhEN0ZGICYmIGNvZGVQb2ludCA8IDB4RTAwMCkge1xuICAgICAgLy8gbGFzdCBjaGFyIHdhcyBhIGxlYWRcbiAgICAgIGlmICghbGVhZFN1cnJvZ2F0ZSkge1xuICAgICAgICAvLyBubyBsZWFkIHlldFxuICAgICAgICBpZiAoY29kZVBvaW50ID4gMHhEQkZGKSB7XG4gICAgICAgICAgLy8gdW5leHBlY3RlZCB0cmFpbFxuICAgICAgICAgIGlmICgodW5pdHMgLT0gMykgPiAtMSkgYnl0ZXMucHVzaCgweEVGLCAweEJGLCAweEJEKVxuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH0gZWxzZSBpZiAoaSArIDEgPT09IGxlbmd0aCkge1xuICAgICAgICAgIC8vIHVucGFpcmVkIGxlYWRcbiAgICAgICAgICBpZiAoKHVuaXRzIC09IDMpID4gLTEpIGJ5dGVzLnB1c2goMHhFRiwgMHhCRiwgMHhCRClcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gdmFsaWQgbGVhZFxuICAgICAgICBsZWFkU3Vycm9nYXRlID0gY29kZVBvaW50XG5cbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgLy8gMiBsZWFkcyBpbiBhIHJvd1xuICAgICAgaWYgKGNvZGVQb2ludCA8IDB4REMwMCkge1xuICAgICAgICBpZiAoKHVuaXRzIC09IDMpID4gLTEpIGJ5dGVzLnB1c2goMHhFRiwgMHhCRiwgMHhCRClcbiAgICAgICAgbGVhZFN1cnJvZ2F0ZSA9IGNvZGVQb2ludFxuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICAvLyB2YWxpZCBzdXJyb2dhdGUgcGFpclxuICAgICAgY29kZVBvaW50ID0gKGxlYWRTdXJyb2dhdGUgLSAweEQ4MDAgPDwgMTAgfCBjb2RlUG9pbnQgLSAweERDMDApICsgMHgxMDAwMFxuICAgIH0gZWxzZSBpZiAobGVhZFN1cnJvZ2F0ZSkge1xuICAgICAgLy8gdmFsaWQgYm1wIGNoYXIsIGJ1dCBsYXN0IGNoYXIgd2FzIGEgbGVhZFxuICAgICAgaWYgKCh1bml0cyAtPSAzKSA+IC0xKSBieXRlcy5wdXNoKDB4RUYsIDB4QkYsIDB4QkQpXG4gICAgfVxuXG4gICAgbGVhZFN1cnJvZ2F0ZSA9IG51bGxcblxuICAgIC8vIGVuY29kZSB1dGY4XG4gICAgaWYgKGNvZGVQb2ludCA8IDB4ODApIHtcbiAgICAgIGlmICgodW5pdHMgLT0gMSkgPCAwKSBicmVha1xuICAgICAgYnl0ZXMucHVzaChjb2RlUG9pbnQpXG4gICAgfSBlbHNlIGlmIChjb2RlUG9pbnQgPCAweDgwMCkge1xuICAgICAgaWYgKCh1bml0cyAtPSAyKSA8IDApIGJyZWFrXG4gICAgICBieXRlcy5wdXNoKFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHg2IHwgMHhDMCxcbiAgICAgICAgY29kZVBvaW50ICYgMHgzRiB8IDB4ODBcbiAgICAgIClcbiAgICB9IGVsc2UgaWYgKGNvZGVQb2ludCA8IDB4MTAwMDApIHtcbiAgICAgIGlmICgodW5pdHMgLT0gMykgPCAwKSBicmVha1xuICAgICAgYnl0ZXMucHVzaChcbiAgICAgICAgY29kZVBvaW50ID4+IDB4QyB8IDB4RTAsXG4gICAgICAgIGNvZGVQb2ludCA+PiAweDYgJiAweDNGIHwgMHg4MCxcbiAgICAgICAgY29kZVBvaW50ICYgMHgzRiB8IDB4ODBcbiAgICAgIClcbiAgICB9IGVsc2UgaWYgKGNvZGVQb2ludCA8IDB4MTEwMDAwKSB7XG4gICAgICBpZiAoKHVuaXRzIC09IDQpIDwgMCkgYnJlYWtcbiAgICAgIGJ5dGVzLnB1c2goXG4gICAgICAgIGNvZGVQb2ludCA+PiAweDEyIHwgMHhGMCxcbiAgICAgICAgY29kZVBvaW50ID4+IDB4QyAmIDB4M0YgfCAweDgwLFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHg2ICYgMHgzRiB8IDB4ODAsXG4gICAgICAgIGNvZGVQb2ludCAmIDB4M0YgfCAweDgwXG4gICAgICApXG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBjb2RlIHBvaW50JylcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYnl0ZXNcbn1cblxuZnVuY3Rpb24gYXNjaWlUb0J5dGVzIChzdHIpIHtcbiAgdmFyIGJ5dGVBcnJheSA9IFtdXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgKytpKSB7XG4gICAgLy8gTm9kZSdzIGNvZGUgc2VlbXMgdG8gYmUgZG9pbmcgdGhpcyBhbmQgbm90ICYgMHg3Ri4uXG4gICAgYnl0ZUFycmF5LnB1c2goc3RyLmNoYXJDb2RlQXQoaSkgJiAweEZGKVxuICB9XG4gIHJldHVybiBieXRlQXJyYXlcbn1cblxuZnVuY3Rpb24gdXRmMTZsZVRvQnl0ZXMgKHN0ciwgdW5pdHMpIHtcbiAgdmFyIGMsIGhpLCBsb1xuICB2YXIgYnl0ZUFycmF5ID0gW11cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyArK2kpIHtcbiAgICBpZiAoKHVuaXRzIC09IDIpIDwgMCkgYnJlYWtcblxuICAgIGMgPSBzdHIuY2hhckNvZGVBdChpKVxuICAgIGhpID0gYyA+PiA4XG4gICAgbG8gPSBjICUgMjU2XG4gICAgYnl0ZUFycmF5LnB1c2gobG8pXG4gICAgYnl0ZUFycmF5LnB1c2goaGkpXG4gIH1cblxuICByZXR1cm4gYnl0ZUFycmF5XG59XG5cbmZ1bmN0aW9uIGJhc2U2NFRvQnl0ZXMgKHN0cikge1xuICByZXR1cm4gYmFzZTY0LnRvQnl0ZUFycmF5KGJhc2U2NGNsZWFuKHN0cikpXG59XG5cbmZ1bmN0aW9uIGJsaXRCdWZmZXIgKHNyYywgZHN0LCBvZmZzZXQsIGxlbmd0aCkge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgKytpKSB7XG4gICAgaWYgKChpICsgb2Zmc2V0ID49IGRzdC5sZW5ndGgpIHx8IChpID49IHNyYy5sZW5ndGgpKSBicmVha1xuICAgIGRzdFtpICsgb2Zmc2V0XSA9IHNyY1tpXVxuICB9XG4gIHJldHVybiBpXG59XG5cbmZ1bmN0aW9uIGlzbmFuICh2YWwpIHtcbiAgcmV0dXJuIHZhbCAhPT0gdmFsIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2VsZi1jb21wYXJlXG59XG4iLCJ2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIChhcnIpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoYXJyKSA9PSAnW29iamVjdCBBcnJheV0nO1xufTtcbiIsImV4cG9ydHMucmVhZCA9IGZ1bmN0aW9uIChidWZmZXIsIG9mZnNldCwgaXNMRSwgbUxlbiwgbkJ5dGVzKSB7XG4gIHZhciBlLCBtXG4gIHZhciBlTGVuID0gKG5CeXRlcyAqIDgpIC0gbUxlbiAtIDFcbiAgdmFyIGVNYXggPSAoMSA8PCBlTGVuKSAtIDFcbiAgdmFyIGVCaWFzID0gZU1heCA+PiAxXG4gIHZhciBuQml0cyA9IC03XG4gIHZhciBpID0gaXNMRSA/IChuQnl0ZXMgLSAxKSA6IDBcbiAgdmFyIGQgPSBpc0xFID8gLTEgOiAxXG4gIHZhciBzID0gYnVmZmVyW29mZnNldCArIGldXG5cbiAgaSArPSBkXG5cbiAgZSA9IHMgJiAoKDEgPDwgKC1uQml0cykpIC0gMSlcbiAgcyA+Pj0gKC1uQml0cylcbiAgbkJpdHMgKz0gZUxlblxuICBmb3IgKDsgbkJpdHMgPiAwOyBlID0gKGUgKiAyNTYpICsgYnVmZmVyW29mZnNldCArIGldLCBpICs9IGQsIG5CaXRzIC09IDgpIHt9XG5cbiAgbSA9IGUgJiAoKDEgPDwgKC1uQml0cykpIC0gMSlcbiAgZSA+Pj0gKC1uQml0cylcbiAgbkJpdHMgKz0gbUxlblxuICBmb3IgKDsgbkJpdHMgPiAwOyBtID0gKG0gKiAyNTYpICsgYnVmZmVyW29mZnNldCArIGldLCBpICs9IGQsIG5CaXRzIC09IDgpIHt9XG5cbiAgaWYgKGUgPT09IDApIHtcbiAgICBlID0gMSAtIGVCaWFzXG4gIH0gZWxzZSBpZiAoZSA9PT0gZU1heCkge1xuICAgIHJldHVybiBtID8gTmFOIDogKChzID8gLTEgOiAxKSAqIEluZmluaXR5KVxuICB9IGVsc2Uge1xuICAgIG0gPSBtICsgTWF0aC5wb3coMiwgbUxlbilcbiAgICBlID0gZSAtIGVCaWFzXG4gIH1cbiAgcmV0dXJuIChzID8gLTEgOiAxKSAqIG0gKiBNYXRoLnBvdygyLCBlIC0gbUxlbilcbn1cblxuZXhwb3J0cy53cml0ZSA9IGZ1bmN0aW9uIChidWZmZXIsIHZhbHVlLCBvZmZzZXQsIGlzTEUsIG1MZW4sIG5CeXRlcykge1xuICB2YXIgZSwgbSwgY1xuICB2YXIgZUxlbiA9IChuQnl0ZXMgKiA4KSAtIG1MZW4gLSAxXG4gIHZhciBlTWF4ID0gKDEgPDwgZUxlbikgLSAxXG4gIHZhciBlQmlhcyA9IGVNYXggPj4gMVxuICB2YXIgcnQgPSAobUxlbiA9PT0gMjMgPyBNYXRoLnBvdygyLCAtMjQpIC0gTWF0aC5wb3coMiwgLTc3KSA6IDApXG4gIHZhciBpID0gaXNMRSA/IDAgOiAobkJ5dGVzIC0gMSlcbiAgdmFyIGQgPSBpc0xFID8gMSA6IC0xXG4gIHZhciBzID0gdmFsdWUgPCAwIHx8ICh2YWx1ZSA9PT0gMCAmJiAxIC8gdmFsdWUgPCAwKSA/IDEgOiAwXG5cbiAgdmFsdWUgPSBNYXRoLmFicyh2YWx1ZSlcblxuICBpZiAoaXNOYU4odmFsdWUpIHx8IHZhbHVlID09PSBJbmZpbml0eSkge1xuICAgIG0gPSBpc05hTih2YWx1ZSkgPyAxIDogMFxuICAgIGUgPSBlTWF4XG4gIH0gZWxzZSB7XG4gICAgZSA9IE1hdGguZmxvb3IoTWF0aC5sb2codmFsdWUpIC8gTWF0aC5MTjIpXG4gICAgaWYgKHZhbHVlICogKGMgPSBNYXRoLnBvdygyLCAtZSkpIDwgMSkge1xuICAgICAgZS0tXG4gICAgICBjICo9IDJcbiAgICB9XG4gICAgaWYgKGUgKyBlQmlhcyA+PSAxKSB7XG4gICAgICB2YWx1ZSArPSBydCAvIGNcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsdWUgKz0gcnQgKiBNYXRoLnBvdygyLCAxIC0gZUJpYXMpXG4gICAgfVxuICAgIGlmICh2YWx1ZSAqIGMgPj0gMikge1xuICAgICAgZSsrXG4gICAgICBjIC89IDJcbiAgICB9XG5cbiAgICBpZiAoZSArIGVCaWFzID49IGVNYXgpIHtcbiAgICAgIG0gPSAwXG4gICAgICBlID0gZU1heFxuICAgIH0gZWxzZSBpZiAoZSArIGVCaWFzID49IDEpIHtcbiAgICAgIG0gPSAoKHZhbHVlICogYykgLSAxKSAqIE1hdGgucG93KDIsIG1MZW4pXG4gICAgICBlID0gZSArIGVCaWFzXG4gICAgfSBlbHNlIHtcbiAgICAgIG0gPSB2YWx1ZSAqIE1hdGgucG93KDIsIGVCaWFzIC0gMSkgKiBNYXRoLnBvdygyLCBtTGVuKVxuICAgICAgZSA9IDBcbiAgICB9XG4gIH1cblxuICBmb3IgKDsgbUxlbiA+PSA4OyBidWZmZXJbb2Zmc2V0ICsgaV0gPSBtICYgMHhmZiwgaSArPSBkLCBtIC89IDI1NiwgbUxlbiAtPSA4KSB7fVxuXG4gIGUgPSAoZSA8PCBtTGVuKSB8IG1cbiAgZUxlbiArPSBtTGVuXG4gIGZvciAoOyBlTGVuID4gMDsgYnVmZmVyW29mZnNldCArIGldID0gZSAmIDB4ZmYsIGkgKz0gZCwgZSAvPSAyNTYsIGVMZW4gLT0gOCkge31cblxuICBidWZmZXJbb2Zmc2V0ICsgaSAtIGRdIHw9IHMgKiAxMjhcbn1cbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsIi8vb3JpZ2luIGNvZGU6IGh0dHBzOi8vZ2l0aHViLmNvbS9qanN0aWZmL3BuZy1zY2FsZS9ibG9iL21hc3Rlci9hbGdvcy9ib3gtc2NhbGluZy5qc1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oYnVmZmVyLCBvcmlnaW5TaXplLCBuZXdTaXplKVxueyBcbiAgbGV0IHNYID0gMDtcbiAgbGV0IHNZID0gMDtcbiAgbGV0IFtzVywgc0hdID0gb3JpZ2luU2l6ZTtcbiAgbGV0IGRYID0gMDtcbiAgbGV0IGRZID0gMDtcbiAgbGV0IFtkVywgZEhdID0gbmV3U2l6ZTtcbiAgbGV0IHRhcmdldEJ1ZmZlciA9IEJ1ZmZlci5hbGxvYyhkVypkSCo0KTtcbiAgXG4gIHZhciBjb3B5ID0gZnVuY3Rpb24oeXMseWQseHMseGQsY291bnQpIHtcbiAgICBidWZmZXIuY29weSh0YXJnZXRCdWZmZXIsXG4gICAgICAoKGRZICsgeWQpICogZFcgKyBkWCArIHhkKSA8PCAyLFxuICAgICAgKChzWSArIHlzKSAqIHNXICsgc1ggKyB4cykgPDwgMixcbiAgICAgICgoc1kgKyB5cykgKiBzSCArIHNYICsgeHMgKyBjb3VudCkgPDwgMlxuICAgICk7XG4gIH07XG4gIFxuICB2YXIgeV9zaHJpbmsgPSBmdW5jdGlvbih4X2Z1bikge1xuICAgIHZhciB5XyA9IFtdO1xuICAgIGZvciAodmFyIHlzID0gMDsgeXMgPCBzSDsgeXMrKykge1xuICAgICAgdmFyIHlkID0gTWF0aC5mbG9vcih5cypkSC9zSCk7XG4gICAgICBpZih5X1t5ZF0pIGNvbnRpbnVlO1xuICAgICAgeV9beWRdID0gdHJ1ZTtcbiAgICAgIHhfZnVuKHlzLHlkKTtcbiAgICB9XG4gIH07XG4gIFxuICB2YXIgeV9ncm93ID0gZnVuY3Rpb24oeF9mdW4pIHtcbiAgICBmb3IgKHZhciB5ZCA9IDA7IHlkIDwgZEg7IHlkKyspIHtcbiAgICAgIHZhciB5cyA9IE1hdGguZmxvb3IoeWQqc0gvZEgpO1xuICAgICAgeF9mdW4oeXMseWQpO1xuICAgIH1cbiAgfTtcbiAgXG4gIHZhciB4X3NocmluayA9IGZ1bmN0aW9uKHlzLHlkKSB7XG4gICAgdmFyIHhfID0gW107XG4gICAgZm9yKHZhciB4cyA9IDA7IHhzIDwgc1c7IHhzKysgKSB7XG4gICAgICB2YXIgeGQgPSBNYXRoLmZsb29yKHhzKmRXL3NXKTtcbiAgICAgIGlmKHhfW3hkXSkgY29udGludWU7XG4gICAgICB4X1t4ZF0gPSB0cnVlO1xuICAgICAgY29weSh5cyx5ZCx4cyx4ZCwxKTtcbiAgICB9XG4gIH07XG4gIFxuICB2YXIgeF9ncm93ID0gZnVuY3Rpb24oeXMseWQpIHtcbiAgICBmb3IodmFyIHhkID0gMDsgeGQgPCBkVzsgeGQrKyApIHtcbiAgICAgIHZhciB4cyA9IE1hdGguZmxvb3IoeGQqc1cvZFcpO1xuICAgICAgY29weSh5cyx5ZCx4cyx4ZCwxKTsgLy8gQ291bGQgYmUgZmFzdGVyIGJ5IGRvaW5nIG1vcmUgdGhhbiAxIHdoZW4gbmVlZGVkLlxuICAgIH1cbiAgfTtcbiAgXG4gIGlmKHNIID49IGRIICYmIHNXID49IGRXKSB7IHlfc2hyaW5rKHhfc2hyaW5rKTsgfVxuICBlbHNlIGlmKHNIID49IGRIKSB7IHlfc2hyaW5rKHhfZ3Jvdyk7IH1cbiAgZWxzZSBpZihzVyA+PSBkVykgeyB5X2dyb3coeF9zaHJpbmspOyB9XG4gIGVsc2UgeyB5X2dyb3coeF9ncm93KTsgfVxuICByZXR1cm4gdGFyZ2V0QnVmZmVyO1xufVxuIiwiY29uc3QgQ29sb3JUcmFuc2Zvcm1pbmdNaXhpbnMgPSAoUHJlcHJvY2Vzc2luZ0NsYXNzKSA9PiBjbGFzcyBleHRlbmRzIFByZXByb2Nlc3NpbmdDbGFzc3tcbiAgICBcbiAgICBjb2xvclRyYW5zZm9ybSh0cmFuZm9ybUZuLCBzYW1wbGVCdWZmZXIsIGNoYW5uZWxTaXplKXtcbiAgICAgICAgY29uc3QgUiA9IHRoaXMuUjtcbiAgICAgICAgcmV0dXJuIFIuZmxhdHRlbihSLm1hcCh0cmFuZm9ybUZuLCBSLnNwbGl0RXZlcnkoY2hhbm5lbFNpemUsIHNhbXBsZUJ1ZmZlcikpKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVHJhbnNmb3JtIGNvbG9yIGltYWdlIHRvIGJsYWNrIG9uIHdoaXRlIGltYWdlLiBUaGlzIGZ1bmN0aW9uIGFsc28gcmVkdWNlIGNoYW5lbCB0byAxLlxuICAgICAqIEBwYXJhbSB7IEFycmF5fEJ1ZmZlciB9IHNhbXBsZUJ1ZmZlclxuICAgICAqIEBwYXJhbSB7IE51bWJlciB9IGNoYW5uZWxTaXplXG4gICAgICogQHJldHVybiB7IEFycmF5IH0gaW1hZ2UgZGF0YSBhZnRlciB0cmFuc2Zvcm1cbiAgICAgKi9cbiAgICBibGFja1doaXRlVHJhbnNmb3JtKHNhbXBsZUJ1ZmZlcil7XG4gICAgICAgIGNvbnN0IEJsYWNrV2hpdGVGbiA9IChwaXhlbCk9PntcbiAgICAgICAgICAgIGxldCBwaXhlbFZhbHVlID0gKHBpeGVsWzBdICsgcGl4ZWxbMV0gK3BpeGVsWzJdKS8zO1xuICAgICAgICAgICAgcmV0dXJuIH5+cGl4ZWxWYWx1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sb3JUcmFuc2Zvcm0oQmxhY2tXaGl0ZUZuLCBzYW1wbGVCdWZmZXIsIDQpO1xuICAgIH1cblxuICAgIG9uZUJpdFRyYW5zZm9ybShzYW1wbGVCdWZmZXIpe1xuICAgICAgICBjb25zdCBCbGFja1doaXRlRm4gPSAocGl4ZWwpPT57XG4gICAgICAgICAgICBsZXQgcGl4ZWxWYWx1ZSA9IChwaXhlbFswXSArIHBpeGVsWzFdICtwaXhlbFsyXSkvMztcbiAgICAgICAgICAgIHJldHVybiBwaXhlbFZhbHVlPjEyNz8xOjA7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiB0aGlzLmNvbG9yVHJhbnNmb3JtKEJsYWNrV2hpdGVGbiwgc2FtcGxlQnVmZmVyLCA0KTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb2xvclRyYW5zZm9ybWluZ01peGluczsiLCJpbXBvcnQgeyBkZWZhdWx0IGFzIEJveFNjYWxpbmcgfSBmcm9tICcuL2JveFNjYWxpbmcnO1xuY29uc3QgSW1hZ2VTY2FsaW5nTWl4aW5zID0gKFByZXByb2Nlc3NpbmdDbGFzcykgPT4gY2xhc3MgZXh0ZW5kcyBQcmVwcm9jZXNzaW5nQ2xhc3N7XG4gICAgLyoqXG4gICAgICogc2NhbGluZyBpbWFnZSBmcm9tIG9yaWdpbiBzaXplIHRvIG5ldyBzaXplLCBpbWFnZSBjaGFuZWwgbXVzdCBiZSA0XG4gICAgICogQHBhcmFtIHsgQXJyYXl8QnVmZmVyIH0gc2FtcGxlQnVmZmVyIC0gb3JpZ2luYWwgaW1hZ2VcbiAgICAgKiBAcGFyYW0geyBBcnJheSB9IG9yaWdpblNpemUgLSBvcmlnaW5pemUgb2YgaW1hZ2UgW3dlaWdodCwgaGVpZ2h0XVxuICAgICAqIEBwYXJhbSB7IEFycmF5IH0gbmV3U2l6ZSAtIG5ldyBzaXplIG9mIGltYWdlIFt3ZWlnaHQsIGhlaWdodF1cbiAgICAgKiBAcmV0dXJucyB7IEFycmF5IH0gLSBhcnJheSBvZiBzdWIgaW1hZ2VcbiAgICAgKi9cbiAgICBpbWFnZVJlc2l6ZShzYW1wbGVCdWZmZXIsIG9yaWdpblNpemUsIG5ld1NpemUpe1xuICAgICAgICBzYW1wbGVCdWZmZXIgPSBCdWZmZXIuZnJvbShzYW1wbGVCdWZmZXIpO1xuICAgICAgICByZXR1cm4gQm94U2NhbGluZyhzYW1wbGVCdWZmZXIsIG9yaWdpblNpemUsIG5ld1NpemUpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEltYWdlU2NhbGluZ01peGluczsiLCJjb25zdCBJbWFnZVNwbGl0dGluZ01peGlucyA9IChQcmVwcm9jZXNzaW5nQ2xhc3MpID0+IGNsYXNzIGV4dGVuZHMgUHJlcHJvY2Vzc2luZ0NsYXNze1xuICAgIC8qKlxuICAgICAqIFNwbGl0IGltYWdlIGludG8gc3ViIGltYWdlcyBiYXNlZCBvbiBzcGxpdCBzaXplXG4gICAgICogQHBhcmFtIHsgQXJyYXl8QnVmZmVyIH0gc2FtcGxlQnVmZmVyIC0gb3JpZ2luYWwgaW1hZ2VcbiAgICAgKiBAcGFyYW0geyBOdW1iZXIgfSBzcGxpdFNpemUgLSBwb3NpdGl2ZSBudW1iZXJcbiAgICAgKiBAcmV0dXJucyB7IEFycmF5IH0gLSBhcnJheSBvZiBzdWIgaW1hZ2VcbiAgICAgKi9cbiAgICBpbWFnZVNwbGl0KHNhbXBsZUJ1ZmZlciwgc3BsaXRTaXplKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuUi5zcGxpdEV2ZXJ5KHNwbGl0U2l6ZSwgc2FtcGxlQnVmZmVyKTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbWFnZVNwbGl0dGluZ01peGluczsiLCJleHBvcnQge2RlZmF1bHQgYXMgQ29sb3JUcmFuc2Zvcm1pbmdNaXhpbnMgfSBmcm9tICcuL2NvbG9yVHJhbnNmb3JtaW5nLm1peGlucyc7XG5leHBvcnQge2RlZmF1bHQgYXMgSW1hZ2VTcGxpdHRpbmdNaXhpbnMgfSBmcm9tICcuL2ltYWdlU3BsaXR0aW5nLm1peGlucyc7XG5leHBvcnQge2RlZmF1bHQgYXMgSW1hZ2VTY2FsaW5nTWl4aW5zIH0gZnJvbSAnLi9pbWFnZVNjYWxpbmcubWl4aW5zJzsiLCJleHBvcnQge2RlZmF1bHQgYXMgVG9rZW5UcmFuc2Zvcm1pbmdNaXhpbnMgfSBmcm9tICcuL3Rva2VuVHJhbnNmb3JtaW5nLm1peGlucyc7IiwiY29uc3QgVG9rZW5UcmFuc2Zvcm1pbmdNaXhpbnMgPSAoUHJlcHJvY2Vzc2luZ0NsYXNzKSA9PiBjbGFzcyBleHRlbmRzIFByZXByb2Nlc3NpbmdDbGFzc3tcbiAgICAvKipcbiAgICAgKiB0b2tlbml6ZWQgc2VudGVuY2VcbiAgICAgKiBAcGFyYW0geyBTdHJpbmcgfSBzZW50ZW5jZSAtIGFycmF5IG9mIHN0cmluZyBzZW50ZW5jZVxuICAgICAqIEByZXR1cm5zIHsgQXJyYXkgfSBhcnJheSBvZiB0b2tlbml6ZWQgc2VudGVuY2VzXG4gICAgICovXG4gICAgdG9rZW5pemUoc2VudGVuY2Upe1xuICAgICAgICBjb25zdCBSID0gdGhpcy5SLCBUb2tlbml6ZXIgPSB0aGlzLnRva2VuaXplcjtcbiAgICAgICAgcmV0dXJuIFRva2VuaXplci50b2tlbml6ZShzZW50ZW5jZSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBiYWQgd29yZHMgZnJvbSB0b2tlbnNcbiAgICAgKiBAcGFyYW0geyBBcnJheSB9IHRva2VucyAtIGFycmF5IG9mIHN0cmluZyB0b2tlblxuICAgICAqIEBwYXJhbSB7IEFycmF5IH0gYmFkV29yZExpc3QgLSBBcnJheSBvZiBiYWQgd29yZHNcbiAgICAgKiBAcmV0dXJucyB7IEFycmF5IH0gdG9rZW5zIHdpdGhvdXQgYmFkIHdvcmRzXG4gICAgICovXG4gICAgYmFkV29yZHNGaWx0ZXIodG9rZW5zLCBiYWRXb3JkTGlzdCl7XG4gICAgICAgIGNvbnN0IFIgPSB0aGlzLlI7XG4gICAgICAgIHJldHVybiBSLmZpbHRlcigodG9rZW4pPT5SLm5vdChSLmZpbmQoUi5lcXVhbHModG9rZW4pKShiYWRXb3JkTGlzdCkpLCB0b2tlbnMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDb3VudCBudW1iZXIgb2YgYXBwZXJhbmNlIG9mIGVhY2ggdG9rZW4gaW4gdGhlIHRva2VuIGxpc3RcbiAgICAgKiBAcGFyYW0geyBBcnJheSB9IHRva2VucyAtIGFycmF5IG9mIHN0cmluZyB0b2tlbnNcbiAgICAgKiBAcGFyYW0geyBPYmplY3QgfSBbZnJlcUNvdW50PXt9XSAtIG9iamVjIG9yIHByZXZpb3VzIHdvcmRGcmVxQ291bnQsIGVtcHR5IG9iamVjdCBpZiBub3QgcHJvdmlkZWRcbiAgICAgKiBAcmV0dXJucyB7IE9iamVjdCB9IC0ganNvbiBvYmplY3Qgd2l0aCB0b2tlbiBhcyBrZXkgYW5kIGNvdW50aW5nIG51bWJlciBhcyBjb3JyZXNwb25kaW5nIHZhbHVlXG4gICAgICovXG4gICAgd29yZEZyZXFDb3VudCh0b2tlbnMsIGZyZXFDb3VudD17fSl7XG4gICAgICAgIGNvbnN0IFIgPSB0aGlzLlI7XG4gICAgICAgIGNvbnN0IFVwZGF0ZUZyZXEgPSAoZnJlcUNvdW50LCB0b2tlbik9PntcbiAgICAgICAgICAgIGlmKGZyZXFDb3VudFt0b2tlbl0gPT09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICAgICAgZnJlcUNvdW50W3Rva2VuXSA9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIGZyZXFDb3VudFt0b2tlbl0gKz0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmcmVxQ291bnQ7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBSLnJlZHVjZShVcGRhdGVGcmVxLCBmcmVxQ291bnQsIHRva2Vucyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBkdXBsaWNhdGVkIHRva2Vuc1xuICAgICAqIEBwYXJhbSB7IEFycmF5IH0gdG9rZW5zIC0gYXJyYXkgb2Ygc3RyaW5nIHRva2VuXG4gICAgICogQHJldHVybnNcbiAgICAgKi9cbiAgICB3b3JkRHVwbGljYXRlUmVtb3ZlKHRva2Vucyl7XG4gICAgICAgIGNvbnN0IFIgPSB0aGlzLlI7XG4gICAgICAgIHJldHVybiBSLnVuaXEodG9rZW5zKTtcbiAgICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgVG9rZW5UcmFuc2Zvcm1pbmdNaXhpbnM7IiwiLyoqXG4gKiBAZXhwZXJpbWVudFxuICovXG5jb25zdCBDYXRlZ29yeU5vcm1hbGl6aW5nTWl4aW5zID0gKFByZXByb2Nlc3NpbmdDbGFzcykgPT4gY2xhc3MgZXh0ZW5kcyBQcmVwcm9jZXNzaW5nQ2xhc3N7XG4gICAgb25lSG90RW5jb2RlKHNhbXBsZSwgY2F0ZWdvcmllcyl7XG4gICAgICAgIGNvbnN0IFIgPSB0aGlzLlI7XG4gICAgICAgIGxldCBjb2RlID0gdGhpcy56ZXJvcyhjYXRlZ29yaWVzLmxlbmd0aCk7XG4gICAgICAgIGNvbnN0IGlkeCA9IFIuaW5kZXhPZihzYW1wbGUsIGNhdGVnb3JpZXMpO1xuICAgICAgICBpZihpZHg+LTEpe1xuICAgICAgICAgICAgY29kZVtpZHhdID0gMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29kZTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXRlZ29yeU5vcm1hbGl6aW5nTWl4aW5zOyIsImV4cG9ydCB7IGRlZmF1bHQgYXMgQ2F0ZWdvcnlOb3JtYWxpemluZ01peGlucyB9IGZyb20gJy4vY2F0ZWdvcnlOb3JtYWxpemluZy5taXhpbnMnOyAiLCJleHBvcnQgeyBkZWZhdWx0IGFzIHRva2VuaXplciB9IGZyb20gJy4vdG9rZW5pemVyJztcbmltcG9ydCB7IGRlZmF1bHQgYXMgU2VudGVuY2VQaWVjZU1vZGVsIH0gZnJvbSAnLi9zZW50ZW5jZVBpZWNlJzsiLCIvKipcbiAqIFRoaXMgY29kZSBvcmlnaW4gZnJvbSBcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS90ZW5zb3JmbG93L3RmanMtbW9kZWxzL3RyZWUvbWFzdGVyL3VuaXZlcnNhbC1zZW50ZW5jZS1lbmNvZGVyXG4gKiBcbiAqIFRva2VuaXplci5lbmNvZGUoKSBpcyBhIHBvcnQgb2YgYEVuY29kZUFzSWRzYCBmcm9tIHRoZSBTZW50ZW5jZVBpZWNlIGxpYnJhcnlcbiAqIChodHRwczovL2dpdGh1Yi5jb20vZ29vZ2xlL3NlbnRlbmNlcGllY2UpLiBFbmNvZGUgdXNlcyB0aGUgVml0ZXJiaSBhbGdvcml0aG1cbiAqIHRvIGZpbmQgdGhlIG1vc3QgbGlrZWx5IHNlcXVlbmNlIG9mIHRva2VucyB0aGF0IGNvbXByaXNlIHRoZSBpbnB1dC4gRm9yIG1vcmVcbiAqIGRldGFpbHMsIHJlZmVyIHRvIGh0dHBzOi8vYXJ4aXYub3JnL3BkZi8xODA0LjEwOTU5LnBkZi5cbiAqL1xuXG5pbXBvcnQgeyBkZWZhdWx0IGFzIHN0cmluZ1RvQ2hhcnMgfSBmcm9tICcuL3V0aWxzJztcblxuaW1wb3J0IHsgZGVmYXVsdCBhcyBUcmllIH0gZnJvbSAnLi90cmllJztcblxuY29uc3Qgc2VwYXJhdG9yID0gJ1xcdTI1ODEnOyAgLy8gVGhpcyBpcyB0aGUgdW5pY29kZSBjaGFyYWN0ZXIgJ2xvd2VyIG9uZSBlaWdodGggYmxvY2snLlxuXG5mdW5jdGlvbiBwcm9jZXNzSW5wdXQoc3RyKSB7XG4gIGNvbnN0IG5vcm1hbGl6ZWQgPSBzdHIubm9ybWFsaXplKCdORktDJyk7XG4gIHJldHVybiBzZXBhcmF0b3IgKyBub3JtYWxpemVkLnJlcGxhY2UoLyAvZywgc2VwYXJhdG9yKTtcbn1cblxuLy8gVGhlIGZpcnN0IHRva2VucyBhcmUgcmVzZXJ2ZWQgZm9yIHVuaywgY29udHJvbCBzeW1ib2xzLCBhbmQgdXNlci1kZWZpbmVkXG4vLyBzeW1ib2xzLlxuY29uc3QgUkVTRVJWRURfU1lNQk9MU19DT1VOVCA9IDY7XG5cbi8vIHR5cGUgVm9jYWJ1bGFyeSA9IEFycmF5PFtzdHJpbmcsIG51bWJlcl0+O1xuXG4vLyB0eXBlIFNjb3JlID0ge1xuLy8gICBrZXk6IHN0cmluZ1tdLFxuLy8gICBzY29yZTogbnVtYmVyLFxuLy8gICBpbmRleDogbnVtYmVyXG4vLyB9O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZW50ZW5jZVBpZWNlVG9rZW5pemVyIHtcblxuICBjb25zdHJ1Y3RvcihWb2NhYnVsYXJ5KSB7XG4gICAgdGhpcy52b2NhYnVsYXJ5ID0gVm9jYWJ1bGFyeTtcbiAgICB0aGlzLnRyaWUgPSBuZXcgVHJpZSgpO1xuXG4gICAgZm9yIChsZXQgaSA9IFJFU0VSVkVEX1NZTUJPTFNfQ09VTlQ7IGkgPCB0aGlzLnZvY2FidWxhcnkubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMudHJpZS5pbnNlcnQodGhpcy52b2NhYnVsYXJ5W2ldWzBdLCB0aGlzLnZvY2FidWxhcnlbaV1bMV0sIGkpO1xuICAgIH1cbiAgfVxuXG4gIGVuY29kZShpbnB1dCl7XG4gICAgY29uc3Qgbm9kZXMgPSBbXTtcbiAgICBjb25zdCB3b3JkcyA9IFtdO1xuICAgIGNvbnN0IGJlc3QgPSBbXTtcblxuICAgIGlucHV0ID0gcHJvY2Vzc0lucHV0KGlucHV0KTtcblxuICAgIGNvbnN0IHN5bWJvbHMgPSBzdHJpbmdUb0NoYXJzKGlucHV0KTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IHN5bWJvbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIG5vZGVzLnB1c2goe30pO1xuICAgICAgd29yZHMucHVzaCgwKTtcbiAgICAgIGJlc3QucHVzaCgwKTtcbiAgICB9XG5cbiAgICAvLyBDb25zdHJ1Y3QgdGhlIGxhdHRpY2UuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzeW1ib2xzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBtYXRjaGVzID0gdGhpcy50cmllLmNvbW1vblByZWZpeFNlYXJjaChzeW1ib2xzLnNsaWNlKGkpKTtcblxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBtYXRjaGVzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGNvbnN0IHBpZWNlID0gbWF0Y2hlc1tqXTtcbiAgICAgICAgY29uc3Qgb2JqID0ge2tleTogcGllY2VbMF0sIHNjb3JlOiBwaWVjZVsxXSwgaW5kZXg6IHBpZWNlWzJdfTtcblxuICAgICAgICBjb25zdCBlbmRQb3MgPSBwaWVjZVswXS5sZW5ndGg7XG4gICAgICAgIGlmIChub2Rlc1tpICsgZW5kUG9zXVtpXSA9PSBudWxsKSB7XG4gICAgICAgICAgbm9kZXNbaSArIGVuZFBvc11baV0gPSBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIG5vZGVzW2kgKyBlbmRQb3NdW2ldLnB1c2gob2JqKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGxldCBlbmRQb3MgPSAwOyBlbmRQb3MgPD0gc3ltYm9scy5sZW5ndGg7IGVuZFBvcysrKSB7XG4gICAgICBmb3IgKGNvbnN0IHN0YXJ0UG9zIGluIG5vZGVzW2VuZFBvc10pIHtcbiAgICAgICAgY29uc3QgYXJyID0gbm9kZXNbZW5kUG9zXVtzdGFydFBvc107XG5cbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBhcnIubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBjb25zdCB3b3JkID0gYXJyW2pdO1xuICAgICAgICAgIGNvbnN0IHNjb3JlID0gd29yZC5zY29yZSArIGJlc3RbZW5kUG9zIC0gd29yZC5rZXkubGVuZ3RoXTtcblxuICAgICAgICAgIGlmIChiZXN0W2VuZFBvc10gPT09IDAgfHwgc2NvcmUgPj0gYmVzdFtlbmRQb3NdKSB7XG4gICAgICAgICAgICBiZXN0W2VuZFBvc10gPSBzY29yZTtcbiAgICAgICAgICAgIHdvcmRzW2VuZFBvc10gPSBhcnJbal0uaW5kZXg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcmVzdWx0cyA9IFtdO1xuXG4gICAgLy8gQmFja3dhcmQgcGFzcy5cbiAgICBsZXQgaXRlciA9IHdvcmRzLmxlbmd0aCAtIDE7XG4gICAgd2hpbGUgKGl0ZXIgPiAwKSB7XG4gICAgICByZXN1bHRzLnB1c2god29yZHNbaXRlcl0pO1xuICAgICAgaXRlciAtPSB0aGlzLnZvY2FidWxhcnlbd29yZHNbaXRlcl1dWzBdLmxlbmd0aDtcbiAgICB9XG5cbiAgICAvLyBNZXJnZSBjb25zZWN1dGl2ZSB1bmtzLlxuICAgIGNvbnN0IG1lcmdlZCA9IFtdO1xuICAgIGxldCBpc1ByZXZpb3VzVW5rID0gZmFsc2U7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXN1bHRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBpZCA9IHJlc3VsdHNbaV07XG4gICAgICBpZiAoIShpc1ByZXZpb3VzVW5rICYmIGlkID09PSAwKSkge1xuICAgICAgICBtZXJnZWQucHVzaChpZCk7XG4gICAgICB9XG5cbiAgICAgIGlzUHJldmlvdXNVbmsgPSBpZCA9PT0gMDtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIG1lcmdlZC5yZXZlcnNlKCk7XG4gIH1cbn0iLCJpbXBvcnQgeyBkZWZhdWx0IGFzIFNlbnRlbmNlUGllY2VNb2RlbCB9IGZyb20gJy4vc2VudGVuY2VQaWVjZSc7XG5pbXBvcnQgeyBqc29uVXRpbHMgfSBmcm9tICdjYXVzYWwtbmV0LnV0aWxzJztcbi8qKlxuICogVGhpcyBUb2tlbml6ZXIgY2xhc3MgaXMgZm9yIHRva2VuaXplciBzZW50ZW5jZVxuICogQGV4cGVyaW1lbnRcbiAqIEBjbGFzcyBUb2tlbml6ZXJcbiAqIEBleGFtcGxlXG4gKiBbRVhBTVBMRSAuLi8uLi9ubHBQcmVwcm9jZXNzaW5nLmJhYmVsLmpzXVxuICovXG5jbGFzcyBUb2tlbml6ZXJ7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5tb2RlbCA9IG51bGw7XG4gICAgICAgIHRoaXMudm9jYWIgPSBbXTtcbiAgICB9XG4gICAgYXN5bmMgY29ubmVjdChsaW5rKXtcbiAgICAgICAgdGhpcy52b2NhYiA9IGF3YWl0IGpzb25VdGlscy5xdWVyeUpTT04obGluayk7XG4gICAgICAgIHRoaXMubW9kZWwgPSBuZXcgU2VudGVuY2VQaWVjZU1vZGVsKHRoaXMudm9jYWIpO1xuICAgIH1cbiAgICB0b2tlbml6ZSh0ZXh0LCBhc0VuY29kZT10cnVlKXtcbiAgICAgICAgbGV0IHdpZHMgPSAgdGhpcy5lbmNvZGUodGV4dCk7XG4gICAgICAgIGlmKGFzRW5jb2RlKXtcbiAgICAgICAgICAgIHJldHVybiB3aWRzO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICByZXR1cm4gd2lkcy5tYXAoaWQ9PnRoaXMudm9jYWJbaWRdWzBdKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbmNvZGUodGV4dCl7XG4gICAgICAgIGlmKCF0aGlzLm1vZGVsKXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKGBtb2RlbCBpcyBub3QgbG9hZGVkYCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMubW9kZWwuZW5jb2RlKHRleHQpO1xuICAgIH1cbn1cbnZhciB0b2tlbml6ZXIgPSBuZXcgVG9rZW5pemVyKCk7XG5leHBvcnQgZGVmYXVsdCB0b2tlbml6ZXI7IiwiaW1wb3J0IHtkZWZhdWx0IGFzIHN0cmluZ1RvQ2hhcnN9IGZyb20gJy4vdXRpbHMnO1xuLy8gW3Rva2VuLCBzY29yZSwgaW5kZXhdXG4vLyB0eXBlIE91dHB1dE5vZGUgPSBbc3RyaW5nW10sIG51bWJlciwgbnVtYmVyXTtcblxuY2xhc3MgVHJpZU5vZGUge1xuXG4gIGNvbnN0cnVjdG9yKGtleSkge1xuICAgIHRoaXMua2V5ID0ga2V5O1xuICAgIHRoaXMucGFyZW50ID0gbnVsbDtcbiAgICB0aGlzLmNoaWxkcmVuID0ge307XG4gICAgdGhpcy5lbmQgPSBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmF2ZXJzZSB1cHdhcmRzIHRocm91Z2ggdGhlIHRyaWUgdG8gY29uc3RydWN0IHRoZSB0b2tlbi5cbiAgICovXG4gIGdldFdvcmQoKSB7XG4gICAgY29uc3Qgb3V0cHV0ID0gW107XG4gICAgbGV0IG5vZGUgPSB0aGlzO1xuXG4gICAgd2hpbGUgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgIGlmIChub2RlLmtleSAhPT0gbnVsbCkge1xuICAgICAgICBvdXRwdXQudW5zaGlmdChub2RlLmtleSk7XG4gICAgICB9XG4gICAgICBub2RlID0gbm9kZS5wYXJlbnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIFtvdXRwdXQsIHRoaXMuc2NvcmUsIHRoaXMuaW5kZXhdO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyaWUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnJvb3QgPSBuZXcgVHJpZU5vZGUobnVsbCk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIHdoZXRoZXIgYSBub2RlIHN0YXJ0cyB3aXRoIHNzLlxuICAgKlxuICAgKiBAcGFyYW0gc3MgVGhlIHByZWZpeC5cbiAgICogQHBhcmFtIG5vZGUgVGhlIG5vZGUgY3VycmVudGx5IGJlaW5nIGNvbnNpZGVyZWQuXG4gICAqIEBwYXJhbSBhcnIgQW4gYXJyYXkgb2YgdGhlIG1hdGNoaW5nIHRva2VucyB1bmNvdmVyZWQgc28gZmFyLlxuICAgKi9cbiAgZmluZEFsbENvbW1vblByZWZpeGVzKHNzLCBub2RlLCBhcnIpIHtcbiAgICBpZiAobm9kZS5lbmQpIHtcbiAgICAgIGNvbnN0IHdvcmQgPSBub2RlLmdldFdvcmQoKTtcbiAgICAgIGlmIChzcy5zbGljZSgwLCB3b3JkWzBdLmxlbmd0aCkuam9pbignJykgPT09IHdvcmRbMF0uam9pbignJykpIHtcbiAgICAgICAgYXJyLnVuc2hpZnQod29yZCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBjaGlsZCBpbiBub2RlLmNoaWxkcmVuKSB7XG4gICAgICB0aGlzLmZpbmRBbGxDb21tb25QcmVmaXhlcyhzcywgbm9kZS5jaGlsZHJlbltjaGlsZF0sIGFycik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEluc2VydHMgYSB0b2tlbiBpbnRvIHRoZSB0cmllLlxuICAgKi9cbiAgaW5zZXJ0KHdvcmQsIHNjb3JlLCBpbmRleCkge1xuICAgIGxldCBub2RlID0gdGhpcy5yb290O1xuXG4gICAgY29uc3Qgc3ltYm9scyA9IHN0cmluZ1RvQ2hhcnMod29yZCk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN5bWJvbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICghbm9kZS5jaGlsZHJlbltzeW1ib2xzW2ldXSkge1xuICAgICAgICBub2RlLmNoaWxkcmVuW3N5bWJvbHNbaV1dID0gbmV3IFRyaWVOb2RlKHN5bWJvbHNbaV0pO1xuICAgICAgICBub2RlLmNoaWxkcmVuW3N5bWJvbHNbaV1dLnBhcmVudCA9IG5vZGU7XG4gICAgICB9XG5cbiAgICAgIG5vZGUgPSBub2RlLmNoaWxkcmVuW3N5bWJvbHNbaV1dO1xuXG4gICAgICBpZiAoaSA9PT0gc3ltYm9scy5sZW5ndGggLSAxKSB7XG4gICAgICAgIG5vZGUuZW5kID0gdHJ1ZTtcbiAgICAgICAgbm9kZS5zY29yZSA9IHNjb3JlO1xuICAgICAgICBub2RlLmluZGV4ID0gaW5kZXg7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gYXJyYXkgb2YgYWxsIHRva2VucyBzdGFydGluZyB3aXRoIHNzLlxuICAgKlxuICAgKiBAcGFyYW0gc3MgVGhlIHByZWZpeCB0byBtYXRjaCBvbi5cbiAgICovXG4gIGNvbW1vblByZWZpeFNlYXJjaChzcyl7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMucm9vdC5jaGlsZHJlbltzc1swXV07XG4gICAgY29uc3Qgb3V0cHV0ID0gW107XG4gICAgaWYgKG5vZGUpIHtcbiAgICAgIHRoaXMuZmluZEFsbENvbW1vblByZWZpeGVzKHNzLCBub2RlLCBvdXRwdXQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvdXRwdXQucHVzaChbW3NzWzBdXSwgMCwgMF0pOyAgLy8gdW5rbm93biB0b2tlblxuICAgIH1cbiAgICByZXR1cm4gb3V0cHV0O1xuICB9XG59XG4iLCJjb25zdCBzdHJpbmdUb0NoYXJzID0gKGlucHV0KSA9PiB7XG4gICAgY29uc3Qgc3ltYm9scyA9IFtdO1xuICAgIGZvciAoY29uc3Qgc3ltYm9sIG9mIGlucHV0KSB7XG4gICAgICBzeW1ib2xzLnB1c2goc3ltYm9sKTtcbiAgICB9XG4gICAgcmV0dXJuIHN5bWJvbHM7XG59O1xuZXhwb3J0IGRlZmF1bHQgc3RyaW5nVG9DaGFyczsiLCJpbXBvcnQgeyBFdmVudCwgRnVuY3RvciB9IGZyb20gJ2NhdXNhbC1uZXQuY29yZSc7XG5pbXBvcnQgeyBwbGF0Zm9ybSB9IGZyb20gJ2NhdXNhbC1uZXQudXRpbHMnO1xuaW1wb3J0IHsgaW5kZXhEQlN0b3JhZ2UsIFN0b3JhZ2VNaXhpbnMgfSBmcm9tICdjYXVzYWwtbmV0LnN0b3JhZ2UnO1xuaW1wb3J0IHsgdGVybUxvZ2dlciwgTG9nZ2VyTWl4aW5zIH0gZnJvbSAnY2F1c2FsLW5ldC5sb2cnO1xuY2xhc3MgQ2F1c2FsTmV0UHJlcHJvY2Vzc2luZ1N0cmVhbSBleHRlbmRzIHBsYXRmb3JtLm1peFdpdGgoRXZlbnQsIFxuICAgIFsgU3RvcmFnZU1peGlucywgTG9nZ2VyTWl4aW5zIF0pe1xuICAgIGNvbnN0cnVjdG9yKHByZXByb2Nlc3NpbmdTdG9yYWdlLCBmdW5jdG9yLCBsb2dnZXIpe1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLlN0b3JhZ2UgPSBwcmVwcm9jZXNzaW5nU3RvcmFnZTtcbiAgICAgICAgdGhpcy5GID0gZnVuY3RvcjtcbiAgICAgICAgdGhpcy5SID0gdGhpcy5GLkNvcmVGdW5jdG9yO1xuICAgICAgICB0aGlzLkxvZ2dlciA9IGxvZ2dlcjtcbiAgICAgICAgdGhpcy5wcmVwcm9jZXNzaW5nRGF0YSA9IHsgc2FtcGxlczogW10sIGxhYmVsczogW10sIGZpbmlzaGVkOiBmYWxzZSwgdHJhaW5TZXQ6IFtdLCB0ZXN0U2V0OiBbXSB9OyAgXG4gICAgfVxuICAgIGdldCBQcmVwcm9jZXNzaW5nRGF0YSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5wcmVwcm9jZXNzaW5nRGF0YTtcbiAgICB9XG5cbiAgICBnZXQgVHJhaW5TZXQoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJlcHJvY2Vzc2luZ0RhdGEudHJhaW5TZXQ7XG4gICAgfVxuXG4gICAgZ2V0IFRlc3RTZXQoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJlcHJvY2Vzc2luZ0RhdGEudGVzdFNldDtcbiAgICB9XG4gICAgXG4gICAgc2V0IFNhbXBsZVRyYW5zZm9ybWVyKHNhbXBsZUZuKXtcbiAgICAgICAgdGhpcy5zYW1wbGVGbiA9IHNhbXBsZUZuO1xuICAgIH1cbiAgICBzZXQgTGFiZWxUcmFuc2Zvcm1lcihsYWJlbEZuKXtcbiAgICAgICAgdGhpcy5sYWJlbEZuID0gbGFiZWxGbjtcbiAgICB9XG4gICAgZ2V0IFNhbXBsZVRyYW5zZm9ybWVyKCl7XG4gICAgICAgIGlmKCF0aGlzLnNhbXBsZUZuKXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdTYW1wbGVUcmFuc2Zvcm1lciBpcyBub3Qgc2V0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuc2FtcGxlRm47XG4gICAgfVxuICAgIGdldCBMYWJlbFRyYW5zZm9ybWVyKCl7XG4gICAgICAgIGlmKCF0aGlzLmxhYmVsRm4pe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ0xhYmVsVHJhbnNmb3JtZXIgaXMgbm90IHNldCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmxhYmVsRm47XG4gICAgfVxuICAgIGdldCBEYXRhSGFuZGxlcigpe1xuICAgICAgICBpZighdGhpcy5kYXRhSGFuZGxlcil7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignRGF0YUhhbmRsZXIgaXMgbm90IHNldCcpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGF0YUhhbmRsZXI7XG4gICAgfVxuXG4gICAgc2V0RGF0YUhhbmRsZXIoKXtcbiAgICAgICAgY29uc3QgU2FtcGxlVHJhbnNmb3JtZXIgPSB0aGlzLlNhbXBsZVRyYW5zZm9ybWVyO1xuICAgICAgICBjb25zdCBMYWJlbFRyYW5zZm9ybWVyID0gdGhpcy5MYWJlbFRyYW5zZm9ybWVyO1xuICAgICAgICBjb25zdCBTdG9yYWdlID0gdGhpcy5TdG9yYWdlO1xuICAgICAgICBjb25zdCBQcm9ncmVzc0xlbnNlcyA9ICh7aWR4LCByYW5nZSwgbWVzc2FnZX0pPT57IFxuICAgICAgICAgICAgaWYoaWR4ID09PSAwKXtcbiAgICAgICAgICAgICAgICB0aGlzLkxvZ2dlci5wcm9ncmVzc0JlZ2luKHJhbmdlKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihpZHggKyAxID09PSByYW5nZSl7XG4gICAgICAgICAgICAgICAgdGhpcy5Mb2dnZXIucHJvZ3Jlc3NFbmQoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLkxvZ2dlci5wcm9ncmVzc1VwZGF0ZShtZXNzYWdlKTtcbiAgICAgICAgfTtcbiAgICAgICAgICAgIFxuICAgICAgICB0aGlzLmRhdGFIYW5kbGVyID0gKGRhdGEpPT57XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgKHJlc29sdmUsIHJlamVjdCk9PntcbiAgICAgICAgICAgICAgICBsZXQgY2h1bmtOYW1lID0gZGF0YS5DaHVua05hbWU7XG4gICAgICAgICAgICAgICAgaWYoY2h1bmtOYW1lID09PSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoYGNodW5rTmFtZSBpcyBub3QgZGVmaW5lZGApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZihkYXRhLlNhbXBsZSl7XG4gICAgICAgICAgICAgICAgICAgIGxldCBpZGVudGl0eSA9ICcnO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBbaWR4LCBzYW1wbGVdIG9mIHRoaXMuRi5lbnVtZXJhdGUoZGF0YS5TYW1wbGUpKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIFByb2dyZXNzTGVuc2VzKHtpZHgsIHJhbmdlOiBkYXRhLlNhbXBsZS5sZW5ndGgsIG1lc3NhZ2U6ICdwcmVwcm9jZXNzaW5nIFNhbXBsZTogJyArIGlkeCB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNhbXBsZSA9IGF3YWl0IFNhbXBsZVRyYW5zZm9ybWVyKHNhbXBsZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZGVudGl0eSA9IGNodW5rTmFtZSArICcvJyArIGlkeDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IFN0b3JhZ2Uuc2V0SXRlbSgncHJlcHJvY2Vzc2luZy9zYW1wbGUvJyArIGlkZW50aXR5LCBKU09OLnN0cmluZ2lmeShzYW1wbGUpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJlcHJvY2Vzc2luZ0RhdGEuc2FtcGxlcy5wdXNoKGlkZW50aXR5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKGRhdGEuTGFiZWwpe1xuICAgICAgICAgICAgICAgICAgICBsZXQgaWRlbnRpdHkgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBbaWR4LCBsYWJlbF0gb2YgdGhpcy5GLmVudW1lcmF0ZShkYXRhLkxhYmVsKSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBQcm9ncmVzc0xlbnNlcyh7aWR4LCByYW5nZTogZGF0YS5MYWJlbC5sZW5ndGgsIG1lc3NhZ2U6ICdwcmVwcm9jZXNzaW5nIExhYmVsOiAnICsgaWR4IH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWwgPSBhd2FpdCBMYWJlbFRyYW5zZm9ybWVyKGxhYmVsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkZW50aXR5ID0gY2h1bmtOYW1lICsgJy8nICsgaWR4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgU3RvcmFnZS5zZXRJdGVtKCdwcmVwcm9jZXNzaW5nL2xhYmVsLycgKyBpZGVudGl0eSwgSlNPTi5zdHJpbmdpZnkobGFiZWwpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJlcHJvY2Vzc2luZ0RhdGEubGFiZWxzLnB1c2goaWRlbnRpdHkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgICB9KTsgXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMub24oJ2RhdGEnLCB0aGlzLmRhdGFIYW5kbGVyKTtcbiAgICB9XG4gICAgXG4gICAgc3BsaXREYXRhc2V0KHRyYWluU2l6ZT0wLjkpe1xuICAgICAgICBjb25zdCBSID0gdGhpcy5GLkNvcmVGdW5jdG9yO1xuICAgICAgICAvL1RPRE86IGVuaGFuY2UgdGhpcyBmb3IgaGFuZGxlIG1pc3NpbmcgZGF0YS9sYWJlbCBjYXNlXG4gICAgICAgIGxldCB7IHNhbXBsZXMsIGxhYmVscyB9ID0gdGhpcy5wcmVwcm9jZXNzaW5nRGF0YTtcbiAgICAgICAgbGV0IGRhdGEgPSB0aGlzLkYuemlwKHNhbXBsZXMsIGxhYmVscyk7XG4gICAgICAgIGlmKHRyYWluU2l6ZSA8IDEpe1xuICAgICAgICAgICAgdHJhaW5TaXplID0gcGFyc2VJbnQoZGF0YS5sZW5ndGgqdHJhaW5TaXplKTtcbiAgICAgICAgfSAgICBcbiAgICAgICAgY29uc3QgWyB0cmFpblNldCwgdGVzdFNldCBdID0gUi5zcGxpdEF0KHRyYWluU2l6ZSwgZGF0YSk7XG4gICAgICAgIHRoaXMucHJlcHJvY2Vzc2luZ0RhdGEudHJhaW5TZXQgPSB0cmFpblNldDtcbiAgICAgICAgdGhpcy5wcmVwcm9jZXNzaW5nRGF0YS50ZXN0U2V0ID0gdGVzdFNldDtcbiAgICAgICAgcmV0dXJuIFt0cmFpblNldCwgdGVzdFNldF07XG4gICAgfVxuICAgIG1ha2VCYXRjaEdlbmVyYXRvcihiYXRjaERhdGEpe1xuICAgICAgICBjb25zdCBTdG9yYWdlID0gdGhpcy5TdG9yYWdlO1xuICAgICAgICBsZXQgbmV4dEluZGV4ID0gMDtcbiAgICAgICAgY29uc3QgYmF0Y2hHZW5lcmF0b3IgPSB7XG4gICAgICAgICAgICAgICAgbmV4dDogYXN5bmMoKT0+e1xuICAgICAgICAgICAgICAgICAgICBsZXQgc2FtcGxlcyA9IFtdLCBsYWJlbHMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGZvcihsZXQgW3NhbXBsZVBhdGgsIGxhYmVsUGF0aF0gb2YgYmF0Y2hEYXRhW25leHRJbmRleF0pe1xuICAgICAgICAgICAgICAgICAgICAgICAgc2FtcGxlUGF0aCA9ICdwcmVwcm9jZXNzaW5nL3NhbXBsZS8nICsgc2FtcGxlUGF0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsUGF0aCA9ICdwcmVwcm9jZXNzaW5nL2xhYmVsLycgKyBsYWJlbFBhdGg7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2FtcGxlSXRlbSA9IGF3YWl0IFN0b3JhZ2UuZ2V0SXRlbShzYW1wbGVQYXRoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsYWJlbEl0ZW0gPSBhd2FpdCBTdG9yYWdlLmdldEl0ZW0obGFiZWxQYXRoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vVE9ETzogZml4IHRoaXMgaXNzdWUgb2YgdW5hbGlnbiBmb3JtYXQgb2YgaXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNhbXBsZSA9IEpTT04ucGFyc2Uoc2FtcGxlSXRlbVtzYW1wbGVQYXRoXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzYW1wbGUgPSAoc2FtcGxlLmRhdGEpP3NhbXBsZS5kYXRhOnNhbXBsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsYWJlbCA9IEpTT04ucGFyc2UobGFiZWxJdGVtW2xhYmVsUGF0aF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWwgPSAobGFiZWwuZGF0YSk/bGFiZWwuZGF0YTpsYWJlbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNhbXBsZXMucHVzaChzYW1wbGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxzLnB1c2gobGFiZWwpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG5leHRJbmRleCArPSAxO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgc2FtcGxlcywgbGFiZWxzIH07XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAqW1N5bWJvbC5pdGVyYXRvcl0oKSB7XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlKG5leHRJbmRleCA8IGJhdGNoRGF0YS5sZW5ndGgpe1xuICAgICAgICAgICAgICAgICAgICAgICAgeWllbGQgdGhpcy5uZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICByZXR1cm4gYmF0Y2hHZW5lcmF0b3I7XG4gICAgfVxuICAgIG1ha2VUcmFpbkRhdGFHZW5lcmF0b3IoKXtcbiAgICAgICAgY29uc3QgUiA9IHRoaXMuUjtcbiAgICAgICAgY29uc3QgVHJhaW5TZXQgPSB0aGlzLlRyYWluU2V0O1xuICAgICAgICByZXR1cm4gKGJhdGNoU2l6ZT1UcmFpblNldC5sZW5ndGgpPT57XG4gICAgICAgICAgICBsZXQgYmF0Y2hEYXRhID0gUi5zcGxpdEV2ZXJ5KGJhdGNoU2l6ZSwgVHJhaW5TZXQpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubWFrZUJhdGNoR2VuZXJhdG9yKGJhdGNoRGF0YSk7XG4gICAgICAgIH07XG4gICAgICAgIFxuICAgIH1cbiAgICBtYWtlVGVzdERhdGFHZW5lcmF0b3IoKXtcbiAgICAgICAgY29uc3QgUiA9IHRoaXMuUjtcbiAgICAgICAgY29uc3QgVGVzdFNldCA9IHRoaXMuVGVzdFNldDtcbiAgICAgICAgcmV0dXJuIChiYXRjaFNpemU9VGVzdFNldC5sZW5ndGgpPT57XG4gICAgICAgICAgICAvL1RPRE86IHBlcmZvcm0gcGVybXV0YXRlXG4gICAgICAgICAgICBsZXQgYmF0Y2hEYXRhID0gUi5zcGxpdEV2ZXJ5KGJhdGNoU2l6ZSwgVGVzdFNldCk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tYWtlQmF0Y2hHZW5lcmF0b3IoYmF0Y2hEYXRhKTtcbiAgICAgICAgfTtcbiAgICB9XG59XG52YXIgZnVuY3RvciA9IG5ldyBGdW5jdG9yKCk7XG5leHBvcnQgZGVmYXVsdCBuZXcgQ2F1c2FsTmV0UHJlcHJvY2Vzc2luZ1N0cmVhbShpbmRleERCU3RvcmFnZSwgZnVuY3RvciwgdGVybUxvZ2dlcik7IiwiaW1wb3J0IHsgRnVuY3RvciBhcyBCYXNlRnVuY3RvciB9IGZyb20gJ2NhdXNhbC1uZXQuY29yZSc7XG5pbXBvcnQgeyBwbGF0Zm9ybSB9IGZyb20gJ2NhdXNhbC1uZXQudXRpbHMnO1xuaW1wb3J0IHsgQ29sb3JUcmFuc2Zvcm1pbmdNaXhpbnMsIEltYWdlU3BsaXR0aW5nTWl4aW5zLCBJbWFnZVNjYWxpbmdNaXhpbnMgfSBmcm9tICcuL0ltYWdlL2luZGV4JztcblxuLyoqXG4gKiBUaGlzIEltYWdlUHJlcHJvY2Vzc2luZyBwcm92aWRlIG1ldGhvZHMgZm9yIHByZXByb2Nlc3NpbmcgaW1hZ2UgZGF0YVxuICogeyBNaXhXaXRoOiBbXG4gKiAgICAgICAgIENvbG9yVHJhbnNmb3JtaW5nTWl4aW5zLCBJbWFnZVNwbGl0dGluZ01peGluc1xuICogICAgIF0gfVxuICogQGNsYXNzIEltYWdlUHJlcHJvY2Vzc2luZ1xuICogQGV4dGVuZHMgQmFzZUZ1bmN0b3JcbiAqIEBleGFtcGxlXG4gKiBbRVhBTVBMRSAuLi9leGFtcGxlcy9pbWFnZVByZXByb2Nlc3NpbmcuYmFiZWwubm9kZS5qc11cbiAqL1xuY2xhc3MgSW1hZ2VQcmVwcm9jZXNzaW5nIGV4dGVuZHMgcGxhdGZvcm0ubWl4V2l0aChCYXNlRnVuY3RvciwgW1xuICAgICAgICBDb2xvclRyYW5zZm9ybWluZ01peGlucywgXG4gICAgICAgIEltYWdlU3BsaXR0aW5nTWl4aW5zLFxuICAgICAgICBJbWFnZVNjYWxpbmdNaXhpbnMgXSl7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBJbWFnZVByZXByb2Nlc3Npbmc7IiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBjYXVzYWxOZXRQcmVwcm9jZXNzaW5nU3RyZWFtIH0gZnJvbSAnLi9jYXVzYWxOZXRQcmVwcm9jZXNzaW5nU3RyZWFtJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUHJlcHJvY2Vzc2luZ01peGluc30gZnJvbSAnLi9wcmVwcm9jZXNzaW5nLm1peGlucyc7XG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgaW1hZ2VQcmVwcm9jZXNzaW5nIH0gZnJvbSAnLi9pbWFnZVByZXByb2Nlc3NpbmcnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBubHBQcmVwcm9jZXNzaW5nIH0gZnJvbSAnLi9ubHBQcmVwcm9jZXNzaW5nJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdGFidWxhclByZXByb2Nlc3NpbmcgfSBmcm9tICcuL3RhYnVsYXJQcmVwcm9jZXNzaW5nJztcblxuZXhwb3J0IHsgdG9rZW5pemVyIH0gZnJvbSAnLi9Ub2tlbml6ZXIvaW5kZXgnOyIsImltcG9ydCB7IEZ1bmN0b3IgYXMgQmFzZUZ1bmN0b3IgfSBmcm9tICdjYXVzYWwtbmV0LmNvcmUnO1xuaW1wb3J0IHsgcGxhdGZvcm0gfSBmcm9tICdjYXVzYWwtbmV0LnV0aWxzJztcbmltcG9ydCB7IFRva2VuVHJhbnNmb3JtaW5nTWl4aW5zIH0gZnJvbSAnLi9OTFAvaW5kZXgnO1xuLyoqXG4gKiBUaGlzIE5MUFByZXByb2Nlc3NpbmcgY2xhc3MgcHJvdmlkZSBtZXRob2RzIGZvciBwcmVwcm9jZXNzaW5nIHRleHQgYW5kIG91dHB1dCB2YWxpZCB0b2tlbnMuXG4gKiB7IE1peFdpdGg6XG4gKiAgICAgWyBUb2tlblRyYW5zZm9ybWluZ01peGlucyBdKSB9XG4gKiBAY2xhc3MgTkxQUHJlcHJvY2Vzc2luZ1xuICogQGV4dGVuZHMgQmFzZUZ1bmN0b3JcbiAqIEBleGFtcGxlXG4gKiBbIUVYQU1QTEUgLi4vZXhhbXBsZXMvbmxwUHJlcHJvY2Vzc2luZy5iYWJlbC5ub2RlLmpzXVxuICovXG5cbmNsYXNzIE5MUFByZXByb2Nlc3NpbmcgZXh0ZW5kcyBwbGF0Zm9ybS5taXhXaXRoKEJhc2VGdW5jdG9yLCBcbiAgICBbIFRva2VuVHJhbnNmb3JtaW5nTWl4aW5zIF0pe1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRoaXMgbWV0aG9kIGlzIHVzZWQgaW4gY2FzZSB0b2tlbml6ZXIgcmVxdWlyZXMgZGF0YSBzZXR1cC5cbiAgICAgKiBAcGFyYW0geyBVcmx8RmlsZVBhdGggfSBjb25maWdMaW5rXG4gICAgICogQG1lbWJlcm9mIE5MUFByZXByb2Nlc3NpbmdcbiAgICAgKi9cbiAgICBjb25uZWN0KGNvbmZpZ0xpbmspe1xuICAgICAgICB0aGlzLnRva2VuaXplci5jb25uZWN0KGNvbmZpZ0xpbmspO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgdG9rZW5pemVyXG4gICAgICpcbiAgICAgKiBAbWVtYmVyb2YgTkxQUHJlcHJvY2Vzc2luZ1xuICAgICAqL1xuICAgIGdldCBUb2tlbml6ZXIoKXtcbiAgICAgICAgaWYoIXRoaXMudG9rZW5pemVyKXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCd0b2tlbml6ZXIgaXMgbm90IHNldCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnRva2VuaXplcjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0IHRva2VuaXplclxuICAgICAqIEBwYXJhbSB7IE9iamVjdCB9IHRva2VuaXplciAtIHRva2VuaXplciBvYmplY3RcbiAgICAgKiBAbWVtYmVyb2YgTkxQUHJlcHJvY2Vzc2luZ1xuICAgICAqL1xuICAgIHNldCBUb2tlbml6ZXIodG9rZW5pemVyKXtcbiAgICAgICAgdGhpcy50b2tlbml6ZXIgPSB0b2tlbml6ZXI7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgTkxQUHJlcHJvY2Vzc2luZzsiLCJjb25zdCBQcmVwcm9jZXNzaW5nTWl4aW5zID0gKEJhc2VQaXBlbGluZUNsYXNzKSA9PiBjbGFzcyBleHRlbmRzIEJhc2VQaXBlbGluZUNsYXNze1xuICAgIGdldCBQcmVwcm9jZXNzaW5nKCl7XG4gICAgICAgIGlmKCAhdGhpcy5zdHJlYW1QcmVwcm9jZXNzaW5nICl7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignc3RyZWFtUHJlcHJvY2Vzc2luZyBpcyBub3Qgc2V0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuc3RyZWFtUHJlcHJvY2Vzc2luZztcbiAgICB9XG5cbiAgICBzZXQgUHJlcHJvY2Vzc2luZyhzdHJlYW1QcmVwcm9jZXNzaW5nKXtcbiAgICAgICAgdGhpcy5zdHJlYW1QcmVwcm9jZXNzaW5nID0gc3RyZWFtUHJlcHJvY2Vzc2luZztcbiAgICB9XG5cbiAgICBzcGxpdERhdGFzZXQocmF0aW89MC45KXtcbiAgICAgICAgcmV0dXJuIHRoaXMuUHJlcHJvY2Vzc2luZy5zcGxpdERhdGFzZXQocmF0aW8pO1xuICAgIH1cblxuICAgIHNldEJ5Q29uZmlnKHBpcGVsaW5lQ29uZmlnKXtcbiAgICAgICAgaWYoc3VwZXIuc2V0QnlDb25maWcpe1xuICAgICAgICAgICAgc3VwZXIuc2V0QnlDb25maWcocGlwZWxpbmVDb25maWcpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuTG9nZ2VyLmdyb3VwQmVnaW4oJ3NldCBQcmVwcm9jZXNzaW5nIGJ5IGNvbmZpZycpO1xuICAgICAgICBpZih0aGlzLkRhdGFTb3VyY2VSZWFkZXIpe1xuICAgICAgICAgICAgY29uc3QgeyBQcmVwcm9jZXNzaW5nIH0gPSBwaXBlbGluZUNvbmZpZy5EYXRhc2V0O1xuICAgICAgICAgICAgaWYoIVByZXByb2Nlc3Npbmcpe1xuICAgICAgICAgICAgICAgIHRocm93IEVycm9yKGBleHBlY3QgeyBQcmVwcm9jZXNzaW5nIH0gZ2V0ICR7SlNPTi5zdHJpbmdpZnkocGlwZWxpbmVDb25maWcuRGF0YXNldCl9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB7IFNhbXBsZVRyYW5zZm9ybWVyLCBMYWJlbFRyYW5zZm9ybWVyIH0gPSBQcmVwcm9jZXNzaW5nO1xuICAgICAgICAgICAgaWYoIVNhbXBsZVRyYW5zZm9ybWVyIHx8ICFMYWJlbFRyYW5zZm9ybWVyKXtcbiAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihgZXhwZWN0IHsgU2FtcGxlVHJhbnNmb3JtZXIsIExhYmVsVHJhbnNmb3JtZXIgfSBcbiAgICAgICAgICAgICAgICAgICAgZ2V0ICR7SlNPTi5zdHJpbmdpZnkocGlwZWxpbmVDb25maWcuRGF0YXNldC5QcmVwcm9jZXNzaW5nKX1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuUHJlcHJvY2Vzc2luZy5TYW1wbGVUcmFuc2Zvcm1lciA9IFNhbXBsZVRyYW5zZm9ybWVyO1xuICAgICAgICAgICAgdGhpcy5QcmVwcm9jZXNzaW5nLkxhYmVsVHJhbnNmb3JtZXIgPSBMYWJlbFRyYW5zZm9ybWVyO1xuICAgICAgICAgICAgdGhpcy5QcmVwcm9jZXNzaW5nLlNhbXBsZVRyYW5zZm9ybWVyID0gdGhpcy5QcmVwcm9jZXNzaW5nLlNhbXBsZVRyYW5zZm9ybWVyLmJpbmQodGhpcyk7XG4gICAgICAgICAgICB0aGlzLlByZXByb2Nlc3NpbmcuTGFiZWxUcmFuc2Zvcm1lciA9IHRoaXMuUHJlcHJvY2Vzc2luZy5MYWJlbFRyYW5zZm9ybWVyLmJpbmQodGhpcyk7XG4gICAgICAgICAgICB0aGlzLlByZXByb2Nlc3Npbmcuc2V0RGF0YUhhbmRsZXIoKTtcbiAgICAgICAgICAgIHRoaXMuRGF0YVNvdXJjZVJlYWRlci5waXBlKHRoaXMuUHJlcHJvY2Vzc2luZyk7XG4gICAgICAgICAgICBwaXBlbGluZUNvbmZpZy5EYXRhc2V0LlRyYWluRGF0YUdlbmVyYXRvciA9IHRoaXMuUHJlcHJvY2Vzc2luZy5tYWtlVHJhaW5EYXRhR2VuZXJhdG9yKCk7XG4gICAgICAgICAgICBwaXBlbGluZUNvbmZpZy5EYXRhc2V0LlRlc3REYXRhR2VuZXJhdG9yID0gdGhpcy5QcmVwcm9jZXNzaW5nLm1ha2VUZXN0RGF0YUdlbmVyYXRvcigpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuTG9nZ2VyLmdyb3VwRW5kKCk7XG4gICAgICAgIHJldHVybiBwaXBlbGluZUNvbmZpZztcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcmVwcm9jZXNzaW5nTWl4aW5zOyIsImltcG9ydCB7IEZ1bmN0b3IgYXMgQmFzZUZ1bmN0b3IgfSBmcm9tICdjYXVzYWwtbmV0LmNvcmUnO1xuaW1wb3J0IHsgcGxhdGZvcm0gfSBmcm9tICdjYXVzYWwtbmV0LnV0aWxzJztcbmltcG9ydCB7IENhdGVnb3J5Tm9ybWFsaXppbmdNaXhpbnMgfSBmcm9tICcuL1RhYnVsYXIvaW5kZXgnO1xuY2xhc3MgVGFidWxhclByZXByb2Nlc3NpbmcgZXh0ZW5kcyBwbGF0Zm9ybS5taXhXaXRoKEJhc2VGdW5jdG9yLCBcbiAgICBbQ2F0ZWdvcnlOb3JtYWxpemluZ01peGluc10pe1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgVGFidWxhclByZXByb2Nlc3Npbmc7IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfY29yZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X2xvZ19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3N0b3JhZ2VfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF91dGlsc19fOyJdLCJzb3VyY2VSb290IjoiIn0=