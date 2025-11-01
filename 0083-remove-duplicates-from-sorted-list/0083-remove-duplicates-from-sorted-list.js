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
var deleteDuplicates = function (head) {

    // Pointer to traverse the list
    let curr = head;
    // Traverse until current node and next node exist
    while (curr !== null && curr.next !== null) {

        // If current value is equal to next value → duplicate found
        if (curr.val === curr.next.val) {

            // Skip the duplicate node by linking to next of next
            // Basically: remove current.next from chain
            curr.next = curr.next.next;
        }
        else {
            // If no duplicate → move forward normally
            curr = curr.next;
        }
    }

    // Return head of updated list
    return head;
};