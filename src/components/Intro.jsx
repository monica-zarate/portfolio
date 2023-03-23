// Vendor imports
import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { motion as m } from "framer-motion";
 
// Project imports
import monicaPhoto from "../assets/imgs/monica-zarate.jpg";

function Intro() {
    return (
            <div className="flex-c intro">
                <img src={monicaPhoto} alt="Monica Zarate's photo" className="intro__img"/> 
                <div className="intro__text-wrapper">
                    <h1 className="intro__h1">hola! i'm <span className="intro__h1--highlight">monica</span>.</h1>
                    <p>Vancouver BC-based UX Designer and Web Developer. Looking to create products that make a positive impact on minority groups.</p>
                    <p className="intro__cta">Let's work together!</p>
                    <ul className='flex-c intro__social'>
                        <m.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} style={{ x: 0 }} transition={{ease: 'easeInOut'}}>
                            <a href="https://www.linkedin.com/in/monica-zarate/" title="Monica Zarate's LinkedIn Profile" target="_blank"><FontAwesomeIcon icon={faLinkedin}/></a>
                        </m.li>
                        <m.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} style={{ x: 0 }} transition={{ease: 'easeInOut'}}>
                            <a href="https://github.com/monica-zarate" title="Monica Zarate's Github Profile" target="_blank"><FontAwesomeIcon icon={faGithub}/></a>
                        </m.li>
                        <m.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} style={{ x: 0 }} transition={{ease: 'easeInOut'}}>
                            <a href="mailto:hello@monicazarate.com" title="hello@monicazarate.com" target="_blank"><FontAwesomeIcon icon={faEnvelope}/></a>
                        </m.li>
                    </ul>
                </div>
            </div>
    )
};

export default Intro;