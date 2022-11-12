// Vendor imports
import React from "react";

// Project imports
import "./styles/main.css";
import logo from "../assets/imgs/logo.svg";
import hamburger from "../assets/icons/hamburger-icon.svg";

function Header() {

    return (
        <header className='header flex-c'>
            <img src={logo} alt='Monica Zarate logo' className='logo'/>
            <div className='nav-wrapper'>
            <img src={hamburger} alt='hamburger icon'className='hamb-icon'/>
            <nav className='nav'>
                <ul className='ul'>
                <li className='li'><a>work</a></li>
                <li className='li'><a>about</a></li>
                </ul>
            </nav>
            </div>
        </header>
    )

};

export default Header;