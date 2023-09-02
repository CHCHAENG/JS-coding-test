function solution(strArr) {
    strArr.map((v, i) => {
        if (i % 2)
            strArr[i] = v.toUpperCase();
        else
            strArr[i] = v.toLowerCase();

    })
    
    return strArr;
}