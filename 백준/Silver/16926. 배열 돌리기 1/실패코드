let readline = require('readline');
let rl = readline.createInterface({
    input : process.stdin,
    output :process.stdout
});

let input = [];
let N, M, R;
let arr = [];

function solution (N, M, depth) {
    if (N <= 1 && M <= 1) return;
    

    if (N === 2 && M === 1) {
        [arr[0 + depth][0 + depth], arr[1 + depth][0 + depth]] = [arr[1 + depth][0 + depth], arr[0 + depth][0 + depth]];
        return;
    }
    
    if (N === 1 && M === 2) {
        [arr[0 + depth][0 + depth], arr[0 + depth][1 + depth]] = [arr[0 + depth][1 + depth], arr[0 + depth][0 + depth]];
        return;
    }
    
    // 깊은복사
    let tempArr = JSON.parse(JSON.stringify(arr));
    
    if (N === 2 && M === 2) {
        arr[0 + depth][0 + depth] = tempArr[0 + depth][1 + depth];
        arr[0 + depth][1 + depth] = tempArr[1 + depth][1 + depth];
        
        arr[1 + depth][0 + depth] = tempArr[0 + depth][0 + depth];
        arr[1 + depth][1 + depth] = tempArr[1 + depth][0 + depth];
        
        return;
    }
    
    // 제일 윗줄
    for (let i = 0; i < M - 1; i++) {
        arr[0 + depth][i] = tempArr[0 + depth][i + 1];
    }
    arr[0 + depth][M - 1] = tempArr[1 + depth][M - 1];

    // 제일 마지막줄
    arr[N - 1 - depth][0 + depth] = arr[N - 2 - depth][0 + depth];
    for(let i = 1; i < M; i++) {
        arr[N - 1 - depth][i] = tempArr[N - 1 - depth][i - 1];
    }
    
    // 바깥 테두리 
    for (let i = 1; i < N - 1; i++) {
        arr[i][0 + depth] = tempArr[i - 1][0 + depth];
        arr[i][M - 1 - depth] = tempArr[i + 1][M - 1 - depth];
    }
    
    solution(N - 2, M - 2, depth + 1);
}
rl.on('line', function(line) {
    if (input.length > 0) {
        arr.push(line.split(" "));
        let temp = arr[0];
    } else {
        input.push(line);
        N = +input[0][0];
        M = +input[0][2];
        R = +input[0][4];
    }
}).on('close', () =>{
    for (let i = 0; i < R; i++) {
        solution(N, M, 0);
    }
    console.log(arr);
    process.exit();
});

