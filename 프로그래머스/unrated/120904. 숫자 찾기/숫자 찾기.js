function solution(num, k) {
    let index = num.toString().indexOf(k);
    
    return index === -1 ? index : index + 1;
}