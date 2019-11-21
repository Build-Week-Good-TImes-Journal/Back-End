import React,{useState} from "react";
import api from "../../utils/api"
import Header from "../otherComponents/Header"
import {Link} from "react-router-dom"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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

        <div>
            <Header/>
            <Link to="/">Home</Link>
            <form onSubmit={handleSubmit}>
                <br/><br/><h3> Admin Login</h3>
                 <TextField label="User Name" type="text" name="username" placeholder="User Name" value={login.username} onChange={handleChange}/><br/><br/>
                 <TextField label="Password" type="password" name="password" placeholder="Password" value={login.password} onChange={handleChange}/><br/><br/>
                 <Button type="submit">Login</Button>
             </form>
        </div>
        
    )
}

export default AdminLogin;