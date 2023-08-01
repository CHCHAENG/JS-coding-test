function solution(a, b, c, d) {
    const minValue = Math.min(a,b,c,d);
    const maxValue = Math.max(a,b,c,d);
    
    let minCnt = 0;
    let maxCnt = 0;
    
    let answer = minValue;

    if (minValue === maxValue) answer = 1111 * a;
    
    const arr = [a, b, c, d];
    
    arr.map((value) => {
        if (value === maxValue) maxCnt++;
        else if (value === minValue) minCnt++;
    })

    
    if (maxCnt === 4) answer = 1111 * maxValue;
    
    else if (maxCnt === 3) answer = Math.pow((10 * maxValue + minValue), 2);
    else if (minCnt === 3) answer = Math.pow((10 * minValue + maxValue), 2);
    
    else if (maxCnt === 2 && minCnt === 2) answer = (minValue + maxValue) * Math.abs(minValue - maxValue);
    
    else if (a === b) answer = c * d;
    else if (a === c) answer = b * d;
    else if (a === d) answer = b * c;
    else if (b === c) answer = a * d;
    else if (b === d) answer = a * c;
    else if (c === d) answer = a * b;
    
    return answer;
}