function solution(m, n, puddles) {
    const arr = Array.from({length : n + 1}, () => Array(m + 1).fill(0));
    arr[1][1] = 1;
    
    for (let i = 1; i <= n; i++){
        for (let j = 1; j <= m; j++) {
            if (i === 1 && j === 1) continue;
            
            if (puddles.some(([x, y]) => x === j && y === i)) 
                arr[i][j] = 0;
            else
                arr[i][j] = (arr[i - 1][j] + arr[i][j - 1]) % 1000000007;
        }
    }
  
  return arr[n][m];
}
