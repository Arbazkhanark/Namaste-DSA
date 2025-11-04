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



 function postOrderTraversalUsingItrative(root){
    if(!root) return [];

    let stack1=[root];
    let stack2=[];
    while(stack1.length){
        let curr=stack1.pop();
        stack2.push(curr);
        curr.left && stack1.push(curr.left);
        curr.right && stack1.push(curr.right);
    }

    let ans=[];

    while(stack2.length){
        ans.push(stack2.pop().val);
    }

    return ans
 }


var postorderTraversal = function(root) {
    let res= postOrderTraversalUsingItrative(root);
    // let res= postOrderTraversalUsingRecursion(root);
    return res;
};



function postOrderTraversalUsingRecursion(root){
    let ans=[];
    function traverse(curr){
        if(!curr) return;
        traverse(curr.left)
        traverse(curr.right);
        ans.push(curr.val)
    }
    traverse(root);
    return ans;
}
