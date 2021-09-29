import React from 'react'
import logo from "../logo.svg";
import "../App.css";
const Nav = () => {
    return (
        <nav>
        <h1>Logo</h1>
            <img src={logo} alt="Poke" />
            
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Support</li>
            </ul>
        </nav>
    )
}

export default Nav
