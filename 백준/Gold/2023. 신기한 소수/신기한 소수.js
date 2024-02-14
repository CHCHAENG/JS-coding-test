let readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// 소수 판별 함수
const isPrime = (num) => {
    if (num === 1) return false;
    if (num === 2) return true;
    
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }

    return true;
}

// 신기한 소수 판별 함수
const makeNum = (num) => {
    while (num > 0) {
        if (!isPrime(num)) return;
        num = parseInt(num / 10);
    }
    
    return true;
}

rl.on('line', function(input) {
    let N = +input;
    
    let start = 1 * Math.pow(10, N - 1);
    let end = '9'.repeat(N);

    for (let i = start; i <= +end; i++) {
        if (makeNum(i)) console.log(i);
    }
    
}).on('close', () =>{
    process.exit();
});
