/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/input.ts":
/*!**********************!*\
  !*** ./src/input.ts ***!
  \**********************/
/*! exports provided: Input */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return Input; });
var Input = /** @class */ (function () {
    function Input(main) {
        var _this = this;
        this.main = main;
        this._activeKeys = {};
        document.addEventListener('keydown', function (ev) { return _this._activeKeys[ev.key] = true; });
        document.addEventListener('keyup', function (ev) { return _this._activeKeys[ev.key] = false; });
    }
    Object.defineProperty(Input.prototype, "activeKeys", {
        get: function () {
            return this._activeKeys;
        },
        enumerable: true,
        configurable: true
    });
    return Input;
}());



/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! exports provided: Main */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Main", function() { return Main; });
/* harmony import */ var _screen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./screen */ "./src/screen.ts");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state */ "./src/state.ts");
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./input */ "./src/input.ts");


 // Notice the corrected import
var Main = /** @class */ (function () {
    function Main() {
        var _this = this;
        this.lastTime = 0;
        this.state = new _state__WEBPACK_IMPORTED_MODULE_1__["State"](this);
        this.screen = new _screen__WEBPACK_IMPORTED_MODULE_0__["Screen"](this);
        this.input = new _input__WEBPACK_IMPORTED_MODULE_2__["Input"](this);
        // Start the game loop
        requestAnimationFrame(function (ts) { return _this.loop(ts); });
    }
    Main.prototype.loop = function (timestamp) {
        var _this = this;
        if (!this.lastTime)
            this.lastTime = timestamp;
        var dt = (timestamp - this.lastTime) / 1000;
        // Prevent giant spikes when changing tabs
        if (dt > 0.1)
            dt = 0.1;
        this.lastTime = timestamp;
        this.screen.update(dt);
        this.state.update(dt);
        this.screen.renderScreen();
        requestAnimationFrame(function (ts) { return _this.loop(ts); });
    };
    return Main;
}());

var main = new Main();


/***/ }),

/***/ "./src/managers/map.manager.ts":
/*!*************************************!*\
  !*** ./src/managers/map.manager.ts ***!
  \*************************************/
/*! exports provided: MapManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapManager", function() { return MapManager; });
/* harmony import */ var _models_room_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/room.model */ "./src/models/room.model.ts");
/* harmony import */ var _models_entity_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/entity.model */ "./src/models/entity.model.ts");
/* harmony import */ var _models_portal_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/portal.model */ "./src/models/portal.model.ts");



var MapManager = /** @class */ (function () {
    function MapManager(main) {
        this.main = main;
        this.isTransitioning = false;
        this.roomCache = new Map();
        // Load an initial default room
        this.loadRoom("map_0_0");
    }
    MapManager.prototype.triggerTransition = function (portal, currentX, currentY) {
        var _this = this;
        if (this.isTransitioning)
            return;
        this.isTransitioning = true;
        if (portal.transitionType === "FADE") {
            this.main.screen.startFadeOut(function () {
                _this.loadRoom(portal.targetMapId);
                var player = _this.main.state.getPlayer();
                // -1 indicates keeping the same position axis logically
                player.x = portal.targetSpawnX !== -1 ? portal.targetSpawnX : currentX;
                player.y = portal.targetSpawnY !== -1 ? portal.targetSpawnY : currentY;
                _this.main.screen.startFadeIn(function () {
                    _this.isTransitioning = false;
                });
            });
        }
        else if (portal.transitionType === "SLIDE") {
            // Placeholder for Step 4 (Panning mechanics)
            // For now, act as an instant cut/pop
            this.loadRoom(portal.targetMapId);
            var player = this.main.state.getPlayer();
            player.x = portal.targetSpawnX !== -1 ? portal.targetSpawnX : currentX;
            player.y = portal.targetSpawnY !== -1 ? portal.targetSpawnY : currentY;
            this.isTransitioning = false;
        }
    };
    MapManager.prototype.loadRoom = function (id) {
        var _this = this;
        if (!this.roomCache.has(id)) {
            this.roomCache.set(id, this.buildRoom(id));
        }
        this.currentRoom = this.roomCache.get(id);
        // Preload adjacencies asynchronously
        setTimeout(function () {
            if (id.startsWith("map_")) {
                var parts = id.split("_");
                var mapX = parseInt(parts[1]);
                var mapY = parseInt(parts[2]);
                _this.preloadRoom("map_" + mapX + "_" + (mapY - 1));
                _this.preloadRoom("map_" + mapX + "_" + (mapY + 1));
                _this.preloadRoom("map_" + (mapX - 1) + "_" + mapY);
                _this.preloadRoom("map_" + (mapX + 1) + "_" + mapY);
            }
        }, 50);
    };
    MapManager.prototype.preloadRoom = function (id) {
        if (!this.roomCache.has(id)) {
            this.roomCache.set(id, this.buildRoom(id));
        }
    };
    MapManager.prototype.buildRoom = function (id) {
        // Mocking the generation for testing:
        var width = 2000;
        var height = 2000;
        var room = new _models_room_model__WEBPACK_IMPORTED_MODULE_0__["Room"](id, width, height);
        // Populate background
        for (var x = 0; x < width; x += 16) {
            for (var y = 0; y < height; y += 16) {
                room.background.push(new _models_entity_model__WEBPACK_IMPORTED_MODULE_1__["Entity"](1, [0, 16, 32][Math.floor(Math.random() * 3)], 160, 16, 16, x, y, 16, 16));
            }
        }
        for (var x = 0; x < width; x += 16) {
            for (var y = 0; y < height; y += 16) {
                if (Math.floor(Math.random() * 30) === 0) {
                    room.background.push(new _models_entity_model__WEBPACK_IMPORTED_MODULE_1__["Entity"](1, [48, 56][Math.floor(Math.random() * 2)], [160, 168][Math.floor(Math.random() * 2)], 8, 8, x, y, 8, 8));
                }
            }
        }
        if (id.startsWith("map_")) {
            var parts = id.split("_");
            var mapX = parseInt(parts[1]);
            var mapY = parseInt(parts[2]);
            // Add edge triggers for SLIDE transitions:
            // Top edge (North)
            room.portals.push(new _models_portal_model__WEBPACK_IMPORTED_MODULE_2__["Portal"](0, 0, 0, 0, 0, 0, 0, width, 10, "map_" + mapX + "_" + (mapY - 1), -1, height - 35, "SLIDE"));
            // Bottom edge (South)
            room.portals.push(new _models_portal_model__WEBPACK_IMPORTED_MODULE_2__["Portal"](0, 0, 0, 0, 0, 0, height - 10, width, 10, "map_" + mapX + "_" + (mapY + 1), -1, 35, "SLIDE"));
            // Left edge (West)
            room.portals.push(new _models_portal_model__WEBPACK_IMPORTED_MODULE_2__["Portal"](0, 0, 0, 0, 0, 0, 0, 10, height, "map_" + (mapX - 1) + "_" + mapY, width - 35, -1, "SLIDE"));
            // Right edge (East)
            room.portals.push(new _models_portal_model__WEBPACK_IMPORTED_MODULE_2__["Portal"](0, 0, 0, 0, 0, width - 10, 0, 10, height, "map_" + (mapX + 1) + "_" + mapY, 35, -1, "SLIDE"));
            // A visible portal on the map to test interiors
            if (mapX === 0 && mapY === 0) {
                // Ao entrar em interior_0_0, ele nascerá em X=150, Y=120 (meio da sala interior)
                room.portals.push(new _models_portal_model__WEBPACK_IMPORTED_MODULE_2__["Portal"](1, 16, 176, 16, 16, 200, 200, 16, 16, "interior_0_0", 150, 120, "FADE"));
            }
        }
        else if (id === "interior_0_0") {
            room.width = 320;
            room.height = 240;
            // O portal de volta para fora (map_0_0) ficará na parte sul desta sala (y=220)
            room.portals.push(new _models_portal_model__WEBPACK_IMPORTED_MODULE_2__["Portal"](1, 48, 176, 16, 16, 150, 220, 16, 16, "map_0_0", 200, 220, "FADE"));
        }
        return room;
    };
    return MapManager;
}());



/***/ }),

/***/ "./src/models/entity.model.ts":
/*!************************************!*\
  !*** ./src/models/entity.model.ts ***!
  \************************************/
/*! exports provided: Entity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Entity", function() { return Entity; });
var Entity = /** @class */ (function () {
    function Entity(sprite, sx, sy, sw, sh, dx, dy, dw, dh) {
        this.sprite = sprite;
        this.sx = sx;
        this.sy = sy;
        this.sw = sw;
        this.sh = sh;
        this.dx = dx;
        this.dy = dy;
        this.dw = dw;
        this.dh = dh;
    }
    return Entity;
}());



/***/ }),

/***/ "./src/models/player.model.ts":
/*!************************************!*\
  !*** ./src/models/player.model.ts ***!
  \************************************/
/*! exports provided: Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return Player; });
var Player = /** @class */ (function () {
    function Player(x, y, w, h, sx, sxIndex, sy, sRenderDelay) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.sx = sx;
        this.sxIndex = sxIndex;
        this.sy = sy;
        this.sRenderDelay = sRenderDelay;
    }
    return Player;
}());



/***/ }),

/***/ "./src/models/portal.model.ts":
/*!************************************!*\
  !*** ./src/models/portal.model.ts ***!
  \************************************/
/*! exports provided: Portal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Portal", function() { return Portal; });
/* harmony import */ var _entity_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entity.model */ "./src/models/entity.model.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Portal = /** @class */ (function (_super) {
    __extends(Portal, _super);
    function Portal(spriteId, sx, sy, sw, sh, dx, dy, dw, dh, targetMapId, targetSpawnX, targetSpawnY, transitionType) {
        if (transitionType === void 0) { transitionType = "FADE"; }
        var _this = _super.call(this, spriteId, sx, sy, sw, sh, dx, dy, dw, dh) || this;
        _this.targetMapId = targetMapId;
        _this.targetSpawnX = targetSpawnX;
        _this.targetSpawnY = targetSpawnY;
        _this.transitionType = transitionType;
        return _this;
    }
    return Portal;
}(_entity_model__WEBPACK_IMPORTED_MODULE_0__["Entity"]));



/***/ }),

/***/ "./src/models/room.model.ts":
/*!**********************************!*\
  !*** ./src/models/room.model.ts ***!
  \**********************************/
/*! exports provided: Room */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Room", function() { return Room; });
var Room = /** @class */ (function () {
    function Room(id, width, height, blocks, background, portals) {
        if (blocks === void 0) { blocks = []; }
        if (background === void 0) { background = []; }
        if (portals === void 0) { portals = []; }
        this.id = id;
        this.width = width;
        this.height = height;
        this.blocks = blocks;
        this.background = background;
        this.portals = portals;
    }
    return Room;
}());



/***/ }),

/***/ "./src/screen.ts":
/*!***********************!*\
  !*** ./src/screen.ts ***!
  \***********************/
/*! exports provided: Screen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Screen", function() { return Screen; });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
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
var Screen = /** @class */ (function () {
    function Screen(main) {
        var _this = this;
        this.main = main;
        this.fadeAlpha = 0;
        this.isFading = false;
        this.fadeType = 'IN';
        this.fadeCallback = null;
        this.slideProgress = 0;
        this.slideDirection = null;
        this.isSliding = false;
        this.slideCallback = null;
        this._screen = document.getElementById('screen');
        this._ctx = this._screen.getContext('2d');
        this._sprites = new Array();
        this.snapshotCanvas = document.createElement('canvas');
        this.snapshotCtx = this.snapshotCanvas.getContext('2d');
        window.addEventListener('resize', function () { return _this.resize(); });
        this.resize();
        this.addSpriteCollection([
            'assets/images/LinkWalk.png',
            'assets/images/Zelda1Minish01.png'
        ]);
    }
    Screen.prototype.addSpriteCollection = function (src) {
        return __awaiter(this, void 0, void 0, function () {
            var _i, src_1, x;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _i = 0, src_1 = src;
                        _a.label = 1;
                    case 1:
                        if (!(_i < src_1.length)) return [3 /*break*/, 4];
                        x = src_1[_i];
                        return [4 /*yield*/, this.addSprite(x)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4:
                        this.renderScreen();
                        return [2 /*return*/];
                }
            });
        });
    };
    Screen.prototype.addSprite = function (src) {
        var _this = this;
        return new Promise(function (resolve) {
            _this._sprites.push(new Image());
            _this._sprites[_this._sprites.length - 1].src = src;
            _this._sprites[_this._sprites.length - 1].onload = function () {
                resolve();
            };
        });
    };
    Screen.prototype.resize = function () {
        this._screen.width = window.innerWidth;
        this._screen.height = window.innerHeight;
        // Keep pixelated aesthetic when rescaled
        this._ctx.imageSmoothingEnabled = false;
    };
    Screen.prototype.getScreenDimensions = function () {
        return {
            width: this._screen.width,
            height: this._screen.height
        };
    };
    Screen.prototype.startFadeOut = function (callback) {
        this.isFading = true;
        this.fadeType = 'OUT';
        this.fadeAlpha = 0;
        this.fadeCallback = callback;
    };
    Screen.prototype.startFadeIn = function (callback) {
        this.isFading = true;
        this.fadeType = 'IN';
        this.fadeAlpha = 1;
        this.fadeCallback = callback;
    };
    Screen.prototype.captureSnapshot = function () {
        this.snapshotCanvas.width = this._screen.width;
        this.snapshotCanvas.height = this._screen.height;
        this.snapshotCtx.drawImage(this._screen, 0, 0);
    };
    Screen.prototype.startSlide = function (direction, callback) {
        this.slideDirection = direction;
        this.slideProgress = 0;
        this.isSliding = true;
        this.slideCallback = callback;
    };
    Screen.prototype.update = function (dt) {
        if (this.isFading) {
            var speed = 2; // Full fade in 0.5 sec -> 1 / 0.5 = 2.
            if (this.fadeType === 'OUT') {
                this.fadeAlpha += speed * dt;
                if (this.fadeAlpha >= 1) {
                    this.fadeAlpha = 1;
                    this.isFading = false;
                    if (this.fadeCallback)
                        this.fadeCallback();
                }
            }
            else {
                this.fadeAlpha -= speed * dt;
                if (this.fadeAlpha <= 0) {
                    this.fadeAlpha = 0;
                    this.isFading = false;
                    if (this.fadeCallback)
                        this.fadeCallback();
                }
            }
        }
        if (this.isSliding) {
            var speed = 1.5; // ~0.66s slide
            this.slideProgress += speed * dt;
            if (this.slideProgress >= 1) {
                this.slideProgress = 1;
                this.isSliding = false;
                if (this.slideCallback)
                    this.slideCallback();
            }
        }
    };
    Screen.prototype.renderScreen = function () {
        var _this = this;
        this._ctx.clearRect(0, 0, this._screen.width, this._screen.height);
        var offsetX = 0;
        var offsetY = 0;
        var snapOffsetX = 0;
        var snapOffsetY = 0;
        if (this.isSliding) {
            var ease = this.slideProgress; // linear for now
            if (this.slideDirection === 'RIGHT') {
                offsetX = this._screen.width * (1 - ease);
                snapOffsetX = -this._screen.width * ease;
            }
            else if (this.slideDirection === 'LEFT') {
                offsetX = -this._screen.width * (1 - ease);
                snapOffsetX = this._screen.width * ease;
            }
            else if (this.slideDirection === 'DOWN') {
                offsetY = this._screen.height * (1 - ease);
                snapOffsetY = -this._screen.height * ease;
            }
            else if (this.slideDirection === 'UP') {
                offsetY = -this._screen.height * (1 - ease);
                snapOffsetY = this._screen.height * ease;
            }
        }
        // Draw the snapshot below the new rendering
        if (this.isSliding) {
            this._ctx.drawImage(this.snapshotCanvas, snapOffsetX, snapOffsetY);
        }
        var p = this.main.state.getPlayer();
        var room = this.main.state.mapManager.currentRoom;
        var cameraX = p.x + (p.w / 2) - (this._screen.width / 2);
        var cameraY = p.y + (p.h / 2) - (this._screen.height / 2);
        // Clamp Camera to room bounds
        if (cameraX < 0)
            cameraX = 0;
        if (cameraY < 0)
            cameraY = 0;
        if (cameraX + this._screen.width > room.width)
            cameraX = Math.max(0, room.width - this._screen.width);
        if (cameraY + this._screen.height > room.height)
            cameraY = Math.max(0, room.height - this._screen.height);
        this._ctx.save();
        this._ctx.translate(-Math.floor(cameraX) + Math.floor(offsetX), -Math.floor(cameraY) + Math.floor(offsetY));
        var cullX = cameraX - offsetX;
        var cullY = cameraY - offsetY;
        this.main.state.getBackground().forEach(function (x) {
            if (x.dx + x.dw < cullX || x.dx > cullX + _this._screen.width ||
                x.dy + x.dh < cullY || x.dy > cullY + _this._screen.height) {
                return;
            }
            if (_this._sprites[x.sprite]) {
                _this._ctx.drawImage(_this._sprites[x.sprite], x.sx, x.sy, x.sw, x.sh, x.dx, x.dy, x.dw, x.dh);
            }
        });
        this.main.state.getBlock().forEach(function (x) {
            if (x.dx + x.dw < cullX || x.dx > cullX + _this._screen.width ||
                x.dy + x.dh < cullY || x.dy > cullY + _this._screen.height) {
                return;
            }
            if (_this._sprites[x.sprite]) {
                _this._ctx.drawImage(_this._sprites[x.sprite], x.sx, x.sy, x.sw, x.sh, x.dx, x.dy, x.dw, x.dh);
            }
        });
        this.main.state.mapManager.currentRoom.portals.forEach(function (x) {
            if (x.dx + x.dw < cullX || x.dx > cullX + _this._screen.width ||
                x.dy + x.dh < cullY || x.dy > cullY + _this._screen.height) {
                return;
            }
            if (_this._sprites[x.sprite]) {
                _this._ctx.drawImage(_this._sprites[x.sprite], x.sx, x.sy, x.sw, x.sh, x.dx, x.dy, x.dw, x.dh);
            }
        });
        if (this._sprites[0]) {
            this._ctx.drawImage(this._sprites[0], p.sx[p.sxIndex], p.sy, p.w, p.h, p.x, p.y, p.w, p.h);
        }
        this._ctx.restore();
        // Renderização do black overlay de transição (Fading) independente da Câmera
        if (this.fadeAlpha > 0) {
            this._ctx.fillStyle = "rgba(0, 0, 0, " + this.fadeAlpha + ")";
            this._ctx.fillRect(0, 0, this._screen.width, this._screen.height);
        }
    };
    return Screen;
}());



/***/ }),

/***/ "./src/state.ts":
/*!**********************!*\
  !*** ./src/state.ts ***!
  \**********************/
/*! exports provided: State */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "State", function() { return State; });
/* harmony import */ var _managers_map_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./managers/map.manager */ "./src/managers/map.manager.ts");
/* harmony import */ var _models_player_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/player.model */ "./src/models/player.model.ts");


var State = /** @class */ (function () {
    function State(main) {
        this.main = main;
        this.mapManager = new _managers_map_manager__WEBPACK_IMPORTED_MODULE_0__["MapManager"](this.main);
        this._players = new Array(new _models_player_model__WEBPACK_IMPORTED_MODULE_1__["Player"](this.mapManager.currentRoom.width / 2, this.mapManager.currentRoom.height / 2, 24, 24, [0, 24, 48], 0, 24, 0));
        this.setCurrentPlayer(0);
    }
    State.prototype.setCurrentPlayer = function (playerId) {
        this._currentPlayer = playerId;
    };
    State.prototype.addPlayer = function (player) {
        this._players.push(player);
        this._currentPlayer = this._players.length > 0 ? this._players.length - 1 : 0;
        this.main.screen.renderScreen();
    };
    State.prototype.getPlayer = function () {
        return this._players[this._currentPlayer];
    };
    State.prototype.getBlock = function () {
        return this.mapManager.currentRoom.blocks;
    };
    State.prototype.getBackground = function () {
        return this.mapManager.currentRoom.background;
    };
    State.prototype.update = function (dt) {
        if (this.mapManager.isTransitioning)
            return;
        var player = this.getPlayer();
        var keys = this.main.input.activeKeys;
        var room = this.mapManager.currentRoom;
        var dx = 0;
        var dy = 0;
        var speed = 100 * dt; // 100 pixels per second
        // Determine intended movement
        if (keys['ArrowUp']) {
            dy -= speed;
            player.sy = 0; // Sprite row for up
        }
        else if (keys['ArrowDown']) {
            dy += speed;
            player.sy = 48; // Sprite row for down
        }
        else if (keys['ArrowLeft']) {
            dx -= speed;
            player.sy = 72; // Sprite row for left
        }
        else if (keys['ArrowRight']) {
            dx += speed;
            player.sy = 24; // Sprite row for right
        }
        // Apply movement if there's any
        if (dx !== 0 || dy !== 0) {
            var nextX = player.x + dx;
            var nextY = player.y + dy;
            // Boundaries check
            if (nextX < 0)
                nextX = 0;
            if (nextY < 0)
                nextY = 0;
            if (nextX + player.w > room.width)
                nextX = room.width - player.w;
            if (nextY + player.h > room.height)
                nextY = room.height - player.h;
            // Collision check
            var collision = false;
            for (var _i = 0, _a = room.blocks; _i < _a.length; _i++) {
                var block = _a[_i];
                if (nextX < block.dx + block.dw &&
                    nextX + player.w > block.dx &&
                    nextY < block.dy + block.dh &&
                    nextY + player.h > block.dy) {
                    collision = true;
                    break;
                }
            }
            if (!collision) {
                player.x = nextX;
                player.y = nextY;
                // Portal check
                for (var _b = 0, _c = room.portals; _b < _c.length; _b++) {
                    var portal = _c[_b];
                    if (player.x < portal.dx + portal.dw &&
                        player.x + player.w > portal.dx &&
                        player.y < portal.dy + portal.dh &&
                        player.y + player.h > portal.dy) {
                        this.mapManager.triggerTransition(portal, player.x, player.y);
                        break;
                    }
                }
            }
            // Animate sprite when moving
            player.sRenderDelay += dt;
            if (player.sRenderDelay >= 0.05) {
                player.sRenderDelay = 0;
                if (player.sxIndex < (player.sx.length - 1)) {
                    player.sxIndex += 1;
                }
                else {
                    player.sxIndex = 0;
                }
            }
        }
        else {
            // Reset to idle frame if not moving
            player.sxIndex = 0;
        }
    };
    return State;
}());



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lucHV0LnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluLnRzIiwid2VicGFjazovLy8uL3NyYy9tYW5hZ2Vycy9tYXAubWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL2VudGl0eS5tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL3BsYXllci5tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL3BvcnRhbC5tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL3Jvb20ubW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmVlbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2hGQTtBQUFB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RUFBRTtvQkFBOUIsSUFBTSxNQUFNO29CQUNiLElBQ0ksTUFBTSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsRUFBRSxHQUFHLE1BQU0sQ0FBQyxFQUFFO3dCQUNoQyxNQUFNLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLEVBQUU7d0JBQy9CLE1BQU0sQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLEVBQUUsR0FBRyxNQUFNLENBQUMsRUFBRTt3QkFDaEMsTUFBTSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxFQUFFLEVBQ2pDO3dCQUNFLElBQUksQ0FBQyxVQUFVLENBQUMsaUJBQWlCLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUM5RCxNQUFNO3FCQUNUO2lCQUNKO2FBQ0o7WUFFRCw2QkFBNkI7WUFDN0IsTUFBTSxDQUFDLFlBQVksSUFBSSxFQUFFLENBQUM7WUFDMUIsSUFBSSxNQUFNLENBQUMsWUFBWSxJQUFJLElBQUksRUFBRTtnQkFDN0IsTUFBTSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7Z0JBQ3hCLElBQUksTUFBTSxDQUFDLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxFQUFFO29CQUN6QyxNQUFNLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQztpQkFDdkI7cUJBQU07b0JBQ0gsTUFBTSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7aUJBQ3RCO2FBQ0o7U0FDSjthQUFNO1lBQ0gsb0NBQW9DO1lBQ3BDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1NBQ3RCO0lBQ0wsQ0FBQztJQUVMLFlBQUM7QUFBRCxDQUFDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9tYWluLnRzXCIpO1xuIiwiaW1wb3J0IHsgTWFpbiB9IGZyb20gXCIuL21haW5cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBJbnB1dCB7XHJcblxyXG4gICAgcHJpdmF0ZSBfYWN0aXZlS2V5czogeyBba2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIG1haW46IE1haW5cclxuICAgICkge1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXYpID0+IHRoaXMuX2FjdGl2ZUtleXNbZXYua2V5XSA9IHRydWUpO1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGV2KSA9PiB0aGlzLl9hY3RpdmVLZXlzW2V2LmtleV0gPSBmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBhY3RpdmVLZXlzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hY3RpdmVLZXlzO1xyXG4gICAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBTY3JlZW4gfSBmcm9tIFwiLi9zY3JlZW5cIjtcclxuaW1wb3J0IHsgU3RhdGUgfSBmcm9tIFwiLi9zdGF0ZVwiO1xyXG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gXCIuL2lucHV0XCI7IC8vIE5vdGljZSB0aGUgY29ycmVjdGVkIGltcG9ydFxyXG5cclxuZXhwb3J0IGNsYXNzIE1haW4ge1xyXG5cclxuICAgIHB1YmxpYyBzdGF0ZTogU3RhdGU7XHJcbiAgICBwdWJsaWMgc2NyZWVuOiBTY3JlZW47XHJcbiAgICBwdWJsaWMgaW5wdXQ6IElucHV0O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBuZXcgU3RhdGUodGhpcyk7XHJcbiAgICAgICAgdGhpcy5zY3JlZW4gPSBuZXcgU2NyZWVuKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuaW5wdXQgPSBuZXcgSW5wdXQodGhpcyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gU3RhcnQgdGhlIGdhbWUgbG9vcFxyXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgodHMpID0+IHRoaXMubG9vcCh0cykpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbGFzdFRpbWU6IG51bWJlciA9IDA7XHJcblxyXG4gICAgcHJpdmF0ZSBsb29wKHRpbWVzdGFtcDogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmxhc3RUaW1lKSB0aGlzLmxhc3RUaW1lID0gdGltZXN0YW1wO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBkdCA9ICh0aW1lc3RhbXAgLSB0aGlzLmxhc3RUaW1lKSAvIDEwMDA7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gUHJldmVudCBnaWFudCBzcGlrZXMgd2hlbiBjaGFuZ2luZyB0YWJzXHJcbiAgICAgICAgaWYgKGR0ID4gMC4xKSBkdCA9IDAuMTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmxhc3RUaW1lID0gdGltZXN0YW1wO1xyXG5cclxuICAgICAgICB0aGlzLnNjcmVlbi51cGRhdGUoZHQpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUudXBkYXRlKGR0KTtcclxuICAgICAgICB0aGlzLnNjcmVlbi5yZW5kZXJTY3JlZW4oKTtcclxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKHRzKSA9PiB0aGlzLmxvb3AodHMpKTtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgbWFpbiA9IG5ldyBNYWluKCk7IiwiaW1wb3J0IHsgTWFpbiB9IGZyb20gXCIuLi9tYWluXCI7XHJcbmltcG9ydCB7IFJvb20gfSBmcm9tIFwiLi4vbW9kZWxzL3Jvb20ubW9kZWxcIjtcclxuaW1wb3J0IHsgRW50aXR5IH0gZnJvbSBcIi4uL21vZGVscy9lbnRpdHkubW9kZWxcIjtcclxuaW1wb3J0IHsgUG9ydGFsIH0gZnJvbSBcIi4uL21vZGVscy9wb3J0YWwubW9kZWxcIjtcclxuaW1wb3J0IHsgSVBvcnRhbCB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL3BvcnRhbC5pbnRlcmZhY2VcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBNYXBNYW5hZ2VyIHtcclxuICAgIHB1YmxpYyBjdXJyZW50Um9vbTogUm9vbTtcclxuICAgIHB1YmxpYyBpc1RyYW5zaXRpb25pbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgcm9vbUNhY2hlOiBNYXA8c3RyaW5nLCBSb29tPiA9IG5ldyBNYXA8c3RyaW5nLCBSb29tPigpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgbWFpbjogTWFpbikge1xyXG4gICAgICAgIC8vIExvYWQgYW4gaW5pdGlhbCBkZWZhdWx0IHJvb21cclxuICAgICAgICB0aGlzLmxvYWRSb29tKFwibWFwXzBfMFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdHJpZ2dlclRyYW5zaXRpb24ocG9ydGFsOiBJUG9ydGFsLCBjdXJyZW50WDogbnVtYmVyLCBjdXJyZW50WTogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNUcmFuc2l0aW9uaW5nKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5pc1RyYW5zaXRpb25pbmcgPSB0cnVlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChwb3J0YWwudHJhbnNpdGlvblR5cGUgPT09IFwiRkFERVwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWFpbi5zY3JlZW4uc3RhcnRGYWRlT3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZFJvb20ocG9ydGFsLnRhcmdldE1hcElkKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBsYXllciA9IHRoaXMubWFpbi5zdGF0ZS5nZXRQbGF5ZXIoKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gLTEgaW5kaWNhdGVzIGtlZXBpbmcgdGhlIHNhbWUgcG9zaXRpb24gYXhpcyBsb2dpY2FsbHlcclxuICAgICAgICAgICAgICAgIHBsYXllci54ID0gcG9ydGFsLnRhcmdldFNwYXduWCAhPT0gLTEgPyBwb3J0YWwudGFyZ2V0U3Bhd25YIDogY3VycmVudFg7XHJcbiAgICAgICAgICAgICAgICBwbGF5ZXIueSA9IHBvcnRhbC50YXJnZXRTcGF3blkgIT09IC0xID8gcG9ydGFsLnRhcmdldFNwYXduWSA6IGN1cnJlbnRZO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB0aGlzLm1haW4uc2NyZWVuLnN0YXJ0RmFkZUluKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzVHJhbnNpdGlvbmluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocG9ydGFsLnRyYW5zaXRpb25UeXBlID09PSBcIlNMSURFXCIpIHtcclxuICAgICAgICAgICAgLy8gUGxhY2Vob2xkZXIgZm9yIFN0ZXAgNCAoUGFubmluZyBtZWNoYW5pY3MpXHJcbiAgICAgICAgICAgIC8vIEZvciBub3csIGFjdCBhcyBhbiBpbnN0YW50IGN1dC9wb3BcclxuICAgICAgICAgICAgdGhpcy5sb2FkUm9vbShwb3J0YWwudGFyZ2V0TWFwSWQpO1xyXG4gICAgICAgICAgICBjb25zdCBwbGF5ZXIgPSB0aGlzLm1haW4uc3RhdGUuZ2V0UGxheWVyKCk7XHJcbiAgICAgICAgICAgIHBsYXllci54ID0gcG9ydGFsLnRhcmdldFNwYXduWCAhPT0gLTEgPyBwb3J0YWwudGFyZ2V0U3Bhd25YIDogY3VycmVudFg7XHJcbiAgICAgICAgICAgIHBsYXllci55ID0gcG9ydGFsLnRhcmdldFNwYXduWSAhPT0gLTEgPyBwb3J0YWwudGFyZ2V0U3Bhd25ZIDogY3VycmVudFk7XHJcbiAgICAgICAgICAgIHRoaXMuaXNUcmFuc2l0aW9uaW5nID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBsb2FkUm9vbShpZDogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnJvb21DYWNoZS5oYXMoaWQpKSB7XHJcbiAgICAgICAgICAgIHRoaXMucm9vbUNhY2hlLnNldChpZCwgdGhpcy5idWlsZFJvb20oaWQpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jdXJyZW50Um9vbSA9IHRoaXMucm9vbUNhY2hlLmdldChpZCk7XHJcblxyXG4gICAgICAgIC8vIFByZWxvYWQgYWRqYWNlbmNpZXMgYXN5bmNocm9ub3VzbHlcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGlkLnN0YXJ0c1dpdGgoXCJtYXBfXCIpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJ0cyA9IGlkLnNwbGl0KFwiX1wiKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1hcFggPSBwYXJzZUludChwYXJ0c1sxXSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtYXBZID0gcGFyc2VJbnQocGFydHNbMl0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMucHJlbG9hZFJvb20oYG1hcF8ke21hcFh9XyR7bWFwWSAtIDF9YCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByZWxvYWRSb29tKGBtYXBfJHttYXBYfV8ke21hcFkgKyAxfWApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcmVsb2FkUm9vbShgbWFwXyR7bWFwWCAtIDF9XyR7bWFwWX1gKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJlbG9hZFJvb20oYG1hcF8ke21hcFggKyAxfV8ke21hcFl9YCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCA1MCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBwcmVsb2FkUm9vbShpZDogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnJvb21DYWNoZS5oYXMoaWQpKSB7XHJcbiAgICAgICAgICAgIHRoaXMucm9vbUNhY2hlLnNldChpZCwgdGhpcy5idWlsZFJvb20oaWQpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBidWlsZFJvb20oaWQ6IHN0cmluZyk6IFJvb20ge1xyXG4gICAgICAgIC8vIE1vY2tpbmcgdGhlIGdlbmVyYXRpb24gZm9yIHRlc3Rpbmc6XHJcbiAgICAgICAgY29uc3Qgd2lkdGggPSAyMDAwO1xyXG4gICAgICAgIGNvbnN0IGhlaWdodCA9IDIwMDA7XHJcbiAgICAgICAgY29uc3Qgcm9vbSA9IG5ldyBSb29tKGlkLCB3aWR0aCwgaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgLy8gUG9wdWxhdGUgYmFja2dyb3VuZFxyXG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgd2lkdGg7IHggKz0gMTYpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCBoZWlnaHQ7IHkgKz0gMTYpIHtcclxuICAgICAgICAgICAgICAgIHJvb20uYmFja2dyb3VuZC5wdXNoKG5ldyBFbnRpdHkoMSwgWzAsIDE2LCAzMl1bTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMyldLCAxNjAsIDE2LCAxNiwgeCwgeSwgMTYsIDE2KSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgd2lkdGg7IHggKz0gMTYpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCBoZWlnaHQ7IHkgKz0gMTYpIHtcclxuICAgICAgICAgICAgICAgIGlmIChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAzMCkgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICByb29tLmJhY2tncm91bmQucHVzaChuZXcgRW50aXR5KDEsIFs0OCwgNTZdW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpXSwgWzE2MCwgMTY4XVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKV0sIDgsIDgsIHgsIHksIDgsIDgpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGlkLnN0YXJ0c1dpdGgoXCJtYXBfXCIpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhcnRzID0gaWQuc3BsaXQoXCJfXCIpO1xyXG4gICAgICAgICAgICBjb25zdCBtYXBYID0gcGFyc2VJbnQocGFydHNbMV0pO1xyXG4gICAgICAgICAgICBjb25zdCBtYXBZID0gcGFyc2VJbnQocGFydHNbMl0pO1xyXG5cclxuICAgICAgICAgICAgLy8gQWRkIGVkZ2UgdHJpZ2dlcnMgZm9yIFNMSURFIHRyYW5zaXRpb25zOlxyXG4gICAgICAgICAgICAvLyBUb3AgZWRnZSAoTm9ydGgpXHJcbiAgICAgICAgICAgIHJvb20ucG9ydGFscy5wdXNoKG5ldyBQb3J0YWwoMCwgMCwgMCwgMCwgMCwgMCwgMCwgd2lkdGgsIDEwLCBgbWFwXyR7bWFwWH1fJHttYXBZIC0gMX1gLCAtMSwgaGVpZ2h0IC0gMzUsIFwiU0xJREVcIikpO1xyXG4gICAgICAgICAgICAvLyBCb3R0b20gZWRnZSAoU291dGgpXHJcbiAgICAgICAgICAgIHJvb20ucG9ydGFscy5wdXNoKG5ldyBQb3J0YWwoMCwgMCwgMCwgMCwgMCwgMCwgaGVpZ2h0IC0gMTAsIHdpZHRoLCAxMCwgYG1hcF8ke21hcFh9XyR7bWFwWSArIDF9YCwgLTEsIDM1LCBcIlNMSURFXCIpKTtcclxuICAgICAgICAgICAgLy8gTGVmdCBlZGdlIChXZXN0KVxyXG4gICAgICAgICAgICByb29tLnBvcnRhbHMucHVzaChuZXcgUG9ydGFsKDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwLCBoZWlnaHQsIGBtYXBfJHttYXBYIC0gMX1fJHttYXBZfWAsIHdpZHRoIC0gMzUsIC0xLCBcIlNMSURFXCIpKTtcclxuICAgICAgICAgICAgLy8gUmlnaHQgZWRnZSAoRWFzdClcclxuICAgICAgICAgICAgcm9vbS5wb3J0YWxzLnB1c2gobmV3IFBvcnRhbCgwLCAwLCAwLCAwLCAwLCB3aWR0aCAtIDEwLCAwLCAxMCwgaGVpZ2h0LCBgbWFwXyR7bWFwWCArIDF9XyR7bWFwWX1gLCAzNSwgLTEsIFwiU0xJREVcIikpO1xyXG5cclxuICAgICAgICAgICAgLy8gQSB2aXNpYmxlIHBvcnRhbCBvbiB0aGUgbWFwIHRvIHRlc3QgaW50ZXJpb3JzXHJcbiAgICAgICAgICAgIGlmIChtYXBYID09PSAwICYmIG1hcFkgPT09IDApIHtcclxuICAgICAgICAgICAgICAgIC8vIEFvIGVudHJhciBlbSBpbnRlcmlvcl8wXzAsIGVsZSBuYXNjZXLDoSBlbSBYPTE1MCwgWT0xMjAgKG1laW8gZGEgc2FsYSBpbnRlcmlvcilcclxuICAgICAgICAgICAgICAgIHJvb20ucG9ydGFscy5wdXNoKG5ldyBQb3J0YWwoMSwgMTYsIDE3NiwgMTYsIDE2LCAyMDAsIDIwMCwgMTYsIDE2LCBcImludGVyaW9yXzBfMFwiLCAxNTAsIDEyMCwgXCJGQURFXCIpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoaWQgPT09IFwiaW50ZXJpb3JfMF8wXCIpIHtcclxuICAgICAgICAgICAgcm9vbS53aWR0aCA9IDMyMDtcclxuICAgICAgICAgICAgcm9vbS5oZWlnaHQgPSAyNDA7XHJcbiAgICAgICAgICAgIC8vIE8gcG9ydGFsIGRlIHZvbHRhIHBhcmEgZm9yYSAobWFwXzBfMCkgZmljYXLDoSBuYSBwYXJ0ZSBzdWwgZGVzdGEgc2FsYSAoeT0yMjApXHJcbiAgICAgICAgICAgIHJvb20ucG9ydGFscy5wdXNoKG5ldyBQb3J0YWwoMSwgNDgsIDE3NiwgMTYsIDE2LCAxNTAsIDIyMCwgMTYsIDE2LCBcIm1hcF8wXzBcIiwgMjAwLCAyMjAsIFwiRkFERVwiKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcm9vbTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJRW50aXR5IH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvZW50aXR5LmludGVyZmFjZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEVudGl0eSBpbXBsZW1lbnRzIElFbnRpdHkge1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHVibGljIHNwcml0ZTogbnVtYmVyLFxyXG5cclxuICAgICAgICBwdWJsaWMgc3g6IG51bWJlcixcclxuICAgICAgICBwdWJsaWMgc3k6IG51bWJlcixcclxuICAgICAgICBwdWJsaWMgc3c6IG51bWJlcixcclxuICAgICAgICBwdWJsaWMgc2g6IG51bWJlcixcclxuICAgIFxyXG4gICAgICAgIHB1YmxpYyBkeDogbnVtYmVyLFxyXG4gICAgICAgIHB1YmxpYyBkeTogbnVtYmVyLFxyXG4gICAgICAgIHB1YmxpYyBkdzogbnVtYmVyLFxyXG4gICAgICAgIHB1YmxpYyBkaDogbnVtYmVyXHJcbiAgICApIHtcclxuXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBJUGxheWVyIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvcGxheWVyLmludGVyZmFjZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBsYXllciBpbXBsZW1lbnRzIElQbGF5ZXIge1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHVibGljIHg6IG51bWJlcixcclxuICAgICAgICBwdWJsaWMgeTogbnVtYmVyLFxyXG4gICAgICAgIHB1YmxpYyB3OiBudW1iZXIsXHJcbiAgICAgICAgcHVibGljIGg6IG51bWJlcixcclxuICAgICAgICBwdWJsaWMgc3g6IEFycmF5PG51bWJlcj4sXHJcbiAgICAgICAgcHVibGljIHN4SW5kZXg6IG51bWJlcixcclxuICAgICAgICBwdWJsaWMgc3k6IG51bWJlcixcclxuICAgICAgICBwdWJsaWMgc1JlbmRlckRlbGF5OiBudW1iZXJcclxuICAgICkge1xyXG5cclxuICAgIH1cclxufSIsImltcG9ydCB7IEVudGl0eSB9IGZyb20gXCIuL2VudGl0eS5tb2RlbFwiO1xyXG5pbXBvcnQgeyBJUG9ydGFsIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvcG9ydGFsLmludGVyZmFjZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBvcnRhbCBleHRlbmRzIEVudGl0eSBpbXBsZW1lbnRzIElQb3J0YWwge1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgc3ByaXRlSWQ6IG51bWJlcixcclxuICAgICAgICBzeDogbnVtYmVyLFxyXG4gICAgICAgIHN5OiBudW1iZXIsXHJcbiAgICAgICAgc3c6IG51bWJlcixcclxuICAgICAgICBzaDogbnVtYmVyLFxyXG4gICAgICAgIGR4OiBudW1iZXIsXHJcbiAgICAgICAgZHk6IG51bWJlcixcclxuICAgICAgICBkdzogbnVtYmVyLFxyXG4gICAgICAgIGRoOiBudW1iZXIsXHJcbiAgICAgICAgcHVibGljIHRhcmdldE1hcElkOiBzdHJpbmcsXHJcbiAgICAgICAgcHVibGljIHRhcmdldFNwYXduWDogbnVtYmVyLFxyXG4gICAgICAgIHB1YmxpYyB0YXJnZXRTcGF3blk6IG51bWJlcixcclxuICAgICAgICBwdWJsaWMgdHJhbnNpdGlvblR5cGU6IFwiRkFERVwiIHwgXCJTTElERVwiID0gXCJGQURFXCJcclxuICAgICkge1xyXG4gICAgICAgIHN1cGVyKHNwcml0ZUlkLCBzeCwgc3ksIHN3LCBzaCwgZHgsIGR5LCBkdywgZGgpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IElFbnRpdHkgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9lbnRpdHkuaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7IElSb29tIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvcm9vbS5pbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgSVBvcnRhbCB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL3BvcnRhbC5pbnRlcmZhY2VcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBSb29tIGltcGxlbWVudHMgSVJvb20ge1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHVibGljIGlkOiBzdHJpbmcsXHJcbiAgICAgICAgcHVibGljIHdpZHRoOiBudW1iZXIsXHJcbiAgICAgICAgcHVibGljIGhlaWdodDogbnVtYmVyLFxyXG4gICAgICAgIHB1YmxpYyBibG9ja3M6IElFbnRpdHlbXSA9IFtdLFxyXG4gICAgICAgIHB1YmxpYyBiYWNrZ3JvdW5kOiBJRW50aXR5W10gPSBbXSxcclxuICAgICAgICBwdWJsaWMgcG9ydGFsczogSVBvcnRhbFtdID0gW11cclxuICAgICkge31cclxufVxyXG4iLCJpbXBvcnQgeyBNYWluIH0gZnJvbSBcIi4vbWFpblwiO1xyXG5cclxuaW1wb3J0IHsgSVBsYXllciB9IGZyb20gXCIuL2ludGVyZmFjZXMvcGxheWVyLmludGVyZmFjZVwiO1xyXG5pbXBvcnQgeyBJRW50aXR5IH0gZnJvbSBcIi4vaW50ZXJmYWNlcy9lbnRpdHkuaW50ZXJmYWNlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU2NyZWVuIHtcclxuXHJcbiAgICBwcml2YXRlIF9zY3JlZW46IEhUTUxDYW52YXNFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBfY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XHJcbiAgICBwcml2YXRlIF9zcHJpdGVzOiBBcnJheTxIVE1MSW1hZ2VFbGVtZW50PjtcclxuXHJcbiAgICBwdWJsaWMgZmFkZUFscGhhOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBpc0ZhZGluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBmYWRlVHlwZTogJ0lOJyB8ICdPVVQnID0gJ0lOJztcclxuICAgIHByaXZhdGUgZmFkZUNhbGxiYWNrOiAoKCkgPT4gdm9pZCkgfCBudWxsID0gbnVsbDtcclxuICAgIFxyXG4gICAgcHJpdmF0ZSBzbmFwc2hvdENhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgICBwcml2YXRlIHNuYXBzaG90Q3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XHJcbiAgICBcclxuICAgIHB1YmxpYyBzbGlkZVByb2dyZXNzOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBzbGlkZURpcmVjdGlvbjogJ1VQJyB8ICdET1dOJyB8ICdMRUZUJyB8ICdSSUdIVCcgfCBudWxsID0gbnVsbDtcclxuICAgIHB1YmxpYyBpc1NsaWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgc2xpZGVDYWxsYmFjazogKCgpID0+IHZvaWQpIHwgbnVsbCA9IG51bGw7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBtYWluOiBNYWluXHJcbiAgICApIHtcclxuICAgICAgICB0aGlzLl9zY3JlZW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2NyZWVuJykgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5fY3R4ID0gdGhpcy5fc2NyZWVuLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgICAgdGhpcy5fc3ByaXRlcyA9IG5ldyBBcnJheTxIVE1MSW1hZ2VFbGVtZW50PigpO1xyXG5cclxuICAgICAgICB0aGlzLnNuYXBzaG90Q2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICAgICAgdGhpcy5zbmFwc2hvdEN0eCA9IHRoaXMuc25hcHNob3RDYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHRoaXMucmVzaXplKCkpO1xyXG4gICAgICAgIHRoaXMucmVzaXplKCk7XHJcblxyXG4gICAgICAgIHRoaXMuYWRkU3ByaXRlQ29sbGVjdGlvbihbXHJcbiAgICAgICAgICAgICdhc3NldHMvaW1hZ2VzL0xpbmtXYWxrLnBuZycsXHJcbiAgICAgICAgICAgICdhc3NldHMvaW1hZ2VzL1plbGRhMU1pbmlzaDAxLnBuZydcclxuICAgICAgICBdKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBhZGRTcHJpdGVDb2xsZWN0aW9uKHNyYzogc3RyaW5nW10pIHtcclxuICAgICAgICBmb3IgKGNvbnN0IHggb2Ygc3JjKSB7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuYWRkU3ByaXRlKHgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnJlbmRlclNjcmVlbigpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYWRkU3ByaXRlKHNyYzogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9zcHJpdGVzLnB1c2gobmV3IEltYWdlKCkpO1xyXG4gICAgICAgICAgICB0aGlzLl9zcHJpdGVzW3RoaXMuX3Nwcml0ZXMubGVuZ3RoIC0gMV0uc3JjID0gc3JjO1xyXG4gICAgICAgICAgICB0aGlzLl9zcHJpdGVzW3RoaXMuX3Nwcml0ZXMubGVuZ3RoIC0gMV0ub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlc2l6ZSgpIHtcclxuICAgICAgICB0aGlzLl9zY3JlZW4ud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICAgICAgICB0aGlzLl9zY3JlZW4uaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG4gICAgICAgIC8vIEtlZXAgcGl4ZWxhdGVkIGFlc3RoZXRpYyB3aGVuIHJlc2NhbGVkXHJcbiAgICAgICAgdGhpcy5fY3R4LmltYWdlU21vb3RoaW5nRW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRTY3JlZW5EaW1lbnNpb25zKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiB0aGlzLl9zY3JlZW4ud2lkdGgsXHJcbiAgICAgICAgICAgIGhlaWdodDogdGhpcy5fc2NyZWVuLmhlaWdodFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXJ0RmFkZU91dChjYWxsYmFjazogKCkgPT4gdm9pZCkge1xyXG4gICAgICAgIHRoaXMuaXNGYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuZmFkZVR5cGUgPSAnT1VUJztcclxuICAgICAgICB0aGlzLmZhZGVBbHBoYSA9IDA7XHJcbiAgICAgICAgdGhpcy5mYWRlQ2FsbGJhY2sgPSBjYWxsYmFjaztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhcnRGYWRlSW4oY2FsbGJhY2s6ICgpID0+IHZvaWQpIHtcclxuICAgICAgICB0aGlzLmlzRmFkaW5nID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmZhZGVUeXBlID0gJ0lOJztcclxuICAgICAgICB0aGlzLmZhZGVBbHBoYSA9IDE7XHJcbiAgICAgICAgdGhpcy5mYWRlQ2FsbGJhY2sgPSBjYWxsYmFjaztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2FwdHVyZVNuYXBzaG90KCkge1xyXG4gICAgICAgIHRoaXMuc25hcHNob3RDYW52YXMud2lkdGggPSB0aGlzLl9zY3JlZW4ud2lkdGg7XHJcbiAgICAgICAgdGhpcy5zbmFwc2hvdENhbnZhcy5oZWlnaHQgPSB0aGlzLl9zY3JlZW4uaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuc25hcHNob3RDdHguZHJhd0ltYWdlKHRoaXMuX3NjcmVlbiwgMCwgMCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXJ0U2xpZGUoZGlyZWN0aW9uOiAnVVAnIHwgJ0RPV04nIHwgJ0xFRlQnIHwgJ1JJR0hUJywgY2FsbGJhY2s6ICgpID0+IHZvaWQpIHtcclxuICAgICAgICB0aGlzLnNsaWRlRGlyZWN0aW9uID0gZGlyZWN0aW9uO1xyXG4gICAgICAgIHRoaXMuc2xpZGVQcm9ncmVzcyA9IDA7XHJcbiAgICAgICAgdGhpcy5pc1NsaWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc2xpZGVDYWxsYmFjayA9IGNhbGxiYWNrO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cGRhdGUoZHQ6IG51bWJlcikge1xyXG4gICAgICAgIGlmICh0aGlzLmlzRmFkaW5nKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNwZWVkID0gMjsgLy8gRnVsbCBmYWRlIGluIDAuNSBzZWMgLT4gMSAvIDAuNSA9IDIuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmZhZGVUeXBlID09PSAnT1VUJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mYWRlQWxwaGEgKz0gc3BlZWQgKiBkdDtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZhZGVBbHBoYSA+PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mYWRlQWxwaGEgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNGYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5mYWRlQ2FsbGJhY2spIHRoaXMuZmFkZUNhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZhZGVBbHBoYSAtPSBzcGVlZCAqIGR0O1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZmFkZUFscGhhIDw9IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZhZGVBbHBoYSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0ZhZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmZhZGVDYWxsYmFjaykgdGhpcy5mYWRlQ2FsbGJhY2soKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBpZiAodGhpcy5pc1NsaWRpbmcpIHtcclxuICAgICAgICAgICAgY29uc3Qgc3BlZWQgPSAxLjU7IC8vIH4wLjY2cyBzbGlkZVxyXG4gICAgICAgICAgICB0aGlzLnNsaWRlUHJvZ3Jlc3MgKz0gc3BlZWQgKiBkdDtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc2xpZGVQcm9ncmVzcyA+PSAxKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNsaWRlUHJvZ3Jlc3MgPSAxO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1NsaWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNsaWRlQ2FsbGJhY2spIHRoaXMuc2xpZGVDYWxsYmFjaygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW5kZXJTY3JlZW4oKSB7XHJcbiAgICAgICAgdGhpcy5fY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLl9zY3JlZW4ud2lkdGgsIHRoaXMuX3NjcmVlbi5oZWlnaHQpO1xyXG5cclxuICAgICAgICBsZXQgb2Zmc2V0WCA9IDA7XHJcbiAgICAgICAgbGV0IG9mZnNldFkgPSAwO1xyXG4gICAgICAgIGxldCBzbmFwT2Zmc2V0WCA9IDA7XHJcbiAgICAgICAgbGV0IHNuYXBPZmZzZXRZID0gMDtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXNTbGlkaW5nKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVhc2UgPSB0aGlzLnNsaWRlUHJvZ3Jlc3M7IC8vIGxpbmVhciBmb3Igbm93XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNsaWRlRGlyZWN0aW9uID09PSAnUklHSFQnKSB7XHJcbiAgICAgICAgICAgICAgICBvZmZzZXRYID0gdGhpcy5fc2NyZWVuLndpZHRoICogKDEgLSBlYXNlKTtcclxuICAgICAgICAgICAgICAgIHNuYXBPZmZzZXRYID0gLXRoaXMuX3NjcmVlbi53aWR0aCAqIGVhc2U7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5zbGlkZURpcmVjdGlvbiA9PT0gJ0xFRlQnKSB7XHJcbiAgICAgICAgICAgICAgICBvZmZzZXRYID0gLXRoaXMuX3NjcmVlbi53aWR0aCAqICgxIC0gZWFzZSk7XHJcbiAgICAgICAgICAgICAgICBzbmFwT2Zmc2V0WCA9IHRoaXMuX3NjcmVlbi53aWR0aCAqIGVhc2U7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5zbGlkZURpcmVjdGlvbiA9PT0gJ0RPV04nKSB7XHJcbiAgICAgICAgICAgICAgICBvZmZzZXRZID0gdGhpcy5fc2NyZWVuLmhlaWdodCAqICgxIC0gZWFzZSk7XHJcbiAgICAgICAgICAgICAgICBzbmFwT2Zmc2V0WSA9IC10aGlzLl9zY3JlZW4uaGVpZ2h0ICogZWFzZTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnNsaWRlRGlyZWN0aW9uID09PSAnVVAnKSB7XHJcbiAgICAgICAgICAgICAgICBvZmZzZXRZID0gLXRoaXMuX3NjcmVlbi5oZWlnaHQgKiAoMSAtIGVhc2UpO1xyXG4gICAgICAgICAgICAgICAgc25hcE9mZnNldFkgPSB0aGlzLl9zY3JlZW4uaGVpZ2h0ICogZWFzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gRHJhdyB0aGUgc25hcHNob3QgYmVsb3cgdGhlIG5ldyByZW5kZXJpbmdcclxuICAgICAgICBpZiAodGhpcy5pc1NsaWRpbmcpIHtcclxuICAgICAgICAgICAgdGhpcy5fY3R4LmRyYXdJbWFnZSh0aGlzLnNuYXBzaG90Q2FudmFzLCBzbmFwT2Zmc2V0WCwgc25hcE9mZnNldFkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcCA9IHRoaXMubWFpbi5zdGF0ZS5nZXRQbGF5ZXIoKTtcclxuICAgICAgICBjb25zdCByb29tID0gdGhpcy5tYWluLnN0YXRlLm1hcE1hbmFnZXIuY3VycmVudFJvb207XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IGNhbWVyYVggPSBwLnggKyAocC53IC8gMikgLSAodGhpcy5fc2NyZWVuLndpZHRoIC8gMik7XHJcbiAgICAgICAgbGV0IGNhbWVyYVkgPSBwLnkgKyAocC5oIC8gMikgLSAodGhpcy5fc2NyZWVuLmhlaWdodCAvIDIpO1xyXG5cclxuICAgICAgICAvLyBDbGFtcCBDYW1lcmEgdG8gcm9vbSBib3VuZHNcclxuICAgICAgICBpZiAoY2FtZXJhWCA8IDApIGNhbWVyYVggPSAwO1xyXG4gICAgICAgIGlmIChjYW1lcmFZIDwgMCkgY2FtZXJhWSA9IDA7XHJcbiAgICAgICAgaWYgKGNhbWVyYVggKyB0aGlzLl9zY3JlZW4ud2lkdGggPiByb29tLndpZHRoKSBjYW1lcmFYID0gTWF0aC5tYXgoMCwgcm9vbS53aWR0aCAtIHRoaXMuX3NjcmVlbi53aWR0aCk7XHJcbiAgICAgICAgaWYgKGNhbWVyYVkgKyB0aGlzLl9zY3JlZW4uaGVpZ2h0ID4gcm9vbS5oZWlnaHQpIGNhbWVyYVkgPSBNYXRoLm1heCgwLCByb29tLmhlaWdodCAtIHRoaXMuX3NjcmVlbi5oZWlnaHQpO1xyXG5cclxuICAgICAgICB0aGlzLl9jdHguc2F2ZSgpO1xyXG4gICAgICAgIHRoaXMuX2N0eC50cmFuc2xhdGUoLU1hdGguZmxvb3IoY2FtZXJhWCkgKyBNYXRoLmZsb29yKG9mZnNldFgpLCAtTWF0aC5mbG9vcihjYW1lcmFZKSArIE1hdGguZmxvb3Iob2Zmc2V0WSkpO1xyXG5cclxuICAgICAgICBjb25zdCBjdWxsWCA9IGNhbWVyYVggLSBvZmZzZXRYO1xyXG4gICAgICAgIGNvbnN0IGN1bGxZID0gY2FtZXJhWSAtIG9mZnNldFk7XHJcblxyXG4gICAgICAgIHRoaXMubWFpbi5zdGF0ZS5nZXRCYWNrZ3JvdW5kKCkuZm9yRWFjaCgoeDogSUVudGl0eSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoeC5keCArIHguZHcgPCBjdWxsWCB8fCB4LmR4ID4gY3VsbFggKyB0aGlzLl9zY3JlZW4ud2lkdGggfHxcclxuICAgICAgICAgICAgICAgIHguZHkgKyB4LmRoIDwgY3VsbFkgfHwgeC5keSA+IGN1bGxZICsgdGhpcy5fc2NyZWVuLmhlaWdodCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5fc3ByaXRlc1t4LnNwcml0ZV0pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2N0eC5kcmF3SW1hZ2UodGhpcy5fc3ByaXRlc1t4LnNwcml0ZV0sIHguc3gsIHguc3ksIHguc3csIHguc2gsIHguZHgsIHguZHksIHguZHcsIHguZGgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMubWFpbi5zdGF0ZS5nZXRCbG9jaygpLmZvckVhY2goKHg6IElFbnRpdHkpID0+IHtcclxuICAgICAgICAgICAgaWYgKHguZHggKyB4LmR3IDwgY3VsbFggfHwgeC5keCA+IGN1bGxYICsgdGhpcy5fc2NyZWVuLndpZHRoIHx8XHJcbiAgICAgICAgICAgICAgICB4LmR5ICsgeC5kaCA8IGN1bGxZIHx8IHguZHkgPiBjdWxsWSArIHRoaXMuX3NjcmVlbi5oZWlnaHQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuX3Nwcml0ZXNbeC5zcHJpdGVdKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jdHguZHJhd0ltYWdlKHRoaXMuX3Nwcml0ZXNbeC5zcHJpdGVdLCB4LnN4LCB4LnN5LCB4LnN3LCB4LnNoLCB4LmR4LCB4LmR5LCB4LmR3LCB4LmRoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLm1haW4uc3RhdGUubWFwTWFuYWdlci5jdXJyZW50Um9vbS5wb3J0YWxzLmZvckVhY2goKHg6IElFbnRpdHkpID0+IHtcclxuICAgICAgICAgICAgaWYgKHguZHggKyB4LmR3IDwgY3VsbFggfHwgeC5keCA+IGN1bGxYICsgdGhpcy5fc2NyZWVuLndpZHRoIHx8XHJcbiAgICAgICAgICAgICAgICB4LmR5ICsgeC5kaCA8IGN1bGxZIHx8IHguZHkgPiBjdWxsWSArIHRoaXMuX3NjcmVlbi5oZWlnaHQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuX3Nwcml0ZXNbeC5zcHJpdGVdKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jdHguZHJhd0ltYWdlKHRoaXMuX3Nwcml0ZXNbeC5zcHJpdGVdLCB4LnN4LCB4LnN5LCB4LnN3LCB4LnNoLCB4LmR4LCB4LmR5LCB4LmR3LCB4LmRoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5fc3ByaXRlc1swXSkge1xyXG4gICAgICAgICAgICB0aGlzLl9jdHguZHJhd0ltYWdlKHRoaXMuX3Nwcml0ZXNbMF0sIHAuc3hbcC5zeEluZGV4XSwgcC5zeSwgcC53LCBwLmgsIHAueCwgcC55LCBwLncsIHAuaCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9jdHgucmVzdG9yZSgpO1xyXG5cclxuICAgICAgICAvLyBSZW5kZXJpemHDp8OjbyBkbyBibGFjayBvdmVybGF5IGRlIHRyYW5zacOnw6NvIChGYWRpbmcpIGluZGVwZW5kZW50ZSBkYSBDw6JtZXJhXHJcbiAgICAgICAgaWYgKHRoaXMuZmFkZUFscGhhID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLl9jdHguZmlsbFN0eWxlID0gYHJnYmEoMCwgMCwgMCwgJHt0aGlzLmZhZGVBbHBoYX0pYDtcclxuICAgICAgICAgICAgdGhpcy5fY3R4LmZpbGxSZWN0KDAsIDAsIHRoaXMuX3NjcmVlbi53aWR0aCwgdGhpcy5fc2NyZWVuLmhlaWdodCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCB7IE1haW4gfSBmcm9tIFwiLi9tYWluXCI7XHJcblxyXG5pbXBvcnQgeyBNYXBNYW5hZ2VyIH0gZnJvbSBcIi4vbWFuYWdlcnMvbWFwLm1hbmFnZXJcIjtcclxuXHJcbmltcG9ydCB7IElQbGF5ZXIgfSBmcm9tIFwiLi9pbnRlcmZhY2VzL3BsYXllci5pbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgSUVudGl0eSB9IGZyb20gXCIuL2ludGVyZmFjZXMvZW50aXR5LmludGVyZmFjZVwiO1xyXG5cclxuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4vbW9kZWxzL3BsYXllci5tb2RlbFwiO1xyXG5pbXBvcnQgeyBFbnRpdHkgfSBmcm9tIFwiLi9tb2RlbHMvZW50aXR5Lm1vZGVsXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU3RhdGUge1xyXG5cclxuICAgIHByaXZhdGUgX2N1cnJlbnRQbGF5ZXI6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX3BsYXllcnM6IEFycmF5PElQbGF5ZXI+O1xyXG4gICAgXHJcbiAgICBwdWJsaWMgbWFwTWFuYWdlcjogTWFwTWFuYWdlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIG1haW46IE1haW5cclxuICAgICkge1xyXG4gICAgICAgIHRoaXMubWFwTWFuYWdlciA9IG5ldyBNYXBNYW5hZ2VyKHRoaXMubWFpbik7XHJcblxyXG4gICAgICAgIHRoaXMuX3BsYXllcnMgPSBuZXcgQXJyYXk8SVBsYXllcj4oXHJcbiAgICAgICAgICAgIG5ldyBQbGF5ZXIodGhpcy5tYXBNYW5hZ2VyLmN1cnJlbnRSb29tLndpZHRoIC8gMiwgdGhpcy5tYXBNYW5hZ2VyLmN1cnJlbnRSb29tLmhlaWdodCAvIDIsIDI0LCAyNCwgWzAsIDI0LCA0OF0sIDAsIDI0LCAwKVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0Q3VycmVudFBsYXllcigwKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0Q3VycmVudFBsYXllcihwbGF5ZXJJZDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fY3VycmVudFBsYXllciA9IHBsYXllcklkO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGRQbGF5ZXIocGxheWVyOiBJUGxheWVyKSB7XHJcbiAgICAgICAgdGhpcy5fcGxheWVycy5wdXNoKHBsYXllcik7XHJcbiAgICAgICAgdGhpcy5fY3VycmVudFBsYXllciA9IHRoaXMuX3BsYXllcnMubGVuZ3RoID4gMCA/IHRoaXMuX3BsYXllcnMubGVuZ3RoIC0gMSA6IDA7XHJcbiAgICAgICAgdGhpcy5tYWluLnNjcmVlbi5yZW5kZXJTY3JlZW4oKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0UGxheWVyKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9wbGF5ZXJzW3RoaXMuX2N1cnJlbnRQbGF5ZXJdO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRCbG9jaygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tYXBNYW5hZ2VyLmN1cnJlbnRSb29tLmJsb2NrcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0QmFja2dyb3VuZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tYXBNYW5hZ2VyLmN1cnJlbnRSb29tLmJhY2tncm91bmQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVwZGF0ZShkdDogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubWFwTWFuYWdlci5pc1RyYW5zaXRpb25pbmcpIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgcGxheWVyID0gdGhpcy5nZXRQbGF5ZXIoKTtcclxuICAgICAgICBjb25zdCBrZXlzID0gdGhpcy5tYWluLmlucHV0LmFjdGl2ZUtleXM7XHJcbiAgICAgICAgY29uc3Qgcm9vbSA9IHRoaXMubWFwTWFuYWdlci5jdXJyZW50Um9vbTtcclxuXHJcbiAgICAgICAgbGV0IGR4ID0gMDtcclxuICAgICAgICBsZXQgZHkgPSAwO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHNwZWVkID0gMTAwICogZHQ7IC8vIDEwMCBwaXhlbHMgcGVyIHNlY29uZFxyXG5cclxuICAgICAgICAvLyBEZXRlcm1pbmUgaW50ZW5kZWQgbW92ZW1lbnRcclxuICAgICAgICBpZiAoa2V5c1snQXJyb3dVcCddKSB7XHJcbiAgICAgICAgICAgIGR5IC09IHNwZWVkO1xyXG4gICAgICAgICAgICBwbGF5ZXIuc3kgPSAwOyAvLyBTcHJpdGUgcm93IGZvciB1cFxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChrZXlzWydBcnJvd0Rvd24nXSkge1xyXG4gICAgICAgICAgICBkeSArPSBzcGVlZDtcclxuICAgICAgICAgICAgcGxheWVyLnN5ID0gNDg7IC8vIFNwcml0ZSByb3cgZm9yIGRvd25cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoa2V5c1snQXJyb3dMZWZ0J10pIHtcclxuICAgICAgICAgICAgZHggLT0gc3BlZWQ7XHJcbiAgICAgICAgICAgIHBsYXllci5zeSA9IDcyOyAvLyBTcHJpdGUgcm93IGZvciBsZWZ0XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGtleXNbJ0Fycm93UmlnaHQnXSkge1xyXG4gICAgICAgICAgICBkeCArPSBzcGVlZDtcclxuICAgICAgICAgICAgcGxheWVyLnN5ID0gMjQ7IC8vIFNwcml0ZSByb3cgZm9yIHJpZ2h0XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBBcHBseSBtb3ZlbWVudCBpZiB0aGVyZSdzIGFueVxyXG4gICAgICAgIGlmIChkeCAhPT0gMCB8fCBkeSAhPT0gMCkge1xyXG4gICAgICAgICAgICBsZXQgbmV4dFggPSBwbGF5ZXIueCArIGR4O1xyXG4gICAgICAgICAgICBsZXQgbmV4dFkgPSBwbGF5ZXIueSArIGR5O1xyXG5cclxuICAgICAgICAgICAgLy8gQm91bmRhcmllcyBjaGVja1xyXG4gICAgICAgICAgICBpZiAobmV4dFggPCAwKSBuZXh0WCA9IDA7XHJcbiAgICAgICAgICAgIGlmIChuZXh0WSA8IDApIG5leHRZID0gMDtcclxuICAgICAgICAgICAgaWYgKG5leHRYICsgcGxheWVyLncgPiByb29tLndpZHRoKSBuZXh0WCA9IHJvb20ud2lkdGggLSBwbGF5ZXIudztcclxuICAgICAgICAgICAgaWYgKG5leHRZICsgcGxheWVyLmggPiByb29tLmhlaWdodCkgbmV4dFkgPSByb29tLmhlaWdodCAtIHBsYXllci5oO1xyXG5cclxuICAgICAgICAgICAgLy8gQ29sbGlzaW9uIGNoZWNrXHJcbiAgICAgICAgICAgIGxldCBjb2xsaXNpb24gPSBmYWxzZTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBibG9jayBvZiByb29tLmJsb2Nrcykge1xyXG4gICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgIG5leHRYIDwgYmxvY2suZHggKyBibG9jay5kdyAmJlxyXG4gICAgICAgICAgICAgICAgICAgIG5leHRYICsgcGxheWVyLncgPiBibG9jay5keCAmJlxyXG4gICAgICAgICAgICAgICAgICAgIG5leHRZIDwgYmxvY2suZHkgKyBibG9jay5kaCAmJlxyXG4gICAgICAgICAgICAgICAgICAgIG5leHRZICsgcGxheWVyLmggPiBibG9jay5keVxyXG4gICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sbGlzaW9uID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCFjb2xsaXNpb24pIHtcclxuICAgICAgICAgICAgICAgIHBsYXllci54ID0gbmV4dFg7XHJcbiAgICAgICAgICAgICAgICBwbGF5ZXIueSA9IG5leHRZO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyBQb3J0YWwgY2hlY2tcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgcG9ydGFsIG9mIHJvb20ucG9ydGFscykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyLnggPCBwb3J0YWwuZHggKyBwb3J0YWwuZHcgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyLnggKyBwbGF5ZXIudyA+IHBvcnRhbC5keCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXIueSA8IHBvcnRhbC5keSArIHBvcnRhbC5kaCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXIueSArIHBsYXllci5oID4gcG9ydGFsLmR5XHJcbiAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWFwTWFuYWdlci50cmlnZ2VyVHJhbnNpdGlvbihwb3J0YWwsIHBsYXllci54LCBwbGF5ZXIueSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gQW5pbWF0ZSBzcHJpdGUgd2hlbiBtb3ZpbmdcclxuICAgICAgICAgICAgcGxheWVyLnNSZW5kZXJEZWxheSArPSBkdDtcclxuICAgICAgICAgICAgaWYgKHBsYXllci5zUmVuZGVyRGVsYXkgPj0gMC4wNSkge1xyXG4gICAgICAgICAgICAgICAgcGxheWVyLnNSZW5kZXJEZWxheSA9IDA7XHJcbiAgICAgICAgICAgICAgICBpZiAocGxheWVyLnN4SW5kZXggPCAocGxheWVyLnN4Lmxlbmd0aCAtIDEpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyLnN4SW5kZXggKz0gMTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyLnN4SW5kZXggPSAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gUmVzZXQgdG8gaWRsZSBmcmFtZSBpZiBub3QgbW92aW5nXHJcbiAgICAgICAgICAgIHBsYXllci5zeEluZGV4ID0gMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==