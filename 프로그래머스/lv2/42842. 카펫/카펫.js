function solution(brown, yellow) {
    let num = (brown + 4) / 2;
    
    for (let i = num - 2; i >= Math.floor(num / 2); i--) {
        let a = i;
        let b = num - a;
        
        if ((a - 2) * (b - 2) === yellow)
            return [a, b];
    }
}