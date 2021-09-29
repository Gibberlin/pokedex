import React from 'react'
import logo from "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";
import "../App.css";
const Nav = () => {
    return (
        <nav>
            <logo />
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Support</li>
            </ul>
        </nav>
    )
}

export default Nav
