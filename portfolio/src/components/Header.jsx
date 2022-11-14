// Vendor imports
import React from "react";

// Project imports
import "./styles/main.css";
import logo from "../assets/imgs/logo.svg";

function Header() {

    return (
        <header className="header">
            <div className="flex-c header__wrapper">
                <img src={logo} alt='Monica Zarate logo' className='header__logo'/>
                <nav className='header__nav'>
                    <ul className='flex-c header__nav-ul'>
                        <li className='header__nav-li'><a>work</a></li>
                        <li className='header__nav-li'><a>about</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
};

export default Header;