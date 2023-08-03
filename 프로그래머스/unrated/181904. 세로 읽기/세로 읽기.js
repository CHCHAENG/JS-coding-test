function solution(my_string, m, c) {
    var answer = '';
    const m_arr = [];
    
    m_arr.push(my_string.slice(0, m));
    
    for (let i = m; i < my_string.length; i += m) {
        m_arr.push(my_string.slice(i, i + m));
    }
    
    m_arr.map((value) => {
        answer += value[c - 1];
    })
    return answer;
}