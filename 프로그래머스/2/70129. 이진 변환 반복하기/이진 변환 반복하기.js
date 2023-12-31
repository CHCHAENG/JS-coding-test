function solution(s) {
    let answer = [0, 0];
    
    // 1이 될때 까지 반복
    while (s !== "1") {
        // 원래 Length
        const originLength = s.length;
        
        // 현재 s에서 0을 다 제거함
        s = s.replaceAll("0", "");
        
        // 0을 제거한 Length
        const nextLength = s.length;
        
        // 사라진 0 개수를 count
        answer[1] += originLength - nextLength;
        
        // s의 길이를 이진수로 변환
        s = s.length.toString('2');
        
        // 반복한 횟수 count
        answer[0]++;
    }
    
    return answer;
}