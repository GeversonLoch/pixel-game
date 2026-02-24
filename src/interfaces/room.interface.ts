import { IEntity } from "./entity.interface";
import { IPortal } from "./portal.interface";

export interface IRoom {
    id: string;
    width: number;
    height: number;
    blocks: IEntity[];
    background: IEntity[];
    portals: IPortal[];
}
