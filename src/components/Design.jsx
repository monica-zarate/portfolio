// Vendor imports
import React, { useEffect } from "react";

// Project imports
import Card from "./Card";
import { PROJECTS } from "../data/projects";
import pL from '../assets/imgs/projects/paper-lantern-thumb.jpg';
import gP from '../assets/imgs/projects/guava-punch-thumb.jpg';
import tC from '../assets/imgs/projects/travel-compass-thumb.png';


function Design() {

    useEffect(() => {
        window.scrollTo(0,0);
    }, []);

    return (
        <div className="projects">
            <div className="projects__wrapper">
                <h2 className="projects__title">UX Design Projects</h2>
                {PROJECTS.map((__) => {
                    if (__.discipline === 'design') {
                        switch(__.path) {
                            case 'paper-lantern': 
                                __.thumb = pL;
                                break;
                            case 'guava-punch':
                                __.thumb = gP;
                                break;
                            case 'travel-compass':
                                __.thumb = tC;
                        }
                        return <Card project={__} key={__.id}/>
                    }
                })}
            </div>
        </div>
    )
}

export default Design;