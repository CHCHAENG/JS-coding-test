function solution(s) {
    let numberList = {
        "zero" : 0,
        "one" : 1,
        "two" : 2,
        "three" : 3,
        "four" : 4,
        "five" : 5,
        "six" : 6,
        "seven" : 7,
        "eight" : 8,
        "nine" : 9
    };
    
    let checkStr = ["0", "1", "2", "3", "4", "5", "6", "7", "8" ,"9"];
    
    let answer = "";
    let temp = "";
    
    [...s].forEach((v, i) => {
        if (checkStr.includes(v)) {   
            answer += v;
            temp = "";
       
        } else {
            temp += v;
            if (temp in numberList) {
                answer += numberList[temp];
                temp = "";
            }
        }
    })
    
    return +answer;
}