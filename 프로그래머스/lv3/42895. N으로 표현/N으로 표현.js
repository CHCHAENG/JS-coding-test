function solution(N, number) {
    // N이 number와 같을 경우
    if (N === number)
        return 1;
    
    // index 1~8을 사용하기 위해 new Array(9)로 선언 후, Set의 형태로 만듦
    let answer = Array.from(new Array(9), () => new Set());
    
    for (let i = 1; i <= 8; i++) {
        // N을 i 만큼 반복한 수를 Set에 추가
        answer[i].add(Number(String(N).repeat(i)));
        for (let j = 1; j < i; j++){
            for (let first of answer[j]){
                for (let second of answer[i - j]){
                    answer[i].add(first + second);
                    answer[i].add(first - second);
                    answer[i].add(first * second);
                    answer[i].add(first / second);
                }
            }
        }
        
        // 현재 answer[i] Set에 number가 존재하는 경우
        if (answer[i].has(number))
                return i;
    }
    
    // 최솟값이 8보다 큰 경우
    return -1;
}