// 1
let number = [1, 2, 3, 4];

function lastNumber (number, N) {
	let lastNum = number.join("");
	let i = 1;

	// 또는 이렇게도 가능
	// while (lastNum.length > 1)

	while (i < N) {
		let nextNum = lastNum[1];
		lastNum = lastNum.slice(2) + nextNum;
		i++;
	}
	

	return lastNum;
}

console.log(lastNumber(number, number.length));

//2 
let t = [4, 5, 7, 9, 1, 5, 22, 44, 33];

/* 
N^2
이중루프를 이용
앞에서 부터 배열 원소 하나씩 비교하며 중복된 원소가 존재한다면 배열의 값과 
현재 비교하고 있던 배열 원소의 index를 return
*/
function duplyInArr1 (t, m) {
	for (let i = 0; i < m; i++) {
		for (let j = i + 1; j < m; j++) {
			if (t[i] === t[j])
				return [t[i], i];
		}
	}

	return -1;
}

/* 
N
빈 배열 추가로 선언해서 활용
t[i]의 값을 temp의 index와 대응시켜서 사용
2차원 배열로 [0,0]으로 초기화
t 배열을 순회하면서 t[i]의 value값을 temp의 index위치에 저장 -> [t[i], i]] 값으로 저장한다
저장된 값이 있다면 중복된 원소를 의미하므로 temp[value]를 return
*/
function duplyInArr2 (t, m) {
	// 잘못한 코드, Fill을 해줘야 됐었음
	// let temp = new Array(100);
	let temp = new Array(100).fill(0);
	temp = temp.map((v, i) => temp[i] = [0, 0]);

	for (let i = 0; i < m; i++) {
		let value = t[i];

		if (temp[value][0] > 0)
			return temp[value];
		
		temp[value] = [value, i];
	}

	return -1;
}

console.log(duplyInArr1(t, t.length)); // [5, 1]
console.log(duplyInArr2(t, t.length)); // [5, 1]

// 3번

let mainStr = ["1", "a", "2", "b", "c", "d", "4", "O", "5", "S"];
let subStr = ["a", "b", "O", "v", "t"];


function checkSubStr (mainStr, mainStrN, subStr, subStrN) {
	mainStr = mainStr.join("")
	let str = "";
	
	for (let i = 0; i < mainStrN; i++) {
	    if ((mainStr[i].charCodeAt() >= 65 && mainStr[i].charCodeAt() <= 90) || (mainStr[i].charCodeAt() >= 97 && mainStr[i].charCodeAt() <= 122)) {
	        str += mainStr[i];
	    }
	}
	
	for (let i = 0; i < subStrN; i++) {
	    if (str.indexOf(subStr[i]) < 0) 
	        return false;
	}
	
	return true;
}

console.log(checkSubStr(mainStr, mainStr.length, subStr, subStr.length));
