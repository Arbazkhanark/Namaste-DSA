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
var preorderTraversal = function(root) { // Root->Left->Right

    // let ans=[];
    // let stack=new Stack();

    // function traverse(curr){
    //     if(curr==null) return null;
    //     ans.push(curr.val);
    //     traverse(curr.left);
    //     traverse(curr.right);
    // }
    
    // traverse(root)

    // return ans;



//------- Iterative Approach using Stack -------//
    if(!root) return [];
    let ans=[];
    let stack=[root];

    while(stack.length){
        let curr=stack.pop();
        ans.push(curr?.val);
        curr?.right && stack.push(curr.right);
        curr?.left && stack.push(curr?.left);
    }

    return ans;
};