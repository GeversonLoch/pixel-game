import { Main } from "./main";

import { IPlayer } from "./interfaces/player.interface";
import { IEntity } from "./interfaces/entity.interface";

export class Input {

    private _moveFunctions: object;

    constructor(
        private main: Main
    ) {
        document.addEventListener('keydown', (ev) => this.movePlayer(ev.key));

        const dimensions = this.main.screen.getScreenDimensions();

        this._moveFunctions = Object({
            ArrowUp(player: IPlayer) {
                player.sy = 0;
                if ((player.y - 1) >= 0) player.y -= 1;
            },

            ArrowDown(player: IPlayer) {
                player.sy = 48;
                if ((player.y + 1) < dimensions.height) player.y += 1;
            },

            ArrowRight(player: IPlayer) {
                player.sy = 24;
                if ((player.x + 1) < dimensions.width) player.x += 1;
            },

            ArrowLeft(player: IPlayer) {
                player.sy = 72;
                if ((player.x - 1) >= 0) player.x -= 1;
            }
        });
    }

    movePlayer(key: any) {
        if (this.checkCollision() !== key) {
            // @ts-ignore
            if (this._moveFunctions[key]) this._moveFunctions[key](this.main.state.getPlayer());
        }

        this.main.screen.renderScreen();
    }

    checkCollision() {
        let collisionDirection: string;
        const player = this.main.state.getPlayer();

        this.main.state.getBlock().forEach((block: IEntity) => {

            if (
                (player.x + player.w) === block.dx
                && (player.y + player.h) >= block.dy
                && (block.dy + block.dh) > player.y
            ) collisionDirection = 'ArrowRight';

            if (
                (block.dx + block.dw) === player.x
                && (player.y + player.w) >= block.dy
                && (block.dy + block.dh) > player.y
            ) collisionDirection = 'ArrowLeft';

            if (
                (player.y + player.h) === block.dy
                && (player.x + player.w) >= block.dx
                && (block.dx + block.dw) > player.x
            ) collisionDirection = 'ArrowDown';

            if (
                (block.dy + block.dh) === player.y
                && (player.x + player.w) >= block.dx
                && (block.dx + block.dw) > player.x
            ) collisionDirection = 'ArrowUp';

        });

        return collisionDirection;
    }

}