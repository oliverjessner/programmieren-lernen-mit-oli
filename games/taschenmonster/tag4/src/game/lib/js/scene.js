import Sprite from './sprite.js';

export default class Scene extends Sprite {
    constructor (config, ctx) {
        super(config, ctx);
    }

    draw (direction) {
        if (direction === 'a') {
            this.position.x += 16;
        }
        if (direction === 'w') {
            this.position.y += 16;
        }
        if (direction === 's') {
            this.position.y -= 16;
        }
        if (direction === 'd') {
            this.position.x -= 16;
        }

        this.ctx.drawImage(
            this.image, 
            this.position.x, 
            this.position.y, 
        );
    }
}