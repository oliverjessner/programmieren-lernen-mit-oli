export default class InfoBox {
    #margin = 25;
    #fontSize = 48;
    #black = '#000000';
    
    constructor ({ ctx, tileSize }) {
        this.ctx = ctx;
        this.tileSize = tileSize;
        this.ctx.font = `${this.#fontSize}px serif`;
    }

    #drawCircle (x, y) {
        this.ctx.beginPath();
        this.ctx.fillStyle = this.#black;

        this.ctx.arc(x, y, 5, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.stroke();
        this.ctx.beginPath();
    }

    draw (text, lines = 1) {        
        const textSize = this.ctx.measureText(text);
        const width = textSize.width + this.#margin * 2;
        const height = this.#margin + this.#fontSize * lines;
        const startX = (window.innerWidth - width) / 2;
        const startY = window.innerHeight - height - this.#margin;

        this.ctx.beginPath();

        this.ctx.lineWidth = '3';
        this.ctx.strokeStyle = this.#black; 
        this.ctx.fillStyle = '#d3d3d3';

        this.ctx.rect(startX , startY, width, height);
        this.ctx.fillRect(startX , startY, width, height);
        this.ctx.stroke();

        this.ctx.beginPath();
        this.ctx.fillStyle = 'black'; 

        this.ctx.fillText(text, startX  + this.#margin, startY + this.#fontSize / 2 + this.#margin);
        this.ctx.stroke();

        this.#drawCircle(startX , startY);
        this.#drawCircle(startX + width, startY);
        this.#drawCircle(startX, startY + height);
        this.#drawCircle(startX + width, startY + height);
    }
}