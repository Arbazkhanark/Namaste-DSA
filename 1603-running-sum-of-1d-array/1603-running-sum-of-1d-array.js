/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {

    let arr = nums;
    let prevSum = arr[0];
    for (let i = 1; i < arr.length; i++) {
        prevSum += arr[i];
        if (i >= 1) {
            nums[i] = prevSum;
        }
    }
    return nums;
};