'use strict';
const human = {
    speed: 10,
    language: 'german',
    armor: {
        type: 'metal'
    }
};
const horse = {
    speed: 20,
    color: 'brown'
};
//const refObj = Object.assign(human, horse);
Object.assign(horse, human);

human.armor.type = 'wood';

console.log(human);
console.log(horse);
