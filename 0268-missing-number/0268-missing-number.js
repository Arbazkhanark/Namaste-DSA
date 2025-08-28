/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    // Length of the array (i.e., total numbers present in the array)
    let n = nums.length;

    // Calculate the expected total sum of numbers from 0 to n
    // Using formula: sum = n * (n + 1) / 2
    // This assumes one number from the range [0, n] is missing
    let total = n * (n + 1) / 2;

    // Initialize a variable to store the actual sum of elements in the array
    let currSum = 0;

    // Loop through the array to calculate the actual sum of the given numbers
    for (let i = 0; i < n; i++) {
        currSum += nums[i];
    }

    // The missing number is the difference between expected total and actual sum
    return total - currSum;
};