// https://leetcode.com/problems/shortest-path-in-binary-matrix/
// 1091. Shortest Path in Binary Matrix
// https://www.youtube.com/watch?v=qqIA4_bmpzk

// using bfs because we are doing shortest path
// bfs is done with a queue

/**
 * @param {number[][]} grid
 * @return {number}
 */
 var shortestPathBinaryMatrix = function(grid) {
    // no path bc beginning isnt valid
    if(grid[0][0] === 1) return -1

    let dirs = [
                [-1, -1], // left down
                [-1, 0], // left
                [-1, 1],// left up
                [0,1], // up
                [1,1], //  right up
                [1,0], // right
                [1,-1], // right down
                [0,-1] // down
            ]

    let queue = [
        [0,0,1] // x, y, count
    ]

    while (queue.length){

        //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift
        // The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.
        let [currX, currY, count] = queue.shift() // linked list dequeu, O(1) time complexity
        
        // bottom right position, return count
        if(currX === grid.length - 1 && currY === grid[0].length - 1){
            return count

        }
        // loop through directions array to get new x and new y
        for (let [x,y] of dirs){
            let [nextX, nextY] = [currX+x, currY + y]

            // checks at each direction, if valid and adds to queue for processing valid open directions
            // if position isn't free grid[nextX][nextY] === 1, or position isn't valid negative
            // or if end of grid in x dir or y dir, continue (skip)
            if (nextX < 0 || nextX > grid.length - 1 || nextY < 0 || nextY > grid[0].length - 1 || grid[nextX][nextY] === 1) continue

            // ? where does the check for shortest direction happen


            // else add to queue, increase count, and mark the square as taken
            queue.push([nextX, nextY, count + 1])
            grid[nextX][nextY] = 1
        }
    }
    return -1;
};

console.log(shortestPathBinaryMatrix([[0,0,0],[1,1,0],[1,1,0]]))