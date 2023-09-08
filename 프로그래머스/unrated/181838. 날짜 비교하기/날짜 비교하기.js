function solution(date1, date2) {
    if (date1[0] > date2[0]) return 0;
    else if (date1[0] === date2[0]){
        if (date1[1] === date2[1])
            return date1[2] < date2[2] ? 1 : 0;
        else 
            return date1[1] < date2[1] ? 1 : 0;
    }
    else return 1;
}