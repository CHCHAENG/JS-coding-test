function solution(arr, queries) {
    
    queries.forEach((row) => {
        temp = arr[row[0]];
        arr[row[0]] = arr[row[1]];
        arr[row[1]] = temp;
    })
    return arr;
}