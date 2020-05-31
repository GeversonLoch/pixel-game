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
        this.main.screen.renderScreen();
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
export { Input };
//# sourceMappingURL=imput.js.map