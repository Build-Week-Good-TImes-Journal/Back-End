import React,{useState} from "react";
import api from "../utils/api"

function AdminLogin(props){
    const [error,setError]=useState()
    const [login,setLogin]=useState({
        username:"",
        password:"",
        role:0
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
            props.history.push("/users")
            
        })
        .catch(err=>{
            setError(err)
            console.log(error)
        })

    }

    return(
        <form onSubmit={handleSubmit}>
            <h3> Admin Login</h3>
            <input type="text" name="username" value={login.username} onChange={handleChange}/>
            <input type="password" name="password" value={login.password} onChange={handleChange}/>
            <button type="submit">Login</button>
        </form>
    )
}

export default AdminLogin;