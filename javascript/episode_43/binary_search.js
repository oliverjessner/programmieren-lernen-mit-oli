// index:     0  1  2  3  4  5  6  7  8   9
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function binarySearch(arr, needle, start = 0, end = arr.length - 1) {
    const middle = Math.floor((start + end) / 2);

    if (needle === arr[middle]) {
        return middle;
    }
    if (start >= end) {
        return false; // -1
    }

    if (needle < arr[middle]) {
        return binarySearch(arr, needle, start, middle - 1);
    }

    return binarySearch(arr, needle, middle + 1, end);
}

console.log(binarySearch(nums, 9));
console.log(binarySearch(nums, 1));
console.log(binarySearch(nums, 10));
console.log(binarySearch(nums, 5));
console.log(binarySearch(nums, 11));
console.log(binarySearch(nums, -1));
