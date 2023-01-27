(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("causal-net.core"), require("causal-net.utils"), require("random"));
	else if(typeof define === 'function' && define.amd)
		define(["causal-net.core", "causal-net.utils", "random"], factory);
	else if(typeof exports === 'object')
		exports["@causalNet/sampling"] = factory(require("causal-net.core"), require("causal-net.utils"), require("random"));
	else
		root["@causalNet/sampling"] = factory(root["causal-net.core"], root["causal-net.utils"], root["random"]);
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

/***/ "./src/Distributions/Binomial.js":
/*!***************************************!*\
  !*** ./src/Distributions/Binomial.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Binomial; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "../../node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Distribution__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Distribution */ "./src/Distributions/Distribution.js");


class Binomial extends _Distribution__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor(_ref) {
    let kwargs = _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, _ref);

    super();
    let {
      n,
      p
    } = kwargs;
    this.n = n;
    this.p = p;
  }
  /**
   * k: sampling value
   * $\log{P(k; n, p)} \propto k \log{p} + (n-k)\log{(1-p)}$
   * @param {*} x
   * @memberof Binomial
   */


  logP(k) {
    const n = this.n,
          p = this.p;
    const one = this.T.tensor(1);
    return this.T.sum(k.mul(p.log()).add(n.sub(k).mul(one.sub(p).log())));
  }

  sampling(shape) {
    const n = this.n.dataSync()[0];
    const p = this.p.dataSync()[0];
    const size = this.getSize(shape);

    const Generator = () => {
      let sample = 0;

      for (let counter = 0; counter++ < n; counter++) {
        sample += Math.random() < p;
      }

      return sample;
    };

    let samples = [];

    for (let counter = 0; counter < size; counter++) {
      samples.push(Generator());
    }

    return this.T.tensor(samples).reshape(shape);
  }

}

/***/ }),

/***/ "./src/Distributions/Distribution.js":
/*!*******************************************!*\
  !*** ./src/Distributions/Distribution.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Distribution; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "../../node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var causal_net_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! causal-net.core */ "causal-net.core");
/* harmony import */ var causal_net_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(causal_net_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var random__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! random */ "random");
/* harmony import */ var random__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(random__WEBPACK_IMPORTED_MODULE_2__);



class Distribution extends causal_net_core__WEBPACK_IMPORTED_MODULE_1__["Tensor"] {
  constructor(_ref) {
    let kwargs = _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, _ref);

    super();
    this.random = random__WEBPACK_IMPORTED_MODULE_2___default.a;
  }
  /**
   * Log likelihood
   * @param {*} x 
   */


  logP(x) {
    throw Error('implementation is required');
  }

  getSize(shape) {
    return shape.reduce((size, sh) => size * sh, 1);
  }

  sampling(size) {
    throw Error('implementation is required');
  }

}

/***/ }),

/***/ "./src/Distributions/Normal.js":
/*!*************************************!*\
  !*** ./src/Distributions/Normal.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Normal; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "../../node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Distribution__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Distribution */ "./src/Distributions/Distribution.js");


class Normal extends _Distribution__WEBPACK_IMPORTED_MODULE_1__["default"] {
  init(_ref) {
    let kwargs = _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, _ref);

    let {
      mu
    } = kwargs;
    this.mu = mu;
    this.std = std;
  }

  logP(x) {}

  sampling(shape) {
    const size = this.getSize(shape);
    let samples = this.random.binomial(size, this.p);
    return this.T.tensor(samples).reshape(shape);
  }

}

/***/ }),

/***/ "./src/Distributions/index.js":
/*!************************************!*\
  !*** ./src/Distributions/index.js ***!
  \************************************/
/*! exports provided: Distributions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Distributions", function() { return Distributions; });
/* harmony import */ var _Binomial__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Binomial */ "./src/Distributions/Binomial.js");
/* harmony import */ var _Normal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Normal */ "./src/Distributions/Normal.js");


const Distributions = {
  Binomial: _Binomial__WEBPACK_IMPORTED_MODULE_0__["default"],
  Normal: _Normal__WEBPACK_IMPORTED_MODULE_1__["default"]
};

/***/ }),

/***/ "./src/Samplers/causalNetSamplers.js":
/*!*******************************************!*\
  !*** ./src/Samplers/causalNetSamplers.js ***!
  \*******************************************/
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
/* harmony import */ var _subSampling_mixins__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./subSampling.mixins */ "./src/Samplers/subSampling.mixins.js");
/* harmony import */ var _negSampling_mixins__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./negSampling.mixins */ "./src/Samplers/negSampling.mixins.js");





/**
 * This class provides common used sampling methods which can be accessed via **causalNetSamplers**.
 * mixwith:
 * [ SubSamplingMixins, NegSamplingMixins ]
 * @class CausalNetSamplers
 * @extends Functor
 * @example
 * [EXAMPLE ../examples/causalNetSamplers.babel.js]
 */

class CausalNetSamplers extends causal_net_utils__WEBPACK_IMPORTED_MODULE_1__["platform"].mixWith(causal_net_core__WEBPACK_IMPORTED_MODULE_0__["Functor"], [_subSampling_mixins__WEBPACK_IMPORTED_MODULE_3__["default"], _negSampling_mixins__WEBPACK_IMPORTED_MODULE_4__["default"]]) {
  constructor(random) {
    super();
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new CausalNetSamplers(random__WEBPACK_IMPORTED_MODULE_2___default.a));

/***/ }),

/***/ "./src/Samplers/index.js":
/*!*******************************!*\
  !*** ./src/Samplers/index.js ***!
  \*******************************/
/*! exports provided: causalNetSamplers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _causalNetSamplers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./causalNetSamplers */ "./src/Samplers/causalNetSamplers.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "causalNetSamplers", function() { return _causalNetSamplers__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/Samplers/negSampling.mixins.js":
/*!********************************************!*\
  !*** ./src/Samplers/negSampling.mixins.js ***!
  \********************************************/
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

/***/ "./src/Samplers/subSampling.mixins.js":
/*!********************************************!*\
  !*** ./src/Samplers/subSampling.mixins.js ***!
  \********************************************/
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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: causalNetSamplers, Distributions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Samplers_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Samplers/index */ "./src/Samplers/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "causalNetSamplers", function() { return _Samplers_index__WEBPACK_IMPORTED_MODULE_0__["causalNetSamplers"]; });

/* harmony import */ var _Distributions_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Distributions/index */ "./src/Distributions/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Distributions", function() { return _Distributions_index__WEBPACK_IMPORTED_MODULE_1__["Distributions"]; });




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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3NhbXBsaW5nL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3NhbXBsaW5nL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0BjYXVzYWxOZXQvc2FtcGxpbmcvL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvc2FtcGxpbmcvLi9zcmMvRGlzdHJpYnV0aW9ucy9CaW5vbWlhbC5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3NhbXBsaW5nLy4vc3JjL0Rpc3RyaWJ1dGlvbnMvRGlzdHJpYnV0aW9uLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvc2FtcGxpbmcvLi9zcmMvRGlzdHJpYnV0aW9ucy9Ob3JtYWwuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9zYW1wbGluZy8uL3NyYy9EaXN0cmlidXRpb25zL2luZGV4LmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvc2FtcGxpbmcvLi9zcmMvU2FtcGxlcnMvY2F1c2FsTmV0U2FtcGxlcnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9zYW1wbGluZy8uL3NyYy9TYW1wbGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3NhbXBsaW5nLy4vc3JjL1NhbXBsZXJzL25lZ1NhbXBsaW5nLm1peGlucy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3NhbXBsaW5nLy4vc3JjL1NhbXBsZXJzL3N1YlNhbXBsaW5nLm1peGlucy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3NhbXBsaW5nLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvc2FtcGxpbmcvZXh0ZXJuYWwgXCJjYXVzYWwtbmV0LmNvcmVcIiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3NhbXBsaW5nL2V4dGVybmFsIFwiY2F1c2FsLW5ldC51dGlsc1wiIiwid2VicGFjazovL0BjYXVzYWxOZXQvc2FtcGxpbmcvZXh0ZXJuYWwgXCJyYW5kb21cIiJdLCJuYW1lcyI6WyJCaW5vbWlhbCIsIkRpc3RyaWJ1dGlvbiIsImNvbnN0cnVjdG9yIiwia3dhcmdzIiwibiIsInAiLCJsb2dQIiwiayIsIm9uZSIsIlQiLCJ0ZW5zb3IiLCJzdW0iLCJtdWwiLCJsb2ciLCJhZGQiLCJzdWIiLCJzYW1wbGluZyIsInNoYXBlIiwiZGF0YVN5bmMiLCJzaXplIiwiZ2V0U2l6ZSIsIkdlbmVyYXRvciIsInNhbXBsZSIsImNvdW50ZXIiLCJNYXRoIiwicmFuZG9tIiwic2FtcGxlcyIsInB1c2giLCJyZXNoYXBlIiwiQmFzZVRlbnNvciIsIngiLCJFcnJvciIsInJlZHVjZSIsInNoIiwiTm9ybWFsIiwiaW5pdCIsIm11Iiwic3RkIiwiYmlub21pYWwiLCJEaXN0cmlidXRpb25zIiwiQ2F1c2FsTmV0U2FtcGxlcnMiLCJwbGF0Zm9ybSIsIm1peFdpdGgiLCJCYXNlRnVuY3RvciIsIlN1YlNhbXBsaW5nTWl4aW5zIiwiTmVnU2FtcGxpbmdNaXhpbnMiLCJOZWdhdGl2ZVNhbXBsaW5nTWl4aW5zIiwiQmFzZVNhbXBsaW5nQ2xhc3MiLCJuZWdTYW1wbGluZyIsIm5lZ2F0aXZlU2l6ZSIsInBvc2l0aXZlU2FtcGxlcyIsImNhbmRpZGF0ZVByb2JzIiwicmVwbGFjYWJsZSIsIlIiLCJSYW5kb20iLCJhbnkiLCJ2IiwidHlwZSIsIk51bWJlciIsIkpTT04iLCJzdHJpbmdpZnkiLCJzZWxldGlvblByb2JzIiwic2VsZWN0aW9uUHJvYnMiLCJwaWR4IiwiSW5maW5pdHkiLCJjbG9uZSIsInRha2VuSWR4cyIsIkdlbk5ld0NhbmRpZGF0ZUlkeCIsImludCIsImxlbmd0aCIsIlNlbGVjdElmSGlnaFByb2IiLCJwcm9iIiwicmFuZCIsImZsb2F0IiwiaWR4Iiwic2VsZWN0ZWQiLCJzdWJTYW1wbGluZyIsInNhbXBsaW5nU2l6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QUFrQixFQUE1Qjs7QUFDQSxVQUFHLENBQUNmLFVBQUQsSUFBZWMsU0FBUyxDQUFDUSxHQUFELENBQVQsS0FBaUIsSUFBbkMsRUFBd0M7QUFDcEM7QUFDSDs7QUFDRGhELGFBQU8sR0FBRyxDQUFDLEdBQUdBLE9BQUosRUFBYXFELFVBQVUsQ0FBQ0wsR0FBRCxDQUF2QixDQUFWOztBQUNBLFVBQUcsQ0FBQ3RCLFVBQUosRUFBZTtBQUNYYyxpQkFBUyxDQUFDUSxHQUFELENBQVQsR0FBZSxJQUFmLENBRFcsQ0FDUztBQUN2QjtBQUNKOztBQUNELFdBQU9oRCxPQUFQO0FBQ0g7O0FBM0IyRSxDQUFoRjs7QUE2QmVrQixnRkFBZixFOzs7Ozs7Ozs7Ozs7QUM3QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUEsNkQ7Ozs7Ozs7Ozs7O0FDQUEsOEQ7Ozs7Ozs7Ozs7O0FDQUEsb0QiLCJmaWxlIjoiQGNhdXNhbE5ldC9zYW1wbGluZy5ub2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiY2F1c2FsLW5ldC5jb3JlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC51dGlsc1wiKSwgcmVxdWlyZShcInJhbmRvbVwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJjYXVzYWwtbmV0LmNvcmVcIiwgXCJjYXVzYWwtbmV0LnV0aWxzXCIsIFwicmFuZG9tXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkBjYXVzYWxOZXQvc2FtcGxpbmdcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJjYXVzYWwtbmV0LmNvcmVcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnV0aWxzXCIpLCByZXF1aXJlKFwicmFuZG9tXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJAY2F1c2FsTmV0L3NhbXBsaW5nXCJdID0gZmFjdG9yeShyb290W1wiY2F1c2FsLW5ldC5jb3JlXCJdLCByb290W1wiY2F1c2FsLW5ldC51dGlsc1wiXSwgcm9vdFtcInJhbmRvbVwiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfY29yZV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfdXRpbHNfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yYW5kb21fXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9leHRlbmRzOyIsImltcG9ydCB7ZGVmYXVsdCBhcyBEaXN0cmlidXRpb259IGZyb20gXCIuL0Rpc3RyaWJ1dGlvblwiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmlub21pYWwgZXh0ZW5kcyBEaXN0cmlidXRpb257XG4gICAgY29uc3RydWN0b3Ioey4uLmt3YXJnc30pe1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBsZXQgeyBuLCBwIH0gPSBrd2FyZ3M7XG4gICAgICAgIHRoaXMubiA9IG47XG4gICAgICAgIHRoaXMucCA9IHA7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIGs6IHNhbXBsaW5nIHZhbHVlXG4gICAgICogJFxcbG9ne1AoazsgbiwgcCl9IFxccHJvcHRvIGsgXFxsb2d7cH0gKyAobi1rKVxcbG9neygxLXApfSRcbiAgICAgKiBAcGFyYW0geyp9IHhcbiAgICAgKiBAbWVtYmVyb2YgQmlub21pYWxcbiAgICAgKi9cbiAgICBsb2dQKGspe1xuICAgICAgICBjb25zdCBuID0gdGhpcy5uLCBwID0gdGhpcy5wO1xuICAgICAgICBjb25zdCBvbmUgPSB0aGlzLlQudGVuc29yKDEpO1xuICAgICAgICByZXR1cm4gdGhpcy5ULnN1bSggay5tdWwocC5sb2coKSkuYWRkKCBuLnN1YihrKS5tdWwob25lLnN1YihwKS5sb2coKSkgKSApO1xuICAgIH1cbiAgICBzYW1wbGluZyhzaGFwZSl7XG4gICAgICAgIGNvbnN0IG4gPSB0aGlzLm4uZGF0YVN5bmMoKVswXTtcbiAgICAgICAgY29uc3QgcCA9IHRoaXMucC5kYXRhU3luYygpWzBdO1xuICAgICAgICBjb25zdCBzaXplID0gdGhpcy5nZXRTaXplKHNoYXBlKTtcbiAgICAgICAgY29uc3QgR2VuZXJhdG9yID0gKCk9PntcbiAgICAgICAgICAgIGxldCBzYW1wbGUgPSAwO1xuICAgICAgICAgICAgZm9yKGxldCBjb3VudGVyID0gMDsgY291bnRlcisrIDwgbjsgY291bnRlcisrKXtcbiAgICAgICAgICAgICAgICBzYW1wbGUgKz0gKE1hdGgucmFuZG9tKCkgPCBwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBzYW1wbGU7XG4gICAgICAgIH07XG4gICAgICAgIGxldCBzYW1wbGVzID0gW107XG4gICAgICAgIGZvcihsZXQgY291bnRlcj0wO2NvdW50ZXI8c2l6ZTsgY291bnRlcisrKXtcbiAgICAgICAgICAgIHNhbXBsZXMucHVzaChHZW5lcmF0b3IoKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuVC50ZW5zb3Ioc2FtcGxlcykucmVzaGFwZShzaGFwZSk7XG4gICAgfVxufSIsImltcG9ydCB7IFRlbnNvciBhcyBCYXNlVGVuc29yIH0gZnJvbSAnY2F1c2FsLW5ldC5jb3JlJztcbmltcG9ydCByYW5kb20gZnJvbSAncmFuZG9tJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpc3RyaWJ1dGlvbiBleHRlbmRzIEJhc2VUZW5zb3Ige1xuICAgIGNvbnN0cnVjdG9yKHsuLi5rd2FyZ3N9KXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5yYW5kb20gPSByYW5kb207XG4gICAgfVxuICAgIC8qKlxuICAgICAqIExvZyBsaWtlbGlob29kXG4gICAgICogQHBhcmFtIHsqfSB4IFxuICAgICAqL1xuICAgIGxvZ1AoeCl7XG4gICAgICAgIHRocm93IEVycm9yKCdpbXBsZW1lbnRhdGlvbiBpcyByZXF1aXJlZCcpO1xuICAgIH1cbiAgICBnZXRTaXplKHNoYXBlKXtcbiAgICAgICAgcmV0dXJuIHNoYXBlLnJlZHVjZSgoc2l6ZSwgc2gpPT5zaXplKnNoLDEpO1xuICAgIH1cbiAgICBzYW1wbGluZyhzaXplKXtcbiAgICAgICAgdGhyb3cgRXJyb3IoJ2ltcGxlbWVudGF0aW9uIGlzIHJlcXVpcmVkJyk7XG4gICAgfVxufSIsImltcG9ydCB7ZGVmYXVsdCBhcyBEaXN0cmlidXRpb259IGZyb20gXCIuL0Rpc3RyaWJ1dGlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb3JtYWwgZXh0ZW5kcyBEaXN0cmlidXRpb257XG4gICAgaW5pdCh7Li4ua3dhcmdzfSl7XG4gICAgICAgIGxldCB7IG11IH0gPSBrd2FyZ3M7XG4gICAgICAgIHRoaXMubXUgPSBtdTtcbiAgICAgICAgdGhpcy5zdGQgPSBzdGQ7XG4gICAgfVxuICAgIGxvZ1AoeCl7XG4gICAgICAgIFxuICAgIH1cbiAgICBzYW1wbGluZyhzaGFwZSl7XG4gICAgICAgIGNvbnN0IHNpemUgPSB0aGlzLmdldFNpemUoc2hhcGUpO1xuICAgICAgICBsZXQgc2FtcGxlcyA9IHRoaXMucmFuZG9tLmJpbm9taWFsKHNpemUsIHRoaXMucCk7XG4gICAgICAgIHJldHVybiB0aGlzLlQudGVuc29yKHNhbXBsZXMpLnJlc2hhcGUoc2hhcGUpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBkZWZhdWx0IGFzIEJpbm9taWFsIH0gZnJvbSAnLi9CaW5vbWlhbCc7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIE5vcm1hbCB9IGZyb20gJy4vTm9ybWFsJztcbmV4cG9ydCBjb25zdCBEaXN0cmlidXRpb25zID0geyBCaW5vbWlhbCwgTm9ybWFsIH07IiwiaW1wb3J0IHsgRnVuY3RvciBhcyBCYXNlRnVuY3RvciB9IGZyb20gJ2NhdXNhbC1uZXQuY29yZSc7XG5pbXBvcnQgeyBwbGF0Zm9ybSB9IGZyb20gJ2NhdXNhbC1uZXQudXRpbHMnO1xuaW1wb3J0IHJhbmRvbSBmcm9tICdyYW5kb20nO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBTdWJTYW1wbGluZ01peGlucyB9IGZyb20gJy4vc3ViU2FtcGxpbmcubWl4aW5zJztcbmltcG9ydCB7IGRlZmF1bHQgYXMgTmVnU2FtcGxpbmdNaXhpbnMgfSBmcm9tICcuL25lZ1NhbXBsaW5nLm1peGlucyc7XG5cbi8qKlxuICogVGhpcyBjbGFzcyBwcm92aWRlcyBjb21tb24gdXNlZCBzYW1wbGluZyBtZXRob2RzIHdoaWNoIGNhbiBiZSBhY2Nlc3NlZCB2aWEgKipjYXVzYWxOZXRTYW1wbGVycyoqLlxuICogbWl4d2l0aDpcbiAqIFsgU3ViU2FtcGxpbmdNaXhpbnMsIE5lZ1NhbXBsaW5nTWl4aW5zIF1cbiAqIEBjbGFzcyBDYXVzYWxOZXRTYW1wbGVyc1xuICogQGV4dGVuZHMgRnVuY3RvclxuICogQGV4YW1wbGVcbiAqIFtFWEFNUExFIC4uL2V4YW1wbGVzL2NhdXNhbE5ldFNhbXBsZXJzLmJhYmVsLmpzXVxuICovXG5cbmNsYXNzIENhdXNhbE5ldFNhbXBsZXJzIGV4dGVuZHMgcGxhdGZvcm0ubWl4V2l0aCggQmFzZUZ1bmN0b3IsIFxuICAgIFsgU3ViU2FtcGxpbmdNaXhpbnMsIE5lZ1NhbXBsaW5nTWl4aW5zIF0pe1xuICAgIGNvbnN0cnVjdG9yKHJhbmRvbSl7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgQ2F1c2FsTmV0U2FtcGxlcnMocmFuZG9tKTsiLCJleHBvcnQgeyBkZWZhdWx0IGFzIGNhdXNhbE5ldFNhbXBsZXJzIH0gZnJvbSAnLi9jYXVzYWxOZXRTYW1wbGVycyc7IiwiY29uc3QgTmVnYXRpdmVTYW1wbGluZ01peGlucyA9IChCYXNlU2FtcGxpbmdDbGFzcyk9PiBjbGFzcyBleHRlbmRzIEJhc2VTYW1wbGluZ0NsYXNze1xuICAgIC8qKlxuICAgICAqIFBlcmZvcm0gbmVnYXRpdmUgc2FtcGxpbmcgZ2l2ZW4gdGhlIHNlbGVjdCBwcm9iIG9mIGlkcyBhbmQgbGlzdCBvZiBwb3NpdGl2ZSBzYW1wbGVzXG4gICAgICogQHBhcmFtIHsgTnVtYmVyIH0gbmVnYXRpdmVTaXplIC0gc2l6ZSB0byBzYW1wbGVcbiAgICAgKiBAcGFyYW0geyBBcnJheSB9IHBvc2l0aXZlU2FtcGxlcyAtIEFycmF5IG9mIHBvc3NpdGl2ZSBJZHNcbiAgICAgKiBAcGFyYW0geyBBcnJheSB9IGNhbmRpZGF0ZVByb2JzIC0gQXJyYXkgb2YgcHJvYmFibGl0eSBvZiBjYW5kaWRhdGUgSWRzXG4gICAgICogQHBhcmFtIHsgQm9vbGVhbiB9IFtyZXBsYWNhYmxlPXRydWVdIC0gaWYgdHJ1ZSwgbm8gZHVwbGljYXRlZCBzYW1wbGluZyBJZCByZXR1cm5lZFxuICAgICAqIEByZXR1cm5zIHsgQXJyYXkgfSBhcnJheSBvZiBzYW1wbGVkIElkc1xuICAgICAqL1xuICAgIG5lZ1NhbXBsaW5nKG5lZ2F0aXZlU2l6ZSwgcG9zaXRpdmVTYW1wbGVzLCBjYW5kaWRhdGVQcm9icywgcmVwbGFjYWJsZT10cnVlKXtcbiAgICAgICAgY29uc3QgUiA9IHRoaXMuUiwgUmFuZG9tID0gdGhpcy5SYW5kb207XG4gICAgICAgIGlmKFIuYW55KCh2KT0+ICFSLnR5cGUoTnVtYmVyLHYpIHx8IHYgPiAxIHx8IHYgPCAwLCBjYW5kaWRhdGVQcm9icykpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoYCR7SlNPTi5zdHJpbmdpZnkoY2FuZGlkYXRlUHJvYnMpfSBpcyBub3QgYWxsb3dgKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgc2VsZXRpb25Qcm9icyA9IFIucmVkdWNlKChzZWxlY3Rpb25Qcm9icywgcGlkeCk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uUHJvYnNbcGlkeF0gPSBJbmZpbml0eTsvL3Bvc2l0aXZlIGNhbmRpZGF0ZSBuZXZlciBiZSBjaG9vc2VkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzZWxlY3Rpb25Qcm9icztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBSLmNsb25lKGNhbmRpZGF0ZVByb2JzKSwgcG9zaXRpdmVTYW1wbGVzKTtcbiAgICAgICAgbGV0IHNhbXBsZXMgPSBbXSwgdGFrZW5JZHhzID0gUi5jbG9uZShzZWxldGlvblByb2JzKTtcbiAgICAgICAgY29uc3QgR2VuTmV3Q2FuZGlkYXRlSWR4ID0gKCk9PlJhbmRvbS5pbnQoMCwgc2VsZXRpb25Qcm9icy5sZW5ndGgtMSk7XG4gICAgICAgIGNvbnN0IFNlbGVjdElmSGlnaFByb2IgPSAocHJvYik9PntcbiAgICAgICAgICAgIGxldCByYW5kID0gUmFuZG9tLmZsb2F0KCk7XG4gICAgICAgICAgICByZXR1cm4gcmFuZD5wcm9iO1xuICAgICAgICB9O1xuICAgICAgICB3aGlsZShzYW1wbGVzLmxlbmd0aCA8IG5lZ2F0aXZlU2l6ZSl7XG4gICAgICAgICAgICBsZXQgaWR4ID0gR2VuTmV3Q2FuZGlkYXRlSWR4KCk7XG4gICAgICAgICAgICBsZXQgc2VsZWN0ZWQgPSBTZWxlY3RJZkhpZ2hQcm9iKHNlbGV0aW9uUHJvYnNbaWR4XSk7XG4gICAgICAgICAgICBpZighc2VsZWN0ZWQpe1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoIXJlcGxhY2FibGUgJiYgdGFrZW5JZHhzW2lkeF09PT1udWxsKXtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNhbXBsZXMgPSBbLi4uc2FtcGxlcywgaWR4XTtcbiAgICAgICAgICAgIGlmKCFyZXBsYWNhYmxlKXtcbiAgICAgICAgICAgICAgICB0YWtlbklkeHNbaWR4XT1udWxsOy8vbm9uIHJlcGxhY2VhYmxlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gICAgXG4gICAgICAgIHJldHVybiBzYW1wbGVzO1xuICAgIH1cbn07XG5leHBvcnQgZGVmYXVsdCBOZWdhdGl2ZVNhbXBsaW5nTWl4aW5zOyIsImNvbnN0IFN1YlNhbXBsaW5nTWl4aW5zID0gKEJhc2VTYW1wbGluZ0NsYXNzKSA9PiBjbGFzcyBleHRlbmRzIEJhc2VTYW1wbGluZ0NsYXNze1xuICAgIC8qKlxuICAgICAqIFBlcmZvcm0gdW5pZm9ybSBzYW1wbGUgYSBzdWIgc2V0IG9mIElkcyBnaXZlbiB0aGUgY2FuZGlkYXRlIGxpc3RcbiAgICAgKiBAcGFyYW0geyBOdW1iZXIgfSBzYW1wbGluZ1NpemVcbiAgICAgKiBAcGFyYW0geyBBcnJheXxOdW1iZXIgfSBjYW5kaWRhdGVMaXN0IC0gbGlzdCBvZiBjYW5kaWRhdGVzIG9yIHNpemUgb2YgY2FuZGlkYXRlIGxpc3RcbiAgICAgKiBAcGFyYW0geyBCb29sZWFuIH0gW3JlcGxhY2FibGU9dHJ1ZV0gLSBpZiB0cnVlLCBubyBkdXBsaWNhdGVkIHNhbXBsaW5nIElkIHJldHVybmVkXG4gICAgICogQHJldHVybnMgeyBBcnJheSB9IGFycmF5IG9mIHNhbXBsZWQgSWRzXG4gICAgICovXG4gICAgc3ViU2FtcGxpbmcoc2FtcGxpbmdTaXplLCBjYW5kaWRhdGVMaXN0LCByZXBsYWNhYmxlPXRydWUpe1xuICAgICAgICBjb25zdCBSID0gdGhpcy5SLCBSYW5kb20gPSB0aGlzLlJhbmRvbTtcbiAgICAgICAgbGV0IGNhbmRpZGF0ZXMgPSBBcnJheS5pc0FycmF5KGNhbmRpZGF0ZUxpc3QpP1IuY2xvbmUoY2FuZGlkYXRlTGlzdCk6Ui5yYW5nZSgwLCBjYW5kaWRhdGVMaXN0KTtcbiAgICAgICAgaWYoY2FuZGlkYXRlcy5sZW5ndGggPT09IDApe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ2NhbmRpZGF0ZSBsZW5ndGggc2hvdWxkIGJlIHBvc2l0aXZlJyk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHNhbXBsZXMgPSBbXSwgdGFrZW5JZHhzID0gUi5jbG9uZShjYW5kaWRhdGVzKTtcbiAgICAgICAgY29uc3QgR2VuTmV3Q2FuZGlkYXRlSWR4ID0gKCk9PlJhbmRvbS5pbnQoMCwgY2FuZGlkYXRlcy5sZW5ndGgtMSk7XG4gICAgICAgIHdoaWxlKHNhbXBsZXMubGVuZ3RoIDwgc2FtcGxpbmdTaXplKXtcbiAgICAgICAgICAgIGxldCBpZHggPSBHZW5OZXdDYW5kaWRhdGVJZHgoKTtcbiAgICAgICAgICAgIGlmKCFyZXBsYWNhYmxlICYmIHRha2VuSWR4c1tpZHhdPT09bnVsbCl7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzYW1wbGVzID0gWy4uLnNhbXBsZXMsIGNhbmRpZGF0ZXNbaWR4XV07XG4gICAgICAgICAgICBpZighcmVwbGFjYWJsZSl7XG4gICAgICAgICAgICAgICAgdGFrZW5JZHhzW2lkeF09bnVsbDsvL25vbiByZXBsYWNlYWJsZVxuICAgICAgICAgICAgfVxuICAgICAgICB9ICAgIFxuICAgICAgICByZXR1cm4gc2FtcGxlcztcbiAgICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgU3ViU2FtcGxpbmdNaXhpbnM7IiwiZXhwb3J0IHsgY2F1c2FsTmV0U2FtcGxlcnMgfSBmcm9tICcuL1NhbXBsZXJzL2luZGV4JztcbmV4cG9ydCB7IERpc3RyaWJ1dGlvbnMgfSBmcm9tICcuL0Rpc3RyaWJ1dGlvbnMvaW5kZXgnOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF91dGlsc19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yYW5kb21fXzsiXSwic291cmNlUm9vdCI6IiJ9