(this["webpackJsonp_causalNet_core"] = this["webpackJsonp_causalNet_core"] || []).push([[0],{

/***/ "../../node_modules/@tensorflow/tfjs-core/dist/types.js":
/*!*******************************************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/@tensorflow/tfjs-core/dist/types.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Rank;
(function (Rank) {
    Rank["R0"] = "R0";
    Rank["R1"] = "R1";
    Rank["R2"] = "R2";
    Rank["R3"] = "R3";
    Rank["R4"] = "R4";
    Rank["R5"] = "R5";
    Rank["R6"] = "R6";
})(Rank = exports.Rank || (exports.Rank = {}));
var UpcastInt32AndMap;
(function (UpcastInt32AndMap) {
    UpcastInt32AndMap["float32"] = "float32";
    UpcastInt32AndMap["int32"] = "int32";
    UpcastInt32AndMap["bool"] = "int32";
    UpcastInt32AndMap["complex64"] = "complex64";
})(UpcastInt32AndMap || (UpcastInt32AndMap = {}));
var UpcastBoolAndMap;
(function (UpcastBoolAndMap) {
    UpcastBoolAndMap["float32"] = "float32";
    UpcastBoolAndMap["int32"] = "int32";
    UpcastBoolAndMap["bool"] = "bool";
    UpcastBoolAndMap["complex64"] = "complex64";
})(UpcastBoolAndMap || (UpcastBoolAndMap = {}));
var UpcastFloat32AndMap;
(function (UpcastFloat32AndMap) {
    UpcastFloat32AndMap["float32"] = "float32";
    UpcastFloat32AndMap["int32"] = "float32";
    UpcastFloat32AndMap["bool"] = "float32";
    UpcastFloat32AndMap["complex64"] = "complex64";
})(UpcastFloat32AndMap || (UpcastFloat32AndMap = {}));
var UpcastComplex64AndMap;
(function (UpcastComplex64AndMap) {
    UpcastComplex64AndMap["float32"] = "complex64";
    UpcastComplex64AndMap["int32"] = "complex64";
    UpcastComplex64AndMap["bool"] = "complex64";
    UpcastComplex64AndMap["complex64"] = "complex64";
})(UpcastComplex64AndMap || (UpcastComplex64AndMap = {}));
var upcastTypeMap = {
    'float32': UpcastFloat32AndMap,
    'int32': UpcastInt32AndMap,
    'bool': UpcastBoolAndMap,
    'complex64': UpcastComplex64AndMap
};
function upcastType(typeA, typeB) {
    if (typeA === 'string' || typeB === 'string') {
        if (typeA === 'string' && typeB === 'string') {
            return 'string';
        }
        throw new Error("Can not upcast " + typeA + " with " + typeB);
    }
    return upcastTypeMap[typeA][typeB];
}
exports.upcastType = upcastType;
function sumOutType(type) {
    return upcastType(type, 'int32');
}
exports.sumOutType = sumOutType;
//# sourceMappingURL=types.js.map

/***/ }),

/***/ "../../node_modules/@tensorflow/tfjs-node-gpu/dist/callbacks.js":
/*!***************************************************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/@tensorflow/tfjs-node-gpu/dist/callbacks.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var tfjs_1 = __webpack_require__(/*! @tensorflow/tfjs */ "../../node_modules/@tensorflow/tfjs/dist/tf.esm.js");
var ProgressBar = __webpack_require__(/*! progress */ "../../node_modules/progress/index.js");
exports.progressBarHelper = {
    ProgressBar: ProgressBar,
    log: console.log
};
var ProgbarLogger = (function (_super) {
    __extends(ProgbarLogger, _super);
    function ProgbarLogger() {
        var _this = _super.call(this, {
            onTrainBegin: function (logs) { return __awaiter(_this, void 0, void 0, function () {
                var samples, batchSize;
                return __generator(this, function (_a) {
                    samples = this.params.samples;
                    batchSize = this.params.batchSize;
                    tfjs_1.util.assert(samples != null, 'ProgbarLogger cannot operate when samples is undefined or null.');
                    tfjs_1.util.assert(batchSize != null, 'ProgbarLogger cannot operate when batchSize is undefined or ' +
                        'null.');
                    this.numTrainBatchesPerEpoch = Math.ceil(samples / batchSize);
                    return [2];
                });
            }); },
            onEpochBegin: function (epoch, logs) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    exports.progressBarHelper.log("Epoch " + (epoch + 1) + " / " + this.params.epochs);
                    this.currentEpochBegin = tfjs_1.util.now();
                    return [2];
                });
            }); },
            onBatchEnd: function (batch, logs) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (batch === 0) {
                                this.progressBar = new exports.progressBarHelper.ProgressBar('eta=:eta :bar :placeholderForLossesAndMetrics', { total: this.numTrainBatchesPerEpoch + 1, head: ">" });
                            }
                            this.progressBar.tick({
                                placeholderForLossesAndMetrics: this.formatLogsAsMetricsContent(logs)
                            });
                            return [4, tfjs_1.nextFrame()];
                        case 1:
                            _a.sent();
                            if (batch === this.numTrainBatchesPerEpoch - 1) {
                                this.epochDurationMillis = tfjs_1.util.now() - this.currentEpochBegin;
                                this.usPerStep =
                                    this.epochDurationMillis / this.params.samples * 1e3;
                            }
                            return [2];
                    }
                });
            }); },
            onEpochEnd: function (epoch, logs) { return __awaiter(_this, void 0, void 0, function () {
                var lossesAndMetricsString;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.progressBar.tick({ placeholderForLossesAndMetrics: '' });
                            lossesAndMetricsString = this.formatLogsAsMetricsContent(logs);
                            exports.progressBarHelper.log(this.epochDurationMillis.toFixed(0) + "ms " +
                                (this.usPerStep.toFixed(0) + "us/step - ") +
                                ("" + lossesAndMetricsString));
                            return [4, tfjs_1.nextFrame()];
                        case 1:
                            _a.sent();
                            return [2];
                    }
                });
            }); },
        }) || this;
        return _this;
    }
    ProgbarLogger.prototype.formatLogsAsMetricsContent = function (logs) {
        var metricsContent = '';
        var keys = Object.keys(logs).sort();
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            if (this.isFieldRelevant(key)) {
                var value = logs[key];
                var decimalPlaces = getDisplayDecimalPlaces(value);
                metricsContent += key + "=" + value.toFixed(decimalPlaces) + " ";
            }
        }
        return metricsContent;
    };
    ProgbarLogger.prototype.isFieldRelevant = function (key) {
        return key !== 'batch' && key !== 'size';
    };
    return ProgbarLogger;
}(tfjs_1.CustomCallback));
exports.ProgbarLogger = ProgbarLogger;
function getDisplayDecimalPlaces(x) {
    var BASE_NUM_DIGITS = 2;
    if (!Number.isFinite(x) || x === 0 || x > 1 || x < -1) {
        return BASE_NUM_DIGITS;
    }
    else {
        return BASE_NUM_DIGITS - Math.floor(Math.log10(Math.abs(x)));
    }
}
exports.getDisplayDecimalPlaces = getDisplayDecimalPlaces;


/***/ }),

/***/ "../../node_modules/@tensorflow/tfjs-node-gpu/dist/index.js":
/*!***********************************************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/@tensorflow/tfjs-node-gpu/dist/index.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var tf = __webpack_require__(/*! @tensorflow/tfjs */ "../../node_modules/@tensorflow/tfjs/dist/tf.esm.js");
var file_system_1 = __webpack_require__(/*! ./io/file_system */ "../../node_modules/@tensorflow/tfjs-node-gpu/dist/io/file_system.js");
var nodeIo = __webpack_require__(/*! ./io/index */ "../../node_modules/@tensorflow/tfjs-node-gpu/dist/io/index.js");
var node_http_1 = __webpack_require__(/*! ./io/node_http */ "../../node_modules/@tensorflow/tfjs-node-gpu/dist/io/node_http.js");
var nodejs_kernel_backend_1 = __webpack_require__(/*! ./nodejs_kernel_backend */ "../../node_modules/@tensorflow/tfjs-node-gpu/dist/nodejs_kernel_backend.js");
var nodeVersion = __webpack_require__(/*! ./version */ "../../node_modules/@tensorflow/tfjs-node-gpu/dist/version.js");
var bindings = __webpack_require__(/*! bindings */ "../../node_modules/bindings/bindings.js");
exports.version = __assign({}, tf.version, { 'tfjs-node': nodeVersion.version });
exports.io = __assign({}, tf.io, nodeIo);
__export(__webpack_require__(/*! @tensorflow/tfjs */ "../../node_modules/@tensorflow/tfjs/dist/tf.esm.js"));
var pjson = __webpack_require__(/*! ../package.json */ "../../node_modules/@tensorflow/tfjs-node-gpu/package.json");
tf.ENV.registerBackend('tensorflow', function () {
    return new nodejs_kernel_backend_1.NodeJSKernelBackend(bindings('tfjs_binding.node'), pjson.name);
}, 3);
if (tf.ENV.findBackend('tensorflow') != null) {
    tf.setBackend('tensorflow');
}
tf.io.registerLoadRouter(file_system_1.nodeFileSystemRouter);
tf.io.registerSaveRouter(file_system_1.nodeFileSystemRouter);
tf.io.registerLoadRouter(node_http_1.nodeHTTPRequestRouter);
var callbacks_1 = __webpack_require__(/*! ./callbacks */ "../../node_modules/@tensorflow/tfjs-node-gpu/dist/callbacks.js");
tf.registerCallbackConstructor(1, callbacks_1.ProgbarLogger);


/***/ }),

/***/ "../../node_modules/@tensorflow/tfjs-node-gpu/dist/io/file_system.js":
/*!********************************************************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/@tensorflow/tfjs-node-gpu/dist/io/file_system.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var tfc = __webpack_require__(/*! @tensorflow/tfjs-core */ "../../node_modules/@tensorflow/tfjs-core/dist/tf-core.esm.js");
var fs = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module 'fs'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
var path_1 = __webpack_require__(/*! path */ "../../node_modules/path-browserify/index.js");
var util_1 = __webpack_require__(/*! util */ "../../node_modules/util/util.js");
var stat = util_1.promisify(fs.stat);
var writeFile = util_1.promisify(fs.writeFile);
var readFile = util_1.promisify(fs.readFile);
var mkdir = util_1.promisify(fs.mkdir);
var io_utils_1 = __webpack_require__(/*! ./io_utils */ "../../node_modules/@tensorflow/tfjs-node-gpu/dist/io/io_utils.js");
function doesNotExistHandler(name) {
    return function (e) {
        switch (e.code) {
            case 'ENOENT':
                throw new Error(name + " " + e.path + " does not exist: loading failed");
            default:
                throw e;
        }
    };
}
var NodeFileSystem = (function () {
    function NodeFileSystem(path) {
        this.MODEL_JSON_FILENAME = 'model.json';
        this.WEIGHTS_BINARY_FILENAME = 'weights.bin';
        this.MODEL_BINARY_FILENAME = 'tensorflowjs.pb';
        if (Array.isArray(path)) {
            tfc.util.assert(path.length === 2, 'file paths must have a length of 2, ' +
                ("(actual length is " + path.length + ")."));
            this.path = path.map(function (p) { return path_1.resolve(p); });
        }
        else {
            this.path = path_1.resolve(path);
        }
    }
    NodeFileSystem.prototype.save = function (modelArtifacts) {
        return __awaiter(this, void 0, void 0, function () {
            var weightsBinPath, weightsManifest, modelJSON, modelJSONPath;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (Array.isArray(this.path)) {
                            throw new Error('Cannot perform saving to multiple paths.');
                        }
                        return [4, this.createOrVerifyDirectory()];
                    case 1:
                        _a.sent();
                        if (!(modelArtifacts.modelTopology instanceof ArrayBuffer)) return [3, 2];
                        throw new Error('NodeFileSystem.save() does not support saving model topology ' +
                            'in binary format yet.');
                    case 2:
                        weightsBinPath = path_1.join(this.path, this.WEIGHTS_BINARY_FILENAME);
                        weightsManifest = [{
                                paths: [this.WEIGHTS_BINARY_FILENAME],
                                weights: modelArtifacts.weightSpecs
                            }];
                        modelJSON = {
                            modelTopology: modelArtifacts.modelTopology,
                            weightsManifest: weightsManifest,
                        };
                        modelJSONPath = path_1.join(this.path, this.MODEL_JSON_FILENAME);
                        return [4, writeFile(modelJSONPath, JSON.stringify(modelJSON), 'utf8')];
                    case 3:
                        _a.sent();
                        return [4, writeFile(weightsBinPath, Buffer.from(modelArtifacts.weightData), 'binary')];
                    case 4:
                        _a.sent();
                        return [2, {
                                modelArtifactsInfo: io_utils_1.getModelArtifactsInfoForJSON(modelArtifacts)
                            }];
                }
            });
        });
    };
    NodeFileSystem.prototype.load = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, Array.isArray(this.path) ? this.loadBinaryModel() :
                        this.loadJSONModel()];
            });
        });
    };
    NodeFileSystem.prototype.loadBinaryModel = function () {
        return __awaiter(this, void 0, void 0, function () {
            var topologyPath, weightManifestPath, topology, weightManifest, modelTopology, weightsManifest, _a, _b, modelArtifacts, _c, weightSpecs, weightData;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        topologyPath = this.path[0];
                        weightManifestPath = this.path[1];
                        return [4, stat(topologyPath).catch(doesNotExistHandler('Topology Path'))];
                    case 1:
                        topology = _d.sent();
                        return [4, stat(weightManifestPath)
                                .catch(doesNotExistHandler('Weight Manifest Path'))];
                    case 2:
                        weightManifest = _d.sent();
                        if (!topology.isFile()) {
                            throw new Error('File specified for topology is not a file!');
                        }
                        if (!weightManifest.isFile()) {
                            throw new Error('File specified for the weight manifest is not a file!');
                        }
                        return [4, readFile(this.path[0])];
                    case 3:
                        modelTopology = _d.sent();
                        _b = (_a = JSON).parse;
                        return [4, readFile(this.path[1], 'utf8')];
                    case 4:
                        weightsManifest = _b.apply(_a, [_d.sent()]);
                        modelArtifacts = {
                            modelTopology: modelTopology,
                        };
                        return [4, this.loadWeights(weightsManifest, this.path[1])];
                    case 5:
                        _c = _d.sent(), weightSpecs = _c[0], weightData = _c[1];
                        modelArtifacts.weightSpecs = weightSpecs;
                        modelArtifacts.weightData = weightData;
                        return [2, modelArtifacts];
                }
            });
        });
    };
    NodeFileSystem.prototype.loadJSONModel = function () {
        return __awaiter(this, void 0, void 0, function () {
            var path, info, modelJSON, _a, _b, modelArtifacts, _c, weightSpecs, weightData;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        path = this.path;
                        return [4, stat(path).catch(doesNotExistHandler('Path'))];
                    case 1:
                        info = _d.sent();
                        if (!info.isFile()) return [3, 5];
                        _b = (_a = JSON).parse;
                        return [4, readFile(path, 'utf8')];
                    case 2:
                        modelJSON = _b.apply(_a, [_d.sent()]);
                        modelArtifacts = {
                            modelTopology: modelJSON.modelTopology,
                        };
                        if (!(modelJSON.weightsManifest != null)) return [3, 4];
                        return [4, this.loadWeights(modelJSON.weightsManifest, path)];
                    case 3:
                        _c = _d.sent(), weightSpecs = _c[0], weightData = _c[1];
                        modelArtifacts.weightSpecs = weightSpecs;
                        modelArtifacts.weightData = weightData;
                        _d.label = 4;
                    case 4: return [2, modelArtifacts];
                    case 5: throw new Error('The path to load from must be a file. Loading from a directory ' +
                        'is not supported.');
                }
            });
        });
    };
    NodeFileSystem.prototype.loadWeights = function (weightsManifest, path) {
        return __awaiter(this, void 0, void 0, function () {
            var dirName, buffers, weightSpecs, _i, weightsManifest_1, group, _a, _b, path_2, weightFilePath, buffer;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        dirName = path_1.dirname(path);
                        buffers = [];
                        weightSpecs = [];
                        _i = 0, weightsManifest_1 = weightsManifest;
                        _c.label = 1;
                    case 1:
                        if (!(_i < weightsManifest_1.length)) return [3, 7];
                        group = weightsManifest_1[_i];
                        _a = 0, _b = group.paths;
                        _c.label = 2;
                    case 2:
                        if (!(_a < _b.length)) return [3, 5];
                        path_2 = _b[_a];
                        weightFilePath = path_1.join(dirName, path_2);
                        return [4, readFile(weightFilePath)
                                .catch(doesNotExistHandler('Weight file'))];
                    case 3:
                        buffer = _c.sent();
                        buffers.push(buffer);
                        _c.label = 4;
                    case 4:
                        _a++;
                        return [3, 2];
                    case 5:
                        weightSpecs.push.apply(weightSpecs, group.weights);
                        _c.label = 6;
                    case 6:
                        _i++;
                        return [3, 1];
                    case 7: return [2, [weightSpecs, io_utils_1.toArrayBuffer(buffers)]];
                }
            });
        });
    };
    NodeFileSystem.prototype.createOrVerifyDirectory = function () {
        return __awaiter(this, void 0, void 0, function () {
            var paths, _i, paths_1, path, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        paths = Array.isArray(this.path) ? this.path : [this.path];
                        _i = 0, paths_1 = paths;
                        _a.label = 1;
                    case 1:
                        if (!(_i < paths_1.length)) return [3, 9];
                        path = paths_1[_i];
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 8]);
                        return [4, mkdir(path)];
                    case 3:
                        _a.sent();
                        return [3, 8];
                    case 4:
                        e_1 = _a.sent();
                        if (!(e_1.code === 'EEXIST')) return [3, 6];
                        return [4, stat(path)];
                    case 5:
                        if ((_a.sent()).isFile()) {
                            throw new Error("Path " + path + " exists as a file. The path must be " +
                                "nonexistent or point to a directory.");
                        }
                        return [3, 7];
                    case 6: throw e_1;
                    case 7: return [3, 8];
                    case 8:
                        _i++;
                        return [3, 1];
                    case 9: return [2];
                }
            });
        });
    };
    NodeFileSystem.URL_SCHEME = 'file://';
    return NodeFileSystem;
}());
exports.NodeFileSystem = NodeFileSystem;
exports.nodeFileSystemRouter = function (url) {
    if (Array.isArray(url)) {
        if (url.every(function (urlElement) { return urlElement.startsWith(NodeFileSystem.URL_SCHEME); })) {
            return new NodeFileSystem(url.map(function (urlElement) { return urlElement.slice(NodeFileSystem.URL_SCHEME.length); }));
        }
        else {
            return null;
        }
    }
    else {
        if (url.startsWith(NodeFileSystem.URL_SCHEME)) {
            return new NodeFileSystem(url.slice(NodeFileSystem.URL_SCHEME.length));
        }
        else {
            return null;
        }
    }
};
function fileSystem(path) {
    return new NodeFileSystem(path);
}
exports.fileSystem = fileSystem;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../buffer/index.js */ "../../node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "../../node_modules/@tensorflow/tfjs-node-gpu/dist/io/index.js":
/*!**************************************************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/@tensorflow/tfjs-node-gpu/dist/io/index.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var file_system_1 = __webpack_require__(/*! ./file_system */ "../../node_modules/@tensorflow/tfjs-node-gpu/dist/io/file_system.js");
exports.fileSystem = file_system_1.fileSystem;
var node_http_1 = __webpack_require__(/*! ./node_http */ "../../node_modules/@tensorflow/tfjs-node-gpu/dist/io/node_http.js");
exports.nodeHTTPRequest = node_http_1.nodeHTTPRequest;


/***/ }),

/***/ "../../node_modules/@tensorflow/tfjs-node-gpu/dist/io/io_utils.js":
/*!*****************************************************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/@tensorflow/tfjs-node-gpu/dist/io/io_utils.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {
Object.defineProperty(exports, "__esModule", { value: true });
function toBuffer(ab) {
    var view = new Uint8Array(ab);
    return Buffer.from(view);
}
exports.toBuffer = toBuffer;
function toArrayBuffer(buf) {
    if (Array.isArray(buf)) {
        var totalLength = 0;
        for (var _i = 0, buf_1 = buf; _i < buf_1.length; _i++) {
            var buffer = buf_1[_i];
            totalLength += buffer.length;
        }
        var ab = new ArrayBuffer(totalLength);
        var view = new Uint8Array(ab);
        var pos = 0;
        for (var _a = 0, buf_2 = buf; _a < buf_2.length; _a++) {
            var buffer = buf_2[_a];
            pos += buffer.copy(view, pos);
        }
        return ab;
    }
    else {
        return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
    }
}
exports.toArrayBuffer = toArrayBuffer;
function getModelArtifactsInfoForJSON(modelArtifacts) {
    if (modelArtifacts.modelTopology instanceof ArrayBuffer) {
        throw new Error('Expected JSON model topology, received ArrayBuffer.');
    }
    return {
        dateSaved: new Date(),
        modelTopologyType: 'JSON',
        modelTopologyBytes: modelArtifacts.modelTopology == null ?
            0 :
            Buffer.byteLength(JSON.stringify(modelArtifacts.modelTopology), 'utf8'),
        weightSpecsBytes: modelArtifacts.weightSpecs == null ?
            0 :
            Buffer.byteLength(JSON.stringify(modelArtifacts.weightSpecs), 'utf8'),
        weightDataBytes: modelArtifacts.weightData == null ?
            0 :
            modelArtifacts.weightData.byteLength,
    };
}
exports.getModelArtifactsInfoForJSON = getModelArtifactsInfoForJSON;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../buffer/index.js */ "../../node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "../../node_modules/@tensorflow/tfjs-node-gpu/dist/io/node_http.js":
/*!******************************************************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/@tensorflow/tfjs-node-gpu/dist/io/node_http.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tfjs_core_1 = __webpack_require__(/*! @tensorflow/tfjs-core */ "../../node_modules/@tensorflow/tfjs-core/dist/tf-core.esm.js");
var fetch = __webpack_require__(/*! node-fetch */ "../../node_modules/node-fetch/browser.js");
exports.fetchWrapper = { fetch: fetch };
function nodeHTTPRequest(path, requestInit, weightPathPrefix) {
    return tfjs_core_1.io.browserHTTPRequest(path, requestInit, weightPathPrefix, exports.fetchWrapper.fetch);
}
exports.nodeHTTPRequest = nodeHTTPRequest;
exports.nodeHTTPRequestRouter = function (url) {
    var isHTTP = true;
    if (Array.isArray(url)) {
        isHTTP = url.every(function (urlItem) { return tfjs_core_1.io.isHTTPScheme(urlItem); });
    }
    else {
        isHTTP = tfjs_core_1.io.isHTTPScheme(url);
    }
    if (isHTTP) {
        return nodeHTTPRequest(url);
    }
    return null;
};


/***/ }),

/***/ "../../node_modules/@tensorflow/tfjs-node-gpu/dist/nodejs_kernel_backend.js":
/*!***************************************************************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/@tensorflow/tfjs-node-gpu/dist/nodejs_kernel_backend.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var tfjs_core_1 = __webpack_require__(/*! @tensorflow/tfjs-core */ "../../node_modules/@tensorflow/tfjs-core/dist/tf-core.esm.js");
var types_1 = __webpack_require__(/*! @tensorflow/tfjs-core/dist/types */ "../../node_modules/@tensorflow/tfjs-core/dist/types.js");
var util_1 = __webpack_require__(/*! util */ "../../node_modules/util/util.js");
var op_utils_1 = __webpack_require__(/*! ./ops/op_utils */ "../../node_modules/@tensorflow/tfjs-node-gpu/dist/ops/op_utils.js");
var NodeJSKernelBackend = (function (_super) {
    __extends(NodeJSKernelBackend, _super);
    function NodeJSKernelBackend(binding, packageName) {
        var _this = _super.call(this) || this;
        _this.tensorMap = new WeakMap();
        _this.binding = binding;
        _this.isGPUPackage = packageName === '@tensorflow/tfjs-node-gpu';
        return _this;
    }
    NodeJSKernelBackend.prototype.setDataMover = function (dataMover) {
    };
    NodeJSKernelBackend.prototype.createOutputTensor = function (metadata) {
        var newId = {};
        this.tensorMap.set(newId, {
            shape: metadata.shape,
            dtype: metadata.dtype,
            id: metadata.id,
            values: null
        });
        var dtype;
        switch (metadata.dtype) {
            case this.binding.TF_FLOAT:
                dtype = 'float32';
                break;
            case this.binding.TF_INT32:
                dtype = 'int32';
                break;
            case this.binding.TF_BOOL:
                dtype = 'bool';
                break;
            case this.binding.TF_COMPLEX64:
                dtype = 'complex64';
                break;
            case this.binding.TF_STRING:
                dtype = 'string';
                break;
            default:
                throw new Error("Unknown dtype enum " + metadata.dtype);
        }
        return tfjs_core_1.Tensor.make(metadata.shape, { dataId: newId }, dtype);
    };
    NodeJSKernelBackend.prototype.getInputTensorIds = function (tensors) {
        var ids = [];
        for (var i = 0; i < tensors.length; i++) {
            var info = this.tensorMap.get(tensors[i].dataId);
            if (info.values != null) {
                info.id =
                    this.binding.createTensor(info.shape, info.dtype, info.values);
                info.values = null;
                this.tensorMap.set(tensors[i].dataId, info);
            }
            ids.push(info.id);
        }
        return ids;
    };
    NodeJSKernelBackend.prototype.createReductionOpAttrs = function (tensor) {
        return [
            { name: 'keep_dims', type: this.binding.TF_ATTR_BOOL, value: false },
            op_utils_1.createTypeOpAttr('T', tensor.dtype), op_utils_1.createTypeOpAttr('Tidx', 'int32')
        ];
    };
    NodeJSKernelBackend.prototype.executeSingleInput = function (name, input) {
        var opAttrs = [op_utils_1.createTypeOpAttr('T', input.dtype)];
        return this.executeSingleOutput(name, opAttrs, [input]);
    };
    NodeJSKernelBackend.prototype.floatPrecision = function () {
        return 32;
    };
    NodeJSKernelBackend.prototype.executeSingleOutput = function (name, opAttrs, inputs) {
        var outputMetadata = this.binding.executeOp(name, opAttrs, this.getInputTensorIds(inputs), 1);
        return this.createOutputTensor(outputMetadata[0]);
    };
    NodeJSKernelBackend.prototype.executeMultipleOutputs = function (name, opAttrs, inputs, numOutputs) {
        var _this = this;
        var outputMetadata = this.binding.executeOp(name, opAttrs, this.getInputTensorIds(inputs), numOutputs);
        return outputMetadata.map(function (m) { return _this.createOutputTensor(m); });
    };
    NodeJSKernelBackend.prototype.dispose = function () { };
    NodeJSKernelBackend.prototype.read = function (dataId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, this.readSync(dataId)];
            });
        });
    };
    NodeJSKernelBackend.prototype.readSync = function (dataId) {
        if (!this.tensorMap.has(dataId)) {
            throw new Error("Tensor " + dataId + " was not registered!");
        }
        var info = this.tensorMap.get(dataId);
        if (info.values != null) {
            return info.values;
        }
        else {
            return this.binding.tensorDataSync(info.id);
        }
    };
    NodeJSKernelBackend.prototype.disposeData = function (dataId) {
        var id = this.tensorMap.get(dataId).id;
        if (id != null && id >= 0) {
            this.binding.deleteTensor(id);
        }
        this.tensorMap.delete(dataId);
    };
    NodeJSKernelBackend.prototype.write = function (dataId, values) {
        if (!this.tensorMap.has(dataId)) {
            throw new Error("Tensor " + dataId + " was not registered!");
        }
        var info = this.tensorMap.get(dataId);
        info.values = values;
        this.tensorMap.set(dataId, info);
    };
    NodeJSKernelBackend.prototype.register = function (dataId, shape, dtype) {
        if (!this.tensorMap.has(dataId)) {
            this.tensorMap.set(dataId, { shape: shape, dtype: op_utils_1.getTFDType(dtype), values: null, id: -1 });
        }
    };
    NodeJSKernelBackend.prototype.stridedSlice = function (x, begin, end, strides, beginMask, endMask, ellipsisMask, newAxisMask, shrinkAxisMask) {
        var beginTensor = tfjs_core_1.tensor1d(begin, 'int32');
        var endTensor = tfjs_core_1.tensor1d(end, 'int32');
        var stridesTensor = tfjs_core_1.tensor1d(strides, 'int32');
        var opAttrs = [
            op_utils_1.createTypeOpAttr('T', x.dtype), op_utils_1.createTypeOpAttr('Index', 'int32'),
            { name: 'begin_mask', type: this.binding.TF_ATTR_INT, value: beginMask },
            { name: 'end_mask', type: this.binding.TF_ATTR_INT, value: endMask }, {
                name: 'ellipsis_mask',
                type: this.binding.TF_ATTR_INT,
                value: ellipsisMask
            },
            {
                name: 'new_axis_mask',
                type: this.binding.TF_ATTR_INT,
                value: newAxisMask
            },
            {
                name: 'shrink_axis_mask',
                type: this.binding.TF_ATTR_INT,
                value: shrinkAxisMask
            }
        ];
        return this.executeSingleOutput('StridedSlice', opAttrs, [x, beginTensor, endTensor, stridesTensor]);
    };
    NodeJSKernelBackend.prototype.unstack = function (x, axis) {
        if (axis >= x.shape.length) {
            throw new Error("Invalid axis supplied: " + axis + " shape length: " + x.shape.length);
        }
        var num = x.shape[axis];
        var opAttrs = [
            { name: 'num', type: this.binding.TF_ATTR_INT, value: num },
            op_utils_1.createTypeOpAttr('T', x.dtype),
            { name: 'axis', type: this.binding.TF_ATTR_INT, value: axis }
        ];
        return this.executeMultipleOutputs('Unpack', opAttrs, [x], num);
    };
    NodeJSKernelBackend.prototype.batchMatMul = function (a, b, transposeA, transposeB) {
        var opAttrs = [
            op_utils_1.createTypeOpAttr('T', a.dtype),
            { name: 'adj_x', type: this.binding.TF_ATTR_BOOL, value: transposeA },
            { name: 'adj_y', type: this.binding.TF_ATTR_BOOL, value: transposeB }
        ];
        return this.executeSingleOutput('BatchMatMul', opAttrs, [a, b]);
    };
    NodeJSKernelBackend.prototype.slice = function (x, begin, size) {
        var opAttrs = [op_utils_1.createTypeOpAttr('T', x.dtype), op_utils_1.createTypeOpAttr('Index', 'int32')];
        var beginTensor = tfjs_core_1.tensor1d(begin, 'int32');
        var sizeTensor = tfjs_core_1.tensor1d(size, 'int32');
        return this.executeSingleOutput('Slice', opAttrs, [x, beginTensor, sizeTensor]);
    };
    NodeJSKernelBackend.prototype.reverse = function (a, axis) {
        var opAttrs = [op_utils_1.createTypeOpAttr('Tidx', 'int32'), op_utils_1.createTypeOpAttr('T', a.dtype)];
        var axisTensor = tfjs_core_1.tensor1d(axis, 'int32');
        return this.executeSingleOutput('ReverseV2', opAttrs, [a, axisTensor]);
    };
    NodeJSKernelBackend.prototype.concat = function (tensors, axis) {
        var opAttrs = [
            { name: 'N', type: this.binding.TF_ATTR_INT, value: tensors.length }, {
                name: 'Tidx',
                type: this.binding.TF_ATTR_TYPE,
                value: this.binding.TF_INT32
            },
            op_utils_1.createTensorsTypeOpAttr('T', tensors)
        ];
        var inputs = Array.from(tensors);
        inputs.push(tfjs_core_1.scalar(axis, 'int32'));
        return this.executeSingleOutput('ConcatV2', opAttrs, inputs);
    };
    NodeJSKernelBackend.prototype.neg = function (a) {
        return this.executeSingleInput('Neg', a);
    };
    NodeJSKernelBackend.prototype.add = function (a, b) {
        var opAttrs = [op_utils_1.createTypeOpAttr('T', types_1.upcastType(a.dtype, b.dtype))];
        return this.executeSingleOutput('Add', opAttrs, [a, b]);
    };
    NodeJSKernelBackend.prototype.select = function (condition, a, b) {
        var opAttrs = [op_utils_1.createTypeOpAttr('T', types_1.upcastType(a.dtype, b.dtype))];
        return this.executeSingleOutput('Select', opAttrs, [condition, a, b]);
    };
    NodeJSKernelBackend.prototype.addN = function (tensors) {
        var opAttrs = [
            op_utils_1.createTypeOpAttr('T', tensors[0].dtype),
            { name: 'N', type: this.binding.TF_ATTR_INT, value: tensors.length }
        ];
        return this.executeSingleOutput('AddN', opAttrs, tensors);
    };
    NodeJSKernelBackend.prototype.subtract = function (a, b) {
        var opAttrs = [op_utils_1.createTypeOpAttr('T', types_1.upcastType(a.dtype, b.dtype))];
        return this.executeSingleOutput('Sub', opAttrs, [a, b]);
    };
    NodeJSKernelBackend.prototype.multiply = function (a, b) {
        var opAttrs = [op_utils_1.createTypeOpAttr('T', types_1.upcastType(a.dtype, b.dtype))];
        return this.executeSingleOutput('Mul', opAttrs, [a, b]);
    };
    NodeJSKernelBackend.prototype.realDivide = function (a, b) {
        var opAttrs = [op_utils_1.createTypeOpAttr('T', types_1.upcastType(a.dtype, b.dtype))];
        return this.executeSingleOutput('RealDiv', opAttrs, [a, b]);
    };
    NodeJSKernelBackend.prototype.floorDiv = function (a, b) {
        var opAttrs = [op_utils_1.createTypeOpAttr('T', types_1.upcastType(a.dtype, b.dtype))];
        return this.executeSingleOutput('FloorDiv', opAttrs, [a, b]);
    };
    NodeJSKernelBackend.prototype.divide = function (a, b) {
        var opAttrs = [op_utils_1.createTypeOpAttr('T', types_1.upcastType(a.dtype, b.dtype))];
        return this.executeSingleOutput('Div', opAttrs, [a, b]);
    };
    NodeJSKernelBackend.prototype.unsortedSegmentSum = function (x, segmentIds, numSegments) {
        var opAttrs = [
            op_utils_1.createTypeOpAttr('T', x.dtype), op_utils_1.createTypeOpAttr('Tindices', 'int32'),
            op_utils_1.createTypeOpAttr('Tnumsegments', 'int32')
        ];
        return this.executeSingleOutput('UnsortedSegmentSum', opAttrs, [x, segmentIds, tfjs_core_1.scalar(numSegments, 'int32')]);
    };
    NodeJSKernelBackend.prototype.sum = function (x, axes) {
        var axisTensor = tfjs_core_1.tensor1d(axes, 'int32');
        return this.executeSingleOutput('Sum', this.createReductionOpAttrs(x), [x, axisTensor]);
    };
    NodeJSKernelBackend.prototype.prod = function (x, axes) {
        var axesTensor = tfjs_core_1.tensor1d(axes, 'int32');
        var opAttrs = [
            { name: 'keep_dims', type: this.binding.TF_ATTR_BOOL, value: false },
            op_utils_1.createTypeOpAttr('T', x.dtype), op_utils_1.createTypeOpAttr('Tidx', 'int32')
        ];
        return this.executeSingleOutput('Prod', opAttrs, [x, axesTensor]);
    };
    NodeJSKernelBackend.prototype.argMin = function (x, axis) {
        var xInput = x.dtype === 'bool' ? x.toInt() : x;
        var axisScalar = tfjs_core_1.scalar(axis, 'int32');
        var opAttrs = [
            op_utils_1.createTypeOpAttr('T', xInput.dtype), op_utils_1.createTypeOpAttr('Tidx', 'int32'),
            op_utils_1.createTypeOpAttr('output_type', 'int32')
        ];
        return this.executeSingleOutput('ArgMin', opAttrs, [xInput, axisScalar]);
    };
    NodeJSKernelBackend.prototype.argMax = function (x, axis) {
        var xInput = x.dtype === 'bool' ? x.toInt() : x;
        var axisScalar = tfjs_core_1.scalar(axis, 'int32');
        var opAttrs = [
            op_utils_1.createTypeOpAttr('T', xInput.dtype), op_utils_1.createTypeOpAttr('Tidx', 'int32'),
            op_utils_1.createTypeOpAttr('output_type', 'int32')
        ];
        return this.executeSingleOutput('ArgMax', opAttrs, [xInput, axisScalar]);
    };
    NodeJSKernelBackend.prototype.equal = function (a, b) {
        var opAttrs = [op_utils_1.createTypeOpAttr('T', types_1.upcastType(a.dtype, b.dtype))];
        return this.executeSingleOutput('Equal', opAttrs, [a, b]);
    };
    NodeJSKernelBackend.prototype.notEqual = function (a, b) {
        var opAttrs = [op_utils_1.createTypeOpAttr('T', types_1.upcastType(a.dtype, b.dtype))];
        return this.executeSingleOutput('NotEqual', opAttrs, [a, b]);
    };
    NodeJSKernelBackend.prototype.less = function (a, b) {
        var opAttrs = [op_utils_1.createTypeOpAttr('T', types_1.upcastType(a.dtype, b.dtype))];
        return this.executeSingleOutput('Less', opAttrs, [a, b]);
    };
    NodeJSKernelBackend.prototype.lessEqual = function (a, b) {
        var opAttrs = [op_utils_1.createTypeOpAttr('T', types_1.upcastType(a.dtype, b.dtype))];
        return this.executeSingleOutput('LessEqual', opAttrs, [a, b]);
    };
    NodeJSKernelBackend.prototype.greater = function (a, b) {
        var opAttrs = [op_utils_1.createTypeOpAttr('T', types_1.upcastType(a.dtype, b.dtype))];
        return this.executeSingleOutput('Greater', opAttrs, [a, b]);
    };
    NodeJSKernelBackend.prototype.greaterEqual = function (a, b) {
        var opAttrs = [op_utils_1.createTypeOpAttr('T', types_1.upcastType(a.dtype, b.dtype))];
        return this.executeSingleOutput('GreaterEqual', opAttrs, [a, b]);
    };
    NodeJSKernelBackend.prototype.logicalNot = function (a) {
        return this.executeSingleOutput('LogicalNot', [], [a]);
    };
    NodeJSKernelBackend.prototype.logicalAnd = function (a, b) {
        return this.executeSingleOutput('LogicalAnd', [], [a, b]);
    };
    NodeJSKernelBackend.prototype.logicalOr = function (a, b) {
        return this.executeSingleOutput('LogicalOr', [], [a, b]);
    };
    NodeJSKernelBackend.prototype.where = function (condition) {
        return this.executeSingleOutput('Where', [], [condition]);
    };
    NodeJSKernelBackend.prototype.topKValues = function (x, k) {
        throw new Error('Method not implemented.');
    };
    NodeJSKernelBackend.prototype.topKIndices = function (x, k) {
        throw new Error('Method not implemented.');
    };
    NodeJSKernelBackend.prototype.topk = function (x, k, sorted) {
        var kCount = util_1.isNullOrUndefined(k) ? 1 : k;
        var isSorted = util_1.isNullOrUndefined(sorted) ? true : sorted;
        var opAttrs = [
            { name: 'sorted', type: this.binding.TF_ATTR_BOOL, value: isSorted },
            op_utils_1.createTypeOpAttr('T', x.dtype),
        ];
        var kTensor = tfjs_core_1.scalar(kCount, 'int32');
        return this.executeMultipleOutputs('TopKV2', opAttrs, [x, kTensor], 2);
    };
    NodeJSKernelBackend.prototype.min = function (x, axes) {
        var axesTensor = tfjs_core_1.tensor1d(axes, 'int32');
        return this.executeSingleOutput('Min', this.createReductionOpAttrs(x), [x, axesTensor]);
    };
    NodeJSKernelBackend.prototype.minimum = function (a, b) {
        var opAttrs = [op_utils_1.createTypeOpAttr('T', types_1.upcastType(a.dtype, b.dtype))];
        return this.executeSingleOutput('Minimum', opAttrs, [a, b]);
    };
    NodeJSKernelBackend.prototype.max = function (x, axes) {
        var axesTensor = tfjs_core_1.tensor1d(axes, 'int32');
        return this.executeSingleOutput('Max', this.createReductionOpAttrs(x), [x, axesTensor]);
    };
    NodeJSKernelBackend.prototype.maximum = function (a, b) {
        var opAttrs = [op_utils_1.createTypeOpAttr('T', types_1.upcastType(a.dtype, b.dtype))];
        return this.executeSingleOutput('Maximum', opAttrs, [a, b]);
    };
    NodeJSKernelBackend.prototype.all = function (x, axes) {
        var opAttrs = [
            { name: 'keep_dims', type: this.binding.TF_ATTR_BOOL, value: false },
            op_utils_1.createTypeOpAttr('Tidx', 'int32')
        ];
        var axesTensor = tfjs_core_1.tensor1d(axes, 'int32');
        return this.executeSingleOutput('All', opAttrs, [x, axesTensor]);
    };
    NodeJSKernelBackend.prototype.any = function (x, axes) {
        var opAttrs = [
            { name: 'keep_dims', type: this.binding.TF_ATTR_BOOL, value: false },
            op_utils_1.createTypeOpAttr('Tidx', 'int32')
        ];
        var axesTensor = tfjs_core_1.tensor1d(axes, 'int32');
        return this.executeSingleOutput('Any', opAttrs, [x, axesTensor]);
    };
    NodeJSKernelBackend.prototype.ceil = function (x) {
        return this.executeSingleInput('Ceil', x);
    };
    NodeJSKernelBackend.prototype.floor = function (x) {
        return this.executeSingleInput('Floor', x);
    };
    NodeJSKernelBackend.prototype.pow = function (a, b) {
        var dtype = types_1.upcastType(a.dtype, b.dtype);
        var opAttrs = [op_utils_1.createTypeOpAttr('T', dtype)];
        return this.executeSingleOutput('Pow', opAttrs, [a.cast(dtype), b.cast(dtype)]);
    };
    NodeJSKernelBackend.prototype.exp = function (x) {
        var xTensor = x.dtype === 'int32' ? x.toFloat() : x;
        return this.executeSingleInput('Exp', xTensor);
    };
    NodeJSKernelBackend.prototype.log = function (x) {
        return this.executeSingleInput('Log', x);
    };
    NodeJSKernelBackend.prototype.log1p = function (x) {
        return this.executeSingleInput('Log1p', x);
    };
    NodeJSKernelBackend.prototype.sqrt = function (x) {
        return this.executeSingleInput('Sqrt', x);
    };
    NodeJSKernelBackend.prototype.square = function (x) {
        return this.executeSingleInput('Square', x);
    };
    NodeJSKernelBackend.prototype.relu = function (x) {
        return this.executeSingleInput('Relu', x);
    };
    NodeJSKernelBackend.prototype.prelu = function (x, a) {
        var pos = this.relu(x);
        var neg = a.mul(x.sub(this.abs(x))).mul(0.5);
        return pos.add(neg);
    };
    NodeJSKernelBackend.prototype.elu = function (x) {
        return this.executeSingleInput('Elu', x);
    };
    NodeJSKernelBackend.prototype.eluDer = function (dy, y) {
        var opAttrs = [op_utils_1.createTypeOpAttr('T', y.dtype)];
        return this.executeSingleOutput('EluGrad', opAttrs, [dy, y]);
    };
    NodeJSKernelBackend.prototype.selu = function (x) {
        return this.executeSingleInput('Selu', x);
    };
    NodeJSKernelBackend.prototype.int = function (x) {
        throw new Error('Method not implemented.');
    };
    NodeJSKernelBackend.prototype.clip = function (x, min, max) {
        var xMin = this.minimum(x, tfjs_core_1.scalar(max));
        return this.maximum(xMin, tfjs_core_1.scalar(min));
    };
    NodeJSKernelBackend.prototype.abs = function (x) {
        return this.executeSingleInput('Abs', x);
    };
    NodeJSKernelBackend.prototype.complexAbs = function (x) {
        var opAttrs = [op_utils_1.createTypeOpAttr('T', x.dtype), op_utils_1.createTypeOpAttr('Tout', 'float32')];
        return this.executeSingleOutput('ComplexAbs', opAttrs, [x]);
    };
    NodeJSKernelBackend.prototype.sigmoid = function (x) {
        return this.executeSingleInput('Sigmoid', x);
    };
    NodeJSKernelBackend.prototype.sin = function (x) {
        return this.executeSingleInput('Sin', x);
    };
    NodeJSKernelBackend.prototype.cos = function (x) {
        return this.executeSingleInput('Cos', x);
    };
    NodeJSKernelBackend.prototype.tan = function (x) {
        return this.executeSingleInput('Tan', x);
    };
    NodeJSKernelBackend.prototype.asin = function (x) {
        return this.executeSingleInput('Asin', x);
    };
    NodeJSKernelBackend.prototype.acos = function (x) {
        return this.executeSingleInput('Acos', x);
    };
    NodeJSKernelBackend.prototype.atan = function (x) {
        return this.executeSingleInput('Atan', x);
    };
    NodeJSKernelBackend.prototype.sinh = function (x) {
        return this.executeSingleInput('Sinh', x);
    };
    NodeJSKernelBackend.prototype.cosh = function (x) {
        return this.executeSingleInput('Cosh', x);
    };
    NodeJSKernelBackend.prototype.tanh = function (x) {
        return this.executeSingleInput('Tanh', x);
    };
    NodeJSKernelBackend.prototype.mod = function (a, b) {
        var opAttrs = [op_utils_1.createTypeOpAttr('T', a.dtype)];
        return this.executeSingleOutput('FloorMod', opAttrs, [a, b]);
    };
    NodeJSKernelBackend.prototype.round = function (x) {
        return this.executeSingleInput('Round', x);
    };
    NodeJSKernelBackend.prototype.sign = function (x) {
        return this.executeSingleInput('Sign', x);
    };
    NodeJSKernelBackend.prototype.rsqrt = function (x) {
        return this.executeSingleInput('Rsqrt', x);
    };
    NodeJSKernelBackend.prototype.reciprocal = function (x) {
        return this.executeSingleInput('Reciprocal', x);
    };
    NodeJSKernelBackend.prototype.asinh = function (x) {
        return this.executeSingleInput('Asinh', x);
    };
    NodeJSKernelBackend.prototype.acosh = function (x) {
        return this.executeSingleInput('Acosh', x);
    };
    NodeJSKernelBackend.prototype.atanh = function (x) {
        return this.executeSingleInput('Atanh', x);
    };
    NodeJSKernelBackend.prototype.erf = function (x) {
        return this.executeSingleInput('Erf', x);
    };
    NodeJSKernelBackend.prototype.squaredDifference = function (a, b) {
        var opAttrs = [op_utils_1.createTypeOpAttr('T', a.dtype)];
        return this.executeSingleOutput('SquaredDifference', opAttrs, [a, b]);
    };
    NodeJSKernelBackend.prototype.expm1 = function (x) {
        return this.executeSingleInput('Expm1', x);
    };
    NodeJSKernelBackend.prototype.softplus = function (x) {
        return this.executeSingleInput('Softplus', x);
    };
    NodeJSKernelBackend.prototype.atan2 = function (a, b) {
        var opAttrs = [op_utils_1.createTypeOpAttr('T', a.dtype)];
        return this.executeSingleOutput('Atan2', opAttrs, [a, b]);
    };
    NodeJSKernelBackend.prototype.step = function (x, alpha) {
        var dtype = x.dtype;
        var nans = this.isNaN(x);
        var stepNoNans = this.select(this.greater(x, tfjs_core_1.scalar(0, dtype)), tfjs_core_1.ones(x.shape), tfjs_core_1.fill(x.shape, alpha, dtype));
        return this.select(nans, x, stepNoNans);
    };
    NodeJSKernelBackend.prototype.conv2d = function (x, filter, convInfo) {
        if (convInfo.padInfo.type !== 'VALID' && convInfo.padInfo.type !== 'SAME') {
            throw new Error("TF Backend supports only 'valid' and 'same' padding " +
                ("while padding was " + convInfo.padInfo.type));
        }
        var strides = [1, convInfo.strideHeight, convInfo.strideWidth, 1];
        var padding = convInfo.padInfo.type;
        var dataFormat = convInfo.dataFormat === 'channelsLast' ? 'NHWC' : 'NCHW';
        var dilations = [1, convInfo.dilationHeight, convInfo.dilationWidth, 1];
        var opAttrs = [
            op_utils_1.createTypeOpAttr('T', x.dtype),
            { name: 'strides', type: this.binding.TF_ATTR_INT, value: strides },
            { name: 'padding', type: this.binding.TF_ATTR_STRING, value: padding },
            {
                name: 'data_format',
                type: this.binding.TF_ATTR_STRING,
                value: dataFormat
            },
            { name: 'use_cudnn_on_gpu', type: this.binding.TF_ATTR_BOOL, value: true },
            { name: 'dilations', type: this.binding.TF_ATTR_INT, value: dilations },
        ];
        return this.executeSingleOutput('Conv2D', opAttrs, [x, filter]);
    };
    NodeJSKernelBackend.prototype.conv2dDerInput = function (dy, filter, convInfo) {
        if (convInfo.padInfo.type !== 'VALID' && convInfo.padInfo.type !== 'SAME') {
            throw new Error("TF Backend supports only 'valid' and 'same' padding " +
                ("while padding was " + convInfo.padInfo.type));
        }
        var strides = [1, convInfo.strideHeight, convInfo.strideWidth, 1];
        var padding = convInfo.padInfo.type;
        var dataFormat = convInfo.dataFormat === 'channelsLast' ? 'NHWC' : 'NCHW';
        var dilations = [1, convInfo.dilationHeight, convInfo.dilationWidth, 1];
        var opAttrs = [
            op_utils_1.createTypeOpAttr('T', 'float32'),
            { name: 'strides', type: this.binding.TF_ATTR_INT, value: strides },
            { name: 'padding', type: this.binding.TF_ATTR_STRING, value: padding }, {
                name: 'data_format',
                type: this.binding.TF_ATTR_STRING,
                value: dataFormat
            },
            { name: 'use_cudnn_on_gpu', type: this.binding.TF_ATTR_BOOL, value: true },
            { name: 'dilations', type: this.binding.TF_ATTR_INT, value: dilations }
        ];
        var inputSizes = tfjs_core_1.tensor1d(convInfo.inShape, 'int32');
        return this.executeSingleOutput('Conv2DBackpropInput', opAttrs, [inputSizes, filter, dy]);
    };
    NodeJSKernelBackend.prototype.conv2dDerFilter = function (x, dy, convInfo) {
        if (convInfo.padInfo.type !== 'VALID' && convInfo.padInfo.type !== 'SAME') {
            throw new Error("TF Backend supports only 'valid' and 'same' padding " +
                ("while padding was " + convInfo.padInfo.type));
        }
        var strides = [1, convInfo.strideHeight, convInfo.strideWidth, 1];
        var padding = convInfo.padInfo.type;
        var dataFormat = convInfo.dataFormat === 'channelsLast' ? 'NHWC' : 'NCHW';
        var dilations = [1, convInfo.dilationHeight, convInfo.dilationWidth, 1];
        var opAttrs = [
            op_utils_1.createTypeOpAttr('T', 'float32'),
            { name: 'strides', type: this.binding.TF_ATTR_INT, value: strides },
            { name: 'padding', type: this.binding.TF_ATTR_STRING, value: padding }, {
                name: 'data_format',
                type: this.binding.TF_ATTR_STRING,
                value: dataFormat
            },
            { name: 'use_cudnn_on_gpu', type: this.binding.TF_ATTR_BOOL, value: true },
            { name: 'dilations', type: this.binding.TF_ATTR_INT, value: dilations }
        ];
        var filterSizes = tfjs_core_1.tensor1d(convInfo.filterShape, 'int32');
        return this.executeSingleOutput('Conv2DBackpropFilter', opAttrs, [x, filterSizes, dy]);
    };
    NodeJSKernelBackend.prototype.depthwiseConv2DDerInput = function (dy, filter, convInfo) {
        var strides = [1, convInfo.strideHeight, convInfo.strideWidth, 1];
        var padding = convInfo.padInfo.type;
        var dataFormat = convInfo.dataFormat === 'channelsLast' ? 'NHWC' : 'NCHW';
        var dilations = [1, convInfo.dilationHeight, convInfo.dilationWidth, 1];
        var opAttrs = [
            op_utils_1.createTypeOpAttr('T', 'float32'),
            { name: 'strides', type: this.binding.TF_ATTR_INT, value: strides },
            { name: 'padding', type: this.binding.TF_ATTR_STRING, value: padding }, {
                name: 'data_format',
                type: this.binding.TF_ATTR_STRING,
                value: dataFormat
            },
            { name: 'dilations', type: this.binding.TF_ATTR_INT, value: dilations }
        ];
        var inputSizes = tfjs_core_1.tensor1d(convInfo.inShape, 'int32');
        return this.executeSingleOutput('DepthwiseConv2dNativeBackpropInput', opAttrs, [inputSizes, filter, dy]);
    };
    NodeJSKernelBackend.prototype.depthwiseConv2DDerFilter = function (x, dY, convInfo) {
        var strides = [1, convInfo.strideHeight, convInfo.strideWidth, 1];
        var padding = convInfo.padInfo.type;
        var dataFormat = convInfo.dataFormat === 'channelsLast' ? 'NHWC' : 'NCHW';
        var dilations = [1, convInfo.dilationHeight, convInfo.dilationWidth, 1];
        var opAttrs = [
            op_utils_1.createTypeOpAttr('T', 'float32'),
            { name: 'strides', type: this.binding.TF_ATTR_INT, value: strides },
            { name: 'padding', type: this.binding.TF_ATTR_STRING, value: padding }, {
                name: 'data_format',
                type: this.binding.TF_ATTR_STRING,
                value: dataFormat
            },
            { name: 'dilations', type: this.binding.TF_ATTR_INT, value: dilations }
        ];
        var filterSizes = tfjs_core_1.tensor1d(convInfo.filterShape, 'int32');
        return this.executeSingleOutput('DepthwiseConv2dNativeBackpropFilter', opAttrs, [x, filterSizes, dY]);
    };
    NodeJSKernelBackend.prototype.depthwiseConv2D = function (input, filter, convInfo) {
        if (convInfo.padInfo.type !== 'VALID' && convInfo.padInfo.type !== 'SAME') {
            throw new Error("TF Backend supports only 'valid' and 'same' padding " +
                ("while padding was " + convInfo.padInfo.type));
        }
        var strides = [1, convInfo.strideHeight, convInfo.strideWidth, 1];
        var padding = convInfo.padInfo.type;
        var dataFormat = convInfo.dataFormat === 'channelsLast' ? 'NHWC' : 'NCHW';
        var dilations = [1, convInfo.dilationHeight, convInfo.dilationWidth, 1];
        var opAttrs = [
            op_utils_1.createTypeOpAttr('T', input.dtype),
            { name: 'strides', type: this.binding.TF_ATTR_INT, value: strides },
            { name: 'padding', type: this.binding.TF_ATTR_STRING, value: padding }, {
                name: 'data_format',
                type: this.binding.TF_ATTR_STRING,
                value: dataFormat
            },
            { name: 'dilations', type: this.binding.TF_ATTR_INT, value: dilations }
        ];
        return this.executeSingleOutput('DepthwiseConv2dNative', opAttrs, [input, filter]);
    };
    NodeJSKernelBackend.prototype.conv3d = function (x, filter, convInfo) {
        var strides = [
            1, convInfo.strideDepth, convInfo.strideHeight, convInfo.strideWidth, 1
        ];
        var padding = convInfo.padInfo.type;
        var dataFormat = convInfo.dataFormat === 'channelsLast' ? 'NDHWC' : 'NCDHW';
        if (!this.isGPUPackage && convInfo.dilationDepth > 1) {
            throw new Error('CPU Dilation depth must be 1');
        }
        var dilations = [
            1, convInfo.dilationDepth, convInfo.dilationHeight,
            convInfo.dilationWidth, 1
        ];
        var opAttrs = [
            op_utils_1.createTypeOpAttr('T', x.dtype),
            { name: 'strides', type: this.binding.TF_ATTR_INT, value: strides },
            { name: 'padding', type: this.binding.TF_ATTR_STRING, value: padding }, {
                name: 'data_format',
                type: this.binding.TF_ATTR_STRING,
                value: dataFormat
            },
            { name: 'dilations', type: this.binding.TF_ATTR_INT, value: dilations }
        ];
        return this.executeSingleOutput('Conv3D', opAttrs, [x, filter]);
    };
    NodeJSKernelBackend.prototype.conv3dDerInput = function (dy, filter, convInfo) {
        var strides = [
            1, convInfo.strideDepth, convInfo.strideHeight, convInfo.strideWidth, 1
        ];
        var padding = convInfo.padInfo.type;
        var dataFormat = convInfo.dataFormat === 'channelsLast' ? 'NDHWC' : 'NCDHW';
        if (!this.isGPUPackage && convInfo.dilationDepth > 1) {
            throw new Error('CPU Dilation depth must be 1');
        }
        var dilations = [
            1, convInfo.dilationDepth, convInfo.dilationHeight,
            convInfo.dilationWidth, 1
        ];
        var opAttrs = [
            op_utils_1.createTypeOpAttr('T', dy.dtype),
            { name: 'strides', type: this.binding.TF_ATTR_INT, value: strides },
            { name: 'padding', type: this.binding.TF_ATTR_STRING, value: padding }, {
                name: 'data_format',
                type: this.binding.TF_ATTR_STRING,
                value: dataFormat
            },
            { name: 'dilations', type: this.binding.TF_ATTR_INT, value: dilations },
            op_utils_1.createTypeOpAttr('Tshape', 'int32')
        ];
        var inputSizes = tfjs_core_1.tensor1d(convInfo.inShape, 'int32');
        return this.executeSingleOutput('Conv3DBackpropInputV2', opAttrs, [inputSizes, filter, dy]);
    };
    NodeJSKernelBackend.prototype.conv3dDerFilter = function (x, dY, convInfo) {
        var strides = [
            1, convInfo.strideDepth, convInfo.strideHeight, convInfo.strideWidth, 1
        ];
        var padding = convInfo.padInfo.type;
        var dataFormat = convInfo.dataFormat === 'channelsLast' ? 'NDHWC' : 'NCDHW';
        if (!this.isGPUPackage && convInfo.dilationDepth > 1) {
            throw new Error('CPU Dilation depth must be 1');
        }
        var dilations = [
            1, convInfo.dilationDepth, convInfo.dilationHeight,
            convInfo.dilationWidth, 1
        ];
        var opAttrs = [
            op_utils_1.createTypeOpAttr('T', x.dtype),
            { name: 'strides', type: this.binding.TF_ATTR_INT, value: strides },
            { name: 'padding', type: this.binding.TF_ATTR_STRING, value: padding }, {
                name: 'data_format',
                type: this.binding.TF_ATTR_STRING,
                value: dataFormat
            },
            { name: 'dilations', type: this.binding.TF_ATTR_INT, value: dilations }
        ];
        var filterSizes = tfjs_core_1.tensor1d(convInfo.filterShape, 'int32');
        return this.executeSingleOutput('Conv3DBackpropFilterV2', opAttrs, [x, filterSizes, dY]);
    };
    NodeJSKernelBackend.prototype.maxPool = function (x, convInfo) {
        if (convInfo.padInfo.type !== 'VALID' && convInfo.padInfo.type !== 'SAME') {
            throw new Error("TF Backend supports only 'valid' and 'same' padding " +
                ("while padding was " + convInfo.padInfo.type));
        }
        var ksize = [1, convInfo.filterHeight, convInfo.filterWidth, 1];
        var strides = [1, convInfo.strideHeight, convInfo.strideWidth, 1];
        var padding = convInfo.padInfo.type;
        var dataFormat = convInfo.dataFormat === 'channelsLast' ? 'NHWC' : 'NCHW';
        var opAttrs = [
            op_utils_1.createTypeOpAttr('T', x.dtype),
            { name: 'ksize', type: this.binding.TF_ATTR_INT, value: ksize },
            { name: 'strides', type: this.binding.TF_ATTR_INT, value: strides },
            { name: 'padding', type: this.binding.TF_ATTR_STRING, value: padding }, {
                name: 'data_format',
                type: this.binding.TF_ATTR_STRING,
                value: dataFormat
            }
        ];
        return this.executeSingleOutput('MaxPool', opAttrs, [x]);
    };
    NodeJSKernelBackend.prototype.maxPoolBackprop = function (dy, x, y, convInfo) {
        if (convInfo.padInfo.type !== 'VALID' && convInfo.padInfo.type !== 'SAME') {
            throw new Error("TF Backend supports only 'valid' and 'same' padding " +
                ("while padding type was " + convInfo.padInfo.type));
        }
        var ksize = [1, convInfo.filterHeight, convInfo.filterWidth, 1];
        var strides = [1, convInfo.strideHeight, convInfo.strideWidth, 1];
        var padding = convInfo.padInfo.type;
        var dataFormat = convInfo.dataFormat === 'channelsLast' ? 'NHWC' : 'NCHW';
        var opAttrs = [
            op_utils_1.createTypeOpAttr('T', x.dtype),
            { name: 'ksize', type: this.binding.TF_ATTR_INT, value: ksize },
            { name: 'strides', type: this.binding.TF_ATTR_INT, value: strides },
            { name: 'padding', type: this.binding.TF_ATTR_STRING, value: padding },
            {
                name: 'data_format',
                type: this.binding.TF_ATTR_STRING,
                value: dataFormat
            },
        ];
        return this.executeSingleOutput('MaxPoolGrad', opAttrs, [x, y, dy]);
    };
    NodeJSKernelBackend.prototype.avgPool = function (x, convInfo) {
        if (convInfo.padInfo.type !== 'VALID' && convInfo.padInfo.type !== 'SAME') {
            throw new Error("TF Backend supports only 'valid' and 'same' padding " +
                ("while padding was " + convInfo.padInfo.type));
        }
        var ksize = [1, convInfo.filterHeight, convInfo.filterWidth, 1];
        var strides = [1, convInfo.strideHeight, convInfo.strideWidth, 1];
        var padding = convInfo.padInfo.type;
        var dataFormat = convInfo.dataFormat === 'channelsLast' ? 'NHWC' : 'NCHW';
        var opAttrs = [
            op_utils_1.createTypeOpAttr('T', x.dtype),
            { name: 'ksize', type: this.binding.TF_ATTR_INT, value: ksize },
            { name: 'strides', type: this.binding.TF_ATTR_INT, value: strides },
            { name: 'padding', type: this.binding.TF_ATTR_STRING, value: padding },
            {
                name: 'data_format',
                type: this.binding.TF_ATTR_STRING,
                value: dataFormat
            },
        ];
        return this.executeSingleOutput('AvgPool', opAttrs, [x]);
    };
    NodeJSKernelBackend.prototype.avgPoolBackprop = function (dy, x, convInfo) {
        if (convInfo.padInfo.type !== 'VALID' && convInfo.padInfo.type !== 'SAME') {
            throw new Error("TF Backend supports only 'valid' and 'same' padding " +
                ("while padding type was " + convInfo.padInfo.type));
        }
        var ksize = [1, convInfo.filterHeight, convInfo.filterWidth, 1];
        var strides = [1, convInfo.strideHeight, convInfo.strideWidth, 1];
        var padding = convInfo.padInfo.type;
        var dataFormat = convInfo.dataFormat === 'channelsLast' ? 'NHWC' : 'NCHW';
        var opAttrs = [
            op_utils_1.createTypeOpAttr('T', x.dtype),
            { name: 'ksize', type: this.binding.TF_ATTR_INT, value: ksize },
            { name: 'strides', type: this.binding.TF_ATTR_INT, value: strides },
            { name: 'padding', type: this.binding.TF_ATTR_STRING, value: padding },
            {
                name: 'data_format',
                type: this.binding.TF_ATTR_STRING,
                value: dataFormat
            },
        ];
        var origInputShape = tfjs_core_1.tensor1d(x.shape, 'int32');
        return this.executeSingleOutput('AvgPoolGrad', opAttrs, [origInputShape, dy]);
    };
    NodeJSKernelBackend.prototype.reshape = function (x, shape) {
        var shapeTensor = tfjs_core_1.tensor1d(shape, 'int32');
        var opAttrs = [
            op_utils_1.createTypeOpAttr('T', x.dtype),
            op_utils_1.createTypeOpAttr('Tshape', shapeTensor.dtype)
        ];
        return this.executeSingleOutput('Reshape', opAttrs, [x, shapeTensor]);
    };
    NodeJSKernelBackend.prototype.cast = function (x, dtype) {
        var opAttrs = [
            op_utils_1.createTypeOpAttr('SrcT', x.dtype), op_utils_1.createTypeOpAttr('DstT', dtype),
            { name: 'Truncate', type: this.binding.TF_ATTR_BOOL, value: false }
        ];
        return this.executeSingleOutput('Cast', opAttrs, [x]);
    };
    NodeJSKernelBackend.prototype.tile = function (x, reps) {
        var opAttrs = [
            op_utils_1.createTypeOpAttr('T', x.dtype), op_utils_1.createTypeOpAttr('Tmultiples', 'int32')
        ];
        var multiples = tfjs_core_1.tensor1d(reps, 'int32');
        return this.executeSingleOutput('Tile', opAttrs, [x, multiples]);
    };
    NodeJSKernelBackend.prototype.pad = function (x, paddings, constantValue) {
        var paddingsTensor = tfjs_core_1.tensor2d(paddings, [paddings.length, 2], 'int32');
        var constantTensor = tfjs_core_1.scalar(constantValue, x.dtype);
        var opAttrs = [
            op_utils_1.createTypeOpAttr('T', x.dtype),
            op_utils_1.createTypeOpAttr('Tpaddings', paddingsTensor.dtype)
        ];
        return this.executeSingleOutput('PadV2', opAttrs, [x, paddingsTensor, constantTensor]);
    };
    NodeJSKernelBackend.prototype.transpose = function (x, perm) {
        var permTensor = tfjs_core_1.tensor1d(perm, 'int32');
        var opAttrs = [op_utils_1.createTypeOpAttr('T', x.dtype), op_utils_1.createTypeOpAttr('Tperm', 'int32')];
        return this.executeSingleOutput('Transpose', opAttrs, [x, permTensor]);
    };
    NodeJSKernelBackend.prototype.gather = function (x, indices, axis) {
        var axisTensor = tfjs_core_1.scalar(axis, 'int32');
        var opAttrs = [
            op_utils_1.createTypeOpAttr('Tparams', x.dtype),
            op_utils_1.createTypeOpAttr('Tindices', indices.dtype),
            op_utils_1.createTypeOpAttr('Taxis', 'int32')
        ];
        return this.executeSingleOutput('GatherV2', opAttrs, [x, indices, axisTensor]);
    };
    NodeJSKernelBackend.prototype.gatherND = function (x, indices) {
        var opAttrs = [
            op_utils_1.createTypeOpAttr('Tparams', x.dtype),
            op_utils_1.createTypeOpAttr('Tindices', 'int32')
        ];
        return this.executeSingleOutput('GatherNd', opAttrs, [x, indices]);
    };
    NodeJSKernelBackend.prototype.scatterND = function (indices, updates, shape) {
        var opAttrs = [
            op_utils_1.createTypeOpAttr('T', updates.dtype),
            op_utils_1.createTypeOpAttr('Tindices', 'int32')
        ];
        var shapeTensor = tfjs_core_1.tensor1d(shape, 'int32');
        return this.executeSingleOutput('ScatterNd', opAttrs, [indices, updates, shapeTensor]);
    };
    NodeJSKernelBackend.prototype.batchToSpaceND = function (x, blockShape, crops) {
        var blockShapeTensor = tfjs_core_1.tensor1d(blockShape, 'int32');
        var cropsTensor = tfjs_core_1.tensor2d(crops, [crops.length, crops[0].length], 'int32');
        var opAttrs = [
            op_utils_1.createTypeOpAttr('T', x.dtype), op_utils_1.createTypeOpAttr('Tblock_shape', 'int32'),
            op_utils_1.createTypeOpAttr('Tcrops', cropsTensor.dtype)
        ];
        return this.executeSingleOutput('BatchToSpaceND', opAttrs, [x, blockShapeTensor, cropsTensor]);
    };
    NodeJSKernelBackend.prototype.spaceToBatchND = function (x, blockShape, paddings) {
        var blockShapeTensor = tfjs_core_1.tensor1d(blockShape, 'int32');
        var paddingsTensor = tfjs_core_1.tensor2d(paddings, [paddings.length, paddings[0].length], 'int32');
        var opAttrs = [
            op_utils_1.createTypeOpAttr('T', x.dtype), op_utils_1.createTypeOpAttr('Tblock_shape', 'int32'),
            op_utils_1.createTypeOpAttr('Tpaddings', paddingsTensor.dtype)
        ];
        return this.executeSingleOutput('SpaceToBatchND', opAttrs, [x, blockShapeTensor, paddingsTensor]);
    };
    NodeJSKernelBackend.prototype.resizeBilinear = function (x, newHeight, newWidth, alignCorners) {
        var opAttrs = [
            op_utils_1.createTypeOpAttr('T', x.dtype),
            {
                name: 'align_corners',
                type: this.binding.TF_ATTR_BOOL,
                value: alignCorners
            },
        ];
        var size = tfjs_core_1.tensor1d([newHeight, newWidth], 'int32');
        return this.executeSingleOutput('ResizeBilinear', opAttrs, [x, size]);
    };
    NodeJSKernelBackend.prototype.resizeBilinearBackprop = function (dy, x, alignCorners) {
        var opAttrs = [
            op_utils_1.createTypeOpAttr('T', x.dtype), {
                name: 'align_corners',
                type: this.binding.TF_ATTR_BOOL,
                value: alignCorners
            }
        ];
        return this.executeSingleOutput('ResizeBilinearGrad', opAttrs, [dy, x]);
    };
    NodeJSKernelBackend.prototype.resizeNearestNeighbor = function (x, newHeight, newWidth, alignCorners) {
        var opAttrs = [
            op_utils_1.createTypeOpAttr('T', x.dtype),
            {
                name: 'align_corners',
                type: this.binding.TF_ATTR_BOOL,
                value: alignCorners
            },
        ];
        var size = tfjs_core_1.tensor1d([newHeight, newWidth], 'int32');
        return this.executeSingleOutput('ResizeNearestNeighbor', opAttrs, [x, size]);
    };
    NodeJSKernelBackend.prototype.resizeNearestNeighborBackprop = function (dy, x, alignCorners) {
        var opAttrs = [
            op_utils_1.createTypeOpAttr('T', x.dtype), {
                name: 'align_corners',
                type: this.binding.TF_ATTR_BOOL,
                value: alignCorners
            }
        ];
        var _a = x.shape, origHeight = _a[1], origWidth = _a[2];
        var size = tfjs_core_1.tensor1d([origHeight, origWidth], 'int32');
        return this.executeSingleOutput('ResizeNearestNeighborGrad', opAttrs, [dy, size]);
    };
    NodeJSKernelBackend.prototype.batchNormalization = function (x, mean, variance, varianceEpsilon, scale, offset) {
        if (mean.rank > 1) {
            var inv = tfjs_core_1.rsqrt(variance.add(tfjs_core_1.scalar(varianceEpsilon)));
            if (scale != null) {
                inv = inv.mul(scale);
            }
            var xNorm = x.sub(mean).mul(inv);
            return offset != null ? xNorm.add(offset) : xNorm;
        }
        var dataFormat = 'NHWC';
        var depth = x.shape[3];
        var opAttrs = [
            op_utils_1.createTypeOpAttr('T', x.dtype),
            {
                name: 'epsilon',
                type: this.binding.TF_ATTR_FLOAT,
                value: varianceEpsilon
            },
            {
                name: 'data_format',
                type: this.binding.TF_ATTR_STRING,
                value: dataFormat
            },
            { name: 'is_training', type: this.binding.TF_ATTR_BOOL, value: false },
        ];
        var numOutputs = 5;
        if (scale == null) {
            scale = tfjs_core_1.fill([depth], 1);
        }
        if (offset == null) {
            offset = tfjs_core_1.fill([depth], 0);
        }
        return this.executeMultipleOutputs('FusedBatchNorm', opAttrs, [x, scale, offset, mean, variance], numOutputs)[0];
    };
    NodeJSKernelBackend.prototype.localResponseNormalization4D = function (x, radius, bias, alpha, beta) {
        var opAttrs = [
            op_utils_1.createTypeOpAttr('T', x.dtype),
            { name: 'depth_radius', type: this.binding.TF_ATTR_INT, value: radius },
            { name: 'bias', type: this.binding.TF_ATTR_FLOAT, value: bias },
            { name: 'alpha', type: this.binding.TF_ATTR_FLOAT, value: alpha },
            { name: 'beta', type: this.binding.TF_ATTR_FLOAT, value: beta },
        ];
        return this.executeSingleOutput('LRN', opAttrs, [x]);
    };
    NodeJSKernelBackend.prototype.LRNGrad = function (dy, inputImage, outputImage, radius, bias, alpha, beta) {
        var opAttrs = [
            op_utils_1.createTypeOpAttr('T', dy.dtype),
            { name: 'depth_radius', type: this.binding.TF_ATTR_INT, value: radius },
            { name: 'bias', type: this.binding.TF_ATTR_FLOAT, value: bias },
            { name: 'alpha', type: this.binding.TF_ATTR_FLOAT, value: alpha },
            { name: 'beta', type: this.binding.TF_ATTR_FLOAT, value: beta },
        ];
        return this.executeSingleOutput('LRNGrad', opAttrs, [dy, inputImage, outputImage]);
    };
    NodeJSKernelBackend.prototype.multinomial = function (logits, normalized, numSamples, seed) {
        if (normalized) {
            throw new Error('TF Node backend does not support normalized logits ' +
                'passed to multinomial');
        }
        var opAttrs = [
            op_utils_1.createTypeOpAttr('T', logits.dtype),
            op_utils_1.createTypeOpAttr('output_dtype', 'int32'),
            { name: 'seed', type: this.binding.TF_ATTR_INT, value: seed },
            { name: 'seed2', type: this.binding.TF_ATTR_INT, value: seed * seed },
        ];
        return this.executeSingleOutput('Multinomial', opAttrs, [logits, tfjs_core_1.scalar(numSamples, 'int32')]);
    };
    NodeJSKernelBackend.prototype.oneHot = function (indices, depth, onValue, offValue) {
        var depthTensor = tfjs_core_1.scalar(depth, 'int32');
        var onValueTensor = tfjs_core_1.scalar(onValue, 'int32');
        var offValueTensor = tfjs_core_1.scalar(offValue, 'int32');
        var opAttrs = [
            { name: 'axis', type: this.binding.TF_ATTR_INT, value: -1 },
            op_utils_1.createTypeOpAttr('T', indices.dtype),
            op_utils_1.createTypeOpAttr('TI', indices.dtype)
        ];
        return this.executeSingleOutput('OneHot', opAttrs, [
            indices, depthTensor, onValueTensor, offValueTensor
        ]);
    };
    NodeJSKernelBackend.prototype.cumsum = function (x, axis, exclusive, reverse) {
        var axisTensor = tfjs_core_1.scalar(axis, 'int32');
        var opAttrs = [
            { name: 'exclusive', type: this.binding.TF_ATTR_BOOL, value: exclusive },
            { name: 'reverse', type: this.binding.TF_ATTR_BOOL, value: reverse },
            op_utils_1.createTypeOpAttr('T', x.dtype), op_utils_1.createTypeOpAttr('Tidx', 'int32')
        ];
        return this.executeSingleOutput('Cumsum', opAttrs, [x, axisTensor]);
    };
    NodeJSKernelBackend.prototype.nonMaxSuppression = function (boxes, scores, maxOutputSize, iouThreshold, scoreThreshold) {
        var opAttrs = [op_utils_1.createTypeOpAttr('T', boxes.dtype)];
        var maxOutputSizeTensor = tfjs_core_1.scalar(maxOutputSize, 'int32');
        var iouThresholdTensor = tfjs_core_1.scalar(iouThreshold);
        var scoreThresholdTensor = tfjs_core_1.scalar(scoreThreshold);
        return this.executeSingleOutput('NonMaxSuppressionV3', opAttrs, [
            boxes, scores, maxOutputSizeTensor, iouThresholdTensor,
            scoreThresholdTensor
        ]);
    };
    NodeJSKernelBackend.prototype.fft = function (x) {
        var opAttrs = [op_utils_1.createTypeOpAttr('Tcomplex', x.dtype)];
        return this.executeSingleOutput('FFT', opAttrs, [x]);
    };
    NodeJSKernelBackend.prototype.ifft = function (x) {
        var opAttrs = [op_utils_1.createTypeOpAttr('Tcomplex', x.dtype)];
        return this.executeSingleOutput('IFFT', opAttrs, [x]);
    };
    NodeJSKernelBackend.prototype.complex = function (real, imag) {
        var opAttrs = [
            op_utils_1.createTensorsTypeOpAttr('T', real),
            {
                name: 'Tout',
                type: this.binding.TF_ATTR_TYPE,
                value: this.binding.TF_COMPLEX64
            },
        ];
        var inputs = [real, imag];
        return this.executeSingleOutput('Complex', opAttrs, inputs);
    };
    NodeJSKernelBackend.prototype.real = function (input) {
        var opAttrs = [
            op_utils_1.createTensorsTypeOpAttr('T', input), {
                name: 'Tout',
                type: this.binding.TF_ATTR_TYPE,
                value: this.binding.TF_FLOAT
            }
        ];
        var inputs = [input];
        return this.executeSingleOutput('Real', opAttrs, inputs);
    };
    NodeJSKernelBackend.prototype.imag = function (input) {
        var opAttrs = [
            {
                name: 'T',
                type: this.binding.TF_ATTR_TYPE,
                value: this.binding.TF_COMPLEX64
            },
            {
                name: 'Tout',
                type: this.binding.TF_ATTR_TYPE,
                value: this.binding.TF_FLOAT
            }
        ];
        var inputs = [input];
        return this.executeSingleOutput('Imag', opAttrs, inputs);
    };
    NodeJSKernelBackend.prototype.cropAndResize = function (image, boxes, boxIndex, cropSize, method, extrapolationValue) {
        var opAttrs = [
            op_utils_1.createTypeOpAttr('T', image.dtype),
            { name: 'method', type: this.binding.TF_ATTR_STRING, value: method }, {
                name: 'extrapolation_value',
                type: this.binding.TF_ATTR_FLOAT,
                value: extrapolationValue
            }
        ];
        var cropSizeTensor = tfjs_core_1.tensor1d(cropSize, 'int32');
        return this.executeSingleOutput('CropAndResize', opAttrs, [image, boxes, boxIndex, cropSizeTensor]);
    };
    NodeJSKernelBackend.prototype.depthToSpace = function (x, blockSize, dataFormat) {
        var opAttrs = [
            op_utils_1.createTensorsTypeOpAttr('T', x), {
                name: 'block_size',
                type: this.binding.TF_ATTR_INT,
                value: blockSize < 2 ? 2 : blockSize
            },
            {
                name: 'data_format',
                type: this.binding.TF_ATTR_STRING,
                value: dataFormat
            }
        ];
        var inputs = [x];
        return this.executeSingleOutput('DepthToSpace', opAttrs, inputs);
    };
    NodeJSKernelBackend.prototype.split = function (value, sizeSplits, axis) {
        var opAttrs = [
            {
                name: 'num_split',
                type: this.binding.TF_ATTR_INT,
                value: sizeSplits.length
            },
            op_utils_1.createTensorsTypeOpAttr('T', value), {
                name: 'Tlen',
                type: this.binding.TF_ATTR_TYPE,
                value: this.binding.TF_INT32
            }
        ];
        var inputs = [value];
        inputs.push(tfjs_core_1.tensor1d(sizeSplits, 'int32'));
        inputs.push(tfjs_core_1.scalar(axis, 'int32'));
        return this.executeMultipleOutputs('SplitV', opAttrs, inputs, sizeSplits.length);
    };
    NodeJSKernelBackend.prototype.sparseToDense = function (sparseIndices, sparseValues, outputShape, defaultValue) {
        var opAttrs = [
            { name: 'validate_indices', type: this.binding.TF_ATTR_BOOL, value: true },
            op_utils_1.createTypeOpAttr('T', sparseValues.dtype),
            op_utils_1.createTypeOpAttr('Tindices', sparseIndices.dtype)
        ];
        var outputShapeTensor = tfjs_core_1.tensor1d(outputShape, 'int32');
        return this.executeSingleOutput('SparseToDense', opAttrs, [
            sparseIndices, outputShapeTensor, sparseValues, defaultValue
        ]);
    };
    NodeJSKernelBackend.prototype.fromPixels = function (pixels, numChannels) {
        if (pixels == null) {
            throw new Error('pixels passed to tf.fromPixels() can not be null');
        }
        if (pixels.getContext == null) {
            throw new Error('When running in node, pixels must be an HTMLCanvasElement ' +
                'like the one returned by the `canvas` npm package');
        }
        var vals = pixels
            .getContext('2d')
            .getImageData(0, 0, pixels.width, pixels.height)
            .data;
        var values;
        if (numChannels === 4) {
            values = new Int32Array(vals);
        }
        else {
            var numPixels = pixels.width * pixels.height;
            values = new Int32Array(numPixels * numChannels);
            for (var i = 0; i < numPixels; i++) {
                for (var channel = 0; channel < numChannels; ++channel) {
                    values[i * numChannels + channel] = vals[i * 4 + channel];
                }
            }
        }
        var outShape = [pixels.height, pixels.width, numChannels];
        return tfjs_core_1.tensor3d(values, outShape, 'int32');
    };
    NodeJSKernelBackend.prototype.memory = function () {
        return { unreliable: true };
    };
    NodeJSKernelBackend.prototype.time = function (f) {
        return __awaiter(this, void 0, void 0, function () {
            var start, elapsed;
            return __generator(this, function (_a) {
                start = process.hrtime();
                f();
                elapsed = process.hrtime(start);
                return [2, { kernelMs: elapsed[0] * 1000 + elapsed[1] / 1000000 }];
            });
        });
    };
    NodeJSKernelBackend.prototype.isNaN = function (x) {
        return this.executeSingleInput('IsNan', x);
    };
    return NodeJSKernelBackend;
}(tfjs_core_1.KernelBackend));
exports.NodeJSKernelBackend = NodeJSKernelBackend;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../process/browser.js */ "../../node_modules/process/browser.js")))

/***/ }),

/***/ "../../node_modules/@tensorflow/tfjs-node-gpu/dist/ops/op_utils.js":
/*!******************************************************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/@tensorflow/tfjs-node-gpu/dist/ops/op_utils.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tfc = __webpack_require__(/*! @tensorflow/tfjs-core */ "../../node_modules/@tensorflow/tfjs-core/dist/tf-core.esm.js");
var util_1 = __webpack_require__(/*! util */ "../../node_modules/util/util.js");
var gBackend = null;
function nodeBackend() {
    if (gBackend === null) {
        gBackend = tfc.ENV.findBackend('tensorflow');
    }
    return gBackend;
}
exports.nodeBackend = nodeBackend;
function getTFDType(dataType) {
    var binding = nodeBackend().binding;
    switch (dataType) {
        case 'float32':
            return binding.TF_FLOAT;
        case 'int32':
            return binding.TF_INT32;
        case 'bool':
            return binding.TF_BOOL;
        case 'complex64':
            return binding.TF_COMPLEX64;
        case 'string':
            return binding.TF_STRING;
        default:
            var errorMessage = "Unknown dtype: " + dataType;
            throw new Error(errorMessage);
    }
}
exports.getTFDType = getTFDType;
function createTypeOpAttr(attrName, dtype) {
    return {
        name: attrName,
        type: nodeBackend().binding.TF_ATTR_TYPE,
        value: getTFDType(dtype)
    };
}
exports.createTypeOpAttr = createTypeOpAttr;
function createTensorsTypeOpAttr(attrName, tensors) {
    if (util_1.isNullOrUndefined(tensors)) {
        throw new Error('Invalid input tensors value.');
    }
    return {
        name: attrName,
        type: nodeBackend().binding.TF_ATTR_TYPE,
        value: getTFDTypeForInputs(tensors)
    };
}
exports.createTensorsTypeOpAttr = createTensorsTypeOpAttr;
function getTFDTypeForInputs(tensors) {
    if (util_1.isNullOrUndefined(tensors)) {
        throw new Error('Invalid input tensors value.');
    }
    if (util_1.isArray(tensors)) {
        for (var i = 0; i < tensors.length; i++) {
            return getTFDType(tensors[i].dtype);
        }
        return -1;
    }
    else {
        return getTFDType(tensors.dtype);
    }
}


/***/ }),

/***/ "../../node_modules/@tensorflow/tfjs-node-gpu/dist/version.js":
/*!*************************************************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/@tensorflow/tfjs-node-gpu/dist/version.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var version = '0.2.3';
exports.version = version;


/***/ }),

/***/ "../../node_modules/@tensorflow/tfjs-node-gpu/package.json":
/*!**********************************************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/@tensorflow/tfjs-node-gpu/package.json ***!
  \**********************************************************************************************/
/*! exports provided: name, version, main, types, gypfile, repository, engines, scripts, devDependencies, dependencies, default */
/***/ (function(module) {

module.exports = {"name":"@tensorflow/tfjs-node-gpu","version":"0.2.3","main":"dist/index.js","types":"dist/index.d.ts","gypfile":true,"repository":{"type":"git","url":"https://github.com/tensorflow/tfjs-node.git"},"engines":{"node":">=8.11.0"},"scripts":{"build":"tsc","build-npm":"./scripts/build-npm.sh","clean-deps":"rm -rf deps","coverage":"nyc ts-node src/run_tests.ts","enable-gpu":"node scripts/install.js gpu download && yarn","format":"clang-format -i -style=Google binding/*.cc binding/*.h","install":"node scripts/install.js gpu download","link-local":"yalc link","lint":"tslint -p . -t verbose","prep":"cd node_modules/@tensorflow/tfjs-core && yarn && yarn build","publish-local":"yarn prep && yalc push","test":"ts-node src/run_tests.ts"},"devDependencies":{"@types/bindings":"~1.3.0","@types/jasmine":"~2.8.6","@types/node":"^10.5.1","@types/progress":"^2.0.1","@types/rimraf":"~2.0.2","clang-format":"~1.2.2","jasmine":"~3.1.0","nyc":"^12.0.2","ts-node":"^5.0.1","tslint":"~5.9.1","typescript":"~2.9.2","yalc":"~1.0.0-pre.21"},"dependencies":{"@tensorflow/tfjs":"~0.14.2","adm-zip":"^0.4.11","bindings":"~1.3.0","https-proxy-agent":"^2.2.1","node-fetch":"^2.3.0","progress":"^2.0.0","rimraf":"^2.6.2","tar":"^4.4.6"}};

/***/ }),

/***/ "../../node_modules/bindings/bindings.js":
/*!****************************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/bindings/bindings.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process, __filename) {
/**
 * Module dependencies.
 */

var fs = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module 'fs'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))
  , path = __webpack_require__(/*! path */ "../../node_modules/path-browserify/index.js")
  , join = path.join
  , dirname = path.dirname
  , exists = ((fs.accessSync && function (path) { try { fs.accessSync(path); } catch (e) { return false; } return true; })
      || fs.existsSync || path.existsSync)
  , defaults = {
        arrow: process.env.NODE_BINDINGS_ARROW || ' → '
      , compiled: process.env.NODE_BINDINGS_COMPILED_DIR || 'compiled'
      , platform: process.platform
      , arch: process.arch
      , version: process.versions.node
      , bindings: 'bindings.node'
      , try: [
          // node-gyp's linked version in the "build" dir
          [ 'module_root', 'build', 'bindings' ]
          // node-waf and gyp_addon (a.k.a node-gyp)
        , [ 'module_root', 'build', 'Debug', 'bindings' ]
        , [ 'module_root', 'build', 'Release', 'bindings' ]
          // Debug files, for development (legacy behavior, remove for node v0.9)
        , [ 'module_root', 'out', 'Debug', 'bindings' ]
        , [ 'module_root', 'Debug', 'bindings' ]
          // Release files, but manually compiled (legacy behavior, remove for node v0.9)
        , [ 'module_root', 'out', 'Release', 'bindings' ]
        , [ 'module_root', 'Release', 'bindings' ]
          // Legacy from node-waf, node <= 0.4.x
        , [ 'module_root', 'build', 'default', 'bindings' ]
          // Production "Release" buildtype binary (meh...)
        , [ 'module_root', 'compiled', 'version', 'platform', 'arch', 'bindings' ]
        ]
    }

/**
 * The main `bindings()` function loads the compiled bindings for a given module.
 * It uses V8's Error API to determine the parent filename that this function is
 * being invoked from, which is then used to find the root directory.
 */

function bindings (opts) {

  // Argument surgery
  if (typeof opts == 'string') {
    opts = { bindings: opts }
  } else if (!opts) {
    opts = {}
  }

  // maps `defaults` onto `opts` object
  Object.keys(defaults).map(function(i) {
    if (!(i in opts)) opts[i] = defaults[i];
  });

  // Get the module root
  if (!opts.module_root) {
    opts.module_root = exports.getRoot(exports.getFileName())
  }

  // Ensure the given bindings name ends with .node
  if (path.extname(opts.bindings) != '.node') {
    opts.bindings += '.node'
  }

  // https://github.com/webpack/webpack/issues/4175#issuecomment-342931035
  var requireFunc =  true ? require : undefined

  var tries = []
    , i = 0
    , l = opts.try.length
    , n
    , b
    , err

  for (; i<l; i++) {
    n = join.apply(null, opts.try[i].map(function (p) {
      return opts[p] || p
    }))
    tries.push(n)
    try {
      b = opts.path ? requireFunc.resolve(n) : requireFunc(n)
      if (!opts.path) {
        b.path = n
      }
      return b
    } catch (e) {
      if (!/not find/i.test(e.message)) {
        throw e
      }
    }
  }

  err = new Error('Could not locate the bindings file. Tried:\n'
    + tries.map(function (a) { return opts.arrow + a }).join('\n'))
  err.tries = tries
  throw err
}
module.exports = exports = bindings


/**
 * Gets the filename of the JavaScript file that invokes this function.
 * Used to help find the root directory of a module.
 * Optionally accepts an filename argument to skip when searching for the invoking filename
 */

exports.getFileName = function getFileName (calling_file) {
  var origPST = Error.prepareStackTrace
    , origSTL = Error.stackTraceLimit
    , dummy = {}
    , fileName

  Error.stackTraceLimit = 10

  Error.prepareStackTrace = function (e, st) {
    for (var i=0, l=st.length; i<l; i++) {
      fileName = st[i].getFileName()
      if (fileName !== __filename) {
        if (calling_file) {
            if (fileName !== calling_file) {
              return
            }
        } else {
          return
        }
      }
    }
  }

  // run the 'prepareStackTrace' function above
  Error.captureStackTrace(dummy)
  dummy.stack

  // cleanup
  Error.prepareStackTrace = origPST
  Error.stackTraceLimit = origSTL

  return fileName
}

/**
 * Gets the root directory of a module, given an arbitrary filename
 * somewhere in the module tree. The "root directory" is the directory
 * containing the `package.json` file.
 *
 *   In:  /home/nate/node-native-module/lib/index.js
 *   Out: /home/nate/node-native-module
 */

exports.getRoot = function getRoot (file) {
  var dir = dirname(file)
    , prev
  while (true) {
    if (dir === '.') {
      // Avoids an infinite loop in rare cases, like the REPL
      dir = process.cwd()
    }
    if (exists(join(dir, 'package.json')) || exists(join(dir, 'node_modules'))) {
      // Found the 'package.json' file or 'node_modules' dir; we're done
      return dir
    }
    if (prev === dir) {
      // Got to the top
      throw new Error('Could not find module root given file: "' + file
                    + '". Do you have a `package.json` file? ')
    }
    // Try the parent dir next
    prev = dir
    dir = join(dir, '..')
  }
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ "../../node_modules/process/browser.js"), "/index.js"))

/***/ }),

/***/ "../../node_modules/node-fetch/browser.js":
/*!*****************************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/node-fetch/browser.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// ref: https://github.com/tc39/proposal-global
var getGlobal = function () {
	// the only reliable means to get the global object is
	// `Function('return this')()`
	// However, this causes CSP violations in Chrome apps.
	if (typeof self !== 'undefined') { return self; }
	if (typeof window !== 'undefined') { return window; }
	if (typeof global !== 'undefined') { return global; }
	throw new Error('unable to locate global object');
}

var global = getGlobal();

module.exports = exports = global.fetch;

// Needed for TypeScript and Webpack.
exports.default = global.fetch.bind(global);

exports.Headers = global.Headers;
exports.Request = global.Request;
exports.Response = global.Response;

/***/ }),

/***/ "../../node_modules/path-browserify/index.js":
/*!********************************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/path-browserify/index.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
var splitPathRe =
    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
var splitPath = function(filename) {
  return splitPathRe.exec(filename).slice(1);
};

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function(path) {
  var result = splitPath(path),
      root = result[0],
      dir = result[1];

  if (!root && !dir) {
    // No dirname whatsoever
    return '.';
  }

  if (dir) {
    // It has a dirname, strip trailing slash
    dir = dir.substr(0, dir.length - 1);
  }

  return root + dir;
};


exports.basename = function(path, ext) {
  var f = splitPath(path)[2];
  // TODO: make this comparison case-insensitive on windows?
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};


exports.extname = function(path) {
  return splitPath(path)[3];
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ "../../node_modules/process/browser.js")))

/***/ }),

/***/ "../../node_modules/progress/index.js":
/*!*************************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/progress/index.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib/node-progress */ "../../node_modules/progress/lib/node-progress.js");


/***/ }),

/***/ "../../node_modules/progress/lib/node-progress.js":
/*!*************************************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/progress/lib/node-progress.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/*!
 * node-progress
 * Copyright(c) 2011 TJ Holowaychuk <tj@vision-media.ca>
 * MIT Licensed
 */

/**
 * Expose `ProgressBar`.
 */

exports = module.exports = ProgressBar;

/**
 * Initialize a `ProgressBar` with the given `fmt` string and `options` or
 * `total`.
 *
 * Options:
 *
 *   - `curr` current completed index
 *   - `total` total number of ticks to complete
 *   - `width` the displayed width of the progress bar defaulting to total
 *   - `stream` the output stream defaulting to stderr
 *   - `head` head character defaulting to complete character
 *   - `complete` completion character defaulting to "="
 *   - `incomplete` incomplete character defaulting to "-"
 *   - `renderThrottle` minimum time between updates in milliseconds defaulting to 16
 *   - `callback` optional function to call when the progress bar completes
 *   - `clear` will clear the progress bar upon termination
 *
 * Tokens:
 *
 *   - `:bar` the progress bar itself
 *   - `:current` current tick number
 *   - `:total` total ticks
 *   - `:elapsed` time elapsed in seconds
 *   - `:percent` completion percentage
 *   - `:eta` eta in seconds
 *   - `:rate` rate of ticks per second
 *
 * @param {string} fmt
 * @param {object|number} options or total
 * @api public
 */

function ProgressBar(fmt, options) {
  this.stream = options.stream || process.stderr;

  if (typeof(options) == 'number') {
    var total = options;
    options = {};
    options.total = total;
  } else {
    options = options || {};
    if ('string' != typeof fmt) throw new Error('format required');
    if ('number' != typeof options.total) throw new Error('total required');
  }

  this.fmt = fmt;
  this.curr = options.curr || 0;
  this.total = options.total;
  this.width = options.width || this.total;
  this.clear = options.clear
  this.chars = {
    complete   : options.complete || '=',
    incomplete : options.incomplete || '-',
    head       : options.head || (options.complete || '=')
  };
  this.renderThrottle = options.renderThrottle !== 0 ? (options.renderThrottle || 16) : 0;
  this.lastRender = -Infinity;
  this.callback = options.callback || function () {};
  this.tokens = {};
  this.lastDraw = '';
}

/**
 * "tick" the progress bar with optional `len` and optional `tokens`.
 *
 * @param {number|object} len or tokens
 * @param {object} tokens
 * @api public
 */

ProgressBar.prototype.tick = function(len, tokens){
  if (len !== 0)
    len = len || 1;

  // swap tokens
  if ('object' == typeof len) tokens = len, len = 1;
  if (tokens) this.tokens = tokens;

  // start time for eta
  if (0 == this.curr) this.start = new Date;

  this.curr += len

  // try to render
  this.render();

  // progress complete
  if (this.curr >= this.total) {
    this.render(undefined, true);
    this.complete = true;
    this.terminate();
    this.callback(this);
    return;
  }
};

/**
 * Method to render the progress bar with optional `tokens` to place in the
 * progress bar's `fmt` field.
 *
 * @param {object} tokens
 * @api public
 */

ProgressBar.prototype.render = function (tokens, force) {
  force = force !== undefined ? force : false;
  if (tokens) this.tokens = tokens;

  if (!this.stream.isTTY) return;

  var now = Date.now();
  var delta = now - this.lastRender;
  if (!force && (delta < this.renderThrottle)) {
    return;
  } else {
    this.lastRender = now;
  }

  var ratio = this.curr / this.total;
  ratio = Math.min(Math.max(ratio, 0), 1);

  var percent = Math.floor(ratio * 100);
  var incomplete, complete, completeLength;
  var elapsed = new Date - this.start;
  var eta = (percent == 100) ? 0 : elapsed * (this.total / this.curr - 1);
  var rate = this.curr / (elapsed / 1000);

  /* populate the bar template with percentages and timestamps */
  var str = this.fmt
    .replace(':current', this.curr)
    .replace(':total', this.total)
    .replace(':elapsed', isNaN(elapsed) ? '0.0' : (elapsed / 1000).toFixed(1))
    .replace(':eta', (isNaN(eta) || !isFinite(eta)) ? '0.0' : (eta / 1000)
      .toFixed(1))
    .replace(':percent', percent.toFixed(0) + '%')
    .replace(':rate', Math.round(rate));

  /* compute the available space (non-zero) for the bar */
  var availableSpace = Math.max(0, this.stream.columns - str.replace(':bar', '').length);
  if(availableSpace && process.platform === 'win32'){
    availableSpace = availableSpace - 1;
  }

  var width = Math.min(this.width, availableSpace);

  /* TODO: the following assumes the user has one ':bar' token */
  completeLength = Math.round(width * ratio);
  complete = Array(Math.max(0, completeLength + 1)).join(this.chars.complete);
  incomplete = Array(Math.max(0, width - completeLength + 1)).join(this.chars.incomplete);

  /* add head to the complete string */
  if(completeLength > 0)
    complete = complete.slice(0, -1) + this.chars.head;

  /* fill in the actual progress bar */
  str = str.replace(':bar', complete + incomplete);

  /* replace the extra tokens */
  if (this.tokens) for (var key in this.tokens) str = str.replace(':' + key, this.tokens[key]);

  if (this.lastDraw !== str) {
    this.stream.cursorTo(0);
    this.stream.write(str);
    this.stream.clearLine(1);
    this.lastDraw = str;
  }
};

/**
 * "update" the progress bar to represent an exact percentage.
 * The ratio (between 0 and 1) specified will be multiplied by `total` and
 * floored, representing the closest available "tick." For example, if a
 * progress bar has a length of 3 and `update(0.5)` is called, the progress
 * will be set to 1.
 *
 * A ratio of 0.5 will attempt to set the progress to halfway.
 *
 * @param {number} ratio The ratio (between 0 and 1 inclusive) to set the
 *   overall completion to.
 * @api public
 */

ProgressBar.prototype.update = function (ratio, tokens) {
  var goal = Math.floor(ratio * this.total);
  var delta = goal - this.curr;

  this.tick(delta, tokens);
};

/**
 * "interrupt" the progress bar and write a message above it.
 * @param {string} message The message to write.
 * @api public
 */

ProgressBar.prototype.interrupt = function (message) {
  // clear the current line
  this.stream.clearLine();
  // move the cursor to the start of the line
  this.stream.cursorTo(0);
  // write the message text
  this.stream.write(message);
  // terminate the line after writing the message
  this.stream.write('\n');
  // re-display the progress bar with its lastDraw
  this.stream.write(this.lastDraw);
};

/**
 * Terminates a progress bar.
 *
 * @api public
 */

ProgressBar.prototype.terminate = function () {
  if (this.clear) {
    if (this.stream.clearLine) {
      this.stream.clearLine();
      this.stream.cursorTo(0);
    }
  } else {
    this.stream.write('\n');
  }
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "../../node_modules/process/browser.js")))

/***/ }),

/***/ "../../node_modules/util/support/isBufferBrowser.js":
/*!***************************************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/util/support/isBufferBrowser.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}

/***/ }),

/***/ "../../node_modules/util/util.js":
/*!********************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/util/util.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  // Allow for deprecating things in the process of starting up.
  if (isUndefined(global.process)) {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  if (process.noDeprecation === true) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = __webpack_require__(/*! ./support/isBuffer */ "../../node_modules/util/support/isBufferBrowser.js");

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = __webpack_require__(/*! inherits */ "../../node_modules/inherits/inherits_browser.js");

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "../../node_modules/process/browser.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2NvcmUvL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvQHRlbnNvcmZsb3cvdGZqcy1jb3JlL2Rpc3QvdHlwZXMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9jb3JlLy9ob21lL2h1eW5obmd1eWVuL2dpdGh1Yi9jYXVzYWxpdHkvbm9kZV9tb2R1bGVzL0B0ZW5zb3JmbG93L3RmanMtbm9kZS1ncHUvZGlzdC9jYWxsYmFja3MuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9jb3JlLy9ob21lL2h1eW5obmd1eWVuL2dpdGh1Yi9jYXVzYWxpdHkvbm9kZV9tb2R1bGVzL0B0ZW5zb3JmbG93L3RmanMtbm9kZS1ncHUvZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2NvcmUvL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvQHRlbnNvcmZsb3cvdGZqcy1ub2RlLWdwdS9kaXN0L2lvL2ZpbGVfc3lzdGVtLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvY29yZS8vaG9tZS9odXluaG5ndXllbi9naXRodWIvY2F1c2FsaXR5L25vZGVfbW9kdWxlcy9AdGVuc29yZmxvdy90ZmpzLW5vZGUtZ3B1L2Rpc3QvaW8vaW5kZXguanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9jb3JlLy9ob21lL2h1eW5obmd1eWVuL2dpdGh1Yi9jYXVzYWxpdHkvbm9kZV9tb2R1bGVzL0B0ZW5zb3JmbG93L3RmanMtbm9kZS1ncHUvZGlzdC9pby9pb191dGlscy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2NvcmUvL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvQHRlbnNvcmZsb3cvdGZqcy1ub2RlLWdwdS9kaXN0L2lvL25vZGVfaHR0cC5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2NvcmUvL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvQHRlbnNvcmZsb3cvdGZqcy1ub2RlLWdwdS9kaXN0L25vZGVqc19rZXJuZWxfYmFja2VuZC5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2NvcmUvL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvQHRlbnNvcmZsb3cvdGZqcy1ub2RlLWdwdS9kaXN0L29wcy9vcF91dGlscy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2NvcmUvL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvQHRlbnNvcmZsb3cvdGZqcy1ub2RlLWdwdS9kaXN0L3ZlcnNpb24uanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9jb3JlLy9ob21lL2h1eW5obmd1eWVuL2dpdGh1Yi9jYXVzYWxpdHkvbm9kZV9tb2R1bGVzL2JpbmRpbmdzL2JpbmRpbmdzLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvY29yZS8vaG9tZS9odXluaG5ndXllbi9naXRodWIvY2F1c2FsaXR5L25vZGVfbW9kdWxlcy9ub2RlLWZldGNoL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9jb3JlLy9ob21lL2h1eW5obmd1eWVuL2dpdGh1Yi9jYXVzYWxpdHkvbm9kZV9tb2R1bGVzL3BhdGgtYnJvd3NlcmlmeS9pbmRleC5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2NvcmUvL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvcHJvZ3Jlc3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9jb3JlLy9ob21lL2h1eW5obmd1eWVuL2dpdGh1Yi9jYXVzYWxpdHkvbm9kZV9tb2R1bGVzL3Byb2dyZXNzL2xpYi9ub2RlLXByb2dyZXNzLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvY29yZS8vaG9tZS9odXluaG5ndXllbi9naXRodWIvY2F1c2FsaXR5L25vZGVfbW9kdWxlcy91dGlsL3N1cHBvcnQvaXNCdWZmZXJCcm93c2VyLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvY29yZS8vaG9tZS9odXluaG5ndXllbi9naXRodWIvY2F1c2FsaXR5L25vZGVfbW9kdWxlcy91dGlsL3V0aWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQywyQ0FBMkM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyw4Q0FBOEM7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyw0Q0FBNEM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxrREFBa0Q7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxzREFBc0Q7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDOzs7Ozs7Ozs7Ozs7QUM1RGE7QUFDYjtBQUNBO0FBQ0EsVUFBVSxnQkFBZ0Isc0NBQXNDLGlCQUFpQixFQUFFO0FBQ25GLHlCQUF5Qix1REFBdUQ7QUFDaEY7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsbUNBQW1DLE1BQU0sNkJBQTZCLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDakcsa0NBQWtDLE1BQU0saUNBQWlDLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDcEcsK0JBQStCLGlFQUFpRSx1QkFBdUIsRUFBRSw0QkFBNEI7QUFDcko7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLGFBQWEsNkJBQTZCLDBCQUEwQixhQUFhLEVBQUUscUJBQXFCO0FBQ3hHLGdCQUFnQixxREFBcUQsb0VBQW9FLGFBQWEsRUFBRTtBQUN4SixzQkFBc0Isc0JBQXNCLHFCQUFxQixHQUFHO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QyxrQ0FBa0MsU0FBUztBQUMzQyxrQ0FBa0MsV0FBVyxVQUFVO0FBQ3ZELHlDQUF5QyxjQUFjO0FBQ3ZEO0FBQ0EsNkdBQTZHLE9BQU8sVUFBVTtBQUM5SCxnRkFBZ0YsaUJBQWlCLE9BQU87QUFDeEcsd0RBQXdELGdCQUFnQixRQUFRLE9BQU87QUFDdkYsOENBQThDLGdCQUFnQixnQkFBZ0IsT0FBTztBQUNyRjtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0EsU0FBUyxZQUFZLGFBQWEsT0FBTyxFQUFFLFVBQVUsV0FBVztBQUNoRSxtQ0FBbUMsU0FBUztBQUM1QztBQUNBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsYUFBYSxtQkFBTyxDQUFDLDRFQUFrQjtBQUN2QyxrQkFBa0IsbUJBQU8sQ0FBQyxzREFBVTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhLEVBQUUsRUFBRTtBQUNqQixrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYSxFQUFFLEVBQUU7QUFDakIsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0lBQStJLHFEQUFxRDtBQUNwTTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYSxFQUFFLEVBQUU7QUFDakIsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELHFDQUFxQztBQUN4RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYSxFQUFFLEVBQUU7QUFDakIsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsb0JBQW9CO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsSmE7QUFDYjtBQUNBLDRDQUE0QyxPQUFPO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVELFNBQVMsbUJBQU8sQ0FBQyw0RUFBa0I7QUFDbkMsb0JBQW9CLG1CQUFPLENBQUMsNkZBQWtCO0FBQzlDLGFBQWEsbUJBQU8sQ0FBQyxpRkFBWTtBQUNqQyxrQkFBa0IsbUJBQU8sQ0FBQyx5RkFBZ0I7QUFDMUMsOEJBQThCLG1CQUFPLENBQUMsMkdBQXlCO0FBQy9ELGtCQUFrQixtQkFBTyxDQUFDLCtFQUFXO0FBQ3JDLGVBQWUsbUJBQU8sQ0FBQyx5REFBVTtBQUNqQyw2QkFBNkIsZUFBZSxtQ0FBbUM7QUFDL0Usd0JBQXdCO0FBQ3hCLFNBQVMsbUJBQU8sQ0FBQyw0RUFBa0I7QUFDbkMsWUFBWSxtQkFBTyxDQUFDLGtGQUFpQjtBQUNyQztBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixtQkFBTyxDQUFDLG1GQUFhO0FBQ3ZDOzs7Ozs7Ozs7Ozs7O0FDbENBLDhDQUFhO0FBQ2I7QUFDQTtBQUNBLG1DQUFtQyxNQUFNLDZCQUE2QixFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ2pHLGtDQUFrQyxNQUFNLGlDQUFpQyxFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ3BHLCtCQUErQixpRUFBaUUsdUJBQXVCLEVBQUUsNEJBQTRCO0FBQ3JKO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxhQUFhLDZCQUE2QiwwQkFBMEIsYUFBYSxFQUFFLHFCQUFxQjtBQUN4RyxnQkFBZ0IscURBQXFELG9FQUFvRSxhQUFhLEVBQUU7QUFDeEosc0JBQXNCLHNCQUFzQixxQkFBcUIsR0FBRztBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkMsa0NBQWtDLFNBQVM7QUFDM0Msa0NBQWtDLFdBQVcsVUFBVTtBQUN2RCx5Q0FBeUMsY0FBYztBQUN2RDtBQUNBLDZHQUE2RyxPQUFPLFVBQVU7QUFDOUgsZ0ZBQWdGLGlCQUFpQixPQUFPO0FBQ3hHLHdEQUF3RCxnQkFBZ0IsUUFBUSxPQUFPO0FBQ3ZGLDhDQUE4QyxnQkFBZ0IsZ0JBQWdCLE9BQU87QUFDckY7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBLFNBQVMsWUFBWSxhQUFhLE9BQU8sRUFBRSxVQUFVLFdBQVc7QUFDaEUsbUNBQW1DLFNBQVM7QUFDNUM7QUFDQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVELFVBQVUsbUJBQU8sQ0FBQywyRkFBdUI7QUFDekMsU0FBUyxtQkFBTyxDQUFDLDRIQUFJO0FBQ3JCLGFBQWEsbUJBQU8sQ0FBQyx5REFBTTtBQUMzQixhQUFhLG1CQUFPLENBQUMsNkNBQU07QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsbUJBQU8sQ0FBQyxvRkFBWTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsMEJBQTBCLEVBQUU7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLHlEQUF5RCxFQUFFO0FBQ3hHLHFFQUFxRSwyREFBMkQsRUFBRTtBQUNsSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDdFNhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQsb0JBQW9CLG1CQUFPLENBQUMsMEZBQWU7QUFDM0M7QUFDQSxrQkFBa0IsbUJBQU8sQ0FBQyxzRkFBYTtBQUN2Qzs7Ozs7Ozs7Ozs7OztBQ0xBLDhDQUFhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxtQkFBbUI7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLG1CQUFtQjtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzlDYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVELGtCQUFrQixtQkFBTyxDQUFDLDJGQUF1QjtBQUNqRCxZQUFZLG1CQUFPLENBQUMsNERBQVk7QUFDaEMsd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLDZDQUE2QyxFQUFFO0FBQzlGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3JCQSwrQ0FBYTtBQUNiO0FBQ0E7QUFDQSxVQUFVLGdCQUFnQixzQ0FBc0MsaUJBQWlCLEVBQUU7QUFDbkYseUJBQXlCLHVEQUF1RDtBQUNoRjtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxtQ0FBbUMsTUFBTSw2QkFBNkIsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNqRyxrQ0FBa0MsTUFBTSxpQ0FBaUMsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNwRywrQkFBK0IsaUVBQWlFLHVCQUF1QixFQUFFLDRCQUE0QjtBQUNySjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsYUFBYSw2QkFBNkIsMEJBQTBCLGFBQWEsRUFBRSxxQkFBcUI7QUFDeEcsZ0JBQWdCLHFEQUFxRCxvRUFBb0UsYUFBYSxFQUFFO0FBQ3hKLHNCQUFzQixzQkFBc0IscUJBQXFCLEdBQUc7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDLGtDQUFrQyxTQUFTO0FBQzNDLGtDQUFrQyxXQUFXLFVBQVU7QUFDdkQseUNBQXlDLGNBQWM7QUFDdkQ7QUFDQSw2R0FBNkcsT0FBTyxVQUFVO0FBQzlILGdGQUFnRixpQkFBaUIsT0FBTztBQUN4Ryx3REFBd0QsZ0JBQWdCLFFBQVEsT0FBTztBQUN2Riw4Q0FBOEMsZ0JBQWdCLGdCQUFnQixPQUFPO0FBQ3JGO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQSxTQUFTLFlBQVksYUFBYSxPQUFPLEVBQUUsVUFBVSxXQUFXO0FBQ2hFLG1DQUFtQyxTQUFTO0FBQzVDO0FBQ0E7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCxrQkFBa0IsbUJBQU8sQ0FBQywyRkFBdUI7QUFDakQsY0FBYyxtQkFBTyxDQUFDLGdHQUFrQztBQUN4RCxhQUFhLG1CQUFPLENBQUMsNkNBQU07QUFDM0IsaUJBQWlCLG1CQUFPLENBQUMseUZBQWdCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXdELGdCQUFnQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsb0JBQW9CO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtRUFBbUU7QUFDaEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxvQ0FBb0MsRUFBRTtBQUN0RjtBQUNBLHlEQUF5RDtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLDBFQUEwRTtBQUNsSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSx1RUFBdUU7QUFDcEYsYUFBYSxtRUFBbUU7QUFDaEY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLDBEQUEwRDtBQUN2RTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG9FQUFvRTtBQUNqRixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1FQUFtRTtBQUNoRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUVBQW1FO0FBQ2hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1FQUFtRTtBQUNoRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtRUFBbUU7QUFDaEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1FQUFtRTtBQUNoRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGtFQUFrRTtBQUMvRSxhQUFhLHFFQUFxRTtBQUNsRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixhQUFhLHlFQUF5RTtBQUN0RixhQUFhLHNFQUFzRTtBQUNuRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxrRUFBa0U7QUFDL0UsYUFBYSxxRUFBcUU7QUFDbEY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLGFBQWEseUVBQXlFO0FBQ3RGLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGtFQUFrRTtBQUMvRSxhQUFhLHFFQUFxRTtBQUNsRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsYUFBYSx5RUFBeUU7QUFDdEYsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGtFQUFrRTtBQUMvRSxhQUFhLHFFQUFxRTtBQUNsRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGtFQUFrRTtBQUMvRSxhQUFhLHFFQUFxRTtBQUNsRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsa0VBQWtFO0FBQy9FLGFBQWEscUVBQXFFO0FBQ2xGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxrRUFBa0U7QUFDL0UsYUFBYSxxRUFBcUU7QUFDbEY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGtFQUFrRTtBQUMvRSxhQUFhLHFFQUFxRTtBQUNsRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsYUFBYSxzRUFBc0U7QUFDbkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsa0VBQWtFO0FBQy9FLGFBQWEscUVBQXFFO0FBQ2xGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSw4REFBOEQ7QUFDM0UsYUFBYSxrRUFBa0U7QUFDL0UsYUFBYSxxRUFBcUU7QUFDbEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSw4REFBOEQ7QUFDM0UsYUFBYSxrRUFBa0U7QUFDL0UsYUFBYSxxRUFBcUU7QUFDbEY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsOERBQThEO0FBQzNFLGFBQWEsa0VBQWtFO0FBQy9FLGFBQWEscUVBQXFFO0FBQ2xGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLDhEQUE4RDtBQUMzRSxhQUFhLGtFQUFrRTtBQUMvRSxhQUFhLHFFQUFxRTtBQUNsRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixhQUFhLHFFQUFxRTtBQUNsRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsc0VBQXNFO0FBQ25GLGFBQWEsOERBQThEO0FBQzNFLGFBQWEsZ0VBQWdFO0FBQzdFLGFBQWEsOERBQThEO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsc0VBQXNFO0FBQ25GLGFBQWEsOERBQThEO0FBQzNFLGFBQWEsZ0VBQWdFO0FBQzdFLGFBQWEsOERBQThEO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLDREQUE0RDtBQUN6RSxhQUFhLG9FQUFvRTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSwwREFBMEQ7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLHVFQUF1RTtBQUNwRixhQUFhLG1FQUFtRTtBQUNoRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1FQUFtRTtBQUNoRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEseUVBQXlFO0FBQ3RGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixlQUFlO0FBQzFDLHFDQUFxQyx1QkFBdUI7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLHFEQUFxRDtBQUNqRixhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7O0FDL3FDYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVELFVBQVUsbUJBQU8sQ0FBQywyRkFBdUI7QUFDekMsYUFBYSxtQkFBTyxDQUFDLDZDQUFNO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixvQkFBb0I7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQy9EYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTLG1CQUFPLENBQUMsNEhBQUk7QUFDckIsV0FBVyxtQkFBTyxDQUFDLHlEQUFNO0FBQ3pCO0FBQ0E7QUFDQSxpREFBaUQsTUFBTSxxQkFBcUIsRUFBRSxZQUFZLGNBQWMsRUFBRSxhQUFhLEVBQUU7QUFDekg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxZQUFZO0FBQ1osR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixLQUF5QyxHQUFHLE9BQXVCLEdBQUcsU0FBTzs7QUFFakc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFFBQVEsS0FBSztBQUNiO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhCQUE4Qix3QkFBd0I7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLDhCQUE4QixLQUFLO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RDtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDN0thOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsYUFBYTtBQUNoRCxxQ0FBcUMsZUFBZTtBQUNwRCxxQ0FBcUMsZUFBZTtBQUNwRDtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1DOzs7Ozs7Ozs7OztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLFFBQVE7QUFDeEM7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVUsTUFBTTtBQUNoQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsSUFBSTtBQUNqQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQ0FBb0MsOEJBQThCO0FBQ2xFOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVSxvQkFBb0I7QUFDOUI7QUFDQTs7QUFFQTtBQUNBLFVBQVUsVUFBVTtBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsWUFBWTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsK0JBQStCLHNCQUFzQjtBQUNyRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGVBQWU7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDL05BLGlCQUFpQixtQkFBTyxDQUFDLDZFQUFxQjs7Ozs7Ozs7Ozs7O0FDQTlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLGNBQWM7QUFDekI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsY0FBYztBQUN6QixXQUFXLE9BQU87QUFDbEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDM09BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsc0JBQXNCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILHVCQUF1QixTQUFTO0FBQ2hDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDRDQUE0QyxLQUFLOztBQUVqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsbUNBQW1DLE9BQU87QUFDMUM7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLG1CQUFPLENBQUMsOEVBQW9COztBQUUvQztBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCO0FBQ0EsbUJBQW1CLG1CQUFPLENBQUMsaUVBQVU7O0FBRXJDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIFJhbms7XG4oZnVuY3Rpb24gKFJhbmspIHtcbiAgICBSYW5rW1wiUjBcIl0gPSBcIlIwXCI7XG4gICAgUmFua1tcIlIxXCJdID0gXCJSMVwiO1xuICAgIFJhbmtbXCJSMlwiXSA9IFwiUjJcIjtcbiAgICBSYW5rW1wiUjNcIl0gPSBcIlIzXCI7XG4gICAgUmFua1tcIlI0XCJdID0gXCJSNFwiO1xuICAgIFJhbmtbXCJSNVwiXSA9IFwiUjVcIjtcbiAgICBSYW5rW1wiUjZcIl0gPSBcIlI2XCI7XG59KShSYW5rID0gZXhwb3J0cy5SYW5rIHx8IChleHBvcnRzLlJhbmsgPSB7fSkpO1xudmFyIFVwY2FzdEludDMyQW5kTWFwO1xuKGZ1bmN0aW9uIChVcGNhc3RJbnQzMkFuZE1hcCkge1xuICAgIFVwY2FzdEludDMyQW5kTWFwW1wiZmxvYXQzMlwiXSA9IFwiZmxvYXQzMlwiO1xuICAgIFVwY2FzdEludDMyQW5kTWFwW1wiaW50MzJcIl0gPSBcImludDMyXCI7XG4gICAgVXBjYXN0SW50MzJBbmRNYXBbXCJib29sXCJdID0gXCJpbnQzMlwiO1xuICAgIFVwY2FzdEludDMyQW5kTWFwW1wiY29tcGxleDY0XCJdID0gXCJjb21wbGV4NjRcIjtcbn0pKFVwY2FzdEludDMyQW5kTWFwIHx8IChVcGNhc3RJbnQzMkFuZE1hcCA9IHt9KSk7XG52YXIgVXBjYXN0Qm9vbEFuZE1hcDtcbihmdW5jdGlvbiAoVXBjYXN0Qm9vbEFuZE1hcCkge1xuICAgIFVwY2FzdEJvb2xBbmRNYXBbXCJmbG9hdDMyXCJdID0gXCJmbG9hdDMyXCI7XG4gICAgVXBjYXN0Qm9vbEFuZE1hcFtcImludDMyXCJdID0gXCJpbnQzMlwiO1xuICAgIFVwY2FzdEJvb2xBbmRNYXBbXCJib29sXCJdID0gXCJib29sXCI7XG4gICAgVXBjYXN0Qm9vbEFuZE1hcFtcImNvbXBsZXg2NFwiXSA9IFwiY29tcGxleDY0XCI7XG59KShVcGNhc3RCb29sQW5kTWFwIHx8IChVcGNhc3RCb29sQW5kTWFwID0ge30pKTtcbnZhciBVcGNhc3RGbG9hdDMyQW5kTWFwO1xuKGZ1bmN0aW9uIChVcGNhc3RGbG9hdDMyQW5kTWFwKSB7XG4gICAgVXBjYXN0RmxvYXQzMkFuZE1hcFtcImZsb2F0MzJcIl0gPSBcImZsb2F0MzJcIjtcbiAgICBVcGNhc3RGbG9hdDMyQW5kTWFwW1wiaW50MzJcIl0gPSBcImZsb2F0MzJcIjtcbiAgICBVcGNhc3RGbG9hdDMyQW5kTWFwW1wiYm9vbFwiXSA9IFwiZmxvYXQzMlwiO1xuICAgIFVwY2FzdEZsb2F0MzJBbmRNYXBbXCJjb21wbGV4NjRcIl0gPSBcImNvbXBsZXg2NFwiO1xufSkoVXBjYXN0RmxvYXQzMkFuZE1hcCB8fCAoVXBjYXN0RmxvYXQzMkFuZE1hcCA9IHt9KSk7XG52YXIgVXBjYXN0Q29tcGxleDY0QW5kTWFwO1xuKGZ1bmN0aW9uIChVcGNhc3RDb21wbGV4NjRBbmRNYXApIHtcbiAgICBVcGNhc3RDb21wbGV4NjRBbmRNYXBbXCJmbG9hdDMyXCJdID0gXCJjb21wbGV4NjRcIjtcbiAgICBVcGNhc3RDb21wbGV4NjRBbmRNYXBbXCJpbnQzMlwiXSA9IFwiY29tcGxleDY0XCI7XG4gICAgVXBjYXN0Q29tcGxleDY0QW5kTWFwW1wiYm9vbFwiXSA9IFwiY29tcGxleDY0XCI7XG4gICAgVXBjYXN0Q29tcGxleDY0QW5kTWFwW1wiY29tcGxleDY0XCJdID0gXCJjb21wbGV4NjRcIjtcbn0pKFVwY2FzdENvbXBsZXg2NEFuZE1hcCB8fCAoVXBjYXN0Q29tcGxleDY0QW5kTWFwID0ge30pKTtcbnZhciB1cGNhc3RUeXBlTWFwID0ge1xuICAgICdmbG9hdDMyJzogVXBjYXN0RmxvYXQzMkFuZE1hcCxcbiAgICAnaW50MzInOiBVcGNhc3RJbnQzMkFuZE1hcCxcbiAgICAnYm9vbCc6IFVwY2FzdEJvb2xBbmRNYXAsXG4gICAgJ2NvbXBsZXg2NCc6IFVwY2FzdENvbXBsZXg2NEFuZE1hcFxufTtcbmZ1bmN0aW9uIHVwY2FzdFR5cGUodHlwZUEsIHR5cGVCKSB7XG4gICAgaWYgKHR5cGVBID09PSAnc3RyaW5nJyB8fCB0eXBlQiA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgaWYgKHR5cGVBID09PSAnc3RyaW5nJyAmJiB0eXBlQiA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHJldHVybiAnc3RyaW5nJztcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW4gbm90IHVwY2FzdCBcIiArIHR5cGVBICsgXCIgd2l0aCBcIiArIHR5cGVCKTtcbiAgICB9XG4gICAgcmV0dXJuIHVwY2FzdFR5cGVNYXBbdHlwZUFdW3R5cGVCXTtcbn1cbmV4cG9ydHMudXBjYXN0VHlwZSA9IHVwY2FzdFR5cGU7XG5mdW5jdGlvbiBzdW1PdXRUeXBlKHR5cGUpIHtcbiAgICByZXR1cm4gdXBjYXN0VHlwZSh0eXBlLCAnaW50MzInKTtcbn1cbmV4cG9ydHMuc3VtT3V0VHlwZSA9IHN1bU91dFR5cGU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD10eXBlcy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XG4gICAgfVxufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciB0ZmpzXzEgPSByZXF1aXJlKFwiQHRlbnNvcmZsb3cvdGZqc1wiKTtcbnZhciBQcm9ncmVzc0JhciA9IHJlcXVpcmUoXCJwcm9ncmVzc1wiKTtcbmV4cG9ydHMucHJvZ3Jlc3NCYXJIZWxwZXIgPSB7XG4gICAgUHJvZ3Jlc3NCYXI6IFByb2dyZXNzQmFyLFxuICAgIGxvZzogY29uc29sZS5sb2dcbn07XG52YXIgUHJvZ2JhckxvZ2dlciA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFByb2diYXJMb2dnZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gUHJvZ2JhckxvZ2dlcigpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywge1xuICAgICAgICAgICAgb25UcmFpbkJlZ2luOiBmdW5jdGlvbiAobG9ncykgeyByZXR1cm4gX19hd2FpdGVyKF90aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBzYW1wbGVzLCBiYXRjaFNpemU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgICAgICBzYW1wbGVzID0gdGhpcy5wYXJhbXMuc2FtcGxlcztcbiAgICAgICAgICAgICAgICAgICAgYmF0Y2hTaXplID0gdGhpcy5wYXJhbXMuYmF0Y2hTaXplO1xuICAgICAgICAgICAgICAgICAgICB0ZmpzXzEudXRpbC5hc3NlcnQoc2FtcGxlcyAhPSBudWxsLCAnUHJvZ2JhckxvZ2dlciBjYW5ub3Qgb3BlcmF0ZSB3aGVuIHNhbXBsZXMgaXMgdW5kZWZpbmVkIG9yIG51bGwuJyk7XG4gICAgICAgICAgICAgICAgICAgIHRmanNfMS51dGlsLmFzc2VydChiYXRjaFNpemUgIT0gbnVsbCwgJ1Byb2diYXJMb2dnZXIgY2Fubm90IG9wZXJhdGUgd2hlbiBiYXRjaFNpemUgaXMgdW5kZWZpbmVkIG9yICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJ251bGwuJyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubnVtVHJhaW5CYXRjaGVzUGVyRXBvY2ggPSBNYXRoLmNlaWwoc2FtcGxlcyAvIGJhdGNoU2l6ZSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMl07XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTsgfSxcbiAgICAgICAgICAgIG9uRXBvY2hCZWdpbjogZnVuY3Rpb24gKGVwb2NoLCBsb2dzKSB7IHJldHVybiBfX2F3YWl0ZXIoX3RoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgICAgICBleHBvcnRzLnByb2dyZXNzQmFySGVscGVyLmxvZyhcIkVwb2NoIFwiICsgKGVwb2NoICsgMSkgKyBcIiAvIFwiICsgdGhpcy5wYXJhbXMuZXBvY2hzKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50RXBvY2hCZWdpbiA9IHRmanNfMS51dGlsLm5vdygpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzJdO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7IH0sXG4gICAgICAgICAgICBvbkJhdGNoRW5kOiBmdW5jdGlvbiAoYmF0Y2gsIGxvZ3MpIHsgcmV0dXJuIF9fYXdhaXRlcihfdGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYmF0Y2ggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9ncmVzc0JhciA9IG5ldyBleHBvcnRzLnByb2dyZXNzQmFySGVscGVyLlByb2dyZXNzQmFyKCdldGE9OmV0YSA6YmFyIDpwbGFjZWhvbGRlckZvckxvc3Nlc0FuZE1ldHJpY3MnLCB7IHRvdGFsOiB0aGlzLm51bVRyYWluQmF0Y2hlc1BlckVwb2NoICsgMSwgaGVhZDogXCI+XCIgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3NCYXIudGljayh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyRm9yTG9zc2VzQW5kTWV0cmljczogdGhpcy5mb3JtYXRMb2dzQXNNZXRyaWNzQ29udGVudChsb2dzKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgdGZqc18xLm5leHRGcmFtZSgpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJhdGNoID09PSB0aGlzLm51bVRyYWluQmF0Y2hlc1BlckVwb2NoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVwb2NoRHVyYXRpb25NaWxsaXMgPSB0ZmpzXzEudXRpbC5ub3coKSAtIHRoaXMuY3VycmVudEVwb2NoQmVnaW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXNQZXJTdGVwID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXBvY2hEdXJhdGlvbk1pbGxpcyAvIHRoaXMucGFyYW1zLnNhbXBsZXMgKiAxZTM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMl07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pOyB9LFxuICAgICAgICAgICAgb25FcG9jaEVuZDogZnVuY3Rpb24gKGVwb2NoLCBsb2dzKSB7IHJldHVybiBfX2F3YWl0ZXIoX3RoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGxvc3Nlc0FuZE1ldHJpY3NTdHJpbmc7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9ncmVzc0Jhci50aWNrKHsgcGxhY2Vob2xkZXJGb3JMb3NzZXNBbmRNZXRyaWNzOiAnJyB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb3NzZXNBbmRNZXRyaWNzU3RyaW5nID0gdGhpcy5mb3JtYXRMb2dzQXNNZXRyaWNzQ29udGVudChsb2dzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBvcnRzLnByb2dyZXNzQmFySGVscGVyLmxvZyh0aGlzLmVwb2NoRHVyYXRpb25NaWxsaXMudG9GaXhlZCgwKSArIFwibXMgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcy51c1BlclN0ZXAudG9GaXhlZCgwKSArIFwidXMvc3RlcCAtIFwiKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChcIlwiICsgbG9zc2VzQW5kTWV0cmljc1N0cmluZykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgdGZqc18xLm5leHRGcmFtZSgpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7IH0sXG4gICAgICAgIH0pIHx8IHRoaXM7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgUHJvZ2JhckxvZ2dlci5wcm90b3R5cGUuZm9ybWF0TG9nc0FzTWV0cmljc0NvbnRlbnQgPSBmdW5jdGlvbiAobG9ncykge1xuICAgICAgICB2YXIgbWV0cmljc0NvbnRlbnQgPSAnJztcbiAgICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhsb2dzKS5zb3J0KCk7XG4gICAgICAgIGZvciAodmFyIF9pID0gMCwga2V5c18xID0ga2V5czsgX2kgPCBrZXlzXzEubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICB2YXIga2V5ID0ga2V5c18xW19pXTtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzRmllbGRSZWxldmFudChrZXkpKSB7XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gbG9nc1trZXldO1xuICAgICAgICAgICAgICAgIHZhciBkZWNpbWFsUGxhY2VzID0gZ2V0RGlzcGxheURlY2ltYWxQbGFjZXModmFsdWUpO1xuICAgICAgICAgICAgICAgIG1ldHJpY3NDb250ZW50ICs9IGtleSArIFwiPVwiICsgdmFsdWUudG9GaXhlZChkZWNpbWFsUGxhY2VzKSArIFwiIFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtZXRyaWNzQ29udGVudDtcbiAgICB9O1xuICAgIFByb2diYXJMb2dnZXIucHJvdG90eXBlLmlzRmllbGRSZWxldmFudCA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgcmV0dXJuIGtleSAhPT0gJ2JhdGNoJyAmJiBrZXkgIT09ICdzaXplJztcbiAgICB9O1xuICAgIHJldHVybiBQcm9nYmFyTG9nZ2VyO1xufSh0ZmpzXzEuQ3VzdG9tQ2FsbGJhY2spKTtcbmV4cG9ydHMuUHJvZ2JhckxvZ2dlciA9IFByb2diYXJMb2dnZXI7XG5mdW5jdGlvbiBnZXREaXNwbGF5RGVjaW1hbFBsYWNlcyh4KSB7XG4gICAgdmFyIEJBU0VfTlVNX0RJR0lUUyA9IDI7XG4gICAgaWYgKCFOdW1iZXIuaXNGaW5pdGUoeCkgfHwgeCA9PT0gMCB8fCB4ID4gMSB8fCB4IDwgLTEpIHtcbiAgICAgICAgcmV0dXJuIEJBU0VfTlVNX0RJR0lUUztcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBCQVNFX05VTV9ESUdJVFMgLSBNYXRoLmZsb29yKE1hdGgubG9nMTAoTWF0aC5hYnMoeCkpKTtcbiAgICB9XG59XG5leHBvcnRzLmdldERpc3BsYXlEZWNpbWFsUGxhY2VzID0gZ2V0RGlzcGxheURlY2ltYWxQbGFjZXM7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICB9XG4gICAgcmV0dXJuIHQ7XG59O1xuZnVuY3Rpb24gX19leHBvcnQobSkge1xuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcbn1cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciB0ZiA9IHJlcXVpcmUoXCJAdGVuc29yZmxvdy90ZmpzXCIpO1xudmFyIGZpbGVfc3lzdGVtXzEgPSByZXF1aXJlKFwiLi9pby9maWxlX3N5c3RlbVwiKTtcbnZhciBub2RlSW8gPSByZXF1aXJlKFwiLi9pby9pbmRleFwiKTtcbnZhciBub2RlX2h0dHBfMSA9IHJlcXVpcmUoXCIuL2lvL25vZGVfaHR0cFwiKTtcbnZhciBub2RlanNfa2VybmVsX2JhY2tlbmRfMSA9IHJlcXVpcmUoXCIuL25vZGVqc19rZXJuZWxfYmFja2VuZFwiKTtcbnZhciBub2RlVmVyc2lvbiA9IHJlcXVpcmUoXCIuL3ZlcnNpb25cIik7XG52YXIgYmluZGluZ3MgPSByZXF1aXJlKFwiYmluZGluZ3NcIik7XG5leHBvcnRzLnZlcnNpb24gPSBfX2Fzc2lnbih7fSwgdGYudmVyc2lvbiwgeyAndGZqcy1ub2RlJzogbm9kZVZlcnNpb24udmVyc2lvbiB9KTtcbmV4cG9ydHMuaW8gPSBfX2Fzc2lnbih7fSwgdGYuaW8sIG5vZGVJbyk7XG5fX2V4cG9ydChyZXF1aXJlKFwiQHRlbnNvcmZsb3cvdGZqc1wiKSk7XG52YXIgcGpzb24gPSByZXF1aXJlKCcuLi9wYWNrYWdlLmpzb24nKTtcbnRmLkVOVi5yZWdpc3RlckJhY2tlbmQoJ3RlbnNvcmZsb3cnLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIG5ldyBub2RlanNfa2VybmVsX2JhY2tlbmRfMS5Ob2RlSlNLZXJuZWxCYWNrZW5kKGJpbmRpbmdzKCd0ZmpzX2JpbmRpbmcubm9kZScpLCBwanNvbi5uYW1lKTtcbn0sIDMpO1xuaWYgKHRmLkVOVi5maW5kQmFja2VuZCgndGVuc29yZmxvdycpICE9IG51bGwpIHtcbiAgICB0Zi5zZXRCYWNrZW5kKCd0ZW5zb3JmbG93Jyk7XG59XG50Zi5pby5yZWdpc3RlckxvYWRSb3V0ZXIoZmlsZV9zeXN0ZW1fMS5ub2RlRmlsZVN5c3RlbVJvdXRlcik7XG50Zi5pby5yZWdpc3RlclNhdmVSb3V0ZXIoZmlsZV9zeXN0ZW1fMS5ub2RlRmlsZVN5c3RlbVJvdXRlcik7XG50Zi5pby5yZWdpc3RlckxvYWRSb3V0ZXIobm9kZV9odHRwXzEubm9kZUhUVFBSZXF1ZXN0Um91dGVyKTtcbnZhciBjYWxsYmFja3NfMSA9IHJlcXVpcmUoXCIuL2NhbGxiYWNrc1wiKTtcbnRmLnJlZ2lzdGVyQ2FsbGJhY2tDb25zdHJ1Y3RvcigxLCBjYWxsYmFja3NfMS5Qcm9nYmFyTG9nZ2VyKTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XG4gICAgfVxufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciB0ZmMgPSByZXF1aXJlKFwiQHRlbnNvcmZsb3cvdGZqcy1jb3JlXCIpO1xudmFyIGZzID0gcmVxdWlyZShcImZzXCIpO1xudmFyIHBhdGhfMSA9IHJlcXVpcmUoXCJwYXRoXCIpO1xudmFyIHV0aWxfMSA9IHJlcXVpcmUoXCJ1dGlsXCIpO1xudmFyIHN0YXQgPSB1dGlsXzEucHJvbWlzaWZ5KGZzLnN0YXQpO1xudmFyIHdyaXRlRmlsZSA9IHV0aWxfMS5wcm9taXNpZnkoZnMud3JpdGVGaWxlKTtcbnZhciByZWFkRmlsZSA9IHV0aWxfMS5wcm9taXNpZnkoZnMucmVhZEZpbGUpO1xudmFyIG1rZGlyID0gdXRpbF8xLnByb21pc2lmeShmcy5ta2Rpcik7XG52YXIgaW9fdXRpbHNfMSA9IHJlcXVpcmUoXCIuL2lvX3V0aWxzXCIpO1xuZnVuY3Rpb24gZG9lc05vdEV4aXN0SGFuZGxlcihuYW1lKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHN3aXRjaCAoZS5jb2RlKSB7XG4gICAgICAgICAgICBjYXNlICdFTk9FTlQnOlxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihuYW1lICsgXCIgXCIgKyBlLnBhdGggKyBcIiBkb2VzIG5vdCBleGlzdDogbG9hZGluZyBmYWlsZWRcIik7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH1cbiAgICB9O1xufVxudmFyIE5vZGVGaWxlU3lzdGVtID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBOb2RlRmlsZVN5c3RlbShwYXRoKSB7XG4gICAgICAgIHRoaXMuTU9ERUxfSlNPTl9GSUxFTkFNRSA9ICdtb2RlbC5qc29uJztcbiAgICAgICAgdGhpcy5XRUlHSFRTX0JJTkFSWV9GSUxFTkFNRSA9ICd3ZWlnaHRzLmJpbic7XG4gICAgICAgIHRoaXMuTU9ERUxfQklOQVJZX0ZJTEVOQU1FID0gJ3RlbnNvcmZsb3dqcy5wYic7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHBhdGgpKSB7XG4gICAgICAgICAgICB0ZmMudXRpbC5hc3NlcnQocGF0aC5sZW5ndGggPT09IDIsICdmaWxlIHBhdGhzIG11c3QgaGF2ZSBhIGxlbmd0aCBvZiAyLCAnICtcbiAgICAgICAgICAgICAgICAoXCIoYWN0dWFsIGxlbmd0aCBpcyBcIiArIHBhdGgubGVuZ3RoICsgXCIpLlwiKSk7XG4gICAgICAgICAgICB0aGlzLnBhdGggPSBwYXRoLm1hcChmdW5jdGlvbiAocCkgeyByZXR1cm4gcGF0aF8xLnJlc29sdmUocCk7IH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wYXRoID0gcGF0aF8xLnJlc29sdmUocGF0aCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgTm9kZUZpbGVTeXN0ZW0ucHJvdG90eXBlLnNhdmUgPSBmdW5jdGlvbiAobW9kZWxBcnRpZmFjdHMpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHdlaWdodHNCaW5QYXRoLCB3ZWlnaHRzTWFuaWZlc3QsIG1vZGVsSlNPTiwgbW9kZWxKU09OUGF0aDtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHRoaXMucGF0aCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBwZXJmb3JtIHNhdmluZyB0byBtdWx0aXBsZSBwYXRocy4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgdGhpcy5jcmVhdGVPclZlcmlmeURpcmVjdG9yeSgpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEobW9kZWxBcnRpZmFjdHMubW9kZWxUb3BvbG9neSBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSkgcmV0dXJuIFszLCAyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTm9kZUZpbGVTeXN0ZW0uc2F2ZSgpIGRvZXMgbm90IHN1cHBvcnQgc2F2aW5nIG1vZGVsIHRvcG9sb2d5ICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpbiBiaW5hcnkgZm9ybWF0IHlldC4nKTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgd2VpZ2h0c0JpblBhdGggPSBwYXRoXzEuam9pbih0aGlzLnBhdGgsIHRoaXMuV0VJR0hUU19CSU5BUllfRklMRU5BTUUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2VpZ2h0c01hbmlmZXN0ID0gW3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aHM6IFt0aGlzLldFSUdIVFNfQklOQVJZX0ZJTEVOQU1FXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2VpZ2h0czogbW9kZWxBcnRpZmFjdHMud2VpZ2h0U3BlY3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsSlNPTiA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbFRvcG9sb2d5OiBtb2RlbEFydGlmYWN0cy5tb2RlbFRvcG9sb2d5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdlaWdodHNNYW5pZmVzdDogd2VpZ2h0c01hbmlmZXN0LFxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsSlNPTlBhdGggPSBwYXRoXzEuam9pbih0aGlzLnBhdGgsIHRoaXMuTU9ERUxfSlNPTl9GSUxFTkFNRSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsIHdyaXRlRmlsZShtb2RlbEpTT05QYXRoLCBKU09OLnN0cmluZ2lmeShtb2RlbEpTT04pLCAndXRmOCcpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCB3cml0ZUZpbGUod2VpZ2h0c0JpblBhdGgsIEJ1ZmZlci5mcm9tKG1vZGVsQXJ0aWZhY3RzLndlaWdodERhdGEpLCAnYmluYXJ5JyldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWxBcnRpZmFjdHNJbmZvOiBpb191dGlsc18xLmdldE1vZGVsQXJ0aWZhY3RzSW5mb0ZvckpTT04obW9kZWxBcnRpZmFjdHMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgTm9kZUZpbGVTeXN0ZW0ucHJvdG90eXBlLmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIsIEFycmF5LmlzQXJyYXkodGhpcy5wYXRoKSA/IHRoaXMubG9hZEJpbmFyeU1vZGVsKCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkSlNPTk1vZGVsKCldO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgTm9kZUZpbGVTeXN0ZW0ucHJvdG90eXBlLmxvYWRCaW5hcnlNb2RlbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHRvcG9sb2d5UGF0aCwgd2VpZ2h0TWFuaWZlc3RQYXRoLCB0b3BvbG9neSwgd2VpZ2h0TWFuaWZlc3QsIG1vZGVsVG9wb2xvZ3ksIHdlaWdodHNNYW5pZmVzdCwgX2EsIF9iLCBtb2RlbEFydGlmYWN0cywgX2MsIHdlaWdodFNwZWNzLCB3ZWlnaHREYXRhO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfZCkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2QubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wb2xvZ3lQYXRoID0gdGhpcy5wYXRoWzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2VpZ2h0TWFuaWZlc3RQYXRoID0gdGhpcy5wYXRoWzFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCBzdGF0KHRvcG9sb2d5UGF0aCkuY2F0Y2goZG9lc05vdEV4aXN0SGFuZGxlcignVG9wb2xvZ3kgUGF0aCcpKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcG9sb2d5ID0gX2Quc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCBzdGF0KHdlaWdodE1hbmlmZXN0UGF0aClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGRvZXNOb3RFeGlzdEhhbmRsZXIoJ1dlaWdodCBNYW5pZmVzdCBQYXRoJykpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgd2VpZ2h0TWFuaWZlc3QgPSBfZC5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRvcG9sb2d5LmlzRmlsZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGaWxlIHNwZWNpZmllZCBmb3IgdG9wb2xvZ3kgaXMgbm90IGEgZmlsZSEnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghd2VpZ2h0TWFuaWZlc3QuaXNGaWxlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZpbGUgc3BlY2lmaWVkIGZvciB0aGUgd2VpZ2h0IG1hbmlmZXN0IGlzIG5vdCBhIGZpbGUhJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsIHJlYWRGaWxlKHRoaXMucGF0aFswXSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlbFRvcG9sb2d5ID0gX2Quc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2IgPSAoX2EgPSBKU09OKS5wYXJzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgcmVhZEZpbGUodGhpcy5wYXRoWzFdLCAndXRmOCcpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICAgICAgd2VpZ2h0c01hbmlmZXN0ID0gX2IuYXBwbHkoX2EsIFtfZC5zZW50KCldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsQXJ0aWZhY3RzID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsVG9wb2xvZ3k6IG1vZGVsVG9wb2xvZ3ksXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCB0aGlzLmxvYWRXZWlnaHRzKHdlaWdodHNNYW5pZmVzdCwgdGhpcy5wYXRoWzFdKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jID0gX2Quc2VudCgpLCB3ZWlnaHRTcGVjcyA9IF9jWzBdLCB3ZWlnaHREYXRhID0gX2NbMV07XG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlbEFydGlmYWN0cy53ZWlnaHRTcGVjcyA9IHdlaWdodFNwZWNzO1xuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWxBcnRpZmFjdHMud2VpZ2h0RGF0YSA9IHdlaWdodERhdGE7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIsIG1vZGVsQXJ0aWZhY3RzXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBOb2RlRmlsZVN5c3RlbS5wcm90b3R5cGUubG9hZEpTT05Nb2RlbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHBhdGgsIGluZm8sIG1vZGVsSlNPTiwgX2EsIF9iLCBtb2RlbEFydGlmYWN0cywgX2MsIHdlaWdodFNwZWNzLCB3ZWlnaHREYXRhO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfZCkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2QubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aCA9IHRoaXMucGF0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgc3RhdChwYXRoKS5jYXRjaChkb2VzTm90RXhpc3RIYW5kbGVyKCdQYXRoJykpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgaW5mbyA9IF9kLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaW5mby5pc0ZpbGUoKSkgcmV0dXJuIFszLCA1XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9iID0gKF9hID0gSlNPTikucGFyc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsIHJlYWRGaWxlKHBhdGgsICd1dGY4JyldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlbEpTT04gPSBfYi5hcHBseShfYSwgW19kLnNlbnQoKV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWxBcnRpZmFjdHMgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWxUb3BvbG9neTogbW9kZWxKU09OLm1vZGVsVG9wb2xvZ3ksXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEobW9kZWxKU09OLndlaWdodHNNYW5pZmVzdCAhPSBudWxsKSkgcmV0dXJuIFszLCA0XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgdGhpcy5sb2FkV2VpZ2h0cyhtb2RlbEpTT04ud2VpZ2h0c01hbmlmZXN0LCBwYXRoKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jID0gX2Quc2VudCgpLCB3ZWlnaHRTcGVjcyA9IF9jWzBdLCB3ZWlnaHREYXRhID0gX2NbMV07XG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlbEFydGlmYWN0cy53ZWlnaHRTcGVjcyA9IHdlaWdodFNwZWNzO1xuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWxBcnRpZmFjdHMud2VpZ2h0RGF0YSA9IHdlaWdodERhdGE7XG4gICAgICAgICAgICAgICAgICAgICAgICBfZC5sYWJlbCA9IDQ7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDogcmV0dXJuIFsyLCBtb2RlbEFydGlmYWN0c107XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNTogdGhyb3cgbmV3IEVycm9yKCdUaGUgcGF0aCB0byBsb2FkIGZyb20gbXVzdCBiZSBhIGZpbGUuIExvYWRpbmcgZnJvbSBhIGRpcmVjdG9yeSAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICdpcyBub3Qgc3VwcG9ydGVkLicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIE5vZGVGaWxlU3lzdGVtLnByb3RvdHlwZS5sb2FkV2VpZ2h0cyA9IGZ1bmN0aW9uICh3ZWlnaHRzTWFuaWZlc3QsIHBhdGgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGRpck5hbWUsIGJ1ZmZlcnMsIHdlaWdodFNwZWNzLCBfaSwgd2VpZ2h0c01hbmlmZXN0XzEsIGdyb3VwLCBfYSwgX2IsIHBhdGhfMiwgd2VpZ2h0RmlsZVBhdGgsIGJ1ZmZlcjtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2MpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9jLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpck5hbWUgPSBwYXRoXzEuZGlybmFtZShwYXRoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1ZmZlcnMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdlaWdodFNwZWNzID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICBfaSA9IDAsIHdlaWdodHNNYW5pZmVzdF8xID0gd2VpZ2h0c01hbmlmZXN0O1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MubGFiZWwgPSAxO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIShfaSA8IHdlaWdodHNNYW5pZmVzdF8xLmxlbmd0aCkpIHJldHVybiBbMywgN107XG4gICAgICAgICAgICAgICAgICAgICAgICBncm91cCA9IHdlaWdodHNNYW5pZmVzdF8xW19pXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hID0gMCwgX2IgPSBncm91cC5wYXRocztcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jLmxhYmVsID0gMjtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEoX2EgPCBfYi5sZW5ndGgpKSByZXR1cm4gWzMsIDVdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aF8yID0gX2JbX2FdO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2VpZ2h0RmlsZVBhdGggPSBwYXRoXzEuam9pbihkaXJOYW1lLCBwYXRoXzIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCByZWFkRmlsZSh3ZWlnaHRGaWxlUGF0aClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGRvZXNOb3RFeGlzdEhhbmRsZXIoJ1dlaWdodCBmaWxlJykpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgYnVmZmVyID0gX2Muc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnVmZmVycy5wdXNoKGJ1ZmZlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICBfYy5sYWJlbCA9IDQ7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hKys7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMsIDJdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgICAgICAgICB3ZWlnaHRTcGVjcy5wdXNoLmFwcGx5KHdlaWdodFNwZWNzLCBncm91cC53ZWlnaHRzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jLmxhYmVsID0gNjtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgICAgICAgICAgICAgX2krKztcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMywgMV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNzogcmV0dXJuIFsyLCBbd2VpZ2h0U3BlY3MsIGlvX3V0aWxzXzEudG9BcnJheUJ1ZmZlcihidWZmZXJzKV1dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIE5vZGVGaWxlU3lzdGVtLnByb3RvdHlwZS5jcmVhdGVPclZlcmlmeURpcmVjdG9yeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHBhdGhzLCBfaSwgcGF0aHNfMSwgcGF0aCwgZV8xO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aHMgPSBBcnJheS5pc0FycmF5KHRoaXMucGF0aCkgPyB0aGlzLnBhdGggOiBbdGhpcy5wYXRoXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9pID0gMCwgcGF0aHNfMSA9IHBhdGhzO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSAxO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIShfaSA8IHBhdGhzXzEubGVuZ3RoKSkgcmV0dXJuIFszLCA5XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGggPSBwYXRoc18xW19pXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gMjtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2EudHJ5cy5wdXNoKFsyLCA0LCAsIDhdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgbWtkaXIocGF0aCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMsIDhdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBlXzEgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIShlXzEuY29kZSA9PT0gJ0VFWElTVCcpKSByZXR1cm4gWzMsIDZdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCBzdGF0KHBhdGgpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChfYS5zZW50KCkpLmlzRmlsZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUGF0aCBcIiArIHBhdGggKyBcIiBleGlzdHMgYXMgYSBmaWxlLiBUaGUgcGF0aCBtdXN0IGJlIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJub25leGlzdGVudCBvciBwb2ludCB0byBhIGRpcmVjdG9yeS5cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMsIDddO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDY6IHRocm93IGVfMTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA3OiByZXR1cm4gWzMsIDhdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICAgICAgICAgICAgICBfaSsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszLCAxXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA5OiByZXR1cm4gWzJdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIE5vZGVGaWxlU3lzdGVtLlVSTF9TQ0hFTUUgPSAnZmlsZTovLyc7XG4gICAgcmV0dXJuIE5vZGVGaWxlU3lzdGVtO1xufSgpKTtcbmV4cG9ydHMuTm9kZUZpbGVTeXN0ZW0gPSBOb2RlRmlsZVN5c3RlbTtcbmV4cG9ydHMubm9kZUZpbGVTeXN0ZW1Sb3V0ZXIgPSBmdW5jdGlvbiAodXJsKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodXJsKSkge1xuICAgICAgICBpZiAodXJsLmV2ZXJ5KGZ1bmN0aW9uICh1cmxFbGVtZW50KSB7IHJldHVybiB1cmxFbGVtZW50LnN0YXJ0c1dpdGgoTm9kZUZpbGVTeXN0ZW0uVVJMX1NDSEVNRSk7IH0pKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IE5vZGVGaWxlU3lzdGVtKHVybC5tYXAoZnVuY3Rpb24gKHVybEVsZW1lbnQpIHsgcmV0dXJuIHVybEVsZW1lbnQuc2xpY2UoTm9kZUZpbGVTeXN0ZW0uVVJMX1NDSEVNRS5sZW5ndGgpOyB9KSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaWYgKHVybC5zdGFydHNXaXRoKE5vZGVGaWxlU3lzdGVtLlVSTF9TQ0hFTUUpKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IE5vZGVGaWxlU3lzdGVtKHVybC5zbGljZShOb2RlRmlsZVN5c3RlbS5VUkxfU0NIRU1FLmxlbmd0aCkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9XG59O1xuZnVuY3Rpb24gZmlsZVN5c3RlbShwYXRoKSB7XG4gICAgcmV0dXJuIG5ldyBOb2RlRmlsZVN5c3RlbShwYXRoKTtcbn1cbmV4cG9ydHMuZmlsZVN5c3RlbSA9IGZpbGVTeXN0ZW07XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBmaWxlX3N5c3RlbV8xID0gcmVxdWlyZShcIi4vZmlsZV9zeXN0ZW1cIik7XG5leHBvcnRzLmZpbGVTeXN0ZW0gPSBmaWxlX3N5c3RlbV8xLmZpbGVTeXN0ZW07XG52YXIgbm9kZV9odHRwXzEgPSByZXF1aXJlKFwiLi9ub2RlX2h0dHBcIik7XG5leHBvcnRzLm5vZGVIVFRQUmVxdWVzdCA9IG5vZGVfaHR0cF8xLm5vZGVIVFRQUmVxdWVzdDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gdG9CdWZmZXIoYWIpIHtcbiAgICB2YXIgdmlldyA9IG5ldyBVaW50OEFycmF5KGFiKTtcbiAgICByZXR1cm4gQnVmZmVyLmZyb20odmlldyk7XG59XG5leHBvcnRzLnRvQnVmZmVyID0gdG9CdWZmZXI7XG5mdW5jdGlvbiB0b0FycmF5QnVmZmVyKGJ1Zikge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGJ1ZikpIHtcbiAgICAgICAgdmFyIHRvdGFsTGVuZ3RoID0gMDtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBidWZfMSA9IGJ1ZjsgX2kgPCBidWZfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIHZhciBidWZmZXIgPSBidWZfMVtfaV07XG4gICAgICAgICAgICB0b3RhbExlbmd0aCArPSBidWZmZXIubGVuZ3RoO1xuICAgICAgICB9XG4gICAgICAgIHZhciBhYiA9IG5ldyBBcnJheUJ1ZmZlcih0b3RhbExlbmd0aCk7XG4gICAgICAgIHZhciB2aWV3ID0gbmV3IFVpbnQ4QXJyYXkoYWIpO1xuICAgICAgICB2YXIgcG9zID0gMDtcbiAgICAgICAgZm9yICh2YXIgX2EgPSAwLCBidWZfMiA9IGJ1ZjsgX2EgPCBidWZfMi5sZW5ndGg7IF9hKyspIHtcbiAgICAgICAgICAgIHZhciBidWZmZXIgPSBidWZfMltfYV07XG4gICAgICAgICAgICBwb3MgKz0gYnVmZmVyLmNvcHkodmlldywgcG9zKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYWI7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gYnVmLmJ1ZmZlci5zbGljZShidWYuYnl0ZU9mZnNldCwgYnVmLmJ5dGVPZmZzZXQgKyBidWYuYnl0ZUxlbmd0aCk7XG4gICAgfVxufVxuZXhwb3J0cy50b0FycmF5QnVmZmVyID0gdG9BcnJheUJ1ZmZlcjtcbmZ1bmN0aW9uIGdldE1vZGVsQXJ0aWZhY3RzSW5mb0ZvckpTT04obW9kZWxBcnRpZmFjdHMpIHtcbiAgICBpZiAobW9kZWxBcnRpZmFjdHMubW9kZWxUb3BvbG9neSBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgSlNPTiBtb2RlbCB0b3BvbG9neSwgcmVjZWl2ZWQgQXJyYXlCdWZmZXIuJyk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIGRhdGVTYXZlZDogbmV3IERhdGUoKSxcbiAgICAgICAgbW9kZWxUb3BvbG9neVR5cGU6ICdKU09OJyxcbiAgICAgICAgbW9kZWxUb3BvbG9neUJ5dGVzOiBtb2RlbEFydGlmYWN0cy5tb2RlbFRvcG9sb2d5ID09IG51bGwgP1xuICAgICAgICAgICAgMCA6XG4gICAgICAgICAgICBCdWZmZXIuYnl0ZUxlbmd0aChKU09OLnN0cmluZ2lmeShtb2RlbEFydGlmYWN0cy5tb2RlbFRvcG9sb2d5KSwgJ3V0ZjgnKSxcbiAgICAgICAgd2VpZ2h0U3BlY3NCeXRlczogbW9kZWxBcnRpZmFjdHMud2VpZ2h0U3BlY3MgPT0gbnVsbCA/XG4gICAgICAgICAgICAwIDpcbiAgICAgICAgICAgIEJ1ZmZlci5ieXRlTGVuZ3RoKEpTT04uc3RyaW5naWZ5KG1vZGVsQXJ0aWZhY3RzLndlaWdodFNwZWNzKSwgJ3V0ZjgnKSxcbiAgICAgICAgd2VpZ2h0RGF0YUJ5dGVzOiBtb2RlbEFydGlmYWN0cy53ZWlnaHREYXRhID09IG51bGwgP1xuICAgICAgICAgICAgMCA6XG4gICAgICAgICAgICBtb2RlbEFydGlmYWN0cy53ZWlnaHREYXRhLmJ5dGVMZW5ndGgsXG4gICAgfTtcbn1cbmV4cG9ydHMuZ2V0TW9kZWxBcnRpZmFjdHNJbmZvRm9ySlNPTiA9IGdldE1vZGVsQXJ0aWZhY3RzSW5mb0ZvckpTT047XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciB0ZmpzX2NvcmVfMSA9IHJlcXVpcmUoXCJAdGVuc29yZmxvdy90ZmpzLWNvcmVcIik7XG52YXIgZmV0Y2ggPSByZXF1aXJlKCdub2RlLWZldGNoJyk7XG5leHBvcnRzLmZldGNoV3JhcHBlciA9IHsgZmV0Y2g6IGZldGNoIH07XG5mdW5jdGlvbiBub2RlSFRUUFJlcXVlc3QocGF0aCwgcmVxdWVzdEluaXQsIHdlaWdodFBhdGhQcmVmaXgpIHtcbiAgICByZXR1cm4gdGZqc19jb3JlXzEuaW8uYnJvd3NlckhUVFBSZXF1ZXN0KHBhdGgsIHJlcXVlc3RJbml0LCB3ZWlnaHRQYXRoUHJlZml4LCBleHBvcnRzLmZldGNoV3JhcHBlci5mZXRjaCk7XG59XG5leHBvcnRzLm5vZGVIVFRQUmVxdWVzdCA9IG5vZGVIVFRQUmVxdWVzdDtcbmV4cG9ydHMubm9kZUhUVFBSZXF1ZXN0Um91dGVyID0gZnVuY3Rpb24gKHVybCkge1xuICAgIHZhciBpc0hUVFAgPSB0cnVlO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHVybCkpIHtcbiAgICAgICAgaXNIVFRQID0gdXJsLmV2ZXJ5KGZ1bmN0aW9uICh1cmxJdGVtKSB7IHJldHVybiB0ZmpzX2NvcmVfMS5pby5pc0hUVFBTY2hlbWUodXJsSXRlbSk7IH0pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaXNIVFRQID0gdGZqc19jb3JlXzEuaW8uaXNIVFRQU2NoZW1lKHVybCk7XG4gICAgfVxuICAgIGlmIChpc0hUVFApIHtcbiAgICAgICAgcmV0dXJuIG5vZGVIVFRQUmVxdWVzdCh1cmwpO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XG4gICAgfVxufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciB0ZmpzX2NvcmVfMSA9IHJlcXVpcmUoXCJAdGVuc29yZmxvdy90ZmpzLWNvcmVcIik7XG52YXIgdHlwZXNfMSA9IHJlcXVpcmUoXCJAdGVuc29yZmxvdy90ZmpzLWNvcmUvZGlzdC90eXBlc1wiKTtcbnZhciB1dGlsXzEgPSByZXF1aXJlKFwidXRpbFwiKTtcbnZhciBvcF91dGlsc18xID0gcmVxdWlyZShcIi4vb3BzL29wX3V0aWxzXCIpO1xudmFyIE5vZGVKU0tlcm5lbEJhY2tlbmQgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhOb2RlSlNLZXJuZWxCYWNrZW5kLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE5vZGVKU0tlcm5lbEJhY2tlbmQoYmluZGluZywgcGFja2FnZU5hbWUpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMudGVuc29yTWFwID0gbmV3IFdlYWtNYXAoKTtcbiAgICAgICAgX3RoaXMuYmluZGluZyA9IGJpbmRpbmc7XG4gICAgICAgIF90aGlzLmlzR1BVUGFja2FnZSA9IHBhY2thZ2VOYW1lID09PSAnQHRlbnNvcmZsb3cvdGZqcy1ub2RlLWdwdSc7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgTm9kZUpTS2VybmVsQmFja2VuZC5wcm90b3R5cGUuc2V0RGF0YU1vdmVyID0gZnVuY3Rpb24gKGRhdGFNb3Zlcikge1xuICAgIH07XG4gICAgTm9kZUpTS2VybmVsQmFja2VuZC5wcm90b3R5cGUuY3JlYXRlT3V0cHV0VGVuc29yID0gZnVuY3Rpb24gKG1ldGFkYXRhKSB7XG4gICAgICAgIHZhciBuZXdJZCA9IHt9O1xuICAgICAgICB0aGlzLnRlbnNvck1hcC5zZXQobmV3SWQsIHtcbiAgICAgICAgICAgIHNoYXBlOiBtZXRhZGF0YS5zaGFwZSxcbiAgICAgICAgICAgIGR0eXBlOiBtZXRhZGF0YS5kdHlwZSxcbiAgICAgICAgICAgIGlkOiBtZXRhZGF0YS5pZCxcbiAgICAgICAgICAgIHZhbHVlczogbnVsbFxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIGR0eXBlO1xuICAgICAgICBzd2l0Y2ggKG1ldGFkYXRhLmR0eXBlKSB7XG4gICAgICAgICAgICBjYXNlIHRoaXMuYmluZGluZy5URl9GTE9BVDpcbiAgICAgICAgICAgICAgICBkdHlwZSA9ICdmbG9hdDMyJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgdGhpcy5iaW5kaW5nLlRGX0lOVDMyOlxuICAgICAgICAgICAgICAgIGR0eXBlID0gJ2ludDMyJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgdGhpcy5iaW5kaW5nLlRGX0JPT0w6XG4gICAgICAgICAgICAgICAgZHR5cGUgPSAnYm9vbCc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIHRoaXMuYmluZGluZy5URl9DT01QTEVYNjQ6XG4gICAgICAgICAgICAgICAgZHR5cGUgPSAnY29tcGxleDY0JztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgdGhpcy5iaW5kaW5nLlRGX1NUUklORzpcbiAgICAgICAgICAgICAgICBkdHlwZSA9ICdzdHJpbmcnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmtub3duIGR0eXBlIGVudW0gXCIgKyBtZXRhZGF0YS5kdHlwZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRmanNfY29yZV8xLlRlbnNvci5tYWtlKG1ldGFkYXRhLnNoYXBlLCB7IGRhdGFJZDogbmV3SWQgfSwgZHR5cGUpO1xuICAgIH07XG4gICAgTm9kZUpTS2VybmVsQmFja2VuZC5wcm90b3R5cGUuZ2V0SW5wdXRUZW5zb3JJZHMgPSBmdW5jdGlvbiAodGVuc29ycykge1xuICAgICAgICB2YXIgaWRzID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGVuc29ycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGluZm8gPSB0aGlzLnRlbnNvck1hcC5nZXQodGVuc29yc1tpXS5kYXRhSWQpO1xuICAgICAgICAgICAgaWYgKGluZm8udmFsdWVzICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBpbmZvLmlkID1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5iaW5kaW5nLmNyZWF0ZVRlbnNvcihpbmZvLnNoYXBlLCBpbmZvLmR0eXBlLCBpbmZvLnZhbHVlcyk7XG4gICAgICAgICAgICAgICAgaW5mby52YWx1ZXMgPSBudWxsO1xuICAgICAgICAgICAgICAgIHRoaXMudGVuc29yTWFwLnNldCh0ZW5zb3JzW2ldLmRhdGFJZCwgaW5mbyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZHMucHVzaChpbmZvLmlkKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaWRzO1xuICAgIH07XG4gICAgTm9kZUpTS2VybmVsQmFja2VuZC5wcm90b3R5cGUuY3JlYXRlUmVkdWN0aW9uT3BBdHRycyA9IGZ1bmN0aW9uICh0ZW5zb3IpIHtcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIHsgbmFtZTogJ2tlZXBfZGltcycsIHR5cGU6IHRoaXMuYmluZGluZy5URl9BVFRSX0JPT0wsIHZhbHVlOiBmYWxzZSB9LFxuICAgICAgICAgICAgb3BfdXRpbHNfMS5jcmVhdGVUeXBlT3BBdHRyKCdUJywgdGVuc29yLmR0eXBlKSwgb3BfdXRpbHNfMS5jcmVhdGVUeXBlT3BBdHRyKCdUaWR4JywgJ2ludDMyJylcbiAgICAgICAgXTtcbiAgICB9O1xuICAgIE5vZGVKU0tlcm5lbEJhY2tlbmQucHJvdG90eXBlLmV4ZWN1dGVTaW5nbGVJbnB1dCA9IGZ1bmN0aW9uIChuYW1lLCBpbnB1dCkge1xuICAgICAgICB2YXIgb3BBdHRycyA9IFtvcF91dGlsc18xLmNyZWF0ZVR5cGVPcEF0dHIoJ1QnLCBpbnB1dC5kdHlwZSldO1xuICAgICAgICByZXR1cm4gdGhpcy5leGVjdXRlU2luZ2xlT3V0cHV0KG5hbWUsIG9wQXR0cnMsIFtpbnB1dF0pO1xuICAgIH07XG4gICAgTm9kZUpTS2VybmVsQmFja2VuZC5wcm90b3R5cGUuZmxvYXRQcmVjaXNpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAzMjtcbiAgICB9O1xuICAgIE5vZGVKU0tlcm5lbEJhY2tlbmQucHJvdG90eXBlLmV4ZWN1dGVTaW5nbGVPdXRwdXQgPSBmdW5jdGlvbiAobmFtZSwgb3BBdHRycywgaW5wdXRzKSB7XG4gICAgICAgIHZhciBvdXRwdXRNZXRhZGF0YSA9IHRoaXMuYmluZGluZy5leGVjdXRlT3AobmFtZSwgb3BBdHRycywgdGhpcy5nZXRJbnB1dFRlbnNvcklkcyhpbnB1dHMpLCAxKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlT3V0cHV0VGVuc29yKG91dHB1dE1ldGFkYXRhWzBdKTtcbiAgICB9O1xuICAgIE5vZGVKU0tlcm5lbEJhY2tlbmQucHJvdG90eXBlLmV4ZWN1dGVNdWx0aXBsZU91dHB1dHMgPSBmdW5jdGlvbiAobmFtZSwgb3BBdHRycywgaW5wdXRzLCBudW1PdXRwdXRzKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBvdXRwdXRNZXRhZGF0YSA9IHRoaXMuYmluZGluZy5leGVjdXRlT3AobmFtZSwgb3BBdHRycywgdGhpcy5nZXRJbnB1dFRlbnNvcklkcyhpbnB1dHMpLCBudW1PdXRwdXRzKTtcbiAgICAgICAgcmV0dXJuIG91dHB1dE1ldGFkYXRhLm1hcChmdW5jdGlvbiAobSkgeyByZXR1cm4gX3RoaXMuY3JlYXRlT3V0cHV0VGVuc29yKG0pOyB9KTtcbiAgICB9O1xuICAgIE5vZGVKU0tlcm5lbEJhY2tlbmQucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbiAoKSB7IH07XG4gICAgTm9kZUpTS2VybmVsQmFja2VuZC5wcm90b3R5cGUucmVhZCA9IGZ1bmN0aW9uIChkYXRhSWQpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBbMiwgdGhpcy5yZWFkU3luYyhkYXRhSWQpXTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIE5vZGVKU0tlcm5lbEJhY2tlbmQucHJvdG90eXBlLnJlYWRTeW5jID0gZnVuY3Rpb24gKGRhdGFJZCkge1xuICAgICAgICBpZiAoIXRoaXMudGVuc29yTWFwLmhhcyhkYXRhSWQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUZW5zb3IgXCIgKyBkYXRhSWQgKyBcIiB3YXMgbm90IHJlZ2lzdGVyZWQhXCIpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBpbmZvID0gdGhpcy50ZW5zb3JNYXAuZ2V0KGRhdGFJZCk7XG4gICAgICAgIGlmIChpbmZvLnZhbHVlcyAhPSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gaW5mby52YWx1ZXM7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5iaW5kaW5nLnRlbnNvckRhdGFTeW5jKGluZm8uaWQpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBOb2RlSlNLZXJuZWxCYWNrZW5kLnByb3RvdHlwZS5kaXNwb3NlRGF0YSA9IGZ1bmN0aW9uIChkYXRhSWQpIHtcbiAgICAgICAgdmFyIGlkID0gdGhpcy50ZW5zb3JNYXAuZ2V0KGRhdGFJZCkuaWQ7XG4gICAgICAgIGlmIChpZCAhPSBudWxsICYmIGlkID49IDApIHtcbiAgICAgICAgICAgIHRoaXMuYmluZGluZy5kZWxldGVUZW5zb3IoaWQpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudGVuc29yTWFwLmRlbGV0ZShkYXRhSWQpO1xuICAgIH07XG4gICAgTm9kZUpTS2VybmVsQmFja2VuZC5wcm90b3R5cGUud3JpdGUgPSBmdW5jdGlvbiAoZGF0YUlkLCB2YWx1ZXMpIHtcbiAgICAgICAgaWYgKCF0aGlzLnRlbnNvck1hcC5oYXMoZGF0YUlkKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGVuc29yIFwiICsgZGF0YUlkICsgXCIgd2FzIG5vdCByZWdpc3RlcmVkIVwiKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaW5mbyA9IHRoaXMudGVuc29yTWFwLmdldChkYXRhSWQpO1xuICAgICAgICBpbmZvLnZhbHVlcyA9IHZhbHVlcztcbiAgICAgICAgdGhpcy50ZW5zb3JNYXAuc2V0KGRhdGFJZCwgaW5mbyk7XG4gICAgfTtcbiAgICBOb2RlSlNLZXJuZWxCYWNrZW5kLnByb3RvdHlwZS5yZWdpc3RlciA9IGZ1bmN0aW9uIChkYXRhSWQsIHNoYXBlLCBkdHlwZSkge1xuICAgICAgICBpZiAoIXRoaXMudGVuc29yTWFwLmhhcyhkYXRhSWQpKSB7XG4gICAgICAgICAgICB0aGlzLnRlbnNvck1hcC5zZXQoZGF0YUlkLCB7IHNoYXBlOiBzaGFwZSwgZHR5cGU6IG9wX3V0aWxzXzEuZ2V0VEZEVHlwZShkdHlwZSksIHZhbHVlczogbnVsbCwgaWQ6IC0xIH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBOb2RlSlNLZXJuZWxCYWNrZW5kLnByb3RvdHlwZS5zdHJpZGVkU2xpY2UgPSBmdW5jdGlvbiAoeCwgYmVnaW4sIGVuZCwgc3RyaWRlcywgYmVnaW5NYXNrLCBlbmRNYXNrLCBlbGxpcHNpc01hc2ssIG5ld0F4aXNNYXNrLCBzaHJpbmtBeGlzTWFzaykge1xuICAgICAgICB2YXIgYmVnaW5UZW5zb3IgPSB0ZmpzX2NvcmVfMS50ZW5zb3IxZChiZWdpbiwgJ2ludDMyJyk7XG4gICAgICAgIHZhciBlbmRUZW5zb3IgPSB0ZmpzX2NvcmVfMS50ZW5zb3IxZChlbmQsICdpbnQzMicpO1xuICAgICAgICB2YXIgc3RyaWRlc1RlbnNvciA9IHRmanNfY29yZV8xLnRlbnNvcjFkKHN0cmlkZXMsICdpbnQzMicpO1xuICAgICAgICB2YXIgb3BBdHRycyA9IFtcbiAgICAgICAgICAgIG9wX3V0aWxzXzEuY3JlYXRlVHlwZU9wQXR0cignVCcsIHguZHR5cGUpLCBvcF91dGlsc18xLmNyZWF0ZVR5cGVPcEF0dHIoJ0luZGV4JywgJ2ludDMyJyksXG4gICAgICAgICAgICB7IG5hbWU6ICdiZWdpbl9tYXNrJywgdHlwZTogdGhpcy5iaW5kaW5nLlRGX0FUVFJfSU5ULCB2YWx1ZTogYmVnaW5NYXNrIH0sXG4gICAgICAgICAgICB7IG5hbWU6ICdlbmRfbWFzaycsIHR5cGU6IHRoaXMuYmluZGluZy5URl9BVFRSX0lOVCwgdmFsdWU6IGVuZE1hc2sgfSwge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdlbGxpcHNpc19tYXNrJyxcbiAgICAgICAgICAgICAgICB0eXBlOiB0aGlzLmJpbmRpbmcuVEZfQVRUUl9JTlQsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGVsbGlwc2lzTWFza1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnbmV3X2F4aXNfbWFzaycsXG4gICAgICAgICAgICAgICAgdHlwZTogdGhpcy5iaW5kaW5nLlRGX0FUVFJfSU5ULFxuICAgICAgICAgICAgICAgIHZhbHVlOiBuZXdBeGlzTWFza1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnc2hyaW5rX2F4aXNfbWFzaycsXG4gICAgICAgICAgICAgICAgdHlwZTogdGhpcy5iaW5kaW5nLlRGX0FUVFJfSU5ULFxuICAgICAgICAgICAgICAgIHZhbHVlOiBzaHJpbmtBeGlzTWFza1xuICAgICAgICAgICAgfVxuICAgICAgICBdO1xuICAgICAgICByZXR1cm4gdGhpcy5leGVjdXRlU2luZ2xlT3V0cHV0KCdTdHJpZGVkU2xpY2UnLCBvcEF0dHJzLCBbeCwgYmVnaW5UZW5zb3IsIGVuZFRlbnNvciwgc3RyaWRlc1RlbnNvcl0pO1xuICAgIH07XG4gICAgTm9kZUpTS2VybmVsQmFja2VuZC5wcm90b3R5cGUudW5zdGFjayA9IGZ1bmN0aW9uICh4LCBheGlzKSB7XG4gICAgICAgIGlmIChheGlzID49IHguc2hhcGUubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGF4aXMgc3VwcGxpZWQ6IFwiICsgYXhpcyArIFwiIHNoYXBlIGxlbmd0aDogXCIgKyB4LnNoYXBlLmxlbmd0aCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG51bSA9IHguc2hhcGVbYXhpc107XG4gICAgICAgIHZhciBvcEF0dHJzID0gW1xuICAgICAgICAgICAgeyBuYW1lOiAnbnVtJywgdHlwZTogdGhpcy5iaW5kaW5nLlRGX0FUVFJfSU5ULCB2YWx1ZTogbnVtIH0sXG4gICAgICAgICAgICBvcF91dGlsc18xLmNyZWF0ZVR5cGVPcEF0dHIoJ1QnLCB4LmR0eXBlKSxcbiAgICAgICAgICAgIHsgbmFtZTogJ2F4aXMnLCB0eXBlOiB0aGlzLmJpbmRpbmcuVEZfQVRUUl9JTlQsIHZhbHVlOiBheGlzIH1cbiAgICAgICAgXTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXhlY3V0ZU11bHRpcGxlT3V0cHV0cygnVW5wYWNrJywgb3BBdHRycywgW3hdLCBudW0pO1xuICAgIH07XG4gICAgTm9kZUpTS2VybmVsQmFja2VuZC5wcm90b3R5cGUuYmF0Y2hNYXRNdWwgPSBmdW5jdGlvbiAoYSwgYiwgdHJhbnNwb3NlQSwgdHJhbnNwb3NlQikge1xuICAgICAgICB2YXIgb3BBdHRycyA9IFtcbiAgICAgICAgICAgIG9wX3V0aWxzXzEuY3JlYXRlVHlwZU9wQXR0cignVCcsIGEuZHR5cGUpLFxuICAgICAgICAgICAgeyBuYW1lOiAnYWRqX3gnLCB0eXBlOiB0aGlzLmJpbmRpbmcuVEZfQVRUUl9CT09MLCB2YWx1ZTogdHJhbnNwb3NlQSB9LFxuICAgICAgICAgICAgeyBuYW1lOiAnYWRqX3knLCB0eXBlOiB0aGlzLmJpbmRpbmcuVEZfQVRUUl9CT09MLCB2YWx1ZTogdHJhbnNwb3NlQiB9XG4gICAgICAgIF07XG4gICAgICAgIHJldHVybiB0aGlzLmV4ZWN1dGVTaW5nbGVPdXRwdXQoJ0JhdGNoTWF0TXVsJywgb3BBdHRycywgW2EsIGJdKTtcbiAgICB9O1xuICAgIE5vZGVKU0tlcm5lbEJhY2tlbmQucHJvdG90eXBlLnNsaWNlID0gZnVuY3Rpb24gKHgsIGJlZ2luLCBzaXplKSB7XG4gICAgICAgIHZhciBvcEF0dHJzID0gW29wX3V0aWxzXzEuY3JlYXRlVHlwZU9wQXR0cignVCcsIHguZHR5cGUpLCBvcF91dGlsc18xLmNyZWF0ZVR5cGVPcEF0dHIoJ0luZGV4JywgJ2ludDMyJyldO1xuICAgICAgICB2YXIgYmVnaW5UZW5zb3IgPSB0ZmpzX2NvcmVfMS50ZW5zb3IxZChiZWdpbiwgJ2ludDMyJyk7XG4gICAgICAgIHZhciBzaXplVGVuc29yID0gdGZqc19jb3JlXzEudGVuc29yMWQoc2l6ZSwgJ2ludDMyJyk7XG4gICAgICAgIHJldHVybiB0aGlzLmV4ZWN1dGVTaW5nbGVPdXRwdXQoJ1NsaWNlJywgb3BBdHRycywgW3gsIGJlZ2luVGVuc29yLCBzaXplVGVuc29yXSk7XG4gICAgfTtcbiAgICBOb2RlSlNLZXJuZWxCYWNrZW5kLnByb3RvdHlwZS5yZXZlcnNlID0gZnVuY3Rpb24gKGEsIGF4aXMpIHtcbiAgICAgICAgdmFyIG9wQXR0cnMgPSBbb3BfdXRpbHNfMS5jcmVhdGVUeXBlT3BBdHRyKCdUaWR4JywgJ2ludDMyJyksIG9wX3V0aWxzXzEuY3JlYXRlVHlwZU9wQXR0cignVCcsIGEuZHR5cGUpXTtcbiAgICAgICAgdmFyIGF4aXNUZW5zb3IgPSB0ZmpzX2NvcmVfMS50ZW5zb3IxZChheGlzLCAnaW50MzInKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXhlY3V0ZVNpbmdsZU91dHB1dCgnUmV2ZXJzZVYyJywgb3BBdHRycywgW2EsIGF4aXNUZW5zb3JdKTtcbiAgICB9O1xuICAgIE5vZGVKU0tlcm5lbEJhY2tlbmQucHJvdG90eXBlLmNvbmNhdCA9IGZ1bmN0aW9uICh0ZW5zb3JzLCBheGlzKSB7XG4gICAgICAgIHZhciBvcEF0dHJzID0gW1xuICAgICAgICAgICAgeyBuYW1lOiAnTicsIHR5cGU6IHRoaXMuYmluZGluZy5URl9BVFRSX0lOVCwgdmFsdWU6IHRlbnNvcnMubGVuZ3RoIH0sIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnVGlkeCcsXG4gICAgICAgICAgICAgICAgdHlwZTogdGhpcy5iaW5kaW5nLlRGX0FUVFJfVFlQRSxcbiAgICAgICAgICAgICAgICB2YWx1ZTogdGhpcy5iaW5kaW5nLlRGX0lOVDMyXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb3BfdXRpbHNfMS5jcmVhdGVUZW5zb3JzVHlwZU9wQXR0cignVCcsIHRlbnNvcnMpXG4gICAgICAgIF07XG4gICAgICAgIHZhciBpbnB1dHMgPSBBcnJheS5mcm9tKHRlbnNvcnMpO1xuICAgICAgICBpbnB1dHMucHVzaCh0ZmpzX2NvcmVfMS5zY2FsYXIoYXhpcywgJ2ludDMyJykpO1xuICAgICAgICByZXR1cm4gdGhpcy5leGVjdXRlU2luZ2xlT3V0cHV0KCdDb25jYXRWMicsIG9wQXR0cnMsIGlucHV0cyk7XG4gICAgfTtcbiAgICBOb2RlSlNLZXJuZWxCYWNrZW5kLnByb3RvdHlwZS5uZWcgPSBmdW5jdGlvbiAoYSkge1xuICAgICAgICByZXR1cm4gdGhpcy5leGVjdXRlU2luZ2xlSW5wdXQoJ05lZycsIGEpO1xuICAgIH07XG4gICAgTm9kZUpTS2VybmVsQmFja2VuZC5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgdmFyIG9wQXR0cnMgPSBbb3BfdXRpbHNfMS5jcmVhdGVUeXBlT3BBdHRyKCdUJywgdHlwZXNfMS51cGNhc3RUeXBlKGEuZHR5cGUsIGIuZHR5cGUpKV07XG4gICAgICAgIHJldHVybiB0aGlzLmV4ZWN1dGVTaW5nbGVPdXRwdXQoJ0FkZCcsIG9wQXR0cnMsIFthLCBiXSk7XG4gICAgfTtcbiAgICBOb2RlSlNLZXJuZWxCYWNrZW5kLnByb3RvdHlwZS5zZWxlY3QgPSBmdW5jdGlvbiAoY29uZGl0aW9uLCBhLCBiKSB7XG4gICAgICAgIHZhciBvcEF0dHJzID0gW29wX3V0aWxzXzEuY3JlYXRlVHlwZU9wQXR0cignVCcsIHR5cGVzXzEudXBjYXN0VHlwZShhLmR0eXBlLCBiLmR0eXBlKSldO1xuICAgICAgICByZXR1cm4gdGhpcy5leGVjdXRlU2luZ2xlT3V0cHV0KCdTZWxlY3QnLCBvcEF0dHJzLCBbY29uZGl0aW9uLCBhLCBiXSk7XG4gICAgfTtcbiAgICBOb2RlSlNLZXJuZWxCYWNrZW5kLnByb3RvdHlwZS5hZGROID0gZnVuY3Rpb24gKHRlbnNvcnMpIHtcbiAgICAgICAgdmFyIG9wQXR0cnMgPSBbXG4gICAgICAgICAgICBvcF91dGlsc18xLmNyZWF0ZVR5cGVPcEF0dHIoJ1QnLCB0ZW5zb3JzWzBdLmR0eXBlKSxcbiAgICAgICAgICAgIHsgbmFtZTogJ04nLCB0eXBlOiB0aGlzLmJpbmRpbmcuVEZfQVRUUl9JTlQsIHZhbHVlOiB0ZW5zb3JzLmxlbmd0aCB9XG4gICAgICAgIF07XG4gICAgICAgIHJldHVybiB0aGlzLmV4ZWN1dGVTaW5nbGVPdXRwdXQoJ0FkZE4nLCBvcEF0dHJzLCB0ZW5zb3JzKTtcbiAgICB9O1xuICAgIE5vZGVKU0tlcm5lbEJhY2tlbmQucHJvdG90eXBlLnN1YnRyYWN0ID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgdmFyIG9wQXR0cnMgPSBbb3BfdXRpbHNfMS5jcmVhdGVUeXBlT3BBdHRyKCdUJywgdHlwZXNfMS51cGNhc3RUeXBlKGEuZHR5cGUsIGIuZHR5cGUpKV07XG4gICAgICAgIHJldHVybiB0aGlzLmV4ZWN1dGVTaW5nbGVPdXRwdXQoJ1N1YicsIG9wQXR0cnMsIFthLCBiXSk7XG4gICAgfTtcbiAgICBOb2RlSlNLZXJuZWxCYWNrZW5kLnByb3RvdHlwZS5tdWx0aXBseSA9IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIHZhciBvcEF0dHJzID0gW29wX3V0aWxzXzEuY3JlYXRlVHlwZU9wQXR0cignVCcsIHR5cGVzXzEudXBjYXN0VHlwZShhLmR0eXBlLCBiLmR0eXBlKSldO1xuICAgICAgICByZXR1cm4gdGhpcy5leGVjdXRlU2luZ2xlT3V0cHV0KCdNdWwnLCBvcEF0dHJzLCBbYSwgYl0pO1xuICAgIH07XG4gICAgTm9kZUpTS2VybmVsQmFja2VuZC5wcm90b3R5cGUucmVhbERpdmlkZSA9IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIHZhciBvcEF0dHJzID0gW29wX3V0aWxzXzEuY3JlYXRlVHlwZU9wQXR0cignVCcsIHR5cGVzXzEudXBjYXN0VHlwZShhLmR0eXBlLCBiLmR0eXBlKSldO1xuICAgICAgICByZXR1cm4gdGhpcy5leGVjdXRlU2luZ2xlT3V0cHV0KCdSZWFsRGl2Jywgb3BBdHRycywgW2EsIGJdKTtcbiAgICB9O1xuICAgIE5vZGVKU0tlcm5lbEJhY2tlbmQucHJvdG90eXBlLmZsb29yRGl2ID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgdmFyIG9wQXR0cnMgPSBbb3BfdXRpbHNfMS5jcmVhdGVUeXBlT3BBdHRyKCdUJywgdHlwZXNfMS51cGNhc3RUeXBlKGEuZHR5cGUsIGIuZHR5cGUpKV07XG4gICAgICAgIHJldHVybiB0aGlzLmV4ZWN1dGVTaW5nbGVPdXRwdXQoJ0Zsb29yRGl2Jywgb3BBdHRycywgW2EsIGJdKTtcbiAgICB9O1xuICAgIE5vZGVKU0tlcm5lbEJhY2tlbmQucHJvdG90eXBlLmRpdmlkZSA9IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIHZhciBvcEF0dHJzID0gW29wX3V0aWxzXzEuY3JlYXRlVHlwZU9wQXR0cignVCcsIHR5cGVzXzEudXBjYXN0VHlwZShhLmR0eXBlLCBiLmR0eXBlKSldO1xuICAgICAgICByZXR1cm4gdGhpcy5leGVjdXRlU2luZ2xlT3V0cHV0KCdEaXYnLCBvcEF0dHJzLCBbYSwgYl0pO1xuICAgIH07XG4gICAgTm9kZUpTS2VybmVsQmFja2VuZC5wcm90b3R5cGUudW5zb3J0ZWRTZWdtZW50U3VtID0gZnVuY3Rpb24gKHgsIHNlZ21lbnRJZHMsIG51bVNlZ21lbnRzKSB7XG4gICAgICAgIHZhciBvcEF0dHJzID0gW1xuICAgICAgICAgICAgb3BfdXRpbHNfMS5jcmVhdGVUeXBlT3BBdHRyKCdUJywgeC5kdHlwZSksIG9wX3V0aWxzXzEuY3JlYXRlVHlwZU9wQXR0cignVGluZGljZXMnLCAnaW50MzInKSxcbiAgICAgICAgICAgIG9wX3V0aWxzXzEuY3JlYXRlVHlwZU9wQXR0cignVG51bXNlZ21lbnRzJywgJ2ludDMyJylcbiAgICAgICAgXTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXhlY3V0ZVNpbmdsZU91dHB1dCgnVW5zb3J0ZWRTZWdtZW50U3VtJywgb3BBdHRycywgW3gsIHNlZ21lbnRJZHMsIHRmanNfY29yZV8xLnNjYWxhcihudW1TZWdtZW50cywgJ2ludDMyJyldKTtcbiAgICB9O1xuICAgIE5vZGVKU0tlcm5lbEJhY2tlbmQucHJvdG90eXBlLnN1bSA9IGZ1bmN0aW9uICh4LCBheGVzKSB7XG4gICAgICAgIHZhciBheGlzVGVuc29yID0gdGZqc19jb3JlXzEudGVuc29yMWQoYXhlcywgJ2ludDMyJyk7XG4gICAgICAgIHJldHVybiB0aGlzLmV4ZWN1dGVTaW5nbGVPdXRwdXQoJ1N1bScsIHRoaXMuY3JlYXRlUmVkdWN0aW9uT3BBdHRycyh4KSwgW3gsIGF4aXNUZW5zb3JdKTtcbiAgICB9O1xuICAgIE5vZGVKU0tlcm5lbEJhY2tlbmQucHJvdG90eXBlLnByb2QgPSBmdW5jdGlvbiAoeCwgYXhlcykge1xuICAgICAgICB2YXIgYXhlc1RlbnNvciA9IHRmanNfY29yZV8xLnRlbnNvcjFkKGF4ZXMsICdpbnQzMicpO1xuICAgICAgICB2YXIgb3BBdHRycyA9IFtcbiAgICAgICAgICAgIHsgbmFtZTogJ2tlZXBfZGltcycsIHR5cGU6IHRoaXMuYmluZGluZy5URl9BVFRSX0JPT0wsIHZhbHVlOiBmYWxzZSB9LFxuICAgICAgICAgICAgb3BfdXRpbHNfMS5jcmVhdGVUeXBlT3BBdHRyKCdUJywgeC5kdHlwZSksIG9wX3V0aWxzXzEuY3JlYXRlVHlwZU9wQXR0cignVGlkeCcsICdpbnQzMicpXG4gICAgICAgIF07XG4gICAgICAgIHJldHVybiB0aGlzLmV4ZWN1dGVTaW5nbGVPdXRwdXQoJ1Byb2QnLCBvcEF0dHJzLCBbeCwgYXhlc1RlbnNvcl0pO1xuICAgIH07XG4gICAgTm9kZUpTS2VybmVsQmFja2VuZC5wcm90b3R5cGUuYXJnTWluID0gZnVuY3Rpb24gKHgsIGF4aXMpIHtcbiAgICAgICAgdmFyIHhJbnB1dCA9IHguZHR5cGUgPT09ICdib29sJyA/IHgudG9JbnQoKSA6IHg7XG4gICAgICAgIHZhciBheGlzU2NhbGFyID0gdGZqc19jb3JlXzEuc2NhbGFyKGF4aXMsICdpbnQzMicpO1xuICAgICAgICB2YXIgb3BBdHRycyA9IFtcbiAgICAgICAgICAgIG9wX3V0aWxzXzEuY3JlYXRlVHlwZU9wQXR0cignVCcsIHhJbnB1dC5kdHlwZSksIG9wX3V0aWxzXzEuY3JlYXRlVHlwZU9wQXR0cignVGlkeCcsICdpbnQzMicpLFxuICAgICAgICAgICAgb3BfdXRpbHNfMS5jcmVhdGVUeXBlT3BBdHRyKCdvdXRwdXRfdHlwZScsICdpbnQzMicpXG4gICAgICAgIF07XG4gICAgICAgIHJldHVybiB0aGlzLmV4ZWN1dGVTaW5nbGVPdXRwdXQoJ0FyZ01pbicsIG9wQXR0cnMsIFt4SW5wdXQsIGF4aXNTY2FsYXJdKTtcbiAgICB9O1xuICAgIE5vZGVKU0tlcm5lbEJhY2tlbmQucHJvdG90eXBlLmFyZ01heCA9IGZ1bmN0aW9uICh4LCBheGlzKSB7XG4gICAgICAgIHZhciB4SW5wdXQgPSB4LmR0eXBlID09PSAnYm9vbCcgPyB4LnRvSW50KCkgOiB4O1xuICAgICAgICB2YXIgYXhpc1NjYWxhciA9IHRmanNfY29yZV8xLnNjYWxhcihheGlzLCAnaW50MzInKTtcbiAgICAgICAgdmFyIG9wQXR0cnMgPSBbXG4gICAgICAgICAgICBvcF91dGlsc18xLmNyZWF0ZVR5cGVPcEF0dHIoJ1QnLCB4SW5wdXQuZHR5cGUpLCBvcF91dGlsc18xLmNyZWF0ZVR5cGVPcEF0dHIoJ1RpZHgnLCAnaW50MzInKSxcbiAgICAgICAgICAgIG9wX3V0aWxzXzEuY3JlYXRlVHlwZU9wQXR0cignb3V0cHV0X3R5cGUnLCAnaW50MzInKVxuICAgICAgICBdO1xuICAgICAgICByZXR1cm4gdGhpcy5leGVjdXRlU2luZ2xlT3V0cHV0KCdBcmdNYXgnLCBvcEF0dHJzLCBbeElucHV0LCBheGlzU2NhbGFyXSk7XG4gICAgfTtcbiAgICBOb2RlSlNLZXJuZWxCYWNrZW5kLnByb3RvdHlwZS5lcXVhbCA9IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIHZhciBvcEF0dHJzID0gW29wX3V0aWxzXzEuY3JlYXRlVHlwZU9wQXR0cignVCcsIHR5cGVzXzEudXBjYXN0VHlwZShhLmR0eXBlLCBiLmR0eXBlKSldO1xuICAgICAgICByZXR1cm4gdGhpcy5leGVjdXRlU2luZ2xlT3V0cHV0KCdFcXVhbCcsIG9wQXR0cnMsIFthLCBiXSk7XG4gICAgfTtcbiAgICBOb2RlSlNLZXJuZWxCYWNrZW5kLnByb3RvdHlwZS5ub3RFcXVhbCA9IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIHZhciBvcEF0dHJzID0gW29wX3V0aWxzXzEuY3JlYXRlVHlwZU9wQXR0cignVCcsIHR5cGVzXzEudXBjYXN0VHlwZShhLmR0eXBlLCBiLmR0eXBlKSldO1xuICAgICAgICByZXR1cm4gdGhpcy5leGVjdXRlU2luZ2xlT3V0cHV0KCdOb3RFcXVhbCcsIG9wQXR0cnMsIFthLCBiXSk7XG4gICAgfTtcbiAgICBOb2RlSlNLZXJuZWxCYWNrZW5kLnByb3RvdHlwZS5sZXNzID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgdmFyIG9wQXR0cnMgPSBbb3BfdXRpbHNfMS5jcmVhdGVUeXBlT3BBdHRyKCdUJywgdHlwZXNfMS51cGNhc3RUeXBlKGEuZHR5cGUsIGIuZHR5cGUpKV07XG4gICAgICAgIHJldHVybiB0aGlzLmV4ZWN1dGVTaW5nbGVPdXRwdXQoJ0xlc3MnLCBvcEF0dHJzLCBbYSwgYl0pO1xuICAgIH07XG4gICAgTm9kZUpTS2VybmVsQmFja2VuZC5wcm90b3R5cGUubGVzc0VxdWFsID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgdmFyIG9wQXR0cnMgPSBbb3BfdXRpbHNfMS5jcmVhdGVUeXBlT3BBdHRyKCdUJywgdHlwZXNfMS51cGNhc3RUeXBlKGEuZHR5cGUsIGIuZHR5cGUpKV07XG4gICAgICAgIHJldHVybiB0aGlzLmV4ZWN1dGVTaW5nbGVPdXRwdXQoJ0xlc3NFcXVhbCcsIG9wQXR0cnMsIFthLCBiXSk7XG4gICAgfTtcbiAgICBOb2RlSlNLZXJuZWxCYWNrZW5kLnByb3RvdHlwZS5ncmVhdGVyID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgdmFyIG9wQXR0cnMgPSBbb3BfdXRpbHNfMS5jcmVhdGVUeXBlT3BBdHRyKCdUJywgdHlwZXNfMS51cGNhc3RUeXBlKGEuZHR5cGUsIGIuZHR5cGUpKV07XG4gICAgICAgIHJldHVybiB0aGlzLmV4ZWN1dGVTaW5nbGVPdXRwdXQoJ0dyZWF0ZXInLCBvcEF0dHJzLCBbYSwgYl0pO1xuICAgIH07XG4gICAgTm9kZUpTS2VybmVsQmFja2VuZC5wcm90b3R5cGUuZ3JlYXRlckVxdWFsID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgdmFyIG9wQXR0cnMgPSBbb3BfdXRpbHNfMS5jcmVhdGVUeXBlT3BBdHRyKCdUJywgdHlwZXNfMS51cGNhc3RUeXBlKGEuZHR5cGUsIGIuZHR5cGUpKV07XG4gICAgICAgIHJldHVybiB0aGlzLmV4ZWN1dGVTaW5nbGVPdXRwdXQoJ0dyZWF0ZXJFcXVhbCcsIG9wQXR0cnMsIFthLCBiXSk7XG4gICAgfTtcbiAgICBOb2RlSlNLZXJuZWxCYWNrZW5kLnByb3RvdHlwZS5sb2dpY2FsTm90ID0gZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXhlY3V0ZVNpbmdsZU91dHB1dCgnTG9naWNhbE5vdCcsIFtdLCBbYV0pO1xuICAgIH07XG4gICAgTm9kZUpTS2VybmVsQmFja2VuZC5wcm90b3R5cGUubG9naWNhbEFuZCA9IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmV4ZWN1dGVTaW5nbGVPdXRwdXQoJ0xvZ2ljYWxBbmQnLCBbXSwgW2EsIGJdKTtcbiAgICB9O1xuICAgIE5vZGVKU0tlcm5lbEJhY2tlbmQucHJvdG90eXBlLmxvZ2ljYWxPciA9IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmV4ZWN1dGVTaW5nbGVPdXRwdXQoJ0xvZ2ljYWxPcicsIFtdLCBbYSwgYl0pO1xuICAgIH07XG4gICAgTm9kZUpTS2VybmVsQmFja2VuZC5wcm90b3R5cGUud2hlcmUgPSBmdW5jdGlvbiAoY29uZGl0aW9uKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmV4ZWN1dGVTaW5nbGVPdXRwdXQoJ1doZXJlJywgW10sIFtjb25kaXRpb25dKTtcbiAgICB9O1xuICAgIE5vZGVKU0tlcm5lbEJhY2tlbmQucHJvdG90eXBlLnRvcEtWYWx1ZXMgPSBmdW5jdGlvbiAoeCwgaykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01ldGhvZCBub3QgaW1wbGVtZW50ZWQuJyk7XG4gICAgfTtcbiAgICBOb2RlSlNLZXJuZWxCYWNrZW5kLnByb3RvdHlwZS50b3BLSW5kaWNlcyA9IGZ1bmN0aW9uICh4LCBrKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC4nKTtcbiAgICB9O1xuICAgIE5vZGVKU0tlcm5lbEJhY2tlbmQucHJvdG90eXBlLnRvcGsgPSBmdW5jdGlvbiAoeCwgaywgc29ydGVkKSB7XG4gICAgICAgIHZhciBrQ291bnQgPSB1dGlsXzEuaXNOdWxsT3JVbmRlZmluZWQoaykgPyAxIDogaztcbiAgICAgICAgdmFyIGlzU29ydGVkID0gdXRpbF8xLmlzTnVsbE9yVW5kZWZpbmVkKHNvcnRlZCkgPyB0cnVlIDogc29ydGVkO1xuICAgICAgICB2YXIgb3BBdHRycyA9IFtcbiAgICAgICAgICAgIHsgbmFtZTogJ3NvcnRlZCcsIHR5cGU6IHRoaXMuYmluZGluZy5URl9BVFRSX0JPT0wsIHZhbHVlOiBpc1NvcnRlZCB9LFxuICAgICAgICAgICAgb3BfdXRpbHNfMS5jcmVhdGVUeXBlT3BBdHRyKCdUJywgeC5kdHlwZSksXG4gICAgICAgIF07XG4gICAgICAgIHZhciBrVGVuc29yID0gdGZqc19jb3JlXzEuc2NhbGFyKGtDb3VudCwgJ2ludDMyJyk7XG4gICAgICAgIHJldHVybiB0aGlzLmV4ZWN1dGVNdWx0aXBsZU91dHB1dHMoJ1RvcEtWMicsIG9wQXR0cnMsIFt4LCBrVGVuc29yXSwgMik7XG4gICAgfTtcbiAgICBOb2RlSlNLZXJuZWxCYWNrZW5kLnByb3RvdHlwZS5taW4gPSBmdW5jdGlvbiAoeCwgYXhlcykge1xuICAgICAgICB2YXIgYXhlc1RlbnNvciA9IHRmanNfY29yZV8xLnRlbnNvcjFkKGF4ZXMsICdpbnQzMicpO1xuICAgICAgICByZXR1cm4gdGhpcy5leGVjdXRlU2luZ2xlT3V0cHV0KCdNaW4nLCB0aGlzLmNyZWF0ZVJlZHVjdGlvbk9wQXR0cnMoeCksIFt4LCBheGVzVGVuc29yXSk7XG4gICAgfTtcbiAgICBOb2RlSlNLZXJuZWxCYWNrZW5kLnByb3RvdHlwZS5taW5pbXVtID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgdmFyIG9wQXR0cnMgPSBbb3BfdXRpbHNfMS5jcmVhdGVUeXBlT3BBdHRyKCdUJywgdHlwZXNfMS51cGNhc3RUeXBlKGEuZHR5cGUsIGIuZHR5cGUpKV07XG4gICAgICAgIHJldHVybiB0aGlzLmV4ZWN1dGVTaW5nbGVPdXRwdXQoJ01pbmltdW0nLCBvcEF0dHJzLCBbYSwgYl0pO1xuICAgIH07XG4gICAgTm9kZUpTS2VybmVsQmFja2VuZC5wcm90b3R5cGUubWF4ID0gZnVuY3Rpb24gKHgsIGF4ZXMpIHtcbiAgICAgICAgdmFyIGF4ZXNUZW5zb3IgPSB0ZmpzX2NvcmVfMS50ZW5zb3IxZChheGVzLCAnaW50MzInKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXhlY3V0ZVNpbmdsZU91dHB1dCgnTWF4JywgdGhpcy5jcmVhdGVSZWR1Y3Rpb25PcEF0dHJzKHgpLCBbeCwgYXhlc1RlbnNvcl0pO1xuICAgIH07XG4gICAgTm9kZUpTS2VybmVsQmFja2VuZC5wcm90b3R5cGUubWF4aW11bSA9IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIHZhciBvcEF0dHJzID0gW29wX3V0aWxzXzEuY3JlYXRlVHlwZU9wQXR0cignVCcsIHR5cGVzXzEudXBjYXN0VHlwZShhLmR0eXBlLCBiLmR0eXBlKSldO1xuICAgICAgICByZXR1cm4gdGhpcy5leGVjdXRlU2luZ2xlT3V0cHV0KCdNYXhpbXVtJywgb3BBdHRycywgW2EsIGJdKTtcbiAgICB9O1xuICAgIE5vZGVKU0tlcm5lbEJhY2tlbmQucHJvdG90eXBlLmFsbCA9IGZ1bmN0aW9uICh4LCBheGVzKSB7XG4gICAgICAgIHZhciBvcEF0dHJzID0gW1xuICAgICAgICAgICAgeyBuYW1lOiAna2VlcF9kaW1zJywgdHlwZTogdGhpcy5iaW5kaW5nLlRGX0FUVFJfQk9PTCwgdmFsdWU6IGZhbHNlIH0sXG4gICAgICAgICAgICBvcF91dGlsc18xLmNyZWF0ZVR5cGVPcEF0dHIoJ1RpZHgnLCAnaW50MzInKVxuICAgICAgICBdO1xuICAgICAgICB2YXIgYXhlc1RlbnNvciA9IHRmanNfY29yZV8xLnRlbnNvcjFkKGF4ZXMsICdpbnQzMicpO1xuICAgICAgICByZXR1cm4gdGhpcy5leGVjdXRlU2luZ2xlT3V0cHV0KCdBbGwnLCBvcEF0dHJzLCBbeCwgYXhlc1RlbnNvcl0pO1xuICAgIH07XG4gICAgTm9kZUpTS2VybmVsQmFja2VuZC5wcm90b3R5cGUuYW55ID0gZnVuY3Rpb24gKHgsIGF4ZXMpIHtcbiAgICAgICAgdmFyIG9wQXR0cnMgPSBbXG4gICAgICAgICAgICB7IG5hbWU6ICdrZWVwX2RpbXMnLCB0eXBlOiB0aGlzLmJpbmRpbmcuVEZfQVRUUl9CT09MLCB2YWx1ZTogZmFsc2UgfSxcbiAgICAgICAgICAgIG9wX3V0aWxzXzEuY3JlYXRlVHlwZU9wQXR0cignVGlkeCcsICdpbnQzMicpXG4gICAgICAgIF07XG4gICAgICAgIHZhciBheGVzVGVuc29yID0gdGZqc19jb3JlXzEudGVuc29yMWQoYXhlcywgJ2ludDMyJyk7XG4gICAgICAgIHJldHVybiB0aGlzLmV4ZWN1dGVTaW5nbGVPdXRwdXQoJ0FueScsIG9wQXR0cnMsIFt4LCBheGVzVGVuc29yXSk7XG4gICAgfTtcbiAgICBOb2RlSlNLZXJuZWxCYWNrZW5kLnByb3RvdHlwZS5jZWlsID0gZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXhlY3V0ZVNpbmdsZUlucHV0KCdDZWlsJywgeCk7XG4gICAgfTtcbiAgICBOb2RlSlNLZXJuZWxCYWNrZW5kLnByb3RvdHlwZS5mbG9vciA9IGZ1bmN0aW9uICh4KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmV4ZWN1dGVTaW5nbGVJbnB1dCgnRmxvb3InLCB4KTtcbiAgICB9O1xuICAgIE5vZGVKU0tlcm5lbEJhY2tlbmQucHJvdG90eXBlLnBvdyA9IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIHZhciBkdHlwZSA9IHR5cGVzXzEudXBjYXN0VHlwZShhLmR0eXBlLCBiLmR0eXBlKTtcbiAgICAgICAgdmFyIG9wQXR0cnMgPSBbb3BfdXRpbHNfMS5jcmVhdGVUeXBlT3BBdHRyKCdUJywgZHR5cGUpXTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXhlY3V0ZVNpbmdsZU91dHB1dCgnUG93Jywgb3BBdHRycywgW2EuY2FzdChkdHlwZSksIGIuY2FzdChkdHlwZSldKTtcbiAgICB9O1xuICAgIE5vZGVKU0tlcm5lbEJhY2tlbmQucHJvdG90eXBlLmV4cCA9IGZ1bmN0aW9uICh4KSB7XG4gICAgICAgIHZhciB4VGVuc29yID0geC5kdHlwZSA9PT0gJ2ludDMyJyA/IHgudG9GbG9hdCgpIDogeDtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXhlY3V0ZVNpbmdsZUlucHV0KCdFeHAnLCB4VGVuc29yKTtcbiAgICB9O1xuICAgIE5vZGVKU0tlcm5lbEJhY2tlbmQucHJvdG90eXBlLmxvZyA9IGZ1bmN0aW9uICh4KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmV4ZWN1dGVTaW5nbGVJbnB1dCgnTG9nJywgeCk7XG4gICAgfTtcbiAgICBOb2RlSlNLZXJuZWxCYWNrZW5kLnByb3RvdHlwZS5sb2cxcCA9IGZ1bmN0aW9uICh4KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmV4ZWN1dGVTaW5nbGVJbnB1dCgnTG9nMXAnLCB4KTtcbiAgICB9O1xuICAgIE5vZGVKU0tlcm5lbEJhY2tlbmQucHJvdG90eXBlLnNxcnQgPSBmdW5jdGlvbiAoeCkge1xuICAgICAgICByZXR1cm4gdGhpcy5leGVjdXRlU2luZ2xlSW5wdXQoJ1NxcnQnLCB4KTtcbiAgICB9O1xuICAgIE5vZGVKU0tlcm5lbEJhY2tlbmQucHJvdG90eXBlLnNxdWFyZSA9IGZ1bmN0aW9uICh4KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmV4ZWN1dGVTaW5nbGVJbnB1dCgnU3F1YXJlJywgeCk7XG4gICAgfTtcbiAgICBOb2RlSlNLZXJuZWxCYWNrZW5kLnByb3RvdHlwZS5yZWx1ID0gZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXhlY3V0ZVNpbmdsZUlucHV0KCdSZWx1JywgeCk7XG4gICAgfTtcbiAgICBOb2RlSlNLZXJuZWxCYWNrZW5kLnByb3RvdHlwZS5wcmVsdSA9IGZ1bmN0aW9uICh4LCBhKSB7XG4gICAgICAgIHZhciBwb3MgPSB0aGlzLnJlbHUoeCk7XG4gICAgICAgIHZhciBuZWcgPSBhLm11bCh4LnN1Yih0aGlzLmFicyh4KSkpLm11bCgwLjUpO1xuICAgICAgICByZXR1cm4gcG9zLmFkZChuZWcpO1xuICAgIH07XG4gICAgTm9kZUpTS2VybmVsQmFja2VuZC5wcm90b3R5cGUuZWx1ID0gZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXhlY3V0ZVNpbmdsZUlucHV0KCdFbHUnLCB4KTtcbiAgICB9O1xuICAgIE5vZGVKU0tlcm5lbEJhY2tlbmQucHJvdG90eXBlLmVsdURlciA9IGZ1bmN0aW9uIChkeSwgeSkge1xuICAgICAgICB2YXIgb3BBdHRycyA9IFtvcF91dGlsc18xLmNyZWF0ZVR5cGVPcEF0dHIoJ1QnLCB5LmR0eXBlKV07XG4gICAgICAgIHJldHVybiB0aGlzLmV4ZWN1dGVTaW5nbGVPdXRwdXQoJ0VsdUdyYWQnLCBvcEF0dHJzLCBbZHksIHldKTtcbiAgICB9O1xuICAgIE5vZGVKU0tlcm5lbEJhY2tlbmQucHJvdG90eXBlLnNlbHUgPSBmdW5jdGlvbiAoeCkge1xuICAgICAgICByZXR1cm4gdGhpcy5leGVjdXRlU2luZ2xlSW5wdXQoJ1NlbHUnLCB4KTtcbiAgICB9O1xuICAgIE5vZGVKU0tlcm5lbEJhY2tlbmQucHJvdG90eXBlLmludCA9IGZ1bmN0aW9uICh4KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC4nKTtcbiAgICB9O1xuICAgIE5vZGVKU0tlcm5lbEJhY2tlbmQucHJvdG90eXBlLmNsaXAgPSBmdW5jdGlvbiAoeCwgbWluLCBtYXgpIHtcbiAgICAgICAgdmFyIHhNaW4gPSB0aGlzLm1pbmltdW0oeCwgdGZqc19jb3JlXzEuc2NhbGFyKG1heCkpO1xuICAgICAgICByZXR1cm4gdGhpcy5tYXhpbXVtKHhNaW4sIHRmanNfY29yZV8xLnNjYWxhcihtaW4pKTtcbiAgICB9O1xuICAgIE5vZGVKU0tlcm5lbEJhY2tlbmQucHJvdG90eXBlLmFicyA9IGZ1bmN0aW9uICh4KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmV4ZWN1dGVTaW5nbGVJbnB1dCgnQWJzJywgeCk7XG4gICAgfTtcbiAgICBOb2RlSlNLZXJuZWxCYWNrZW5kLnByb3RvdHlwZS5jb21wbGV4QWJzID0gZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgdmFyIG9wQXR0cnMgPSBbb3BfdXRpbHNfMS5jcmVhdGVUeXBlT3BBdHRyKCdUJywgeC5kdHlwZSksIG9wX3V0aWxzXzEuY3JlYXRlVHlwZU9wQXR0cignVG91dCcsICdmbG9hdDMyJyldO1xuICAgICAgICByZXR1cm4gdGhpcy5leGVjdXRlU2luZ2xlT3V0cHV0KCdDb21wbGV4QWJzJywgb3BBdHRycywgW3hdKTtcbiAgICB9O1xuICAgIE5vZGVKU0tlcm5lbEJhY2tlbmQucHJvdG90eXBlLnNpZ21vaWQgPSBmdW5jdGlvbiAoeCkge1xuICAgICAgICByZXR1cm4gdGhpcy5leGVjdXRlU2luZ2xlSW5wdXQoJ1NpZ21vaWQnLCB4KTtcbiAgICB9O1xuICAgIE5vZGVKU0tlcm5lbEJhY2tlbmQucHJvdG90eXBlLnNpbiA9IGZ1bmN0aW9uICh4KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmV4ZWN1dGVTaW5nbGVJbnB1dCgnU2luJywgeCk7XG4gICAgfTtcbiAgICBOb2RlSlNLZXJuZWxCYWNrZW5kLnByb3RvdHlwZS5jb3MgPSBmdW5jdGlvbiAoeCkge1xuICAgICAgICByZXR1cm4gdGhpcy5leGVjdXRlU2luZ2xlSW5wdXQoJ0NvcycsIHgpO1xuICAgIH07XG4gICAgTm9kZUpTS2VybmVsQmFja2VuZC5wcm90b3R5cGUudGFuID0gZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXhlY3V0ZVNpbmdsZUlucHV0KCdUYW4nLCB4KTtcbiAgICB9O1xuICAgIE5vZGVKU0tlcm5lbEJhY2tlbmQucHJvdG90eXBlLmFzaW4gPSBmdW5jdGlvbiAoeCkge1xuICAgICAgICByZXR1cm4gdGhpcy5leGVjdXRlU2luZ2xlSW5wdXQoJ0FzaW4nLCB4KTtcbiAgICB9O1xuICAgIE5vZGVKU0tlcm5lbEJhY2tlbmQucHJvdG90eXBlLmFjb3MgPSBmdW5jdGlvbiAoeCkge1xuICAgICAgICByZXR1cm4gdGhpcy5leGVjdXRlU2luZ2xlSW5wdXQoJ0Fjb3MnLCB4KTtcbiAgICB9O1xuICAgIE5vZGVKU0tlcm5lbEJhY2tlbmQucHJvdG90eXBlLmF0YW4gPSBmdW5jdGlvbiAoeCkge1xuICAgICAgICByZXR1cm4gdGhpcy5leGVjdXRlU2luZ2xlSW5wdXQoJ0F0YW4nLCB4KTtcbiAgICB9O1xuICAgIE5vZGVKU0tlcm5lbEJhY2tlbmQucHJvdG90eXBlLnNpbmggPSBmdW5jdGlvbiAoeCkge1xuICAgICAgICByZXR1cm4gdGhpcy5leGVjdXRlU2luZ2xlSW5wdXQoJ1NpbmgnLCB4KTtcbiAgICB9O1xuICAgIE5vZGVKU0tlcm5lbEJhY2tlbmQucHJvdG90eXBlLmNvc2ggPSBmdW5jdGlvbiAoeCkge1xuICAgICAgICByZXR1cm4gdGhpcy5leGVjdXRlU2luZ2xlSW5wdXQoJ0Nvc2gnLCB4KTtcbiAgICB9O1xuICAgIE5vZGVKU0tlcm5lbEJhY2tlbmQucHJvdG90eXBlLnRhbmggPSBmdW5jdGlvbiAoeCkge1xuICAgICAgICByZXR1cm4gdGhpcy5leGVjdXRlU2luZ2xlSW5wdXQoJ1RhbmgnLCB4KTtcbiAgICB9O1xuICAgIE5vZGVKU0tlcm5lbEJhY2tlbmQucHJvdG90eXBlLm1vZCA9IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIHZhciBvcEF0dHJzID0gW29wX3V0aWxzXzEuY3JlYXRlVHlwZU9wQXR0cignVCcsIGEuZHR5cGUpXTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXhlY3V0ZVNpbmdsZU91dHB1dCgnRmxvb3JNb2QnLCBvcEF0dHJzLCBbYSwgYl0pO1xuICAgIH07XG4gICAgTm9kZUpTS2VybmVsQmFja2VuZC5wcm90b3R5cGUucm91bmQgPSBmdW5jdGlvbiAoeCkge1xuICAgICAgICByZXR1cm4gdGhpcy5leGVjdXRlU2luZ2xlSW5wdXQoJ1JvdW5kJywgeCk7XG4gICAgfTtcbiAgICBOb2RlSlNLZXJuZWxCYWNrZW5kLnByb3RvdHlwZS5zaWduID0gZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXhlY3V0ZVNpbmdsZUlucHV0KCdTaWduJywgeCk7XG4gICAgfTtcbiAgICBOb2RlSlNLZXJuZWxCYWNrZW5kLnByb3RvdHlwZS5yc3FydCA9IGZ1bmN0aW9uICh4KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmV4ZWN1dGVTaW5nbGVJbnB1dCgnUnNxcnQnLCB4KTtcbiAgICB9O1xuICAgIE5vZGVKU0tlcm5lbEJhY2tlbmQucHJvdG90eXBlLnJlY2lwcm9jYWwgPSBmdW5jdGlvbiAoeCkge1xuICAgICAgICByZXR1cm4gdGhpcy5leGVjdXRlU2luZ2xlSW5wdXQoJ1JlY2lwcm9jYWwnLCB4KTtcbiAgICB9O1xuICAgIE5vZGVKU0tlcm5lbEJhY2tlbmQucHJvdG90eXBlLmFzaW5oID0gZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXhlY3V0ZVNpbmdsZUlucHV0KCdBc2luaCcsIHgpO1xuICAgIH07XG4gICAgTm9kZUpTS2VybmVsQmFja2VuZC5wcm90b3R5cGUuYWNvc2ggPSBmdW5jdGlvbiAoeCkge1xuICAgICAgICByZXR1cm4gdGhpcy5leGVjdXRlU2luZ2xlSW5wdXQoJ0Fjb3NoJywgeCk7XG4gICAgfTtcbiAgICBOb2RlSlNLZXJuZWxCYWNrZW5kLnByb3RvdHlwZS5hdGFuaCA9IGZ1bmN0aW9uICh4KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmV4ZWN1dGVTaW5nbGVJbnB1dCgnQXRhbmgnLCB4KTtcbiAgICB9O1xuICAgIE5vZGVKU0tlcm5lbEJhY2tlbmQucHJvdG90eXBlLmVyZiA9IGZ1bmN0aW9uICh4KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmV4ZWN1dGVTaW5nbGVJbnB1dCgnRXJmJywgeCk7XG4gICAgfTtcbiAgICBOb2RlSlNLZXJuZWxCYWNrZW5kLnByb3RvdHlwZS5zcXVhcmVkRGlmZmVyZW5jZSA9IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIHZhciBvcEF0dHJzID0gW29wX3V0aWxzXzEuY3JlYXRlVHlwZU9wQXR0cignVCcsIGEuZHR5cGUpXTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXhlY3V0ZVNpbmdsZU91dHB1dCgnU3F1YXJlZERpZmZlcmVuY2UnLCBvcEF0dHJzLCBbYSwgYl0pO1xuICAgIH07XG4gICAgTm9kZUpTS2VybmVsQmFja2VuZC5wcm90b3R5cGUuZXhwbTEgPSBmdW5jdGlvbiAoeCkge1xuICAgICAgICByZXR1cm4gdGhpcy5leGVjdXRlU2luZ2xlSW5wdXQoJ0V4cG0xJywgeCk7XG4gICAgfTtcbiAgICBOb2RlSlNLZXJuZWxCYWNrZW5kLnByb3RvdHlwZS5zb2Z0cGx1cyA9IGZ1bmN0aW9uICh4KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmV4ZWN1dGVTaW5nbGVJbnB1dCgnU29mdHBsdXMnLCB4KTtcbiAgICB9O1xuICAgIE5vZGVKU0tlcm5lbEJhY2tlbmQucHJvdG90eXBlLmF0YW4yID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgdmFyIG9wQXR0cnMgPSBbb3BfdXRpbHNfMS5jcmVhdGVUeXBlT3BBdHRyKCdUJywgYS5kdHlwZSldO1xuICAgICAgICByZXR1cm4gdGhpcy5leGVjdXRlU2luZ2xlT3V0cHV0KCdBdGFuMicsIG9wQXR0cnMsIFthLCBiXSk7XG4gICAgfTtcbiAgICBOb2RlSlNLZXJuZWxCYWNrZW5kLnByb3RvdHlwZS5zdGVwID0gZnVuY3Rpb24gKHgsIGFscGhhKSB7XG4gICAgICAgIHZhciBkdHlwZSA9IHguZHR5cGU7XG4gICAgICAgIHZhciBuYW5zID0gdGhpcy5pc05hTih4KTtcbiAgICAgICAgdmFyIHN0ZXBOb05hbnMgPSB0aGlzLnNlbGVjdCh0aGlzLmdyZWF0ZXIoeCwgdGZqc19jb3JlXzEuc2NhbGFyKDAsIGR0eXBlKSksIHRmanNfY29yZV8xLm9uZXMoeC5zaGFwZSksIHRmanNfY29yZV8xLmZpbGwoeC5zaGFwZSwgYWxwaGEsIGR0eXBlKSk7XG4gICAgICAgIHJldHVybiB0aGlzLnNlbGVjdChuYW5zLCB4LCBzdGVwTm9OYW5zKTtcbiAgICB9O1xuICAgIE5vZGVKU0tlcm5lbEJhY2tlbmQucHJvdG90eXBlLmNvbnYyZCA9IGZ1bmN0aW9uICh4LCBmaWx0ZXIsIGNvbnZJbmZvKSB7XG4gICAgICAgIGlmIChjb252SW5mby5wYWRJbmZvLnR5cGUgIT09ICdWQUxJRCcgJiYgY29udkluZm8ucGFkSW5mby50eXBlICE9PSAnU0FNRScpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRGIEJhY2tlbmQgc3VwcG9ydHMgb25seSAndmFsaWQnIGFuZCAnc2FtZScgcGFkZGluZyBcIiArXG4gICAgICAgICAgICAgICAgKFwid2hpbGUgcGFkZGluZyB3YXMgXCIgKyBjb252SW5mby5wYWRJbmZvLnR5cGUpKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgc3RyaWRlcyA9IFsxLCBjb252SW5mby5zdHJpZGVIZWlnaHQsIGNvbnZJbmZvLnN0cmlkZVdpZHRoLCAxXTtcbiAgICAgICAgdmFyIHBhZGRpbmcgPSBjb252SW5mby5wYWRJbmZvLnR5cGU7XG4gICAgICAgIHZhciBkYXRhRm9ybWF0ID0gY29udkluZm8uZGF0YUZvcm1hdCA9PT0gJ2NoYW5uZWxzTGFzdCcgPyAnTkhXQycgOiAnTkNIVyc7XG4gICAgICAgIHZhciBkaWxhdGlvbnMgPSBbMSwgY29udkluZm8uZGlsYXRpb25IZWlnaHQsIGNvbnZJbmZvLmRpbGF0aW9uV2lkdGgsIDFdO1xuICAgICAgICB2YXIgb3BBdHRycyA9IFtcbiAgICAgICAgICAgIG9wX3V0aWxzXzEuY3JlYXRlVHlwZU9wQXR0cignVCcsIHguZHR5cGUpLFxuICAgICAgICAgICAgeyBuYW1lOiAnc3RyaWRlcycsIHR5cGU6IHRoaXMuYmluZGluZy5URl9BVFRSX0lOVCwgdmFsdWU6IHN0cmlkZXMgfSxcbiAgICAgICAgICAgIHsgbmFtZTogJ3BhZGRpbmcnLCB0eXBlOiB0aGlzLmJpbmRpbmcuVEZfQVRUUl9TVFJJTkcsIHZhbHVlOiBwYWRkaW5nIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ2RhdGFfZm9ybWF0JyxcbiAgICAgICAgICAgICAgICB0eXBlOiB0aGlzLmJpbmRpbmcuVEZfQVRUUl9TVFJJTkcsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGRhdGFGb3JtYXRcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7IG5hbWU6ICd1c2VfY3Vkbm5fb25fZ3B1JywgdHlwZTogdGhpcy5iaW5kaW5nLlRGX0FUVFJfQk9PTCwgdmFsdWU6IHRydWUgfSxcbiAgICAgICAgICAgIHsgbmFtZTogJ2RpbGF0aW9ucycsIHR5cGU6IHRoaXMuYmluZGluZy5URl9BVFRSX0lOVCwgdmFsdWU6IGRpbGF0aW9ucyB9LFxuICAgICAgICBdO1xuICAgICAgICByZXR1cm4gdGhpcy5leGVjdXRlU2luZ2xlT3V0cHV0KCdDb252MkQnLCBvcEF0dHJzLCBbeCwgZmlsdGVyXSk7XG4gICAgfTtcbiAgICBOb2RlSlNLZXJuZWxCYWNrZW5kLnByb3RvdHlwZS5jb252MmREZXJJbnB1dCA9IGZ1bmN0aW9uIChkeSwgZmlsdGVyLCBjb252SW5mbykge1xuICAgICAgICBpZiAoY29udkluZm8ucGFkSW5mby50eXBlICE9PSAnVkFMSUQnICYmIGNvbnZJbmZvLnBhZEluZm8udHlwZSAhPT0gJ1NBTUUnKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJURiBCYWNrZW5kIHN1cHBvcnRzIG9ubHkgJ3ZhbGlkJyBhbmQgJ3NhbWUnIHBhZGRpbmcgXCIgK1xuICAgICAgICAgICAgICAgIChcIndoaWxlIHBhZGRpbmcgd2FzIFwiICsgY29udkluZm8ucGFkSW5mby50eXBlKSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHN0cmlkZXMgPSBbMSwgY29udkluZm8uc3RyaWRlSGVpZ2h0LCBjb252SW5mby5zdHJpZGVXaWR0aCwgMV07XG4gICAgICAgIHZhciBwYWRkaW5nID0gY29udkluZm8ucGFkSW5mby50eXBlO1xuICAgICAgICB2YXIgZGF0YUZvcm1hdCA9IGNvbnZJbmZvLmRhdGFGb3JtYXQgPT09ICdjaGFubmVsc0xhc3QnID8gJ05IV0MnIDogJ05DSFcnO1xuICAgICAgICB2YXIgZGlsYXRpb25zID0gWzEsIGNvbnZJbmZvLmRpbGF0aW9uSGVpZ2h0LCBjb252SW5mby5kaWxhdGlvbldpZHRoLCAxXTtcbiAgICAgICAgdmFyIG9wQXR0cnMgPSBbXG4gICAgICAgICAgICBvcF91dGlsc18xLmNyZWF0ZVR5cGVPcEF0dHIoJ1QnLCAnZmxvYXQzMicpLFxuICAgICAgICAgICAgeyBuYW1lOiAnc3RyaWRlcycsIHR5cGU6IHRoaXMuYmluZGluZy5URl9BVFRSX0lOVCwgdmFsdWU6IHN0cmlkZXMgfSxcbiAgICAgICAgICAgIHsgbmFtZTogJ3BhZGRpbmcnLCB0eXBlOiB0aGlzLmJpbmRpbmcuVEZfQVRUUl9TVFJJTkcsIHZhbHVlOiBwYWRkaW5nIH0sIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnZGF0YV9mb3JtYXQnLFxuICAgICAgICAgICAgICAgIHR5cGU6IHRoaXMuYmluZGluZy5URl9BVFRSX1NUUklORyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogZGF0YUZvcm1hdFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHsgbmFtZTogJ3VzZV9jdWRubl9vbl9ncHUnLCB0eXBlOiB0aGlzLmJpbmRpbmcuVEZfQVRUUl9CT09MLCB2YWx1ZTogdHJ1ZSB9LFxuICAgICAgICAgICAgeyBuYW1lOiAnZGlsYXRpb25zJywgdHlwZTogdGhpcy5iaW5kaW5nLlRGX0FUVFJfSU5ULCB2YWx1ZTogZGlsYXRpb25zIH1cbiAgICAgICAgXTtcbiAgICAgICAgdmFyIGlucHV0U2l6ZXMgPSB0ZmpzX2NvcmVfMS50ZW5zb3IxZChjb252SW5mby5pblNoYXBlLCAnaW50MzInKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXhlY3V0ZVNpbmdsZU91dHB1dCgnQ29udjJEQmFja3Byb3BJbnB1dCcsIG9wQXR0cnMsIFtpbnB1dFNpemVzLCBmaWx0ZXIsIGR5XSk7XG4gICAgfTtcbiAgICBOb2RlSlNLZXJuZWxCYWNrZW5kLnByb3RvdHlwZS5jb252MmREZXJGaWx0ZXIgPSBmdW5jdGlvbiAoeCwgZHksIGNvbnZJbmZvKSB7XG4gICAgICAgIGlmIChjb252SW5mby5wYWRJbmZvLnR5cGUgIT09ICdWQUxJRCcgJiYgY29udkluZm8ucGFkSW5mby50eXBlICE9PSAnU0FNRScpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRGIEJhY2tlbmQgc3VwcG9ydHMgb25seSAndmFsaWQnIGFuZCAnc2FtZScgcGFkZGluZyBcIiArXG4gICAgICAgICAgICAgICAgKFwid2hpbGUgcGFkZGluZyB3YXMgXCIgKyBjb252SW5mby5wYWRJbmZvLnR5cGUpKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgc3RyaWRlcyA9IFsxLCBjb252SW5mby5zdHJpZGVIZWlnaHQsIGNvbnZJbmZvLnN0cmlkZVdpZHRoLCAxXTtcbiAgICAgICAgdmFyIHBhZGRpbmcgPSBjb252SW5mby5wYWRJbmZvLnR5cGU7XG4gICAgICAgIHZhciBkYXRhRm9ybWF0ID0gY29udkluZm8uZGF0YUZvcm1hdCA9PT0gJ2NoYW5uZWxzTGFzdCcgPyAnTkhXQycgOiAnTkNIVyc7XG4gICAgICAgIHZhciBkaWxhdGlvbnMgPSBbMSwgY29udkluZm8uZGlsYXRpb25IZWlnaHQsIGNvbnZJbmZvLmRpbGF0aW9uV2lkdGgsIDFdO1xuICAgICAgICB2YXIgb3BBdHRycyA9IFtcbiAgICAgICAgICAgIG9wX3V0aWxzXzEuY3JlYXRlVHlwZU9wQXR0cignVCcsICdmbG9hdDMyJyksXG4gICAgICAgICAgICB7IG5hbWU6ICdzdHJpZGVzJywgdHlwZTogdGhpcy5iaW5kaW5nLlRGX0FUVFJfSU5ULCB2YWx1ZTogc3RyaWRlcyB9LFxuICAgICAgICAgICAgeyBuYW1lOiAncGFkZGluZycsIHR5cGU6IHRoaXMuYmluZGluZy5URl9BVFRSX1NUUklORywgdmFsdWU6IHBhZGRpbmcgfSwge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdkYXRhX2Zvcm1hdCcsXG4gICAgICAgICAgICAgICAgdHlwZTogdGhpcy5iaW5kaW5nLlRGX0FUVFJfU1RSSU5HLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBkYXRhRm9ybWF0XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeyBuYW1lOiAndXNlX2N1ZG5uX29uX2dwdScsIHR5cGU6IHRoaXMuYmluZGluZy5URl9BVFRSX0JPT0wsIHZhbHVlOiB0cnVlIH0sXG4gICAgICAgICAgICB7IG5hbWU6ICdkaWxhdGlvbnMnLCB0eXBlOiB0aGlzLmJpbmRpbmcuVEZfQVRUUl9JTlQsIHZhbHVlOiBkaWxhdGlvbnMgfVxuICAgICAgICBdO1xuICAgICAgICB2YXIgZmlsdGVyU2l6ZXMgPSB0ZmpzX2NvcmVfMS50ZW5zb3IxZChjb252SW5mby5maWx0ZXJTaGFwZSwgJ2ludDMyJyk7XG4gICAgICAgIHJldHVybiB0aGlzLmV4ZWN1dGVTaW5nbGVPdXRwdXQoJ0NvbnYyREJhY2twcm9wRmlsdGVyJywgb3BBdHRycywgW3gsIGZpbHRlclNpemVzLCBkeV0pO1xuICAgIH07XG4gICAgTm9kZUpTS2VybmVsQmFja2VuZC5wcm90b3R5cGUuZGVwdGh3aXNlQ29udjJERGVySW5wdXQgPSBmdW5jdGlvbiAoZHksIGZpbHRlciwgY29udkluZm8pIHtcbiAgICAgICAgdmFyIHN0cmlkZXMgPSBbMSwgY29udkluZm8uc3RyaWRlSGVpZ2h0LCBjb252SW5mby5zdHJpZGVXaWR0aCwgMV07XG4gICAgICAgIHZhciBwYWRkaW5nID0gY29udkluZm8ucGFkSW5mby50eXBlO1xuICAgICAgICB2YXIgZGF0YUZvcm1hdCA9IGNvbnZJbmZvLmRhdGFGb3JtYXQgPT09ICdjaGFubmVsc0xhc3QnID8gJ05IV0MnIDogJ05DSFcnO1xuICAgICAgICB2YXIgZGlsYXRpb25zID0gWzEsIGNvbnZJbmZvLmRpbGF0aW9uSGVpZ2h0LCBjb252SW5mby5kaWxhdGlvbldpZHRoLCAxXTtcbiAgICAgICAgdmFyIG9wQXR0cnMgPSBbXG4gICAgICAgICAgICBvcF91dGlsc18xLmNyZWF0ZVR5cGVPcEF0dHIoJ1QnLCAnZmxvYXQzMicpLFxuICAgICAgICAgICAgeyBuYW1lOiAnc3RyaWRlcycsIHR5cGU6IHRoaXMuYmluZGluZy5URl9BVFRSX0lOVCwgdmFsdWU6IHN0cmlkZXMgfSxcbiAgICAgICAgICAgIHsgbmFtZTogJ3BhZGRpbmcnLCB0eXBlOiB0aGlzLmJpbmRpbmcuVEZfQVRUUl9TVFJJTkcsIHZhbHVlOiBwYWRkaW5nIH0sIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnZGF0YV9mb3JtYXQnLFxuICAgICAgICAgICAgICAgIHR5cGU6IHRoaXMuYmluZGluZy5URl9BVFRSX1NUUklORyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogZGF0YUZvcm1hdFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHsgbmFtZTogJ2RpbGF0aW9ucycsIHR5cGU6IHRoaXMuYmluZGluZy5URl9BVFRSX0lOVCwgdmFsdWU6IGRpbGF0aW9ucyB9XG4gICAgICAgIF07XG4gICAgICAgIHZhciBpbnB1dFNpemVzID0gdGZqc19jb3JlXzEudGVuc29yMWQoY29udkluZm8uaW5TaGFwZSwgJ2ludDMyJyk7XG4gICAgICAgIHJldHVybiB0aGlzLmV4ZWN1dGVTaW5nbGVPdXRwdXQoJ0RlcHRod2lzZUNvbnYyZE5hdGl2ZUJhY2twcm9wSW5wdXQnLCBvcEF0dHJzLCBbaW5wdXRTaXplcywgZmlsdGVyLCBkeV0pO1xuICAgIH07XG4gICAgTm9kZUpTS2VybmVsQmFja2VuZC5wcm90b3R5cGUuZGVwdGh3aXNlQ29udjJERGVyRmlsdGVyID0gZnVuY3Rpb24gKHgsIGRZLCBjb252SW5mbykge1xuICAgICAgICB2YXIgc3RyaWRlcyA9IFsxLCBjb252SW5mby5zdHJpZGVIZWlnaHQsIGNvbnZJbmZvLnN0cmlkZVdpZHRoLCAxXTtcbiAgICAgICAgdmFyIHBhZGRpbmcgPSBjb252SW5mby5wYWRJbmZvLnR5cGU7XG4gICAgICAgIHZhciBkYXRhRm9ybWF0ID0gY29udkluZm8uZGF0YUZvcm1hdCA9PT0gJ2NoYW5uZWxzTGFzdCcgPyAnTkhXQycgOiAnTkNIVyc7XG4gICAgICAgIHZhciBkaWxhdGlvbnMgPSBbMSwgY29udkluZm8uZGlsYXRpb25IZWlnaHQsIGNvbnZJbmZvLmRpbGF0aW9uV2lkdGgsIDFdO1xuICAgICAgICB2YXIgb3BBdHRycyA9IFtcbiAgICAgICAgICAgIG9wX3V0aWxzXzEuY3JlYXRlVHlwZU9wQXR0cignVCcsICdmbG9hdDMyJyksXG4gICAgICAgICAgICB7IG5hbWU6ICdzdHJpZGVzJywgdHlwZTogdGhpcy5iaW5kaW5nLlRGX0FUVFJfSU5ULCB2YWx1ZTogc3RyaWRlcyB9LFxuICAgICAgICAgICAgeyBuYW1lOiAncGFkZGluZycsIHR5cGU6IHRoaXMuYmluZGluZy5URl9BVFRSX1NUUklORywgdmFsdWU6IHBhZGRpbmcgfSwge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdkYXRhX2Zvcm1hdCcsXG4gICAgICAgICAgICAgICAgdHlwZTogdGhpcy5iaW5kaW5nLlRGX0FUVFJfU1RSSU5HLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBkYXRhRm9ybWF0XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeyBuYW1lOiAnZGlsYXRpb25zJywgdHlwZTogdGhpcy5iaW5kaW5nLlRGX0FUVFJfSU5ULCB2YWx1ZTogZGlsYXRpb25zIH1cbiAgICAgICAgXTtcbiAgICAgICAgdmFyIGZpbHRlclNpemVzID0gdGZqc19jb3JlXzEudGVuc29yMWQoY29udkluZm8uZmlsdGVyU2hhcGUsICdpbnQzMicpO1xuICAgICAgICByZXR1cm4gdGhpcy5leGVjdXRlU2luZ2xlT3V0cHV0KCdEZXB0aHdpc2VDb252MmROYXRpdmVCYWNrcHJvcEZpbHRlcicsIG9wQXR0cnMsIFt4LCBmaWx0ZXJTaXplcywgZFldKTtcbiAgICB9O1xuICAgIE5vZGVKU0tlcm5lbEJhY2tlbmQucHJvdG90eXBlLmRlcHRod2lzZUNvbnYyRCA9IGZ1bmN0aW9uIChpbnB1dCwgZmlsdGVyLCBjb252SW5mbykge1xuICAgICAgICBpZiAoY29udkluZm8ucGFkSW5mby50eXBlICE9PSAnVkFMSUQnICYmIGNvbnZJbmZvLnBhZEluZm8udHlwZSAhPT0gJ1NBTUUnKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJURiBCYWNrZW5kIHN1cHBvcnRzIG9ubHkgJ3ZhbGlkJyBhbmQgJ3NhbWUnIHBhZGRpbmcgXCIgK1xuICAgICAgICAgICAgICAgIChcIndoaWxlIHBhZGRpbmcgd2FzIFwiICsgY29udkluZm8ucGFkSW5mby50eXBlKSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHN0cmlkZXMgPSBbMSwgY29udkluZm8uc3RyaWRlSGVpZ2h0LCBjb252SW5mby5zdHJpZGVXaWR0aCwgMV07XG4gICAgICAgIHZhciBwYWRkaW5nID0gY29udkluZm8ucGFkSW5mby50eXBlO1xuICAgICAgICB2YXIgZGF0YUZvcm1hdCA9IGNvbnZJbmZvLmRhdGFGb3JtYXQgPT09ICdjaGFubmVsc0xhc3QnID8gJ05IV0MnIDogJ05DSFcnO1xuICAgICAgICB2YXIgZGlsYXRpb25zID0gWzEsIGNvbnZJbmZvLmRpbGF0aW9uSGVpZ2h0LCBjb252SW5mby5kaWxhdGlvbldpZHRoLCAxXTtcbiAgICAgICAgdmFyIG9wQXR0cnMgPSBbXG4gICAgICAgICAgICBvcF91dGlsc18xLmNyZWF0ZVR5cGVPcEF0dHIoJ1QnLCBpbnB1dC5kdHlwZSksXG4gICAgICAgICAgICB7IG5hbWU6ICdzdHJpZGVzJywgdHlwZTogdGhpcy5iaW5kaW5nLlRGX0FUVFJfSU5ULCB2YWx1ZTogc3RyaWRlcyB9LFxuICAgICAgICAgICAgeyBuYW1lOiAncGFkZGluZycsIHR5cGU6IHRoaXMuYmluZGluZy5URl9BVFRSX1NUUklORywgdmFsdWU6IHBhZGRpbmcgfSwge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdkYXRhX2Zvcm1hdCcsXG4gICAgICAgICAgICAgICAgdHlwZTogdGhpcy5iaW5kaW5nLlRGX0FUVFJfU1RSSU5HLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBkYXRhRm9ybWF0XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeyBuYW1lOiAnZGlsYXRpb25zJywgdHlwZTogdGhpcy5iaW5kaW5nLlRGX0FUVFJfSU5ULCB2YWx1ZTogZGlsYXRpb25zIH1cbiAgICAgICAgXTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXhlY3V0ZVNpbmdsZU91dHB1dCgnRGVwdGh3aXNlQ29udjJkTmF0aXZlJywgb3BBdHRycywgW2lucHV0LCBmaWx0ZXJdKTtcbiAgICB9O1xuICAgIE5vZGVKU0tlcm5lbEJhY2tlbmQucHJvdG90eXBlLmNvbnYzZCA9IGZ1bmN0aW9uICh4LCBmaWx0ZXIsIGNvbnZJbmZvKSB7XG4gICAgICAgIHZhciBzdHJpZGVzID0gW1xuICAgICAgICAgICAgMSwgY29udkluZm8uc3RyaWRlRGVwdGgsIGNvbnZJbmZvLnN0cmlkZUhlaWdodCwgY29udkluZm8uc3RyaWRlV2lkdGgsIDFcbiAgICAgICAgXTtcbiAgICAgICAgdmFyIHBhZGRpbmcgPSBjb252SW5mby5wYWRJbmZvLnR5cGU7XG4gICAgICAgIHZhciBkYXRhRm9ybWF0ID0gY29udkluZm8uZGF0YUZvcm1hdCA9PT0gJ2NoYW5uZWxzTGFzdCcgPyAnTkRIV0MnIDogJ05DREhXJztcbiAgICAgICAgaWYgKCF0aGlzLmlzR1BVUGFja2FnZSAmJiBjb252SW5mby5kaWxhdGlvbkRlcHRoID4gMSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDUFUgRGlsYXRpb24gZGVwdGggbXVzdCBiZSAxJyk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGRpbGF0aW9ucyA9IFtcbiAgICAgICAgICAgIDEsIGNvbnZJbmZvLmRpbGF0aW9uRGVwdGgsIGNvbnZJbmZvLmRpbGF0aW9uSGVpZ2h0LFxuICAgICAgICAgICAgY29udkluZm8uZGlsYXRpb25XaWR0aCwgMVxuICAgICAgICBdO1xuICAgICAgICB2YXIgb3BBdHRycyA9IFtcbiAgICAgICAgICAgIG9wX3V0aWxzXzEuY3JlYXRlVHlwZU9wQXR0cignVCcsIHguZHR5cGUpLFxuICAgICAgICAgICAgeyBuYW1lOiAnc3RyaWRlcycsIHR5cGU6IHRoaXMuYmluZGluZy5URl9BVFRSX0lOVCwgdmFsdWU6IHN0cmlkZXMgfSxcbiAgICAgICAgICAgIHsgbmFtZTogJ3BhZGRpbmcnLCB0eXBlOiB0aGlzLmJpbmRpbmcuVEZfQVRUUl9TVFJJTkcsIHZhbHVlOiBwYWRkaW5nIH0sIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnZGF0YV9mb3JtYXQnLFxuICAgICAgICAgICAgICAgIHR5cGU6IHRoaXMuYmluZGluZy5URl9BVFRSX1NUUklORyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogZGF0YUZvcm1hdFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHsgbmFtZTogJ2RpbGF0aW9ucycsIHR5cGU6IHRoaXMuYmluZGluZy5URl9BVFRSX0lOVCwgdmFsdWU6IGRpbGF0aW9ucyB9XG4gICAgICAgIF07XG4gICAgICAgIHJldHVybiB0aGlzLmV4ZWN1dGVTaW5nbGVPdXRwdXQoJ0NvbnYzRCcsIG9wQXR0cnMsIFt4LCBmaWx0ZXJdKTtcbiAgICB9O1xuICAgIE5vZGVKU0tlcm5lbEJhY2tlbmQucHJvdG90eXBlLmNvbnYzZERlcklucHV0ID0gZnVuY3Rpb24gKGR5LCBmaWx0ZXIsIGNvbnZJbmZvKSB7XG4gICAgICAgIHZhciBzdHJpZGVzID0gW1xuICAgICAgICAgICAgMSwgY29udkluZm8uc3RyaWRlRGVwdGgsIGNvbnZJbmZvLnN0cmlkZUhlaWdodCwgY29udkluZm8uc3RyaWRlV2lkdGgsIDFcbiAgICAgICAgXTtcbiAgICAgICAgdmFyIHBhZGRpbmcgPSBjb252SW5mby5wYWRJbmZvLnR5cGU7XG4gICAgICAgIHZhciBkYXRhRm9ybWF0ID0gY29udkluZm8uZGF0YUZvcm1hdCA9PT0gJ2NoYW5uZWxzTGFzdCcgPyAnTkRIV0MnIDogJ05DREhXJztcbiAgICAgICAgaWYgKCF0aGlzLmlzR1BVUGFja2FnZSAmJiBjb252SW5mby5kaWxhdGlvbkRlcHRoID4gMSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDUFUgRGlsYXRpb24gZGVwdGggbXVzdCBiZSAxJyk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGRpbGF0aW9ucyA9IFtcbiAgICAgICAgICAgIDEsIGNvbnZJbmZvLmRpbGF0aW9uRGVwdGgsIGNvbnZJbmZvLmRpbGF0aW9uSGVpZ2h0LFxuICAgICAgICAgICAgY29udkluZm8uZGlsYXRpb25XaWR0aCwgMVxuICAgICAgICBdO1xuICAgICAgICB2YXIgb3BBdHRycyA9IFtcbiAgICAgICAgICAgIG9wX3V0aWxzXzEuY3JlYXRlVHlwZU9wQXR0cignVCcsIGR5LmR0eXBlKSxcbiAgICAgICAgICAgIHsgbmFtZTogJ3N0cmlkZXMnLCB0eXBlOiB0aGlzLmJpbmRpbmcuVEZfQVRUUl9JTlQsIHZhbHVlOiBzdHJpZGVzIH0sXG4gICAgICAgICAgICB7IG5hbWU6ICdwYWRkaW5nJywgdHlwZTogdGhpcy5iaW5kaW5nLlRGX0FUVFJfU1RSSU5HLCB2YWx1ZTogcGFkZGluZyB9LCB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ2RhdGFfZm9ybWF0JyxcbiAgICAgICAgICAgICAgICB0eXBlOiB0aGlzLmJpbmRpbmcuVEZfQVRUUl9TVFJJTkcsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGRhdGFGb3JtYXRcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7IG5hbWU6ICdkaWxhdGlvbnMnLCB0eXBlOiB0aGlzLmJpbmRpbmcuVEZfQVRUUl9JTlQsIHZhbHVlOiBkaWxhdGlvbnMgfSxcbiAgICAgICAgICAgIG9wX3V0aWxzXzEuY3JlYXRlVHlwZU9wQXR0cignVHNoYXBlJywgJ2ludDMyJylcbiAgICAgICAgXTtcbiAgICAgICAgdmFyIGlucHV0U2l6ZXMgPSB0ZmpzX2NvcmVfMS50ZW5zb3IxZChjb252SW5mby5pblNoYXBlLCAnaW50MzInKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXhlY3V0ZVNpbmdsZU91dHB1dCgnQ29udjNEQmFja3Byb3BJbnB1dFYyJywgb3BBdHRycywgW2lucHV0U2l6ZXMsIGZpbHRlciwgZHldKTtcbiAgICB9O1xuICAgIE5vZGVKU0tlcm5lbEJhY2tlbmQucHJvdG90eXBlLmNvbnYzZERlckZpbHRlciA9IGZ1bmN0aW9uICh4LCBkWSwgY29udkluZm8pIHtcbiAgICAgICAgdmFyIHN0cmlkZXMgPSBbXG4gICAgICAgICAgICAxLCBjb252SW5mby5zdHJpZGVEZXB0aCwgY29udkluZm8uc3RyaWRlSGVpZ2h0LCBjb252SW5mby5zdHJpZGVXaWR0aCwgMVxuICAgICAgICBdO1xuICAgICAgICB2YXIgcGFkZGluZyA9IGNvbnZJbmZvLnBhZEluZm8udHlwZTtcbiAgICAgICAgdmFyIGRhdGFGb3JtYXQgPSBjb252SW5mby5kYXRhRm9ybWF0ID09PSAnY2hhbm5lbHNMYXN0JyA/ICdOREhXQycgOiAnTkNESFcnO1xuICAgICAgICBpZiAoIXRoaXMuaXNHUFVQYWNrYWdlICYmIGNvbnZJbmZvLmRpbGF0aW9uRGVwdGggPiAxKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NQVSBEaWxhdGlvbiBkZXB0aCBtdXN0IGJlIDEnKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZGlsYXRpb25zID0gW1xuICAgICAgICAgICAgMSwgY29udkluZm8uZGlsYXRpb25EZXB0aCwgY29udkluZm8uZGlsYXRpb25IZWlnaHQsXG4gICAgICAgICAgICBjb252SW5mby5kaWxhdGlvbldpZHRoLCAxXG4gICAgICAgIF07XG4gICAgICAgIHZhciBvcEF0dHJzID0gW1xuICAgICAgICAgICAgb3BfdXRpbHNfMS5jcmVhdGVUeXBlT3BBdHRyKCdUJywgeC5kdHlwZSksXG4gICAgICAgICAgICB7IG5hbWU6ICdzdHJpZGVzJywgdHlwZTogdGhpcy5iaW5kaW5nLlRGX0FUVFJfSU5ULCB2YWx1ZTogc3RyaWRlcyB9LFxuICAgICAgICAgICAgeyBuYW1lOiAncGFkZGluZycsIHR5cGU6IHRoaXMuYmluZGluZy5URl9BVFRSX1NUUklORywgdmFsdWU6IHBhZGRpbmcgfSwge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdkYXRhX2Zvcm1hdCcsXG4gICAgICAgICAgICAgICAgdHlwZTogdGhpcy5iaW5kaW5nLlRGX0FUVFJfU1RSSU5HLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBkYXRhRm9ybWF0XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeyBuYW1lOiAnZGlsYXRpb25zJywgdHlwZTogdGhpcy5iaW5kaW5nLlRGX0FUVFJfSU5ULCB2YWx1ZTogZGlsYXRpb25zIH1cbiAgICAgICAgXTtcbiAgICAgICAgdmFyIGZpbHRlclNpemVzID0gdGZqc19jb3JlXzEudGVuc29yMWQoY29udkluZm8uZmlsdGVyU2hhcGUsICdpbnQzMicpO1xuICAgICAgICByZXR1cm4gdGhpcy5leGVjdXRlU2luZ2xlT3V0cHV0KCdDb252M0RCYWNrcHJvcEZpbHRlclYyJywgb3BBdHRycywgW3gsIGZpbHRlclNpemVzLCBkWV0pO1xuICAgIH07XG4gICAgTm9kZUpTS2VybmVsQmFja2VuZC5wcm90b3R5cGUubWF4UG9vbCA9IGZ1bmN0aW9uICh4LCBjb252SW5mbykge1xuICAgICAgICBpZiAoY29udkluZm8ucGFkSW5mby50eXBlICE9PSAnVkFMSUQnICYmIGNvbnZJbmZvLnBhZEluZm8udHlwZSAhPT0gJ1NBTUUnKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJURiBCYWNrZW5kIHN1cHBvcnRzIG9ubHkgJ3ZhbGlkJyBhbmQgJ3NhbWUnIHBhZGRpbmcgXCIgK1xuICAgICAgICAgICAgICAgIChcIndoaWxlIHBhZGRpbmcgd2FzIFwiICsgY29udkluZm8ucGFkSW5mby50eXBlKSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGtzaXplID0gWzEsIGNvbnZJbmZvLmZpbHRlckhlaWdodCwgY29udkluZm8uZmlsdGVyV2lkdGgsIDFdO1xuICAgICAgICB2YXIgc3RyaWRlcyA9IFsxLCBjb252SW5mby5zdHJpZGVIZWlnaHQsIGNvbnZJbmZvLnN0cmlkZVdpZHRoLCAxXTtcbiAgICAgICAgdmFyIHBhZGRpbmcgPSBjb252SW5mby5wYWRJbmZvLnR5cGU7XG4gICAgICAgIHZhciBkYXRhRm9ybWF0ID0gY29udkluZm8uZGF0YUZvcm1hdCA9PT0gJ2NoYW5uZWxzTGFzdCcgPyAnTkhXQycgOiAnTkNIVyc7XG4gICAgICAgIHZhciBvcEF0dHJzID0gW1xuICAgICAgICAgICAgb3BfdXRpbHNfMS5jcmVhdGVUeXBlT3BBdHRyKCdUJywgeC5kdHlwZSksXG4gICAgICAgICAgICB7IG5hbWU6ICdrc2l6ZScsIHR5cGU6IHRoaXMuYmluZGluZy5URl9BVFRSX0lOVCwgdmFsdWU6IGtzaXplIH0sXG4gICAgICAgICAgICB7IG5hbWU6ICdzdHJpZGVzJywgdHlwZTogdGhpcy5iaW5kaW5nLlRGX0FUVFJfSU5ULCB2YWx1ZTogc3RyaWRlcyB9LFxuICAgICAgICAgICAgeyBuYW1lOiAncGFkZGluZycsIHR5cGU6IHRoaXMuYmluZGluZy5URl9BVFRSX1NUUklORywgdmFsdWU6IHBhZGRpbmcgfSwge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdkYXRhX2Zvcm1hdCcsXG4gICAgICAgICAgICAgICAgdHlwZTogdGhpcy5iaW5kaW5nLlRGX0FUVFJfU1RSSU5HLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBkYXRhRm9ybWF0XG4gICAgICAgICAgICB9XG4gICAgICAgIF07XG4gICAgICAgIHJldHVybiB0aGlzLmV4ZWN1dGVTaW5nbGVPdXRwdXQoJ01heFBvb2wnLCBvcEF0dHJzLCBbeF0pO1xuICAgIH07XG4gICAgTm9kZUpTS2VybmVsQmFja2VuZC5wcm90b3R5cGUubWF4UG9vbEJhY2twcm9wID0gZnVuY3Rpb24gKGR5LCB4LCB5LCBjb252SW5mbykge1xuICAgICAgICBpZiAoY29udkluZm8ucGFkSW5mby50eXBlICE9PSAnVkFMSUQnICYmIGNvbnZJbmZvLnBhZEluZm8udHlwZSAhPT0gJ1NBTUUnKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJURiBCYWNrZW5kIHN1cHBvcnRzIG9ubHkgJ3ZhbGlkJyBhbmQgJ3NhbWUnIHBhZGRpbmcgXCIgK1xuICAgICAgICAgICAgICAgIChcIndoaWxlIHBhZGRpbmcgdHlwZSB3YXMgXCIgKyBjb252SW5mby5wYWRJbmZvLnR5cGUpKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIga3NpemUgPSBbMSwgY29udkluZm8uZmlsdGVySGVpZ2h0LCBjb252SW5mby5maWx0ZXJXaWR0aCwgMV07XG4gICAgICAgIHZhciBzdHJpZGVzID0gWzEsIGNvbnZJbmZvLnN0cmlkZUhlaWdodCwgY29udkluZm8uc3RyaWRlV2lkdGgsIDFdO1xuICAgICAgICB2YXIgcGFkZGluZyA9IGNvbnZJbmZvLnBhZEluZm8udHlwZTtcbiAgICAgICAgdmFyIGRhdGFGb3JtYXQgPSBjb252SW5mby5kYXRhRm9ybWF0ID09PSAnY2hhbm5lbHNMYXN0JyA/ICdOSFdDJyA6ICdOQ0hXJztcbiAgICAgICAgdmFyIG9wQXR0cnMgPSBbXG4gICAgICAgICAgICBvcF91dGlsc18xLmNyZWF0ZVR5cGVPcEF0dHIoJ1QnLCB4LmR0eXBlKSxcbiAgICAgICAgICAgIHsgbmFtZTogJ2tzaXplJywgdHlwZTogdGhpcy5iaW5kaW5nLlRGX0FUVFJfSU5ULCB2YWx1ZToga3NpemUgfSxcbiAgICAgICAgICAgIHsgbmFtZTogJ3N0cmlkZXMnLCB0eXBlOiB0aGlzLmJpbmRpbmcuVEZfQVRUUl9JTlQsIHZhbHVlOiBzdHJpZGVzIH0sXG4gICAgICAgICAgICB7IG5hbWU6ICdwYWRkaW5nJywgdHlwZTogdGhpcy5iaW5kaW5nLlRGX0FUVFJfU1RSSU5HLCB2YWx1ZTogcGFkZGluZyB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdkYXRhX2Zvcm1hdCcsXG4gICAgICAgICAgICAgICAgdHlwZTogdGhpcy5iaW5kaW5nLlRGX0FUVFJfU1RSSU5HLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBkYXRhRm9ybWF0XG4gICAgICAgICAgICB9LFxuICAgICAgICBdO1xuICAgICAgICByZXR1cm4gdGhpcy5leGVjdXRlU2luZ2xlT3V0cHV0KCdNYXhQb29sR3JhZCcsIG9wQXR0cnMsIFt4LCB5LCBkeV0pO1xuICAgIH07XG4gICAgTm9kZUpTS2VybmVsQmFja2VuZC5wcm90b3R5cGUuYXZnUG9vbCA9IGZ1bmN0aW9uICh4LCBjb252SW5mbykge1xuICAgICAgICBpZiAoY29udkluZm8ucGFkSW5mby50eXBlICE9PSAnVkFMSUQnICYmIGNvbnZJbmZvLnBhZEluZm8udHlwZSAhPT0gJ1NBTUUnKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJURiBCYWNrZW5kIHN1cHBvcnRzIG9ubHkgJ3ZhbGlkJyBhbmQgJ3NhbWUnIHBhZGRpbmcgXCIgK1xuICAgICAgICAgICAgICAgIChcIndoaWxlIHBhZGRpbmcgd2FzIFwiICsgY29udkluZm8ucGFkSW5mby50eXBlKSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGtzaXplID0gWzEsIGNvbnZJbmZvLmZpbHRlckhlaWdodCwgY29udkluZm8uZmlsdGVyV2lkdGgsIDFdO1xuICAgICAgICB2YXIgc3RyaWRlcyA9IFsxLCBjb252SW5mby5zdHJpZGVIZWlnaHQsIGNvbnZJbmZvLnN0cmlkZVdpZHRoLCAxXTtcbiAgICAgICAgdmFyIHBhZGRpbmcgPSBjb252SW5mby5wYWRJbmZvLnR5cGU7XG4gICAgICAgIHZhciBkYXRhRm9ybWF0ID0gY29udkluZm8uZGF0YUZvcm1hdCA9PT0gJ2NoYW5uZWxzTGFzdCcgPyAnTkhXQycgOiAnTkNIVyc7XG4gICAgICAgIHZhciBvcEF0dHJzID0gW1xuICAgICAgICAgICAgb3BfdXRpbHNfMS5jcmVhdGVUeXBlT3BBdHRyKCdUJywgeC5kdHlwZSksXG4gICAgICAgICAgICB7IG5hbWU6ICdrc2l6ZScsIHR5cGU6IHRoaXMuYmluZGluZy5URl9BVFRSX0lOVCwgdmFsdWU6IGtzaXplIH0sXG4gICAgICAgICAgICB7IG5hbWU6ICdzdHJpZGVzJywgdHlwZTogdGhpcy5iaW5kaW5nLlRGX0FUVFJfSU5ULCB2YWx1ZTogc3RyaWRlcyB9LFxuICAgICAgICAgICAgeyBuYW1lOiAncGFkZGluZycsIHR5cGU6IHRoaXMuYmluZGluZy5URl9BVFRSX1NUUklORywgdmFsdWU6IHBhZGRpbmcgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnZGF0YV9mb3JtYXQnLFxuICAgICAgICAgICAgICAgIHR5cGU6IHRoaXMuYmluZGluZy5URl9BVFRSX1NUUklORyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogZGF0YUZvcm1hdFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXhlY3V0ZVNpbmdsZU91dHB1dCgnQXZnUG9vbCcsIG9wQXR0cnMsIFt4XSk7XG4gICAgfTtcbiAgICBOb2RlSlNLZXJuZWxCYWNrZW5kLnByb3RvdHlwZS5hdmdQb29sQmFja3Byb3AgPSBmdW5jdGlvbiAoZHksIHgsIGNvbnZJbmZvKSB7XG4gICAgICAgIGlmIChjb252SW5mby5wYWRJbmZvLnR5cGUgIT09ICdWQUxJRCcgJiYgY29udkluZm8ucGFkSW5mby50eXBlICE9PSAnU0FNRScpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRGIEJhY2tlbmQgc3VwcG9ydHMgb25seSAndmFsaWQnIGFuZCAnc2FtZScgcGFkZGluZyBcIiArXG4gICAgICAgICAgICAgICAgKFwid2hpbGUgcGFkZGluZyB0eXBlIHdhcyBcIiArIGNvbnZJbmZvLnBhZEluZm8udHlwZSkpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBrc2l6ZSA9IFsxLCBjb252SW5mby5maWx0ZXJIZWlnaHQsIGNvbnZJbmZvLmZpbHRlcldpZHRoLCAxXTtcbiAgICAgICAgdmFyIHN0cmlkZXMgPSBbMSwgY29udkluZm8uc3RyaWRlSGVpZ2h0LCBjb252SW5mby5zdHJpZGVXaWR0aCwgMV07XG4gICAgICAgIHZhciBwYWRkaW5nID0gY29udkluZm8ucGFkSW5mby50eXBlO1xuICAgICAgICB2YXIgZGF0YUZvcm1hdCA9IGNvbnZJbmZvLmRhdGFGb3JtYXQgPT09ICdjaGFubmVsc0xhc3QnID8gJ05IV0MnIDogJ05DSFcnO1xuICAgICAgICB2YXIgb3BBdHRycyA9IFtcbiAgICAgICAgICAgIG9wX3V0aWxzXzEuY3JlYXRlVHlwZU9wQXR0cignVCcsIHguZHR5cGUpLFxuICAgICAgICAgICAgeyBuYW1lOiAna3NpemUnLCB0eXBlOiB0aGlzLmJpbmRpbmcuVEZfQVRUUl9JTlQsIHZhbHVlOiBrc2l6ZSB9LFxuICAgICAgICAgICAgeyBuYW1lOiAnc3RyaWRlcycsIHR5cGU6IHRoaXMuYmluZGluZy5URl9BVFRSX0lOVCwgdmFsdWU6IHN0cmlkZXMgfSxcbiAgICAgICAgICAgIHsgbmFtZTogJ3BhZGRpbmcnLCB0eXBlOiB0aGlzLmJpbmRpbmcuVEZfQVRUUl9TVFJJTkcsIHZhbHVlOiBwYWRkaW5nIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ2RhdGFfZm9ybWF0JyxcbiAgICAgICAgICAgICAgICB0eXBlOiB0aGlzLmJpbmRpbmcuVEZfQVRUUl9TVFJJTkcsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGRhdGFGb3JtYXRcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF07XG4gICAgICAgIHZhciBvcmlnSW5wdXRTaGFwZSA9IHRmanNfY29yZV8xLnRlbnNvcjFkKHguc2hhcGUsICdpbnQzMicpO1xuICAgICAgICByZXR1cm4gdGhpcy5leGVjdXRlU2luZ2xlT3V0cHV0KCdBdmdQb29sR3JhZCcsIG9wQXR0cnMsIFtvcmlnSW5wdXRTaGFwZSwgZHldKTtcbiAgICB9O1xuICAgIE5vZGVKU0tlcm5lbEJhY2tlbmQucHJvdG90eXBlLnJlc2hhcGUgPSBmdW5jdGlvbiAoeCwgc2hhcGUpIHtcbiAgICAgICAgdmFyIHNoYXBlVGVuc29yID0gdGZqc19jb3JlXzEudGVuc29yMWQoc2hhcGUsICdpbnQzMicpO1xuICAgICAgICB2YXIgb3BBdHRycyA9IFtcbiAgICAgICAgICAgIG9wX3V0aWxzXzEuY3JlYXRlVHlwZU9wQXR0cignVCcsIHguZHR5cGUpLFxuICAgICAgICAgICAgb3BfdXRpbHNfMS5jcmVhdGVUeXBlT3BBdHRyKCdUc2hhcGUnLCBzaGFwZVRlbnNvci5kdHlwZSlcbiAgICAgICAgXTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXhlY3V0ZVNpbmdsZU91dHB1dCgnUmVzaGFwZScsIG9wQXR0cnMsIFt4LCBzaGFwZVRlbnNvcl0pO1xuICAgIH07XG4gICAgTm9kZUpTS2VybmVsQmFja2VuZC5wcm90b3R5cGUuY2FzdCA9IGZ1bmN0aW9uICh4LCBkdHlwZSkge1xuICAgICAgICB2YXIgb3BBdHRycyA9IFtcbiAgICAgICAgICAgIG9wX3V0aWxzXzEuY3JlYXRlVHlwZU9wQXR0cignU3JjVCcsIHguZHR5cGUpLCBvcF91dGlsc18xLmNyZWF0ZVR5cGVPcEF0dHIoJ0RzdFQnLCBkdHlwZSksXG4gICAgICAgICAgICB7IG5hbWU6ICdUcnVuY2F0ZScsIHR5cGU6IHRoaXMuYmluZGluZy5URl9BVFRSX0JPT0wsIHZhbHVlOiBmYWxzZSB9XG4gICAgICAgIF07XG4gICAgICAgIHJldHVybiB0aGlzLmV4ZWN1dGVTaW5nbGVPdXRwdXQoJ0Nhc3QnLCBvcEF0dHJzLCBbeF0pO1xuICAgIH07XG4gICAgTm9kZUpTS2VybmVsQmFja2VuZC5wcm90b3R5cGUudGlsZSA9IGZ1bmN0aW9uICh4LCByZXBzKSB7XG4gICAgICAgIHZhciBvcEF0dHJzID0gW1xuICAgICAgICAgICAgb3BfdXRpbHNfMS5jcmVhdGVUeXBlT3BBdHRyKCdUJywgeC5kdHlwZSksIG9wX3V0aWxzXzEuY3JlYXRlVHlwZU9wQXR0cignVG11bHRpcGxlcycsICdpbnQzMicpXG4gICAgICAgIF07XG4gICAgICAgIHZhciBtdWx0aXBsZXMgPSB0ZmpzX2NvcmVfMS50ZW5zb3IxZChyZXBzLCAnaW50MzInKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXhlY3V0ZVNpbmdsZU91dHB1dCgnVGlsZScsIG9wQXR0cnMsIFt4LCBtdWx0aXBsZXNdKTtcbiAgICB9O1xuICAgIE5vZGVKU0tlcm5lbEJhY2tlbmQucHJvdG90eXBlLnBhZCA9IGZ1bmN0aW9uICh4LCBwYWRkaW5ncywgY29uc3RhbnRWYWx1ZSkge1xuICAgICAgICB2YXIgcGFkZGluZ3NUZW5zb3IgPSB0ZmpzX2NvcmVfMS50ZW5zb3IyZChwYWRkaW5ncywgW3BhZGRpbmdzLmxlbmd0aCwgMl0sICdpbnQzMicpO1xuICAgICAgICB2YXIgY29uc3RhbnRUZW5zb3IgPSB0ZmpzX2NvcmVfMS5zY2FsYXIoY29uc3RhbnRWYWx1ZSwgeC5kdHlwZSk7XG4gICAgICAgIHZhciBvcEF0dHJzID0gW1xuICAgICAgICAgICAgb3BfdXRpbHNfMS5jcmVhdGVUeXBlT3BBdHRyKCdUJywgeC5kdHlwZSksXG4gICAgICAgICAgICBvcF91dGlsc18xLmNyZWF0ZVR5cGVPcEF0dHIoJ1RwYWRkaW5ncycsIHBhZGRpbmdzVGVuc29yLmR0eXBlKVxuICAgICAgICBdO1xuICAgICAgICByZXR1cm4gdGhpcy5leGVjdXRlU2luZ2xlT3V0cHV0KCdQYWRWMicsIG9wQXR0cnMsIFt4LCBwYWRkaW5nc1RlbnNvciwgY29uc3RhbnRUZW5zb3JdKTtcbiAgICB9O1xuICAgIE5vZGVKU0tlcm5lbEJhY2tlbmQucHJvdG90eXBlLnRyYW5zcG9zZSA9IGZ1bmN0aW9uICh4LCBwZXJtKSB7XG4gICAgICAgIHZhciBwZXJtVGVuc29yID0gdGZqc19jb3JlXzEudGVuc29yMWQocGVybSwgJ2ludDMyJyk7XG4gICAgICAgIHZhciBvcEF0dHJzID0gW29wX3V0aWxzXzEuY3JlYXRlVHlwZU9wQXR0cignVCcsIHguZHR5cGUpLCBvcF91dGlsc18xLmNyZWF0ZVR5cGVPcEF0dHIoJ1RwZXJtJywgJ2ludDMyJyldO1xuICAgICAgICByZXR1cm4gdGhpcy5leGVjdXRlU2luZ2xlT3V0cHV0KCdUcmFuc3Bvc2UnLCBvcEF0dHJzLCBbeCwgcGVybVRlbnNvcl0pO1xuICAgIH07XG4gICAgTm9kZUpTS2VybmVsQmFja2VuZC5wcm90b3R5cGUuZ2F0aGVyID0gZnVuY3Rpb24gKHgsIGluZGljZXMsIGF4aXMpIHtcbiAgICAgICAgdmFyIGF4aXNUZW5zb3IgPSB0ZmpzX2NvcmVfMS5zY2FsYXIoYXhpcywgJ2ludDMyJyk7XG4gICAgICAgIHZhciBvcEF0dHJzID0gW1xuICAgICAgICAgICAgb3BfdXRpbHNfMS5jcmVhdGVUeXBlT3BBdHRyKCdUcGFyYW1zJywgeC5kdHlwZSksXG4gICAgICAgICAgICBvcF91dGlsc18xLmNyZWF0ZVR5cGVPcEF0dHIoJ1RpbmRpY2VzJywgaW5kaWNlcy5kdHlwZSksXG4gICAgICAgICAgICBvcF91dGlsc18xLmNyZWF0ZVR5cGVPcEF0dHIoJ1RheGlzJywgJ2ludDMyJylcbiAgICAgICAgXTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXhlY3V0ZVNpbmdsZU91dHB1dCgnR2F0aGVyVjInLCBvcEF0dHJzLCBbeCwgaW5kaWNlcywgYXhpc1RlbnNvcl0pO1xuICAgIH07XG4gICAgTm9kZUpTS2VybmVsQmFja2VuZC5wcm90b3R5cGUuZ2F0aGVyTkQgPSBmdW5jdGlvbiAoeCwgaW5kaWNlcykge1xuICAgICAgICB2YXIgb3BBdHRycyA9IFtcbiAgICAgICAgICAgIG9wX3V0aWxzXzEuY3JlYXRlVHlwZU9wQXR0cignVHBhcmFtcycsIHguZHR5cGUpLFxuICAgICAgICAgICAgb3BfdXRpbHNfMS5jcmVhdGVUeXBlT3BBdHRyKCdUaW5kaWNlcycsICdpbnQzMicpXG4gICAgICAgIF07XG4gICAgICAgIHJldHVybiB0aGlzLmV4ZWN1dGVTaW5nbGVPdXRwdXQoJ0dhdGhlck5kJywgb3BBdHRycywgW3gsIGluZGljZXNdKTtcbiAgICB9O1xuICAgIE5vZGVKU0tlcm5lbEJhY2tlbmQucHJvdG90eXBlLnNjYXR0ZXJORCA9IGZ1bmN0aW9uIChpbmRpY2VzLCB1cGRhdGVzLCBzaGFwZSkge1xuICAgICAgICB2YXIgb3BBdHRycyA9IFtcbiAgICAgICAgICAgIG9wX3V0aWxzXzEuY3JlYXRlVHlwZU9wQXR0cignVCcsIHVwZGF0ZXMuZHR5cGUpLFxuICAgICAgICAgICAgb3BfdXRpbHNfMS5jcmVhdGVUeXBlT3BBdHRyKCdUaW5kaWNlcycsICdpbnQzMicpXG4gICAgICAgIF07XG4gICAgICAgIHZhciBzaGFwZVRlbnNvciA9IHRmanNfY29yZV8xLnRlbnNvcjFkKHNoYXBlLCAnaW50MzInKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXhlY3V0ZVNpbmdsZU91dHB1dCgnU2NhdHRlck5kJywgb3BBdHRycywgW2luZGljZXMsIHVwZGF0ZXMsIHNoYXBlVGVuc29yXSk7XG4gICAgfTtcbiAgICBOb2RlSlNLZXJuZWxCYWNrZW5kLnByb3RvdHlwZS5iYXRjaFRvU3BhY2VORCA9IGZ1bmN0aW9uICh4LCBibG9ja1NoYXBlLCBjcm9wcykge1xuICAgICAgICB2YXIgYmxvY2tTaGFwZVRlbnNvciA9IHRmanNfY29yZV8xLnRlbnNvcjFkKGJsb2NrU2hhcGUsICdpbnQzMicpO1xuICAgICAgICB2YXIgY3JvcHNUZW5zb3IgPSB0ZmpzX2NvcmVfMS50ZW5zb3IyZChjcm9wcywgW2Nyb3BzLmxlbmd0aCwgY3JvcHNbMF0ubGVuZ3RoXSwgJ2ludDMyJyk7XG4gICAgICAgIHZhciBvcEF0dHJzID0gW1xuICAgICAgICAgICAgb3BfdXRpbHNfMS5jcmVhdGVUeXBlT3BBdHRyKCdUJywgeC5kdHlwZSksIG9wX3V0aWxzXzEuY3JlYXRlVHlwZU9wQXR0cignVGJsb2NrX3NoYXBlJywgJ2ludDMyJyksXG4gICAgICAgICAgICBvcF91dGlsc18xLmNyZWF0ZVR5cGVPcEF0dHIoJ1Rjcm9wcycsIGNyb3BzVGVuc29yLmR0eXBlKVxuICAgICAgICBdO1xuICAgICAgICByZXR1cm4gdGhpcy5leGVjdXRlU2luZ2xlT3V0cHV0KCdCYXRjaFRvU3BhY2VORCcsIG9wQXR0cnMsIFt4LCBibG9ja1NoYXBlVGVuc29yLCBjcm9wc1RlbnNvcl0pO1xuICAgIH07XG4gICAgTm9kZUpTS2VybmVsQmFja2VuZC5wcm90b3R5cGUuc3BhY2VUb0JhdGNoTkQgPSBmdW5jdGlvbiAoeCwgYmxvY2tTaGFwZSwgcGFkZGluZ3MpIHtcbiAgICAgICAgdmFyIGJsb2NrU2hhcGVUZW5zb3IgPSB0ZmpzX2NvcmVfMS50ZW5zb3IxZChibG9ja1NoYXBlLCAnaW50MzInKTtcbiAgICAgICAgdmFyIHBhZGRpbmdzVGVuc29yID0gdGZqc19jb3JlXzEudGVuc29yMmQocGFkZGluZ3MsIFtwYWRkaW5ncy5sZW5ndGgsIHBhZGRpbmdzWzBdLmxlbmd0aF0sICdpbnQzMicpO1xuICAgICAgICB2YXIgb3BBdHRycyA9IFtcbiAgICAgICAgICAgIG9wX3V0aWxzXzEuY3JlYXRlVHlwZU9wQXR0cignVCcsIHguZHR5cGUpLCBvcF91dGlsc18xLmNyZWF0ZVR5cGVPcEF0dHIoJ1RibG9ja19zaGFwZScsICdpbnQzMicpLFxuICAgICAgICAgICAgb3BfdXRpbHNfMS5jcmVhdGVUeXBlT3BBdHRyKCdUcGFkZGluZ3MnLCBwYWRkaW5nc1RlbnNvci5kdHlwZSlcbiAgICAgICAgXTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXhlY3V0ZVNpbmdsZU91dHB1dCgnU3BhY2VUb0JhdGNoTkQnLCBvcEF0dHJzLCBbeCwgYmxvY2tTaGFwZVRlbnNvciwgcGFkZGluZ3NUZW5zb3JdKTtcbiAgICB9O1xuICAgIE5vZGVKU0tlcm5lbEJhY2tlbmQucHJvdG90eXBlLnJlc2l6ZUJpbGluZWFyID0gZnVuY3Rpb24gKHgsIG5ld0hlaWdodCwgbmV3V2lkdGgsIGFsaWduQ29ybmVycykge1xuICAgICAgICB2YXIgb3BBdHRycyA9IFtcbiAgICAgICAgICAgIG9wX3V0aWxzXzEuY3JlYXRlVHlwZU9wQXR0cignVCcsIHguZHR5cGUpLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdhbGlnbl9jb3JuZXJzJyxcbiAgICAgICAgICAgICAgICB0eXBlOiB0aGlzLmJpbmRpbmcuVEZfQVRUUl9CT09MLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBhbGlnbkNvcm5lcnNcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF07XG4gICAgICAgIHZhciBzaXplID0gdGZqc19jb3JlXzEudGVuc29yMWQoW25ld0hlaWdodCwgbmV3V2lkdGhdLCAnaW50MzInKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXhlY3V0ZVNpbmdsZU91dHB1dCgnUmVzaXplQmlsaW5lYXInLCBvcEF0dHJzLCBbeCwgc2l6ZV0pO1xuICAgIH07XG4gICAgTm9kZUpTS2VybmVsQmFja2VuZC5wcm90b3R5cGUucmVzaXplQmlsaW5lYXJCYWNrcHJvcCA9IGZ1bmN0aW9uIChkeSwgeCwgYWxpZ25Db3JuZXJzKSB7XG4gICAgICAgIHZhciBvcEF0dHJzID0gW1xuICAgICAgICAgICAgb3BfdXRpbHNfMS5jcmVhdGVUeXBlT3BBdHRyKCdUJywgeC5kdHlwZSksIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnYWxpZ25fY29ybmVycycsXG4gICAgICAgICAgICAgICAgdHlwZTogdGhpcy5iaW5kaW5nLlRGX0FUVFJfQk9PTCxcbiAgICAgICAgICAgICAgICB2YWx1ZTogYWxpZ25Db3JuZXJzXG4gICAgICAgICAgICB9XG4gICAgICAgIF07XG4gICAgICAgIHJldHVybiB0aGlzLmV4ZWN1dGVTaW5nbGVPdXRwdXQoJ1Jlc2l6ZUJpbGluZWFyR3JhZCcsIG9wQXR0cnMsIFtkeSwgeF0pO1xuICAgIH07XG4gICAgTm9kZUpTS2VybmVsQmFja2VuZC5wcm90b3R5cGUucmVzaXplTmVhcmVzdE5laWdoYm9yID0gZnVuY3Rpb24gKHgsIG5ld0hlaWdodCwgbmV3V2lkdGgsIGFsaWduQ29ybmVycykge1xuICAgICAgICB2YXIgb3BBdHRycyA9IFtcbiAgICAgICAgICAgIG9wX3V0aWxzXzEuY3JlYXRlVHlwZU9wQXR0cignVCcsIHguZHR5cGUpLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdhbGlnbl9jb3JuZXJzJyxcbiAgICAgICAgICAgICAgICB0eXBlOiB0aGlzLmJpbmRpbmcuVEZfQVRUUl9CT09MLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBhbGlnbkNvcm5lcnNcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF07XG4gICAgICAgIHZhciBzaXplID0gdGZqc19jb3JlXzEudGVuc29yMWQoW25ld0hlaWdodCwgbmV3V2lkdGhdLCAnaW50MzInKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXhlY3V0ZVNpbmdsZU91dHB1dCgnUmVzaXplTmVhcmVzdE5laWdoYm9yJywgb3BBdHRycywgW3gsIHNpemVdKTtcbiAgICB9O1xuICAgIE5vZGVKU0tlcm5lbEJhY2tlbmQucHJvdG90eXBlLnJlc2l6ZU5lYXJlc3ROZWlnaGJvckJhY2twcm9wID0gZnVuY3Rpb24gKGR5LCB4LCBhbGlnbkNvcm5lcnMpIHtcbiAgICAgICAgdmFyIG9wQXR0cnMgPSBbXG4gICAgICAgICAgICBvcF91dGlsc18xLmNyZWF0ZVR5cGVPcEF0dHIoJ1QnLCB4LmR0eXBlKSwge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdhbGlnbl9jb3JuZXJzJyxcbiAgICAgICAgICAgICAgICB0eXBlOiB0aGlzLmJpbmRpbmcuVEZfQVRUUl9CT09MLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBhbGlnbkNvcm5lcnNcbiAgICAgICAgICAgIH1cbiAgICAgICAgXTtcbiAgICAgICAgdmFyIF9hID0geC5zaGFwZSwgb3JpZ0hlaWdodCA9IF9hWzFdLCBvcmlnV2lkdGggPSBfYVsyXTtcbiAgICAgICAgdmFyIHNpemUgPSB0ZmpzX2NvcmVfMS50ZW5zb3IxZChbb3JpZ0hlaWdodCwgb3JpZ1dpZHRoXSwgJ2ludDMyJyk7XG4gICAgICAgIHJldHVybiB0aGlzLmV4ZWN1dGVTaW5nbGVPdXRwdXQoJ1Jlc2l6ZU5lYXJlc3ROZWlnaGJvckdyYWQnLCBvcEF0dHJzLCBbZHksIHNpemVdKTtcbiAgICB9O1xuICAgIE5vZGVKU0tlcm5lbEJhY2tlbmQucHJvdG90eXBlLmJhdGNoTm9ybWFsaXphdGlvbiA9IGZ1bmN0aW9uICh4LCBtZWFuLCB2YXJpYW5jZSwgdmFyaWFuY2VFcHNpbG9uLCBzY2FsZSwgb2Zmc2V0KSB7XG4gICAgICAgIGlmIChtZWFuLnJhbmsgPiAxKSB7XG4gICAgICAgICAgICB2YXIgaW52ID0gdGZqc19jb3JlXzEucnNxcnQodmFyaWFuY2UuYWRkKHRmanNfY29yZV8xLnNjYWxhcih2YXJpYW5jZUVwc2lsb24pKSk7XG4gICAgICAgICAgICBpZiAoc2NhbGUgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGludiA9IGludi5tdWwoc2NhbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHhOb3JtID0geC5zdWIobWVhbikubXVsKGludik7XG4gICAgICAgICAgICByZXR1cm4gb2Zmc2V0ICE9IG51bGwgPyB4Tm9ybS5hZGQob2Zmc2V0KSA6IHhOb3JtO1xuICAgICAgICB9XG4gICAgICAgIHZhciBkYXRhRm9ybWF0ID0gJ05IV0MnO1xuICAgICAgICB2YXIgZGVwdGggPSB4LnNoYXBlWzNdO1xuICAgICAgICB2YXIgb3BBdHRycyA9IFtcbiAgICAgICAgICAgIG9wX3V0aWxzXzEuY3JlYXRlVHlwZU9wQXR0cignVCcsIHguZHR5cGUpLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdlcHNpbG9uJyxcbiAgICAgICAgICAgICAgICB0eXBlOiB0aGlzLmJpbmRpbmcuVEZfQVRUUl9GTE9BVCxcbiAgICAgICAgICAgICAgICB2YWx1ZTogdmFyaWFuY2VFcHNpbG9uXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdkYXRhX2Zvcm1hdCcsXG4gICAgICAgICAgICAgICAgdHlwZTogdGhpcy5iaW5kaW5nLlRGX0FUVFJfU1RSSU5HLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBkYXRhRm9ybWF0XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeyBuYW1lOiAnaXNfdHJhaW5pbmcnLCB0eXBlOiB0aGlzLmJpbmRpbmcuVEZfQVRUUl9CT09MLCB2YWx1ZTogZmFsc2UgfSxcbiAgICAgICAgXTtcbiAgICAgICAgdmFyIG51bU91dHB1dHMgPSA1O1xuICAgICAgICBpZiAoc2NhbGUgPT0gbnVsbCkge1xuICAgICAgICAgICAgc2NhbGUgPSB0ZmpzX2NvcmVfMS5maWxsKFtkZXB0aF0sIDEpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvZmZzZXQgPT0gbnVsbCkge1xuICAgICAgICAgICAgb2Zmc2V0ID0gdGZqc19jb3JlXzEuZmlsbChbZGVwdGhdLCAwKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5leGVjdXRlTXVsdGlwbGVPdXRwdXRzKCdGdXNlZEJhdGNoTm9ybScsIG9wQXR0cnMsIFt4LCBzY2FsZSwgb2Zmc2V0LCBtZWFuLCB2YXJpYW5jZV0sIG51bU91dHB1dHMpWzBdO1xuICAgIH07XG4gICAgTm9kZUpTS2VybmVsQmFja2VuZC5wcm90b3R5cGUubG9jYWxSZXNwb25zZU5vcm1hbGl6YXRpb240RCA9IGZ1bmN0aW9uICh4LCByYWRpdXMsIGJpYXMsIGFscGhhLCBiZXRhKSB7XG4gICAgICAgIHZhciBvcEF0dHJzID0gW1xuICAgICAgICAgICAgb3BfdXRpbHNfMS5jcmVhdGVUeXBlT3BBdHRyKCdUJywgeC5kdHlwZSksXG4gICAgICAgICAgICB7IG5hbWU6ICdkZXB0aF9yYWRpdXMnLCB0eXBlOiB0aGlzLmJpbmRpbmcuVEZfQVRUUl9JTlQsIHZhbHVlOiByYWRpdXMgfSxcbiAgICAgICAgICAgIHsgbmFtZTogJ2JpYXMnLCB0eXBlOiB0aGlzLmJpbmRpbmcuVEZfQVRUUl9GTE9BVCwgdmFsdWU6IGJpYXMgfSxcbiAgICAgICAgICAgIHsgbmFtZTogJ2FscGhhJywgdHlwZTogdGhpcy5iaW5kaW5nLlRGX0FUVFJfRkxPQVQsIHZhbHVlOiBhbHBoYSB9LFxuICAgICAgICAgICAgeyBuYW1lOiAnYmV0YScsIHR5cGU6IHRoaXMuYmluZGluZy5URl9BVFRSX0ZMT0FULCB2YWx1ZTogYmV0YSB9LFxuICAgICAgICBdO1xuICAgICAgICByZXR1cm4gdGhpcy5leGVjdXRlU2luZ2xlT3V0cHV0KCdMUk4nLCBvcEF0dHJzLCBbeF0pO1xuICAgIH07XG4gICAgTm9kZUpTS2VybmVsQmFja2VuZC5wcm90b3R5cGUuTFJOR3JhZCA9IGZ1bmN0aW9uIChkeSwgaW5wdXRJbWFnZSwgb3V0cHV0SW1hZ2UsIHJhZGl1cywgYmlhcywgYWxwaGEsIGJldGEpIHtcbiAgICAgICAgdmFyIG9wQXR0cnMgPSBbXG4gICAgICAgICAgICBvcF91dGlsc18xLmNyZWF0ZVR5cGVPcEF0dHIoJ1QnLCBkeS5kdHlwZSksXG4gICAgICAgICAgICB7IG5hbWU6ICdkZXB0aF9yYWRpdXMnLCB0eXBlOiB0aGlzLmJpbmRpbmcuVEZfQVRUUl9JTlQsIHZhbHVlOiByYWRpdXMgfSxcbiAgICAgICAgICAgIHsgbmFtZTogJ2JpYXMnLCB0eXBlOiB0aGlzLmJpbmRpbmcuVEZfQVRUUl9GTE9BVCwgdmFsdWU6IGJpYXMgfSxcbiAgICAgICAgICAgIHsgbmFtZTogJ2FscGhhJywgdHlwZTogdGhpcy5iaW5kaW5nLlRGX0FUVFJfRkxPQVQsIHZhbHVlOiBhbHBoYSB9LFxuICAgICAgICAgICAgeyBuYW1lOiAnYmV0YScsIHR5cGU6IHRoaXMuYmluZGluZy5URl9BVFRSX0ZMT0FULCB2YWx1ZTogYmV0YSB9LFxuICAgICAgICBdO1xuICAgICAgICByZXR1cm4gdGhpcy5leGVjdXRlU2luZ2xlT3V0cHV0KCdMUk5HcmFkJywgb3BBdHRycywgW2R5LCBpbnB1dEltYWdlLCBvdXRwdXRJbWFnZV0pO1xuICAgIH07XG4gICAgTm9kZUpTS2VybmVsQmFja2VuZC5wcm90b3R5cGUubXVsdGlub21pYWwgPSBmdW5jdGlvbiAobG9naXRzLCBub3JtYWxpemVkLCBudW1TYW1wbGVzLCBzZWVkKSB7XG4gICAgICAgIGlmIChub3JtYWxpemVkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RGIE5vZGUgYmFja2VuZCBkb2VzIG5vdCBzdXBwb3J0IG5vcm1hbGl6ZWQgbG9naXRzICcgK1xuICAgICAgICAgICAgICAgICdwYXNzZWQgdG8gbXVsdGlub21pYWwnKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgb3BBdHRycyA9IFtcbiAgICAgICAgICAgIG9wX3V0aWxzXzEuY3JlYXRlVHlwZU9wQXR0cignVCcsIGxvZ2l0cy5kdHlwZSksXG4gICAgICAgICAgICBvcF91dGlsc18xLmNyZWF0ZVR5cGVPcEF0dHIoJ291dHB1dF9kdHlwZScsICdpbnQzMicpLFxuICAgICAgICAgICAgeyBuYW1lOiAnc2VlZCcsIHR5cGU6IHRoaXMuYmluZGluZy5URl9BVFRSX0lOVCwgdmFsdWU6IHNlZWQgfSxcbiAgICAgICAgICAgIHsgbmFtZTogJ3NlZWQyJywgdHlwZTogdGhpcy5iaW5kaW5nLlRGX0FUVFJfSU5ULCB2YWx1ZTogc2VlZCAqIHNlZWQgfSxcbiAgICAgICAgXTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXhlY3V0ZVNpbmdsZU91dHB1dCgnTXVsdGlub21pYWwnLCBvcEF0dHJzLCBbbG9naXRzLCB0ZmpzX2NvcmVfMS5zY2FsYXIobnVtU2FtcGxlcywgJ2ludDMyJyldKTtcbiAgICB9O1xuICAgIE5vZGVKU0tlcm5lbEJhY2tlbmQucHJvdG90eXBlLm9uZUhvdCA9IGZ1bmN0aW9uIChpbmRpY2VzLCBkZXB0aCwgb25WYWx1ZSwgb2ZmVmFsdWUpIHtcbiAgICAgICAgdmFyIGRlcHRoVGVuc29yID0gdGZqc19jb3JlXzEuc2NhbGFyKGRlcHRoLCAnaW50MzInKTtcbiAgICAgICAgdmFyIG9uVmFsdWVUZW5zb3IgPSB0ZmpzX2NvcmVfMS5zY2FsYXIob25WYWx1ZSwgJ2ludDMyJyk7XG4gICAgICAgIHZhciBvZmZWYWx1ZVRlbnNvciA9IHRmanNfY29yZV8xLnNjYWxhcihvZmZWYWx1ZSwgJ2ludDMyJyk7XG4gICAgICAgIHZhciBvcEF0dHJzID0gW1xuICAgICAgICAgICAgeyBuYW1lOiAnYXhpcycsIHR5cGU6IHRoaXMuYmluZGluZy5URl9BVFRSX0lOVCwgdmFsdWU6IC0xIH0sXG4gICAgICAgICAgICBvcF91dGlsc18xLmNyZWF0ZVR5cGVPcEF0dHIoJ1QnLCBpbmRpY2VzLmR0eXBlKSxcbiAgICAgICAgICAgIG9wX3V0aWxzXzEuY3JlYXRlVHlwZU9wQXR0cignVEknLCBpbmRpY2VzLmR0eXBlKVxuICAgICAgICBdO1xuICAgICAgICByZXR1cm4gdGhpcy5leGVjdXRlU2luZ2xlT3V0cHV0KCdPbmVIb3QnLCBvcEF0dHJzLCBbXG4gICAgICAgICAgICBpbmRpY2VzLCBkZXB0aFRlbnNvciwgb25WYWx1ZVRlbnNvciwgb2ZmVmFsdWVUZW5zb3JcbiAgICAgICAgXSk7XG4gICAgfTtcbiAgICBOb2RlSlNLZXJuZWxCYWNrZW5kLnByb3RvdHlwZS5jdW1zdW0gPSBmdW5jdGlvbiAoeCwgYXhpcywgZXhjbHVzaXZlLCByZXZlcnNlKSB7XG4gICAgICAgIHZhciBheGlzVGVuc29yID0gdGZqc19jb3JlXzEuc2NhbGFyKGF4aXMsICdpbnQzMicpO1xuICAgICAgICB2YXIgb3BBdHRycyA9IFtcbiAgICAgICAgICAgIHsgbmFtZTogJ2V4Y2x1c2l2ZScsIHR5cGU6IHRoaXMuYmluZGluZy5URl9BVFRSX0JPT0wsIHZhbHVlOiBleGNsdXNpdmUgfSxcbiAgICAgICAgICAgIHsgbmFtZTogJ3JldmVyc2UnLCB0eXBlOiB0aGlzLmJpbmRpbmcuVEZfQVRUUl9CT09MLCB2YWx1ZTogcmV2ZXJzZSB9LFxuICAgICAgICAgICAgb3BfdXRpbHNfMS5jcmVhdGVUeXBlT3BBdHRyKCdUJywgeC5kdHlwZSksIG9wX3V0aWxzXzEuY3JlYXRlVHlwZU9wQXR0cignVGlkeCcsICdpbnQzMicpXG4gICAgICAgIF07XG4gICAgICAgIHJldHVybiB0aGlzLmV4ZWN1dGVTaW5nbGVPdXRwdXQoJ0N1bXN1bScsIG9wQXR0cnMsIFt4LCBheGlzVGVuc29yXSk7XG4gICAgfTtcbiAgICBOb2RlSlNLZXJuZWxCYWNrZW5kLnByb3RvdHlwZS5ub25NYXhTdXBwcmVzc2lvbiA9IGZ1bmN0aW9uIChib3hlcywgc2NvcmVzLCBtYXhPdXRwdXRTaXplLCBpb3VUaHJlc2hvbGQsIHNjb3JlVGhyZXNob2xkKSB7XG4gICAgICAgIHZhciBvcEF0dHJzID0gW29wX3V0aWxzXzEuY3JlYXRlVHlwZU9wQXR0cignVCcsIGJveGVzLmR0eXBlKV07XG4gICAgICAgIHZhciBtYXhPdXRwdXRTaXplVGVuc29yID0gdGZqc19jb3JlXzEuc2NhbGFyKG1heE91dHB1dFNpemUsICdpbnQzMicpO1xuICAgICAgICB2YXIgaW91VGhyZXNob2xkVGVuc29yID0gdGZqc19jb3JlXzEuc2NhbGFyKGlvdVRocmVzaG9sZCk7XG4gICAgICAgIHZhciBzY29yZVRocmVzaG9sZFRlbnNvciA9IHRmanNfY29yZV8xLnNjYWxhcihzY29yZVRocmVzaG9sZCk7XG4gICAgICAgIHJldHVybiB0aGlzLmV4ZWN1dGVTaW5nbGVPdXRwdXQoJ05vbk1heFN1cHByZXNzaW9uVjMnLCBvcEF0dHJzLCBbXG4gICAgICAgICAgICBib3hlcywgc2NvcmVzLCBtYXhPdXRwdXRTaXplVGVuc29yLCBpb3VUaHJlc2hvbGRUZW5zb3IsXG4gICAgICAgICAgICBzY29yZVRocmVzaG9sZFRlbnNvclxuICAgICAgICBdKTtcbiAgICB9O1xuICAgIE5vZGVKU0tlcm5lbEJhY2tlbmQucHJvdG90eXBlLmZmdCA9IGZ1bmN0aW9uICh4KSB7XG4gICAgICAgIHZhciBvcEF0dHJzID0gW29wX3V0aWxzXzEuY3JlYXRlVHlwZU9wQXR0cignVGNvbXBsZXgnLCB4LmR0eXBlKV07XG4gICAgICAgIHJldHVybiB0aGlzLmV4ZWN1dGVTaW5nbGVPdXRwdXQoJ0ZGVCcsIG9wQXR0cnMsIFt4XSk7XG4gICAgfTtcbiAgICBOb2RlSlNLZXJuZWxCYWNrZW5kLnByb3RvdHlwZS5pZmZ0ID0gZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgdmFyIG9wQXR0cnMgPSBbb3BfdXRpbHNfMS5jcmVhdGVUeXBlT3BBdHRyKCdUY29tcGxleCcsIHguZHR5cGUpXTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXhlY3V0ZVNpbmdsZU91dHB1dCgnSUZGVCcsIG9wQXR0cnMsIFt4XSk7XG4gICAgfTtcbiAgICBOb2RlSlNLZXJuZWxCYWNrZW5kLnByb3RvdHlwZS5jb21wbGV4ID0gZnVuY3Rpb24gKHJlYWwsIGltYWcpIHtcbiAgICAgICAgdmFyIG9wQXR0cnMgPSBbXG4gICAgICAgICAgICBvcF91dGlsc18xLmNyZWF0ZVRlbnNvcnNUeXBlT3BBdHRyKCdUJywgcmVhbCksXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ1RvdXQnLFxuICAgICAgICAgICAgICAgIHR5cGU6IHRoaXMuYmluZGluZy5URl9BVFRSX1RZUEUsXG4gICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMuYmluZGluZy5URl9DT01QTEVYNjRcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF07XG4gICAgICAgIHZhciBpbnB1dHMgPSBbcmVhbCwgaW1hZ107XG4gICAgICAgIHJldHVybiB0aGlzLmV4ZWN1dGVTaW5nbGVPdXRwdXQoJ0NvbXBsZXgnLCBvcEF0dHJzLCBpbnB1dHMpO1xuICAgIH07XG4gICAgTm9kZUpTS2VybmVsQmFja2VuZC5wcm90b3R5cGUucmVhbCA9IGZ1bmN0aW9uIChpbnB1dCkge1xuICAgICAgICB2YXIgb3BBdHRycyA9IFtcbiAgICAgICAgICAgIG9wX3V0aWxzXzEuY3JlYXRlVGVuc29yc1R5cGVPcEF0dHIoJ1QnLCBpbnB1dCksIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnVG91dCcsXG4gICAgICAgICAgICAgICAgdHlwZTogdGhpcy5iaW5kaW5nLlRGX0FUVFJfVFlQRSxcbiAgICAgICAgICAgICAgICB2YWx1ZTogdGhpcy5iaW5kaW5nLlRGX0ZMT0FUXG4gICAgICAgICAgICB9XG4gICAgICAgIF07XG4gICAgICAgIHZhciBpbnB1dHMgPSBbaW5wdXRdO1xuICAgICAgICByZXR1cm4gdGhpcy5leGVjdXRlU2luZ2xlT3V0cHV0KCdSZWFsJywgb3BBdHRycywgaW5wdXRzKTtcbiAgICB9O1xuICAgIE5vZGVKU0tlcm5lbEJhY2tlbmQucHJvdG90eXBlLmltYWcgPSBmdW5jdGlvbiAoaW5wdXQpIHtcbiAgICAgICAgdmFyIG9wQXR0cnMgPSBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ1QnLFxuICAgICAgICAgICAgICAgIHR5cGU6IHRoaXMuYmluZGluZy5URl9BVFRSX1RZUEUsXG4gICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMuYmluZGluZy5URl9DT01QTEVYNjRcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ1RvdXQnLFxuICAgICAgICAgICAgICAgIHR5cGU6IHRoaXMuYmluZGluZy5URl9BVFRSX1RZUEUsXG4gICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMuYmluZGluZy5URl9GTE9BVFxuICAgICAgICAgICAgfVxuICAgICAgICBdO1xuICAgICAgICB2YXIgaW5wdXRzID0gW2lucHV0XTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXhlY3V0ZVNpbmdsZU91dHB1dCgnSW1hZycsIG9wQXR0cnMsIGlucHV0cyk7XG4gICAgfTtcbiAgICBOb2RlSlNLZXJuZWxCYWNrZW5kLnByb3RvdHlwZS5jcm9wQW5kUmVzaXplID0gZnVuY3Rpb24gKGltYWdlLCBib3hlcywgYm94SW5kZXgsIGNyb3BTaXplLCBtZXRob2QsIGV4dHJhcG9sYXRpb25WYWx1ZSkge1xuICAgICAgICB2YXIgb3BBdHRycyA9IFtcbiAgICAgICAgICAgIG9wX3V0aWxzXzEuY3JlYXRlVHlwZU9wQXR0cignVCcsIGltYWdlLmR0eXBlKSxcbiAgICAgICAgICAgIHsgbmFtZTogJ21ldGhvZCcsIHR5cGU6IHRoaXMuYmluZGluZy5URl9BVFRSX1NUUklORywgdmFsdWU6IG1ldGhvZCB9LCB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ2V4dHJhcG9sYXRpb25fdmFsdWUnLFxuICAgICAgICAgICAgICAgIHR5cGU6IHRoaXMuYmluZGluZy5URl9BVFRSX0ZMT0FULFxuICAgICAgICAgICAgICAgIHZhbHVlOiBleHRyYXBvbGF0aW9uVmFsdWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgXTtcbiAgICAgICAgdmFyIGNyb3BTaXplVGVuc29yID0gdGZqc19jb3JlXzEudGVuc29yMWQoY3JvcFNpemUsICdpbnQzMicpO1xuICAgICAgICByZXR1cm4gdGhpcy5leGVjdXRlU2luZ2xlT3V0cHV0KCdDcm9wQW5kUmVzaXplJywgb3BBdHRycywgW2ltYWdlLCBib3hlcywgYm94SW5kZXgsIGNyb3BTaXplVGVuc29yXSk7XG4gICAgfTtcbiAgICBOb2RlSlNLZXJuZWxCYWNrZW5kLnByb3RvdHlwZS5kZXB0aFRvU3BhY2UgPSBmdW5jdGlvbiAoeCwgYmxvY2tTaXplLCBkYXRhRm9ybWF0KSB7XG4gICAgICAgIHZhciBvcEF0dHJzID0gW1xuICAgICAgICAgICAgb3BfdXRpbHNfMS5jcmVhdGVUZW5zb3JzVHlwZU9wQXR0cignVCcsIHgpLCB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ2Jsb2NrX3NpemUnLFxuICAgICAgICAgICAgICAgIHR5cGU6IHRoaXMuYmluZGluZy5URl9BVFRSX0lOVCxcbiAgICAgICAgICAgICAgICB2YWx1ZTogYmxvY2tTaXplIDwgMiA/IDIgOiBibG9ja1NpemVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ2RhdGFfZm9ybWF0JyxcbiAgICAgICAgICAgICAgICB0eXBlOiB0aGlzLmJpbmRpbmcuVEZfQVRUUl9TVFJJTkcsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGRhdGFGb3JtYXRcbiAgICAgICAgICAgIH1cbiAgICAgICAgXTtcbiAgICAgICAgdmFyIGlucHV0cyA9IFt4XTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXhlY3V0ZVNpbmdsZU91dHB1dCgnRGVwdGhUb1NwYWNlJywgb3BBdHRycywgaW5wdXRzKTtcbiAgICB9O1xuICAgIE5vZGVKU0tlcm5lbEJhY2tlbmQucHJvdG90eXBlLnNwbGl0ID0gZnVuY3Rpb24gKHZhbHVlLCBzaXplU3BsaXRzLCBheGlzKSB7XG4gICAgICAgIHZhciBvcEF0dHJzID0gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdudW1fc3BsaXQnLFxuICAgICAgICAgICAgICAgIHR5cGU6IHRoaXMuYmluZGluZy5URl9BVFRSX0lOVCxcbiAgICAgICAgICAgICAgICB2YWx1ZTogc2l6ZVNwbGl0cy5sZW5ndGhcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvcF91dGlsc18xLmNyZWF0ZVRlbnNvcnNUeXBlT3BBdHRyKCdUJywgdmFsdWUpLCB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ1RsZW4nLFxuICAgICAgICAgICAgICAgIHR5cGU6IHRoaXMuYmluZGluZy5URl9BVFRSX1RZUEUsXG4gICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMuYmluZGluZy5URl9JTlQzMlxuICAgICAgICAgICAgfVxuICAgICAgICBdO1xuICAgICAgICB2YXIgaW5wdXRzID0gW3ZhbHVlXTtcbiAgICAgICAgaW5wdXRzLnB1c2godGZqc19jb3JlXzEudGVuc29yMWQoc2l6ZVNwbGl0cywgJ2ludDMyJykpO1xuICAgICAgICBpbnB1dHMucHVzaCh0ZmpzX2NvcmVfMS5zY2FsYXIoYXhpcywgJ2ludDMyJykpO1xuICAgICAgICByZXR1cm4gdGhpcy5leGVjdXRlTXVsdGlwbGVPdXRwdXRzKCdTcGxpdFYnLCBvcEF0dHJzLCBpbnB1dHMsIHNpemVTcGxpdHMubGVuZ3RoKTtcbiAgICB9O1xuICAgIE5vZGVKU0tlcm5lbEJhY2tlbmQucHJvdG90eXBlLnNwYXJzZVRvRGVuc2UgPSBmdW5jdGlvbiAoc3BhcnNlSW5kaWNlcywgc3BhcnNlVmFsdWVzLCBvdXRwdXRTaGFwZSwgZGVmYXVsdFZhbHVlKSB7XG4gICAgICAgIHZhciBvcEF0dHJzID0gW1xuICAgICAgICAgICAgeyBuYW1lOiAndmFsaWRhdGVfaW5kaWNlcycsIHR5cGU6IHRoaXMuYmluZGluZy5URl9BVFRSX0JPT0wsIHZhbHVlOiB0cnVlIH0sXG4gICAgICAgICAgICBvcF91dGlsc18xLmNyZWF0ZVR5cGVPcEF0dHIoJ1QnLCBzcGFyc2VWYWx1ZXMuZHR5cGUpLFxuICAgICAgICAgICAgb3BfdXRpbHNfMS5jcmVhdGVUeXBlT3BBdHRyKCdUaW5kaWNlcycsIHNwYXJzZUluZGljZXMuZHR5cGUpXG4gICAgICAgIF07XG4gICAgICAgIHZhciBvdXRwdXRTaGFwZVRlbnNvciA9IHRmanNfY29yZV8xLnRlbnNvcjFkKG91dHB1dFNoYXBlLCAnaW50MzInKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXhlY3V0ZVNpbmdsZU91dHB1dCgnU3BhcnNlVG9EZW5zZScsIG9wQXR0cnMsIFtcbiAgICAgICAgICAgIHNwYXJzZUluZGljZXMsIG91dHB1dFNoYXBlVGVuc29yLCBzcGFyc2VWYWx1ZXMsIGRlZmF1bHRWYWx1ZVxuICAgICAgICBdKTtcbiAgICB9O1xuICAgIE5vZGVKU0tlcm5lbEJhY2tlbmQucHJvdG90eXBlLmZyb21QaXhlbHMgPSBmdW5jdGlvbiAocGl4ZWxzLCBudW1DaGFubmVscykge1xuICAgICAgICBpZiAocGl4ZWxzID09IG51bGwpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigncGl4ZWxzIHBhc3NlZCB0byB0Zi5mcm9tUGl4ZWxzKCkgY2FuIG5vdCBiZSBudWxsJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBpeGVscy5nZXRDb250ZXh0ID09IG51bGwpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignV2hlbiBydW5uaW5nIGluIG5vZGUsIHBpeGVscyBtdXN0IGJlIGFuIEhUTUxDYW52YXNFbGVtZW50ICcgK1xuICAgICAgICAgICAgICAgICdsaWtlIHRoZSBvbmUgcmV0dXJuZWQgYnkgdGhlIGBjYW52YXNgIG5wbSBwYWNrYWdlJyk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHZhbHMgPSBwaXhlbHNcbiAgICAgICAgICAgIC5nZXRDb250ZXh0KCcyZCcpXG4gICAgICAgICAgICAuZ2V0SW1hZ2VEYXRhKDAsIDAsIHBpeGVscy53aWR0aCwgcGl4ZWxzLmhlaWdodClcbiAgICAgICAgICAgIC5kYXRhO1xuICAgICAgICB2YXIgdmFsdWVzO1xuICAgICAgICBpZiAobnVtQ2hhbm5lbHMgPT09IDQpIHtcbiAgICAgICAgICAgIHZhbHVlcyA9IG5ldyBJbnQzMkFycmF5KHZhbHMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIG51bVBpeGVscyA9IHBpeGVscy53aWR0aCAqIHBpeGVscy5oZWlnaHQ7XG4gICAgICAgICAgICB2YWx1ZXMgPSBuZXcgSW50MzJBcnJheShudW1QaXhlbHMgKiBudW1DaGFubmVscyk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bVBpeGVsczsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgY2hhbm5lbCA9IDA7IGNoYW5uZWwgPCBudW1DaGFubmVsczsgKytjaGFubmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlc1tpICogbnVtQ2hhbm5lbHMgKyBjaGFubmVsXSA9IHZhbHNbaSAqIDQgKyBjaGFubmVsXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG91dFNoYXBlID0gW3BpeGVscy5oZWlnaHQsIHBpeGVscy53aWR0aCwgbnVtQ2hhbm5lbHNdO1xuICAgICAgICByZXR1cm4gdGZqc19jb3JlXzEudGVuc29yM2QodmFsdWVzLCBvdXRTaGFwZSwgJ2ludDMyJyk7XG4gICAgfTtcbiAgICBOb2RlSlNLZXJuZWxCYWNrZW5kLnByb3RvdHlwZS5tZW1vcnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7IHVucmVsaWFibGU6IHRydWUgfTtcbiAgICB9O1xuICAgIE5vZGVKU0tlcm5lbEJhY2tlbmQucHJvdG90eXBlLnRpbWUgPSBmdW5jdGlvbiAoZikge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgc3RhcnQsIGVsYXBzZWQ7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3RhcnQgPSBwcm9jZXNzLmhydGltZSgpO1xuICAgICAgICAgICAgICAgIGYoKTtcbiAgICAgICAgICAgICAgICBlbGFwc2VkID0gcHJvY2Vzcy5ocnRpbWUoc3RhcnQpO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMiwgeyBrZXJuZWxNczogZWxhcHNlZFswXSAqIDEwMDAgKyBlbGFwc2VkWzFdIC8gMTAwMDAwMCB9XTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIE5vZGVKU0tlcm5lbEJhY2tlbmQucHJvdG90eXBlLmlzTmFOID0gZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXhlY3V0ZVNpbmdsZUlucHV0KCdJc05hbicsIHgpO1xuICAgIH07XG4gICAgcmV0dXJuIE5vZGVKU0tlcm5lbEJhY2tlbmQ7XG59KHRmanNfY29yZV8xLktlcm5lbEJhY2tlbmQpKTtcbmV4cG9ydHMuTm9kZUpTS2VybmVsQmFja2VuZCA9IE5vZGVKU0tlcm5lbEJhY2tlbmQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciB0ZmMgPSByZXF1aXJlKFwiQHRlbnNvcmZsb3cvdGZqcy1jb3JlXCIpO1xudmFyIHV0aWxfMSA9IHJlcXVpcmUoXCJ1dGlsXCIpO1xudmFyIGdCYWNrZW5kID0gbnVsbDtcbmZ1bmN0aW9uIG5vZGVCYWNrZW5kKCkge1xuICAgIGlmIChnQmFja2VuZCA9PT0gbnVsbCkge1xuICAgICAgICBnQmFja2VuZCA9IHRmYy5FTlYuZmluZEJhY2tlbmQoJ3RlbnNvcmZsb3cnKTtcbiAgICB9XG4gICAgcmV0dXJuIGdCYWNrZW5kO1xufVxuZXhwb3J0cy5ub2RlQmFja2VuZCA9IG5vZGVCYWNrZW5kO1xuZnVuY3Rpb24gZ2V0VEZEVHlwZShkYXRhVHlwZSkge1xuICAgIHZhciBiaW5kaW5nID0gbm9kZUJhY2tlbmQoKS5iaW5kaW5nO1xuICAgIHN3aXRjaCAoZGF0YVR5cGUpIHtcbiAgICAgICAgY2FzZSAnZmxvYXQzMic6XG4gICAgICAgICAgICByZXR1cm4gYmluZGluZy5URl9GTE9BVDtcbiAgICAgICAgY2FzZSAnaW50MzInOlxuICAgICAgICAgICAgcmV0dXJuIGJpbmRpbmcuVEZfSU5UMzI7XG4gICAgICAgIGNhc2UgJ2Jvb2wnOlxuICAgICAgICAgICAgcmV0dXJuIGJpbmRpbmcuVEZfQk9PTDtcbiAgICAgICAgY2FzZSAnY29tcGxleDY0JzpcbiAgICAgICAgICAgIHJldHVybiBiaW5kaW5nLlRGX0NPTVBMRVg2NDtcbiAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAgIHJldHVybiBiaW5kaW5nLlRGX1NUUklORztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHZhciBlcnJvck1lc3NhZ2UgPSBcIlVua25vd24gZHR5cGU6IFwiICsgZGF0YVR5cGU7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3JNZXNzYWdlKTtcbiAgICB9XG59XG5leHBvcnRzLmdldFRGRFR5cGUgPSBnZXRURkRUeXBlO1xuZnVuY3Rpb24gY3JlYXRlVHlwZU9wQXR0cihhdHRyTmFtZSwgZHR5cGUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBuYW1lOiBhdHRyTmFtZSxcbiAgICAgICAgdHlwZTogbm9kZUJhY2tlbmQoKS5iaW5kaW5nLlRGX0FUVFJfVFlQRSxcbiAgICAgICAgdmFsdWU6IGdldFRGRFR5cGUoZHR5cGUpXG4gICAgfTtcbn1cbmV4cG9ydHMuY3JlYXRlVHlwZU9wQXR0ciA9IGNyZWF0ZVR5cGVPcEF0dHI7XG5mdW5jdGlvbiBjcmVhdGVUZW5zb3JzVHlwZU9wQXR0cihhdHRyTmFtZSwgdGVuc29ycykge1xuICAgIGlmICh1dGlsXzEuaXNOdWxsT3JVbmRlZmluZWQodGVuc29ycykpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGlucHV0IHRlbnNvcnMgdmFsdWUuJyk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIG5hbWU6IGF0dHJOYW1lLFxuICAgICAgICB0eXBlOiBub2RlQmFja2VuZCgpLmJpbmRpbmcuVEZfQVRUUl9UWVBFLFxuICAgICAgICB2YWx1ZTogZ2V0VEZEVHlwZUZvcklucHV0cyh0ZW5zb3JzKVxuICAgIH07XG59XG5leHBvcnRzLmNyZWF0ZVRlbnNvcnNUeXBlT3BBdHRyID0gY3JlYXRlVGVuc29yc1R5cGVPcEF0dHI7XG5mdW5jdGlvbiBnZXRURkRUeXBlRm9ySW5wdXRzKHRlbnNvcnMpIHtcbiAgICBpZiAodXRpbF8xLmlzTnVsbE9yVW5kZWZpbmVkKHRlbnNvcnMpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBpbnB1dCB0ZW5zb3JzIHZhbHVlLicpO1xuICAgIH1cbiAgICBpZiAodXRpbF8xLmlzQXJyYXkodGVuc29ycykpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0ZW5zb3JzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0VEZEVHlwZSh0ZW5zb3JzW2ldLmR0eXBlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gLTE7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gZ2V0VEZEVHlwZSh0ZW5zb3JzLmR0eXBlKTtcbiAgICB9XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciB2ZXJzaW9uID0gJzAuMi4zJztcbmV4cG9ydHMudmVyc2lvbiA9IHZlcnNpb247XG4iLCJcbi8qKlxuICogTW9kdWxlIGRlcGVuZGVuY2llcy5cbiAqL1xuXG52YXIgZnMgPSByZXF1aXJlKCdmcycpXG4gICwgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKVxuICAsIGpvaW4gPSBwYXRoLmpvaW5cbiAgLCBkaXJuYW1lID0gcGF0aC5kaXJuYW1lXG4gICwgZXhpc3RzID0gKChmcy5hY2Nlc3NTeW5jICYmIGZ1bmN0aW9uIChwYXRoKSB7IHRyeSB7IGZzLmFjY2Vzc1N5bmMocGF0aCk7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IHJldHVybiB0cnVlOyB9KVxuICAgICAgfHwgZnMuZXhpc3RzU3luYyB8fCBwYXRoLmV4aXN0c1N5bmMpXG4gICwgZGVmYXVsdHMgPSB7XG4gICAgICAgIGFycm93OiBwcm9jZXNzLmVudi5OT0RFX0JJTkRJTkdTX0FSUk9XIHx8ICcg4oaSICdcbiAgICAgICwgY29tcGlsZWQ6IHByb2Nlc3MuZW52Lk5PREVfQklORElOR1NfQ09NUElMRURfRElSIHx8ICdjb21waWxlZCdcbiAgICAgICwgcGxhdGZvcm06IHByb2Nlc3MucGxhdGZvcm1cbiAgICAgICwgYXJjaDogcHJvY2Vzcy5hcmNoXG4gICAgICAsIHZlcnNpb246IHByb2Nlc3MudmVyc2lvbnMubm9kZVxuICAgICAgLCBiaW5kaW5nczogJ2JpbmRpbmdzLm5vZGUnXG4gICAgICAsIHRyeTogW1xuICAgICAgICAgIC8vIG5vZGUtZ3lwJ3MgbGlua2VkIHZlcnNpb24gaW4gdGhlIFwiYnVpbGRcIiBkaXJcbiAgICAgICAgICBbICdtb2R1bGVfcm9vdCcsICdidWlsZCcsICdiaW5kaW5ncycgXVxuICAgICAgICAgIC8vIG5vZGUtd2FmIGFuZCBneXBfYWRkb24gKGEuay5hIG5vZGUtZ3lwKVxuICAgICAgICAsIFsgJ21vZHVsZV9yb290JywgJ2J1aWxkJywgJ0RlYnVnJywgJ2JpbmRpbmdzJyBdXG4gICAgICAgICwgWyAnbW9kdWxlX3Jvb3QnLCAnYnVpbGQnLCAnUmVsZWFzZScsICdiaW5kaW5ncycgXVxuICAgICAgICAgIC8vIERlYnVnIGZpbGVzLCBmb3IgZGV2ZWxvcG1lbnQgKGxlZ2FjeSBiZWhhdmlvciwgcmVtb3ZlIGZvciBub2RlIHYwLjkpXG4gICAgICAgICwgWyAnbW9kdWxlX3Jvb3QnLCAnb3V0JywgJ0RlYnVnJywgJ2JpbmRpbmdzJyBdXG4gICAgICAgICwgWyAnbW9kdWxlX3Jvb3QnLCAnRGVidWcnLCAnYmluZGluZ3MnIF1cbiAgICAgICAgICAvLyBSZWxlYXNlIGZpbGVzLCBidXQgbWFudWFsbHkgY29tcGlsZWQgKGxlZ2FjeSBiZWhhdmlvciwgcmVtb3ZlIGZvciBub2RlIHYwLjkpXG4gICAgICAgICwgWyAnbW9kdWxlX3Jvb3QnLCAnb3V0JywgJ1JlbGVhc2UnLCAnYmluZGluZ3MnIF1cbiAgICAgICAgLCBbICdtb2R1bGVfcm9vdCcsICdSZWxlYXNlJywgJ2JpbmRpbmdzJyBdXG4gICAgICAgICAgLy8gTGVnYWN5IGZyb20gbm9kZS13YWYsIG5vZGUgPD0gMC40LnhcbiAgICAgICAgLCBbICdtb2R1bGVfcm9vdCcsICdidWlsZCcsICdkZWZhdWx0JywgJ2JpbmRpbmdzJyBdXG4gICAgICAgICAgLy8gUHJvZHVjdGlvbiBcIlJlbGVhc2VcIiBidWlsZHR5cGUgYmluYXJ5IChtZWguLi4pXG4gICAgICAgICwgWyAnbW9kdWxlX3Jvb3QnLCAnY29tcGlsZWQnLCAndmVyc2lvbicsICdwbGF0Zm9ybScsICdhcmNoJywgJ2JpbmRpbmdzJyBdXG4gICAgICAgIF1cbiAgICB9XG5cbi8qKlxuICogVGhlIG1haW4gYGJpbmRpbmdzKClgIGZ1bmN0aW9uIGxvYWRzIHRoZSBjb21waWxlZCBiaW5kaW5ncyBmb3IgYSBnaXZlbiBtb2R1bGUuXG4gKiBJdCB1c2VzIFY4J3MgRXJyb3IgQVBJIHRvIGRldGVybWluZSB0aGUgcGFyZW50IGZpbGVuYW1lIHRoYXQgdGhpcyBmdW5jdGlvbiBpc1xuICogYmVpbmcgaW52b2tlZCBmcm9tLCB3aGljaCBpcyB0aGVuIHVzZWQgdG8gZmluZCB0aGUgcm9vdCBkaXJlY3RvcnkuXG4gKi9cblxuZnVuY3Rpb24gYmluZGluZ3MgKG9wdHMpIHtcblxuICAvLyBBcmd1bWVudCBzdXJnZXJ5XG4gIGlmICh0eXBlb2Ygb3B0cyA9PSAnc3RyaW5nJykge1xuICAgIG9wdHMgPSB7IGJpbmRpbmdzOiBvcHRzIH1cbiAgfSBlbHNlIGlmICghb3B0cykge1xuICAgIG9wdHMgPSB7fVxuICB9XG5cbiAgLy8gbWFwcyBgZGVmYXVsdHNgIG9udG8gYG9wdHNgIG9iamVjdFxuICBPYmplY3Qua2V5cyhkZWZhdWx0cykubWFwKGZ1bmN0aW9uKGkpIHtcbiAgICBpZiAoIShpIGluIG9wdHMpKSBvcHRzW2ldID0gZGVmYXVsdHNbaV07XG4gIH0pO1xuXG4gIC8vIEdldCB0aGUgbW9kdWxlIHJvb3RcbiAgaWYgKCFvcHRzLm1vZHVsZV9yb290KSB7XG4gICAgb3B0cy5tb2R1bGVfcm9vdCA9IGV4cG9ydHMuZ2V0Um9vdChleHBvcnRzLmdldEZpbGVOYW1lKCkpXG4gIH1cblxuICAvLyBFbnN1cmUgdGhlIGdpdmVuIGJpbmRpbmdzIG5hbWUgZW5kcyB3aXRoIC5ub2RlXG4gIGlmIChwYXRoLmV4dG5hbWUob3B0cy5iaW5kaW5ncykgIT0gJy5ub2RlJykge1xuICAgIG9wdHMuYmluZGluZ3MgKz0gJy5ub2RlJ1xuICB9XG5cbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2svd2VicGFjay9pc3N1ZXMvNDE3NSNpc3N1ZWNvbW1lbnQtMzQyOTMxMDM1XG4gIHZhciByZXF1aXJlRnVuYyA9IHR5cGVvZiBfX3dlYnBhY2tfcmVxdWlyZV9fID09PSAnZnVuY3Rpb24nID8gX19ub25fd2VicGFja19yZXF1aXJlX18gOiByZXF1aXJlXG5cbiAgdmFyIHRyaWVzID0gW11cbiAgICAsIGkgPSAwXG4gICAgLCBsID0gb3B0cy50cnkubGVuZ3RoXG4gICAgLCBuXG4gICAgLCBiXG4gICAgLCBlcnJcblxuICBmb3IgKDsgaTxsOyBpKyspIHtcbiAgICBuID0gam9pbi5hcHBseShudWxsLCBvcHRzLnRyeVtpXS5tYXAoZnVuY3Rpb24gKHApIHtcbiAgICAgIHJldHVybiBvcHRzW3BdIHx8IHBcbiAgICB9KSlcbiAgICB0cmllcy5wdXNoKG4pXG4gICAgdHJ5IHtcbiAgICAgIGIgPSBvcHRzLnBhdGggPyByZXF1aXJlRnVuYy5yZXNvbHZlKG4pIDogcmVxdWlyZUZ1bmMobilcbiAgICAgIGlmICghb3B0cy5wYXRoKSB7XG4gICAgICAgIGIucGF0aCA9IG5cbiAgICAgIH1cbiAgICAgIHJldHVybiBiXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaWYgKCEvbm90IGZpbmQvaS50ZXN0KGUubWVzc2FnZSkpIHtcbiAgICAgICAgdGhyb3cgZVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGVyciA9IG5ldyBFcnJvcignQ291bGQgbm90IGxvY2F0ZSB0aGUgYmluZGluZ3MgZmlsZS4gVHJpZWQ6XFxuJ1xuICAgICsgdHJpZXMubWFwKGZ1bmN0aW9uIChhKSB7IHJldHVybiBvcHRzLmFycm93ICsgYSB9KS5qb2luKCdcXG4nKSlcbiAgZXJyLnRyaWVzID0gdHJpZXNcbiAgdGhyb3cgZXJyXG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBiaW5kaW5nc1xuXG5cbi8qKlxuICogR2V0cyB0aGUgZmlsZW5hbWUgb2YgdGhlIEphdmFTY3JpcHQgZmlsZSB0aGF0IGludm9rZXMgdGhpcyBmdW5jdGlvbi5cbiAqIFVzZWQgdG8gaGVscCBmaW5kIHRoZSByb290IGRpcmVjdG9yeSBvZiBhIG1vZHVsZS5cbiAqIE9wdGlvbmFsbHkgYWNjZXB0cyBhbiBmaWxlbmFtZSBhcmd1bWVudCB0byBza2lwIHdoZW4gc2VhcmNoaW5nIGZvciB0aGUgaW52b2tpbmcgZmlsZW5hbWVcbiAqL1xuXG5leHBvcnRzLmdldEZpbGVOYW1lID0gZnVuY3Rpb24gZ2V0RmlsZU5hbWUgKGNhbGxpbmdfZmlsZSkge1xuICB2YXIgb3JpZ1BTVCA9IEVycm9yLnByZXBhcmVTdGFja1RyYWNlXG4gICAgLCBvcmlnU1RMID0gRXJyb3Iuc3RhY2tUcmFjZUxpbWl0XG4gICAgLCBkdW1teSA9IHt9XG4gICAgLCBmaWxlTmFtZVxuXG4gIEVycm9yLnN0YWNrVHJhY2VMaW1pdCA9IDEwXG5cbiAgRXJyb3IucHJlcGFyZVN0YWNrVHJhY2UgPSBmdW5jdGlvbiAoZSwgc3QpIHtcbiAgICBmb3IgKHZhciBpPTAsIGw9c3QubGVuZ3RoOyBpPGw7IGkrKykge1xuICAgICAgZmlsZU5hbWUgPSBzdFtpXS5nZXRGaWxlTmFtZSgpXG4gICAgICBpZiAoZmlsZU5hbWUgIT09IF9fZmlsZW5hbWUpIHtcbiAgICAgICAgaWYgKGNhbGxpbmdfZmlsZSkge1xuICAgICAgICAgICAgaWYgKGZpbGVOYW1lICE9PSBjYWxsaW5nX2ZpbGUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBydW4gdGhlICdwcmVwYXJlU3RhY2tUcmFjZScgZnVuY3Rpb24gYWJvdmVcbiAgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UoZHVtbXkpXG4gIGR1bW15LnN0YWNrXG5cbiAgLy8gY2xlYW51cFxuICBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZSA9IG9yaWdQU1RcbiAgRXJyb3Iuc3RhY2tUcmFjZUxpbWl0ID0gb3JpZ1NUTFxuXG4gIHJldHVybiBmaWxlTmFtZVxufVxuXG4vKipcbiAqIEdldHMgdGhlIHJvb3QgZGlyZWN0b3J5IG9mIGEgbW9kdWxlLCBnaXZlbiBhbiBhcmJpdHJhcnkgZmlsZW5hbWVcbiAqIHNvbWV3aGVyZSBpbiB0aGUgbW9kdWxlIHRyZWUuIFRoZSBcInJvb3QgZGlyZWN0b3J5XCIgaXMgdGhlIGRpcmVjdG9yeVxuICogY29udGFpbmluZyB0aGUgYHBhY2thZ2UuanNvbmAgZmlsZS5cbiAqXG4gKiAgIEluOiAgL2hvbWUvbmF0ZS9ub2RlLW5hdGl2ZS1tb2R1bGUvbGliL2luZGV4LmpzXG4gKiAgIE91dDogL2hvbWUvbmF0ZS9ub2RlLW5hdGl2ZS1tb2R1bGVcbiAqL1xuXG5leHBvcnRzLmdldFJvb3QgPSBmdW5jdGlvbiBnZXRSb290IChmaWxlKSB7XG4gIHZhciBkaXIgPSBkaXJuYW1lKGZpbGUpXG4gICAgLCBwcmV2XG4gIHdoaWxlICh0cnVlKSB7XG4gICAgaWYgKGRpciA9PT0gJy4nKSB7XG4gICAgICAvLyBBdm9pZHMgYW4gaW5maW5pdGUgbG9vcCBpbiByYXJlIGNhc2VzLCBsaWtlIHRoZSBSRVBMXG4gICAgICBkaXIgPSBwcm9jZXNzLmN3ZCgpXG4gICAgfVxuICAgIGlmIChleGlzdHMoam9pbihkaXIsICdwYWNrYWdlLmpzb24nKSkgfHwgZXhpc3RzKGpvaW4oZGlyLCAnbm9kZV9tb2R1bGVzJykpKSB7XG4gICAgICAvLyBGb3VuZCB0aGUgJ3BhY2thZ2UuanNvbicgZmlsZSBvciAnbm9kZV9tb2R1bGVzJyBkaXI7IHdlJ3JlIGRvbmVcbiAgICAgIHJldHVybiBkaXJcbiAgICB9XG4gICAgaWYgKHByZXYgPT09IGRpcikge1xuICAgICAgLy8gR290IHRvIHRoZSB0b3BcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ291bGQgbm90IGZpbmQgbW9kdWxlIHJvb3QgZ2l2ZW4gZmlsZTogXCInICsgZmlsZVxuICAgICAgICAgICAgICAgICAgICArICdcIi4gRG8geW91IGhhdmUgYSBgcGFja2FnZS5qc29uYCBmaWxlPyAnKVxuICAgIH1cbiAgICAvLyBUcnkgdGhlIHBhcmVudCBkaXIgbmV4dFxuICAgIHByZXYgPSBkaXJcbiAgICBkaXIgPSBqb2luKGRpciwgJy4uJylcbiAgfVxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vIHJlZjogaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtZ2xvYmFsXG52YXIgZ2V0R2xvYmFsID0gZnVuY3Rpb24gKCkge1xuXHQvLyB0aGUgb25seSByZWxpYWJsZSBtZWFucyB0byBnZXQgdGhlIGdsb2JhbCBvYmplY3QgaXNcblx0Ly8gYEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKClgXG5cdC8vIEhvd2V2ZXIsIHRoaXMgY2F1c2VzIENTUCB2aW9sYXRpb25zIGluIENocm9tZSBhcHBzLlxuXHRpZiAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnKSB7IHJldHVybiBzZWxmOyB9XG5cdGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykgeyByZXR1cm4gd2luZG93OyB9XG5cdGlmICh0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJykgeyByZXR1cm4gZ2xvYmFsOyB9XG5cdHRocm93IG5ldyBFcnJvcigndW5hYmxlIHRvIGxvY2F0ZSBnbG9iYWwgb2JqZWN0Jyk7XG59XG5cbnZhciBnbG9iYWwgPSBnZXRHbG9iYWwoKTtcblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0gZ2xvYmFsLmZldGNoO1xuXG4vLyBOZWVkZWQgZm9yIFR5cGVTY3JpcHQgYW5kIFdlYnBhY2suXG5leHBvcnRzLmRlZmF1bHQgPSBnbG9iYWwuZmV0Y2guYmluZChnbG9iYWwpO1xuXG5leHBvcnRzLkhlYWRlcnMgPSBnbG9iYWwuSGVhZGVycztcbmV4cG9ydHMuUmVxdWVzdCA9IGdsb2JhbC5SZXF1ZXN0O1xuZXhwb3J0cy5SZXNwb25zZSA9IGdsb2JhbC5SZXNwb25zZTsiLCIvLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuLy8gcmVzb2x2ZXMgLiBhbmQgLi4gZWxlbWVudHMgaW4gYSBwYXRoIGFycmF5IHdpdGggZGlyZWN0b3J5IG5hbWVzIHRoZXJlXG4vLyBtdXN0IGJlIG5vIHNsYXNoZXMsIGVtcHR5IGVsZW1lbnRzLCBvciBkZXZpY2UgbmFtZXMgKGM6XFwpIGluIHRoZSBhcnJheVxuLy8gKHNvIGFsc28gbm8gbGVhZGluZyBhbmQgdHJhaWxpbmcgc2xhc2hlcyAtIGl0IGRvZXMgbm90IGRpc3Rpbmd1aXNoXG4vLyByZWxhdGl2ZSBhbmQgYWJzb2x1dGUgcGF0aHMpXG5mdW5jdGlvbiBub3JtYWxpemVBcnJheShwYXJ0cywgYWxsb3dBYm92ZVJvb3QpIHtcbiAgLy8gaWYgdGhlIHBhdGggdHJpZXMgdG8gZ28gYWJvdmUgdGhlIHJvb3QsIGB1cGAgZW5kcyB1cCA+IDBcbiAgdmFyIHVwID0gMDtcbiAgZm9yICh2YXIgaSA9IHBhcnRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgdmFyIGxhc3QgPSBwYXJ0c1tpXTtcbiAgICBpZiAobGFzdCA9PT0gJy4nKSB7XG4gICAgICBwYXJ0cy5zcGxpY2UoaSwgMSk7XG4gICAgfSBlbHNlIGlmIChsYXN0ID09PSAnLi4nKSB7XG4gICAgICBwYXJ0cy5zcGxpY2UoaSwgMSk7XG4gICAgICB1cCsrO1xuICAgIH0gZWxzZSBpZiAodXApIHtcbiAgICAgIHBhcnRzLnNwbGljZShpLCAxKTtcbiAgICAgIHVwLS07XG4gICAgfVxuICB9XG5cbiAgLy8gaWYgdGhlIHBhdGggaXMgYWxsb3dlZCB0byBnbyBhYm92ZSB0aGUgcm9vdCwgcmVzdG9yZSBsZWFkaW5nIC4uc1xuICBpZiAoYWxsb3dBYm92ZVJvb3QpIHtcbiAgICBmb3IgKDsgdXAtLTsgdXApIHtcbiAgICAgIHBhcnRzLnVuc2hpZnQoJy4uJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHBhcnRzO1xufVxuXG4vLyBTcGxpdCBhIGZpbGVuYW1lIGludG8gW3Jvb3QsIGRpciwgYmFzZW5hbWUsIGV4dF0sIHVuaXggdmVyc2lvblxuLy8gJ3Jvb3QnIGlzIGp1c3QgYSBzbGFzaCwgb3Igbm90aGluZy5cbnZhciBzcGxpdFBhdGhSZSA9XG4gICAgL14oXFwvP3wpKFtcXHNcXFNdKj8pKCg/OlxcLnsxLDJ9fFteXFwvXSs/fCkoXFwuW14uXFwvXSp8KSkoPzpbXFwvXSopJC87XG52YXIgc3BsaXRQYXRoID0gZnVuY3Rpb24oZmlsZW5hbWUpIHtcbiAgcmV0dXJuIHNwbGl0UGF0aFJlLmV4ZWMoZmlsZW5hbWUpLnNsaWNlKDEpO1xufTtcblxuLy8gcGF0aC5yZXNvbHZlKFtmcm9tIC4uLl0sIHRvKVxuLy8gcG9zaXggdmVyc2lvblxuZXhwb3J0cy5yZXNvbHZlID0gZnVuY3Rpb24oKSB7XG4gIHZhciByZXNvbHZlZFBhdGggPSAnJyxcbiAgICAgIHJlc29sdmVkQWJzb2x1dGUgPSBmYWxzZTtcblxuICBmb3IgKHZhciBpID0gYXJndW1lbnRzLmxlbmd0aCAtIDE7IGkgPj0gLTEgJiYgIXJlc29sdmVkQWJzb2x1dGU7IGktLSkge1xuICAgIHZhciBwYXRoID0gKGkgPj0gMCkgPyBhcmd1bWVudHNbaV0gOiBwcm9jZXNzLmN3ZCgpO1xuXG4gICAgLy8gU2tpcCBlbXB0eSBhbmQgaW52YWxpZCBlbnRyaWVzXG4gICAgaWYgKHR5cGVvZiBwYXRoICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnRzIHRvIHBhdGgucmVzb2x2ZSBtdXN0IGJlIHN0cmluZ3MnKTtcbiAgICB9IGVsc2UgaWYgKCFwYXRoKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICByZXNvbHZlZFBhdGggPSBwYXRoICsgJy8nICsgcmVzb2x2ZWRQYXRoO1xuICAgIHJlc29sdmVkQWJzb2x1dGUgPSBwYXRoLmNoYXJBdCgwKSA9PT0gJy8nO1xuICB9XG5cbiAgLy8gQXQgdGhpcyBwb2ludCB0aGUgcGF0aCBzaG91bGQgYmUgcmVzb2x2ZWQgdG8gYSBmdWxsIGFic29sdXRlIHBhdGgsIGJ1dFxuICAvLyBoYW5kbGUgcmVsYXRpdmUgcGF0aHMgdG8gYmUgc2FmZSAobWlnaHQgaGFwcGVuIHdoZW4gcHJvY2Vzcy5jd2QoKSBmYWlscylcblxuICAvLyBOb3JtYWxpemUgdGhlIHBhdGhcbiAgcmVzb2x2ZWRQYXRoID0gbm9ybWFsaXplQXJyYXkoZmlsdGVyKHJlc29sdmVkUGF0aC5zcGxpdCgnLycpLCBmdW5jdGlvbihwKSB7XG4gICAgcmV0dXJuICEhcDtcbiAgfSksICFyZXNvbHZlZEFic29sdXRlKS5qb2luKCcvJyk7XG5cbiAgcmV0dXJuICgocmVzb2x2ZWRBYnNvbHV0ZSA/ICcvJyA6ICcnKSArIHJlc29sdmVkUGF0aCkgfHwgJy4nO1xufTtcblxuLy8gcGF0aC5ub3JtYWxpemUocGF0aClcbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMubm9ybWFsaXplID0gZnVuY3Rpb24ocGF0aCkge1xuICB2YXIgaXNBYnNvbHV0ZSA9IGV4cG9ydHMuaXNBYnNvbHV0ZShwYXRoKSxcbiAgICAgIHRyYWlsaW5nU2xhc2ggPSBzdWJzdHIocGF0aCwgLTEpID09PSAnLyc7XG5cbiAgLy8gTm9ybWFsaXplIHRoZSBwYXRoXG4gIHBhdGggPSBub3JtYWxpemVBcnJheShmaWx0ZXIocGF0aC5zcGxpdCgnLycpLCBmdW5jdGlvbihwKSB7XG4gICAgcmV0dXJuICEhcDtcbiAgfSksICFpc0Fic29sdXRlKS5qb2luKCcvJyk7XG5cbiAgaWYgKCFwYXRoICYmICFpc0Fic29sdXRlKSB7XG4gICAgcGF0aCA9ICcuJztcbiAgfVxuICBpZiAocGF0aCAmJiB0cmFpbGluZ1NsYXNoKSB7XG4gICAgcGF0aCArPSAnLyc7XG4gIH1cblxuICByZXR1cm4gKGlzQWJzb2x1dGUgPyAnLycgOiAnJykgKyBwYXRoO1xufTtcblxuLy8gcG9zaXggdmVyc2lvblxuZXhwb3J0cy5pc0Fic29sdXRlID0gZnVuY3Rpb24ocGF0aCkge1xuICByZXR1cm4gcGF0aC5jaGFyQXQoMCkgPT09ICcvJztcbn07XG5cbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMuam9pbiA9IGZ1bmN0aW9uKCkge1xuICB2YXIgcGF0aHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDApO1xuICByZXR1cm4gZXhwb3J0cy5ub3JtYWxpemUoZmlsdGVyKHBhdGhzLCBmdW5jdGlvbihwLCBpbmRleCkge1xuICAgIGlmICh0eXBlb2YgcCAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50cyB0byBwYXRoLmpvaW4gbXVzdCBiZSBzdHJpbmdzJyk7XG4gICAgfVxuICAgIHJldHVybiBwO1xuICB9KS5qb2luKCcvJykpO1xufTtcblxuXG4vLyBwYXRoLnJlbGF0aXZlKGZyb20sIHRvKVxuLy8gcG9zaXggdmVyc2lvblxuZXhwb3J0cy5yZWxhdGl2ZSA9IGZ1bmN0aW9uKGZyb20sIHRvKSB7XG4gIGZyb20gPSBleHBvcnRzLnJlc29sdmUoZnJvbSkuc3Vic3RyKDEpO1xuICB0byA9IGV4cG9ydHMucmVzb2x2ZSh0bykuc3Vic3RyKDEpO1xuXG4gIGZ1bmN0aW9uIHRyaW0oYXJyKSB7XG4gICAgdmFyIHN0YXJ0ID0gMDtcbiAgICBmb3IgKDsgc3RhcnQgPCBhcnIubGVuZ3RoOyBzdGFydCsrKSB7XG4gICAgICBpZiAoYXJyW3N0YXJ0XSAhPT0gJycpIGJyZWFrO1xuICAgIH1cblxuICAgIHZhciBlbmQgPSBhcnIubGVuZ3RoIC0gMTtcbiAgICBmb3IgKDsgZW5kID49IDA7IGVuZC0tKSB7XG4gICAgICBpZiAoYXJyW2VuZF0gIT09ICcnKSBicmVhaztcbiAgICB9XG5cbiAgICBpZiAoc3RhcnQgPiBlbmQpIHJldHVybiBbXTtcbiAgICByZXR1cm4gYXJyLnNsaWNlKHN0YXJ0LCBlbmQgLSBzdGFydCArIDEpO1xuICB9XG5cbiAgdmFyIGZyb21QYXJ0cyA9IHRyaW0oZnJvbS5zcGxpdCgnLycpKTtcbiAgdmFyIHRvUGFydHMgPSB0cmltKHRvLnNwbGl0KCcvJykpO1xuXG4gIHZhciBsZW5ndGggPSBNYXRoLm1pbihmcm9tUGFydHMubGVuZ3RoLCB0b1BhcnRzLmxlbmd0aCk7XG4gIHZhciBzYW1lUGFydHNMZW5ndGggPSBsZW5ndGg7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZnJvbVBhcnRzW2ldICE9PSB0b1BhcnRzW2ldKSB7XG4gICAgICBzYW1lUGFydHNMZW5ndGggPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgdmFyIG91dHB1dFBhcnRzID0gW107XG4gIGZvciAodmFyIGkgPSBzYW1lUGFydHNMZW5ndGg7IGkgPCBmcm9tUGFydHMubGVuZ3RoOyBpKyspIHtcbiAgICBvdXRwdXRQYXJ0cy5wdXNoKCcuLicpO1xuICB9XG5cbiAgb3V0cHV0UGFydHMgPSBvdXRwdXRQYXJ0cy5jb25jYXQodG9QYXJ0cy5zbGljZShzYW1lUGFydHNMZW5ndGgpKTtcblxuICByZXR1cm4gb3V0cHV0UGFydHMuam9pbignLycpO1xufTtcblxuZXhwb3J0cy5zZXAgPSAnLyc7XG5leHBvcnRzLmRlbGltaXRlciA9ICc6JztcblxuZXhwb3J0cy5kaXJuYW1lID0gZnVuY3Rpb24ocGF0aCkge1xuICB2YXIgcmVzdWx0ID0gc3BsaXRQYXRoKHBhdGgpLFxuICAgICAgcm9vdCA9IHJlc3VsdFswXSxcbiAgICAgIGRpciA9IHJlc3VsdFsxXTtcblxuICBpZiAoIXJvb3QgJiYgIWRpcikge1xuICAgIC8vIE5vIGRpcm5hbWUgd2hhdHNvZXZlclxuICAgIHJldHVybiAnLic7XG4gIH1cblxuICBpZiAoZGlyKSB7XG4gICAgLy8gSXQgaGFzIGEgZGlybmFtZSwgc3RyaXAgdHJhaWxpbmcgc2xhc2hcbiAgICBkaXIgPSBkaXIuc3Vic3RyKDAsIGRpci5sZW5ndGggLSAxKTtcbiAgfVxuXG4gIHJldHVybiByb290ICsgZGlyO1xufTtcblxuXG5leHBvcnRzLmJhc2VuYW1lID0gZnVuY3Rpb24ocGF0aCwgZXh0KSB7XG4gIHZhciBmID0gc3BsaXRQYXRoKHBhdGgpWzJdO1xuICAvLyBUT0RPOiBtYWtlIHRoaXMgY29tcGFyaXNvbiBjYXNlLWluc2Vuc2l0aXZlIG9uIHdpbmRvd3M/XG4gIGlmIChleHQgJiYgZi5zdWJzdHIoLTEgKiBleHQubGVuZ3RoKSA9PT0gZXh0KSB7XG4gICAgZiA9IGYuc3Vic3RyKDAsIGYubGVuZ3RoIC0gZXh0Lmxlbmd0aCk7XG4gIH1cbiAgcmV0dXJuIGY7XG59O1xuXG5cbmV4cG9ydHMuZXh0bmFtZSA9IGZ1bmN0aW9uKHBhdGgpIHtcbiAgcmV0dXJuIHNwbGl0UGF0aChwYXRoKVszXTtcbn07XG5cbmZ1bmN0aW9uIGZpbHRlciAoeHMsIGYpIHtcbiAgICBpZiAoeHMuZmlsdGVyKSByZXR1cm4geHMuZmlsdGVyKGYpO1xuICAgIHZhciByZXMgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHhzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChmKHhzW2ldLCBpLCB4cykpIHJlcy5wdXNoKHhzW2ldKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbn1cblxuLy8gU3RyaW5nLnByb3RvdHlwZS5zdWJzdHIgLSBuZWdhdGl2ZSBpbmRleCBkb24ndCB3b3JrIGluIElFOFxudmFyIHN1YnN0ciA9ICdhYicuc3Vic3RyKC0xKSA9PT0gJ2InXG4gICAgPyBmdW5jdGlvbiAoc3RyLCBzdGFydCwgbGVuKSB7IHJldHVybiBzdHIuc3Vic3RyKHN0YXJ0LCBsZW4pIH1cbiAgICA6IGZ1bmN0aW9uIChzdHIsIHN0YXJ0LCBsZW4pIHtcbiAgICAgICAgaWYgKHN0YXJ0IDwgMCkgc3RhcnQgPSBzdHIubGVuZ3RoICsgc3RhcnQ7XG4gICAgICAgIHJldHVybiBzdHIuc3Vic3RyKHN0YXJ0LCBsZW4pO1xuICAgIH1cbjtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9saWIvbm9kZS1wcm9ncmVzcycpO1xuIiwiLyohXG4gKiBub2RlLXByb2dyZXNzXG4gKiBDb3B5cmlnaHQoYykgMjAxMSBUSiBIb2xvd2F5Y2h1ayA8dGpAdmlzaW9uLW1lZGlhLmNhPlxuICogTUlUIExpY2Vuc2VkXG4gKi9cblxuLyoqXG4gKiBFeHBvc2UgYFByb2dyZXNzQmFyYC5cbiAqL1xuXG5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBQcm9ncmVzc0JhcjtcblxuLyoqXG4gKiBJbml0aWFsaXplIGEgYFByb2dyZXNzQmFyYCB3aXRoIHRoZSBnaXZlbiBgZm10YCBzdHJpbmcgYW5kIGBvcHRpb25zYCBvclxuICogYHRvdGFsYC5cbiAqXG4gKiBPcHRpb25zOlxuICpcbiAqICAgLSBgY3VycmAgY3VycmVudCBjb21wbGV0ZWQgaW5kZXhcbiAqICAgLSBgdG90YWxgIHRvdGFsIG51bWJlciBvZiB0aWNrcyB0byBjb21wbGV0ZVxuICogICAtIGB3aWR0aGAgdGhlIGRpc3BsYXllZCB3aWR0aCBvZiB0aGUgcHJvZ3Jlc3MgYmFyIGRlZmF1bHRpbmcgdG8gdG90YWxcbiAqICAgLSBgc3RyZWFtYCB0aGUgb3V0cHV0IHN0cmVhbSBkZWZhdWx0aW5nIHRvIHN0ZGVyclxuICogICAtIGBoZWFkYCBoZWFkIGNoYXJhY3RlciBkZWZhdWx0aW5nIHRvIGNvbXBsZXRlIGNoYXJhY3RlclxuICogICAtIGBjb21wbGV0ZWAgY29tcGxldGlvbiBjaGFyYWN0ZXIgZGVmYXVsdGluZyB0byBcIj1cIlxuICogICAtIGBpbmNvbXBsZXRlYCBpbmNvbXBsZXRlIGNoYXJhY3RlciBkZWZhdWx0aW5nIHRvIFwiLVwiXG4gKiAgIC0gYHJlbmRlclRocm90dGxlYCBtaW5pbXVtIHRpbWUgYmV0d2VlbiB1cGRhdGVzIGluIG1pbGxpc2Vjb25kcyBkZWZhdWx0aW5nIHRvIDE2XG4gKiAgIC0gYGNhbGxiYWNrYCBvcHRpb25hbCBmdW5jdGlvbiB0byBjYWxsIHdoZW4gdGhlIHByb2dyZXNzIGJhciBjb21wbGV0ZXNcbiAqICAgLSBgY2xlYXJgIHdpbGwgY2xlYXIgdGhlIHByb2dyZXNzIGJhciB1cG9uIHRlcm1pbmF0aW9uXG4gKlxuICogVG9rZW5zOlxuICpcbiAqICAgLSBgOmJhcmAgdGhlIHByb2dyZXNzIGJhciBpdHNlbGZcbiAqICAgLSBgOmN1cnJlbnRgIGN1cnJlbnQgdGljayBudW1iZXJcbiAqICAgLSBgOnRvdGFsYCB0b3RhbCB0aWNrc1xuICogICAtIGA6ZWxhcHNlZGAgdGltZSBlbGFwc2VkIGluIHNlY29uZHNcbiAqICAgLSBgOnBlcmNlbnRgIGNvbXBsZXRpb24gcGVyY2VudGFnZVxuICogICAtIGA6ZXRhYCBldGEgaW4gc2Vjb25kc1xuICogICAtIGA6cmF0ZWAgcmF0ZSBvZiB0aWNrcyBwZXIgc2Vjb25kXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGZtdFxuICogQHBhcmFtIHtvYmplY3R8bnVtYmVyfSBvcHRpb25zIG9yIHRvdGFsXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIFByb2dyZXNzQmFyKGZtdCwgb3B0aW9ucykge1xuICB0aGlzLnN0cmVhbSA9IG9wdGlvbnMuc3RyZWFtIHx8IHByb2Nlc3Muc3RkZXJyO1xuXG4gIGlmICh0eXBlb2Yob3B0aW9ucykgPT0gJ251bWJlcicpIHtcbiAgICB2YXIgdG90YWwgPSBvcHRpb25zO1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgICBvcHRpb25zLnRvdGFsID0gdG90YWw7XG4gIH0gZWxzZSB7XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgaWYgKCdzdHJpbmcnICE9IHR5cGVvZiBmbXQpIHRocm93IG5ldyBFcnJvcignZm9ybWF0IHJlcXVpcmVkJyk7XG4gICAgaWYgKCdudW1iZXInICE9IHR5cGVvZiBvcHRpb25zLnRvdGFsKSB0aHJvdyBuZXcgRXJyb3IoJ3RvdGFsIHJlcXVpcmVkJyk7XG4gIH1cblxuICB0aGlzLmZtdCA9IGZtdDtcbiAgdGhpcy5jdXJyID0gb3B0aW9ucy5jdXJyIHx8IDA7XG4gIHRoaXMudG90YWwgPSBvcHRpb25zLnRvdGFsO1xuICB0aGlzLndpZHRoID0gb3B0aW9ucy53aWR0aCB8fCB0aGlzLnRvdGFsO1xuICB0aGlzLmNsZWFyID0gb3B0aW9ucy5jbGVhclxuICB0aGlzLmNoYXJzID0ge1xuICAgIGNvbXBsZXRlICAgOiBvcHRpb25zLmNvbXBsZXRlIHx8ICc9JyxcbiAgICBpbmNvbXBsZXRlIDogb3B0aW9ucy5pbmNvbXBsZXRlIHx8ICctJyxcbiAgICBoZWFkICAgICAgIDogb3B0aW9ucy5oZWFkIHx8IChvcHRpb25zLmNvbXBsZXRlIHx8ICc9JylcbiAgfTtcbiAgdGhpcy5yZW5kZXJUaHJvdHRsZSA9IG9wdGlvbnMucmVuZGVyVGhyb3R0bGUgIT09IDAgPyAob3B0aW9ucy5yZW5kZXJUaHJvdHRsZSB8fCAxNikgOiAwO1xuICB0aGlzLmxhc3RSZW5kZXIgPSAtSW5maW5pdHk7XG4gIHRoaXMuY2FsbGJhY2sgPSBvcHRpb25zLmNhbGxiYWNrIHx8IGZ1bmN0aW9uICgpIHt9O1xuICB0aGlzLnRva2VucyA9IHt9O1xuICB0aGlzLmxhc3REcmF3ID0gJyc7XG59XG5cbi8qKlxuICogXCJ0aWNrXCIgdGhlIHByb2dyZXNzIGJhciB3aXRoIG9wdGlvbmFsIGBsZW5gIGFuZCBvcHRpb25hbCBgdG9rZW5zYC5cbiAqXG4gKiBAcGFyYW0ge251bWJlcnxvYmplY3R9IGxlbiBvciB0b2tlbnNcbiAqIEBwYXJhbSB7b2JqZWN0fSB0b2tlbnNcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUHJvZ3Jlc3NCYXIucHJvdG90eXBlLnRpY2sgPSBmdW5jdGlvbihsZW4sIHRva2Vucyl7XG4gIGlmIChsZW4gIT09IDApXG4gICAgbGVuID0gbGVuIHx8IDE7XG5cbiAgLy8gc3dhcCB0b2tlbnNcbiAgaWYgKCdvYmplY3QnID09IHR5cGVvZiBsZW4pIHRva2VucyA9IGxlbiwgbGVuID0gMTtcbiAgaWYgKHRva2VucykgdGhpcy50b2tlbnMgPSB0b2tlbnM7XG5cbiAgLy8gc3RhcnQgdGltZSBmb3IgZXRhXG4gIGlmICgwID09IHRoaXMuY3VycikgdGhpcy5zdGFydCA9IG5ldyBEYXRlO1xuXG4gIHRoaXMuY3VyciArPSBsZW5cblxuICAvLyB0cnkgdG8gcmVuZGVyXG4gIHRoaXMucmVuZGVyKCk7XG5cbiAgLy8gcHJvZ3Jlc3MgY29tcGxldGVcbiAgaWYgKHRoaXMuY3VyciA+PSB0aGlzLnRvdGFsKSB7XG4gICAgdGhpcy5yZW5kZXIodW5kZWZpbmVkLCB0cnVlKTtcbiAgICB0aGlzLmNvbXBsZXRlID0gdHJ1ZTtcbiAgICB0aGlzLnRlcm1pbmF0ZSgpO1xuICAgIHRoaXMuY2FsbGJhY2sodGhpcyk7XG4gICAgcmV0dXJuO1xuICB9XG59O1xuXG4vKipcbiAqIE1ldGhvZCB0byByZW5kZXIgdGhlIHByb2dyZXNzIGJhciB3aXRoIG9wdGlvbmFsIGB0b2tlbnNgIHRvIHBsYWNlIGluIHRoZVxuICogcHJvZ3Jlc3MgYmFyJ3MgYGZtdGAgZmllbGQuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHRva2Vuc1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5Qcm9ncmVzc0Jhci5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKHRva2VucywgZm9yY2UpIHtcbiAgZm9yY2UgPSBmb3JjZSAhPT0gdW5kZWZpbmVkID8gZm9yY2UgOiBmYWxzZTtcbiAgaWYgKHRva2VucykgdGhpcy50b2tlbnMgPSB0b2tlbnM7XG5cbiAgaWYgKCF0aGlzLnN0cmVhbS5pc1RUWSkgcmV0dXJuO1xuXG4gIHZhciBub3cgPSBEYXRlLm5vdygpO1xuICB2YXIgZGVsdGEgPSBub3cgLSB0aGlzLmxhc3RSZW5kZXI7XG4gIGlmICghZm9yY2UgJiYgKGRlbHRhIDwgdGhpcy5yZW5kZXJUaHJvdHRsZSkpIHtcbiAgICByZXR1cm47XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5sYXN0UmVuZGVyID0gbm93O1xuICB9XG5cbiAgdmFyIHJhdGlvID0gdGhpcy5jdXJyIC8gdGhpcy50b3RhbDtcbiAgcmF0aW8gPSBNYXRoLm1pbihNYXRoLm1heChyYXRpbywgMCksIDEpO1xuXG4gIHZhciBwZXJjZW50ID0gTWF0aC5mbG9vcihyYXRpbyAqIDEwMCk7XG4gIHZhciBpbmNvbXBsZXRlLCBjb21wbGV0ZSwgY29tcGxldGVMZW5ndGg7XG4gIHZhciBlbGFwc2VkID0gbmV3IERhdGUgLSB0aGlzLnN0YXJ0O1xuICB2YXIgZXRhID0gKHBlcmNlbnQgPT0gMTAwKSA/IDAgOiBlbGFwc2VkICogKHRoaXMudG90YWwgLyB0aGlzLmN1cnIgLSAxKTtcbiAgdmFyIHJhdGUgPSB0aGlzLmN1cnIgLyAoZWxhcHNlZCAvIDEwMDApO1xuXG4gIC8qIHBvcHVsYXRlIHRoZSBiYXIgdGVtcGxhdGUgd2l0aCBwZXJjZW50YWdlcyBhbmQgdGltZXN0YW1wcyAqL1xuICB2YXIgc3RyID0gdGhpcy5mbXRcbiAgICAucmVwbGFjZSgnOmN1cnJlbnQnLCB0aGlzLmN1cnIpXG4gICAgLnJlcGxhY2UoJzp0b3RhbCcsIHRoaXMudG90YWwpXG4gICAgLnJlcGxhY2UoJzplbGFwc2VkJywgaXNOYU4oZWxhcHNlZCkgPyAnMC4wJyA6IChlbGFwc2VkIC8gMTAwMCkudG9GaXhlZCgxKSlcbiAgICAucmVwbGFjZSgnOmV0YScsIChpc05hTihldGEpIHx8ICFpc0Zpbml0ZShldGEpKSA/ICcwLjAnIDogKGV0YSAvIDEwMDApXG4gICAgICAudG9GaXhlZCgxKSlcbiAgICAucmVwbGFjZSgnOnBlcmNlbnQnLCBwZXJjZW50LnRvRml4ZWQoMCkgKyAnJScpXG4gICAgLnJlcGxhY2UoJzpyYXRlJywgTWF0aC5yb3VuZChyYXRlKSk7XG5cbiAgLyogY29tcHV0ZSB0aGUgYXZhaWxhYmxlIHNwYWNlIChub24temVybykgZm9yIHRoZSBiYXIgKi9cbiAgdmFyIGF2YWlsYWJsZVNwYWNlID0gTWF0aC5tYXgoMCwgdGhpcy5zdHJlYW0uY29sdW1ucyAtIHN0ci5yZXBsYWNlKCc6YmFyJywgJycpLmxlbmd0aCk7XG4gIGlmKGF2YWlsYWJsZVNwYWNlICYmIHByb2Nlc3MucGxhdGZvcm0gPT09ICd3aW4zMicpe1xuICAgIGF2YWlsYWJsZVNwYWNlID0gYXZhaWxhYmxlU3BhY2UgLSAxO1xuICB9XG5cbiAgdmFyIHdpZHRoID0gTWF0aC5taW4odGhpcy53aWR0aCwgYXZhaWxhYmxlU3BhY2UpO1xuXG4gIC8qIFRPRE86IHRoZSBmb2xsb3dpbmcgYXNzdW1lcyB0aGUgdXNlciBoYXMgb25lICc6YmFyJyB0b2tlbiAqL1xuICBjb21wbGV0ZUxlbmd0aCA9IE1hdGgucm91bmQod2lkdGggKiByYXRpbyk7XG4gIGNvbXBsZXRlID0gQXJyYXkoTWF0aC5tYXgoMCwgY29tcGxldGVMZW5ndGggKyAxKSkuam9pbih0aGlzLmNoYXJzLmNvbXBsZXRlKTtcbiAgaW5jb21wbGV0ZSA9IEFycmF5KE1hdGgubWF4KDAsIHdpZHRoIC0gY29tcGxldGVMZW5ndGggKyAxKSkuam9pbih0aGlzLmNoYXJzLmluY29tcGxldGUpO1xuXG4gIC8qIGFkZCBoZWFkIHRvIHRoZSBjb21wbGV0ZSBzdHJpbmcgKi9cbiAgaWYoY29tcGxldGVMZW5ndGggPiAwKVxuICAgIGNvbXBsZXRlID0gY29tcGxldGUuc2xpY2UoMCwgLTEpICsgdGhpcy5jaGFycy5oZWFkO1xuXG4gIC8qIGZpbGwgaW4gdGhlIGFjdHVhbCBwcm9ncmVzcyBiYXIgKi9cbiAgc3RyID0gc3RyLnJlcGxhY2UoJzpiYXInLCBjb21wbGV0ZSArIGluY29tcGxldGUpO1xuXG4gIC8qIHJlcGxhY2UgdGhlIGV4dHJhIHRva2VucyAqL1xuICBpZiAodGhpcy50b2tlbnMpIGZvciAodmFyIGtleSBpbiB0aGlzLnRva2Vucykgc3RyID0gc3RyLnJlcGxhY2UoJzonICsga2V5LCB0aGlzLnRva2Vuc1trZXldKTtcblxuICBpZiAodGhpcy5sYXN0RHJhdyAhPT0gc3RyKSB7XG4gICAgdGhpcy5zdHJlYW0uY3Vyc29yVG8oMCk7XG4gICAgdGhpcy5zdHJlYW0ud3JpdGUoc3RyKTtcbiAgICB0aGlzLnN0cmVhbS5jbGVhckxpbmUoMSk7XG4gICAgdGhpcy5sYXN0RHJhdyA9IHN0cjtcbiAgfVxufTtcblxuLyoqXG4gKiBcInVwZGF0ZVwiIHRoZSBwcm9ncmVzcyBiYXIgdG8gcmVwcmVzZW50IGFuIGV4YWN0IHBlcmNlbnRhZ2UuXG4gKiBUaGUgcmF0aW8gKGJldHdlZW4gMCBhbmQgMSkgc3BlY2lmaWVkIHdpbGwgYmUgbXVsdGlwbGllZCBieSBgdG90YWxgIGFuZFxuICogZmxvb3JlZCwgcmVwcmVzZW50aW5nIHRoZSBjbG9zZXN0IGF2YWlsYWJsZSBcInRpY2suXCIgRm9yIGV4YW1wbGUsIGlmIGFcbiAqIHByb2dyZXNzIGJhciBoYXMgYSBsZW5ndGggb2YgMyBhbmQgYHVwZGF0ZSgwLjUpYCBpcyBjYWxsZWQsIHRoZSBwcm9ncmVzc1xuICogd2lsbCBiZSBzZXQgdG8gMS5cbiAqXG4gKiBBIHJhdGlvIG9mIDAuNSB3aWxsIGF0dGVtcHQgdG8gc2V0IHRoZSBwcm9ncmVzcyB0byBoYWxmd2F5LlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSByYXRpbyBUaGUgcmF0aW8gKGJldHdlZW4gMCBhbmQgMSBpbmNsdXNpdmUpIHRvIHNldCB0aGVcbiAqICAgb3ZlcmFsbCBjb21wbGV0aW9uIHRvLlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5Qcm9ncmVzc0Jhci5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKHJhdGlvLCB0b2tlbnMpIHtcbiAgdmFyIGdvYWwgPSBNYXRoLmZsb29yKHJhdGlvICogdGhpcy50b3RhbCk7XG4gIHZhciBkZWx0YSA9IGdvYWwgLSB0aGlzLmN1cnI7XG5cbiAgdGhpcy50aWNrKGRlbHRhLCB0b2tlbnMpO1xufTtcblxuLyoqXG4gKiBcImludGVycnVwdFwiIHRoZSBwcm9ncmVzcyBiYXIgYW5kIHdyaXRlIGEgbWVzc2FnZSBhYm92ZSBpdC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlIFRoZSBtZXNzYWdlIHRvIHdyaXRlLlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5Qcm9ncmVzc0Jhci5wcm90b3R5cGUuaW50ZXJydXB0ID0gZnVuY3Rpb24gKG1lc3NhZ2UpIHtcbiAgLy8gY2xlYXIgdGhlIGN1cnJlbnQgbGluZVxuICB0aGlzLnN0cmVhbS5jbGVhckxpbmUoKTtcbiAgLy8gbW92ZSB0aGUgY3Vyc29yIHRvIHRoZSBzdGFydCBvZiB0aGUgbGluZVxuICB0aGlzLnN0cmVhbS5jdXJzb3JUbygwKTtcbiAgLy8gd3JpdGUgdGhlIG1lc3NhZ2UgdGV4dFxuICB0aGlzLnN0cmVhbS53cml0ZShtZXNzYWdlKTtcbiAgLy8gdGVybWluYXRlIHRoZSBsaW5lIGFmdGVyIHdyaXRpbmcgdGhlIG1lc3NhZ2VcbiAgdGhpcy5zdHJlYW0ud3JpdGUoJ1xcbicpO1xuICAvLyByZS1kaXNwbGF5IHRoZSBwcm9ncmVzcyBiYXIgd2l0aCBpdHMgbGFzdERyYXdcbiAgdGhpcy5zdHJlYW0ud3JpdGUodGhpcy5sYXN0RHJhdyk7XG59O1xuXG4vKipcbiAqIFRlcm1pbmF0ZXMgYSBwcm9ncmVzcyBiYXIuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5Qcm9ncmVzc0Jhci5wcm90b3R5cGUudGVybWluYXRlID0gZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy5jbGVhcikge1xuICAgIGlmICh0aGlzLnN0cmVhbS5jbGVhckxpbmUpIHtcbiAgICAgIHRoaXMuc3RyZWFtLmNsZWFyTGluZSgpO1xuICAgICAgdGhpcy5zdHJlYW0uY3Vyc29yVG8oMCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHRoaXMuc3RyZWFtLndyaXRlKCdcXG4nKTtcbiAgfVxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNCdWZmZXIoYXJnKSB7XG4gIHJldHVybiBhcmcgJiYgdHlwZW9mIGFyZyA9PT0gJ29iamVjdCdcbiAgICAmJiB0eXBlb2YgYXJnLmNvcHkgPT09ICdmdW5jdGlvbidcbiAgICAmJiB0eXBlb2YgYXJnLmZpbGwgPT09ICdmdW5jdGlvbidcbiAgICAmJiB0eXBlb2YgYXJnLnJlYWRVSW50OCA9PT0gJ2Z1bmN0aW9uJztcbn0iLCIvLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxudmFyIGZvcm1hdFJlZ0V4cCA9IC8lW3NkaiVdL2c7XG5leHBvcnRzLmZvcm1hdCA9IGZ1bmN0aW9uKGYpIHtcbiAgaWYgKCFpc1N0cmluZyhmKSkge1xuICAgIHZhciBvYmplY3RzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIG9iamVjdHMucHVzaChpbnNwZWN0KGFyZ3VtZW50c1tpXSkpO1xuICAgIH1cbiAgICByZXR1cm4gb2JqZWN0cy5qb2luKCcgJyk7XG4gIH1cblxuICB2YXIgaSA9IDE7XG4gIHZhciBhcmdzID0gYXJndW1lbnRzO1xuICB2YXIgbGVuID0gYXJncy5sZW5ndGg7XG4gIHZhciBzdHIgPSBTdHJpbmcoZikucmVwbGFjZShmb3JtYXRSZWdFeHAsIGZ1bmN0aW9uKHgpIHtcbiAgICBpZiAoeCA9PT0gJyUlJykgcmV0dXJuICclJztcbiAgICBpZiAoaSA+PSBsZW4pIHJldHVybiB4O1xuICAgIHN3aXRjaCAoeCkge1xuICAgICAgY2FzZSAnJXMnOiByZXR1cm4gU3RyaW5nKGFyZ3NbaSsrXSk7XG4gICAgICBjYXNlICclZCc6IHJldHVybiBOdW1iZXIoYXJnc1tpKytdKTtcbiAgICAgIGNhc2UgJyVqJzpcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoYXJnc1tpKytdKTtcbiAgICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICAgIHJldHVybiAnW0NpcmN1bGFyXSc7XG4gICAgICAgIH1cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB4O1xuICAgIH1cbiAgfSk7XG4gIGZvciAodmFyIHggPSBhcmdzW2ldOyBpIDwgbGVuOyB4ID0gYXJnc1srK2ldKSB7XG4gICAgaWYgKGlzTnVsbCh4KSB8fCAhaXNPYmplY3QoeCkpIHtcbiAgICAgIHN0ciArPSAnICcgKyB4O1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHIgKz0gJyAnICsgaW5zcGVjdCh4KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHN0cjtcbn07XG5cblxuLy8gTWFyayB0aGF0IGEgbWV0aG9kIHNob3VsZCBub3QgYmUgdXNlZC5cbi8vIFJldHVybnMgYSBtb2RpZmllZCBmdW5jdGlvbiB3aGljaCB3YXJucyBvbmNlIGJ5IGRlZmF1bHQuXG4vLyBJZiAtLW5vLWRlcHJlY2F0aW9uIGlzIHNldCwgdGhlbiBpdCBpcyBhIG5vLW9wLlxuZXhwb3J0cy5kZXByZWNhdGUgPSBmdW5jdGlvbihmbiwgbXNnKSB7XG4gIC8vIEFsbG93IGZvciBkZXByZWNhdGluZyB0aGluZ3MgaW4gdGhlIHByb2Nlc3Mgb2Ygc3RhcnRpbmcgdXAuXG4gIGlmIChpc1VuZGVmaW5lZChnbG9iYWwucHJvY2VzcykpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gZXhwb3J0cy5kZXByZWNhdGUoZm4sIG1zZykuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9O1xuICB9XG5cbiAgaWYgKHByb2Nlc3Mubm9EZXByZWNhdGlvbiA9PT0gdHJ1ZSkge1xuICAgIHJldHVybiBmbjtcbiAgfVxuXG4gIHZhciB3YXJuZWQgPSBmYWxzZTtcbiAgZnVuY3Rpb24gZGVwcmVjYXRlZCgpIHtcbiAgICBpZiAoIXdhcm5lZCkge1xuICAgICAgaWYgKHByb2Nlc3MudGhyb3dEZXByZWNhdGlvbikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IobXNnKTtcbiAgICAgIH0gZWxzZSBpZiAocHJvY2Vzcy50cmFjZURlcHJlY2F0aW9uKSB7XG4gICAgICAgIGNvbnNvbGUudHJhY2UobXNnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IobXNnKTtcbiAgICAgIH1cbiAgICAgIHdhcm5lZCA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgcmV0dXJuIGRlcHJlY2F0ZWQ7XG59O1xuXG5cbnZhciBkZWJ1Z3MgPSB7fTtcbnZhciBkZWJ1Z0Vudmlyb247XG5leHBvcnRzLmRlYnVnbG9nID0gZnVuY3Rpb24oc2V0KSB7XG4gIGlmIChpc1VuZGVmaW5lZChkZWJ1Z0Vudmlyb24pKVxuICAgIGRlYnVnRW52aXJvbiA9IHByb2Nlc3MuZW52Lk5PREVfREVCVUcgfHwgJyc7XG4gIHNldCA9IHNldC50b1VwcGVyQ2FzZSgpO1xuICBpZiAoIWRlYnVnc1tzZXRdKSB7XG4gICAgaWYgKG5ldyBSZWdFeHAoJ1xcXFxiJyArIHNldCArICdcXFxcYicsICdpJykudGVzdChkZWJ1Z0Vudmlyb24pKSB7XG4gICAgICB2YXIgcGlkID0gcHJvY2Vzcy5waWQ7XG4gICAgICBkZWJ1Z3Nbc2V0XSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgbXNnID0gZXhwb3J0cy5mb3JtYXQuYXBwbHkoZXhwb3J0cywgYXJndW1lbnRzKTtcbiAgICAgICAgY29uc29sZS5lcnJvcignJXMgJWQ6ICVzJywgc2V0LCBwaWQsIG1zZyk7XG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWJ1Z3Nbc2V0XSA9IGZ1bmN0aW9uKCkge307XG4gICAgfVxuICB9XG4gIHJldHVybiBkZWJ1Z3Nbc2V0XTtcbn07XG5cblxuLyoqXG4gKiBFY2hvcyB0aGUgdmFsdWUgb2YgYSB2YWx1ZS4gVHJ5cyB0byBwcmludCB0aGUgdmFsdWUgb3V0XG4gKiBpbiB0aGUgYmVzdCB3YXkgcG9zc2libGUgZ2l2ZW4gdGhlIGRpZmZlcmVudCB0eXBlcy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqIFRoZSBvYmplY3QgdG8gcHJpbnQgb3V0LlxuICogQHBhcmFtIHtPYmplY3R9IG9wdHMgT3B0aW9uYWwgb3B0aW9ucyBvYmplY3QgdGhhdCBhbHRlcnMgdGhlIG91dHB1dC5cbiAqL1xuLyogbGVnYWN5OiBvYmosIHNob3dIaWRkZW4sIGRlcHRoLCBjb2xvcnMqL1xuZnVuY3Rpb24gaW5zcGVjdChvYmosIG9wdHMpIHtcbiAgLy8gZGVmYXVsdCBvcHRpb25zXG4gIHZhciBjdHggPSB7XG4gICAgc2VlbjogW10sXG4gICAgc3R5bGl6ZTogc3R5bGl6ZU5vQ29sb3JcbiAgfTtcbiAgLy8gbGVnYWN5Li4uXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID49IDMpIGN0eC5kZXB0aCA9IGFyZ3VtZW50c1syXTtcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPj0gNCkgY3R4LmNvbG9ycyA9IGFyZ3VtZW50c1szXTtcbiAgaWYgKGlzQm9vbGVhbihvcHRzKSkge1xuICAgIC8vIGxlZ2FjeS4uLlxuICAgIGN0eC5zaG93SGlkZGVuID0gb3B0cztcbiAgfSBlbHNlIGlmIChvcHRzKSB7XG4gICAgLy8gZ290IGFuIFwib3B0aW9uc1wiIG9iamVjdFxuICAgIGV4cG9ydHMuX2V4dGVuZChjdHgsIG9wdHMpO1xuICB9XG4gIC8vIHNldCBkZWZhdWx0IG9wdGlvbnNcbiAgaWYgKGlzVW5kZWZpbmVkKGN0eC5zaG93SGlkZGVuKSkgY3R4LnNob3dIaWRkZW4gPSBmYWxzZTtcbiAgaWYgKGlzVW5kZWZpbmVkKGN0eC5kZXB0aCkpIGN0eC5kZXB0aCA9IDI7XG4gIGlmIChpc1VuZGVmaW5lZChjdHguY29sb3JzKSkgY3R4LmNvbG9ycyA9IGZhbHNlO1xuICBpZiAoaXNVbmRlZmluZWQoY3R4LmN1c3RvbUluc3BlY3QpKSBjdHguY3VzdG9tSW5zcGVjdCA9IHRydWU7XG4gIGlmIChjdHguY29sb3JzKSBjdHguc3R5bGl6ZSA9IHN0eWxpemVXaXRoQ29sb3I7XG4gIHJldHVybiBmb3JtYXRWYWx1ZShjdHgsIG9iaiwgY3R4LmRlcHRoKTtcbn1cbmV4cG9ydHMuaW5zcGVjdCA9IGluc3BlY3Q7XG5cblxuLy8gaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9BTlNJX2VzY2FwZV9jb2RlI2dyYXBoaWNzXG5pbnNwZWN0LmNvbG9ycyA9IHtcbiAgJ2JvbGQnIDogWzEsIDIyXSxcbiAgJ2l0YWxpYycgOiBbMywgMjNdLFxuICAndW5kZXJsaW5lJyA6IFs0LCAyNF0sXG4gICdpbnZlcnNlJyA6IFs3LCAyN10sXG4gICd3aGl0ZScgOiBbMzcsIDM5XSxcbiAgJ2dyZXknIDogWzkwLCAzOV0sXG4gICdibGFjaycgOiBbMzAsIDM5XSxcbiAgJ2JsdWUnIDogWzM0LCAzOV0sXG4gICdjeWFuJyA6IFszNiwgMzldLFxuICAnZ3JlZW4nIDogWzMyLCAzOV0sXG4gICdtYWdlbnRhJyA6IFszNSwgMzldLFxuICAncmVkJyA6IFszMSwgMzldLFxuICAneWVsbG93JyA6IFszMywgMzldXG59O1xuXG4vLyBEb24ndCB1c2UgJ2JsdWUnIG5vdCB2aXNpYmxlIG9uIGNtZC5leGVcbmluc3BlY3Quc3R5bGVzID0ge1xuICAnc3BlY2lhbCc6ICdjeWFuJyxcbiAgJ251bWJlcic6ICd5ZWxsb3cnLFxuICAnYm9vbGVhbic6ICd5ZWxsb3cnLFxuICAndW5kZWZpbmVkJzogJ2dyZXknLFxuICAnbnVsbCc6ICdib2xkJyxcbiAgJ3N0cmluZyc6ICdncmVlbicsXG4gICdkYXRlJzogJ21hZ2VudGEnLFxuICAvLyBcIm5hbWVcIjogaW50ZW50aW9uYWxseSBub3Qgc3R5bGluZ1xuICAncmVnZXhwJzogJ3JlZCdcbn07XG5cblxuZnVuY3Rpb24gc3R5bGl6ZVdpdGhDb2xvcihzdHIsIHN0eWxlVHlwZSkge1xuICB2YXIgc3R5bGUgPSBpbnNwZWN0LnN0eWxlc1tzdHlsZVR5cGVdO1xuXG4gIGlmIChzdHlsZSkge1xuICAgIHJldHVybiAnXFx1MDAxYlsnICsgaW5zcGVjdC5jb2xvcnNbc3R5bGVdWzBdICsgJ20nICsgc3RyICtcbiAgICAgICAgICAgJ1xcdTAwMWJbJyArIGluc3BlY3QuY29sb3JzW3N0eWxlXVsxXSArICdtJztcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gc3RyO1xuICB9XG59XG5cblxuZnVuY3Rpb24gc3R5bGl6ZU5vQ29sb3Ioc3RyLCBzdHlsZVR5cGUpIHtcbiAgcmV0dXJuIHN0cjtcbn1cblxuXG5mdW5jdGlvbiBhcnJheVRvSGFzaChhcnJheSkge1xuICB2YXIgaGFzaCA9IHt9O1xuXG4gIGFycmF5LmZvckVhY2goZnVuY3Rpb24odmFsLCBpZHgpIHtcbiAgICBoYXNoW3ZhbF0gPSB0cnVlO1xuICB9KTtcblxuICByZXR1cm4gaGFzaDtcbn1cblxuXG5mdW5jdGlvbiBmb3JtYXRWYWx1ZShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMpIHtcbiAgLy8gUHJvdmlkZSBhIGhvb2sgZm9yIHVzZXItc3BlY2lmaWVkIGluc3BlY3QgZnVuY3Rpb25zLlxuICAvLyBDaGVjayB0aGF0IHZhbHVlIGlzIGFuIG9iamVjdCB3aXRoIGFuIGluc3BlY3QgZnVuY3Rpb24gb24gaXRcbiAgaWYgKGN0eC5jdXN0b21JbnNwZWN0ICYmXG4gICAgICB2YWx1ZSAmJlxuICAgICAgaXNGdW5jdGlvbih2YWx1ZS5pbnNwZWN0KSAmJlxuICAgICAgLy8gRmlsdGVyIG91dCB0aGUgdXRpbCBtb2R1bGUsIGl0J3MgaW5zcGVjdCBmdW5jdGlvbiBpcyBzcGVjaWFsXG4gICAgICB2YWx1ZS5pbnNwZWN0ICE9PSBleHBvcnRzLmluc3BlY3QgJiZcbiAgICAgIC8vIEFsc28gZmlsdGVyIG91dCBhbnkgcHJvdG90eXBlIG9iamVjdHMgdXNpbmcgdGhlIGNpcmN1bGFyIGNoZWNrLlxuICAgICAgISh2YWx1ZS5jb25zdHJ1Y3RvciAmJiB2YWx1ZS5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgPT09IHZhbHVlKSkge1xuICAgIHZhciByZXQgPSB2YWx1ZS5pbnNwZWN0KHJlY3Vyc2VUaW1lcywgY3R4KTtcbiAgICBpZiAoIWlzU3RyaW5nKHJldCkpIHtcbiAgICAgIHJldCA9IGZvcm1hdFZhbHVlKGN0eCwgcmV0LCByZWN1cnNlVGltZXMpO1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgLy8gUHJpbWl0aXZlIHR5cGVzIGNhbm5vdCBoYXZlIHByb3BlcnRpZXNcbiAgdmFyIHByaW1pdGl2ZSA9IGZvcm1hdFByaW1pdGl2ZShjdHgsIHZhbHVlKTtcbiAgaWYgKHByaW1pdGl2ZSkge1xuICAgIHJldHVybiBwcmltaXRpdmU7XG4gIH1cblxuICAvLyBMb29rIHVwIHRoZSBrZXlzIG9mIHRoZSBvYmplY3QuXG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXModmFsdWUpO1xuICB2YXIgdmlzaWJsZUtleXMgPSBhcnJheVRvSGFzaChrZXlzKTtcblxuICBpZiAoY3R4LnNob3dIaWRkZW4pIHtcbiAgICBrZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModmFsdWUpO1xuICB9XG5cbiAgLy8gSUUgZG9lc24ndCBtYWtlIGVycm9yIGZpZWxkcyBub24tZW51bWVyYWJsZVxuICAvLyBodHRwOi8vbXNkbi5taWNyb3NvZnQuY29tL2VuLXVzL2xpYnJhcnkvaWUvZHd3NTJzYnQodj12cy45NCkuYXNweFxuICBpZiAoaXNFcnJvcih2YWx1ZSlcbiAgICAgICYmIChrZXlzLmluZGV4T2YoJ21lc3NhZ2UnKSA+PSAwIHx8IGtleXMuaW5kZXhPZignZGVzY3JpcHRpb24nKSA+PSAwKSkge1xuICAgIHJldHVybiBmb3JtYXRFcnJvcih2YWx1ZSk7XG4gIH1cblxuICAvLyBTb21lIHR5cGUgb2Ygb2JqZWN0IHdpdGhvdXQgcHJvcGVydGllcyBjYW4gYmUgc2hvcnRjdXR0ZWQuXG4gIGlmIChrZXlzLmxlbmd0aCA9PT0gMCkge1xuICAgIGlmIChpc0Z1bmN0aW9uKHZhbHVlKSkge1xuICAgICAgdmFyIG5hbWUgPSB2YWx1ZS5uYW1lID8gJzogJyArIHZhbHVlLm5hbWUgOiAnJztcbiAgICAgIHJldHVybiBjdHguc3R5bGl6ZSgnW0Z1bmN0aW9uJyArIG5hbWUgKyAnXScsICdzcGVjaWFsJyk7XG4gICAgfVxuICAgIGlmIChpc1JlZ0V4cCh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBjdHguc3R5bGl6ZShSZWdFeHAucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpLCAncmVnZXhwJyk7XG4gICAgfVxuICAgIGlmIChpc0RhdGUodmFsdWUpKSB7XG4gICAgICByZXR1cm4gY3R4LnN0eWxpemUoRGF0ZS5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSksICdkYXRlJyk7XG4gICAgfVxuICAgIGlmIChpc0Vycm9yKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGZvcm1hdEVycm9yKHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICB2YXIgYmFzZSA9ICcnLCBhcnJheSA9IGZhbHNlLCBicmFjZXMgPSBbJ3snLCAnfSddO1xuXG4gIC8vIE1ha2UgQXJyYXkgc2F5IHRoYXQgdGhleSBhcmUgQXJyYXlcbiAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgYXJyYXkgPSB0cnVlO1xuICAgIGJyYWNlcyA9IFsnWycsICddJ107XG4gIH1cblxuICAvLyBNYWtlIGZ1bmN0aW9ucyBzYXkgdGhhdCB0aGV5IGFyZSBmdW5jdGlvbnNcbiAgaWYgKGlzRnVuY3Rpb24odmFsdWUpKSB7XG4gICAgdmFyIG4gPSB2YWx1ZS5uYW1lID8gJzogJyArIHZhbHVlLm5hbWUgOiAnJztcbiAgICBiYXNlID0gJyBbRnVuY3Rpb24nICsgbiArICddJztcbiAgfVxuXG4gIC8vIE1ha2UgUmVnRXhwcyBzYXkgdGhhdCB0aGV5IGFyZSBSZWdFeHBzXG4gIGlmIChpc1JlZ0V4cCh2YWx1ZSkpIHtcbiAgICBiYXNlID0gJyAnICsgUmVnRXhwLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKTtcbiAgfVxuXG4gIC8vIE1ha2UgZGF0ZXMgd2l0aCBwcm9wZXJ0aWVzIGZpcnN0IHNheSB0aGUgZGF0ZVxuICBpZiAoaXNEYXRlKHZhbHVlKSkge1xuICAgIGJhc2UgPSAnICcgKyBEYXRlLnByb3RvdHlwZS50b1VUQ1N0cmluZy5jYWxsKHZhbHVlKTtcbiAgfVxuXG4gIC8vIE1ha2UgZXJyb3Igd2l0aCBtZXNzYWdlIGZpcnN0IHNheSB0aGUgZXJyb3JcbiAgaWYgKGlzRXJyb3IodmFsdWUpKSB7XG4gICAgYmFzZSA9ICcgJyArIGZvcm1hdEVycm9yKHZhbHVlKTtcbiAgfVxuXG4gIGlmIChrZXlzLmxlbmd0aCA9PT0gMCAmJiAoIWFycmF5IHx8IHZhbHVlLmxlbmd0aCA9PSAwKSkge1xuICAgIHJldHVybiBicmFjZXNbMF0gKyBiYXNlICsgYnJhY2VzWzFdO1xuICB9XG5cbiAgaWYgKHJlY3Vyc2VUaW1lcyA8IDApIHtcbiAgICBpZiAoaXNSZWdFeHAodmFsdWUpKSB7XG4gICAgICByZXR1cm4gY3R4LnN0eWxpemUoUmVnRXhwLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSwgJ3JlZ2V4cCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gY3R4LnN0eWxpemUoJ1tPYmplY3RdJywgJ3NwZWNpYWwnKTtcbiAgICB9XG4gIH1cblxuICBjdHguc2Vlbi5wdXNoKHZhbHVlKTtcblxuICB2YXIgb3V0cHV0O1xuICBpZiAoYXJyYXkpIHtcbiAgICBvdXRwdXQgPSBmb3JtYXRBcnJheShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMsIHZpc2libGVLZXlzLCBrZXlzKTtcbiAgfSBlbHNlIHtcbiAgICBvdXRwdXQgPSBrZXlzLm1hcChmdW5jdGlvbihrZXkpIHtcbiAgICAgIHJldHVybiBmb3JtYXRQcm9wZXJ0eShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMsIHZpc2libGVLZXlzLCBrZXksIGFycmF5KTtcbiAgICB9KTtcbiAgfVxuXG4gIGN0eC5zZWVuLnBvcCgpO1xuXG4gIHJldHVybiByZWR1Y2VUb1NpbmdsZVN0cmluZyhvdXRwdXQsIGJhc2UsIGJyYWNlcyk7XG59XG5cblxuZnVuY3Rpb24gZm9ybWF0UHJpbWl0aXZlKGN0eCwgdmFsdWUpIHtcbiAgaWYgKGlzVW5kZWZpbmVkKHZhbHVlKSlcbiAgICByZXR1cm4gY3R4LnN0eWxpemUoJ3VuZGVmaW5lZCcsICd1bmRlZmluZWQnKTtcbiAgaWYgKGlzU3RyaW5nKHZhbHVlKSkge1xuICAgIHZhciBzaW1wbGUgPSAnXFwnJyArIEpTT04uc3RyaW5naWZ5KHZhbHVlKS5yZXBsYWNlKC9eXCJ8XCIkL2csICcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoLycvZywgXCJcXFxcJ1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcXFxcIi9nLCAnXCInKSArICdcXCcnO1xuICAgIHJldHVybiBjdHguc3R5bGl6ZShzaW1wbGUsICdzdHJpbmcnKTtcbiAgfVxuICBpZiAoaXNOdW1iZXIodmFsdWUpKVxuICAgIHJldHVybiBjdHguc3R5bGl6ZSgnJyArIHZhbHVlLCAnbnVtYmVyJyk7XG4gIGlmIChpc0Jvb2xlYW4odmFsdWUpKVxuICAgIHJldHVybiBjdHguc3R5bGl6ZSgnJyArIHZhbHVlLCAnYm9vbGVhbicpO1xuICAvLyBGb3Igc29tZSByZWFzb24gdHlwZW9mIG51bGwgaXMgXCJvYmplY3RcIiwgc28gc3BlY2lhbCBjYXNlIGhlcmUuXG4gIGlmIChpc051bGwodmFsdWUpKVxuICAgIHJldHVybiBjdHguc3R5bGl6ZSgnbnVsbCcsICdudWxsJyk7XG59XG5cblxuZnVuY3Rpb24gZm9ybWF0RXJyb3IodmFsdWUpIHtcbiAgcmV0dXJuICdbJyArIEVycm9yLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSArICddJztcbn1cblxuXG5mdW5jdGlvbiBmb3JtYXRBcnJheShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMsIHZpc2libGVLZXlzLCBrZXlzKSB7XG4gIHZhciBvdXRwdXQgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDAsIGwgPSB2YWx1ZS5sZW5ndGg7IGkgPCBsOyArK2kpIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkodmFsdWUsIFN0cmluZyhpKSkpIHtcbiAgICAgIG91dHB1dC5wdXNoKGZvcm1hdFByb3BlcnR5KGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcywgdmlzaWJsZUtleXMsXG4gICAgICAgICAgU3RyaW5nKGkpLCB0cnVlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG91dHB1dC5wdXNoKCcnKTtcbiAgICB9XG4gIH1cbiAga2V5cy5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICAgIGlmICgha2V5Lm1hdGNoKC9eXFxkKyQvKSkge1xuICAgICAgb3V0cHV0LnB1c2goZm9ybWF0UHJvcGVydHkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cyxcbiAgICAgICAgICBrZXksIHRydWUpKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gb3V0cHV0O1xufVxuXG5cbmZ1bmN0aW9uIGZvcm1hdFByb3BlcnR5KGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcywgdmlzaWJsZUtleXMsIGtleSwgYXJyYXkpIHtcbiAgdmFyIG5hbWUsIHN0ciwgZGVzYztcbiAgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodmFsdWUsIGtleSkgfHwgeyB2YWx1ZTogdmFsdWVba2V5XSB9O1xuICBpZiAoZGVzYy5nZXQpIHtcbiAgICBpZiAoZGVzYy5zZXQpIHtcbiAgICAgIHN0ciA9IGN0eC5zdHlsaXplKCdbR2V0dGVyL1NldHRlcl0nLCAnc3BlY2lhbCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHIgPSBjdHguc3R5bGl6ZSgnW0dldHRlcl0nLCAnc3BlY2lhbCcpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpZiAoZGVzYy5zZXQpIHtcbiAgICAgIHN0ciA9IGN0eC5zdHlsaXplKCdbU2V0dGVyXScsICdzcGVjaWFsJyk7XG4gICAgfVxuICB9XG4gIGlmICghaGFzT3duUHJvcGVydHkodmlzaWJsZUtleXMsIGtleSkpIHtcbiAgICBuYW1lID0gJ1snICsga2V5ICsgJ10nO1xuICB9XG4gIGlmICghc3RyKSB7XG4gICAgaWYgKGN0eC5zZWVuLmluZGV4T2YoZGVzYy52YWx1ZSkgPCAwKSB7XG4gICAgICBpZiAoaXNOdWxsKHJlY3Vyc2VUaW1lcykpIHtcbiAgICAgICAgc3RyID0gZm9ybWF0VmFsdWUoY3R4LCBkZXNjLnZhbHVlLCBudWxsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0ciA9IGZvcm1hdFZhbHVlKGN0eCwgZGVzYy52YWx1ZSwgcmVjdXJzZVRpbWVzIC0gMSk7XG4gICAgICB9XG4gICAgICBpZiAoc3RyLmluZGV4T2YoJ1xcbicpID4gLTEpIHtcbiAgICAgICAgaWYgKGFycmF5KSB7XG4gICAgICAgICAgc3RyID0gc3RyLnNwbGl0KCdcXG4nKS5tYXAoZnVuY3Rpb24obGluZSkge1xuICAgICAgICAgICAgcmV0dXJuICcgICcgKyBsaW5lO1xuICAgICAgICAgIH0pLmpvaW4oJ1xcbicpLnN1YnN0cigyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzdHIgPSAnXFxuJyArIHN0ci5zcGxpdCgnXFxuJykubWFwKGZ1bmN0aW9uKGxpbmUpIHtcbiAgICAgICAgICAgIHJldHVybiAnICAgJyArIGxpbmU7XG4gICAgICAgICAgfSkuam9pbignXFxuJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc3RyID0gY3R4LnN0eWxpemUoJ1tDaXJjdWxhcl0nLCAnc3BlY2lhbCcpO1xuICAgIH1cbiAgfVxuICBpZiAoaXNVbmRlZmluZWQobmFtZSkpIHtcbiAgICBpZiAoYXJyYXkgJiYga2V5Lm1hdGNoKC9eXFxkKyQvKSkge1xuICAgICAgcmV0dXJuIHN0cjtcbiAgICB9XG4gICAgbmFtZSA9IEpTT04uc3RyaW5naWZ5KCcnICsga2V5KTtcbiAgICBpZiAobmFtZS5tYXRjaCgvXlwiKFthLXpBLVpfXVthLXpBLVpfMC05XSopXCIkLykpIHtcbiAgICAgIG5hbWUgPSBuYW1lLnN1YnN0cigxLCBuYW1lLmxlbmd0aCAtIDIpO1xuICAgICAgbmFtZSA9IGN0eC5zdHlsaXplKG5hbWUsICduYW1lJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5hbWUgPSBuYW1lLnJlcGxhY2UoLycvZywgXCJcXFxcJ1wiKVxuICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFxcXFwiL2csICdcIicpXG4gICAgICAgICAgICAgICAgIC5yZXBsYWNlKC8oXlwifFwiJCkvZywgXCInXCIpO1xuICAgICAgbmFtZSA9IGN0eC5zdHlsaXplKG5hbWUsICdzdHJpbmcnKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmFtZSArICc6ICcgKyBzdHI7XG59XG5cblxuZnVuY3Rpb24gcmVkdWNlVG9TaW5nbGVTdHJpbmcob3V0cHV0LCBiYXNlLCBicmFjZXMpIHtcbiAgdmFyIG51bUxpbmVzRXN0ID0gMDtcbiAgdmFyIGxlbmd0aCA9IG91dHB1dC5yZWR1Y2UoZnVuY3Rpb24ocHJldiwgY3VyKSB7XG4gICAgbnVtTGluZXNFc3QrKztcbiAgICBpZiAoY3VyLmluZGV4T2YoJ1xcbicpID49IDApIG51bUxpbmVzRXN0Kys7XG4gICAgcmV0dXJuIHByZXYgKyBjdXIucmVwbGFjZSgvXFx1MDAxYlxcW1xcZFxcZD9tL2csICcnKS5sZW5ndGggKyAxO1xuICB9LCAwKTtcblxuICBpZiAobGVuZ3RoID4gNjApIHtcbiAgICByZXR1cm4gYnJhY2VzWzBdICtcbiAgICAgICAgICAgKGJhc2UgPT09ICcnID8gJycgOiBiYXNlICsgJ1xcbiAnKSArXG4gICAgICAgICAgICcgJyArXG4gICAgICAgICAgIG91dHB1dC5qb2luKCcsXFxuICAnKSArXG4gICAgICAgICAgICcgJyArXG4gICAgICAgICAgIGJyYWNlc1sxXTtcbiAgfVxuXG4gIHJldHVybiBicmFjZXNbMF0gKyBiYXNlICsgJyAnICsgb3V0cHV0LmpvaW4oJywgJykgKyAnICcgKyBicmFjZXNbMV07XG59XG5cblxuLy8gTk9URTogVGhlc2UgdHlwZSBjaGVja2luZyBmdW5jdGlvbnMgaW50ZW50aW9uYWxseSBkb24ndCB1c2UgYGluc3RhbmNlb2ZgXG4vLyBiZWNhdXNlIGl0IGlzIGZyYWdpbGUgYW5kIGNhbiBiZSBlYXNpbHkgZmFrZWQgd2l0aCBgT2JqZWN0LmNyZWF0ZSgpYC5cbmZ1bmN0aW9uIGlzQXJyYXkoYXIpIHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkoYXIpO1xufVxuZXhwb3J0cy5pc0FycmF5ID0gaXNBcnJheTtcblxuZnVuY3Rpb24gaXNCb29sZWFuKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ2Jvb2xlYW4nO1xufVxuZXhwb3J0cy5pc0Jvb2xlYW4gPSBpc0Jvb2xlYW47XG5cbmZ1bmN0aW9uIGlzTnVsbChhcmcpIHtcbiAgcmV0dXJuIGFyZyA9PT0gbnVsbDtcbn1cbmV4cG9ydHMuaXNOdWxsID0gaXNOdWxsO1xuXG5mdW5jdGlvbiBpc051bGxPclVuZGVmaW5lZChhcmcpIHtcbiAgcmV0dXJuIGFyZyA9PSBudWxsO1xufVxuZXhwb3J0cy5pc051bGxPclVuZGVmaW5lZCA9IGlzTnVsbE9yVW5kZWZpbmVkO1xuXG5mdW5jdGlvbiBpc051bWJlcihhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdudW1iZXInO1xufVxuZXhwb3J0cy5pc051bWJlciA9IGlzTnVtYmVyO1xuXG5mdW5jdGlvbiBpc1N0cmluZyhhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdzdHJpbmcnO1xufVxuZXhwb3J0cy5pc1N0cmluZyA9IGlzU3RyaW5nO1xuXG5mdW5jdGlvbiBpc1N5bWJvbChhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdzeW1ib2wnO1xufVxuZXhwb3J0cy5pc1N5bWJvbCA9IGlzU3ltYm9sO1xuXG5mdW5jdGlvbiBpc1VuZGVmaW5lZChhcmcpIHtcbiAgcmV0dXJuIGFyZyA9PT0gdm9pZCAwO1xufVxuZXhwb3J0cy5pc1VuZGVmaW5lZCA9IGlzVW5kZWZpbmVkO1xuXG5mdW5jdGlvbiBpc1JlZ0V4cChyZSkge1xuICByZXR1cm4gaXNPYmplY3QocmUpICYmIG9iamVjdFRvU3RyaW5nKHJlKSA9PT0gJ1tvYmplY3QgUmVnRXhwXSc7XG59XG5leHBvcnRzLmlzUmVnRXhwID0gaXNSZWdFeHA7XG5cbmZ1bmN0aW9uIGlzT2JqZWN0KGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ29iamVjdCcgJiYgYXJnICE9PSBudWxsO1xufVxuZXhwb3J0cy5pc09iamVjdCA9IGlzT2JqZWN0O1xuXG5mdW5jdGlvbiBpc0RhdGUoZCkge1xuICByZXR1cm4gaXNPYmplY3QoZCkgJiYgb2JqZWN0VG9TdHJpbmcoZCkgPT09ICdbb2JqZWN0IERhdGVdJztcbn1cbmV4cG9ydHMuaXNEYXRlID0gaXNEYXRlO1xuXG5mdW5jdGlvbiBpc0Vycm9yKGUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KGUpICYmXG4gICAgICAob2JqZWN0VG9TdHJpbmcoZSkgPT09ICdbb2JqZWN0IEVycm9yXScgfHwgZSBpbnN0YW5jZW9mIEVycm9yKTtcbn1cbmV4cG9ydHMuaXNFcnJvciA9IGlzRXJyb3I7XG5cbmZ1bmN0aW9uIGlzRnVuY3Rpb24oYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnZnVuY3Rpb24nO1xufVxuZXhwb3J0cy5pc0Z1bmN0aW9uID0gaXNGdW5jdGlvbjtcblxuZnVuY3Rpb24gaXNQcmltaXRpdmUoYXJnKSB7XG4gIHJldHVybiBhcmcgPT09IG51bGwgfHxcbiAgICAgICAgIHR5cGVvZiBhcmcgPT09ICdib29sZWFuJyB8fFxuICAgICAgICAgdHlwZW9mIGFyZyA9PT0gJ251bWJlcicgfHxcbiAgICAgICAgIHR5cGVvZiBhcmcgPT09ICdzdHJpbmcnIHx8XG4gICAgICAgICB0eXBlb2YgYXJnID09PSAnc3ltYm9sJyB8fCAgLy8gRVM2IHN5bWJvbFxuICAgICAgICAgdHlwZW9mIGFyZyA9PT0gJ3VuZGVmaW5lZCc7XG59XG5leHBvcnRzLmlzUHJpbWl0aXZlID0gaXNQcmltaXRpdmU7XG5cbmV4cG9ydHMuaXNCdWZmZXIgPSByZXF1aXJlKCcuL3N1cHBvcnQvaXNCdWZmZXInKTtcblxuZnVuY3Rpb24gb2JqZWN0VG9TdHJpbmcobykge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pO1xufVxuXG5cbmZ1bmN0aW9uIHBhZChuKSB7XG4gIHJldHVybiBuIDwgMTAgPyAnMCcgKyBuLnRvU3RyaW5nKDEwKSA6IG4udG9TdHJpbmcoMTApO1xufVxuXG5cbnZhciBtb250aHMgPSBbJ0phbicsICdGZWInLCAnTWFyJywgJ0FwcicsICdNYXknLCAnSnVuJywgJ0p1bCcsICdBdWcnLCAnU2VwJyxcbiAgICAgICAgICAgICAgJ09jdCcsICdOb3YnLCAnRGVjJ107XG5cbi8vIDI2IEZlYiAxNjoxOTozNFxuZnVuY3Rpb24gdGltZXN0YW1wKCkge1xuICB2YXIgZCA9IG5ldyBEYXRlKCk7XG4gIHZhciB0aW1lID0gW3BhZChkLmdldEhvdXJzKCkpLFxuICAgICAgICAgICAgICBwYWQoZC5nZXRNaW51dGVzKCkpLFxuICAgICAgICAgICAgICBwYWQoZC5nZXRTZWNvbmRzKCkpXS5qb2luKCc6Jyk7XG4gIHJldHVybiBbZC5nZXREYXRlKCksIG1vbnRoc1tkLmdldE1vbnRoKCldLCB0aW1lXS5qb2luKCcgJyk7XG59XG5cblxuLy8gbG9nIGlzIGp1c3QgYSB0aGluIHdyYXBwZXIgdG8gY29uc29sZS5sb2cgdGhhdCBwcmVwZW5kcyBhIHRpbWVzdGFtcFxuZXhwb3J0cy5sb2cgPSBmdW5jdGlvbigpIHtcbiAgY29uc29sZS5sb2coJyVzIC0gJXMnLCB0aW1lc3RhbXAoKSwgZXhwb3J0cy5mb3JtYXQuYXBwbHkoZXhwb3J0cywgYXJndW1lbnRzKSk7XG59O1xuXG5cbi8qKlxuICogSW5oZXJpdCB0aGUgcHJvdG90eXBlIG1ldGhvZHMgZnJvbSBvbmUgY29uc3RydWN0b3IgaW50byBhbm90aGVyLlxuICpcbiAqIFRoZSBGdW5jdGlvbi5wcm90b3R5cGUuaW5oZXJpdHMgZnJvbSBsYW5nLmpzIHJld3JpdHRlbiBhcyBhIHN0YW5kYWxvbmVcbiAqIGZ1bmN0aW9uIChub3Qgb24gRnVuY3Rpb24ucHJvdG90eXBlKS4gTk9URTogSWYgdGhpcyBmaWxlIGlzIHRvIGJlIGxvYWRlZFxuICogZHVyaW5nIGJvb3RzdHJhcHBpbmcgdGhpcyBmdW5jdGlvbiBuZWVkcyB0byBiZSByZXdyaXR0ZW4gdXNpbmcgc29tZSBuYXRpdmVcbiAqIGZ1bmN0aW9ucyBhcyBwcm90b3R5cGUgc2V0dXAgdXNpbmcgbm9ybWFsIEphdmFTY3JpcHQgZG9lcyBub3Qgd29yayBhc1xuICogZXhwZWN0ZWQgZHVyaW5nIGJvb3RzdHJhcHBpbmcgKHNlZSBtaXJyb3IuanMgaW4gcjExNDkwMykuXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gY3RvciBDb25zdHJ1Y3RvciBmdW5jdGlvbiB3aGljaCBuZWVkcyB0byBpbmhlcml0IHRoZVxuICogICAgIHByb3RvdHlwZS5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IHN1cGVyQ3RvciBDb25zdHJ1Y3RvciBmdW5jdGlvbiB0byBpbmhlcml0IHByb3RvdHlwZSBmcm9tLlxuICovXG5leHBvcnRzLmluaGVyaXRzID0gcmVxdWlyZSgnaW5oZXJpdHMnKTtcblxuZXhwb3J0cy5fZXh0ZW5kID0gZnVuY3Rpb24ob3JpZ2luLCBhZGQpIHtcbiAgLy8gRG9uJ3QgZG8gYW55dGhpbmcgaWYgYWRkIGlzbid0IGFuIG9iamVjdFxuICBpZiAoIWFkZCB8fCAhaXNPYmplY3QoYWRkKSkgcmV0dXJuIG9yaWdpbjtcblxuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGFkZCk7XG4gIHZhciBpID0ga2V5cy5sZW5ndGg7XG4gIHdoaWxlIChpLS0pIHtcbiAgICBvcmlnaW5ba2V5c1tpXV0gPSBhZGRba2V5c1tpXV07XG4gIH1cbiAgcmV0dXJuIG9yaWdpbjtcbn07XG5cbmZ1bmN0aW9uIGhhc093blByb3BlcnR5KG9iaiwgcHJvcCkge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9