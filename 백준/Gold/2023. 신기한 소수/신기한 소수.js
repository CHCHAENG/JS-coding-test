let readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let primeNum = [2, 3, 5, 7];
let nextNum = [1, 3, 7, 9];

// 소수 판별 함수
const isPrime = (num) => {
    if (num === 1) return false;
    if (num <= 3) return true;
    
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// 신기한 소수 판별 함수
const makeNum = (N, num) => {
    if (num.toString().length === N) {
        console.log(num);
        return;
    }
    
    for (let i = 0; i < 4; i++) {
        const newNum = num * 10 + nextNum[i];
        
        if (isPrime(newNum)) 
            makeNum(N, newNum);
    }
}

rl.on('line', function(input) {
    let N = +input;
    
    for (let i = 0; i < 4; i++) {
        makeNum(N, primeNum[i]);
    }
}).on('close', () =>{
    process.exit();
});
