const mysql = require('mysql2');

const db = mysql.createConnection({
    host:'localhost',
    port: 3306,
    user:'root',
    password:'581000',
    database:'student_db',
});

db.connect(err => {
    if (err){
        throw err;
    }else{
    console.log('Connected to MySQL Database.');
    }
});

module.exports = db;