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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3BpcGVsaW5lL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3BpcGVsaW5lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0BjYXVzYWxOZXQvcGlwZWxpbmUvLi1tb2RlbHMvZGlzdC9AY2F1c2FsTmV0L21vZGVscy53ZWIuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9waXBlbGluZS8uL3NyYy9FbnNlbWJsZS9lbnNlbWJsZURlcGxveW1lbnQubWl4aW5zLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcGlwZWxpbmUvLi9zcmMvRW5zZW1ibGUvZW5zZW1ibGVFdmFsdWF0b3IubWl4aW5zLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcGlwZWxpbmUvLi9zcmMvRW5zZW1ibGUvZW5zZW1ibGVNb2RlbC5taXhpbnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9waXBlbGluZS8uL3NyYy9FbnNlbWJsZS9lbnNlbWJsZVRyYWluZXIubWl4aW5zLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcGlwZWxpbmUvLi9zcmMvRW5zZW1ibGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9waXBlbGluZS8uL3NyYy9jYXVzYWxOZXQuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9waXBlbGluZS8uL3NyYy9mdW5jdG9yLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcGlwZWxpbmUvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9waXBlbGluZS9leHRlcm5hbCBcImNhdXNhbC1uZXQuY29yZVwiIiwid2VicGFjazovL0BjYXVzYWxOZXQvcGlwZWxpbmUvZXh0ZXJuYWwgXCJjYXVzYWwtbmV0LmRhdGFzZXRzXCIiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9waXBlbGluZS9leHRlcm5hbCBcImNhdXNhbC1uZXQuZGVwbG95bWVudFwiIiwid2VicGFjazovL0BjYXVzYWxOZXQvcGlwZWxpbmUvZXh0ZXJuYWwgXCJjYXVzYWwtbmV0LmxheWVyXCIiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9waXBlbGluZS9leHRlcm5hbCBcImNhdXNhbC1uZXQubG9nXCIiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9waXBlbGluZS9leHRlcm5hbCBcImNhdXNhbC1uZXQub3B0aW1pemVyc1wiIiwid2VicGFjazovL0BjYXVzYWxOZXQvcGlwZWxpbmUvZXh0ZXJuYWwgXCJjYXVzYWwtbmV0LnByZXByb2Nlc3NpbmdcIiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3BpcGVsaW5lL2V4dGVybmFsIFwiY2F1c2FsLW5ldC51dGlsc1wiIl0sIm5hbWVzIjpbIkVuc2VtYmxlRGVwbG95bWVudE1peGlucyIsIkJhc2VQaXBlbGluZUNsYXNzIiwiRW5zZW1ibGVJbmZlcmVuY2VyIiwiTW9kZWxMZW5zZXMiLCJFbnNlbWJsZVByZWRpY3QiLCJFbnNlbWJsZU1vZGVsUHJlZGljdCIsIlQiLCJpbnB1dCIsImluZmVyIiwiaW5wdXRUZW5zb3IiLCJ0ZW5zb3IiLCJhc1R5cGUiLCJyZXNoYXBlIiwicHJlZGljdFRlbnNvciIsImRhdGEiLCJzZXRCeUNvbmZpZyIsInBpcGVsaW5lQ29uZmlnIiwiTG9nZ2VyIiwiZ3JvdXBCZWdpbiIsIkRlcGxveW1lbnQiLCJncm91cEVuZCIsImRlcGxveSIsIkVuc2VtYmxlRXZhbHVhdG9yTWl4aW5zIiwiZW5zZW1ibGVUZXN0IiwiYmF0Y2hTaXplIiwibWV0aG9kIiwiRXJyb3IiLCJFbnNlbWJsZU1vZGVsTWl4aW5zIiwiRml0TW9kZWwiLCJFbnNlbWJsZU1vZGVscyIsIkJhZ2dpbmciLCJwcm9iRml0cyIsIm1vZGVsIiwibG9hZFBhcmFtcyIsInByb2IiLCJleHAiLCJwdXNoIiwibWVhblByb2IiLCJzdGFjayIsIm1lYW4iLCJhcmdNYXgiLCJtb2RlbGlzdCIsImVuc2VtYmxlTW9kZWxzIiwiRW5zZW1ibGVUcmFpbmVyTWl4aW5zIiwiZW5zZW1ibGVUcmFpbiIsIm51bUVwb2NocyIsInNhdmVGaWxlTmFtZSIsIkxheWVyUnVubmVyIiwiTmV0UGFyYW1ldGVycyIsIlBhcmFtZXRlckluaXRpYWxpemVyIiwiTmV0TGF5ZXJzIiwibG9zc2VzIiwidHJhaW4iLCJzYXZlUGFyYW1zIiwiQ2F1c2FsTmV0IiwicGxhdGZvcm0iLCJtaXhXaXRoIiwiVGVuc29yIiwiRGF0YVNvdXJjZU1peGlucyIsIlByZXByb2Nlc3NpbmdNaXhpbnMiLCJMYXllclJ1bm5lck1peGlucyIsIk1vZGVsTWl4aW5zIiwiRXZhbHVhdG9yTWl4aW5zIiwiVHJhaW5lck1peGlucyIsIkxvZ2dlck1peGlucyIsIkRlcGxveW1lbnRNaXhpbnMiLCJjb25zdHJ1Y3RvciIsImZ1bmN0b3IiLCJsb2dnZXIiLCJzdHJlYW1QcmVwcm9jZXNzaW5nIiwibmV0UnVubmVyIiwic3RyZWFtRGVwbG95bWVudCIsIkYiLCJSIiwiQ29yZUZ1bmN0b3IiLCJQcmVwcm9jZXNzaW5nIiwidGVybUxvZ2dlciIsImNhdXNhbE5ldFByZXByb2Nlc3NpbmdTdHJlYW0iLCJjYXVzYWxOZXRSdW5uZXIiLCJjYXVzYWxOZXREZXBsb3ltZW50IiwiRnVuY3RvciIsIkJhc2VGdW5jdG9yIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUFuQixFQUF3Q0MsU0FBeEMsRUFBbURDLGdCQUFuRCxFQUFvRTtBQUMzRTtBQUNBLFNBQUtDLENBQUwsR0FBU0wsT0FBVDtBQUNBLFNBQUtNLENBQUwsR0FBUyxLQUFLRCxDQUFMLENBQU9FLFdBQWhCO0FBQ0EsU0FBS3pELE1BQUwsR0FBY21ELE1BQWQ7QUFDQSxTQUFLTyxhQUFMLEdBQXFCTixtQkFBckI7QUFDQSxTQUFLdEIsV0FBTCxHQUFtQnVCLFNBQW5CO0FBQ0EsU0FBS25ELFVBQUwsR0FBa0JvRCxnQkFBbEI7QUFDSDs7QUFuQjhCOztBQXNCcEIsbUVBQUtqQixTQUFMLENBQWlCYSxnREFBakIsRUFDaUJTLHlEQURqQixFQUVpQkMscUZBRmpCLEVBR2lCQyxnRUFIakIsRUFJaUJDLHlFQUpqQixDQUFmLEU7Ozs7Ozs7Ozs7OztBQ2pFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7Ozs7QUFLQSxNQUFNQyxPQUFOLFNBQXNCekIseURBQVEsQ0FBQ0MsT0FBVCxDQUFpQnlCLHVEQUFqQixFQUE4QixFQUE5QixDQUF0QixDQUF3RDtBQUNwRGYsYUFBVyxHQUFFO0FBQ1Q7QUFDSDs7QUFIbUQ7O0FBTXpDLG1FQUFJYyxPQUFKLEVBQWYsRTs7Ozs7Ozs7Ozs7O0FDYkE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7OztBQ0FBLDZEOzs7Ozs7Ozs7OztBQ0FBLGlFOzs7Ozs7Ozs7OztBQ0FBLG1FOzs7Ozs7Ozs7OztBQ0FBLDhEOzs7Ozs7Ozs7OztBQ0FBLDREOzs7Ozs7Ozs7OztBQ0FBLG1FOzs7Ozs7Ozs7OztBQ0FBLHNFOzs7Ozs7Ozs7OztBQ0FBLDhEIiwiZmlsZSI6IkBjYXVzYWxOZXQvcGlwZWxpbmUud2ViLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiY2F1c2FsLW5ldC5jb3JlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC5kYXRhc2V0c1wiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQuZGVwbG95bWVudFwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQubGF5ZXJcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LmxvZ1wiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQub3B0aW1pemVyc1wiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQucHJlcHJvY2Vzc2luZ1wiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQudXRpbHNcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiY2F1c2FsLW5ldC5jb3JlXCIsIFwiY2F1c2FsLW5ldC5kYXRhc2V0c1wiLCBcImNhdXNhbC1uZXQuZGVwbG95bWVudFwiLCBcImNhdXNhbC1uZXQubGF5ZXJcIiwgXCJjYXVzYWwtbmV0LmxvZ1wiLCBcImNhdXNhbC1uZXQub3B0aW1pemVyc1wiLCBcImNhdXNhbC1uZXQucHJlcHJvY2Vzc2luZ1wiLCBcImNhdXNhbC1uZXQudXRpbHNcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQGNhdXNhbE5ldC9waXBlbGluZVwiXSA9IGZhY3RvcnkocmVxdWlyZShcImNhdXNhbC1uZXQuY29yZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQuZGF0YXNldHNcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LmRlcGxveW1lbnRcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LmxheWVyXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC5sb2dcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0Lm9wdGltaXplcnNcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnByZXByb2Nlc3NpbmdcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnV0aWxzXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJAY2F1c2FsTmV0L3BpcGVsaW5lXCJdID0gZmFjdG9yeShyb290W1wiY2F1c2FsLW5ldC5jb3JlXCJdLCByb290W1wiY2F1c2FsLW5ldC5kYXRhc2V0c1wiXSwgcm9vdFtcImNhdXNhbC1uZXQuZGVwbG95bWVudFwiXSwgcm9vdFtcImNhdXNhbC1uZXQubGF5ZXJcIl0sIHJvb3RbXCJjYXVzYWwtbmV0LmxvZ1wiXSwgcm9vdFtcImNhdXNhbC1uZXQub3B0aW1pemVyc1wiXSwgcm9vdFtcImNhdXNhbC1uZXQucHJlcHJvY2Vzc2luZ1wiXSwgcm9vdFtcImNhdXNhbC1uZXQudXRpbHNcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X2NvcmVfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X2RhdGFzZXRzX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9kZXBsb3ltZW50X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9sYXllcl9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfbG9nX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9vcHRpbWl6ZXJzX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9wcmVwcm9jZXNzaW5nX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF91dGlsc19fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJjYXVzYWwtbmV0LmNvcmVcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnV0aWxzXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcImNhdXNhbC1uZXQuY29yZVwiLCBcImNhdXNhbC1uZXQudXRpbHNcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQGNhdXNhbE5ldC9tb2RlbHNcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJjYXVzYWwtbmV0LmNvcmVcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnV0aWxzXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJAY2F1c2FsTmV0L21vZGVsc1wiXSA9IGZhY3Rvcnkocm9vdFtcImNhdXNhbC1uZXQuY29yZVwiXSwgcm9vdFtcImNhdXNhbC1uZXQudXRpbHNcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X2NvcmVfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3V0aWxzX18pIHtcbnJldHVybiAvKioqKioqLyAoZnVuY3Rpb24obW9kdWxlcykgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbi8qKioqKiovIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdGk6IG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0bDogZmFsc2UsXG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4vKioqKioqLyBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuLyoqKioqKi8gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuLyoqKioqKi8gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3Rcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4vKioqKioqLyBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuLyoqKioqKi8gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3Rcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4vKioqKioqLyBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbi8qKioqKiovIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4vKioqKioqLyBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gbnM7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbi8qKioqKiovIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gZ2V0dGVyO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4vKioqKioqLyB9KVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovICh7XG5cbi8qKiovIFwiLi9zcmMvYmFzZU1vZGVsLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9iYXNlTW9kZWwuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIGV4cG9ydHMgcHJvdmlkZWQ6IGRlZmF1bHQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgY2F1c2FsX25ldF9jb3JlX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBjYXVzYWwtbmV0LmNvcmUgKi8gXCJjYXVzYWwtbmV0LmNvcmVcIik7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgY2F1c2FsX25ldF9jb3JlX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19fZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9fX3dlYnBhY2tfcmVxdWlyZV9fLm4oY2F1c2FsX25ldF9jb3JlX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18pO1xuXG5cbmNsYXNzIEJhc2VNb2RlbCBleHRlbmRzIGNhdXNhbF9uZXRfY29yZV9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fW1wiVGVuc29yXCJdIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLm1vZGVsTmFtZSA9ICcnO1xuICB9XG5cbiAgc2V0IExheWVyUnVubmVyKHJ1bm5lcikge1xuICAgIHRocm93IEVycm9yKCdpbXBsZW1lbnQgcmVxdWlyZWQnKTtcbiAgfVxuXG4gIGdldCBMYXllclJ1bm5lcigpIHtcbiAgICB0aHJvdyBFcnJvcignaW1wbGVtZW50IHJlcXVpcmVkJyk7XG4gIH1cblxuICBmaXQoKSB7XG4gICAgdGhyb3cgRXJyb3IoJ2ltcGxlbWVudCByZXF1aXJlZCcpO1xuICB9XG5cbiAgbG9zcygpIHtcbiAgICB0aHJvdyBFcnJvcignaW1wbGVtZW50IHJlcXVpcmVkJyk7XG4gIH1cblxuICBwcmVkaWN0KCkge1xuICAgIHRocm93IEVycm9yKCdpbXBsZW1lbnQgcmVxdWlyZWQnKTtcbiAgfVxuXG4gIG9uZUhvdFByZWRpY3QoKSB7XG4gICAgdGhyb3cgRXJyb3IoJ2ltcGxlbWVudCByZXF1aXJlZCcpO1xuICB9XG5cbn1cblxuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyBfX3dlYnBhY2tfZXhwb3J0c19fW1wiZGVmYXVsdFwiXSA9IChCYXNlTW9kZWwpO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9jYXVzYWxOZXRNb2RlbHMuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL2NhdXNhbE5ldE1vZGVscy5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgZXhwb3J0cyBwcm92aWRlZDogZGVmYXVsdCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbl9fd2VicGFja19yZXF1aXJlX18ucihfX3dlYnBhY2tfZXhwb3J0c19fKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBjYXVzYWxfbmV0X3V0aWxzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBjYXVzYWwtbmV0LnV0aWxzICovIFwiY2F1c2FsLW5ldC51dGlsc1wiKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBjYXVzYWxfbmV0X3V0aWxzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19fZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9fX3dlYnBhY2tfcmVxdWlyZV9fLm4oY2F1c2FsX25ldF91dGlsc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBjYXVzYWxfbmV0X2NvcmVfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIGNhdXNhbC1uZXQuY29yZSAqLyBcImNhdXNhbC1uZXQuY29yZVwiKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBjYXVzYWxfbmV0X2NvcmVfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX19kZWZhdWx0ID0gLyojX19QVVJFX18qL19fd2VicGFja19yZXF1aXJlX18ubihjYXVzYWxfbmV0X2NvcmVfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfXyk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX3NpbmdsZUxhYmxlQ2xhc3NpZmljYXRpb25fX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vc2luZ2xlTGFibGVDbGFzc2lmaWNhdGlvbiAqLyBcIi4vc3JjL3NpbmdsZUxhYmxlQ2xhc3NpZmljYXRpb24uanNcIik7XG5cblxuXG4vKipcbiAqIFRoaXMgY2xhc3MgcHJvdmlkZSBjb21tb24gdXNlZCBtb2RlbHMgd2hpY2ggY2FuIGJlIGFjY2Vzc2VkIHZpYSAqKmNhdXNhbE5ldE1vZGVscyoqIGluc3RhbmNlLlxuICogQGNsYXNzIENhdXNhbE5ldE1vZGVsc1xuICogQGV4dGVuZHMgQmFzZVRlbnNvclxuICogQGV4YW1wbGVcbiAqIFtFWEFNUExFIC4uL2V4YW1wbGVzL3NpbmdsZUxhYmVsQ2xhc3NpZmljYXRpb24uYmFiZWwuanNdXG4gKi9cblxuY2xhc3MgQ2F1c2FsTmV0TW9kZWxzIGV4dGVuZHMgY2F1c2FsX25ldF91dGlsc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fW1wicGxhdGZvcm1cIl0ubWl4V2l0aChjYXVzYWxfbmV0X2NvcmVfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX1tcIlRlbnNvclwiXSwgW10pIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIGNsYXNzaWZpY2F0aW9uKG51bUNsYXNzKSB7XG4gICAgdGhpcy5tb2RlbCA9IG5ldyBfc2luZ2xlTGFibGVDbGFzc2lmaWNhdGlvbl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fW1wiZGVmYXVsdFwiXShudW1DbGFzcyk7XG4gICAgcmV0dXJuIHRoaXMubW9kZWw7XG4gIH1cblxufVxuXG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIF9fd2VicGFja19leHBvcnRzX19bXCJkZWZhdWx0XCJdID0gKG5ldyBDYXVzYWxOZXRNb2RlbHMoKSk7XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL2luZGV4LmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL2luZGV4LmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIGV4cG9ydHMgcHJvdmlkZWQ6IGNhdXNhbE5ldE1vZGVscywgTW9kZWxNaXhpbnMsIEJhc2VNb2RlbCwgU2luZ2xlTGFiZWxDbGFzc2lmaWNhdGlvbiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbl9fd2VicGFja19yZXF1aXJlX18ucihfX3dlYnBhY2tfZXhwb3J0c19fKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfY2F1c2FsTmV0TW9kZWxzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL2NhdXNhbE5ldE1vZGVscyAqLyBcIi4vc3JjL2NhdXNhbE5ldE1vZGVscy5qc1wiKTtcbi8qIGhhcm1vbnkgcmVleHBvcnQgKHNhZmUpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcImNhdXNhbE5ldE1vZGVsc1wiLCBmdW5jdGlvbigpIHsgcmV0dXJuIF9jYXVzYWxOZXRNb2RlbHNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX1tcImRlZmF1bHRcIl07IH0pO1xuXG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX21vZGVsX21peGluc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9tb2RlbC5taXhpbnMgKi8gXCIuL3NyYy9tb2RlbC5taXhpbnMuanNcIik7XG4vKiBoYXJtb255IHJlZXhwb3J0IChzYWZlKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJNb2RlbE1peGluc1wiLCBmdW5jdGlvbigpIHsgcmV0dXJuIF9tb2RlbF9taXhpbnNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX1tcImRlZmF1bHRcIl07IH0pO1xuXG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX2Jhc2VNb2RlbF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9iYXNlTW9kZWwgKi8gXCIuL3NyYy9iYXNlTW9kZWwuanNcIik7XG4vKiBoYXJtb255IHJlZXhwb3J0IChzYWZlKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJCYXNlTW9kZWxcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBfYmFzZU1vZGVsX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19bXCJkZWZhdWx0XCJdOyB9KTtcblxuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9zaW5nbGVMYWJsZUNsYXNzaWZpY2F0aW9uX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8zX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL3NpbmdsZUxhYmxlQ2xhc3NpZmljYXRpb24gKi8gXCIuL3NyYy9zaW5nbGVMYWJsZUNsYXNzaWZpY2F0aW9uLmpzXCIpO1xuLyogaGFybW9ueSByZWV4cG9ydCAoc2FmZSkgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiU2luZ2xlTGFiZWxDbGFzc2lmaWNhdGlvblwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIF9zaW5nbGVMYWJsZUNsYXNzaWZpY2F0aW9uX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8zX19bXCJkZWZhdWx0XCJdOyB9KTtcblxuXG5cblxuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL21vZGVsLm1peGlucy5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvbW9kZWwubWl4aW5zLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBleHBvcnRzIHByb3ZpZGVkOiBkZWZhdWx0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xuY29uc3QgTW9kZWxNaXhpbnMgPSBCYXNlUGlwZWxpbmVDbGFzcyA9PiBjbGFzcyBleHRlbmRzIEJhc2VQaXBlbGluZUNsYXNzIHtcbiAgZ2V0IExvc3NNb2RlbCgpIHtcbiAgICBpZiAoIXRoaXMubmV0TW9kZWwpIHtcbiAgICAgIHRocm93IEVycm9yKCduZXRNb2RlbCBpcyBub3Qgc2V0Jyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMubmV0TW9kZWwuTG9zcztcbiAgfVxuXG4gIGdldCBGaXRNb2RlbCgpIHtcbiAgICBpZiAoIXRoaXMubmV0TW9kZWwpIHtcbiAgICAgIHRocm93IEVycm9yKCduZXRNb2RlbCBpcyBub3Qgc2V0Jyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMubmV0TW9kZWwuRml0O1xuICB9XG5cbiAgZ2V0IE9uZUhvdFByZWRpY3RNb2RlbCgpIHtcbiAgICBpZiAoIXRoaXMubmV0TW9kZWwpIHtcbiAgICAgIHRocm93IEVycm9yKCduZXRNb2RlbCBpcyBub3Qgc2V0Jyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMubmV0TW9kZWwuT25lSG90UHJlZGljdDtcbiAgfVxuXG4gIGdldCBQcmVkaWN0TW9kZWwoKSB7XG4gICAgaWYgKCF0aGlzLm5ldE1vZGVsKSB7XG4gICAgICB0aHJvdyBFcnJvcignbmV0TW9kZWwgaXMgbm90IHNldCcpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLm5ldE1vZGVsLlByZWRpY3Q7XG4gIH1cblxuICBnZXQgRW5jb2RlTW9kZWwoKSB7XG4gICAgaWYgKCF0aGlzLm5ldE1vZGVsKSB7XG4gICAgICB0aHJvdyBFcnJvcignbmV0TW9kZWwgaXMgbm90IHNldCcpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLm5ldE1vZGVsLkVuY29kZTtcbiAgfVxuXG4gIGdldCBEZWNvZGVNb2RlbCgpIHtcbiAgICBpZiAoIXRoaXMubmV0TW9kZWwpIHtcbiAgICAgIHRocm93IEVycm9yKCduZXRNb2RlbCBpcyBub3Qgc2V0Jyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMubmV0TW9kZWwuRGVjb2RlO1xuICB9XG5cbiAgZ2V0IE1vZGVsKCkge1xuICAgIGlmICghdGhpcy5uZXRNb2RlbCkge1xuICAgICAgdGhyb3cgRXJyb3IoJ25ldE1vZGVsIGlzIG5vdCBzZXQnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5uZXRNb2RlbDtcbiAgfVxuXG4gIHNldCBNb2RlbChtb2RlbCkge1xuICAgIHRoaXMubmV0TW9kZWwgPSBtb2RlbDtcbiAgfVxuXG4gIHNldEJ5Q29uZmlnKHBpcGVsaW5lQ29uZmlnKSB7XG4gICAgaWYgKHN1cGVyLnNldEJ5Q29uZmlnKSB7XG4gICAgICBzdXBlci5zZXRCeUNvbmZpZyhwaXBlbGluZUNvbmZpZyk7XG4gICAgfVxuXG4gICAgdGhpcy5Mb2dnZXIuZ3JvdXBCZWdpbignc2V0IE1vZGVsIGJ5IGNvbmZpZycpO1xuICAgIGNvbnN0IHtcbiAgICAgIE1vZGVsXG4gICAgfSA9IHBpcGVsaW5lQ29uZmlnLk5ldDtcblxuICAgIGlmICghTW9kZWwpIHtcbiAgICAgIHRocm93IEVycm9yKGBNb2RlbCBpcyBub3Qgc2V0IGluICR7SlNPTi5zdHJpbmdsaWZ5KHBpcGVsaW5lQ29uZmlnKX1gKTtcbiAgICB9XG5cbiAgICBNb2RlbC5MYXllclJ1bm5lciA9IHRoaXMuTGF5ZXJSdW5uZXI7XG4gICAgdGhpcy5Nb2RlbCA9IE1vZGVsO1xuICAgIHRoaXMuTG9nZ2VyLmdyb3VwRW5kKCk7XG4gIH1cblxufTtcblxuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyBfX3dlYnBhY2tfZXhwb3J0c19fW1wiZGVmYXVsdFwiXSA9IChNb2RlbE1peGlucyk7XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL3NpbmdsZUxhYmxlQ2xhc3NpZmljYXRpb24uanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9zaW5nbGVMYWJsZUNsYXNzaWZpY2F0aW9uLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgZXhwb3J0cyBwcm92aWRlZDogZGVmYXVsdCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbl9fd2VicGFja19yZXF1aXJlX18ucihfX3dlYnBhY2tfZXhwb3J0c19fKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfYmFzZU1vZGVsX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL2Jhc2VNb2RlbCAqLyBcIi4vc3JjL2Jhc2VNb2RlbC5qc1wiKTtcblxuXG5jbGFzcyBTaW5nbGVMYWJlbENsYXNzaWZpY2F0aW9uIGV4dGVuZHMgX2Jhc2VNb2RlbF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fW1wiZGVmYXVsdFwiXSB7XG4gIGNvbnN0cnVjdG9yKG51bUNsYXNzKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIGlmIChudW1DbGFzcyA+IDApIHtcbiAgICAgIHRoaXMubnVtQ2xhc3MgPSBudW1DbGFzcztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgRXJyb3IoYGV4cGVjdCBudW1jbGFzcywgZ2V0ICR7bnVtQ2xhc3N9YCk7XG4gICAgfVxuICB9XG5cbiAgc2V0IExheWVyUnVubmVyKGxheWVyUnVubmVyKSB7XG4gICAgbGV0IHtcbiAgICAgIFByZWRpY3RvclxuICAgIH0gPSBsYXllclJ1bm5lcjtcbiAgICB0aGlzLnJ1bm5lciA9IHtcbiAgICAgIFByZWRpY3RvclxuICAgIH07XG4gIH1cblxuICBnZXQgTGF5ZXJSdW5uZXIoKSB7XG4gICAgaWYgKCF0aGlzLnJ1bm5lcikge1xuICAgICAgdGhyb3cgRXJyb3IoJ3J1bm5lciBpcyBub3Qgc2V0Jyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMucnVubmVyO1xuICB9XG5cbiAgZ2V0IEZpdCgpIHtcbiAgICBjb25zdCB7XG4gICAgICBQcmVkaWN0b3JcbiAgICB9ID0gdGhpcy5MYXllclJ1bm5lcjtcbiAgICByZXR1cm4gaW5wdXRUZW5zb3IgPT4ge1xuICAgICAgbGV0IG91dFB1dFRlbnNvciA9IFByZWRpY3RvcihpbnB1dFRlbnNvcik7XG4gICAgICBsZXQgbG9nUHJvYiA9IG91dFB1dFRlbnNvci5zdWIob3V0UHV0VGVuc29yLmxvZ1N1bUV4cCgxLCB0cnVlKSk7XG4gICAgICByZXR1cm4gbG9nUHJvYjtcbiAgICB9O1xuICB9XG5cbiAgZ2V0IFByZWRpY3QoKSB7XG4gICAgY29uc3QgRml0ID0gdGhpcy5GaXQ7XG4gICAgcmV0dXJuIGlucHV0VGVuc29yID0+IHtcbiAgICAgIGxldCBsb2dQcm9iID0gRml0KGlucHV0VGVuc29yKTtcbiAgICAgIGxldCBwcmVkaWN0ZWRDbGFzcyA9IGxvZ1Byb2IuYXJnTWF4KDEpO1xuICAgICAgcmV0dXJuIHByZWRpY3RlZENsYXNzO1xuICAgIH07XG4gIH1cblxuICBnZXQgT25lSG90UHJlZGljdCgpIHtcbiAgICBjb25zdCBQcmVkaWN0ID0gdGhpcy5QcmVkaWN0O1xuICAgIHJldHVybiBpbnB1dFRlbnNvciA9PiB7XG4gICAgICBsZXQgcHJlZGljdGVkQ2xhc3MgPSBQcmVkaWN0KGlucHV0VGVuc29yKTtcbiAgICAgIGxldCBvbmVIb3RQcmVkaWN0ID0gdGhpcy5ULm9uZUhvdChwcmVkaWN0ZWRDbGFzcywgdGhpcy5udW1DbGFzcyk7XG4gICAgICByZXR1cm4gb25lSG90UHJlZGljdDtcbiAgICB9O1xuICB9XG5cbiAgZ2V0IExvc3MoKSB7XG4gICAgY29uc3QgRml0ID0gdGhpcy5GaXQ7XG4gICAgcmV0dXJuIChpbnB1dFRlbnNvciwgbGFiZWxUZW5zb3IpID0+IHtcbiAgICAgIGxldCBsb2dQcm9iID0gRml0KGlucHV0VGVuc29yKTtcbiAgICAgIGxldCBsaWtlbGlob29kID0gbG9nUHJvYi5uZWcoKS5tdWwobGFiZWxUZW5zb3IpO1xuICAgICAgbGV0IGxvc3MgPSBsaWtlbGlob29kLnN1bSgxKS5tZWFuKCk7XG4gICAgICByZXR1cm4gbG9zcztcbiAgICB9O1xuICB9XG5cbn1cblxuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyBfX3dlYnBhY2tfZXhwb3J0c19fW1wiZGVmYXVsdFwiXSA9IChTaW5nbGVMYWJlbENsYXNzaWZpY2F0aW9uKTtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiY2F1c2FsLW5ldC5jb3JlXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIGV4dGVybmFsIFwiY2F1c2FsLW5ldC5jb3JlXCIgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxubW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfY29yZV9fO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCJjYXVzYWwtbmV0LnV0aWxzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiBleHRlcm5hbCBcImNhdXNhbC1uZXQudXRpbHNcIiAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxubW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfdXRpbHNfXztcblxuLyoqKi8gfSlcblxuLyoqKioqKi8gfSk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluZGxZbkJoWTJzNkx5OUFZMkYxYzJGc1RtVjBMMjF2WkdWc2N5OTNaV0p3WVdOckwzVnVhWFpsY25OaGJFMXZaSFZzWlVSbFptbHVhWFJwYjI0aUxDSjNaV0p3WVdOck9pOHZRR05oZFhOaGJFNWxkQzl0YjJSbGJITXZkMlZpY0dGamF5OWliMjkwYzNSeVlYQWlMQ0ozWldKd1lXTnJPaTh2UUdOaGRYTmhiRTVsZEM5dGIyUmxiSE12TGk5emNtTXZZbUZ6WlUxdlpHVnNMbXB6SWl3aWQyVmljR0ZqYXpvdkwwQmpZWFZ6WVd4T1pYUXZiVzlrWld4ekx5NHZjM0pqTDJOaGRYTmhiRTVsZEUxdlpHVnNjeTVxY3lJc0luZGxZbkJoWTJzNkx5OUFZMkYxYzJGc1RtVjBMMjF2WkdWc2N5OHVMM055WXk5cGJtUmxlQzVxY3lJc0luZGxZbkJoWTJzNkx5OUFZMkYxYzJGc1RtVjBMMjF2WkdWc2N5OHVMM055WXk5dGIyUmxiQzV0YVhocGJuTXVhbk1pTENKM1pXSndZV05yT2k4dlFHTmhkWE5oYkU1bGRDOXRiMlJsYkhNdkxpOXpjbU12YzJsdVoyeGxUR0ZpYkdWRGJHRnpjMmxtYVdOaGRHbHZiaTVxY3lJc0luZGxZbkJoWTJzNkx5OUFZMkYxYzJGc1RtVjBMMjF2WkdWc2N5OWxlSFJsY201aGJDQmNJbU5oZFhOaGJDMXVaWFF1WTI5eVpWd2lJaXdpZDJWaWNHRmphem92TDBCallYVnpZV3hPWlhRdmJXOWtaV3h6TDJWNGRHVnlibUZzSUZ3aVkyRjFjMkZzTFc1bGRDNTFkR2xzYzF3aUlsMHNJbTVoYldWeklqcGJJa0poYzJWTmIyUmxiQ0lzSWxSbGJuTnZjaUlzSW1OdmJuTjBjblZqZEc5eUlpd2liVzlrWld4T1lXMWxJaXdpVEdGNVpYSlNkVzV1WlhJaUxDSnlkVzV1WlhJaUxDSkZjbkp2Y2lJc0ltWnBkQ0lzSW14dmMzTWlMQ0p3Y21Wa2FXTjBJaXdpYjI1bFNHOTBVSEpsWkdsamRDSXNJa05oZFhOaGJFNWxkRTF2WkdWc2N5SXNJbkJzWVhSbWIzSnRJaXdpYldsNFYybDBhQ0lzSWtKaGMyVlVaVzV6YjNJaUxDSmpiR0Z6YzJsbWFXTmhkR2x2YmlJc0ltNTFiVU5zWVhOeklpd2liVzlrWld3aUxDSlRhVzVuYkdWTVlXSmxiRU5zWVhOemFXWnBZMkYwYVc5dUlpd2lUVzlrWld4TmFYaHBibk1pTENKQ1lYTmxVR2x3Wld4cGJtVkRiR0Z6Y3lJc0lreHZjM05OYjJSbGJDSXNJbTVsZEUxdlpHVnNJaXdpVEc5emN5SXNJa1pwZEUxdlpHVnNJaXdpUm1sMElpd2lUMjVsU0c5MFVISmxaR2xqZEUxdlpHVnNJaXdpVDI1bFNHOTBVSEpsWkdsamRDSXNJbEJ5WldScFkzUk5iMlJsYkNJc0lsQnlaV1JwWTNRaUxDSkZibU52WkdWTmIyUmxiQ0lzSWtWdVkyOWtaU0lzSWtSbFkyOWtaVTF2WkdWc0lpd2lSR1ZqYjJSbElpd2lUVzlrWld3aUxDSnpaWFJDZVVOdmJtWnBaeUlzSW5CcGNHVnNhVzVsUTI5dVptbG5JaXdpVEc5bloyVnlJaXdpWjNKdmRYQkNaV2RwYmlJc0lrNWxkQ0lzSWtwVFQwNGlMQ0p6ZEhKcGJtZHNhV1o1SWl3aVozSnZkWEJGYm1RaUxDSnNZWGxsY2xKMWJtNWxjaUlzSWxCeVpXUnBZM1J2Y2lJc0ltbHVjSFYwVkdWdWMyOXlJaXdpYjNWMFVIVjBWR1Z1YzI5eUlpd2liRzluVUhKdllpSXNJbk4xWWlJc0lteHZaMU4xYlVWNGNDSXNJbkJ5WldScFkzUmxaRU5zWVhOeklpd2lZWEpuVFdGNElpd2lWQ0lzSW05dVpVaHZkQ0lzSW14aFltVnNWR1Z1YzI5eUlpd2liR2xyWld4cGFHOXZaQ0lzSW01bFp5SXNJbTExYkNJc0luTjFiU0lzSW0xbFlXNGlYU3dpYldGd2NHbHVaM01pT2lKQlFVRkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRU5CUVVNN1FVRkRSQ3hQTzBGRFZrRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN096dEJRVWRCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4clJFRkJNRU1zWjBOQlFXZERPMEZCUXpGRk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1owVkJRWGRFTEd0Q1FVRnJRanRCUVVNeFJUdEJRVU5CTEhsRVFVRnBSQ3hqUVVGak8wRkJReTlFT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hwUkVGQmVVTXNhVU5CUVdsRE8wRkJRekZGTEhkSVFVRm5TQ3h0UWtGQmJVSXNSVUZCUlR0QlFVTnlTVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJMRzFEUVVFeVFpd3dRa0ZCTUVJc1JVRkJSVHRCUVVOMlJDeDVRMEZCYVVNc1pVRkJaVHRCUVVOb1JEdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRU3c0UkVGQmMwUXNLMFJCUVN0RU96dEJRVVZ5U0R0QlFVTkJPenM3UVVGSFFUdEJRVU5CT3pzN096czdPenM3T3pzN08wRkRiRVpCTzBGQlFVRTdRVUZCUVR0QlFVRkJPenRCUVVOQkxFMUJRVTFCTEZOQlFVNHNVMEZCZDBKRExITkVRVUY0UWl4RFFVRTRRanRCUVVNeFFrTXNZVUZCVnl4SFFVRkZPMEZCUTFRN1FVRkRRU3hUUVVGTFF5eFRRVUZNTEVkQlFXbENMRVZCUVdwQ08wRkJRMGc3TzBGQlJVUXNUVUZCU1VNc1YwRkJTaXhEUVVGblFrTXNUVUZCYUVJc1JVRkJkVUk3UVVGRGJrSXNWVUZCVFVNc1MwRkJTeXhEUVVGRExHOUNRVUZFTEVOQlFWZzdRVUZEU0RzN1FVRkZSQ3hOUVVGSlJpeFhRVUZLTEVkQlFXbENPMEZCUTJJc1ZVRkJUVVVzUzBGQlN5eERRVUZETEc5Q1FVRkVMRU5CUVZnN1FVRkRTRHM3UVVGRlJFTXNTMEZCUnl4SFFVRkZPMEZCUTBRc1ZVRkJUVVFzUzBGQlN5eERRVUZETEc5Q1FVRkVMRU5CUVZnN1FVRkRTRHM3UVVGRlJFVXNUVUZCU1N4SFFVRkZPMEZCUTBZc1ZVRkJUVVlzUzBGQlN5eERRVUZETEc5Q1FVRkVMRU5CUVZnN1FVRkRTRHM3UVVGRlJFY3NVMEZCVHl4SFFVRkZPMEZCUTB3c1ZVRkJUVWdzUzBGQlN5eERRVUZETEc5Q1FVRkVMRU5CUVZnN1FVRkRTRHM3UVVGRFJFa3NaVUZCWVN4SFFVRkZPMEZCUTFnc1ZVRkJUVW9zUzBGQlN5eERRVUZETEc5Q1FVRkVMRU5CUVZnN1FVRkRTRHM3UVVFelFubENPenRCUVRoQ1prNHNkMFZCUVdZc1JUczdPenM3T3pzN096czdPMEZETDBKQk8wRkJRVUU3UVVGQlFUdEJRVUZCTzBGQlFVRTdRVUZCUVR0QlFVRkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96czdPenM3T3p0QlFVOUJMRTFCUVUxWExHVkJRVTRzVTBGQk9FSkRMSGxFUVVGUkxFTkJRVU5ETEU5QlFWUXNRMEZCYTBKRExITkVRVUZzUWl4RlFVRTRRaXhGUVVFNVFpeERRVUU1UWl4RFFVRm5SVHRCUVVNMVJGb3NZVUZCVnl4SFFVRkZPMEZCUTFRN1FVRkRTRHM3UVVGRlJHRXNaMEpCUVdNc1EwRkJRME1zVVVGQlJDeEZRVUZWTzBGQlEzQkNMRk5CUVV0RExFdEJRVXdzUjBGQllTeEpRVUZKUXl4clJVRkJTaXhEUVVFNFFrWXNVVUZCT1VJc1EwRkJZanRCUVVOQkxGZEJRVThzUzBGQlMwTXNTMEZCV2p0QlFVTklPenRCUVZJeVJEczdRVUZWYWtRc2JVVkJRVWxPTEdWQlFVb3NSVUZCWml4Rk96czdPenM3T3pzN096czdRVU53UWtFN1FVRkJRVHRCUVVGQk8wRkJRVUU3UVVGQlFUdEJRVUZCTzBGQlFVRTdRVUZCUVR0QlFVRkJPMEZCUVVFN1FVRkJRVHRCUVVGQk8wRkJRVUU3UVVGQlFUdEJRVU5CTzBGQlJVRTdPenM3T3pzN096czdPenM3UVVOSVFUdEJRVUZCTEUxQlFVMVJMRmRCUVZjc1IwRkJTVU1zYVVKQlFVUXNTVUZCYzBJc1kwRkJZMEVzYVVKQlFXUXNRMEZCSzBJN1FVRkRja1VzVFVGQlNVTXNVMEZCU2l4SFFVRmxPMEZCUTFnc1VVRkJSeXhEUVVGRExFdEJRVXRETEZGQlFWUXNSVUZCYTBJN1FVRkRaQ3haUVVGTmFFSXNTMEZCU3l4RFFVRkRMSEZDUVVGRUxFTkJRVmc3UVVGRFNEczdRVUZEUkN4WFFVRlBMRXRCUVV0blFpeFJRVUZNTEVOQlFXTkRMRWxCUVhKQ08wRkJRMGc3TzBGQlJVUXNUVUZCU1VNc1VVRkJTaXhIUVVGak8wRkJRMVlzVVVGQlJ5eERRVUZETEV0QlFVdEdMRkZCUVZRc1JVRkJhMEk3UVVGRFpDeFpRVUZOYUVJc1MwRkJTeXhEUVVGRExIRkNRVUZFTEVOQlFWZzdRVUZEU0RzN1FVRkRSQ3hYUVVGUExFdEJRVXRuUWl4UlFVRk1MRU5CUVdOSExFZEJRWEpDTzBGQlEwZzdPMEZCUlVRc1RVRkJTVU1zYTBKQlFVb3NSMEZCZDBJN1FVRkRjRUlzVVVGQlJ5eERRVUZETEV0QlFVdEtMRkZCUVZRc1JVRkJhMEk3UVVGRFpDeFpRVUZOYUVJc1MwRkJTeXhEUVVGRExIRkNRVUZFTEVOQlFWZzdRVUZEU0RzN1FVRkRSQ3hYUVVGUExFdEJRVXRuUWl4UlFVRk1MRU5CUVdOTExHRkJRWEpDTzBGQlEwZzdPMEZCUlVRc1RVRkJTVU1zV1VGQlNpeEhRVUZyUWp0QlFVTmtMRkZCUVVjc1EwRkJReXhMUVVGTFRpeFJRVUZVTEVWQlFXdENPMEZCUTJRc1dVRkJUV2hDTEV0QlFVc3NRMEZCUXl4eFFrRkJSQ3hEUVVGWU8wRkJRMGc3TzBGQlEwUXNWMEZCVHl4TFFVRkxaMElzVVVGQlRDeERRVUZqVHl4UFFVRnlRanRCUVVOSU96dEJRVVZFTEUxQlFVbERMRmRCUVVvc1IwRkJhVUk3UVVGRFlpeFJRVUZITEVOQlFVTXNTMEZCUzFJc1VVRkJWQ3hGUVVGclFqdEJRVU5rTEZsQlFVMW9RaXhMUVVGTExFTkJRVU1zY1VKQlFVUXNRMEZCV0R0QlFVTklPenRCUVVORUxGZEJRVThzUzBGQlMyZENMRkZCUVV3c1EwRkJZMU1zVFVGQmNrSTdRVUZEU0RzN1FVRkZSQ3hOUVVGSlF5eFhRVUZLTEVkQlFXbENPMEZCUTJJc1VVRkJSeXhEUVVGRExFdEJRVXRXTEZGQlFWUXNSVUZCYTBJN1FVRkRaQ3haUVVGTmFFSXNTMEZCU3l4RFFVRkRMSEZDUVVGRUxFTkJRVmc3UVVGRFNEczdRVUZEUkN4WFFVRlBMRXRCUVV0blFpeFJRVUZNTEVOQlFXTlhMRTFCUVhKQ08wRkJRMGc3TzBGQlIwUXNUVUZCU1VNc1MwRkJTaXhIUVVGWE8wRkJRMUFzVVVGQlJ5eERRVUZETEV0QlFVdGFMRkZCUVZRc1JVRkJhMEk3UVVGRFpDeFpRVUZOYUVJc1MwRkJTeXhEUVVGRExIRkNRVUZFTEVOQlFWZzdRVUZEU0RzN1FVRkRSQ3hYUVVGUExFdEJRVXRuUWl4UlFVRmFPMEZCUTBnN08wRkJSMFFzVFVGQlNWa3NTMEZCU2l4RFFVRlZha0lzUzBGQlZpeEZRVUZuUWp0QlFVTmFMRk5CUVV0TExGRkJRVXdzUjBGQlowSk1MRXRCUVdoQ08wRkJRMGc3TzBGQlJVUnJRaXhoUVVGWExFTkJRVU5ETEdOQlFVUXNSVUZCWjBJN1FVRkRka0lzVVVGQlJ5eE5RVUZOUkN4WFFVRlVMRVZCUVhGQ08wRkJRMnBDTEZsQlFVMUJMRmRCUVU0c1EwRkJhMEpETEdOQlFXeENPMEZCUTBnN08wRkJRMFFzVTBGQlMwTXNUVUZCVEN4RFFVRlpReXhWUVVGYUxFTkJRWFZDTEhGQ1FVRjJRanRCUVVOQkxGVkJRVTA3UVVGQlJVbzdRVUZCUml4UlFVRlpSU3hqUVVGakxFTkJRVU5ITEVkQlFXcERPenRCUVVOQkxGRkJRVWNzUTBGQlEwd3NTMEZCU2l4RlFVRlZPMEZCUTA0c1dVRkJUVFZDTEV0QlFVc3NRMEZCUlN4MVFrRkJjMEpyUXl4SlFVRkpMRU5CUVVORExGVkJRVXdzUTBGQlowSk1MR05CUVdoQ0xFTkJRV2RETEVWQlFYaEVMRU5CUVZnN1FVRkRTRHM3UVVGRFJFWXNVMEZCU3l4RFFVRkRPVUlzVjBGQlRpeEhRVUZ2UWl4TFFVRkxRU3hYUVVGNlFqdEJRVU5CTEZOQlFVczRRaXhMUVVGTUxFZEJRV0ZCTEV0QlFXSTdRVUZEUVN4VFFVRkxSeXhOUVVGTUxFTkJRVmxMTEZGQlFWbzdRVUZEU0RzN1FVRndSVzlGTEVOQlFYcEZPenRCUVhWRlpYWkNMREJGUVVGbUxFVTdPenM3T3pzN096czdPenRCUTNaRlFUdEJRVUZCTzBGQlFVRTdPMEZCUlVFc1RVRkJUVVFzZVVKQlFVNHNVMEZCZDBOc1FpeHJSRUZCZUVNc1EwRkJhVVE3UVVGRE4wTkZMR0ZCUVZjc1EwRkJRMk1zVVVGQlJDeEZRVUZWTzBGQlEycENPenRCUVVOQkxGRkJRVWRCTEZGQlFWRXNSMEZCUnl4RFFVRmtMRVZCUVdkQ08wRkJRMW9zVjBGQlMwRXNVVUZCVEN4SFFVRm5Ra0VzVVVGQmFFSTdRVUZEU0N4TFFVWkVMRTFCUjBrN1FVRkRRU3haUVVGTlZpeExRVUZMTEVOQlFVVXNkMEpCUVhWQ1ZTeFJRVUZUTEVWQlFXeERMRU5CUVZnN1FVRkRTRHRCUVVOS096dEJRVVZFTEUxQlFVbGFMRmRCUVVvc1EwRkJaMEoxUXl4WFFVRm9RaXhGUVVFMFFqdEJRVU40UWl4UlFVRkpPMEZCUVVWRE8wRkJRVVlzVVVGQlowSkVMRmRCUVhCQ08wRkJRMEVzVTBGQlMzUkRMRTFCUVV3c1IwRkJZenRCUVVGRmRVTTdRVUZCUml4TFFVRmtPMEZCUTBnN08wRkJSVVFzVFVGQlNYaERMRmRCUVVvc1IwRkJhVUk3UVVGRFlpeFJRVUZITEVOQlFVTXNTMEZCUzBNc1RVRkJWQ3hGUVVGblFqdEJRVU5hTEZsQlFVMURMRXRCUVVzc1EwRkJReXh0UWtGQlJDeERRVUZZTzBGQlEwZzdPMEZCUTBRc1YwRkJUeXhMUVVGTFJDeE5RVUZhTzBGQlEwZzdPMEZCUlVRc1RVRkJTVzlDTEVkQlFVb3NSMEZCVXp0QlFVTk1MRlZCUVUwN1FVRkJSVzFDTzBGQlFVWXNVVUZCWjBJc1MwRkJTM2hETEZkQlFUTkNPMEZCUTBFc1YwRkJVWGxETEZkQlFVUXNTVUZCWlR0QlFVTnNRaXhWUVVGSlF5eFpRVUZaTEVkQlFVZEdMRk5CUVZNc1EwRkJRME1zVjBGQlJDeERRVUUxUWp0QlFVTkJMRlZCUVVsRkxFOUJRVThzUjBGQlIwUXNXVUZCV1N4RFFVRkRSU3hIUVVGaUxFTkJRV2xDUml4WlFVRlpMRU5CUVVOSExGTkJRV0lzUTBGQmRVSXNRMEZCZGtJc1JVRkJNRUlzU1VGQk1VSXNRMEZCYWtJc1EwRkJaRHRCUVVOQkxHRkJRVTlHTEU5QlFWQTdRVUZEU0N4TFFVcEVPMEZCUzBnN08wRkJSVVFzVFVGQlNXeENMRTlCUVVvc1IwRkJZVHRCUVVOVUxGVkJRVTFLTEVkQlFVY3NSMEZCUnl4TFFVRkxRU3hIUVVGcVFqdEJRVU5CTEZkQlFWRnZRaXhYUVVGRUxFbEJRV1U3UVVGRGJFSXNWVUZCU1VVc1QwRkJUeXhIUVVGSGRFSXNSMEZCUnl4RFFVRkRiMElzVjBGQlJDeERRVUZxUWp0QlFVTkJMRlZCUVVsTExHTkJRV01zUjBGQlIwZ3NUMEZCVHl4RFFVRkRTU3hOUVVGU0xFTkJRV1VzUTBGQlppeERRVUZ5UWp0QlFVTkJMR0ZCUVU5RUxHTkJRVkE3UVVGRFNDeExRVXBFTzBGQlMwZzdPMEZCUlVRc1RVRkJTWFpDTEdGQlFVb3NSMEZCYlVJN1FVRkRaaXhWUVVGTlJTeFBRVUZQTEVkQlFVY3NTMEZCUzBFc1QwRkJja0k3UVVGRFFTeFhRVUZSWjBJc1YwRkJSQ3hKUVVGbE8wRkJRMnhDTEZWQlFVbExMR05CUVdNc1IwRkJSM0pDTEU5QlFVOHNRMEZCUTJkQ0xGZEJRVVFzUTBGQk5VSTdRVUZEUVN4VlFVRkpia01zWVVGQllTeEhRVUZITEV0QlFVc3dReXhEUVVGTUxFTkJRVTlETEUxQlFWQXNRMEZCWTBnc1kwRkJaQ3hGUVVFNFFpeExRVUZMYkVNc1VVRkJia01zUTBGQmNFSTdRVUZEUVN4aFFVRlBUaXhoUVVGUU8wRkJRMGdzUzBGS1JEdEJRVXRJT3p0QlFVTkVMRTFCUVVsaExFbEJRVW9zUjBGQlZUdEJRVU5PTEZWQlFVMUZMRWRCUVVjc1IwRkJSeXhMUVVGTFFTeEhRVUZxUWp0QlFVTkJMRmRCUVU4c1EwRkJRMjlDTEZkQlFVUXNSVUZCWTFNc1YwRkJaQ3hMUVVFMFFqdEJRVU12UWl4VlFVRkpVQ3hQUVVGUExFZEJRVWQwUWl4SFFVRkhMRU5CUVVOdlFpeFhRVUZFTEVOQlFXcENPMEZCUTBFc1ZVRkJTVlVzVlVGQlZTeEhRVUZIVWl4UFFVRlBMRU5CUVVOVExFZEJRVklzUjBGQlkwTXNSMEZCWkN4RFFVRnJRa2dzVjBGQmJFSXNRMEZCYWtJN1FVRkRRU3hWUVVGSk9VTXNTVUZCU1N4SFFVRkhLME1zVlVGQlZTeERRVUZEUnl4SFFVRllMRU5CUVdVc1EwRkJaaXhGUVVGclFrTXNTVUZCYkVJc1JVRkJXRHRCUVVOQkxHRkJRVTl1UkN4SlFVRlFPMEZCUTBnc1MwRk1SRHRCUVUxSU96dEJRWHBFTkVNN08wRkJNa1JzUTFVc2QwWkJRV1lzUlRzN096czdPenM3T3pzN1FVTTNSRUVzTmtRN096czdPenM3T3pzN08wRkRRVUVzT0VRaUxDSm1hV3hsSWpvaVFHTmhkWE5oYkU1bGRDOXRiMlJsYkhNdWQyVmlMbXB6SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaUtHWjFibU4wYVc5dUlIZGxZbkJoWTJ0VmJtbDJaWEp6WVd4TmIyUjFiR1ZFWldacGJtbDBhVzl1S0hKdmIzUXNJR1poWTNSdmNua3BJSHRjYmx4MGFXWW9kSGx3Wlc5bUlHVjRjRzl5ZEhNZ1BUMDlJQ2R2WW1wbFkzUW5JQ1ltSUhSNWNHVnZaaUJ0YjJSMWJHVWdQVDA5SUNkdlltcGxZM1FuS1Z4dVhIUmNkRzF2WkhWc1pTNWxlSEJ2Y25SeklEMGdabUZqZEc5eWVTaHlaWEYxYVhKbEtGd2lZMkYxYzJGc0xXNWxkQzVqYjNKbFhDSXBMQ0J5WlhGMWFYSmxLRndpWTJGMWMyRnNMVzVsZEM1MWRHbHNjMXdpS1NrN1hHNWNkR1ZzYzJVZ2FXWW9kSGx3Wlc5bUlHUmxabWx1WlNBOVBUMGdKMloxYm1OMGFXOXVKeUFtSmlCa1pXWnBibVV1WVcxa0tWeHVYSFJjZEdSbFptbHVaU2hiWENKallYVnpZV3d0Ym1WMExtTnZjbVZjSWl3Z1hDSmpZWFZ6WVd3dGJtVjBMblYwYVd4elhDSmRMQ0JtWVdOMGIzSjVLVHRjYmx4MFpXeHpaU0JwWmloMGVYQmxiMllnWlhod2IzSjBjeUE5UFQwZ0oyOWlhbVZqZENjcFhHNWNkRngwWlhod2IzSjBjMXRjSWtCallYVnpZV3hPWlhRdmJXOWtaV3h6WENKZElEMGdabUZqZEc5eWVTaHlaWEYxYVhKbEtGd2lZMkYxYzJGc0xXNWxkQzVqYjNKbFhDSXBMQ0J5WlhGMWFYSmxLRndpWTJGMWMyRnNMVzVsZEM1MWRHbHNjMXdpS1NrN1hHNWNkR1ZzYzJWY2JseDBYSFJ5YjI5MFcxd2lRR05oZFhOaGJFNWxkQzl0YjJSbGJITmNJbDBnUFNCbVlXTjBiM0o1S0hKdmIzUmJYQ0pqWVhWellXd3RibVYwTG1OdmNtVmNJbDBzSUhKdmIzUmJYQ0pqWVhWellXd3RibVYwTG5WMGFXeHpYQ0pkS1R0Y2JuMHBLSFJvYVhNc0lHWjFibU4wYVc5dUtGOWZWMFZDVUVGRFMxOUZXRlJGVWs1QlRGOU5UMFJWVEVWZlkyRjFjMkZzWDI1bGRGOWpiM0psWDE4c0lGOWZWMFZDVUVGRFMxOUZXRlJGVWs1QlRGOU5UMFJWVEVWZlkyRjFjMkZzWDI1bGRGOTFkR2xzYzE5ZktTQjdYRzV5WlhSMWNtNGdJaXdpSUZ4MEx5OGdWR2hsSUcxdlpIVnNaU0JqWVdOb1pWeHVJRngwZG1GeUlHbHVjM1JoYkd4bFpFMXZaSFZzWlhNZ1BTQjdmVHRjYmx4dUlGeDBMeThnVkdobElISmxjWFZwY21VZ1puVnVZM1JwYjI1Y2JpQmNkR1oxYm1OMGFXOXVJRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMThvYlc5a2RXeGxTV1FwSUh0Y2JseHVJRngwWEhRdkx5QkRhR1ZqYXlCcFppQnRiMlIxYkdVZ2FYTWdhVzRnWTJGamFHVmNiaUJjZEZ4MGFXWW9hVzV6ZEdGc2JHVmtUVzlrZFd4bGMxdHRiMlIxYkdWSlpGMHBJSHRjYmlCY2RGeDBYSFJ5WlhSMWNtNGdhVzV6ZEdGc2JHVmtUVzlrZFd4bGMxdHRiMlIxYkdWSlpGMHVaWGh3YjNKMGN6dGNiaUJjZEZ4MGZWeHVJRngwWEhRdkx5QkRjbVZoZEdVZ1lTQnVaWGNnYlc5a2RXeGxJQ2hoYm1RZ2NIVjBJR2wwSUdsdWRHOGdkR2hsSUdOaFkyaGxLVnh1SUZ4MFhIUjJZWElnYlc5a2RXeGxJRDBnYVc1emRHRnNiR1ZrVFc5a2RXeGxjMXR0YjJSMWJHVkpaRjBnUFNCN1hHNGdYSFJjZEZ4MGFUb2diVzlrZFd4bFNXUXNYRzRnWEhSY2RGeDBiRG9nWm1Gc2MyVXNYRzRnWEhSY2RGeDBaWGh3YjNKMGN6b2dlMzFjYmlCY2RGeDBmVHRjYmx4dUlGeDBYSFF2THlCRmVHVmpkWFJsSUhSb1pTQnRiMlIxYkdVZ1puVnVZM1JwYjI1Y2JpQmNkRngwYlc5a2RXeGxjMXR0YjJSMWJHVkpaRjB1WTJGc2JDaHRiMlIxYkdVdVpYaHdiM0owY3l3Z2JXOWtkV3hsTENCdGIyUjFiR1V1Wlhod2IzSjBjeXdnWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHlrN1hHNWNiaUJjZEZ4MEx5OGdSbXhoWnlCMGFHVWdiVzlrZFd4bElHRnpJR3h2WVdSbFpGeHVJRngwWEhSdGIyUjFiR1V1YkNBOUlIUnlkV1U3WEc1Y2JpQmNkRngwTHk4Z1VtVjBkWEp1SUhSb1pTQmxlSEJ2Y25SeklHOW1JSFJvWlNCdGIyUjFiR1ZjYmlCY2RGeDBjbVYwZFhKdUlHMXZaSFZzWlM1bGVIQnZjblJ6TzF4dUlGeDBmVnh1WEc1Y2JpQmNkQzh2SUdWNGNHOXpaU0IwYUdVZ2JXOWtkV3hsY3lCdlltcGxZM1FnS0Y5ZmQyVmljR0ZqYTE5dGIyUjFiR1Z6WDE4cFhHNGdYSFJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG0wZ1BTQnRiMlIxYkdWek8xeHVYRzRnWEhRdkx5QmxlSEJ2YzJVZ2RHaGxJRzF2WkhWc1pTQmpZV05vWlZ4dUlGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTVqSUQwZ2FXNXpkR0ZzYkdWa1RXOWtkV3hsY3p0Y2JseHVJRngwTHk4Z1pHVm1hVzVsSUdkbGRIUmxjaUJtZFc1amRHbHZiaUJtYjNJZ2FHRnliVzl1ZVNCbGVIQnZjblJ6WEc0Z1hIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbVFnUFNCbWRXNWpkR2x2YmlobGVIQnZjblJ6TENCdVlXMWxMQ0JuWlhSMFpYSXBJSHRjYmlCY2RGeDBhV1lvSVY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dWJ5aGxlSEJ2Y25SekxDQnVZVzFsS1NrZ2UxeHVJRngwWEhSY2RFOWlhbVZqZEM1a1pXWnBibVZRY205d1pYSjBlU2hsZUhCdmNuUnpMQ0J1WVcxbExDQjdJR1Z1ZFcxbGNtRmliR1U2SUhSeWRXVXNJR2RsZERvZ1oyVjBkR1Z5SUgwcE8xeHVJRngwWEhSOVhHNGdYSFI5TzF4dVhHNGdYSFF2THlCa1pXWnBibVVnWDE5bGMwMXZaSFZzWlNCdmJpQmxlSEJ2Y25SelhHNGdYSFJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG5JZ1BTQm1kVzVqZEdsdmJpaGxlSEJ2Y25SektTQjdYRzRnWEhSY2RHbG1LSFI1Y0dWdlppQlRlVzFpYjJ3Z0lUMDlJQ2QxYm1SbFptbHVaV1FuSUNZbUlGTjViV0p2YkM1MGIxTjBjbWx1WjFSaFp5a2dlMXh1SUZ4MFhIUmNkRTlpYW1WamRDNWtaV1pwYm1WUWNtOXdaWEowZVNobGVIQnZjblJ6TENCVGVXMWliMnd1ZEc5VGRISnBibWRVWVdjc0lIc2dkbUZzZFdVNklDZE5iMlIxYkdVbklIMHBPMXh1SUZ4MFhIUjlYRzRnWEhSY2RFOWlhbVZqZEM1a1pXWnBibVZRY205d1pYSjBlU2hsZUhCdmNuUnpMQ0FuWDE5bGMwMXZaSFZzWlNjc0lIc2dkbUZzZFdVNklIUnlkV1VnZlNrN1hHNGdYSFI5TzF4dVhHNGdYSFF2THlCamNtVmhkR1VnWVNCbVlXdGxJRzVoYldWemNHRmpaU0J2WW1wbFkzUmNiaUJjZEM4dklHMXZaR1VnSmlBeE9pQjJZV3gxWlNCcGN5QmhJRzF2WkhWc1pTQnBaQ3dnY21WeGRXbHlaU0JwZEZ4dUlGeDBMeThnYlc5a1pTQW1JREk2SUcxbGNtZGxJR0ZzYkNCd2NtOXdaWEowYVdWeklHOW1JSFpoYkhWbElHbHVkRzhnZEdobElHNXpYRzRnWEhRdkx5QnRiMlJsSUNZZ05Eb2djbVYwZFhKdUlIWmhiSFZsSUhkb1pXNGdZV3h5WldGa2VTQnVjeUJ2WW1wbFkzUmNiaUJjZEM4dklHMXZaR1VnSmlBNGZERTZJR0psYUdGMlpTQnNhV3RsSUhKbGNYVnBjbVZjYmlCY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVkQ0E5SUdaMWJtTjBhVzl1S0haaGJIVmxMQ0J0YjJSbEtTQjdYRzRnWEhSY2RHbG1LRzF2WkdVZ0ppQXhLU0IyWVd4MVpTQTlJRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMThvZG1Gc2RXVXBPMXh1SUZ4MFhIUnBaaWh0YjJSbElDWWdPQ2tnY21WMGRYSnVJSFpoYkhWbE8xeHVJRngwWEhScFppZ29iVzlrWlNBbUlEUXBJQ1ltSUhSNWNHVnZaaUIyWVd4MVpTQTlQVDBnSjI5aWFtVmpkQ2NnSmlZZ2RtRnNkV1VnSmlZZ2RtRnNkV1V1WDE5bGMwMXZaSFZzWlNrZ2NtVjBkWEp1SUhaaGJIVmxPMXh1SUZ4MFhIUjJZWElnYm5NZ1BTQlBZbXBsWTNRdVkzSmxZWFJsS0c1MWJHd3BPMXh1SUZ4MFhIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbklvYm5NcE8xeHVJRngwWEhSUFltcGxZM1F1WkdWbWFXNWxVSEp2Y0dWeWRIa29ibk1zSUNka1pXWmhkV3gwSnl3Z2V5QmxiblZ0WlhKaFlteGxPaUIwY25WbExDQjJZV3gxWlRvZ2RtRnNkV1VnZlNrN1hHNGdYSFJjZEdsbUtHMXZaR1VnSmlBeUlDWW1JSFI1Y0dWdlppQjJZV3gxWlNBaFBTQW5jM1J5YVc1bkp5a2dabTl5S0haaGNpQnJaWGtnYVc0Z2RtRnNkV1VwSUY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dVpDaHVjeXdnYTJWNUxDQm1kVzVqZEdsdmJpaHJaWGtwSUhzZ2NtVjBkWEp1SUhaaGJIVmxXMnRsZVYwN0lIMHVZbWx1WkNodWRXeHNMQ0JyWlhrcEtUdGNiaUJjZEZ4MGNtVjBkWEp1SUc1ek8xeHVJRngwZlR0Y2JseHVJRngwTHk4Z1oyVjBSR1ZtWVhWc2RFVjRjRzl5ZENCbWRXNWpkR2x2YmlCbWIzSWdZMjl0Y0dGMGFXSnBiR2wwZVNCM2FYUm9JRzV2Ymkxb1lYSnRiMjU1SUcxdlpIVnNaWE5jYmlCY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHViaUE5SUdaMWJtTjBhVzl1S0cxdlpIVnNaU2tnZTF4dUlGeDBYSFIyWVhJZ1oyVjBkR1Z5SUQwZ2JXOWtkV3hsSUNZbUlHMXZaSFZzWlM1ZlgyVnpUVzlrZFd4bElEOWNiaUJjZEZ4MFhIUm1kVzVqZEdsdmJpQm5aWFJFWldaaGRXeDBLQ2tnZXlCeVpYUjFjbTRnYlc5a2RXeGxXeWRrWldaaGRXeDBKMTA3SUgwZ09seHVJRngwWEhSY2RHWjFibU4wYVc5dUlHZGxkRTF2WkhWc1pVVjRjRzl5ZEhNb0tTQjdJSEpsZEhWeWJpQnRiMlIxYkdVN0lIMDdYRzRnWEhSY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVaQ2huWlhSMFpYSXNJQ2RoSnl3Z1oyVjBkR1Z5S1R0Y2JpQmNkRngwY21WMGRYSnVJR2RsZEhSbGNqdGNiaUJjZEgwN1hHNWNiaUJjZEM4dklFOWlhbVZqZEM1d2NtOTBiM1I1Y0dVdWFHRnpUM2R1VUhKdmNHVnlkSGt1WTJGc2JGeHVJRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1dklEMGdablZ1WTNScGIyNG9iMkpxWldOMExDQndjbTl3WlhKMGVTa2dleUJ5WlhSMWNtNGdUMkpxWldOMExuQnliM1J2ZEhsd1pTNW9ZWE5QZDI1UWNtOXdaWEowZVM1allXeHNLRzlpYW1WamRDd2djSEp2Y0dWeWRIa3BPeUI5TzF4dVhHNGdYSFF2THlCZlgzZGxZbkJoWTJ0ZmNIVmliR2xqWDNCaGRHaGZYMXh1SUZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXdJRDBnWENKY0lqdGNibHh1WEc0Z1hIUXZMeUJNYjJGa0lHVnVkSEo1SUcxdlpIVnNaU0JoYm1RZ2NtVjBkWEp1SUdWNGNHOXlkSE5jYmlCY2RISmxkSFZ5YmlCZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZktGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVjeUE5SUZ3aUxpOXpjbU12YVc1a1pYZ3Vhbk5jSWlrN1hHNGlMQ0pwYlhCdmNuUWdleUJVWlc1emIzSWdmU0JtY205dElDZGpZWFZ6WVd3dGJtVjBMbU52Y21Vbk8xeHVZMnhoYzNNZ1FtRnpaVTF2WkdWc0lHVjRkR1Z1WkhNZ1ZHVnVjMjl5ZTF4dUlDQWdJR052Ym5OMGNuVmpkRzl5S0NsN1hHNGdJQ0FnSUNBZ0lITjFjR1Z5S0NrN1hHNGdJQ0FnSUNBZ0lIUm9hWE11Ylc5a1pXeE9ZVzFsSUQwZ0p5YzdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2MyVjBJRXhoZVdWeVVuVnVibVZ5S0hKMWJtNWxjaWw3WEc0Z0lDQWdJQ0FnSUhSb2NtOTNJRVZ5Y205eUtDZHBiWEJzWlcxbGJuUWdjbVZ4ZFdseVpXUW5LVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQm5aWFFnVEdGNVpYSlNkVzV1WlhJb0tYdGNiaUFnSUNBZ0lDQWdkR2h5YjNjZ1JYSnliM0lvSjJsdGNHeGxiV1Z1ZENCeVpYRjFhWEpsWkNjcE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUdacGRDZ3BlMXh1SUNBZ0lDQWdJQ0IwYUhKdmR5QkZjbkp2Y2lnbmFXMXdiR1Z0Wlc1MElISmxjWFZwY21Wa0p5azdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2JHOXpjeWdwZTF4dUlDQWdJQ0FnSUNCMGFISnZkeUJGY25KdmNpZ25hVzF3YkdWdFpXNTBJSEpsY1hWcGNtVmtKeWs3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdjSEpsWkdsamRDZ3BlMXh1SUNBZ0lDQWdJQ0IwYUhKdmR5QkZjbkp2Y2lnbmFXMXdiR1Z0Wlc1MElISmxjWFZwY21Wa0p5azdYRzRnSUNBZ2ZWeHVJQ0FnSUc5dVpVaHZkRkJ5WldScFkzUW9LWHRjYmlBZ0lDQWdJQ0FnZEdoeWIzY2dSWEp5YjNJb0oybHRjR3hsYldWdWRDQnlaWEYxYVhKbFpDY3BPMXh1SUNBZ0lIMWNibjFjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnUW1GelpVMXZaR1ZzT3lJc0ltbHRjRzl5ZENCN0lIQnNZWFJtYjNKdElIMGdabkp2YlNBblkyRjFjMkZzTFc1bGRDNTFkR2xzY3ljN1hHNXBiWEJ2Y25RZ2V5QlVaVzV6YjNJZ1lYTWdRbUZ6WlZSbGJuTnZjaUI5SUdaeWIyMGdKMk5oZFhOaGJDMXVaWFF1WTI5eVpTYzdYRzVwYlhCdmNuUWdleUJrWldaaGRXeDBJR0Z6SUZOcGJtZHNaVXhoWW1Wc1EyeGhjM05wWm1sallYUnBiMjRnZlNCbWNtOXRJQ2N1TDNOcGJtZHNaVXhoWW14bFEyeGhjM05wWm1sallYUnBiMjRuTzF4dUx5b3FYRzRnS2lCVWFHbHpJR05zWVhOeklIQnliM1pwWkdVZ1kyOXRiVzl1SUhWelpXUWdiVzlrWld4eklIZG9hV05vSUdOaGJpQmlaU0JoWTJObGMzTmxaQ0IyYVdFZ0tpcGpZWFZ6WVd4T1pYUk5iMlJsYkhNcUtpQnBibk4wWVc1alpTNWNiaUFxSUVCamJHRnpjeUJEWVhWellXeE9aWFJOYjJSbGJITmNiaUFxSUVCbGVIUmxibVJ6SUVKaGMyVlVaVzV6YjNKY2JpQXFJRUJsZUdGdGNHeGxYRzRnS2lCYlJWaEJUVkJNUlNBdUxpOWxlR0Z0Y0d4bGN5OXphVzVuYkdWTVlXSmxiRU5zWVhOemFXWnBZMkYwYVc5dUxtSmhZbVZzTG1welhWeHVJQ292WEc1amJHRnpjeUJEWVhWellXeE9aWFJOYjJSbGJITWdaWGgwWlc1a2N5QndiR0YwWm05eWJTNXRhWGhYYVhSb0tDQkNZWE5sVkdWdWMyOXlMQ0JiWFNBcGUxeHVJQ0FnSUdOdmJuTjBjblZqZEc5eUtDbDdYRzRnSUNBZ0lDQWdJSE4xY0dWeUtDazdYRzRnSUNBZ2ZWeHVJQ0FnSUZ4dUlDQWdJR05zWVhOemFXWnBZMkYwYVc5dUtHNTFiVU5zWVhOektYdGNiaUFnSUNBZ0lDQWdkR2hwY3k1dGIyUmxiQ0E5SUc1bGR5QlRhVzVuYkdWTVlXSmxiRU5zWVhOemFXWnBZMkYwYVc5dUtHNTFiVU5zWVhOektUdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlIUm9hWE11Ylc5a1pXdzdYRzRnSUNBZ2ZWeHVmVnh1Wlhod2IzSjBJR1JsWm1GMWJIUWdibVYzSUVOaGRYTmhiRTVsZEUxdlpHVnNjeWdwT3lJc0ltVjRjRzl5ZENCN0lHUmxabUYxYkhRZ1lYTWdZMkYxYzJGc1RtVjBUVzlrWld4eklIMGdabkp2YlNBbkxpOWpZWFZ6WVd4T1pYUk5iMlJsYkhNbk8xeHVaWGh3YjNKMElIc2daR1ZtWVhWc2RDQmhjeUJOYjJSbGJFMXBlR2x1Y3lCOUlHWnliMjBnSnk0dmJXOWtaV3d1YldsNGFXNXpKenRjYmx4dVpYaHdiM0owSUhzZ1pHVm1ZWFZzZENCaGN5QkNZWE5sVFc5a1pXd2dmU0JtY205dElDY3VMMkpoYzJWTmIyUmxiQ2M3WEc1bGVIQnZjblFnZXlCa1pXWmhkV3gwSUdGeklGTnBibWRzWlV4aFltVnNRMnhoYzNOcFptbGpZWFJwYjI0Z2ZTQm1jbTl0SUNjdUwzTnBibWRzWlV4aFlteGxRMnhoYzNOcFptbGpZWFJwYjI0bk8xeHVJaXdpWTI5dWMzUWdUVzlrWld4TmFYaHBibk1nUFNBb1FtRnpaVkJwY0dWc2FXNWxRMnhoYzNNcFBUNGdZMnhoYzNNZ1pYaDBaVzVrY3lCQ1lYTmxVR2x3Wld4cGJtVkRiR0Z6YzN0Y2JpQWdJQ0JuWlhRZ1RHOXpjMDF2WkdWc0tDbDdYRzRnSUNBZ0lDQWdJR2xtS0NGMGFHbHpMbTVsZEUxdlpHVnNLWHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9jbTkzSUVWeWNtOXlLQ2R1WlhSTmIyUmxiQ0JwY3lCdWIzUWdjMlYwSnlrN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlIUm9hWE11Ym1WMFRXOWtaV3d1VEc5emN6dGNiaUFnSUNCOVhHNWNiaUFnSUNCblpYUWdSbWwwVFc5a1pXd29LWHRjYmlBZ0lDQWdJQ0FnYVdZb0lYUm9hWE11Ym1WMFRXOWtaV3dwZTF4dUlDQWdJQ0FnSUNBZ0lDQWdkR2h5YjNjZ1JYSnliM0lvSjI1bGRFMXZaR1ZzSUdseklHNXZkQ0J6WlhRbktUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdkR2hwY3k1dVpYUk5iMlJsYkM1R2FYUTdYRzRnSUNBZ2ZWeHVJQ0FnSUZ4dUlDQWdJR2RsZENCUGJtVkliM1JRY21Wa2FXTjBUVzlrWld3b0tYdGNiaUFnSUNBZ0lDQWdhV1lvSVhSb2FYTXVibVYwVFc5a1pXd3BlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHliM2NnUlhKeWIzSW9KMjVsZEUxdlpHVnNJR2x6SUc1dmRDQnpaWFFuS1R0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2RHaHBjeTV1WlhSTmIyUmxiQzVQYm1WSWIzUlFjbVZrYVdOME8xeHVJQ0FnSUgxY2JseHVJQ0FnSUdkbGRDQlFjbVZrYVdOMFRXOWtaV3dvS1h0Y2JpQWdJQ0FnSUNBZ2FXWW9JWFJvYVhNdWJtVjBUVzlrWld3cGUxeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdoeWIzY2dSWEp5YjNJb0oyNWxkRTF2WkdWc0lHbHpJRzV2ZENCelpYUW5LVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnZEdocGN5NXVaWFJOYjJSbGJDNVFjbVZrYVdOME8xeHVJQ0FnSUgxY2JseHVJQ0FnSUdkbGRDQkZibU52WkdWTmIyUmxiQ2dwZTF4dUlDQWdJQ0FnSUNCcFppZ2hkR2hwY3k1dVpYUk5iMlJsYkNsN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUhKdmR5QkZjbkp2Y2lnbmJtVjBUVzlrWld3Z2FYTWdibTkwSUhObGRDY3BPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUIwYUdsekxtNWxkRTF2WkdWc0xrVnVZMjlrWlR0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0JuWlhRZ1JHVmpiMlJsVFc5a1pXd29LWHRjYmlBZ0lDQWdJQ0FnYVdZb0lYUm9hWE11Ym1WMFRXOWtaV3dwZTF4dUlDQWdJQ0FnSUNBZ0lDQWdkR2h5YjNjZ1JYSnliM0lvSjI1bGRFMXZaR1ZzSUdseklHNXZkQ0J6WlhRbktUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdkR2hwY3k1dVpYUk5iMlJsYkM1RVpXTnZaR1U3WEc0Z0lDQWdmVnh1WEc1Y2JpQWdJQ0JuWlhRZ1RXOWtaV3dvS1h0Y2JpQWdJQ0FnSUNBZ2FXWW9JWFJvYVhNdWJtVjBUVzlrWld3cGUxeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdoeWIzY2dSWEp5YjNJb0oyNWxkRTF2WkdWc0lHbHpJRzV2ZENCelpYUW5LVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnZEdocGN5NXVaWFJOYjJSbGJEdGNiaUFnSUNCOVhHNGdJQ0FnWEc1Y2JpQWdJQ0J6WlhRZ1RXOWtaV3dvYlc5a1pXd3BleUFnSUNBZ0lDQWdYRzRnSUNBZ0lDQWdJSFJvYVhNdWJtVjBUVzlrWld3Z1BTQnRiMlJsYkR0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0J6WlhSQ2VVTnZibVpwWnlod2FYQmxiR2x1WlVOdmJtWnBaeWw3WEc0Z0lDQWdJQ0FnSUdsbUtITjFjR1Z5TG5ObGRFSjVRMjl1Wm1sbktYdGNiaUFnSUNBZ0lDQWdJQ0FnSUhOMWNHVnlMbk5sZEVKNVEyOXVabWxuS0hCcGNHVnNhVzVsUTI5dVptbG5LVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCMGFHbHpMa3h2WjJkbGNpNW5jbTkxY0VKbFoybHVLQ2R6WlhRZ1RXOWtaV3dnWW5rZ1kyOXVabWxuSnlrN1hHNGdJQ0FnSUNBZ0lHTnZibk4wSUhzZ1RXOWtaV3dnZlNBOUlIQnBjR1ZzYVc1bFEyOXVabWxuTGs1bGREdGNiaUFnSUNBZ0lDQWdhV1lvSVUxdlpHVnNLWHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9jbTkzSUVWeWNtOXlLR0JOYjJSbGJDQnBjeUJ1YjNRZ2MyVjBJR2x1SUNSN1NsTlBUaTV6ZEhKcGJtZHNhV1o1S0hCcGNHVnNhVzVsUTI5dVptbG5LWDFnS1R0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQk5iMlJsYkM1TVlYbGxjbEoxYm01bGNpQTlJSFJvYVhNdVRHRjVaWEpTZFc1dVpYSTdYRzRnSUNBZ0lDQWdJSFJvYVhNdVRXOWtaV3dnUFNCTmIyUmxiRHRjYmlBZ0lDQWdJQ0FnZEdocGN5NU1iMmRuWlhJdVozSnZkWEJGYm1Rb0tUdGNiaUFnSUNCOVhHNTlPMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JOYjJSbGJFMXBlR2x1Y3p0Y2JpSXNJbWx0Y0c5eWRDQjdJR1JsWm1GMWJIUWdZWE1nUW1GelpVMXZaR1ZzSUgwZ1puSnZiU0FuTGk5aVlYTmxUVzlrWld3bk8xeHVYRzVqYkdGemN5QlRhVzVuYkdWTVlXSmxiRU5zWVhOemFXWnBZMkYwYVc5dUlHVjRkR1Z1WkhNZ1FtRnpaVTF2WkdWc2UxeHVJQ0FnSUdOdmJuTjBjblZqZEc5eUtHNTFiVU5zWVhOektYdGNiaUFnSUNBZ0lDQWdjM1Z3WlhJb0tUdGNiaUFnSUNBZ0lDQWdhV1lvYm5WdFEyeGhjM01nUGlBd0tYdGNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTXViblZ0UTJ4aGMzTWdQU0J1ZFcxRGJHRnpjenRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCbGJITmxlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHliM2NnUlhKeWIzSW9ZR1Y0Y0dWamRDQnVkVzFqYkdGemN5d2daMlYwSUNSN2JuVnRRMnhoYzNOOVlDazdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQjlYRzVjYmlBZ0lDQnpaWFFnVEdGNVpYSlNkVzV1WlhJb2JHRjVaWEpTZFc1dVpYSXBlMXh1SUNBZ0lDQWdJQ0JzWlhRZ2V5QlFjbVZrYVdOMGIzSWdmU0E5SUd4aGVXVnlVblZ1Ym1WeU8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG5KMWJtNWxjaUE5SUhzZ1VISmxaR2xqZEc5eUlIMDdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ1oyVjBJRXhoZVdWeVVuVnVibVZ5S0NsN1hHNGdJQ0FnSUNBZ0lHbG1LQ0YwYUdsekxuSjFibTVsY2lsN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUhKdmR5QkZjbkp2Y2lnbmNuVnVibVZ5SUdseklHNXZkQ0J6WlhRbktUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdkR2hwY3k1eWRXNXVaWEk3WEc0Z0lDQWdmVnh1SUNBZ0lGeHVJQ0FnSUdkbGRDQkdhWFFvS1h0Y2JpQWdJQ0FnSUNBZ1kyOXVjM1FnZXlCUWNtVmthV04wYjNJZ2ZTQTlJSFJvYVhNdVRHRjVaWEpTZFc1dVpYSTdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQW9hVzV3ZFhSVVpXNXpiM0lwUFQ1N1hHNGdJQ0FnSUNBZ0lDQWdJQ0JzWlhRZ2IzVjBVSFYwVkdWdWMyOXlJRDBnVUhKbFpHbGpkRzl5S0dsdWNIVjBWR1Z1YzI5eUtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUd4bGRDQnNiMmRRY205aUlEMGdiM1YwVUhWMFZHVnVjMjl5TG5OMVlpaHZkWFJRZFhSVVpXNXpiM0l1Ykc5blUzVnRSWGh3S0RFc0lIUnlkV1VwS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQnNiMmRRY205aU8xeHVJQ0FnSUNBZ0lDQjlPMXh1SUNBZ0lIMWNiaUFnSUNCY2JpQWdJQ0JuWlhRZ1VISmxaR2xqZENncGUxeHVJQ0FnSUNBZ0lDQmpiMjV6ZENCR2FYUWdQU0IwYUdsekxrWnBkRHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJQ2hwYm5CMWRGUmxibk52Y2lrOVBudGNiaUFnSUNBZ0lDQWdJQ0FnSUd4bGRDQnNiMmRRY205aUlEMGdSbWwwS0dsdWNIVjBWR1Z1YzI5eUtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUd4bGRDQndjbVZrYVdOMFpXUkRiR0Z6Y3lBOUlHeHZaMUJ5YjJJdVlYSm5UV0Y0S0RFcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJSEJ5WldScFkzUmxaRU5zWVhOek8xeHVJQ0FnSUNBZ0lDQjlPMXh1SUNBZ0lIMWNibHh1SUNBZ0lHZGxkQ0JQYm1WSWIzUlFjbVZrYVdOMEtDbDdYRzRnSUNBZ0lDQWdJR052Ym5OMElGQnlaV1JwWTNRZ1BTQjBhR2x6TGxCeVpXUnBZM1E3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUFvYVc1d2RYUlVaVzV6YjNJcFBUNTdYRzRnSUNBZ0lDQWdJQ0FnSUNCc1pYUWdjSEpsWkdsamRHVmtRMnhoYzNNZ1BTQlFjbVZrYVdOMEtHbHVjSFYwVkdWdWMyOXlLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHeGxkQ0J2Ym1WSWIzUlFjbVZrYVdOMElEMGdkR2hwY3k1VUxtOXVaVWh2ZENod2NtVmthV04wWldSRGJHRnpjeXdnZEdocGN5NXVkVzFEYkdGemN5azdYRzRnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnYjI1bFNHOTBVSEpsWkdsamREdGNiaUFnSUNBZ0lDQWdmVHRjYmlBZ0lDQjlYRzRnSUNBZ1oyVjBJRXh2YzNNb0tYdGNiaUFnSUNBZ0lDQWdZMjl1YzNRZ1JtbDBJRDBnZEdocGN5NUdhWFE3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUFvYVc1d2RYUlVaVzV6YjNJc0lHeGhZbVZzVkdWdWMyOXlLVDArZTF4dUlDQWdJQ0FnSUNBZ0lDQWdiR1YwSUd4dloxQnliMklnUFNCR2FYUW9hVzV3ZFhSVVpXNXpiM0lwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdiR1YwSUd4cGEyVnNhV2h2YjJRZ1BTQnNiMmRRY205aUxtNWxaeWdwTG0xMWJDaHNZV0psYkZSbGJuTnZjaWs3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnNaWFFnYkc5emN5QTlJR3hwYTJWc2FXaHZiMlF1YzNWdEtERXBMbTFsWVc0b0tUdGNiaUFnSUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUJzYjNOek8xeHVJQ0FnSUNBZ0lDQjlPMXh1SUNBZ0lIMWNibjFjYm1WNGNHOXlkQ0JrWldaaGRXeDBJRk5wYm1kc1pVeGhZbVZzUTJ4aGMzTnBabWxqWVhScGIyNDdJaXdpYlc5a2RXeGxMbVY0Y0c5eWRITWdQU0JmWDFkRlFsQkJRMHRmUlZoVVJWSk9RVXhmVFU5RVZVeEZYMk5oZFhOaGJGOXVaWFJmWTI5eVpWOWZPeUlzSW0xdlpIVnNaUzVsZUhCdmNuUnpJRDBnWDE5WFJVSlFRVU5MWDBWWVZFVlNUa0ZNWDAxUFJGVk1SVjlqWVhWellXeGZibVYwWDNWMGFXeHpYMTg3SWwwc0luTnZkWEpqWlZKdmIzUWlPaUlpZlE9PSIsIi8qKlxuICogVGhlIEVuc2VtYmxlRGVwbG95bWVudE1peGlucyBjbGFzcyBpcyB0aGUgbWl4aXMgY2xhc3MgZm9yIGRlcGxveWluZyBlbnNlbWJsZSBtb2RlbFxuICogQGNsYXNzIENhdXNhbE5ldFxuICogQGV4dGVuZHMgeyBCYXNlUGlwZWxpbmVDbGFzcyB9XG4gKi9cbmNvbnN0IEVuc2VtYmxlRGVwbG95bWVudE1peGlucyA9IChCYXNlUGlwZWxpbmVDbGFzcyk9PiBjbGFzcyBleHRlbmRzIEJhc2VQaXBlbGluZUNsYXNzIHtcbiAgICAvKipcbiAgICAgKiBQcm92aWRlIEVuc2VtYmxlSW5mZXJlbmNlciBjYWxsZXIsIEVuc2VtYmxlTW9kZWxQcmVkaWN0IG11c3QgYmUgc2V0IGluIHByaW9yXG4gICAgICogQHJlYWRvbmx5XG4gICAgICovXG4gICAgZ2V0IEVuc2VtYmxlSW5mZXJlbmNlcigpe1xuICAgICAgICBjb25zdCBNb2RlbExlbnNlcyA9ICgpPT4oeyBFbnNlbWJsZVByZWRpY3Q6IHRoaXMuRW5zZW1ibGVNb2RlbFByZWRpY3QgfSk7XG4gICAgICAgIGNvbnN0IFQgPSB0aGlzLlQ7XG4gICAgICAgIHJldHVybiBhc3luYyAoaW5wdXQpPT57XG4gICAgICAgICAgICBsZXQgeyBFbnNlbWJsZVByZWRpY3QgfSA9IGlucHV0O1xuICAgICAgICAgICAgbGV0IGluZmVyID0ge307XG4gICAgICAgICAgICBpZihFbnNlbWJsZVByZWRpY3Qpe1xuICAgICAgICAgICAgICAgIGxldCBpbnB1dFRlbnNvciA9IFQudGVuc29yKEVuc2VtYmxlUHJlZGljdCkuYXNUeXBlKCdmbG9hdDMyJykucmVzaGFwZShbMSwgLTFdKTtcbiAgICAgICAgICAgICAgICBsZXQgcHJlZGljdFRlbnNvciA9IGF3YWl0IE1vZGVsTGVuc2VzKCkuRW5zZW1ibGVQcmVkaWN0KGlucHV0VGVuc29yKTtcbiAgICAgICAgICAgICAgICBpbmZlci5FbnNlbWJsZVByZWRpY3QgPSBhd2FpdCBwcmVkaWN0VGVuc29yLmRhdGEoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBpbmZlcjtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogcHJvY2VzcyBwaXBlbGluZUNvbmZpZyBvYmplY3QgZm9yIGVuc2VtYmxlIGRlcGxveW1lbnRcbiAgICAgKiBAcGFyYW0geyBPYmplY3QgfSBwaXBlbGluZUNvbmZpZ1xuICAgICAqIEByZXR1cm5zXG4gICAgICovXG4gICAgc2V0QnlDb25maWcocGlwZWxpbmVDb25maWcpe1xuICAgICAgICBpZihzdXBlci5zZXRCeUNvbmZpZyl7XG4gICAgICAgICAgICBzdXBlci5zZXRCeUNvbmZpZyhwaXBlbGluZUNvbmZpZyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5Mb2dnZXIuZ3JvdXBCZWdpbignc2V0IGVuc2VtYmxlIGRlcGxveW1lbnQgYnkgY29uZmlnJyk7XG4gICAgICAgIHRoaXMuRGVwbG95bWVudC5FbnNlbWJsZUluZmVyZW5jZXIgPSB0aGlzLkVuc2VtYmxlSW5mZXJlbmNlcjtcbiAgICAgICAgdGhpcy5Mb2dnZXIuZ3JvdXBFbmQoKTtcbiAgICAgICAgcmV0dXJuIHBpcGVsaW5lQ29uZmlnO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBkZXBsb3kgbW9kZWxcbiAgICAgKiBAcmV0dXJucyB7IFByb21pc2UgfSBkZXBsb3ltZW50IHN1bW1hcnlcbiAgICAgKi9cbiAgICBhc3luYyBkZXBsb3koKXtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuRGVwbG95bWVudC5kZXBsb3koKTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBFbnNlbWJsZURlcGxveW1lbnRNaXhpbnM7IiwiY29uc3QgRW5zZW1ibGVFdmFsdWF0b3JNaXhpbnMgPSAoQmFzZVBpcGVsaW5lQ2xhc3MpPT4gY2xhc3MgZXh0ZW5kcyBCYXNlUGlwZWxpbmVDbGFzc3sgXG4gICAgYXN5bmMgZW5zZW1ibGVUZXN0KGJhdGNoU2l6ZSwgbWV0aG9kPSdhY2N1cmFjeScpe1xuICAgICAgICB0aHJvdyBFcnJvcignaW1wbGVtZW50IHJlcXVpcmUnKTsgXG4gICAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IEVuc2VtYmxlRXZhbHVhdG9yTWl4aW5zOyIsIi8qKlxuICogVGhlIEVuc2VtYmxlTW9kZWxNaXhpbnMgY2xhc3MgaXMgdGhlIG1peGlzIGNsYXNzIGZvciBlbnNlbWJsZSBtb2RlbCBjYWxsZXJcbiAqIEBjbGFzcyBFbnNlbWJsZU1vZGVsTWl4aW5zXG4gKiBAZXh0ZW5kcyB7QmFzZVBpcGVsaW5lQ2xhc3N9XG4gKi9cbmNvbnN0IEVuc2VtYmxlTW9kZWxNaXhpbnMgPSAoQmFzZVBpcGVsaW5lQ2xhc3MpPT4gY2xhc3MgZXh0ZW5kcyBCYXNlUGlwZWxpbmVDbGFzc3sgXG5cbiAgICBnZXQgRW5zZW1ibGVNb2RlbFByZWRpY3QoKXtcbiAgICAgICAgY29uc3QgRml0TW9kZWwgPSB0aGlzLkZpdE1vZGVsO1xuICAgICAgICBjb25zdCBUID0gdGhpcy5UO1xuICAgICAgICBjb25zdCBFbnNlbWJsZU1vZGVscyA9IHRoaXMuRW5zZW1ibGVNb2RlbHM7XG4gICAgICAgIGNvbnN0IEJhZ2dpbmcgPSBhc3luYyAoaW5wdXRUZW5zb3IpPT57XG4gICAgICAgICAgICBsZXQgcHJvYkZpdHMgPSBbXTtcbiAgICAgICAgICAgIGZvcihsZXQgbW9kZWwgb2YgRW5zZW1ibGVNb2RlbHMpe1xuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMubG9hZFBhcmFtcyhtb2RlbCk7XG4gICAgICAgICAgICAgICAgbGV0IHByb2IgPSBGaXRNb2RlbChpbnB1dFRlbnNvcikuZXhwKCk7XG4gICAgICAgICAgICAgICAgcHJvYkZpdHMucHVzaChwcm9iKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBtZWFuUHJvYiA9IFQuc3RhY2socHJvYkZpdHMpLm1lYW4oMCk7XG4gICAgICAgICAgICByZXR1cm4gbWVhblByb2IuYXJnTWF4KDEpO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gQmFnZ2luZzsgICBcbiAgICB9XG5cbiAgICBzZXQgRW5zZW1ibGVNb2RlbHMobW9kZWxpc3Qpe1xuICAgICAgICB0aGlzLmVuc2VtYmxlTW9kZWxzID0gbW9kZWxpc3Q7XG4gICAgfVxuXG4gICAgZ2V0IEVuc2VtYmxlTW9kZWxzKCl7XG4gICAgICAgIGlmKCF0aGlzLmVuc2VtYmxlTW9kZWxzKXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdFbnNlbWJsZU1vZGVscyBpcyBub3Qgc2V0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuZW5zZW1ibGVNb2RlbHM7XG4gICAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IEVuc2VtYmxlTW9kZWxNaXhpbnM7IiwiLyoqXG4gKiBUaGUgRW5zZW1ibGVUcmFpbmVyTWl4aW5zIGNsYXNzIGlzIHRoZSBtaXhpbnMgY2xhc3MgZm9yIHRyYWluaW5nIGVuc2FtYmxhYmxlIG1vZGVsc1xuICogQGNsYXNzIEVuc2VtYmxlVHJhaW5lck1peGluc1xuICogQGV4dGVuZHMge0Jhc2VQaXBlbGluZUNsYXNzfVxuICovXG5jb25zdCBFbnNlbWJsZVRyYWluZXJNaXhpbnMgPSAoQmFzZVBpcGVsaW5lQ2xhc3MpPT4gY2xhc3MgZXh0ZW5kcyBCYXNlUGlwZWxpbmVDbGFzc3tcbiAgICAvKipcbiAgICAgKiBUcmFpbiBtb2RlbCBhbmQgc2F2ZSB0byBzdG9yYWdlIHVuZGVyIHRoZSBnaXZlbiBmaWxlbmFtZS4gcGFyYW1ldGVycyBpcyByZWluaXRlZCBmb3IgZWFjaCB0cmFpbmluZ1xuICAgICAqIEBwYXJhbSB7IE51bWJlciB9IG51bUVwb2Noc1xuICAgICAqIEBwYXJhbSB7IE51bWJlciB9IGJhdGNoU2l6ZVxuICAgICAqIEBwYXJhbSB7IFN0cmluZyB9IHNhdmVGaWxlTmFtZVxuICAgICAqIEByZXR1cm5zIHsgUHJvbWlzZSB9IFRyYWluaW5nIGxvc3Nlc1xuICAgICAqL1xuICAgIGFzeW5jIGVuc2VtYmxlVHJhaW4obnVtRXBvY2hzLCBiYXRjaFNpemUsIHNhdmVGaWxlTmFtZSl7XG4gICAgICAgIHRoaXMuTGF5ZXJSdW5uZXIuTmV0UGFyYW1ldGVycyA9IHRoaXMuUGFyYW1ldGVySW5pdGlhbGl6ZXIodGhpcy5MYXllclJ1bm5lci5OZXRMYXllcnMpO1xuICAgICAgICBsZXQge2xvc3Nlc30gPSBhd2FpdCB0aGlzLnRyYWluKG51bUVwb2NocywgYmF0Y2hTaXplKTtcbiAgICAgICAgYXdhaXQgdGhpcy5zYXZlUGFyYW1zKHNhdmVGaWxlTmFtZSk7XG4gICAgICAgIHJldHVybiB7W3NhdmVGaWxlTmFtZV06IGxvc3Nlc307XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgRW5zZW1ibGVUcmFpbmVyTWl4aW5zOyIsImV4cG9ydCB7IGRlZmF1bHQgYXMgRW5zZW1ibGVUcmFpbmVyTWl4aW5zIH0gZnJvbSAnLi9lbnNlbWJsZVRyYWluZXIubWl4aW5zJzsgXG5leHBvcnQgeyBkZWZhdWx0IGFzIEVuc2VtYmxlTW9kZWxNaXhpbnMgfSBmcm9tICcuL2Vuc2VtYmxlTW9kZWwubWl4aW5zJzsgXG5leHBvcnQgeyBkZWZhdWx0IGFzIEVuc2VtYmxlRGVwbG95bWVudE1peGlucyB9IGZyb20gJy4vZW5zZW1ibGVEZXBsb3ltZW50Lm1peGlucyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEVuc2VtYmxlRXZhbHVhdG9yTWl4aW5zIH0gZnJvbSAnLi9lbnNlbWJsZUV2YWx1YXRvci5taXhpbnMnOyAiLCJpbXBvcnQgeyBEYXRhU291cmNlTWl4aW5zIH0gZnJvbSAnY2F1c2FsLW5ldC5kYXRhc2V0cyc7XG5pbXBvcnQgeyBQcmVwcm9jZXNzaW5nTWl4aW5zLCBjYXVzYWxOZXRQcmVwcm9jZXNzaW5nU3RyZWFtIH0gZnJvbSAnY2F1c2FsLW5ldC5wcmVwcm9jZXNzaW5nJztcbmltcG9ydCB7IFRyYWluZXJNaXhpbnMsIEV2YWx1YXRvck1peGlucyB9IGZyb20gJ2NhdXNhbC1uZXQub3B0aW1pemVycyc7XG5pbXBvcnQgeyBNb2RlbE1peGlucyB9IGZyb20gJ2NhdXNhbC1uZXQubW9kZWxzJztcbmltcG9ydCB7IGNhdXNhbE5ldFJ1bm5lciwgTGF5ZXJSdW5uZXJNaXhpbnMgfSBmcm9tICdjYXVzYWwtbmV0LmxheWVyJztcbmltcG9ydCB7IFRlbnNvciB9IGZyb20gJ2NhdXNhbC1uZXQuY29yZSc7XG5pbXBvcnQgeyBwbGF0Zm9ybSB9IGZyb20gJ2NhdXNhbC1uZXQudXRpbHMnO1xuaW1wb3J0IHsgY2F1c2FsTmV0RGVwbG95bWVudCwgRGVwbG95bWVudE1peGlucyB9IGZyb20gJ2NhdXNhbC1uZXQuZGVwbG95bWVudCc7XG5pbXBvcnQgeyB0ZXJtTG9nZ2VyLCBMb2dnZXJNaXhpbnMgfSBmcm9tICdjYXVzYWwtbmV0LmxvZyc7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIGZ1bmN0b3IgfSBmcm9tICcuL2Z1bmN0b3InO1xuaW1wb3J0IHsgRW5zZW1ibGVUcmFpbmVyTWl4aW5zLCBFbnNlbWJsZU1vZGVsTWl4aW5zLCBFbnNlbWJsZURlcGxveW1lbnRNaXhpbnMgfSBmcm9tICcuL0Vuc2VtYmxlL2luZGV4JztcblxuLyoqXG4gKiBUaGUgQ2F1c2FsTmV0IGNsYXNzIGlzIHRoZSBwcmVidWlsdCBwaXBlbGluZSB3aXRoIG1ldGhvZHMgZm9yIFxuICogcHJvY2Vzc2luZyBkYXRhL3RyYWluL2V2YWx1YXRlL2RlcGxveS9lbnNlbWJsZSBkZXBsb3lcbiAqIHsgbWl4V2l0aDogWyBcbiAqICAgICAgICAgRGF0YVNvdXJjZU1peGlucyxcbiAqICAgICAgICAgUHJlcHJvY2Vzc2luZ01peGlucyxcbiAqICAgICAgICAgTGF5ZXJSdW5uZXJNaXhpbnMsIFxuICogICAgICAgICBNb2RlbE1peGlucywgXG4gKiAgICAgICAgIEV2YWx1YXRvck1peGlucyxcbiAqICAgICAgICAgVHJhaW5lck1peGlucywgXG4gKiAgICAgICAgIExvZ2dlck1peGlucyxcbiAqICAgICAgICAgRGVwbG95bWVudE1peGlucyxcbiAqICAgICAgICAgRW5zZW1ibGVUcmFpbmVyTWl4aW5zLFxuICogICAgICAgICBFbnNlbWJsZU1vZGVsTWl4aW5zLCBcbiAqICAgICAgICAgRW5zZW1ibGVEZXBsb3ltZW50TWl4aW5zIF0gfVxuICogQGNsYXNzIENhdXNhbE5ldFxuICogQGV4dGVuZHMge1RlbnNvcn1cbiAqIEBleGFtcGxlXG4gKiBbRVhBTVBMRSAuLi9leGFtcGxlcy9jYXVzYWxOZXQvZW5zZW1ibGUubG9naXN0aWNSZWdyZXNzaW9uLmJhYmVsLmpzXVxuICovXG5jbGFzcyBDYXVzYWxOZXQgZXh0ZW5kcyBwbGF0Zm9ybS5taXhXaXRoKFRlbnNvciwgWyBcbiAgICAgICAgRGF0YVNvdXJjZU1peGlucyxcbiAgICAgICAgUHJlcHJvY2Vzc2luZ01peGlucyxcbiAgICAgICAgTGF5ZXJSdW5uZXJNaXhpbnMsIFxuICAgICAgICBNb2RlbE1peGlucywgXG4gICAgICAgIEV2YWx1YXRvck1peGlucyxcbiAgICAgICAgVHJhaW5lck1peGlucywgXG4gICAgICAgIExvZ2dlck1peGlucyxcbiAgICAgICAgRGVwbG95bWVudE1peGlucyxcbiAgICAgICAgRW5zZW1ibGVUcmFpbmVyTWl4aW5zLFxuICAgICAgICBFbnNlbWJsZU1vZGVsTWl4aW5zLCBcbiAgICAgICAgRW5zZW1ibGVEZXBsb3ltZW50TWl4aW5zIF0pe1xuICAgIC8qKlxuICAgICAqQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBDYXVzYWxOZXQuXG4gICAgICogQHBhcmFtIHsgRnVuY3RvciB9IGZ1bmN0b3JcbiAgICAgKiBAcGFyYW0geyBMb2cgfSBsb2dnZXJcbiAgICAgKiBAcGFyYW0geyBGdW5jdG9yIH0gc3RyZWFtUHJlcHJvY2Vzc2luZ1xuICAgICAqIEBwYXJhbSB7IFRlbnNvciB9IG5ldFBhcmFtZXRlcnNcbiAgICAgKiBAcGFyYW0geyBUZW5zb3IgfSBuZXRSdW5uZXJcbiAgICAgKiBAcGFyYW0geyBFdmVudCB9IHN0cmVhbURlcGxveW1lbnRcbiAgICAgKiBAbWVtYmVyb2YgQ2F1c2FsTmV0XG4gICAgICovXG4gICAgY29uc3RydWN0b3IoIGZ1bmN0b3IsIGxvZ2dlciwgc3RyZWFtUHJlcHJvY2Vzc2luZywgbmV0UnVubmVyLCBzdHJlYW1EZXBsb3ltZW50KXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5GID0gZnVuY3RvcjtcbiAgICAgICAgdGhpcy5SID0gdGhpcy5GLkNvcmVGdW5jdG9yO1xuICAgICAgICB0aGlzLkxvZ2dlciA9IGxvZ2dlcjtcbiAgICAgICAgdGhpcy5QcmVwcm9jZXNzaW5nID0gc3RyZWFtUHJlcHJvY2Vzc2luZztcbiAgICAgICAgdGhpcy5MYXllclJ1bm5lciA9IG5ldFJ1bm5lcjsgICAgICAgIFxuICAgICAgICB0aGlzLkRlcGxveW1lbnQgPSBzdHJlYW1EZXBsb3ltZW50O1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3ICBDYXVzYWxOZXQoICBmdW5jdG9yLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVybUxvZ2dlciwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdXNhbE5ldFByZXByb2Nlc3NpbmdTdHJlYW0sIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXVzYWxOZXRSdW5uZXIsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXVzYWxOZXREZXBsb3ltZW50ICk7IiwiaW1wb3J0IHsgRnVuY3RvciBhcyBCYXNlRnVuY3RvciB9IGZyb20gJ2NhdXNhbC1uZXQuY29yZSc7XG5pbXBvcnQgeyBwbGF0Zm9ybSB9IGZyb20gJ2NhdXNhbC1uZXQudXRpbHMnO1xuLyoqXG4gKiBUaGlzIEZ1bmN0b3IgY2xhc3MgcHJvdmlkZXMgY29tbW9uIHVzZWQgZGF0YSBwcm9jZXNzaW5nIG1ldGhvZHMgZm9yIHBpcGVsaW5lXG4gKiBAY2xhc3MgRnVuY3RvclxuICogQGV4dGVuZHMgQmFzZUZ1bmN0b3JcbiAqL1xuY2xhc3MgRnVuY3RvciBleHRlbmRzIHBsYXRmb3JtLm1peFdpdGgoQmFzZUZ1bmN0b3IsIFtdICl7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBGdW5jdG9yKCk7IiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBjYXVzYWxOZXQgfSBmcm9tICcuL2NhdXNhbE5ldCc7IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfY29yZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X2RhdGFzZXRzX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfZGVwbG95bWVudF9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X2xheWVyX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfbG9nX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfb3B0aW1pemVyc19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3ByZXByb2Nlc3NpbmdfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF91dGlsc19fOyJdLCJzb3VyY2VSb290IjoiIn0=