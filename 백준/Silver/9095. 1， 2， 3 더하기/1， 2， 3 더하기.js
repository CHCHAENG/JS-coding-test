const readline = require('readline');
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

function solution(n) {
    // n은 11보다 작음
    let arr = new Array(12).fill(0);
    
    // 1,2,3 으로 수를 표현하는 것이므로 고정값으로 설정
    arr[1] = 1;
    arr[2] = 2;
    arr[3] = 4;
    
    if (n <= 3) console.log(arr[n]);
    else {
        // n이 4이상일 경우
        for (let i = 0; i <= n - 4; i++) {
            arr[4 + i] = arr[3 + i] + arr[2 + i] + arr[1 + i];
        }
        console.log(arr[n]);
    }
}

let input;
rl.on('line', function(line) {
    if (input) {
        solution(+line);
    } else {
        input = +line;
    } 
}).on('close', () =>{
    process.exit();
})