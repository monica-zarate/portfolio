// Vendor imports
import React from "react";

// Project imports
import Card from "./Card";
import paperLantern from '../assets/imgs/projects/paper-lantern.jpg';
import guavaPunch from '../assets/imgs/projects/guava-punch.jpg';

let disciplines = ["Web Development", "UI/UX Design", "Graphic Design"];

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
    },
    {
        id: 3,
        title: "ACNH Villagers PHP Site",
        thumb: guavaPunch,
        thumbAlt: "animal crossing villagers",
        description: "Designed and developed a site listing a collection of Animal Crossing villagers. The goal was to include classes and constructor methods. This project considers knowledge of arrays loops and functions in PHP.",
        discipline: "Web Development"
    },
    {
        id: 4,
        title: "NASA's APOD Js Site",
        thumb: guavaPunch,
        thumbAlt: "astronomy picture of the day",
        description: "Designed and developed a site that consumes NASA APOD API to display the Picture of the Day. The goal was to use AJAX to make at least two requests to an endpoint and display content programmatically.",
        discipline: "Web Development"
    }
]

function Projects() {
    return (
        <div className="projects">
            <div className="projects__wrapper">
                <h2 className="projects__title">Projects</h2>
                <div className="projects__chips">{disciplines.map((__) => {
                    return <span className="projects__chip">{__}</span>
                })}</div>
                {projectsArr.map((__) => {
                    return <Card project={__}/>
                })}
            </div>
        </div>
    )
}

export default Projects;