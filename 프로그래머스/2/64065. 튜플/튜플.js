function solution(s) {
    // Object type으로 주어진 튜플을 배열 형태로 변환
    let arr = s;
    arr = arr.replaceAll("{", "[");
    arr = arr.replaceAll("}", "]");
    arr = JSON.parse(arr);
    arr.sort((a, b) => a.length - b.length);
    
    let answer = [];
    for (let i = 0; i < arr.length; i++) {
        
        // 원소 하나씩 비교
        arr[i].forEach((v) => {
            // answer에 포함되지 않은 값만 추가
            if (!answer.includes(+v)) {
                answer.push(+v)
            }
        })
    }
    
    return answer;
}