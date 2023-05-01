const mysql = require('mysql')
const connection = mysql.createConnection({
    host: 'ls-785d919d274b864c3c745f39c5bdc10226e0dbe1.cnwkswnhvi85.ap-northeast-2.rds.amazonaws.com',
    user:'root',
    password:'worldchange1143!',
    port:3306,
    database:'dbmaster'
});

connection.connect((error)=>{
    if (error) console.log(error);
    else console.log('Connected!');
    
});








module.exports.connection  = connection;

