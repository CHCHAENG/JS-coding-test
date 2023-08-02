function solution(my_string, is_suffix) {
    const arr = Array.from(my_string).map((_,i) => 
        my_string.slice(i)).sort();
    
    return arr.includes(is_suffix) ? 1 : 0;
}