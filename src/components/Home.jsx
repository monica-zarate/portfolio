// Vendor imports
import React, { useEffect } from "react";

// Project imports
import Intro from '../components/Intro';
import Featured from "../components/Featured";

function Home() {

    useEffect(() => {
        window.scrollTo(0,0);
    }, []);

    return (
        <div>
            <Intro/>
            <Featured/>
        </div>
    )

};

export default Home;