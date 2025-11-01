/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

var removeNthFromEnd = function(head, n) {

    let sentinel = new ListNode(0);
    sentinel.next = head;

    let size = 0;
    let curr = head;

    // count size
    while (curr !== null) {
        size++;
        curr = curr.next;
    }

    let targetIndex = size - n;  // index of node to delete (0-based)
    curr = sentinel; // ✅ start from sentinel, not head

    // move to previous node of target
    for (let i = 0; i < targetIndex; i++) {
        curr = curr.next;
    }

    // delete node
    curr.next = curr.next.next;
    return sentinel.next;
};
