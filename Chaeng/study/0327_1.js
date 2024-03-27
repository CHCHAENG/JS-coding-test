function solution(A) {
    let list = {};
    let X = 0;

    // 배열 A의 요소값의 등장 횟수 저장
    for (let i = 0; i < A.length; i++) {
        list[A[i]] = (list[A[i]] || 0) + 1;
    }

    // list 객체를 순회
    for (const key in list) {
        const val = list[key];

        // val 만큼 등장하고, 현재 X 값보다 큰 값일 때 val를 X 로 설정
        if (list[val] === val && val > X) {
            X = val;
        }
    }

    return X;
}
