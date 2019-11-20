import React,{useState} from "react";
import api from "../utils/api"
import { Button, HeaderLogin , Info, Container } from "../Styles/style-widgets";
import logo from '../Styles/logo.png'


function AdminLogin(props){

    const [error,setError]=useState()
    const [login,setLogin]=useState({
        username:"",
        password:"",
        role:0 ,
    })
    
    

    const handleChange= (e) =>{
        setLogin({
            ...login,
            [e.target.name]:e.target.value,
        })
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        api()
        .post("/api/auth/login", login)
        .then(res=>{
            localStorage.setItem("token", res.data.token)
            localStorage.setItem("message",JSON.stringify(res.data.message))
            props.history.push("/users")
            console.log(res)
        })
        .catch(err=>{
            setError(err)
            console.log(error)
        })

    }

    return(
        <Container>
            <img className="logo" src={logo} height="55"  alt="company logo"/>
        <form onSubmit={handleSubmit}>
            <HeaderLogin> Admin Login</HeaderLogin>
            <Info type="text" name="username" value={login.username} onChange={handleChange}/>
            <Info type="password" name="password" value={login.password} onChange={handleChange}/>
            <Button type="submit">Login</Button>
        </form>
        </Container>
        
    )
}

export default AdminLogin;