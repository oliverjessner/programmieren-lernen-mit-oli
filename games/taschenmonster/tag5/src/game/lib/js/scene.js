import Sprite from './sprite.js';

export default class Scene extends Sprite {
    #collisonBlockNumber = 2116;
    #redDoor = 1724;
    #blueDoor = 2033;
    tileSize = 80; 

    constructor (config, ctx) {
        super(config, ctx);
        this.collision = this.mapData.layers.find(l => l.name === 'collionsblock');
        this.houses = this.mapData.layers.find(l => l.name === 'Houses');
    }

    whereAmI () {
        const x = Math.abs(this.position.x - 480);
        const y = Math.abs(this.position.y - 640);

        return {
            x: x / this.tileSize,
            y: y / this.tileSize
        };
    }
    
    #isLeftSideFree () {
        const { x, y } = this.whereAmI();
        const isRightOfBody = this.collision.data[y][x - 1];
        
        return isRightOfBody !== this.#collisonBlockNumber;
    }

    #isRightSideFree () {
        const { x, y } = this.whereAmI();
        const isLeftOfBody = this.collision.data[y][x + 1];
        
        return isLeftOfBody !== this.#collisonBlockNumber;
    }

    #isTopSideFree () {
        const { x, y } = this.whereAmI();
        const isTopOfHead = this.collision.data[y - 1][x];
        
        return isTopOfHead !== this.#collisonBlockNumber;
    }

    #isBottomSideFree () {
        const { x, y } = this.whereAmI();
        const isTopOfHead = this.collision.data[y + 1][x];
        
        return isTopOfHead !== this.#collisonBlockNumber;
    }

    #isEnteringBuilding () {
        const { x, y } = this.whereAmI();
        const isHouseAbove = this.houses.data[y - 2][x - 1];
        const isHouseAbove2 = this.houses.data[y][x - 1];
        
        return this.#blueDoor === isHouseAbove || this.#redDoor === isHouseAbove ||
               this.#blueDoor === isHouseAbove2 || this.#redDoor === isHouseAbove2
    }

    draw (direction) {
        // left
        if (direction === 'a' && this.#isLeftSideFree()) {
            this.position.x += this.tileSize;
        }
        // up
        if (direction === 'w' && this.#isTopSideFree()) {
            if (this.#isEnteringBuilding()) {
                console.log('is entering building');
            }
            this.position.y += this.tileSize;
        }
        // down
        if (direction === 's' && this.#isBottomSideFree()) {
            this.position.y -= this.tileSize;
        }
        // right
        if (direction === 'd' && this.#isRightSideFree()) {
            this.position.x -= this.tileSize;
        }

        this.ctx.drawImage(
            this.image, 
            this.position.x, 
            this.position.y, 
        );
    }
}