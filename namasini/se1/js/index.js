//객체
var obj = {
    a: 1,
    b: "abc",
    c: function (a, b) { }
};
obj.a = 2;

function myclass() {
    this.a = 1;
    this.b = 2;
}

var arr = [];

var myc = new myclass();
console.log(obj instanceof Object)
console.log(myc instanceof myclass)

var num = 3;
var str = "Leewoo";
var k = str;
k = "hi"
console.log(str, k)
console.log(typeof num)
console.log(typeof str)

console.log(num instanceof Object)
console.log(str instanceof Object)
console.log(str instanceof String)
console.log(num instanceof Number)

str.trav(function (val, index) {
    console.log(val, index)
})


Number.prototype.add = function (num) {
    return this + num
}
log(num.add(5))

var c = [1];
var d = c

c.push(2)

console.log(c)
console.log(d)


var obj = {
    a: 1, b: 2, c: 3, d: 'abc'
}

var b = JSON.stringify(obj)
var a = JSON.parse(b)

console.log(obj === a)