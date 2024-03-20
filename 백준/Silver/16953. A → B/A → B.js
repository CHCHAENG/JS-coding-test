const readline = require('readline');
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

function solution (A, B) {
    let list = [];
    let queue = [];
    
    queue.push([A, 1]);
    list.push(A);
    
    while (queue.length) {
        const [value, depth] = queue.shift();
        
        if (value === B) {
            console.log(depth);
            return;
        }
        
        if (value > B) {
            continue;
        }
        
        let li = [value * 2, Number(value.toString() + "1")];
        let num1 = value * 2;
        let num2 = Number(value.toString() + "1");
        
        if (!list.includes(num1)) queue.push([num1, depth + 1]);
        if (!list.includes(num2)) queue.push([num2, depth + 1]);
    }
    
    console.log(-1);
}

rl.on('line', function(line) {
    const [A, B] = line.split(" ").map(Number);
    solution(A, B);
}).on('close', () =>{
    process.exit();
})
