import React from 'react'
import logo from "../logo.svg";
import "../App.css";
const Nav = () => {
    return (
        <nav>
            <image src={logo} height="300px"/>
            <h1>Logo</h1>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Support</li>
            </ul>
        </nav>
    )
}

export default Nav
