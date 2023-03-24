// Vendor imports
import React from "react";
import { useMediaQuery } from 'react-responsive';

// Project imports
import SocialIcons from "./SocialIcons";

function Footer() {

    let year = new Date().getFullYear();

    const isMobile = useMediaQuery({query: '(max-width: 767px)'});

    return (
        <footer className="footer">
            <ul className="flex-c footer__wrapper">
                <p>© Monica Zarate {year}</p>
                <p>Designed and developed with 🤍 <br/> in Vancouver, BC</p>
                {isMobile ? SocialIcons('mobile', 'footer') : SocialIcons('tablet', 'footer')}
            </ul>
      </footer>
    )

};

export default Footer;