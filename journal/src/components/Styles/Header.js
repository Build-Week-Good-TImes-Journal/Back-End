import React from "react"
import image from "../Images/Design.jpg"
import {Logo} from "../Styles/StyledWidgits"


function Header(){
    return(
        <div>
            <Logo className="logo" src={image} alt="logo"/>
        </div>
    )
}

export default Header;