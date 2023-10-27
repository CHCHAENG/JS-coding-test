function solution(begin, target, words) {
    let answer = 0;
    let queue = [];
    let visited = [];
    
    if (!words.includes(target)) return 0;
    
    queue.push([begin, answer]);
    
    while (queue) {
        let [value, cnt] = queue.shift();
        
        if (value === target) return cnt;
                
        words.map((v) => {
            if (visited.includes(v)) return;

            if (compareWord(v, value) === 1) {
                queue.push([v, ++cnt]);
                visited.push(v);
            }
        })
    }
    
    function compareWord(a, b) {
        let aa = [...a];
        let bb = [...b];
        let cnt = 0;
        
        for (let i = 0; i < a.length; i++) {
            if (aa[i] !== bb[i])
                cnt++;
        }
        
        return cnt;
    }
    
    return answer;
}