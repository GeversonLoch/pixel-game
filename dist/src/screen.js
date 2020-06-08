var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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
        if (p.sRenderDelay < 3) {
            p.sRenderDelay += 1;
        }
        else {
            p.sRenderDelay = 0;
            if (p.sxIndex < (p.sx.length - 1)) {
                p.sxIndex += 1;
            }
            else
                p.sxIndex = 0;
        }
        this._ctx.drawImage(this._sprites[0], p.sx[p.sxIndex], p.sy, p.w, p.h, p.x, p.y, p.w, p.h);
        // requestAnimationFrame(() => this.renderScreen);
    };
    return Screen;
}());
export { Screen };
//# sourceMappingURL=screen.js.map