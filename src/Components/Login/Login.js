import React,{useState} from "react";
import { getUserLogin } from "../../Actions/UserAction";
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


function UsersLogin({ getUserLogin, history, }){

    //State used for post request to login
    const [login,setLogin]=useState({
        username:"",
        password:"",
        role:1 ,
    });

    //Change handler to set State
    const handleChange= (e) =>{
        setLogin({
            ...login,
            [e.target.name]:e.target.value,
        })
    };

    //Sumbit handler that posts the above state, push function doesn't work on first run, need to look into that
    const handleSubmit=(e)=>{
        e.preventDefault();
        getUserLogin(login);
        history.push(`/dashboard`)
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

//Function from UserAction.js for post request to login
const mapDispatchToProps = {
    getUserLogin
};

//mapStateToProps is set to null since we are only using an action
export default connect(null, mapDispatchToProps)(UsersLogin);