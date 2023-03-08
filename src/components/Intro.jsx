// Vendor imports
import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
 
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
                        <li><a href="https://www.linkedin.com/in/monica-zarate/" title="Monica Zarate's LinkedIn Profile" target="_blank"><FontAwesomeIcon icon={faLinkedin}/></a></li>
                        <li><a href="https://github.com/monica-zarate" title="Monica Zarate's Github Profile" target="_blank"><FontAwesomeIcon icon={faGithub}/></a></li>
                        <li><a href="mailto:hello@monicazarate.com" title="hello@monicazarate.com" target="_blank"><FontAwesomeIcon icon={faEnvelope}/></a></li>
                    </ul>
                </div>
            </div>
    )
};

export default Intro;