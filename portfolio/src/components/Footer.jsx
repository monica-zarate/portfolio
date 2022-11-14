// Vendor imports
import React from "react";

// Project imports
import "./styles/main.css";
import github from "../assets/icons/github-icon.svg";
import linkedin from "../assets/icons/linkedin-icon.svg";
import mail from "../assets/icons/mail-icon.svg";

function Footer() {

    return (
        <footer className="footer">
            <ul className="flex-c footer__wrapper">
                <p>© Monica Zarate 2022</p>
                <p>Designed and developed with 🤍 <br/> in Vancouver, BC</p>
                <ul className='flex-c footer__social'>
                <li><a href="https://www.linkedin.com/in/monica-zarate/" title="Monica Zarate's LinkedIn Profile" target="_blank"><img src={linkedin} alt='linkedin icon'/></a></li>
                <li><a href="https://github.com/monica-zarate" title="Monica Zarate's Github Profile" target="_blank"><img src={github} alt='github icon'/></a></li>
                <li><a href="mailto:hello@monicazarate.com" title="Send me an email: hello@monicazarate.com" target="_blank"><img src={mail} alt='mail icon'/></a></li>
            </ul>
            </ul>
      </footer>
    )

};

export default Footer;