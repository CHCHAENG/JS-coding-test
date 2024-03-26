const readline = require('readline');
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

function solution(n, x, list) {
    list.sort((a, b) => a - b);
    
    let start = 0;
    let end = n - 1;
    let sum = 0;
    let count = 0;
    
    while (start !== end) {
        sum = list[start] + list[end]
        if (sum === x) {
            count++;
            start++;
        } else if (sum > x) {
            end--;
        } else {
            start++;
        }
    }
    
    console.log(count);
}

let n, x;
let list;

rl.on('line', function(input) {
    if (n) {
        if (list) {
            x = +input;
        } else {
            list = input.split(" ").map(Number);
        }
    } else {
        n = +input
    } 
}).on('close', () => {
    solution(n, x, list);
    process.exit();
})