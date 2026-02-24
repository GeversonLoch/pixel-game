import { IEntity } from "../interfaces/entity.interface";
import { IRoom } from "../interfaces/room.interface";
import { IPortal } from "../interfaces/portal.interface";

export class Room implements IRoom {
    constructor(
        public id: string,
        public width: number,
        public height: number,
        public blocks: IEntity[] = [],
        public background: IEntity[] = [],
        public portals: IPortal[] = []
    ) {}
}
