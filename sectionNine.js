// 9.2
//     Imagine a robot sitting on the upper left comer of an X by Ygrid. The robot can only
//     move in two directions: right and down. How many possible paths are there for the
//     robot to go from (0, 0) to (X, Y) ?
//     FOLLOW UP
//     Imagine certain spots are "off limits," such that the robot cannot step on them.
//     Design an algorithm to find a path for the robot from the top left to the bottom right.
function paths(grid, start, end){
    if(start.x === end.x && start.y === end.y){
        return 1;
    }else if(start.x > grid.length || start.y > grid[0].length){
        return 0;
    }else{
        var rightMiner = {x: start.x+1, y: start.y}
        var downMiner = {x: start.x, y: start.y+1}
        return paths(grid,rightMiner,end) + paths(grid,downMiner,end)
    }
}

function findPath(grid,start,end){
   var path = []
   function pathsOffLimits(grid,start,end, direction, path){
        console.log("Grid", grid)
        console.log("Start", start)
        if(start.x === end.x && start.y === end.y){
            path.push(direction);
            return path;
        }else if(start.x >= grid.length || start.y >= grid.length || grid[start.x][start.y] === 1){
            return false;
        }else{
            var rightMiner = {x: start.x+1, y: start.y}
            var downMiner = {x: start.x, y: start.y+1}
            var right = pathsOffLimits(grid,rightMiner,end,"right", path);
            var down = pathsOffLimits(grid,downMiner,end, "down", path)
            if(right){
                return path.push("right");
            }else if(down){
                return path.push("down");
            }
        }
    }
    pathsOffLimits(grid,start,end,"",path)
    return path
}

// var grid = [[0,1,0],
//             [0,1,0],
//             [0,0,0]
//         ]
// var start = {x:0,y:0}
// var end = {x:2,y:2}

// console.log(findPath(grid,start,end))