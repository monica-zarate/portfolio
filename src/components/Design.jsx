// Vendor imports
import React from "react";

// Project imports
import Card from "./Card";
import Portfolio from "./portfolio.json";
import pL from '../assets/imgs/projects/paper-lantern-thumb.jpg';
import gP from '../assets/imgs/projects/guava-punch-thumb.jpg';


function Design() {
    return (
        <div className="projects">
            <div className="projects__wrapper">
                <h2 className="projects__title">UI/UX & Graphic Design Projects</h2>
                {Portfolio.map((__) => {
                    if (__.discipline === 'design') {
                        __.path === 'paper-lantern' ? __.thumb = pL : __.thumb = gP;
                        return <Card project={__}/>
                    }
                })}
            </div>
        </div>
    )
}

export default Design;