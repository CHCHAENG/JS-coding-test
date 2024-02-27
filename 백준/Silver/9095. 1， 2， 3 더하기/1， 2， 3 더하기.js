const readline = require('readline');
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

function solution(n) {
    let arr = new Array(12).fill(0);
    arr[1] = 1;
    arr[2] = 2;
    arr[3] = 4;
    
    if (n <= 3) console.log(arr[n]);
    else {
        for (let i = 0; i <= n - 4; i++) {
            fillArr(4 + i, arr);
        }
        
        console.log(arr[n]);
    }
}

function fillArr(n, arr) {
    let sum = 0;
    
    for (let i = 1; i <= 3; i++) {
        sum += arr[n - i];
    }

    arr[n] = sum;
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