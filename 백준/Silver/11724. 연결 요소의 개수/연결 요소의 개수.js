const readline = require('readline');
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

function solution (N, M, arr) {
    
    let list = [];
    
    for (let i = 1; i <= N; i++) {
        list[i] = [];
    }
    
    for (let i = 0; i < M; i++) {
        const [a, b] = arr[i];
        
        list[a].push(b);
        list[b].push(a);
    }
    
    let answer = 0;
    let visited = new Array(N + 1).fill(0);
    
    const dfs = (value) => {
        visited[value] = 1;
        
        for (let i = 0; i < list[value].length; i++) {
            if (!visited[list[value][i]]) {
                dfs(list[value][i]);
            }
        }
    }
    
    for (let i = 1; i <= N; i++) {
        if (!visited[i]) {
            dfs(i);
            answer++;
        }
    }
    
    console.log(answer);
}

let list = [];
let N, M;
rl.on('line', function(line) {
    if (N) {
        list.push(line.split(" ").map(Number));
    } else {
        [N, M] = line.split(" ").map(Number);
    }
}).on('close', () => {
    solution(N, M, list);
    process.exit();
})