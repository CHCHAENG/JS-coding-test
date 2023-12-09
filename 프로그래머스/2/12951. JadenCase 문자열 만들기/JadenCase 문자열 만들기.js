function solution(s) {
    s = s.split(" ");

    for (let i = 0; i < s.length; i++) {
        s[i] = s[i].slice(0, 1).toUpperCase() + s[i].slice(1).toLowerCase();
    }

    return s.join(" ");
}