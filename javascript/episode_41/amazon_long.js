const num = [1, 2, 3, 4, 5, 2, 7, 8, 2];
const num2 = [1, 2, 3];

function checkIfDuplicate(arr) {
    const set = new Set();

    for (const num of arr) {
        if (set.has(num)) {
            return true;
        }

        set.add(num);
    }

    return false;
}

console.log(checkIfDuplicate(num));
console.log(checkIfDuplicate(num2));
