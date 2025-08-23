/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let original=x;
    let rim;
    let rev=0;

    x=Math.abs(x);
    while(x>0){
        rim=x%10;
        rev=rev*10+rim;
        x=Math.floor(x/10);
    }

    let limit=2**31
    if(rev < -limit || rev > limit) return 0;

    return (original<0) ? -rev : rev
};