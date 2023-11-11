function solution(numbers, direction) {
    if (direction === "right") {
        let temp = numbers.pop();
        numbers.unshift(temp);
    } else {
        let temp = numbers[0];
        numbers.shift();
        numbers.push(temp);
    }
    
    return numbers;
}