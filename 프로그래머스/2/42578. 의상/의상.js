function solution(clothes) {
    let answer = 1;
    let list = {};
    
    clothes.forEach(([a, b]) => {
        if (list[b]) list[b]++;
        else list[b] = 1;
    });
    
    for (let key in list) {
        answer *= (list[key] + 1);
    }
    
    return answer - 1;
}