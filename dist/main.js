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
        this.state = new _state__WEBPACK_IMPORTED_MODULE_1__["State"](this);
        this.screen = new _screen__WEBPACK_IMPORTED_MODULE_0__["Screen"](this);
        this.input = new _input__WEBPACK_IMPORTED_MODULE_2__["Input"](this);
        // Start the game loop
        requestAnimationFrame(function () { return _this.loop(); });
    }
    Main.prototype.loop = function () {
        var _this = this;
        this.state.update();
        this.screen.renderScreen();
        requestAnimationFrame(function () { return _this.loop(); });
    };
    return Main;
}());

var main = new Main();


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
        this.main = main;
        this._screen = document.getElementById('screen');
        this._ctx = this._screen.getContext('2d');
        this._sprites = new Array();
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
    Screen.prototype.getScreenDimensions = function () {
        return {
            width: this._screen.width,
            height: this._screen.height
        };
    };
    Screen.prototype.renderScreen = function () {
        var _this = this;
        this._ctx.clearRect(0, 0, this._screen.width, this._screen.height);
        this.main.state.getBackground().forEach(function (x) {
            if (_this._sprites[x.sprite]) {
                _this._ctx.drawImage(_this._sprites[x.sprite], x.sx, x.sy, x.sw, x.sh, x.dx, x.dy, x.dw, x.dh);
            }
        });
        this.main.state.getBlock().forEach(function (x) {
            if (_this._sprites[x.sprite]) {
                _this._ctx.drawImage(_this._sprites[x.sprite], x.sx, x.sy, x.sw, x.sh, x.dx, x.dy, x.dw, x.dh);
            }
        });
        var p = this.main.state.getPlayer();
        if (this._sprites[0]) {
            this._ctx.drawImage(this._sprites[0], p.sx[p.sxIndex], p.sy, p.w, p.h, p.x, p.y, p.w, p.h);
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
/* harmony import */ var _models_player_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/player.model */ "./src/models/player.model.ts");
/* harmony import */ var _models_entity_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/entity.model */ "./src/models/entity.model.ts");


var State = /** @class */ (function () {
    function State(main) {
        this.main = main;
        this._players = new Array(new _models_player_model__WEBPACK_IMPORTED_MODULE_0__["Player"](0, 24, 24, 24, [0, 24, 48], 0, 24, 0));
        this._blocks = new Array(new _models_entity_model__WEBPACK_IMPORTED_MODULE_1__["Entity"](1, 0, 16, 32, 80, 100, 100, 32, 80));
        for (var x = 0; x < 384; x += 16) {
            for (var y = 0; y < 384; y += 16) {
                if (Math.floor(Math.random() * 100) === 0)
                    this._blocks.push(new _models_entity_model__WEBPACK_IMPORTED_MODULE_1__["Entity"](1, 48, [128, 144, 180][Math.floor(Math.random() * 3)], 16, 16, x, y, 16, 16));
            }
        }
        for (var x = 0; x < 384; x += 16) {
            for (var y = 0; y < 384; y += 16) {
                if (Math.floor(Math.random() * 100) === 0)
                    this._blocks.push(new _models_entity_model__WEBPACK_IMPORTED_MODULE_1__["Entity"](1, 16, 176, 16, 16, x, y, 16, 16));
            }
        }
        this._background = new Array();
        for (var x = 0; x < 384; x += 16) {
            for (var y = 0; y < 384; y += 16) {
                this._background.push(new _models_entity_model__WEBPACK_IMPORTED_MODULE_1__["Entity"](1, [0, 16, 32][Math.floor(Math.random() * 3)], 160, 16, 16, x, y, 16, 16));
            }
        }
        for (var x = 0; x < 384; x += 16) {
            for (var y = 0; y < 384; y += 16) {
                if (Math.floor(Math.random() * 30) === 0)
                    this._background.push(new _models_entity_model__WEBPACK_IMPORTED_MODULE_1__["Entity"](1, [48, 56][Math.floor(Math.random() * 2)], [160, 168][Math.floor(Math.random() * 2)], 8, 8, x, y, 8, 8));
            }
        }
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
        return this._blocks;
    };
    State.prototype.getBackground = function () {
        return this._background;
    };
    State.prototype.update = function () {
        var player = this.getPlayer();
        var keys = this.main.input.activeKeys;
        var dimensions = this.main.screen.getScreenDimensions();
        var dx = 0;
        var dy = 0;
        // Determine intended movement
        if (keys['ArrowUp']) {
            dy -= 1;
            player.sy = 0; // Sprite row for up
        }
        else if (keys['ArrowDown']) {
            dy += 1;
            player.sy = 48; // Sprite row for down
        }
        else if (keys['ArrowLeft']) {
            dx -= 1;
            player.sy = 72; // Sprite row for left
        }
        else if (keys['ArrowRight']) {
            dx += 1;
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
            if (nextX + player.w > dimensions.width)
                nextX = dimensions.width - player.w;
            if (nextY + player.h > dimensions.height)
                nextY = dimensions.height - player.h;
            // Collision check
            var collision = false;
            for (var _i = 0, _a = this._blocks; _i < _a.length; _i++) {
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
            }
            // Animate sprite when moving
            if (player.sRenderDelay < 3) {
                player.sRenderDelay += 1;
            }
            else {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lucHV0LnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbHMvZW50aXR5Lm1vZGVsLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbHMvcGxheWVyLm1vZGVsLnRzIiwid2VicGFjazovLy8uL3NyYy9zY3JlZW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNoRkE7QUFBQTtBQUFBO0lBSUksZUFDWSxJQUFVO1FBRHRCLGlCQUtDO1FBSlcsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUhkLGdCQUFXLEdBQStCLEVBQUUsQ0FBQztRQUtqRCxRQUFRLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLFVBQUMsRUFBRSxJQUFLLFlBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksRUFBL0IsQ0FBK0IsQ0FBQyxDQUFDO1FBQzlFLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBQyxFQUFFLElBQUssWUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxFQUFoQyxDQUFnQyxDQUFDLENBQUM7SUFDakYsQ0FBQztJQUVELHNCQUFXLDZCQUFVO2FBQXJCO1lBQ0ksT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQzVCLENBQUM7OztPQUFBO0lBRUwsWUFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7O0FDakJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBa0M7QUFDRjtBQUNBLENBQUMsOEJBQThCO0FBRS9EO0lBTUk7UUFBQSxpQkFPQztRQU5HLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSw0Q0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSw4Q0FBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSw0Q0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRTdCLHNCQUFzQjtRQUN0QixxQkFBcUIsQ0FBQyxjQUFNLFlBQUksQ0FBQyxJQUFJLEVBQUUsRUFBWCxDQUFXLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRU8sbUJBQUksR0FBWjtRQUFBLGlCQUlDO1FBSEcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzNCLHFCQUFxQixDQUFDLGNBQU0sWUFBSSxDQUFDLElBQUksRUFBRSxFQUFYLENBQVcsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFDTCxXQUFDO0FBQUQsQ0FBQzs7QUFFRCxJQUFNLElBQUksR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDOzs7Ozs7Ozs7Ozs7O0FDeEJ4QjtBQUFBO0FBQUE7SUFDSSxnQkFDVyxNQUFjLEVBRWQsRUFBVSxFQUNWLEVBQVUsRUFDVixFQUFVLEVBQ1YsRUFBVSxFQUVWLEVBQVUsRUFDVixFQUFVLEVBQ1YsRUFBVSxFQUNWLEVBQVU7UUFWVixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBRWQsT0FBRSxHQUFGLEVBQUUsQ0FBUTtRQUNWLE9BQUUsR0FBRixFQUFFLENBQVE7UUFDVixPQUFFLEdBQUYsRUFBRSxDQUFRO1FBQ1YsT0FBRSxHQUFGLEVBQUUsQ0FBUTtRQUVWLE9BQUUsR0FBRixFQUFFLENBQVE7UUFDVixPQUFFLEdBQUYsRUFBRSxDQUFRO1FBQ1YsT0FBRSxHQUFGLEVBQUUsQ0FBUTtRQUNWLE9BQUUsR0FBRixFQUFFLENBQVE7SUFHckIsQ0FBQztJQUNMLGFBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7OztBQ2hCRDtBQUFBO0FBQUE7SUFDSSxnQkFDVyxDQUFTLEVBQ1QsQ0FBUyxFQUNULENBQVMsRUFDVCxDQUFTLEVBQ1QsRUFBaUIsRUFDakIsT0FBZSxFQUNmLEVBQVUsRUFDVixZQUFvQjtRQVBwQixNQUFDLEdBQUQsQ0FBQyxDQUFRO1FBQ1QsTUFBQyxHQUFELENBQUMsQ0FBUTtRQUNULE1BQUMsR0FBRCxDQUFDLENBQVE7UUFDVCxNQUFDLEdBQUQsQ0FBQyxDQUFRO1FBQ1QsT0FBRSxHQUFGLEVBQUUsQ0FBZTtRQUNqQixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQ2YsT0FBRSxHQUFGLEVBQUUsQ0FBUTtRQUNWLGlCQUFZLEdBQVosWUFBWSxDQUFRO0lBRy9CLENBQUM7SUFDTCxhQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZEO0lBTUksZ0JBQ1ksSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07UUFFbEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBc0IsQ0FBQztRQUN0RSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxLQUFLLEVBQW9CLENBQUM7UUFFOUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDO1lBQ3JCLDRCQUE0QjtZQUM1QixrQ0FBa0M7U0FDckMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVLLG9DQUFtQixHQUF6QixVQUEwQixHQUFhOzs7Ozs7OEJBQ2hCLEVBQUgsV0FBRzs7OzZCQUFILGtCQUFHO3dCQUFSLENBQUM7d0JBQ1IscUJBQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7O3dCQUF2QixTQUF1QixDQUFDOzs7d0JBRFosSUFBRzs7O3dCQUduQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7Ozs7O0tBQ3ZCO0lBRU8sMEJBQVMsR0FBakIsVUFBa0IsR0FBVztRQUE3QixpQkFRQztRQVBHLE9BQU8sSUFBSSxPQUFPLENBQUMsaUJBQU87WUFDdEIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1lBQ2hDLEtBQUksQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztZQUNsRCxLQUFJLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRztnQkFDN0MsT0FBTyxFQUFFLENBQUM7WUFDZCxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU0sb0NBQW1CLEdBQTFCO1FBQ0ksT0FBTztZQUNILEtBQUssRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUs7WUFDekIsTUFBTSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTTtTQUM5QixDQUFDO0lBQ04sQ0FBQztJQUVNLDZCQUFZLEdBQW5CO1FBQUEsaUJBbUJDO1FBbEJHLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVuRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsQ0FBQyxPQUFPLENBQUMsVUFBQyxDQUFVO1lBQy9DLElBQUksS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUU7Z0JBQ3pCLEtBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQ2hHO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxPQUFPLENBQUMsVUFBQyxDQUFVO1lBQzFDLElBQUksS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUU7Z0JBQ3pCLEtBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQ2hHO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUN0QyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDOUY7SUFDTCxDQUFDO0lBRUwsYUFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7O0FDaEVEO0FBQUE7QUFBQTtBQUFBO0FBQStDO0FBQ0E7QUFFL0M7SUFPSSxlQUNZLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO1FBRWxCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxLQUFLLENBQ3JCLElBQUksMkRBQU0sQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQ25ELENBQUM7UUFFRixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksS0FBSyxDQUNwQixJQUFJLDJEQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FDakQsQ0FBQztRQUNGLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRTtZQUM5QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUU7Z0JBQzlCLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQztvQkFDckMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSwyREFBTSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQzthQUNqSDtTQUNKO1FBRUQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFO1lBQzlCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRTtnQkFDOUIsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDO29CQUNyQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLDJEQUFNLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQzthQUN0RTtTQUNKO1FBRUQsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLEtBQUssRUFBVyxDQUFDO1FBQ3hDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRTtZQUM5QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUU7Z0JBQzlCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksMkRBQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7YUFDOUc7U0FDSjtRQUVELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRTtZQUM5QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUU7Z0JBQzlCLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQztvQkFDcEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSwyREFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FB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LG9DQUFvQztZQUNwQyxNQUFNLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztTQUN0QjtJQUNMLENBQUM7SUFFTCxZQUFDO0FBQUQsQ0FBQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvbWFpbi50c1wiKTtcbiIsImltcG9ydCB7IE1haW4gfSBmcm9tIFwiLi9tYWluXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgSW5wdXQge1xyXG5cclxuICAgIHByaXZhdGUgX2FjdGl2ZUtleXM6IHsgW2tleTogc3RyaW5nXTogYm9vbGVhbiB9ID0ge307XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBtYWluOiBNYWluXHJcbiAgICApIHtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2KSA9PiB0aGlzLl9hY3RpdmVLZXlzW2V2LmtleV0gPSB0cnVlKTtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChldikgPT4gdGhpcy5fYWN0aXZlS2V5c1tldi5rZXldID0gZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgYWN0aXZlS2V5cygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYWN0aXZlS2V5cztcclxuICAgIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgU2NyZWVuIH0gZnJvbSBcIi4vc2NyZWVuXCI7XHJcbmltcG9ydCB7IFN0YXRlIH0gZnJvbSBcIi4vc3RhdGVcIjtcclxuaW1wb3J0IHsgSW5wdXQgfSBmcm9tIFwiLi9pbnB1dFwiOyAvLyBOb3RpY2UgdGhlIGNvcnJlY3RlZCBpbXBvcnRcclxuXHJcbmV4cG9ydCBjbGFzcyBNYWluIHtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGU6IFN0YXRlO1xyXG4gICAgcHVibGljIHNjcmVlbjogU2NyZWVuO1xyXG4gICAgcHVibGljIGlucHV0OiBJbnB1dDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnN0YXRlID0gbmV3IFN0YXRlKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuc2NyZWVuID0gbmV3IFNjcmVlbih0aGlzKTtcclxuICAgICAgICB0aGlzLmlucHV0ID0gbmV3IElucHV0KHRoaXMpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFN0YXJ0IHRoZSBnYW1lIGxvb3BcclxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gdGhpcy5sb29wKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbG9vcCgpIHtcclxuICAgICAgICB0aGlzLnN0YXRlLnVwZGF0ZSgpO1xyXG4gICAgICAgIHRoaXMuc2NyZWVuLnJlbmRlclNjcmVlbigpO1xyXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB0aGlzLmxvb3AoKSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IG1haW4gPSBuZXcgTWFpbigpOyIsImltcG9ydCB7IElFbnRpdHkgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9lbnRpdHkuaW50ZXJmYWNlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRW50aXR5IGltcGxlbWVudHMgSUVudGl0eSB7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwdWJsaWMgc3ByaXRlOiBudW1iZXIsXHJcblxyXG4gICAgICAgIHB1YmxpYyBzeDogbnVtYmVyLFxyXG4gICAgICAgIHB1YmxpYyBzeTogbnVtYmVyLFxyXG4gICAgICAgIHB1YmxpYyBzdzogbnVtYmVyLFxyXG4gICAgICAgIHB1YmxpYyBzaDogbnVtYmVyLFxyXG4gICAgXHJcbiAgICAgICAgcHVibGljIGR4OiBudW1iZXIsXHJcbiAgICAgICAgcHVibGljIGR5OiBudW1iZXIsXHJcbiAgICAgICAgcHVibGljIGR3OiBudW1iZXIsXHJcbiAgICAgICAgcHVibGljIGRoOiBudW1iZXJcclxuICAgICkge1xyXG5cclxuICAgIH1cclxufSIsImltcG9ydCB7IElQbGF5ZXIgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9wbGF5ZXIuaW50ZXJmYWNlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUGxheWVyIGltcGxlbWVudHMgSVBsYXllciB7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwdWJsaWMgeDogbnVtYmVyLFxyXG4gICAgICAgIHB1YmxpYyB5OiBudW1iZXIsXHJcbiAgICAgICAgcHVibGljIHc6IG51bWJlcixcclxuICAgICAgICBwdWJsaWMgaDogbnVtYmVyLFxyXG4gICAgICAgIHB1YmxpYyBzeDogQXJyYXk8bnVtYmVyPixcclxuICAgICAgICBwdWJsaWMgc3hJbmRleDogbnVtYmVyLFxyXG4gICAgICAgIHB1YmxpYyBzeTogbnVtYmVyLFxyXG4gICAgICAgIHB1YmxpYyBzUmVuZGVyRGVsYXk6IG51bWJlclxyXG4gICAgKSB7XHJcblxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgTWFpbiB9IGZyb20gXCIuL21haW5cIjtcclxuXHJcbmltcG9ydCB7IElQbGF5ZXIgfSBmcm9tIFwiLi9pbnRlcmZhY2VzL3BsYXllci5pbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgSUVudGl0eSB9IGZyb20gXCIuL2ludGVyZmFjZXMvZW50aXR5LmludGVyZmFjZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNjcmVlbiB7XHJcblxyXG4gICAgcHJpdmF0ZSBfc2NyZWVuOiBIVE1MQ2FudmFzRWxlbWVudDtcclxuICAgIHByaXZhdGUgX2N0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xyXG4gICAgcHJpdmF0ZSBfc3ByaXRlczogQXJyYXk8SFRNTEltYWdlRWxlbWVudD47XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBtYWluOiBNYWluXHJcbiAgICApIHtcclxuICAgICAgICB0aGlzLl9zY3JlZW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2NyZWVuJykgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5fY3R4ID0gdGhpcy5fc2NyZWVuLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgICAgdGhpcy5fc3ByaXRlcyA9IG5ldyBBcnJheTxIVE1MSW1hZ2VFbGVtZW50PigpO1xyXG5cclxuICAgICAgICB0aGlzLmFkZFNwcml0ZUNvbGxlY3Rpb24oW1xyXG4gICAgICAgICAgICAnYXNzZXRzL2ltYWdlcy9MaW5rV2Fsay5wbmcnLFxyXG4gICAgICAgICAgICAnYXNzZXRzL2ltYWdlcy9aZWxkYTFNaW5pc2gwMS5wbmcnXHJcbiAgICAgICAgXSk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgYWRkU3ByaXRlQ29sbGVjdGlvbihzcmM6IHN0cmluZ1tdKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCB4IG9mIHNyYykge1xyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLmFkZFNwcml0ZSh4KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5yZW5kZXJTY3JlZW4oKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFkZFNwcml0ZShzcmM6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fc3ByaXRlcy5wdXNoKG5ldyBJbWFnZSgpKTtcclxuICAgICAgICAgICAgdGhpcy5fc3ByaXRlc1t0aGlzLl9zcHJpdGVzLmxlbmd0aCAtIDFdLnNyYyA9IHNyYztcclxuICAgICAgICAgICAgdGhpcy5fc3ByaXRlc1t0aGlzLl9zcHJpdGVzLmxlbmd0aCAtIDFdLm9ubG9hZCA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRTY3JlZW5EaW1lbnNpb25zKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiB0aGlzLl9zY3JlZW4ud2lkdGgsXHJcbiAgICAgICAgICAgIGhlaWdodDogdGhpcy5fc2NyZWVuLmhlaWdodFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlbmRlclNjcmVlbigpIHtcclxuICAgICAgICB0aGlzLl9jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuX3NjcmVlbi53aWR0aCwgdGhpcy5fc2NyZWVuLmhlaWdodCk7XHJcblxyXG4gICAgICAgIHRoaXMubWFpbi5zdGF0ZS5nZXRCYWNrZ3JvdW5kKCkuZm9yRWFjaCgoeDogSUVudGl0eSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fc3ByaXRlc1t4LnNwcml0ZV0pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2N0eC5kcmF3SW1hZ2UodGhpcy5fc3ByaXRlc1t4LnNwcml0ZV0sIHguc3gsIHguc3ksIHguc3csIHguc2gsIHguZHgsIHguZHksIHguZHcsIHguZGgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMubWFpbi5zdGF0ZS5nZXRCbG9jaygpLmZvckVhY2goKHg6IElFbnRpdHkpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX3Nwcml0ZXNbeC5zcHJpdGVdKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jdHguZHJhd0ltYWdlKHRoaXMuX3Nwcml0ZXNbeC5zcHJpdGVdLCB4LnN4LCB4LnN5LCB4LnN3LCB4LnNoLCB4LmR4LCB4LmR5LCB4LmR3LCB4LmRoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zdCBwID0gdGhpcy5tYWluLnN0YXRlLmdldFBsYXllcigpO1xyXG4gICAgICAgIGlmICh0aGlzLl9zcHJpdGVzWzBdKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2N0eC5kcmF3SW1hZ2UodGhpcy5fc3ByaXRlc1swXSwgcC5zeFtwLnN4SW5kZXhdLCBwLnN5LCBwLncsIHAuaCwgcC54LCBwLnksIHAudywgcC5oKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IHsgTWFpbiB9IGZyb20gXCIuL21haW5cIjtcclxuXHJcbmltcG9ydCB7IElQbGF5ZXIgfSBmcm9tIFwiLi9pbnRlcmZhY2VzL3BsYXllci5pbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgSUVudGl0eSB9IGZyb20gXCIuL2ludGVyZmFjZXMvZW50aXR5LmludGVyZmFjZVwiO1xyXG5cclxuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4vbW9kZWxzL3BsYXllci5tb2RlbFwiO1xyXG5pbXBvcnQgeyBFbnRpdHkgfSBmcm9tIFwiLi9tb2RlbHMvZW50aXR5Lm1vZGVsXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU3RhdGUge1xyXG5cclxuICAgIHByaXZhdGUgX2N1cnJlbnRQbGF5ZXI6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX3BsYXllcnM6IEFycmF5PElQbGF5ZXI+O1xyXG4gICAgcHJpdmF0ZSBfYmxvY2tzOiBBcnJheTxJRW50aXR5PjtcclxuICAgIHByaXZhdGUgX2JhY2tncm91bmQ6IEFycmF5PElFbnRpdHk+O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgbWFpbjogTWFpblxyXG4gICAgKSB7XHJcbiAgICAgICAgdGhpcy5fcGxheWVycyA9IG5ldyBBcnJheTxJUGxheWVyPihcclxuICAgICAgICAgICAgbmV3IFBsYXllcigwLCAyNCwgMjQsIDI0LCBbMCwgMjQsIDQ4XSwgMCwgMjQsIDApXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgdGhpcy5fYmxvY2tzID0gbmV3IEFycmF5PElFbnRpdHk+KFxyXG4gICAgICAgICAgICBuZXcgRW50aXR5KDEsIDAsIDE2LCAzMiwgODAsIDEwMCwgMTAwLCAzMiwgODApXHJcbiAgICAgICAgKTtcclxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IDM4NDsgeCArPSAxNikge1xyXG4gICAgICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IDM4NDsgeSArPSAxNikge1xyXG4gICAgICAgICAgICAgICAgaWYgKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMCkgPT09IDApXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fYmxvY2tzLnB1c2gobmV3IEVudGl0eSgxLCA0OCwgWzEyOCwgMTQ0LCAxODBdW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDMpXSwgMTYsIDE2LCB4LCB5LCAxNiwgMTYpKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IDM4NDsgeCArPSAxNikge1xyXG4gICAgICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IDM4NDsgeSArPSAxNikge1xyXG4gICAgICAgICAgICAgICAgaWYgKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMCkgPT09IDApXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fYmxvY2tzLnB1c2gobmV3IEVudGl0eSgxLCAxNiwgMTc2LCAxNiwgMTYsIHgsIHksIDE2LCAxNikpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX2JhY2tncm91bmQgPSBuZXcgQXJyYXk8SUVudGl0eT4oKTtcclxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IDM4NDsgeCArPSAxNikge1xyXG4gICAgICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IDM4NDsgeSArPSAxNikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fYmFja2dyb3VuZC5wdXNoKG5ldyBFbnRpdHkoMSwgWzAsIDE2LCAzMl1bTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMyldLCAxNjAsIDE2LCAxNiwgeCwgeSwgMTYsIDE2KSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCAzODQ7IHggKz0gMTYpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCAzODQ7IHkgKz0gMTYpIHtcclxuICAgICAgICAgICAgICAgIGlmIChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAzMCkgPT09IDApXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fYmFja2dyb3VuZC5wdXNoKG5ldyBFbnRpdHkoMSwgWzQ4LCA1Nl1bTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMildLCBbMTYwLCAxNjhdW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpXSwgOCwgOCwgeCwgeSwgOCwgOCkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2V0Q3VycmVudFBsYXllcigwKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0Q3VycmVudFBsYXllcihwbGF5ZXJJZDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fY3VycmVudFBsYXllciA9IHBsYXllcklkO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGRQbGF5ZXIocGxheWVyOiBJUGxheWVyKSB7XHJcbiAgICAgICAgdGhpcy5fcGxheWVycy5wdXNoKHBsYXllcik7XHJcbiAgICAgICAgdGhpcy5fY3VycmVudFBsYXllciA9IHRoaXMuX3BsYXllcnMubGVuZ3RoID4gMCA/IHRoaXMuX3BsYXllcnMubGVuZ3RoIC0gMSA6IDA7XHJcbiAgICAgICAgdGhpcy5tYWluLnNjcmVlbi5yZW5kZXJTY3JlZW4oKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0UGxheWVyKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9wbGF5ZXJzW3RoaXMuX2N1cnJlbnRQbGF5ZXJdO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRCbG9jaygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYmxvY2tzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRCYWNrZ3JvdW5kKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9iYWNrZ3JvdW5kO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cGRhdGUoKSB7XHJcbiAgICAgICAgY29uc3QgcGxheWVyID0gdGhpcy5nZXRQbGF5ZXIoKTtcclxuICAgICAgICBjb25zdCBrZXlzID0gdGhpcy5tYWluLmlucHV0LmFjdGl2ZUtleXM7XHJcbiAgICAgICAgY29uc3QgZGltZW5zaW9ucyA9IHRoaXMubWFpbi5zY3JlZW4uZ2V0U2NyZWVuRGltZW5zaW9ucygpO1xyXG5cclxuICAgICAgICBsZXQgZHggPSAwO1xyXG4gICAgICAgIGxldCBkeSA9IDA7XHJcblxyXG4gICAgICAgIC8vIERldGVybWluZSBpbnRlbmRlZCBtb3ZlbWVudFxyXG4gICAgICAgIGlmIChrZXlzWydBcnJvd1VwJ10pIHtcclxuICAgICAgICAgICAgZHkgLT0gMTtcclxuICAgICAgICAgICAgcGxheWVyLnN5ID0gMDsgLy8gU3ByaXRlIHJvdyBmb3IgdXBcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoa2V5c1snQXJyb3dEb3duJ10pIHtcclxuICAgICAgICAgICAgZHkgKz0gMTtcclxuICAgICAgICAgICAgcGxheWVyLnN5ID0gNDg7IC8vIFNwcml0ZSByb3cgZm9yIGRvd25cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoa2V5c1snQXJyb3dMZWZ0J10pIHtcclxuICAgICAgICAgICAgZHggLT0gMTtcclxuICAgICAgICAgICAgcGxheWVyLnN5ID0gNzI7IC8vIFNwcml0ZSByb3cgZm9yIGxlZnRcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoa2V5c1snQXJyb3dSaWdodCddKSB7XHJcbiAgICAgICAgICAgIGR4ICs9IDE7XHJcbiAgICAgICAgICAgIHBsYXllci5zeSA9IDI0OyAvLyBTcHJpdGUgcm93IGZvciByaWdodFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQXBwbHkgbW92ZW1lbnQgaWYgdGhlcmUncyBhbnlcclxuICAgICAgICBpZiAoZHggIT09IDAgfHwgZHkgIT09IDApIHtcclxuICAgICAgICAgICAgbGV0IG5leHRYID0gcGxheWVyLnggKyBkeDtcclxuICAgICAgICAgICAgbGV0IG5leHRZID0gcGxheWVyLnkgKyBkeTtcclxuXHJcbiAgICAgICAgICAgIC8vIEJvdW5kYXJpZXMgY2hlY2tcclxuICAgICAgICAgICAgaWYgKG5leHRYIDwgMCkgbmV4dFggPSAwO1xyXG4gICAgICAgICAgICBpZiAobmV4dFkgPCAwKSBuZXh0WSA9IDA7XHJcbiAgICAgICAgICAgIGlmIChuZXh0WCArIHBsYXllci53ID4gZGltZW5zaW9ucy53aWR0aCkgbmV4dFggPSBkaW1lbnNpb25zLndpZHRoIC0gcGxheWVyLnc7XHJcbiAgICAgICAgICAgIGlmIChuZXh0WSArIHBsYXllci5oID4gZGltZW5zaW9ucy5oZWlnaHQpIG5leHRZID0gZGltZW5zaW9ucy5oZWlnaHQgLSBwbGF5ZXIuaDtcclxuXHJcbiAgICAgICAgICAgIC8vIENvbGxpc2lvbiBjaGVja1xyXG4gICAgICAgICAgICBsZXQgY29sbGlzaW9uID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgYmxvY2sgb2YgdGhpcy5fYmxvY2tzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgbmV4dFggPCBibG9jay5keCArIGJsb2NrLmR3ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgbmV4dFggKyBwbGF5ZXIudyA+IGJsb2NrLmR4ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgbmV4dFkgPCBibG9jay5keSArIGJsb2NrLmRoICYmXHJcbiAgICAgICAgICAgICAgICAgICAgbmV4dFkgKyBwbGF5ZXIuaCA+IGJsb2NrLmR5XHJcbiAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xsaXNpb24gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIWNvbGxpc2lvbikge1xyXG4gICAgICAgICAgICAgICAgcGxheWVyLnggPSBuZXh0WDtcclxuICAgICAgICAgICAgICAgIHBsYXllci55ID0gbmV4dFk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIEFuaW1hdGUgc3ByaXRlIHdoZW4gbW92aW5nXHJcbiAgICAgICAgICAgIGlmIChwbGF5ZXIuc1JlbmRlckRlbGF5IDwgMykge1xyXG4gICAgICAgICAgICAgICAgcGxheWVyLnNSZW5kZXJEZWxheSArPSAxO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcGxheWVyLnNSZW5kZXJEZWxheSA9IDA7XHJcbiAgICAgICAgICAgICAgICBpZiAocGxheWVyLnN4SW5kZXggPCAocGxheWVyLnN4Lmxlbmd0aCAtIDEpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyLnN4SW5kZXggKz0gMTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyLnN4SW5kZXggPSAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gUmVzZXQgdG8gaWRsZSBmcmFtZSBpZiBub3QgbW92aW5nXHJcbiAgICAgICAgICAgIHBsYXllci5zeEluZGV4ID0gMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==