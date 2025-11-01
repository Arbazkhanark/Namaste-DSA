/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
    let sentinalNode = new ListNode();
    sentinalNode.next = head;

    let prev = sentinalNode;


    let curr = head;
    while (curr !== null) {
        if (curr.val == val) {
            prev.next = curr.next; // skip node
        } else {
            prev = curr;            // move prev forward
        }
        curr = curr.next;            // // always move curr
    }

    return sentinalNode.next;       // return new head
};