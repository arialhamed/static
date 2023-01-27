(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("causal-net.core"), require("causal-net.log"), require("causal-net.utils"));
	else if(typeof define === 'function' && define.amd)
		define(["causal-net.core", "causal-net.log", "causal-net.utils"], factory);
	else if(typeof exports === 'object')
		exports["@causalNet/datasets"] = factory(require("causal-net.core"), require("causal-net.log"), require("causal-net.utils"));
	else
		root["@causalNet/datasets"] = factory(root["causal-net.core"], root["causal-net.log"], root["causal-net.utils"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_causal_net_core__, __WEBPACK_EXTERNAL_MODULE_causal_net_log__, __WEBPACK_EXTERNAL_MODULE_causal_net_utils__) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RhdGFzZXRzL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RhdGFzZXRzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGF0YXNldHMvL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvb3ctbGl0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RhdGFzZXRzLy9ob21lL2h1eW5obmd1eWVuL2dpdGh1Yi9jYXVzYWxpdHkvbm9kZV9tb2R1bGVzL293LWxpdGUvbGliL251bWJlci5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RhdGFzZXRzLy9ob21lL2h1eW5obmd1eWVuL2dpdGh1Yi9jYXVzYWxpdHkvbm9kZV9tb2R1bGVzL293LWxpdGUvbGliL29iamVjdC5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RhdGFzZXRzLy9ob21lL2h1eW5obmd1eWVuL2dpdGh1Yi9jYXVzYWxpdHkvbm9kZV9tb2R1bGVzL293LWxpdGUvbGliL3N0cmluZy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RhdGFzZXRzLy9ob21lL2h1eW5obmd1eWVuL2dpdGh1Yi9jYXVzYWxpdHkvbm9kZV9tb2R1bGVzL293LWxpdGUvbGliL3N5bWJvbHMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9kYXRhc2V0cy8vaG9tZS9odXluaG5ndXllbi9naXRodWIvY2F1c2FsaXR5L25vZGVfbW9kdWxlcy9yYW5kb20vZGlzdC9kaXN0cmlidXRpb25zL2JhdGVzLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGF0YXNldHMvL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvcmFuZG9tL2Rpc3QvZGlzdHJpYnV0aW9ucy9iZXJub3VsbGkuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9kYXRhc2V0cy8vaG9tZS9odXluaG5ndXllbi9naXRodWIvY2F1c2FsaXR5L25vZGVfbW9kdWxlcy9yYW5kb20vZGlzdC9kaXN0cmlidXRpb25zL2Jpbm9taWFsLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGF0YXNldHMvL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvcmFuZG9tL2Rpc3QvZGlzdHJpYnV0aW9ucy9leHBvbmVudGlhbC5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RhdGFzZXRzLy9ob21lL2h1eW5obmd1eWVuL2dpdGh1Yi9jYXVzYWxpdHkvbm9kZV9tb2R1bGVzL3JhbmRvbS9kaXN0L2Rpc3RyaWJ1dGlvbnMvZ2VvbWV0cmljLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGF0YXNldHMvL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvcmFuZG9tL2Rpc3QvZGlzdHJpYnV0aW9ucy9pcndpbi1oYWxsLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGF0YXNldHMvL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvcmFuZG9tL2Rpc3QvZGlzdHJpYnV0aW9ucy9sb2ctbm9ybWFsLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGF0YXNldHMvL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvcmFuZG9tL2Rpc3QvZGlzdHJpYnV0aW9ucy9ub3JtYWwuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9kYXRhc2V0cy8vaG9tZS9odXluaG5ndXllbi9naXRodWIvY2F1c2FsaXR5L25vZGVfbW9kdWxlcy9yYW5kb20vZGlzdC9kaXN0cmlidXRpb25zL3BhcmV0by5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RhdGFzZXRzLy9ob21lL2h1eW5obmd1eWVuL2dpdGh1Yi9jYXVzYWxpdHkvbm9kZV9tb2R1bGVzL3JhbmRvbS9kaXN0L2Rpc3RyaWJ1dGlvbnMvcG9pc3Nvbi5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RhdGFzZXRzLy9ob21lL2h1eW5obmd1eWVuL2dpdGh1Yi9jYXVzYWxpdHkvbm9kZV9tb2R1bGVzL3JhbmRvbS9kaXN0L2Rpc3RyaWJ1dGlvbnMvdW5pZm9ybS1ib29sZWFuLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGF0YXNldHMvL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvcmFuZG9tL2Rpc3QvZGlzdHJpYnV0aW9ucy91bmlmb3JtLWludC5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RhdGFzZXRzLy9ob21lL2h1eW5obmd1eWVuL2dpdGh1Yi9jYXVzYWxpdHkvbm9kZV9tb2R1bGVzL3JhbmRvbS9kaXN0L2Rpc3RyaWJ1dGlvbnMvdW5pZm9ybS5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RhdGFzZXRzLy9ob21lL2h1eW5obmd1eWVuL2dpdGh1Yi9jYXVzYWxpdHkvbm9kZV9tb2R1bGVzL3JhbmRvbS9kaXN0L2dlbmVyYXRvcnMvZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9kYXRhc2V0cy8vaG9tZS9odXluaG5ndXllbi9naXRodWIvY2F1c2FsaXR5L25vZGVfbW9kdWxlcy9yYW5kb20vZGlzdC9yYW5kb20uanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9kYXRhc2V0cy8vaG9tZS9odXluaG5ndXllbi9naXRodWIvY2F1c2FsaXR5L25vZGVfbW9kdWxlcy9yYW5kb20vZGlzdC9ybmctZmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RhdGFzZXRzLy9ob21lL2h1eW5obmd1eWVuL2dpdGh1Yi9jYXVzYWxpdHkvbm9kZV9tb2R1bGVzL3JhbmRvbS9kaXN0L3JuZy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RhdGFzZXRzLy9ob21lL2h1eW5obmd1eWVuL2dpdGh1Yi9jYXVzYWxpdHkvbm9kZV9tb2R1bGVzL3JhbmRvbS9pbmRleC5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RhdGFzZXRzLy9ob21lL2h1eW5obmd1eWVuL2dpdGh1Yi9jYXVzYWxpdHkvbm9kZV9tb2R1bGVzL3NlZWRyYW5kb20vaW5kZXguanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9kYXRhc2V0cy8vaG9tZS9odXluaG5ndXllbi9naXRodWIvY2F1c2FsaXR5L25vZGVfbW9kdWxlcy9zZWVkcmFuZG9tL2xpYi9hbGVhLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGF0YXNldHMvL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvc2VlZHJhbmRvbS9saWIvdHljaGVpLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGF0YXNldHMvL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvc2VlZHJhbmRvbS9saWIveG9yMTI4LmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGF0YXNldHMvL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvc2VlZHJhbmRvbS9saWIveG9yNDA5Ni5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RhdGFzZXRzLy9ob21lL2h1eW5obmd1eWVuL2dpdGh1Yi9jYXVzYWxpdHkvbm9kZV9tb2R1bGVzL3NlZWRyYW5kb20vbGliL3hvcnNoaWZ0Ny5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RhdGFzZXRzLy9ob21lL2h1eW5obmd1eWVuL2dpdGh1Yi9jYXVzYWxpdHkvbm9kZV9tb2R1bGVzL3NlZWRyYW5kb20vbGliL3hvcndvdy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RhdGFzZXRzLy9ob21lL2h1eW5obmd1eWVuL2dpdGh1Yi9jYXVzYWxpdHkvbm9kZV9tb2R1bGVzL3NlZWRyYW5kb20vc2VlZHJhbmRvbS5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RhdGFzZXRzLyh3ZWJwYWNrKS9idWlsZGluL2FtZC1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9kYXRhc2V0cy8od2VicGFjaykvYnVpbGRpbi9hbWQtb3B0aW9ucy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RhdGFzZXRzLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RhdGFzZXRzLy4uL2NhdXNhbGl0eS1zYW1wbGluZy9kaXN0L0BjYXVzYWxOZXQvc2FtcGxpbmcud2ViLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGF0YXNldHMvLi9zcmMvUmVhZGVycy9idWZmZXJSZWFkZXIubWl4aW5zLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGF0YXNldHMvLi9zcmMvUmVhZGVycy9jc3ZSZWFkZXIubWl4aW5zLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGF0YXNldHMvLi9zcmMvUmVhZGVycy9pbml0LmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGF0YXNldHMvLi9zcmMvUmVhZGVycy9wbmdSZWFkZXIubWl4aW5zLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGF0YXNldHMvLi9zcmMvY2F1c2FsTmV0RGF0YVNvdXJjZS5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RhdGFzZXRzLy4vc3JjL2RhdGFTb3VyY2UubWl4aW5zLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGF0YXNldHMvLi9zcmMvZnVuY3Rvci5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RhdGFzZXRzLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGF0YXNldHMvY3J5cHRvIChpZ25vcmVkKSIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RhdGFzZXRzL2V4dGVybmFsIFwiY2F1c2FsLW5ldC5jb3JlXCIiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9kYXRhc2V0cy9leHRlcm5hbCBcImNhdXNhbC1uZXQubG9nXCIiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9kYXRhc2V0cy9leHRlcm5hbCBcImNhdXNhbC1uZXQudXRpbHNcIiJdLCJuYW1lcyI6WyJCdWZmZXJSZWFkZXJNaXhpbnMiLCJCYXNlRGF0YVNvdXJjZSIsIm1ha2VCdWZmZXJSZWFkZXIiLCJiYXNlTGluayIsIlNwbGl0Rm5MZW5zZSIsImQiLCJmaWxlTmFtZSIsImNodW5rRGF0YSIsInN0YXJ0c1dpdGgiLCJidWZmZXJVdGlscyIsImZldGNoQnVmZmVyIiwicmVhZEJ1ZmZlciIsIkNTVlJlYWRlck1peGlucyIsImV4dHJhY3RpbmdBdHRyaWJ1dGUiLCJyb3dzIiwic2FtcGxlQXR0cmlidXRlcyIsImxhYmVsQXR0cmlidXRlcyIsInNhbXBsZXMiLCJsYWJlbHMiLCJpIiwicm93IiwibGVuZ3RoIiwicHVzaCIsIm1hcCIsImsiLCJFcnJvciIsIkpTT04iLCJzdHJpbmdpZnkiLCJtYWtlQ1NWUmVhZGVyIiwiY3N2VXRpbHMiLCJmZXRjaENTViIsInJlYWRDU1YiLCJQTkdSZWFkZXJNaXhpbnMiLCJtYWtlUE5HUmVhZGVyIiwicG5nVXRpbHMiLCJmZXRjaFBORyIsInJlYWRQTkciLCJDYXVzYWxOZXREYXRhU291cmNlIiwicGxhdGZvcm0iLCJtaXhXaXRoIiwiRXZlbnQiLCJTYW1wbGluZ01peGlucyIsIkxvZ2dlck1peGlucyIsImNvbnN0cnVjdG9yIiwiZnVuY3RvciIsImxvZ2dlciIsInNhbXBsaW5nIiwiRiIsIlIiLCJDb3JlRnVuY3RvciIsIkxvZ2dlciIsIlNhbXBsaW5nIiwiY29ubmVjdCIsImRlc2NyaXB0aW9uTGluayIsImdyb3VwQmVnaW4iLCJsb2ciLCJkZXNjcmlwdGlvbiIsInF1ZXJ5IiwiQmFzZUxpbmsiLCJzZXRDaHVua3MiLCJzZXRTYW1wbGVTaXplIiwic2V0TGFiZWxTaXplIiwic2V0RGF0YVJlYWRlciIsImdyb3VwRW5kIiwibGluayIsImpzb25VdGlscyIsImZldGNoSlNPTiIsInJlYWRKU09OIiwiRGF0YUNodW5rcyIsImRhdGFDaHVua3MiLCJTYW1wbGVSZWFkZXIiLCJzYW1wbGVSZWFkZXIiLCJMYWJlbFJlYWRlciIsImxhYmVsUmVhZGVyIiwiRGF0YVJlYWRlciIsImRhdGFSZWFkZXIiLCJTYW1wbGVTaXplIiwic2FtcGxlU2l6ZSIsIkxhYmVsU2l6ZSIsImxhYmVsU2l6ZSIsIkFycmF5IiwiaXNBcnJheSIsInJlZHVjZSIsInMiLCJTYW1wbGVDaHVua05hbWUiLCJMYWJlbENodW5rTmFtZSIsIkNodW5rTGlzdCIsImNpZHgiLCJDaHVua05hbWUiLCJTYW1wbGUiLCJyZXBsYWNlIiwiTGFiZWwiLCJTYW1wbGVUeXBlIiwiTGFiZWxUeXBlIiwiRGF0YVR5cGUiLCJTcGxpdEZuTGVuc2VzIiwic3BsaXRTYW1wbGUiLCJzcGxpdExhYmVsIiwiU2FtcGxlQXR0cmlidXRlcyIsIkxhYmVsQXR0cmlidXRlcyIsImRhdGEiLCJzcGxpdEV2ZXJ5IiwiY2h1bmtTZWxlY3QiLCJudW1DaHVua3MiLCJjaHVua0xpc3QiLCJzZWxlY3RlZENodW5rcyIsInN1YlNhbXBsaW5nIiwicmVhZCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwic2FtcGxlRGF0YSIsImxhYmVsRGF0YSIsImVtaXQiLCJ0ZXJtTG9nZ2VyIiwiY2F1c2FsTmV0U2FtcGxpbmciLCJEYXRhU291cmNlTWl4aW5zIiwiQmFzZVBpcGVsaW5lQ2xhc3MiLCJEYXRhU291cmNlUmVhZGVyIiwic291cmNlUmVhZGVyIiwic2V0QnlDb25maWciLCJwaXBlbGluZUNvbmZpZyIsIlNvdXJjZSIsIkRhdGFzZXQiLCJzZWxlY3RlZENodW5rIiwiUHJlcHJvY2Vzc2luZyIsIlByZXByb2Nlc3NpbmdEYXRhIiwiRnVuY3RvciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCLGdCQUFnQjtBQUNoQjs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCLGdCQUFnQjtBQUNoQjs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QixnQkFBZ0I7QUFDaEI7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEIsZ0JBQWdCO0FBQ2hCOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCLGdCQUFnQjtBQUNoQjs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixnQkFBZ0I7QUFDaEI7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0Qixl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O0FBQ0QsU0FBS0wsTUFBTCxDQUFZYSxRQUFaO0FBQ0EsV0FBTzBELGNBQVA7QUFDSDs7QUFFRCxRQUFNZCxJQUFOLENBQVdKLFNBQVgsRUFBcUI7QUFDakIsUUFBSXFCLGFBQWEsR0FBRyxLQUFLTixnQkFBTCxDQUFzQmhCLFdBQXRCLENBQWtDQyxTQUFsQyxDQUFwQjtBQUNBLFNBQUtyRCxNQUFMLENBQVlLLEdBQVosQ0FBZ0I7QUFBQyx1QkFBaUJxRTtBQUFsQixLQUFoQjtBQUNBLFVBQU0sS0FBS04sZ0JBQUwsQ0FBc0JYLElBQXRCLEVBQU47QUFDQSxXQUFPLEtBQUtrQixhQUFMLENBQW1CQyxpQkFBMUI7QUFDSDs7QUFqQzBFLENBQS9FOztBQW9DZVYsK0VBQWYsRTs7Ozs7Ozs7Ozs7O0FDNUNBO0FBQUE7QUFBQTtBQUFBO0FBQ2UsbUVBQUlXLHVEQUFKLEVBQWYsRTs7Ozs7Ozs7Ozs7O0FDREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUEsZTs7Ozs7Ozs7Ozs7QUNBQSw2RDs7Ozs7Ozs7Ozs7QUNBQSw0RDs7Ozs7Ozs7Ozs7QUNBQSw4RCIsImZpbGUiOiJAY2F1c2FsTmV0L2RhdGFzZXRzLm5vZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJjYXVzYWwtbmV0LmNvcmVcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LmxvZ1wiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQudXRpbHNcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiY2F1c2FsLW5ldC5jb3JlXCIsIFwiY2F1c2FsLW5ldC5sb2dcIiwgXCJjYXVzYWwtbmV0LnV0aWxzXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkBjYXVzYWxOZXQvZGF0YXNldHNcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJjYXVzYWwtbmV0LmNvcmVcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LmxvZ1wiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQudXRpbHNcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkBjYXVzYWxOZXQvZGF0YXNldHNcIl0gPSBmYWN0b3J5KHJvb3RbXCJjYXVzYWwtbmV0LmNvcmVcIl0sIHJvb3RbXCJjYXVzYWwtbmV0LmxvZ1wiXSwgcm9vdFtcImNhdXNhbC1uZXQudXRpbHNcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X2NvcmVfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X2xvZ19fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfdXRpbHNfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IHN5bWJvbHMgPSByZXF1aXJlKCcuL2xpYi9zeW1ib2xzJylcbmNvbnN0IG51bWJlciA9IHJlcXVpcmUoJy4vbGliL251bWJlcicpXG5jb25zdCBzdHJpbmcgPSByZXF1aXJlKCcuL2xpYi9zdHJpbmcnKVxuY29uc3Qgb2JqZWN0ID0gcmVxdWlyZSgnLi9saWIvb2JqZWN0JylcblxuY29uc3QgdHlwZVByZWRpY2F0ZXMgPSB7XG4gIG51bWJlcixcbiAgc3RyaW5nLFxuICBvYmplY3Rcbn1cblxuY29uc3QgY3JlYXRlT3cgPSAoe1xuICB2YWxpZGF0b3JzID0gW10sXG4gIHByZWRpY2F0ZXMgPSB0eXBlUHJlZGljYXRlcyxcbiAgdHlwZSA9IG51bGxcbn0gPSB7IH0pID0+IHtcbiAgY29uc3Qgb3cgPSBuZXcgUHJveHkoZnVuY3Rpb24gKCkgeyB9LCB7XG4gICAgZ2V0OiAob2JqLCBrZXkpID0+IHtcbiAgICAgIGlmIChrZXkgPT09IHN5bWJvbHMudmFsaWRhdGUpIHtcbiAgICAgICAgcmV0dXJuICh2YWx1ZSwgbGFiZWwgPSAnYXJndW1lbnQnKSA9PiB7XG4gICAgICAgICAgaWYgKCF0eXBlKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKCdtaXNzaW5nIHJlcXVpcmVkIHR5cGUgc3BlY2lmaWVyJylcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbGlkYXRvcnMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbGlkYXRvciA9IHZhbGlkYXRvcnNbaV1cbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHZhbGlkYXRvci5mbih2YWx1ZSlcblxuICAgICAgICAgICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgICAgICAgICAgaWYgKGkgPT09IDApIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkICR7bGFiZWx9IFxcYCR7dmFsdWV9XFxgIHRvIGJlIG9mIHR5cGUgXFxgJHt0eXBlfVxcYCwgYnV0IHJlY2VpdmVkIHR5cGUgXFxgJHt0eXBlb2YgdmFsdWV9XFxgYClcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkICR7dHlwZX0gXFxgJHtsYWJlbH1cXGAgXFxgJHt2YWx1ZX1cXGAgZmFpbGVkIHByZWRpY2F0ZSBcXGAke3ZhbGlkYXRvci5rZXl9XFxgYClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwcmVkaWNhdGUgPSBwcmVkaWNhdGVzW2tleV1cblxuICAgICAgaWYgKHByZWRpY2F0ZSkge1xuICAgICAgICBpZiAodHlwZW9mIHByZWRpY2F0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHZhbGlkYXRvcnMucHVzaCh7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBmbjogcHJlZGljYXRlXG4gICAgICAgICAgfSlcblxuICAgICAgICAgIHJldHVybiBvd1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBjcmVhdGVPdyh7XG4gICAgICAgICAgICB0eXBlOiBrZXksXG4gICAgICAgICAgICB2YWxpZGF0b3JzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgZm46IHByZWRpY2F0ZS52YWxpZGF0b3JcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHByZWRpY2F0ZXM6IHByZWRpY2F0ZS5wcmVkaWNhdGVzXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgZm4gPSBwcmVkaWNhdGVzW3N5bWJvbHMuZnVuY10gJiYgcHJlZGljYXRlc1tzeW1ib2xzLmZ1bmNdW2tleV1cblxuICAgICAgICBpZiAoZm4pIHtcbiAgICAgICAgICByZXR1cm4gbmV3IFByb3h5KGZ1bmN0aW9uICgpIHsgfSwge1xuICAgICAgICAgICAgZ2V0OiAoKSA9PiB7XG4gICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgaW52YWxpZCB1c2Ugb2YgZnVuY3Rpb25hbCBwcmVkaWNhdGUgXCIke2tleX1cImApXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBhcHBseTogKG9iaiwgdGhpc0FyZywgYXJncykgPT4ge1xuICAgICAgICAgICAgICB2YWxpZGF0b3JzLnB1c2goe1xuICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICBmbjogZm4oLi4uYXJncylcbiAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICByZXR1cm4gb3dcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChrZXkgPT09ICdkZWZhdWx0JyB8fCBrZXkgPT09ICdfX2VzTW9kdWxlJykge1xuICAgICAgICAgICAgcmV0dXJuIG93XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIG93XG4gICAgICAgICAgLy8gdGhyb3cgbmV3IEVycm9yKGB1bnJlY29nbml6ZWQgcHJlZGljYXRlIFwiJHtrZXl9XCJgKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFwcGx5OiAob2JqLCB0aGlzQXJnLCBhcmdzKSA9PiB7XG4gICAgICBpZiAoYXJncy5sZW5ndGggIT09IDIgJiYgYXJncy5sZW5ndGggIT09IDMpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhbGlkIG51bWJlciBvZiBhcmd1bWVudHMgdG8gXCJvd1wiJylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFyZ3NbMV1bc3ltYm9scy52YWxpZGF0ZV0oYXJnc1swXSwgYXJnc1syXSlcbiAgICAgIH1cbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIG93XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlT3coKVxuIiwiJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IHsgZnVuYyB9ID0gcmVxdWlyZSgnLi9zeW1ib2xzJylcblxuY29uc3QgbnVtYmVyUHJlZGljYXRlcyA9IHtcbiAgcG9zaXRpdmU6ICh2YWx1ZSkgPT4gKHZhbHVlID4gMCksXG4gIG5lZ2F0aXZlOiAodmFsdWUpID0+ICh2YWx1ZSA8IDApLFxuICBub25OZWdhdGl2ZTogKHZhbHVlKSA9PiAodmFsdWUgPj0gMCksXG4gIGludGVnZXI6ICh2YWx1ZSkgPT4gKHZhbHVlID09PSAodmFsdWUgfCAwKSksXG5cbiAgW2Z1bmNdOiB7XG4gICAgaXM6IChmbikgPT4gZm4sXG4gICAgZXE6ICh2KSA9PiAodmFsdWUpID0+ICh2YWx1ZSA9PT0gdiksXG4gICAgZ3Q6ICh2KSA9PiAodmFsdWUpID0+ICh2YWx1ZSA+IHYpLFxuICAgIGd0ZTogKHYpID0+ICh2YWx1ZSkgPT4gKHZhbHVlID49IHYpLFxuICAgIGx0OiAodikgPT4gKHZhbHVlKSA9PiAodmFsdWUgPCB2KSxcbiAgICBsdGU6ICh2KSA9PiAodmFsdWUpID0+ICh2YWx1ZSA8PSB2KVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBwcmVkaWNhdGVzOiBudW1iZXJQcmVkaWNhdGVzLFxuICB2YWxpZGF0b3I6ICh2YWx1ZSkgPT4ge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInXG4gIH1cbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5jb25zdCB7IGZ1bmMgfSA9IHJlcXVpcmUoJy4vc3ltYm9scycpXG5cbmNvbnN0IG9iamVjdFByZWRpY2F0ZXMgPSB7XG4gIHBsYWluOiAodmFsdWUpID0+IHtcbiAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0JykgcmV0dXJuIGZhbHNlXG5cbiAgICBjb25zdCBwcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZih2YWx1ZSlcbiAgICByZXR1cm4gcHJvdG8gPT09IG51bGwgfHwgcHJvdG8gPT09IE9iamVjdC5nZXRQcm90b3R5cGVPZih7fSlcbiAgfSxcbiAgZW1wdHk6ICh2YWx1ZSkgPT4gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMCxcbiAgbm9uRW1wdHk6ICh2YWx1ZSkgPT4gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA+IDAsXG5cbiAgW2Z1bmNdOiB7XG4gICAgaXM6IChmbikgPT4gZm4sXG4gICAgaW5zdGFuY2VPZjogKHYpID0+ICh2YWx1ZSkgPT4gKHZhbHVlIGluc3RhbmNlb2YgdilcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgcHJlZGljYXRlczogb2JqZWN0UHJlZGljYXRlcyxcbiAgdmFsaWRhdG9yOiAodmFsdWUpID0+IHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0J1xuICB9XG59XG4iLCIndXNlIHN0cmljdCdcblxuY29uc3QgeyBmdW5jIH0gPSByZXF1aXJlKCcuL3N5bWJvbHMnKVxuXG5jb25zdCBzdHJpbmdQcmVkaWNhdGVzID0ge1xuICBlbXB0eTogKHZhbHVlKSA9PiAodmFsdWUgPT09ICcnKSxcbiAgbm9uRW1wdHk6ICh2YWx1ZSkgPT4gKHZhbHVlICE9PSAnJyksXG5cbiAgW2Z1bmNdOiB7XG4gICAgaXM6IChmbikgPT4gZm4sXG4gICAgZXE6ICh2KSA9PiAodmFsdWUpID0+ICh2YWx1ZSA9PT0gdiksXG4gICAgbGVuZ3RoOiAodikgPT4gKHZhbHVlKSA9PiAodmFsdWUubGVuZ3RoID09PSB2KSxcbiAgICBtaW5MZW5ndGg6ICh2KSA9PiAodmFsdWUpID0+ICh2YWx1ZS5sZW5ndGggPj0gdiksXG4gICAgbWF4TGVuZ3RoOiAodikgPT4gKHZhbHVlKSA9PiAodmFsdWUubGVuZ3RoIDw9IHYpLFxuICAgIG1hdGNoZXM6ICh2KSA9PiAodmFsdWUpID0+IHYudGVzdCh2YWx1ZSksXG4gICAgc3RhcnRzV2l0aDogKHYpID0+ICh2YWx1ZSkgPT4gdmFsdWUuc3RhcnRzV2l0aCh2KSxcbiAgICBlbmRzV2l0aDogKHYpID0+ICh2YWx1ZSkgPT4gdmFsdWUuZW5kc1dpdGgodilcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgcHJlZGljYXRlczogc3RyaW5nUHJlZGljYXRlcyxcbiAgdmFsaWRhdG9yOiAodmFsdWUpID0+IHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJ1xuICB9XG59XG4iLCIndXNlIHN0cmljdCdcblxuZXhwb3J0cy5mdW5jID0gU3ltYm9sKCdmdW5jJylcbmV4cG9ydHMudmFsaWRhdGUgPSBTeW1ib2woJ3ZhbGlkYXRlJylcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9vd0xpdGUgPSByZXF1aXJlKCdvdy1saXRlJyk7XG5cbnZhciBfb3dMaXRlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX293TGl0ZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChyYW5kb20pIHtcbiAgdmFyIG4gPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IDE7XG5cbiAgKDAsIF9vd0xpdGUyLmRlZmF1bHQpKG4sIF9vd0xpdGUyLmRlZmF1bHQubnVtYmVyLmludGVnZXIucG9zaXRpdmUpO1xuICB2YXIgaXJ3aW5IYWxsID0gcmFuZG9tLmlyd2luSGFsbChuKTtcblxuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBpcndpbkhhbGwoKSAvIG47XG4gIH07XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YmF0ZXMuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX293TGl0ZSA9IHJlcXVpcmUoJ293LWxpdGUnKTtcblxudmFyIF9vd0xpdGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfb3dMaXRlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHJhbmRvbSkge1xuICB2YXIgcCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogMC41O1xuXG4gICgwLCBfb3dMaXRlMi5kZWZhdWx0KShwLCBfb3dMaXRlMi5kZWZhdWx0Lm51bWJlci5ndGUoMCkubHQoMSkpO1xuXG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHJhbmRvbS5uZXh0KCkgKyBwIHwgMDtcbiAgfTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1iZXJub3VsbGkuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX293TGl0ZSA9IHJlcXVpcmUoJ293LWxpdGUnKTtcblxudmFyIF9vd0xpdGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfb3dMaXRlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHJhbmRvbSkge1xuICB2YXIgbiA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogMTtcbiAgdmFyIHAgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IDAuNTtcblxuICAoMCwgX293TGl0ZTIuZGVmYXVsdCkobiwgX293TGl0ZTIuZGVmYXVsdC5udW1iZXIucG9zaXRpdmUuaW50ZWdlcik7XG4gICgwLCBfb3dMaXRlMi5kZWZhdWx0KShwLCBfb3dMaXRlMi5kZWZhdWx0Lm51bWJlci5ndGUoMCkubHRlKDEpKTtcblxuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgeCA9IDA7XG5cbiAgICB3aGlsZSAoaSsrIDwgbikge1xuICAgICAgeCArPSByYW5kb20ubmV4dCgpIDwgcDtcbiAgICB9XG5cbiAgICByZXR1cm4geDtcbiAgfTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1iaW5vbWlhbC5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfb3dMaXRlID0gcmVxdWlyZSgnb3ctbGl0ZScpO1xuXG52YXIgX293TGl0ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9vd0xpdGUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAocmFuZG9tKSB7XG4gIHZhciBsYW1iZGEgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IDE7XG5cbiAgKDAsIF9vd0xpdGUyLmRlZmF1bHQpKGxhbWJkYSwgX293TGl0ZTIuZGVmYXVsdC5udW1iZXIucG9zaXRpdmUpO1xuXG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIC1NYXRoLmxvZygxIC0gcmFuZG9tLm5leHQoKSkgLyBsYW1iZGE7XG4gIH07XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZXhwb25lbnRpYWwuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX293TGl0ZSA9IHJlcXVpcmUoJ293LWxpdGUnKTtcblxudmFyIF9vd0xpdGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfb3dMaXRlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHJhbmRvbSkge1xuICB2YXIgcCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogMC41O1xuXG4gICgwLCBfb3dMaXRlMi5kZWZhdWx0KShwLCBfb3dMaXRlMi5kZWZhdWx0Lm51bWJlci5ndCgwKS5sdGUoMSkpO1xuICB2YXIgaW52TG9nUCA9IDEuMCAvIE1hdGgubG9nKDEuMCAtIHApO1xuXG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIDEgKyBNYXRoLmxvZyhyYW5kb20ubmV4dCgpKSAqIGludkxvZ1AgfCAwO1xuICB9O1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWdlb21ldHJpYy5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfb3dMaXRlID0gcmVxdWlyZSgnb3ctbGl0ZScpO1xuXG52YXIgX293TGl0ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9vd0xpdGUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAocmFuZG9tKSB7XG4gIHZhciBuID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAxO1xuXG4gICgwLCBfb3dMaXRlMi5kZWZhdWx0KShuLCBfb3dMaXRlMi5kZWZhdWx0Lm51bWJlci5pbnRlZ2VyLmd0ZSgwKSk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc3VtID0gMDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG47ICsraSkge1xuICAgICAgc3VtICs9IHJhbmRvbS5uZXh0KCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1bTtcbiAgfTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pcndpbi1oYWxsLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAocmFuZG9tKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgdmFyIG5vcm1hbCA9IHJhbmRvbS5ub3JtYWwuYXBwbHkocmFuZG9tLCBhcmdzKTtcblxuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBNYXRoLmV4cChub3JtYWwoKSk7XG4gIH07XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bG9nLW5vcm1hbC5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfb3dMaXRlID0gcmVxdWlyZSgnb3ctbGl0ZScpO1xuXG52YXIgX293TGl0ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9vd0xpdGUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAocmFuZG9tKSB7XG4gIHZhciBtdSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogMDtcbiAgdmFyIHNpZ21hID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiAxO1xuXG4gICgwLCBfb3dMaXRlMi5kZWZhdWx0KShtdSwgX293TGl0ZTIuZGVmYXVsdC5udW1iZXIpO1xuICAoMCwgX293TGl0ZTIuZGVmYXVsdCkoc2lnbWEsIF9vd0xpdGUyLmRlZmF1bHQubnVtYmVyKTtcblxuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciB4ID0gdm9pZCAwLFxuICAgICAgICB5ID0gdm9pZCAwLFxuICAgICAgICByID0gdm9pZCAwO1xuXG4gICAgZG8ge1xuICAgICAgeCA9IHJhbmRvbS5uZXh0KCkgKiAyIC0gMTtcbiAgICAgIHkgPSByYW5kb20ubmV4dCgpICogMiAtIDE7XG4gICAgICByID0geCAqIHggKyB5ICogeTtcbiAgICB9IHdoaWxlICghciB8fCByID4gMSk7XG5cbiAgICByZXR1cm4gbXUgKyBzaWdtYSAqIHkgKiBNYXRoLnNxcnQoLTIgKiBNYXRoLmxvZyhyKSAvIHIpO1xuICB9O1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW5vcm1hbC5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfb3dMaXRlID0gcmVxdWlyZSgnb3ctbGl0ZScpO1xuXG52YXIgX293TGl0ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9vd0xpdGUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAocmFuZG9tKSB7XG4gIHZhciBhbHBoYSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogMTtcblxuICAoMCwgX293TGl0ZTIuZGVmYXVsdCkoYWxwaGEsIF9vd0xpdGUyLmRlZmF1bHQubnVtYmVyLmd0ZSgwKSk7XG4gIHZhciBpbnZBbHBoYSA9IDEuMCAvIGFscGhhO1xuXG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIDEuMCAvIE1hdGgucG93KDEuMCAtIHJhbmRvbS5uZXh0KCksIGludkFscGhhKTtcbiAgfTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wYXJldG8uanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX293TGl0ZSA9IHJlcXVpcmUoJ293LWxpdGUnKTtcblxudmFyIF9vd0xpdGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfb3dMaXRlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIGxvZ0ZhY3RvcmlhbFRhYmxlID0gWzAuMCwgMC4wLCAwLjY5MzE0NzE4MDU1OTk0NTI5LCAxLjc5MTc1OTQ2OTIyODA1NTAsIDMuMTc4MDUzODMwMzQ3OTQ1OCwgNC43ODc0OTE3NDI3ODIwNDU4LCA2LjU3OTI1MTIxMjAxMDEwMTIsIDguNTI1MTYxMzYxMDY1NDE0NywgMTAuNjA0NjAyOTAyNzQ1MjUxLCAxMi44MDE4Mjc0ODAwODE0NjldO1xuXG52YXIgbG9nRmFjdG9yaWFsID0gZnVuY3Rpb24gbG9nRmFjdG9yaWFsKGspIHtcbiAgcmV0dXJuIGxvZ0ZhY3RvcmlhbFRhYmxlW2tdO1xufTtcblxudmFyIGxvZ1NxcnQyUEkgPSAwLjkxODkzODUzMzIwNDY3MjY3O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAocmFuZG9tKSB7XG4gIHZhciBsYW1iZGEgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IDE7XG5cbiAgKDAsIF9vd0xpdGUyLmRlZmF1bHQpKGxhbWJkYSwgX293TGl0ZTIuZGVmYXVsdC5udW1iZXIucG9zaXRpdmUpO1xuXG4gIGlmIChsYW1iZGEgPCAxMCkge1xuICAgIC8vIGludmVyc2lvbiBtZXRob2RcbiAgICB2YXIgZXhwTWVhbiA9IE1hdGguZXhwKC1sYW1iZGEpO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBwID0gZXhwTWVhbjtcbiAgICAgIHZhciB4ID0gMDtcbiAgICAgIHZhciB1ID0gcmFuZG9tLm5leHQoKTtcblxuICAgICAgd2hpbGUgKHUgPiBwKSB7XG4gICAgICAgIHUgPSB1IC0gcDtcbiAgICAgICAgcCA9IGxhbWJkYSAqIHAgLyArK3g7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB4O1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgLy8gZ2VuZXJhdGl2ZSBtZXRob2RcbiAgICB2YXIgc211ID0gTWF0aC5zcXJ0KGxhbWJkYSk7XG4gICAgdmFyIGIgPSAwLjkzMSArIDIuNTMgKiBzbXU7XG4gICAgdmFyIGEgPSAtMC4wNTkgKyAwLjAyNDgzICogYjtcbiAgICB2YXIgaW52QWxwaGEgPSAxLjEyMzkgKyAxLjEzMjggLyAoYiAtIDMuNCk7XG4gICAgdmFyIHZSID0gMC45Mjc3IC0gMy42MjI0IC8gKGIgLSAyKTtcblxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgdSA9IHZvaWQgMDtcbiAgICAgICAgdmFyIHYgPSByYW5kb20ubmV4dCgpO1xuXG4gICAgICAgIGlmICh2IDw9IDAuODYgKiB2Uikge1xuICAgICAgICAgIHUgPSB2IC8gdlIgLSAwLjQzO1xuICAgICAgICAgIHJldHVybiBNYXRoLmZsb29yKCgyICogYSAvICgwLjUgLSBNYXRoLmFicyh1KSkgKyBiKSAqIHUgKyBsYW1iZGEgKyAwLjQ0NSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodiA+PSB2Uikge1xuICAgICAgICAgIHUgPSByYW5kb20ubmV4dCgpIC0gMC41O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHUgPSB2IC8gdlIgLSAwLjkzO1xuICAgICAgICAgIHUgPSAodSA8IDAgPyAtMC41IDogMC41KSAtIHU7XG4gICAgICAgICAgdiA9IHJhbmRvbS5uZXh0KCkgKiB2UjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB1cyA9IDAuNSAtIE1hdGguYWJzKHUpO1xuICAgICAgICBpZiAodXMgPCAwLjAxMyAmJiB2ID4gdXMpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBrID0gTWF0aC5mbG9vcigoMiAqIGEgLyB1cyArIGIpICogdSArIGxhbWJkYSArIDAuNDQ1KSB8IDA7XG4gICAgICAgIHYgPSB2ICogaW52QWxwaGEgLyAoYSAvICh1cyAqIHVzKSArIGIpO1xuXG4gICAgICAgIGlmIChrID49IDEwKSB7XG4gICAgICAgICAgdmFyIHQgPSAoayArIDAuNSkgKiBNYXRoLmxvZyhsYW1iZGEgLyBrKSAtIGxhbWJkYSAtIGxvZ1NxcnQyUEkgKyBrIC0gKDEgLyAxMi4wIC0gKDEgLyAzNjAuMCAtIDEgLyAoMTI2MC4wICogayAqIGspKSAvIChrICogaykpIC8gaztcblxuICAgICAgICAgIGlmIChNYXRoLmxvZyh2ICogc211KSA8PSB0KSB7XG4gICAgICAgICAgICByZXR1cm4gaztcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoayA+PSAwKSB7XG4gICAgICAgICAgaWYgKE1hdGgubG9nKHYpIDw9IGsgKiBNYXRoLmxvZyhsYW1iZGEpIC0gbGFtYmRhIC0gbG9nRmFjdG9yaWFsKGspKSB7XG4gICAgICAgICAgICByZXR1cm4gaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cG9pc3Nvbi5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHJhbmRvbSkge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiByYW5kb20ubmV4dCgpID49IDAuNTtcbiAgfTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD11bmlmb3JtLWJvb2xlYW4uanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX293TGl0ZSA9IHJlcXVpcmUoJ293LWxpdGUnKTtcblxudmFyIF9vd0xpdGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfb3dMaXRlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHJhbmRvbSwgbWluLCBtYXgpIHtcbiAgaWYgKG1heCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgbWF4ID0gbWluID09PSB1bmRlZmluZWQgPyAxIDogbWluO1xuICAgIG1pbiA9IDA7XG4gIH1cblxuICAoMCwgX293TGl0ZTIuZGVmYXVsdCkobWluLCBfb3dMaXRlMi5kZWZhdWx0Lm51bWJlci5pbnRlZ2VyKTtcbiAgKDAsIF9vd0xpdGUyLmRlZmF1bHQpKG1heCwgX293TGl0ZTIuZGVmYXVsdC5udW1iZXIuaW50ZWdlcik7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gcmFuZG9tLm5leHQoKSAqIChtYXggLSBtaW4gKyAxKSArIG1pbiB8IDA7XG4gIH07XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dW5pZm9ybS1pbnQuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX293TGl0ZSA9IHJlcXVpcmUoJ293LWxpdGUnKTtcblxudmFyIF9vd0xpdGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfb3dMaXRlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHJhbmRvbSwgbWluLCBtYXgpIHtcbiAgaWYgKG1heCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgbWF4ID0gbWluID09PSB1bmRlZmluZWQgPyAxIDogbWluO1xuICAgIG1pbiA9IDA7XG4gIH1cblxuICAoMCwgX293TGl0ZTIuZGVmYXVsdCkobWluLCBfb3dMaXRlMi5kZWZhdWx0Lm51bWJlcik7XG4gICgwLCBfb3dMaXRlMi5kZWZhdWx0KShtYXgsIF9vd0xpdGUyLmRlZmF1bHQubnVtYmVyKTtcblxuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiByYW5kb20ubmV4dCgpICogKG1heCAtIG1pbikgKyBtaW47XG4gIH07XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dW5pZm9ybS5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfb3dMaXRlID0gcmVxdWlyZSgnb3ctbGl0ZScpO1xuXG52YXIgX293TGl0ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9vd0xpdGUpO1xuXG52YXIgX3JuZyA9IHJlcXVpcmUoJy4uL3JuZycpO1xuXG52YXIgX3JuZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9ybmcpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBSTkdGdW5jdGlvbiA9IGZ1bmN0aW9uIChfUk5HKSB7XG4gIF9pbmhlcml0cyhSTkdGdW5jdGlvbiwgX1JORyk7XG5cbiAgZnVuY3Rpb24gUk5HRnVuY3Rpb24odGh1bmssIG9wdHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUk5HRnVuY3Rpb24pO1xuXG4gICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKFJOR0Z1bmN0aW9uLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoUk5HRnVuY3Rpb24pKS5jYWxsKHRoaXMpKTtcblxuICAgIF90aGlzLnNlZWQodGh1bmssIG9wdHMpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhSTkdGdW5jdGlvbiwgW3tcbiAgICBrZXk6ICduZXh0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9ybmcoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdzZWVkJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2VlZCh0aHVuaykge1xuICAgICAgKDAsIF9vd0xpdGUyLmRlZmF1bHQpKHRodW5rLCBfb3dMaXRlMi5kZWZhdWx0LmZ1bmN0aW9uKTtcbiAgICAgIHRoaXMuX3JuZyA9IHRodW5rO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2Nsb25lJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2xvbmUoKSB7XG4gICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgb3B0cyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICBvcHRzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5hcHBseShSTkdGdW5jdGlvbiwgW251bGxdLmNvbmNhdChbdGhpcy5fcm5nXSwgb3B0cykpKSgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ25hbWUnLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuICdmdW5jdGlvbic7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFJOR0Z1bmN0aW9uO1xufShfcm5nMi5kZWZhdWx0KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gUk5HRnVuY3Rpb247XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mdW5jdGlvbi5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLlJOR0ZhY3RvcnkgPSBleHBvcnRzLlJORyA9IHVuZGVmaW5lZDtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9vd0xpdGUgPSByZXF1aXJlKCdvdy1saXRlJyk7XG5cbnZhciBfb3dMaXRlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX293TGl0ZSk7XG5cbnZhciBfcm5nID0gcmVxdWlyZSgnLi9ybmcnKTtcblxudmFyIF9ybmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcm5nKTtcblxudmFyIF9ybmdGYWN0b3J5ID0gcmVxdWlyZSgnLi9ybmctZmFjdG9yeScpO1xuXG52YXIgX3JuZ0ZhY3RvcnkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcm5nRmFjdG9yeSk7XG5cbnZhciBfdW5pZm9ybTIgPSByZXF1aXJlKCcuL2Rpc3RyaWJ1dGlvbnMvdW5pZm9ybScpO1xuXG52YXIgX3VuaWZvcm0zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdW5pZm9ybTIpO1xuXG52YXIgX3VuaWZvcm1JbnQyID0gcmVxdWlyZSgnLi9kaXN0cmlidXRpb25zL3VuaWZvcm0taW50Jyk7XG5cbnZhciBfdW5pZm9ybUludDMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91bmlmb3JtSW50Mik7XG5cbnZhciBfdW5pZm9ybUJvb2xlYW4yID0gcmVxdWlyZSgnLi9kaXN0cmlidXRpb25zL3VuaWZvcm0tYm9vbGVhbicpO1xuXG52YXIgX3VuaWZvcm1Cb29sZWFuMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3VuaWZvcm1Cb29sZWFuMik7XG5cbnZhciBfbm9ybWFsMiA9IHJlcXVpcmUoJy4vZGlzdHJpYnV0aW9ucy9ub3JtYWwnKTtcblxudmFyIF9ub3JtYWwzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbm9ybWFsMik7XG5cbnZhciBfbG9nTm9ybWFsMiA9IHJlcXVpcmUoJy4vZGlzdHJpYnV0aW9ucy9sb2ctbm9ybWFsJyk7XG5cbnZhciBfbG9nTm9ybWFsMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xvZ05vcm1hbDIpO1xuXG52YXIgX2Jlcm5vdWxsaTIgPSByZXF1aXJlKCcuL2Rpc3RyaWJ1dGlvbnMvYmVybm91bGxpJyk7XG5cbnZhciBfYmVybm91bGxpMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Jlcm5vdWxsaTIpO1xuXG52YXIgX2Jpbm9taWFsMiA9IHJlcXVpcmUoJy4vZGlzdHJpYnV0aW9ucy9iaW5vbWlhbCcpO1xuXG52YXIgX2Jpbm9taWFsMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Jpbm9taWFsMik7XG5cbnZhciBfZ2VvbWV0cmljMiA9IHJlcXVpcmUoJy4vZGlzdHJpYnV0aW9ucy9nZW9tZXRyaWMnKTtcblxudmFyIF9nZW9tZXRyaWMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2VvbWV0cmljMik7XG5cbnZhciBfcG9pc3NvbjIgPSByZXF1aXJlKCcuL2Rpc3RyaWJ1dGlvbnMvcG9pc3NvbicpO1xuXG52YXIgX3BvaXNzb24zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcG9pc3NvbjIpO1xuXG52YXIgX2V4cG9uZW50aWFsMiA9IHJlcXVpcmUoJy4vZGlzdHJpYnV0aW9ucy9leHBvbmVudGlhbCcpO1xuXG52YXIgX2V4cG9uZW50aWFsMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V4cG9uZW50aWFsMik7XG5cbnZhciBfaXJ3aW5IYWxsMiA9IHJlcXVpcmUoJy4vZGlzdHJpYnV0aW9ucy9pcndpbi1oYWxsJyk7XG5cbnZhciBfaXJ3aW5IYWxsMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lyd2luSGFsbDIpO1xuXG52YXIgX2JhdGVzMiA9IHJlcXVpcmUoJy4vZGlzdHJpYnV0aW9ucy9iYXRlcycpO1xuXG52YXIgX2JhdGVzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2JhdGVzMik7XG5cbnZhciBfcGFyZXRvMiA9IHJlcXVpcmUoJy4vZGlzdHJpYnV0aW9ucy9wYXJldG8nKTtcblxudmFyIF9wYXJldG8zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcGFyZXRvMik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmV4cG9ydHMuUk5HID0gX3JuZzIuZGVmYXVsdDtcbmV4cG9ydHMuUk5HRmFjdG9yeSA9IF9ybmdGYWN0b3J5Mi5kZWZhdWx0O1xuXG4vKipcbiAqIFNlZWRhYmxlIHJhbmRvbSBudW1iZXIgZ2VuZXJhdG9yIHN1cHBvcnRpbmcgbWFueSBjb21tb24gZGlzdHJpYnV0aW9ucy5cbiAqXG4gKiBEZWZhdWx0cyB0byBNYXRoLnJhbmRvbSBhcyBpdHMgdW5kZXJseWluZyBwc2V1ZG9yYW5kb20gbnVtYmVyIGdlbmVyYXRvci5cbiAqXG4gKiBAbmFtZSBSYW5kb21cbiAqIEBjbGFzc1xuICpcbiAqIEBwYXJhbSB7Uk5HfGZ1bmN0aW9ufSBbcm5nPU1hdGgucmFuZG9tXSAtIFVuZGVybHlpbmcgcHNldWRvcmFuZG9tIG51bWJlciBnZW5lcmF0b3IuXG4gKi9cblxudmFyIFJhbmRvbSA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gUmFuZG9tKHJuZykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBSYW5kb20pO1xuXG4gICAgaWYgKHJuZykgKDAsIF9vd0xpdGUyLmRlZmF1bHQpKHJuZywgX293TGl0ZTIuZGVmYXVsdC5vYmplY3QuaW5zdGFuY2VPZihfcm5nMi5kZWZhdWx0KSk7XG5cbiAgICB0aGlzLl9jYWNoZSA9IHt9O1xuICAgIHRoaXMudXNlKHJuZyk7XG4gIH1cblxuICAvKipcbiAgICogQG1lbWJlciB7Uk5HfSBVbmRlcmx5aW5nIHBzZXVkby1yYW5kb20gbnVtYmVyIGdlbmVyYXRvclxuICAgKi9cblxuXG4gIF9jcmVhdGVDbGFzcyhSYW5kb20sIFt7XG4gICAga2V5OiAnY2xvbmUnLFxuXG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbmV3IGBSYW5kb21gIGluc3RhbmNlLCBvcHRpb25hbGx5IHNwZWNpZnlpbmcgcGFyYW1ldGVycyB0b1xuICAgICAqIHNldCBhIG5ldyBzZWVkLlxuICAgICAqXG4gICAgICogQHNlZSBSTkcuY2xvbmVcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbc2VlZF0gLSBPcHRpb25hbCBzZWVkIGZvciBuZXcgUk5HLlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0c10gLSBPcHRpb25hbCBjb25maWcgZm9yIG5ldyBSTkcgb3B0aW9ucy5cbiAgICAgKiBAcmV0dXJuIHtSYW5kb219XG4gICAgICovXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNsb25lKCkge1xuICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBSYW5kb20oX3JuZ0ZhY3RvcnkyLmRlZmF1bHQuYXBwbHkodW5kZWZpbmVkLCBhcmd1bWVudHMpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBuZXcgUmFuZG9tKHRoaXMucm5nLmNsb25lKCkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHVuZGVybHlpbmcgcHNldWRvcmFuZG9tIG51bWJlciBnZW5lcmF0b3IgdXNlZCB2aWFcbiAgICAgKiBlaXRoZXIgYW4gaW5zdGFuY2Ugb2YgYHNlZWRyYW5kb21gLCBhIGN1c3RvbSBpbnN0YW5jZSBvZiBSTkdcbiAgICAgKiAoZm9yIFBSTkcgcGx1Z2lucyksIG9yIGEgc3RyaW5nIHNwZWNpZnlpbmcgdGhlIFBSTkcgdG8gdXNlXG4gICAgICogYWxvbmcgd2l0aCBhbiBvcHRpb25hbCBgc2VlZGAgYW5kIGBvcHRzYCB0byBpbml0aWFsaXplIHRoZVxuICAgICAqIFJORy5cbiAgICAgKlxuICAgICAqIEBleGFtcGxlXG4gICAgICogY29uc3QgcmFuZG9tID0gcmVxdWlyZSgncmFuZG9tJylcbiAgICAgKlxuICAgICAqIHJhbmRvbS51c2UoJ2V4YW1wbGVfc2VlZHJhbmRvbV9zdHJpbmcnKVxuICAgICAqIC8vIG9yXG4gICAgICogcmFuZG9tLnVzZShzZWVkcmFuZG9tKCdraXR0ZW5zJykpXG4gICAgICogLy8gb3JcbiAgICAgKiByYW5kb20udXNlKE1hdGgucmFuZG9tKVxuICAgICAqXG4gICAgICogQHBhcmFtIHsuLi4qfSBhcmdzXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ3VzZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVzZSgpIHtcbiAgICAgIHRoaXMuX3JuZyA9IF9ybmdGYWN0b3J5Mi5kZWZhdWx0LmFwcGx5KHVuZGVmaW5lZCwgYXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQYXRjaGVzIGBNYXRoLnJhbmRvbWAgd2l0aCB0aGlzIFJhbmRvbSBpbnN0YW5jZSdzIFBSTkcuXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ3BhdGNoJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcGF0Y2goKSB7XG4gICAgICBpZiAodGhpcy5fcGF0Y2gpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNYXRoLnJhbmRvbSBhbHJlYWR5IHBhdGNoZWQnKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fcGF0Y2ggPSBNYXRoLnJhbmRvbTtcbiAgICAgIE1hdGgucmFuZG9tID0gdGhpcy51bmlmb3JtKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVzdG9yZXMgYSBwcmV2aW91c2x5IHBhdGNoZWQgYE1hdGgucmFuZG9tYCB0byBpdHMgb3JpZ2luYWwgdmFsdWUuXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ3VucGF0Y2gnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB1bnBhdGNoKCkge1xuICAgICAgaWYgKHRoaXMuX3BhdGNoKSB7XG4gICAgICAgIE1hdGgucmFuZG9tID0gdGhpcy5fcGF0Y2g7XG4gICAgICAgIGRlbGV0ZSB0aGlzLl9wYXRjaDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIFVuaWZvcm0gdXRpbGl0eSBmdW5jdGlvbnNcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgLyoqXG4gICAgICogQ29udmVuaWVuY2Ugd3JhcHBlciBhcm91bmQgYHRoaXMucm5nLm5leHQoKWBcbiAgICAgKlxuICAgICAqIFJldHVybnMgYSBmbG9hdGluZyBwb2ludCBudW1iZXIgaW4gWzAsIDEpLlxuICAgICAqXG4gICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICduZXh0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9ybmcubmV4dCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNhbXBsZXMgYSB1bmlmb3JtIHJhbmRvbSBmbG9hdGluZyBwb2ludCBudW1iZXIsIG9wdGlvbmFsbHkgc3BlY2lmeWluZ1xuICAgICAqIGxvd2VyIGFuZCB1cHBlciBib3VuZHMuXG4gICAgICpcbiAgICAgKiBDb252ZW5jZSB3cmFwcGVyIGFyb3VuZCBgcmFuZG9tLnVuaWZvcm0oKWBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbbWluPTBdIC0gTG93ZXIgYm91bmQgKGZsb2F0LCBpbmNsdXNpdmUpXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFttYXg9MV0gLSBVcHBlciBib3VuZCAoZmxvYXQsIGV4Y2x1c2l2ZSlcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ2Zsb2F0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZmxvYXQobWluLCBtYXgpIHtcbiAgICAgIHJldHVybiB0aGlzLnVuaWZvcm0obWluLCBtYXgpKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2FtcGxlcyBhIHVuaWZvcm0gcmFuZG9tIGludGVnZXIsIG9wdGlvbmFsbHkgc3BlY2lmeWluZyBsb3dlciBhbmQgdXBwZXJcbiAgICAgKiBib3VuZHMuXG4gICAgICpcbiAgICAgKiBDb252ZW5jZSB3cmFwcGVyIGFyb3VuZCBgcmFuZG9tLnVuaWZvcm1JbnQoKWBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbbWluPTBdIC0gTG93ZXIgYm91bmQgKGludGVnZXIsIGluY2x1c2l2ZSlcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW21heD0xXSAtIFVwcGVyIGJvdW5kIChpbnRlZ2VyLCBpbmNsdXNpdmUpXG4gICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdpbnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpbnQobWluLCBtYXgpIHtcbiAgICAgIHJldHVybiB0aGlzLnVuaWZvcm1JbnQobWluLCBtYXgpKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2FtcGxlcyBhIHVuaWZvcm0gcmFuZG9tIGludGVnZXIsIG9wdGlvbmFsbHkgc3BlY2lmeWluZyBsb3dlciBhbmQgdXBwZXJcbiAgICAgKiBib3VuZHMuXG4gICAgICpcbiAgICAgKiBDb252ZW5jZSB3cmFwcGVyIGFyb3VuZCBgcmFuZG9tLnVuaWZvcm1JbnQoKWBcbiAgICAgKlxuICAgICAqIEBhbGlhcyBgcmFuZG9tLmludGBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbbWluPTBdIC0gTG93ZXIgYm91bmQgKGludGVnZXIsIGluY2x1c2l2ZSlcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW21heD0xXSAtIFVwcGVyIGJvdW5kIChpbnRlZ2VyLCBpbmNsdXNpdmUpXG4gICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdpbnRlZ2VyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaW50ZWdlcihtaW4sIG1heCkge1xuICAgICAgcmV0dXJuIHRoaXMudW5pZm9ybUludChtaW4sIG1heCkoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTYW1wbGVzIGEgdW5pZm9ybSByYW5kb20gYm9vbGVhbiB2YWx1ZS5cbiAgICAgKlxuICAgICAqIENvbnZlbmNlIHdyYXBwZXIgYXJvdW5kIGByYW5kb20udW5pZm9ybUJvb2xlYW4oKWBcbiAgICAgKlxuICAgICAqIEBhbGlhcyBgcmFuZG9tLmJvb2xlYW5gXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdib29sJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gYm9vbCgpIHtcbiAgICAgIHJldHVybiB0aGlzLnVuaWZvcm1Cb29sZWFuKCkoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTYW1wbGVzIGEgdW5pZm9ybSByYW5kb20gYm9vbGVhbiB2YWx1ZS5cbiAgICAgKlxuICAgICAqIENvbnZlbmNlIHdyYXBwZXIgYXJvdW5kIGByYW5kb20udW5pZm9ybUJvb2xlYW4oKWBcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ2Jvb2xlYW4nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBib29sZWFuKCkge1xuICAgICAgcmV0dXJuIHRoaXMudW5pZm9ybUJvb2xlYW4oKSgpO1xuICAgIH1cblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gVW5pZm9ybSBkaXN0cmlidXRpb25zXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIC8qKlxuICAgICAqIEdlbmVyYXRlcyBhIFtDb250aW51b3VzIHVuaWZvcm0gZGlzdHJpYnV0aW9uXShodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9Vbmlmb3JtX2Rpc3RyaWJ1dGlvbl8oY29udGludW91cykpLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFttaW49MF0gLSBMb3dlciBib3VuZCAoZmxvYXQsIGluY2x1c2l2ZSlcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW21heD0xXSAtIFVwcGVyIGJvdW5kIChmbG9hdCwgZXhjbHVzaXZlKVxuICAgICAqIEByZXR1cm4ge2Z1bmN0aW9ufVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICd1bmlmb3JtJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdW5pZm9ybShtaW4sIG1heCkge1xuICAgICAgcmV0dXJuIHRoaXMuX21lbW9pemUoJ3VuaWZvcm0nLCBfdW5pZm9ybTMuZGVmYXVsdCwgbWluLCBtYXgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdlbmVyYXRlcyBhIFtEaXNjcmV0ZSB1bmlmb3JtIGRpc3RyaWJ1dGlvbl0oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvRGlzY3JldGVfdW5pZm9ybV9kaXN0cmlidXRpb24pLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFttaW49MF0gLSBMb3dlciBib3VuZCAoaW50ZWdlciwgaW5jbHVzaXZlKVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbbWF4PTFdIC0gVXBwZXIgYm91bmQgKGludGVnZXIsIGluY2x1c2l2ZSlcbiAgICAgKiBAcmV0dXJuIHtmdW5jdGlvbn1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAndW5pZm9ybUludCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVuaWZvcm1JbnQobWluLCBtYXgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9tZW1vaXplKCd1bmlmb3JtSW50JywgX3VuaWZvcm1JbnQzLmRlZmF1bHQsIG1pbiwgbWF4KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZW5lcmF0ZXMgYSBbRGlzY3JldGUgdW5pZm9ybSBkaXN0cmlidXRpb25dKGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0Rpc2NyZXRlX3VuaWZvcm1fZGlzdHJpYnV0aW9uKSxcbiAgICAgKiB3aXRoIHR3byBwb3NzaWJsZSBvdXRjb21lcywgYHRydWVgIG9yIGBmYWxzZS5cbiAgICAgKlxuICAgICAqIFRoaXMgbWV0aG9kIGlzIGFuYWxvZ291cyB0byBmbGlwcGluZyBhIGNvaW4uXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtmdW5jdGlvbn1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAndW5pZm9ybUJvb2xlYW4nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB1bmlmb3JtQm9vbGVhbigpIHtcbiAgICAgIHJldHVybiB0aGlzLl9tZW1vaXplKCd1bmlmb3JtQm9vbGVhbicsIF91bmlmb3JtQm9vbGVhbjMuZGVmYXVsdCk7XG4gICAgfVxuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBOb3JtYWwgZGlzdHJpYnV0aW9uc1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICAvKipcbiAgICAgKiBHZW5lcmF0ZXMgYSBbTm9ybWFsIGRpc3RyaWJ1dGlvbl0oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvTm9ybWFsX2Rpc3RyaWJ1dGlvbikuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW211PTBdIC0gTWVhblxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbc2lnbWE9MV0gLSBTdGFuZGFyZCBkZXZpYXRpb25cbiAgICAgKiBAcmV0dXJuIHtmdW5jdGlvbn1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnbm9ybWFsJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gbm9ybWFsKG11LCBzaWdtYSkge1xuICAgICAgcmV0dXJuICgwLCBfbm9ybWFsMy5kZWZhdWx0KSh0aGlzLCBtdSwgc2lnbWEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdlbmVyYXRlcyBhIFtMb2ctbm9ybWFsIGRpc3RyaWJ1dGlvbl0oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvTG9nLW5vcm1hbF9kaXN0cmlidXRpb24pLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFttdT0wXSAtIE1lYW4gb2YgdW5kZXJseWluZyBub3JtYWwgZGlzdHJpYnV0aW9uXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFtzaWdtYT0xXSAtIFN0YW5kYXJkIGRldmlhdGlvbiBvZiB1bmRlcmx5aW5nIG5vcm1hbCBkaXN0cmlidXRpb25cbiAgICAgKiBAcmV0dXJuIHtmdW5jdGlvbn1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnbG9nTm9ybWFsJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gbG9nTm9ybWFsKG11LCBzaWdtYSkge1xuICAgICAgcmV0dXJuICgwLCBfbG9nTm9ybWFsMy5kZWZhdWx0KSh0aGlzLCBtdSwgc2lnbWEpO1xuICAgIH1cblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gQmVybm91bGxpIGRpc3RyaWJ1dGlvbnNcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgLyoqXG4gICAgICogR2VuZXJhdGVzIGEgW0Jlcm5vdWxsaSBkaXN0cmlidXRpb25dKGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0Jlcm5vdWxsaV9kaXN0cmlidXRpb24pLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFtwPTAuNV0gLSBTdWNjZXNzIHByb2JhYmlsaXR5IG9mIGVhY2ggdHJpYWwuXG4gICAgICogQHJldHVybiB7ZnVuY3Rpb259XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ2Jlcm5vdWxsaScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGJlcm5vdWxsaShwKSB7XG4gICAgICByZXR1cm4gKDAsIF9iZXJub3VsbGkzLmRlZmF1bHQpKHRoaXMsIHApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdlbmVyYXRlcyBhIFtCaW5vbWlhbCBkaXN0cmlidXRpb25dKGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0Jpbm9taWFsX2Rpc3RyaWJ1dGlvbikuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW249MV0gLSBOdW1iZXIgb2YgdHJpYWxzLlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbcD0wLjVdIC0gU3VjY2VzcyBwcm9iYWJpbGl0eSBvZiBlYWNoIHRyaWFsLlxuICAgICAqIEByZXR1cm4ge2Z1bmN0aW9ufVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdiaW5vbWlhbCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGJpbm9taWFsKG4sIHApIHtcbiAgICAgIHJldHVybiAoMCwgX2Jpbm9taWFsMy5kZWZhdWx0KSh0aGlzLCBuLCBwKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZW5lcmF0ZXMgYSBbR2VvbWV0cmljIGRpc3RyaWJ1dGlvbl0oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvR2VvbWV0cmljX2Rpc3RyaWJ1dGlvbikuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW3A9MC41XSAtIFN1Y2Nlc3MgcHJvYmFiaWxpdHkgb2YgZWFjaCB0cmlhbC5cbiAgICAgKiBAcmV0dXJuIHtmdW5jdGlvbn1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnZ2VvbWV0cmljJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2VvbWV0cmljKHApIHtcbiAgICAgIHJldHVybiAoMCwgX2dlb21ldHJpYzMuZGVmYXVsdCkodGhpcywgcCk7XG4gICAgfVxuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBQb2lzc29uIGRpc3RyaWJ1dGlvbnNcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgLyoqXG4gICAgICogR2VuZXJhdGVzIGEgW1BvaXNzb24gZGlzdHJpYnV0aW9uXShodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9Qb2lzc29uX2Rpc3RyaWJ1dGlvbikuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW2xhbWJkYT0xXSAtIE1lYW4gKGxhbWJkYSA+IDApXG4gICAgICogQHJldHVybiB7ZnVuY3Rpb259XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ3BvaXNzb24nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwb2lzc29uKGxhbWJkYSkge1xuICAgICAgcmV0dXJuICgwLCBfcG9pc3NvbjMuZGVmYXVsdCkodGhpcywgbGFtYmRhKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZW5lcmF0ZXMgYW4gW0V4cG9uZW50aWFsIGRpc3RyaWJ1dGlvbl0oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvRXhwb25lbnRpYWxfZGlzdHJpYnV0aW9uKS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbbGFtYmRhPTFdIC0gSW52ZXJzZSBtZWFuIChsYW1iZGEgPiAwKVxuICAgICAqIEByZXR1cm4ge2Z1bmN0aW9ufVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdleHBvbmVudGlhbCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGV4cG9uZW50aWFsKGxhbWJkYSkge1xuICAgICAgcmV0dXJuICgwLCBfZXhwb25lbnRpYWwzLmRlZmF1bHQpKHRoaXMsIGxhbWJkYSk7XG4gICAgfVxuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBNaXNjIGRpc3RyaWJ1dGlvbnNcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgLyoqXG4gICAgICogR2VuZXJhdGVzIGFuIFtJcndpbiBIYWxsIGRpc3RyaWJ1dGlvbl0oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSXJ3aW4lRTIlODAlOTNIYWxsX2Rpc3RyaWJ1dGlvbikuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW249MV0gLSBOdW1iZXIgb2YgdW5pZm9ybSBzYW1wbGVzIHRvIHN1bSAobiA+PSAwKVxuICAgICAqIEByZXR1cm4ge2Z1bmN0aW9ufVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdpcndpbkhhbGwnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpcndpbkhhbGwobikge1xuICAgICAgcmV0dXJuICgwLCBfaXJ3aW5IYWxsMy5kZWZhdWx0KSh0aGlzLCBuKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZW5lcmF0ZXMgYSBbQmF0ZXMgZGlzdHJpYnV0aW9uXShodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9CYXRlc19kaXN0cmlidXRpb24pLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFtuPTFdIC0gTnVtYmVyIG9mIHVuaWZvcm0gc2FtcGxlcyB0byBhdmVyYWdlIChuID49IDEpXG4gICAgICogQHJldHVybiB7ZnVuY3Rpb259XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ2JhdGVzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gYmF0ZXMobikge1xuICAgICAgcmV0dXJuICgwLCBfYmF0ZXMzLmRlZmF1bHQpKHRoaXMsIG4pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdlbmVyYXRlcyBhIFtQYXJldG8gZGlzdHJpYnV0aW9uXShodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9QYXJldG9fZGlzdHJpYnV0aW9uKS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbYWxwaGE9MV0gLSBBbHBoYVxuICAgICAqIEByZXR1cm4ge2Z1bmN0aW9ufVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdwYXJldG8nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwYXJldG8oYWxwaGEpIHtcbiAgICAgIHJldHVybiAoMCwgX3BhcmV0bzMuZGVmYXVsdCkodGhpcywgYWxwaGEpO1xuICAgIH1cblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gSW50ZXJuYWxcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgLyoqXG4gICAgICogTWVtb2l6ZXMgZGlzdHJpYnV0aW9ucyB0byBlbnN1cmUgdGhleSdyZSBvbmx5IGNyZWF0ZWQgd2hlbiBuZWNlc3NhcnkuXG4gICAgICpcbiAgICAgKiBSZXR1cm5zIGEgdGh1bmsgd2hpY2ggdGhhdCByZXR1cm5zIGluZGVwZW5kZW50LCBpZGVudGljYWxseSBkaXN0cmlidXRlZFxuICAgICAqIHNhbXBsZXMgZnJvbSB0aGUgc3BlY2lmaWVkIGRpc3RyaWJ1dGlvbi5cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbGFiZWwgLSBOYW1lIG9mIGRpc3RyaWJ1dGlvblxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGdldHRlciAtIEZ1bmN0aW9uIHdoaWNoIGdlbmVyYXRlcyBhIG5ldyBkaXN0cmlidXRpb25cbiAgICAgKiBAcGFyYW0gey4uLip9IGFyZ3MgLSBEaXN0cmlidXRpb24tc3BlY2lmaWMgYXJndW1lbnRzXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtmdW5jdGlvbn1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnX21lbW9pemUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfbWVtb2l6ZShsYWJlbCwgZ2V0dGVyKSB7XG4gICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4gPiAyID8gX2xlbiAtIDIgOiAwKSwgX2tleSA9IDI7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgYXJnc1tfa2V5IC0gMl0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICB9XG5cbiAgICAgIHZhciBrZXkgPSAnJyArIGFyZ3Muam9pbignOycpO1xuICAgICAgdmFyIHZhbHVlID0gdGhpcy5fY2FjaGVbbGFiZWxdO1xuXG4gICAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZS5rZXkgIT09IGtleSkge1xuICAgICAgICB2YWx1ZSA9IHsga2V5OiBrZXksIGRpc3RyaWJ1dGlvbjogZ2V0dGVyLmFwcGx5KHVuZGVmaW5lZCwgW3RoaXNdLmNvbmNhdChhcmdzKSkgfTtcbiAgICAgICAgdGhpcy5fY2FjaGVbbGFiZWxdID0gdmFsdWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB2YWx1ZS5kaXN0cmlidXRpb247XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncm5nJyxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9ybmc7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFJhbmRvbTtcbn0oKTtcblxuLy8gZGVmYXVsdHMgdG8gTWF0aC5yYW5kb20gYXMgaXRzIFJOR1xuXG5cbmV4cG9ydHMuZGVmYXVsdCA9IG5ldyBSYW5kb20oKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJhbmRvbS5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxudmFyIF9zZWVkcmFuZG9tID0gcmVxdWlyZSgnc2VlZHJhbmRvbScpO1xuXG52YXIgX3NlZWRyYW5kb20yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2VlZHJhbmRvbSk7XG5cbnZhciBfcm5nID0gcmVxdWlyZSgnLi9ybmcnKTtcblxudmFyIF9ybmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcm5nKTtcblxudmFyIF9mdW5jdGlvbiA9IHJlcXVpcmUoJy4vZ2VuZXJhdG9ycy9mdW5jdGlvbicpO1xuXG52YXIgX2Z1bmN0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Z1bmN0aW9uKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gQXJyYXkoYXJyLmxlbmd0aCk7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfSBlbHNlIHsgcmV0dXJuIEFycmF5LmZyb20oYXJyKTsgfSB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uICgpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgdmFyIF9hcmdzJCA9IGFyZ3NbMF0sXG4gICAgICBhcmcwID0gX2FyZ3MkID09PSB1bmRlZmluZWQgPyAnZGVmYXVsdCcgOiBfYXJncyQsXG4gICAgICByZXN0ID0gYXJncy5zbGljZSgxKTtcblxuXG4gIHN3aXRjaCAodHlwZW9mIGFyZzAgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKGFyZzApKSB7XG4gICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgIGlmIChhcmcwIGluc3RhbmNlb2YgX3JuZzIuZGVmYXVsdCkge1xuICAgICAgICByZXR1cm4gYXJnMDtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnZnVuY3Rpb24nOlxuICAgICAgcmV0dXJuIG5ldyBfZnVuY3Rpb24yLmRlZmF1bHQoYXJnMCk7XG5cbiAgICBjYXNlICdzdHJpbmcnOlxuICAgIGNhc2UgJ251bWJlcic6XG4gICAgICByZXR1cm4gbmV3IF9mdW5jdGlvbjIuZGVmYXVsdChfc2VlZHJhbmRvbTIuZGVmYXVsdC5hcHBseSh1bmRlZmluZWQsIF90b0NvbnN1bWFibGVBcnJheShyZXN0KSkpO1xuICB9XG5cbiAgdGhyb3cgbmV3IEVycm9yKCdpbnZhbGlkIFJORyBcIicgKyBhcmcwICsgJ1wiJyk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm5nLWZhY3RvcnkuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgUk5HID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBSTkcoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFJORyk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoUk5HLCBbe1xuICAgIGtleTogJ25leHQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdSTkcubmV4dCBtdXN0IGJlIG92ZXJyaWRkZW4nKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdzZWVkJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2VlZChfc2VlZCwgb3B0cykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdSTkcuc2VlZCBtdXN0IGJlIG92ZXJyaWRkZW4nKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjbG9uZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNsb25lKHNlZWQsIG9wdHMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUk5HLmNsb25lIG11c3QgYmUgb3ZlcnJpZGRlbicpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ19zZWVkJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gX3NlZWQoc2VlZCwgb3B0cykge1xuICAgICAgLy8gVE9ETzogYWRkIGVudHJvcHkgYW5kIHN0dWZmXG5cbiAgICAgIGlmIChzZWVkID09PSAoc2VlZCB8IDApKSB7XG4gICAgICAgIHJldHVybiBzZWVkO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHN0clNlZWQgPSAnJyArIHNlZWQ7XG4gICAgICAgIHZhciBzID0gMDtcblxuICAgICAgICBmb3IgKHZhciBrID0gMDsgayA8IHN0clNlZWQubGVuZ3RoOyArK2spIHtcbiAgICAgICAgICBzIF49IHN0clNlZWQuY2hhckNvZGVBdChrKSB8IDA7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcztcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICduYW1lJyxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUk5HLm5hbWUgbXVzdCBiZSBvdmVycmlkZGVuJyk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFJORztcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gUk5HO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm5nLmpzLm1hcCIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9yYW5kb20nKS5kZWZhdWx0XG4iLCIvLyBBIGxpYnJhcnkgb2Ygc2VlZGFibGUgUk5HcyBpbXBsZW1lbnRlZCBpbiBKYXZhc2NyaXB0LlxuLy9cbi8vIFVzYWdlOlxuLy9cbi8vIHZhciBzZWVkcmFuZG9tID0gcmVxdWlyZSgnc2VlZHJhbmRvbScpO1xuLy8gdmFyIHJhbmRvbSA9IHNlZWRyYW5kb20oMSk7IC8vIG9yIGFueSBzZWVkLlxuLy8gdmFyIHggPSByYW5kb20oKTsgICAgICAgLy8gMCA8PSB4IDwgMS4gIEV2ZXJ5IGJpdCBpcyByYW5kb20uXG4vLyB2YXIgeCA9IHJhbmRvbS5xdWljaygpOyAvLyAwIDw9IHggPCAxLiAgMzIgYml0cyBvZiByYW5kb21uZXNzLlxuXG4vLyBhbGVhLCBhIDUzLWJpdCBtdWx0aXBseS13aXRoLWNhcnJ5IGdlbmVyYXRvciBieSBKb2hhbm5lcyBCYWFnw7hlLlxuLy8gUGVyaW9kOiB+Ml4xMTZcbi8vIFJlcG9ydGVkIHRvIHBhc3MgYWxsIEJpZ0NydXNoIHRlc3RzLlxudmFyIGFsZWEgPSByZXF1aXJlKCcuL2xpYi9hbGVhJyk7XG5cbi8vIHhvcjEyOCwgYSBwdXJlIHhvci1zaGlmdCBnZW5lcmF0b3IgYnkgR2VvcmdlIE1hcnNhZ2xpYS5cbi8vIFBlcmlvZDogMl4xMjgtMS5cbi8vIFJlcG9ydGVkIHRvIGZhaWw6IE1hdHJpeFJhbmsgYW5kIExpbmVhckNvbXAuXG52YXIgeG9yMTI4ID0gcmVxdWlyZSgnLi9saWIveG9yMTI4Jyk7XG5cbi8vIHhvcndvdywgR2VvcmdlIE1hcnNhZ2xpYSdzIDE2MC1iaXQgeG9yLXNoaWZ0IGNvbWJpbmVkIHBsdXMgd2V5bC5cbi8vIFBlcmlvZDogMl4xOTItMl4zMlxuLy8gUmVwb3J0ZWQgdG8gZmFpbDogQ29sbGlzaW9uT3ZlciwgU2ltcFBva2VyLCBhbmQgTGluZWFyQ29tcC5cbnZhciB4b3J3b3cgPSByZXF1aXJlKCcuL2xpYi94b3J3b3cnKTtcblxuLy8geG9yc2hpZnQ3LCBieSBGcmFuw6dvaXMgUGFubmV0b24gYW5kIFBpZXJyZSBMJ2VjdXllciwgdGFrZXNcbi8vIGEgZGlmZmVyZW50IGFwcHJvYWNoOiBpdCBhZGRzIHJvYnVzdG5lc3MgYnkgYWxsb3dpbmcgbW9yZSBzaGlmdHNcbi8vIHRoYW4gTWFyc2FnbGlhJ3Mgb3JpZ2luYWwgdGhyZWUuICBJdCBpcyBhIDctc2hpZnQgZ2VuZXJhdG9yXG4vLyB3aXRoIDI1NiBiaXRzLCB0aGF0IHBhc3NlcyBCaWdDcnVzaCB3aXRoIG5vIHN5c3RtYXRpYyBmYWlsdXJlcy5cbi8vIFBlcmlvZCAyXjI1Ni0xLlxuLy8gTm8gc3lzdGVtYXRpYyBCaWdDcnVzaCBmYWlsdXJlcyByZXBvcnRlZC5cbnZhciB4b3JzaGlmdDcgPSByZXF1aXJlKCcuL2xpYi94b3JzaGlmdDcnKTtcblxuLy8geG9yNDA5NiwgYnkgUmljaGFyZCBCcmVudCwgaXMgYSA0MDk2LWJpdCB4b3Itc2hpZnQgd2l0aCBhXG4vLyB2ZXJ5IGxvbmcgcGVyaW9kIHRoYXQgYWxzbyBhZGRzIGEgV2V5bCBnZW5lcmF0b3IuIEl0IGFsc28gcGFzc2VzXG4vLyBCaWdDcnVzaCB3aXRoIG5vIHN5c3RlbWF0aWMgZmFpbHVyZXMuICBJdHMgbG9uZyBwZXJpb2QgbWF5XG4vLyBiZSB1c2VmdWwgaWYgeW91IGhhdmUgbWFueSBnZW5lcmF0b3JzIGFuZCBuZWVkIHRvIGF2b2lkXG4vLyBjb2xsaXNpb25zLlxuLy8gUGVyaW9kOiAyXjQxMjgtMl4zMi5cbi8vIE5vIHN5c3RlbWF0aWMgQmlnQ3J1c2ggZmFpbHVyZXMgcmVwb3J0ZWQuXG52YXIgeG9yNDA5NiA9IHJlcXVpcmUoJy4vbGliL3hvcjQwOTYnKTtcblxuLy8gVHljaGUtaSwgYnkgU2FtdWVsIE5ldmVzIGFuZCBGaWxpcGUgQXJhdWpvLCBpcyBhIGJpdC1zaGlmdGluZyByYW5kb21cbi8vIG51bWJlciBnZW5lcmF0b3IgZGVyaXZlZCBmcm9tIENoYUNoYSwgYSBtb2Rlcm4gc3RyZWFtIGNpcGhlci5cbi8vIGh0dHBzOi8vZWRlbi5kZWkudWMucHQvfnNuZXZlcy9wdWJzLzIwMTEtc25mYTIucGRmXG4vLyBQZXJpb2Q6IH4yXjEyN1xuLy8gTm8gc3lzdGVtYXRpYyBCaWdDcnVzaCBmYWlsdXJlcyByZXBvcnRlZC5cbnZhciB0eWNoZWkgPSByZXF1aXJlKCcuL2xpYi90eWNoZWknKTtcblxuLy8gVGhlIG9yaWdpbmFsIEFSQzQtYmFzZWQgcHJuZyBpbmNsdWRlZCBpbiB0aGlzIGxpYnJhcnkuXG4vLyBQZXJpb2Q6IH4yXjE2MDBcbnZhciBzciA9IHJlcXVpcmUoJy4vc2VlZHJhbmRvbScpO1xuXG5zci5hbGVhID0gYWxlYTtcbnNyLnhvcjEyOCA9IHhvcjEyODtcbnNyLnhvcndvdyA9IHhvcndvdztcbnNyLnhvcnNoaWZ0NyA9IHhvcnNoaWZ0NztcbnNyLnhvcjQwOTYgPSB4b3I0MDk2O1xuc3IudHljaGVpID0gdHljaGVpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHNyO1xuIiwiLy8gQSBwb3J0IG9mIGFuIGFsZ29yaXRobSBieSBKb2hhbm5lcyBCYWFnw7hlIDxiYWFnb2VAYmFhZ29lLmNvbT4sIDIwMTBcbi8vIGh0dHA6Ly9iYWFnb2UuY29tL2VuL1JhbmRvbU11c2luZ3MvamF2YXNjcmlwdC9cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9ucXVpbmxhbi9iZXR0ZXItcmFuZG9tLW51bWJlcnMtZm9yLWphdmFzY3JpcHQtbWlycm9yXG4vLyBPcmlnaW5hbCB3b3JrIGlzIHVuZGVyIE1JVCBsaWNlbnNlIC1cblxuLy8gQ29weXJpZ2h0IChDKSAyMDEwIGJ5IEpvaGFubmVzIEJhYWfDuGUgPGJhYWdvZUBiYWFnb2Uub3JnPlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vIFxuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy8gXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuXG5cbihmdW5jdGlvbihnbG9iYWwsIG1vZHVsZSwgZGVmaW5lKSB7XG5cbmZ1bmN0aW9uIEFsZWEoc2VlZCkge1xuICB2YXIgbWUgPSB0aGlzLCBtYXNoID0gTWFzaCgpO1xuXG4gIG1lLm5leHQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgdCA9IDIwOTE2MzkgKiBtZS5zMCArIG1lLmMgKiAyLjMyODMwNjQzNjUzODY5NjNlLTEwOyAvLyAyXi0zMlxuICAgIG1lLnMwID0gbWUuczE7XG4gICAgbWUuczEgPSBtZS5zMjtcbiAgICByZXR1cm4gbWUuczIgPSB0IC0gKG1lLmMgPSB0IHwgMCk7XG4gIH07XG5cbiAgLy8gQXBwbHkgdGhlIHNlZWRpbmcgYWxnb3JpdGhtIGZyb20gQmFhZ29lLlxuICBtZS5jID0gMTtcbiAgbWUuczAgPSBtYXNoKCcgJyk7XG4gIG1lLnMxID0gbWFzaCgnICcpO1xuICBtZS5zMiA9IG1hc2goJyAnKTtcbiAgbWUuczAgLT0gbWFzaChzZWVkKTtcbiAgaWYgKG1lLnMwIDwgMCkgeyBtZS5zMCArPSAxOyB9XG4gIG1lLnMxIC09IG1hc2goc2VlZCk7XG4gIGlmIChtZS5zMSA8IDApIHsgbWUuczEgKz0gMTsgfVxuICBtZS5zMiAtPSBtYXNoKHNlZWQpO1xuICBpZiAobWUuczIgPCAwKSB7IG1lLnMyICs9IDE7IH1cbiAgbWFzaCA9IG51bGw7XG59XG5cbmZ1bmN0aW9uIGNvcHkoZiwgdCkge1xuICB0LmMgPSBmLmM7XG4gIHQuczAgPSBmLnMwO1xuICB0LnMxID0gZi5zMTtcbiAgdC5zMiA9IGYuczI7XG4gIHJldHVybiB0O1xufVxuXG5mdW5jdGlvbiBpbXBsKHNlZWQsIG9wdHMpIHtcbiAgdmFyIHhnID0gbmV3IEFsZWEoc2VlZCksXG4gICAgICBzdGF0ZSA9IG9wdHMgJiYgb3B0cy5zdGF0ZSxcbiAgICAgIHBybmcgPSB4Zy5uZXh0O1xuICBwcm5nLmludDMyID0gZnVuY3Rpb24oKSB7IHJldHVybiAoeGcubmV4dCgpICogMHgxMDAwMDAwMDApIHwgMDsgfVxuICBwcm5nLmRvdWJsZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBwcm5nKCkgKyAocHJuZygpICogMHgyMDAwMDAgfCAwKSAqIDEuMTEwMjIzMDI0NjI1MTU2NWUtMTY7IC8vIDJeLTUzXG4gIH07XG4gIHBybmcucXVpY2sgPSBwcm5nO1xuICBpZiAoc3RhdGUpIHtcbiAgICBpZiAodHlwZW9mKHN0YXRlKSA9PSAnb2JqZWN0JykgY29weShzdGF0ZSwgeGcpO1xuICAgIHBybmcuc3RhdGUgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvcHkoeGcsIHt9KTsgfVxuICB9XG4gIHJldHVybiBwcm5nO1xufVxuXG5mdW5jdGlvbiBNYXNoKCkge1xuICB2YXIgbiA9IDB4ZWZjODI0OWQ7XG5cbiAgdmFyIG1hc2ggPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgZGF0YSA9IGRhdGEudG9TdHJpbmcoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgIG4gKz0gZGF0YS5jaGFyQ29kZUF0KGkpO1xuICAgICAgdmFyIGggPSAwLjAyNTE5NjAzMjgyNDE2OTM4ICogbjtcbiAgICAgIG4gPSBoID4+PiAwO1xuICAgICAgaCAtPSBuO1xuICAgICAgaCAqPSBuO1xuICAgICAgbiA9IGggPj4+IDA7XG4gICAgICBoIC09IG47XG4gICAgICBuICs9IGggKiAweDEwMDAwMDAwMDsgLy8gMl4zMlxuICAgIH1cbiAgICByZXR1cm4gKG4gPj4+IDApICogMi4zMjgzMDY0MzY1Mzg2OTYzZS0xMDsgLy8gMl4tMzJcbiAgfTtcblxuICByZXR1cm4gbWFzaDtcbn1cblxuXG5pZiAobW9kdWxlICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gaW1wbDtcbn0gZWxzZSBpZiAoZGVmaW5lICYmIGRlZmluZS5hbWQpIHtcbiAgZGVmaW5lKGZ1bmN0aW9uKCkgeyByZXR1cm4gaW1wbDsgfSk7XG59IGVsc2Uge1xuICB0aGlzLmFsZWEgPSBpbXBsO1xufVxuXG59KShcbiAgdGhpcyxcbiAgKHR5cGVvZiBtb2R1bGUpID09ICdvYmplY3QnICYmIG1vZHVsZSwgICAgLy8gcHJlc2VudCBpbiBub2RlLmpzXG4gICh0eXBlb2YgZGVmaW5lKSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZSAgIC8vIHByZXNlbnQgd2l0aCBhbiBBTUQgbG9hZGVyXG4pO1xuXG5cbiIsIi8vIEEgSmF2YXNjcmlwdCBpbXBsZW1lbnRhaW9uIG9mIHRoZSBcIlR5Y2hlLWlcIiBwcm5nIGFsZ29yaXRobSBieVxuLy8gU2FtdWVsIE5ldmVzIGFuZCBGaWxpcGUgQXJhdWpvLlxuLy8gU2VlIGh0dHBzOi8vZWRlbi5kZWkudWMucHQvfnNuZXZlcy9wdWJzLzIwMTEtc25mYTIucGRmXG5cbihmdW5jdGlvbihnbG9iYWwsIG1vZHVsZSwgZGVmaW5lKSB7XG5cbmZ1bmN0aW9uIFhvckdlbihzZWVkKSB7XG4gIHZhciBtZSA9IHRoaXMsIHN0cnNlZWQgPSAnJztcblxuICAvLyBTZXQgdXAgZ2VuZXJhdG9yIGZ1bmN0aW9uLlxuICBtZS5uZXh0ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGIgPSBtZS5iLCBjID0gbWUuYywgZCA9IG1lLmQsIGEgPSBtZS5hO1xuICAgIGIgPSAoYiA8PCAyNSkgXiAoYiA+Pj4gNykgXiBjO1xuICAgIGMgPSAoYyAtIGQpIHwgMDtcbiAgICBkID0gKGQgPDwgMjQpIF4gKGQgPj4+IDgpIF4gYTtcbiAgICBhID0gKGEgLSBiKSB8IDA7XG4gICAgbWUuYiA9IGIgPSAoYiA8PCAyMCkgXiAoYiA+Pj4gMTIpIF4gYztcbiAgICBtZS5jID0gYyA9IChjIC0gZCkgfCAwO1xuICAgIG1lLmQgPSAoZCA8PCAxNikgXiAoYyA+Pj4gMTYpIF4gYTtcbiAgICByZXR1cm4gbWUuYSA9IChhIC0gYikgfCAwO1xuICB9O1xuXG4gIC8qIFRoZSBmb2xsb3dpbmcgaXMgbm9uLWludmVydGVkIHR5Y2hlLCB3aGljaCBoYXMgYmV0dGVyIGludGVybmFsXG4gICAqIGJpdCBkaWZmdXNpb24sIGJ1dCB3aGljaCBpcyBhYm91dCAyNSUgc2xvd2VyIHRoYW4gdHljaGUtaSBpbiBKUy5cbiAgbWUubmV4dCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBhID0gbWUuYSwgYiA9IG1lLmIsIGMgPSBtZS5jLCBkID0gbWUuZDtcbiAgICBhID0gKG1lLmEgKyBtZS5iIHwgMCkgPj4+IDA7XG4gICAgZCA9IG1lLmQgXiBhOyBkID0gZCA8PCAxNiBeIGQgPj4+IDE2O1xuICAgIGMgPSBtZS5jICsgZCB8IDA7XG4gICAgYiA9IG1lLmIgXiBjOyBiID0gYiA8PCAxMiBeIGQgPj4+IDIwO1xuICAgIG1lLmEgPSBhID0gYSArIGIgfCAwO1xuICAgIGQgPSBkIF4gYTsgbWUuZCA9IGQgPSBkIDw8IDggXiBkID4+PiAyNDtcbiAgICBtZS5jID0gYyA9IGMgKyBkIHwgMDtcbiAgICBiID0gYiBeIGM7XG4gICAgcmV0dXJuIG1lLmIgPSAoYiA8PCA3IF4gYiA+Pj4gMjUpO1xuICB9XG4gICovXG5cbiAgbWUuYSA9IDA7XG4gIG1lLmIgPSAwO1xuICBtZS5jID0gMjY1NDQzNTc2OSB8IDA7XG4gIG1lLmQgPSAxMzY3MTMwNTUxO1xuXG4gIGlmIChzZWVkID09PSBNYXRoLmZsb29yKHNlZWQpKSB7XG4gICAgLy8gSW50ZWdlciBzZWVkLlxuICAgIG1lLmEgPSAoc2VlZCAvIDB4MTAwMDAwMDAwKSB8IDA7XG4gICAgbWUuYiA9IHNlZWQgfCAwO1xuICB9IGVsc2Uge1xuICAgIC8vIFN0cmluZyBzZWVkLlxuICAgIHN0cnNlZWQgKz0gc2VlZDtcbiAgfVxuXG4gIC8vIE1peCBpbiBzdHJpbmcgc2VlZCwgdGhlbiBkaXNjYXJkIGFuIGluaXRpYWwgYmF0Y2ggb2YgNjQgdmFsdWVzLlxuICBmb3IgKHZhciBrID0gMDsgayA8IHN0cnNlZWQubGVuZ3RoICsgMjA7IGsrKykge1xuICAgIG1lLmIgXj0gc3Ryc2VlZC5jaGFyQ29kZUF0KGspIHwgMDtcbiAgICBtZS5uZXh0KCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY29weShmLCB0KSB7XG4gIHQuYSA9IGYuYTtcbiAgdC5iID0gZi5iO1xuICB0LmMgPSBmLmM7XG4gIHQuZCA9IGYuZDtcbiAgcmV0dXJuIHQ7XG59O1xuXG5mdW5jdGlvbiBpbXBsKHNlZWQsIG9wdHMpIHtcbiAgdmFyIHhnID0gbmV3IFhvckdlbihzZWVkKSxcbiAgICAgIHN0YXRlID0gb3B0cyAmJiBvcHRzLnN0YXRlLFxuICAgICAgcHJuZyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gKHhnLm5leHQoKSA+Pj4gMCkgLyAweDEwMDAwMDAwMDsgfTtcbiAgcHJuZy5kb3VibGUgPSBmdW5jdGlvbigpIHtcbiAgICBkbyB7XG4gICAgICB2YXIgdG9wID0geGcubmV4dCgpID4+PiAxMSxcbiAgICAgICAgICBib3QgPSAoeGcubmV4dCgpID4+PiAwKSAvIDB4MTAwMDAwMDAwLFxuICAgICAgICAgIHJlc3VsdCA9ICh0b3AgKyBib3QpIC8gKDEgPDwgMjEpO1xuICAgIH0gd2hpbGUgKHJlc3VsdCA9PT0gMCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbiAgcHJuZy5pbnQzMiA9IHhnLm5leHQ7XG4gIHBybmcucXVpY2sgPSBwcm5nO1xuICBpZiAoc3RhdGUpIHtcbiAgICBpZiAodHlwZW9mKHN0YXRlKSA9PSAnb2JqZWN0JykgY29weShzdGF0ZSwgeGcpO1xuICAgIHBybmcuc3RhdGUgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvcHkoeGcsIHt9KTsgfVxuICB9XG4gIHJldHVybiBwcm5nO1xufVxuXG5pZiAobW9kdWxlICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gaW1wbDtcbn0gZWxzZSBpZiAoZGVmaW5lICYmIGRlZmluZS5hbWQpIHtcbiAgZGVmaW5lKGZ1bmN0aW9uKCkgeyByZXR1cm4gaW1wbDsgfSk7XG59IGVsc2Uge1xuICB0aGlzLnR5Y2hlaSA9IGltcGw7XG59XG5cbn0pKFxuICB0aGlzLFxuICAodHlwZW9mIG1vZHVsZSkgPT0gJ29iamVjdCcgJiYgbW9kdWxlLCAgICAvLyBwcmVzZW50IGluIG5vZGUuanNcbiAgKHR5cGVvZiBkZWZpbmUpID09ICdmdW5jdGlvbicgJiYgZGVmaW5lICAgLy8gcHJlc2VudCB3aXRoIGFuIEFNRCBsb2FkZXJcbik7XG5cblxuIiwiLy8gQSBKYXZhc2NyaXB0IGltcGxlbWVudGFpb24gb2YgdGhlIFwieG9yMTI4XCIgcHJuZyBhbGdvcml0aG0gYnlcbi8vIEdlb3JnZSBNYXJzYWdsaWEuICBTZWUgaHR0cDovL3d3dy5qc3RhdHNvZnQub3JnL3YwOC9pMTQvcGFwZXJcblxuKGZ1bmN0aW9uKGdsb2JhbCwgbW9kdWxlLCBkZWZpbmUpIHtcblxuZnVuY3Rpb24gWG9yR2VuKHNlZWQpIHtcbiAgdmFyIG1lID0gdGhpcywgc3Ryc2VlZCA9ICcnO1xuXG4gIG1lLnggPSAwO1xuICBtZS55ID0gMDtcbiAgbWUueiA9IDA7XG4gIG1lLncgPSAwO1xuXG4gIC8vIFNldCB1cCBnZW5lcmF0b3IgZnVuY3Rpb24uXG4gIG1lLm5leHQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgdCA9IG1lLnggXiAobWUueCA8PCAxMSk7XG4gICAgbWUueCA9IG1lLnk7XG4gICAgbWUueSA9IG1lLno7XG4gICAgbWUueiA9IG1lLnc7XG4gICAgcmV0dXJuIG1lLncgXj0gKG1lLncgPj4+IDE5KSBeIHQgXiAodCA+Pj4gOCk7XG4gIH07XG5cbiAgaWYgKHNlZWQgPT09IChzZWVkIHwgMCkpIHtcbiAgICAvLyBJbnRlZ2VyIHNlZWQuXG4gICAgbWUueCA9IHNlZWQ7XG4gIH0gZWxzZSB7XG4gICAgLy8gU3RyaW5nIHNlZWQuXG4gICAgc3Ryc2VlZCArPSBzZWVkO1xuICB9XG5cbiAgLy8gTWl4IGluIHN0cmluZyBzZWVkLCB0aGVuIGRpc2NhcmQgYW4gaW5pdGlhbCBiYXRjaCBvZiA2NCB2YWx1ZXMuXG4gIGZvciAodmFyIGsgPSAwOyBrIDwgc3Ryc2VlZC5sZW5ndGggKyA2NDsgaysrKSB7XG4gICAgbWUueCBePSBzdHJzZWVkLmNoYXJDb2RlQXQoaykgfCAwO1xuICAgIG1lLm5leHQoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjb3B5KGYsIHQpIHtcbiAgdC54ID0gZi54O1xuICB0LnkgPSBmLnk7XG4gIHQueiA9IGYuejtcbiAgdC53ID0gZi53O1xuICByZXR1cm4gdDtcbn1cblxuZnVuY3Rpb24gaW1wbChzZWVkLCBvcHRzKSB7XG4gIHZhciB4ZyA9IG5ldyBYb3JHZW4oc2VlZCksXG4gICAgICBzdGF0ZSA9IG9wdHMgJiYgb3B0cy5zdGF0ZSxcbiAgICAgIHBybmcgPSBmdW5jdGlvbigpIHsgcmV0dXJuICh4Zy5uZXh0KCkgPj4+IDApIC8gMHgxMDAwMDAwMDA7IH07XG4gIHBybmcuZG91YmxlID0gZnVuY3Rpb24oKSB7XG4gICAgZG8ge1xuICAgICAgdmFyIHRvcCA9IHhnLm5leHQoKSA+Pj4gMTEsXG4gICAgICAgICAgYm90ID0gKHhnLm5leHQoKSA+Pj4gMCkgLyAweDEwMDAwMDAwMCxcbiAgICAgICAgICByZXN1bHQgPSAodG9wICsgYm90KSAvICgxIDw8IDIxKTtcbiAgICB9IHdoaWxlIChyZXN1bHQgPT09IDApO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG4gIHBybmcuaW50MzIgPSB4Zy5uZXh0O1xuICBwcm5nLnF1aWNrID0gcHJuZztcbiAgaWYgKHN0YXRlKSB7XG4gICAgaWYgKHR5cGVvZihzdGF0ZSkgPT0gJ29iamVjdCcpIGNvcHkoc3RhdGUsIHhnKTtcbiAgICBwcm5nLnN0YXRlID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb3B5KHhnLCB7fSk7IH1cbiAgfVxuICByZXR1cm4gcHJuZztcbn1cblxuaWYgKG1vZHVsZSAmJiBtb2R1bGUuZXhwb3J0cykge1xuICBtb2R1bGUuZXhwb3J0cyA9IGltcGw7XG59IGVsc2UgaWYgKGRlZmluZSAmJiBkZWZpbmUuYW1kKSB7XG4gIGRlZmluZShmdW5jdGlvbigpIHsgcmV0dXJuIGltcGw7IH0pO1xufSBlbHNlIHtcbiAgdGhpcy54b3IxMjggPSBpbXBsO1xufVxuXG59KShcbiAgdGhpcyxcbiAgKHR5cGVvZiBtb2R1bGUpID09ICdvYmplY3QnICYmIG1vZHVsZSwgICAgLy8gcHJlc2VudCBpbiBub2RlLmpzXG4gICh0eXBlb2YgZGVmaW5lKSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZSAgIC8vIHByZXNlbnQgd2l0aCBhbiBBTUQgbG9hZGVyXG4pO1xuXG5cbiIsIi8vIEEgSmF2YXNjcmlwdCBpbXBsZW1lbnRhaW9uIG9mIFJpY2hhcmQgQnJlbnQncyBYb3JnZW5zIHhvcjQwOTYgYWxnb3JpdGhtLlxuLy9cbi8vIFRoaXMgZmFzdCBub24tY3J5cHRvZ3JhcGhpYyByYW5kb20gbnVtYmVyIGdlbmVyYXRvciBpcyBkZXNpZ25lZCBmb3Jcbi8vIHVzZSBpbiBNb250ZS1DYXJsbyBhbGdvcml0aG1zLiBJdCBjb21iaW5lcyBhIGxvbmctcGVyaW9kIHhvcnNoaWZ0XG4vLyBnZW5lcmF0b3Igd2l0aCBhIFdleWwgZ2VuZXJhdG9yLCBhbmQgaXQgcGFzc2VzIGFsbCBjb21tb24gYmF0dGVyaWVzXG4vLyBvZiBzdGFzdGljaWFsIHRlc3RzIGZvciByYW5kb21uZXNzIHdoaWxlIGNvbnN1bWluZyBvbmx5IGEgZmV3IG5hbm9zZWNvbmRzXG4vLyBmb3IgZWFjaCBwcm5nIGdlbmVyYXRlZC4gIEZvciBiYWNrZ3JvdW5kIG9uIHRoZSBnZW5lcmF0b3IsIHNlZSBCcmVudCdzXG4vLyBwYXBlcjogXCJTb21lIGxvbmctcGVyaW9kIHJhbmRvbSBudW1iZXIgZ2VuZXJhdG9ycyB1c2luZyBzaGlmdHMgYW5kIHhvcnMuXCJcbi8vIGh0dHA6Ly9hcnhpdi5vcmcvcGRmLzEwMDQuMzExNXYxLnBkZlxuLy9cbi8vIFVzYWdlOlxuLy9cbi8vIHZhciB4b3I0MDk2ID0gcmVxdWlyZSgneG9yNDA5NicpO1xuLy8gcmFuZG9tID0geG9yNDA5NigxKTsgICAgICAgICAgICAgICAgICAgICAgICAvLyBTZWVkIHdpdGggaW50MzIgb3Igc3RyaW5nLlxuLy8gYXNzZXJ0LmVxdWFsKHJhbmRvbSgpLCAwLjE1MjA0MzY0NTA1Mzg1NDcpOyAvLyAoMCwgMSkgcmFuZ2UsIDUzIGJpdHMuXG4vLyBhc3NlcnQuZXF1YWwocmFuZG9tLmludDMyKCksIDE4MDY1MzQ4OTcpOyAgIC8vIHNpZ25lZCBpbnQzMiwgMzIgYml0cy5cbi8vXG4vLyBGb3Igbm9uemVybyBudW1lcmljIGtleXMsIHRoaXMgaW1wZWxlbWVudGF0aW9uIHByb3ZpZGVzIGEgc2VxdWVuY2Vcbi8vIGlkZW50aWNhbCB0byB0aGF0IGJ5IEJyZW50J3MgeG9yZ2VucyAzIGltcGxlbWVudGFpb24gaW4gQy4gIFRoaXNcbi8vIGltcGxlbWVudGF0aW9uIGFsc28gcHJvdmlkZXMgZm9yIGluaXRhbGl6aW5nIHRoZSBnZW5lcmF0b3Igd2l0aFxuLy8gc3RyaW5nIHNlZWRzLCBvciBmb3Igc2F2aW5nIGFuZCByZXN0b3JpbmcgdGhlIHN0YXRlIG9mIHRoZSBnZW5lcmF0b3IuXG4vL1xuLy8gT24gQ2hyb21lLCB0aGlzIHBybmcgYmVuY2htYXJrcyBhYm91dCAyLjEgdGltZXMgc2xvd2VyIHRoYW5cbi8vIEphdmFzY3JpcHQncyBidWlsdC1pbiBNYXRoLnJhbmRvbSgpLlxuXG4oZnVuY3Rpb24oZ2xvYmFsLCBtb2R1bGUsIGRlZmluZSkge1xuXG5mdW5jdGlvbiBYb3JHZW4oc2VlZCkge1xuICB2YXIgbWUgPSB0aGlzO1xuXG4gIC8vIFNldCB1cCBnZW5lcmF0b3IgZnVuY3Rpb24uXG4gIG1lLm5leHQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgdyA9IG1lLncsXG4gICAgICAgIFggPSBtZS5YLCBpID0gbWUuaSwgdCwgdjtcbiAgICAvLyBVcGRhdGUgV2V5bCBnZW5lcmF0b3IuXG4gICAgbWUudyA9IHcgPSAodyArIDB4NjFjODg2NDcpIHwgMDtcbiAgICAvLyBVcGRhdGUgeG9yIGdlbmVyYXRvci5cbiAgICB2ID0gWFsoaSArIDM0KSAmIDEyN107XG4gICAgdCA9IFhbaSA9ICgoaSArIDEpICYgMTI3KV07XG4gICAgdiBePSB2IDw8IDEzO1xuICAgIHQgXj0gdCA8PCAxNztcbiAgICB2IF49IHYgPj4+IDE1O1xuICAgIHQgXj0gdCA+Pj4gMTI7XG4gICAgLy8gVXBkYXRlIFhvciBnZW5lcmF0b3IgYXJyYXkgc3RhdGUuXG4gICAgdiA9IFhbaV0gPSB2IF4gdDtcbiAgICBtZS5pID0gaTtcbiAgICAvLyBSZXN1bHQgaXMgdGhlIGNvbWJpbmF0aW9uLlxuICAgIHJldHVybiAodiArICh3IF4gKHcgPj4+IDE2KSkpIHwgMDtcbiAgfTtcblxuICBmdW5jdGlvbiBpbml0KG1lLCBzZWVkKSB7XG4gICAgdmFyIHQsIHYsIGksIGosIHcsIFggPSBbXSwgbGltaXQgPSAxMjg7XG4gICAgaWYgKHNlZWQgPT09IChzZWVkIHwgMCkpIHtcbiAgICAgIC8vIE51bWVyaWMgc2VlZHMgaW5pdGlhbGl6ZSB2LCB3aGljaCBpcyB1c2VkIHRvIGdlbmVyYXRlcyBYLlxuICAgICAgdiA9IHNlZWQ7XG4gICAgICBzZWVkID0gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gU3RyaW5nIHNlZWRzIGFyZSBtaXhlZCBpbnRvIHYgYW5kIFggb25lIGNoYXJhY3RlciBhdCBhIHRpbWUuXG4gICAgICBzZWVkID0gc2VlZCArICdcXDAnO1xuICAgICAgdiA9IDA7XG4gICAgICBsaW1pdCA9IE1hdGgubWF4KGxpbWl0LCBzZWVkLmxlbmd0aCk7XG4gICAgfVxuICAgIC8vIEluaXRpYWxpemUgY2lyY3VsYXIgYXJyYXkgYW5kIHdleWwgdmFsdWUuXG4gICAgZm9yIChpID0gMCwgaiA9IC0zMjsgaiA8IGxpbWl0OyArK2opIHtcbiAgICAgIC8vIFB1dCB0aGUgdW5pY29kZSBjaGFyYWN0ZXJzIGludG8gdGhlIGFycmF5LCBhbmQgc2h1ZmZsZSB0aGVtLlxuICAgICAgaWYgKHNlZWQpIHYgXj0gc2VlZC5jaGFyQ29kZUF0KChqICsgMzIpICUgc2VlZC5sZW5ndGgpO1xuICAgICAgLy8gQWZ0ZXIgMzIgc2h1ZmZsZXMsIHRha2UgdiBhcyB0aGUgc3RhcnRpbmcgdyB2YWx1ZS5cbiAgICAgIGlmIChqID09PSAwKSB3ID0gdjtcbiAgICAgIHYgXj0gdiA8PCAxMDtcbiAgICAgIHYgXj0gdiA+Pj4gMTU7XG4gICAgICB2IF49IHYgPDwgNDtcbiAgICAgIHYgXj0gdiA+Pj4gMTM7XG4gICAgICBpZiAoaiA+PSAwKSB7XG4gICAgICAgIHcgPSAodyArIDB4NjFjODg2NDcpIHwgMDsgICAgIC8vIFdleWwuXG4gICAgICAgIHQgPSAoWFtqICYgMTI3XSBePSAodiArIHcpKTsgIC8vIENvbWJpbmUgeG9yIGFuZCB3ZXlsIHRvIGluaXQgYXJyYXkuXG4gICAgICAgIGkgPSAoMCA9PSB0KSA/IGkgKyAxIDogMDsgICAgIC8vIENvdW50IHplcm9lcy5cbiAgICAgIH1cbiAgICB9XG4gICAgLy8gV2UgaGF2ZSBkZXRlY3RlZCBhbGwgemVyb2VzOyBtYWtlIHRoZSBrZXkgbm9uemVyby5cbiAgICBpZiAoaSA+PSAxMjgpIHtcbiAgICAgIFhbKHNlZWQgJiYgc2VlZC5sZW5ndGggfHwgMCkgJiAxMjddID0gLTE7XG4gICAgfVxuICAgIC8vIFJ1biB0aGUgZ2VuZXJhdG9yIDUxMiB0aW1lcyB0byBmdXJ0aGVyIG1peCB0aGUgc3RhdGUgYmVmb3JlIHVzaW5nIGl0LlxuICAgIC8vIEZhY3RvcmluZyB0aGlzIGFzIGEgZnVuY3Rpb24gc2xvd3MgdGhlIG1haW4gZ2VuZXJhdG9yLCBzbyBpdCBpcyBqdXN0XG4gICAgLy8gdW5yb2xsZWQgaGVyZS4gIFRoZSB3ZXlsIGdlbmVyYXRvciBpcyBub3QgYWR2YW5jZWQgd2hpbGUgd2FybWluZyB1cC5cbiAgICBpID0gMTI3O1xuICAgIGZvciAoaiA9IDQgKiAxMjg7IGogPiAwOyAtLWopIHtcbiAgICAgIHYgPSBYWyhpICsgMzQpICYgMTI3XTtcbiAgICAgIHQgPSBYW2kgPSAoKGkgKyAxKSAmIDEyNyldO1xuICAgICAgdiBePSB2IDw8IDEzO1xuICAgICAgdCBePSB0IDw8IDE3O1xuICAgICAgdiBePSB2ID4+PiAxNTtcbiAgICAgIHQgXj0gdCA+Pj4gMTI7XG4gICAgICBYW2ldID0gdiBeIHQ7XG4gICAgfVxuICAgIC8vIFN0b3Jpbmcgc3RhdGUgYXMgb2JqZWN0IG1lbWJlcnMgaXMgZmFzdGVyIHRoYW4gdXNpbmcgY2xvc3VyZSB2YXJpYWJsZXMuXG4gICAgbWUudyA9IHc7XG4gICAgbWUuWCA9IFg7XG4gICAgbWUuaSA9IGk7XG4gIH1cblxuICBpbml0KG1lLCBzZWVkKTtcbn1cblxuZnVuY3Rpb24gY29weShmLCB0KSB7XG4gIHQuaSA9IGYuaTtcbiAgdC53ID0gZi53O1xuICB0LlggPSBmLlguc2xpY2UoKTtcbiAgcmV0dXJuIHQ7XG59O1xuXG5mdW5jdGlvbiBpbXBsKHNlZWQsIG9wdHMpIHtcbiAgaWYgKHNlZWQgPT0gbnVsbCkgc2VlZCA9ICsobmV3IERhdGUpO1xuICB2YXIgeGcgPSBuZXcgWG9yR2VuKHNlZWQpLFxuICAgICAgc3RhdGUgPSBvcHRzICYmIG9wdHMuc3RhdGUsXG4gICAgICBwcm5nID0gZnVuY3Rpb24oKSB7IHJldHVybiAoeGcubmV4dCgpID4+PiAwKSAvIDB4MTAwMDAwMDAwOyB9O1xuICBwcm5nLmRvdWJsZSA9IGZ1bmN0aW9uKCkge1xuICAgIGRvIHtcbiAgICAgIHZhciB0b3AgPSB4Zy5uZXh0KCkgPj4+IDExLFxuICAgICAgICAgIGJvdCA9ICh4Zy5uZXh0KCkgPj4+IDApIC8gMHgxMDAwMDAwMDAsXG4gICAgICAgICAgcmVzdWx0ID0gKHRvcCArIGJvdCkgLyAoMSA8PCAyMSk7XG4gICAgfSB3aGlsZSAocmVzdWx0ID09PSAwKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuICBwcm5nLmludDMyID0geGcubmV4dDtcbiAgcHJuZy5xdWljayA9IHBybmc7XG4gIGlmIChzdGF0ZSkge1xuICAgIGlmIChzdGF0ZS5YKSBjb3B5KHN0YXRlLCB4Zyk7XG4gICAgcHJuZy5zdGF0ZSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29weSh4Zywge30pOyB9XG4gIH1cbiAgcmV0dXJuIHBybmc7XG59XG5cbmlmIChtb2R1bGUgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBpbXBsO1xufSBlbHNlIGlmIChkZWZpbmUgJiYgZGVmaW5lLmFtZCkge1xuICBkZWZpbmUoZnVuY3Rpb24oKSB7IHJldHVybiBpbXBsOyB9KTtcbn0gZWxzZSB7XG4gIHRoaXMueG9yNDA5NiA9IGltcGw7XG59XG5cbn0pKFxuICB0aGlzLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB3aW5kb3cgb2JqZWN0IG9yIGdsb2JhbFxuICAodHlwZW9mIG1vZHVsZSkgPT0gJ29iamVjdCcgJiYgbW9kdWxlLCAgICAvLyBwcmVzZW50IGluIG5vZGUuanNcbiAgKHR5cGVvZiBkZWZpbmUpID09ICdmdW5jdGlvbicgJiYgZGVmaW5lICAgLy8gcHJlc2VudCB3aXRoIGFuIEFNRCBsb2FkZXJcbik7XG4iLCIvLyBBIEphdmFzY3JpcHQgaW1wbGVtZW50YWlvbiBvZiB0aGUgXCJ4b3JzaGlmdDdcIiBhbGdvcml0aG0gYnlcbi8vIEZyYW7Dp29pcyBQYW5uZXRvbiBhbmQgUGllcnJlIEwnZWN1eWVyOlxuLy8gXCJPbiB0aGUgWG9yZ3NoaWZ0IFJhbmRvbSBOdW1iZXIgR2VuZXJhdG9yc1wiXG4vLyBodHRwOi8vc2FsdWMuZW5nci51Y29ubi5lZHUvcmVmcy9jcnlwdG8vcm5nL3Bhbm5ldG9uMDVvbnRoZXhvcnNoaWZ0LnBkZlxuXG4oZnVuY3Rpb24oZ2xvYmFsLCBtb2R1bGUsIGRlZmluZSkge1xuXG5mdW5jdGlvbiBYb3JHZW4oc2VlZCkge1xuICB2YXIgbWUgPSB0aGlzO1xuXG4gIC8vIFNldCB1cCBnZW5lcmF0b3IgZnVuY3Rpb24uXG4gIG1lLm5leHQgPSBmdW5jdGlvbigpIHtcbiAgICAvLyBVcGRhdGUgeG9yIGdlbmVyYXRvci5cbiAgICB2YXIgWCA9IG1lLngsIGkgPSBtZS5pLCB0LCB2LCB3O1xuICAgIHQgPSBYW2ldOyB0IF49ICh0ID4+PiA3KTsgdiA9IHQgXiAodCA8PCAyNCk7XG4gICAgdCA9IFhbKGkgKyAxKSAmIDddOyB2IF49IHQgXiAodCA+Pj4gMTApO1xuICAgIHQgPSBYWyhpICsgMykgJiA3XTsgdiBePSB0IF4gKHQgPj4+IDMpO1xuICAgIHQgPSBYWyhpICsgNCkgJiA3XTsgdiBePSB0IF4gKHQgPDwgNyk7XG4gICAgdCA9IFhbKGkgKyA3KSAmIDddOyB0ID0gdCBeICh0IDw8IDEzKTsgdiBePSB0IF4gKHQgPDwgOSk7XG4gICAgWFtpXSA9IHY7XG4gICAgbWUuaSA9IChpICsgMSkgJiA3O1xuICAgIHJldHVybiB2O1xuICB9O1xuXG4gIGZ1bmN0aW9uIGluaXQobWUsIHNlZWQpIHtcbiAgICB2YXIgaiwgdywgWCA9IFtdO1xuXG4gICAgaWYgKHNlZWQgPT09IChzZWVkIHwgMCkpIHtcbiAgICAgIC8vIFNlZWQgc3RhdGUgYXJyYXkgdXNpbmcgYSAzMi1iaXQgaW50ZWdlci5cbiAgICAgIHcgPSBYWzBdID0gc2VlZDtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gU2VlZCBzdGF0ZSB1c2luZyBhIHN0cmluZy5cbiAgICAgIHNlZWQgPSAnJyArIHNlZWQ7XG4gICAgICBmb3IgKGogPSAwOyBqIDwgc2VlZC5sZW5ndGg7ICsraikge1xuICAgICAgICBYW2ogJiA3XSA9IChYW2ogJiA3XSA8PCAxNSkgXlxuICAgICAgICAgICAgKHNlZWQuY2hhckNvZGVBdChqKSArIFhbKGogKyAxKSAmIDddIDw8IDEzKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gRW5mb3JjZSBhbiBhcnJheSBsZW5ndGggb2YgOCwgbm90IGFsbCB6ZXJvZXMuXG4gICAgd2hpbGUgKFgubGVuZ3RoIDwgOCkgWC5wdXNoKDApO1xuICAgIGZvciAoaiA9IDA7IGogPCA4ICYmIFhbal0gPT09IDA7ICsraik7XG4gICAgaWYgKGogPT0gOCkgdyA9IFhbN10gPSAtMTsgZWxzZSB3ID0gWFtqXTtcblxuICAgIG1lLnggPSBYO1xuICAgIG1lLmkgPSAwO1xuXG4gICAgLy8gRGlzY2FyZCBhbiBpbml0aWFsIDI1NiB2YWx1ZXMuXG4gICAgZm9yIChqID0gMjU2OyBqID4gMDsgLS1qKSB7XG4gICAgICBtZS5uZXh0KCk7XG4gICAgfVxuICB9XG5cbiAgaW5pdChtZSwgc2VlZCk7XG59XG5cbmZ1bmN0aW9uIGNvcHkoZiwgdCkge1xuICB0LnggPSBmLnguc2xpY2UoKTtcbiAgdC5pID0gZi5pO1xuICByZXR1cm4gdDtcbn1cblxuZnVuY3Rpb24gaW1wbChzZWVkLCBvcHRzKSB7XG4gIGlmIChzZWVkID09IG51bGwpIHNlZWQgPSArKG5ldyBEYXRlKTtcbiAgdmFyIHhnID0gbmV3IFhvckdlbihzZWVkKSxcbiAgICAgIHN0YXRlID0gb3B0cyAmJiBvcHRzLnN0YXRlLFxuICAgICAgcHJuZyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gKHhnLm5leHQoKSA+Pj4gMCkgLyAweDEwMDAwMDAwMDsgfTtcbiAgcHJuZy5kb3VibGUgPSBmdW5jdGlvbigpIHtcbiAgICBkbyB7XG4gICAgICB2YXIgdG9wID0geGcubmV4dCgpID4+PiAxMSxcbiAgICAgICAgICBib3QgPSAoeGcubmV4dCgpID4+PiAwKSAvIDB4MTAwMDAwMDAwLFxuICAgICAgICAgIHJlc3VsdCA9ICh0b3AgKyBib3QpIC8gKDEgPDwgMjEpO1xuICAgIH0gd2hpbGUgKHJlc3VsdCA9PT0gMCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbiAgcHJuZy5pbnQzMiA9IHhnLm5leHQ7XG4gIHBybmcucXVpY2sgPSBwcm5nO1xuICBpZiAoc3RhdGUpIHtcbiAgICBpZiAoc3RhdGUueCkgY29weShzdGF0ZSwgeGcpO1xuICAgIHBybmcuc3RhdGUgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvcHkoeGcsIHt9KTsgfVxuICB9XG4gIHJldHVybiBwcm5nO1xufVxuXG5pZiAobW9kdWxlICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gaW1wbDtcbn0gZWxzZSBpZiAoZGVmaW5lICYmIGRlZmluZS5hbWQpIHtcbiAgZGVmaW5lKGZ1bmN0aW9uKCkgeyByZXR1cm4gaW1wbDsgfSk7XG59IGVsc2Uge1xuICB0aGlzLnhvcnNoaWZ0NyA9IGltcGw7XG59XG5cbn0pKFxuICB0aGlzLFxuICAodHlwZW9mIG1vZHVsZSkgPT0gJ29iamVjdCcgJiYgbW9kdWxlLCAgICAvLyBwcmVzZW50IGluIG5vZGUuanNcbiAgKHR5cGVvZiBkZWZpbmUpID09ICdmdW5jdGlvbicgJiYgZGVmaW5lICAgLy8gcHJlc2VudCB3aXRoIGFuIEFNRCBsb2FkZXJcbik7XG5cbiIsIi8vIEEgSmF2YXNjcmlwdCBpbXBsZW1lbnRhaW9uIG9mIHRoZSBcInhvcndvd1wiIHBybmcgYWxnb3JpdGhtIGJ5XG4vLyBHZW9yZ2UgTWFyc2FnbGlhLiAgU2VlIGh0dHA6Ly93d3cuanN0YXRzb2Z0Lm9yZy92MDgvaTE0L3BhcGVyXG5cbihmdW5jdGlvbihnbG9iYWwsIG1vZHVsZSwgZGVmaW5lKSB7XG5cbmZ1bmN0aW9uIFhvckdlbihzZWVkKSB7XG4gIHZhciBtZSA9IHRoaXMsIHN0cnNlZWQgPSAnJztcblxuICAvLyBTZXQgdXAgZ2VuZXJhdG9yIGZ1bmN0aW9uLlxuICBtZS5uZXh0ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHQgPSAobWUueCBeIChtZS54ID4+PiAyKSk7XG4gICAgbWUueCA9IG1lLnk7IG1lLnkgPSBtZS56OyBtZS56ID0gbWUudzsgbWUudyA9IG1lLnY7XG4gICAgcmV0dXJuIChtZS5kID0gKG1lLmQgKyAzNjI0MzcgfCAwKSkgK1xuICAgICAgIChtZS52ID0gKG1lLnYgXiAobWUudiA8PCA0KSkgXiAodCBeICh0IDw8IDEpKSkgfCAwO1xuICB9O1xuXG4gIG1lLnggPSAwO1xuICBtZS55ID0gMDtcbiAgbWUueiA9IDA7XG4gIG1lLncgPSAwO1xuICBtZS52ID0gMDtcblxuICBpZiAoc2VlZCA9PT0gKHNlZWQgfCAwKSkge1xuICAgIC8vIEludGVnZXIgc2VlZC5cbiAgICBtZS54ID0gc2VlZDtcbiAgfSBlbHNlIHtcbiAgICAvLyBTdHJpbmcgc2VlZC5cbiAgICBzdHJzZWVkICs9IHNlZWQ7XG4gIH1cblxuICAvLyBNaXggaW4gc3RyaW5nIHNlZWQsIHRoZW4gZGlzY2FyZCBhbiBpbml0aWFsIGJhdGNoIG9mIDY0IHZhbHVlcy5cbiAgZm9yICh2YXIgayA9IDA7IGsgPCBzdHJzZWVkLmxlbmd0aCArIDY0OyBrKyspIHtcbiAgICBtZS54IF49IHN0cnNlZWQuY2hhckNvZGVBdChrKSB8IDA7XG4gICAgaWYgKGsgPT0gc3Ryc2VlZC5sZW5ndGgpIHtcbiAgICAgIG1lLmQgPSBtZS54IDw8IDEwIF4gbWUueCA+Pj4gNDtcbiAgICB9XG4gICAgbWUubmV4dCgpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNvcHkoZiwgdCkge1xuICB0LnggPSBmLng7XG4gIHQueSA9IGYueTtcbiAgdC56ID0gZi56O1xuICB0LncgPSBmLnc7XG4gIHQudiA9IGYudjtcbiAgdC5kID0gZi5kO1xuICByZXR1cm4gdDtcbn1cblxuZnVuY3Rpb24gaW1wbChzZWVkLCBvcHRzKSB7XG4gIHZhciB4ZyA9IG5ldyBYb3JHZW4oc2VlZCksXG4gICAgICBzdGF0ZSA9IG9wdHMgJiYgb3B0cy5zdGF0ZSxcbiAgICAgIHBybmcgPSBmdW5jdGlvbigpIHsgcmV0dXJuICh4Zy5uZXh0KCkgPj4+IDApIC8gMHgxMDAwMDAwMDA7IH07XG4gIHBybmcuZG91YmxlID0gZnVuY3Rpb24oKSB7XG4gICAgZG8ge1xuICAgICAgdmFyIHRvcCA9IHhnLm5leHQoKSA+Pj4gMTEsXG4gICAgICAgICAgYm90ID0gKHhnLm5leHQoKSA+Pj4gMCkgLyAweDEwMDAwMDAwMCxcbiAgICAgICAgICByZXN1bHQgPSAodG9wICsgYm90KSAvICgxIDw8IDIxKTtcbiAgICB9IHdoaWxlIChyZXN1bHQgPT09IDApO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG4gIHBybmcuaW50MzIgPSB4Zy5uZXh0O1xuICBwcm5nLnF1aWNrID0gcHJuZztcbiAgaWYgKHN0YXRlKSB7XG4gICAgaWYgKHR5cGVvZihzdGF0ZSkgPT0gJ29iamVjdCcpIGNvcHkoc3RhdGUsIHhnKTtcbiAgICBwcm5nLnN0YXRlID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb3B5KHhnLCB7fSk7IH1cbiAgfVxuICByZXR1cm4gcHJuZztcbn1cblxuaWYgKG1vZHVsZSAmJiBtb2R1bGUuZXhwb3J0cykge1xuICBtb2R1bGUuZXhwb3J0cyA9IGltcGw7XG59IGVsc2UgaWYgKGRlZmluZSAmJiBkZWZpbmUuYW1kKSB7XG4gIGRlZmluZShmdW5jdGlvbigpIHsgcmV0dXJuIGltcGw7IH0pO1xufSBlbHNlIHtcbiAgdGhpcy54b3J3b3cgPSBpbXBsO1xufVxuXG59KShcbiAgdGhpcyxcbiAgKHR5cGVvZiBtb2R1bGUpID09ICdvYmplY3QnICYmIG1vZHVsZSwgICAgLy8gcHJlc2VudCBpbiBub2RlLmpzXG4gICh0eXBlb2YgZGVmaW5lKSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZSAgIC8vIHByZXNlbnQgd2l0aCBhbiBBTUQgbG9hZGVyXG4pO1xuXG5cbiIsIi8qXG5Db3B5cmlnaHQgMjAxNCBEYXZpZCBCYXUuXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZ1xuYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG5cIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbndpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbmRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0b1xucGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvXG50aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlXG5pbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCxcbkVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULlxuSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTllcbkNMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsXG5UT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRVxuU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbiovXG5cbihmdW5jdGlvbiAocG9vbCwgbWF0aCkge1xuLy9cbi8vIFRoZSBmb2xsb3dpbmcgY29uc3RhbnRzIGFyZSByZWxhdGVkIHRvIElFRUUgNzU0IGxpbWl0cy5cbi8vXG5cbi8vIERldGVjdCB0aGUgZ2xvYmFsIG9iamVjdCwgZXZlbiBpZiBvcGVyYXRpbmcgaW4gc3RyaWN0IG1vZGUuXG4vLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8xNDM4NzA1Ny8yNjUyOThcbnZhciBnbG9iYWwgPSAoMCwgZXZhbCkoJ3RoaXMnKSxcbiAgICB3aWR0aCA9IDI1NiwgICAgICAgIC8vIGVhY2ggUkM0IG91dHB1dCBpcyAwIDw9IHggPCAyNTZcbiAgICBjaHVua3MgPSA2LCAgICAgICAgIC8vIGF0IGxlYXN0IHNpeCBSQzQgb3V0cHV0cyBmb3IgZWFjaCBkb3VibGVcbiAgICBkaWdpdHMgPSA1MiwgICAgICAgIC8vIHRoZXJlIGFyZSA1MiBzaWduaWZpY2FudCBkaWdpdHMgaW4gYSBkb3VibGVcbiAgICBybmduYW1lID0gJ3JhbmRvbScsIC8vIHJuZ25hbWU6IG5hbWUgZm9yIE1hdGgucmFuZG9tIGFuZCBNYXRoLnNlZWRyYW5kb21cbiAgICBzdGFydGRlbm9tID0gbWF0aC5wb3cod2lkdGgsIGNodW5rcyksXG4gICAgc2lnbmlmaWNhbmNlID0gbWF0aC5wb3coMiwgZGlnaXRzKSxcbiAgICBvdmVyZmxvdyA9IHNpZ25pZmljYW5jZSAqIDIsXG4gICAgbWFzayA9IHdpZHRoIC0gMSxcbiAgICBub2RlY3J5cHRvOyAgICAgICAgIC8vIG5vZGUuanMgY3J5cHRvIG1vZHVsZSwgaW5pdGlhbGl6ZWQgYXQgdGhlIGJvdHRvbS5cblxuLy9cbi8vIHNlZWRyYW5kb20oKVxuLy8gVGhpcyBpcyB0aGUgc2VlZHJhbmRvbSBmdW5jdGlvbiBkZXNjcmliZWQgYWJvdmUuXG4vL1xuZnVuY3Rpb24gc2VlZHJhbmRvbShzZWVkLCBvcHRpb25zLCBjYWxsYmFjaykge1xuICB2YXIga2V5ID0gW107XG4gIG9wdGlvbnMgPSAob3B0aW9ucyA9PSB0cnVlKSA/IHsgZW50cm9weTogdHJ1ZSB9IDogKG9wdGlvbnMgfHwge30pO1xuXG4gIC8vIEZsYXR0ZW4gdGhlIHNlZWQgc3RyaW5nIG9yIGJ1aWxkIG9uZSBmcm9tIGxvY2FsIGVudHJvcHkgaWYgbmVlZGVkLlxuICB2YXIgc2hvcnRzZWVkID0gbWl4a2V5KGZsYXR0ZW4oXG4gICAgb3B0aW9ucy5lbnRyb3B5ID8gW3NlZWQsIHRvc3RyaW5nKHBvb2wpXSA6XG4gICAgKHNlZWQgPT0gbnVsbCkgPyBhdXRvc2VlZCgpIDogc2VlZCwgMyksIGtleSk7XG5cbiAgLy8gVXNlIHRoZSBzZWVkIHRvIGluaXRpYWxpemUgYW4gQVJDNCBnZW5lcmF0b3IuXG4gIHZhciBhcmM0ID0gbmV3IEFSQzQoa2V5KTtcblxuICAvLyBUaGlzIGZ1bmN0aW9uIHJldHVybnMgYSByYW5kb20gZG91YmxlIGluIFswLCAxKSB0aGF0IGNvbnRhaW5zXG4gIC8vIHJhbmRvbW5lc3MgaW4gZXZlcnkgYml0IG9mIHRoZSBtYW50aXNzYSBvZiB0aGUgSUVFRSA3NTQgdmFsdWUuXG4gIHZhciBwcm5nID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIG4gPSBhcmM0LmcoY2h1bmtzKSwgICAgICAgICAgICAgLy8gU3RhcnQgd2l0aCBhIG51bWVyYXRvciBuIDwgMiBeIDQ4XG4gICAgICAgIGQgPSBzdGFydGRlbm9tLCAgICAgICAgICAgICAgICAgLy8gICBhbmQgZGVub21pbmF0b3IgZCA9IDIgXiA0OC5cbiAgICAgICAgeCA9IDA7ICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgIGFuZCBubyAnZXh0cmEgbGFzdCBieXRlJy5cbiAgICB3aGlsZSAobiA8IHNpZ25pZmljYW5jZSkgeyAgICAgICAgICAvLyBGaWxsIHVwIGFsbCBzaWduaWZpY2FudCBkaWdpdHMgYnlcbiAgICAgIG4gPSAobiArIHgpICogd2lkdGg7ICAgICAgICAgICAgICAvLyAgIHNoaWZ0aW5nIG51bWVyYXRvciBhbmRcbiAgICAgIGQgKj0gd2lkdGg7ICAgICAgICAgICAgICAgICAgICAgICAvLyAgIGRlbm9taW5hdG9yIGFuZCBnZW5lcmF0aW5nIGFcbiAgICAgIHggPSBhcmM0LmcoMSk7ICAgICAgICAgICAgICAgICAgICAvLyAgIG5ldyBsZWFzdC1zaWduaWZpY2FudC1ieXRlLlxuICAgIH1cbiAgICB3aGlsZSAobiA+PSBvdmVyZmxvdykgeyAgICAgICAgICAgICAvLyBUbyBhdm9pZCByb3VuZGluZyB1cCwgYmVmb3JlIGFkZGluZ1xuICAgICAgbiAvPSAyOyAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgbGFzdCBieXRlLCBzaGlmdCBldmVyeXRoaW5nXG4gICAgICBkIC89IDI7ICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICByaWdodCB1c2luZyBpbnRlZ2VyIG1hdGggdW50aWxcbiAgICAgIHggPj4+PSAxOyAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgIHdlIGhhdmUgZXhhY3RseSB0aGUgZGVzaXJlZCBiaXRzLlxuICAgIH1cbiAgICByZXR1cm4gKG4gKyB4KSAvIGQ7ICAgICAgICAgICAgICAgICAvLyBGb3JtIHRoZSBudW1iZXIgd2l0aGluIFswLCAxKS5cbiAgfTtcblxuICBwcm5nLmludDMyID0gZnVuY3Rpb24oKSB7IHJldHVybiBhcmM0LmcoNCkgfCAwOyB9XG4gIHBybmcucXVpY2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGFyYzQuZyg0KSAvIDB4MTAwMDAwMDAwOyB9XG4gIHBybmcuZG91YmxlID0gcHJuZztcblxuICAvLyBNaXggdGhlIHJhbmRvbW5lc3MgaW50byBhY2N1bXVsYXRlZCBlbnRyb3B5LlxuICBtaXhrZXkodG9zdHJpbmcoYXJjNC5TKSwgcG9vbCk7XG5cbiAgLy8gQ2FsbGluZyBjb252ZW50aW9uOiB3aGF0IHRvIHJldHVybiBhcyBhIGZ1bmN0aW9uIG9mIHBybmcsIHNlZWQsIGlzX21hdGguXG4gIHJldHVybiAob3B0aW9ucy5wYXNzIHx8IGNhbGxiYWNrIHx8XG4gICAgICBmdW5jdGlvbihwcm5nLCBzZWVkLCBpc19tYXRoX2NhbGwsIHN0YXRlKSB7XG4gICAgICAgIGlmIChzdGF0ZSkge1xuICAgICAgICAgIC8vIExvYWQgdGhlIGFyYzQgc3RhdGUgZnJvbSB0aGUgZ2l2ZW4gc3RhdGUgaWYgaXQgaGFzIGFuIFMgYXJyYXkuXG4gICAgICAgICAgaWYgKHN0YXRlLlMpIHsgY29weShzdGF0ZSwgYXJjNCk7IH1cbiAgICAgICAgICAvLyBPbmx5IHByb3ZpZGUgdGhlIC5zdGF0ZSBtZXRob2QgaWYgcmVxdWVzdGVkIHZpYSBvcHRpb25zLnN0YXRlLlxuICAgICAgICAgIHBybmcuc3RhdGUgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvcHkoYXJjNCwge30pOyB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiBjYWxsZWQgYXMgYSBtZXRob2Qgb2YgTWF0aCAoTWF0aC5zZWVkcmFuZG9tKCkpLCBtdXRhdGVcbiAgICAgICAgLy8gTWF0aC5yYW5kb20gYmVjYXVzZSB0aGF0IGlzIGhvdyBzZWVkcmFuZG9tLmpzIGhhcyB3b3JrZWQgc2luY2UgdjEuMC5cbiAgICAgICAgaWYgKGlzX21hdGhfY2FsbCkgeyBtYXRoW3JuZ25hbWVdID0gcHJuZzsgcmV0dXJuIHNlZWQ7IH1cblxuICAgICAgICAvLyBPdGhlcndpc2UsIGl0IGlzIGEgbmV3ZXIgY2FsbGluZyBjb252ZW50aW9uLCBzbyByZXR1cm4gdGhlXG4gICAgICAgIC8vIHBybmcgZGlyZWN0bHkuXG4gICAgICAgIGVsc2UgcmV0dXJuIHBybmc7XG4gICAgICB9KShcbiAgcHJuZyxcbiAgc2hvcnRzZWVkLFxuICAnZ2xvYmFsJyBpbiBvcHRpb25zID8gb3B0aW9ucy5nbG9iYWwgOiAodGhpcyA9PSBtYXRoKSxcbiAgb3B0aW9ucy5zdGF0ZSk7XG59XG5tYXRoWydzZWVkJyArIHJuZ25hbWVdID0gc2VlZHJhbmRvbTtcblxuLy9cbi8vIEFSQzRcbi8vXG4vLyBBbiBBUkM0IGltcGxlbWVudGF0aW9uLiAgVGhlIGNvbnN0cnVjdG9yIHRha2VzIGEga2V5IGluIHRoZSBmb3JtIG9mXG4vLyBhbiBhcnJheSBvZiBhdCBtb3N0ICh3aWR0aCkgaW50ZWdlcnMgdGhhdCBzaG91bGQgYmUgMCA8PSB4IDwgKHdpZHRoKS5cbi8vXG4vLyBUaGUgZyhjb3VudCkgbWV0aG9kIHJldHVybnMgYSBwc2V1ZG9yYW5kb20gaW50ZWdlciB0aGF0IGNvbmNhdGVuYXRlc1xuLy8gdGhlIG5leHQgKGNvdW50KSBvdXRwdXRzIGZyb20gQVJDNC4gIEl0cyByZXR1cm4gdmFsdWUgaXMgYSBudW1iZXIgeFxuLy8gdGhhdCBpcyBpbiB0aGUgcmFuZ2UgMCA8PSB4IDwgKHdpZHRoIF4gY291bnQpLlxuLy9cbmZ1bmN0aW9uIEFSQzQoa2V5KSB7XG4gIHZhciB0LCBrZXlsZW4gPSBrZXkubGVuZ3RoLFxuICAgICAgbWUgPSB0aGlzLCBpID0gMCwgaiA9IG1lLmkgPSBtZS5qID0gMCwgcyA9IG1lLlMgPSBbXTtcblxuICAvLyBUaGUgZW1wdHkga2V5IFtdIGlzIHRyZWF0ZWQgYXMgWzBdLlxuICBpZiAoIWtleWxlbikgeyBrZXkgPSBba2V5bGVuKytdOyB9XG5cbiAgLy8gU2V0IHVwIFMgdXNpbmcgdGhlIHN0YW5kYXJkIGtleSBzY2hlZHVsaW5nIGFsZ29yaXRobS5cbiAgd2hpbGUgKGkgPCB3aWR0aCkge1xuICAgIHNbaV0gPSBpKys7XG4gIH1cbiAgZm9yIChpID0gMDsgaSA8IHdpZHRoOyBpKyspIHtcbiAgICBzW2ldID0gc1tqID0gbWFzayAmIChqICsga2V5W2kgJSBrZXlsZW5dICsgKHQgPSBzW2ldKSldO1xuICAgIHNbal0gPSB0O1xuICB9XG5cbiAgLy8gVGhlIFwiZ1wiIG1ldGhvZCByZXR1cm5zIHRoZSBuZXh0IChjb3VudCkgb3V0cHV0cyBhcyBvbmUgbnVtYmVyLlxuICAobWUuZyA9IGZ1bmN0aW9uKGNvdW50KSB7XG4gICAgLy8gVXNpbmcgaW5zdGFuY2UgbWVtYmVycyBpbnN0ZWFkIG9mIGNsb3N1cmUgc3RhdGUgbmVhcmx5IGRvdWJsZXMgc3BlZWQuXG4gICAgdmFyIHQsIHIgPSAwLFxuICAgICAgICBpID0gbWUuaSwgaiA9IG1lLmosIHMgPSBtZS5TO1xuICAgIHdoaWxlIChjb3VudC0tKSB7XG4gICAgICB0ID0gc1tpID0gbWFzayAmIChpICsgMSldO1xuICAgICAgciA9IHIgKiB3aWR0aCArIHNbbWFzayAmICgoc1tpXSA9IHNbaiA9IG1hc2sgJiAoaiArIHQpXSkgKyAoc1tqXSA9IHQpKV07XG4gICAgfVxuICAgIG1lLmkgPSBpOyBtZS5qID0gajtcbiAgICByZXR1cm4gcjtcbiAgICAvLyBGb3Igcm9idXN0IHVucHJlZGljdGFiaWxpdHksIHRoZSBmdW5jdGlvbiBjYWxsIGJlbG93IGF1dG9tYXRpY2FsbHlcbiAgICAvLyBkaXNjYXJkcyBhbiBpbml0aWFsIGJhdGNoIG9mIHZhbHVlcy4gIFRoaXMgaXMgY2FsbGVkIFJDNC1kcm9wWzI1Nl0uXG4gICAgLy8gU2VlIGh0dHA6Ly9nb29nbGUuY29tL3NlYXJjaD9xPXJzYStmbHVocmVyK3Jlc3BvbnNlJmJ0bklcbiAgfSkod2lkdGgpO1xufVxuXG4vL1xuLy8gY29weSgpXG4vLyBDb3BpZXMgaW50ZXJuYWwgc3RhdGUgb2YgQVJDNCB0byBvciBmcm9tIGEgcGxhaW4gb2JqZWN0LlxuLy9cbmZ1bmN0aW9uIGNvcHkoZiwgdCkge1xuICB0LmkgPSBmLmk7XG4gIHQuaiA9IGYuajtcbiAgdC5TID0gZi5TLnNsaWNlKCk7XG4gIHJldHVybiB0O1xufTtcblxuLy9cbi8vIGZsYXR0ZW4oKVxuLy8gQ29udmVydHMgYW4gb2JqZWN0IHRyZWUgdG8gbmVzdGVkIGFycmF5cyBvZiBzdHJpbmdzLlxuLy9cbmZ1bmN0aW9uIGZsYXR0ZW4ob2JqLCBkZXB0aCkge1xuICB2YXIgcmVzdWx0ID0gW10sIHR5cCA9ICh0eXBlb2Ygb2JqKSwgcHJvcDtcbiAgaWYgKGRlcHRoICYmIHR5cCA9PSAnb2JqZWN0Jykge1xuICAgIGZvciAocHJvcCBpbiBvYmopIHtcbiAgICAgIHRyeSB7IHJlc3VsdC5wdXNoKGZsYXR0ZW4ob2JqW3Byb3BdLCBkZXB0aCAtIDEpKTsgfSBjYXRjaCAoZSkge31cbiAgICB9XG4gIH1cbiAgcmV0dXJuIChyZXN1bHQubGVuZ3RoID8gcmVzdWx0IDogdHlwID09ICdzdHJpbmcnID8gb2JqIDogb2JqICsgJ1xcMCcpO1xufVxuXG4vL1xuLy8gbWl4a2V5KClcbi8vIE1peGVzIGEgc3RyaW5nIHNlZWQgaW50byBhIGtleSB0aGF0IGlzIGFuIGFycmF5IG9mIGludGVnZXJzLCBhbmRcbi8vIHJldHVybnMgYSBzaG9ydGVuZWQgc3RyaW5nIHNlZWQgdGhhdCBpcyBlcXVpdmFsZW50IHRvIHRoZSByZXN1bHQga2V5LlxuLy9cbmZ1bmN0aW9uIG1peGtleShzZWVkLCBrZXkpIHtcbiAgdmFyIHN0cmluZ3NlZWQgPSBzZWVkICsgJycsIHNtZWFyLCBqID0gMDtcbiAgd2hpbGUgKGogPCBzdHJpbmdzZWVkLmxlbmd0aCkge1xuICAgIGtleVttYXNrICYgal0gPVxuICAgICAgbWFzayAmICgoc21lYXIgXj0ga2V5W21hc2sgJiBqXSAqIDE5KSArIHN0cmluZ3NlZWQuY2hhckNvZGVBdChqKyspKTtcbiAgfVxuICByZXR1cm4gdG9zdHJpbmcoa2V5KTtcbn1cblxuLy9cbi8vIGF1dG9zZWVkKClcbi8vIFJldHVybnMgYW4gb2JqZWN0IGZvciBhdXRvc2VlZGluZywgdXNpbmcgd2luZG93LmNyeXB0byBhbmQgTm9kZSBjcnlwdG9cbi8vIG1vZHVsZSBpZiBhdmFpbGFibGUuXG4vL1xuZnVuY3Rpb24gYXV0b3NlZWQoKSB7XG4gIHRyeSB7XG4gICAgdmFyIG91dDtcbiAgICBpZiAobm9kZWNyeXB0byAmJiAob3V0ID0gbm9kZWNyeXB0by5yYW5kb21CeXRlcykpIHtcbiAgICAgIC8vIFRoZSB1c2Ugb2YgJ291dCcgdG8gcmVtZW1iZXIgcmFuZG9tQnl0ZXMgbWFrZXMgdGlnaHQgbWluaWZpZWQgY29kZS5cbiAgICAgIG91dCA9IG91dCh3aWR0aCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG91dCA9IG5ldyBVaW50OEFycmF5KHdpZHRoKTtcbiAgICAgIChnbG9iYWwuY3J5cHRvIHx8IGdsb2JhbC5tc0NyeXB0bykuZ2V0UmFuZG9tVmFsdWVzKG91dCk7XG4gICAgfVxuICAgIHJldHVybiB0b3N0cmluZyhvdXQpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgdmFyIGJyb3dzZXIgPSBnbG9iYWwubmF2aWdhdG9yLFxuICAgICAgICBwbHVnaW5zID0gYnJvd3NlciAmJiBicm93c2VyLnBsdWdpbnM7XG4gICAgcmV0dXJuIFsrbmV3IERhdGUsIGdsb2JhbCwgcGx1Z2lucywgZ2xvYmFsLnNjcmVlbiwgdG9zdHJpbmcocG9vbCldO1xuICB9XG59XG5cbi8vXG4vLyB0b3N0cmluZygpXG4vLyBDb252ZXJ0cyBhbiBhcnJheSBvZiBjaGFyY29kZXMgdG8gYSBzdHJpbmdcbi8vXG5mdW5jdGlvbiB0b3N0cmluZyhhKSB7XG4gIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KDAsIGEpO1xufVxuXG4vL1xuLy8gV2hlbiBzZWVkcmFuZG9tLmpzIGlzIGxvYWRlZCwgd2UgaW1tZWRpYXRlbHkgbWl4IGEgZmV3IGJpdHNcbi8vIGZyb20gdGhlIGJ1aWx0LWluIFJORyBpbnRvIHRoZSBlbnRyb3B5IHBvb2wuICBCZWNhdXNlIHdlIGRvXG4vLyBub3Qgd2FudCB0byBpbnRlcmZlcmUgd2l0aCBkZXRlcm1pbmlzdGljIFBSTkcgc3RhdGUgbGF0ZXIsXG4vLyBzZWVkcmFuZG9tIHdpbGwgbm90IGNhbGwgbWF0aC5yYW5kb20gb24gaXRzIG93biBhZ2FpbiBhZnRlclxuLy8gaW5pdGlhbGl6YXRpb24uXG4vL1xubWl4a2V5KG1hdGgucmFuZG9tKCksIHBvb2wpO1xuXG4vL1xuLy8gTm9kZWpzIGFuZCBBTUQgc3VwcG9ydDogZXhwb3J0IHRoZSBpbXBsZW1lbnRhdGlvbiBhcyBhIG1vZHVsZSB1c2luZ1xuLy8gZWl0aGVyIGNvbnZlbnRpb24uXG4vL1xuaWYgKCh0eXBlb2YgbW9kdWxlKSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHNlZWRyYW5kb207XG4gIC8vIFdoZW4gaW4gbm9kZS5qcywgdHJ5IHVzaW5nIGNyeXB0byBwYWNrYWdlIGZvciBhdXRvc2VlZGluZy5cbiAgdHJ5IHtcbiAgICBub2RlY3J5cHRvID0gcmVxdWlyZSgnY3J5cHRvJyk7XG4gIH0gY2F0Y2ggKGV4KSB7fVxufSBlbHNlIGlmICgodHlwZW9mIGRlZmluZSkgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gIGRlZmluZShmdW5jdGlvbigpIHsgcmV0dXJuIHNlZWRyYW5kb207IH0pO1xufVxuXG4vLyBFbmQgYW5vbnltb3VzIHNjb3BlLCBhbmQgcGFzcyBpbml0aWFsIHZhbHVlcy5cbn0pKFxuICBbXSwgICAgIC8vIHBvb2w6IGVudHJvcHkgcG9vbCBzdGFydHMgZW1wdHlcbiAgTWF0aCAgICAvLyBtYXRoOiBwYWNrYWdlIGNvbnRhaW5pbmcgcmFuZG9tLCBwb3csIGFuZCBzZWVkcmFuZG9tXG4pO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcblx0dGhyb3cgbmV3IEVycm9yKFwiZGVmaW5lIGNhbm5vdCBiZSB1c2VkIGluZGlyZWN0XCIpO1xufTtcbiIsIi8qIGdsb2JhbHMgX193ZWJwYWNrX2FtZF9vcHRpb25zX18gKi9cbm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX2FtZF9vcHRpb25zX187XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHRpZiAoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcblx0XHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XG5cdH1cblx0cmV0dXJuIG1vZHVsZTtcbn07XG4iLCIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJjYXVzYWwtbmV0LmNvcmVcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnV0aWxzXCIpLCByZXF1aXJlKFwicmFuZG9tXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcImNhdXNhbC1uZXQuY29yZVwiLCBcImNhdXNhbC1uZXQudXRpbHNcIiwgXCJyYW5kb21cIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQGNhdXNhbE5ldC9zYW1wbGluZ1wiXSA9IGZhY3RvcnkocmVxdWlyZShcImNhdXNhbC1uZXQuY29yZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQudXRpbHNcIiksIHJlcXVpcmUoXCJyYW5kb21cIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkBjYXVzYWxOZXQvc2FtcGxpbmdcIl0gPSBmYWN0b3J5KHJvb3RbXCJjYXVzYWwtbmV0LmNvcmVcIl0sIHJvb3RbXCJjYXVzYWwtbmV0LnV0aWxzXCJdLCByb290W1wicmFuZG9tXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9jb3JlX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF91dGlsc19fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3JhbmRvbV9fKSB7XG5yZXR1cm4gLyoqKioqKi8gKGZ1bmN0aW9uKG1vZHVsZXMpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHRpOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdGw6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge31cbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbi8qKioqKiovIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbi8qKioqKiovIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4vKioqKioqLyBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuLyoqKioqKi8gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4vKioqKioqLyBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuLyoqKioqKi8gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4vKioqKioqLyBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuLyoqKioqKi8gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4vKioqKioqLyBcdFx0cmV0dXJuIG5zO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4vKioqKioqLyBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4vKioqKioqLyBcdFx0cmV0dXJuIGdldHRlcjtcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuLyoqKioqKi8gfSlcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyAoe1xuXG4vKioqLyBcIi4vc3JjL2NhdXNhbE5ldFNhbXBsaW5nLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL2NhdXNhbE5ldFNhbXBsaW5nLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIGV4cG9ydHMgcHJvdmlkZWQ6IGRlZmF1bHQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgY2F1c2FsX25ldF9jb3JlX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBjYXVzYWwtbmV0LmNvcmUgKi8gXCJjYXVzYWwtbmV0LmNvcmVcIik7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgY2F1c2FsX25ldF9jb3JlX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19fZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9fX3dlYnBhY2tfcmVxdWlyZV9fLm4oY2F1c2FsX25ldF9jb3JlX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18pO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIGNhdXNhbF9uZXRfdXRpbHNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIGNhdXNhbC1uZXQudXRpbHMgKi8gXCJjYXVzYWwtbmV0LnV0aWxzXCIpO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIGNhdXNhbF9uZXRfdXRpbHNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX19kZWZhdWx0ID0gLyojX19QVVJFX18qL19fd2VicGFja19yZXF1aXJlX18ubihjYXVzYWxfbmV0X3V0aWxzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX18pO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIHJhbmRvbV9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgcmFuZG9tICovIFwicmFuZG9tXCIpO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIHJhbmRvbV9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovX193ZWJwYWNrX3JlcXVpcmVfXy5uKHJhbmRvbV9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfc3ViU2FtcGxpbmdfbWl4aW5zX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8zX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL3N1YlNhbXBsaW5nLm1peGlucyAqLyBcIi4vc3JjL3N1YlNhbXBsaW5nLm1peGlucy5qc1wiKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfbmVnU2FtcGxpbmdfbWl4aW5zX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV80X18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL25lZ1NhbXBsaW5nLm1peGlucyAqLyBcIi4vc3JjL25lZ1NhbXBsaW5nLm1peGlucy5qc1wiKTtcblxuXG5cblxuXG4vKipcbiAqIFRoaXMgY2xhc3MgcHJvdmlkZXMgY29tbW9uIHVzZWQgc2FtcGxpbmcgbWV0aG9kcyB3aGljaCBjYW4gYmUgYWNjZXNzZWQgdmlhICoqY2F1c2FsTmV0U2FtcGxpbmcqKi5cbiAqIG1peHdpdGg6XG4gKiBbIFN1YlNhbXBsaW5nTWl4aW5zLCBOZWdTYW1wbGluZ01peGlucyBdXG4gKiBAY2xhc3MgQ2F1c2FsTmV0U2FtcGxpbmdcbiAqIEBleHRlbmRzIEZ1bmN0b3JcbiAqIEBleGFtcGxlXG4gKiBbRVhBTVBMRSAuLi9leGFtcGxlcy9jYXVzYWxOZXRTYW1wbGluZy5iYWJlbC5qc11cbiAqL1xuXG5jbGFzcyBDYXVzYWxOZXRTYW1wbGluZyBleHRlbmRzIGNhdXNhbF9uZXRfdXRpbHNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX1tcInBsYXRmb3JtXCJdLm1peFdpdGgoY2F1c2FsX25ldF9jb3JlX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19bXCJGdW5jdG9yXCJdLCBbX3N1YlNhbXBsaW5nX21peGluc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfM19fW1wiZGVmYXVsdFwiXSwgX25lZ1NhbXBsaW5nX21peGluc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfNF9fW1wiZGVmYXVsdFwiXV0pIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLlJhbmRvbSA9IHJhbmRvbV9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fX2RlZmF1bHQuYTtcbiAgfVxuXG59XG5cbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gX193ZWJwYWNrX2V4cG9ydHNfX1tcImRlZmF1bHRcIl0gPSAobmV3IENhdXNhbE5ldFNhbXBsaW5nKCkpO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9pbmRleC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9pbmRleC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBleHBvcnRzIHByb3ZpZGVkOiBjYXVzYWxOZXRTYW1wbGluZywgU2FtcGxpbmdNaXhpbnMsIFN1YlNhbXBsaW5nTWl4aW5zLCBOZWdTYW1wbGluZ01peGlucyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbl9fd2VicGFja19yZXF1aXJlX18ucihfX3dlYnBhY2tfZXhwb3J0c19fKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfY2F1c2FsTmV0U2FtcGxpbmdfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vY2F1c2FsTmV0U2FtcGxpbmcgKi8gXCIuL3NyYy9jYXVzYWxOZXRTYW1wbGluZy5qc1wiKTtcbi8qIGhhcm1vbnkgcmVleHBvcnQgKHNhZmUpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcImNhdXNhbE5ldFNhbXBsaW5nXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gX2NhdXNhbE5ldFNhbXBsaW5nX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19bXCJkZWZhdWx0XCJdOyB9KTtcblxuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9zYW1wbGluZ19taXhpbnNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vc2FtcGxpbmcubWl4aW5zICovIFwiLi9zcmMvc2FtcGxpbmcubWl4aW5zLmpzXCIpO1xuLyogaGFybW9ueSByZWV4cG9ydCAoc2FmZSkgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiU2FtcGxpbmdNaXhpbnNcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBfc2FtcGxpbmdfbWl4aW5zX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19bXCJkZWZhdWx0XCJdOyB9KTtcblxuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9zdWJTYW1wbGluZ19taXhpbnNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vc3ViU2FtcGxpbmcubWl4aW5zICovIFwiLi9zcmMvc3ViU2FtcGxpbmcubWl4aW5zLmpzXCIpO1xuLyogaGFybW9ueSByZWV4cG9ydCAoc2FmZSkgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiU3ViU2FtcGxpbmdNaXhpbnNcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBfc3ViU2FtcGxpbmdfbWl4aW5zX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19bXCJkZWZhdWx0XCJdOyB9KTtcblxuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9uZWdTYW1wbGluZ19taXhpbnNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vbmVnU2FtcGxpbmcubWl4aW5zICovIFwiLi9zcmMvbmVnU2FtcGxpbmcubWl4aW5zLmpzXCIpO1xuLyogaGFybW9ueSByZWV4cG9ydCAoc2FmZSkgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiTmVnU2FtcGxpbmdNaXhpbnNcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBfbmVnU2FtcGxpbmdfbWl4aW5zX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8zX19bXCJkZWZhdWx0XCJdOyB9KTtcblxuXG5cblxuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL25lZ1NhbXBsaW5nLm1peGlucy5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvbmVnU2FtcGxpbmcubWl4aW5zLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBleHBvcnRzIHByb3ZpZGVkOiBkZWZhdWx0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xuY29uc3QgTmVnYXRpdmVTYW1wbGluZ01peGlucyA9IEJhc2VTYW1wbGluZ0NsYXNzID0+IGNsYXNzIGV4dGVuZHMgQmFzZVNhbXBsaW5nQ2xhc3Mge1xuICAvKipcbiAgICogUGVyZm9ybSBuZWdhdGl2ZSBzYW1wbGluZyBnaXZlbiB0aGUgc2VsZWN0IHByb2Igb2YgaWRzIGFuZCBsaXN0IG9mIHBvc2l0aXZlIHNhbXBsZXNcbiAgICogQHBhcmFtIHsgTnVtYmVyIH0gbmVnYXRpdmVTaXplIC0gc2l6ZSB0byBzYW1wbGVcbiAgICogQHBhcmFtIHsgQXJyYXkgfSBwb3NpdGl2ZVNhbXBsZXMgLSBBcnJheSBvZiBwb3NzaXRpdmUgSWRzXG4gICAqIEBwYXJhbSB7IEFycmF5IH0gY2FuZGlkYXRlUHJvYnMgLSBBcnJheSBvZiBwcm9iYWJsaXR5IG9mIGNhbmRpZGF0ZSBJZHNcbiAgICogQHBhcmFtIHsgQm9vbGVhbiB9IFtyZXBsYWNhYmxlPXRydWVdIC0gaWYgdHJ1ZSwgbm8gZHVwbGljYXRlZCBzYW1wbGluZyBJZCByZXR1cm5lZFxuICAgKiBAcmV0dXJucyB7IEFycmF5IH0gYXJyYXkgb2Ygc2FtcGxlZCBJZHNcbiAgICovXG4gIG5lZ1NhbXBsaW5nKG5lZ2F0aXZlU2l6ZSwgcG9zaXRpdmVTYW1wbGVzLCBjYW5kaWRhdGVQcm9icywgcmVwbGFjYWJsZSA9IHRydWUpIHtcbiAgICBjb25zdCBSID0gdGhpcy5SLFxuICAgICAgICAgIFJhbmRvbSA9IHRoaXMuUmFuZG9tO1xuXG4gICAgaWYgKFIuYW55KHYgPT4gIVIudHlwZShOdW1iZXIsIHYpIHx8IHYgPiAxIHx8IHYgPCAwLCBjYW5kaWRhdGVQcm9icykpIHtcbiAgICAgIHRocm93IEVycm9yKGAke0pTT04uc3RyaW5naWZ5KGNhbmRpZGF0ZVByb2JzKX0gaXMgbm90IGFsbG93YCk7XG4gICAgfVxuXG4gICAgbGV0IHNlbGV0aW9uUHJvYnMgPSBSLnJlZHVjZSgoc2VsZWN0aW9uUHJvYnMsIHBpZHgpID0+IHtcbiAgICAgIHNlbGVjdGlvblByb2JzW3BpZHhdID0gSW5maW5pdHk7IC8vcG9zaXRpdmUgY2FuZGlkYXRlIG5ldmVyIGJlIGNob29zZWRcblxuICAgICAgcmV0dXJuIHNlbGVjdGlvblByb2JzO1xuICAgIH0sIFIuY2xvbmUoY2FuZGlkYXRlUHJvYnMpLCBwb3NpdGl2ZVNhbXBsZXMpO1xuICAgIGxldCBzYW1wbGVzID0gW10sXG4gICAgICAgIHRha2VuSWR4cyA9IFIuY2xvbmUoc2VsZXRpb25Qcm9icyk7XG5cbiAgICBjb25zdCBHZW5OZXdDYW5kaWRhdGVJZHggPSAoKSA9PiBSYW5kb20uaW50KDAsIHNlbGV0aW9uUHJvYnMubGVuZ3RoIC0gMSk7XG5cbiAgICBjb25zdCBTZWxlY3RJZkhpZ2hQcm9iID0gcHJvYiA9PiB7XG4gICAgICBsZXQgcmFuZCA9IFJhbmRvbS5mbG9hdCgpO1xuICAgICAgcmV0dXJuIHJhbmQgPiBwcm9iO1xuICAgIH07XG5cbiAgICB3aGlsZSAoc2FtcGxlcy5sZW5ndGggPCBuZWdhdGl2ZVNpemUpIHtcbiAgICAgIGxldCBpZHggPSBHZW5OZXdDYW5kaWRhdGVJZHgoKTtcbiAgICAgIGxldCBzZWxlY3RlZCA9IFNlbGVjdElmSGlnaFByb2Ioc2VsZXRpb25Qcm9ic1tpZHhdKTtcblxuICAgICAgaWYgKCFzZWxlY3RlZCkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFyZXBsYWNhYmxlICYmIHRha2VuSWR4c1tpZHhdID09PSBudWxsKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBzYW1wbGVzID0gWy4uLnNhbXBsZXMsIGlkeF07XG5cbiAgICAgIGlmICghcmVwbGFjYWJsZSkge1xuICAgICAgICB0YWtlbklkeHNbaWR4XSA9IG51bGw7IC8vbm9uIHJlcGxhY2VhYmxlXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHNhbXBsZXM7XG4gIH1cblxufTtcblxuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyBfX3dlYnBhY2tfZXhwb3J0c19fW1wiZGVmYXVsdFwiXSA9IChOZWdhdGl2ZVNhbXBsaW5nTWl4aW5zKTtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvc2FtcGxpbmcubWl4aW5zLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9zYW1wbGluZy5taXhpbnMuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIGV4cG9ydHMgcHJvdmlkZWQ6IGRlZmF1bHQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgY2F1c2FsX25ldF9jb3JlX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBjYXVzYWwtbmV0LmNvcmUgKi8gXCJjYXVzYWwtbmV0LmNvcmVcIik7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgY2F1c2FsX25ldF9jb3JlX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19fZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9fX3dlYnBhY2tfcmVxdWlyZV9fLm4oY2F1c2FsX25ldF9jb3JlX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18pO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIGNhdXNhbF9uZXRfdXRpbHNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIGNhdXNhbC1uZXQudXRpbHMgKi8gXCJjYXVzYWwtbmV0LnV0aWxzXCIpO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIGNhdXNhbF9uZXRfdXRpbHNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX19kZWZhdWx0ID0gLyojX19QVVJFX18qL19fd2VicGFja19yZXF1aXJlX18ubihjYXVzYWxfbmV0X3V0aWxzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX18pO1xuXG5cbi8qKlxuICogVGhpcyBtaXhpbiBjbGFzcyBwcm92aWRlIGF0dHJpYnV0ZXM6ICoqU2FtcGxpbmcqKi5cbiAqIEBjbGFzcyBTYW1wbGluZ01peGluc1xuICogQGV4dGVuZHMgQmFzZUNsYXNzXG4gKiBAZXhhbXBsZVxuICogW0VYQU1QTEUgLi4vZXhhbXBsZXMvc2FtcGxpbmcubWl4aW5zLmJhYmVsLmpzXVxuICovXG5cbmNvbnN0IFNhbXBsaW5nTWl4aW5zID0gQmFzZUNsYXNzID0+IGNsYXNzIGV4dGVuZHMgQmFzZUNsYXNzIHtcbiAgLyoqXG4gICAqIGdldCBjdXJyZW50IHJhbmRvbSBpbnN0YW5jZVxuICAgKi9cbiAgZ2V0IFNhbXBsaW5nKCkge1xuICAgIGlmICghdGhpcy5zYW1wbGluZykge1xuICAgICAgdGhyb3cgRXJyb3IoYFNhbXBsaW5nIGlzIG5vdCBzZXRgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5zYW1wbGluZztcbiAgfVxuICAvKipcbiAgICogc2V0IFNhbXBsaW5nIGluc3RhbmNlXG4gICAqIEByZWFkb25seVxuICAgKi9cblxuXG4gIHNldCBTYW1wbGluZyhzYW1wbGluZykge1xuICAgIGNhdXNhbF9uZXRfdXRpbHNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX1tcImFzc2VydFwiXS5iZUluc3RhbmNlT2Yoc2FtcGxpbmcsIGNhdXNhbF9uZXRfY29yZV9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fW1wiRnVuY3RvclwiXSk7XG4gICAgdGhpcy5zYW1wbGluZyA9IHNhbXBsaW5nO1xuICB9XG5cbn07XG5cbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gX193ZWJwYWNrX2V4cG9ydHNfX1tcImRlZmF1bHRcIl0gPSAoU2FtcGxpbmdNaXhpbnMpO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9zdWJTYW1wbGluZy5taXhpbnMuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL3N1YlNhbXBsaW5nLm1peGlucy5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgZXhwb3J0cyBwcm92aWRlZDogZGVmYXVsdCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbl9fd2VicGFja19yZXF1aXJlX18ucihfX3dlYnBhY2tfZXhwb3J0c19fKTtcbmNvbnN0IFN1YlNhbXBsaW5nTWl4aW5zID0gQmFzZVNhbXBsaW5nQ2xhc3MgPT4gY2xhc3MgZXh0ZW5kcyBCYXNlU2FtcGxpbmdDbGFzcyB7XG4gIC8qKlxuICAgKiBQZXJmb3JtIHVuaWZvcm0gc2FtcGxlIGEgc3ViIHNldCBvZiBJZHMgZ2l2ZW4gdGhlIGNhbmRpZGF0ZSBsaXN0XG4gICAqIEBwYXJhbSB7IE51bWJlciB9IHNhbXBsaW5nU2l6ZVxuICAgKiBAcGFyYW0geyBBcnJheXxOdW1iZXIgfSBjYW5kaWRhdGVMaXN0IC0gbGlzdCBvZiBjYW5kaWRhdGVzIG9yIHNpemUgb2YgY2FuZGlkYXRlIGxpc3RcbiAgICogQHBhcmFtIHsgQm9vbGVhbiB9IFtyZXBsYWNhYmxlPXRydWVdIC0gaWYgdHJ1ZSwgbm8gZHVwbGljYXRlZCBzYW1wbGluZyBJZCByZXR1cm5lZFxuICAgKiBAcmV0dXJucyB7IEFycmF5IH0gYXJyYXkgb2Ygc2FtcGxlZCBJZHNcbiAgICovXG4gIHN1YlNhbXBsaW5nKHNhbXBsaW5nU2l6ZSwgY2FuZGlkYXRlTGlzdCwgcmVwbGFjYWJsZSA9IHRydWUpIHtcbiAgICBjb25zdCBSID0gdGhpcy5SLFxuICAgICAgICAgIFJhbmRvbSA9IHRoaXMuUmFuZG9tO1xuICAgIGxldCBjYW5kaWRhdGVzID0gQXJyYXkuaXNBcnJheShjYW5kaWRhdGVMaXN0KSA/IFIuY2xvbmUoY2FuZGlkYXRlTGlzdCkgOiBSLnJhbmdlKDAsIGNhbmRpZGF0ZUxpc3QpO1xuXG4gICAgaWYgKGNhbmRpZGF0ZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aHJvdyBFcnJvcignY2FuZGlkYXRlIGxlbmd0aCBzaG91bGQgYmUgcG9zaXRpdmUnKTtcbiAgICB9XG5cbiAgICBsZXQgc2FtcGxlcyA9IFtdLFxuICAgICAgICB0YWtlbklkeHMgPSBSLmNsb25lKGNhbmRpZGF0ZXMpO1xuXG4gICAgY29uc3QgR2VuTmV3Q2FuZGlkYXRlSWR4ID0gKCkgPT4gUmFuZG9tLmludCgwLCBjYW5kaWRhdGVzLmxlbmd0aCAtIDEpO1xuXG4gICAgd2hpbGUgKHNhbXBsZXMubGVuZ3RoIDwgc2FtcGxpbmdTaXplKSB7XG4gICAgICBsZXQgaWR4ID0gR2VuTmV3Q2FuZGlkYXRlSWR4KCk7XG5cbiAgICAgIGlmICghcmVwbGFjYWJsZSAmJiB0YWtlbklkeHNbaWR4XSA9PT0gbnVsbCkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgc2FtcGxlcyA9IFsuLi5zYW1wbGVzLCBjYW5kaWRhdGVzW2lkeF1dO1xuXG4gICAgICBpZiAoIXJlcGxhY2FibGUpIHtcbiAgICAgICAgdGFrZW5JZHhzW2lkeF0gPSBudWxsOyAvL25vbiByZXBsYWNlYWJsZVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzYW1wbGVzO1xuICB9XG5cbn07XG5cbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gX193ZWJwYWNrX2V4cG9ydHNfX1tcImRlZmF1bHRcIl0gPSAoU3ViU2FtcGxpbmdNaXhpbnMpO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCJjYXVzYWwtbmV0LmNvcmVcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogZXh0ZXJuYWwgXCJjYXVzYWwtbmV0LmNvcmVcIiAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5tb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9jb3JlX187XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcImNhdXNhbC1uZXQudXRpbHNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIGV4dGVybmFsIFwiY2F1c2FsLW5ldC51dGlsc1wiICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5tb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF91dGlsc19fO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCJyYW5kb21cIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogZXh0ZXJuYWwgXCJyYW5kb21cIiAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5tb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcmFuZG9tX187XG5cbi8qKiovIH0pXG5cbi8qKioqKiovIH0pO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbmRsWW5CaFkyczZMeTlBWTJGMWMyRnNUbVYwTDNOaGJYQnNhVzVuTDNkbFluQmhZMnN2ZFc1cGRtVnljMkZzVFc5a2RXeGxSR1ZtYVc1cGRHbHZiaUlzSW5kbFluQmhZMnM2THk5QVkyRjFjMkZzVG1WMEwzTmhiWEJzYVc1bkwzZGxZbkJoWTJzdlltOXZkSE4wY21Gd0lpd2lkMlZpY0dGamF6b3ZMMEJqWVhWellXeE9aWFF2YzJGdGNHeHBibWN2TGk5emNtTXZZMkYxYzJGc1RtVjBVMkZ0Y0d4cGJtY3Vhbk1pTENKM1pXSndZV05yT2k4dlFHTmhkWE5oYkU1bGRDOXpZVzF3YkdsdVp5OHVMM055WXk5cGJtUmxlQzVxY3lJc0luZGxZbkJoWTJzNkx5OUFZMkYxYzJGc1RtVjBMM05oYlhCc2FXNW5MeTR2YzNKakwyNWxaMU5oYlhCc2FXNW5MbTFwZUdsdWN5NXFjeUlzSW5kbFluQmhZMnM2THk5QVkyRjFjMkZzVG1WMEwzTmhiWEJzYVc1bkx5NHZjM0pqTDNOaGJYQnNhVzVuTG0xcGVHbHVjeTVxY3lJc0luZGxZbkJoWTJzNkx5OUFZMkYxYzJGc1RtVjBMM05oYlhCc2FXNW5MeTR2YzNKakwzTjFZbE5oYlhCc2FXNW5MbTFwZUdsdWN5NXFjeUlzSW5kbFluQmhZMnM2THk5QVkyRjFjMkZzVG1WMEwzTmhiWEJzYVc1bkwyVjRkR1Z5Ym1Gc0lGd2lZMkYxYzJGc0xXNWxkQzVqYjNKbFhDSWlMQ0ozWldKd1lXTnJPaTh2UUdOaGRYTmhiRTVsZEM5ellXMXdiR2x1Wnk5bGVIUmxjbTVoYkNCY0ltTmhkWE5oYkMxdVpYUXVkWFJwYkhOY0lpSXNJbmRsWW5CaFkyczZMeTlBWTJGMWMyRnNUbVYwTDNOaGJYQnNhVzVuTDJWNGRHVnlibUZzSUZ3aWNtRnVaRzl0WENJaVhTd2libUZ0WlhNaU9sc2lRMkYxYzJGc1RtVjBVMkZ0Y0d4cGJtY2lMQ0p3YkdGMFptOXliU0lzSW0xcGVGZHBkR2dpTENKQ1lYTmxSblZ1WTNSdmNpSXNJbE4xWWxOaGJYQnNhVzVuVFdsNGFXNXpJaXdpVG1WblUyRnRjR3hwYm1kTmFYaHBibk1pTENKamIyNXpkSEoxWTNSdmNpSXNJbEpoYm1SdmJTSXNJbkpoYm1SdmJTSXNJazVsWjJGMGFYWmxVMkZ0Y0d4cGJtZE5hWGhwYm5NaUxDSkNZWE5sVTJGdGNHeHBibWREYkdGemN5SXNJbTVsWjFOaGJYQnNhVzVuSWl3aWJtVm5ZWFJwZG1WVGFYcGxJaXdpY0c5emFYUnBkbVZUWVcxd2JHVnpJaXdpWTJGdVpHbGtZWFJsVUhKdlluTWlMQ0p5WlhCc1lXTmhZbXhsSWl3aVVpSXNJbUZ1ZVNJc0luWWlMQ0owZVhCbElpd2lUblZ0WW1WeUlpd2lSWEp5YjNJaUxDSktVMDlPSWl3aWMzUnlhVzVuYVdaNUlpd2ljMlZzWlhScGIyNVFjbTlpY3lJc0luSmxaSFZqWlNJc0luTmxiR1ZqZEdsdmJsQnliMkp6SWl3aWNHbGtlQ0lzSWtsdVptbHVhWFI1SWl3aVkyeHZibVVpTENKellXMXdiR1Z6SWl3aWRHRnJaVzVKWkhoeklpd2lSMlZ1VG1WM1EyRnVaR2xrWVhSbFNXUjRJaXdpYVc1MElpd2liR1Z1WjNSb0lpd2lVMlZzWldOMFNXWklhV2RvVUhKdllpSXNJbkJ5YjJJaUxDSnlZVzVrSWl3aVpteHZZWFFpTENKcFpIZ2lMQ0p6Wld4bFkzUmxaQ0lzSWxOaGJYQnNhVzVuVFdsNGFXNXpJaXdpUW1GelpVTnNZWE56SWl3aVUyRnRjR3hwYm1jaUxDSnpZVzF3YkdsdVp5SXNJbUZ6YzJWeWRDSXNJbUpsU1c1emRHRnVZMlZQWmlJc0lrWjFibU4wYjNJaUxDSnpkV0pUWVcxd2JHbHVaeUlzSW5OaGJYQnNhVzVuVTJsNlpTSXNJbU5oYm1ScFpHRjBaVXhwYzNRaUxDSmpZVzVrYVdSaGRHVnpJaXdpUVhKeVlYa2lMQ0pwYzBGeWNtRjVJaXdpY21GdVoyVWlYU3dpYldGd2NHbHVaM01pT2lKQlFVRkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRU5CUVVNN1FVRkRSQ3hQTzBGRFZrRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN096dEJRVWRCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4clJFRkJNRU1zWjBOQlFXZERPMEZCUXpGRk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1owVkJRWGRFTEd0Q1FVRnJRanRCUVVNeFJUdEJRVU5CTEhsRVFVRnBSQ3hqUVVGak8wRkJReTlFT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hwUkVGQmVVTXNhVU5CUVdsRE8wRkJRekZGTEhkSVFVRm5TQ3h0UWtGQmJVSXNSVUZCUlR0QlFVTnlTVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJMRzFEUVVFeVFpd3dRa0ZCTUVJc1JVRkJSVHRCUVVOMlJDeDVRMEZCYVVNc1pVRkJaVHRCUVVOb1JEdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRU3c0UkVGQmMwUXNLMFJCUVN0RU96dEJRVVZ5U0R0QlFVTkJPenM3UVVGSFFUdEJRVU5CT3pzN096czdPenM3T3pzN08wRkRiRVpCTzBGQlFVRTdRVUZCUVR0QlFVRkJPMEZCUVVFN1FVRkJRVHRCUVVGQk8wRkJRVUU3UVVGQlFUdEJRVUZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkZRVHM3T3pzN096czdPenRCUVZOQkxFMUJRVTFCTEdsQ1FVRk9MRk5CUVdkRFF5eDVSRUZCVVN4RFFVRkRReXhQUVVGVUxFTkJRV3RDUXl4MVJFRkJiRUlzUlVGRE5VSXNRMEZCUlVNc01rUkJRVVlzUlVGQmNVSkRMREpFUVVGeVFpeERRVVEwUWl4RFFVRm9ReXhEUVVNMlF6dEJRVU42UTBNc1lVRkJWeXhIUVVGRk8wRkJRMVE3UVVGRFFTeFRRVUZMUXl4TlFVRk1MRWRCUVdORExEWkRRVUZrTzBGQlEwZzdPMEZCU25kRE96dEJRVTg1UWl4dFJVRkJTVklzYVVKQlFVb3NSVUZCWml4Rk96czdPenM3T3pzN096czdRVU4yUWtFN1FVRkJRVHRCUVVGQk8wRkJRVUU3UVVGQlFUdEJRVUZCTzBGQlFVRTdRVUZCUVR0QlFVRkJPMEZCUVVFN1FVRkJRVHRCUVVGQk8wRkJRVUU3UVVGQlFUdEJRVU5CTzBGQlJVRTdPenM3T3pzN096czdPenM3UVVOSVFUdEJRVUZCTEUxQlFVMVRMSE5DUVVGelFpeEhRVUZKUXl4cFFrRkJSQ3hKUVVGelFpeGpRVUZqUVN4cFFrRkJaQ3hEUVVFclFqdEJRVU5vUmpzN096czdPenM3UVVGUlFVTXNZVUZCVnl4RFFVRkRReXhaUVVGRUxFVkJRV1ZETEdWQlFXWXNSVUZCWjBORExHTkJRV2hETEVWQlFXZEVReXhWUVVGVkxFZEJRVU1zU1VGQk0wUXNSVUZCWjBVN1FVRkRka1VzVlVGQlRVTXNRMEZCUXl4SFFVRkhMRXRCUVV0QkxFTkJRV1k3UVVGQlFTeFZRVUZyUWxRc1RVRkJUU3hIUVVGSExFdEJRVXRCTEUxQlFXaERPenRCUVVOQkxGRkJRVWRUTEVOQlFVTXNRMEZCUTBNc1IwRkJSaXhEUVVGUFF5eERRVUZFTEVsQlFVMHNRMEZCUTBZc1EwRkJReXhEUVVGRFJ5eEpRVUZHTEVOQlFVOURMRTFCUVZBc1JVRkJZMFlzUTBGQlpDeERRVUZFTEVsQlFYRkNRU3hEUVVGRExFZEJRVWNzUTBGQmVrSXNTVUZCT0VKQkxFTkJRVU1zUjBGQlJ5eERRVUU1UXl4RlFVRnBSRW9zWTBGQmFrUXNRMEZCU0N4RlFVRnZSVHRCUVVOb1JTeFpRVUZOVHl4TFFVRkxMRU5CUVVVc1IwRkJSVU1zU1VGQlNTeERRVUZEUXl4VFFVRk1MRU5CUVdWVUxHTkJRV1lzUTBGQkswSXNaVUZCYmtNc1EwRkJXRHRCUVVOSU96dEJRVU5FTEZGQlFVbFZMR0ZCUVdFc1IwRkJSMUlzUTBGQlF5eERRVUZEVXl4TlFVRkdMRU5CUVZNc1EwRkJRME1zWTBGQlJDeEZRVUZwUWtNc1NVRkJha0lzUzBGQmQwSTdRVUZETjBKRUxHOUNRVUZqTEVOQlFVTkRMRWxCUVVRc1EwRkJaQ3hIUVVGMVFrTXNVVUZCZGtJc1EwRkVOa0lzUTBGRFJ6czdRVUZEYUVNc1lVRkJUMFlzWTBGQlVEdEJRVU5JTEV0QlNFUXNSVUZIUjFZc1EwRkJReXhEUVVGRFlTeExRVUZHTEVOQlFWRm1MR05CUVZJc1EwRklTQ3hGUVVjMFFrUXNaVUZJTlVJc1EwRkJjRUk3UVVGSlFTeFJRVUZKYVVJc1QwRkJUeXhIUVVGSExFVkJRV1E3UVVGQlFTeFJRVUZyUWtNc1UwRkJVeXhIUVVGSFppeERRVUZETEVOQlFVTmhMRXRCUVVZc1EwRkJVVXdzWVVGQlVpeERRVUU1UWpzN1FVRkRRU3hWUVVGTlVTeHJRa0ZCYTBJc1IwRkJSeXhOUVVGSmVrSXNUVUZCVFN4RFFVRkRNRUlzUjBGQlVDeERRVUZYTEVOQlFWZ3NSVUZCWTFRc1lVRkJZU3hEUVVGRFZTeE5RVUZrTEVkQlFYRkNMRU5CUVc1RExFTkJRUzlDT3p0QlFVTkJMRlZCUVUxRExHZENRVUZuUWl4SFFVRkpReXhKUVVGRUxFbEJRVkU3UVVGRE4wSXNWVUZCU1VNc1NVRkJTU3hIUVVGSE9VSXNUVUZCVFN4RFFVRkRLMElzUzBGQlVDeEZRVUZZTzBGQlEwRXNZVUZCVDBRc1NVRkJTU3hIUVVGRFJDeEpRVUZhTzBGQlEwZ3NTMEZJUkRzN1FVRkpRU3hYUVVGTlRpeFBRVUZQTEVOQlFVTkpMRTFCUVZJc1IwRkJhVUowUWl4WlFVRjJRaXhGUVVGdlF6dEJRVU5vUXl4VlFVRkpNa0lzUjBGQlJ5eEhRVUZIVUN4clFrRkJhMElzUlVGQk5VSTdRVUZEUVN4VlFVRkpVU3hSUVVGUkxFZEJRVWRNTEdkQ1FVRm5RaXhEUVVGRFdDeGhRVUZoTEVOQlFVTmxMRWRCUVVRc1EwRkJaQ3hEUVVFdlFqczdRVUZEUVN4VlFVRkhMRU5CUVVORExGRkJRVW9zUlVGQllUdEJRVU5VTzBGQlEwZzdPMEZCUTBRc1ZVRkJSeXhEUVVGRGVrSXNWVUZCUkN4SlFVRmxaMElzVTBGQlV5eERRVUZEVVN4SFFVRkVMRU5CUVZRc1MwRkJhVUlzU1VGQmJrTXNSVUZCZDBNN1FVRkRjRU03UVVGRFNEczdRVUZEUkZRc1lVRkJUeXhIUVVGSExFTkJRVU1zUjBGQlIwRXNUMEZCU2l4RlFVRmhVeXhIUVVGaUxFTkJRVlk3TzBGQlEwRXNWVUZCUnl4RFFVRkRlRUlzVlVGQlNpeEZRVUZsTzBGQlExaG5RaXhwUWtGQlV5eERRVUZEVVN4SFFVRkVMRU5CUVZRc1IwRkJaU3hKUVVGbUxFTkJSRmNzUTBGRFV6dEJRVU4yUWp0QlFVTktPenRCUVVORUxGZEJRVTlVTEU5QlFWQTdRVUZEU0RzN1FVRjJReXRGTEVOQlFYQkdPenRCUVhsRFpYSkNMSEZHUVVGbUxFVTdPenM3T3pzN096czdPenRCUTNwRFFUdEJRVUZCTzBGQlFVRTdRVUZCUVR0QlFVRkJPMEZCUVVFN1FVRkRRVHRCUVVOQk96czdPenM3T3p0QlFVOUJMRTFCUVUxblF5eGpRVUZqTEVkQlFVbERMRk5CUVVRc1NVRkJZeXhqUVVGalFTeFRRVUZrTEVOQlFYVkNPMEZCUTNoRU96czdRVUZIUVN4TlFVRkpReXhSUVVGS0xFZEJRV003UVVGRFZpeFJRVUZITEVOQlFVTXNTMEZCUzBNc1VVRkJWQ3hGUVVGclFqdEJRVU5rTEZsQlFVMTJRaXhMUVVGTExFTkJRVVVzY1VKQlFVWXNRMEZCV0R0QlFVTklPenRCUVVORUxGZEJRVThzUzBGQlMzVkNMRkZCUVZvN1FVRkRTRHRCUVVWRU96czdPenM3UVVGSlFTeE5RVUZKUkN4UlFVRktMRU5CUVdGRExGRkJRV0lzUlVGQmMwSTdRVUZEYkVKRExESkVRVUZOTEVOQlFVTkRMRmxCUVZBc1EwRkJiMEpHTEZGQlFYQkNMRVZCUVRoQ1J5eDFSRUZCT1VJN1FVRkRRU3hUUVVGTFNDeFJRVUZNTEVkQlFXZENRU3hSUVVGb1FqdEJRVU5JT3p0QlFXeENkVVFzUTBGQk5VUTdPMEZCY1VKbFNDdzJSVUZCWml4Rk96czdPenM3T3pzN096czdRVU01UWtFN1FVRkJRU3hOUVVGTmNrTXNhVUpCUVdsQ0xFZEJRVWxOTEdsQ1FVRkVMRWxCUVhWQ0xHTkJRV05CTEdsQ1FVRmtMRU5CUVN0Q08wRkJRelZGT3pzN096czdPMEZCVDBGelF5eGhRVUZYTEVOQlFVTkRMRmxCUVVRc1JVRkJaVU1zWVVGQlppeEZRVUU0UW01RExGVkJRVlVzUjBGQlF5eEpRVUY2UXl4RlFVRTRRenRCUVVOeVJDeFZRVUZOUXl4RFFVRkRMRWRCUVVjc1MwRkJTMEVzUTBGQlpqdEJRVUZCTEZWQlFXdENWQ3hOUVVGTkxFZEJRVWNzUzBGQlMwRXNUVUZCYUVNN1FVRkRRU3hSUVVGSk5FTXNWVUZCVlN4SFFVRkhReXhMUVVGTExFTkJRVU5ETEU5QlFVNHNRMEZCWTBnc1lVRkJaQ3hKUVVFMlFteERMRU5CUVVNc1EwRkJRMkVzUzBGQlJpeERRVUZSY1VJc1lVRkJVaXhEUVVFM1FpeEhRVUZ2Ukd4RExFTkJRVU1zUTBGQlEzTkRMRXRCUVVZc1EwRkJVU3hEUVVGU0xFVkJRVmRLTEdGQlFWZ3NRMEZCY2tVN08wRkJRMEVzVVVGQlIwTXNWVUZCVlN4RFFVRkRha0lzVFVGQldDeExRVUZ6UWl4RFFVRjZRaXhGUVVFeVFqdEJRVU4yUWl4WlFVRk5ZaXhMUVVGTExFTkJRVU1zY1VOQlFVUXNRMEZCV0R0QlFVTklPenRCUVVORUxGRkJRVWxUTEU5QlFVOHNSMEZCUnl4RlFVRmtPMEZCUVVFc1VVRkJhMEpETEZOQlFWTXNSMEZCUjJZc1EwRkJReXhEUVVGRFlTeExRVUZHTEVOQlFWRnpRaXhWUVVGU0xFTkJRVGxDT3p0QlFVTkJMRlZCUVUxdVFpeHJRa0ZCYTBJc1IwRkJSeXhOUVVGSmVrSXNUVUZCVFN4RFFVRkRNRUlzUjBGQlVDeERRVUZYTEVOQlFWZ3NSVUZCWTJ0Q0xGVkJRVlVzUTBGQlEycENMRTFCUVZnc1IwRkJhMElzUTBGQmFFTXNRMEZCTDBJN08wRkJRMEVzVjBGQlRVb3NUMEZCVHl4RFFVRkRTU3hOUVVGU0xFZEJRV2xDWlN4WlFVRjJRaXhGUVVGdlF6dEJRVU5vUXl4VlFVRkpWaXhIUVVGSExFZEJRVWRRTEd0Q1FVRnJRaXhGUVVFMVFqczdRVUZEUVN4VlFVRkhMRU5CUVVOcVFpeFZRVUZFTEVsQlFXVm5RaXhUUVVGVExFTkJRVU5STEVkQlFVUXNRMEZCVkN4TFFVRnBRaXhKUVVGdVF5eEZRVUYzUXp0QlFVTndRenRCUVVOSU96dEJRVU5FVkN4aFFVRlBMRWRCUVVjc1EwRkJReXhIUVVGSFFTeFBRVUZLTEVWQlFXRnhRaXhWUVVGVkxFTkJRVU5hTEVkQlFVUXNRMEZCZGtJc1EwRkJWanM3UVVGRFFTeFZRVUZITEVOQlFVTjRRaXhWUVVGS0xFVkJRV1U3UVVGRFdHZENMR2xDUVVGVExFTkJRVU5STEVkQlFVUXNRMEZCVkN4SFFVRmxMRWxCUVdZc1EwRkVWeXhEUVVOVE8wRkJRM1pDTzBGQlEwbzdPMEZCUTBRc1YwRkJUMVFzVDBGQlVEdEJRVU5JT3p0QlFUTkNNa1VzUTBGQmFFWTdPMEZCTmtKbE1VSXNaMFpCUVdZc1JUczdPenM3T3pzN096czdRVU0zUWtFc05rUTdPenM3T3pzN096czdPMEZEUVVFc09FUTdPenM3T3pzN096czdPMEZEUVVFc2IwUWlMQ0ptYVd4bElqb2lRR05oZFhOaGJFNWxkQzl6WVcxd2JHbHVaeTUzWldJdWFuTWlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUlvWm5WdVkzUnBiMjRnZDJWaWNHRmphMVZ1YVhabGNuTmhiRTF2WkhWc1pVUmxabWx1YVhScGIyNG9jbTl2ZEN3Z1ptRmpkRzl5ZVNrZ2UxeHVYSFJwWmloMGVYQmxiMllnWlhod2IzSjBjeUE5UFQwZ0oyOWlhbVZqZENjZ0ppWWdkSGx3Wlc5bUlHMXZaSFZzWlNBOVBUMGdKMjlpYW1WamRDY3BYRzVjZEZ4MGJXOWtkV3hsTG1WNGNHOXlkSE1nUFNCbVlXTjBiM0o1S0hKbGNYVnBjbVVvWENKallYVnpZV3d0Ym1WMExtTnZjbVZjSWlrc0lISmxjWFZwY21Vb1hDSmpZWFZ6WVd3dGJtVjBMblYwYVd4elhDSXBMQ0J5WlhGMWFYSmxLRndpY21GdVpHOXRYQ0lwS1R0Y2JseDBaV3h6WlNCcFppaDBlWEJsYjJZZ1pHVm1hVzVsSUQwOVBTQW5ablZ1WTNScGIyNG5JQ1ltSUdSbFptbHVaUzVoYldRcFhHNWNkRngwWkdWbWFXNWxLRnRjSW1OaGRYTmhiQzF1WlhRdVkyOXlaVndpTENCY0ltTmhkWE5oYkMxdVpYUXVkWFJwYkhOY0lpd2dYQ0p5WVc1a2IyMWNJbDBzSUdaaFkzUnZjbmtwTzF4dVhIUmxiSE5sSUdsbUtIUjVjR1Z2WmlCbGVIQnZjblJ6SUQwOVBTQW5iMkpxWldOMEp5bGNibHgwWEhSbGVIQnZjblJ6VzF3aVFHTmhkWE5oYkU1bGRDOXpZVzF3YkdsdVoxd2lYU0E5SUdaaFkzUnZjbmtvY21WeGRXbHlaU2hjSW1OaGRYTmhiQzF1WlhRdVkyOXlaVndpS1N3Z2NtVnhkV2x5WlNoY0ltTmhkWE5oYkMxdVpYUXVkWFJwYkhOY0lpa3NJSEpsY1hWcGNtVW9YQ0p5WVc1a2IyMWNJaWtwTzF4dVhIUmxiSE5sWEc1Y2RGeDBjbTl2ZEZ0Y0lrQmpZWFZ6WVd4T1pYUXZjMkZ0Y0d4cGJtZGNJbDBnUFNCbVlXTjBiM0o1S0hKdmIzUmJYQ0pqWVhWellXd3RibVYwTG1OdmNtVmNJbDBzSUhKdmIzUmJYQ0pqWVhWellXd3RibVYwTG5WMGFXeHpYQ0pkTENCeWIyOTBXMXdpY21GdVpHOXRYQ0pkS1R0Y2JuMHBLSFJvYVhNc0lHWjFibU4wYVc5dUtGOWZWMFZDVUVGRFMxOUZXRlJGVWs1QlRGOU5UMFJWVEVWZlkyRjFjMkZzWDI1bGRGOWpiM0psWDE4c0lGOWZWMFZDVUVGRFMxOUZXRlJGVWs1QlRGOU5UMFJWVEVWZlkyRjFjMkZzWDI1bGRGOTFkR2xzYzE5ZkxDQmZYMWRGUWxCQlEwdGZSVmhVUlZKT1FVeGZUVTlFVlV4RlgzSmhibVJ2YlY5ZktTQjdYRzV5WlhSMWNtNGdJaXdpSUZ4MEx5OGdWR2hsSUcxdlpIVnNaU0JqWVdOb1pWeHVJRngwZG1GeUlHbHVjM1JoYkd4bFpFMXZaSFZzWlhNZ1BTQjdmVHRjYmx4dUlGeDBMeThnVkdobElISmxjWFZwY21VZ1puVnVZM1JwYjI1Y2JpQmNkR1oxYm1OMGFXOXVJRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMThvYlc5a2RXeGxTV1FwSUh0Y2JseHVJRngwWEhRdkx5QkRhR1ZqYXlCcFppQnRiMlIxYkdVZ2FYTWdhVzRnWTJGamFHVmNiaUJjZEZ4MGFXWW9hVzV6ZEdGc2JHVmtUVzlrZFd4bGMxdHRiMlIxYkdWSlpGMHBJSHRjYmlCY2RGeDBYSFJ5WlhSMWNtNGdhVzV6ZEdGc2JHVmtUVzlrZFd4bGMxdHRiMlIxYkdWSlpGMHVaWGh3YjNKMGN6dGNiaUJjZEZ4MGZWeHVJRngwWEhRdkx5QkRjbVZoZEdVZ1lTQnVaWGNnYlc5a2RXeGxJQ2hoYm1RZ2NIVjBJR2wwSUdsdWRHOGdkR2hsSUdOaFkyaGxLVnh1SUZ4MFhIUjJZWElnYlc5a2RXeGxJRDBnYVc1emRHRnNiR1ZrVFc5a2RXeGxjMXR0YjJSMWJHVkpaRjBnUFNCN1hHNGdYSFJjZEZ4MGFUb2diVzlrZFd4bFNXUXNYRzRnWEhSY2RGeDBiRG9nWm1Gc2MyVXNYRzRnWEhSY2RGeDBaWGh3YjNKMGN6b2dlMzFjYmlCY2RGeDBmVHRjYmx4dUlGeDBYSFF2THlCRmVHVmpkWFJsSUhSb1pTQnRiMlIxYkdVZ1puVnVZM1JwYjI1Y2JpQmNkRngwYlc5a2RXeGxjMXR0YjJSMWJHVkpaRjB1WTJGc2JDaHRiMlIxYkdVdVpYaHdiM0owY3l3Z2JXOWtkV3hsTENCdGIyUjFiR1V1Wlhod2IzSjBjeXdnWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHlrN1hHNWNiaUJjZEZ4MEx5OGdSbXhoWnlCMGFHVWdiVzlrZFd4bElHRnpJR3h2WVdSbFpGeHVJRngwWEhSdGIyUjFiR1V1YkNBOUlIUnlkV1U3WEc1Y2JpQmNkRngwTHk4Z1VtVjBkWEp1SUhSb1pTQmxlSEJ2Y25SeklHOW1JSFJvWlNCdGIyUjFiR1ZjYmlCY2RGeDBjbVYwZFhKdUlHMXZaSFZzWlM1bGVIQnZjblJ6TzF4dUlGeDBmVnh1WEc1Y2JpQmNkQzh2SUdWNGNHOXpaU0IwYUdVZ2JXOWtkV3hsY3lCdlltcGxZM1FnS0Y5ZmQyVmljR0ZqYTE5dGIyUjFiR1Z6WDE4cFhHNGdYSFJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG0wZ1BTQnRiMlIxYkdWek8xeHVYRzRnWEhRdkx5QmxlSEJ2YzJVZ2RHaGxJRzF2WkhWc1pTQmpZV05vWlZ4dUlGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTVqSUQwZ2FXNXpkR0ZzYkdWa1RXOWtkV3hsY3p0Y2JseHVJRngwTHk4Z1pHVm1hVzVsSUdkbGRIUmxjaUJtZFc1amRHbHZiaUJtYjNJZ2FHRnliVzl1ZVNCbGVIQnZjblJ6WEc0Z1hIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbVFnUFNCbWRXNWpkR2x2YmlobGVIQnZjblJ6TENCdVlXMWxMQ0JuWlhSMFpYSXBJSHRjYmlCY2RGeDBhV1lvSVY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dWJ5aGxlSEJ2Y25SekxDQnVZVzFsS1NrZ2UxeHVJRngwWEhSY2RFOWlhbVZqZEM1a1pXWnBibVZRY205d1pYSjBlU2hsZUhCdmNuUnpMQ0J1WVcxbExDQjdJR1Z1ZFcxbGNtRmliR1U2SUhSeWRXVXNJR2RsZERvZ1oyVjBkR1Z5SUgwcE8xeHVJRngwWEhSOVhHNGdYSFI5TzF4dVhHNGdYSFF2THlCa1pXWnBibVVnWDE5bGMwMXZaSFZzWlNCdmJpQmxlSEJ2Y25SelhHNGdYSFJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG5JZ1BTQm1kVzVqZEdsdmJpaGxlSEJ2Y25SektTQjdYRzRnWEhSY2RHbG1LSFI1Y0dWdlppQlRlVzFpYjJ3Z0lUMDlJQ2QxYm1SbFptbHVaV1FuSUNZbUlGTjViV0p2YkM1MGIxTjBjbWx1WjFSaFp5a2dlMXh1SUZ4MFhIUmNkRTlpYW1WamRDNWtaV1pwYm1WUWNtOXdaWEowZVNobGVIQnZjblJ6TENCVGVXMWliMnd1ZEc5VGRISnBibWRVWVdjc0lIc2dkbUZzZFdVNklDZE5iMlIxYkdVbklIMHBPMXh1SUZ4MFhIUjlYRzRnWEhSY2RFOWlhbVZqZEM1a1pXWnBibVZRY205d1pYSjBlU2hsZUhCdmNuUnpMQ0FuWDE5bGMwMXZaSFZzWlNjc0lIc2dkbUZzZFdVNklIUnlkV1VnZlNrN1hHNGdYSFI5TzF4dVhHNGdYSFF2THlCamNtVmhkR1VnWVNCbVlXdGxJRzVoYldWemNHRmpaU0J2WW1wbFkzUmNiaUJjZEM4dklHMXZaR1VnSmlBeE9pQjJZV3gxWlNCcGN5QmhJRzF2WkhWc1pTQnBaQ3dnY21WeGRXbHlaU0JwZEZ4dUlGeDBMeThnYlc5a1pTQW1JREk2SUcxbGNtZGxJR0ZzYkNCd2NtOXdaWEowYVdWeklHOW1JSFpoYkhWbElHbHVkRzhnZEdobElHNXpYRzRnWEhRdkx5QnRiMlJsSUNZZ05Eb2djbVYwZFhKdUlIWmhiSFZsSUhkb1pXNGdZV3h5WldGa2VTQnVjeUJ2WW1wbFkzUmNiaUJjZEM4dklHMXZaR1VnSmlBNGZERTZJR0psYUdGMlpTQnNhV3RsSUhKbGNYVnBjbVZjYmlCY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVkQ0E5SUdaMWJtTjBhVzl1S0haaGJIVmxMQ0J0YjJSbEtTQjdYRzRnWEhSY2RHbG1LRzF2WkdVZ0ppQXhLU0IyWVd4MVpTQTlJRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMThvZG1Gc2RXVXBPMXh1SUZ4MFhIUnBaaWh0YjJSbElDWWdPQ2tnY21WMGRYSnVJSFpoYkhWbE8xeHVJRngwWEhScFppZ29iVzlrWlNBbUlEUXBJQ1ltSUhSNWNHVnZaaUIyWVd4MVpTQTlQVDBnSjI5aWFtVmpkQ2NnSmlZZ2RtRnNkV1VnSmlZZ2RtRnNkV1V1WDE5bGMwMXZaSFZzWlNrZ2NtVjBkWEp1SUhaaGJIVmxPMXh1SUZ4MFhIUjJZWElnYm5NZ1BTQlBZbXBsWTNRdVkzSmxZWFJsS0c1MWJHd3BPMXh1SUZ4MFhIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbklvYm5NcE8xeHVJRngwWEhSUFltcGxZM1F1WkdWbWFXNWxVSEp2Y0dWeWRIa29ibk1zSUNka1pXWmhkV3gwSnl3Z2V5QmxiblZ0WlhKaFlteGxPaUIwY25WbExDQjJZV3gxWlRvZ2RtRnNkV1VnZlNrN1hHNGdYSFJjZEdsbUtHMXZaR1VnSmlBeUlDWW1JSFI1Y0dWdlppQjJZV3gxWlNBaFBTQW5jM1J5YVc1bkp5a2dabTl5S0haaGNpQnJaWGtnYVc0Z2RtRnNkV1VwSUY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dVpDaHVjeXdnYTJWNUxDQm1kVzVqZEdsdmJpaHJaWGtwSUhzZ2NtVjBkWEp1SUhaaGJIVmxXMnRsZVYwN0lIMHVZbWx1WkNodWRXeHNMQ0JyWlhrcEtUdGNiaUJjZEZ4MGNtVjBkWEp1SUc1ek8xeHVJRngwZlR0Y2JseHVJRngwTHk4Z1oyVjBSR1ZtWVhWc2RFVjRjRzl5ZENCbWRXNWpkR2x2YmlCbWIzSWdZMjl0Y0dGMGFXSnBiR2wwZVNCM2FYUm9JRzV2Ymkxb1lYSnRiMjU1SUcxdlpIVnNaWE5jYmlCY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHViaUE5SUdaMWJtTjBhVzl1S0cxdlpIVnNaU2tnZTF4dUlGeDBYSFIyWVhJZ1oyVjBkR1Z5SUQwZ2JXOWtkV3hsSUNZbUlHMXZaSFZzWlM1ZlgyVnpUVzlrZFd4bElEOWNiaUJjZEZ4MFhIUm1kVzVqZEdsdmJpQm5aWFJFWldaaGRXeDBLQ2tnZXlCeVpYUjFjbTRnYlc5a2RXeGxXeWRrWldaaGRXeDBKMTA3SUgwZ09seHVJRngwWEhSY2RHWjFibU4wYVc5dUlHZGxkRTF2WkhWc1pVVjRjRzl5ZEhNb0tTQjdJSEpsZEhWeWJpQnRiMlIxYkdVN0lIMDdYRzRnWEhSY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVaQ2huWlhSMFpYSXNJQ2RoSnl3Z1oyVjBkR1Z5S1R0Y2JpQmNkRngwY21WMGRYSnVJR2RsZEhSbGNqdGNiaUJjZEgwN1hHNWNiaUJjZEM4dklFOWlhbVZqZEM1d2NtOTBiM1I1Y0dVdWFHRnpUM2R1VUhKdmNHVnlkSGt1WTJGc2JGeHVJRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1dklEMGdablZ1WTNScGIyNG9iMkpxWldOMExDQndjbTl3WlhKMGVTa2dleUJ5WlhSMWNtNGdUMkpxWldOMExuQnliM1J2ZEhsd1pTNW9ZWE5QZDI1UWNtOXdaWEowZVM1allXeHNLRzlpYW1WamRDd2djSEp2Y0dWeWRIa3BPeUI5TzF4dVhHNGdYSFF2THlCZlgzZGxZbkJoWTJ0ZmNIVmliR2xqWDNCaGRHaGZYMXh1SUZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXdJRDBnWENKY0lqdGNibHh1WEc0Z1hIUXZMeUJNYjJGa0lHVnVkSEo1SUcxdlpIVnNaU0JoYm1RZ2NtVjBkWEp1SUdWNGNHOXlkSE5jYmlCY2RISmxkSFZ5YmlCZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZktGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVjeUE5SUZ3aUxpOXpjbU12YVc1a1pYZ3Vhbk5jSWlrN1hHNGlMQ0pwYlhCdmNuUWdleUJHZFc1amRHOXlJR0Z6SUVKaGMyVkdkVzVqZEc5eUlIMGdabkp2YlNBblkyRjFjMkZzTFc1bGRDNWpiM0psSnp0Y2JtbHRjRzl5ZENCN0lIQnNZWFJtYjNKdElIMGdabkp2YlNBblkyRjFjMkZzTFc1bGRDNTFkR2xzY3ljN1hHNXBiWEJ2Y25RZ2NtRnVaRzl0SUdaeWIyMGdKM0poYm1SdmJTYzdYRzVwYlhCdmNuUWdleUJrWldaaGRXeDBJR0Z6SUZOMVlsTmhiWEJzYVc1blRXbDRhVzV6SUgwZ1puSnZiU0FuTGk5emRXSlRZVzF3YkdsdVp5NXRhWGhwYm5Nbk8xeHVhVzF3YjNKMElIc2daR1ZtWVhWc2RDQmhjeUJPWldkVFlXMXdiR2x1WjAxcGVHbHVjeUI5SUdaeWIyMGdKeTR2Ym1WblUyRnRjR3hwYm1jdWJXbDRhVzV6Snp0Y2JseHVMeW9xWEc0Z0tpQlVhR2x6SUdOc1lYTnpJSEJ5YjNacFpHVnpJR052YlcxdmJpQjFjMlZrSUhOaGJYQnNhVzVuSUcxbGRHaHZaSE1nZDJocFkyZ2dZMkZ1SUdKbElHRmpZMlZ6YzJWa0lIWnBZU0FxS21OaGRYTmhiRTVsZEZOaGJYQnNhVzVuS2lvdVhHNGdLaUJ0YVhoM2FYUm9PbHh1SUNvZ1d5QlRkV0pUWVcxd2JHbHVaMDFwZUdsdWN5d2dUbVZuVTJGdGNHeHBibWROYVhocGJuTWdYVnh1SUNvZ1FHTnNZWE56SUVOaGRYTmhiRTVsZEZOaGJYQnNhVzVuWEc0Z0tpQkFaWGgwWlc1a2N5QkdkVzVqZEc5eVhHNGdLaUJBWlhoaGJYQnNaVnh1SUNvZ1cwVllRVTFRVEVVZ0xpNHZaWGhoYlhCc1pYTXZZMkYxYzJGc1RtVjBVMkZ0Y0d4cGJtY3VZbUZpWld3dWFuTmRYRzRnS2k5Y2JtTnNZWE56SUVOaGRYTmhiRTVsZEZOaGJYQnNhVzVuSUdWNGRHVnVaSE1nY0d4aGRHWnZjbTB1YldsNFYybDBhQ2dnUW1GelpVWjFibU4wYjNJc0lGeHVJQ0FnSUZzZ1UzVmlVMkZ0Y0d4cGJtZE5hWGhwYm5Nc0lFNWxaMU5oYlhCc2FXNW5UV2w0YVc1eklGMHBlMXh1SUNBZ0lHTnZibk4wY25WamRHOXlLQ2w3WEc0Z0lDQWdJQ0FnSUhOMWNHVnlLQ2s3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVVbUZ1Wkc5dElEMGdjbUZ1Wkc5dE95QWdJQ0JjYmlBZ0lDQjlYRzU5WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUc1bGR5QkRZWFZ6WVd4T1pYUlRZVzF3YkdsdVp5Z3BPeUlzSW1WNGNHOXlkQ0I3SUdSbFptRjFiSFFnWVhNZ1kyRjFjMkZzVG1WMFUyRnRjR3hwYm1jZ2ZTQm1jbTl0SUNjdUwyTmhkWE5oYkU1bGRGTmhiWEJzYVc1bkp6dGNibVY0Y0c5eWRDQjdJR1JsWm1GMWJIUWdZWE1nVTJGdGNHeHBibWROYVhocGJuTWdmU0JtY205dElDY3VMM05oYlhCc2FXNW5MbTFwZUdsdWN5YzdYRzVjYm1WNGNHOXlkQ0I3SUdSbFptRjFiSFFnWVhNZ1UzVmlVMkZ0Y0d4cGJtZE5hWGhwYm5NZ2ZTQm1jbTl0SUNjdUwzTjFZbE5oYlhCc2FXNW5MbTFwZUdsdWN5YzdYRzVsZUhCdmNuUWdleUJrWldaaGRXeDBJR0Z6SUU1bFoxTmhiWEJzYVc1blRXbDRhVzV6SUgwZ1puSnZiU0FuTGk5dVpXZFRZVzF3YkdsdVp5NXRhWGhwYm5Nbk95SXNJbU52Ym5OMElFNWxaMkYwYVhabFUyRnRjR3hwYm1kTmFYaHBibk1nUFNBb1FtRnpaVk5oYlhCc2FXNW5RMnhoYzNNcFBUNGdZMnhoYzNNZ1pYaDBaVzVrY3lCQ1lYTmxVMkZ0Y0d4cGJtZERiR0Z6YzN0Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCUVpYSm1iM0p0SUc1bFoyRjBhWFpsSUhOaGJYQnNhVzVuSUdkcGRtVnVJSFJvWlNCelpXeGxZM1FnY0hKdllpQnZaaUJwWkhNZ1lXNWtJR3hwYzNRZ2IyWWdjRzl6YVhScGRtVWdjMkZ0Y0d4bGMxeHVJQ0FnSUNBcUlFQndZWEpoYlNCN0lFNTFiV0psY2lCOUlHNWxaMkYwYVhabFUybDZaU0F0SUhOcGVtVWdkRzhnYzJGdGNHeGxYRzRnSUNBZ0lDb2dRSEJoY21GdElIc2dRWEp5WVhrZ2ZTQndiM05wZEdsMlpWTmhiWEJzWlhNZ0xTQkJjbkpoZVNCdlppQndiM056YVhScGRtVWdTV1J6WEc0Z0lDQWdJQ29nUUhCaGNtRnRJSHNnUVhKeVlYa2dmU0JqWVc1a2FXUmhkR1ZRY205aWN5QXRJRUZ5Y21GNUlHOW1JSEJ5YjJKaFlteHBkSGtnYjJZZ1kyRnVaR2xrWVhSbElFbGtjMXh1SUNBZ0lDQXFJRUJ3WVhKaGJTQjdJRUp2YjJ4bFlXNGdmU0JiY21Wd2JHRmpZV0pzWlQxMGNuVmxYU0F0SUdsbUlIUnlkV1VzSUc1dklHUjFjR3hwWTJGMFpXUWdjMkZ0Y0d4cGJtY2dTV1FnY21WMGRYSnVaV1JjYmlBZ0lDQWdLaUJBY21WMGRYSnVjeUI3SUVGeWNtRjVJSDBnWVhKeVlYa2diMllnYzJGdGNHeGxaQ0JKWkhOY2JpQWdJQ0FnS2k5Y2JpQWdJQ0J1WldkVFlXMXdiR2x1WnlodVpXZGhkR2wyWlZOcGVtVXNJSEJ2YzJsMGFYWmxVMkZ0Y0d4bGN5d2dZMkZ1Wkdsa1lYUmxVSEp2WW5Nc0lISmxjR3hoWTJGaWJHVTlkSEoxWlNsN1hHNGdJQ0FnSUNBZ0lHTnZibk4wSUZJZ1BTQjBhR2x6TGxJc0lGSmhibVJ2YlNBOUlIUm9hWE11VW1GdVpHOXRPMXh1SUNBZ0lDQWdJQ0JwWmloU0xtRnVlU2dvZGlrOVBpQWhVaTUwZVhCbEtFNTFiV0psY2l4MktTQjhmQ0IySUQ0Z01TQjhmQ0IySUR3Z01Dd2dZMkZ1Wkdsa1lYUmxVSEp2WW5NcEtYdGNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2NtOTNJRVZ5Y205eUtHQWtlMHBUVDA0dWMzUnlhVzVuYVdaNUtHTmhibVJwWkdGMFpWQnliMkp6S1gwZ2FYTWdibTkwSUdGc2JHOTNZQ2s3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2JHVjBJSE5sYkdWMGFXOXVVSEp2WW5NZ1BTQlNMbkpsWkhWalpTZ29jMlZzWldOMGFXOXVVSEp2WW5Nc0lIQnBaSGdwUFQ1N1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhObGJHVmpkR2x2YmxCeWIySnpXM0JwWkhoZElEMGdTVzVtYVc1cGRIazdMeTl3YjNOcGRHbDJaU0JqWVc1a2FXUmhkR1VnYm1WMlpYSWdZbVVnWTJodmIzTmxaRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z2MyVnNaV04wYVc5dVVISnZZbk03WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZTd2dVaTVqYkc5dVpTaGpZVzVrYVdSaGRHVlFjbTlpY3lrc0lIQnZjMmwwYVhabFUyRnRjR3hsY3lrN1hHNGdJQ0FnSUNBZ0lHeGxkQ0J6WVcxd2JHVnpJRDBnVzEwc0lIUmhhMlZ1U1dSNGN5QTlJRkl1WTJ4dmJtVW9jMlZzWlhScGIyNVFjbTlpY3lrN1hHNGdJQ0FnSUNBZ0lHTnZibk4wSUVkbGJrNWxkME5oYm1ScFpHRjBaVWxrZUNBOUlDZ3BQVDVTWVc1a2IyMHVhVzUwS0RBc0lITmxiR1YwYVc5dVVISnZZbk11YkdWdVozUm9MVEVwTzF4dUlDQWdJQ0FnSUNCamIyNXpkQ0JUWld4bFkzUkpaa2hwWjJoUWNtOWlJRDBnS0hCeWIySXBQVDU3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnNaWFFnY21GdVpDQTlJRkpoYm1SdmJTNW1iRzloZENncE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJSEpoYm1RK2NISnZZanRjYmlBZ0lDQWdJQ0FnZlR0Y2JpQWdJQ0FnSUNBZ2QyaHBiR1VvYzJGdGNHeGxjeTVzWlc1bmRHZ2dQQ0J1WldkaGRHbDJaVk5wZW1VcGUxeHVJQ0FnSUNBZ0lDQWdJQ0FnYkdWMElHbGtlQ0E5SUVkbGJrNWxkME5oYm1ScFpHRjBaVWxrZUNncE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnYkdWMElITmxiR1ZqZEdWa0lEMGdVMlZzWldOMFNXWklhV2RvVUhKdllpaHpaV3hsZEdsdmJsQnliMkp6VzJsa2VGMHBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWW9JWE5sYkdWamRHVmtLWHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JqYjI1MGFXNTFaVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUtDRnlaWEJzWVdOaFlteGxJQ1ltSUhSaGEyVnVTV1I0YzF0cFpIaGRQVDA5Ym5Wc2JDbDdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZMjl1ZEdsdWRXVTdYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lDQWdJQ0J6WVcxd2JHVnpJRDBnV3k0dUxuTmhiWEJzWlhNc0lHbGtlRjA3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaWdoY21Wd2JHRmpZV0pzWlNsN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RHRnJaVzVKWkhoelcybGtlRjA5Ym5Wc2JEc3ZMMjV2YmlCeVpYQnNZV05sWVdKc1pWeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCOUlDQWdJRnh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdjMkZ0Y0d4bGN6dGNiaUFnSUNCOVhHNTlPMXh1Wlhod2IzSjBJR1JsWm1GMWJIUWdUbVZuWVhScGRtVlRZVzF3YkdsdVowMXBlR2x1Y3pzaUxDSnBiWEJ2Y25RZ2V5QkdkVzVqZEc5eUlIMGdabkp2YlNBblkyRjFjMkZzTFc1bGRDNWpiM0psSnp0Y2JtbHRjRzl5ZENCN0lHRnpjMlZ5ZENCOUlHWnliMjBnSjJOaGRYTmhiQzF1WlhRdWRYUnBiSE1uTzF4dUx5b3FYRzRnS2lCVWFHbHpJRzFwZUdsdUlHTnNZWE56SUhCeWIzWnBaR1VnWVhSMGNtbGlkWFJsY3pvZ0tpcFRZVzF3YkdsdVp5b3FMbHh1SUNvZ1FHTnNZWE56SUZOaGJYQnNhVzVuVFdsNGFXNXpYRzRnS2lCQVpYaDBaVzVrY3lCQ1lYTmxRMnhoYzNOY2JpQXFJRUJsZUdGdGNHeGxYRzRnS2lCYlJWaEJUVkJNUlNBdUxpOWxlR0Z0Y0d4bGN5OXpZVzF3YkdsdVp5NXRhWGhwYm5NdVltRmlaV3d1YW5OZFhHNGdLaTljYm1OdmJuTjBJRk5oYlhCc2FXNW5UV2w0YVc1eklEMGdLRUpoYzJWRGJHRnpjeWs5UGlCamJHRnpjeUJsZUhSbGJtUnpJRUpoYzJWRGJHRnpjM3RjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJuWlhRZ1kzVnljbVZ1ZENCeVlXNWtiMjBnYVc1emRHRnVZMlZjYmlBZ0lDQWdLaTljYmlBZ0lDQm5aWFFnVTJGdGNHeHBibWNvS1h0Y2JpQWdJQ0FnSUNBZ2FXWW9JWFJvYVhNdWMyRnRjR3hwYm1jcGUxeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdoeWIzY2dSWEp5YjNJb1lGTmhiWEJzYVc1bklHbHpJRzV2ZENCelpYUmdLVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnZEdocGN5NXpZVzF3YkdsdVp6dGNiaUFnSUNCOVhHNGdJQ0FnWEc0Z0lDQWdMeW9xWEc0Z0lDQWdJQ29nYzJWMElGTmhiWEJzYVc1bklHbHVjM1JoYm1ObFhHNGdJQ0FnSUNvZ1FISmxZV1J2Ym14NVhHNGdJQ0FnSUNvdlhHNGdJQ0FnYzJWMElGTmhiWEJzYVc1bktITmhiWEJzYVc1bktYdGNiaUFnSUNBZ0lDQWdZWE56WlhKMExtSmxTVzV6ZEdGdVkyVlBaaWh6WVcxd2JHbHVaeXdnUm5WdVkzUnZjaWs3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVjMkZ0Y0d4cGJtY2dQU0J6WVcxd2JHbHVaenRjYmlBZ0lDQjlYRzU5TzF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCVFlXMXdiR2x1WjAxcGVHbHVjenNpTENKamIyNXpkQ0JUZFdKVFlXMXdiR2x1WjAxcGVHbHVjeUE5SUNoQ1lYTmxVMkZ0Y0d4cGJtZERiR0Z6Y3lrZ1BUNGdZMnhoYzNNZ1pYaDBaVzVrY3lCQ1lYTmxVMkZ0Y0d4cGJtZERiR0Z6YzN0Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCUVpYSm1iM0p0SUhWdWFXWnZjbTBnYzJGdGNHeGxJR0VnYzNWaUlITmxkQ0J2WmlCSlpITWdaMmwyWlc0Z2RHaGxJR05oYm1ScFpHRjBaU0JzYVhOMFhHNGdJQ0FnSUNvZ1FIQmhjbUZ0SUhzZ1RuVnRZbVZ5SUgwZ2MyRnRjR3hwYm1kVGFYcGxYRzRnSUNBZ0lDb2dRSEJoY21GdElIc2dRWEp5WVhsOFRuVnRZbVZ5SUgwZ1kyRnVaR2xrWVhSbFRHbHpkQ0F0SUd4cGMzUWdiMllnWTJGdVpHbGtZWFJsY3lCdmNpQnphWHBsSUc5bUlHTmhibVJwWkdGMFpTQnNhWE4wWEc0Z0lDQWdJQ29nUUhCaGNtRnRJSHNnUW05dmJHVmhiaUI5SUZ0eVpYQnNZV05oWW14bFBYUnlkV1ZkSUMwZ2FXWWdkSEoxWlN3Z2JtOGdaSFZ3YkdsallYUmxaQ0J6WVcxd2JHbHVaeUJKWkNCeVpYUjFjbTVsWkZ4dUlDQWdJQ0FxSUVCeVpYUjFjbTV6SUhzZ1FYSnlZWGtnZlNCaGNuSmhlU0J2WmlCellXMXdiR1ZrSUVsa2MxeHVJQ0FnSUNBcUwxeHVJQ0FnSUhOMVlsTmhiWEJzYVc1bktITmhiWEJzYVc1blUybDZaU3dnWTJGdVpHbGtZWFJsVEdsemRDd2djbVZ3YkdGallXSnNaVDEwY25WbEtYdGNiaUFnSUNBZ0lDQWdZMjl1YzNRZ1VpQTlJSFJvYVhNdVVpd2dVbUZ1Wkc5dElEMGdkR2hwY3k1U1lXNWtiMjA3WEc0Z0lDQWdJQ0FnSUd4bGRDQmpZVzVrYVdSaGRHVnpJRDBnUVhKeVlYa3VhWE5CY25KaGVTaGpZVzVrYVdSaGRHVk1hWE4wS1Q5U0xtTnNiMjVsS0dOaGJtUnBaR0YwWlV4cGMzUXBPbEl1Y21GdVoyVW9NQ3dnWTJGdVpHbGtZWFJsVEdsemRDazdYRzRnSUNBZ0lDQWdJR2xtS0dOaGJtUnBaR0YwWlhNdWJHVnVaM1JvSUQwOVBTQXdLWHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9jbTkzSUVWeWNtOXlLQ2RqWVc1a2FXUmhkR1VnYkdWdVozUm9JSE5vYjNWc1pDQmlaU0J3YjNOcGRHbDJaU2NwTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lHeGxkQ0J6WVcxd2JHVnpJRDBnVzEwc0lIUmhhMlZ1U1dSNGN5QTlJRkl1WTJ4dmJtVW9ZMkZ1Wkdsa1lYUmxjeWs3WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJRWRsYms1bGQwTmhibVJwWkdGMFpVbGtlQ0E5SUNncFBUNVNZVzVrYjIwdWFXNTBLREFzSUdOaGJtUnBaR0YwWlhNdWJHVnVaM1JvTFRFcE8xeHVJQ0FnSUNBZ0lDQjNhR2xzWlNoellXMXdiR1Z6TG14bGJtZDBhQ0E4SUhOaGJYQnNhVzVuVTJsNlpTbDdYRzRnSUNBZ0lDQWdJQ0FnSUNCc1pYUWdhV1I0SUQwZ1IyVnVUbVYzUTJGdVpHbGtZWFJsU1dSNEtDazdYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppZ2hjbVZ3YkdGallXSnNaU0FtSmlCMFlXdGxia2xrZUhOYmFXUjRYVDA5UFc1MWJHd3BlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR052Ym5ScGJuVmxPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQWdJQ0FnYzJGdGNHeGxjeUE5SUZzdUxpNXpZVzF3YkdWekxDQmpZVzVrYVdSaGRHVnpXMmxrZUYxZE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZb0lYSmxjR3hoWTJGaWJHVXBlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFJoYTJWdVNXUjRjMXRwWkhoZFBXNTFiR3c3THk5dWIyNGdjbVZ3YkdGalpXRmliR1ZjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmU0FnSUNCY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhOaGJYQnNaWE03WEc0Z0lDQWdmVnh1ZlR0Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUZOMVlsTmhiWEJzYVc1blRXbDRhVzV6T3lJc0ltMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ1gxOVhSVUpRUVVOTFgwVllWRVZTVGtGTVgwMVBSRlZNUlY5allYVnpZV3hmYm1WMFgyTnZjbVZmWHpzaUxDSnRiMlIxYkdVdVpYaHdiM0owY3lBOUlGOWZWMFZDVUVGRFMxOUZXRlJGVWs1QlRGOU5UMFJWVEVWZlkyRjFjMkZzWDI1bGRGOTFkR2xzYzE5Zk95SXNJbTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdYMTlYUlVKUVFVTkxYMFZZVkVWU1RrRk1YMDFQUkZWTVJWOXlZVzVrYjIxZlh6c2lYU3dpYzI5MWNtTmxVbTl2ZENJNklpSjkiLCJpbXBvcnQgeyBidWZmZXJVdGlscyB9IGZyb20gJ2NhdXNhbC1uZXQudXRpbHMnO1xuY29uc3QgQnVmZmVyUmVhZGVyTWl4aW5zID0gKCBCYXNlRGF0YVNvdXJjZSApID0+IGNsYXNzIGV4dGVuZHMgQmFzZURhdGFTb3VyY2Uge1xuICAgIG1ha2VCdWZmZXJSZWFkZXIoYmFzZUxpbmssIFNwbGl0Rm5MZW5zZT0oZCk9PihkKSl7XG4gICAgICAgIHJldHVybiBhc3luYyAoZmlsZU5hbWUpID0+IHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgbGV0IGNodW5rRGF0YSA9IFtdO1xuICAgICAgICAgICAgaWYoIGJhc2VMaW5rLnN0YXJ0c1dpdGgoJ2h0dHAnKSApe1xuICAgICAgICAgICAgICAgIGNodW5rRGF0YSA9IGF3YWl0IGJ1ZmZlclV0aWxzLmZldGNoQnVmZmVyKGJhc2VMaW5rICsgZmlsZU5hbWUpO1xuICAgICAgICAgICAgfSAgICAgICAgICAgXG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIGNodW5rRGF0YSA9ICBhd2FpdCBidWZmZXJVdGlscy5yZWFkQnVmZmVyKGJhc2VMaW5rICsgZmlsZU5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFNwbGl0Rm5MZW5zZShjaHVua0RhdGEpO1xuICAgICAgICB9O1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJ1ZmZlclJlYWRlck1peGluczsiLCJpbXBvcnQgeyBjc3ZVdGlscyB9IGZyb20gJ2NhdXNhbC1uZXQudXRpbHMnO1xuY29uc3QgQ1NWUmVhZGVyTWl4aW5zID0gKCBCYXNlRGF0YVNvdXJjZSApID0+IGNsYXNzIGV4dGVuZHMgQmFzZURhdGFTb3VyY2Uge1xuICAgIGV4dHJhY3RpbmdBdHRyaWJ1dGUocm93cywgc2FtcGxlQXR0cmlidXRlcz1bXSwgbGFiZWxBdHRyaWJ1dGVzPVtdKXtcbiAgICAgICAgbGV0IHNhbXBsZXMgPSBbXSwgbGFiZWxzID0gW107XG4gICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgZm9yKGxldCByb3cgb2Ygcm93cyl7XG4gICAgICAgICAgICBpZihzYW1wbGVBdHRyaWJ1dGVzLmxlbmd0aCl7XG4gICAgICAgICAgICAgICAgc2FtcGxlcy5wdXNoKHNhbXBsZUF0dHJpYnV0ZXMubWFwKGs9PnJvd1trXSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYobGFiZWxBdHRyaWJ1dGVzLmxlbmd0aCl7XG4gICAgICAgICAgICAgICAgbGFiZWxzLnB1c2gobGFiZWxBdHRyaWJ1dGVzLm1hcChrPT5yb3dba10pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZihzYW1wbGVzLmxlbmd0aD4wICYmIGxhYmVscy5sZW5ndGg+MCl7XG4gICAgICAgICAgICByZXR1cm4ge3NhbXBsZXMsIGxhYmVsc307XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihzYW1wbGVzLmxlbmd0aD4wKXtcbiAgICAgICAgICAgIHJldHVybiBzYW1wbGVzO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYobGFiZWxzLmxlbmd0aD4wKXtcbiAgICAgICAgICAgIHJldHVybiBsYWJlbHM7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKGAke0pTT04uc3RyaW5naWZ5KHJvd3MpfSBkbyBub3QgbWF0Y2ggJHtzYW1wbGVBdHRyaWJ1dGVzfSBhbmQgJHtsYWJlbEF0dHJpYnV0ZXN9YCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbWFrZUNTVlJlYWRlcihiYXNlTGluaywgc2FtcGxlQXR0cmlidXRlcz1bXSwgbGFiZWxBdHRyaWJ1dGVzPVtdKXtcbiAgICAgICAgaWYoIGJhc2VMaW5rLnN0YXJ0c1dpdGgoJ2h0dHAnKSApe1xuICAgICAgICAgICAgcmV0dXJuIGFzeW5jIChmaWxlTmFtZSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCByb3dzID0gYXdhaXQgY3N2VXRpbHMuZmV0Y2hDU1YoYmFzZUxpbmsgKyBmaWxlTmFtZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZXh0cmFjdGluZ0F0dHJpYnV0ZShyb3dzLCBzYW1wbGVBdHRyaWJ1dGVzLCBsYWJlbEF0dHJpYnV0ZXMpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgcmV0dXJuIGFzeW5jIChmaWxlTmFtZSkgPT4geyBcbiAgICAgICAgICAgICAgICBsZXQgcm93cyA9IGF3YWl0IGNzdlV0aWxzLnJlYWRDU1YoYmFzZUxpbmsgKyBmaWxlTmFtZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZXh0cmFjdGluZ0F0dHJpYnV0ZShyb3dzLCBzYW1wbGVBdHRyaWJ1dGVzLCBsYWJlbEF0dHJpYnV0ZXMpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IENTVlJlYWRlck1peGluczsiLCJleHBvcnQgeyBkZWZhdWx0IGFzIFBOR1JlYWRlck1peGlucyB9IGZyb20gJy4vcG5nUmVhZGVyLm1peGlucyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIENTVlJlYWRlck1peGlucyB9IGZyb20gJy4vY3N2UmVhZGVyLm1peGlucyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEJ1ZmZlclJlYWRlck1peGlucyB9IGZyb20gJy4vYnVmZmVyUmVhZGVyLm1peGlucyc7IiwiaW1wb3J0IHsgcG5nVXRpbHMgfSBmcm9tICdjYXVzYWwtbmV0LnV0aWxzJztcbmNvbnN0IFBOR1JlYWRlck1peGlucyA9ICggQmFzZURhdGFTb3VyY2UgKSA9PiBjbGFzcyBleHRlbmRzIEJhc2VEYXRhU291cmNlIHtcbiAgICBtYWtlUE5HUmVhZGVyKGJhc2VMaW5rLCBTcGxpdEZuTGVuc2U9KGQpPT4oZCkpe1xuICAgICAgICByZXR1cm4gYXN5bmMgKGZpbGVOYW1lKSA9PiB7IFxuICAgICAgICAgICAgbGV0IGNodW5rRGF0YSA9IFtdO1xuICAgICAgICAgICAgaWYoIGJhc2VMaW5rLnN0YXJ0c1dpdGgoJ2h0dHAnKSApe1xuICAgICAgICAgICAgICAgIGNodW5rRGF0YSA9IGF3YWl0IHBuZ1V0aWxzLmZldGNoUE5HKGJhc2VMaW5rICsgZmlsZU5hbWUpOyBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgY2h1bmtEYXRhID0gYXdhaXQgcG5nVXRpbHMucmVhZFBORyhiYXNlTGluayArIGZpbGVOYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBTcGxpdEZuTGVuc2UoY2h1bmtEYXRhKTtcbiAgICAgICAgfTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQTkdSZWFkZXJNaXhpbnM7IiwiaW1wb3J0IHsgRXZlbnQgfSBmcm9tICdjYXVzYWwtbmV0LmNvcmUnO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBmdW5jdG9yIH0gZnJvbSAnLi9mdW5jdG9yJztcbmltcG9ydCB7IHBsYXRmb3JtLCBqc29uVXRpbHMgfSBmcm9tICdjYXVzYWwtbmV0LnV0aWxzJztcbmltcG9ydCB7IGNhdXNhbE5ldFNhbXBsaW5nLCBTYW1wbGluZ01peGlucyB9IGZyb20gJ2NhdXNhbC1uZXQuc2FtcGxpbmcnO1xuaW1wb3J0IHsgUE5HUmVhZGVyTWl4aW5zLCBCdWZmZXJSZWFkZXJNaXhpbnMsIENTVlJlYWRlck1peGlucyB9IGZyb20gJy4vUmVhZGVycy9pbml0JztcbmltcG9ydCB7IHRlcm1Mb2dnZXIsIExvZ2dlck1peGlucyB9IGZyb20gJ2NhdXNhbC1uZXQubG9nJztcbi8qKlxuICogVGhpcyBDYXVzYWxOZXREYXRhU291cmNlIGNsYXNzIHByb3ZpZGVzIGEgc3RhbmRhcmQgaW1wbGVtZW50YXRpb24gZm9yIHBpcGVsaW5lIFNvdXJjZS5cbiAqIHsgbWl4V2l0aDogWyBTYW1wbGluZ01peGlucywgUE5HUmVhZGVyTWl4aW5zLCBCdWZmZXJSZWFkZXJNaXhpbnMgXX1cbiAqIEBjbGFzcyBDYXVzYWxOZXREYXRhU291cmNlXG4gKiBAZXh0ZW5kcyBFdmVudFxuICogQGV4cGVyaW1lbnRcbiAqIEBleGFtcGxlXG4gKiBbRVhBTVBMRSAuLi9leGFtcGxlcy9jYXVzYWxOZXREYXRhU291cmNlLmpzXVxuICovXG5jbGFzcyBDYXVzYWxOZXREYXRhU291cmNlIGV4dGVuZHMgcGxhdGZvcm0ubWl4V2l0aCggRXZlbnQsIFtcbiAgICBTYW1wbGluZ01peGlucywgUE5HUmVhZGVyTWl4aW5zLCBDU1ZSZWFkZXJNaXhpbnMsIExvZ2dlck1peGlucywgQnVmZmVyUmVhZGVyTWl4aW5zIF0gKXtcbiAgICAvKipcbiAgICAgKkNyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgQ2F1c2FsTmV0RGF0YVNvdXJjZS5cbiAgICAgKiBAcGFyYW0ge0Z1bmN0b3J9IGZ1bmN0b3JcbiAgICAgKiBAcGFyYW0ge0Z1bmN0b3J9IHNhbXBsaW5nXG4gICAgICogQG1lbWJlcm9mIENhdXNhbE5ldERhdGFTb3VyY2VcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihmdW5jdG9yLCBsb2dnZXIsIHNhbXBsaW5nKXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5GID0gZnVuY3RvcjtcbiAgICAgICAgdGhpcy5SID0gZnVuY3Rvci5Db3JlRnVuY3RvcjtcbiAgICAgICAgdGhpcy5Mb2dnZXIgPSBsb2dnZXI7XG4gICAgICAgIHRoaXMuU2FtcGxpbmcgPSBzYW1wbGluZztcbiAgICB9XG5cbiAgICBhc3luYyBjb25uZWN0KGJhc2VMaW5rKXtcbiAgICAgICAgaWYoIWJhc2VMaW5rKXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKGBleHBlY3QgYmFzZUxpbmsgZ2V0ICR7SlNPTi5zdHJpbmdpZnkoYmFzZUxpbmspfWApO1xuICAgICAgICB9XG4gICAgICAgIGxldCBkZXNjcmlwdGlvbkxpbmsgPSBiYXNlTGluayArICcvZGF0YXNldC5zdW1tYXJ5Lmpzb24nO1xuXG4gICAgICAgIHRoaXMuTG9nZ2VyLmdyb3VwQmVnaW4oJ3F1ZXJ5IGRhdGFzb3VyY2UnKTtcbiAgICAgICAgdGhpcy5Mb2dnZXIubG9nKHtkZXNjcmlwdGlvbkxpbmt9KTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBhd2FpdCB0aGlzLnF1ZXJ5KGRlc2NyaXB0aW9uTGluayk7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24uQmFzZUxpbmsgPSBiYXNlTGluaztcbiAgICAgICAgdGhpcy5zZXRDaHVua3ModGhpcy5kZXNjcmlwdGlvbik7XG4gICAgICAgIHRoaXMuc2V0U2FtcGxlU2l6ZSh0aGlzLmRlc2NyaXB0aW9uKTtcbiAgICAgICAgdGhpcy5zZXRMYWJlbFNpemUodGhpcy5kZXNjcmlwdGlvbik7XG4gICAgICAgIHRoaXMuc2V0RGF0YVJlYWRlcih0aGlzLmRlc2NyaXB0aW9uKTtcbiAgICAgICAgdGhpcy5Mb2dnZXIuZ3JvdXBFbmQoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVzY3JpcHRpb247XG4gICAgfVxuICAgIFxuXG4gICAgLyoqXG4gICAgICogZmV0Y2ggb3IgcmVhZCBjb25maWd1cmUgZGVwZW5kcyBvbiBwcm92aWVkIGxpbmsgZm9ybWF0XG4gICAgICogQHBhcmFtIHsqfSBsaW5rXG4gICAgICogQHJldHVybnNcbiAgICAgKiBAbWVtYmVyb2YgQ2F1c2FsTmV0RW1iZWRkaW5nXG4gICAgICovXG4gICAgYXN5bmMgcXVlcnkobGluayl7XG4gICAgICAgIGlmKGxpbmsuc3RhcnRzV2l0aCgnaHR0cCcpKXtcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCBqc29uVXRpbHMuZmV0Y2hKU09OKGxpbmspO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICByZXR1cm4gYXdhaXQganNvblV0aWxzLnJlYWRKU09OKGxpbmspO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IERhdGFDaHVua3MoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YUNodW5rcztcbiAgICB9XG5cbiAgICBnZXQgU2FtcGxlUmVhZGVyKCl7XG4gICAgICAgIHJldHVybiB0aGlzLnNhbXBsZVJlYWRlcjtcbiAgICB9XG5cbiAgICBnZXQgTGFiZWxSZWFkZXIoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMubGFiZWxSZWFkZXI7XG4gICAgfVxuXG4gICAgZ2V0IERhdGFSZWFkZXIoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVJlYWRlcjtcbiAgICB9XG5cbiAgICBnZXQgU2FtcGxlU2l6ZSgpe1xuICAgICAgICBpZighdGhpcy5zYW1wbGVTaXplKXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdTYW1wbGVTaXplIGlzIG5vdCBzZXQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5zYW1wbGVTaXplO1xuICAgIH1cblxuICAgIGdldCBMYWJlbFNpemUoKXtcbiAgICAgICAgaWYoIXRoaXMubGFiZWxTaXplKXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdsYWJlbFNpemUgaXMgbm90IHNldCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmxhYmVsU2l6ZTtcbiAgICB9XG5cbiAgICBzZXRTYW1wbGVTaXplKGRlc2NyaXB0aW9uKXtcbiAgICAgICAgbGV0IHsgU2FtcGxlU2l6ZSB9ID0gZGVzY3JpcHRpb247XG4gICAgICAgIGlmKCFTYW1wbGVTaXplKXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKGBleHBlY3QgeyBTYW1wbGVTaXplIH0gIGdldCAke0pTT04uc3RyaW5naWZ5KGRlc2NyaXB0aW9uLCBudWxsLCA0KX1gKTtcbiAgICAgICAgfVxuICAgICAgICBpZihBcnJheS5pc0FycmF5KFNhbXBsZVNpemUpKXtcbiAgICAgICAgICAgIHRoaXMuc2FtcGxlU2l6ZSA9IFNhbXBsZVNpemUucmVkdWNlKChzLGQpPT5zKmQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICB0aGlzLnNhbXBsZVNpemUgPSBTYW1wbGVTaXplO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0TGFiZWxTaXplKGRlc2NyaXB0aW9uKXtcbiAgICAgICAgbGV0IHsgTGFiZWxTaXplIH0gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgaWYoIUxhYmVsU2l6ZSl7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcihgZXhwZWN0IHsgTGFiZWxTaXplIH0gIGdldCAke0pTT04uc3RyaW5naWZ5KGRlc2NyaXB0aW9uLCBudWxsLCA0KX1gKTtcbiAgICAgICAgfVxuICAgICAgICBpZihBcnJheS5pc0FycmF5KExhYmVsU2l6ZSkpe1xuICAgICAgICAgICAgdGhpcy5sYWJlbFNpemUgPSBMYWJlbFNpemUucmVkdWNlKChzLGQpPT5zKmQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICB0aGlzLmxhYmVsU2l6ZSA9IExhYmVsU2l6ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldENodW5rcyhkZXNjcmlwdGlvbil7XG4gICAgICAgIGNvbnN0IHsgU2FtcGxlQ2h1bmtOYW1lLCBMYWJlbENodW5rTmFtZSwgQ2h1bmtMaXN0IH0gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgaWYoIVNhbXBsZUNodW5rTmFtZSB8fCAhTGFiZWxDaHVua05hbWUgfHwgIUNodW5rTGlzdCApe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoYGV4cGVjdCB7U2FtcGxlQ2h1bmtOYW1lLCBMYWJlbENodW5rTmFtZSwgQ2h1bmtMaXN0fSBnZXQgJHtKU09OLnN0cmluZ2lmeShkZXNjcmlwdGlvbil9YCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kYXRhQ2h1bmtzID0gQ2h1bmtMaXN0Lm1hcCggY2lkeD0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4geyAgQ2h1bmtOYW1lOiBjaWR4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBTYW1wbGU6IFNhbXBsZUNodW5rTmFtZS5yZXBsYWNlKCd7fScsIGNpZHgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBMYWJlbDogTGFiZWxDaHVua05hbWUucmVwbGFjZSgne30nLCBjaWR4KSAgfTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICBzZXREYXRhUmVhZGVyKGRlc2NyaXB0aW9uKXtcbiAgICAgICAgY29uc3QgU2FtcGxlVHlwZSA9IGRlc2NyaXB0aW9uLlNhbXBsZVR5cGU7XG4gICAgICAgIGNvbnN0IExhYmVsVHlwZSA9IGRlc2NyaXB0aW9uLkxhYmVsVHlwZTtcbiAgICAgICAgY29uc3QgRGF0YVR5cGUgPSBkZXNjcmlwdGlvbi5EYXRhVHlwZTtcbiAgICAgICAgY29uc3QgQmFzZUxpbmsgPSBkZXNjcmlwdGlvbi5CYXNlTGluaztcbiAgICAgICAgaWYoU2FtcGxlVHlwZSA9PT0gJ0ltYWdlL1BORycpe1xuICAgICAgICAgICAgY29uc3QgU3BsaXRGbkxlbnNlcyA9IChkKT0+KHRoaXMuc3BsaXRTYW1wbGUoZCkpO1xuICAgICAgICAgICAgdGhpcy5zYW1wbGVSZWFkZXIgPSB0aGlzLm1ha2VQTkdSZWFkZXIoQmFzZUxpbmssIFNwbGl0Rm5MZW5zZXMpO1xuICAgICAgICB9XG4gICAgICAgIGlmKExhYmVsVHlwZSA9PT0gJ0J1ZmZlci9PbmVIb3QnKXtcbiAgICAgICAgICAgIGNvbnN0IFNwbGl0Rm5MZW5zZXMgPSAoZCk9Pih0aGlzLnNwbGl0TGFiZWwoZCkpO1xuICAgICAgICAgICAgdGhpcy5sYWJlbFJlYWRlciA9IHRoaXMubWFrZUJ1ZmZlclJlYWRlcihCYXNlTGluaywgU3BsaXRGbkxlbnNlcyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgU2FtcGxlQXR0cmlidXRlcyA9IGRlc2NyaXB0aW9uLlNhbXBsZUF0dHJpYnV0ZXM7XG4gICAgICAgIGNvbnN0IExhYmVsQXR0cmlidXRlcyA9IGRlc2NyaXB0aW9uLkxhYmVsQXR0cmlidXRlcztcbiAgICAgICAgaWYoU2FtcGxlVHlwZSA9PT0gJ1RleHQvQ1NWJyl7XG4gICAgICAgICAgICB0aGlzLnNhbXBsZVJlYWRlciA9IHRoaXMubWFrZUNTVlJlYWRlcihCYXNlTGluaywgU2FtcGxlQXR0cmlidXRlcywgbnVsbCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYoTGFiZWxUeXBlID09PSAnVGV4dC9DU1YnKXtcbiAgICAgICAgICAgIHRoaXMubGFiZWxSZWFkZXIgPSB0aGlzLm1ha2VDU1ZSZWFkZXIoQmFzZUxpbmssIG51bGwsIExhYmVsQXR0cmlidXRlcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYoRGF0YVR5cGUgPT09ICdUZXh0L0NTVicpe1xuICAgICAgICAgICAgdGhpcy5kYXRhUmVhZGVyID0gdGhpcy5tYWtlQ1NWUmVhZGVyKEJhc2VMaW5rLCBTYW1wbGVBdHRyaWJ1dGVzLCBMYWJlbEF0dHJpYnV0ZXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3BsaXRTYW1wbGUoZGF0YSl7XG4gICAgICAgIGNvbnN0IFNhbXBsZVNpemUgPSB0aGlzLlNhbXBsZVNpemU7XG4gICAgICAgIHJldHVybiB0aGlzLlIuc3BsaXRFdmVyeShTYW1wbGVTaXplLCBkYXRhKTtcbiAgICB9XG5cbiAgICBzcGxpdExhYmVsKGRhdGEpe1xuICAgICAgICBjb25zdCBMYWJlbFNpemUgPSB0aGlzLkxhYmVsU2l6ZTtcbiAgICAgICAgcmV0dXJuIHRoaXMuUi5zcGxpdEV2ZXJ5KExhYmVsU2l6ZSwgZGF0YSk7XG4gICAgfVxuXG4gICAgY2h1bmtTZWxlY3QobnVtQ2h1bmtzKXtcbiAgICAgICAgbGV0IGNodW5rTGlzdCA9IHRoaXMuRGF0YUNodW5rcztcbiAgICAgICAgdGhpcy5zZWxlY3RlZENodW5rcyA9IHRoaXMuU2FtcGxpbmcuc3ViU2FtcGxpbmcobnVtQ2h1bmtzLCBjaHVua0xpc3QsIGZhbHNlKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRDaHVua3M7XG4gICAgfVxuXG4gICAgcmVhZCgpe1xuICAgICAgICBpZighdGhpcy5zZWxlY3RlZENodW5rcyl7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignc2VsZWN0Q2h1bmtzIGlzIG5vdCBjYWxsJyk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHNlbGVjdGVkQ2h1bmtzID0gdGhpcy5zZWxlY3RlZENodW5rcztcbiAgICAgICAgY29uc3QgU2FtcGxlUmVhZGVyID0gdGhpcy5TYW1wbGVSZWFkZXI7XG4gICAgICAgIGNvbnN0IExhYmVsUmVhZGVyID0gdGhpcy5MYWJlbFJlYWRlcjtcbiAgICAgICAgY29uc3QgRGF0YVJlYWRlciA9IHRoaXMuRGF0YVJlYWRlcjtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlLCByZWplY3QpPT57XG4gICAgICAgICAgICBsZXQgc2FtcGxlRGF0YSA9IFtdLCBsYWJlbERhdGEgPSBbXTtcbiAgICAgICAgICAgIGZvcihsZXQgeyBTYW1wbGUsIExhYmVsLCBDaHVua05hbWUgfSBvZiBzZWxlY3RlZENodW5rcyApe1xuICAgICAgICAgICAgICAgIGlmKFNhbXBsZSA9PT0gTGFiZWwpe1xuICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IGF3YWl0IERhdGFSZWFkZXIoU2FtcGxlKTtcbiAgICAgICAgICAgICAgICAgICAgc2FtcGxlRGF0YSA9IGRhdGEuc2FtcGxlcztcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxEYXRhID0gZGF0YS5sYWJlbHM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgICAgIHNhbXBsZURhdGEgPSBhd2FpdCBTYW1wbGVSZWFkZXIoU2FtcGxlKTtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxEYXRhID0gYXdhaXQgTGFiZWxSZWFkZXIoTGFiZWwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZihzYW1wbGVEYXRhLmxlbmd0aCAhPT0gbGFiZWxEYXRhLmxlbmd0aCl7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdCgnbGVuZ3RocyBvZiBzYW1wbGUgYW5kIGxhYmVsIGFyZSBub3QgdGhlIHNhbWUnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5Mb2dnZXIubG9nKHsncmVhZCc6IFtzYW1wbGVEYXRhLmxlbmd0aCwgbGFiZWxEYXRhLmxlbmd0aF19KTtcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmVtaXQoJ2RhdGEnLCB7ICdTYW1wbGUnOiBzYW1wbGVEYXRhLCAnTGFiZWwnOiBsYWJlbERhdGEsICBDaHVua05hbWUgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXNvbHZlKHNlbGVjdGVkQ2h1bmtzLmxlbmd0aCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBDYXVzYWxOZXREYXRhU291cmNlKGZ1bmN0b3IsIHRlcm1Mb2dnZXIsIGNhdXNhbE5ldFNhbXBsaW5nKTsiLCIvKipcbiAqIFRoaXMgcGlwZWxpbmUgbWl4aW4gcHJvdmlkZXMgRGF0YVNvdXJjZVJlYWRlciBhdHRpYnV0ZSwgc291cmNlIHJlYWRpbmcgbWV0aG9kcyBmb3IgcGlwZWxpbmUgXG4gKiBhbmQgZ2V0dGluZyBTb3VyY2UgaW4gcGlwZWxpbmVDb25maWdcbiAqIEBjbGFzcyBEYXRhU291cmNlTWl4aW5zXG4gKiBAZXh0ZW5kcyBFdmVudFxuICogQGV4YW1wbGVcbiAqIFtFWEFNUExFIC4uL2V4YW1wbGVzL2RhdGFzZXQubWl4aW5zLmJhYmVsLmpzXVxuICovXG5jb25zdCBEYXRhU291cmNlTWl4aW5zID0gKEJhc2VQaXBlbGluZUNsYXNzKT0+IGNsYXNzIGV4dGVuZHMgQmFzZVBpcGVsaW5lQ2xhc3Mge1xuICAgXG4gICAgc2V0IERhdGFTb3VyY2VSZWFkZXIoc291cmNlUmVhZGVyKXtcbiAgICAgICAgdGhpcy5zb3VyY2VSZWFkZXIgPSBzb3VyY2VSZWFkZXI7XG4gICAgfVxuXG4gICAgZ2V0IERhdGFTb3VyY2VSZWFkZXIoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuc291cmNlUmVhZGVyO1xuICAgIH1cblxuICAgIHNldEJ5Q29uZmlnKHBpcGVsaW5lQ29uZmlnKXtcbiAgICAgICAgaWYoc3VwZXIuc2V0QnlDb25maWcpe1xuICAgICAgICAgICAgc3VwZXIuc2V0QnlDb25maWcocGlwZWxpbmVDb25maWcpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuTG9nZ2VyLmdyb3VwQmVnaW4oJ3NldCBTb3VyY2UgYnkgY29uZmlnJyk7XG4gICAgICAgIGNvbnN0IHsgU291cmNlIH0gPSBwaXBlbGluZUNvbmZpZy5EYXRhc2V0O1xuICAgICAgICBpZihTb3VyY2Upe1xuICAgICAgICAgICAgdGhpcy5EYXRhU291cmNlUmVhZGVyID0gU291cmNlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICB0aGlzLkRhdGFTb3VyY2VSZWFkZXIgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5Mb2dnZXIubG9nKCcqKipTb3VyY2UgaXMgbm90IGRlZmluZWQgXFxuJyArIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICcqKipUcmFpbkRhdGFHZW5lcmF0b3IgYW5kIFRlc3REYXRhR2VuZXJhdG9yIG11c3QgYmUgc2V0IG1hbnVhbGx5Jyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5Mb2dnZXIuZ3JvdXBFbmQoKTtcbiAgICAgICAgcmV0dXJuIHBpcGVsaW5lQ29uZmlnO1xuICAgIH1cblxuICAgIGFzeW5jIHJlYWQobnVtQ2h1bmtzKXtcbiAgICAgICAgbGV0IHNlbGVjdGVkQ2h1bmsgPSB0aGlzLkRhdGFTb3VyY2VSZWFkZXIuY2h1bmtTZWxlY3QobnVtQ2h1bmtzKTtcbiAgICAgICAgdGhpcy5Mb2dnZXIubG9nKHsnc2VsZWN0IGNodW5rcyc6IHNlbGVjdGVkQ2h1bmt9KTtcbiAgICAgICAgYXdhaXQgdGhpcy5EYXRhU291cmNlUmVhZGVyLnJlYWQoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuUHJlcHJvY2Vzc2luZy5QcmVwcm9jZXNzaW5nRGF0YTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEYXRhU291cmNlTWl4aW5zOyIsImltcG9ydCB7IEZ1bmN0b3IgfSBmcm9tICdjYXVzYWwtbmV0LmNvcmUnO1xuZXhwb3J0IGRlZmF1bHQgbmV3IEZ1bmN0b3IoKTsiLCJleHBvcnQgeyBkZWZhdWx0IGFzIGNhdXNhbE5ldERhdGFTb3VyY2UgfSBmcm9tICcuL2NhdXNhbE5ldERhdGFTb3VyY2UnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBEYXRhU291cmNlTWl4aW5zIH0gZnJvbSAnLi9kYXRhU291cmNlLm1peGlucyc7IiwiLyogKGlnbm9yZWQpICovIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfY29yZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X2xvZ19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3V0aWxzX187Il0sInNvdXJjZVJvb3QiOiIifQ==