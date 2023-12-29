const num = [1, 2, 3, 4, 5, 2, 7, 8, 2];
const num2 = [1, 2, 3];

function checkIfDuplicate(arr) {
    return new Set(arr).size !== arr.length;
}

console.log(checkIfDuplicate(num));
console.log(checkIfDuplicate(num2));
