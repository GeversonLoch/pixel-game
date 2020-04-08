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

/***/ "./src/imput.core.ts":
/*!***************************!*\
  !*** ./src/imput.core.ts ***!
  \***************************/
/*! exports provided: InputCore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputCore", function() { return InputCore; });
var InputCore = /** @class */ (function () {
    function InputCore(main) {
        var _this = this;
        this.main = main;
        document.addEventListener('keydown', function (ev) { return _this.movePlayer(ev.key); });
        var dimensions = this.main.screen.getScreenDimensions();
        this._moveFunctions = Object({
            ArrowUp: function (player) {
                if ((player.y - 1) >= 0)
                    player.y -= 1;
            },
            ArrowDown: function (player) {
                if ((player.y + 1) < dimensions.height)
                    player.y += 1;
            },
            ArrowRight: function (player) {
                if ((player.x + 1) < dimensions.width)
                    player.x += 1;
            },
            ArrowLeft: function (player) {
                if ((player.x - 1) >= 0)
                    player.x -= 1;
            }
        });
    }
    InputCore.prototype.movePlayer = function (key) {
        if (this.checkCollision() !== key) {
            // @ts-ignore
            if (this._moveFunctions[key])
                this._moveFunctions[key](this.main.state.getPlayer());
        }
        this.main.screen.renderScreen();
    };
    InputCore.prototype.checkCollision = function () {
        var _this = this;
        var collisionDirection;
        this.main.state.getFruits().forEach(function (fruit) {
            if (_this.main.state.getPlayer().x === fruit.x - 1 && _this.main.state.getPlayer().y === fruit.y) {
                collisionDirection = 'ArrowRight';
            }
            if (_this.main.state.getPlayer().x === fruit.x + 1 && _this.main.state.getPlayer().y === fruit.y) {
                collisionDirection = 'ArrowLeft';
            }
            if (_this.main.state.getPlayer().y === fruit.y - 1 && _this.main.state.getPlayer().x === fruit.x) {
                collisionDirection = 'ArrowDown';
            }
            if (_this.main.state.getPlayer().y === fruit.y + 1 && _this.main.state.getPlayer().x === fruit.x) {
                collisionDirection = 'ArrowUp';
            }
        });
        return collisionDirection;
    };
    return InputCore;
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
/* harmony import */ var _screen_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./screen.core */ "./src/screen.core.ts");
/* harmony import */ var _state_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state.core */ "./src/state.core.ts");
/* harmony import */ var _imput_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./imput.core */ "./src/imput.core.ts");



var Main = /** @class */ (function () {
    function Main() {
        this.state = new _state_core__WEBPACK_IMPORTED_MODULE_1__["StateCore"](this);
        this.screen = new _screen_core__WEBPACK_IMPORTED_MODULE_0__["ScreenCore"](this);
        this.input = new _imput_core__WEBPACK_IMPORTED_MODULE_2__["InputCore"](this);
    }
    return Main;
}());

var main = new Main();


/***/ }),

/***/ "./src/models/block.model.ts":
/*!***********************************!*\
  !*** ./src/models/block.model.ts ***!
  \***********************************/
/*! exports provided: Block */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Block", function() { return Block; });
var Block = /** @class */ (function () {
    function Block(x, y) {
        this.x = x;
        this.y = y;
    }
    return Block;
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
    function Player(x, y) {
        this.x = x;
        this.y = y;
    }
    return Player;
}());



/***/ }),

/***/ "./src/screen.core.ts":
/*!****************************!*\
  !*** ./src/screen.core.ts ***!
  \****************************/
/*! exports provided: ScreenCore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScreenCore", function() { return ScreenCore; });
var ScreenCore = /** @class */ (function () {
    function ScreenCore(main) {
        this.main = main;
        this._screen = document.getElementById('screen');
        this._ctx = this._screen.getContext('2d');
        this.renderScreen();
    }
    ScreenCore.prototype.getScreenDimensions = function () {
        return {
            width: this._screen.width,
            height: this._screen.height
        };
    };
    ScreenCore.prototype.renderScreen = function () {
        var _this = this;
        this._ctx.clearRect(0, 0, 10, 10);
        this.main.state.getPlayers().forEach(function (player) {
            _this._ctx.fillStyle = 'gray';
            _this._ctx.fillRect(player.x, player.y, 1, 1);
        });
        this.main.state.getFruits().forEach(function (fruit) {
            _this._ctx.fillStyle = 'green';
            _this._ctx.fillRect(fruit.x, fruit.y, 1, 1);
        });
        // requestAnimationFrame(() => this.renderScreen);
    };
    return ScreenCore;
}());



/***/ }),

/***/ "./src/state.core.ts":
/*!***************************!*\
  !*** ./src/state.core.ts ***!
  \***************************/
/*! exports provided: StateCore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateCore", function() { return StateCore; });
/* harmony import */ var _models_player_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/player.model */ "./src/models/player.model.ts");
/* harmony import */ var _models_block_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/block.model */ "./src/models/block.model.ts");


var StateCore = /** @class */ (function () {
    function StateCore(main) {
        this.main = main;
        this._players = new Array(new _models_player_model__WEBPACK_IMPORTED_MODULE_0__["Player"](1, 1));
        this._blocks = new Array(new _models_block_model__WEBPACK_IMPORTED_MODULE_1__["Block"](5, 3), new _models_block_model__WEBPACK_IMPORTED_MODULE_1__["Block"](2, 1));
        this.setCurrentPlayer(0);
    }
    StateCore.prototype.setCurrentPlayer = function (playerId) {
        this._currentPlayer = playerId;
    };
    StateCore.prototype.addPlayer = function (player) {
        this._players.push(player);
        this._currentPlayer = this._players.length > 0 ? this._players.length - 1 : 0;
        this.main.screen.renderScreen();
    };
    StateCore.prototype.removePlayer = function (index) {
        delete this._players[index];
    };
    StateCore.prototype.getPlayers = function () {
        return this._players;
    };
    StateCore.prototype.getPlayer = function () {
        return this._players[this._currentPlayer];
    };
    StateCore.prototype.addFruit = function (fruit) {
        this._blocks.push(fruit);
        this.main.screen.renderScreen();
    };
    StateCore.prototype.removeFruit = function (index) {
        delete this._blocks[index];
    };
    StateCore.prototype.getFruits = function () {
        return this._blocks;
    };
    return StateCore;
}());



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltcHV0LmNvcmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy9ibG9jay5tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL3BsYXllci5tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyZWVuLmNvcmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRlLmNvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQzdFQTtBQUFBO0FBQUE7SUFJSSxtQkFDWSxJQUFVO1FBRHRCLGlCQXdCQztRQXZCVyxTQUFJLEdBQUosSUFBSSxDQUFNO1FBRWxCLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsVUFBQyxFQUFFLElB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LENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRU0sNEJBQVEsR0FBZixVQUFnQixLQUFhO1FBQ3pCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3BDLENBQUM7SUFFTSwrQkFBVyxHQUFsQixVQUFtQixLQUFhO1FBQzVCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRU0sNkJBQVMsR0FBaEI7UUFDSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDeEIsQ0FBQztJQUVMLGdCQUFDO0FBQUQsQ0FBQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvbWFpbi50c1wiKTtcbiIsImltcG9ydCB7IE1haW4gfSBmcm9tIFwiLi9tYWluXCI7XHJcblxyXG5pbXBvcnQgeyBJUGxheWVyIH0gZnJvbSBcIi4vaW50ZXJmYWNlcy9wbGF5ZXIuaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7IElCbG9jayB9IGZyb20gXCIuL2ludGVyZmFjZXMvYmxvY2suaW50ZXJmYWNlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgSW5wdXRDb3JlIHtcclxuXHJcbiAgICBwcml2YXRlIF9tb3ZlRnVuY3Rpb25zOiBvYmplY3Q7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBtYWluOiBNYWluXHJcbiAgICApIHtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2KSA9PiB0aGlzLm1vdmVQbGF5ZXIoZXYua2V5KSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGRpbWVuc2lvbnMgPSB0aGlzLm1haW4uc2NyZWVuLmdldFNjcmVlbkRpbWVuc2lvbnMoKTtcclxuXHJcbiAgICAgICAgdGhpcy5fbW92ZUZ1bmN0aW9ucyA9IE9iamVjdCh7XHJcbiAgICAgICAgICAgIEFycm93VXAocGxheWVyOiBJUGxheWVyKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoKHBsYXllci55IC0gMSkgPj0gMCkgcGxheWVyLnkgLT0gMTtcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIEFycm93RG93bihwbGF5ZXI6IElQbGF5ZXIpIHtcclxuICAgICAgICAgICAgICAgIGlmICgocGxheWVyLnkgKyAxKSA8IGRpbWVuc2lvbnMuaGVpZ2h0KSBwbGF5ZXIueSArPSAxO1xyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgQXJyb3dSaWdodChwbGF5ZXI6IElQbGF5ZXIpIHtcclxuICAgICAgICAgICAgICAgIGlmICgocGxheWVyLnggKyAxKSA8IGRpbWVuc2lvbnMud2lkdGgpIHBsYXllci54ICs9IDE7XHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICBBcnJvd0xlZnQocGxheWVyOiBJUGxheWVyKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoKHBsYXllci54IC0gMSkgPj0gMCkgcGxheWVyLnggLT0gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG1vdmVQbGF5ZXIoa2V5OiBhbnkpIHtcclxuICAgICAgICBpZiAodGhpcy5jaGVja0NvbGxpc2lvbigpICE9PSBrZXkpIHtcclxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICBpZiAodGhpcy5fbW92ZUZ1bmN0aW9uc1trZXldKSB0aGlzLl9tb3ZlRnVuY3Rpb25zW2tleV0odGhpcy5tYWluLnN0YXRlLmdldFBsYXllcigpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMubWFpbi5zY3JlZW4ucmVuZGVyU2NyZWVuKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tDb2xsaXNpb24oKSB7XHJcbiAgICAgICAgbGV0IGNvbGxpc2lvbkRpcmVjdGlvbjogc3RyaW5nO1xyXG5cclxuICAgICAgICB0aGlzLm1haW4uc3RhdGUuZ2V0RnJ1aXRzKCkuZm9yRWFjaCgoZnJ1aXQ6IElCbG9jaykgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5tYWluLnN0YXRlLmdldFBsYXllcigpLnggPT09IGZydWl0LnggLSAxICYmIHRoaXMubWFpbi5zdGF0ZS5nZXRQbGF5ZXIoKS55ID09PSBmcnVpdC55KSB7XHJcbiAgICAgICAgICAgICAgICBjb2xsaXNpb25EaXJlY3Rpb24gPSAnQXJyb3dSaWdodCc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMubWFpbi5zdGF0ZS5nZXRQbGF5ZXIoKS54ID09PSBmcnVpdC54ICsgMSAmJiB0aGlzLm1haW4uc3RhdGUuZ2V0UGxheWVyKCkueSA9PT0gZnJ1aXQueSkge1xyXG4gICAgICAgICAgICAgICAgY29sbGlzaW9uRGlyZWN0aW9uID0gJ0Fycm93TGVmdCc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMubWFpbi5zdGF0ZS5nZXRQbGF5ZXIoKS55ID09PSBmcnVpdC55IC0gMSAmJiB0aGlzLm1haW4uc3RhdGUuZ2V0UGxheWVyKCkueCA9PT0gZnJ1aXQueCkge1xyXG4gICAgICAgICAgICAgICAgY29sbGlzaW9uRGlyZWN0aW9uID0gJ0Fycm93RG93bic7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMubWFpbi5zdGF0ZS5nZXRQbGF5ZXIoKS55ID09PSBmcnVpdC55ICsgMSAmJiB0aGlzLm1haW4uc3RhdGUuZ2V0UGxheWVyKCkueCA9PT0gZnJ1aXQueCkge1xyXG4gICAgICAgICAgICAgICAgY29sbGlzaW9uRGlyZWN0aW9uID0gJ0Fycm93VXAnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBjb2xsaXNpb25EaXJlY3Rpb247XHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IHsgU2NyZWVuQ29yZSB9IGZyb20gXCIuL3NjcmVlbi5jb3JlXCI7XHJcbmltcG9ydCB7IFN0YXRlQ29yZSB9IGZyb20gXCIuL3N0YXRlLmNvcmVcIjtcclxuaW1wb3J0IHsgSW5wdXRDb3JlIH0gZnJvbSBcIi4vaW1wdXQuY29yZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1haW4ge1xyXG5cclxuICAgIHB1YmxpYyBzdGF0ZTogU3RhdGVDb3JlO1xyXG4gICAgcHVibGljIHNjcmVlbjogU2NyZWVuQ29yZTtcclxuICAgIHB1YmxpYyBpbnB1dDogSW5wdXRDb3JlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBuZXcgU3RhdGVDb3JlKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuc2NyZWVuID0gbmV3IFNjcmVlbkNvcmUodGhpcyk7XHJcbiAgICAgICAgdGhpcy5pbnB1dCA9IG5ldyBJbnB1dENvcmUodGhpcyk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5jb25zdCBtYWluID0gbmV3IE1haW4oKTsiLCJpbXBvcnQgeyBJQmxvY2sgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9ibG9jay5pbnRlcmZhY2VcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBCbG9jayBpbXBsZW1lbnRzIElCbG9jayB7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwdWJsaWMgeDpudW1iZXIsXHJcbiAgICAgICAgcHVibGljIHk6IG51bWJlclxyXG4gICAgKSB7XHJcblxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgSVBsYXllciB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL3BsYXllci5pbnRlcmZhY2VcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQbGF5ZXIgaW1wbGVtZW50cyBJUGxheWVyIHtcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHB1YmxpYyB4Om51bWJlcixcclxuICAgICAgICBwdWJsaWMgeTogbnVtYmVyXHJcbiAgICApIHtcclxuXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBNYWluIH0gZnJvbSBcIi4vbWFpblwiO1xyXG5cclxuaW1wb3J0IHsgSVBsYXllciB9IGZyb20gXCIuL2ludGVyZmFjZXMvcGxheWVyLmludGVyZmFjZVwiO1xyXG5pbXBvcnQgeyBJQmxvY2sgfSBmcm9tIFwiLi9pbnRlcmZhY2VzL2Jsb2NrLmludGVyZmFjZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNjcmVlbkNvcmUge1xyXG5cclxuICAgIHByaXZhdGUgX3NjcmVlbjogSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgICBwcml2YXRlIF9jdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIG1haW46IE1haW5cclxuICAgICkge1xyXG4gICAgICAgIHRoaXMuX3NjcmVlbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzY3JlZW4nKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcclxuICAgICAgICB0aGlzLl9jdHggPSB0aGlzLl9zY3JlZW4uZ2V0Q29udGV4dCgnMmQnKTtcclxuXHJcbiAgICAgICAgdGhpcy5yZW5kZXJTY3JlZW4oKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0U2NyZWVuRGltZW5zaW9ucygpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB3aWR0aDogdGhpcy5fc2NyZWVuLndpZHRoLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IHRoaXMuX3NjcmVlbi5oZWlnaHRcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW5kZXJTY3JlZW4oKSB7XHJcbiAgICAgICAgdGhpcy5fY3R4LmNsZWFyUmVjdCgwLCAwLCAxMCwgMTApO1xyXG5cclxuICAgICAgICB0aGlzLm1haW4uc3RhdGUuZ2V0UGxheWVycygpLmZvckVhY2goKHBsYXllcjogSVBsYXllcikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9jdHguZmlsbFN0eWxlID0gJ2dyYXknO1xyXG4gICAgICAgICAgICB0aGlzLl9jdHguZmlsbFJlY3QocGxheWVyLngsIHBsYXllci55LCAxLCAxKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5tYWluLnN0YXRlLmdldEZydWl0cygpLmZvckVhY2goKGZydWl0OiBJQmxvY2spID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fY3R4LmZpbGxTdHlsZSA9ICdncmVlbic7XHJcbiAgICAgICAgICAgIHRoaXMuX2N0eC5maWxsUmVjdChmcnVpdC54LCBmcnVpdC55LCAxLCAxKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHRoaXMucmVuZGVyU2NyZWVuKTtcclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQgeyBNYWluIH0gZnJvbSBcIi4vbWFpblwiO1xyXG5cclxuaW1wb3J0IHsgSVBsYXllciB9IGZyb20gXCIuL2ludGVyZmFjZXMvcGxheWVyLmludGVyZmFjZVwiO1xyXG5pbXBvcnQgeyBJQmxvY2sgfSBmcm9tIFwiLi9pbnRlcmZhY2VzL2Jsb2NrLmludGVyZmFjZVwiO1xyXG5cclxuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4vbW9kZWxzL3BsYXllci5tb2RlbFwiO1xyXG5pbXBvcnQgeyBCbG9jayB9IGZyb20gXCIuL21vZGVscy9ibG9jay5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFN0YXRlQ29yZSB7XHJcblxyXG4gICAgcHJpdmF0ZSBfY3VycmVudFBsYXllcjogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfcGxheWVyczogQXJyYXk8SVBsYXllcj47XHJcbiAgICBwcml2YXRlIF9ibG9ja3M6IEFycmF5PElCbG9jaz47XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBtYWluOiBNYWluXHJcbiAgICApIHtcclxuICAgICAgICB0aGlzLl9wbGF5ZXJzID0gbmV3IEFycmF5PElQbGF5ZXI+KFxyXG4gICAgICAgICAgICBuZXcgUGxheWVyKDEsIDEpXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgdGhpcy5fYmxvY2tzID0gbmV3IEFycmF5PElCbG9jaz4oXHJcbiAgICAgICAgICAgIG5ldyBCbG9jayg1LCAzKSxcclxuICAgICAgICAgICAgbmV3IEJsb2NrKDIsIDEpXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRDdXJyZW50UGxheWVyKDApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRDdXJyZW50UGxheWVyKHBsYXllcklkOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9jdXJyZW50UGxheWVyID0gcGxheWVySWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFkZFBsYXllcihwbGF5ZXI6IElQbGF5ZXIpIHtcclxuICAgICAgICB0aGlzLl9wbGF5ZXJzLnB1c2gocGxheWVyKTtcclxuICAgICAgICB0aGlzLl9jdXJyZW50UGxheWVyID0gdGhpcy5fcGxheWVycy5sZW5ndGggPiAwID8gdGhpcy5fcGxheWVycy5sZW5ndGggLSAxIDogMDtcclxuICAgICAgICB0aGlzLm1haW4uc2NyZWVuLnJlbmRlclNjcmVlbigpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW1vdmVQbGF5ZXIoaW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIGRlbGV0ZSB0aGlzLl9wbGF5ZXJzW2luZGV4XTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0UGxheWVycygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcGxheWVycztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0UGxheWVyKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9wbGF5ZXJzW3RoaXMuX2N1cnJlbnRQbGF5ZXJdO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGRGcnVpdChmcnVpdDogSUJsb2NrKSB7XHJcbiAgICAgICAgdGhpcy5fYmxvY2tzLnB1c2goZnJ1aXQpO1xyXG4gICAgICAgIHRoaXMubWFpbi5zY3JlZW4ucmVuZGVyU2NyZWVuKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlbW92ZUZydWl0KGluZGV4OiBudW1iZXIpIHtcclxuICAgICAgICBkZWxldGUgdGhpcy5fYmxvY2tzW2luZGV4XTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0RnJ1aXRzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9ibG9ja3M7XHJcbiAgICB9XHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==