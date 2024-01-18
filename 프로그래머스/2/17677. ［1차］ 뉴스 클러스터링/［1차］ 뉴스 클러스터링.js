function solution(str1, str2) {
    let answer = 0;
    let A = 0, B = 0;
    
    const list1 = [];
    const list2 = [];
    
    // 알파벳에 속하는지 확인
    const checkChar = (str, val) => {
        if (str.charCodeAt(val) >= 97 && str.charCodeAt(val) <= 122)
            return true;
        
        return false;
    }
    
    // 리스트 만들기
    const makeList = (str, list) => {
        str = str.toLowerCase();
        
        for (let i = 0; i < str.length - 1; i++) {
            
            if (checkChar(str, i) && checkChar(str, i + 1)) 
                list.push(str[i] + str[i + 1]);
        }
    }
    
    // 교집합 & 합집합 구하기
    const countList = (first, second) => {
        let temp = [...second];
        
        for (let i = 0; i < first.length; i++) {
            const index = temp.indexOf(first[i]);
            
            if (index != -1) {
                A++;
                temp.splice(index, 1);
            }
        }
        
        B = temp.length + first.length;
    }
    
    // list 만들기
    makeList(str1, list1);
    makeList(str2, list2);
    
    // 모두 공집합일 경우
    if (list1.length === 0 && list2.length === 0) return 65536;
    
    // 교집합 & 합집합 구하기
    if (list1.length > list2.length) countList(list2, list1);
    else countList(list1, list2);
    
    return parseInt((A / B) * 65536);
}