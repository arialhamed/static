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
      const ModelLossFn = this.Model.Loss,
            Optimizer = this.Optimizer;
      return (sampleTensor, labelTensor, contexts) => {
        const LossFn = () => {
          return T.tidy(() => {
            return ModelLossFn(sampleTensor, labelTensor, contexts);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L29wdGltaXplcnMvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0BjYXVzYWxOZXQvb3B0aW1pemVycy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L29wdGltaXplcnMvL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L29wdGltaXplcnMvL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9vcHRpbWl6ZXJzLy9ob21lL2h1eW5obmd1eWVuL2dpdGh1Yi9jYXVzYWxpdHkvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0U3ByZWFkLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvb3B0aW1pemVycy8vaG9tZS9odXluaG5ndXllbi9naXRodWIvY2F1c2FsaXR5L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvb3B0aW1pemVycy8vaG9tZS9odXluaG5ndXllbi9naXRodWIvY2F1c2FsaXR5L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9vcHRpbWl6ZXJzLy4vc3JjL1N0b2NoYXN0aWNHcmFkaWVudERlc2NlbnQvU0dERml0UGFyYW1zLm1peGlucy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L29wdGltaXplcnMvLi9zcmMvU3RvY2hhc3RpY0dyYWRpZW50RGVzY2VudC9hZGFtT3B0aW1pemVyLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvb3B0aW1pemVycy8uL3NyYy9TdG9jaGFzdGljR3JhZGllbnREZXNjZW50L2NhdXNhbE5ldFNHRE9wdGltaXplci5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L29wdGltaXplcnMvLi9zcmMvU3RvY2hhc3RpY0dyYWRpZW50RGVzY2VudC9mdW5jdG9yLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvb3B0aW1pemVycy8uL3NyYy90cmFpbmVyLm1peGlucy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L29wdGltaXplcnMvZXh0ZXJuYWwgXCJjYXVzYWwtbmV0LmNvcmVcIiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L29wdGltaXplcnMvZXh0ZXJuYWwgXCJjYXVzYWwtbmV0LnV0aWxzXCIiXSwibmFtZXMiOlsiU0dERml0UGFyYW1zTWl4aW5zIiwiQmFzZU9wdGltaXplckNsYXNzIiwiZml0IiwibG9zc0ZuIiwidHJhaW5hYmxlVmFycyIsInRyYWluZXIiLCJtaW5pbWl6ZSIsIkFkYW1PcHRpbWl6ZXIiLCJwbGF0Zm9ybSIsIm1peFdpdGgiLCJCYXNlVGVuc29yIiwiY29uc3RydWN0b3IiLCJvcHRpbWl6ZXJQYXJhbXMiLCJEZWZhdWx0UGFyYW1ldGVycyIsImJldGExIiwiYmV0YTIiLCJlcHNpbG9uIiwibGVhcm5pbmdSYXRlIiwiZnVuY3RvciIsIm1lcmdlUGFyYW1zIiwicGFyYW1zIiwiVCIsInRyYWluIiwiYWRhbSIsIlBhcmFtcyIsIkNhdXNhbE5ldFNHRE9wdGltaXplciIsIkZ1bmN0b3IiLCJCYXNlRnVuY3RvciIsImRlZmF1bHRPcHRpbWl6ZXJQYXJhbWV0ZXJzIiwiUiIsIm1lcmdlRGVlcExlZnQiLCJUcmFpbmVyTWl4aW5zIiwiQmFzZVBpcGVsaW5lQ2xhc3MiLCJUcmFpbmVyIiwiTW9kZWxMb3NzRm4iLCJNb2RlbCIsIkxvc3MiLCJPcHRpbWl6ZXIiLCJzYW1wbGVUZW5zb3IiLCJsYWJlbFRlbnNvciIsImNvbnRleHRzIiwiTG9zc0ZuIiwidGlkeSIsIm9wdGltaXplciIsIkVycm9yIiwiVHJhaW5EYXRhR2VuZXJhdG9yIiwidHJhaW5EYXRhR2VuZXJhdG9yIiwibnVtRXBvY2hzIiwiYmF0Y2hTaXplIiwidHJhaW5Db250ZXh0cyIsIkYiLCJDb3JlRnVuY3RvciIsImxvc3NlcyIsImxvZ2dlciIsIkxvZ2dlciIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicHJvZ3Jlc3NCZWdpbiIsImVwb2NoSWR4IiwicmFuZ2UiLCJUcmFpbkRhdGEiLCJpdGVyTG9zc2VzIiwic2FtcGxlcyIsImxhYmVscyIsImxlbmd0aCIsInRlbnNvciIsImFzVHlwZSIsImxvc3MiLCJwdXNoIiwiZGF0YSIsIm1lYW4iLCJwcm9ncmVzc1VwZGF0ZSIsInByb2dyZXNzRW5kIiwic2V0QnlDb25maWciLCJwaXBlbGluZUNvbmZpZyIsImdyb3VwQmVnaW4iLCJOZXQiLCJMYXllclJ1bm5lciIsIkRhdGFzZXQiLCJncm91cEVuZCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlDOzs7Ozs7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0M7Ozs7Ozs7Ozs7O0FDTkEscUJBQXFCLG1CQUFPLENBQUMscUZBQWtCOztBQUUvQztBQUNBLGlCQUFpQixzQkFBc0I7QUFDdkM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBLCtCOzs7Ozs7Ozs7OztBQ3JCQSxtQ0FBbUMsbUJBQU8sQ0FBQyxpSEFBZ0M7O0FBRTNFO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsZUFBZSw2QkFBNkI7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsMEM7Ozs7Ozs7Ozs7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYSx1QkFBdUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSwrQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQSxRQUFNQSxrQkFBa0IsR0FBSUMsa0JBQUQsSUFBd0IsY0FBY0Esa0JBQWQsQ0FBZ0M7QUFDL0VDLE9BQUcsQ0FBQ0MsTUFBRCxFQUFTQyxhQUFULEVBQXVCO0FBQ3RCLGFBQU8sS0FBS0MsT0FBTCxDQUFhQyxRQUFiLENBQXNCSCxNQUF0QixFQUE4QixJQUE5QixFQUFvQ0MsYUFBcEMsQ0FBUDtBQUNIOztBQUg4RSxHQUFuRjs7aUJBTWVKLGtCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBLFFBQU1PLGFBQU4sU0FBNEJDLHFCQUFTQyxPQUFULENBQWlCQyxpQkFBakIsRUFDdkMsQ0FBRVYscUJBQUYsQ0FEdUMsQ0FBNUIsQ0FDWTtBQUN2QlcsZUFBVyxDQUFDQyxlQUFlLEdBQUMsRUFBakIsRUFBb0I7QUFDM0I7QUFDQSxVQUFJQyxpQkFBaUIsR0FBRztBQUFDQyxhQUFLLEVBQUUsR0FBUjtBQUFhQyxhQUFLLEVBQUUsR0FBcEI7QUFBeUJDLGVBQU8sRUFBQztBQUFqQyxPQUF4Qjs7QUFDQSxZQUFNO0FBQUNDLG9CQUFEO0FBQWVILGFBQWY7QUFBc0JDLGFBQXRCO0FBQTZCQztBQUE3QixVQUF3Q0UsaUJBQVFDLFdBQVIsQ0FBb0JQLGVBQXBCLEVBQXFDQyxpQkFBckMsQ0FBOUM7O0FBQ0EsV0FBS08sTUFBTCxHQUFjO0FBQUVILG9CQUFGO0FBQWdCSCxhQUFoQjtBQUF1QkMsYUFBdkI7QUFBOEJDO0FBQTlCLE9BQWQ7QUFDQSxXQUFLWCxPQUFMLEdBQWUsS0FBS2dCLENBQUwsQ0FBT0MsS0FBUCxDQUFhQyxJQUFiLENBQWtCTixZQUFsQixFQUFnQ0gsS0FBaEMsRUFBdUNDLEtBQXZDLEVBQThDQyxPQUE5QyxDQUFmO0FBQ0g7O0FBRUQsUUFBSVEsTUFBSixHQUFZO0FBQ1IsYUFBTyxLQUFLSixNQUFaO0FBQ0g7O0FBWHNCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEM0I7Ozs7Ozs7O0FBUUEsUUFBTUsscUJBQU4sU0FBb0NqQixxQkFBU0MsT0FBVCxDQUFpQkMsaUJBQWpCLEVBQTZCLENBQUNWLHFCQUFELENBQTdCLENBQXBDLENBQXNGO0FBQ2xGVyxlQUFXLEdBQUU7QUFDVDtBQUNIOztBQUNEWSxRQUFJLENBQUNYLGVBQUQsRUFBaUI7QUFDakIsYUFBTyxJQUFJTCxzQkFBSixDQUFrQkssZUFBbEIsQ0FBUDtBQUNIOztBQU5pRjs7aUJBU3ZFLElBQUlhLHFCQUFKLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJmLFFBQU1DLE9BQU4sU0FBc0JDLGtCQUF0QixDQUFpQztBQUM3QmhCLGVBQVcsR0FBRTtBQUNUO0FBQ0g7O0FBRURRLGVBQVcsQ0FBQ1AsZUFBRCxFQUFrQmdCLDBCQUFsQixFQUE2QztBQUNwRCxZQUFNQyxDQUFDLEdBQUcsS0FBS0EsQ0FBZjtBQUNBLGFBQU9BLENBQUMsQ0FBQ0MsYUFBRixDQUFnQmxCLGVBQWhCLEVBQWlDZ0IsMEJBQWpDLENBQVA7QUFDSDs7QUFSNEI7O2lCQVdsQixJQUFJRixPQUFKLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaZjs7Ozs7Ozs7OztBQVVBLFFBQU1LLGFBQWEsR0FBSUMsaUJBQUQsSUFBc0IsY0FBY0EsaUJBQWQsQ0FBK0I7QUFFdkUsUUFBSUMsT0FBSixHQUFhO0FBQ1QsWUFBTVosQ0FBQyxHQUFHLEtBQUtBLENBQWY7QUFDQSxZQUFNYSxXQUFXLEdBQUMsS0FBS0MsS0FBTCxDQUFXQyxJQUE3QjtBQUFBLFlBQW1DQyxTQUFTLEdBQUMsS0FBS0EsU0FBbEQ7QUFDQSxhQUFPLENBQUNDLFlBQUQsRUFBZUMsV0FBZixFQUE0QkMsUUFBNUIsS0FBdUM7QUFDMUMsY0FBTUMsTUFBTSxHQUFHLE1BQUk7QUFDZixpQkFBT3BCLENBQUMsQ0FBQ3FCLElBQUYsQ0FBUSxNQUFJO0FBQ2YsbUJBQU9SLFdBQVcsQ0FBQ0ksWUFBRCxFQUFlQyxXQUFmLEVBQTRCQyxRQUE1QixDQUFsQjtBQUNILFdBRk0sQ0FBUDtBQUdILFNBSkQ7O0FBS0EsZUFBT0gsU0FBUyxDQUFDbkMsR0FBVixDQUFjdUMsTUFBZCxDQUFQO0FBQ0gsT0FQRDtBQVFIOztBQUVELFFBQUlKLFNBQUosR0FBZTtBQUNYLFVBQUcsQ0FBQyxLQUFLTSxTQUFULEVBQW1CO0FBQ2YsY0FBTUMsS0FBSyxDQUFDLHNCQUFELENBQVg7QUFDSDs7QUFDRCxhQUFPLEtBQUtELFNBQVo7QUFDSDs7QUFHRCxRQUFJTixTQUFKLENBQWNNLFNBQWQsRUFBd0I7QUFDcEIsV0FBS0EsU0FBTCxHQUFpQkEsU0FBakI7QUFDSDs7QUFFRCxRQUFJRSxrQkFBSixHQUF3QjtBQUNwQixVQUFHLENBQUMsS0FBS0Msa0JBQVQsRUFBNEI7QUFDeEIsY0FBTUYsS0FBSyxDQUFDLCtCQUFELENBQVg7QUFDSDs7QUFDRCxhQUFPLEtBQUtFLGtCQUFaO0FBQ0g7O0FBQ0QsUUFBSUQsa0JBQUosQ0FBdUJBLGtCQUF2QixFQUEwQztBQUN0QyxXQUFLQyxrQkFBTCxHQUEwQkQsa0JBQTFCO0FBQ0g7O0FBRUQsVUFBTXZCLEtBQU4sQ0FBWSxPQUFnRCxFQUE1RCxFQUErRDtBQUFBLFVBQW5EO0FBQUV5QixpQkFBUyxHQUFDLEVBQVo7QUFBZ0JDLGlCQUFTLEdBQUM7QUFBMUIsT0FBbUQ7QUFBQSxVQUFuQkMsYUFBbUI7QUFDM0QsVUFBSVQsUUFBUTtBQUFLUTtBQUFMLFNBQW1CQyxhQUFuQixDQUFaO0FBQ0EsWUFBTUMsQ0FBQyxHQUFHLEtBQUtBLENBQWY7QUFBQSxZQUFrQnJCLENBQUMsR0FBRyxLQUFLcUIsQ0FBTCxDQUFPQyxXQUE3QjtBQUFBLFlBQTBDOUIsQ0FBQyxHQUFHLEtBQUtBLENBQW5EO0FBQ0EsWUFBTXdCLGtCQUFrQixHQUFHLEtBQUtBLGtCQUFoQztBQUFBLFlBQW9EWixPQUFPLEdBQUcsS0FBS0EsT0FBbkU7QUFDQSxVQUFJbUIsTUFBTSxHQUFHLEVBQWI7QUFBQSxVQUFpQkMsTUFBTSxHQUFHLEtBQUtDLE1BQS9CO0FBQ0EsYUFBTyxJQUFJQyxPQUFKLENBQVksT0FBT0MsT0FBUCxFQUFnQkMsTUFBaEIsS0FBeUI7QUFDeENKLGNBQU0sQ0FBQ0ssYUFBUCxDQUFxQlgsU0FBckI7O0FBQ0EsYUFBSSxJQUFJWSxRQUFSLElBQW9CVCxDQUFDLENBQUNVLEtBQUYsQ0FBUWIsU0FBUixDQUFwQixFQUF1QztBQUNuQyxnQkFBTWMsU0FBUyxHQUFHaEIsa0JBQWtCLENBQUNHLFNBQUQsQ0FBcEM7QUFDQSxjQUFJYyxVQUFVLEdBQUcsRUFBakI7O0FBQ0Esa0NBQXNDRCxTQUF0QyxFQUFnRDtBQUFBLGdCQUFqQztBQUFFRSxxQkFBRjtBQUFXQztBQUFYLGFBQWlDO0FBQzVDeEIsb0JBQVEsQ0FBQyxXQUFELENBQVIsR0FBd0J1QixPQUFPLENBQUNFLE1BQWhDO0FBQ0EsZ0JBQUkzQixZQUFZLEdBQUdqQixDQUFDLENBQUM2QyxNQUFGLENBQVNILE9BQVQsRUFBa0JJLE1BQWxCLENBQXlCLFNBQXpCLENBQW5CO0FBQ0EsZ0JBQUk1QixXQUFXLEdBQUdsQixDQUFDLENBQUM2QyxNQUFGLENBQVNGLE1BQVQsRUFBaUJHLE1BQWpCLENBQXdCLFNBQXhCLENBQWxCO0FBQ0EsZ0JBQUlDLElBQUksR0FBR25DLE9BQU8sQ0FBQ0ssWUFBRCxFQUFlQyxXQUFmLEVBQTRCQyxRQUE1QixDQUFsQjtBQUNBc0Isc0JBQVUsQ0FBQ08sSUFBWCxFQUFnQixNQUFNRCxJQUFJLENBQUNFLElBQUwsRUFBdEI7QUFDSDs7QUFDRGxCLGdCQUFNLENBQUNpQixJQUFQLENBQVl4QyxDQUFDLENBQUMwQyxJQUFGLENBQU9ULFVBQVAsQ0FBWjtBQUNBQSxvQkFBVSxHQUFHLEVBQWI7QUFDQVQsZ0JBQU0sQ0FBQ21CLGNBQVAsQ0FBc0I7QUFBQ2Isb0JBQUQ7QUFBV1Asa0JBQVg7QUFBbUJMO0FBQW5CLFdBQXRCO0FBQ0g7O0FBQ0RNLGNBQU0sQ0FBQ29CLFdBQVA7QUFDQWpCLGVBQU8sQ0FBQztBQUFDSjtBQUFELFNBQUQsQ0FBUDtBQUNILE9BbEJNLENBQVA7QUFtQkg7O0FBR0RzQixlQUFXLENBQUNDLGNBQUQsRUFBZ0I7QUFDdkIsVUFBRyxNQUFNRCxXQUFULEVBQXFCO0FBQ2pCLGNBQU1BLFdBQU4sQ0FBa0JDLGNBQWxCO0FBQ0g7O0FBQ0QsV0FBS3JCLE1BQUwsQ0FBWXNCLFVBQVosQ0FBdUIsdUJBQXZCO0FBQ0EsWUFBTTtBQUFFdkM7QUFBRixVQUFnQnNDLGNBQWMsQ0FBQ0UsR0FBckM7QUFDQSxXQUFLeEMsU0FBTCxHQUFpQkEsU0FBakI7QUFDQUEsZUFBUyxDQUFDeUMsV0FBVixHQUF3QixLQUFLQSxXQUE3QjtBQUNBLFdBQUtqQyxrQkFBTCxHQUEwQjhCLGNBQWMsQ0FBQ0ksT0FBZixDQUF1QmxDLGtCQUFqRDtBQUNBLFdBQUtTLE1BQUwsQ0FBWTBCLFFBQVo7QUFDSDs7QUExRXNFLEdBQTNFOztpQkE2RWVqRCxhOzs7Ozs7Ozs7Ozs7O0FDdkZmLDZEOzs7Ozs7Ozs7OztBQ0FBLDhEIiwiZmlsZSI6IkBjYXVzYWxOZXQvb3B0aW1pemVycy5ub2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiY2F1c2FsLW5ldC5jb3JlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC51dGlsc1wiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJjYXVzYWwtbmV0LmNvcmVcIiwgXCJjYXVzYWwtbmV0LnV0aWxzXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkBjYXVzYWxOZXQvb3B0aW1pemVyc1wiXSA9IGZhY3RvcnkocmVxdWlyZShcImNhdXNhbC1uZXQuY29yZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQudXRpbHNcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkBjYXVzYWxOZXQvb3B0aW1pemVyc1wiXSA9IGZhY3Rvcnkocm9vdFtcImNhdXNhbC1uZXQuY29yZVwiXSwgcm9vdFtcImNhdXNhbC1uZXQudXRpbHNcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X2NvcmVfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3V0aWxzX18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9kZWZpbmVQcm9wZXJ0eTsiLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoXCIuL2RlZmluZVByb3BlcnR5XCIpO1xuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9O1xuICAgIHZhciBvd25LZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcblxuICAgIGlmICh0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgb3duS2V5cyA9IG93bktleXMuY29uY2F0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKS5maWx0ZXIoZnVuY3Rpb24gKHN5bSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIHN5bSkuZW51bWVyYWJsZTtcbiAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBvd25LZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX29iamVjdFNwcmVhZDsiLCJ2YXIgb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSA9IHJlcXVpcmUoXCIuL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2VcIik7XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0gb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKTtcbiAgdmFyIGtleSwgaTtcblxuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgIHZhciBzb3VyY2VTeW1ib2xLZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IHNvdXJjZVN5bWJvbEtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGtleSA9IHNvdXJjZVN5bWJvbEtleXNbaV07XG4gICAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoc291cmNlLCBrZXkpKSBjb250aW51ZTtcbiAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXM7IiwiZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IHt9O1xuICB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gIHZhciBrZXksIGk7XG5cbiAgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xuICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2U7IiwiY29uc3QgU0dERml0UGFyYW1zTWl4aW5zID0gKEJhc2VPcHRpbWl6ZXJDbGFzcykgPT4gY2xhc3MgZXh0ZW5kcyBCYXNlT3B0aW1pemVyQ2xhc3N7XG4gICAgZml0KGxvc3NGbiwgdHJhaW5hYmxlVmFycyl7XG4gICAgICAgIHJldHVybiB0aGlzLnRyYWluZXIubWluaW1pemUobG9zc0ZuLCB0cnVlLCB0cmFpbmFibGVWYXJzKTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTR0RGaXRQYXJhbXNNaXhpbnM7IiwiaW1wb3J0IHsgVGVuc29yIGFzIEJhc2VUZW5zb3IgfSBmcm9tICdjYXVzYWwtbmV0LmNvcmUnO1xuaW1wb3J0IHsgcGxhdGZvcm0gfSBmcm9tICdjYXVzYWwtbmV0LnV0aWxzJztcbmltcG9ydCB7IGRlZmF1bHQgYXMgZnVuY3RvciB9IGZyb20gJy4vZnVuY3Rvcic7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIFNHREZpdFBhcmFtc01peGlucyB9IGZyb20gJy4vU0dERml0UGFyYW1zLm1peGlucyc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBZGFtT3B0aW1pemVyIGV4dGVuZHMgcGxhdGZvcm0ubWl4V2l0aChCYXNlVGVuc29yLCBcbiAgICBbIFNHREZpdFBhcmFtc01peGlucyBdKXtcbiAgICBjb25zdHJ1Y3RvcihvcHRpbWl6ZXJQYXJhbXM9e30pe1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBsZXQgRGVmYXVsdFBhcmFtZXRlcnMgPSB7YmV0YTE6IDAuMSwgYmV0YTI6IDAuMiwgZXBzaWxvbjowLjAzfTtcbiAgICAgICAgY29uc3Qge2xlYXJuaW5nUmF0ZSwgYmV0YTEsIGJldGEyLCBlcHNpbG9ufSA9IGZ1bmN0b3IubWVyZ2VQYXJhbXMob3B0aW1pemVyUGFyYW1zLCBEZWZhdWx0UGFyYW1ldGVycyk7XG4gICAgICAgIHRoaXMucGFyYW1zID0geyBsZWFybmluZ1JhdGUsIGJldGExLCBiZXRhMiwgZXBzaWxvbiB9O1xuICAgICAgICB0aGlzLnRyYWluZXIgPSB0aGlzLlQudHJhaW4uYWRhbShsZWFybmluZ1JhdGUsIGJldGExLCBiZXRhMiwgZXBzaWxvbik7XG4gICAgfVxuXG4gICAgZ2V0IFBhcmFtcygpe1xuICAgICAgICByZXR1cm4gdGhpcy5wYXJhbXM7XG4gICAgfVxufSIsImltcG9ydCB7ZGVmYXVsdCBhcyBBZGFtT3B0aW1pemVyfSBmcm9tICcuL2FkYW1PcHRpbWl6ZXInO1xuaW1wb3J0IHsgVGVuc29yIGFzIEJhc2VUZW5zb3IgfSBmcm9tICdjYXVzYWwtbmV0LmNvcmUnO1xuaW1wb3J0IHsgcGxhdGZvcm0gfSBmcm9tICdjYXVzYWwtbmV0LnV0aWxzJztcbmltcG9ydCB7IGRlZmF1bHQgYXMgU0dERml0UGFyYW1zTWl4aW5zIH0gZnJvbSAnLi9TR0RGaXRQYXJhbXMubWl4aW5zJztcbi8qKlxuICogVGhpcyBjbGFzcyBwcm92aWRlcyBvcHRpbWl6aW5nIG1ldGhvZHMgd2hpY2ggY2FuIGJlIGFjY2Vzc2VkIHZpYSAqKmNhdXNhbE5ldFNHRE9wdGltaXplcioqIGluc3RhbmNlLlxuICpcbiAqIEBjbGFzcyBDYXVzYWxOZXRTR0RPcHRpbWl6ZXJcbiAqIEBleHRlbmRzIHtUZW5zb3J9XG4gKiBAZXhhbXBsZVxuICogW0VYQU1QTEUgLi4vZXhhbXBsZXMvY2F1c2FsTmV0U0dET3B0aW1pemVycy5iYWJlbC5qc11cbiAqL1xuY2xhc3MgQ2F1c2FsTmV0U0dET3B0aW1pemVyIGV4dGVuZHMgcGxhdGZvcm0ubWl4V2l0aChCYXNlVGVuc29yLCBbU0dERml0UGFyYW1zTWl4aW5zXSl7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG4gICAgYWRhbShvcHRpbWl6ZXJQYXJhbXMpe1xuICAgICAgICByZXR1cm4gbmV3IEFkYW1PcHRpbWl6ZXIob3B0aW1pemVyUGFyYW1zKTsgXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgQ2F1c2FsTmV0U0dET3B0aW1pemVyKCk7IiwiaW1wb3J0IHsgRnVuY3RvciBhcyBCYXNlRnVuY3RvciB9IGZyb20gJ2NhdXNhbC1uZXQuY29yZSc7XG5jbGFzcyBGdW5jdG9yIGV4dGVuZHMgQmFzZUZ1bmN0b3J7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG4gICAgXG4gICAgbWVyZ2VQYXJhbXMob3B0aW1pemVyUGFyYW1zLCBkZWZhdWx0T3B0aW1pemVyUGFyYW1ldGVycyl7XG4gICAgICAgIGNvbnN0IFIgPSB0aGlzLlI7XG4gICAgICAgIHJldHVybiBSLm1lcmdlRGVlcExlZnQob3B0aW1pemVyUGFyYW1zLCBkZWZhdWx0T3B0aW1pemVyUGFyYW1ldGVycyk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgRnVuY3RvcigpOyIsIi8qKlxuICogVGhpcyBtaXhpbiBjbGFzcyBwcm92aWRlcyBhdHRyaWJ1dGVzOiAqKk9wdGltaXplcioqLCAqKlRyYWluZXIqKiwgKipUcmFpbkRhdGFHZW5lcmF0b3IqKiwgXG4gKiBtZXRob2RzICoqdHJhaW4qKiwgaGFuZGxlICoqT3B0aW1pemVyKiogc2V0dGluZyBvZiBwaXBlbGluZUNvbmZpZy5OZXRcbiAqIGFuZCAqKlRyYWluRGF0YUdlbmVyYXRvcioqIHNldHRpbmcgb2YgcGlwZWxpbmVDb25maWcuRGF0YXNldC5cbiAqXG4gKiBAY2xhc3MgVHJhaW5lck1peGluc1xuICogQGV4dGVuZHMge0Jhc2VQaXBlbGluZUNsYXNzfVxuICogQGV4YW1wbGVcbiAqIFtFWEFNUExFIC4uL2V4YW1wbGVzL3RyYWluZXIubWl4aW5zLmJhYmVsLmpzXVxuICovXG5jb25zdCBUcmFpbmVyTWl4aW5zID0gKEJhc2VQaXBlbGluZUNsYXNzKT0+IGNsYXNzIGV4dGVuZHMgQmFzZVBpcGVsaW5lQ2xhc3N7XG4gICAgXG4gICAgZ2V0IFRyYWluZXIoKXtcbiAgICAgICAgY29uc3QgVCA9IHRoaXMuVDtcbiAgICAgICAgY29uc3QgTW9kZWxMb3NzRm49dGhpcy5Nb2RlbC5Mb3NzLCBPcHRpbWl6ZXI9dGhpcy5PcHRpbWl6ZXI7XG4gICAgICAgIHJldHVybiAoc2FtcGxlVGVuc29yLCBsYWJlbFRlbnNvciwgY29udGV4dHMpPT57XG4gICAgICAgICAgICBjb25zdCBMb3NzRm4gPSAoKT0+e1xuICAgICAgICAgICAgICAgIHJldHVybiBULnRpZHkoICgpPT57IFxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gTW9kZWxMb3NzRm4oc2FtcGxlVGVuc29yLCBsYWJlbFRlbnNvciwgY29udGV4dHMpOyBcbiAgICAgICAgICAgICAgICB9ICk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuIE9wdGltaXplci5maXQoTG9zc0ZuKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBnZXQgT3B0aW1pemVyKCl7XG4gICAgICAgIGlmKCF0aGlzLm9wdGltaXplcil7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignb3B0aW1pemVyIGlzIG5vdCBzZXQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5vcHRpbWl6ZXI7XG4gICAgfVxuICAgIFxuXG4gICAgc2V0IE9wdGltaXplcihvcHRpbWl6ZXIpe1xuICAgICAgICB0aGlzLm9wdGltaXplciA9IG9wdGltaXplcjtcbiAgICB9XG5cbiAgICBnZXQgVHJhaW5EYXRhR2VuZXJhdG9yKCl7XG4gICAgICAgIGlmKCF0aGlzLnRyYWluRGF0YUdlbmVyYXRvcil7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignVHJhaW5EYXRhR2VuZXJhdG9yIGlzIG5vdCBzZXQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy50cmFpbkRhdGFHZW5lcmF0b3I7XG4gICAgfVxuICAgIHNldCBUcmFpbkRhdGFHZW5lcmF0b3IoVHJhaW5EYXRhR2VuZXJhdG9yKXtcbiAgICAgICAgdGhpcy50cmFpbkRhdGFHZW5lcmF0b3IgPSBUcmFpbkRhdGFHZW5lcmF0b3I7XG4gICAgfVxuXG4gICAgYXN5bmMgdHJhaW4oeyBudW1FcG9jaHM9MTAsIGJhdGNoU2l6ZT0xLCAuLi50cmFpbkNvbnRleHRzIH09e30pe1xuICAgICAgICBsZXQgY29udGV4dHMgPSB7IGJhdGNoU2l6ZSwgLi4udHJhaW5Db250ZXh0cyB9O1xuICAgICAgICBjb25zdCBGID0gdGhpcy5GLCBSID0gdGhpcy5GLkNvcmVGdW5jdG9yLCBUID0gdGhpcy5UO1xuICAgICAgICBjb25zdCBUcmFpbkRhdGFHZW5lcmF0b3IgPSB0aGlzLlRyYWluRGF0YUdlbmVyYXRvciwgVHJhaW5lciA9IHRoaXMuVHJhaW5lcjtcbiAgICAgICAgbGV0IGxvc3NlcyA9IFtdLCBsb2dnZXIgPSB0aGlzLkxvZ2dlcjtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlLCByZWplY3QpPT57XG4gICAgICAgICAgICBsb2dnZXIucHJvZ3Jlc3NCZWdpbihudW1FcG9jaHMpO1xuICAgICAgICAgICAgZm9yKGxldCBlcG9jaElkeCBvZiBGLnJhbmdlKG51bUVwb2Nocykpe1xuICAgICAgICAgICAgICAgIGNvbnN0IFRyYWluRGF0YSA9IFRyYWluRGF0YUdlbmVyYXRvcihiYXRjaFNpemUpO1xuICAgICAgICAgICAgICAgIGxldCBpdGVyTG9zc2VzID0gW107XG4gICAgICAgICAgICAgICAgZm9yIGF3YWl0IChsZXQgeyBzYW1wbGVzLCBsYWJlbHMgfSBvZiBUcmFpbkRhdGEpe1xuICAgICAgICAgICAgICAgICAgICBjb250ZXh0c1snYmF0Y2hTaXplJ10gPSBzYW1wbGVzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNhbXBsZVRlbnNvciA9IFQudGVuc29yKHNhbXBsZXMpLmFzVHlwZSgnZmxvYXQzMicpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgbGFiZWxUZW5zb3IgPSBULnRlbnNvcihsYWJlbHMpLmFzVHlwZSgnZmxvYXQzMicpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgbG9zcyA9IFRyYWluZXIoc2FtcGxlVGVuc29yLCBsYWJlbFRlbnNvciwgY29udGV4dHMpO1xuICAgICAgICAgICAgICAgICAgICBpdGVyTG9zc2VzLnB1c2goYXdhaXQgbG9zcy5kYXRhKCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsb3NzZXMucHVzaChSLm1lYW4oaXRlckxvc3NlcykpO1xuICAgICAgICAgICAgICAgIGl0ZXJMb3NzZXMgPSBbXTtcbiAgICAgICAgICAgICAgICBsb2dnZXIucHJvZ3Jlc3NVcGRhdGUoe2Vwb2NoSWR4LCBsb3NzZXMsIG51bUVwb2Noc30pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbG9nZ2VyLnByb2dyZXNzRW5kKCk7XG4gICAgICAgICAgICByZXNvbHZlKHtsb3NzZXN9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICBzZXRCeUNvbmZpZyhwaXBlbGluZUNvbmZpZyl7XG4gICAgICAgIGlmKHN1cGVyLnNldEJ5Q29uZmlnKXtcbiAgICAgICAgICAgIHN1cGVyLnNldEJ5Q29uZmlnKHBpcGVsaW5lQ29uZmlnKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLkxvZ2dlci5ncm91cEJlZ2luKCdzZXQgVHJhaW5lciBieSBjb25maWcnKTtcbiAgICAgICAgY29uc3QgeyBPcHRpbWl6ZXIgfSA9IHBpcGVsaW5lQ29uZmlnLk5ldDtcbiAgICAgICAgdGhpcy5PcHRpbWl6ZXIgPSBPcHRpbWl6ZXI7XG4gICAgICAgIE9wdGltaXplci5MYXllclJ1bm5lciA9IHRoaXMuTGF5ZXJSdW5uZXI7XG4gICAgICAgIHRoaXMuVHJhaW5EYXRhR2VuZXJhdG9yID0gcGlwZWxpbmVDb25maWcuRGF0YXNldC5UcmFpbkRhdGFHZW5lcmF0b3I7XG4gICAgICAgIHRoaXMuTG9nZ2VyLmdyb3VwRW5kKCk7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgVHJhaW5lck1peGluczsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9jb3JlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfdXRpbHNfXzsiXSwic291cmNlUm9vdCI6IiJ9