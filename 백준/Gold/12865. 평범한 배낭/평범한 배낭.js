const readline = require('readline');
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

function solution(N, K, list) {
    let arr = Array.from({length : N + 1}, () => Array(K + 1).fill(0));
    
    for (let i = 1; i < N + 1; i++) {
        // 현재 W, V
        let [W, V] = list[i - 1];
        
        for (let j = 1; j <= K; j++) {
            if (j - W >= 0) {
                arr[i][j] = Math.max(arr[i - 1][j - W] + V, arr[i - 1][j]);
            } else {
                arr[i][j] = arr[i - 1][j];
            }
        }
    }
    
    console.log(arr[N][K]);
}

let input = [];
let N, K;
let list = [];

rl.on('line', function(line) {
    if (input.length) {
        list.push(line.split(" ").map(Number));
    } else {
        input.push(line);
        [N, K] = input[0].split(" ").map(Number);
    }
}).on('close', () => {
    solution(N, K, list);
    process.exit();
})
