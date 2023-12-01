// function solution(n, words) {
//     let answer = [0, 0]
    
//     for (let i = 0; i < words.length; i++) {
//         let now = words[i];
        
//         if (i > 0) {
//             let last = words[i - 1][words[i - 1].length - 1];
            
//             if (last !== now[0] || words.indexOf(now) < i) {
//                 answer[0] = (i % n) + 1;
//                 answer[1] = parseInt(((i + 1) / n )) + ((i + 1) % n);
                
//                 break;
//             }
//         }
        
//     }
    
//     return answer;
// }

function solution(n, words) {
  let answer = [0, 0];

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let p = i % n + 1;
    let turn = Math.ceil((i + 1)/n);

    if (i > 0) {
      // 이전 단어 마지막 글자
      let last = words[i - 1].split("").pop();

      // 중복이거나 틀린 경우
      if (i > words.indexOf(word) || words[i][0] !== last) {
        answer = [p, turn];
        break;
      }
    }
  }

  return answer;
}