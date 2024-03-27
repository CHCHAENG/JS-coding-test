function solution(blocks) {
    const N = blocks.length;

    let leftDistance = Array.from({length : N}, () => 0);
    let rightDistance = Array.from({length : N}, ()=> 0);

    // 왼쪽에 있는 개구리가 점프할 수 있는 최대거리
    for (let i = 1; i < N; i++) {
        if (blocks[i] >= blocks[i - 1]) {
            leftDistance[i] = leftDistance[i - 1] + 1;
        } else leftDistance[i] = leftDistance[i - 1];
    }

    // 오른쪽에 있는 개구리가 점프할 수 있는 최대거리
    for (let i = N - 2; i >= 0; i--) {
        if (blocks[i] >= blocks[i + 1]) {
            rightDistance[i] = rightDistance[i + 1] + 1;
        } else rightDistance[i] = rightDistance[i + 1];
    }

    // 두 개구리 사이의 최대 거리 구하기
    let maxDistance = 0;
    for (let i = 0; i < N; i++) {
        maxDistance = Math.max(maxDistance, (leftDistance[i] - rightDistance[i] + 1));
    }

    return maxDistance;
}
