function solution(arr) {
    var stk = [];
    let i = 0;
    
    while (i < arr.length) {
        // case 1
        if (stk.length === 0) {
            stk.push(arr[i++]);
        }
        
        // case 2
        else if (stk.at(-1) === arr[i]) {
            stk.pop();
            i++;
        }
        
        // case 3
        else if (stk.at(-1) !== arr[i]){
            stk.push(arr[i++]);
        }
    }
    return stk.length === 0 ? [-1] : stk;
}