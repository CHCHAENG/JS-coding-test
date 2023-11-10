function solution(genres, plays) {
    let answer = [];
    
    // 장르별 재생 횟수
    let list = {};
    let cnt = {};
    let cntList = [];
    
    genres.forEach((v, i) => {
        if (!list[v]) {
            list[v] = [[i, plays[i]]];
            cnt[v] = plays[i];
        }
        else {
            list[v] = [...list[v], [i, plays[i]]];
            cnt[v] += plays[i];
        }
    });
        
    for (let key in cnt) {
        cntList.push([key, cnt[key]]);
    }
    cntList.sort((a, b) => b[1] - a[1]);
    
    // console.log(cntList)
    for (let i = 0; i < cntList.length; i++) {
        let temp = list[cntList[i][0]];
        temp.sort((a, b) => b[1] - a[1]);
        
        if (list[cntList[i][0]].length > 2) {
            for (let j = 0; j < 2; j++) {
                answer.push(temp[j][0]);
            }
        } else {
            for (let j = 0; j < temp.length; j++) {
                answer.push(temp[j][0]);
            }
        }
    }
    
    return answer;
}