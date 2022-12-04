// Vendor imports
import React, { useEffect } from "react";

// Project imports
import Card from "./Card";
import Portfolio from "./portfolio.json";
import acnh from '../assets/imgs/projects/acnh-thumb.jpg';
import apod from '../assets/imgs/projects/apod-thumb.jpg';


function Development() {

    useEffect(() => {
        window.scrollTo(0,0);
    }, []);

    return (
        <div className="projects">
            <div className="projects__wrapper">
                <h2 className="projects__title">Web Development Projects</h2>
                {Portfolio.map((__) => {
                    if (__.discipline === 'development') {
                        __.path === 'acnh' ? __.thumb = acnh : __.thumb = apod;
                        return <Card project={__} key={__.id}/>   
                    }
                })}
            </div>
        </div>
    )
}

export default Development;