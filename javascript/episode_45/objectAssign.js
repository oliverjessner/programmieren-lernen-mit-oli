import obj from './index.js';

const objectAssign = Object.assign({}, obj); // Shallow Clone

console.log('same as obj: ', obj === objectAssign);
console.log(objectAssign);

obj.human = false;
obj.pc.memory = '32gb';
console.log('After mutation of inner pc obj:');
console.log(objectAssign);
