const readline = require('readline');
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

function solution (line) {
    let arr = new Array(line);
    
    arr[1] = 1;
    arr[2] = 2;
    arr[3] = 3;
    
    for (let i = 4; i <= line; i++) {
        arr[i] = (arr[i - 1] + arr[i - 2]) % 15746;
    }
    
    console.log(arr[line]);
}

rl.on('line', function(line) {
    solution(+line);
}).on('close', () => {
    process.exit();
})