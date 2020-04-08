import { Main } from "./main";

import { IPlayer } from "./interfaces/player.interface";
import { IBlock } from "./interfaces/block.interface";

export class Screen {

    private _screen: HTMLCanvasElement;
    private _ctx: CanvasRenderingContext2D;

    constructor(
        private main: Main
    ) {
        this._screen = document.getElementById('screen') as HTMLCanvasElement;
        this._ctx = this._screen.getContext('2d');

        this.renderScreen();
    }

    public getScreenDimensions() {
        return {
            width: this._screen.width,
            height: this._screen.height
        };
    }

    public renderScreen() {
        this._ctx.clearRect(0, 0, 10, 10);

        this.main.state.getPlayers().forEach((player: IPlayer) => {
            this._ctx.fillStyle = 'gray';
            this._ctx.fillRect(player.x, player.y, 1, 1);
        });

        this.main.state.getFruits().forEach((fruit: IBlock) => {
            this._ctx.fillStyle = 'green';
            this._ctx.fillRect(fruit.x, fruit.y, 1, 1);
        });

        // requestAnimationFrame(() => this.renderScreen);
    }

}