import React from 'react'
import logo from "../logo.svg";
import "../App.css";
const Nav = () => {
    return (
        <nav>
            <image src={logo} style="height:3rem;"/>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Support</li>
            </ul>
        </nav>
    )
}

export default Nav
