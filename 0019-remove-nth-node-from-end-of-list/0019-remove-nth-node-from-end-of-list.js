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

    // One Pass Solution
    
    // let sentinel = new ListNode(0);
    // sentinel.next = head;

    // let size = 0;
    // let curr = head;

    // // count size
    // while (curr !== null) {
    //     size++;
    //     curr = curr.next;
    // }

    // let targetIndex = size - n+1;  // index of node to delete (0-based)
    // curr = sentinel; // ✅ start from sentinel, not head

    // // move to previous node of target
    // for (let i = 1; i < targetIndex; i++) {
    //     curr = curr.next;
    // }

    // // delete node
    // curr.next = curr.next.next;
    // return sentinel.next;




    // One Pass 
    let sentinelNode = new ListNode(0, head);
    let slow = sentinelNode;
    let fast = head;

    // move fast n steps
    for (let i = 0; i < n; i++) {
        fast = fast.next;
    }

    // move both pointers
    while (fast !== null) {
        fast = fast.next;
        slow = slow.next;
    }

    // delete the node
    slow.next = slow.next.next;

    return sentinelNode.next;
};
