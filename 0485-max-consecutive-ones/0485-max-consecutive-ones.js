/**
 * @param {number[]} nums
 * @return {number}
 */

var findMaxConsecutiveOnes = function(nums) {
    let max = 0;
    let currMax = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            currMax++;
            if (currMax > max) {
                max = currMax;
            }
        } else {
            currMax = 0;
        }
    }

    return max;
};
