import { Main } from "./main";

import { IPlayer } from "./interfaces/player.interface";
import { IBlock } from "./interfaces/block.interface";

export class Input {

    private _moveFunctions: object;

    constructor(
        private main: Main
    ) {
        document.addEventListener('keydown', (ev) => this.movePlayer(ev.key));

        const dimensions = this.main.screen.getScreenDimensions();

        this._moveFunctions = Object({
            ArrowUp(player: IPlayer) {
                if ((player.y - 1) >= 0) player.y -= 1;
            },

            ArrowDown(player: IPlayer) {
                if ((player.y + 1) < dimensions.height) player.y += 1;
            },

            ArrowRight(player: IPlayer) {
                if ((player.x + 1) < dimensions.width) player.x += 1;
            },

            ArrowLeft(player: IPlayer) {
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

        this.main.state.getFruits().forEach((fruit: IBlock) => {
            if (this.main.state.getPlayer().x === fruit.x - 1 && this.main.state.getPlayer().y === fruit.y) {
                collisionDirection = 'ArrowRight';
            }
            if (this.main.state.getPlayer().x === fruit.x + 1 && this.main.state.getPlayer().y === fruit.y) {
                collisionDirection = 'ArrowLeft';
            }
            if (this.main.state.getPlayer().y === fruit.y - 1 && this.main.state.getPlayer().x === fruit.x) {
                collisionDirection = 'ArrowDown';
            }
            if (this.main.state.getPlayer().y === fruit.y + 1 && this.main.state.getPlayer().x === fruit.x) {
                collisionDirection = 'ArrowUp';
            }
        });

        return collisionDirection;
    }

}