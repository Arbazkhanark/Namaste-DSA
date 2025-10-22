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
var reverseList = function (head) {
    // 'prev' pehle null hai kyunki reverse list ka pehla node ka next null hoga
    let prev = null;

    // 'curr' current node ko point karega jisko hum process kar rahe hain
    let curr = head;

    // Jab tak list khatam nahi ho jaati (curr null nahi hota)
    while (curr !== null) {
        // Next node ko temporarily store kar lete hain
        let temp = curr.next;

        // Current node ka pointer reverse karte hain
        curr.next = prev;

        // prev aur curr ko ek step aage le jaate hain
        prev = curr;
        curr = temp;
    }

    // Jab loop khatam hota hai, 'prev' naya head hota hai reversed list ka
    return prev;
};