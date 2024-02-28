const readline = require('readline');
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

function solution(N, arr) {
    let list = [];
    let c = 0;
    const visited = Array.from({length : N}, () => new Array(N).fill(false));
    
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if (arr[i][j] === '1' && !visited[i][j]) {
                c++;
                dfs(i, j);
            }
        }
    }
    
    
    function dfs(i, j) {
        const dx = [-1, 1, 0, 0];
        const dy = [0, 0, -1, 1];
        const queue = [[i, j]];
        let count = 1;
        
        while (queue.length) {
            const [x, y] = queue.shift();
            visited[x][y] = true;
            
            for (let i = 0; i < 4; i++) {
                const nx = dx[i] + x;
                const ny = dy[i] + y;
                
                if (nx >= 0 && ny >= 0 && nx < N && ny < N && !visited[nx][ny] && arr[nx][ny] === '1') {
                    queue.push([nx, ny]);
                    count++;
                    visited[nx][ny] = true;
                }
            }
        }
        
        return list.push(count);
    }
    
    console.log(c);
    list.sort((a, b) => a - b);
    list.forEach((v) => console.log(v));
}

let N;
let arr = [];

rl.on('line', function(line) {
    if (N) {
        arr.push(line.split(""));
    }else {
        N = +line;
    }
}).on('close', () => {
    solution(N, arr);
    process.exit();
})