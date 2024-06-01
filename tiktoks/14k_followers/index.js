import isEven from './isEven.js';

console.log(isEven(2));
console.log(isEven(14_000));
console.log(isEven(12_345));
/*
console.time('isEven');
for (let i = 0; i < 14_000; i++) {
    isEven(i);
}
console.timeEnd('isEven');
console.time('modulo');
for (let i = 0; i < 14_000; i++) {
    i % 2 === 0;
}
console.timeEnd('modulo');
*/
console.log(isEven(14_001));
