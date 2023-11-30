function solution(d, budget) {
    // 예산이 충분한 경우
    const sum = d.reduce((acc, cur) => acc + cur);
    if (sum <= budget) return d.length;
    
    d.sort((a, b) => a - b);
    
    let cnt = 0;
    for (let i = 0; i < d.length; i++) {
        cnt += d[i];
        
        if (cnt > budget) return i;
    }
    
}