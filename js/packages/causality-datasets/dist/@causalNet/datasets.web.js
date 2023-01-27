(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("causal-net.core"), require("causal-net.log"), require("causal-net.utils"));
	else if(typeof define === 'function' && define.amd)
		define(["causal-net.core", "causal-net.log", "causal-net.utils"], factory);
	else if(typeof exports === 'object')
		exports["@causalNet/datasets"] = factory(require("causal-net.core"), require("causal-net.log"), require("causal-net.utils"));
	else
		root["@causalNet/datasets"] = factory(root["causal-net.core"], root["causal-net.log"], root["causal-net.utils"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_causal_net_core__, __WEBPACK_EXTERNAL_MODULE_causal_net_log__, __WEBPACK_EXTERNAL_MODULE_causal_net_utils__) {
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

/***/ "./src/causalNetSampling.js":
/*!**********************************!*\
  !*** ./src/causalNetSampling.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var causal_net_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! causal-net.core */ "causal-net.core");
/* harmony import */ var causal_net_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(causal_net_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! causal-net.utils */ "causal-net.utils");
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(causal_net_utils__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var random__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! random */ "random");
/* harmony import */ var random__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(random__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _subSampling_mixins__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./subSampling.mixins */ "./src/subSampling.mixins.js");
/* harmony import */ var _negSampling_mixins__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./negSampling.mixins */ "./src/negSampling.mixins.js");





/**
 * This class provides common used sampling methods which can be accessed via **causalNetSampling**.
 * mixwith:
 * [ SubSamplingMixins, NegSamplingMixins ]
 * @class CausalNetSampling
 * @extends Functor
 * @example
 * [EXAMPLE ../examples/causalNetSampling.babel.js]
 */

class CausalNetSampling extends causal_net_utils__WEBPACK_IMPORTED_MODULE_1__["platform"].mixWith(causal_net_core__WEBPACK_IMPORTED_MODULE_0__["Functor"], [_subSampling_mixins__WEBPACK_IMPORTED_MODULE_3__["default"], _negSampling_mixins__WEBPACK_IMPORTED_MODULE_4__["default"]]) {
  constructor() {
    super();
    this.Random = random__WEBPACK_IMPORTED_MODULE_2___default.a;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new CausalNetSampling());

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3NhbXBsaW5nL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3NhbXBsaW5nL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0BjYXVzYWxOZXQvc2FtcGxpbmcvLi9zcmMvY2F1c2FsTmV0U2FtcGxpbmcuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9zYW1wbGluZy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3NhbXBsaW5nLy4vc3JjL25lZ1NhbXBsaW5nLm1peGlucy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3NhbXBsaW5nLy4vc3JjL3NhbXBsaW5nLm1peGlucy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3NhbXBsaW5nLy4vc3JjL3N1YlNhbXBsaW5nLm1peGlucy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3NhbXBsaW5nL2V4dGVybmFsIFwiY2F1c2FsLW5ldC5jb3JlXCIiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9zYW1wbGluZy9leHRlcm5hbCBcImNhdXNhbC1uZXQudXRpbHNcIiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3NhbXBsaW5nL2V4dGVybmFsIFwicmFuZG9tXCIiXSwibmFtZXMiOlsiQ2F1c2FsTmV0U2FtcGxpbmciLCJwbGF0Zm9ybSIsIm1peFdpdGgiLCJCYXNlRnVuY3RvciIsIlN1YlNhbXBsaW5nTWl4aW5zIiwiTmVnU2FtcGxpbmdNaXhpbnMiLCJjb25zdHJ1Y3RvciIsIlJhbmRvbSIsInJhbmRvbSIsIk5lZ2F0aXZlU2FtcGxpbmdNaXhpbnMiLCJCYXNlU2FtcGxpbmdDbGFzcyIsIm5lZ1NhbXBsaW5nIiwibmVnYXRpdmVTaXplIiwicG9zaXRpdmVTYW1wbGVzIiwiY2FuZGlkYXRlUHJvYnMiLCJyZXBsYWNhYmxlIiwiUiIsImFueSIsInYiLCJ0eXBlIiwiTnVtYmVyIiwiRXJyb3IiLCJKU09OIiwic3RyaW5naWZ5Iiwic2VsZXRpb25Qcm9icyIsInJlZHVjZSIsInNlbGVjdGlvblByb2JzIiwicGlkeCIsIkluZmluaXR5IiwiY2xvbmUiLCJzYW1wbGVzIiwidGFrZW5JZHhzIiwiR2VuTmV3Q2FuZGlkYXRlSWR4IiwiaW50IiwibGVuZ3RoIiwiU2VsZWN0SWZIaWdoUHJvYiIsInByb2IiLCJyYW5kIiwiZmxvYXQiLCJpZHgiLCJzZWxlY3RlZCIsIlNhbXBsaW5nTWl4aW5zIiwiQmFzZUNsYXNzIiwiU2FtcGxpbmciLCJzYW1wbGluZyIsImFzc2VydCIsImJlSW5zdGFuY2VPZiIsIkZ1bmN0b3IiLCJzdWJTYW1wbGluZyIsInNhbXBsaW5nU2l6ZSIsImNhbmRpZGF0ZUxpc3QiLCJjYW5kaWRhdGVzIiwiQXJyYXkiLCJpc0FycmF5IiwicmFuZ2UiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVy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QUEsUUFBa0JDLFNBQVMsR0FBR2YsQ0FBQyxDQUFDYSxLQUFGLENBQVFzQixVQUFSLENBQTlCOztBQUNBLFVBQU1uQixrQkFBa0IsR0FBRyxNQUFJekIsTUFBTSxDQUFDMEIsR0FBUCxDQUFXLENBQVgsRUFBY2tCLFVBQVUsQ0FBQ2pCLE1BQVgsR0FBa0IsQ0FBaEMsQ0FBL0I7O0FBQ0EsV0FBTUosT0FBTyxDQUFDSSxNQUFSLEdBQWlCZSxZQUF2QixFQUFvQztBQUNoQyxVQUFJVixHQUFHLEdBQUdQLGtCQUFrQixFQUE1Qjs7QUFDQSxVQUFHLENBQUNqQixVQUFELElBQWVnQixTQUFTLENBQUNRLEdBQUQsQ0FBVCxLQUFpQixJQUFuQyxFQUF3QztBQUNwQztBQUNIOztBQUNEVCxhQUFPLEdBQUcsQ0FBQyxHQUFHQSxPQUFKLEVBQWFxQixVQUFVLENBQUNaLEdBQUQsQ0FBdkIsQ0FBVjs7QUFDQSxVQUFHLENBQUN4QixVQUFKLEVBQWU7QUFDWGdCLGlCQUFTLENBQUNRLEdBQUQsQ0FBVCxHQUFlLElBQWYsQ0FEVyxDQUNTO0FBQ3ZCO0FBQ0o7O0FBQ0QsV0FBT1QsT0FBUDtBQUNIOztBQTNCMkUsQ0FBaEY7O0FBNkJlMUIsZ0ZBQWYsRTs7Ozs7Ozs7Ozs7QUM3QkEsNkQ7Ozs7Ozs7Ozs7O0FDQUEsOEQ7Ozs7Ozs7Ozs7O0FDQUEsb0QiLCJmaWxlIjoiQGNhdXNhbE5ldC9zYW1wbGluZy53ZWIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJjYXVzYWwtbmV0LmNvcmVcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnV0aWxzXCIpLCByZXF1aXJlKFwicmFuZG9tXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcImNhdXNhbC1uZXQuY29yZVwiLCBcImNhdXNhbC1uZXQudXRpbHNcIiwgXCJyYW5kb21cIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQGNhdXNhbE5ldC9zYW1wbGluZ1wiXSA9IGZhY3RvcnkocmVxdWlyZShcImNhdXNhbC1uZXQuY29yZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQudXRpbHNcIiksIHJlcXVpcmUoXCJyYW5kb21cIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkBjYXVzYWxOZXQvc2FtcGxpbmdcIl0gPSBmYWN0b3J5KHJvb3RbXCJjYXVzYWwtbmV0LmNvcmVcIl0sIHJvb3RbXCJjYXVzYWwtbmV0LnV0aWxzXCJdLCByb290W1wicmFuZG9tXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9jb3JlX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF91dGlsc19fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3JhbmRvbV9fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgeyBGdW5jdG9yIGFzIEJhc2VGdW5jdG9yIH0gZnJvbSAnY2F1c2FsLW5ldC5jb3JlJztcbmltcG9ydCB7IHBsYXRmb3JtIH0gZnJvbSAnY2F1c2FsLW5ldC51dGlscyc7XG5pbXBvcnQgcmFuZG9tIGZyb20gJ3JhbmRvbSc7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIFN1YlNhbXBsaW5nTWl4aW5zIH0gZnJvbSAnLi9zdWJTYW1wbGluZy5taXhpbnMnO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBOZWdTYW1wbGluZ01peGlucyB9IGZyb20gJy4vbmVnU2FtcGxpbmcubWl4aW5zJztcblxuLyoqXG4gKiBUaGlzIGNsYXNzIHByb3ZpZGVzIGNvbW1vbiB1c2VkIHNhbXBsaW5nIG1ldGhvZHMgd2hpY2ggY2FuIGJlIGFjY2Vzc2VkIHZpYSAqKmNhdXNhbE5ldFNhbXBsaW5nKiouXG4gKiBtaXh3aXRoOlxuICogWyBTdWJTYW1wbGluZ01peGlucywgTmVnU2FtcGxpbmdNaXhpbnMgXVxuICogQGNsYXNzIENhdXNhbE5ldFNhbXBsaW5nXG4gKiBAZXh0ZW5kcyBGdW5jdG9yXG4gKiBAZXhhbXBsZVxuICogW0VYQU1QTEUgLi4vZXhhbXBsZXMvY2F1c2FsTmV0U2FtcGxpbmcuYmFiZWwuanNdXG4gKi9cbmNsYXNzIENhdXNhbE5ldFNhbXBsaW5nIGV4dGVuZHMgcGxhdGZvcm0ubWl4V2l0aCggQmFzZUZ1bmN0b3IsIFxuICAgIFsgU3ViU2FtcGxpbmdNaXhpbnMsIE5lZ1NhbXBsaW5nTWl4aW5zIF0pe1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuUmFuZG9tID0gcmFuZG9tOyAgICBcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBDYXVzYWxOZXRTYW1wbGluZygpOyIsImV4cG9ydCB7IGRlZmF1bHQgYXMgY2F1c2FsTmV0U2FtcGxpbmcgfSBmcm9tICcuL2NhdXNhbE5ldFNhbXBsaW5nJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU2FtcGxpbmdNaXhpbnMgfSBmcm9tICcuL3NhbXBsaW5nLm1peGlucyc7XG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgU3ViU2FtcGxpbmdNaXhpbnMgfSBmcm9tICcuL3N1YlNhbXBsaW5nLm1peGlucyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIE5lZ1NhbXBsaW5nTWl4aW5zIH0gZnJvbSAnLi9uZWdTYW1wbGluZy5taXhpbnMnOyIsImNvbnN0IE5lZ2F0aXZlU2FtcGxpbmdNaXhpbnMgPSAoQmFzZVNhbXBsaW5nQ2xhc3MpPT4gY2xhc3MgZXh0ZW5kcyBCYXNlU2FtcGxpbmdDbGFzc3tcbiAgICAvKipcbiAgICAgKiBQZXJmb3JtIG5lZ2F0aXZlIHNhbXBsaW5nIGdpdmVuIHRoZSBzZWxlY3QgcHJvYiBvZiBpZHMgYW5kIGxpc3Qgb2YgcG9zaXRpdmUgc2FtcGxlc1xuICAgICAqIEBwYXJhbSB7IE51bWJlciB9IG5lZ2F0aXZlU2l6ZSAtIHNpemUgdG8gc2FtcGxlXG4gICAgICogQHBhcmFtIHsgQXJyYXkgfSBwb3NpdGl2ZVNhbXBsZXMgLSBBcnJheSBvZiBwb3NzaXRpdmUgSWRzXG4gICAgICogQHBhcmFtIHsgQXJyYXkgfSBjYW5kaWRhdGVQcm9icyAtIEFycmF5IG9mIHByb2JhYmxpdHkgb2YgY2FuZGlkYXRlIElkc1xuICAgICAqIEBwYXJhbSB7IEJvb2xlYW4gfSBbcmVwbGFjYWJsZT10cnVlXSAtIGlmIHRydWUsIG5vIGR1cGxpY2F0ZWQgc2FtcGxpbmcgSWQgcmV0dXJuZWRcbiAgICAgKiBAcmV0dXJucyB7IEFycmF5IH0gYXJyYXkgb2Ygc2FtcGxlZCBJZHNcbiAgICAgKi9cbiAgICBuZWdTYW1wbGluZyhuZWdhdGl2ZVNpemUsIHBvc2l0aXZlU2FtcGxlcywgY2FuZGlkYXRlUHJvYnMsIHJlcGxhY2FibGU9dHJ1ZSl7XG4gICAgICAgIGNvbnN0IFIgPSB0aGlzLlIsIFJhbmRvbSA9IHRoaXMuUmFuZG9tO1xuICAgICAgICBpZihSLmFueSgodik9PiAhUi50eXBlKE51bWJlcix2KSB8fCB2ID4gMSB8fCB2IDwgMCwgY2FuZGlkYXRlUHJvYnMpKXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKGAke0pTT04uc3RyaW5naWZ5KGNhbmRpZGF0ZVByb2JzKX0gaXMgbm90IGFsbG93YCk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHNlbGV0aW9uUHJvYnMgPSBSLnJlZHVjZSgoc2VsZWN0aW9uUHJvYnMsIHBpZHgpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvblByb2JzW3BpZHhdID0gSW5maW5pdHk7Ly9wb3NpdGl2ZSBjYW5kaWRhdGUgbmV2ZXIgYmUgY2hvb3NlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VsZWN0aW9uUHJvYnM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgUi5jbG9uZShjYW5kaWRhdGVQcm9icyksIHBvc2l0aXZlU2FtcGxlcyk7XG4gICAgICAgIGxldCBzYW1wbGVzID0gW10sIHRha2VuSWR4cyA9IFIuY2xvbmUoc2VsZXRpb25Qcm9icyk7XG4gICAgICAgIGNvbnN0IEdlbk5ld0NhbmRpZGF0ZUlkeCA9ICgpPT5SYW5kb20uaW50KDAsIHNlbGV0aW9uUHJvYnMubGVuZ3RoLTEpO1xuICAgICAgICBjb25zdCBTZWxlY3RJZkhpZ2hQcm9iID0gKHByb2IpPT57XG4gICAgICAgICAgICBsZXQgcmFuZCA9IFJhbmRvbS5mbG9hdCgpO1xuICAgICAgICAgICAgcmV0dXJuIHJhbmQ+cHJvYjtcbiAgICAgICAgfTtcbiAgICAgICAgd2hpbGUoc2FtcGxlcy5sZW5ndGggPCBuZWdhdGl2ZVNpemUpe1xuICAgICAgICAgICAgbGV0IGlkeCA9IEdlbk5ld0NhbmRpZGF0ZUlkeCgpO1xuICAgICAgICAgICAgbGV0IHNlbGVjdGVkID0gU2VsZWN0SWZIaWdoUHJvYihzZWxldGlvblByb2JzW2lkeF0pO1xuICAgICAgICAgICAgaWYoIXNlbGVjdGVkKXtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKCFyZXBsYWNhYmxlICYmIHRha2VuSWR4c1tpZHhdPT09bnVsbCl7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzYW1wbGVzID0gWy4uLnNhbXBsZXMsIGlkeF07XG4gICAgICAgICAgICBpZighcmVwbGFjYWJsZSl7XG4gICAgICAgICAgICAgICAgdGFrZW5JZHhzW2lkeF09bnVsbDsvL25vbiByZXBsYWNlYWJsZVxuICAgICAgICAgICAgfVxuICAgICAgICB9ICAgIFxuICAgICAgICByZXR1cm4gc2FtcGxlcztcbiAgICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgTmVnYXRpdmVTYW1wbGluZ01peGluczsiLCJpbXBvcnQgeyBGdW5jdG9yIH0gZnJvbSAnY2F1c2FsLW5ldC5jb3JlJztcbmltcG9ydCB7IGFzc2VydCB9IGZyb20gJ2NhdXNhbC1uZXQudXRpbHMnO1xuLyoqXG4gKiBUaGlzIG1peGluIGNsYXNzIHByb3ZpZGUgYXR0cmlidXRlczogKipTYW1wbGluZyoqLlxuICogQGNsYXNzIFNhbXBsaW5nTWl4aW5zXG4gKiBAZXh0ZW5kcyBCYXNlQ2xhc3NcbiAqIEBleGFtcGxlXG4gKiBbRVhBTVBMRSAuLi9leGFtcGxlcy9zYW1wbGluZy5taXhpbnMuYmFiZWwuanNdXG4gKi9cbmNvbnN0IFNhbXBsaW5nTWl4aW5zID0gKEJhc2VDbGFzcyk9PiBjbGFzcyBleHRlbmRzIEJhc2VDbGFzc3tcbiAgICAvKipcbiAgICAgKiBnZXQgY3VycmVudCByYW5kb20gaW5zdGFuY2VcbiAgICAgKi9cbiAgICBnZXQgU2FtcGxpbmcoKXtcbiAgICAgICAgaWYoIXRoaXMuc2FtcGxpbmcpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoYFNhbXBsaW5nIGlzIG5vdCBzZXRgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5zYW1wbGluZztcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogc2V0IFNhbXBsaW5nIGluc3RhbmNlXG4gICAgICogQHJlYWRvbmx5XG4gICAgICovXG4gICAgc2V0IFNhbXBsaW5nKHNhbXBsaW5nKXtcbiAgICAgICAgYXNzZXJ0LmJlSW5zdGFuY2VPZihzYW1wbGluZywgRnVuY3Rvcik7XG4gICAgICAgIHRoaXMuc2FtcGxpbmcgPSBzYW1wbGluZztcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTYW1wbGluZ01peGluczsiLCJjb25zdCBTdWJTYW1wbGluZ01peGlucyA9IChCYXNlU2FtcGxpbmdDbGFzcykgPT4gY2xhc3MgZXh0ZW5kcyBCYXNlU2FtcGxpbmdDbGFzc3tcbiAgICAvKipcbiAgICAgKiBQZXJmb3JtIHVuaWZvcm0gc2FtcGxlIGEgc3ViIHNldCBvZiBJZHMgZ2l2ZW4gdGhlIGNhbmRpZGF0ZSBsaXN0XG4gICAgICogQHBhcmFtIHsgTnVtYmVyIH0gc2FtcGxpbmdTaXplXG4gICAgICogQHBhcmFtIHsgQXJyYXl8TnVtYmVyIH0gY2FuZGlkYXRlTGlzdCAtIGxpc3Qgb2YgY2FuZGlkYXRlcyBvciBzaXplIG9mIGNhbmRpZGF0ZSBsaXN0XG4gICAgICogQHBhcmFtIHsgQm9vbGVhbiB9IFtyZXBsYWNhYmxlPXRydWVdIC0gaWYgdHJ1ZSwgbm8gZHVwbGljYXRlZCBzYW1wbGluZyBJZCByZXR1cm5lZFxuICAgICAqIEByZXR1cm5zIHsgQXJyYXkgfSBhcnJheSBvZiBzYW1wbGVkIElkc1xuICAgICAqL1xuICAgIHN1YlNhbXBsaW5nKHNhbXBsaW5nU2l6ZSwgY2FuZGlkYXRlTGlzdCwgcmVwbGFjYWJsZT10cnVlKXtcbiAgICAgICAgY29uc3QgUiA9IHRoaXMuUiwgUmFuZG9tID0gdGhpcy5SYW5kb207XG4gICAgICAgIGxldCBjYW5kaWRhdGVzID0gQXJyYXkuaXNBcnJheShjYW5kaWRhdGVMaXN0KT9SLmNsb25lKGNhbmRpZGF0ZUxpc3QpOlIucmFuZ2UoMCwgY2FuZGlkYXRlTGlzdCk7XG4gICAgICAgIGlmKGNhbmRpZGF0ZXMubGVuZ3RoID09PSAwKXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdjYW5kaWRhdGUgbGVuZ3RoIHNob3VsZCBiZSBwb3NpdGl2ZScpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBzYW1wbGVzID0gW10sIHRha2VuSWR4cyA9IFIuY2xvbmUoY2FuZGlkYXRlcyk7XG4gICAgICAgIGNvbnN0IEdlbk5ld0NhbmRpZGF0ZUlkeCA9ICgpPT5SYW5kb20uaW50KDAsIGNhbmRpZGF0ZXMubGVuZ3RoLTEpO1xuICAgICAgICB3aGlsZShzYW1wbGVzLmxlbmd0aCA8IHNhbXBsaW5nU2l6ZSl7XG4gICAgICAgICAgICBsZXQgaWR4ID0gR2VuTmV3Q2FuZGlkYXRlSWR4KCk7XG4gICAgICAgICAgICBpZighcmVwbGFjYWJsZSAmJiB0YWtlbklkeHNbaWR4XT09PW51bGwpe1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2FtcGxlcyA9IFsuLi5zYW1wbGVzLCBjYW5kaWRhdGVzW2lkeF1dO1xuICAgICAgICAgICAgaWYoIXJlcGxhY2FibGUpe1xuICAgICAgICAgICAgICAgIHRha2VuSWR4c1tpZHhdPW51bGw7Ly9ub24gcmVwbGFjZWFibGVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSAgICBcbiAgICAgICAgcmV0dXJuIHNhbXBsZXM7XG4gICAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IFN1YlNhbXBsaW5nTWl4aW5zOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF91dGlsc19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yYW5kb21fXzsiXSwic291cmNlUm9vdCI6IiJ9

/***/ }),

/***/ "./src/Readers/bufferReader.mixins.js":
/*!********************************************!*\
  !*** ./src/Readers/bufferReader.mixins.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! causal-net.utils */ "causal-net.utils");
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(causal_net_utils__WEBPACK_IMPORTED_MODULE_0__);


const BufferReaderMixins = BaseDataSource => class extends BaseDataSource {
  makeBufferReader(baseLink, SplitFnLense = d => d) {
    return async fileName => {
      let chunkData = [];

      if (baseLink.startsWith('http')) {
        chunkData = await causal_net_utils__WEBPACK_IMPORTED_MODULE_0__["bufferUtils"].fetchBuffer(baseLink + fileName);
      } else {
        chunkData = await causal_net_utils__WEBPACK_IMPORTED_MODULE_0__["bufferUtils"].readBuffer(baseLink + fileName);
      }

      return SplitFnLense(chunkData);
    };
  }

};

/* harmony default export */ __webpack_exports__["default"] = (BufferReaderMixins);

/***/ }),

/***/ "./src/Readers/csvReader.mixins.js":
/*!*****************************************!*\
  !*** ./src/Readers/csvReader.mixins.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! causal-net.utils */ "causal-net.utils");
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(causal_net_utils__WEBPACK_IMPORTED_MODULE_0__);


const CSVReaderMixins = BaseDataSource => class extends BaseDataSource {
  extractingAttribute(rows, sampleAttributes = [], labelAttributes = []) {
    let samples = [],
        labels = [];
    let i = 0;

    for (let row of rows) {
      if (sampleAttributes.length) {
        samples.push(sampleAttributes.map(k => row[k]));
      }

      if (labelAttributes.length) {
        labels.push(labelAttributes.map(k => row[k]));
      }
    }

    if (samples.length > 0 && labels.length > 0) {
      return {
        samples,
        labels
      };
    } else if (samples.length > 0) {
      return samples;
    } else if (labels.length > 0) {
      return labels;
    } else {
      throw Error(`${JSON.stringify(rows)} do not match ${sampleAttributes} and ${labelAttributes}`);
    }
  }

  makeCSVReader(baseLink, sampleAttributes = [], labelAttributes = []) {
    if (baseLink.startsWith('http')) {
      return async fileName => {
        let rows = await causal_net_utils__WEBPACK_IMPORTED_MODULE_0__["csvUtils"].fetchCSV(baseLink + fileName);
        return this.extractingAttribute(rows, sampleAttributes, labelAttributes);
      };
    } else {
      return async fileName => {
        let rows = await causal_net_utils__WEBPACK_IMPORTED_MODULE_0__["csvUtils"].readCSV(baseLink + fileName);
        return this.extractingAttribute(rows, sampleAttributes, labelAttributes);
      };
    }
  }

};

/* harmony default export */ __webpack_exports__["default"] = (CSVReaderMixins);

/***/ }),

/***/ "./src/Readers/init.js":
/*!*****************************!*\
  !*** ./src/Readers/init.js ***!
  \*****************************/
/*! exports provided: PNGReaderMixins, CSVReaderMixins, BufferReaderMixins */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pngReader_mixins__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pngReader.mixins */ "./src/Readers/pngReader.mixins.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PNGReaderMixins", function() { return _pngReader_mixins__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _csvReader_mixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./csvReader.mixins */ "./src/Readers/csvReader.mixins.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CSVReaderMixins", function() { return _csvReader_mixins__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _bufferReader_mixins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bufferReader.mixins */ "./src/Readers/bufferReader.mixins.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BufferReaderMixins", function() { return _bufferReader_mixins__WEBPACK_IMPORTED_MODULE_2__["default"]; });





/***/ }),

/***/ "./src/Readers/pngReader.mixins.js":
/*!*****************************************!*\
  !*** ./src/Readers/pngReader.mixins.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! causal-net.utils */ "causal-net.utils");
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(causal_net_utils__WEBPACK_IMPORTED_MODULE_0__);


const PNGReaderMixins = BaseDataSource => class extends BaseDataSource {
  makePNGReader(baseLink, SplitFnLense = d => d) {
    return async fileName => {
      let chunkData = [];

      if (baseLink.startsWith('http')) {
        chunkData = await causal_net_utils__WEBPACK_IMPORTED_MODULE_0__["pngUtils"].fetchPNG(baseLink + fileName);
      } else {
        chunkData = await causal_net_utils__WEBPACK_IMPORTED_MODULE_0__["pngUtils"].readPNG(baseLink + fileName);
      }

      return SplitFnLense(chunkData);
    };
  }

};

/* harmony default export */ __webpack_exports__["default"] = (PNGReaderMixins);

/***/ }),

/***/ "./src/causalNetDataSource.js":
/*!************************************!*\
  !*** ./src/causalNetDataSource.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var causal_net_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! causal-net.core */ "causal-net.core");
/* harmony import */ var causal_net_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(causal_net_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _functor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functor */ "./src/functor.js");
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! causal-net.utils */ "causal-net.utils");
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(causal_net_utils__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var causal_net_sampling__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! causal-net.sampling */ "../causality-sampling/dist/@causalNet/sampling.web.js");
/* harmony import */ var causal_net_sampling__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(causal_net_sampling__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Readers_init__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Readers/init */ "./src/Readers/init.js");
/* harmony import */ var causal_net_log__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! causal-net.log */ "causal-net.log");
/* harmony import */ var causal_net_log__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(causal_net_log__WEBPACK_IMPORTED_MODULE_5__);






/**
 * This CausalNetDataSource class provides a standard implementation for pipeline Source.
 * { mixWith: [ SamplingMixins, PNGReaderMixins, BufferReaderMixins ]}
 * @class CausalNetDataSource
 * @extends Event
 * @experiment
 * @example
 * [EXAMPLE ../examples/causalNetDataSource.js]
 */

class CausalNetDataSource extends causal_net_utils__WEBPACK_IMPORTED_MODULE_2__["platform"].mixWith(causal_net_core__WEBPACK_IMPORTED_MODULE_0__["Event"], [causal_net_sampling__WEBPACK_IMPORTED_MODULE_3__["SamplingMixins"], _Readers_init__WEBPACK_IMPORTED_MODULE_4__["PNGReaderMixins"], _Readers_init__WEBPACK_IMPORTED_MODULE_4__["CSVReaderMixins"], causal_net_log__WEBPACK_IMPORTED_MODULE_5__["LoggerMixins"], _Readers_init__WEBPACK_IMPORTED_MODULE_4__["BufferReaderMixins"]]) {
  /**
   *Creates an instance of CausalNetDataSource.
   * @param {Functor} functor
   * @param {Functor} sampling
   * @memberof CausalNetDataSource
   */
  constructor(functor, logger, sampling) {
    super();
    this.F = functor;
    this.R = functor.CoreFunctor;
    this.Logger = logger;
    this.Sampling = sampling;
  }

  async connect(baseLink) {
    if (!baseLink) {
      throw Error(`expect baseLink get ${JSON.stringify(baseLink)}`);
    }

    let descriptionLink = baseLink + '/dataset.summary.json';
    this.Logger.groupBegin('query datasource');
    this.Logger.log({
      descriptionLink
    });
    this.description = await this.query(descriptionLink);
    this.description.BaseLink = baseLink;
    this.setChunks(this.description);
    this.setSampleSize(this.description);
    this.setLabelSize(this.description);
    this.setDataReader(this.description);
    this.Logger.groupEnd();
    return this.description;
  }
  /**
   * fetch or read configure depends on provied link format
   * @param {*} link
   * @returns
   * @memberof CausalNetEmbedding
   */


  async query(link) {
    if (link.startsWith('http')) {
      return await causal_net_utils__WEBPACK_IMPORTED_MODULE_2__["jsonUtils"].fetchJSON(link);
    } else {
      return await causal_net_utils__WEBPACK_IMPORTED_MODULE_2__["jsonUtils"].readJSON(link);
    }
  }

  get DataChunks() {
    return this.dataChunks;
  }

  get SampleReader() {
    return this.sampleReader;
  }

  get LabelReader() {
    return this.labelReader;
  }

  get DataReader() {
    return this.dataReader;
  }

  get SampleSize() {
    if (!this.sampleSize) {
      throw Error('SampleSize is not set');
    }

    return this.sampleSize;
  }

  get LabelSize() {
    if (!this.labelSize) {
      throw Error('labelSize is not set');
    }

    return this.labelSize;
  }

  setSampleSize(description) {
    let {
      SampleSize
    } = description;

    if (!SampleSize) {
      throw Error(`expect { SampleSize }  get ${JSON.stringify(description, null, 4)}`);
    }

    if (Array.isArray(SampleSize)) {
      this.sampleSize = SampleSize.reduce((s, d) => s * d);
    } else {
      this.sampleSize = SampleSize;
    }
  }

  setLabelSize(description) {
    let {
      LabelSize
    } = description;

    if (!LabelSize) {
      throw Error(`expect { LabelSize }  get ${JSON.stringify(description, null, 4)}`);
    }

    if (Array.isArray(LabelSize)) {
      this.labelSize = LabelSize.reduce((s, d) => s * d);
    } else {
      this.labelSize = LabelSize;
    }
  }

  setChunks(description) {
    const {
      SampleChunkName,
      LabelChunkName,
      ChunkList
    } = description;

    if (!SampleChunkName || !LabelChunkName || !ChunkList) {
      throw Error(`expect {SampleChunkName, LabelChunkName, ChunkList} get ${JSON.stringify(description)}`);
    }

    this.dataChunks = ChunkList.map(cidx => {
      return {
        ChunkName: cidx,
        Sample: SampleChunkName.replace('{}', cidx),
        Label: LabelChunkName.replace('{}', cidx)
      };
    });
  }

  setDataReader(description) {
    const SampleType = description.SampleType;
    const LabelType = description.LabelType;
    const DataType = description.DataType;
    const BaseLink = description.BaseLink;

    if (SampleType === 'Image/PNG') {
      const SplitFnLenses = d => this.splitSample(d);

      this.sampleReader = this.makePNGReader(BaseLink, SplitFnLenses);
    }

    if (LabelType === 'Buffer/OneHot') {
      const SplitFnLenses = d => this.splitLabel(d);

      this.labelReader = this.makeBufferReader(BaseLink, SplitFnLenses);
    }

    const SampleAttributes = description.SampleAttributes;
    const LabelAttributes = description.LabelAttributes;

    if (SampleType === 'Text/CSV') {
      this.sampleReader = this.makeCSVReader(BaseLink, SampleAttributes, null);
    }

    if (LabelType === 'Text/CSV') {
      this.labelReader = this.makeCSVReader(BaseLink, null, LabelAttributes);
    }

    if (DataType === 'Text/CSV') {
      this.dataReader = this.makeCSVReader(BaseLink, SampleAttributes, LabelAttributes);
    }
  }

  splitSample(data) {
    const SampleSize = this.SampleSize;
    return this.R.splitEvery(SampleSize, data);
  }

  splitLabel(data) {
    const LabelSize = this.LabelSize;
    return this.R.splitEvery(LabelSize, data);
  }

  chunkSelect(numChunks) {
    let chunkList = this.DataChunks;
    this.selectedChunks = this.Sampling.subSampling(numChunks, chunkList, false);
    return this.selectedChunks;
  }

  read() {
    if (!this.selectedChunks) {
      throw Error('selectChunks is not call');
    }

    let selectedChunks = this.selectedChunks;
    const SampleReader = this.SampleReader;
    const LabelReader = this.LabelReader;
    const DataReader = this.DataReader;
    return new Promise(async (resolve, reject) => {
      let sampleData = [],
          labelData = [];

      for (let _ref of selectedChunks) {
        let {
          Sample,
          Label,
          ChunkName
        } = _ref;

        if (Sample === Label) {
          let data = await DataReader(Sample);
          sampleData = data.samples;
          labelData = data.labels;
        } else {
          sampleData = await SampleReader(Sample);
          labelData = await LabelReader(Label);
        }

        if (sampleData.length !== labelData.length) {
          reject('lengths of sample and label are not the same');
        }

        this.Logger.log({
          'read': [sampleData.length, labelData.length]
        });
        await this.emit('data', {
          'Sample': sampleData,
          'Label': labelData,
          ChunkName
        });
      }

      resolve(selectedChunks.length);
    });
  }

}

;
/* harmony default export */ __webpack_exports__["default"] = (new CausalNetDataSource(_functor__WEBPACK_IMPORTED_MODULE_1__["default"], causal_net_log__WEBPACK_IMPORTED_MODULE_5__["termLogger"], causal_net_sampling__WEBPACK_IMPORTED_MODULE_3__["causalNetSampling"]));

/***/ }),

/***/ "./src/dataSource.mixins.js":
/*!**********************************!*\
  !*** ./src/dataSource.mixins.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * This pipeline mixin provides DataSourceReader attibute, source reading methods for pipeline 
 * and getting Source in pipelineConfig
 * @class DataSourceMixins
 * @extends Event
 * @example
 * [EXAMPLE ../examples/dataset.mixins.babel.js]
 */
const DataSourceMixins = BasePipelineClass => class extends BasePipelineClass {
  set DataSourceReader(sourceReader) {
    this.sourceReader = sourceReader;
  }

  get DataSourceReader() {
    return this.sourceReader;
  }

  setByConfig(pipelineConfig) {
    if (super.setByConfig) {
      super.setByConfig(pipelineConfig);
    }

    this.Logger.groupBegin('set Source by config');
    const {
      Source
    } = pipelineConfig.Dataset;

    if (Source) {
      this.DataSourceReader = Source;
    } else {
      this.DataSourceReader = null;
      this.Logger.log('***Source is not defined \n' + '***TrainDataGenerator and TestDataGenerator must be set manually');
    }

    this.Logger.groupEnd();
    return pipelineConfig;
  }

  async read(numChunks) {
    let selectedChunk = this.DataSourceReader.chunkSelect(numChunks);
    this.Logger.log({
      'select chunks': selectedChunk
    });
    await this.DataSourceReader.read();
    return this.Preprocessing.PreprocessingData;
  }

};

/* harmony default export */ __webpack_exports__["default"] = (DataSourceMixins);

/***/ }),

/***/ "./src/functor.js":
/*!************************!*\
  !*** ./src/functor.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var causal_net_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! causal-net.core */ "causal-net.core");
/* harmony import */ var causal_net_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(causal_net_core__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (new causal_net_core__WEBPACK_IMPORTED_MODULE_0__["Functor"]());

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: causalNetDataSource, DataSourceMixins */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _causalNetDataSource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./causalNetDataSource */ "./src/causalNetDataSource.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "causalNetDataSource", function() { return _causalNetDataSource__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _dataSource_mixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dataSource.mixins */ "./src/dataSource.mixins.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataSourceMixins", function() { return _dataSource_mixins__WEBPACK_IMPORTED_MODULE_1__["default"]; });




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

/***/ "causal-net.log":
/*!*********************************!*\
  !*** external "causal-net.log" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_causal_net_log__;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RhdGFzZXRzL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RhdGFzZXRzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGF0YXNldHMvL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvb3ctbGl0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RhdGFzZXRzLy9ob21lL2h1eW5obmd1eWVuL2dpdGh1Yi9jYXVzYWxpdHkvbm9kZV9tb2R1bGVzL293LWxpdGUvbGliL251bWJlci5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RhdGFzZXRzLy9ob21lL2h1eW5obmd1eWVuL2dpdGh1Yi9jYXVzYWxpdHkvbm9kZV9tb2R1bGVzL293LWxpdGUvbGliL29iamVjdC5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RhdGFzZXRzLy9ob21lL2h1eW5obmd1eWVuL2dpdGh1Yi9jYXVzYWxpdHkvbm9kZV9tb2R1bGVzL293LWxpdGUvbGliL3N0cmluZy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RhdGFzZXRzLy9ob21lL2h1eW5obmd1eWVuL2dpdGh1Yi9jYXVzYWxpdHkvbm9kZV9tb2R1bGVzL293LWxpdGUvbGliL3N5bWJvbHMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9kYXRhc2V0cy8vaG9tZS9odXluaG5ndXllbi9naXRodWIvY2F1c2FsaXR5L25vZGVfbW9kdWxlcy9yYW5kb20vZGlzdC9kaXN0cmlidXRpb25zL2JhdGVzLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGF0YXNldHMvL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvcmFuZG9tL2Rpc3QvZGlzdHJpYnV0aW9ucy9iZXJub3VsbGkuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9kYXRhc2V0cy8vaG9tZS9odXluaG5ndXllbi9naXRodWIvY2F1c2FsaXR5L25vZGVfbW9kdWxlcy9yYW5kb20vZGlzdC9kaXN0cmlidXRpb25zL2Jpbm9taWFsLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGF0YXNldHMvL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvcmFuZG9tL2Rpc3QvZGlzdHJpYnV0aW9ucy9leHBvbmVudGlhbC5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RhdGFzZXRzLy9ob21lL2h1eW5obmd1eWVuL2dpdGh1Yi9jYXVzYWxpdHkvbm9kZV9tb2R1bGVzL3JhbmRvbS9kaXN0L2Rpc3RyaWJ1dGlvbnMvZ2VvbWV0cmljLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGF0YXNldHMvL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvcmFuZG9tL2Rpc3QvZGlzdHJpYnV0aW9ucy9pcndpbi1oYWxsLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGF0YXNldHMvL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvcmFuZG9tL2Rpc3QvZGlzdHJpYnV0aW9ucy9sb2ctbm9ybWFsLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGF0YXNldHMvL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvcmFuZG9tL2Rpc3QvZGlzdHJpYnV0aW9ucy9ub3JtYWwuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9kYXRhc2V0cy8vaG9tZS9odXluaG5ndXllbi9naXRodWIvY2F1c2FsaXR5L25vZGVfbW9kdWxlcy9yYW5kb20vZGlzdC9kaXN0cmlidXRpb25zL3BhcmV0by5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RhdGFzZXRzLy9ob21lL2h1eW5obmd1eWVuL2dpdGh1Yi9jYXVzYWxpdHkvbm9kZV9tb2R1bGVzL3JhbmRvbS9kaXN0L2Rpc3RyaWJ1dGlvbnMvcG9pc3Nvbi5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RhdGFzZXRzLy9ob21lL2h1eW5obmd1eWVuL2dpdGh1Yi9jYXVzYWxpdHkvbm9kZV9tb2R1bGVzL3JhbmRvbS9kaXN0L2Rpc3RyaWJ1dGlvbnMvdW5pZm9ybS1ib29sZWFuLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGF0YXNldHMvL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvcmFuZG9tL2Rpc3QvZGlzdHJpYnV0aW9ucy91bmlmb3JtLWludC5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RhdGFzZXRzLy9ob21lL2h1eW5obmd1eWVuL2dpdGh1Yi9jYXVzYWxpdHkvbm9kZV9tb2R1bGVzL3JhbmRvbS9kaXN0L2Rpc3RyaWJ1dGlvbnMvdW5pZm9ybS5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RhdGFzZXRzLy9ob21lL2h1eW5obmd1eWVuL2dpdGh1Yi9jYXVzYWxpdHkvbm9kZV9tb2R1bGVzL3JhbmRvbS9kaXN0L2dlbmVyYXRvcnMvZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9kYXRhc2V0cy8vaG9tZS9odXluaG5ndXllbi9naXRodWIvY2F1c2FsaXR5L25vZGVfbW9kdWxlcy9yYW5kb20vZGlzdC9yYW5kb20uanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9kYXRhc2V0cy8vaG9tZS9odXluaG5ndXllbi9naXRodWIvY2F1c2FsaXR5L25vZGVfbW9kdWxlcy9yYW5kb20vZGlzdC9ybmctZmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RhdGFzZXRzLy9ob21lL2h1eW5obmd1eWVuL2dpdGh1Yi9jYXVzYWxpdHkvbm9kZV9tb2R1bGVzL3JhbmRvbS9kaXN0L3JuZy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RhdGFzZXRzLy9ob21lL2h1eW5obmd1eWVuL2dpdGh1Yi9jYXVzYWxpdHkvbm9kZV9tb2R1bGVzL3JhbmRvbS9pbmRleC5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RhdGFzZXRzLy9ob21lL2h1eW5obmd1eWVuL2dpdGh1Yi9jYXVzYWxpdHkvbm9kZV9tb2R1bGVzL3NlZWRyYW5kb20vaW5kZXguanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9kYXRhc2V0cy8vaG9tZS9odXluaG5ndXllbi9naXRodWIvY2F1c2FsaXR5L25vZGVfbW9kdWxlcy9zZWVkcmFuZG9tL2xpYi9hbGVhLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGF0YXNldHMvL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvc2VlZHJhbmRvbS9saWIvdHljaGVpLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGF0YXNldHMvL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvc2VlZHJhbmRvbS9saWIveG9yMTI4LmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGF0YXNldHMvL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvc2VlZHJhbmRvbS9saWIveG9yNDA5Ni5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RhdGFzZXRzLy9ob21lL2h1eW5obmd1eWVuL2dpdGh1Yi9jYXVzYWxpdHkvbm9kZV9tb2R1bGVzL3NlZWRyYW5kb20vbGliL3hvcnNoaWZ0Ny5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RhdGFzZXRzLy9ob21lL2h1eW5obmd1eWVuL2dpdGh1Yi9jYXVzYWxpdHkvbm9kZV9tb2R1bGVzL3NlZWRyYW5kb20vbGliL3hvcndvdy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RhdGFzZXRzLy9ob21lL2h1eW5obmd1eWVuL2dpdGh1Yi9jYXVzYWxpdHkvbm9kZV9tb2R1bGVzL3NlZWRyYW5kb20vc2VlZHJhbmRvbS5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RhdGFzZXRzLyh3ZWJwYWNrKS9idWlsZGluL2FtZC1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9kYXRhc2V0cy8od2VicGFjaykvYnVpbGRpbi9hbWQtb3B0aW9ucy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RhdGFzZXRzLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RhdGFzZXRzLy4uL2NhdXNhbGl0eS1zYW1wbGluZy9kaXN0L0BjYXVzYWxOZXQvc2FtcGxpbmcud2ViLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGF0YXNldHMvLi9zcmMvUmVhZGVycy9idWZmZXJSZWFkZXIubWl4aW5zLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGF0YXNldHMvLi9zcmMvUmVhZGVycy9jc3ZSZWFkZXIubWl4aW5zLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGF0YXNldHMvLi9zcmMvUmVhZGVycy9pbml0LmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGF0YXNldHMvLi9zcmMvUmVhZGVycy9wbmdSZWFkZXIubWl4aW5zLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGF0YXNldHMvLi9zcmMvY2F1c2FsTmV0RGF0YVNvdXJjZS5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RhdGFzZXRzLy4vc3JjL2RhdGFTb3VyY2UubWl4aW5zLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGF0YXNldHMvLi9zcmMvZnVuY3Rvci5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RhdGFzZXRzLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGF0YXNldHMvY3J5cHRvIChpZ25vcmVkKSIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RhdGFzZXRzL2V4dGVybmFsIFwiY2F1c2FsLW5ldC5jb3JlXCIiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9kYXRhc2V0cy9leHRlcm5hbCBcImNhdXNhbC1uZXQubG9nXCIiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9kYXRhc2V0cy9leHRlcm5hbCBcImNhdXNhbC1uZXQudXRpbHNcIiJdLCJuYW1lcyI6WyJCdWZmZXJSZWFkZXJNaXhpbnMiLCJCYXNlRGF0YVNvdXJjZSIsIm1ha2VCdWZmZXJSZWFkZXIiLCJiYXNlTGluayIsIlNwbGl0Rm5MZW5zZSIsImQiLCJmaWxlTmFtZSIsImNodW5rRGF0YSIsInN0YXJ0c1dpdGgiLCJidWZmZXJVdGlscyIsImZldGNoQnVmZmVyIiwicmVhZEJ1ZmZlciIsIkNTVlJlYWRlck1peGlucyIsImV4dHJhY3RpbmdBdHRyaWJ1dGUiLCJyb3dzIiwic2FtcGxlQXR0cmlidXRlcyIsImxhYmVsQXR0cmlidXRlcyIsInNhbXBsZXMiLCJsYWJlbHMiLCJpIiwicm93IiwibGVuZ3RoIiwicHVzaCIsIm1hcCIsImsiLCJFcnJvciIsIkpTT04iLCJzdHJpbmdpZnkiLCJtYWtlQ1NWUmVhZGVyIiwiY3N2VXRpbHMiLCJmZXRjaENTViIsInJlYWRDU1YiLCJQTkdSZWFkZXJNaXhpbnMiLCJtYWtlUE5HUmVhZGVyIiwicG5nVXRpbHMiLCJmZXRjaFBORyIsInJlYWRQTkciLCJDYXVzYWxOZXREYXRhU291cmNlIiwicGxhdGZvcm0iLCJtaXhXaXRoIiwiRXZlbnQiLCJTYW1wbGluZ01peGlucyIsIkxvZ2dlck1peGlucyIsImNvbnN0cnVjdG9yIiwiZnVuY3RvciIsImxvZ2dlciIsInNhbXBsaW5nIiwiRiIsIlIiLCJDb3JlRnVuY3RvciIsIkxvZ2dlciIsIlNhbXBsaW5nIiwiY29ubmVjdCIsImRlc2NyaXB0aW9uTGluayIsImdyb3VwQmVnaW4iLCJsb2ciLCJkZXNjcmlwdGlvbiIsInF1ZXJ5IiwiQmFzZUxpbmsiLCJzZXRDaHVua3MiLCJzZXRTYW1wbGVTaXplIiwic2V0TGFiZWxTaXplIiwic2V0RGF0YVJlYWRlciIsImdyb3VwRW5kIiwibGluayIsImpzb25VdGlscyIsImZldGNoSlNPTiIsInJlYWRKU09OIiwiRGF0YUNodW5rcyIsImRhdGFDaHVua3MiLCJTYW1wbGVSZWFkZXIiLCJzYW1wbGVSZWFkZXIiLCJMYWJlbFJlYWRlciIsImxhYmVsUmVhZGVyIiwiRGF0YVJlYWRlciIsImRhdGFSZWFkZXIiLCJTYW1wbGVTaXplIiwic2FtcGxlU2l6ZSIsIkxhYmVsU2l6ZSIsImxhYmVsU2l6ZSIsIkFycmF5IiwiaXNBcnJheSIsInJlZHVjZSIsInMiLCJTYW1wbGVDaHVua05hbWUiLCJMYWJlbENodW5rTmFtZSIsIkNodW5rTGlzdCIsImNpZHgiLCJDaHVua05hbWUiLCJTYW1wbGUiLCJyZXBsYWNlIiwiTGFiZWwiLCJTYW1wbGVUeXBlIiwiTGFiZWxUeXBlIiwiRGF0YVR5cGUiLCJTcGxpdEZuTGVuc2VzIiwic3BsaXRTYW1wbGUiLCJzcGxpdExhYmVsIiwiU2FtcGxlQXR0cmlidXRlcyIsIkxhYmVsQXR0cmlidXRlcyIsImRhdGEiLCJzcGxpdEV2ZXJ5IiwiY2h1bmtTZWxlY3QiLCJudW1DaHVua3MiLCJjaHVua0xpc3QiLCJzZWxlY3RlZENodW5rcyIsInN1YlNhbXBsaW5nIiwicmVhZCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwic2FtcGxlRGF0YSIsImxhYmVsRGF0YSIsImVtaXQiLCJ0ZXJtTG9nZ2VyIiwiY2F1c2FsTmV0U2FtcGxpbmciLCJEYXRhU291cmNlTWl4aW5zIiwiQmFzZVBpcGVsaW5lQ2xhc3MiLCJEYXRhU291cmNlUmVhZGVyIiwic291cmNlUmVhZGVyIiwic2V0QnlDb25maWciLCJwaXBlbGluZUNvbmZpZyIsIlNvdXJjZSIsIkRhdGFzZXQiLCJzZWxlY3RlZENodW5rIiwiUHJlcHJvY2Vzc2luZyIsIlByZXByb2Nlc3NpbmdEYXRhIiwiRnVuY3RvciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCLGdCQUFnQjtBQUNoQjs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCLGdCQUFnQjtBQUNoQjs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QixnQkFBZ0I7QUFDaEI7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEIsZ0JBQWdCO0FBQ2hCOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCLGdCQUFnQjtBQUNoQjs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixnQkFBZ0I7QUFDaEI7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0Qixl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O0FBQ0QsU0FBS0wsTUFBTCxDQUFZYSxRQUFaO0FBQ0EsV0FBTzBELGNBQVA7QUFDSDs7QUFFRCxRQUFNZCxJQUFOLENBQVdKLFNBQVgsRUFBcUI7QUFDakIsUUFBSXFCLGFBQWEsR0FBRyxLQUFLTixnQkFBTCxDQUFzQmhCLFdBQXRCLENBQWtDQyxTQUFsQyxDQUFwQjtBQUNBLFNBQUtyRCxNQUFMLENBQVlLLEdBQVosQ0FBZ0I7QUFBQyx1QkFBaUJxRTtBQUFsQixLQUFoQjtBQUNBLFVBQU0sS0FBS04sZ0JBQUwsQ0FBc0JYLElBQXRCLEVBQU47QUFDQSxXQUFPLEtBQUtrQixhQUFMLENBQW1CQyxpQkFBMUI7QUFDSDs7QUFqQzBFLENBQS9FOztBQW9DZVYsK0VBQWYsRTs7Ozs7Ozs7Ozs7O0FDNUNBO0FBQUE7QUFBQTtBQUFBO0FBQ2UsbUVBQUlXLHVEQUFKLEVBQWYsRTs7Ozs7Ozs7Ozs7O0FDREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUEsZTs7Ozs7Ozs7Ozs7QUNBQSw2RDs7Ozs7Ozs7Ozs7QUNBQSw0RDs7Ozs7Ozs7Ozs7QUNBQSw4RCIsImZpbGUiOiJAY2F1c2FsTmV0L2RhdGFzZXRzLndlYi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImNhdXNhbC1uZXQuY29yZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQubG9nXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC51dGlsc1wiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJjYXVzYWwtbmV0LmNvcmVcIiwgXCJjYXVzYWwtbmV0LmxvZ1wiLCBcImNhdXNhbC1uZXQudXRpbHNcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQGNhdXNhbE5ldC9kYXRhc2V0c1wiXSA9IGZhY3RvcnkocmVxdWlyZShcImNhdXNhbC1uZXQuY29yZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQubG9nXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC51dGlsc1wiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiQGNhdXNhbE5ldC9kYXRhc2V0c1wiXSA9IGZhY3Rvcnkocm9vdFtcImNhdXNhbC1uZXQuY29yZVwiXSwgcm9vdFtcImNhdXNhbC1uZXQubG9nXCJdLCByb290W1wiY2F1c2FsLW5ldC51dGlsc1wiXSk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9jb3JlX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9sb2dfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3V0aWxzX18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIid1c2Ugc3RyaWN0J1xuXG5jb25zdCBzeW1ib2xzID0gcmVxdWlyZSgnLi9saWIvc3ltYm9scycpXG5jb25zdCBudW1iZXIgPSByZXF1aXJlKCcuL2xpYi9udW1iZXInKVxuY29uc3Qgc3RyaW5nID0gcmVxdWlyZSgnLi9saWIvc3RyaW5nJylcbmNvbnN0IG9iamVjdCA9IHJlcXVpcmUoJy4vbGliL29iamVjdCcpXG5cbmNvbnN0IHR5cGVQcmVkaWNhdGVzID0ge1xuICBudW1iZXIsXG4gIHN0cmluZyxcbiAgb2JqZWN0XG59XG5cbmNvbnN0IGNyZWF0ZU93ID0gKHtcbiAgdmFsaWRhdG9ycyA9IFtdLFxuICBwcmVkaWNhdGVzID0gdHlwZVByZWRpY2F0ZXMsXG4gIHR5cGUgPSBudWxsXG59ID0geyB9KSA9PiB7XG4gIGNvbnN0IG93ID0gbmV3IFByb3h5KGZ1bmN0aW9uICgpIHsgfSwge1xuICAgIGdldDogKG9iaiwga2V5KSA9PiB7XG4gICAgICBpZiAoa2V5ID09PSBzeW1ib2xzLnZhbGlkYXRlKSB7XG4gICAgICAgIHJldHVybiAodmFsdWUsIGxhYmVsID0gJ2FyZ3VtZW50JykgPT4ge1xuICAgICAgICAgIGlmICghdHlwZSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcignbWlzc2luZyByZXF1aXJlZCB0eXBlIHNwZWNpZmllcicpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWxpZGF0b3JzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICBjb25zdCB2YWxpZGF0b3IgPSB2YWxpZGF0b3JzW2ldXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSB2YWxpZGF0b3IuZm4odmFsdWUpXG5cbiAgICAgICAgICAgIGlmICghcmVzdWx0KSB7XG4gICAgICAgICAgICAgIGlmIChpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCAke2xhYmVsfSBcXGAke3ZhbHVlfVxcYCB0byBiZSBvZiB0eXBlIFxcYCR7dHlwZX1cXGAsIGJ1dCByZWNlaXZlZCB0eXBlIFxcYCR7dHlwZW9mIHZhbHVlfVxcYGApXG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCAke3R5cGV9IFxcYCR7bGFiZWx9XFxgIFxcYCR7dmFsdWV9XFxgIGZhaWxlZCBwcmVkaWNhdGUgXFxgJHt2YWxpZGF0b3Iua2V5fVxcYGApXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc3QgcHJlZGljYXRlID0gcHJlZGljYXRlc1trZXldXG5cbiAgICAgIGlmIChwcmVkaWNhdGUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBwcmVkaWNhdGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICB2YWxpZGF0b3JzLnB1c2goe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZm46IHByZWRpY2F0ZVxuICAgICAgICAgIH0pXG5cbiAgICAgICAgICByZXR1cm4gb3dcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gY3JlYXRlT3coe1xuICAgICAgICAgICAgdHlwZToga2V5LFxuICAgICAgICAgICAgdmFsaWRhdG9yczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgIGZuOiBwcmVkaWNhdGUudmFsaWRhdG9yXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBwcmVkaWNhdGVzOiBwcmVkaWNhdGUucHJlZGljYXRlc1xuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGZuID0gcHJlZGljYXRlc1tzeW1ib2xzLmZ1bmNdICYmIHByZWRpY2F0ZXNbc3ltYm9scy5mdW5jXVtrZXldXG5cbiAgICAgICAgaWYgKGZuKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm94eShmdW5jdGlvbiAoKSB7IH0sIHtcbiAgICAgICAgICAgIGdldDogKCkgPT4ge1xuICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYGludmFsaWQgdXNlIG9mIGZ1bmN0aW9uYWwgcHJlZGljYXRlIFwiJHtrZXl9XCJgKVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgYXBwbHk6IChvYmosIHRoaXNBcmcsIGFyZ3MpID0+IHtcbiAgICAgICAgICAgICAgdmFsaWRhdG9ycy5wdXNoKHtcbiAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgZm46IGZuKC4uLmFyZ3MpXG4gICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgcmV0dXJuIG93XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoa2V5ID09PSAnZGVmYXVsdCcgfHwga2V5ID09PSAnX19lc01vZHVsZScpIHtcbiAgICAgICAgICAgIHJldHVybiBvd1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBvd1xuICAgICAgICAgIC8vIHRocm93IG5ldyBFcnJvcihgdW5yZWNvZ25pemVkIHByZWRpY2F0ZSBcIiR7a2V5fVwiYClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhcHBseTogKG9iaiwgdGhpc0FyZywgYXJncykgPT4ge1xuICAgICAgaWYgKGFyZ3MubGVuZ3RoICE9PSAyICYmIGFyZ3MubGVuZ3RoICE9PSAzKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignaW52YWxpZCBudW1iZXIgb2YgYXJndW1lbnRzIHRvIFwib3dcIicpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhcmdzWzFdW3N5bWJvbHMudmFsaWRhdGVdKGFyZ3NbMF0sIGFyZ3NbMl0pXG4gICAgICB9XG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBvd1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZU93KClcbiIsIid1c2Ugc3RyaWN0J1xuXG5jb25zdCB7IGZ1bmMgfSA9IHJlcXVpcmUoJy4vc3ltYm9scycpXG5cbmNvbnN0IG51bWJlclByZWRpY2F0ZXMgPSB7XG4gIHBvc2l0aXZlOiAodmFsdWUpID0+ICh2YWx1ZSA+IDApLFxuICBuZWdhdGl2ZTogKHZhbHVlKSA9PiAodmFsdWUgPCAwKSxcbiAgbm9uTmVnYXRpdmU6ICh2YWx1ZSkgPT4gKHZhbHVlID49IDApLFxuICBpbnRlZ2VyOiAodmFsdWUpID0+ICh2YWx1ZSA9PT0gKHZhbHVlIHwgMCkpLFxuXG4gIFtmdW5jXToge1xuICAgIGlzOiAoZm4pID0+IGZuLFxuICAgIGVxOiAodikgPT4gKHZhbHVlKSA9PiAodmFsdWUgPT09IHYpLFxuICAgIGd0OiAodikgPT4gKHZhbHVlKSA9PiAodmFsdWUgPiB2KSxcbiAgICBndGU6ICh2KSA9PiAodmFsdWUpID0+ICh2YWx1ZSA+PSB2KSxcbiAgICBsdDogKHYpID0+ICh2YWx1ZSkgPT4gKHZhbHVlIDwgdiksXG4gICAgbHRlOiAodikgPT4gKHZhbHVlKSA9PiAodmFsdWUgPD0gdilcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgcHJlZGljYXRlczogbnVtYmVyUHJlZGljYXRlcyxcbiAgdmFsaWRhdG9yOiAodmFsdWUpID0+IHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJ1xuICB9XG59XG4iLCIndXNlIHN0cmljdCdcblxuY29uc3QgeyBmdW5jIH0gPSByZXF1aXJlKCcuL3N5bWJvbHMnKVxuXG5jb25zdCBvYmplY3RQcmVkaWNhdGVzID0ge1xuICBwbGFpbjogKHZhbHVlKSA9PiB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ29iamVjdCcpIHJldHVybiBmYWxzZVxuXG4gICAgY29uc3QgcHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YodmFsdWUpXG4gICAgcmV0dXJuIHByb3RvID09PSBudWxsIHx8IHByb3RvID09PSBPYmplY3QuZ2V0UHJvdG90eXBlT2Yoe30pXG4gIH0sXG4gIGVtcHR5OiAodmFsdWUpID0+IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDAsXG4gIG5vbkVtcHR5OiAodmFsdWUpID0+IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPiAwLFxuXG4gIFtmdW5jXToge1xuICAgIGlzOiAoZm4pID0+IGZuLFxuICAgIGluc3RhbmNlT2Y6ICh2KSA9PiAodmFsdWUpID0+ICh2YWx1ZSBpbnN0YW5jZW9mIHYpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHByZWRpY2F0ZXM6IG9iamVjdFByZWRpY2F0ZXMsXG4gIHZhbGlkYXRvcjogKHZhbHVlKSA9PiB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCdcbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IHsgZnVuYyB9ID0gcmVxdWlyZSgnLi9zeW1ib2xzJylcblxuY29uc3Qgc3RyaW5nUHJlZGljYXRlcyA9IHtcbiAgZW1wdHk6ICh2YWx1ZSkgPT4gKHZhbHVlID09PSAnJyksXG4gIG5vbkVtcHR5OiAodmFsdWUpID0+ICh2YWx1ZSAhPT0gJycpLFxuXG4gIFtmdW5jXToge1xuICAgIGlzOiAoZm4pID0+IGZuLFxuICAgIGVxOiAodikgPT4gKHZhbHVlKSA9PiAodmFsdWUgPT09IHYpLFxuICAgIGxlbmd0aDogKHYpID0+ICh2YWx1ZSkgPT4gKHZhbHVlLmxlbmd0aCA9PT0gdiksXG4gICAgbWluTGVuZ3RoOiAodikgPT4gKHZhbHVlKSA9PiAodmFsdWUubGVuZ3RoID49IHYpLFxuICAgIG1heExlbmd0aDogKHYpID0+ICh2YWx1ZSkgPT4gKHZhbHVlLmxlbmd0aCA8PSB2KSxcbiAgICBtYXRjaGVzOiAodikgPT4gKHZhbHVlKSA9PiB2LnRlc3QodmFsdWUpLFxuICAgIHN0YXJ0c1dpdGg6ICh2KSA9PiAodmFsdWUpID0+IHZhbHVlLnN0YXJ0c1dpdGgodiksXG4gICAgZW5kc1dpdGg6ICh2KSA9PiAodmFsdWUpID0+IHZhbHVlLmVuZHNXaXRoKHYpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHByZWRpY2F0ZXM6IHN0cmluZ1ByZWRpY2F0ZXMsXG4gIHZhbGlkYXRvcjogKHZhbHVlKSA9PiB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZydcbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbmV4cG9ydHMuZnVuYyA9IFN5bWJvbCgnZnVuYycpXG5leHBvcnRzLnZhbGlkYXRlID0gU3ltYm9sKCd2YWxpZGF0ZScpXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfb3dMaXRlID0gcmVxdWlyZSgnb3ctbGl0ZScpO1xuXG52YXIgX293TGl0ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9vd0xpdGUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAocmFuZG9tKSB7XG4gIHZhciBuID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAxO1xuXG4gICgwLCBfb3dMaXRlMi5kZWZhdWx0KShuLCBfb3dMaXRlMi5kZWZhdWx0Lm51bWJlci5pbnRlZ2VyLnBvc2l0aXZlKTtcbiAgdmFyIGlyd2luSGFsbCA9IHJhbmRvbS5pcndpbkhhbGwobik7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gaXJ3aW5IYWxsKCkgLyBuO1xuICB9O1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWJhdGVzLmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9vd0xpdGUgPSByZXF1aXJlKCdvdy1saXRlJyk7XG5cbnZhciBfb3dMaXRlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX293TGl0ZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChyYW5kb20pIHtcbiAgdmFyIHAgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IDAuNTtcblxuICAoMCwgX293TGl0ZTIuZGVmYXVsdCkocCwgX293TGl0ZTIuZGVmYXVsdC5udW1iZXIuZ3RlKDApLmx0KDEpKTtcblxuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiByYW5kb20ubmV4dCgpICsgcCB8IDA7XG4gIH07XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YmVybm91bGxpLmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9vd0xpdGUgPSByZXF1aXJlKCdvdy1saXRlJyk7XG5cbnZhciBfb3dMaXRlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX293TGl0ZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChyYW5kb20pIHtcbiAgdmFyIG4gPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IDE7XG4gIHZhciBwID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiAwLjU7XG5cbiAgKDAsIF9vd0xpdGUyLmRlZmF1bHQpKG4sIF9vd0xpdGUyLmRlZmF1bHQubnVtYmVyLnBvc2l0aXZlLmludGVnZXIpO1xuICAoMCwgX293TGl0ZTIuZGVmYXVsdCkocCwgX293TGl0ZTIuZGVmYXVsdC5udW1iZXIuZ3RlKDApLmx0ZSgxKSk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIHggPSAwO1xuXG4gICAgd2hpbGUgKGkrKyA8IG4pIHtcbiAgICAgIHggKz0gcmFuZG9tLm5leHQoKSA8IHA7XG4gICAgfVxuXG4gICAgcmV0dXJuIHg7XG4gIH07XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Ymlub21pYWwuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX293TGl0ZSA9IHJlcXVpcmUoJ293LWxpdGUnKTtcblxudmFyIF9vd0xpdGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfb3dMaXRlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHJhbmRvbSkge1xuICB2YXIgbGFtYmRhID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAxO1xuXG4gICgwLCBfb3dMaXRlMi5kZWZhdWx0KShsYW1iZGEsIF9vd0xpdGUyLmRlZmF1bHQubnVtYmVyLnBvc2l0aXZlKTtcblxuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAtTWF0aC5sb2coMSAtIHJhbmRvbS5uZXh0KCkpIC8gbGFtYmRhO1xuICB9O1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWV4cG9uZW50aWFsLmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9vd0xpdGUgPSByZXF1aXJlKCdvdy1saXRlJyk7XG5cbnZhciBfb3dMaXRlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX293TGl0ZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChyYW5kb20pIHtcbiAgdmFyIHAgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IDAuNTtcblxuICAoMCwgX293TGl0ZTIuZGVmYXVsdCkocCwgX293TGl0ZTIuZGVmYXVsdC5udW1iZXIuZ3QoMCkubHRlKDEpKTtcbiAgdmFyIGludkxvZ1AgPSAxLjAgLyBNYXRoLmxvZygxLjAgLSBwKTtcblxuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAxICsgTWF0aC5sb2cocmFuZG9tLm5leHQoKSkgKiBpbnZMb2dQIHwgMDtcbiAgfTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1nZW9tZXRyaWMuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX293TGl0ZSA9IHJlcXVpcmUoJ293LWxpdGUnKTtcblxudmFyIF9vd0xpdGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfb3dMaXRlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHJhbmRvbSkge1xuICB2YXIgbiA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogMTtcblxuICAoMCwgX293TGl0ZTIuZGVmYXVsdCkobiwgX293TGl0ZTIuZGVmYXVsdC5udW1iZXIuaW50ZWdlci5ndGUoMCkpO1xuXG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHN1bSA9IDA7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuOyArK2kpIHtcbiAgICAgIHN1bSArPSByYW5kb20ubmV4dCgpO1xuICAgIH1cblxuICAgIHJldHVybiBzdW07XG4gIH07XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aXJ3aW4taGFsbC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHJhbmRvbSkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHZhciBub3JtYWwgPSByYW5kb20ubm9ybWFsLmFwcGx5KHJhbmRvbSwgYXJncyk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gTWF0aC5leHAobm9ybWFsKCkpO1xuICB9O1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxvZy1ub3JtYWwuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX293TGl0ZSA9IHJlcXVpcmUoJ293LWxpdGUnKTtcblxudmFyIF9vd0xpdGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfb3dMaXRlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHJhbmRvbSkge1xuICB2YXIgbXUgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IDA7XG4gIHZhciBzaWdtYSA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogMTtcblxuICAoMCwgX293TGl0ZTIuZGVmYXVsdCkobXUsIF9vd0xpdGUyLmRlZmF1bHQubnVtYmVyKTtcbiAgKDAsIF9vd0xpdGUyLmRlZmF1bHQpKHNpZ21hLCBfb3dMaXRlMi5kZWZhdWx0Lm51bWJlcik7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgeCA9IHZvaWQgMCxcbiAgICAgICAgeSA9IHZvaWQgMCxcbiAgICAgICAgciA9IHZvaWQgMDtcblxuICAgIGRvIHtcbiAgICAgIHggPSByYW5kb20ubmV4dCgpICogMiAtIDE7XG4gICAgICB5ID0gcmFuZG9tLm5leHQoKSAqIDIgLSAxO1xuICAgICAgciA9IHggKiB4ICsgeSAqIHk7XG4gICAgfSB3aGlsZSAoIXIgfHwgciA+IDEpO1xuXG4gICAgcmV0dXJuIG11ICsgc2lnbWEgKiB5ICogTWF0aC5zcXJ0KC0yICogTWF0aC5sb2cocikgLyByKTtcbiAgfTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ub3JtYWwuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX293TGl0ZSA9IHJlcXVpcmUoJ293LWxpdGUnKTtcblxudmFyIF9vd0xpdGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfb3dMaXRlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHJhbmRvbSkge1xuICB2YXIgYWxwaGEgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IDE7XG5cbiAgKDAsIF9vd0xpdGUyLmRlZmF1bHQpKGFscGhhLCBfb3dMaXRlMi5kZWZhdWx0Lm51bWJlci5ndGUoMCkpO1xuICB2YXIgaW52QWxwaGEgPSAxLjAgLyBhbHBoYTtcblxuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAxLjAgLyBNYXRoLnBvdygxLjAgLSByYW5kb20ubmV4dCgpLCBpbnZBbHBoYSk7XG4gIH07XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGFyZXRvLmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9vd0xpdGUgPSByZXF1aXJlKCdvdy1saXRlJyk7XG5cbnZhciBfb3dMaXRlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX293TGl0ZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBsb2dGYWN0b3JpYWxUYWJsZSA9IFswLjAsIDAuMCwgMC42OTMxNDcxODA1NTk5NDUyOSwgMS43OTE3NTk0NjkyMjgwNTUwLCAzLjE3ODA1MzgzMDM0Nzk0NTgsIDQuNzg3NDkxNzQyNzgyMDQ1OCwgNi41NzkyNTEyMTIwMTAxMDEyLCA4LjUyNTE2MTM2MTA2NTQxNDcsIDEwLjYwNDYwMjkwMjc0NTI1MSwgMTIuODAxODI3NDgwMDgxNDY5XTtcblxudmFyIGxvZ0ZhY3RvcmlhbCA9IGZ1bmN0aW9uIGxvZ0ZhY3RvcmlhbChrKSB7XG4gIHJldHVybiBsb2dGYWN0b3JpYWxUYWJsZVtrXTtcbn07XG5cbnZhciBsb2dTcXJ0MlBJID0gMC45MTg5Mzg1MzMyMDQ2NzI2NztcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHJhbmRvbSkge1xuICB2YXIgbGFtYmRhID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAxO1xuXG4gICgwLCBfb3dMaXRlMi5kZWZhdWx0KShsYW1iZGEsIF9vd0xpdGUyLmRlZmF1bHQubnVtYmVyLnBvc2l0aXZlKTtcblxuICBpZiAobGFtYmRhIDwgMTApIHtcbiAgICAvLyBpbnZlcnNpb24gbWV0aG9kXG4gICAgdmFyIGV4cE1lYW4gPSBNYXRoLmV4cCgtbGFtYmRhKTtcblxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgcCA9IGV4cE1lYW47XG4gICAgICB2YXIgeCA9IDA7XG4gICAgICB2YXIgdSA9IHJhbmRvbS5uZXh0KCk7XG5cbiAgICAgIHdoaWxlICh1ID4gcCkge1xuICAgICAgICB1ID0gdSAtIHA7XG4gICAgICAgIHAgPSBsYW1iZGEgKiBwIC8gKyt4O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4geDtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIC8vIGdlbmVyYXRpdmUgbWV0aG9kXG4gICAgdmFyIHNtdSA9IE1hdGguc3FydChsYW1iZGEpO1xuICAgIHZhciBiID0gMC45MzEgKyAyLjUzICogc211O1xuICAgIHZhciBhID0gLTAuMDU5ICsgMC4wMjQ4MyAqIGI7XG4gICAgdmFyIGludkFscGhhID0gMS4xMjM5ICsgMS4xMzI4IC8gKGIgLSAzLjQpO1xuICAgIHZhciB2UiA9IDAuOTI3NyAtIDMuNjIyNCAvIChiIC0gMik7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIHUgPSB2b2lkIDA7XG4gICAgICAgIHZhciB2ID0gcmFuZG9tLm5leHQoKTtcblxuICAgICAgICBpZiAodiA8PSAwLjg2ICogdlIpIHtcbiAgICAgICAgICB1ID0gdiAvIHZSIC0gMC40MztcbiAgICAgICAgICByZXR1cm4gTWF0aC5mbG9vcigoMiAqIGEgLyAoMC41IC0gTWF0aC5hYnModSkpICsgYikgKiB1ICsgbGFtYmRhICsgMC40NDUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHYgPj0gdlIpIHtcbiAgICAgICAgICB1ID0gcmFuZG9tLm5leHQoKSAtIDAuNTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB1ID0gdiAvIHZSIC0gMC45MztcbiAgICAgICAgICB1ID0gKHUgPCAwID8gLTAuNSA6IDAuNSkgLSB1O1xuICAgICAgICAgIHYgPSByYW5kb20ubmV4dCgpICogdlI7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgdXMgPSAwLjUgLSBNYXRoLmFicyh1KTtcbiAgICAgICAgaWYgKHVzIDwgMC4wMTMgJiYgdiA+IHVzKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgayA9IE1hdGguZmxvb3IoKDIgKiBhIC8gdXMgKyBiKSAqIHUgKyBsYW1iZGEgKyAwLjQ0NSkgfCAwO1xuICAgICAgICB2ID0gdiAqIGludkFscGhhIC8gKGEgLyAodXMgKiB1cykgKyBiKTtcblxuICAgICAgICBpZiAoayA+PSAxMCkge1xuICAgICAgICAgIHZhciB0ID0gKGsgKyAwLjUpICogTWF0aC5sb2cobGFtYmRhIC8gaykgLSBsYW1iZGEgLSBsb2dTcXJ0MlBJICsgayAtICgxIC8gMTIuMCAtICgxIC8gMzYwLjAgLSAxIC8gKDEyNjAuMCAqIGsgKiBrKSkgLyAoayAqIGspKSAvIGs7XG5cbiAgICAgICAgICBpZiAoTWF0aC5sb2codiAqIHNtdSkgPD0gdCkge1xuICAgICAgICAgICAgcmV0dXJuIGs7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGsgPj0gMCkge1xuICAgICAgICAgIGlmIChNYXRoLmxvZyh2KSA8PSBrICogTWF0aC5sb2cobGFtYmRhKSAtIGxhbWJkYSAtIGxvZ0ZhY3RvcmlhbChrKSkge1xuICAgICAgICAgICAgcmV0dXJuIGs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBvaXNzb24uanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChyYW5kb20pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gcmFuZG9tLm5leHQoKSA+PSAwLjU7XG4gIH07XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dW5pZm9ybS1ib29sZWFuLmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9vd0xpdGUgPSByZXF1aXJlKCdvdy1saXRlJyk7XG5cbnZhciBfb3dMaXRlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX293TGl0ZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChyYW5kb20sIG1pbiwgbWF4KSB7XG4gIGlmIChtYXggPT09IHVuZGVmaW5lZCkge1xuICAgIG1heCA9IG1pbiA9PT0gdW5kZWZpbmVkID8gMSA6IG1pbjtcbiAgICBtaW4gPSAwO1xuICB9XG5cbiAgKDAsIF9vd0xpdGUyLmRlZmF1bHQpKG1pbiwgX293TGl0ZTIuZGVmYXVsdC5udW1iZXIuaW50ZWdlcik7XG4gICgwLCBfb3dMaXRlMi5kZWZhdWx0KShtYXgsIF9vd0xpdGUyLmRlZmF1bHQubnVtYmVyLmludGVnZXIpO1xuXG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHJhbmRvbS5uZXh0KCkgKiAobWF4IC0gbWluICsgMSkgKyBtaW4gfCAwO1xuICB9O1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVuaWZvcm0taW50LmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9vd0xpdGUgPSByZXF1aXJlKCdvdy1saXRlJyk7XG5cbnZhciBfb3dMaXRlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX293TGl0ZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChyYW5kb20sIG1pbiwgbWF4KSB7XG4gIGlmIChtYXggPT09IHVuZGVmaW5lZCkge1xuICAgIG1heCA9IG1pbiA9PT0gdW5kZWZpbmVkID8gMSA6IG1pbjtcbiAgICBtaW4gPSAwO1xuICB9XG5cbiAgKDAsIF9vd0xpdGUyLmRlZmF1bHQpKG1pbiwgX293TGl0ZTIuZGVmYXVsdC5udW1iZXIpO1xuICAoMCwgX293TGl0ZTIuZGVmYXVsdCkobWF4LCBfb3dMaXRlMi5kZWZhdWx0Lm51bWJlcik7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gcmFuZG9tLm5leHQoKSAqIChtYXggLSBtaW4pICsgbWluO1xuICB9O1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVuaWZvcm0uanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX293TGl0ZSA9IHJlcXVpcmUoJ293LWxpdGUnKTtcblxudmFyIF9vd0xpdGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfb3dMaXRlKTtcblxudmFyIF9ybmcgPSByZXF1aXJlKCcuLi9ybmcnKTtcblxudmFyIF9ybmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcm5nKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgUk5HRnVuY3Rpb24gPSBmdW5jdGlvbiAoX1JORykge1xuICBfaW5oZXJpdHMoUk5HRnVuY3Rpb24sIF9STkcpO1xuXG4gIGZ1bmN0aW9uIFJOR0Z1bmN0aW9uKHRodW5rLCBvcHRzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFJOR0Z1bmN0aW9uKTtcblxuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChSTkdGdW5jdGlvbi5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFJOR0Z1bmN0aW9uKSkuY2FsbCh0aGlzKSk7XG5cbiAgICBfdGhpcy5zZWVkKHRodW5rLCBvcHRzKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoUk5HRnVuY3Rpb24sIFt7XG4gICAga2V5OiAnbmV4dCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcm5nKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc2VlZCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNlZWQodGh1bmspIHtcbiAgICAgICgwLCBfb3dMaXRlMi5kZWZhdWx0KSh0aHVuaywgX293TGl0ZTIuZGVmYXVsdC5mdW5jdGlvbik7XG4gICAgICB0aGlzLl9ybmcgPSB0aHVuaztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjbG9uZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNsb25lKCkge1xuICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIG9wdHMgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgb3B0c1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoUk5HRnVuY3Rpb24sIFtudWxsXS5jb25jYXQoW3RoaXMuX3JuZ10sIG9wdHMpKSkoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICduYW1lJyxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiAnZnVuY3Rpb24nO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBSTkdGdW5jdGlvbjtcbn0oX3JuZzIuZGVmYXVsdCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFJOR0Z1bmN0aW9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZnVuY3Rpb24uanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5STkdGYWN0b3J5ID0gZXhwb3J0cy5STkcgPSB1bmRlZmluZWQ7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfb3dMaXRlID0gcmVxdWlyZSgnb3ctbGl0ZScpO1xuXG52YXIgX293TGl0ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9vd0xpdGUpO1xuXG52YXIgX3JuZyA9IHJlcXVpcmUoJy4vcm5nJyk7XG5cbnZhciBfcm5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JuZyk7XG5cbnZhciBfcm5nRmFjdG9yeSA9IHJlcXVpcmUoJy4vcm5nLWZhY3RvcnknKTtcblxudmFyIF9ybmdGYWN0b3J5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JuZ0ZhY3RvcnkpO1xuXG52YXIgX3VuaWZvcm0yID0gcmVxdWlyZSgnLi9kaXN0cmlidXRpb25zL3VuaWZvcm0nKTtcblxudmFyIF91bmlmb3JtMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3VuaWZvcm0yKTtcblxudmFyIF91bmlmb3JtSW50MiA9IHJlcXVpcmUoJy4vZGlzdHJpYnV0aW9ucy91bmlmb3JtLWludCcpO1xuXG52YXIgX3VuaWZvcm1JbnQzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdW5pZm9ybUludDIpO1xuXG52YXIgX3VuaWZvcm1Cb29sZWFuMiA9IHJlcXVpcmUoJy4vZGlzdHJpYnV0aW9ucy91bmlmb3JtLWJvb2xlYW4nKTtcblxudmFyIF91bmlmb3JtQm9vbGVhbjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91bmlmb3JtQm9vbGVhbjIpO1xuXG52YXIgX25vcm1hbDIgPSByZXF1aXJlKCcuL2Rpc3RyaWJ1dGlvbnMvbm9ybWFsJyk7XG5cbnZhciBfbm9ybWFsMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX25vcm1hbDIpO1xuXG52YXIgX2xvZ05vcm1hbDIgPSByZXF1aXJlKCcuL2Rpc3RyaWJ1dGlvbnMvbG9nLW5vcm1hbCcpO1xuXG52YXIgX2xvZ05vcm1hbDMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9sb2dOb3JtYWwyKTtcblxudmFyIF9iZXJub3VsbGkyID0gcmVxdWlyZSgnLi9kaXN0cmlidXRpb25zL2Jlcm5vdWxsaScpO1xuXG52YXIgX2Jlcm5vdWxsaTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9iZXJub3VsbGkyKTtcblxudmFyIF9iaW5vbWlhbDIgPSByZXF1aXJlKCcuL2Rpc3RyaWJ1dGlvbnMvYmlub21pYWwnKTtcblxudmFyIF9iaW5vbWlhbDMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9iaW5vbWlhbDIpO1xuXG52YXIgX2dlb21ldHJpYzIgPSByZXF1aXJlKCcuL2Rpc3RyaWJ1dGlvbnMvZ2VvbWV0cmljJyk7XG5cbnZhciBfZ2VvbWV0cmljMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dlb21ldHJpYzIpO1xuXG52YXIgX3BvaXNzb24yID0gcmVxdWlyZSgnLi9kaXN0cmlidXRpb25zL3BvaXNzb24nKTtcblxudmFyIF9wb2lzc29uMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BvaXNzb24yKTtcblxudmFyIF9leHBvbmVudGlhbDIgPSByZXF1aXJlKCcuL2Rpc3RyaWJ1dGlvbnMvZXhwb25lbnRpYWwnKTtcblxudmFyIF9leHBvbmVudGlhbDMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leHBvbmVudGlhbDIpO1xuXG52YXIgX2lyd2luSGFsbDIgPSByZXF1aXJlKCcuL2Rpc3RyaWJ1dGlvbnMvaXJ3aW4taGFsbCcpO1xuXG52YXIgX2lyd2luSGFsbDMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pcndpbkhhbGwyKTtcblxudmFyIF9iYXRlczIgPSByZXF1aXJlKCcuL2Rpc3RyaWJ1dGlvbnMvYmF0ZXMnKTtcblxudmFyIF9iYXRlczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9iYXRlczIpO1xuXG52YXIgX3BhcmV0bzIgPSByZXF1aXJlKCcuL2Rpc3RyaWJ1dGlvbnMvcGFyZXRvJyk7XG5cbnZhciBfcGFyZXRvMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BhcmV0bzIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5leHBvcnRzLlJORyA9IF9ybmcyLmRlZmF1bHQ7XG5leHBvcnRzLlJOR0ZhY3RvcnkgPSBfcm5nRmFjdG9yeTIuZGVmYXVsdDtcblxuLyoqXG4gKiBTZWVkYWJsZSByYW5kb20gbnVtYmVyIGdlbmVyYXRvciBzdXBwb3J0aW5nIG1hbnkgY29tbW9uIGRpc3RyaWJ1dGlvbnMuXG4gKlxuICogRGVmYXVsdHMgdG8gTWF0aC5yYW5kb20gYXMgaXRzIHVuZGVybHlpbmcgcHNldWRvcmFuZG9tIG51bWJlciBnZW5lcmF0b3IuXG4gKlxuICogQG5hbWUgUmFuZG9tXG4gKiBAY2xhc3NcbiAqXG4gKiBAcGFyYW0ge1JOR3xmdW5jdGlvbn0gW3JuZz1NYXRoLnJhbmRvbV0gLSBVbmRlcmx5aW5nIHBzZXVkb3JhbmRvbSBudW1iZXIgZ2VuZXJhdG9yLlxuICovXG5cbnZhciBSYW5kb20gPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFJhbmRvbShybmcpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUmFuZG9tKTtcblxuICAgIGlmIChybmcpICgwLCBfb3dMaXRlMi5kZWZhdWx0KShybmcsIF9vd0xpdGUyLmRlZmF1bHQub2JqZWN0Lmluc3RhbmNlT2YoX3JuZzIuZGVmYXVsdCkpO1xuXG4gICAgdGhpcy5fY2FjaGUgPSB7fTtcbiAgICB0aGlzLnVzZShybmcpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZW1iZXIge1JOR30gVW5kZXJseWluZyBwc2V1ZG8tcmFuZG9tIG51bWJlciBnZW5lcmF0b3JcbiAgICovXG5cblxuICBfY3JlYXRlQ2xhc3MoUmFuZG9tLCBbe1xuICAgIGtleTogJ2Nsb25lJyxcblxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIG5ldyBgUmFuZG9tYCBpbnN0YW5jZSwgb3B0aW9uYWxseSBzcGVjaWZ5aW5nIHBhcmFtZXRlcnMgdG9cbiAgICAgKiBzZXQgYSBuZXcgc2VlZC5cbiAgICAgKlxuICAgICAqIEBzZWUgUk5HLmNsb25lXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3NlZWRdIC0gT3B0aW9uYWwgc2VlZCBmb3IgbmV3IFJORy5cbiAgICAgKiBAcGFyYW0ge29iamVjdH0gW29wdHNdIC0gT3B0aW9uYWwgY29uZmlnIGZvciBuZXcgUk5HIG9wdGlvbnMuXG4gICAgICogQHJldHVybiB7UmFuZG9tfVxuICAgICAqL1xuICAgIHZhbHVlOiBmdW5jdGlvbiBjbG9uZSgpIHtcbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUmFuZG9tKF9ybmdGYWN0b3J5Mi5kZWZhdWx0LmFwcGx5KHVuZGVmaW5lZCwgYXJndW1lbnRzKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbmV3IFJhbmRvbSh0aGlzLnJuZy5jbG9uZSgpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSB1bmRlcmx5aW5nIHBzZXVkb3JhbmRvbSBudW1iZXIgZ2VuZXJhdG9yIHVzZWQgdmlhXG4gICAgICogZWl0aGVyIGFuIGluc3RhbmNlIG9mIGBzZWVkcmFuZG9tYCwgYSBjdXN0b20gaW5zdGFuY2Ugb2YgUk5HXG4gICAgICogKGZvciBQUk5HIHBsdWdpbnMpLCBvciBhIHN0cmluZyBzcGVjaWZ5aW5nIHRoZSBQUk5HIHRvIHVzZVxuICAgICAqIGFsb25nIHdpdGggYW4gb3B0aW9uYWwgYHNlZWRgIGFuZCBgb3B0c2AgdG8gaW5pdGlhbGl6ZSB0aGVcbiAgICAgKiBSTkcuXG4gICAgICpcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIGNvbnN0IHJhbmRvbSA9IHJlcXVpcmUoJ3JhbmRvbScpXG4gICAgICpcbiAgICAgKiByYW5kb20udXNlKCdleGFtcGxlX3NlZWRyYW5kb21fc3RyaW5nJylcbiAgICAgKiAvLyBvclxuICAgICAqIHJhbmRvbS51c2Uoc2VlZHJhbmRvbSgna2l0dGVucycpKVxuICAgICAqIC8vIG9yXG4gICAgICogcmFuZG9tLnVzZShNYXRoLnJhbmRvbSlcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Li4uKn0gYXJnc1xuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICd1c2UnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB1c2UoKSB7XG4gICAgICB0aGlzLl9ybmcgPSBfcm5nRmFjdG9yeTIuZGVmYXVsdC5hcHBseSh1bmRlZmluZWQsIGFyZ3VtZW50cyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGF0Y2hlcyBgTWF0aC5yYW5kb21gIHdpdGggdGhpcyBSYW5kb20gaW5zdGFuY2UncyBQUk5HLlxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdwYXRjaCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHBhdGNoKCkge1xuICAgICAgaWYgKHRoaXMuX3BhdGNoKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTWF0aC5yYW5kb20gYWxyZWFkeSBwYXRjaGVkJyk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3BhdGNoID0gTWF0aC5yYW5kb207XG4gICAgICBNYXRoLnJhbmRvbSA9IHRoaXMudW5pZm9ybSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlc3RvcmVzIGEgcHJldmlvdXNseSBwYXRjaGVkIGBNYXRoLnJhbmRvbWAgdG8gaXRzIG9yaWdpbmFsIHZhbHVlLlxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICd1bnBhdGNoJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdW5wYXRjaCgpIHtcbiAgICAgIGlmICh0aGlzLl9wYXRjaCkge1xuICAgICAgICBNYXRoLnJhbmRvbSA9IHRoaXMuX3BhdGNoO1xuICAgICAgICBkZWxldGUgdGhpcy5fcGF0Y2g7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBVbmlmb3JtIHV0aWxpdHkgZnVuY3Rpb25zXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIC8qKlxuICAgICAqIENvbnZlbmllbmNlIHdyYXBwZXIgYXJvdW5kIGB0aGlzLnJuZy5uZXh0KClgXG4gICAgICpcbiAgICAgKiBSZXR1cm5zIGEgZmxvYXRpbmcgcG9pbnQgbnVtYmVyIGluIFswLCAxKS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge251bWJlcn1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnbmV4dCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcm5nLm5leHQoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTYW1wbGVzIGEgdW5pZm9ybSByYW5kb20gZmxvYXRpbmcgcG9pbnQgbnVtYmVyLCBvcHRpb25hbGx5IHNwZWNpZnlpbmdcbiAgICAgKiBsb3dlciBhbmQgdXBwZXIgYm91bmRzLlxuICAgICAqXG4gICAgICogQ29udmVuY2Ugd3JhcHBlciBhcm91bmQgYHJhbmRvbS51bmlmb3JtKClgXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW21pbj0wXSAtIExvd2VyIGJvdW5kIChmbG9hdCwgaW5jbHVzaXZlKVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbbWF4PTFdIC0gVXBwZXIgYm91bmQgKGZsb2F0LCBleGNsdXNpdmUpXG4gICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdmbG9hdCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGZsb2F0KG1pbiwgbWF4KSB7XG4gICAgICByZXR1cm4gdGhpcy51bmlmb3JtKG1pbiwgbWF4KSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNhbXBsZXMgYSB1bmlmb3JtIHJhbmRvbSBpbnRlZ2VyLCBvcHRpb25hbGx5IHNwZWNpZnlpbmcgbG93ZXIgYW5kIHVwcGVyXG4gICAgICogYm91bmRzLlxuICAgICAqXG4gICAgICogQ29udmVuY2Ugd3JhcHBlciBhcm91bmQgYHJhbmRvbS51bmlmb3JtSW50KClgXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW21pbj0wXSAtIExvd2VyIGJvdW5kIChpbnRlZ2VyLCBpbmNsdXNpdmUpXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFttYXg9MV0gLSBVcHBlciBib3VuZCAoaW50ZWdlciwgaW5jbHVzaXZlKVxuICAgICAqIEByZXR1cm4ge251bWJlcn1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnaW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaW50KG1pbiwgbWF4KSB7XG4gICAgICByZXR1cm4gdGhpcy51bmlmb3JtSW50KG1pbiwgbWF4KSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNhbXBsZXMgYSB1bmlmb3JtIHJhbmRvbSBpbnRlZ2VyLCBvcHRpb25hbGx5IHNwZWNpZnlpbmcgbG93ZXIgYW5kIHVwcGVyXG4gICAgICogYm91bmRzLlxuICAgICAqXG4gICAgICogQ29udmVuY2Ugd3JhcHBlciBhcm91bmQgYHJhbmRvbS51bmlmb3JtSW50KClgXG4gICAgICpcbiAgICAgKiBAYWxpYXMgYHJhbmRvbS5pbnRgXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW21pbj0wXSAtIExvd2VyIGJvdW5kIChpbnRlZ2VyLCBpbmNsdXNpdmUpXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFttYXg9MV0gLSBVcHBlciBib3VuZCAoaW50ZWdlciwgaW5jbHVzaXZlKVxuICAgICAqIEByZXR1cm4ge251bWJlcn1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnaW50ZWdlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGludGVnZXIobWluLCBtYXgpIHtcbiAgICAgIHJldHVybiB0aGlzLnVuaWZvcm1JbnQobWluLCBtYXgpKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2FtcGxlcyBhIHVuaWZvcm0gcmFuZG9tIGJvb2xlYW4gdmFsdWUuXG4gICAgICpcbiAgICAgKiBDb252ZW5jZSB3cmFwcGVyIGFyb3VuZCBgcmFuZG9tLnVuaWZvcm1Cb29sZWFuKClgXG4gICAgICpcbiAgICAgKiBAYWxpYXMgYHJhbmRvbS5ib29sZWFuYFxuICAgICAqXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnYm9vbCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGJvb2woKSB7XG4gICAgICByZXR1cm4gdGhpcy51bmlmb3JtQm9vbGVhbigpKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2FtcGxlcyBhIHVuaWZvcm0gcmFuZG9tIGJvb2xlYW4gdmFsdWUuXG4gICAgICpcbiAgICAgKiBDb252ZW5jZSB3cmFwcGVyIGFyb3VuZCBgcmFuZG9tLnVuaWZvcm1Cb29sZWFuKClgXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdib29sZWFuJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gYm9vbGVhbigpIHtcbiAgICAgIHJldHVybiB0aGlzLnVuaWZvcm1Cb29sZWFuKCkoKTtcbiAgICB9XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIFVuaWZvcm0gZGlzdHJpYnV0aW9uc1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICAvKipcbiAgICAgKiBHZW5lcmF0ZXMgYSBbQ29udGludW91cyB1bmlmb3JtIGRpc3RyaWJ1dGlvbl0oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvVW5pZm9ybV9kaXN0cmlidXRpb25fKGNvbnRpbnVvdXMpKS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbbWluPTBdIC0gTG93ZXIgYm91bmQgKGZsb2F0LCBpbmNsdXNpdmUpXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFttYXg9MV0gLSBVcHBlciBib3VuZCAoZmxvYXQsIGV4Y2x1c2l2ZSlcbiAgICAgKiBAcmV0dXJuIHtmdW5jdGlvbn1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAndW5pZm9ybScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVuaWZvcm0obWluLCBtYXgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9tZW1vaXplKCd1bmlmb3JtJywgX3VuaWZvcm0zLmRlZmF1bHQsIG1pbiwgbWF4KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZW5lcmF0ZXMgYSBbRGlzY3JldGUgdW5pZm9ybSBkaXN0cmlidXRpb25dKGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0Rpc2NyZXRlX3VuaWZvcm1fZGlzdHJpYnV0aW9uKS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbbWluPTBdIC0gTG93ZXIgYm91bmQgKGludGVnZXIsIGluY2x1c2l2ZSlcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW21heD0xXSAtIFVwcGVyIGJvdW5kIChpbnRlZ2VyLCBpbmNsdXNpdmUpXG4gICAgICogQHJldHVybiB7ZnVuY3Rpb259XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ3VuaWZvcm1JbnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB1bmlmb3JtSW50KG1pbiwgbWF4KSB7XG4gICAgICByZXR1cm4gdGhpcy5fbWVtb2l6ZSgndW5pZm9ybUludCcsIF91bmlmb3JtSW50My5kZWZhdWx0LCBtaW4sIG1heCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2VuZXJhdGVzIGEgW0Rpc2NyZXRlIHVuaWZvcm0gZGlzdHJpYnV0aW9uXShodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9EaXNjcmV0ZV91bmlmb3JtX2Rpc3RyaWJ1dGlvbiksXG4gICAgICogd2l0aCB0d28gcG9zc2libGUgb3V0Y29tZXMsIGB0cnVlYCBvciBgZmFsc2UuXG4gICAgICpcbiAgICAgKiBUaGlzIG1ldGhvZCBpcyBhbmFsb2dvdXMgdG8gZmxpcHBpbmcgYSBjb2luLlxuICAgICAqXG4gICAgICogQHJldHVybiB7ZnVuY3Rpb259XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ3VuaWZvcm1Cb29sZWFuJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdW5pZm9ybUJvb2xlYW4oKSB7XG4gICAgICByZXR1cm4gdGhpcy5fbWVtb2l6ZSgndW5pZm9ybUJvb2xlYW4nLCBfdW5pZm9ybUJvb2xlYW4zLmRlZmF1bHQpO1xuICAgIH1cblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gTm9ybWFsIGRpc3RyaWJ1dGlvbnNcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgLyoqXG4gICAgICogR2VuZXJhdGVzIGEgW05vcm1hbCBkaXN0cmlidXRpb25dKGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL05vcm1hbF9kaXN0cmlidXRpb24pLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFttdT0wXSAtIE1lYW5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW3NpZ21hPTFdIC0gU3RhbmRhcmQgZGV2aWF0aW9uXG4gICAgICogQHJldHVybiB7ZnVuY3Rpb259XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ25vcm1hbCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG5vcm1hbChtdSwgc2lnbWEpIHtcbiAgICAgIHJldHVybiAoMCwgX25vcm1hbDMuZGVmYXVsdCkodGhpcywgbXUsIHNpZ21hKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZW5lcmF0ZXMgYSBbTG9nLW5vcm1hbCBkaXN0cmlidXRpb25dKGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0xvZy1ub3JtYWxfZGlzdHJpYnV0aW9uKS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbbXU9MF0gLSBNZWFuIG9mIHVuZGVybHlpbmcgbm9ybWFsIGRpc3RyaWJ1dGlvblxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbc2lnbWE9MV0gLSBTdGFuZGFyZCBkZXZpYXRpb24gb2YgdW5kZXJseWluZyBub3JtYWwgZGlzdHJpYnV0aW9uXG4gICAgICogQHJldHVybiB7ZnVuY3Rpb259XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ2xvZ05vcm1hbCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGxvZ05vcm1hbChtdSwgc2lnbWEpIHtcbiAgICAgIHJldHVybiAoMCwgX2xvZ05vcm1hbDMuZGVmYXVsdCkodGhpcywgbXUsIHNpZ21hKTtcbiAgICB9XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIEJlcm5vdWxsaSBkaXN0cmlidXRpb25zXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIC8qKlxuICAgICAqIEdlbmVyYXRlcyBhIFtCZXJub3VsbGkgZGlzdHJpYnV0aW9uXShodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9CZXJub3VsbGlfZGlzdHJpYnV0aW9uKS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbcD0wLjVdIC0gU3VjY2VzcyBwcm9iYWJpbGl0eSBvZiBlYWNoIHRyaWFsLlxuICAgICAqIEByZXR1cm4ge2Z1bmN0aW9ufVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdiZXJub3VsbGknLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBiZXJub3VsbGkocCkge1xuICAgICAgcmV0dXJuICgwLCBfYmVybm91bGxpMy5kZWZhdWx0KSh0aGlzLCBwKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZW5lcmF0ZXMgYSBbQmlub21pYWwgZGlzdHJpYnV0aW9uXShodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9CaW5vbWlhbF9kaXN0cmlidXRpb24pLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFtuPTFdIC0gTnVtYmVyIG9mIHRyaWFscy5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW3A9MC41XSAtIFN1Y2Nlc3MgcHJvYmFiaWxpdHkgb2YgZWFjaCB0cmlhbC5cbiAgICAgKiBAcmV0dXJuIHtmdW5jdGlvbn1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnYmlub21pYWwnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBiaW5vbWlhbChuLCBwKSB7XG4gICAgICByZXR1cm4gKDAsIF9iaW5vbWlhbDMuZGVmYXVsdCkodGhpcywgbiwgcCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2VuZXJhdGVzIGEgW0dlb21ldHJpYyBkaXN0cmlidXRpb25dKGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0dlb21ldHJpY19kaXN0cmlidXRpb24pLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFtwPTAuNV0gLSBTdWNjZXNzIHByb2JhYmlsaXR5IG9mIGVhY2ggdHJpYWwuXG4gICAgICogQHJldHVybiB7ZnVuY3Rpb259XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ2dlb21ldHJpYycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdlb21ldHJpYyhwKSB7XG4gICAgICByZXR1cm4gKDAsIF9nZW9tZXRyaWMzLmRlZmF1bHQpKHRoaXMsIHApO1xuICAgIH1cblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gUG9pc3NvbiBkaXN0cmlidXRpb25zXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIC8qKlxuICAgICAqIEdlbmVyYXRlcyBhIFtQb2lzc29uIGRpc3RyaWJ1dGlvbl0oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvUG9pc3Nvbl9kaXN0cmlidXRpb24pLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFtsYW1iZGE9MV0gLSBNZWFuIChsYW1iZGEgPiAwKVxuICAgICAqIEByZXR1cm4ge2Z1bmN0aW9ufVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdwb2lzc29uJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcG9pc3NvbihsYW1iZGEpIHtcbiAgICAgIHJldHVybiAoMCwgX3BvaXNzb24zLmRlZmF1bHQpKHRoaXMsIGxhbWJkYSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2VuZXJhdGVzIGFuIFtFeHBvbmVudGlhbCBkaXN0cmlidXRpb25dKGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0V4cG9uZW50aWFsX2Rpc3RyaWJ1dGlvbikuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW2xhbWJkYT0xXSAtIEludmVyc2UgbWVhbiAobGFtYmRhID4gMClcbiAgICAgKiBAcmV0dXJuIHtmdW5jdGlvbn1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnZXhwb25lbnRpYWwnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBleHBvbmVudGlhbChsYW1iZGEpIHtcbiAgICAgIHJldHVybiAoMCwgX2V4cG9uZW50aWFsMy5kZWZhdWx0KSh0aGlzLCBsYW1iZGEpO1xuICAgIH1cblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gTWlzYyBkaXN0cmlidXRpb25zXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIC8qKlxuICAgICAqIEdlbmVyYXRlcyBhbiBbSXJ3aW4gSGFsbCBkaXN0cmlidXRpb25dKGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lyd2luJUUyJTgwJTkzSGFsbF9kaXN0cmlidXRpb24pLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFtuPTFdIC0gTnVtYmVyIG9mIHVuaWZvcm0gc2FtcGxlcyB0byBzdW0gKG4gPj0gMClcbiAgICAgKiBAcmV0dXJuIHtmdW5jdGlvbn1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnaXJ3aW5IYWxsJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaXJ3aW5IYWxsKG4pIHtcbiAgICAgIHJldHVybiAoMCwgX2lyd2luSGFsbDMuZGVmYXVsdCkodGhpcywgbik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2VuZXJhdGVzIGEgW0JhdGVzIGRpc3RyaWJ1dGlvbl0oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQmF0ZXNfZGlzdHJpYnV0aW9uKS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbbj0xXSAtIE51bWJlciBvZiB1bmlmb3JtIHNhbXBsZXMgdG8gYXZlcmFnZSAobiA+PSAxKVxuICAgICAqIEByZXR1cm4ge2Z1bmN0aW9ufVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdiYXRlcycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGJhdGVzKG4pIHtcbiAgICAgIHJldHVybiAoMCwgX2JhdGVzMy5kZWZhdWx0KSh0aGlzLCBuKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZW5lcmF0ZXMgYSBbUGFyZXRvIGRpc3RyaWJ1dGlvbl0oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvUGFyZXRvX2Rpc3RyaWJ1dGlvbikuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW2FscGhhPTFdIC0gQWxwaGFcbiAgICAgKiBAcmV0dXJuIHtmdW5jdGlvbn1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAncGFyZXRvJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcGFyZXRvKGFscGhhKSB7XG4gICAgICByZXR1cm4gKDAsIF9wYXJldG8zLmRlZmF1bHQpKHRoaXMsIGFscGhhKTtcbiAgICB9XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIEludGVybmFsXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIC8qKlxuICAgICAqIE1lbW9pemVzIGRpc3RyaWJ1dGlvbnMgdG8gZW5zdXJlIHRoZXkncmUgb25seSBjcmVhdGVkIHdoZW4gbmVjZXNzYXJ5LlxuICAgICAqXG4gICAgICogUmV0dXJucyBhIHRodW5rIHdoaWNoIHRoYXQgcmV0dXJucyBpbmRlcGVuZGVudCwgaWRlbnRpY2FsbHkgZGlzdHJpYnV0ZWRcbiAgICAgKiBzYW1wbGVzIGZyb20gdGhlIHNwZWNpZmllZCBkaXN0cmlidXRpb24uXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGxhYmVsIC0gTmFtZSBvZiBkaXN0cmlidXRpb25cbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBnZXR0ZXIgLSBGdW5jdGlvbiB3aGljaCBnZW5lcmF0ZXMgYSBuZXcgZGlzdHJpYnV0aW9uXG4gICAgICogQHBhcmFtIHsuLi4qfSBhcmdzIC0gRGlzdHJpYnV0aW9uLXNwZWNpZmljIGFyZ3VtZW50c1xuICAgICAqXG4gICAgICogQHJldHVybiB7ZnVuY3Rpb259XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ19tZW1vaXplJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gX21lbW9pemUobGFiZWwsIGdldHRlcikge1xuICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuID4gMiA/IF9sZW4gLSAyIDogMCksIF9rZXkgPSAyOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgIGFyZ3NbX2tleSAtIDJdID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgfVxuXG4gICAgICB2YXIga2V5ID0gJycgKyBhcmdzLmpvaW4oJzsnKTtcbiAgICAgIHZhciB2YWx1ZSA9IHRoaXMuX2NhY2hlW2xhYmVsXTtcblxuICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUua2V5ICE9PSBrZXkpIHtcbiAgICAgICAgdmFsdWUgPSB7IGtleToga2V5LCBkaXN0cmlidXRpb246IGdldHRlci5hcHBseSh1bmRlZmluZWQsIFt0aGlzXS5jb25jYXQoYXJncykpIH07XG4gICAgICAgIHRoaXMuX2NhY2hlW2xhYmVsXSA9IHZhbHVlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdmFsdWUuZGlzdHJpYnV0aW9uO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JuZycsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcm5nO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBSYW5kb207XG59KCk7XG5cbi8vIGRlZmF1bHRzIHRvIE1hdGgucmFuZG9tIGFzIGl0cyBSTkdcblxuXG5leHBvcnRzLmRlZmF1bHQgPSBuZXcgUmFuZG9tKCk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yYW5kb20uanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbnZhciBfc2VlZHJhbmRvbSA9IHJlcXVpcmUoJ3NlZWRyYW5kb20nKTtcblxudmFyIF9zZWVkcmFuZG9tMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NlZWRyYW5kb20pO1xuXG52YXIgX3JuZyA9IHJlcXVpcmUoJy4vcm5nJyk7XG5cbnZhciBfcm5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JuZyk7XG5cbnZhciBfZnVuY3Rpb24gPSByZXF1aXJlKCcuL2dlbmVyYXRvcnMvZnVuY3Rpb24nKTtcblxudmFyIF9mdW5jdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9mdW5jdGlvbik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgeyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IEFycmF5KGFyci5sZW5ndGgpOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH0gZWxzZSB7IHJldHVybiBBcnJheS5mcm9tKGFycik7IH0gfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHZhciBfYXJncyQgPSBhcmdzWzBdLFxuICAgICAgYXJnMCA9IF9hcmdzJCA9PT0gdW5kZWZpbmVkID8gJ2RlZmF1bHQnIDogX2FyZ3MkLFxuICAgICAgcmVzdCA9IGFyZ3Muc2xpY2UoMSk7XG5cblxuICBzd2l0Y2ggKHR5cGVvZiBhcmcwID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihhcmcwKSkge1xuICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICBpZiAoYXJnMCBpbnN0YW5jZW9mIF9ybmcyLmRlZmF1bHQpIHtcbiAgICAgICAgcmV0dXJuIGFyZzA7XG4gICAgICB9XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ2Z1bmN0aW9uJzpcbiAgICAgIHJldHVybiBuZXcgX2Z1bmN0aW9uMi5kZWZhdWx0KGFyZzApO1xuXG4gICAgY2FzZSAnc3RyaW5nJzpcbiAgICBjYXNlICdudW1iZXInOlxuICAgICAgcmV0dXJuIG5ldyBfZnVuY3Rpb24yLmRlZmF1bHQoX3NlZWRyYW5kb20yLmRlZmF1bHQuYXBwbHkodW5kZWZpbmVkLCBfdG9Db25zdW1hYmxlQXJyYXkocmVzdCkpKTtcbiAgfVxuXG4gIHRocm93IG5ldyBFcnJvcignaW52YWxpZCBSTkcgXCInICsgYXJnMCArICdcIicpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJuZy1mYWN0b3J5LmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIFJORyA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gUk5HKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBSTkcpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFJORywgW3tcbiAgICBrZXk6ICduZXh0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUk5HLm5leHQgbXVzdCBiZSBvdmVycmlkZGVuJyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc2VlZCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNlZWQoX3NlZWQsIG9wdHMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUk5HLnNlZWQgbXVzdCBiZSBvdmVycmlkZGVuJyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY2xvbmUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjbG9uZShzZWVkLCBvcHRzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JORy5jbG9uZSBtdXN0IGJlIG92ZXJyaWRkZW4nKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdfc2VlZCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9zZWVkKHNlZWQsIG9wdHMpIHtcbiAgICAgIC8vIFRPRE86IGFkZCBlbnRyb3B5IGFuZCBzdHVmZlxuXG4gICAgICBpZiAoc2VlZCA9PT0gKHNlZWQgfCAwKSkge1xuICAgICAgICByZXR1cm4gc2VlZDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBzdHJTZWVkID0gJycgKyBzZWVkO1xuICAgICAgICB2YXIgcyA9IDA7XG5cbiAgICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCBzdHJTZWVkLmxlbmd0aDsgKytrKSB7XG4gICAgICAgICAgcyBePSBzdHJTZWVkLmNoYXJDb2RlQXQoaykgfCAwO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHM7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnbmFtZScsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JORy5uYW1lIG11c3QgYmUgb3ZlcnJpZGRlbicpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBSTkc7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFJORztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJuZy5qcy5tYXAiLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvcmFuZG9tJykuZGVmYXVsdFxuIiwiLy8gQSBsaWJyYXJ5IG9mIHNlZWRhYmxlIFJOR3MgaW1wbGVtZW50ZWQgaW4gSmF2YXNjcmlwdC5cbi8vXG4vLyBVc2FnZTpcbi8vXG4vLyB2YXIgc2VlZHJhbmRvbSA9IHJlcXVpcmUoJ3NlZWRyYW5kb20nKTtcbi8vIHZhciByYW5kb20gPSBzZWVkcmFuZG9tKDEpOyAvLyBvciBhbnkgc2VlZC5cbi8vIHZhciB4ID0gcmFuZG9tKCk7ICAgICAgIC8vIDAgPD0geCA8IDEuICBFdmVyeSBiaXQgaXMgcmFuZG9tLlxuLy8gdmFyIHggPSByYW5kb20ucXVpY2soKTsgLy8gMCA8PSB4IDwgMS4gIDMyIGJpdHMgb2YgcmFuZG9tbmVzcy5cblxuLy8gYWxlYSwgYSA1My1iaXQgbXVsdGlwbHktd2l0aC1jYXJyeSBnZW5lcmF0b3IgYnkgSm9oYW5uZXMgQmFhZ8O4ZS5cbi8vIFBlcmlvZDogfjJeMTE2XG4vLyBSZXBvcnRlZCB0byBwYXNzIGFsbCBCaWdDcnVzaCB0ZXN0cy5cbnZhciBhbGVhID0gcmVxdWlyZSgnLi9saWIvYWxlYScpO1xuXG4vLyB4b3IxMjgsIGEgcHVyZSB4b3Itc2hpZnQgZ2VuZXJhdG9yIGJ5IEdlb3JnZSBNYXJzYWdsaWEuXG4vLyBQZXJpb2Q6IDJeMTI4LTEuXG4vLyBSZXBvcnRlZCB0byBmYWlsOiBNYXRyaXhSYW5rIGFuZCBMaW5lYXJDb21wLlxudmFyIHhvcjEyOCA9IHJlcXVpcmUoJy4vbGliL3hvcjEyOCcpO1xuXG4vLyB4b3J3b3csIEdlb3JnZSBNYXJzYWdsaWEncyAxNjAtYml0IHhvci1zaGlmdCBjb21iaW5lZCBwbHVzIHdleWwuXG4vLyBQZXJpb2Q6IDJeMTkyLTJeMzJcbi8vIFJlcG9ydGVkIHRvIGZhaWw6IENvbGxpc2lvbk92ZXIsIFNpbXBQb2tlciwgYW5kIExpbmVhckNvbXAuXG52YXIgeG9yd293ID0gcmVxdWlyZSgnLi9saWIveG9yd293Jyk7XG5cbi8vIHhvcnNoaWZ0NywgYnkgRnJhbsOnb2lzIFBhbm5ldG9uIGFuZCBQaWVycmUgTCdlY3V5ZXIsIHRha2VzXG4vLyBhIGRpZmZlcmVudCBhcHByb2FjaDogaXQgYWRkcyByb2J1c3RuZXNzIGJ5IGFsbG93aW5nIG1vcmUgc2hpZnRzXG4vLyB0aGFuIE1hcnNhZ2xpYSdzIG9yaWdpbmFsIHRocmVlLiAgSXQgaXMgYSA3LXNoaWZ0IGdlbmVyYXRvclxuLy8gd2l0aCAyNTYgYml0cywgdGhhdCBwYXNzZXMgQmlnQ3J1c2ggd2l0aCBubyBzeXN0bWF0aWMgZmFpbHVyZXMuXG4vLyBQZXJpb2QgMl4yNTYtMS5cbi8vIE5vIHN5c3RlbWF0aWMgQmlnQ3J1c2ggZmFpbHVyZXMgcmVwb3J0ZWQuXG52YXIgeG9yc2hpZnQ3ID0gcmVxdWlyZSgnLi9saWIveG9yc2hpZnQ3Jyk7XG5cbi8vIHhvcjQwOTYsIGJ5IFJpY2hhcmQgQnJlbnQsIGlzIGEgNDA5Ni1iaXQgeG9yLXNoaWZ0IHdpdGggYVxuLy8gdmVyeSBsb25nIHBlcmlvZCB0aGF0IGFsc28gYWRkcyBhIFdleWwgZ2VuZXJhdG9yLiBJdCBhbHNvIHBhc3Nlc1xuLy8gQmlnQ3J1c2ggd2l0aCBubyBzeXN0ZW1hdGljIGZhaWx1cmVzLiAgSXRzIGxvbmcgcGVyaW9kIG1heVxuLy8gYmUgdXNlZnVsIGlmIHlvdSBoYXZlIG1hbnkgZ2VuZXJhdG9ycyBhbmQgbmVlZCB0byBhdm9pZFxuLy8gY29sbGlzaW9ucy5cbi8vIFBlcmlvZDogMl40MTI4LTJeMzIuXG4vLyBObyBzeXN0ZW1hdGljIEJpZ0NydXNoIGZhaWx1cmVzIHJlcG9ydGVkLlxudmFyIHhvcjQwOTYgPSByZXF1aXJlKCcuL2xpYi94b3I0MDk2Jyk7XG5cbi8vIFR5Y2hlLWksIGJ5IFNhbXVlbCBOZXZlcyBhbmQgRmlsaXBlIEFyYXVqbywgaXMgYSBiaXQtc2hpZnRpbmcgcmFuZG9tXG4vLyBudW1iZXIgZ2VuZXJhdG9yIGRlcml2ZWQgZnJvbSBDaGFDaGEsIGEgbW9kZXJuIHN0cmVhbSBjaXBoZXIuXG4vLyBodHRwczovL2VkZW4uZGVpLnVjLnB0L35zbmV2ZXMvcHVicy8yMDExLXNuZmEyLnBkZlxuLy8gUGVyaW9kOiB+Ml4xMjdcbi8vIE5vIHN5c3RlbWF0aWMgQmlnQ3J1c2ggZmFpbHVyZXMgcmVwb3J0ZWQuXG52YXIgdHljaGVpID0gcmVxdWlyZSgnLi9saWIvdHljaGVpJyk7XG5cbi8vIFRoZSBvcmlnaW5hbCBBUkM0LWJhc2VkIHBybmcgaW5jbHVkZWQgaW4gdGhpcyBsaWJyYXJ5LlxuLy8gUGVyaW9kOiB+Ml4xNjAwXG52YXIgc3IgPSByZXF1aXJlKCcuL3NlZWRyYW5kb20nKTtcblxuc3IuYWxlYSA9IGFsZWE7XG5zci54b3IxMjggPSB4b3IxMjg7XG5zci54b3J3b3cgPSB4b3J3b3c7XG5zci54b3JzaGlmdDcgPSB4b3JzaGlmdDc7XG5zci54b3I0MDk2ID0geG9yNDA5NjtcbnNyLnR5Y2hlaSA9IHR5Y2hlaTtcblxubW9kdWxlLmV4cG9ydHMgPSBzcjtcbiIsIi8vIEEgcG9ydCBvZiBhbiBhbGdvcml0aG0gYnkgSm9oYW5uZXMgQmFhZ8O4ZSA8YmFhZ29lQGJhYWdvZS5jb20+LCAyMDEwXG4vLyBodHRwOi8vYmFhZ29lLmNvbS9lbi9SYW5kb21NdXNpbmdzL2phdmFzY3JpcHQvXG4vLyBodHRwczovL2dpdGh1Yi5jb20vbnF1aW5sYW4vYmV0dGVyLXJhbmRvbS1udW1iZXJzLWZvci1qYXZhc2NyaXB0LW1pcnJvclxuLy8gT3JpZ2luYWwgd29yayBpcyB1bmRlciBNSVQgbGljZW5zZSAtXG5cbi8vIENvcHlyaWdodCAoQykgMjAxMCBieSBKb2hhbm5lcyBCYWFnw7hlIDxiYWFnb2VAYmFhZ29lLm9yZz5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vLyBcbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vIFxuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cblxuXG4oZnVuY3Rpb24oZ2xvYmFsLCBtb2R1bGUsIGRlZmluZSkge1xuXG5mdW5jdGlvbiBBbGVhKHNlZWQpIHtcbiAgdmFyIG1lID0gdGhpcywgbWFzaCA9IE1hc2goKTtcblxuICBtZS5uZXh0ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHQgPSAyMDkxNjM5ICogbWUuczAgKyBtZS5jICogMi4zMjgzMDY0MzY1Mzg2OTYzZS0xMDsgLy8gMl4tMzJcbiAgICBtZS5zMCA9IG1lLnMxO1xuICAgIG1lLnMxID0gbWUuczI7XG4gICAgcmV0dXJuIG1lLnMyID0gdCAtIChtZS5jID0gdCB8IDApO1xuICB9O1xuXG4gIC8vIEFwcGx5IHRoZSBzZWVkaW5nIGFsZ29yaXRobSBmcm9tIEJhYWdvZS5cbiAgbWUuYyA9IDE7XG4gIG1lLnMwID0gbWFzaCgnICcpO1xuICBtZS5zMSA9IG1hc2goJyAnKTtcbiAgbWUuczIgPSBtYXNoKCcgJyk7XG4gIG1lLnMwIC09IG1hc2goc2VlZCk7XG4gIGlmIChtZS5zMCA8IDApIHsgbWUuczAgKz0gMTsgfVxuICBtZS5zMSAtPSBtYXNoKHNlZWQpO1xuICBpZiAobWUuczEgPCAwKSB7IG1lLnMxICs9IDE7IH1cbiAgbWUuczIgLT0gbWFzaChzZWVkKTtcbiAgaWYgKG1lLnMyIDwgMCkgeyBtZS5zMiArPSAxOyB9XG4gIG1hc2ggPSBudWxsO1xufVxuXG5mdW5jdGlvbiBjb3B5KGYsIHQpIHtcbiAgdC5jID0gZi5jO1xuICB0LnMwID0gZi5zMDtcbiAgdC5zMSA9IGYuczE7XG4gIHQuczIgPSBmLnMyO1xuICByZXR1cm4gdDtcbn1cblxuZnVuY3Rpb24gaW1wbChzZWVkLCBvcHRzKSB7XG4gIHZhciB4ZyA9IG5ldyBBbGVhKHNlZWQpLFxuICAgICAgc3RhdGUgPSBvcHRzICYmIG9wdHMuc3RhdGUsXG4gICAgICBwcm5nID0geGcubmV4dDtcbiAgcHJuZy5pbnQzMiA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gKHhnLm5leHQoKSAqIDB4MTAwMDAwMDAwKSB8IDA7IH1cbiAgcHJuZy5kb3VibGUgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gcHJuZygpICsgKHBybmcoKSAqIDB4MjAwMDAwIHwgMCkgKiAxLjExMDIyMzAyNDYyNTE1NjVlLTE2OyAvLyAyXi01M1xuICB9O1xuICBwcm5nLnF1aWNrID0gcHJuZztcbiAgaWYgKHN0YXRlKSB7XG4gICAgaWYgKHR5cGVvZihzdGF0ZSkgPT0gJ29iamVjdCcpIGNvcHkoc3RhdGUsIHhnKTtcbiAgICBwcm5nLnN0YXRlID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb3B5KHhnLCB7fSk7IH1cbiAgfVxuICByZXR1cm4gcHJuZztcbn1cblxuZnVuY3Rpb24gTWFzaCgpIHtcbiAgdmFyIG4gPSAweGVmYzgyNDlkO1xuXG4gIHZhciBtYXNoID0gZnVuY3Rpb24oZGF0YSkge1xuICAgIGRhdGEgPSBkYXRhLnRvU3RyaW5nKCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICBuICs9IGRhdGEuY2hhckNvZGVBdChpKTtcbiAgICAgIHZhciBoID0gMC4wMjUxOTYwMzI4MjQxNjkzOCAqIG47XG4gICAgICBuID0gaCA+Pj4gMDtcbiAgICAgIGggLT0gbjtcbiAgICAgIGggKj0gbjtcbiAgICAgIG4gPSBoID4+PiAwO1xuICAgICAgaCAtPSBuO1xuICAgICAgbiArPSBoICogMHgxMDAwMDAwMDA7IC8vIDJeMzJcbiAgICB9XG4gICAgcmV0dXJuIChuID4+PiAwKSAqIDIuMzI4MzA2NDM2NTM4Njk2M2UtMTA7IC8vIDJeLTMyXG4gIH07XG5cbiAgcmV0dXJuIG1hc2g7XG59XG5cblxuaWYgKG1vZHVsZSAmJiBtb2R1bGUuZXhwb3J0cykge1xuICBtb2R1bGUuZXhwb3J0cyA9IGltcGw7XG59IGVsc2UgaWYgKGRlZmluZSAmJiBkZWZpbmUuYW1kKSB7XG4gIGRlZmluZShmdW5jdGlvbigpIHsgcmV0dXJuIGltcGw7IH0pO1xufSBlbHNlIHtcbiAgdGhpcy5hbGVhID0gaW1wbDtcbn1cblxufSkoXG4gIHRoaXMsXG4gICh0eXBlb2YgbW9kdWxlKSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUsICAgIC8vIHByZXNlbnQgaW4gbm9kZS5qc1xuICAodHlwZW9mIGRlZmluZSkgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUgICAvLyBwcmVzZW50IHdpdGggYW4gQU1EIGxvYWRlclxuKTtcblxuXG4iLCIvLyBBIEphdmFzY3JpcHQgaW1wbGVtZW50YWlvbiBvZiB0aGUgXCJUeWNoZS1pXCIgcHJuZyBhbGdvcml0aG0gYnlcbi8vIFNhbXVlbCBOZXZlcyBhbmQgRmlsaXBlIEFyYXVqby5cbi8vIFNlZSBodHRwczovL2VkZW4uZGVpLnVjLnB0L35zbmV2ZXMvcHVicy8yMDExLXNuZmEyLnBkZlxuXG4oZnVuY3Rpb24oZ2xvYmFsLCBtb2R1bGUsIGRlZmluZSkge1xuXG5mdW5jdGlvbiBYb3JHZW4oc2VlZCkge1xuICB2YXIgbWUgPSB0aGlzLCBzdHJzZWVkID0gJyc7XG5cbiAgLy8gU2V0IHVwIGdlbmVyYXRvciBmdW5jdGlvbi5cbiAgbWUubmV4dCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBiID0gbWUuYiwgYyA9IG1lLmMsIGQgPSBtZS5kLCBhID0gbWUuYTtcbiAgICBiID0gKGIgPDwgMjUpIF4gKGIgPj4+IDcpIF4gYztcbiAgICBjID0gKGMgLSBkKSB8IDA7XG4gICAgZCA9IChkIDw8IDI0KSBeIChkID4+PiA4KSBeIGE7XG4gICAgYSA9IChhIC0gYikgfCAwO1xuICAgIG1lLmIgPSBiID0gKGIgPDwgMjApIF4gKGIgPj4+IDEyKSBeIGM7XG4gICAgbWUuYyA9IGMgPSAoYyAtIGQpIHwgMDtcbiAgICBtZS5kID0gKGQgPDwgMTYpIF4gKGMgPj4+IDE2KSBeIGE7XG4gICAgcmV0dXJuIG1lLmEgPSAoYSAtIGIpIHwgMDtcbiAgfTtcblxuICAvKiBUaGUgZm9sbG93aW5nIGlzIG5vbi1pbnZlcnRlZCB0eWNoZSwgd2hpY2ggaGFzIGJldHRlciBpbnRlcm5hbFxuICAgKiBiaXQgZGlmZnVzaW9uLCBidXQgd2hpY2ggaXMgYWJvdXQgMjUlIHNsb3dlciB0aGFuIHR5Y2hlLWkgaW4gSlMuXG4gIG1lLm5leHQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgYSA9IG1lLmEsIGIgPSBtZS5iLCBjID0gbWUuYywgZCA9IG1lLmQ7XG4gICAgYSA9IChtZS5hICsgbWUuYiB8IDApID4+PiAwO1xuICAgIGQgPSBtZS5kIF4gYTsgZCA9IGQgPDwgMTYgXiBkID4+PiAxNjtcbiAgICBjID0gbWUuYyArIGQgfCAwO1xuICAgIGIgPSBtZS5iIF4gYzsgYiA9IGIgPDwgMTIgXiBkID4+PiAyMDtcbiAgICBtZS5hID0gYSA9IGEgKyBiIHwgMDtcbiAgICBkID0gZCBeIGE7IG1lLmQgPSBkID0gZCA8PCA4IF4gZCA+Pj4gMjQ7XG4gICAgbWUuYyA9IGMgPSBjICsgZCB8IDA7XG4gICAgYiA9IGIgXiBjO1xuICAgIHJldHVybiBtZS5iID0gKGIgPDwgNyBeIGIgPj4+IDI1KTtcbiAgfVxuICAqL1xuXG4gIG1lLmEgPSAwO1xuICBtZS5iID0gMDtcbiAgbWUuYyA9IDI2NTQ0MzU3NjkgfCAwO1xuICBtZS5kID0gMTM2NzEzMDU1MTtcblxuICBpZiAoc2VlZCA9PT0gTWF0aC5mbG9vcihzZWVkKSkge1xuICAgIC8vIEludGVnZXIgc2VlZC5cbiAgICBtZS5hID0gKHNlZWQgLyAweDEwMDAwMDAwMCkgfCAwO1xuICAgIG1lLmIgPSBzZWVkIHwgMDtcbiAgfSBlbHNlIHtcbiAgICAvLyBTdHJpbmcgc2VlZC5cbiAgICBzdHJzZWVkICs9IHNlZWQ7XG4gIH1cblxuICAvLyBNaXggaW4gc3RyaW5nIHNlZWQsIHRoZW4gZGlzY2FyZCBhbiBpbml0aWFsIGJhdGNoIG9mIDY0IHZhbHVlcy5cbiAgZm9yICh2YXIgayA9IDA7IGsgPCBzdHJzZWVkLmxlbmd0aCArIDIwOyBrKyspIHtcbiAgICBtZS5iIF49IHN0cnNlZWQuY2hhckNvZGVBdChrKSB8IDA7XG4gICAgbWUubmV4dCgpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNvcHkoZiwgdCkge1xuICB0LmEgPSBmLmE7XG4gIHQuYiA9IGYuYjtcbiAgdC5jID0gZi5jO1xuICB0LmQgPSBmLmQ7XG4gIHJldHVybiB0O1xufTtcblxuZnVuY3Rpb24gaW1wbChzZWVkLCBvcHRzKSB7XG4gIHZhciB4ZyA9IG5ldyBYb3JHZW4oc2VlZCksXG4gICAgICBzdGF0ZSA9IG9wdHMgJiYgb3B0cy5zdGF0ZSxcbiAgICAgIHBybmcgPSBmdW5jdGlvbigpIHsgcmV0dXJuICh4Zy5uZXh0KCkgPj4+IDApIC8gMHgxMDAwMDAwMDA7IH07XG4gIHBybmcuZG91YmxlID0gZnVuY3Rpb24oKSB7XG4gICAgZG8ge1xuICAgICAgdmFyIHRvcCA9IHhnLm5leHQoKSA+Pj4gMTEsXG4gICAgICAgICAgYm90ID0gKHhnLm5leHQoKSA+Pj4gMCkgLyAweDEwMDAwMDAwMCxcbiAgICAgICAgICByZXN1bHQgPSAodG9wICsgYm90KSAvICgxIDw8IDIxKTtcbiAgICB9IHdoaWxlIChyZXN1bHQgPT09IDApO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG4gIHBybmcuaW50MzIgPSB4Zy5uZXh0O1xuICBwcm5nLnF1aWNrID0gcHJuZztcbiAgaWYgKHN0YXRlKSB7XG4gICAgaWYgKHR5cGVvZihzdGF0ZSkgPT0gJ29iamVjdCcpIGNvcHkoc3RhdGUsIHhnKTtcbiAgICBwcm5nLnN0YXRlID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb3B5KHhnLCB7fSk7IH1cbiAgfVxuICByZXR1cm4gcHJuZztcbn1cblxuaWYgKG1vZHVsZSAmJiBtb2R1bGUuZXhwb3J0cykge1xuICBtb2R1bGUuZXhwb3J0cyA9IGltcGw7XG59IGVsc2UgaWYgKGRlZmluZSAmJiBkZWZpbmUuYW1kKSB7XG4gIGRlZmluZShmdW5jdGlvbigpIHsgcmV0dXJuIGltcGw7IH0pO1xufSBlbHNlIHtcbiAgdGhpcy50eWNoZWkgPSBpbXBsO1xufVxuXG59KShcbiAgdGhpcyxcbiAgKHR5cGVvZiBtb2R1bGUpID09ICdvYmplY3QnICYmIG1vZHVsZSwgICAgLy8gcHJlc2VudCBpbiBub2RlLmpzXG4gICh0eXBlb2YgZGVmaW5lKSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZSAgIC8vIHByZXNlbnQgd2l0aCBhbiBBTUQgbG9hZGVyXG4pO1xuXG5cbiIsIi8vIEEgSmF2YXNjcmlwdCBpbXBsZW1lbnRhaW9uIG9mIHRoZSBcInhvcjEyOFwiIHBybmcgYWxnb3JpdGhtIGJ5XG4vLyBHZW9yZ2UgTWFyc2FnbGlhLiAgU2VlIGh0dHA6Ly93d3cuanN0YXRzb2Z0Lm9yZy92MDgvaTE0L3BhcGVyXG5cbihmdW5jdGlvbihnbG9iYWwsIG1vZHVsZSwgZGVmaW5lKSB7XG5cbmZ1bmN0aW9uIFhvckdlbihzZWVkKSB7XG4gIHZhciBtZSA9IHRoaXMsIHN0cnNlZWQgPSAnJztcblxuICBtZS54ID0gMDtcbiAgbWUueSA9IDA7XG4gIG1lLnogPSAwO1xuICBtZS53ID0gMDtcblxuICAvLyBTZXQgdXAgZ2VuZXJhdG9yIGZ1bmN0aW9uLlxuICBtZS5uZXh0ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHQgPSBtZS54IF4gKG1lLnggPDwgMTEpO1xuICAgIG1lLnggPSBtZS55O1xuICAgIG1lLnkgPSBtZS56O1xuICAgIG1lLnogPSBtZS53O1xuICAgIHJldHVybiBtZS53IF49IChtZS53ID4+PiAxOSkgXiB0IF4gKHQgPj4+IDgpO1xuICB9O1xuXG4gIGlmIChzZWVkID09PSAoc2VlZCB8IDApKSB7XG4gICAgLy8gSW50ZWdlciBzZWVkLlxuICAgIG1lLnggPSBzZWVkO1xuICB9IGVsc2Uge1xuICAgIC8vIFN0cmluZyBzZWVkLlxuICAgIHN0cnNlZWQgKz0gc2VlZDtcbiAgfVxuXG4gIC8vIE1peCBpbiBzdHJpbmcgc2VlZCwgdGhlbiBkaXNjYXJkIGFuIGluaXRpYWwgYmF0Y2ggb2YgNjQgdmFsdWVzLlxuICBmb3IgKHZhciBrID0gMDsgayA8IHN0cnNlZWQubGVuZ3RoICsgNjQ7IGsrKykge1xuICAgIG1lLnggXj0gc3Ryc2VlZC5jaGFyQ29kZUF0KGspIHwgMDtcbiAgICBtZS5uZXh0KCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY29weShmLCB0KSB7XG4gIHQueCA9IGYueDtcbiAgdC55ID0gZi55O1xuICB0LnogPSBmLno7XG4gIHQudyA9IGYudztcbiAgcmV0dXJuIHQ7XG59XG5cbmZ1bmN0aW9uIGltcGwoc2VlZCwgb3B0cykge1xuICB2YXIgeGcgPSBuZXcgWG9yR2VuKHNlZWQpLFxuICAgICAgc3RhdGUgPSBvcHRzICYmIG9wdHMuc3RhdGUsXG4gICAgICBwcm5nID0gZnVuY3Rpb24oKSB7IHJldHVybiAoeGcubmV4dCgpID4+PiAwKSAvIDB4MTAwMDAwMDAwOyB9O1xuICBwcm5nLmRvdWJsZSA9IGZ1bmN0aW9uKCkge1xuICAgIGRvIHtcbiAgICAgIHZhciB0b3AgPSB4Zy5uZXh0KCkgPj4+IDExLFxuICAgICAgICAgIGJvdCA9ICh4Zy5uZXh0KCkgPj4+IDApIC8gMHgxMDAwMDAwMDAsXG4gICAgICAgICAgcmVzdWx0ID0gKHRvcCArIGJvdCkgLyAoMSA8PCAyMSk7XG4gICAgfSB3aGlsZSAocmVzdWx0ID09PSAwKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuICBwcm5nLmludDMyID0geGcubmV4dDtcbiAgcHJuZy5xdWljayA9IHBybmc7XG4gIGlmIChzdGF0ZSkge1xuICAgIGlmICh0eXBlb2Yoc3RhdGUpID09ICdvYmplY3QnKSBjb3B5KHN0YXRlLCB4Zyk7XG4gICAgcHJuZy5zdGF0ZSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29weSh4Zywge30pOyB9XG4gIH1cbiAgcmV0dXJuIHBybmc7XG59XG5cbmlmIChtb2R1bGUgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBpbXBsO1xufSBlbHNlIGlmIChkZWZpbmUgJiYgZGVmaW5lLmFtZCkge1xuICBkZWZpbmUoZnVuY3Rpb24oKSB7IHJldHVybiBpbXBsOyB9KTtcbn0gZWxzZSB7XG4gIHRoaXMueG9yMTI4ID0gaW1wbDtcbn1cblxufSkoXG4gIHRoaXMsXG4gICh0eXBlb2YgbW9kdWxlKSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUsICAgIC8vIHByZXNlbnQgaW4gbm9kZS5qc1xuICAodHlwZW9mIGRlZmluZSkgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUgICAvLyBwcmVzZW50IHdpdGggYW4gQU1EIGxvYWRlclxuKTtcblxuXG4iLCIvLyBBIEphdmFzY3JpcHQgaW1wbGVtZW50YWlvbiBvZiBSaWNoYXJkIEJyZW50J3MgWG9yZ2VucyB4b3I0MDk2IGFsZ29yaXRobS5cbi8vXG4vLyBUaGlzIGZhc3Qgbm9uLWNyeXB0b2dyYXBoaWMgcmFuZG9tIG51bWJlciBnZW5lcmF0b3IgaXMgZGVzaWduZWQgZm9yXG4vLyB1c2UgaW4gTW9udGUtQ2FybG8gYWxnb3JpdGhtcy4gSXQgY29tYmluZXMgYSBsb25nLXBlcmlvZCB4b3JzaGlmdFxuLy8gZ2VuZXJhdG9yIHdpdGggYSBXZXlsIGdlbmVyYXRvciwgYW5kIGl0IHBhc3NlcyBhbGwgY29tbW9uIGJhdHRlcmllc1xuLy8gb2Ygc3Rhc3RpY2lhbCB0ZXN0cyBmb3IgcmFuZG9tbmVzcyB3aGlsZSBjb25zdW1pbmcgb25seSBhIGZldyBuYW5vc2Vjb25kc1xuLy8gZm9yIGVhY2ggcHJuZyBnZW5lcmF0ZWQuICBGb3IgYmFja2dyb3VuZCBvbiB0aGUgZ2VuZXJhdG9yLCBzZWUgQnJlbnQnc1xuLy8gcGFwZXI6IFwiU29tZSBsb25nLXBlcmlvZCByYW5kb20gbnVtYmVyIGdlbmVyYXRvcnMgdXNpbmcgc2hpZnRzIGFuZCB4b3JzLlwiXG4vLyBodHRwOi8vYXJ4aXYub3JnL3BkZi8xMDA0LjMxMTV2MS5wZGZcbi8vXG4vLyBVc2FnZTpcbi8vXG4vLyB2YXIgeG9yNDA5NiA9IHJlcXVpcmUoJ3hvcjQwOTYnKTtcbi8vIHJhbmRvbSA9IHhvcjQwOTYoMSk7ICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2VlZCB3aXRoIGludDMyIG9yIHN0cmluZy5cbi8vIGFzc2VydC5lcXVhbChyYW5kb20oKSwgMC4xNTIwNDM2NDUwNTM4NTQ3KTsgLy8gKDAsIDEpIHJhbmdlLCA1MyBiaXRzLlxuLy8gYXNzZXJ0LmVxdWFsKHJhbmRvbS5pbnQzMigpLCAxODA2NTM0ODk3KTsgICAvLyBzaWduZWQgaW50MzIsIDMyIGJpdHMuXG4vL1xuLy8gRm9yIG5vbnplcm8gbnVtZXJpYyBrZXlzLCB0aGlzIGltcGVsZW1lbnRhdGlvbiBwcm92aWRlcyBhIHNlcXVlbmNlXG4vLyBpZGVudGljYWwgdG8gdGhhdCBieSBCcmVudCdzIHhvcmdlbnMgMyBpbXBsZW1lbnRhaW9uIGluIEMuICBUaGlzXG4vLyBpbXBsZW1lbnRhdGlvbiBhbHNvIHByb3ZpZGVzIGZvciBpbml0YWxpemluZyB0aGUgZ2VuZXJhdG9yIHdpdGhcbi8vIHN0cmluZyBzZWVkcywgb3IgZm9yIHNhdmluZyBhbmQgcmVzdG9yaW5nIHRoZSBzdGF0ZSBvZiB0aGUgZ2VuZXJhdG9yLlxuLy9cbi8vIE9uIENocm9tZSwgdGhpcyBwcm5nIGJlbmNobWFya3MgYWJvdXQgMi4xIHRpbWVzIHNsb3dlciB0aGFuXG4vLyBKYXZhc2NyaXB0J3MgYnVpbHQtaW4gTWF0aC5yYW5kb20oKS5cblxuKGZ1bmN0aW9uKGdsb2JhbCwgbW9kdWxlLCBkZWZpbmUpIHtcblxuZnVuY3Rpb24gWG9yR2VuKHNlZWQpIHtcbiAgdmFyIG1lID0gdGhpcztcblxuICAvLyBTZXQgdXAgZ2VuZXJhdG9yIGZ1bmN0aW9uLlxuICBtZS5uZXh0ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHcgPSBtZS53LFxuICAgICAgICBYID0gbWUuWCwgaSA9IG1lLmksIHQsIHY7XG4gICAgLy8gVXBkYXRlIFdleWwgZ2VuZXJhdG9yLlxuICAgIG1lLncgPSB3ID0gKHcgKyAweDYxYzg4NjQ3KSB8IDA7XG4gICAgLy8gVXBkYXRlIHhvciBnZW5lcmF0b3IuXG4gICAgdiA9IFhbKGkgKyAzNCkgJiAxMjddO1xuICAgIHQgPSBYW2kgPSAoKGkgKyAxKSAmIDEyNyldO1xuICAgIHYgXj0gdiA8PCAxMztcbiAgICB0IF49IHQgPDwgMTc7XG4gICAgdiBePSB2ID4+PiAxNTtcbiAgICB0IF49IHQgPj4+IDEyO1xuICAgIC8vIFVwZGF0ZSBYb3IgZ2VuZXJhdG9yIGFycmF5IHN0YXRlLlxuICAgIHYgPSBYW2ldID0gdiBeIHQ7XG4gICAgbWUuaSA9IGk7XG4gICAgLy8gUmVzdWx0IGlzIHRoZSBjb21iaW5hdGlvbi5cbiAgICByZXR1cm4gKHYgKyAodyBeICh3ID4+PiAxNikpKSB8IDA7XG4gIH07XG5cbiAgZnVuY3Rpb24gaW5pdChtZSwgc2VlZCkge1xuICAgIHZhciB0LCB2LCBpLCBqLCB3LCBYID0gW10sIGxpbWl0ID0gMTI4O1xuICAgIGlmIChzZWVkID09PSAoc2VlZCB8IDApKSB7XG4gICAgICAvLyBOdW1lcmljIHNlZWRzIGluaXRpYWxpemUgdiwgd2hpY2ggaXMgdXNlZCB0byBnZW5lcmF0ZXMgWC5cbiAgICAgIHYgPSBzZWVkO1xuICAgICAgc2VlZCA9IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFN0cmluZyBzZWVkcyBhcmUgbWl4ZWQgaW50byB2IGFuZCBYIG9uZSBjaGFyYWN0ZXIgYXQgYSB0aW1lLlxuICAgICAgc2VlZCA9IHNlZWQgKyAnXFwwJztcbiAgICAgIHYgPSAwO1xuICAgICAgbGltaXQgPSBNYXRoLm1heChsaW1pdCwgc2VlZC5sZW5ndGgpO1xuICAgIH1cbiAgICAvLyBJbml0aWFsaXplIGNpcmN1bGFyIGFycmF5IGFuZCB3ZXlsIHZhbHVlLlxuICAgIGZvciAoaSA9IDAsIGogPSAtMzI7IGogPCBsaW1pdDsgKytqKSB7XG4gICAgICAvLyBQdXQgdGhlIHVuaWNvZGUgY2hhcmFjdGVycyBpbnRvIHRoZSBhcnJheSwgYW5kIHNodWZmbGUgdGhlbS5cbiAgICAgIGlmIChzZWVkKSB2IF49IHNlZWQuY2hhckNvZGVBdCgoaiArIDMyKSAlIHNlZWQubGVuZ3RoKTtcbiAgICAgIC8vIEFmdGVyIDMyIHNodWZmbGVzLCB0YWtlIHYgYXMgdGhlIHN0YXJ0aW5nIHcgdmFsdWUuXG4gICAgICBpZiAoaiA9PT0gMCkgdyA9IHY7XG4gICAgICB2IF49IHYgPDwgMTA7XG4gICAgICB2IF49IHYgPj4+IDE1O1xuICAgICAgdiBePSB2IDw8IDQ7XG4gICAgICB2IF49IHYgPj4+IDEzO1xuICAgICAgaWYgKGogPj0gMCkge1xuICAgICAgICB3ID0gKHcgKyAweDYxYzg4NjQ3KSB8IDA7ICAgICAvLyBXZXlsLlxuICAgICAgICB0ID0gKFhbaiAmIDEyN10gXj0gKHYgKyB3KSk7ICAvLyBDb21iaW5lIHhvciBhbmQgd2V5bCB0byBpbml0IGFycmF5LlxuICAgICAgICBpID0gKDAgPT0gdCkgPyBpICsgMSA6IDA7ICAgICAvLyBDb3VudCB6ZXJvZXMuXG4gICAgICB9XG4gICAgfVxuICAgIC8vIFdlIGhhdmUgZGV0ZWN0ZWQgYWxsIHplcm9lczsgbWFrZSB0aGUga2V5IG5vbnplcm8uXG4gICAgaWYgKGkgPj0gMTI4KSB7XG4gICAgICBYWyhzZWVkICYmIHNlZWQubGVuZ3RoIHx8IDApICYgMTI3XSA9IC0xO1xuICAgIH1cbiAgICAvLyBSdW4gdGhlIGdlbmVyYXRvciA1MTIgdGltZXMgdG8gZnVydGhlciBtaXggdGhlIHN0YXRlIGJlZm9yZSB1c2luZyBpdC5cbiAgICAvLyBGYWN0b3JpbmcgdGhpcyBhcyBhIGZ1bmN0aW9uIHNsb3dzIHRoZSBtYWluIGdlbmVyYXRvciwgc28gaXQgaXMganVzdFxuICAgIC8vIHVucm9sbGVkIGhlcmUuICBUaGUgd2V5bCBnZW5lcmF0b3IgaXMgbm90IGFkdmFuY2VkIHdoaWxlIHdhcm1pbmcgdXAuXG4gICAgaSA9IDEyNztcbiAgICBmb3IgKGogPSA0ICogMTI4OyBqID4gMDsgLS1qKSB7XG4gICAgICB2ID0gWFsoaSArIDM0KSAmIDEyN107XG4gICAgICB0ID0gWFtpID0gKChpICsgMSkgJiAxMjcpXTtcbiAgICAgIHYgXj0gdiA8PCAxMztcbiAgICAgIHQgXj0gdCA8PCAxNztcbiAgICAgIHYgXj0gdiA+Pj4gMTU7XG4gICAgICB0IF49IHQgPj4+IDEyO1xuICAgICAgWFtpXSA9IHYgXiB0O1xuICAgIH1cbiAgICAvLyBTdG9yaW5nIHN0YXRlIGFzIG9iamVjdCBtZW1iZXJzIGlzIGZhc3RlciB0aGFuIHVzaW5nIGNsb3N1cmUgdmFyaWFibGVzLlxuICAgIG1lLncgPSB3O1xuICAgIG1lLlggPSBYO1xuICAgIG1lLmkgPSBpO1xuICB9XG5cbiAgaW5pdChtZSwgc2VlZCk7XG59XG5cbmZ1bmN0aW9uIGNvcHkoZiwgdCkge1xuICB0LmkgPSBmLmk7XG4gIHQudyA9IGYudztcbiAgdC5YID0gZi5YLnNsaWNlKCk7XG4gIHJldHVybiB0O1xufTtcblxuZnVuY3Rpb24gaW1wbChzZWVkLCBvcHRzKSB7XG4gIGlmIChzZWVkID09IG51bGwpIHNlZWQgPSArKG5ldyBEYXRlKTtcbiAgdmFyIHhnID0gbmV3IFhvckdlbihzZWVkKSxcbiAgICAgIHN0YXRlID0gb3B0cyAmJiBvcHRzLnN0YXRlLFxuICAgICAgcHJuZyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gKHhnLm5leHQoKSA+Pj4gMCkgLyAweDEwMDAwMDAwMDsgfTtcbiAgcHJuZy5kb3VibGUgPSBmdW5jdGlvbigpIHtcbiAgICBkbyB7XG4gICAgICB2YXIgdG9wID0geGcubmV4dCgpID4+PiAxMSxcbiAgICAgICAgICBib3QgPSAoeGcubmV4dCgpID4+PiAwKSAvIDB4MTAwMDAwMDAwLFxuICAgICAgICAgIHJlc3VsdCA9ICh0b3AgKyBib3QpIC8gKDEgPDwgMjEpO1xuICAgIH0gd2hpbGUgKHJlc3VsdCA9PT0gMCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbiAgcHJuZy5pbnQzMiA9IHhnLm5leHQ7XG4gIHBybmcucXVpY2sgPSBwcm5nO1xuICBpZiAoc3RhdGUpIHtcbiAgICBpZiAoc3RhdGUuWCkgY29weShzdGF0ZSwgeGcpO1xuICAgIHBybmcuc3RhdGUgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvcHkoeGcsIHt9KTsgfVxuICB9XG4gIHJldHVybiBwcm5nO1xufVxuXG5pZiAobW9kdWxlICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gaW1wbDtcbn0gZWxzZSBpZiAoZGVmaW5lICYmIGRlZmluZS5hbWQpIHtcbiAgZGVmaW5lKGZ1bmN0aW9uKCkgeyByZXR1cm4gaW1wbDsgfSk7XG59IGVsc2Uge1xuICB0aGlzLnhvcjQwOTYgPSBpbXBsO1xufVxuXG59KShcbiAgdGhpcywgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2luZG93IG9iamVjdCBvciBnbG9iYWxcbiAgKHR5cGVvZiBtb2R1bGUpID09ICdvYmplY3QnICYmIG1vZHVsZSwgICAgLy8gcHJlc2VudCBpbiBub2RlLmpzXG4gICh0eXBlb2YgZGVmaW5lKSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZSAgIC8vIHByZXNlbnQgd2l0aCBhbiBBTUQgbG9hZGVyXG4pO1xuIiwiLy8gQSBKYXZhc2NyaXB0IGltcGxlbWVudGFpb24gb2YgdGhlIFwieG9yc2hpZnQ3XCIgYWxnb3JpdGhtIGJ5XG4vLyBGcmFuw6dvaXMgUGFubmV0b24gYW5kIFBpZXJyZSBMJ2VjdXllcjpcbi8vIFwiT24gdGhlIFhvcmdzaGlmdCBSYW5kb20gTnVtYmVyIEdlbmVyYXRvcnNcIlxuLy8gaHR0cDovL3NhbHVjLmVuZ3IudWNvbm4uZWR1L3JlZnMvY3J5cHRvL3JuZy9wYW5uZXRvbjA1b250aGV4b3JzaGlmdC5wZGZcblxuKGZ1bmN0aW9uKGdsb2JhbCwgbW9kdWxlLCBkZWZpbmUpIHtcblxuZnVuY3Rpb24gWG9yR2VuKHNlZWQpIHtcbiAgdmFyIG1lID0gdGhpcztcblxuICAvLyBTZXQgdXAgZ2VuZXJhdG9yIGZ1bmN0aW9uLlxuICBtZS5uZXh0ID0gZnVuY3Rpb24oKSB7XG4gICAgLy8gVXBkYXRlIHhvciBnZW5lcmF0b3IuXG4gICAgdmFyIFggPSBtZS54LCBpID0gbWUuaSwgdCwgdiwgdztcbiAgICB0ID0gWFtpXTsgdCBePSAodCA+Pj4gNyk7IHYgPSB0IF4gKHQgPDwgMjQpO1xuICAgIHQgPSBYWyhpICsgMSkgJiA3XTsgdiBePSB0IF4gKHQgPj4+IDEwKTtcbiAgICB0ID0gWFsoaSArIDMpICYgN107IHYgXj0gdCBeICh0ID4+PiAzKTtcbiAgICB0ID0gWFsoaSArIDQpICYgN107IHYgXj0gdCBeICh0IDw8IDcpO1xuICAgIHQgPSBYWyhpICsgNykgJiA3XTsgdCA9IHQgXiAodCA8PCAxMyk7IHYgXj0gdCBeICh0IDw8IDkpO1xuICAgIFhbaV0gPSB2O1xuICAgIG1lLmkgPSAoaSArIDEpICYgNztcbiAgICByZXR1cm4gdjtcbiAgfTtcblxuICBmdW5jdGlvbiBpbml0KG1lLCBzZWVkKSB7XG4gICAgdmFyIGosIHcsIFggPSBbXTtcblxuICAgIGlmIChzZWVkID09PSAoc2VlZCB8IDApKSB7XG4gICAgICAvLyBTZWVkIHN0YXRlIGFycmF5IHVzaW5nIGEgMzItYml0IGludGVnZXIuXG4gICAgICB3ID0gWFswXSA9IHNlZWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFNlZWQgc3RhdGUgdXNpbmcgYSBzdHJpbmcuXG4gICAgICBzZWVkID0gJycgKyBzZWVkO1xuICAgICAgZm9yIChqID0gMDsgaiA8IHNlZWQubGVuZ3RoOyArK2opIHtcbiAgICAgICAgWFtqICYgN10gPSAoWFtqICYgN10gPDwgMTUpIF5cbiAgICAgICAgICAgIChzZWVkLmNoYXJDb2RlQXQoaikgKyBYWyhqICsgMSkgJiA3XSA8PCAxMyk7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIEVuZm9yY2UgYW4gYXJyYXkgbGVuZ3RoIG9mIDgsIG5vdCBhbGwgemVyb2VzLlxuICAgIHdoaWxlIChYLmxlbmd0aCA8IDgpIFgucHVzaCgwKTtcbiAgICBmb3IgKGogPSAwOyBqIDwgOCAmJiBYW2pdID09PSAwOyArK2opO1xuICAgIGlmIChqID09IDgpIHcgPSBYWzddID0gLTE7IGVsc2UgdyA9IFhbal07XG5cbiAgICBtZS54ID0gWDtcbiAgICBtZS5pID0gMDtcblxuICAgIC8vIERpc2NhcmQgYW4gaW5pdGlhbCAyNTYgdmFsdWVzLlxuICAgIGZvciAoaiA9IDI1NjsgaiA+IDA7IC0taikge1xuICAgICAgbWUubmV4dCgpO1xuICAgIH1cbiAgfVxuXG4gIGluaXQobWUsIHNlZWQpO1xufVxuXG5mdW5jdGlvbiBjb3B5KGYsIHQpIHtcbiAgdC54ID0gZi54LnNsaWNlKCk7XG4gIHQuaSA9IGYuaTtcbiAgcmV0dXJuIHQ7XG59XG5cbmZ1bmN0aW9uIGltcGwoc2VlZCwgb3B0cykge1xuICBpZiAoc2VlZCA9PSBudWxsKSBzZWVkID0gKyhuZXcgRGF0ZSk7XG4gIHZhciB4ZyA9IG5ldyBYb3JHZW4oc2VlZCksXG4gICAgICBzdGF0ZSA9IG9wdHMgJiYgb3B0cy5zdGF0ZSxcbiAgICAgIHBybmcgPSBmdW5jdGlvbigpIHsgcmV0dXJuICh4Zy5uZXh0KCkgPj4+IDApIC8gMHgxMDAwMDAwMDA7IH07XG4gIHBybmcuZG91YmxlID0gZnVuY3Rpb24oKSB7XG4gICAgZG8ge1xuICAgICAgdmFyIHRvcCA9IHhnLm5leHQoKSA+Pj4gMTEsXG4gICAgICAgICAgYm90ID0gKHhnLm5leHQoKSA+Pj4gMCkgLyAweDEwMDAwMDAwMCxcbiAgICAgICAgICByZXN1bHQgPSAodG9wICsgYm90KSAvICgxIDw8IDIxKTtcbiAgICB9IHdoaWxlIChyZXN1bHQgPT09IDApO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG4gIHBybmcuaW50MzIgPSB4Zy5uZXh0O1xuICBwcm5nLnF1aWNrID0gcHJuZztcbiAgaWYgKHN0YXRlKSB7XG4gICAgaWYgKHN0YXRlLngpIGNvcHkoc3RhdGUsIHhnKTtcbiAgICBwcm5nLnN0YXRlID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb3B5KHhnLCB7fSk7IH1cbiAgfVxuICByZXR1cm4gcHJuZztcbn1cblxuaWYgKG1vZHVsZSAmJiBtb2R1bGUuZXhwb3J0cykge1xuICBtb2R1bGUuZXhwb3J0cyA9IGltcGw7XG59IGVsc2UgaWYgKGRlZmluZSAmJiBkZWZpbmUuYW1kKSB7XG4gIGRlZmluZShmdW5jdGlvbigpIHsgcmV0dXJuIGltcGw7IH0pO1xufSBlbHNlIHtcbiAgdGhpcy54b3JzaGlmdDcgPSBpbXBsO1xufVxuXG59KShcbiAgdGhpcyxcbiAgKHR5cGVvZiBtb2R1bGUpID09ICdvYmplY3QnICYmIG1vZHVsZSwgICAgLy8gcHJlc2VudCBpbiBub2RlLmpzXG4gICh0eXBlb2YgZGVmaW5lKSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZSAgIC8vIHByZXNlbnQgd2l0aCBhbiBBTUQgbG9hZGVyXG4pO1xuXG4iLCIvLyBBIEphdmFzY3JpcHQgaW1wbGVtZW50YWlvbiBvZiB0aGUgXCJ4b3J3b3dcIiBwcm5nIGFsZ29yaXRobSBieVxuLy8gR2VvcmdlIE1hcnNhZ2xpYS4gIFNlZSBodHRwOi8vd3d3LmpzdGF0c29mdC5vcmcvdjA4L2kxNC9wYXBlclxuXG4oZnVuY3Rpb24oZ2xvYmFsLCBtb2R1bGUsIGRlZmluZSkge1xuXG5mdW5jdGlvbiBYb3JHZW4oc2VlZCkge1xuICB2YXIgbWUgPSB0aGlzLCBzdHJzZWVkID0gJyc7XG5cbiAgLy8gU2V0IHVwIGdlbmVyYXRvciBmdW5jdGlvbi5cbiAgbWUubmV4dCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciB0ID0gKG1lLnggXiAobWUueCA+Pj4gMikpO1xuICAgIG1lLnggPSBtZS55OyBtZS55ID0gbWUuejsgbWUueiA9IG1lLnc7IG1lLncgPSBtZS52O1xuICAgIHJldHVybiAobWUuZCA9IChtZS5kICsgMzYyNDM3IHwgMCkpICtcbiAgICAgICAobWUudiA9IChtZS52IF4gKG1lLnYgPDwgNCkpIF4gKHQgXiAodCA8PCAxKSkpIHwgMDtcbiAgfTtcblxuICBtZS54ID0gMDtcbiAgbWUueSA9IDA7XG4gIG1lLnogPSAwO1xuICBtZS53ID0gMDtcbiAgbWUudiA9IDA7XG5cbiAgaWYgKHNlZWQgPT09IChzZWVkIHwgMCkpIHtcbiAgICAvLyBJbnRlZ2VyIHNlZWQuXG4gICAgbWUueCA9IHNlZWQ7XG4gIH0gZWxzZSB7XG4gICAgLy8gU3RyaW5nIHNlZWQuXG4gICAgc3Ryc2VlZCArPSBzZWVkO1xuICB9XG5cbiAgLy8gTWl4IGluIHN0cmluZyBzZWVkLCB0aGVuIGRpc2NhcmQgYW4gaW5pdGlhbCBiYXRjaCBvZiA2NCB2YWx1ZXMuXG4gIGZvciAodmFyIGsgPSAwOyBrIDwgc3Ryc2VlZC5sZW5ndGggKyA2NDsgaysrKSB7XG4gICAgbWUueCBePSBzdHJzZWVkLmNoYXJDb2RlQXQoaykgfCAwO1xuICAgIGlmIChrID09IHN0cnNlZWQubGVuZ3RoKSB7XG4gICAgICBtZS5kID0gbWUueCA8PCAxMCBeIG1lLnggPj4+IDQ7XG4gICAgfVxuICAgIG1lLm5leHQoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjb3B5KGYsIHQpIHtcbiAgdC54ID0gZi54O1xuICB0LnkgPSBmLnk7XG4gIHQueiA9IGYuejtcbiAgdC53ID0gZi53O1xuICB0LnYgPSBmLnY7XG4gIHQuZCA9IGYuZDtcbiAgcmV0dXJuIHQ7XG59XG5cbmZ1bmN0aW9uIGltcGwoc2VlZCwgb3B0cykge1xuICB2YXIgeGcgPSBuZXcgWG9yR2VuKHNlZWQpLFxuICAgICAgc3RhdGUgPSBvcHRzICYmIG9wdHMuc3RhdGUsXG4gICAgICBwcm5nID0gZnVuY3Rpb24oKSB7IHJldHVybiAoeGcubmV4dCgpID4+PiAwKSAvIDB4MTAwMDAwMDAwOyB9O1xuICBwcm5nLmRvdWJsZSA9IGZ1bmN0aW9uKCkge1xuICAgIGRvIHtcbiAgICAgIHZhciB0b3AgPSB4Zy5uZXh0KCkgPj4+IDExLFxuICAgICAgICAgIGJvdCA9ICh4Zy5uZXh0KCkgPj4+IDApIC8gMHgxMDAwMDAwMDAsXG4gICAgICAgICAgcmVzdWx0ID0gKHRvcCArIGJvdCkgLyAoMSA8PCAyMSk7XG4gICAgfSB3aGlsZSAocmVzdWx0ID09PSAwKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuICBwcm5nLmludDMyID0geGcubmV4dDtcbiAgcHJuZy5xdWljayA9IHBybmc7XG4gIGlmIChzdGF0ZSkge1xuICAgIGlmICh0eXBlb2Yoc3RhdGUpID09ICdvYmplY3QnKSBjb3B5KHN0YXRlLCB4Zyk7XG4gICAgcHJuZy5zdGF0ZSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29weSh4Zywge30pOyB9XG4gIH1cbiAgcmV0dXJuIHBybmc7XG59XG5cbmlmIChtb2R1bGUgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBpbXBsO1xufSBlbHNlIGlmIChkZWZpbmUgJiYgZGVmaW5lLmFtZCkge1xuICBkZWZpbmUoZnVuY3Rpb24oKSB7IHJldHVybiBpbXBsOyB9KTtcbn0gZWxzZSB7XG4gIHRoaXMueG9yd293ID0gaW1wbDtcbn1cblxufSkoXG4gIHRoaXMsXG4gICh0eXBlb2YgbW9kdWxlKSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUsICAgIC8vIHByZXNlbnQgaW4gbm9kZS5qc1xuICAodHlwZW9mIGRlZmluZSkgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUgICAvLyBwcmVzZW50IHdpdGggYW4gQU1EIGxvYWRlclxuKTtcblxuXG4iLCIvKlxuQ29weXJpZ2h0IDIwMTQgRGF2aWQgQmF1LlxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmdcbmEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG53aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG5kaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG9cbnBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0b1xudGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZVxuaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsXG5FWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbk1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC5cbklOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZXG5DTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULFxuVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEVcblNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG4qL1xuXG4oZnVuY3Rpb24gKHBvb2wsIG1hdGgpIHtcbi8vXG4vLyBUaGUgZm9sbG93aW5nIGNvbnN0YW50cyBhcmUgcmVsYXRlZCB0byBJRUVFIDc1NCBsaW1pdHMuXG4vL1xuXG4vLyBEZXRlY3QgdGhlIGdsb2JhbCBvYmplY3QsIGV2ZW4gaWYgb3BlcmF0aW5nIGluIHN0cmljdCBtb2RlLlxuLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMTQzODcwNTcvMjY1Mjk4XG52YXIgZ2xvYmFsID0gKDAsIGV2YWwpKCd0aGlzJyksXG4gICAgd2lkdGggPSAyNTYsICAgICAgICAvLyBlYWNoIFJDNCBvdXRwdXQgaXMgMCA8PSB4IDwgMjU2XG4gICAgY2h1bmtzID0gNiwgICAgICAgICAvLyBhdCBsZWFzdCBzaXggUkM0IG91dHB1dHMgZm9yIGVhY2ggZG91YmxlXG4gICAgZGlnaXRzID0gNTIsICAgICAgICAvLyB0aGVyZSBhcmUgNTIgc2lnbmlmaWNhbnQgZGlnaXRzIGluIGEgZG91YmxlXG4gICAgcm5nbmFtZSA9ICdyYW5kb20nLCAvLyBybmduYW1lOiBuYW1lIGZvciBNYXRoLnJhbmRvbSBhbmQgTWF0aC5zZWVkcmFuZG9tXG4gICAgc3RhcnRkZW5vbSA9IG1hdGgucG93KHdpZHRoLCBjaHVua3MpLFxuICAgIHNpZ25pZmljYW5jZSA9IG1hdGgucG93KDIsIGRpZ2l0cyksXG4gICAgb3ZlcmZsb3cgPSBzaWduaWZpY2FuY2UgKiAyLFxuICAgIG1hc2sgPSB3aWR0aCAtIDEsXG4gICAgbm9kZWNyeXB0bzsgICAgICAgICAvLyBub2RlLmpzIGNyeXB0byBtb2R1bGUsIGluaXRpYWxpemVkIGF0IHRoZSBib3R0b20uXG5cbi8vXG4vLyBzZWVkcmFuZG9tKClcbi8vIFRoaXMgaXMgdGhlIHNlZWRyYW5kb20gZnVuY3Rpb24gZGVzY3JpYmVkIGFib3ZlLlxuLy9cbmZ1bmN0aW9uIHNlZWRyYW5kb20oc2VlZCwgb3B0aW9ucywgY2FsbGJhY2spIHtcbiAgdmFyIGtleSA9IFtdO1xuICBvcHRpb25zID0gKG9wdGlvbnMgPT0gdHJ1ZSkgPyB7IGVudHJvcHk6IHRydWUgfSA6IChvcHRpb25zIHx8IHt9KTtcblxuICAvLyBGbGF0dGVuIHRoZSBzZWVkIHN0cmluZyBvciBidWlsZCBvbmUgZnJvbSBsb2NhbCBlbnRyb3B5IGlmIG5lZWRlZC5cbiAgdmFyIHNob3J0c2VlZCA9IG1peGtleShmbGF0dGVuKFxuICAgIG9wdGlvbnMuZW50cm9weSA/IFtzZWVkLCB0b3N0cmluZyhwb29sKV0gOlxuICAgIChzZWVkID09IG51bGwpID8gYXV0b3NlZWQoKSA6IHNlZWQsIDMpLCBrZXkpO1xuXG4gIC8vIFVzZSB0aGUgc2VlZCB0byBpbml0aWFsaXplIGFuIEFSQzQgZ2VuZXJhdG9yLlxuICB2YXIgYXJjNCA9IG5ldyBBUkM0KGtleSk7XG5cbiAgLy8gVGhpcyBmdW5jdGlvbiByZXR1cm5zIGEgcmFuZG9tIGRvdWJsZSBpbiBbMCwgMSkgdGhhdCBjb250YWluc1xuICAvLyByYW5kb21uZXNzIGluIGV2ZXJ5IGJpdCBvZiB0aGUgbWFudGlzc2Egb2YgdGhlIElFRUUgNzU0IHZhbHVlLlxuICB2YXIgcHJuZyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBuID0gYXJjNC5nKGNodW5rcyksICAgICAgICAgICAgIC8vIFN0YXJ0IHdpdGggYSBudW1lcmF0b3IgbiA8IDIgXiA0OFxuICAgICAgICBkID0gc3RhcnRkZW5vbSwgICAgICAgICAgICAgICAgIC8vICAgYW5kIGRlbm9taW5hdG9yIGQgPSAyIF4gNDguXG4gICAgICAgIHggPSAwOyAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICBhbmQgbm8gJ2V4dHJhIGxhc3QgYnl0ZScuXG4gICAgd2hpbGUgKG4gPCBzaWduaWZpY2FuY2UpIHsgICAgICAgICAgLy8gRmlsbCB1cCBhbGwgc2lnbmlmaWNhbnQgZGlnaXRzIGJ5XG4gICAgICBuID0gKG4gKyB4KSAqIHdpZHRoOyAgICAgICAgICAgICAgLy8gICBzaGlmdGluZyBudW1lcmF0b3IgYW5kXG4gICAgICBkICo9IHdpZHRoOyAgICAgICAgICAgICAgICAgICAgICAgLy8gICBkZW5vbWluYXRvciBhbmQgZ2VuZXJhdGluZyBhXG4gICAgICB4ID0gYXJjNC5nKDEpOyAgICAgICAgICAgICAgICAgICAgLy8gICBuZXcgbGVhc3Qtc2lnbmlmaWNhbnQtYnl0ZS5cbiAgICB9XG4gICAgd2hpbGUgKG4gPj0gb3ZlcmZsb3cpIHsgICAgICAgICAgICAgLy8gVG8gYXZvaWQgcm91bmRpbmcgdXAsIGJlZm9yZSBhZGRpbmdcbiAgICAgIG4gLz0gMjsgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgIGxhc3QgYnl0ZSwgc2hpZnQgZXZlcnl0aGluZ1xuICAgICAgZCAvPSAyOyAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgcmlnaHQgdXNpbmcgaW50ZWdlciBtYXRoIHVudGlsXG4gICAgICB4ID4+Pj0gMTsgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICB3ZSBoYXZlIGV4YWN0bHkgdGhlIGRlc2lyZWQgYml0cy5cbiAgICB9XG4gICAgcmV0dXJuIChuICsgeCkgLyBkOyAgICAgICAgICAgICAgICAgLy8gRm9ybSB0aGUgbnVtYmVyIHdpdGhpbiBbMCwgMSkuXG4gIH07XG5cbiAgcHJuZy5pbnQzMiA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJjNC5nKDQpIHwgMDsgfVxuICBwcm5nLnF1aWNrID0gZnVuY3Rpb24oKSB7IHJldHVybiBhcmM0LmcoNCkgLyAweDEwMDAwMDAwMDsgfVxuICBwcm5nLmRvdWJsZSA9IHBybmc7XG5cbiAgLy8gTWl4IHRoZSByYW5kb21uZXNzIGludG8gYWNjdW11bGF0ZWQgZW50cm9weS5cbiAgbWl4a2V5KHRvc3RyaW5nKGFyYzQuUyksIHBvb2wpO1xuXG4gIC8vIENhbGxpbmcgY29udmVudGlvbjogd2hhdCB0byByZXR1cm4gYXMgYSBmdW5jdGlvbiBvZiBwcm5nLCBzZWVkLCBpc19tYXRoLlxuICByZXR1cm4gKG9wdGlvbnMucGFzcyB8fCBjYWxsYmFjayB8fFxuICAgICAgZnVuY3Rpb24ocHJuZywgc2VlZCwgaXNfbWF0aF9jYWxsLCBzdGF0ZSkge1xuICAgICAgICBpZiAoc3RhdGUpIHtcbiAgICAgICAgICAvLyBMb2FkIHRoZSBhcmM0IHN0YXRlIGZyb20gdGhlIGdpdmVuIHN0YXRlIGlmIGl0IGhhcyBhbiBTIGFycmF5LlxuICAgICAgICAgIGlmIChzdGF0ZS5TKSB7IGNvcHkoc3RhdGUsIGFyYzQpOyB9XG4gICAgICAgICAgLy8gT25seSBwcm92aWRlIHRoZSAuc3RhdGUgbWV0aG9kIGlmIHJlcXVlc3RlZCB2aWEgb3B0aW9ucy5zdGF0ZS5cbiAgICAgICAgICBwcm5nLnN0YXRlID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb3B5KGFyYzQsIHt9KTsgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgY2FsbGVkIGFzIGEgbWV0aG9kIG9mIE1hdGggKE1hdGguc2VlZHJhbmRvbSgpKSwgbXV0YXRlXG4gICAgICAgIC8vIE1hdGgucmFuZG9tIGJlY2F1c2UgdGhhdCBpcyBob3cgc2VlZHJhbmRvbS5qcyBoYXMgd29ya2VkIHNpbmNlIHYxLjAuXG4gICAgICAgIGlmIChpc19tYXRoX2NhbGwpIHsgbWF0aFtybmduYW1lXSA9IHBybmc7IHJldHVybiBzZWVkOyB9XG5cbiAgICAgICAgLy8gT3RoZXJ3aXNlLCBpdCBpcyBhIG5ld2VyIGNhbGxpbmcgY29udmVudGlvbiwgc28gcmV0dXJuIHRoZVxuICAgICAgICAvLyBwcm5nIGRpcmVjdGx5LlxuICAgICAgICBlbHNlIHJldHVybiBwcm5nO1xuICAgICAgfSkoXG4gIHBybmcsXG4gIHNob3J0c2VlZCxcbiAgJ2dsb2JhbCcgaW4gb3B0aW9ucyA/IG9wdGlvbnMuZ2xvYmFsIDogKHRoaXMgPT0gbWF0aCksXG4gIG9wdGlvbnMuc3RhdGUpO1xufVxubWF0aFsnc2VlZCcgKyBybmduYW1lXSA9IHNlZWRyYW5kb207XG5cbi8vXG4vLyBBUkM0XG4vL1xuLy8gQW4gQVJDNCBpbXBsZW1lbnRhdGlvbi4gIFRoZSBjb25zdHJ1Y3RvciB0YWtlcyBhIGtleSBpbiB0aGUgZm9ybSBvZlxuLy8gYW4gYXJyYXkgb2YgYXQgbW9zdCAod2lkdGgpIGludGVnZXJzIHRoYXQgc2hvdWxkIGJlIDAgPD0geCA8ICh3aWR0aCkuXG4vL1xuLy8gVGhlIGcoY291bnQpIG1ldGhvZCByZXR1cm5zIGEgcHNldWRvcmFuZG9tIGludGVnZXIgdGhhdCBjb25jYXRlbmF0ZXNcbi8vIHRoZSBuZXh0IChjb3VudCkgb3V0cHV0cyBmcm9tIEFSQzQuICBJdHMgcmV0dXJuIHZhbHVlIGlzIGEgbnVtYmVyIHhcbi8vIHRoYXQgaXMgaW4gdGhlIHJhbmdlIDAgPD0geCA8ICh3aWR0aCBeIGNvdW50KS5cbi8vXG5mdW5jdGlvbiBBUkM0KGtleSkge1xuICB2YXIgdCwga2V5bGVuID0ga2V5Lmxlbmd0aCxcbiAgICAgIG1lID0gdGhpcywgaSA9IDAsIGogPSBtZS5pID0gbWUuaiA9IDAsIHMgPSBtZS5TID0gW107XG5cbiAgLy8gVGhlIGVtcHR5IGtleSBbXSBpcyB0cmVhdGVkIGFzIFswXS5cbiAgaWYgKCFrZXlsZW4pIHsga2V5ID0gW2tleWxlbisrXTsgfVxuXG4gIC8vIFNldCB1cCBTIHVzaW5nIHRoZSBzdGFuZGFyZCBrZXkgc2NoZWR1bGluZyBhbGdvcml0aG0uXG4gIHdoaWxlIChpIDwgd2lkdGgpIHtcbiAgICBzW2ldID0gaSsrO1xuICB9XG4gIGZvciAoaSA9IDA7IGkgPCB3aWR0aDsgaSsrKSB7XG4gICAgc1tpXSA9IHNbaiA9IG1hc2sgJiAoaiArIGtleVtpICUga2V5bGVuXSArICh0ID0gc1tpXSkpXTtcbiAgICBzW2pdID0gdDtcbiAgfVxuXG4gIC8vIFRoZSBcImdcIiBtZXRob2QgcmV0dXJucyB0aGUgbmV4dCAoY291bnQpIG91dHB1dHMgYXMgb25lIG51bWJlci5cbiAgKG1lLmcgPSBmdW5jdGlvbihjb3VudCkge1xuICAgIC8vIFVzaW5nIGluc3RhbmNlIG1lbWJlcnMgaW5zdGVhZCBvZiBjbG9zdXJlIHN0YXRlIG5lYXJseSBkb3VibGVzIHNwZWVkLlxuICAgIHZhciB0LCByID0gMCxcbiAgICAgICAgaSA9IG1lLmksIGogPSBtZS5qLCBzID0gbWUuUztcbiAgICB3aGlsZSAoY291bnQtLSkge1xuICAgICAgdCA9IHNbaSA9IG1hc2sgJiAoaSArIDEpXTtcbiAgICAgIHIgPSByICogd2lkdGggKyBzW21hc2sgJiAoKHNbaV0gPSBzW2ogPSBtYXNrICYgKGogKyB0KV0pICsgKHNbal0gPSB0KSldO1xuICAgIH1cbiAgICBtZS5pID0gaTsgbWUuaiA9IGo7XG4gICAgcmV0dXJuIHI7XG4gICAgLy8gRm9yIHJvYnVzdCB1bnByZWRpY3RhYmlsaXR5LCB0aGUgZnVuY3Rpb24gY2FsbCBiZWxvdyBhdXRvbWF0aWNhbGx5XG4gICAgLy8gZGlzY2FyZHMgYW4gaW5pdGlhbCBiYXRjaCBvZiB2YWx1ZXMuICBUaGlzIGlzIGNhbGxlZCBSQzQtZHJvcFsyNTZdLlxuICAgIC8vIFNlZSBodHRwOi8vZ29vZ2xlLmNvbS9zZWFyY2g/cT1yc2ErZmx1aHJlcityZXNwb25zZSZidG5JXG4gIH0pKHdpZHRoKTtcbn1cblxuLy9cbi8vIGNvcHkoKVxuLy8gQ29waWVzIGludGVybmFsIHN0YXRlIG9mIEFSQzQgdG8gb3IgZnJvbSBhIHBsYWluIG9iamVjdC5cbi8vXG5mdW5jdGlvbiBjb3B5KGYsIHQpIHtcbiAgdC5pID0gZi5pO1xuICB0LmogPSBmLmo7XG4gIHQuUyA9IGYuUy5zbGljZSgpO1xuICByZXR1cm4gdDtcbn07XG5cbi8vXG4vLyBmbGF0dGVuKClcbi8vIENvbnZlcnRzIGFuIG9iamVjdCB0cmVlIHRvIG5lc3RlZCBhcnJheXMgb2Ygc3RyaW5ncy5cbi8vXG5mdW5jdGlvbiBmbGF0dGVuKG9iaiwgZGVwdGgpIHtcbiAgdmFyIHJlc3VsdCA9IFtdLCB0eXAgPSAodHlwZW9mIG9iaiksIHByb3A7XG4gIGlmIChkZXB0aCAmJiB0eXAgPT0gJ29iamVjdCcpIHtcbiAgICBmb3IgKHByb3AgaW4gb2JqKSB7XG4gICAgICB0cnkgeyByZXN1bHQucHVzaChmbGF0dGVuKG9ialtwcm9wXSwgZGVwdGggLSAxKSk7IH0gY2F0Y2ggKGUpIHt9XG4gICAgfVxuICB9XG4gIHJldHVybiAocmVzdWx0Lmxlbmd0aCA/IHJlc3VsdCA6IHR5cCA9PSAnc3RyaW5nJyA/IG9iaiA6IG9iaiArICdcXDAnKTtcbn1cblxuLy9cbi8vIG1peGtleSgpXG4vLyBNaXhlcyBhIHN0cmluZyBzZWVkIGludG8gYSBrZXkgdGhhdCBpcyBhbiBhcnJheSBvZiBpbnRlZ2VycywgYW5kXG4vLyByZXR1cm5zIGEgc2hvcnRlbmVkIHN0cmluZyBzZWVkIHRoYXQgaXMgZXF1aXZhbGVudCB0byB0aGUgcmVzdWx0IGtleS5cbi8vXG5mdW5jdGlvbiBtaXhrZXkoc2VlZCwga2V5KSB7XG4gIHZhciBzdHJpbmdzZWVkID0gc2VlZCArICcnLCBzbWVhciwgaiA9IDA7XG4gIHdoaWxlIChqIDwgc3RyaW5nc2VlZC5sZW5ndGgpIHtcbiAgICBrZXlbbWFzayAmIGpdID1cbiAgICAgIG1hc2sgJiAoKHNtZWFyIF49IGtleVttYXNrICYgal0gKiAxOSkgKyBzdHJpbmdzZWVkLmNoYXJDb2RlQXQoaisrKSk7XG4gIH1cbiAgcmV0dXJuIHRvc3RyaW5nKGtleSk7XG59XG5cbi8vXG4vLyBhdXRvc2VlZCgpXG4vLyBSZXR1cm5zIGFuIG9iamVjdCBmb3IgYXV0b3NlZWRpbmcsIHVzaW5nIHdpbmRvdy5jcnlwdG8gYW5kIE5vZGUgY3J5cHRvXG4vLyBtb2R1bGUgaWYgYXZhaWxhYmxlLlxuLy9cbmZ1bmN0aW9uIGF1dG9zZWVkKCkge1xuICB0cnkge1xuICAgIHZhciBvdXQ7XG4gICAgaWYgKG5vZGVjcnlwdG8gJiYgKG91dCA9IG5vZGVjcnlwdG8ucmFuZG9tQnl0ZXMpKSB7XG4gICAgICAvLyBUaGUgdXNlIG9mICdvdXQnIHRvIHJlbWVtYmVyIHJhbmRvbUJ5dGVzIG1ha2VzIHRpZ2h0IG1pbmlmaWVkIGNvZGUuXG4gICAgICBvdXQgPSBvdXQod2lkdGgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvdXQgPSBuZXcgVWludDhBcnJheSh3aWR0aCk7XG4gICAgICAoZ2xvYmFsLmNyeXB0byB8fCBnbG9iYWwubXNDcnlwdG8pLmdldFJhbmRvbVZhbHVlcyhvdXQpO1xuICAgIH1cbiAgICByZXR1cm4gdG9zdHJpbmcob3V0KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHZhciBicm93c2VyID0gZ2xvYmFsLm5hdmlnYXRvcixcbiAgICAgICAgcGx1Z2lucyA9IGJyb3dzZXIgJiYgYnJvd3Nlci5wbHVnaW5zO1xuICAgIHJldHVybiBbK25ldyBEYXRlLCBnbG9iYWwsIHBsdWdpbnMsIGdsb2JhbC5zY3JlZW4sIHRvc3RyaW5nKHBvb2wpXTtcbiAgfVxufVxuXG4vL1xuLy8gdG9zdHJpbmcoKVxuLy8gQ29udmVydHMgYW4gYXJyYXkgb2YgY2hhcmNvZGVzIHRvIGEgc3RyaW5nXG4vL1xuZnVuY3Rpb24gdG9zdHJpbmcoYSkge1xuICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseSgwLCBhKTtcbn1cblxuLy9cbi8vIFdoZW4gc2VlZHJhbmRvbS5qcyBpcyBsb2FkZWQsIHdlIGltbWVkaWF0ZWx5IG1peCBhIGZldyBiaXRzXG4vLyBmcm9tIHRoZSBidWlsdC1pbiBSTkcgaW50byB0aGUgZW50cm9weSBwb29sLiAgQmVjYXVzZSB3ZSBkb1xuLy8gbm90IHdhbnQgdG8gaW50ZXJmZXJlIHdpdGggZGV0ZXJtaW5pc3RpYyBQUk5HIHN0YXRlIGxhdGVyLFxuLy8gc2VlZHJhbmRvbSB3aWxsIG5vdCBjYWxsIG1hdGgucmFuZG9tIG9uIGl0cyBvd24gYWdhaW4gYWZ0ZXJcbi8vIGluaXRpYWxpemF0aW9uLlxuLy9cbm1peGtleShtYXRoLnJhbmRvbSgpLCBwb29sKTtcblxuLy9cbi8vIE5vZGVqcyBhbmQgQU1EIHN1cHBvcnQ6IGV4cG9ydCB0aGUgaW1wbGVtZW50YXRpb24gYXMgYSBtb2R1bGUgdXNpbmdcbi8vIGVpdGhlciBjb252ZW50aW9uLlxuLy9cbmlmICgodHlwZW9mIG1vZHVsZSkgPT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBzZWVkcmFuZG9tO1xuICAvLyBXaGVuIGluIG5vZGUuanMsIHRyeSB1c2luZyBjcnlwdG8gcGFja2FnZSBmb3IgYXV0b3NlZWRpbmcuXG4gIHRyeSB7XG4gICAgbm9kZWNyeXB0byA9IHJlcXVpcmUoJ2NyeXB0bycpO1xuICB9IGNhdGNoIChleCkge31cbn0gZWxzZSBpZiAoKHR5cGVvZiBkZWZpbmUpID09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICBkZWZpbmUoZnVuY3Rpb24oKSB7IHJldHVybiBzZWVkcmFuZG9tOyB9KTtcbn1cblxuLy8gRW5kIGFub255bW91cyBzY29wZSwgYW5kIHBhc3MgaW5pdGlhbCB2YWx1ZXMuXG59KShcbiAgW10sICAgICAvLyBwb29sOiBlbnRyb3B5IHBvb2wgc3RhcnRzIGVtcHR5XG4gIE1hdGggICAgLy8gbWF0aDogcGFja2FnZSBjb250YWluaW5nIHJhbmRvbSwgcG93LCBhbmQgc2VlZHJhbmRvbVxuKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG5cdHRocm93IG5ldyBFcnJvcihcImRlZmluZSBjYW5ub3QgYmUgdXNlZCBpbmRpcmVjdFwiKTtcbn07XG4iLCIvKiBnbG9iYWxzIF9fd2VicGFja19hbWRfb3B0aW9uc19fICovXG5tb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19hbWRfb3B0aW9uc19fO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUpIHtcblx0aWYgKCFtb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XG5cdFx0bW9kdWxlLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKCkge307XG5cdFx0bW9kdWxlLnBhdGhzID0gW107XG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XG5cdFx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xuXHR9XG5cdHJldHVybiBtb2R1bGU7XG59O1xuIiwiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiY2F1c2FsLW5ldC5jb3JlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC51dGlsc1wiKSwgcmVxdWlyZShcInJhbmRvbVwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJjYXVzYWwtbmV0LmNvcmVcIiwgXCJjYXVzYWwtbmV0LnV0aWxzXCIsIFwicmFuZG9tXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkBjYXVzYWxOZXQvc2FtcGxpbmdcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJjYXVzYWwtbmV0LmNvcmVcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnV0aWxzXCIpLCByZXF1aXJlKFwicmFuZG9tXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJAY2F1c2FsTmV0L3NhbXBsaW5nXCJdID0gZmFjdG9yeShyb290W1wiY2F1c2FsLW5ldC5jb3JlXCJdLCByb290W1wiY2F1c2FsLW5ldC51dGlsc1wiXSwgcm9vdFtcInJhbmRvbVwiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfY29yZV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfdXRpbHNfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yYW5kb21fXykge1xucmV0dXJuIC8qKioqKiovIChmdW5jdGlvbihtb2R1bGVzKSB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbi8qKioqKiovIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuLyoqKioqKi8gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0aTogbW9kdWxlSWQsXG4vKioqKioqLyBcdFx0XHRsOiBmYWxzZSxcbi8qKioqKiovIFx0XHRcdGV4cG9ydHM6IHt9XG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbi8qKioqKiovIFx0XHRtb2R1bGUubCA9IHRydWU7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4vKioqKioqLyBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHR9XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4vKioqKioqLyBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4vKioqKioqLyBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuLyoqKioqKi8gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4vKioqKioqLyBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuLyoqKioqKi8gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4vKioqKioqLyBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4vKioqKioqLyBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbi8qKioqKiovIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuLyoqKioqKi8gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbi8qKioqKiovIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4vKioqKioqLyBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuLyoqKioqKi8gXHRcdHJldHVybiBucztcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuLyoqKioqKi8gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuLyoqKioqKi8gXHRcdHJldHVybiBnZXR0ZXI7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8qKioqKiovIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbi8qKioqKiovIH0pXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gKHtcblxuLyoqKi8gXCIuL3NyYy9jYXVzYWxOZXRTYW1wbGluZy5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9jYXVzYWxOZXRTYW1wbGluZy5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBleHBvcnRzIHByb3ZpZGVkOiBkZWZhdWx0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIGNhdXNhbF9uZXRfY29yZV9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgY2F1c2FsLW5ldC5jb3JlICovIFwiY2F1c2FsLW5ldC5jb3JlXCIpO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIGNhdXNhbF9uZXRfY29yZV9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovX193ZWJwYWNrX3JlcXVpcmVfXy5uKGNhdXNhbF9uZXRfY29yZV9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBjYXVzYWxfbmV0X3V0aWxzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBjYXVzYWwtbmV0LnV0aWxzICovIFwiY2F1c2FsLW5ldC51dGlsc1wiKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBjYXVzYWxfbmV0X3V0aWxzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19fZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9fX3dlYnBhY2tfcmVxdWlyZV9fLm4oY2F1c2FsX25ldF91dGlsc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciByYW5kb21fX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIHJhbmRvbSAqLyBcInJhbmRvbVwiKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciByYW5kb21fX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX19kZWZhdWx0ID0gLyojX19QVVJFX18qL19fd2VicGFja19yZXF1aXJlX18ubihyYW5kb21fX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfXyk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX3N1YlNhbXBsaW5nX21peGluc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfM19fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9zdWJTYW1wbGluZy5taXhpbnMgKi8gXCIuL3NyYy9zdWJTYW1wbGluZy5taXhpbnMuanNcIik7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX25lZ1NhbXBsaW5nX21peGluc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfNF9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9uZWdTYW1wbGluZy5taXhpbnMgKi8gXCIuL3NyYy9uZWdTYW1wbGluZy5taXhpbnMuanNcIik7XG5cblxuXG5cblxuLyoqXG4gKiBUaGlzIGNsYXNzIHByb3ZpZGVzIGNvbW1vbiB1c2VkIHNhbXBsaW5nIG1ldGhvZHMgd2hpY2ggY2FuIGJlIGFjY2Vzc2VkIHZpYSAqKmNhdXNhbE5ldFNhbXBsaW5nKiouXG4gKiBtaXh3aXRoOlxuICogWyBTdWJTYW1wbGluZ01peGlucywgTmVnU2FtcGxpbmdNaXhpbnMgXVxuICogQGNsYXNzIENhdXNhbE5ldFNhbXBsaW5nXG4gKiBAZXh0ZW5kcyBGdW5jdG9yXG4gKiBAZXhhbXBsZVxuICogW0VYQU1QTEUgLi4vZXhhbXBsZXMvY2F1c2FsTmV0U2FtcGxpbmcuYmFiZWwuanNdXG4gKi9cblxuY2xhc3MgQ2F1c2FsTmV0U2FtcGxpbmcgZXh0ZW5kcyBjYXVzYWxfbmV0X3V0aWxzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19bXCJwbGF0Zm9ybVwiXS5taXhXaXRoKGNhdXNhbF9uZXRfY29yZV9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fW1wiRnVuY3RvclwiXSwgW19zdWJTYW1wbGluZ19taXhpbnNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzNfX1tcImRlZmF1bHRcIl0sIF9uZWdTYW1wbGluZ19taXhpbnNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzRfX1tcImRlZmF1bHRcIl1dKSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5SYW5kb20gPSByYW5kb21fX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX19kZWZhdWx0LmE7XG4gIH1cblxufVxuXG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIF9fd2VicGFja19leHBvcnRzX19bXCJkZWZhdWx0XCJdID0gKG5ldyBDYXVzYWxOZXRTYW1wbGluZygpKTtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvaW5kZXguanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvaW5kZXguanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgZXhwb3J0cyBwcm92aWRlZDogY2F1c2FsTmV0U2FtcGxpbmcsIFNhbXBsaW5nTWl4aW5zLCBTdWJTYW1wbGluZ01peGlucywgTmVnU2FtcGxpbmdNaXhpbnMgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX2NhdXNhbE5ldFNhbXBsaW5nX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL2NhdXNhbE5ldFNhbXBsaW5nICovIFwiLi9zcmMvY2F1c2FsTmV0U2FtcGxpbmcuanNcIik7XG4vKiBoYXJtb255IHJlZXhwb3J0IChzYWZlKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJjYXVzYWxOZXRTYW1wbGluZ1wiLCBmdW5jdGlvbigpIHsgcmV0dXJuIF9jYXVzYWxOZXRTYW1wbGluZ19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fW1wiZGVmYXVsdFwiXTsgfSk7XG5cbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfc2FtcGxpbmdfbWl4aW5zX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL3NhbXBsaW5nLm1peGlucyAqLyBcIi4vc3JjL3NhbXBsaW5nLm1peGlucy5qc1wiKTtcbi8qIGhhcm1vbnkgcmVleHBvcnQgKHNhZmUpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcIlNhbXBsaW5nTWl4aW5zXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gX3NhbXBsaW5nX21peGluc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fW1wiZGVmYXVsdFwiXTsgfSk7XG5cbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfc3ViU2FtcGxpbmdfbWl4aW5zX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL3N1YlNhbXBsaW5nLm1peGlucyAqLyBcIi4vc3JjL3N1YlNhbXBsaW5nLm1peGlucy5qc1wiKTtcbi8qIGhhcm1vbnkgcmVleHBvcnQgKHNhZmUpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcIlN1YlNhbXBsaW5nTWl4aW5zXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gX3N1YlNhbXBsaW5nX21peGluc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fW1wiZGVmYXVsdFwiXTsgfSk7XG5cbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfbmVnU2FtcGxpbmdfbWl4aW5zX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8zX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL25lZ1NhbXBsaW5nLm1peGlucyAqLyBcIi4vc3JjL25lZ1NhbXBsaW5nLm1peGlucy5qc1wiKTtcbi8qIGhhcm1vbnkgcmVleHBvcnQgKHNhZmUpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcIk5lZ1NhbXBsaW5nTWl4aW5zXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gX25lZ1NhbXBsaW5nX21peGluc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfM19fW1wiZGVmYXVsdFwiXTsgfSk7XG5cblxuXG5cblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9uZWdTYW1wbGluZy5taXhpbnMuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL25lZ1NhbXBsaW5nLm1peGlucy5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgZXhwb3J0cyBwcm92aWRlZDogZGVmYXVsdCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbl9fd2VicGFja19yZXF1aXJlX18ucihfX3dlYnBhY2tfZXhwb3J0c19fKTtcbmNvbnN0IE5lZ2F0aXZlU2FtcGxpbmdNaXhpbnMgPSBCYXNlU2FtcGxpbmdDbGFzcyA9PiBjbGFzcyBleHRlbmRzIEJhc2VTYW1wbGluZ0NsYXNzIHtcbiAgLyoqXG4gICAqIFBlcmZvcm0gbmVnYXRpdmUgc2FtcGxpbmcgZ2l2ZW4gdGhlIHNlbGVjdCBwcm9iIG9mIGlkcyBhbmQgbGlzdCBvZiBwb3NpdGl2ZSBzYW1wbGVzXG4gICAqIEBwYXJhbSB7IE51bWJlciB9IG5lZ2F0aXZlU2l6ZSAtIHNpemUgdG8gc2FtcGxlXG4gICAqIEBwYXJhbSB7IEFycmF5IH0gcG9zaXRpdmVTYW1wbGVzIC0gQXJyYXkgb2YgcG9zc2l0aXZlIElkc1xuICAgKiBAcGFyYW0geyBBcnJheSB9IGNhbmRpZGF0ZVByb2JzIC0gQXJyYXkgb2YgcHJvYmFibGl0eSBvZiBjYW5kaWRhdGUgSWRzXG4gICAqIEBwYXJhbSB7IEJvb2xlYW4gfSBbcmVwbGFjYWJsZT10cnVlXSAtIGlmIHRydWUsIG5vIGR1cGxpY2F0ZWQgc2FtcGxpbmcgSWQgcmV0dXJuZWRcbiAgICogQHJldHVybnMgeyBBcnJheSB9IGFycmF5IG9mIHNhbXBsZWQgSWRzXG4gICAqL1xuICBuZWdTYW1wbGluZyhuZWdhdGl2ZVNpemUsIHBvc2l0aXZlU2FtcGxlcywgY2FuZGlkYXRlUHJvYnMsIHJlcGxhY2FibGUgPSB0cnVlKSB7XG4gICAgY29uc3QgUiA9IHRoaXMuUixcbiAgICAgICAgICBSYW5kb20gPSB0aGlzLlJhbmRvbTtcblxuICAgIGlmIChSLmFueSh2ID0+ICFSLnR5cGUoTnVtYmVyLCB2KSB8fCB2ID4gMSB8fCB2IDwgMCwgY2FuZGlkYXRlUHJvYnMpKSB7XG4gICAgICB0aHJvdyBFcnJvcihgJHtKU09OLnN0cmluZ2lmeShjYW5kaWRhdGVQcm9icyl9IGlzIG5vdCBhbGxvd2ApO1xuICAgIH1cblxuICAgIGxldCBzZWxldGlvblByb2JzID0gUi5yZWR1Y2UoKHNlbGVjdGlvblByb2JzLCBwaWR4KSA9PiB7XG4gICAgICBzZWxlY3Rpb25Qcm9ic1twaWR4XSA9IEluZmluaXR5OyAvL3Bvc2l0aXZlIGNhbmRpZGF0ZSBuZXZlciBiZSBjaG9vc2VkXG5cbiAgICAgIHJldHVybiBzZWxlY3Rpb25Qcm9icztcbiAgICB9LCBSLmNsb25lKGNhbmRpZGF0ZVByb2JzKSwgcG9zaXRpdmVTYW1wbGVzKTtcbiAgICBsZXQgc2FtcGxlcyA9IFtdLFxuICAgICAgICB0YWtlbklkeHMgPSBSLmNsb25lKHNlbGV0aW9uUHJvYnMpO1xuXG4gICAgY29uc3QgR2VuTmV3Q2FuZGlkYXRlSWR4ID0gKCkgPT4gUmFuZG9tLmludCgwLCBzZWxldGlvblByb2JzLmxlbmd0aCAtIDEpO1xuXG4gICAgY29uc3QgU2VsZWN0SWZIaWdoUHJvYiA9IHByb2IgPT4ge1xuICAgICAgbGV0IHJhbmQgPSBSYW5kb20uZmxvYXQoKTtcbiAgICAgIHJldHVybiByYW5kID4gcHJvYjtcbiAgICB9O1xuXG4gICAgd2hpbGUgKHNhbXBsZXMubGVuZ3RoIDwgbmVnYXRpdmVTaXplKSB7XG4gICAgICBsZXQgaWR4ID0gR2VuTmV3Q2FuZGlkYXRlSWR4KCk7XG4gICAgICBsZXQgc2VsZWN0ZWQgPSBTZWxlY3RJZkhpZ2hQcm9iKHNlbGV0aW9uUHJvYnNbaWR4XSk7XG5cbiAgICAgIGlmICghc2VsZWN0ZWQpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICghcmVwbGFjYWJsZSAmJiB0YWtlbklkeHNbaWR4XSA9PT0gbnVsbCkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgc2FtcGxlcyA9IFsuLi5zYW1wbGVzLCBpZHhdO1xuXG4gICAgICBpZiAoIXJlcGxhY2FibGUpIHtcbiAgICAgICAgdGFrZW5JZHhzW2lkeF0gPSBudWxsOyAvL25vbiByZXBsYWNlYWJsZVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzYW1wbGVzO1xuICB9XG5cbn07XG5cbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gX193ZWJwYWNrX2V4cG9ydHNfX1tcImRlZmF1bHRcIl0gPSAoTmVnYXRpdmVTYW1wbGluZ01peGlucyk7XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL3NhbXBsaW5nLm1peGlucy5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvc2FtcGxpbmcubWl4aW5zLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBleHBvcnRzIHByb3ZpZGVkOiBkZWZhdWx0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIGNhdXNhbF9uZXRfY29yZV9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgY2F1c2FsLW5ldC5jb3JlICovIFwiY2F1c2FsLW5ldC5jb3JlXCIpO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIGNhdXNhbF9uZXRfY29yZV9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovX193ZWJwYWNrX3JlcXVpcmVfXy5uKGNhdXNhbF9uZXRfY29yZV9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBjYXVzYWxfbmV0X3V0aWxzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBjYXVzYWwtbmV0LnV0aWxzICovIFwiY2F1c2FsLW5ldC51dGlsc1wiKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBjYXVzYWxfbmV0X3V0aWxzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19fZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9fX3dlYnBhY2tfcmVxdWlyZV9fLm4oY2F1c2FsX25ldF91dGlsc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fKTtcblxuXG4vKipcbiAqIFRoaXMgbWl4aW4gY2xhc3MgcHJvdmlkZSBhdHRyaWJ1dGVzOiAqKlNhbXBsaW5nKiouXG4gKiBAY2xhc3MgU2FtcGxpbmdNaXhpbnNcbiAqIEBleHRlbmRzIEJhc2VDbGFzc1xuICogQGV4YW1wbGVcbiAqIFtFWEFNUExFIC4uL2V4YW1wbGVzL3NhbXBsaW5nLm1peGlucy5iYWJlbC5qc11cbiAqL1xuXG5jb25zdCBTYW1wbGluZ01peGlucyA9IEJhc2VDbGFzcyA9PiBjbGFzcyBleHRlbmRzIEJhc2VDbGFzcyB7XG4gIC8qKlxuICAgKiBnZXQgY3VycmVudCByYW5kb20gaW5zdGFuY2VcbiAgICovXG4gIGdldCBTYW1wbGluZygpIHtcbiAgICBpZiAoIXRoaXMuc2FtcGxpbmcpIHtcbiAgICAgIHRocm93IEVycm9yKGBTYW1wbGluZyBpcyBub3Qgc2V0YCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuc2FtcGxpbmc7XG4gIH1cbiAgLyoqXG4gICAqIHNldCBTYW1wbGluZyBpbnN0YW5jZVxuICAgKiBAcmVhZG9ubHlcbiAgICovXG5cblxuICBzZXQgU2FtcGxpbmcoc2FtcGxpbmcpIHtcbiAgICBjYXVzYWxfbmV0X3V0aWxzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19bXCJhc3NlcnRcIl0uYmVJbnN0YW5jZU9mKHNhbXBsaW5nLCBjYXVzYWxfbmV0X2NvcmVfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX1tcIkZ1bmN0b3JcIl0pO1xuICAgIHRoaXMuc2FtcGxpbmcgPSBzYW1wbGluZztcbiAgfVxuXG59O1xuXG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIF9fd2VicGFja19leHBvcnRzX19bXCJkZWZhdWx0XCJdID0gKFNhbXBsaW5nTWl4aW5zKTtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvc3ViU2FtcGxpbmcubWl4aW5zLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9zdWJTYW1wbGluZy5taXhpbnMuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIGV4cG9ydHMgcHJvdmlkZWQ6IGRlZmF1bHQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG5jb25zdCBTdWJTYW1wbGluZ01peGlucyA9IEJhc2VTYW1wbGluZ0NsYXNzID0+IGNsYXNzIGV4dGVuZHMgQmFzZVNhbXBsaW5nQ2xhc3Mge1xuICAvKipcbiAgICogUGVyZm9ybSB1bmlmb3JtIHNhbXBsZSBhIHN1YiBzZXQgb2YgSWRzIGdpdmVuIHRoZSBjYW5kaWRhdGUgbGlzdFxuICAgKiBAcGFyYW0geyBOdW1iZXIgfSBzYW1wbGluZ1NpemVcbiAgICogQHBhcmFtIHsgQXJyYXl8TnVtYmVyIH0gY2FuZGlkYXRlTGlzdCAtIGxpc3Qgb2YgY2FuZGlkYXRlcyBvciBzaXplIG9mIGNhbmRpZGF0ZSBsaXN0XG4gICAqIEBwYXJhbSB7IEJvb2xlYW4gfSBbcmVwbGFjYWJsZT10cnVlXSAtIGlmIHRydWUsIG5vIGR1cGxpY2F0ZWQgc2FtcGxpbmcgSWQgcmV0dXJuZWRcbiAgICogQHJldHVybnMgeyBBcnJheSB9IGFycmF5IG9mIHNhbXBsZWQgSWRzXG4gICAqL1xuICBzdWJTYW1wbGluZyhzYW1wbGluZ1NpemUsIGNhbmRpZGF0ZUxpc3QsIHJlcGxhY2FibGUgPSB0cnVlKSB7XG4gICAgY29uc3QgUiA9IHRoaXMuUixcbiAgICAgICAgICBSYW5kb20gPSB0aGlzLlJhbmRvbTtcbiAgICBsZXQgY2FuZGlkYXRlcyA9IEFycmF5LmlzQXJyYXkoY2FuZGlkYXRlTGlzdCkgPyBSLmNsb25lKGNhbmRpZGF0ZUxpc3QpIDogUi5yYW5nZSgwLCBjYW5kaWRhdGVMaXN0KTtcblxuICAgIGlmIChjYW5kaWRhdGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhyb3cgRXJyb3IoJ2NhbmRpZGF0ZSBsZW5ndGggc2hvdWxkIGJlIHBvc2l0aXZlJyk7XG4gICAgfVxuXG4gICAgbGV0IHNhbXBsZXMgPSBbXSxcbiAgICAgICAgdGFrZW5JZHhzID0gUi5jbG9uZShjYW5kaWRhdGVzKTtcblxuICAgIGNvbnN0IEdlbk5ld0NhbmRpZGF0ZUlkeCA9ICgpID0+IFJhbmRvbS5pbnQoMCwgY2FuZGlkYXRlcy5sZW5ndGggLSAxKTtcblxuICAgIHdoaWxlIChzYW1wbGVzLmxlbmd0aCA8IHNhbXBsaW5nU2l6ZSkge1xuICAgICAgbGV0IGlkeCA9IEdlbk5ld0NhbmRpZGF0ZUlkeCgpO1xuXG4gICAgICBpZiAoIXJlcGxhY2FibGUgJiYgdGFrZW5JZHhzW2lkeF0gPT09IG51bGwpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIHNhbXBsZXMgPSBbLi4uc2FtcGxlcywgY2FuZGlkYXRlc1tpZHhdXTtcblxuICAgICAgaWYgKCFyZXBsYWNhYmxlKSB7XG4gICAgICAgIHRha2VuSWR4c1tpZHhdID0gbnVsbDsgLy9ub24gcmVwbGFjZWFibGVcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc2FtcGxlcztcbiAgfVxuXG59O1xuXG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIF9fd2VicGFja19leHBvcnRzX19bXCJkZWZhdWx0XCJdID0gKFN1YlNhbXBsaW5nTWl4aW5zKTtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiY2F1c2FsLW5ldC5jb3JlXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIGV4dGVybmFsIFwiY2F1c2FsLW5ldC5jb3JlXCIgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxubW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfY29yZV9fO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCJjYXVzYWwtbmV0LnV0aWxzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiBleHRlcm5hbCBcImNhdXNhbC1uZXQudXRpbHNcIiAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxubW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfdXRpbHNfXztcblxuLyoqKi8gfSksXG5cbi8qKiovIFwicmFuZG9tXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIGV4dGVybmFsIFwicmFuZG9tXCIgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxubW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3JhbmRvbV9fO1xuXG4vKioqLyB9KVxuXG4vKioqKioqLyB9KTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5kbFluQmhZMnM2THk5QVkyRjFjMkZzVG1WMEwzTmhiWEJzYVc1bkwzZGxZbkJoWTJzdmRXNXBkbVZ5YzJGc1RXOWtkV3hsUkdWbWFXNXBkR2x2YmlJc0luZGxZbkJoWTJzNkx5OUFZMkYxYzJGc1RtVjBMM05oYlhCc2FXNW5MM2RsWW5CaFkyc3ZZbTl2ZEhOMGNtRndJaXdpZDJWaWNHRmphem92TDBCallYVnpZV3hPWlhRdmMyRnRjR3hwYm1jdkxpOXpjbU12WTJGMWMyRnNUbVYwVTJGdGNHeHBibWN1YW5NaUxDSjNaV0p3WVdOck9pOHZRR05oZFhOaGJFNWxkQzl6WVcxd2JHbHVaeTh1TDNOeVl5OXBibVJsZUM1cWN5SXNJbmRsWW5CaFkyczZMeTlBWTJGMWMyRnNUbVYwTDNOaGJYQnNhVzVuTHk0dmMzSmpMMjVsWjFOaGJYQnNhVzVuTG0xcGVHbHVjeTVxY3lJc0luZGxZbkJoWTJzNkx5OUFZMkYxYzJGc1RtVjBMM05oYlhCc2FXNW5MeTR2YzNKakwzTmhiWEJzYVc1bkxtMXBlR2x1Y3k1cWN5SXNJbmRsWW5CaFkyczZMeTlBWTJGMWMyRnNUbVYwTDNOaGJYQnNhVzVuTHk0dmMzSmpMM04xWWxOaGJYQnNhVzVuTG0xcGVHbHVjeTVxY3lJc0luZGxZbkJoWTJzNkx5OUFZMkYxYzJGc1RtVjBMM05oYlhCc2FXNW5MMlY0ZEdWeWJtRnNJRndpWTJGMWMyRnNMVzVsZEM1amIzSmxYQ0lpTENKM1pXSndZV05yT2k4dlFHTmhkWE5oYkU1bGRDOXpZVzF3YkdsdVp5OWxlSFJsY201aGJDQmNJbU5oZFhOaGJDMXVaWFF1ZFhScGJITmNJaUlzSW5kbFluQmhZMnM2THk5QVkyRjFjMkZzVG1WMEwzTmhiWEJzYVc1bkwyVjRkR1Z5Ym1Gc0lGd2ljbUZ1Wkc5dFhDSWlYU3dpYm1GdFpYTWlPbHNpUTJGMWMyRnNUbVYwVTJGdGNHeHBibWNpTENKd2JHRjBabTl5YlNJc0ltMXBlRmRwZEdnaUxDSkNZWE5sUm5WdVkzUnZjaUlzSWxOMVlsTmhiWEJzYVc1blRXbDRhVzV6SWl3aVRtVm5VMkZ0Y0d4cGJtZE5hWGhwYm5NaUxDSmpiMjV6ZEhKMVkzUnZjaUlzSWxKaGJtUnZiU0lzSW5KaGJtUnZiU0lzSWs1bFoyRjBhWFpsVTJGdGNHeHBibWROYVhocGJuTWlMQ0pDWVhObFUyRnRjR3hwYm1kRGJHRnpjeUlzSW01bFoxTmhiWEJzYVc1bklpd2libVZuWVhScGRtVlRhWHBsSWl3aWNHOXphWFJwZG1WVFlXMXdiR1Z6SWl3aVkyRnVaR2xrWVhSbFVISnZZbk1pTENKeVpYQnNZV05oWW14bElpd2lVaUlzSW1GdWVTSXNJbllpTENKMGVYQmxJaXdpVG5WdFltVnlJaXdpUlhKeWIzSWlMQ0pLVTA5T0lpd2ljM1J5YVc1bmFXWjVJaXdpYzJWc1pYUnBiMjVRY205aWN5SXNJbkpsWkhWalpTSXNJbk5sYkdWamRHbHZibEJ5YjJKeklpd2ljR2xrZUNJc0lrbHVabWx1YVhSNUlpd2lZMnh2Ym1VaUxDSnpZVzF3YkdWeklpd2lkR0ZyWlc1SlpIaHpJaXdpUjJWdVRtVjNRMkZ1Wkdsa1lYUmxTV1I0SWl3aWFXNTBJaXdpYkdWdVozUm9JaXdpVTJWc1pXTjBTV1pJYVdkb1VISnZZaUlzSW5CeWIySWlMQ0p5WVc1a0lpd2labXh2WVhRaUxDSnBaSGdpTENKelpXeGxZM1JsWkNJc0lsTmhiWEJzYVc1blRXbDRhVzV6SWl3aVFtRnpaVU5zWVhOeklpd2lVMkZ0Y0d4cGJtY2lMQ0p6WVcxd2JHbHVaeUlzSW1GemMyVnlkQ0lzSW1KbFNXNXpkR0Z1WTJWUFppSXNJa1oxYm1OMGIzSWlMQ0p6ZFdKVFlXMXdiR2x1WnlJc0luTmhiWEJzYVc1blUybDZaU0lzSW1OaGJtUnBaR0YwWlV4cGMzUWlMQ0pqWVc1a2FXUmhkR1Z6SWl3aVFYSnlZWGtpTENKcGMwRnljbUY1SWl3aWNtRnVaMlVpWFN3aWJXRndjR2x1WjNNaU9pSkJRVUZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEVOQlFVTTdRVUZEUkN4UE8wRkRWa0U3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPenRCUVVkQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeHJSRUZCTUVNc1owTkJRV2RETzBGQlF6RkZPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRXNaMFZCUVhkRUxHdENRVUZyUWp0QlFVTXhSVHRCUVVOQkxIbEVRVUZwUkN4alFVRmpPMEZCUXk5RU96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4cFJFRkJlVU1zYVVOQlFXbERPMEZCUXpGRkxIZElRVUZuU0N4dFFrRkJiVUlzUlVGQlJUdEJRVU55U1R0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEcxRFFVRXlRaXd3UWtGQk1FSXNSVUZCUlR0QlFVTjJSQ3g1UTBGQmFVTXNaVUZCWlR0QlFVTm9SRHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVN3NFJFRkJjMFFzSzBSQlFTdEVPenRCUVVWeVNEdEJRVU5CT3pzN1FVRkhRVHRCUVVOQk96czdPenM3T3pzN096czdPMEZEYkVaQk8wRkJRVUU3UVVGQlFUdEJRVUZCTzBGQlFVRTdRVUZCUVR0QlFVRkJPMEZCUVVFN1FVRkJRVHRCUVVGQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZGUVRzN096czdPenM3T3p0QlFWTkJMRTFCUVUxQkxHbENRVUZPTEZOQlFXZERReXg1UkVGQlVTeERRVUZEUXl4UFFVRlVMRU5CUVd0Q1F5eDFSRUZCYkVJc1JVRkROVUlzUTBGQlJVTXNNa1JCUVVZc1JVRkJjVUpETERKRVFVRnlRaXhEUVVRMFFpeERRVUZvUXl4RFFVTTJRenRCUVVONlEwTXNZVUZCVnl4SFFVRkZPMEZCUTFRN1FVRkRRU3hUUVVGTFF5eE5RVUZNTEVkQlFXTkRMRFpEUVVGa08wRkJRMGc3TzBGQlNuZERPenRCUVU4NVFpeHRSVUZCU1ZJc2FVSkJRVW9zUlVGQlppeEZPenM3T3pzN096czdPenM3UVVOMlFrRTdRVUZCUVR0QlFVRkJPMEZCUVVFN1FVRkJRVHRCUVVGQk8wRkJRVUU3UVVGQlFUdEJRVUZCTzBGQlFVRTdRVUZCUVR0QlFVRkJPMEZCUVVFN1FVRkJRVHRCUVVOQk8wRkJSVUU3T3pzN096czdPenM3T3pzN1FVTklRVHRCUVVGQkxFMUJRVTFUTEhOQ1FVRnpRaXhIUVVGSlF5eHBRa0ZCUkN4SlFVRnpRaXhqUVVGalFTeHBRa0ZCWkN4RFFVRXJRanRCUVVOb1JqczdPenM3T3pzN1FVRlJRVU1zWVVGQlZ5eERRVUZEUXl4WlFVRkVMRVZCUVdWRExHVkJRV1lzUlVGQlowTkRMR05CUVdoRExFVkJRV2RFUXl4VlFVRlZMRWRCUVVNc1NVRkJNMFFzUlVGQlowVTdRVUZEZGtVc1ZVRkJUVU1zUTBGQlF5eEhRVUZITEV0QlFVdEJMRU5CUVdZN1FVRkJRU3hWUVVGclFsUXNUVUZCVFN4SFFVRkhMRXRCUVV0QkxFMUJRV2hET3p0QlFVTkJMRkZCUVVkVExFTkJRVU1zUTBGQlEwTXNSMEZCUml4RFFVRlBReXhEUVVGRUxFbEJRVTBzUTBGQlEwWXNRMEZCUXl4RFFVRkRSeXhKUVVGR0xFTkJRVTlETEUxQlFWQXNSVUZCWTBZc1EwRkJaQ3hEUVVGRUxFbEJRWEZDUVN4RFFVRkRMRWRCUVVjc1EwRkJla0lzU1VGQk9FSkJMRU5CUVVNc1IwRkJSeXhEUVVFNVF5eEZRVUZwUkVvc1kwRkJha1FzUTBGQlNDeEZRVUZ2UlR0QlFVTm9SU3haUVVGTlR5eExRVUZMTEVOQlFVVXNSMEZCUlVNc1NVRkJTU3hEUVVGRFF5eFRRVUZNTEVOQlFXVlVMR05CUVdZc1EwRkJLMElzWlVGQmJrTXNRMEZCV0R0QlFVTklPenRCUVVORUxGRkJRVWxWTEdGQlFXRXNSMEZCUjFJc1EwRkJReXhEUVVGRFV5eE5RVUZHTEVOQlFWTXNRMEZCUTBNc1kwRkJSQ3hGUVVGcFFrTXNTVUZCYWtJc1MwRkJkMEk3UVVGRE4wSkVMRzlDUVVGakxFTkJRVU5ETEVsQlFVUXNRMEZCWkN4SFFVRjFRa01zVVVGQmRrSXNRMEZFTmtJc1EwRkRSenM3UVVGRGFFTXNZVUZCVDBZc1kwRkJVRHRCUVVOSUxFdEJTRVFzUlVGSFIxWXNRMEZCUXl4RFFVRkRZU3hMUVVGR0xFTkJRVkZtTEdOQlFWSXNRMEZJU0N4RlFVYzBRa1FzWlVGSU5VSXNRMEZCY0VJN1FVRkpRU3hSUVVGSmFVSXNUMEZCVHl4SFFVRkhMRVZCUVdRN1FVRkJRU3hSUVVGclFrTXNVMEZCVXl4SFFVRkhaaXhEUVVGRExFTkJRVU5oTEV0QlFVWXNRMEZCVVV3c1lVRkJVaXhEUVVFNVFqczdRVUZEUVN4VlFVRk5VU3hyUWtGQmEwSXNSMEZCUnl4TlFVRkpla0lzVFVGQlRTeERRVUZETUVJc1IwRkJVQ3hEUVVGWExFTkJRVmdzUlVGQlkxUXNZVUZCWVN4RFFVRkRWU3hOUVVGa0xFZEJRWEZDTEVOQlFXNURMRU5CUVM5Q096dEJRVU5CTEZWQlFVMURMR2RDUVVGblFpeEhRVUZKUXl4SlFVRkVMRWxCUVZFN1FVRkROMElzVlVGQlNVTXNTVUZCU1N4SFFVRkhPVUlzVFVGQlRTeERRVUZESzBJc1MwRkJVQ3hGUVVGWU8wRkJRMEVzWVVGQlQwUXNTVUZCU1N4SFFVRkRSQ3hKUVVGYU8wRkJRMGdzUzBGSVJEczdRVUZKUVN4WFFVRk5UaXhQUVVGUExFTkJRVU5KTEUxQlFWSXNSMEZCYVVKMFFpeFpRVUYyUWl4RlFVRnZRenRCUVVOb1F5eFZRVUZKTWtJc1IwRkJSeXhIUVVGSFVDeHJRa0ZCYTBJc1JVRkJOVUk3UVVGRFFTeFZRVUZKVVN4UlFVRlJMRWRCUVVkTUxHZENRVUZuUWl4RFFVRkRXQ3hoUVVGaExFTkJRVU5sTEVkQlFVUXNRMEZCWkN4RFFVRXZRanM3UVVGRFFTeFZRVUZITEVOQlFVTkRMRkZCUVVvc1JVRkJZVHRCUVVOVU8wRkJRMGc3TzBGQlEwUXNWVUZCUnl4RFFVRkRla0lzVlVGQlJDeEpRVUZsWjBJc1UwRkJVeXhEUVVGRFVTeEhRVUZFTEVOQlFWUXNTMEZCYVVJc1NVRkJia01zUlVGQmQwTTdRVUZEY0VNN1FVRkRTRHM3UVVGRFJGUXNZVUZCVHl4SFFVRkhMRU5CUVVNc1IwRkJSMEVzVDBGQlNpeEZRVUZoVXl4SFFVRmlMRU5CUVZZN08wRkJRMEVzVlVGQlJ5eERRVUZEZUVJc1ZVRkJTaXhGUVVGbE8wRkJRMWhuUWl4cFFrRkJVeXhEUVVGRFVTeEhRVUZFTEVOQlFWUXNSMEZCWlN4SlFVRm1MRU5CUkZjc1EwRkRVenRCUVVOMlFqdEJRVU5LT3p0QlFVTkVMRmRCUVU5VUxFOUJRVkE3UVVGRFNEczdRVUYyUXl0RkxFTkJRWEJHT3p0QlFYbERaWEpDTEhGR1FVRm1MRVU3T3pzN096czdPenM3T3p0QlEzcERRVHRCUVVGQk8wRkJRVUU3UVVGQlFUdEJRVUZCTzBGQlFVRTdRVUZEUVR0QlFVTkJPenM3T3pzN096dEJRVTlCTEUxQlFVMW5ReXhqUVVGakxFZEJRVWxETEZOQlFVUXNTVUZCWXl4alFVRmpRU3hUUVVGa0xFTkJRWFZDTzBGQlEzaEVPenM3UVVGSFFTeE5RVUZKUXl4UlFVRktMRWRCUVdNN1FVRkRWaXhSUVVGSExFTkJRVU1zUzBGQlMwTXNVVUZCVkN4RlFVRnJRanRCUVVOa0xGbEJRVTEyUWl4TFFVRkxMRU5CUVVVc2NVSkJRVVlzUTBGQldEdEJRVU5JT3p0QlFVTkVMRmRCUVU4c1MwRkJTM1ZDTEZGQlFWbzdRVUZEU0R0QlFVVkVPenM3T3pzN1FVRkpRU3hOUVVGSlJDeFJRVUZLTEVOQlFXRkRMRkZCUVdJc1JVRkJjMEk3UVVGRGJFSkRMREpFUVVGTkxFTkJRVU5ETEZsQlFWQXNRMEZCYjBKR0xGRkJRWEJDTEVWQlFUaENSeXgxUkVGQk9VSTdRVUZEUVN4VFFVRkxTQ3hSUVVGTUxFZEJRV2RDUVN4UlFVRm9RanRCUVVOSU96dEJRV3hDZFVRc1EwRkJOVVE3TzBGQmNVSmxTQ3cyUlVGQlppeEZPenM3T3pzN096czdPenM3UVVNNVFrRTdRVUZCUVN4TlFVRk5ja01zYVVKQlFXbENMRWRCUVVsTkxHbENRVUZFTEVsQlFYVkNMR05CUVdOQkxHbENRVUZrTEVOQlFTdENPMEZCUXpWRk96czdPenM3TzBGQlQwRnpReXhoUVVGWExFTkJRVU5ETEZsQlFVUXNSVUZCWlVNc1lVRkJaaXhGUVVFNFFtNURMRlZCUVZVc1IwRkJReXhKUVVGNlF5eEZRVUU0UXp0QlFVTnlSQ3hWUVVGTlF5eERRVUZETEVkQlFVY3NTMEZCUzBFc1EwRkJaanRCUVVGQkxGVkJRV3RDVkN4TlFVRk5MRWRCUVVjc1MwRkJTMEVzVFVGQmFFTTdRVUZEUVN4UlFVRkpORU1zVlVGQlZTeEhRVUZIUXl4TFFVRkxMRU5CUVVORExFOUJRVTRzUTBGQlkwZ3NZVUZCWkN4SlFVRTJRbXhETEVOQlFVTXNRMEZCUTJFc1MwRkJSaXhEUVVGUmNVSXNZVUZCVWl4RFFVRTNRaXhIUVVGdlJHeERMRU5CUVVNc1EwRkJRM05ETEV0QlFVWXNRMEZCVVN4RFFVRlNMRVZCUVZkS0xHRkJRVmdzUTBGQmNrVTdPMEZCUTBFc1VVRkJSME1zVlVGQlZTeERRVUZEYWtJc1RVRkJXQ3hMUVVGelFpeERRVUY2UWl4RlFVRXlRanRCUVVOMlFpeFpRVUZOWWl4TFFVRkxMRU5CUVVNc2NVTkJRVVFzUTBGQldEdEJRVU5JT3p0QlFVTkVMRkZCUVVsVExFOUJRVThzUjBGQlJ5eEZRVUZrTzBGQlFVRXNVVUZCYTBKRExGTkJRVk1zUjBGQlIyWXNRMEZCUXl4RFFVRkRZU3hMUVVGR0xFTkJRVkZ6UWl4VlFVRlNMRU5CUVRsQ096dEJRVU5CTEZWQlFVMXVRaXhyUWtGQmEwSXNSMEZCUnl4TlFVRkpla0lzVFVGQlRTeERRVUZETUVJc1IwRkJVQ3hEUVVGWExFTkJRVmdzUlVGQlkydENMRlZCUVZVc1EwRkJRMnBDTEUxQlFWZ3NSMEZCYTBJc1EwRkJhRU1zUTBGQkwwSTdPMEZCUTBFc1YwRkJUVW9zVDBGQlR5eERRVUZEU1N4TlFVRlNMRWRCUVdsQ1pTeFpRVUYyUWl4RlFVRnZRenRCUVVOb1F5eFZRVUZKVml4SFFVRkhMRWRCUVVkUUxHdENRVUZyUWl4RlFVRTFRanM3UVVGRFFTeFZRVUZITEVOQlFVTnFRaXhWUVVGRUxFbEJRV1ZuUWl4VFFVRlRMRU5CUVVOUkxFZEJRVVFzUTBGQlZDeExRVUZwUWl4SlFVRnVReXhGUVVGM1F6dEJRVU53UXp0QlFVTklPenRCUVVORVZDeGhRVUZQTEVkQlFVY3NRMEZCUXl4SFFVRkhRU3hQUVVGS0xFVkJRV0Z4UWl4VlFVRlZMRU5CUVVOYUxFZEJRVVFzUTBGQmRrSXNRMEZCVmpzN1FVRkRRU3hWUVVGSExFTkJRVU40UWl4VlFVRktMRVZCUVdVN1FVRkRXR2RDTEdsQ1FVRlRMRU5CUVVOUkxFZEJRVVFzUTBGQlZDeEhRVUZsTEVsQlFXWXNRMEZFVnl4RFFVTlRPMEZCUTNaQ08wRkJRMG83TzBGQlEwUXNWMEZCVDFRc1QwRkJVRHRCUVVOSU96dEJRVE5DTWtVc1EwRkJhRVk3TzBGQk5rSmxNVUlzWjBaQlFXWXNSVHM3T3pzN096czdPenM3UVVNM1FrRXNOa1E3T3pzN096czdPenM3TzBGRFFVRXNPRVE3T3pzN096czdPenM3TzBGRFFVRXNiMFFpTENKbWFXeGxJam9pUUdOaGRYTmhiRTVsZEM5ellXMXdiR2x1Wnk1M1pXSXVhbk1pTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lJb1puVnVZM1JwYjI0Z2QyVmljR0ZqYTFWdWFYWmxjbk5oYkUxdlpIVnNaVVJsWm1sdWFYUnBiMjRvY205dmRDd2dabUZqZEc5eWVTa2dlMXh1WEhScFppaDBlWEJsYjJZZ1pYaHdiM0owY3lBOVBUMGdKMjlpYW1WamRDY2dKaVlnZEhsd1pXOW1JRzF2WkhWc1pTQTlQVDBnSjI5aWFtVmpkQ2NwWEc1Y2RGeDBiVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQm1ZV04wYjNKNUtISmxjWFZwY21Vb1hDSmpZWFZ6WVd3dGJtVjBMbU52Y21WY0lpa3NJSEpsY1hWcGNtVW9YQ0pqWVhWellXd3RibVYwTG5WMGFXeHpYQ0lwTENCeVpYRjFhWEpsS0Z3aWNtRnVaRzl0WENJcEtUdGNibHgwWld4elpTQnBaaWgwZVhCbGIyWWdaR1ZtYVc1bElEMDlQU0FuWm5WdVkzUnBiMjRuSUNZbUlHUmxabWx1WlM1aGJXUXBYRzVjZEZ4MFpHVm1hVzVsS0Z0Y0ltTmhkWE5oYkMxdVpYUXVZMjl5WlZ3aUxDQmNJbU5oZFhOaGJDMXVaWFF1ZFhScGJITmNJaXdnWENKeVlXNWtiMjFjSWwwc0lHWmhZM1J2Y25rcE8xeHVYSFJsYkhObElHbG1LSFI1Y0dWdlppQmxlSEJ2Y25SeklEMDlQU0FuYjJKcVpXTjBKeWxjYmx4MFhIUmxlSEJ2Y25Selcxd2lRR05oZFhOaGJFNWxkQzl6WVcxd2JHbHVaMXdpWFNBOUlHWmhZM1J2Y25rb2NtVnhkV2x5WlNoY0ltTmhkWE5oYkMxdVpYUXVZMjl5WlZ3aUtTd2djbVZ4ZFdseVpTaGNJbU5oZFhOaGJDMXVaWFF1ZFhScGJITmNJaWtzSUhKbGNYVnBjbVVvWENKeVlXNWtiMjFjSWlrcE8xeHVYSFJsYkhObFhHNWNkRngwY205dmRGdGNJa0JqWVhWellXeE9aWFF2YzJGdGNHeHBibWRjSWwwZ1BTQm1ZV04wYjNKNUtISnZiM1JiWENKallYVnpZV3d0Ym1WMExtTnZjbVZjSWwwc0lISnZiM1JiWENKallYVnpZV3d0Ym1WMExuVjBhV3h6WENKZExDQnliMjkwVzF3aWNtRnVaRzl0WENKZEtUdGNibjBwS0hSb2FYTXNJR1oxYm1OMGFXOXVLRjlmVjBWQ1VFRkRTMTlGV0ZSRlVrNUJURjlOVDBSVlRFVmZZMkYxYzJGc1gyNWxkRjlqYjNKbFgxOHNJRjlmVjBWQ1VFRkRTMTlGV0ZSRlVrNUJURjlOVDBSVlRFVmZZMkYxYzJGc1gyNWxkRjkxZEdsc2MxOWZMQ0JmWDFkRlFsQkJRMHRmUlZoVVJWSk9RVXhmVFU5RVZVeEZYM0poYm1SdmJWOWZLU0I3WEc1eVpYUjFjbTRnSWl3aUlGeDBMeThnVkdobElHMXZaSFZzWlNCallXTm9aVnh1SUZ4MGRtRnlJR2x1YzNSaGJHeGxaRTF2WkhWc1pYTWdQU0I3ZlR0Y2JseHVJRngwTHk4Z1ZHaGxJSEpsY1hWcGNtVWdablZ1WTNScGIyNWNiaUJjZEdaMWJtTjBhVzl1SUY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4b2JXOWtkV3hsU1dRcElIdGNibHh1SUZ4MFhIUXZMeUJEYUdWamF5QnBaaUJ0YjJSMWJHVWdhWE1nYVc0Z1kyRmphR1ZjYmlCY2RGeDBhV1lvYVc1emRHRnNiR1ZrVFc5a2RXeGxjMXR0YjJSMWJHVkpaRjBwSUh0Y2JpQmNkRngwWEhSeVpYUjFjbTRnYVc1emRHRnNiR1ZrVFc5a2RXeGxjMXR0YjJSMWJHVkpaRjB1Wlhod2IzSjBjenRjYmlCY2RGeDBmVnh1SUZ4MFhIUXZMeUJEY21WaGRHVWdZU0J1WlhjZ2JXOWtkV3hsSUNoaGJtUWdjSFYwSUdsMElHbHVkRzhnZEdobElHTmhZMmhsS1Z4dUlGeDBYSFIyWVhJZ2JXOWtkV3hsSUQwZ2FXNXpkR0ZzYkdWa1RXOWtkV3hsYzF0dGIyUjFiR1ZKWkYwZ1BTQjdYRzRnWEhSY2RGeDBhVG9nYlc5a2RXeGxTV1FzWEc0Z1hIUmNkRngwYkRvZ1ptRnNjMlVzWEc0Z1hIUmNkRngwWlhod2IzSjBjem9nZTMxY2JpQmNkRngwZlR0Y2JseHVJRngwWEhRdkx5QkZlR1ZqZFhSbElIUm9aU0J0YjJSMWJHVWdablZ1WTNScGIyNWNiaUJjZEZ4MGJXOWtkV3hsYzF0dGIyUjFiR1ZKWkYwdVkyRnNiQ2h0YjJSMWJHVXVaWGh3YjNKMGN5d2diVzlrZFd4bExDQnRiMlIxYkdVdVpYaHdiM0owY3l3Z1gxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5azdYRzVjYmlCY2RGeDBMeThnUm14aFp5QjBhR1VnYlc5a2RXeGxJR0Z6SUd4dllXUmxaRnh1SUZ4MFhIUnRiMlIxYkdVdWJDQTlJSFJ5ZFdVN1hHNWNiaUJjZEZ4MEx5OGdVbVYwZFhKdUlIUm9aU0JsZUhCdmNuUnpJRzltSUhSb1pTQnRiMlIxYkdWY2JpQmNkRngwY21WMGRYSnVJRzF2WkhWc1pTNWxlSEJ2Y25Sek8xeHVJRngwZlZ4dVhHNWNiaUJjZEM4dklHVjRjRzl6WlNCMGFHVWdiVzlrZFd4bGN5QnZZbXBsWTNRZ0tGOWZkMlZpY0dGamExOXRiMlIxYkdWelgxOHBYRzRnWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtMGdQU0J0YjJSMWJHVnpPMXh1WEc0Z1hIUXZMeUJsZUhCdmMyVWdkR2hsSUcxdlpIVnNaU0JqWVdOb1pWeHVJRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1aklEMGdhVzV6ZEdGc2JHVmtUVzlrZFd4bGN6dGNibHh1SUZ4MEx5OGdaR1ZtYVc1bElHZGxkSFJsY2lCbWRXNWpkR2x2YmlCbWIzSWdhR0Z5Ylc5dWVTQmxlSEJ2Y25SelhHNGdYSFJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG1RZ1BTQm1kVzVqZEdsdmJpaGxlSEJ2Y25SekxDQnVZVzFsTENCblpYUjBaWElwSUh0Y2JpQmNkRngwYVdZb0lWOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVieWhsZUhCdmNuUnpMQ0J1WVcxbEtTa2dlMXh1SUZ4MFhIUmNkRTlpYW1WamRDNWtaV1pwYm1WUWNtOXdaWEowZVNobGVIQnZjblJ6TENCdVlXMWxMQ0I3SUdWdWRXMWxjbUZpYkdVNklIUnlkV1VzSUdkbGREb2daMlYwZEdWeUlIMHBPMXh1SUZ4MFhIUjlYRzRnWEhSOU8xeHVYRzRnWEhRdkx5QmtaV1pwYm1VZ1gxOWxjMDF2WkhWc1pTQnZiaUJsZUhCdmNuUnpYRzRnWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxuSWdQU0JtZFc1amRHbHZiaWhsZUhCdmNuUnpLU0I3WEc0Z1hIUmNkR2xtS0hSNWNHVnZaaUJUZVcxaWIyd2dJVDA5SUNkMWJtUmxabWx1WldRbklDWW1JRk41YldKdmJDNTBiMU4wY21sdVoxUmhaeWtnZTF4dUlGeDBYSFJjZEU5aWFtVmpkQzVrWldacGJtVlFjbTl3WlhKMGVTaGxlSEJ2Y25SekxDQlRlVzFpYjJ3dWRHOVRkSEpwYm1kVVlXY3NJSHNnZG1Gc2RXVTZJQ2ROYjJSMWJHVW5JSDBwTzF4dUlGeDBYSFI5WEc0Z1hIUmNkRTlpYW1WamRDNWtaV1pwYm1WUWNtOXdaWEowZVNobGVIQnZjblJ6TENBblgxOWxjMDF2WkhWc1pTY3NJSHNnZG1Gc2RXVTZJSFJ5ZFdVZ2ZTazdYRzRnWEhSOU8xeHVYRzRnWEhRdkx5QmpjbVZoZEdVZ1lTQm1ZV3RsSUc1aGJXVnpjR0ZqWlNCdlltcGxZM1JjYmlCY2RDOHZJRzF2WkdVZ0ppQXhPaUIyWVd4MVpTQnBjeUJoSUcxdlpIVnNaU0JwWkN3Z2NtVnhkV2x5WlNCcGRGeHVJRngwTHk4Z2JXOWtaU0FtSURJNklHMWxjbWRsSUdGc2JDQndjbTl3WlhKMGFXVnpJRzltSUhaaGJIVmxJR2x1ZEc4Z2RHaGxJRzV6WEc0Z1hIUXZMeUJ0YjJSbElDWWdORG9nY21WMGRYSnVJSFpoYkhWbElIZG9aVzRnWVd4eVpXRmtlU0J1Y3lCdlltcGxZM1JjYmlCY2RDOHZJRzF2WkdVZ0ppQTRmREU2SUdKbGFHRjJaU0JzYVd0bElISmxjWFZwY21WY2JpQmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1ZENBOUlHWjFibU4wYVc5dUtIWmhiSFZsTENCdGIyUmxLU0I3WEc0Z1hIUmNkR2xtS0cxdlpHVWdKaUF4S1NCMllXeDFaU0E5SUY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4b2RtRnNkV1VwTzF4dUlGeDBYSFJwWmlodGIyUmxJQ1lnT0NrZ2NtVjBkWEp1SUhaaGJIVmxPMXh1SUZ4MFhIUnBaaWdvYlc5a1pTQW1JRFFwSUNZbUlIUjVjR1Z2WmlCMllXeDFaU0E5UFQwZ0oyOWlhbVZqZENjZ0ppWWdkbUZzZFdVZ0ppWWdkbUZzZFdVdVgxOWxjMDF2WkhWc1pTa2djbVYwZFhKdUlIWmhiSFZsTzF4dUlGeDBYSFIyWVhJZ2JuTWdQU0JQWW1wbFkzUXVZM0psWVhSbEtHNTFiR3dwTzF4dUlGeDBYSFJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG5Jb2JuTXBPMXh1SUZ4MFhIUlBZbXBsWTNRdVpHVm1hVzVsVUhKdmNHVnlkSGtvYm5Nc0lDZGtaV1poZFd4MEp5d2dleUJsYm5WdFpYSmhZbXhsT2lCMGNuVmxMQ0IyWVd4MVpUb2dkbUZzZFdVZ2ZTazdYRzRnWEhSY2RHbG1LRzF2WkdVZ0ppQXlJQ1ltSUhSNWNHVnZaaUIyWVd4MVpTQWhQU0FuYzNSeWFXNW5KeWtnWm05eUtIWmhjaUJyWlhrZ2FXNGdkbUZzZFdVcElGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVaQ2h1Y3l3Z2EyVjVMQ0JtZFc1amRHbHZiaWhyWlhrcElIc2djbVYwZFhKdUlIWmhiSFZsVzJ0bGVWMDdJSDB1WW1sdVpDaHVkV3hzTENCclpYa3BLVHRjYmlCY2RGeDBjbVYwZFhKdUlHNXpPMXh1SUZ4MGZUdGNibHh1SUZ4MEx5OGdaMlYwUkdWbVlYVnNkRVY0Y0c5eWRDQm1kVzVqZEdsdmJpQm1iM0lnWTI5dGNHRjBhV0pwYkdsMGVTQjNhWFJvSUc1dmJpMW9ZWEp0YjI1NUlHMXZaSFZzWlhOY2JpQmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1YmlBOUlHWjFibU4wYVc5dUtHMXZaSFZzWlNrZ2UxeHVJRngwWEhSMllYSWdaMlYwZEdWeUlEMGdiVzlrZFd4bElDWW1JRzF2WkhWc1pTNWZYMlZ6VFc5a2RXeGxJRDljYmlCY2RGeDBYSFJtZFc1amRHbHZiaUJuWlhSRVpXWmhkV3gwS0NrZ2V5QnlaWFIxY200Z2JXOWtkV3hsV3lka1pXWmhkV3gwSjEwN0lIMGdPbHh1SUZ4MFhIUmNkR1oxYm1OMGFXOXVJR2RsZEUxdlpIVnNaVVY0Y0c5eWRITW9LU0I3SUhKbGRIVnliaUJ0YjJSMWJHVTdJSDA3WEc0Z1hIUmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1WkNoblpYUjBaWElzSUNkaEp5d2daMlYwZEdWeUtUdGNiaUJjZEZ4MGNtVjBkWEp1SUdkbGRIUmxjanRjYmlCY2RIMDdYRzVjYmlCY2RDOHZJRTlpYW1WamRDNXdjbTkwYjNSNWNHVXVhR0Z6VDNkdVVISnZjR1Z5ZEhrdVkyRnNiRnh1SUZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXZJRDBnWm5WdVkzUnBiMjRvYjJKcVpXTjBMQ0J3Y205d1pYSjBlU2tnZXlCeVpYUjFjbTRnVDJKcVpXTjBMbkJ5YjNSdmRIbHdaUzVvWVhOUGQyNVFjbTl3WlhKMGVTNWpZV3hzS0c5aWFtVmpkQ3dnY0hKdmNHVnlkSGtwT3lCOU8xeHVYRzRnWEhRdkx5QmZYM2RsWW5CaFkydGZjSFZpYkdsalgzQmhkR2hmWDF4dUlGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV3SUQwZ1hDSmNJanRjYmx4dVhHNGdYSFF2THlCTWIyRmtJR1Z1ZEhKNUlHMXZaSFZzWlNCaGJtUWdjbVYwZFhKdUlHVjRjRzl5ZEhOY2JpQmNkSEpsZEhWeWJpQmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZLRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1Y3lBOUlGd2lMaTl6Y21NdmFXNWtaWGd1YW5OY0lpazdYRzRpTENKcGJYQnZjblFnZXlCR2RXNWpkRzl5SUdGeklFSmhjMlZHZFc1amRHOXlJSDBnWm5KdmJTQW5ZMkYxYzJGc0xXNWxkQzVqYjNKbEp6dGNibWx0Y0c5eWRDQjdJSEJzWVhSbWIzSnRJSDBnWm5KdmJTQW5ZMkYxYzJGc0xXNWxkQzUxZEdsc2N5YzdYRzVwYlhCdmNuUWdjbUZ1Wkc5dElHWnliMjBnSjNKaGJtUnZiU2M3WEc1cGJYQnZjblFnZXlCa1pXWmhkV3gwSUdGeklGTjFZbE5oYlhCc2FXNW5UV2w0YVc1eklIMGdabkp2YlNBbkxpOXpkV0pUWVcxd2JHbHVaeTV0YVhocGJuTW5PMXh1YVcxd2IzSjBJSHNnWkdWbVlYVnNkQ0JoY3lCT1pXZFRZVzF3YkdsdVowMXBlR2x1Y3lCOUlHWnliMjBnSnk0dmJtVm5VMkZ0Y0d4cGJtY3ViV2w0YVc1ekp6dGNibHh1THlvcVhHNGdLaUJVYUdseklHTnNZWE56SUhCeWIzWnBaR1Z6SUdOdmJXMXZiaUIxYzJWa0lITmhiWEJzYVc1bklHMWxkR2h2WkhNZ2QyaHBZMmdnWTJGdUlHSmxJR0ZqWTJWemMyVmtJSFpwWVNBcUttTmhkWE5oYkU1bGRGTmhiWEJzYVc1bktpb3VYRzRnS2lCdGFYaDNhWFJvT2x4dUlDb2dXeUJUZFdKVFlXMXdiR2x1WjAxcGVHbHVjeXdnVG1WblUyRnRjR3hwYm1kTmFYaHBibk1nWFZ4dUlDb2dRR05zWVhOeklFTmhkWE5oYkU1bGRGTmhiWEJzYVc1blhHNGdLaUJBWlhoMFpXNWtjeUJHZFc1amRHOXlYRzRnS2lCQVpYaGhiWEJzWlZ4dUlDb2dXMFZZUVUxUVRFVWdMaTR2WlhoaGJYQnNaWE12WTJGMWMyRnNUbVYwVTJGdGNHeHBibWN1WW1GaVpXd3Vhbk5kWEc0Z0tpOWNibU5zWVhOeklFTmhkWE5oYkU1bGRGTmhiWEJzYVc1bklHVjRkR1Z1WkhNZ2NHeGhkR1p2Y20wdWJXbDRWMmwwYUNnZ1FtRnpaVVoxYm1OMGIzSXNJRnh1SUNBZ0lGc2dVM1ZpVTJGdGNHeHBibWROYVhocGJuTXNJRTVsWjFOaGJYQnNhVzVuVFdsNGFXNXpJRjBwZTF4dUlDQWdJR052Ym5OMGNuVmpkRzl5S0NsN1hHNGdJQ0FnSUNBZ0lITjFjR1Z5S0NrN1hHNGdJQ0FnSUNBZ0lIUm9hWE11VW1GdVpHOXRJRDBnY21GdVpHOXRPeUFnSUNCY2JpQWdJQ0I5WEc1OVhHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElHNWxkeUJEWVhWellXeE9aWFJUWVcxd2JHbHVaeWdwT3lJc0ltVjRjRzl5ZENCN0lHUmxabUYxYkhRZ1lYTWdZMkYxYzJGc1RtVjBVMkZ0Y0d4cGJtY2dmU0JtY205dElDY3VMMk5oZFhOaGJFNWxkRk5oYlhCc2FXNW5KenRjYm1WNGNHOXlkQ0I3SUdSbFptRjFiSFFnWVhNZ1UyRnRjR3hwYm1kTmFYaHBibk1nZlNCbWNtOXRJQ2N1TDNOaGJYQnNhVzVuTG0xcGVHbHVjeWM3WEc1Y2JtVjRjRzl5ZENCN0lHUmxabUYxYkhRZ1lYTWdVM1ZpVTJGdGNHeHBibWROYVhocGJuTWdmU0JtY205dElDY3VMM04xWWxOaGJYQnNhVzVuTG0xcGVHbHVjeWM3WEc1bGVIQnZjblFnZXlCa1pXWmhkV3gwSUdGeklFNWxaMU5oYlhCc2FXNW5UV2w0YVc1eklIMGdabkp2YlNBbkxpOXVaV2RUWVcxd2JHbHVaeTV0YVhocGJuTW5PeUlzSW1OdmJuTjBJRTVsWjJGMGFYWmxVMkZ0Y0d4cGJtZE5hWGhwYm5NZ1BTQW9RbUZ6WlZOaGJYQnNhVzVuUTJ4aGMzTXBQVDRnWTJ4aGMzTWdaWGgwWlc1a2N5QkNZWE5sVTJGdGNHeHBibWREYkdGemMzdGNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQlFaWEptYjNKdElHNWxaMkYwYVhabElITmhiWEJzYVc1bklHZHBkbVZ1SUhSb1pTQnpaV3hsWTNRZ2NISnZZaUJ2WmlCcFpITWdZVzVrSUd4cGMzUWdiMllnY0c5emFYUnBkbVVnYzJGdGNHeGxjMXh1SUNBZ0lDQXFJRUJ3WVhKaGJTQjdJRTUxYldKbGNpQjlJRzVsWjJGMGFYWmxVMmw2WlNBdElITnBlbVVnZEc4Z2MyRnRjR3hsWEc0Z0lDQWdJQ29nUUhCaGNtRnRJSHNnUVhKeVlYa2dmU0J3YjNOcGRHbDJaVk5oYlhCc1pYTWdMU0JCY25KaGVTQnZaaUJ3YjNOemFYUnBkbVVnU1dSelhHNGdJQ0FnSUNvZ1FIQmhjbUZ0SUhzZ1FYSnlZWGtnZlNCallXNWthV1JoZEdWUWNtOWljeUF0SUVGeWNtRjVJRzltSUhCeWIySmhZbXhwZEhrZ2IyWWdZMkZ1Wkdsa1lYUmxJRWxrYzF4dUlDQWdJQ0FxSUVCd1lYSmhiU0I3SUVKdmIyeGxZVzRnZlNCYmNtVndiR0ZqWVdKc1pUMTBjblZsWFNBdElHbG1JSFJ5ZFdVc0lHNXZJR1IxY0d4cFkyRjBaV1FnYzJGdGNHeHBibWNnU1dRZ2NtVjBkWEp1WldSY2JpQWdJQ0FnS2lCQWNtVjBkWEp1Y3lCN0lFRnljbUY1SUgwZ1lYSnlZWGtnYjJZZ2MyRnRjR3hsWkNCSlpITmNiaUFnSUNBZ0tpOWNiaUFnSUNCdVpXZFRZVzF3YkdsdVp5aHVaV2RoZEdsMlpWTnBlbVVzSUhCdmMybDBhWFpsVTJGdGNHeGxjeXdnWTJGdVpHbGtZWFJsVUhKdlluTXNJSEpsY0d4aFkyRmliR1U5ZEhKMVpTbDdYRzRnSUNBZ0lDQWdJR052Ym5OMElGSWdQU0IwYUdsekxsSXNJRkpoYm1SdmJTQTlJSFJvYVhNdVVtRnVaRzl0TzF4dUlDQWdJQ0FnSUNCcFppaFNMbUZ1ZVNnb2RpazlQaUFoVWk1MGVYQmxLRTUxYldKbGNpeDJLU0I4ZkNCMklENGdNU0I4ZkNCMklEd2dNQ3dnWTJGdVpHbGtZWFJsVUhKdlluTXBLWHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9jbTkzSUVWeWNtOXlLR0FrZTBwVFQwNHVjM1J5YVc1bmFXWjVLR05oYm1ScFpHRjBaVkJ5YjJKektYMGdhWE1nYm05MElHRnNiRzkzWUNrN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdiR1YwSUhObGJHVjBhVzl1VUhKdlluTWdQU0JTTG5KbFpIVmpaU2dvYzJWc1pXTjBhVzl1VUhKdlluTXNJSEJwWkhncFBUNTdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lITmxiR1ZqZEdsdmJsQnliMkp6VzNCcFpIaGRJRDBnU1c1bWFXNXBkSGs3THk5d2IzTnBkR2wyWlNCallXNWthV1JoZEdVZ2JtVjJaWElnWW1VZ1kyaHZiM05sWkZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdjMlZzWldOMGFXOXVVSEp2WW5NN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmU3dnVWk1amJHOXVaU2hqWVc1a2FXUmhkR1ZRY205aWN5a3NJSEJ2YzJsMGFYWmxVMkZ0Y0d4bGN5azdYRzRnSUNBZ0lDQWdJR3hsZENCellXMXdiR1Z6SUQwZ1cxMHNJSFJoYTJWdVNXUjRjeUE5SUZJdVkyeHZibVVvYzJWc1pYUnBiMjVRY205aWN5azdYRzRnSUNBZ0lDQWdJR052Ym5OMElFZGxiazVsZDBOaGJtUnBaR0YwWlVsa2VDQTlJQ2dwUFQ1U1lXNWtiMjB1YVc1MEtEQXNJSE5sYkdWMGFXOXVVSEp2WW5NdWJHVnVaM1JvTFRFcE8xeHVJQ0FnSUNBZ0lDQmpiMjV6ZENCVFpXeGxZM1JKWmtocFoyaFFjbTlpSUQwZ0tIQnliMklwUFQ1N1hHNGdJQ0FnSUNBZ0lDQWdJQ0JzWlhRZ2NtRnVaQ0E5SUZKaGJtUnZiUzVtYkc5aGRDZ3BPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUhKaGJtUStjSEp2WWp0Y2JpQWdJQ0FnSUNBZ2ZUdGNiaUFnSUNBZ0lDQWdkMmhwYkdVb2MyRnRjR3hsY3k1c1pXNW5kR2dnUENCdVpXZGhkR2wyWlZOcGVtVXBlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2JHVjBJR2xrZUNBOUlFZGxiazVsZDBOaGJtUnBaR0YwWlVsa2VDZ3BPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2JHVjBJSE5sYkdWamRHVmtJRDBnVTJWc1pXTjBTV1pJYVdkb1VISnZZaWh6Wld4bGRHbHZibEJ5YjJKelcybGtlRjBwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lvSVhObGJHVmpkR1ZrS1h0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCamIyNTBhVzUxWlR0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1LQ0Z5WlhCc1lXTmhZbXhsSUNZbUlIUmhhMlZ1U1dSNGMxdHBaSGhkUFQwOWJuVnNiQ2w3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWTI5dWRHbHVkV1U3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJQ0FnSUNCellXMXdiR1Z6SUQwZ1d5NHVMbk5oYlhCc1pYTXNJR2xrZUYwN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlnaGNtVndiR0ZqWVdKc1pTbDdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkR0ZyWlc1SlpIaHpXMmxrZUYwOWJuVnNiRHN2TDI1dmJpQnlaWEJzWVdObFlXSnNaVnh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQjlJQ0FnSUZ4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnYzJGdGNHeGxjenRjYmlBZ0lDQjlYRzU5TzF4dVpYaHdiM0owSUdSbFptRjFiSFFnVG1WbllYUnBkbVZUWVcxd2JHbHVaMDFwZUdsdWN6c2lMQ0pwYlhCdmNuUWdleUJHZFc1amRHOXlJSDBnWm5KdmJTQW5ZMkYxYzJGc0xXNWxkQzVqYjNKbEp6dGNibWx0Y0c5eWRDQjdJR0Z6YzJWeWRDQjlJR1p5YjIwZ0oyTmhkWE5oYkMxdVpYUXVkWFJwYkhNbk8xeHVMeW9xWEc0Z0tpQlVhR2x6SUcxcGVHbHVJR05zWVhOeklIQnliM1pwWkdVZ1lYUjBjbWxpZFhSbGN6b2dLaXBUWVcxd2JHbHVaeW9xTGx4dUlDb2dRR05zWVhOeklGTmhiWEJzYVc1blRXbDRhVzV6WEc0Z0tpQkFaWGgwWlc1a2N5QkNZWE5sUTJ4aGMzTmNiaUFxSUVCbGVHRnRjR3hsWEc0Z0tpQmJSVmhCVFZCTVJTQXVMaTlsZUdGdGNHeGxjeTl6WVcxd2JHbHVaeTV0YVhocGJuTXVZbUZpWld3dWFuTmRYRzRnS2k5Y2JtTnZibk4wSUZOaGJYQnNhVzVuVFdsNGFXNXpJRDBnS0VKaGMyVkRiR0Z6Y3lrOVBpQmpiR0Z6Y3lCbGVIUmxibVJ6SUVKaGMyVkRiR0Z6YzN0Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCblpYUWdZM1Z5Y21WdWRDQnlZVzVrYjIwZ2FXNXpkR0Z1WTJWY2JpQWdJQ0FnS2k5Y2JpQWdJQ0JuWlhRZ1UyRnRjR3hwYm1jb0tYdGNiaUFnSUNBZ0lDQWdhV1lvSVhSb2FYTXVjMkZ0Y0d4cGJtY3BlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHliM2NnUlhKeWIzSW9ZRk5oYlhCc2FXNW5JR2x6SUc1dmRDQnpaWFJnS1R0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2RHaHBjeTV6WVcxd2JHbHVaenRjYmlBZ0lDQjlYRzRnSUNBZ1hHNGdJQ0FnTHlvcVhHNGdJQ0FnSUNvZ2MyVjBJRk5oYlhCc2FXNW5JR2x1YzNSaGJtTmxYRzRnSUNBZ0lDb2dRSEpsWVdSdmJteDVYRzRnSUNBZ0lDb3ZYRzRnSUNBZ2MyVjBJRk5oYlhCc2FXNW5LSE5oYlhCc2FXNW5LWHRjYmlBZ0lDQWdJQ0FnWVhOelpYSjBMbUpsU1c1emRHRnVZMlZQWmloellXMXdiR2x1Wnl3Z1JuVnVZM1J2Y2lrN1hHNGdJQ0FnSUNBZ0lIUm9hWE11YzJGdGNHeHBibWNnUFNCellXMXdiR2x1Wnp0Y2JpQWdJQ0I5WEc1OU8xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQlRZVzF3YkdsdVowMXBlR2x1Y3pzaUxDSmpiMjV6ZENCVGRXSlRZVzF3YkdsdVowMXBlR2x1Y3lBOUlDaENZWE5sVTJGdGNHeHBibWREYkdGemN5a2dQVDRnWTJ4aGMzTWdaWGgwWlc1a2N5QkNZWE5sVTJGdGNHeHBibWREYkdGemMzdGNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQlFaWEptYjNKdElIVnVhV1p2Y20wZ2MyRnRjR3hsSUdFZ2MzVmlJSE5sZENCdlppQkpaSE1nWjJsMlpXNGdkR2hsSUdOaGJtUnBaR0YwWlNCc2FYTjBYRzRnSUNBZ0lDb2dRSEJoY21GdElIc2dUblZ0WW1WeUlIMGdjMkZ0Y0d4cGJtZFRhWHBsWEc0Z0lDQWdJQ29nUUhCaGNtRnRJSHNnUVhKeVlYbDhUblZ0WW1WeUlIMGdZMkZ1Wkdsa1lYUmxUR2x6ZENBdElHeHBjM1FnYjJZZ1kyRnVaR2xrWVhSbGN5QnZjaUJ6YVhwbElHOW1JR05oYm1ScFpHRjBaU0JzYVhOMFhHNGdJQ0FnSUNvZ1FIQmhjbUZ0SUhzZ1FtOXZiR1ZoYmlCOUlGdHlaWEJzWVdOaFlteGxQWFJ5ZFdWZElDMGdhV1lnZEhKMVpTd2dibThnWkhWd2JHbGpZWFJsWkNCellXMXdiR2x1WnlCSlpDQnlaWFIxY201bFpGeHVJQ0FnSUNBcUlFQnlaWFIxY201eklIc2dRWEp5WVhrZ2ZTQmhjbkpoZVNCdlppQnpZVzF3YkdWa0lFbGtjMXh1SUNBZ0lDQXFMMXh1SUNBZ0lITjFZbE5oYlhCc2FXNW5LSE5oYlhCc2FXNW5VMmw2WlN3Z1kyRnVaR2xrWVhSbFRHbHpkQ3dnY21Wd2JHRmpZV0pzWlQxMGNuVmxLWHRjYmlBZ0lDQWdJQ0FnWTI5dWMzUWdVaUE5SUhSb2FYTXVVaXdnVW1GdVpHOXRJRDBnZEdocGN5NVNZVzVrYjIwN1hHNGdJQ0FnSUNBZ0lHeGxkQ0JqWVc1a2FXUmhkR1Z6SUQwZ1FYSnlZWGt1YVhOQmNuSmhlU2hqWVc1a2FXUmhkR1ZNYVhOMEtUOVNMbU5zYjI1bEtHTmhibVJwWkdGMFpVeHBjM1FwT2xJdWNtRnVaMlVvTUN3Z1kyRnVaR2xrWVhSbFRHbHpkQ2s3WEc0Z0lDQWdJQ0FnSUdsbUtHTmhibVJwWkdGMFpYTXViR1Z1WjNSb0lEMDlQU0F3S1h0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJvY205M0lFVnljbTl5S0NkallXNWthV1JoZEdVZ2JHVnVaM1JvSUhOb2IzVnNaQ0JpWlNCd2IzTnBkR2wyWlNjcE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJR3hsZENCellXMXdiR1Z6SUQwZ1cxMHNJSFJoYTJWdVNXUjRjeUE5SUZJdVkyeHZibVVvWTJGdVpHbGtZWFJsY3lrN1hHNGdJQ0FnSUNBZ0lHTnZibk4wSUVkbGJrNWxkME5oYm1ScFpHRjBaVWxrZUNBOUlDZ3BQVDVTWVc1a2IyMHVhVzUwS0RBc0lHTmhibVJwWkdGMFpYTXViR1Z1WjNSb0xURXBPMXh1SUNBZ0lDQWdJQ0IzYUdsc1pTaHpZVzF3YkdWekxteGxibWQwYUNBOElITmhiWEJzYVc1blUybDZaU2w3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnNaWFFnYVdSNElEMGdSMlZ1VG1WM1EyRnVaR2xrWVhSbFNXUjRLQ2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaWdoY21Wd2JHRmpZV0pzWlNBbUppQjBZV3RsYmtsa2VITmJhV1I0WFQwOVBXNTFiR3dwZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdOdmJuUnBiblZsTzF4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0FnSUNBZ2MyRnRjR3hsY3lBOUlGc3VMaTV6WVcxd2JHVnpMQ0JqWVc1a2FXUmhkR1Z6VzJsa2VGMWRPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWW9JWEpsY0d4aFkyRmliR1VwZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhSaGEyVnVTV1I0YzF0cFpIaGRQVzUxYkd3N0x5OXViMjRnY21Wd2JHRmpaV0ZpYkdWY2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZlNBZ0lDQmNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlITmhiWEJzWlhNN1hHNGdJQ0FnZlZ4dWZUdGNibVY0Y0c5eWRDQmtaV1poZFd4MElGTjFZbE5oYlhCc2FXNW5UV2w0YVc1ek95SXNJbTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdYMTlYUlVKUVFVTkxYMFZZVkVWU1RrRk1YMDFQUkZWTVJWOWpZWFZ6WVd4ZmJtVjBYMk52Y21WZlh6c2lMQ0p0YjJSMWJHVXVaWGh3YjNKMGN5QTlJRjlmVjBWQ1VFRkRTMTlGV0ZSRlVrNUJURjlOVDBSVlRFVmZZMkYxYzJGc1gyNWxkRjkxZEdsc2MxOWZPeUlzSW0xdlpIVnNaUzVsZUhCdmNuUnpJRDBnWDE5WFJVSlFRVU5MWDBWWVZFVlNUa0ZNWDAxUFJGVk1SVjl5WVc1a2IyMWZYenNpWFN3aWMyOTFjbU5sVW05dmRDSTZJaUo5IiwiaW1wb3J0IHsgYnVmZmVyVXRpbHMgfSBmcm9tICdjYXVzYWwtbmV0LnV0aWxzJztcbmNvbnN0IEJ1ZmZlclJlYWRlck1peGlucyA9ICggQmFzZURhdGFTb3VyY2UgKSA9PiBjbGFzcyBleHRlbmRzIEJhc2VEYXRhU291cmNlIHtcbiAgICBtYWtlQnVmZmVyUmVhZGVyKGJhc2VMaW5rLCBTcGxpdEZuTGVuc2U9KGQpPT4oZCkpe1xuICAgICAgICByZXR1cm4gYXN5bmMgKGZpbGVOYW1lKSA9PiB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGxldCBjaHVua0RhdGEgPSBbXTtcbiAgICAgICAgICAgIGlmKCBiYXNlTGluay5zdGFydHNXaXRoKCdodHRwJykgKXtcbiAgICAgICAgICAgICAgICBjaHVua0RhdGEgPSBhd2FpdCBidWZmZXJVdGlscy5mZXRjaEJ1ZmZlcihiYXNlTGluayArIGZpbGVOYW1lKTtcbiAgICAgICAgICAgIH0gICAgICAgICAgIFxuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICBjaHVua0RhdGEgPSAgYXdhaXQgYnVmZmVyVXRpbHMucmVhZEJ1ZmZlcihiYXNlTGluayArIGZpbGVOYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBTcGxpdEZuTGVuc2UoY2h1bmtEYXRhKTtcbiAgICAgICAgfTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCdWZmZXJSZWFkZXJNaXhpbnM7IiwiaW1wb3J0IHsgY3N2VXRpbHMgfSBmcm9tICdjYXVzYWwtbmV0LnV0aWxzJztcbmNvbnN0IENTVlJlYWRlck1peGlucyA9ICggQmFzZURhdGFTb3VyY2UgKSA9PiBjbGFzcyBleHRlbmRzIEJhc2VEYXRhU291cmNlIHtcbiAgICBleHRyYWN0aW5nQXR0cmlidXRlKHJvd3MsIHNhbXBsZUF0dHJpYnV0ZXM9W10sIGxhYmVsQXR0cmlidXRlcz1bXSl7XG4gICAgICAgIGxldCBzYW1wbGVzID0gW10sIGxhYmVscyA9IFtdO1xuICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgIGZvcihsZXQgcm93IG9mIHJvd3Mpe1xuICAgICAgICAgICAgaWYoc2FtcGxlQXR0cmlidXRlcy5sZW5ndGgpe1xuICAgICAgICAgICAgICAgIHNhbXBsZXMucHVzaChzYW1wbGVBdHRyaWJ1dGVzLm1hcChrPT5yb3dba10pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKGxhYmVsQXR0cmlidXRlcy5sZW5ndGgpe1xuICAgICAgICAgICAgICAgIGxhYmVscy5wdXNoKGxhYmVsQXR0cmlidXRlcy5tYXAoaz0+cm93W2tdKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYoc2FtcGxlcy5sZW5ndGg+MCAmJiBsYWJlbHMubGVuZ3RoPjApe1xuICAgICAgICAgICAgcmV0dXJuIHtzYW1wbGVzLCBsYWJlbHN9O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoc2FtcGxlcy5sZW5ndGg+MCl7XG4gICAgICAgICAgICByZXR1cm4gc2FtcGxlcztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKGxhYmVscy5sZW5ndGg+MCl7XG4gICAgICAgICAgICByZXR1cm4gbGFiZWxzO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcihgJHtKU09OLnN0cmluZ2lmeShyb3dzKX0gZG8gbm90IG1hdGNoICR7c2FtcGxlQXR0cmlidXRlc30gYW5kICR7bGFiZWxBdHRyaWJ1dGVzfWApO1xuICAgICAgICB9XG4gICAgfVxuICAgIG1ha2VDU1ZSZWFkZXIoYmFzZUxpbmssIHNhbXBsZUF0dHJpYnV0ZXM9W10sIGxhYmVsQXR0cmlidXRlcz1bXSl7XG4gICAgICAgIGlmKCBiYXNlTGluay5zdGFydHNXaXRoKCdodHRwJykgKXtcbiAgICAgICAgICAgIHJldHVybiBhc3luYyAoZmlsZU5hbWUpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgcm93cyA9IGF3YWl0IGNzdlV0aWxzLmZldGNoQ1NWKGJhc2VMaW5rICsgZmlsZU5hbWUpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmV4dHJhY3RpbmdBdHRyaWJ1dGUocm93cywgc2FtcGxlQXR0cmlidXRlcywgbGFiZWxBdHRyaWJ1dGVzKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIHJldHVybiBhc3luYyAoZmlsZU5hbWUpID0+IHsgXG4gICAgICAgICAgICAgICAgbGV0IHJvd3MgPSBhd2FpdCBjc3ZVdGlscy5yZWFkQ1NWKGJhc2VMaW5rICsgZmlsZU5hbWUpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmV4dHJhY3RpbmdBdHRyaWJ1dGUocm93cywgc2FtcGxlQXR0cmlidXRlcywgbGFiZWxBdHRyaWJ1dGVzKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDU1ZSZWFkZXJNaXhpbnM7IiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBQTkdSZWFkZXJNaXhpbnMgfSBmcm9tICcuL3BuZ1JlYWRlci5taXhpbnMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBDU1ZSZWFkZXJNaXhpbnMgfSBmcm9tICcuL2NzdlJlYWRlci5taXhpbnMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBCdWZmZXJSZWFkZXJNaXhpbnMgfSBmcm9tICcuL2J1ZmZlclJlYWRlci5taXhpbnMnOyIsImltcG9ydCB7IHBuZ1V0aWxzIH0gZnJvbSAnY2F1c2FsLW5ldC51dGlscyc7XG5jb25zdCBQTkdSZWFkZXJNaXhpbnMgPSAoIEJhc2VEYXRhU291cmNlICkgPT4gY2xhc3MgZXh0ZW5kcyBCYXNlRGF0YVNvdXJjZSB7XG4gICAgbWFrZVBOR1JlYWRlcihiYXNlTGluaywgU3BsaXRGbkxlbnNlPShkKT0+KGQpKXtcbiAgICAgICAgcmV0dXJuIGFzeW5jIChmaWxlTmFtZSkgPT4geyBcbiAgICAgICAgICAgIGxldCBjaHVua0RhdGEgPSBbXTtcbiAgICAgICAgICAgIGlmKCBiYXNlTGluay5zdGFydHNXaXRoKCdodHRwJykgKXtcbiAgICAgICAgICAgICAgICBjaHVua0RhdGEgPSBhd2FpdCBwbmdVdGlscy5mZXRjaFBORyhiYXNlTGluayArIGZpbGVOYW1lKTsgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIGNodW5rRGF0YSA9IGF3YWl0IHBuZ1V0aWxzLnJlYWRQTkcoYmFzZUxpbmsgKyBmaWxlTmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gU3BsaXRGbkxlbnNlKGNodW5rRGF0YSk7XG4gICAgICAgIH07XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgUE5HUmVhZGVyTWl4aW5zOyIsImltcG9ydCB7IEV2ZW50IH0gZnJvbSAnY2F1c2FsLW5ldC5jb3JlJztcbmltcG9ydCB7IGRlZmF1bHQgYXMgZnVuY3RvciB9IGZyb20gJy4vZnVuY3Rvcic7XG5pbXBvcnQgeyBwbGF0Zm9ybSwganNvblV0aWxzIH0gZnJvbSAnY2F1c2FsLW5ldC51dGlscyc7XG5pbXBvcnQgeyBjYXVzYWxOZXRTYW1wbGluZywgU2FtcGxpbmdNaXhpbnMgfSBmcm9tICdjYXVzYWwtbmV0LnNhbXBsaW5nJztcbmltcG9ydCB7IFBOR1JlYWRlck1peGlucywgQnVmZmVyUmVhZGVyTWl4aW5zLCBDU1ZSZWFkZXJNaXhpbnMgfSBmcm9tICcuL1JlYWRlcnMvaW5pdCc7XG5pbXBvcnQgeyB0ZXJtTG9nZ2VyLCBMb2dnZXJNaXhpbnMgfSBmcm9tICdjYXVzYWwtbmV0LmxvZyc7XG4vKipcbiAqIFRoaXMgQ2F1c2FsTmV0RGF0YVNvdXJjZSBjbGFzcyBwcm92aWRlcyBhIHN0YW5kYXJkIGltcGxlbWVudGF0aW9uIGZvciBwaXBlbGluZSBTb3VyY2UuXG4gKiB7IG1peFdpdGg6IFsgU2FtcGxpbmdNaXhpbnMsIFBOR1JlYWRlck1peGlucywgQnVmZmVyUmVhZGVyTWl4aW5zIF19XG4gKiBAY2xhc3MgQ2F1c2FsTmV0RGF0YVNvdXJjZVxuICogQGV4dGVuZHMgRXZlbnRcbiAqIEBleHBlcmltZW50XG4gKiBAZXhhbXBsZVxuICogW0VYQU1QTEUgLi4vZXhhbXBsZXMvY2F1c2FsTmV0RGF0YVNvdXJjZS5qc11cbiAqL1xuY2xhc3MgQ2F1c2FsTmV0RGF0YVNvdXJjZSBleHRlbmRzIHBsYXRmb3JtLm1peFdpdGgoIEV2ZW50LCBbXG4gICAgU2FtcGxpbmdNaXhpbnMsIFBOR1JlYWRlck1peGlucywgQ1NWUmVhZGVyTWl4aW5zLCBMb2dnZXJNaXhpbnMsIEJ1ZmZlclJlYWRlck1peGlucyBdICl7XG4gICAgLyoqXG4gICAgICpDcmVhdGVzIGFuIGluc3RhbmNlIG9mIENhdXNhbE5ldERhdGFTb3VyY2UuXG4gICAgICogQHBhcmFtIHtGdW5jdG9yfSBmdW5jdG9yXG4gICAgICogQHBhcmFtIHtGdW5jdG9yfSBzYW1wbGluZ1xuICAgICAqIEBtZW1iZXJvZiBDYXVzYWxOZXREYXRhU291cmNlXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoZnVuY3RvciwgbG9nZ2VyLCBzYW1wbGluZyl7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuRiA9IGZ1bmN0b3I7XG4gICAgICAgIHRoaXMuUiA9IGZ1bmN0b3IuQ29yZUZ1bmN0b3I7XG4gICAgICAgIHRoaXMuTG9nZ2VyID0gbG9nZ2VyO1xuICAgICAgICB0aGlzLlNhbXBsaW5nID0gc2FtcGxpbmc7XG4gICAgfVxuXG4gICAgYXN5bmMgY29ubmVjdChiYXNlTGluayl7XG4gICAgICAgIGlmKCFiYXNlTGluayl7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcihgZXhwZWN0IGJhc2VMaW5rIGdldCAke0pTT04uc3RyaW5naWZ5KGJhc2VMaW5rKX1gKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgZGVzY3JpcHRpb25MaW5rID0gYmFzZUxpbmsgKyAnL2RhdGFzZXQuc3VtbWFyeS5qc29uJztcblxuICAgICAgICB0aGlzLkxvZ2dlci5ncm91cEJlZ2luKCdxdWVyeSBkYXRhc291cmNlJyk7XG4gICAgICAgIHRoaXMuTG9nZ2VyLmxvZyh7ZGVzY3JpcHRpb25MaW5rfSk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gYXdhaXQgdGhpcy5xdWVyeShkZXNjcmlwdGlvbkxpbmspO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uLkJhc2VMaW5rID0gYmFzZUxpbms7XG4gICAgICAgIHRoaXMuc2V0Q2h1bmtzKHRoaXMuZGVzY3JpcHRpb24pO1xuICAgICAgICB0aGlzLnNldFNhbXBsZVNpemUodGhpcy5kZXNjcmlwdGlvbik7XG4gICAgICAgIHRoaXMuc2V0TGFiZWxTaXplKHRoaXMuZGVzY3JpcHRpb24pO1xuICAgICAgICB0aGlzLnNldERhdGFSZWFkZXIodGhpcy5kZXNjcmlwdGlvbik7XG4gICAgICAgIHRoaXMuTG9nZ2VyLmdyb3VwRW5kKCk7XG4gICAgICAgIHJldHVybiB0aGlzLmRlc2NyaXB0aW9uO1xuICAgIH1cbiAgICBcblxuICAgIC8qKlxuICAgICAqIGZldGNoIG9yIHJlYWQgY29uZmlndXJlIGRlcGVuZHMgb24gcHJvdmllZCBsaW5rIGZvcm1hdFxuICAgICAqIEBwYXJhbSB7Kn0gbGlua1xuICAgICAqIEByZXR1cm5zXG4gICAgICogQG1lbWJlcm9mIENhdXNhbE5ldEVtYmVkZGluZ1xuICAgICAqL1xuICAgIGFzeW5jIHF1ZXJ5KGxpbmspe1xuICAgICAgICBpZihsaW5rLnN0YXJ0c1dpdGgoJ2h0dHAnKSl7XG4gICAgICAgICAgICByZXR1cm4gYXdhaXQganNvblV0aWxzLmZldGNoSlNPTihsaW5rKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGpzb25VdGlscy5yZWFkSlNPTihsaW5rKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldCBEYXRhQ2h1bmtzKCl7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFDaHVua3M7XG4gICAgfVxuXG4gICAgZ2V0IFNhbXBsZVJlYWRlcigpe1xuICAgICAgICByZXR1cm4gdGhpcy5zYW1wbGVSZWFkZXI7XG4gICAgfVxuXG4gICAgZ2V0IExhYmVsUmVhZGVyKCl7XG4gICAgICAgIHJldHVybiB0aGlzLmxhYmVsUmVhZGVyO1xuICAgIH1cblxuICAgIGdldCBEYXRhUmVhZGVyKCl7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFSZWFkZXI7XG4gICAgfVxuXG4gICAgZ2V0IFNhbXBsZVNpemUoKXtcbiAgICAgICAgaWYoIXRoaXMuc2FtcGxlU2l6ZSl7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignU2FtcGxlU2l6ZSBpcyBub3Qgc2V0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuc2FtcGxlU2l6ZTtcbiAgICB9XG5cbiAgICBnZXQgTGFiZWxTaXplKCl7XG4gICAgICAgIGlmKCF0aGlzLmxhYmVsU2l6ZSl7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignbGFiZWxTaXplIGlzIG5vdCBzZXQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5sYWJlbFNpemU7XG4gICAgfVxuXG4gICAgc2V0U2FtcGxlU2l6ZShkZXNjcmlwdGlvbil7XG4gICAgICAgIGxldCB7IFNhbXBsZVNpemUgfSA9IGRlc2NyaXB0aW9uO1xuICAgICAgICBpZighU2FtcGxlU2l6ZSl7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcihgZXhwZWN0IHsgU2FtcGxlU2l6ZSB9ICBnZXQgJHtKU09OLnN0cmluZ2lmeShkZXNjcmlwdGlvbiwgbnVsbCwgNCl9YCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYoQXJyYXkuaXNBcnJheShTYW1wbGVTaXplKSl7XG4gICAgICAgICAgICB0aGlzLnNhbXBsZVNpemUgPSBTYW1wbGVTaXplLnJlZHVjZSgocyxkKT0+cypkKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgdGhpcy5zYW1wbGVTaXplID0gU2FtcGxlU2l6ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldExhYmVsU2l6ZShkZXNjcmlwdGlvbil7XG4gICAgICAgIGxldCB7IExhYmVsU2l6ZSB9ID0gZGVzY3JpcHRpb247XG4gICAgICAgIGlmKCFMYWJlbFNpemUpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoYGV4cGVjdCB7IExhYmVsU2l6ZSB9ICBnZXQgJHtKU09OLnN0cmluZ2lmeShkZXNjcmlwdGlvbiwgbnVsbCwgNCl9YCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYoQXJyYXkuaXNBcnJheShMYWJlbFNpemUpKXtcbiAgICAgICAgICAgIHRoaXMubGFiZWxTaXplID0gTGFiZWxTaXplLnJlZHVjZSgocyxkKT0+cypkKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgdGhpcy5sYWJlbFNpemUgPSBMYWJlbFNpemU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRDaHVua3MoZGVzY3JpcHRpb24pe1xuICAgICAgICBjb25zdCB7IFNhbXBsZUNodW5rTmFtZSwgTGFiZWxDaHVua05hbWUsIENodW5rTGlzdCB9ID0gZGVzY3JpcHRpb247XG4gICAgICAgIGlmKCFTYW1wbGVDaHVua05hbWUgfHwgIUxhYmVsQ2h1bmtOYW1lIHx8ICFDaHVua0xpc3QgKXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKGBleHBlY3Qge1NhbXBsZUNodW5rTmFtZSwgTGFiZWxDaHVua05hbWUsIENodW5rTGlzdH0gZ2V0ICR7SlNPTi5zdHJpbmdpZnkoZGVzY3JpcHRpb24pfWApO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGF0YUNodW5rcyA9IENodW5rTGlzdC5tYXAoIGNpZHg9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgIENodW5rTmFtZTogY2lkeCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgU2FtcGxlOiBTYW1wbGVDaHVua05hbWUucmVwbGFjZSgne30nLCBjaWR4KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgTGFiZWw6IExhYmVsQ2h1bmtOYW1lLnJlcGxhY2UoJ3t9JywgY2lkeCkgIH07XG4gICAgICAgICAgICB9KTtcbiAgICB9XG4gICAgXG4gICAgc2V0RGF0YVJlYWRlcihkZXNjcmlwdGlvbil7XG4gICAgICAgIGNvbnN0IFNhbXBsZVR5cGUgPSBkZXNjcmlwdGlvbi5TYW1wbGVUeXBlO1xuICAgICAgICBjb25zdCBMYWJlbFR5cGUgPSBkZXNjcmlwdGlvbi5MYWJlbFR5cGU7XG4gICAgICAgIGNvbnN0IERhdGFUeXBlID0gZGVzY3JpcHRpb24uRGF0YVR5cGU7XG4gICAgICAgIGNvbnN0IEJhc2VMaW5rID0gZGVzY3JpcHRpb24uQmFzZUxpbms7XG4gICAgICAgIGlmKFNhbXBsZVR5cGUgPT09ICdJbWFnZS9QTkcnKXtcbiAgICAgICAgICAgIGNvbnN0IFNwbGl0Rm5MZW5zZXMgPSAoZCk9Pih0aGlzLnNwbGl0U2FtcGxlKGQpKTtcbiAgICAgICAgICAgIHRoaXMuc2FtcGxlUmVhZGVyID0gdGhpcy5tYWtlUE5HUmVhZGVyKEJhc2VMaW5rLCBTcGxpdEZuTGVuc2VzKTtcbiAgICAgICAgfVxuICAgICAgICBpZihMYWJlbFR5cGUgPT09ICdCdWZmZXIvT25lSG90Jyl7XG4gICAgICAgICAgICBjb25zdCBTcGxpdEZuTGVuc2VzID0gKGQpPT4odGhpcy5zcGxpdExhYmVsKGQpKTtcbiAgICAgICAgICAgIHRoaXMubGFiZWxSZWFkZXIgPSB0aGlzLm1ha2VCdWZmZXJSZWFkZXIoQmFzZUxpbmssIFNwbGl0Rm5MZW5zZXMpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IFNhbXBsZUF0dHJpYnV0ZXMgPSBkZXNjcmlwdGlvbi5TYW1wbGVBdHRyaWJ1dGVzO1xuICAgICAgICBjb25zdCBMYWJlbEF0dHJpYnV0ZXMgPSBkZXNjcmlwdGlvbi5MYWJlbEF0dHJpYnV0ZXM7XG4gICAgICAgIGlmKFNhbXBsZVR5cGUgPT09ICdUZXh0L0NTVicpe1xuICAgICAgICAgICAgdGhpcy5zYW1wbGVSZWFkZXIgPSB0aGlzLm1ha2VDU1ZSZWFkZXIoQmFzZUxpbmssIFNhbXBsZUF0dHJpYnV0ZXMsIG51bGwpO1xuICAgICAgICB9XG4gICAgICAgIGlmKExhYmVsVHlwZSA9PT0gJ1RleHQvQ1NWJyl7XG4gICAgICAgICAgICB0aGlzLmxhYmVsUmVhZGVyID0gdGhpcy5tYWtlQ1NWUmVhZGVyKEJhc2VMaW5rLCBudWxsLCBMYWJlbEF0dHJpYnV0ZXMpO1xuICAgICAgICB9XG4gICAgICAgIGlmKERhdGFUeXBlID09PSAnVGV4dC9DU1YnKXtcbiAgICAgICAgICAgIHRoaXMuZGF0YVJlYWRlciA9IHRoaXMubWFrZUNTVlJlYWRlcihCYXNlTGluaywgU2FtcGxlQXR0cmlidXRlcywgTGFiZWxBdHRyaWJ1dGVzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNwbGl0U2FtcGxlKGRhdGEpe1xuICAgICAgICBjb25zdCBTYW1wbGVTaXplID0gdGhpcy5TYW1wbGVTaXplO1xuICAgICAgICByZXR1cm4gdGhpcy5SLnNwbGl0RXZlcnkoU2FtcGxlU2l6ZSwgZGF0YSk7XG4gICAgfVxuXG4gICAgc3BsaXRMYWJlbChkYXRhKXtcbiAgICAgICAgY29uc3QgTGFiZWxTaXplID0gdGhpcy5MYWJlbFNpemU7XG4gICAgICAgIHJldHVybiB0aGlzLlIuc3BsaXRFdmVyeShMYWJlbFNpemUsIGRhdGEpO1xuICAgIH1cblxuICAgIGNodW5rU2VsZWN0KG51bUNodW5rcyl7XG4gICAgICAgIGxldCBjaHVua0xpc3QgPSB0aGlzLkRhdGFDaHVua3M7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRDaHVua3MgPSB0aGlzLlNhbXBsaW5nLnN1YlNhbXBsaW5nKG51bUNodW5rcywgY2h1bmtMaXN0LCBmYWxzZSk7XG4gICAgICAgIHJldHVybiB0aGlzLnNlbGVjdGVkQ2h1bmtzO1xuICAgIH1cblxuICAgIHJlYWQoKXtcbiAgICAgICAgaWYoIXRoaXMuc2VsZWN0ZWRDaHVua3Mpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ3NlbGVjdENodW5rcyBpcyBub3QgY2FsbCcpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBzZWxlY3RlZENodW5rcyA9IHRoaXMuc2VsZWN0ZWRDaHVua3M7XG4gICAgICAgIGNvbnN0IFNhbXBsZVJlYWRlciA9IHRoaXMuU2FtcGxlUmVhZGVyO1xuICAgICAgICBjb25zdCBMYWJlbFJlYWRlciA9IHRoaXMuTGFiZWxSZWFkZXI7XG4gICAgICAgIGNvbnN0IERhdGFSZWFkZXIgPSB0aGlzLkRhdGFSZWFkZXI7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSwgcmVqZWN0KT0+e1xuICAgICAgICAgICAgbGV0IHNhbXBsZURhdGEgPSBbXSwgbGFiZWxEYXRhID0gW107XG4gICAgICAgICAgICBmb3IobGV0IHsgU2FtcGxlLCBMYWJlbCwgQ2h1bmtOYW1lIH0gb2Ygc2VsZWN0ZWRDaHVua3MgKXtcbiAgICAgICAgICAgICAgICBpZihTYW1wbGUgPT09IExhYmVsKXtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSBhd2FpdCBEYXRhUmVhZGVyKFNhbXBsZSk7XG4gICAgICAgICAgICAgICAgICAgIHNhbXBsZURhdGEgPSBkYXRhLnNhbXBsZXM7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsRGF0YSA9IGRhdGEubGFiZWxzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICBzYW1wbGVEYXRhID0gYXdhaXQgU2FtcGxlUmVhZGVyKFNhbXBsZSk7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsRGF0YSA9IGF3YWl0IExhYmVsUmVhZGVyKExhYmVsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYoc2FtcGxlRGF0YS5sZW5ndGggIT09IGxhYmVsRGF0YS5sZW5ndGgpe1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoJ2xlbmd0aHMgb2Ygc2FtcGxlIGFuZCBsYWJlbCBhcmUgbm90IHRoZSBzYW1lJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuTG9nZ2VyLmxvZyh7J3JlYWQnOiBbc2FtcGxlRGF0YS5sZW5ndGgsIGxhYmVsRGF0YS5sZW5ndGhdfSk7XG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5lbWl0KCdkYXRhJywgeyAnU2FtcGxlJzogc2FtcGxlRGF0YSwgJ0xhYmVsJzogbGFiZWxEYXRhLCAgQ2h1bmtOYW1lIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzb2x2ZShzZWxlY3RlZENodW5rcy5sZW5ndGgpO1xuICAgICAgICB9KTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBuZXcgQ2F1c2FsTmV0RGF0YVNvdXJjZShmdW5jdG9yLCB0ZXJtTG9nZ2VyLCBjYXVzYWxOZXRTYW1wbGluZyk7IiwiLyoqXG4gKiBUaGlzIHBpcGVsaW5lIG1peGluIHByb3ZpZGVzIERhdGFTb3VyY2VSZWFkZXIgYXR0aWJ1dGUsIHNvdXJjZSByZWFkaW5nIG1ldGhvZHMgZm9yIHBpcGVsaW5lIFxuICogYW5kIGdldHRpbmcgU291cmNlIGluIHBpcGVsaW5lQ29uZmlnXG4gKiBAY2xhc3MgRGF0YVNvdXJjZU1peGluc1xuICogQGV4dGVuZHMgRXZlbnRcbiAqIEBleGFtcGxlXG4gKiBbRVhBTVBMRSAuLi9leGFtcGxlcy9kYXRhc2V0Lm1peGlucy5iYWJlbC5qc11cbiAqL1xuY29uc3QgRGF0YVNvdXJjZU1peGlucyA9IChCYXNlUGlwZWxpbmVDbGFzcyk9PiBjbGFzcyBleHRlbmRzIEJhc2VQaXBlbGluZUNsYXNzIHtcbiAgIFxuICAgIHNldCBEYXRhU291cmNlUmVhZGVyKHNvdXJjZVJlYWRlcil7XG4gICAgICAgIHRoaXMuc291cmNlUmVhZGVyID0gc291cmNlUmVhZGVyO1xuICAgIH1cblxuICAgIGdldCBEYXRhU291cmNlUmVhZGVyKCl7XG4gICAgICAgIHJldHVybiB0aGlzLnNvdXJjZVJlYWRlcjtcbiAgICB9XG5cbiAgICBzZXRCeUNvbmZpZyhwaXBlbGluZUNvbmZpZyl7XG4gICAgICAgIGlmKHN1cGVyLnNldEJ5Q29uZmlnKXtcbiAgICAgICAgICAgIHN1cGVyLnNldEJ5Q29uZmlnKHBpcGVsaW5lQ29uZmlnKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLkxvZ2dlci5ncm91cEJlZ2luKCdzZXQgU291cmNlIGJ5IGNvbmZpZycpO1xuICAgICAgICBjb25zdCB7IFNvdXJjZSB9ID0gcGlwZWxpbmVDb25maWcuRGF0YXNldDtcbiAgICAgICAgaWYoU291cmNlKXtcbiAgICAgICAgICAgIHRoaXMuRGF0YVNvdXJjZVJlYWRlciA9IFNvdXJjZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgdGhpcy5EYXRhU291cmNlUmVhZGVyID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuTG9nZ2VyLmxvZygnKioqU291cmNlIGlzIG5vdCBkZWZpbmVkIFxcbicgKyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnKioqVHJhaW5EYXRhR2VuZXJhdG9yIGFuZCBUZXN0RGF0YUdlbmVyYXRvciBtdXN0IGJlIHNldCBtYW51YWxseScpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuTG9nZ2VyLmdyb3VwRW5kKCk7XG4gICAgICAgIHJldHVybiBwaXBlbGluZUNvbmZpZztcbiAgICB9XG5cbiAgICBhc3luYyByZWFkKG51bUNodW5rcyl7XG4gICAgICAgIGxldCBzZWxlY3RlZENodW5rID0gdGhpcy5EYXRhU291cmNlUmVhZGVyLmNodW5rU2VsZWN0KG51bUNodW5rcyk7XG4gICAgICAgIHRoaXMuTG9nZ2VyLmxvZyh7J3NlbGVjdCBjaHVua3MnOiBzZWxlY3RlZENodW5rfSk7XG4gICAgICAgIGF3YWl0IHRoaXMuRGF0YVNvdXJjZVJlYWRlci5yZWFkKCk7XG4gICAgICAgIHJldHVybiB0aGlzLlByZXByb2Nlc3NpbmcuUHJlcHJvY2Vzc2luZ0RhdGE7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgRGF0YVNvdXJjZU1peGluczsiLCJpbXBvcnQgeyBGdW5jdG9yIH0gZnJvbSAnY2F1c2FsLW5ldC5jb3JlJztcbmV4cG9ydCBkZWZhdWx0IG5ldyBGdW5jdG9yKCk7IiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBjYXVzYWxOZXREYXRhU291cmNlIH0gZnJvbSAnLi9jYXVzYWxOZXREYXRhU291cmNlJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRGF0YVNvdXJjZU1peGlucyB9IGZyb20gJy4vZGF0YVNvdXJjZS5taXhpbnMnOyIsIi8qIChpZ25vcmVkKSAqLyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9sb2dfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF91dGlsc19fOyJdLCJzb3VyY2VSb290IjoiIn0=