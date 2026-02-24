import { Main } from "./main";

import { IPlayer } from "./interfaces/player.interface";
import { IEntity } from "./interfaces/entity.interface";

import { Player } from "./models/player.model";
import { Entity } from "./models/entity.model";

export class State {

    private _currentPlayer: number;
    private _players: Array<IPlayer>;
    private _blocks: Array<IEntity>;
    private _background: Array<IEntity>;
    
    public readonly WORLD_WIDTH = 2000;
    public readonly WORLD_HEIGHT = 2000;

    constructor(
        private main: Main
    ) {
        this._players = new Array<IPlayer>(
            new Player(this.WORLD_WIDTH / 2, this.WORLD_HEIGHT / 2, 24, 24, [0, 24, 48], 0, 24, 0)
        );

        this._blocks = new Array<IEntity>(
            new Entity(1, 0, 16, 32, 80, 100, 100, 32, 80)
        );
        for (let x = 0; x < this.WORLD_WIDTH; x += 16) {
            for (let y = 0; y < this.WORLD_HEIGHT; y += 16) {
                if (Math.floor(Math.random() * 100) === 0)
                    this._blocks.push(new Entity(1, 48, [128, 144, 180][Math.floor(Math.random() * 3)], 16, 16, x, y, 16, 16))
            }
        }

        for (let x = 0; x < this.WORLD_WIDTH; x += 16) {
            for (let y = 0; y < this.WORLD_HEIGHT; y += 16) {
                if (Math.floor(Math.random() * 100) === 0)
                    this._blocks.push(new Entity(1, 16, 176, 16, 16, x, y, 16, 16))
            }
        }

        this._background = new Array<IEntity>();
        for (let x = 0; x < this.WORLD_WIDTH; x += 16) {
            for (let y = 0; y < this.WORLD_HEIGHT; y += 16) {
                this._background.push(new Entity(1, [0, 16, 32][Math.floor(Math.random() * 3)], 160, 16, 16, x, y, 16, 16))
            }
        }

        for (let x = 0; x < this.WORLD_WIDTH; x += 16) {
            for (let y = 0; y < this.WORLD_HEIGHT; y += 16) {
                if (Math.floor(Math.random() * 30) === 0)
                    this._background.push(new Entity(1, [48, 56][Math.floor(Math.random() * 2)], [160, 168][Math.floor(Math.random() * 2)], 8, 8, x, y, 8, 8))
            }
        }

        this.setCurrentPlayer(0);
    }

    public setCurrentPlayer(playerId: number) {
        this._currentPlayer = playerId;
    }

    public addPlayer(player: IPlayer) {
        this._players.push(player);
        this._currentPlayer = this._players.length > 0 ? this._players.length - 1 : 0;
        this.main.screen.renderScreen();
    }

    public getPlayer() {
        return this._players[this._currentPlayer];
    }

    public getBlock() {
        return this._blocks;
    }

    public getBackground() {
        return this._background;
    }

    public update(dt: number) {
        const player = this.getPlayer();
        const keys = this.main.input.activeKeys;

        let dx = 0;
        let dy = 0;
        
        const speed = 100 * dt; // 100 pixels per second

        // Determine intended movement
        if (keys['ArrowUp']) {
            dy -= speed;
            player.sy = 0; // Sprite row for up
        }
        else if (keys['ArrowDown']) {
            dy += speed;
            player.sy = 48; // Sprite row for down
        }
        else if (keys['ArrowLeft']) {
            dx -= speed;
            player.sy = 72; // Sprite row for left
        }
        else if (keys['ArrowRight']) {
            dx += speed;
            player.sy = 24; // Sprite row for right
        }

        // Apply movement if there's any
        if (dx !== 0 || dy !== 0) {
            let nextX = player.x + dx;
            let nextY = player.y + dy;

            // Boundaries check
            if (nextX < 0) nextX = 0;
            if (nextY < 0) nextY = 0;
            if (nextX + player.w > this.WORLD_WIDTH) nextX = this.WORLD_WIDTH - player.w;
            if (nextY + player.h > this.WORLD_HEIGHT) nextY = this.WORLD_HEIGHT - player.h;

            // Collision check
            let collision = false;
            for (const block of this._blocks) {
                if (
                    nextX < block.dx + block.dw &&
                    nextX + player.w > block.dx &&
                    nextY < block.dy + block.dh &&
                    nextY + player.h > block.dy
                ) {
                    collision = true;
                    break;
                }
            }

            if (!collision) {
                player.x = nextX;
                player.y = nextY;
            }

            // Animate sprite when moving
            player.sRenderDelay += dt;
            if (player.sRenderDelay >= 0.05) {
                player.sRenderDelay = 0;
                if (player.sxIndex < (player.sx.length - 1)) {
                    player.sxIndex += 1;
                } else {
                    player.sxIndex = 0;
                }
            }
        } else {
            // Reset to idle frame if not moving
            player.sxIndex = 0;
        }
    }

}