const mysql = require("mysql2/promise") //import

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'full_stack',
    port: 3306, //6306,
    namedPlaceholders: true,
});

module.exports = db;