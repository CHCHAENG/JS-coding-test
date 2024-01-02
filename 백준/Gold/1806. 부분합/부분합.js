// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const readline = require('readline');
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

const solution = (S, arr) => {
    let answer = Infinity;
    let start = 0, end = 0, sum = arr[0];
    
    while (arr[start] && arr[end]) {
        if (sum >= S) {
            answer = Math.min(answer, end - start + 1);
            sum -= arr[start++];
        } else {
            sum += arr[++end];
        }
    }
    
    if (answer !== Infinity) console.log(answer);
    else console.log(0);
}

let input = [];
rl.on("line", function(line){
    input.push(line);
}).on("close", function() {
    const S = +input[0].split(" ")[1];
    const arr = input[1].split(" ").map(Number);
    
    solution(S, arr);
    process.exit();
}) 
