function solution(s, n) {
    let answer = '';
    for(let i = 0; i < s.length; i++) {
        let code; 
      // s[i]가 " "인 경우 answer에 " "문자열을 더해주었다.
        if(s[i] === " ") {
            answer += " ";
        }
      // code라는 변수에 해당 아스키코드값을 넣어준다.
        code = s.charCodeAt(i);
      // 아스키코드 번호가 이에 해당될 때 
        if(code >= 65 && code <= 90) {
            if(code + n > 90) {
              // String.fromCharCode를 통해 해당하는 아스키코드 값의 문자를 answer에 추가해 준다.
              // 이 때 대문자의 경우는 90을 넘으면 대문자가 아닌 다른 문자이므로
              // -26을 해주어서 Z 다음에 A부터 시작하도록 하였다.
                answer += String.fromCharCode(code + n - 26);
            } else {
                answer += String.fromCharCode(code+n);
            }
        }
      // 위와 마찬가지로 ! 이것은 소문자 아스키코드 값 해당하면
        if(code >= 97 && code <= 122) {
          // 아스키 코드의 값이 122가 넘어가면 소문자가 아닌 다른 문자이기 때문에
            if(code + n > 122) {
              // -26을 해주어서 z 다음에 a가 되도록 해준다.
                answer += String.fromCharCode(code + n - 26);
            } else {
                answer += String.fromCharCode(code+n);
            }
        }
    }
    return answer;
}