let hashMap = new Map();

hashMap.set('나이', 23);
hashMap.set('직업', '학생');
hashMap.set('번호', '010-0000-0000');

console.log(hashMap);
console.log(hashMap.size);

if (hashMap.has('나이')) {
    console.log(hashMap.get('나이'));
}

hashMap.delete('번호');

if (!hashMap.has('번호')) {
    console.log('번호가 삭제되었습니다', hashMap.size);
}
