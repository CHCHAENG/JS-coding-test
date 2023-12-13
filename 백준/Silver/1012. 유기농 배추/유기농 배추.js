let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');


for (let I = 0; I < input[0]; I++) {
    const [M, N, K] = input[1].split(" ").map(Number);
    let arr = Array.from(Array(M), () => new Array(N).fill(0));
    
    for (let i = 2; i < 2 + K; i++) {
        const [a, b] = input[i].split(" ");
        
        arr[a][b] = 1;
    }
    
    const findArr = (a, b) => {
        const dx = [0, 0, -1, 1];
        const dy = [-1, 1, 0, 0];
    
        let queue = [];
        queue.push([a, b]);
        
        while (queue.length) {
            let [x, y] = queue.shift();
            arr[x][y] = 0;
            
            for (let i = 0; i < 4; i++) {
                const nx = x + dx[i];
                const ny = y + dy[i];
                
                if (nx >= 0 && ny >= 0 && nx < M && ny < N) {
                    if (arr[nx][ny] === 1) {
                        queue.push([nx, ny]);
                        arr[nx][ny] = 0;
                    }
                } 
                    
                
            }
        }
    }
    
    let answer = 0;
    
    for (let i = 0; i < M; i++) {
        for (let j = 0; j < N; j++) {
            if (arr[i][j] === 1) {
                findArr(i, j);
                answer++;
            }
        }
    }

    console.log(answer);
    
    input = [...input.slice(0, 1), ...input.slice(K + 2)];
}