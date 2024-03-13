const readline = require('readline');
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

function solution(N, list) {
    let dp = new Array(N).fill(0);
    
    for (let i = 0; i < N; i++) {
        let count = 0;
        for (let j = 0; j < i; j++) {
            if (dp[j] > count && list[i] < list[j]) {
                count = dp[j];
            }
        }
        dp[i] = ++count;
    }
    
    console.log(Math.max(...dp));
}

let N = 0;
let list = [];

rl.on('line', function(line) {
    if (N !== 0) {
        list = line.split(" ").map(Number);
    } else {
        N = +line;
    }
}).on('close', () => {
    solution(N, list);
    process.exit();
});