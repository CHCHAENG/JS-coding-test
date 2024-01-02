let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const M = +input[0].split(" ")[1];
const arr = input[1].split(" ").map(Number);

let start = 0;
let end = 0;
let sum = arr[0];
let answer = 0;

while (arr[start] && arr[end]) {
    if (sum === M) {
        answer++;
        sum += arr[++end];
    } else if (sum > M) {
        sum -= arr[start++];
    } else {
        sum += arr[++end];
    }
}

console.log(answer);