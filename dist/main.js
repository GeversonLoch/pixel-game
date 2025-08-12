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

/***/ "./src/imput.ts":
/*!**********************!*\
  !*** ./src/imput.ts ***!
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
        document.addEventListener('keydown', function (ev) { return _this.movePlayer(ev.key); });
        var dimensions = this.main.screen.getScreenDimensions();
        this._moveFunctions = Object({
            ArrowUp: function (player) {
                player.sy = 0;
                if ((player.y - 1) >= 0)
                    player.y -= 1;
            },
            ArrowDown: function (player) {
                player.sy = 48;
                if ((player.y + 1) < dimensions.height)
                    player.y += 1;
            },
            ArrowRight: function (player) {
                player.sy = 24;
                if ((player.x + 1) < dimensions.width)
                    player.x += 1;
            },
            ArrowLeft: function (player) {
                player.sy = 72;
                if ((player.x - 1) >= 0)
                    player.x -= 1;
            }
        });
    }
    Input.prototype.movePlayer = function (key) {
        if (this.checkCollision() !== key) {
            // @ts-ignore
            if (this._moveFunctions[key])
                this._moveFunctions[key](this.main.state.getPlayer());
        }
    };
    Input.prototype.checkCollision = function () {
        var collisionDirection;
        var player = this.main.state.getPlayer();
        this.main.state.getBlock().forEach(function (block) {
            if ((player.x + player.w) === block.dx
                && (player.y + player.h) >= block.dy
                && (block.dy + block.dh) > player.y)
                collisionDirection = 'ArrowRight';
            if ((block.dx + block.dw) === player.x
                && (player.y + player.w) >= block.dy
                && (block.dy + block.dh) > player.y)
                collisionDirection = 'ArrowLeft';
            if ((player.y + player.h) === block.dy
                && (player.x + player.w) >= block.dx
                && (block.dx + block.dw) > player.x)
                collisionDirection = 'ArrowDown';
            if ((block.dy + block.dh) === player.y
                && (player.x + player.w) >= block.dx
                && (block.dx + block.dw) > player.x)
                collisionDirection = 'ArrowUp';
        });
        return collisionDirection;
    };
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
/* harmony import */ var _imput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./imput */ "./src/imput.ts");



var Main = /** @class */ (function () {
    function Main() {
        this.state = new _state__WEBPACK_IMPORTED_MODULE_1__["State"](this);
        this.screen = new _screen__WEBPACK_IMPORTED_MODULE_0__["Screen"](this);
        this.input = new _imput__WEBPACK_IMPORTED_MODULE_2__["Input"](this);
    }
    Main.prototype.gameLoop = function () {
        this.state.update();
        this.screen.renderScreen();
        requestAnimationFrame(this.gameLoop.bind(this));
    };
    return Main;
}());

var main = new Main();
main.gameLoop();


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
            _this._ctx.drawImage(_this._sprites[x.sprite], x.sx, x.sy, x.sw, x.sh, x.dx, x.dy, x.dw, x.dh);
        });
        this.main.state.getBlock().forEach(function (x) {
            _this._ctx.drawImage(_this._sprites[x.sprite], x.sx, x.sy, x.sw, x.sh, x.dx, x.dy, x.dw, x.dh);
        });
        var p = this.main.state.getPlayer();
        this._ctx.drawImage(this._sprites[0], p.sx[p.sxIndex], p.sy, p.w, p.h, p.x, p.y, p.w, p.h);
        // requestAnimationFrame(() => this.renderScreen);
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
        var p = this.getPlayer();
        if (p.sRenderDelay < 3) {
            p.sRenderDelay += 1;
        }
        else {
            p.sRenderDelay = 0;
            if (p.sxIndex < (p.sx.length - 1)) {
                p.sxIndex += 1;
            }
            else {
                p.sxIndex = 0;
            }
        }
    };
    return State;
}());



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltcHV0LnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbHMvZW50aXR5Lm1vZGVsLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbHMvcGxheWVyLm1vZGVsLnRzIiwid2VicGFjazovLy8uL3NyYy9zY3JlZW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM3RUE7QUFBQTtBQUFBO0lBSUksZUFDWSxJQUFVO1FBRHRCLGlCQTRCQztRQTNCVyxTQUFJLEdBQUosSUFBSSxDQUFNO1FBRWxCLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsVUFBQyxFQUFFLElBQUssWUFBSSxDQUFDLFVB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Q0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFO1lBQzlCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRTtnQkFDOUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSwyREFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQzthQUM5RztTQUNKO1FBRUQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFO1lBQzlCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRTtnQkFDOUIsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDO29CQUNwQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLDJEQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQ2pKO1NBQ0o7UUFFRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVNLGdDQUFnQixHQUF2QixVQUF3QixRQUFnQjtRQUNwQyxJQUFJLENBQUMsY0FBYyxHQUFHLFFBQVEsQ0FBQztJQUNuQyxDQUFDO0lBRU0seUJBQVMsR0FBaEIsVUFBaUIsTUFBZTtRQUM1QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbEYsQ0FBQztJQUVNLHlCQUFTLEdBQWhCO1FBQ0ksT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRU0sd0JBQVEsR0FBZjtRQUNJLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN4QixDQUFDO0lBRU0sNkJBQWEsR0FBcEI7UUFDSSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDNUIsQ0FBQztJQUVNLHNCQUFNLEdBQWI7UUFDSSxJQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLENBQUMsWUFBWSxHQUFHLENBQUMsRUFBRTtZQUNwQixDQUFDLENBQUMsWUFBWSxJQUFJLENBQUMsQ0FBQztTQUN2QjthQUFNO1lBQ0gsQ0FBQyxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7WUFFbkIsSUFBSSxDQUFDLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEVBQUU7Z0JBQy9CLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDO2FBQ2xCO2lCQUFNO2dCQUNILENBQUMsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO2FBQ2pCO1NBQ0o7SUFDTCxDQUFDO0lBRUwsWUFBQztBQUFELENBQUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL21haW4udHNcIik7XG4iLCJpbXBvcnQgeyBNYWluIH0gZnJvbSBcIi4vbWFpblwiO1xyXG5cclxuaW1wb3J0IHsgSVBsYXllciB9IGZyb20gXCIuL2ludGVyZmFjZXMvcGxheWVyLmludGVyZmFjZVwiO1xyXG5pbXBvcnQgeyBJRW50aXR5IH0gZnJvbSBcIi4vaW50ZXJmYWNlcy9lbnRpdHkuaW50ZXJmYWNlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgSW5wdXQge1xyXG5cclxuICAgIHByaXZhdGUgX21vdmVGdW5jdGlvbnM6IG9iamVjdDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIG1haW46IE1haW5cclxuICAgICkge1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXYpID0+IHRoaXMubW92ZVBsYXllcihldi5rZXkpKTtcclxuXHJcbiAgICAgICAgY29uc3QgZGltZW5zaW9ucyA9IHRoaXMubWFpbi5zY3JlZW4uZ2V0U2NyZWVuRGltZW5zaW9ucygpO1xyXG5cclxuICAgICAgICB0aGlzLl9tb3ZlRnVuY3Rpb25zID0gT2JqZWN0KHtcclxuICAgICAgICAgICAgQXJyb3dVcChwbGF5ZXI6IElQbGF5ZXIpIHtcclxuICAgICAgICAgICAgICAgIHBsYXllci5zeSA9IDA7XHJcbiAgICAgICAgICAgICAgICBpZiAoKHBsYXllci55IC0gMSkgPj0gMCkgcGxheWVyLnkgLT0gMTtcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIEFycm93RG93bihwbGF5ZXI6IElQbGF5ZXIpIHtcclxuICAgICAgICAgICAgICAgIHBsYXllci5zeSA9IDQ4O1xyXG4gICAgICAgICAgICAgICAgaWYgKChwbGF5ZXIueSArIDEpIDwgZGltZW5zaW9ucy5oZWlnaHQpIHBsYXllci55ICs9IDE7XHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICBBcnJvd1JpZ2h0KHBsYXllcjogSVBsYXllcikge1xyXG4gICAgICAgICAgICAgICAgcGxheWVyLnN5ID0gMjQ7XHJcbiAgICAgICAgICAgICAgICBpZiAoKHBsYXllci54ICsgMSkgPCBkaW1lbnNpb25zLndpZHRoKSBwbGF5ZXIueCArPSAxO1xyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgQXJyb3dMZWZ0KHBsYXllcjogSVBsYXllcikge1xyXG4gICAgICAgICAgICAgICAgcGxheWVyLnN5ID0gNzI7XHJcbiAgICAgICAgICAgICAgICBpZiAoKHBsYXllci54IC0gMSkgPj0gMCkgcGxheWVyLnggLT0gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG1vdmVQbGF5ZXIoa2V5OiBhbnkpIHtcclxuICAgICAgICBpZiAodGhpcy5jaGVja0NvbGxpc2lvbigpICE9PSBrZXkpIHtcclxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICBpZiAodGhpcy5fbW92ZUZ1bmN0aW9uc1trZXldKSB0aGlzLl9tb3ZlRnVuY3Rpb25zW2tleV0odGhpcy5tYWluLnN0YXRlLmdldFBsYXllcigpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tDb2xsaXNpb24oKSB7XHJcbiAgICAgICAgbGV0IGNvbGxpc2lvbkRpcmVjdGlvbjogc3RyaW5nO1xyXG4gICAgICAgIGNvbnN0IHBsYXllciA9IHRoaXMubWFpbi5zdGF0ZS5nZXRQbGF5ZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy5tYWluLnN0YXRlLmdldEJsb2NrKCkuZm9yRWFjaCgoYmxvY2s6IElFbnRpdHkpID0+IHtcclxuXHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIChwbGF5ZXIueCArIHBsYXllci53KSA9PT0gYmxvY2suZHhcclxuICAgICAgICAgICAgICAgICYmIChwbGF5ZXIueSArIHBsYXllci5oKSA+PSBibG9jay5keVxyXG4gICAgICAgICAgICAgICAgJiYgKGJsb2NrLmR5ICsgYmxvY2suZGgpID4gcGxheWVyLnlcclxuICAgICAgICAgICAgKSBjb2xsaXNpb25EaXJlY3Rpb24gPSAnQXJyb3dSaWdodCc7XHJcblxyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAoYmxvY2suZHggKyBibG9jay5kdykgPT09IHBsYXllci54XHJcbiAgICAgICAgICAgICAgICAmJiAocGxheWVyLnkgKyBwbGF5ZXIudykgPj0gYmxvY2suZHlcclxuICAgICAgICAgICAgICAgICYmIChibG9jay5keSArIGJsb2NrLmRoKSA+IHBsYXllci55XHJcbiAgICAgICAgICAgICkgY29sbGlzaW9uRGlyZWN0aW9uID0gJ0Fycm93TGVmdCc7XHJcblxyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAocGxheWVyLnkgKyBwbGF5ZXIuaCkgPT09IGJsb2NrLmR5XHJcbiAgICAgICAgICAgICAgICAmJiAocGxheWVyLnggKyBwbGF5ZXIudykgPj0gYmxvY2suZHhcclxuICAgICAgICAgICAgICAgICYmIChibG9jay5keCArIGJsb2NrLmR3KSA+IHBsYXllci54XHJcbiAgICAgICAgICAgICkgY29sbGlzaW9uRGlyZWN0aW9uID0gJ0Fycm93RG93bic7XHJcblxyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAoYmxvY2suZHkgKyBibG9jay5kaCkgPT09IHBsYXllci55XHJcbiAgICAgICAgICAgICAgICAmJiAocGxheWVyLnggKyBwbGF5ZXIudykgPj0gYmxvY2suZHhcclxuICAgICAgICAgICAgICAgICYmIChibG9jay5keCArIGJsb2NrLmR3KSA+IHBsYXllci54XHJcbiAgICAgICAgICAgICkgY29sbGlzaW9uRGlyZWN0aW9uID0gJ0Fycm93VXAnO1xyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGNvbGxpc2lvbkRpcmVjdGlvbjtcclxuICAgIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgU2NyZWVuIH0gZnJvbSBcIi4vc2NyZWVuXCI7XHJcbmltcG9ydCB7IFN0YXRlIH0gZnJvbSBcIi4vc3RhdGVcIjtcclxuaW1wb3J0IHsgSW5wdXQgfSBmcm9tIFwiLi9pbXB1dFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1haW4ge1xyXG5cclxuICAgIHB1YmxpYyBzdGF0ZTogU3RhdGU7XHJcbiAgICBwdWJsaWMgc2NyZWVuOiBTY3JlZW47XHJcbiAgICBwdWJsaWMgaW5wdXQ6IElucHV0O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBuZXcgU3RhdGUodGhpcyk7XHJcbiAgICAgICAgdGhpcy5zY3JlZW4gPSBuZXcgU2NyZWVuKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuaW5wdXQgPSBuZXcgSW5wdXQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdhbWVMb29wKCkge1xyXG4gICAgICAgIHRoaXMuc3RhdGUudXBkYXRlKCk7XHJcbiAgICAgICAgdGhpcy5zY3JlZW4ucmVuZGVyU2NyZWVuKCk7XHJcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuZ2FtZUxvb3AuYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IG1haW4gPSBuZXcgTWFpbigpO1xyXG5tYWluLmdhbWVMb29wKCk7XHJcbiIsImltcG9ydCB7IElFbnRpdHkgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9lbnRpdHkuaW50ZXJmYWNlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRW50aXR5IGltcGxlbWVudHMgSUVudGl0eSB7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwdWJsaWMgc3ByaXRlOiBudW1iZXIsXHJcblxyXG4gICAgICAgIHB1YmxpYyBzeDogbnVtYmVyLFxyXG4gICAgICAgIHB1YmxpYyBzeTogbnVtYmVyLFxyXG4gICAgICAgIHB1YmxpYyBzdzogbnVtYmVyLFxyXG4gICAgICAgIHB1YmxpYyBzaDogbnVtYmVyLFxyXG4gICAgXHJcbiAgICAgICAgcHVibGljIGR4OiBudW1iZXIsXHJcbiAgICAgICAgcHVibGljIGR5OiBudW1iZXIsXHJcbiAgICAgICAgcHVibGljIGR3OiBudW1iZXIsXHJcbiAgICAgICAgcHVibGljIGRoOiBudW1iZXJcclxuICAgICkge1xyXG5cclxuICAgIH1cclxufSIsImltcG9ydCB7IElQbGF5ZXIgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9wbGF5ZXIuaW50ZXJmYWNlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUGxheWVyIGltcGxlbWVudHMgSVBsYXllciB7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwdWJsaWMgeDogbnVtYmVyLFxyXG4gICAgICAgIHB1YmxpYyB5OiBudW1iZXIsXHJcbiAgICAgICAgcHVibGljIHc6IG51bWJlcixcclxuICAgICAgICBwdWJsaWMgaDogbnVtYmVyLFxyXG4gICAgICAgIHB1YmxpYyBzeDogQXJyYXk8bnVtYmVyPixcclxuICAgICAgICBwdWJsaWMgc3hJbmRleDogbnVtYmVyLFxyXG4gICAgICAgIHB1YmxpYyBzeTogbnVtYmVyLFxyXG4gICAgICAgIHB1YmxpYyBzUmVuZGVyRGVsYXk6IG51bWJlclxyXG4gICAgKSB7XHJcblxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgTWFpbiB9IGZyb20gXCIuL21haW5cIjtcclxuXHJcbmltcG9ydCB7IElFbnRpdHkgfSBmcm9tIFwiLi9pbnRlcmZhY2VzL2VudGl0eS5pbnRlcmZhY2VcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTY3JlZW4ge1xyXG5cclxuICAgIHByaXZhdGUgX3NjcmVlbjogSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgICBwcml2YXRlIF9jdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuICAgIHByaXZhdGUgX3Nwcml0ZXM6IEFycmF5PEhUTUxJbWFnZUVsZW1lbnQ+O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgbWFpbjogTWFpblxyXG4gICAgKSB7XHJcbiAgICAgICAgdGhpcy5fc2NyZWVuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NjcmVlbicpIGFzIEhUTUxDYW52YXNFbGVtZW50O1xyXG4gICAgICAgIHRoaXMuX2N0eCA9IHRoaXMuX3NjcmVlbi5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgIHRoaXMuX3Nwcml0ZXMgPSBuZXcgQXJyYXk8SFRNTEltYWdlRWxlbWVudD4oKTtcclxuXHJcbiAgICAgICAgdGhpcy5hZGRTcHJpdGVDb2xsZWN0aW9uKFtcclxuICAgICAgICAgICAgJ2Fzc2V0cy9pbWFnZXMvTGlua1dhbGsucG5nJyxcclxuICAgICAgICAgICAgJ2Fzc2V0cy9pbWFnZXMvWmVsZGExTWluaXNoMDEucG5nJ1xyXG4gICAgICAgIF0pO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGFkZFNwcml0ZUNvbGxlY3Rpb24oc3JjOiBzdHJpbmdbXSkge1xyXG4gICAgICAgIGZvciAoY29uc3QgeCBvZiBzcmMpIHtcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5hZGRTcHJpdGUoeCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucmVuZGVyU2NyZWVuKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhZGRTcHJpdGUoc3JjOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX3Nwcml0ZXMucHVzaChuZXcgSW1hZ2UoKSk7XHJcbiAgICAgICAgICAgIHRoaXMuX3Nwcml0ZXNbdGhpcy5fc3ByaXRlcy5sZW5ndGggLSAxXS5zcmMgPSBzcmM7XHJcbiAgICAgICAgICAgIHRoaXMuX3Nwcml0ZXNbdGhpcy5fc3ByaXRlcy5sZW5ndGggLSAxXS5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0U2NyZWVuRGltZW5zaW9ucygpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB3aWR0aDogdGhpcy5fc2NyZWVuLndpZHRoLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IHRoaXMuX3NjcmVlbi5oZWlnaHRcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW5kZXJTY3JlZW4oKSB7XHJcbiAgICAgICAgdGhpcy5fY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLl9zY3JlZW4ud2lkdGgsIHRoaXMuX3NjcmVlbi5oZWlnaHQpO1xyXG5cclxuICAgICAgICB0aGlzLm1haW4uc3RhdGUuZ2V0QmFja2dyb3VuZCgpLmZvckVhY2goKHg6IElFbnRpdHkpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fY3R4LmRyYXdJbWFnZSh0aGlzLl9zcHJpdGVzW3guc3ByaXRlXSwgeC5zeCwgeC5zeSwgeC5zdywgeC5zaCwgeC5keCwgeC5keSwgeC5kdywgeC5kaCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMubWFpbi5zdGF0ZS5nZXRCbG9jaygpLmZvckVhY2goKHg6IElFbnRpdHkpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fY3R4LmRyYXdJbWFnZSh0aGlzLl9zcHJpdGVzW3guc3ByaXRlXSwgeC5zeCwgeC5zeSwgeC5zdywgeC5zaCwgeC5keCwgeC5keSwgeC5kdywgeC5kaCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHAgPSB0aGlzLm1haW4uc3RhdGUuZ2V0UGxheWVyKCk7XHJcbiAgICAgICAgdGhpcy5fY3R4LmRyYXdJbWFnZSh0aGlzLl9zcHJpdGVzWzBdLCBwLnN4W3Auc3hJbmRleF0sIHAuc3ksIHAudywgcC5oLCBwLngsIHAueSwgcC53LCBwLmgpO1xyXG5cclxuICAgICAgICAvLyByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gdGhpcy5yZW5kZXJTY3JlZW4pO1xyXG4gICAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBNYWluIH0gZnJvbSBcIi4vbWFpblwiO1xyXG5cclxuaW1wb3J0IHsgSVBsYXllciB9IGZyb20gXCIuL2ludGVyZmFjZXMvcGxheWVyLmludGVyZmFjZVwiO1xyXG5pbXBvcnQgeyBJRW50aXR5IH0gZnJvbSBcIi4vaW50ZXJmYWNlcy9lbnRpdHkuaW50ZXJmYWNlXCI7XHJcblxyXG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi9tb2RlbHMvcGxheWVyLm1vZGVsXCI7XHJcbmltcG9ydCB7IEVudGl0eSB9IGZyb20gXCIuL21vZGVscy9lbnRpdHkubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTdGF0ZSB7XHJcblxyXG4gICAgcHJpdmF0ZSBfY3VycmVudFBsYXllcjogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfcGxheWVyczogQXJyYXk8SVBsYXllcj47XHJcbiAgICBwcml2YXRlIF9ibG9ja3M6IEFycmF5PElFbnRpdHk+O1xyXG4gICAgcHJpdmF0ZSBfYmFja2dyb3VuZDogQXJyYXk8SUVudGl0eT47XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBtYWluOiBNYWluXHJcbiAgICApIHtcclxuICAgICAgICB0aGlzLl9wbGF5ZXJzID0gbmV3IEFycmF5PElQbGF5ZXI+KFxyXG4gICAgICAgICAgICBuZXcgUGxheWVyKDAsIDI0LCAyNCwgMjQsIFswLCAyNCwgNDhdLCAwLCAyNCwgMClcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICB0aGlzLl9ibG9ja3MgPSBuZXcgQXJyYXk8SUVudGl0eT4oXHJcbiAgICAgICAgICAgIG5ldyBFbnRpdHkoMSwgMCwgMTYsIDMyLCA4MCwgMTAwLCAxMDAsIDMyLCA4MClcclxuICAgICAgICApO1xyXG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgMzg0OyB4ICs9IDE2KSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgMzg0OyB5ICs9IDE2KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwKSA9PT0gMClcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9ibG9ja3MucHVzaChuZXcgRW50aXR5KDEsIDQ4LCBbMTI4LCAxNDQsIDE4MF1bTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMyldLCAxNiwgMTYsIHgsIHksIDE2LCAxNikpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgMzg0OyB4ICs9IDE2KSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgMzg0OyB5ICs9IDE2KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwKSA9PT0gMClcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9ibG9ja3MucHVzaChuZXcgRW50aXR5KDEsIDE2LCAxNzYsIDE2LCAxNiwgeCwgeSwgMTYsIDE2KSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fYmFja2dyb3VuZCA9IG5ldyBBcnJheTxJRW50aXR5PigpO1xyXG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgMzg0OyB4ICs9IDE2KSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgMzg0OyB5ICs9IDE2KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9iYWNrZ3JvdW5kLnB1c2gobmV3IEVudGl0eSgxLCBbMCwgMTYsIDMyXVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAzKV0sIDE2MCwgMTYsIDE2LCB4LCB5LCAxNiwgMTYpKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IDM4NDsgeCArPSAxNikge1xyXG4gICAgICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IDM4NDsgeSArPSAxNikge1xyXG4gICAgICAgICAgICAgICAgaWYgKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDMwKSA9PT0gMClcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9iYWNrZ3JvdW5kLnB1c2gobmV3IEVudGl0eSgxLCBbNDgsIDU2XVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKV0sIFsxNjAsIDE2OF1bTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMildLCA4LCA4LCB4LCB5LCA4LCA4KSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zZXRDdXJyZW50UGxheWVyKDApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRDdXJyZW50UGxheWVyKHBsYXllcklkOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9jdXJyZW50UGxheWVyID0gcGxheWVySWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFkZFBsYXllcihwbGF5ZXI6IElQbGF5ZXIpIHtcclxuICAgICAgICB0aGlzLl9wbGF5ZXJzLnB1c2gocGxheWVyKTtcclxuICAgICAgICB0aGlzLl9jdXJyZW50UGxheWVyID0gdGhpcy5fcGxheWVycy5sZW5ndGggPiAwID8gdGhpcy5fcGxheWVycy5sZW5ndGggLSAxIDogMDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0UGxheWVyKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9wbGF5ZXJzW3RoaXMuX2N1cnJlbnRQbGF5ZXJdO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRCbG9jaygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYmxvY2tzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRCYWNrZ3JvdW5kKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9iYWNrZ3JvdW5kO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cGRhdGUoKSB7XHJcbiAgICAgICAgY29uc3QgcCA9IHRoaXMuZ2V0UGxheWVyKCk7XHJcbiAgICAgICAgaWYgKHAuc1JlbmRlckRlbGF5IDwgMykge1xyXG4gICAgICAgICAgICBwLnNSZW5kZXJEZWxheSArPSAxO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHAuc1JlbmRlckRlbGF5ID0gMDtcclxuXHJcbiAgICAgICAgICAgIGlmIChwLnN4SW5kZXggPCAocC5zeC5sZW5ndGggLSAxKSkge1xyXG4gICAgICAgICAgICAgICAgcC5zeEluZGV4ICs9IDE7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBwLnN4SW5kZXggPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9