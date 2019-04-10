
function Test(name) {
    var that = {}
    that.name = name
    that.test = function () { return that.name }
    return that
}
Test("hi")



function Abc(name) {
    if (!(this instanceof Abc)) {
        return new Abc()
    }
    this.taste = "yammy"
}

Abc.prototype.test = function () {
    return this.taste
}

console.log(Abc())