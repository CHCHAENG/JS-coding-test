function solution(a, b) {
    const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    let A = "", B = "";
    
    a < 10 ? A = "0" + a.toString() : A = a.toString();
    b < 10 ? B = "0" + b.toString() : B = b.toString();

    const dayOfWeek = week[new Date(`2016-${A}-${B}`).getDay()];
    return dayOfWeek;
}