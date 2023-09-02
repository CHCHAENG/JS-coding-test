function solution(myString, pat) {
    let index = myString.indexOf(pat);
    let finalIndex = 0;
    
    while (index != -1) {
        finalIndex = index;
        index = myString.indexOf(pat, index + 1);
    };
        
    return myString.slice(0, finalIndex + pat.length);
}