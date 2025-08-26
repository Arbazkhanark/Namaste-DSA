/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    if (nums.length === 0) return 0;

    let x = 0;
    for (let i = 1; i < nums.length; i++) {
        // if (nums[x] !== nums[i]) {
        //     x++;               // pehle increment karo
        //     nums[x] = nums[i]; // phir assign karo
        // }

        // Both conditions working fine 
        if(nums[x]<nums[i]){
            x++;
            nums[x]=nums[i];
        }
    }
    return x + 1;  // unique elements ki count
};
