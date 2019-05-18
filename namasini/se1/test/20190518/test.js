var http = require('http');
var mysql = require('mysql');

var app = http.createServer(function (req, res) {
    var _url = req.url;


    if (_url == '/favicon.ico') {
        return res.writeHead(404);
    }



    getUrl('/', function () {
        res.end('인덱스');
    })


    getUrl('/hi', function () {
        res.end('하이');
    })


    getUrl('/bye', function () {
        res.end('바이');
    })


    getUrl('/reciveData', function () {
        getData('select * from city', function (result) {
            var data = JSON.stringify(result)
            console.log(data)
            res.end(data);
        })
    })


    function getUrl(Path, callback) {
        if (_url === Path) {
            res.setHeader("Content-Type", "application/json; charset=utf-8");
            res.setHeader("Access-Control-Allow-Origin", "*");
            res.writeHead(200);
            callback()
        }
    }






    function getData(sql, callback) {
        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '1234',
            database: 'world'
        });

        connection.connect();

        connection.query(sql, function (error, results, fields) {
            if (error) throw error;
            callback(results)
            connection.end();

        });

    }



});






app.listen(8000);