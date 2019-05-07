HTMLElement.prototype.traverse = function (fnc) {
    fnc(this)
    if (this.children == 0) return;
    for (var i = 0, lng = this.children.length; i < lng; i++) {
        var child = this.children[i];
        child.traverse(fnc);
    }
}
HTMLElement.prototype.css = function (str) {
    this.style.cssText += str;
}
HTMLElement.prototype.html = function (str, opt) {
    if (arguments.length === 0) {
        return this.innerHTML;
    }
    if (opt) this.innerHTML += str;
    else this.innerHTML = str;
}
Array.prototype.trav = function (fnc) {
    for (var i = 0, lng = this.length; i < lng; i++) {
        var val = this[i]
        var ret = fnc(val, i)
        if (ret) break;
    }
}

Object.prototype.trav = function (fnc) {
    var self = this;
    Object.keys(this).trav(function (key, i) {
        var val = self[key]
        return fnc(key, val, i)
    })
}

String.prototype.trav = function (fnc) {
    for (var i = 0, lng = this.length; i < lng; i++) {
        fnc(this[i], i)
    }
}


function dir(req) {
    console.dir(req)
}

function log() {  //wrapper 함수
    var args = arguments;
    var res = [];
    for (var i = 0; i < args.length; i++) {
        res.push(args[i])
    }
    console.log(res.join(','))
}