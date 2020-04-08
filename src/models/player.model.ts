import { IPlayer } from "../interfaces/player.interface";

export class Player implements IPlayer {
    constructor(
        public x:number,
        public y: number
    ) {

    }
}