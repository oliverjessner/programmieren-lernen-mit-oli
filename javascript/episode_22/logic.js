'use strict';
const arr = [1, 2, 3];
const text = `The last indexOf [${arr.join(', ')}] is ${arr.length - 1}`;

document.querySelector('body').innerHTML = text;