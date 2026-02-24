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
        this._blocks = new Array(new _models_entity_model__WEBPACK_IMPORTED_MODULE_1__["Entity"](1, 0, 16, 32, 80, 100, 100, 32, 80));
        for (var x = 0; x < this.WORLD_WIDTH; x += 16) {
            for (var y = 0; y < this.WORLD_HEIGHT; y += 16) {
                if (Math.floor(Math.random() * 100) === 0)
                    this._blocks.push(new _models_entity_model__WEBPACK_IMPORTED_MODULE_1__["Entity"](1, 48, [128, 144, 180][Math.floor(Math.random() * 3)], 16, 16, x, y, 16, 16));
            }
        }
        for (var x = 0; x < this.WORLD_WIDTH; x += 16) {
            for (var y = 0; y < this.WORLD_HEIGHT; y += 16) {
                if (Math.floor(Math.random() * 100) === 0)
                    this._blocks.push(new _models_entity_model__WEBPACK_IMPORTED_MODULE_1__["Entity"](1, 16, 176, 16, 16, x, y, 16, 16));
            }
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lucHV0LnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbHMvZW50aXR5Lm1vZGVsLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbHMvcGxheWVyLm1vZGVsLnRzIiwid2VicGFjazovLy8uL3NyYy9zY3JlZW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNoRkE7QUFBQTtBQUFBO0lBSUksZUFDWSxJQUFVO1FBRHRCLGlCQUtDO1FBSlcsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUhkLGdCQUFXLEdBQStCLEVBQUUsQ0FBQztRQUtqRCxRQUFRLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLFVB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QUNILE1BQU0sQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO2lCQUN0QjthQUNKO1NBQ0o7YUFBTTtZQUNILG9DQUFvQztZQUNwQyxNQUFNLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztTQUN0QjtJQUNMLENBQUM7SUFFTCxZQUFDO0FBQUQsQ0FBQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvbWFpbi50c1wiKTtcbiIsImltcG9ydCB7IE1haW4gfSBmcm9tIFwiLi9tYWluXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgSW5wdXQge1xyXG5cclxuICAgIHByaXZhdGUgX2FjdGl2ZUtleXM6IHsgW2tleTogc3RyaW5nXTogYm9vbGVhbiB9ID0ge307XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBtYWluOiBNYWluXHJcbiAgICApIHtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2KSA9PiB0aGlzLl9hY3RpdmVLZXlzW2V2LmtleV0gPSB0cnVlKTtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChldikgPT4gdGhpcy5fYWN0aXZlS2V5c1tldi5rZXldID0gZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgYWN0aXZlS2V5cygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYWN0aXZlS2V5cztcclxuICAgIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgU2NyZWVuIH0gZnJvbSBcIi4vc2NyZWVuXCI7XHJcbmltcG9ydCB7IFN0YXRlIH0gZnJvbSBcIi4vc3RhdGVcIjtcclxuaW1wb3J0IHsgSW5wdXQgfSBmcm9tIFwiLi9pbnB1dFwiOyAvLyBOb3RpY2UgdGhlIGNvcnJlY3RlZCBpbXBvcnRcclxuXHJcbmV4cG9ydCBjbGFzcyBNYWluIHtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGU6IFN0YXRlO1xyXG4gICAgcHVibGljIHNjcmVlbjogU2NyZWVuO1xyXG4gICAgcHVibGljIGlucHV0OiBJbnB1dDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnN0YXRlID0gbmV3IFN0YXRlKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuc2NyZWVuID0gbmV3IFNjcmVlbih0aGlzKTtcclxuICAgICAgICB0aGlzLmlucHV0ID0gbmV3IElucHV0KHRoaXMpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFN0YXJ0IHRoZSBnYW1lIGxvb3BcclxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKHRzKSA9PiB0aGlzLmxvb3AodHMpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGxhc3RUaW1lOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIHByaXZhdGUgbG9vcCh0aW1lc3RhbXA6IG51bWJlcikge1xyXG4gICAgICAgIGlmICghdGhpcy5sYXN0VGltZSkgdGhpcy5sYXN0VGltZSA9IHRpbWVzdGFtcDtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgZHQgPSAodGltZXN0YW1wIC0gdGhpcy5sYXN0VGltZSkgLyAxMDAwO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFByZXZlbnQgZ2lhbnQgc3Bpa2VzIHdoZW4gY2hhbmdpbmcgdGFic1xyXG4gICAgICAgIGlmIChkdCA+IDAuMSkgZHQgPSAwLjE7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5sYXN0VGltZSA9IHRpbWVzdGFtcDtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZS51cGRhdGUoZHQpO1xyXG4gICAgICAgIHRoaXMuc2NyZWVuLnJlbmRlclNjcmVlbigpO1xyXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgodHMpID0+IHRoaXMubG9vcCh0cykpO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBtYWluID0gbmV3IE1haW4oKTsiLCJpbXBvcnQgeyBJRW50aXR5IH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvZW50aXR5LmludGVyZmFjZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEVudGl0eSBpbXBsZW1lbnRzIElFbnRpdHkge1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHVibGljIHNwcml0ZTogbnVtYmVyLFxyXG5cclxuICAgICAgICBwdWJsaWMgc3g6IG51bWJlcixcclxuICAgICAgICBwdWJsaWMgc3k6IG51bWJlcixcclxuICAgICAgICBwdWJsaWMgc3c6IG51bWJlcixcclxuICAgICAgICBwdWJsaWMgc2g6IG51bWJlcixcclxuICAgIFxyXG4gICAgICAgIHB1YmxpYyBkeDogbnVtYmVyLFxyXG4gICAgICAgIHB1YmxpYyBkeTogbnVtYmVyLFxyXG4gICAgICAgIHB1YmxpYyBkdzogbnVtYmVyLFxyXG4gICAgICAgIHB1YmxpYyBkaDogbnVtYmVyXHJcbiAgICApIHtcclxuXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBJUGxheWVyIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvcGxheWVyLmludGVyZmFjZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBsYXllciBpbXBsZW1lbnRzIElQbGF5ZXIge1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHVibGljIHg6IG51bWJlcixcclxuICAgICAgICBwdWJsaWMgeTogbnVtYmVyLFxyXG4gICAgICAgIHB1YmxpYyB3OiBudW1iZXIsXHJcbiAgICAgICAgcHVibGljIGg6IG51bWJlcixcclxuICAgICAgICBwdWJsaWMgc3g6IEFycmF5PG51bWJlcj4sXHJcbiAgICAgICAgcHVibGljIHN4SW5kZXg6IG51bWJlcixcclxuICAgICAgICBwdWJsaWMgc3k6IG51bWJlcixcclxuICAgICAgICBwdWJsaWMgc1JlbmRlckRlbGF5OiBudW1iZXJcclxuICAgICkge1xyXG5cclxuICAgIH1cclxufSIsImltcG9ydCB7IE1haW4gfSBmcm9tIFwiLi9tYWluXCI7XHJcblxyXG5pbXBvcnQgeyBJUGxheWVyIH0gZnJvbSBcIi4vaW50ZXJmYWNlcy9wbGF5ZXIuaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7IElFbnRpdHkgfSBmcm9tIFwiLi9pbnRlcmZhY2VzL2VudGl0eS5pbnRlcmZhY2VcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTY3JlZW4ge1xyXG5cclxuICAgIHByaXZhdGUgX3NjcmVlbjogSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgICBwcml2YXRlIF9jdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuICAgIHByaXZhdGUgX3Nwcml0ZXM6IEFycmF5PEhUTUxJbWFnZUVsZW1lbnQ+O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgbWFpbjogTWFpblxyXG4gICAgKSB7XHJcbiAgICAgICAgdGhpcy5fc2NyZWVuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NjcmVlbicpIGFzIEhUTUxDYW52YXNFbGVtZW50O1xyXG4gICAgICAgIHRoaXMuX2N0eCA9IHRoaXMuX3NjcmVlbi5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgIHRoaXMuX3Nwcml0ZXMgPSBuZXcgQXJyYXk8SFRNTEltYWdlRWxlbWVudD4oKTtcclxuXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHRoaXMucmVzaXplKCkpO1xyXG4gICAgICAgIHRoaXMucmVzaXplKCk7XHJcblxyXG4gICAgICAgIHRoaXMuYWRkU3ByaXRlQ29sbGVjdGlvbihbXHJcbiAgICAgICAgICAgICdhc3NldHMvaW1hZ2VzL0xpbmtXYWxrLnBuZycsXHJcbiAgICAgICAgICAgICdhc3NldHMvaW1hZ2VzL1plbGRhMU1pbmlzaDAxLnBuZydcclxuICAgICAgICBdKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBhZGRTcHJpdGVDb2xsZWN0aW9uKHNyYzogc3RyaW5nW10pIHtcclxuICAgICAgICBmb3IgKGNvbnN0IHggb2Ygc3JjKSB7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuYWRkU3ByaXRlKHgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnJlbmRlclNjcmVlbigpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYWRkU3ByaXRlKHNyYzogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9zcHJpdGVzLnB1c2gobmV3IEltYWdlKCkpO1xyXG4gICAgICAgICAgICB0aGlzLl9zcHJpdGVzW3RoaXMuX3Nwcml0ZXMubGVuZ3RoIC0gMV0uc3JjID0gc3JjO1xyXG4gICAgICAgICAgICB0aGlzLl9zcHJpdGVzW3RoaXMuX3Nwcml0ZXMubGVuZ3RoIC0gMV0ub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlc2l6ZSgpIHtcclxuICAgICAgICB0aGlzLl9zY3JlZW4ud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICAgICAgICB0aGlzLl9zY3JlZW4uaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG4gICAgICAgIC8vIEtlZXAgcGl4ZWxhdGVkIGFlc3RoZXRpYyB3aGVuIHJlc2NhbGVkXHJcbiAgICAgICAgdGhpcy5fY3R4LmltYWdlU21vb3RoaW5nRW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRTY3JlZW5EaW1lbnNpb25zKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiB0aGlzLl9zY3JlZW4ud2lkdGgsXHJcbiAgICAgICAgICAgIGhlaWdodDogdGhpcy5fc2NyZWVuLmhlaWdodFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlbmRlclNjcmVlbigpIHtcclxuICAgICAgICB0aGlzLl9jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuX3NjcmVlbi53aWR0aCwgdGhpcy5fc2NyZWVuLmhlaWdodCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHAgPSB0aGlzLm1haW4uc3RhdGUuZ2V0UGxheWVyKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gQ8OibWVyYSBzZWd1ZSBvIGpvZ2Fkb3JcclxuICAgICAgICAvLyBDYWxjdWxhbW9zIGEgcG9zacOnw6NvIGRhIGPDom1lcmEgY2VudHJhbGl6YWRhIG5vIGpvZ2Fkb3JcclxuICAgICAgICAvLyBBbMOpbSBkaXNzbyBhZGljaW9uYW1vcyB1bSBwZXF1ZW5vIHpvb20gZmljdMOtY2lvIChvdSBtYW50ZW1vcyByZWFsKSBlc2NhbGFuZG8gbyBjb250ZXh0byBubyBmdXR1cm8sIFxyXG4gICAgICAgIC8vIG1hcyBubyBtb21lbnRvIGEgY8OibWVyYSBzw7MgZMOhIG8gcGFuIG5hIGltYWdlbS5cclxuICAgICAgICBjb25zdCBjYW1lcmFYID0gcC54ICsgKHAudyAvIDIpIC0gKHRoaXMuX3NjcmVlbi53aWR0aCAvIDIpO1xyXG4gICAgICAgIGNvbnN0IGNhbWVyYVkgPSBwLnkgKyAocC5oIC8gMikgLSAodGhpcy5fc2NyZWVuLmhlaWdodCAvIDIpO1xyXG5cclxuICAgICAgICB0aGlzLl9jdHguc2F2ZSgpO1xyXG4gICAgICAgIC8vIE1vdmUgbyBjb250ZXh0byBpbnRlaXJvIHBlbGEgY8OibWVyYVxyXG4gICAgICAgIHRoaXMuX2N0eC50cmFuc2xhdGUoLU1hdGguZmxvb3IoY2FtZXJhWCksIC1NYXRoLmZsb29yKGNhbWVyYVkpKTtcclxuXHJcbiAgICAgICAgdGhpcy5tYWluLnN0YXRlLmdldEJhY2tncm91bmQoKS5mb3JFYWNoKCh4OiBJRW50aXR5KSA9PiB7XHJcbiAgICAgICAgICAgIC8vIEN1bGxpbmcgYsOhc2ljbzogbsOjbyBkZXNlbmhhIHNlIG7Do28gZXN0aXZlciBuYSB0ZWxhXHJcbiAgICAgICAgICAgIGlmICh4LmR4ICsgeC5kdyA8IGNhbWVyYVggfHwgeC5keCA+IGNhbWVyYVggKyB0aGlzLl9zY3JlZW4ud2lkdGggfHxcclxuICAgICAgICAgICAgICAgIHguZHkgKyB4LmRoIDwgY2FtZXJhWSB8fCB4LmR5ID4gY2FtZXJhWSArIHRoaXMuX3NjcmVlbi5oZWlnaHQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuX3Nwcml0ZXNbeC5zcHJpdGVdKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jdHguZHJhd0ltYWdlKHRoaXMuX3Nwcml0ZXNbeC5zcHJpdGVdLCB4LnN4LCB4LnN5LCB4LnN3LCB4LnNoLCB4LmR4LCB4LmR5LCB4LmR3LCB4LmRoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLm1haW4uc3RhdGUuZ2V0QmxvY2soKS5mb3JFYWNoKCh4OiBJRW50aXR5KSA9PiB7XHJcbiAgICAgICAgICAgIC8vIEN1bGxpbmcgYsOhZGljb1xyXG4gICAgICAgICAgICBpZiAoeC5keCArIHguZHcgPCBjYW1lcmFYIHx8IHguZHggPiBjYW1lcmFYICsgdGhpcy5fc2NyZWVuLndpZHRoIHx8XHJcbiAgICAgICAgICAgICAgICB4LmR5ICsgeC5kaCA8IGNhbWVyYVkgfHwgeC5keSA+IGNhbWVyYVkgKyB0aGlzLl9zY3JlZW4uaGVpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9zcHJpdGVzW3guc3ByaXRlXSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY3R4LmRyYXdJbWFnZSh0aGlzLl9zcHJpdGVzW3guc3ByaXRlXSwgeC5zeCwgeC5zeSwgeC5zdywgeC5zaCwgeC5keCwgeC5keSwgeC5kdywgeC5kaCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX3Nwcml0ZXNbMF0pIHtcclxuICAgICAgICAgICAgdGhpcy5fY3R4LmRyYXdJbWFnZSh0aGlzLl9zcHJpdGVzWzBdLCBwLnN4W3Auc3hJbmRleF0sIHAuc3ksIHAudywgcC5oLCBwLngsIHAueSwgcC53LCBwLmgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fY3R4LnJlc3RvcmUoKTtcclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQgeyBNYWluIH0gZnJvbSBcIi4vbWFpblwiO1xyXG5cclxuaW1wb3J0IHsgSVBsYXllciB9IGZyb20gXCIuL2ludGVyZmFjZXMvcGxheWVyLmludGVyZmFjZVwiO1xyXG5pbXBvcnQgeyBJRW50aXR5IH0gZnJvbSBcIi4vaW50ZXJmYWNlcy9lbnRpdHkuaW50ZXJmYWNlXCI7XHJcblxyXG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi9tb2RlbHMvcGxheWVyLm1vZGVsXCI7XHJcbmltcG9ydCB7IEVudGl0eSB9IGZyb20gXCIuL21vZGVscy9lbnRpdHkubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTdGF0ZSB7XHJcblxyXG4gICAgcHJpdmF0ZSBfY3VycmVudFBsYXllcjogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfcGxheWVyczogQXJyYXk8SVBsYXllcj47XHJcbiAgICBwcml2YXRlIF9ibG9ja3M6IEFycmF5PElFbnRpdHk+O1xyXG4gICAgcHJpdmF0ZSBfYmFja2dyb3VuZDogQXJyYXk8SUVudGl0eT47XHJcbiAgICBcclxuICAgIHB1YmxpYyByZWFkb25seSBXT1JMRF9XSURUSCA9IDIwMDA7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgV09STERfSEVJR0hUID0gMjAwMDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIG1haW46IE1haW5cclxuICAgICkge1xyXG4gICAgICAgIHRoaXMuX3BsYXllcnMgPSBuZXcgQXJyYXk8SVBsYXllcj4oXHJcbiAgICAgICAgICAgIG5ldyBQbGF5ZXIodGhpcy5XT1JMRF9XSURUSCAvIDIsIHRoaXMuV09STERfSEVJR0hUIC8gMiwgMjQsIDI0LCBbMCwgMjQsIDQ4XSwgMCwgMjQsIDApXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgdGhpcy5fYmxvY2tzID0gbmV3IEFycmF5PElFbnRpdHk+KFxyXG4gICAgICAgICAgICBuZXcgRW50aXR5KDEsIDAsIDE2LCAzMiwgODAsIDEwMCwgMTAwLCAzMiwgODApXHJcbiAgICAgICAgKTtcclxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMuV09STERfV0lEVEg7IHggKz0gMTYpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0aGlzLldPUkxEX0hFSUdIVDsgeSArPSAxNikge1xyXG4gICAgICAgICAgICAgICAgaWYgKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMCkgPT09IDApXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fYmxvY2tzLnB1c2gobmV3IEVudGl0eSgxLCA0OCwgWzEyOCwgMTQ0LCAxODBdW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDMpXSwgMTYsIDE2LCB4LCB5LCAxNiwgMTYpKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMuV09STERfV0lEVEg7IHggKz0gMTYpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0aGlzLldPUkxEX0hFSUdIVDsgeSArPSAxNikge1xyXG4gICAgICAgICAgICAgICAgaWYgKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMCkgPT09IDApXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fYmxvY2tzLnB1c2gobmV3IEVudGl0eSgxLCAxNiwgMTc2LCAxNiwgMTYsIHgsIHksIDE2LCAxNikpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX2JhY2tncm91bmQgPSBuZXcgQXJyYXk8SUVudGl0eT4oKTtcclxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMuV09STERfV0lEVEg7IHggKz0gMTYpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0aGlzLldPUkxEX0hFSUdIVDsgeSArPSAxNikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fYmFja2dyb3VuZC5wdXNoKG5ldyBFbnRpdHkoMSwgWzAsIDE2LCAzMl1bTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMyldLCAxNjAsIDE2LCAxNiwgeCwgeSwgMTYsIDE2KSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLldPUkxEX1dJRFRIOyB4ICs9IDE2KSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgdGhpcy5XT1JMRF9IRUlHSFQ7IHkgKz0gMTYpIHtcclxuICAgICAgICAgICAgICAgIGlmIChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAzMCkgPT09IDApXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fYmFja2dyb3VuZC5wdXNoKG5ldyBFbnRpdHkoMSwgWzQ4LCA1Nl1bTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMildLCBbMTYwLCAxNjhdW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpXSwgOCwgOCwgeCwgeSwgOCwgOCkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2V0Q3VycmVudFBsYXllcigwKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0Q3VycmVudFBsYXllcihwbGF5ZXJJZDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fY3VycmVudFBsYXllciA9IHBsYXllcklkO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGRQbGF5ZXIocGxheWVyOiBJUGxheWVyKSB7XHJcbiAgICAgICAgdGhpcy5fcGxheWVycy5wdXNoKHBsYXllcik7XHJcbiAgICAgICAgdGhpcy5fY3VycmVudFBsYXllciA9IHRoaXMuX3BsYXllcnMubGVuZ3RoID4gMCA/IHRoaXMuX3BsYXllcnMubGVuZ3RoIC0gMSA6IDA7XHJcbiAgICAgICAgdGhpcy5tYWluLnNjcmVlbi5yZW5kZXJTY3JlZW4oKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0UGxheWVyKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9wbGF5ZXJzW3RoaXMuX2N1cnJlbnRQbGF5ZXJdO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRCbG9jaygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYmxvY2tzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRCYWNrZ3JvdW5kKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9iYWNrZ3JvdW5kO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cGRhdGUoZHQ6IG51bWJlcikge1xyXG4gICAgICAgIGNvbnN0IHBsYXllciA9IHRoaXMuZ2V0UGxheWVyKCk7XHJcbiAgICAgICAgY29uc3Qga2V5cyA9IHRoaXMubWFpbi5pbnB1dC5hY3RpdmVLZXlzO1xyXG5cclxuICAgICAgICBsZXQgZHggPSAwO1xyXG4gICAgICAgIGxldCBkeSA9IDA7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3Qgc3BlZWQgPSAxMDAgKiBkdDsgLy8gMTAwIHBpeGVscyBwZXIgc2Vjb25kXHJcblxyXG4gICAgICAgIC8vIERldGVybWluZSBpbnRlbmRlZCBtb3ZlbWVudFxyXG4gICAgICAgIGlmIChrZXlzWydBcnJvd1VwJ10pIHtcclxuICAgICAgICAgICAgZHkgLT0gc3BlZWQ7XHJcbiAgICAgICAgICAgIHBsYXllci5zeSA9IDA7IC8vIFNwcml0ZSByb3cgZm9yIHVwXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGtleXNbJ0Fycm93RG93biddKSB7XHJcbiAgICAgICAgICAgIGR5ICs9IHNwZWVkO1xyXG4gICAgICAgICAgICBwbGF5ZXIuc3kgPSA0ODsgLy8gU3ByaXRlIHJvdyBmb3IgZG93blxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChrZXlzWydBcnJvd0xlZnQnXSkge1xyXG4gICAgICAgICAgICBkeCAtPSBzcGVlZDtcclxuICAgICAgICAgICAgcGxheWVyLnN5ID0gNzI7IC8vIFNwcml0ZSByb3cgZm9yIGxlZnRcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoa2V5c1snQXJyb3dSaWdodCddKSB7XHJcbiAgICAgICAgICAgIGR4ICs9IHNwZWVkO1xyXG4gICAgICAgICAgICBwbGF5ZXIuc3kgPSAyNDsgLy8gU3ByaXRlIHJvdyBmb3IgcmlnaHRcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEFwcGx5IG1vdmVtZW50IGlmIHRoZXJlJ3MgYW55XHJcbiAgICAgICAgaWYgKGR4ICE9PSAwIHx8IGR5ICE9PSAwKSB7XHJcbiAgICAgICAgICAgIGxldCBuZXh0WCA9IHBsYXllci54ICsgZHg7XHJcbiAgICAgICAgICAgIGxldCBuZXh0WSA9IHBsYXllci55ICsgZHk7XHJcblxyXG4gICAgICAgICAgICAvLyBCb3VuZGFyaWVzIGNoZWNrXHJcbiAgICAgICAgICAgIGlmIChuZXh0WCA8IDApIG5leHRYID0gMDtcclxuICAgICAgICAgICAgaWYgKG5leHRZIDwgMCkgbmV4dFkgPSAwO1xyXG4gICAgICAgICAgICBpZiAobmV4dFggKyBwbGF5ZXIudyA+IHRoaXMuV09STERfV0lEVEgpIG5leHRYID0gdGhpcy5XT1JMRF9XSURUSCAtIHBsYXllci53O1xyXG4gICAgICAgICAgICBpZiAobmV4dFkgKyBwbGF5ZXIuaCA+IHRoaXMuV09STERfSEVJR0hUKSBuZXh0WSA9IHRoaXMuV09STERfSEVJR0hUIC0gcGxheWVyLmg7XHJcblxyXG4gICAgICAgICAgICAvLyBDb2xsaXNpb24gY2hlY2tcclxuICAgICAgICAgICAgbGV0IGNvbGxpc2lvbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGJsb2NrIG9mIHRoaXMuX2Jsb2Nrcykge1xyXG4gICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgIG5leHRYIDwgYmxvY2suZHggKyBibG9jay5kdyAmJlxyXG4gICAgICAgICAgICAgICAgICAgIG5leHRYICsgcGxheWVyLncgPiBibG9jay5keCAmJlxyXG4gICAgICAgICAgICAgICAgICAgIG5leHRZIDwgYmxvY2suZHkgKyBibG9jay5kaCAmJlxyXG4gICAgICAgICAgICAgICAgICAgIG5leHRZICsgcGxheWVyLmggPiBibG9jay5keVxyXG4gICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sbGlzaW9uID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCFjb2xsaXNpb24pIHtcclxuICAgICAgICAgICAgICAgIHBsYXllci54ID0gbmV4dFg7XHJcbiAgICAgICAgICAgICAgICBwbGF5ZXIueSA9IG5leHRZO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBBbmltYXRlIHNwcml0ZSB3aGVuIG1vdmluZ1xyXG4gICAgICAgICAgICBwbGF5ZXIuc1JlbmRlckRlbGF5ICs9IGR0O1xyXG4gICAgICAgICAgICBpZiAocGxheWVyLnNSZW5kZXJEZWxheSA+PSAwLjA1KSB7XHJcbiAgICAgICAgICAgICAgICBwbGF5ZXIuc1JlbmRlckRlbGF5ID0gMDtcclxuICAgICAgICAgICAgICAgIGlmIChwbGF5ZXIuc3hJbmRleCA8IChwbGF5ZXIuc3gubGVuZ3RoIC0gMSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBwbGF5ZXIuc3hJbmRleCArPSAxO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBwbGF5ZXIuc3hJbmRleCA9IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBSZXNldCB0byBpZGxlIGZyYW1lIGlmIG5vdCBtb3ZpbmdcclxuICAgICAgICAgICAgcGxheWVyLnN4SW5kZXggPSAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9