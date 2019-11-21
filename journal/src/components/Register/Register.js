import React,{useState} from "react"
import api from "../../utils/api"
import Header from "../otherComponents/Header"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


function SignUp(props){
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
        props.history.push("/User-login")
    })
    .catch(err=>{
        console.log(err)
    })
}

    return(
        <div>
            <Header/>
            <form onSubmit={handleSubmit}>
                <br/><br/><h3> Sign Up</h3>
                <TextField label="User Name" type="text" name="username" placeholder="User Name" value={User.username} onChange={handleChange}/><br/><br/>
                <TextField label="Password" type="password" name="password" placeholder="password" value={User.password} onChange={handleChange}/><br/><br/>
                <Button type="submit">Signup</Button>
            </form>
        </div>
         
    )
}

export default SignUp;