var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'world'
});

connection.connect();

connection.query('SELECT * FROM city limit 1', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results);
});

connection.end();