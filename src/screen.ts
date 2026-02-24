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

        window.addEventListener('resize', () => this.resize());
        this.resize();

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

    public resize() {
        this._screen.width = window.innerWidth;
        this._screen.height = window.innerHeight;
        // Keep pixelated aesthetic when rescaled
        this._ctx.imageSmoothingEnabled = false;
    }

    public getScreenDimensions() {
        return {
            width: this._screen.width,
            height: this._screen.height
        };
    }

    public renderScreen() {
        this._ctx.clearRect(0, 0, this._screen.width, this._screen.height);

        const p = this.main.state.getPlayer();
        
        // Câmera segue o jogador
        // Calculamos a posição da câmera centralizada no jogador
        // Além disso adicionamos um pequeno zoom fictício (ou mantemos real) escalando o contexto no futuro, 
        // mas no momento a câmera só dá o pan na imagem.
        const cameraX = p.x + (p.w / 2) - (this._screen.width / 2);
        const cameraY = p.y + (p.h / 2) - (this._screen.height / 2);

        this._ctx.save();
        // Move o contexto inteiro pela câmera
        this._ctx.translate(-Math.floor(cameraX), -Math.floor(cameraY));

        this.main.state.getBackground().forEach((x: IEntity) => {
            // Culling básico: não desenha se não estiver na tela
            if (x.dx + x.dw < cameraX || x.dx > cameraX + this._screen.width ||
                x.dy + x.dh < cameraY || x.dy > cameraY + this._screen.height) {
                return;
            }

            if (this._sprites[x.sprite]) {
                this._ctx.drawImage(this._sprites[x.sprite], x.sx, x.sy, x.sw, x.sh, x.dx, x.dy, x.dw, x.dh);
            }
        });

        this.main.state.getBlock().forEach((x: IEntity) => {
            // Culling bádico
            if (x.dx + x.dw < cameraX || x.dx > cameraX + this._screen.width ||
                x.dy + x.dh < cameraY || x.dy > cameraY + this._screen.height) {
                return;
            }

            if (this._sprites[x.sprite]) {
                this._ctx.drawImage(this._sprites[x.sprite], x.sx, x.sy, x.sw, x.sh, x.dx, x.dy, x.dw, x.dh);
            }
        });

        if (this._sprites[0]) {
            this._ctx.drawImage(this._sprites[0], p.sx[p.sxIndex], p.sy, p.w, p.h, p.x, p.y, p.w, p.h);
        }

        this._ctx.restore();
    }

}