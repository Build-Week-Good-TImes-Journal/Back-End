import React from "react"
import image from "../images/Design.jpg"
import {Logo} from "./StyledWidgits"


function Header(){
    return(
        <div>
            <Logo className="logo" src={image} alt="logo"/>
        </div>
    )
}

export default Header;