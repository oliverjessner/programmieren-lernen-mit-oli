const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum);

console.log(numbers.every(num => num > 0));
console.log(numbers.some(num => num > 10));
