/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {

    let ans = inorderTraversalRecurrsive(root);
    // let res=inorderTraversalItrative(root);
    // return res;
    return ans;
};


function inorderTraversalRecurrsive(root) {
    let ans = [];

    function traverse(curr) {
        if (!curr) return;
        traverse(curr.left)
        ans.push(curr.val);
        traverse(curr.right)
    }

    traverse(root);

    return ans;
}


function inorderTraversalItrative(root) {
    let ans = [];
    let stack = [];
    let curr = root;
    while (curr || stack.length) {
        while (curr) {
            stack.push(curr);
            curr = curr?.left;
        }

        curr = stack.pop();  // This is basically Root 
        ans.push(curr?.val);
        curr = curr?.right;
    }


    return ans;
}