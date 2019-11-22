import React,{useState} from "react";
import api from "../../utils/api"
import {Link} from "react-router-dom"
import {
    Container,
    ActInfo,
    ActInfo2,
    Select,
    Button, Info, HeaderLogin
  } from "../../Styles/style-widgets";

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
            {/*<Header/>*/}
            <Link className="Homelink"to="/">Home</Link>
            <form onSubmit={handleSubmit}>
                <br/><br/><HeaderLogin> Admin Login</HeaderLogin>
                 <Info  label="User Name" type="text" name="username" placeholder="User Name" value={login.username} onChange={handleChange}/><br/><br/>
                 <Info  label="Password" type="password" name="password" placeholder="Password" value={login.password} onChange={handleChange}/><br/><br/>
                 <Button type="submit">Login</Button>
             </form>
        </Container>
        
    )
}

export default AdminLogin;