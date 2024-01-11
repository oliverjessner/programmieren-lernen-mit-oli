import obj from './index.js';

const spreadObj = { ...obj }; // Shallow Clone

console.log('same as obj: ', obj === spreadObj);
console.log(spreadObj);

obj.human = false;
obj.pc.memory = '32gb';

console.log('After mutation of human and inner pc obj:');
console.log(spreadObj);
console.log(obj.pc === spreadObj.pc);
