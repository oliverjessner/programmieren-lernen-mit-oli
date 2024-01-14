const arr1 = [1, 2, 3, 4, 5];
const arr2 = [10, 5, 4, 3, 1];
const arr3 = [69, 1337, 7, 1];
const arr4 = [1, 1, 1, 1, 1, 1];

function isMonotonic(arr) {
    let inc = false;
    let dec = false;

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < arr[i + 1]) {
            inc = true;
        }
        if (arr[i] > arr[i + 1]) {
            dec = true;
        }
        if (inc && dec) {
            return false;
        }
    }

    return true;
}

console.log(isMonotonic(arr1));
console.log(isMonotonic(arr2));
console.log(isMonotonic(arr3));
console.log(isMonotonic(arr4));
