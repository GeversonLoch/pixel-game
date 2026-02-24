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
        this.state.update(dt);
        this.screen.renderScreen();
        requestAnimationFrame(function (ts) { return _this.loop(ts); });
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
        var _this = this;
        this.main = main;
        this._screen = document.getElementById('screen');
        this._ctx = this._screen.getContext('2d');
        this._sprites = new Array();
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
    Screen.prototype.renderScreen = function () {
        var _this = this;
        this._ctx.clearRect(0, 0, this._screen.width, this._screen.height);
        var p = this.main.state.getPlayer();
        // Câmera segue o jogador
        // Calculamos a posição da câmera centralizada no jogador
        // Além disso adicionamos um pequeno zoom fictício (ou mantemos real) escalando o contexto no futuro, 
        // mas no momento a câmera só dá o pan na imagem.
        var cameraX = p.x + (p.w / 2) - (this._screen.width / 2);
        var cameraY = p.y + (p.h / 2) - (this._screen.height / 2);
        this._ctx.save();
        // Move o contexto inteiro pela câmera
        this._ctx.translate(-Math.floor(cameraX), -Math.floor(cameraY));
        this.main.state.getBackground().forEach(function (x) {
            // Culling básico: não desenha se não estiver na tela
            if (x.dx + x.dw < cameraX || x.dx > cameraX + _this._screen.width ||
                x.dy + x.dh < cameraY || x.dy > cameraY + _this._screen.height) {
                return;
            }
            if (_this._sprites[x.sprite]) {
                _this._ctx.drawImage(_this._sprites[x.sprite], x.sx, x.sy, x.sw, x.sh, x.dx, x.dy, x.dw, x.dh);
            }
        });
        this.main.state.getBlock().forEach(function (x) {
            // Culling bádico
            if (x.dx + x.dw < cameraX || x.dx > cameraX + _this._screen.width ||
                x.dy + x.dh < cameraY || x.dy > cameraY + _this._screen.height) {
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
        this.WORLD_WIDTH = 2000;
        this.WORLD_HEIGHT = 2000;
        this._players = new Array(new _models_player_model__WEBPACK_IMPORTED_MODULE_0__["Player"](this.WORLD_WIDTH / 2, this.WORLD_HEIGHT / 2, 24, 24, [0, 24, 48], 0, 24, 0));
        this._blocks = new Array();
        this._background = new Array();
        for (var x = 0; x < this.WORLD_WIDTH; x += 16) {
            for (var y = 0; y < this.WORLD_HEIGHT; y += 16) {
                this._background.push(new _models_entity_model__WEBPACK_IMPORTED_MODULE_1__["Entity"](1, [0, 16, 32][Math.floor(Math.random() * 3)], 160, 16, 16, x, y, 16, 16));
            }
        }
        for (var x = 0; x < this.WORLD_WIDTH; x += 16) {
            for (var y = 0; y < this.WORLD_HEIGHT; y += 16) {
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
    State.prototype.update = function (dt) {
        var player = this.getPlayer();
        var keys = this.main.input.activeKeys;
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
            if (nextX + player.w > this.WORLD_WIDTH)
                nextX = this.WORLD_WIDTH - player.w;
            if (nextY + player.h > this.WORLD_HEIGHT)
                nextY = this.WORLD_HEIGHT - player.h;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lucHV0LnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbHMvZW50aXR5Lm1vZGVsLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbHMvcGxheWVyLm1vZGVsLnRzIiwid2VicGFjazovLy8uL3NyYy9zY3JlZW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNoRkE7QUFBQTtBQUFBO0lBSUksZUFDWSxJQUFVO1FBRHRCLGlCQUtDO1FBSlcsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUhkLGdCQUFXLEdBQStCLEVBQUUsQ0FBQztRQUtqRCxRQUFRLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLFVB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QyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFO2dCQUM1QyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLDJEQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO2FBQzlHO1NBQ0o7UUFFRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFO1lBQzNDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUU7Z0JBQzVDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQztvQkFDcEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSwyREFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzthQUNqSjtTQUNKO1FB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QUVMLFlBQUM7QUFBRCxDQUFDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9tYWluLnRzXCIpO1xuIiwiaW1wb3J0IHsgTWFpbiB9IGZyb20gXCIuL21haW5cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBJbnB1dCB7XHJcblxyXG4gICAgcHJpdmF0ZSBfYWN0aXZlS2V5czogeyBba2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIG1haW46IE1haW5cclxuICAgICkge1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXYpID0+IHRoaXMuX2FjdGl2ZUtleXNbZXYua2V5XSA9IHRydWUpO1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGV2KSA9PiB0aGlzLl9hY3RpdmVLZXlzW2V2LmtleV0gPSBmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBhY3RpdmVLZXlzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hY3RpdmVLZXlzO1xyXG4gICAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBTY3JlZW4gfSBmcm9tIFwiLi9zY3JlZW5cIjtcclxuaW1wb3J0IHsgU3RhdGUgfSBmcm9tIFwiLi9zdGF0ZVwiO1xyXG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gXCIuL2lucHV0XCI7IC8vIE5vdGljZSB0aGUgY29ycmVjdGVkIGltcG9ydFxyXG5cclxuZXhwb3J0IGNsYXNzIE1haW4ge1xyXG5cclxuICAgIHB1YmxpYyBzdGF0ZTogU3RhdGU7XHJcbiAgICBwdWJsaWMgc2NyZWVuOiBTY3JlZW47XHJcbiAgICBwdWJsaWMgaW5wdXQ6IElucHV0O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBuZXcgU3RhdGUodGhpcyk7XHJcbiAgICAgICAgdGhpcy5zY3JlZW4gPSBuZXcgU2NyZWVuKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuaW5wdXQgPSBuZXcgSW5wdXQodGhpcyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gU3RhcnQgdGhlIGdhbWUgbG9vcFxyXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgodHMpID0+IHRoaXMubG9vcCh0cykpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbGFzdFRpbWU6IG51bWJlciA9IDA7XHJcblxyXG4gICAgcHJpdmF0ZSBsb29wKHRpbWVzdGFtcDogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmxhc3RUaW1lKSB0aGlzLmxhc3RUaW1lID0gdGltZXN0YW1wO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBkdCA9ICh0aW1lc3RhbXAgLSB0aGlzLmxhc3RUaW1lKSAvIDEwMDA7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gUHJldmVudCBnaWFudCBzcGlrZXMgd2hlbiBjaGFuZ2luZyB0YWJzXHJcbiAgICAgICAgaWYgKGR0ID4gMC4xKSBkdCA9IDAuMTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmxhc3RUaW1lID0gdGltZXN0YW1wO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlLnVwZGF0ZShkdCk7XHJcbiAgICAgICAgdGhpcy5zY3JlZW4ucmVuZGVyU2NyZWVuKCk7XHJcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCh0cykgPT4gdGhpcy5sb29wKHRzKSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IG1haW4gPSBuZXcgTWFpbigpOyIsImltcG9ydCB7IElFbnRpdHkgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9lbnRpdHkuaW50ZXJmYWNlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRW50aXR5IGltcGxlbWVudHMgSUVudGl0eSB7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwdWJsaWMgc3ByaXRlOiBudW1iZXIsXHJcblxyXG4gICAgICAgIHB1YmxpYyBzeDogbnVtYmVyLFxyXG4gICAgICAgIHB1YmxpYyBzeTogbnVtYmVyLFxyXG4gICAgICAgIHB1YmxpYyBzdzogbnVtYmVyLFxyXG4gICAgICAgIHB1YmxpYyBzaDogbnVtYmVyLFxyXG4gICAgXHJcbiAgICAgICAgcHVibGljIGR4OiBudW1iZXIsXHJcbiAgICAgICAgcHVibGljIGR5OiBudW1iZXIsXHJcbiAgICAgICAgcHVibGljIGR3OiBudW1iZXIsXHJcbiAgICAgICAgcHVibGljIGRoOiBudW1iZXJcclxuICAgICkge1xyXG5cclxuICAgIH1cclxufSIsImltcG9ydCB7IElQbGF5ZXIgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9wbGF5ZXIuaW50ZXJmYWNlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUGxheWVyIGltcGxlbWVudHMgSVBsYXllciB7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwdWJsaWMgeDogbnVtYmVyLFxyXG4gICAgICAgIHB1YmxpYyB5OiBudW1iZXIsXHJcbiAgICAgICAgcHVibGljIHc6IG51bWJlcixcclxuICAgICAgICBwdWJsaWMgaDogbnVtYmVyLFxyXG4gICAgICAgIHB1YmxpYyBzeDogQXJyYXk8bnVtYmVyPixcclxuICAgICAgICBwdWJsaWMgc3hJbmRleDogbnVtYmVyLFxyXG4gICAgICAgIHB1YmxpYyBzeTogbnVtYmVyLFxyXG4gICAgICAgIHB1YmxpYyBzUmVuZGVyRGVsYXk6IG51bWJlclxyXG4gICAgKSB7XHJcblxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgTWFpbiB9IGZyb20gXCIuL21haW5cIjtcclxuXHJcbmltcG9ydCB7IElQbGF5ZXIgfSBmcm9tIFwiLi9pbnRlcmZhY2VzL3BsYXllci5pbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgSUVudGl0eSB9IGZyb20gXCIuL2ludGVyZmFjZXMvZW50aXR5LmludGVyZmFjZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNjcmVlbiB7XHJcblxyXG4gICAgcHJpdmF0ZSBfc2NyZWVuOiBIVE1MQ2FudmFzRWxlbWVudDtcclxuICAgIHByaXZhdGUgX2N0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xyXG4gICAgcHJpdmF0ZSBfc3ByaXRlczogQXJyYXk8SFRNTEltYWdlRWxlbWVudD47XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBtYWluOiBNYWluXHJcbiAgICApIHtcclxuICAgICAgICB0aGlzLl9zY3JlZW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2NyZWVuJykgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5fY3R4ID0gdGhpcy5fc2NyZWVuLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgICAgdGhpcy5fc3ByaXRlcyA9IG5ldyBBcnJheTxIVE1MSW1hZ2VFbGVtZW50PigpO1xyXG5cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4gdGhpcy5yZXNpemUoKSk7XHJcbiAgICAgICAgdGhpcy5yZXNpemUoKTtcclxuXHJcbiAgICAgICAgdGhpcy5hZGRTcHJpdGVDb2xsZWN0aW9uKFtcclxuICAgICAgICAgICAgJ2Fzc2V0cy9pbWFnZXMvTGlua1dhbGsucG5nJyxcclxuICAgICAgICAgICAgJ2Fzc2V0cy9pbWFnZXMvWmVsZGExTWluaXNoMDEucG5nJ1xyXG4gICAgICAgIF0pO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGFkZFNwcml0ZUNvbGxlY3Rpb24oc3JjOiBzdHJpbmdbXSkge1xyXG4gICAgICAgIGZvciAoY29uc3QgeCBvZiBzcmMpIHtcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5hZGRTcHJpdGUoeCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucmVuZGVyU2NyZWVuKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhZGRTcHJpdGUoc3JjOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX3Nwcml0ZXMucHVzaChuZXcgSW1hZ2UoKSk7XHJcbiAgICAgICAgICAgIHRoaXMuX3Nwcml0ZXNbdGhpcy5fc3ByaXRlcy5sZW5ndGggLSAxXS5zcmMgPSBzcmM7XHJcbiAgICAgICAgICAgIHRoaXMuX3Nwcml0ZXNbdGhpcy5fc3ByaXRlcy5sZW5ndGggLSAxXS5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVzaXplKCkge1xyXG4gICAgICAgIHRoaXMuX3NjcmVlbi53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgICAgIHRoaXMuX3NjcmVlbi5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICAgICAgLy8gS2VlcCBwaXhlbGF0ZWQgYWVzdGhldGljIHdoZW4gcmVzY2FsZWRcclxuICAgICAgICB0aGlzLl9jdHguaW1hZ2VTbW9vdGhpbmdFbmFibGVkID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFNjcmVlbkRpbWVuc2lvbnMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgd2lkdGg6IHRoaXMuX3NjcmVlbi53aWR0aCxcclxuICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLl9zY3JlZW4uaGVpZ2h0XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVuZGVyU2NyZWVuKCkge1xyXG4gICAgICAgIHRoaXMuX2N0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5fc2NyZWVuLndpZHRoLCB0aGlzLl9zY3JlZW4uaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgY29uc3QgcCA9IHRoaXMubWFpbi5zdGF0ZS5nZXRQbGF5ZXIoKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBDw6JtZXJhIHNlZ3VlIG8gam9nYWRvclxyXG4gICAgICAgIC8vIENhbGN1bGFtb3MgYSBwb3Npw6fDo28gZGEgY8OibWVyYSBjZW50cmFsaXphZGEgbm8gam9nYWRvclxyXG4gICAgICAgIC8vIEFsw6ltIGRpc3NvIGFkaWNpb25hbW9zIHVtIHBlcXVlbm8gem9vbSBmaWN0w61jaW8gKG91IG1hbnRlbW9zIHJlYWwpIGVzY2FsYW5kbyBvIGNvbnRleHRvIG5vIGZ1dHVybywgXHJcbiAgICAgICAgLy8gbWFzIG5vIG1vbWVudG8gYSBjw6JtZXJhIHPDsyBkw6EgbyBwYW4gbmEgaW1hZ2VtLlxyXG4gICAgICAgIGNvbnN0IGNhbWVyYVggPSBwLnggKyAocC53IC8gMikgLSAodGhpcy5fc2NyZWVuLndpZHRoIC8gMik7XHJcbiAgICAgICAgY29uc3QgY2FtZXJhWSA9IHAueSArIChwLmggLyAyKSAtICh0aGlzLl9zY3JlZW4uaGVpZ2h0IC8gMik7XHJcblxyXG4gICAgICAgIHRoaXMuX2N0eC5zYXZlKCk7XHJcbiAgICAgICAgLy8gTW92ZSBvIGNvbnRleHRvIGludGVpcm8gcGVsYSBjw6JtZXJhXHJcbiAgICAgICAgdGhpcy5fY3R4LnRyYW5zbGF0ZSgtTWF0aC5mbG9vcihjYW1lcmFYKSwgLU1hdGguZmxvb3IoY2FtZXJhWSkpO1xyXG5cclxuICAgICAgICB0aGlzLm1haW4uc3RhdGUuZ2V0QmFja2dyb3VuZCgpLmZvckVhY2goKHg6IElFbnRpdHkpID0+IHtcclxuICAgICAgICAgICAgLy8gQ3VsbGluZyBiw6FzaWNvOiBuw6NvIGRlc2VuaGEgc2UgbsOjbyBlc3RpdmVyIG5hIHRlbGFcclxuICAgICAgICAgICAgaWYgKHguZHggKyB4LmR3IDwgY2FtZXJhWCB8fCB4LmR4ID4gY2FtZXJhWCArIHRoaXMuX3NjcmVlbi53aWR0aCB8fFxyXG4gICAgICAgICAgICAgICAgeC5keSArIHguZGggPCBjYW1lcmFZIHx8IHguZHkgPiBjYW1lcmFZICsgdGhpcy5fc2NyZWVuLmhlaWdodCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5fc3ByaXRlc1t4LnNwcml0ZV0pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2N0eC5kcmF3SW1hZ2UodGhpcy5fc3ByaXRlc1t4LnNwcml0ZV0sIHguc3gsIHguc3ksIHguc3csIHguc2gsIHguZHgsIHguZHksIHguZHcsIHguZGgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMubWFpbi5zdGF0ZS5nZXRCbG9jaygpLmZvckVhY2goKHg6IElFbnRpdHkpID0+IHtcclxuICAgICAgICAgICAgLy8gQ3VsbGluZyBiw6FkaWNvXHJcbiAgICAgICAgICAgIGlmICh4LmR4ICsgeC5kdyA8IGNhbWVyYVggfHwgeC5keCA+IGNhbWVyYVggKyB0aGlzLl9zY3JlZW4ud2lkdGggfHxcclxuICAgICAgICAgICAgICAgIHguZHkgKyB4LmRoIDwgY2FtZXJhWSB8fCB4LmR5ID4gY2FtZXJhWSArIHRoaXMuX3NjcmVlbi5oZWlnaHQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuX3Nwcml0ZXNbeC5zcHJpdGVdKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jdHguZHJhd0ltYWdlKHRoaXMuX3Nwcml0ZXNbeC5zcHJpdGVdLCB4LnN4LCB4LnN5LCB4LnN3LCB4LnNoLCB4LmR4LCB4LmR5LCB4LmR3LCB4LmRoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5fc3ByaXRlc1swXSkge1xyXG4gICAgICAgICAgICB0aGlzLl9jdHguZHJhd0ltYWdlKHRoaXMuX3Nwcml0ZXNbMF0sIHAuc3hbcC5zeEluZGV4XSwgcC5zeSwgcC53LCBwLmgsIHAueCwgcC55LCBwLncsIHAuaCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9jdHgucmVzdG9yZSgpO1xyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCB7IE1haW4gfSBmcm9tIFwiLi9tYWluXCI7XHJcblxyXG5pbXBvcnQgeyBJUGxheWVyIH0gZnJvbSBcIi4vaW50ZXJmYWNlcy9wbGF5ZXIuaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7IElFbnRpdHkgfSBmcm9tIFwiLi9pbnRlcmZhY2VzL2VudGl0eS5pbnRlcmZhY2VcIjtcclxuXHJcbmltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuL21vZGVscy9wbGF5ZXIubW9kZWxcIjtcclxuaW1wb3J0IHsgRW50aXR5IH0gZnJvbSBcIi4vbW9kZWxzL2VudGl0eS5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFN0YXRlIHtcclxuXHJcbiAgICBwcml2YXRlIF9jdXJyZW50UGxheWVyOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF9wbGF5ZXJzOiBBcnJheTxJUGxheWVyPjtcclxuICAgIHByaXZhdGUgX2Jsb2NrczogQXJyYXk8SUVudGl0eT47XHJcbiAgICBwcml2YXRlIF9iYWNrZ3JvdW5kOiBBcnJheTxJRW50aXR5PjtcclxuICAgIFxyXG4gICAgcHVibGljIHJlYWRvbmx5IFdPUkxEX1dJRFRIID0gMjAwMDtcclxuICAgIHB1YmxpYyByZWFkb25seSBXT1JMRF9IRUlHSFQgPSAyMDAwO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgbWFpbjogTWFpblxyXG4gICAgKSB7XHJcbiAgICAgICAgdGhpcy5fcGxheWVycyA9IG5ldyBBcnJheTxJUGxheWVyPihcclxuICAgICAgICAgICAgbmV3IFBsYXllcih0aGlzLldPUkxEX1dJRFRIIC8gMiwgdGhpcy5XT1JMRF9IRUlHSFQgLyAyLCAyNCwgMjQsIFswLCAyNCwgNDhdLCAwLCAyNCwgMClcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICB0aGlzLl9ibG9ja3MgPSBuZXcgQXJyYXk8SUVudGl0eT4oKTtcclxuXHJcbiAgICAgICAgdGhpcy5fYmFja2dyb3VuZCA9IG5ldyBBcnJheTxJRW50aXR5PigpO1xyXG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy5XT1JMRF9XSURUSDsgeCArPSAxNikge1xyXG4gICAgICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHRoaXMuV09STERfSEVJR0hUOyB5ICs9IDE2KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9iYWNrZ3JvdW5kLnB1c2gobmV3IEVudGl0eSgxLCBbMCwgMTYsIDMyXVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAzKV0sIDE2MCwgMTYsIDE2LCB4LCB5LCAxNiwgMTYpKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMuV09STERfV0lEVEg7IHggKz0gMTYpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0aGlzLldPUkxEX0hFSUdIVDsgeSArPSAxNikge1xyXG4gICAgICAgICAgICAgICAgaWYgKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDMwKSA9PT0gMClcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9iYWNrZ3JvdW5kLnB1c2gobmV3IEVudGl0eSgxLCBbNDgsIDU2XVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKV0sIFsxNjAsIDE2OF1bTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMildLCA4LCA4LCB4LCB5LCA4LCA4KSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zZXRDdXJyZW50UGxheWVyKDApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRDdXJyZW50UGxheWVyKHBsYXllcklkOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9jdXJyZW50UGxheWVyID0gcGxheWVySWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFkZFBsYXllcihwbGF5ZXI6IElQbGF5ZXIpIHtcclxuICAgICAgICB0aGlzLl9wbGF5ZXJzLnB1c2gocGxheWVyKTtcclxuICAgICAgICB0aGlzLl9jdXJyZW50UGxheWVyID0gdGhpcy5fcGxheWVycy5sZW5ndGggPiAwID8gdGhpcy5fcGxheWVycy5sZW5ndGggLSAxIDogMDtcclxuICAgICAgICB0aGlzLm1haW4uc2NyZWVuLnJlbmRlclNjcmVlbigpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRQbGF5ZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BsYXllcnNbdGhpcy5fY3VycmVudFBsYXllcl07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEJsb2NrKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9ibG9ja3M7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEJhY2tncm91bmQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2JhY2tncm91bmQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVwZGF0ZShkdDogbnVtYmVyKSB7XHJcbiAgICAgICAgY29uc3QgcGxheWVyID0gdGhpcy5nZXRQbGF5ZXIoKTtcclxuICAgICAgICBjb25zdCBrZXlzID0gdGhpcy5tYWluLmlucHV0LmFjdGl2ZUtleXM7XHJcblxyXG4gICAgICAgIGxldCBkeCA9IDA7XHJcbiAgICAgICAgbGV0IGR5ID0gMDtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBzcGVlZCA9IDEwMCAqIGR0OyAvLyAxMDAgcGl4ZWxzIHBlciBzZWNvbmRcclxuXHJcbiAgICAgICAgLy8gRGV0ZXJtaW5lIGludGVuZGVkIG1vdmVtZW50XHJcbiAgICAgICAgaWYgKGtleXNbJ0Fycm93VXAnXSkge1xyXG4gICAgICAgICAgICBkeSAtPSBzcGVlZDtcclxuICAgICAgICAgICAgcGxheWVyLnN5ID0gMDsgLy8gU3ByaXRlIHJvdyBmb3IgdXBcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoa2V5c1snQXJyb3dEb3duJ10pIHtcclxuICAgICAgICAgICAgZHkgKz0gc3BlZWQ7XHJcbiAgICAgICAgICAgIHBsYXllci5zeSA9IDQ4OyAvLyBTcHJpdGUgcm93IGZvciBkb3duXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGtleXNbJ0Fycm93TGVmdCddKSB7XHJcbiAgICAgICAgICAgIGR4IC09IHNwZWVkO1xyXG4gICAgICAgICAgICBwbGF5ZXIuc3kgPSA3MjsgLy8gU3ByaXRlIHJvdyBmb3IgbGVmdFxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChrZXlzWydBcnJvd1JpZ2h0J10pIHtcclxuICAgICAgICAgICAgZHggKz0gc3BlZWQ7XHJcbiAgICAgICAgICAgIHBsYXllci5zeSA9IDI0OyAvLyBTcHJpdGUgcm93IGZvciByaWdodFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQXBwbHkgbW92ZW1lbnQgaWYgdGhlcmUncyBhbnlcclxuICAgICAgICBpZiAoZHggIT09IDAgfHwgZHkgIT09IDApIHtcclxuICAgICAgICAgICAgbGV0IG5leHRYID0gcGxheWVyLnggKyBkeDtcclxuICAgICAgICAgICAgbGV0IG5leHRZID0gcGxheWVyLnkgKyBkeTtcclxuXHJcbiAgICAgICAgICAgIC8vIEJvdW5kYXJpZXMgY2hlY2tcclxuICAgICAgICAgICAgaWYgKG5leHRYIDwgMCkgbmV4dFggPSAwO1xyXG4gICAgICAgICAgICBpZiAobmV4dFkgPCAwKSBuZXh0WSA9IDA7XHJcbiAgICAgICAgICAgIGlmIChuZXh0WCArIHBsYXllci53ID4gdGhpcy5XT1JMRF9XSURUSCkgbmV4dFggPSB0aGlzLldPUkxEX1dJRFRIIC0gcGxheWVyLnc7XHJcbiAgICAgICAgICAgIGlmIChuZXh0WSArIHBsYXllci5oID4gdGhpcy5XT1JMRF9IRUlHSFQpIG5leHRZID0gdGhpcy5XT1JMRF9IRUlHSFQgLSBwbGF5ZXIuaDtcclxuXHJcbiAgICAgICAgICAgIC8vIENvbGxpc2lvbiBjaGVja1xyXG4gICAgICAgICAgICBsZXQgY29sbGlzaW9uID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgYmxvY2sgb2YgdGhpcy5fYmxvY2tzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgbmV4dFggPCBibG9jay5keCArIGJsb2NrLmR3ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgbmV4dFggKyBwbGF5ZXIudyA+IGJsb2NrLmR4ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgbmV4dFkgPCBibG9jay5keSArIGJsb2NrLmRoICYmXHJcbiAgICAgICAgICAgICAgICAgICAgbmV4dFkgKyBwbGF5ZXIuaCA+IGJsb2NrLmR5XHJcbiAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xsaXNpb24gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIWNvbGxpc2lvbikge1xyXG4gICAgICAgICAgICAgICAgcGxheWVyLnggPSBuZXh0WDtcclxuICAgICAgICAgICAgICAgIHBsYXllci55ID0gbmV4dFk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIEFuaW1hdGUgc3ByaXRlIHdoZW4gbW92aW5nXHJcbiAgICAgICAgICAgIHBsYXllci5zUmVuZGVyRGVsYXkgKz0gZHQ7XHJcbiAgICAgICAgICAgIGlmIChwbGF5ZXIuc1JlbmRlckRlbGF5ID49IDAuMDUpIHtcclxuICAgICAgICAgICAgICAgIHBsYXllci5zUmVuZGVyRGVsYXkgPSAwO1xyXG4gICAgICAgICAgICAgICAgaWYgKHBsYXllci5zeEluZGV4IDwgKHBsYXllci5zeC5sZW5ndGggLSAxKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBsYXllci5zeEluZGV4ICs9IDE7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHBsYXllci5zeEluZGV4ID0gMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIFJlc2V0IHRvIGlkbGUgZnJhbWUgaWYgbm90IG1vdmluZ1xyXG4gICAgICAgICAgICBwbGF5ZXIuc3hJbmRleCA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufSJdLCJzb3VyY2VSb290IjoiIn0=