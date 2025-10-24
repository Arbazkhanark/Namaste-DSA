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
var getIntersectionNode = function (headA, headB) {
    // while(headA !==null ){
    //     let currA=headA;

    //     for(let currB=headB;currB!==null;currB=currB.next){
    //         if(currA==currB){
    //             return currA;
    //         }
    //     }
    //     headA=headA.next;
    // }
    // return null;








    // Second Approach with better time complexity



    const visited = new Set();

    // Store all nodes of list B
    while (headB) {
        visited.add(headB);
        headB = headB.next;
    }

    // Check which node in list A exists in set
    while (headA) {
        if (visited.has(headA)) {
            return headA; // Intersection found
        }
        headA = headA.next;
    }

    // No intersection
    return null;
};