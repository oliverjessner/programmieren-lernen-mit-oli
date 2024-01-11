const arr = [{ age: 32 }];

const spreadArray = [...arr]; // Shallow Clone

console.log('same as obj: ', arr === spreadArray);
console.log(spreadArray);

arr[0].name = 'oliver';

console.log('After mutation of human and inner pc obj:');
console.log(spreadArray);
