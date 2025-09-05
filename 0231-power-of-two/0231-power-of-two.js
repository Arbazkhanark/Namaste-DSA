/**
 * @param {number} n
 * @return {boolean}
 */


 // koi bhi number check krrna hua ki vo power of 2 h yaa nhi toh humm usse 2 se divide krrte rahenge jabb takk uska end result 1 naa aa jaye agar 1 aa gaya toh iska matlb h ki vo power of 2 for sure h otherwise nhi 

 //eg:- 16/2 = 8   ;   8/2 = 4   ;  4/2 = 2      ;  2/2 = 1;
var isPowerOfTwo = function(n) {
    if(n==1){
        return true;
    }else if(n<1){
        return false;
    }

    return isPowerOfTwo(n/2)
};