function solution(my_string, n) {
    const nn = my_string.length - n;
    return my_string.slice(nn);
}