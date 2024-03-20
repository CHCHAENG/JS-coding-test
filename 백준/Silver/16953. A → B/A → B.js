const readline = require('readline');
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

function solution (A, B) {
    let answer = -1;
    dfs (A, B, 0);
    
    function dfs (start, goal, cnt) {
        if (start === goal) answer = cnt + 1;
        else {
            if (start * 2 <= goal) {
                dfs(start * 2, goal, cnt + 1);
            }
            
            if (Number(start + '1') <= goal) {
                dfs(Number(start + '1'), goal, cnt + 1);
            }
        }
    }
    
    console.log(answer);
}

rl.on('line', function(line) {
    const [A, B] = line.split(" ").map(Number);
    solution(A, B);
}).on('close', () =>{
    process.exit();
})
