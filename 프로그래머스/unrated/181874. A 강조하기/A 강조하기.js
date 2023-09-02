function solution(myString) {
    const arr = [...myString].map((v, i) => {
        if (v === 'a'){
            return v.toUpperCase();
        }
        else if (v !== 'A')
            return v.toLowerCase();
        else return v;
    });
    
    return arr.join('');
}