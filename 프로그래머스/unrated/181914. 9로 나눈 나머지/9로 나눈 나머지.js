function solution(number) {
    var answer = 0;
    let arr = number.toString().split('');
    let sum = 0;
    
    arr.forEach((x) => {
        sum += (+x);
    });
    
    return sum % 9;
}