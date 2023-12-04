// 2진수 값으로 변환하는 함수
function changeVal(n, number) {
    let arr = Array.from(Array(n).fill(0));
    
    for(let i = n - 1; i >= 0; i--) {
        if (number % 2 === 1) 
            arr[i] = 1;
     
        
        if (number > 0) 
            number = Math.floor(number / 2);
            
    }
    
    return arr;
}

function solution(n, arr1, arr2) {
    let answer = Array.from(Array(n), () => "");
    let arr = Array.from(Array(n), () => Array(n).fill(0));
    
    for(let i = 0; i < n; i++) {
        arr1[i] = changeVal(n, arr1[i]);
        arr2[i] = changeVal(n, arr2[i]);
        
        for (let j = 0; j < n; j++) {
            if (arr1[i][j] + arr2[i][j] > 0) {
                arr[i][j] = 1;
            }
        }
    }
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            arr[i][j] === 1 ? answer[i] += "#" : answer[i] += " ";
        }
    }
    
    return answer;
}