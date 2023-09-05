function solution(myString, pat) {
    myString = myString.replaceAll("A", "b");
    myString = myString.replaceAll("B", "a");
    
    const str = myString.toUpperCase();
    return myString.toUpperCase().includes(pat) ? 1 : 0 ;
}