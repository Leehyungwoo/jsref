var http = require('http');
var documentRoot = "C:/nginx-1.15.12/nginx-1.15.12/html/jsref/namasini/4test/server/client";
var path = require('path')
var fs = require('fs')
http.createServer(function (req, res) {
    // console.log(req.url)
    if (req.url == '/') {
        try {
            procRequest(req, res)
        } catch (e) {
            dir(e)
        }
    }
}).listen(9000, function () {
    console.log('연결')
})

function procRequest(req, res) {
    var addr = documentRoot + req.url
    var con = fs.readFileSync(addr);
    var st = con.toString('utf-8')
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(st)
    res.end()
}




