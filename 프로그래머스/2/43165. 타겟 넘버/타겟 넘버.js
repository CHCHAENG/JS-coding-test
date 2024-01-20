function solution(numbers, target) {
    let answer = 0;
    dfs(0, 0);

    function dfs (length, val) {
        if (length === numbers.length) {
            if (val === target) 
                answer++;
            return;
        }
        
        dfs(length + 1, val + numbers[length]);
        dfs(length + 1, val - numbers[length]);
    }
    
    return answer;
}