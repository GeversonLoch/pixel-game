import { Main } from "./main";

import { IPlayer } from "./interfaces/player.interface";
import { IEntity } from "./interfaces/entity.interface";

export class Screen {

    private _screen: HTMLCanvasElement;
    private _ctx: CanvasRenderingContext2D;
    private _sprites: Array<HTMLImageElement>;

    constructor(
        private main: Main
    ) {
        this._screen = document.getElementById('screen') as HTMLCanvasElement;
        this._ctx = this._screen.getContext('2d');
        this._sprites = new Array<HTMLImageElement>();

        this.addSpriteCollection([
            'assets/images/LinkWalk.png',
            'assets/images/Zelda1Minish01.png'
        ]);
    }

    async addSpriteCollection(src: string[]) {
        for (const x of src) {
            await this.addSprite(x);
        }
        this.renderScreen();
    }

    private addSprite(src: string): Promise<void> {
        return new Promise(resolve => {
            this._sprites.push(new Image());
            this._sprites[this._sprites.length - 1].src = src;
            this._sprites[this._sprites.length - 1].onload = () => {
                resolve();
            }
        });
    }

    public getScreenDimensions() {
        return {
            width: this._screen.width,
            height: this._screen.height
        };
    }

    public renderScreen() {
        this._ctx.clearRect(0, 0, this._screen.width, this._screen.height);

        this.main.state.getBackground().forEach((x: IEntity) => {
            if (this._sprites[x.sprite]) {
                this._ctx.drawImage(this._sprites[x.sprite], x.sx, x.sy, x.sw, x.sh, x.dx, x.dy, x.dw, x.dh);
            }
        });

        this.main.state.getBlock().forEach((x: IEntity) => {
            if (this._sprites[x.sprite]) {
                this._ctx.drawImage(this._sprites[x.sprite], x.sx, x.sy, x.sw, x.sh, x.dx, x.dy, x.dw, x.dh);
            }
        });

        const p = this.main.state.getPlayer();
        if (this._sprites[0]) {
            this._ctx.drawImage(this._sprites[0], p.sx[p.sxIndex], p.sy, p.w, p.h, p.x, p.y, p.w, p.h);
        }
    }

}