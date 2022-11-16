// Vendor imports
import React from "react";

// Project imports
import Card from "./Card";
import paperLantern from '../assets/imgs/projects/paper-lantern.jpg';
import guavaPunch from '../assets/imgs/projects/guava-punch.jpg';

let projectsArr = [
    {
        id: 1,
        title: "Paper Lantern Bookstore",
        thumb: paperLantern,
        thumbAlt: "mobile interface mockup",
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

function Design() {
    return (
        <div className="projects">
            <div className="projects__wrapper">
                <h2 className="projects__title">UI/UX & Graphic Design Projects</h2>
                {projectsArr.map((__) => {
                    return <Card project={__}/>
                })}
            </div>
        </div>
    )
}

export default Design;