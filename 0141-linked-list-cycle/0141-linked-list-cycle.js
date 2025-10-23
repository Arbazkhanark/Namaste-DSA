/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    // let curr=head;
    // let set=new Set();

    // while(curr){
    //     if(set.has(curr)){
    //         return true;
    //     }
    //     set.add(curr)
    //     curr=curr.next;
    // }

    // return false




    //Floyd’s Tortoise and Hare
    let slow=head;
    let fast=head;

    while(fast && fast.next !== null){
        slow=slow.next;
        fast=fast.next.next;
        if(slow==fast){
            return true
        }
    }

    return false;

};