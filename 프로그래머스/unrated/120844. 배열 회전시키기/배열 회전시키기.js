function solution(numbers, direction) {
    if (direction === "right") {
        let temp = numbers.pop();
        numbers = [temp, ...numbers.slice(0, numbers.length)];
    } else {
        let temp = numbers[0];
        numbers.shift();
        numbers.push(temp);
    }
    
    return numbers;
}