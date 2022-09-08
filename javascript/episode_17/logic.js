'use strict';
const chars = [{
    name: 'berni',
    lvl: 52
}, {
    name: 'oli',
    lvl: 103
}, {
    name: 'igor',
    lvl: 13
}];
const charsUnder100 = chars.filter(({ lvl }) => lvl < 100);
console.log(charsUnder100);
const better = chars.map(char => ({ ...char, weapon: 'hands '}));
console.log(better);