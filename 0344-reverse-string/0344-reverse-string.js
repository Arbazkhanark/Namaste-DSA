/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(str) {
    
    // Here also i have used two pointer but in diff
    let left=0;
    let right=str.length-1;

    // Continue swapping until the two pointers meet or cross
    while (left < right) {
        // Swap characters at left and right pointers
        let temp = str[left];
        str[left] = str[right];
        str[right] = temp;

        // Move the pointers towards each other
        left++;
        right--;
    }

};