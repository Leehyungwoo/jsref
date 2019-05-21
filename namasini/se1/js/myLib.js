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
// HTMLElement.prototype.trav=function(){

// }

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



//통신분야
function getXHR(callback) {
    var xhr = new XMLHttpRequest()
    var rs = {
        0: 'unsend',
        1: 'open',
        2: 'header_received',
        3: 'loading',
        4: 'done'
    }
    xhr.onreadystatechange = function () {
        // console.log('ready status', rs[this.readyState])
        // console.log('status', this.status)
        // //404 : 잘못된 페이지 요청
        // console.log('server response', this.response)
        if (this.readyState === 4) {
            if (this.status === 200) {
                callback(this.response)
            } else {
                alert('post error!!')
            }
        } else {
            // console.log('readyState', this.readyState, rs[this.readyState])
        }
    }
    return xhr;
}

function get(addr, callback) {
    var xhr = getXHR(callback);
    xhr.open('get', addr, true);
    xhr.send()
}

function post(addr, obj, callback) {
    var json = [];
    obj.trav((key, val) => {
        json.push(key + '=' + val)
    })
    json = json.join('&')
    var xhr = getXHR(callback)
    xhr.open('post', addr, true);
    xhr.send(json)
}


//웹소켓


function WS(addr, fnc) {
    // var addr = 'ws://localhost:9001'
    var ws = new WebSocket(addr)
    var self = this;
    var id = 0;
    var callbacks = {};
    this.onopen = function () {

    }
    this.onerror = function () {

    }
    this.onclose = function () {

    }
    this.onmessage = function () {

    }
    this.send = function (str, fnc) {
        ws.send(str)
        callbacks[id++] = fnc
    }
    this.call = function (obj, fnc) {
        obj.__id = id;
        callbacks[id++] = fnc;
        console.dir(obj)
        var str = JSON.stringify(obj)
        ws.send(str)
    }

    ws.onopen = function () {
        console.log('socket opend!!')
        self.onopen()
        fnc()
        // ws.send('hello world')
    }

    ws.onerror = function (str) {
        console.log(str)
    }
    ws.onclose = function (str) {
        console.log(str)
    }
    ws.onmessage = function (msg) {
        //callback(str.data)
        var str = msg.data;
        var obj = JSON.parse(str)
        callbacks[obj.__id](obj)
    }

}






