function solution(n, m) {
    // 최대공약수
    const gcd = (a, b) => {
        return b ? gcd(b, a % b) : a;
    }
    
    // 최소공배수
    const lcm = (a, b) => {
        return a * b / gcd(a, b);
    }
    
    const maxNum = Math.max(n, m);
    const minNum = Math.min(n, m);
    
    return [gcd(maxNum, minNum), lcm(maxNum, minNum)];
}