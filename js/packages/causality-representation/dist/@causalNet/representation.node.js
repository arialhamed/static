(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("causal-net.core"), require("causal-net.memcache"), require("causal-net.storage"), require("causal-net.utils"));
	else if(typeof define === 'function' && define.amd)
		define(["causal-net.core", "causal-net.memcache", "causal-net.storage", "causal-net.utils"], factory);
	else if(typeof exports === 'object')
		exports["@causalNet/representation"] = factory(require("causal-net.core"), require("causal-net.memcache"), require("causal-net.storage"), require("causal-net.utils"));
	else
		root["@causalNet/representation"] = factory(root["causal-net.core"], root["causal-net.memcache"], root["causal-net.storage"], root["causal-net.utils"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_causal_net_core__, __WEBPACK_EXTERNAL_MODULE_causal_net_memcache__, __WEBPACK_EXTERNAL_MODULE_causal_net_storage__, __WEBPACK_EXTERNAL_MODULE_causal_net_utils__) {
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

/***/ "./src/Lookup/chunkLookup.mixins.js":
/*!******************************************!*\
  !*** ./src/Lookup/chunkLookup.mixins.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * This ChunkLookupMixins class provide mixins for chunk lookup that first look from the cached chunk then
 * fetch and cache new chunk
 * @class ChunkLookupMixins
 * @extends {  BaseWordEmbeddingClass } 
 */
const ChunkLookupMixins = BaseWordEmbeddingClass => class extends BaseWordEmbeddingClass {
  /**
   * Return the storage lookup function
   * @readonly
   */
  get ChunkLookUp() {
    const Storage = this.Storage;
    return chunkId => {
      return new Promise(async (resolve, reject) => {
        try {
          const ChunkPath = this.embeddingSavePath + chunkId;
          let chunkItem = await Storage.getItem(ChunkPath);
          let chunk = chunkItem[ChunkPath];
          resolve(JSON.parse(chunk));
        } catch (err) {
          resolve(null);
        }
      });
    };
  }
  /**
   * Update the storage lookup
   * @param { String|Number } chunkId - id in positive integer range
   * @param { Object } chunk - chunk object containing token keys and correponding vec value
   * @returns { String } - updated chunk path in storage
   */


  async updateChunkLookUp(chunkId, chunk) {
    const Storage = this.Storage;
    const UpdateChunkPath = this.embeddingSavePath + chunkId;
    return await Storage.setItem(UpdateChunkPath, chunk);
  }
  /**
   * Query chunk either read from file or fetch from remote server
   * @param { String|Number } chunkId - id in positive interger range
   * @returns { Object }  chunk object containing token keys and correponding vec value
   */


  async queryChunk(chunkId) {
    const ChunkUrl = `${this.baseLink}wordvec_chunk_${chunkId}.json`;
    return await this.query(ChunkUrl);
  }

};

/* harmony default export */ __webpack_exports__["default"] = (ChunkLookupMixins);

/***/ }),

/***/ "./src/Lookup/index.js":
/*!*****************************!*\
  !*** ./src/Lookup/index.js ***!
  \*****************************/
/*! exports provided: ChunkLookupMixins, TokenLookUpMixins */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chunkLookup_mixins__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chunkLookup.mixins */ "./src/Lookup/chunkLookup.mixins.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChunkLookupMixins", function() { return _chunkLookup_mixins__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _tokenLookup_mixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tokenLookup.mixins */ "./src/Lookup/tokenLookup.mixins.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TokenLookUpMixins", function() { return _tokenLookup_mixins__WEBPACK_IMPORTED_MODULE_1__["default"]; });




/***/ }),

/***/ "./src/Lookup/tokenLookup.mixins.js":
/*!******************************************!*\
  !*** ./src/Lookup/tokenLookup.mixins.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const TokenLookUpMixins = BaseWordEmbeddingClass => class extends BaseWordEmbeddingClass {
  get TokenLookUp() {
    const MemCache = this.MemCache;
    return token => {
      return new Promise(async (resolve, reject) => {
        try {
          let vec = await MemCache.getItem(this.embeddingSavePath + token);
          resolve(vec);
        } catch (err) {
          resolve(null);
        }
      });
    };
  }
  /**
   * Update token look up
   * @param { String } token - token 
   * @param { Array } vec - vector representation of token
   */


  async updateTokenLookUp(token, vec) {
    console.error('this is update');
    const MemCache = this.MemCache;
    await MemCache.setItem(this.embeddingSavePath + token, vec);
  }

};

/* harmony default export */ __webpack_exports__["default"] = (TokenLookUpMixins);

/***/ }),

/***/ "./src/causalNetEmbedding.js":
/*!***********************************!*\
  !*** ./src/causalNetEmbedding.js ***!
  \***********************************/
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
/* harmony import */ var causal_net_memcache__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! causal-net.memcache */ "causal-net.memcache");
/* harmony import */ var causal_net_memcache__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(causal_net_memcache__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordEmbedding_mixins__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wordEmbedding.mixins */ "./src/wordEmbedding.mixins.js");
/* harmony import */ var _Lookup_chunkLookup_mixins__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Lookup/chunkLookup.mixins */ "./src/Lookup/chunkLookup.mixins.js");
/* harmony import */ var _Lookup_tokenLookup_mixins__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Lookup/tokenLookup.mixins */ "./src/Lookup/tokenLookup.mixins.js");
/* harmony import */ var _vectorMetrics_mixins__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./vectorMetrics.mixins */ "./src/vectorMetrics.mixins.js");
/* harmony import */ var _functor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./functor */ "./src/functor.js");









/**
 * This CausalNetEmbedding provide methods for transform raw tokenized sentence into 
 * its single vector representation
 * mixWith:
 *         [   StorageMixins, 
 *             MemCacheMixins,
 *             TokenLookUpMixins,
 *             ChunkLookUpMixins,
 *             WordEmbeddingMixins ])}
 * @class CausalNetEmbedding
 * @extends  BaseTensor
 * @example
 * [EXAMPLE ../examples/causalNetEmbedding.babel.node.js]
 */

class CausalNetEmbedding extends causal_net_utils__WEBPACK_IMPORTED_MODULE_1__["platform"].mixWith(causal_net_core__WEBPACK_IMPORTED_MODULE_0__["Tensor"], [causal_net_storage__WEBPACK_IMPORTED_MODULE_2__["StorageMixins"], causal_net_memcache__WEBPACK_IMPORTED_MODULE_3__["MemCacheMixins"], _Lookup_tokenLookup_mixins__WEBPACK_IMPORTED_MODULE_6__["default"], _Lookup_chunkLookup_mixins__WEBPACK_IMPORTED_MODULE_5__["default"], _vectorMetrics_mixins__WEBPACK_IMPORTED_MODULE_7__["default"], _wordEmbedding_mixins__WEBPACK_IMPORTED_MODULE_4__["default"]]) {
  constructor(fetch, storage, cache, functor) {
    super();
    this.fetch = fetch;
    this.Storage = storage; //store configure

    this.MemCache = cache; //store chunks

    this.F = functor;
    this.R = this.F.CoreFunctor;
    this.embeddingSavePath = '/embedding/';
    this.embeddingDescriptionPath = this.embeddingSavePath + 'description.json';
  }
  /**
   * Return veczie in positive number
   *
   * @readonly
   * @memberof CausalNetEmbedding
   */


  get VecSize() {
    if (!this.vecsize) {
      throw Error('vecsize is not set');
    }

    return this.vecsize;
  }
  /**
   * Load configure of pretrained vector from either local folder or remote server. 
   * After connect, the result is cached for next time init.
   * @param { URL|FilePath } link - link to load
   * @param { boolean } [refresh=false] - force to discard local cache
   * @returns { Promise }
   * @memberof CausalNetEmbedding
   */


  async connect(link, refresh = false) {
    this.baseLink = link;
    return await this.getDescription(refresh);
  }
  /**
   * This method is called by connect
   * @private
   * @param {boolean} [forceFecth=false]
   * @returns
   * @memberof CausalNetEmbedding
   */


  async getDescription(forceFecth = false) {
    if (!this.description) {
      try {
        let descriptionItem = await this.Storage.getItem(this.embeddingDescriptionPath);
        this.description = JSON.parse(descriptionItem[this.embeddingDescriptionPath]);
      } catch (err) {
        this.logger.debug({
          'load description from storage': false
        });
        this.description = await this.queryDescription();
      }
    }

    if (forceFecth) {
      this.description = await this.queryDescription();
    }

    this.TokenChunkIdMapper = token => {
      return this.F.getIn([token], this.description.chunkLookUp, null);
    };

    this.vecsize = this.description.vecsize; //only set from here

    return this.description;
  }
  /**
   * fetch or read configure depends on provied link format
   * @private
   * @param {*} link
   * @returns
   * @memberof CausalNetEmbedding
   */


  async query(link) {
    if (link.startsWith('http')) {
      return await causal_net_utils__WEBPACK_IMPORTED_MODULE_1__["jsonUtils"].fetchJson(link);
    } else {
      return await causal_net_utils__WEBPACK_IMPORTED_MODULE_1__["jsonUtils"].readJSON(link);
    }
  }
  /**
   * query the description json 
   * @private
   * @returns { Object } description json object
   * @memberof CausalNetEmbedding
   */


  async queryDescription() {
    const DescriptionLink = this.baseLink + 'wordvec.description.json';
    this.logger.debug({
      DescriptionLink
    });
    var description = this.query(DescriptionLink);
    await this.Storage.setItem(this.embeddingDescriptionPath, JSON.stringify(description));
    this.description = description;
    return this.description;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new CausalNetEmbedding(causal_net_utils__WEBPACK_IMPORTED_MODULE_1__["fetch"], causal_net_storage__WEBPACK_IMPORTED_MODULE_2__["indexDBStorage"], causal_net_memcache__WEBPACK_IMPORTED_MODULE_3__["memDownCache"], _functor__WEBPACK_IMPORTED_MODULE_8__["default"]));

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
/* harmony import */ var _wordEmbeddingFunctor_mixins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wordEmbeddingFunctor.mixins */ "./src/wordEmbeddingFunctor.mixins.js");



/**
 * This Function class provides methods for common used ultilities function
 * @export
 * @class Function
 * @extends BaseFunctor
 */

class Functor extends causal_net_utils__WEBPACK_IMPORTED_MODULE_1__["platform"].mixWith(causal_net_core__WEBPACK_IMPORTED_MODULE_0__["Functor"], [_wordEmbeddingFunctor_mixins__WEBPACK_IMPORTED_MODULE_2__["default"]]) {
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
/*! exports provided: RepresentationMixins, causalNetEmbedding, universalEmbedding, WordEmbeddingMixins, ChunkLookupMixins, TokenLookUpMixins, WordEmbeddingFunctorMixins */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _representation_mixins__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./representation.mixins */ "./src/representation.mixins.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RepresentationMixins", function() { return _representation_mixins__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _causalNetEmbedding__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./causalNetEmbedding */ "./src/causalNetEmbedding.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "causalNetEmbedding", function() { return _causalNetEmbedding__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _universalEmbedding__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./universalEmbedding */ "./src/universalEmbedding.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "universalEmbedding", function() { return _universalEmbedding__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _wordEmbedding_mixins__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wordEmbedding.mixins */ "./src/wordEmbedding.mixins.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WordEmbeddingMixins", function() { return _wordEmbedding_mixins__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _Lookup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Lookup */ "./src/Lookup/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChunkLookupMixins", function() { return _Lookup__WEBPACK_IMPORTED_MODULE_4__["ChunkLookupMixins"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TokenLookUpMixins", function() { return _Lookup__WEBPACK_IMPORTED_MODULE_4__["TokenLookUpMixins"]; });

/* harmony import */ var _wordEmbeddingFunctor_mixins__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./wordEmbeddingFunctor.mixins */ "./src/wordEmbeddingFunctor.mixins.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WordEmbeddingFunctorMixins", function() { return _wordEmbeddingFunctor_mixins__WEBPACK_IMPORTED_MODULE_5__["default"]; });








/***/ }),

/***/ "./src/representation.mixins.js":
/*!**************************************!*\
  !*** ./src/representation.mixins.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var causal_net_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! causal-net.core */ "causal-net.core");
/* harmony import */ var causal_net_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(causal_net_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! causal-net.utils */ "causal-net.utils");
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(causal_net_utils__WEBPACK_IMPORTED_MODULE_1__);


/**
 * This mixin class provides attributes: **Representation**.
 * @class RepresentationMixins
 * @extends  BasePipelineClass
 * @example
 * [EXAMPLE ../examples/embeddingMixins.babel.node.js]
 */

const RepresentationMixins = BasePipelineClass => class extends BasePipelineClass {
  /**
   * Return Embedding instance
   *
   * @readonly
   * @memberof RepresentationMixins
   */
  get Representation() {
    if (!this.representation) {
      throw Error('representation is not set');
    }

    return this.representation;
  }

  set Representation(representation) {
    causal_net_utils__WEBPACK_IMPORTED_MODULE_1__["assert"].beInstanceOf(representation, causal_net_core__WEBPACK_IMPORTED_MODULE_0__["Tensor"]);
    this.representation = representation;
  }
  /**
   * Load configure of pretrained vector from either local folder or remote server. 
   * After connect, the result is cached for next time init.
   * @param { URL|FilePath } link - link to load
   * @param { boolean } [refresh=false] - force to discard local cache
   * @returns { Promise }
   * @memberof RepresentationMixins
   */


  async connect() {
    if (super.connect) {
      super.connect();
    }

    let configureLink = this.embeddingConfig;
    this.logger.log(`representation connect to ${configureLink}`);
    await this.Representation.connect(configureLink);
  }
  /**
   * set embedding for pipeline
   * @param { Object } netConfig - contain Embedding instance and Embedding configure
   * @memberof RepresentationMixins
   */


  setRepresentationByConfig(netConfig) {
    let {
      EmbeddingConfig,
      Embedding
    } = netConfig.Representation;
    causal_net_utils__WEBPACK_IMPORTED_MODULE_1__["assert"].beInstanceOf(EmbeddingConfig, String);
    this.Representation = Embedding;
    this.embeddingConfig = EmbeddingConfig;
  }

};

/* harmony default export */ __webpack_exports__["default"] = (RepresentationMixins);

/***/ }),

/***/ "./src/universalEmbedding.js":
/*!***********************************!*\
  !*** ./src/universalEmbedding.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! causal-net.utils */ "causal-net.utils");
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(causal_net_utils__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var causal_net_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! causal-net.core */ "causal-net.core");
/* harmony import */ var causal_net_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(causal_net_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _functor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functor */ "./src/functor.js");
/* harmony import */ var _vectorMetrics_mixins__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vectorMetrics.mixins */ "./src/vectorMetrics.mixins.js");




/**
 * This UniversalEmbedding provide methods for transform sentences into 
 * its single vector representation 
 * based on [use](https://github.com/tensorflow/tfjs-models/tree/master/universal-sentence-encoder)
 * 
 * @class UniversalEmbedding
 * @extends {Tensor}
 * @example
 * [EXAMPLE ../examples/universalEmbedding.babel.js]
 */

class UniversalEmbedding extends causal_net_utils__WEBPACK_IMPORTED_MODULE_0__["platform"].mixWith(causal_net_core__WEBPACK_IMPORTED_MODULE_1__["Tensor"], [_vectorMetrics_mixins__WEBPACK_IMPORTED_MODULE_3__["default"]]) {
  constructor(functor) {
    super();
    /**
     * @private { TensorModel } 
     */

    this.model = null;
    this.f = functor;
    this.R = this.f.CoreFunctor;
    this.vecSize = 512;
  }

  async connect(link) {
    this.model = await this.T.loadGraphModel(link);
    return this;
  }

  async sentenceEncode(sentences, asTensor = true) {
    if (!this.model) {
      throw Error(`model is not connect`);
    }

    const T = this.T; //only one sentence

    let embeddings = [];

    for (let tokenIdxs of sentences) {
      let idxs = tokenIdxs.map((t, i) => [0, i]);
      let indices = T.tensor(idxs, [tokenIdxs.length, 2], 'int32');
      let values = T.tensor(tokenIdxs, [tokenIdxs.length], 'int32');
      embeddings.push((await this.model.executeAsync({
        indices,
        values
      })));
    }

    let sentTensor = T.stack(embeddings);

    if (asTensor) {
      return sentTensor;
    } else {
      let vec = await sentTensor.data();
      sentTensor.dispose();
      return this.R.splitEvery(this.vecSize, vec);
    }
  }

  async transform(tokenIdxs) {
    let [vec] = await this.sentenceEncode([tokenIdxs], false);
    return Array.from(vec);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new UniversalEmbedding(_functor__WEBPACK_IMPORTED_MODULE_2__["default"]));

/***/ }),

/***/ "./src/vectorMetrics.mixins.js":
/*!*************************************!*\
  !*** ./src/vectorMetrics.mixins.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * This VectorMetricMixins class is provide methods for comparing vector representation of different sentences
 * @class VectorMetricMixins
 * @extends  BaseEmbeddingClass
 */
const VectorMetricMixins = BaseEmbeddingClass => class extends BaseEmbeddingClass {
  /**
   * return the eucleudian distance between two representation vectors
   * @returns { Array } vec
   */
  async encodeMatching(tokenIdx1, tokenIdx2) {
    let x = await this.sentenceEncode([tokenIdx1], true);
    x = x.reshape([-1]);
    let y = await this.sentenceEncode([tokenIdx2], true);
    y = y.reshape([-1]);
    return x.dot(y).div(x.norm().mul(y.norm()));
  }

};

/* harmony default export */ __webpack_exports__["default"] = (VectorMetricMixins);

/***/ }),

/***/ "./src/wordEmbedding.mixins.js":
/*!*************************************!*\
  !*** ./src/wordEmbedding.mixins.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "../../node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);


/**
 * This WordEmbeddingMixins class is provide methods for transforn sentences, tokens to vectors
 * @class CausalNetEmbedding
 * @extends  BaseEmbeddingClass
 */
const WordEmbeddingMixins = BaseEmbeddingClass => class extends BaseEmbeddingClass {
  /**
   * return default replacement for unknown vec. Currently it is set to zeros
   * @returns { Array } vec
   */
  unknowVec() {
    return this.f.zeroVec(this.VecSize);
  }
  /**
   * return the vectors of tokenized sentences
   * This function require sentence to be tokenized via preprocessing
   * @param { Array } tokens - array of string tokens of sentence
   * @returns { Tensor } encoded sentences
   */


  async sentenceEncode(sentences, asTensor = true) {
    const T = this.T;
    let encodedSentences = [];

    for (let tokens of sentences) {
      let vecs = await this.transform(tokens);
      let encode = await T.tensor(vecs).mean(0);
      encodedSentences.push(encode);
    }

    let sentTensor = T.stack(encodedSentences);

    if (asTensor) {
      return sentTensor;
    } else {
      let vecs = await sentTensor.data();
      return this.R.splitEvery(this.VecSize, vecs);
    }
  }
  /**
   * Transform tokenized sentences into tensor vectors
   * @param { Array } tokens - 2d array for token of sentences
   * @returns { Tensor } 2d tensor represent vectors of each input sentences
   * @example
   * let sentVec = await causalNetEmbedding.sentenceEncode([ ['this', 'is', 'test'] ]);
   */


  async transform(tokens) {
    const TokenLookUp = this.TokenLookUp,
          ChunkLookUp = this.ChunkLookUp;
    let vecs = [],
        missCacheTokens = [];

    for (let token of tokens) {
      let vec = await TokenLookUp(token);
      this.logger.debug({
        [token]: vec
      });

      if (vec === null) {
        missCacheTokens = [...missCacheTokens, token];
      }

      vecs = [...vecs, token];
    }

    if (missCacheTokens.length === 0) {
      return vecs;
    }

    let {
      tokenChunkIds,
      chunkIds
    } = this.F.mapTokenToChunkIds(missCacheTokens, this.TokenChunkIdMapper);
    this.logger.debug({
      tokenChunkIds,
      chunkIds
    });
    let masterchunk = {};

    for (let chunkId of chunkIds) {
      if (chunkId !== null) {
        //not in chunk
        console.log('lookup');
        let chunk = await ChunkLookUp(chunkId);

        if (chunk === null) {
          chunk = await this.queryChunk(chunkId);
          await this.updateChunkLookUp(chunkId, chunk);
        }

        masterchunk = _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, masterchunk, chunk);
      }
    }

    let finalVecs = vecs.reduce((finalVecs, vec) => {
      if (typeof vec === "string") {
        let _vec = masterchunk[vec];

        if (_vec === undefined) {
          _vec = this.unknowVec();
        }

        finalVecs.push(_vec);
      } else {
        finalVecs.push(vec);
      }

      return finalVecs;
    }, []);
    return finalVecs;
  }

};

/* harmony default export */ __webpack_exports__["default"] = (WordEmbeddingMixins);

/***/ }),

/***/ "./src/wordEmbeddingFunctor.mixins.js":
/*!********************************************!*\
  !*** ./src/wordEmbeddingFunctor.mixins.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const WordEmbeddingFunctorMixins = BaseFunctionClass => class extends BaseFunctionClass {
  /**
   *
   * @param { Array } tokens - list of tokens to find coresponding ids
   * @param { Function } mapper - 
   * @returns 
   */
  mapTokenToChunkIds(tokens, mapper) {
    const R = this.R;
    const TokenChunkIdMapper = mapper;
    let tokenChunkMap = tokens.map(t => {
      let chunkId = TokenChunkIdMapper(t);
      return [[t, chunkId], chunkId];
    });
    let [tokenChunkIds, _chunkIds] = this.unzip(tokenChunkMap);
    let chunkIds = R.uniq(_chunkIds);
    console.log({
      chunkIds,
      tokenChunkIds
    });
    return {
      tokenChunkIds,
      chunkIds
    };
  }
  /**
   * return zero vector given the vec size
   * @param { Number } vecSize - positive integer indicates vector length
   * @returns { Array } zero vector
   */


  zeroVec(vecSize) {
    return this.R.map(() => 0, this.R.range(0, vecSize));
  }

};

/* harmony default export */ __webpack_exports__["default"] = (WordEmbeddingFunctorMixins);

/***/ }),

/***/ "causal-net.core":
/*!**********************************!*\
  !*** external "causal-net.core" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_causal_net_core__;

/***/ }),

/***/ "causal-net.memcache":
/*!**************************************!*\
  !*** external "causal-net.memcache" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_causal_net_memcache__;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3JlcHJlc2VudGF0aW9uL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3JlcHJlc2VudGF0aW9uL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0BjYXVzYWxOZXQvcmVwcmVzZW50YXRpb24vL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3JlcHJlc2VudGF0aW9uLy9ob21lL2h1eW5obmd1eWVuL2dpdGh1Yi9jYXVzYWxpdHkvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0U3ByZWFkLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcmVwcmVzZW50YXRpb24vLi9zcmMvTG9va3VwL2NodW5rTG9va3VwLm1peGlucy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3JlcHJlc2VudGF0aW9uLy4vc3JjL0xvb2t1cC9pbmRleC5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3JlcHJlc2VudGF0aW9uLy4vc3JjL0xvb2t1cC90b2tlbkxvb2t1cC5taXhpbnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9yZXByZXNlbnRhdGlvbi8uL3NyYy9jYXVzYWxOZXRFbWJlZGRpbmcuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9yZXByZXNlbnRhdGlvbi8uL3NyYy9mdW5jdG9yLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcmVwcmVzZW50YXRpb24vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9yZXByZXNlbnRhdGlvbi8uL3NyYy9yZXByZXNlbnRhdGlvbi5taXhpbnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9yZXByZXNlbnRhdGlvbi8uL3NyYy91bml2ZXJzYWxFbWJlZGRpbmcuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9yZXByZXNlbnRhdGlvbi8uL3NyYy92ZWN0b3JNZXRyaWNzLm1peGlucy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3JlcHJlc2VudGF0aW9uLy4vc3JjL3dvcmRFbWJlZGRpbmcubWl4aW5zLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcmVwcmVzZW50YXRpb24vLi9zcmMvd29yZEVtYmVkZGluZ0Z1bmN0b3IubWl4aW5zLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcmVwcmVzZW50YXRpb24vZXh0ZXJuYWwgXCJjYXVzYWwtbmV0LmNvcmVcIiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3JlcHJlc2VudGF0aW9uL2V4dGVybmFsIFwiY2F1c2FsLW5ldC5tZW1jYWNoZVwiIiwid2VicGFjazovL0BjYXVzYWxOZXQvcmVwcmVzZW50YXRpb24vZXh0ZXJuYWwgXCJjYXVzYWwtbmV0LnN0b3JhZ2VcIiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3JlcHJlc2VudGF0aW9uL2V4dGVybmFsIFwiY2F1c2FsLW5ldC51dGlsc1wiIl0sIm5hbWVzIjpbIkNodW5rTG9va3VwTWl4aW5zIiwiQmFzZVdvcmRFbWJlZGRpbmdDbGFzcyIsIkNodW5rTG9va1VwIiwiU3RvcmFnZSIsImNodW5rSWQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsIkNodW5rUGF0aCIsImVtYmVkZGluZ1NhdmVQYXRoIiwiY2h1bmtJdGVtIiwiZ2V0SXRlbSIsImNodW5rIiwiSlNPTiIsInBhcnNlIiwiZXJyIiwidXBkYXRlQ2h1bmtMb29rVXAiLCJVcGRhdGVDaHVua1BhdGgiLCJzZXRJdGVtIiwicXVlcnlDaHVuayIsIkNodW5rVXJsIiwiYmFzZUxpbmsiLCJxdWVyeSIsIlRva2VuTG9va1VwTWl4aW5zIiwiVG9rZW5Mb29rVXAiLCJNZW1DYWNoZSIsInRva2VuIiwidmVjIiwidXBkYXRlVG9rZW5Mb29rVXAiLCJjb25zb2xlIiwiZXJyb3IiLCJDYXVzYWxOZXRFbWJlZGRpbmciLCJwbGF0Zm9ybSIsIm1peFdpdGgiLCJCYXNlVGVuc29yIiwiU3RvcmFnZU1peGlucyIsIk1lbUNhY2hlTWl4aW5zIiwiQ2h1bmtMb29rVXBNaXhpbnMiLCJWZWN0b3JNZXRyaWNNaXhpbnMiLCJXb3JkRW1iZWRkaW5nTWl4aW5zIiwiY29uc3RydWN0b3IiLCJmZXRjaCIsInN0b3JhZ2UiLCJjYWNoZSIsImZ1bmN0b3IiLCJGIiwiUiIsIkNvcmVGdW5jdG9yIiwiZW1iZWRkaW5nRGVzY3JpcHRpb25QYXRoIiwiVmVjU2l6ZSIsInZlY3NpemUiLCJFcnJvciIsImNvbm5lY3QiLCJsaW5rIiwicmVmcmVzaCIsImdldERlc2NyaXB0aW9uIiwiZm9yY2VGZWN0aCIsImRlc2NyaXB0aW9uIiwiZGVzY3JpcHRpb25JdGVtIiwibG9nZ2VyIiwiZGVidWciLCJxdWVyeURlc2NyaXB0aW9uIiwiVG9rZW5DaHVua0lkTWFwcGVyIiwiZ2V0SW4iLCJjaHVua0xvb2tVcCIsInN0YXJ0c1dpdGgiLCJqc29uVXRpbHMiLCJmZXRjaEpzb24iLCJyZWFkSlNPTiIsIkRlc2NyaXB0aW9uTGluayIsInN0cmluZ2lmeSIsImluZGV4REJTdG9yYWdlIiwibWVtRG93bkNhY2hlIiwiRnVuY3RvciIsIkJhc2VGdW5jdG9yIiwiV29yZEVtYmVkZGluZ0Z1bmN0b3JNaXhpbnMiLCJSZXByZXNlbnRhdGlvbk1peGlucyIsIkJhc2VQaXBlbGluZUNsYXNzIiwiUmVwcmVzZW50YXRpb24iLCJyZXByZXNlbnRhdGlvbiIsImFzc2VydCIsImJlSW5zdGFuY2VPZiIsIlRlbnNvciIsImNvbmZpZ3VyZUxpbmsiLCJlbWJlZGRpbmdDb25maWciLCJsb2ciLCJzZXRSZXByZXNlbnRhdGlvbkJ5Q29uZmlnIiwibmV0Q29uZmlnIiwiRW1iZWRkaW5nQ29uZmlnIiwiRW1iZWRkaW5nIiwiU3RyaW5nIiwiVW5pdmVyc2FsRW1iZWRkaW5nIiwibW9kZWwiLCJmIiwidmVjU2l6ZSIsIlQiLCJsb2FkR3JhcGhNb2RlbCIsInNlbnRlbmNlRW5jb2RlIiwic2VudGVuY2VzIiwiYXNUZW5zb3IiLCJlbWJlZGRpbmdzIiwidG9rZW5JZHhzIiwiaWR4cyIsIm1hcCIsInQiLCJpIiwiaW5kaWNlcyIsInRlbnNvciIsImxlbmd0aCIsInZhbHVlcyIsInB1c2giLCJleGVjdXRlQXN5bmMiLCJzZW50VGVuc29yIiwic3RhY2siLCJkYXRhIiwiZGlzcG9zZSIsInNwbGl0RXZlcnkiLCJ0cmFuc2Zvcm0iLCJBcnJheSIsImZyb20iLCJCYXNlRW1iZWRkaW5nQ2xhc3MiLCJlbmNvZGVNYXRjaGluZyIsInRva2VuSWR4MSIsInRva2VuSWR4MiIsIngiLCJyZXNoYXBlIiwieSIsImRvdCIsImRpdiIsIm5vcm0iLCJtdWwiLCJ1bmtub3dWZWMiLCJ6ZXJvVmVjIiwiZW5jb2RlZFNlbnRlbmNlcyIsInRva2VucyIsInZlY3MiLCJlbmNvZGUiLCJtZWFuIiwibWlzc0NhY2hlVG9rZW5zIiwidG9rZW5DaHVua0lkcyIsImNodW5rSWRzIiwibWFwVG9rZW5Ub0NodW5rSWRzIiwibWFzdGVyY2h1bmsiLCJmaW5hbFZlY3MiLCJyZWR1Y2UiLCJfdmVjIiwidW5kZWZpbmVkIiwiQmFzZUZ1bmN0aW9uQ2xhc3MiLCJtYXBwZXIiLCJ0b2tlbkNodW5rTWFwIiwiX2NodW5rSWRzIiwidW56aXAiLCJ1bmlxIiwicmFuZ2UiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlE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LEVBQVM7QUFDWixXQUFPLEtBQUtoRCxDQUFMLENBQU95RCxHQUFQLENBQVcsTUFBSSxDQUFmLEVBQWlCLEtBQUt6RCxDQUFMLENBQU8yRyxLQUFQLENBQWEsQ0FBYixFQUFnQjNELE9BQWhCLENBQWpCLENBQVA7QUFDSDs7QUExQm9GLENBQXpGOztBQTRCZW5CLHlGQUFmLEU7Ozs7Ozs7Ozs7O0FDNUJBLDZEOzs7Ozs7Ozs7OztBQ0FBLGlFOzs7Ozs7Ozs7OztBQ0FBLGdFOzs7Ozs7Ozs7OztBQ0FBLDhEIiwiZmlsZSI6IkBjYXVzYWxOZXQvcmVwcmVzZW50YXRpb24ubm9kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImNhdXNhbC1uZXQuY29yZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQubWVtY2FjaGVcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnN0b3JhZ2VcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnV0aWxzXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcImNhdXNhbC1uZXQuY29yZVwiLCBcImNhdXNhbC1uZXQubWVtY2FjaGVcIiwgXCJjYXVzYWwtbmV0LnN0b3JhZ2VcIiwgXCJjYXVzYWwtbmV0LnV0aWxzXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkBjYXVzYWxOZXQvcmVwcmVzZW50YXRpb25cIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJjYXVzYWwtbmV0LmNvcmVcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0Lm1lbWNhY2hlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC5zdG9yYWdlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC51dGlsc1wiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiQGNhdXNhbE5ldC9yZXByZXNlbnRhdGlvblwiXSA9IGZhY3Rvcnkocm9vdFtcImNhdXNhbC1uZXQuY29yZVwiXSwgcm9vdFtcImNhdXNhbC1uZXQubWVtY2FjaGVcIl0sIHJvb3RbXCJjYXVzYWwtbmV0LnN0b3JhZ2VcIl0sIHJvb3RbXCJjYXVzYWwtbmV0LnV0aWxzXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9jb3JlX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9tZW1jYWNoZV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfc3RvcmFnZV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfdXRpbHNfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2RlZmluZVByb3BlcnR5OyIsInZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoXCIuL2RlZmluZVByb3BlcnR5XCIpO1xuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9O1xuICAgIHZhciBvd25LZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcblxuICAgIGlmICh0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgb3duS2V5cyA9IG93bktleXMuY29uY2F0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKS5maWx0ZXIoZnVuY3Rpb24gKHN5bSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIHN5bSkuZW51bWVyYWJsZTtcbiAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBvd25LZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX29iamVjdFNwcmVhZDsiLCIvKipcbiAqIFRoaXMgQ2h1bmtMb29rdXBNaXhpbnMgY2xhc3MgcHJvdmlkZSBtaXhpbnMgZm9yIGNodW5rIGxvb2t1cCB0aGF0IGZpcnN0IGxvb2sgZnJvbSB0aGUgY2FjaGVkIGNodW5rIHRoZW5cbiAqIGZldGNoIGFuZCBjYWNoZSBuZXcgY2h1bmtcbiAqIEBjbGFzcyBDaHVua0xvb2t1cE1peGluc1xuICogQGV4dGVuZHMgeyAgQmFzZVdvcmRFbWJlZGRpbmdDbGFzcyB9IFxuICovXG5jb25zdCBDaHVua0xvb2t1cE1peGlucyA9ICggQmFzZVdvcmRFbWJlZGRpbmdDbGFzcyApPT4gY2xhc3MgZXh0ZW5kcyBCYXNlV29yZEVtYmVkZGluZ0NsYXNzeyBcbiAgICBcbiAgICAvKipcbiAgICAgKiBSZXR1cm4gdGhlIHN0b3JhZ2UgbG9va3VwIGZ1bmN0aW9uXG4gICAgICogQHJlYWRvbmx5XG4gICAgICovXG4gICAgZ2V0IENodW5rTG9va1VwKCl7XG4gICAgICAgIGNvbnN0IFN0b3JhZ2UgPSB0aGlzLlN0b3JhZ2U7XG4gICAgICAgIHJldHVybiAoY2h1bmtJZCk9PntcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSwgcmVqZWN0KT0+e1xuICAgICAgICAgICAgICAgIHRyeXtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgQ2h1bmtQYXRoID0gdGhpcy5lbWJlZGRpbmdTYXZlUGF0aCArIGNodW5rSWQ7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjaHVua0l0ZW0gPSBhd2FpdCBTdG9yYWdlLmdldEl0ZW0oQ2h1bmtQYXRoKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNodW5rID0gY2h1bmtJdGVtW0NodW5rUGF0aF07XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoSlNPTi5wYXJzZShjaHVuaykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaChlcnIpe1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG51bGwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgIH1cbiAgIC8qKlxuICAgICogVXBkYXRlIHRoZSBzdG9yYWdlIGxvb2t1cFxuICAgICogQHBhcmFtIHsgU3RyaW5nfE51bWJlciB9IGNodW5rSWQgLSBpZCBpbiBwb3NpdGl2ZSBpbnRlZ2VyIHJhbmdlXG4gICAgKiBAcGFyYW0geyBPYmplY3QgfSBjaHVuayAtIGNodW5rIG9iamVjdCBjb250YWluaW5nIHRva2VuIGtleXMgYW5kIGNvcnJlcG9uZGluZyB2ZWMgdmFsdWVcbiAgICAqIEByZXR1cm5zIHsgU3RyaW5nIH0gLSB1cGRhdGVkIGNodW5rIHBhdGggaW4gc3RvcmFnZVxuICAgICovXG4gICBhc3luYyB1cGRhdGVDaHVua0xvb2tVcChjaHVua0lkLCBjaHVuayl7XG4gICAgICAgIGNvbnN0IFN0b3JhZ2UgPSB0aGlzLlN0b3JhZ2U7XG4gICAgICAgIGNvbnN0IFVwZGF0ZUNodW5rUGF0aCA9IHRoaXMuZW1iZWRkaW5nU2F2ZVBhdGggKyBjaHVua0lkO1xuICAgICAgICByZXR1cm4gYXdhaXQgU3RvcmFnZS5zZXRJdGVtKFVwZGF0ZUNodW5rUGF0aCwgY2h1bmspO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBRdWVyeSBjaHVuayBlaXRoZXIgcmVhZCBmcm9tIGZpbGUgb3IgZmV0Y2ggZnJvbSByZW1vdGUgc2VydmVyXG4gICAgICogQHBhcmFtIHsgU3RyaW5nfE51bWJlciB9IGNodW5rSWQgLSBpZCBpbiBwb3NpdGl2ZSBpbnRlcmdlciByYW5nZVxuICAgICAqIEByZXR1cm5zIHsgT2JqZWN0IH0gIGNodW5rIG9iamVjdCBjb250YWluaW5nIHRva2VuIGtleXMgYW5kIGNvcnJlcG9uZGluZyB2ZWMgdmFsdWVcbiAgICAgKi9cbiAgICBhc3luYyBxdWVyeUNodW5rKGNodW5rSWQpe1xuICAgICAgICBjb25zdCBDaHVua1VybCA9IGAke3RoaXMuYmFzZUxpbmt9d29yZHZlY19jaHVua18ke2NodW5rSWR9Lmpzb25gO1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5xdWVyeShDaHVua1VybCk7XG4gICAgfVxuICAgXG59O1xuZXhwb3J0IGRlZmF1bHQgQ2h1bmtMb29rdXBNaXhpbnM7IiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBDaHVua0xvb2t1cE1peGlucyB9IGZyb20gJy4vY2h1bmtMb29rdXAubWl4aW5zJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVG9rZW5Mb29rVXBNaXhpbnMgfSBmcm9tICcuL3Rva2VuTG9va3VwLm1peGlucyc7IiwiY29uc3QgVG9rZW5Mb29rVXBNaXhpbnMgPSAoQmFzZVdvcmRFbWJlZGRpbmdDbGFzcyk9PiBjbGFzcyBleHRlbmRzIEJhc2VXb3JkRW1iZWRkaW5nQ2xhc3N7IFxuICAgIGdldCBUb2tlbkxvb2tVcCgpe1xuICAgICAgICBjb25zdCBNZW1DYWNoZSA9IHRoaXMuTWVtQ2FjaGU7XG4gICAgICAgIHJldHVybiAodG9rZW4pPT57XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgKHJlc29sdmUsIHJlamVjdCk9PntcbiAgICAgICAgICAgICAgICB0cnl7XG4gICAgICAgICAgICAgICAgICAgIGxldCB2ZWMgPSBhd2FpdCBNZW1DYWNoZS5nZXRJdGVtKHRoaXMuZW1iZWRkaW5nU2F2ZVBhdGggKyB0b2tlbik7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUodmVjKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2goZXJyKXtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShudWxsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVXBkYXRlIHRva2VuIGxvb2sgdXBcbiAgICAgKiBAcGFyYW0geyBTdHJpbmcgfSB0b2tlbiAtIHRva2VuIFxuICAgICAqIEBwYXJhbSB7IEFycmF5IH0gdmVjIC0gdmVjdG9yIHJlcHJlc2VudGF0aW9uIG9mIHRva2VuXG4gICAgICovXG4gICAgYXN5bmMgdXBkYXRlVG9rZW5Mb29rVXAodG9rZW4sIHZlYyl7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ3RoaXMgaXMgdXBkYXRlJyk7XG4gICAgICAgIGNvbnN0IE1lbUNhY2hlID0gdGhpcy5NZW1DYWNoZTtcbiAgICAgICAgYXdhaXQgTWVtQ2FjaGUuc2V0SXRlbSh0aGlzLmVtYmVkZGluZ1NhdmVQYXRoICsgdG9rZW4sIHZlYyk7XG4gICAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IFRva2VuTG9va1VwTWl4aW5zO1xuIiwiaW1wb3J0IHsgVGVuc29yIGFzIEJhc2VUZW5zb3IgfSBmcm9tICdjYXVzYWwtbmV0LmNvcmUnO1xuaW1wb3J0IHsgcGxhdGZvcm0sIGZldGNoLCBqc29uVXRpbHMgfSBmcm9tICdjYXVzYWwtbmV0LnV0aWxzJztcbmltcG9ydCB7IFN0b3JhZ2VNaXhpbnMsIGluZGV4REJTdG9yYWdlIH0gZnJvbSAnY2F1c2FsLW5ldC5zdG9yYWdlJztcbmltcG9ydCB7IE1lbUNhY2hlTWl4aW5zLCBtZW1Eb3duQ2FjaGUgfSBmcm9tICdjYXVzYWwtbmV0Lm1lbWNhY2hlJztcbmltcG9ydCB7IGRlZmF1bHQgYXMgV29yZEVtYmVkZGluZ01peGlucyB9IGZyb20gJy4vd29yZEVtYmVkZGluZy5taXhpbnMnO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBDaHVua0xvb2tVcE1peGlucyB9IGZyb20gJy4vTG9va3VwL2NodW5rTG9va3VwLm1peGlucyc7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIFRva2VuTG9va1VwTWl4aW5zIH0gZnJvbSAnLi9Mb29rdXAvdG9rZW5Mb29rdXAubWl4aW5zJztcbmltcG9ydCB7IGRlZmF1bHQgYXMgVmVjdG9yTWV0cmljTWl4aW5zIH0gZnJvbSAnLi92ZWN0b3JNZXRyaWNzLm1peGlucyc7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIGZ1bmN0b3IgfSBmcm9tICcuL2Z1bmN0b3InO1xuLyoqXG4gKiBUaGlzIENhdXNhbE5ldEVtYmVkZGluZyBwcm92aWRlIG1ldGhvZHMgZm9yIHRyYW5zZm9ybSByYXcgdG9rZW5pemVkIHNlbnRlbmNlIGludG8gXG4gKiBpdHMgc2luZ2xlIHZlY3RvciByZXByZXNlbnRhdGlvblxuICogbWl4V2l0aDpcbiAqICAgICAgICAgWyAgIFN0b3JhZ2VNaXhpbnMsIFxuICogICAgICAgICAgICAgTWVtQ2FjaGVNaXhpbnMsXG4gKiAgICAgICAgICAgICBUb2tlbkxvb2tVcE1peGlucyxcbiAqICAgICAgICAgICAgIENodW5rTG9va1VwTWl4aW5zLFxuICogICAgICAgICAgICAgV29yZEVtYmVkZGluZ01peGlucyBdKX1cbiAqIEBjbGFzcyBDYXVzYWxOZXRFbWJlZGRpbmdcbiAqIEBleHRlbmRzICBCYXNlVGVuc29yXG4gKiBAZXhhbXBsZVxuICogW0VYQU1QTEUgLi4vZXhhbXBsZXMvY2F1c2FsTmV0RW1iZWRkaW5nLmJhYmVsLm5vZGUuanNdXG4gKi9cbmNsYXNzIENhdXNhbE5ldEVtYmVkZGluZyBleHRlbmRzIHBsYXRmb3JtLm1peFdpdGgoQmFzZVRlbnNvciwgXG4gICAgICAgIFsgICBTdG9yYWdlTWl4aW5zLCBcbiAgICAgICAgICAgIE1lbUNhY2hlTWl4aW5zLFxuICAgICAgICAgICAgVG9rZW5Mb29rVXBNaXhpbnMsXG4gICAgICAgICAgICBDaHVua0xvb2tVcE1peGlucyxcbiAgICAgICAgICAgIFZlY3Rvck1ldHJpY01peGlucyxcbiAgICAgICAgICAgIFdvcmRFbWJlZGRpbmdNaXhpbnMgXSl7XG4gICAgY29uc3RydWN0b3IoZmV0Y2gsIHN0b3JhZ2UsIGNhY2hlLCBmdW5jdG9yKXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5mZXRjaCA9IGZldGNoO1xuICAgICAgICB0aGlzLlN0b3JhZ2UgPSBzdG9yYWdlOyAgIC8vc3RvcmUgY29uZmlndXJlXG4gICAgICAgIHRoaXMuTWVtQ2FjaGUgPSBjYWNoZTsgICAgLy9zdG9yZSBjaHVua3NcbiAgICAgICAgdGhpcy5GID0gZnVuY3RvcjtcbiAgICAgICAgdGhpcy5SID0gdGhpcy5GLkNvcmVGdW5jdG9yO1xuICAgICAgICB0aGlzLmVtYmVkZGluZ1NhdmVQYXRoID0gJy9lbWJlZGRpbmcvJztcbiAgICAgICAgdGhpcy5lbWJlZGRpbmdEZXNjcmlwdGlvblBhdGggPSB0aGlzLmVtYmVkZGluZ1NhdmVQYXRoICsgJ2Rlc2NyaXB0aW9uLmpzb24nO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm4gdmVjemllIGluIHBvc2l0aXZlIG51bWJlclxuICAgICAqXG4gICAgICogQHJlYWRvbmx5XG4gICAgICogQG1lbWJlcm9mIENhdXNhbE5ldEVtYmVkZGluZ1xuICAgICAqL1xuICAgIGdldCBWZWNTaXplKCl7XG4gICAgICAgIGlmKCF0aGlzLnZlY3NpemUpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ3ZlY3NpemUgaXMgbm90IHNldCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnZlY3NpemU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIExvYWQgY29uZmlndXJlIG9mIHByZXRyYWluZWQgdmVjdG9yIGZyb20gZWl0aGVyIGxvY2FsIGZvbGRlciBvciByZW1vdGUgc2VydmVyLiBcbiAgICAgKiBBZnRlciBjb25uZWN0LCB0aGUgcmVzdWx0IGlzIGNhY2hlZCBmb3IgbmV4dCB0aW1lIGluaXQuXG4gICAgICogQHBhcmFtIHsgVVJMfEZpbGVQYXRoIH0gbGluayAtIGxpbmsgdG8gbG9hZFxuICAgICAqIEBwYXJhbSB7IGJvb2xlYW4gfSBbcmVmcmVzaD1mYWxzZV0gLSBmb3JjZSB0byBkaXNjYXJkIGxvY2FsIGNhY2hlXG4gICAgICogQHJldHVybnMgeyBQcm9taXNlIH1cbiAgICAgKiBAbWVtYmVyb2YgQ2F1c2FsTmV0RW1iZWRkaW5nXG4gICAgICovXG4gICAgYXN5bmMgY29ubmVjdChsaW5rLCByZWZyZXNoPWZhbHNlKXtcbiAgICAgICAgdGhpcy5iYXNlTGluayA9IGxpbms7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmdldERlc2NyaXB0aW9uKHJlZnJlc2gpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgYnkgY29ubmVjdFxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbZm9yY2VGZWN0aD1mYWxzZV1cbiAgICAgKiBAcmV0dXJuc1xuICAgICAqIEBtZW1iZXJvZiBDYXVzYWxOZXRFbWJlZGRpbmdcbiAgICAgKi9cbiAgICBhc3luYyBnZXREZXNjcmlwdGlvbihmb3JjZUZlY3RoPWZhbHNlKXtcbiAgICAgICAgaWYoIXRoaXMuZGVzY3JpcHRpb24pe1xuICAgICAgICAgICAgdHJ5e1xuICAgICAgICAgICAgICAgIGxldCBkZXNjcmlwdGlvbkl0ZW0gPSBhd2FpdCB0aGlzLlN0b3JhZ2UuZ2V0SXRlbSh0aGlzLmVtYmVkZGluZ0Rlc2NyaXB0aW9uUGF0aCk7XG4gICAgICAgICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IEpTT04ucGFyc2UoZGVzY3JpcHRpb25JdGVtW3RoaXMuZW1iZWRkaW5nRGVzY3JpcHRpb25QYXRoXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaChlcnIpe1xuICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKHsnbG9hZCBkZXNjcmlwdGlvbiBmcm9tIHN0b3JhZ2UnOiBmYWxzZX0pO1xuICAgICAgICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBhd2FpdCB0aGlzLnF1ZXJ5RGVzY3JpcHRpb24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZihmb3JjZUZlY3RoKXtcbiAgICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBhd2FpdCB0aGlzLnF1ZXJ5RGVzY3JpcHRpb24oKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLlRva2VuQ2h1bmtJZE1hcHBlciA9ICh0b2tlbik9PntcbiAgICAgICAgICAgIHJldHVybiB0aGlzLkYuZ2V0SW4oW3Rva2VuXSwgdGhpcy5kZXNjcmlwdGlvbi5jaHVua0xvb2tVcCwgbnVsbCk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMudmVjc2l6ZSA9IHRoaXMuZGVzY3JpcHRpb24udmVjc2l6ZTsvL29ubHkgc2V0IGZyb20gaGVyZVxuICAgICAgICByZXR1cm4gdGhpcy5kZXNjcmlwdGlvbjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogZmV0Y2ggb3IgcmVhZCBjb25maWd1cmUgZGVwZW5kcyBvbiBwcm92aWVkIGxpbmsgZm9ybWF0XG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0geyp9IGxpbmtcbiAgICAgKiBAcmV0dXJuc1xuICAgICAqIEBtZW1iZXJvZiBDYXVzYWxOZXRFbWJlZGRpbmdcbiAgICAgKi9cbiAgICBhc3luYyBxdWVyeShsaW5rKXtcbiAgICAgICAgaWYobGluay5zdGFydHNXaXRoKCdodHRwJykpe1xuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGpzb25VdGlscy5mZXRjaEpzb24obGluayk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCBqc29uVXRpbHMucmVhZEpTT04obGluayk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogcXVlcnkgdGhlIGRlc2NyaXB0aW9uIGpzb24gXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcmV0dXJucyB7IE9iamVjdCB9IGRlc2NyaXB0aW9uIGpzb24gb2JqZWN0XG4gICAgICogQG1lbWJlcm9mIENhdXNhbE5ldEVtYmVkZGluZ1xuICAgICAqL1xuICAgIGFzeW5jIHF1ZXJ5RGVzY3JpcHRpb24oKXtcbiAgICAgICAgY29uc3QgRGVzY3JpcHRpb25MaW5rID0gdGhpcy5iYXNlTGluayArICd3b3JkdmVjLmRlc2NyaXB0aW9uLmpzb24nO1xuICAgICAgICB0aGlzLmxvZ2dlci5kZWJ1Zyh7IERlc2NyaXB0aW9uTGluayB9KTtcbiAgICAgICAgdmFyIGRlc2NyaXB0aW9uID0gdGhpcy5xdWVyeShEZXNjcmlwdGlvbkxpbmspO1xuICAgICAgICBhd2FpdCB0aGlzLlN0b3JhZ2Uuc2V0SXRlbSh0aGlzLmVtYmVkZGluZ0Rlc2NyaXB0aW9uUGF0aCwgSlNPTi5zdHJpbmdpZnkoZGVzY3JpcHRpb24pKTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICByZXR1cm4gdGhpcy5kZXNjcmlwdGlvbjtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBDYXVzYWxOZXRFbWJlZGRpbmcoZmV0Y2gsIGluZGV4REJTdG9yYWdlLCBtZW1Eb3duQ2FjaGUsIGZ1bmN0b3IpOyIsImltcG9ydCB7IEZ1bmN0b3IgYXMgQmFzZUZ1bmN0b3IgfSBmcm9tICdjYXVzYWwtbmV0LmNvcmUnO1xuaW1wb3J0IHsgcGxhdGZvcm0gfSBmcm9tICdjYXVzYWwtbmV0LnV0aWxzJztcbmltcG9ydCB7IGRlZmF1bHQgYXMgV29yZEVtYmVkZGluZ0Z1bmN0b3JNaXhpbnMgfSBmcm9tICcuL3dvcmRFbWJlZGRpbmdGdW5jdG9yLm1peGlucyc7XG4vKipcbiAqIFRoaXMgRnVuY3Rpb24gY2xhc3MgcHJvdmlkZXMgbWV0aG9kcyBmb3IgY29tbW9uIHVzZWQgdWx0aWxpdGllcyBmdW5jdGlvblxuICogQGV4cG9ydFxuICogQGNsYXNzIEZ1bmN0aW9uXG4gKiBAZXh0ZW5kcyBCYXNlRnVuY3RvclxuICovXG5cbmNsYXNzIEZ1bmN0b3IgZXh0ZW5kcyBwbGF0Zm9ybS5taXhXaXRoKEJhc2VGdW5jdG9yLCBcbiAgICAgICAgW1dvcmRFbWJlZGRpbmdGdW5jdG9yTWl4aW5zXSl7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBGdW5jdG9yKCk7IiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBSZXByZXNlbnRhdGlvbk1peGlucyB9IGZyb20gJy4vcmVwcmVzZW50YXRpb24ubWl4aW5zJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgY2F1c2FsTmV0RW1iZWRkaW5nIH0gZnJvbSAnLi9jYXVzYWxOZXRFbWJlZGRpbmcnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB1bml2ZXJzYWxFbWJlZGRpbmcgfSBmcm9tICcuL3VuaXZlcnNhbEVtYmVkZGluZyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFdvcmRFbWJlZGRpbmdNaXhpbnMgfSBmcm9tICcuL3dvcmRFbWJlZGRpbmcubWl4aW5zJztcbmV4cG9ydCB7IENodW5rTG9va3VwTWl4aW5zLCBUb2tlbkxvb2tVcE1peGlucyB9IGZyb20gJy4vTG9va3VwJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgV29yZEVtYmVkZGluZ0Z1bmN0b3JNaXhpbnMgfSBmcm9tICcuL3dvcmRFbWJlZGRpbmdGdW5jdG9yLm1peGlucyc7IiwiaW1wb3J0IHsgVGVuc29yIH0gZnJvbSAnY2F1c2FsLW5ldC5jb3JlJzsgXG5pbXBvcnQgeyBhc3NlcnQgfSBmcm9tICdjYXVzYWwtbmV0LnV0aWxzJztcbi8qKlxuICogVGhpcyBtaXhpbiBjbGFzcyBwcm92aWRlcyBhdHRyaWJ1dGVzOiAqKlJlcHJlc2VudGF0aW9uKiouXG4gKiBAY2xhc3MgUmVwcmVzZW50YXRpb25NaXhpbnNcbiAqIEBleHRlbmRzICBCYXNlUGlwZWxpbmVDbGFzc1xuICogQGV4YW1wbGVcbiAqIFtFWEFNUExFIC4uL2V4YW1wbGVzL2VtYmVkZGluZ01peGlucy5iYWJlbC5ub2RlLmpzXVxuICovXG5jb25zdCBSZXByZXNlbnRhdGlvbk1peGlucyA9IChCYXNlUGlwZWxpbmVDbGFzcyk9PiBjbGFzcyBleHRlbmRzIEJhc2VQaXBlbGluZUNsYXNzeyBcbiAgICAvKipcbiAgICAgKiBSZXR1cm4gRW1iZWRkaW5nIGluc3RhbmNlXG4gICAgICpcbiAgICAgKiBAcmVhZG9ubHlcbiAgICAgKiBAbWVtYmVyb2YgUmVwcmVzZW50YXRpb25NaXhpbnNcbiAgICAgKi9cbiAgICBnZXQgUmVwcmVzZW50YXRpb24oKXtcbiAgICAgICAgaWYoIXRoaXMucmVwcmVzZW50YXRpb24pe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ3JlcHJlc2VudGF0aW9uIGlzIG5vdCBzZXQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5yZXByZXNlbnRhdGlvbjtcbiAgICB9XG4gICAgXG4gICAgc2V0IFJlcHJlc2VudGF0aW9uKHJlcHJlc2VudGF0aW9uKXtcbiAgICAgICAgYXNzZXJ0LmJlSW5zdGFuY2VPZihyZXByZXNlbnRhdGlvbiwgVGVuc29yKTtcbiAgICAgICAgdGhpcy5yZXByZXNlbnRhdGlvbiA9IHJlcHJlc2VudGF0aW9uO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBMb2FkIGNvbmZpZ3VyZSBvZiBwcmV0cmFpbmVkIHZlY3RvciBmcm9tIGVpdGhlciBsb2NhbCBmb2xkZXIgb3IgcmVtb3RlIHNlcnZlci4gXG4gICAgICogQWZ0ZXIgY29ubmVjdCwgdGhlIHJlc3VsdCBpcyBjYWNoZWQgZm9yIG5leHQgdGltZSBpbml0LlxuICAgICAqIEBwYXJhbSB7IFVSTHxGaWxlUGF0aCB9IGxpbmsgLSBsaW5rIHRvIGxvYWRcbiAgICAgKiBAcGFyYW0geyBib29sZWFuIH0gW3JlZnJlc2g9ZmFsc2VdIC0gZm9yY2UgdG8gZGlzY2FyZCBsb2NhbCBjYWNoZVxuICAgICAqIEByZXR1cm5zIHsgUHJvbWlzZSB9XG4gICAgICogQG1lbWJlcm9mIFJlcHJlc2VudGF0aW9uTWl4aW5zXG4gICAgICovXG4gICAgYXN5bmMgY29ubmVjdCgpe1xuICAgICAgICBpZihzdXBlci5jb25uZWN0KXtcbiAgICAgICAgICAgIHN1cGVyLmNvbm5lY3QoKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgY29uZmlndXJlTGluayA9IHRoaXMuZW1iZWRkaW5nQ29uZmlnO1xuICAgICAgICB0aGlzLmxvZ2dlci5sb2coYHJlcHJlc2VudGF0aW9uIGNvbm5lY3QgdG8gJHtjb25maWd1cmVMaW5rfWApO1xuICAgICAgICBhd2FpdCB0aGlzLlJlcHJlc2VudGF0aW9uLmNvbm5lY3QoY29uZmlndXJlTGluayk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIHNldCBlbWJlZGRpbmcgZm9yIHBpcGVsaW5lXG4gICAgICogQHBhcmFtIHsgT2JqZWN0IH0gbmV0Q29uZmlnIC0gY29udGFpbiBFbWJlZGRpbmcgaW5zdGFuY2UgYW5kIEVtYmVkZGluZyBjb25maWd1cmVcbiAgICAgKiBAbWVtYmVyb2YgUmVwcmVzZW50YXRpb25NaXhpbnNcbiAgICAgKi9cbiAgICBzZXRSZXByZXNlbnRhdGlvbkJ5Q29uZmlnKG5ldENvbmZpZyl7XG4gICAgICAgIGxldCB7IEVtYmVkZGluZ0NvbmZpZywgRW1iZWRkaW5nIH0gPSBuZXRDb25maWcuUmVwcmVzZW50YXRpb247XG4gICAgICAgIGFzc2VydC5iZUluc3RhbmNlT2YoRW1iZWRkaW5nQ29uZmlnLCBTdHJpbmcpO1xuICAgICAgICB0aGlzLlJlcHJlc2VudGF0aW9uID0gRW1iZWRkaW5nO1xuICAgICAgICB0aGlzLmVtYmVkZGluZ0NvbmZpZyA9IEVtYmVkZGluZ0NvbmZpZztcbiAgICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgUmVwcmVzZW50YXRpb25NaXhpbnM7ICAgICIsImltcG9ydCB7IHBsYXRmb3JtLCBmZXRjaCB9IGZyb20gJ2NhdXNhbC1uZXQudXRpbHMnO1xuaW1wb3J0IHsgVGVuc29yIH0gZnJvbSAnY2F1c2FsLW5ldC5jb3JlJztcbmltcG9ydCB7IGRlZmF1bHQgYXMgZnVuY3RvciB9IGZyb20gJy4vZnVuY3Rvcic7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIFZlY3Rvck1ldHJpY01peGlucyB9IGZyb20gJy4vdmVjdG9yTWV0cmljcy5taXhpbnMnO1xuXG4vKipcbiAqIFRoaXMgVW5pdmVyc2FsRW1iZWRkaW5nIHByb3ZpZGUgbWV0aG9kcyBmb3IgdHJhbnNmb3JtIHNlbnRlbmNlcyBpbnRvIFxuICogaXRzIHNpbmdsZSB2ZWN0b3IgcmVwcmVzZW50YXRpb24gXG4gKiBiYXNlZCBvbiBbdXNlXShodHRwczovL2dpdGh1Yi5jb20vdGVuc29yZmxvdy90ZmpzLW1vZGVscy90cmVlL21hc3Rlci91bml2ZXJzYWwtc2VudGVuY2UtZW5jb2RlcilcbiAqIFxuICogQGNsYXNzIFVuaXZlcnNhbEVtYmVkZGluZ1xuICogQGV4dGVuZHMge1RlbnNvcn1cbiAqIEBleGFtcGxlXG4gKiBbRVhBTVBMRSAuLi9leGFtcGxlcy91bml2ZXJzYWxFbWJlZGRpbmcuYmFiZWwuanNdXG4gKi9cbmNsYXNzIFVuaXZlcnNhbEVtYmVkZGluZyBleHRlbmRzIHBsYXRmb3JtLm1peFdpdGgoVGVuc29yLCBcbiAgICBbIFZlY3Rvck1ldHJpY01peGlucyBdKXtcbiAgICBcbiAgICBjb25zdHJ1Y3RvcihmdW5jdG9yKXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwcml2YXRlIHsgVGVuc29yTW9kZWwgfSBcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMubW9kZWwgPSBudWxsO1xuICAgICAgICB0aGlzLmYgPSBmdW5jdG9yO1xuICAgICAgICB0aGlzLlIgPSB0aGlzLmYuQ29yZUZ1bmN0b3I7XG4gICAgICAgIHRoaXMudmVjU2l6ZSA9IDUxMjtcbiAgICB9XG4gICAgXG4gICAgYXN5bmMgY29ubmVjdChsaW5rKXtcbiAgICAgICAgdGhpcy5tb2RlbCA9IGF3YWl0IHRoaXMuVC5sb2FkR3JhcGhNb2RlbChsaW5rKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgYXN5bmMgc2VudGVuY2VFbmNvZGUoc2VudGVuY2VzLCBhc1RlbnNvcj10cnVlKXtcbiAgICAgICAgaWYoIXRoaXMubW9kZWwpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoYG1vZGVsIGlzIG5vdCBjb25uZWN0YCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgVCA9IHRoaXMuVDtcbiAgICAgICAgLy9vbmx5IG9uZSBzZW50ZW5jZVxuICAgICAgICBsZXQgZW1iZWRkaW5ncyA9IFtdO1xuICAgICAgICBmb3IobGV0IHRva2VuSWR4cyBvZiBzZW50ZW5jZXMpe1xuICAgICAgICAgICAgbGV0IGlkeHMgPSB0b2tlbklkeHMubWFwKCh0LGkpPT5bMCxpXSk7XG4gICAgICAgICAgICBsZXQgaW5kaWNlcyA9IFQudGVuc29yKGlkeHMsIFt0b2tlbklkeHMubGVuZ3RoLCAyXSwgJ2ludDMyJyk7XG4gICAgICAgICAgICBsZXQgdmFsdWVzID0gVC50ZW5zb3IodG9rZW5JZHhzLCBbdG9rZW5JZHhzLmxlbmd0aF0sICdpbnQzMicpO1xuICAgICAgICAgICAgZW1iZWRkaW5ncy5wdXNoKCBhd2FpdCB0aGlzLm1vZGVsLmV4ZWN1dGVBc3luYyh7aW5kaWNlcywgdmFsdWVzfSkgKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgc2VudFRlbnNvciA9IFQuc3RhY2soZW1iZWRkaW5ncyk7XG4gICAgICAgIGlmKGFzVGVuc29yKXtcbiAgICAgICAgICAgIHJldHVybiBzZW50VGVuc29yO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICBsZXQgdmVjID0gYXdhaXQgc2VudFRlbnNvci5kYXRhKCk7XG4gICAgICAgICAgICBzZW50VGVuc29yLmRpc3Bvc2UoKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLlIuc3BsaXRFdmVyeSh0aGlzLnZlY1NpemUsIHZlYyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyB0cmFuc2Zvcm0odG9rZW5JZHhzKXtcbiAgICAgICAgbGV0IFt2ZWNdID0gYXdhaXQgdGhpcy5zZW50ZW5jZUVuY29kZShbdG9rZW5JZHhzXSwgZmFsc2UpO1xuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbSh2ZWMpO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IG5ldyBVbml2ZXJzYWxFbWJlZGRpbmcoZnVuY3Rvcik7IiwiLyoqXG4gKiBUaGlzIFZlY3Rvck1ldHJpY01peGlucyBjbGFzcyBpcyBwcm92aWRlIG1ldGhvZHMgZm9yIGNvbXBhcmluZyB2ZWN0b3IgcmVwcmVzZW50YXRpb24gb2YgZGlmZmVyZW50IHNlbnRlbmNlc1xuICogQGNsYXNzIFZlY3Rvck1ldHJpY01peGluc1xuICogQGV4dGVuZHMgIEJhc2VFbWJlZGRpbmdDbGFzc1xuICovXG5jb25zdCBWZWN0b3JNZXRyaWNNaXhpbnMgPSAoQmFzZUVtYmVkZGluZ0NsYXNzKT0+IGNsYXNzIGV4dGVuZHMgQmFzZUVtYmVkZGluZ0NsYXNzeyBcbiAgICBcbiAgICAvKipcbiAgICAgKiByZXR1cm4gdGhlIGV1Y2xldWRpYW4gZGlzdGFuY2UgYmV0d2VlbiB0d28gcmVwcmVzZW50YXRpb24gdmVjdG9yc1xuICAgICAqIEByZXR1cm5zIHsgQXJyYXkgfSB2ZWNcbiAgICAgKi9cbiAgICBhc3luYyBlbmNvZGVNYXRjaGluZyh0b2tlbklkeDEsIHRva2VuSWR4Mil7XG4gICAgICAgIGxldCB4ID0gYXdhaXQgdGhpcy5zZW50ZW5jZUVuY29kZShbdG9rZW5JZHgxXSwgdHJ1ZSk7XG4gICAgICAgIHggPSB4LnJlc2hhcGUoWy0xXSk7XG4gICAgICAgIGxldCB5ID0gYXdhaXQgdGhpcy5zZW50ZW5jZUVuY29kZShbdG9rZW5JZHgyXSwgdHJ1ZSk7XG4gICAgICAgIHkgPSB5LnJlc2hhcGUoWy0xXSk7XG4gICAgICAgIHJldHVybiB4LmRvdCh5KS5kaXYoeC5ub3JtKCkubXVsKHkubm9ybSgpKSk7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgVmVjdG9yTWV0cmljTWl4aW5zO1xuIiwiLyoqXG4gKiBUaGlzIFdvcmRFbWJlZGRpbmdNaXhpbnMgY2xhc3MgaXMgcHJvdmlkZSBtZXRob2RzIGZvciB0cmFuc2Zvcm4gc2VudGVuY2VzLCB0b2tlbnMgdG8gdmVjdG9yc1xuICogQGNsYXNzIENhdXNhbE5ldEVtYmVkZGluZ1xuICogQGV4dGVuZHMgIEJhc2VFbWJlZGRpbmdDbGFzc1xuICovXG5jb25zdCBXb3JkRW1iZWRkaW5nTWl4aW5zID0gKEJhc2VFbWJlZGRpbmdDbGFzcyk9PiBjbGFzcyBleHRlbmRzIEJhc2VFbWJlZGRpbmdDbGFzc3sgXG4gICAgLyoqXG4gICAgICogcmV0dXJuIGRlZmF1bHQgcmVwbGFjZW1lbnQgZm9yIHVua25vd24gdmVjLiBDdXJyZW50bHkgaXQgaXMgc2V0IHRvIHplcm9zXG4gICAgICogQHJldHVybnMgeyBBcnJheSB9IHZlY1xuICAgICAqL1xuICAgIHVua25vd1ZlYygpe1xuICAgICAgICByZXR1cm4gdGhpcy5mLnplcm9WZWModGhpcy5WZWNTaXplKTtcbiAgICB9XG4gICAgICAgIFxuICAgIC8qKlxuICAgICAqIHJldHVybiB0aGUgdmVjdG9ycyBvZiB0b2tlbml6ZWQgc2VudGVuY2VzXG4gICAgICogVGhpcyBmdW5jdGlvbiByZXF1aXJlIHNlbnRlbmNlIHRvIGJlIHRva2VuaXplZCB2aWEgcHJlcHJvY2Vzc2luZ1xuICAgICAqIEBwYXJhbSB7IEFycmF5IH0gdG9rZW5zIC0gYXJyYXkgb2Ygc3RyaW5nIHRva2VucyBvZiBzZW50ZW5jZVxuICAgICAqIEByZXR1cm5zIHsgVGVuc29yIH0gZW5jb2RlZCBzZW50ZW5jZXNcbiAgICAgKi9cbiAgICBhc3luYyBzZW50ZW5jZUVuY29kZShzZW50ZW5jZXMsIGFzVGVuc29yPXRydWUpe1xuICAgICAgICBjb25zdCBUID0gdGhpcy5UO1xuICAgICAgICBsZXQgZW5jb2RlZFNlbnRlbmNlcyA9IFtdO1xuICAgICAgICBmb3IobGV0IHRva2VucyBvZiBzZW50ZW5jZXMpe1xuICAgICAgICAgICAgbGV0IHZlY3MgPSBhd2FpdCB0aGlzLnRyYW5zZm9ybSh0b2tlbnMpO1xuICAgICAgICAgICAgbGV0IGVuY29kZSA9IGF3YWl0IFQudGVuc29yKHZlY3MpLm1lYW4oMCk7XG4gICAgICAgICAgICBlbmNvZGVkU2VudGVuY2VzLnB1c2goZW5jb2RlKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgc2VudFRlbnNvciA9IFQuc3RhY2soZW5jb2RlZFNlbnRlbmNlcyk7XG4gICAgICAgIGlmKGFzVGVuc29yKXtcbiAgICAgICAgICAgIHJldHVybiBzZW50VGVuc29yO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICBsZXQgdmVjcyA9IGF3YWl0IHNlbnRUZW5zb3IuZGF0YSgpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuUi5zcGxpdEV2ZXJ5KHRoaXMuVmVjU2l6ZSwgdmVjcyk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRyYW5zZm9ybSB0b2tlbml6ZWQgc2VudGVuY2VzIGludG8gdGVuc29yIHZlY3RvcnNcbiAgICAgKiBAcGFyYW0geyBBcnJheSB9IHRva2VucyAtIDJkIGFycmF5IGZvciB0b2tlbiBvZiBzZW50ZW5jZXNcbiAgICAgKiBAcmV0dXJucyB7IFRlbnNvciB9IDJkIHRlbnNvciByZXByZXNlbnQgdmVjdG9ycyBvZiBlYWNoIGlucHV0IHNlbnRlbmNlc1xuICAgICAqIEBleGFtcGxlXG4gICAgICogbGV0IHNlbnRWZWMgPSBhd2FpdCBjYXVzYWxOZXRFbWJlZGRpbmcuc2VudGVuY2VFbmNvZGUoWyBbJ3RoaXMnLCAnaXMnLCAndGVzdCddIF0pO1xuICAgICAqL1xuICAgIGFzeW5jIHRyYW5zZm9ybSh0b2tlbnMpe1xuICAgICAgICBjb25zdCBUb2tlbkxvb2tVcCA9IHRoaXMuVG9rZW5Mb29rVXAsIENodW5rTG9va1VwID0gdGhpcy5DaHVua0xvb2tVcDtcbiAgICAgICAgXG4gICAgICAgIGxldCB2ZWNzID0gW10sIG1pc3NDYWNoZVRva2Vucz1bXTtcbiAgICAgICAgZm9yKGxldCB0b2tlbiBvZiB0b2tlbnMpe1xuICAgICAgICAgICAgbGV0IHZlYyA9IGF3YWl0IFRva2VuTG9va1VwKHRva2VuKTtcbiAgICAgICAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKHtbdG9rZW5dOiB2ZWN9KTtcbiAgICAgICAgICAgIGlmKHZlYyA9PT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgbWlzc0NhY2hlVG9rZW5zID0gWy4uLm1pc3NDYWNoZVRva2VucywgdG9rZW5dO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmVjcyA9IFsuLi52ZWNzLCB0b2tlbl07XG4gICAgICAgIH1cbiAgICAgICAgaWYobWlzc0NhY2hlVG9rZW5zLmxlbmd0aCA9PT0gMCl7XG4gICAgICAgICAgICByZXR1cm4gdmVjcztcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgbGV0IHt0b2tlbkNodW5rSWRzLCBjaHVua0lkc30gPSBcbiAgICAgICAgICAgIHRoaXMuRi5tYXBUb2tlblRvQ2h1bmtJZHMobWlzc0NhY2hlVG9rZW5zLCB0aGlzLlRva2VuQ2h1bmtJZE1hcHBlcik7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmxvZ2dlci5kZWJ1Zyh7dG9rZW5DaHVua0lkcywgY2h1bmtJZHN9KTtcbiAgICAgICAgbGV0IG1hc3RlcmNodW5rID0ge307XG4gICAgICAgIGZvcihsZXQgY2h1bmtJZCBvZiBjaHVua0lkcyl7XG4gICAgICAgICAgICBpZihjaHVua0lkICE9PSBudWxsKXsvL25vdCBpbiBjaHVua1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdsb29rdXAnKTtcbiAgICAgICAgICAgICAgICBsZXQgY2h1bmsgPSBhd2FpdCBDaHVua0xvb2tVcChjaHVua0lkKTtcbiAgICAgICAgICAgICAgICBpZihjaHVuayA9PT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgICAgIGNodW5rID0gYXdhaXQgdGhpcy5xdWVyeUNodW5rKGNodW5rSWQpO1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnVwZGF0ZUNodW5rTG9va1VwKGNodW5rSWQsIGNodW5rKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbWFzdGVyY2h1bmsgPSB7Li4ubWFzdGVyY2h1bmssIC4uLmNodW5rfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgbGV0IGZpbmFsVmVjcyA9IHZlY3MucmVkdWNlKChmaW5hbFZlY3MsIHZlYyk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiggdHlwZW9mKHZlYykgPT09IFwic3RyaW5nXCIgKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IF92ZWMgPSBtYXN0ZXJjaHVua1t2ZWNdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihfdmVjID09PSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZlYyA9IHRoaXMudW5rbm93VmVjKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmluYWxWZWNzLnB1c2goX3ZlYyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbmFsVmVjcy5wdXNoKHZlYyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmaW5hbFZlY3M7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBbXSk7XG4gICAgICAgIHJldHVybiBmaW5hbFZlY3M7XG4gICAgfSAgIFxufTtcbmV4cG9ydCBkZWZhdWx0IFdvcmRFbWJlZGRpbmdNaXhpbnM7IiwiY29uc3QgV29yZEVtYmVkZGluZ0Z1bmN0b3JNaXhpbnMgPSAoQmFzZUZ1bmN0aW9uQ2xhc3MpID0+IGNsYXNzIGV4dGVuZHMgQmFzZUZ1bmN0aW9uQ2xhc3N7XG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0geyBBcnJheSB9IHRva2VucyAtIGxpc3Qgb2YgdG9rZW5zIHRvIGZpbmQgY29yZXNwb25kaW5nIGlkc1xuICAgICAqIEBwYXJhbSB7IEZ1bmN0aW9uIH0gbWFwcGVyIC0gXG4gICAgICogQHJldHVybnMgXG4gICAgICovXG4gICAgbWFwVG9rZW5Ub0NodW5rSWRzKHRva2VucywgbWFwcGVyKXtcbiAgICAgICAgY29uc3QgUiA9IHRoaXMuUjtcbiAgICAgICAgY29uc3QgVG9rZW5DaHVua0lkTWFwcGVyID0gbWFwcGVyO1xuICAgICAgICBsZXQgdG9rZW5DaHVua01hcCA9IHRva2Vucy5tYXAoIHQgPT4ge1xuICAgICAgICAgICAgbGV0IGNodW5rSWQgPSBUb2tlbkNodW5rSWRNYXBwZXIodCk7XG4gICAgICAgICAgICByZXR1cm4gW1t0LCBjaHVua0lkXSwgY2h1bmtJZF07IFxuICAgICAgICB9KTtcbiAgICAgICAgbGV0IFt0b2tlbkNodW5rSWRzLCBfY2h1bmtJZHNdID0gdGhpcy51bnppcCh0b2tlbkNodW5rTWFwKTtcbiAgICAgICAgbGV0IGNodW5rSWRzID0gUi51bmlxKF9jaHVua0lkcyk7XG4gICAgICAgIGNvbnNvbGUubG9nKHtjaHVua0lkcywgdG9rZW5DaHVua0lkc30pO1xuICAgICAgICByZXR1cm4ge3Rva2VuQ2h1bmtJZHMsIGNodW5rSWRzfTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogcmV0dXJuIHplcm8gdmVjdG9yIGdpdmVuIHRoZSB2ZWMgc2l6ZVxuICAgICAqIEBwYXJhbSB7IE51bWJlciB9IHZlY1NpemUgLSBwb3NpdGl2ZSBpbnRlZ2VyIGluZGljYXRlcyB2ZWN0b3IgbGVuZ3RoXG4gICAgICogQHJldHVybnMgeyBBcnJheSB9IHplcm8gdmVjdG9yXG4gICAgICovXG4gICAgemVyb1ZlYyh2ZWNTaXplKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuUi5tYXAoKCk9PjAsdGhpcy5SLnJhbmdlKDAsIHZlY1NpemUpKTtcbiAgICB9O1xufTtcbmV4cG9ydCBkZWZhdWx0IFdvcmRFbWJlZGRpbmdGdW5jdG9yTWl4aW5zOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9tZW1jYWNoZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3N0b3JhZ2VfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF91dGlsc19fOyJdLCJzb3VyY2VSb290IjoiIn0=