// Vendor imports
import React, { useEffect } from "react";

// Project imports
import Card from "./Card";
import Portfolio from "./portfolio.json";
import pL from '../assets/imgs/projects/paper-lantern-thumb.jpg';
import gP from '../assets/imgs/projects/guava-punch-thumb.jpg';


function Design() {

    useEffect(() => {
        window.scrollTo(0,0);
    }, []);

    return (
        <div className="projects">
            <div className="projects__wrapper">
                <h2 className="projects__title">UI/UX & Graphic Design Projects</h2>
                {Portfolio.map((__) => {
                    if (__.discipline === 'design') {
                        __.path === 'paper-lantern' ? __.thumb = pL : __.thumb = gP;
                        return <Card project={__} key={__.id}/>
                    }
                })}
            </div>
        </div>
    )
}

export default Design;