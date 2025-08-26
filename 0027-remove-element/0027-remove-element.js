/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(arr, val) {

    // Applied Two pointer approch here its the same like remove duplicates from an arrays
    let left=0;
    for(let right=0;right<arr.length;right++){
        if(arr[right]!=val){
            arr[left]=arr[right];
            left++;
        }
    }
    return left;
};