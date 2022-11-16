// Vendor imports
import React from "react";
import { Link } from "react-router-dom";

// Project imports
import logo from "../assets/imgs/logo.svg";

function Header() {

    return (
        <header className="header">
            <div className="flex-c header__wrapper">
                <Link to="/">
                    <img src={logo} alt="Monica Zarate logo" className="header__logo"/>
                </Link>
                <nav className="header__nav">
                    <ul className="flex-c header__nav-ul">
                        <li className="header__nav-li"><Link to="/design" title="Design" className="header__link">design</Link></li>
                        <li className="header__nav-li"><Link to="/development" title="Development" className="header__link">development</Link></li>
                        <li className="header__nav-li"><Link to="/about" title="About" className="header__link">about</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
};

export default Header;