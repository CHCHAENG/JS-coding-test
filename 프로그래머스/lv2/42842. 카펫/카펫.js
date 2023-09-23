function solution(brown, yellow) {
    let answer = [];
    
    let num = (brown + 4) / 2;
    
    for (let i = Math.floor(num / 2); i < num - 2; i++) {
        let a = i;
        let b = num - a;
        
        if (a < b)
            continue;
        

        if ((b - 2) * (a - 2) === yellow)
            return [a, b];
    }
}