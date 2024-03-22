const readline = require('readline');
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

function solution (N, arr) {
    let list = [];
    let visited = Array.from({length : N + 1}, () => 0);
    
    for (let i = 1; i <= N; i++) {
        list[i] = [];
    }
    
    for (let i = 0; i < arr.length; i++) {
        const [a, b] = arr[i];
        
        list[a].push(b);
        list[b].push(a);
    }
    
    bfs();
    
    // for (let i = 2; i <= N; i++) {
    //     console.log(visited[i]);
    // }
    
    visited = visited.slice(2);
    let result = "";
    visited.map((v) => (result += `${v}\n`));
    console.log(result);
    
    function bfs () {
        let queue = [];
        visited[1] = 1;
        
        for (let i = 0; i < list[1].length; i++) {
            visited[list[1][i]] = 1;
            queue.push(list[1][i]);
        }
        
        while (queue.length) {
            const val = queue.shift();
            
            for (let i = 0; i < list[val].length; i++) {
                if (!visited[list[val][i]]) {
                    queue.push(list[val][i]);
                    visited[list[val][i]] = val;
                }
            }
        }
    }
}

let arr = [];
let N = 0;

rl.on('line', function(line) {
    if (N) {
        arr.push(line.split(" ").map(Number));
    } else {
        N = +line;
    }
}).on('close', () => {
    solution(N, arr);
    process.exit();
})