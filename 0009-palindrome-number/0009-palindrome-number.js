/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let original=x;
    let rim;
    let rev=0;
    while(x>0){
        rim= x%10;
        rev= rev*10+rim;
        x = Math.floor(x/10);
    }

    return rev == original;
};