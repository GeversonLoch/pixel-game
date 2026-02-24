import { Main } from "./main";

import { MapManager } from "./managers/map.manager";

import { IPlayer } from "./interfaces/player.interface";
import { IEntity } from "./interfaces/entity.interface";

import { Player } from "./models/player.model";
import { Entity } from "./models/entity.model";

export class State {

    private _currentPlayer: number;
    private _players: Array<IPlayer>;
    
    public mapManager: MapManager;

    constructor(
        private main: Main
    ) {
        this.mapManager = new MapManager(this.main);

        this._players = new Array<IPlayer>(
            new Player(this.mapManager.currentRoom.width / 2, this.mapManager.currentRoom.height / 2, 24, 24, [0, 24, 48], 0, 24, 0)
        );

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
        return this.mapManager.currentRoom.blocks;
    }

    public getBackground() {
        return this.mapManager.currentRoom.background;
    }

    public update(dt: number) {
        if (this.mapManager.isTransitioning) return;

        const player = this.getPlayer();
        const keys = this.main.input.activeKeys;
        const room = this.mapManager.currentRoom;

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
            if (nextX + player.w > room.width) nextX = room.width - player.w;
            if (nextY + player.h > room.height) nextY = room.height - player.h;

            // Collision check
            let collision = false;
            for (const block of room.blocks) {
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
                
                // Portal check
                for (const portal of room.portals) {
                    if (
                        player.x < portal.dx + portal.dw &&
                        player.x + player.w > portal.dx &&
                        player.y < portal.dy + portal.dh &&
                        player.y + player.h > portal.dy
                    ) {
                        this.mapManager.triggerTransition(portal, player.x, player.y);
                        break;
                    }
                }
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