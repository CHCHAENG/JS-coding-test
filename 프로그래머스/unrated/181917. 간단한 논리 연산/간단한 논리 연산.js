function solution(x1, x2, x3, x4) {
    let r1 = x1 || x2;
    let r2 = x3 || x4;
    
    return r1 && r2;
}