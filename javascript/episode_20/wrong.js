'use strict';
const direction = 'goLeft';

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

if (direction === 'goLeft') {
    goLeft();
}
if (direction === 'goRight') {
    goRight();
}
if (direction === 'goUp') {
    goUp();
}
if (direction === 'goDown') {
    goDown();
}