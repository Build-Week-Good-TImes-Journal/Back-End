import React from 'react';
import Zone from "../../Images/Zone.png"
import styled

function Nav() {

    return (
        <div>
            <nav className="navBar">
                <img className="logo" src={Zone} alt="logo" />
                <h1 className="navTitle">Design Your Life</h1>
                <div className="btnContainer" >
                    <button className="navBtn">Add Activity</button>
                    <button className="navBtn">View Activities</button>
                    <button className="navBtn">Reflection Form</button>
                    <button className="navBtn">Log Out</button>
                </div>
            </nav>

        </div>
    )
}

export default Nav;