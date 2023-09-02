function solution(my_string, alp) {
    return ([...my_string].map((v) => {
        if (alp === v)
            return v.toUpperCase();
        else return v;
    })).join('');
}