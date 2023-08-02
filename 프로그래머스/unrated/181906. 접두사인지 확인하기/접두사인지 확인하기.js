function solution(my_string, is_prefix) {
    const arr = Array.from(my_string).map((_,i) => my_string.slice(0, i));
    
    return arr.includes(is_prefix) ? 1 : 0;
}