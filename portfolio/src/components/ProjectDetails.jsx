// Vendor imports
import React from "react";
import { useLocation } from "react-router-dom";

// Project imports
import Portfolio from "./portfolio.json";
import paperLantern from '../assets/imgs/projects/paper-lantern.jpg';
import guavaPunchPoster from '../assets/imgs/projects/guava-punch-1.jpg';
import guavaPunchLogo from '../assets/imgs/projects/guava-punch-2.jpg';
import acnhVillagers from '../assets/imgs/projects/acnh.jpg';
import apod from '../assets/imgs/projects/apod.jpg';

function ProjectDetails () {

    let location = useLocation();
    
    let selectedProjectPath = location.pathname.toString().split("/");

    let selectedProjectObj = Portfolio.map((__) => {
        if (__.path === selectedProjectPath[2]) {

            let selectedProjectDiscipline;
            __.discipline === 'design' ? selectedProjectDiscipline = "UI/UX & Graphic Design Project" : selectedProjectDiscipline = "Web Development Project";

            let projectImgs = [];
            switch(__.path){
                case "paper-lantern":
                    projectImgs.push(paperLantern);
                    break;
                case "guava-punch":
                    projectImgs.push(guavaPunchLogo, guavaPunchPoster);
                    break;
                case "acnh":
                    projectImgs.push(acnhVillagers);
                    break;
                case "apod":
                    projectImgs.push(apod);
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
                                <img src={projectImgs[0]} alt="" className="project__img" />
                            </div>
                            {__.intro.map((paragraph) => {
                                return <p className="project__intro">{paragraph}</p>
                            })}
                            <div className="flex-c">
                                <img src={projectImgs[1]} alt="" className="project__img" />
                            </div>
                            <div className="project__steps">
                                {__.steps.map((step) => {
                                    return (
                                        <div className="flex-c project__step">
                                            <h3>{step.name}</h3>
                                            <p>{step.description}</p>
                                        </div>
                                    )
                                })}     
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    })

    return selectedProjectObj;
}

export default ProjectDetails;