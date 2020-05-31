import { IPlayer } from "../interfaces/player.interface";

export class Player implements IPlayer {
    constructor(
        public x: number,
        public y: number,
        public w: number,
        public h: number,
        public sx: Array<number>,
        public sxIndex: number,
        public sy: number,
        public sRenderDelay: number
    ) {

    }
}