const mysql = require('mysql')
const connection = mysql.createConnection({
    host: '127.0.0.1',
    user:'root',
    password:'worldchange1143!',
    port:3306,
    database:'DB'
});

connection.connect((error)=>{
    if (error) console.log(error);
    else console.log('Connected!');
    
});








module.exports.connection  = connection;

