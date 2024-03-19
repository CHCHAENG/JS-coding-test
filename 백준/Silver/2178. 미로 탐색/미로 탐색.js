const readline = require('readline');
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

function solution (N, M, arr) {
    // 좌, 우, 상, 하
    const dx = [0, 0, -1, 1];
    const dy = [-1, 1, 0, 0];
    
    let visited = Array.from({length : N}, () => Array(M).fill(0));
    
    BFS(0, 0);
    
    function BFS (start, end) {
        let list = [];
        
        visited[start][end] = 1;
        list.push([start, end]);

        while(list.length) {
            const [x, y] = list.shift();
    
            if (x === N - 1 && y === M - 1) {
                break;
            }
            
            for (let i = 0; i < 4; i++) {
                const nx = x + dx[i];
                const ny = y + dy[i];
                
                if (nx >= 0 && ny >= 0 && nx < N && ny < M) {
                    if (arr[nx][ny] === 1 && !visited[nx][ny]) {
                        visited[nx][ny] = visited[x][y] + 1;
                        list.push([nx, ny]);
                    }
                }
            }
        }
    }
    
    
    console.log(visited[N - 1][M - 1]);
}

let N = 0, M = 0;
let arr = [];

rl.on('line', function(line) {
    if(N !== 0) {
        arr.push([...line].map(Number));
    } else {
        [N, M] = line.split(" ").map(Number);
    }
}).on('close', () => {
    solution(N, M, arr);
    process.exit();
})