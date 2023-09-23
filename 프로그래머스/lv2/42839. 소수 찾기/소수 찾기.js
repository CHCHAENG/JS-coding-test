function solution(numbers) {
    const permutation = (permu, rests, length) => {
        if (rests.length === length) {
            if (!list.has(+permu.join(""))){
                list.add(+permu.join(""));    
                if (isPrime(+permu.join(""))) answer++;
            }
        }
        
        rests.forEach((v, idx) => {
            const rest = [...rests.slice(0, idx), ...rests.slice(idx + 1)];
            permutation([...permu, v], rest, length);
        })
    }
    
    const isPrime = (number) => {
        if (number < 2) return false;
        if (number === 2) return true;
        
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) return false;
        }
    
        return true;
    }

    let answer = 0;
    let number = numbers.split("");
    let list = new Set();
    
    for (let i = 0; i < number.length; i++) {
        permutation([], number, i);
    }
    
    return answer;
}