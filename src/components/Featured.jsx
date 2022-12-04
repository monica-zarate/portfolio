// Vendor imports
import React from "react";

// Project imports
import Card from "./Card";
import Portfolio from "./portfolio.json";
import pL from '../assets/imgs/projects/paper-lantern-thumb.jpg';
import apod from '../assets/imgs/projects/apod-thumb.jpg';


function Featured() {
    return (
            <div className="featured">
                <div className="featured__wrapper">
                    <h2 className="featured__title">Featured Projects</h2>
                    {Portfolio.map((__) => {
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