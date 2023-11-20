function solution(priorities, location) {

    // [a, b, c, d]
    // a / 뒤에중에 높은게 잇으면 다시 unshift
    // b / ..
    // c / [1- 2]
    // d / [2- 3]
    // a / [3 - 0]
    // b / [4-1]
    
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
