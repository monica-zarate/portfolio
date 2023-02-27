// Vendor imports
import React from "react";

// Project imports
import Card from "./Card";
import { PROJECTS } from "../data/projects";
import pL from '../assets/imgs/projects/paper-lantern-thumb.png';
import apod from '../assets/imgs/projects/apod-thumb.png';


function Featured() {
    return (
            <div className="featured">
                <div className="featured__wrapper">
                    <h2 className="featured__title">Featured Projects</h2>
                    {PROJECTS.map((__) => {
                        if (__.isFeatured === true){
                            __.path === 'paper-lantern' ? __.thumb = pL : __.thumb = apod;
                            return(
                            <Card project={__} key={__.id}/>   
                        )
                        }
                    })}
                </div>
            </div>
    )
};

export default Featured;