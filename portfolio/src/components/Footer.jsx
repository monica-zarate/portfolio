// Vendor imports
import React from "react";

// Project imports
import "./styles/main.css";
import github from "../assets/icons/github-icon.svg";
import linkedin from "../assets/icons/linkedin-icon.svg";
import mail from "../assets/icons/mail-icon.svg";

function Footer() {

    return (
        <footer className='footer flex-c'>
            <div>
                <p>© Monica Zarate 2022</p>
            </div>
            <div>
                <p>Designed and developed with 🤍 <br/> in Vancouver, BC</p>
            </div>
            <ul className='flex-c social'>
                <li><a><img src={github} alt='github icon'/></a></li>
                <li><a><img src={linkedin} alt='linkedin icon'/></a></li>
                <li><a><img src={mail} alt='mail icon'/></a></li>
            </ul>
      </footer>
    )

};

export default Footer;