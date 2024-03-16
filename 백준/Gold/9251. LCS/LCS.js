const readline = require('readline');
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

function solution (input) {
    const str1 = input[0];
    const str2 = input[1];
    
    const dp = Array.from({length : input[0].length + 1}, () => Array(input[1].length + 1).fill(0));
    
    for (let i = 1; i <= str1.length; i++) {
        for (let j = 1; j <= str2.length; j++) {
            if (str1[i - 1] === str2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    console.log(dp[input[0].length][input[1].length]);
}

let input = [];

rl.on('line', function(line) {
    input.push(line);
}).on('close', () => {
    solution(input);
    process.exit();
});