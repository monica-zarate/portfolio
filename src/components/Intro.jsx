// Vendor imports
import React from "react";
import { useMediaQuery } from 'react-responsive';
 
// Project imports
import monicaPhoto from "../assets/imgs/monica-zarate.jpg";
import SocialIcons from "./SocialIcons";

function Intro() {

    const isMobile = useMediaQuery({query: '(max-width: 767px)'});
    
    return (
            <div className="flex-c intro">
                <img src={monicaPhoto} alt="Monica Zarate's photo" className="intro__img"/> 
                <div className="intro__text-wrapper">
                    <h1 className="intro__h1">hola! i'm <span className="intro__h1--highlight">monica</span>.</h1>
                    <p>Vancouver BC-based UX Designer and Web Developer. Looking to create products that make a positive impact on minority groups.</p>
                    <p className="intro__cta">Let's work together!</p>
                    {isMobile ? SocialIcons('mobile', 'intro') : SocialIcons('tablet', 'intro')}
                </div>
            </div>
    )
};

export default Intro;