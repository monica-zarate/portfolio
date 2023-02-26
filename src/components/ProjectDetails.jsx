// Vendor imports
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Project imports
import { PROJECTS } from "../data/projects";
import PaperLantern from "./projects/PaperLantern";
import GuavaPunch from "./projects/GuavaPunch";
import ACNH from "./projects/ACNH";
import APOD from "./projects/APOD";
import TravelCompass from "./projects/TravelCompass";

function ProjectDetails () {

    useEffect(() => {
        window.scrollTo(0,0);
    }, []);

    // Access the correct project through the url path
    let location = useLocation();
    let selectedProjectPath = location.pathname.toString().split("/");

    // [2] is the array's index for the project path
    let selectedProjectObj = PROJECTS.map((__) => {
        if (__.path === selectedProjectPath[2]) {

            // Define the page's title
            let selectedProjectDiscipline;
            __.discipline === 'design' ? selectedProjectDiscipline = "UX Design Project" : selectedProjectDiscipline = "Web Development Project";

            let projectSteps;
            switch(__.path){
                case "paper-lantern":
                    projectSteps = PaperLantern();
                    break;
                case "guava-punch":
                    projectSteps = GuavaPunch();
                    break;
                case "acnh":
                    projectSteps = ACNH();
                    break;
                case "apod":
                    projectSteps = APOD();
                    break;
                case "travel-compass":
                    projectSteps = TravelCompass();
                    break;
            }

            return (
                <div className="project">
                    <div className="project__wrapper">
                        <h2 className="project__section-title">{selectedProjectDiscipline}</h2>
                        <div className="project__card">
                            <h1 className="project__title">{__.title}</h1>
                            <h3 className="project__subtitle">{__.subtitle}</h3>
                            <div className="flex-c project__overview">
                                <div className="project__overview--left">
                                    <h2>Overview</h2>
                                    <p>{__.description}</p>
                                </div>
                                <div className="project__overview--right">
                                    <h2>Tools</h2>
                                    <ul>
                                        {__.tools.map((tool) => {
                                            return (
                                                <li>{tool}</li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </div>
                            <div className="flex-c">
                                <img src={__.images[0]} alt="" className="project__img" />
                            </div>
                            {__.intro.map((paragraph) => {
                                return <p className="project__intro">{paragraph}</p>
                            })}
                            {projectSteps}
                        </div>
                    </div>
                </div>
            )
        }
    })

    return selectedProjectObj;
}

export default ProjectDetails;