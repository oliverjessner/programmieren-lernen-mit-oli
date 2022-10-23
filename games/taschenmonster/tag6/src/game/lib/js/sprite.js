export default class Sprite {
    isInteracting = false;

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
}