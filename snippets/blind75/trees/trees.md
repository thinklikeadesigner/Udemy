Invert Binary Tree	easy
```js
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
 * @return {TreeNode}
 */
var invertTree = function (root) {
    if (!root) return root;
    let left = root.left;
    root.left = invertTree(root.right);
    root.right = invertTree(left);
    return root;
};
```

Maximum Depth of Binary Tree	easy
```js
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
 * @return {number}
 */
var maxDepth = (root) => {
    let maxDepth = 0;
    let DFS = (node, depth) => {
        if (!node) return maxDepth;
        if (depth > maxDepth) maxDepth = depth;
        DFS(node.right, depth + 1);
        DFS(node.left, depth + 1);
    };
    DFS(root, 1);
    return maxDepth;
};



```

Same Tree	easy
```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
    if (!p && !q) return true;
    if (!p || !q || p.val !== q.val) return false;
    return isSameTree(p.right, q.right) && isSameTree(p.left, q.left);
};



```

Subtree of Another Tree	easy
```js
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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
    // given two nodes are they the same?
    const isSame = (n1, n2) => {
        if (!n1 && !n2) return true;
        if (!n1 || !n2 || n1.val !== n2.val) return false;
        return isSame(n1.left, n2.left) && isSame(n1.right, n2.right);
    };

    // check if subRoot is subtree of root:
    const DFS = (node) => {
        if (!node) return false;
        if (isSame(node, subRoot)) return true;
        return DFS(node.left) || DFS(node.right);
    };

    return DFS(root);
};



```
Lowest Common Ancestor of a BST	easy
```cpp
/*
    Given a binary search tree (BST), find the LCA of 2 given nodes in the BST

    Use BST property: if curr > left & right go left, else if < go right, else done

    Time: O(n)
    Space: O(n)
*/

/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
 * };
 */

class Solution {
public:
    TreeNode* lowestCommonAncestor(TreeNode* root, TreeNode* p, TreeNode* q) {
        if (p->val < root->val && q->val < root->val) {
            return lowestCommonAncestor(root->left, p, q);
        } else if (p->val > root->val && q->val > root->val) {
            return lowestCommonAncestor(root->right, p, q);
        } else {
            return root;
        }
    }
};

// class Solution {
// public:
//     TreeNode* lowestCommonAncestor(TreeNode* root, TreeNode* p, TreeNode* q) {
//         while (root != NULL) {
//             if (p->val < root->val && q->val < root->val) {
//                 root = root->left;
//             } else if (p->val > root->val && q->val > root->val) {
//                 root = root->right;
//             } else {
//                 return root;
//             }
//         }
//         return NULL;
//     }
// };



```

Binary Tree Level Order Traversal	medium
```js
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
    if (!root) return [];

    const result = [];
    const queue = [root];

    while (queue.length) {
        const numNodes = queue.length;
        const temp = [];
        for (let i = 0; i < numNodes; i++) {
            const subtree = queue.shift();
            temp.push(subtree.val);
            if (subtree.left !== null) queue.push(subtree.left);
            if (subtree.right !== null) queue.push(subtree.right);
        }
        result.push(temp);
    }

    return result;
};



```

Validate Binary Search Tree	medium
```js
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
 * @return {boolean}
 */

var isValidBST = function (root) {
    return validate(root, null, null);
};

function validate(root, max, min) {
    if (!root) {
        return true;
    } else if (
        (max !== null && root.val >= max) ||
        (min !== null && root.val <= min)
    ) {
        return false;
    } else
        return (
            validate(root.left, root.val, min) &&
            validate(root.right, max, root.val)
        );
}



```

Kth Smallest Element in a BST	medium
```cpp
/*
    Given root of BST & int k, return kth smallest value (1-indexed) of all values in tree
    Ex. root = [3,1,4,null,2] k = 1 -> 1, root = [5,3,6,2,4,null,null,1] k = 3 -> 3

    Inorder traversal, each visit decrement k, when k = 0 return, works because inorder

    Time: O(n)
    Space: O(n)
*/

/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    int kthSmallest(TreeNode* root, int k) {
        int result = 0;
        inorder(root, k, result);
        return result;
    }
private:
    void inorder(TreeNode* root, int& k, int& result) {
        if (root == NULL) {
            return;
        }
        inorder(root->left, k, result);
        k--;
        if (k == 0) {
            result = root->val;
            return;
        }
        inorder(root->right, k, result);
    }
};
```

Construct Tree from Preorder and Inorder Traversal	medium
```cpp
/*
    Given 2 integer arrays preorder & inorder, construct & return the binary tree
    Ex. preorder = [3,9,20,15,7], inorder = [9,3,15,20,7] -> [3,9,20,null,null,15,7]

    Preorder dictates nodes, inorder dictates subtrees (preorder values, inorder positions)

    Time: O(n)
    Space: O(n)
*/

/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    TreeNode* buildTree(vector<int>& preorder, vector<int>& inorder) {
        int index = 0;
        return build(preorder, inorder, index, 0, inorder.size() - 1);
    }
private:
    TreeNode* build(vector<int>& preorder, vector<int>& inorder, int& index, int i, int j) {
        if (i > j) {
            return NULL;
        }
        
        TreeNode* root = new TreeNode(preorder[index]);
        
        int split = 0;
        for (int i = 0; i < inorder.size(); i++) {
            if (preorder[index] == inorder[i]) {
                split = i;
                break;
            }
        }
        index++;
        
        root->left = build(preorder, inorder, index, i, split - 1);
        root->right = build(preorder, inorder, index, split + 1, j);
        
        return root;
    }
};
```

Binary Tree Max Path Sum	hard
```cpp
/*
    Given root of binary tree, return max path sum (seq of adj node values added together)

    Path can only have <= 1 split point, assume curPath has it, so return can't split again

    Time: O(n)
    Space: O(n)
*/

/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    int maxPathSum(TreeNode* root) {
        int maxPath = INT_MIN;
        dfs(root, maxPath);
        return maxPath;
    }
private:
    int dfs(TreeNode* root, int& maxPath) {
        if (root == NULL) {
            return 0;
        }
        
        int left = max(dfs(root->left, maxPath), 0);
        int right = max(dfs(root->right, maxPath), 0);
        
        int curPath = root->val + left + right;
        maxPath = max(maxPath, curPath);
        
        return root->val + max(left, right);
    }
};
```
Serialize and Deserialize Binary Tree hard
```cpp
/*
    Design an algorithm to serialize & deserialize a binary tree

    Use stringstream to concisely handle negatives, nulls, etc.

    Time: O(n) serialize, O(n) deserialize
    Space: O(n) serialize, O(n) deserialize
*/

/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
 * };
 */
class Codec {
public:

    // Encodes a tree to a single string.
    string serialize(TreeNode* root) {
        ostringstream out;
        encode(root, out);
        return out.str();
    }

    // Decodes your encoded data to tree.
    TreeNode* deserialize(string data) {
        istringstream in(data);
        return decode(in);
    }
    
private:
    
    void encode(TreeNode* root, ostringstream& out) {
        if (root == NULL) {
            out << "N ";
            return;
        }
        
        out << root->val << " ";
        
        encode(root->left, out);
        encode(root->right, out);
    }
    
    TreeNode* decode(istringstream& in) {
        string value = "";
        in >> value;
        
        if (value == "N") {
            return NULL;
        }
        
        TreeNode* root = new TreeNode(stoi(value));
        
        root->left = decode(in);
        root->right = decode(in);
        
        return root;
    }
    
};

// Your Codec object will be instantiated and called as such:
// Codec ser, deser;
// TreeNode* ans = deser.deserialize(ser.serialize(root));
```