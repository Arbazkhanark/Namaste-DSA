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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {

    function traverse(curr,sum){
        if(!curr) return false;
        if(!curr.left && !curr.right){
            if(sum + curr.val===targetSum) return true;
        }
        let leftSum=traverse(curr.left,sum+curr.val);
        let rightSum=traverse(curr.right,sum+curr.val);

        return leftSum || rightSum;
    }
    

    return traverse(root,0);;
};