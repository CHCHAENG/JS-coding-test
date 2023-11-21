function solution(maps) {
    let visited = maps; // 방문한 노드는 0으로 처리 (= 갈 수 없는 노드)
    // 상하좌우
    const dx = [0, 0, -1, 1]; 
    const dy = [-1, 1, 0, 0];
    const yLength = maps.length;
    const xLength = maps[0].length;
    
    let queue = [];

    // 맨 처음 시작 노드
    queue.push([0, 0, 1]);
    visited[0][0] = 0;
    
    while (queue.length) {
        let [y, x, c] = queue.shift(); // 제일 앞에 있는 노드
        
        if (yLength - 1 === y && xLength - 1 === x) return c; // 진영에 위치한 index라면 현재 c 값 retuen
        
        // 상하좌우로 움직이기
        for (let i = 0; i < 4; i++) {
            const ny = y + dy[i];
            const nx = x + dx[i];

            // 이동할 수 있는 노드좌표라면
            if (nx >= 0 && ny >= 0 && nx < xLength && ny < yLength && visited[ny][nx] === 1) {
                // 해당 노드로 이동하고 방문표시로 처리
                queue.push([ny, nx, c + 1]);
                visited[ny][nx] = 0;
            } 
        }
    }
    return -1;
}