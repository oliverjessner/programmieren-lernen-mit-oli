const canvas = document.querySelector('#main-background');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
context.fillStyle = 'black';



export const ctx = context;
export function renderBlackBackground () {
    ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
}