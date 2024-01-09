/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function leafSimilar1(root1: TreeNode | null, root2: TreeNode | null): boolean {
  let leaves1 = []
  let leaves2 = []

  const findLeafs = (root, leafs) => {
    if (root.left === null && root.right === null) {
      leafs.push(root.val)
    }

    if (root.left) {
      findLeafs(root.left, leafs)
    }

    if (root.right) {
      findLeafs(root.right, leafs)
    }
  }

  findLeafs(root1,leaves1)
  findLeafs(root2, leaves2)

  if (leaves1.length !== leaves2.length) {
    return false
  }

  for (let i = 0; i < leaves1.length; i++) {
    if (leaves1[i] !== leaves2[i]) {
      return false
    }
  }


  return true
};

// cleaned up
function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
  let leaves1 = []
  let leaves2 = []

  const findLeaves = (node, leafs) => {
    if (node !== null) {
      if (node.left === null && node.right === null) {
        leafs.push(node.val)
      }

      findLeaves(node.left, leafs)
      findLeaves(node.right, leafs)
    }
  }

  findLeaves(root1,leaves1)
  findLeaves(root2, leaves2)

  if (leaves1.length !== leaves2.length) {
    return false
  }

  return leaves1.every((leaf, i) => leaf === leaves2[i])

};
