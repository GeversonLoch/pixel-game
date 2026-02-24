import { Main } from "../main";
import { Room } from "../models/room.model";
import { Entity } from "../models/entity.model";
import { Portal } from "../models/portal.model";
import { IPortal } from "../interfaces/portal.interface";

export class MapManager {
    public currentRoom: Room;
    public isTransitioning: boolean = false;
    private roomCache: Map<string, Room> = new Map<string, Room>();

    constructor(private main: Main) {
        // Load an initial default room
        this.loadRoom("map_0_0");
    }

    public triggerTransition(portal: IPortal, currentX: number, currentY: number) {
        if (this.isTransitioning) return;
        this.isTransitioning = true;
        
        if (portal.transitionType === "FADE") {
            this.main.screen.startFadeOut(() => {
                this.loadRoom(portal.targetMapId);
                const player = this.main.state.getPlayer();
                
                // -1 indicates keeping the same position axis logically
                player.x = portal.targetSpawnX !== -1 ? portal.targetSpawnX : currentX;
                player.y = portal.targetSpawnY !== -1 ? portal.targetSpawnY : currentY;
                
                this.main.screen.startFadeIn(() => {
                    this.isTransitioning = false;
                });
            });
        } else if (portal.transitionType === "SLIDE") {
            // Placeholder for Step 4 (Panning mechanics)
            // For now, act as an instant cut/pop
            this.loadRoom(portal.targetMapId);
            const player = this.main.state.getPlayer();
            player.x = portal.targetSpawnX !== -1 ? portal.targetSpawnX : currentX;
            player.y = portal.targetSpawnY !== -1 ? portal.targetSpawnY : currentY;
            this.isTransitioning = false;
        }
    }

    public loadRoom(id: string) {
        if (!this.roomCache.has(id)) {
            this.roomCache.set(id, this.buildRoom(id));
        }
        this.currentRoom = this.roomCache.get(id);

        // Preload adjacencies asynchronously
        setTimeout(() => {
            if (id.startsWith("map_")) {
                const parts = id.split("_");
                const mapX = parseInt(parts[1]);
                const mapY = parseInt(parts[2]);

                this.preloadRoom(`map_${mapX}_${mapY - 1}`);
                this.preloadRoom(`map_${mapX}_${mapY + 1}`);
                this.preloadRoom(`map_${mapX - 1}_${mapY}`);
                this.preloadRoom(`map_${mapX + 1}_${mapY}`);
            }
        }, 50);
    }

    private preloadRoom(id: string) {
        if (!this.roomCache.has(id)) {
            this.roomCache.set(id, this.buildRoom(id));
        }
    }

    private buildRoom(id: string): Room {
        // Mocking the generation for testing:
        const width = 2000;
        const height = 2000;
        const room = new Room(id, width, height);

        // Populate background
        for (let x = 0; x < width; x += 16) {
            for (let y = 0; y < height; y += 16) {
                room.background.push(new Entity(1, [0, 16, 32][Math.floor(Math.random() * 3)], 160, 16, 16, x, y, 16, 16));
            }
        }

        for (let x = 0; x < width; x += 16) {
            for (let y = 0; y < height; y += 16) {
                if (Math.floor(Math.random() * 30) === 0) {
                    room.background.push(new Entity(1, [48, 56][Math.floor(Math.random() * 2)], [160, 168][Math.floor(Math.random() * 2)], 8, 8, x, y, 8, 8));
                }
            }
        }

        if (id.startsWith("map_")) {
            const parts = id.split("_");
            const mapX = parseInt(parts[1]);
            const mapY = parseInt(parts[2]);

            // Add edge triggers for SLIDE transitions:
            // Top edge (North)
            room.portals.push(new Portal(0, 0, 0, 0, 0, 0, 0, width, 10, `map_${mapX}_${mapY - 1}`, -1, height - 35, "SLIDE"));
            // Bottom edge (South)
            room.portals.push(new Portal(0, 0, 0, 0, 0, 0, height - 10, width, 10, `map_${mapX}_${mapY + 1}`, -1, 35, "SLIDE"));
            // Left edge (West)
            room.portals.push(new Portal(0, 0, 0, 0, 0, 0, 0, 10, height, `map_${mapX - 1}_${mapY}`, width - 35, -1, "SLIDE"));
            // Right edge (East)
            room.portals.push(new Portal(0, 0, 0, 0, 0, width - 10, 0, 10, height, `map_${mapX + 1}_${mapY}`, 35, -1, "SLIDE"));

            // A visible portal on the map to test interiors
            if (mapX === 0 && mapY === 0) {
                // Ao entrar em interior_0_0, ele nascerá em X=150, Y=120 (meio da sala interior)
                room.portals.push(new Portal(1, 16, 176, 16, 16, 200, 200, 16, 16, "interior_0_0", 150, 120, "FADE"));
            }
        } else if (id === "interior_0_0") {
            room.width = 320;
            room.height = 240;
            // O portal de volta para fora (map_0_0) ficará na parte sul desta sala (y=220)
            room.portals.push(new Portal(1, 48, 176, 16, 16, 150, 220, 16, 16, "map_0_0", 200, 220, "FADE"));
        }

        return room;
    }
}
