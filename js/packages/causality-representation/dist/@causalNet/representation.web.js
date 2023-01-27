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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3JlcHJlc2VudGF0aW9uL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3JlcHJlc2VudGF0aW9uL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0BjYXVzYWxOZXQvcmVwcmVzZW50YXRpb24vL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3JlcHJlc2VudGF0aW9uLy9ob21lL2h1eW5obmd1eWVuL2dpdGh1Yi9jYXVzYWxpdHkvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0U3ByZWFkLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcmVwcmVzZW50YXRpb24vLi9zcmMvTG9va3VwL2NodW5rTG9va3VwLm1peGlucy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3JlcHJlc2VudGF0aW9uLy4vc3JjL0xvb2t1cC9pbmRleC5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3JlcHJlc2VudGF0aW9uLy4vc3JjL0xvb2t1cC90b2tlbkxvb2t1cC5taXhpbnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9yZXByZXNlbnRhdGlvbi8uL3NyYy9jYXVzYWxOZXRFbWJlZGRpbmcuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9yZXByZXNlbnRhdGlvbi8uL3NyYy9mdW5jdG9yLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcmVwcmVzZW50YXRpb24vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9yZXByZXNlbnRhdGlvbi8uL3NyYy9yZXByZXNlbnRhdGlvbi5taXhpbnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9yZXByZXNlbnRhdGlvbi8uL3NyYy91bml2ZXJzYWxFbWJlZGRpbmcuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9yZXByZXNlbnRhdGlvbi8uL3NyYy92ZWN0b3JNZXRyaWNzLm1peGlucy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3JlcHJlc2VudGF0aW9uLy4vc3JjL3dvcmRFbWJlZGRpbmcubWl4aW5zLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcmVwcmVzZW50YXRpb24vLi9zcmMvd29yZEVtYmVkZGluZ0Z1bmN0b3IubWl4aW5zLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcmVwcmVzZW50YXRpb24vZXh0ZXJuYWwgXCJjYXVzYWwtbmV0LmNvcmVcIiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3JlcHJlc2VudGF0aW9uL2V4dGVybmFsIFwiY2F1c2FsLW5ldC5tZW1jYWNoZVwiIiwid2VicGFjazovL0BjYXVzYWxOZXQvcmVwcmVzZW50YXRpb24vZXh0ZXJuYWwgXCJjYXVzYWwtbmV0LnN0b3JhZ2VcIiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3JlcHJlc2VudGF0aW9uL2V4dGVybmFsIFwiY2F1c2FsLW5ldC51dGlsc1wiIl0sIm5hbWVzIjpbIkNodW5rTG9va3VwTWl4aW5zIiwiQmFzZVdvcmRFbWJlZGRpbmdDbGFzcyIsIkNodW5rTG9va1VwIiwiU3RvcmFnZSIsImNodW5rSWQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsIkNodW5rUGF0aCIsImVtYmVkZGluZ1NhdmVQYXRoIiwiY2h1bmtJdGVtIiwiZ2V0SXRlbSIsImNodW5rIiwiSlNPTiIsInBhcnNlIiwiZXJyIiwidXBkYXRlQ2h1bmtMb29rVXAiLCJVcGRhdGVDaHVua1BhdGgiLCJzZXRJdGVtIiwicXVlcnlDaHVuayIsIkNodW5rVXJsIiwiYmFzZUxpbmsiLCJxdWVyeSIsIlRva2VuTG9va1VwTWl4aW5zIiwiVG9rZW5Mb29rVXAiLCJNZW1DYWNoZSIsInRva2VuIiwidmVjIiwidXBkYXRlVG9rZW5Mb29rVXAiLCJjb25zb2xlIiwiZXJyb3IiLCJDYXVzYWxOZXRFbWJlZGRpbmciLCJwbGF0Zm9ybSIsIm1peFdpdGgiLCJCYXNlVGVuc29yIiwiU3RvcmFnZU1peGlucyIsIk1lbUNhY2hlTWl4aW5zIiwiQ2h1bmtMb29rVXBNaXhpbnMiLCJWZWN0b3JNZXRyaWNNaXhpbnMiLCJXb3JkRW1iZWRkaW5nTWl4aW5zIiwiY29uc3RydWN0b3IiLCJmZXRjaCIsInN0b3JhZ2UiLCJjYWNoZSIsImZ1bmN0b3IiLCJGIiwiUiIsIkNvcmVGdW5jdG9yIiwiZW1iZWRkaW5nRGVzY3JpcHRpb25QYXRoIiwiVmVjU2l6ZSIsInZlY3NpemUiLCJFcnJvciIsImNvbm5lY3QiLCJsaW5rIiwicmVmcmVzaCIsImdldERlc2NyaXB0aW9uIiwiZm9yY2VGZWN0aCIsImRlc2NyaXB0aW9uIiwiZGVzY3JpcHRpb25JdGVtIiwibG9nZ2VyIiwiZGVidWciLCJxdWVyeURlc2NyaXB0aW9uIiwiVG9rZW5DaHVua0lkTWFwcGVyIiwiZ2V0SW4iLCJjaHVua0xvb2tVcCIsInN0YXJ0c1dpdGgiLCJqc29uVXRpbHMiLCJmZXRjaEpzb24iLCJyZWFkSlNPTiIsIkRlc2NyaXB0aW9uTGluayIsInN0cmluZ2lmeSIsImluZGV4REJTdG9yYWdlIiwibWVtRG93bkNhY2hlIiwiRnVuY3RvciIsIkJhc2VGdW5jdG9yIiwiV29yZEVtYmVkZGluZ0Z1bmN0b3JNaXhpbnMiLCJSZXByZXNlbnRhdGlvbk1peGlucyIsIkJhc2VQaXBlbGluZUNsYXNzIiwiUmVwcmVzZW50YXRpb24iLCJyZXByZXNlbnRhdGlvbiIsImFzc2VydCIsImJlSW5zdGFuY2VPZiIsIlRlbnNvciIsImNvbmZpZ3VyZUxpbmsiLCJlbWJlZGRpbmdDb25maWciLCJsb2ciLCJzZXRSZXByZXNlbnRhdGlvbkJ5Q29uZmlnIiwibmV0Q29uZmlnIiwiRW1iZWRkaW5nQ29uZmlnIiwiRW1iZWRkaW5nIiwiU3RyaW5nIiwiVW5pdmVyc2FsRW1iZWRkaW5nIiwibW9kZWwiLCJmIiwidmVjU2l6ZSIsIlQiLCJsb2FkR3JhcGhNb2RlbCIsInNlbnRlbmNlRW5jb2RlIiwic2VudGVuY2VzIiwiYXNUZW5zb3IiLCJlbWJlZGRpbmdzIiwidG9rZW5JZHhzIiwiaWR4cyIsIm1hcCIsInQiLCJpIiwiaW5kaWNlcyIsInRlbnNvciIsImxlbmd0aCIsInZhbHVlcyIsInB1c2giLCJleGVjdXRlQXN5bmMiLCJzZW50VGVuc29yIiwic3RhY2siLCJkYXRhIiwiZGlzcG9zZSIsInNwbGl0RXZlcnkiLCJ0cmFuc2Zvcm0iLCJBcnJheSIsImZyb20iLCJCYXNlRW1iZWRkaW5nQ2xhc3MiLCJlbmNvZGVNYXRjaGluZyIsInRva2VuSWR4MSIsInRva2VuSWR4MiIsIngiLCJyZXNoYXBlIiwieSIsImRvdCIsImRpdiIsIm5vcm0iLCJtdWwiLCJ1bmtub3dWZWMiLCJ6ZXJvVmVjIiwiZW5jb2RlZFNlbnRlbmNlcyIsInRva2VucyIsInZlY3MiLCJlbmNvZGUiLCJtZWFuIiwibWlzc0NhY2hlVG9rZW5zIiwidG9rZW5DaHVua0lkcyIsImNodW5rSWRzIiwibWFwVG9rZW5Ub0NodW5rSWRzIiwibWFzdGVyY2h1bmsiLCJmaW5hbFZlY3MiLCJyZWR1Y2UiLCJfdmVjIiwidW5kZWZpbmVkIiwiQmFzZUZ1bmN0aW9uQ2xhc3MiLCJtYXBwZXIiLCJ0b2tlbkNodW5rTWFwIiwiX2NodW5rSWRzIiwidW56aXAiLCJ1bmlxIiwicmFuZ2UiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlE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LEVBQVM7QUFDWixXQUFPLEtBQUtoRCxDQUFMLENBQU95RCxHQUFQLENBQVcsTUFBSSxDQUFmLEVBQWlCLEtBQUt6RCxDQUFMLENBQU8yRyxLQUFQLENBQWEsQ0FBYixFQUFnQjNELE9BQWhCLENBQWpCLENBQVA7QUFDSDs7QUExQm9GLENBQXpGOztBQTRCZW5CLHlGQUFmLEU7Ozs7Ozs7Ozs7O0FDNUJBLDZEOzs7Ozs7Ozs7OztBQ0FBLGlFOzs7Ozs7Ozs7OztBQ0FBLGdFOzs7Ozs7Ozs7OztBQ0FBLDhEIiwiZmlsZSI6IkBjYXVzYWxOZXQvcmVwcmVzZW50YXRpb24ud2ViLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiY2F1c2FsLW5ldC5jb3JlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC5tZW1jYWNoZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQuc3RvcmFnZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQudXRpbHNcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiY2F1c2FsLW5ldC5jb3JlXCIsIFwiY2F1c2FsLW5ldC5tZW1jYWNoZVwiLCBcImNhdXNhbC1uZXQuc3RvcmFnZVwiLCBcImNhdXNhbC1uZXQudXRpbHNcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQGNhdXNhbE5ldC9yZXByZXNlbnRhdGlvblwiXSA9IGZhY3RvcnkocmVxdWlyZShcImNhdXNhbC1uZXQuY29yZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQubWVtY2FjaGVcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnN0b3JhZ2VcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnV0aWxzXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJAY2F1c2FsTmV0L3JlcHJlc2VudGF0aW9uXCJdID0gZmFjdG9yeShyb290W1wiY2F1c2FsLW5ldC5jb3JlXCJdLCByb290W1wiY2F1c2FsLW5ldC5tZW1jYWNoZVwiXSwgcm9vdFtcImNhdXNhbC1uZXQuc3RvcmFnZVwiXSwgcm9vdFtcImNhdXNhbC1uZXQudXRpbHNcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X2NvcmVfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X21lbWNhY2hlX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9zdG9yYWdlX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF91dGlsc19fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZGVmaW5lUHJvcGVydHk7IiwidmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZShcIi4vZGVmaW5lUHJvcGVydHlcIik7XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307XG4gICAgdmFyIG93bktleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuXG4gICAgaWYgKHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBvd25LZXlzID0gb3duS2V5cy5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwgc3ltKS5lbnVtZXJhYmxlO1xuICAgICAgfSkpO1xuICAgIH1cblxuICAgIG93bktleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICBkZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfb2JqZWN0U3ByZWFkOyIsIi8qKlxuICogVGhpcyBDaHVua0xvb2t1cE1peGlucyBjbGFzcyBwcm92aWRlIG1peGlucyBmb3IgY2h1bmsgbG9va3VwIHRoYXQgZmlyc3QgbG9vayBmcm9tIHRoZSBjYWNoZWQgY2h1bmsgdGhlblxuICogZmV0Y2ggYW5kIGNhY2hlIG5ldyBjaHVua1xuICogQGNsYXNzIENodW5rTG9va3VwTWl4aW5zXG4gKiBAZXh0ZW5kcyB7ICBCYXNlV29yZEVtYmVkZGluZ0NsYXNzIH0gXG4gKi9cbmNvbnN0IENodW5rTG9va3VwTWl4aW5zID0gKCBCYXNlV29yZEVtYmVkZGluZ0NsYXNzICk9PiBjbGFzcyBleHRlbmRzIEJhc2VXb3JkRW1iZWRkaW5nQ2xhc3N7IFxuICAgIFxuICAgIC8qKlxuICAgICAqIFJldHVybiB0aGUgc3RvcmFnZSBsb29rdXAgZnVuY3Rpb25cbiAgICAgKiBAcmVhZG9ubHlcbiAgICAgKi9cbiAgICBnZXQgQ2h1bmtMb29rVXAoKXtcbiAgICAgICAgY29uc3QgU3RvcmFnZSA9IHRoaXMuU3RvcmFnZTtcbiAgICAgICAgcmV0dXJuIChjaHVua0lkKT0+e1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlLCByZWplY3QpPT57XG4gICAgICAgICAgICAgICAgdHJ5e1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBDaHVua1BhdGggPSB0aGlzLmVtYmVkZGluZ1NhdmVQYXRoICsgY2h1bmtJZDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNodW5rSXRlbSA9IGF3YWl0IFN0b3JhZ2UuZ2V0SXRlbShDaHVua1BhdGgpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgY2h1bmsgPSBjaHVua0l0ZW1bQ2h1bmtQYXRoXTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShKU09OLnBhcnNlKGNodW5rKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoKGVycil7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUobnVsbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgfVxuICAgLyoqXG4gICAgKiBVcGRhdGUgdGhlIHN0b3JhZ2UgbG9va3VwXG4gICAgKiBAcGFyYW0geyBTdHJpbmd8TnVtYmVyIH0gY2h1bmtJZCAtIGlkIGluIHBvc2l0aXZlIGludGVnZXIgcmFuZ2VcbiAgICAqIEBwYXJhbSB7IE9iamVjdCB9IGNodW5rIC0gY2h1bmsgb2JqZWN0IGNvbnRhaW5pbmcgdG9rZW4ga2V5cyBhbmQgY29ycmVwb25kaW5nIHZlYyB2YWx1ZVxuICAgICogQHJldHVybnMgeyBTdHJpbmcgfSAtIHVwZGF0ZWQgY2h1bmsgcGF0aCBpbiBzdG9yYWdlXG4gICAgKi9cbiAgIGFzeW5jIHVwZGF0ZUNodW5rTG9va1VwKGNodW5rSWQsIGNodW5rKXtcbiAgICAgICAgY29uc3QgU3RvcmFnZSA9IHRoaXMuU3RvcmFnZTtcbiAgICAgICAgY29uc3QgVXBkYXRlQ2h1bmtQYXRoID0gdGhpcy5lbWJlZGRpbmdTYXZlUGF0aCArIGNodW5rSWQ7XG4gICAgICAgIHJldHVybiBhd2FpdCBTdG9yYWdlLnNldEl0ZW0oVXBkYXRlQ2h1bmtQYXRoLCBjaHVuayk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFF1ZXJ5IGNodW5rIGVpdGhlciByZWFkIGZyb20gZmlsZSBvciBmZXRjaCBmcm9tIHJlbW90ZSBzZXJ2ZXJcbiAgICAgKiBAcGFyYW0geyBTdHJpbmd8TnVtYmVyIH0gY2h1bmtJZCAtIGlkIGluIHBvc2l0aXZlIGludGVyZ2VyIHJhbmdlXG4gICAgICogQHJldHVybnMgeyBPYmplY3QgfSAgY2h1bmsgb2JqZWN0IGNvbnRhaW5pbmcgdG9rZW4ga2V5cyBhbmQgY29ycmVwb25kaW5nIHZlYyB2YWx1ZVxuICAgICAqL1xuICAgIGFzeW5jIHF1ZXJ5Q2h1bmsoY2h1bmtJZCl7XG4gICAgICAgIGNvbnN0IENodW5rVXJsID0gYCR7dGhpcy5iYXNlTGlua313b3JkdmVjX2NodW5rXyR7Y2h1bmtJZH0uanNvbmA7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLnF1ZXJ5KENodW5rVXJsKTtcbiAgICB9XG4gICBcbn07XG5leHBvcnQgZGVmYXVsdCBDaHVua0xvb2t1cE1peGluczsiLCJleHBvcnQgeyBkZWZhdWx0IGFzIENodW5rTG9va3VwTWl4aW5zIH0gZnJvbSAnLi9jaHVua0xvb2t1cC5taXhpbnMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBUb2tlbkxvb2tVcE1peGlucyB9IGZyb20gJy4vdG9rZW5Mb29rdXAubWl4aW5zJzsiLCJjb25zdCBUb2tlbkxvb2tVcE1peGlucyA9IChCYXNlV29yZEVtYmVkZGluZ0NsYXNzKT0+IGNsYXNzIGV4dGVuZHMgQmFzZVdvcmRFbWJlZGRpbmdDbGFzc3sgXG4gICAgZ2V0IFRva2VuTG9va1VwKCl7XG4gICAgICAgIGNvbnN0IE1lbUNhY2hlID0gdGhpcy5NZW1DYWNoZTtcbiAgICAgICAgcmV0dXJuICh0b2tlbik9PntcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSwgcmVqZWN0KT0+e1xuICAgICAgICAgICAgICAgIHRyeXtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHZlYyA9IGF3YWl0IE1lbUNhY2hlLmdldEl0ZW0odGhpcy5lbWJlZGRpbmdTYXZlUGF0aCArIHRva2VuKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh2ZWMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaChlcnIpe1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG51bGwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgdG9rZW4gbG9vayB1cFxuICAgICAqIEBwYXJhbSB7IFN0cmluZyB9IHRva2VuIC0gdG9rZW4gXG4gICAgICogQHBhcmFtIHsgQXJyYXkgfSB2ZWMgLSB2ZWN0b3IgcmVwcmVzZW50YXRpb24gb2YgdG9rZW5cbiAgICAgKi9cbiAgICBhc3luYyB1cGRhdGVUb2tlbkxvb2tVcCh0b2tlbiwgdmVjKXtcbiAgICAgICAgY29uc29sZS5lcnJvcigndGhpcyBpcyB1cGRhdGUnKTtcbiAgICAgICAgY29uc3QgTWVtQ2FjaGUgPSB0aGlzLk1lbUNhY2hlO1xuICAgICAgICBhd2FpdCBNZW1DYWNoZS5zZXRJdGVtKHRoaXMuZW1iZWRkaW5nU2F2ZVBhdGggKyB0b2tlbiwgdmVjKTtcbiAgICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgVG9rZW5Mb29rVXBNaXhpbnM7XG4iLCJpbXBvcnQgeyBUZW5zb3IgYXMgQmFzZVRlbnNvciB9IGZyb20gJ2NhdXNhbC1uZXQuY29yZSc7XG5pbXBvcnQgeyBwbGF0Zm9ybSwgZmV0Y2gsIGpzb25VdGlscyB9IGZyb20gJ2NhdXNhbC1uZXQudXRpbHMnO1xuaW1wb3J0IHsgU3RvcmFnZU1peGlucywgaW5kZXhEQlN0b3JhZ2UgfSBmcm9tICdjYXVzYWwtbmV0LnN0b3JhZ2UnO1xuaW1wb3J0IHsgTWVtQ2FjaGVNaXhpbnMsIG1lbURvd25DYWNoZSB9IGZyb20gJ2NhdXNhbC1uZXQubWVtY2FjaGUnO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBXb3JkRW1iZWRkaW5nTWl4aW5zIH0gZnJvbSAnLi93b3JkRW1iZWRkaW5nLm1peGlucyc7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIENodW5rTG9va1VwTWl4aW5zIH0gZnJvbSAnLi9Mb29rdXAvY2h1bmtMb29rdXAubWl4aW5zJztcbmltcG9ydCB7IGRlZmF1bHQgYXMgVG9rZW5Mb29rVXBNaXhpbnMgfSBmcm9tICcuL0xvb2t1cC90b2tlbkxvb2t1cC5taXhpbnMnO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBWZWN0b3JNZXRyaWNNaXhpbnMgfSBmcm9tICcuL3ZlY3Rvck1ldHJpY3MubWl4aW5zJztcbmltcG9ydCB7IGRlZmF1bHQgYXMgZnVuY3RvciB9IGZyb20gJy4vZnVuY3Rvcic7XG4vKipcbiAqIFRoaXMgQ2F1c2FsTmV0RW1iZWRkaW5nIHByb3ZpZGUgbWV0aG9kcyBmb3IgdHJhbnNmb3JtIHJhdyB0b2tlbml6ZWQgc2VudGVuY2UgaW50byBcbiAqIGl0cyBzaW5nbGUgdmVjdG9yIHJlcHJlc2VudGF0aW9uXG4gKiBtaXhXaXRoOlxuICogICAgICAgICBbICAgU3RvcmFnZU1peGlucywgXG4gKiAgICAgICAgICAgICBNZW1DYWNoZU1peGlucyxcbiAqICAgICAgICAgICAgIFRva2VuTG9va1VwTWl4aW5zLFxuICogICAgICAgICAgICAgQ2h1bmtMb29rVXBNaXhpbnMsXG4gKiAgICAgICAgICAgICBXb3JkRW1iZWRkaW5nTWl4aW5zIF0pfVxuICogQGNsYXNzIENhdXNhbE5ldEVtYmVkZGluZ1xuICogQGV4dGVuZHMgIEJhc2VUZW5zb3JcbiAqIEBleGFtcGxlXG4gKiBbRVhBTVBMRSAuLi9leGFtcGxlcy9jYXVzYWxOZXRFbWJlZGRpbmcuYmFiZWwubm9kZS5qc11cbiAqL1xuY2xhc3MgQ2F1c2FsTmV0RW1iZWRkaW5nIGV4dGVuZHMgcGxhdGZvcm0ubWl4V2l0aChCYXNlVGVuc29yLCBcbiAgICAgICAgWyAgIFN0b3JhZ2VNaXhpbnMsIFxuICAgICAgICAgICAgTWVtQ2FjaGVNaXhpbnMsXG4gICAgICAgICAgICBUb2tlbkxvb2tVcE1peGlucyxcbiAgICAgICAgICAgIENodW5rTG9va1VwTWl4aW5zLFxuICAgICAgICAgICAgVmVjdG9yTWV0cmljTWl4aW5zLFxuICAgICAgICAgICAgV29yZEVtYmVkZGluZ01peGlucyBdKXtcbiAgICBjb25zdHJ1Y3RvcihmZXRjaCwgc3RvcmFnZSwgY2FjaGUsIGZ1bmN0b3Ipe1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmZldGNoID0gZmV0Y2g7XG4gICAgICAgIHRoaXMuU3RvcmFnZSA9IHN0b3JhZ2U7ICAgLy9zdG9yZSBjb25maWd1cmVcbiAgICAgICAgdGhpcy5NZW1DYWNoZSA9IGNhY2hlOyAgICAvL3N0b3JlIGNodW5rc1xuICAgICAgICB0aGlzLkYgPSBmdW5jdG9yO1xuICAgICAgICB0aGlzLlIgPSB0aGlzLkYuQ29yZUZ1bmN0b3I7XG4gICAgICAgIHRoaXMuZW1iZWRkaW5nU2F2ZVBhdGggPSAnL2VtYmVkZGluZy8nO1xuICAgICAgICB0aGlzLmVtYmVkZGluZ0Rlc2NyaXB0aW9uUGF0aCA9IHRoaXMuZW1iZWRkaW5nU2F2ZVBhdGggKyAnZGVzY3JpcHRpb24uanNvbic7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybiB2ZWN6aWUgaW4gcG9zaXRpdmUgbnVtYmVyXG4gICAgICpcbiAgICAgKiBAcmVhZG9ubHlcbiAgICAgKiBAbWVtYmVyb2YgQ2F1c2FsTmV0RW1iZWRkaW5nXG4gICAgICovXG4gICAgZ2V0IFZlY1NpemUoKXtcbiAgICAgICAgaWYoIXRoaXMudmVjc2l6ZSl7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcigndmVjc2l6ZSBpcyBub3Qgc2V0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMudmVjc2l6ZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogTG9hZCBjb25maWd1cmUgb2YgcHJldHJhaW5lZCB2ZWN0b3IgZnJvbSBlaXRoZXIgbG9jYWwgZm9sZGVyIG9yIHJlbW90ZSBzZXJ2ZXIuIFxuICAgICAqIEFmdGVyIGNvbm5lY3QsIHRoZSByZXN1bHQgaXMgY2FjaGVkIGZvciBuZXh0IHRpbWUgaW5pdC5cbiAgICAgKiBAcGFyYW0geyBVUkx8RmlsZVBhdGggfSBsaW5rIC0gbGluayB0byBsb2FkXG4gICAgICogQHBhcmFtIHsgYm9vbGVhbiB9IFtyZWZyZXNoPWZhbHNlXSAtIGZvcmNlIHRvIGRpc2NhcmQgbG9jYWwgY2FjaGVcbiAgICAgKiBAcmV0dXJucyB7IFByb21pc2UgfVxuICAgICAqIEBtZW1iZXJvZiBDYXVzYWxOZXRFbWJlZGRpbmdcbiAgICAgKi9cbiAgICBhc3luYyBjb25uZWN0KGxpbmssIHJlZnJlc2g9ZmFsc2Upe1xuICAgICAgICB0aGlzLmJhc2VMaW5rID0gbGluaztcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuZ2V0RGVzY3JpcHRpb24ocmVmcmVzaCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCBieSBjb25uZWN0XG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtmb3JjZUZlY3RoPWZhbHNlXVxuICAgICAqIEByZXR1cm5zXG4gICAgICogQG1lbWJlcm9mIENhdXNhbE5ldEVtYmVkZGluZ1xuICAgICAqL1xuICAgIGFzeW5jIGdldERlc2NyaXB0aW9uKGZvcmNlRmVjdGg9ZmFsc2Upe1xuICAgICAgICBpZighdGhpcy5kZXNjcmlwdGlvbil7XG4gICAgICAgICAgICB0cnl7XG4gICAgICAgICAgICAgICAgbGV0IGRlc2NyaXB0aW9uSXRlbSA9IGF3YWl0IHRoaXMuU3RvcmFnZS5nZXRJdGVtKHRoaXMuZW1iZWRkaW5nRGVzY3JpcHRpb25QYXRoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gSlNPTi5wYXJzZShkZXNjcmlwdGlvbkl0ZW1bdGhpcy5lbWJlZGRpbmdEZXNjcmlwdGlvblBhdGhdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoKGVycil7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIuZGVidWcoeydsb2FkIGRlc2NyaXB0aW9uIGZyb20gc3RvcmFnZSc6IGZhbHNlfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGF3YWl0IHRoaXMucXVlcnlEZXNjcmlwdGlvbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmKGZvcmNlRmVjdGgpe1xuICAgICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGF3YWl0IHRoaXMucXVlcnlEZXNjcmlwdGlvbigpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuVG9rZW5DaHVua0lkTWFwcGVyID0gKHRva2VuKT0+e1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuRi5nZXRJbihbdG9rZW5dLCB0aGlzLmRlc2NyaXB0aW9uLmNodW5rTG9va1VwLCBudWxsKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy52ZWNzaXplID0gdGhpcy5kZXNjcmlwdGlvbi52ZWNzaXplOy8vb25seSBzZXQgZnJvbSBoZXJlXG4gICAgICAgIHJldHVybiB0aGlzLmRlc2NyaXB0aW9uO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBmZXRjaCBvciByZWFkIGNvbmZpZ3VyZSBkZXBlbmRzIG9uIHByb3ZpZWQgbGluayBmb3JtYXRcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7Kn0gbGlua1xuICAgICAqIEByZXR1cm5zXG4gICAgICogQG1lbWJlcm9mIENhdXNhbE5ldEVtYmVkZGluZ1xuICAgICAqL1xuICAgIGFzeW5jIHF1ZXJ5KGxpbmspe1xuICAgICAgICBpZihsaW5rLnN0YXJ0c1dpdGgoJ2h0dHAnKSl7XG4gICAgICAgICAgICByZXR1cm4gYXdhaXQganNvblV0aWxzLmZldGNoSnNvbihsaW5rKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGpzb25VdGlscy5yZWFkSlNPTihsaW5rKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBxdWVyeSB0aGUgZGVzY3JpcHRpb24ganNvbiBcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEByZXR1cm5zIHsgT2JqZWN0IH0gZGVzY3JpcHRpb24ganNvbiBvYmplY3RcbiAgICAgKiBAbWVtYmVyb2YgQ2F1c2FsTmV0RW1iZWRkaW5nXG4gICAgICovXG4gICAgYXN5bmMgcXVlcnlEZXNjcmlwdGlvbigpe1xuICAgICAgICBjb25zdCBEZXNjcmlwdGlvbkxpbmsgPSB0aGlzLmJhc2VMaW5rICsgJ3dvcmR2ZWMuZGVzY3JpcHRpb24uanNvbic7XG4gICAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKHsgRGVzY3JpcHRpb25MaW5rIH0pO1xuICAgICAgICB2YXIgZGVzY3JpcHRpb24gPSB0aGlzLnF1ZXJ5KERlc2NyaXB0aW9uTGluayk7XG4gICAgICAgIGF3YWl0IHRoaXMuU3RvcmFnZS5zZXRJdGVtKHRoaXMuZW1iZWRkaW5nRGVzY3JpcHRpb25QYXRoLCBKU09OLnN0cmluZ2lmeShkZXNjcmlwdGlvbikpO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHJldHVybiB0aGlzLmRlc2NyaXB0aW9uO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IENhdXNhbE5ldEVtYmVkZGluZyhmZXRjaCwgaW5kZXhEQlN0b3JhZ2UsIG1lbURvd25DYWNoZSwgZnVuY3Rvcik7IiwiaW1wb3J0IHsgRnVuY3RvciBhcyBCYXNlRnVuY3RvciB9IGZyb20gJ2NhdXNhbC1uZXQuY29yZSc7XG5pbXBvcnQgeyBwbGF0Zm9ybSB9IGZyb20gJ2NhdXNhbC1uZXQudXRpbHMnO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBXb3JkRW1iZWRkaW5nRnVuY3Rvck1peGlucyB9IGZyb20gJy4vd29yZEVtYmVkZGluZ0Z1bmN0b3IubWl4aW5zJztcbi8qKlxuICogVGhpcyBGdW5jdGlvbiBjbGFzcyBwcm92aWRlcyBtZXRob2RzIGZvciBjb21tb24gdXNlZCB1bHRpbGl0aWVzIGZ1bmN0aW9uXG4gKiBAZXhwb3J0XG4gKiBAY2xhc3MgRnVuY3Rpb25cbiAqIEBleHRlbmRzIEJhc2VGdW5jdG9yXG4gKi9cblxuY2xhc3MgRnVuY3RvciBleHRlbmRzIHBsYXRmb3JtLm1peFdpdGgoQmFzZUZ1bmN0b3IsIFxuICAgICAgICBbV29yZEVtYmVkZGluZ0Z1bmN0b3JNaXhpbnNdKXtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IEZ1bmN0b3IoKTsiLCJleHBvcnQgeyBkZWZhdWx0IGFzIFJlcHJlc2VudGF0aW9uTWl4aW5zIH0gZnJvbSAnLi9yZXByZXNlbnRhdGlvbi5taXhpbnMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBjYXVzYWxOZXRFbWJlZGRpbmcgfSBmcm9tICcuL2NhdXNhbE5ldEVtYmVkZGluZyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHVuaXZlcnNhbEVtYmVkZGluZyB9IGZyb20gJy4vdW5pdmVyc2FsRW1iZWRkaW5nJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgV29yZEVtYmVkZGluZ01peGlucyB9IGZyb20gJy4vd29yZEVtYmVkZGluZy5taXhpbnMnO1xuZXhwb3J0IHsgQ2h1bmtMb29rdXBNaXhpbnMsIFRva2VuTG9va1VwTWl4aW5zIH0gZnJvbSAnLi9Mb29rdXAnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBXb3JkRW1iZWRkaW5nRnVuY3Rvck1peGlucyB9IGZyb20gJy4vd29yZEVtYmVkZGluZ0Z1bmN0b3IubWl4aW5zJzsiLCJpbXBvcnQgeyBUZW5zb3IgfSBmcm9tICdjYXVzYWwtbmV0LmNvcmUnOyBcbmltcG9ydCB7IGFzc2VydCB9IGZyb20gJ2NhdXNhbC1uZXQudXRpbHMnO1xuLyoqXG4gKiBUaGlzIG1peGluIGNsYXNzIHByb3ZpZGVzIGF0dHJpYnV0ZXM6ICoqUmVwcmVzZW50YXRpb24qKi5cbiAqIEBjbGFzcyBSZXByZXNlbnRhdGlvbk1peGluc1xuICogQGV4dGVuZHMgIEJhc2VQaXBlbGluZUNsYXNzXG4gKiBAZXhhbXBsZVxuICogW0VYQU1QTEUgLi4vZXhhbXBsZXMvZW1iZWRkaW5nTWl4aW5zLmJhYmVsLm5vZGUuanNdXG4gKi9cbmNvbnN0IFJlcHJlc2VudGF0aW9uTWl4aW5zID0gKEJhc2VQaXBlbGluZUNsYXNzKT0+IGNsYXNzIGV4dGVuZHMgQmFzZVBpcGVsaW5lQ2xhc3N7IFxuICAgIC8qKlxuICAgICAqIFJldHVybiBFbWJlZGRpbmcgaW5zdGFuY2VcbiAgICAgKlxuICAgICAqIEByZWFkb25seVxuICAgICAqIEBtZW1iZXJvZiBSZXByZXNlbnRhdGlvbk1peGluc1xuICAgICAqL1xuICAgIGdldCBSZXByZXNlbnRhdGlvbigpe1xuICAgICAgICBpZighdGhpcy5yZXByZXNlbnRhdGlvbil7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcigncmVwcmVzZW50YXRpb24gaXMgbm90IHNldCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnJlcHJlc2VudGF0aW9uO1xuICAgIH1cbiAgICBcbiAgICBzZXQgUmVwcmVzZW50YXRpb24ocmVwcmVzZW50YXRpb24pe1xuICAgICAgICBhc3NlcnQuYmVJbnN0YW5jZU9mKHJlcHJlc2VudGF0aW9uLCBUZW5zb3IpO1xuICAgICAgICB0aGlzLnJlcHJlc2VudGF0aW9uID0gcmVwcmVzZW50YXRpb247XG4gICAgfVxuICAgIC8qKlxuICAgICAqIExvYWQgY29uZmlndXJlIG9mIHByZXRyYWluZWQgdmVjdG9yIGZyb20gZWl0aGVyIGxvY2FsIGZvbGRlciBvciByZW1vdGUgc2VydmVyLiBcbiAgICAgKiBBZnRlciBjb25uZWN0LCB0aGUgcmVzdWx0IGlzIGNhY2hlZCBmb3IgbmV4dCB0aW1lIGluaXQuXG4gICAgICogQHBhcmFtIHsgVVJMfEZpbGVQYXRoIH0gbGluayAtIGxpbmsgdG8gbG9hZFxuICAgICAqIEBwYXJhbSB7IGJvb2xlYW4gfSBbcmVmcmVzaD1mYWxzZV0gLSBmb3JjZSB0byBkaXNjYXJkIGxvY2FsIGNhY2hlXG4gICAgICogQHJldHVybnMgeyBQcm9taXNlIH1cbiAgICAgKiBAbWVtYmVyb2YgUmVwcmVzZW50YXRpb25NaXhpbnNcbiAgICAgKi9cbiAgICBhc3luYyBjb25uZWN0KCl7XG4gICAgICAgIGlmKHN1cGVyLmNvbm5lY3Qpe1xuICAgICAgICAgICAgc3VwZXIuY29ubmVjdCgpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBjb25maWd1cmVMaW5rID0gdGhpcy5lbWJlZGRpbmdDb25maWc7XG4gICAgICAgIHRoaXMubG9nZ2VyLmxvZyhgcmVwcmVzZW50YXRpb24gY29ubmVjdCB0byAke2NvbmZpZ3VyZUxpbmt9YCk7XG4gICAgICAgIGF3YWl0IHRoaXMuUmVwcmVzZW50YXRpb24uY29ubmVjdChjb25maWd1cmVMaW5rKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogc2V0IGVtYmVkZGluZyBmb3IgcGlwZWxpbmVcbiAgICAgKiBAcGFyYW0geyBPYmplY3QgfSBuZXRDb25maWcgLSBjb250YWluIEVtYmVkZGluZyBpbnN0YW5jZSBhbmQgRW1iZWRkaW5nIGNvbmZpZ3VyZVxuICAgICAqIEBtZW1iZXJvZiBSZXByZXNlbnRhdGlvbk1peGluc1xuICAgICAqL1xuICAgIHNldFJlcHJlc2VudGF0aW9uQnlDb25maWcobmV0Q29uZmlnKXtcbiAgICAgICAgbGV0IHsgRW1iZWRkaW5nQ29uZmlnLCBFbWJlZGRpbmcgfSA9IG5ldENvbmZpZy5SZXByZXNlbnRhdGlvbjtcbiAgICAgICAgYXNzZXJ0LmJlSW5zdGFuY2VPZihFbWJlZGRpbmdDb25maWcsIFN0cmluZyk7XG4gICAgICAgIHRoaXMuUmVwcmVzZW50YXRpb24gPSBFbWJlZGRpbmc7XG4gICAgICAgIHRoaXMuZW1iZWRkaW5nQ29uZmlnID0gRW1iZWRkaW5nQ29uZmlnO1xuICAgIH1cbn07XG5leHBvcnQgZGVmYXVsdCBSZXByZXNlbnRhdGlvbk1peGluczsgICAgIiwiaW1wb3J0IHsgcGxhdGZvcm0sIGZldGNoIH0gZnJvbSAnY2F1c2FsLW5ldC51dGlscyc7XG5pbXBvcnQgeyBUZW5zb3IgfSBmcm9tICdjYXVzYWwtbmV0LmNvcmUnO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBmdW5jdG9yIH0gZnJvbSAnLi9mdW5jdG9yJztcbmltcG9ydCB7IGRlZmF1bHQgYXMgVmVjdG9yTWV0cmljTWl4aW5zIH0gZnJvbSAnLi92ZWN0b3JNZXRyaWNzLm1peGlucyc7XG5cbi8qKlxuICogVGhpcyBVbml2ZXJzYWxFbWJlZGRpbmcgcHJvdmlkZSBtZXRob2RzIGZvciB0cmFuc2Zvcm0gc2VudGVuY2VzIGludG8gXG4gKiBpdHMgc2luZ2xlIHZlY3RvciByZXByZXNlbnRhdGlvbiBcbiAqIGJhc2VkIG9uIFt1c2VdKGh0dHBzOi8vZ2l0aHViLmNvbS90ZW5zb3JmbG93L3RmanMtbW9kZWxzL3RyZWUvbWFzdGVyL3VuaXZlcnNhbC1zZW50ZW5jZS1lbmNvZGVyKVxuICogXG4gKiBAY2xhc3MgVW5pdmVyc2FsRW1iZWRkaW5nXG4gKiBAZXh0ZW5kcyB7VGVuc29yfVxuICogQGV4YW1wbGVcbiAqIFtFWEFNUExFIC4uL2V4YW1wbGVzL3VuaXZlcnNhbEVtYmVkZGluZy5iYWJlbC5qc11cbiAqL1xuY2xhc3MgVW5pdmVyc2FsRW1iZWRkaW5nIGV4dGVuZHMgcGxhdGZvcm0ubWl4V2l0aChUZW5zb3IsIFxuICAgIFsgVmVjdG9yTWV0cmljTWl4aW5zIF0pe1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKGZ1bmN0b3Ipe1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICAvKipcbiAgICAgICAgICogQHByaXZhdGUgeyBUZW5zb3JNb2RlbCB9IFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5tb2RlbCA9IG51bGw7XG4gICAgICAgIHRoaXMuZiA9IGZ1bmN0b3I7XG4gICAgICAgIHRoaXMuUiA9IHRoaXMuZi5Db3JlRnVuY3RvcjtcbiAgICAgICAgdGhpcy52ZWNTaXplID0gNTEyO1xuICAgIH1cbiAgICBcbiAgICBhc3luYyBjb25uZWN0KGxpbmspe1xuICAgICAgICB0aGlzLm1vZGVsID0gYXdhaXQgdGhpcy5ULmxvYWRHcmFwaE1vZGVsKGxpbmspO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBhc3luYyBzZW50ZW5jZUVuY29kZShzZW50ZW5jZXMsIGFzVGVuc29yPXRydWUpe1xuICAgICAgICBpZighdGhpcy5tb2RlbCl7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcihgbW9kZWwgaXMgbm90IGNvbm5lY3RgKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBUID0gdGhpcy5UO1xuICAgICAgICAvL29ubHkgb25lIHNlbnRlbmNlXG4gICAgICAgIGxldCBlbWJlZGRpbmdzID0gW107XG4gICAgICAgIGZvcihsZXQgdG9rZW5JZHhzIG9mIHNlbnRlbmNlcyl7XG4gICAgICAgICAgICBsZXQgaWR4cyA9IHRva2VuSWR4cy5tYXAoKHQsaSk9PlswLGldKTtcbiAgICAgICAgICAgIGxldCBpbmRpY2VzID0gVC50ZW5zb3IoaWR4cywgW3Rva2VuSWR4cy5sZW5ndGgsIDJdLCAnaW50MzInKTtcbiAgICAgICAgICAgIGxldCB2YWx1ZXMgPSBULnRlbnNvcih0b2tlbklkeHMsIFt0b2tlbklkeHMubGVuZ3RoXSwgJ2ludDMyJyk7XG4gICAgICAgICAgICBlbWJlZGRpbmdzLnB1c2goIGF3YWl0IHRoaXMubW9kZWwuZXhlY3V0ZUFzeW5jKHtpbmRpY2VzLCB2YWx1ZXN9KSApO1xuICAgICAgICB9XG4gICAgICAgIGxldCBzZW50VGVuc29yID0gVC5zdGFjayhlbWJlZGRpbmdzKTtcbiAgICAgICAgaWYoYXNUZW5zb3Ipe1xuICAgICAgICAgICAgcmV0dXJuIHNlbnRUZW5zb3I7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIGxldCB2ZWMgPSBhd2FpdCBzZW50VGVuc29yLmRhdGEoKTtcbiAgICAgICAgICAgIHNlbnRUZW5zb3IuZGlzcG9zZSgpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuUi5zcGxpdEV2ZXJ5KHRoaXMudmVjU2l6ZSwgdmVjKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIHRyYW5zZm9ybSh0b2tlbklkeHMpe1xuICAgICAgICBsZXQgW3ZlY10gPSBhd2FpdCB0aGlzLnNlbnRlbmNlRW5jb2RlKFt0b2tlbklkeHNdLCBmYWxzZSk7XG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKHZlYyk7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgbmV3IFVuaXZlcnNhbEVtYmVkZGluZyhmdW5jdG9yKTsiLCIvKipcbiAqIFRoaXMgVmVjdG9yTWV0cmljTWl4aW5zIGNsYXNzIGlzIHByb3ZpZGUgbWV0aG9kcyBmb3IgY29tcGFyaW5nIHZlY3RvciByZXByZXNlbnRhdGlvbiBvZiBkaWZmZXJlbnQgc2VudGVuY2VzXG4gKiBAY2xhc3MgVmVjdG9yTWV0cmljTWl4aW5zXG4gKiBAZXh0ZW5kcyAgQmFzZUVtYmVkZGluZ0NsYXNzXG4gKi9cbmNvbnN0IFZlY3Rvck1ldHJpY01peGlucyA9IChCYXNlRW1iZWRkaW5nQ2xhc3MpPT4gY2xhc3MgZXh0ZW5kcyBCYXNlRW1iZWRkaW5nQ2xhc3N7IFxuICAgIFxuICAgIC8qKlxuICAgICAqIHJldHVybiB0aGUgZXVjbGV1ZGlhbiBkaXN0YW5jZSBiZXR3ZWVuIHR3byByZXByZXNlbnRhdGlvbiB2ZWN0b3JzXG4gICAgICogQHJldHVybnMgeyBBcnJheSB9IHZlY1xuICAgICAqL1xuICAgIGFzeW5jIGVuY29kZU1hdGNoaW5nKHRva2VuSWR4MSwgdG9rZW5JZHgyKXtcbiAgICAgICAgbGV0IHggPSBhd2FpdCB0aGlzLnNlbnRlbmNlRW5jb2RlKFt0b2tlbklkeDFdLCB0cnVlKTtcbiAgICAgICAgeCA9IHgucmVzaGFwZShbLTFdKTtcbiAgICAgICAgbGV0IHkgPSBhd2FpdCB0aGlzLnNlbnRlbmNlRW5jb2RlKFt0b2tlbklkeDJdLCB0cnVlKTtcbiAgICAgICAgeSA9IHkucmVzaGFwZShbLTFdKTtcbiAgICAgICAgcmV0dXJuIHguZG90KHkpLmRpdih4Lm5vcm0oKS5tdWwoeS5ub3JtKCkpKTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBWZWN0b3JNZXRyaWNNaXhpbnM7XG4iLCIvKipcbiAqIFRoaXMgV29yZEVtYmVkZGluZ01peGlucyBjbGFzcyBpcyBwcm92aWRlIG1ldGhvZHMgZm9yIHRyYW5zZm9ybiBzZW50ZW5jZXMsIHRva2VucyB0byB2ZWN0b3JzXG4gKiBAY2xhc3MgQ2F1c2FsTmV0RW1iZWRkaW5nXG4gKiBAZXh0ZW5kcyAgQmFzZUVtYmVkZGluZ0NsYXNzXG4gKi9cbmNvbnN0IFdvcmRFbWJlZGRpbmdNaXhpbnMgPSAoQmFzZUVtYmVkZGluZ0NsYXNzKT0+IGNsYXNzIGV4dGVuZHMgQmFzZUVtYmVkZGluZ0NsYXNzeyBcbiAgICAvKipcbiAgICAgKiByZXR1cm4gZGVmYXVsdCByZXBsYWNlbWVudCBmb3IgdW5rbm93biB2ZWMuIEN1cnJlbnRseSBpdCBpcyBzZXQgdG8gemVyb3NcbiAgICAgKiBAcmV0dXJucyB7IEFycmF5IH0gdmVjXG4gICAgICovXG4gICAgdW5rbm93VmVjKCl7XG4gICAgICAgIHJldHVybiB0aGlzLmYuemVyb1ZlYyh0aGlzLlZlY1NpemUpO1xuICAgIH1cbiAgICAgICAgXG4gICAgLyoqXG4gICAgICogcmV0dXJuIHRoZSB2ZWN0b3JzIG9mIHRva2VuaXplZCBzZW50ZW5jZXNcbiAgICAgKiBUaGlzIGZ1bmN0aW9uIHJlcXVpcmUgc2VudGVuY2UgdG8gYmUgdG9rZW5pemVkIHZpYSBwcmVwcm9jZXNzaW5nXG4gICAgICogQHBhcmFtIHsgQXJyYXkgfSB0b2tlbnMgLSBhcnJheSBvZiBzdHJpbmcgdG9rZW5zIG9mIHNlbnRlbmNlXG4gICAgICogQHJldHVybnMgeyBUZW5zb3IgfSBlbmNvZGVkIHNlbnRlbmNlc1xuICAgICAqL1xuICAgIGFzeW5jIHNlbnRlbmNlRW5jb2RlKHNlbnRlbmNlcywgYXNUZW5zb3I9dHJ1ZSl7XG4gICAgICAgIGNvbnN0IFQgPSB0aGlzLlQ7XG4gICAgICAgIGxldCBlbmNvZGVkU2VudGVuY2VzID0gW107XG4gICAgICAgIGZvcihsZXQgdG9rZW5zIG9mIHNlbnRlbmNlcyl7XG4gICAgICAgICAgICBsZXQgdmVjcyA9IGF3YWl0IHRoaXMudHJhbnNmb3JtKHRva2Vucyk7XG4gICAgICAgICAgICBsZXQgZW5jb2RlID0gYXdhaXQgVC50ZW5zb3IodmVjcykubWVhbigwKTtcbiAgICAgICAgICAgIGVuY29kZWRTZW50ZW5jZXMucHVzaChlbmNvZGUpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBzZW50VGVuc29yID0gVC5zdGFjayhlbmNvZGVkU2VudGVuY2VzKTtcbiAgICAgICAgaWYoYXNUZW5zb3Ipe1xuICAgICAgICAgICAgcmV0dXJuIHNlbnRUZW5zb3I7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIGxldCB2ZWNzID0gYXdhaXQgc2VudFRlbnNvci5kYXRhKCk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5SLnNwbGl0RXZlcnkodGhpcy5WZWNTaXplLCB2ZWNzKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG4gICAgLyoqXG4gICAgICogVHJhbnNmb3JtIHRva2VuaXplZCBzZW50ZW5jZXMgaW50byB0ZW5zb3IgdmVjdG9yc1xuICAgICAqIEBwYXJhbSB7IEFycmF5IH0gdG9rZW5zIC0gMmQgYXJyYXkgZm9yIHRva2VuIG9mIHNlbnRlbmNlc1xuICAgICAqIEByZXR1cm5zIHsgVGVuc29yIH0gMmQgdGVuc29yIHJlcHJlc2VudCB2ZWN0b3JzIG9mIGVhY2ggaW5wdXQgc2VudGVuY2VzXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBsZXQgc2VudFZlYyA9IGF3YWl0IGNhdXNhbE5ldEVtYmVkZGluZy5zZW50ZW5jZUVuY29kZShbIFsndGhpcycsICdpcycsICd0ZXN0J10gXSk7XG4gICAgICovXG4gICAgYXN5bmMgdHJhbnNmb3JtKHRva2Vucyl7XG4gICAgICAgIGNvbnN0IFRva2VuTG9va1VwID0gdGhpcy5Ub2tlbkxvb2tVcCwgQ2h1bmtMb29rVXAgPSB0aGlzLkNodW5rTG9va1VwO1xuICAgICAgICBcbiAgICAgICAgbGV0IHZlY3MgPSBbXSwgbWlzc0NhY2hlVG9rZW5zPVtdO1xuICAgICAgICBmb3IobGV0IHRva2VuIG9mIHRva2Vucyl7XG4gICAgICAgICAgICBsZXQgdmVjID0gYXdhaXQgVG9rZW5Mb29rVXAodG9rZW4pO1xuICAgICAgICAgICAgdGhpcy5sb2dnZXIuZGVidWcoe1t0b2tlbl06IHZlY30pO1xuICAgICAgICAgICAgaWYodmVjID09PSBudWxsKXtcbiAgICAgICAgICAgICAgICBtaXNzQ2FjaGVUb2tlbnMgPSBbLi4ubWlzc0NhY2hlVG9rZW5zLCB0b2tlbl07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2ZWNzID0gWy4uLnZlY3MsIHRva2VuXTtcbiAgICAgICAgfVxuICAgICAgICBpZihtaXNzQ2FjaGVUb2tlbnMubGVuZ3RoID09PSAwKXtcbiAgICAgICAgICAgIHJldHVybiB2ZWNzO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBsZXQge3Rva2VuQ2h1bmtJZHMsIGNodW5rSWRzfSA9IFxuICAgICAgICAgICAgdGhpcy5GLm1hcFRva2VuVG9DaHVua0lkcyhtaXNzQ2FjaGVUb2tlbnMsIHRoaXMuVG9rZW5DaHVua0lkTWFwcGVyKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKHt0b2tlbkNodW5rSWRzLCBjaHVua0lkc30pO1xuICAgICAgICBsZXQgbWFzdGVyY2h1bmsgPSB7fTtcbiAgICAgICAgZm9yKGxldCBjaHVua0lkIG9mIGNodW5rSWRzKXtcbiAgICAgICAgICAgIGlmKGNodW5rSWQgIT09IG51bGwpey8vbm90IGluIGNodW5rXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2xvb2t1cCcpO1xuICAgICAgICAgICAgICAgIGxldCBjaHVuayA9IGF3YWl0IENodW5rTG9va1VwKGNodW5rSWQpO1xuICAgICAgICAgICAgICAgIGlmKGNodW5rID09PSBudWxsKXtcbiAgICAgICAgICAgICAgICAgICAgY2h1bmsgPSBhd2FpdCB0aGlzLnF1ZXJ5Q2h1bmsoY2h1bmtJZCk7XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMudXBkYXRlQ2h1bmtMb29rVXAoY2h1bmtJZCwgY2h1bmspO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBtYXN0ZXJjaHVuayA9IHsuLi5tYXN0ZXJjaHVuaywgLi4uY2h1bmt9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBsZXQgZmluYWxWZWNzID0gdmVjcy5yZWR1Y2UoKGZpbmFsVmVjcywgdmVjKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKCB0eXBlb2YodmVjKSA9PT0gXCJzdHJpbmdcIiApe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgX3ZlYyA9IG1hc3RlcmNodW5rW3ZlY107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKF92ZWMgPT09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdmVjID0gdGhpcy51bmtub3dWZWMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaW5hbFZlY3MucHVzaChfdmVjKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmluYWxWZWNzLnB1c2godmVjKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZpbmFsVmVjcztcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIFtdKTtcbiAgICAgICAgcmV0dXJuIGZpbmFsVmVjcztcbiAgICB9ICAgXG59O1xuZXhwb3J0IGRlZmF1bHQgV29yZEVtYmVkZGluZ01peGluczsiLCJjb25zdCBXb3JkRW1iZWRkaW5nRnVuY3Rvck1peGlucyA9IChCYXNlRnVuY3Rpb25DbGFzcykgPT4gY2xhc3MgZXh0ZW5kcyBCYXNlRnVuY3Rpb25DbGFzc3tcbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7IEFycmF5IH0gdG9rZW5zIC0gbGlzdCBvZiB0b2tlbnMgdG8gZmluZCBjb3Jlc3BvbmRpbmcgaWRzXG4gICAgICogQHBhcmFtIHsgRnVuY3Rpb24gfSBtYXBwZXIgLSBcbiAgICAgKiBAcmV0dXJucyBcbiAgICAgKi9cbiAgICBtYXBUb2tlblRvQ2h1bmtJZHModG9rZW5zLCBtYXBwZXIpe1xuICAgICAgICBjb25zdCBSID0gdGhpcy5SO1xuICAgICAgICBjb25zdCBUb2tlbkNodW5rSWRNYXBwZXIgPSBtYXBwZXI7XG4gICAgICAgIGxldCB0b2tlbkNodW5rTWFwID0gdG9rZW5zLm1hcCggdCA9PiB7XG4gICAgICAgICAgICBsZXQgY2h1bmtJZCA9IFRva2VuQ2h1bmtJZE1hcHBlcih0KTtcbiAgICAgICAgICAgIHJldHVybiBbW3QsIGNodW5rSWRdLCBjaHVua0lkXTsgXG4gICAgICAgIH0pO1xuICAgICAgICBsZXQgW3Rva2VuQ2h1bmtJZHMsIF9jaHVua0lkc10gPSB0aGlzLnVuemlwKHRva2VuQ2h1bmtNYXApO1xuICAgICAgICBsZXQgY2h1bmtJZHMgPSBSLnVuaXEoX2NodW5rSWRzKTtcbiAgICAgICAgY29uc29sZS5sb2coe2NodW5rSWRzLCB0b2tlbkNodW5rSWRzfSk7XG4gICAgICAgIHJldHVybiB7dG9rZW5DaHVua0lkcywgY2h1bmtJZHN9O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiByZXR1cm4gemVybyB2ZWN0b3IgZ2l2ZW4gdGhlIHZlYyBzaXplXG4gICAgICogQHBhcmFtIHsgTnVtYmVyIH0gdmVjU2l6ZSAtIHBvc2l0aXZlIGludGVnZXIgaW5kaWNhdGVzIHZlY3RvciBsZW5ndGhcbiAgICAgKiBAcmV0dXJucyB7IEFycmF5IH0gemVybyB2ZWN0b3JcbiAgICAgKi9cbiAgICB6ZXJvVmVjKHZlY1NpemUpe1xuICAgICAgICByZXR1cm4gdGhpcy5SLm1hcCgoKT0+MCx0aGlzLlIucmFuZ2UoMCwgdmVjU2l6ZSkpO1xuICAgIH07XG59O1xuZXhwb3J0IGRlZmF1bHQgV29yZEVtYmVkZGluZ0Z1bmN0b3JNaXhpbnM7IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfY29yZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X21lbWNhY2hlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfc3RvcmFnZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3V0aWxzX187Il0sInNvdXJjZVJvb3QiOiIifQ==