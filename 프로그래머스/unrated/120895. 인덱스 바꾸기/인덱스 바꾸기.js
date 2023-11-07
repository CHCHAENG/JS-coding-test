function solution(my_string, num1, num2) {
    const a = my_string[num1];
    const b = my_string[num2];
    
    let str = my_string.split("");
    console.log(a, b)
    
    str.splice(num1, 1, b);
    str.splice(num2, 1, a);
    
    return str.join("");
}