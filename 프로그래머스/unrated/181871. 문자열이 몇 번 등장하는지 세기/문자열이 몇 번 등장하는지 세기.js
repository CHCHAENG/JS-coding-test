function solution(myString, pat) {
    let cnt = 0;
    let index = myString.indexOf(pat);
    
    while(index != -1){
        cnt++;
        index = myString.indexOf(pat, index + 1);
    }
    
    return cnt;
}