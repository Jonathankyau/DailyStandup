// LeetCode
// From: https://leetcode.com/problems/invert-binary-tree/

// Given the root of a binary tree, invert the tree, and return its root.


// Example 1:


// Input: root = [4,2,7,1,3,6,9]
// Output: [4,7,2,9,6,3,1]
// Example 2:


// Input: root = [2,1,3]
// Output: [2,3,1]
// Example 3:

// Input: root = []
// Output: []
 

// Constraints:

// The number of nodes in the tree is in the range [0, 100].
// -100 <= Node.val <= 100
 
// Solution
// Use hashmap to count each char in string 1, decrement for string 2

var invertTree = (root) => {
  const isBaseCase = root === null;
  if (isBaseCase) return root;

  return dfs(root);
}

const dfs = (root) => {
  const left = invertTree(root.left);
  const right = invertTree(root.right);

  root.left = right;
  root.right = left;

  return root;
}

/**
* https://leetcode.com/problems/invert-binary-tree/
* TIme O(N) | Space O(W)
* @param {TreeNode} root
* @return {TreeNode}
*/
var invertTree = (root,) => {
  const isBaseCase = root === null;
  if (isBaseCase) return root;

  bfs([ root ]);

  return root;
}

const bfs = (queue) => {
  while (queue.length) {
      for (let i = (queue.length - 1); 0 <= i; i--) {
          const node = queue.shift();
          const left = node.right;
          const right = node.left;

          node.left = left;
          node.right = right;

          if (node.left) queue.push(node.left);
          if (node.right) queue.push(node.right);
      }
  }
}




console.log(invertTree([4,2,7,1,3,6,9]), '[4,7,2,9,6,3,1]' )
console.log(invertTree([4,2,7,1,3,6,9]), '[2,3,1]')





// A video explaining the recursive solution can be seen here: https://www.youtube.com/watch?v=OnSn2XEQ4MY

// To see an explanation of the difference between DFS and BFS see these videos: https://www.youtube.com/watch?v=pcKY4hjDrxk https://youtu.be/tWVWeAqZ0WU?t=430

// Recursion
var invertTree = function (root) {
  if (root === null) {
    return null;
  }
  [root.left, root.right] = [invertTree(root.right), invertTree(root.left)];
  return root;
};

// Iterative Depth First Search
function invertTree(root) {
  const stack = [root];

  while (stack.length) {
    const node = stack.pop();
    if (node !== null) {
      [node.left, node.right] = [node.right, node.left];
      stack.push(node.left, node.right);
    }
  }
  return root;
}

// Iterative Breadth First Search
function invertTree(root) {
  const queue = [root];

  while (queue.length) {
    const node = queue.shift();
    if (node !== null) {
      [node.left, node.right] = [node.right, node.left];
      queue.push(node.left, node.right);
    }
  }
  return root;
}