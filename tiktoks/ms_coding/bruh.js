const nums = [...new Array(1000000).keys()].map(function (_, i) {
    if (i === 3) {
        return 0;
    }
    return i;
});
console.log(nums);
function findMissing(arr) {
    let count = 0;
    let count2 = 0;

    for (i = 0; i < arr.length; i++) {
        count += arr[i];
        count2 += i;
    }

    return count2 - count + arr.length;
}

console.log(findMissing(nums));
