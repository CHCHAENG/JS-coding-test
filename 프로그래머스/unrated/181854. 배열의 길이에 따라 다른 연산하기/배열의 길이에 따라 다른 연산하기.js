function solution(arr, n) {
    if (arr.length % 2) {
        arr.map((v, i) => {
            if (i % 2 === 0){
                arr[i] += n;
            }
        })
    } else {
        arr.map((v, i) => {
            if (i % 2 === 1)
                arr[i] += n;
        })
    }
    return arr;
}