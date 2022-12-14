import React, { useEffect } from "react";

// Project imports
import aboutImg from '../assets/imgs/about.png';

function About() {

    useEffect(() => {
        window.scrollTo(0,0);
    }, []);

    return (
        <div className="about">
            <div className="about__wrapper">
                <h2 className="about__title">About</h2>
                <div className="flex-c about__content">
                    <div className="about__text">
                        <p>I'm a Web Developer and UX Designer who values inclusion, accessibility and agile work.</p>
                        <p>Being a part of a team that welcomes diversity and encourages me to learn and to improve my skills keeps me motivated.</p>
                        <p>I like to bring a proactive attitude, empathy and excellent time management skills to all my projects.</p>
                        <p>When I'm not working you'll find me baking something sweet, reading manga and drinking lots of chai lattes.</p>
                        <p className="about__cta">Say hi before you go!</p>
                        <p>Find me on <a href="https://www.linkedin.com/in/monica-zarate/" title="Monica Zarate's LinkedIn Profile" target="_blank" className="about__links">LinkedIn</a> or send me an <a href="mailto:hello@monicazarate.com" title="Send me an email: hello@monicazarate.com" target="_blank" className="about__links">email</a>.</p>
                    </div>
                    <img src={aboutImg} alt="Monica Zarate" className="about__img"/>
                </div>
            </div>
        </div>
    )
}

export default About;