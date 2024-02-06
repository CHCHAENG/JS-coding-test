// 버블정렬 O(n^2)
// 첫번째 원소부터 인접한 원소와 비교하며 자리를 바꾸면서 맨 끝부터 정렬하는 방식
function bubbleSort() {
    let arr = [1, 7, 3, 5, 4, 7, 9];
    
    for (let x = 0; x < arr.length; x++) {
        for (let y = 1; y < arr.length - x; y++) {
            if (arr[y - 1] > arr[y]) {
                [arr[y - 1], arr[y]] = [arr[y], arr[y - 1]];
            }
        }
    }
    
    return arr;
}

// 선택정렬 O(n^2)
// 주어진 배열에서 가장 작은 최소값을 찾고 배열의 맨 앞의 값과 위치를 바꾸면서 정렬하는 방식
function selectionSort() {
    let arr = [1, 7, 3, 5, 4, 7, 9];
    
    let indexMin;
    
    for (let x = 0; x < arr.length - 1; x++) {
        indexMin = x;
        
        for (let y = x + 1; y < arr.length; y++) {
            if (arr[y] < arr[indexMin]){
                indexMin = y;
            }
        }
        
        [arr[x], arr[indexMin]] = [arr[indexMin], arr[x]];
    }
    
    return arr;
}


// 삽입정렬 O(n^2)
// i번째 원소를 정렬된 상태의 앞부분과 비교하여 적절한 위치에 삽입하는 방식
function insertionSort(arr) {
    let arr = [1, 7, 3, 5, 4, 7, 9];

    for (let x = 1; x < arr.length; x++) {
        let value = arr[x];
        let prev = x - 1;
        
        while (prev >= 0 && arr[prev] > value) {
            arr[prev + 1] = arr[prev];
            prev--;
        }
        
        arr[prev + 1] = value;
    }

  return arr;
}

// 퀵정렬 O(nlogn), 최악의 경우 O(n^2)
// 분할 정복(divide and conquer) 방법을 통한 정렬로, 하나의 pivot(축)을 정해서 이 pivot보다 작은 값은 왼쪽에 큰값은 오른쪽에 위치시키는 방법
function quickSort(arr, left, right) {
    let arr = [1, 7, 3, 5, 4, 7, 9];
    
    if (left >= right) {
        return;
    }

    /* 개선 방법
    const mid = (left + right) / 2;
    [arr[left], arr[mid]] = [arr[mid], arr[left]];
    */

    let pivot = arr[left];
    let x = left;
    let y = right;

    while (x < y) {
        while (pivot < arr[y]) {
            y--;
        }
        
        while (x < y && pivot >= arr[x]) {
            x++;
        }
        
        [arr[x], arr[y]] = [arr[y], arr[x]];
    }
  
    arr[left] = arr[x];
    arr[x] = pivot;

    quickSort(arr, left, x - 1);
    quickSort(arr, x + 1, right);

  return arr;
}


// 병합 정렬 O(nlogn)
// 배열을 작은 단위로 쪼개어 정렬한 결과를 합치면서 전체를 정렬하는 분할 정복(divide and conquer) 방식
function merge(leftArr, rightArr) {
    let arr = [1, 7, 3, 5, 4, 7, 9];

    const sortedArr = [];
    let l = 0;
    let r = 0;

    while (l < leftArr.length && r < rightArr.length) {
        if (leftArr[l] <= rightArr[r]) {
            sortedArr.push(leftArr[l]);
            l++;
        } else {
            sortedArr.push(rightArr[r]);
            r++;
        }
    }
  
    while (l < leftArr.length) {
        sortedArr.push(leftArr[l]);
        l++;
    }

    while (r < rightArr.length) {
        sortedArr.push(rightArr[r]);
        r++;
    }

    return sortedArr;
}

function mergeSort(arr) {
    if (arr.length === 1) {
        return arr;
    }

    const mid = Math.ceil(arr.length / 2);
    
    const leftArr = arr.slice(0, mid);
    const rightArr = arr.slice(mid);

    return merge(mergeSort(leftArr), mergeSort(rightArr));
}
