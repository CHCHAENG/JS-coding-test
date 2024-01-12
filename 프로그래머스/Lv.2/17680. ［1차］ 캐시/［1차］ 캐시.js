function solution(cacheSize, cities) {
    let answer = 0;
    let stack = [];
    
    if (cacheSize === 0) return 5 * cities.length;
    
    cities.forEach((v) => {
        // 대소문자 구분하지 않음
        const val = v.toLowerCase();
        
        // stack에 존재하는 도시이름일 경우
        if (stack.includes(val)) {
            answer++;
            
            // 도시이름이 위치하는 인덱스 확인
            const index = stack.indexOf(val);
            
            // 현재 도시를 가장 최신위치로 이동
            stack.splice(index, 1);
            stack.push(val);
        } 
        // stack에 존재하지 않는 도시이름일 경우
        else {
            answer += 5;
            
            // stack이 꽉 차있는 경우에는 제일 앞에있는 도시를 지움
            if (stack.length >= cacheSize) stack.shift();
            // 현재 도시 추가
            stack.push(val);
        }
    })
    return answer;
}