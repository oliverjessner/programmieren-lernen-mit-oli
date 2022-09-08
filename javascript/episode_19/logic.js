'use strict';

setTimeout(function () {
    console.log('setTimeout');
}, 0);

function third () {
    console.log('third');
}

function second () {
    console.log('second');
    return third();
}

function first () {
    console.log('first');
    return second();
}

first();