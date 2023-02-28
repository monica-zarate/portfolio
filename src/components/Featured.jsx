// Vendor imports
import React from "react";

// Project imports
import Card from "./Card";
import { PROJECTS } from "../data/projects";

function Featured() {
    return (
            <div className="featured">
                <div className="featured__wrapper">
                    <h2 className="featured__title">Featured Projects</h2>
                    {PROJECTS.map((__) => {
                        if (__.isFeatured === true){
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