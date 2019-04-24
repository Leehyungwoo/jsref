function dir(val) { //wrapper 함수
    console.dir(val)
}

function log() {  //wrapper 함수
    var args = arguments;
    var res = [];
    for (var i = 0; i < args.length; i++) {
        res.push(args[i])
    }
    console.log(res.join(','))
}


var arr5 = [0, 1, 2, 3, 4, 5] //배열순회
Array.prototype.trav = function (fnc) {
    for (var i = 0, len = this.length; i < len; i++) {
        var val = this[i];
        var ret = fnc(val, i)
        if (ret) break;
    }
}

Object.prototype.trav = function (fnc) {
    var self = this;
    Object.keys(this).trav(function (key, i) {
        var val = self[key];
        return fnc(key, val, i)
    })
}

String.prototype.trav = function (fnc) {
    for (var i = 0, len = this.length; i < len; i++) {
        fnc(this[i], i)
    }
}

Number.prototype.add = function (num) {
    return this + num
}