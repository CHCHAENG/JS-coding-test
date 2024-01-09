function solution(s) {
    let answer = 0;
    const startList = ["[", "{", "("];
    const stack = [];
    
    if (s.length % 2 === 1) return 0;
    
    for (let i = 0; i < s.length; i++) {
        let temp = s.slice(i) + s.slice(0, i);
        let flag = true;
                
        for (let j = 0; j < temp.length; j++) {
            if (startList.includes(temp[j])) {
                stack.push(temp[j]);
            } else {
                const left = stack.pop();
                
                if (left === "(" && temp[j] === ")") continue;
                if (left === "{" && temp[j] === "}") continue;
                if (left === "[" && temp[j] === "]") continue;
                
                flag = false;
                break;
            }
        }
        
        if (flag) answer++;
        
    }
    
    return answer;
}