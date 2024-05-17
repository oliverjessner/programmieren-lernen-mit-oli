const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = [];

for (let i = 0; i < numbers.length; i++) {
    squaredNumbers.push(numbers[i] ** 2);
}

console.log(squaredNumbers);
