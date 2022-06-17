// ! USING MYSQL MODULE, LATER TRY MYSQL2
const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: '127.0.0.1',
    user : 'root',
    password: 'admin123',
    database: 'animal'
});

mysqlConnection.connect((err)=>{
    if (err) {
        console.log({status: 'error', log: err});
        // console.log({status: 'error', log: err.stack});
        return;
    }
    console.log('Connected to db as ' + mysqlConnection.threadId);
});

module.exports = mysqlConnection;