function solution(priorities, location) {
    let arr = Array.from(Array(priorities.length), (_, index) => index + 1);
    let answer = [];

    while (arr.length > 0) {
        let val = arr.shift();
        let flag = 0;
        
        for (let i = 1; i < arr.length; i++) {
            if (priorities[0] < priorities[i]) {
                flag = 1;
                break;
            }
        }
        
        if (flag === 1) {
            arr.push(val);
            priorities.push(priorities.shift());
        } else  {
            answer.push(val - 1);
            priorities.shift();
        }
    }
    
    return answer.indexOf(location) + 1;
}
