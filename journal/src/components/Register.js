import React,{useState} from "react"
import api from "../utils/api"
import axios from "axios"
import { Button, HeaderLogin , Info, Container } from "../Styles/style-widgets"
import logo from '../Styles/logo.png'

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
        <Container>
            <img className="Clogo" src={logo}  alt="company logo"/>
         <form onSubmit={handleSubmit}>
            <HeaderLogin> Sign Up</HeaderLogin>
            <Info type="text" name="username" value={User.username} onChange={handleChange}/>
            <Info type="password" name="password" value={User.password} onChange={handleChange}/>
            <Button type="submit">Login</Button>
        </form>
        </Container>
    )
}

export default SignUp;