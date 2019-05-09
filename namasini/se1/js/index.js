var addr = 'ws://localhost:9001'
var ws = new WebSocket(addr)



ws.onopen = function () {
    ws.send('hello world')
    console.log('socket opend!!')
}

ws.onerror = function (str) {
    console.log(str)
}
ws.onclose = function (str) {
    console.log(str)
}
ws.onmessage = function (str) {
    console.log(str.data)
}
console.log(ws)