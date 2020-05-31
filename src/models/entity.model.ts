import { IEntity } from "../interfaces/entity.interface";

export class Entity implements IEntity {
    constructor(
        public sprite: number,

        public sx: number,
        public sy: number,
        public sw: number,
        public sh: number,
    
        public dx: number,
        public dy: number,
        public dw: number,
        public dh: number
    ) {

    }
}