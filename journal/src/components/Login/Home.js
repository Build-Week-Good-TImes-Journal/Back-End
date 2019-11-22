import React from "react"
// import Header from "./Header"
import {Link} from "react-router-dom"
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';


function Home(){
    return(
        <div>
            {/*<Header/>*/}
            <Button><Link to="/User-login">Login</Link></Button>
            <Button><Link to="/signup">SignUp</Link></Button>
            <Button><Link to="/admin-login">Admin</Link></Button>
            
        </div>
    )
}
export default Home;