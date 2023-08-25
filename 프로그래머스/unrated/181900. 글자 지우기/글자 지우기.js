function solution(my_string, indices) {
    const arr = [...my_string];
    
    indices.map((value, index) => {
        arr[value] = "";
    })
    
    return arr.join('');
}