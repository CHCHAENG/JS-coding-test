function solution(arr) {
    arr.map((v, i) => {
        if (v >= 50 && v % 2 === 0)
            arr[i] = v / 2;
        else if (v < 50 && v % 2 === 1)
            arr[i] = v * 2;
    });
    
    return arr;
}