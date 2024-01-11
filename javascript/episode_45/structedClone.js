import obj from './index.js';

const structClone = structuredClone(obj); // Deep Clone

console.log('same as obj: ', obj === structClone);
console.log(structClone);

obj.human = false;
obj.pc.memory = '32gb';
console.log('After mutation of inner pc obj:');
console.log(structClone);
