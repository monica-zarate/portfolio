// Vendor imports
import React from "react";

// Project imports
import Card from "./Card";
import acnhVillagers from '../assets/imgs/projects/acnh-thumb.jpg';
import apod from '../assets/imgs/projects/apod-thumb.jpg';

let projectsArr = [
    {
        id: 3,
        title: "ACNH Villagers Site",
        thumb: acnhVillagers,
        thumbAlt: "animal crossing villagers",
        description: "Designed and developed a site listing a collection of Animal Crossing villagers. The goal was to include classes and constructor methods. This project considers knowledge of arrays loops and functions in PHP.",
        chip: "PHP",
        discipline: "development",
        path: "acnh"
    },
    {
        id: 4,
        title: "NASA's APOD Site",
        thumb: apod,
        thumbAlt: "astronomy picture of the day",
        description: "Designed and developed a site that consumes NASA APOD API to display the Picture of the Day. The goal was to use AJAX to make at least two requests to an endpoint and display content programmatically.",
        chip: "Javascript",
        discipline: "development",
        path: "apod"
    }
]

function Development() {
    return (
        <div className="projects">
            <div className="projects__wrapper">
                <h2 className="projects__title">Web Development Projects</h2>
                {projectsArr.map((__) => {
                    return <Card project={__}/>
                })}
            </div>
        </div>
    )
}

export default Development;