function solution(arr) {
    let cnt = 0;
    let temp =[];
    
    while(true) {
        // 조건에 맞게 값을 변경
        arr.map((v, i) => {
            if (v >= 50 && v % 2 === 0){
                arr[i] = arr[i] / 2;
            } else if (v < 50 && v % 2 === 1)
                arr[i] = arr[i] * 2 + 1;
        })
                
        // 새롭게 변경된 값이랑 temp(이전 값)이랑 같은지 확인
        if (JSON.stringify(arr) === JSON.stringify(temp)) {
            break;
        }
        
        // 변경된 값을 arr에 저장
        temp = [...arr];
        // 몇번 반복했는지 체크 (x)에 해당
        cnt++;
    }
    return cnt === 1 ? 0 : cnt;
}