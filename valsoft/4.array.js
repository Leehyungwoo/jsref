//메모참고

var a = [1, 2, 3]
a[100] = 4


console.log('포문')
var i;
for (i = 0, len = a.length; i < len; i++) {
    console.log(i, a[i])
}

//len을 미리 선언해주는게 좋다. 왜냐하면 dom트리를 반복문으로 돌릴경우, 항시 찾기때문에 속도가 늦다.

console.log('포인문')
var i, endi;
for (i in a) {
    console.log(i, a[i])
}

var a = ["dog", "cat", "hen"];
a[100] = "fox";
for (var i = 0, item; item = a[i]; i++) {
    console.log(i, item)
}
// 컴퓨터가 싫어하는것이 메모리할당,대입
// 크기비교는 cpu



/*나온지 얼마 안되는 of문 */
var a = ['a', 'b', 'c']

for (i of a) {
    console.log(i)
}