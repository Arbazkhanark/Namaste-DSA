/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    while(headA !==null ){
        let currA=headA;

        for(let currB=headB;currB!==null;currB=currB.next){
            if(currA==currB){
                return currA;
            }
        }
        headA=headA.next;
    }
    return null;
};