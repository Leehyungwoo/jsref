const mysql = require('mysql');
function getDate(sql, callback) {
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '1234',
        database: 'world'
    });
    connection.connect();

    connection.query(sql, function (error, results, fields) {
        if (error) throw error;
        callback(results);
        connection.end();
    });

}


module.exports = getDate