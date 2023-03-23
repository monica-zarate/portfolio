// Vendor imports
import React, { useEffect } from "react";
import { motion as m } from "framer-motion";
import SEO from "./SEO";

// Project imports
import Intro from '../components/Intro';
import Featured from "../components/Featured";

function Home() {

    const seoData = {
        title: 'Monica Zarate - UX Designer & Web Developer',
        description: 'Monica Zarate is a Vancouver BC-based UX Designer and Web Developer.',
    };

    useEffect(() => {
        window.scrollTo(0,0);
    }, []);

    return (
        <m.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.3, ease: 'easeInOut'}} exit={{opacity: 0}} className="home">
            <SEO title={seoData.title} description={seoData.description}/>
            <Intro/>
            <Featured/>
        </m.div>
    )

};

export default Home;