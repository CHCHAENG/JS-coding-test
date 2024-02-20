const readline = require('readline');
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

let input = [];

// bfs로 먹을 수 있는 물고기 찾기
function findFish (size, N, arr, sharkIndex) {
    const dy = [-1, 1, 0, 0];
    const dx = [0, 0, -1, 1];
    const queue = [sharkIndex];
    const visited = new Array(N).fill(0).map(() => new Array(N).fill(0));
    const result = [];
    visited[sharkIndex[0]][sharkIndex[1]] = 1;
    
    while (queue.length) {
        const [Y, X] = queue.shift();
        
        for (let i = 0; i < 4; i++) {
            const ny = Y + dy[i];
            const nx = X + dx[i];
        
            // 아기상어가 이동할 수 있는 위치
            if (nx >= 0 && ny >= 0 && nx < N && ny < N && !visited[ny][nx] && arr[ny][nx] <= size) {
                queue.push([ny, nx]);
                visited[ny][nx] = visited[Y][X] + 1;
                
                // 아기상어가 먹을 수 있는 물고기
                if (arr[ny][nx] && arr[ny][nx] < size) {
                    result.push([ny, nx, visited[ny][nx] - 1]);
                }
            }
        }
    }
    
    // 거리가 짧고, 위에 존재하고, 왼쪽에 존재하는 경우로 오름차순으로 정렬
    return result.sort((a, b) => {
        if (a[2] === b[2]) {
            if (a[0] === b[0]) return a[1] - b[1];
            return a[0] - b[0];
        }
        return a[2] - b[2];
    });
}

rl.on('line', function(line) {
    input.push(line);
}).on('close', () => {
    let N = +input.shift();
    let arr = input.map((v) => v.split(" ").map(Number));
    let sharkIndex;
    
    // 처음 아기상어 위치찾기
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if (arr[i][j] === 9) {
                sharkIndex = [i, j];
                break;
            }
        }
    }
    
    let count = 0;  // 총 이동거리
    let size = 2;   // 아기상어 크기
    let sizeCount = size;  // 아기상어가 먹은 물고기수 카운트
    
  
    while (true) {
        const canEatFish = findFish(size, N, arr, sharkIndex);
        // 먹을 수 있는 물고기가 없을 경우 종료
        if (!canEatFish.length) break;
        
        // 우선순위가 가장 높은 물고기를 먹었을 경우
        const [newX, newY, move] = canEatFish[0];
        count += move;
        sizeCount--;
        arr[sharkIndex[0]][sharkIndex[1]] = 0;
        sharkIndex = [newX, newY];
        arr[newX][newY] = 9;
        
        // 자신의 크기와 같은 수의 물고기를 먹었을 경우 크기 증가
        if (sizeCount === 0) {
            size++;
            sizeCount = size;
        }
    }
    
    // 최종 이동거리 출력
    console.log(count);
    process.exit();
})