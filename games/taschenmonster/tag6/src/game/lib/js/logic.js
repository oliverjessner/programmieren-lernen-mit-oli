import Figure from './figure.js';
import Scene from './scene.js';
import Route from './route.js';
import { ctx, renderBlackBackground } from './canvas.js';
import loadMapData from './loadMapData.js';
import gameSettings from './gameSettings.js';

const mapPosition = {
    x: -240,
    y: -560,
};
const mapData = await loadMapData('alabastia');
const maggus = new Figure({
    src: './assets/chars/maggus.png',
    offset: {
        x: 400,
        y: 400
    }
}, ctx);
const alabastia = new Route({
    src: './assets/map/raw/alabastia.png',
    name: 'alabastia',
    position: structuredClone(mapPosition),
    mapData
}, ctx);
const foreground = new Scene({
    src: './assets/map/raw/alabastia_foreground_objects.png',
    name: 'alabastia_foreground',
    position: structuredClone(mapPosition),
    mapData
}, ctx);
const collisonBlock = new Scene({
    src: './assets/map/raw/alabastia_collisionblocks.png',
    name: 'alabastia_collisionblocks',
    position: structuredClone(mapPosition),
    mapData
}, ctx);
const keyAction = Object.freeze({
    a: animate,
    w: animate,
    s: animate,
    d: animate,
    ' ': interact
});

function animate (direction) {
    renderBlackBackground();
    alabastia.draw(direction);

    if (gameSettings.collisonBlock) {
        collisonBlock.draw(direction);
    }

    maggus.draw(direction);
    foreground.draw(direction);
}

function interact () {
    alabastia.interact();
}

window.addEventListener('keydown', function ({ key }) {
    if (alabastia.isInteracting) {
        return;
    }

    return keyAction[key]?.(key);
});

async function bootStrap () {
    const allLoads = [
        alabastia.load(),
        maggus.load(),
        foreground.load(),
        collisonBlock.load()
    ];
    
    await Promise.all(allLoads);
    animate();
}

if (document.readyState !== 'loading') {
    await bootStrap();
} else { 
    document.addEventListener('DOMContentLoaded', async () => await bootStrap());
}