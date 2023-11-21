function solution(s) {
    // Object type으로 주어진 튜플을 배열 형태로 변환
    let arr = s;
    arr = arr.replaceAll("{", "");
    arr = arr.replaceAll("},", "}");
    arr = arr.replaceAll("}", "/");
    arr = arr.split("/");
    arr = arr.filter((v) => v !== "");
    
    // arr 원소의 배열 길이를 구한 후, 오름차순으로 정렬
    let arrLength = arr.map((v, i) => [v.length, i]);
    arrLength.sort((a, b) => a[0] - b[0]);
    
    let answer = [];
    for (let i = 0; i < arr.length; i++) {
        const [_, index] = arrLength[i];
        
        arr[index].split(",").forEach((v) => {
            if (!answer.includes(+v)) {
                answer.push(+v)
            }
        })
    }
    
    return answer;
}