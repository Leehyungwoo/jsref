const http = require('http');
const fs = require('fs');

const documentRoot = 'C:/jsref/namasini/se1';




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
    if (req.url === "/") {
        req.url = "/index.html"
    }
    // var addr = documentRoot + req.url;
    // var con = fs.readFileSync(addr)

    proxypass('http://localhost:9002', function (con) {
        res.write(con)
        res.end()
    })

}

function proxypass(url, fnc) {
    http.get(url, function (res) {
        var content = "";
        res.on('data', function (chunk) {
            content += chunk
        })
        res.on('end', function () {
            fnc(content)
        })
    }).on('error', function (e) {
        console.log("Got error: " + e.message);
    });

}