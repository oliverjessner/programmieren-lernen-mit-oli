import Sprite from './sprite.js';
import { rightKey, leftKey, upKey, downKey } from '../../data/misc/keys.js';

export default class Figure extends Sprite {
    isInteracting = false;
    #frame = Object.seal({
        max: 3,
        current: 0,
        direction: 0, // row
        width: 25,
        height: 45
    });

    draw (direction) {
        if (direction === downKey) {
            this.#frame.direction = 0;
        }
        if (direction === leftKey) {
            this.#frame.direction = 1;
        }
        if (direction === rightKey) {
            this.#frame.direction = 2;
        }
        if (direction === upKey) {
            this.#frame.direction = 3;
        }

        this.ctx.drawImage(
            this.image,
            this.#frame.current * this.#frame.width, // cropping x
            this.#frame.direction * this.#frame.height, // cropping y
            this.image.width / 4,
            this.image.height / 4,
            this.image.width +  this.offset.x - 14,
            this.image.height + this.offset.y,
            this.image.width * 0.7, 
            this.image.height * 0.7
        );

        if (this.isInteracting) {
            return;
        }
        if (this.#frame.current < this.#frame.max) {
            this.#frame.current++;
        } else {
            this.#frame.current = 0;
        }
    }
}