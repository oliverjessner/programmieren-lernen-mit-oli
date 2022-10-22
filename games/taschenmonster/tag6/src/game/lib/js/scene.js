import Sprite from './sprite.js';

const upKey = 'w';
const downKey = 's';
const leftKey = 'a';
const rightKey = 'd';

export default class Scene extends Sprite {
    #collisonBlockNumber = 2116;
    #redDoor = 1724;
    #blueDoor = 2033;
    #lasDirection = '';
    tileSize = 80; 

    constructor (config, ctx) {
        super(config, ctx);
        this.collision = this.mapData.layers.find(l => l.name === 'collionsblock');
        this.houses = this.mapData.layers.find(l => l.name === 'Houses');
        this.interactable = this.mapData.layers.find(l => l.name === 'interactable');
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
        const isLeftOfBody = this.collision.data[y][x - 1];
        
        return isLeftOfBody !== this.#collisonBlockNumber;
    }

    #isRightSideFree () {
        const { x, y } = this.whereAmI();
        const isRightOfBody = this.collision.data[y][x + 1];
        
        return isRightOfBody !== this.#collisonBlockNumber;
    }

    #isTopSideFree () {
        const { x, y } = this.whereAmI();
        const isTopOfHead = this.collision.data[y - 1][x];
        
        return isTopOfHead !== this.#collisonBlockNumber;
    }

    #isBottomSideFree () {
        const { x, y } = this.whereAmI();
        const isBottomOfHead = this.collision.data[y + 1][x];
        
        return isBottomOfHead !== this.#collisonBlockNumber;
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
        if (direction === leftKey && this.#isLeftSideFree()) {
            if (this.#lasDirection !== leftKey) {
                this.#lasDirection = leftKey;
            } else {
                this.position.x += this.tileSize;
            }
        }
        // up
        if (direction === upKey && this.#isTopSideFree()) {
            if (this.#isEnteringBuilding()) {
                console.log('is entering building');
            }
            if (this.#lasDirection !== upKey) {
                this.#lasDirection = upKey;
            } else {
                this.position.y += this.tileSize;
            }
        }
        // down
        if (direction === downKey && this.#isBottomSideFree()) {
            if (this.#lasDirection !== downKey) {
                this.#lasDirection = downKey;
            } else {
                this.position.y -= this.tileSize;
            }
        }
        // right
        if (direction === rightKey  && this.#isRightSideFree()) {
            if (this.#lasDirection !== rightKey) {
                this.#lasDirection = rightKey;
            } else {
                this.position.x -= this.tileSize;
            }
        }

        this.ctx.drawImage(
            this.image, 
            this.position.x, 
            this.position.y, 
        );
    }
}