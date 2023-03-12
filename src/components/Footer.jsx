// Vendor imports
import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { motion } from "framer-motion";

function Footer() {

    let year = new Date().getFullYear();

    return (
        <footer className="footer">
            <ul className="flex-c footer__wrapper">
                <p>© Monica Zarate {year}</p>
                <p>Designed and developed with 🤍 <br/> in Vancouver, BC</p>
                <ul className='flex-c footer__social'>
                    <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} style={{ x: 0 }} transition={{ease: 'easeInOut'}}><a href="https://www.linkedin.com/in/monica-zarate/" title="Monica Zarate's LinkedIn Profile" target="_blank"><FontAwesomeIcon icon={faLinkedin}/></a></motion.li>
                    <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} style={{ x: 0 }} transition={{ease: 'easeInOut'}}><a href="https://github.com/monica-zarate" title="Monica Zarate's Github Profile" target="_blank"><FontAwesomeIcon icon={faGithub}/></a></motion.li>
                    <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} style={{ x: 0 }} transition={{ease: 'easeInOut'}}><a href="mailto:hello@monicazarate.com" title="Send me an email: hello@monicazarate.com" target="_blank"><FontAwesomeIcon icon={faEnvelope}/></a></motion.li>
                </ul>
            </ul>
      </footer>
    )

};

export default Footer;