import _ from 'lodash';
import obj from './index.js';

const lodashClone = _.cloneDeep(obj); // Deep Clone

console.log('same as obj: ', obj === lodashClone);
console.log(lodashClone);

obj.human = false;
obj.pc.memory = '32gb';
console.log('After mutation of inner pc obj:');
console.log(lodashClone);
