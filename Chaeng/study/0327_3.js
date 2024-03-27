function solution(A, S) {
    const N = A.length;
    let count = 0;
    let sumArr = Array.from({length : N + 1}, () => 0);

    // 누적합으로 계산
    for (let i = 1; i <= N; i++) {
        sumArr[i] = sumArr[i - 1] + A[i - 1];
    }

    for (let i = 0; i < N; i++) {
        for (let j = i + 1; j <= N; j++) {
            const nowSum = sumArr[j] - sumArr[i];   // 현재 부분 배열의 합
            const mean = nowSum / (j - i); // 현재의 평균값

            // S와 값이 일치하면 count
            if (mean === S) {
                count++;

                // 1,000,000,000 보다 큰 경우
                if (count > 1000000000) return 1000000000;
            }
        }
    }

    return count;
}
