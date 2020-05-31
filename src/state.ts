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

    constructor(
        private main: Main
    ) {
        this._players = new Array<IPlayer>(
            new Player(0, 24, 24, 24, [0, 24, 48], 0, 24, 0)
        );

        this._blocks = new Array<IEntity>(
            new Entity(1, 0, 16, 32, 80, 100, 100, 32, 80)
        );
        for (let x = 0; x < 384; x += 16) {
            for (let y = 0; y < 384; y += 16) {
                if (Math.floor(Math.random() * 100) === 0)
                    this._blocks.push(new Entity(1, 48, [128, 144, 180][Math.floor(Math.random() * 3)], 16, 16, x, y, 16, 16))
            }
        }

        for (let x = 0; x < 384; x += 16) {
            for (let y = 0; y < 384; y += 16) {
                if (Math.floor(Math.random() * 100) === 0)
                    this._blocks.push(new Entity(1, 16, 176, 16, 16, x, y, 16, 16))
            }
        }

        this._background = new Array<IEntity>();
        for (let x = 0; x < 384; x += 16) {
            for (let y = 0; y < 384; y += 16) {
                this._background.push(new Entity(1, [0, 16, 32][Math.floor(Math.random() * 3)], 160, 16, 16, x, y, 16, 16))
            }
        }

        for (let x = 0; x < 384; x += 16) {
            for (let y = 0; y < 384; y += 16) {
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

}