const nums = [3, 0, 1];

function findMissing(arr) {
    let acc = arr.length;

    for (i = 0; i < arr.length; i++) {
        acc = acc ^ i ^ arr[i];
    }

    return acc;
}

console.log(findMissing(nums));
