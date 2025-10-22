/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let size = 0;
    let curr = head;
    
    // Size nikalna
    while (curr !== null) {
        size++;
        curr = curr.next;
    }

    let mid = Math.floor(size / 2);
    curr = head;

    // Middle tak pahuchna
    for (let i = 0; i < mid; i++) {
        curr = curr.next;
    }

    return curr;
};
