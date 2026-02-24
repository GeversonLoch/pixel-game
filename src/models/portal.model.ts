import { Entity } from "./entity.model";
import { IPortal } from "../interfaces/portal.interface";

export class Portal extends Entity implements IPortal {
    constructor(
        spriteId: number,
        sx: number,
        sy: number,
        sw: number,
        sh: number,
        dx: number,
        dy: number,
        dw: number,
        dh: number,
        public targetMapId: string,
        public targetSpawnX: number,
        public targetSpawnY: number,
        public transitionType: "FADE" | "SLIDE" = "FADE"
    ) {
        super(spriteId, sx, sy, sw, sh, dx, dy, dw, dh);
    }
}
