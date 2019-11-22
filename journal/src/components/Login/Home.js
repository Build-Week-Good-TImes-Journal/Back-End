import React from "react"
// import Header from "./Header"
import {Link} from "react-router-dom"
import {Button, Container, Info, } from "../../Styles/style-widgets"
import logo from "../../Styles/logo.png";

function Home(){
    return(
        <Container>
            {/*<Header/>*/}
            <img className="Clogo" src ={logo}/>
            <Button><Link to="/User-login">Login</Link></Button>
            <Button><Link to="/signup">SignUp</Link></Button>
            <Button><Link to="/admin-login">Admin</Link></Button>
            
        </Container>
    )
}
export default Home;