import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import {getToken} from "../../Utilites/api";
import { Container } from "../../Styles/StyledWidgets";

const Nav = () => {

    //Function from the api.js to check local storage for a token
    const signedIn = getToken();
    return (
        <Container className="navContainer">
            <nav className="nav">
                {/*Ternary used to check for token from local storage and show links depending on true or false*/}
                {!signedIn && <Link to="/">Login</Link>}
                {!signedIn && <Link to="/signup">Sign Up</Link>}
                {signedIn && <Link to={"/AddReflection"}>View Reflections</Link>}
                {signedIn && <Link to={"/myactivities"}>View Activities</Link>}
                {signedIn && <Link to={"/dashboard"}>My Dashboard</Link>}
                {signedIn && <Link to={"/activitylogs"}>Activity Logs</Link>}
                {signedIn && <Link to={"/logout"}>Log Out</Link>}
            </nav>
        </Container>
    );
};

export default withRouter(Nav);