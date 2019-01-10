// function* numbers() {
//     console.log('시작')
//     yield 1;
//     yield 2;
//     yield 3;
// }

// numbers() //제너레이터객체를 생성해서 리턴






// function* numbers() {
//     console.log('시작')
//     yield 1;
//     yield 2;
//     yield 3;
// }

// let n = numbers();

// console.log(n.next())    //호출할때 next()
// console.log(n.next())
// console.log(n.next())


function* numbers(x) {
    x = yield x;
    x = yield x;
    yield x;
}

let n = numbers(1);

console.log(n.next())
console.log(n.next(2))
console.log(n.next(3))
console.log(n.next())