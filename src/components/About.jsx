import React, { useEffect } from "react";
import { motion as m } from "framer-motion";

// Project imports
import aboutImg from '../assets/imgs/about.png';

function About() {

    useEffect(() => {
        window.scrollTo(0,0);
    }, []);

    return (
        <m.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.3, ease: 'easeInOut'}} exit={{opacity: 0}} className="about">
            <div className="about__wrapper">
                <h2 className="about__title">Hello there! 👋</h2>
                <div className="flex-c about__content">
                    <div className="about__text">
                        <p>I'm a <span className="about__cta">UX Designer</span> and <span className="about__cta">Web Developer</span> who values inclusion, accessibility and agile work.</p>
                        <p>Being a part of a team that welcomes <span className="about__cta">diversity</span> and encourages me to learn and to improve my skills keeps me motivated.</p>
                        <p>I like to bring a <span className="about__cta">proactive attitude</span>, empathy and excellent time management skills to all my projects.</p>
                        <p>When I'm not working you'll find me:</p>
                        <ul>
                            <li><p>🍰 Baking something sweet</p></li>
                            <li><p>📚 Reading novels and manga</p></li>
                            <li><p>🧋 Drinking lots of chai lattes</p></li>
                        </ul>
                        <p className="about__cta">Say hi before you go!</p>
                        <p className="about__links-wrap">Find me on <a href="https://www.linkedin.com/in/monica-zarate/" title="Monica Zarate's LinkedIn Profile" target="_blank" className="about__links">LinkedIn</a> or send me an <a href="mailto:hello@monicazarate.com" title="Send me an email: hello@monicazarate.com" target="_blank" className="about__links">email</a>.</p>
                    </div>
                    <img src={aboutImg} alt="Monica Zarate" className="about__img"/>
                </div>
            </div>
        </m.div>
    )
}

export default About;