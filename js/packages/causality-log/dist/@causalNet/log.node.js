(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("canvas"), require("causal-net.utils"), require("cli-progress"), require("d3"), require("fs"), require("open"), require("svg2png"), require("vivid.d3-node"));
	else if(typeof define === 'function' && define.amd)
		define(["canvas", "causal-net.utils", "cli-progress", "d3", "fs", "open", "svg2png", "vivid.d3-node"], factory);
	else if(typeof exports === 'object')
		exports["@causalNet/log"] = factory(require("canvas"), require("causal-net.utils"), require("cli-progress"), require("d3"), require("fs"), require("open"), require("svg2png"), require("vivid.d3-node"));
	else
		root["@causalNet/log"] = factory(root["canvas"], root["causal-net.utils"], root["cli-progress"], root["d3"], root["fs"], root["open"], root["svg2png"], root["vivid.d3-node"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_canvas__, __WEBPACK_EXTERNAL_MODULE_causal_net_utils__, __WEBPACK_EXTERNAL_MODULE_cli_progress__, __WEBPACK_EXTERNAL_MODULE_d3__, __WEBPACK_EXTERNAL_MODULE_fs__, __WEBPACK_EXTERNAL_MODULE_open__, __WEBPACK_EXTERNAL_MODULE_svg2png__, __WEBPACK_EXTERNAL_MODULE_vivid_d3_node__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
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

/***/ "../../node_modules/path-browserify/index.js":
/*!********************************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/path-browserify/index.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
var splitPathRe =
    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
var splitPath = function(filename) {
  return splitPathRe.exec(filename).slice(1);
};

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function(path) {
  var result = splitPath(path),
      root = result[0],
      dir = result[1];

  if (!root && !dir) {
    // No dirname whatsoever
    return '.';
  }

  if (dir) {
    // It has a dirname, strip trailing slash
    dir = dir.substr(0, dir.length - 1);
  }

  return root + dir;
};


exports.basename = function(path, ext) {
  var f = splitPath(path)[2];
  // TODO: make this comparison case-insensitive on windows?
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};


exports.extname = function(path) {
  return splitPath(path)[3];
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ "../../node_modules/process/browser.js")))

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

/***/ "./src/Vivid/init.js":
/*!***************************!*\
  !*** ./src/Vivid/init.js ***!
  \***************************/
/*! exports provided: vivid, PlotMixins */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vivid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vivid */ "./src/Vivid/vivid.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "vivid", function() { return _vivid__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _plot_mixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./plot.mixins */ "./src/Vivid/plot.mixins.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlotMixins", function() { return _plot_mixins__WEBPACK_IMPORTED_MODULE_1__["default"]; });




/***/ }),

/***/ "./src/Vivid/line.chart.mixins.js":
/*!****************************************!*\
  !*** ./src/Vivid/line.chart.mixins.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const LineChartMixins = BasePlotClass => class extends BasePlotClass {
  line({
    data,
    title,
    xRange,
    yRange,
    xLabel,
    yLabel,
    style,
    width,
    height,
    plotId
  }) {
    const d3 = this.d3;
    style = style !== undefined ? style : {};
    const defaultStyle = {
      '.line': {
        fill: 'none',
        'stroke-width': '2px'
      }
    };
    style = Object.assign({}, defaultStyle, style);
    let kwdata = Array.isArray(data) ? data.map((d, ith) => [...(Array.isArray(d) ? d : [ith, d]), 'data']) : Object.entries(data).reduce((s, [k, data]) => [...s, ...data.map((d, ith) => [...(Array.isArray(d) ? d : [ith, d]), k])], []);
    var {
      svg,
      xMap,
      yMap,
      color
    } = this.basePlot({
      kwdata,
      title,
      xRange,
      yRange,
      xLabel,
      yLabel,
      style,
      width,
      height
    });
    var lineGenerator = d3.line().x(function (d) {
      return xMap(d[0]);
    }).y(function (d) {
      return yMap(d[1]);
    }).curve(d3.curveMonotoneX);
    let byName = d3.nest().key(([x, y, name]) => name).entries(kwdata);
    svg.selectAll(".line-groups").data(byName).enter().append("g").attr('class', '.line-groups').attr("id", d => d.key).selectAll("path").data(d => [d]).enter().append("path").attr("class", "line").attr('stroke', d => color(d.key)).attr("d", d => lineGenerator(d.values));
    svg.selectAll(".dot").data(kwdata).enter().append("circle") // Uses the enter().append() method
    .attr("class", "dot") // Assign a class for styling
    .attr("cx", function ([x, y]) {
      return xMap(x);
    }).attr("cy", function ([x, y]) {
      return yMap(y);
    }).attr("fill", function ([x, y, name]) {
      return color(name);
    }).attr("r", 5);
    title = title ? title : 'unname';
    plotId = plotId ? plotId : title.replace(/\s/g, '_') + '.png';
    return plotId;
  }

};

/* harmony default export */ __webpack_exports__["default"] = (LineChartMixins);

/***/ }),

/***/ "./src/Vivid/plot.mixins.js":
/*!**********************************!*\
  !*** ./src/Vivid/plot.mixins.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const PlotMixins = BaseLogClass => class extends BaseLogClass {
  connect(target) {
    if (super.connect) {
      super.connect(target);
    }

    this.Plot.connect(target);
  }

  set Plot(plot) {
    this.plotter = plot;
  }

  get Plot() {
    if (!this.plotter) {
      throw Error('Plot is not set');
    }

    return this.plotter;
  }

};

/* harmony default export */ __webpack_exports__["default"] = (PlotMixins);

/***/ }),

/***/ "./src/Vivid/scatter.chart.mixins.js":
/*!*******************************************!*\
  !*** ./src/Vivid/scatter.chart.mixins.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const ScatterChartMixins = BasePlotClass => class extends BasePlotClass {
  scatter({
    data,
    title,
    xRange,
    yRange,
    xLabel,
    yLabel,
    style,
    width,
    height,
    plotId
  }) {
    let kwdata = Array.isArray(data) ? data.map(d => [...d, 'data']) : Object.entries(data).reduce((s, [k, data]) => [...s, ...data.map(d => [...d, k])], []);
    let {
      svg,
      xMap,
      yMap,
      color
    } = this.basePlot({
      kwdata,
      title,
      xRange,
      yRange,
      xLabel,
      yLabel,
      style,
      width,
      height
    });
    svg.selectAll("circle").data(kwdata).enter().append("circle").attr("cx", ([x, y, name]) => xMap(x)).attr("cy", ([x, y, name]) => yMap(y)).attr("r", 5).attr("fill", ([x, y, name]) => color(name));
    title = title ? title : 'unname';
    plotId = plotId ? plotId : title.replace(/\s/g, '_') + '.png';
    return plotId;
  }

};

/* harmony default export */ __webpack_exports__["default"] = (ScatterChartMixins);

/***/ }),

/***/ "./src/Vivid/vivid.js":
/*!****************************!*\
  !*** ./src/Vivid/vivid.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "d3");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(d3__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! causal-net.utils */ "causal-net.utils");
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(causal_net_utils__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _line_chart_mixins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./line.chart.mixins */ "./src/Vivid/line.chart.mixins.js");
/* harmony import */ var _scatter_chart_mixins__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scatter.chart.mixins */ "./src/Vivid/scatter.chart.mixins.js");
/* harmony import */ var _vivid_mixins_web__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vivid.mixins.web */ "./src/Vivid/vivid.mixins.web.js");
/* harmony import */ var _vivid_mixins_node__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vivid.mixins.node */ "./src/Vivid/vivid.mixins.node.js");







class BasePlot {
  constructor() {}

  connect() {
    throw Error('implement require');
  }

}

class Vivid extends causal_net_utils__WEBPACK_IMPORTED_MODULE_1__["platform"].mixWith(BasePlot, {
  node: [_vivid_mixins_node__WEBPACK_IMPORTED_MODULE_5__["default"], _scatter_chart_mixins__WEBPACK_IMPORTED_MODULE_3__["default"], _line_chart_mixins__WEBPACK_IMPORTED_MODULE_2__["default"]],
  web: [_vivid_mixins_web__WEBPACK_IMPORTED_MODULE_4__["default"], _scatter_chart_mixins__WEBPACK_IMPORTED_MODULE_3__["default"], _line_chart_mixins__WEBPACK_IMPORTED_MODULE_2__["default"]]
}) {
  constructor(d3) {
    super();
    this.d3 = d3;
    this.DefaultWidth = 900;
    this.DefaultHeight = 600;
    this.defaultStyle = {
      svg: {
        font: '10px sans-serif'
      },
      '.label': {
        'fill': 'white'
      },
      '.axis path, .axis line': {
        fill: 'none',
        'stroke': '#000; shape-rendering: crispEdges'
      },
      '.dot': {
        'stroke': '#000'
      }
    };
  }

  png({
    data,
    width,
    height,
    title,
    plotId
  }) {
    let canvas = this.makeCanvasNode({
      width,
      height
    });
    let context = canvas.getContext ? canvas.getContext('2d') : canvas.node().getContext("2d");
    let imagedata = context.createImageData(width, height);

    for (var x = 0; x < width; x++) {
      for (var y = 0; y < height; y++) {
        var pixelindex = (y * width + x) * 4;
        imagedata.data[pixelindex] = data[pixelindex];
        imagedata.data[pixelindex + 1] = data[pixelindex + 1];
        imagedata.data[pixelindex + 2] = data[pixelindex + 2];
        imagedata.data[pixelindex + 3] = data[pixelindex + 3];
      }
    }

    context.putImageData(imagedata, 0, 0);
    title = title ? title : 'unname';
    plotId = plotId ? plotId : title.replace(/\s/g, '_') + '.png';
    return plotId;
  }

  basePlot({
    kwdata,
    width,
    height,
    xLabel,
    yLabel,
    style
  }) {
    const d3 = this.d3;
    style = style !== undefined ? style : {};
    style = Object.assign({}, this.defaultStyle, style);
    let cssStyle = this.json2css(style);
    width = width ? width : this.DefaultWidth;
    height = height ? height : this.DefaultHeight;
    const plotMargin = {
      top: 20,
      right: 20,
      bottom: 30,
      left: 40
    },
          plotWidth = width - plotMargin.left - plotMargin.right,
          plotHeight = height - plotMargin.top - plotMargin.bottom;
    var svg = this.makeSVGnode({
      width,
      height,
      styles: cssStyle
    });
    svg = svg.append("g").attr("transform", "translate(" + plotMargin.left + "," + plotMargin.top + ")");
    let xDomain = d3.extent(kwdata, ([xPoint, yPoint, name]) => xPoint);
    let yDomain = d3.extent(kwdata, ([xPoint, yPoint, name]) => yPoint);
    var xMap = d3.scaleLinear().range([0, plotWidth]).domain(xDomain);
    var yMap = d3.scaleLinear().range([plotHeight, 0]).domain(yDomain);
    var xAxis = d3.axisBottom(xMap);
    var yAxis = d3.axisLeft(yMap);
    var color = d3.scaleOrdinal(d3.schemeCategory10);
    kwdata.map(([x, y, name]) => color(name));
    xLabel = xLabel ? xLabel : 'x axis';
    yLabel = yLabel ? yLabel : 'y axis';
    svg.append("g").attr("class", "x axis").attr("transform", "translate(0," + plotHeight + ")").call(xAxis).append("text").attr("class", "label").attr("x", plotWidth).attr("y", 0).style('fill', 'white').style("text-anchor", "end").text(xLabel);
    svg.append("g").attr("class", "y axis").call(yAxis).append("text").attr("class", "label").attr("transform", "rotate(-90)").attr("y", 6).attr("dy", ".91em").style('fill', 'white').style("text-anchor", "end").text(yLabel);
    var legend = svg.selectAll(".legend").data(color.domain()).enter().append("g").attr("class", "legend").attr("transform", (d, i) => "translate(0," + i * 20 + ")");
    legend.append("rect").attr("x", plotWidth - 18).attr("width", 18).attr("height", 18).style("fill", color);
    legend.append("text").attr("x", plotWidth - 24).attr("y", 9).attr("dy", ".35em").style("text-anchor", "end").text(d => d);
    this.plotStyle = cssStyle;
    return {
      svg,
      xMap,
      yMap,
      color
    };
  }

}

let vivid = new Vivid(d3__WEBPACK_IMPORTED_MODULE_0__);
/* harmony default export */ __webpack_exports__["default"] = (vivid);

/***/ }),

/***/ "./src/Vivid/vivid.mixins.node.js":
/*!****************************************!*\
  !*** ./src/Vivid/vivid.mixins.node.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Buffer) {/* harmony import */ var vivid_d3_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vivid.d3-node */ "vivid.d3-node");
/* harmony import */ var vivid_d3_node__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vivid_d3_node__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! canvas */ "canvas");
/* harmony import */ var canvas__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(canvas__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var svg2png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! svg2png */ "svg2png");
/* harmony import */ var svg2png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(svg2png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_3__);





const VividNodeMixins = BaseVividClass => class extends BaseVividClass {
  connect(channel) {}

  async export2png(outputPath) {
    const d3n = this.d3plot;

    if (d3n.options.canvas) {
      const canvas = d3n.options.canvas;
      let stream = canvas.pngStream().pipe(fs__WEBPACK_IMPORTED_MODULE_3__["createWriteStream"](outputPath));
      return new Promise((resolve, reject) => {
        stream.on('finish', function () {
          resolve(outputPath);
        });
      });
    } else {
      var svgBuffer = Buffer.from(d3n.svgString(), 'utf-8');
      let buffer = await svg2png__WEBPACK_IMPORTED_MODULE_2___default()(svgBuffer);
      return new Promise((resolve, reject) => {
        fs__WEBPACK_IMPORTED_MODULE_3__["writeFile"](outputPath, buffer, err => {
          if (err) {
            reject('error export file');
          } else {
            resolve(outputPath);
          }
        });
      });
    }
  }

  json2css(objectStyle) {
    let cssString = Object.entries(objectStyle).reduce((acc1, cur1) => {
      return `${acc1}\n\n${cur1[0]} ` + Object.keys(cur1[1]).reduce((acc2, cur2) => `${acc2}\n\t${cur2}: ${cur1[1][cur2]};`, '{') + '\n}';
    }, '');
    return cssString;
  }

  makeSVGnode({
    width,
    height,
    styles
  }) {
    var options = {
      styles,
      canvasModule: (canvas__WEBPACK_IMPORTED_MODULE_1___default()),
      d3: this.d3
    };
    this.d3plot = new vivid_d3_node__WEBPACK_IMPORTED_MODULE_0___default.a(options);
    return this.d3plot.createSVG(width, height);
  }

  makeCanvasNode({
    width,
    height
  }) {
    var options = {
      styles: '',
      canvasModule: (canvas__WEBPACK_IMPORTED_MODULE_1___default()),
      d3: this.d3
    };
    this.d3plot = new vivid_d3_node__WEBPACK_IMPORTED_MODULE_0___default.a(options);
    return this.d3plot.createCanvas(width, height);
  }

  async show(option = {}) {
    let {
      plotId
    } = option;
    this.open = __webpack_require__(/*! open */ "open");
    await this.export2png(plotId);
    return await this.open(plotId);
  }

};

/* harmony default export */ __webpack_exports__["default"] = (VividNodeMixins);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/buffer/index.js */ "../../node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "./src/Vivid/vivid.mixins.web.js":
/*!***************************************!*\
  !*** ./src/Vivid/vivid.mixins.web.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ "../../node_modules/path-browserify/index.js");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);


const VividWebMixins = BaseVividClass => class extends BaseVividClass {
  connect(target) {
    console.log(target);

    if (typeof target === 'string' && target.startsWith('#')) {
      this.d3n = this.d3.select(target);
      let {
        width
      } = this.d3n.node().getBoundingClientRect();
      this.DefaultWidth = width - 40;
      this.DefaultWidth = width * 0.8;
    } else {
      throw Error(`cannot connect to ${target}`);
    }
  }

  makeSVGnode({
    width,
    height
  }) {
    return this.d3n.append('svg').attr('width', width).attr('height', height);
  }

  makeCanvasNode({
    width,
    height
  }) {
    return this.d3n.append('canvas').attr('width', width).attr('height', height);
  }

  json2css(objectStyle) {
    let cssString = Object.entries(objectStyle).reduce((acc1, cur1) => {
      return `${acc1}\n\n${cur1[0]} ` + Object.keys(cur1[1]).reduce((acc2, cur2) => `${acc2}\n\t${cur2}: ${cur1[1][cur2]};`, '{') + '\n}';
    }, '');
    var style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = cssString;
    document.getElementsByTagName('head')[0].appendChild(style);
    return cssString;
  }

  async show(option = {
    plotId: 'new plot'
  }) {
    let {
      plotId
    } = option; //TODO: remove if not need

    return new Promise((resolve, reject) => {
      resolve(plotId);
    });
  }

};

/* harmony default export */ __webpack_exports__["default"] = (VividWebMixins);

/***/ }),

/***/ "./src/baseLogger.js":
/*!***************************!*\
  !*** ./src/baseLogger.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * This BaseLogger class provided abstract class for extending new logger class
 * @class BaseLog
 */
class BaseLogger {
  constructor() {
    this.AcceptedLevels = {
      debug: 0,
      log: 1,
      warn: 2,
      error: 3
    };
    this.rAcceptedLevels = {
      0: 'debug',
      1: 'log',
      2: 'warn',
      3: 'error'
    };
    this.level = this.AcceptedLevels['debug'];
  }

  set Level(level) {
    if (this.AcceptedLevels[level] !== undefined) {
      this.level = this.AcceptedLevels[level];
    } else {
      throw Error(`${level} must be one of ${Object.keys(this.AcceptedLevels)}`);
    }
  }

  get Level() {
    return this.rAcceptedLevels[this.level];
  }

  connect() {
    throw Error('implement required');
  }

  log(message) {
    throw Error('implement required');
  }

  warn(message) {
    throw Error('implement required');
  }

  error(message) {
    throw Error('implement required');
  }

  debug(message) {
    throw Error('implement required');
  }

  groupBegin(name) {
    throw Error('implement required');
  }

  groupEnd() {
    throw Error('implement required');
  }

  progressBegin(range) {
    throw Error('implement required');
  }

  progressUpdate(message) {
    throw Error('implement required');
  }

  progressEnd(message) {
    throw Error('implement required');
  }

}

/* harmony default export */ __webpack_exports__["default"] = (BaseLogger);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: termLogger, vivid, LoggerMixins, BaseLogger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _termLogger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./termLogger */ "./src/termLogger.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "termLogger", function() { return _termLogger__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Vivid_init__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Vivid/init */ "./src/Vivid/init.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "vivid", function() { return _Vivid_init__WEBPACK_IMPORTED_MODULE_1__["vivid"]; });

/* harmony import */ var _logger_mixins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logger.mixins */ "./src/logger.mixins.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoggerMixins", function() { return _logger_mixins__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _baseLogger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./baseLogger */ "./src/baseLogger.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseLogger", function() { return _baseLogger__WEBPACK_IMPORTED_MODULE_3__["default"]; });






/***/ }),

/***/ "./src/logger.mixins.js":
/*!******************************!*\
  !*** ./src/logger.mixins.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseLogger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseLogger */ "./src/baseLogger.js");
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! causal-net.utils */ "causal-net.utils");
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(causal_net_utils__WEBPACK_IMPORTED_MODULE_1__);


/**
 * This LoggerMixins class provides mixins for accquiring logger
 * @class LoggerMixins
 * @extends BaseClass
 * @example
 * [EXAMPLE ../examples/logger.mixins.babel.js]
 */

const LoggerMixins = BaseClass => class extends BaseClass {
  set Logger(logger) {
    causal_net_utils__WEBPACK_IMPORTED_MODULE_1__["assert"].beInstanceOf(logger, _baseLogger__WEBPACK_IMPORTED_MODULE_0__["default"]);
    this.logger = logger;
  }

  get Logger() {
    if (!this.logger) {
      throw Error('logger is not set');
    }

    return this.logger;
  }

};

/* harmony default export */ __webpack_exports__["default"] = (LoggerMixins);

/***/ }),

/***/ "./src/prettyJson.js":
/*!***************************!*\
  !*** ./src/prettyJson.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return JsonView; });
// origin code from https://github.com/lucygilbert/json-display/blob/master/json-display.js
// Copyright (c) 2017 Lucy Gilbert
class JsonView {
  constructor() {}

  static JSONDisplay(json, openLevelsArg, styleOptionsArg) {
    var DEFAULT_STYLE_OPTIONS = {
      root: {
        tag: 'pre',
        style: 'padding: 5px; font-size: 1rem;'
      },
      titleContainer: {
        tag: 'div',
        style: 'margin-bottom: 3px;'
      },
      title: {
        tag: 'span',
        style: 'cursor: pointer;'
      },
      titleText: {
        tag: 'span',
        style: ''
      },
      openButton: {
        tag: 'span',
        style: 'display: inline-block; margin: 0px 7px 0px 2px; border-top: 5px solid transparent; ' + 'border-bottom: 5px solid transparent; border-left: 5px solid black;'
      },
      contentsContainer: {
        tag: 'div',
        style: 'padding-left: 18px;'
      },
      keyValuePair: {
        tag: 'span',
        style: 'display: block; margin-bottom: 2px;'
      },
      key: {
        tag: 'span',
        style: 'color: darkblue;'
      },
      symbolValue: {
        tag: 'span',
        style: 'color: darkgreen;'
      },
      stringValue: {
        tag: 'span',
        style: 'color: crimson;'
      },
      numberValue: {
        tag: 'span',
        style: 'color: blue;'
      },
      booleanValue: {
        tag: 'span',
        style: 'color: blue;'
      },
      nullValue: {
        tag: 'span',
        style: 'color: blue;'
      }
    };
    var openLevels = isNaN(parseInt(openLevelsArg)) ? Infinity : parseInt(openLevelsArg);
    var styleOptions = typeof styleOptionsArg === 'object' ? mergeStyleOptions(DEFAULT_STYLE_OPTIONS, styleOptionsArg) : DEFAULT_STYLE_OPTIONS;

    if (typeof Object.assign != 'function') {
      Object.assign = function (target) {
        if (target == null) {
          throw new TypeError('Cannot convert undefined or null to object');
        }

        var to = Object(target);

        for (var index = 1; index < arguments.length; index++) {
          var nextSource = arguments[index];

          if (nextSource != null) {
            for (var nextKey in nextSource) {
              if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                to[nextKey] = nextSource[nextKey];
              }
            }
          }
        }

        return to;
      };
    }

    function render() {
      var element = document.createElement(styleOptions.root.tag);
      element.style.cssText = styleOptions.root.style;

      if (json === null || json === undefined) {
        var voidElement = getValue(null);
        element.appendChild(voidElement);
      } else if (json instanceof Date) {
        var dateElement = getValue(json.toISOString());
        element.appendChild(dateElement);
      } else if (typeof json !== 'object') {
        var nonExpandableElement = getValue(json);
        element.appendChild(nonExpandableElement);
      } else {
        var title = Array.isArray(json) ? 'Array[' + json.length + ']' : 'Object';
        var thisLevelIsClosed = openLevels < 1;
        element.appendChild(getTitle(title, null, thisLevelIsClosed));
        element.appendChild(convertJsonToElements(json, 1));
      }

      return element;
    }

    function convertJsonToElements(json, index) {
      var thisLevelIsClosed = index > openLevels;
      var nextLevelIsClosed = index + 1 > openLevels;
      var container = getContentsContainer(thisLevelIsClosed);

      for (var key in json) {
        if (Array.isArray(json[key])) {
          container.appendChild(getTitle('Array[' + json[key].length + ']', key, nextLevelIsClosed));
          container.appendChild(convertJsonToElements(json[key], index + 1));
        } else if (json[key] === null || json[key] === undefined) {
          container.appendChild(getStandardPair(key, null));
        } else if (json[key] instanceof Date) {
          container.appendChild(getStandardPair(key, json[key].toISOString()));
        } else if (typeof json[key] === 'object') {
          container.appendChild(getTitle('Object', key, nextLevelIsClosed));
          container.appendChild(convertJsonToElements(json[key], index + 1));
        } else {
          container.appendChild(getStandardPair(key, json[key]));
        }
      }

      if (typeof Object.getOwnPropertySymbols === 'function') {
        Object.getOwnPropertySymbols(json).forEach(function (symbol) {
          container.appendChild(getStandardPair(symbol.toString(), json[symbol]));
        });
      }

      return container;
    }

    function getTitle(titleText, optionalKey, levelIsClosed) {
      var currentlyClosed = levelIsClosed;
      var containerElement = document.createElement(styleOptions.titleContainer.tag);
      containerElement.style.cssText = styleOptions.titleContainer.style;
      containerElement.setAttribute('data-test', 'titleContainer');
      var textElement = document.createElement(styleOptions.titleText.tag);
      var titleElement = document.createElement(styleOptions.title.tag);
      titleElement.style.cssText = styleOptions.title.style;
      textElement.style.cssText = styleOptions.titleText.style;
      titleElement.appendChild(getOpenButton(levelIsClosed));

      if (optionalKey) {
        textElement.appendChild(getKey(optionalKey));
      }

      textElement.appendChild(document.createTextNode(titleText));
      titleElement.appendChild(textElement);

      titleElement.onclick = function () {
        var openButton = titleElement.firstChild;
        var objectContents = titleElement.parentNode.nextSibling;
        objectContents.style.display = currentlyClosed ? 'block' : 'none';
        openButton.style.transform = currentlyClosed ? 'rotate(90deg)' : 'rotate(0deg)';
        currentlyClosed = !currentlyClosed;
      };

      containerElement.appendChild(titleElement);
      return containerElement;
    }

    function getOpenButton(levelIsClosed) {
      var buttonElement = document.createElement(styleOptions.openButton.tag);
      buttonElement.style.cssText = styleOptions.openButton.style;
      buttonElement.style.transform = levelIsClosed ? 'rotate(0deg)' : 'rotate(90deg)';
      return buttonElement;
    }

    function getContentsContainer(isClosed) {
      var containerElement = document.createElement(styleOptions.contentsContainer.tag);
      containerElement.setAttribute('data-test', 'contentsContainer');
      containerElement.style.cssText = styleOptions.contentsContainer.style;
      containerElement.style.display = isClosed ? 'none' : 'block';
      return containerElement;
    }

    function getStandardPair(key, value) {
      var pairElement = document.createElement(styleOptions.keyValuePair.tag);
      pairElement.style.cssText = styleOptions.keyValuePair.style;
      pairElement.appendChild(getKey(key));
      pairElement.appendChild(getValue(value));
      return pairElement;
    }

    function getKey(name) {
      var keyElement = document.createElement(styleOptions.key.tag);
      keyElement.style.cssText = styleOptions.key.style;
      keyElement.appendChild(document.createTextNode(name + ': '));
      return keyElement;
    }

    function getValue(value) {
      var valueElement;
      var nullType = 'object';

      switch (typeof value) {
        case 'symbol':
          valueElement = document.createElement(styleOptions.symbolValue.tag);
          valueElement.style.cssText = styleOptions.symbolValue.style;
          valueElement.appendChild(document.createTextNode(value.toString()));
          break;

        case 'string':
          valueElement = document.createElement(styleOptions.stringValue.tag);
          valueElement.style.cssText = styleOptions.stringValue.style;
          valueElement.appendChild(document.createTextNode('' + value + ''));
          break;

        case 'number':
          valueElement = document.createElement(styleOptions.numberValue.tag);
          valueElement.style.cssText = styleOptions.numberValue.style;
          valueElement.appendChild(document.createTextNode(value));
          break;

        case 'boolean':
          valueElement = document.createElement(styleOptions.booleanValue.tag);
          valueElement.style.cssText = styleOptions.booleanValue.style;
          valueElement.appendChild(document.createTextNode(value));
          break;

        case nullType:
          valueElement = document.createElement(styleOptions.nullValue.tag);
          valueElement.style.cssText = styleOptions.nullValue.style;
          valueElement.appendChild(document.createTextNode(value));
          break;
      }

      return valueElement;
    }

    function mergeStyleOptions(defaults, overrides) {
      var merged = {};

      for (var key in defaults) {
        merged[key] = Object.assign({}, defaults[key], overrides[key]);
      }

      return merged;
    }

    return render();
  }

}

/***/ }),

/***/ "./src/termLogger.js":
/*!***************************!*\
  !*** ./src/termLogger.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseLogger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseLogger */ "./src/baseLogger.js");
/* harmony import */ var _termLogger_mixins_node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./termLogger.mixins.node */ "./src/termLogger.mixins.node.js");
/* harmony import */ var _termLogger_mixins_web__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./termLogger.mixins.web */ "./src/termLogger.mixins.web.js");
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! causal-net.utils */ "causal-net.utils");
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(causal_net_utils__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Vivid_init__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Vivid/init */ "./src/Vivid/init.js");





/**
 * This TermLogger provide isomorphic logger
 * { mixWith : { 'node': [LogNodeMixins], 'web': [WebNodeMixins] } }
 * @class TermLogger
 * @extends BaseLogger
 * @example
 * [EXAMPLE ../examples/log.babel.js]
 */

class TermLogger extends causal_net_utils__WEBPACK_IMPORTED_MODULE_3__["platform"].mixWith(_baseLogger__WEBPACK_IMPORTED_MODULE_0__["default"], {
  node: [_termLogger_mixins_node__WEBPACK_IMPORTED_MODULE_1__["default"], _Vivid_init__WEBPACK_IMPORTED_MODULE_4__["PlotMixins"]],
  web: [_termLogger_mixins_web__WEBPACK_IMPORTED_MODULE_2__["default"], _Vivid_init__WEBPACK_IMPORTED_MODULE_4__["PlotMixins"]]
}) {
  constructor(vivid) {
    super();
    /**@private {Array} stack of groups */

    this.groupStack = [];
    this.Plot = vivid;
  }

  groupBegin(name) {
    let group = {
      name,
      beginTime: new Date()
    };
    this.groupStack.push(group);
    let indentSpace = '';
    this.log(`**********************************\n${indentSpace}${group.name}: begin at ${group.beginTime}`);
  }

  groupEnd() {
    if (this.groupStack.length > 0) {
      let group = this.groupStack.pop();
      let indentSpace = '';
      this.log(`${indentSpace}${group.name}: end after ${new Date() - group.beginTime} (ms)
                        \n**********************************`);
    }
  }

}

let termLogger = new TermLogger(_Vivid_init__WEBPACK_IMPORTED_MODULE_4__["vivid"]);
/* harmony default export */ __webpack_exports__["default"] = (termLogger);

/***/ }),

/***/ "./src/termLogger.mixins.node.js":
/*!***************************************!*\
  !*** ./src/termLogger.mixins.node.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var cli_progress__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cli-progress */ "cli-progress");
/* harmony import */ var cli_progress__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cli_progress__WEBPACK_IMPORTED_MODULE_0__);


const LogNodeMixins = LogClass => class extends LogClass {
  connect(channel) {
    this.currentBar = false;
  }

  log(message) {
    //TODO: make decorator 
    this.currentBar = false;

    if (this.level >= this.AcceptedLevels['log']) {
      return null;
    }

    console.log(message);
  }

  plot(data) {
    const Plot = this.Plot;

    if (!data.type) {
      throw Error(`plot type is not defined in ${JSON.stringify(data)}`);
    }

    let {
      plotId
    } = data;

    if (!plotId) {
      this.plotCounter = this.plotCounter !== undefined ? this.plotCounter + 1 : 0;
      plotId = `plot-${this.plotCounter}`;
      data.plotId = plotId;
    }

    Plot[data.type](data);
    return plotId;
  }

  async show(option = {}) {
    let {
      plotId
    } = option;
    return await this.Plot.show(option);
  }

  progressBegin(range) {
    this.processCounter += 1;
    this.currentBar = new cli_progress__WEBPACK_IMPORTED_MODULE_0__["Bar"]({}, cli_progress__WEBPACK_IMPORTED_MODULE_0__["Presets"].shades_classic);
    this.currentBar.setTotal(range);
  }

  progressUpdate(progressMessage) {
    if (!this.currentBar) {
      this.progressBegin();
    }

    this.processCounter += 1;
    this.currentBar.update(this.processCounter);
  }

  progressEnd() {
    this.currentBar.stop();
    this.processCounter = 0;
  }

  debug(message) {
    if (this.level >= this.AcceptedLevels['debug']) {
      return null;
    }

    console.debug(message);
  }

  warn(message) {
    if (this.level >= this.AcceptedLevels['warn']) {
      return null;
    }

    console.warn(message);
  }

  error(message) {
    if (this.level >= this.AcceptedLevels['error']) {
      return null;
    }

    console.error(message);
  }

};

/* harmony default export */ __webpack_exports__["default"] = (LogNodeMixins);

/***/ }),

/***/ "./src/termLogger.mixins.web.js":
/*!**************************************!*\
  !*** ./src/termLogger.mixins.web.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _prettyJson__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prettyJson */ "./src/prettyJson.js");


const LogWebMixins = LogClass => class extends LogClass {
  connect(target = null) {
    let documentEl = target ? document.getElementById(target.replace('#', '')) : document.body;
    this.target = target;
    let node = document.createElement("ul");
    node.style.cssText = "list-style-type: none;";
    documentEl.appendChild(node);
    console.log({
      documentEl,
      node
    });
    this.frameEl = documentEl;
    this.loggerEl = documentEl.getElementsByTagName("ul")[0];
    this.colorCode = {
      debug: '#f1f1f1',
      log: '#010101',
      warn: '#eae26e',
      error: '#ea6e78'
    };
  }

  scrollBottom(element = null) {
    element = element || this.frameEl;
    element.scrollTop = element.scrollHeight - element.clientHeight;
  }

  plot(data) {
    const Plot = this.Plot;

    if (!data.type) {
      throw Error(`plot type is not defined in ${JSON.stringify(data)}`);
    }

    let {
      plotId
    } = data;

    if (!plotId) {
      this.plotCounter = this.plotCounter !== undefined ? this.plotCounter + 1 : 0;
      plotId = `plot-${this.plotCounter}`;
      let node = document.createElement("li");
      node.style.cssText = 'border-bottom: 1px solid #dedede;';
      var date = new Date();
      node.innerHTML = `<p style="font-size: 12px; text-align:right">${date}</p>`;
      node.setAttribute("id", plotId);
      this.loggerEl.appendChild(node);
      Plot.connect('#' + plotId);
      this.scrollBottom();
    } else {
      Plot.connect('#' + plotId);
    }

    Plot[data.type](data);
    return plotId;
  }

  async show(option = {}) {
    return await this.Plot.show(option);
  }

  progressBegin(range) {
    this.progressRange = range;
    this.progressCounter = 0;
  }

  progressUpdate(processMessage) {
    this.progressCounter += 1; // let node = this.loggerEl.getElementsByTagName("li:nth-last-of-type(1)");

    let LINodes = this.loggerEl.getElementsByTagName("li");
    let node = LINodes[LINodes.length - 1];

    if (!node || node.classList.contains("logger-progress")) {
      //create new el
      node = document.createElement("li");
      node.classList.add("logger-progress");
      this.loggerEl.appendChild(node);
    }

    let jsonNode = _prettyJson__WEBPACK_IMPORTED_MODULE_0__["default"].JSONDisplay(processMessage);
    var date = new Date();
    node.innerHTML = `<p style="font-size: 12px; text-align:right">
                    ${this.progressCounter}/${this.progressRange} ${date}</p>`;
    node.appendChild(jsonNode);
    this.scrollBottom();
  }

  progressEnd() {}

  log(message, style = '') {
    if (this.level >= this.AcceptedLevels['log']) {
      return null;
    }

    if (!this.loggerEl || !this.loggerEl.appendChild) {
      throw Error(`cannot print log`);
    }

    let node = document.createElement("li");
    node.style.cssText = 'border-bottom: 1px solid #dedede;list-style-type: none;';
    let jsonNode = _prettyJson__WEBPACK_IMPORTED_MODULE_0__["default"].JSONDisplay(message);
    var date = new Date();
    node.innerHTML = `<p style="font-size: 12px; text-align:right">${date}</p>`;
    jsonNode.style.cssText += ';' + style;
    node.appendChild(jsonNode);
    this.loggerEl.appendChild(node);
    this.scrollBottom();
    console.log(message);
  }

  debug(message) {
    if (this.level >= this.AcceptedLevels['debug']) {
      return null;
    }

    let style = 'color:' + this.colorCode['debug'];
    this.log(message, style);
  }

  warn(message) {
    if (this.level >= this.AcceptedLevels['warn']) {
      return null;
    }

    let style = 'color:' + this.colorCode['warn'];
    this.log(message, style);
  }

  error(message) {
    if (this.level >= this.AcceptedLevels['error']) {
      return null;
    }

    let style = 'color:' + this.colorCode['error'];
    this.log(message, style);
  }

};

/* harmony default export */ __webpack_exports__["default"] = (LogWebMixins);

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/index.js */"./src/index.js");


/***/ }),

/***/ "canvas":
/*!*************************!*\
  !*** external "canvas" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_canvas__;

/***/ }),

/***/ "causal-net.utils":
/*!***********************************!*\
  !*** external "causal-net.utils" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_causal_net_utils__;

/***/ }),

/***/ "cli-progress":
/*!*******************************!*\
  !*** external "cli-progress" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_cli_progress__;

/***/ }),

/***/ "d3":
/*!*********************!*\
  !*** external "d3" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_d3__;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_fs__;

/***/ }),

/***/ "open":
/*!***********************!*\
  !*** external "open" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_open__;

/***/ }),

/***/ "svg2png":
/*!**************************!*\
  !*** external "svg2png" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_svg2png__;

/***/ }),

/***/ "vivid.d3-node":
/*!********************************!*\
  !*** external "vivid.d3-node" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_vivid_d3_node__;

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xvZy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9sb2cvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9sb2cvL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvYmFzZTY0LWpzL2luZGV4LmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbG9nLy9ob21lL2h1eW5obmd1eWVuL2dpdGh1Yi9jYXVzYWxpdHkvbm9kZV9tb2R1bGVzL2J1ZmZlci9pbmRleC5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xvZy8vaG9tZS9odXluaG5ndXllbi9naXRodWIvY2F1c2FsaXR5L25vZGVfbW9kdWxlcy9idWZmZXIvbm9kZV9tb2R1bGVzL2lzYXJyYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9sb2cvL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvaWVlZTc1NC9pbmRleC5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xvZy8vaG9tZS9odXluaG5ndXllbi9naXRodWIvY2F1c2FsaXR5L25vZGVfbW9kdWxlcy9wYXRoLWJyb3dzZXJpZnkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9sb2cvL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbG9nLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xvZy8uL3NyYy9WaXZpZC9pbml0LmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbG9nLy4vc3JjL1ZpdmlkL2xpbmUuY2hhcnQubWl4aW5zLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbG9nLy4vc3JjL1ZpdmlkL3Bsb3QubWl4aW5zLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbG9nLy4vc3JjL1ZpdmlkL3NjYXR0ZXIuY2hhcnQubWl4aW5zLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbG9nLy4vc3JjL1ZpdmlkL3ZpdmlkLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbG9nLy4vc3JjL1ZpdmlkL3ZpdmlkLm1peGlucy5ub2RlLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbG9nLy4vc3JjL1ZpdmlkL3ZpdmlkLm1peGlucy53ZWIuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9sb2cvLi9zcmMvYmFzZUxvZ2dlci5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xvZy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xvZy8uL3NyYy9sb2dnZXIubWl4aW5zLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbG9nLy4vc3JjL3ByZXR0eUpzb24uanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9sb2cvLi9zcmMvdGVybUxvZ2dlci5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xvZy8uL3NyYy90ZXJtTG9nZ2VyLm1peGlucy5ub2RlLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbG9nLy4vc3JjL3Rlcm1Mb2dnZXIubWl4aW5zLndlYi5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xvZy9leHRlcm5hbCBcImNhbnZhc1wiIiwid2VicGFjazovL0BjYXVzYWxOZXQvbG9nL2V4dGVybmFsIFwiY2F1c2FsLW5ldC51dGlsc1wiIiwid2VicGFjazovL0BjYXVzYWxOZXQvbG9nL2V4dGVybmFsIFwiY2xpLXByb2dyZXNzXCIiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9sb2cvZXh0ZXJuYWwgXCJkM1wiIiwid2VicGFjazovL0BjYXVzYWxOZXQvbG9nL2V4dGVybmFsIFwiZnNcIiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xvZy9leHRlcm5hbCBcIm9wZW5cIiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xvZy9leHRlcm5hbCBcInN2ZzJwbmdcIiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xvZy9leHRlcm5hbCBcInZpdmlkLmQzLW5vZGVcIiJdLCJuYW1lcyI6WyJMaW5lQ2hhcnRNaXhpbnMiLCJCYXNlUGxvdENsYXNzIiwibGluZSIsImRhdGEiLCJ0aXRsZSIsInhSYW5nZSIsInlSYW5nZSIsInhMYWJlbCIsInlMYWJlbCIsInN0eWxlIiwid2lkdGgiLCJoZWlnaHQiLCJwbG90SWQiLCJkMyIsInVuZGVmaW5lZCIsImRlZmF1bHRTdHlsZSIsImZpbGwiLCJPYmplY3QiLCJhc3NpZ24iLCJrd2RhdGEiLCJBcnJheSIsImlzQXJyYXkiLCJtYXAiLCJkIiwiaXRoIiwiZW50cmllcyIsInJlZHVjZSIsInMiLCJrIiwic3ZnIiwieE1hcCIsInlNYXAiLCJjb2xvciIsImJhc2VQbG90IiwibGluZUdlbmVyYXRvciIsIngiLCJ5IiwiY3VydmUiLCJjdXJ2ZU1vbm90b25lWCIsImJ5TmFtZSIsIm5lc3QiLCJrZXkiLCJuYW1lIiwic2VsZWN0QWxsIiwiZW50ZXIiLCJhcHBlbmQiLCJhdHRyIiwidmFsdWVzIiwicmVwbGFjZSIsIlBsb3RNaXhpbnMiLCJCYXNlTG9nQ2xhc3MiLCJjb25uZWN0IiwidGFyZ2V0IiwiUGxvdCIsInBsb3QiLCJwbG90dGVyIiwiRXJyb3IiLCJTY2F0dGVyQ2hhcnRNaXhpbnMiLCJzY2F0dGVyIiwiQmFzZVBsb3QiLCJjb25zdHJ1Y3RvciIsIlZpdmlkIiwicGxhdGZvcm0iLCJtaXhXaXRoIiwibm9kZSIsIlZpdmlkTm9kZU1peGlucyIsIndlYiIsIlZpdmlkV2ViTWl4aW5zIiwiRGVmYXVsdFdpZHRoIiwiRGVmYXVsdEhlaWdodCIsImZvbnQiLCJwbmciLCJjYW52YXMiLCJtYWtlQ2FudmFzTm9kZSIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwiaW1hZ2VkYXRhIiwiY3JlYXRlSW1hZ2VEYXRhIiwicGl4ZWxpbmRleCIsInB1dEltYWdlRGF0YSIsImNzc1N0eWxlIiwianNvbjJjc3MiLCJwbG90TWFyZ2luIiwidG9wIiwicmlnaHQiLCJib3R0b20iLCJsZWZ0IiwicGxvdFdpZHRoIiwicGxvdEhlaWdodCIsIm1ha2VTVkdub2RlIiwic3R5bGVzIiwieERvbWFpbiIsImV4dGVudCIsInhQb2ludCIsInlQb2ludCIsInlEb21haW4iLCJzY2FsZUxpbmVhciIsInJhbmdlIiwiZG9tYWluIiwieEF4aXMiLCJheGlzQm90dG9tIiwieUF4aXMiLCJheGlzTGVmdCIsInNjYWxlT3JkaW5hbCIsInNjaGVtZUNhdGVnb3J5MTAiLCJjYWxsIiwidGV4dCIsImxlZ2VuZCIsImkiLCJwbG90U3R5bGUiLCJ2aXZpZCIsIkJhc2VWaXZpZENsYXNzIiwiY2hhbm5lbCIsImV4cG9ydDJwbmciLCJvdXRwdXRQYXRoIiwiZDNuIiwiZDNwbG90Iiwib3B0aW9ucyIsInN0cmVhbSIsInBuZ1N0cmVhbSIsInBpcGUiLCJmcyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwib24iLCJzdmdCdWZmZXIiLCJCdWZmZXIiLCJmcm9tIiwic3ZnU3RyaW5nIiwiYnVmZmVyIiwic3ZnMnBuZyIsImVyciIsIm9iamVjdFN0eWxlIiwiY3NzU3RyaW5nIiwiYWNjMSIsImN1cjEiLCJrZXlzIiwiYWNjMiIsImN1cjIiLCJjYW52YXNNb2R1bGUiLCJEM04iLCJjcmVhdGVTVkciLCJjcmVhdGVDYW52YXMiLCJzaG93Iiwib3B0aW9uIiwib3BlbiIsInJlcXVpcmUiLCJjb25zb2xlIiwibG9nIiwic3RhcnRzV2l0aCIsInNlbGVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInR5cGUiLCJpbm5lckhUTUwiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImFwcGVuZENoaWxkIiwiQmFzZUxvZ2dlciIsIkFjY2VwdGVkTGV2ZWxzIiwiZGVidWciLCJ3YXJuIiwiZXJyb3IiLCJyQWNjZXB0ZWRMZXZlbHMiLCJsZXZlbCIsIkxldmVsIiwibWVzc2FnZSIsImdyb3VwQmVnaW4iLCJncm91cEVuZCIsInByb2dyZXNzQmVnaW4iLCJwcm9ncmVzc1VwZGF0ZSIsInByb2dyZXNzRW5kIiwiTG9nZ2VyTWl4aW5zIiwiQmFzZUNsYXNzIiwiTG9nZ2VyIiwibG9nZ2VyIiwiYXNzZXJ0IiwiYmVJbnN0YW5jZU9mIiwiSnNvblZpZXciLCJKU09ORGlzcGxheSIsImpzb24iLCJvcGVuTGV2ZWxzQXJnIiwic3R5bGVPcHRpb25zQXJnIiwiREVGQVVMVF9TVFlMRV9PUFRJT05TIiwicm9vdCIsInRhZyIsInRpdGxlQ29udGFpbmVyIiwidGl0bGVUZXh0Iiwib3BlbkJ1dHRvbiIsImNvbnRlbnRzQ29udGFpbmVyIiwia2V5VmFsdWVQYWlyIiwic3ltYm9sVmFsdWUiLCJzdHJpbmdWYWx1ZSIsIm51bWJlclZhbHVlIiwiYm9vbGVhblZhbHVlIiwibnVsbFZhbHVlIiwib3BlbkxldmVscyIsImlzTmFOIiwicGFyc2VJbnQiLCJJbmZpbml0eSIsInN0eWxlT3B0aW9ucyIsIm1lcmdlU3R5bGVPcHRpb25zIiwiVHlwZUVycm9yIiwidG8iLCJpbmRleCIsImFyZ3VtZW50cyIsImxlbmd0aCIsIm5leHRTb3VyY2UiLCJuZXh0S2V5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJyZW5kZXIiLCJlbGVtZW50IiwiY3NzVGV4dCIsInZvaWRFbGVtZW50IiwiZ2V0VmFsdWUiLCJEYXRlIiwiZGF0ZUVsZW1lbnQiLCJ0b0lTT1N0cmluZyIsIm5vbkV4cGFuZGFibGVFbGVtZW50IiwidGhpc0xldmVsSXNDbG9zZWQiLCJnZXRUaXRsZSIsImNvbnZlcnRKc29uVG9FbGVtZW50cyIsIm5leHRMZXZlbElzQ2xvc2VkIiwiY29udGFpbmVyIiwiZ2V0Q29udGVudHNDb250YWluZXIiLCJnZXRTdGFuZGFyZFBhaXIiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJmb3JFYWNoIiwic3ltYm9sIiwidG9TdHJpbmciLCJvcHRpb25hbEtleSIsImxldmVsSXNDbG9zZWQiLCJjdXJyZW50bHlDbG9zZWQiLCJjb250YWluZXJFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwidGV4dEVsZW1lbnQiLCJ0aXRsZUVsZW1lbnQiLCJnZXRPcGVuQnV0dG9uIiwiZ2V0S2V5IiwiY3JlYXRlVGV4dE5vZGUiLCJvbmNsaWNrIiwiZmlyc3RDaGlsZCIsIm9iamVjdENvbnRlbnRzIiwicGFyZW50Tm9kZSIsIm5leHRTaWJsaW5nIiwiZGlzcGxheSIsInRyYW5zZm9ybSIsImJ1dHRvbkVsZW1lbnQiLCJpc0Nsb3NlZCIsInZhbHVlIiwicGFpckVsZW1lbnQiLCJrZXlFbGVtZW50IiwidmFsdWVFbGVtZW50IiwibnVsbFR5cGUiLCJkZWZhdWx0cyIsIm92ZXJyaWRlcyIsIm1lcmdlZCIsIlRlcm1Mb2dnZXIiLCJMb2dOb2RlTWl4aW5zIiwiTG9nV2ViTWl4aW5zIiwiZ3JvdXBTdGFjayIsImdyb3VwIiwiYmVnaW5UaW1lIiwicHVzaCIsImluZGVudFNwYWNlIiwicG9wIiwidGVybUxvZ2dlciIsIkxvZ0NsYXNzIiwiY3VycmVudEJhciIsIkpTT04iLCJzdHJpbmdpZnkiLCJwbG90Q291bnRlciIsInByb2Nlc3NDb3VudGVyIiwiY2xpUHJvZ3Jlc3MiLCJzaGFkZXNfY2xhc3NpYyIsInNldFRvdGFsIiwicHJvZ3Jlc3NNZXNzYWdlIiwidXBkYXRlIiwic3RvcCIsImRvY3VtZW50RWwiLCJnZXRFbGVtZW50QnlJZCIsImJvZHkiLCJmcmFtZUVsIiwibG9nZ2VyRWwiLCJjb2xvckNvZGUiLCJzY3JvbGxCb3R0b20iLCJzY3JvbGxUb3AiLCJzY3JvbGxIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJkYXRlIiwicHJvZ3Jlc3NSYW5nZSIsInByb2dyZXNzQ291bnRlciIsInByb2Nlc3NNZXNzYWdlIiwiTElOb2RlcyIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiYWRkIiwianNvbk5vZGUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxP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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsVUFBVTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsWUFBWTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLHVDQUF1QyxTQUFTO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsaUJBQWlCO0FBQ2hDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxpQkFBaUI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFNBQVM7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixTQUFTO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixTQUFTO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELEVBQUU7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWlCLFNBQVM7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGVBQWU7QUFDdkM7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0Esd0JBQXdCLFFBQVE7QUFDaEM7QUFDQSxxQkFBcUIsZUFBZTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsWUFBWTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLFNBQVM7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixTQUFTO0FBQzlCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQixTQUFTO0FBQzlCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixrQkFBa0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLG1CQUFtQixjQUFjO0FBQ2pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQsT0FBTztBQUM5RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVELE9BQU87QUFDOUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCO0FBQ2xCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUJBQXFCLFFBQVE7QUFDN0I7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLGVBQWUsU0FBUztBQUN4QjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQixTQUFTO0FBQzVCO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGlCQUFpQjtBQUNoQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixZQUFZO0FBQzdCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsZ0JBQWdCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGdCQUFnQjtBQUNqQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsWUFBWTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzV2REEsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLFdBQVc7O0FBRW5CO0FBQ0E7QUFDQTtBQUNBLFFBQVEsV0FBVzs7QUFFbkI7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFFBQVEsV0FBVzs7QUFFbkI7QUFDQTtBQUNBLFFBQVEsVUFBVTs7QUFFbEI7QUFDQTs7Ozs7Ozs7Ozs7O0FDbkZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsUUFBUTtBQUN4QztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVSxNQUFNO0FBQ2hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixJQUFJO0FBQ2pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9DQUFvQyw4QkFBOEI7QUFDbEU7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVLG9CQUFvQjtBQUM5QjtBQUNBOztBQUVBO0FBQ0EsVUFBVSxVQUFVO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQixZQUFZO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwrQkFBK0Isc0JBQXNCO0FBQ3JEO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsZUFBZTtBQUNsQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUMvTkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFDQUFxQzs7QUFFckM7QUFDQTtBQUNBOztBQUVBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsVUFBVTs7Ozs7Ozs7Ozs7O0FDdkx0Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUE0Qzs7QUFFNUM7Ozs7Ozs7Ozs7Ozs7QUNuQkE7QUFBQTtB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QUNIOztBQUVEeUosTUFBSSxDQUFDSyxPQUFELEVBQVM7QUFDVCxRQUFHLEtBQUtGLEtBQUwsSUFBYyxLQUFLTCxjQUFMLENBQW9CLE1BQXBCLENBQWpCLEVBQTZDO0FBQ3pDLGFBQU8sSUFBUDtBQUNIOztBQUNELFFBQUl2SixLQUFLLEdBQUcsV0FBVyxLQUFLcVIsU0FBTCxDQUFlLE1BQWYsQ0FBdkI7QUFDQSxTQUFLekksR0FBTCxDQUFTa0IsT0FBVCxFQUFrQjlKLEtBQWxCO0FBQ0g7O0FBRUQwSixPQUFLLENBQUNJLE9BQUQsRUFBUztBQUNWLFFBQUcsS0FBS0YsS0FBTCxJQUFjLEtBQUtMLGNBQUwsQ0FBb0IsT0FBcEIsQ0FBakIsRUFBOEM7QUFDMUMsYUFBTyxJQUFQO0FBQ0g7O0FBQ0QsUUFBSXZKLEtBQUssR0FBRyxXQUFXLEtBQUtxUixTQUFMLENBQWUsT0FBZixDQUF2QjtBQUNBLFNBQUt6SSxHQUFMLENBQVNrQixPQUFULEVBQWtCOUosS0FBbEI7QUFDSDs7QUF4SG1ELENBQXhEOztBQTJIZTRQLDJFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUhBLG9EOzs7Ozs7Ozs7OztBQ0FBLDhEOzs7Ozs7Ozs7OztBQ0FBLDBEOzs7Ozs7Ozs7OztBQ0FBLGdEOzs7Ozs7Ozs7OztBQ0FBLGdEOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLDJEIiwiZmlsZSI6IkBjYXVzYWxOZXQvbG9nLm5vZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJjYW52YXNcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnV0aWxzXCIpLCByZXF1aXJlKFwiY2xpLXByb2dyZXNzXCIpLCByZXF1aXJlKFwiZDNcIiksIHJlcXVpcmUoXCJmc1wiKSwgcmVxdWlyZShcIm9wZW5cIiksIHJlcXVpcmUoXCJzdmcycG5nXCIpLCByZXF1aXJlKFwidml2aWQuZDMtbm9kZVwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJjYW52YXNcIiwgXCJjYXVzYWwtbmV0LnV0aWxzXCIsIFwiY2xpLXByb2dyZXNzXCIsIFwiZDNcIiwgXCJmc1wiLCBcIm9wZW5cIiwgXCJzdmcycG5nXCIsIFwidml2aWQuZDMtbm9kZVwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJAY2F1c2FsTmV0L2xvZ1wiXSA9IGZhY3RvcnkocmVxdWlyZShcImNhbnZhc1wiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQudXRpbHNcIiksIHJlcXVpcmUoXCJjbGktcHJvZ3Jlc3NcIiksIHJlcXVpcmUoXCJkM1wiKSwgcmVxdWlyZShcImZzXCIpLCByZXF1aXJlKFwib3BlblwiKSwgcmVxdWlyZShcInN2ZzJwbmdcIiksIHJlcXVpcmUoXCJ2aXZpZC5kMy1ub2RlXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJAY2F1c2FsTmV0L2xvZ1wiXSA9IGZhY3Rvcnkocm9vdFtcImNhbnZhc1wiXSwgcm9vdFtcImNhdXNhbC1uZXQudXRpbHNcIl0sIHJvb3RbXCJjbGktcHJvZ3Jlc3NcIl0sIHJvb3RbXCJkM1wiXSwgcm9vdFtcImZzXCJdLCByb290W1wib3BlblwiXSwgcm9vdFtcInN2ZzJwbmdcIl0sIHJvb3RbXCJ2aXZpZC5kMy1ub2RlXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2FudmFzX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF91dGlsc19fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NsaV9wcm9ncmVzc19fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2QzX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZnNfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9vcGVuX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfc3ZnMnBuZ19fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3ZpdmlkX2QzX25vZGVfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIid1c2Ugc3RyaWN0J1xuXG5leHBvcnRzLmJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoXG5leHBvcnRzLnRvQnl0ZUFycmF5ID0gdG9CeXRlQXJyYXlcbmV4cG9ydHMuZnJvbUJ5dGVBcnJheSA9IGZyb21CeXRlQXJyYXlcblxudmFyIGxvb2t1cCA9IFtdXG52YXIgcmV2TG9va3VwID0gW11cbnZhciBBcnIgPSB0eXBlb2YgVWludDhBcnJheSAhPT0gJ3VuZGVmaW5lZCcgPyBVaW50OEFycmF5IDogQXJyYXlcblxudmFyIGNvZGUgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLydcbmZvciAodmFyIGkgPSAwLCBsZW4gPSBjb2RlLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gIGxvb2t1cFtpXSA9IGNvZGVbaV1cbiAgcmV2TG9va3VwW2NvZGUuY2hhckNvZGVBdChpKV0gPSBpXG59XG5cbi8vIFN1cHBvcnQgZGVjb2RpbmcgVVJMLXNhZmUgYmFzZTY0IHN0cmluZ3MsIGFzIE5vZGUuanMgZG9lcy5cbi8vIFNlZTogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQmFzZTY0I1VSTF9hcHBsaWNhdGlvbnNcbnJldkxvb2t1cFsnLScuY2hhckNvZGVBdCgwKV0gPSA2MlxucmV2TG9va3VwWydfJy5jaGFyQ29kZUF0KDApXSA9IDYzXG5cbmZ1bmN0aW9uIGdldExlbnMgKGI2NCkge1xuICB2YXIgbGVuID0gYjY0Lmxlbmd0aFxuXG4gIGlmIChsZW4gJSA0ID4gMCkge1xuICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBzdHJpbmcuIExlbmd0aCBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgNCcpXG4gIH1cblxuICAvLyBUcmltIG9mZiBleHRyYSBieXRlcyBhZnRlciBwbGFjZWhvbGRlciBieXRlcyBhcmUgZm91bmRcbiAgLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vYmVhdGdhbW1pdC9iYXNlNjQtanMvaXNzdWVzLzQyXG4gIHZhciB2YWxpZExlbiA9IGI2NC5pbmRleE9mKCc9JylcbiAgaWYgKHZhbGlkTGVuID09PSAtMSkgdmFsaWRMZW4gPSBsZW5cblxuICB2YXIgcGxhY2VIb2xkZXJzTGVuID0gdmFsaWRMZW4gPT09IGxlblxuICAgID8gMFxuICAgIDogNCAtICh2YWxpZExlbiAlIDQpXG5cbiAgcmV0dXJuIFt2YWxpZExlbiwgcGxhY2VIb2xkZXJzTGVuXVxufVxuXG4vLyBiYXNlNjQgaXMgNC8zICsgdXAgdG8gdHdvIGNoYXJhY3RlcnMgb2YgdGhlIG9yaWdpbmFsIGRhdGFcbmZ1bmN0aW9uIGJ5dGVMZW5ndGggKGI2NCkge1xuICB2YXIgbGVucyA9IGdldExlbnMoYjY0KVxuICB2YXIgdmFsaWRMZW4gPSBsZW5zWzBdXG4gIHZhciBwbGFjZUhvbGRlcnNMZW4gPSBsZW5zWzFdXG4gIHJldHVybiAoKHZhbGlkTGVuICsgcGxhY2VIb2xkZXJzTGVuKSAqIDMgLyA0KSAtIHBsYWNlSG9sZGVyc0xlblxufVxuXG5mdW5jdGlvbiBfYnl0ZUxlbmd0aCAoYjY0LCB2YWxpZExlbiwgcGxhY2VIb2xkZXJzTGVuKSB7XG4gIHJldHVybiAoKHZhbGlkTGVuICsgcGxhY2VIb2xkZXJzTGVuKSAqIDMgLyA0KSAtIHBsYWNlSG9sZGVyc0xlblxufVxuXG5mdW5jdGlvbiB0b0J5dGVBcnJheSAoYjY0KSB7XG4gIHZhciB0bXBcbiAgdmFyIGxlbnMgPSBnZXRMZW5zKGI2NClcbiAgdmFyIHZhbGlkTGVuID0gbGVuc1swXVxuICB2YXIgcGxhY2VIb2xkZXJzTGVuID0gbGVuc1sxXVxuXG4gIHZhciBhcnIgPSBuZXcgQXJyKF9ieXRlTGVuZ3RoKGI2NCwgdmFsaWRMZW4sIHBsYWNlSG9sZGVyc0xlbikpXG5cbiAgdmFyIGN1ckJ5dGUgPSAwXG5cbiAgLy8gaWYgdGhlcmUgYXJlIHBsYWNlaG9sZGVycywgb25seSBnZXQgdXAgdG8gdGhlIGxhc3QgY29tcGxldGUgNCBjaGFyc1xuICB2YXIgbGVuID0gcGxhY2VIb2xkZXJzTGVuID4gMFxuICAgID8gdmFsaWRMZW4gLSA0XG4gICAgOiB2YWxpZExlblxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpICs9IDQpIHtcbiAgICB0bXAgPVxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpKV0gPDwgMTgpIHxcbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDEpXSA8PCAxMikgfFxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMildIDw8IDYpIHxcbiAgICAgIHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMyldXG4gICAgYXJyW2N1ckJ5dGUrK10gPSAodG1wID4+IDE2KSAmIDB4RkZcbiAgICBhcnJbY3VyQnl0ZSsrXSA9ICh0bXAgPj4gOCkgJiAweEZGXG4gICAgYXJyW2N1ckJ5dGUrK10gPSB0bXAgJiAweEZGXG4gIH1cblxuICBpZiAocGxhY2VIb2xkZXJzTGVuID09PSAyKSB7XG4gICAgdG1wID1cbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSldIDw8IDIpIHxcbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDEpXSA+PiA0KVxuICAgIGFycltjdXJCeXRlKytdID0gdG1wICYgMHhGRlxuICB9XG5cbiAgaWYgKHBsYWNlSG9sZGVyc0xlbiA9PT0gMSkge1xuICAgIHRtcCA9XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkpXSA8PCAxMCkgfFxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMSldIDw8IDQpIHxcbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDIpXSA+PiAyKVxuICAgIGFycltjdXJCeXRlKytdID0gKHRtcCA+PiA4KSAmIDB4RkZcbiAgICBhcnJbY3VyQnl0ZSsrXSA9IHRtcCAmIDB4RkZcbiAgfVxuXG4gIHJldHVybiBhcnJcbn1cblxuZnVuY3Rpb24gdHJpcGxldFRvQmFzZTY0IChudW0pIHtcbiAgcmV0dXJuIGxvb2t1cFtudW0gPj4gMTggJiAweDNGXSArXG4gICAgbG9va3VwW251bSA+PiAxMiAmIDB4M0ZdICtcbiAgICBsb29rdXBbbnVtID4+IDYgJiAweDNGXSArXG4gICAgbG9va3VwW251bSAmIDB4M0ZdXG59XG5cbmZ1bmN0aW9uIGVuY29kZUNodW5rICh1aW50OCwgc3RhcnQsIGVuZCkge1xuICB2YXIgdG1wXG4gIHZhciBvdXRwdXQgPSBbXVxuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkgKz0gMykge1xuICAgIHRtcCA9XG4gICAgICAoKHVpbnQ4W2ldIDw8IDE2KSAmIDB4RkYwMDAwKSArXG4gICAgICAoKHVpbnQ4W2kgKyAxXSA8PCA4KSAmIDB4RkYwMCkgK1xuICAgICAgKHVpbnQ4W2kgKyAyXSAmIDB4RkYpXG4gICAgb3V0cHV0LnB1c2godHJpcGxldFRvQmFzZTY0KHRtcCkpXG4gIH1cbiAgcmV0dXJuIG91dHB1dC5qb2luKCcnKVxufVxuXG5mdW5jdGlvbiBmcm9tQnl0ZUFycmF5ICh1aW50OCkge1xuICB2YXIgdG1wXG4gIHZhciBsZW4gPSB1aW50OC5sZW5ndGhcbiAgdmFyIGV4dHJhQnl0ZXMgPSBsZW4gJSAzIC8vIGlmIHdlIGhhdmUgMSBieXRlIGxlZnQsIHBhZCAyIGJ5dGVzXG4gIHZhciBwYXJ0cyA9IFtdXG4gIHZhciBtYXhDaHVua0xlbmd0aCA9IDE2MzgzIC8vIG11c3QgYmUgbXVsdGlwbGUgb2YgM1xuXG4gIC8vIGdvIHRocm91Z2ggdGhlIGFycmF5IGV2ZXJ5IHRocmVlIGJ5dGVzLCB3ZSdsbCBkZWFsIHdpdGggdHJhaWxpbmcgc3R1ZmYgbGF0ZXJcbiAgZm9yICh2YXIgaSA9IDAsIGxlbjIgPSBsZW4gLSBleHRyYUJ5dGVzOyBpIDwgbGVuMjsgaSArPSBtYXhDaHVua0xlbmd0aCkge1xuICAgIHBhcnRzLnB1c2goZW5jb2RlQ2h1bmsoXG4gICAgICB1aW50OCwgaSwgKGkgKyBtYXhDaHVua0xlbmd0aCkgPiBsZW4yID8gbGVuMiA6IChpICsgbWF4Q2h1bmtMZW5ndGgpXG4gICAgKSlcbiAgfVxuXG4gIC8vIHBhZCB0aGUgZW5kIHdpdGggemVyb3MsIGJ1dCBtYWtlIHN1cmUgdG8gbm90IGZvcmdldCB0aGUgZXh0cmEgYnl0ZXNcbiAgaWYgKGV4dHJhQnl0ZXMgPT09IDEpIHtcbiAgICB0bXAgPSB1aW50OFtsZW4gLSAxXVxuICAgIHBhcnRzLnB1c2goXG4gICAgICBsb29rdXBbdG1wID4+IDJdICtcbiAgICAgIGxvb2t1cFsodG1wIDw8IDQpICYgMHgzRl0gK1xuICAgICAgJz09J1xuICAgIClcbiAgfSBlbHNlIGlmIChleHRyYUJ5dGVzID09PSAyKSB7XG4gICAgdG1wID0gKHVpbnQ4W2xlbiAtIDJdIDw8IDgpICsgdWludDhbbGVuIC0gMV1cbiAgICBwYXJ0cy5wdXNoKFxuICAgICAgbG9va3VwW3RtcCA+PiAxMF0gK1xuICAgICAgbG9va3VwWyh0bXAgPj4gNCkgJiAweDNGXSArXG4gICAgICBsb29rdXBbKHRtcCA8PCAyKSAmIDB4M0ZdICtcbiAgICAgICc9J1xuICAgIClcbiAgfVxuXG4gIHJldHVybiBwYXJ0cy5qb2luKCcnKVxufVxuIiwiLyohXG4gKiBUaGUgYnVmZmVyIG1vZHVsZSBmcm9tIG5vZGUuanMsIGZvciB0aGUgYnJvd3Nlci5cbiAqXG4gKiBAYXV0aG9yICAgRmVyb3NzIEFib3VraGFkaWplaCA8ZmVyb3NzQGZlcm9zcy5vcmc+IDxodHRwOi8vZmVyb3NzLm9yZz5cbiAqIEBsaWNlbnNlICBNSVRcbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcHJvdG8gKi9cblxuJ3VzZSBzdHJpY3QnXG5cbnZhciBiYXNlNjQgPSByZXF1aXJlKCdiYXNlNjQtanMnKVxudmFyIGllZWU3NTQgPSByZXF1aXJlKCdpZWVlNzU0JylcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnaXNhcnJheScpXG5cbmV4cG9ydHMuQnVmZmVyID0gQnVmZmVyXG5leHBvcnRzLlNsb3dCdWZmZXIgPSBTbG93QnVmZmVyXG5leHBvcnRzLklOU1BFQ1RfTUFYX0JZVEVTID0gNTBcblxuLyoqXG4gKiBJZiBgQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlRgOlxuICogICA9PT0gdHJ1ZSAgICBVc2UgVWludDhBcnJheSBpbXBsZW1lbnRhdGlvbiAoZmFzdGVzdClcbiAqICAgPT09IGZhbHNlICAgVXNlIE9iamVjdCBpbXBsZW1lbnRhdGlvbiAobW9zdCBjb21wYXRpYmxlLCBldmVuIElFNilcbiAqXG4gKiBCcm93c2VycyB0aGF0IHN1cHBvcnQgdHlwZWQgYXJyYXlzIGFyZSBJRSAxMCssIEZpcmVmb3ggNCssIENocm9tZSA3KywgU2FmYXJpIDUuMSssXG4gKiBPcGVyYSAxMS42KywgaU9TIDQuMisuXG4gKlxuICogRHVlIHRvIHZhcmlvdXMgYnJvd3NlciBidWdzLCBzb21ldGltZXMgdGhlIE9iamVjdCBpbXBsZW1lbnRhdGlvbiB3aWxsIGJlIHVzZWQgZXZlblxuICogd2hlbiB0aGUgYnJvd3NlciBzdXBwb3J0cyB0eXBlZCBhcnJheXMuXG4gKlxuICogTm90ZTpcbiAqXG4gKiAgIC0gRmlyZWZveCA0LTI5IGxhY2tzIHN1cHBvcnQgZm9yIGFkZGluZyBuZXcgcHJvcGVydGllcyB0byBgVWludDhBcnJheWAgaW5zdGFuY2VzLFxuICogICAgIFNlZTogaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9Njk1NDM4LlxuICpcbiAqICAgLSBDaHJvbWUgOS0xMCBpcyBtaXNzaW5nIHRoZSBgVHlwZWRBcnJheS5wcm90b3R5cGUuc3ViYXJyYXlgIGZ1bmN0aW9uLlxuICpcbiAqICAgLSBJRTEwIGhhcyBhIGJyb2tlbiBgVHlwZWRBcnJheS5wcm90b3R5cGUuc3ViYXJyYXlgIGZ1bmN0aW9uIHdoaWNoIHJldHVybnMgYXJyYXlzIG9mXG4gKiAgICAgaW5jb3JyZWN0IGxlbmd0aCBpbiBzb21lIHNpdHVhdGlvbnMuXG5cbiAqIFdlIGRldGVjdCB0aGVzZSBidWdneSBicm93c2VycyBhbmQgc2V0IGBCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVGAgdG8gYGZhbHNlYCBzbyB0aGV5XG4gKiBnZXQgdGhlIE9iamVjdCBpbXBsZW1lbnRhdGlvbiwgd2hpY2ggaXMgc2xvd2VyIGJ1dCBiZWhhdmVzIGNvcnJlY3RseS5cbiAqL1xuQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQgPSBnbG9iYWwuVFlQRURfQVJSQVlfU1VQUE9SVCAhPT0gdW5kZWZpbmVkXG4gID8gZ2xvYmFsLlRZUEVEX0FSUkFZX1NVUFBPUlRcbiAgOiB0eXBlZEFycmF5U3VwcG9ydCgpXG5cbi8qXG4gKiBFeHBvcnQga01heExlbmd0aCBhZnRlciB0eXBlZCBhcnJheSBzdXBwb3J0IGlzIGRldGVybWluZWQuXG4gKi9cbmV4cG9ydHMua01heExlbmd0aCA9IGtNYXhMZW5ndGgoKVxuXG5mdW5jdGlvbiB0eXBlZEFycmF5U3VwcG9ydCAoKSB7XG4gIHRyeSB7XG4gICAgdmFyIGFyciA9IG5ldyBVaW50OEFycmF5KDEpXG4gICAgYXJyLl9fcHJvdG9fXyA9IHtfX3Byb3RvX186IFVpbnQ4QXJyYXkucHJvdG90eXBlLCBmb286IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDQyIH19XG4gICAgcmV0dXJuIGFyci5mb28oKSA9PT0gNDIgJiYgLy8gdHlwZWQgYXJyYXkgaW5zdGFuY2VzIGNhbiBiZSBhdWdtZW50ZWRcbiAgICAgICAgdHlwZW9mIGFyci5zdWJhcnJheSA9PT0gJ2Z1bmN0aW9uJyAmJiAvLyBjaHJvbWUgOS0xMCBsYWNrIGBzdWJhcnJheWBcbiAgICAgICAgYXJyLnN1YmFycmF5KDEsIDEpLmJ5dGVMZW5ndGggPT09IDAgLy8gaWUxMCBoYXMgYnJva2VuIGBzdWJhcnJheWBcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbmZ1bmN0aW9uIGtNYXhMZW5ndGggKCkge1xuICByZXR1cm4gQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlRcbiAgICA/IDB4N2ZmZmZmZmZcbiAgICA6IDB4M2ZmZmZmZmZcbn1cblxuZnVuY3Rpb24gY3JlYXRlQnVmZmVyICh0aGF0LCBsZW5ndGgpIHtcbiAgaWYgKGtNYXhMZW5ndGgoKSA8IGxlbmd0aCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbnZhbGlkIHR5cGVkIGFycmF5IGxlbmd0aCcpXG4gIH1cbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgLy8gUmV0dXJuIGFuIGF1Z21lbnRlZCBgVWludDhBcnJheWAgaW5zdGFuY2UsIGZvciBiZXN0IHBlcmZvcm1hbmNlXG4gICAgdGhhdCA9IG5ldyBVaW50OEFycmF5KGxlbmd0aClcbiAgICB0aGF0Ll9fcHJvdG9fXyA9IEJ1ZmZlci5wcm90b3R5cGVcbiAgfSBlbHNlIHtcbiAgICAvLyBGYWxsYmFjazogUmV0dXJuIGFuIG9iamVjdCBpbnN0YW5jZSBvZiB0aGUgQnVmZmVyIGNsYXNzXG4gICAgaWYgKHRoYXQgPT09IG51bGwpIHtcbiAgICAgIHRoYXQgPSBuZXcgQnVmZmVyKGxlbmd0aClcbiAgICB9XG4gICAgdGhhdC5sZW5ndGggPSBsZW5ndGhcbiAgfVxuXG4gIHJldHVybiB0aGF0XG59XG5cbi8qKlxuICogVGhlIEJ1ZmZlciBjb25zdHJ1Y3RvciByZXR1cm5zIGluc3RhbmNlcyBvZiBgVWludDhBcnJheWAgdGhhdCBoYXZlIHRoZWlyXG4gKiBwcm90b3R5cGUgY2hhbmdlZCB0byBgQnVmZmVyLnByb3RvdHlwZWAuIEZ1cnRoZXJtb3JlLCBgQnVmZmVyYCBpcyBhIHN1YmNsYXNzIG9mXG4gKiBgVWludDhBcnJheWAsIHNvIHRoZSByZXR1cm5lZCBpbnN0YW5jZXMgd2lsbCBoYXZlIGFsbCB0aGUgbm9kZSBgQnVmZmVyYCBtZXRob2RzXG4gKiBhbmQgdGhlIGBVaW50OEFycmF5YCBtZXRob2RzLiBTcXVhcmUgYnJhY2tldCBub3RhdGlvbiB3b3JrcyBhcyBleHBlY3RlZCAtLSBpdFxuICogcmV0dXJucyBhIHNpbmdsZSBvY3RldC5cbiAqXG4gKiBUaGUgYFVpbnQ4QXJyYXlgIHByb3RvdHlwZSByZW1haW5zIHVubW9kaWZpZWQuXG4gKi9cblxuZnVuY3Rpb24gQnVmZmVyIChhcmcsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aCkge1xuICBpZiAoIUJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUICYmICEodGhpcyBpbnN0YW5jZW9mIEJ1ZmZlcikpIHtcbiAgICByZXR1cm4gbmV3IEJ1ZmZlcihhcmcsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aClcbiAgfVxuXG4gIC8vIENvbW1vbiBjYXNlLlxuICBpZiAodHlwZW9mIGFyZyA9PT0gJ251bWJlcicpIHtcbiAgICBpZiAodHlwZW9mIGVuY29kaW5nT3JPZmZzZXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdJZiBlbmNvZGluZyBpcyBzcGVjaWZpZWQgdGhlbiB0aGUgZmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhIHN0cmluZydcbiAgICAgIClcbiAgICB9XG4gICAgcmV0dXJuIGFsbG9jVW5zYWZlKHRoaXMsIGFyZylcbiAgfVxuICByZXR1cm4gZnJvbSh0aGlzLCBhcmcsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aClcbn1cblxuQnVmZmVyLnBvb2xTaXplID0gODE5MiAvLyBub3QgdXNlZCBieSB0aGlzIGltcGxlbWVudGF0aW9uXG5cbi8vIFRPRE86IExlZ2FjeSwgbm90IG5lZWRlZCBhbnltb3JlLiBSZW1vdmUgaW4gbmV4dCBtYWpvciB2ZXJzaW9uLlxuQnVmZmVyLl9hdWdtZW50ID0gZnVuY3Rpb24gKGFycikge1xuICBhcnIuX19wcm90b19fID0gQnVmZmVyLnByb3RvdHlwZVxuICByZXR1cm4gYXJyXG59XG5cbmZ1bmN0aW9uIGZyb20gKHRoYXQsIHZhbHVlLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcInZhbHVlXCIgYXJndW1lbnQgbXVzdCBub3QgYmUgYSBudW1iZXInKVxuICB9XG5cbiAgaWYgKHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcgJiYgdmFsdWUgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikge1xuICAgIHJldHVybiBmcm9tQXJyYXlCdWZmZXIodGhhdCwgdmFsdWUsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aClcbiAgfVxuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGZyb21TdHJpbmcodGhhdCwgdmFsdWUsIGVuY29kaW5nT3JPZmZzZXQpXG4gIH1cblxuICByZXR1cm4gZnJvbU9iamVjdCh0aGF0LCB2YWx1ZSlcbn1cblxuLyoqXG4gKiBGdW5jdGlvbmFsbHkgZXF1aXZhbGVudCB0byBCdWZmZXIoYXJnLCBlbmNvZGluZykgYnV0IHRocm93cyBhIFR5cGVFcnJvclxuICogaWYgdmFsdWUgaXMgYSBudW1iZXIuXG4gKiBCdWZmZXIuZnJvbShzdHJbLCBlbmNvZGluZ10pXG4gKiBCdWZmZXIuZnJvbShhcnJheSlcbiAqIEJ1ZmZlci5mcm9tKGJ1ZmZlcilcbiAqIEJ1ZmZlci5mcm9tKGFycmF5QnVmZmVyWywgYnl0ZU9mZnNldFssIGxlbmd0aF1dKVxuICoqL1xuQnVmZmVyLmZyb20gPSBmdW5jdGlvbiAodmFsdWUsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gZnJvbShudWxsLCB2YWx1ZSwgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKVxufVxuXG5pZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgQnVmZmVyLnByb3RvdHlwZS5fX3Byb3RvX18gPSBVaW50OEFycmF5LnByb3RvdHlwZVxuICBCdWZmZXIuX19wcm90b19fID0gVWludDhBcnJheVxuICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnNwZWNpZXMgJiZcbiAgICAgIEJ1ZmZlcltTeW1ib2wuc3BlY2llc10gPT09IEJ1ZmZlcikge1xuICAgIC8vIEZpeCBzdWJhcnJheSgpIGluIEVTMjAxNi4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZmVyb3NzL2J1ZmZlci9wdWxsLzk3XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEJ1ZmZlciwgU3ltYm9sLnNwZWNpZXMsIHtcbiAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSlcbiAgfVxufVxuXG5mdW5jdGlvbiBhc3NlcnRTaXplIChzaXplKSB7XG4gIGlmICh0eXBlb2Ygc2l6ZSAhPT0gJ251bWJlcicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcInNpemVcIiBhcmd1bWVudCBtdXN0IGJlIGEgbnVtYmVyJylcbiAgfSBlbHNlIGlmIChzaXplIDwgMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdcInNpemVcIiBhcmd1bWVudCBtdXN0IG5vdCBiZSBuZWdhdGl2ZScpXG4gIH1cbn1cblxuZnVuY3Rpb24gYWxsb2MgKHRoYXQsIHNpemUsIGZpbGwsIGVuY29kaW5nKSB7XG4gIGFzc2VydFNpemUoc2l6ZSlcbiAgaWYgKHNpemUgPD0gMCkge1xuICAgIHJldHVybiBjcmVhdGVCdWZmZXIodGhhdCwgc2l6ZSlcbiAgfVxuICBpZiAoZmlsbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgLy8gT25seSBwYXkgYXR0ZW50aW9uIHRvIGVuY29kaW5nIGlmIGl0J3MgYSBzdHJpbmcuIFRoaXNcbiAgICAvLyBwcmV2ZW50cyBhY2NpZGVudGFsbHkgc2VuZGluZyBpbiBhIG51bWJlciB0aGF0IHdvdWxkXG4gICAgLy8gYmUgaW50ZXJwcmV0dGVkIGFzIGEgc3RhcnQgb2Zmc2V0LlxuICAgIHJldHVybiB0eXBlb2YgZW5jb2RpbmcgPT09ICdzdHJpbmcnXG4gICAgICA/IGNyZWF0ZUJ1ZmZlcih0aGF0LCBzaXplKS5maWxsKGZpbGwsIGVuY29kaW5nKVxuICAgICAgOiBjcmVhdGVCdWZmZXIodGhhdCwgc2l6ZSkuZmlsbChmaWxsKVxuICB9XG4gIHJldHVybiBjcmVhdGVCdWZmZXIodGhhdCwgc2l6ZSlcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IGZpbGxlZCBCdWZmZXIgaW5zdGFuY2UuXG4gKiBhbGxvYyhzaXplWywgZmlsbFssIGVuY29kaW5nXV0pXG4gKiovXG5CdWZmZXIuYWxsb2MgPSBmdW5jdGlvbiAoc2l6ZSwgZmlsbCwgZW5jb2RpbmcpIHtcbiAgcmV0dXJuIGFsbG9jKG51bGwsIHNpemUsIGZpbGwsIGVuY29kaW5nKVxufVxuXG5mdW5jdGlvbiBhbGxvY1Vuc2FmZSAodGhhdCwgc2l6ZSkge1xuICBhc3NlcnRTaXplKHNpemUpXG4gIHRoYXQgPSBjcmVhdGVCdWZmZXIodGhhdCwgc2l6ZSA8IDAgPyAwIDogY2hlY2tlZChzaXplKSB8IDApXG4gIGlmICghQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNpemU7ICsraSkge1xuICAgICAgdGhhdFtpXSA9IDBcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRoYXRcbn1cblxuLyoqXG4gKiBFcXVpdmFsZW50IHRvIEJ1ZmZlcihudW0pLCBieSBkZWZhdWx0IGNyZWF0ZXMgYSBub24temVyby1maWxsZWQgQnVmZmVyIGluc3RhbmNlLlxuICogKi9cbkJ1ZmZlci5hbGxvY1Vuc2FmZSA9IGZ1bmN0aW9uIChzaXplKSB7XG4gIHJldHVybiBhbGxvY1Vuc2FmZShudWxsLCBzaXplKVxufVxuLyoqXG4gKiBFcXVpdmFsZW50IHRvIFNsb3dCdWZmZXIobnVtKSwgYnkgZGVmYXVsdCBjcmVhdGVzIGEgbm9uLXplcm8tZmlsbGVkIEJ1ZmZlciBpbnN0YW5jZS5cbiAqL1xuQnVmZmVyLmFsbG9jVW5zYWZlU2xvdyA9IGZ1bmN0aW9uIChzaXplKSB7XG4gIHJldHVybiBhbGxvY1Vuc2FmZShudWxsLCBzaXplKVxufVxuXG5mdW5jdGlvbiBmcm9tU3RyaW5nICh0aGF0LCBzdHJpbmcsIGVuY29kaW5nKSB7XG4gIGlmICh0eXBlb2YgZW5jb2RpbmcgIT09ICdzdHJpbmcnIHx8IGVuY29kaW5nID09PSAnJykge1xuICAgIGVuY29kaW5nID0gJ3V0ZjgnXG4gIH1cblxuICBpZiAoIUJ1ZmZlci5pc0VuY29kaW5nKGVuY29kaW5nKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wiZW5jb2RpbmdcIiBtdXN0IGJlIGEgdmFsaWQgc3RyaW5nIGVuY29kaW5nJylcbiAgfVxuXG4gIHZhciBsZW5ndGggPSBieXRlTGVuZ3RoKHN0cmluZywgZW5jb2RpbmcpIHwgMFxuICB0aGF0ID0gY3JlYXRlQnVmZmVyKHRoYXQsIGxlbmd0aClcblxuICB2YXIgYWN0dWFsID0gdGhhdC53cml0ZShzdHJpbmcsIGVuY29kaW5nKVxuXG4gIGlmIChhY3R1YWwgIT09IGxlbmd0aCkge1xuICAgIC8vIFdyaXRpbmcgYSBoZXggc3RyaW5nLCBmb3IgZXhhbXBsZSwgdGhhdCBjb250YWlucyBpbnZhbGlkIGNoYXJhY3RlcnMgd2lsbFxuICAgIC8vIGNhdXNlIGV2ZXJ5dGhpbmcgYWZ0ZXIgdGhlIGZpcnN0IGludmFsaWQgY2hhcmFjdGVyIHRvIGJlIGlnbm9yZWQuIChlLmcuXG4gICAgLy8gJ2FieHhjZCcgd2lsbCBiZSB0cmVhdGVkIGFzICdhYicpXG4gICAgdGhhdCA9IHRoYXQuc2xpY2UoMCwgYWN0dWFsKVxuICB9XG5cbiAgcmV0dXJuIHRoYXRcbn1cblxuZnVuY3Rpb24gZnJvbUFycmF5TGlrZSAodGhhdCwgYXJyYXkpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aCA8IDAgPyAwIDogY2hlY2tlZChhcnJheS5sZW5ndGgpIHwgMFxuICB0aGF0ID0gY3JlYXRlQnVmZmVyKHRoYXQsIGxlbmd0aClcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgIHRoYXRbaV0gPSBhcnJheVtpXSAmIDI1NVxuICB9XG4gIHJldHVybiB0aGF0XG59XG5cbmZ1bmN0aW9uIGZyb21BcnJheUJ1ZmZlciAodGhhdCwgYXJyYXksIGJ5dGVPZmZzZXQsIGxlbmd0aCkge1xuICBhcnJheS5ieXRlTGVuZ3RoIC8vIHRoaXMgdGhyb3dzIGlmIGBhcnJheWAgaXMgbm90IGEgdmFsaWQgQXJyYXlCdWZmZXJcblxuICBpZiAoYnl0ZU9mZnNldCA8IDAgfHwgYXJyYXkuYnl0ZUxlbmd0aCA8IGJ5dGVPZmZzZXQpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignXFwnb2Zmc2V0XFwnIGlzIG91dCBvZiBib3VuZHMnKVxuICB9XG5cbiAgaWYgKGFycmF5LmJ5dGVMZW5ndGggPCBieXRlT2Zmc2V0ICsgKGxlbmd0aCB8fCAwKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdcXCdsZW5ndGhcXCcgaXMgb3V0IG9mIGJvdW5kcycpXG4gIH1cblxuICBpZiAoYnl0ZU9mZnNldCA9PT0gdW5kZWZpbmVkICYmIGxlbmd0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgYXJyYXkgPSBuZXcgVWludDhBcnJheShhcnJheSlcbiAgfSBlbHNlIGlmIChsZW5ndGggPT09IHVuZGVmaW5lZCkge1xuICAgIGFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXksIGJ5dGVPZmZzZXQpXG4gIH0gZWxzZSB7XG4gICAgYXJyYXkgPSBuZXcgVWludDhBcnJheShhcnJheSwgYnl0ZU9mZnNldCwgbGVuZ3RoKVxuICB9XG5cbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgLy8gUmV0dXJuIGFuIGF1Z21lbnRlZCBgVWludDhBcnJheWAgaW5zdGFuY2UsIGZvciBiZXN0IHBlcmZvcm1hbmNlXG4gICAgdGhhdCA9IGFycmF5XG4gICAgdGhhdC5fX3Byb3RvX18gPSBCdWZmZXIucHJvdG90eXBlXG4gIH0gZWxzZSB7XG4gICAgLy8gRmFsbGJhY2s6IFJldHVybiBhbiBvYmplY3QgaW5zdGFuY2Ugb2YgdGhlIEJ1ZmZlciBjbGFzc1xuICAgIHRoYXQgPSBmcm9tQXJyYXlMaWtlKHRoYXQsIGFycmF5KVxuICB9XG4gIHJldHVybiB0aGF0XG59XG5cbmZ1bmN0aW9uIGZyb21PYmplY3QgKHRoYXQsIG9iaikge1xuICBpZiAoQnVmZmVyLmlzQnVmZmVyKG9iaikpIHtcbiAgICB2YXIgbGVuID0gY2hlY2tlZChvYmoubGVuZ3RoKSB8IDBcbiAgICB0aGF0ID0gY3JlYXRlQnVmZmVyKHRoYXQsIGxlbilcblxuICAgIGlmICh0aGF0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHRoYXRcbiAgICB9XG5cbiAgICBvYmouY29weSh0aGF0LCAwLCAwLCBsZW4pXG4gICAgcmV0dXJuIHRoYXRcbiAgfVxuXG4gIGlmIChvYmopIHtcbiAgICBpZiAoKHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgb2JqLmJ1ZmZlciBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSB8fCAnbGVuZ3RoJyBpbiBvYmopIHtcbiAgICAgIGlmICh0eXBlb2Ygb2JqLmxlbmd0aCAhPT0gJ251bWJlcicgfHwgaXNuYW4ob2JqLmxlbmd0aCkpIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUJ1ZmZlcih0aGF0LCAwKVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZyb21BcnJheUxpa2UodGhhdCwgb2JqKVxuICAgIH1cblxuICAgIGlmIChvYmoudHlwZSA9PT0gJ0J1ZmZlcicgJiYgaXNBcnJheShvYmouZGF0YSkpIHtcbiAgICAgIHJldHVybiBmcm9tQXJyYXlMaWtlKHRoYXQsIG9iai5kYXRhKVxuICAgIH1cbiAgfVxuXG4gIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ZpcnN0IGFyZ3VtZW50IG11c3QgYmUgYSBzdHJpbmcsIEJ1ZmZlciwgQXJyYXlCdWZmZXIsIEFycmF5LCBvciBhcnJheS1saWtlIG9iamVjdC4nKVxufVxuXG5mdW5jdGlvbiBjaGVja2VkIChsZW5ndGgpIHtcbiAgLy8gTm90ZTogY2Fubm90IHVzZSBgbGVuZ3RoIDwga01heExlbmd0aCgpYCBoZXJlIGJlY2F1c2UgdGhhdCBmYWlscyB3aGVuXG4gIC8vIGxlbmd0aCBpcyBOYU4gKHdoaWNoIGlzIG90aGVyd2lzZSBjb2VyY2VkIHRvIHplcm8uKVxuICBpZiAobGVuZ3RoID49IGtNYXhMZW5ndGgoKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdBdHRlbXB0IHRvIGFsbG9jYXRlIEJ1ZmZlciBsYXJnZXIgdGhhbiBtYXhpbXVtICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICdzaXplOiAweCcgKyBrTWF4TGVuZ3RoKCkudG9TdHJpbmcoMTYpICsgJyBieXRlcycpXG4gIH1cbiAgcmV0dXJuIGxlbmd0aCB8IDBcbn1cblxuZnVuY3Rpb24gU2xvd0J1ZmZlciAobGVuZ3RoKSB7XG4gIGlmICgrbGVuZ3RoICE9IGxlbmd0aCkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGVxZXFlcVxuICAgIGxlbmd0aCA9IDBcbiAgfVxuICByZXR1cm4gQnVmZmVyLmFsbG9jKCtsZW5ndGgpXG59XG5cbkJ1ZmZlci5pc0J1ZmZlciA9IGZ1bmN0aW9uIGlzQnVmZmVyIChiKSB7XG4gIHJldHVybiAhIShiICE9IG51bGwgJiYgYi5faXNCdWZmZXIpXG59XG5cbkJ1ZmZlci5jb21wYXJlID0gZnVuY3Rpb24gY29tcGFyZSAoYSwgYikge1xuICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihhKSB8fCAhQnVmZmVyLmlzQnVmZmVyKGIpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnRzIG11c3QgYmUgQnVmZmVycycpXG4gIH1cblxuICBpZiAoYSA9PT0gYikgcmV0dXJuIDBcblxuICB2YXIgeCA9IGEubGVuZ3RoXG4gIHZhciB5ID0gYi5sZW5ndGhcblxuICBmb3IgKHZhciBpID0gMCwgbGVuID0gTWF0aC5taW4oeCwgeSk7IGkgPCBsZW47ICsraSkge1xuICAgIGlmIChhW2ldICE9PSBiW2ldKSB7XG4gICAgICB4ID0gYVtpXVxuICAgICAgeSA9IGJbaV1cbiAgICAgIGJyZWFrXG4gICAgfVxuICB9XG5cbiAgaWYgKHggPCB5KSByZXR1cm4gLTFcbiAgaWYgKHkgPCB4KSByZXR1cm4gMVxuICByZXR1cm4gMFxufVxuXG5CdWZmZXIuaXNFbmNvZGluZyA9IGZ1bmN0aW9uIGlzRW5jb2RpbmcgKGVuY29kaW5nKSB7XG4gIHN3aXRjaCAoU3RyaW5nKGVuY29kaW5nKS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgY2FzZSAnaGV4JzpcbiAgICBjYXNlICd1dGY4JzpcbiAgICBjYXNlICd1dGYtOCc6XG4gICAgY2FzZSAnYXNjaWknOlxuICAgIGNhc2UgJ2xhdGluMSc6XG4gICAgY2FzZSAnYmluYXJ5JzpcbiAgICBjYXNlICdiYXNlNjQnOlxuICAgIGNhc2UgJ3VjczInOlxuICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICBjYXNlICd1dGYxNmxlJzpcbiAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG5CdWZmZXIuY29uY2F0ID0gZnVuY3Rpb24gY29uY2F0IChsaXN0LCBsZW5ndGgpIHtcbiAgaWYgKCFpc0FycmF5KGxpc3QpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJsaXN0XCIgYXJndW1lbnQgbXVzdCBiZSBhbiBBcnJheSBvZiBCdWZmZXJzJylcbiAgfVxuXG4gIGlmIChsaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBCdWZmZXIuYWxsb2MoMClcbiAgfVxuXG4gIHZhciBpXG4gIGlmIChsZW5ndGggPT09IHVuZGVmaW5lZCkge1xuICAgIGxlbmd0aCA9IDBcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7ICsraSkge1xuICAgICAgbGVuZ3RoICs9IGxpc3RbaV0ubGVuZ3RoXG4gICAgfVxuICB9XG5cbiAgdmFyIGJ1ZmZlciA9IEJ1ZmZlci5hbGxvY1Vuc2FmZShsZW5ndGgpXG4gIHZhciBwb3MgPSAwXG4gIGZvciAoaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgKytpKSB7XG4gICAgdmFyIGJ1ZiA9IGxpc3RbaV1cbiAgICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihidWYpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcImxpc3RcIiBhcmd1bWVudCBtdXN0IGJlIGFuIEFycmF5IG9mIEJ1ZmZlcnMnKVxuICAgIH1cbiAgICBidWYuY29weShidWZmZXIsIHBvcylcbiAgICBwb3MgKz0gYnVmLmxlbmd0aFxuICB9XG4gIHJldHVybiBidWZmZXJcbn1cblxuZnVuY3Rpb24gYnl0ZUxlbmd0aCAoc3RyaW5nLCBlbmNvZGluZykge1xuICBpZiAoQnVmZmVyLmlzQnVmZmVyKHN0cmluZykpIHtcbiAgICByZXR1cm4gc3RyaW5nLmxlbmd0aFxuICB9XG4gIGlmICh0eXBlb2YgQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBBcnJheUJ1ZmZlci5pc1ZpZXcgPT09ICdmdW5jdGlvbicgJiZcbiAgICAgIChBcnJheUJ1ZmZlci5pc1ZpZXcoc3RyaW5nKSB8fCBzdHJpbmcgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikpIHtcbiAgICByZXR1cm4gc3RyaW5nLmJ5dGVMZW5ndGhcbiAgfVxuICBpZiAodHlwZW9mIHN0cmluZyAhPT0gJ3N0cmluZycpIHtcbiAgICBzdHJpbmcgPSAnJyArIHN0cmluZ1xuICB9XG5cbiAgdmFyIGxlbiA9IHN0cmluZy5sZW5ndGhcbiAgaWYgKGxlbiA9PT0gMCkgcmV0dXJuIDBcblxuICAvLyBVc2UgYSBmb3IgbG9vcCB0byBhdm9pZCByZWN1cnNpb25cbiAgdmFyIGxvd2VyZWRDYXNlID0gZmFsc2VcbiAgZm9yICg7Oykge1xuICAgIHN3aXRjaCAoZW5jb2RpbmcpIHtcbiAgICAgIGNhc2UgJ2FzY2lpJzpcbiAgICAgIGNhc2UgJ2xhdGluMSc6XG4gICAgICBjYXNlICdiaW5hcnknOlxuICAgICAgICByZXR1cm4gbGVuXG4gICAgICBjYXNlICd1dGY4JzpcbiAgICAgIGNhc2UgJ3V0Zi04JzpcbiAgICAgIGNhc2UgdW5kZWZpbmVkOlxuICAgICAgICByZXR1cm4gdXRmOFRvQnl0ZXMoc3RyaW5nKS5sZW5ndGhcbiAgICAgIGNhc2UgJ3VjczInOlxuICAgICAgY2FzZSAndWNzLTInOlxuICAgICAgY2FzZSAndXRmMTZsZSc6XG4gICAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICAgIHJldHVybiBsZW4gKiAyXG4gICAgICBjYXNlICdoZXgnOlxuICAgICAgICByZXR1cm4gbGVuID4+PiAxXG4gICAgICBjYXNlICdiYXNlNjQnOlxuICAgICAgICByZXR1cm4gYmFzZTY0VG9CeXRlcyhzdHJpbmcpLmxlbmd0aFxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKGxvd2VyZWRDYXNlKSByZXR1cm4gdXRmOFRvQnl0ZXMoc3RyaW5nKS5sZW5ndGggLy8gYXNzdW1lIHV0ZjhcbiAgICAgICAgZW5jb2RpbmcgPSAoJycgKyBlbmNvZGluZykudG9Mb3dlckNhc2UoKVxuICAgICAgICBsb3dlcmVkQ2FzZSA9IHRydWVcbiAgICB9XG4gIH1cbn1cbkJ1ZmZlci5ieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aFxuXG5mdW5jdGlvbiBzbG93VG9TdHJpbmcgKGVuY29kaW5nLCBzdGFydCwgZW5kKSB7XG4gIHZhciBsb3dlcmVkQ2FzZSA9IGZhbHNlXG5cbiAgLy8gTm8gbmVlZCB0byB2ZXJpZnkgdGhhdCBcInRoaXMubGVuZ3RoIDw9IE1BWF9VSU5UMzJcIiBzaW5jZSBpdCdzIGEgcmVhZC1vbmx5XG4gIC8vIHByb3BlcnR5IG9mIGEgdHlwZWQgYXJyYXkuXG5cbiAgLy8gVGhpcyBiZWhhdmVzIG5laXRoZXIgbGlrZSBTdHJpbmcgbm9yIFVpbnQ4QXJyYXkgaW4gdGhhdCB3ZSBzZXQgc3RhcnQvZW5kXG4gIC8vIHRvIHRoZWlyIHVwcGVyL2xvd2VyIGJvdW5kcyBpZiB0aGUgdmFsdWUgcGFzc2VkIGlzIG91dCBvZiByYW5nZS5cbiAgLy8gdW5kZWZpbmVkIGlzIGhhbmRsZWQgc3BlY2lhbGx5IGFzIHBlciBFQ01BLTI2MiA2dGggRWRpdGlvbixcbiAgLy8gU2VjdGlvbiAxMy4zLjMuNyBSdW50aW1lIFNlbWFudGljczogS2V5ZWRCaW5kaW5nSW5pdGlhbGl6YXRpb24uXG4gIGlmIChzdGFydCA9PT0gdW5kZWZpbmVkIHx8IHN0YXJ0IDwgMCkge1xuICAgIHN0YXJ0ID0gMFxuICB9XG4gIC8vIFJldHVybiBlYXJseSBpZiBzdGFydCA+IHRoaXMubGVuZ3RoLiBEb25lIGhlcmUgdG8gcHJldmVudCBwb3RlbnRpYWwgdWludDMyXG4gIC8vIGNvZXJjaW9uIGZhaWwgYmVsb3cuXG4gIGlmIChzdGFydCA+IHRoaXMubGVuZ3RoKSB7XG4gICAgcmV0dXJuICcnXG4gIH1cblxuICBpZiAoZW5kID09PSB1bmRlZmluZWQgfHwgZW5kID4gdGhpcy5sZW5ndGgpIHtcbiAgICBlbmQgPSB0aGlzLmxlbmd0aFxuICB9XG5cbiAgaWYgKGVuZCA8PSAwKSB7XG4gICAgcmV0dXJuICcnXG4gIH1cblxuICAvLyBGb3JjZSBjb2Vyc2lvbiB0byB1aW50MzIuIFRoaXMgd2lsbCBhbHNvIGNvZXJjZSBmYWxzZXkvTmFOIHZhbHVlcyB0byAwLlxuICBlbmQgPj4+PSAwXG4gIHN0YXJ0ID4+Pj0gMFxuXG4gIGlmIChlbmQgPD0gc3RhcnQpIHtcbiAgICByZXR1cm4gJydcbiAgfVxuXG4gIGlmICghZW5jb2RpbmcpIGVuY29kaW5nID0gJ3V0ZjgnXG5cbiAgd2hpbGUgKHRydWUpIHtcbiAgICBzd2l0Y2ggKGVuY29kaW5nKSB7XG4gICAgICBjYXNlICdoZXgnOlxuICAgICAgICByZXR1cm4gaGV4U2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAndXRmOCc6XG4gICAgICBjYXNlICd1dGYtOCc6XG4gICAgICAgIHJldHVybiB1dGY4U2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAnYXNjaWknOlxuICAgICAgICByZXR1cm4gYXNjaWlTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICdsYXRpbjEnOlxuICAgICAgY2FzZSAnYmluYXJ5JzpcbiAgICAgICAgcmV0dXJuIGxhdGluMVNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgICAgIHJldHVybiBiYXNlNjRTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICd1Y3MyJzpcbiAgICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgICByZXR1cm4gdXRmMTZsZVNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlmIChsb3dlcmVkQ2FzZSkgdGhyb3cgbmV3IFR5cGVFcnJvcignVW5rbm93biBlbmNvZGluZzogJyArIGVuY29kaW5nKVxuICAgICAgICBlbmNvZGluZyA9IChlbmNvZGluZyArICcnKS50b0xvd2VyQ2FzZSgpXG4gICAgICAgIGxvd2VyZWRDYXNlID0gdHJ1ZVxuICAgIH1cbiAgfVxufVxuXG4vLyBUaGUgcHJvcGVydHkgaXMgdXNlZCBieSBgQnVmZmVyLmlzQnVmZmVyYCBhbmQgYGlzLWJ1ZmZlcmAgKGluIFNhZmFyaSA1LTcpIHRvIGRldGVjdFxuLy8gQnVmZmVyIGluc3RhbmNlcy5cbkJ1ZmZlci5wcm90b3R5cGUuX2lzQnVmZmVyID0gdHJ1ZVxuXG5mdW5jdGlvbiBzd2FwIChiLCBuLCBtKSB7XG4gIHZhciBpID0gYltuXVxuICBiW25dID0gYlttXVxuICBiW21dID0gaVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnN3YXAxNiA9IGZ1bmN0aW9uIHN3YXAxNiAoKSB7XG4gIHZhciBsZW4gPSB0aGlzLmxlbmd0aFxuICBpZiAobGVuICUgMiAhPT0gMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdCdWZmZXIgc2l6ZSBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgMTYtYml0cycpXG4gIH1cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkgKz0gMikge1xuICAgIHN3YXAodGhpcywgaSwgaSArIDEpXG4gIH1cbiAgcmV0dXJuIHRoaXNcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5zd2FwMzIgPSBmdW5jdGlvbiBzd2FwMzIgKCkge1xuICB2YXIgbGVuID0gdGhpcy5sZW5ndGhcbiAgaWYgKGxlbiAlIDQgIT09IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQnVmZmVyIHNpemUgbXVzdCBiZSBhIG11bHRpcGxlIG9mIDMyLWJpdHMnKVxuICB9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpICs9IDQpIHtcbiAgICBzd2FwKHRoaXMsIGksIGkgKyAzKVxuICAgIHN3YXAodGhpcywgaSArIDEsIGkgKyAyKVxuICB9XG4gIHJldHVybiB0aGlzXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuc3dhcDY0ID0gZnVuY3Rpb24gc3dhcDY0ICgpIHtcbiAgdmFyIGxlbiA9IHRoaXMubGVuZ3RoXG4gIGlmIChsZW4gJSA4ICE9PSAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0J1ZmZlciBzaXplIG11c3QgYmUgYSBtdWx0aXBsZSBvZiA2NC1iaXRzJylcbiAgfVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSArPSA4KSB7XG4gICAgc3dhcCh0aGlzLCBpLCBpICsgNylcbiAgICBzd2FwKHRoaXMsIGkgKyAxLCBpICsgNilcbiAgICBzd2FwKHRoaXMsIGkgKyAyLCBpICsgNSlcbiAgICBzd2FwKHRoaXMsIGkgKyAzLCBpICsgNClcbiAgfVxuICByZXR1cm4gdGhpc1xufVxuXG5CdWZmZXIucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcgKCkge1xuICB2YXIgbGVuZ3RoID0gdGhpcy5sZW5ndGggfCAwXG4gIGlmIChsZW5ndGggPT09IDApIHJldHVybiAnJ1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHV0ZjhTbGljZSh0aGlzLCAwLCBsZW5ndGgpXG4gIHJldHVybiBzbG93VG9TdHJpbmcuYXBwbHkodGhpcywgYXJndW1lbnRzKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLmVxdWFscyA9IGZ1bmN0aW9uIGVxdWFscyAoYikge1xuICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihiKSkgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnQgbXVzdCBiZSBhIEJ1ZmZlcicpXG4gIGlmICh0aGlzID09PSBiKSByZXR1cm4gdHJ1ZVxuICByZXR1cm4gQnVmZmVyLmNvbXBhcmUodGhpcywgYikgPT09IDBcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5pbnNwZWN0ID0gZnVuY3Rpb24gaW5zcGVjdCAoKSB7XG4gIHZhciBzdHIgPSAnJ1xuICB2YXIgbWF4ID0gZXhwb3J0cy5JTlNQRUNUX01BWF9CWVRFU1xuICBpZiAodGhpcy5sZW5ndGggPiAwKSB7XG4gICAgc3RyID0gdGhpcy50b1N0cmluZygnaGV4JywgMCwgbWF4KS5tYXRjaCgvLnsyfS9nKS5qb2luKCcgJylcbiAgICBpZiAodGhpcy5sZW5ndGggPiBtYXgpIHN0ciArPSAnIC4uLiAnXG4gIH1cbiAgcmV0dXJuICc8QnVmZmVyICcgKyBzdHIgKyAnPidcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5jb21wYXJlID0gZnVuY3Rpb24gY29tcGFyZSAodGFyZ2V0LCBzdGFydCwgZW5kLCB0aGlzU3RhcnQsIHRoaXNFbmQpIHtcbiAgaWYgKCFCdWZmZXIuaXNCdWZmZXIodGFyZ2V0KSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50IG11c3QgYmUgYSBCdWZmZXInKVxuICB9XG5cbiAgaWYgKHN0YXJ0ID09PSB1bmRlZmluZWQpIHtcbiAgICBzdGFydCA9IDBcbiAgfVxuICBpZiAoZW5kID09PSB1bmRlZmluZWQpIHtcbiAgICBlbmQgPSB0YXJnZXQgPyB0YXJnZXQubGVuZ3RoIDogMFxuICB9XG4gIGlmICh0aGlzU3RhcnQgPT09IHVuZGVmaW5lZCkge1xuICAgIHRoaXNTdGFydCA9IDBcbiAgfVxuICBpZiAodGhpc0VuZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhpc0VuZCA9IHRoaXMubGVuZ3RoXG4gIH1cblxuICBpZiAoc3RhcnQgPCAwIHx8IGVuZCA+IHRhcmdldC5sZW5ndGggfHwgdGhpc1N0YXJ0IDwgMCB8fCB0aGlzRW5kID4gdGhpcy5sZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignb3V0IG9mIHJhbmdlIGluZGV4JylcbiAgfVxuXG4gIGlmICh0aGlzU3RhcnQgPj0gdGhpc0VuZCAmJiBzdGFydCA+PSBlbmQpIHtcbiAgICByZXR1cm4gMFxuICB9XG4gIGlmICh0aGlzU3RhcnQgPj0gdGhpc0VuZCkge1xuICAgIHJldHVybiAtMVxuICB9XG4gIGlmIChzdGFydCA+PSBlbmQpIHtcbiAgICByZXR1cm4gMVxuICB9XG5cbiAgc3RhcnQgPj4+PSAwXG4gIGVuZCA+Pj49IDBcbiAgdGhpc1N0YXJ0ID4+Pj0gMFxuICB0aGlzRW5kID4+Pj0gMFxuXG4gIGlmICh0aGlzID09PSB0YXJnZXQpIHJldHVybiAwXG5cbiAgdmFyIHggPSB0aGlzRW5kIC0gdGhpc1N0YXJ0XG4gIHZhciB5ID0gZW5kIC0gc3RhcnRcbiAgdmFyIGxlbiA9IE1hdGgubWluKHgsIHkpXG5cbiAgdmFyIHRoaXNDb3B5ID0gdGhpcy5zbGljZSh0aGlzU3RhcnQsIHRoaXNFbmQpXG4gIHZhciB0YXJnZXRDb3B5ID0gdGFyZ2V0LnNsaWNlKHN0YXJ0LCBlbmQpXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47ICsraSkge1xuICAgIGlmICh0aGlzQ29weVtpXSAhPT0gdGFyZ2V0Q29weVtpXSkge1xuICAgICAgeCA9IHRoaXNDb3B5W2ldXG4gICAgICB5ID0gdGFyZ2V0Q29weVtpXVxuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cblxuICBpZiAoeCA8IHkpIHJldHVybiAtMVxuICBpZiAoeSA8IHgpIHJldHVybiAxXG4gIHJldHVybiAwXG59XG5cbi8vIEZpbmRzIGVpdGhlciB0aGUgZmlyc3QgaW5kZXggb2YgYHZhbGAgaW4gYGJ1ZmZlcmAgYXQgb2Zmc2V0ID49IGBieXRlT2Zmc2V0YCxcbi8vIE9SIHRoZSBsYXN0IGluZGV4IG9mIGB2YWxgIGluIGBidWZmZXJgIGF0IG9mZnNldCA8PSBgYnl0ZU9mZnNldGAuXG4vL1xuLy8gQXJndW1lbnRzOlxuLy8gLSBidWZmZXIgLSBhIEJ1ZmZlciB0byBzZWFyY2hcbi8vIC0gdmFsIC0gYSBzdHJpbmcsIEJ1ZmZlciwgb3IgbnVtYmVyXG4vLyAtIGJ5dGVPZmZzZXQgLSBhbiBpbmRleCBpbnRvIGBidWZmZXJgOyB3aWxsIGJlIGNsYW1wZWQgdG8gYW4gaW50MzJcbi8vIC0gZW5jb2RpbmcgLSBhbiBvcHRpb25hbCBlbmNvZGluZywgcmVsZXZhbnQgaXMgdmFsIGlzIGEgc3RyaW5nXG4vLyAtIGRpciAtIHRydWUgZm9yIGluZGV4T2YsIGZhbHNlIGZvciBsYXN0SW5kZXhPZlxuZnVuY3Rpb24gYmlkaXJlY3Rpb25hbEluZGV4T2YgKGJ1ZmZlciwgdmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZywgZGlyKSB7XG4gIC8vIEVtcHR5IGJ1ZmZlciBtZWFucyBubyBtYXRjaFxuICBpZiAoYnVmZmVyLmxlbmd0aCA9PT0gMCkgcmV0dXJuIC0xXG5cbiAgLy8gTm9ybWFsaXplIGJ5dGVPZmZzZXRcbiAgaWYgKHR5cGVvZiBieXRlT2Zmc2V0ID09PSAnc3RyaW5nJykge1xuICAgIGVuY29kaW5nID0gYnl0ZU9mZnNldFxuICAgIGJ5dGVPZmZzZXQgPSAwXG4gIH0gZWxzZSBpZiAoYnl0ZU9mZnNldCA+IDB4N2ZmZmZmZmYpIHtcbiAgICBieXRlT2Zmc2V0ID0gMHg3ZmZmZmZmZlxuICB9IGVsc2UgaWYgKGJ5dGVPZmZzZXQgPCAtMHg4MDAwMDAwMCkge1xuICAgIGJ5dGVPZmZzZXQgPSAtMHg4MDAwMDAwMFxuICB9XG4gIGJ5dGVPZmZzZXQgPSArYnl0ZU9mZnNldCAgLy8gQ29lcmNlIHRvIE51bWJlci5cbiAgaWYgKGlzTmFOKGJ5dGVPZmZzZXQpKSB7XG4gICAgLy8gYnl0ZU9mZnNldDogaXQgaXQncyB1bmRlZmluZWQsIG51bGwsIE5hTiwgXCJmb29cIiwgZXRjLCBzZWFyY2ggd2hvbGUgYnVmZmVyXG4gICAgYnl0ZU9mZnNldCA9IGRpciA/IDAgOiAoYnVmZmVyLmxlbmd0aCAtIDEpXG4gIH1cblxuICAvLyBOb3JtYWxpemUgYnl0ZU9mZnNldDogbmVnYXRpdmUgb2Zmc2V0cyBzdGFydCBmcm9tIHRoZSBlbmQgb2YgdGhlIGJ1ZmZlclxuICBpZiAoYnl0ZU9mZnNldCA8IDApIGJ5dGVPZmZzZXQgPSBidWZmZXIubGVuZ3RoICsgYnl0ZU9mZnNldFxuICBpZiAoYnl0ZU9mZnNldCA+PSBidWZmZXIubGVuZ3RoKSB7XG4gICAgaWYgKGRpcikgcmV0dXJuIC0xXG4gICAgZWxzZSBieXRlT2Zmc2V0ID0gYnVmZmVyLmxlbmd0aCAtIDFcbiAgfSBlbHNlIGlmIChieXRlT2Zmc2V0IDwgMCkge1xuICAgIGlmIChkaXIpIGJ5dGVPZmZzZXQgPSAwXG4gICAgZWxzZSByZXR1cm4gLTFcbiAgfVxuXG4gIC8vIE5vcm1hbGl6ZSB2YWxcbiAgaWYgKHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnKSB7XG4gICAgdmFsID0gQnVmZmVyLmZyb20odmFsLCBlbmNvZGluZylcbiAgfVxuXG4gIC8vIEZpbmFsbHksIHNlYXJjaCBlaXRoZXIgaW5kZXhPZiAoaWYgZGlyIGlzIHRydWUpIG9yIGxhc3RJbmRleE9mXG4gIGlmIChCdWZmZXIuaXNCdWZmZXIodmFsKSkge1xuICAgIC8vIFNwZWNpYWwgY2FzZTogbG9va2luZyBmb3IgZW1wdHkgc3RyaW5nL2J1ZmZlciBhbHdheXMgZmFpbHNcbiAgICBpZiAodmFsLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIC0xXG4gICAgfVxuICAgIHJldHVybiBhcnJheUluZGV4T2YoYnVmZmVyLCB2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCBkaXIpXG4gIH0gZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHtcbiAgICB2YWwgPSB2YWwgJiAweEZGIC8vIFNlYXJjaCBmb3IgYSBieXRlIHZhbHVlIFswLTI1NV1cbiAgICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQgJiZcbiAgICAgICAgdHlwZW9mIFVpbnQ4QXJyYXkucHJvdG90eXBlLmluZGV4T2YgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGlmIChkaXIpIHtcbiAgICAgICAgcmV0dXJuIFVpbnQ4QXJyYXkucHJvdG90eXBlLmluZGV4T2YuY2FsbChidWZmZXIsIHZhbCwgYnl0ZU9mZnNldClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBVaW50OEFycmF5LnByb3RvdHlwZS5sYXN0SW5kZXhPZi5jYWxsKGJ1ZmZlciwgdmFsLCBieXRlT2Zmc2V0KVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYXJyYXlJbmRleE9mKGJ1ZmZlciwgWyB2YWwgXSwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIGRpcilcbiAgfVxuXG4gIHRocm93IG5ldyBUeXBlRXJyb3IoJ3ZhbCBtdXN0IGJlIHN0cmluZywgbnVtYmVyIG9yIEJ1ZmZlcicpXG59XG5cbmZ1bmN0aW9uIGFycmF5SW5kZXhPZiAoYXJyLCB2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCBkaXIpIHtcbiAgdmFyIGluZGV4U2l6ZSA9IDFcbiAgdmFyIGFyckxlbmd0aCA9IGFyci5sZW5ndGhcbiAgdmFyIHZhbExlbmd0aCA9IHZhbC5sZW5ndGhcblxuICBpZiAoZW5jb2RpbmcgIT09IHVuZGVmaW5lZCkge1xuICAgIGVuY29kaW5nID0gU3RyaW5nKGVuY29kaW5nKS50b0xvd2VyQ2FzZSgpXG4gICAgaWYgKGVuY29kaW5nID09PSAndWNzMicgfHwgZW5jb2RpbmcgPT09ICd1Y3MtMicgfHxcbiAgICAgICAgZW5jb2RpbmcgPT09ICd1dGYxNmxlJyB8fCBlbmNvZGluZyA9PT0gJ3V0Zi0xNmxlJykge1xuICAgICAgaWYgKGFyci5sZW5ndGggPCAyIHx8IHZhbC5sZW5ndGggPCAyKSB7XG4gICAgICAgIHJldHVybiAtMVxuICAgICAgfVxuICAgICAgaW5kZXhTaXplID0gMlxuICAgICAgYXJyTGVuZ3RoIC89IDJcbiAgICAgIHZhbExlbmd0aCAvPSAyXG4gICAgICBieXRlT2Zmc2V0IC89IDJcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZWFkIChidWYsIGkpIHtcbiAgICBpZiAoaW5kZXhTaXplID09PSAxKSB7XG4gICAgICByZXR1cm4gYnVmW2ldXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBidWYucmVhZFVJbnQxNkJFKGkgKiBpbmRleFNpemUpXG4gICAgfVxuICB9XG5cbiAgdmFyIGlcbiAgaWYgKGRpcikge1xuICAgIHZhciBmb3VuZEluZGV4ID0gLTFcbiAgICBmb3IgKGkgPSBieXRlT2Zmc2V0OyBpIDwgYXJyTGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChyZWFkKGFyciwgaSkgPT09IHJlYWQodmFsLCBmb3VuZEluZGV4ID09PSAtMSA/IDAgOiBpIC0gZm91bmRJbmRleCkpIHtcbiAgICAgICAgaWYgKGZvdW5kSW5kZXggPT09IC0xKSBmb3VuZEluZGV4ID0gaVxuICAgICAgICBpZiAoaSAtIGZvdW5kSW5kZXggKyAxID09PSB2YWxMZW5ndGgpIHJldHVybiBmb3VuZEluZGV4ICogaW5kZXhTaXplXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoZm91bmRJbmRleCAhPT0gLTEpIGkgLT0gaSAtIGZvdW5kSW5kZXhcbiAgICAgICAgZm91bmRJbmRleCA9IC0xXG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmIChieXRlT2Zmc2V0ICsgdmFsTGVuZ3RoID4gYXJyTGVuZ3RoKSBieXRlT2Zmc2V0ID0gYXJyTGVuZ3RoIC0gdmFsTGVuZ3RoXG4gICAgZm9yIChpID0gYnl0ZU9mZnNldDsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIHZhciBmb3VuZCA9IHRydWVcbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdmFsTGVuZ3RoOyBqKyspIHtcbiAgICAgICAgaWYgKHJlYWQoYXJyLCBpICsgaikgIT09IHJlYWQodmFsLCBqKSkge1xuICAgICAgICAgIGZvdW5kID0gZmFsc2VcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoZm91bmQpIHJldHVybiBpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIC0xXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuaW5jbHVkZXMgPSBmdW5jdGlvbiBpbmNsdWRlcyAodmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZykge1xuICByZXR1cm4gdGhpcy5pbmRleE9mKHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcpICE9PSAtMVxufVxuXG5CdWZmZXIucHJvdG90eXBlLmluZGV4T2YgPSBmdW5jdGlvbiBpbmRleE9mICh2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nKSB7XG4gIHJldHVybiBiaWRpcmVjdGlvbmFsSW5kZXhPZih0aGlzLCB2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCB0cnVlKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLmxhc3RJbmRleE9mID0gZnVuY3Rpb24gbGFzdEluZGV4T2YgKHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcpIHtcbiAgcmV0dXJuIGJpZGlyZWN0aW9uYWxJbmRleE9mKHRoaXMsIHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIGZhbHNlKVxufVxuXG5mdW5jdGlvbiBoZXhXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIG9mZnNldCA9IE51bWJlcihvZmZzZXQpIHx8IDBcbiAgdmFyIHJlbWFpbmluZyA9IGJ1Zi5sZW5ndGggLSBvZmZzZXRcbiAgaWYgKCFsZW5ndGgpIHtcbiAgICBsZW5ndGggPSByZW1haW5pbmdcbiAgfSBlbHNlIHtcbiAgICBsZW5ndGggPSBOdW1iZXIobGVuZ3RoKVxuICAgIGlmIChsZW5ndGggPiByZW1haW5pbmcpIHtcbiAgICAgIGxlbmd0aCA9IHJlbWFpbmluZ1xuICAgIH1cbiAgfVxuXG4gIC8vIG11c3QgYmUgYW4gZXZlbiBudW1iZXIgb2YgZGlnaXRzXG4gIHZhciBzdHJMZW4gPSBzdHJpbmcubGVuZ3RoXG4gIGlmIChzdHJMZW4gJSAyICE9PSAwKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIGhleCBzdHJpbmcnKVxuXG4gIGlmIChsZW5ndGggPiBzdHJMZW4gLyAyKSB7XG4gICAgbGVuZ3RoID0gc3RyTGVuIC8gMlxuICB9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyArK2kpIHtcbiAgICB2YXIgcGFyc2VkID0gcGFyc2VJbnQoc3RyaW5nLnN1YnN0cihpICogMiwgMiksIDE2KVxuICAgIGlmIChpc05hTihwYXJzZWQpKSByZXR1cm4gaVxuICAgIGJ1ZltvZmZzZXQgKyBpXSA9IHBhcnNlZFxuICB9XG4gIHJldHVybiBpXG59XG5cbmZ1bmN0aW9uIHV0ZjhXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBibGl0QnVmZmVyKHV0ZjhUb0J5dGVzKHN0cmluZywgYnVmLmxlbmd0aCAtIG9mZnNldCksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG59XG5cbmZ1bmN0aW9uIGFzY2lpV3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gYmxpdEJ1ZmZlcihhc2NpaVRvQnl0ZXMoc3RyaW5nKSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbn1cblxuZnVuY3Rpb24gbGF0aW4xV3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gYXNjaWlXcml0ZShidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG59XG5cbmZ1bmN0aW9uIGJhc2U2NFdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGJsaXRCdWZmZXIoYmFzZTY0VG9CeXRlcyhzdHJpbmcpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxufVxuXG5mdW5jdGlvbiB1Y3MyV3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gYmxpdEJ1ZmZlcih1dGYxNmxlVG9CeXRlcyhzdHJpbmcsIGJ1Zi5sZW5ndGggLSBvZmZzZXQpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlID0gZnVuY3Rpb24gd3JpdGUgKHN0cmluZywgb2Zmc2V0LCBsZW5ndGgsIGVuY29kaW5nKSB7XG4gIC8vIEJ1ZmZlciN3cml0ZShzdHJpbmcpXG4gIGlmIChvZmZzZXQgPT09IHVuZGVmaW5lZCkge1xuICAgIGVuY29kaW5nID0gJ3V0ZjgnXG4gICAgbGVuZ3RoID0gdGhpcy5sZW5ndGhcbiAgICBvZmZzZXQgPSAwXG4gIC8vIEJ1ZmZlciN3cml0ZShzdHJpbmcsIGVuY29kaW5nKVxuICB9IGVsc2UgaWYgKGxlbmd0aCA9PT0gdW5kZWZpbmVkICYmIHR5cGVvZiBvZmZzZXQgPT09ICdzdHJpbmcnKSB7XG4gICAgZW5jb2RpbmcgPSBvZmZzZXRcbiAgICBsZW5ndGggPSB0aGlzLmxlbmd0aFxuICAgIG9mZnNldCA9IDBcbiAgLy8gQnVmZmVyI3dyaXRlKHN0cmluZywgb2Zmc2V0WywgbGVuZ3RoXVssIGVuY29kaW5nXSlcbiAgfSBlbHNlIGlmIChpc0Zpbml0ZShvZmZzZXQpKSB7XG4gICAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICAgIGlmIChpc0Zpbml0ZShsZW5ndGgpKSB7XG4gICAgICBsZW5ndGggPSBsZW5ndGggfCAwXG4gICAgICBpZiAoZW5jb2RpbmcgPT09IHVuZGVmaW5lZCkgZW5jb2RpbmcgPSAndXRmOCdcbiAgICB9IGVsc2Uge1xuICAgICAgZW5jb2RpbmcgPSBsZW5ndGhcbiAgICAgIGxlbmd0aCA9IHVuZGVmaW5lZFxuICAgIH1cbiAgLy8gbGVnYWN5IHdyaXRlKHN0cmluZywgZW5jb2RpbmcsIG9mZnNldCwgbGVuZ3RoKSAtIHJlbW92ZSBpbiB2MC4xM1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICdCdWZmZXIud3JpdGUoc3RyaW5nLCBlbmNvZGluZywgb2Zmc2V0WywgbGVuZ3RoXSkgaXMgbm8gbG9uZ2VyIHN1cHBvcnRlZCdcbiAgICApXG4gIH1cblxuICB2YXIgcmVtYWluaW5nID0gdGhpcy5sZW5ndGggLSBvZmZzZXRcbiAgaWYgKGxlbmd0aCA9PT0gdW5kZWZpbmVkIHx8IGxlbmd0aCA+IHJlbWFpbmluZykgbGVuZ3RoID0gcmVtYWluaW5nXG5cbiAgaWYgKChzdHJpbmcubGVuZ3RoID4gMCAmJiAobGVuZ3RoIDwgMCB8fCBvZmZzZXQgPCAwKSkgfHwgb2Zmc2V0ID4gdGhpcy5sZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQXR0ZW1wdCB0byB3cml0ZSBvdXRzaWRlIGJ1ZmZlciBib3VuZHMnKVxuICB9XG5cbiAgaWYgKCFlbmNvZGluZykgZW5jb2RpbmcgPSAndXRmOCdcblxuICB2YXIgbG93ZXJlZENhc2UgPSBmYWxzZVxuICBmb3IgKDs7KSB7XG4gICAgc3dpdGNoIChlbmNvZGluZykge1xuICAgICAgY2FzZSAnaGV4JzpcbiAgICAgICAgcmV0dXJuIGhleFdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGNhc2UgJ3V0ZjgnOlxuICAgICAgY2FzZSAndXRmLTgnOlxuICAgICAgICByZXR1cm4gdXRmOFdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGNhc2UgJ2FzY2lpJzpcbiAgICAgICAgcmV0dXJuIGFzY2lpV3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgY2FzZSAnbGF0aW4xJzpcbiAgICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgICAgIHJldHVybiBsYXRpbjFXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBjYXNlICdiYXNlNjQnOlxuICAgICAgICAvLyBXYXJuaW5nOiBtYXhMZW5ndGggbm90IHRha2VuIGludG8gYWNjb3VudCBpbiBiYXNlNjRXcml0ZVxuICAgICAgICByZXR1cm4gYmFzZTY0V3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgY2FzZSAndWNzMic6XG4gICAgICBjYXNlICd1Y3MtMic6XG4gICAgICBjYXNlICd1dGYxNmxlJzpcbiAgICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgICAgcmV0dXJuIHVjczJXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAobG93ZXJlZENhc2UpIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Vua25vd24gZW5jb2Rpbmc6ICcgKyBlbmNvZGluZylcbiAgICAgICAgZW5jb2RpbmcgPSAoJycgKyBlbmNvZGluZykudG9Mb3dlckNhc2UoKVxuICAgICAgICBsb3dlcmVkQ2FzZSA9IHRydWVcbiAgICB9XG4gIH1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS50b0pTT04gPSBmdW5jdGlvbiB0b0pTT04gKCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6ICdCdWZmZXInLFxuICAgIGRhdGE6IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHRoaXMuX2FyciB8fCB0aGlzLCAwKVxuICB9XG59XG5cbmZ1bmN0aW9uIGJhc2U2NFNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgaWYgKHN0YXJ0ID09PSAwICYmIGVuZCA9PT0gYnVmLmxlbmd0aCkge1xuICAgIHJldHVybiBiYXNlNjQuZnJvbUJ5dGVBcnJheShidWYpXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGJhc2U2NC5mcm9tQnl0ZUFycmF5KGJ1Zi5zbGljZShzdGFydCwgZW5kKSlcbiAgfVxufVxuXG5mdW5jdGlvbiB1dGY4U2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICBlbmQgPSBNYXRoLm1pbihidWYubGVuZ3RoLCBlbmQpXG4gIHZhciByZXMgPSBbXVxuXG4gIHZhciBpID0gc3RhcnRcbiAgd2hpbGUgKGkgPCBlbmQpIHtcbiAgICB2YXIgZmlyc3RCeXRlID0gYnVmW2ldXG4gICAgdmFyIGNvZGVQb2ludCA9IG51bGxcbiAgICB2YXIgYnl0ZXNQZXJTZXF1ZW5jZSA9IChmaXJzdEJ5dGUgPiAweEVGKSA/IDRcbiAgICAgIDogKGZpcnN0Qnl0ZSA+IDB4REYpID8gM1xuICAgICAgOiAoZmlyc3RCeXRlID4gMHhCRikgPyAyXG4gICAgICA6IDFcblxuICAgIGlmIChpICsgYnl0ZXNQZXJTZXF1ZW5jZSA8PSBlbmQpIHtcbiAgICAgIHZhciBzZWNvbmRCeXRlLCB0aGlyZEJ5dGUsIGZvdXJ0aEJ5dGUsIHRlbXBDb2RlUG9pbnRcblxuICAgICAgc3dpdGNoIChieXRlc1BlclNlcXVlbmNlKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBpZiAoZmlyc3RCeXRlIDwgMHg4MCkge1xuICAgICAgICAgICAgY29kZVBvaW50ID0gZmlyc3RCeXRlXG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBzZWNvbmRCeXRlID0gYnVmW2kgKyAxXVxuICAgICAgICAgIGlmICgoc2Vjb25kQnl0ZSAmIDB4QzApID09PSAweDgwKSB7XG4gICAgICAgICAgICB0ZW1wQ29kZVBvaW50ID0gKGZpcnN0Qnl0ZSAmIDB4MUYpIDw8IDB4NiB8IChzZWNvbmRCeXRlICYgMHgzRilcbiAgICAgICAgICAgIGlmICh0ZW1wQ29kZVBvaW50ID4gMHg3Rikge1xuICAgICAgICAgICAgICBjb2RlUG9pbnQgPSB0ZW1wQ29kZVBvaW50XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBzZWNvbmRCeXRlID0gYnVmW2kgKyAxXVxuICAgICAgICAgIHRoaXJkQnl0ZSA9IGJ1ZltpICsgMl1cbiAgICAgICAgICBpZiAoKHNlY29uZEJ5dGUgJiAweEMwKSA9PT0gMHg4MCAmJiAodGhpcmRCeXRlICYgMHhDMCkgPT09IDB4ODApIHtcbiAgICAgICAgICAgIHRlbXBDb2RlUG9pbnQgPSAoZmlyc3RCeXRlICYgMHhGKSA8PCAweEMgfCAoc2Vjb25kQnl0ZSAmIDB4M0YpIDw8IDB4NiB8ICh0aGlyZEJ5dGUgJiAweDNGKVxuICAgICAgICAgICAgaWYgKHRlbXBDb2RlUG9pbnQgPiAweDdGRiAmJiAodGVtcENvZGVQb2ludCA8IDB4RDgwMCB8fCB0ZW1wQ29kZVBvaW50ID4gMHhERkZGKSkge1xuICAgICAgICAgICAgICBjb2RlUG9pbnQgPSB0ZW1wQ29kZVBvaW50XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBzZWNvbmRCeXRlID0gYnVmW2kgKyAxXVxuICAgICAgICAgIHRoaXJkQnl0ZSA9IGJ1ZltpICsgMl1cbiAgICAgICAgICBmb3VydGhCeXRlID0gYnVmW2kgKyAzXVxuICAgICAgICAgIGlmICgoc2Vjb25kQnl0ZSAmIDB4QzApID09PSAweDgwICYmICh0aGlyZEJ5dGUgJiAweEMwKSA9PT0gMHg4MCAmJiAoZm91cnRoQnl0ZSAmIDB4QzApID09PSAweDgwKSB7XG4gICAgICAgICAgICB0ZW1wQ29kZVBvaW50ID0gKGZpcnN0Qnl0ZSAmIDB4RikgPDwgMHgxMiB8IChzZWNvbmRCeXRlICYgMHgzRikgPDwgMHhDIHwgKHRoaXJkQnl0ZSAmIDB4M0YpIDw8IDB4NiB8IChmb3VydGhCeXRlICYgMHgzRilcbiAgICAgICAgICAgIGlmICh0ZW1wQ29kZVBvaW50ID4gMHhGRkZGICYmIHRlbXBDb2RlUG9pbnQgPCAweDExMDAwMCkge1xuICAgICAgICAgICAgICBjb2RlUG9pbnQgPSB0ZW1wQ29kZVBvaW50XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChjb2RlUG9pbnQgPT09IG51bGwpIHtcbiAgICAgIC8vIHdlIGRpZCBub3QgZ2VuZXJhdGUgYSB2YWxpZCBjb2RlUG9pbnQgc28gaW5zZXJ0IGFcbiAgICAgIC8vIHJlcGxhY2VtZW50IGNoYXIgKFUrRkZGRCkgYW5kIGFkdmFuY2Ugb25seSAxIGJ5dGVcbiAgICAgIGNvZGVQb2ludCA9IDB4RkZGRFxuICAgICAgYnl0ZXNQZXJTZXF1ZW5jZSA9IDFcbiAgICB9IGVsc2UgaWYgKGNvZGVQb2ludCA+IDB4RkZGRikge1xuICAgICAgLy8gZW5jb2RlIHRvIHV0ZjE2IChzdXJyb2dhdGUgcGFpciBkYW5jZSlcbiAgICAgIGNvZGVQb2ludCAtPSAweDEwMDAwXG4gICAgICByZXMucHVzaChjb2RlUG9pbnQgPj4+IDEwICYgMHgzRkYgfCAweEQ4MDApXG4gICAgICBjb2RlUG9pbnQgPSAweERDMDAgfCBjb2RlUG9pbnQgJiAweDNGRlxuICAgIH1cblxuICAgIHJlcy5wdXNoKGNvZGVQb2ludClcbiAgICBpICs9IGJ5dGVzUGVyU2VxdWVuY2VcbiAgfVxuXG4gIHJldHVybiBkZWNvZGVDb2RlUG9pbnRzQXJyYXkocmVzKVxufVxuXG4vLyBCYXNlZCBvbiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yMjc0NzI3Mi82ODA3NDIsIHRoZSBicm93c2VyIHdpdGhcbi8vIHRoZSBsb3dlc3QgbGltaXQgaXMgQ2hyb21lLCB3aXRoIDB4MTAwMDAgYXJncy5cbi8vIFdlIGdvIDEgbWFnbml0dWRlIGxlc3MsIGZvciBzYWZldHlcbnZhciBNQVhfQVJHVU1FTlRTX0xFTkdUSCA9IDB4MTAwMFxuXG5mdW5jdGlvbiBkZWNvZGVDb2RlUG9pbnRzQXJyYXkgKGNvZGVQb2ludHMpIHtcbiAgdmFyIGxlbiA9IGNvZGVQb2ludHMubGVuZ3RoXG4gIGlmIChsZW4gPD0gTUFYX0FSR1VNRU5UU19MRU5HVEgpIHtcbiAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShTdHJpbmcsIGNvZGVQb2ludHMpIC8vIGF2b2lkIGV4dHJhIHNsaWNlKClcbiAgfVxuXG4gIC8vIERlY29kZSBpbiBjaHVua3MgdG8gYXZvaWQgXCJjYWxsIHN0YWNrIHNpemUgZXhjZWVkZWRcIi5cbiAgdmFyIHJlcyA9ICcnXG4gIHZhciBpID0gMFxuICB3aGlsZSAoaSA8IGxlbikge1xuICAgIHJlcyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KFxuICAgICAgU3RyaW5nLFxuICAgICAgY29kZVBvaW50cy5zbGljZShpLCBpICs9IE1BWF9BUkdVTUVOVFNfTEVOR1RIKVxuICAgIClcbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbmZ1bmN0aW9uIGFzY2lpU2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICB2YXIgcmV0ID0gJydcbiAgZW5kID0gTWF0aC5taW4oYnVmLmxlbmd0aCwgZW5kKVxuXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgKytpKSB7XG4gICAgcmV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnVmW2ldICYgMHg3RilcbiAgfVxuICByZXR1cm4gcmV0XG59XG5cbmZ1bmN0aW9uIGxhdGluMVNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIHJldCA9ICcnXG4gIGVuZCA9IE1hdGgubWluKGJ1Zi5sZW5ndGgsIGVuZClcblxuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7ICsraSkge1xuICAgIHJldCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ1ZltpXSlcbiAgfVxuICByZXR1cm4gcmV0XG59XG5cbmZ1bmN0aW9uIGhleFNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGxlbiA9IGJ1Zi5sZW5ndGhcblxuICBpZiAoIXN0YXJ0IHx8IHN0YXJ0IDwgMCkgc3RhcnQgPSAwXG4gIGlmICghZW5kIHx8IGVuZCA8IDAgfHwgZW5kID4gbGVuKSBlbmQgPSBsZW5cblxuICB2YXIgb3V0ID0gJydcbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyArK2kpIHtcbiAgICBvdXQgKz0gdG9IZXgoYnVmW2ldKVxuICB9XG4gIHJldHVybiBvdXRcbn1cblxuZnVuY3Rpb24gdXRmMTZsZVNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGJ5dGVzID0gYnVmLnNsaWNlKHN0YXJ0LCBlbmQpXG4gIHZhciByZXMgPSAnJ1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGJ5dGVzLmxlbmd0aDsgaSArPSAyKSB7XG4gICAgcmVzICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnl0ZXNbaV0gKyBieXRlc1tpICsgMV0gKiAyNTYpXG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG5CdWZmZXIucHJvdG90eXBlLnNsaWNlID0gZnVuY3Rpb24gc2xpY2UgKHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGxlbiA9IHRoaXMubGVuZ3RoXG4gIHN0YXJ0ID0gfn5zdGFydFxuICBlbmQgPSBlbmQgPT09IHVuZGVmaW5lZCA/IGxlbiA6IH5+ZW5kXG5cbiAgaWYgKHN0YXJ0IDwgMCkge1xuICAgIHN0YXJ0ICs9IGxlblxuICAgIGlmIChzdGFydCA8IDApIHN0YXJ0ID0gMFxuICB9IGVsc2UgaWYgKHN0YXJ0ID4gbGVuKSB7XG4gICAgc3RhcnQgPSBsZW5cbiAgfVxuXG4gIGlmIChlbmQgPCAwKSB7XG4gICAgZW5kICs9IGxlblxuICAgIGlmIChlbmQgPCAwKSBlbmQgPSAwXG4gIH0gZWxzZSBpZiAoZW5kID4gbGVuKSB7XG4gICAgZW5kID0gbGVuXG4gIH1cblxuICBpZiAoZW5kIDwgc3RhcnQpIGVuZCA9IHN0YXJ0XG5cbiAgdmFyIG5ld0J1ZlxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICBuZXdCdWYgPSB0aGlzLnN1YmFycmF5KHN0YXJ0LCBlbmQpXG4gICAgbmV3QnVmLl9fcHJvdG9fXyA9IEJ1ZmZlci5wcm90b3R5cGVcbiAgfSBlbHNlIHtcbiAgICB2YXIgc2xpY2VMZW4gPSBlbmQgLSBzdGFydFxuICAgIG5ld0J1ZiA9IG5ldyBCdWZmZXIoc2xpY2VMZW4sIHVuZGVmaW5lZClcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNsaWNlTGVuOyArK2kpIHtcbiAgICAgIG5ld0J1ZltpXSA9IHRoaXNbaSArIHN0YXJ0XVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuZXdCdWZcbn1cblxuLypcbiAqIE5lZWQgdG8gbWFrZSBzdXJlIHRoYXQgYnVmZmVyIGlzbid0IHRyeWluZyB0byB3cml0ZSBvdXQgb2YgYm91bmRzLlxuICovXG5mdW5jdGlvbiBjaGVja09mZnNldCAob2Zmc2V0LCBleHQsIGxlbmd0aCkge1xuICBpZiAoKG9mZnNldCAlIDEpICE9PSAwIHx8IG9mZnNldCA8IDApIHRocm93IG5ldyBSYW5nZUVycm9yKCdvZmZzZXQgaXMgbm90IHVpbnQnKVxuICBpZiAob2Zmc2V0ICsgZXh0ID4gbGVuZ3RoKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignVHJ5aW5nIHRvIGFjY2VzcyBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnRMRSA9IGZ1bmN0aW9uIHJlYWRVSW50TEUgKG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCBieXRlTGVuZ3RoLCB0aGlzLmxlbmd0aClcblxuICB2YXIgdmFsID0gdGhpc1tvZmZzZXRdXG4gIHZhciBtdWwgPSAxXG4gIHZhciBpID0gMFxuICB3aGlsZSAoKytpIDwgYnl0ZUxlbmd0aCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHZhbCArPSB0aGlzW29mZnNldCArIGldICogbXVsXG4gIH1cblxuICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnRCRSA9IGZ1bmN0aW9uIHJlYWRVSW50QkUgKG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCB8IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGNoZWNrT2Zmc2V0KG9mZnNldCwgYnl0ZUxlbmd0aCwgdGhpcy5sZW5ndGgpXG4gIH1cblxuICB2YXIgdmFsID0gdGhpc1tvZmZzZXQgKyAtLWJ5dGVMZW5ndGhdXG4gIHZhciBtdWwgPSAxXG4gIHdoaWxlIChieXRlTGVuZ3RoID4gMCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHZhbCArPSB0aGlzW29mZnNldCArIC0tYnl0ZUxlbmd0aF0gKiBtdWxcbiAgfVxuXG4gIHJldHVybiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDggPSBmdW5jdGlvbiByZWFkVUludDggKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAxLCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIHRoaXNbb2Zmc2V0XVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MTZMRSA9IGZ1bmN0aW9uIHJlYWRVSW50MTZMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDIsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gdGhpc1tvZmZzZXRdIHwgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgOClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDE2QkUgPSBmdW5jdGlvbiByZWFkVUludDE2QkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAyLCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuICh0aGlzW29mZnNldF0gPDwgOCkgfCB0aGlzW29mZnNldCArIDFdXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQzMkxFID0gZnVuY3Rpb24gcmVhZFVJbnQzMkxFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG5cbiAgcmV0dXJuICgodGhpc1tvZmZzZXRdKSB8XG4gICAgICAodGhpc1tvZmZzZXQgKyAxXSA8PCA4KSB8XG4gICAgICAodGhpc1tvZmZzZXQgKyAyXSA8PCAxNikpICtcbiAgICAgICh0aGlzW29mZnNldCArIDNdICogMHgxMDAwMDAwKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MzJCRSA9IGZ1bmN0aW9uIHJlYWRVSW50MzJCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuXG4gIHJldHVybiAodGhpc1tvZmZzZXRdICogMHgxMDAwMDAwKSArXG4gICAgKCh0aGlzW29mZnNldCArIDFdIDw8IDE2KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgMl0gPDwgOCkgfFxuICAgIHRoaXNbb2Zmc2V0ICsgM10pXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludExFID0gZnVuY3Rpb24gcmVhZEludExFIChvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgYnl0ZUxlbmd0aCwgdGhpcy5sZW5ndGgpXG5cbiAgdmFyIHZhbCA9IHRoaXNbb2Zmc2V0XVxuICB2YXIgbXVsID0gMVxuICB2YXIgaSA9IDBcbiAgd2hpbGUgKCsraSA8IGJ5dGVMZW5ndGggJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB2YWwgKz0gdGhpc1tvZmZzZXQgKyBpXSAqIG11bFxuICB9XG4gIG11bCAqPSAweDgwXG5cbiAgaWYgKHZhbCA+PSBtdWwpIHZhbCAtPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aClcblxuICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludEJFID0gZnVuY3Rpb24gcmVhZEludEJFIChvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgYnl0ZUxlbmd0aCwgdGhpcy5sZW5ndGgpXG5cbiAgdmFyIGkgPSBieXRlTGVuZ3RoXG4gIHZhciBtdWwgPSAxXG4gIHZhciB2YWwgPSB0aGlzW29mZnNldCArIC0taV1cbiAgd2hpbGUgKGkgPiAwICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdmFsICs9IHRoaXNbb2Zmc2V0ICsgLS1pXSAqIG11bFxuICB9XG4gIG11bCAqPSAweDgwXG5cbiAgaWYgKHZhbCA+PSBtdWwpIHZhbCAtPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aClcblxuICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDggPSBmdW5jdGlvbiByZWFkSW50OCAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDEsIHRoaXMubGVuZ3RoKVxuICBpZiAoISh0aGlzW29mZnNldF0gJiAweDgwKSkgcmV0dXJuICh0aGlzW29mZnNldF0pXG4gIHJldHVybiAoKDB4ZmYgLSB0aGlzW29mZnNldF0gKyAxKSAqIC0xKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQxNkxFID0gZnVuY3Rpb24gcmVhZEludDE2TEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAyLCB0aGlzLmxlbmd0aClcbiAgdmFyIHZhbCA9IHRoaXNbb2Zmc2V0XSB8ICh0aGlzW29mZnNldCArIDFdIDw8IDgpXG4gIHJldHVybiAodmFsICYgMHg4MDAwKSA/IHZhbCB8IDB4RkZGRjAwMDAgOiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MTZCRSA9IGZ1bmN0aW9uIHJlYWRJbnQxNkJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMiwgdGhpcy5sZW5ndGgpXG4gIHZhciB2YWwgPSB0aGlzW29mZnNldCArIDFdIHwgKHRoaXNbb2Zmc2V0XSA8PCA4KVxuICByZXR1cm4gKHZhbCAmIDB4ODAwMCkgPyB2YWwgfCAweEZGRkYwMDAwIDogdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDMyTEUgPSBmdW5jdGlvbiByZWFkSW50MzJMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuXG4gIHJldHVybiAodGhpc1tvZmZzZXRdKSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgOCkgfFxuICAgICh0aGlzW29mZnNldCArIDJdIDw8IDE2KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgM10gPDwgMjQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDMyQkUgPSBmdW5jdGlvbiByZWFkSW50MzJCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuXG4gIHJldHVybiAodGhpc1tvZmZzZXRdIDw8IDI0KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgMTYpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAyXSA8PCA4KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgM10pXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEZsb2F0TEUgPSBmdW5jdGlvbiByZWFkRmxvYXRMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gaWVlZTc1NC5yZWFkKHRoaXMsIG9mZnNldCwgdHJ1ZSwgMjMsIDQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEZsb2F0QkUgPSBmdW5jdGlvbiByZWFkRmxvYXRCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gaWVlZTc1NC5yZWFkKHRoaXMsIG9mZnNldCwgZmFsc2UsIDIzLCA0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWREb3VibGVMRSA9IGZ1bmN0aW9uIHJlYWREb3VibGVMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDgsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gaWVlZTc1NC5yZWFkKHRoaXMsIG9mZnNldCwgdHJ1ZSwgNTIsIDgpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZERvdWJsZUJFID0gZnVuY3Rpb24gcmVhZERvdWJsZUJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgOCwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiBpZWVlNzU0LnJlYWQodGhpcywgb2Zmc2V0LCBmYWxzZSwgNTIsIDgpXG59XG5cbmZ1bmN0aW9uIGNoZWNrSW50IChidWYsIHZhbHVlLCBvZmZzZXQsIGV4dCwgbWF4LCBtaW4pIHtcbiAgaWYgKCFCdWZmZXIuaXNCdWZmZXIoYnVmKSkgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJidWZmZXJcIiBhcmd1bWVudCBtdXN0IGJlIGEgQnVmZmVyIGluc3RhbmNlJylcbiAgaWYgKHZhbHVlID4gbWF4IHx8IHZhbHVlIDwgbWluKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignXCJ2YWx1ZVwiIGFyZ3VtZW50IGlzIG91dCBvZiBib3VuZHMnKVxuICBpZiAob2Zmc2V0ICsgZXh0ID4gYnVmLmxlbmd0aCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0luZGV4IG91dCBvZiByYW5nZScpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50TEUgPSBmdW5jdGlvbiB3cml0ZVVJbnRMRSAodmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCB8IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIHZhciBtYXhCeXRlcyA9IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoKSAtIDFcbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBtYXhCeXRlcywgMClcbiAgfVxuXG4gIHZhciBtdWwgPSAxXG4gIHZhciBpID0gMFxuICB0aGlzW29mZnNldF0gPSB2YWx1ZSAmIDB4RkZcbiAgd2hpbGUgKCsraSA8IGJ5dGVMZW5ndGggJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB0aGlzW29mZnNldCArIGldID0gKHZhbHVlIC8gbXVsKSAmIDB4RkZcbiAgfVxuXG4gIHJldHVybiBvZmZzZXQgKyBieXRlTGVuZ3RoXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50QkUgPSBmdW5jdGlvbiB3cml0ZVVJbnRCRSAodmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCB8IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIHZhciBtYXhCeXRlcyA9IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoKSAtIDFcbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBtYXhCeXRlcywgMClcbiAgfVxuXG4gIHZhciBpID0gYnl0ZUxlbmd0aCAtIDFcbiAgdmFyIG11bCA9IDFcbiAgdGhpc1tvZmZzZXQgKyBpXSA9IHZhbHVlICYgMHhGRlxuICB3aGlsZSAoLS1pID49IDAgJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB0aGlzW29mZnNldCArIGldID0gKHZhbHVlIC8gbXVsKSAmIDB4RkZcbiAgfVxuXG4gIHJldHVybiBvZmZzZXQgKyBieXRlTGVuZ3RoXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50OCA9IGZ1bmN0aW9uIHdyaXRlVUludDggKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMSwgMHhmZiwgMClcbiAgaWYgKCFCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkgdmFsdWUgPSBNYXRoLmZsb29yKHZhbHVlKVxuICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICByZXR1cm4gb2Zmc2V0ICsgMVxufVxuXG5mdW5jdGlvbiBvYmplY3RXcml0ZVVJbnQxNiAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4pIHtcbiAgaWYgKHZhbHVlIDwgMCkgdmFsdWUgPSAweGZmZmYgKyB2YWx1ZSArIDFcbiAgZm9yICh2YXIgaSA9IDAsIGogPSBNYXRoLm1pbihidWYubGVuZ3RoIC0gb2Zmc2V0LCAyKTsgaSA8IGo7ICsraSkge1xuICAgIGJ1ZltvZmZzZXQgKyBpXSA9ICh2YWx1ZSAmICgweGZmIDw8ICg4ICogKGxpdHRsZUVuZGlhbiA/IGkgOiAxIC0gaSkpKSkgPj4+XG4gICAgICAobGl0dGxlRW5kaWFuID8gaSA6IDEgLSBpKSAqIDhcbiAgfVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDE2TEUgPSBmdW5jdGlvbiB3cml0ZVVJbnQxNkxFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDIsIDB4ZmZmZiwgMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiA4KVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDE2KHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDJcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQxNkJFID0gZnVuY3Rpb24gd3JpdGVVSW50MTZCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAyLCAweGZmZmYsIDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlICYgMHhmZilcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQxNih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgMlxufVxuXG5mdW5jdGlvbiBvYmplY3RXcml0ZVVJbnQzMiAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4pIHtcbiAgaWYgKHZhbHVlIDwgMCkgdmFsdWUgPSAweGZmZmZmZmZmICsgdmFsdWUgKyAxXG4gIGZvciAodmFyIGkgPSAwLCBqID0gTWF0aC5taW4oYnVmLmxlbmd0aCAtIG9mZnNldCwgNCk7IGkgPCBqOyArK2kpIHtcbiAgICBidWZbb2Zmc2V0ICsgaV0gPSAodmFsdWUgPj4+IChsaXR0bGVFbmRpYW4gPyBpIDogMyAtIGkpICogOCkgJiAweGZmXG4gIH1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQzMkxFID0gZnVuY3Rpb24gd3JpdGVVSW50MzJMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCA0LCAweGZmZmZmZmZmLCAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldCArIDNdID0gKHZhbHVlID4+PiAyNClcbiAgICB0aGlzW29mZnNldCArIDJdID0gKHZhbHVlID4+PiAxNilcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MzIodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDMyQkUgPSBmdW5jdGlvbiB3cml0ZVVJbnQzMkJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDQsIDB4ZmZmZmZmZmYsIDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSA+Pj4gMjQpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gMTYpXG4gICAgdGhpc1tvZmZzZXQgKyAyXSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldCArIDNdID0gKHZhbHVlICYgMHhmZilcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQzMih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50TEUgPSBmdW5jdGlvbiB3cml0ZUludExFICh2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICB2YXIgbGltaXQgPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aCAtIDEpXG5cbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBsaW1pdCAtIDEsIC1saW1pdClcbiAgfVxuXG4gIHZhciBpID0gMFxuICB2YXIgbXVsID0gMVxuICB2YXIgc3ViID0gMFxuICB0aGlzW29mZnNldF0gPSB2YWx1ZSAmIDB4RkZcbiAgd2hpbGUgKCsraSA8IGJ5dGVMZW5ndGggJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICBpZiAodmFsdWUgPCAwICYmIHN1YiA9PT0gMCAmJiB0aGlzW29mZnNldCArIGkgLSAxXSAhPT0gMCkge1xuICAgICAgc3ViID0gMVxuICAgIH1cbiAgICB0aGlzW29mZnNldCArIGldID0gKCh2YWx1ZSAvIG11bCkgPj4gMCkgLSBzdWIgJiAweEZGXG4gIH1cblxuICByZXR1cm4gb2Zmc2V0ICsgYnl0ZUxlbmd0aFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50QkUgPSBmdW5jdGlvbiB3cml0ZUludEJFICh2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICB2YXIgbGltaXQgPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aCAtIDEpXG5cbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBsaW1pdCAtIDEsIC1saW1pdClcbiAgfVxuXG4gIHZhciBpID0gYnl0ZUxlbmd0aCAtIDFcbiAgdmFyIG11bCA9IDFcbiAgdmFyIHN1YiA9IDBcbiAgdGhpc1tvZmZzZXQgKyBpXSA9IHZhbHVlICYgMHhGRlxuICB3aGlsZSAoLS1pID49IDAgJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICBpZiAodmFsdWUgPCAwICYmIHN1YiA9PT0gMCAmJiB0aGlzW29mZnNldCArIGkgKyAxXSAhPT0gMCkge1xuICAgICAgc3ViID0gMVxuICAgIH1cbiAgICB0aGlzW29mZnNldCArIGldID0gKCh2YWx1ZSAvIG11bCkgPj4gMCkgLSBzdWIgJiAweEZGXG4gIH1cblxuICByZXR1cm4gb2Zmc2V0ICsgYnl0ZUxlbmd0aFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50OCA9IGZ1bmN0aW9uIHdyaXRlSW50OCAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAxLCAweDdmLCAtMHg4MClcbiAgaWYgKCFCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkgdmFsdWUgPSBNYXRoLmZsb29yKHZhbHVlKVxuICBpZiAodmFsdWUgPCAwKSB2YWx1ZSA9IDB4ZmYgKyB2YWx1ZSArIDFcbiAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgcmV0dXJuIG9mZnNldCArIDFcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDE2TEUgPSBmdW5jdGlvbiB3cml0ZUludDE2TEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMiwgMHg3ZmZmLCAtMHg4MDAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDgpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MTYodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgMlxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MTZCRSA9IGZ1bmN0aW9uIHdyaXRlSW50MTZCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAyLCAweDdmZmYsIC0weDgwMDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlICYgMHhmZilcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQxNih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgMlxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MzJMRSA9IGZ1bmN0aW9uIHdyaXRlSW50MzJMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCA0LCAweDdmZmZmZmZmLCAtMHg4MDAwMDAwMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0ICsgMl0gPSAodmFsdWUgPj4+IDE2KVxuICAgIHRoaXNbb2Zmc2V0ICsgM10gPSAodmFsdWUgPj4+IDI0KVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDMyKHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDMyQkUgPSBmdW5jdGlvbiB3cml0ZUludDMyQkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgNCwgMHg3ZmZmZmZmZiwgLTB4ODAwMDAwMDApXG4gIGlmICh2YWx1ZSA8IDApIHZhbHVlID0gMHhmZmZmZmZmZiArIHZhbHVlICsgMVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgPj4+IDI0KVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDE2KVxuICAgIHRoaXNbb2Zmc2V0ICsgMl0gPSAodmFsdWUgPj4+IDgpXG4gICAgdGhpc1tvZmZzZXQgKyAzXSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MzIodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuZnVuY3Rpb24gY2hlY2tJRUVFNzU0IChidWYsIHZhbHVlLCBvZmZzZXQsIGV4dCwgbWF4LCBtaW4pIHtcbiAgaWYgKG9mZnNldCArIGV4dCA+IGJ1Zi5sZW5ndGgpIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbmRleCBvdXQgb2YgcmFuZ2UnKVxuICBpZiAob2Zmc2V0IDwgMCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0luZGV4IG91dCBvZiByYW5nZScpXG59XG5cbmZ1bmN0aW9uIHdyaXRlRmxvYXQgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgY2hlY2tJRUVFNzU0KGJ1ZiwgdmFsdWUsIG9mZnNldCwgNCwgMy40MDI4MjM0NjYzODUyODg2ZSszOCwgLTMuNDAyODIzNDY2Mzg1Mjg4NmUrMzgpXG4gIH1cbiAgaWVlZTc1NC53cml0ZShidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgMjMsIDQpXG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVGbG9hdExFID0gZnVuY3Rpb24gd3JpdGVGbG9hdExFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gd3JpdGVGbG9hdCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUZsb2F0QkUgPSBmdW5jdGlvbiB3cml0ZUZsb2F0QkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiB3cml0ZUZsb2F0KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuZnVuY3Rpb24gd3JpdGVEb3VibGUgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgY2hlY2tJRUVFNzU0KGJ1ZiwgdmFsdWUsIG9mZnNldCwgOCwgMS43OTc2OTMxMzQ4NjIzMTU3RSszMDgsIC0xLjc5NzY5MzEzNDg2MjMxNTdFKzMwOClcbiAgfVxuICBpZWVlNzU0LndyaXRlKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCA1MiwgOClcbiAgcmV0dXJuIG9mZnNldCArIDhcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZURvdWJsZUxFID0gZnVuY3Rpb24gd3JpdGVEb3VibGVMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIHdyaXRlRG91YmxlKHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRG91YmxlQkUgPSBmdW5jdGlvbiB3cml0ZURvdWJsZUJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gd3JpdGVEb3VibGUodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG4vLyBjb3B5KHRhcmdldEJ1ZmZlciwgdGFyZ2V0U3RhcnQ9MCwgc291cmNlU3RhcnQ9MCwgc291cmNlRW5kPWJ1ZmZlci5sZW5ndGgpXG5CdWZmZXIucHJvdG90eXBlLmNvcHkgPSBmdW5jdGlvbiBjb3B5ICh0YXJnZXQsIHRhcmdldFN0YXJ0LCBzdGFydCwgZW5kKSB7XG4gIGlmICghc3RhcnQpIHN0YXJ0ID0gMFxuICBpZiAoIWVuZCAmJiBlbmQgIT09IDApIGVuZCA9IHRoaXMubGVuZ3RoXG4gIGlmICh0YXJnZXRTdGFydCA+PSB0YXJnZXQubGVuZ3RoKSB0YXJnZXRTdGFydCA9IHRhcmdldC5sZW5ndGhcbiAgaWYgKCF0YXJnZXRTdGFydCkgdGFyZ2V0U3RhcnQgPSAwXG4gIGlmIChlbmQgPiAwICYmIGVuZCA8IHN0YXJ0KSBlbmQgPSBzdGFydFxuXG4gIC8vIENvcHkgMCBieXRlczsgd2UncmUgZG9uZVxuICBpZiAoZW5kID09PSBzdGFydCkgcmV0dXJuIDBcbiAgaWYgKHRhcmdldC5sZW5ndGggPT09IDAgfHwgdGhpcy5sZW5ndGggPT09IDApIHJldHVybiAwXG5cbiAgLy8gRmF0YWwgZXJyb3IgY29uZGl0aW9uc1xuICBpZiAodGFyZ2V0U3RhcnQgPCAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3RhcmdldFN0YXJ0IG91dCBvZiBib3VuZHMnKVxuICB9XG4gIGlmIChzdGFydCA8IDAgfHwgc3RhcnQgPj0gdGhpcy5sZW5ndGgpIHRocm93IG5ldyBSYW5nZUVycm9yKCdzb3VyY2VTdGFydCBvdXQgb2YgYm91bmRzJylcbiAgaWYgKGVuZCA8IDApIHRocm93IG5ldyBSYW5nZUVycm9yKCdzb3VyY2VFbmQgb3V0IG9mIGJvdW5kcycpXG5cbiAgLy8gQXJlIHdlIG9vYj9cbiAgaWYgKGVuZCA+IHRoaXMubGVuZ3RoKSBlbmQgPSB0aGlzLmxlbmd0aFxuICBpZiAodGFyZ2V0Lmxlbmd0aCAtIHRhcmdldFN0YXJ0IDwgZW5kIC0gc3RhcnQpIHtcbiAgICBlbmQgPSB0YXJnZXQubGVuZ3RoIC0gdGFyZ2V0U3RhcnQgKyBzdGFydFxuICB9XG5cbiAgdmFyIGxlbiA9IGVuZCAtIHN0YXJ0XG4gIHZhciBpXG5cbiAgaWYgKHRoaXMgPT09IHRhcmdldCAmJiBzdGFydCA8IHRhcmdldFN0YXJ0ICYmIHRhcmdldFN0YXJ0IDwgZW5kKSB7XG4gICAgLy8gZGVzY2VuZGluZyBjb3B5IGZyb20gZW5kXG4gICAgZm9yIChpID0gbGVuIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgIHRhcmdldFtpICsgdGFyZ2V0U3RhcnRdID0gdGhpc1tpICsgc3RhcnRdXG4gICAgfVxuICB9IGVsc2UgaWYgKGxlbiA8IDEwMDAgfHwgIUJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgLy8gYXNjZW5kaW5nIGNvcHkgZnJvbSBzdGFydFxuICAgIGZvciAoaSA9IDA7IGkgPCBsZW47ICsraSkge1xuICAgICAgdGFyZ2V0W2kgKyB0YXJnZXRTdGFydF0gPSB0aGlzW2kgKyBzdGFydF1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgVWludDhBcnJheS5wcm90b3R5cGUuc2V0LmNhbGwoXG4gICAgICB0YXJnZXQsXG4gICAgICB0aGlzLnN1YmFycmF5KHN0YXJ0LCBzdGFydCArIGxlbiksXG4gICAgICB0YXJnZXRTdGFydFxuICAgIClcbiAgfVxuXG4gIHJldHVybiBsZW5cbn1cblxuLy8gVXNhZ2U6XG4vLyAgICBidWZmZXIuZmlsbChudW1iZXJbLCBvZmZzZXRbLCBlbmRdXSlcbi8vICAgIGJ1ZmZlci5maWxsKGJ1ZmZlclssIG9mZnNldFssIGVuZF1dKVxuLy8gICAgYnVmZmVyLmZpbGwoc3RyaW5nWywgb2Zmc2V0WywgZW5kXV1bLCBlbmNvZGluZ10pXG5CdWZmZXIucHJvdG90eXBlLmZpbGwgPSBmdW5jdGlvbiBmaWxsICh2YWwsIHN0YXJ0LCBlbmQsIGVuY29kaW5nKSB7XG4gIC8vIEhhbmRsZSBzdHJpbmcgY2FzZXM6XG4gIGlmICh0eXBlb2YgdmFsID09PSAnc3RyaW5nJykge1xuICAgIGlmICh0eXBlb2Ygc3RhcnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBlbmNvZGluZyA9IHN0YXJ0XG4gICAgICBzdGFydCA9IDBcbiAgICAgIGVuZCA9IHRoaXMubGVuZ3RoXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZW5kID09PSAnc3RyaW5nJykge1xuICAgICAgZW5jb2RpbmcgPSBlbmRcbiAgICAgIGVuZCA9IHRoaXMubGVuZ3RoXG4gICAgfVxuICAgIGlmICh2YWwubGVuZ3RoID09PSAxKSB7XG4gICAgICB2YXIgY29kZSA9IHZhbC5jaGFyQ29kZUF0KDApXG4gICAgICBpZiAoY29kZSA8IDI1Nikge1xuICAgICAgICB2YWwgPSBjb2RlXG4gICAgICB9XG4gICAgfVxuICAgIGlmIChlbmNvZGluZyAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiBlbmNvZGluZyAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2VuY29kaW5nIG11c3QgYmUgYSBzdHJpbmcnKVxuICAgIH1cbiAgICBpZiAodHlwZW9mIGVuY29kaW5nID09PSAnc3RyaW5nJyAmJiAhQnVmZmVyLmlzRW5jb2RpbmcoZW5jb2RpbmcpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdVbmtub3duIGVuY29kaW5nOiAnICsgZW5jb2RpbmcpXG4gICAgfVxuICB9IGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgdmFsID0gdmFsICYgMjU1XG4gIH1cblxuICAvLyBJbnZhbGlkIHJhbmdlcyBhcmUgbm90IHNldCB0byBhIGRlZmF1bHQsIHNvIGNhbiByYW5nZSBjaGVjayBlYXJseS5cbiAgaWYgKHN0YXJ0IDwgMCB8fCB0aGlzLmxlbmd0aCA8IHN0YXJ0IHx8IHRoaXMubGVuZ3RoIDwgZW5kKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ091dCBvZiByYW5nZSBpbmRleCcpXG4gIH1cblxuICBpZiAoZW5kIDw9IHN0YXJ0KSB7XG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIHN0YXJ0ID0gc3RhcnQgPj4+IDBcbiAgZW5kID0gZW5kID09PSB1bmRlZmluZWQgPyB0aGlzLmxlbmd0aCA6IGVuZCA+Pj4gMFxuXG4gIGlmICghdmFsKSB2YWwgPSAwXG5cbiAgdmFyIGlcbiAgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgZm9yIChpID0gc3RhcnQ7IGkgPCBlbmQ7ICsraSkge1xuICAgICAgdGhpc1tpXSA9IHZhbFxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YXIgYnl0ZXMgPSBCdWZmZXIuaXNCdWZmZXIodmFsKVxuICAgICAgPyB2YWxcbiAgICAgIDogdXRmOFRvQnl0ZXMobmV3IEJ1ZmZlcih2YWwsIGVuY29kaW5nKS50b1N0cmluZygpKVxuICAgIHZhciBsZW4gPSBieXRlcy5sZW5ndGhcbiAgICBmb3IgKGkgPSAwOyBpIDwgZW5kIC0gc3RhcnQ7ICsraSkge1xuICAgICAgdGhpc1tpICsgc3RhcnRdID0gYnl0ZXNbaSAlIGxlbl1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpc1xufVxuXG4vLyBIRUxQRVIgRlVOQ1RJT05TXG4vLyA9PT09PT09PT09PT09PT09XG5cbnZhciBJTlZBTElEX0JBU0U2NF9SRSA9IC9bXitcXC8wLTlBLVphLXotX10vZ1xuXG5mdW5jdGlvbiBiYXNlNjRjbGVhbiAoc3RyKSB7XG4gIC8vIE5vZGUgc3RyaXBzIG91dCBpbnZhbGlkIGNoYXJhY3RlcnMgbGlrZSBcXG4gYW5kIFxcdCBmcm9tIHRoZSBzdHJpbmcsIGJhc2U2NC1qcyBkb2VzIG5vdFxuICBzdHIgPSBzdHJpbmd0cmltKHN0cikucmVwbGFjZShJTlZBTElEX0JBU0U2NF9SRSwgJycpXG4gIC8vIE5vZGUgY29udmVydHMgc3RyaW5ncyB3aXRoIGxlbmd0aCA8IDIgdG8gJydcbiAgaWYgKHN0ci5sZW5ndGggPCAyKSByZXR1cm4gJydcbiAgLy8gTm9kZSBhbGxvd3MgZm9yIG5vbi1wYWRkZWQgYmFzZTY0IHN0cmluZ3MgKG1pc3NpbmcgdHJhaWxpbmcgPT09KSwgYmFzZTY0LWpzIGRvZXMgbm90XG4gIHdoaWxlIChzdHIubGVuZ3RoICUgNCAhPT0gMCkge1xuICAgIHN0ciA9IHN0ciArICc9J1xuICB9XG4gIHJldHVybiBzdHJcbn1cblxuZnVuY3Rpb24gc3RyaW5ndHJpbSAoc3RyKSB7XG4gIGlmIChzdHIudHJpbSkgcmV0dXJuIHN0ci50cmltKClcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCAnJylcbn1cblxuZnVuY3Rpb24gdG9IZXggKG4pIHtcbiAgaWYgKG4gPCAxNikgcmV0dXJuICcwJyArIG4udG9TdHJpbmcoMTYpXG4gIHJldHVybiBuLnRvU3RyaW5nKDE2KVxufVxuXG5mdW5jdGlvbiB1dGY4VG9CeXRlcyAoc3RyaW5nLCB1bml0cykge1xuICB1bml0cyA9IHVuaXRzIHx8IEluZmluaXR5XG4gIHZhciBjb2RlUG9pbnRcbiAgdmFyIGxlbmd0aCA9IHN0cmluZy5sZW5ndGhcbiAgdmFyIGxlYWRTdXJyb2dhdGUgPSBudWxsXG4gIHZhciBieXRlcyA9IFtdXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7ICsraSkge1xuICAgIGNvZGVQb2ludCA9IHN0cmluZy5jaGFyQ29kZUF0KGkpXG5cbiAgICAvLyBpcyBzdXJyb2dhdGUgY29tcG9uZW50XG4gICAgaWYgKGNvZGVQb2ludCA+IDB4RDdGRiAmJiBjb2RlUG9pbnQgPCAweEUwMDApIHtcbiAgICAgIC8vIGxhc3QgY2hhciB3YXMgYSBsZWFkXG4gICAgICBpZiAoIWxlYWRTdXJyb2dhdGUpIHtcbiAgICAgICAgLy8gbm8gbGVhZCB5ZXRcbiAgICAgICAgaWYgKGNvZGVQb2ludCA+IDB4REJGRikge1xuICAgICAgICAgIC8vIHVuZXhwZWN0ZWQgdHJhaWxcbiAgICAgICAgICBpZiAoKHVuaXRzIC09IDMpID4gLTEpIGJ5dGVzLnB1c2goMHhFRiwgMHhCRiwgMHhCRClcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9IGVsc2UgaWYgKGkgKyAxID09PSBsZW5ndGgpIHtcbiAgICAgICAgICAvLyB1bnBhaXJlZCBsZWFkXG4gICAgICAgICAgaWYgKCh1bml0cyAtPSAzKSA+IC0xKSBieXRlcy5wdXNoKDB4RUYsIDB4QkYsIDB4QkQpXG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHZhbGlkIGxlYWRcbiAgICAgICAgbGVhZFN1cnJvZ2F0ZSA9IGNvZGVQb2ludFxuXG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIC8vIDIgbGVhZHMgaW4gYSByb3dcbiAgICAgIGlmIChjb2RlUG9pbnQgPCAweERDMDApIHtcbiAgICAgICAgaWYgKCh1bml0cyAtPSAzKSA+IC0xKSBieXRlcy5wdXNoKDB4RUYsIDB4QkYsIDB4QkQpXG4gICAgICAgIGxlYWRTdXJyb2dhdGUgPSBjb2RlUG9pbnRcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgLy8gdmFsaWQgc3Vycm9nYXRlIHBhaXJcbiAgICAgIGNvZGVQb2ludCA9IChsZWFkU3Vycm9nYXRlIC0gMHhEODAwIDw8IDEwIHwgY29kZVBvaW50IC0gMHhEQzAwKSArIDB4MTAwMDBcbiAgICB9IGVsc2UgaWYgKGxlYWRTdXJyb2dhdGUpIHtcbiAgICAgIC8vIHZhbGlkIGJtcCBjaGFyLCBidXQgbGFzdCBjaGFyIHdhcyBhIGxlYWRcbiAgICAgIGlmICgodW5pdHMgLT0gMykgPiAtMSkgYnl0ZXMucHVzaCgweEVGLCAweEJGLCAweEJEKVxuICAgIH1cblxuICAgIGxlYWRTdXJyb2dhdGUgPSBudWxsXG5cbiAgICAvLyBlbmNvZGUgdXRmOFxuICAgIGlmIChjb2RlUG9pbnQgPCAweDgwKSB7XG4gICAgICBpZiAoKHVuaXRzIC09IDEpIDwgMCkgYnJlYWtcbiAgICAgIGJ5dGVzLnB1c2goY29kZVBvaW50KVxuICAgIH0gZWxzZSBpZiAoY29kZVBvaW50IDwgMHg4MDApIHtcbiAgICAgIGlmICgodW5pdHMgLT0gMikgPCAwKSBicmVha1xuICAgICAgYnl0ZXMucHVzaChcbiAgICAgICAgY29kZVBvaW50ID4+IDB4NiB8IDB4QzAsXG4gICAgICAgIGNvZGVQb2ludCAmIDB4M0YgfCAweDgwXG4gICAgICApXG4gICAgfSBlbHNlIGlmIChjb2RlUG9pbnQgPCAweDEwMDAwKSB7XG4gICAgICBpZiAoKHVuaXRzIC09IDMpIDwgMCkgYnJlYWtcbiAgICAgIGJ5dGVzLnB1c2goXG4gICAgICAgIGNvZGVQb2ludCA+PiAweEMgfCAweEUwLFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHg2ICYgMHgzRiB8IDB4ODAsXG4gICAgICAgIGNvZGVQb2ludCAmIDB4M0YgfCAweDgwXG4gICAgICApXG4gICAgfSBlbHNlIGlmIChjb2RlUG9pbnQgPCAweDExMDAwMCkge1xuICAgICAgaWYgKCh1bml0cyAtPSA0KSA8IDApIGJyZWFrXG4gICAgICBieXRlcy5wdXNoKFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHgxMiB8IDB4RjAsXG4gICAgICAgIGNvZGVQb2ludCA+PiAweEMgJiAweDNGIHwgMHg4MCxcbiAgICAgICAgY29kZVBvaW50ID4+IDB4NiAmIDB4M0YgfCAweDgwLFxuICAgICAgICBjb2RlUG9pbnQgJiAweDNGIHwgMHg4MFxuICAgICAgKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgY29kZSBwb2ludCcpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGJ5dGVzXG59XG5cbmZ1bmN0aW9uIGFzY2lpVG9CeXRlcyAoc3RyKSB7XG4gIHZhciBieXRlQXJyYXkgPSBbXVxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0ci5sZW5ndGg7ICsraSkge1xuICAgIC8vIE5vZGUncyBjb2RlIHNlZW1zIHRvIGJlIGRvaW5nIHRoaXMgYW5kIG5vdCAmIDB4N0YuLlxuICAgIGJ5dGVBcnJheS5wdXNoKHN0ci5jaGFyQ29kZUF0KGkpICYgMHhGRilcbiAgfVxuICByZXR1cm4gYnl0ZUFycmF5XG59XG5cbmZ1bmN0aW9uIHV0ZjE2bGVUb0J5dGVzIChzdHIsIHVuaXRzKSB7XG4gIHZhciBjLCBoaSwgbG9cbiAgdmFyIGJ5dGVBcnJheSA9IFtdXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgKytpKSB7XG4gICAgaWYgKCh1bml0cyAtPSAyKSA8IDApIGJyZWFrXG5cbiAgICBjID0gc3RyLmNoYXJDb2RlQXQoaSlcbiAgICBoaSA9IGMgPj4gOFxuICAgIGxvID0gYyAlIDI1NlxuICAgIGJ5dGVBcnJheS5wdXNoKGxvKVxuICAgIGJ5dGVBcnJheS5wdXNoKGhpKVxuICB9XG5cbiAgcmV0dXJuIGJ5dGVBcnJheVxufVxuXG5mdW5jdGlvbiBiYXNlNjRUb0J5dGVzIChzdHIpIHtcbiAgcmV0dXJuIGJhc2U2NC50b0J5dGVBcnJheShiYXNlNjRjbGVhbihzdHIpKVxufVxuXG5mdW5jdGlvbiBibGl0QnVmZmVyIChzcmMsIGRzdCwgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7ICsraSkge1xuICAgIGlmICgoaSArIG9mZnNldCA+PSBkc3QubGVuZ3RoKSB8fCAoaSA+PSBzcmMubGVuZ3RoKSkgYnJlYWtcbiAgICBkc3RbaSArIG9mZnNldF0gPSBzcmNbaV1cbiAgfVxuICByZXR1cm4gaVxufVxuXG5mdW5jdGlvbiBpc25hbiAodmFsKSB7XG4gIHJldHVybiB2YWwgIT09IHZhbCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNlbGYtY29tcGFyZVxufVxuIiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiAoYXJyKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGFycikgPT0gJ1tvYmplY3QgQXJyYXldJztcbn07XG4iLCJleHBvcnRzLnJlYWQgPSBmdW5jdGlvbiAoYnVmZmVyLCBvZmZzZXQsIGlzTEUsIG1MZW4sIG5CeXRlcykge1xuICB2YXIgZSwgbVxuICB2YXIgZUxlbiA9IChuQnl0ZXMgKiA4KSAtIG1MZW4gLSAxXG4gIHZhciBlTWF4ID0gKDEgPDwgZUxlbikgLSAxXG4gIHZhciBlQmlhcyA9IGVNYXggPj4gMVxuICB2YXIgbkJpdHMgPSAtN1xuICB2YXIgaSA9IGlzTEUgPyAobkJ5dGVzIC0gMSkgOiAwXG4gIHZhciBkID0gaXNMRSA/IC0xIDogMVxuICB2YXIgcyA9IGJ1ZmZlcltvZmZzZXQgKyBpXVxuXG4gIGkgKz0gZFxuXG4gIGUgPSBzICYgKCgxIDw8ICgtbkJpdHMpKSAtIDEpXG4gIHMgPj49ICgtbkJpdHMpXG4gIG5CaXRzICs9IGVMZW5cbiAgZm9yICg7IG5CaXRzID4gMDsgZSA9IChlICogMjU2KSArIGJ1ZmZlcltvZmZzZXQgKyBpXSwgaSArPSBkLCBuQml0cyAtPSA4KSB7fVxuXG4gIG0gPSBlICYgKCgxIDw8ICgtbkJpdHMpKSAtIDEpXG4gIGUgPj49ICgtbkJpdHMpXG4gIG5CaXRzICs9IG1MZW5cbiAgZm9yICg7IG5CaXRzID4gMDsgbSA9IChtICogMjU2KSArIGJ1ZmZlcltvZmZzZXQgKyBpXSwgaSArPSBkLCBuQml0cyAtPSA4KSB7fVxuXG4gIGlmIChlID09PSAwKSB7XG4gICAgZSA9IDEgLSBlQmlhc1xuICB9IGVsc2UgaWYgKGUgPT09IGVNYXgpIHtcbiAgICByZXR1cm4gbSA/IE5hTiA6ICgocyA/IC0xIDogMSkgKiBJbmZpbml0eSlcbiAgfSBlbHNlIHtcbiAgICBtID0gbSArIE1hdGgucG93KDIsIG1MZW4pXG4gICAgZSA9IGUgLSBlQmlhc1xuICB9XG4gIHJldHVybiAocyA/IC0xIDogMSkgKiBtICogTWF0aC5wb3coMiwgZSAtIG1MZW4pXG59XG5cbmV4cG9ydHMud3JpdGUgPSBmdW5jdGlvbiAoYnVmZmVyLCB2YWx1ZSwgb2Zmc2V0LCBpc0xFLCBtTGVuLCBuQnl0ZXMpIHtcbiAgdmFyIGUsIG0sIGNcbiAgdmFyIGVMZW4gPSAobkJ5dGVzICogOCkgLSBtTGVuIC0gMVxuICB2YXIgZU1heCA9ICgxIDw8IGVMZW4pIC0gMVxuICB2YXIgZUJpYXMgPSBlTWF4ID4+IDFcbiAgdmFyIHJ0ID0gKG1MZW4gPT09IDIzID8gTWF0aC5wb3coMiwgLTI0KSAtIE1hdGgucG93KDIsIC03NykgOiAwKVxuICB2YXIgaSA9IGlzTEUgPyAwIDogKG5CeXRlcyAtIDEpXG4gIHZhciBkID0gaXNMRSA/IDEgOiAtMVxuICB2YXIgcyA9IHZhbHVlIDwgMCB8fCAodmFsdWUgPT09IDAgJiYgMSAvIHZhbHVlIDwgMCkgPyAxIDogMFxuXG4gIHZhbHVlID0gTWF0aC5hYnModmFsdWUpXG5cbiAgaWYgKGlzTmFOKHZhbHVlKSB8fCB2YWx1ZSA9PT0gSW5maW5pdHkpIHtcbiAgICBtID0gaXNOYU4odmFsdWUpID8gMSA6IDBcbiAgICBlID0gZU1heFxuICB9IGVsc2Uge1xuICAgIGUgPSBNYXRoLmZsb29yKE1hdGgubG9nKHZhbHVlKSAvIE1hdGguTE4yKVxuICAgIGlmICh2YWx1ZSAqIChjID0gTWF0aC5wb3coMiwgLWUpKSA8IDEpIHtcbiAgICAgIGUtLVxuICAgICAgYyAqPSAyXG4gICAgfVxuICAgIGlmIChlICsgZUJpYXMgPj0gMSkge1xuICAgICAgdmFsdWUgKz0gcnQgLyBjXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbHVlICs9IHJ0ICogTWF0aC5wb3coMiwgMSAtIGVCaWFzKVxuICAgIH1cbiAgICBpZiAodmFsdWUgKiBjID49IDIpIHtcbiAgICAgIGUrK1xuICAgICAgYyAvPSAyXG4gICAgfVxuXG4gICAgaWYgKGUgKyBlQmlhcyA+PSBlTWF4KSB7XG4gICAgICBtID0gMFxuICAgICAgZSA9IGVNYXhcbiAgICB9IGVsc2UgaWYgKGUgKyBlQmlhcyA+PSAxKSB7XG4gICAgICBtID0gKCh2YWx1ZSAqIGMpIC0gMSkgKiBNYXRoLnBvdygyLCBtTGVuKVxuICAgICAgZSA9IGUgKyBlQmlhc1xuICAgIH0gZWxzZSB7XG4gICAgICBtID0gdmFsdWUgKiBNYXRoLnBvdygyLCBlQmlhcyAtIDEpICogTWF0aC5wb3coMiwgbUxlbilcbiAgICAgIGUgPSAwXG4gICAgfVxuICB9XG5cbiAgZm9yICg7IG1MZW4gPj0gODsgYnVmZmVyW29mZnNldCArIGldID0gbSAmIDB4ZmYsIGkgKz0gZCwgbSAvPSAyNTYsIG1MZW4gLT0gOCkge31cblxuICBlID0gKGUgPDwgbUxlbikgfCBtXG4gIGVMZW4gKz0gbUxlblxuICBmb3IgKDsgZUxlbiA+IDA7IGJ1ZmZlcltvZmZzZXQgKyBpXSA9IGUgJiAweGZmLCBpICs9IGQsIGUgLz0gMjU2LCBlTGVuIC09IDgpIHt9XG5cbiAgYnVmZmVyW29mZnNldCArIGkgLSBkXSB8PSBzICogMTI4XG59XG4iLCIvLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuLy8gcmVzb2x2ZXMgLiBhbmQgLi4gZWxlbWVudHMgaW4gYSBwYXRoIGFycmF5IHdpdGggZGlyZWN0b3J5IG5hbWVzIHRoZXJlXG4vLyBtdXN0IGJlIG5vIHNsYXNoZXMsIGVtcHR5IGVsZW1lbnRzLCBvciBkZXZpY2UgbmFtZXMgKGM6XFwpIGluIHRoZSBhcnJheVxuLy8gKHNvIGFsc28gbm8gbGVhZGluZyBhbmQgdHJhaWxpbmcgc2xhc2hlcyAtIGl0IGRvZXMgbm90IGRpc3Rpbmd1aXNoXG4vLyByZWxhdGl2ZSBhbmQgYWJzb2x1dGUgcGF0aHMpXG5mdW5jdGlvbiBub3JtYWxpemVBcnJheShwYXJ0cywgYWxsb3dBYm92ZVJvb3QpIHtcbiAgLy8gaWYgdGhlIHBhdGggdHJpZXMgdG8gZ28gYWJvdmUgdGhlIHJvb3QsIGB1cGAgZW5kcyB1cCA+IDBcbiAgdmFyIHVwID0gMDtcbiAgZm9yICh2YXIgaSA9IHBhcnRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgdmFyIGxhc3QgPSBwYXJ0c1tpXTtcbiAgICBpZiAobGFzdCA9PT0gJy4nKSB7XG4gICAgICBwYXJ0cy5zcGxpY2UoaSwgMSk7XG4gICAgfSBlbHNlIGlmIChsYXN0ID09PSAnLi4nKSB7XG4gICAgICBwYXJ0cy5zcGxpY2UoaSwgMSk7XG4gICAgICB1cCsrO1xuICAgIH0gZWxzZSBpZiAodXApIHtcbiAgICAgIHBhcnRzLnNwbGljZShpLCAxKTtcbiAgICAgIHVwLS07XG4gICAgfVxuICB9XG5cbiAgLy8gaWYgdGhlIHBhdGggaXMgYWxsb3dlZCB0byBnbyBhYm92ZSB0aGUgcm9vdCwgcmVzdG9yZSBsZWFkaW5nIC4uc1xuICBpZiAoYWxsb3dBYm92ZVJvb3QpIHtcbiAgICBmb3IgKDsgdXAtLTsgdXApIHtcbiAgICAgIHBhcnRzLnVuc2hpZnQoJy4uJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHBhcnRzO1xufVxuXG4vLyBTcGxpdCBhIGZpbGVuYW1lIGludG8gW3Jvb3QsIGRpciwgYmFzZW5hbWUsIGV4dF0sIHVuaXggdmVyc2lvblxuLy8gJ3Jvb3QnIGlzIGp1c3QgYSBzbGFzaCwgb3Igbm90aGluZy5cbnZhciBzcGxpdFBhdGhSZSA9XG4gICAgL14oXFwvP3wpKFtcXHNcXFNdKj8pKCg/OlxcLnsxLDJ9fFteXFwvXSs/fCkoXFwuW14uXFwvXSp8KSkoPzpbXFwvXSopJC87XG52YXIgc3BsaXRQYXRoID0gZnVuY3Rpb24oZmlsZW5hbWUpIHtcbiAgcmV0dXJuIHNwbGl0UGF0aFJlLmV4ZWMoZmlsZW5hbWUpLnNsaWNlKDEpO1xufTtcblxuLy8gcGF0aC5yZXNvbHZlKFtmcm9tIC4uLl0sIHRvKVxuLy8gcG9zaXggdmVyc2lvblxuZXhwb3J0cy5yZXNvbHZlID0gZnVuY3Rpb24oKSB7XG4gIHZhciByZXNvbHZlZFBhdGggPSAnJyxcbiAgICAgIHJlc29sdmVkQWJzb2x1dGUgPSBmYWxzZTtcblxuICBmb3IgKHZhciBpID0gYXJndW1lbnRzLmxlbmd0aCAtIDE7IGkgPj0gLTEgJiYgIXJlc29sdmVkQWJzb2x1dGU7IGktLSkge1xuICAgIHZhciBwYXRoID0gKGkgPj0gMCkgPyBhcmd1bWVudHNbaV0gOiBwcm9jZXNzLmN3ZCgpO1xuXG4gICAgLy8gU2tpcCBlbXB0eSBhbmQgaW52YWxpZCBlbnRyaWVzXG4gICAgaWYgKHR5cGVvZiBwYXRoICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnRzIHRvIHBhdGgucmVzb2x2ZSBtdXN0IGJlIHN0cmluZ3MnKTtcbiAgICB9IGVsc2UgaWYgKCFwYXRoKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICByZXNvbHZlZFBhdGggPSBwYXRoICsgJy8nICsgcmVzb2x2ZWRQYXRoO1xuICAgIHJlc29sdmVkQWJzb2x1dGUgPSBwYXRoLmNoYXJBdCgwKSA9PT0gJy8nO1xuICB9XG5cbiAgLy8gQXQgdGhpcyBwb2ludCB0aGUgcGF0aCBzaG91bGQgYmUgcmVzb2x2ZWQgdG8gYSBmdWxsIGFic29sdXRlIHBhdGgsIGJ1dFxuICAvLyBoYW5kbGUgcmVsYXRpdmUgcGF0aHMgdG8gYmUgc2FmZSAobWlnaHQgaGFwcGVuIHdoZW4gcHJvY2Vzcy5jd2QoKSBmYWlscylcblxuICAvLyBOb3JtYWxpemUgdGhlIHBhdGhcbiAgcmVzb2x2ZWRQYXRoID0gbm9ybWFsaXplQXJyYXkoZmlsdGVyKHJlc29sdmVkUGF0aC5zcGxpdCgnLycpLCBmdW5jdGlvbihwKSB7XG4gICAgcmV0dXJuICEhcDtcbiAgfSksICFyZXNvbHZlZEFic29sdXRlKS5qb2luKCcvJyk7XG5cbiAgcmV0dXJuICgocmVzb2x2ZWRBYnNvbHV0ZSA/ICcvJyA6ICcnKSArIHJlc29sdmVkUGF0aCkgfHwgJy4nO1xufTtcblxuLy8gcGF0aC5ub3JtYWxpemUocGF0aClcbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMubm9ybWFsaXplID0gZnVuY3Rpb24ocGF0aCkge1xuICB2YXIgaXNBYnNvbHV0ZSA9IGV4cG9ydHMuaXNBYnNvbHV0ZShwYXRoKSxcbiAgICAgIHRyYWlsaW5nU2xhc2ggPSBzdWJzdHIocGF0aCwgLTEpID09PSAnLyc7XG5cbiAgLy8gTm9ybWFsaXplIHRoZSBwYXRoXG4gIHBhdGggPSBub3JtYWxpemVBcnJheShmaWx0ZXIocGF0aC5zcGxpdCgnLycpLCBmdW5jdGlvbihwKSB7XG4gICAgcmV0dXJuICEhcDtcbiAgfSksICFpc0Fic29sdXRlKS5qb2luKCcvJyk7XG5cbiAgaWYgKCFwYXRoICYmICFpc0Fic29sdXRlKSB7XG4gICAgcGF0aCA9ICcuJztcbiAgfVxuICBpZiAocGF0aCAmJiB0cmFpbGluZ1NsYXNoKSB7XG4gICAgcGF0aCArPSAnLyc7XG4gIH1cblxuICByZXR1cm4gKGlzQWJzb2x1dGUgPyAnLycgOiAnJykgKyBwYXRoO1xufTtcblxuLy8gcG9zaXggdmVyc2lvblxuZXhwb3J0cy5pc0Fic29sdXRlID0gZnVuY3Rpb24ocGF0aCkge1xuICByZXR1cm4gcGF0aC5jaGFyQXQoMCkgPT09ICcvJztcbn07XG5cbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMuam9pbiA9IGZ1bmN0aW9uKCkge1xuICB2YXIgcGF0aHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDApO1xuICByZXR1cm4gZXhwb3J0cy5ub3JtYWxpemUoZmlsdGVyKHBhdGhzLCBmdW5jdGlvbihwLCBpbmRleCkge1xuICAgIGlmICh0eXBlb2YgcCAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50cyB0byBwYXRoLmpvaW4gbXVzdCBiZSBzdHJpbmdzJyk7XG4gICAgfVxuICAgIHJldHVybiBwO1xuICB9KS5qb2luKCcvJykpO1xufTtcblxuXG4vLyBwYXRoLnJlbGF0aXZlKGZyb20sIHRvKVxuLy8gcG9zaXggdmVyc2lvblxuZXhwb3J0cy5yZWxhdGl2ZSA9IGZ1bmN0aW9uKGZyb20sIHRvKSB7XG4gIGZyb20gPSBleHBvcnRzLnJlc29sdmUoZnJvbSkuc3Vic3RyKDEpO1xuICB0byA9IGV4cG9ydHMucmVzb2x2ZSh0bykuc3Vic3RyKDEpO1xuXG4gIGZ1bmN0aW9uIHRyaW0oYXJyKSB7XG4gICAgdmFyIHN0YXJ0ID0gMDtcbiAgICBmb3IgKDsgc3RhcnQgPCBhcnIubGVuZ3RoOyBzdGFydCsrKSB7XG4gICAgICBpZiAoYXJyW3N0YXJ0XSAhPT0gJycpIGJyZWFrO1xuICAgIH1cblxuICAgIHZhciBlbmQgPSBhcnIubGVuZ3RoIC0gMTtcbiAgICBmb3IgKDsgZW5kID49IDA7IGVuZC0tKSB7XG4gICAgICBpZiAoYXJyW2VuZF0gIT09ICcnKSBicmVhaztcbiAgICB9XG5cbiAgICBpZiAoc3RhcnQgPiBlbmQpIHJldHVybiBbXTtcbiAgICByZXR1cm4gYXJyLnNsaWNlKHN0YXJ0LCBlbmQgLSBzdGFydCArIDEpO1xuICB9XG5cbiAgdmFyIGZyb21QYXJ0cyA9IHRyaW0oZnJvbS5zcGxpdCgnLycpKTtcbiAgdmFyIHRvUGFydHMgPSB0cmltKHRvLnNwbGl0KCcvJykpO1xuXG4gIHZhciBsZW5ndGggPSBNYXRoLm1pbihmcm9tUGFydHMubGVuZ3RoLCB0b1BhcnRzLmxlbmd0aCk7XG4gIHZhciBzYW1lUGFydHNMZW5ndGggPSBsZW5ndGg7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZnJvbVBhcnRzW2ldICE9PSB0b1BhcnRzW2ldKSB7XG4gICAgICBzYW1lUGFydHNMZW5ndGggPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgdmFyIG91dHB1dFBhcnRzID0gW107XG4gIGZvciAodmFyIGkgPSBzYW1lUGFydHNMZW5ndGg7IGkgPCBmcm9tUGFydHMubGVuZ3RoOyBpKyspIHtcbiAgICBvdXRwdXRQYXJ0cy5wdXNoKCcuLicpO1xuICB9XG5cbiAgb3V0cHV0UGFydHMgPSBvdXRwdXRQYXJ0cy5jb25jYXQodG9QYXJ0cy5zbGljZShzYW1lUGFydHNMZW5ndGgpKTtcblxuICByZXR1cm4gb3V0cHV0UGFydHMuam9pbignLycpO1xufTtcblxuZXhwb3J0cy5zZXAgPSAnLyc7XG5leHBvcnRzLmRlbGltaXRlciA9ICc6JztcblxuZXhwb3J0cy5kaXJuYW1lID0gZnVuY3Rpb24ocGF0aCkge1xuICB2YXIgcmVzdWx0ID0gc3BsaXRQYXRoKHBhdGgpLFxuICAgICAgcm9vdCA9IHJlc3VsdFswXSxcbiAgICAgIGRpciA9IHJlc3VsdFsxXTtcblxuICBpZiAoIXJvb3QgJiYgIWRpcikge1xuICAgIC8vIE5vIGRpcm5hbWUgd2hhdHNvZXZlclxuICAgIHJldHVybiAnLic7XG4gIH1cblxuICBpZiAoZGlyKSB7XG4gICAgLy8gSXQgaGFzIGEgZGlybmFtZSwgc3RyaXAgdHJhaWxpbmcgc2xhc2hcbiAgICBkaXIgPSBkaXIuc3Vic3RyKDAsIGRpci5sZW5ndGggLSAxKTtcbiAgfVxuXG4gIHJldHVybiByb290ICsgZGlyO1xufTtcblxuXG5leHBvcnRzLmJhc2VuYW1lID0gZnVuY3Rpb24ocGF0aCwgZXh0KSB7XG4gIHZhciBmID0gc3BsaXRQYXRoKHBhdGgpWzJdO1xuICAvLyBUT0RPOiBtYWtlIHRoaXMgY29tcGFyaXNvbiBjYXNlLWluc2Vuc2l0aXZlIG9uIHdpbmRvd3M/XG4gIGlmIChleHQgJiYgZi5zdWJzdHIoLTEgKiBleHQubGVuZ3RoKSA9PT0gZXh0KSB7XG4gICAgZiA9IGYuc3Vic3RyKDAsIGYubGVuZ3RoIC0gZXh0Lmxlbmd0aCk7XG4gIH1cbiAgcmV0dXJuIGY7XG59O1xuXG5cbmV4cG9ydHMuZXh0bmFtZSA9IGZ1bmN0aW9uKHBhdGgpIHtcbiAgcmV0dXJuIHNwbGl0UGF0aChwYXRoKVszXTtcbn07XG5cbmZ1bmN0aW9uIGZpbHRlciAoeHMsIGYpIHtcbiAgICBpZiAoeHMuZmlsdGVyKSByZXR1cm4geHMuZmlsdGVyKGYpO1xuICAgIHZhciByZXMgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHhzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChmKHhzW2ldLCBpLCB4cykpIHJlcy5wdXNoKHhzW2ldKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbn1cblxuLy8gU3RyaW5nLnByb3RvdHlwZS5zdWJzdHIgLSBuZWdhdGl2ZSBpbmRleCBkb24ndCB3b3JrIGluIElFOFxudmFyIHN1YnN0ciA9ICdhYicuc3Vic3RyKC0xKSA9PT0gJ2InXG4gICAgPyBmdW5jdGlvbiAoc3RyLCBzdGFydCwgbGVuKSB7IHJldHVybiBzdHIuc3Vic3RyKHN0YXJ0LCBsZW4pIH1cbiAgICA6IGZ1bmN0aW9uIChzdHIsIHN0YXJ0LCBsZW4pIHtcbiAgICAgICAgaWYgKHN0YXJ0IDwgMCkgc3RhcnQgPSBzdHIubGVuZ3RoICsgc3RhcnQ7XG4gICAgICAgIHJldHVybiBzdHIuc3Vic3RyKHN0YXJ0LCBsZW4pO1xuICAgIH1cbjtcbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIHZpdmlkIH0gZnJvbSAnLi92aXZpZCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFBsb3RNaXhpbnMgfSBmcm9tICcuL3Bsb3QubWl4aW5zJzsiLCJjb25zdCBMaW5lQ2hhcnRNaXhpbnMgPSAoQmFzZVBsb3RDbGFzcyk9PiBjbGFzcyBleHRlbmRzIEJhc2VQbG90Q2xhc3N7XG4gICAgbGluZSh7ZGF0YSwgdGl0bGUsIHhSYW5nZSwgeVJhbmdlLCB4TGFiZWwsIHlMYWJlbCwgc3R5bGUsIHdpZHRoLCBoZWlnaHQsIHBsb3RJZH0pe1xuICAgICAgICBjb25zdCBkMyA9IHRoaXMuZDM7XG4gICAgICAgIHN0eWxlID0gc3R5bGUhPT11bmRlZmluZWQ/c3R5bGU6e307XG4gICAgICAgIGNvbnN0IGRlZmF1bHRTdHlsZSA9IHsnLmxpbmUnOnsgZmlsbDogJ25vbmUnLCAnc3Ryb2tlLXdpZHRoJzogJzJweCd9fTtcbiAgICAgICAgc3R5bGUgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0U3R5bGUsIHN0eWxlKTtcbiAgICAgICAgbGV0IGt3ZGF0YSA9IEFycmF5LmlzQXJyYXkoZGF0YSk/XG4gICAgICAgICAgICAgICAgZGF0YS5tYXAoKGQsaXRoKT0+Wy4uLihBcnJheS5pc0FycmF5KGQpKT9kOltpdGgsZF0sJ2RhdGEnXSk6XG4gICAgICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMoZGF0YSkucmVkdWNlKChzLFtrLCBkYXRhXSk9PlsuLi5zLCBcbiAgICAgICAgICAgICAgICAgICAgLi4uZGF0YS5tYXAoKGQsaXRoKT0+Wy4uLihBcnJheS5pc0FycmF5KGQpKT9kOltpdGgsZF0sIGtdKV0sW10pO1xuICAgICAgICB2YXIgeyBzdmcsIHhNYXAsIHlNYXAsIGNvbG9yIH0gPSBcbiAgICAgICAgICAgIHRoaXMuYmFzZVBsb3Qoe2t3ZGF0YSwgdGl0bGUsIHhSYW5nZSwgeVJhbmdlLCB4TGFiZWwsIHlMYWJlbCwgc3R5bGUsIHdpZHRoLCBoZWlnaHR9KTtcbiAgICAgICAgdmFyIGxpbmVHZW5lcmF0b3IgPSBkMy5saW5lKClcbiAgICAgICAgICAgICAgICAueChmdW5jdGlvbihkKSB7IFxuICAgICAgICAgICAgICAgICAgICByZXR1cm4geE1hcChkWzBdKTsgXG4gICAgICAgICAgICAgICAgfSkgXG4gICAgICAgICAgICAgICAgLnkoZnVuY3Rpb24oZCkgeyBcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHlNYXAoZFsxXSk7IFxuICAgICAgICAgICAgICAgIH0pIFxuICAgICAgICAgICAgICAgIC5jdXJ2ZShkMy5jdXJ2ZU1vbm90b25lWCkgO1xuICAgICAgICBcbiAgICAgICAgbGV0IGJ5TmFtZSA9IGQzLm5lc3QoKS5rZXkoKFt4LHksbmFtZV0pID0+IG5hbWUpLmVudHJpZXMoa3dkYXRhKTtcbiAgICAgICAgc3ZnLnNlbGVjdEFsbChcIi5saW5lLWdyb3Vwc1wiKVxuICAgICAgICAgICAgLmRhdGEoYnlOYW1lKS5lbnRlcigpLmFwcGVuZChcImdcIilcbiAgICAgICAgICAgIC5hdHRyKCdjbGFzcycsJy5saW5lLWdyb3VwcycpXG4gICAgICAgICAgICAuYXR0cihcImlkXCIsIChkKT0+ZC5rZXkpXG4gICAgICAgICAgICAuc2VsZWN0QWxsKFwicGF0aFwiKS5kYXRhKChkKT0+W2RdKS5lbnRlcigpXG4gICAgICAgICAgICAuYXBwZW5kKFwicGF0aFwiKS5hdHRyKFwiY2xhc3NcIiwgXCJsaW5lXCIpXG4gICAgICAgICAgICAuYXR0cignc3Ryb2tlJywgKGQpPT5jb2xvcihkLmtleSkpXG4gICAgICAgICAgICAuYXR0cihcImRcIiwgKGQpPT5saW5lR2VuZXJhdG9yKGQudmFsdWVzKSk7XG4gICAgICAgIHN2Zy5zZWxlY3RBbGwoXCIuZG90XCIpXG4gICAgICAgICAgICAuZGF0YShrd2RhdGEpXG4gICAgICAgICAgICAuZW50ZXIoKS5hcHBlbmQoXCJjaXJjbGVcIikgLy8gVXNlcyB0aGUgZW50ZXIoKS5hcHBlbmQoKSBtZXRob2RcbiAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJkb3RcIikgLy8gQXNzaWduIGEgY2xhc3MgZm9yIHN0eWxpbmdcbiAgICAgICAgICAgIC5hdHRyKFwiY3hcIiwgZnVuY3Rpb24oW3gseV0pIHsgcmV0dXJuIHhNYXAoeCk7IH0pXG4gICAgICAgICAgICAuYXR0cihcImN5XCIsIGZ1bmN0aW9uKFt4LHldKSB7IHJldHVybiB5TWFwKHkpOyB9KVxuICAgICAgICAgICAgLmF0dHIoXCJmaWxsXCIsIGZ1bmN0aW9uKFt4LHksbmFtZV0pIHsgcmV0dXJuIGNvbG9yKG5hbWUpOyB9KVxuICAgICAgICAgICAgLmF0dHIoXCJyXCIsIDUpO1xuICAgICAgICB0aXRsZSA9IHRpdGxlP3RpdGxlOid1bm5hbWUnO1xuICAgICAgICBwbG90SWQgPSBwbG90SWQ/cGxvdElkOnRpdGxlLnJlcGxhY2UoL1xccy9nLCdfJykgKyAnLnBuZyc7XG4gICAgICAgIHJldHVybiBwbG90SWQ7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgTGluZUNoYXJ0TWl4aW5zOyIsImNvbnN0IFBsb3RNaXhpbnMgPSAoQmFzZUxvZ0NsYXNzKT0+IGNsYXNzIGV4dGVuZHMgQmFzZUxvZ0NsYXNze1xuICAgIGNvbm5lY3QodGFyZ2V0KXtcbiAgICAgICAgaWYoc3VwZXIuY29ubmVjdCl7XG4gICAgICAgICAgICBzdXBlci5jb25uZWN0KHRhcmdldCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5QbG90LmNvbm5lY3QodGFyZ2V0KTtcbiAgICB9XG5cbiAgICBzZXQgUGxvdChwbG90KXtcbiAgICAgICAgdGhpcy5wbG90dGVyID0gcGxvdDtcbiAgICB9XG4gICAgZ2V0IFBsb3QoKXtcbiAgICAgICAgaWYoIXRoaXMucGxvdHRlcil7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignUGxvdCBpcyBub3Qgc2V0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucGxvdHRlcjtcbiAgICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgUGxvdE1peGluczsiLCJjb25zdCBTY2F0dGVyQ2hhcnRNaXhpbnMgPSAoQmFzZVBsb3RDbGFzcyk9PiBjbGFzcyBleHRlbmRzIEJhc2VQbG90Q2xhc3N7XG4gICAgc2NhdHRlcih7ZGF0YSwgdGl0bGUsIHhSYW5nZSwgeVJhbmdlLCB4TGFiZWwsIHlMYWJlbCwgc3R5bGUsIHdpZHRoLCBoZWlnaHQsIHBsb3RJZH0pe1xuICAgICAgICBsZXQga3dkYXRhID0gQXJyYXkuaXNBcnJheShkYXRhKT9cbiAgICAgICAgICAgICAgICBkYXRhLm1hcChkPT5bLi4uZCwnZGF0YSddKTpcbiAgICAgICAgICAgICAgICBPYmplY3QuZW50cmllcyhkYXRhKS5yZWR1Y2UoKHMsW2ssIGRhdGFdKT0+Wy4uLnMsIC4uLmRhdGEubWFwKGQ9PlsuLi5kLCBrXSldLFtdKTtcbiAgICAgICAgbGV0IHsgc3ZnLCB4TWFwLCB5TWFwLCBjb2xvciB9ID0gXG4gICAgICAgICAgICB0aGlzLmJhc2VQbG90KHtrd2RhdGEsIHRpdGxlLCB4UmFuZ2UsIHlSYW5nZSwgeExhYmVsLCB5TGFiZWwsIHN0eWxlLCB3aWR0aCwgaGVpZ2h0fSk7XG4gICAgICAgIHN2Zy5zZWxlY3RBbGwoXCJjaXJjbGVcIilcbiAgICAgICAgICAgIC5kYXRhKGt3ZGF0YSlcbiAgICAgICAgICAgIC5lbnRlcigpLmFwcGVuZChcImNpcmNsZVwiKVxuICAgICAgICAgICAgLmF0dHIoXCJjeFwiLCAoW3gseSwgbmFtZV0pPT54TWFwKHgpKVxuICAgICAgICAgICAgLmF0dHIoXCJjeVwiLCAoW3gseSwgbmFtZV0pPT55TWFwKHkpKVxuICAgICAgICAgICAgLmF0dHIoXCJyXCIsIDUpXG4gICAgICAgICAgICAuYXR0cihcImZpbGxcIiwgKFt4LHksbmFtZV0pPT5jb2xvcihuYW1lKSk7XG4gICAgICAgIHRpdGxlID0gdGl0bGU/dGl0bGU6J3VubmFtZSc7XG4gICAgICAgIHBsb3RJZCA9IHBsb3RJZD9wbG90SWQ6dGl0bGUucmVwbGFjZSgvXFxzL2csJ18nKSArICcucG5nJztcbiAgICAgICAgcmV0dXJuIHBsb3RJZDtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTY2F0dGVyQ2hhcnRNaXhpbnM7IiwiaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnO1xuaW1wb3J0IHsgcGxhdGZvcm0gfSBmcm9tICdjYXVzYWwtbmV0LnV0aWxzJztcbmltcG9ydCB7IGRlZmF1bHQgYXMgTGluZUNoYXJ0TWl4aW5zIH0gZnJvbSAnLi9saW5lLmNoYXJ0Lm1peGlucyc7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIFNjYXR0ZXJDaGFydE1peGlucyB9IGZyb20gJy4vc2NhdHRlci5jaGFydC5taXhpbnMnO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBWaXZpZFdlYk1peGlucyB9IGZyb20gJy4vdml2aWQubWl4aW5zLndlYic7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIFZpdmlkTm9kZU1peGlucyB9IGZyb20gJy4vdml2aWQubWl4aW5zLm5vZGUnO1xuY2xhc3MgQmFzZVBsb3R7XG4gICAgY29uc3RydWN0b3IoKXtcblxuICAgIH1cbiAgICBjb25uZWN0KCl7XG4gICAgICAgIHRocm93IEVycm9yKCdpbXBsZW1lbnQgcmVxdWlyZScpO1xuICAgIH1cbn1cbmNsYXNzIFZpdmlkIGV4dGVuZHMgcGxhdGZvcm0ubWl4V2l0aChCYXNlUGxvdCwgXG4gICAgICAgIHsgbm9kZTogW1ZpdmlkTm9kZU1peGlucywgU2NhdHRlckNoYXJ0TWl4aW5zLCBMaW5lQ2hhcnRNaXhpbnNdLFxuICAgICAgICAgICB3ZWI6IFtWaXZpZFdlYk1peGlucywgU2NhdHRlckNoYXJ0TWl4aW5zLCBMaW5lQ2hhcnRNaXhpbnNdfSl7XG4gICAgY29uc3RydWN0b3IoZDMpe1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmQzID0gZDM7XG4gICAgICAgIHRoaXMuRGVmYXVsdFdpZHRoID0gOTAwO1xuICAgICAgICB0aGlzLkRlZmF1bHRIZWlnaHQgPSA2MDA7XG4gICAgICAgIHRoaXMuZGVmYXVsdFN0eWxlID0geyBzdmc6ICB7Zm9udDogJzEwcHggc2Fucy1zZXJpZicgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcubGFiZWwnOiB7J2ZpbGwnOiAnd2hpdGUnfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcuYXhpcyBwYXRoLCAuYXhpcyBsaW5lJzogeyBmaWxsOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnc3Ryb2tlJzogJyMwMDA7IHNoYXBlLXJlbmRlcmluZzogY3Jpc3BFZGdlcycgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcuZG90JyA6IHsgJ3N0cm9rZSc6ICcjMDAwJyB9IH07XG4gICAgfVxuXG4gICAgcG5nKHtkYXRhLCB3aWR0aCwgaGVpZ2h0LCB0aXRsZSwgcGxvdElkfSl7XG4gICAgICAgIGxldCBjYW52YXMgPSB0aGlzLm1ha2VDYW52YXNOb2RlKHt3aWR0aCwgaGVpZ2h0fSk7XG4gICAgICAgIGxldCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQ/Y2FudmFzLmdldENvbnRleHQoJzJkJyk6Y2FudmFzLm5vZGUoKS5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgIGxldCBpbWFnZWRhdGEgPSBjb250ZXh0LmNyZWF0ZUltYWdlRGF0YSh3aWR0aCwgaGVpZ2h0KTtcbiAgICAgICAgZm9yICh2YXIgeD0wOyB4PHdpZHRoOyB4KyspIHtcbiAgICAgICAgICAgIGZvciAodmFyIHk9MDsgeTxoZWlnaHQ7IHkrKykge1xuICAgICAgICAgICAgICAgIHZhciBwaXhlbGluZGV4ID0gKHkgKiB3aWR0aCArIHgpICogNDtcbiAgICAgICAgICAgICAgICBpbWFnZWRhdGEuZGF0YVtwaXhlbGluZGV4XSAgID0gZGF0YVtwaXhlbGluZGV4XTtcbiAgICAgICAgICAgICAgICBpbWFnZWRhdGEuZGF0YVtwaXhlbGluZGV4KzFdID0gZGF0YVtwaXhlbGluZGV4KzFdO1xuICAgICAgICAgICAgICAgIGltYWdlZGF0YS5kYXRhW3BpeGVsaW5kZXgrMl0gPSBkYXRhW3BpeGVsaW5kZXgrMl07XG4gICAgICAgICAgICAgICAgaW1hZ2VkYXRhLmRhdGFbcGl4ZWxpbmRleCszXSA9IGRhdGFbcGl4ZWxpbmRleCszXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb250ZXh0LnB1dEltYWdlRGF0YShpbWFnZWRhdGEsIDAsIDApO1xuICAgICAgICB0aXRsZSA9IHRpdGxlP3RpdGxlOid1bm5hbWUnO1xuICAgICAgICBwbG90SWQgPSBwbG90SWQ/cGxvdElkOnRpdGxlLnJlcGxhY2UoL1xccy9nLCdfJykgKyAnLnBuZyc7XG4gICAgICAgIHJldHVybiBwbG90SWQ7XG4gICAgfVxuXG4gICAgYmFzZVBsb3Qoe2t3ZGF0YSwgd2lkdGgsIGhlaWdodCwgeExhYmVsLCB5TGFiZWwsIHN0eWxlfSl7XG4gICAgICAgIGNvbnN0IGQzID0gdGhpcy5kMztcbiAgICAgICAgc3R5bGUgPSBzdHlsZSE9PXVuZGVmaW5lZD9zdHlsZTp7fTtcbiAgICAgICAgc3R5bGUgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmRlZmF1bHRTdHlsZSwgc3R5bGUpO1xuICAgICAgICBsZXQgY3NzU3R5bGUgPSB0aGlzLmpzb24yY3NzKHN0eWxlKTtcbiAgICAgICAgd2lkdGggID0gd2lkdGg/d2lkdGggOiB0aGlzLkRlZmF1bHRXaWR0aDtcbiAgICAgICAgaGVpZ2h0ID0gaGVpZ2h0P2hlaWdodCA6IHRoaXMuRGVmYXVsdEhlaWdodDtcbiAgICAgICAgY29uc3QgcGxvdE1hcmdpbiA9IHt0b3A6IDIwLCByaWdodDogMjAsIGJvdHRvbTogMzAsIGxlZnQ6IDQwfSxcbiAgICAgICAgICAgICAgcGxvdFdpZHRoICA9IHdpZHRoIC0gcGxvdE1hcmdpbi5sZWZ0IC0gcGxvdE1hcmdpbi5yaWdodCxcbiAgICAgICAgICAgICAgcGxvdEhlaWdodCA9IGhlaWdodCAtIHBsb3RNYXJnaW4udG9wIC0gcGxvdE1hcmdpbi5ib3R0b207XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgdmFyIHN2ZyA9IHRoaXMubWFrZVNWR25vZGUoe3dpZHRoLCBoZWlnaHQsIHN0eWxlczogY3NzU3R5bGV9KTtcbiAgICAgICAgXG4gICAgICAgIHN2ZyA9IHN2Zy5hcHBlbmQoXCJnXCIpXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInRyYW5zbGF0ZShcIiArIHBsb3RNYXJnaW4ubGVmdCArIFwiLFwiICsgcGxvdE1hcmdpbi50b3AgKyBcIilcIik7XG4gICAgICAgIGxldCB4RG9tYWluID0gZDMuZXh0ZW50KGt3ZGF0YSwgKFt4UG9pbnQsIHlQb2ludCwgbmFtZV0pPT54UG9pbnQpO1xuICAgICAgICBsZXQgeURvbWFpbiA9IGQzLmV4dGVudChrd2RhdGEsIChbeFBvaW50LCB5UG9pbnQsIG5hbWVdKT0+eVBvaW50KTtcbiAgICAgICAgXG4gICAgICAgIHZhciB4TWFwID0gZDMuc2NhbGVMaW5lYXIoKS5yYW5nZShbMCwgcGxvdFdpZHRoXSkuZG9tYWluKHhEb21haW4pO1xuICAgICAgICB2YXIgeU1hcCA9IGQzLnNjYWxlTGluZWFyKCkucmFuZ2UoW3Bsb3RIZWlnaHQsIDBdKS5kb21haW4oeURvbWFpbik7XG4gICAgICAgIFxuICAgICAgICB2YXIgeEF4aXMgPSBkMy5heGlzQm90dG9tKHhNYXApO1xuICAgICAgICB2YXIgeUF4aXMgPSBkMy5heGlzTGVmdCh5TWFwKTtcbiAgICAgICAgdmFyIGNvbG9yID0gZDMuc2NhbGVPcmRpbmFsKGQzLnNjaGVtZUNhdGVnb3J5MTApO1xuICAgICAgICBrd2RhdGEubWFwKChbeCx5LG5hbWVdKT0+Y29sb3IobmFtZSkpO1xuICAgICAgICB4TGFiZWwgPSB4TGFiZWw/eExhYmVsOid4IGF4aXMnO1xuICAgICAgICB5TGFiZWwgPSB5TGFiZWw/eUxhYmVsOid5IGF4aXMnO1xuICAgICAgICBzdmcuYXBwZW5kKFwiZ1wiKS5hdHRyKFwiY2xhc3NcIiwgXCJ4IGF4aXNcIilcbiAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKDAsXCIgKyBwbG90SGVpZ2h0ICsgXCIpXCIpLmNhbGwoeEF4aXMpXG4gICAgICAgICAgICAuYXBwZW5kKFwidGV4dFwiKS5hdHRyKFwiY2xhc3NcIiwgXCJsYWJlbFwiKVxuICAgICAgICAgICAgLmF0dHIoXCJ4XCIsIHBsb3RXaWR0aCkuYXR0cihcInlcIiwgMCkuc3R5bGUoJ2ZpbGwnLCd3aGl0ZScpXG4gICAgICAgICAgICAuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiLCBcImVuZFwiKS50ZXh0KHhMYWJlbCk7XG4gICAgICAgIHN2Zy5hcHBlbmQoXCJnXCIpLmF0dHIoXCJjbGFzc1wiLCBcInkgYXhpc1wiKS5jYWxsKHlBeGlzKVxuICAgICAgICAgICAgLmFwcGVuZChcInRleHRcIikuYXR0cihcImNsYXNzXCIsIFwibGFiZWxcIilcbiAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwicm90YXRlKC05MClcIilcbiAgICAgICAgICAgIC5hdHRyKFwieVwiLCA2KS5hdHRyKFwiZHlcIiwgXCIuOTFlbVwiKS5zdHlsZSgnZmlsbCcsJ3doaXRlJylcbiAgICAgICAgICAgIC5zdHlsZShcInRleHQtYW5jaG9yXCIsIFwiZW5kXCIpLnRleHQoeUxhYmVsKTtcbiAgICAgICAgXG4gICAgICAgIHZhciBsZWdlbmQgPSBzdmcuc2VsZWN0QWxsKFwiLmxlZ2VuZFwiKVxuICAgICAgICAgICAgLmRhdGEoY29sb3IuZG9tYWluKCkpLmVudGVyKClcbiAgICAgICAgICAgIC5hcHBlbmQoXCJnXCIpLmF0dHIoXCJjbGFzc1wiLCBcImxlZ2VuZFwiKVxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgKGQsaSk9PlwidHJhbnNsYXRlKDAsXCIgKyBpICogMjAgKyBcIilcIik7XG5cbiAgICAgICAgbGVnZW5kLmFwcGVuZChcInJlY3RcIikuYXR0cihcInhcIiwgcGxvdFdpZHRoIC0gMTgpLmF0dHIoXCJ3aWR0aFwiLCAxOClcbiAgICAgICAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIDE4KS5zdHlsZShcImZpbGxcIiwgY29sb3IpO1xuXG4gICAgICAgIGxlZ2VuZC5hcHBlbmQoXCJ0ZXh0XCIpLmF0dHIoXCJ4XCIsIHBsb3RXaWR0aCAtIDI0KS5hdHRyKFwieVwiLCA5KVxuICAgICAgICAgICAgLmF0dHIoXCJkeVwiLCBcIi4zNWVtXCIpLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJlbmRcIikudGV4dChkPT5kKTtcbiAgICAgICAgdGhpcy5wbG90U3R5bGUgPSBjc3NTdHlsZTtcbiAgICAgICAgcmV0dXJuICB7IHN2ZywgeE1hcCwgeU1hcCwgY29sb3IgfTtcbiAgICB9XG59XG5sZXQgdml2aWQgPSBuZXcgVml2aWQoZDMpO1xuZXhwb3J0IGRlZmF1bHQgdml2aWQ7IiwiaW1wb3J0IHsgZGVmYXVsdCBhcyBEM04gfSBmcm9tICd2aXZpZC5kMy1ub2RlJztcbmltcG9ydCB7IGRlZmF1bHQgYXMgY2FudmFzTW9kdWxlIH0gZnJvbSAnY2FudmFzJztcbmltcG9ydCB7IGRlZmF1bHQgYXMgc3ZnMnBuZyB9IGZyb20gJ3N2ZzJwbmcnO1xuaW1wb3J0ICogYXMgZnMgZnJvbSAnZnMnO1xuY29uc3QgVml2aWROb2RlTWl4aW5zID0gKEJhc2VWaXZpZENsYXNzKT0+IGNsYXNzIGV4dGVuZHMgQmFzZVZpdmlkQ2xhc3N7XG4gICAgY29ubmVjdChjaGFubmVsKXtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgYXN5bmMgZXhwb3J0MnBuZyhvdXRwdXRQYXRoKXtcbiAgICAgICAgY29uc3QgZDNuID0gdGhpcy5kM3Bsb3Q7XG4gICAgICAgIGlmIChkM24ub3B0aW9ucy5jYW52YXMpIHtcbiAgICAgICAgICAgIGNvbnN0IGNhbnZhcyA9IGQzbi5vcHRpb25zLmNhbnZhcztcbiAgICAgICAgICAgIGxldCBzdHJlYW0gPSBjYW52YXMucG5nU3RyZWFtKCkucGlwZShmcy5jcmVhdGVXcml0ZVN0cmVhbShvdXRwdXRQYXRoKSk7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCk9PntcbiAgICAgICAgICAgICAgICBzdHJlYW0ub24oJ2ZpbmlzaCcsIGZ1bmN0aW9uICgpIHsgcmVzb2x2ZShvdXRwdXRQYXRoKTsgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB2YXIgc3ZnQnVmZmVyID0gQnVmZmVyLmZyb20oZDNuLnN2Z1N0cmluZygpLCAndXRmLTgnKTtcbiAgICAgICAgICAgIGxldCBidWZmZXIgPSBhd2FpdCBzdmcycG5nKHN2Z0J1ZmZlcik7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCk9PntcbiAgICAgICAgICAgICAgICBmcy53cml0ZUZpbGUob3V0cHV0UGF0aCwgYnVmZmVyLCAoZXJyKT0+e1xuICAgICAgICAgICAgICAgICAgICBpZihlcnIpeyBcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdCgnZXJyb3IgZXhwb3J0IGZpbGUnKTsgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUob3V0cHV0UGF0aCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTsgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBqc29uMmNzcyhvYmplY3RTdHlsZSl7XG4gICAgICAgIGxldCBjc3NTdHJpbmcgPSBPYmplY3QuZW50cmllcyhvYmplY3RTdHlsZSkucmVkdWNlKChhY2MxLCBjdXIxKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGAke2FjYzF9XFxuXFxuJHtjdXIxWzBdfSBgICsgXG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKGN1cjFbMV0pXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVkdWNlKChhY2MyLCBjdXIyKSA9PiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHthY2MyfVxcblxcdCR7Y3VyMn06ICR7Y3VyMVsxXVtjdXIyXX07YCwgJ3snKSArICdcXG59JztcbiAgICAgICAgICAgIH0sICcnKTtcbiAgICAgICAgcmV0dXJuIGNzc1N0cmluZztcbiAgICB9XG5cbiAgICBtYWtlU1ZHbm9kZSh7d2lkdGgsIGhlaWdodCwgc3R5bGVzfSl7XG4gICAgICAgIHZhciBvcHRpb25zID0geyBzdHlsZXMsIGNhbnZhc01vZHVsZSwgZDM6dGhpcy5kMyB9O1xuICAgICAgICB0aGlzLmQzcGxvdCA9IG5ldyBEM04ob3B0aW9ucyk7XG4gICAgICAgIHJldHVybiB0aGlzLmQzcGxvdC5jcmVhdGVTVkcod2lkdGgsIGhlaWdodCk7XG4gICAgfVxuXG4gICAgbWFrZUNhbnZhc05vZGUoe3dpZHRoLCBoZWlnaHR9KXtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB7IHN0eWxlczonJywgY2FudmFzTW9kdWxlLCBkMzp0aGlzLmQzIH07XG4gICAgICAgIHRoaXMuZDNwbG90ID0gbmV3IEQzTihvcHRpb25zKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZDNwbG90LmNyZWF0ZUNhbnZhcyh3aWR0aCwgaGVpZ2h0KTtcbiAgICB9XG5cbiAgICBhc3luYyBzaG93KG9wdGlvbj17fSl7XG4gICAgICAgIGxldCB7cGxvdElkfSA9IG9wdGlvbjtcbiAgICAgICAgdGhpcy5vcGVuID0gcmVxdWlyZShcIm9wZW5cIik7XG4gICAgICAgIGF3YWl0IHRoaXMuZXhwb3J0MnBuZyhwbG90SWQpO1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5vcGVuKHBsb3RJZCk7XG4gICAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IFZpdmlkTm9kZU1peGluczsiLCJpbXBvcnQgeyByZXNvbHZlIH0gZnJvbSBcInBhdGhcIjtcblxuY29uc3QgVml2aWRXZWJNaXhpbnMgPSAoQmFzZVZpdmlkQ2xhc3MpPT4gY2xhc3MgZXh0ZW5kcyBCYXNlVml2aWRDbGFzc3tcbiAgICBjb25uZWN0KHRhcmdldCl7XG4gICAgICAgIGNvbnNvbGUubG9nKHRhcmdldCk7XG4gICAgICAgIGlmKHR5cGVvZiB0YXJnZXQgPT09ICdzdHJpbmcnICYmIHRhcmdldC5zdGFydHNXaXRoKCcjJykpe1xuICAgICAgICAgICAgdGhpcy5kM24gPSB0aGlzLmQzLnNlbGVjdCh0YXJnZXQpO1xuICAgICAgICAgICAgbGV0IHsgd2lkdGggfSA9IHRoaXMuZDNuLm5vZGUoKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgIHRoaXMuRGVmYXVsdFdpZHRoID0gd2lkdGggLSA0MDtcbiAgICAgICAgICAgIHRoaXMuRGVmYXVsdFdpZHRoID0gd2lkdGgqMC44O1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcihgY2Fubm90IGNvbm5lY3QgdG8gJHt0YXJnZXR9YCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBtYWtlU1ZHbm9kZSh7d2lkdGgsIGhlaWdodH0pe1xuICAgICAgICByZXR1cm4gdGhpcy5kM24uYXBwZW5kKCdzdmcnKS5hdHRyKCd3aWR0aCcsIHdpZHRoKS5hdHRyKCdoZWlnaHQnLCBoZWlnaHQpO1xuICAgIH1cblxuICAgIG1ha2VDYW52YXNOb2RlKHt3aWR0aCwgaGVpZ2h0fSl7XG4gICAgICAgIHJldHVybiB0aGlzLmQzbi5hcHBlbmQoJ2NhbnZhcycpLmF0dHIoJ3dpZHRoJywgd2lkdGgpLmF0dHIoJ2hlaWdodCcsIGhlaWdodCk7XG4gICAgfVxuXG4gICAganNvbjJjc3Mob2JqZWN0U3R5bGUpe1xuICAgICAgICBsZXQgY3NzU3RyaW5nID0gT2JqZWN0LmVudHJpZXMob2JqZWN0U3R5bGUpLnJlZHVjZSgoYWNjMSwgY3VyMSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBgJHthY2MxfVxcblxcbiR7Y3VyMVswXX0gYCArIFxuICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhjdXIxWzFdKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlZHVjZSgoYWNjMiwgY3VyMikgPT4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7YWNjMn1cXG5cXHQke2N1cjJ9OiAke2N1cjFbMV1bY3VyMl19O2AsICd7JykgKyAnXFxufSc7XG4gICAgICAgICAgICB9LCAnJyk7XG4gICAgICAgIFxuICAgICAgICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgICAgICBzdHlsZS50eXBlID0gJ3RleHQvY3NzJztcbiAgICAgICAgc3R5bGUuaW5uZXJIVE1MID0gY3NzU3RyaW5nO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdLmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgICAgICAgcmV0dXJuIGNzc1N0cmluZztcbiAgICB9XG5cbiAgICBhc3luYyBzaG93KG9wdGlvbj17cGxvdElkOiduZXcgcGxvdCd9KXtcbiAgICAgICAgbGV0IHtwbG90SWR9ID0gb3B0aW9uO1xuICAgICAgICAvL1RPRE86IHJlbW92ZSBpZiBub3QgbmVlZFxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCk9PntcbiAgICAgICAgICAgIHJlc29sdmUocGxvdElkKTtcbiAgICAgICAgfSk7XG4gICAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IFZpdmlkV2ViTWl4aW5zOyIsIi8qKlxuICogVGhpcyBCYXNlTG9nZ2VyIGNsYXNzIHByb3ZpZGVkIGFic3RyYWN0IGNsYXNzIGZvciBleHRlbmRpbmcgbmV3IGxvZ2dlciBjbGFzc1xuICogQGNsYXNzIEJhc2VMb2dcbiAqL1xuY2xhc3MgQmFzZUxvZ2dlcntcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLkFjY2VwdGVkTGV2ZWxzID0ge2RlYnVnOiAwLCBsb2c6MSwgd2FybjoyLCBlcnJvcjogM307XG4gICAgICAgIHRoaXMuckFjY2VwdGVkTGV2ZWxzID0gezA6J2RlYnVnJywgMTogJ2xvZycsIDI6ICd3YXJuJywgMzogJ2Vycm9yJ307XG4gICAgICAgIHRoaXMubGV2ZWwgPSB0aGlzLkFjY2VwdGVkTGV2ZWxzWydkZWJ1ZyddO1xuICAgIH1cbiAgICBzZXQgTGV2ZWwobGV2ZWwpe1xuICAgICAgICBpZih0aGlzLkFjY2VwdGVkTGV2ZWxzW2xldmVsXSE9PXVuZGVmaW5lZCl7XG4gICAgICAgICAgICB0aGlzLmxldmVsID0gdGhpcy5BY2NlcHRlZExldmVsc1tsZXZlbF07ICAgIFxuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcihgJHtsZXZlbH0gbXVzdCBiZSBvbmUgb2YgJHtPYmplY3Qua2V5cyh0aGlzLkFjY2VwdGVkTGV2ZWxzKX1gKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXQgTGV2ZWwoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuckFjY2VwdGVkTGV2ZWxzW3RoaXMubGV2ZWxdO1xuICAgIH1cblxuICAgIGNvbm5lY3QoKXtcbiAgICAgICAgdGhyb3cgRXJyb3IoJ2ltcGxlbWVudCByZXF1aXJlZCcpO1xuICAgIH1cblxuICAgIGxvZyhtZXNzYWdlKXtcbiAgICAgICAgdGhyb3cgRXJyb3IoJ2ltcGxlbWVudCByZXF1aXJlZCcpO1xuICAgIH1cbiAgICBcbiAgICB3YXJuKG1lc3NhZ2Upe1xuICAgICAgICB0aHJvdyBFcnJvcignaW1wbGVtZW50IHJlcXVpcmVkJyk7XG4gICAgfVxuICAgIFxuICAgIGVycm9yKG1lc3NhZ2Upe1xuICAgICAgICB0aHJvdyBFcnJvcignaW1wbGVtZW50IHJlcXVpcmVkJyk7XG4gICAgfVxuXG4gICAgZGVidWcobWVzc2FnZSl7XG4gICAgICAgIHRocm93IEVycm9yKCdpbXBsZW1lbnQgcmVxdWlyZWQnKTtcbiAgICB9XG5cbiAgICBncm91cEJlZ2luKG5hbWUpe1xuICAgICAgICB0aHJvdyBFcnJvcignaW1wbGVtZW50IHJlcXVpcmVkJyk7XG4gICAgfVxuXG4gICAgZ3JvdXBFbmQoKXtcbiAgICAgICAgdGhyb3cgRXJyb3IoJ2ltcGxlbWVudCByZXF1aXJlZCcpO1xuICAgIH1cblxuICAgIHByb2dyZXNzQmVnaW4ocmFuZ2Upe1xuICAgICAgICB0aHJvdyBFcnJvcignaW1wbGVtZW50IHJlcXVpcmVkJyk7XG4gICAgfVxuXG4gICAgcHJvZ3Jlc3NVcGRhdGUobWVzc2FnZSl7XG4gICAgICAgIHRocm93IEVycm9yKCdpbXBsZW1lbnQgcmVxdWlyZWQnKTtcbiAgICB9XG5cbiAgICBwcm9ncmVzc0VuZChtZXNzYWdlKXtcbiAgICAgICAgdGhyb3cgRXJyb3IoJ2ltcGxlbWVudCByZXF1aXJlZCcpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQmFzZUxvZ2dlcjsiLCJleHBvcnQgeyBkZWZhdWx0IGFzIHRlcm1Mb2dnZXIgfSBmcm9tICcuL3Rlcm1Mb2dnZXInO1xuZXhwb3J0IHsgdml2aWQgfSBmcm9tICcuL1ZpdmlkL2luaXQnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBMb2dnZXJNaXhpbnMgfSBmcm9tICcuL2xvZ2dlci5taXhpbnMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBCYXNlTG9nZ2VyIH0gZnJvbSAnLi9iYXNlTG9nZ2VyJztcblxuIiwiaW1wb3J0IHtkZWZhdWx0IGFzIEJhc2VMb2dnZXIgfSBmcm9tICcuL2Jhc2VMb2dnZXInO1xuaW1wb3J0IHsgYXNzZXJ0IH0gZnJvbSAnY2F1c2FsLW5ldC51dGlscyc7XG4vKipcbiAqIFRoaXMgTG9nZ2VyTWl4aW5zIGNsYXNzIHByb3ZpZGVzIG1peGlucyBmb3IgYWNjcXVpcmluZyBsb2dnZXJcbiAqIEBjbGFzcyBMb2dnZXJNaXhpbnNcbiAqIEBleHRlbmRzIEJhc2VDbGFzc1xuICogQGV4YW1wbGVcbiAqIFtFWEFNUExFIC4uL2V4YW1wbGVzL2xvZ2dlci5taXhpbnMuYmFiZWwuanNdXG4gKi9cbmNvbnN0IExvZ2dlck1peGlucyA9IChCYXNlQ2xhc3MpPT4gY2xhc3MgZXh0ZW5kcyBCYXNlQ2xhc3N7XG4gICAgXG4gICAgc2V0IExvZ2dlcihsb2dnZXIpe1xuICAgICAgICBhc3NlcnQuYmVJbnN0YW5jZU9mKGxvZ2dlciwgQmFzZUxvZ2dlcik7XG4gICAgICAgIHRoaXMubG9nZ2VyID0gbG9nZ2VyO1xuICAgIH1cbiAgICBcbiAgICBnZXQgTG9nZ2VyKCl7XG4gICAgICAgIGlmKCF0aGlzLmxvZ2dlcil7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignbG9nZ2VyIGlzIG5vdCBzZXQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5sb2dnZXI7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgTG9nZ2VyTWl4aW5zOyIsIi8vIG9yaWdpbiBjb2RlIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2x1Y3lnaWxiZXJ0L2pzb24tZGlzcGxheS9ibG9iL21hc3Rlci9qc29uLWRpc3BsYXkuanNcbi8vIENvcHlyaWdodCAoYykgMjAxNyBMdWN5IEdpbGJlcnRcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEpzb25WaWV3e1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgfVxuICAgIHN0YXRpYyBKU09ORGlzcGxheShqc29uLCBvcGVuTGV2ZWxzQXJnLCBzdHlsZU9wdGlvbnNBcmcpIHtcbiAgICAgICAgdmFyIERFRkFVTFRfU1RZTEVfT1BUSU9OUyA9IHtcbiAgICAgICAgICByb290OiB7IHRhZzogJ3ByZScsIHN0eWxlOiAncGFkZGluZzogNXB4OyBmb250LXNpemU6IDFyZW07JyB9LFxuICAgICAgICAgIHRpdGxlQ29udGFpbmVyOiB7IHRhZzogJ2RpdicsIHN0eWxlOiAnbWFyZ2luLWJvdHRvbTogM3B4OycgfSxcbiAgICAgICAgICB0aXRsZTogeyB0YWc6ICdzcGFuJywgc3R5bGU6ICdjdXJzb3I6IHBvaW50ZXI7JyB9LFxuICAgICAgICAgIHRpdGxlVGV4dDogeyB0YWc6ICdzcGFuJywgc3R5bGU6ICcnIH0sXG4gICAgICAgICAgb3BlbkJ1dHRvbjogeyBcbiAgICAgICAgICAgIHRhZzogJ3NwYW4nLFxuICAgICAgICAgICAgc3R5bGU6ICdkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IG1hcmdpbjogMHB4IDdweCAwcHggMnB4OyBib3JkZXItdG9wOiA1cHggc29saWQgdHJhbnNwYXJlbnQ7ICdcbiAgICAgICAgICAgICAgICAgKyAnYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIHRyYW5zcGFyZW50OyBib3JkZXItbGVmdDogNXB4IHNvbGlkIGJsYWNrOycsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBjb250ZW50c0NvbnRhaW5lcjogeyB0YWc6ICdkaXYnLCBzdHlsZTogJ3BhZGRpbmctbGVmdDogMThweDsnIH0sXG4gICAgICAgICAga2V5VmFsdWVQYWlyOiB7IHRhZzogJ3NwYW4nLCBzdHlsZTogJ2Rpc3BsYXk6IGJsb2NrOyBtYXJnaW4tYm90dG9tOiAycHg7JyB9LFxuICAgICAgICAgIGtleTogeyB0YWc6ICdzcGFuJywgc3R5bGU6ICdjb2xvcjogZGFya2JsdWU7JyB9LFxuICAgICAgICAgIHN5bWJvbFZhbHVlOiB7IHRhZzogJ3NwYW4nLCBzdHlsZTogJ2NvbG9yOiBkYXJrZ3JlZW47JyB9LFxuICAgICAgICAgIHN0cmluZ1ZhbHVlOiB7IHRhZzogJ3NwYW4nLCBzdHlsZTogJ2NvbG9yOiBjcmltc29uOycgfSxcbiAgICAgICAgICBudW1iZXJWYWx1ZTogeyB0YWc6ICdzcGFuJywgc3R5bGU6ICdjb2xvcjogYmx1ZTsnIH0sXG4gICAgICAgICAgYm9vbGVhblZhbHVlOiB7IHRhZzogJ3NwYW4nLCBzdHlsZTogJ2NvbG9yOiBibHVlOycgfSxcbiAgICAgICAgICBudWxsVmFsdWU6IHsgdGFnOiAnc3BhbicsIHN0eWxlOiAnY29sb3I6IGJsdWU7JyB9LFxuICAgICAgICB9O1xuICAgICAgICB2YXIgb3BlbkxldmVscyA9IGlzTmFOKHBhcnNlSW50KG9wZW5MZXZlbHNBcmcpKSA/IEluZmluaXR5IDogcGFyc2VJbnQob3BlbkxldmVsc0FyZyk7XG4gICAgICAgIHZhciBzdHlsZU9wdGlvbnMgPSB0eXBlb2Ygc3R5bGVPcHRpb25zQXJnID09PSAnb2JqZWN0JyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgID8gbWVyZ2VTdHlsZU9wdGlvbnMoREVGQVVMVF9TVFlMRV9PUFRJT05TLCBzdHlsZU9wdGlvbnNBcmcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA6IERFRkFVTFRfU1RZTEVfT1BUSU9OUztcbiAgICBcbiAgICAgICAgaWYgKHR5cGVvZiBPYmplY3QuYXNzaWduICE9ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBPYmplY3QuYXNzaWduID0gZnVuY3Rpb24odGFyZ2V0KSB7XG4gICAgICAgICAgICBpZiAodGFyZ2V0ID09IG51bGwpIHtcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNvbnZlcnQgdW5kZWZpbmVkIG9yIG51bGwgdG8gb2JqZWN0Jyk7XG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICB2YXIgdG8gPSBPYmplY3QodGFyZ2V0KTtcbiAgICBcbiAgICAgICAgICAgIGZvciAodmFyIGluZGV4ID0gMTsgaW5kZXggPCBhcmd1bWVudHMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgIHZhciBuZXh0U291cmNlID0gYXJndW1lbnRzW2luZGV4XTtcbiAgICBcbiAgICAgICAgICAgICAgaWYgKG5leHRTb3VyY2UgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIG5leHRLZXkgaW4gbmV4dFNvdXJjZSkge1xuICAgICAgICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChuZXh0U291cmNlLCBuZXh0S2V5KSkge1xuICAgICAgICAgICAgICAgICAgICB0b1tuZXh0S2V5XSA9IG5leHRTb3VyY2VbbmV4dEtleV07XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdG87XG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHN0eWxlT3B0aW9ucy5yb290LnRhZyk7XG4gICAgICAgICAgZWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gc3R5bGVPcHRpb25zLnJvb3Quc3R5bGU7XG4gICAgXG4gICAgICAgICAgaWYgKGpzb24gPT09IG51bGwgfHwganNvbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB2YXIgdm9pZEVsZW1lbnQgPSBnZXRWYWx1ZShudWxsKTtcbiAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQodm9pZEVsZW1lbnQpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoanNvbiBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgICAgIHZhciBkYXRlRWxlbWVudCA9IGdldFZhbHVlKGpzb24udG9JU09TdHJpbmcoKSk7XG4gICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGRhdGVFbGVtZW50KTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBqc29uICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgdmFyIG5vbkV4cGFuZGFibGVFbGVtZW50ID0gZ2V0VmFsdWUoanNvbik7XG4gICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKG5vbkV4cGFuZGFibGVFbGVtZW50KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIHRpdGxlID0gQXJyYXkuaXNBcnJheShqc29uKSA/ICdBcnJheVsnICsganNvbi5sZW5ndGggKyAnXScgOiAnT2JqZWN0JztcbiAgICAgICAgICAgIHZhciB0aGlzTGV2ZWxJc0Nsb3NlZCA9IG9wZW5MZXZlbHMgPCAxO1xuICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChnZXRUaXRsZSh0aXRsZSwgbnVsbCwgdGhpc0xldmVsSXNDbG9zZWQpKTtcbiAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoY29udmVydEpzb25Ub0VsZW1lbnRzKGpzb24sIDEpKTtcbiAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgZnVuY3Rpb24gY29udmVydEpzb25Ub0VsZW1lbnRzKGpzb24sIGluZGV4KSB7XG4gICAgICAgICAgdmFyIHRoaXNMZXZlbElzQ2xvc2VkID0gaW5kZXggPiBvcGVuTGV2ZWxzO1xuICAgICAgICAgIHZhciBuZXh0TGV2ZWxJc0Nsb3NlZCA9IGluZGV4ICsgMSA+IG9wZW5MZXZlbHM7XG4gICAgICAgICAgdmFyIGNvbnRhaW5lciA9IGdldENvbnRlbnRzQ29udGFpbmVyKHRoaXNMZXZlbElzQ2xvc2VkKTtcbiAgICAgICAgICBmb3IgKHZhciBrZXkgaW4ganNvbikge1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoanNvbltrZXldKSkge1xuICAgICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZ2V0VGl0bGUoJ0FycmF5WycgKyBqc29uW2tleV0ubGVuZ3RoICsgJ10nLCBrZXksIG5leHRMZXZlbElzQ2xvc2VkKSk7XG4gICAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb252ZXJ0SnNvblRvRWxlbWVudHMoanNvbltrZXldLCBpbmRleCArIDEpKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoanNvbltrZXldID09PSBudWxsIHx8IGpzb25ba2V5XSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChnZXRTdGFuZGFyZFBhaXIoa2V5LCBudWxsKSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGpzb25ba2V5XSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGdldFN0YW5kYXJkUGFpcihrZXksIGpzb25ba2V5XS50b0lTT1N0cmluZygpKSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBqc29uW2tleV0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChnZXRUaXRsZSgnT2JqZWN0Jywga2V5LCBuZXh0TGV2ZWxJc0Nsb3NlZCkpO1xuICAgICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY29udmVydEpzb25Ub0VsZW1lbnRzKGpzb25ba2V5XSwgaW5kZXggKyAxKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZ2V0U3RhbmRhcmRQYWlyKGtleSwganNvbltrZXldKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhqc29uKS5mb3JFYWNoKGZ1bmN0aW9uKHN5bWJvbCkge1xuICAgICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZ2V0U3RhbmRhcmRQYWlyKHN5bWJvbC50b1N0cmluZygpLCBqc29uW3N5bWJvbF0pKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICByZXR1cm4gY29udGFpbmVyO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIGZ1bmN0aW9uIGdldFRpdGxlKHRpdGxlVGV4dCwgb3B0aW9uYWxLZXksIGxldmVsSXNDbG9zZWQpIHtcbiAgICAgICAgICB2YXIgY3VycmVudGx5Q2xvc2VkID0gbGV2ZWxJc0Nsb3NlZDtcbiAgICAgICAgICB2YXIgY29udGFpbmVyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoc3R5bGVPcHRpb25zLnRpdGxlQ29udGFpbmVyLnRhZyk7XG4gICAgICAgICAgY29udGFpbmVyRWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gc3R5bGVPcHRpb25zLnRpdGxlQ29udGFpbmVyLnN0eWxlO1xuICAgICAgICAgIGNvbnRhaW5lckVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLXRlc3QnLCAndGl0bGVDb250YWluZXInKTtcbiAgICAgICAgICB2YXIgdGV4dEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHN0eWxlT3B0aW9ucy50aXRsZVRleHQudGFnKTtcbiAgICAgICAgICB2YXIgdGl0bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzdHlsZU9wdGlvbnMudGl0bGUudGFnKTtcbiAgICAgICAgICB0aXRsZUVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IHN0eWxlT3B0aW9ucy50aXRsZS5zdHlsZTtcbiAgICAgICAgICB0ZXh0RWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gc3R5bGVPcHRpb25zLnRpdGxlVGV4dC5zdHlsZTtcbiAgICBcbiAgICAgICAgICB0aXRsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZ2V0T3BlbkJ1dHRvbihsZXZlbElzQ2xvc2VkKSk7XG4gICAgICAgICAgaWYgKG9wdGlvbmFsS2V5KSB7XG4gICAgICAgICAgICB0ZXh0RWxlbWVudC5hcHBlbmRDaGlsZChnZXRLZXkob3B0aW9uYWxLZXkpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGV4dEVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGl0bGVUZXh0KSk7XG4gICAgICAgICAgdGl0bGVFbGVtZW50LmFwcGVuZENoaWxkKHRleHRFbGVtZW50KTtcbiAgICBcbiAgICAgICAgICB0aXRsZUVsZW1lbnQub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBvcGVuQnV0dG9uID0gdGl0bGVFbGVtZW50LmZpcnN0Q2hpbGQ7XG4gICAgICAgICAgICB2YXIgb2JqZWN0Q29udGVudHMgPSB0aXRsZUVsZW1lbnQucGFyZW50Tm9kZS5uZXh0U2libGluZztcbiAgICAgICAgICAgIG9iamVjdENvbnRlbnRzLnN0eWxlLmRpc3BsYXkgPSBjdXJyZW50bHlDbG9zZWQgPyAnYmxvY2snIDogJ25vbmUnO1xuICAgICAgICAgICAgb3BlbkJ1dHRvbi5zdHlsZS50cmFuc2Zvcm0gPSBjdXJyZW50bHlDbG9zZWQgPyAncm90YXRlKDkwZGVnKScgOiAncm90YXRlKDBkZWcpJztcbiAgICAgICAgICAgIGN1cnJlbnRseUNsb3NlZCA9ICFjdXJyZW50bHlDbG9zZWQ7XG4gICAgICAgICAgfTtcbiAgICBcbiAgICAgICAgICBjb250YWluZXJFbGVtZW50LmFwcGVuZENoaWxkKHRpdGxlRWxlbWVudCk7XG4gICAgICAgICAgcmV0dXJuIGNvbnRhaW5lckVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgZnVuY3Rpb24gZ2V0T3BlbkJ1dHRvbihsZXZlbElzQ2xvc2VkKSB7XG4gICAgICAgICAgdmFyIGJ1dHRvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHN0eWxlT3B0aW9ucy5vcGVuQnV0dG9uLnRhZyk7XG4gICAgICAgICAgYnV0dG9uRWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gc3R5bGVPcHRpb25zLm9wZW5CdXR0b24uc3R5bGU7XG4gICAgICAgICAgYnV0dG9uRWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSBsZXZlbElzQ2xvc2VkID8gJ3JvdGF0ZSgwZGVnKScgOiAncm90YXRlKDkwZGVnKSc7XG4gICAgICAgICAgcmV0dXJuIGJ1dHRvbkVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgZnVuY3Rpb24gZ2V0Q29udGVudHNDb250YWluZXIoaXNDbG9zZWQpIHtcbiAgICAgICAgICB2YXIgY29udGFpbmVyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoc3R5bGVPcHRpb25zLmNvbnRlbnRzQ29udGFpbmVyLnRhZyk7XG4gICAgICAgICAgY29udGFpbmVyRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGVzdCcsICdjb250ZW50c0NvbnRhaW5lcicpO1xuICAgICAgICAgIGNvbnRhaW5lckVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IHN0eWxlT3B0aW9ucy5jb250ZW50c0NvbnRhaW5lci5zdHlsZTtcbiAgICAgICAgICBjb250YWluZXJFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAoaXNDbG9zZWQgPyAnbm9uZScgOiAnYmxvY2snKTtcbiAgICAgICAgICByZXR1cm4gY29udGFpbmVyRWxlbWVudDtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBmdW5jdGlvbiBnZXRTdGFuZGFyZFBhaXIoa2V5LCB2YWx1ZSkge1xuICAgICAgICAgIHZhciBwYWlyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoc3R5bGVPcHRpb25zLmtleVZhbHVlUGFpci50YWcpO1xuICAgICAgICAgIHBhaXJFbGVtZW50LnN0eWxlLmNzc1RleHQgPSBzdHlsZU9wdGlvbnMua2V5VmFsdWVQYWlyLnN0eWxlO1xuICAgICAgICAgIHBhaXJFbGVtZW50LmFwcGVuZENoaWxkKGdldEtleShrZXkpKTtcbiAgICAgICAgICBwYWlyRWxlbWVudC5hcHBlbmRDaGlsZChnZXRWYWx1ZSh2YWx1ZSkpO1xuICAgICAgICAgIHJldHVybiBwYWlyRWxlbWVudDtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBmdW5jdGlvbiBnZXRLZXkobmFtZSkge1xuICAgICAgICAgIHZhciBrZXlFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzdHlsZU9wdGlvbnMua2V5LnRhZyk7XG4gICAgICAgICAga2V5RWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gc3R5bGVPcHRpb25zLmtleS5zdHlsZTtcbiAgICAgICAgICBrZXlFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKG5hbWUgKyAnOiAnKSk7XG4gICAgICAgICAgcmV0dXJuIGtleUVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgZnVuY3Rpb24gZ2V0VmFsdWUodmFsdWUpIHtcbiAgICAgICAgICB2YXIgdmFsdWVFbGVtZW50O1xuICAgICAgICAgIHZhciBudWxsVHlwZSA9ICdvYmplY3QnO1xuICAgICAgICAgIHN3aXRjaCAodHlwZW9mIHZhbHVlKSB7XG4gICAgICAgICAgICBjYXNlICdzeW1ib2wnOlxuICAgICAgICAgICAgICB2YWx1ZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHN0eWxlT3B0aW9ucy5zeW1ib2xWYWx1ZS50YWcpO1xuICAgICAgICAgICAgICB2YWx1ZUVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IHN0eWxlT3B0aW9ucy5zeW1ib2xWYWx1ZS5zdHlsZTtcbiAgICAgICAgICAgICAgdmFsdWVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHZhbHVlLnRvU3RyaW5nKCkpKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICAgICAgICB2YWx1ZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHN0eWxlT3B0aW9ucy5zdHJpbmdWYWx1ZS50YWcpO1xuICAgICAgICAgICAgICB2YWx1ZUVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IHN0eWxlT3B0aW9ucy5zdHJpbmdWYWx1ZS5zdHlsZTtcbiAgICAgICAgICAgICAgdmFsdWVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnICsgdmFsdWUgKyAnJykpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgICAgICAgIHZhbHVlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoc3R5bGVPcHRpb25zLm51bWJlclZhbHVlLnRhZyk7XG4gICAgICAgICAgICAgIHZhbHVlRWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gc3R5bGVPcHRpb25zLm51bWJlclZhbHVlLnN0eWxlO1xuICAgICAgICAgICAgICB2YWx1ZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodmFsdWUpKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdib29sZWFuJzpcbiAgICAgICAgICAgICAgdmFsdWVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzdHlsZU9wdGlvbnMuYm9vbGVhblZhbHVlLnRhZyk7XG4gICAgICAgICAgICAgIHZhbHVlRWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gc3R5bGVPcHRpb25zLmJvb2xlYW5WYWx1ZS5zdHlsZTtcbiAgICAgICAgICAgICAgdmFsdWVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHZhbHVlKSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBudWxsVHlwZTpcbiAgICAgICAgICAgICAgdmFsdWVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzdHlsZU9wdGlvbnMubnVsbFZhbHVlLnRhZyk7XG4gICAgICAgICAgICAgIHZhbHVlRWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gc3R5bGVPcHRpb25zLm51bGxWYWx1ZS5zdHlsZTtcbiAgICAgICAgICAgICAgdmFsdWVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHZhbHVlKSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdmFsdWVFbGVtZW50O1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIGZ1bmN0aW9uIG1lcmdlU3R5bGVPcHRpb25zKGRlZmF1bHRzLCBvdmVycmlkZXMpIHtcbiAgICAgICAgICB2YXIgbWVyZ2VkID0ge307XG4gICAgICAgICAgZm9yICh2YXIga2V5IGluIGRlZmF1bHRzKSB7XG4gICAgICAgICAgICBtZXJnZWRba2V5XSA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRzW2tleV0sIG92ZXJyaWRlc1trZXldKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIG1lcmdlZDtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICByZXR1cm4gcmVuZGVyKCk7XG4gICAgfVxufSIsImltcG9ydCB7IGRlZmF1bHQgYXMgQmFzZUxvZ2dlciB9IGZyb20gJy4vYmFzZUxvZ2dlcic7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIExvZ05vZGVNaXhpbnMgfSBmcm9tICcuL3Rlcm1Mb2dnZXIubWl4aW5zLm5vZGUnO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBMb2dXZWJNaXhpbnMgfSBmcm9tICcuL3Rlcm1Mb2dnZXIubWl4aW5zLndlYic7XG5pbXBvcnQgeyBwbGF0Zm9ybSB9IGZyb20gJ2NhdXNhbC1uZXQudXRpbHMnO1xuaW1wb3J0IHsgdml2aWQsIFBsb3RNaXhpbnMgfSBmcm9tICcuL1ZpdmlkL2luaXQnO1xuLyoqXG4gKiBUaGlzIFRlcm1Mb2dnZXIgcHJvdmlkZSBpc29tb3JwaGljIGxvZ2dlclxuICogeyBtaXhXaXRoIDogeyAnbm9kZSc6IFtMb2dOb2RlTWl4aW5zXSwgJ3dlYic6IFtXZWJOb2RlTWl4aW5zXSB9IH1cbiAqIEBjbGFzcyBUZXJtTG9nZ2VyXG4gKiBAZXh0ZW5kcyBCYXNlTG9nZ2VyXG4gKiBAZXhhbXBsZVxuICogW0VYQU1QTEUgLi4vZXhhbXBsZXMvbG9nLmJhYmVsLmpzXVxuICovXG5jbGFzcyBUZXJtTG9nZ2VyIGV4dGVuZHMgcGxhdGZvcm0ubWl4V2l0aChCYXNlTG9nZ2VyLCBcbiAgICAgICAgeyBub2RlOltMb2dOb2RlTWl4aW5zLCBQbG90TWl4aW5zXSwgXG4gICAgICAgICAgd2ViOltMb2dXZWJNaXhpbnMsIFBsb3RNaXhpbnNdIH0gKXtcbiAgICBjb25zdHJ1Y3Rvcih2aXZpZCl7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIC8qKkBwcml2YXRlIHtBcnJheX0gc3RhY2sgb2YgZ3JvdXBzICovXG4gICAgICAgIHRoaXMuZ3JvdXBTdGFjayA9IFtdO1xuICAgICAgICB0aGlzLlBsb3QgPSB2aXZpZDtcbiAgICB9XG4gICAgXG4gICAgZ3JvdXBCZWdpbihuYW1lKXsgICBcbiAgICAgICAgbGV0IGdyb3VwID0ge25hbWUsIGJlZ2luVGltZTogbmV3IERhdGUoKX07XG4gICAgICAgIHRoaXMuZ3JvdXBTdGFjay5wdXNoKGdyb3VwKTtcbiAgICAgICAgbGV0IGluZGVudFNwYWNlID0gJyc7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmxvZyhgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxcbiR7aW5kZW50U3BhY2V9JHtncm91cC5uYW1lfTogYmVnaW4gYXQgJHtncm91cC5iZWdpblRpbWV9YCk7XG4gICAgfVxuICAgIGdyb3VwRW5kKCl7XG4gICAgICAgIGlmKHRoaXMuZ3JvdXBTdGFjay5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgIGxldCBncm91cCA9IHRoaXMuZ3JvdXBTdGFjay5wb3AoKTtcbiAgICAgICAgICAgIGxldCBpbmRlbnRTcGFjZSA9ICcnO1xuICAgICAgICAgICAgdGhpcy5sb2coYCR7aW5kZW50U3BhY2V9JHtncm91cC5uYW1lfTogZW5kIGFmdGVyICR7KG5ldyBEYXRlKCkgLSBncm91cC5iZWdpblRpbWUpfSAobXMpXG4gICAgICAgICAgICAgICAgICAgICAgICBcXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqYCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmxldCB0ZXJtTG9nZ2VyID0gbmV3IFRlcm1Mb2dnZXIodml2aWQpO1xuZXhwb3J0IGRlZmF1bHQgdGVybUxvZ2dlcjsiLCJpbXBvcnQgKiBhcyBjbGlQcm9ncmVzcyBmcm9tICdjbGktcHJvZ3Jlc3MnO1xuXG5jb25zdCBMb2dOb2RlTWl4aW5zID0gKExvZ0NsYXNzKT0+IGNsYXNzIGV4dGVuZHMgTG9nQ2xhc3N7XG4gICAgY29ubmVjdChjaGFubmVsKXtcbiAgICAgICAgdGhpcy5jdXJyZW50QmFyID0gZmFsc2U7XG4gICAgfVxuICAgIGxvZyhtZXNzYWdlKXtcbiAgICAgICAgLy9UT0RPOiBtYWtlIGRlY29yYXRvciBcbiAgICAgICAgdGhpcy5jdXJyZW50QmFyID0gZmFsc2U7XG4gICAgICAgIGlmKHRoaXMubGV2ZWwgPj0gdGhpcy5BY2NlcHRlZExldmVsc1snbG9nJ10pe1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2cobWVzc2FnZSk7XG4gICAgfVxuICAgIHBsb3QoZGF0YSl7XG4gICAgICAgIGNvbnN0IFBsb3QgPSB0aGlzLlBsb3Q7XG4gICAgICAgIGlmKCFkYXRhLnR5cGUpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoYHBsb3QgdHlwZSBpcyBub3QgZGVmaW5lZCBpbiAke0pTT04uc3RyaW5naWZ5KGRhdGEpfWApO1xuICAgICAgICB9XG4gICAgICAgIGxldCB7IHBsb3RJZCB9ID0gZGF0YTtcbiAgICAgICAgaWYoIXBsb3RJZCl7XG4gICAgICAgICAgICB0aGlzLnBsb3RDb3VudGVyID0gdGhpcy5wbG90Q291bnRlciE9PXVuZGVmaW5lZD90aGlzLnBsb3RDb3VudGVyKzE6MDtcbiAgICAgICAgICAgIHBsb3RJZCA9IGBwbG90LSR7dGhpcy5wbG90Q291bnRlcn1gO1xuICAgICAgICAgICAgZGF0YS5wbG90SWQgPSBwbG90SWQ7XG4gICAgICAgIH1cbiAgICAgICAgUGxvdFtkYXRhLnR5cGVdKGRhdGEpO1xuICAgICAgICByZXR1cm4gcGxvdElkO1xuICAgIH1cbiAgICBcbiAgICBhc3luYyBzaG93KG9wdGlvbj17fSl7XG4gICAgICAgIGxldCB7cGxvdElkfSA9IG9wdGlvbjtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuUGxvdC5zaG93KG9wdGlvbik7XG4gICAgfVxuXG4gICAgcHJvZ3Jlc3NCZWdpbihyYW5nZSl7XG4gICAgICAgIHRoaXMucHJvY2Vzc0NvdW50ZXIgKz0gMTtcbiAgICAgICAgdGhpcy5jdXJyZW50QmFyID0gbmV3IGNsaVByb2dyZXNzLkJhcih7fSwgY2xpUHJvZ3Jlc3MuUHJlc2V0cy5zaGFkZXNfY2xhc3NpYyk7XG4gICAgICAgIHRoaXMuY3VycmVudEJhci5zZXRUb3RhbChyYW5nZSk7XG4gICAgfVxuICAgIHByb2dyZXNzVXBkYXRlKHByb2dyZXNzTWVzc2FnZSl7XG4gICAgICAgIGlmKCF0aGlzLmN1cnJlbnRCYXIpe1xuICAgICAgICAgICAgdGhpcy5wcm9ncmVzc0JlZ2luKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcm9jZXNzQ291bnRlciArPSAxO1xuICAgICAgICB0aGlzLmN1cnJlbnRCYXIudXBkYXRlKHRoaXMucHJvY2Vzc0NvdW50ZXIpO1xuICAgIH1cbiAgICBwcm9ncmVzc0VuZCgpe1xuICAgICAgICB0aGlzLmN1cnJlbnRCYXIuc3RvcCgpO1xuICAgICAgICB0aGlzLnByb2Nlc3NDb3VudGVyID0gMDtcbiAgICB9XG4gICAgZGVidWcobWVzc2FnZSl7XG4gICAgICAgIFxuICAgICAgICBpZih0aGlzLmxldmVsID49IHRoaXMuQWNjZXB0ZWRMZXZlbHNbJ2RlYnVnJ10pe1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5kZWJ1ZyhtZXNzYWdlKTtcbiAgICB9XG5cbiAgICB3YXJuKG1lc3NhZ2Upe1xuICAgICAgICBcbiAgICAgICAgaWYodGhpcy5sZXZlbCA+PSB0aGlzLkFjY2VwdGVkTGV2ZWxzWyd3YXJuJ10pe1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS53YXJuKG1lc3NhZ2UpO1xuICAgIH1cblxuICAgIGVycm9yKG1lc3NhZ2Upe1xuICAgICAgICBcbiAgICAgICAgaWYodGhpcy5sZXZlbCA+PSB0aGlzLkFjY2VwdGVkTGV2ZWxzWydlcnJvciddKXtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgTG9nTm9kZU1peGluczsiLCJpbXBvcnQge2RlZmF1bHQgYXMgSnNvblZpZXd9IGZyb20gJy4vcHJldHR5SnNvbic7XG5jb25zdCBMb2dXZWJNaXhpbnMgPSAoTG9nQ2xhc3MpPT4gY2xhc3MgZXh0ZW5kcyBMb2dDbGFzc3tcbiAgICBjb25uZWN0KHRhcmdldD1udWxsKXtcbiAgICAgICAgbGV0IGRvY3VtZW50RWwgPSB0YXJnZXQ/ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFyZ2V0LnJlcGxhY2UoJyMnLCcnKSk6ZG9jdW1lbnQuYm9keTtcbiAgICAgICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XG4gICAgICAgIFxuICAgICAgICBsZXQgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICAgICAgbm9kZS5zdHlsZS5jc3NUZXh0ID0gXCJsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XCI7XG4gICAgICAgIGRvY3VtZW50RWwuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHtkb2N1bWVudEVsLCBub2RlfSk7XG4gICAgICAgIHRoaXMuZnJhbWVFbCA9IGRvY3VtZW50RWw7XG4gICAgICAgIHRoaXMubG9nZ2VyRWwgPSBkb2N1bWVudEVsLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwidWxcIilbMF07XG4gICAgICAgIHRoaXMuY29sb3JDb2RlID0geyBkZWJ1ZzogJyNmMWYxZjEnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2c6ICcjMDEwMTAxJywgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2FybjogJyNlYWUyNmUnLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiAnI2VhNmU3OCcgfTtcbiAgICB9XG4gICAgc2Nyb2xsQm90dG9tKGVsZW1lbnQ9bnVsbCl7XG4gICAgICAgIGVsZW1lbnQgPSBlbGVtZW50IHx8IHRoaXMuZnJhbWVFbDtcbiAgICAgICAgZWxlbWVudC5zY3JvbGxUb3AgPSBlbGVtZW50LnNjcm9sbEhlaWdodCAtIGVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuICAgIH1cblxuICAgIHBsb3QoZGF0YSl7XG4gICAgICAgIGNvbnN0IFBsb3QgPSB0aGlzLlBsb3Q7XG4gICAgICAgIGlmKCFkYXRhLnR5cGUpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoYHBsb3QgdHlwZSBpcyBub3QgZGVmaW5lZCBpbiAke0pTT04uc3RyaW5naWZ5KGRhdGEpfWApO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgbGV0IHsgcGxvdElkIH0gPSBkYXRhO1xuICAgICAgICBpZighcGxvdElkKXtcbiAgICAgICAgICAgIHRoaXMucGxvdENvdW50ZXIgPSB0aGlzLnBsb3RDb3VudGVyIT09dW5kZWZpbmVkP3RoaXMucGxvdENvdW50ZXIrMTowO1xuICAgICAgICAgICAgcGxvdElkID0gYHBsb3QtJHt0aGlzLnBsb3RDb3VudGVyfWA7XG4gICAgICAgICAgICBsZXQgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgICAgIG5vZGUuc3R5bGUuY3NzVGV4dCA9ICdib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZGVkZTsnO1xuICAgICAgICAgICAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgICAgbm9kZS5pbm5lckhUTUwgPSBgPHAgc3R5bGU9XCJmb250LXNpemU6IDEycHg7IHRleHQtYWxpZ246cmlnaHRcIj4ke2RhdGV9PC9wPmA7XG4gICAgICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShcImlkXCIsIHBsb3RJZCk7XG4gICAgICAgICAgICB0aGlzLmxvZ2dlckVsLmFwcGVuZENoaWxkKG5vZGUpO1xuICAgICAgICAgICAgUGxvdC5jb25uZWN0KCcjJytwbG90SWQpO1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxCb3R0b20oKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgUGxvdC5jb25uZWN0KCcjJytwbG90SWQpO1xuICAgICAgICB9XG4gICAgICAgIFBsb3RbZGF0YS50eXBlXShkYXRhKTtcbiAgICAgICAgcmV0dXJuIHBsb3RJZDtcbiAgICB9XG5cbiAgICBhc3luYyBzaG93KG9wdGlvbj17fSl7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLlBsb3Quc2hvdyhvcHRpb24pO1xuICAgIH1cblxuICAgIHByb2dyZXNzQmVnaW4ocmFuZ2Upe1xuICAgICAgICB0aGlzLnByb2dyZXNzUmFuZ2UgPSByYW5nZTtcbiAgICAgICAgdGhpcy5wcm9ncmVzc0NvdW50ZXIgPSAwO1xuICAgIH1cbiAgICBwcm9ncmVzc1VwZGF0ZShwcm9jZXNzTWVzc2FnZSl7XG4gICAgICAgIHRoaXMucHJvZ3Jlc3NDb3VudGVyICs9IDE7XG4gICAgICAgIC8vIGxldCBub2RlID0gdGhpcy5sb2dnZXJFbC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImxpOm50aC1sYXN0LW9mLXR5cGUoMSlcIik7XG4gICAgICAgIGxldCBMSU5vZGVzID0gdGhpcy5sb2dnZXJFbC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImxpXCIpO1xuICAgICAgICBsZXQgbm9kZSA9IExJTm9kZXNbTElOb2Rlcy5sZW5ndGgtMV07XG4gICAgICAgIGlmKCFub2RlIHx8IG5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwibG9nZ2VyLXByb2dyZXNzXCIpKXtcbiAgICAgICAgICAgIC8vY3JlYXRlIG5ldyBlbFxuICAgICAgICAgICAgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgICAgIG5vZGUuY2xhc3NMaXN0LmFkZChcImxvZ2dlci1wcm9ncmVzc1wiKTtcbiAgICAgICAgICAgIHRoaXMubG9nZ2VyRWwuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGpzb25Ob2RlID0gSnNvblZpZXcuSlNPTkRpc3BsYXkocHJvY2Vzc01lc3NhZ2UpO1xuICAgICAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIG5vZGUuaW5uZXJIVE1MID0gYDxwIHN0eWxlPVwiZm9udC1zaXplOiAxMnB4OyB0ZXh0LWFsaWduOnJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICR7dGhpcy5wcm9ncmVzc0NvdW50ZXJ9LyR7dGhpcy5wcm9ncmVzc1JhbmdlfSAke2RhdGV9PC9wPmA7XG4gICAgICAgIG5vZGUuYXBwZW5kQ2hpbGQoanNvbk5vZGUpO1xuICAgICAgICB0aGlzLnNjcm9sbEJvdHRvbSgpO1xuICAgIH1cbiAgICBwcm9ncmVzc0VuZCgpe1xuXG4gICAgfVxuICAgIGxvZyhtZXNzYWdlLCBzdHlsZT0nJyl7XG4gICAgICAgIFxuICAgICAgICBpZih0aGlzLmxldmVsID49IHRoaXMuQWNjZXB0ZWRMZXZlbHNbJ2xvZyddKXtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGlmKCF0aGlzLmxvZ2dlckVsIHx8ICF0aGlzLmxvZ2dlckVsLmFwcGVuZENoaWxkKXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKGBjYW5ub3QgcHJpbnQgbG9nYCk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICAgIG5vZGUuc3R5bGUuY3NzVGV4dCA9ICdib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZGVkZTtsaXN0LXN0eWxlLXR5cGU6IG5vbmU7JzsgXG4gICAgICAgIGxldCBqc29uTm9kZSA9IEpzb25WaWV3LkpTT05EaXNwbGF5KG1lc3NhZ2UpO1xuICAgICAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIG5vZGUuaW5uZXJIVE1MID0gYDxwIHN0eWxlPVwiZm9udC1zaXplOiAxMnB4OyB0ZXh0LWFsaWduOnJpZ2h0XCI+JHtkYXRlfTwvcD5gO1xuICAgICAgICBqc29uTm9kZS5zdHlsZS5jc3NUZXh0ICs9ICc7JytzdHlsZTtcbiAgICAgICAgbm9kZS5hcHBlbmRDaGlsZChqc29uTm9kZSk7XG4gICAgICAgIHRoaXMubG9nZ2VyRWwuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgICAgIHRoaXMuc2Nyb2xsQm90dG9tKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xuICAgIH1cblxuICAgIGRlYnVnKG1lc3NhZ2Upe1xuICAgICAgICBpZih0aGlzLmxldmVsID49IHRoaXMuQWNjZXB0ZWRMZXZlbHNbJ2RlYnVnJ10pe1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGxldCBzdHlsZSA9ICdjb2xvcjonICsgdGhpcy5jb2xvckNvZGVbJ2RlYnVnJ107XG4gICAgICAgIHRoaXMubG9nKG1lc3NhZ2UsIHN0eWxlKTsgICAgICBcbiAgICB9XG5cbiAgICB3YXJuKG1lc3NhZ2Upe1xuICAgICAgICBpZih0aGlzLmxldmVsID49IHRoaXMuQWNjZXB0ZWRMZXZlbHNbJ3dhcm4nXSl7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgc3R5bGUgPSAnY29sb3I6JyArIHRoaXMuY29sb3JDb2RlWyd3YXJuJ107XG4gICAgICAgIHRoaXMubG9nKG1lc3NhZ2UsIHN0eWxlKTtcbiAgICB9XG5cbiAgICBlcnJvcihtZXNzYWdlKXtcbiAgICAgICAgaWYodGhpcy5sZXZlbCA+PSB0aGlzLkFjY2VwdGVkTGV2ZWxzWydlcnJvciddKXtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGxldCBzdHlsZSA9ICdjb2xvcjonICsgdGhpcy5jb2xvckNvZGVbJ2Vycm9yJ107XG4gICAgICAgIHRoaXMubG9nKG1lc3NhZ2UsIHN0eWxlKTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMb2dXZWJNaXhpbnM7IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhbnZhc19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3V0aWxzX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NsaV9wcm9ncmVzc19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9kM19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9mc19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9vcGVuX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3N2ZzJwbmdfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfdml2aWRfZDNfbm9kZV9fOyJdLCJzb3VyY2VSb290IjoiIn0=