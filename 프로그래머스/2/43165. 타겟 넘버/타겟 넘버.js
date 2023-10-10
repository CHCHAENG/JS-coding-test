function solution(numbers, target) {
    let answer = 0;
    dfs(0, 0);

    function dfs(length, sum) {
        if (length === numbers.length) {
            if (target === sum)
                answer++;
            return;
        }
        
        dfs(length + 1, sum + numbers[length]);
        dfs(length + 1, sum - numbers[length]);
    }
        
    return answer;
}