Number of Islands	 medium
```js
// Version 1
function explore(grid, r, c, visited) {
    const rowInbounds = 0 <= r && r < grid.length;
    const colInbounds = 0 <= c && c < grid[0].length;

    if (!rowInbounds || !colInbounds) return false;
    if (grid[r][c] === '0') return false;

    const pos = r + ',' + c;

    if (visited.has(pos)) return false;
    visited.add(pos);

    explore(grid, r - 1, c, visited);
    explore(grid, r + 1, c, visited);
    explore(grid, r, c - 1, visited);
    explore(grid, r, c + 1, visited);

    return true;
}

var numIslands = function (grid) {
    const visited = new Set();
    let count = 0;

    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[0].length; c++) {
            if (explore(grid, r, c, visited)) {
                count += 1;
            }
        }
    }
    return count;
};

// Version 2 (Easier to understand/read)
function dfs(grid, i, j) {
    if (
        i < 0 ||
        i >= grid.length ||
        j < 0 ||
        j >= grid[0].length ||
        grid[i][j] === '0'
    ) {
        return;
    }

    grid[i][j] = '0';
    dfs(grid, i + 1, j);
    dfs(grid, i - 1, j);
    dfs(grid, i, j + 1);
    dfs(grid, i, j - 1);
}

var numIslands = function (grid) {
    let count = 0;

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === '1') {
                count += 1;
                dfs(grid, i, j);
            }
        }
    }
    return count;
};


```

Clone Graph	 medium
```js
/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
    let visited = {};

    let dfs = (node) => {
        if (!node) {
            return node;
        }

        if (visited[node.val]) {
            return visited[node.val];
        }

        let copy = new Node(node.val);

        visited[node.val] = copy;

        node.neighbors.forEach((n) => {
            copy.neighbors.push(dfs(n));
        });

        return copy;
    };

    return dfs(node);
};



```

Pacific Atlantic Waterflow	 medium
```js
//////////////////////////////////////////////////////////////////////////////
// Depth First Search (DFS)
// Time: O(m*n)
// Space: O(m*n)
// You can implement either Depth First Search (DFS) or Breadth First Search
// (BFS). The only noticeable impact is the performance cost of the BFS queue
// is higher than the DFS call stack. Also note if you are implementing BFS
// that you should terminate the search at the dequeue call if the coordinates
// signify that the cell has already been traversed as well as terminating the
// search before the enqueue call at each of the four supplemental directions.
//////////////////////////////////////////////////////////////////////////////

class Drains {
    constructor(west = false, east = false) {
        this.west = west;
        this.east = east;
    }
}

/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
function pacificAtlantic(heights) {
    const rowLen = heights.length;
    const colLen = heights[0].length;
    const lastRow = rowLen - 1;
    const lastCol = colLen - 1;
    const drainage = new Array(rowLen);
    const drainsBoth = [];

    for (let r = 0; r < rowLen; ++r) {
        drainage[r] = new Array(colLen);
        for (let c = 0; c < colLen; ++c) {
            drainage[r][c] = new Drains();
        }
    }

    for (let r = 0; r < rowLen; ++r) {
        markDrainage(r, 0, true);
        markDrainage(r, lastCol);
    }
    for (let c = 0; c < colLen; ++c) {
        markDrainage(0, c, true);
        markDrainage(lastRow, c);
    }

    return drainsBoth;

    /**
     * @param {number} r
     * @param {number} c
     * @param {boolean=} west = `false`
     * @param {number=} prev = `-Infinity`
     * @return {void}
     */
    function markDrainage(r, c, west = false, prev = -Infinity) {
        if (
            !inBounds(r, c) ||
            heights[r][c] < prev ||
            (west && drainage[r][c].west) ||
            (!west && drainage[r][c].east)
        ) {
            return;
        }

        const drains = drainage[r][c];
        const height = heights[r][c];

        if (west) {
            drains.west = true;
        } else {
            drains.east = true;
        }

        if (drains.west && drains.east) {
            drainsBoth.push([r, c]);
        }

        markDrainage(r - 1, c, west, height);
        markDrainage(r + 1, c, west, height);
        markDrainage(r, c - 1, west, height);
        markDrainage(r, c + 1, west, height);
    }

    /**
     * @param {number} r
     * @param {number} c
     * @return {boolean}
     */
    function inBounds(r, c) {
        return r >= 0 && c >= 0 && r < rowLen && c < colLen;
    }
}



```

Course Schedule	 medium
```cpp
/*
    Courses & prerequisites, return true if can finish all courses
    Ex. numCourses = 2, prerequisites = [[1,0]] -> true

    All courses can be completed if there's no cycle (visit already visited)

    Time: O(V + E)
    Space: O(V + E)
*/

class Solution {
public:
    bool canFinish(int numCourses, vector<vector<int>>& prerequisites) {
        // map each course to prereq list
        unordered_map<int, vector<int>> m;
        for (int i = 0; i < prerequisites.size(); i++) {
            m[prerequisites[i][0]].push_back(prerequisites[i][1]);
        }
        // all courses along current DFS path
        unordered_set<int> visited;
        
        for (int course = 0; course < numCourses; course++) {
            if (!dfs(course, m, visited)) {
                return false;
            }
        }
        return true;
    }
private:
    bool dfs(int course, unordered_map<int, vector<int>>& m, unordered_set<int>& visited) {
        if (visited.find(course) != visited.end()) {
            return false;
        }
        if (m[course].empty()) {
            return true;
        }
        visited.insert(course);
        for (int i = 0; i < m[course].size(); i++) {
            int nextCourse = m[course][i];
            if (!dfs(nextCourse, m, visited)) {
                return false;
            }
        }
        m[course].clear();
        visited.erase(course);
        return true;
    }
};



```

Number of Connected Components in Graph	 medium
```cpp
/*
    Graph of n nodes, given edges array, return # of connected components
    Ex. n = 5, edges = [[0,1],[1,2],[3,4]] -> 2

    Union find, for each edge combine, if already in same set keep traversing
    If not in same set, decrement count by 1, count will store # of components

    Time: O(n)
    Space: O(n)
*/

class Solution {
public:
    int countComponents(int n, vector<vector<int>>& edges) {
        vector<int> parents;
        vector<int> ranks;
        for (int i = 0; i < n; i++) {
            parents.push_back(i);
            ranks.push_back(1);
        }
        
        int result = n;
        for (int i = 0; i < edges.size(); i++) {
            int n1 = edges[i][0];
            int n2 = edges[i][1];
            result -= doUnion(parents, ranks, n1, n2);
        }
        return result;
    }
private:
    int doFind(vector<int>& parents, int n) {
        int p = parents[n];
        while (p != parents[p]) {
            parents[p] = parents[parents[p]];
            p = parents[p];
        }
        return p;
    }
    
    int doUnion(vector<int>& parents, vector<int>& ranks, int n1, int n2) {
        int p1 = doFind(parents, n1);
        int p2 = doFind(parents, n2);
        if (p1 == p2) {
            return 0;
        }
        
        if (ranks[p1] > ranks[p2]) {
            parents[p2] = p1;
            ranks[p1] += ranks[p2];
        } else {
            parents[p1] = p2;
            ranks[p2] += ranks[p1];
        }
        
        return 1;
    }
};



```

Graph Valid Tree medium
```cpp
/*
    Graph of nodes, list of edges, determine if edges make valid tree
    Ex. n = 5, edges = [[0,1],[0,2],[0,3],[1,4]] -> true

    (1) For graph to be a valid tree, must have exactly n - 1 edges
    (2) If graph fully connected & has n - 1 edges, can't contain cycle

    Time: O(n)
    Space: O(n)
*/

class Solution {
public:
    bool validTree(int n, vector<vector<int>>& edges) {
        vector<vector<int>> adj(n);
        for (int i = 0; i < edges.size(); i++) {
            vector<int> edge = edges[i];
            adj[edge[0]].push_back(edge[1]);
            adj[edge[1]].push_back(edge[0]);
        }
        
        vector<bool> visited(n);
        if (hasCycle(adj, visited, -1, 0)) {
            return false;
        }
        
        for (int i = 0; i < visited.size(); i++) {
            if (!visited[i]) {
                return false;
            }
        }
        return true;
    }
private:
    bool hasCycle(vector<vector<int>>& adj, vector<bool>& visited, int parent, int child) {
        if (visited[child]) {
            return true;
        }
        visited[child] = true;
        // checking for cycles and connectedness
        for (int i = 0; i < adj[child].size(); i++) {
            int curr = adj[child][i];
            if (curr != parent && hasCycle(adj, visited, child, curr)) {
                return true;
            }
        }
        return false;
    }
};



```