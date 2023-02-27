// Vendor imports
import React, { useEffect } from "react";

// Project imports
import Card from "./Card";
import { PROJECTS } from "../data/projects";
import acnh from '../assets/imgs/projects/acnh-thumb.png';
import apod from '../assets/imgs/projects/apod-thumb.png';
import tC from '../assets/imgs/projects/tc-dev-thumb.png';


function Development() {

    useEffect(() => {
        window.scrollTo(0,0);
    }, []);

    return (
        <div className="projects">
            <div className="projects__wrapper">
                <h2 className="projects__title">Web Development Projects</h2>
                {PROJECTS.map((__) => {
                    if (__.discipline === 'development') {
                        switch(__.path) {
                            case 'acnh':
                                __.thumb = acnh;
                                break;
                            case 'apod':
                                __.thumb = apod;
                                break;
                            case 'travel-compass-phase2':
                                __.thumb = tC;
                                break;
                        }
                        return <Card project={__} key={__.id}/>   
                    }
                })}
            </div>
        </div>
    )
}

export default Development;