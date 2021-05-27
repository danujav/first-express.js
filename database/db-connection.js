var mysql = require('mysql')
var connection;

function dbConnection() {
    if(!connection) {
        connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '25412541',
            database: 'ThogaKade'
          })
    } 

    return connection
}

module.exports = dbConnection(); 