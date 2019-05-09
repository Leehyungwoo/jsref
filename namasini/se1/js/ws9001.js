var ws = require("nodejs-websocket")
var server = ws.createServer(callback).listen(9001);

function callback(conn, err) {
    if (err) {
        //connection failted!!
        console.dir(err)
    } else {
        //connection success!
        console.log('connection success')
    }

    conn.on('text', function (str) {
        console.log('client message')
        console.log(str)
        conn.sendText(str)
    })
    conn.on('error', function (err) {
        console.dir(err)
    })
    conn.on('close', function (code, reason) {
        console.dir(code)
        console.dir(reason)
    })

}
