function solution(sizes) {
    sizes.map(([a, b], i) => {
        if (a < b) {
            sizes[i][0] = b;
            sizes[i][1] = a;
        }
    })
    
    let w = 0;
    let h = 0;
    
    for (let i = 0; i < sizes.length; i++) {
        w = Math.max(w, sizes[i][0]);
        h = Math.max(h, sizes[i][1]);
    }
    
    return w * h;
    
}