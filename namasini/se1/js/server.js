const http = require('http');
const fs = require('fs');

const documentRoot = 'C:/jsref/namasini/se1'
http.createServer(function (req, res) {
    console.log('connection')
    try {
        procRequest(req, res)
    } catch (e) {
        console.dir(e)
    }

}).listen(9000)


function procRequest(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    var addr = documentRoot + req.url;
    console.log(addr)
    var con = fs.readFileSync(addr)
    console.log(con)


    res.write(con)
    res.end()
}