import obj from './index.js';

const ref = obj; // reference

console.log('same as obj:', obj === ref);
console.log(ref);

obj.human = false;
obj.pc.memory = '32gb';

console.log('After mutation of inner pc obj:');
console.log(ref);
