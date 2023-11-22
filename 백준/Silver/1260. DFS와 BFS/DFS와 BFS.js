let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M, V] = input[0].split(" ");

// 연결되어있는 정점을 정리
let list = {};

for (let i = 1; i<= M; i++) {
    const [n1, n2] = input[i].split(" ");
    
    // 값을 넣고 오름차순으로 정렬
    if (list[n1]) list[n1] = [...list[n1], n2].sort((a, b) => +a - +b);
    else list[n1] = [n2];
    if (list[n2]) list[n2] = [...list[n2], n1].sort((a, b) => +a - +b);
    else list[n2] = [n1];
}

function dfs (start) {
    let visited = [];
    let queue = [];
    visited.push(start);
    
    if (list[start]) {
        queue.push(...list[start]);
    
        while (queue.length) {
            let nodes = queue.shift();
            
            if(!visited.includes(nodes)) {
                visited.push(nodes);
                queue = [...list[nodes],...queue];
            }
        }
    }
    
    
    return visited.join(" ");
}


function bfs (start) {
    let visited = [];
    let queue = [];
    visited.push(start);
    
    if (list[start]) {
        queue.push(...list[start]);
    
        while (queue.length) {
            let nodes = queue.shift();
            
            if(!visited.includes(nodes)) {
                visited.push(nodes);
                queue = [...queue, ...list[nodes]];
            }
        }
    }
    
    return visited.join(" ");
}

console.log(dfs(V));
console.log(bfs(V));



