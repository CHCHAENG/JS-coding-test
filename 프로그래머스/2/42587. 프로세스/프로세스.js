function solution(priorities, location) {
    let answer = [];
    let arr = Array.from({length : priorities.length}, (_, i) => i);
    
    while (priorities.length) {
        const max = Math.max(...priorities);
        const val = priorities.shift();
        const index = arr.shift();
        
        if (val >= max) {
            answer.push(index);
        } else {
            priorities.push(val);
            arr.push(index);
        }
    }
    return answer.indexOf(location) + 1;
}