function solution(n, control) {
    let arr = [...control];

    arr.forEach((value, index, array) => {
        if (value === 'w') n += 1;
        else if (value === 's') n-= 1;
        else if (value === 'd') n += 10;
        else n -= 10;
    });
    
    return n;
}