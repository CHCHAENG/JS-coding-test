function solution(arr, query) {
    
    query.map((value, index) => {
        if (index % 2 === 0){
            arr = arr.slice(0, value + 1);
        } else {
            arr = arr.slice(value);
        }
    })
    return arr;
}