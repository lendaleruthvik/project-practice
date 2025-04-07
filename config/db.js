const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'bamr@2704',
    database: 'attendance_management_db'
})


module.exports = connection;


