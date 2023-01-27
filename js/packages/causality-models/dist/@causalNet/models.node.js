(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("causal-net.core"), require("causal-net.utils"));
	else if(typeof define === 'function' && define.amd)
		define(["causal-net.core", "causal-net.utils"], factory);
	else if(typeof exports === 'object')
		exports["@causalNet/models"] = factory(require("causal-net.core"), require("causal-net.utils"));
	else
		root["@causalNet/models"] = factory(root["causal-net.core"], root["causal-net.utils"]);
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

/***/ "../../node_modules/ow-lite/index.js":
/*!************************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/ow-lite/index.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const symbols = __webpack_require__(/*! ./lib/symbols */ "../../node_modules/ow-lite/lib/symbols.js")
const number = __webpack_require__(/*! ./lib/number */ "../../node_modules/ow-lite/lib/number.js")
const string = __webpack_require__(/*! ./lib/string */ "../../node_modules/ow-lite/lib/string.js")
const object = __webpack_require__(/*! ./lib/object */ "../../node_modules/ow-lite/lib/object.js")

const typePredicates = {
  number,
  string,
  object
}

const createOw = ({
  validators = [],
  predicates = typePredicates,
  type = null
} = { }) => {
  const ow = new Proxy(function () { }, {
    get: (obj, key) => {
      if (key === symbols.validate) {
        return (value, label = 'argument') => {
          if (!type) {
            return new Error('missing required type specifier')
          }

          for (let i = 0; i < validators.length; ++i) {
            const validator = validators[i]
            const result = validator.fn(value)

            if (!result) {
              if (i === 0) {
                throw new Error(`Expected ${label} \`${value}\` to be of type \`${type}\`, but received type \`${typeof value}\``)
              } else {
                throw new Error(`Expected ${type} \`${label}\` \`${value}\` failed predicate \`${validator.key}\``)
              }
            }
          }
        }
      }

      const predicate = predicates[key]

      if (predicate) {
        if (typeof predicate === 'function') {
          validators.push({
            key,
            fn: predicate
          })

          return ow
        } else {
          return createOw({
            type: key,
            validators: [
              {
                key,
                fn: predicate.validator
              }
            ],
            predicates: predicate.predicates
          })
        }
      } else {
        const fn = predicates[symbols.func] && predicates[symbols.func][key]

        if (fn) {
          return new Proxy(function () { }, {
            get: () => {
              throw new Error(`invalid use of functional predicate "${key}"`)
            },

            apply: (obj, thisArg, args) => {
              validators.push({
                key,
                fn: fn(...args)
              })

              return ow
            }
          })
        } else {
          if (key === 'default' || key === '__esModule') {
            return ow
          }

          return ow
          // throw new Error(`unrecognized predicate "${key}"`)
        }
      }
    },

    apply: (obj, thisArg, args) => {
      if (args.length !== 2 && args.length !== 3) {
        throw new Error('invalid number of arguments to "ow"')
      } else {
        args[1][symbols.validate](args[0], args[2])
      }
    }
  })

  return ow
}

module.exports = createOw()


/***/ }),

/***/ "../../node_modules/ow-lite/lib/number.js":
/*!*****************************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/ow-lite/lib/number.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { func } = __webpack_require__(/*! ./symbols */ "../../node_modules/ow-lite/lib/symbols.js")

const numberPredicates = {
  positive: (value) => (value > 0),
  negative: (value) => (value < 0),
  nonNegative: (value) => (value >= 0),
  integer: (value) => (value === (value | 0)),

  [func]: {
    is: (fn) => fn,
    eq: (v) => (value) => (value === v),
    gt: (v) => (value) => (value > v),
    gte: (v) => (value) => (value >= v),
    lt: (v) => (value) => (value < v),
    lte: (v) => (value) => (value <= v)
  }
}

module.exports = {
  predicates: numberPredicates,
  validator: (value) => {
    return typeof value === 'number'
  }
}


/***/ }),

/***/ "../../node_modules/ow-lite/lib/object.js":
/*!*****************************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/ow-lite/lib/object.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { func } = __webpack_require__(/*! ./symbols */ "../../node_modules/ow-lite/lib/symbols.js")

const objectPredicates = {
  plain: (value) => {
    if (typeof value !== 'object') return false

    const proto = Object.getPrototypeOf(value)
    return proto === null || proto === Object.getPrototypeOf({})
  },
  empty: (value) => Object.keys(value).length === 0,
  nonEmpty: (value) => Object.keys(value).length > 0,

  [func]: {
    is: (fn) => fn,
    instanceOf: (v) => (value) => (value instanceof v)
  }
}

module.exports = {
  predicates: objectPredicates,
  validator: (value) => {
    return typeof value === 'object'
  }
}


/***/ }),

/***/ "../../node_modules/ow-lite/lib/string.js":
/*!*****************************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/ow-lite/lib/string.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { func } = __webpack_require__(/*! ./symbols */ "../../node_modules/ow-lite/lib/symbols.js")

const stringPredicates = {
  empty: (value) => (value === ''),
  nonEmpty: (value) => (value !== ''),

  [func]: {
    is: (fn) => fn,
    eq: (v) => (value) => (value === v),
    length: (v) => (value) => (value.length === v),
    minLength: (v) => (value) => (value.length >= v),
    maxLength: (v) => (value) => (value.length <= v),
    matches: (v) => (value) => v.test(value),
    startsWith: (v) => (value) => value.startsWith(v),
    endsWith: (v) => (value) => value.endsWith(v)
  }
}

module.exports = {
  predicates: stringPredicates,
  validator: (value) => {
    return typeof value === 'string'
  }
}


/***/ }),

/***/ "../../node_modules/ow-lite/lib/symbols.js":
/*!******************************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/ow-lite/lib/symbols.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.func = Symbol('func')
exports.validate = Symbol('validate')


/***/ }),

/***/ "../../node_modules/random/dist/distributions/bates.js":
/*!******************************************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/random/dist/distributions/bates.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _owLite = __webpack_require__(/*! ow-lite */ "../../node_modules/ow-lite/index.js");

var _owLite2 = _interopRequireDefault(_owLite);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (random) {
  var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  (0, _owLite2.default)(n, _owLite2.default.number.integer.positive);
  var irwinHall = random.irwinHall(n);

  return function () {
    return irwinHall() / n;
  };
};
//# sourceMappingURL=bates.js.map

/***/ }),

/***/ "../../node_modules/random/dist/distributions/bernoulli.js":
/*!**********************************************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/random/dist/distributions/bernoulli.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _owLite = __webpack_require__(/*! ow-lite */ "../../node_modules/ow-lite/index.js");

var _owLite2 = _interopRequireDefault(_owLite);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (random) {
  var p = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.5;

  (0, _owLite2.default)(p, _owLite2.default.number.gte(0).lt(1));

  return function () {
    return random.next() + p | 0;
  };
};
//# sourceMappingURL=bernoulli.js.map

/***/ }),

/***/ "../../node_modules/random/dist/distributions/binomial.js":
/*!*********************************************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/random/dist/distributions/binomial.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _owLite = __webpack_require__(/*! ow-lite */ "../../node_modules/ow-lite/index.js");

var _owLite2 = _interopRequireDefault(_owLite);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (random) {
  var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var p = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0.5;

  (0, _owLite2.default)(n, _owLite2.default.number.positive.integer);
  (0, _owLite2.default)(p, _owLite2.default.number.gte(0).lte(1));

  return function () {
    var i = 0;
    var x = 0;

    while (i++ < n) {
      x += random.next() < p;
    }

    return x;
  };
};
//# sourceMappingURL=binomial.js.map

/***/ }),

/***/ "../../node_modules/random/dist/distributions/exponential.js":
/*!************************************************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/random/dist/distributions/exponential.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _owLite = __webpack_require__(/*! ow-lite */ "../../node_modules/ow-lite/index.js");

var _owLite2 = _interopRequireDefault(_owLite);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (random) {
  var lambda = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  (0, _owLite2.default)(lambda, _owLite2.default.number.positive);

  return function () {
    return -Math.log(1 - random.next()) / lambda;
  };
};
//# sourceMappingURL=exponential.js.map

/***/ }),

/***/ "../../node_modules/random/dist/distributions/geometric.js":
/*!**********************************************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/random/dist/distributions/geometric.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _owLite = __webpack_require__(/*! ow-lite */ "../../node_modules/ow-lite/index.js");

var _owLite2 = _interopRequireDefault(_owLite);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (random) {
  var p = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.5;

  (0, _owLite2.default)(p, _owLite2.default.number.gt(0).lte(1));
  var invLogP = 1.0 / Math.log(1.0 - p);

  return function () {
    return 1 + Math.log(random.next()) * invLogP | 0;
  };
};
//# sourceMappingURL=geometric.js.map

/***/ }),

/***/ "../../node_modules/random/dist/distributions/irwin-hall.js":
/*!***********************************************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/random/dist/distributions/irwin-hall.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _owLite = __webpack_require__(/*! ow-lite */ "../../node_modules/ow-lite/index.js");

var _owLite2 = _interopRequireDefault(_owLite);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (random) {
  var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  (0, _owLite2.default)(n, _owLite2.default.number.integer.gte(0));

  return function () {
    var sum = 0;
    for (var i = 0; i < n; ++i) {
      sum += random.next();
    }

    return sum;
  };
};
//# sourceMappingURL=irwin-hall.js.map

/***/ }),

/***/ "../../node_modules/random/dist/distributions/log-normal.js":
/*!***********************************************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/random/dist/distributions/log-normal.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (random) {
  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  var normal = random.normal.apply(random, args);

  return function () {
    return Math.exp(normal());
  };
};
//# sourceMappingURL=log-normal.js.map

/***/ }),

/***/ "../../node_modules/random/dist/distributions/normal.js":
/*!*******************************************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/random/dist/distributions/normal.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _owLite = __webpack_require__(/*! ow-lite */ "../../node_modules/ow-lite/index.js");

var _owLite2 = _interopRequireDefault(_owLite);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (random) {
  var mu = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var sigma = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

  (0, _owLite2.default)(mu, _owLite2.default.number);
  (0, _owLite2.default)(sigma, _owLite2.default.number);

  return function () {
    var x = void 0,
        y = void 0,
        r = void 0;

    do {
      x = random.next() * 2 - 1;
      y = random.next() * 2 - 1;
      r = x * x + y * y;
    } while (!r || r > 1);

    return mu + sigma * y * Math.sqrt(-2 * Math.log(r) / r);
  };
};
//# sourceMappingURL=normal.js.map

/***/ }),

/***/ "../../node_modules/random/dist/distributions/pareto.js":
/*!*******************************************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/random/dist/distributions/pareto.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _owLite = __webpack_require__(/*! ow-lite */ "../../node_modules/ow-lite/index.js");

var _owLite2 = _interopRequireDefault(_owLite);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (random) {
  var alpha = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  (0, _owLite2.default)(alpha, _owLite2.default.number.gte(0));
  var invAlpha = 1.0 / alpha;

  return function () {
    return 1.0 / Math.pow(1.0 - random.next(), invAlpha);
  };
};
//# sourceMappingURL=pareto.js.map

/***/ }),

/***/ "../../node_modules/random/dist/distributions/poisson.js":
/*!********************************************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/random/dist/distributions/poisson.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _owLite = __webpack_require__(/*! ow-lite */ "../../node_modules/ow-lite/index.js");

var _owLite2 = _interopRequireDefault(_owLite);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logFactorialTable = [0.0, 0.0, 0.69314718055994529, 1.7917594692280550, 3.1780538303479458, 4.7874917427820458, 6.5792512120101012, 8.5251613610654147, 10.604602902745251, 12.801827480081469];

var logFactorial = function logFactorial(k) {
  return logFactorialTable[k];
};

var logSqrt2PI = 0.91893853320467267;

exports.default = function (random) {
  var lambda = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  (0, _owLite2.default)(lambda, _owLite2.default.number.positive);

  if (lambda < 10) {
    // inversion method
    var expMean = Math.exp(-lambda);

    return function () {
      var p = expMean;
      var x = 0;
      var u = random.next();

      while (u > p) {
        u = u - p;
        p = lambda * p / ++x;
      }

      return x;
    };
  } else {
    // generative method
    var smu = Math.sqrt(lambda);
    var b = 0.931 + 2.53 * smu;
    var a = -0.059 + 0.02483 * b;
    var invAlpha = 1.1239 + 1.1328 / (b - 3.4);
    var vR = 0.9277 - 3.6224 / (b - 2);

    return function () {
      while (true) {
        var u = void 0;
        var v = random.next();

        if (v <= 0.86 * vR) {
          u = v / vR - 0.43;
          return Math.floor((2 * a / (0.5 - Math.abs(u)) + b) * u + lambda + 0.445);
        }

        if (v >= vR) {
          u = random.next() - 0.5;
        } else {
          u = v / vR - 0.93;
          u = (u < 0 ? -0.5 : 0.5) - u;
          v = random.next() * vR;
        }

        var us = 0.5 - Math.abs(u);
        if (us < 0.013 && v > us) {
          continue;
        }

        var k = Math.floor((2 * a / us + b) * u + lambda + 0.445) | 0;
        v = v * invAlpha / (a / (us * us) + b);

        if (k >= 10) {
          var t = (k + 0.5) * Math.log(lambda / k) - lambda - logSqrt2PI + k - (1 / 12.0 - (1 / 360.0 - 1 / (1260.0 * k * k)) / (k * k)) / k;

          if (Math.log(v * smu) <= t) {
            return k;
          }
        } else if (k >= 0) {
          if (Math.log(v) <= k * Math.log(lambda) - lambda - logFactorial(k)) {
            return k;
          }
        }
      }
    };
  }
};
//# sourceMappingURL=poisson.js.map

/***/ }),

/***/ "../../node_modules/random/dist/distributions/uniform-boolean.js":
/*!****************************************************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/random/dist/distributions/uniform-boolean.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (random) {
  return function () {
    return random.next() >= 0.5;
  };
};
//# sourceMappingURL=uniform-boolean.js.map

/***/ }),

/***/ "../../node_modules/random/dist/distributions/uniform-int.js":
/*!************************************************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/random/dist/distributions/uniform-int.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _owLite = __webpack_require__(/*! ow-lite */ "../../node_modules/ow-lite/index.js");

var _owLite2 = _interopRequireDefault(_owLite);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (random, min, max) {
  if (max === undefined) {
    max = min === undefined ? 1 : min;
    min = 0;
  }

  (0, _owLite2.default)(min, _owLite2.default.number.integer);
  (0, _owLite2.default)(max, _owLite2.default.number.integer);

  return function () {
    return random.next() * (max - min + 1) + min | 0;
  };
};
//# sourceMappingURL=uniform-int.js.map

/***/ }),

/***/ "../../node_modules/random/dist/distributions/uniform.js":
/*!********************************************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/random/dist/distributions/uniform.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _owLite = __webpack_require__(/*! ow-lite */ "../../node_modules/ow-lite/index.js");

var _owLite2 = _interopRequireDefault(_owLite);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (random, min, max) {
  if (max === undefined) {
    max = min === undefined ? 1 : min;
    min = 0;
  }

  (0, _owLite2.default)(min, _owLite2.default.number);
  (0, _owLite2.default)(max, _owLite2.default.number);

  return function () {
    return random.next() * (max - min) + min;
  };
};
//# sourceMappingURL=uniform.js.map

/***/ }),

/***/ "../../node_modules/random/dist/generators/function.js":
/*!******************************************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/random/dist/generators/function.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _owLite = __webpack_require__(/*! ow-lite */ "../../node_modules/ow-lite/index.js");

var _owLite2 = _interopRequireDefault(_owLite);

var _rng = __webpack_require__(/*! ../rng */ "../../node_modules/random/dist/rng.js");

var _rng2 = _interopRequireDefault(_rng);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RNGFunction = function (_RNG) {
  _inherits(RNGFunction, _RNG);

  function RNGFunction(thunk, opts) {
    _classCallCheck(this, RNGFunction);

    var _this = _possibleConstructorReturn(this, (RNGFunction.__proto__ || Object.getPrototypeOf(RNGFunction)).call(this));

    _this.seed(thunk, opts);
    return _this;
  }

  _createClass(RNGFunction, [{
    key: 'next',
    value: function next() {
      return this._rng();
    }
  }, {
    key: 'seed',
    value: function seed(thunk) {
      (0, _owLite2.default)(thunk, _owLite2.default.function);
      this._rng = thunk;
    }
  }, {
    key: 'clone',
    value: function clone() {
      for (var _len = arguments.length, opts = Array(_len), _key = 0; _key < _len; _key++) {
        opts[_key] = arguments[_key];
      }

      return new (Function.prototype.bind.apply(RNGFunction, [null].concat([this._rng], opts)))();
    }
  }, {
    key: 'name',
    get: function get() {
      return 'function';
    }
  }]);

  return RNGFunction;
}(_rng2.default);

exports.default = RNGFunction;
//# sourceMappingURL=function.js.map

/***/ }),

/***/ "../../node_modules/random/dist/random.js":
/*!*****************************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/random/dist/random.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RNGFactory = exports.RNG = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _owLite = __webpack_require__(/*! ow-lite */ "../../node_modules/ow-lite/index.js");

var _owLite2 = _interopRequireDefault(_owLite);

var _rng = __webpack_require__(/*! ./rng */ "../../node_modules/random/dist/rng.js");

var _rng2 = _interopRequireDefault(_rng);

var _rngFactory = __webpack_require__(/*! ./rng-factory */ "../../node_modules/random/dist/rng-factory.js");

var _rngFactory2 = _interopRequireDefault(_rngFactory);

var _uniform2 = __webpack_require__(/*! ./distributions/uniform */ "../../node_modules/random/dist/distributions/uniform.js");

var _uniform3 = _interopRequireDefault(_uniform2);

var _uniformInt2 = __webpack_require__(/*! ./distributions/uniform-int */ "../../node_modules/random/dist/distributions/uniform-int.js");

var _uniformInt3 = _interopRequireDefault(_uniformInt2);

var _uniformBoolean2 = __webpack_require__(/*! ./distributions/uniform-boolean */ "../../node_modules/random/dist/distributions/uniform-boolean.js");

var _uniformBoolean3 = _interopRequireDefault(_uniformBoolean2);

var _normal2 = __webpack_require__(/*! ./distributions/normal */ "../../node_modules/random/dist/distributions/normal.js");

var _normal3 = _interopRequireDefault(_normal2);

var _logNormal2 = __webpack_require__(/*! ./distributions/log-normal */ "../../node_modules/random/dist/distributions/log-normal.js");

var _logNormal3 = _interopRequireDefault(_logNormal2);

var _bernoulli2 = __webpack_require__(/*! ./distributions/bernoulli */ "../../node_modules/random/dist/distributions/bernoulli.js");

var _bernoulli3 = _interopRequireDefault(_bernoulli2);

var _binomial2 = __webpack_require__(/*! ./distributions/binomial */ "../../node_modules/random/dist/distributions/binomial.js");

var _binomial3 = _interopRequireDefault(_binomial2);

var _geometric2 = __webpack_require__(/*! ./distributions/geometric */ "../../node_modules/random/dist/distributions/geometric.js");

var _geometric3 = _interopRequireDefault(_geometric2);

var _poisson2 = __webpack_require__(/*! ./distributions/poisson */ "../../node_modules/random/dist/distributions/poisson.js");

var _poisson3 = _interopRequireDefault(_poisson2);

var _exponential2 = __webpack_require__(/*! ./distributions/exponential */ "../../node_modules/random/dist/distributions/exponential.js");

var _exponential3 = _interopRequireDefault(_exponential2);

var _irwinHall2 = __webpack_require__(/*! ./distributions/irwin-hall */ "../../node_modules/random/dist/distributions/irwin-hall.js");

var _irwinHall3 = _interopRequireDefault(_irwinHall2);

var _bates2 = __webpack_require__(/*! ./distributions/bates */ "../../node_modules/random/dist/distributions/bates.js");

var _bates3 = _interopRequireDefault(_bates2);

var _pareto2 = __webpack_require__(/*! ./distributions/pareto */ "../../node_modules/random/dist/distributions/pareto.js");

var _pareto3 = _interopRequireDefault(_pareto2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

exports.RNG = _rng2.default;
exports.RNGFactory = _rngFactory2.default;

/**
 * Seedable random number generator supporting many common distributions.
 *
 * Defaults to Math.random as its underlying pseudorandom number generator.
 *
 * @name Random
 * @class
 *
 * @param {RNG|function} [rng=Math.random] - Underlying pseudorandom number generator.
 */

var Random = function () {
  function Random(rng) {
    _classCallCheck(this, Random);

    if (rng) (0, _owLite2.default)(rng, _owLite2.default.object.instanceOf(_rng2.default));

    this._cache = {};
    this.use(rng);
  }

  /**
   * @member {RNG} Underlying pseudo-random number generator
   */


  _createClass(Random, [{
    key: 'clone',


    /**
     * Creates a new `Random` instance, optionally specifying parameters to
     * set a new seed.
     *
     * @see RNG.clone
     *
     * @param {string} [seed] - Optional seed for new RNG.
     * @param {object} [opts] - Optional config for new RNG options.
     * @return {Random}
     */
    value: function clone() {
      if (arguments.length) {
        return new Random(_rngFactory2.default.apply(undefined, arguments));
      } else {
        return new Random(this.rng.clone());
      }
    }

    /**
     * Sets the underlying pseudorandom number generator used via
     * either an instance of `seedrandom`, a custom instance of RNG
     * (for PRNG plugins), or a string specifying the PRNG to use
     * along with an optional `seed` and `opts` to initialize the
     * RNG.
     *
     * @example
     * const random = require('random')
     *
     * random.use('example_seedrandom_string')
     * // or
     * random.use(seedrandom('kittens'))
     * // or
     * random.use(Math.random)
     *
     * @param {...*} args
     */

  }, {
    key: 'use',
    value: function use() {
      this._rng = _rngFactory2.default.apply(undefined, arguments);
    }

    /**
     * Patches `Math.random` with this Random instance's PRNG.
     */

  }, {
    key: 'patch',
    value: function patch() {
      if (this._patch) {
        throw new Error('Math.random already patched');
      }

      this._patch = Math.random;
      Math.random = this.uniform();
    }

    /**
     * Restores a previously patched `Math.random` to its original value.
     */

  }, {
    key: 'unpatch',
    value: function unpatch() {
      if (this._patch) {
        Math.random = this._patch;
        delete this._patch;
      }
    }

    // --------------------------------------------------------------------------
    // Uniform utility functions
    // --------------------------------------------------------------------------

    /**
     * Convenience wrapper around `this.rng.next()`
     *
     * Returns a floating point number in [0, 1).
     *
     * @return {number}
     */

  }, {
    key: 'next',
    value: function next() {
      return this._rng.next();
    }

    /**
     * Samples a uniform random floating point number, optionally specifying
     * lower and upper bounds.
     *
     * Convence wrapper around `random.uniform()`
     *
     * @param {number} [min=0] - Lower bound (float, inclusive)
     * @param {number} [max=1] - Upper bound (float, exclusive)
     * @return {number}
     */

  }, {
    key: 'float',
    value: function float(min, max) {
      return this.uniform(min, max)();
    }

    /**
     * Samples a uniform random integer, optionally specifying lower and upper
     * bounds.
     *
     * Convence wrapper around `random.uniformInt()`
     *
     * @param {number} [min=0] - Lower bound (integer, inclusive)
     * @param {number} [max=1] - Upper bound (integer, inclusive)
     * @return {number}
     */

  }, {
    key: 'int',
    value: function int(min, max) {
      return this.uniformInt(min, max)();
    }

    /**
     * Samples a uniform random integer, optionally specifying lower and upper
     * bounds.
     *
     * Convence wrapper around `random.uniformInt()`
     *
     * @alias `random.int`
     *
     * @param {number} [min=0] - Lower bound (integer, inclusive)
     * @param {number} [max=1] - Upper bound (integer, inclusive)
     * @return {number}
     */

  }, {
    key: 'integer',
    value: function integer(min, max) {
      return this.uniformInt(min, max)();
    }

    /**
     * Samples a uniform random boolean value.
     *
     * Convence wrapper around `random.uniformBoolean()`
     *
     * @alias `random.boolean`
     *
     * @return {boolean}
     */

  }, {
    key: 'bool',
    value: function bool() {
      return this.uniformBoolean()();
    }

    /**
     * Samples a uniform random boolean value.
     *
     * Convence wrapper around `random.uniformBoolean()`
     *
     * @return {boolean}
     */

  }, {
    key: 'boolean',
    value: function boolean() {
      return this.uniformBoolean()();
    }

    // --------------------------------------------------------------------------
    // Uniform distributions
    // --------------------------------------------------------------------------

    /**
     * Generates a [Continuous uniform distribution](https://en.wikipedia.org/wiki/Uniform_distribution_(continuous)).
     *
     * @param {number} [min=0] - Lower bound (float, inclusive)
     * @param {number} [max=1] - Upper bound (float, exclusive)
     * @return {function}
     */

  }, {
    key: 'uniform',
    value: function uniform(min, max) {
      return this._memoize('uniform', _uniform3.default, min, max);
    }

    /**
     * Generates a [Discrete uniform distribution](https://en.wikipedia.org/wiki/Discrete_uniform_distribution).
     *
     * @param {number} [min=0] - Lower bound (integer, inclusive)
     * @param {number} [max=1] - Upper bound (integer, inclusive)
     * @return {function}
     */

  }, {
    key: 'uniformInt',
    value: function uniformInt(min, max) {
      return this._memoize('uniformInt', _uniformInt3.default, min, max);
    }

    /**
     * Generates a [Discrete uniform distribution](https://en.wikipedia.org/wiki/Discrete_uniform_distribution),
     * with two possible outcomes, `true` or `false.
     *
     * This method is analogous to flipping a coin.
     *
     * @return {function}
     */

  }, {
    key: 'uniformBoolean',
    value: function uniformBoolean() {
      return this._memoize('uniformBoolean', _uniformBoolean3.default);
    }

    // --------------------------------------------------------------------------
    // Normal distributions
    // --------------------------------------------------------------------------

    /**
     * Generates a [Normal distribution](https://en.wikipedia.org/wiki/Normal_distribution).
     *
     * @param {number} [mu=0] - Mean
     * @param {number} [sigma=1] - Standard deviation
     * @return {function}
     */

  }, {
    key: 'normal',
    value: function normal(mu, sigma) {
      return (0, _normal3.default)(this, mu, sigma);
    }

    /**
     * Generates a [Log-normal distribution](https://en.wikipedia.org/wiki/Log-normal_distribution).
     *
     * @param {number} [mu=0] - Mean of underlying normal distribution
     * @param {number} [sigma=1] - Standard deviation of underlying normal distribution
     * @return {function}
     */

  }, {
    key: 'logNormal',
    value: function logNormal(mu, sigma) {
      return (0, _logNormal3.default)(this, mu, sigma);
    }

    // --------------------------------------------------------------------------
    // Bernoulli distributions
    // --------------------------------------------------------------------------

    /**
     * Generates a [Bernoulli distribution](https://en.wikipedia.org/wiki/Bernoulli_distribution).
     *
     * @param {number} [p=0.5] - Success probability of each trial.
     * @return {function}
     */

  }, {
    key: 'bernoulli',
    value: function bernoulli(p) {
      return (0, _bernoulli3.default)(this, p);
    }

    /**
     * Generates a [Binomial distribution](https://en.wikipedia.org/wiki/Binomial_distribution).
     *
     * @param {number} [n=1] - Number of trials.
     * @param {number} [p=0.5] - Success probability of each trial.
     * @return {function}
     */

  }, {
    key: 'binomial',
    value: function binomial(n, p) {
      return (0, _binomial3.default)(this, n, p);
    }

    /**
     * Generates a [Geometric distribution](https://en.wikipedia.org/wiki/Geometric_distribution).
     *
     * @param {number} [p=0.5] - Success probability of each trial.
     * @return {function}
     */

  }, {
    key: 'geometric',
    value: function geometric(p) {
      return (0, _geometric3.default)(this, p);
    }

    // --------------------------------------------------------------------------
    // Poisson distributions
    // --------------------------------------------------------------------------

    /**
     * Generates a [Poisson distribution](https://en.wikipedia.org/wiki/Poisson_distribution).
     *
     * @param {number} [lambda=1] - Mean (lambda > 0)
     * @return {function}
     */

  }, {
    key: 'poisson',
    value: function poisson(lambda) {
      return (0, _poisson3.default)(this, lambda);
    }

    /**
     * Generates an [Exponential distribution](https://en.wikipedia.org/wiki/Exponential_distribution).
     *
     * @param {number} [lambda=1] - Inverse mean (lambda > 0)
     * @return {function}
     */

  }, {
    key: 'exponential',
    value: function exponential(lambda) {
      return (0, _exponential3.default)(this, lambda);
    }

    // --------------------------------------------------------------------------
    // Misc distributions
    // --------------------------------------------------------------------------

    /**
     * Generates an [Irwin Hall distribution](https://en.wikipedia.org/wiki/Irwin%E2%80%93Hall_distribution).
     *
     * @param {number} [n=1] - Number of uniform samples to sum (n >= 0)
     * @return {function}
     */

  }, {
    key: 'irwinHall',
    value: function irwinHall(n) {
      return (0, _irwinHall3.default)(this, n);
    }

    /**
     * Generates a [Bates distribution](https://en.wikipedia.org/wiki/Bates_distribution).
     *
     * @param {number} [n=1] - Number of uniform samples to average (n >= 1)
     * @return {function}
     */

  }, {
    key: 'bates',
    value: function bates(n) {
      return (0, _bates3.default)(this, n);
    }

    /**
     * Generates a [Pareto distribution](https://en.wikipedia.org/wiki/Pareto_distribution).
     *
     * @param {number} [alpha=1] - Alpha
     * @return {function}
     */

  }, {
    key: 'pareto',
    value: function pareto(alpha) {
      return (0, _pareto3.default)(this, alpha);
    }

    // --------------------------------------------------------------------------
    // Internal
    // --------------------------------------------------------------------------

    /**
     * Memoizes distributions to ensure they're only created when necessary.
     *
     * Returns a thunk which that returns independent, identically distributed
     * samples from the specified distribution.
     *
     * @private
     *
     * @param {string} label - Name of distribution
     * @param {function} getter - Function which generates a new distribution
     * @param {...*} args - Distribution-specific arguments
     *
     * @return {function}
     */

  }, {
    key: '_memoize',
    value: function _memoize(label, getter) {
      for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        args[_key - 2] = arguments[_key];
      }

      var key = '' + args.join(';');
      var value = this._cache[label];

      if (value === undefined || value.key !== key) {
        value = { key: key, distribution: getter.apply(undefined, [this].concat(args)) };
        this._cache[label] = value;
      }

      return value.distribution;
    }
  }, {
    key: 'rng',
    get: function get() {
      return this._rng;
    }
  }]);

  return Random;
}();

// defaults to Math.random as its RNG


exports.default = new Random();
//# sourceMappingURL=random.js.map

/***/ }),

/***/ "../../node_modules/random/dist/rng-factory.js":
/*!**********************************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/random/dist/rng-factory.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _seedrandom = __webpack_require__(/*! seedrandom */ "../../node_modules/seedrandom/index.js");

var _seedrandom2 = _interopRequireDefault(_seedrandom);

var _rng = __webpack_require__(/*! ./rng */ "../../node_modules/random/dist/rng.js");

var _rng2 = _interopRequireDefault(_rng);

var _function = __webpack_require__(/*! ./generators/function */ "../../node_modules/random/dist/generators/function.js");

var _function2 = _interopRequireDefault(_function);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

exports.default = function () {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var _args$ = args[0],
      arg0 = _args$ === undefined ? 'default' : _args$,
      rest = args.slice(1);


  switch (typeof arg0 === 'undefined' ? 'undefined' : _typeof(arg0)) {
    case 'object':
      if (arg0 instanceof _rng2.default) {
        return arg0;
      }
      break;

    case 'function':
      return new _function2.default(arg0);

    case 'string':
    case 'number':
      return new _function2.default(_seedrandom2.default.apply(undefined, _toConsumableArray(rest)));
  }

  throw new Error('invalid RNG "' + arg0 + '"');
};
//# sourceMappingURL=rng-factory.js.map

/***/ }),

/***/ "../../node_modules/random/dist/rng.js":
/*!**************************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/random/dist/rng.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RNG = function () {
  function RNG() {
    _classCallCheck(this, RNG);
  }

  _createClass(RNG, [{
    key: 'next',
    value: function next() {
      throw new Error('RNG.next must be overridden');
    }
  }, {
    key: 'seed',
    value: function seed(_seed, opts) {
      throw new Error('RNG.seed must be overridden');
    }
  }, {
    key: 'clone',
    value: function clone(seed, opts) {
      throw new Error('RNG.clone must be overridden');
    }
  }, {
    key: '_seed',
    value: function _seed(seed, opts) {
      // TODO: add entropy and stuff

      if (seed === (seed | 0)) {
        return seed;
      } else {
        var strSeed = '' + seed;
        var s = 0;

        for (var k = 0; k < strSeed.length; ++k) {
          s ^= strSeed.charCodeAt(k) | 0;
        }

        return s;
      }
    }
  }, {
    key: 'name',
    get: function get() {
      throw new Error('RNG.name must be overridden');
    }
  }]);

  return RNG;
}();

exports.default = RNG;
//# sourceMappingURL=rng.js.map

/***/ }),

/***/ "../../node_modules/random/index.js":
/*!***********************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/random/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! ./dist/random */ "../../node_modules/random/dist/random.js").default


/***/ }),

/***/ "../../node_modules/seedrandom/index.js":
/*!***************************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/seedrandom/index.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// A library of seedable RNGs implemented in Javascript.
//
// Usage:
//
// var seedrandom = require('seedrandom');
// var random = seedrandom(1); // or any seed.
// var x = random();       // 0 <= x < 1.  Every bit is random.
// var x = random.quick(); // 0 <= x < 1.  32 bits of randomness.

// alea, a 53-bit multiply-with-carry generator by Johannes Baagøe.
// Period: ~2^116
// Reported to pass all BigCrush tests.
var alea = __webpack_require__(/*! ./lib/alea */ "../../node_modules/seedrandom/lib/alea.js");

// xor128, a pure xor-shift generator by George Marsaglia.
// Period: 2^128-1.
// Reported to fail: MatrixRank and LinearComp.
var xor128 = __webpack_require__(/*! ./lib/xor128 */ "../../node_modules/seedrandom/lib/xor128.js");

// xorwow, George Marsaglia's 160-bit xor-shift combined plus weyl.
// Period: 2^192-2^32
// Reported to fail: CollisionOver, SimpPoker, and LinearComp.
var xorwow = __webpack_require__(/*! ./lib/xorwow */ "../../node_modules/seedrandom/lib/xorwow.js");

// xorshift7, by François Panneton and Pierre L'ecuyer, takes
// a different approach: it adds robustness by allowing more shifts
// than Marsaglia's original three.  It is a 7-shift generator
// with 256 bits, that passes BigCrush with no systmatic failures.
// Period 2^256-1.
// No systematic BigCrush failures reported.
var xorshift7 = __webpack_require__(/*! ./lib/xorshift7 */ "../../node_modules/seedrandom/lib/xorshift7.js");

// xor4096, by Richard Brent, is a 4096-bit xor-shift with a
// very long period that also adds a Weyl generator. It also passes
// BigCrush with no systematic failures.  Its long period may
// be useful if you have many generators and need to avoid
// collisions.
// Period: 2^4128-2^32.
// No systematic BigCrush failures reported.
var xor4096 = __webpack_require__(/*! ./lib/xor4096 */ "../../node_modules/seedrandom/lib/xor4096.js");

// Tyche-i, by Samuel Neves and Filipe Araujo, is a bit-shifting random
// number generator derived from ChaCha, a modern stream cipher.
// https://eden.dei.uc.pt/~sneves/pubs/2011-snfa2.pdf
// Period: ~2^127
// No systematic BigCrush failures reported.
var tychei = __webpack_require__(/*! ./lib/tychei */ "../../node_modules/seedrandom/lib/tychei.js");

// The original ARC4-based prng included in this library.
// Period: ~2^1600
var sr = __webpack_require__(/*! ./seedrandom */ "../../node_modules/seedrandom/seedrandom.js");

sr.alea = alea;
sr.xor128 = xor128;
sr.xorwow = xorwow;
sr.xorshift7 = xorshift7;
sr.xor4096 = xor4096;
sr.tychei = tychei;

module.exports = sr;


/***/ }),

/***/ "../../node_modules/seedrandom/lib/alea.js":
/*!******************************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/seedrandom/lib/alea.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;// A port of an algorithm by Johannes Baagøe <baagoe@baagoe.com>, 2010
// http://baagoe.com/en/RandomMusings/javascript/
// https://github.com/nquinlan/better-random-numbers-for-javascript-mirror
// Original work is under MIT license -

// Copyright (C) 2010 by Johannes Baagøe <baagoe@baagoe.org>
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
// 
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
// 
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.



(function(global, module, define) {

function Alea(seed) {
  var me = this, mash = Mash();

  me.next = function() {
    var t = 2091639 * me.s0 + me.c * 2.3283064365386963e-10; // 2^-32
    me.s0 = me.s1;
    me.s1 = me.s2;
    return me.s2 = t - (me.c = t | 0);
  };

  // Apply the seeding algorithm from Baagoe.
  me.c = 1;
  me.s0 = mash(' ');
  me.s1 = mash(' ');
  me.s2 = mash(' ');
  me.s0 -= mash(seed);
  if (me.s0 < 0) { me.s0 += 1; }
  me.s1 -= mash(seed);
  if (me.s1 < 0) { me.s1 += 1; }
  me.s2 -= mash(seed);
  if (me.s2 < 0) { me.s2 += 1; }
  mash = null;
}

function copy(f, t) {
  t.c = f.c;
  t.s0 = f.s0;
  t.s1 = f.s1;
  t.s2 = f.s2;
  return t;
}

function impl(seed, opts) {
  var xg = new Alea(seed),
      state = opts && opts.state,
      prng = xg.next;
  prng.int32 = function() { return (xg.next() * 0x100000000) | 0; }
  prng.double = function() {
    return prng() + (prng() * 0x200000 | 0) * 1.1102230246251565e-16; // 2^-53
  };
  prng.quick = prng;
  if (state) {
    if (typeof(state) == 'object') copy(state, xg);
    prng.state = function() { return copy(xg, {}); }
  }
  return prng;
}

function Mash() {
  var n = 0xefc8249d;

  var mash = function(data) {
    data = data.toString();
    for (var i = 0; i < data.length; i++) {
      n += data.charCodeAt(i);
      var h = 0.02519603282416938 * n;
      n = h >>> 0;
      h -= n;
      h *= n;
      n = h >>> 0;
      h -= n;
      n += h * 0x100000000; // 2^32
    }
    return (n >>> 0) * 2.3283064365386963e-10; // 2^-32
  };

  return mash;
}


if (module && module.exports) {
  module.exports = impl;
} else if (__webpack_require__(/*! !webpack amd define */ "../../node_modules/webpack/buildin/amd-define.js") && __webpack_require__(/*! !webpack amd options */ "../../node_modules/webpack/buildin/amd-options.js")) {
  !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() { return impl; }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {
  this.alea = impl;
}

})(
  this,
   true && module,    // present in node.js
  __webpack_require__(/*! !webpack amd define */ "../../node_modules/webpack/buildin/amd-define.js")   // present with an AMD loader
);



/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/module.js */ "../../node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "../../node_modules/seedrandom/lib/tychei.js":
/*!********************************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/seedrandom/lib/tychei.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;// A Javascript implementaion of the "Tyche-i" prng algorithm by
// Samuel Neves and Filipe Araujo.
// See https://eden.dei.uc.pt/~sneves/pubs/2011-snfa2.pdf

(function(global, module, define) {

function XorGen(seed) {
  var me = this, strseed = '';

  // Set up generator function.
  me.next = function() {
    var b = me.b, c = me.c, d = me.d, a = me.a;
    b = (b << 25) ^ (b >>> 7) ^ c;
    c = (c - d) | 0;
    d = (d << 24) ^ (d >>> 8) ^ a;
    a = (a - b) | 0;
    me.b = b = (b << 20) ^ (b >>> 12) ^ c;
    me.c = c = (c - d) | 0;
    me.d = (d << 16) ^ (c >>> 16) ^ a;
    return me.a = (a - b) | 0;
  };

  /* The following is non-inverted tyche, which has better internal
   * bit diffusion, but which is about 25% slower than tyche-i in JS.
  me.next = function() {
    var a = me.a, b = me.b, c = me.c, d = me.d;
    a = (me.a + me.b | 0) >>> 0;
    d = me.d ^ a; d = d << 16 ^ d >>> 16;
    c = me.c + d | 0;
    b = me.b ^ c; b = b << 12 ^ d >>> 20;
    me.a = a = a + b | 0;
    d = d ^ a; me.d = d = d << 8 ^ d >>> 24;
    me.c = c = c + d | 0;
    b = b ^ c;
    return me.b = (b << 7 ^ b >>> 25);
  }
  */

  me.a = 0;
  me.b = 0;
  me.c = 2654435769 | 0;
  me.d = 1367130551;

  if (seed === Math.floor(seed)) {
    // Integer seed.
    me.a = (seed / 0x100000000) | 0;
    me.b = seed | 0;
  } else {
    // String seed.
    strseed += seed;
  }

  // Mix in string seed, then discard an initial batch of 64 values.
  for (var k = 0; k < strseed.length + 20; k++) {
    me.b ^= strseed.charCodeAt(k) | 0;
    me.next();
  }
}

function copy(f, t) {
  t.a = f.a;
  t.b = f.b;
  t.c = f.c;
  t.d = f.d;
  return t;
};

function impl(seed, opts) {
  var xg = new XorGen(seed),
      state = opts && opts.state,
      prng = function() { return (xg.next() >>> 0) / 0x100000000; };
  prng.double = function() {
    do {
      var top = xg.next() >>> 11,
          bot = (xg.next() >>> 0) / 0x100000000,
          result = (top + bot) / (1 << 21);
    } while (result === 0);
    return result;
  };
  prng.int32 = xg.next;
  prng.quick = prng;
  if (state) {
    if (typeof(state) == 'object') copy(state, xg);
    prng.state = function() { return copy(xg, {}); }
  }
  return prng;
}

if (module && module.exports) {
  module.exports = impl;
} else if (__webpack_require__(/*! !webpack amd define */ "../../node_modules/webpack/buildin/amd-define.js") && __webpack_require__(/*! !webpack amd options */ "../../node_modules/webpack/buildin/amd-options.js")) {
  !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() { return impl; }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {
  this.tychei = impl;
}

})(
  this,
   true && module,    // present in node.js
  __webpack_require__(/*! !webpack amd define */ "../../node_modules/webpack/buildin/amd-define.js")   // present with an AMD loader
);



/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/module.js */ "../../node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "../../node_modules/seedrandom/lib/xor128.js":
/*!********************************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/seedrandom/lib/xor128.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;// A Javascript implementaion of the "xor128" prng algorithm by
// George Marsaglia.  See http://www.jstatsoft.org/v08/i14/paper

(function(global, module, define) {

function XorGen(seed) {
  var me = this, strseed = '';

  me.x = 0;
  me.y = 0;
  me.z = 0;
  me.w = 0;

  // Set up generator function.
  me.next = function() {
    var t = me.x ^ (me.x << 11);
    me.x = me.y;
    me.y = me.z;
    me.z = me.w;
    return me.w ^= (me.w >>> 19) ^ t ^ (t >>> 8);
  };

  if (seed === (seed | 0)) {
    // Integer seed.
    me.x = seed;
  } else {
    // String seed.
    strseed += seed;
  }

  // Mix in string seed, then discard an initial batch of 64 values.
  for (var k = 0; k < strseed.length + 64; k++) {
    me.x ^= strseed.charCodeAt(k) | 0;
    me.next();
  }
}

function copy(f, t) {
  t.x = f.x;
  t.y = f.y;
  t.z = f.z;
  t.w = f.w;
  return t;
}

function impl(seed, opts) {
  var xg = new XorGen(seed),
      state = opts && opts.state,
      prng = function() { return (xg.next() >>> 0) / 0x100000000; };
  prng.double = function() {
    do {
      var top = xg.next() >>> 11,
          bot = (xg.next() >>> 0) / 0x100000000,
          result = (top + bot) / (1 << 21);
    } while (result === 0);
    return result;
  };
  prng.int32 = xg.next;
  prng.quick = prng;
  if (state) {
    if (typeof(state) == 'object') copy(state, xg);
    prng.state = function() { return copy(xg, {}); }
  }
  return prng;
}

if (module && module.exports) {
  module.exports = impl;
} else if (__webpack_require__(/*! !webpack amd define */ "../../node_modules/webpack/buildin/amd-define.js") && __webpack_require__(/*! !webpack amd options */ "../../node_modules/webpack/buildin/amd-options.js")) {
  !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() { return impl; }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {
  this.xor128 = impl;
}

})(
  this,
   true && module,    // present in node.js
  __webpack_require__(/*! !webpack amd define */ "../../node_modules/webpack/buildin/amd-define.js")   // present with an AMD loader
);



/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/module.js */ "../../node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "../../node_modules/seedrandom/lib/xor4096.js":
/*!*********************************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/seedrandom/lib/xor4096.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;// A Javascript implementaion of Richard Brent's Xorgens xor4096 algorithm.
//
// This fast non-cryptographic random number generator is designed for
// use in Monte-Carlo algorithms. It combines a long-period xorshift
// generator with a Weyl generator, and it passes all common batteries
// of stasticial tests for randomness while consuming only a few nanoseconds
// for each prng generated.  For background on the generator, see Brent's
// paper: "Some long-period random number generators using shifts and xors."
// http://arxiv.org/pdf/1004.3115v1.pdf
//
// Usage:
//
// var xor4096 = require('xor4096');
// random = xor4096(1);                        // Seed with int32 or string.
// assert.equal(random(), 0.1520436450538547); // (0, 1) range, 53 bits.
// assert.equal(random.int32(), 1806534897);   // signed int32, 32 bits.
//
// For nonzero numeric keys, this impelementation provides a sequence
// identical to that by Brent's xorgens 3 implementaion in C.  This
// implementation also provides for initalizing the generator with
// string seeds, or for saving and restoring the state of the generator.
//
// On Chrome, this prng benchmarks about 2.1 times slower than
// Javascript's built-in Math.random().

(function(global, module, define) {

function XorGen(seed) {
  var me = this;

  // Set up generator function.
  me.next = function() {
    var w = me.w,
        X = me.X, i = me.i, t, v;
    // Update Weyl generator.
    me.w = w = (w + 0x61c88647) | 0;
    // Update xor generator.
    v = X[(i + 34) & 127];
    t = X[i = ((i + 1) & 127)];
    v ^= v << 13;
    t ^= t << 17;
    v ^= v >>> 15;
    t ^= t >>> 12;
    // Update Xor generator array state.
    v = X[i] = v ^ t;
    me.i = i;
    // Result is the combination.
    return (v + (w ^ (w >>> 16))) | 0;
  };

  function init(me, seed) {
    var t, v, i, j, w, X = [], limit = 128;
    if (seed === (seed | 0)) {
      // Numeric seeds initialize v, which is used to generates X.
      v = seed;
      seed = null;
    } else {
      // String seeds are mixed into v and X one character at a time.
      seed = seed + '\0';
      v = 0;
      limit = Math.max(limit, seed.length);
    }
    // Initialize circular array and weyl value.
    for (i = 0, j = -32; j < limit; ++j) {
      // Put the unicode characters into the array, and shuffle them.
      if (seed) v ^= seed.charCodeAt((j + 32) % seed.length);
      // After 32 shuffles, take v as the starting w value.
      if (j === 0) w = v;
      v ^= v << 10;
      v ^= v >>> 15;
      v ^= v << 4;
      v ^= v >>> 13;
      if (j >= 0) {
        w = (w + 0x61c88647) | 0;     // Weyl.
        t = (X[j & 127] ^= (v + w));  // Combine xor and weyl to init array.
        i = (0 == t) ? i + 1 : 0;     // Count zeroes.
      }
    }
    // We have detected all zeroes; make the key nonzero.
    if (i >= 128) {
      X[(seed && seed.length || 0) & 127] = -1;
    }
    // Run the generator 512 times to further mix the state before using it.
    // Factoring this as a function slows the main generator, so it is just
    // unrolled here.  The weyl generator is not advanced while warming up.
    i = 127;
    for (j = 4 * 128; j > 0; --j) {
      v = X[(i + 34) & 127];
      t = X[i = ((i + 1) & 127)];
      v ^= v << 13;
      t ^= t << 17;
      v ^= v >>> 15;
      t ^= t >>> 12;
      X[i] = v ^ t;
    }
    // Storing state as object members is faster than using closure variables.
    me.w = w;
    me.X = X;
    me.i = i;
  }

  init(me, seed);
}

function copy(f, t) {
  t.i = f.i;
  t.w = f.w;
  t.X = f.X.slice();
  return t;
};

function impl(seed, opts) {
  if (seed == null) seed = +(new Date);
  var xg = new XorGen(seed),
      state = opts && opts.state,
      prng = function() { return (xg.next() >>> 0) / 0x100000000; };
  prng.double = function() {
    do {
      var top = xg.next() >>> 11,
          bot = (xg.next() >>> 0) / 0x100000000,
          result = (top + bot) / (1 << 21);
    } while (result === 0);
    return result;
  };
  prng.int32 = xg.next;
  prng.quick = prng;
  if (state) {
    if (state.X) copy(state, xg);
    prng.state = function() { return copy(xg, {}); }
  }
  return prng;
}

if (module && module.exports) {
  module.exports = impl;
} else if (__webpack_require__(/*! !webpack amd define */ "../../node_modules/webpack/buildin/amd-define.js") && __webpack_require__(/*! !webpack amd options */ "../../node_modules/webpack/buildin/amd-options.js")) {
  !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() { return impl; }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {
  this.xor4096 = impl;
}

})(
  this,                                     // window object or global
   true && module,    // present in node.js
  __webpack_require__(/*! !webpack amd define */ "../../node_modules/webpack/buildin/amd-define.js")   // present with an AMD loader
);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/module.js */ "../../node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "../../node_modules/seedrandom/lib/xorshift7.js":
/*!***********************************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/seedrandom/lib/xorshift7.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;// A Javascript implementaion of the "xorshift7" algorithm by
// François Panneton and Pierre L'ecuyer:
// "On the Xorgshift Random Number Generators"
// http://saluc.engr.uconn.edu/refs/crypto/rng/panneton05onthexorshift.pdf

(function(global, module, define) {

function XorGen(seed) {
  var me = this;

  // Set up generator function.
  me.next = function() {
    // Update xor generator.
    var X = me.x, i = me.i, t, v, w;
    t = X[i]; t ^= (t >>> 7); v = t ^ (t << 24);
    t = X[(i + 1) & 7]; v ^= t ^ (t >>> 10);
    t = X[(i + 3) & 7]; v ^= t ^ (t >>> 3);
    t = X[(i + 4) & 7]; v ^= t ^ (t << 7);
    t = X[(i + 7) & 7]; t = t ^ (t << 13); v ^= t ^ (t << 9);
    X[i] = v;
    me.i = (i + 1) & 7;
    return v;
  };

  function init(me, seed) {
    var j, w, X = [];

    if (seed === (seed | 0)) {
      // Seed state array using a 32-bit integer.
      w = X[0] = seed;
    } else {
      // Seed state using a string.
      seed = '' + seed;
      for (j = 0; j < seed.length; ++j) {
        X[j & 7] = (X[j & 7] << 15) ^
            (seed.charCodeAt(j) + X[(j + 1) & 7] << 13);
      }
    }
    // Enforce an array length of 8, not all zeroes.
    while (X.length < 8) X.push(0);
    for (j = 0; j < 8 && X[j] === 0; ++j);
    if (j == 8) w = X[7] = -1; else w = X[j];

    me.x = X;
    me.i = 0;

    // Discard an initial 256 values.
    for (j = 256; j > 0; --j) {
      me.next();
    }
  }

  init(me, seed);
}

function copy(f, t) {
  t.x = f.x.slice();
  t.i = f.i;
  return t;
}

function impl(seed, opts) {
  if (seed == null) seed = +(new Date);
  var xg = new XorGen(seed),
      state = opts && opts.state,
      prng = function() { return (xg.next() >>> 0) / 0x100000000; };
  prng.double = function() {
    do {
      var top = xg.next() >>> 11,
          bot = (xg.next() >>> 0) / 0x100000000,
          result = (top + bot) / (1 << 21);
    } while (result === 0);
    return result;
  };
  prng.int32 = xg.next;
  prng.quick = prng;
  if (state) {
    if (state.x) copy(state, xg);
    prng.state = function() { return copy(xg, {}); }
  }
  return prng;
}

if (module && module.exports) {
  module.exports = impl;
} else if (__webpack_require__(/*! !webpack amd define */ "../../node_modules/webpack/buildin/amd-define.js") && __webpack_require__(/*! !webpack amd options */ "../../node_modules/webpack/buildin/amd-options.js")) {
  !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() { return impl; }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {
  this.xorshift7 = impl;
}

})(
  this,
   true && module,    // present in node.js
  __webpack_require__(/*! !webpack amd define */ "../../node_modules/webpack/buildin/amd-define.js")   // present with an AMD loader
);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/module.js */ "../../node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "../../node_modules/seedrandom/lib/xorwow.js":
/*!********************************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/seedrandom/lib/xorwow.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;// A Javascript implementaion of the "xorwow" prng algorithm by
// George Marsaglia.  See http://www.jstatsoft.org/v08/i14/paper

(function(global, module, define) {

function XorGen(seed) {
  var me = this, strseed = '';

  // Set up generator function.
  me.next = function() {
    var t = (me.x ^ (me.x >>> 2));
    me.x = me.y; me.y = me.z; me.z = me.w; me.w = me.v;
    return (me.d = (me.d + 362437 | 0)) +
       (me.v = (me.v ^ (me.v << 4)) ^ (t ^ (t << 1))) | 0;
  };

  me.x = 0;
  me.y = 0;
  me.z = 0;
  me.w = 0;
  me.v = 0;

  if (seed === (seed | 0)) {
    // Integer seed.
    me.x = seed;
  } else {
    // String seed.
    strseed += seed;
  }

  // Mix in string seed, then discard an initial batch of 64 values.
  for (var k = 0; k < strseed.length + 64; k++) {
    me.x ^= strseed.charCodeAt(k) | 0;
    if (k == strseed.length) {
      me.d = me.x << 10 ^ me.x >>> 4;
    }
    me.next();
  }
}

function copy(f, t) {
  t.x = f.x;
  t.y = f.y;
  t.z = f.z;
  t.w = f.w;
  t.v = f.v;
  t.d = f.d;
  return t;
}

function impl(seed, opts) {
  var xg = new XorGen(seed),
      state = opts && opts.state,
      prng = function() { return (xg.next() >>> 0) / 0x100000000; };
  prng.double = function() {
    do {
      var top = xg.next() >>> 11,
          bot = (xg.next() >>> 0) / 0x100000000,
          result = (top + bot) / (1 << 21);
    } while (result === 0);
    return result;
  };
  prng.int32 = xg.next;
  prng.quick = prng;
  if (state) {
    if (typeof(state) == 'object') copy(state, xg);
    prng.state = function() { return copy(xg, {}); }
  }
  return prng;
}

if (module && module.exports) {
  module.exports = impl;
} else if (__webpack_require__(/*! !webpack amd define */ "../../node_modules/webpack/buildin/amd-define.js") && __webpack_require__(/*! !webpack amd options */ "../../node_modules/webpack/buildin/amd-options.js")) {
  !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() { return impl; }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {
  this.xorwow = impl;
}

})(
  this,
   true && module,    // present in node.js
  __webpack_require__(/*! !webpack amd define */ "../../node_modules/webpack/buildin/amd-define.js")   // present with an AMD loader
);



/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/module.js */ "../../node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "../../node_modules/seedrandom/seedrandom.js":
/*!********************************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/seedrandom/seedrandom.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*
Copyright 2014 David Bau.

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

*/

(function (pool, math) {
//
// The following constants are related to IEEE 754 limits.
//

// Detect the global object, even if operating in strict mode.
// http://stackoverflow.com/a/14387057/265298
var global = (0, eval)('this'),
    width = 256,        // each RC4 output is 0 <= x < 256
    chunks = 6,         // at least six RC4 outputs for each double
    digits = 52,        // there are 52 significant digits in a double
    rngname = 'random', // rngname: name for Math.random and Math.seedrandom
    startdenom = math.pow(width, chunks),
    significance = math.pow(2, digits),
    overflow = significance * 2,
    mask = width - 1,
    nodecrypto;         // node.js crypto module, initialized at the bottom.

//
// seedrandom()
// This is the seedrandom function described above.
//
function seedrandom(seed, options, callback) {
  var key = [];
  options = (options == true) ? { entropy: true } : (options || {});

  // Flatten the seed string or build one from local entropy if needed.
  var shortseed = mixkey(flatten(
    options.entropy ? [seed, tostring(pool)] :
    (seed == null) ? autoseed() : seed, 3), key);

  // Use the seed to initialize an ARC4 generator.
  var arc4 = new ARC4(key);

  // This function returns a random double in [0, 1) that contains
  // randomness in every bit of the mantissa of the IEEE 754 value.
  var prng = function() {
    var n = arc4.g(chunks),             // Start with a numerator n < 2 ^ 48
        d = startdenom,                 //   and denominator d = 2 ^ 48.
        x = 0;                          //   and no 'extra last byte'.
    while (n < significance) {          // Fill up all significant digits by
      n = (n + x) * width;              //   shifting numerator and
      d *= width;                       //   denominator and generating a
      x = arc4.g(1);                    //   new least-significant-byte.
    }
    while (n >= overflow) {             // To avoid rounding up, before adding
      n /= 2;                           //   last byte, shift everything
      d /= 2;                           //   right using integer math until
      x >>>= 1;                         //   we have exactly the desired bits.
    }
    return (n + x) / d;                 // Form the number within [0, 1).
  };

  prng.int32 = function() { return arc4.g(4) | 0; }
  prng.quick = function() { return arc4.g(4) / 0x100000000; }
  prng.double = prng;

  // Mix the randomness into accumulated entropy.
  mixkey(tostring(arc4.S), pool);

  // Calling convention: what to return as a function of prng, seed, is_math.
  return (options.pass || callback ||
      function(prng, seed, is_math_call, state) {
        if (state) {
          // Load the arc4 state from the given state if it has an S array.
          if (state.S) { copy(state, arc4); }
          // Only provide the .state method if requested via options.state.
          prng.state = function() { return copy(arc4, {}); }
        }

        // If called as a method of Math (Math.seedrandom()), mutate
        // Math.random because that is how seedrandom.js has worked since v1.0.
        if (is_math_call) { math[rngname] = prng; return seed; }

        // Otherwise, it is a newer calling convention, so return the
        // prng directly.
        else return prng;
      })(
  prng,
  shortseed,
  'global' in options ? options.global : (this == math),
  options.state);
}
math['seed' + rngname] = seedrandom;

//
// ARC4
//
// An ARC4 implementation.  The constructor takes a key in the form of
// an array of at most (width) integers that should be 0 <= x < (width).
//
// The g(count) method returns a pseudorandom integer that concatenates
// the next (count) outputs from ARC4.  Its return value is a number x
// that is in the range 0 <= x < (width ^ count).
//
function ARC4(key) {
  var t, keylen = key.length,
      me = this, i = 0, j = me.i = me.j = 0, s = me.S = [];

  // The empty key [] is treated as [0].
  if (!keylen) { key = [keylen++]; }

  // Set up S using the standard key scheduling algorithm.
  while (i < width) {
    s[i] = i++;
  }
  for (i = 0; i < width; i++) {
    s[i] = s[j = mask & (j + key[i % keylen] + (t = s[i]))];
    s[j] = t;
  }

  // The "g" method returns the next (count) outputs as one number.
  (me.g = function(count) {
    // Using instance members instead of closure state nearly doubles speed.
    var t, r = 0,
        i = me.i, j = me.j, s = me.S;
    while (count--) {
      t = s[i = mask & (i + 1)];
      r = r * width + s[mask & ((s[i] = s[j = mask & (j + t)]) + (s[j] = t))];
    }
    me.i = i; me.j = j;
    return r;
    // For robust unpredictability, the function call below automatically
    // discards an initial batch of values.  This is called RC4-drop[256].
    // See http://google.com/search?q=rsa+fluhrer+response&btnI
  })(width);
}

//
// copy()
// Copies internal state of ARC4 to or from a plain object.
//
function copy(f, t) {
  t.i = f.i;
  t.j = f.j;
  t.S = f.S.slice();
  return t;
};

//
// flatten()
// Converts an object tree to nested arrays of strings.
//
function flatten(obj, depth) {
  var result = [], typ = (typeof obj), prop;
  if (depth && typ == 'object') {
    for (prop in obj) {
      try { result.push(flatten(obj[prop], depth - 1)); } catch (e) {}
    }
  }
  return (result.length ? result : typ == 'string' ? obj : obj + '\0');
}

//
// mixkey()
// Mixes a string seed into a key that is an array of integers, and
// returns a shortened string seed that is equivalent to the result key.
//
function mixkey(seed, key) {
  var stringseed = seed + '', smear, j = 0;
  while (j < stringseed.length) {
    key[mask & j] =
      mask & ((smear ^= key[mask & j] * 19) + stringseed.charCodeAt(j++));
  }
  return tostring(key);
}

//
// autoseed()
// Returns an object for autoseeding, using window.crypto and Node crypto
// module if available.
//
function autoseed() {
  try {
    var out;
    if (nodecrypto && (out = nodecrypto.randomBytes)) {
      // The use of 'out' to remember randomBytes makes tight minified code.
      out = out(width);
    } else {
      out = new Uint8Array(width);
      (global.crypto || global.msCrypto).getRandomValues(out);
    }
    return tostring(out);
  } catch (e) {
    var browser = global.navigator,
        plugins = browser && browser.plugins;
    return [+new Date, global, plugins, global.screen, tostring(pool)];
  }
}

//
// tostring()
// Converts an array of charcodes to a string
//
function tostring(a) {
  return String.fromCharCode.apply(0, a);
}

//
// When seedrandom.js is loaded, we immediately mix a few bits
// from the built-in RNG into the entropy pool.  Because we do
// not want to interfere with deterministic PRNG state later,
// seedrandom will not call math.random on its own again after
// initialization.
//
mixkey(math.random(), pool);

//
// Nodejs and AMD support: export the implementation as a module using
// either convention.
//
if ( true && module.exports) {
  module.exports = seedrandom;
  // When in node.js, try using crypto package for autoseeding.
  try {
    nodecrypto = __webpack_require__(/*! crypto */ 0);
  } catch (ex) {}
} else if (true) {
  !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() { return seedrandom; }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}

// End anonymous scope, and pass initial values.
})(
  [],     // pool: entropy pool starts empty
  Math    // math: package containing random, pow, and seedrandom
);


/***/ }),

/***/ "../../node_modules/webpack/buildin/amd-define.js":
/*!***************************************!*\
  !*** (webpack)/buildin/amd-define.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function() {
	throw new Error("define cannot be used indirect");
};


/***/ }),

/***/ "../../node_modules/webpack/buildin/amd-options.js":
/*!****************************************!*\
  !*** (webpack)/buildin/amd-options.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(this, {}))

/***/ }),

/***/ "../../node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "../causality-sampling/dist/@causalNet/sampling.web.js":
/*!*************************************************************!*\
  !*** ../causality-sampling/dist/@causalNet/sampling.web.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(/*! causal-net.core */ "causal-net.core"), __webpack_require__(/*! causal-net.utils */ "causal-net.utils"), __webpack_require__(/*! random */ "../../node_modules/random/index.js"));
	else {}
})(this, function(__WEBPACK_EXTERNAL_MODULE_causal_net_core__, __WEBPACK_EXTERNAL_MODULE_causal_net_utils__, __WEBPACK_EXTERNAL_MODULE_random__) {
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

/***/ "../../node_modules/@babel/runtime/helpers/extends.js":
/*!*****************************************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/@babel/runtime/helpers/extends.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./src/causalNetSampling.js":
/*!**********************************!*\
  !*** ./src/causalNetSampling.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "../../node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var causal_net_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! causal-net.core */ "causal-net.core");
/* harmony import */ var causal_net_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(causal_net_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! causal-net.utils */ "causal-net.utils");
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(causal_net_utils__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var random__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! random */ "random");
/* harmony import */ var random__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(random__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _subSampling_mixins__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./subSampling.mixins */ "./src/subSampling.mixins.js");
/* harmony import */ var _negSampling_mixins__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./negSampling.mixins */ "./src/negSampling.mixins.js");






/**
 * This class provides common used sampling methods which can be accessed via **causalNetSampling**.
 * mixwith:
 * [ SubSamplingMixins, NegSamplingMixins ]
 * @class CausalNetSampling
 * @extends Functor
 * @example
 * [EXAMPLE ../examples/causalNetSampling.babel.js]
 */

class CausalNetSampling extends causal_net_utils__WEBPACK_IMPORTED_MODULE_2__["platform"].mixWith(causal_net_core__WEBPACK_IMPORTED_MODULE_1__["Functor"], [_subSampling_mixins__WEBPACK_IMPORTED_MODULE_4__["default"], _negSampling_mixins__WEBPACK_IMPORTED_MODULE_5__["default"]]) {
  constructor(random) {
    super();
    this.Random = random;
  }

  random(shape, distribution = 'normal', _ref = {}) {
    let args = _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, _ref);

    const length = shape.reduce((cd, s) => cd * s);
    const generator = this.Random.normal();
    return this.R.range(0, length).map(() => generator());
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new CausalNetSampling(random__WEBPACK_IMPORTED_MODULE_3___default.a));

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: causalNetSampling, SamplingMixins, SubSamplingMixins, NegSamplingMixins */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _causalNetSampling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./causalNetSampling */ "./src/causalNetSampling.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "causalNetSampling", function() { return _causalNetSampling__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _sampling_mixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sampling.mixins */ "./src/sampling.mixins.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SamplingMixins", function() { return _sampling_mixins__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _subSampling_mixins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./subSampling.mixins */ "./src/subSampling.mixins.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SubSamplingMixins", function() { return _subSampling_mixins__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _negSampling_mixins__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./negSampling.mixins */ "./src/negSampling.mixins.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NegSamplingMixins", function() { return _negSampling_mixins__WEBPACK_IMPORTED_MODULE_3__["default"]; });






/***/ }),

/***/ "./src/negSampling.mixins.js":
/*!***********************************!*\
  !*** ./src/negSampling.mixins.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const NegativeSamplingMixins = BaseSamplingClass => class extends BaseSamplingClass {
  /**
   * Perform negative sampling given the select prob of ids and list of positive samples
   * @param { Number } negativeSize - size to sample
   * @param { Array } positiveSamples - Array of possitive Ids
   * @param { Array } candidateProbs - Array of probablity of candidate Ids
   * @param { Boolean } [replacable=true] - if true, no duplicated sampling Id returned
   * @returns { Array } array of sampled Ids
   */
  negSampling(negativeSize, positiveSamples, candidateProbs, replacable = true) {
    const R = this.R,
          Random = this.Random;

    if (R.any(v => !R.type(Number, v) || v > 1 || v < 0, candidateProbs)) {
      throw Error(`${JSON.stringify(candidateProbs)} is not allow`);
    }

    let seletionProbs = R.reduce((selectionProbs, pidx) => {
      selectionProbs[pidx] = Infinity; //positive candidate never be choosed

      return selectionProbs;
    }, R.clone(candidateProbs), positiveSamples);
    let samples = [],
        takenIdxs = R.clone(seletionProbs);

    const GenNewCandidateIdx = () => Random.int(0, seletionProbs.length - 1);

    const SelectIfHighProb = prob => {
      let rand = Random.float();
      return rand > prob;
    };

    while (samples.length < negativeSize) {
      let idx = GenNewCandidateIdx();
      let selected = SelectIfHighProb(seletionProbs[idx]);

      if (!selected) {
        continue;
      }

      if (!replacable && takenIdxs[idx] === null) {
        continue;
      }

      samples = [...samples, idx];

      if (!replacable) {
        takenIdxs[idx] = null; //non replaceable
      }
    }

    return samples;
  }

};

/* harmony default export */ __webpack_exports__["default"] = (NegativeSamplingMixins);

/***/ }),

/***/ "./src/sampling.mixins.js":
/*!********************************!*\
  !*** ./src/sampling.mixins.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var causal_net_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! causal-net.core */ "causal-net.core");
/* harmony import */ var causal_net_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(causal_net_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! causal-net.utils */ "causal-net.utils");
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(causal_net_utils__WEBPACK_IMPORTED_MODULE_1__);


/**
 * This mixin class provide attributes: **Sampling**.
 * @class SamplingMixins
 * @extends BaseClass
 * @example
 * [EXAMPLE ../examples/sampling.mixins.babel.js]
 */

const SamplingMixins = BaseClass => class extends BaseClass {
  /**
   * get current random instance
   */
  get Sampling() {
    if (!this.sampling) {
      throw Error(`Sampling is not set`);
    }

    return this.sampling;
  }
  /**
   * set Sampling instance
   * @readonly
   */


  set Sampling(sampling) {
    causal_net_utils__WEBPACK_IMPORTED_MODULE_1__["assert"].beInstanceOf(sampling, causal_net_core__WEBPACK_IMPORTED_MODULE_0__["Functor"]);
    this.sampling = sampling;
  }

};

/* harmony default export */ __webpack_exports__["default"] = (SamplingMixins);

/***/ }),

/***/ "./src/subSampling.mixins.js":
/*!***********************************!*\
  !*** ./src/subSampling.mixins.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const SubSamplingMixins = BaseSamplingClass => class extends BaseSamplingClass {
  /**
   * Perform uniform sample a sub set of Ids given the candidate list
   * @param { Number } samplingSize
   * @param { Array|Number } candidateList - list of candidates or size of candidate list
   * @param { Boolean } [replacable=true] - if true, no duplicated sampling Id returned
   * @returns { Array } array of sampled Ids
   */
  subSampling(samplingSize, candidateList, replacable = true) {
    const R = this.R,
          Random = this.Random;
    let candidates = Array.isArray(candidateList) ? R.clone(candidateList) : R.range(0, candidateList);

    if (candidates.length === 0) {
      throw Error('candidate length should be positive');
    }

    let samples = [],
        takenIdxs = R.clone(candidates);

    const GenNewCandidateIdx = () => Random.int(0, candidates.length - 1);

    while (samples.length < samplingSize) {
      let idx = GenNewCandidateIdx();

      if (!replacable && takenIdxs[idx] === null) {
        continue;
      }

      samples = [...samples, candidates[idx]];

      if (!replacable) {
        takenIdxs[idx] = null; //non replaceable
      }
    }

    return samples;
  }

};

/* harmony default export */ __webpack_exports__["default"] = (SubSamplingMixins);

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

/***/ }),

/***/ "random":
/*!*************************!*\
  !*** external "random" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_random__;

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3NhbXBsaW5nL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3NhbXBsaW5nL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0BjYXVzYWxOZXQvc2FtcGxpbmcvL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvc2FtcGxpbmcvLi9zcmMvY2F1c2FsTmV0U2FtcGxpbmcuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9zYW1wbGluZy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3NhbXBsaW5nLy4vc3JjL25lZ1NhbXBsaW5nLm1peGlucy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3NhbXBsaW5nLy4vc3JjL3NhbXBsaW5nLm1peGlucy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3NhbXBsaW5nLy4vc3JjL3N1YlNhbXBsaW5nLm1peGlucy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3NhbXBsaW5nL2V4dGVybmFsIFwiY2F1c2FsLW5ldC5jb3JlXCIiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9zYW1wbGluZy9leHRlcm5hbCBcImNhdXNhbC1uZXQudXRpbHNcIiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3NhbXBsaW5nL2V4dGVybmFsIFwicmFuZG9tXCIiXSwibmFtZXMiOlsiQ2F1c2FsTmV0U2FtcGxpbmciLCJwbGF0Zm9ybSIsIm1peFdpdGgiLCJCYXNlRnVuY3RvciIsIlN1YlNhbXBsaW5nTWl4aW5zIiwiTmVnU2FtcGxpbmdNaXhpbnMiLCJjb25zdHJ1Y3RvciIsInJhbmRvbSIsIlJhbmRvbSIsInNoYXBlIiwiZGlzdHJpYnV0aW9uIiwiYXJncyIsImxlbmd0aCIsInJlZHVjZSIsImNkIiwicyIsImdlbmVyYXRvciIsIm5vcm1hbCIsIlIiLCJyYW5nZSIsIm1hcCIsIk5lZ2F0aXZlU2FtcGxpbmdNaXhpbnMiLCJCYXNlU2FtcGxpbmdDbGFzcyIsIm5lZ1NhbXBsaW5nIiwibmVnYXRpdmVTaXplIiwicG9zaXRpdmVTYW1wbGVzIiwiY2FuZGlkYXRlUHJvYnMiLCJyZXBsYWNhYmxlIiwiYW55IiwidiIsInR5cGUiLCJOdW1iZXIiLCJFcnJvciIsIkpTT04iLCJzdHJpbmdpZnkiLCJzZWxldGlvblByb2JzIiwic2VsZWN0aW9uUHJvYnMiLCJwaWR4IiwiSW5maW5pdHkiLCJjbG9uZSIsInNhbXBsZXMiLCJ0YWtlbklkeHMiLCJHZW5OZXdDYW5kaWRhdGVJZHgiLCJpbnQiLCJTZWxlY3RJZkhpZ2hQcm9iIiwicHJvYiIsInJhbmQiLCJmbG9hdCIsImlkeCIsInNlbGVjdGVkIiwiU2FtcGxpbmdNaXhpbnMiLCJCYXNlQ2xhc3MiLCJTYW1wbGluZyIsInNhbXBsaW5nIiwiYXNzZXJ0IiwiYmVJbnN0YW5jZU9mIiwiRnVuY3RvciIsInN1YlNhbXBsaW5nIiwic2FtcGxpbmdTaXplIiwiY2FuZGlkYXRlTGlzdCIsImNhbmRpZGF0ZXMiLCJBcnJheSIsImlzQXJyYXkiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUQsQ0FBVCxLQUFpQixJQUFuQyxFQUF3QztBQUNwQztBQUNIOztBQUNEUixhQUFPLEdBQUcsQ0FBQyxHQUFHQSxPQUFKLEVBQWFvQixVQUFVLENBQUNaLEdBQUQsQ0FBdkIsQ0FBVjs7QUFDQSxVQUFHLENBQUNyQixVQUFKLEVBQWU7QUFDWGMsaUJBQVMsQ0FBQ08sR0FBRCxDQUFULEdBQWUsSUFBZixDQURXLENBQ1M7QUFDdkI7QUFDSjs7QUFDRCxXQUFPUixPQUFQO0FBQ0g7O0FBM0IyRSxDQUFoRjs7QUE2QmVwQyxnRkFBZixFOzs7Ozs7Ozs7OztBQzdCQSw2RDs7Ozs7Ozs7Ozs7QUNBQSw4RDs7Ozs7Ozs7Ozs7QUNBQSxvRCIsImZpbGUiOiJAY2F1c2FsTmV0L3NhbXBsaW5nLndlYi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImNhdXNhbC1uZXQuY29yZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQudXRpbHNcIiksIHJlcXVpcmUoXCJyYW5kb21cIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiY2F1c2FsLW5ldC5jb3JlXCIsIFwiY2F1c2FsLW5ldC51dGlsc1wiLCBcInJhbmRvbVwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJAY2F1c2FsTmV0L3NhbXBsaW5nXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiY2F1c2FsLW5ldC5jb3JlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC51dGlsc1wiKSwgcmVxdWlyZShcInJhbmRvbVwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiQGNhdXNhbE5ldC9zYW1wbGluZ1wiXSA9IGZhY3Rvcnkocm9vdFtcImNhdXNhbC1uZXQuY29yZVwiXSwgcm9vdFtcImNhdXNhbC1uZXQudXRpbHNcIl0sIHJvb3RbXCJyYW5kb21cIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X2NvcmVfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3V0aWxzX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcmFuZG9tX18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZXh0ZW5kczsiLCJpbXBvcnQgeyBGdW5jdG9yIGFzIEJhc2VGdW5jdG9yIH0gZnJvbSAnY2F1c2FsLW5ldC5jb3JlJztcbmltcG9ydCB7IHBsYXRmb3JtIH0gZnJvbSAnY2F1c2FsLW5ldC51dGlscyc7XG5pbXBvcnQgcmFuZG9tIGZyb20gJ3JhbmRvbSc7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIFN1YlNhbXBsaW5nTWl4aW5zIH0gZnJvbSAnLi9zdWJTYW1wbGluZy5taXhpbnMnO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBOZWdTYW1wbGluZ01peGlucyB9IGZyb20gJy4vbmVnU2FtcGxpbmcubWl4aW5zJztcblxuLyoqXG4gKiBUaGlzIGNsYXNzIHByb3ZpZGVzIGNvbW1vbiB1c2VkIHNhbXBsaW5nIG1ldGhvZHMgd2hpY2ggY2FuIGJlIGFjY2Vzc2VkIHZpYSAqKmNhdXNhbE5ldFNhbXBsaW5nKiouXG4gKiBtaXh3aXRoOlxuICogWyBTdWJTYW1wbGluZ01peGlucywgTmVnU2FtcGxpbmdNaXhpbnMgXVxuICogQGNsYXNzIENhdXNhbE5ldFNhbXBsaW5nXG4gKiBAZXh0ZW5kcyBGdW5jdG9yXG4gKiBAZXhhbXBsZVxuICogW0VYQU1QTEUgLi4vZXhhbXBsZXMvY2F1c2FsTmV0U2FtcGxpbmcuYmFiZWwuanNdXG4gKi9cbmNsYXNzIENhdXNhbE5ldFNhbXBsaW5nIGV4dGVuZHMgcGxhdGZvcm0ubWl4V2l0aCggQmFzZUZ1bmN0b3IsIFxuICAgIFsgU3ViU2FtcGxpbmdNaXhpbnMsIE5lZ1NhbXBsaW5nTWl4aW5zIF0pe1xuICAgIGNvbnN0cnVjdG9yKHJhbmRvbSl7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuUmFuZG9tID0gcmFuZG9tOyAgICBcbiAgICB9XG4gICAgcmFuZG9tKHNoYXBlLCBkaXN0cmlidXRpb249J25vcm1hbCcsIHsuLi5hcmdzfT17fSl7XG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IHNoYXBlLnJlZHVjZSgoY2Qscyk9PmNkKnMpO1xuICAgICAgICBjb25zdCBnZW5lcmF0b3IgPSB0aGlzLlJhbmRvbS5ub3JtYWwoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuUi5yYW5nZSgwLGxlbmd0aCkubWFwKCgpPT5nZW5lcmF0b3IoKSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgQ2F1c2FsTmV0U2FtcGxpbmcocmFuZG9tKTsiLCJleHBvcnQgeyBkZWZhdWx0IGFzIGNhdXNhbE5ldFNhbXBsaW5nIH0gZnJvbSAnLi9jYXVzYWxOZXRTYW1wbGluZyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFNhbXBsaW5nTWl4aW5zIH0gZnJvbSAnLi9zYW1wbGluZy5taXhpbnMnO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIFN1YlNhbXBsaW5nTWl4aW5zIH0gZnJvbSAnLi9zdWJTYW1wbGluZy5taXhpbnMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBOZWdTYW1wbGluZ01peGlucyB9IGZyb20gJy4vbmVnU2FtcGxpbmcubWl4aW5zJzsiLCJjb25zdCBOZWdhdGl2ZVNhbXBsaW5nTWl4aW5zID0gKEJhc2VTYW1wbGluZ0NsYXNzKT0+IGNsYXNzIGV4dGVuZHMgQmFzZVNhbXBsaW5nQ2xhc3N7XG4gICAgLyoqXG4gICAgICogUGVyZm9ybSBuZWdhdGl2ZSBzYW1wbGluZyBnaXZlbiB0aGUgc2VsZWN0IHByb2Igb2YgaWRzIGFuZCBsaXN0IG9mIHBvc2l0aXZlIHNhbXBsZXNcbiAgICAgKiBAcGFyYW0geyBOdW1iZXIgfSBuZWdhdGl2ZVNpemUgLSBzaXplIHRvIHNhbXBsZVxuICAgICAqIEBwYXJhbSB7IEFycmF5IH0gcG9zaXRpdmVTYW1wbGVzIC0gQXJyYXkgb2YgcG9zc2l0aXZlIElkc1xuICAgICAqIEBwYXJhbSB7IEFycmF5IH0gY2FuZGlkYXRlUHJvYnMgLSBBcnJheSBvZiBwcm9iYWJsaXR5IG9mIGNhbmRpZGF0ZSBJZHNcbiAgICAgKiBAcGFyYW0geyBCb29sZWFuIH0gW3JlcGxhY2FibGU9dHJ1ZV0gLSBpZiB0cnVlLCBubyBkdXBsaWNhdGVkIHNhbXBsaW5nIElkIHJldHVybmVkXG4gICAgICogQHJldHVybnMgeyBBcnJheSB9IGFycmF5IG9mIHNhbXBsZWQgSWRzXG4gICAgICovXG4gICAgbmVnU2FtcGxpbmcobmVnYXRpdmVTaXplLCBwb3NpdGl2ZVNhbXBsZXMsIGNhbmRpZGF0ZVByb2JzLCByZXBsYWNhYmxlPXRydWUpe1xuICAgICAgICBjb25zdCBSID0gdGhpcy5SLCBSYW5kb20gPSB0aGlzLlJhbmRvbTtcbiAgICAgICAgaWYoUi5hbnkoKHYpPT4gIVIudHlwZShOdW1iZXIsdikgfHwgdiA+IDEgfHwgdiA8IDAsIGNhbmRpZGF0ZVByb2JzKSl7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcihgJHtKU09OLnN0cmluZ2lmeShjYW5kaWRhdGVQcm9icyl9IGlzIG5vdCBhbGxvd2ApO1xuICAgICAgICB9XG4gICAgICAgIGxldCBzZWxldGlvblByb2JzID0gUi5yZWR1Y2UoKHNlbGVjdGlvblByb2JzLCBwaWR4KT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3Rpb25Qcm9ic1twaWR4XSA9IEluZmluaXR5Oy8vcG9zaXRpdmUgY2FuZGlkYXRlIG5ldmVyIGJlIGNob29zZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNlbGVjdGlvblByb2JzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIFIuY2xvbmUoY2FuZGlkYXRlUHJvYnMpLCBwb3NpdGl2ZVNhbXBsZXMpO1xuICAgICAgICBsZXQgc2FtcGxlcyA9IFtdLCB0YWtlbklkeHMgPSBSLmNsb25lKHNlbGV0aW9uUHJvYnMpO1xuICAgICAgICBjb25zdCBHZW5OZXdDYW5kaWRhdGVJZHggPSAoKT0+UmFuZG9tLmludCgwLCBzZWxldGlvblByb2JzLmxlbmd0aC0xKTtcbiAgICAgICAgY29uc3QgU2VsZWN0SWZIaWdoUHJvYiA9IChwcm9iKT0+e1xuICAgICAgICAgICAgbGV0IHJhbmQgPSBSYW5kb20uZmxvYXQoKTtcbiAgICAgICAgICAgIHJldHVybiByYW5kPnByb2I7XG4gICAgICAgIH07XG4gICAgICAgIHdoaWxlKHNhbXBsZXMubGVuZ3RoIDwgbmVnYXRpdmVTaXplKXtcbiAgICAgICAgICAgIGxldCBpZHggPSBHZW5OZXdDYW5kaWRhdGVJZHgoKTtcbiAgICAgICAgICAgIGxldCBzZWxlY3RlZCA9IFNlbGVjdElmSGlnaFByb2Ioc2VsZXRpb25Qcm9ic1tpZHhdKTtcbiAgICAgICAgICAgIGlmKCFzZWxlY3RlZCl7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZighcmVwbGFjYWJsZSAmJiB0YWtlbklkeHNbaWR4XT09PW51bGwpe1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2FtcGxlcyA9IFsuLi5zYW1wbGVzLCBpZHhdO1xuICAgICAgICAgICAgaWYoIXJlcGxhY2FibGUpe1xuICAgICAgICAgICAgICAgIHRha2VuSWR4c1tpZHhdPW51bGw7Ly9ub24gcmVwbGFjZWFibGVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSAgICBcbiAgICAgICAgcmV0dXJuIHNhbXBsZXM7XG4gICAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IE5lZ2F0aXZlU2FtcGxpbmdNaXhpbnM7IiwiaW1wb3J0IHsgRnVuY3RvciB9IGZyb20gJ2NhdXNhbC1uZXQuY29yZSc7XG5pbXBvcnQgeyBhc3NlcnQgfSBmcm9tICdjYXVzYWwtbmV0LnV0aWxzJztcbi8qKlxuICogVGhpcyBtaXhpbiBjbGFzcyBwcm92aWRlIGF0dHJpYnV0ZXM6ICoqU2FtcGxpbmcqKi5cbiAqIEBjbGFzcyBTYW1wbGluZ01peGluc1xuICogQGV4dGVuZHMgQmFzZUNsYXNzXG4gKiBAZXhhbXBsZVxuICogW0VYQU1QTEUgLi4vZXhhbXBsZXMvc2FtcGxpbmcubWl4aW5zLmJhYmVsLmpzXVxuICovXG5jb25zdCBTYW1wbGluZ01peGlucyA9IChCYXNlQ2xhc3MpPT4gY2xhc3MgZXh0ZW5kcyBCYXNlQ2xhc3N7XG4gICAgLyoqXG4gICAgICogZ2V0IGN1cnJlbnQgcmFuZG9tIGluc3RhbmNlXG4gICAgICovXG4gICAgZ2V0IFNhbXBsaW5nKCl7XG4gICAgICAgIGlmKCF0aGlzLnNhbXBsaW5nKXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKGBTYW1wbGluZyBpcyBub3Qgc2V0YCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuc2FtcGxpbmc7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIHNldCBTYW1wbGluZyBpbnN0YW5jZVxuICAgICAqIEByZWFkb25seVxuICAgICAqL1xuICAgIHNldCBTYW1wbGluZyhzYW1wbGluZyl7XG4gICAgICAgIGFzc2VydC5iZUluc3RhbmNlT2Yoc2FtcGxpbmcsIEZ1bmN0b3IpO1xuICAgICAgICB0aGlzLnNhbXBsaW5nID0gc2FtcGxpbmc7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgU2FtcGxpbmdNaXhpbnM7IiwiY29uc3QgU3ViU2FtcGxpbmdNaXhpbnMgPSAoQmFzZVNhbXBsaW5nQ2xhc3MpID0+IGNsYXNzIGV4dGVuZHMgQmFzZVNhbXBsaW5nQ2xhc3N7XG4gICAgLyoqXG4gICAgICogUGVyZm9ybSB1bmlmb3JtIHNhbXBsZSBhIHN1YiBzZXQgb2YgSWRzIGdpdmVuIHRoZSBjYW5kaWRhdGUgbGlzdFxuICAgICAqIEBwYXJhbSB7IE51bWJlciB9IHNhbXBsaW5nU2l6ZVxuICAgICAqIEBwYXJhbSB7IEFycmF5fE51bWJlciB9IGNhbmRpZGF0ZUxpc3QgLSBsaXN0IG9mIGNhbmRpZGF0ZXMgb3Igc2l6ZSBvZiBjYW5kaWRhdGUgbGlzdFxuICAgICAqIEBwYXJhbSB7IEJvb2xlYW4gfSBbcmVwbGFjYWJsZT10cnVlXSAtIGlmIHRydWUsIG5vIGR1cGxpY2F0ZWQgc2FtcGxpbmcgSWQgcmV0dXJuZWRcbiAgICAgKiBAcmV0dXJucyB7IEFycmF5IH0gYXJyYXkgb2Ygc2FtcGxlZCBJZHNcbiAgICAgKi9cbiAgICBzdWJTYW1wbGluZyhzYW1wbGluZ1NpemUsIGNhbmRpZGF0ZUxpc3QsIHJlcGxhY2FibGU9dHJ1ZSl7XG4gICAgICAgIGNvbnN0IFIgPSB0aGlzLlIsIFJhbmRvbSA9IHRoaXMuUmFuZG9tO1xuICAgICAgICBsZXQgY2FuZGlkYXRlcyA9IEFycmF5LmlzQXJyYXkoY2FuZGlkYXRlTGlzdCk/Ui5jbG9uZShjYW5kaWRhdGVMaXN0KTpSLnJhbmdlKDAsIGNhbmRpZGF0ZUxpc3QpO1xuICAgICAgICBpZihjYW5kaWRhdGVzLmxlbmd0aCA9PT0gMCl7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignY2FuZGlkYXRlIGxlbmd0aCBzaG91bGQgYmUgcG9zaXRpdmUnKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgc2FtcGxlcyA9IFtdLCB0YWtlbklkeHMgPSBSLmNsb25lKGNhbmRpZGF0ZXMpO1xuICAgICAgICBjb25zdCBHZW5OZXdDYW5kaWRhdGVJZHggPSAoKT0+UmFuZG9tLmludCgwLCBjYW5kaWRhdGVzLmxlbmd0aC0xKTtcbiAgICAgICAgd2hpbGUoc2FtcGxlcy5sZW5ndGggPCBzYW1wbGluZ1NpemUpe1xuICAgICAgICAgICAgbGV0IGlkeCA9IEdlbk5ld0NhbmRpZGF0ZUlkeCgpO1xuICAgICAgICAgICAgaWYoIXJlcGxhY2FibGUgJiYgdGFrZW5JZHhzW2lkeF09PT1udWxsKXtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNhbXBsZXMgPSBbLi4uc2FtcGxlcywgY2FuZGlkYXRlc1tpZHhdXTtcbiAgICAgICAgICAgIGlmKCFyZXBsYWNhYmxlKXtcbiAgICAgICAgICAgICAgICB0YWtlbklkeHNbaWR4XT1udWxsOy8vbm9uIHJlcGxhY2VhYmxlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gICAgXG4gICAgICAgIHJldHVybiBzYW1wbGVzO1xuICAgIH1cbn07XG5leHBvcnQgZGVmYXVsdCBTdWJTYW1wbGluZ01peGluczsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9jb3JlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfdXRpbHNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcmFuZG9tX187Il0sInNvdXJjZVJvb3QiOiIifQ==

/***/ }),

/***/ "./src/Metrics/causalNetMetrics.js":
/*!*****************************************!*\
  !*** ./src/Metrics/causalNetMetrics.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var causal_net_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! causal-net.core */ "causal-net.core");
/* harmony import */ var causal_net_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(causal_net_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! causal-net.utils */ "causal-net.utils");
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(causal_net_utils__WEBPACK_IMPORTED_MODULE_1__);


/**
 * This class provides evaluation metrics methods which can be accessed via **causalNetMetrics** instance.
 *
 * @class CausalNetMetrics
 * @extends {Tensor}
 * @example
 * [EXAMPLE ../examples/causalNetMetrics.babel.js]
 */

class CausalNetMetrics extends causal_net_utils__WEBPACK_IMPORTED_MODULE_1__["platform"].mixWith(causal_net_core__WEBPACK_IMPORTED_MODULE_0__["Tensor"], []) {
  constructor() {
    super();
  }

  accuracy(oneHotPredicts, oneHotLabels, maskingLabels = null) {
    let labelScores = this.T.equal(oneHotPredicts.argMax(-1), oneHotLabels.argMax(-1));

    if (maskingLabels) {
      labelScores = labelScores.mul(maskingLabels);
    }

    return labelScores.mean();
  }

  mse(predicts, labels, maskingLables = null) {
    let labelScores = predicts.sub(labels).pow(2);

    if (maskingLables) {
      labelScores = labelScores.mul(maskingLabels);
      return labelScores.div(maskingLables.cumsum());
    }

    return labelScores.mean();
  }

  mae(predicts, labels, maskingLables = null) {
    let labelScores = predicts.sub(labels).abs();

    if (maskingLables) {
      labelScores = labelScores.mul(maskingLabels);
      return labelScores.div(maskingLables.cumsum());
    }

    return labelScores.mean();
  }

  KLpq(p, q, maskingLabels = null) {
    const esp = this.T.scalar(1e-6);
    return p.mul(this.T.log(p.div(q))).sum();
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new CausalNetMetrics());

/***/ }),

/***/ "./src/Metrics/index.js":
/*!******************************!*\
  !*** ./src/Metrics/index.js ***!
  \******************************/
/*! exports provided: causalNetMetrics */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _causalNetMetrics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./causalNetMetrics */ "./src/Metrics/causalNetMetrics.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "causalNetMetrics", function() { return _causalNetMetrics__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/autoEncoder.js":
/*!****************************!*\
  !*** ./src/autoEncoder.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseModel */ "./src/baseModel.js");
/* harmony import */ var _Metrics_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Metrics/index */ "./src/Metrics/index.js");



class AutoEncoder extends _baseModel__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor({
    metrics = 'mse'
  } = {}) {
    super();
    this.MeasureError = _Metrics_index__WEBPACK_IMPORTED_MODULE_1__["causalNetMetrics"][metrics];
  }

  set LayerRunner(layerRunner) {
    let {
      LayerEncode,
      LayerDecode
    } = layerRunner;
    this.runner = {
      LayerEncode,
      LayerDecode
    };
  }

  get LayerRunner() {
    if (!this.runner) {
      throw Error('runner is not set');
    }

    return this.runner;
  }

  get Fit() {
    const {
      LayerEncode,
      LayerDecode
    } = this.LayerRunner;
    return (inputTensor, contexts) => {
      let encodeTensor = LayerEncode(inputTensor, contexts);
      let decodeTensor = LayerDecode(encodeTensor, contexts);
      return decodeTensor;
    };
  }

  get Encode() {
    const {
      LayerEncode
    } = this.LayerRunner;
    return (inputTensor, contexts) => {
      let encodeTensor = LayerEncode(inputTensor, contexts);
      return encodeTensor;
    };
  }

  get Reconstruct() {
    const {
      LayerEncode,
      LayerDecode
    } = this.LayerRunner;
    return (inputTensor, contexts) => {
      let encodeTensor = LayerEncode(inputTensor, contexts);
      let decodeTensor = LayerDecode(encodeTensor, contexts);
      return decodeTensor;
    };
  }

  get Loss() {
    const Fit = this.Fit;
    return (inputTensor, labelTensor, contexts) => {
      let decodeTensor = Fit(inputTensor, contexts);
      let loss = this.MeasureError(decodeTensor, inputTensor);
      return loss;
    };
  }

}

/* harmony default export */ __webpack_exports__["default"] = (AutoEncoder);

/***/ }),

/***/ "./src/baseModel.js":
/*!**************************!*\
  !*** ./src/baseModel.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var causal_net_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! causal-net.core */ "causal-net.core");
/* harmony import */ var causal_net_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(causal_net_core__WEBPACK_IMPORTED_MODULE_0__);


class BaseModel extends causal_net_core__WEBPACK_IMPORTED_MODULE_0__["Tensor"] {
  constructor() {
    super();
    this.modelName = '';
  }

  set LayerRunner(runner) {
    throw Error('implement required');
  }

  get LayerRunner() {
    throw Error('implement required');
  }

  fit() {
    throw Error('implement required');
  }

  loss() {
    throw Error('implement required');
  }

  get Predict() {
    throw Error('model not support');
  }

  get OneHotPredict() {
    throw Error('model not support');
  }

  get Encode() {
    throw Error('model not support');
  }

  get Reconstruct() {
    throw Error('model not support');
  }

}

/* harmony default export */ __webpack_exports__["default"] = (BaseModel);

/***/ }),

/***/ "./src/causalNetModels.js":
/*!********************************!*\
  !*** ./src/causalNetModels.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! causal-net.utils */ "causal-net.utils");
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(causal_net_utils__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var causal_net_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! causal-net.core */ "causal-net.core");
/* harmony import */ var causal_net_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(causal_net_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _singleLableClassification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./singleLableClassification */ "./src/singleLableClassification.js");
/* harmony import */ var _autoEncoder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./autoEncoder */ "./src/autoEncoder.js");
/* harmony import */ var _restrictedBoztmanMachine__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./restrictedBoztmanMachine */ "./src/restrictedBoztmanMachine.js");





/**
 * This class provide common used models which can be accessed via **causalNetModels** instance.
 * @class CausalNetModels
 * @extends BaseTensor
 * @example
 * [EXAMPLE ../examples/singleLabelClassification.babel.js]
 */

class CausalNetModels extends causal_net_utils__WEBPACK_IMPORTED_MODULE_0__["platform"].mixWith(causal_net_core__WEBPACK_IMPORTED_MODULE_1__["Tensor"], []) {
  constructor() {
    super();
  }

  classification(numClass) {
    this.model = new _singleLableClassification__WEBPACK_IMPORTED_MODULE_2__["default"](numClass);
    return this.model;
  }

  autoEncoder() {
    this.model = new _autoEncoder__WEBPACK_IMPORTED_MODULE_3__["default"]();
    return this.model;
  }

  RBM() {
    console.log({
      RBM: _restrictedBoztmanMachine__WEBPACK_IMPORTED_MODULE_4__["default"]
    });
    this.model = new _restrictedBoztmanMachine__WEBPACK_IMPORTED_MODULE_4__["default"]();
    return this.model;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new CausalNetModels());

/***/ }),

/***/ "./src/evaluator.mixins.js":
/*!*********************************!*\
  !*** ./src/evaluator.mixins.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * This mixin class provides methods: **test** and 
 * handle **TestDataGenerator** setting of pipelineConfig.Dataset.
 *
 * @class EvaluatorMixins
 * @extends {BasePipelineClass}
 * @example
 * [EXAMPLE ../examples/trainer.mixins.babel.js]
 */
const EvaluatorMixins = BasePipelineClass => class extends BasePipelineClass {
  get TestDataGenerator() {
    if (!this.testDataGenerator) {
      throw Error('testDataGenerator is not set');
    }

    return this.testDataGenerator;
  }

  set TestDataGenerator(testDataGenerator) {
    this.testDataGenerator = testDataGenerator;
  }

  async test({
    metrics = ['accuracy']
  } = {}) {
    console.log({
      metrics
    });
    const T = this.T,
          R = this.F.CoreFunctor;
    const TestDataGenerator = this.TestDataGenerator,
          OneHotPredictModel = this.OneHotPredictModel;
    return new Promise(async (resolve, reject) => {
      const testData = TestDataGenerator(); //take all    

      for await (let _ref of testData) {
        let {
          samples,
          labels
        } = _ref;
        let sampleTensor = T.tensor(samples).asType('float32');
        let labelTensor = T.tensor(labels).asType('float32');
        let predictTensor = OneHotPredictModel(sampleTensor);
      }

      let accuracy = R.mean(pass);
      resolve({
        accuracy,
        pass
      });
    });
  }

  setByConfig(pipelineConfig) {
    if (super.setByConfig) {
      super.setByConfig(pipelineConfig);
    }

    this.Logger.groupBegin('set Evaluator by config');
    this.TestDataGenerator = pipelineConfig.Dataset.TestDataGenerator;
    this.Logger.groupEnd();
  }

};

/* harmony default export */ __webpack_exports__["default"] = (EvaluatorMixins);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: causalNetModels, ModelMixins, BaseModel, SingleLabelClassification, AutoEncoder, RBM, EvaluatorMixins, causalNetMetrics */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _causalNetModels__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./causalNetModels */ "./src/causalNetModels.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "causalNetModels", function() { return _causalNetModels__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _model_mixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model.mixins */ "./src/model.mixins.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModelMixins", function() { return _model_mixins__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _baseModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./baseModel */ "./src/baseModel.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseModel", function() { return _baseModel__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _singleLableClassification__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./singleLableClassification */ "./src/singleLableClassification.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SingleLabelClassification", function() { return _singleLableClassification__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _autoEncoder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./autoEncoder */ "./src/autoEncoder.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AutoEncoder", function() { return _autoEncoder__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _restrictedBoztmanMachine__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./restrictedBoztmanMachine */ "./src/restrictedBoztmanMachine.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RBM", function() { return _restrictedBoztmanMachine__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _evaluator_mixins__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./evaluator.mixins */ "./src/evaluator.mixins.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EvaluatorMixins", function() { return _evaluator_mixins__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _Metrics_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Metrics/index */ "./src/Metrics/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "causalNetMetrics", function() { return _Metrics_index__WEBPACK_IMPORTED_MODULE_7__["causalNetMetrics"]; });










/***/ }),

/***/ "./src/model.mixins.js":
/*!*****************************!*\
  !*** ./src/model.mixins.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const ModelMixins = BasePipelineClass => class extends BasePipelineClass {
  get LossModel() {
    if (!this.netModel) {
      throw Error('netModel is not set');
    }

    return this.netModel.Loss;
  }

  get FitModel() {
    if (!this.netModel) {
      throw Error('netModel is not set');
    }

    return this.netModel.Fit;
  }

  get OneHotPredictModel() {
    if (!this.netModel) {
      throw Error('netModel is not set');
    }

    return this.netModel.OneHotPredict;
  }

  get PredictModel() {
    if (!this.netModel) {
      throw Error('netModel is not set');
    }

    return this.netModel.Predict;
  }

  get Model() {
    if (!this.netModel) {
      throw Error('netModel is not set');
    }

    return this.netModel;
  }

  set Model(model) {
    this.netModel = model;
  }

  setByConfig(pipelineConfig) {
    if (super.setByConfig) {
      super.setByConfig(pipelineConfig);
    }

    this.Logger.groupBegin('set Model by config');
    const {
      Model
    } = pipelineConfig.Net;

    if (!Model) {
      throw Error(`Model is not set in ${JSON.stringlify(pipelineConfig)}`);
    }

    Model.LayerRunner = this.LayerRunner;
    this.Model = Model;
    this.Logger.groupEnd();
  }

};

/* harmony default export */ __webpack_exports__["default"] = (ModelMixins);

/***/ }),

/***/ "./src/restrictedBoztmanMachine.js":
/*!*****************************************!*\
  !*** ./src/restrictedBoztmanMachine.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseModel */ "./src/baseModel.js");
/* harmony import */ var _Metrics_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Metrics/index */ "./src/Metrics/index.js");
/* harmony import */ var causal_net_sampling__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! causal-net.sampling */ "../causality-sampling/dist/@causalNet/sampling.web.js");
/* harmony import */ var causal_net_sampling__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(causal_net_sampling__WEBPACK_IMPORTED_MODULE_2__);




class RBM extends _baseModel__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor({
    metrics = 'mse'
  } = {}) {
    super();
    this.MeasureError = _Metrics_index__WEBPACK_IMPORTED_MODULE_1__["causalNetMetrics"][metrics];
  }

  set LayerRunner(layerRunner) {
    let {
      LayerEncode,
      LayerDecode
    } = layerRunner;
    this.runner = {
      LayerEncode,
      LayerDecode
    };
  }

  get LayerRunner() {
    if (!this.runner) {
      throw Error('runner is not set');
    }

    return this.runner;
  }

  get Fit() {
    return this.Reconstruct;
  }

  get Encode() {
    const {
      LayerEncode
    } = this.LayerRunner;
    return (inputTensor, contexts) => {
      let encodeTensor = LayerEncode(inputTensor, contexts);
      return encodeTensor;
    };
  }

  get Reconstruct() {
    const {
      LayerEncode,
      LayerDecode
    } = this.LayerRunner;
    const T = this.T;
    return (inputTensor, contexts) => {
      let encodeTensor = LayerEncode(inputTensor, contexts);
      let hidSel = T.tensor(causal_net_sampling__WEBPACK_IMPORTED_MODULE_2__["causalNetSampling"].random(encodeTensor.shape), encodeTensor.shape);
      hidSel = T.tensor(encodeTensor.greater(hidSel).dataSync(), encodeTensor.shape);
      let hidden = encodeTensor.mul(hidSel);
      let decodeTensor = LayerDecode(hidden, contexts);
      let visSel = T.tensor(causal_net_sampling__WEBPACK_IMPORTED_MODULE_2__["causalNetSampling"].random(decodeTensor.shape), decodeTensor.shape);
      visSel = T.tensor(decodeTensor.greater(visSel).dataSync(), decodeTensor.shape);
      let visibleTensor = decodeTensor.mul(visSel);
      return visibleTensor;
    };
  }

  get Loss() {
    const Fit = this.Fit;
    return (inputTensor, labelTensor, contexts) => {
      let decodeTensor = Fit(inputTensor, contexts);
      let loss = this.MeasureError(decodeTensor, inputTensor);
      return loss;
    };
  }

}

/* harmony default export */ __webpack_exports__["default"] = (RBM);

/***/ }),

/***/ "./src/singleLableClassification.js":
/*!******************************************!*\
  !*** ./src/singleLableClassification.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseModel */ "./src/baseModel.js");


class SingleLabelClassification extends _baseModel__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(numClass) {
    super();

    if (numClass > 0) {
      this.numClass = numClass;
    } else {
      throw Error(`expect numclass, get ${numClass}`);
    }
  }

  set LayerRunner(layerRunner) {
    let {
      LayerPredict
    } = layerRunner;
    this.runner = {
      LayerPredict
    };
  }

  get LayerRunner() {
    if (!this.runner) {
      throw Error('runner is not set');
    }

    return this.runner;
  }

  get Fit() {
    const {
      LayerPredict
    } = this.LayerRunner;
    return (inputTensor, contexts) => {
      let outPutTensor = LayerPredict(inputTensor, contexts);
      let logProb = outPutTensor.sub(outPutTensor.logSumExp(1, true));
      return logProb;
    };
  }

  get Predict() {
    const Fit = this.Fit;
    return (inputTensor, contexts) => {
      let logProb = Fit(inputTensor, contexts);
      let predictedClass = logProb.argMax(1);
      return predictedClass;
    };
  }

  get OneHotPredict() {
    const Predict = this.Predict;
    return (inputTensor, contexts) => {
      let predictedClass = Predict(inputTensor, contexts);
      let oneHotPredict = this.T.oneHot(predictedClass, this.numClass);
      return oneHotPredict;
    };
  }

  get Loss() {
    const Fit = this.Fit;
    return (inputTensor, labelTensor, contexts) => {
      let logProb = Fit(inputTensor, contexts);
      let likelihood = logProb.neg().mul(labelTensor);
      let loss = likelihood.sum(1).mean();
      return loss;
    };
  }

}

/* harmony default export */ __webpack_exports__["default"] = (SingleLabelClassification);

/***/ }),

/***/ 0:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L21vZGVscy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9tb2RlbHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9tb2RlbHMvL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvb3ctbGl0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L21vZGVscy8vaG9tZS9odXluaG5ndXllbi9naXRodWIvY2F1c2FsaXR5L25vZGVfbW9kdWxlcy9vdy1saXRlL2xpYi9udW1iZXIuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9tb2RlbHMvL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvb3ctbGl0ZS9saWIvb2JqZWN0LmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbW9kZWxzLy9ob21lL2h1eW5obmd1eWVuL2dpdGh1Yi9jYXVzYWxpdHkvbm9kZV9tb2R1bGVzL293LWxpdGUvbGliL3N0cmluZy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L21vZGVscy8vaG9tZS9odXluaG5ndXllbi9naXRodWIvY2F1c2FsaXR5L25vZGVfbW9kdWxlcy9vdy1saXRlL2xpYi9zeW1ib2xzLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbW9kZWxzLy9ob21lL2h1eW5obmd1eWVuL2dpdGh1Yi9jYXVzYWxpdHkvbm9kZV9tb2R1bGVzL3JhbmRvbS9kaXN0L2Rpc3RyaWJ1dGlvbnMvYmF0ZXMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9tb2RlbHMvL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvcmFuZG9tL2Rpc3QvZGlzdHJpYnV0aW9ucy9iZXJub3VsbGkuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9tb2RlbHMvL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvcmFuZG9tL2Rpc3QvZGlzdHJpYnV0aW9ucy9iaW5vbWlhbC5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L21vZGVscy8vaG9tZS9odXluaG5ndXllbi9naXRodWIvY2F1c2FsaXR5L25vZGVfbW9kdWxlcy9yYW5kb20vZGlzdC9kaXN0cmlidXRpb25zL2V4cG9uZW50aWFsLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbW9kZWxzLy9ob21lL2h1eW5obmd1eWVuL2dpdGh1Yi9jYXVzYWxpdHkvbm9kZV9tb2R1bGVzL3JhbmRvbS9kaXN0L2Rpc3RyaWJ1dGlvbnMvZ2VvbWV0cmljLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbW9kZWxzLy9ob21lL2h1eW5obmd1eWVuL2dpdGh1Yi9jYXVzYWxpdHkvbm9kZV9tb2R1bGVzL3JhbmRvbS9kaXN0L2Rpc3RyaWJ1dGlvbnMvaXJ3aW4taGFsbC5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L21vZGVscy8vaG9tZS9odXluaG5ndXllbi9naXRodWIvY2F1c2FsaXR5L25vZGVfbW9kdWxlcy9yYW5kb20vZGlzdC9kaXN0cmlidXRpb25zL2xvZy1ub3JtYWwuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9tb2RlbHMvL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvcmFuZG9tL2Rpc3QvZGlzdHJpYnV0aW9ucy9ub3JtYWwuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9tb2RlbHMvL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvcmFuZG9tL2Rpc3QvZGlzdHJpYnV0aW9ucy9wYXJldG8uanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9tb2RlbHMvL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvcmFuZG9tL2Rpc3QvZGlzdHJpYnV0aW9ucy9wb2lzc29uLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbW9kZWxzLy9ob21lL2h1eW5obmd1eWVuL2dpdGh1Yi9jYXVzYWxpdHkvbm9kZV9tb2R1bGVzL3JhbmRvbS9kaXN0L2Rpc3RyaWJ1dGlvbnMvdW5pZm9ybS1ib29sZWFuLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbW9kZWxzLy9ob21lL2h1eW5obmd1eWVuL2dpdGh1Yi9jYXVzYWxpdHkvbm9kZV9tb2R1bGVzL3JhbmRvbS9kaXN0L2Rpc3RyaWJ1dGlvbnMvdW5pZm9ybS1pbnQuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9tb2RlbHMvL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvcmFuZG9tL2Rpc3QvZGlzdHJpYnV0aW9ucy91bmlmb3JtLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbW9kZWxzLy9ob21lL2h1eW5obmd1eWVuL2dpdGh1Yi9jYXVzYWxpdHkvbm9kZV9tb2R1bGVzL3JhbmRvbS9kaXN0L2dlbmVyYXRvcnMvZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9tb2RlbHMvL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvcmFuZG9tL2Rpc3QvcmFuZG9tLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbW9kZWxzLy9ob21lL2h1eW5obmd1eWVuL2dpdGh1Yi9jYXVzYWxpdHkvbm9kZV9tb2R1bGVzL3JhbmRvbS9kaXN0L3JuZy1mYWN0b3J5LmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbW9kZWxzLy9ob21lL2h1eW5obmd1eWVuL2dpdGh1Yi9jYXVzYWxpdHkvbm9kZV9tb2R1bGVzL3JhbmRvbS9kaXN0L3JuZy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L21vZGVscy8vaG9tZS9odXluaG5ndXllbi9naXRodWIvY2F1c2FsaXR5L25vZGVfbW9kdWxlcy9yYW5kb20vaW5kZXguanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9tb2RlbHMvL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvc2VlZHJhbmRvbS9pbmRleC5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L21vZGVscy8vaG9tZS9odXluaG5ndXllbi9naXRodWIvY2F1c2FsaXR5L25vZGVfbW9kdWxlcy9zZWVkcmFuZG9tL2xpYi9hbGVhLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbW9kZWxzLy9ob21lL2h1eW5obmd1eWVuL2dpdGh1Yi9jYXVzYWxpdHkvbm9kZV9tb2R1bGVzL3NlZWRyYW5kb20vbGliL3R5Y2hlaS5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L21vZGVscy8vaG9tZS9odXluaG5ndXllbi9naXRodWIvY2F1c2FsaXR5L25vZGVfbW9kdWxlcy9zZWVkcmFuZG9tL2xpYi94b3IxMjguanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9tb2RlbHMvL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvc2VlZHJhbmRvbS9saWIveG9yNDA5Ni5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L21vZGVscy8vaG9tZS9odXluaG5ndXllbi9naXRodWIvY2F1c2FsaXR5L25vZGVfbW9kdWxlcy9zZWVkcmFuZG9tL2xpYi94b3JzaGlmdDcuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9tb2RlbHMvL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvc2VlZHJhbmRvbS9saWIveG9yd293LmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbW9kZWxzLy9ob21lL2h1eW5obmd1eWVuL2dpdGh1Yi9jYXVzYWxpdHkvbm9kZV9tb2R1bGVzL3NlZWRyYW5kb20vc2VlZHJhbmRvbS5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L21vZGVscy8od2VicGFjaykvYnVpbGRpbi9hbWQtZGVmaW5lLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbW9kZWxzLyh3ZWJwYWNrKS9idWlsZGluL2FtZC1vcHRpb25zLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbW9kZWxzLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L21vZGVscy8uLi9jYXVzYWxpdHktc2FtcGxpbmcvZGlzdC9AY2F1c2FsTmV0L3NhbXBsaW5nLndlYi5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L21vZGVscy8uL3NyYy9NZXRyaWNzL2NhdXNhbE5ldE1ldHJpY3MuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9tb2RlbHMvLi9zcmMvTWV0cmljcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L21vZGVscy8uL3NyYy9hdXRvRW5jb2Rlci5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L21vZGVscy8uL3NyYy9iYXNlTW9kZWwuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9tb2RlbHMvLi9zcmMvY2F1c2FsTmV0TW9kZWxzLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbW9kZWxzLy4vc3JjL2V2YWx1YXRvci5taXhpbnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9tb2RlbHMvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9tb2RlbHMvLi9zcmMvbW9kZWwubWl4aW5zLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbW9kZWxzLy4vc3JjL3Jlc3RyaWN0ZWRCb3p0bWFuTWFjaGluZS5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L21vZGVscy8uL3NyYy9zaW5nbGVMYWJsZUNsYXNzaWZpY2F0aW9uLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbW9kZWxzL2NyeXB0byAoaWdub3JlZCkiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9tb2RlbHMvZXh0ZXJuYWwgXCJjYXVzYWwtbmV0LmNvcmVcIiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L21vZGVscy9leHRlcm5hbCBcImNhdXNhbC1uZXQudXRpbHNcIiJdLCJuYW1lcyI6WyJDYXVzYWxOZXRNZXRyaWNzIiwicGxhdGZvcm0iLCJtaXhXaXRoIiwiQmFzZVRlbnNvciIsImNvbnN0cnVjdG9yIiwiYWNjdXJhY3kiLCJvbmVIb3RQcmVkaWN0cyIsIm9uZUhvdExhYmVscyIsIm1hc2tpbmdMYWJlbHMiLCJsYWJlbFNjb3JlcyIsIlQiLCJlcXVhbCIsImFyZ01heCIsIm11bCIsIm1lYW4iLCJtc2UiLCJwcmVkaWN0cyIsImxhYmVscyIsIm1hc2tpbmdMYWJsZXMiLCJzdWIiLCJwb3ciLCJkaXYiLCJjdW1zdW0iLCJtYWUiLCJhYnMiLCJLTHBxIiwicCIsInEiLCJlc3AiLCJzY2FsYXIiLCJsb2ciLCJzdW0iLCJBdXRvRW5jb2RlciIsIkJhc2VNb2RlbCIsIm1ldHJpY3MiLCJNZWFzdXJlRXJyb3IiLCJjYXVzYWxOZXRNZXRyaWNzIiwiTGF5ZXJSdW5uZXIiLCJsYXllclJ1bm5lciIsIkxheWVyRW5jb2RlIiwiTGF5ZXJEZWNvZGUiLCJydW5uZXIiLCJFcnJvciIsIkZpdCIsImlucHV0VGVuc29yIiwiY29udGV4dHMiLCJlbmNvZGVUZW5zb3IiLCJkZWNvZGVUZW5zb3IiLCJFbmNvZGUiLCJSZWNvbnN0cnVjdCIsIkxvc3MiLCJsYWJlbFRlbnNvciIsImxvc3MiLCJUZW5zb3IiLCJtb2RlbE5hbWUiLCJmaXQiLCJQcmVkaWN0IiwiT25lSG90UHJlZGljdCIsIkNhdXNhbE5ldE1vZGVscyIsImNsYXNzaWZpY2F0aW9uIiwibnVtQ2xhc3MiLCJtb2RlbCIsIlNpbmdsZUxhYmVsQ2xhc3NpZmljYXRpb24iLCJhdXRvRW5jb2RlciIsIlJCTSIsImNvbnNvbGUiLCJFdmFsdWF0b3JNaXhpbnMiLCJCYXNlUGlwZWxpbmVDbGFzcyIsIlRlc3REYXRhR2VuZXJhdG9yIiwidGVzdERhdGFHZW5lcmF0b3IiLCJ0ZXN0IiwiUiIsIkYiLCJDb3JlRnVuY3RvciIsIk9uZUhvdFByZWRpY3RNb2RlbCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwidGVzdERhdGEiLCJzYW1wbGVzIiwic2FtcGxlVGVuc29yIiwidGVuc29yIiwiYXNUeXBlIiwicHJlZGljdFRlbnNvciIsInBhc3MiLCJzZXRCeUNvbmZpZyIsInBpcGVsaW5lQ29uZmlnIiwiTG9nZ2VyIiwiZ3JvdXBCZWdpbiIsIkRhdGFzZXQiLCJncm91cEVuZCIsIk1vZGVsTWl4aW5zIiwiTG9zc01vZGVsIiwibmV0TW9kZWwiLCJGaXRNb2RlbCIsIlByZWRpY3RNb2RlbCIsIk1vZGVsIiwiTmV0IiwiSlNPTiIsInN0cmluZ2xpZnkiLCJoaWRTZWwiLCJjYXVzYWxOZXRTYW1wbGluZyIsInJhbmRvbSIsInNoYXBlIiwiZ3JlYXRlciIsImRhdGFTeW5jIiwiaGlkZGVuIiwidmlzU2VsIiwidmlzaWJsZVRlbnNvciIsIkxheWVyUHJlZGljdCIsIm91dFB1dFRlbnNvciIsImxvZ1Byb2IiLCJsb2dTdW1FeHAiLCJwcmVkaWN0ZWRDbGFzcyIsIm9uZUhvdFByZWRpY3QiLCJvbmVIb3QiLCJsaWtlbGlob29kIiwibmVnIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7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LGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEIsZ0JBQWdCO0FBQ2hCOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCLGdCQUFnQjtBQUNoQjs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QixnQkFBZ0I7QUFDaEI7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEIsZ0JBQWdCO0FBQ2hCOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGdCQUFnQjtBQUNoQjs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QixnQkFBZ0I7QUFDaEI7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixnQkFBZ0I7QUFDaEI7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZ0JBQWdCO0FBQ2hCOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZ0JBQWdCO0FBQ2hCOztBQUVBLEdBQUc7QUFD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QUtIOztBQUVELE1BQUl4RCxhQUFKLEdBQW1CO0FBQ2YsVUFBTUQsT0FBTyxHQUFHLEtBQUtBLE9BQXJCO0FBQ0EsV0FBTyxDQUFDWixXQUFELEVBQWNDLFFBQWQsS0FBeUI7QUFDNUIsVUFBSW9FLGNBQWMsR0FBR3pELE9BQU8sQ0FBQ1osV0FBRCxFQUFjQyxRQUFkLENBQTVCO0FBQ0EsVUFBSXFFLGFBQWEsR0FBRyxLQUFLeEcsQ0FBTCxDQUFPeUcsTUFBUCxDQUFjRixjQUFkLEVBQThCLEtBQUtyRCxRQUFuQyxDQUFwQjtBQUNBLGFBQU9zRCxhQUFQO0FBQ0gsS0FKRDtBQUtIOztBQUNELE1BQUloRSxJQUFKLEdBQVU7QUFDTixVQUFNUCxHQUFHLEdBQUcsS0FBS0EsR0FBakI7QUFDQSxXQUFPLENBQUNDLFdBQUQsRUFBY08sV0FBZCxFQUEyQk4sUUFBM0IsS0FBc0M7QUFDekMsVUFBSWtFLE9BQU8sR0FBR3BFLEdBQUcsQ0FBQ0MsV0FBRCxFQUFjQyxRQUFkLENBQWpCO0FBQ0EsVUFBSXVFLFVBQVUsR0FBR0wsT0FBTyxDQUFDTSxHQUFSLEdBQWN4RyxHQUFkLENBQWtCc0MsV0FBbEIsQ0FBakI7QUFDQSxVQUFJQyxJQUFJLEdBQUdnRSxVQUFVLENBQUNyRixHQUFYLENBQWUsQ0FBZixFQUFrQmpCLElBQWxCLEVBQVg7QUFDQSxhQUFPc0MsSUFBUDtBQUNILEtBTEQ7QUFNSDs7QUF6RDRDOztBQTJEbENVLHdGQUFmLEU7Ozs7Ozs7Ozs7O0FDN0RBLGU7Ozs7Ozs7Ozs7O0FDQUEsNkQ7Ozs7Ozs7Ozs7O0FDQUEsOEQiLCJmaWxlIjoiQGNhdXNhbE5ldC9tb2RlbHMubm9kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImNhdXNhbC1uZXQuY29yZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQudXRpbHNcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiY2F1c2FsLW5ldC5jb3JlXCIsIFwiY2F1c2FsLW5ldC51dGlsc1wiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJAY2F1c2FsTmV0L21vZGVsc1wiXSA9IGZhY3RvcnkocmVxdWlyZShcImNhdXNhbC1uZXQuY29yZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQudXRpbHNcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkBjYXVzYWxOZXQvbW9kZWxzXCJdID0gZmFjdG9yeShyb290W1wiY2F1c2FsLW5ldC5jb3JlXCJdLCByb290W1wiY2F1c2FsLW5ldC51dGlsc1wiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfY29yZV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfdXRpbHNfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IHN5bWJvbHMgPSByZXF1aXJlKCcuL2xpYi9zeW1ib2xzJylcbmNvbnN0IG51bWJlciA9IHJlcXVpcmUoJy4vbGliL251bWJlcicpXG5jb25zdCBzdHJpbmcgPSByZXF1aXJlKCcuL2xpYi9zdHJpbmcnKVxuY29uc3Qgb2JqZWN0ID0gcmVxdWlyZSgnLi9saWIvb2JqZWN0JylcblxuY29uc3QgdHlwZVByZWRpY2F0ZXMgPSB7XG4gIG51bWJlcixcbiAgc3RyaW5nLFxuICBvYmplY3Rcbn1cblxuY29uc3QgY3JlYXRlT3cgPSAoe1xuICB2YWxpZGF0b3JzID0gW10sXG4gIHByZWRpY2F0ZXMgPSB0eXBlUHJlZGljYXRlcyxcbiAgdHlwZSA9IG51bGxcbn0gPSB7IH0pID0+IHtcbiAgY29uc3Qgb3cgPSBuZXcgUHJveHkoZnVuY3Rpb24gKCkgeyB9LCB7XG4gICAgZ2V0OiAob2JqLCBrZXkpID0+IHtcbiAgICAgIGlmIChrZXkgPT09IHN5bWJvbHMudmFsaWRhdGUpIHtcbiAgICAgICAgcmV0dXJuICh2YWx1ZSwgbGFiZWwgPSAnYXJndW1lbnQnKSA9PiB7XG4gICAgICAgICAgaWYgKCF0eXBlKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKCdtaXNzaW5nIHJlcXVpcmVkIHR5cGUgc3BlY2lmaWVyJylcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbGlkYXRvcnMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbGlkYXRvciA9IHZhbGlkYXRvcnNbaV1cbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHZhbGlkYXRvci5mbih2YWx1ZSlcblxuICAgICAgICAgICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgICAgICAgICAgaWYgKGkgPT09IDApIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkICR7bGFiZWx9IFxcYCR7dmFsdWV9XFxgIHRvIGJlIG9mIHR5cGUgXFxgJHt0eXBlfVxcYCwgYnV0IHJlY2VpdmVkIHR5cGUgXFxgJHt0eXBlb2YgdmFsdWV9XFxgYClcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkICR7dHlwZX0gXFxgJHtsYWJlbH1cXGAgXFxgJHt2YWx1ZX1cXGAgZmFpbGVkIHByZWRpY2F0ZSBcXGAke3ZhbGlkYXRvci5rZXl9XFxgYClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwcmVkaWNhdGUgPSBwcmVkaWNhdGVzW2tleV1cblxuICAgICAgaWYgKHByZWRpY2F0ZSkge1xuICAgICAgICBpZiAodHlwZW9mIHByZWRpY2F0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHZhbGlkYXRvcnMucHVzaCh7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBmbjogcHJlZGljYXRlXG4gICAgICAgICAgfSlcblxuICAgICAgICAgIHJldHVybiBvd1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBjcmVhdGVPdyh7XG4gICAgICAgICAgICB0eXBlOiBrZXksXG4gICAgICAgICAgICB2YWxpZGF0b3JzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgZm46IHByZWRpY2F0ZS52YWxpZGF0b3JcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHByZWRpY2F0ZXM6IHByZWRpY2F0ZS5wcmVkaWNhdGVzXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgZm4gPSBwcmVkaWNhdGVzW3N5bWJvbHMuZnVuY10gJiYgcHJlZGljYXRlc1tzeW1ib2xzLmZ1bmNdW2tleV1cblxuICAgICAgICBpZiAoZm4pIHtcbiAgICAgICAgICByZXR1cm4gbmV3IFByb3h5KGZ1bmN0aW9uICgpIHsgfSwge1xuICAgICAgICAgICAgZ2V0OiAoKSA9PiB7XG4gICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgaW52YWxpZCB1c2Ugb2YgZnVuY3Rpb25hbCBwcmVkaWNhdGUgXCIke2tleX1cImApXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBhcHBseTogKG9iaiwgdGhpc0FyZywgYXJncykgPT4ge1xuICAgICAgICAgICAgICB2YWxpZGF0b3JzLnB1c2goe1xuICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICBmbjogZm4oLi4uYXJncylcbiAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICByZXR1cm4gb3dcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChrZXkgPT09ICdkZWZhdWx0JyB8fCBrZXkgPT09ICdfX2VzTW9kdWxlJykge1xuICAgICAgICAgICAgcmV0dXJuIG93XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIG93XG4gICAgICAgICAgLy8gdGhyb3cgbmV3IEVycm9yKGB1bnJlY29nbml6ZWQgcHJlZGljYXRlIFwiJHtrZXl9XCJgKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFwcGx5OiAob2JqLCB0aGlzQXJnLCBhcmdzKSA9PiB7XG4gICAgICBpZiAoYXJncy5sZW5ndGggIT09IDIgJiYgYXJncy5sZW5ndGggIT09IDMpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhbGlkIG51bWJlciBvZiBhcmd1bWVudHMgdG8gXCJvd1wiJylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFyZ3NbMV1bc3ltYm9scy52YWxpZGF0ZV0oYXJnc1swXSwgYXJnc1syXSlcbiAgICAgIH1cbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIG93XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlT3coKVxuIiwiJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IHsgZnVuYyB9ID0gcmVxdWlyZSgnLi9zeW1ib2xzJylcblxuY29uc3QgbnVtYmVyUHJlZGljYXRlcyA9IHtcbiAgcG9zaXRpdmU6ICh2YWx1ZSkgPT4gKHZhbHVlID4gMCksXG4gIG5lZ2F0aXZlOiAodmFsdWUpID0+ICh2YWx1ZSA8IDApLFxuICBub25OZWdhdGl2ZTogKHZhbHVlKSA9PiAodmFsdWUgPj0gMCksXG4gIGludGVnZXI6ICh2YWx1ZSkgPT4gKHZhbHVlID09PSAodmFsdWUgfCAwKSksXG5cbiAgW2Z1bmNdOiB7XG4gICAgaXM6IChmbikgPT4gZm4sXG4gICAgZXE6ICh2KSA9PiAodmFsdWUpID0+ICh2YWx1ZSA9PT0gdiksXG4gICAgZ3Q6ICh2KSA9PiAodmFsdWUpID0+ICh2YWx1ZSA+IHYpLFxuICAgIGd0ZTogKHYpID0+ICh2YWx1ZSkgPT4gKHZhbHVlID49IHYpLFxuICAgIGx0OiAodikgPT4gKHZhbHVlKSA9PiAodmFsdWUgPCB2KSxcbiAgICBsdGU6ICh2KSA9PiAodmFsdWUpID0+ICh2YWx1ZSA8PSB2KVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBwcmVkaWNhdGVzOiBudW1iZXJQcmVkaWNhdGVzLFxuICB2YWxpZGF0b3I6ICh2YWx1ZSkgPT4ge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInXG4gIH1cbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5jb25zdCB7IGZ1bmMgfSA9IHJlcXVpcmUoJy4vc3ltYm9scycpXG5cbmNvbnN0IG9iamVjdFByZWRpY2F0ZXMgPSB7XG4gIHBsYWluOiAodmFsdWUpID0+IHtcbiAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0JykgcmV0dXJuIGZhbHNlXG5cbiAgICBjb25zdCBwcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZih2YWx1ZSlcbiAgICByZXR1cm4gcHJvdG8gPT09IG51bGwgfHwgcHJvdG8gPT09IE9iamVjdC5nZXRQcm90b3R5cGVPZih7fSlcbiAgfSxcbiAgZW1wdHk6ICh2YWx1ZSkgPT4gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMCxcbiAgbm9uRW1wdHk6ICh2YWx1ZSkgPT4gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA+IDAsXG5cbiAgW2Z1bmNdOiB7XG4gICAgaXM6IChmbikgPT4gZm4sXG4gICAgaW5zdGFuY2VPZjogKHYpID0+ICh2YWx1ZSkgPT4gKHZhbHVlIGluc3RhbmNlb2YgdilcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgcHJlZGljYXRlczogb2JqZWN0UHJlZGljYXRlcyxcbiAgdmFsaWRhdG9yOiAodmFsdWUpID0+IHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0J1xuICB9XG59XG4iLCIndXNlIHN0cmljdCdcblxuY29uc3QgeyBmdW5jIH0gPSByZXF1aXJlKCcuL3N5bWJvbHMnKVxuXG5jb25zdCBzdHJpbmdQcmVkaWNhdGVzID0ge1xuICBlbXB0eTogKHZhbHVlKSA9PiAodmFsdWUgPT09ICcnKSxcbiAgbm9uRW1wdHk6ICh2YWx1ZSkgPT4gKHZhbHVlICE9PSAnJyksXG5cbiAgW2Z1bmNdOiB7XG4gICAgaXM6IChmbikgPT4gZm4sXG4gICAgZXE6ICh2KSA9PiAodmFsdWUpID0+ICh2YWx1ZSA9PT0gdiksXG4gICAgbGVuZ3RoOiAodikgPT4gKHZhbHVlKSA9PiAodmFsdWUubGVuZ3RoID09PSB2KSxcbiAgICBtaW5MZW5ndGg6ICh2KSA9PiAodmFsdWUpID0+ICh2YWx1ZS5sZW5ndGggPj0gdiksXG4gICAgbWF4TGVuZ3RoOiAodikgPT4gKHZhbHVlKSA9PiAodmFsdWUubGVuZ3RoIDw9IHYpLFxuICAgIG1hdGNoZXM6ICh2KSA9PiAodmFsdWUpID0+IHYudGVzdCh2YWx1ZSksXG4gICAgc3RhcnRzV2l0aDogKHYpID0+ICh2YWx1ZSkgPT4gdmFsdWUuc3RhcnRzV2l0aCh2KSxcbiAgICBlbmRzV2l0aDogKHYpID0+ICh2YWx1ZSkgPT4gdmFsdWUuZW5kc1dpdGgodilcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgcHJlZGljYXRlczogc3RyaW5nUHJlZGljYXRlcyxcbiAgdmFsaWRhdG9yOiAodmFsdWUpID0+IHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJ1xuICB9XG59XG4iLCIndXNlIHN0cmljdCdcblxuZXhwb3J0cy5mdW5jID0gU3ltYm9sKCdmdW5jJylcbmV4cG9ydHMudmFsaWRhdGUgPSBTeW1ib2woJ3ZhbGlkYXRlJylcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9vd0xpdGUgPSByZXF1aXJlKCdvdy1saXRlJyk7XG5cbnZhciBfb3dMaXRlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX293TGl0ZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChyYW5kb20pIHtcbiAgdmFyIG4gPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IDE7XG5cbiAgKDAsIF9vd0xpdGUyLmRlZmF1bHQpKG4sIF9vd0xpdGUyLmRlZmF1bHQubnVtYmVyLmludGVnZXIucG9zaXRpdmUpO1xuICB2YXIgaXJ3aW5IYWxsID0gcmFuZG9tLmlyd2luSGFsbChuKTtcblxuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBpcndpbkhhbGwoKSAvIG47XG4gIH07XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YmF0ZXMuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX293TGl0ZSA9IHJlcXVpcmUoJ293LWxpdGUnKTtcblxudmFyIF9vd0xpdGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfb3dMaXRlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHJhbmRvbSkge1xuICB2YXIgcCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogMC41O1xuXG4gICgwLCBfb3dMaXRlMi5kZWZhdWx0KShwLCBfb3dMaXRlMi5kZWZhdWx0Lm51bWJlci5ndGUoMCkubHQoMSkpO1xuXG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHJhbmRvbS5uZXh0KCkgKyBwIHwgMDtcbiAgfTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1iZXJub3VsbGkuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX293TGl0ZSA9IHJlcXVpcmUoJ293LWxpdGUnKTtcblxudmFyIF9vd0xpdGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfb3dMaXRlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHJhbmRvbSkge1xuICB2YXIgbiA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogMTtcbiAgdmFyIHAgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IDAuNTtcblxuICAoMCwgX293TGl0ZTIuZGVmYXVsdCkobiwgX293TGl0ZTIuZGVmYXVsdC5udW1iZXIucG9zaXRpdmUuaW50ZWdlcik7XG4gICgwLCBfb3dMaXRlMi5kZWZhdWx0KShwLCBfb3dMaXRlMi5kZWZhdWx0Lm51bWJlci5ndGUoMCkubHRlKDEpKTtcblxuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgeCA9IDA7XG5cbiAgICB3aGlsZSAoaSsrIDwgbikge1xuICAgICAgeCArPSByYW5kb20ubmV4dCgpIDwgcDtcbiAgICB9XG5cbiAgICByZXR1cm4geDtcbiAgfTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1iaW5vbWlhbC5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfb3dMaXRlID0gcmVxdWlyZSgnb3ctbGl0ZScpO1xuXG52YXIgX293TGl0ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9vd0xpdGUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAocmFuZG9tKSB7XG4gIHZhciBsYW1iZGEgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IDE7XG5cbiAgKDAsIF9vd0xpdGUyLmRlZmF1bHQpKGxhbWJkYSwgX293TGl0ZTIuZGVmYXVsdC5udW1iZXIucG9zaXRpdmUpO1xuXG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIC1NYXRoLmxvZygxIC0gcmFuZG9tLm5leHQoKSkgLyBsYW1iZGE7XG4gIH07XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZXhwb25lbnRpYWwuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX293TGl0ZSA9IHJlcXVpcmUoJ293LWxpdGUnKTtcblxudmFyIF9vd0xpdGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfb3dMaXRlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHJhbmRvbSkge1xuICB2YXIgcCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogMC41O1xuXG4gICgwLCBfb3dMaXRlMi5kZWZhdWx0KShwLCBfb3dMaXRlMi5kZWZhdWx0Lm51bWJlci5ndCgwKS5sdGUoMSkpO1xuICB2YXIgaW52TG9nUCA9IDEuMCAvIE1hdGgubG9nKDEuMCAtIHApO1xuXG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIDEgKyBNYXRoLmxvZyhyYW5kb20ubmV4dCgpKSAqIGludkxvZ1AgfCAwO1xuICB9O1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWdlb21ldHJpYy5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfb3dMaXRlID0gcmVxdWlyZSgnb3ctbGl0ZScpO1xuXG52YXIgX293TGl0ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9vd0xpdGUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAocmFuZG9tKSB7XG4gIHZhciBuID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAxO1xuXG4gICgwLCBfb3dMaXRlMi5kZWZhdWx0KShuLCBfb3dMaXRlMi5kZWZhdWx0Lm51bWJlci5pbnRlZ2VyLmd0ZSgwKSk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc3VtID0gMDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG47ICsraSkge1xuICAgICAgc3VtICs9IHJhbmRvbS5uZXh0KCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1bTtcbiAgfTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pcndpbi1oYWxsLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAocmFuZG9tKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgdmFyIG5vcm1hbCA9IHJhbmRvbS5ub3JtYWwuYXBwbHkocmFuZG9tLCBhcmdzKTtcblxuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBNYXRoLmV4cChub3JtYWwoKSk7XG4gIH07XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bG9nLW5vcm1hbC5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfb3dMaXRlID0gcmVxdWlyZSgnb3ctbGl0ZScpO1xuXG52YXIgX293TGl0ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9vd0xpdGUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAocmFuZG9tKSB7XG4gIHZhciBtdSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogMDtcbiAgdmFyIHNpZ21hID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiAxO1xuXG4gICgwLCBfb3dMaXRlMi5kZWZhdWx0KShtdSwgX293TGl0ZTIuZGVmYXVsdC5udW1iZXIpO1xuICAoMCwgX293TGl0ZTIuZGVmYXVsdCkoc2lnbWEsIF9vd0xpdGUyLmRlZmF1bHQubnVtYmVyKTtcblxuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciB4ID0gdm9pZCAwLFxuICAgICAgICB5ID0gdm9pZCAwLFxuICAgICAgICByID0gdm9pZCAwO1xuXG4gICAgZG8ge1xuICAgICAgeCA9IHJhbmRvbS5uZXh0KCkgKiAyIC0gMTtcbiAgICAgIHkgPSByYW5kb20ubmV4dCgpICogMiAtIDE7XG4gICAgICByID0geCAqIHggKyB5ICogeTtcbiAgICB9IHdoaWxlICghciB8fCByID4gMSk7XG5cbiAgICByZXR1cm4gbXUgKyBzaWdtYSAqIHkgKiBNYXRoLnNxcnQoLTIgKiBNYXRoLmxvZyhyKSAvIHIpO1xuICB9O1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW5vcm1hbC5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfb3dMaXRlID0gcmVxdWlyZSgnb3ctbGl0ZScpO1xuXG52YXIgX293TGl0ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9vd0xpdGUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAocmFuZG9tKSB7XG4gIHZhciBhbHBoYSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogMTtcblxuICAoMCwgX293TGl0ZTIuZGVmYXVsdCkoYWxwaGEsIF9vd0xpdGUyLmRlZmF1bHQubnVtYmVyLmd0ZSgwKSk7XG4gIHZhciBpbnZBbHBoYSA9IDEuMCAvIGFscGhhO1xuXG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIDEuMCAvIE1hdGgucG93KDEuMCAtIHJhbmRvbS5uZXh0KCksIGludkFscGhhKTtcbiAgfTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wYXJldG8uanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX293TGl0ZSA9IHJlcXVpcmUoJ293LWxpdGUnKTtcblxudmFyIF9vd0xpdGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfb3dMaXRlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIGxvZ0ZhY3RvcmlhbFRhYmxlID0gWzAuMCwgMC4wLCAwLjY5MzE0NzE4MDU1OTk0NTI5LCAxLjc5MTc1OTQ2OTIyODA1NTAsIDMuMTc4MDUzODMwMzQ3OTQ1OCwgNC43ODc0OTE3NDI3ODIwNDU4LCA2LjU3OTI1MTIxMjAxMDEwMTIsIDguNTI1MTYxMzYxMDY1NDE0NywgMTAuNjA0NjAyOTAyNzQ1MjUxLCAxMi44MDE4Mjc0ODAwODE0NjldO1xuXG52YXIgbG9nRmFjdG9yaWFsID0gZnVuY3Rpb24gbG9nRmFjdG9yaWFsKGspIHtcbiAgcmV0dXJuIGxvZ0ZhY3RvcmlhbFRhYmxlW2tdO1xufTtcblxudmFyIGxvZ1NxcnQyUEkgPSAwLjkxODkzODUzMzIwNDY3MjY3O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAocmFuZG9tKSB7XG4gIHZhciBsYW1iZGEgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IDE7XG5cbiAgKDAsIF9vd0xpdGUyLmRlZmF1bHQpKGxhbWJkYSwgX293TGl0ZTIuZGVmYXVsdC5udW1iZXIucG9zaXRpdmUpO1xuXG4gIGlmIChsYW1iZGEgPCAxMCkge1xuICAgIC8vIGludmVyc2lvbiBtZXRob2RcbiAgICB2YXIgZXhwTWVhbiA9IE1hdGguZXhwKC1sYW1iZGEpO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBwID0gZXhwTWVhbjtcbiAgICAgIHZhciB4ID0gMDtcbiAgICAgIHZhciB1ID0gcmFuZG9tLm5leHQoKTtcblxuICAgICAgd2hpbGUgKHUgPiBwKSB7XG4gICAgICAgIHUgPSB1IC0gcDtcbiAgICAgICAgcCA9IGxhbWJkYSAqIHAgLyArK3g7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB4O1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgLy8gZ2VuZXJhdGl2ZSBtZXRob2RcbiAgICB2YXIgc211ID0gTWF0aC5zcXJ0KGxhbWJkYSk7XG4gICAgdmFyIGIgPSAwLjkzMSArIDIuNTMgKiBzbXU7XG4gICAgdmFyIGEgPSAtMC4wNTkgKyAwLjAyNDgzICogYjtcbiAgICB2YXIgaW52QWxwaGEgPSAxLjEyMzkgKyAxLjEzMjggLyAoYiAtIDMuNCk7XG4gICAgdmFyIHZSID0gMC45Mjc3IC0gMy42MjI0IC8gKGIgLSAyKTtcblxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgdSA9IHZvaWQgMDtcbiAgICAgICAgdmFyIHYgPSByYW5kb20ubmV4dCgpO1xuXG4gICAgICAgIGlmICh2IDw9IDAuODYgKiB2Uikge1xuICAgICAgICAgIHUgPSB2IC8gdlIgLSAwLjQzO1xuICAgICAgICAgIHJldHVybiBNYXRoLmZsb29yKCgyICogYSAvICgwLjUgLSBNYXRoLmFicyh1KSkgKyBiKSAqIHUgKyBsYW1iZGEgKyAwLjQ0NSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodiA+PSB2Uikge1xuICAgICAgICAgIHUgPSByYW5kb20ubmV4dCgpIC0gMC41O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHUgPSB2IC8gdlIgLSAwLjkzO1xuICAgICAgICAgIHUgPSAodSA8IDAgPyAtMC41IDogMC41KSAtIHU7XG4gICAgICAgICAgdiA9IHJhbmRvbS5uZXh0KCkgKiB2UjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB1cyA9IDAuNSAtIE1hdGguYWJzKHUpO1xuICAgICAgICBpZiAodXMgPCAwLjAxMyAmJiB2ID4gdXMpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBrID0gTWF0aC5mbG9vcigoMiAqIGEgLyB1cyArIGIpICogdSArIGxhbWJkYSArIDAuNDQ1KSB8IDA7XG4gICAgICAgIHYgPSB2ICogaW52QWxwaGEgLyAoYSAvICh1cyAqIHVzKSArIGIpO1xuXG4gICAgICAgIGlmIChrID49IDEwKSB7XG4gICAgICAgICAgdmFyIHQgPSAoayArIDAuNSkgKiBNYXRoLmxvZyhsYW1iZGEgLyBrKSAtIGxhbWJkYSAtIGxvZ1NxcnQyUEkgKyBrIC0gKDEgLyAxMi4wIC0gKDEgLyAzNjAuMCAtIDEgLyAoMTI2MC4wICogayAqIGspKSAvIChrICogaykpIC8gaztcblxuICAgICAgICAgIGlmIChNYXRoLmxvZyh2ICogc211KSA8PSB0KSB7XG4gICAgICAgICAgICByZXR1cm4gaztcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoayA+PSAwKSB7XG4gICAgICAgICAgaWYgKE1hdGgubG9nKHYpIDw9IGsgKiBNYXRoLmxvZyhsYW1iZGEpIC0gbGFtYmRhIC0gbG9nRmFjdG9yaWFsKGspKSB7XG4gICAgICAgICAgICByZXR1cm4gaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cG9pc3Nvbi5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHJhbmRvbSkge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiByYW5kb20ubmV4dCgpID49IDAuNTtcbiAgfTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD11bmlmb3JtLWJvb2xlYW4uanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX293TGl0ZSA9IHJlcXVpcmUoJ293LWxpdGUnKTtcblxudmFyIF9vd0xpdGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfb3dMaXRlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHJhbmRvbSwgbWluLCBtYXgpIHtcbiAgaWYgKG1heCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgbWF4ID0gbWluID09PSB1bmRlZmluZWQgPyAxIDogbWluO1xuICAgIG1pbiA9IDA7XG4gIH1cblxuICAoMCwgX293TGl0ZTIuZGVmYXVsdCkobWluLCBfb3dMaXRlMi5kZWZhdWx0Lm51bWJlci5pbnRlZ2VyKTtcbiAgKDAsIF9vd0xpdGUyLmRlZmF1bHQpKG1heCwgX293TGl0ZTIuZGVmYXVsdC5udW1iZXIuaW50ZWdlcik7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gcmFuZG9tLm5leHQoKSAqIChtYXggLSBtaW4gKyAxKSArIG1pbiB8IDA7XG4gIH07XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dW5pZm9ybS1pbnQuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX293TGl0ZSA9IHJlcXVpcmUoJ293LWxpdGUnKTtcblxudmFyIF9vd0xpdGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfb3dMaXRlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHJhbmRvbSwgbWluLCBtYXgpIHtcbiAgaWYgKG1heCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgbWF4ID0gbWluID09PSB1bmRlZmluZWQgPyAxIDogbWluO1xuICAgIG1pbiA9IDA7XG4gIH1cblxuICAoMCwgX293TGl0ZTIuZGVmYXVsdCkobWluLCBfb3dMaXRlMi5kZWZhdWx0Lm51bWJlcik7XG4gICgwLCBfb3dMaXRlMi5kZWZhdWx0KShtYXgsIF9vd0xpdGUyLmRlZmF1bHQubnVtYmVyKTtcblxuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiByYW5kb20ubmV4dCgpICogKG1heCAtIG1pbikgKyBtaW47XG4gIH07XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dW5pZm9ybS5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfb3dMaXRlID0gcmVxdWlyZSgnb3ctbGl0ZScpO1xuXG52YXIgX293TGl0ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9vd0xpdGUpO1xuXG52YXIgX3JuZyA9IHJlcXVpcmUoJy4uL3JuZycpO1xuXG52YXIgX3JuZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9ybmcpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBSTkdGdW5jdGlvbiA9IGZ1bmN0aW9uIChfUk5HKSB7XG4gIF9pbmhlcml0cyhSTkdGdW5jdGlvbiwgX1JORyk7XG5cbiAgZnVuY3Rpb24gUk5HRnVuY3Rpb24odGh1bmssIG9wdHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUk5HRnVuY3Rpb24pO1xuXG4gICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKFJOR0Z1bmN0aW9uLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoUk5HRnVuY3Rpb24pKS5jYWxsKHRoaXMpKTtcblxuICAgIF90aGlzLnNlZWQodGh1bmssIG9wdHMpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhSTkdGdW5jdGlvbiwgW3tcbiAgICBrZXk6ICduZXh0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9ybmcoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdzZWVkJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2VlZCh0aHVuaykge1xuICAgICAgKDAsIF9vd0xpdGUyLmRlZmF1bHQpKHRodW5rLCBfb3dMaXRlMi5kZWZhdWx0LmZ1bmN0aW9uKTtcbiAgICAgIHRoaXMuX3JuZyA9IHRodW5rO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2Nsb25lJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2xvbmUoKSB7XG4gICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgb3B0cyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICBvcHRzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5hcHBseShSTkdGdW5jdGlvbiwgW251bGxdLmNvbmNhdChbdGhpcy5fcm5nXSwgb3B0cykpKSgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ25hbWUnLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuICdmdW5jdGlvbic7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFJOR0Z1bmN0aW9uO1xufShfcm5nMi5kZWZhdWx0KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gUk5HRnVuY3Rpb247XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mdW5jdGlvbi5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLlJOR0ZhY3RvcnkgPSBleHBvcnRzLlJORyA9IHVuZGVmaW5lZDtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9vd0xpdGUgPSByZXF1aXJlKCdvdy1saXRlJyk7XG5cbnZhciBfb3dMaXRlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX293TGl0ZSk7XG5cbnZhciBfcm5nID0gcmVxdWlyZSgnLi9ybmcnKTtcblxudmFyIF9ybmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcm5nKTtcblxudmFyIF9ybmdGYWN0b3J5ID0gcmVxdWlyZSgnLi9ybmctZmFjdG9yeScpO1xuXG52YXIgX3JuZ0ZhY3RvcnkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcm5nRmFjdG9yeSk7XG5cbnZhciBfdW5pZm9ybTIgPSByZXF1aXJlKCcuL2Rpc3RyaWJ1dGlvbnMvdW5pZm9ybScpO1xuXG52YXIgX3VuaWZvcm0zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdW5pZm9ybTIpO1xuXG52YXIgX3VuaWZvcm1JbnQyID0gcmVxdWlyZSgnLi9kaXN0cmlidXRpb25zL3VuaWZvcm0taW50Jyk7XG5cbnZhciBfdW5pZm9ybUludDMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91bmlmb3JtSW50Mik7XG5cbnZhciBfdW5pZm9ybUJvb2xlYW4yID0gcmVxdWlyZSgnLi9kaXN0cmlidXRpb25zL3VuaWZvcm0tYm9vbGVhbicpO1xuXG52YXIgX3VuaWZvcm1Cb29sZWFuMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3VuaWZvcm1Cb29sZWFuMik7XG5cbnZhciBfbm9ybWFsMiA9IHJlcXVpcmUoJy4vZGlzdHJpYnV0aW9ucy9ub3JtYWwnKTtcblxudmFyIF9ub3JtYWwzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbm9ybWFsMik7XG5cbnZhciBfbG9nTm9ybWFsMiA9IHJlcXVpcmUoJy4vZGlzdHJpYnV0aW9ucy9sb2ctbm9ybWFsJyk7XG5cbnZhciBfbG9nTm9ybWFsMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xvZ05vcm1hbDIpO1xuXG52YXIgX2Jlcm5vdWxsaTIgPSByZXF1aXJlKCcuL2Rpc3RyaWJ1dGlvbnMvYmVybm91bGxpJyk7XG5cbnZhciBfYmVybm91bGxpMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Jlcm5vdWxsaTIpO1xuXG52YXIgX2Jpbm9taWFsMiA9IHJlcXVpcmUoJy4vZGlzdHJpYnV0aW9ucy9iaW5vbWlhbCcpO1xuXG52YXIgX2Jpbm9taWFsMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Jpbm9taWFsMik7XG5cbnZhciBfZ2VvbWV0cmljMiA9IHJlcXVpcmUoJy4vZGlzdHJpYnV0aW9ucy9nZW9tZXRyaWMnKTtcblxudmFyIF9nZW9tZXRyaWMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2VvbWV0cmljMik7XG5cbnZhciBfcG9pc3NvbjIgPSByZXF1aXJlKCcuL2Rpc3RyaWJ1dGlvbnMvcG9pc3NvbicpO1xuXG52YXIgX3BvaXNzb24zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcG9pc3NvbjIpO1xuXG52YXIgX2V4cG9uZW50aWFsMiA9IHJlcXVpcmUoJy4vZGlzdHJpYnV0aW9ucy9leHBvbmVudGlhbCcpO1xuXG52YXIgX2V4cG9uZW50aWFsMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V4cG9uZW50aWFsMik7XG5cbnZhciBfaXJ3aW5IYWxsMiA9IHJlcXVpcmUoJy4vZGlzdHJpYnV0aW9ucy9pcndpbi1oYWxsJyk7XG5cbnZhciBfaXJ3aW5IYWxsMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lyd2luSGFsbDIpO1xuXG52YXIgX2JhdGVzMiA9IHJlcXVpcmUoJy4vZGlzdHJpYnV0aW9ucy9iYXRlcycpO1xuXG52YXIgX2JhdGVzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2JhdGVzMik7XG5cbnZhciBfcGFyZXRvMiA9IHJlcXVpcmUoJy4vZGlzdHJpYnV0aW9ucy9wYXJldG8nKTtcblxudmFyIF9wYXJldG8zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcGFyZXRvMik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmV4cG9ydHMuUk5HID0gX3JuZzIuZGVmYXVsdDtcbmV4cG9ydHMuUk5HRmFjdG9yeSA9IF9ybmdGYWN0b3J5Mi5kZWZhdWx0O1xuXG4vKipcbiAqIFNlZWRhYmxlIHJhbmRvbSBudW1iZXIgZ2VuZXJhdG9yIHN1cHBvcnRpbmcgbWFueSBjb21tb24gZGlzdHJpYnV0aW9ucy5cbiAqXG4gKiBEZWZhdWx0cyB0byBNYXRoLnJhbmRvbSBhcyBpdHMgdW5kZXJseWluZyBwc2V1ZG9yYW5kb20gbnVtYmVyIGdlbmVyYXRvci5cbiAqXG4gKiBAbmFtZSBSYW5kb21cbiAqIEBjbGFzc1xuICpcbiAqIEBwYXJhbSB7Uk5HfGZ1bmN0aW9ufSBbcm5nPU1hdGgucmFuZG9tXSAtIFVuZGVybHlpbmcgcHNldWRvcmFuZG9tIG51bWJlciBnZW5lcmF0b3IuXG4gKi9cblxudmFyIFJhbmRvbSA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gUmFuZG9tKHJuZykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBSYW5kb20pO1xuXG4gICAgaWYgKHJuZykgKDAsIF9vd0xpdGUyLmRlZmF1bHQpKHJuZywgX293TGl0ZTIuZGVmYXVsdC5vYmplY3QuaW5zdGFuY2VPZihfcm5nMi5kZWZhdWx0KSk7XG5cbiAgICB0aGlzLl9jYWNoZSA9IHt9O1xuICAgIHRoaXMudXNlKHJuZyk7XG4gIH1cblxuICAvKipcbiAgICogQG1lbWJlciB7Uk5HfSBVbmRlcmx5aW5nIHBzZXVkby1yYW5kb20gbnVtYmVyIGdlbmVyYXRvclxuICAgKi9cblxuXG4gIF9jcmVhdGVDbGFzcyhSYW5kb20sIFt7XG4gICAga2V5OiAnY2xvbmUnLFxuXG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbmV3IGBSYW5kb21gIGluc3RhbmNlLCBvcHRpb25hbGx5IHNwZWNpZnlpbmcgcGFyYW1ldGVycyB0b1xuICAgICAqIHNldCBhIG5ldyBzZWVkLlxuICAgICAqXG4gICAgICogQHNlZSBSTkcuY2xvbmVcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbc2VlZF0gLSBPcHRpb25hbCBzZWVkIGZvciBuZXcgUk5HLlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0c10gLSBPcHRpb25hbCBjb25maWcgZm9yIG5ldyBSTkcgb3B0aW9ucy5cbiAgICAgKiBAcmV0dXJuIHtSYW5kb219XG4gICAgICovXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNsb25lKCkge1xuICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBSYW5kb20oX3JuZ0ZhY3RvcnkyLmRlZmF1bHQuYXBwbHkodW5kZWZpbmVkLCBhcmd1bWVudHMpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBuZXcgUmFuZG9tKHRoaXMucm5nLmNsb25lKCkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHVuZGVybHlpbmcgcHNldWRvcmFuZG9tIG51bWJlciBnZW5lcmF0b3IgdXNlZCB2aWFcbiAgICAgKiBlaXRoZXIgYW4gaW5zdGFuY2Ugb2YgYHNlZWRyYW5kb21gLCBhIGN1c3RvbSBpbnN0YW5jZSBvZiBSTkdcbiAgICAgKiAoZm9yIFBSTkcgcGx1Z2lucyksIG9yIGEgc3RyaW5nIHNwZWNpZnlpbmcgdGhlIFBSTkcgdG8gdXNlXG4gICAgICogYWxvbmcgd2l0aCBhbiBvcHRpb25hbCBgc2VlZGAgYW5kIGBvcHRzYCB0byBpbml0aWFsaXplIHRoZVxuICAgICAqIFJORy5cbiAgICAgKlxuICAgICAqIEBleGFtcGxlXG4gICAgICogY29uc3QgcmFuZG9tID0gcmVxdWlyZSgncmFuZG9tJylcbiAgICAgKlxuICAgICAqIHJhbmRvbS51c2UoJ2V4YW1wbGVfc2VlZHJhbmRvbV9zdHJpbmcnKVxuICAgICAqIC8vIG9yXG4gICAgICogcmFuZG9tLnVzZShzZWVkcmFuZG9tKCdraXR0ZW5zJykpXG4gICAgICogLy8gb3JcbiAgICAgKiByYW5kb20udXNlKE1hdGgucmFuZG9tKVxuICAgICAqXG4gICAgICogQHBhcmFtIHsuLi4qfSBhcmdzXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ3VzZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVzZSgpIHtcbiAgICAgIHRoaXMuX3JuZyA9IF9ybmdGYWN0b3J5Mi5kZWZhdWx0LmFwcGx5KHVuZGVmaW5lZCwgYXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQYXRjaGVzIGBNYXRoLnJhbmRvbWAgd2l0aCB0aGlzIFJhbmRvbSBpbnN0YW5jZSdzIFBSTkcuXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ3BhdGNoJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcGF0Y2goKSB7XG4gICAgICBpZiAodGhpcy5fcGF0Y2gpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNYXRoLnJhbmRvbSBhbHJlYWR5IHBhdGNoZWQnKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fcGF0Y2ggPSBNYXRoLnJhbmRvbTtcbiAgICAgIE1hdGgucmFuZG9tID0gdGhpcy51bmlmb3JtKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVzdG9yZXMgYSBwcmV2aW91c2x5IHBhdGNoZWQgYE1hdGgucmFuZG9tYCB0byBpdHMgb3JpZ2luYWwgdmFsdWUuXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ3VucGF0Y2gnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB1bnBhdGNoKCkge1xuICAgICAgaWYgKHRoaXMuX3BhdGNoKSB7XG4gICAgICAgIE1hdGgucmFuZG9tID0gdGhpcy5fcGF0Y2g7XG4gICAgICAgIGRlbGV0ZSB0aGlzLl9wYXRjaDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIFVuaWZvcm0gdXRpbGl0eSBmdW5jdGlvbnNcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgLyoqXG4gICAgICogQ29udmVuaWVuY2Ugd3JhcHBlciBhcm91bmQgYHRoaXMucm5nLm5leHQoKWBcbiAgICAgKlxuICAgICAqIFJldHVybnMgYSBmbG9hdGluZyBwb2ludCBudW1iZXIgaW4gWzAsIDEpLlxuICAgICAqXG4gICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICduZXh0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9ybmcubmV4dCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNhbXBsZXMgYSB1bmlmb3JtIHJhbmRvbSBmbG9hdGluZyBwb2ludCBudW1iZXIsIG9wdGlvbmFsbHkgc3BlY2lmeWluZ1xuICAgICAqIGxvd2VyIGFuZCB1cHBlciBib3VuZHMuXG4gICAgICpcbiAgICAgKiBDb252ZW5jZSB3cmFwcGVyIGFyb3VuZCBgcmFuZG9tLnVuaWZvcm0oKWBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbbWluPTBdIC0gTG93ZXIgYm91bmQgKGZsb2F0LCBpbmNsdXNpdmUpXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFttYXg9MV0gLSBVcHBlciBib3VuZCAoZmxvYXQsIGV4Y2x1c2l2ZSlcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ2Zsb2F0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZmxvYXQobWluLCBtYXgpIHtcbiAgICAgIHJldHVybiB0aGlzLnVuaWZvcm0obWluLCBtYXgpKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2FtcGxlcyBhIHVuaWZvcm0gcmFuZG9tIGludGVnZXIsIG9wdGlvbmFsbHkgc3BlY2lmeWluZyBsb3dlciBhbmQgdXBwZXJcbiAgICAgKiBib3VuZHMuXG4gICAgICpcbiAgICAgKiBDb252ZW5jZSB3cmFwcGVyIGFyb3VuZCBgcmFuZG9tLnVuaWZvcm1JbnQoKWBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbbWluPTBdIC0gTG93ZXIgYm91bmQgKGludGVnZXIsIGluY2x1c2l2ZSlcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW21heD0xXSAtIFVwcGVyIGJvdW5kIChpbnRlZ2VyLCBpbmNsdXNpdmUpXG4gICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdpbnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpbnQobWluLCBtYXgpIHtcbiAgICAgIHJldHVybiB0aGlzLnVuaWZvcm1JbnQobWluLCBtYXgpKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2FtcGxlcyBhIHVuaWZvcm0gcmFuZG9tIGludGVnZXIsIG9wdGlvbmFsbHkgc3BlY2lmeWluZyBsb3dlciBhbmQgdXBwZXJcbiAgICAgKiBib3VuZHMuXG4gICAgICpcbiAgICAgKiBDb252ZW5jZSB3cmFwcGVyIGFyb3VuZCBgcmFuZG9tLnVuaWZvcm1JbnQoKWBcbiAgICAgKlxuICAgICAqIEBhbGlhcyBgcmFuZG9tLmludGBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbbWluPTBdIC0gTG93ZXIgYm91bmQgKGludGVnZXIsIGluY2x1c2l2ZSlcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW21heD0xXSAtIFVwcGVyIGJvdW5kIChpbnRlZ2VyLCBpbmNsdXNpdmUpXG4gICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdpbnRlZ2VyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaW50ZWdlcihtaW4sIG1heCkge1xuICAgICAgcmV0dXJuIHRoaXMudW5pZm9ybUludChtaW4sIG1heCkoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTYW1wbGVzIGEgdW5pZm9ybSByYW5kb20gYm9vbGVhbiB2YWx1ZS5cbiAgICAgKlxuICAgICAqIENvbnZlbmNlIHdyYXBwZXIgYXJvdW5kIGByYW5kb20udW5pZm9ybUJvb2xlYW4oKWBcbiAgICAgKlxuICAgICAqIEBhbGlhcyBgcmFuZG9tLmJvb2xlYW5gXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdib29sJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gYm9vbCgpIHtcbiAgICAgIHJldHVybiB0aGlzLnVuaWZvcm1Cb29sZWFuKCkoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTYW1wbGVzIGEgdW5pZm9ybSByYW5kb20gYm9vbGVhbiB2YWx1ZS5cbiAgICAgKlxuICAgICAqIENvbnZlbmNlIHdyYXBwZXIgYXJvdW5kIGByYW5kb20udW5pZm9ybUJvb2xlYW4oKWBcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ2Jvb2xlYW4nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBib29sZWFuKCkge1xuICAgICAgcmV0dXJuIHRoaXMudW5pZm9ybUJvb2xlYW4oKSgpO1xuICAgIH1cblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gVW5pZm9ybSBkaXN0cmlidXRpb25zXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIC8qKlxuICAgICAqIEdlbmVyYXRlcyBhIFtDb250aW51b3VzIHVuaWZvcm0gZGlzdHJpYnV0aW9uXShodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9Vbmlmb3JtX2Rpc3RyaWJ1dGlvbl8oY29udGludW91cykpLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFttaW49MF0gLSBMb3dlciBib3VuZCAoZmxvYXQsIGluY2x1c2l2ZSlcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW21heD0xXSAtIFVwcGVyIGJvdW5kIChmbG9hdCwgZXhjbHVzaXZlKVxuICAgICAqIEByZXR1cm4ge2Z1bmN0aW9ufVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICd1bmlmb3JtJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdW5pZm9ybShtaW4sIG1heCkge1xuICAgICAgcmV0dXJuIHRoaXMuX21lbW9pemUoJ3VuaWZvcm0nLCBfdW5pZm9ybTMuZGVmYXVsdCwgbWluLCBtYXgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdlbmVyYXRlcyBhIFtEaXNjcmV0ZSB1bmlmb3JtIGRpc3RyaWJ1dGlvbl0oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvRGlzY3JldGVfdW5pZm9ybV9kaXN0cmlidXRpb24pLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFttaW49MF0gLSBMb3dlciBib3VuZCAoaW50ZWdlciwgaW5jbHVzaXZlKVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbbWF4PTFdIC0gVXBwZXIgYm91bmQgKGludGVnZXIsIGluY2x1c2l2ZSlcbiAgICAgKiBAcmV0dXJuIHtmdW5jdGlvbn1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAndW5pZm9ybUludCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVuaWZvcm1JbnQobWluLCBtYXgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9tZW1vaXplKCd1bmlmb3JtSW50JywgX3VuaWZvcm1JbnQzLmRlZmF1bHQsIG1pbiwgbWF4KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZW5lcmF0ZXMgYSBbRGlzY3JldGUgdW5pZm9ybSBkaXN0cmlidXRpb25dKGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0Rpc2NyZXRlX3VuaWZvcm1fZGlzdHJpYnV0aW9uKSxcbiAgICAgKiB3aXRoIHR3byBwb3NzaWJsZSBvdXRjb21lcywgYHRydWVgIG9yIGBmYWxzZS5cbiAgICAgKlxuICAgICAqIFRoaXMgbWV0aG9kIGlzIGFuYWxvZ291cyB0byBmbGlwcGluZyBhIGNvaW4uXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtmdW5jdGlvbn1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAndW5pZm9ybUJvb2xlYW4nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB1bmlmb3JtQm9vbGVhbigpIHtcbiAgICAgIHJldHVybiB0aGlzLl9tZW1vaXplKCd1bmlmb3JtQm9vbGVhbicsIF91bmlmb3JtQm9vbGVhbjMuZGVmYXVsdCk7XG4gICAgfVxuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBOb3JtYWwgZGlzdHJpYnV0aW9uc1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICAvKipcbiAgICAgKiBHZW5lcmF0ZXMgYSBbTm9ybWFsIGRpc3RyaWJ1dGlvbl0oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvTm9ybWFsX2Rpc3RyaWJ1dGlvbikuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW211PTBdIC0gTWVhblxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbc2lnbWE9MV0gLSBTdGFuZGFyZCBkZXZpYXRpb25cbiAgICAgKiBAcmV0dXJuIHtmdW5jdGlvbn1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnbm9ybWFsJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gbm9ybWFsKG11LCBzaWdtYSkge1xuICAgICAgcmV0dXJuICgwLCBfbm9ybWFsMy5kZWZhdWx0KSh0aGlzLCBtdSwgc2lnbWEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdlbmVyYXRlcyBhIFtMb2ctbm9ybWFsIGRpc3RyaWJ1dGlvbl0oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvTG9nLW5vcm1hbF9kaXN0cmlidXRpb24pLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFttdT0wXSAtIE1lYW4gb2YgdW5kZXJseWluZyBub3JtYWwgZGlzdHJpYnV0aW9uXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFtzaWdtYT0xXSAtIFN0YW5kYXJkIGRldmlhdGlvbiBvZiB1bmRlcmx5aW5nIG5vcm1hbCBkaXN0cmlidXRpb25cbiAgICAgKiBAcmV0dXJuIHtmdW5jdGlvbn1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnbG9nTm9ybWFsJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gbG9nTm9ybWFsKG11LCBzaWdtYSkge1xuICAgICAgcmV0dXJuICgwLCBfbG9nTm9ybWFsMy5kZWZhdWx0KSh0aGlzLCBtdSwgc2lnbWEpO1xuICAgIH1cblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gQmVybm91bGxpIGRpc3RyaWJ1dGlvbnNcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgLyoqXG4gICAgICogR2VuZXJhdGVzIGEgW0Jlcm5vdWxsaSBkaXN0cmlidXRpb25dKGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0Jlcm5vdWxsaV9kaXN0cmlidXRpb24pLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFtwPTAuNV0gLSBTdWNjZXNzIHByb2JhYmlsaXR5IG9mIGVhY2ggdHJpYWwuXG4gICAgICogQHJldHVybiB7ZnVuY3Rpb259XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ2Jlcm5vdWxsaScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGJlcm5vdWxsaShwKSB7XG4gICAgICByZXR1cm4gKDAsIF9iZXJub3VsbGkzLmRlZmF1bHQpKHRoaXMsIHApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdlbmVyYXRlcyBhIFtCaW5vbWlhbCBkaXN0cmlidXRpb25dKGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0Jpbm9taWFsX2Rpc3RyaWJ1dGlvbikuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW249MV0gLSBOdW1iZXIgb2YgdHJpYWxzLlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbcD0wLjVdIC0gU3VjY2VzcyBwcm9iYWJpbGl0eSBvZiBlYWNoIHRyaWFsLlxuICAgICAqIEByZXR1cm4ge2Z1bmN0aW9ufVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdiaW5vbWlhbCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGJpbm9taWFsKG4sIHApIHtcbiAgICAgIHJldHVybiAoMCwgX2Jpbm9taWFsMy5kZWZhdWx0KSh0aGlzLCBuLCBwKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZW5lcmF0ZXMgYSBbR2VvbWV0cmljIGRpc3RyaWJ1dGlvbl0oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvR2VvbWV0cmljX2Rpc3RyaWJ1dGlvbikuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW3A9MC41XSAtIFN1Y2Nlc3MgcHJvYmFiaWxpdHkgb2YgZWFjaCB0cmlhbC5cbiAgICAgKiBAcmV0dXJuIHtmdW5jdGlvbn1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnZ2VvbWV0cmljJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2VvbWV0cmljKHApIHtcbiAgICAgIHJldHVybiAoMCwgX2dlb21ldHJpYzMuZGVmYXVsdCkodGhpcywgcCk7XG4gICAgfVxuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBQb2lzc29uIGRpc3RyaWJ1dGlvbnNcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgLyoqXG4gICAgICogR2VuZXJhdGVzIGEgW1BvaXNzb24gZGlzdHJpYnV0aW9uXShodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9Qb2lzc29uX2Rpc3RyaWJ1dGlvbikuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW2xhbWJkYT0xXSAtIE1lYW4gKGxhbWJkYSA+IDApXG4gICAgICogQHJldHVybiB7ZnVuY3Rpb259XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ3BvaXNzb24nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwb2lzc29uKGxhbWJkYSkge1xuICAgICAgcmV0dXJuICgwLCBfcG9pc3NvbjMuZGVmYXVsdCkodGhpcywgbGFtYmRhKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZW5lcmF0ZXMgYW4gW0V4cG9uZW50aWFsIGRpc3RyaWJ1dGlvbl0oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvRXhwb25lbnRpYWxfZGlzdHJpYnV0aW9uKS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbbGFtYmRhPTFdIC0gSW52ZXJzZSBtZWFuIChsYW1iZGEgPiAwKVxuICAgICAqIEByZXR1cm4ge2Z1bmN0aW9ufVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdleHBvbmVudGlhbCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGV4cG9uZW50aWFsKGxhbWJkYSkge1xuICAgICAgcmV0dXJuICgwLCBfZXhwb25lbnRpYWwzLmRlZmF1bHQpKHRoaXMsIGxhbWJkYSk7XG4gICAgfVxuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBNaXNjIGRpc3RyaWJ1dGlvbnNcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgLyoqXG4gICAgICogR2VuZXJhdGVzIGFuIFtJcndpbiBIYWxsIGRpc3RyaWJ1dGlvbl0oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSXJ3aW4lRTIlODAlOTNIYWxsX2Rpc3RyaWJ1dGlvbikuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW249MV0gLSBOdW1iZXIgb2YgdW5pZm9ybSBzYW1wbGVzIHRvIHN1bSAobiA+PSAwKVxuICAgICAqIEByZXR1cm4ge2Z1bmN0aW9ufVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdpcndpbkhhbGwnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpcndpbkhhbGwobikge1xuICAgICAgcmV0dXJuICgwLCBfaXJ3aW5IYWxsMy5kZWZhdWx0KSh0aGlzLCBuKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZW5lcmF0ZXMgYSBbQmF0ZXMgZGlzdHJpYnV0aW9uXShodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9CYXRlc19kaXN0cmlidXRpb24pLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFtuPTFdIC0gTnVtYmVyIG9mIHVuaWZvcm0gc2FtcGxlcyB0byBhdmVyYWdlIChuID49IDEpXG4gICAgICogQHJldHVybiB7ZnVuY3Rpb259XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ2JhdGVzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gYmF0ZXMobikge1xuICAgICAgcmV0dXJuICgwLCBfYmF0ZXMzLmRlZmF1bHQpKHRoaXMsIG4pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdlbmVyYXRlcyBhIFtQYXJldG8gZGlzdHJpYnV0aW9uXShodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9QYXJldG9fZGlzdHJpYnV0aW9uKS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbYWxwaGE9MV0gLSBBbHBoYVxuICAgICAqIEByZXR1cm4ge2Z1bmN0aW9ufVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdwYXJldG8nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwYXJldG8oYWxwaGEpIHtcbiAgICAgIHJldHVybiAoMCwgX3BhcmV0bzMuZGVmYXVsdCkodGhpcywgYWxwaGEpO1xuICAgIH1cblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gSW50ZXJuYWxcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgLyoqXG4gICAgICogTWVtb2l6ZXMgZGlzdHJpYnV0aW9ucyB0byBlbnN1cmUgdGhleSdyZSBvbmx5IGNyZWF0ZWQgd2hlbiBuZWNlc3NhcnkuXG4gICAgICpcbiAgICAgKiBSZXR1cm5zIGEgdGh1bmsgd2hpY2ggdGhhdCByZXR1cm5zIGluZGVwZW5kZW50LCBpZGVudGljYWxseSBkaXN0cmlidXRlZFxuICAgICAqIHNhbXBsZXMgZnJvbSB0aGUgc3BlY2lmaWVkIGRpc3RyaWJ1dGlvbi5cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbGFiZWwgLSBOYW1lIG9mIGRpc3RyaWJ1dGlvblxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGdldHRlciAtIEZ1bmN0aW9uIHdoaWNoIGdlbmVyYXRlcyBhIG5ldyBkaXN0cmlidXRpb25cbiAgICAgKiBAcGFyYW0gey4uLip9IGFyZ3MgLSBEaXN0cmlidXRpb24tc3BlY2lmaWMgYXJndW1lbnRzXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtmdW5jdGlvbn1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnX21lbW9pemUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfbWVtb2l6ZShsYWJlbCwgZ2V0dGVyKSB7XG4gICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4gPiAyID8gX2xlbiAtIDIgOiAwKSwgX2tleSA9IDI7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgYXJnc1tfa2V5IC0gMl0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICB9XG5cbiAgICAgIHZhciBrZXkgPSAnJyArIGFyZ3Muam9pbignOycpO1xuICAgICAgdmFyIHZhbHVlID0gdGhpcy5fY2FjaGVbbGFiZWxdO1xuXG4gICAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZS5rZXkgIT09IGtleSkge1xuICAgICAgICB2YWx1ZSA9IHsga2V5OiBrZXksIGRpc3RyaWJ1dGlvbjogZ2V0dGVyLmFwcGx5KHVuZGVmaW5lZCwgW3RoaXNdLmNvbmNhdChhcmdzKSkgfTtcbiAgICAgICAgdGhpcy5fY2FjaGVbbGFiZWxdID0gdmFsdWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB2YWx1ZS5kaXN0cmlidXRpb247XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncm5nJyxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9ybmc7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFJhbmRvbTtcbn0oKTtcblxuLy8gZGVmYXVsdHMgdG8gTWF0aC5yYW5kb20gYXMgaXRzIFJOR1xuXG5cbmV4cG9ydHMuZGVmYXVsdCA9IG5ldyBSYW5kb20oKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJhbmRvbS5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxudmFyIF9zZWVkcmFuZG9tID0gcmVxdWlyZSgnc2VlZHJhbmRvbScpO1xuXG52YXIgX3NlZWRyYW5kb20yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2VlZHJhbmRvbSk7XG5cbnZhciBfcm5nID0gcmVxdWlyZSgnLi9ybmcnKTtcblxudmFyIF9ybmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcm5nKTtcblxudmFyIF9mdW5jdGlvbiA9IHJlcXVpcmUoJy4vZ2VuZXJhdG9ycy9mdW5jdGlvbicpO1xuXG52YXIgX2Z1bmN0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Z1bmN0aW9uKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gQXJyYXkoYXJyLmxlbmd0aCk7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfSBlbHNlIHsgcmV0dXJuIEFycmF5LmZyb20oYXJyKTsgfSB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uICgpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgdmFyIF9hcmdzJCA9IGFyZ3NbMF0sXG4gICAgICBhcmcwID0gX2FyZ3MkID09PSB1bmRlZmluZWQgPyAnZGVmYXVsdCcgOiBfYXJncyQsXG4gICAgICByZXN0ID0gYXJncy5zbGljZSgxKTtcblxuXG4gIHN3aXRjaCAodHlwZW9mIGFyZzAgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKGFyZzApKSB7XG4gICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgIGlmIChhcmcwIGluc3RhbmNlb2YgX3JuZzIuZGVmYXVsdCkge1xuICAgICAgICByZXR1cm4gYXJnMDtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnZnVuY3Rpb24nOlxuICAgICAgcmV0dXJuIG5ldyBfZnVuY3Rpb24yLmRlZmF1bHQoYXJnMCk7XG5cbiAgICBjYXNlICdzdHJpbmcnOlxuICAgIGNhc2UgJ251bWJlcic6XG4gICAgICByZXR1cm4gbmV3IF9mdW5jdGlvbjIuZGVmYXVsdChfc2VlZHJhbmRvbTIuZGVmYXVsdC5hcHBseSh1bmRlZmluZWQsIF90b0NvbnN1bWFibGVBcnJheShyZXN0KSkpO1xuICB9XG5cbiAgdGhyb3cgbmV3IEVycm9yKCdpbnZhbGlkIFJORyBcIicgKyBhcmcwICsgJ1wiJyk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm5nLWZhY3RvcnkuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgUk5HID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBSTkcoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFJORyk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoUk5HLCBbe1xuICAgIGtleTogJ25leHQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdSTkcubmV4dCBtdXN0IGJlIG92ZXJyaWRkZW4nKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdzZWVkJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2VlZChfc2VlZCwgb3B0cykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdSTkcuc2VlZCBtdXN0IGJlIG92ZXJyaWRkZW4nKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjbG9uZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNsb25lKHNlZWQsIG9wdHMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUk5HLmNsb25lIG11c3QgYmUgb3ZlcnJpZGRlbicpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ19zZWVkJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gX3NlZWQoc2VlZCwgb3B0cykge1xuICAgICAgLy8gVE9ETzogYWRkIGVudHJvcHkgYW5kIHN0dWZmXG5cbiAgICAgIGlmIChzZWVkID09PSAoc2VlZCB8IDApKSB7XG4gICAgICAgIHJldHVybiBzZWVkO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHN0clNlZWQgPSAnJyArIHNlZWQ7XG4gICAgICAgIHZhciBzID0gMDtcblxuICAgICAgICBmb3IgKHZhciBrID0gMDsgayA8IHN0clNlZWQubGVuZ3RoOyArK2spIHtcbiAgICAgICAgICBzIF49IHN0clNlZWQuY2hhckNvZGVBdChrKSB8IDA7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcztcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICduYW1lJyxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUk5HLm5hbWUgbXVzdCBiZSBvdmVycmlkZGVuJyk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFJORztcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gUk5HO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm5nLmpzLm1hcCIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9yYW5kb20nKS5kZWZhdWx0XG4iLCIvLyBBIGxpYnJhcnkgb2Ygc2VlZGFibGUgUk5HcyBpbXBsZW1lbnRlZCBpbiBKYXZhc2NyaXB0LlxuLy9cbi8vIFVzYWdlOlxuLy9cbi8vIHZhciBzZWVkcmFuZG9tID0gcmVxdWlyZSgnc2VlZHJhbmRvbScpO1xuLy8gdmFyIHJhbmRvbSA9IHNlZWRyYW5kb20oMSk7IC8vIG9yIGFueSBzZWVkLlxuLy8gdmFyIHggPSByYW5kb20oKTsgICAgICAgLy8gMCA8PSB4IDwgMS4gIEV2ZXJ5IGJpdCBpcyByYW5kb20uXG4vLyB2YXIgeCA9IHJhbmRvbS5xdWljaygpOyAvLyAwIDw9IHggPCAxLiAgMzIgYml0cyBvZiByYW5kb21uZXNzLlxuXG4vLyBhbGVhLCBhIDUzLWJpdCBtdWx0aXBseS13aXRoLWNhcnJ5IGdlbmVyYXRvciBieSBKb2hhbm5lcyBCYWFnw7hlLlxuLy8gUGVyaW9kOiB+Ml4xMTZcbi8vIFJlcG9ydGVkIHRvIHBhc3MgYWxsIEJpZ0NydXNoIHRlc3RzLlxudmFyIGFsZWEgPSByZXF1aXJlKCcuL2xpYi9hbGVhJyk7XG5cbi8vIHhvcjEyOCwgYSBwdXJlIHhvci1zaGlmdCBnZW5lcmF0b3IgYnkgR2VvcmdlIE1hcnNhZ2xpYS5cbi8vIFBlcmlvZDogMl4xMjgtMS5cbi8vIFJlcG9ydGVkIHRvIGZhaWw6IE1hdHJpeFJhbmsgYW5kIExpbmVhckNvbXAuXG52YXIgeG9yMTI4ID0gcmVxdWlyZSgnLi9saWIveG9yMTI4Jyk7XG5cbi8vIHhvcndvdywgR2VvcmdlIE1hcnNhZ2xpYSdzIDE2MC1iaXQgeG9yLXNoaWZ0IGNvbWJpbmVkIHBsdXMgd2V5bC5cbi8vIFBlcmlvZDogMl4xOTItMl4zMlxuLy8gUmVwb3J0ZWQgdG8gZmFpbDogQ29sbGlzaW9uT3ZlciwgU2ltcFBva2VyLCBhbmQgTGluZWFyQ29tcC5cbnZhciB4b3J3b3cgPSByZXF1aXJlKCcuL2xpYi94b3J3b3cnKTtcblxuLy8geG9yc2hpZnQ3LCBieSBGcmFuw6dvaXMgUGFubmV0b24gYW5kIFBpZXJyZSBMJ2VjdXllciwgdGFrZXNcbi8vIGEgZGlmZmVyZW50IGFwcHJvYWNoOiBpdCBhZGRzIHJvYnVzdG5lc3MgYnkgYWxsb3dpbmcgbW9yZSBzaGlmdHNcbi8vIHRoYW4gTWFyc2FnbGlhJ3Mgb3JpZ2luYWwgdGhyZWUuICBJdCBpcyBhIDctc2hpZnQgZ2VuZXJhdG9yXG4vLyB3aXRoIDI1NiBiaXRzLCB0aGF0IHBhc3NlcyBCaWdDcnVzaCB3aXRoIG5vIHN5c3RtYXRpYyBmYWlsdXJlcy5cbi8vIFBlcmlvZCAyXjI1Ni0xLlxuLy8gTm8gc3lzdGVtYXRpYyBCaWdDcnVzaCBmYWlsdXJlcyByZXBvcnRlZC5cbnZhciB4b3JzaGlmdDcgPSByZXF1aXJlKCcuL2xpYi94b3JzaGlmdDcnKTtcblxuLy8geG9yNDA5NiwgYnkgUmljaGFyZCBCcmVudCwgaXMgYSA0MDk2LWJpdCB4b3Itc2hpZnQgd2l0aCBhXG4vLyB2ZXJ5IGxvbmcgcGVyaW9kIHRoYXQgYWxzbyBhZGRzIGEgV2V5bCBnZW5lcmF0b3IuIEl0IGFsc28gcGFzc2VzXG4vLyBCaWdDcnVzaCB3aXRoIG5vIHN5c3RlbWF0aWMgZmFpbHVyZXMuICBJdHMgbG9uZyBwZXJpb2QgbWF5XG4vLyBiZSB1c2VmdWwgaWYgeW91IGhhdmUgbWFueSBnZW5lcmF0b3JzIGFuZCBuZWVkIHRvIGF2b2lkXG4vLyBjb2xsaXNpb25zLlxuLy8gUGVyaW9kOiAyXjQxMjgtMl4zMi5cbi8vIE5vIHN5c3RlbWF0aWMgQmlnQ3J1c2ggZmFpbHVyZXMgcmVwb3J0ZWQuXG52YXIgeG9yNDA5NiA9IHJlcXVpcmUoJy4vbGliL3hvcjQwOTYnKTtcblxuLy8gVHljaGUtaSwgYnkgU2FtdWVsIE5ldmVzIGFuZCBGaWxpcGUgQXJhdWpvLCBpcyBhIGJpdC1zaGlmdGluZyByYW5kb21cbi8vIG51bWJlciBnZW5lcmF0b3IgZGVyaXZlZCBmcm9tIENoYUNoYSwgYSBtb2Rlcm4gc3RyZWFtIGNpcGhlci5cbi8vIGh0dHBzOi8vZWRlbi5kZWkudWMucHQvfnNuZXZlcy9wdWJzLzIwMTEtc25mYTIucGRmXG4vLyBQZXJpb2Q6IH4yXjEyN1xuLy8gTm8gc3lzdGVtYXRpYyBCaWdDcnVzaCBmYWlsdXJlcyByZXBvcnRlZC5cbnZhciB0eWNoZWkgPSByZXF1aXJlKCcuL2xpYi90eWNoZWknKTtcblxuLy8gVGhlIG9yaWdpbmFsIEFSQzQtYmFzZWQgcHJuZyBpbmNsdWRlZCBpbiB0aGlzIGxpYnJhcnkuXG4vLyBQZXJpb2Q6IH4yXjE2MDBcbnZhciBzciA9IHJlcXVpcmUoJy4vc2VlZHJhbmRvbScpO1xuXG5zci5hbGVhID0gYWxlYTtcbnNyLnhvcjEyOCA9IHhvcjEyODtcbnNyLnhvcndvdyA9IHhvcndvdztcbnNyLnhvcnNoaWZ0NyA9IHhvcnNoaWZ0NztcbnNyLnhvcjQwOTYgPSB4b3I0MDk2O1xuc3IudHljaGVpID0gdHljaGVpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHNyO1xuIiwiLy8gQSBwb3J0IG9mIGFuIGFsZ29yaXRobSBieSBKb2hhbm5lcyBCYWFnw7hlIDxiYWFnb2VAYmFhZ29lLmNvbT4sIDIwMTBcbi8vIGh0dHA6Ly9iYWFnb2UuY29tL2VuL1JhbmRvbU11c2luZ3MvamF2YXNjcmlwdC9cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9ucXVpbmxhbi9iZXR0ZXItcmFuZG9tLW51bWJlcnMtZm9yLWphdmFzY3JpcHQtbWlycm9yXG4vLyBPcmlnaW5hbCB3b3JrIGlzIHVuZGVyIE1JVCBsaWNlbnNlIC1cblxuLy8gQ29weXJpZ2h0IChDKSAyMDEwIGJ5IEpvaGFubmVzIEJhYWfDuGUgPGJhYWdvZUBiYWFnb2Uub3JnPlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vIFxuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy8gXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuXG5cbihmdW5jdGlvbihnbG9iYWwsIG1vZHVsZSwgZGVmaW5lKSB7XG5cbmZ1bmN0aW9uIEFsZWEoc2VlZCkge1xuICB2YXIgbWUgPSB0aGlzLCBtYXNoID0gTWFzaCgpO1xuXG4gIG1lLm5leHQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgdCA9IDIwOTE2MzkgKiBtZS5zMCArIG1lLmMgKiAyLjMyODMwNjQzNjUzODY5NjNlLTEwOyAvLyAyXi0zMlxuICAgIG1lLnMwID0gbWUuczE7XG4gICAgbWUuczEgPSBtZS5zMjtcbiAgICByZXR1cm4gbWUuczIgPSB0IC0gKG1lLmMgPSB0IHwgMCk7XG4gIH07XG5cbiAgLy8gQXBwbHkgdGhlIHNlZWRpbmcgYWxnb3JpdGhtIGZyb20gQmFhZ29lLlxuICBtZS5jID0gMTtcbiAgbWUuczAgPSBtYXNoKCcgJyk7XG4gIG1lLnMxID0gbWFzaCgnICcpO1xuICBtZS5zMiA9IG1hc2goJyAnKTtcbiAgbWUuczAgLT0gbWFzaChzZWVkKTtcbiAgaWYgKG1lLnMwIDwgMCkgeyBtZS5zMCArPSAxOyB9XG4gIG1lLnMxIC09IG1hc2goc2VlZCk7XG4gIGlmIChtZS5zMSA8IDApIHsgbWUuczEgKz0gMTsgfVxuICBtZS5zMiAtPSBtYXNoKHNlZWQpO1xuICBpZiAobWUuczIgPCAwKSB7IG1lLnMyICs9IDE7IH1cbiAgbWFzaCA9IG51bGw7XG59XG5cbmZ1bmN0aW9uIGNvcHkoZiwgdCkge1xuICB0LmMgPSBmLmM7XG4gIHQuczAgPSBmLnMwO1xuICB0LnMxID0gZi5zMTtcbiAgdC5zMiA9IGYuczI7XG4gIHJldHVybiB0O1xufVxuXG5mdW5jdGlvbiBpbXBsKHNlZWQsIG9wdHMpIHtcbiAgdmFyIHhnID0gbmV3IEFsZWEoc2VlZCksXG4gICAgICBzdGF0ZSA9IG9wdHMgJiYgb3B0cy5zdGF0ZSxcbiAgICAgIHBybmcgPSB4Zy5uZXh0O1xuICBwcm5nLmludDMyID0gZnVuY3Rpb24oKSB7IHJldHVybiAoeGcubmV4dCgpICogMHgxMDAwMDAwMDApIHwgMDsgfVxuICBwcm5nLmRvdWJsZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBwcm5nKCkgKyAocHJuZygpICogMHgyMDAwMDAgfCAwKSAqIDEuMTEwMjIzMDI0NjI1MTU2NWUtMTY7IC8vIDJeLTUzXG4gIH07XG4gIHBybmcucXVpY2sgPSBwcm5nO1xuICBpZiAoc3RhdGUpIHtcbiAgICBpZiAodHlwZW9mKHN0YXRlKSA9PSAnb2JqZWN0JykgY29weShzdGF0ZSwgeGcpO1xuICAgIHBybmcuc3RhdGUgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvcHkoeGcsIHt9KTsgfVxuICB9XG4gIHJldHVybiBwcm5nO1xufVxuXG5mdW5jdGlvbiBNYXNoKCkge1xuICB2YXIgbiA9IDB4ZWZjODI0OWQ7XG5cbiAgdmFyIG1hc2ggPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgZGF0YSA9IGRhdGEudG9TdHJpbmcoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgIG4gKz0gZGF0YS5jaGFyQ29kZUF0KGkpO1xuICAgICAgdmFyIGggPSAwLjAyNTE5NjAzMjgyNDE2OTM4ICogbjtcbiAgICAgIG4gPSBoID4+PiAwO1xuICAgICAgaCAtPSBuO1xuICAgICAgaCAqPSBuO1xuICAgICAgbiA9IGggPj4+IDA7XG4gICAgICBoIC09IG47XG4gICAgICBuICs9IGggKiAweDEwMDAwMDAwMDsgLy8gMl4zMlxuICAgIH1cbiAgICByZXR1cm4gKG4gPj4+IDApICogMi4zMjgzMDY0MzY1Mzg2OTYzZS0xMDsgLy8gMl4tMzJcbiAgfTtcblxuICByZXR1cm4gbWFzaDtcbn1cblxuXG5pZiAobW9kdWxlICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gaW1wbDtcbn0gZWxzZSBpZiAoZGVmaW5lICYmIGRlZmluZS5hbWQpIHtcbiAgZGVmaW5lKGZ1bmN0aW9uKCkgeyByZXR1cm4gaW1wbDsgfSk7XG59IGVsc2Uge1xuICB0aGlzLmFsZWEgPSBpbXBsO1xufVxuXG59KShcbiAgdGhpcyxcbiAgKHR5cGVvZiBtb2R1bGUpID09ICdvYmplY3QnICYmIG1vZHVsZSwgICAgLy8gcHJlc2VudCBpbiBub2RlLmpzXG4gICh0eXBlb2YgZGVmaW5lKSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZSAgIC8vIHByZXNlbnQgd2l0aCBhbiBBTUQgbG9hZGVyXG4pO1xuXG5cbiIsIi8vIEEgSmF2YXNjcmlwdCBpbXBsZW1lbnRhaW9uIG9mIHRoZSBcIlR5Y2hlLWlcIiBwcm5nIGFsZ29yaXRobSBieVxuLy8gU2FtdWVsIE5ldmVzIGFuZCBGaWxpcGUgQXJhdWpvLlxuLy8gU2VlIGh0dHBzOi8vZWRlbi5kZWkudWMucHQvfnNuZXZlcy9wdWJzLzIwMTEtc25mYTIucGRmXG5cbihmdW5jdGlvbihnbG9iYWwsIG1vZHVsZSwgZGVmaW5lKSB7XG5cbmZ1bmN0aW9uIFhvckdlbihzZWVkKSB7XG4gIHZhciBtZSA9IHRoaXMsIHN0cnNlZWQgPSAnJztcblxuICAvLyBTZXQgdXAgZ2VuZXJhdG9yIGZ1bmN0aW9uLlxuICBtZS5uZXh0ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGIgPSBtZS5iLCBjID0gbWUuYywgZCA9IG1lLmQsIGEgPSBtZS5hO1xuICAgIGIgPSAoYiA8PCAyNSkgXiAoYiA+Pj4gNykgXiBjO1xuICAgIGMgPSAoYyAtIGQpIHwgMDtcbiAgICBkID0gKGQgPDwgMjQpIF4gKGQgPj4+IDgpIF4gYTtcbiAgICBhID0gKGEgLSBiKSB8IDA7XG4gICAgbWUuYiA9IGIgPSAoYiA8PCAyMCkgXiAoYiA+Pj4gMTIpIF4gYztcbiAgICBtZS5jID0gYyA9IChjIC0gZCkgfCAwO1xuICAgIG1lLmQgPSAoZCA8PCAxNikgXiAoYyA+Pj4gMTYpIF4gYTtcbiAgICByZXR1cm4gbWUuYSA9IChhIC0gYikgfCAwO1xuICB9O1xuXG4gIC8qIFRoZSBmb2xsb3dpbmcgaXMgbm9uLWludmVydGVkIHR5Y2hlLCB3aGljaCBoYXMgYmV0dGVyIGludGVybmFsXG4gICAqIGJpdCBkaWZmdXNpb24sIGJ1dCB3aGljaCBpcyBhYm91dCAyNSUgc2xvd2VyIHRoYW4gdHljaGUtaSBpbiBKUy5cbiAgbWUubmV4dCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBhID0gbWUuYSwgYiA9IG1lLmIsIGMgPSBtZS5jLCBkID0gbWUuZDtcbiAgICBhID0gKG1lLmEgKyBtZS5iIHwgMCkgPj4+IDA7XG4gICAgZCA9IG1lLmQgXiBhOyBkID0gZCA8PCAxNiBeIGQgPj4+IDE2O1xuICAgIGMgPSBtZS5jICsgZCB8IDA7XG4gICAgYiA9IG1lLmIgXiBjOyBiID0gYiA8PCAxMiBeIGQgPj4+IDIwO1xuICAgIG1lLmEgPSBhID0gYSArIGIgfCAwO1xuICAgIGQgPSBkIF4gYTsgbWUuZCA9IGQgPSBkIDw8IDggXiBkID4+PiAyNDtcbiAgICBtZS5jID0gYyA9IGMgKyBkIHwgMDtcbiAgICBiID0gYiBeIGM7XG4gICAgcmV0dXJuIG1lLmIgPSAoYiA8PCA3IF4gYiA+Pj4gMjUpO1xuICB9XG4gICovXG5cbiAgbWUuYSA9IDA7XG4gIG1lLmIgPSAwO1xuICBtZS5jID0gMjY1NDQzNTc2OSB8IDA7XG4gIG1lLmQgPSAxMzY3MTMwNTUxO1xuXG4gIGlmIChzZWVkID09PSBNYXRoLmZsb29yKHNlZWQpKSB7XG4gICAgLy8gSW50ZWdlciBzZWVkLlxuICAgIG1lLmEgPSAoc2VlZCAvIDB4MTAwMDAwMDAwKSB8IDA7XG4gICAgbWUuYiA9IHNlZWQgfCAwO1xuICB9IGVsc2Uge1xuICAgIC8vIFN0cmluZyBzZWVkLlxuICAgIHN0cnNlZWQgKz0gc2VlZDtcbiAgfVxuXG4gIC8vIE1peCBpbiBzdHJpbmcgc2VlZCwgdGhlbiBkaXNjYXJkIGFuIGluaXRpYWwgYmF0Y2ggb2YgNjQgdmFsdWVzLlxuICBmb3IgKHZhciBrID0gMDsgayA8IHN0cnNlZWQubGVuZ3RoICsgMjA7IGsrKykge1xuICAgIG1lLmIgXj0gc3Ryc2VlZC5jaGFyQ29kZUF0KGspIHwgMDtcbiAgICBtZS5uZXh0KCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY29weShmLCB0KSB7XG4gIHQuYSA9IGYuYTtcbiAgdC5iID0gZi5iO1xuICB0LmMgPSBmLmM7XG4gIHQuZCA9IGYuZDtcbiAgcmV0dXJuIHQ7XG59O1xuXG5mdW5jdGlvbiBpbXBsKHNlZWQsIG9wdHMpIHtcbiAgdmFyIHhnID0gbmV3IFhvckdlbihzZWVkKSxcbiAgICAgIHN0YXRlID0gb3B0cyAmJiBvcHRzLnN0YXRlLFxuICAgICAgcHJuZyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gKHhnLm5leHQoKSA+Pj4gMCkgLyAweDEwMDAwMDAwMDsgfTtcbiAgcHJuZy5kb3VibGUgPSBmdW5jdGlvbigpIHtcbiAgICBkbyB7XG4gICAgICB2YXIgdG9wID0geGcubmV4dCgpID4+PiAxMSxcbiAgICAgICAgICBib3QgPSAoeGcubmV4dCgpID4+PiAwKSAvIDB4MTAwMDAwMDAwLFxuICAgICAgICAgIHJlc3VsdCA9ICh0b3AgKyBib3QpIC8gKDEgPDwgMjEpO1xuICAgIH0gd2hpbGUgKHJlc3VsdCA9PT0gMCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbiAgcHJuZy5pbnQzMiA9IHhnLm5leHQ7XG4gIHBybmcucXVpY2sgPSBwcm5nO1xuICBpZiAoc3RhdGUpIHtcbiAgICBpZiAodHlwZW9mKHN0YXRlKSA9PSAnb2JqZWN0JykgY29weShzdGF0ZSwgeGcpO1xuICAgIHBybmcuc3RhdGUgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvcHkoeGcsIHt9KTsgfVxuICB9XG4gIHJldHVybiBwcm5nO1xufVxuXG5pZiAobW9kdWxlICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gaW1wbDtcbn0gZWxzZSBpZiAoZGVmaW5lICYmIGRlZmluZS5hbWQpIHtcbiAgZGVmaW5lKGZ1bmN0aW9uKCkgeyByZXR1cm4gaW1wbDsgfSk7XG59IGVsc2Uge1xuICB0aGlzLnR5Y2hlaSA9IGltcGw7XG59XG5cbn0pKFxuICB0aGlzLFxuICAodHlwZW9mIG1vZHVsZSkgPT0gJ29iamVjdCcgJiYgbW9kdWxlLCAgICAvLyBwcmVzZW50IGluIG5vZGUuanNcbiAgKHR5cGVvZiBkZWZpbmUpID09ICdmdW5jdGlvbicgJiYgZGVmaW5lICAgLy8gcHJlc2VudCB3aXRoIGFuIEFNRCBsb2FkZXJcbik7XG5cblxuIiwiLy8gQSBKYXZhc2NyaXB0IGltcGxlbWVudGFpb24gb2YgdGhlIFwieG9yMTI4XCIgcHJuZyBhbGdvcml0aG0gYnlcbi8vIEdlb3JnZSBNYXJzYWdsaWEuICBTZWUgaHR0cDovL3d3dy5qc3RhdHNvZnQub3JnL3YwOC9pMTQvcGFwZXJcblxuKGZ1bmN0aW9uKGdsb2JhbCwgbW9kdWxlLCBkZWZpbmUpIHtcblxuZnVuY3Rpb24gWG9yR2VuKHNlZWQpIHtcbiAgdmFyIG1lID0gdGhpcywgc3Ryc2VlZCA9ICcnO1xuXG4gIG1lLnggPSAwO1xuICBtZS55ID0gMDtcbiAgbWUueiA9IDA7XG4gIG1lLncgPSAwO1xuXG4gIC8vIFNldCB1cCBnZW5lcmF0b3IgZnVuY3Rpb24uXG4gIG1lLm5leHQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgdCA9IG1lLnggXiAobWUueCA8PCAxMSk7XG4gICAgbWUueCA9IG1lLnk7XG4gICAgbWUueSA9IG1lLno7XG4gICAgbWUueiA9IG1lLnc7XG4gICAgcmV0dXJuIG1lLncgXj0gKG1lLncgPj4+IDE5KSBeIHQgXiAodCA+Pj4gOCk7XG4gIH07XG5cbiAgaWYgKHNlZWQgPT09IChzZWVkIHwgMCkpIHtcbiAgICAvLyBJbnRlZ2VyIHNlZWQuXG4gICAgbWUueCA9IHNlZWQ7XG4gIH0gZWxzZSB7XG4gICAgLy8gU3RyaW5nIHNlZWQuXG4gICAgc3Ryc2VlZCArPSBzZWVkO1xuICB9XG5cbiAgLy8gTWl4IGluIHN0cmluZyBzZWVkLCB0aGVuIGRpc2NhcmQgYW4gaW5pdGlhbCBiYXRjaCBvZiA2NCB2YWx1ZXMuXG4gIGZvciAodmFyIGsgPSAwOyBrIDwgc3Ryc2VlZC5sZW5ndGggKyA2NDsgaysrKSB7XG4gICAgbWUueCBePSBzdHJzZWVkLmNoYXJDb2RlQXQoaykgfCAwO1xuICAgIG1lLm5leHQoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjb3B5KGYsIHQpIHtcbiAgdC54ID0gZi54O1xuICB0LnkgPSBmLnk7XG4gIHQueiA9IGYuejtcbiAgdC53ID0gZi53O1xuICByZXR1cm4gdDtcbn1cblxuZnVuY3Rpb24gaW1wbChzZWVkLCBvcHRzKSB7XG4gIHZhciB4ZyA9IG5ldyBYb3JHZW4oc2VlZCksXG4gICAgICBzdGF0ZSA9IG9wdHMgJiYgb3B0cy5zdGF0ZSxcbiAgICAgIHBybmcgPSBmdW5jdGlvbigpIHsgcmV0dXJuICh4Zy5uZXh0KCkgPj4+IDApIC8gMHgxMDAwMDAwMDA7IH07XG4gIHBybmcuZG91YmxlID0gZnVuY3Rpb24oKSB7XG4gICAgZG8ge1xuICAgICAgdmFyIHRvcCA9IHhnLm5leHQoKSA+Pj4gMTEsXG4gICAgICAgICAgYm90ID0gKHhnLm5leHQoKSA+Pj4gMCkgLyAweDEwMDAwMDAwMCxcbiAgICAgICAgICByZXN1bHQgPSAodG9wICsgYm90KSAvICgxIDw8IDIxKTtcbiAgICB9IHdoaWxlIChyZXN1bHQgPT09IDApO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG4gIHBybmcuaW50MzIgPSB4Zy5uZXh0O1xuICBwcm5nLnF1aWNrID0gcHJuZztcbiAgaWYgKHN0YXRlKSB7XG4gICAgaWYgKHR5cGVvZihzdGF0ZSkgPT0gJ29iamVjdCcpIGNvcHkoc3RhdGUsIHhnKTtcbiAgICBwcm5nLnN0YXRlID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb3B5KHhnLCB7fSk7IH1cbiAgfVxuICByZXR1cm4gcHJuZztcbn1cblxuaWYgKG1vZHVsZSAmJiBtb2R1bGUuZXhwb3J0cykge1xuICBtb2R1bGUuZXhwb3J0cyA9IGltcGw7XG59IGVsc2UgaWYgKGRlZmluZSAmJiBkZWZpbmUuYW1kKSB7XG4gIGRlZmluZShmdW5jdGlvbigpIHsgcmV0dXJuIGltcGw7IH0pO1xufSBlbHNlIHtcbiAgdGhpcy54b3IxMjggPSBpbXBsO1xufVxuXG59KShcbiAgdGhpcyxcbiAgKHR5cGVvZiBtb2R1bGUpID09ICdvYmplY3QnICYmIG1vZHVsZSwgICAgLy8gcHJlc2VudCBpbiBub2RlLmpzXG4gICh0eXBlb2YgZGVmaW5lKSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZSAgIC8vIHByZXNlbnQgd2l0aCBhbiBBTUQgbG9hZGVyXG4pO1xuXG5cbiIsIi8vIEEgSmF2YXNjcmlwdCBpbXBsZW1lbnRhaW9uIG9mIFJpY2hhcmQgQnJlbnQncyBYb3JnZW5zIHhvcjQwOTYgYWxnb3JpdGhtLlxuLy9cbi8vIFRoaXMgZmFzdCBub24tY3J5cHRvZ3JhcGhpYyByYW5kb20gbnVtYmVyIGdlbmVyYXRvciBpcyBkZXNpZ25lZCBmb3Jcbi8vIHVzZSBpbiBNb250ZS1DYXJsbyBhbGdvcml0aG1zLiBJdCBjb21iaW5lcyBhIGxvbmctcGVyaW9kIHhvcnNoaWZ0XG4vLyBnZW5lcmF0b3Igd2l0aCBhIFdleWwgZ2VuZXJhdG9yLCBhbmQgaXQgcGFzc2VzIGFsbCBjb21tb24gYmF0dGVyaWVzXG4vLyBvZiBzdGFzdGljaWFsIHRlc3RzIGZvciByYW5kb21uZXNzIHdoaWxlIGNvbnN1bWluZyBvbmx5IGEgZmV3IG5hbm9zZWNvbmRzXG4vLyBmb3IgZWFjaCBwcm5nIGdlbmVyYXRlZC4gIEZvciBiYWNrZ3JvdW5kIG9uIHRoZSBnZW5lcmF0b3IsIHNlZSBCcmVudCdzXG4vLyBwYXBlcjogXCJTb21lIGxvbmctcGVyaW9kIHJhbmRvbSBudW1iZXIgZ2VuZXJhdG9ycyB1c2luZyBzaGlmdHMgYW5kIHhvcnMuXCJcbi8vIGh0dHA6Ly9hcnhpdi5vcmcvcGRmLzEwMDQuMzExNXYxLnBkZlxuLy9cbi8vIFVzYWdlOlxuLy9cbi8vIHZhciB4b3I0MDk2ID0gcmVxdWlyZSgneG9yNDA5NicpO1xuLy8gcmFuZG9tID0geG9yNDA5NigxKTsgICAgICAgICAgICAgICAgICAgICAgICAvLyBTZWVkIHdpdGggaW50MzIgb3Igc3RyaW5nLlxuLy8gYXNzZXJ0LmVxdWFsKHJhbmRvbSgpLCAwLjE1MjA0MzY0NTA1Mzg1NDcpOyAvLyAoMCwgMSkgcmFuZ2UsIDUzIGJpdHMuXG4vLyBhc3NlcnQuZXF1YWwocmFuZG9tLmludDMyKCksIDE4MDY1MzQ4OTcpOyAgIC8vIHNpZ25lZCBpbnQzMiwgMzIgYml0cy5cbi8vXG4vLyBGb3Igbm9uemVybyBudW1lcmljIGtleXMsIHRoaXMgaW1wZWxlbWVudGF0aW9uIHByb3ZpZGVzIGEgc2VxdWVuY2Vcbi8vIGlkZW50aWNhbCB0byB0aGF0IGJ5IEJyZW50J3MgeG9yZ2VucyAzIGltcGxlbWVudGFpb24gaW4gQy4gIFRoaXNcbi8vIGltcGxlbWVudGF0aW9uIGFsc28gcHJvdmlkZXMgZm9yIGluaXRhbGl6aW5nIHRoZSBnZW5lcmF0b3Igd2l0aFxuLy8gc3RyaW5nIHNlZWRzLCBvciBmb3Igc2F2aW5nIGFuZCByZXN0b3JpbmcgdGhlIHN0YXRlIG9mIHRoZSBnZW5lcmF0b3IuXG4vL1xuLy8gT24gQ2hyb21lLCB0aGlzIHBybmcgYmVuY2htYXJrcyBhYm91dCAyLjEgdGltZXMgc2xvd2VyIHRoYW5cbi8vIEphdmFzY3JpcHQncyBidWlsdC1pbiBNYXRoLnJhbmRvbSgpLlxuXG4oZnVuY3Rpb24oZ2xvYmFsLCBtb2R1bGUsIGRlZmluZSkge1xuXG5mdW5jdGlvbiBYb3JHZW4oc2VlZCkge1xuICB2YXIgbWUgPSB0aGlzO1xuXG4gIC8vIFNldCB1cCBnZW5lcmF0b3IgZnVuY3Rpb24uXG4gIG1lLm5leHQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgdyA9IG1lLncsXG4gICAgICAgIFggPSBtZS5YLCBpID0gbWUuaSwgdCwgdjtcbiAgICAvLyBVcGRhdGUgV2V5bCBnZW5lcmF0b3IuXG4gICAgbWUudyA9IHcgPSAodyArIDB4NjFjODg2NDcpIHwgMDtcbiAgICAvLyBVcGRhdGUgeG9yIGdlbmVyYXRvci5cbiAgICB2ID0gWFsoaSArIDM0KSAmIDEyN107XG4gICAgdCA9IFhbaSA9ICgoaSArIDEpICYgMTI3KV07XG4gICAgdiBePSB2IDw8IDEzO1xuICAgIHQgXj0gdCA8PCAxNztcbiAgICB2IF49IHYgPj4+IDE1O1xuICAgIHQgXj0gdCA+Pj4gMTI7XG4gICAgLy8gVXBkYXRlIFhvciBnZW5lcmF0b3IgYXJyYXkgc3RhdGUuXG4gICAgdiA9IFhbaV0gPSB2IF4gdDtcbiAgICBtZS5pID0gaTtcbiAgICAvLyBSZXN1bHQgaXMgdGhlIGNvbWJpbmF0aW9uLlxuICAgIHJldHVybiAodiArICh3IF4gKHcgPj4+IDE2KSkpIHwgMDtcbiAgfTtcblxuICBmdW5jdGlvbiBpbml0KG1lLCBzZWVkKSB7XG4gICAgdmFyIHQsIHYsIGksIGosIHcsIFggPSBbXSwgbGltaXQgPSAxMjg7XG4gICAgaWYgKHNlZWQgPT09IChzZWVkIHwgMCkpIHtcbiAgICAgIC8vIE51bWVyaWMgc2VlZHMgaW5pdGlhbGl6ZSB2LCB3aGljaCBpcyB1c2VkIHRvIGdlbmVyYXRlcyBYLlxuICAgICAgdiA9IHNlZWQ7XG4gICAgICBzZWVkID0gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gU3RyaW5nIHNlZWRzIGFyZSBtaXhlZCBpbnRvIHYgYW5kIFggb25lIGNoYXJhY3RlciBhdCBhIHRpbWUuXG4gICAgICBzZWVkID0gc2VlZCArICdcXDAnO1xuICAgICAgdiA9IDA7XG4gICAgICBsaW1pdCA9IE1hdGgubWF4KGxpbWl0LCBzZWVkLmxlbmd0aCk7XG4gICAgfVxuICAgIC8vIEluaXRpYWxpemUgY2lyY3VsYXIgYXJyYXkgYW5kIHdleWwgdmFsdWUuXG4gICAgZm9yIChpID0gMCwgaiA9IC0zMjsgaiA8IGxpbWl0OyArK2opIHtcbiAgICAgIC8vIFB1dCB0aGUgdW5pY29kZSBjaGFyYWN0ZXJzIGludG8gdGhlIGFycmF5LCBhbmQgc2h1ZmZsZSB0aGVtLlxuICAgICAgaWYgKHNlZWQpIHYgXj0gc2VlZC5jaGFyQ29kZUF0KChqICsgMzIpICUgc2VlZC5sZW5ndGgpO1xuICAgICAgLy8gQWZ0ZXIgMzIgc2h1ZmZsZXMsIHRha2UgdiBhcyB0aGUgc3RhcnRpbmcgdyB2YWx1ZS5cbiAgICAgIGlmIChqID09PSAwKSB3ID0gdjtcbiAgICAgIHYgXj0gdiA8PCAxMDtcbiAgICAgIHYgXj0gdiA+Pj4gMTU7XG4gICAgICB2IF49IHYgPDwgNDtcbiAgICAgIHYgXj0gdiA+Pj4gMTM7XG4gICAgICBpZiAoaiA+PSAwKSB7XG4gICAgICAgIHcgPSAodyArIDB4NjFjODg2NDcpIHwgMDsgICAgIC8vIFdleWwuXG4gICAgICAgIHQgPSAoWFtqICYgMTI3XSBePSAodiArIHcpKTsgIC8vIENvbWJpbmUgeG9yIGFuZCB3ZXlsIHRvIGluaXQgYXJyYXkuXG4gICAgICAgIGkgPSAoMCA9PSB0KSA/IGkgKyAxIDogMDsgICAgIC8vIENvdW50IHplcm9lcy5cbiAgICAgIH1cbiAgICB9XG4gICAgLy8gV2UgaGF2ZSBkZXRlY3RlZCBhbGwgemVyb2VzOyBtYWtlIHRoZSBrZXkgbm9uemVyby5cbiAgICBpZiAoaSA+PSAxMjgpIHtcbiAgICAgIFhbKHNlZWQgJiYgc2VlZC5sZW5ndGggfHwgMCkgJiAxMjddID0gLTE7XG4gICAgfVxuICAgIC8vIFJ1biB0aGUgZ2VuZXJhdG9yIDUxMiB0aW1lcyB0byBmdXJ0aGVyIG1peCB0aGUgc3RhdGUgYmVmb3JlIHVzaW5nIGl0LlxuICAgIC8vIEZhY3RvcmluZyB0aGlzIGFzIGEgZnVuY3Rpb24gc2xvd3MgdGhlIG1haW4gZ2VuZXJhdG9yLCBzbyBpdCBpcyBqdXN0XG4gICAgLy8gdW5yb2xsZWQgaGVyZS4gIFRoZSB3ZXlsIGdlbmVyYXRvciBpcyBub3QgYWR2YW5jZWQgd2hpbGUgd2FybWluZyB1cC5cbiAgICBpID0gMTI3O1xuICAgIGZvciAoaiA9IDQgKiAxMjg7IGogPiAwOyAtLWopIHtcbiAgICAgIHYgPSBYWyhpICsgMzQpICYgMTI3XTtcbiAgICAgIHQgPSBYW2kgPSAoKGkgKyAxKSAmIDEyNyldO1xuICAgICAgdiBePSB2IDw8IDEzO1xuICAgICAgdCBePSB0IDw8IDE3O1xuICAgICAgdiBePSB2ID4+PiAxNTtcbiAgICAgIHQgXj0gdCA+Pj4gMTI7XG4gICAgICBYW2ldID0gdiBeIHQ7XG4gICAgfVxuICAgIC8vIFN0b3Jpbmcgc3RhdGUgYXMgb2JqZWN0IG1lbWJlcnMgaXMgZmFzdGVyIHRoYW4gdXNpbmcgY2xvc3VyZSB2YXJpYWJsZXMuXG4gICAgbWUudyA9IHc7XG4gICAgbWUuWCA9IFg7XG4gICAgbWUuaSA9IGk7XG4gIH1cblxuICBpbml0KG1lLCBzZWVkKTtcbn1cblxuZnVuY3Rpb24gY29weShmLCB0KSB7XG4gIHQuaSA9IGYuaTtcbiAgdC53ID0gZi53O1xuICB0LlggPSBmLlguc2xpY2UoKTtcbiAgcmV0dXJuIHQ7XG59O1xuXG5mdW5jdGlvbiBpbXBsKHNlZWQsIG9wdHMpIHtcbiAgaWYgKHNlZWQgPT0gbnVsbCkgc2VlZCA9ICsobmV3IERhdGUpO1xuICB2YXIgeGcgPSBuZXcgWG9yR2VuKHNlZWQpLFxuICAgICAgc3RhdGUgPSBvcHRzICYmIG9wdHMuc3RhdGUsXG4gICAgICBwcm5nID0gZnVuY3Rpb24oKSB7IHJldHVybiAoeGcubmV4dCgpID4+PiAwKSAvIDB4MTAwMDAwMDAwOyB9O1xuICBwcm5nLmRvdWJsZSA9IGZ1bmN0aW9uKCkge1xuICAgIGRvIHtcbiAgICAgIHZhciB0b3AgPSB4Zy5uZXh0KCkgPj4+IDExLFxuICAgICAgICAgIGJvdCA9ICh4Zy5uZXh0KCkgPj4+IDApIC8gMHgxMDAwMDAwMDAsXG4gICAgICAgICAgcmVzdWx0ID0gKHRvcCArIGJvdCkgLyAoMSA8PCAyMSk7XG4gICAgfSB3aGlsZSAocmVzdWx0ID09PSAwKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuICBwcm5nLmludDMyID0geGcubmV4dDtcbiAgcHJuZy5xdWljayA9IHBybmc7XG4gIGlmIChzdGF0ZSkge1xuICAgIGlmIChzdGF0ZS5YKSBjb3B5KHN0YXRlLCB4Zyk7XG4gICAgcHJuZy5zdGF0ZSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29weSh4Zywge30pOyB9XG4gIH1cbiAgcmV0dXJuIHBybmc7XG59XG5cbmlmIChtb2R1bGUgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBpbXBsO1xufSBlbHNlIGlmIChkZWZpbmUgJiYgZGVmaW5lLmFtZCkge1xuICBkZWZpbmUoZnVuY3Rpb24oKSB7IHJldHVybiBpbXBsOyB9KTtcbn0gZWxzZSB7XG4gIHRoaXMueG9yNDA5NiA9IGltcGw7XG59XG5cbn0pKFxuICB0aGlzLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB3aW5kb3cgb2JqZWN0IG9yIGdsb2JhbFxuICAodHlwZW9mIG1vZHVsZSkgPT0gJ29iamVjdCcgJiYgbW9kdWxlLCAgICAvLyBwcmVzZW50IGluIG5vZGUuanNcbiAgKHR5cGVvZiBkZWZpbmUpID09ICdmdW5jdGlvbicgJiYgZGVmaW5lICAgLy8gcHJlc2VudCB3aXRoIGFuIEFNRCBsb2FkZXJcbik7XG4iLCIvLyBBIEphdmFzY3JpcHQgaW1wbGVtZW50YWlvbiBvZiB0aGUgXCJ4b3JzaGlmdDdcIiBhbGdvcml0aG0gYnlcbi8vIEZyYW7Dp29pcyBQYW5uZXRvbiBhbmQgUGllcnJlIEwnZWN1eWVyOlxuLy8gXCJPbiB0aGUgWG9yZ3NoaWZ0IFJhbmRvbSBOdW1iZXIgR2VuZXJhdG9yc1wiXG4vLyBodHRwOi8vc2FsdWMuZW5nci51Y29ubi5lZHUvcmVmcy9jcnlwdG8vcm5nL3Bhbm5ldG9uMDVvbnRoZXhvcnNoaWZ0LnBkZlxuXG4oZnVuY3Rpb24oZ2xvYmFsLCBtb2R1bGUsIGRlZmluZSkge1xuXG5mdW5jdGlvbiBYb3JHZW4oc2VlZCkge1xuICB2YXIgbWUgPSB0aGlzO1xuXG4gIC8vIFNldCB1cCBnZW5lcmF0b3IgZnVuY3Rpb24uXG4gIG1lLm5leHQgPSBmdW5jdGlvbigpIHtcbiAgICAvLyBVcGRhdGUgeG9yIGdlbmVyYXRvci5cbiAgICB2YXIgWCA9IG1lLngsIGkgPSBtZS5pLCB0LCB2LCB3O1xuICAgIHQgPSBYW2ldOyB0IF49ICh0ID4+PiA3KTsgdiA9IHQgXiAodCA8PCAyNCk7XG4gICAgdCA9IFhbKGkgKyAxKSAmIDddOyB2IF49IHQgXiAodCA+Pj4gMTApO1xuICAgIHQgPSBYWyhpICsgMykgJiA3XTsgdiBePSB0IF4gKHQgPj4+IDMpO1xuICAgIHQgPSBYWyhpICsgNCkgJiA3XTsgdiBePSB0IF4gKHQgPDwgNyk7XG4gICAgdCA9IFhbKGkgKyA3KSAmIDddOyB0ID0gdCBeICh0IDw8IDEzKTsgdiBePSB0IF4gKHQgPDwgOSk7XG4gICAgWFtpXSA9IHY7XG4gICAgbWUuaSA9IChpICsgMSkgJiA3O1xuICAgIHJldHVybiB2O1xuICB9O1xuXG4gIGZ1bmN0aW9uIGluaXQobWUsIHNlZWQpIHtcbiAgICB2YXIgaiwgdywgWCA9IFtdO1xuXG4gICAgaWYgKHNlZWQgPT09IChzZWVkIHwgMCkpIHtcbiAgICAgIC8vIFNlZWQgc3RhdGUgYXJyYXkgdXNpbmcgYSAzMi1iaXQgaW50ZWdlci5cbiAgICAgIHcgPSBYWzBdID0gc2VlZDtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gU2VlZCBzdGF0ZSB1c2luZyBhIHN0cmluZy5cbiAgICAgIHNlZWQgPSAnJyArIHNlZWQ7XG4gICAgICBmb3IgKGogPSAwOyBqIDwgc2VlZC5sZW5ndGg7ICsraikge1xuICAgICAgICBYW2ogJiA3XSA9IChYW2ogJiA3XSA8PCAxNSkgXlxuICAgICAgICAgICAgKHNlZWQuY2hhckNvZGVBdChqKSArIFhbKGogKyAxKSAmIDddIDw8IDEzKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gRW5mb3JjZSBhbiBhcnJheSBsZW5ndGggb2YgOCwgbm90IGFsbCB6ZXJvZXMuXG4gICAgd2hpbGUgKFgubGVuZ3RoIDwgOCkgWC5wdXNoKDApO1xuICAgIGZvciAoaiA9IDA7IGogPCA4ICYmIFhbal0gPT09IDA7ICsraik7XG4gICAgaWYgKGogPT0gOCkgdyA9IFhbN10gPSAtMTsgZWxzZSB3ID0gWFtqXTtcblxuICAgIG1lLnggPSBYO1xuICAgIG1lLmkgPSAwO1xuXG4gICAgLy8gRGlzY2FyZCBhbiBpbml0aWFsIDI1NiB2YWx1ZXMuXG4gICAgZm9yIChqID0gMjU2OyBqID4gMDsgLS1qKSB7XG4gICAgICBtZS5uZXh0KCk7XG4gICAgfVxuICB9XG5cbiAgaW5pdChtZSwgc2VlZCk7XG59XG5cbmZ1bmN0aW9uIGNvcHkoZiwgdCkge1xuICB0LnggPSBmLnguc2xpY2UoKTtcbiAgdC5pID0gZi5pO1xuICByZXR1cm4gdDtcbn1cblxuZnVuY3Rpb24gaW1wbChzZWVkLCBvcHRzKSB7XG4gIGlmIChzZWVkID09IG51bGwpIHNlZWQgPSArKG5ldyBEYXRlKTtcbiAgdmFyIHhnID0gbmV3IFhvckdlbihzZWVkKSxcbiAgICAgIHN0YXRlID0gb3B0cyAmJiBvcHRzLnN0YXRlLFxuICAgICAgcHJuZyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gKHhnLm5leHQoKSA+Pj4gMCkgLyAweDEwMDAwMDAwMDsgfTtcbiAgcHJuZy5kb3VibGUgPSBmdW5jdGlvbigpIHtcbiAgICBkbyB7XG4gICAgICB2YXIgdG9wID0geGcubmV4dCgpID4+PiAxMSxcbiAgICAgICAgICBib3QgPSAoeGcubmV4dCgpID4+PiAwKSAvIDB4MTAwMDAwMDAwLFxuICAgICAgICAgIHJlc3VsdCA9ICh0b3AgKyBib3QpIC8gKDEgPDwgMjEpO1xuICAgIH0gd2hpbGUgKHJlc3VsdCA9PT0gMCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbiAgcHJuZy5pbnQzMiA9IHhnLm5leHQ7XG4gIHBybmcucXVpY2sgPSBwcm5nO1xuICBpZiAoc3RhdGUpIHtcbiAgICBpZiAoc3RhdGUueCkgY29weShzdGF0ZSwgeGcpO1xuICAgIHBybmcuc3RhdGUgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvcHkoeGcsIHt9KTsgfVxuICB9XG4gIHJldHVybiBwcm5nO1xufVxuXG5pZiAobW9kdWxlICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gaW1wbDtcbn0gZWxzZSBpZiAoZGVmaW5lICYmIGRlZmluZS5hbWQpIHtcbiAgZGVmaW5lKGZ1bmN0aW9uKCkgeyByZXR1cm4gaW1wbDsgfSk7XG59IGVsc2Uge1xuICB0aGlzLnhvcnNoaWZ0NyA9IGltcGw7XG59XG5cbn0pKFxuICB0aGlzLFxuICAodHlwZW9mIG1vZHVsZSkgPT0gJ29iamVjdCcgJiYgbW9kdWxlLCAgICAvLyBwcmVzZW50IGluIG5vZGUuanNcbiAgKHR5cGVvZiBkZWZpbmUpID09ICdmdW5jdGlvbicgJiYgZGVmaW5lICAgLy8gcHJlc2VudCB3aXRoIGFuIEFNRCBsb2FkZXJcbik7XG5cbiIsIi8vIEEgSmF2YXNjcmlwdCBpbXBsZW1lbnRhaW9uIG9mIHRoZSBcInhvcndvd1wiIHBybmcgYWxnb3JpdGhtIGJ5XG4vLyBHZW9yZ2UgTWFyc2FnbGlhLiAgU2VlIGh0dHA6Ly93d3cuanN0YXRzb2Z0Lm9yZy92MDgvaTE0L3BhcGVyXG5cbihmdW5jdGlvbihnbG9iYWwsIG1vZHVsZSwgZGVmaW5lKSB7XG5cbmZ1bmN0aW9uIFhvckdlbihzZWVkKSB7XG4gIHZhciBtZSA9IHRoaXMsIHN0cnNlZWQgPSAnJztcblxuICAvLyBTZXQgdXAgZ2VuZXJhdG9yIGZ1bmN0aW9uLlxuICBtZS5uZXh0ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHQgPSAobWUueCBeIChtZS54ID4+PiAyKSk7XG4gICAgbWUueCA9IG1lLnk7IG1lLnkgPSBtZS56OyBtZS56ID0gbWUudzsgbWUudyA9IG1lLnY7XG4gICAgcmV0dXJuIChtZS5kID0gKG1lLmQgKyAzNjI0MzcgfCAwKSkgK1xuICAgICAgIChtZS52ID0gKG1lLnYgXiAobWUudiA8PCA0KSkgXiAodCBeICh0IDw8IDEpKSkgfCAwO1xuICB9O1xuXG4gIG1lLnggPSAwO1xuICBtZS55ID0gMDtcbiAgbWUueiA9IDA7XG4gIG1lLncgPSAwO1xuICBtZS52ID0gMDtcblxuICBpZiAoc2VlZCA9PT0gKHNlZWQgfCAwKSkge1xuICAgIC8vIEludGVnZXIgc2VlZC5cbiAgICBtZS54ID0gc2VlZDtcbiAgfSBlbHNlIHtcbiAgICAvLyBTdHJpbmcgc2VlZC5cbiAgICBzdHJzZWVkICs9IHNlZWQ7XG4gIH1cblxuICAvLyBNaXggaW4gc3RyaW5nIHNlZWQsIHRoZW4gZGlzY2FyZCBhbiBpbml0aWFsIGJhdGNoIG9mIDY0IHZhbHVlcy5cbiAgZm9yICh2YXIgayA9IDA7IGsgPCBzdHJzZWVkLmxlbmd0aCArIDY0OyBrKyspIHtcbiAgICBtZS54IF49IHN0cnNlZWQuY2hhckNvZGVBdChrKSB8IDA7XG4gICAgaWYgKGsgPT0gc3Ryc2VlZC5sZW5ndGgpIHtcbiAgICAgIG1lLmQgPSBtZS54IDw8IDEwIF4gbWUueCA+Pj4gNDtcbiAgICB9XG4gICAgbWUubmV4dCgpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNvcHkoZiwgdCkge1xuICB0LnggPSBmLng7XG4gIHQueSA9IGYueTtcbiAgdC56ID0gZi56O1xuICB0LncgPSBmLnc7XG4gIHQudiA9IGYudjtcbiAgdC5kID0gZi5kO1xuICByZXR1cm4gdDtcbn1cblxuZnVuY3Rpb24gaW1wbChzZWVkLCBvcHRzKSB7XG4gIHZhciB4ZyA9IG5ldyBYb3JHZW4oc2VlZCksXG4gICAgICBzdGF0ZSA9IG9wdHMgJiYgb3B0cy5zdGF0ZSxcbiAgICAgIHBybmcgPSBmdW5jdGlvbigpIHsgcmV0dXJuICh4Zy5uZXh0KCkgPj4+IDApIC8gMHgxMDAwMDAwMDA7IH07XG4gIHBybmcuZG91YmxlID0gZnVuY3Rpb24oKSB7XG4gICAgZG8ge1xuICAgICAgdmFyIHRvcCA9IHhnLm5leHQoKSA+Pj4gMTEsXG4gICAgICAgICAgYm90ID0gKHhnLm5leHQoKSA+Pj4gMCkgLyAweDEwMDAwMDAwMCxcbiAgICAgICAgICByZXN1bHQgPSAodG9wICsgYm90KSAvICgxIDw8IDIxKTtcbiAgICB9IHdoaWxlIChyZXN1bHQgPT09IDApO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG4gIHBybmcuaW50MzIgPSB4Zy5uZXh0O1xuICBwcm5nLnF1aWNrID0gcHJuZztcbiAgaWYgKHN0YXRlKSB7XG4gICAgaWYgKHR5cGVvZihzdGF0ZSkgPT0gJ29iamVjdCcpIGNvcHkoc3RhdGUsIHhnKTtcbiAgICBwcm5nLnN0YXRlID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb3B5KHhnLCB7fSk7IH1cbiAgfVxuICByZXR1cm4gcHJuZztcbn1cblxuaWYgKG1vZHVsZSAmJiBtb2R1bGUuZXhwb3J0cykge1xuICBtb2R1bGUuZXhwb3J0cyA9IGltcGw7XG59IGVsc2UgaWYgKGRlZmluZSAmJiBkZWZpbmUuYW1kKSB7XG4gIGRlZmluZShmdW5jdGlvbigpIHsgcmV0dXJuIGltcGw7IH0pO1xufSBlbHNlIHtcbiAgdGhpcy54b3J3b3cgPSBpbXBsO1xufVxuXG59KShcbiAgdGhpcyxcbiAgKHR5cGVvZiBtb2R1bGUpID09ICdvYmplY3QnICYmIG1vZHVsZSwgICAgLy8gcHJlc2VudCBpbiBub2RlLmpzXG4gICh0eXBlb2YgZGVmaW5lKSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZSAgIC8vIHByZXNlbnQgd2l0aCBhbiBBTUQgbG9hZGVyXG4pO1xuXG5cbiIsIi8qXG5Db3B5cmlnaHQgMjAxNCBEYXZpZCBCYXUuXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZ1xuYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG5cIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbndpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbmRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0b1xucGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvXG50aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlXG5pbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCxcbkVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULlxuSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTllcbkNMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsXG5UT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRVxuU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbiovXG5cbihmdW5jdGlvbiAocG9vbCwgbWF0aCkge1xuLy9cbi8vIFRoZSBmb2xsb3dpbmcgY29uc3RhbnRzIGFyZSByZWxhdGVkIHRvIElFRUUgNzU0IGxpbWl0cy5cbi8vXG5cbi8vIERldGVjdCB0aGUgZ2xvYmFsIG9iamVjdCwgZXZlbiBpZiBvcGVyYXRpbmcgaW4gc3RyaWN0IG1vZGUuXG4vLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8xNDM4NzA1Ny8yNjUyOThcbnZhciBnbG9iYWwgPSAoMCwgZXZhbCkoJ3RoaXMnKSxcbiAgICB3aWR0aCA9IDI1NiwgICAgICAgIC8vIGVhY2ggUkM0IG91dHB1dCBpcyAwIDw9IHggPCAyNTZcbiAgICBjaHVua3MgPSA2LCAgICAgICAgIC8vIGF0IGxlYXN0IHNpeCBSQzQgb3V0cHV0cyBmb3IgZWFjaCBkb3VibGVcbiAgICBkaWdpdHMgPSA1MiwgICAgICAgIC8vIHRoZXJlIGFyZSA1MiBzaWduaWZpY2FudCBkaWdpdHMgaW4gYSBkb3VibGVcbiAgICBybmduYW1lID0gJ3JhbmRvbScsIC8vIHJuZ25hbWU6IG5hbWUgZm9yIE1hdGgucmFuZG9tIGFuZCBNYXRoLnNlZWRyYW5kb21cbiAgICBzdGFydGRlbm9tID0gbWF0aC5wb3cod2lkdGgsIGNodW5rcyksXG4gICAgc2lnbmlmaWNhbmNlID0gbWF0aC5wb3coMiwgZGlnaXRzKSxcbiAgICBvdmVyZmxvdyA9IHNpZ25pZmljYW5jZSAqIDIsXG4gICAgbWFzayA9IHdpZHRoIC0gMSxcbiAgICBub2RlY3J5cHRvOyAgICAgICAgIC8vIG5vZGUuanMgY3J5cHRvIG1vZHVsZSwgaW5pdGlhbGl6ZWQgYXQgdGhlIGJvdHRvbS5cblxuLy9cbi8vIHNlZWRyYW5kb20oKVxuLy8gVGhpcyBpcyB0aGUgc2VlZHJhbmRvbSBmdW5jdGlvbiBkZXNjcmliZWQgYWJvdmUuXG4vL1xuZnVuY3Rpb24gc2VlZHJhbmRvbShzZWVkLCBvcHRpb25zLCBjYWxsYmFjaykge1xuICB2YXIga2V5ID0gW107XG4gIG9wdGlvbnMgPSAob3B0aW9ucyA9PSB0cnVlKSA/IHsgZW50cm9weTogdHJ1ZSB9IDogKG9wdGlvbnMgfHwge30pO1xuXG4gIC8vIEZsYXR0ZW4gdGhlIHNlZWQgc3RyaW5nIG9yIGJ1aWxkIG9uZSBmcm9tIGxvY2FsIGVudHJvcHkgaWYgbmVlZGVkLlxuICB2YXIgc2hvcnRzZWVkID0gbWl4a2V5KGZsYXR0ZW4oXG4gICAgb3B0aW9ucy5lbnRyb3B5ID8gW3NlZWQsIHRvc3RyaW5nKHBvb2wpXSA6XG4gICAgKHNlZWQgPT0gbnVsbCkgPyBhdXRvc2VlZCgpIDogc2VlZCwgMyksIGtleSk7XG5cbiAgLy8gVXNlIHRoZSBzZWVkIHRvIGluaXRpYWxpemUgYW4gQVJDNCBnZW5lcmF0b3IuXG4gIHZhciBhcmM0ID0gbmV3IEFSQzQoa2V5KTtcblxuICAvLyBUaGlzIGZ1bmN0aW9uIHJldHVybnMgYSByYW5kb20gZG91YmxlIGluIFswLCAxKSB0aGF0IGNvbnRhaW5zXG4gIC8vIHJhbmRvbW5lc3MgaW4gZXZlcnkgYml0IG9mIHRoZSBtYW50aXNzYSBvZiB0aGUgSUVFRSA3NTQgdmFsdWUuXG4gIHZhciBwcm5nID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIG4gPSBhcmM0LmcoY2h1bmtzKSwgICAgICAgICAgICAgLy8gU3RhcnQgd2l0aCBhIG51bWVyYXRvciBuIDwgMiBeIDQ4XG4gICAgICAgIGQgPSBzdGFydGRlbm9tLCAgICAgICAgICAgICAgICAgLy8gICBhbmQgZGVub21pbmF0b3IgZCA9IDIgXiA0OC5cbiAgICAgICAgeCA9IDA7ICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgIGFuZCBubyAnZXh0cmEgbGFzdCBieXRlJy5cbiAgICB3aGlsZSAobiA8IHNpZ25pZmljYW5jZSkgeyAgICAgICAgICAvLyBGaWxsIHVwIGFsbCBzaWduaWZpY2FudCBkaWdpdHMgYnlcbiAgICAgIG4gPSAobiArIHgpICogd2lkdGg7ICAgICAgICAgICAgICAvLyAgIHNoaWZ0aW5nIG51bWVyYXRvciBhbmRcbiAgICAgIGQgKj0gd2lkdGg7ICAgICAgICAgICAgICAgICAgICAgICAvLyAgIGRlbm9taW5hdG9yIGFuZCBnZW5lcmF0aW5nIGFcbiAgICAgIHggPSBhcmM0LmcoMSk7ICAgICAgICAgICAgICAgICAgICAvLyAgIG5ldyBsZWFzdC1zaWduaWZpY2FudC1ieXRlLlxuICAgIH1cbiAgICB3aGlsZSAobiA+PSBvdmVyZmxvdykgeyAgICAgICAgICAgICAvLyBUbyBhdm9pZCByb3VuZGluZyB1cCwgYmVmb3JlIGFkZGluZ1xuICAgICAgbiAvPSAyOyAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgbGFzdCBieXRlLCBzaGlmdCBldmVyeXRoaW5nXG4gICAgICBkIC89IDI7ICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICByaWdodCB1c2luZyBpbnRlZ2VyIG1hdGggdW50aWxcbiAgICAgIHggPj4+PSAxOyAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgIHdlIGhhdmUgZXhhY3RseSB0aGUgZGVzaXJlZCBiaXRzLlxuICAgIH1cbiAgICByZXR1cm4gKG4gKyB4KSAvIGQ7ICAgICAgICAgICAgICAgICAvLyBGb3JtIHRoZSBudW1iZXIgd2l0aGluIFswLCAxKS5cbiAgfTtcblxuICBwcm5nLmludDMyID0gZnVuY3Rpb24oKSB7IHJldHVybiBhcmM0LmcoNCkgfCAwOyB9XG4gIHBybmcucXVpY2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGFyYzQuZyg0KSAvIDB4MTAwMDAwMDAwOyB9XG4gIHBybmcuZG91YmxlID0gcHJuZztcblxuICAvLyBNaXggdGhlIHJhbmRvbW5lc3MgaW50byBhY2N1bXVsYXRlZCBlbnRyb3B5LlxuICBtaXhrZXkodG9zdHJpbmcoYXJjNC5TKSwgcG9vbCk7XG5cbiAgLy8gQ2FsbGluZyBjb252ZW50aW9uOiB3aGF0IHRvIHJldHVybiBhcyBhIGZ1bmN0aW9uIG9mIHBybmcsIHNlZWQsIGlzX21hdGguXG4gIHJldHVybiAob3B0aW9ucy5wYXNzIHx8IGNhbGxiYWNrIHx8XG4gICAgICBmdW5jdGlvbihwcm5nLCBzZWVkLCBpc19tYXRoX2NhbGwsIHN0YXRlKSB7XG4gICAgICAgIGlmIChzdGF0ZSkge1xuICAgICAgICAgIC8vIExvYWQgdGhlIGFyYzQgc3RhdGUgZnJvbSB0aGUgZ2l2ZW4gc3RhdGUgaWYgaXQgaGFzIGFuIFMgYXJyYXkuXG4gICAgICAgICAgaWYgKHN0YXRlLlMpIHsgY29weShzdGF0ZSwgYXJjNCk7IH1cbiAgICAgICAgICAvLyBPbmx5IHByb3ZpZGUgdGhlIC5zdGF0ZSBtZXRob2QgaWYgcmVxdWVzdGVkIHZpYSBvcHRpb25zLnN0YXRlLlxuICAgICAgICAgIHBybmcuc3RhdGUgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvcHkoYXJjNCwge30pOyB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiBjYWxsZWQgYXMgYSBtZXRob2Qgb2YgTWF0aCAoTWF0aC5zZWVkcmFuZG9tKCkpLCBtdXRhdGVcbiAgICAgICAgLy8gTWF0aC5yYW5kb20gYmVjYXVzZSB0aGF0IGlzIGhvdyBzZWVkcmFuZG9tLmpzIGhhcyB3b3JrZWQgc2luY2UgdjEuMC5cbiAgICAgICAgaWYgKGlzX21hdGhfY2FsbCkgeyBtYXRoW3JuZ25hbWVdID0gcHJuZzsgcmV0dXJuIHNlZWQ7IH1cblxuICAgICAgICAvLyBPdGhlcndpc2UsIGl0IGlzIGEgbmV3ZXIgY2FsbGluZyBjb252ZW50aW9uLCBzbyByZXR1cm4gdGhlXG4gICAgICAgIC8vIHBybmcgZGlyZWN0bHkuXG4gICAgICAgIGVsc2UgcmV0dXJuIHBybmc7XG4gICAgICB9KShcbiAgcHJuZyxcbiAgc2hvcnRzZWVkLFxuICAnZ2xvYmFsJyBpbiBvcHRpb25zID8gb3B0aW9ucy5nbG9iYWwgOiAodGhpcyA9PSBtYXRoKSxcbiAgb3B0aW9ucy5zdGF0ZSk7XG59XG5tYXRoWydzZWVkJyArIHJuZ25hbWVdID0gc2VlZHJhbmRvbTtcblxuLy9cbi8vIEFSQzRcbi8vXG4vLyBBbiBBUkM0IGltcGxlbWVudGF0aW9uLiAgVGhlIGNvbnN0cnVjdG9yIHRha2VzIGEga2V5IGluIHRoZSBmb3JtIG9mXG4vLyBhbiBhcnJheSBvZiBhdCBtb3N0ICh3aWR0aCkgaW50ZWdlcnMgdGhhdCBzaG91bGQgYmUgMCA8PSB4IDwgKHdpZHRoKS5cbi8vXG4vLyBUaGUgZyhjb3VudCkgbWV0aG9kIHJldHVybnMgYSBwc2V1ZG9yYW5kb20gaW50ZWdlciB0aGF0IGNvbmNhdGVuYXRlc1xuLy8gdGhlIG5leHQgKGNvdW50KSBvdXRwdXRzIGZyb20gQVJDNC4gIEl0cyByZXR1cm4gdmFsdWUgaXMgYSBudW1iZXIgeFxuLy8gdGhhdCBpcyBpbiB0aGUgcmFuZ2UgMCA8PSB4IDwgKHdpZHRoIF4gY291bnQpLlxuLy9cbmZ1bmN0aW9uIEFSQzQoa2V5KSB7XG4gIHZhciB0LCBrZXlsZW4gPSBrZXkubGVuZ3RoLFxuICAgICAgbWUgPSB0aGlzLCBpID0gMCwgaiA9IG1lLmkgPSBtZS5qID0gMCwgcyA9IG1lLlMgPSBbXTtcblxuICAvLyBUaGUgZW1wdHkga2V5IFtdIGlzIHRyZWF0ZWQgYXMgWzBdLlxuICBpZiAoIWtleWxlbikgeyBrZXkgPSBba2V5bGVuKytdOyB9XG5cbiAgLy8gU2V0IHVwIFMgdXNpbmcgdGhlIHN0YW5kYXJkIGtleSBzY2hlZHVsaW5nIGFsZ29yaXRobS5cbiAgd2hpbGUgKGkgPCB3aWR0aCkge1xuICAgIHNbaV0gPSBpKys7XG4gIH1cbiAgZm9yIChpID0gMDsgaSA8IHdpZHRoOyBpKyspIHtcbiAgICBzW2ldID0gc1tqID0gbWFzayAmIChqICsga2V5W2kgJSBrZXlsZW5dICsgKHQgPSBzW2ldKSldO1xuICAgIHNbal0gPSB0O1xuICB9XG5cbiAgLy8gVGhlIFwiZ1wiIG1ldGhvZCByZXR1cm5zIHRoZSBuZXh0IChjb3VudCkgb3V0cHV0cyBhcyBvbmUgbnVtYmVyLlxuICAobWUuZyA9IGZ1bmN0aW9uKGNvdW50KSB7XG4gICAgLy8gVXNpbmcgaW5zdGFuY2UgbWVtYmVycyBpbnN0ZWFkIG9mIGNsb3N1cmUgc3RhdGUgbmVhcmx5IGRvdWJsZXMgc3BlZWQuXG4gICAgdmFyIHQsIHIgPSAwLFxuICAgICAgICBpID0gbWUuaSwgaiA9IG1lLmosIHMgPSBtZS5TO1xuICAgIHdoaWxlIChjb3VudC0tKSB7XG4gICAgICB0ID0gc1tpID0gbWFzayAmIChpICsgMSldO1xuICAgICAgciA9IHIgKiB3aWR0aCArIHNbbWFzayAmICgoc1tpXSA9IHNbaiA9IG1hc2sgJiAoaiArIHQpXSkgKyAoc1tqXSA9IHQpKV07XG4gICAgfVxuICAgIG1lLmkgPSBpOyBtZS5qID0gajtcbiAgICByZXR1cm4gcjtcbiAgICAvLyBGb3Igcm9idXN0IHVucHJlZGljdGFiaWxpdHksIHRoZSBmdW5jdGlvbiBjYWxsIGJlbG93IGF1dG9tYXRpY2FsbHlcbiAgICAvLyBkaXNjYXJkcyBhbiBpbml0aWFsIGJhdGNoIG9mIHZhbHVlcy4gIFRoaXMgaXMgY2FsbGVkIFJDNC1kcm9wWzI1Nl0uXG4gICAgLy8gU2VlIGh0dHA6Ly9nb29nbGUuY29tL3NlYXJjaD9xPXJzYStmbHVocmVyK3Jlc3BvbnNlJmJ0bklcbiAgfSkod2lkdGgpO1xufVxuXG4vL1xuLy8gY29weSgpXG4vLyBDb3BpZXMgaW50ZXJuYWwgc3RhdGUgb2YgQVJDNCB0byBvciBmcm9tIGEgcGxhaW4gb2JqZWN0LlxuLy9cbmZ1bmN0aW9uIGNvcHkoZiwgdCkge1xuICB0LmkgPSBmLmk7XG4gIHQuaiA9IGYuajtcbiAgdC5TID0gZi5TLnNsaWNlKCk7XG4gIHJldHVybiB0O1xufTtcblxuLy9cbi8vIGZsYXR0ZW4oKVxuLy8gQ29udmVydHMgYW4gb2JqZWN0IHRyZWUgdG8gbmVzdGVkIGFycmF5cyBvZiBzdHJpbmdzLlxuLy9cbmZ1bmN0aW9uIGZsYXR0ZW4ob2JqLCBkZXB0aCkge1xuICB2YXIgcmVzdWx0ID0gW10sIHR5cCA9ICh0eXBlb2Ygb2JqKSwgcHJvcDtcbiAgaWYgKGRlcHRoICYmIHR5cCA9PSAnb2JqZWN0Jykge1xuICAgIGZvciAocHJvcCBpbiBvYmopIHtcbiAgICAgIHRyeSB7IHJlc3VsdC5wdXNoKGZsYXR0ZW4ob2JqW3Byb3BdLCBkZXB0aCAtIDEpKTsgfSBjYXRjaCAoZSkge31cbiAgICB9XG4gIH1cbiAgcmV0dXJuIChyZXN1bHQubGVuZ3RoID8gcmVzdWx0IDogdHlwID09ICdzdHJpbmcnID8gb2JqIDogb2JqICsgJ1xcMCcpO1xufVxuXG4vL1xuLy8gbWl4a2V5KClcbi8vIE1peGVzIGEgc3RyaW5nIHNlZWQgaW50byBhIGtleSB0aGF0IGlzIGFuIGFycmF5IG9mIGludGVnZXJzLCBhbmRcbi8vIHJldHVybnMgYSBzaG9ydGVuZWQgc3RyaW5nIHNlZWQgdGhhdCBpcyBlcXVpdmFsZW50IHRvIHRoZSByZXN1bHQga2V5LlxuLy9cbmZ1bmN0aW9uIG1peGtleShzZWVkLCBrZXkpIHtcbiAgdmFyIHN0cmluZ3NlZWQgPSBzZWVkICsgJycsIHNtZWFyLCBqID0gMDtcbiAgd2hpbGUgKGogPCBzdHJpbmdzZWVkLmxlbmd0aCkge1xuICAgIGtleVttYXNrICYgal0gPVxuICAgICAgbWFzayAmICgoc21lYXIgXj0ga2V5W21hc2sgJiBqXSAqIDE5KSArIHN0cmluZ3NlZWQuY2hhckNvZGVBdChqKyspKTtcbiAgfVxuICByZXR1cm4gdG9zdHJpbmcoa2V5KTtcbn1cblxuLy9cbi8vIGF1dG9zZWVkKClcbi8vIFJldHVybnMgYW4gb2JqZWN0IGZvciBhdXRvc2VlZGluZywgdXNpbmcgd2luZG93LmNyeXB0byBhbmQgTm9kZSBjcnlwdG9cbi8vIG1vZHVsZSBpZiBhdmFpbGFibGUuXG4vL1xuZnVuY3Rpb24gYXV0b3NlZWQoKSB7XG4gIHRyeSB7XG4gICAgdmFyIG91dDtcbiAgICBpZiAobm9kZWNyeXB0byAmJiAob3V0ID0gbm9kZWNyeXB0by5yYW5kb21CeXRlcykpIHtcbiAgICAgIC8vIFRoZSB1c2Ugb2YgJ291dCcgdG8gcmVtZW1iZXIgcmFuZG9tQnl0ZXMgbWFrZXMgdGlnaHQgbWluaWZpZWQgY29kZS5cbiAgICAgIG91dCA9IG91dCh3aWR0aCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG91dCA9IG5ldyBVaW50OEFycmF5KHdpZHRoKTtcbiAgICAgIChnbG9iYWwuY3J5cHRvIHx8IGdsb2JhbC5tc0NyeXB0bykuZ2V0UmFuZG9tVmFsdWVzKG91dCk7XG4gICAgfVxuICAgIHJldHVybiB0b3N0cmluZyhvdXQpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgdmFyIGJyb3dzZXIgPSBnbG9iYWwubmF2aWdhdG9yLFxuICAgICAgICBwbHVnaW5zID0gYnJvd3NlciAmJiBicm93c2VyLnBsdWdpbnM7XG4gICAgcmV0dXJuIFsrbmV3IERhdGUsIGdsb2JhbCwgcGx1Z2lucywgZ2xvYmFsLnNjcmVlbiwgdG9zdHJpbmcocG9vbCldO1xuICB9XG59XG5cbi8vXG4vLyB0b3N0cmluZygpXG4vLyBDb252ZXJ0cyBhbiBhcnJheSBvZiBjaGFyY29kZXMgdG8gYSBzdHJpbmdcbi8vXG5mdW5jdGlvbiB0b3N0cmluZyhhKSB7XG4gIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KDAsIGEpO1xufVxuXG4vL1xuLy8gV2hlbiBzZWVkcmFuZG9tLmpzIGlzIGxvYWRlZCwgd2UgaW1tZWRpYXRlbHkgbWl4IGEgZmV3IGJpdHNcbi8vIGZyb20gdGhlIGJ1aWx0LWluIFJORyBpbnRvIHRoZSBlbnRyb3B5IHBvb2wuICBCZWNhdXNlIHdlIGRvXG4vLyBub3Qgd2FudCB0byBpbnRlcmZlcmUgd2l0aCBkZXRlcm1pbmlzdGljIFBSTkcgc3RhdGUgbGF0ZXIsXG4vLyBzZWVkcmFuZG9tIHdpbGwgbm90IGNhbGwgbWF0aC5yYW5kb20gb24gaXRzIG93biBhZ2FpbiBhZnRlclxuLy8gaW5pdGlhbGl6YXRpb24uXG4vL1xubWl4a2V5KG1hdGgucmFuZG9tKCksIHBvb2wpO1xuXG4vL1xuLy8gTm9kZWpzIGFuZCBBTUQgc3VwcG9ydDogZXhwb3J0IHRoZSBpbXBsZW1lbnRhdGlvbiBhcyBhIG1vZHVsZSB1c2luZ1xuLy8gZWl0aGVyIGNvbnZlbnRpb24uXG4vL1xuaWYgKCh0eXBlb2YgbW9kdWxlKSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHNlZWRyYW5kb207XG4gIC8vIFdoZW4gaW4gbm9kZS5qcywgdHJ5IHVzaW5nIGNyeXB0byBwYWNrYWdlIGZvciBhdXRvc2VlZGluZy5cbiAgdHJ5IHtcbiAgICBub2RlY3J5cHRvID0gcmVxdWlyZSgnY3J5cHRvJyk7XG4gIH0gY2F0Y2ggKGV4KSB7fVxufSBlbHNlIGlmICgodHlwZW9mIGRlZmluZSkgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gIGRlZmluZShmdW5jdGlvbigpIHsgcmV0dXJuIHNlZWRyYW5kb207IH0pO1xufVxuXG4vLyBFbmQgYW5vbnltb3VzIHNjb3BlLCBhbmQgcGFzcyBpbml0aWFsIHZhbHVlcy5cbn0pKFxuICBbXSwgICAgIC8vIHBvb2w6IGVudHJvcHkgcG9vbCBzdGFydHMgZW1wdHlcbiAgTWF0aCAgICAvLyBtYXRoOiBwYWNrYWdlIGNvbnRhaW5pbmcgcmFuZG9tLCBwb3csIGFuZCBzZWVkcmFuZG9tXG4pO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcblx0dGhyb3cgbmV3IEVycm9yKFwiZGVmaW5lIGNhbm5vdCBiZSB1c2VkIGluZGlyZWN0XCIpO1xufTtcbiIsIi8qIGdsb2JhbHMgX193ZWJwYWNrX2FtZF9vcHRpb25zX18gKi9cbm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX2FtZF9vcHRpb25zX187XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHRpZiAoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcblx0XHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XG5cdH1cblx0cmV0dXJuIG1vZHVsZTtcbn07XG4iLCIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJjYXVzYWwtbmV0LmNvcmVcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnV0aWxzXCIpLCByZXF1aXJlKFwicmFuZG9tXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcImNhdXNhbC1uZXQuY29yZVwiLCBcImNhdXNhbC1uZXQudXRpbHNcIiwgXCJyYW5kb21cIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQGNhdXNhbE5ldC9zYW1wbGluZ1wiXSA9IGZhY3RvcnkocmVxdWlyZShcImNhdXNhbC1uZXQuY29yZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQudXRpbHNcIiksIHJlcXVpcmUoXCJyYW5kb21cIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkBjYXVzYWxOZXQvc2FtcGxpbmdcIl0gPSBmYWN0b3J5KHJvb3RbXCJjYXVzYWwtbmV0LmNvcmVcIl0sIHJvb3RbXCJjYXVzYWwtbmV0LnV0aWxzXCJdLCByb290W1wicmFuZG9tXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9jb3JlX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF91dGlsc19fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3JhbmRvbV9fKSB7XG5yZXR1cm4gLyoqKioqKi8gKGZ1bmN0aW9uKG1vZHVsZXMpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHRpOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdGw6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge31cbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbi8qKioqKiovIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbi8qKioqKiovIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4vKioqKioqLyBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuLyoqKioqKi8gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4vKioqKioqLyBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuLyoqKioqKi8gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4vKioqKioqLyBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuLyoqKioqKi8gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4vKioqKioqLyBcdFx0cmV0dXJuIG5zO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4vKioqKioqLyBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4vKioqKioqLyBcdFx0cmV0dXJuIGdldHRlcjtcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuLyoqKioqKi8gfSlcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyAoe1xuXG4vKioqLyBcIi4uLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHMuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC9ob21lL2h1eW5obmd1eWVuL2dpdGh1Yi9jYXVzYWxpdHkvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcy5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9leHRlbmRzO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9jYXVzYWxOZXRTYW1wbGluZy5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9jYXVzYWxOZXRTYW1wbGluZy5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBleHBvcnRzIHByb3ZpZGVkOiBkZWZhdWx0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9iYWJlbF9ydW50aW1lX2hlbHBlcnNfZXh0ZW5kc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzICovIFwiLi4vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcy5qc1wiKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfYmFiZWxfcnVudGltZV9oZWxwZXJzX2V4dGVuZHNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX19kZWZhdWx0ID0gLyojX19QVVJFX18qL19fd2VicGFja19yZXF1aXJlX18ubihfYmFiZWxfcnVudGltZV9oZWxwZXJzX2V4dGVuZHNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgY2F1c2FsX25ldF9jb3JlX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBjYXVzYWwtbmV0LmNvcmUgKi8gXCJjYXVzYWwtbmV0LmNvcmVcIik7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgY2F1c2FsX25ldF9jb3JlX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19fZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9fX3dlYnBhY2tfcmVxdWlyZV9fLm4oY2F1c2FsX25ldF9jb3JlX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX18pO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIGNhdXNhbF9uZXRfdXRpbHNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIGNhdXNhbC1uZXQudXRpbHMgKi8gXCJjYXVzYWwtbmV0LnV0aWxzXCIpO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIGNhdXNhbF9uZXRfdXRpbHNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX19kZWZhdWx0ID0gLyojX19QVVJFX18qL19fd2VicGFja19yZXF1aXJlX18ubihjYXVzYWxfbmV0X3V0aWxzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX18pO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIHJhbmRvbV9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfM19fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgcmFuZG9tICovIFwicmFuZG9tXCIpO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIHJhbmRvbV9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfM19fX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovX193ZWJwYWNrX3JlcXVpcmVfXy5uKHJhbmRvbV9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfM19fKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfc3ViU2FtcGxpbmdfbWl4aW5zX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV80X18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL3N1YlNhbXBsaW5nLm1peGlucyAqLyBcIi4vc3JjL3N1YlNhbXBsaW5nLm1peGlucy5qc1wiKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfbmVnU2FtcGxpbmdfbWl4aW5zX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV81X18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL25lZ1NhbXBsaW5nLm1peGlucyAqLyBcIi4vc3JjL25lZ1NhbXBsaW5nLm1peGlucy5qc1wiKTtcblxuXG5cblxuXG5cbi8qKlxuICogVGhpcyBjbGFzcyBwcm92aWRlcyBjb21tb24gdXNlZCBzYW1wbGluZyBtZXRob2RzIHdoaWNoIGNhbiBiZSBhY2Nlc3NlZCB2aWEgKipjYXVzYWxOZXRTYW1wbGluZyoqLlxuICogbWl4d2l0aDpcbiAqIFsgU3ViU2FtcGxpbmdNaXhpbnMsIE5lZ1NhbXBsaW5nTWl4aW5zIF1cbiAqIEBjbGFzcyBDYXVzYWxOZXRTYW1wbGluZ1xuICogQGV4dGVuZHMgRnVuY3RvclxuICogQGV4YW1wbGVcbiAqIFtFWEFNUExFIC4uL2V4YW1wbGVzL2NhdXNhbE5ldFNhbXBsaW5nLmJhYmVsLmpzXVxuICovXG5cbmNsYXNzIENhdXNhbE5ldFNhbXBsaW5nIGV4dGVuZHMgY2F1c2FsX25ldF91dGlsc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fW1wicGxhdGZvcm1cIl0ubWl4V2l0aChjYXVzYWxfbmV0X2NvcmVfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX1tcIkZ1bmN0b3JcIl0sIFtfc3ViU2FtcGxpbmdfbWl4aW5zX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV80X19bXCJkZWZhdWx0XCJdLCBfbmVnU2FtcGxpbmdfbWl4aW5zX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV81X19bXCJkZWZhdWx0XCJdXSkge1xuICBjb25zdHJ1Y3RvcihyYW5kb20pIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuUmFuZG9tID0gcmFuZG9tO1xuICB9XG5cbiAgcmFuZG9tKHNoYXBlLCBkaXN0cmlidXRpb24gPSAnbm9ybWFsJywgX3JlZiA9IHt9KSB7XG4gICAgbGV0IGFyZ3MgPSBfYmFiZWxfcnVudGltZV9oZWxwZXJzX2V4dGVuZHNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX19kZWZhdWx0KCkoe30sIF9yZWYpO1xuXG4gICAgY29uc3QgbGVuZ3RoID0gc2hhcGUucmVkdWNlKChjZCwgcykgPT4gY2QgKiBzKTtcbiAgICBjb25zdCBnZW5lcmF0b3IgPSB0aGlzLlJhbmRvbS5ub3JtYWwoKTtcbiAgICByZXR1cm4gdGhpcy5SLnJhbmdlKDAsIGxlbmd0aCkubWFwKCgpID0+IGdlbmVyYXRvcigpKTtcbiAgfVxuXG59XG5cbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gX193ZWJwYWNrX2V4cG9ydHNfX1tcImRlZmF1bHRcIl0gPSAobmV3IENhdXNhbE5ldFNhbXBsaW5nKHJhbmRvbV9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfM19fX2RlZmF1bHQuYSkpO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9pbmRleC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9pbmRleC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBleHBvcnRzIHByb3ZpZGVkOiBjYXVzYWxOZXRTYW1wbGluZywgU2FtcGxpbmdNaXhpbnMsIFN1YlNhbXBsaW5nTWl4aW5zLCBOZWdTYW1wbGluZ01peGlucyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbl9fd2VicGFja19yZXF1aXJlX18ucihfX3dlYnBhY2tfZXhwb3J0c19fKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfY2F1c2FsTmV0U2FtcGxpbmdfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vY2F1c2FsTmV0U2FtcGxpbmcgKi8gXCIuL3NyYy9jYXVzYWxOZXRTYW1wbGluZy5qc1wiKTtcbi8qIGhhcm1vbnkgcmVleHBvcnQgKHNhZmUpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcImNhdXNhbE5ldFNhbXBsaW5nXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gX2NhdXNhbE5ldFNhbXBsaW5nX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19bXCJkZWZhdWx0XCJdOyB9KTtcblxuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9zYW1wbGluZ19taXhpbnNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vc2FtcGxpbmcubWl4aW5zICovIFwiLi9zcmMvc2FtcGxpbmcubWl4aW5zLmpzXCIpO1xuLyogaGFybW9ueSByZWV4cG9ydCAoc2FmZSkgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiU2FtcGxpbmdNaXhpbnNcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBfc2FtcGxpbmdfbWl4aW5zX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19bXCJkZWZhdWx0XCJdOyB9KTtcblxuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9zdWJTYW1wbGluZ19taXhpbnNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vc3ViU2FtcGxpbmcubWl4aW5zICovIFwiLi9zcmMvc3ViU2FtcGxpbmcubWl4aW5zLmpzXCIpO1xuLyogaGFybW9ueSByZWV4cG9ydCAoc2FmZSkgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiU3ViU2FtcGxpbmdNaXhpbnNcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBfc3ViU2FtcGxpbmdfbWl4aW5zX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19bXCJkZWZhdWx0XCJdOyB9KTtcblxuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9uZWdTYW1wbGluZ19taXhpbnNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vbmVnU2FtcGxpbmcubWl4aW5zICovIFwiLi9zcmMvbmVnU2FtcGxpbmcubWl4aW5zLmpzXCIpO1xuLyogaGFybW9ueSByZWV4cG9ydCAoc2FmZSkgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiTmVnU2FtcGxpbmdNaXhpbnNcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBfbmVnU2FtcGxpbmdfbWl4aW5zX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8zX19bXCJkZWZhdWx0XCJdOyB9KTtcblxuXG5cblxuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL25lZ1NhbXBsaW5nLm1peGlucy5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvbmVnU2FtcGxpbmcubWl4aW5zLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBleHBvcnRzIHByb3ZpZGVkOiBkZWZhdWx0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xuY29uc3QgTmVnYXRpdmVTYW1wbGluZ01peGlucyA9IEJhc2VTYW1wbGluZ0NsYXNzID0+IGNsYXNzIGV4dGVuZHMgQmFzZVNhbXBsaW5nQ2xhc3Mge1xuICAvKipcbiAgICogUGVyZm9ybSBuZWdhdGl2ZSBzYW1wbGluZyBnaXZlbiB0aGUgc2VsZWN0IHByb2Igb2YgaWRzIGFuZCBsaXN0IG9mIHBvc2l0aXZlIHNhbXBsZXNcbiAgICogQHBhcmFtIHsgTnVtYmVyIH0gbmVnYXRpdmVTaXplIC0gc2l6ZSB0byBzYW1wbGVcbiAgICogQHBhcmFtIHsgQXJyYXkgfSBwb3NpdGl2ZVNhbXBsZXMgLSBBcnJheSBvZiBwb3NzaXRpdmUgSWRzXG4gICAqIEBwYXJhbSB7IEFycmF5IH0gY2FuZGlkYXRlUHJvYnMgLSBBcnJheSBvZiBwcm9iYWJsaXR5IG9mIGNhbmRpZGF0ZSBJZHNcbiAgICogQHBhcmFtIHsgQm9vbGVhbiB9IFtyZXBsYWNhYmxlPXRydWVdIC0gaWYgdHJ1ZSwgbm8gZHVwbGljYXRlZCBzYW1wbGluZyBJZCByZXR1cm5lZFxuICAgKiBAcmV0dXJucyB7IEFycmF5IH0gYXJyYXkgb2Ygc2FtcGxlZCBJZHNcbiAgICovXG4gIG5lZ1NhbXBsaW5nKG5lZ2F0aXZlU2l6ZSwgcG9zaXRpdmVTYW1wbGVzLCBjYW5kaWRhdGVQcm9icywgcmVwbGFjYWJsZSA9IHRydWUpIHtcbiAgICBjb25zdCBSID0gdGhpcy5SLFxuICAgICAgICAgIFJhbmRvbSA9IHRoaXMuUmFuZG9tO1xuXG4gICAgaWYgKFIuYW55KHYgPT4gIVIudHlwZShOdW1iZXIsIHYpIHx8IHYgPiAxIHx8IHYgPCAwLCBjYW5kaWRhdGVQcm9icykpIHtcbiAgICAgIHRocm93IEVycm9yKGAke0pTT04uc3RyaW5naWZ5KGNhbmRpZGF0ZVByb2JzKX0gaXMgbm90IGFsbG93YCk7XG4gICAgfVxuXG4gICAgbGV0IHNlbGV0aW9uUHJvYnMgPSBSLnJlZHVjZSgoc2VsZWN0aW9uUHJvYnMsIHBpZHgpID0+IHtcbiAgICAgIHNlbGVjdGlvblByb2JzW3BpZHhdID0gSW5maW5pdHk7IC8vcG9zaXRpdmUgY2FuZGlkYXRlIG5ldmVyIGJlIGNob29zZWRcblxuICAgICAgcmV0dXJuIHNlbGVjdGlvblByb2JzO1xuICAgIH0sIFIuY2xvbmUoY2FuZGlkYXRlUHJvYnMpLCBwb3NpdGl2ZVNhbXBsZXMpO1xuICAgIGxldCBzYW1wbGVzID0gW10sXG4gICAgICAgIHRha2VuSWR4cyA9IFIuY2xvbmUoc2VsZXRpb25Qcm9icyk7XG5cbiAgICBjb25zdCBHZW5OZXdDYW5kaWRhdGVJZHggPSAoKSA9PiBSYW5kb20uaW50KDAsIHNlbGV0aW9uUHJvYnMubGVuZ3RoIC0gMSk7XG5cbiAgICBjb25zdCBTZWxlY3RJZkhpZ2hQcm9iID0gcHJvYiA9PiB7XG4gICAgICBsZXQgcmFuZCA9IFJhbmRvbS5mbG9hdCgpO1xuICAgICAgcmV0dXJuIHJhbmQgPiBwcm9iO1xuICAgIH07XG5cbiAgICB3aGlsZSAoc2FtcGxlcy5sZW5ndGggPCBuZWdhdGl2ZVNpemUpIHtcbiAgICAgIGxldCBpZHggPSBHZW5OZXdDYW5kaWRhdGVJZHgoKTtcbiAgICAgIGxldCBzZWxlY3RlZCA9IFNlbGVjdElmSGlnaFByb2Ioc2VsZXRpb25Qcm9ic1tpZHhdKTtcblxuICAgICAgaWYgKCFzZWxlY3RlZCkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFyZXBsYWNhYmxlICYmIHRha2VuSWR4c1tpZHhdID09PSBudWxsKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBzYW1wbGVzID0gWy4uLnNhbXBsZXMsIGlkeF07XG5cbiAgICAgIGlmICghcmVwbGFjYWJsZSkge1xuICAgICAgICB0YWtlbklkeHNbaWR4XSA9IG51bGw7IC8vbm9uIHJlcGxhY2VhYmxlXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHNhbXBsZXM7XG4gIH1cblxufTtcblxuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyBfX3dlYnBhY2tfZXhwb3J0c19fW1wiZGVmYXVsdFwiXSA9IChOZWdhdGl2ZVNhbXBsaW5nTWl4aW5zKTtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvc2FtcGxpbmcubWl4aW5zLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9zYW1wbGluZy5taXhpbnMuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIGV4cG9ydHMgcHJvdmlkZWQ6IGRlZmF1bHQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgY2F1c2FsX25ldF9jb3JlX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBjYXVzYWwtbmV0LmNvcmUgKi8gXCJjYXVzYWwtbmV0LmNvcmVcIik7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgY2F1c2FsX25ldF9jb3JlX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19fZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9fX3dlYnBhY2tfcmVxdWlyZV9fLm4oY2F1c2FsX25ldF9jb3JlX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18pO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIGNhdXNhbF9uZXRfdXRpbHNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIGNhdXNhbC1uZXQudXRpbHMgKi8gXCJjYXVzYWwtbmV0LnV0aWxzXCIpO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIGNhdXNhbF9uZXRfdXRpbHNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX19kZWZhdWx0ID0gLyojX19QVVJFX18qL19fd2VicGFja19yZXF1aXJlX18ubihjYXVzYWxfbmV0X3V0aWxzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX18pO1xuXG5cbi8qKlxuICogVGhpcyBtaXhpbiBjbGFzcyBwcm92aWRlIGF0dHJpYnV0ZXM6ICoqU2FtcGxpbmcqKi5cbiAqIEBjbGFzcyBTYW1wbGluZ01peGluc1xuICogQGV4dGVuZHMgQmFzZUNsYXNzXG4gKiBAZXhhbXBsZVxuICogW0VYQU1QTEUgLi4vZXhhbXBsZXMvc2FtcGxpbmcubWl4aW5zLmJhYmVsLmpzXVxuICovXG5cbmNvbnN0IFNhbXBsaW5nTWl4aW5zID0gQmFzZUNsYXNzID0+IGNsYXNzIGV4dGVuZHMgQmFzZUNsYXNzIHtcbiAgLyoqXG4gICAqIGdldCBjdXJyZW50IHJhbmRvbSBpbnN0YW5jZVxuICAgKi9cbiAgZ2V0IFNhbXBsaW5nKCkge1xuICAgIGlmICghdGhpcy5zYW1wbGluZykge1xuICAgICAgdGhyb3cgRXJyb3IoYFNhbXBsaW5nIGlzIG5vdCBzZXRgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5zYW1wbGluZztcbiAgfVxuICAvKipcbiAgICogc2V0IFNhbXBsaW5nIGluc3RhbmNlXG4gICAqIEByZWFkb25seVxuICAgKi9cblxuXG4gIHNldCBTYW1wbGluZyhzYW1wbGluZykge1xuICAgIGNhdXNhbF9uZXRfdXRpbHNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX1tcImFzc2VydFwiXS5iZUluc3RhbmNlT2Yoc2FtcGxpbmcsIGNhdXNhbF9uZXRfY29yZV9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fW1wiRnVuY3RvclwiXSk7XG4gICAgdGhpcy5zYW1wbGluZyA9IHNhbXBsaW5nO1xuICB9XG5cbn07XG5cbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gX193ZWJwYWNrX2V4cG9ydHNfX1tcImRlZmF1bHRcIl0gPSAoU2FtcGxpbmdNaXhpbnMpO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9zdWJTYW1wbGluZy5taXhpbnMuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL3N1YlNhbXBsaW5nLm1peGlucy5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgZXhwb3J0cyBwcm92aWRlZDogZGVmYXVsdCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbl9fd2VicGFja19yZXF1aXJlX18ucihfX3dlYnBhY2tfZXhwb3J0c19fKTtcbmNvbnN0IFN1YlNhbXBsaW5nTWl4aW5zID0gQmFzZVNhbXBsaW5nQ2xhc3MgPT4gY2xhc3MgZXh0ZW5kcyBCYXNlU2FtcGxpbmdDbGFzcyB7XG4gIC8qKlxuICAgKiBQZXJmb3JtIHVuaWZvcm0gc2FtcGxlIGEgc3ViIHNldCBvZiBJZHMgZ2l2ZW4gdGhlIGNhbmRpZGF0ZSBsaXN0XG4gICAqIEBwYXJhbSB7IE51bWJlciB9IHNhbXBsaW5nU2l6ZVxuICAgKiBAcGFyYW0geyBBcnJheXxOdW1iZXIgfSBjYW5kaWRhdGVMaXN0IC0gbGlzdCBvZiBjYW5kaWRhdGVzIG9yIHNpemUgb2YgY2FuZGlkYXRlIGxpc3RcbiAgICogQHBhcmFtIHsgQm9vbGVhbiB9IFtyZXBsYWNhYmxlPXRydWVdIC0gaWYgdHJ1ZSwgbm8gZHVwbGljYXRlZCBzYW1wbGluZyBJZCByZXR1cm5lZFxuICAgKiBAcmV0dXJucyB7IEFycmF5IH0gYXJyYXkgb2Ygc2FtcGxlZCBJZHNcbiAgICovXG4gIHN1YlNhbXBsaW5nKHNhbXBsaW5nU2l6ZSwgY2FuZGlkYXRlTGlzdCwgcmVwbGFjYWJsZSA9IHRydWUpIHtcbiAgICBjb25zdCBSID0gdGhpcy5SLFxuICAgICAgICAgIFJhbmRvbSA9IHRoaXMuUmFuZG9tO1xuICAgIGxldCBjYW5kaWRhdGVzID0gQXJyYXkuaXNBcnJheShjYW5kaWRhdGVMaXN0KSA/IFIuY2xvbmUoY2FuZGlkYXRlTGlzdCkgOiBSLnJhbmdlKDAsIGNhbmRpZGF0ZUxpc3QpO1xuXG4gICAgaWYgKGNhbmRpZGF0ZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aHJvdyBFcnJvcignY2FuZGlkYXRlIGxlbmd0aCBzaG91bGQgYmUgcG9zaXRpdmUnKTtcbiAgICB9XG5cbiAgICBsZXQgc2FtcGxlcyA9IFtdLFxuICAgICAgICB0YWtlbklkeHMgPSBSLmNsb25lKGNhbmRpZGF0ZXMpO1xuXG4gICAgY29uc3QgR2VuTmV3Q2FuZGlkYXRlSWR4ID0gKCkgPT4gUmFuZG9tLmludCgwLCBjYW5kaWRhdGVzLmxlbmd0aCAtIDEpO1xuXG4gICAgd2hpbGUgKHNhbXBsZXMubGVuZ3RoIDwgc2FtcGxpbmdTaXplKSB7XG4gICAgICBsZXQgaWR4ID0gR2VuTmV3Q2FuZGlkYXRlSWR4KCk7XG5cbiAgICAgIGlmICghcmVwbGFjYWJsZSAmJiB0YWtlbklkeHNbaWR4XSA9PT0gbnVsbCkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgc2FtcGxlcyA9IFsuLi5zYW1wbGVzLCBjYW5kaWRhdGVzW2lkeF1dO1xuXG4gICAgICBpZiAoIXJlcGxhY2FibGUpIHtcbiAgICAgICAgdGFrZW5JZHhzW2lkeF0gPSBudWxsOyAvL25vbiByZXBsYWNlYWJsZVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzYW1wbGVzO1xuICB9XG5cbn07XG5cbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gX193ZWJwYWNrX2V4cG9ydHNfX1tcImRlZmF1bHRcIl0gPSAoU3ViU2FtcGxpbmdNaXhpbnMpO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCJjYXVzYWwtbmV0LmNvcmVcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogZXh0ZXJuYWwgXCJjYXVzYWwtbmV0LmNvcmVcIiAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5tb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9jb3JlX187XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcImNhdXNhbC1uZXQudXRpbHNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIGV4dGVybmFsIFwiY2F1c2FsLW5ldC51dGlsc1wiICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5tb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF91dGlsc19fO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCJyYW5kb21cIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogZXh0ZXJuYWwgXCJyYW5kb21cIiAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5tb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcmFuZG9tX187XG5cbi8qKiovIH0pXG5cbi8qKioqKiovIH0pO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbmRsWW5CaFkyczZMeTlBWTJGMWMyRnNUbVYwTDNOaGJYQnNhVzVuTDNkbFluQmhZMnN2ZFc1cGRtVnljMkZzVFc5a2RXeGxSR1ZtYVc1cGRHbHZiaUlzSW5kbFluQmhZMnM2THk5QVkyRjFjMkZzVG1WMEwzTmhiWEJzYVc1bkwzZGxZbkJoWTJzdlltOXZkSE4wY21Gd0lpd2lkMlZpY0dGamF6b3ZMMEJqWVhWellXeE9aWFF2YzJGdGNHeHBibWN2TDJodmJXVXZhSFY1Ym1odVozVjVaVzR2WjJsMGFIVmlMMk5oZFhOaGJHbDBlUzl1YjJSbFgyMXZaSFZzWlhNdlFHSmhZbVZzTDNKMWJuUnBiV1V2YUdWc2NHVnljeTlsZUhSbGJtUnpMbXB6SWl3aWQyVmljR0ZqYXpvdkwwQmpZWFZ6WVd4T1pYUXZjMkZ0Y0d4cGJtY3ZMaTl6Y21NdlkyRjFjMkZzVG1WMFUyRnRjR3hwYm1jdWFuTWlMQ0ozWldKd1lXTnJPaTh2UUdOaGRYTmhiRTVsZEM5ellXMXdiR2x1Wnk4dUwzTnlZeTlwYm1SbGVDNXFjeUlzSW5kbFluQmhZMnM2THk5QVkyRjFjMkZzVG1WMEwzTmhiWEJzYVc1bkx5NHZjM0pqTDI1bFoxTmhiWEJzYVc1bkxtMXBlR2x1Y3k1cWN5SXNJbmRsWW5CaFkyczZMeTlBWTJGMWMyRnNUbVYwTDNOaGJYQnNhVzVuTHk0dmMzSmpMM05oYlhCc2FXNW5MbTFwZUdsdWN5NXFjeUlzSW5kbFluQmhZMnM2THk5QVkyRjFjMkZzVG1WMEwzTmhiWEJzYVc1bkx5NHZjM0pqTDNOMVlsTmhiWEJzYVc1bkxtMXBlR2x1Y3k1cWN5SXNJbmRsWW5CaFkyczZMeTlBWTJGMWMyRnNUbVYwTDNOaGJYQnNhVzVuTDJWNGRHVnlibUZzSUZ3aVkyRjFjMkZzTFc1bGRDNWpiM0psWENJaUxDSjNaV0p3WVdOck9pOHZRR05oZFhOaGJFNWxkQzl6WVcxd2JHbHVaeTlsZUhSbGNtNWhiQ0JjSW1OaGRYTmhiQzF1WlhRdWRYUnBiSE5jSWlJc0luZGxZbkJoWTJzNkx5OUFZMkYxYzJGc1RtVjBMM05oYlhCc2FXNW5MMlY0ZEdWeWJtRnNJRndpY21GdVpHOXRYQ0lpWFN3aWJtRnRaWE1pT2xzaVEyRjFjMkZzVG1WMFUyRnRjR3hwYm1jaUxDSndiR0YwWm05eWJTSXNJbTFwZUZkcGRHZ2lMQ0pDWVhObFJuVnVZM1J2Y2lJc0lsTjFZbE5oYlhCc2FXNW5UV2w0YVc1eklpd2lUbVZuVTJGdGNHeHBibWROYVhocGJuTWlMQ0pqYjI1emRISjFZM1J2Y2lJc0luSmhibVJ2YlNJc0lsSmhibVJ2YlNJc0luTm9ZWEJsSWl3aVpHbHpkSEpwWW5WMGFXOXVJaXdpWVhKbmN5SXNJbXhsYm1kMGFDSXNJbkpsWkhWalpTSXNJbU5rSWl3aWN5SXNJbWRsYm1WeVlYUnZjaUlzSW01dmNtMWhiQ0lzSWxJaUxDSnlZVzVuWlNJc0ltMWhjQ0lzSWs1bFoyRjBhWFpsVTJGdGNHeHBibWROYVhocGJuTWlMQ0pDWVhObFUyRnRjR3hwYm1kRGJHRnpjeUlzSW01bFoxTmhiWEJzYVc1bklpd2libVZuWVhScGRtVlRhWHBsSWl3aWNHOXphWFJwZG1WVFlXMXdiR1Z6SWl3aVkyRnVaR2xrWVhSbFVISnZZbk1pTENKeVpYQnNZV05oWW14bElpd2lZVzU1SWl3aWRpSXNJblI1Y0dVaUxDSk9kVzFpWlhJaUxDSkZjbkp2Y2lJc0lrcFRUMDRpTENKemRISnBibWRwWm5raUxDSnpaV3hsZEdsdmJsQnliMkp6SWl3aWMyVnNaV04wYVc5dVVISnZZbk1pTENKd2FXUjRJaXdpU1c1bWFXNXBkSGtpTENKamJHOXVaU0lzSW5OaGJYQnNaWE1pTENKMFlXdGxia2xrZUhNaUxDSkhaVzVPWlhkRFlXNWthV1JoZEdWSlpIZ2lMQ0pwYm5RaUxDSlRaV3hsWTNSSlpraHBaMmhRY205aUlpd2ljSEp2WWlJc0luSmhibVFpTENKbWJHOWhkQ0lzSW1sa2VDSXNJbk5sYkdWamRHVmtJaXdpVTJGdGNHeHBibWROYVhocGJuTWlMQ0pDWVhObFEyeGhjM01pTENKVFlXMXdiR2x1WnlJc0luTmhiWEJzYVc1bklpd2lZWE56WlhKMElpd2lZbVZKYm5OMFlXNWpaVTltSWl3aVJuVnVZM1J2Y2lJc0luTjFZbE5oYlhCc2FXNW5JaXdpYzJGdGNHeHBibWRUYVhwbElpd2lZMkZ1Wkdsa1lYUmxUR2x6ZENJc0ltTmhibVJwWkdGMFpYTWlMQ0pCY25KaGVTSXNJbWx6UVhKeVlYa2lYU3dpYldGd2NHbHVaM01pT2lKQlFVRkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRU5CUVVNN1FVRkRSQ3hQTzBGRFZrRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN096dEJRVWRCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4clJFRkJNRU1zWjBOQlFXZERPMEZCUXpGRk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1owVkJRWGRFTEd0Q1FVRnJRanRCUVVNeFJUdEJRVU5CTEhsRVFVRnBSQ3hqUVVGak8wRkJReTlFT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hwUkVGQmVVTXNhVU5CUVdsRE8wRkJRekZGTEhkSVFVRm5TQ3h0UWtGQmJVSXNSVUZCUlR0QlFVTnlTVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJMRzFEUVVFeVFpd3dRa0ZCTUVJc1JVRkJSVHRCUVVOMlJDeDVRMEZCYVVNc1pVRkJaVHRCUVVOb1JEdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRU3c0UkVGQmMwUXNLMFJCUVN0RU96dEJRVVZ5U0R0QlFVTkJPenM3UVVGSFFUdEJRVU5CT3pzN096czdPenM3T3pzN1FVTnNSa0U3UVVGRFFUdEJRVU5CTEcxQ1FVRnRRaXh6UWtGQmMwSTdRVUZEZWtNN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRU3d3UWpzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPMEZEYkVKQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZGUVRzN096czdPenM3T3p0QlFWTkJMRTFCUVUxQkxHbENRVUZPTEZOQlFXZERReXg1UkVGQlVTeERRVUZEUXl4UFFVRlVMRU5CUVd0Q1F5eDFSRUZCYkVJc1JVRkROVUlzUTBGQlJVTXNNa1JCUVVZc1JVRkJjVUpETERKRVFVRnlRaXhEUVVRMFFpeERRVUZvUXl4RFFVTTJRenRCUVVONlEwTXNZVUZCVnl4RFFVRkRReXhOUVVGRUxFVkJRVkU3UVVGRFpqdEJRVU5CTEZOQlFVdERMRTFCUVV3c1IwRkJZMFFzVFVGQlpEdEJRVU5JT3p0QlFVTkVRU3hSUVVGTkxFTkJRVU5GTEV0QlFVUXNSVUZCVVVNc1dVRkJXU3hIUVVGRExGRkJRWEpDTEVWQlFTdENMRTlCUVZVc1JVRkJla01zUlVGQk5FTTdRVUZCUVN4UlFVRlVReXhKUVVGVE96dEJRVU01UXl4VlFVRk5ReXhOUVVGTkxFZEJRVWRJTEV0QlFVc3NRMEZCUTBrc1RVRkJUaXhEUVVGaExFTkJRVU5ETEVWQlFVUXNSVUZCU1VNc1EwRkJTaXhMUVVGUlJDeEZRVUZGTEVkQlFVTkRMRU5CUVhoQ0xFTkJRV1k3UVVGRFFTeFZRVUZOUXl4VFFVRlRMRWRCUVVjc1MwRkJTMUlzVFVGQlRDeERRVUZaVXl4TlFVRmFMRVZCUVd4Q08wRkJRMEVzVjBGQlR5eExRVUZMUXl4RFFVRk1MRU5CUVU5RExFdEJRVkFzUTBGQllTeERRVUZpTEVWQlFXVlFMRTFCUVdZc1JVRkJkVUpSTEVkQlFYWkNMRU5CUVRKQ0xFMUJRVWxLTEZOQlFWTXNSVUZCZUVNc1EwRkJVRHRCUVVOSU96dEJRVlIzUXpzN1FVRlpPVUlzYlVWQlFVbG9RaXhwUWtGQlNpeERRVUZ6UWs4c05rTkJRWFJDTEVOQlFXWXNSVHM3T3pzN096czdPenM3TzBGRE5VSkJPMEZCUVVFN1FVRkJRVHRCUVVGQk8wRkJRVUU3UVVGQlFUdEJRVUZCTzBGQlFVRTdRVUZCUVR0QlFVRkJPMEZCUVVFN1FVRkJRVHRCUVVGQk8wRkJRVUU3UVVGRFFUdEJRVVZCT3pzN096czdPenM3T3pzN08wRkRTRUU3UVVGQlFTeE5RVUZOWXl4elFrRkJjMElzUjBGQlNVTXNhVUpCUVVRc1NVRkJjMElzWTBGQlkwRXNhVUpCUVdRc1EwRkJLMEk3UVVGRGFFWTdPenM3T3pzN08wRkJVVUZETEdGQlFWY3NRMEZCUTBNc1dVRkJSQ3hGUVVGbFF5eGxRVUZtTEVWQlFXZERReXhqUVVGb1F5eEZRVUZuUkVNc1ZVRkJWU3hIUVVGRExFbEJRVE5FTEVWQlFXZEZPMEZCUTNaRkxGVkJRVTFVTEVOQlFVTXNSMEZCUnl4TFFVRkxRU3hEUVVGbU8wRkJRVUVzVlVGQmEwSldMRTFCUVUwc1IwRkJSeXhMUVVGTFFTeE5RVUZvUXpzN1FVRkRRU3hSUVVGSFZTeERRVUZETEVOQlFVTlZMRWRCUVVZc1EwRkJUME1zUTBGQlJDeEpRVUZOTEVOQlFVTllMRU5CUVVNc1EwRkJRMWtzU1VGQlJpeERRVUZQUXl4TlFVRlFMRVZCUVdOR0xFTkJRV1FzUTBGQlJDeEpRVUZ4UWtFc1EwRkJReXhIUVVGSExFTkJRWHBDTEVsQlFUaENRU3hEUVVGRExFZEJRVWNzUTBGQk9VTXNSVUZCYVVSSUxHTkJRV3BFTEVOQlFVZ3NSVUZCYjBVN1FVRkRhRVVzV1VGQlRVMHNTMEZCU3l4RFFVRkZMRWRCUVVWRExFbEJRVWtzUTBGQlEwTXNVMEZCVEN4RFFVRmxVaXhqUVVGbUxFTkJRU3RDTEdWQlFXNURMRU5CUVZnN1FVRkRTRHM3UVVGRFJDeFJRVUZKVXl4aFFVRmhMRWRCUVVkcVFpeERRVUZETEVOQlFVTk1MRTFCUVVZc1EwRkJVeXhEUVVGRGRVSXNZMEZCUkN4RlFVRnBRa01zU1VGQmFrSXNTMEZCZDBJN1FVRkROMEpFTEc5Q1FVRmpMRU5CUVVORExFbEJRVVFzUTBGQlpDeEhRVUYxUWtNc1VVRkJka0lzUTBGRU5rSXNRMEZEUnpzN1FVRkRhRU1zWVVGQlQwWXNZMEZCVUR0QlFVTklMRXRCU0VRc1JVRkhSMnhDTEVOQlFVTXNRMEZCUTNGQ0xFdEJRVVlzUTBGQlVXSXNZMEZCVWl4RFFVaElMRVZCUnpSQ1JDeGxRVWcxUWl4RFFVRndRanRCUVVsQkxGRkJRVWxsTEU5QlFVOHNSMEZCUnl4RlFVRmtPMEZCUVVFc1VVRkJhMEpETEZOQlFWTXNSMEZCUjNaQ0xFTkJRVU1zUTBGQlEzRkNMRXRCUVVZc1EwRkJVVW9zWVVGQlVpeERRVUU1UWpzN1FVRkRRU3hWUVVGTlR5eHJRa0ZCYTBJc1IwRkJSeXhOUVVGSmJFTXNUVUZCVFN4RFFVRkRiVU1zUjBGQlVDeERRVUZYTEVOQlFWZ3NSVUZCWTFJc1lVRkJZU3hEUVVGRGRrSXNUVUZCWkN4SFFVRnhRaXhEUVVGdVF5eERRVUV2UWpzN1FVRkRRU3hWUVVGTlowTXNaMEpCUVdkQ0xFZEJRVWxETEVsQlFVUXNTVUZCVVR0QlFVTTNRaXhWUVVGSlF5eEpRVUZKTEVkQlFVZDBReXhOUVVGTkxFTkJRVU4xUXl4TFFVRlFMRVZCUVZnN1FVRkRRU3hoUVVGUFJDeEpRVUZKTEVkQlFVTkVMRWxCUVZvN1FVRkRTQ3hMUVVoRU96dEJRVWxCTEZkQlFVMU1MRTlCUVU4c1EwRkJRelZDTEUxQlFWSXNSMEZCYVVKWkxGbEJRWFpDTEVWQlFXOURPMEZCUTJoRExGVkJRVWwzUWl4SFFVRkhMRWRCUVVkT0xHdENRVUZyUWl4RlFVRTFRanRCUVVOQkxGVkJRVWxQTEZGQlFWRXNSMEZCUjB3c1owSkJRV2RDTEVOQlFVTlVMR0ZCUVdFc1EwRkJRMkVzUjBGQlJDeERRVUZrTEVOQlFTOUNPenRCUVVOQkxGVkJRVWNzUTBGQlEwTXNVVUZCU2l4RlFVRmhPMEZCUTFRN1FVRkRTRHM3UVVGRFJDeFZRVUZITEVOQlFVTjBRaXhWUVVGRUxFbEJRV1ZqTEZOQlFWTXNRMEZCUTA4c1IwRkJSQ3hEUVVGVUxFdEJRV2xDTEVsQlFXNURMRVZCUVhkRE8wRkJRM0JETzBGQlEwZzdPMEZCUTBSU0xHRkJRVThzUjBGQlJ5eERRVUZETEVkQlFVZEJMRTlCUVVvc1JVRkJZVkVzUjBGQllpeERRVUZXT3p0QlFVTkJMRlZCUVVjc1EwRkJRM0pDTEZWQlFVb3NSVUZCWlR0QlFVTllZeXhwUWtGQlV5eERRVUZEVHl4SFFVRkVMRU5CUVZRc1IwRkJaU3hKUVVGbUxFTkJSRmNzUTBGRFV6dEJRVU4yUWp0QlFVTktPenRCUVVORUxGZEJRVTlTTEU5QlFWQTdRVUZEU0RzN1FVRjJReXRGTEVOQlFYQkdPenRCUVhsRFpXNUNMSEZHUVVGbUxFVTdPenM3T3pzN096czdPenRCUTNwRFFUdEJRVUZCTzBGQlFVRTdRVUZCUVR0QlFVRkJPMEZCUVVFN1FVRkRRVHRCUVVOQk96czdPenM3T3p0QlFVOUJMRTFCUVUwMlFpeGpRVUZqTEVkQlFVbERMRk5CUVVRc1NVRkJZeXhqUVVGalFTeFRRVUZrTEVOQlFYVkNPMEZCUTNoRU96czdRVUZIUVN4TlFVRkpReXhSUVVGS0xFZEJRV003UVVGRFZpeFJRVUZITEVOQlFVTXNTMEZCUzBNc1VVRkJWQ3hGUVVGclFqdEJRVU5rTEZsQlFVMXlRaXhMUVVGTExFTkJRVVVzY1VKQlFVWXNRMEZCV0R0QlFVTklPenRCUVVORUxGZEJRVThzUzBGQlMzRkNMRkZCUVZvN1FVRkRTRHRCUVVWRU96czdPenM3UVVGSlFTeE5RVUZKUkN4UlFVRktMRU5CUVdGRExGRkJRV0lzUlVGQmMwSTdRVUZEYkVKRExESkVRVUZOTEVOQlFVTkRMRmxCUVZBc1EwRkJiMEpHTEZGQlFYQkNMRVZCUVRoQ1J5eDFSRUZCT1VJN1FVRkRRU3hUUVVGTFNDeFJRVUZNTEVkQlFXZENRU3hSUVVGb1FqdEJRVU5JT3p0QlFXeENkVVFzUTBGQk5VUTdPMEZCY1VKbFNDdzJSVUZCWml4Rk96czdPenM3T3pzN096czdRVU01UWtFN1FVRkJRU3hOUVVGTk9VTXNhVUpCUVdsQ0xFZEJRVWxyUWl4cFFrRkJSQ3hKUVVGMVFpeGpRVUZqUVN4cFFrRkJaQ3hEUVVFclFqdEJRVU0xUlRzN096czdPenRCUVU5QmJVTXNZVUZCVnl4RFFVRkRReXhaUVVGRUxFVkJRV1ZETEdGQlFXWXNSVUZCT0VKb1F5eFZRVUZWTEVkQlFVTXNTVUZCZWtNc1JVRkJPRU03UVVGRGNrUXNWVUZCVFZRc1EwRkJReXhIUVVGSExFdEJRVXRCTEVOQlFXWTdRVUZCUVN4VlFVRnJRbFlzVFVGQlRTeEhRVUZITEV0QlFVdEJMRTFCUVdoRE8wRkJRMEVzVVVGQlNXOUVMRlZCUVZVc1IwRkJSME1zUzBGQlN5eERRVUZEUXl4UFFVRk9MRU5CUVdOSUxHRkJRV1FzU1VGQk5rSjZReXhEUVVGRExFTkJRVU54UWl4TFFVRkdMRU5CUVZGdlFpeGhRVUZTTEVOQlFUZENMRWRCUVc5RWVrTXNRMEZCUXl4RFFVRkRReXhMUVVGR0xFTkJRVkVzUTBGQlVpeEZRVUZYZDBNc1lVRkJXQ3hEUVVGeVJUczdRVUZEUVN4UlFVRkhReXhWUVVGVkxFTkJRVU5vUkN4TlFVRllMRXRCUVhOQ0xFTkJRWHBDTEVWQlFUSkNPMEZCUTNaQ0xGbEJRVTF2UWl4TFFVRkxMRU5CUVVNc2NVTkJRVVFzUTBGQldEdEJRVU5JT3p0QlFVTkVMRkZCUVVsUkxFOUJRVThzUjBGQlJ5eEZRVUZrTzBGQlFVRXNVVUZCYTBKRExGTkJRVk1zUjBGQlIzWkNMRU5CUVVNc1EwRkJRM0ZDTEV0QlFVWXNRMEZCVVhGQ0xGVkJRVklzUTBGQk9VSTdPMEZCUTBFc1ZVRkJUV3hDTEd0Q1FVRnJRaXhIUVVGSExFMUJRVWxzUXl4TlFVRk5MRU5CUVVOdFF5eEhRVUZRTEVOQlFWY3NRMEZCV0N4RlFVRmphVUlzVlVGQlZTeERRVUZEYUVRc1RVRkJXQ3hIUVVGclFpeERRVUZvUXl4RFFVRXZRanM3UVVGRFFTeFhRVUZOTkVJc1QwRkJUeXhEUVVGRE5VSXNUVUZCVWl4SFFVRnBRamhETEZsQlFYWkNMRVZCUVc5RE8wRkJRMmhETEZWQlFVbFdMRWRCUVVjc1IwRkJSMDRzYTBKQlFXdENMRVZCUVRWQ096dEJRVU5CTEZWQlFVY3NRMEZCUTJZc1ZVRkJSQ3hKUVVGbFl5eFRRVUZUTEVOQlFVTlBMRWRCUVVRc1EwRkJWQ3hMUVVGcFFpeEpRVUZ1UXl4RlFVRjNRenRCUVVOd1F6dEJRVU5JT3p0QlFVTkVVaXhoUVVGUExFZEJRVWNzUTBGQlF5eEhRVUZIUVN4UFFVRktMRVZCUVdGdlFpeFZRVUZWTEVOQlFVTmFMRWRCUVVRc1EwRkJka0lzUTBGQlZqczdRVUZEUVN4VlFVRkhMRU5CUVVOeVFpeFZRVUZLTEVWQlFXVTdRVUZEV0dNc2FVSkJRVk1zUTBGQlEwOHNSMEZCUkN4RFFVRlVMRWRCUVdVc1NVRkJaaXhEUVVSWExFTkJRMU03UVVGRGRrSTdRVUZEU2pzN1FVRkRSQ3hYUVVGUFVpeFBRVUZRTzBGQlEwZzdPMEZCTTBJeVJTeERRVUZvUmpzN1FVRTJRbVZ3UXl4blJrRkJaaXhGT3pzN096czdPenM3T3p0QlF6ZENRU3cyUkRzN096czdPenM3T3pzN1FVTkJRU3c0UkRzN096czdPenM3T3pzN1FVTkJRU3h2UkNJc0ltWnBiR1VpT2lKQVkyRjFjMkZzVG1WMEwzTmhiWEJzYVc1bkxuZGxZaTVxY3lJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYklpaG1kVzVqZEdsdmJpQjNaV0p3WVdOclZXNXBkbVZ5YzJGc1RXOWtkV3hsUkdWbWFXNXBkR2x2YmloeWIyOTBMQ0JtWVdOMGIzSjVLU0I3WEc1Y2RHbG1LSFI1Y0dWdlppQmxlSEJ2Y25SeklEMDlQU0FuYjJKcVpXTjBKeUFtSmlCMGVYQmxiMllnYlc5a2RXeGxJRDA5UFNBbmIySnFaV04wSnlsY2JseDBYSFJ0YjJSMWJHVXVaWGh3YjNKMGN5QTlJR1poWTNSdmNua29jbVZ4ZFdseVpTaGNJbU5oZFhOaGJDMXVaWFF1WTI5eVpWd2lLU3dnY21WeGRXbHlaU2hjSW1OaGRYTmhiQzF1WlhRdWRYUnBiSE5jSWlrc0lISmxjWFZwY21Vb1hDSnlZVzVrYjIxY0lpa3BPMXh1WEhSbGJITmxJR2xtS0hSNWNHVnZaaUJrWldacGJtVWdQVDA5SUNkbWRXNWpkR2x2YmljZ0ppWWdaR1ZtYVc1bExtRnRaQ2xjYmx4MFhIUmtaV1pwYm1Vb1cxd2lZMkYxYzJGc0xXNWxkQzVqYjNKbFhDSXNJRndpWTJGMWMyRnNMVzVsZEM1MWRHbHNjMXdpTENCY0luSmhibVJ2YlZ3aVhTd2dabUZqZEc5eWVTazdYRzVjZEdWc2MyVWdhV1lvZEhsd1pXOW1JR1Y0Y0c5eWRITWdQVDA5SUNkdlltcGxZM1FuS1Z4dVhIUmNkR1Y0Y0c5eWRITmJYQ0pBWTJGMWMyRnNUbVYwTDNOaGJYQnNhVzVuWENKZElEMGdabUZqZEc5eWVTaHlaWEYxYVhKbEtGd2lZMkYxYzJGc0xXNWxkQzVqYjNKbFhDSXBMQ0J5WlhGMWFYSmxLRndpWTJGMWMyRnNMVzVsZEM1MWRHbHNjMXdpS1N3Z2NtVnhkV2x5WlNoY0luSmhibVJ2YlZ3aUtTazdYRzVjZEdWc2MyVmNibHgwWEhSeWIyOTBXMXdpUUdOaGRYTmhiRTVsZEM5ellXMXdiR2x1WjF3aVhTQTlJR1poWTNSdmNua29jbTl2ZEZ0Y0ltTmhkWE5oYkMxdVpYUXVZMjl5WlZ3aVhTd2djbTl2ZEZ0Y0ltTmhkWE5oYkMxdVpYUXVkWFJwYkhOY0lsMHNJSEp2YjNSYlhDSnlZVzVrYjIxY0lsMHBPMXh1ZlNrb2RHaHBjeXdnWm5WdVkzUnBiMjRvWDE5WFJVSlFRVU5MWDBWWVZFVlNUa0ZNWDAxUFJGVk1SVjlqWVhWellXeGZibVYwWDJOdmNtVmZYeXdnWDE5WFJVSlFRVU5MWDBWWVZFVlNUa0ZNWDAxUFJGVk1SVjlqWVhWellXeGZibVYwWDNWMGFXeHpYMThzSUY5ZlYwVkNVRUZEUzE5RldGUkZVazVCVEY5TlQwUlZURVZmY21GdVpHOXRYMThwSUh0Y2JuSmxkSFZ5YmlBaUxDSWdYSFF2THlCVWFHVWdiVzlrZFd4bElHTmhZMmhsWEc0Z1hIUjJZWElnYVc1emRHRnNiR1ZrVFc5a2RXeGxjeUE5SUh0OU8xeHVYRzRnWEhRdkx5QlVhR1VnY21WeGRXbHlaU0JtZFc1amRHbHZibHh1SUZ4MFpuVnVZM1JwYjI0Z1gxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5aHRiMlIxYkdWSlpDa2dlMXh1WEc0Z1hIUmNkQzh2SUVOb1pXTnJJR2xtSUcxdlpIVnNaU0JwY3lCcGJpQmpZV05vWlZ4dUlGeDBYSFJwWmlocGJuTjBZV3hzWldSTmIyUjFiR1Z6VzIxdlpIVnNaVWxrWFNrZ2UxeHVJRngwWEhSY2RISmxkSFZ5YmlCcGJuTjBZV3hzWldSTmIyUjFiR1Z6VzIxdlpIVnNaVWxrWFM1bGVIQnZjblJ6TzF4dUlGeDBYSFI5WEc0Z1hIUmNkQzh2SUVOeVpXRjBaU0JoSUc1bGR5QnRiMlIxYkdVZ0tHRnVaQ0J3ZFhRZ2FYUWdhVzUwYnlCMGFHVWdZMkZqYUdVcFhHNGdYSFJjZEhaaGNpQnRiMlIxYkdVZ1BTQnBibk4wWVd4c1pXUk5iMlIxYkdWelcyMXZaSFZzWlVsa1hTQTlJSHRjYmlCY2RGeDBYSFJwT2lCdGIyUjFiR1ZKWkN4Y2JpQmNkRngwWEhSc09pQm1ZV3h6WlN4Y2JpQmNkRngwWEhSbGVIQnZjblJ6T2lCN2ZWeHVJRngwWEhSOU8xeHVYRzRnWEhSY2RDOHZJRVY0WldOMWRHVWdkR2hsSUcxdlpIVnNaU0JtZFc1amRHbHZibHh1SUZ4MFhIUnRiMlIxYkdWelcyMXZaSFZzWlVsa1hTNWpZV3hzS0cxdlpIVnNaUzVsZUhCdmNuUnpMQ0J0YjJSMWJHVXNJRzF2WkhWc1pTNWxlSEJ2Y25SekxDQmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZLVHRjYmx4dUlGeDBYSFF2THlCR2JHRm5JSFJvWlNCdGIyUjFiR1VnWVhNZ2JHOWhaR1ZrWEc0Z1hIUmNkRzF2WkhWc1pTNXNJRDBnZEhKMVpUdGNibHh1SUZ4MFhIUXZMeUJTWlhSMWNtNGdkR2hsSUdWNGNHOXlkSE1nYjJZZ2RHaGxJRzF2WkhWc1pWeHVJRngwWEhSeVpYUjFjbTRnYlc5a2RXeGxMbVY0Y0c5eWRITTdYRzRnWEhSOVhHNWNibHh1SUZ4MEx5OGdaWGh3YjNObElIUm9aU0J0YjJSMWJHVnpJRzlpYW1WamRDQW9YMTkzWldKd1lXTnJYMjF2WkhWc1pYTmZYeWxjYmlCY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHViU0E5SUcxdlpIVnNaWE03WEc1Y2JpQmNkQzh2SUdWNGNHOXpaU0IwYUdVZ2JXOWtkV3hsSUdOaFkyaGxYRzRnWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtTWdQU0JwYm5OMFlXeHNaV1JOYjJSMWJHVnpPMXh1WEc0Z1hIUXZMeUJrWldacGJtVWdaMlYwZEdWeUlHWjFibU4wYVc5dUlHWnZjaUJvWVhKdGIyNTVJR1Y0Y0c5eWRITmNiaUJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dVpDQTlJR1oxYm1OMGFXOXVLR1Y0Y0c5eWRITXNJRzVoYldVc0lHZGxkSFJsY2lrZ2UxeHVJRngwWEhScFppZ2hYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV2S0dWNGNHOXlkSE1zSUc1aGJXVXBLU0I3WEc0Z1hIUmNkRngwVDJKcVpXTjBMbVJsWm1sdVpWQnliM0JsY25SNUtHVjRjRzl5ZEhNc0lHNWhiV1VzSUhzZ1pXNTFiV1Z5WVdKc1pUb2dkSEoxWlN3Z1oyVjBPaUJuWlhSMFpYSWdmU2s3WEc0Z1hIUmNkSDFjYmlCY2RIMDdYRzVjYmlCY2RDOHZJR1JsWm1sdVpTQmZYMlZ6VFc5a2RXeGxJRzl1SUdWNGNHOXlkSE5jYmlCY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVjaUE5SUdaMWJtTjBhVzl1S0dWNGNHOXlkSE1wSUh0Y2JpQmNkRngwYVdZb2RIbHdaVzltSUZONWJXSnZiQ0FoUFQwZ0ozVnVaR1ZtYVc1bFpDY2dKaVlnVTNsdFltOXNMblJ2VTNSeWFXNW5WR0ZuS1NCN1hHNGdYSFJjZEZ4MFQySnFaV04wTG1SbFptbHVaVkJ5YjNCbGNuUjVLR1Y0Y0c5eWRITXNJRk41YldKdmJDNTBiMU4wY21sdVoxUmhaeXdnZXlCMllXeDFaVG9nSjAxdlpIVnNaU2NnZlNrN1hHNGdYSFJjZEgxY2JpQmNkRngwVDJKcVpXTjBMbVJsWm1sdVpWQnliM0JsY25SNUtHVjRjRzl5ZEhNc0lDZGZYMlZ6VFc5a2RXeGxKeXdnZXlCMllXeDFaVG9nZEhKMVpTQjlLVHRjYmlCY2RIMDdYRzVjYmlCY2RDOHZJR055WldGMFpTQmhJR1poYTJVZ2JtRnRaWE53WVdObElHOWlhbVZqZEZ4dUlGeDBMeThnYlc5a1pTQW1JREU2SUhaaGJIVmxJR2x6SUdFZ2JXOWtkV3hsSUdsa0xDQnlaWEYxYVhKbElHbDBYRzRnWEhRdkx5QnRiMlJsSUNZZ01qb2diV1Z5WjJVZ1lXeHNJSEJ5YjNCbGNuUnBaWE1nYjJZZ2RtRnNkV1VnYVc1MGJ5QjBhR1VnYm5OY2JpQmNkQzh2SUcxdlpHVWdKaUEwT2lCeVpYUjFjbTRnZG1Gc2RXVWdkMmhsYmlCaGJISmxZV1I1SUc1eklHOWlhbVZqZEZ4dUlGeDBMeThnYlc5a1pTQW1JRGg4TVRvZ1ltVm9ZWFpsSUd4cGEyVWdjbVZ4ZFdseVpWeHVJRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1MElEMGdablZ1WTNScGIyNG9kbUZzZFdVc0lHMXZaR1VwSUh0Y2JpQmNkRngwYVdZb2JXOWtaU0FtSURFcElIWmhiSFZsSUQwZ1gxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5aDJZV3gxWlNrN1hHNGdYSFJjZEdsbUtHMXZaR1VnSmlBNEtTQnlaWFIxY200Z2RtRnNkV1U3WEc0Z1hIUmNkR2xtS0NodGIyUmxJQ1lnTkNrZ0ppWWdkSGx3Wlc5bUlIWmhiSFZsSUQwOVBTQW5iMkpxWldOMEp5QW1KaUIyWVd4MVpTQW1KaUIyWVd4MVpTNWZYMlZ6VFc5a2RXeGxLU0J5WlhSMWNtNGdkbUZzZFdVN1hHNGdYSFJjZEhaaGNpQnVjeUE5SUU5aWFtVmpkQzVqY21WaGRHVW9iblZzYkNrN1hHNGdYSFJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dWNpaHVjeWs3WEc0Z1hIUmNkRTlpYW1WamRDNWtaV1pwYm1WUWNtOXdaWEowZVNodWN5d2dKMlJsWm1GMWJIUW5MQ0I3SUdWdWRXMWxjbUZpYkdVNklIUnlkV1VzSUhaaGJIVmxPaUIyWVd4MVpTQjlLVHRjYmlCY2RGeDBhV1lvYlc5a1pTQW1JRElnSmlZZ2RIbHdaVzltSUhaaGJIVmxJQ0U5SUNkemRISnBibWNuS1NCbWIzSW9kbUZ5SUd0bGVTQnBiaUIyWVd4MVpTa2dYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTVrS0c1ekxDQnJaWGtzSUdaMWJtTjBhVzl1S0d0bGVTa2dleUJ5WlhSMWNtNGdkbUZzZFdWYmEyVjVYVHNnZlM1aWFXNWtLRzUxYkd3c0lHdGxlU2twTzF4dUlGeDBYSFJ5WlhSMWNtNGdibk03WEc0Z1hIUjlPMXh1WEc0Z1hIUXZMeUJuWlhSRVpXWmhkV3gwUlhod2IzSjBJR1oxYm1OMGFXOXVJR1p2Y2lCamIyMXdZWFJwWW1sc2FYUjVJSGRwZEdnZ2JtOXVMV2hoY20xdmJua2diVzlrZFd4bGMxeHVJRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1dUlEMGdablZ1WTNScGIyNG9iVzlrZFd4bEtTQjdYRzRnWEhSY2RIWmhjaUJuWlhSMFpYSWdQU0J0YjJSMWJHVWdKaVlnYlc5a2RXeGxMbDlmWlhOTmIyUjFiR1VnUDF4dUlGeDBYSFJjZEdaMWJtTjBhVzl1SUdkbGRFUmxabUYxYkhRb0tTQjdJSEpsZEhWeWJpQnRiMlIxYkdWYkoyUmxabUYxYkhRblhUc2dmU0E2WEc0Z1hIUmNkRngwWm5WdVkzUnBiMjRnWjJWMFRXOWtkV3hsUlhod2IzSjBjeWdwSUhzZ2NtVjBkWEp1SUcxdlpIVnNaVHNnZlR0Y2JpQmNkRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1a0tHZGxkSFJsY2l3Z0oyRW5MQ0JuWlhSMFpYSXBPMXh1SUZ4MFhIUnlaWFIxY200Z1oyVjBkR1Z5TzF4dUlGeDBmVHRjYmx4dUlGeDBMeThnVDJKcVpXTjBMbkJ5YjNSdmRIbHdaUzVvWVhOUGQyNVFjbTl3WlhKMGVTNWpZV3hzWEc0Z1hIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbThnUFNCbWRXNWpkR2x2YmlodlltcGxZM1FzSUhCeWIzQmxjblI1S1NCN0lISmxkSFZ5YmlCUFltcGxZM1F1Y0hKdmRHOTBlWEJsTG1oaGMwOTNibEJ5YjNCbGNuUjVMbU5oYkd3b2IySnFaV04wTENCd2NtOXdaWEowZVNrN0lIMDdYRzVjYmlCY2RDOHZJRjlmZDJWaWNHRmphMTl3ZFdKc2FXTmZjR0YwYUY5ZlhHNGdYSFJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG5BZ1BTQmNJbHdpTzF4dVhHNWNiaUJjZEM4dklFeHZZV1FnWlc1MGNua2diVzlrZFd4bElHRnVaQ0J5WlhSMWNtNGdaWGh3YjNKMGMxeHVJRngwY21WMGRYSnVJRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMThvWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1eklEMGdYQ0l1TDNOeVl5OXBibVJsZUM1cWMxd2lLVHRjYmlJc0ltWjFibU4wYVc5dUlGOWxlSFJsYm1SektDa2dlMXh1SUNCdGIyUjFiR1V1Wlhod2IzSjBjeUE5SUY5bGVIUmxibVJ6SUQwZ1QySnFaV04wTG1GemMybG5iaUI4ZkNCbWRXNWpkR2x2YmlBb2RHRnlaMlYwS1NCN1hHNGdJQ0FnWm05eUlDaDJZWElnYVNBOUlERTdJR2tnUENCaGNtZDFiV1Z1ZEhNdWJHVnVaM1JvT3lCcEt5c3BJSHRjYmlBZ0lDQWdJSFpoY2lCemIzVnlZMlVnUFNCaGNtZDFiV1Z1ZEhOYmFWMDdYRzVjYmlBZ0lDQWdJR1p2Y2lBb2RtRnlJR3RsZVNCcGJpQnpiM1Z5WTJVcElIdGNiaUFnSUNBZ0lDQWdhV1lnS0U5aWFtVmpkQzV3Y205MGIzUjVjR1V1YUdGelQzZHVVSEp2Y0dWeWRIa3VZMkZzYkNoemIzVnlZMlVzSUd0bGVTa3BJSHRjYmlBZ0lDQWdJQ0FnSUNCMFlYSm5aWFJiYTJWNVhTQTlJSE52ZFhKalpWdHJaWGxkTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNCOVhHNGdJQ0FnZlZ4dVhHNGdJQ0FnY21WMGRYSnVJSFJoY21kbGREdGNiaUFnZlR0Y2JseHVJQ0J5WlhSMWNtNGdYMlY0ZEdWdVpITXVZWEJ3Ykhrb2RHaHBjeXdnWVhKbmRXMWxiblJ6S1R0Y2JuMWNibHh1Ylc5a2RXeGxMbVY0Y0c5eWRITWdQU0JmWlhoMFpXNWtjenNpTENKcGJYQnZjblFnZXlCR2RXNWpkRzl5SUdGeklFSmhjMlZHZFc1amRHOXlJSDBnWm5KdmJTQW5ZMkYxYzJGc0xXNWxkQzVqYjNKbEp6dGNibWx0Y0c5eWRDQjdJSEJzWVhSbWIzSnRJSDBnWm5KdmJTQW5ZMkYxYzJGc0xXNWxkQzUxZEdsc2N5YzdYRzVwYlhCdmNuUWdjbUZ1Wkc5dElHWnliMjBnSjNKaGJtUnZiU2M3WEc1cGJYQnZjblFnZXlCa1pXWmhkV3gwSUdGeklGTjFZbE5oYlhCc2FXNW5UV2w0YVc1eklIMGdabkp2YlNBbkxpOXpkV0pUWVcxd2JHbHVaeTV0YVhocGJuTW5PMXh1YVcxd2IzSjBJSHNnWkdWbVlYVnNkQ0JoY3lCT1pXZFRZVzF3YkdsdVowMXBlR2x1Y3lCOUlHWnliMjBnSnk0dmJtVm5VMkZ0Y0d4cGJtY3ViV2w0YVc1ekp6dGNibHh1THlvcVhHNGdLaUJVYUdseklHTnNZWE56SUhCeWIzWnBaR1Z6SUdOdmJXMXZiaUIxYzJWa0lITmhiWEJzYVc1bklHMWxkR2h2WkhNZ2QyaHBZMmdnWTJGdUlHSmxJR0ZqWTJWemMyVmtJSFpwWVNBcUttTmhkWE5oYkU1bGRGTmhiWEJzYVc1bktpb3VYRzRnS2lCdGFYaDNhWFJvT2x4dUlDb2dXeUJUZFdKVFlXMXdiR2x1WjAxcGVHbHVjeXdnVG1WblUyRnRjR3hwYm1kTmFYaHBibk1nWFZ4dUlDb2dRR05zWVhOeklFTmhkWE5oYkU1bGRGTmhiWEJzYVc1blhHNGdLaUJBWlhoMFpXNWtjeUJHZFc1amRHOXlYRzRnS2lCQVpYaGhiWEJzWlZ4dUlDb2dXMFZZUVUxUVRFVWdMaTR2WlhoaGJYQnNaWE12WTJGMWMyRnNUbVYwVTJGdGNHeHBibWN1WW1GaVpXd3Vhbk5kWEc0Z0tpOWNibU5zWVhOeklFTmhkWE5oYkU1bGRGTmhiWEJzYVc1bklHVjRkR1Z1WkhNZ2NHeGhkR1p2Y20wdWJXbDRWMmwwYUNnZ1FtRnpaVVoxYm1OMGIzSXNJRnh1SUNBZ0lGc2dVM1ZpVTJGdGNHeHBibWROYVhocGJuTXNJRTVsWjFOaGJYQnNhVzVuVFdsNGFXNXpJRjBwZTF4dUlDQWdJR052Ym5OMGNuVmpkRzl5S0hKaGJtUnZiU2w3WEc0Z0lDQWdJQ0FnSUhOMWNHVnlLQ2s3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVVbUZ1Wkc5dElEMGdjbUZ1Wkc5dE95QWdJQ0JjYmlBZ0lDQjlYRzRnSUNBZ2NtRnVaRzl0S0hOb1lYQmxMQ0JrYVhOMGNtbGlkWFJwYjI0OUoyNXZjbTFoYkNjc0lIc3VMaTVoY21kemZUMTdmU2w3WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJR3hsYm1kMGFDQTlJSE5vWVhCbExuSmxaSFZqWlNnb1kyUXNjeWs5UG1Oa0tuTXBPMXh1SUNBZ0lDQWdJQ0JqYjI1emRDQm5aVzVsY21GMGIzSWdQU0IwYUdsekxsSmhibVJ2YlM1dWIzSnRZV3dvS1R0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhSb2FYTXVVaTV5WVc1blpTZ3dMR3hsYm1kMGFDa3ViV0Z3S0NncFBUNW5aVzVsY21GMGIzSW9LU2s3WEc0Z0lDQWdmVnh1ZlZ4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCdVpYY2dRMkYxYzJGc1RtVjBVMkZ0Y0d4cGJtY29jbUZ1Wkc5dEtUc2lMQ0psZUhCdmNuUWdleUJrWldaaGRXeDBJR0Z6SUdOaGRYTmhiRTVsZEZOaGJYQnNhVzVuSUgwZ1puSnZiU0FuTGk5allYVnpZV3hPWlhSVFlXMXdiR2x1WnljN1hHNWxlSEJ2Y25RZ2V5QmtaV1poZFd4MElHRnpJRk5oYlhCc2FXNW5UV2w0YVc1eklIMGdabkp2YlNBbkxpOXpZVzF3YkdsdVp5NXRhWGhwYm5Nbk8xeHVYRzVsZUhCdmNuUWdleUJrWldaaGRXeDBJR0Z6SUZOMVlsTmhiWEJzYVc1blRXbDRhVzV6SUgwZ1puSnZiU0FuTGk5emRXSlRZVzF3YkdsdVp5NXRhWGhwYm5Nbk8xeHVaWGh3YjNKMElIc2daR1ZtWVhWc2RDQmhjeUJPWldkVFlXMXdiR2x1WjAxcGVHbHVjeUI5SUdaeWIyMGdKeTR2Ym1WblUyRnRjR3hwYm1jdWJXbDRhVzV6SnpzaUxDSmpiMjV6ZENCT1pXZGhkR2wyWlZOaGJYQnNhVzVuVFdsNGFXNXpJRDBnS0VKaGMyVlRZVzF3YkdsdVowTnNZWE56S1QwK0lHTnNZWE56SUdWNGRHVnVaSE1nUW1GelpWTmhiWEJzYVc1blEyeGhjM043WEc0Z0lDQWdMeW9xWEc0Z0lDQWdJQ29nVUdWeVptOXliU0J1WldkaGRHbDJaU0J6WVcxd2JHbHVaeUJuYVhabGJpQjBhR1VnYzJWc1pXTjBJSEJ5YjJJZ2IyWWdhV1J6SUdGdVpDQnNhWE4wSUc5bUlIQnZjMmwwYVhabElITmhiWEJzWlhOY2JpQWdJQ0FnS2lCQWNHRnlZVzBnZXlCT2RXMWlaWElnZlNCdVpXZGhkR2wyWlZOcGVtVWdMU0J6YVhwbElIUnZJSE5oYlhCc1pWeHVJQ0FnSUNBcUlFQndZWEpoYlNCN0lFRnljbUY1SUgwZ2NHOXphWFJwZG1WVFlXMXdiR1Z6SUMwZ1FYSnlZWGtnYjJZZ2NHOXpjMmwwYVhabElFbGtjMXh1SUNBZ0lDQXFJRUJ3WVhKaGJTQjdJRUZ5Y21GNUlIMGdZMkZ1Wkdsa1lYUmxVSEp2WW5NZ0xTQkJjbkpoZVNCdlppQndjbTlpWVdKc2FYUjVJRzltSUdOaGJtUnBaR0YwWlNCSlpITmNiaUFnSUNBZ0tpQkFjR0Z5WVcwZ2V5QkNiMjlzWldGdUlIMGdXM0psY0d4aFkyRmliR1U5ZEhKMVpWMGdMU0JwWmlCMGNuVmxMQ0J1YnlCa2RYQnNhV05oZEdWa0lITmhiWEJzYVc1bklFbGtJSEpsZEhWeWJtVmtYRzRnSUNBZ0lDb2dRSEpsZEhWeWJuTWdleUJCY25KaGVTQjlJR0Z5Y21GNUlHOW1JSE5oYlhCc1pXUWdTV1J6WEc0Z0lDQWdJQ292WEc0Z0lDQWdibVZuVTJGdGNHeHBibWNvYm1WbllYUnBkbVZUYVhwbExDQndiM05wZEdsMlpWTmhiWEJzWlhNc0lHTmhibVJwWkdGMFpWQnliMkp6TENCeVpYQnNZV05oWW14bFBYUnlkV1VwZTF4dUlDQWdJQ0FnSUNCamIyNXpkQ0JTSUQwZ2RHaHBjeTVTTENCU1lXNWtiMjBnUFNCMGFHbHpMbEpoYm1SdmJUdGNiaUFnSUNBZ0lDQWdhV1lvVWk1aGJua29LSFlwUFQ0Z0lWSXVkSGx3WlNoT2RXMWlaWElzZGlrZ2ZId2dkaUErSURFZ2ZId2dkaUE4SURBc0lHTmhibVJwWkdGMFpWQnliMkp6S1NsN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUhKdmR5QkZjbkp2Y2loZ0pIdEtVMDlPTG5OMGNtbHVaMmxtZVNoallXNWthV1JoZEdWUWNtOWljeWw5SUdseklHNXZkQ0JoYkd4dmQyQXBPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUd4bGRDQnpaV3hsZEdsdmJsQnliMkp6SUQwZ1VpNXlaV1IxWTJVb0tITmxiR1ZqZEdsdmJsQnliMkp6TENCd2FXUjRLVDArZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J6Wld4bFkzUnBiMjVRY205aWMxdHdhV1I0WFNBOUlFbHVabWx1YVhSNU95OHZjRzl6YVhScGRtVWdZMkZ1Wkdsa1lYUmxJRzVsZG1WeUlHSmxJR05vYjI5elpXUmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUhObGJHVmpkR2x2YmxCeWIySnpPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgwc0lGSXVZMnh2Ym1Vb1kyRnVaR2xrWVhSbFVISnZZbk1wTENCd2IzTnBkR2wyWlZOaGJYQnNaWE1wTzF4dUlDQWdJQ0FnSUNCc1pYUWdjMkZ0Y0d4bGN5QTlJRnRkTENCMFlXdGxia2xrZUhNZ1BTQlNMbU5zYjI1bEtITmxiR1YwYVc5dVVISnZZbk1wTzF4dUlDQWdJQ0FnSUNCamIyNXpkQ0JIWlc1T1pYZERZVzVrYVdSaGRHVkpaSGdnUFNBb0tUMCtVbUZ1Wkc5dExtbHVkQ2d3TENCelpXeGxkR2x2YmxCeWIySnpMbXhsYm1kMGFDMHhLVHRjYmlBZ0lDQWdJQ0FnWTI5dWMzUWdVMlZzWldOMFNXWklhV2RvVUhKdllpQTlJQ2h3Y205aUtUMCtlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2JHVjBJSEpoYm1RZ1BTQlNZVzVrYjIwdVpteHZZWFFvS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQnlZVzVrUG5CeWIySTdYRzRnSUNBZ0lDQWdJSDA3WEc0Z0lDQWdJQ0FnSUhkb2FXeGxLSE5oYlhCc1pYTXViR1Z1WjNSb0lEd2dibVZuWVhScGRtVlRhWHBsS1h0Y2JpQWdJQ0FnSUNBZ0lDQWdJR3hsZENCcFpIZ2dQU0JIWlc1T1pYZERZVzVrYVdSaGRHVkpaSGdvS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJR3hsZENCelpXeGxZM1JsWkNBOUlGTmxiR1ZqZEVsbVNHbG5hRkJ5YjJJb2MyVnNaWFJwYjI1UWNtOWljMXRwWkhoZEtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUtDRnpaV3hsWTNSbFpDbDdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZMjl1ZEdsdWRXVTdYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlnaGNtVndiR0ZqWVdKc1pTQW1KaUIwWVd0bGJrbGtlSE5iYVdSNFhUMDlQVzUxYkd3cGUxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHTnZiblJwYm5WbE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdjMkZ0Y0d4bGN5QTlJRnN1TGk1ellXMXdiR1Z6TENCcFpIaGRPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWW9JWEpsY0d4aFkyRmliR1VwZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhSaGEyVnVTV1I0YzF0cFpIaGRQVzUxYkd3N0x5OXViMjRnY21Wd2JHRmpaV0ZpYkdWY2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZlNBZ0lDQmNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlITmhiWEJzWlhNN1hHNGdJQ0FnZlZ4dWZUdGNibVY0Y0c5eWRDQmtaV1poZFd4MElFNWxaMkYwYVhabFUyRnRjR3hwYm1kTmFYaHBibk03SWl3aWFXMXdiM0owSUhzZ1JuVnVZM1J2Y2lCOUlHWnliMjBnSjJOaGRYTmhiQzF1WlhRdVkyOXlaU2M3WEc1cGJYQnZjblFnZXlCaGMzTmxjblFnZlNCbWNtOXRJQ2RqWVhWellXd3RibVYwTG5WMGFXeHpKenRjYmk4cUtseHVJQ29nVkdocGN5QnRhWGhwYmlCamJHRnpjeUJ3Y205MmFXUmxJR0YwZEhKcFluVjBaWE02SUNvcVUyRnRjR3hwYm1jcUtpNWNiaUFxSUVCamJHRnpjeUJUWVcxd2JHbHVaMDFwZUdsdWMxeHVJQ29nUUdWNGRHVnVaSE1nUW1GelpVTnNZWE56WEc0Z0tpQkFaWGhoYlhCc1pWeHVJQ29nVzBWWVFVMVFURVVnTGk0dlpYaGhiWEJzWlhNdmMyRnRjR3hwYm1jdWJXbDRhVzV6TG1KaFltVnNMbXB6WFZ4dUlDb3ZYRzVqYjI1emRDQlRZVzF3YkdsdVowMXBlR2x1Y3lBOUlDaENZWE5sUTJ4aGMzTXBQVDRnWTJ4aGMzTWdaWGgwWlc1a2N5QkNZWE5sUTJ4aGMzTjdYRzRnSUNBZ0x5b3FYRzRnSUNBZ0lDb2daMlYwSUdOMWNuSmxiblFnY21GdVpHOXRJR2x1YzNSaGJtTmxYRzRnSUNBZ0lDb3ZYRzRnSUNBZ1oyVjBJRk5oYlhCc2FXNW5LQ2w3WEc0Z0lDQWdJQ0FnSUdsbUtDRjBhR2x6TG5OaGJYQnNhVzVuS1h0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJvY205M0lFVnljbTl5S0dCVFlXMXdiR2x1WnlCcGN5QnViM1FnYzJWMFlDazdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSFJvYVhNdWMyRnRjR3hwYm1jN1hHNGdJQ0FnZlZ4dUlDQWdJRnh1SUNBZ0lDOHFLbHh1SUNBZ0lDQXFJSE5sZENCVFlXMXdiR2x1WnlCcGJuTjBZVzVqWlZ4dUlDQWdJQ0FxSUVCeVpXRmtiMjVzZVZ4dUlDQWdJQ0FxTDF4dUlDQWdJSE5sZENCVFlXMXdiR2x1WnloellXMXdiR2x1WnlsN1hHNGdJQ0FnSUNBZ0lHRnpjMlZ5ZEM1aVpVbHVjM1JoYm1ObFQyWW9jMkZ0Y0d4cGJtY3NJRVoxYm1OMGIzSXBPMXh1SUNBZ0lDQWdJQ0IwYUdsekxuTmhiWEJzYVc1bklEMGdjMkZ0Y0d4cGJtYzdYRzRnSUNBZ2ZWeHVmVHRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnVTJGdGNHeHBibWROYVhocGJuTTdJaXdpWTI5dWMzUWdVM1ZpVTJGdGNHeHBibWROYVhocGJuTWdQU0FvUW1GelpWTmhiWEJzYVc1blEyeGhjM01wSUQwK0lHTnNZWE56SUdWNGRHVnVaSE1nUW1GelpWTmhiWEJzYVc1blEyeGhjM043WEc0Z0lDQWdMeW9xWEc0Z0lDQWdJQ29nVUdWeVptOXliU0IxYm1sbWIzSnRJSE5oYlhCc1pTQmhJSE4xWWlCelpYUWdiMllnU1dSeklHZHBkbVZ1SUhSb1pTQmpZVzVrYVdSaGRHVWdiR2x6ZEZ4dUlDQWdJQ0FxSUVCd1lYSmhiU0I3SUU1MWJXSmxjaUI5SUhOaGJYQnNhVzVuVTJsNlpWeHVJQ0FnSUNBcUlFQndZWEpoYlNCN0lFRnljbUY1ZkU1MWJXSmxjaUI5SUdOaGJtUnBaR0YwWlV4cGMzUWdMU0JzYVhOMElHOW1JR05oYm1ScFpHRjBaWE1nYjNJZ2MybDZaU0J2WmlCallXNWthV1JoZEdVZ2JHbHpkRnh1SUNBZ0lDQXFJRUJ3WVhKaGJTQjdJRUp2YjJ4bFlXNGdmU0JiY21Wd2JHRmpZV0pzWlQxMGNuVmxYU0F0SUdsbUlIUnlkV1VzSUc1dklHUjFjR3hwWTJGMFpXUWdjMkZ0Y0d4cGJtY2dTV1FnY21WMGRYSnVaV1JjYmlBZ0lDQWdLaUJBY21WMGRYSnVjeUI3SUVGeWNtRjVJSDBnWVhKeVlYa2diMllnYzJGdGNHeGxaQ0JKWkhOY2JpQWdJQ0FnS2k5Y2JpQWdJQ0J6ZFdKVFlXMXdiR2x1WnloellXMXdiR2x1WjFOcGVtVXNJR05oYm1ScFpHRjBaVXhwYzNRc0lISmxjR3hoWTJGaWJHVTlkSEoxWlNsN1hHNGdJQ0FnSUNBZ0lHTnZibk4wSUZJZ1BTQjBhR2x6TGxJc0lGSmhibVJ2YlNBOUlIUm9hWE11VW1GdVpHOXRPMXh1SUNBZ0lDQWdJQ0JzWlhRZ1kyRnVaR2xrWVhSbGN5QTlJRUZ5Y21GNUxtbHpRWEp5WVhrb1kyRnVaR2xrWVhSbFRHbHpkQ2svVWk1amJHOXVaU2hqWVc1a2FXUmhkR1ZNYVhOMEtUcFNMbkpoYm1kbEtEQXNJR05oYm1ScFpHRjBaVXhwYzNRcE8xeHVJQ0FnSUNBZ0lDQnBaaWhqWVc1a2FXUmhkR1Z6TG14bGJtZDBhQ0E5UFQwZ01DbDdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFISnZkeUJGY25KdmNpZ25ZMkZ1Wkdsa1lYUmxJR3hsYm1kMGFDQnphRzkxYkdRZ1ltVWdjRzl6YVhScGRtVW5LVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCc1pYUWdjMkZ0Y0d4bGN5QTlJRnRkTENCMFlXdGxia2xrZUhNZ1BTQlNMbU5zYjI1bEtHTmhibVJwWkdGMFpYTXBPMXh1SUNBZ0lDQWdJQ0JqYjI1emRDQkhaVzVPWlhkRFlXNWthV1JoZEdWSlpIZ2dQU0FvS1QwK1VtRnVaRzl0TG1sdWRDZ3dMQ0JqWVc1a2FXUmhkR1Z6TG14bGJtZDBhQzB4S1R0Y2JpQWdJQ0FnSUNBZ2QyaHBiR1VvYzJGdGNHeGxjeTVzWlc1bmRHZ2dQQ0J6WVcxd2JHbHVaMU5wZW1VcGUxeHVJQ0FnSUNBZ0lDQWdJQ0FnYkdWMElHbGtlQ0E5SUVkbGJrNWxkME5oYm1ScFpHRjBaVWxrZUNncE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZb0lYSmxjR3hoWTJGaWJHVWdKaVlnZEdGclpXNUpaSGh6VzJsa2VGMDlQVDF1ZFd4c0tYdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmpiMjUwYVc1MVpUdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ0lDQWdJSE5oYlhCc1pYTWdQU0JiTGk0dWMyRnRjR3hsY3l3Z1kyRnVaR2xrWVhSbGMxdHBaSGhkWFR0Y2JpQWdJQ0FnSUNBZ0lDQWdJR2xtS0NGeVpYQnNZV05oWW14bEtYdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjBZV3RsYmtsa2VITmJhV1I0WFQxdWRXeHNPeTh2Ym05dUlISmxjR3hoWTJWaFlteGxYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lIMGdJQ0FnWEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJ6WVcxd2JHVnpPMXh1SUNBZ0lIMWNibjA3WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JUZFdKVFlXMXdiR2x1WjAxcGVHbHVjenNpTENKdGIyUjFiR1V1Wlhod2IzSjBjeUE5SUY5ZlYwVkNVRUZEUzE5RldGUkZVazVCVEY5TlQwUlZURVZmWTJGMWMyRnNYMjVsZEY5amIzSmxYMTg3SWl3aWJXOWtkV3hsTG1WNGNHOXlkSE1nUFNCZlgxZEZRbEJCUTB0ZlJWaFVSVkpPUVV4ZlRVOUVWVXhGWDJOaGRYTmhiRjl1WlhSZmRYUnBiSE5mWHpzaUxDSnRiMlIxYkdVdVpYaHdiM0owY3lBOUlGOWZWMFZDVUVGRFMxOUZXRlJGVWs1QlRGOU5UMFJWVEVWZmNtRnVaRzl0WDE4N0lsMHNJbk52ZFhKalpWSnZiM1FpT2lJaWZRPT0iLCJpbXBvcnQgeyBUZW5zb3IgYXMgQmFzZVRlbnNvciB9IGZyb20gJ2NhdXNhbC1uZXQuY29yZSc7XG5pbXBvcnQgeyBwbGF0Zm9ybSB9IGZyb20gJ2NhdXNhbC1uZXQudXRpbHMnO1xuLyoqXG4gKiBUaGlzIGNsYXNzIHByb3ZpZGVzIGV2YWx1YXRpb24gbWV0cmljcyBtZXRob2RzIHdoaWNoIGNhbiBiZSBhY2Nlc3NlZCB2aWEgKipjYXVzYWxOZXRNZXRyaWNzKiogaW5zdGFuY2UuXG4gKlxuICogQGNsYXNzIENhdXNhbE5ldE1ldHJpY3NcbiAqIEBleHRlbmRzIHtUZW5zb3J9XG4gKiBAZXhhbXBsZVxuICogW0VYQU1QTEUgLi4vZXhhbXBsZXMvY2F1c2FsTmV0TWV0cmljcy5iYWJlbC5qc11cbiAqL1xuY2xhc3MgQ2F1c2FsTmV0TWV0cmljcyBleHRlbmRzIHBsYXRmb3JtLm1peFdpdGgoQmFzZVRlbnNvciwgW10pe1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuICAgIGFjY3VyYWN5KG9uZUhvdFByZWRpY3RzLCBvbmVIb3RMYWJlbHMsIG1hc2tpbmdMYWJlbHM9bnVsbCl7XG4gICAgICAgIGxldCBsYWJlbFNjb3JlcyA9ICB0aGlzLlQuZXF1YWwob25lSG90UHJlZGljdHMuYXJnTWF4KC0xKSwgb25lSG90TGFiZWxzLmFyZ01heCgtMSkpO1xuICAgICAgICBpZihtYXNraW5nTGFiZWxzKXtcbiAgICAgICAgICAgIGxhYmVsU2NvcmVzID0gbGFiZWxTY29yZXMubXVsKG1hc2tpbmdMYWJlbHMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsYWJlbFNjb3Jlcy5tZWFuKCk7XG4gICAgfVxuICAgIG1zZShwcmVkaWN0cywgbGFiZWxzLCBtYXNraW5nTGFibGVzPW51bGwpe1xuICAgICAgICBsZXQgbGFiZWxTY29yZXMgPSBwcmVkaWN0cy5zdWIobGFiZWxzKS5wb3coMik7XG4gICAgICAgIGlmKG1hc2tpbmdMYWJsZXMpe1xuICAgICAgICAgICAgbGFiZWxTY29yZXMgPSBsYWJlbFNjb3Jlcy5tdWwobWFza2luZ0xhYmVscyk7XG4gICAgICAgICAgICByZXR1cm4gbGFiZWxTY29yZXMuZGl2KG1hc2tpbmdMYWJsZXMuY3Vtc3VtKCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsYWJlbFNjb3Jlcy5tZWFuKCk7XG4gICAgfVxuICAgIG1hZShwcmVkaWN0cywgbGFiZWxzLCBtYXNraW5nTGFibGVzPW51bGwpe1xuICAgICAgICBsZXQgbGFiZWxTY29yZXMgPSBwcmVkaWN0cy5zdWIobGFiZWxzKS5hYnMoKTtcbiAgICAgICAgaWYobWFza2luZ0xhYmxlcyl7XG4gICAgICAgICAgICBsYWJlbFNjb3JlcyA9IGxhYmVsU2NvcmVzLm11bChtYXNraW5nTGFiZWxzKTtcbiAgICAgICAgICAgIHJldHVybiBsYWJlbFNjb3Jlcy5kaXYobWFza2luZ0xhYmxlcy5jdW1zdW0oKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxhYmVsU2NvcmVzLm1lYW4oKTtcbiAgICB9XG4gICAgXG4gICAgS0xwcShwLCBxLCBtYXNraW5nTGFiZWxzPW51bGwpe1xuICAgICAgICBjb25zdCBlc3AgPSB0aGlzLlQuc2NhbGFyKDFlLTYpO1xuICAgICAgICByZXR1cm4gcC5tdWwodGhpcy5ULmxvZyhwLmRpdihxKSkpLnN1bSgpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IENhdXNhbE5ldE1ldHJpY3MoKTsiLCJleHBvcnQgeyBkZWZhdWx0IGFzIGNhdXNhbE5ldE1ldHJpY3MgfSBmcm9tICcuL2NhdXNhbE5ldE1ldHJpY3MnOyIsImltcG9ydCB7IGRlZmF1bHQgYXMgQmFzZU1vZGVsIH0gZnJvbSAnLi9iYXNlTW9kZWwnO1xuaW1wb3J0IHsgY2F1c2FsTmV0TWV0cmljcyB9IGZyb20gJy4vTWV0cmljcy9pbmRleCc7XG5cbmNsYXNzIEF1dG9FbmNvZGVyIGV4dGVuZHMgQmFzZU1vZGVse1xuICAgIGNvbnN0cnVjdG9yKHttZXRyaWNzPSdtc2UnfT17fSl7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuTWVhc3VyZUVycm9yID0gY2F1c2FsTmV0TWV0cmljc1ttZXRyaWNzXTtcbiAgICB9XG5cbiAgICBzZXQgTGF5ZXJSdW5uZXIobGF5ZXJSdW5uZXIpe1xuICAgICAgICBsZXQgeyBMYXllckVuY29kZSwgTGF5ZXJEZWNvZGUgfSA9IGxheWVyUnVubmVyO1xuICAgICAgICB0aGlzLnJ1bm5lciA9IHsgTGF5ZXJFbmNvZGUsIExheWVyRGVjb2RlIH07XG4gICAgfVxuXG4gICAgZ2V0IExheWVyUnVubmVyKCl7XG4gICAgICAgIGlmKCF0aGlzLnJ1bm5lcil7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcigncnVubmVyIGlzIG5vdCBzZXQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5ydW5uZXI7XG4gICAgfVxuICAgIFxuICAgIGdldCBGaXQoKXtcbiAgICAgICAgY29uc3QgeyBMYXllckVuY29kZSwgTGF5ZXJEZWNvZGUgfSA9IHRoaXMuTGF5ZXJSdW5uZXI7XG4gICAgICAgIHJldHVybiAoaW5wdXRUZW5zb3IsIGNvbnRleHRzKT0+e1xuICAgICAgICAgICAgbGV0IGVuY29kZVRlbnNvciA9IExheWVyRW5jb2RlKGlucHV0VGVuc29yLCBjb250ZXh0cyk7XG4gICAgICAgICAgICBsZXQgZGVjb2RlVGVuc29yID0gTGF5ZXJEZWNvZGUoZW5jb2RlVGVuc29yLCBjb250ZXh0cyk7XG4gICAgICAgICAgICByZXR1cm4gZGVjb2RlVGVuc29yO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBcbiAgICBnZXQgRW5jb2RlKCl7XG4gICAgICAgIGNvbnN0IHsgTGF5ZXJFbmNvZGUgfSA9IHRoaXMuTGF5ZXJSdW5uZXI7XG4gICAgICAgIHJldHVybiAoaW5wdXRUZW5zb3IsIGNvbnRleHRzKT0+e1xuICAgICAgICAgICAgbGV0IGVuY29kZVRlbnNvciA9IExheWVyRW5jb2RlKGlucHV0VGVuc29yLCBjb250ZXh0cyk7XG4gICAgICAgICAgICByZXR1cm4gZW5jb2RlVGVuc29yOyBcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZ2V0IFJlY29uc3RydWN0KCl7XG4gICAgICAgIGNvbnN0IHsgTGF5ZXJFbmNvZGUsIExheWVyRGVjb2RlIH0gPSB0aGlzLkxheWVyUnVubmVyO1xuICAgICAgICByZXR1cm4gKGlucHV0VGVuc29yLCBjb250ZXh0cyk9PntcbiAgICAgICAgICAgIGxldCBlbmNvZGVUZW5zb3IgPSBMYXllckVuY29kZShpbnB1dFRlbnNvciwgY29udGV4dHMpO1xuICAgICAgICAgICAgbGV0IGRlY29kZVRlbnNvciA9IExheWVyRGVjb2RlKGVuY29kZVRlbnNvciwgY29udGV4dHMpO1xuICAgICAgICAgICAgcmV0dXJuIGRlY29kZVRlbnNvcjsgXG4gICAgICAgIH07XG4gICAgfVxuICAgIGdldCBMb3NzKCl7XG4gICAgICAgIGNvbnN0IEZpdCA9IHRoaXMuRml0O1xuICAgICAgICByZXR1cm4gKGlucHV0VGVuc29yLCBsYWJlbFRlbnNvciwgY29udGV4dHMpPT57XG4gICAgICAgICAgICBsZXQgZGVjb2RlVGVuc29yID0gRml0KGlucHV0VGVuc29yLCBjb250ZXh0cyk7XG4gICAgICAgICAgICBsZXQgbG9zcyA9IHRoaXMuTWVhc3VyZUVycm9yKGRlY29kZVRlbnNvciwgaW5wdXRUZW5zb3IpO1xuICAgICAgICAgICAgcmV0dXJuIGxvc3M7XG4gICAgICAgIH07XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBdXRvRW5jb2RlcjsiLCJpbXBvcnQgeyBUZW5zb3IgfSBmcm9tICdjYXVzYWwtbmV0LmNvcmUnO1xuY2xhc3MgQmFzZU1vZGVsIGV4dGVuZHMgVGVuc29ye1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubW9kZWxOYW1lID0gJyc7XG4gICAgfVxuXG4gICAgc2V0IExheWVyUnVubmVyKHJ1bm5lcil7XG4gICAgICAgIHRocm93IEVycm9yKCdpbXBsZW1lbnQgcmVxdWlyZWQnKTtcbiAgICB9XG5cbiAgICBnZXQgTGF5ZXJSdW5uZXIoKXtcbiAgICAgICAgdGhyb3cgRXJyb3IoJ2ltcGxlbWVudCByZXF1aXJlZCcpO1xuICAgIH1cblxuICAgIGZpdCgpe1xuICAgICAgICB0aHJvdyBFcnJvcignaW1wbGVtZW50IHJlcXVpcmVkJyk7XG4gICAgfVxuXG4gICAgbG9zcygpe1xuICAgICAgICB0aHJvdyBFcnJvcignaW1wbGVtZW50IHJlcXVpcmVkJyk7XG4gICAgfVxuXG4gICAgZ2V0IFByZWRpY3QoKXtcbiAgICAgICAgdGhyb3cgRXJyb3IoJ21vZGVsIG5vdCBzdXBwb3J0Jyk7XG4gICAgfVxuICAgIGdldCBPbmVIb3RQcmVkaWN0KCl7XG4gICAgICAgIHRocm93IEVycm9yKCdtb2RlbCBub3Qgc3VwcG9ydCcpO1xuICAgIH1cblxuICAgIGdldCBFbmNvZGUoKXtcbiAgICAgICAgdGhyb3cgRXJyb3IoJ21vZGVsIG5vdCBzdXBwb3J0Jyk7XG4gICAgfVxuXG4gICAgZ2V0IFJlY29uc3RydWN0KCl7XG4gICAgICAgIHRocm93IEVycm9yKCdtb2RlbCBub3Qgc3VwcG9ydCcpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQmFzZU1vZGVsOyIsImltcG9ydCB7IHBsYXRmb3JtIH0gZnJvbSAnY2F1c2FsLW5ldC51dGlscyc7XG5pbXBvcnQgeyBUZW5zb3IgYXMgQmFzZVRlbnNvciB9IGZyb20gJ2NhdXNhbC1uZXQuY29yZSc7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIFNpbmdsZUxhYmVsQ2xhc3NpZmljYXRpb24gfSBmcm9tICcuL3NpbmdsZUxhYmxlQ2xhc3NpZmljYXRpb24nO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBBdXRvRW5jb2RlciB9IGZyb20gJy4vYXV0b0VuY29kZXInO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBSQk0gfSBmcm9tICcuL3Jlc3RyaWN0ZWRCb3p0bWFuTWFjaGluZSc7XG5cbi8qKlxuICogVGhpcyBjbGFzcyBwcm92aWRlIGNvbW1vbiB1c2VkIG1vZGVscyB3aGljaCBjYW4gYmUgYWNjZXNzZWQgdmlhICoqY2F1c2FsTmV0TW9kZWxzKiogaW5zdGFuY2UuXG4gKiBAY2xhc3MgQ2F1c2FsTmV0TW9kZWxzXG4gKiBAZXh0ZW5kcyBCYXNlVGVuc29yXG4gKiBAZXhhbXBsZVxuICogW0VYQU1QTEUgLi4vZXhhbXBsZXMvc2luZ2xlTGFiZWxDbGFzc2lmaWNhdGlvbi5iYWJlbC5qc11cbiAqL1xuY2xhc3MgQ2F1c2FsTmV0TW9kZWxzIGV4dGVuZHMgcGxhdGZvcm0ubWl4V2l0aCggQmFzZVRlbnNvciwgW10gKXtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cbiAgICBcbiAgICBjbGFzc2lmaWNhdGlvbihudW1DbGFzcyl7XG4gICAgICAgIHRoaXMubW9kZWwgPSBuZXcgU2luZ2xlTGFiZWxDbGFzc2lmaWNhdGlvbihudW1DbGFzcyk7XG4gICAgICAgIHJldHVybiB0aGlzLm1vZGVsO1xuICAgIH1cblxuICAgIGF1dG9FbmNvZGVyKCl7XG4gICAgICAgIHRoaXMubW9kZWwgPSBuZXcgQXV0b0VuY29kZXIoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMubW9kZWw7XG4gICAgfVxuICAgIFJCTSgpe1xuICAgICAgICBjb25zb2xlLmxvZyh7UkJNfSk7XG4gICAgICAgIHRoaXMubW9kZWwgPSBuZXcgUkJNKCk7XG4gICAgICAgIHJldHVybiB0aGlzLm1vZGVsO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IG5ldyBDYXVzYWxOZXRNb2RlbHMoKTsiLCIvKipcbiAqIFRoaXMgbWl4aW4gY2xhc3MgcHJvdmlkZXMgbWV0aG9kczogKip0ZXN0KiogYW5kIFxuICogaGFuZGxlICoqVGVzdERhdGFHZW5lcmF0b3IqKiBzZXR0aW5nIG9mIHBpcGVsaW5lQ29uZmlnLkRhdGFzZXQuXG4gKlxuICogQGNsYXNzIEV2YWx1YXRvck1peGluc1xuICogQGV4dGVuZHMge0Jhc2VQaXBlbGluZUNsYXNzfVxuICogQGV4YW1wbGVcbiAqIFtFWEFNUExFIC4uL2V4YW1wbGVzL3RyYWluZXIubWl4aW5zLmJhYmVsLmpzXVxuICovXG5jb25zdCBFdmFsdWF0b3JNaXhpbnMgPSAoQmFzZVBpcGVsaW5lQ2xhc3MpPT4gY2xhc3MgZXh0ZW5kcyBCYXNlUGlwZWxpbmVDbGFzc3tcbiAgICBcbiAgICBnZXQgVGVzdERhdGFHZW5lcmF0b3IoKXtcbiAgICAgICAgaWYoIXRoaXMudGVzdERhdGFHZW5lcmF0b3Ipe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ3Rlc3REYXRhR2VuZXJhdG9yIGlzIG5vdCBzZXQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy50ZXN0RGF0YUdlbmVyYXRvcjtcbiAgICB9XG4gICAgc2V0IFRlc3REYXRhR2VuZXJhdG9yKHRlc3REYXRhR2VuZXJhdG9yKXtcbiAgICAgICAgdGhpcy50ZXN0RGF0YUdlbmVyYXRvciA9IHRlc3REYXRhR2VuZXJhdG9yO1xuICAgIH1cblxuICAgIGFzeW5jIHRlc3Qoe21ldHJpY3M9WydhY2N1cmFjeSddfT17fSl7XG4gICAgICAgIGNvbnNvbGUubG9nKHttZXRyaWNzfSk7XG4gICAgICAgIGNvbnN0IFQgPSB0aGlzLlQsIFIgPSB0aGlzLkYuQ29yZUZ1bmN0b3I7XG4gICAgICAgIGNvbnN0IFRlc3REYXRhR2VuZXJhdG9yID0gdGhpcy5UZXN0RGF0YUdlbmVyYXRvciwgXG4gICAgICAgICAgICAgIE9uZUhvdFByZWRpY3RNb2RlbCA9IHRoaXMuT25lSG90UHJlZGljdE1vZGVsO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgKHJlc29sdmUsIHJlamVjdCk9PntcbiAgICAgICAgICAgIGNvbnN0IHRlc3REYXRhID0gVGVzdERhdGFHZW5lcmF0b3IoKTsvL3Rha2UgYWxsICAgIFxuICAgICAgICAgICAgZm9yIGF3YWl0IChsZXQgeyBzYW1wbGVzLCBsYWJlbHMgfSBvZiB0ZXN0RGF0YSl7XG4gICAgICAgICAgICAgICAgbGV0IHNhbXBsZVRlbnNvciA9IFQudGVuc29yKHNhbXBsZXMpLmFzVHlwZSgnZmxvYXQzMicpO1xuICAgICAgICAgICAgICAgIGxldCBsYWJlbFRlbnNvciA9IFQudGVuc29yKGxhYmVscykuYXNUeXBlKCdmbG9hdDMyJyk7XG4gICAgICAgICAgICAgICAgbGV0IHByZWRpY3RUZW5zb3IgPSBPbmVIb3RQcmVkaWN0TW9kZWwoc2FtcGxlVGVuc29yKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBhY2N1cmFjeSA9IFIubWVhbihwYXNzKTtcbiAgICAgICAgICAgIHJlc29sdmUoe2FjY3VyYWN5LCBwYXNzfSk7ICAgICBcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2V0QnlDb25maWcocGlwZWxpbmVDb25maWcpe1xuICAgICAgICBpZihzdXBlci5zZXRCeUNvbmZpZyl7XG4gICAgICAgICAgICBzdXBlci5zZXRCeUNvbmZpZyhwaXBlbGluZUNvbmZpZyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5Mb2dnZXIuZ3JvdXBCZWdpbignc2V0IEV2YWx1YXRvciBieSBjb25maWcnKTtcbiAgICAgICAgdGhpcy5UZXN0RGF0YUdlbmVyYXRvciA9IHBpcGVsaW5lQ29uZmlnLkRhdGFzZXQuVGVzdERhdGFHZW5lcmF0b3I7XG4gICAgICAgIHRoaXMuTG9nZ2VyLmdyb3VwRW5kKCk7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgRXZhbHVhdG9yTWl4aW5zOyIsImV4cG9ydCB7IGRlZmF1bHQgYXMgY2F1c2FsTmV0TW9kZWxzIH0gZnJvbSAnLi9jYXVzYWxOZXRNb2RlbHMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBNb2RlbE1peGlucyB9IGZyb20gJy4vbW9kZWwubWl4aW5zJztcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBCYXNlTW9kZWwgfSBmcm9tICcuL2Jhc2VNb2RlbCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFNpbmdsZUxhYmVsQ2xhc3NpZmljYXRpb24gfSBmcm9tICcuL3NpbmdsZUxhYmxlQ2xhc3NpZmljYXRpb24nO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBBdXRvRW5jb2RlciB9IGZyb20gJy4vYXV0b0VuY29kZXInO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBSQk0gfSBmcm9tICcuL3Jlc3RyaWN0ZWRCb3p0bWFuTWFjaGluZSc7XG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgRXZhbHVhdG9yTWl4aW5zIH0gZnJvbSAnLi9ldmFsdWF0b3IubWl4aW5zJztcbmV4cG9ydCB7IGNhdXNhbE5ldE1ldHJpY3MgfSBmcm9tICcuL01ldHJpY3MvaW5kZXgnOyIsImNvbnN0IE1vZGVsTWl4aW5zID0gKEJhc2VQaXBlbGluZUNsYXNzKT0+IGNsYXNzIGV4dGVuZHMgQmFzZVBpcGVsaW5lQ2xhc3N7XG4gICAgZ2V0IExvc3NNb2RlbCgpe1xuICAgICAgICBpZighdGhpcy5uZXRNb2RlbCl7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignbmV0TW9kZWwgaXMgbm90IHNldCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLm5ldE1vZGVsLkxvc3M7XG4gICAgfVxuXG4gICAgZ2V0IEZpdE1vZGVsKCl7XG4gICAgICAgIGlmKCF0aGlzLm5ldE1vZGVsKXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCduZXRNb2RlbCBpcyBub3Qgc2V0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMubmV0TW9kZWwuRml0O1xuICAgIH1cbiAgICBcbiAgICBnZXQgT25lSG90UHJlZGljdE1vZGVsKCl7XG4gICAgICAgIGlmKCF0aGlzLm5ldE1vZGVsKXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCduZXRNb2RlbCBpcyBub3Qgc2V0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMubmV0TW9kZWwuT25lSG90UHJlZGljdDtcbiAgICB9XG5cbiAgICBnZXQgUHJlZGljdE1vZGVsKCl7XG4gICAgICAgIGlmKCF0aGlzLm5ldE1vZGVsKXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCduZXRNb2RlbCBpcyBub3Qgc2V0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMubmV0TW9kZWwuUHJlZGljdDtcbiAgICB9XG5cbiAgICBnZXQgTW9kZWwoKXtcbiAgICAgICAgaWYoIXRoaXMubmV0TW9kZWwpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ25ldE1vZGVsIGlzIG5vdCBzZXQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5uZXRNb2RlbDtcbiAgICB9XG4gICAgXG5cbiAgICBzZXQgTW9kZWwobW9kZWwpeyAgICAgICAgXG4gICAgICAgIHRoaXMubmV0TW9kZWwgPSBtb2RlbDtcbiAgICB9XG5cbiAgICBzZXRCeUNvbmZpZyhwaXBlbGluZUNvbmZpZyl7XG4gICAgICAgIGlmKHN1cGVyLnNldEJ5Q29uZmlnKXtcbiAgICAgICAgICAgIHN1cGVyLnNldEJ5Q29uZmlnKHBpcGVsaW5lQ29uZmlnKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLkxvZ2dlci5ncm91cEJlZ2luKCdzZXQgTW9kZWwgYnkgY29uZmlnJyk7XG4gICAgICAgIGNvbnN0IHsgTW9kZWwgfSA9IHBpcGVsaW5lQ29uZmlnLk5ldDtcbiAgICAgICAgaWYoIU1vZGVsKXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKGBNb2RlbCBpcyBub3Qgc2V0IGluICR7SlNPTi5zdHJpbmdsaWZ5KHBpcGVsaW5lQ29uZmlnKX1gKTtcbiAgICAgICAgfVxuICAgICAgICBNb2RlbC5MYXllclJ1bm5lciA9IHRoaXMuTGF5ZXJSdW5uZXI7XG4gICAgICAgIHRoaXMuTW9kZWwgPSBNb2RlbDtcbiAgICAgICAgdGhpcy5Mb2dnZXIuZ3JvdXBFbmQoKTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNb2RlbE1peGlucztcbiIsImltcG9ydCB7IGRlZmF1bHQgYXMgQmFzZU1vZGVsIH0gZnJvbSAnLi9iYXNlTW9kZWwnO1xuaW1wb3J0IHsgY2F1c2FsTmV0TWV0cmljcyB9IGZyb20gJy4vTWV0cmljcy9pbmRleCc7XG5pbXBvcnQgeyBjYXVzYWxOZXRTYW1wbGluZyB9IGZyb20gJ2NhdXNhbC1uZXQuc2FtcGxpbmcnO1xuY2xhc3MgUkJNIGV4dGVuZHMgQmFzZU1vZGVse1xuICAgIGNvbnN0cnVjdG9yKHttZXRyaWNzPSdtc2UnfT17fSl7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuTWVhc3VyZUVycm9yID0gY2F1c2FsTmV0TWV0cmljc1ttZXRyaWNzXTtcbiAgICB9XG5cbiAgICBzZXQgTGF5ZXJSdW5uZXIobGF5ZXJSdW5uZXIpe1xuICAgICAgICBsZXQgeyBMYXllckVuY29kZSwgTGF5ZXJEZWNvZGUgfSA9IGxheWVyUnVubmVyO1xuICAgICAgICB0aGlzLnJ1bm5lciA9IHsgTGF5ZXJFbmNvZGUsIExheWVyRGVjb2RlIH07XG4gICAgfVxuXG4gICAgZ2V0IExheWVyUnVubmVyKCl7XG4gICAgICAgIGlmKCF0aGlzLnJ1bm5lcil7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcigncnVubmVyIGlzIG5vdCBzZXQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5ydW5uZXI7XG4gICAgfVxuICAgIFxuICAgIGdldCBGaXQoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuUmVjb25zdHJ1Y3Q7XG4gICAgfVxuICAgIFxuICAgIGdldCBFbmNvZGUoKXtcbiAgICAgICAgY29uc3QgeyBMYXllckVuY29kZSB9ID0gdGhpcy5MYXllclJ1bm5lcjtcbiAgICAgICAgcmV0dXJuIChpbnB1dFRlbnNvciwgY29udGV4dHMpPT57XG4gICAgICAgICAgICBsZXQgZW5jb2RlVGVuc29yID0gTGF5ZXJFbmNvZGUoaW5wdXRUZW5zb3IsIGNvbnRleHRzKTtcbiAgICAgICAgICAgIHJldHVybiBlbmNvZGVUZW5zb3I7IFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGdldCBSZWNvbnN0cnVjdCgpe1xuICAgICAgICBjb25zdCB7IExheWVyRW5jb2RlLCBMYXllckRlY29kZSB9ID0gdGhpcy5MYXllclJ1bm5lcjtcbiAgICAgICAgY29uc3QgVCA9IHRoaXMuVDtcbiAgICAgICAgcmV0dXJuIChpbnB1dFRlbnNvciwgY29udGV4dHMpPT57XG4gICAgICAgICAgICBsZXQgZW5jb2RlVGVuc29yID0gTGF5ZXJFbmNvZGUoaW5wdXRUZW5zb3IsIGNvbnRleHRzKTtcbiAgICAgICAgICAgIGxldCBoaWRTZWwgPSBULnRlbnNvcihjYXVzYWxOZXRTYW1wbGluZy5yYW5kb20oZW5jb2RlVGVuc29yLnNoYXBlKSwgZW5jb2RlVGVuc29yLnNoYXBlKTtcbiAgICAgICAgICAgIGhpZFNlbCA9IFQudGVuc29yKGVuY29kZVRlbnNvci5ncmVhdGVyKGhpZFNlbCkuZGF0YVN5bmMoKSwgZW5jb2RlVGVuc29yLnNoYXBlKTtcbiAgICAgICAgICAgIGxldCBoaWRkZW4gPSBlbmNvZGVUZW5zb3IubXVsKGhpZFNlbCk7XG4gICAgICAgICAgICBsZXQgZGVjb2RlVGVuc29yID0gTGF5ZXJEZWNvZGUoaGlkZGVuLCBjb250ZXh0cyk7XG4gICAgICAgICAgICBsZXQgdmlzU2VsID0gVC50ZW5zb3IoY2F1c2FsTmV0U2FtcGxpbmcucmFuZG9tKGRlY29kZVRlbnNvci5zaGFwZSksIGRlY29kZVRlbnNvci5zaGFwZSk7XG4gICAgICAgICAgICB2aXNTZWwgPSBULnRlbnNvcihkZWNvZGVUZW5zb3IuZ3JlYXRlcih2aXNTZWwpLmRhdGFTeW5jKCksIGRlY29kZVRlbnNvci5zaGFwZSk7XG4gICAgICAgICAgICBsZXQgdmlzaWJsZVRlbnNvciA9IGRlY29kZVRlbnNvci5tdWwodmlzU2VsKTtcbiAgICAgICAgICAgIHJldHVybiB2aXNpYmxlVGVuc29yOyBcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBnZXQgTG9zcygpe1xuICAgICAgICBjb25zdCBGaXQgPSB0aGlzLkZpdDtcbiAgICAgICAgcmV0dXJuIChpbnB1dFRlbnNvciwgbGFiZWxUZW5zb3IsIGNvbnRleHRzKT0+e1xuICAgICAgICAgICAgbGV0IGRlY29kZVRlbnNvciA9IEZpdChpbnB1dFRlbnNvciwgY29udGV4dHMpO1xuICAgICAgICAgICAgbGV0IGxvc3MgPSB0aGlzLk1lYXN1cmVFcnJvcihkZWNvZGVUZW5zb3IsIGlucHV0VGVuc29yKTtcbiAgICAgICAgICAgIHJldHVybiBsb3NzO1xuICAgICAgICB9O1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUkJNOyIsImltcG9ydCB7IGRlZmF1bHQgYXMgQmFzZU1vZGVsIH0gZnJvbSAnLi9iYXNlTW9kZWwnO1xuXG5jbGFzcyBTaW5nbGVMYWJlbENsYXNzaWZpY2F0aW9uIGV4dGVuZHMgQmFzZU1vZGVse1xuICAgIGNvbnN0cnVjdG9yKG51bUNsYXNzKXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgaWYobnVtQ2xhc3MgPiAwKXtcbiAgICAgICAgICAgIHRoaXMubnVtQ2xhc3MgPSBudW1DbGFzcztcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoYGV4cGVjdCBudW1jbGFzcywgZ2V0ICR7bnVtQ2xhc3N9YCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXQgTGF5ZXJSdW5uZXIobGF5ZXJSdW5uZXIpe1xuICAgICAgICBsZXQgeyBMYXllclByZWRpY3QgfSA9IGxheWVyUnVubmVyO1xuICAgICAgICB0aGlzLnJ1bm5lciA9IHsgTGF5ZXJQcmVkaWN0IH07XG4gICAgfVxuXG4gICAgZ2V0IExheWVyUnVubmVyKCl7XG4gICAgICAgIGlmKCF0aGlzLnJ1bm5lcil7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcigncnVubmVyIGlzIG5vdCBzZXQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5ydW5uZXI7XG4gICAgfVxuICAgIFxuICAgIGdldCBGaXQoKXtcbiAgICAgICAgY29uc3QgeyBMYXllclByZWRpY3QgfSA9IHRoaXMuTGF5ZXJSdW5uZXI7XG4gICAgICAgIHJldHVybiAoaW5wdXRUZW5zb3IsIGNvbnRleHRzKT0+e1xuICAgICAgICAgICAgbGV0IG91dFB1dFRlbnNvciA9IExheWVyUHJlZGljdChpbnB1dFRlbnNvciwgY29udGV4dHMpO1xuICAgICAgICAgICAgbGV0IGxvZ1Byb2IgPSBvdXRQdXRUZW5zb3Iuc3ViKG91dFB1dFRlbnNvci5sb2dTdW1FeHAoMSwgdHJ1ZSkpO1xuICAgICAgICAgICAgcmV0dXJuIGxvZ1Byb2I7XG4gICAgICAgIH07XG4gICAgfVxuICAgIFxuICAgIGdldCBQcmVkaWN0KCl7XG4gICAgICAgIGNvbnN0IEZpdCA9IHRoaXMuRml0O1xuICAgICAgICByZXR1cm4gKGlucHV0VGVuc29yLCBjb250ZXh0cyk9PntcbiAgICAgICAgICAgIGxldCBsb2dQcm9iID0gRml0KGlucHV0VGVuc29yLCBjb250ZXh0cyk7XG4gICAgICAgICAgICBsZXQgcHJlZGljdGVkQ2xhc3MgPSBsb2dQcm9iLmFyZ01heCgxKTtcbiAgICAgICAgICAgIHJldHVybiBwcmVkaWN0ZWRDbGFzcztcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBnZXQgT25lSG90UHJlZGljdCgpe1xuICAgICAgICBjb25zdCBQcmVkaWN0ID0gdGhpcy5QcmVkaWN0O1xuICAgICAgICByZXR1cm4gKGlucHV0VGVuc29yLCBjb250ZXh0cyk9PntcbiAgICAgICAgICAgIGxldCBwcmVkaWN0ZWRDbGFzcyA9IFByZWRpY3QoaW5wdXRUZW5zb3IsIGNvbnRleHRzKTtcbiAgICAgICAgICAgIGxldCBvbmVIb3RQcmVkaWN0ID0gdGhpcy5ULm9uZUhvdChwcmVkaWN0ZWRDbGFzcywgdGhpcy5udW1DbGFzcyk7XG4gICAgICAgICAgICByZXR1cm4gb25lSG90UHJlZGljdDtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZ2V0IExvc3MoKXtcbiAgICAgICAgY29uc3QgRml0ID0gdGhpcy5GaXQ7XG4gICAgICAgIHJldHVybiAoaW5wdXRUZW5zb3IsIGxhYmVsVGVuc29yLCBjb250ZXh0cyk9PntcbiAgICAgICAgICAgIGxldCBsb2dQcm9iID0gRml0KGlucHV0VGVuc29yLCBjb250ZXh0cyk7XG4gICAgICAgICAgICBsZXQgbGlrZWxpaG9vZCA9IGxvZ1Byb2IubmVnKCkubXVsKGxhYmVsVGVuc29yKTtcbiAgICAgICAgICAgIGxldCBsb3NzID0gbGlrZWxpaG9vZC5zdW0oMSkubWVhbigpO1xuICAgICAgICAgICAgcmV0dXJuIGxvc3M7XG4gICAgICAgIH07XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgU2luZ2xlTGFiZWxDbGFzc2lmaWNhdGlvbjsiLCIvKiAoaWdub3JlZCkgKi8iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9jb3JlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfdXRpbHNfXzsiXSwic291cmNlUm9vdCI6IiJ9