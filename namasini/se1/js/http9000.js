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

        getData('select * from city;', data => {
            var str = JSON.stringify(data);
            send(res, str)
        })
        if (post.__command === "insert") {
            opInsert(res, post)
        } else if (post.__command === "select") {
            opSelect(res, post)
        } else if (post.__command === "update") {
            opUpdate(res, post)
        } else if (post.__command === "delete") {
            opDelete(res, post)
        }
    }



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
function opDelete(res, post) {

    var sql = "update friends set delYn='Y' where id = " + post.id + ";";

    getData(sql, result => {
        send(res, 'okay')
    })
}

function opUpdate(res, post) {

    var sql = "update friends set name='" + post.name + "', age = " + post.age + ", gender = '" + post.gender + "', job='" + post.job + "'  where id = " + post.id + ";";

    getData(sql, result => {
        send(res, 'okay')
    })
}


function opSelect(res, post) {
    var sql = "select * from friends where delYn='N' order by id desc;";

    getData(sql, result => {
        // result.map(val => {delete val.delYn})
        var str = JSON.stringify(result)
        send(res, str)
    })
}
function opInsert(res, post) {
    var cols = ["name", "age", "gender", "job"]; //delYn
    var arr = [];
    cols.forEach(key => {
        arr.push("'" + post[key] + "'");
    })
    arr.push("'N'")
    getData("select max(id) as id from friends;", result => {

        var max = result[0].id;
        console.log(max)
        var sql = "insert into friends values (" + (max + 1) + "," + arr.join(',') + ")";
        getData(sql, result => {
            send(res, 'okay')
        })
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
function send(res, str) {
    res.write(str)
    res.end()
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
        if (error) {
            console.log('에러')
            throw error;

        }
        callback(results)
        connection.end();
    });
}