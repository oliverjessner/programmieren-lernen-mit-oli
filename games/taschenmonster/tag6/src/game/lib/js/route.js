import Scene from './scene.js';
import gameSettings from './gameSettings.js';
import { rightKey, leftKey, upKey, downKey } from '../../data/misc/keys.js';
import blocks from '../../data/misc/blocks.js';
import InfoBox from './infobox.js';

export default class Route extends Scene {
    constructor (config, ctx) {
        super(config, ctx);
        this.interactable = this.mapData.layers.find(l => l.name === 'interactable');
        this.infobox = new InfoBox({
            ctx: this.ctx,
            tileSize: this.tileSize
        });
    }

    draw (direction) {
        super.draw(direction);
        
        if (gameSettings.grid) {
            return this.#renderGrid();
        }
        if (gameSettings.cordinates) {
            console.log({
                ...this.whereAmI(), 
                facingBlock: this.#getBlockNextToPlayer()
            });
        }
    }

    #renderGrid () {
        const step = this.tileSize;
        const width = this.image.width;
        const height = this.image.height;
        const color = 'rgb(0, 0, 255)';

        this.ctx.beginPath(); 
        this.ctx.strokeStyle = color;
        this.ctx.lineWidth = 1;

        for (let x = 0; x <= width; x += step) {
            this.ctx.moveTo(x, 0);
            this.ctx.lineTo(x, height);
        }
        for (let y = 0; y <= height; y += step) {
            this.ctx.moveTo(0, y);
            this.ctx.lineTo(width, y);
        }

        this.ctx.stroke(); 
    }

    #getBlockNextToPlayer () {
        const { x, y, direction } = this.whereAmI();

        if (direction === leftKey) {
            return this.interactable.data[y][x - 1];
        }
        if (direction === upKey) {
            return this.interactable.data[y - 1][x];
        }
        if (direction === downKey) {
            return this.interactable.data[y + 1][x];
        }
        if (direction === rightKey) {
            return this.interactable.data[y][x + 1];
        }
    }

    interact () {
        const block = this.#getBlockNextToPlayer();

        if (block === blocks.arrowRightSign) {
            this.infobox.draw('Willkommen in Alabastia 🌎');
        }
        if (block === blocks.rectangleSign) {
            this.infobox.draw('Muss net schmecke muss wirken 💪');
        }
    }
} 
