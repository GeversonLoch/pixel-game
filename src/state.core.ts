import { Main } from "./main";

import { IPlayer } from "./interfaces/player.interface";
import { IBlock } from "./interfaces/block.interface";

import { Player } from "./models/player.model";
import { Block } from "./models/block.model";

export class StateCore {

    private _currentPlayer: number;
    private _players: Array<IPlayer>;
    private _blocks: Array<IBlock>;

    constructor(
        private main: Main
    ) {
        this._players = new Array<IPlayer>(
            new Player(1, 1)
        );

        this._blocks = new Array<IBlock>(
            new Block(5, 3),
            new Block(2, 1)
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

    public removePlayer(index: number) {
        delete this._players[index];
    }

    public getPlayers() {
        return this._players;
    }

    public getPlayer() {
        return this._players[this._currentPlayer];
    }

    public addFruit(fruit: IBlock) {
        this._blocks.push(fruit);
        this.main.screen.renderScreen();
    }

    public removeFruit(index: number) {
        delete this._blocks[index];
    }

    public getFruits() {
        return this._blocks;
    }

}