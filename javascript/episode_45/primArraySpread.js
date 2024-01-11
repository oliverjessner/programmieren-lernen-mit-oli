const arr = [1, 3, 4, 5, 6, 7];
const spreadArray = [...arr]; // Shallow Clone

console.log('same as obj: ', arr === spreadArray);
console.log(spreadArray);

arr.push(10);
console.log('After mutation original array:');
console.log(spreadArray);
