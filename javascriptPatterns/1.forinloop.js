var man = {
    hands: 2,
    legs: 2,
    head: 1
}

if (typeof Object.prototype.clone === "undefined") {
    Object.prototype.clone = function () {

    }
}


console.log('\nforin문')
for (var i in man) {
    console.log(i, ":", man[i])
}
console.log('\n')


console.log('\nprototype 걸러내기 패턴')
for (var i in man) {
    if (man.hasOwnProperty(i)) {
        console.log(i, ":", man[i])
    }
}
console.log('\n')


console.log('\nprototype 걸러내기 패턴2')
var i = 0,
    hasOwn = Object.prototype.hasOwnProperty;

for (i in man) {
    if (hasOwn.call(man, i)) {
        console.log(i, ':', man[i])
    }
}
console.log('\n')


// __는 비공개메서드