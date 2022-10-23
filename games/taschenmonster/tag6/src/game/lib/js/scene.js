import Sprite from './sprite.js';
import { rightKey, leftKey, upKey, downKey } from '../../data/misc/keys.js';
import blocks from '../../data/misc/blocks.js';

export default class Scene extends Sprite {
    #lastDirection = downKey;
    tileSize = 80; 

    constructor (config, ctx) {
        super(config, ctx);
        this.collision = this.mapData.layers.find(l => l.name === 'collionsblock');
        this.houses = this.mapData.layers.find(l => l.name === 'houses');
    }

    whereAmI () {
        const x = Math.abs(this.position.x - 480);
        const y = Math.abs(this.position.y - 640);

        return {
            x: x / this.tileSize,
            y: y / this.tileSize,
            direction: this.#lastDirection
        };
    }
    
    #isLeftSideFree () {
        const { x, y } = this.whereAmI();
        const isLeftOfBody = this.collision.data[y][x - 1];
        
        return isLeftOfBody !== blocks.collisionBlock;
    }

    #isRightSideFree () {
        const { x, y } = this.whereAmI();
        const isRightOfBody = this.collision.data[y][x + 1];
        
        return isRightOfBody !== blocks.collisionBlock;
    }

    #isTopSideFree () {
        const { x, y } = this.whereAmI();
        const isTopOfHead = this.collision.data[y - 1][x];
        
        return isTopOfHead !== blocks.collisionBlock;
    }

    #isBottomSideFree () {
        const { x, y } = this.whereAmI();
        const isBottomOfHead = this.collision.data[y + 1][x];
        
        return isBottomOfHead !== blocks.collisionBlock;
    }

    #isEnteringBuilding () {
        const { x, y } = this.whereAmI();
        const isHouseAbove = this.houses.data[y - 2][x - 1];
        const isHouseAbove2 = this.houses.data[y][x - 1];
        
        return blocks.blueDoor === isHouseAbove || blocks.redDoor === isHouseAbove ||
               blocks.blueDoor === isHouseAbove2 || blocks.redDoor === isHouseAbove2
    }

    draw (direction) {
        // left
        if (direction === leftKey && this.#isLeftSideFree()) {
            if (this.#lastDirection === leftKey) {
                this.position.x += this.tileSize;
            }
        }
        // up
        if (direction === upKey && this.#isTopSideFree()) {
            if (this.#isEnteringBuilding()) {
                console.log('is entering building');
            }
            if (this.#lastDirection === upKey) {
                this.position.y += this.tileSize;
            }
        }
        // down
        if (direction === downKey && this.#isBottomSideFree()) {
            if (this.#lastDirection === downKey) {
                this.position.y -= this.tileSize;
            }
        }
        // right
        if (direction === rightKey  && this.#isRightSideFree()) {
            if (this.#lastDirection === rightKey) {
                this.position.x -= this.tileSize;
            }
        }

        this.#lastDirection = direction || downKey;
        this.ctx.drawImage(
            this.image, 
            this.position.x, 
            this.position.y, 
        );
    }
}