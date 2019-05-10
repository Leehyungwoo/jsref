
var addr = "ws://localhost:9001"
var ws = new WS(addr, main)
var param = {
    command: 'add',
    a: 1,
    b: 2
}


function main() {
    //직렬화

    // var str = JSON.stringify(param)

    ws.call(param, function (res) {
        console.log(res)
    })


}

