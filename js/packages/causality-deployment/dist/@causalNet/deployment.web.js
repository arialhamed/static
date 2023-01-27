(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("causal-net.core"), require("causal-net.utils"));
	else if(typeof define === 'function' && define.amd)
		define(["causal-net.core", "causal-net.utils"], factory);
	else if(typeof exports === 'object')
		exports["@causalNet/deployment"] = factory(require("causal-net.core"), require("causal-net.utils"));
	else
		root["@causalNet/deployment"] = factory(root["causal-net.core"], root["causal-net.utils"]);
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

/***/ "./src/causalNetDeployment.js":
/*!************************************!*\
  !*** ./src/causalNetDeployment.js ***!
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



/**
 * The implementation for event-based model deployment which is supplied 
 * to pipeline class instance as **Deployment** attribute. Pipeline class must be mixed with DeploymentMixins.
 * @class CausalNetDeployment
 * @extends Event
 * @example
 * [EXAMPLE ../examples/causalNetDeployment.babel.js]
 */

class CausalNetDeployment extends causal_net_utils__WEBPACK_IMPORTED_MODULE_2__["platform"].mixWith(causal_net_core__WEBPACK_IMPORTED_MODULE_0__["Event"], []) {
  constructor(functor) {
    super();
    this.F = functor;
    this.R = functor.CoreFunctor;
  }

  set Emitter(emitter) {
    this.deployEmitter = emitter;
  }

  get Emitter() {
    if (!this.deployEmitter) {
      throw Error('Emitter is not set');
    }

    return this.deployEmitter;
  }

  set Listener(listener) {
    this.deployListener = listener;
    this.on('inferencer', infer => {
      this.deployListener(infer);
    });
    this.on('ensembleInferencer', infer => {
      this.deployListener(infer);
    });
  }

  get Listener() {
    if (!this.deployListener) {
      throw Error('Listener is not set');
    }

    return this.deployListener;
  }

  set Inferencer(inferencer) {
    this.deployInferencer = inferencer;
    this.on('emitter', async emitValue => {
      let inferValue = await this.deployInferencer(emitValue);

      if (inferValue && inferValue !== {}) {
        this.emit('inferencer', inferValue);
      }
    });
  }

  get Inferencer() {
    if (!this.deployInferencer) {
      throw Error('Inferencer is not set');
    }

    return this.deployInferencer;
  }

  set EnsembleInferencer(ensembleInferencer) {
    this.deployEnsembleInferencer = ensembleInferencer;
    this.on('emitter', async emitValue => {
      let inferValue = await this.deployEnsembleInferencer(emitValue);

      if (inferValue && inferValue !== {}) {
        this.emit('ensembleInferencer', inferValue);
      }
    });
  }

  get EnsembleInferencer() {
    if (!this.deployEnsembleInferencer) {
      throw Error('EnsembleInferencer is not set');
    }

    return this.deployEnsembleInferencer;
  }

  async deploy() {
    return new Promise(async (resolve, reject) => {
      let counter = 0;
      let emitValue = await this.Emitter();

      while (emitValue !== null) {
        this.emit('emitter', emitValue);
        counter += 1;
        emitValue = await this.Emitter();
      }

      resolve(counter);
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new CausalNetDeployment(_functor__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./src/deployment.mixins.js":
/*!**********************************!*\
  !*** ./src/deployment.mixins.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * This mixin class provides attributes: **Deployment**, **Inferencer**, and handle Deployment setting of pipelineConfig.
 * @class DeploymentMixins
 * @extends BasePipelineClass
 * @example
 * [EXAMPLE ../examples/causalNetDeployment.babel.js]
 */
const DeploymentMixins = BasePipelineClass => class extends BasePipelineClass {
  set Deployment(deployment) {
    this.deployment = deployment;
  }

  get Deployment() {
    if (!this.deployment) {
      throw Error('deployment is not set');
    }

    return this.deployment;
  }

  get Inferencer() {
    const ModelLenses = () => {
      return this.Model;
    };

    const T = this.T;
    return async input => {
      let {
        Predict,
        Encode,
        Decode
      } = input;
      let infer = {};
      const Model = ModelLenses();

      if (Predict) {
        console.log(Predict);
        let inputTensor = T.tensor(Predict).asType('float32').reshape([1, -1]);
        inputTensor.print();
        let predictTensor = Model.Predict(inputTensor);
        infer.Predict = await predictTensor.data();
      }

      if (Encode) {
        let inputTensor = T.tensor(Encode).asType('float32').reshape([1, -1]);
        let encodeTensor = Model.Encode(inputTensor);
        infer.Encode = await encodeTensor.data();
      }

      if (Decode) {
        let inputTensor = T.tensor(Decode).asType('float32').reshape([1, -1]);
        let decodeTensor = Model.Encode(inputTensor);
        infer.Decode = await decodeTensor.data();
      }

      return infer;
    };
  }

  setByConfig(pipelineConfig) {
    if (super.setByConfig) {
      super.setByConfig(pipelineConfig);
    }

    this.Logger.groupBegin('set deployment by config');
    const {
      Emitter,
      Listener
    } = pipelineConfig.Deployment;
    this.Deployment.Emitter = Emitter;
    this.Deployment.Listener = Listener;
    this.Deployment.Inferencer = this.Inferencer;
    this.Logger.groupEnd();
    return pipelineConfig;
  }

  async deploy() {
    return await this.Deployment.deploy();
  }

};

/* harmony default export */ __webpack_exports__["default"] = (DeploymentMixins);

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
/*! exports provided: causalNetDeployment, DeploymentMixins */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _causalNetDeployment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./causalNetDeployment */ "./src/causalNetDeployment.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "causalNetDeployment", function() { return _causalNetDeployment__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _deployment_mixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deployment.mixins */ "./src/deployment.mixins.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeploymentMixins", function() { return _deployment_mixins__WEBPACK_IMPORTED_MODULE_1__["default"]; });




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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RlcGxveW1lbnQvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGVwbG95bWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RlcGxveW1lbnQvLi9zcmMvY2F1c2FsTmV0RGVwbG95bWVudC5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RlcGxveW1lbnQvLi9zcmMvZGVwbG95bWVudC5taXhpbnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9kZXBsb3ltZW50Ly4vc3JjL2Z1bmN0b3IuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9kZXBsb3ltZW50Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGVwbG95bWVudC9leHRlcm5hbCBcImNhdXNhbC1uZXQuY29yZVwiIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGVwbG95bWVudC9leHRlcm5hbCBcImNhdXNhbC1uZXQudXRpbHNcIiJdLCJuYW1lcyI6WyJDYXVzYWxOZXREZXBsb3ltZW50IiwicGxhdGZvcm0iLCJtaXhXaXRoIiwiRXZlbnQiLCJjb25zdHJ1Y3RvciIsImZ1bmN0b3IiLCJGIiwiUiIsIkNvcmVGdW5jdG9yIiwiRW1pdHRlciIsImVtaXR0ZXIiLCJkZXBsb3lFbWl0dGVyIiwiRXJyb3IiLCJMaXN0ZW5lciIsImxpc3RlbmVyIiwiZGVwbG95TGlzdGVuZXIiLCJvbiIsImluZmVyIiwiSW5mZXJlbmNlciIsImluZmVyZW5jZXIiLCJkZXBsb3lJbmZlcmVuY2VyIiwiZW1pdFZhbHVlIiwiaW5mZXJWYWx1ZSIsImVtaXQiLCJFbnNlbWJsZUluZmVyZW5jZXIiLCJlbnNlbWJsZUluZmVyZW5jZXIiLCJkZXBsb3lFbnNlbWJsZUluZmVyZW5jZXIiLCJkZXBsb3kiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImNvdW50ZXIiLCJEZXBsb3ltZW50TWl4aW5zIiwiQmFzZVBpcGVsaW5lQ2xhc3MiLCJEZXBsb3ltZW50IiwiZGVwbG95bWVudCIsIk1vZGVsTGVuc2VzIiwiTW9kZWwiLCJUIiwiaW5wdXQiLCJQcmVkaWN0IiwiRW5jb2RlIiwiRGVjb2RlIiwiY29uc29sZSIsImxvZyIsImlucHV0VGVuc29yIiwidGVuc29yIiwiYXNUeXBlIiwicmVzaGFwZSIsInByaW50IiwicHJlZGljdFRlbnNvciIsImRhdGEiLCJlbmNvZGVUZW5zb3IiLCJkZWNvZGVUZW5zb3IiLCJzZXRCeUNvbmZpZyIsInBpcGVsaW5lQ29uZmlnIiwiTG9nZ2VyIiwiZ3JvdXBCZWdpbiIsImdyb3VwRW5kIiwiRnVuY3RvciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFB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Q0FBZ0J6QixPQUFoQixHQUEwQkEsT0FBMUI7QUFDQSxTQUFLeUIsVUFBTCxDQUFnQnJCLFFBQWhCLEdBQTJCQSxRQUEzQjtBQUNBLFNBQUtxQixVQUFMLENBQWdCaEIsVUFBaEIsR0FBNkIsS0FBS0EsVUFBbEM7QUFDQSxTQUFLc0MsTUFBTCxDQUFZRSxRQUFaO0FBQ0EsV0FBT0gsY0FBUDtBQUNIOztBQUVELFFBQU01QixNQUFOLEdBQWM7QUFDVixXQUFPLE1BQU0sS0FBS08sVUFBTCxDQUFnQlAsTUFBaEIsRUFBYjtBQUNIOztBQTFEMEUsQ0FBL0U7O0FBNkRlSywrRUFBZixFOzs7Ozs7Ozs7Ozs7QUNwRUE7QUFBQTtBQUFBO0FBQUE7QUFDZSxtRUFBSTJCLHVEQUFKLEVBQWYsRTs7Ozs7Ozs7Ozs7O0FDREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUEsNkQ7Ozs7Ozs7Ozs7O0FDQUEsOEQiLCJmaWxlIjoiQGNhdXNhbE5ldC9kZXBsb3ltZW50LndlYi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImNhdXNhbC1uZXQuY29yZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQudXRpbHNcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiY2F1c2FsLW5ldC5jb3JlXCIsIFwiY2F1c2FsLW5ldC51dGlsc1wiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJAY2F1c2FsTmV0L2RlcGxveW1lbnRcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJjYXVzYWwtbmV0LmNvcmVcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnV0aWxzXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJAY2F1c2FsTmV0L2RlcGxveW1lbnRcIl0gPSBmYWN0b3J5KHJvb3RbXCJjYXVzYWwtbmV0LmNvcmVcIl0sIHJvb3RbXCJjYXVzYWwtbmV0LnV0aWxzXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9jb3JlX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF91dGlsc19fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgeyBFdmVudCB9IGZyb20gJ2NhdXNhbC1uZXQuY29yZSc7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIGZ1bmN0b3IgfSBmcm9tICcuL2Z1bmN0b3InO1xuaW1wb3J0IHsgcGxhdGZvcm0gfSBmcm9tICdjYXVzYWwtbmV0LnV0aWxzJztcbi8qKlxuICogVGhlIGltcGxlbWVudGF0aW9uIGZvciBldmVudC1iYXNlZCBtb2RlbCBkZXBsb3ltZW50IHdoaWNoIGlzIHN1cHBsaWVkIFxuICogdG8gcGlwZWxpbmUgY2xhc3MgaW5zdGFuY2UgYXMgKipEZXBsb3ltZW50KiogYXR0cmlidXRlLiBQaXBlbGluZSBjbGFzcyBtdXN0IGJlIG1peGVkIHdpdGggRGVwbG95bWVudE1peGlucy5cbiAqIEBjbGFzcyBDYXVzYWxOZXREZXBsb3ltZW50XG4gKiBAZXh0ZW5kcyBFdmVudFxuICogQGV4YW1wbGVcbiAqIFtFWEFNUExFIC4uL2V4YW1wbGVzL2NhdXNhbE5ldERlcGxveW1lbnQuYmFiZWwuanNdXG4gKi9cbmNsYXNzIENhdXNhbE5ldERlcGxveW1lbnQgZXh0ZW5kcyBwbGF0Zm9ybS5taXhXaXRoKCBFdmVudCwgW10gKXtcbiAgICBcbiAgICBjb25zdHJ1Y3RvcihmdW5jdG9yKXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5GID0gZnVuY3RvcjtcbiAgICAgICAgdGhpcy5SID0gZnVuY3Rvci5Db3JlRnVuY3RvcjtcbiAgICB9XG5cbiAgICBzZXQgRW1pdHRlcihlbWl0dGVyKXtcbiAgICAgICAgdGhpcy5kZXBsb3lFbWl0dGVyID0gZW1pdHRlcjtcbiAgICB9XG5cbiAgICBnZXQgRW1pdHRlcigpe1xuICAgICAgICBpZighdGhpcy5kZXBsb3lFbWl0dGVyKXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdFbWl0dGVyIGlzIG5vdCBzZXQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5kZXBsb3lFbWl0dGVyO1xuICAgIH1cblxuICAgIHNldCBMaXN0ZW5lcihsaXN0ZW5lcil7XG4gICAgICAgIHRoaXMuZGVwbG95TGlzdGVuZXIgPSBsaXN0ZW5lcjtcbiAgICAgICAgdGhpcy5vbignaW5mZXJlbmNlcicsIChpbmZlcik9PntcbiAgICAgICAgICAgIHRoaXMuZGVwbG95TGlzdGVuZXIoaW5mZXIpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5vbignZW5zZW1ibGVJbmZlcmVuY2VyJywgKGluZmVyKT0+e1xuICAgICAgICAgICAgdGhpcy5kZXBsb3lMaXN0ZW5lcihpbmZlcik7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICBnZXQgTGlzdGVuZXIoKXtcbiAgICAgICAgaWYoIXRoaXMuZGVwbG95TGlzdGVuZXIpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ0xpc3RlbmVyIGlzIG5vdCBzZXQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5kZXBsb3lMaXN0ZW5lcjtcbiAgICB9XG5cbiAgICBzZXQgSW5mZXJlbmNlcihpbmZlcmVuY2VyKXtcbiAgICAgICAgdGhpcy5kZXBsb3lJbmZlcmVuY2VyID0gaW5mZXJlbmNlcjtcbiAgICAgICAgdGhpcy5vbignZW1pdHRlcicsIGFzeW5jIChlbWl0VmFsdWUpPT57XG4gICAgICAgICAgICBsZXQgaW5mZXJWYWx1ZSA9IGF3YWl0IHRoaXMuZGVwbG95SW5mZXJlbmNlcihlbWl0VmFsdWUpO1xuICAgICAgICAgICAgaWYoaW5mZXJWYWx1ZSAmJiBpbmZlclZhbHVlICE9PSB7fSl7XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdpbmZlcmVuY2VyJywgaW5mZXJWYWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldCBJbmZlcmVuY2VyKCl7XG4gICAgICAgIGlmKCF0aGlzLmRlcGxveUluZmVyZW5jZXIpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ0luZmVyZW5jZXIgaXMgbm90IHNldCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmRlcGxveUluZmVyZW5jZXI7XG4gICAgfVxuXG4gICAgc2V0IEVuc2VtYmxlSW5mZXJlbmNlcihlbnNlbWJsZUluZmVyZW5jZXIpe1xuICAgICAgICB0aGlzLmRlcGxveUVuc2VtYmxlSW5mZXJlbmNlciA9IGVuc2VtYmxlSW5mZXJlbmNlcjtcbiAgICAgICAgdGhpcy5vbignZW1pdHRlcicsIGFzeW5jIChlbWl0VmFsdWUpPT57XG4gICAgICAgICAgICBsZXQgaW5mZXJWYWx1ZSA9IGF3YWl0IHRoaXMuZGVwbG95RW5zZW1ibGVJbmZlcmVuY2VyKGVtaXRWYWx1ZSk7XG4gICAgICAgICAgICBpZihpbmZlclZhbHVlICYmIGluZmVyVmFsdWUgIT09IHt9KXtcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ2Vuc2VtYmxlSW5mZXJlbmNlcicsIGluZmVyVmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXQgRW5zZW1ibGVJbmZlcmVuY2VyKCl7XG4gICAgICAgIGlmKCF0aGlzLmRlcGxveUVuc2VtYmxlSW5mZXJlbmNlcil7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignRW5zZW1ibGVJbmZlcmVuY2VyIGlzIG5vdCBzZXQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5kZXBsb3lFbnNlbWJsZUluZmVyZW5jZXI7XG4gICAgfVxuXG4gICAgYXN5bmMgZGVwbG95KCl7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSwgcmVqZWN0KT0+e1xuICAgICAgICAgICAgbGV0IGNvdW50ZXIgPSAwO1xuICAgICAgICAgICAgbGV0IGVtaXRWYWx1ZSA9IGF3YWl0IHRoaXMuRW1pdHRlcigpO1xuICAgICAgICAgICAgd2hpbGUoZW1pdFZhbHVlICE9PSBudWxsKXtcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ2VtaXR0ZXInLCBlbWl0VmFsdWUpO1xuICAgICAgICAgICAgICAgIGNvdW50ZXIgKz0gMTtcbiAgICAgICAgICAgICAgICBlbWl0VmFsdWUgPSBhd2FpdCB0aGlzLkVtaXR0ZXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc29sdmUoY291bnRlcik7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IENhdXNhbE5ldERlcGxveW1lbnQoZnVuY3Rvcik7IiwiLyoqXG4gKiBUaGlzIG1peGluIGNsYXNzIHByb3ZpZGVzIGF0dHJpYnV0ZXM6ICoqRGVwbG95bWVudCoqLCAqKkluZmVyZW5jZXIqKiwgYW5kIGhhbmRsZSBEZXBsb3ltZW50IHNldHRpbmcgb2YgcGlwZWxpbmVDb25maWcuXG4gKiBAY2xhc3MgRGVwbG95bWVudE1peGluc1xuICogQGV4dGVuZHMgQmFzZVBpcGVsaW5lQ2xhc3NcbiAqIEBleGFtcGxlXG4gKiBbRVhBTVBMRSAuLi9leGFtcGxlcy9jYXVzYWxOZXREZXBsb3ltZW50LmJhYmVsLmpzXVxuICovXG5jb25zdCBEZXBsb3ltZW50TWl4aW5zID0gKEJhc2VQaXBlbGluZUNsYXNzKT0+IGNsYXNzIGV4dGVuZHMgQmFzZVBpcGVsaW5lQ2xhc3Mge1xuICAgXG4gICAgc2V0IERlcGxveW1lbnQoZGVwbG95bWVudCl7XG4gICAgICAgIHRoaXMuZGVwbG95bWVudCA9IGRlcGxveW1lbnQ7XG4gICAgfVxuXG4gICAgZ2V0IERlcGxveW1lbnQoKXtcbiAgICAgICAgaWYoIXRoaXMuZGVwbG95bWVudCl7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignZGVwbG95bWVudCBpcyBub3Qgc2V0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuZGVwbG95bWVudDtcbiAgICB9XG5cbiAgICBnZXQgSW5mZXJlbmNlcigpe1xuICAgICAgICBjb25zdCBNb2RlbExlbnNlcyA9ICgpPT57XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5Nb2RlbDtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgVCA9IHRoaXMuVDtcbiAgICAgICAgcmV0dXJuIGFzeW5jIChpbnB1dCk9PntcbiAgICAgICAgICAgIGxldCB7IFByZWRpY3QsIEVuY29kZSwgRGVjb2RlIH0gPSBpbnB1dDtcbiAgICAgICAgICAgIGxldCBpbmZlciA9IHt9O1xuICAgICAgICAgICAgY29uc3QgTW9kZWwgPSBNb2RlbExlbnNlcygpO1xuICAgICAgICAgICAgaWYoUHJlZGljdCl7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coUHJlZGljdCk7XG4gICAgICAgICAgICAgICAgbGV0IGlucHV0VGVuc29yID0gVC50ZW5zb3IoUHJlZGljdCkuYXNUeXBlKCdmbG9hdDMyJykucmVzaGFwZShbMSwgLTFdKTtcbiAgICAgICAgICAgICAgICBpbnB1dFRlbnNvci5wcmludCgpO1xuICAgICAgICAgICAgICAgIGxldCBwcmVkaWN0VGVuc29yID0gTW9kZWwuUHJlZGljdChpbnB1dFRlbnNvcik7XG4gICAgICAgICAgICAgICAgaW5mZXIuUHJlZGljdCA9IGF3YWl0IHByZWRpY3RUZW5zb3IuZGF0YSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoRW5jb2RlKXtcbiAgICAgICAgICAgICAgICBsZXQgaW5wdXRUZW5zb3IgPSBULnRlbnNvcihFbmNvZGUpLmFzVHlwZSgnZmxvYXQzMicpLnJlc2hhcGUoWzEsIC0xXSk7XG4gICAgICAgICAgICAgICAgbGV0IGVuY29kZVRlbnNvciA9IE1vZGVsLkVuY29kZShpbnB1dFRlbnNvcik7XG4gICAgICAgICAgICAgICAgaW5mZXIuRW5jb2RlID0gYXdhaXQgZW5jb2RlVGVuc29yLmRhdGEoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKERlY29kZSl7XG4gICAgICAgICAgICAgICAgbGV0IGlucHV0VGVuc29yID0gVC50ZW5zb3IoRGVjb2RlKS5hc1R5cGUoJ2Zsb2F0MzInKS5yZXNoYXBlKFsxLCAtMV0pO1xuICAgICAgICAgICAgICAgIGxldCBkZWNvZGVUZW5zb3IgPSBNb2RlbC5FbmNvZGUoaW5wdXRUZW5zb3IpO1xuICAgICAgICAgICAgICAgIGluZmVyLkRlY29kZSA9IGF3YWl0IGRlY29kZVRlbnNvci5kYXRhKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gaW5mZXI7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgc2V0QnlDb25maWcocGlwZWxpbmVDb25maWcpe1xuICAgICAgICBpZihzdXBlci5zZXRCeUNvbmZpZyl7XG4gICAgICAgICAgICBzdXBlci5zZXRCeUNvbmZpZyhwaXBlbGluZUNvbmZpZyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5Mb2dnZXIuZ3JvdXBCZWdpbignc2V0IGRlcGxveW1lbnQgYnkgY29uZmlnJyk7XG4gICAgICAgIGNvbnN0IHsgRW1pdHRlciwgTGlzdGVuZXIgfSA9IHBpcGVsaW5lQ29uZmlnLkRlcGxveW1lbnQ7XG4gICAgICAgIHRoaXMuRGVwbG95bWVudC5FbWl0dGVyID0gRW1pdHRlcjtcbiAgICAgICAgdGhpcy5EZXBsb3ltZW50Lkxpc3RlbmVyID0gTGlzdGVuZXI7XG4gICAgICAgIHRoaXMuRGVwbG95bWVudC5JbmZlcmVuY2VyID0gdGhpcy5JbmZlcmVuY2VyO1xuICAgICAgICB0aGlzLkxvZ2dlci5ncm91cEVuZCgpO1xuICAgICAgICByZXR1cm4gcGlwZWxpbmVDb25maWc7XG4gICAgfVxuXG4gICAgYXN5bmMgZGVwbG95KCl7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLkRlcGxveW1lbnQuZGVwbG95KCk7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgRGVwbG95bWVudE1peGluczsiLCJpbXBvcnQgeyBGdW5jdG9yIH0gZnJvbSAnY2F1c2FsLW5ldC5jb3JlJztcbmV4cG9ydCBkZWZhdWx0IG5ldyBGdW5jdG9yKCk7IiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBjYXVzYWxOZXREZXBsb3ltZW50IH0gZnJvbSAnLi9jYXVzYWxOZXREZXBsb3ltZW50JztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRGVwbG95bWVudE1peGlucyB9IGZyb20gJy4vZGVwbG95bWVudC5taXhpbnMnOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF91dGlsc19fOyJdLCJzb3VyY2VSb290IjoiIn0=