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


HTMLElement.prototype.traverse = function (fnc) {
    fnc(this)
    if (this.children === 0) return;
    for (var i = 0, len = this.children.length; i < len; i++) {
        var child = this.children[i];
        child.traverse(fnc)
    }
}

HTMLElement.prototype.css = function (str) {
    this.style.cssText += str;
}


HTMLElement.prototype.html = function (str, opt) {
    if (arguments.length === 0) { return this.innserHTML };
    if (opt) { this.innerHTML += str }
    else { this.innerHTML = str }
}


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

function getXHR(callback) {
    var xhr = new XMLHttpRequest();
    res = {
        0: 'unsend',
        1: 'opend',
        2: 'header_recived',
        3: 'loading',
        4: 'done'
    }
    xhr.onreadystatechange = function () {
        if (this.readyState === 4) {
            if (this.status === 200) {
                callback(this.responseText)
            } else {
                alert('post error')
            }
        } else {
        }

    }
    return xhr;
}


function post(addr, json, callback) {
    var xhr = getXHR(callback)
    xhr.open('POST', addr, true)
    xhr.send(json)
}


function get(addr, callback) {
    var xhr = getXHR(callback)
    xhr.open('get', addr, true)
    xhr.send('')
}