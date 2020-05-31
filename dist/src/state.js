import { Player } from "./models/player.model";
import { Entity } from "./models/entity.model";
var State = /** @class */ (function () {
    function State(main) {
        this.main = main;
        this._players = new Array(new Player(0, 24, 24, 24, [0, 24, 48], 0, 24, 0));
        this._blocks = new Array(
        // new Entity(1, 0, 16, 32, 80, 100, 100, 32, 80)
        );
        for (var x = 0; x < 384; x += 16) {
            for (var y = 0; y < 384; y += 16) {
                if (Math.floor(Math.random() * 100) === 0)
                    this._blocks.push(new Entity(1, 48, [128, 144][Math.floor(Math.random() * 2)], 16, 16, x, y, 16, 16));
            }
        }
        for (var x = 0; x < 384; x += 16) {
            for (var y = 0; y < 384; y += 16) {
                if (Math.floor(Math.random() * 100) === 0)
                    this._blocks.push(new Entity(1, 16, 176, 16, 16, x, y, 16, 16));
            }
        }
        for (var x = 0; x < 384; x += 16) {
            for (var y = 0; y < 384; y += 16) {
                if (Math.floor(Math.random() * 100) === 0)
                    this._blocks.push(new Entity(1, 48, 160, 16, 16, x, y, 16, 16));
            }
        }
        this._background = new Array();
        for (var x = 0; x < 384; x += 16) {
            for (var y = 0; y < 384; y += 16) {
                this._background.push(new Entity(1, [0, 16, 32][Math.floor(Math.random() * 3)], 160, 16, 16, x, y, 16, 16));
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
    return State;
}());
export { State };
//# sourceMappingURL=state.js.map