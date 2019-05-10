var ws = require("nodejs-websocket"),
    server = ws.createServer(callback).listen(9001);

function callback(conn, err) {
    if (err) console.dir(err)
    else console.log('connection success')


    conn.on('text', function (str) {
        propcText(conn, str)

    })
    conn.on('error', function (err) {
        console.dir(err)
    })
    conn.on('close', function (code, reason) {
        console.dir(code)
        console.dir(reason)
    })

}

global.add = function (conn, obj) {

    obj.response = obj.a + obj.b
    console.log(obj)
    send(conn, obj)
}


function send(conn, obj) {
    var res = JSON.stringify(obj)
    conn.sendText(res)
}

function propcText(conn, str) {
    var obj = JSON.parse(str)
    global[obj.command](conn, obj)

}