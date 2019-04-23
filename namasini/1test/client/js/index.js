/*
//1차원배열
var arr1 = [1, 2, 3, 4, 5];
//2차원배열
var arr2 = [
    ['id', 'name', 'age', 'gender'],
    [1, 'lee', '32', 'male']
]

//DBMS 테이블형식
dir(arr1)
dir(arr2)
*/


//순회(traverse)
//자료구조 안의 자료들에는 모두 접근 가능해야 한다.
//접근할 수 없는 자료는 없는 자료와 마찬가지고,
//그 자료가 메모리를 차지하고있으면, 메모리 누수(memory leark라 한다)
//혹은 잃어버린 자료 missing datum라 한다.
//나중에 가비지 컬렉터의 수집대상이 된다

//순회의 정의
//첫째, 중복없이 다닌다.
//둘째, 빠짐없이 방문한다

//배열의 순회
//가장 간단한 순회

// //방법1.
// var arr = [0, 1, 2, 3, 4, 5];
// for (var i = 0; i < arr.length; i++) {
//     log(arr[i])
// }


// /* while문은 1프로세스 1쓰레드이므로 탈출을 명확히. */
// //방법2. 스택방식
// var arr2 = [0, 1, 2, 3, 4, 5];
// console.log('stack way')
// while (true) {
//     var stack = arr2.pop()
//     log(stack)
//     if (stack == undefined) break;

// }

// var arr3 = [0, 1, 2, 3, 4, 5];
// console.log('que way')
// //방법3. 큐방식
// while (true) {
//     var que = arr3.shift()
//     log(que)
//     if (que == undefined) break;
// }


// //방법4.
// var arr4 = [0, 1, 2, 3, 4, 5]
// arr4.forEach(function (el) {
//     console.log(el)
// })


// //방법5. 메서드 제조
// var arr5 = [0, 1, 2, 3, 4, 5]
// Array.prototype.trav = function (fun) {
//     for (var i = 0, len = this.length; i < len; i++) {
//         var val = this[i];
//         var ret = fun(val, i)
//         if (ret) break;
//     }
// }

// arr5.trav(function (value, index) {
//     console.log(value, index)
//     if (value === 3) {
//         return true
//     }
// })


//obejct 순회
// var obj = {
//     a: 1,
//     b: 2,
//     c: 3
// }
// Object.prototype.trav = function (fnc) {
//     var self = this;

//     Object.keys(this).trav(function (key, i) {
//         var val = self[key]
//         fnc(key, val, i)
//     })
// }

// obj.trav(function (key, val, i) {
//     log(key, val, i)
// })


// var obj = {
//     a: 1,  //숫자
//     b: 'abc', //문자
//     c: function (a, b) { //함수
//     }
// };

// obj.a = 2;


// function Myclass(a, b) {
//     this.a = 1;
//     this.b = 2;
//     this.c = function (a, b) {

//     }
// }

// var myc = new Myclass()

// log(obj instanceof Object)
// log(Myclass instanceof Object)
// log(myc instanceof Myclass)
// log(myc instanceof Object)
// log(obj instanceof Myclass)



var num = 12345;
var str = "test";

log(num instanceof Number)
log(str instanceof String)
log(num instanceof Object)
log(str instanceof Object)
log(typeof num)
log(typeof str)

str.trav(function (key, val) {
    log('key:' + key + ', val:' + val)
})

log(num.add(5))

//결론. 숫자,문자 리터럴은 객체는 아니지만, .을 사용하여 함수를 실행할때(메서드를 불러올때)는 객체로 감싸져서(래퍼객체) 객체화된다.