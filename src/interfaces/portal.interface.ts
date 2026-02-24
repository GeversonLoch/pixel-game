import { IEntity } from "./entity.interface";

export interface IPortal extends IEntity {
    targetMapId: string;
    targetSpawnX: number;
    targetSpawnY: number;
    transitionType: "FADE" | "SLIDE";
}
