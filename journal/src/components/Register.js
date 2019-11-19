import React,{useState} from "react"
import api from "../utils/api"
import axios from "axios"
import {HeaderLogin} from "../Styles/style-widgets"
function SignUp(){
const[User,SetUser]=useState({
    username:"",
    password:"",
    role:1
})

const handleChange= (e) =>{
    SetUser({
        ...User,
        [e.target.name]:e.target.value,
    })
}

const handleSubmit=(e)=>{
    e.preventDefault()
    api()
    .post("/api/auth/register/", User)
    .then(res=>{
        console.log(res)
    })
    .catch(err=>{
        console.log(err)
    })

}

    return(
         <form onSubmit={handleSubmit}>
            <HeaderLogin> Sign Up</HeaderLogin>
            <input type="text" name="username" value={User.username} onChange={handleChange}/>
            <input type="password" name="password" value={User.password} onChange={handleChange}/>
            <button type="submit">Login</button>
        </form>
    )
}

export default SignUp;