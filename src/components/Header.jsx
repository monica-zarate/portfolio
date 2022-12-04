// Vendor imports
import React from "react";
import { NavLink } from "react-router-dom";

// Project imports
import logo from "../assets/imgs/logo.svg";

function Header() {

    return (
        <header className="header">
            <div className="flex-c header__wrapper">
                <NavLink to="/">
                    <img src={logo} alt="Monica Zarate logo" className="header__logo"/>
                </NavLink>
                <nav className="header__nav">
                    <ul className="flex-c header__nav-ul">
                        <li className="header__nav-li"><NavLink to="/design" title="Design" className={({isActive}) => isActive ? "header__link--active" : "header__link"}>design</NavLink></li>
                        <li className="header__nav-li"><NavLink to="/development" title="Development" className={({isActive}) => isActive ? "header__link--active" : "header__link"}>development</NavLink></li>
                        <li className="header__nav-li"><NavLink to="/about" title="About" className={({isActive}) => isActive ? "header__link--active" : "header__link"}>about</NavLink></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
};

export default Header;