(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("causal-net.core"), require("causal-net.utils"));
	else if(typeof define === 'function' && define.amd)
		define(["causal-net.core", "causal-net.utils"], factory);
	else if(typeof exports === 'object')
		exports["@causalNet/optimizers"] = factory(require("causal-net.core"), require("causal-net.utils"));
	else
		root["@causalNet/optimizers"] = factory(root["causal-net.core"], root["causal-net.utils"]);
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

/***/ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!*******************************************************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

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

/***/ "../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js":
/*!*********************************************************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/@babel/runtime/helpers/objectWithoutProperties.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var objectWithoutPropertiesLoose = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ "../../node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

module.exports = _objectWithoutProperties;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!**************************************************************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "./src/StochasticGradientDescent/SGDFitParams.mixins.js":
/*!**************************************************************!*\
  !*** ./src/StochasticGradientDescent/SGDFitParams.mixins.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  const SGDFitParamsMixins = BaseOptimizerClass => class extends BaseOptimizerClass {
    fit(lossFn, trainableVars) {
      return this.trainer.minimize(lossFn, true, trainableVars);
    }

  };

  var _default = SGDFitParamsMixins;
  _exports.default = _default;
});

/***/ }),

/***/ "./src/StochasticGradientDescent/adamOptimizer.js":
/*!********************************************************!*\
  !*** ./src/StochasticGradientDescent/adamOptimizer.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! causal-net.core */ "causal-net.core"), __webpack_require__(/*! causal-net.utils */ "causal-net.utils"), __webpack_require__(/*! ./functor */ "./src/StochasticGradientDescent/functor.js"), __webpack_require__(/*! ./SGDFitParams.mixins */ "./src/StochasticGradientDescent/SGDFitParams.mixins.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _causalNet, _causalNet2, _functor, _SGDFitParams) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _functor = _interopRequireDefault(_functor);
  _SGDFitParams = _interopRequireDefault(_SGDFitParams);

  class AdamOptimizer extends _causalNet2.platform.mixWith(_causalNet.Tensor, [_SGDFitParams.default]) {
    constructor(optimizerParams = {}) {
      super();
      let DefaultParameters = {
        beta1: 0.1,
        beta2: 0.2,
        epsilon: 0.03
      };

      const {
        learningRate,
        beta1,
        beta2,
        epsilon
      } = _functor.default.mergeParams(optimizerParams, DefaultParameters);

      this.params = {
        learningRate,
        beta1,
        beta2,
        epsilon
      };
      this.trainer = this.T.train.adam(learningRate, beta1, beta2, epsilon);
    }

    get Params() {
      return this.params;
    }

  }

  _exports.default = AdamOptimizer;
});

/***/ }),

/***/ "./src/StochasticGradientDescent/causalNetSGDOptimizer.js":
/*!****************************************************************!*\
  !*** ./src/StochasticGradientDescent/causalNetSGDOptimizer.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./adamOptimizer */ "./src/StochasticGradientDescent/adamOptimizer.js"), __webpack_require__(/*! causal-net.core */ "causal-net.core"), __webpack_require__(/*! causal-net.utils */ "causal-net.utils"), __webpack_require__(/*! ./SGDFitParams.mixins */ "./src/StochasticGradientDescent/SGDFitParams.mixins.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _adamOptimizer, _causalNet, _causalNet2, _SGDFitParams) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _adamOptimizer = _interopRequireDefault(_adamOptimizer);
  _SGDFitParams = _interopRequireDefault(_SGDFitParams);

  /**
   * This class provides optimizing methods which can be accessed via **causalNetSGDOptimizer** instance.
   *
   * @class CausalNetSGDOptimizer
   * @extends {Tensor}
   * @example
   * [EXAMPLE ../examples/causalNetSGDOptimizers.babel.js]
   */
  class CausalNetSGDOptimizer extends _causalNet2.platform.mixWith(_causalNet.Tensor, [_SGDFitParams.default]) {
    constructor() {
      super();
    }

    adam(optimizerParams) {
      return new _adamOptimizer.default(optimizerParams);
    }

  }

  var _default = new CausalNetSGDOptimizer();

  _exports.default = _default;
});

/***/ }),

/***/ "./src/StochasticGradientDescent/functor.js":
/*!**************************************************!*\
  !*** ./src/StochasticGradientDescent/functor.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! causal-net.core */ "causal-net.core")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _causalNet) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class Functor extends _causalNet.Functor {
    constructor() {
      super();
    }

    mergeParams(optimizerParams, defaultOptimizerParameters) {
      const R = this.R;
      return R.mergeDeepLeft(optimizerParams, defaultOptimizerParameters);
    }

  }

  var _default = new Functor();

  _exports.default = _default;
});

/***/ }),

/***/ "./src/StochasticGradientDescent/index.js":
/*!************************************************!*\
  !*** ./src/StochasticGradientDescent/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./causalNetSGDOptimizer */ "./src/StochasticGradientDescent/causalNetSGDOptimizer.js"), __webpack_require__(/*! ./SGDFitParams.mixins */ "./src/StochasticGradientDescent/SGDFitParams.mixins.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _causalNetSGDOptimizer, _SGDFitParams) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "causalNetSGDOptimizer", {
    enumerable: true,
    get: function () {
      return _causalNetSGDOptimizer.default;
    }
  });
  Object.defineProperty(_exports, "SGDFitParamsMixins", {
    enumerable: true,
    get: function () {
      return _SGDFitParams.default;
    }
  });
  _causalNetSGDOptimizer = _interopRequireDefault(_causalNetSGDOptimizer);
  _SGDFitParams = _interopRequireDefault(_SGDFitParams);
});

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./StochasticGradientDescent/index */ "./src/StochasticGradientDescent/index.js"), __webpack_require__(/*! ./trainer.mixins */ "./src/trainer.mixins.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _index, _trainer) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "causalNetSGDOptimizer", {
    enumerable: true,
    get: function () {
      return _index.causalNetSGDOptimizer;
    }
  });
  Object.defineProperty(_exports, "TrainerMixins", {
    enumerable: true,
    get: function () {
      return _trainer.default;
    }
  });
  _trainer = _interopRequireDefault(_trainer);
});

/***/ }),

/***/ "./src/trainer.mixins.js":
/*!*******************************!*\
  !*** ./src/trainer.mixins.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "../../node_modules/@babel/runtime/helpers/objectSpread.js"), __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _objectSpread2, _objectWithoutProperties2) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _objectSpread2 = _interopRequireDefault(_objectSpread2);
  _objectWithoutProperties2 = _interopRequireDefault(_objectWithoutProperties2);

  /**
   * This mixin class provides attributes: **Optimizer**, **Trainer**, **TrainDataGenerator**, 
   * methods **train**, handle **Optimizer** setting of pipelineConfig.Net
   * and **TrainDataGenerator** setting of pipelineConfig.Dataset.
   *
   * @class TrainerMixins
   * @extends {BasePipelineClass}
   * @example
   * [EXAMPLE ../examples/trainer.mixins.babel.js]
   */
  const TrainerMixins = BasePipelineClass => class extends BasePipelineClass {
    get Trainer() {
      const T = this.T;
      const Loss = this.LossModel,
            Optimizer = this.Optimizer;
      return (sampleTensor, labelTensor, contexts) => {
        const LossFn = () => {
          return T.tidy(() => {
            return Loss(sampleTensor, labelTensor, contexts);
          });
        };

        return Optimizer.fit(LossFn);
      };
    }

    get Optimizer() {
      if (!this.optimizer) {
        throw Error('optimizer is not set');
      }

      return this.optimizer;
    }

    set Optimizer(optimizer) {
      this.optimizer = optimizer;
    }

    get TrainDataGenerator() {
      if (!this.trainDataGenerator) {
        throw Error('TrainDataGenerator is not set');
      }

      return this.trainDataGenerator;
    }

    set TrainDataGenerator(TrainDataGenerator) {
      this.trainDataGenerator = TrainDataGenerator;
    }

    async train(_ref = {}) {
      let {
        numEpochs = 10,
        batchSize = 1
      } = _ref,
          trainContexts = (0, _objectWithoutProperties2.default)(_ref, ["numEpochs", "batchSize"]);
      let contexts = (0, _objectSpread2.default)({
        batchSize
      }, trainContexts);
      const F = this.F,
            R = this.F.CoreFunctor,
            T = this.T;
      const TrainDataGenerator = this.TrainDataGenerator,
            Trainer = this.Trainer;
      let losses = [],
          logger = this.Logger;
      return new Promise(async (resolve, reject) => {
        logger.progressBegin(numEpochs);

        for (let epochIdx of F.range(numEpochs)) {
          const TrainData = TrainDataGenerator(batchSize);
          let iterLosses = [];

          for await (let _ref2 of TrainData) {
            let {
              samples,
              labels
            } = _ref2;
            contexts['batchSize'] = samples.length;
            let sampleTensor = T.tensor(samples).asType('float32');
            let labelTensor = T.tensor(labels).asType('float32');
            let loss = Trainer(sampleTensor, labelTensor, contexts);
            iterLosses.push((await loss.data()));
          }

          losses.push(R.mean(iterLosses));
          iterLosses = [];
          logger.progressUpdate({
            epochIdx,
            losses,
            numEpochs
          });
        }

        logger.progressEnd();
        resolve({
          losses
        });
      });
    }

    setByConfig(pipelineConfig) {
      if (super.setByConfig) {
        super.setByConfig(pipelineConfig);
      }

      this.Logger.groupBegin('set Trainer by config');
      const {
        Optimizer
      } = pipelineConfig.Net;
      this.Optimizer = Optimizer;
      Optimizer.LayerRunner = this.LayerRunner;
      this.TrainDataGenerator = pipelineConfig.Dataset.TrainDataGenerator;
      this.Logger.groupEnd();
    }

  };

  var _default = TrainerMixins;
  _exports.default = _default;
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L29wdGltaXplcnMvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0BjYXVzYWxOZXQvb3B0aW1pemVycy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L29wdGltaXplcnMvL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L29wdGltaXplcnMvL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9vcHRpbWl6ZXJzLy9ob21lL2h1eW5obmd1eWVuL2dpdGh1Yi9jYXVzYWxpdHkvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0U3ByZWFkLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvb3B0aW1pemVycy8vaG9tZS9odXluaG5ndXllbi9naXRodWIvY2F1c2FsaXR5L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvb3B0aW1pemVycy8vaG9tZS9odXluaG5ndXllbi9naXRodWIvY2F1c2FsaXR5L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9vcHRpbWl6ZXJzLy4vc3JjL1N0b2NoYXN0aWNHcmFkaWVudERlc2NlbnQvU0dERml0UGFyYW1zLm1peGlucy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L29wdGltaXplcnMvLi9zcmMvU3RvY2hhc3RpY0dyYWRpZW50RGVzY2VudC9hZGFtT3B0aW1pemVyLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvb3B0aW1pemVycy8uL3NyYy9TdG9jaGFzdGljR3JhZGllbnREZXNjZW50L2NhdXNhbE5ldFNHRE9wdGltaXplci5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L29wdGltaXplcnMvLi9zcmMvU3RvY2hhc3RpY0dyYWRpZW50RGVzY2VudC9mdW5jdG9yLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvb3B0aW1pemVycy8uL3NyYy90cmFpbmVyLm1peGlucy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L29wdGltaXplcnMvZXh0ZXJuYWwgXCJjYXVzYWwtbmV0LmNvcmVcIiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L29wdGltaXplcnMvZXh0ZXJuYWwgXCJjYXVzYWwtbmV0LnV0aWxzXCIiXSwibmFtZXMiOlsiU0dERml0UGFyYW1zTWl4aW5zIiwiQmFzZU9wdGltaXplckNsYXNzIiwiZml0IiwibG9zc0ZuIiwidHJhaW5hYmxlVmFycyIsInRyYWluZXIiLCJtaW5pbWl6ZSIsIkFkYW1PcHRpbWl6ZXIiLCJwbGF0Zm9ybSIsIm1peFdpdGgiLCJCYXNlVGVuc29yIiwiY29uc3RydWN0b3IiLCJvcHRpbWl6ZXJQYXJhbXMiLCJEZWZhdWx0UGFyYW1ldGVycyIsImJldGExIiwiYmV0YTIiLCJlcHNpbG9uIiwibGVhcm5pbmdSYXRlIiwiZnVuY3RvciIsIm1lcmdlUGFyYW1zIiwicGFyYW1zIiwiVCIsInRyYWluIiwiYWRhbSIsIlBhcmFtcyIsIkNhdXNhbE5ldFNHRE9wdGltaXplciIsIkZ1bmN0b3IiLCJCYXNlRnVuY3RvciIsImRlZmF1bHRPcHRpbWl6ZXJQYXJhbWV0ZXJzIiwiUiIsIm1lcmdlRGVlcExlZnQiLCJUcmFpbmVyTWl4aW5zIiwiQmFzZVBpcGVsaW5lQ2xhc3MiLCJUcmFpbmVyIiwiTG9zcyIsIkxvc3NNb2RlbCIsIk9wdGltaXplciIsInNhbXBsZVRlbnNvciIsImxhYmVsVGVuc29yIiwiY29udGV4dHMiLCJMb3NzRm4iLCJ0aWR5Iiwib3B0aW1pemVyIiwiRXJyb3IiLCJUcmFpbkRhdGFHZW5lcmF0b3IiLCJ0cmFpbkRhdGFHZW5lcmF0b3IiLCJudW1FcG9jaHMiLCJiYXRjaFNpemUiLCJ0cmFpbkNvbnRleHRzIiwiRiIsIkNvcmVGdW5jdG9yIiwibG9zc2VzIiwibG9nZ2VyIiwiTG9nZ2VyIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJwcm9ncmVzc0JlZ2luIiwiZXBvY2hJZHgiLCJyYW5nZSIsIlRyYWluRGF0YSIsIml0ZXJMb3NzZXMiLCJzYW1wbGVzIiwibGFiZWxzIiwibGVuZ3RoIiwidGVuc29yIiwiYXNUeXBlIiwibG9zcyIsInB1c2giLCJkYXRhIiwibWVhbiIsInByb2dyZXNzVXBkYXRlIiwicHJvZ3Jlc3NFbmQiLCJzZXRCeUNvbmZpZyIsInBpcGVsaW5lQ29uZmlnIiwiZ3JvdXBCZWdpbiIsIk5ldCIsIkxheWVyUnVubmVyIiwiRGF0YXNldCIsImdyb3VwRW5kIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUM7Ozs7Ozs7Ozs7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3Qzs7Ozs7Ozs7Ozs7QUNOQSxxQkFBcUIsbUJBQU8sQ0FBQyxxRkFBa0I7O0FBRS9DO0FBQ0EsaUJBQWlCLHNCQUFzQjtBQUN2QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUEsK0I7Ozs7Ozs7Ozs7O0FDckJBLG1DQUFtQyxtQkFBTyxDQUFDLGlIQUFnQzs7QUFFM0U7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxlQUFlLDZCQUE2QjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSwwQzs7Ozs7Ozs7Ozs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhLHVCQUF1QjtBQUNwQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLCtDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZBLFFBQU1BLGtCQUFrQixHQUFJQyxrQkFBRCxJQUF3QixjQUFjQSxrQkFBZCxDQUFnQztBQUMvRUMsT0FBRyxDQUFDQyxNQUFELEVBQVNDLGFBQVQsRUFBdUI7QUFDdEIsYUFBTyxLQUFLQyxPQUFMLENBQWFDLFFBQWIsQ0FBc0JILE1BQXRCLEVBQThCLElBQTlCLEVBQW9DQyxhQUFwQyxDQUFQO0FBQ0g7O0FBSDhFLEdBQW5GOztpQkFNZUosa0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkEsUUFBTU8sYUFBTixTQUE0QkMscUJBQVNDLE9BQVQsQ0FBaUJDLGlCQUFqQixFQUN2QyxDQUFFVixxQkFBRixDQUR1QyxDQUE1QixDQUNZO0FBQ3ZCVyxlQUFXLENBQUNDLGVBQWUsR0FBQyxFQUFqQixFQUFvQjtBQUMzQjtBQUNBLFVBQUlDLGlCQUFpQixHQUFHO0FBQUNDLGFBQUssRUFBRSxHQUFSO0FBQWFDLGFBQUssRUFBRSxHQUFwQjtBQUF5QkMsZUFBTyxFQUFDO0FBQWpDLE9BQXhCOztBQUNBLFlBQU07QUFBQ0Msb0JBQUQ7QUFBZUgsYUFBZjtBQUFzQkMsYUFBdEI7QUFBNkJDO0FBQTdCLFVBQXdDRSxpQkFBUUMsV0FBUixDQUFvQlAsZUFBcEIsRUFBcUNDLGlCQUFyQyxDQUE5Qzs7QUFDQSxXQUFLTyxNQUFMLEdBQWM7QUFBRUgsb0JBQUY7QUFBZ0JILGFBQWhCO0FBQXVCQyxhQUF2QjtBQUE4QkM7QUFBOUIsT0FBZDtBQUNBLFdBQUtYLE9BQUwsR0FBZSxLQUFLZ0IsQ0FBTCxDQUFPQyxLQUFQLENBQWFDLElBQWIsQ0FBa0JOLFlBQWxCLEVBQWdDSCxLQUFoQyxFQUF1Q0MsS0FBdkMsRUFBOENDLE9BQTlDLENBQWY7QUFDSDs7QUFFRCxRQUFJUSxNQUFKLEdBQVk7QUFDUixhQUFPLEtBQUtKLE1BQVo7QUFDSDs7QUFYc0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0QzQjs7Ozs7Ozs7QUFRQSxRQUFNSyxxQkFBTixTQUFvQ2pCLHFCQUFTQyxPQUFULENBQWlCQyxpQkFBakIsRUFBNkIsQ0FBQ1YscUJBQUQsQ0FBN0IsQ0FBcEMsQ0FBc0Y7QUFDbEZXLGVBQVcsR0FBRTtBQUNUO0FBQ0g7O0FBQ0RZLFFBQUksQ0FBQ1gsZUFBRCxFQUFpQjtBQUNqQixhQUFPLElBQUlMLHNCQUFKLENBQWtCSyxlQUFsQixDQUFQO0FBQ0g7O0FBTmlGOztpQkFTdkUsSUFBSWEscUJBQUosRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQmYsUUFBTUMsT0FBTixTQUFzQkMsa0JBQXRCLENBQWlDO0FBQzdCaEIsZUFBVyxHQUFFO0FBQ1Q7QUFDSDs7QUFFRFEsZUFBVyxDQUFDUCxlQUFELEVBQWtCZ0IsMEJBQWxCLEVBQTZDO0FBQ3BELFlBQU1DLENBQUMsR0FBRyxLQUFLQSxDQUFmO0FBQ0EsYUFBT0EsQ0FBQyxDQUFDQyxhQUFGLENBQWdCbEIsZUFBaEIsRUFBaUNnQiwwQkFBakMsQ0FBUDtBQUNIOztBQVI0Qjs7aUJBV2xCLElBQUlGLE9BQUosRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1pmOzs7Ozs7Ozs7O0FBVUEsUUFBTUssYUFBYSxHQUFJQyxpQkFBRCxJQUFzQixjQUFjQSxpQkFBZCxDQUErQjtBQUV2RSxRQUFJQyxPQUFKLEdBQWE7QUFDVCxZQUFNWixDQUFDLEdBQUcsS0FBS0EsQ0FBZjtBQUNBLFlBQU1hLElBQUksR0FBQyxLQUFLQyxTQUFoQjtBQUFBLFlBQTJCQyxTQUFTLEdBQUMsS0FBS0EsU0FBMUM7QUFDQSxhQUFPLENBQUNDLFlBQUQsRUFBZUMsV0FBZixFQUE0QkMsUUFBNUIsS0FBdUM7QUFDMUMsY0FBTUMsTUFBTSxHQUFHLE1BQUk7QUFDZixpQkFBT25CLENBQUMsQ0FBQ29CLElBQUYsQ0FBUSxNQUFJO0FBQ2YsbUJBQU9QLElBQUksQ0FBQ0csWUFBRCxFQUFlQyxXQUFmLEVBQTRCQyxRQUE1QixDQUFYO0FBQ0gsV0FGTSxDQUFQO0FBR0gsU0FKRDs7QUFLQSxlQUFPSCxTQUFTLENBQUNsQyxHQUFWLENBQWNzQyxNQUFkLENBQVA7QUFDSCxPQVBEO0FBUUg7O0FBRUQsUUFBSUosU0FBSixHQUFlO0FBQ1gsVUFBRyxDQUFDLEtBQUtNLFNBQVQsRUFBbUI7QUFDZixjQUFNQyxLQUFLLENBQUMsc0JBQUQsQ0FBWDtBQUNIOztBQUNELGFBQU8sS0FBS0QsU0FBWjtBQUNIOztBQUdELFFBQUlOLFNBQUosQ0FBY00sU0FBZCxFQUF3QjtBQUNwQixXQUFLQSxTQUFMLEdBQWlCQSxTQUFqQjtBQUNIOztBQUVELFFBQUlFLGtCQUFKLEdBQXdCO0FBQ3BCLFVBQUcsQ0FBQyxLQUFLQyxrQkFBVCxFQUE0QjtBQUN4QixjQUFNRixLQUFLLENBQUMsK0JBQUQsQ0FBWDtBQUNIOztBQUNELGFBQU8sS0FBS0Usa0JBQVo7QUFDSDs7QUFDRCxRQUFJRCxrQkFBSixDQUF1QkEsa0JBQXZCLEVBQTBDO0FBQ3RDLFdBQUtDLGtCQUFMLEdBQTBCRCxrQkFBMUI7QUFDSDs7QUFFRCxVQUFNdEIsS0FBTixDQUFZLE9BQWdELEVBQTVELEVBQStEO0FBQUEsVUFBbkQ7QUFBRXdCLGlCQUFTLEdBQUMsRUFBWjtBQUFnQkMsaUJBQVMsR0FBQztBQUExQixPQUFtRDtBQUFBLFVBQW5CQyxhQUFtQjtBQUMzRCxVQUFJVCxRQUFRO0FBQUtRO0FBQUwsU0FBbUJDLGFBQW5CLENBQVo7QUFDQSxZQUFNQyxDQUFDLEdBQUcsS0FBS0EsQ0FBZjtBQUFBLFlBQWtCcEIsQ0FBQyxHQUFHLEtBQUtvQixDQUFMLENBQU9DLFdBQTdCO0FBQUEsWUFBMEM3QixDQUFDLEdBQUcsS0FBS0EsQ0FBbkQ7QUFDQSxZQUFNdUIsa0JBQWtCLEdBQUcsS0FBS0Esa0JBQWhDO0FBQUEsWUFBb0RYLE9BQU8sR0FBRyxLQUFLQSxPQUFuRTtBQUNBLFVBQUlrQixNQUFNLEdBQUcsRUFBYjtBQUFBLFVBQWlCQyxNQUFNLEdBQUcsS0FBS0MsTUFBL0I7QUFDQSxhQUFPLElBQUlDLE9BQUosQ0FBWSxPQUFPQyxPQUFQLEVBQWdCQyxNQUFoQixLQUF5QjtBQUN4Q0osY0FBTSxDQUFDSyxhQUFQLENBQXFCWCxTQUFyQjs7QUFDQSxhQUFJLElBQUlZLFFBQVIsSUFBb0JULENBQUMsQ0FBQ1UsS0FBRixDQUFRYixTQUFSLENBQXBCLEVBQXVDO0FBQ25DLGdCQUFNYyxTQUFTLEdBQUdoQixrQkFBa0IsQ0FBQ0csU0FBRCxDQUFwQztBQUNBLGNBQUljLFVBQVUsR0FBRyxFQUFqQjs7QUFDQSxrQ0FBc0NELFNBQXRDLEVBQWdEO0FBQUEsZ0JBQWpDO0FBQUVFLHFCQUFGO0FBQVdDO0FBQVgsYUFBaUM7QUFDNUN4QixvQkFBUSxDQUFDLFdBQUQsQ0FBUixHQUF3QnVCLE9BQU8sQ0FBQ0UsTUFBaEM7QUFDQSxnQkFBSTNCLFlBQVksR0FBR2hCLENBQUMsQ0FBQzRDLE1BQUYsQ0FBU0gsT0FBVCxFQUFrQkksTUFBbEIsQ0FBeUIsU0FBekIsQ0FBbkI7QUFDQSxnQkFBSTVCLFdBQVcsR0FBR2pCLENBQUMsQ0FBQzRDLE1BQUYsQ0FBU0YsTUFBVCxFQUFpQkcsTUFBakIsQ0FBd0IsU0FBeEIsQ0FBbEI7QUFDQSxnQkFBSUMsSUFBSSxHQUFHbEMsT0FBTyxDQUFDSSxZQUFELEVBQWVDLFdBQWYsRUFBNEJDLFFBQTVCLENBQWxCO0FBQ0FzQixzQkFBVSxDQUFDTyxJQUFYLEVBQWdCLE1BQU1ELElBQUksQ0FBQ0UsSUFBTCxFQUF0QjtBQUNIOztBQUNEbEIsZ0JBQU0sQ0FBQ2lCLElBQVAsQ0FBWXZDLENBQUMsQ0FBQ3lDLElBQUYsQ0FBT1QsVUFBUCxDQUFaO0FBQ0FBLG9CQUFVLEdBQUcsRUFBYjtBQUNBVCxnQkFBTSxDQUFDbUIsY0FBUCxDQUFzQjtBQUFDYixvQkFBRDtBQUFXUCxrQkFBWDtBQUFtQkw7QUFBbkIsV0FBdEI7QUFDSDs7QUFDRE0sY0FBTSxDQUFDb0IsV0FBUDtBQUNBakIsZUFBTyxDQUFDO0FBQUNKO0FBQUQsU0FBRCxDQUFQO0FBQ0gsT0FsQk0sQ0FBUDtBQW1CSDs7QUFHRHNCLGVBQVcsQ0FBQ0MsY0FBRCxFQUFnQjtBQUN2QixVQUFHLE1BQU1ELFdBQVQsRUFBcUI7QUFDakIsY0FBTUEsV0FBTixDQUFrQkMsY0FBbEI7QUFDSDs7QUFDRCxXQUFLckIsTUFBTCxDQUFZc0IsVUFBWixDQUF1Qix1QkFBdkI7QUFDQSxZQUFNO0FBQUV2QztBQUFGLFVBQWdCc0MsY0FBYyxDQUFDRSxHQUFyQztBQUNBLFdBQUt4QyxTQUFMLEdBQWlCQSxTQUFqQjtBQUNBQSxlQUFTLENBQUN5QyxXQUFWLEdBQXdCLEtBQUtBLFdBQTdCO0FBQ0EsV0FBS2pDLGtCQUFMLEdBQTBCOEIsY0FBYyxDQUFDSSxPQUFmLENBQXVCbEMsa0JBQWpEO0FBQ0EsV0FBS1MsTUFBTCxDQUFZMEIsUUFBWjtBQUNIOztBQTFFc0UsR0FBM0U7O2lCQTZFZWhELGE7Ozs7Ozs7Ozs7Ozs7QUN2RmYsNkQ7Ozs7Ozs7Ozs7O0FDQUEsOEQiLCJmaWxlIjoiQGNhdXNhbE5ldC9vcHRpbWl6ZXJzLndlYi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImNhdXNhbC1uZXQuY29yZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQudXRpbHNcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiY2F1c2FsLW5ldC5jb3JlXCIsIFwiY2F1c2FsLW5ldC51dGlsc1wiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJAY2F1c2FsTmV0L29wdGltaXplcnNcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJjYXVzYWwtbmV0LmNvcmVcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnV0aWxzXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJAY2F1c2FsTmV0L29wdGltaXplcnNcIl0gPSBmYWN0b3J5KHJvb3RbXCJjYXVzYWwtbmV0LmNvcmVcIl0sIHJvb3RbXCJjYXVzYWwtbmV0LnV0aWxzXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9jb3JlX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF91dGlsc19fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZGVmaW5lUHJvcGVydHk7IiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKFwiLi9kZWZpbmVQcm9wZXJ0eVwiKTtcblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTtcbiAgICB2YXIgb3duS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG5cbiAgICBpZiAodHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIG93bktleXMgPSBvd25LZXlzLmNvbmNhdChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSkuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBzeW0pLmVudW1lcmFibGU7XG4gICAgICB9KSk7XG4gICAgfVxuXG4gICAgb3duS2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIGRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9vYmplY3RTcHJlYWQ7IiwidmFyIG9iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UgPSByZXF1aXJlKFwiLi9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlXCIpO1xuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IG9iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCk7XG4gIHZhciBrZXksIGk7XG5cbiAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICB2YXIgc291cmNlU3ltYm9sS2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKTtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VTeW1ib2xLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBrZXkgPSBzb3VyY2VTeW1ib2xLZXlzW2ldO1xuICAgICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHNvdXJjZSwga2V5KSkgY29udGludWU7XG4gICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzOyIsImZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSB7fTtcbiAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICB2YXIga2V5LCBpO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAga2V5ID0gc291cmNlS2V5c1tpXTtcbiAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlOyIsImNvbnN0IFNHREZpdFBhcmFtc01peGlucyA9IChCYXNlT3B0aW1pemVyQ2xhc3MpID0+IGNsYXNzIGV4dGVuZHMgQmFzZU9wdGltaXplckNsYXNze1xuICAgIGZpdChsb3NzRm4sIHRyYWluYWJsZVZhcnMpe1xuICAgICAgICByZXR1cm4gdGhpcy50cmFpbmVyLm1pbmltaXplKGxvc3NGbiwgdHJ1ZSwgdHJhaW5hYmxlVmFycyk7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgU0dERml0UGFyYW1zTWl4aW5zOyIsImltcG9ydCB7IFRlbnNvciBhcyBCYXNlVGVuc29yIH0gZnJvbSAnY2F1c2FsLW5ldC5jb3JlJztcbmltcG9ydCB7IHBsYXRmb3JtIH0gZnJvbSAnY2F1c2FsLW5ldC51dGlscyc7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIGZ1bmN0b3IgfSBmcm9tICcuL2Z1bmN0b3InO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBTR0RGaXRQYXJhbXNNaXhpbnMgfSBmcm9tICcuL1NHREZpdFBhcmFtcy5taXhpbnMnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWRhbU9wdGltaXplciBleHRlbmRzIHBsYXRmb3JtLm1peFdpdGgoQmFzZVRlbnNvciwgXG4gICAgWyBTR0RGaXRQYXJhbXNNaXhpbnMgXSl7XG4gICAgY29uc3RydWN0b3Iob3B0aW1pemVyUGFyYW1zPXt9KXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgbGV0IERlZmF1bHRQYXJhbWV0ZXJzID0ge2JldGExOiAwLjEsIGJldGEyOiAwLjIsIGVwc2lsb246MC4wM307XG4gICAgICAgIGNvbnN0IHtsZWFybmluZ1JhdGUsIGJldGExLCBiZXRhMiwgZXBzaWxvbn0gPSBmdW5jdG9yLm1lcmdlUGFyYW1zKG9wdGltaXplclBhcmFtcywgRGVmYXVsdFBhcmFtZXRlcnMpO1xuICAgICAgICB0aGlzLnBhcmFtcyA9IHsgbGVhcm5pbmdSYXRlLCBiZXRhMSwgYmV0YTIsIGVwc2lsb24gfTtcbiAgICAgICAgdGhpcy50cmFpbmVyID0gdGhpcy5ULnRyYWluLmFkYW0obGVhcm5pbmdSYXRlLCBiZXRhMSwgYmV0YTIsIGVwc2lsb24pO1xuICAgIH1cblxuICAgIGdldCBQYXJhbXMoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyYW1zO1xuICAgIH1cbn0iLCJpbXBvcnQge2RlZmF1bHQgYXMgQWRhbU9wdGltaXplcn0gZnJvbSAnLi9hZGFtT3B0aW1pemVyJztcbmltcG9ydCB7IFRlbnNvciBhcyBCYXNlVGVuc29yIH0gZnJvbSAnY2F1c2FsLW5ldC5jb3JlJztcbmltcG9ydCB7IHBsYXRmb3JtIH0gZnJvbSAnY2F1c2FsLW5ldC51dGlscyc7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIFNHREZpdFBhcmFtc01peGlucyB9IGZyb20gJy4vU0dERml0UGFyYW1zLm1peGlucyc7XG4vKipcbiAqIFRoaXMgY2xhc3MgcHJvdmlkZXMgb3B0aW1pemluZyBtZXRob2RzIHdoaWNoIGNhbiBiZSBhY2Nlc3NlZCB2aWEgKipjYXVzYWxOZXRTR0RPcHRpbWl6ZXIqKiBpbnN0YW5jZS5cbiAqXG4gKiBAY2xhc3MgQ2F1c2FsTmV0U0dET3B0aW1pemVyXG4gKiBAZXh0ZW5kcyB7VGVuc29yfVxuICogQGV4YW1wbGVcbiAqIFtFWEFNUExFIC4uL2V4YW1wbGVzL2NhdXNhbE5ldFNHRE9wdGltaXplcnMuYmFiZWwuanNdXG4gKi9cbmNsYXNzIENhdXNhbE5ldFNHRE9wdGltaXplciBleHRlbmRzIHBsYXRmb3JtLm1peFdpdGgoQmFzZVRlbnNvciwgW1NHREZpdFBhcmFtc01peGluc10pe1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuICAgIGFkYW0ob3B0aW1pemVyUGFyYW1zKXtcbiAgICAgICAgcmV0dXJuIG5ldyBBZGFtT3B0aW1pemVyKG9wdGltaXplclBhcmFtcyk7IFxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IENhdXNhbE5ldFNHRE9wdGltaXplcigpOyIsImltcG9ydCB7IEZ1bmN0b3IgYXMgQmFzZUZ1bmN0b3IgfSBmcm9tICdjYXVzYWwtbmV0LmNvcmUnO1xuY2xhc3MgRnVuY3RvciBleHRlbmRzIEJhc2VGdW5jdG9ye1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuICAgIFxuICAgIG1lcmdlUGFyYW1zKG9wdGltaXplclBhcmFtcywgZGVmYXVsdE9wdGltaXplclBhcmFtZXRlcnMpe1xuICAgICAgICBjb25zdCBSID0gdGhpcy5SO1xuICAgICAgICByZXR1cm4gUi5tZXJnZURlZXBMZWZ0KG9wdGltaXplclBhcmFtcywgZGVmYXVsdE9wdGltaXplclBhcmFtZXRlcnMpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IEZ1bmN0b3IoKTsiLCIvKipcbiAqIFRoaXMgbWl4aW4gY2xhc3MgcHJvdmlkZXMgYXR0cmlidXRlczogKipPcHRpbWl6ZXIqKiwgKipUcmFpbmVyKiosICoqVHJhaW5EYXRhR2VuZXJhdG9yKiosIFxuICogbWV0aG9kcyAqKnRyYWluKiosIGhhbmRsZSAqKk9wdGltaXplcioqIHNldHRpbmcgb2YgcGlwZWxpbmVDb25maWcuTmV0XG4gKiBhbmQgKipUcmFpbkRhdGFHZW5lcmF0b3IqKiBzZXR0aW5nIG9mIHBpcGVsaW5lQ29uZmlnLkRhdGFzZXQuXG4gKlxuICogQGNsYXNzIFRyYWluZXJNaXhpbnNcbiAqIEBleHRlbmRzIHtCYXNlUGlwZWxpbmVDbGFzc31cbiAqIEBleGFtcGxlXG4gKiBbRVhBTVBMRSAuLi9leGFtcGxlcy90cmFpbmVyLm1peGlucy5iYWJlbC5qc11cbiAqL1xuY29uc3QgVHJhaW5lck1peGlucyA9IChCYXNlUGlwZWxpbmVDbGFzcyk9PiBjbGFzcyBleHRlbmRzIEJhc2VQaXBlbGluZUNsYXNze1xuICAgIFxuICAgIGdldCBUcmFpbmVyKCl7XG4gICAgICAgIGNvbnN0IFQgPSB0aGlzLlQ7XG4gICAgICAgIGNvbnN0IExvc3M9dGhpcy5Mb3NzTW9kZWwsIE9wdGltaXplcj10aGlzLk9wdGltaXplcjtcbiAgICAgICAgcmV0dXJuIChzYW1wbGVUZW5zb3IsIGxhYmVsVGVuc29yLCBjb250ZXh0cyk9PntcbiAgICAgICAgICAgIGNvbnN0IExvc3NGbiA9ICgpPT57XG4gICAgICAgICAgICAgICAgcmV0dXJuIFQudGlkeSggKCk9PnsgXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBMb3NzKHNhbXBsZVRlbnNvciwgbGFiZWxUZW5zb3IsIGNvbnRleHRzKTsgXG4gICAgICAgICAgICAgICAgfSApO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiBPcHRpbWl6ZXIuZml0KExvc3NGbik7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZ2V0IE9wdGltaXplcigpe1xuICAgICAgICBpZighdGhpcy5vcHRpbWl6ZXIpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ29wdGltaXplciBpcyBub3Qgc2V0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW1pemVyO1xuICAgIH1cbiAgICBcblxuICAgIHNldCBPcHRpbWl6ZXIob3B0aW1pemVyKXtcbiAgICAgICAgdGhpcy5vcHRpbWl6ZXIgPSBvcHRpbWl6ZXI7XG4gICAgfVxuXG4gICAgZ2V0IFRyYWluRGF0YUdlbmVyYXRvcigpe1xuICAgICAgICBpZighdGhpcy50cmFpbkRhdGFHZW5lcmF0b3Ipe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ1RyYWluRGF0YUdlbmVyYXRvciBpcyBub3Qgc2V0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMudHJhaW5EYXRhR2VuZXJhdG9yO1xuICAgIH1cbiAgICBzZXQgVHJhaW5EYXRhR2VuZXJhdG9yKFRyYWluRGF0YUdlbmVyYXRvcil7XG4gICAgICAgIHRoaXMudHJhaW5EYXRhR2VuZXJhdG9yID0gVHJhaW5EYXRhR2VuZXJhdG9yO1xuICAgIH1cblxuICAgIGFzeW5jIHRyYWluKHsgbnVtRXBvY2hzPTEwLCBiYXRjaFNpemU9MSwgLi4udHJhaW5Db250ZXh0cyB9PXt9KXtcbiAgICAgICAgbGV0IGNvbnRleHRzID0geyBiYXRjaFNpemUsIC4uLnRyYWluQ29udGV4dHMgfTtcbiAgICAgICAgY29uc3QgRiA9IHRoaXMuRiwgUiA9IHRoaXMuRi5Db3JlRnVuY3RvciwgVCA9IHRoaXMuVDtcbiAgICAgICAgY29uc3QgVHJhaW5EYXRhR2VuZXJhdG9yID0gdGhpcy5UcmFpbkRhdGFHZW5lcmF0b3IsIFRyYWluZXIgPSB0aGlzLlRyYWluZXI7XG4gICAgICAgIGxldCBsb3NzZXMgPSBbXSwgbG9nZ2VyID0gdGhpcy5Mb2dnZXI7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSwgcmVqZWN0KT0+e1xuICAgICAgICAgICAgbG9nZ2VyLnByb2dyZXNzQmVnaW4obnVtRXBvY2hzKTtcbiAgICAgICAgICAgIGZvcihsZXQgZXBvY2hJZHggb2YgRi5yYW5nZShudW1FcG9jaHMpKXtcbiAgICAgICAgICAgICAgICBjb25zdCBUcmFpbkRhdGEgPSBUcmFpbkRhdGFHZW5lcmF0b3IoYmF0Y2hTaXplKTtcbiAgICAgICAgICAgICAgICBsZXQgaXRlckxvc3NlcyA9IFtdO1xuICAgICAgICAgICAgICAgIGZvciBhd2FpdCAobGV0IHsgc2FtcGxlcywgbGFiZWxzIH0gb2YgVHJhaW5EYXRhKXtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dHNbJ2JhdGNoU2l6ZSddID0gc2FtcGxlcy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzYW1wbGVUZW5zb3IgPSBULnRlbnNvcihzYW1wbGVzKS5hc1R5cGUoJ2Zsb2F0MzInKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGxhYmVsVGVuc29yID0gVC50ZW5zb3IobGFiZWxzKS5hc1R5cGUoJ2Zsb2F0MzInKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGxvc3MgPSBUcmFpbmVyKHNhbXBsZVRlbnNvciwgbGFiZWxUZW5zb3IsIGNvbnRleHRzKTtcbiAgICAgICAgICAgICAgICAgICAgaXRlckxvc3Nlcy5wdXNoKGF3YWl0IGxvc3MuZGF0YSgpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbG9zc2VzLnB1c2goUi5tZWFuKGl0ZXJMb3NzZXMpKTtcbiAgICAgICAgICAgICAgICBpdGVyTG9zc2VzID0gW107XG4gICAgICAgICAgICAgICAgbG9nZ2VyLnByb2dyZXNzVXBkYXRlKHtlcG9jaElkeCwgbG9zc2VzLCBudW1FcG9jaHN9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxvZ2dlci5wcm9ncmVzc0VuZCgpO1xuICAgICAgICAgICAgcmVzb2x2ZSh7bG9zc2VzfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgc2V0QnlDb25maWcocGlwZWxpbmVDb25maWcpe1xuICAgICAgICBpZihzdXBlci5zZXRCeUNvbmZpZyl7XG4gICAgICAgICAgICBzdXBlci5zZXRCeUNvbmZpZyhwaXBlbGluZUNvbmZpZyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5Mb2dnZXIuZ3JvdXBCZWdpbignc2V0IFRyYWluZXIgYnkgY29uZmlnJyk7XG4gICAgICAgIGNvbnN0IHsgT3B0aW1pemVyIH0gPSBwaXBlbGluZUNvbmZpZy5OZXQ7XG4gICAgICAgIHRoaXMuT3B0aW1pemVyID0gT3B0aW1pemVyO1xuICAgICAgICBPcHRpbWl6ZXIuTGF5ZXJSdW5uZXIgPSB0aGlzLkxheWVyUnVubmVyO1xuICAgICAgICB0aGlzLlRyYWluRGF0YUdlbmVyYXRvciA9IHBpcGVsaW5lQ29uZmlnLkRhdGFzZXQuVHJhaW5EYXRhR2VuZXJhdG9yO1xuICAgICAgICB0aGlzLkxvZ2dlci5ncm91cEVuZCgpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRyYWluZXJNaXhpbnM7IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfY29yZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3V0aWxzX187Il0sInNvdXJjZVJvb3QiOiIifQ==