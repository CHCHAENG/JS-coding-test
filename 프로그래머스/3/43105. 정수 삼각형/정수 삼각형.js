function solution(triangle) {
    let temp = triangle;
    
    // 밑에서 부터 탐색
    for (let i = triangle.length - 1; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            // 가장 큰 합을 나타낼 수 있는 경로를 선택했을 때의 값으로 변경
            temp[i - 1][j] += Math.max(temp[i][j], temp[i][j + 1]);
        }
    }
    
    // 최대값
    return temp[0][0];
}