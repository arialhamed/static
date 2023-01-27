(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("causal-net.core"), require("causal-net.storage"), require("causal-net.utils"));
	else if(typeof define === 'function' && define.amd)
		define(["causal-net.core", "causal-net.storage", "causal-net.utils"], factory);
	else if(typeof exports === 'object')
		exports["@causalNet/layer"] = factory(require("causal-net.core"), require("causal-net.storage"), require("causal-net.utils"));
	else
		root["@causalNet/layer"] = factory(root["causal-net.core"], root["causal-net.storage"], root["causal-net.utils"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_causal_net_core__, __WEBPACK_EXTERNAL_MODULE_causal_net_storage__, __WEBPACK_EXTERNAL_MODULE_causal_net_utils__) {
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

/***/ "../../node_modules/@babel/runtime/helpers/defineProperty.js":
/*!************************************************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/objectSpread.js":
/*!**********************************************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/@babel/runtime/helpers/objectSpread.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ./defineProperty */ "../../node_modules/@babel/runtime/helpers/defineProperty.js");

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      defineProperty(target, key, source[key]);
    });
  }

  return target;
}

module.exports = _objectSpread;

/***/ }),

/***/ "./src/CausalNetLayers/causalNetLayers.js":
/*!************************************************!*\
  !*** ./src/CausalNetLayers/causalNetLayers.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var causal_net_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! causal-net.core */ "causal-net.core");
/* harmony import */ var causal_net_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(causal_net_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! causal-net.utils */ "causal-net.utils");
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(causal_net_utils__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dense_mixins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dense.mixins */ "./src/CausalNetLayers/dense.mixins.js");
/* harmony import */ var _convolution_mixins__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./convolution.mixins */ "./src/CausalNetLayers/convolution.mixins.js");
/* harmony import */ var _recurrent_mixins__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./recurrent.mixins */ "./src/CausalNetLayers/recurrent.mixins.js");





/**
 * This class provides common used layers which can be accessed via **causalNetLayers** instance.
 * { mixWith: [ LayerMixins, DenseMixins ] }
 * @class CausalNetLayers
 * @extends BaseTensor
 * @example
 * [EXAMPLE ../examples/dense.layer.js]
 */

class CausalNetLayers extends causal_net_utils__WEBPACK_IMPORTED_MODULE_1__["platform"].mixWith(causal_net_core__WEBPACK_IMPORTED_MODULE_0__["Tensor"], [_dense_mixins__WEBPACK_IMPORTED_MODULE_2__["default"], _convolution_mixins__WEBPACK_IMPORTED_MODULE_3__["default"], _recurrent_mixins__WEBPACK_IMPORTED_MODULE_4__["default"]]) {
  constructor() {
    super();
    this.layerNames = [];
  }

  nameGenerator(layerType) {
    const layerIdx = this.layerNames.length;
    let newName = layerType + '/' + layerIdx;
    this.layerNames.push(newName);
    return newName;
  }

  checkName(name, layerType) {
    if (!name) {
      const Name = this.nameGenerator(layerType);
      return {
        Name,
        Reused: false
      };
    } else {
      const Reused = this.layerNames.indexOf(name) > -1;

      if (!Reused) {
        this.layerNames.push(name);
      }

      return {
        Name: name,
        Reused
      };
    }
  }

  custom({
    Net,
    Parameters = {},
    name = null
  }) {
    const {
      Name,
      Reused
    } = this.checkName(name, 'custom');

    if (Reused) {
      Parameters = null;
    }

    return {
      Name,
      Type: 'Layer',
      Config: {
        name
      },
      Parameters,
      Net
    };
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new CausalNetLayers());

/***/ }),

/***/ "./src/CausalNetLayers/convolution.mixins.js":
/*!***************************************************!*\
  !*** ./src/CausalNetLayers/convolution.mixins.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const ConvolutionMixins = PipelineClass => class extends PipelineClass {
  /**
   * Convolutional layer
   * @param {Number} inputSize - size of net input
   * @param {Array} kernelSize - size of net output
   * @param {String|Function} activator - activator function can be customed or get from built-in by string name
   * @param {String} name - layer name, default by null
   * @returns { Object } layer
   */
  convolution({
    kernelSize,
    filters,
    strides = 1,
    padding = 'same',
    dilations = [1, 1],
    flatten = false,
    activator = 'sigmoid',
    name = null
  }) {
    const {
      Name,
      Reused
    } = this.checkName(name, 'convolution');

    if (Reused) {
      Parameters = null;
    } else {
      Parameters = {
        Kernel: [...kernelSize, ...filters]
      };
    }

    const FConv = this.T.conv2d;
    const shapeType = 'NHWC';
    return {
      Name,
      Type: 'Layer',
      Config: {
        kernelSize,
        filters,
        strides,
        padding,
        dilations,
        flatten,
        activator,
        shapeType
      },
      Parameters,
      Net: (value, params, contexts) => {
        let {
          Kernel
        } = params;
        let result = FConv(value, Kernel, strides, padding, shapeType, dilations);

        if (typeof activator === "string") {
          result = result[activator]();
        } else {
          result = activator(result);
        }

        if (flatten) {
          const {
            batchSize
          } = contexts;
          result = result.reshape([batchSize, -1]);
        }

        return result;
      }
    };
  }

};

/* harmony default export */ __webpack_exports__["default"] = (ConvolutionMixins);

/***/ }),

/***/ "./src/CausalNetLayers/dense.mixins.js":
/*!*********************************************!*\
  !*** ./src/CausalNetLayers/dense.mixins.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "../../node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);


const DenseLayerMixins = PipelineClass => class extends PipelineClass {
  /**
   * Simple dense layer
   * @param {Number} inputSize - size of net input
   * @param {Number} outputSize - size of net output
   * @param {String|Function} activator - activator function can be customed or get from built-in by string name
   * @param {String} name - layer name, default by null
   * @returns { Object } layer
   */
  dense({
    inputSize,
    outputSize,
    activator = 'sigmoid',
    withBias = true,
    transpose = false,
    name = null
  }) {
    const {
      Name,
      Reused
    } = this.checkName(name, 'convolution');
    let BiasParams = withBias ? {
      Bias: [outputSize]
    } : {};
    const Parameters = Reused ? null : _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({
      Weight: [inputSize, outputSize]
    }, BiasParams);
    return {
      Name,
      Type: 'Layer',
      Config: {
        inputSize,
        outputSize,
        activator
      },
      Parameters,
      Net: (value, params, contexts) => {
        let {
          Weight,
          Bias
        } = params;
        let result = transpose ? value.dot(Weight.transpose()) : value.dot(Weight);

        if (Bias) {
          result = result.add(Bias);
        }

        if (activator === null) {
          return result;
        } else {
          if (typeof activator === "string") {
            return result[activator]();
          } else {
            return activator(result);
          }
        }
      }
    };
  }

};

/* harmony default export */ __webpack_exports__["default"] = (DenseLayerMixins);

/***/ }),

/***/ "./src/CausalNetLayers/index.js":
/*!**************************************!*\
  !*** ./src/CausalNetLayers/index.js ***!
  \**************************************/
/*! exports provided: causalNetLayers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _causalNetLayers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./causalNetLayers */ "./src/CausalNetLayers/causalNetLayers.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "causalNetLayers", function() { return _causalNetLayers__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/CausalNetLayers/recurrent.mixins.js":
/*!*************************************************!*\
  !*** ./src/CausalNetLayers/recurrent.mixins.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "../../node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);


const RecurrentMixins = PipelineClass => class extends PipelineClass {
  /**
   * Convolutional layer
   * @param {Number} inputSize - size of net input
   * @param {Array} kernelSize - size of net output
   * @param {String|Function} activator - activator function can be customed or get from built-in by string name
   * @param {String} name - layer name, default by null
   * @returns { Object } layer
   */
  seq2vec({
    inputSize,
    encodeSize,
    pad = 0,
    attention = false,
    name = null
  }) {
    name = this.checkName(name, 'seq2vec');
    const {
      Name,
      Reused
    } = this.checkName(name, 'convolution');
    const RNNCell = this.T.basicLSTMCell;

    const InitState = (batchSize, vecSize) => [this.T.zeros([batchSize, vecSize]), this.T.zeros([batchSize, vecSize])];

    const AttentionParams = attention ? {
      AttWeight: [encodeSize, 1],
      AttBias: [1]
    } : {};
    const Parameters = Reused ? _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({
      LSTMKernel: [encodeSize + inputSize, encodeSize * 4],
      LSTMBias: [encodeSize * 4]
    }, AttentionParams) : null;
    return {
      Name,
      Type: 'Layer',
      Config: {
        inputSize,
        encodeSize,
        pad,
        name
      },
      Parameters,
      Net: (value, params, contexts) => {
        let {
          batchSize,
          seqLen
        } = contexts;

        if (!(batchSize > 0 && seqLen > 0)) {
          throw Error(`expect { batchSize, seqLen } 
                                positive numbers get ${JSON.stringify(contexts)}`);
        }

        let {
          LSTMKernel,
          LSTMBias,
          AttWeight = null,
          AttBias = null
        } = params;
        let [h, c] = InitState(batchSize, encodeSize);
        let hiddens = [],
            prev_h = null,
            prev_c = null;

        for (let idx = 0; idx < seqLen; idx++) {
          let token = value.gather(idx, 1);
          prev_h = h;
          prev_c = c;
          [h, c] = RNNCell(0.5, LSTMKernel, LSTMBias, token, h, c); // h = h.mul(mask).add(prev_h);
          // c = c.mul(mask).add(prev_c.mul(this.T.));

          hiddens.push(h);
        }

        if (AttWeight && AttBias) {
          let attVecs = [];

          for (let h of hiddens) {
            attVecs.push(h.matMul(AttWeight).add(AttBias).exp());
          }

          let attVecSum = this.T.concat(attVecs, 1).sum(1, true);
          let idx = 0,
              attH = null;

          for (let h of hiddens) {
            if (idx === 0) {
              attH = h.mul(attVecs[idx].div(attVecSum));
            } else {
              attH = attH.add(h.mul(attVecs[idx].div(attVecSum)));
            }

            idx += 1;
          }

          return attH;
        }

        return h;
      }
    };
  }

  vec2seq({
    encodeSize,
    outputSize,
    pad = 0,
    name = null
  }) {
    name = this.checkName(name, 'seq2vec');
    const RNNCell = this.T.basicLSTMCell;

    const InitState = (batchSize, vecSize) => [this.T.zeros([batchSize, vecSize]), this.T.zeros([batchSize, vecSize])];

    return {
      Name: name,
      Type: 'Layer',
      Config: {
        wordVecSize,
        encodeSize,
        pad,
        name
      },
      Parameters: {
        LSTMKernel: [encodeSize + wordVecSize, encodeSize * 4],
        LSTMBias: [encodeSize * 4],
        OutputWeight: [encodeSize, outputSize],
        OutputBias: [outputSize]
      },
      Net: (value, params, contexts) => {
        let {
          batchSize,
          seqLen,
          isTraining
        } = contexts;

        if (isTraining) {
          throw Error(`expect { isTraining } 
                                a boolean get ${JSON.stringify(contexts)}`);
        }

        if (!(batchSize > 0 && seqLen > 0)) {
          throw Error(`expect { batchSize, seqLen } 
                                positive numbers get ${JSON.stringify(contexts)}`);
        }

        let {
          LSTMKernel,
          LSTMBias,
          OutputWeight,
          OutputBias
        } = params;
        let [h, c] = InitState(batchSize, encodeSize);

        if (isTraining) {
          for (let idx = 0; idx < seqLen; idx++) {
            let token = value.gather(idx, 1);
            [h, c] = RNNCell(1, LSTMKernel, LSTMBias, token, h, c);
          }

          return h;
        } else {
          for (let idx = 0; idx < seqLen; idx++) {
            let token = value.gather(idx, 1);
            [h, c] = RNNCell(1, LSTMKernel, LSTMBias, token, h, c);
          }

          return h;
        }
      }
    };
  }

};

/* harmony default export */ __webpack_exports__["default"] = (RecurrentMixins);

/***/ }),

/***/ "./src/CausalNetParameters/causalNetParameters.js":
/*!********************************************************!*\
  !*** ./src/CausalNetParameters/causalNetParameters.js ***!
  \********************************************************/
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
/* harmony import */ var _parameter_mixins__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parameter.mixins */ "./src/CausalNetParameters/parameter.mixins.js");
/* harmony import */ var _parameterFunctor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parameterFunctor */ "./src/CausalNetParameters/parameterFunctor.js");





/**
 * This class is a standard implementation for model parameters which can be accessed via **causalNetParameters** instance
 * { mixWith: [StorageMixins, ParameterMixins] }
 * @class CausalNetParameters
 * @extends BaseTensor
 * @example
 * [EXAMPLE ../example/parameters.babel.js]
 */

class CausalNetParameters extends causal_net_utils__WEBPACK_IMPORTED_MODULE_1__["platform"].mixWith(causal_net_core__WEBPACK_IMPORTED_MODULE_0__["Tensor"], [causal_net_storage__WEBPACK_IMPORTED_MODULE_2__["StorageMixins"], _parameter_mixins__WEBPACK_IMPORTED_MODULE_3__["default"]]) {
  constructor(storage, parameterfunctor) {
    super();
    this.parameters = null;
    this.Storage = storage;
    this.F = parameterfunctor;
    this.R = this.F.CoreFunctor;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new CausalNetParameters(causal_net_storage__WEBPACK_IMPORTED_MODULE_2__["indexDBStorage"], _parameterFunctor__WEBPACK_IMPORTED_MODULE_4__["default"]));

/***/ }),

/***/ "./src/CausalNetParameters/index.js":
/*!******************************************!*\
  !*** ./src/CausalNetParameters/index.js ***!
  \******************************************/
/*! exports provided: causalNetParameters, ParameterMixins, ParameterFunctorMixins */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _causalNetParameters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./causalNetParameters */ "./src/CausalNetParameters/causalNetParameters.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "causalNetParameters", function() { return _causalNetParameters__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _parameter_mixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parameter.mixins */ "./src/CausalNetParameters/parameter.mixins.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ParameterMixins", function() { return _parameter_mixins__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _parameterFunctor_mixins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parameterFunctor.mixins */ "./src/CausalNetParameters/parameterFunctor.mixins.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ParameterFunctorMixins", function() { return _parameterFunctor_mixins__WEBPACK_IMPORTED_MODULE_2__["default"]; });





/***/ }),

/***/ "./src/CausalNetParameters/parameter.mixins.js":
/*!*****************************************************!*\
  !*** ./src/CausalNetParameters/parameter.mixins.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const ParameterMixins = BaseParameterClass => class extends BaseParameterClass {
  get Parameters() {
    if (!this.parameters) {
      throw Error('parameters is not set');
    }

    return this.parameters;
  }

  set Parameters(parameters) {
    this.parameters = parameters;
  }

  set ParameterSizes(parameterSizes) {
    this.parameterSizes = parameterSizes;
  }

  get ParameterSizes() {
    if (!this.parameterSizes) {
      throw Error('parameterSizes is not set');
    }

    return this.parameterSizes;
  }

  get SaveModelDir() {
    return 'saveModel/';
  }

  exportParameters() {
    if (!this.parameters) {
      throw Error('parameter is not set');
    }

    return (async () => {
      const Fn = async param => Array.from((await param.data()));

      let params = await this.extractParamFromTensorDict(this.parameters, Fn);
      return params;
    })();
  }

  async extractParamFromTensorDict(params, fn) {
    const R = this.R;

    const Traveller = async (params, fn) => {
      if (this.isTensor(params)) {
        return await fn(params);
      } else {
        let kVals = R.toPairs(params);
        let res = {};

        for (let [k, val] of kVals) {
          res[k] = await Traveller(val, fn);
        }

        return res;
      }
    };

    return await Traveller(params, fn);
  }

  async parametersSummary() {
    if (!this.parameters) {
      throw Error('parameter must be set');
    }

    const Fn = async param => Array.from((await param.mean().data()));

    return await this.extractParamFromTensorDict(this.parameters, Fn);
  }

  initParamSizesByLayers(layers) {
    const {
      compose,
      fromPairs,
      map,
      values,
      concat,
      reduce,
      filter
    } = this.R;
    const GetParamSize = compose(fromPairs, map(p => [p.Name, p.Parameters]), filter(p => p.Parameters));
    let flattenLayers = compose(reduce((s, v) => concat(s, v), []), values)(layers);
    this.ParameterSizes = GetParamSize(flattenLayers);
  }

  importParameters(paramObject) {
    const T = this.T,
          F = this.F;

    const SetOrInit = (initPredict, paramObject) => {
      return F.parameterMapWithKey((keys, paramSize) => {
        let paramValue = this.F.getIn(keys, paramObject, null);

        if (paramValue === null) {
          return T.variable(T.randomNormal(paramSize).asType('float32'));
        } else {
          return T.variable(T.tensor(paramValue, paramSize, 'float32'));
        }
      }, initPredict);
    };

    this.Parameters = SetOrInit(this.ParameterSizes, paramObject);
  }

  InitParameters(paramObject = {}) {
    return layers => {
      return this.setOrInitParams(layers, paramObject);
    };
  }

  setOrInitParams(layers, paramObject) {
    this.initParamSizesByLayers(layers);
    this.importParameters(paramObject);
    return this;
  }

  async getSavedParamList() {
    const Storage = this.Storage,
          SaveDir = this.SaveModelDir;
    let fileList = await Storage.getFileList(SaveDir);
    return fileList.map(fileName => fileName.replace(SaveDir, ''));
  }

  async saveParams(fileName) {
    const SaveDir = this.SaveModelDir;
    const Storage = this.Storage;
    let params = await this.exportParameters();
    await Storage.writeFile(SaveDir + fileName, JSON.stringify(params));
    return params;
  }

  async loadParams(fileName) {
    const Storage = this.Storage,
          SaveDir = this.SaveModelDir;
    let strParams = await Storage.readFile(SaveDir + fileName);
    let params = JSON.parse(strParams);
    this.importParameters(params);
    return this;
  }

};

/* harmony default export */ __webpack_exports__["default"] = (ParameterMixins);

/***/ }),

/***/ "./src/CausalNetParameters/parameterFunctor.js":
/*!*****************************************************!*\
  !*** ./src/CausalNetParameters/parameterFunctor.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var causal_net_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! causal-net.core */ "causal-net.core");
/* harmony import */ var causal_net_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(causal_net_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! causal-net.utils */ "causal-net.utils");
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(causal_net_utils__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _parameterFunctor_mixins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parameterFunctor.mixins */ "./src/CausalNetParameters/parameterFunctor.mixins.js");




class ParameterFunctor extends causal_net_utils__WEBPACK_IMPORTED_MODULE_1__["platform"].mixWith(causal_net_core__WEBPACK_IMPORTED_MODULE_0__["Functor"], [_parameterFunctor_mixins__WEBPACK_IMPORTED_MODULE_2__["default"]]) {
  constructor() {
    super();
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new ParameterFunctor());

/***/ }),

/***/ "./src/CausalNetParameters/parameterFunctor.mixins.js":
/*!************************************************************!*\
  !*** ./src/CausalNetParameters/parameterFunctor.mixins.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const ParameterFunctorMixins = FunctorClass => class extends FunctorClass {
  isParameter(val) {
    const R = this.R;
    return R.ifElse(R.is(Array), R.all(R.is(Number)), R.always(false))(val);
  }

  parameterMapWithKey(fn, parameterObject) {
    const R = this.R;

    const Res = (keys, subObject) => R.compose(R.fromPairs, R.map(([key, subObject]) => {
      if (this.isParameter(subObject)) {
        return [key, fn([...keys, key], subObject)];
      } else {
        if (R.is(Object, subObject)) {
          return [key, Res([...keys, key], subObject)];
        } else {
          return [key, subObject];
        }
      }
    }), R.toPairs)(subObject);

    return Res([], parameterObject);
  }

};

/* harmony default export */ __webpack_exports__["default"] = (ParameterFunctorMixins);

/***/ }),

/***/ "./src/CausalNetRunner/causalNetRunner.js":
/*!************************************************!*\
  !*** ./src/CausalNetRunner/causalNetRunner.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var causal_net_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! causal-net.core */ "causal-net.core");
/* harmony import */ var causal_net_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(causal_net_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! causal-net.utils */ "causal-net.utils");
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(causal_net_utils__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _runner_mixins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./runner.mixins */ "./src/CausalNetRunner/runner.mixins.js");



/**
 * This CausalNetRunner class provide net excecutor which is provided pipeline instance at **LayerRunner** attribute.
 * { mixWith: [ RunnerMixins ] }
 * @class CausalNetRunner
 * @extends BaseTensor
 * @example
 * [EXAMPLE ../examples/runner.mixins.babel.js]
 */

class CausalNetRunner extends causal_net_utils__WEBPACK_IMPORTED_MODULE_1__["platform"].mixWith(causal_net_core__WEBPACK_IMPORTED_MODULE_0__["Tensor"], [_runner_mixins__WEBPACK_IMPORTED_MODULE_2__["default"]]) {
  constructor() {
    super();
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new CausalNetRunner());

/***/ }),

/***/ "./src/CausalNetRunner/index.js":
/*!**************************************!*\
  !*** ./src/CausalNetRunner/index.js ***!
  \**************************************/
/*! exports provided: causalNetRunner, RunnerMixins */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _causalNetRunner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./causalNetRunner */ "./src/CausalNetRunner/causalNetRunner.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "causalNetRunner", function() { return _causalNetRunner__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _runner_mixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./runner.mixins */ "./src/CausalNetRunner/runner.mixins.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RunnerMixins", function() { return _runner_mixins__WEBPACK_IMPORTED_MODULE_1__["default"]; });




/***/ }),

/***/ "./src/CausalNetRunner/runner.mixins.js":
/*!**********************************************!*\
  !*** ./src/CausalNetRunner/runner.mixins.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "../../node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);


/**
 * This RunnerMixins class provide methods for runner class.
 * @class RunnerMixins
 * @extends BaseRunnerClass
 */
const RunnerMixins = BaseRunnerClass => class extends BaseRunnerClass {
  set NetParameters(parameters) {
    this.netParameters = parameters;
  }

  set NetLayers(netLayers) {
    this.netLayers = netLayers;
  }

  get NetParameters() {
    if (!this.netParameters) {
      throw Error('netParameters is not set');
    }

    return this.netParameters.Parameters;
  }

  get NetLayers() {
    if (!this.netLayers) {
      throw Error('netLayers is not set');
    }

    return this.netLayers;
  }

  runLayer(value, layerConfigure, layerParameters, contexts) {
    const {
      Name,
      Type,
      Net
    } = layerConfigure;

    if (Type === 'Layer') {
      let result = Net(value, layerParameters, contexts);
      return {
        [Name]: result
      };
    } else {
      throw Error(`expect {Type} to be 'Layer' get ${layerConfigure}`);
    }
  }

  run(layers, samples, parameters, contexts) {
    let pipeValue = {
      PipeInput: samples
    },
        lastLayer = 'PipeInput';

    for (let layer of layers) {
      let layerOutput = this.runLayer(pipeValue[lastLayer], layer, parameters[layer.Name], contexts);
      pipeValue[layer.Name] = layerOutput[layer.Name];
      lastLayer = layer.Name;
    }

    return pipeValue[lastLayer];
  }

  get LayerPredict() {
    let predictLayers = this.NetLayers.Predict;
    return (samples, contexts = {}) => {
      let parameters = this.NetParameters;
      return this.run(predictLayers, samples, parameters, _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, contexts, {
        layer: 'Predict'
      }));
    };
  }

  get LayerEncode() {
    let encodeLayers = this.NetLayers.Encode;
    return (samples, contexts = {}) => {
      let parameters = this.NetParameters;
      return this.run(encodeLayers, samples, parameters, _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, contexts, {
        layer: 'Encode'
      }));
    };
  }

  get LayerDecode() {
    let decodeLayers = this.NetLayers.Decode;
    return (samples, contexts = {}) => {
      let parameters = this.NetParameters;
      return this.run(decodeLayers, samples, parameters, _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, contexts, {
        layer: 'Decode'
      }));
    };
  }

};

/* harmony default export */ __webpack_exports__["default"] = (RunnerMixins);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: causalNetLayers, causalNetParameters, ParameterMixins, ParameterFunctorMixins, causalNetRunner, RunnerMixins, LayerRunnerMixins */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CausalNetLayers_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CausalNetLayers/index */ "./src/CausalNetLayers/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "causalNetLayers", function() { return _CausalNetLayers_index__WEBPACK_IMPORTED_MODULE_0__["causalNetLayers"]; });

/* harmony import */ var _CausalNetParameters_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CausalNetParameters/index */ "./src/CausalNetParameters/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "causalNetParameters", function() { return _CausalNetParameters_index__WEBPACK_IMPORTED_MODULE_1__["causalNetParameters"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ParameterMixins", function() { return _CausalNetParameters_index__WEBPACK_IMPORTED_MODULE_1__["ParameterMixins"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ParameterFunctorMixins", function() { return _CausalNetParameters_index__WEBPACK_IMPORTED_MODULE_1__["ParameterFunctorMixins"]; });

/* harmony import */ var _CausalNetRunner_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CausalNetRunner/index */ "./src/CausalNetRunner/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "causalNetRunner", function() { return _CausalNetRunner_index__WEBPACK_IMPORTED_MODULE_2__["causalNetRunner"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RunnerMixins", function() { return _CausalNetRunner_index__WEBPACK_IMPORTED_MODULE_2__["RunnerMixins"]; });

/* harmony import */ var _layerRunner_mixins__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layerRunner.mixins */ "./src/layerRunner.mixins.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayerRunnerMixins", function() { return _layerRunner_mixins__WEBPACK_IMPORTED_MODULE_3__["default"]; });






/***/ }),

/***/ "./src/layerRunner.mixins.js":
/*!***********************************!*\
  !*** ./src/layerRunner.mixins.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * This mixin class provide attributes: **ParameterInitializer**, **LayerRunner**, 
 * and handle **Net** setting of pipelineConfig 
 * @class LayerRunnerMixins
 * @extends BasePipelineClass
 * @example
 * [EXAMPLE ../examples/layerRunner.mixins.babel.js]
 */
const LayerRunnerMixins = BasePipelineClass => class extends BasePipelineClass {
  async saveParams(fileName) {
    await this.LayerRunner.NetParameters.saveParams(fileName);
    return this;
  }

  async loadParams(fileName) {
    this.LayerRunner.NetParameters = await this.LayerRunner.NetParameters.loadParams(fileName);
    return this;
  }

  async getSavedParamList() {
    return await this.LayerRunner.NetParameters.getSavedParamList();
  }

  get ParameterInitializer() {
    if (!this.parameterInitializer) {
      throw Error('ParameterInitializer is not set');
    }

    return this.parameterInitializer;
  }

  set ParameterInitializer(parameterInitializer) {
    this.parameterInitializer = parameterInitializer;
  }

  setByConfig(pipelineConfig) {
    if (super.setByConfig) {
      super.setByConfig(pipelineConfig);
    }

    this.Logger.groupBegin('set LayerRunner by config');
    const {
      Net
    } = pipelineConfig;
    const {
      Layers,
      Parameters
    } = Net;
    this.LayerRunner.NetLayers = Layers;
    this.ParameterInitializer = Parameters;
    this.LayerRunner.NetParameters = this.ParameterInitializer(Layers);
    this.Logger.groupEnd();
  }

  set LayerRunner(runner) {
    this.layerRunner = runner;
  }

  get LayerRunner() {
    if (!this.layerRunner) {
      throw Error('layerRunner is not set');
    }

    return this.layerRunner;
  }

};

/* harmony default export */ __webpack_exports__["default"] = (LayerRunnerMixins);

/***/ }),

/***/ "causal-net.core":
/*!**********************************!*\
  !*** external "causal-net.core" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_causal_net_core__;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xheWVyL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xheWVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0BjYXVzYWxOZXQvbGF5ZXIvL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xheWVyLy9ob21lL2h1eW5obmd1eWVuL2dpdGh1Yi9jYXVzYWxpdHkvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0U3ByZWFkLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbGF5ZXIvLi9zcmMvQ2F1c2FsTmV0TGF5ZXJzL2NhdXNhbE5ldExheWVycy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xheWVyLy4vc3JjL0NhdXNhbE5ldExheWVycy9jb252b2x1dGlvbi5taXhpbnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9sYXllci8uL3NyYy9DYXVzYWxOZXRMYXllcnMvZGVuc2UubWl4aW5zLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbGF5ZXIvLi9zcmMvQ2F1c2FsTmV0TGF5ZXJzL2luZGV4LmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbGF5ZXIvLi9zcmMvQ2F1c2FsTmV0TGF5ZXJzL3JlY3VycmVudC5taXhpbnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9sYXllci8uL3NyYy9DYXVzYWxOZXRQYXJhbWV0ZXJzL2NhdXNhbE5ldFBhcmFtZXRlcnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9sYXllci8uL3NyYy9DYXVzYWxOZXRQYXJhbWV0ZXJzL2luZGV4LmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbGF5ZXIvLi9zcmMvQ2F1c2FsTmV0UGFyYW1ldGVycy9wYXJhbWV0ZXIubWl4aW5zLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbGF5ZXIvLi9zcmMvQ2F1c2FsTmV0UGFyYW1ldGVycy9wYXJhbWV0ZXJGdW5jdG9yLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbGF5ZXIvLi9zcmMvQ2F1c2FsTmV0UGFyYW1ldGVycy9wYXJhbWV0ZXJGdW5jdG9yLm1peGlucy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xheWVyLy4vc3JjL0NhdXNhbE5ldFJ1bm5lci9jYXVzYWxOZXRSdW5uZXIuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9sYXllci8uL3NyYy9DYXVzYWxOZXRSdW5uZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9sYXllci8uL3NyYy9DYXVzYWxOZXRSdW5uZXIvcnVubmVyLm1peGlucy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xheWVyLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbGF5ZXIvLi9zcmMvbGF5ZXJSdW5uZXIubWl4aW5zLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbGF5ZXIvZXh0ZXJuYWwgXCJjYXVzYWwtbmV0LmNvcmVcIiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xheWVyL2V4dGVybmFsIFwiY2F1c2FsLW5ldC5zdG9yYWdlXCIiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9sYXllci9leHRlcm5hbCBcImNhdXNhbC1uZXQudXRpbHNcIiJdLCJuYW1lcyI6WyJDYXVzYWxOZXRMYXllcnMiLCJwbGF0Zm9ybSIsIm1peFdpdGgiLCJCYXNlVGVuc29yIiwiRGVuc2VNaXhpbnMiLCJDb252b2x1dGlvbmFsTWl4aW5zIiwiUmVjdXJyZW50TWl4aW5zIiwiY29uc3RydWN0b3IiLCJsYXllck5hbWVzIiwibmFtZUdlbmVyYXRvciIsImxheWVyVHlwZSIsImxheWVySWR4IiwibGVuZ3RoIiwibmV3TmFtZSIsInB1c2giLCJjaGVja05hbWUiLCJuYW1lIiwiTmFtZSIsIlJldXNlZCIsImluZGV4T2YiLCJjdXN0b20iLCJOZXQiLCJQYXJhbWV0ZXJzIiwiVHlwZSIsIkNvbmZpZyIsIkNvbnZvbHV0aW9uTWl4aW5zIiwiUGlwZWxpbmVDbGFzcyIsImNvbnZvbHV0aW9uIiwia2VybmVsU2l6ZSIsImZpbHRlcnMiLCJzdHJpZGVzIiwicGFkZGluZyIsImRpbGF0aW9ucyIsImZsYXR0ZW4iLCJhY3RpdmF0b3IiLCJLZXJuZWwiLCJGQ29udiIsIlQiLCJjb252MmQiLCJzaGFwZVR5cGUiLCJ2YWx1ZSIsInBhcmFtcyIsImNvbnRleHRzIiwicmVzdWx0IiwiYmF0Y2hTaXplIiwicmVzaGFwZSIsIkRlbnNlTGF5ZXJNaXhpbnMiLCJkZW5zZSIsImlucHV0U2l6ZSIsIm91dHB1dFNpemUiLCJ3aXRoQmlhcyIsInRyYW5zcG9zZSIsIkJpYXNQYXJhbXMiLCJCaWFzIiwiV2VpZ2h0IiwiZG90IiwiYWRkIiwic2VxMnZlYyIsImVuY29kZVNpemUiLCJwYWQiLCJhdHRlbnRpb24iLCJSTk5DZWxsIiwiYmFzaWNMU1RNQ2VsbCIsIkluaXRTdGF0ZSIsInZlY1NpemUiLCJ6ZXJvcyIsIkF0dGVudGlvblBhcmFtcyIsIkF0dFdlaWdodCIsIkF0dEJpYXMiLCJMU1RNS2VybmVsIiwiTFNUTUJpYXMiLCJzZXFMZW4iLCJFcnJvciIsIkpTT04iLCJzdHJpbmdpZnkiLCJoIiwiYyIsImhpZGRlbnMiLCJwcmV2X2giLCJwcmV2X2MiLCJpZHgiLCJ0b2tlbiIsImdhdGhlciIsImF0dFZlY3MiLCJtYXRNdWwiLCJleHAiLCJhdHRWZWNTdW0iLCJjb25jYXQiLCJzdW0iLCJhdHRIIiwibXVsIiwiZGl2IiwidmVjMnNlcSIsIndvcmRWZWNTaXplIiwiT3V0cHV0V2VpZ2h0IiwiT3V0cHV0QmlhcyIsImlzVHJhaW5pbmciLCJDYXVzYWxOZXRQYXJhbWV0ZXJzIiwiU3RvcmFnZU1peGlucyIsIlBhcmFtZXRlck1peGlucyIsInN0b3JhZ2UiLCJwYXJhbWV0ZXJmdW5jdG9yIiwicGFyYW1ldGVycyIsIlN0b3JhZ2UiLCJGIiwiUiIsIkNvcmVGdW5jdG9yIiwiaW5kZXhEQlN0b3JhZ2UiLCJCYXNlUGFyYW1ldGVyQ2xhc3MiLCJQYXJhbWV0ZXJTaXplcyIsInBhcmFtZXRlclNpemVzIiwiU2F2ZU1vZGVsRGlyIiwiZXhwb3J0UGFyYW1ldGVycyIsIkZuIiwicGFyYW0iLCJBcnJheSIsImZyb20iLCJkYXRhIiwiZXh0cmFjdFBhcmFtRnJvbVRlbnNvckRpY3QiLCJmbiIsIlRyYXZlbGxlciIsImlzVGVuc29yIiwia1ZhbHMiLCJ0b1BhaXJzIiwicmVzIiwiayIsInZhbCIsInBhcmFtZXRlcnNTdW1tYXJ5IiwibWVhbiIsImluaXRQYXJhbVNpemVzQnlMYXllcnMiLCJsYXllcnMiLCJjb21wb3NlIiwiZnJvbVBhaXJzIiwibWFwIiwidmFsdWVzIiwicmVkdWNlIiwiZmlsdGVyIiwiR2V0UGFyYW1TaXplIiwicCIsImZsYXR0ZW5MYXllcnMiLCJzIiwidiIsImltcG9ydFBhcmFtZXRlcnMiLCJwYXJhbU9iamVjdCIsIlNldE9ySW5pdCIsImluaXRQcmVkaWN0IiwicGFyYW1ldGVyTWFwV2l0aEtleSIsImtleXMiLCJwYXJhbVNpemUiLCJwYXJhbVZhbHVlIiwiZ2V0SW4iLCJ2YXJpYWJsZSIsInJhbmRvbU5vcm1hbCIsImFzVHlwZSIsInRlbnNvciIsIkluaXRQYXJhbWV0ZXJzIiwic2V0T3JJbml0UGFyYW1zIiwiZ2V0U2F2ZWRQYXJhbUxpc3QiLCJTYXZlRGlyIiwiZmlsZUxpc3QiLCJnZXRGaWxlTGlzdCIsImZpbGVOYW1lIiwicmVwbGFjZSIsInNhdmVQYXJhbXMiLCJ3cml0ZUZpbGUiLCJsb2FkUGFyYW1zIiwic3RyUGFyYW1zIiwicmVhZEZpbGUiLCJwYXJzZSIsIlBhcmFtZXRlckZ1bmN0b3IiLCJCYXNlRnVuY3RvciIsIlBhcmFtZXRlckZ1bmN0b3JNaXhpbnMiLCJGdW5jdG9yQ2xhc3MiLCJpc1BhcmFtZXRlciIsImlmRWxzZSIsImlzIiwiYWxsIiwiTnVtYmVyIiwiYWx3YXlzIiwicGFyYW1ldGVyT2JqZWN0IiwiUmVzIiwic3ViT2JqZWN0Iiwia2V5IiwiT2JqZWN0IiwiQ2F1c2FsTmV0UnVubmVyIiwiUnVubmVyTWl4aW5zIiwiQmFzZVJ1bm5lckNsYXNzIiwiTmV0UGFyYW1ldGVycyIsIm5ldFBhcmFtZXRlcnMiLCJOZXRMYXllcnMiLCJuZXRMYXllcnMiLCJydW5MYXllciIsImxheWVyQ29uZmlndXJlIiwibGF5ZXJQYXJhbWV0ZXJzIiwicnVuIiwic2FtcGxlcyIsInBpcGVWYWx1ZSIsIlBpcGVJbnB1dCIsImxhc3RMYXllciIsImxheWVyIiwibGF5ZXJPdXRwdXQiLCJMYXllclByZWRpY3QiLCJwcmVkaWN0TGF5ZXJzIiwiUHJlZGljdCIsIkxheWVyRW5jb2RlIiwiZW5jb2RlTGF5ZXJzIiwiRW5jb2RlIiwiTGF5ZXJEZWNvZGUiLCJkZWNvZGVMYXllcnMiLCJEZWNvZGUiLCJMYXllclJ1bm5lck1peGlucyIsIkJhc2VQaXBlbGluZUNsYXNzIiwiTGF5ZXJSdW5uZXIiLCJQYXJhbWV0ZXJJbml0aWFsaXplciIsInBhcmFtZXRlckluaXRpYWxpemVyIiwic2V0QnlDb25maWciLCJwaXBlbGluZUNvbmZpZyIsIkxvZ2dlciIsImdyb3VwQmVnaW4iLCJMYXllcnMiLCJncm91cEVuZCIsInJ1bm5lciIsImxheWVyUnVubmVyIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtB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QUEvQjtBQUNBLFNBQUsrTCxXQUFMLENBQWlCdkIsU0FBakIsR0FBNkI4QixNQUE3QjtBQUNBLFNBQUtOLG9CQUFMLEdBQTRCL0wsVUFBNUI7QUFDQSxTQUFLOEwsV0FBTCxDQUFpQnpCLGFBQWpCLEdBQWlDLEtBQUswQixvQkFBTCxDQUEwQk0sTUFBMUIsQ0FBakM7QUFDQSxTQUFLRixNQUFMLENBQVlHLFFBQVo7QUFDSDs7QUFFRCxNQUFJUixXQUFKLENBQWdCUyxNQUFoQixFQUF1QjtBQUNuQixTQUFLQyxXQUFMLEdBQW1CRCxNQUFuQjtBQUNIOztBQUNELE1BQUlULFdBQUosR0FBaUI7QUFDYixRQUFHLENBQUMsS0FBS1UsV0FBVCxFQUFxQjtBQUNqQixZQUFNdEosS0FBSyxDQUFDLHdCQUFELENBQVg7QUFDSDs7QUFDRCxXQUFPLEtBQUtzSixXQUFaO0FBQ0g7O0FBL0MwRSxDQUEvRTs7QUFrRGVaLGdGQUFmLEU7Ozs7Ozs7Ozs7O0FDMURBLDZEOzs7Ozs7Ozs7OztBQ0FBLGdFOzs7Ozs7Ozs7OztBQ0FBLDhEIiwiZmlsZSI6IkBjYXVzYWxOZXQvbGF5ZXIubm9kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImNhdXNhbC1uZXQuY29yZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQuc3RvcmFnZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQudXRpbHNcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiY2F1c2FsLW5ldC5jb3JlXCIsIFwiY2F1c2FsLW5ldC5zdG9yYWdlXCIsIFwiY2F1c2FsLW5ldC51dGlsc1wiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJAY2F1c2FsTmV0L2xheWVyXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiY2F1c2FsLW5ldC5jb3JlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC5zdG9yYWdlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC51dGlsc1wiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiQGNhdXNhbE5ldC9sYXllclwiXSA9IGZhY3Rvcnkocm9vdFtcImNhdXNhbC1uZXQuY29yZVwiXSwgcm9vdFtcImNhdXNhbC1uZXQuc3RvcmFnZVwiXSwgcm9vdFtcImNhdXNhbC1uZXQudXRpbHNcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X2NvcmVfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3N0b3JhZ2VfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3V0aWxzX18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9kZWZpbmVQcm9wZXJ0eTsiLCJ2YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKFwiLi9kZWZpbmVQcm9wZXJ0eVwiKTtcblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTtcbiAgICB2YXIgb3duS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG5cbiAgICBpZiAodHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIG93bktleXMgPSBvd25LZXlzLmNvbmNhdChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSkuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBzeW0pLmVudW1lcmFibGU7XG4gICAgICB9KSk7XG4gICAgfVxuXG4gICAgb3duS2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIGRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9vYmplY3RTcHJlYWQ7IiwiaW1wb3J0IHsgVGVuc29yIGFzIEJhc2VUZW5zb3IgfSBmcm9tICdjYXVzYWwtbmV0LmNvcmUnO1xuaW1wb3J0IHsgcGxhdGZvcm0gfSBmcm9tICdjYXVzYWwtbmV0LnV0aWxzJztcbmltcG9ydCB7IGRlZmF1bHQgYXMgRGVuc2VNaXhpbnMgfSBmcm9tICcuL2RlbnNlLm1peGlucyc7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIENvbnZvbHV0aW9uYWxNaXhpbnMgfSBmcm9tICcuL2NvbnZvbHV0aW9uLm1peGlucyc7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIFJlY3VycmVudE1peGlucyB9IGZyb20gJy4vcmVjdXJyZW50Lm1peGlucyc7XG4vKipcbiAqIFRoaXMgY2xhc3MgcHJvdmlkZXMgY29tbW9uIHVzZWQgbGF5ZXJzIHdoaWNoIGNhbiBiZSBhY2Nlc3NlZCB2aWEgKipjYXVzYWxOZXRMYXllcnMqKiBpbnN0YW5jZS5cbiAqIHsgbWl4V2l0aDogWyBMYXllck1peGlucywgRGVuc2VNaXhpbnMgXSB9XG4gKiBAY2xhc3MgQ2F1c2FsTmV0TGF5ZXJzXG4gKiBAZXh0ZW5kcyBCYXNlVGVuc29yXG4gKiBAZXhhbXBsZVxuICogW0VYQU1QTEUgLi4vZXhhbXBsZXMvZGVuc2UubGF5ZXIuanNdXG4gKi9cbmNsYXNzIENhdXNhbE5ldExheWVycyBleHRlbmRzIHBsYXRmb3JtLm1peFdpdGgoQmFzZVRlbnNvciwgXG4gICAgWyBEZW5zZU1peGlucywgQ29udm9sdXRpb25hbE1peGlucywgUmVjdXJyZW50TWl4aW5zIF0gKXtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmxheWVyTmFtZXMgPSBbXTtcbiAgICB9XG4gICAgbmFtZUdlbmVyYXRvcihsYXllclR5cGUpe1xuICAgICAgICBjb25zdCBsYXllcklkeCA9IHRoaXMubGF5ZXJOYW1lcy5sZW5ndGg7IFxuICAgICAgICBsZXQgbmV3TmFtZSA9IGxheWVyVHlwZSArICcvJyArIGxheWVySWR4O1xuICAgICAgICB0aGlzLmxheWVyTmFtZXMucHVzaChuZXdOYW1lKTtcbiAgICAgICAgcmV0dXJuIG5ld05hbWU7XG4gICAgfVxuXG4gICAgY2hlY2tOYW1lKG5hbWUsIGxheWVyVHlwZSl7XG4gICAgICAgIGlmKCFuYW1lKXtcbiAgICAgICAgICAgIGNvbnN0IE5hbWUgPSB0aGlzLm5hbWVHZW5lcmF0b3IobGF5ZXJUeXBlKTtcbiAgICAgICAgICAgIHJldHVybiB7IE5hbWUsIFJldXNlZDogZmFsc2UgfTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgY29uc3QgUmV1c2VkID0gdGhpcy5sYXllck5hbWVzLmluZGV4T2YobmFtZSk+LTE7XG4gICAgICAgICAgICBpZighUmV1c2VkKXtcbiAgICAgICAgICAgICAgICB0aGlzLmxheWVyTmFtZXMucHVzaChuYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7IE5hbWU6bmFtZSwgUmV1c2VkIH07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjdXN0b20oe05ldCwgUGFyYW1ldGVycz17fSwgbmFtZT1udWxsfSl7XG4gICAgICAgIGNvbnN0IHsgTmFtZSwgUmV1c2VkIH0gPSB0aGlzLmNoZWNrTmFtZShuYW1lLCAnY3VzdG9tJyk7XG4gICAgICAgIGlmKFJldXNlZCl7XG4gICAgICAgICAgICBQYXJhbWV0ZXJzID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBOYW1lLCBUeXBlOiAnTGF5ZXInLCBDb25maWc6IHtuYW1lfSwgUGFyYW1ldGVycywgTmV0IH07XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgQ2F1c2FsTmV0TGF5ZXJzKCk7IiwiY29uc3QgQ29udm9sdXRpb25NaXhpbnMgPSAoUGlwZWxpbmVDbGFzcyk9PiBjbGFzcyBleHRlbmRzIFBpcGVsaW5lQ2xhc3N7XG4gICAgLyoqXG4gICAgICogQ29udm9sdXRpb25hbCBsYXllclxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBpbnB1dFNpemUgLSBzaXplIG9mIG5ldCBpbnB1dFxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGtlcm5lbFNpemUgLSBzaXplIG9mIG5ldCBvdXRwdXRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xGdW5jdGlvbn0gYWN0aXZhdG9yIC0gYWN0aXZhdG9yIGZ1bmN0aW9uIGNhbiBiZSBjdXN0b21lZCBvciBnZXQgZnJvbSBidWlsdC1pbiBieSBzdHJpbmcgbmFtZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIC0gbGF5ZXIgbmFtZSwgZGVmYXVsdCBieSBudWxsXG4gICAgICogQHJldHVybnMgeyBPYmplY3QgfSBsYXllclxuICAgICAqL1xuICAgIGNvbnZvbHV0aW9uKHsga2VybmVsU2l6ZSwgZmlsdGVycywgXG4gICAgICAgICAgICAgICAgICBzdHJpZGVzPTEsIHBhZGRpbmc9J3NhbWUnLFxuICAgICAgICAgICAgICAgICAgZGlsYXRpb25zPVsxLDFdLCBmbGF0dGVuPWZhbHNlLCBcbiAgICAgICAgICAgICAgICAgIGFjdGl2YXRvcj0nc2lnbW9pZCcsIG5hbWU9bnVsbH0pe1xuICAgICAgICBjb25zdCB7IE5hbWUsIFJldXNlZCB9ID0gdGhpcy5jaGVja05hbWUobmFtZSwgJ2NvbnZvbHV0aW9uJyk7XG4gICAgICAgIGlmKFJldXNlZCl7XG4gICAgICAgICAgICBQYXJhbWV0ZXJzID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgUGFyYW1ldGVycyA9IHsgS2VybmVsOiBbLi4ua2VybmVsU2l6ZSwgLi4uZmlsdGVyc10gfTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBGQ29udiA9IHRoaXMuVC5jb252MmQ7XG4gICAgICAgIGNvbnN0IHNoYXBlVHlwZSA9ICdOSFdDJztcbiAgICAgICAgcmV0dXJuIHsgXG4gICAgICAgICAgICBOYW1lLCBUeXBlOiAnTGF5ZXInLFxuICAgICAgICAgICAgQ29uZmlnOiB7IGtlcm5lbFNpemUsIGZpbHRlcnMsIHN0cmlkZXMsIHBhZGRpbmcsIGRpbGF0aW9ucywgXG4gICAgICAgICAgICAgICAgICAgICAgZmxhdHRlbiwgYWN0aXZhdG9yLCBzaGFwZVR5cGUgfSxcbiAgICAgICAgICAgIFBhcmFtZXRlcnMsXG4gICAgICAgICAgICBOZXQ6ICh2YWx1ZSwgcGFyYW1zLCBjb250ZXh0cyk9PntcbiAgICAgICAgICAgICAgICAgICAgbGV0IHsgS2VybmVsIH0gPSBwYXJhbXM7XG4gICAgICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSBGQ29udih2YWx1ZSwgS2VybmVsLCBzdHJpZGVzLCBwYWRkaW5nLCBzaGFwZVR5cGUsIGRpbGF0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgIGlmKHR5cGVvZiBhY3RpdmF0b3IgPT09IFwic3RyaW5nXCIpe1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0W2FjdGl2YXRvcl0oKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gYWN0aXZhdG9yKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgIH0gIFxuICAgICAgICAgICAgICAgICAgICBpZihmbGF0dGVuKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgYmF0Y2hTaXplIH0gPSBjb250ZXh0cztcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdC5yZXNoYXBlKFtiYXRjaFNpemUsIC0xXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgIH1cbn07XG5leHBvcnQgZGVmYXVsdCBDb252b2x1dGlvbk1peGluczsiLCJjb25zdCBEZW5zZUxheWVyTWl4aW5zID0gKFBpcGVsaW5lQ2xhc3MpPT4gY2xhc3MgZXh0ZW5kcyBQaXBlbGluZUNsYXNze1xuICAgIC8qKlxuICAgICAqIFNpbXBsZSBkZW5zZSBsYXllclxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBpbnB1dFNpemUgLSBzaXplIG9mIG5ldCBpbnB1dFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBvdXRwdXRTaXplIC0gc2l6ZSBvZiBuZXQgb3V0cHV0XG4gICAgICogQHBhcmFtIHtTdHJpbmd8RnVuY3Rpb259IGFjdGl2YXRvciAtIGFjdGl2YXRvciBmdW5jdGlvbiBjYW4gYmUgY3VzdG9tZWQgb3IgZ2V0IGZyb20gYnVpbHQtaW4gYnkgc3RyaW5nIG5hbWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZSAtIGxheWVyIG5hbWUsIGRlZmF1bHQgYnkgbnVsbFxuICAgICAqIEByZXR1cm5zIHsgT2JqZWN0IH0gbGF5ZXJcbiAgICAgKi9cbiAgICBkZW5zZSh7aW5wdXRTaXplLCBvdXRwdXRTaXplLCBhY3RpdmF0b3I9J3NpZ21vaWQnLCB3aXRoQmlhcz10cnVlLCB0cmFuc3Bvc2U9ZmFsc2UsIG5hbWU9bnVsbH0pe1xuICAgICAgICBjb25zdCB7IE5hbWUsIFJldXNlZCB9ID0gdGhpcy5jaGVja05hbWUobmFtZSwgJ2NvbnZvbHV0aW9uJyk7XG4gICAgICAgIGxldCBCaWFzUGFyYW1zID0gKHdpdGhCaWFzKT97QmlhczogW291dHB1dFNpemVdfTp7fTtcbiAgICAgICAgY29uc3QgUGFyYW1ldGVycyA9IChSZXVzZWQpP251bGw6IHsgV2VpZ2h0OiBbaW5wdXRTaXplLCBvdXRwdXRTaXplXSwgLi4uIEJpYXNQYXJhbXMgfTtcbiAgICAgICAgcmV0dXJuIHsgXG4gICAgICAgICAgICBOYW1lLCBUeXBlOiAnTGF5ZXInLFxuICAgICAgICAgICAgQ29uZmlnOiB7IGlucHV0U2l6ZSwgb3V0cHV0U2l6ZSwgYWN0aXZhdG9yIH0sIFBhcmFtZXRlcnMsXG4gICAgICAgICAgICBOZXQ6ICh2YWx1ZSwgcGFyYW1zLCBjb250ZXh0cyk9PntcbiAgICAgICAgICAgICAgICAgICAgbGV0IHtXZWlnaHQsIEJpYXN9ID0gcGFyYW1zO1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gKHRyYW5zcG9zZSk/dmFsdWUuZG90KFdlaWdodC50cmFuc3Bvc2UoKSk6dmFsdWUuZG90KFdlaWdodCk7XG4gICAgICAgICAgICAgICAgICAgIGlmKEJpYXMpe1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0LmFkZChCaWFzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZihhY3RpdmF0b3IgPT09IG51bGwpe1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYodHlwZW9mIGFjdGl2YXRvciA9PT0gXCJzdHJpbmdcIil7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdFthY3RpdmF0b3JdKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhY3RpdmF0b3IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gICBcbiAgICAgICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgIH1cblxuICAgIFxufTtcbmV4cG9ydCBkZWZhdWx0IERlbnNlTGF5ZXJNaXhpbnM7IiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBjYXVzYWxOZXRMYXllcnMgfSBmcm9tICcuL2NhdXNhbE5ldExheWVycyc7IiwiY29uc3QgUmVjdXJyZW50TWl4aW5zID0gKFBpcGVsaW5lQ2xhc3MpPT4gY2xhc3MgZXh0ZW5kcyBQaXBlbGluZUNsYXNze1xuICAgIC8qKlxuICAgICAqIENvbnZvbHV0aW9uYWwgbGF5ZXJcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gaW5wdXRTaXplIC0gc2l6ZSBvZiBuZXQgaW5wdXRcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBrZXJuZWxTaXplIC0gc2l6ZSBvZiBuZXQgb3V0cHV0XG4gICAgICogQHBhcmFtIHtTdHJpbmd8RnVuY3Rpb259IGFjdGl2YXRvciAtIGFjdGl2YXRvciBmdW5jdGlvbiBjYW4gYmUgY3VzdG9tZWQgb3IgZ2V0IGZyb20gYnVpbHQtaW4gYnkgc3RyaW5nIG5hbWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZSAtIGxheWVyIG5hbWUsIGRlZmF1bHQgYnkgbnVsbFxuICAgICAqIEByZXR1cm5zIHsgT2JqZWN0IH0gbGF5ZXJcbiAgICAgKi9cbiAgICBzZXEydmVjKHsgaW5wdXRTaXplLCBlbmNvZGVTaXplLCBwYWQ9MCwgYXR0ZW50aW9uID0gZmFsc2UsIG5hbWU9bnVsbCB9KXtcbiAgICAgICAgbmFtZSA9IHRoaXMuY2hlY2tOYW1lKG5hbWUsICdzZXEydmVjJyk7XG4gICAgICAgIGNvbnN0IHsgTmFtZSwgUmV1c2VkIH0gPSB0aGlzLmNoZWNrTmFtZShuYW1lLCAnY29udm9sdXRpb24nKTtcbiAgICAgICAgY29uc3QgUk5OQ2VsbCA9IHRoaXMuVC5iYXNpY0xTVE1DZWxsO1xuICAgICAgICBjb25zdCBJbml0U3RhdGUgPSAoYmF0Y2hTaXplLCB2ZWNTaXplKT0+KFsgdGhpcy5ULnplcm9zKFtiYXRjaFNpemUsIHZlY1NpemVdKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLlQuemVyb3MoW2JhdGNoU2l6ZSwgdmVjU2l6ZV0pIF0pO1xuICAgICAgICBjb25zdCBBdHRlbnRpb25QYXJhbXMgPSAoYXR0ZW50aW9uKT97IEF0dFdlaWdodDpbZW5jb2RlU2l6ZSwgMV0sIEF0dEJpYXM6IFsxXSB9Ont9O1xuICAgICAgICBjb25zdCBQYXJhbWV0ZXJzID0gIChSZXVzZWQpP3sgXG4gICAgICAgICAgICAgICAgTFNUTUtlcm5lbDogW2VuY29kZVNpemUgKyBpbnB1dFNpemUsIGVuY29kZVNpemUqNF0sIFxuICAgICAgICAgICAgICAgIExTVE1CaWFzOiBbZW5jb2RlU2l6ZSo0XSwgLi4uQXR0ZW50aW9uUGFyYW1zIH06bnVsbDtcbiAgICAgICAgcmV0dXJuIHsgXG4gICAgICAgICAgICBOYW1lLCBUeXBlOiAnTGF5ZXInLCBDb25maWc6IHsgaW5wdXRTaXplLCBlbmNvZGVTaXplLCBwYWQsIG5hbWUgfSxcbiAgICAgICAgICAgIFBhcmFtZXRlcnMsXG4gICAgICAgICAgICBOZXQ6ICh2YWx1ZSwgcGFyYW1zLCBjb250ZXh0cyk9PntcbiAgICAgICAgICAgICAgICAgICAgbGV0IHsgYmF0Y2hTaXplLCBzZXFMZW4gfSA9IGNvbnRleHRzO1xuICAgICAgICAgICAgICAgICAgICBpZighKGJhdGNoU2l6ZSA+IDAgJiYgc2VxTGVuID4gMCkpe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoYGV4cGVjdCB7IGJhdGNoU2l6ZSwgc2VxTGVuIH0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aXZlIG51bWJlcnMgZ2V0ICR7SlNPTi5zdHJpbmdpZnkoY29udGV4dHMpfWApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGxldCB7IExTVE1LZXJuZWwsIExTVE1CaWFzLCBBdHRXZWlnaHQ9bnVsbCwgQXR0Qmlhcz1udWxsIH0gPSBwYXJhbXM7XG4gICAgICAgICAgICAgICAgICAgIGxldCBbIGgsIGMgXSA9IEluaXRTdGF0ZShiYXRjaFNpemUsIGVuY29kZVNpemUpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgaGlkZGVucyA9IFtdLCBwcmV2X2ggPSBudWxsLCBwcmV2X2MgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGlkeD0wOyBpZHggPCBzZXFMZW47IGlkeCsrKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0b2tlbiA9IHZhbHVlLmdhdGhlcihpZHgsIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJldl9oID0gaDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXZfYyA9IGM7XG4gICAgICAgICAgICAgICAgICAgICAgICBbIGgsIGMgXSA9IFJOTkNlbGwoMC41LCBMU1RNS2VybmVsLCBMU1RNQmlhcywgdG9rZW4sIGgsIGMgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGggPSBoLm11bChtYXNrKS5hZGQocHJldl9oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGMgPSBjLm11bChtYXNrKS5hZGQocHJldl9jLm11bCh0aGlzLlQuKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBoaWRkZW5zLnB1c2goaCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYoQXR0V2VpZ2h0ICYmIEF0dEJpYXMpe1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGF0dFZlY3MgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaCBvZiBoaWRkZW5zKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRWZWNzLnB1c2goaC5tYXRNdWwoQXR0V2VpZ2h0KS5hZGQoQXR0QmlhcykuZXhwKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGF0dFZlY1N1bSA9IHRoaXMuVC5jb25jYXQoYXR0VmVjcywxKS5zdW0oMSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaWR4ID0gMCwgYXR0SCA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGggb2YgaGlkZGVucyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoaWR4PT09MCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dEggPSBoLm11bChhdHRWZWNzW2lkeF0uZGl2KGF0dFZlY1N1bSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRIID0gYXR0SC5hZGQoaC5tdWwoYXR0VmVjc1tpZHhdLmRpdihhdHRWZWNTdW0pKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkeCArPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGF0dEg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICB9XG4gICAgXG4gICAgdmVjMnNlcSh7IGVuY29kZVNpemUsIG91dHB1dFNpemUsIHBhZD0wLCBuYW1lPW51bGwgfSl7XG4gICAgICAgIG5hbWUgPSB0aGlzLmNoZWNrTmFtZShuYW1lLCAnc2VxMnZlYycpO1xuICAgICAgICBjb25zdCBSTk5DZWxsID0gdGhpcy5ULmJhc2ljTFNUTUNlbGw7XG4gICAgICAgIGNvbnN0IEluaXRTdGF0ZSA9IChiYXRjaFNpemUsIHZlY1NpemUpPT4oWyB0aGlzLlQuemVyb3MoW2JhdGNoU2l6ZSwgdmVjU2l6ZV0pLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuVC56ZXJvcyhbYmF0Y2hTaXplLCB2ZWNTaXplXSkgXSk7XG4gICAgICAgIHJldHVybiB7IFxuICAgICAgICAgICAgTmFtZTogbmFtZSwgVHlwZTogJ0xheWVyJyxcbiAgICAgICAgICAgIENvbmZpZzoge3dvcmRWZWNTaXplLCBlbmNvZGVTaXplLCBwYWQsIG5hbWUgfSxcbiAgICAgICAgICAgIFBhcmFtZXRlcnM6IHsgTFNUTUtlcm5lbDogW2VuY29kZVNpemUgKyB3b3JkVmVjU2l6ZSwgZW5jb2RlU2l6ZSo0XSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgIExTVE1CaWFzOiBbZW5jb2RlU2l6ZSo0XSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgIE91dHB1dFdlaWdodDogW2VuY29kZVNpemUsIG91dHB1dFNpemVdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBPdXRwdXRCaWFzOiBbb3V0cHV0U2l6ZV0gIH0sXG4gICAgICAgICAgICBOZXQ6ICh2YWx1ZSwgcGFyYW1zLCBjb250ZXh0cyk9PntcbiAgICAgICAgICAgICAgICAgICAgbGV0IHsgYmF0Y2hTaXplLCBzZXFMZW4sIGlzVHJhaW5pbmcgfSA9IGNvbnRleHRzO1xuICAgICAgICAgICAgICAgICAgICBpZihpc1RyYWluaW5nKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IEVycm9yKGBleHBlY3QgeyBpc1RyYWluaW5nIH0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGEgYm9vbGVhbiBnZXQgJHtKU09OLnN0cmluZ2lmeShjb250ZXh0cyl9YCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYoIShiYXRjaFNpemUgPiAwICYmIHNlcUxlbiA+IDApKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IEVycm9yKGBleHBlY3QgeyBiYXRjaFNpemUsIHNlcUxlbiB9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGl2ZSBudW1iZXJzIGdldCAke0pTT04uc3RyaW5naWZ5KGNvbnRleHRzKX1gKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBsZXQgeyBMU1RNS2VybmVsLCBMU1RNQmlhcywgT3V0cHV0V2VpZ2h0LCBPdXRwdXRCaWFzIH0gPSBwYXJhbXM7XG4gICAgICAgICAgICAgICAgICAgIGxldCBbIGgsIGMgXSA9IEluaXRTdGF0ZShiYXRjaFNpemUsIGVuY29kZVNpemUpO1xuICAgICAgICAgICAgICAgICAgICBpZiggaXNUcmFpbmluZyApe1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBpZHg9MDsgaWR4IDwgc2VxTGVuOyBpZHgrKyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRva2VuID0gdmFsdWUuZ2F0aGVyKGlkeCwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgWyBoLCBjIF0gPSBSTk5DZWxsKDEsIExTVE1LZXJuZWwsIExTVE1CaWFzLCB0b2tlbiwgaCwgYyApOyAgXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBpZHg9MDsgaWR4IDwgc2VxTGVuOyBpZHgrKyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRva2VuID0gdmFsdWUuZ2F0aGVyKGlkeCwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgWyBoLCBjIF0gPSBSTk5DZWxsKDEsIExTVE1LZXJuZWwsIExTVE1CaWFzLCB0b2tlbiwgaCwgYyApOyAgXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IFJlY3VycmVudE1peGluczsiLCJpbXBvcnQgeyBUZW5zb3IgYXMgQmFzZVRlbnNvciB9IGZyb20gJ2NhdXNhbC1uZXQuY29yZSc7XG5pbXBvcnQgeyBwbGF0Zm9ybSB9IGZyb20gJ2NhdXNhbC1uZXQudXRpbHMnO1xuaW1wb3J0IHsgU3RvcmFnZU1peGlucywgaW5kZXhEQlN0b3JhZ2UgfSBmcm9tICdjYXVzYWwtbmV0LnN0b3JhZ2UnO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBQYXJhbWV0ZXJNaXhpbnMgfSBmcm9tICcuL3BhcmFtZXRlci5taXhpbnMnO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBwYXJhbWV0ZXJmdW5jdG9yIH0gZnJvbSAnLi9wYXJhbWV0ZXJGdW5jdG9yJztcbi8qKlxuICogVGhpcyBjbGFzcyBpcyBhIHN0YW5kYXJkIGltcGxlbWVudGF0aW9uIGZvciBtb2RlbCBwYXJhbWV0ZXJzIHdoaWNoIGNhbiBiZSBhY2Nlc3NlZCB2aWEgKipjYXVzYWxOZXRQYXJhbWV0ZXJzKiogaW5zdGFuY2VcbiAqIHsgbWl4V2l0aDogW1N0b3JhZ2VNaXhpbnMsIFBhcmFtZXRlck1peGluc10gfVxuICogQGNsYXNzIENhdXNhbE5ldFBhcmFtZXRlcnNcbiAqIEBleHRlbmRzIEJhc2VUZW5zb3JcbiAqIEBleGFtcGxlXG4gKiBbRVhBTVBMRSAuLi9leGFtcGxlL3BhcmFtZXRlcnMuYmFiZWwuanNdXG4gKi9cbmNsYXNzIENhdXNhbE5ldFBhcmFtZXRlcnMgZXh0ZW5kcyBwbGF0Zm9ybS5taXhXaXRoKEJhc2VUZW5zb3IsIFtTdG9yYWdlTWl4aW5zLCBQYXJhbWV0ZXJNaXhpbnNdICl7XG4gICAgY29uc3RydWN0b3Ioc3RvcmFnZSwgcGFyYW1ldGVyZnVuY3Rvcil7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMucGFyYW1ldGVycyA9IG51bGw7XG4gICAgICAgIHRoaXMuU3RvcmFnZSA9IHN0b3JhZ2U7XG4gICAgICAgIHRoaXMuRiA9IHBhcmFtZXRlcmZ1bmN0b3I7XG4gICAgICAgIHRoaXMuUiA9IHRoaXMuRi5Db3JlRnVuY3RvcjtcbiAgICB9XG59ICAgXG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBDYXVzYWxOZXRQYXJhbWV0ZXJzKGluZGV4REJTdG9yYWdlLCBwYXJhbWV0ZXJmdW5jdG9yKTsiLCJleHBvcnQgeyBkZWZhdWx0IGFzIGNhdXNhbE5ldFBhcmFtZXRlcnMgfSBmcm9tICcuL2NhdXNhbE5ldFBhcmFtZXRlcnMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBQYXJhbWV0ZXJNaXhpbnMgfSBmcm9tICcuL3BhcmFtZXRlci5taXhpbnMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBQYXJhbWV0ZXJGdW5jdG9yTWl4aW5zIH0gZnJvbSAnLi9wYXJhbWV0ZXJGdW5jdG9yLm1peGlucyc7IiwiY29uc3QgUGFyYW1ldGVyTWl4aW5zID0gKEJhc2VQYXJhbWV0ZXJDbGFzcyk9PiBjbGFzcyBleHRlbmRzIEJhc2VQYXJhbWV0ZXJDbGFzc3sgXG4gICAgXG4gICAgXG4gICAgXG4gICAgZ2V0IFBhcmFtZXRlcnMoKXtcbiAgICAgICAgaWYoIXRoaXMucGFyYW1ldGVycyl7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcigncGFyYW1ldGVycyBpcyBub3Qgc2V0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucGFyYW1ldGVycztcbiAgICB9XG4gICAgXG4gICAgc2V0IFBhcmFtZXRlcnMocGFyYW1ldGVycyl7XG4gICAgICAgIHRoaXMucGFyYW1ldGVycyA9IHBhcmFtZXRlcnM7XG4gICAgfVxuXG4gICAgc2V0IFBhcmFtZXRlclNpemVzKHBhcmFtZXRlclNpemVzKXtcbiAgICAgICAgdGhpcy5wYXJhbWV0ZXJTaXplcyA9IHBhcmFtZXRlclNpemVzO1xuICAgIH1cblxuICAgIGdldCBQYXJhbWV0ZXJTaXplcygpe1xuICAgICAgICBpZighdGhpcy5wYXJhbWV0ZXJTaXplcyl7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcigncGFyYW1ldGVyU2l6ZXMgaXMgbm90IHNldCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnBhcmFtZXRlclNpemVzO1xuICAgIH1cbiAgICBcbiAgICBnZXQgU2F2ZU1vZGVsRGlyKCl7XG4gICAgICAgIHJldHVybiAnc2F2ZU1vZGVsLyc7XG4gICAgfVxuICAgIFxuICAgIGV4cG9ydFBhcmFtZXRlcnMoKXtcbiAgICAgICAgaWYoIXRoaXMucGFyYW1ldGVycyl7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcigncGFyYW1ldGVyIGlzIG5vdCBzZXQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKGFzeW5jICgpPT57XG4gICAgICAgICAgICBjb25zdCBGbiA9IGFzeW5jIChwYXJhbSk9PihBcnJheS5mcm9tKGF3YWl0IHBhcmFtLmRhdGEoKSkpO1xuICAgICAgICAgICAgbGV0IHBhcmFtcyA9IGF3YWl0IHRoaXMuZXh0cmFjdFBhcmFtRnJvbVRlbnNvckRpY3QodGhpcy5wYXJhbWV0ZXJzLCBGbik7XG4gICAgICAgICAgICByZXR1cm4gcGFyYW1zO1xuICAgICAgICB9KSgpO1xuICAgIH1cblxuICAgIFxuICAgIGFzeW5jIGV4dHJhY3RQYXJhbUZyb21UZW5zb3JEaWN0KHBhcmFtcywgZm4pe1xuICAgICAgICBjb25zdCBSID0gdGhpcy5SO1xuICAgICAgICBjb25zdCBUcmF2ZWxsZXIgPSBhc3luYyAocGFyYW1zLCBmbik9PntcbiAgICAgICAgICAgIGlmKHRoaXMuaXNUZW5zb3IocGFyYW1zKSl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGZuKHBhcmFtcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIGxldCBrVmFscyA9IFIudG9QYWlycyhwYXJhbXMpO1xuICAgICAgICAgICAgICAgIGxldCByZXMgPSB7fTtcbiAgICAgICAgICAgICAgICBmb3IobGV0IFtrLCB2YWxdIG9mIGtWYWxzKXtcbiAgICAgICAgICAgICAgICAgICAgcmVzW2tdID0gYXdhaXQgVHJhdmVsbGVyKHZhbCwgZm4pOyBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIGF3YWl0IFRyYXZlbGxlcihwYXJhbXMsIGZuKTtcbiAgICB9XG4gICAgXG4gICAgYXN5bmMgcGFyYW1ldGVyc1N1bW1hcnkoKXtcbiAgICAgICAgaWYoIXRoaXMucGFyYW1ldGVycyl7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcigncGFyYW1ldGVyIG11c3QgYmUgc2V0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgRm4gPSBhc3luYyAocGFyYW0pPT5BcnJheS5mcm9tKGF3YWl0IHBhcmFtLm1lYW4oKS5kYXRhKCkpO1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5leHRyYWN0UGFyYW1Gcm9tVGVuc29yRGljdCh0aGlzLnBhcmFtZXRlcnMsIEZuKTtcbiAgICB9XG4gICAgXG4gICAgaW5pdFBhcmFtU2l6ZXNCeUxheWVycyhsYXllcnMpe1xuICAgICAgICBjb25zdCB7IGNvbXBvc2UsIGZyb21QYWlycywgbWFwLCB2YWx1ZXMsIGNvbmNhdCwgcmVkdWNlLCBmaWx0ZXIgfSA9IHRoaXMuUjtcbiAgICAgICAgY29uc3QgR2V0UGFyYW1TaXplID0gY29tcG9zZShmcm9tUGFpcnMsIG1hcChwPT5bcC5OYW1lLCBwLlBhcmFtZXRlcnNdKSwgZmlsdGVyKHA9PnAuUGFyYW1ldGVycykpO1xuICAgICAgICBsZXQgZmxhdHRlbkxheWVycyA9IGNvbXBvc2UocmVkdWNlKChzLHYpPT5jb25jYXQocyx2KSxbXSksIHZhbHVlcykobGF5ZXJzKTtcbiAgICAgICAgdGhpcy5QYXJhbWV0ZXJTaXplcyA9IEdldFBhcmFtU2l6ZShmbGF0dGVuTGF5ZXJzKTtcbiAgICB9XG5cbiAgICBpbXBvcnRQYXJhbWV0ZXJzKHBhcmFtT2JqZWN0KXtcbiAgICAgICAgY29uc3QgVCA9IHRoaXMuVCwgRiA9IHRoaXMuRjtcbiAgICAgICAgY29uc3QgU2V0T3JJbml0ID0gKCBpbml0UHJlZGljdCwgcGFyYW1PYmplY3QgKT0+e1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gRi5wYXJhbWV0ZXJNYXBXaXRoS2V5KChrZXlzLCBwYXJhbVNpemUpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcGFyYW1WYWx1ZSA9IHRoaXMuRi5nZXRJbihrZXlzLCBwYXJhbU9iamVjdCwgbnVsbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihwYXJhbVZhbHVlID09PSBudWxsKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gVC52YXJpYWJsZShULnJhbmRvbU5vcm1hbChwYXJhbVNpemUpLmFzVHlwZSgnZmxvYXQzMicpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFQudmFyaWFibGUoVC50ZW5zb3IocGFyYW1WYWx1ZSwgcGFyYW1TaXplLCAnZmxvYXQzMicpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfSwgaW5pdFByZWRpY3QpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgIHRoaXMuUGFyYW1ldGVycyA9IFNldE9ySW5pdCggdGhpcy5QYXJhbWV0ZXJTaXplcywgcGFyYW1PYmplY3QgKTtcbiAgICB9XG5cbiAgICBJbml0UGFyYW1ldGVycyhwYXJhbU9iamVjdD17fSl7XG4gICAgICAgIHJldHVybiAobGF5ZXJzKT0+e1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2V0T3JJbml0UGFyYW1zKGxheWVycywgcGFyYW1PYmplY3QpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIHNldE9ySW5pdFBhcmFtcyhsYXllcnMsIHBhcmFtT2JqZWN0KXtcbiAgICAgICAgdGhpcy5pbml0UGFyYW1TaXplc0J5TGF5ZXJzKGxheWVycyk7XG4gICAgICAgIHRoaXMuaW1wb3J0UGFyYW1ldGVycyhwYXJhbU9iamVjdCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGFzeW5jIGdldFNhdmVkUGFyYW1MaXN0KCl7XG4gICAgICAgIGNvbnN0IFN0b3JhZ2UgPSB0aGlzLlN0b3JhZ2UsIFNhdmVEaXIgPSB0aGlzLlNhdmVNb2RlbERpcjtcbiAgICAgICAgbGV0IGZpbGVMaXN0ID0gYXdhaXQgU3RvcmFnZS5nZXRGaWxlTGlzdChTYXZlRGlyKTtcbiAgICAgICAgcmV0dXJuIGZpbGVMaXN0Lm1hcChmaWxlTmFtZT0+ZmlsZU5hbWUucmVwbGFjZShTYXZlRGlyLCcnKSk7XG4gICAgfVxuXG4gICAgYXN5bmMgc2F2ZVBhcmFtcyhmaWxlTmFtZSl7XG4gICAgICAgIGNvbnN0IFNhdmVEaXIgPSB0aGlzLlNhdmVNb2RlbERpcjtcbiAgICAgICAgY29uc3QgU3RvcmFnZSA9IHRoaXMuU3RvcmFnZTtcbiAgICAgICAgbGV0IHBhcmFtcyA9IGF3YWl0IHRoaXMuZXhwb3J0UGFyYW1ldGVycygpO1xuICAgICAgICBhd2FpdCBTdG9yYWdlLndyaXRlRmlsZShTYXZlRGlyICsgZmlsZU5hbWUsIEpTT04uc3RyaW5naWZ5KHBhcmFtcykpO1xuICAgICAgICByZXR1cm4gcGFyYW1zO1xuICAgIH1cbiAgICBhc3luYyBsb2FkUGFyYW1zKGZpbGVOYW1lKXtcbiAgICAgICAgY29uc3QgU3RvcmFnZSA9IHRoaXMuU3RvcmFnZSwgU2F2ZURpciA9IHRoaXMuU2F2ZU1vZGVsRGlyO1xuICAgICAgICBsZXQgc3RyUGFyYW1zID0gYXdhaXQgU3RvcmFnZS5yZWFkRmlsZShTYXZlRGlyK2ZpbGVOYW1lKTtcbiAgICAgICAgbGV0IHBhcmFtcyA9IEpTT04ucGFyc2Uoc3RyUGFyYW1zKTtcbiAgICAgICAgdGhpcy5pbXBvcnRQYXJhbWV0ZXJzKHBhcmFtcyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBhcmFtZXRlck1peGluczsiLCJpbXBvcnQge0Z1bmN0b3IgYXMgQmFzZUZ1bmN0b3J9IGZyb20gJ2NhdXNhbC1uZXQuY29yZSc7XG5pbXBvcnQge3BsYXRmb3JtfSBmcm9tICdjYXVzYWwtbmV0LnV0aWxzJztcbmltcG9ydCB7ZGVmYXVsdCBhcyBQYXJhbWV0ZXJGdW5jdG9yTWl4aW5zIH0gZnJvbSAnLi9wYXJhbWV0ZXJGdW5jdG9yLm1peGlucyc7XG5cbmNsYXNzIFBhcmFtZXRlckZ1bmN0b3IgZXh0ZW5kcyBwbGF0Zm9ybS5taXhXaXRoKEJhc2VGdW5jdG9yLCBbIFBhcmFtZXRlckZ1bmN0b3JNaXhpbnMgXSApe1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgUGFyYW1ldGVyRnVuY3RvcigpOyIsImNvbnN0IFBhcmFtZXRlckZ1bmN0b3JNaXhpbnMgPSAoRnVuY3RvckNsYXNzKT0+IGNsYXNzIGV4dGVuZHMgRnVuY3RvckNsYXNzeyBcbiAgICBpc1BhcmFtZXRlcih2YWwpe1xuICAgICAgICBjb25zdCBSID0gdGhpcy5SO1xuICAgICAgICByZXR1cm4gUi5pZkVsc2UoUi5pcyhBcnJheSksIFIuYWxsKFIuaXMoTnVtYmVyKSksIFIuYWx3YXlzKGZhbHNlKSkodmFsKTtcbiAgICB9XG4gICAgcGFyYW1ldGVyTWFwV2l0aEtleShmbiwgcGFyYW1ldGVyT2JqZWN0KXtcbiAgICAgICAgY29uc3QgUiA9IHRoaXMuUjtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IFJlcyA9IChrZXlzLCBzdWJPYmplY3QpID0+IFIuY29tcG9zZShSLmZyb21QYWlycywgXG4gICAgICAgICAgICAgICAgICAgICAgICBSLm1hcCgoW2tleSwgc3ViT2JqZWN0XSk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmlzUGFyYW1ldGVyKHN1Yk9iamVjdCkpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW2tleSwgZm4oWy4uLmtleXMsIGtleV0sIHN1Yk9iamVjdCldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihSLmlzKE9iamVjdCwgc3ViT2JqZWN0KSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW2tleSwgUmVzKFsuLi5rZXlzLCBrZXldLCBzdWJPYmplY3QpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtrZXksIHN1Yk9iamVjdF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSwgUi50b1BhaXJzKShzdWJPYmplY3QpO1xuICAgICAgICByZXR1cm4gUmVzKFtdLCBwYXJhbWV0ZXJPYmplY3QpO1xuICAgIH0gICAgICAgIFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFyYW1ldGVyRnVuY3Rvck1peGluczsiLCJpbXBvcnQgeyBUZW5zb3IgYXMgQmFzZVRlbnNvciB9IGZyb20gJ2NhdXNhbC1uZXQuY29yZSc7XG5pbXBvcnQgeyBwbGF0Zm9ybSB9IGZyb20gJ2NhdXNhbC1uZXQudXRpbHMnO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBSdW5uZXJNaXhpbnMgfSBmcm9tICcuL3J1bm5lci5taXhpbnMnO1xuLyoqXG4gKiBUaGlzIENhdXNhbE5ldFJ1bm5lciBjbGFzcyBwcm92aWRlIG5ldCBleGNlY3V0b3Igd2hpY2ggaXMgcHJvdmlkZWQgcGlwZWxpbmUgaW5zdGFuY2UgYXQgKipMYXllclJ1bm5lcioqIGF0dHJpYnV0ZS5cbiAqIHsgbWl4V2l0aDogWyBSdW5uZXJNaXhpbnMgXSB9XG4gKiBAY2xhc3MgQ2F1c2FsTmV0UnVubmVyXG4gKiBAZXh0ZW5kcyBCYXNlVGVuc29yXG4gKiBAZXhhbXBsZVxuICogW0VYQU1QTEUgLi4vZXhhbXBsZXMvcnVubmVyLm1peGlucy5iYWJlbC5qc11cbiAqL1xuY2xhc3MgQ2F1c2FsTmV0UnVubmVyIGV4dGVuZHMgcGxhdGZvcm0ubWl4V2l0aChCYXNlVGVuc29yLCBbIFJ1bm5lck1peGlucyBdICl7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBDYXVzYWxOZXRSdW5uZXIoKTsiLCJleHBvcnQgeyBkZWZhdWx0IGFzIGNhdXNhbE5ldFJ1bm5lciB9IGZyb20gJy4vY2F1c2FsTmV0UnVubmVyJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUnVubmVyTWl4aW5zIH0gZnJvbSAnLi9ydW5uZXIubWl4aW5zJzsiLCIvKipcbiAqIFRoaXMgUnVubmVyTWl4aW5zIGNsYXNzIHByb3ZpZGUgbWV0aG9kcyBmb3IgcnVubmVyIGNsYXNzLlxuICogQGNsYXNzIFJ1bm5lck1peGluc1xuICogQGV4dGVuZHMgQmFzZVJ1bm5lckNsYXNzXG4gKi9cbmNvbnN0IFJ1bm5lck1peGlucyA9ICggQmFzZVJ1bm5lckNsYXNzICk9PiBjbGFzcyBleHRlbmRzIEJhc2VSdW5uZXJDbGFzc3tcbiAgICBzZXQgTmV0UGFyYW1ldGVycyhwYXJhbWV0ZXJzKXtcbiAgICAgICAgdGhpcy5uZXRQYXJhbWV0ZXJzID0gcGFyYW1ldGVycztcbiAgICB9XG4gICAgc2V0IE5ldExheWVycyhuZXRMYXllcnMpe1xuICAgICAgICB0aGlzLm5ldExheWVycyA9IG5ldExheWVycztcbiAgICB9XG4gICAgZ2V0IE5ldFBhcmFtZXRlcnMoKXtcbiAgICAgICAgaWYoIXRoaXMubmV0UGFyYW1ldGVycyl7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignbmV0UGFyYW1ldGVycyBpcyBub3Qgc2V0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMubmV0UGFyYW1ldGVycy5QYXJhbWV0ZXJzO1xuICAgIH1cbiAgICBnZXQgTmV0TGF5ZXJzKCl7XG4gICAgICAgIGlmKCF0aGlzLm5ldExheWVycyl7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignbmV0TGF5ZXJzIGlzIG5vdCBzZXQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5uZXRMYXllcnM7XG4gICAgfVxuICAgIFxuXG4gICAgcnVuTGF5ZXIodmFsdWUsIGxheWVyQ29uZmlndXJlLCBsYXllclBhcmFtZXRlcnMsIGNvbnRleHRzKXtcbiAgICAgICAgY29uc3QgeyBOYW1lLCBUeXBlLCBOZXQgfSA9IGxheWVyQ29uZmlndXJlOyAgXG4gICAgICAgIGlmKFR5cGUgPT09ICdMYXllcicpe1xuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IE5ldCh2YWx1ZSwgbGF5ZXJQYXJhbWV0ZXJzLCBjb250ZXh0cyk7XG4gICAgICAgICAgICByZXR1cm4ge1tOYW1lXTogcmVzdWx0fTtcbiAgICAgICAgfSAgIFxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoYGV4cGVjdCB7VHlwZX0gdG8gYmUgJ0xheWVyJyBnZXQgJHtsYXllckNvbmZpZ3VyZX1gKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJ1bihsYXllcnMsIHNhbXBsZXMsIHBhcmFtZXRlcnMsIGNvbnRleHRzKXtcbiAgICAgICAgbGV0IHBpcGVWYWx1ZSA9IHtQaXBlSW5wdXQ6IHNhbXBsZXN9LCBsYXN0TGF5ZXIgPSAnUGlwZUlucHV0JztcbiAgICAgICAgZm9yKGxldCBsYXllciBvZiBsYXllcnMpe1xuICAgICAgICAgICAgbGV0IGxheWVyT3V0cHV0ID0gdGhpcy5ydW5MYXllcihwaXBlVmFsdWVbbGFzdExheWVyXSwgbGF5ZXIsIHBhcmFtZXRlcnNbbGF5ZXIuTmFtZV0sIGNvbnRleHRzKTtcbiAgICAgICAgICAgIHBpcGVWYWx1ZVtsYXllci5OYW1lXSA9IGxheWVyT3V0cHV0W2xheWVyLk5hbWVdO1xuICAgICAgICAgICAgbGFzdExheWVyID0gbGF5ZXIuTmFtZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGlwZVZhbHVlW2xhc3RMYXllcl07XG4gICAgfVxuXG4gICAgZ2V0IExheWVyUHJlZGljdCgpe1xuICAgICAgICBsZXQgcHJlZGljdExheWVycyA9IHRoaXMuTmV0TGF5ZXJzLlByZWRpY3Q7XG4gICAgICAgIHJldHVybiAoc2FtcGxlcywgY29udGV4dHM9e30pPT57XG4gICAgICAgICAgICBsZXQgcGFyYW1ldGVycyA9IHRoaXMuTmV0UGFyYW1ldGVycztcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJ1bihwcmVkaWN0TGF5ZXJzLCBzYW1wbGVzLCBwYXJhbWV0ZXJzLCB7Li4uY29udGV4dHMsIGxheWVyOiAnUHJlZGljdCd9KTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZ2V0IExheWVyRW5jb2RlKCl7XG4gICAgICAgIGxldCBlbmNvZGVMYXllcnMgPSB0aGlzLk5ldExheWVycy5FbmNvZGU7XG4gICAgICAgIHJldHVybiAoc2FtcGxlcywgY29udGV4dHM9e30pPT57XG4gICAgICAgICAgICBsZXQgcGFyYW1ldGVycyA9IHRoaXMuTmV0UGFyYW1ldGVycztcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJ1bihlbmNvZGVMYXllcnMsIHNhbXBsZXMsIHBhcmFtZXRlcnMsIHsuLi5jb250ZXh0cywgbGF5ZXI6ICdFbmNvZGUnfSk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIGdldCBMYXllckRlY29kZSgpe1xuICAgICAgICBsZXQgZGVjb2RlTGF5ZXJzID0gdGhpcy5OZXRMYXllcnMuRGVjb2RlO1xuICAgICAgICByZXR1cm4gKHNhbXBsZXMsIGNvbnRleHRzPXt9KT0+e1xuICAgICAgICAgICAgbGV0IHBhcmFtZXRlcnMgPSB0aGlzLk5ldFBhcmFtZXRlcnM7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ydW4oZGVjb2RlTGF5ZXJzLCBzYW1wbGVzLCBwYXJhbWV0ZXJzLCB7Li4uY29udGV4dHMsIGxheWVyOiAnRGVjb2RlJ30pO1xuICAgICAgICB9O1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJ1bm5lck1peGlucztcbiIsImV4cG9ydCB7IGNhdXNhbE5ldExheWVycyB9IGZyb20gJy4vQ2F1c2FsTmV0TGF5ZXJzL2luZGV4JztcbmV4cG9ydCB7IGNhdXNhbE5ldFBhcmFtZXRlcnMsIFBhcmFtZXRlck1peGlucywgUGFyYW1ldGVyRnVuY3Rvck1peGlucyB9IGZyb20gJy4vQ2F1c2FsTmV0UGFyYW1ldGVycy9pbmRleCc7XG5leHBvcnQgeyBjYXVzYWxOZXRSdW5uZXIsIFJ1bm5lck1peGlucyB9IGZyb20gJy4vQ2F1c2FsTmV0UnVubmVyL2luZGV4JztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTGF5ZXJSdW5uZXJNaXhpbnMgfSBmcm9tICcuL2xheWVyUnVubmVyLm1peGlucyc7XG4iLCIvKipcbiAqIFRoaXMgbWl4aW4gY2xhc3MgcHJvdmlkZSBhdHRyaWJ1dGVzOiAqKlBhcmFtZXRlckluaXRpYWxpemVyKiosICoqTGF5ZXJSdW5uZXIqKiwgXG4gKiBhbmQgaGFuZGxlICoqTmV0Kiogc2V0dGluZyBvZiBwaXBlbGluZUNvbmZpZyBcbiAqIEBjbGFzcyBMYXllclJ1bm5lck1peGluc1xuICogQGV4dGVuZHMgQmFzZVBpcGVsaW5lQ2xhc3NcbiAqIEBleGFtcGxlXG4gKiBbRVhBTVBMRSAuLi9leGFtcGxlcy9sYXllclJ1bm5lci5taXhpbnMuYmFiZWwuanNdXG4gKi9cbmNvbnN0IExheWVyUnVubmVyTWl4aW5zID0gKEJhc2VQaXBlbGluZUNsYXNzKT0+IGNsYXNzIGV4dGVuZHMgQmFzZVBpcGVsaW5lQ2xhc3N7XG4gICAgYXN5bmMgc2F2ZVBhcmFtcyhmaWxlTmFtZSl7XG4gICAgICAgIGF3YWl0IHRoaXMuTGF5ZXJSdW5uZXIuTmV0UGFyYW1ldGVycy5zYXZlUGFyYW1zKGZpbGVOYW1lKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGFzeW5jIGxvYWRQYXJhbXMoZmlsZU5hbWUpe1xuICAgICAgICB0aGlzLkxheWVyUnVubmVyLk5ldFBhcmFtZXRlcnMgPSBhd2FpdCB0aGlzLkxheWVyUnVubmVyLk5ldFBhcmFtZXRlcnMubG9hZFBhcmFtcyhmaWxlTmFtZSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGFzeW5jIGdldFNhdmVkUGFyYW1MaXN0KCl7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLkxheWVyUnVubmVyLk5ldFBhcmFtZXRlcnMuZ2V0U2F2ZWRQYXJhbUxpc3QoKTtcbiAgICB9XG5cbiAgICBnZXQgUGFyYW1ldGVySW5pdGlhbGl6ZXIoKXtcbiAgICAgICAgaWYoIXRoaXMucGFyYW1ldGVySW5pdGlhbGl6ZXIpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ1BhcmFtZXRlckluaXRpYWxpemVyIGlzIG5vdCBzZXQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5wYXJhbWV0ZXJJbml0aWFsaXplcjtcbiAgICB9XG5cbiAgICBzZXQgUGFyYW1ldGVySW5pdGlhbGl6ZXIocGFyYW1ldGVySW5pdGlhbGl6ZXIpe1xuICAgICAgICB0aGlzLnBhcmFtZXRlckluaXRpYWxpemVyID0gcGFyYW1ldGVySW5pdGlhbGl6ZXI7XG4gICAgfVxuXG5cbiAgICBzZXRCeUNvbmZpZyhwaXBlbGluZUNvbmZpZyl7XG4gICAgICAgIGlmKHN1cGVyLnNldEJ5Q29uZmlnKXtcbiAgICAgICAgICAgIHN1cGVyLnNldEJ5Q29uZmlnKHBpcGVsaW5lQ29uZmlnKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLkxvZ2dlci5ncm91cEJlZ2luKCdzZXQgTGF5ZXJSdW5uZXIgYnkgY29uZmlnJyk7XG4gICAgICAgIGNvbnN0IHsgTmV0IH0gPSBwaXBlbGluZUNvbmZpZztcbiAgICAgICAgY29uc3QgeyBMYXllcnMsIFBhcmFtZXRlcnMgfSA9IE5ldDsgXG4gICAgICAgIHRoaXMuTGF5ZXJSdW5uZXIuTmV0TGF5ZXJzID0gTGF5ZXJzO1xuICAgICAgICB0aGlzLlBhcmFtZXRlckluaXRpYWxpemVyID0gUGFyYW1ldGVyczsgICAgICAgXG4gICAgICAgIHRoaXMuTGF5ZXJSdW5uZXIuTmV0UGFyYW1ldGVycyA9IHRoaXMuUGFyYW1ldGVySW5pdGlhbGl6ZXIoTGF5ZXJzKTtcbiAgICAgICAgdGhpcy5Mb2dnZXIuZ3JvdXBFbmQoKTtcbiAgICB9XG5cbiAgICBzZXQgTGF5ZXJSdW5uZXIocnVubmVyKXtcbiAgICAgICAgdGhpcy5sYXllclJ1bm5lciA9IHJ1bm5lcjtcbiAgICB9XG4gICAgZ2V0IExheWVyUnVubmVyKCl7XG4gICAgICAgIGlmKCF0aGlzLmxheWVyUnVubmVyKXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdsYXllclJ1bm5lciBpcyBub3Qgc2V0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMubGF5ZXJSdW5uZXI7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgTGF5ZXJSdW5uZXJNaXhpbnM7IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfY29yZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3N0b3JhZ2VfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF91dGlsc19fOyJdLCJzb3VyY2VSb290IjoiIn0=