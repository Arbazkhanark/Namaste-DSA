/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var moveZeroes = function(nums) {
    let index = 0;

    // First pass: non-zero elements ko front mein copy karo
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[index] = nums[i];
            index++;
        }
    }

    // Second pass: bache hue elements ko 0 set karo
    for (let i = index; i < nums.length; i++) {
        nums[i] = 0;
    }
};





// Two Pointer approach
var anotherApproach = function(nums) {
    // 'left' pointer batata hai ki next non-zero element ko kahan le jaana hai
    let left = 0;

    // 'right' pointer poore array ko scan karta hai
    for (let right = 0; right < nums.length; right++) {

        // Agar current element zero nahi hai
        if (nums[right] !== 0) {

            // Agar left aur right alag position par hain, tabhi swap karo
            if (left !== right) {
                // nums[left] aur nums[right] ki value ko swap karo
                let temp = nums[left];
                nums[left] = nums[right];
                nums[right] = temp;
            }

            // Ek non-zero element shift ho gaya, ab left pointer ko aage badhao
            left++;
        }
    }
};
