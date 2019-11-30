import React,{ useState } from "react"
import { Button, Container, Info, HeaderLogin } from "../../Styles/StyledWidgets";
import {connect} from "react-redux";
import { registerUser } from "../../Actions/UserAction";


function SignUp({ registerUser }) {

    //State used for post request to register a user
    const[user,setUser]=useState({
        username:"",
        password:"",
        role:1
    });

    //Change handler to set above set from user input
    const handleChange= (e) =>{
        setUser({
            ...user,
            [e.target.name]:e.target.value,
        })
    };

    //Submit handler to send post request with the above state
    const handleSubmit=(e)=>{
        e.preventDefault();
        registerUser(user);
    };

    return(
        <Container>
            {/*<Header/>*/}
            {/*<img className="Clogo" src={logo}/>*/}
            {/*I do not have access to the above file [Header] or image [logo]*/}
            <form onSubmit={handleSubmit}><br/><br/>
            <HeaderLogin> Sign Up</HeaderLogin>
                <Info
                    label="User Name"
                    type="text"
                    name="username"
                    placeholder="User Name"
                    value={user.username}
                    onChange={handleChange}/>
                    <br/><br/>
                <Info
                    label="Password"
                    type="password"
                    name="password"
                    placeholder="password"
                    value={user.password}
                    onChange={handleChange}/>
                    <br/><br/>
                <Button type="submit">Signup</Button>
            </form>
        </Container>
    )
}

//Function for UserActions.js to handle post request to register user
const mapDispatchToProps = {
    registerUser
};

//mapPropsToState set to null since we are not using any in this component
export default connect (
    null,
    mapDispatchToProps)(SignUp);