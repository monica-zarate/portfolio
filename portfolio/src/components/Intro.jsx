// Vendor imports
import React from "react";

// Project imports
import "./styles/main.css";
import monicaPhoto from "../assets/imgs/monica-zarate.jpg";
import githubBlack from "../assets/icons/github-icon-black.svg";
import linkedinBlack from "../assets/icons/linkedin-icon-black.svg";
import mailBlack from "../assets/icons/mail-icon-black.svg";

function Intro() {
    return (
            <div className="intro">
                <img src={monicaPhoto} alt="Monica Zarate's photo" className="intro__img"/>  
                <div className="intro__text-wrapper">
                    <h1 className="intro__h1">Hola! I'm <span className="intro__h1--highlight">Monica</span>.</h1>
                    <p>Vancouver BC-based UI/UX Designer. Looking to create products that make a positive impact on minority groups' inclusion.</p>
                    <p className="intro__cta">Let's work together!</p>
                    <ul className='flex-c intro__social'>
                        <li><a href="https://www.linkedin.com/in/monica-zarate/" title="Monica Zarate's LinkedIn Profile" target="_blank"><img src={linkedinBlack} alt='linkedin icon'/></a></li>
                        <li><a href="https://github.com/monica-zarate" title="Monica Zarate's Github Profile" target="_blank"><img src={githubBlack} alt='github icon'/></a></li>
                        <li><a href="mailto:hello@monicazarate.com" title="hello@monicazarate.com" target="_blank"><img src={mailBlack} alt='mail icon'/></a></li>
                    </ul>
                </div>
            </div>
    )
};

export default Intro;