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
var isPalindrome = function (head) {
    // let curr = head;

    // let arr = [];
    // while (curr) {
    //     arr.push(curr.val);
    //     curr = curr.next;
    // }

    // let arrLength = arr.length - 1
    // for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    //     if (arr[i] !== arr[arrLength - i]) {
    //         return false;
    //     }
    // }

    // return true;





    let slow=head;
    let fast=head;

    while(fast && fast.next!==null){
        slow=slow.next;
        fast=fast.next.next;
    }


    let prev=null;
    let curr=slow;

    while(curr){
        let temp=curr.next;
        curr.next=prev;
        prev=curr;
        curr=temp;
    }

    let start=head;
    while(prev && start){
        if(start.val !== prev.val){
            return false;
        }

        prev=prev.next;
        start=start.next;
    }

    return true;
};