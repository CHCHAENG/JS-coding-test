function solution(strings, n) {
    let list = [];
    
    strings.forEach((v, i) => {
        list.push([v[n], i, v]);
    });
    
    list.sort((a, b)=> {
        if (a[0] === b[0]) return a[2] < b[2] ? -1 : a[2] > b[2] ? 1 : 0;
        if (a[0] < b[0]) return -1;
        if (a[0] > b[0]) return 1;
    });
   
    return list.map((v) => v[2]);
}