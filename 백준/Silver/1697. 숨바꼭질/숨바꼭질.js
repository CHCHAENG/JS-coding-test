const readline = require('readline');
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

function solution(N, K) {
    let queue = [];
    let visited = Array(100001).fill(false);
    
    queue.push([N, 0]);
    
    while (queue.length) {
        const [value, depth] = queue.shift();
        
        if (visited[value]) continue;
        
        visited[value] = true;
        
        if (value === K) {
            console.log(depth);
            return;
        }
        
        let list = [value - 1, value + 1, value * 2];
        
        for (let i = 0; i < 3; i++) {
            if (!visited[list[i]] && list[i] >= 0 && list[i] <= 100000) {
                queue.push([list[i], depth + 1]);
            }
        }
    }
}


rl.on('line', function(line) {
    let [N, K] = line.split(" ").map(Number)
    solution(N, K);
}).on('close', () => {
    process.exit();
})