const http = require('http');
const getDate = require('./model/connection')
const hostname = '127.0.0.1';
const port = 3000;


const server = http.createServer((req, res) => {

    getDate('select * from friends', function (results) {
        var results = JSON.stringify(results)
        res.writeHead(200, { 'Content-Type': 'application/json;charset=utf-8', "Access-Control-Allow-Origin": "*" });
        res.end(results)
    })

});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});


