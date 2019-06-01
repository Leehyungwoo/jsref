const http = require('http');
const getDate = require('./model/connection')
const hostname = '127.0.0.1';
const port = 3000;
var qs = require('querystring');

const server = http.createServer((req, res) => {
    if (req.method === 'POST') {
        processPost(req, res, function (postData) {
            console.log(postData) //at client post data
            var { reciveDataMount, pageNum } = postData;


            getDate('SELECT COUNT(id) FROM city;', function (obj) { // 데이터 총량

                var dataLen = obj[0]["COUNT(id)"]
                var start = reciveDataMount * pageNum;

                getDate(`SELECT * FROM city WHERE id>=${start} limit ${reciveDataMount} `, function (arr) {
                    arr.push({ dataLen: dataLen });
                    var strData = JSON.stringify(arr);
                    res.writeHead(200, { 'Content-Type': 'application/json;charset=utf-8', "Access-Control-Allow-Origin": "*" });
                    res.end(strData);
                })
            })
        })
    }
});


function processPost(req, res, callback) {
    let body = "";
    req.on('data', (chunk) => {
        body += chunk;
    }).on('end', () => {
        var postData = qs.parse(body);
        callback(postData)
    });
}


server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});


