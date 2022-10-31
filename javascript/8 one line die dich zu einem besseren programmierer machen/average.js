const arr = [2, 3, 4, 5, 99, 28, 37];
const calculateAverage = arr => arr.reduce((a, b) => a + b, 0) / arr.length;

console.log(calculateAverage(arr));
