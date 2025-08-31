/**
 * @param {number[]} nums
 * @return {number}
 */


// Using HashMap in JS
var singleNumber1 = function (nums) {
    const map = new Map();

    // Step 1: Count frequency of each number
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            map.set(nums[i], map.get(nums[i]) + 1);
        } else {
            map.set(nums[i], 1);
        }
    }

    // Step 2: Find the number that appears only once
    for (let [key, value] of map.entries()) {
        if (value === 1) {
            return key;
        }
    }
};





// Different way to write map -----   Using Object
var singleNumber = function (nums) {

    let hashmap = {};
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        if (hashmap[num]) {
            hashmap[num] += 1;
        } else {
            hashmap[num] = 1;
        }
    }

    // Ab find karte hain woh values jinki count == 1 hai
    for (let key in hashmap) {
        if (hashmap[key] === 1) {
            return parseInt(key);
        }
    }
}











// Best Solution for this problem
var singleNumber2 = function (nums) {
    let xor = 0;
    for (let num of nums) {
        xor ^= num; // XOR operation
    }
    return xor;
};
