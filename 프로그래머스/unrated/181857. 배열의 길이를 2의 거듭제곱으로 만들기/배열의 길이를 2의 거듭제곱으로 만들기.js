function solution(arr) {
    let length = arr.length;
    
    // 현재 arr.length가 2의 거듭제곱인 경우
    while(length % 2 === 0){
        length /= 2;
    }
    // 그냥 arr를 return
    if (length === 1)
        return arr;
    
    length = arr.length;
    let x = 0;
    let y = 0;
    
    // 2의 거듭제곱이 되는 x의 값을 찾음
    while (length > x) {
        x = Math.pow(2, y++);
    }
    

    for (let i = 1; i <= x - length; i++)
        arr.push(0);
    
    return arr;
}