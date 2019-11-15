import React,{useState} from "react"
import api from "../utils/api"
import axios from "axios"

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
            <h3> Sign Up</h3>
            <input type="text" name="username" value={User.username} onChange={handleChange}/>
            <input type="password" name="password" value={User.password} onChange={handleChange}/>
            <button type="submit">Login</button>
        </form>
    )
}

export default SignUp;