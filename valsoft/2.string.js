
console.group('패턴1')
var f = (p) => {
    var a;
    if (p === undefined) {
        a = 0
    } else {
        a = p;
    }
}

var f = (p) => {
    var a = p || 0
}

console.groupEnd()

console.group('패턴2')

var f = (cf) => {
    cf && cf()
}
console.groupEnd()



//확인해보기
var a = 1;

(function () {
    a = 3; //hoisting
    console.log(a)
    var a = 2;
})()

console.log(a)

/*

var a = 1 //초기화
//초기화란: 변수를 선언할떄 값을 대입하는것
var b;
b = 2;  //대입


const a = 1 //초기화

const b;
b = 2;  //대입

*/