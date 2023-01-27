(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("causal-net.core"), require("causal-net.datasets"), require("causal-net.deployment"), require("causal-net.layer"), require("causal-net.log"), require("causal-net.optimizers"), require("causal-net.preprocessing"), require("causal-net.utils"));
	else if(typeof define === 'function' && define.amd)
		define(["causal-net.core", "causal-net.datasets", "causal-net.deployment", "causal-net.layer", "causal-net.log", "causal-net.optimizers", "causal-net.preprocessing", "causal-net.utils"], factory);
	else if(typeof exports === 'object')
		exports["@causalNet/pipeline"] = factory(require("causal-net.core"), require("causal-net.datasets"), require("causal-net.deployment"), require("causal-net.layer"), require("causal-net.log"), require("causal-net.optimizers"), require("causal-net.preprocessing"), require("causal-net.utils"));
	else
		root["@causalNet/pipeline"] = factory(root["causal-net.core"], root["causal-net.datasets"], root["causal-net.deployment"], root["causal-net.layer"], root["causal-net.log"], root["causal-net.optimizers"], root["causal-net.preprocessing"], root["causal-net.utils"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_causal_net_core__, __WEBPACK_EXTERNAL_MODULE_causal_net_datasets__, __WEBPACK_EXTERNAL_MODULE_causal_net_deployment__, __WEBPACK_EXTERNAL_MODULE_causal_net_layer__, __WEBPACK_EXTERNAL_MODULE_causal_net_log__, __WEBPACK_EXTERNAL_MODULE_causal_net_optimizers__, __WEBPACK_EXTERNAL_MODULE_causal_net_preprocessing__, __WEBPACK_EXTERNAL_MODULE_causal_net_utils__) {
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

/***/ "../causality-models/dist/@causalNet/models.web.js":
/*!**********************************************!*\
  !*** .-models/dist/@causalNet/models.web.js ***!
  \**********************************************/
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

  predict() {
    throw Error('implement required');
  }

  oneHotPredict() {
    throw Error('implement required');
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

}

/* harmony default export */ __webpack_exports__["default"] = (new CausalNetModels());

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: causalNetModels, ModelMixins, BaseModel, SingleLabelClassification */
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

  get EncodeModel() {
    if (!this.netModel) {
      throw Error('netModel is not set');
    }

    return this.netModel.Encode;
  }

  get DecodeModel() {
    if (!this.netModel) {
      throw Error('netModel is not set');
    }

    return this.netModel.Decode;
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
      Predictor
    } = layerRunner;
    this.runner = {
      Predictor
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
      Predictor
    } = this.LayerRunner;
    return inputTensor => {
      let outPutTensor = Predictor(inputTensor);
      let logProb = outPutTensor.sub(outPutTensor.logSumExp(1, true));
      return logProb;
    };
  }

  get Predict() {
    const Fit = this.Fit;
    return inputTensor => {
      let logProb = Fit(inputTensor);
      let predictedClass = logProb.argMax(1);
      return predictedClass;
    };
  }

  get OneHotPredict() {
    const Predict = this.Predict;
    return inputTensor => {
      let predictedClass = Predict(inputTensor);
      let oneHotPredict = this.T.oneHot(predictedClass, this.numClass);
      return oneHotPredict;
    };
  }

  get Loss() {
    const Fit = this.Fit;
    return (inputTensor, labelTensor) => {
      let logProb = Fit(inputTensor);
      let likelihood = logProb.neg().mul(labelTensor);
      let loss = likelihood.sum(1).mean();
      return loss;
    };
  }

}

/* harmony default export */ __webpack_exports__["default"] = (SingleLabelClassification);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L21vZGVscy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9tb2RlbHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9tb2RlbHMvLi9zcmMvYmFzZU1vZGVsLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbW9kZWxzLy4vc3JjL2NhdXNhbE5ldE1vZGVscy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L21vZGVscy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L21vZGVscy8uL3NyYy9tb2RlbC5taXhpbnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9tb2RlbHMvLi9zcmMvc2luZ2xlTGFibGVDbGFzc2lmaWNhdGlvbi5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L21vZGVscy9leHRlcm5hbCBcImNhdXNhbC1uZXQuY29yZVwiIiwid2VicGFjazovL0BjYXVzYWxOZXQvbW9kZWxzL2V4dGVybmFsIFwiY2F1c2FsLW5ldC51dGlsc1wiIl0sIm5hbWVzIjpbIkJhc2VNb2RlbCIsIlRlbnNvciIsImNvbnN0cnVjdG9yIiwibW9kZWxOYW1lIiwiTGF5ZXJSdW5uZXIiLCJydW5uZXIiLCJFcnJvciIsImZpdCIsImxvc3MiLCJwcmVkaWN0Iiwib25lSG90UHJlZGljdCIsIkNhdXNhbE5ldE1vZGVscyIsInBsYXRmb3JtIiwibWl4V2l0aCIsIkJhc2VUZW5zb3IiLCJjbGFzc2lmaWNhdGlvbiIsIm51bUNsYXNzIiwibW9kZWwiLCJTaW5nbGVMYWJlbENsYXNzaWZpY2F0aW9uIiwiTW9kZWxNaXhpbnMiLCJCYXNlUGlwZWxpbmVDbGFzcyIsIkxvc3NNb2RlbCIsIm5ldE1vZGVsIiwiTG9zcyIsIkZpdE1vZGVsIiwiRml0IiwiT25lSG90UHJlZGljdE1vZGVsIiwiT25lSG90UHJlZGljdCIsIlByZWRpY3RNb2RlbCIsIlByZWRpY3QiLCJFbmNvZGVNb2RlbCIsIkVuY29kZSIsIkRlY29kZU1vZGVsIiwiRGVjb2RlIiwiTW9kZWwiLCJzZXRCeUNvbmZpZyIsInBpcGVsaW5lQ29uZmlnIiwiTG9nZ2VyIiwiZ3JvdXBCZWdpbiIsIk5ldCIsIkpTT04iLCJzdHJpbmdsaWZ5IiwiZ3JvdXBFbmQiLCJsYXllclJ1bm5lciIsIlByZWRpY3RvciIsImlucHV0VGVuc29yIiwib3V0UHV0VGVuc29yIiwibG9nUHJvYiIsInN1YiIsImxvZ1N1bUV4cCIsInByZWRpY3RlZENsYXNzIiwiYXJnTWF4IiwiVCIsIm9uZUhvdCIsImxhYmVsVGVuc29yIiwibGlrZWxpaG9vZCIsIm5lZyIsIm11bCIsInN1bSIsIm1lYW4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7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Q29CLFdBQUQsRUFBY1MsV0FBZCxLQUE0QjtBQUMvQixVQUFJUCxPQUFPLEdBQUd0QixHQUFHLENBQUNvQixXQUFELENBQWpCO0FBQ0EsVUFBSVUsVUFBVSxHQUFHUixPQUFPLENBQUNTLEdBQVIsR0FBY0MsR0FBZCxDQUFrQkgsV0FBbEIsQ0FBakI7QUFDQSxVQUFJOUMsSUFBSSxHQUFHK0MsVUFBVSxDQUFDRyxHQUFYLENBQWUsQ0FBZixFQUFrQkMsSUFBbEIsRUFBWDtBQUNBLGFBQU9uRCxJQUFQO0FBQ0gsS0FMRDtBQU1IOztBQXpENEM7O0FBMkRsQ1Usd0ZBQWYsRTs7Ozs7Ozs7Ozs7QUM3REEsNkQ7Ozs7Ozs7Ozs7O0FDQUEsOEQiLCJmaWxlIjoiQGNhdXNhbE5ldC9tb2RlbHMud2ViLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiY2F1c2FsLW5ldC5jb3JlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC51dGlsc1wiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJjYXVzYWwtbmV0LmNvcmVcIiwgXCJjYXVzYWwtbmV0LnV0aWxzXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkBjYXVzYWxOZXQvbW9kZWxzXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiY2F1c2FsLW5ldC5jb3JlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC51dGlsc1wiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiQGNhdXNhbE5ldC9tb2RlbHNcIl0gPSBmYWN0b3J5KHJvb3RbXCJjYXVzYWwtbmV0LmNvcmVcIl0sIHJvb3RbXCJjYXVzYWwtbmV0LnV0aWxzXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9jb3JlX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF91dGlsc19fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgeyBUZW5zb3IgfSBmcm9tICdjYXVzYWwtbmV0LmNvcmUnO1xuY2xhc3MgQmFzZU1vZGVsIGV4dGVuZHMgVGVuc29ye1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubW9kZWxOYW1lID0gJyc7XG4gICAgfVxuXG4gICAgc2V0IExheWVyUnVubmVyKHJ1bm5lcil7XG4gICAgICAgIHRocm93IEVycm9yKCdpbXBsZW1lbnQgcmVxdWlyZWQnKTtcbiAgICB9XG5cbiAgICBnZXQgTGF5ZXJSdW5uZXIoKXtcbiAgICAgICAgdGhyb3cgRXJyb3IoJ2ltcGxlbWVudCByZXF1aXJlZCcpO1xuICAgIH1cblxuICAgIGZpdCgpe1xuICAgICAgICB0aHJvdyBFcnJvcignaW1wbGVtZW50IHJlcXVpcmVkJyk7XG4gICAgfVxuXG4gICAgbG9zcygpe1xuICAgICAgICB0aHJvdyBFcnJvcignaW1wbGVtZW50IHJlcXVpcmVkJyk7XG4gICAgfVxuXG4gICAgcHJlZGljdCgpe1xuICAgICAgICB0aHJvdyBFcnJvcignaW1wbGVtZW50IHJlcXVpcmVkJyk7XG4gICAgfVxuICAgIG9uZUhvdFByZWRpY3QoKXtcbiAgICAgICAgdGhyb3cgRXJyb3IoJ2ltcGxlbWVudCByZXF1aXJlZCcpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQmFzZU1vZGVsOyIsImltcG9ydCB7IHBsYXRmb3JtIH0gZnJvbSAnY2F1c2FsLW5ldC51dGlscyc7XG5pbXBvcnQgeyBUZW5zb3IgYXMgQmFzZVRlbnNvciB9IGZyb20gJ2NhdXNhbC1uZXQuY29yZSc7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIFNpbmdsZUxhYmVsQ2xhc3NpZmljYXRpb24gfSBmcm9tICcuL3NpbmdsZUxhYmxlQ2xhc3NpZmljYXRpb24nO1xuLyoqXG4gKiBUaGlzIGNsYXNzIHByb3ZpZGUgY29tbW9uIHVzZWQgbW9kZWxzIHdoaWNoIGNhbiBiZSBhY2Nlc3NlZCB2aWEgKipjYXVzYWxOZXRNb2RlbHMqKiBpbnN0YW5jZS5cbiAqIEBjbGFzcyBDYXVzYWxOZXRNb2RlbHNcbiAqIEBleHRlbmRzIEJhc2VUZW5zb3JcbiAqIEBleGFtcGxlXG4gKiBbRVhBTVBMRSAuLi9leGFtcGxlcy9zaW5nbGVMYWJlbENsYXNzaWZpY2F0aW9uLmJhYmVsLmpzXVxuICovXG5jbGFzcyBDYXVzYWxOZXRNb2RlbHMgZXh0ZW5kcyBwbGF0Zm9ybS5taXhXaXRoKCBCYXNlVGVuc29yLCBbXSApe1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuICAgIFxuICAgIGNsYXNzaWZpY2F0aW9uKG51bUNsYXNzKXtcbiAgICAgICAgdGhpcy5tb2RlbCA9IG5ldyBTaW5nbGVMYWJlbENsYXNzaWZpY2F0aW9uKG51bUNsYXNzKTtcbiAgICAgICAgcmV0dXJuIHRoaXMubW9kZWw7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgbmV3IENhdXNhbE5ldE1vZGVscygpOyIsImV4cG9ydCB7IGRlZmF1bHQgYXMgY2F1c2FsTmV0TW9kZWxzIH0gZnJvbSAnLi9jYXVzYWxOZXRNb2RlbHMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBNb2RlbE1peGlucyB9IGZyb20gJy4vbW9kZWwubWl4aW5zJztcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBCYXNlTW9kZWwgfSBmcm9tICcuL2Jhc2VNb2RlbCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFNpbmdsZUxhYmVsQ2xhc3NpZmljYXRpb24gfSBmcm9tICcuL3NpbmdsZUxhYmxlQ2xhc3NpZmljYXRpb24nO1xuIiwiY29uc3QgTW9kZWxNaXhpbnMgPSAoQmFzZVBpcGVsaW5lQ2xhc3MpPT4gY2xhc3MgZXh0ZW5kcyBCYXNlUGlwZWxpbmVDbGFzc3tcbiAgICBnZXQgTG9zc01vZGVsKCl7XG4gICAgICAgIGlmKCF0aGlzLm5ldE1vZGVsKXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCduZXRNb2RlbCBpcyBub3Qgc2V0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMubmV0TW9kZWwuTG9zcztcbiAgICB9XG5cbiAgICBnZXQgRml0TW9kZWwoKXtcbiAgICAgICAgaWYoIXRoaXMubmV0TW9kZWwpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ25ldE1vZGVsIGlzIG5vdCBzZXQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5uZXRNb2RlbC5GaXQ7XG4gICAgfVxuICAgIFxuICAgIGdldCBPbmVIb3RQcmVkaWN0TW9kZWwoKXtcbiAgICAgICAgaWYoIXRoaXMubmV0TW9kZWwpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ25ldE1vZGVsIGlzIG5vdCBzZXQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5uZXRNb2RlbC5PbmVIb3RQcmVkaWN0O1xuICAgIH1cblxuICAgIGdldCBQcmVkaWN0TW9kZWwoKXtcbiAgICAgICAgaWYoIXRoaXMubmV0TW9kZWwpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ25ldE1vZGVsIGlzIG5vdCBzZXQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5uZXRNb2RlbC5QcmVkaWN0O1xuICAgIH1cblxuICAgIGdldCBFbmNvZGVNb2RlbCgpe1xuICAgICAgICBpZighdGhpcy5uZXRNb2RlbCl7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignbmV0TW9kZWwgaXMgbm90IHNldCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLm5ldE1vZGVsLkVuY29kZTtcbiAgICB9XG5cbiAgICBnZXQgRGVjb2RlTW9kZWwoKXtcbiAgICAgICAgaWYoIXRoaXMubmV0TW9kZWwpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ25ldE1vZGVsIGlzIG5vdCBzZXQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5uZXRNb2RlbC5EZWNvZGU7XG4gICAgfVxuXG5cbiAgICBnZXQgTW9kZWwoKXtcbiAgICAgICAgaWYoIXRoaXMubmV0TW9kZWwpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ25ldE1vZGVsIGlzIG5vdCBzZXQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5uZXRNb2RlbDtcbiAgICB9XG4gICAgXG5cbiAgICBzZXQgTW9kZWwobW9kZWwpeyAgICAgICAgXG4gICAgICAgIHRoaXMubmV0TW9kZWwgPSBtb2RlbDtcbiAgICB9XG5cbiAgICBzZXRCeUNvbmZpZyhwaXBlbGluZUNvbmZpZyl7XG4gICAgICAgIGlmKHN1cGVyLnNldEJ5Q29uZmlnKXtcbiAgICAgICAgICAgIHN1cGVyLnNldEJ5Q29uZmlnKHBpcGVsaW5lQ29uZmlnKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLkxvZ2dlci5ncm91cEJlZ2luKCdzZXQgTW9kZWwgYnkgY29uZmlnJyk7XG4gICAgICAgIGNvbnN0IHsgTW9kZWwgfSA9IHBpcGVsaW5lQ29uZmlnLk5ldDtcbiAgICAgICAgaWYoIU1vZGVsKXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKGBNb2RlbCBpcyBub3Qgc2V0IGluICR7SlNPTi5zdHJpbmdsaWZ5KHBpcGVsaW5lQ29uZmlnKX1gKTtcbiAgICAgICAgfVxuICAgICAgICBNb2RlbC5MYXllclJ1bm5lciA9IHRoaXMuTGF5ZXJSdW5uZXI7XG4gICAgICAgIHRoaXMuTW9kZWwgPSBNb2RlbDtcbiAgICAgICAgdGhpcy5Mb2dnZXIuZ3JvdXBFbmQoKTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNb2RlbE1peGlucztcbiIsImltcG9ydCB7IGRlZmF1bHQgYXMgQmFzZU1vZGVsIH0gZnJvbSAnLi9iYXNlTW9kZWwnO1xuXG5jbGFzcyBTaW5nbGVMYWJlbENsYXNzaWZpY2F0aW9uIGV4dGVuZHMgQmFzZU1vZGVse1xuICAgIGNvbnN0cnVjdG9yKG51bUNsYXNzKXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgaWYobnVtQ2xhc3MgPiAwKXtcbiAgICAgICAgICAgIHRoaXMubnVtQ2xhc3MgPSBudW1DbGFzcztcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoYGV4cGVjdCBudW1jbGFzcywgZ2V0ICR7bnVtQ2xhc3N9YCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXQgTGF5ZXJSdW5uZXIobGF5ZXJSdW5uZXIpe1xuICAgICAgICBsZXQgeyBQcmVkaWN0b3IgfSA9IGxheWVyUnVubmVyO1xuICAgICAgICB0aGlzLnJ1bm5lciA9IHsgUHJlZGljdG9yIH07XG4gICAgfVxuXG4gICAgZ2V0IExheWVyUnVubmVyKCl7XG4gICAgICAgIGlmKCF0aGlzLnJ1bm5lcil7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcigncnVubmVyIGlzIG5vdCBzZXQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5ydW5uZXI7XG4gICAgfVxuICAgIFxuICAgIGdldCBGaXQoKXtcbiAgICAgICAgY29uc3QgeyBQcmVkaWN0b3IgfSA9IHRoaXMuTGF5ZXJSdW5uZXI7XG4gICAgICAgIHJldHVybiAoaW5wdXRUZW5zb3IpPT57XG4gICAgICAgICAgICBsZXQgb3V0UHV0VGVuc29yID0gUHJlZGljdG9yKGlucHV0VGVuc29yKTtcbiAgICAgICAgICAgIGxldCBsb2dQcm9iID0gb3V0UHV0VGVuc29yLnN1YihvdXRQdXRUZW5zb3IubG9nU3VtRXhwKDEsIHRydWUpKTtcbiAgICAgICAgICAgIHJldHVybiBsb2dQcm9iO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBcbiAgICBnZXQgUHJlZGljdCgpe1xuICAgICAgICBjb25zdCBGaXQgPSB0aGlzLkZpdDtcbiAgICAgICAgcmV0dXJuIChpbnB1dFRlbnNvcik9PntcbiAgICAgICAgICAgIGxldCBsb2dQcm9iID0gRml0KGlucHV0VGVuc29yKTtcbiAgICAgICAgICAgIGxldCBwcmVkaWN0ZWRDbGFzcyA9IGxvZ1Byb2IuYXJnTWF4KDEpO1xuICAgICAgICAgICAgcmV0dXJuIHByZWRpY3RlZENsYXNzO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGdldCBPbmVIb3RQcmVkaWN0KCl7XG4gICAgICAgIGNvbnN0IFByZWRpY3QgPSB0aGlzLlByZWRpY3Q7XG4gICAgICAgIHJldHVybiAoaW5wdXRUZW5zb3IpPT57XG4gICAgICAgICAgICBsZXQgcHJlZGljdGVkQ2xhc3MgPSBQcmVkaWN0KGlucHV0VGVuc29yKTtcbiAgICAgICAgICAgIGxldCBvbmVIb3RQcmVkaWN0ID0gdGhpcy5ULm9uZUhvdChwcmVkaWN0ZWRDbGFzcywgdGhpcy5udW1DbGFzcyk7XG4gICAgICAgICAgICByZXR1cm4gb25lSG90UHJlZGljdDtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZ2V0IExvc3MoKXtcbiAgICAgICAgY29uc3QgRml0ID0gdGhpcy5GaXQ7XG4gICAgICAgIHJldHVybiAoaW5wdXRUZW5zb3IsIGxhYmVsVGVuc29yKT0+e1xuICAgICAgICAgICAgbGV0IGxvZ1Byb2IgPSBGaXQoaW5wdXRUZW5zb3IpO1xuICAgICAgICAgICAgbGV0IGxpa2VsaWhvb2QgPSBsb2dQcm9iLm5lZygpLm11bChsYWJlbFRlbnNvcik7XG4gICAgICAgICAgICBsZXQgbG9zcyA9IGxpa2VsaWhvb2Quc3VtKDEpLm1lYW4oKTtcbiAgICAgICAgICAgIHJldHVybiBsb3NzO1xuICAgICAgICB9O1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IFNpbmdsZUxhYmVsQ2xhc3NpZmljYXRpb247IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfY29yZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3V0aWxzX187Il0sInNvdXJjZVJvb3QiOiIifQ==

/***/ }),

/***/ "./src/Ensemble/ensembleDeployment.mixins.js":
/*!***************************************************!*\
  !*** ./src/Ensemble/ensembleDeployment.mixins.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * The EnsembleDeploymentMixins class is the mixis class for deploying ensemble model
 * @class CausalNet
 * @extends { BasePipelineClass }
 */
const EnsembleDeploymentMixins = BasePipelineClass => class extends BasePipelineClass {
  /**
   * Provide EnsembleInferencer caller, EnsembleModelPredict must be set in prior
   * @readonly
   */
  get EnsembleInferencer() {
    const ModelLenses = () => ({
      EnsemblePredict: this.EnsembleModelPredict
    });

    const T = this.T;
    return async input => {
      let {
        EnsemblePredict
      } = input;
      let infer = {};

      if (EnsemblePredict) {
        let inputTensor = T.tensor(EnsemblePredict).asType('float32').reshape([1, -1]);
        let predictTensor = await ModelLenses().EnsemblePredict(inputTensor);
        infer.EnsemblePredict = await predictTensor.data();
      }

      return infer;
    };
  }
  /**
   * process pipelineConfig object for ensemble deployment
   * @param { Object } pipelineConfig
   * @returns
   */


  setByConfig(pipelineConfig) {
    if (super.setByConfig) {
      super.setByConfig(pipelineConfig);
    }

    this.Logger.groupBegin('set ensemble deployment by config');
    this.Deployment.EnsembleInferencer = this.EnsembleInferencer;
    this.Logger.groupEnd();
    return pipelineConfig;
  }
  /**
   * deploy model
   * @returns { Promise } deployment summary
   */


  async deploy() {
    return await this.Deployment.deploy();
  }

};

/* harmony default export */ __webpack_exports__["default"] = (EnsembleDeploymentMixins);

/***/ }),

/***/ "./src/Ensemble/ensembleEvaluator.mixins.js":
/*!**************************************************!*\
  !*** ./src/Ensemble/ensembleEvaluator.mixins.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const EnsembleEvaluatorMixins = BasePipelineClass => class extends BasePipelineClass {
  async ensembleTest(batchSize, method = 'accuracy') {
    throw Error('implement require');
  }

};

/* harmony default export */ __webpack_exports__["default"] = (EnsembleEvaluatorMixins);

/***/ }),

/***/ "./src/Ensemble/ensembleModel.mixins.js":
/*!**********************************************!*\
  !*** ./src/Ensemble/ensembleModel.mixins.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * The EnsembleModelMixins class is the mixis class for ensemble model caller
 * @class EnsembleModelMixins
 * @extends {BasePipelineClass}
 */
const EnsembleModelMixins = BasePipelineClass => class extends BasePipelineClass {
  get EnsembleModelPredict() {
    const FitModel = this.FitModel;
    const T = this.T;
    const EnsembleModels = this.EnsembleModels;

    const Bagging = async inputTensor => {
      let probFits = [];

      for (let model of EnsembleModels) {
        await this.loadParams(model);
        let prob = FitModel(inputTensor).exp();
        probFits.push(prob);
      }

      let meanProb = T.stack(probFits).mean(0);
      return meanProb.argMax(1);
    };

    return Bagging;
  }

  set EnsembleModels(modelist) {
    this.ensembleModels = modelist;
  }

  get EnsembleModels() {
    if (!this.ensembleModels) {
      throw Error('EnsembleModels is not set');
    }

    return this.ensembleModels;
  }

};

/* harmony default export */ __webpack_exports__["default"] = (EnsembleModelMixins);

/***/ }),

/***/ "./src/Ensemble/ensembleTrainer.mixins.js":
/*!************************************************!*\
  !*** ./src/Ensemble/ensembleTrainer.mixins.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * The EnsembleTrainerMixins class is the mixins class for training ensamblable models
 * @class EnsembleTrainerMixins
 * @extends {BasePipelineClass}
 */
const EnsembleTrainerMixins = BasePipelineClass => class extends BasePipelineClass {
  /**
   * Train model and save to storage under the given filename. parameters is reinited for each training
   * @param { Number } numEpochs
   * @param { Number } batchSize
   * @param { String } saveFileName
   * @returns { Promise } Training losses
   */
  async ensembleTrain(numEpochs, batchSize, saveFileName) {
    this.LayerRunner.NetParameters = this.ParameterInitializer(this.LayerRunner.NetLayers);
    let {
      losses
    } = await this.train(numEpochs, batchSize);
    await this.saveParams(saveFileName);
    return {
      [saveFileName]: losses
    };
  }

};

/* harmony default export */ __webpack_exports__["default"] = (EnsembleTrainerMixins);

/***/ }),

/***/ "./src/Ensemble/index.js":
/*!*******************************!*\
  !*** ./src/Ensemble/index.js ***!
  \*******************************/
/*! exports provided: EnsembleTrainerMixins, EnsembleModelMixins, EnsembleDeploymentMixins, EnsembleEvaluatorMixins */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ensembleTrainer_mixins__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ensembleTrainer.mixins */ "./src/Ensemble/ensembleTrainer.mixins.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EnsembleTrainerMixins", function() { return _ensembleTrainer_mixins__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _ensembleModel_mixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ensembleModel.mixins */ "./src/Ensemble/ensembleModel.mixins.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EnsembleModelMixins", function() { return _ensembleModel_mixins__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _ensembleDeployment_mixins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ensembleDeployment.mixins */ "./src/Ensemble/ensembleDeployment.mixins.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EnsembleDeploymentMixins", function() { return _ensembleDeployment_mixins__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _ensembleEvaluator_mixins__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ensembleEvaluator.mixins */ "./src/Ensemble/ensembleEvaluator.mixins.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EnsembleEvaluatorMixins", function() { return _ensembleEvaluator_mixins__WEBPACK_IMPORTED_MODULE_3__["default"]; });






/***/ }),

/***/ "./src/causalNet.js":
/*!**************************!*\
  !*** ./src/causalNet.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var causal_net_datasets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! causal-net.datasets */ "causal-net.datasets");
/* harmony import */ var causal_net_datasets__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(causal_net_datasets__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var causal_net_preprocessing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! causal-net.preprocessing */ "causal-net.preprocessing");
/* harmony import */ var causal_net_preprocessing__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(causal_net_preprocessing__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var causal_net_optimizers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! causal-net.optimizers */ "causal-net.optimizers");
/* harmony import */ var causal_net_optimizers__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(causal_net_optimizers__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var causal_net_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! causal-net.models */ "../causality-models/dist/@causalNet/models.web.js");
/* harmony import */ var causal_net_models__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(causal_net_models__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var causal_net_layer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! causal-net.layer */ "causal-net.layer");
/* harmony import */ var causal_net_layer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(causal_net_layer__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var causal_net_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! causal-net.core */ "causal-net.core");
/* harmony import */ var causal_net_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(causal_net_core__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! causal-net.utils */ "causal-net.utils");
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(causal_net_utils__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var causal_net_deployment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! causal-net.deployment */ "causal-net.deployment");
/* harmony import */ var causal_net_deployment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(causal_net_deployment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var causal_net_log__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! causal-net.log */ "causal-net.log");
/* harmony import */ var causal_net_log__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(causal_net_log__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _functor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./functor */ "./src/functor.js");
/* harmony import */ var _Ensemble_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Ensemble/index */ "./src/Ensemble/index.js");











/**
 * The CausalNet class is the prebuilt pipeline with methods for 
 * processing data/train/evaluate/deploy/ensemble deploy
 * { mixWith: [ 
 *         DataSourceMixins,
 *         PreprocessingMixins,
 *         LayerRunnerMixins, 
 *         ModelMixins, 
 *         EvaluatorMixins,
 *         TrainerMixins, 
 *         LoggerMixins,
 *         DeploymentMixins,
 *         EnsembleTrainerMixins,
 *         EnsembleModelMixins, 
 *         EnsembleDeploymentMixins ] }
 * @class CausalNet
 * @extends {Tensor}
 * @example
 * [EXAMPLE ../examples/causalNet/ensemble.logisticRegression.babel.js]
 */

class CausalNet extends causal_net_utils__WEBPACK_IMPORTED_MODULE_6__["platform"].mixWith(causal_net_core__WEBPACK_IMPORTED_MODULE_5__["Tensor"], [causal_net_datasets__WEBPACK_IMPORTED_MODULE_0__["DataSourceMixins"], causal_net_preprocessing__WEBPACK_IMPORTED_MODULE_1__["PreprocessingMixins"], causal_net_layer__WEBPACK_IMPORTED_MODULE_4__["LayerRunnerMixins"], causal_net_models__WEBPACK_IMPORTED_MODULE_3__["ModelMixins"], causal_net_optimizers__WEBPACK_IMPORTED_MODULE_2__["EvaluatorMixins"], causal_net_optimizers__WEBPACK_IMPORTED_MODULE_2__["TrainerMixins"], causal_net_log__WEBPACK_IMPORTED_MODULE_8__["LoggerMixins"], causal_net_deployment__WEBPACK_IMPORTED_MODULE_7__["DeploymentMixins"], _Ensemble_index__WEBPACK_IMPORTED_MODULE_10__["EnsembleTrainerMixins"], _Ensemble_index__WEBPACK_IMPORTED_MODULE_10__["EnsembleModelMixins"], _Ensemble_index__WEBPACK_IMPORTED_MODULE_10__["EnsembleDeploymentMixins"]]) {
  /**
   *Creates an instance of CausalNet.
   * @param { Functor } functor
   * @param { Log } logger
   * @param { Functor } streamPreprocessing
   * @param { Tensor } netParameters
   * @param { Tensor } netRunner
   * @param { Event } streamDeployment
   * @memberof CausalNet
   */
  constructor(functor, logger, streamPreprocessing, netRunner, streamDeployment) {
    super();
    this.F = functor;
    this.R = this.F.CoreFunctor;
    this.Logger = logger;
    this.Preprocessing = streamPreprocessing;
    this.LayerRunner = netRunner;
    this.Deployment = streamDeployment;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new CausalNet(_functor__WEBPACK_IMPORTED_MODULE_9__["default"], causal_net_log__WEBPACK_IMPORTED_MODULE_8__["termLogger"], causal_net_preprocessing__WEBPACK_IMPORTED_MODULE_1__["causalNetPreprocessingStream"], causal_net_layer__WEBPACK_IMPORTED_MODULE_4__["causalNetRunner"], causal_net_deployment__WEBPACK_IMPORTED_MODULE_7__["causalNetDeployment"]));

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
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! causal-net.utils */ "causal-net.utils");
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(causal_net_utils__WEBPACK_IMPORTED_MODULE_1__);


/**
 * This Functor class provides common used data processing methods for pipeline
 * @class Functor
 * @extends BaseFunctor
 */

class Functor extends causal_net_utils__WEBPACK_IMPORTED_MODULE_1__["platform"].mixWith(causal_net_core__WEBPACK_IMPORTED_MODULE_0__["Functor"], []) {
  constructor() {
    super();
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new Functor());

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: causalNet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _causalNet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./causalNet */ "./src/causalNet.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "causalNet", function() { return _causalNet__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "causal-net.core":
/*!**********************************!*\
  !*** external "causal-net.core" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_causal_net_core__;

/***/ }),

/***/ "causal-net.datasets":
/*!**************************************!*\
  !*** external "causal-net.datasets" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_causal_net_datasets__;

/***/ }),

/***/ "causal-net.deployment":
/*!****************************************!*\
  !*** external "causal-net.deployment" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_causal_net_deployment__;

/***/ }),

/***/ "causal-net.layer":
/*!***********************************!*\
  !*** external "causal-net.layer" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_causal_net_layer__;

/***/ }),

/***/ "causal-net.log":
/*!*********************************!*\
  !*** external "causal-net.log" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_causal_net_log__;

/***/ }),

/***/ "causal-net.optimizers":
/*!****************************************!*\
  !*** external "causal-net.optimizers" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_causal_net_optimizers__;

/***/ }),

/***/ "causal-net.preprocessing":
/*!*******************************************!*\
  !*** external "causal-net.preprocessing" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_causal_net_preprocessing__;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3BpcGVsaW5lL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3BpcGVsaW5lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0BjYXVzYWxOZXQvcGlwZWxpbmUvLi1tb2RlbHMvZGlzdC9AY2F1c2FsTmV0L21vZGVscy53ZWIuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9waXBlbGluZS8uL3NyYy9FbnNlbWJsZS9lbnNlbWJsZURlcGxveW1lbnQubWl4aW5zLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcGlwZWxpbmUvLi9zcmMvRW5zZW1ibGUvZW5zZW1ibGVFdmFsdWF0b3IubWl4aW5zLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcGlwZWxpbmUvLi9zcmMvRW5zZW1ibGUvZW5zZW1ibGVNb2RlbC5taXhpbnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9waXBlbGluZS8uL3NyYy9FbnNlbWJsZS9lbnNlbWJsZVRyYWluZXIubWl4aW5zLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcGlwZWxpbmUvLi9zcmMvRW5zZW1ibGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9waXBlbGluZS8uL3NyYy9jYXVzYWxOZXQuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9waXBlbGluZS8uL3NyYy9mdW5jdG9yLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcGlwZWxpbmUvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9waXBlbGluZS9leHRlcm5hbCBcImNhdXNhbC1uZXQuY29yZVwiIiwid2VicGFjazovL0BjYXVzYWxOZXQvcGlwZWxpbmUvZXh0ZXJuYWwgXCJjYXVzYWwtbmV0LmRhdGFzZXRzXCIiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9waXBlbGluZS9leHRlcm5hbCBcImNhdXNhbC1uZXQuZGVwbG95bWVudFwiIiwid2VicGFjazovL0BjYXVzYWxOZXQvcGlwZWxpbmUvZXh0ZXJuYWwgXCJjYXVzYWwtbmV0LmxheWVyXCIiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9waXBlbGluZS9leHRlcm5hbCBcImNhdXNhbC1uZXQubG9nXCIiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9waXBlbGluZS9leHRlcm5hbCBcImNhdXNhbC1uZXQub3B0aW1pemVyc1wiIiwid2VicGFjazovL0BjYXVzYWxOZXQvcGlwZWxpbmUvZXh0ZXJuYWwgXCJjYXVzYWwtbmV0LnByZXByb2Nlc3NpbmdcIiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3BpcGVsaW5lL2V4dGVybmFsIFwiY2F1c2FsLW5ldC51dGlsc1wiIl0sIm5hbWVzIjpbIkVuc2VtYmxlRGVwbG95bWVudE1peGlucyIsIkJhc2VQaXBlbGluZUNsYXNzIiwiRW5zZW1ibGVJbmZlcmVuY2VyIiwiTW9kZWxMZW5zZXMiLCJFbnNlbWJsZVByZWRpY3QiLCJFbnNlbWJsZU1vZGVsUHJlZGljdCIsIlQiLCJpbnB1dCIsImluZmVyIiwiaW5wdXRUZW5zb3IiLCJ0ZW5zb3IiLCJhc1R5cGUiLCJyZXNoYXBlIiwicHJlZGljdFRlbnNvciIsImRhdGEiLCJzZXRCeUNvbmZpZyIsInBpcGVsaW5lQ29uZmlnIiwiTG9nZ2VyIiwiZ3JvdXBCZWdpbiIsIkRlcGxveW1lbnQiLCJncm91cEVuZCIsImRlcGxveSIsIkVuc2VtYmxlRXZhbHVhdG9yTWl4aW5zIiwiZW5zZW1ibGVUZXN0IiwiYmF0Y2hTaXplIiwibWV0aG9kIiwiRXJyb3IiLCJFbnNlbWJsZU1vZGVsTWl4aW5zIiwiRml0TW9kZWwiLCJFbnNlbWJsZU1vZGVscyIsIkJhZ2dpbmciLCJwcm9iRml0cyIsIm1vZGVsIiwibG9hZFBhcmFtcyIsInByb2IiLCJleHAiLCJwdXNoIiwibWVhblByb2IiLCJzdGFjayIsIm1lYW4iLCJhcmdNYXgiLCJtb2RlbGlzdCIsImVuc2VtYmxlTW9kZWxzIiwiRW5zZW1ibGVUcmFpbmVyTWl4aW5zIiwiZW5zZW1ibGVUcmFpbiIsIm51bUVwb2NocyIsInNhdmVGaWxlTmFtZSIsIkxheWVyUnVubmVyIiwiTmV0UGFyYW1ldGVycyIsIlBhcmFtZXRlckluaXRpYWxpemVyIiwiTmV0TGF5ZXJzIiwibG9zc2VzIiwidHJhaW4iLCJzYXZlUGFyYW1zIiwiQ2F1c2FsTmV0IiwicGxhdGZvcm0iLCJtaXhXaXRoIiwiVGVuc29yIiwiRGF0YVNvdXJjZU1peGlucyIsIlByZXByb2Nlc3NpbmdNaXhpbnMiLCJMYXllclJ1bm5lck1peGlucyIsIk1vZGVsTWl4aW5zIiwiRXZhbHVhdG9yTWl4aW5zIiwiVHJhaW5lck1peGlucyIsIkxvZ2dlck1peGlucyIsIkRlcGxveW1lbnRNaXhpbnMiLCJjb25zdHJ1Y3RvciIsImZ1bmN0b3IiLCJsb2dnZXIiLCJzdHJlYW1QcmVwcm9jZXNzaW5nIiwibmV0UnVubmVyIiwic3RyZWFtRGVwbG95bWVudCIsIkYiLCJSIiwiQ29yZUZ1bmN0b3IiLCJQcmVwcm9jZXNzaW5nIiwidGVybUxvZ2dlciIsImNhdXNhbE5ldFByZXByb2Nlc3NpbmdTdHJlYW0iLCJjYXVzYWxOZXRSdW5uZXIiLCJjYXVzYWxOZXREZXBsb3ltZW50IiwiRnVuY3RvciIsIkJhc2VGdW5jdG9yIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUFuQixFQUF3Q0MsU0FBeEMsRUFBbURDLGdCQUFuRCxFQUFvRTtBQUMzRTtBQUNBLFNBQUtDLENBQUwsR0FBU0wsT0FBVDtBQUNBLFNBQUtNLENBQUwsR0FBUyxLQUFLRCxDQUFMLENBQU9FLFdBQWhCO0FBQ0EsU0FBS3pELE1BQUwsR0FBY21ELE1BQWQ7QUFDQSxTQUFLTyxhQUFMLEdBQXFCTixtQkFBckI7QUFDQSxTQUFLdEIsV0FBTCxHQUFtQnVCLFNBQW5CO0FBQ0EsU0FBS25ELFVBQUwsR0FBa0JvRCxnQkFBbEI7QUFDSDs7QUFuQjhCOztBQXNCcEIsbUVBQUtqQixTQUFMLENBQWlCYSxnREFBakIsRUFDaUJTLHlEQURqQixFQUVpQkMscUZBRmpCLEVBR2lCQyxnRUFIakIsRUFJaUJDLHlFQUpqQixDQUFmLEU7Ozs7Ozs7Ozs7OztBQ2pFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7Ozs7QUFLQSxNQUFNQyxPQUFOLFNBQXNCekIseURBQVEsQ0FBQ0MsT0FBVCxDQUFpQnlCLHVEQUFqQixFQUE4QixFQUE5QixDQUF0QixDQUF3RDtBQUNwRGYsYUFBVyxHQUFFO0FBQ1Q7QUFDSDs7QUFIbUQ7O0FBTXpDLG1FQUFJYyxPQUFKLEVBQWYsRTs7Ozs7Ozs7Ozs7O0FDYkE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7OztBQ0FBLDZEOzs7Ozs7Ozs7OztBQ0FBLGlFOzs7Ozs7Ozs7OztBQ0FBLG1FOzs7Ozs7Ozs7OztBQ0FBLDhEOzs7Ozs7Ozs7OztBQ0FBLDREOzs7Ozs7Ozs7OztBQ0FBLG1FOzs7Ozs7Ozs7OztBQ0FBLHNFOzs7Ozs7Ozs7OztBQ0FBLDhEIiwiZmlsZSI6IkBjYXVzYWxOZXQvcGlwZWxpbmUubm9kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImNhdXNhbC1uZXQuY29yZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQuZGF0YXNldHNcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LmRlcGxveW1lbnRcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LmxheWVyXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC5sb2dcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0Lm9wdGltaXplcnNcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnByZXByb2Nlc3NpbmdcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnV0aWxzXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcImNhdXNhbC1uZXQuY29yZVwiLCBcImNhdXNhbC1uZXQuZGF0YXNldHNcIiwgXCJjYXVzYWwtbmV0LmRlcGxveW1lbnRcIiwgXCJjYXVzYWwtbmV0LmxheWVyXCIsIFwiY2F1c2FsLW5ldC5sb2dcIiwgXCJjYXVzYWwtbmV0Lm9wdGltaXplcnNcIiwgXCJjYXVzYWwtbmV0LnByZXByb2Nlc3NpbmdcIiwgXCJjYXVzYWwtbmV0LnV0aWxzXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkBjYXVzYWxOZXQvcGlwZWxpbmVcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJjYXVzYWwtbmV0LmNvcmVcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LmRhdGFzZXRzXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC5kZXBsb3ltZW50XCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC5sYXllclwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQubG9nXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC5vcHRpbWl6ZXJzXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC5wcmVwcm9jZXNzaW5nXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC51dGlsc1wiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiQGNhdXNhbE5ldC9waXBlbGluZVwiXSA9IGZhY3Rvcnkocm9vdFtcImNhdXNhbC1uZXQuY29yZVwiXSwgcm9vdFtcImNhdXNhbC1uZXQuZGF0YXNldHNcIl0sIHJvb3RbXCJjYXVzYWwtbmV0LmRlcGxveW1lbnRcIl0sIHJvb3RbXCJjYXVzYWwtbmV0LmxheWVyXCJdLCByb290W1wiY2F1c2FsLW5ldC5sb2dcIl0sIHJvb3RbXCJjYXVzYWwtbmV0Lm9wdGltaXplcnNcIl0sIHJvb3RbXCJjYXVzYWwtbmV0LnByZXByb2Nlc3NpbmdcIl0sIHJvb3RbXCJjYXVzYWwtbmV0LnV0aWxzXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9jb3JlX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9kYXRhc2V0c19fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfZGVwbG95bWVudF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfbGF5ZXJfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X2xvZ19fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfb3B0aW1pemVyc19fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfcHJlcHJvY2Vzc2luZ19fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfdXRpbHNfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiY2F1c2FsLW5ldC5jb3JlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC51dGlsc1wiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJjYXVzYWwtbmV0LmNvcmVcIiwgXCJjYXVzYWwtbmV0LnV0aWxzXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkBjYXVzYWxOZXQvbW9kZWxzXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiY2F1c2FsLW5ldC5jb3JlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC51dGlsc1wiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiQGNhdXNhbE5ldC9tb2RlbHNcIl0gPSBmYWN0b3J5KHJvb3RbXCJjYXVzYWwtbmV0LmNvcmVcIl0sIHJvb3RbXCJjYXVzYWwtbmV0LnV0aWxzXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9jb3JlX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF91dGlsc19fKSB7XG5yZXR1cm4gLyoqKioqKi8gKGZ1bmN0aW9uKG1vZHVsZXMpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHRpOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdGw6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge31cbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbi8qKioqKiovIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbi8qKioqKiovIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4vKioqKioqLyBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuLyoqKioqKi8gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4vKioqKioqLyBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuLyoqKioqKi8gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4vKioqKioqLyBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuLyoqKioqKi8gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4vKioqKioqLyBcdFx0cmV0dXJuIG5zO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4vKioqKioqLyBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4vKioqKioqLyBcdFx0cmV0dXJuIGdldHRlcjtcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuLyoqKioqKi8gfSlcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyAoe1xuXG4vKioqLyBcIi4vc3JjL2Jhc2VNb2RlbC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvYmFzZU1vZGVsLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBleHBvcnRzIHByb3ZpZGVkOiBkZWZhdWx0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIGNhdXNhbF9uZXRfY29yZV9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgY2F1c2FsLW5ldC5jb3JlICovIFwiY2F1c2FsLW5ldC5jb3JlXCIpO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIGNhdXNhbF9uZXRfY29yZV9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovX193ZWJwYWNrX3JlcXVpcmVfXy5uKGNhdXNhbF9uZXRfY29yZV9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fKTtcblxuXG5jbGFzcyBCYXNlTW9kZWwgZXh0ZW5kcyBjYXVzYWxfbmV0X2NvcmVfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX1tcIlRlbnNvclwiXSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5tb2RlbE5hbWUgPSAnJztcbiAgfVxuXG4gIHNldCBMYXllclJ1bm5lcihydW5uZXIpIHtcbiAgICB0aHJvdyBFcnJvcignaW1wbGVtZW50IHJlcXVpcmVkJyk7XG4gIH1cblxuICBnZXQgTGF5ZXJSdW5uZXIoKSB7XG4gICAgdGhyb3cgRXJyb3IoJ2ltcGxlbWVudCByZXF1aXJlZCcpO1xuICB9XG5cbiAgZml0KCkge1xuICAgIHRocm93IEVycm9yKCdpbXBsZW1lbnQgcmVxdWlyZWQnKTtcbiAgfVxuXG4gIGxvc3MoKSB7XG4gICAgdGhyb3cgRXJyb3IoJ2ltcGxlbWVudCByZXF1aXJlZCcpO1xuICB9XG5cbiAgcHJlZGljdCgpIHtcbiAgICB0aHJvdyBFcnJvcignaW1wbGVtZW50IHJlcXVpcmVkJyk7XG4gIH1cblxuICBvbmVIb3RQcmVkaWN0KCkge1xuICAgIHRocm93IEVycm9yKCdpbXBsZW1lbnQgcmVxdWlyZWQnKTtcbiAgfVxuXG59XG5cbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gX193ZWJwYWNrX2V4cG9ydHNfX1tcImRlZmF1bHRcIl0gPSAoQmFzZU1vZGVsKTtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvY2F1c2FsTmV0TW9kZWxzLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9jYXVzYWxOZXRNb2RlbHMuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIGV4cG9ydHMgcHJvdmlkZWQ6IGRlZmF1bHQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgY2F1c2FsX25ldF91dGlsc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgY2F1c2FsLW5ldC51dGlscyAqLyBcImNhdXNhbC1uZXQudXRpbHNcIik7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgY2F1c2FsX25ldF91dGlsc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovX193ZWJwYWNrX3JlcXVpcmVfXy5uKGNhdXNhbF9uZXRfdXRpbHNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgY2F1c2FsX25ldF9jb3JlX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBjYXVzYWwtbmV0LmNvcmUgKi8gXCJjYXVzYWwtbmV0LmNvcmVcIik7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgY2F1c2FsX25ldF9jb3JlX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19fZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9fX3dlYnBhY2tfcmVxdWlyZV9fLm4oY2F1c2FsX25ldF9jb3JlX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX18pO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9zaW5nbGVMYWJsZUNsYXNzaWZpY2F0aW9uX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL3NpbmdsZUxhYmxlQ2xhc3NpZmljYXRpb24gKi8gXCIuL3NyYy9zaW5nbGVMYWJsZUNsYXNzaWZpY2F0aW9uLmpzXCIpO1xuXG5cblxuLyoqXG4gKiBUaGlzIGNsYXNzIHByb3ZpZGUgY29tbW9uIHVzZWQgbW9kZWxzIHdoaWNoIGNhbiBiZSBhY2Nlc3NlZCB2aWEgKipjYXVzYWxOZXRNb2RlbHMqKiBpbnN0YW5jZS5cbiAqIEBjbGFzcyBDYXVzYWxOZXRNb2RlbHNcbiAqIEBleHRlbmRzIEJhc2VUZW5zb3JcbiAqIEBleGFtcGxlXG4gKiBbRVhBTVBMRSAuLi9leGFtcGxlcy9zaW5nbGVMYWJlbENsYXNzaWZpY2F0aW9uLmJhYmVsLmpzXVxuICovXG5cbmNsYXNzIENhdXNhbE5ldE1vZGVscyBleHRlbmRzIGNhdXNhbF9uZXRfdXRpbHNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX1tcInBsYXRmb3JtXCJdLm1peFdpdGgoY2F1c2FsX25ldF9jb3JlX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19bXCJUZW5zb3JcIl0sIFtdKSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBjbGFzc2lmaWNhdGlvbihudW1DbGFzcykge1xuICAgIHRoaXMubW9kZWwgPSBuZXcgX3NpbmdsZUxhYmxlQ2xhc3NpZmljYXRpb25fX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX1tcImRlZmF1bHRcIl0obnVtQ2xhc3MpO1xuICAgIHJldHVybiB0aGlzLm1vZGVsO1xuICB9XG5cbn1cblxuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyBfX3dlYnBhY2tfZXhwb3J0c19fW1wiZGVmYXVsdFwiXSA9IChuZXcgQ2F1c2FsTmV0TW9kZWxzKCkpO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9pbmRleC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9pbmRleC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBleHBvcnRzIHByb3ZpZGVkOiBjYXVzYWxOZXRNb2RlbHMsIE1vZGVsTWl4aW5zLCBCYXNlTW9kZWwsIFNpbmdsZUxhYmVsQ2xhc3NpZmljYXRpb24gKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX2NhdXNhbE5ldE1vZGVsc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9jYXVzYWxOZXRNb2RlbHMgKi8gXCIuL3NyYy9jYXVzYWxOZXRNb2RlbHMuanNcIik7XG4vKiBoYXJtb255IHJlZXhwb3J0IChzYWZlKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJjYXVzYWxOZXRNb2RlbHNcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBfY2F1c2FsTmV0TW9kZWxzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19bXCJkZWZhdWx0XCJdOyB9KTtcblxuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9tb2RlbF9taXhpbnNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vbW9kZWwubWl4aW5zICovIFwiLi9zcmMvbW9kZWwubWl4aW5zLmpzXCIpO1xuLyogaGFybW9ueSByZWV4cG9ydCAoc2FmZSkgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiTW9kZWxNaXhpbnNcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBfbW9kZWxfbWl4aW5zX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19bXCJkZWZhdWx0XCJdOyB9KTtcblxuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9iYXNlTW9kZWxfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vYmFzZU1vZGVsICovIFwiLi9zcmMvYmFzZU1vZGVsLmpzXCIpO1xuLyogaGFybW9ueSByZWV4cG9ydCAoc2FmZSkgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiQmFzZU1vZGVsXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gX2Jhc2VNb2RlbF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fW1wiZGVmYXVsdFwiXTsgfSk7XG5cbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfc2luZ2xlTGFibGVDbGFzc2lmaWNhdGlvbl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfM19fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9zaW5nbGVMYWJsZUNsYXNzaWZpY2F0aW9uICovIFwiLi9zcmMvc2luZ2xlTGFibGVDbGFzc2lmaWNhdGlvbi5qc1wiKTtcbi8qIGhhcm1vbnkgcmVleHBvcnQgKHNhZmUpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcIlNpbmdsZUxhYmVsQ2xhc3NpZmljYXRpb25cIiwgZnVuY3Rpb24oKSB7IHJldHVybiBfc2luZ2xlTGFibGVDbGFzc2lmaWNhdGlvbl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfM19fW1wiZGVmYXVsdFwiXTsgfSk7XG5cblxuXG5cblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9tb2RlbC5taXhpbnMuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL21vZGVsLm1peGlucy5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgZXhwb3J0cyBwcm92aWRlZDogZGVmYXVsdCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbl9fd2VicGFja19yZXF1aXJlX18ucihfX3dlYnBhY2tfZXhwb3J0c19fKTtcbmNvbnN0IE1vZGVsTWl4aW5zID0gQmFzZVBpcGVsaW5lQ2xhc3MgPT4gY2xhc3MgZXh0ZW5kcyBCYXNlUGlwZWxpbmVDbGFzcyB7XG4gIGdldCBMb3NzTW9kZWwoKSB7XG4gICAgaWYgKCF0aGlzLm5ldE1vZGVsKSB7XG4gICAgICB0aHJvdyBFcnJvcignbmV0TW9kZWwgaXMgbm90IHNldCcpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLm5ldE1vZGVsLkxvc3M7XG4gIH1cblxuICBnZXQgRml0TW9kZWwoKSB7XG4gICAgaWYgKCF0aGlzLm5ldE1vZGVsKSB7XG4gICAgICB0aHJvdyBFcnJvcignbmV0TW9kZWwgaXMgbm90IHNldCcpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLm5ldE1vZGVsLkZpdDtcbiAgfVxuXG4gIGdldCBPbmVIb3RQcmVkaWN0TW9kZWwoKSB7XG4gICAgaWYgKCF0aGlzLm5ldE1vZGVsKSB7XG4gICAgICB0aHJvdyBFcnJvcignbmV0TW9kZWwgaXMgbm90IHNldCcpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLm5ldE1vZGVsLk9uZUhvdFByZWRpY3Q7XG4gIH1cblxuICBnZXQgUHJlZGljdE1vZGVsKCkge1xuICAgIGlmICghdGhpcy5uZXRNb2RlbCkge1xuICAgICAgdGhyb3cgRXJyb3IoJ25ldE1vZGVsIGlzIG5vdCBzZXQnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5uZXRNb2RlbC5QcmVkaWN0O1xuICB9XG5cbiAgZ2V0IEVuY29kZU1vZGVsKCkge1xuICAgIGlmICghdGhpcy5uZXRNb2RlbCkge1xuICAgICAgdGhyb3cgRXJyb3IoJ25ldE1vZGVsIGlzIG5vdCBzZXQnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5uZXRNb2RlbC5FbmNvZGU7XG4gIH1cblxuICBnZXQgRGVjb2RlTW9kZWwoKSB7XG4gICAgaWYgKCF0aGlzLm5ldE1vZGVsKSB7XG4gICAgICB0aHJvdyBFcnJvcignbmV0TW9kZWwgaXMgbm90IHNldCcpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLm5ldE1vZGVsLkRlY29kZTtcbiAgfVxuXG4gIGdldCBNb2RlbCgpIHtcbiAgICBpZiAoIXRoaXMubmV0TW9kZWwpIHtcbiAgICAgIHRocm93IEVycm9yKCduZXRNb2RlbCBpcyBub3Qgc2V0Jyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMubmV0TW9kZWw7XG4gIH1cblxuICBzZXQgTW9kZWwobW9kZWwpIHtcbiAgICB0aGlzLm5ldE1vZGVsID0gbW9kZWw7XG4gIH1cblxuICBzZXRCeUNvbmZpZyhwaXBlbGluZUNvbmZpZykge1xuICAgIGlmIChzdXBlci5zZXRCeUNvbmZpZykge1xuICAgICAgc3VwZXIuc2V0QnlDb25maWcocGlwZWxpbmVDb25maWcpO1xuICAgIH1cblxuICAgIHRoaXMuTG9nZ2VyLmdyb3VwQmVnaW4oJ3NldCBNb2RlbCBieSBjb25maWcnKTtcbiAgICBjb25zdCB7XG4gICAgICBNb2RlbFxuICAgIH0gPSBwaXBlbGluZUNvbmZpZy5OZXQ7XG5cbiAgICBpZiAoIU1vZGVsKSB7XG4gICAgICB0aHJvdyBFcnJvcihgTW9kZWwgaXMgbm90IHNldCBpbiAke0pTT04uc3RyaW5nbGlmeShwaXBlbGluZUNvbmZpZyl9YCk7XG4gICAgfVxuXG4gICAgTW9kZWwuTGF5ZXJSdW5uZXIgPSB0aGlzLkxheWVyUnVubmVyO1xuICAgIHRoaXMuTW9kZWwgPSBNb2RlbDtcbiAgICB0aGlzLkxvZ2dlci5ncm91cEVuZCgpO1xuICB9XG5cbn07XG5cbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gX193ZWJwYWNrX2V4cG9ydHNfX1tcImRlZmF1bHRcIl0gPSAoTW9kZWxNaXhpbnMpO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9zaW5nbGVMYWJsZUNsYXNzaWZpY2F0aW9uLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvc2luZ2xlTGFibGVDbGFzc2lmaWNhdGlvbi5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIGV4cG9ydHMgcHJvdmlkZWQ6IGRlZmF1bHQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX2Jhc2VNb2RlbF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9iYXNlTW9kZWwgKi8gXCIuL3NyYy9iYXNlTW9kZWwuanNcIik7XG5cblxuY2xhc3MgU2luZ2xlTGFiZWxDbGFzc2lmaWNhdGlvbiBleHRlbmRzIF9iYXNlTW9kZWxfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX1tcImRlZmF1bHRcIl0ge1xuICBjb25zdHJ1Y3RvcihudW1DbGFzcykge1xuICAgIHN1cGVyKCk7XG5cbiAgICBpZiAobnVtQ2xhc3MgPiAwKSB7XG4gICAgICB0aGlzLm51bUNsYXNzID0gbnVtQ2xhc3M7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IEVycm9yKGBleHBlY3QgbnVtY2xhc3MsIGdldCAke251bUNsYXNzfWApO1xuICAgIH1cbiAgfVxuXG4gIHNldCBMYXllclJ1bm5lcihsYXllclJ1bm5lcikge1xuICAgIGxldCB7XG4gICAgICBQcmVkaWN0b3JcbiAgICB9ID0gbGF5ZXJSdW5uZXI7XG4gICAgdGhpcy5ydW5uZXIgPSB7XG4gICAgICBQcmVkaWN0b3JcbiAgICB9O1xuICB9XG5cbiAgZ2V0IExheWVyUnVubmVyKCkge1xuICAgIGlmICghdGhpcy5ydW5uZXIpIHtcbiAgICAgIHRocm93IEVycm9yKCdydW5uZXIgaXMgbm90IHNldCcpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnJ1bm5lcjtcbiAgfVxuXG4gIGdldCBGaXQoKSB7XG4gICAgY29uc3Qge1xuICAgICAgUHJlZGljdG9yXG4gICAgfSA9IHRoaXMuTGF5ZXJSdW5uZXI7XG4gICAgcmV0dXJuIGlucHV0VGVuc29yID0+IHtcbiAgICAgIGxldCBvdXRQdXRUZW5zb3IgPSBQcmVkaWN0b3IoaW5wdXRUZW5zb3IpO1xuICAgICAgbGV0IGxvZ1Byb2IgPSBvdXRQdXRUZW5zb3Iuc3ViKG91dFB1dFRlbnNvci5sb2dTdW1FeHAoMSwgdHJ1ZSkpO1xuICAgICAgcmV0dXJuIGxvZ1Byb2I7XG4gICAgfTtcbiAgfVxuXG4gIGdldCBQcmVkaWN0KCkge1xuICAgIGNvbnN0IEZpdCA9IHRoaXMuRml0O1xuICAgIHJldHVybiBpbnB1dFRlbnNvciA9PiB7XG4gICAgICBsZXQgbG9nUHJvYiA9IEZpdChpbnB1dFRlbnNvcik7XG4gICAgICBsZXQgcHJlZGljdGVkQ2xhc3MgPSBsb2dQcm9iLmFyZ01heCgxKTtcbiAgICAgIHJldHVybiBwcmVkaWN0ZWRDbGFzcztcbiAgICB9O1xuICB9XG5cbiAgZ2V0IE9uZUhvdFByZWRpY3QoKSB7XG4gICAgY29uc3QgUHJlZGljdCA9IHRoaXMuUHJlZGljdDtcbiAgICByZXR1cm4gaW5wdXRUZW5zb3IgPT4ge1xuICAgICAgbGV0IHByZWRpY3RlZENsYXNzID0gUHJlZGljdChpbnB1dFRlbnNvcik7XG4gICAgICBsZXQgb25lSG90UHJlZGljdCA9IHRoaXMuVC5vbmVIb3QocHJlZGljdGVkQ2xhc3MsIHRoaXMubnVtQ2xhc3MpO1xuICAgICAgcmV0dXJuIG9uZUhvdFByZWRpY3Q7XG4gICAgfTtcbiAgfVxuXG4gIGdldCBMb3NzKCkge1xuICAgIGNvbnN0IEZpdCA9IHRoaXMuRml0O1xuICAgIHJldHVybiAoaW5wdXRUZW5zb3IsIGxhYmVsVGVuc29yKSA9PiB7XG4gICAgICBsZXQgbG9nUHJvYiA9IEZpdChpbnB1dFRlbnNvcik7XG4gICAgICBsZXQgbGlrZWxpaG9vZCA9IGxvZ1Byb2IubmVnKCkubXVsKGxhYmVsVGVuc29yKTtcbiAgICAgIGxldCBsb3NzID0gbGlrZWxpaG9vZC5zdW0oMSkubWVhbigpO1xuICAgICAgcmV0dXJuIGxvc3M7XG4gICAgfTtcbiAgfVxuXG59XG5cbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gX193ZWJwYWNrX2V4cG9ydHNfX1tcImRlZmF1bHRcIl0gPSAoU2luZ2xlTGFiZWxDbGFzc2lmaWNhdGlvbik7XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcImNhdXNhbC1uZXQuY29yZVwiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiBleHRlcm5hbCBcImNhdXNhbC1uZXQuY29yZVwiICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X2NvcmVfXztcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiY2F1c2FsLW5ldC51dGlsc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogZXh0ZXJuYWwgXCJjYXVzYWwtbmV0LnV0aWxzXCIgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3V0aWxzX187XG5cbi8qKiovIH0pXG5cbi8qKioqKiovIH0pO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbmRsWW5CaFkyczZMeTlBWTJGMWMyRnNUbVYwTDIxdlpHVnNjeTkzWldKd1lXTnJMM1Z1YVhabGNuTmhiRTF2WkhWc1pVUmxabWx1YVhScGIyNGlMQ0ozWldKd1lXTnJPaTh2UUdOaGRYTmhiRTVsZEM5dGIyUmxiSE12ZDJWaWNHRmpheTlpYjI5MGMzUnlZWEFpTENKM1pXSndZV05yT2k4dlFHTmhkWE5oYkU1bGRDOXRiMlJsYkhNdkxpOXpjbU12WW1GelpVMXZaR1ZzTG1weklpd2lkMlZpY0dGamF6b3ZMMEJqWVhWellXeE9aWFF2Ylc5a1pXeHpMeTR2YzNKakwyTmhkWE5oYkU1bGRFMXZaR1ZzY3k1cWN5SXNJbmRsWW5CaFkyczZMeTlBWTJGMWMyRnNUbVYwTDIxdlpHVnNjeTh1TDNOeVl5OXBibVJsZUM1cWN5SXNJbmRsWW5CaFkyczZMeTlBWTJGMWMyRnNUbVYwTDIxdlpHVnNjeTh1TDNOeVl5OXRiMlJsYkM1dGFYaHBibk11YW5NaUxDSjNaV0p3WVdOck9pOHZRR05oZFhOaGJFNWxkQzl0YjJSbGJITXZMaTl6Y21NdmMybHVaMnhsVEdGaWJHVkRiR0Z6YzJsbWFXTmhkR2x2Ymk1cWN5SXNJbmRsWW5CaFkyczZMeTlBWTJGMWMyRnNUbVYwTDIxdlpHVnNjeTlsZUhSbGNtNWhiQ0JjSW1OaGRYTmhiQzF1WlhRdVkyOXlaVndpSWl3aWQyVmljR0ZqYXpvdkwwQmpZWFZ6WVd4T1pYUXZiVzlrWld4ekwyVjRkR1Z5Ym1Gc0lGd2lZMkYxYzJGc0xXNWxkQzUxZEdsc2Mxd2lJbDBzSW01aGJXVnpJanBiSWtKaGMyVk5iMlJsYkNJc0lsUmxibk52Y2lJc0ltTnZibk4wY25WamRHOXlJaXdpYlc5a1pXeE9ZVzFsSWl3aVRHRjVaWEpTZFc1dVpYSWlMQ0p5ZFc1dVpYSWlMQ0pGY25KdmNpSXNJbVpwZENJc0lteHZjM01pTENKd2NtVmthV04wSWl3aWIyNWxTRzkwVUhKbFpHbGpkQ0lzSWtOaGRYTmhiRTVsZEUxdlpHVnNjeUlzSW5Cc1lYUm1iM0p0SWl3aWJXbDRWMmwwYUNJc0lrSmhjMlZVWlc1emIzSWlMQ0pqYkdGemMybG1hV05oZEdsdmJpSXNJbTUxYlVOc1lYTnpJaXdpYlc5a1pXd2lMQ0pUYVc1bmJHVk1ZV0psYkVOc1lYTnphV1pwWTJGMGFXOXVJaXdpVFc5a1pXeE5hWGhwYm5NaUxDSkNZWE5sVUdsd1pXeHBibVZEYkdGemN5SXNJa3h2YzNOTmIyUmxiQ0lzSW01bGRFMXZaR1ZzSWl3aVRHOXpjeUlzSWtacGRFMXZaR1ZzSWl3aVJtbDBJaXdpVDI1bFNHOTBVSEpsWkdsamRFMXZaR1ZzSWl3aVQyNWxTRzkwVUhKbFpHbGpkQ0lzSWxCeVpXUnBZM1JOYjJSbGJDSXNJbEJ5WldScFkzUWlMQ0pGYm1OdlpHVk5iMlJsYkNJc0lrVnVZMjlrWlNJc0lrUmxZMjlrWlUxdlpHVnNJaXdpUkdWamIyUmxJaXdpVFc5a1pXd2lMQ0p6WlhSQ2VVTnZibVpwWnlJc0luQnBjR1ZzYVc1bFEyOXVabWxuSWl3aVRHOW5aMlZ5SWl3aVozSnZkWEJDWldkcGJpSXNJazVsZENJc0lrcFRUMDRpTENKemRISnBibWRzYVdaNUlpd2laM0p2ZFhCRmJtUWlMQ0pzWVhsbGNsSjFibTVsY2lJc0lsQnlaV1JwWTNSdmNpSXNJbWx1Y0hWMFZHVnVjMjl5SWl3aWIzVjBVSFYwVkdWdWMyOXlJaXdpYkc5blVISnZZaUlzSW5OMVlpSXNJbXh2WjFOMWJVVjRjQ0lzSW5CeVpXUnBZM1JsWkVOc1lYTnpJaXdpWVhKblRXRjRJaXdpVkNJc0ltOXVaVWh2ZENJc0lteGhZbVZzVkdWdWMyOXlJaXdpYkdsclpXeHBhRzl2WkNJc0ltNWxaeUlzSW0xMWJDSXNJbk4xYlNJc0ltMWxZVzRpWFN3aWJXRndjR2x1WjNNaU9pSkJRVUZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEVOQlFVTTdRVUZEUkN4UE8wRkRWa0U3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPenRCUVVkQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeHJSRUZCTUVNc1owTkJRV2RETzBGQlF6RkZPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRXNaMFZCUVhkRUxHdENRVUZyUWp0QlFVTXhSVHRCUVVOQkxIbEVRVUZwUkN4alFVRmpPMEZCUXk5RU96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4cFJFRkJlVU1zYVVOQlFXbERPMEZCUXpGRkxIZElRVUZuU0N4dFFrRkJiVUlzUlVGQlJUdEJRVU55U1R0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEcxRFFVRXlRaXd3UWtGQk1FSXNSVUZCUlR0QlFVTjJSQ3g1UTBGQmFVTXNaVUZCWlR0QlFVTm9SRHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVN3NFJFRkJjMFFzSzBSQlFTdEVPenRCUVVWeVNEdEJRVU5CT3pzN1FVRkhRVHRCUVVOQk96czdPenM3T3pzN096czdPMEZEYkVaQk8wRkJRVUU3UVVGQlFUdEJRVUZCT3p0QlFVTkJMRTFCUVUxQkxGTkJRVTRzVTBGQmQwSkRMSE5FUVVGNFFpeERRVUU0UWp0QlFVTXhRa01zWVVGQlZ5eEhRVUZGTzBGQlExUTdRVUZEUVN4VFFVRkxReXhUUVVGTUxFZEJRV2xDTEVWQlFXcENPMEZCUTBnN08wRkJSVVFzVFVGQlNVTXNWMEZCU2l4RFFVRm5Ra01zVFVGQmFFSXNSVUZCZFVJN1FVRkRia0lzVlVGQlRVTXNTMEZCU3l4RFFVRkRMRzlDUVVGRUxFTkJRVmc3UVVGRFNEczdRVUZGUkN4TlFVRkpSaXhYUVVGS0xFZEJRV2xDTzBGQlEySXNWVUZCVFVVc1MwRkJTeXhEUVVGRExHOUNRVUZFTEVOQlFWZzdRVUZEU0RzN1FVRkZSRU1zUzBGQlJ5eEhRVUZGTzBGQlEwUXNWVUZCVFVRc1MwRkJTeXhEUVVGRExHOUNRVUZFTEVOQlFWZzdRVUZEU0RzN1FVRkZSRVVzVFVGQlNTeEhRVUZGTzBGQlEwWXNWVUZCVFVZc1MwRkJTeXhEUVVGRExHOUNRVUZFTEVOQlFWZzdRVUZEU0RzN1FVRkZSRWNzVTBGQlR5eEhRVUZGTzBGQlEwd3NWVUZCVFVnc1MwRkJTeXhEUVVGRExHOUNRVUZFTEVOQlFWZzdRVUZEU0RzN1FVRkRSRWtzWlVGQllTeEhRVUZGTzBGQlExZ3NWVUZCVFVvc1MwRkJTeXhEUVVGRExHOUNRVUZFTEVOQlFWZzdRVUZEU0RzN1FVRXpRbmxDT3p0QlFUaENaazRzZDBWQlFXWXNSVHM3T3pzN096czdPenM3TzBGREwwSkJPMEZCUVVFN1FVRkJRVHRCUVVGQk8wRkJRVUU3UVVGQlFUdEJRVUZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPenM3T3pzN096dEJRVTlCTEUxQlFVMVhMR1ZCUVU0c1UwRkJPRUpETEhsRVFVRlJMRU5CUVVORExFOUJRVlFzUTBGQmEwSkRMSE5FUVVGc1FpeEZRVUU0UWl4RlFVRTVRaXhEUVVFNVFpeERRVUZuUlR0QlFVTTFSRm9zWVVGQlZ5eEhRVUZGTzBGQlExUTdRVUZEU0RzN1FVRkZSR0VzWjBKQlFXTXNRMEZCUTBNc1VVRkJSQ3hGUVVGVk8wRkJRM0JDTEZOQlFVdERMRXRCUVV3c1IwRkJZU3hKUVVGSlF5eHJSVUZCU2l4RFFVRTRRa1lzVVVGQk9VSXNRMEZCWWp0QlFVTkJMRmRCUVU4c1MwRkJTME1zUzBGQldqdEJRVU5JT3p0QlFWSXlSRHM3UVVGVmFrUXNiVVZCUVVsT0xHVkJRVW9zUlVGQlppeEZPenM3T3pzN096czdPenM3UVVOd1FrRTdRVUZCUVR0QlFVRkJPMEZCUVVFN1FVRkJRVHRCUVVGQk8wRkJRVUU3UVVGQlFUdEJRVUZCTzBGQlFVRTdRVUZCUVR0QlFVRkJPMEZCUVVFN1FVRkJRVHRCUVVOQk8wRkJSVUU3T3pzN096czdPenM3T3pzN1FVTklRVHRCUVVGQkxFMUJRVTFSTEZkQlFWY3NSMEZCU1VNc2FVSkJRVVFzU1VGQmMwSXNZMEZCWTBFc2FVSkJRV1FzUTBGQkswSTdRVUZEY2tVc1RVRkJTVU1zVTBGQlNpeEhRVUZsTzBGQlExZ3NVVUZCUnl4RFFVRkRMRXRCUVV0RExGRkJRVlFzUlVGQmEwSTdRVUZEWkN4WlFVRk5hRUlzUzBGQlN5eERRVUZETEhGQ1FVRkVMRU5CUVZnN1FVRkRTRHM3UVVGRFJDeFhRVUZQTEV0QlFVdG5RaXhSUVVGTUxFTkJRV05ETEVsQlFYSkNPMEZCUTBnN08wRkJSVVFzVFVGQlNVTXNVVUZCU2l4SFFVRmpPMEZCUTFZc1VVRkJSeXhEUVVGRExFdEJRVXRHTEZGQlFWUXNSVUZCYTBJN1FVRkRaQ3haUVVGTmFFSXNTMEZCU3l4RFFVRkRMSEZDUVVGRUxFTkJRVmc3UVVGRFNEczdRVUZEUkN4WFFVRlBMRXRCUVV0blFpeFJRVUZNTEVOQlFXTkhMRWRCUVhKQ08wRkJRMGc3TzBGQlJVUXNUVUZCU1VNc2EwSkJRVW9zUjBGQmQwSTdRVUZEY0VJc1VVRkJSeXhEUVVGRExFdEJRVXRLTEZGQlFWUXNSVUZCYTBJN1FVRkRaQ3haUVVGTmFFSXNTMEZCU3l4RFFVRkRMSEZDUVVGRUxFTkJRVmc3UVVGRFNEczdRVUZEUkN4WFFVRlBMRXRCUVV0blFpeFJRVUZNTEVOQlFXTkxMR0ZCUVhKQ08wRkJRMGc3TzBGQlJVUXNUVUZCU1VNc1dVRkJTaXhIUVVGclFqdEJRVU5rTEZGQlFVY3NRMEZCUXl4TFFVRkxUaXhSUVVGVUxFVkJRV3RDTzBGQlEyUXNXVUZCVFdoQ0xFdEJRVXNzUTBGQlF5eHhRa0ZCUkN4RFFVRllPMEZCUTBnN08wRkJRMFFzVjBGQlR5eExRVUZMWjBJc1VVRkJUQ3hEUVVGalR5eFBRVUZ5UWp0QlFVTklPenRCUVVWRUxFMUJRVWxETEZkQlFVb3NSMEZCYVVJN1FVRkRZaXhSUVVGSExFTkJRVU1zUzBGQlMxSXNVVUZCVkN4RlFVRnJRanRCUVVOa0xGbEJRVTFvUWl4TFFVRkxMRU5CUVVNc2NVSkJRVVFzUTBGQldEdEJRVU5JT3p0QlFVTkVMRmRCUVU4c1MwRkJTMmRDTEZGQlFVd3NRMEZCWTFNc1RVRkJja0k3UVVGRFNEczdRVUZGUkN4TlFVRkpReXhYUVVGS0xFZEJRV2xDTzBGQlEySXNVVUZCUnl4RFFVRkRMRXRCUVV0V0xGRkJRVlFzUlVGQmEwSTdRVUZEWkN4WlFVRk5hRUlzUzBGQlN5eERRVUZETEhGQ1FVRkVMRU5CUVZnN1FVRkRTRHM3UVVGRFJDeFhRVUZQTEV0QlFVdG5RaXhSUVVGTUxFTkJRV05YTEUxQlFYSkNPMEZCUTBnN08wRkJSMFFzVFVGQlNVTXNTMEZCU2l4SFFVRlhPMEZCUTFBc1VVRkJSeXhEUVVGRExFdEJRVXRhTEZGQlFWUXNSVUZCYTBJN1FVRkRaQ3haUVVGTmFFSXNTMEZCU3l4RFFVRkRMSEZDUVVGRUxFTkJRVmc3UVVGRFNEczdRVUZEUkN4WFFVRlBMRXRCUVV0blFpeFJRVUZhTzBGQlEwZzdPMEZCUjBRc1RVRkJTVmtzUzBGQlNpeERRVUZWYWtJc1MwRkJWaXhGUVVGblFqdEJRVU5hTEZOQlFVdExMRkZCUVV3c1IwRkJaMEpNTEV0QlFXaENPMEZCUTBnN08wRkJSVVJyUWl4aFFVRlhMRU5CUVVORExHTkJRVVFzUlVGQlowSTdRVUZEZGtJc1VVRkJSeXhOUVVGTlJDeFhRVUZVTEVWQlFYRkNPMEZCUTJwQ0xGbEJRVTFCTEZkQlFVNHNRMEZCYTBKRExHTkJRV3hDTzBGQlEwZzdPMEZCUTBRc1UwRkJTME1zVFVGQlRDeERRVUZaUXl4VlFVRmFMRU5CUVhWQ0xIRkNRVUYyUWp0QlFVTkJMRlZCUVUwN1FVRkJSVW83UVVGQlJpeFJRVUZaUlN4alFVRmpMRU5CUVVOSExFZEJRV3BET3p0QlFVTkJMRkZCUVVjc1EwRkJRMHdzUzBGQlNpeEZRVUZWTzBGQlEwNHNXVUZCVFRWQ0xFdEJRVXNzUTBGQlJTeDFRa0ZCYzBKclF5eEpRVUZKTEVOQlFVTkRMRlZCUVV3c1EwRkJaMEpNTEdOQlFXaENMRU5CUVdkRExFVkJRWGhFTEVOQlFWZzdRVUZEU0RzN1FVRkRSRVlzVTBGQlN5eERRVUZET1VJc1YwRkJUaXhIUVVGdlFpeExRVUZMUVN4WFFVRjZRanRCUVVOQkxGTkJRVXM0UWl4TFFVRk1MRWRCUVdGQkxFdEJRV0k3UVVGRFFTeFRRVUZMUnl4TlFVRk1MRU5CUVZsTExGRkJRVm83UVVGRFNEczdRVUZ3Ulc5RkxFTkJRWHBGT3p0QlFYVkZaWFpDTERCRlFVRm1MRVU3T3pzN096czdPenM3T3p0QlEzWkZRVHRCUVVGQk8wRkJRVUU3TzBGQlJVRXNUVUZCVFVRc2VVSkJRVTRzVTBGQmQwTnNRaXhyUkVGQmVFTXNRMEZCYVVRN1FVRkROME5GTEdGQlFWY3NRMEZCUTJNc1VVRkJSQ3hGUVVGVk8wRkJRMnBDT3p0QlFVTkJMRkZCUVVkQkxGRkJRVkVzUjBGQlJ5eERRVUZrTEVWQlFXZENPMEZCUTFvc1YwRkJTMEVzVVVGQlRDeEhRVUZuUWtFc1VVRkJhRUk3UVVGRFNDeExRVVpFTEUxQlIwazdRVUZEUVN4WlFVRk5WaXhMUVVGTExFTkJRVVVzZDBKQlFYVkNWU3hSUVVGVExFVkJRV3hETEVOQlFWZzdRVUZEU0R0QlFVTktPenRCUVVWRUxFMUJRVWxhTEZkQlFVb3NRMEZCWjBKMVF5eFhRVUZvUWl4RlFVRTBRanRCUVVONFFpeFJRVUZKTzBGQlFVVkRPMEZCUVVZc1VVRkJaMEpFTEZkQlFYQkNPMEZCUTBFc1UwRkJTM1JETEUxQlFVd3NSMEZCWXp0QlFVRkZkVU03UVVGQlJpeExRVUZrTzBGQlEwZzdPMEZCUlVRc1RVRkJTWGhETEZkQlFVb3NSMEZCYVVJN1FVRkRZaXhSUVVGSExFTkJRVU1zUzBGQlMwTXNUVUZCVkN4RlFVRm5RanRCUVVOYUxGbEJRVTFETEV0QlFVc3NRMEZCUXl4dFFrRkJSQ3hEUVVGWU8wRkJRMGc3TzBGQlEwUXNWMEZCVHl4TFFVRkxSQ3hOUVVGYU8wRkJRMGc3TzBGQlJVUXNUVUZCU1c5Q0xFZEJRVW9zUjBGQlV6dEJRVU5NTEZWQlFVMDdRVUZCUlcxQ08wRkJRVVlzVVVGQlowSXNTMEZCUzNoRExGZEJRVE5DTzBGQlEwRXNWMEZCVVhsRExGZEJRVVFzU1VGQlpUdEJRVU5zUWl4VlFVRkpReXhaUVVGWkxFZEJRVWRHTEZOQlFWTXNRMEZCUTBNc1YwRkJSQ3hEUVVFMVFqdEJRVU5CTEZWQlFVbEZMRTlCUVU4c1IwRkJSMFFzV1VGQldTeERRVUZEUlN4SFFVRmlMRU5CUVdsQ1JpeFpRVUZaTEVOQlFVTkhMRk5CUVdJc1EwRkJkVUlzUTBGQmRrSXNSVUZCTUVJc1NVRkJNVUlzUTBGQmFrSXNRMEZCWkR0QlFVTkJMR0ZCUVU5R0xFOUJRVkE3UVVGRFNDeExRVXBFTzBGQlMwZzdPMEZCUlVRc1RVRkJTV3hDTEU5QlFVb3NSMEZCWVR0QlFVTlVMRlZCUVUxS0xFZEJRVWNzUjBGQlJ5eExRVUZMUVN4SFFVRnFRanRCUVVOQkxGZEJRVkZ2UWl4WFFVRkVMRWxCUVdVN1FVRkRiRUlzVlVGQlNVVXNUMEZCVHl4SFFVRkhkRUlzUjBGQlJ5eERRVUZEYjBJc1YwRkJSQ3hEUVVGcVFqdEJRVU5CTEZWQlFVbExMR05CUVdNc1IwRkJSMGdzVDBGQlR5eERRVUZEU1N4TlFVRlNMRU5CUVdVc1EwRkJaaXhEUVVGeVFqdEJRVU5CTEdGQlFVOUVMR05CUVZBN1FVRkRTQ3hMUVVwRU8wRkJTMGc3TzBGQlJVUXNUVUZCU1haQ0xHRkJRVW9zUjBGQmJVSTdRVUZEWml4VlFVRk5SU3hQUVVGUExFZEJRVWNzUzBGQlMwRXNUMEZCY2tJN1FVRkRRU3hYUVVGUlowSXNWMEZCUkN4SlFVRmxPMEZCUTJ4Q0xGVkJRVWxMTEdOQlFXTXNSMEZCUjNKQ0xFOUJRVThzUTBGQlEyZENMRmRCUVVRc1EwRkJOVUk3UVVGRFFTeFZRVUZKYmtNc1lVRkJZU3hIUVVGSExFdEJRVXN3UXl4RFFVRk1MRU5CUVU5RExFMUJRVkFzUTBGQlkwZ3NZMEZCWkN4RlFVRTRRaXhMUVVGTGJFTXNVVUZCYmtNc1EwRkJjRUk3UVVGRFFTeGhRVUZQVGl4aFFVRlFPMEZCUTBnc1MwRktSRHRCUVV0SU96dEJRVU5FTEUxQlFVbGhMRWxCUVVvc1IwRkJWVHRCUVVOT0xGVkJRVTFGTEVkQlFVY3NSMEZCUnl4TFFVRkxRU3hIUVVGcVFqdEJRVU5CTEZkQlFVOHNRMEZCUTI5Q0xGZEJRVVFzUlVGQlkxTXNWMEZCWkN4TFFVRTBRanRCUVVNdlFpeFZRVUZKVUN4UFFVRlBMRWRCUVVkMFFpeEhRVUZITEVOQlFVTnZRaXhYUVVGRUxFTkJRV3BDTzBGQlEwRXNWVUZCU1ZVc1ZVRkJWU3hIUVVGSFVpeFBRVUZQTEVOQlFVTlRMRWRCUVZJc1IwRkJZME1zUjBGQlpDeERRVUZyUWtnc1YwRkJiRUlzUTBGQmFrSTdRVUZEUVN4VlFVRkpPVU1zU1VGQlNTeEhRVUZISzBNc1ZVRkJWU3hEUVVGRFJ5eEhRVUZZTEVOQlFXVXNRMEZCWml4RlFVRnJRa01zU1VGQmJFSXNSVUZCV0R0QlFVTkJMR0ZCUVU5dVJDeEpRVUZRTzBGQlEwZ3NTMEZNUkR0QlFVMUlPenRCUVhwRU5FTTdPMEZCTWtSc1ExVXNkMFpCUVdZc1JUczdPenM3T3pzN096czdRVU0zUkVFc05rUTdPenM3T3pzN096czdPMEZEUVVFc09FUWlMQ0ptYVd4bElqb2lRR05oZFhOaGJFNWxkQzl0YjJSbGJITXVkMlZpTG1weklpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lLR1oxYm1OMGFXOXVJSGRsWW5CaFkydFZibWwyWlhKellXeE5iMlIxYkdWRVpXWnBibWwwYVc5dUtISnZiM1FzSUdaaFkzUnZjbmtwSUh0Y2JseDBhV1lvZEhsd1pXOW1JR1Y0Y0c5eWRITWdQVDA5SUNkdlltcGxZM1FuSUNZbUlIUjVjR1Z2WmlCdGIyUjFiR1VnUFQwOUlDZHZZbXBsWTNRbktWeHVYSFJjZEcxdlpIVnNaUzVsZUhCdmNuUnpJRDBnWm1GamRHOXllU2h5WlhGMWFYSmxLRndpWTJGMWMyRnNMVzVsZEM1amIzSmxYQ0lwTENCeVpYRjFhWEpsS0Z3aVkyRjFjMkZzTFc1bGRDNTFkR2xzYzF3aUtTazdYRzVjZEdWc2MyVWdhV1lvZEhsd1pXOW1JR1JsWm1sdVpTQTlQVDBnSjJaMWJtTjBhVzl1SnlBbUppQmtaV1pwYm1VdVlXMWtLVnh1WEhSY2RHUmxabWx1WlNoYlhDSmpZWFZ6WVd3dGJtVjBMbU52Y21WY0lpd2dYQ0pqWVhWellXd3RibVYwTG5WMGFXeHpYQ0pkTENCbVlXTjBiM0o1S1R0Y2JseDBaV3h6WlNCcFppaDBlWEJsYjJZZ1pYaHdiM0owY3lBOVBUMGdKMjlpYW1WamRDY3BYRzVjZEZ4MFpYaHdiM0owYzF0Y0lrQmpZWFZ6WVd4T1pYUXZiVzlrWld4elhDSmRJRDBnWm1GamRHOXllU2h5WlhGMWFYSmxLRndpWTJGMWMyRnNMVzVsZEM1amIzSmxYQ0lwTENCeVpYRjFhWEpsS0Z3aVkyRjFjMkZzTFc1bGRDNTFkR2xzYzF3aUtTazdYRzVjZEdWc2MyVmNibHgwWEhSeWIyOTBXMXdpUUdOaGRYTmhiRTVsZEM5dGIyUmxiSE5jSWwwZ1BTQm1ZV04wYjNKNUtISnZiM1JiWENKallYVnpZV3d0Ym1WMExtTnZjbVZjSWwwc0lISnZiM1JiWENKallYVnpZV3d0Ym1WMExuVjBhV3h6WENKZEtUdGNibjBwS0hSb2FYTXNJR1oxYm1OMGFXOXVLRjlmVjBWQ1VFRkRTMTlGV0ZSRlVrNUJURjlOVDBSVlRFVmZZMkYxYzJGc1gyNWxkRjlqYjNKbFgxOHNJRjlmVjBWQ1VFRkRTMTlGV0ZSRlVrNUJURjlOVDBSVlRFVmZZMkYxYzJGc1gyNWxkRjkxZEdsc2MxOWZLU0I3WEc1eVpYUjFjbTRnSWl3aUlGeDBMeThnVkdobElHMXZaSFZzWlNCallXTm9aVnh1SUZ4MGRtRnlJR2x1YzNSaGJHeGxaRTF2WkhWc1pYTWdQU0I3ZlR0Y2JseHVJRngwTHk4Z1ZHaGxJSEpsY1hWcGNtVWdablZ1WTNScGIyNWNiaUJjZEdaMWJtTjBhVzl1SUY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4b2JXOWtkV3hsU1dRcElIdGNibHh1SUZ4MFhIUXZMeUJEYUdWamF5QnBaaUJ0YjJSMWJHVWdhWE1nYVc0Z1kyRmphR1ZjYmlCY2RGeDBhV1lvYVc1emRHRnNiR1ZrVFc5a2RXeGxjMXR0YjJSMWJHVkpaRjBwSUh0Y2JpQmNkRngwWEhSeVpYUjFjbTRnYVc1emRHRnNiR1ZrVFc5a2RXeGxjMXR0YjJSMWJHVkpaRjB1Wlhod2IzSjBjenRjYmlCY2RGeDBmVnh1SUZ4MFhIUXZMeUJEY21WaGRHVWdZU0J1WlhjZ2JXOWtkV3hsSUNoaGJtUWdjSFYwSUdsMElHbHVkRzhnZEdobElHTmhZMmhsS1Z4dUlGeDBYSFIyWVhJZ2JXOWtkV3hsSUQwZ2FXNXpkR0ZzYkdWa1RXOWtkV3hsYzF0dGIyUjFiR1ZKWkYwZ1BTQjdYRzRnWEhSY2RGeDBhVG9nYlc5a2RXeGxTV1FzWEc0Z1hIUmNkRngwYkRvZ1ptRnNjMlVzWEc0Z1hIUmNkRngwWlhod2IzSjBjem9nZTMxY2JpQmNkRngwZlR0Y2JseHVJRngwWEhRdkx5QkZlR1ZqZFhSbElIUm9aU0J0YjJSMWJHVWdablZ1WTNScGIyNWNiaUJjZEZ4MGJXOWtkV3hsYzF0dGIyUjFiR1ZKWkYwdVkyRnNiQ2h0YjJSMWJHVXVaWGh3YjNKMGN5d2diVzlrZFd4bExDQnRiMlIxYkdVdVpYaHdiM0owY3l3Z1gxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5azdYRzVjYmlCY2RGeDBMeThnUm14aFp5QjBhR1VnYlc5a2RXeGxJR0Z6SUd4dllXUmxaRnh1SUZ4MFhIUnRiMlIxYkdVdWJDQTlJSFJ5ZFdVN1hHNWNiaUJjZEZ4MEx5OGdVbVYwZFhKdUlIUm9aU0JsZUhCdmNuUnpJRzltSUhSb1pTQnRiMlIxYkdWY2JpQmNkRngwY21WMGRYSnVJRzF2WkhWc1pTNWxlSEJ2Y25Sek8xeHVJRngwZlZ4dVhHNWNiaUJjZEM4dklHVjRjRzl6WlNCMGFHVWdiVzlrZFd4bGN5QnZZbXBsWTNRZ0tGOWZkMlZpY0dGamExOXRiMlIxYkdWelgxOHBYRzRnWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtMGdQU0J0YjJSMWJHVnpPMXh1WEc0Z1hIUXZMeUJsZUhCdmMyVWdkR2hsSUcxdlpIVnNaU0JqWVdOb1pWeHVJRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1aklEMGdhVzV6ZEdGc2JHVmtUVzlrZFd4bGN6dGNibHh1SUZ4MEx5OGdaR1ZtYVc1bElHZGxkSFJsY2lCbWRXNWpkR2x2YmlCbWIzSWdhR0Z5Ylc5dWVTQmxlSEJ2Y25SelhHNGdYSFJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG1RZ1BTQm1kVzVqZEdsdmJpaGxlSEJ2Y25SekxDQnVZVzFsTENCblpYUjBaWElwSUh0Y2JpQmNkRngwYVdZb0lWOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVieWhsZUhCdmNuUnpMQ0J1WVcxbEtTa2dlMXh1SUZ4MFhIUmNkRTlpYW1WamRDNWtaV1pwYm1WUWNtOXdaWEowZVNobGVIQnZjblJ6TENCdVlXMWxMQ0I3SUdWdWRXMWxjbUZpYkdVNklIUnlkV1VzSUdkbGREb2daMlYwZEdWeUlIMHBPMXh1SUZ4MFhIUjlYRzRnWEhSOU8xeHVYRzRnWEhRdkx5QmtaV1pwYm1VZ1gxOWxjMDF2WkhWc1pTQnZiaUJsZUhCdmNuUnpYRzRnWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxuSWdQU0JtZFc1amRHbHZiaWhsZUhCdmNuUnpLU0I3WEc0Z1hIUmNkR2xtS0hSNWNHVnZaaUJUZVcxaWIyd2dJVDA5SUNkMWJtUmxabWx1WldRbklDWW1JRk41YldKdmJDNTBiMU4wY21sdVoxUmhaeWtnZTF4dUlGeDBYSFJjZEU5aWFtVmpkQzVrWldacGJtVlFjbTl3WlhKMGVTaGxlSEJ2Y25SekxDQlRlVzFpYjJ3dWRHOVRkSEpwYm1kVVlXY3NJSHNnZG1Gc2RXVTZJQ2ROYjJSMWJHVW5JSDBwTzF4dUlGeDBYSFI5WEc0Z1hIUmNkRTlpYW1WamRDNWtaV1pwYm1WUWNtOXdaWEowZVNobGVIQnZjblJ6TENBblgxOWxjMDF2WkhWc1pTY3NJSHNnZG1Gc2RXVTZJSFJ5ZFdVZ2ZTazdYRzRnWEhSOU8xeHVYRzRnWEhRdkx5QmpjbVZoZEdVZ1lTQm1ZV3RsSUc1aGJXVnpjR0ZqWlNCdlltcGxZM1JjYmlCY2RDOHZJRzF2WkdVZ0ppQXhPaUIyWVd4MVpTQnBjeUJoSUcxdlpIVnNaU0JwWkN3Z2NtVnhkV2x5WlNCcGRGeHVJRngwTHk4Z2JXOWtaU0FtSURJNklHMWxjbWRsSUdGc2JDQndjbTl3WlhKMGFXVnpJRzltSUhaaGJIVmxJR2x1ZEc4Z2RHaGxJRzV6WEc0Z1hIUXZMeUJ0YjJSbElDWWdORG9nY21WMGRYSnVJSFpoYkhWbElIZG9aVzRnWVd4eVpXRmtlU0J1Y3lCdlltcGxZM1JjYmlCY2RDOHZJRzF2WkdVZ0ppQTRmREU2SUdKbGFHRjJaU0JzYVd0bElISmxjWFZwY21WY2JpQmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1ZENBOUlHWjFibU4wYVc5dUtIWmhiSFZsTENCdGIyUmxLU0I3WEc0Z1hIUmNkR2xtS0cxdlpHVWdKaUF4S1NCMllXeDFaU0E5SUY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4b2RtRnNkV1VwTzF4dUlGeDBYSFJwWmlodGIyUmxJQ1lnT0NrZ2NtVjBkWEp1SUhaaGJIVmxPMXh1SUZ4MFhIUnBaaWdvYlc5a1pTQW1JRFFwSUNZbUlIUjVjR1Z2WmlCMllXeDFaU0E5UFQwZ0oyOWlhbVZqZENjZ0ppWWdkbUZzZFdVZ0ppWWdkbUZzZFdVdVgxOWxjMDF2WkhWc1pTa2djbVYwZFhKdUlIWmhiSFZsTzF4dUlGeDBYSFIyWVhJZ2JuTWdQU0JQWW1wbFkzUXVZM0psWVhSbEtHNTFiR3dwTzF4dUlGeDBYSFJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG5Jb2JuTXBPMXh1SUZ4MFhIUlBZbXBsWTNRdVpHVm1hVzVsVUhKdmNHVnlkSGtvYm5Nc0lDZGtaV1poZFd4MEp5d2dleUJsYm5WdFpYSmhZbXhsT2lCMGNuVmxMQ0IyWVd4MVpUb2dkbUZzZFdVZ2ZTazdYRzRnWEhSY2RHbG1LRzF2WkdVZ0ppQXlJQ1ltSUhSNWNHVnZaaUIyWVd4MVpTQWhQU0FuYzNSeWFXNW5KeWtnWm05eUtIWmhjaUJyWlhrZ2FXNGdkbUZzZFdVcElGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVaQ2h1Y3l3Z2EyVjVMQ0JtZFc1amRHbHZiaWhyWlhrcElIc2djbVYwZFhKdUlIWmhiSFZsVzJ0bGVWMDdJSDB1WW1sdVpDaHVkV3hzTENCclpYa3BLVHRjYmlCY2RGeDBjbVYwZFhKdUlHNXpPMXh1SUZ4MGZUdGNibHh1SUZ4MEx5OGdaMlYwUkdWbVlYVnNkRVY0Y0c5eWRDQm1kVzVqZEdsdmJpQm1iM0lnWTI5dGNHRjBhV0pwYkdsMGVTQjNhWFJvSUc1dmJpMW9ZWEp0YjI1NUlHMXZaSFZzWlhOY2JpQmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1YmlBOUlHWjFibU4wYVc5dUtHMXZaSFZzWlNrZ2UxeHVJRngwWEhSMllYSWdaMlYwZEdWeUlEMGdiVzlrZFd4bElDWW1JRzF2WkhWc1pTNWZYMlZ6VFc5a2RXeGxJRDljYmlCY2RGeDBYSFJtZFc1amRHbHZiaUJuWlhSRVpXWmhkV3gwS0NrZ2V5QnlaWFIxY200Z2JXOWtkV3hsV3lka1pXWmhkV3gwSjEwN0lIMGdPbHh1SUZ4MFhIUmNkR1oxYm1OMGFXOXVJR2RsZEUxdlpIVnNaVVY0Y0c5eWRITW9LU0I3SUhKbGRIVnliaUJ0YjJSMWJHVTdJSDA3WEc0Z1hIUmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1WkNoblpYUjBaWElzSUNkaEp5d2daMlYwZEdWeUtUdGNiaUJjZEZ4MGNtVjBkWEp1SUdkbGRIUmxjanRjYmlCY2RIMDdYRzVjYmlCY2RDOHZJRTlpYW1WamRDNXdjbTkwYjNSNWNHVXVhR0Z6VDNkdVVISnZjR1Z5ZEhrdVkyRnNiRnh1SUZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXZJRDBnWm5WdVkzUnBiMjRvYjJKcVpXTjBMQ0J3Y205d1pYSjBlU2tnZXlCeVpYUjFjbTRnVDJKcVpXTjBMbkJ5YjNSdmRIbHdaUzVvWVhOUGQyNVFjbTl3WlhKMGVTNWpZV3hzS0c5aWFtVmpkQ3dnY0hKdmNHVnlkSGtwT3lCOU8xeHVYRzRnWEhRdkx5QmZYM2RsWW5CaFkydGZjSFZpYkdsalgzQmhkR2hmWDF4dUlGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV3SUQwZ1hDSmNJanRjYmx4dVhHNGdYSFF2THlCTWIyRmtJR1Z1ZEhKNUlHMXZaSFZzWlNCaGJtUWdjbVYwZFhKdUlHVjRjRzl5ZEhOY2JpQmNkSEpsZEhWeWJpQmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZLRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1Y3lBOUlGd2lMaTl6Y21NdmFXNWtaWGd1YW5OY0lpazdYRzRpTENKcGJYQnZjblFnZXlCVVpXNXpiM0lnZlNCbWNtOXRJQ2RqWVhWellXd3RibVYwTG1OdmNtVW5PMXh1WTJ4aGMzTWdRbUZ6WlUxdlpHVnNJR1Y0ZEdWdVpITWdWR1Z1YzI5eWUxeHVJQ0FnSUdOdmJuTjBjblZqZEc5eUtDbDdYRzRnSUNBZ0lDQWdJSE4xY0dWeUtDazdYRzRnSUNBZ0lDQWdJSFJvYVhNdWJXOWtaV3hPWVcxbElEMGdKeWM3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdjMlYwSUV4aGVXVnlVblZ1Ym1WeUtISjFibTVsY2lsN1hHNGdJQ0FnSUNBZ0lIUm9jbTkzSUVWeWNtOXlLQ2RwYlhCc1pXMWxiblFnY21WeGRXbHlaV1FuS1R0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0JuWlhRZ1RHRjVaWEpTZFc1dVpYSW9LWHRjYmlBZ0lDQWdJQ0FnZEdoeWIzY2dSWEp5YjNJb0oybHRjR3hsYldWdWRDQnlaWEYxYVhKbFpDY3BPMXh1SUNBZ0lIMWNibHh1SUNBZ0lHWnBkQ2dwZTF4dUlDQWdJQ0FnSUNCMGFISnZkeUJGY25KdmNpZ25hVzF3YkdWdFpXNTBJSEpsY1hWcGNtVmtKeWs3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdiRzl6Y3lncGUxeHVJQ0FnSUNBZ0lDQjBhSEp2ZHlCRmNuSnZjaWduYVcxd2JHVnRaVzUwSUhKbGNYVnBjbVZrSnlrN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnY0hKbFpHbGpkQ2dwZTF4dUlDQWdJQ0FnSUNCMGFISnZkeUJGY25KdmNpZ25hVzF3YkdWdFpXNTBJSEpsY1hWcGNtVmtKeWs3WEc0Z0lDQWdmVnh1SUNBZ0lHOXVaVWh2ZEZCeVpXUnBZM1FvS1h0Y2JpQWdJQ0FnSUNBZ2RHaHliM2NnUlhKeWIzSW9KMmx0Y0d4bGJXVnVkQ0J5WlhGMWFYSmxaQ2NwTzF4dUlDQWdJSDFjYm4xY2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ1FtRnpaVTF2WkdWc095SXNJbWx0Y0c5eWRDQjdJSEJzWVhSbWIzSnRJSDBnWm5KdmJTQW5ZMkYxYzJGc0xXNWxkQzUxZEdsc2N5YzdYRzVwYlhCdmNuUWdleUJVWlc1emIzSWdZWE1nUW1GelpWUmxibk52Y2lCOUlHWnliMjBnSjJOaGRYTmhiQzF1WlhRdVkyOXlaU2M3WEc1cGJYQnZjblFnZXlCa1pXWmhkV3gwSUdGeklGTnBibWRzWlV4aFltVnNRMnhoYzNOcFptbGpZWFJwYjI0Z2ZTQm1jbTl0SUNjdUwzTnBibWRzWlV4aFlteGxRMnhoYzNOcFptbGpZWFJwYjI0bk8xeHVMeW9xWEc0Z0tpQlVhR2x6SUdOc1lYTnpJSEJ5YjNacFpHVWdZMjl0Ylc5dUlIVnpaV1FnYlc5a1pXeHpJSGRvYVdOb0lHTmhiaUJpWlNCaFkyTmxjM05sWkNCMmFXRWdLaXBqWVhWellXeE9aWFJOYjJSbGJITXFLaUJwYm5OMFlXNWpaUzVjYmlBcUlFQmpiR0Z6Y3lCRFlYVnpZV3hPWlhSTmIyUmxiSE5jYmlBcUlFQmxlSFJsYm1SeklFSmhjMlZVWlc1emIzSmNiaUFxSUVCbGVHRnRjR3hsWEc0Z0tpQmJSVmhCVFZCTVJTQXVMaTlsZUdGdGNHeGxjeTl6YVc1bmJHVk1ZV0psYkVOc1lYTnphV1pwWTJGMGFXOXVMbUpoWW1Wc0xtcHpYVnh1SUNvdlhHNWpiR0Z6Y3lCRFlYVnpZV3hPWlhSTmIyUmxiSE1nWlhoMFpXNWtjeUJ3YkdGMFptOXliUzV0YVhoWGFYUm9LQ0JDWVhObFZHVnVjMjl5TENCYlhTQXBlMXh1SUNBZ0lHTnZibk4wY25WamRHOXlLQ2w3WEc0Z0lDQWdJQ0FnSUhOMWNHVnlLQ2s3WEc0Z0lDQWdmVnh1SUNBZ0lGeHVJQ0FnSUdOc1lYTnphV1pwWTJGMGFXOXVLRzUxYlVOc1lYTnpLWHRjYmlBZ0lDQWdJQ0FnZEdocGN5NXRiMlJsYkNBOUlHNWxkeUJUYVc1bmJHVk1ZV0psYkVOc1lYTnphV1pwWTJGMGFXOXVLRzUxYlVOc1lYTnpLVHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSFJvYVhNdWJXOWtaV3c3WEc0Z0lDQWdmVnh1ZlZ4dVpYaHdiM0owSUdSbFptRjFiSFFnYm1WM0lFTmhkWE5oYkU1bGRFMXZaR1ZzY3lncE95SXNJbVY0Y0c5eWRDQjdJR1JsWm1GMWJIUWdZWE1nWTJGMWMyRnNUbVYwVFc5a1pXeHpJSDBnWm5KdmJTQW5MaTlqWVhWellXeE9aWFJOYjJSbGJITW5PMXh1Wlhod2IzSjBJSHNnWkdWbVlYVnNkQ0JoY3lCTmIyUmxiRTFwZUdsdWN5QjlJR1p5YjIwZ0p5NHZiVzlrWld3dWJXbDRhVzV6Snp0Y2JseHVaWGh3YjNKMElIc2daR1ZtWVhWc2RDQmhjeUJDWVhObFRXOWtaV3dnZlNCbWNtOXRJQ2N1TDJKaGMyVk5iMlJsYkNjN1hHNWxlSEJ2Y25RZ2V5QmtaV1poZFd4MElHRnpJRk5wYm1kc1pVeGhZbVZzUTJ4aGMzTnBabWxqWVhScGIyNGdmU0JtY205dElDY3VMM05wYm1kc1pVeGhZbXhsUTJ4aGMzTnBabWxqWVhScGIyNG5PMXh1SWl3aVkyOXVjM1FnVFc5a1pXeE5hWGhwYm5NZ1BTQW9RbUZ6WlZCcGNHVnNhVzVsUTJ4aGMzTXBQVDRnWTJ4aGMzTWdaWGgwWlc1a2N5QkNZWE5sVUdsd1pXeHBibVZEYkdGemMzdGNiaUFnSUNCblpYUWdURzl6YzAxdlpHVnNLQ2w3WEc0Z0lDQWdJQ0FnSUdsbUtDRjBhR2x6TG01bGRFMXZaR1ZzS1h0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJvY205M0lFVnljbTl5S0NkdVpYUk5iMlJsYkNCcGN5QnViM1FnYzJWMEp5azdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSFJvYVhNdWJtVjBUVzlrWld3dVRHOXpjenRjYmlBZ0lDQjlYRzVjYmlBZ0lDQm5aWFFnUm1sMFRXOWtaV3dvS1h0Y2JpQWdJQ0FnSUNBZ2FXWW9JWFJvYVhNdWJtVjBUVzlrWld3cGUxeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdoeWIzY2dSWEp5YjNJb0oyNWxkRTF2WkdWc0lHbHpJRzV2ZENCelpYUW5LVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnZEdocGN5NXVaWFJOYjJSbGJDNUdhWFE3WEc0Z0lDQWdmVnh1SUNBZ0lGeHVJQ0FnSUdkbGRDQlBibVZJYjNSUWNtVmthV04wVFc5a1pXd29LWHRjYmlBZ0lDQWdJQ0FnYVdZb0lYUm9hWE11Ym1WMFRXOWtaV3dwZTF4dUlDQWdJQ0FnSUNBZ0lDQWdkR2h5YjNjZ1JYSnliM0lvSjI1bGRFMXZaR1ZzSUdseklHNXZkQ0J6WlhRbktUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdkR2hwY3k1dVpYUk5iMlJsYkM1UGJtVkliM1JRY21Wa2FXTjBPMXh1SUNBZ0lIMWNibHh1SUNBZ0lHZGxkQ0JRY21Wa2FXTjBUVzlrWld3b0tYdGNiaUFnSUNBZ0lDQWdhV1lvSVhSb2FYTXVibVYwVFc5a1pXd3BlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHliM2NnUlhKeWIzSW9KMjVsZEUxdlpHVnNJR2x6SUc1dmRDQnpaWFFuS1R0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2RHaHBjeTV1WlhSTmIyUmxiQzVRY21Wa2FXTjBPMXh1SUNBZ0lIMWNibHh1SUNBZ0lHZGxkQ0JGYm1OdlpHVk5iMlJsYkNncGUxeHVJQ0FnSUNBZ0lDQnBaaWdoZEdocGN5NXVaWFJOYjJSbGJDbDdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFISnZkeUJGY25KdmNpZ25ibVYwVFc5a1pXd2dhWE1nYm05MElITmxkQ2NwTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCMGFHbHpMbTVsZEUxdlpHVnNMa1Z1WTI5a1pUdGNiaUFnSUNCOVhHNWNiaUFnSUNCblpYUWdSR1ZqYjJSbFRXOWtaV3dvS1h0Y2JpQWdJQ0FnSUNBZ2FXWW9JWFJvYVhNdWJtVjBUVzlrWld3cGUxeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdoeWIzY2dSWEp5YjNJb0oyNWxkRTF2WkdWc0lHbHpJRzV2ZENCelpYUW5LVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnZEdocGN5NXVaWFJOYjJSbGJDNUVaV052WkdVN1hHNGdJQ0FnZlZ4dVhHNWNiaUFnSUNCblpYUWdUVzlrWld3b0tYdGNiaUFnSUNBZ0lDQWdhV1lvSVhSb2FYTXVibVYwVFc5a1pXd3BlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHliM2NnUlhKeWIzSW9KMjVsZEUxdlpHVnNJR2x6SUc1dmRDQnpaWFFuS1R0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2RHaHBjeTV1WlhSTmIyUmxiRHRjYmlBZ0lDQjlYRzRnSUNBZ1hHNWNiaUFnSUNCelpYUWdUVzlrWld3b2JXOWtaV3dwZXlBZ0lDQWdJQ0FnWEc0Z0lDQWdJQ0FnSUhSb2FYTXVibVYwVFc5a1pXd2dQU0J0YjJSbGJEdGNiaUFnSUNCOVhHNWNiaUFnSUNCelpYUkNlVU52Ym1acFp5aHdhWEJsYkdsdVpVTnZibVpwWnlsN1hHNGdJQ0FnSUNBZ0lHbG1LSE4xY0dWeUxuTmxkRUo1UTI5dVptbG5LWHRjYmlBZ0lDQWdJQ0FnSUNBZ0lITjFjR1Z5TG5ObGRFSjVRMjl1Wm1sbktIQnBjR1ZzYVc1bFEyOXVabWxuS1R0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQjBhR2x6TGt4dloyZGxjaTVuY205MWNFSmxaMmx1S0NkelpYUWdUVzlrWld3Z1lua2dZMjl1Wm1sbkp5azdYRzRnSUNBZ0lDQWdJR052Ym5OMElIc2dUVzlrWld3Z2ZTQTlJSEJwY0dWc2FXNWxRMjl1Wm1sbkxrNWxkRHRjYmlBZ0lDQWdJQ0FnYVdZb0lVMXZaR1ZzS1h0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJvY205M0lFVnljbTl5S0dCTmIyUmxiQ0JwY3lCdWIzUWdjMlYwSUdsdUlDUjdTbE5QVGk1emRISnBibWRzYVdaNUtIQnBjR1ZzYVc1bFEyOXVabWxuS1gxZ0tUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0JOYjJSbGJDNU1ZWGxsY2xKMWJtNWxjaUE5SUhSb2FYTXVUR0Y1WlhKU2RXNXVaWEk3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVUVzlrWld3Z1BTQk5iMlJsYkR0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVNYjJkblpYSXVaM0p2ZFhCRmJtUW9LVHRjYmlBZ0lDQjlYRzU5TzF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCTmIyUmxiRTFwZUdsdWN6dGNiaUlzSW1sdGNHOXlkQ0I3SUdSbFptRjFiSFFnWVhNZ1FtRnpaVTF2WkdWc0lIMGdabkp2YlNBbkxpOWlZWE5sVFc5a1pXd25PMXh1WEc1amJHRnpjeUJUYVc1bmJHVk1ZV0psYkVOc1lYTnphV1pwWTJGMGFXOXVJR1Y0ZEdWdVpITWdRbUZ6WlUxdlpHVnNlMXh1SUNBZ0lHTnZibk4wY25WamRHOXlLRzUxYlVOc1lYTnpLWHRjYmlBZ0lDQWdJQ0FnYzNWd1pYSW9LVHRjYmlBZ0lDQWdJQ0FnYVdZb2JuVnRRMnhoYzNNZ1BpQXdLWHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11Ym5WdFEyeGhjM01nUFNCdWRXMURiR0Z6Y3p0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQmxiSE5sZTF4dUlDQWdJQ0FnSUNBZ0lDQWdkR2h5YjNjZ1JYSnliM0lvWUdWNGNHVmpkQ0J1ZFcxamJHRnpjeXdnWjJWMElDUjdiblZ0UTJ4aGMzTjlZQ2s3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0I5WEc1Y2JpQWdJQ0J6WlhRZ1RHRjVaWEpTZFc1dVpYSW9iR0Y1WlhKU2RXNXVaWElwZTF4dUlDQWdJQ0FnSUNCc1pYUWdleUJRY21Wa2FXTjBiM0lnZlNBOUlHeGhlV1Z5VW5WdWJtVnlPMXh1SUNBZ0lDQWdJQ0IwYUdsekxuSjFibTVsY2lBOUlIc2dVSEpsWkdsamRHOXlJSDA3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdaMlYwSUV4aGVXVnlVblZ1Ym1WeUtDbDdYRzRnSUNBZ0lDQWdJR2xtS0NGMGFHbHpMbkoxYm01bGNpbDdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFISnZkeUJGY25KdmNpZ25jblZ1Ym1WeUlHbHpJRzV2ZENCelpYUW5LVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnZEdocGN5NXlkVzV1WlhJN1hHNGdJQ0FnZlZ4dUlDQWdJRnh1SUNBZ0lHZGxkQ0JHYVhRb0tYdGNiaUFnSUNBZ0lDQWdZMjl1YzNRZ2V5QlFjbVZrYVdOMGIzSWdmU0E5SUhSb2FYTXVUR0Y1WlhKU2RXNXVaWEk3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUFvYVc1d2RYUlVaVzV6YjNJcFBUNTdYRzRnSUNBZ0lDQWdJQ0FnSUNCc1pYUWdiM1YwVUhWMFZHVnVjMjl5SUQwZ1VISmxaR2xqZEc5eUtHbHVjSFYwVkdWdWMyOXlLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHeGxkQ0JzYjJkUWNtOWlJRDBnYjNWMFVIVjBWR1Z1YzI5eUxuTjFZaWh2ZFhSUWRYUlVaVzV6YjNJdWJHOW5VM1Z0Ulhod0tERXNJSFJ5ZFdVcEtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUJzYjJkUWNtOWlPMXh1SUNBZ0lDQWdJQ0I5TzF4dUlDQWdJSDFjYmlBZ0lDQmNiaUFnSUNCblpYUWdVSEpsWkdsamRDZ3BlMXh1SUNBZ0lDQWdJQ0JqYjI1emRDQkdhWFFnUFNCMGFHbHpMa1pwZER0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUNocGJuQjFkRlJsYm5OdmNpazlQbnRjYmlBZ0lDQWdJQ0FnSUNBZ0lHeGxkQ0JzYjJkUWNtOWlJRDBnUm1sMEtHbHVjSFYwVkdWdWMyOXlLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHeGxkQ0J3Y21Wa2FXTjBaV1JEYkdGemN5QTlJR3h2WjFCeWIySXVZWEpuVFdGNEtERXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUhCeVpXUnBZM1JsWkVOc1lYTnpPMXh1SUNBZ0lDQWdJQ0I5TzF4dUlDQWdJSDFjYmx4dUlDQWdJR2RsZENCUGJtVkliM1JRY21Wa2FXTjBLQ2w3WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJRkJ5WldScFkzUWdQU0IwYUdsekxsQnlaV1JwWTNRN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlBb2FXNXdkWFJVWlc1emIzSXBQVDU3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnNaWFFnY0hKbFpHbGpkR1ZrUTJ4aGMzTWdQU0JRY21Wa2FXTjBLR2x1Y0hWMFZHVnVjMjl5S1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJR3hsZENCdmJtVkliM1JRY21Wa2FXTjBJRDBnZEdocGN5NVVMbTl1WlVodmRDaHdjbVZrYVdOMFpXUkRiR0Z6Y3l3Z2RHaHBjeTV1ZFcxRGJHRnpjeWs3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z2IyNWxTRzkwVUhKbFpHbGpkRHRjYmlBZ0lDQWdJQ0FnZlR0Y2JpQWdJQ0I5WEc0Z0lDQWdaMlYwSUV4dmMzTW9LWHRjYmlBZ0lDQWdJQ0FnWTI5dWMzUWdSbWwwSUQwZ2RHaHBjeTVHYVhRN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlBb2FXNXdkWFJVWlc1emIzSXNJR3hoWW1Wc1ZHVnVjMjl5S1QwK2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnYkdWMElHeHZaMUJ5YjJJZ1BTQkdhWFFvYVc1d2RYUlVaVzV6YjNJcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnYkdWMElHeHBhMlZzYVdodmIyUWdQU0JzYjJkUWNtOWlMbTVsWnlncExtMTFiQ2hzWVdKbGJGUmxibk52Y2lrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JzWlhRZ2JHOXpjeUE5SUd4cGEyVnNhV2h2YjJRdWMzVnRLREVwTG0xbFlXNG9LVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCc2IzTnpPMXh1SUNBZ0lDQWdJQ0I5TzF4dUlDQWdJSDFjYm4xY2JtVjRjRzl5ZENCa1pXWmhkV3gwSUZOcGJtZHNaVXhoWW1Wc1EyeGhjM05wWm1sallYUnBiMjQ3SWl3aWJXOWtkV3hsTG1WNGNHOXlkSE1nUFNCZlgxZEZRbEJCUTB0ZlJWaFVSVkpPUVV4ZlRVOUVWVXhGWDJOaGRYTmhiRjl1WlhSZlkyOXlaVjlmT3lJc0ltMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ1gxOVhSVUpRUVVOTFgwVllWRVZTVGtGTVgwMVBSRlZNUlY5allYVnpZV3hmYm1WMFgzVjBhV3h6WDE4N0lsMHNJbk52ZFhKalpWSnZiM1FpT2lJaWZRPT0iLCIvKipcbiAqIFRoZSBFbnNlbWJsZURlcGxveW1lbnRNaXhpbnMgY2xhc3MgaXMgdGhlIG1peGlzIGNsYXNzIGZvciBkZXBsb3lpbmcgZW5zZW1ibGUgbW9kZWxcbiAqIEBjbGFzcyBDYXVzYWxOZXRcbiAqIEBleHRlbmRzIHsgQmFzZVBpcGVsaW5lQ2xhc3MgfVxuICovXG5jb25zdCBFbnNlbWJsZURlcGxveW1lbnRNaXhpbnMgPSAoQmFzZVBpcGVsaW5lQ2xhc3MpPT4gY2xhc3MgZXh0ZW5kcyBCYXNlUGlwZWxpbmVDbGFzcyB7XG4gICAgLyoqXG4gICAgICogUHJvdmlkZSBFbnNlbWJsZUluZmVyZW5jZXIgY2FsbGVyLCBFbnNlbWJsZU1vZGVsUHJlZGljdCBtdXN0IGJlIHNldCBpbiBwcmlvclxuICAgICAqIEByZWFkb25seVxuICAgICAqL1xuICAgIGdldCBFbnNlbWJsZUluZmVyZW5jZXIoKXtcbiAgICAgICAgY29uc3QgTW9kZWxMZW5zZXMgPSAoKT0+KHsgRW5zZW1ibGVQcmVkaWN0OiB0aGlzLkVuc2VtYmxlTW9kZWxQcmVkaWN0IH0pO1xuICAgICAgICBjb25zdCBUID0gdGhpcy5UO1xuICAgICAgICByZXR1cm4gYXN5bmMgKGlucHV0KT0+e1xuICAgICAgICAgICAgbGV0IHsgRW5zZW1ibGVQcmVkaWN0IH0gPSBpbnB1dDtcbiAgICAgICAgICAgIGxldCBpbmZlciA9IHt9O1xuICAgICAgICAgICAgaWYoRW5zZW1ibGVQcmVkaWN0KXtcbiAgICAgICAgICAgICAgICBsZXQgaW5wdXRUZW5zb3IgPSBULnRlbnNvcihFbnNlbWJsZVByZWRpY3QpLmFzVHlwZSgnZmxvYXQzMicpLnJlc2hhcGUoWzEsIC0xXSk7XG4gICAgICAgICAgICAgICAgbGV0IHByZWRpY3RUZW5zb3IgPSBhd2FpdCBNb2RlbExlbnNlcygpLkVuc2VtYmxlUHJlZGljdChpbnB1dFRlbnNvcik7XG4gICAgICAgICAgICAgICAgaW5mZXIuRW5zZW1ibGVQcmVkaWN0ID0gYXdhaXQgcHJlZGljdFRlbnNvci5kYXRhKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gaW5mZXI7XG4gICAgICAgIH07XG4gICAgfVxuICAgIC8qKlxuICAgICAqIHByb2Nlc3MgcGlwZWxpbmVDb25maWcgb2JqZWN0IGZvciBlbnNlbWJsZSBkZXBsb3ltZW50XG4gICAgICogQHBhcmFtIHsgT2JqZWN0IH0gcGlwZWxpbmVDb25maWdcbiAgICAgKiBAcmV0dXJuc1xuICAgICAqL1xuICAgIHNldEJ5Q29uZmlnKHBpcGVsaW5lQ29uZmlnKXtcbiAgICAgICAgaWYoc3VwZXIuc2V0QnlDb25maWcpe1xuICAgICAgICAgICAgc3VwZXIuc2V0QnlDb25maWcocGlwZWxpbmVDb25maWcpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuTG9nZ2VyLmdyb3VwQmVnaW4oJ3NldCBlbnNlbWJsZSBkZXBsb3ltZW50IGJ5IGNvbmZpZycpO1xuICAgICAgICB0aGlzLkRlcGxveW1lbnQuRW5zZW1ibGVJbmZlcmVuY2VyID0gdGhpcy5FbnNlbWJsZUluZmVyZW5jZXI7XG4gICAgICAgIHRoaXMuTG9nZ2VyLmdyb3VwRW5kKCk7XG4gICAgICAgIHJldHVybiBwaXBlbGluZUNvbmZpZztcbiAgICB9XG4gICAgLyoqXG4gICAgICogZGVwbG95IG1vZGVsXG4gICAgICogQHJldHVybnMgeyBQcm9taXNlIH0gZGVwbG95bWVudCBzdW1tYXJ5XG4gICAgICovXG4gICAgYXN5bmMgZGVwbG95KCl7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLkRlcGxveW1lbnQuZGVwbG95KCk7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgRW5zZW1ibGVEZXBsb3ltZW50TWl4aW5zOyIsImNvbnN0IEVuc2VtYmxlRXZhbHVhdG9yTWl4aW5zID0gKEJhc2VQaXBlbGluZUNsYXNzKT0+IGNsYXNzIGV4dGVuZHMgQmFzZVBpcGVsaW5lQ2xhc3N7IFxuICAgIGFzeW5jIGVuc2VtYmxlVGVzdChiYXRjaFNpemUsIG1ldGhvZD0nYWNjdXJhY3knKXtcbiAgICAgICAgdGhyb3cgRXJyb3IoJ2ltcGxlbWVudCByZXF1aXJlJyk7IFxuICAgIH1cbn07XG5leHBvcnQgZGVmYXVsdCBFbnNlbWJsZUV2YWx1YXRvck1peGluczsiLCIvKipcbiAqIFRoZSBFbnNlbWJsZU1vZGVsTWl4aW5zIGNsYXNzIGlzIHRoZSBtaXhpcyBjbGFzcyBmb3IgZW5zZW1ibGUgbW9kZWwgY2FsbGVyXG4gKiBAY2xhc3MgRW5zZW1ibGVNb2RlbE1peGluc1xuICogQGV4dGVuZHMge0Jhc2VQaXBlbGluZUNsYXNzfVxuICovXG5jb25zdCBFbnNlbWJsZU1vZGVsTWl4aW5zID0gKEJhc2VQaXBlbGluZUNsYXNzKT0+IGNsYXNzIGV4dGVuZHMgQmFzZVBpcGVsaW5lQ2xhc3N7IFxuXG4gICAgZ2V0IEVuc2VtYmxlTW9kZWxQcmVkaWN0KCl7XG4gICAgICAgIGNvbnN0IEZpdE1vZGVsID0gdGhpcy5GaXRNb2RlbDtcbiAgICAgICAgY29uc3QgVCA9IHRoaXMuVDtcbiAgICAgICAgY29uc3QgRW5zZW1ibGVNb2RlbHMgPSB0aGlzLkVuc2VtYmxlTW9kZWxzO1xuICAgICAgICBjb25zdCBCYWdnaW5nID0gYXN5bmMgKGlucHV0VGVuc29yKT0+e1xuICAgICAgICAgICAgbGV0IHByb2JGaXRzID0gW107XG4gICAgICAgICAgICBmb3IobGV0IG1vZGVsIG9mIEVuc2VtYmxlTW9kZWxzKXtcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmxvYWRQYXJhbXMobW9kZWwpO1xuICAgICAgICAgICAgICAgIGxldCBwcm9iID0gRml0TW9kZWwoaW5wdXRUZW5zb3IpLmV4cCgpO1xuICAgICAgICAgICAgICAgIHByb2JGaXRzLnB1c2gocHJvYik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgbWVhblByb2IgPSBULnN0YWNrKHByb2JGaXRzKS5tZWFuKDApO1xuICAgICAgICAgICAgcmV0dXJuIG1lYW5Qcm9iLmFyZ01heCgxKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIEJhZ2dpbmc7ICAgXG4gICAgfVxuXG4gICAgc2V0IEVuc2VtYmxlTW9kZWxzKG1vZGVsaXN0KXtcbiAgICAgICAgdGhpcy5lbnNlbWJsZU1vZGVscyA9IG1vZGVsaXN0O1xuICAgIH1cblxuICAgIGdldCBFbnNlbWJsZU1vZGVscygpe1xuICAgICAgICBpZighdGhpcy5lbnNlbWJsZU1vZGVscyl7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignRW5zZW1ibGVNb2RlbHMgaXMgbm90IHNldCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmVuc2VtYmxlTW9kZWxzO1xuICAgIH1cbn07XG5leHBvcnQgZGVmYXVsdCBFbnNlbWJsZU1vZGVsTWl4aW5zOyIsIi8qKlxuICogVGhlIEVuc2VtYmxlVHJhaW5lck1peGlucyBjbGFzcyBpcyB0aGUgbWl4aW5zIGNsYXNzIGZvciB0cmFpbmluZyBlbnNhbWJsYWJsZSBtb2RlbHNcbiAqIEBjbGFzcyBFbnNlbWJsZVRyYWluZXJNaXhpbnNcbiAqIEBleHRlbmRzIHtCYXNlUGlwZWxpbmVDbGFzc31cbiAqL1xuY29uc3QgRW5zZW1ibGVUcmFpbmVyTWl4aW5zID0gKEJhc2VQaXBlbGluZUNsYXNzKT0+IGNsYXNzIGV4dGVuZHMgQmFzZVBpcGVsaW5lQ2xhc3N7XG4gICAgLyoqXG4gICAgICogVHJhaW4gbW9kZWwgYW5kIHNhdmUgdG8gc3RvcmFnZSB1bmRlciB0aGUgZ2l2ZW4gZmlsZW5hbWUuIHBhcmFtZXRlcnMgaXMgcmVpbml0ZWQgZm9yIGVhY2ggdHJhaW5pbmdcbiAgICAgKiBAcGFyYW0geyBOdW1iZXIgfSBudW1FcG9jaHNcbiAgICAgKiBAcGFyYW0geyBOdW1iZXIgfSBiYXRjaFNpemVcbiAgICAgKiBAcGFyYW0geyBTdHJpbmcgfSBzYXZlRmlsZU5hbWVcbiAgICAgKiBAcmV0dXJucyB7IFByb21pc2UgfSBUcmFpbmluZyBsb3NzZXNcbiAgICAgKi9cbiAgICBhc3luYyBlbnNlbWJsZVRyYWluKG51bUVwb2NocywgYmF0Y2hTaXplLCBzYXZlRmlsZU5hbWUpe1xuICAgICAgICB0aGlzLkxheWVyUnVubmVyLk5ldFBhcmFtZXRlcnMgPSB0aGlzLlBhcmFtZXRlckluaXRpYWxpemVyKHRoaXMuTGF5ZXJSdW5uZXIuTmV0TGF5ZXJzKTtcbiAgICAgICAgbGV0IHtsb3NzZXN9ID0gYXdhaXQgdGhpcy50cmFpbihudW1FcG9jaHMsIGJhdGNoU2l6ZSk7XG4gICAgICAgIGF3YWl0IHRoaXMuc2F2ZVBhcmFtcyhzYXZlRmlsZU5hbWUpO1xuICAgICAgICByZXR1cm4ge1tzYXZlRmlsZU5hbWVdOiBsb3NzZXN9O1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEVuc2VtYmxlVHJhaW5lck1peGluczsiLCJleHBvcnQgeyBkZWZhdWx0IGFzIEVuc2VtYmxlVHJhaW5lck1peGlucyB9IGZyb20gJy4vZW5zZW1ibGVUcmFpbmVyLm1peGlucyc7IFxuZXhwb3J0IHsgZGVmYXVsdCBhcyBFbnNlbWJsZU1vZGVsTWl4aW5zIH0gZnJvbSAnLi9lbnNlbWJsZU1vZGVsLm1peGlucyc7IFxuZXhwb3J0IHsgZGVmYXVsdCBhcyBFbnNlbWJsZURlcGxveW1lbnRNaXhpbnMgfSBmcm9tICcuL2Vuc2VtYmxlRGVwbG95bWVudC5taXhpbnMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBFbnNlbWJsZUV2YWx1YXRvck1peGlucyB9IGZyb20gJy4vZW5zZW1ibGVFdmFsdWF0b3IubWl4aW5zJzsgIiwiaW1wb3J0IHsgRGF0YVNvdXJjZU1peGlucyB9IGZyb20gJ2NhdXNhbC1uZXQuZGF0YXNldHMnO1xuaW1wb3J0IHsgUHJlcHJvY2Vzc2luZ01peGlucywgY2F1c2FsTmV0UHJlcHJvY2Vzc2luZ1N0cmVhbSB9IGZyb20gJ2NhdXNhbC1uZXQucHJlcHJvY2Vzc2luZyc7XG5pbXBvcnQgeyBUcmFpbmVyTWl4aW5zLCBFdmFsdWF0b3JNaXhpbnMgfSBmcm9tICdjYXVzYWwtbmV0Lm9wdGltaXplcnMnO1xuaW1wb3J0IHsgTW9kZWxNaXhpbnMgfSBmcm9tICdjYXVzYWwtbmV0Lm1vZGVscyc7XG5pbXBvcnQgeyBjYXVzYWxOZXRSdW5uZXIsIExheWVyUnVubmVyTWl4aW5zIH0gZnJvbSAnY2F1c2FsLW5ldC5sYXllcic7XG5pbXBvcnQgeyBUZW5zb3IgfSBmcm9tICdjYXVzYWwtbmV0LmNvcmUnO1xuaW1wb3J0IHsgcGxhdGZvcm0gfSBmcm9tICdjYXVzYWwtbmV0LnV0aWxzJztcbmltcG9ydCB7IGNhdXNhbE5ldERlcGxveW1lbnQsIERlcGxveW1lbnRNaXhpbnMgfSBmcm9tICdjYXVzYWwtbmV0LmRlcGxveW1lbnQnO1xuaW1wb3J0IHsgdGVybUxvZ2dlciwgTG9nZ2VyTWl4aW5zIH0gZnJvbSAnY2F1c2FsLW5ldC5sb2cnO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBmdW5jdG9yIH0gZnJvbSAnLi9mdW5jdG9yJztcbmltcG9ydCB7IEVuc2VtYmxlVHJhaW5lck1peGlucywgRW5zZW1ibGVNb2RlbE1peGlucywgRW5zZW1ibGVEZXBsb3ltZW50TWl4aW5zIH0gZnJvbSAnLi9FbnNlbWJsZS9pbmRleCc7XG5cbi8qKlxuICogVGhlIENhdXNhbE5ldCBjbGFzcyBpcyB0aGUgcHJlYnVpbHQgcGlwZWxpbmUgd2l0aCBtZXRob2RzIGZvciBcbiAqIHByb2Nlc3NpbmcgZGF0YS90cmFpbi9ldmFsdWF0ZS9kZXBsb3kvZW5zZW1ibGUgZGVwbG95XG4gKiB7IG1peFdpdGg6IFsgXG4gKiAgICAgICAgIERhdGFTb3VyY2VNaXhpbnMsXG4gKiAgICAgICAgIFByZXByb2Nlc3NpbmdNaXhpbnMsXG4gKiAgICAgICAgIExheWVyUnVubmVyTWl4aW5zLCBcbiAqICAgICAgICAgTW9kZWxNaXhpbnMsIFxuICogICAgICAgICBFdmFsdWF0b3JNaXhpbnMsXG4gKiAgICAgICAgIFRyYWluZXJNaXhpbnMsIFxuICogICAgICAgICBMb2dnZXJNaXhpbnMsXG4gKiAgICAgICAgIERlcGxveW1lbnRNaXhpbnMsXG4gKiAgICAgICAgIEVuc2VtYmxlVHJhaW5lck1peGlucyxcbiAqICAgICAgICAgRW5zZW1ibGVNb2RlbE1peGlucywgXG4gKiAgICAgICAgIEVuc2VtYmxlRGVwbG95bWVudE1peGlucyBdIH1cbiAqIEBjbGFzcyBDYXVzYWxOZXRcbiAqIEBleHRlbmRzIHtUZW5zb3J9XG4gKiBAZXhhbXBsZVxuICogW0VYQU1QTEUgLi4vZXhhbXBsZXMvY2F1c2FsTmV0L2Vuc2VtYmxlLmxvZ2lzdGljUmVncmVzc2lvbi5iYWJlbC5qc11cbiAqL1xuY2xhc3MgQ2F1c2FsTmV0IGV4dGVuZHMgcGxhdGZvcm0ubWl4V2l0aChUZW5zb3IsIFsgXG4gICAgICAgIERhdGFTb3VyY2VNaXhpbnMsXG4gICAgICAgIFByZXByb2Nlc3NpbmdNaXhpbnMsXG4gICAgICAgIExheWVyUnVubmVyTWl4aW5zLCBcbiAgICAgICAgTW9kZWxNaXhpbnMsIFxuICAgICAgICBFdmFsdWF0b3JNaXhpbnMsXG4gICAgICAgIFRyYWluZXJNaXhpbnMsIFxuICAgICAgICBMb2dnZXJNaXhpbnMsXG4gICAgICAgIERlcGxveW1lbnRNaXhpbnMsXG4gICAgICAgIEVuc2VtYmxlVHJhaW5lck1peGlucyxcbiAgICAgICAgRW5zZW1ibGVNb2RlbE1peGlucywgXG4gICAgICAgIEVuc2VtYmxlRGVwbG95bWVudE1peGlucyBdKXtcbiAgICAvKipcbiAgICAgKkNyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgQ2F1c2FsTmV0LlxuICAgICAqIEBwYXJhbSB7IEZ1bmN0b3IgfSBmdW5jdG9yXG4gICAgICogQHBhcmFtIHsgTG9nIH0gbG9nZ2VyXG4gICAgICogQHBhcmFtIHsgRnVuY3RvciB9IHN0cmVhbVByZXByb2Nlc3NpbmdcbiAgICAgKiBAcGFyYW0geyBUZW5zb3IgfSBuZXRQYXJhbWV0ZXJzXG4gICAgICogQHBhcmFtIHsgVGVuc29yIH0gbmV0UnVubmVyXG4gICAgICogQHBhcmFtIHsgRXZlbnQgfSBzdHJlYW1EZXBsb3ltZW50XG4gICAgICogQG1lbWJlcm9mIENhdXNhbE5ldFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKCBmdW5jdG9yLCBsb2dnZXIsIHN0cmVhbVByZXByb2Nlc3NpbmcsIG5ldFJ1bm5lciwgc3RyZWFtRGVwbG95bWVudCl7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuRiA9IGZ1bmN0b3I7XG4gICAgICAgIHRoaXMuUiA9IHRoaXMuRi5Db3JlRnVuY3RvcjtcbiAgICAgICAgdGhpcy5Mb2dnZXIgPSBsb2dnZXI7XG4gICAgICAgIHRoaXMuUHJlcHJvY2Vzc2luZyA9IHN0cmVhbVByZXByb2Nlc3Npbmc7XG4gICAgICAgIHRoaXMuTGF5ZXJSdW5uZXIgPSBuZXRSdW5uZXI7ICAgICAgICBcbiAgICAgICAgdGhpcy5EZXBsb3ltZW50ID0gc3RyZWFtRGVwbG95bWVudDtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyAgQ2F1c2FsTmV0KCAgZnVuY3RvciwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlcm1Mb2dnZXIsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXVzYWxOZXRQcmVwcm9jZXNzaW5nU3RyZWFtLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F1c2FsTmV0UnVubmVyLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F1c2FsTmV0RGVwbG95bWVudCApOyIsImltcG9ydCB7IEZ1bmN0b3IgYXMgQmFzZUZ1bmN0b3IgfSBmcm9tICdjYXVzYWwtbmV0LmNvcmUnO1xuaW1wb3J0IHsgcGxhdGZvcm0gfSBmcm9tICdjYXVzYWwtbmV0LnV0aWxzJztcbi8qKlxuICogVGhpcyBGdW5jdG9yIGNsYXNzIHByb3ZpZGVzIGNvbW1vbiB1c2VkIGRhdGEgcHJvY2Vzc2luZyBtZXRob2RzIGZvciBwaXBlbGluZVxuICogQGNsYXNzIEZ1bmN0b3JcbiAqIEBleHRlbmRzIEJhc2VGdW5jdG9yXG4gKi9cbmNsYXNzIEZ1bmN0b3IgZXh0ZW5kcyBwbGF0Zm9ybS5taXhXaXRoKEJhc2VGdW5jdG9yLCBbXSApe1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgRnVuY3RvcigpOyIsImV4cG9ydCB7IGRlZmF1bHQgYXMgY2F1c2FsTmV0IH0gZnJvbSAnLi9jYXVzYWxOZXQnOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9kYXRhc2V0c19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X2RlcGxveW1lbnRfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9sYXllcl9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X2xvZ19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X29wdGltaXplcnNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9wcmVwcm9jZXNzaW5nX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfdXRpbHNfXzsiXSwic291cmNlUm9vdCI6IiJ9