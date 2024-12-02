function threeSum(nums) {
    const res = [];

    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const total = nums[i] + nums[left] + nums[right];

            if (total > 0) {
                right--;
            } else if (total < 0) {
                left++;
            } else {
                res.push([nums[i], nums[left], nums[right]]);
                left++;

                while (nums[left] === nums[left - 1] && left < right) {
                    left++;
                }
            }
        }
    }

    return res;
}

const nums = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(nums));
