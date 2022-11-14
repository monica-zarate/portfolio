// Vendor imports
import React from "react";

// Project imports
import Card from "./Card";
import paperLantern from '../assets/imgs/projects/paper-lantern.jpg';
import guavaPunch from '../assets/imgs/projects/guava-punch.jpg';

let featuredProjectsArr = [
    {
        id: 1,
        title: "Paper Lantern Bookstore",
        thumb: paperLantern,
        thumbAlt: "mobile interface preview",
        description: "Designed, developed and tested a prototype for a fictitious bookstore. The project includes a website optimized for a desktop environment and a mobile interface.",
        discipline: "UI/UX Design"
    },
    {
        id: 2,
        title: "Guava Punch Beverage Company",
        thumb: guavaPunch,
        thumbAlt: "beverage poster mockup",
        description: "Developed a fictional beverage company profile and designed a logo and a promotional poster that would attract their target audience.",
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