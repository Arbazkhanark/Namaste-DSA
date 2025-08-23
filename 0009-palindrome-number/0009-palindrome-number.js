/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let res="";
    let original=x;
    while(x>0){
        res += x%10;
        x = Math.floor(x/10);
    }

    return res == original;
};