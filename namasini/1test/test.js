function log() {
    var arg = arguments,
        result = [];
    for (var i = 0, len = arg.length; i <= len; i++) {
        result.push(arg[i])
    }
    console.log(result.join(','))
}

function dir(val) {
    console.dir(val)
}


console.group('stack방법')
var arr2 = [0, 1, 2, 3, 4, 5];
for (var i = 0, len = arr2.length; i < len; i += 1) {
    var p = arr2.pop()
    log('stack out', p)
    log('결과', arr2)
}
console.groupEnd()

console.group('que방법')
var arr3 = [0, 1, 2, 3, 4, 5];
for (var i = 0, len = arr3.length; i < len; i += 1) {
    var p = arr3.shift()
    log('que out', p)
    log('결과', arr3)
}
console.groupEnd()

