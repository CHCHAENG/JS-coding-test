function solution(str_list) {
    var answer = [];
    const firstIndex = str_list.indexOf("l");
    const secondIndex = str_list.indexOf("r");
    
    if (firstIndex < secondIndex) {
        if (firstIndex === -1) {
            answer.push(...str_list.slice(secondIndex + 1));
        } else {
            answer.push(...str_list.slice(0, firstIndex));    
        }
    } else if (firstIndex > secondIndex) {
        if (secondIndex === -1){
            answer.push(...str_list.slice(0, firstIndex));
        }
        else {
            answer.push(...str_list.slice(secondIndex + 1));
        }
    }
    return answer;
}