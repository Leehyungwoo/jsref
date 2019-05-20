const http = require('http');
const fs = require('fs');
const qs = require('querystring');
const documentRoot = 'C:/jsref/namasini/se1';

var mysql = require('mysql');



http.createServer(function (req, res) {
    console.log('connection')
    if (req.method === "POST") {
        var body = "";
        req.on('data', function (obj) {
            body += obj
        })
        req.on('end', function () {
            try {
                req.POST_MSG = body
                procRequest(req, res)
            } catch (e) {
                console.log('에러')

            }
        })
    } else {

        try {
            procRequest(req, res)
        } catch (e) {
            console.log('에러')

        }
    }

}).listen(9000)


function procRequest(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html', "Access-Control-Allow-Origin": "*" })

    if (req.method === "POST") {
        var post = qs.parse(req.POST_MSG)
        if (post.__command === "insert") {
            var cols = ["name", "age", "gender", "job"];
            var arr = [];
            cols.forEach(key => {
                arr.push("'" + post[key] + "'");
            })


            var sql = "insert into friends values (2," + arr.join(',') + ")";

            getData(sql, result => {
                //var con = JSON.stringify(result)
                console.log('callback')
                console.dir(result)
                res.write("okay")
                res.end()
            })

        }
    }
    // res.write('okey');
    // res.end();


    // getData('select * from friends;', result => {
    //     var con = JSON.stringify(result)
    //     res.write(con)
    //     res.end()
    // })



    // if (req.url === "/") {
    //     req.url = "/index.html"
    // }
    // var addr = documentRoot + req.url;
    // var con = fs.readFileSync(addr)
    // proxypass('http://localhost:9002', function (con) {
    //     res.write(con)
    //     res.end()
    // })

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

function getData(sql, callback) {
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '1234',
        database: 'youtube'
    });

    connection.connect();
    connection.query(sql, function (error, results, fields) {
        if (error) {
            console.log('에러')
            throw error;

        }
        callback(results)

        connection.end();
    });

}