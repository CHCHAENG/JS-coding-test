const readline = require('readline');
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

function solution (N, arr, min, max) {
    let list = new Array(max - min + 1).fill(0);
    
    for (let i = min; i <= max; i++) {
        let visited = Array.from({length : N}, () => Array(N).fill(0));
        
        for (let j = 0; j < N; j++) {
            for (let k = 0; k < N; k++) {
                if (arr[j][k] > i && !visited[j][k]) {
                    BFS(i, j, k, visited);
                    list[i - 1]++;
                }
            }
        }
    }
    
    function BFS (depth, x, y, visited) {
        const dx = [-1, 1, 0, 0];
        const dy = [0, 0, -1, 1];
        
        let queue = [];
        queue.push([x, y]);
        visited[x][y] = 1;
        
        while (queue.length) {
            const [a, b] = queue.shift();
            
            for (let i = 0; i < 4; i++) {
                const nx = a + dx[i];
                const ny = b + dy[i];
                
                if (nx >= 0 && ny >= 0 && nx < N && ny < N) {
                    if (!visited[nx][ny] && arr[nx][ny] > depth) {
                        queue.push([nx, ny]);
                        visited[nx][ny] = 1;
                    }
                }
            }
        }
    }
    
    console.log(Math.max(...list, 1));
}

let arr = [];
let N = 0;
let min = 100, max = 1;

rl.on('line', function(line) {
    if (N) {
        let temp = line.split(" ").map(Number);
        min = Math.min(min, ...temp);
        max = Math.max(max, ...temp);
        arr.push(temp);
    } else {
        N = +line;
    }
}).on('close', () => {
    solution(N, arr, min, max);
    process.exit();
})