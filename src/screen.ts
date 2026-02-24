import { Main } from "./main";

import { IPlayer } from "./interfaces/player.interface";
import { IEntity } from "./interfaces/entity.interface";

export class Screen {

    private _screen: HTMLCanvasElement;
    private _ctx: CanvasRenderingContext2D;
    private _sprites: Array<HTMLImageElement>;

    public fadeAlpha: number = 0;
    private isFading: boolean = false;
    private fadeType: 'IN' | 'OUT' = 'IN';
    private fadeCallback: (() => void) | null = null;
    
    private snapshotCanvas: HTMLCanvasElement;
    private snapshotCtx: CanvasRenderingContext2D;
    
    public slideProgress: number = 0;
    private slideDirection: 'UP' | 'DOWN' | 'LEFT' | 'RIGHT' | null = null;
    public isSliding: boolean = false;
    private slideCallback: (() => void) | null = null;

    constructor(
        private main: Main
    ) {
        this._screen = document.getElementById('screen') as HTMLCanvasElement;
        this._ctx = this._screen.getContext('2d');
        this._sprites = new Array<HTMLImageElement>();

        this.snapshotCanvas = document.createElement('canvas');
        this.snapshotCtx = this.snapshotCanvas.getContext('2d');

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

    public startFadeOut(callback: () => void) {
        this.isFading = true;
        this.fadeType = 'OUT';
        this.fadeAlpha = 0;
        this.fadeCallback = callback;
    }

    public startFadeIn(callback: () => void) {
        this.isFading = true;
        this.fadeType = 'IN';
        this.fadeAlpha = 1;
        this.fadeCallback = callback;
    }

    public captureSnapshot() {
        this.snapshotCanvas.width = this._screen.width;
        this.snapshotCanvas.height = this._screen.height;
        this.snapshotCtx.drawImage(this._screen, 0, 0);
    }

    public startSlide(direction: 'UP' | 'DOWN' | 'LEFT' | 'RIGHT', callback: () => void) {
        this.slideDirection = direction;
        this.slideProgress = 0;
        this.isSliding = true;
        this.slideCallback = callback;
    }

    public update(dt: number) {
        if (this.isFading) {
            const speed = 2; // Full fade in 0.5 sec -> 1 / 0.5 = 2.
            if (this.fadeType === 'OUT') {
                this.fadeAlpha += speed * dt;
                if (this.fadeAlpha >= 1) {
                    this.fadeAlpha = 1;
                    this.isFading = false;
                    if (this.fadeCallback) this.fadeCallback();
                }
            } else {
                this.fadeAlpha -= speed * dt;
                if (this.fadeAlpha <= 0) {
                    this.fadeAlpha = 0;
                    this.isFading = false;
                    if (this.fadeCallback) this.fadeCallback();
                }
            }
        }
        
        if (this.isSliding) {
            const speed = 1.5; // ~0.66s slide
            this.slideProgress += speed * dt;
            if (this.slideProgress >= 1) {
                this.slideProgress = 1;
                this.isSliding = false;
                if (this.slideCallback) this.slideCallback();
            }
        }
    }

    public renderScreen() {
        this._ctx.clearRect(0, 0, this._screen.width, this._screen.height);

        let offsetX = 0;
        let offsetY = 0;
        let snapOffsetX = 0;
        let snapOffsetY = 0;

        if (this.isSliding) {
            const ease = this.slideProgress; // linear for now
            if (this.slideDirection === 'RIGHT') {
                offsetX = this._screen.width * (1 - ease);
                snapOffsetX = -this._screen.width * ease;
            } else if (this.slideDirection === 'LEFT') {
                offsetX = -this._screen.width * (1 - ease);
                snapOffsetX = this._screen.width * ease;
            } else if (this.slideDirection === 'DOWN') {
                offsetY = this._screen.height * (1 - ease);
                snapOffsetY = -this._screen.height * ease;
            } else if (this.slideDirection === 'UP') {
                offsetY = -this._screen.height * (1 - ease);
                snapOffsetY = this._screen.height * ease;
            }
        }

        // Draw the snapshot below the new rendering
        if (this.isSliding) {
            this._ctx.drawImage(this.snapshotCanvas, snapOffsetX, snapOffsetY);
        }

        const p = this.main.state.getPlayer();
        const room = this.main.state.mapManager.currentRoom;
        
        let cameraX = p.x + (p.w / 2) - (this._screen.width / 2);
        let cameraY = p.y + (p.h / 2) - (this._screen.height / 2);

        // Clamp Camera to room bounds
        if (cameraX < 0) cameraX = 0;
        if (cameraY < 0) cameraY = 0;
        if (cameraX + this._screen.width > room.width) cameraX = Math.max(0, room.width - this._screen.width);
        if (cameraY + this._screen.height > room.height) cameraY = Math.max(0, room.height - this._screen.height);

        this._ctx.save();
        this._ctx.translate(-Math.floor(cameraX) + Math.floor(offsetX), -Math.floor(cameraY) + Math.floor(offsetY));

        const cullX = cameraX - offsetX;
        const cullY = cameraY - offsetY;

        this.main.state.getBackground().forEach((x: IEntity) => {
            if (x.dx + x.dw < cullX || x.dx > cullX + this._screen.width ||
                x.dy + x.dh < cullY || x.dy > cullY + this._screen.height) {
                return;
            }

            if (this._sprites[x.sprite]) {
                this._ctx.drawImage(this._sprites[x.sprite], x.sx, x.sy, x.sw, x.sh, x.dx, x.dy, x.dw, x.dh);
            }
        });

        this.main.state.getBlock().forEach((x: IEntity) => {
            if (x.dx + x.dw < cullX || x.dx > cullX + this._screen.width ||
                x.dy + x.dh < cullY || x.dy > cullY + this._screen.height) {
                return;
            }

            if (this._sprites[x.sprite]) {
                this._ctx.drawImage(this._sprites[x.sprite], x.sx, x.sy, x.sw, x.sh, x.dx, x.dy, x.dw, x.dh);
            }
        });

        this.main.state.mapManager.currentRoom.portals.forEach((x: IEntity) => {
            if (x.dx + x.dw < cullX || x.dx > cullX + this._screen.width ||
                x.dy + x.dh < cullY || x.dy > cullY + this._screen.height) {
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

        // Renderização do black overlay de transição (Fading) independente da Câmera
        if (this.fadeAlpha > 0) {
            this._ctx.fillStyle = `rgba(0, 0, 0, ${this.fadeAlpha})`;
            this._ctx.fillRect(0, 0, this._screen.width, this._screen.height);
        }
    }

}