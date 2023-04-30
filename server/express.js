const express = require('express')
const mysql = require('mysql')
const db = require('./db')
const cors    = require("cors"); 
const app = express()
const PORT = 3306;

app.use(express.urlencoded({extended: false}));
app.use(express.json());




app.use(cors({
    origin: "*",                // 출처 허용 옵션
    credentials: true,          // 응답 헤더에 Access-Control-Allow-Credentials 추가
    optionsSuccessStatus: 200,  // 응답 상태 200으로 설정
}))
app.get('/app', (req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    

    db.connection.query('SELECT * FROM Individual_Information', (err, results, fields)=>{
        res.send(results)
        
    })

})

app.post('/login2', (req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    const nickname = req.body.nickname;
    const email = req.body.email;
    const password = req.body.password;
    console.log(nickname, email, password)
    

    db.connection.query(`INSERT INTO Login_Form (Nickname, Email, Password) VALUES ('${nickname}', '${email}', '${password}')`)


})

app.listen(PORT, ()=>{
    console.log(`Backend Server is listening at PORT:${PORT}`)
})

