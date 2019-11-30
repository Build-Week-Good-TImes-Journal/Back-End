import React,{ useState } from "react"
import { Button, Container, Info, HeaderLogin } from "../../Styles/StyledWidgets";
import {connect} from "react-redux";
import { registerUser } from "../../Actions/UserAction";


function SignUp({ registerUser }) {

    const[user,setUser]=useState({
        username:"",
        password:"",
        role:1
    });

    const handleChange= (e) =>{
        setUser({
            ...user,
            [e.target.name]:e.target.value,
        })
    };

console.log(user);
    const handleSubmit=(e)=>{
        e.preventDefault();
        registerUser(user)
    };

    return(
        <Container>
            {/*<Header/>*/}
            {/*<img className="Clogo" src={logo}/>*/}
            <form onSubmit={handleSubmit}>
                <br/><br/><HeaderLogin> Sign Up</HeaderLogin>
                <Info
                    label="User Name" type="text" name="username" placeholder="User Name" value={user.username} onChange={handleChange}/><br/><br/>
                <Info
                    label="Password" type="password" name="password" placeholder="password" value={user.password} onChange={handleChange}/><br/><br/>
                <Button type="submit">Signup</Button>
            </form>
        </Container>

    )
}

const mapDispatchToProps = {
    registerUser
};

function mapStateToProps(state) {
    return {
        name: state.username,
        id: state.user_id,
        activity: state.activities
    }
}



export default connect (
    mapStateToProps,
    mapDispatchToProps)(SignUp);