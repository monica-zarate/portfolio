// Vendor imports
import React from "react";

// Project imports
import Card from "./Card";
import paperLantern from '../assets/imgs/projects/paper-lantern.jpg';
import apod from '../assets/imgs/projects/apod.jpg';

let featuredProjectsArr = [
    {
        id: 1,
        title: "Paper Lantern Bookstore",
        thumb: paperLantern,
        thumbAlt: "mobile interface preview",
        description: "Designed, developed and tested a prototype for a fictitious bookstore. The project includes a website optimized for a desktop environment and a mobile interface.",
        chip: "UI/UX Design",
        discipline: "design",
        path: "paper-lantern"
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