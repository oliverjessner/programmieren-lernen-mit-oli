'use strict';
const direction = 'goBack';
const directions = Object.freeze({
    goLeft,
    goRight,
    goUp,
    goDown,
    [direction]: unknowFn
});

function unknowFn () {
    console.log('dynamic'); 
}

function goLeft () {
    console.log('go left');
}

function goRight () {
    console.log('go right');
}

function goUp () {
    console.log('go up');
}

function goDown () {
    console.log('go down');
}

directions[direction]();