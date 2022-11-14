// Vendor imports
import React from "react";

// Project imports
import Intro from '../components/Intro';
import Featured from "../components/Featured";

function Home() {

    return (
        <div className="home">
            <Intro/>
            <Featured/>
        </div>
    )

};

export default Home;