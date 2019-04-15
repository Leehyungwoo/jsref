console.log(0.1 + 0.2 === 0.3)
console.log(0.099999999999999999 === 0.1)
console.log(0.0999999999999999988 === 0.1)
console.log(Math.abs((0.1 + 0.2) - 0.3) < Number.EPSILON)
//참고  http://es6-features.org/#NumberComparison
console.log(3 / 10)
console.log(3 / 10 === 0.1 + 0.2)
console.log(1.5 / 5 === 0.1 + 0.2)
console.log(1.5 / 5 === 0.3)
//이벤트를 넣고 핸들링할때는 소수점핸들링이 아닌 정수로한다
//만약 은행같은경우는 이율로하기때문에 엄청난 문제가될수있다.
//https://developer.mozilla.org/ko/docs/A_re-introduction_to_JavaScript#.EC.88.98_.28Numbers.29 에서 이중정밀도라고 하는 이유
//IEEE 745 : 스펙
var d = 4200000000;
console.log(d = d * 4200000000) // 2의 64비트가 넘어갔는데 되는 이유는?


console.log(Math.pow(2, 51))
console.log(Math.pow(2, 52))
console.log(Math.pow(2, 53))
console.log(Math.pow(2, 54))
console.log(Math.pow(2, 55)) //여기서부터 맨뒤의 숫자가 0으로 된다.  2를 곱하는값인데 0이나오는이유..
console.log(Math.pow(2, 56))
console.log(Math.pow(2, 57))



console.log('계산이 이상한부분') //2의 50승부터는 정확도가 떨어진다.


console.group('50승')
console.log(Math.pow(2, 50) + 1)
console.log(Math.pow(2, 50) + 2)
console.log(Math.pow(2, 50) + 3)
console.log(Math.pow(2, 50) + 4)
console.log(Math.pow(2, 50) + 5)
console.log(Math.pow(2, 50) + 6)
console.log(Math.pow(2, 50) + 7)
console.log(Math.pow(2, 50) + 8)
console.log(Math.pow(2, 50) + 9)
console.groupEnd()

console.group('51승')
console.log(Math.pow(2, 51) + 1)
console.log(Math.pow(2, 51) + 2)
console.log(Math.pow(2, 51) + 3)
console.log(Math.pow(2, 51) + 4)
console.log(Math.pow(2, 51) + 5)
console.log(Math.pow(2, 51) + 6)
console.log(Math.pow(2, 51) + 7)
console.log(Math.pow(2, 51) + 8)
console.log(Math.pow(2, 51) + 9)
console.groupEnd()

console.group('52승')
console.log(Math.pow(2, 52) + 1)
console.log(Math.pow(2, 52) + 2)
console.log(Math.pow(2, 52) + 3)
console.log(Math.pow(2, 52) + 4)
console.log(Math.pow(2, 52) + 5)
console.log(Math.pow(2, 52) + 6)
console.log(Math.pow(2, 52) + 7)
console.log(Math.pow(2, 52) + 8)
console.log(Math.pow(2, 52) + 9)
console.groupEnd()


console.group('53승')
console.log(Math.pow(2, 53) + 1)
console.log(Math.pow(2, 53) + 2)
console.log(Math.pow(2, 53) + 3)
console.log(Math.pow(2, 53) + 4)
console.log(Math.pow(2, 53) + 5)
console.log(Math.pow(2, 53) + 6)
console.log(Math.pow(2, 53) + 7)
console.log(Math.pow(2, 53) + 8)
console.log(Math.pow(2, 53) + 9)
console.groupEnd()

console.group('54승')
console.log(Math.pow(2, 54) + 1)
console.log(Math.pow(2, 54) + 2)
console.log(Math.pow(2, 54) + 3)
console.log(Math.pow(2, 54) + 4)
console.log(Math.pow(2, 54) + 5)
console.log(Math.pow(2, 54) + 6)
console.log(Math.pow(2, 54) + 7)
console.log(Math.pow(2, 54) + 8)
console.log(Math.pow(2, 54) + 9)
console.groupEnd()




