function solution(numbers) {
    let num = numbers.split("");
    let answer = 0;
    let list = new Set();
    
    dfs(num, '');
    
    function dfs (arr, str) {
        if (str.length > 0) {
            if (!list.has(+str)) {
                list.add(+str);
                
                if (isPrime(+str)) answer++;
            }
        }
        
        if (arr.length > 0) {
            for (let i = 0; i < arr.length; i++) {
                let temp = arr.slice(0);
                temp.splice(i, 1);
                                
                dfs(temp, str + arr[i]);
            }
        }
    }
    
    function isPrime(number) {
        if (number < 2) return false;
        if (number === 2) return true;
        
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) return false;
        }
    
        return true;
    }
    
    return answer;
}