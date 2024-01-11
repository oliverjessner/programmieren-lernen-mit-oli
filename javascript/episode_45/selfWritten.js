import obj from './index.js';

function cloneObject(obj) {
    if (typeof obj !== 'object') {
        return obj;
    }
    if (obj instanceof Date) {
        const copy = new Date();

        copy.setTime(obj.getTime());

        return copy;
    }
    if (obj instanceof Array) {
        const copy = [];

        for (let i = 0, len = obj.length; i < len; i++) {
            copy[i] = cloneObject(obj[i]);
        }

        return copy;
    }
    if (obj instanceof Object) {
        const copy = {};

        for (let attr in obj) {
            if (obj.hasOwnProperty(attr)) {
                copy[attr] = cloneObject(obj[attr]);
            }
        }

        return copy;
    }
}
const selfWritten = cloneObject(obj); // Deep Clone

console.log('same as obj: ', obj === selfWritten);
console.log(selfWritten);

obj.human = false;
obj.pc.memory = '32gb';
console.log('After mutation of human and inner pc obj:');
console.log(selfWritten);
