import React,{ useState } from "react"
import api from "../../utils/api"
import { Button, Container, Info, HeaderLogin } from "../../Styles/style-widgets";


function SignUp(props){
const[User,SetUser]=useState({
    username:"",
    password:"",
    role:1
});

const handleChange= (e) =>{
    SetUser({
        ...User,
        [e.target.name]:e.target.value,
    })
};


const handleSubmit=(e)=>{
    e.preventDefault();
    api()
    .post("/api/auth/register/", User)
    .then(res=>{
        console.log(res);
        props.history.push("/User-login")
    })
    .catch(err=>{
        console.log(err)
    })
};

    return(
        <Container>
            {/*<Header/>*/}
            <form onSubmit={handleSubmit}>
                <br/><br/><HeaderLogin> Sign Up</HeaderLogin>
                <Info
                 label="User Name" type="text" name="username" placeholder="User Name" value={User.username} onChange={handleChange}/><br/><br/>
                <Info
                 label="Password" type="password" name="password" placeholder="password" value={User.password} onChange={handleChange}/><br/><br/>
                <Button type="submit">Signup</Button>
            </form>
        </Container>
         
    )
}

export default SignUp;