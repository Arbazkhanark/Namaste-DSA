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
 * @return {number[][]}
 */
var levelOrder = function (root) {
    // let res=levelOrderTraversal(root);
    let res = levelOrderTraversalUsingIterative(root);
    return res;
};




// Using Recurrsion-------------------------------
function levelOrderTraversal(root) {

    if (!root) return [];
    let ans = [];

    function traverse(curr, level) {
        if (!ans[level]) ans[level] = [];
        ans[level].push(curr.val);
        curr.left && traverse(curr.left, level + 1);
        curr.right && traverse(curr.right, level + 1);
    }

    traverse(root, 0);
    return ans;
}






// Using Iterative--------------------------------
function levelOrderTraversalUsingIterative(root) {
    if (!root) return [];

    let queue = [root];
    let ans = [];

    while (queue.length) {
        // har level ke nodes count karo
        let levelSize = queue.length;
        let level = [];

        // current level ke sab nodes process karo
        for (let i = 0; i < levelSize; i++) {
            let curr = queue.shift(); // FIFO — remove from front

            level.push(curr.val);

            if (curr.left) queue.push(curr.left);
            if (curr.right) queue.push(curr.right);
        }

        // ek level complete ho gaya
        ans.push(level);
    }

    return ans;
}
