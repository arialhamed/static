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
      name = this.nameGenerator(layerType);
    } else {
      if (this.layerNames.indexOf(name) > -1) {
        throw Error(`${name} is existed`);
      } else {
        this.layerNames.push(name);
      }
    }

    return name;
  }

  custom({
    Net,
    Parameters = {},
    name = null
  }) {
    name = this.checkName(name, 'custom');
    return {
      Name: name,
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
    if (!name) {
      name = this.nameGenerator('convolution');
    }

    const FConv = this.T.conv2d;
    const shapeType = 'NHWC';
    return {
      Name: name,
      Type: 'Layer',
      Config: {
        kernelSize,
        filters,
        strides,
        padding,
        dilations,
        flatten,
        activator,
        name,
        shapeType
      },
      Parameters: {
        Kernel: [...kernelSize, ...filters]
      },
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
    name = null
  }) {
    if (!name) {
      name = this.nameGenerator('dense');
    }

    return {
      Name: name,
      Type: 'Layer',
      Config: {
        inputSize,
        outputSize,
        activator,
        name
      },
      Parameters: {
        Weight: [inputSize, outputSize],
        Bias: [outputSize]
      },
      Net: (value, params, contexts) => {
        let {
          Weight,
          Bias
        } = params;
        let result = value.dot(Weight).add(Bias);

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
    const RNNCell = this.T.basicLSTMCell;

    const InitState = (batchSize, vecSize) => [this.T.zeros([batchSize, vecSize]), this.T.zeros([batchSize, vecSize])];

    let attentionParams = attention ? {
      AttWeight: [encodeSize, 1],
      AttBias: [1]
    } : {};
    return {
      Name: name,
      Type: 'Layer',
      Config: {
        inputSize,
        encodeSize,
        pad,
        name
      },
      Parameters: _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({
        LSTMKernel: [encodeSize + inputSize, encodeSize * 4],
        LSTMBias: [encodeSize * 4]
      }, attentionParams),
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
      reduce
    } = this.R;
    const GetParamSize = compose(fromPairs, map(p => [p.Name, p.Parameters]));
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

  get Predictor() {
    let predictLayers = this.NetLayers.Predict;

    const ParametersLenses = () => this.NetParameters;

    return (samples, contexts = {}) => {
      let parameters = ParametersLenses();
      return this.run(predictLayers, samples, parameters, _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, contexts, {
        layer: 'Predict'
      }));
    };
  }

  get Encoder() {
    let encodeLayers = this.NetLayers.Encode;

    const ParametersLenses = () => this.NetParameters;

    return (samples, contexts = {}) => {
      let parameters = ParametersLenses();
      return this.run(encodeLayers, samples, parameters, _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, contexts, {
        layer: 'Encode'
      }));
    };
  }

  get Decoder() {
    let decodeLayers = this.NetLayers.Decode;

    const ParametersLenses = () => this.NetParameters;

    return (samples, contexts = {}) => {
      let parameters = ParametersLenses();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xheWVyL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xheWVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0BjYXVzYWxOZXQvbGF5ZXIvL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xheWVyLy9ob21lL2h1eW5obmd1eWVuL2dpdGh1Yi9jYXVzYWxpdHkvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0U3ByZWFkLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbGF5ZXIvLi9zcmMvQ2F1c2FsTmV0TGF5ZXJzL2NhdXNhbE5ldExheWVycy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xheWVyLy4vc3JjL0NhdXNhbE5ldExheWVycy9jb252b2x1dGlvbi5taXhpbnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9sYXllci8uL3NyYy9DYXVzYWxOZXRMYXllcnMvZGVuc2UubWl4aW5zLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbGF5ZXIvLi9zcmMvQ2F1c2FsTmV0TGF5ZXJzL2luZGV4LmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbGF5ZXIvLi9zcmMvQ2F1c2FsTmV0TGF5ZXJzL3JlY3VycmVudC5taXhpbnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9sYXllci8uL3NyYy9DYXVzYWxOZXRQYXJhbWV0ZXJzL2NhdXNhbE5ldFBhcmFtZXRlcnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9sYXllci8uL3NyYy9DYXVzYWxOZXRQYXJhbWV0ZXJzL2luZGV4LmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbGF5ZXIvLi9zcmMvQ2F1c2FsTmV0UGFyYW1ldGVycy9wYXJhbWV0ZXIubWl4aW5zLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbGF5ZXIvLi9zcmMvQ2F1c2FsTmV0UGFyYW1ldGVycy9wYXJhbWV0ZXJGdW5jdG9yLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbGF5ZXIvLi9zcmMvQ2F1c2FsTmV0UGFyYW1ldGVycy9wYXJhbWV0ZXJGdW5jdG9yLm1peGlucy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xheWVyLy4vc3JjL0NhdXNhbE5ldFJ1bm5lci9jYXVzYWxOZXRSdW5uZXIuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9sYXllci8uL3NyYy9DYXVzYWxOZXRSdW5uZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9sYXllci8uL3NyYy9DYXVzYWxOZXRSdW5uZXIvcnVubmVyLm1peGlucy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xheWVyLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbGF5ZXIvLi9zcmMvbGF5ZXJSdW5uZXIubWl4aW5zLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbGF5ZXIvZXh0ZXJuYWwgXCJjYXVzYWwtbmV0LmNvcmVcIiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xheWVyL2V4dGVybmFsIFwiY2F1c2FsLW5ldC5zdG9yYWdlXCIiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9sYXllci9leHRlcm5hbCBcImNhdXNhbC1uZXQudXRpbHNcIiJdLCJuYW1lcyI6WyJDYXVzYWxOZXRMYXllcnMiLCJwbGF0Zm9ybSIsIm1peFdpdGgiLCJCYXNlVGVuc29yIiwiRGVuc2VNaXhpbnMiLCJDb252b2x1dGlvbmFsTWl4aW5zIiwiUmVjdXJyZW50TWl4aW5zIiwiY29uc3RydWN0b3IiLCJsYXllck5hbWVzIiwibmFtZUdlbmVyYXRvciIsImxheWVyVHlwZSIsImxheWVySWR4IiwibGVuZ3RoIiwibmV3TmFtZSIsInB1c2giLCJjaGVja05hbWUiLCJuYW1lIiwiaW5kZXhPZiIsIkVycm9yIiwiY3VzdG9tIiwiTmV0IiwiUGFyYW1ldGVycyIsIk5hbWUiLCJUeXBlIiwiQ29uZmlnIiwiQ29udm9sdXRpb25NaXhpbnMiLCJQaXBlbGluZUNsYXNzIiwiY29udm9sdXRpb24iLCJrZXJuZWxTaXplIiwiZmlsdGVycyIsInN0cmlkZXMiLCJwYWRkaW5nIiwiZGlsYXRpb25zIiwiZmxhdHRlbiIsImFjdGl2YXRvciIsIkZDb252IiwiVCIsImNvbnYyZCIsInNoYXBlVHlwZSIsIktlcm5lbCIsInZhbHVlIiwicGFyYW1zIiwiY29udGV4dHMiLCJyZXN1bHQiLCJiYXRjaFNpemUiLCJyZXNoYXBlIiwiRGVuc2VMYXllck1peGlucyIsImRlbnNlIiwiaW5wdXRTaXplIiwib3V0cHV0U2l6ZSIsIldlaWdodCIsIkJpYXMiLCJkb3QiLCJhZGQiLCJzZXEydmVjIiwiZW5jb2RlU2l6ZSIsInBhZCIsImF0dGVudGlvbiIsIlJOTkNlbGwiLCJiYXNpY0xTVE1DZWxsIiwiSW5pdFN0YXRlIiwidmVjU2l6ZSIsInplcm9zIiwiYXR0ZW50aW9uUGFyYW1zIiwiQXR0V2VpZ2h0IiwiQXR0QmlhcyIsIkxTVE1LZXJuZWwiLCJMU1RNQmlhcyIsInNlcUxlbiIsIkpTT04iLCJzdHJpbmdpZnkiLCJoIiwiYyIsImhpZGRlbnMiLCJwcmV2X2giLCJwcmV2X2MiLCJpZHgiLCJ0b2tlbiIsImdhdGhlciIsImF0dFZlY3MiLCJtYXRNdWwiLCJleHAiLCJhdHRWZWNTdW0iLCJjb25jYXQiLCJzdW0iLCJhdHRIIiwibXVsIiwiZGl2IiwidmVjMnNlcSIsIndvcmRWZWNTaXplIiwiT3V0cHV0V2VpZ2h0IiwiT3V0cHV0QmlhcyIsImlzVHJhaW5pbmciLCJDYXVzYWxOZXRQYXJhbWV0ZXJzIiwiU3RvcmFnZU1peGlucyIsIlBhcmFtZXRlck1peGlucyIsInN0b3JhZ2UiLCJwYXJhbWV0ZXJmdW5jdG9yIiwicGFyYW1ldGVycyIsIlN0b3JhZ2UiLCJGIiwiUiIsIkNvcmVGdW5jdG9yIiwiaW5kZXhEQlN0b3JhZ2UiLCJCYXNlUGFyYW1ldGVyQ2xhc3MiLCJQYXJhbWV0ZXJTaXplcyIsInBhcmFtZXRlclNpemVzIiwiU2F2ZU1vZGVsRGlyIiwiZXhwb3J0UGFyYW1ldGVycyIsIkZuIiwicGFyYW0iLCJBcnJheSIsImZyb20iLCJkYXRhIiwiZXh0cmFjdFBhcmFtRnJvbVRlbnNvckRpY3QiLCJmbiIsIlRyYXZlbGxlciIsImlzVGVuc29yIiwia1ZhbHMiLCJ0b1BhaXJzIiwicmVzIiwiayIsInZhbCIsInBhcmFtZXRlcnNTdW1tYXJ5IiwibWVhbiIsImluaXRQYXJhbVNpemVzQnlMYXllcnMiLCJsYXllcnMiLCJjb21wb3NlIiwiZnJvbVBhaXJzIiwibWFwIiwidmFsdWVzIiwicmVkdWNlIiwiR2V0UGFyYW1TaXplIiwicCIsImZsYXR0ZW5MYXllcnMiLCJzIiwidiIsImltcG9ydFBhcmFtZXRlcnMiLCJwYXJhbU9iamVjdCIsIlNldE9ySW5pdCIsImluaXRQcmVkaWN0IiwicGFyYW1ldGVyTWFwV2l0aEtleSIsImtleXMiLCJwYXJhbVNpemUiLCJwYXJhbVZhbHVlIiwiZ2V0SW4iLCJ2YXJpYWJsZSIsInJhbmRvbU5vcm1hbCIsImFzVHlwZSIsInRlbnNvciIsIkluaXRQYXJhbWV0ZXJzIiwic2V0T3JJbml0UGFyYW1zIiwiZ2V0U2F2ZWRQYXJhbUxpc3QiLCJTYXZlRGlyIiwiZmlsZUxpc3QiLCJnZXRGaWxlTGlzdCIsImZpbGVOYW1lIiwicmVwbGFjZSIsInNhdmVQYXJhbXMiLCJ3cml0ZUZpbGUiLCJsb2FkUGFyYW1zIiwic3RyUGFyYW1zIiwicmVhZEZpbGUiLCJwYXJzZSIsIlBhcmFtZXRlckZ1bmN0b3IiLCJCYXNlRnVuY3RvciIsIlBhcmFtZXRlckZ1bmN0b3JNaXhpbnMiLCJGdW5jdG9yQ2xhc3MiLCJpc1BhcmFtZXRlciIsImlmRWxzZSIsImlzIiwiYWxsIiwiTnVtYmVyIiwiYWx3YXlzIiwicGFyYW1ldGVyT2JqZWN0IiwiUmVzIiwic3ViT2JqZWN0Iiwia2V5IiwiT2JqZWN0IiwiQ2F1c2FsTmV0UnVubmVyIiwiUnVubmVyTWl4aW5zIiwiQmFzZVJ1bm5lckNsYXNzIiwiTmV0UGFyYW1ldGVycyIsIm5ldFBhcmFtZXRlcnMiLCJOZXRMYXllcnMiLCJuZXRMYXllcnMiLCJydW5MYXllciIsImxheWVyQ29uZmlndXJlIiwibGF5ZXJQYXJhbWV0ZXJzIiwicnVuIiwic2FtcGxlcyIsInBpcGVWYWx1ZSIsIlBpcGVJbnB1dCIsImxhc3RMYXllciIsImxheWVyIiwibGF5ZXJPdXRwdXQiLCJQcmVkaWN0b3IiLCJwcmVkaWN0TGF5ZXJzIiwiUHJlZGljdCIsIlBhcmFtZXRlcnNMZW5zZXMiLCJFbmNvZGVyIiwiZW5jb2RlTGF5ZXJzIiwiRW5jb2RlIiwiRGVjb2RlciIsImRlY29kZUxheWVycyIsIkRlY29kZSIsIkxheWVyUnVubmVyTWl4aW5zIiwiQmFzZVBpcGVsaW5lQ2xhc3MiLCJMYXllclJ1bm5lciIsIlBhcmFtZXRlckluaXRpYWxpemVyIiwicGFyYW1ldGVySW5pdGlhbGl6ZXIiLCJzZXRCeUNvbmZpZyIsInBpcGVsaW5lQ29uZmlnIiwiTG9nZ2VyIiwiZ3JvdXBCZWdpbiIsIkxheWVycyIsImdyb3VwRW5kIiwicnVubmVyIiwibGF5ZXJSdW5uZXIiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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ZXQvbGF5ZXIud2ViLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiY2F1c2FsLW5ldC5jb3JlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC5zdG9yYWdlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC51dGlsc1wiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJjYXVzYWwtbmV0LmNvcmVcIiwgXCJjYXVzYWwtbmV0LnN0b3JhZ2VcIiwgXCJjYXVzYWwtbmV0LnV0aWxzXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkBjYXVzYWxOZXQvbGF5ZXJcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJjYXVzYWwtbmV0LmNvcmVcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnN0b3JhZ2VcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnV0aWxzXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJAY2F1c2FsTmV0L2xheWVyXCJdID0gZmFjdG9yeShyb290W1wiY2F1c2FsLW5ldC5jb3JlXCJdLCByb290W1wiY2F1c2FsLW5ldC5zdG9yYWdlXCJdLCByb290W1wiY2F1c2FsLW5ldC51dGlsc1wiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfY29yZV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfc3RvcmFnZV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfdXRpbHNfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2RlZmluZVByb3BlcnR5OyIsInZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoXCIuL2RlZmluZVByb3BlcnR5XCIpO1xuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9O1xuICAgIHZhciBvd25LZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcblxuICAgIGlmICh0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgb3duS2V5cyA9IG93bktleXMuY29uY2F0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKS5maWx0ZXIoZnVuY3Rpb24gKHN5bSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIHN5bSkuZW51bWVyYWJsZTtcbiAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBvd25LZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX29iamVjdFNwcmVhZDsiLCJpbXBvcnQgeyBUZW5zb3IgYXMgQmFzZVRlbnNvciB9IGZyb20gJ2NhdXNhbC1uZXQuY29yZSc7XG5pbXBvcnQgeyBwbGF0Zm9ybSB9IGZyb20gJ2NhdXNhbC1uZXQudXRpbHMnO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBEZW5zZU1peGlucyB9IGZyb20gJy4vZGVuc2UubWl4aW5zJztcbmltcG9ydCB7IGRlZmF1bHQgYXMgQ29udm9sdXRpb25hbE1peGlucyB9IGZyb20gJy4vY29udm9sdXRpb24ubWl4aW5zJztcbmltcG9ydCB7IGRlZmF1bHQgYXMgUmVjdXJyZW50TWl4aW5zIH0gZnJvbSAnLi9yZWN1cnJlbnQubWl4aW5zJztcbi8qKlxuICogVGhpcyBjbGFzcyBwcm92aWRlcyBjb21tb24gdXNlZCBsYXllcnMgd2hpY2ggY2FuIGJlIGFjY2Vzc2VkIHZpYSAqKmNhdXNhbE5ldExheWVycyoqIGluc3RhbmNlLlxuICogeyBtaXhXaXRoOiBbIExheWVyTWl4aW5zLCBEZW5zZU1peGlucyBdIH1cbiAqIEBjbGFzcyBDYXVzYWxOZXRMYXllcnNcbiAqIEBleHRlbmRzIEJhc2VUZW5zb3JcbiAqIEBleGFtcGxlXG4gKiBbRVhBTVBMRSAuLi9leGFtcGxlcy9kZW5zZS5sYXllci5qc11cbiAqL1xuY2xhc3MgQ2F1c2FsTmV0TGF5ZXJzIGV4dGVuZHMgcGxhdGZvcm0ubWl4V2l0aChCYXNlVGVuc29yLCBcbiAgICBbIERlbnNlTWl4aW5zLCBDb252b2x1dGlvbmFsTWl4aW5zLCBSZWN1cnJlbnRNaXhpbnMgXSApe1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubGF5ZXJOYW1lcyA9IFtdO1xuICAgIH1cbiAgICBuYW1lR2VuZXJhdG9yKGxheWVyVHlwZSl7XG4gICAgICAgIGNvbnN0IGxheWVySWR4ID0gdGhpcy5sYXllck5hbWVzLmxlbmd0aDsgXG4gICAgICAgIGxldCBuZXdOYW1lID0gbGF5ZXJUeXBlICsgJy8nICsgbGF5ZXJJZHg7XG4gICAgICAgIHRoaXMubGF5ZXJOYW1lcy5wdXNoKG5ld05hbWUpO1xuICAgICAgICByZXR1cm4gbmV3TmFtZTtcbiAgICB9XG5cbiAgICBjaGVja05hbWUobmFtZSwgbGF5ZXJUeXBlKXtcbiAgICAgICAgaWYoIW5hbWUpe1xuICAgICAgICAgICAgbmFtZSA9IHRoaXMubmFtZUdlbmVyYXRvcihsYXllclR5cGUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICBpZih0aGlzLmxheWVyTmFtZXMuaW5kZXhPZihuYW1lKT4tMSl7XG4gICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoYCR7bmFtZX0gaXMgZXhpc3RlZGApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICB0aGlzLmxheWVyTmFtZXMucHVzaChuYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmFtZTtcbiAgICB9XG5cbiAgICBjdXN0b20oe05ldCwgUGFyYW1ldGVycz17fSwgbmFtZT1udWxsfSl7XG4gICAgICAgIG5hbWUgPSB0aGlzLmNoZWNrTmFtZShuYW1lLCAnY3VzdG9tJyk7XG4gICAgICAgIHJldHVybiB7IE5hbWU6IG5hbWUsIFR5cGU6ICdMYXllcicsIENvbmZpZzoge25hbWV9LCBQYXJhbWV0ZXJzLCBOZXQgfTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBDYXVzYWxOZXRMYXllcnMoKTsiLCJjb25zdCBDb252b2x1dGlvbk1peGlucyA9IChQaXBlbGluZUNsYXNzKT0+IGNsYXNzIGV4dGVuZHMgUGlwZWxpbmVDbGFzc3tcbiAgICAvKipcbiAgICAgKiBDb252b2x1dGlvbmFsIGxheWVyXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGlucHV0U2l6ZSAtIHNpemUgb2YgbmV0IGlucHV0XG4gICAgICogQHBhcmFtIHtBcnJheX0ga2VybmVsU2l6ZSAtIHNpemUgb2YgbmV0IG91dHB1dFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfEZ1bmN0aW9ufSBhY3RpdmF0b3IgLSBhY3RpdmF0b3IgZnVuY3Rpb24gY2FuIGJlIGN1c3RvbWVkIG9yIGdldCBmcm9tIGJ1aWx0LWluIGJ5IHN0cmluZyBuYW1lXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgLSBsYXllciBuYW1lLCBkZWZhdWx0IGJ5IG51bGxcbiAgICAgKiBAcmV0dXJucyB7IE9iamVjdCB9IGxheWVyXG4gICAgICovXG4gICAgY29udm9sdXRpb24oeyBrZXJuZWxTaXplLCBmaWx0ZXJzLCBcbiAgICAgICAgICAgICAgICAgIHN0cmlkZXM9MSwgcGFkZGluZz0nc2FtZScsXG4gICAgICAgICAgICAgICAgICBkaWxhdGlvbnM9WzEsMV0sIGZsYXR0ZW49ZmFsc2UsIFxuICAgICAgICAgICAgICAgICAgYWN0aXZhdG9yPSdzaWdtb2lkJywgbmFtZT1udWxsfSl7XG4gICAgICAgIGlmKCFuYW1lKXtcbiAgICAgICAgICAgIG5hbWUgPSB0aGlzLm5hbWVHZW5lcmF0b3IoJ2NvbnZvbHV0aW9uJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgRkNvbnYgPSB0aGlzLlQuY29udjJkO1xuICAgICAgICBjb25zdCBzaGFwZVR5cGUgPSAnTkhXQyc7XG4gICAgICAgIHJldHVybiB7IFxuICAgICAgICAgICAgTmFtZTogbmFtZSwgVHlwZTogJ0xheWVyJyxcbiAgICAgICAgICAgIENvbmZpZzoge2tlcm5lbFNpemUsIGZpbHRlcnMsIHN0cmlkZXMsIHBhZGRpbmcsIGRpbGF0aW9ucywgZmxhdHRlbiwgYWN0aXZhdG9yLCBuYW1lLCBzaGFwZVR5cGV9LFxuICAgICAgICAgICAgUGFyYW1ldGVyczogeyBLZXJuZWw6IFsuLi5rZXJuZWxTaXplLCAuLi5maWx0ZXJzXSB9LFxuICAgICAgICAgICAgTmV0OiAodmFsdWUsIHBhcmFtcywgY29udGV4dHMpPT57XG4gICAgICAgICAgICAgICAgICAgIGxldCB7IEtlcm5lbCB9ID0gcGFyYW1zO1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gRkNvbnYodmFsdWUsIEtlcm5lbCwgc3RyaWRlcywgcGFkZGluZywgc2hhcGVUeXBlLCBkaWxhdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgICBpZih0eXBlb2YgYWN0aXZhdG9yID09PSBcInN0cmluZ1wiKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdFthY3RpdmF0b3JdKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IGFjdGl2YXRvcihyZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICB9ICBcbiAgICAgICAgICAgICAgICAgICAgaWYoZmxhdHRlbil7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB7IGJhdGNoU2l6ZSB9ID0gY29udGV4dHM7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSByZXN1bHQucmVzaGFwZShbYmF0Y2hTaXplLCAtMV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgQ29udm9sdXRpb25NaXhpbnM7IiwiY29uc3QgRGVuc2VMYXllck1peGlucyA9IChQaXBlbGluZUNsYXNzKT0+IGNsYXNzIGV4dGVuZHMgUGlwZWxpbmVDbGFzc3tcbiAgICAvKipcbiAgICAgKiBTaW1wbGUgZGVuc2UgbGF5ZXJcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gaW5wdXRTaXplIC0gc2l6ZSBvZiBuZXQgaW5wdXRcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gb3V0cHV0U2l6ZSAtIHNpemUgb2YgbmV0IG91dHB1dFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfEZ1bmN0aW9ufSBhY3RpdmF0b3IgLSBhY3RpdmF0b3IgZnVuY3Rpb24gY2FuIGJlIGN1c3RvbWVkIG9yIGdldCBmcm9tIGJ1aWx0LWluIGJ5IHN0cmluZyBuYW1lXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgLSBsYXllciBuYW1lLCBkZWZhdWx0IGJ5IG51bGxcbiAgICAgKiBAcmV0dXJucyB7IE9iamVjdCB9IGxheWVyXG4gICAgICovXG4gICAgZGVuc2Uoe2lucHV0U2l6ZSwgb3V0cHV0U2l6ZSwgYWN0aXZhdG9yPSdzaWdtb2lkJywgbmFtZT1udWxsfSl7XG4gICAgICAgIGlmKCFuYW1lKXtcbiAgICAgICAgICAgIG5hbWUgPSB0aGlzLm5hbWVHZW5lcmF0b3IoJ2RlbnNlJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgXG4gICAgICAgICAgICBOYW1lOiBuYW1lLCBUeXBlOiAnTGF5ZXInLFxuICAgICAgICAgICAgQ29uZmlnOiB7aW5wdXRTaXplLCBvdXRwdXRTaXplLCBhY3RpdmF0b3IsIG5hbWV9LFxuICAgICAgICAgICAgUGFyYW1ldGVyczogeyBXZWlnaHQ6IFtpbnB1dFNpemUsIG91dHB1dFNpemVdLCBCaWFzOiBbb3V0cHV0U2l6ZV0gfSxcbiAgICAgICAgICAgIE5ldDogKHZhbHVlLCBwYXJhbXMsIGNvbnRleHRzKT0+e1xuICAgICAgICAgICAgICAgICAgICBsZXQge1dlaWdodCwgQmlhc30gPSBwYXJhbXM7XG4gICAgICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSB2YWx1ZS5kb3QoV2VpZ2h0KS5hZGQoQmlhcyk7XG4gICAgICAgICAgICAgICAgICAgIGlmKGFjdGl2YXRvciA9PT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZih0eXBlb2YgYWN0aXZhdG9yID09PSBcInN0cmluZ1wiKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0W2FjdGl2YXRvcl0oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFjdGl2YXRvcihyZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSAgIFxuICAgICAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IERlbnNlTGF5ZXJNaXhpbnM7IiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBjYXVzYWxOZXRMYXllcnMgfSBmcm9tICcuL2NhdXNhbE5ldExheWVycyc7IiwiY29uc3QgUmVjdXJyZW50TWl4aW5zID0gKFBpcGVsaW5lQ2xhc3MpPT4gY2xhc3MgZXh0ZW5kcyBQaXBlbGluZUNsYXNze1xuICAgIC8qKlxuICAgICAqIENvbnZvbHV0aW9uYWwgbGF5ZXJcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gaW5wdXRTaXplIC0gc2l6ZSBvZiBuZXQgaW5wdXRcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBrZXJuZWxTaXplIC0gc2l6ZSBvZiBuZXQgb3V0cHV0XG4gICAgICogQHBhcmFtIHtTdHJpbmd8RnVuY3Rpb259IGFjdGl2YXRvciAtIGFjdGl2YXRvciBmdW5jdGlvbiBjYW4gYmUgY3VzdG9tZWQgb3IgZ2V0IGZyb20gYnVpbHQtaW4gYnkgc3RyaW5nIG5hbWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZSAtIGxheWVyIG5hbWUsIGRlZmF1bHQgYnkgbnVsbFxuICAgICAqIEByZXR1cm5zIHsgT2JqZWN0IH0gbGF5ZXJcbiAgICAgKi9cbiAgICBzZXEydmVjKHsgaW5wdXRTaXplLCBlbmNvZGVTaXplLCBwYWQ9MCwgYXR0ZW50aW9uID0gZmFsc2UsIG5hbWU9bnVsbCB9KXtcbiAgICAgICAgbmFtZSA9IHRoaXMuY2hlY2tOYW1lKG5hbWUsICdzZXEydmVjJyk7XG4gICAgICAgIGNvbnN0IFJOTkNlbGwgPSB0aGlzLlQuYmFzaWNMU1RNQ2VsbDtcbiAgICAgICAgY29uc3QgSW5pdFN0YXRlID0gKGJhdGNoU2l6ZSwgdmVjU2l6ZSk9PihbIHRoaXMuVC56ZXJvcyhbYmF0Y2hTaXplLCB2ZWNTaXplXSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ULnplcm9zKFtiYXRjaFNpemUsIHZlY1NpemVdKSBdKTtcbiAgICAgICAgbGV0IGF0dGVudGlvblBhcmFtcyA9IChhdHRlbnRpb24pP1xuICAgICAgICAgICAgIHsgQXR0V2VpZ2h0OltlbmNvZGVTaXplLCAxXSwgQXR0QmlhczogWzFdIH1cbiAgICAgICAgICAgICA6e307XG4gICAgICAgIHJldHVybiB7IFxuICAgICAgICAgICAgTmFtZTogbmFtZSwgVHlwZTogJ0xheWVyJyxcbiAgICAgICAgICAgIENvbmZpZzoge2lucHV0U2l6ZSwgZW5jb2RlU2l6ZSwgcGFkLCBuYW1lIH0sXG4gICAgICAgICAgICBQYXJhbWV0ZXJzOiB7IExTVE1LZXJuZWw6IFtlbmNvZGVTaXplICsgaW5wdXRTaXplLCBlbmNvZGVTaXplKjRdLCBMU1RNQmlhczogW2VuY29kZVNpemUqNF0sIFxuICAgICAgICAgICAgICAgICAgICAuLi5hdHRlbnRpb25QYXJhbXMgIH0sXG4gICAgICAgICAgICBOZXQ6ICh2YWx1ZSwgcGFyYW1zLCBjb250ZXh0cyk9PntcbiAgICAgICAgICAgICAgICAgICAgbGV0IHsgYmF0Y2hTaXplLCBzZXFMZW4gfSA9IGNvbnRleHRzO1xuICAgICAgICAgICAgICAgICAgICBpZighKGJhdGNoU2l6ZSA+IDAgJiYgc2VxTGVuID4gMCkpe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoYGV4cGVjdCB7IGJhdGNoU2l6ZSwgc2VxTGVuIH0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aXZlIG51bWJlcnMgZ2V0ICR7SlNPTi5zdHJpbmdpZnkoY29udGV4dHMpfWApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGxldCB7IExTVE1LZXJuZWwsIExTVE1CaWFzLCBBdHRXZWlnaHQ9bnVsbCwgQXR0Qmlhcz1udWxsIH0gPSBwYXJhbXM7XG4gICAgICAgICAgICAgICAgICAgIGxldCBbIGgsIGMgXSA9IEluaXRTdGF0ZShiYXRjaFNpemUsIGVuY29kZVNpemUpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgaGlkZGVucyA9IFtdLCBwcmV2X2ggPSBudWxsLCBwcmV2X2MgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGlkeD0wOyBpZHggPCBzZXFMZW47IGlkeCsrKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0b2tlbiA9IHZhbHVlLmdhdGhlcihpZHgsIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJldl9oID0gaDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXZfYyA9IGM7XG4gICAgICAgICAgICAgICAgICAgICAgICBbIGgsIGMgXSA9IFJOTkNlbGwoMC41LCBMU1RNS2VybmVsLCBMU1RNQmlhcywgdG9rZW4sIGgsIGMgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGggPSBoLm11bChtYXNrKS5hZGQocHJldl9oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGMgPSBjLm11bChtYXNrKS5hZGQocHJldl9jLm11bCh0aGlzLlQuKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBoaWRkZW5zLnB1c2goaCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYoQXR0V2VpZ2h0ICYmIEF0dEJpYXMpe1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGF0dFZlY3MgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaCBvZiBoaWRkZW5zKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRWZWNzLnB1c2goaC5tYXRNdWwoQXR0V2VpZ2h0KS5hZGQoQXR0QmlhcykuZXhwKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGF0dFZlY1N1bSA9IHRoaXMuVC5jb25jYXQoYXR0VmVjcywxKS5zdW0oMSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaWR4ID0gMCwgYXR0SCA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGggb2YgaGlkZGVucyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoaWR4PT09MCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dEggPSBoLm11bChhdHRWZWNzW2lkeF0uZGl2KGF0dFZlY1N1bSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRIID0gYXR0SC5hZGQoaC5tdWwoYXR0VmVjc1tpZHhdLmRpdihhdHRWZWNTdW0pKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkeCArPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGF0dEg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICB9XG4gICAgXG4gICAgdmVjMnNlcSh7IGVuY29kZVNpemUsIG91dHB1dFNpemUsIHBhZD0wLCBuYW1lPW51bGwgfSl7XG4gICAgICAgIG5hbWUgPSB0aGlzLmNoZWNrTmFtZShuYW1lLCAnc2VxMnZlYycpO1xuICAgICAgICBjb25zdCBSTk5DZWxsID0gdGhpcy5ULmJhc2ljTFNUTUNlbGw7XG4gICAgICAgIGNvbnN0IEluaXRTdGF0ZSA9IChiYXRjaFNpemUsIHZlY1NpemUpPT4oWyB0aGlzLlQuemVyb3MoW2JhdGNoU2l6ZSwgdmVjU2l6ZV0pLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuVC56ZXJvcyhbYmF0Y2hTaXplLCB2ZWNTaXplXSkgXSk7XG4gICAgICAgIHJldHVybiB7IFxuICAgICAgICAgICAgTmFtZTogbmFtZSwgVHlwZTogJ0xheWVyJyxcbiAgICAgICAgICAgIENvbmZpZzoge3dvcmRWZWNTaXplLCBlbmNvZGVTaXplLCBwYWQsIG5hbWUgfSxcbiAgICAgICAgICAgIFBhcmFtZXRlcnM6IHsgTFNUTUtlcm5lbDogW2VuY29kZVNpemUgKyB3b3JkVmVjU2l6ZSwgZW5jb2RlU2l6ZSo0XSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgIExTVE1CaWFzOiBbZW5jb2RlU2l6ZSo0XSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgIE91dHB1dFdlaWdodDogW2VuY29kZVNpemUsIG91dHB1dFNpemVdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBPdXRwdXRCaWFzOiBbb3V0cHV0U2l6ZV0gIH0sXG4gICAgICAgICAgICBOZXQ6ICh2YWx1ZSwgcGFyYW1zLCBjb250ZXh0cyk9PntcbiAgICAgICAgICAgICAgICAgICAgbGV0IHsgYmF0Y2hTaXplLCBzZXFMZW4sIGlzVHJhaW5pbmcgfSA9IGNvbnRleHRzO1xuICAgICAgICAgICAgICAgICAgICBpZihpc1RyYWluaW5nKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IEVycm9yKGBleHBlY3QgeyBpc1RyYWluaW5nIH0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGEgYm9vbGVhbiBnZXQgJHtKU09OLnN0cmluZ2lmeShjb250ZXh0cyl9YCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYoIShiYXRjaFNpemUgPiAwICYmIHNlcUxlbiA+IDApKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IEVycm9yKGBleHBlY3QgeyBiYXRjaFNpemUsIHNlcUxlbiB9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGl2ZSBudW1iZXJzIGdldCAke0pTT04uc3RyaW5naWZ5KGNvbnRleHRzKX1gKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBsZXQgeyBMU1RNS2VybmVsLCBMU1RNQmlhcywgT3V0cHV0V2VpZ2h0LCBPdXRwdXRCaWFzIH0gPSBwYXJhbXM7XG4gICAgICAgICAgICAgICAgICAgIGxldCBbIGgsIGMgXSA9IEluaXRTdGF0ZShiYXRjaFNpemUsIGVuY29kZVNpemUpO1xuICAgICAgICAgICAgICAgICAgICBpZiggaXNUcmFpbmluZyApe1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBpZHg9MDsgaWR4IDwgc2VxTGVuOyBpZHgrKyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRva2VuID0gdmFsdWUuZ2F0aGVyKGlkeCwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgWyBoLCBjIF0gPSBSTk5DZWxsKDEsIExTVE1LZXJuZWwsIExTVE1CaWFzLCB0b2tlbiwgaCwgYyApOyAgXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBpZHg9MDsgaWR4IDwgc2VxTGVuOyBpZHgrKyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRva2VuID0gdmFsdWUuZ2F0aGVyKGlkeCwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgWyBoLCBjIF0gPSBSTk5DZWxsKDEsIExTVE1LZXJuZWwsIExTVE1CaWFzLCB0b2tlbiwgaCwgYyApOyAgXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IFJlY3VycmVudE1peGluczsiLCJpbXBvcnQgeyBUZW5zb3IgYXMgQmFzZVRlbnNvciB9IGZyb20gJ2NhdXNhbC1uZXQuY29yZSc7XG5pbXBvcnQgeyBwbGF0Zm9ybSB9IGZyb20gJ2NhdXNhbC1uZXQudXRpbHMnO1xuaW1wb3J0IHsgU3RvcmFnZU1peGlucywgaW5kZXhEQlN0b3JhZ2UgfSBmcm9tICdjYXVzYWwtbmV0LnN0b3JhZ2UnO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBQYXJhbWV0ZXJNaXhpbnMgfSBmcm9tICcuL3BhcmFtZXRlci5taXhpbnMnO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBwYXJhbWV0ZXJmdW5jdG9yIH0gZnJvbSAnLi9wYXJhbWV0ZXJGdW5jdG9yJztcbi8qKlxuICogVGhpcyBjbGFzcyBpcyBhIHN0YW5kYXJkIGltcGxlbWVudGF0aW9uIGZvciBtb2RlbCBwYXJhbWV0ZXJzIHdoaWNoIGNhbiBiZSBhY2Nlc3NlZCB2aWEgKipjYXVzYWxOZXRQYXJhbWV0ZXJzKiogaW5zdGFuY2VcbiAqIHsgbWl4V2l0aDogW1N0b3JhZ2VNaXhpbnMsIFBhcmFtZXRlck1peGluc10gfVxuICogQGNsYXNzIENhdXNhbE5ldFBhcmFtZXRlcnNcbiAqIEBleHRlbmRzIEJhc2VUZW5zb3JcbiAqIEBleGFtcGxlXG4gKiBbRVhBTVBMRSAuLi9leGFtcGxlL3BhcmFtZXRlcnMuYmFiZWwuanNdXG4gKi9cbmNsYXNzIENhdXNhbE5ldFBhcmFtZXRlcnMgZXh0ZW5kcyBwbGF0Zm9ybS5taXhXaXRoKEJhc2VUZW5zb3IsIFtTdG9yYWdlTWl4aW5zLCBQYXJhbWV0ZXJNaXhpbnNdICl7XG4gICAgY29uc3RydWN0b3Ioc3RvcmFnZSwgcGFyYW1ldGVyZnVuY3Rvcil7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMucGFyYW1ldGVycyA9IG51bGw7XG4gICAgICAgIHRoaXMuU3RvcmFnZSA9IHN0b3JhZ2U7XG4gICAgICAgIHRoaXMuRiA9IHBhcmFtZXRlcmZ1bmN0b3I7XG4gICAgICAgIHRoaXMuUiA9IHRoaXMuRi5Db3JlRnVuY3RvcjtcbiAgICB9XG59ICAgXG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBDYXVzYWxOZXRQYXJhbWV0ZXJzKGluZGV4REJTdG9yYWdlLCBwYXJhbWV0ZXJmdW5jdG9yKTsiLCJleHBvcnQgeyBkZWZhdWx0IGFzIGNhdXNhbE5ldFBhcmFtZXRlcnMgfSBmcm9tICcuL2NhdXNhbE5ldFBhcmFtZXRlcnMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBQYXJhbWV0ZXJNaXhpbnMgfSBmcm9tICcuL3BhcmFtZXRlci5taXhpbnMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBQYXJhbWV0ZXJGdW5jdG9yTWl4aW5zIH0gZnJvbSAnLi9wYXJhbWV0ZXJGdW5jdG9yLm1peGlucyc7IiwiY29uc3QgUGFyYW1ldGVyTWl4aW5zID0gKEJhc2VQYXJhbWV0ZXJDbGFzcyk9PiBjbGFzcyBleHRlbmRzIEJhc2VQYXJhbWV0ZXJDbGFzc3sgXG4gICAgXG4gICAgXG4gICAgXG4gICAgZ2V0IFBhcmFtZXRlcnMoKXtcbiAgICAgICAgaWYoIXRoaXMucGFyYW1ldGVycyl7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcigncGFyYW1ldGVycyBpcyBub3Qgc2V0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucGFyYW1ldGVycztcbiAgICB9XG4gICAgXG4gICAgc2V0IFBhcmFtZXRlcnMocGFyYW1ldGVycyl7XG4gICAgICAgIHRoaXMucGFyYW1ldGVycyA9IHBhcmFtZXRlcnM7XG4gICAgfVxuXG4gICAgc2V0IFBhcmFtZXRlclNpemVzKHBhcmFtZXRlclNpemVzKXtcbiAgICAgICAgdGhpcy5wYXJhbWV0ZXJTaXplcyA9IHBhcmFtZXRlclNpemVzO1xuICAgIH1cblxuICAgIGdldCBQYXJhbWV0ZXJTaXplcygpe1xuICAgICAgICBpZighdGhpcy5wYXJhbWV0ZXJTaXplcyl7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcigncGFyYW1ldGVyU2l6ZXMgaXMgbm90IHNldCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnBhcmFtZXRlclNpemVzO1xuICAgIH1cbiAgICBcbiAgICBnZXQgU2F2ZU1vZGVsRGlyKCl7XG4gICAgICAgIHJldHVybiAnc2F2ZU1vZGVsLyc7XG4gICAgfVxuICAgIFxuICAgIGV4cG9ydFBhcmFtZXRlcnMoKXtcbiAgICAgICAgaWYoIXRoaXMucGFyYW1ldGVycyl7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcigncGFyYW1ldGVyIGlzIG5vdCBzZXQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKGFzeW5jICgpPT57XG4gICAgICAgICAgICBjb25zdCBGbiA9IGFzeW5jIChwYXJhbSk9PihBcnJheS5mcm9tKGF3YWl0IHBhcmFtLmRhdGEoKSkpO1xuICAgICAgICAgICAgbGV0IHBhcmFtcyA9IGF3YWl0IHRoaXMuZXh0cmFjdFBhcmFtRnJvbVRlbnNvckRpY3QodGhpcy5wYXJhbWV0ZXJzLCBGbik7XG4gICAgICAgICAgICByZXR1cm4gcGFyYW1zO1xuICAgICAgICB9KSgpO1xuICAgIH1cblxuICAgIFxuICAgIGFzeW5jIGV4dHJhY3RQYXJhbUZyb21UZW5zb3JEaWN0KHBhcmFtcywgZm4pe1xuICAgICAgICBjb25zdCBSID0gdGhpcy5SO1xuICAgICAgICBjb25zdCBUcmF2ZWxsZXIgPSBhc3luYyAocGFyYW1zLCBmbik9PntcbiAgICAgICAgICAgIGlmKHRoaXMuaXNUZW5zb3IocGFyYW1zKSl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGZuKHBhcmFtcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIGxldCBrVmFscyA9IFIudG9QYWlycyhwYXJhbXMpO1xuICAgICAgICAgICAgICAgIGxldCByZXMgPSB7fTtcbiAgICAgICAgICAgICAgICBmb3IobGV0IFtrLCB2YWxdIG9mIGtWYWxzKXtcbiAgICAgICAgICAgICAgICAgICAgcmVzW2tdID0gYXdhaXQgVHJhdmVsbGVyKHZhbCwgZm4pOyBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIGF3YWl0IFRyYXZlbGxlcihwYXJhbXMsIGZuKTtcbiAgICB9XG4gICAgXG4gICAgYXN5bmMgcGFyYW1ldGVyc1N1bW1hcnkoKXtcbiAgICAgICAgaWYoIXRoaXMucGFyYW1ldGVycyl7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcigncGFyYW1ldGVyIG11c3QgYmUgc2V0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgRm4gPSBhc3luYyAocGFyYW0pPT5BcnJheS5mcm9tKGF3YWl0IHBhcmFtLm1lYW4oKS5kYXRhKCkpO1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5leHRyYWN0UGFyYW1Gcm9tVGVuc29yRGljdCh0aGlzLnBhcmFtZXRlcnMsIEZuKTtcbiAgICB9XG4gICAgXG4gICAgaW5pdFBhcmFtU2l6ZXNCeUxheWVycyhsYXllcnMpe1xuICAgICAgICBjb25zdCB7IGNvbXBvc2UsIGZyb21QYWlycywgbWFwLCB2YWx1ZXMsIGNvbmNhdCwgcmVkdWNlIH0gPSB0aGlzLlI7XG4gICAgICAgIGNvbnN0IEdldFBhcmFtU2l6ZSA9IGNvbXBvc2UoZnJvbVBhaXJzLCBtYXAocD0+W3AuTmFtZSwgcC5QYXJhbWV0ZXJzXSkpO1xuICAgICAgICBsZXQgZmxhdHRlbkxheWVycyA9IGNvbXBvc2UocmVkdWNlKChzLHYpPT5jb25jYXQocyx2KSxbXSksIHZhbHVlcykobGF5ZXJzKTtcbiAgICAgICAgdGhpcy5QYXJhbWV0ZXJTaXplcyA9IEdldFBhcmFtU2l6ZShmbGF0dGVuTGF5ZXJzKTtcbiAgICB9XG5cbiAgICBpbXBvcnRQYXJhbWV0ZXJzKHBhcmFtT2JqZWN0KXtcbiAgICAgICAgY29uc3QgVCA9IHRoaXMuVCwgRiA9IHRoaXMuRjtcbiAgICAgICAgY29uc3QgU2V0T3JJbml0ID0gKCBpbml0UHJlZGljdCwgcGFyYW1PYmplY3QgKT0+e1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gRi5wYXJhbWV0ZXJNYXBXaXRoS2V5KChrZXlzLCBwYXJhbVNpemUpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcGFyYW1WYWx1ZSA9IHRoaXMuRi5nZXRJbihrZXlzLCBwYXJhbU9iamVjdCwgbnVsbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihwYXJhbVZhbHVlID09PSBudWxsKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gVC52YXJpYWJsZShULnJhbmRvbU5vcm1hbChwYXJhbVNpemUpLmFzVHlwZSgnZmxvYXQzMicpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFQudmFyaWFibGUoVC50ZW5zb3IocGFyYW1WYWx1ZSwgcGFyYW1TaXplLCAnZmxvYXQzMicpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfSwgaW5pdFByZWRpY3QpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgIHRoaXMuUGFyYW1ldGVycyA9IFNldE9ySW5pdCggdGhpcy5QYXJhbWV0ZXJTaXplcywgcGFyYW1PYmplY3QgKTtcbiAgICB9XG5cbiAgICBJbml0UGFyYW1ldGVycyhwYXJhbU9iamVjdD17fSl7XG4gICAgICAgIHJldHVybiAobGF5ZXJzKT0+e1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2V0T3JJbml0UGFyYW1zKGxheWVycywgcGFyYW1PYmplY3QpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIHNldE9ySW5pdFBhcmFtcyhsYXllcnMsIHBhcmFtT2JqZWN0KXtcbiAgICAgICAgdGhpcy5pbml0UGFyYW1TaXplc0J5TGF5ZXJzKGxheWVycyk7XG4gICAgICAgIHRoaXMuaW1wb3J0UGFyYW1ldGVycyhwYXJhbU9iamVjdCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGFzeW5jIGdldFNhdmVkUGFyYW1MaXN0KCl7XG4gICAgICAgIGNvbnN0IFN0b3JhZ2UgPSB0aGlzLlN0b3JhZ2UsIFNhdmVEaXIgPSB0aGlzLlNhdmVNb2RlbERpcjtcbiAgICAgICAgbGV0IGZpbGVMaXN0ID0gYXdhaXQgU3RvcmFnZS5nZXRGaWxlTGlzdChTYXZlRGlyKTtcbiAgICAgICAgcmV0dXJuIGZpbGVMaXN0Lm1hcChmaWxlTmFtZT0+ZmlsZU5hbWUucmVwbGFjZShTYXZlRGlyLCcnKSk7XG4gICAgfVxuXG4gICAgYXN5bmMgc2F2ZVBhcmFtcyhmaWxlTmFtZSl7XG4gICAgICAgIGNvbnN0IFNhdmVEaXIgPSB0aGlzLlNhdmVNb2RlbERpcjtcbiAgICAgICAgY29uc3QgU3RvcmFnZSA9IHRoaXMuU3RvcmFnZTtcbiAgICAgICAgbGV0IHBhcmFtcyA9IGF3YWl0IHRoaXMuZXhwb3J0UGFyYW1ldGVycygpO1xuICAgICAgICBhd2FpdCBTdG9yYWdlLndyaXRlRmlsZShTYXZlRGlyICsgZmlsZU5hbWUsIEpTT04uc3RyaW5naWZ5KHBhcmFtcykpO1xuICAgICAgICByZXR1cm4gcGFyYW1zO1xuICAgIH1cbiAgICBhc3luYyBsb2FkUGFyYW1zKGZpbGVOYW1lKXtcbiAgICAgICAgY29uc3QgU3RvcmFnZSA9IHRoaXMuU3RvcmFnZSwgU2F2ZURpciA9IHRoaXMuU2F2ZU1vZGVsRGlyO1xuICAgICAgICBsZXQgc3RyUGFyYW1zID0gYXdhaXQgU3RvcmFnZS5yZWFkRmlsZShTYXZlRGlyK2ZpbGVOYW1lKTtcbiAgICAgICAgbGV0IHBhcmFtcyA9IEpTT04ucGFyc2Uoc3RyUGFyYW1zKTtcbiAgICAgICAgdGhpcy5pbXBvcnRQYXJhbWV0ZXJzKHBhcmFtcyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBhcmFtZXRlck1peGluczsiLCJpbXBvcnQge0Z1bmN0b3IgYXMgQmFzZUZ1bmN0b3J9IGZyb20gJ2NhdXNhbC1uZXQuY29yZSc7XG5pbXBvcnQge3BsYXRmb3JtfSBmcm9tICdjYXVzYWwtbmV0LnV0aWxzJztcbmltcG9ydCB7ZGVmYXVsdCBhcyBQYXJhbWV0ZXJGdW5jdG9yTWl4aW5zIH0gZnJvbSAnLi9wYXJhbWV0ZXJGdW5jdG9yLm1peGlucyc7XG5cbmNsYXNzIFBhcmFtZXRlckZ1bmN0b3IgZXh0ZW5kcyBwbGF0Zm9ybS5taXhXaXRoKEJhc2VGdW5jdG9yLCBbIFBhcmFtZXRlckZ1bmN0b3JNaXhpbnMgXSApe1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgUGFyYW1ldGVyRnVuY3RvcigpOyIsImNvbnN0IFBhcmFtZXRlckZ1bmN0b3JNaXhpbnMgPSAoRnVuY3RvckNsYXNzKT0+IGNsYXNzIGV4dGVuZHMgRnVuY3RvckNsYXNzeyBcbiAgICBpc1BhcmFtZXRlcih2YWwpe1xuICAgICAgICBjb25zdCBSID0gdGhpcy5SO1xuICAgICAgICByZXR1cm4gUi5pZkVsc2UoUi5pcyhBcnJheSksIFIuYWxsKFIuaXMoTnVtYmVyKSksIFIuYWx3YXlzKGZhbHNlKSkodmFsKTtcbiAgICB9XG4gICAgcGFyYW1ldGVyTWFwV2l0aEtleShmbiwgcGFyYW1ldGVyT2JqZWN0KXtcbiAgICAgICAgY29uc3QgUiA9IHRoaXMuUjtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IFJlcyA9IChrZXlzLCBzdWJPYmplY3QpID0+IFIuY29tcG9zZShSLmZyb21QYWlycywgXG4gICAgICAgICAgICAgICAgICAgICAgICBSLm1hcCgoW2tleSwgc3ViT2JqZWN0XSk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmlzUGFyYW1ldGVyKHN1Yk9iamVjdCkpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW2tleSwgZm4oWy4uLmtleXMsIGtleV0sIHN1Yk9iamVjdCldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihSLmlzKE9iamVjdCwgc3ViT2JqZWN0KSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW2tleSwgUmVzKFsuLi5rZXlzLCBrZXldLCBzdWJPYmplY3QpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtrZXksIHN1Yk9iamVjdF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSwgUi50b1BhaXJzKShzdWJPYmplY3QpO1xuICAgICAgICByZXR1cm4gUmVzKFtdLCBwYXJhbWV0ZXJPYmplY3QpO1xuICAgIH0gICAgICAgIFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFyYW1ldGVyRnVuY3Rvck1peGluczsiLCJpbXBvcnQgeyBUZW5zb3IgYXMgQmFzZVRlbnNvciB9IGZyb20gJ2NhdXNhbC1uZXQuY29yZSc7XG5pbXBvcnQgeyBwbGF0Zm9ybSB9IGZyb20gJ2NhdXNhbC1uZXQudXRpbHMnO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBSdW5uZXJNaXhpbnMgfSBmcm9tICcuL3J1bm5lci5taXhpbnMnO1xuLyoqXG4gKiBUaGlzIENhdXNhbE5ldFJ1bm5lciBjbGFzcyBwcm92aWRlIG5ldCBleGNlY3V0b3Igd2hpY2ggaXMgcHJvdmlkZWQgcGlwZWxpbmUgaW5zdGFuY2UgYXQgKipMYXllclJ1bm5lcioqIGF0dHJpYnV0ZS5cbiAqIHsgbWl4V2l0aDogWyBSdW5uZXJNaXhpbnMgXSB9XG4gKiBAY2xhc3MgQ2F1c2FsTmV0UnVubmVyXG4gKiBAZXh0ZW5kcyBCYXNlVGVuc29yXG4gKiBAZXhhbXBsZVxuICogW0VYQU1QTEUgLi4vZXhhbXBsZXMvcnVubmVyLm1peGlucy5iYWJlbC5qc11cbiAqL1xuY2xhc3MgQ2F1c2FsTmV0UnVubmVyIGV4dGVuZHMgcGxhdGZvcm0ubWl4V2l0aChCYXNlVGVuc29yLCBbIFJ1bm5lck1peGlucyBdICl7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBDYXVzYWxOZXRSdW5uZXIoKTsiLCJleHBvcnQgeyBkZWZhdWx0IGFzIGNhdXNhbE5ldFJ1bm5lciB9IGZyb20gJy4vY2F1c2FsTmV0UnVubmVyJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUnVubmVyTWl4aW5zIH0gZnJvbSAnLi9ydW5uZXIubWl4aW5zJzsiLCIvKipcbiAqIFRoaXMgUnVubmVyTWl4aW5zIGNsYXNzIHByb3ZpZGUgbWV0aG9kcyBmb3IgcnVubmVyIGNsYXNzLlxuICogQGNsYXNzIFJ1bm5lck1peGluc1xuICogQGV4dGVuZHMgQmFzZVJ1bm5lckNsYXNzXG4gKi9cbmNvbnN0IFJ1bm5lck1peGlucyA9ICggQmFzZVJ1bm5lckNsYXNzICk9PiBjbGFzcyBleHRlbmRzIEJhc2VSdW5uZXJDbGFzc3tcbiAgICBzZXQgTmV0UGFyYW1ldGVycyhwYXJhbWV0ZXJzKXtcbiAgICAgICAgdGhpcy5uZXRQYXJhbWV0ZXJzID0gcGFyYW1ldGVycztcbiAgICB9XG4gICAgc2V0IE5ldExheWVycyhuZXRMYXllcnMpe1xuICAgICAgICB0aGlzLm5ldExheWVycyA9IG5ldExheWVycztcbiAgICB9XG4gICAgZ2V0IE5ldFBhcmFtZXRlcnMoKXtcbiAgICAgICAgaWYoIXRoaXMubmV0UGFyYW1ldGVycyl7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignbmV0UGFyYW1ldGVycyBpcyBub3Qgc2V0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMubmV0UGFyYW1ldGVycy5QYXJhbWV0ZXJzO1xuICAgIH1cbiAgICBnZXQgTmV0TGF5ZXJzKCl7XG4gICAgICAgIGlmKCF0aGlzLm5ldExheWVycyl7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignbmV0TGF5ZXJzIGlzIG5vdCBzZXQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5uZXRMYXllcnM7XG4gICAgfVxuICAgIFxuXG4gICAgcnVuTGF5ZXIodmFsdWUsIGxheWVyQ29uZmlndXJlLCBsYXllclBhcmFtZXRlcnMsIGNvbnRleHRzKXtcbiAgICAgICAgY29uc3QgeyBOYW1lLCBUeXBlLCBOZXQgfSA9IGxheWVyQ29uZmlndXJlOyAgXG4gICAgICAgIGlmKFR5cGUgPT09ICdMYXllcicpe1xuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IE5ldCh2YWx1ZSwgbGF5ZXJQYXJhbWV0ZXJzLCBjb250ZXh0cyk7XG4gICAgICAgICAgICByZXR1cm4ge1tOYW1lXTogcmVzdWx0fTtcbiAgICAgICAgfSAgIFxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoYGV4cGVjdCB7VHlwZX0gdG8gYmUgJ0xheWVyJyBnZXQgJHtsYXllckNvbmZpZ3VyZX1gKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJ1bihsYXllcnMsIHNhbXBsZXMsIHBhcmFtZXRlcnMsIGNvbnRleHRzKXtcbiAgICAgICAgbGV0IHBpcGVWYWx1ZSA9IHtQaXBlSW5wdXQ6IHNhbXBsZXN9LCBsYXN0TGF5ZXIgPSAnUGlwZUlucHV0JztcbiAgICAgICAgZm9yKGxldCBsYXllciBvZiBsYXllcnMpe1xuICAgICAgICAgICAgbGV0IGxheWVyT3V0cHV0ID0gdGhpcy5ydW5MYXllcihwaXBlVmFsdWVbbGFzdExheWVyXSwgbGF5ZXIsIHBhcmFtZXRlcnNbbGF5ZXIuTmFtZV0sIGNvbnRleHRzKTtcbiAgICAgICAgICAgIHBpcGVWYWx1ZVtsYXllci5OYW1lXSA9IGxheWVyT3V0cHV0W2xheWVyLk5hbWVdO1xuICAgICAgICAgICAgbGFzdExheWVyID0gbGF5ZXIuTmFtZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGlwZVZhbHVlW2xhc3RMYXllcl07XG4gICAgfVxuXG4gICAgZ2V0IFByZWRpY3Rvcigpe1xuICAgICAgICBsZXQgcHJlZGljdExheWVycyA9IHRoaXMuTmV0TGF5ZXJzLlByZWRpY3Q7XG4gICAgICAgIGNvbnN0IFBhcmFtZXRlcnNMZW5zZXMgPSAoKT0+dGhpcy5OZXRQYXJhbWV0ZXJzO1xuICAgICAgICByZXR1cm4gKHNhbXBsZXMsIGNvbnRleHRzPXt9KT0+e1xuICAgICAgICAgICAgbGV0IHBhcmFtZXRlcnMgPSBQYXJhbWV0ZXJzTGVuc2VzKCk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ydW4ocHJlZGljdExheWVycywgc2FtcGxlcywgcGFyYW1ldGVycywgey4uLmNvbnRleHRzLCBsYXllcjogJ1ByZWRpY3QnfSk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIGdldCBFbmNvZGVyKCl7XG4gICAgICAgIGxldCBlbmNvZGVMYXllcnMgPSB0aGlzLk5ldExheWVycy5FbmNvZGU7XG4gICAgICAgIGNvbnN0IFBhcmFtZXRlcnNMZW5zZXMgPSAoKT0+dGhpcy5OZXRQYXJhbWV0ZXJzO1xuICAgICAgICByZXR1cm4gKHNhbXBsZXMsIGNvbnRleHRzPXt9KT0+e1xuICAgICAgICAgICAgbGV0IHBhcmFtZXRlcnMgPSBQYXJhbWV0ZXJzTGVuc2VzKCk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ydW4oZW5jb2RlTGF5ZXJzLCBzYW1wbGVzLCBwYXJhbWV0ZXJzLCB7Li4uY29udGV4dHMsIGxheWVyOiAnRW5jb2RlJ30pO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBnZXQgRGVjb2Rlcigpe1xuICAgICAgICBsZXQgZGVjb2RlTGF5ZXJzID0gdGhpcy5OZXRMYXllcnMuRGVjb2RlO1xuICAgICAgICBjb25zdCBQYXJhbWV0ZXJzTGVuc2VzID0gKCk9PnRoaXMuTmV0UGFyYW1ldGVycztcbiAgICAgICAgcmV0dXJuIChzYW1wbGVzLCBjb250ZXh0cz17fSk9PntcbiAgICAgICAgICAgIGxldCBwYXJhbWV0ZXJzID0gUGFyYW1ldGVyc0xlbnNlcygpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucnVuKGRlY29kZUxheWVycywgc2FtcGxlcywgcGFyYW1ldGVycywgey4uLmNvbnRleHRzLCBsYXllcjogJ0RlY29kZSd9KTtcbiAgICAgICAgfTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSdW5uZXJNaXhpbnM7XG4iLCJleHBvcnQgeyBjYXVzYWxOZXRMYXllcnMgfSBmcm9tICcuL0NhdXNhbE5ldExheWVycy9pbmRleCc7XG5leHBvcnQgeyBjYXVzYWxOZXRQYXJhbWV0ZXJzLCBQYXJhbWV0ZXJNaXhpbnMsIFBhcmFtZXRlckZ1bmN0b3JNaXhpbnMgfSBmcm9tICcuL0NhdXNhbE5ldFBhcmFtZXRlcnMvaW5kZXgnO1xuZXhwb3J0IHsgY2F1c2FsTmV0UnVubmVyLCBSdW5uZXJNaXhpbnMgfSBmcm9tICcuL0NhdXNhbE5ldFJ1bm5lci9pbmRleCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIExheWVyUnVubmVyTWl4aW5zIH0gZnJvbSAnLi9sYXllclJ1bm5lci5taXhpbnMnO1xuIiwiLyoqXG4gKiBUaGlzIG1peGluIGNsYXNzIHByb3ZpZGUgYXR0cmlidXRlczogKipQYXJhbWV0ZXJJbml0aWFsaXplcioqLCAqKkxheWVyUnVubmVyKiosIFxuICogYW5kIGhhbmRsZSAqKk5ldCoqIHNldHRpbmcgb2YgcGlwZWxpbmVDb25maWcgXG4gKiBAY2xhc3MgTGF5ZXJSdW5uZXJNaXhpbnNcbiAqIEBleHRlbmRzIEJhc2VQaXBlbGluZUNsYXNzXG4gKiBAZXhhbXBsZVxuICogW0VYQU1QTEUgLi4vZXhhbXBsZXMvbGF5ZXJSdW5uZXIubWl4aW5zLmJhYmVsLmpzXVxuICovXG5jb25zdCBMYXllclJ1bm5lck1peGlucyA9IChCYXNlUGlwZWxpbmVDbGFzcyk9PiBjbGFzcyBleHRlbmRzIEJhc2VQaXBlbGluZUNsYXNze1xuICAgIGFzeW5jIHNhdmVQYXJhbXMoZmlsZU5hbWUpe1xuICAgICAgICBhd2FpdCB0aGlzLkxheWVyUnVubmVyLk5ldFBhcmFtZXRlcnMuc2F2ZVBhcmFtcyhmaWxlTmFtZSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBhc3luYyBsb2FkUGFyYW1zKGZpbGVOYW1lKXtcbiAgICAgICAgdGhpcy5MYXllclJ1bm5lci5OZXRQYXJhbWV0ZXJzID0gYXdhaXQgdGhpcy5MYXllclJ1bm5lci5OZXRQYXJhbWV0ZXJzLmxvYWRQYXJhbXMoZmlsZU5hbWUpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBhc3luYyBnZXRTYXZlZFBhcmFtTGlzdCgpe1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5MYXllclJ1bm5lci5OZXRQYXJhbWV0ZXJzLmdldFNhdmVkUGFyYW1MaXN0KCk7XG4gICAgfVxuXG4gICAgZ2V0IFBhcmFtZXRlckluaXRpYWxpemVyKCl7XG4gICAgICAgIGlmKCF0aGlzLnBhcmFtZXRlckluaXRpYWxpemVyKXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdQYXJhbWV0ZXJJbml0aWFsaXplciBpcyBub3Qgc2V0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucGFyYW1ldGVySW5pdGlhbGl6ZXI7XG4gICAgfVxuXG4gICAgc2V0IFBhcmFtZXRlckluaXRpYWxpemVyKHBhcmFtZXRlckluaXRpYWxpemVyKXtcbiAgICAgICAgdGhpcy5wYXJhbWV0ZXJJbml0aWFsaXplciA9IHBhcmFtZXRlckluaXRpYWxpemVyO1xuICAgIH1cblxuXG4gICAgc2V0QnlDb25maWcocGlwZWxpbmVDb25maWcpe1xuICAgICAgICBpZihzdXBlci5zZXRCeUNvbmZpZyl7XG4gICAgICAgICAgICBzdXBlci5zZXRCeUNvbmZpZyhwaXBlbGluZUNvbmZpZyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5Mb2dnZXIuZ3JvdXBCZWdpbignc2V0IExheWVyUnVubmVyIGJ5IGNvbmZpZycpO1xuICAgICAgICBjb25zdCB7IE5ldCB9ID0gcGlwZWxpbmVDb25maWc7XG4gICAgICAgIGNvbnN0IHsgTGF5ZXJzLCBQYXJhbWV0ZXJzIH0gPSBOZXQ7IFxuICAgICAgICB0aGlzLkxheWVyUnVubmVyLk5ldExheWVycyA9IExheWVycztcbiAgICAgICAgdGhpcy5QYXJhbWV0ZXJJbml0aWFsaXplciA9IFBhcmFtZXRlcnM7ICAgICAgIFxuICAgICAgICB0aGlzLkxheWVyUnVubmVyLk5ldFBhcmFtZXRlcnMgPSB0aGlzLlBhcmFtZXRlckluaXRpYWxpemVyKExheWVycyk7XG4gICAgICAgIHRoaXMuTG9nZ2VyLmdyb3VwRW5kKCk7XG4gICAgfVxuXG4gICAgc2V0IExheWVyUnVubmVyKHJ1bm5lcil7XG4gICAgICAgIHRoaXMubGF5ZXJSdW5uZXIgPSBydW5uZXI7XG4gICAgfVxuICAgIGdldCBMYXllclJ1bm5lcigpe1xuICAgICAgICBpZighdGhpcy5sYXllclJ1bm5lcil7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignbGF5ZXJSdW5uZXIgaXMgbm90IHNldCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmxheWVyUnVubmVyO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IExheWVyUnVubmVyTWl4aW5zOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9zdG9yYWdlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfdXRpbHNfXzsiXSwic291cmNlUm9vdCI6IiJ9