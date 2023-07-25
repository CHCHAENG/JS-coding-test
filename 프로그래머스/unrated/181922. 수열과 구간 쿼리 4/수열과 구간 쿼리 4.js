function solution(arr, queries) {
    queries.forEach(([a, b, c]) => {
        for (let i = a; i <= b; i++) {
            if (i % c === 0){
                arr[i]++;
            }
        }
    })
    return arr;
}