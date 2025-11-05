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



var postorderTraversal = function (root) {
    // let res= postOrderTraversalUsingRecursion(root);
    // let res= postOrderTraversalUsingItrativeWithTwoStack(root);
    let res = postOrderTraversalUsingItrativeWithOneStack(root);
    return res;
};




// Using Recurrsion... ...........................................
function postOrderTraversalUsingRecursion(root) {
    let ans = [];
    function traverse(curr) {
        if (!curr) return;
        traverse(curr.left)
        traverse(curr.right);
        ans.push(curr.val)
    }
    traverse(root);
    return ans;
}



// Using Two Stack.. ...........................................
function postOrderTraversalUsingItrativeWithTwoStack(root) {
    if (!root) return [];

    let stack1 = [root];
    let stack2 = [];
    while (stack1.length) {
        let curr = stack1.pop();
        stack2.push(curr);
        curr.left && stack1.push(curr.left);
        curr.right && stack1.push(curr.right);
    }

    let ans = [];

    while (stack2.length) {
        ans.push(stack2.pop().val);
    }

    return ans
}




// Using One Stack...........................................
function postOrderTraversalUsingItrativeWithOneStack(root) {
    let stack = [];
    let curr = root;
    let ans = [];
    let lastVisitedNode=null;


    while (curr || stack.length) {
        // Push All the Values to stack till I reach leftmost bottom
        while (curr) {
            stack.push(curr);
            curr = curr.left;
        }

        // Peeking TOP Element from stack
        let peekNode = stack[stack.length - 1];

        // If right exists & it is not the Last Visited
        if (peekNode.right && peekNode.right!==lastVisitedNode) {
            curr = peekNode.right;
        } else {
            ans.push(peekNode.val);
            lastVisitedNode=stack.pop();
        }

    }
    return ans;
}