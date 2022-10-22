import Scene from './scene.js';
import gameSettings from './gameSettings.js';

export default class Route extends Scene {
    constructor (config, ctx) {
        super(config, ctx);
    }

    draw (direction) {
        super.draw(direction);
        
        if (gameSettings.grid) {
            return this.#renderGrid();
        }
    }

    #renderGrid () {
        const step = this.tileSize;
        const w = this.image.width;
        const h = this.image.height;
        const color = 'rgb(0, 0, 255)';

        this.ctx.beginPath(); 
    
        for (let x = 0; x <= w; x += step) {
            this.ctx.moveTo(x, 0);
            this.ctx.lineTo(x, h);
        }
    
        this.ctx.strokeStyle = color;
        this.ctx.lineWidth = 1;
        this.ctx.stroke(); 
        this.ctx.beginPath(); 
    
        for (let y = 0; y <= h; y += step) {
            this.ctx.moveTo(0, y);
            this.ctx.lineTo(w, y);
        }

        this.ctx.lineWidth = 1;
        this.ctx.stroke(); 
    }
} 
