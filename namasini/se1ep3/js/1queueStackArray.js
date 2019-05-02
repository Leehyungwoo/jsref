//자바스크립트의 모든 자료형은 객체나 객체 상속이다.
//숫자,문자열은 제외이긴하나 알고보면 숫자,문자열도 객체이다.
console.group('배열은 객체다')
var arr1 = [];
arr1.a = "hi"
dir(arr1)
console.groupEnd()




//배열을 스택처럼 쓰기
//push pop
console.group('스택')
var arr2 = [];
arr2.push(1)
arr2.push(2)
arr2.push(3)
dir(arr2)
var pop = arr2.pop();
console.log('첫번째 pop', pop)
pop = arr2.pop();

console.log('두번째 pop', pop)
console.groupEnd()



//배열을 큐처럼 쓰기
//unshift shift
console.group('큐')
var arr3 = [];
arr3.push(1)
arr3.push(2)
arr3.push(3)

arr3.shift()

console.log(arr3)
console.groupEnd()



//2차원 배열
console.group('2차원 배열')
var arr4 = [
    ['id', 'name', 'age', 'gender'],
    [1, 'leewoo', 32, 'male']
]
//DBMS 테이블형식
console.log(arr4)
console.groupEnd()



//순회(traverse);
//자료구조 안의 자료들에는 모두 접근 가능해야한다.
//접근할 수 없는 자료가 메모리를 차지하고있으면 메모리 누수(memory leak)라 한다.
//순회의 정의
//1.중복없이 다닌다
//2.빠짐없이 방문한다
//배열의 순회는 가장 간단한순회

var arr5 = ['a', 'b', 'c', 'd', 'e']
//방법1
console.group('배열의 순회1')
for (var i = 0, lng = arr5.length; i < lng; i++) {
    console.log(arr5[i])
}
console.groupEnd()




//방법2
console.group('배열의 순회2')
var arr6 = ['a', 'b', 'c', 'd', 'e']

while (true) {
    var q = arr6.shift()
    if (q === undefined) {
        break;
    }
}

console.groupEnd()



console.group('전역 배열 순회 메서드만들기')
var arr7 = [0, 1, 2, 3, 4, 5];

arr7.trav(function (val, index) {
    console.log(val, index)
    if (val === 3) {
        return true
    }
})
console.groupEnd()



console.group('전역 Object 순회 메서드만들기')
var obj = {
    a: 1,
    b: 2,
    c: 3
}


obj.trav(function (key, value, index) {
    console.log(key, value, index)
    if (value == 2) return true
})
console.groupEnd()
