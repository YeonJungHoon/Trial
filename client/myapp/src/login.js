import React from "react";
import jwt from 'jsonwebtoken'
import {useCookies} from 'react-cookie'


function jwt(formData){
    const token = jwt.sign(
        {
            nickname: this.nickname,
            email: this.email,
            password: this.password,

        },
        'worldchange1143!',
        {
            expiresIn: '7d'
        }



    )
    return token;
}

function logout(){
    return null;
};

const [cookies, setCookie, removeCookie] =useCookies['access_token']

/*serverside 에서 login check*/
function login(formData){
    const token = jwt(formData)
    axios.post('http://localhost:3306/logincheck',formData).then((res)=>{
        setCookie('access_token', token)
        
    } ).catch((error)=>{
        alert('로그인 인증 실패')
        console.log(error)
        logout();
    })
        


     
}