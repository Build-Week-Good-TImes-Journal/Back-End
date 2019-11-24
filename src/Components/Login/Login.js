import React,{useState} from "react";
import { getUserLogin } from "../../Actions/UserAction";
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


function UsersLogin({ getUserLogin, history }){

    const [login,setLogin]=useState({
        username:"",
        password:"",
        role:1 ,
    });


    const handleChange= (e) =>{
        setLogin({
            ...login,
            [e.target.name]:e.target.value,
        })
    };

    const handleSubmit=(e)=>{
        e.preventDefault();
       getUserLogin(login);
        history.push(`/userdashboard`)
    };

    return(
        <div>

            <form onSubmit={handleSubmit}>
                <br/><br/><h3>Login</h3>
                <TextField label="User Name" type="text" name="username" placeholder="User Name" value={login.username} onChange={handleChange}/><br/><br/>
                <TextField labe="Password" type="password" name="password" placeholder="Password" value={login.password} onChange={handleChange}/><br/><br/>
                <Button type="submit">Login</Button>
            </form>
        </div>

    )
}



const mapDispatchToProps = {
    getUserLogin
};

export default connect(null, mapDispatchToProps)(UsersLogin);