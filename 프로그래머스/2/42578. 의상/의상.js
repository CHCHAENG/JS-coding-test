function solution(clothes) {
    let answer = 1;
    
    let list = {};
    
    clothes.forEach(([a, b]) => {
        if (!list[b]) list[b] = 2;
        else list[b]++;
    })
    
    for (let key in list) {
        answer *= list[key];
    }
    
    return answer - 1;
}