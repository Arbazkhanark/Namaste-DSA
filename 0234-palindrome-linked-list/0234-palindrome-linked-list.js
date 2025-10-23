/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let curr=head;

    let arr=[];
    while(curr){
        arr.push(curr.val);
        curr=curr.next;
    }

    let arrLength=arr.length-1
    for(let i=0;i<arr.length;i++){
        if(arr[i]==arr[arrLength-i]){
            continue;
        }else{
            return false;
        }
    }

    return true;
};