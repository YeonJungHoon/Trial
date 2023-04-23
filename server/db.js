const mysql = require('mysql')
const connection = mysql.createConnection({
    host: 'ls-ad26f0ea7d87cdf20d4c526e63ddedb39864b7a7.cnwkswnhvi85.ap-northeast-2.rds.amazonaws.com',
    user:'dbmasteruser',
    password:'worldchange1143!',
    port:3306,
    database:'dbmaster'
});

connection.connect((error)=>{
    if (error) console.log(error);
    else console.log('Connected!');
    
});








module.exports.connection  = connection;

