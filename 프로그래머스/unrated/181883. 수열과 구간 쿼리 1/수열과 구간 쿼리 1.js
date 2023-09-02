function solution(arr, queries) {
    queries.map(([s,e])=> {
        for (let i = s; i <= e; i++)
            arr[i]++;
    })
    return arr;
}