import Sprite from './sprite.js';
import Scene from './scene.js';
import ctx from './canvas.js';

const maggus = new Sprite({
    src: './assets/chars/maggus.png'
}, ctx);
const startingTown = new Scene({
    src: './assets/map/raw/starting_town.png',
    position: {
        x: -225,
        y: -550,
    }
}, ctx);
const foreground = new Scene({
    src: './assets/map/raw/starting_town_foreground_objects.png',
    position: {
        x: -225,
        y: -550,
    }
}, ctx);

function animate (direction) {
    startingTown.draw(direction);
    maggus.draw(direction);
    foreground.draw(direction);
}

window.addEventListener('keydown', function ({ key }) {
    if (key === 'a') {
        return animate(key);
    }
    if (key === 'w') {
        return animate(key);
    }
    if (key === 's') {
        return animate(key);
    }
    if (key === 'd') {
        return animate(key);
    }
});
window.addEventListener('DOMContentLoaded', async function () {
    await startingTown.load();
    await maggus.load();
    await foreground.load();
    animate();
});
