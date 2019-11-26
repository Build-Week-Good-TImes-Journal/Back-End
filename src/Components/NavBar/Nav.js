import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import {getToken} from "../../Utilites/api";
import { Container } from "../../Styles/StyledWidgets";

const Nav = () => {

    const signedIn = getToken();
    return (
        <Container className="navContainer">
            <nav className="nav">
                {!signedIn && <Link to="/">Login</Link>}
                {signedIn && <Link to={"/addactivity"}>Add Activity</Link>}
                {signedIn && <Link to={"/AddReflection"}>Add Reflection</Link>}
                {signedIn && <Link to={"/myactivities"}>View all Activities</Link>}
                {signedIn && <Link to={"/dashboard"}>My Dashboard</Link>}
                {signedIn && <Link to={"/logout"}>Log Out</Link>}
            </nav>
        </Container>
    );
};

export default withRouter(Nav);