const nums = [7, 6, 5, 0, 3, 2, 1];

function findMissing(arr) {
    const nums = [...new Array(arr.length)].map((_, i) => i + 1);

    for (i = 0; i < nums.length; i++) {
        if (!arr.find(e => e === nums[i])) {
            return nums[i];
        }
    }
}

console.log(findMissing(nums));
