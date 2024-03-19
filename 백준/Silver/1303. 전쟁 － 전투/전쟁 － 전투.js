const readline = require('readline');
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

function solution(N, M, arr) {
    let Wcnt = 0;
    let Bcnt = 0;
    
    let visited = Array.from({length : M}, () => Array(N).fill(false));
    
    for (let i = 0; i < M; i++) {
        for (let j = 0; j < N; j++) {
            if (arr[i][j] === 'W' && !visited[i][j]) {
                Wcnt += BFS(i, j, 'W');
            } else if (arr[i][j] === 'B' && !visited[i][j]) {
                Bcnt += BFS(i, j, 'B');
            }
        }
    }
    
    function BFS (start,end, value) {
        const dx = [0, 0, -1, 1];
        const dy = [-1, 1, 0, 0];
        
        let cnt = 0;
        let list = [];
        
        list.push([start, end]);
        visited[start][end] = true;
        
        while (list.length) {
            const [x, y] = list.shift();
            cnt++;
            
            for (let i = 0; i < 4; i++) {
                const nx = x + dx[i];
                const ny = y + dy[i];
                
                if (nx >= 0 && ny >= 0 && nx < M && ny < N) {
                    if (arr[nx][ny] === value && !visited[nx][ny]) {
                        visited[nx][ny] = true;
                        list.push([nx, ny]);
                    }
                }
            }
        }
        
        return cnt * cnt;
    }
    
    console.log(`${Wcnt} ${Bcnt}`);
}



let N = 0, M = 0;
let arr = [];

rl.on('line', function(line) {
    if(N !== 0) {
        arr.push([...line]);
    } else {
        [N, M] = line.split(" ").map(Number);
    }
}).on('close', () => {
    solution(N, M, arr);
    process.exit();
})