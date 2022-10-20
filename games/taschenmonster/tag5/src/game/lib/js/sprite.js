export default class Sprite {
    #frame = Object.seal({
        max: 3,
        current: 0,
        direction: 0, // row
        width: 25,
        height: 45
    });

    constructor ({ src, position, name, offset, mapData }, ctx) {
        this.ctx = ctx;
        this.src = src;
        this.position = position;
        this.offset = offset;
        this.name = name;
        this.image = new Image();
        this.mapData = mapData;
    }

    async load () {
        return new Promise (success => {
            this.image.src = this.src;
            this.image.onload = function () {
                return success();
            };
        });
    }

    draw (direction) {
        if (direction === 's') {
            this.#frame.direction = 0;
        }
        if (direction === 'a') {
            this.#frame.direction = 1;
        }
        if (direction === 'd') {
            this.#frame.direction = 2;
        }
        if (direction === 'w') {
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

        if (this.#frame.current < this.#frame.max) {
            this.#frame.current++;
        } else {
            this.#frame.current = 0;
        }
    }
}