import { IBlock } from "../interfaces/block.interface";

export class Block implements IBlock {
    constructor(
        public x:number,
        public y: number
    ) {

    }
}