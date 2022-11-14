// Vendor imports
import React from "react";

// Project imports
import Card from "./Card";
import poster3d from '../assets/imgs/3d-poster.jpg';
import paperLantern from '../assets/imgs/paper-lantern.jpg';

let featuredProjectsArr = [
    {
        id: 1,
        title: "Paper Lantern",
        thumb: paperLantern,
        thumbAlt: "mobile interface preview",
        description: "Design, developed and tested a prototype for a fictitious book store. The project includes a website optimized for desktop environment and a mobile interface.",
        discipline: "UI/UX Design"
    },
    {
        id: 2,
        title: "3D Promotional Poster",
        thumb: poster3d,
        thumbAlt: "beverage poster mockup",
        description: "Create a promotional poster for a fictitious beverage company. Using a background image, a 3D container and custom lighting to set up a realistic scene.",
        discipline: "Graphic Design"
    }
]

function Featured() {

    return (
            <div className="featured">
                <div className="featured__wrapper">
                    <h2 className="featured__title">Featured Projects</h2>
                    {featuredProjectsArr.map((__) => {
                        return(
                            <Card project={__} />   
                        )
                    })}
                </div>
            </div>
    )
};

export default Featured;