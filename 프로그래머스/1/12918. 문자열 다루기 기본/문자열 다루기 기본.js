function solution(s) {
    const list = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
    if (s.length === 4 || s.length === 6) {
        for (let i = 0; i < s.length; i++) {
            if (!list.includes(s[i])) return false;
        }
        
        return true;
    } else return false;
}