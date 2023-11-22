const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map(Number));
const [N, M, _] = input.shift();
const dir = [[0, 1], [0, -1], [-1, 0], [1, 0]]; // 인접한 상하좌우 x,y좌표

// 음식물 있는 곳 = 1, 없는 곳 = 0으로 채워진 graph 배열
const graph = Array.from(Array(N), () => Array(M).fill(0));
input.forEach(([r, c]) => graph[r - 1][c - 1] = 1);

const dfs = (r, c) => {
  let cnt = 1; // 현재 있는 곳도 카운팅에 포함하기 위해 초기값 1
  const stack = [[r, c]];
  while (stack.length) {
    const [cx, cy] = stack.pop();
    
    // 인접한 네방향 탐색을 위한 반복문
    for (let i = 0; i < 4; i++) {
      const x = cx + dir[i][0];
      const y = cy + dir[i][1];
      
      // 해당 위치 그래프 범위 안에 있고 음식물이 있는 곳(1)인 경우
      if (x >= 0 && x < N && y >= 0 && y < M && graph[x][y]) {
        graph[x][y] = 0; // 방문 처리
        cnt++; // 음식물 크기 증가
        stack.push([x, y]); // 해당 위치 스택에 담기
      }
    }
  }
  return cnt;
};

let result = 0; // DFS결과값 담을 변수(음식물 크기)
let max = 0; // 최대 음식물 크기를 담을 변수

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (graph[i][j]) {
      graph[i][j] = 0;
      result = dfs(i, j);
      if (result > max) max = result;
    }
  }
}
console.log(max);