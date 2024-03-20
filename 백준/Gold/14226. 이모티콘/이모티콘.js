const readline = require('readline');
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

function solution (S) {
    let visited = Array.from({length : 1001}, () => Array(1001).fill(0));
    
    let queue = [];
    queue.push([1, 0, 0]);
    visited[1][0] = 1;
    
    while (queue.length) {
        // 현재 이모티콘 수, 클립보드에 있는 수, 시간
        const [now, clip, count] = queue.shift();
        
        // 현재 이모티콘 수
        if (now === S) {
            console.log(count);
            return;
        }
        
        if (now <= 0 || now > 1000) continue;
        
        // 클립보드에 현재 이모티콘 수 저장
        if (!visited[now][now]) {
            visited[now][now] = 1;
            queue.push([now, now, count + 1]);
        }
        
        // 클립보드에 있는 이모티콘 붙여넣기
        if (clip && now + clip <= 1000) {
            if (!visited[now + clip][clip]) {
                visited[now + clip][clip] = 1;
                queue.push([now + clip, clip, count + 1]);
            }
        }
        
        // 현재 이모티콘 하나 삭제하기
        if (!visited[now - 1][clip]) {
            visited[now - 1][clip] = 1;
            queue.push([now - 1, clip, count + 1]);
        }
    }
}

rl.on('line', function(line) {
    solution(+line);
}).on('close', () =>{
    process.exit();
})
