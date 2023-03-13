// Vendor imports
import React, { useEffect } from "react";
import { motion as m } from "framer-motion";

// Project imports
import Intro from '../components/Intro';
import Featured from "../components/Featured";

function Home() {

    useEffect(() => {
        window.scrollTo(0,0);
    }, []);

    return (
        <m.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.3, ease: 'easeInOut'}} exit={{opacity: 0}} className="home">
            <Intro/>
            <Featured/>
        </m.div>
    )

};

export default Home;