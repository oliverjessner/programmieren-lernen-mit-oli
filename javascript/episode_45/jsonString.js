import obj from './index.js';

const jsonObj = JSON.parse(JSON.stringify(obj)); // Deep Clone

console.log('same as obj:', obj === jsonObj);
console.log(jsonObj);

obj.human = false;
obj.pc.memory = '32gb';

jsonObj.today = new Date(jsonObj.today);

console.log('After mutation of inner pc obj:');
console.log(jsonObj);
