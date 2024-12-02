function findBrokenVersion(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === false) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return arr[left] === false ? left : -1;
}

//              v: 1     2     3     4      5
const versions = [true, true, true, false, false];
const index = findBrokenVersion(versions);
console.log(index);
