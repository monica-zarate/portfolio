// Vendor imports
import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";

// Project imports
import logo from "../assets/imgs/logo.svg";

function Header() {

    const [isNavVisible, setIsNavVisible] = useState(false);
    const [matches, setMatches] = useState(window.matchMedia("(max-width: 767px)").matches);

    useEffect(() => {
        window.matchMedia("(max-width: 767px)").addEventListener('change', e => setMatches(e.matches));
    }, []);

    const closeNav = () => {
        setIsNavVisible(false);
    };

    const handleStateChange = (state) => {
        setIsNavVisible(state.isOpen);
    };

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
                {matches && <Menu className="header__mobile" right width="50%" noOverlay isOpen={isNavVisible} onStateChange={(state) => handleStateChange(state)}>
                    <Link to="/design" title="Design" className="header__mobile" onClick={closeNav}>design</Link>
                    <Link to="/development" title="Development" className="header__mobile" onClick={closeNav}>development</Link>
                    <Link to="/about" title="About" className="header__mobile" onClick={closeNav}>about</Link>
                </Menu>}
            </div>
        </header>
    )
};

export default Header;