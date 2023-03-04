// Vendor imports
import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faMinus } from '@fortawesome/free-solid-svg-icons';

// Project imports
import { PROJECTS } from "../data/projects";

export default function ProjectDetails () {

    useEffect(() => {
        window.scrollTo(0,0);
    }, []);

    // Access the correct project through the url path
    let location = useLocation();
    let selectedProjectPath = location.pathname.toString().split("/");
    let workSectionPath = "/work";

    // [2] is the array's index for the project path
    let selectedProjectObj = PROJECTS.map((__) => {
        if (__.path === selectedProjectPath[2]) {

            // Define the page's title
            let selectedProjectDiscipline;
            switch(__.discipline) {
                case 'design':
                    selectedProjectDiscipline = "UX Design Project";
                    break;
                case 'development':
                    selectedProjectDiscipline = "Web Development Project";
                    break;
                case 'graphic-design':
                    selectedProjectDiscipline = "Graphic Design Project";
            }

            // Define the project's discipline to display appropriate background colour
            let discipline;
            __.discipline === 'development' ? discipline = 'dev' : discipline = 'design';

            return (
                <div className="project">
                    <div className={`flex-c project__hero ${discipline}-bg`}>
                        <img src={__.images.featuredImg} alt={__.images.featuredImgAlt} className="project__img" />
                    </div>
                    <div className="project__wrapper">
                        <div className="project__section">
                            <h2 className="project__title h2">{__.title}</h2>
                            <h3 className="project__subtitle h3">{__.subtitle}</h3>
                            <h4 className="project__discipline h4">{selectedProjectDiscipline}</h4>
                            <div className="flex-c project__overview">
                                <div className="project__overview--left">
                                    <h3 className="h3">Overview</h3>
                                    <p>{__.description}</p>
                                </div>
                                <div className="project__overview--right">
                                    <h3 className="h3">Tools</h3>
                                    <ul>
                                        {__.tools.map((tool) => {
                                            return (
                                                <li>{tool}</li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className={`project__section ${discipline}-bg-light`}>
                            <div>
                                <FontAwesomeIcon icon={faMinus}/>
                                <h3 className="h3">Introduction</h3>
                            </div>
                            {__.intro.map((paragraph) => {
                                return <p className="">{paragraph}</p>
                            })}
                        </div>
                        <div className="">
                            {__.steps.map((step, index) => {
                                let sectionBgColour;
                                index % 2 == 0 ? sectionBgColour = '' : sectionBgColour = discipline + "-bg-light";
                            return (<div className={`project__section ${sectionBgColour}`}>
                                <div>
                                    <FontAwesomeIcon icon={faMinus}/>
                                    <h3 className="h3">{step.name}</h3>
                                </div>
                                {step.description.map((paragraph) => {
                                    return <p>{paragraph}</p>
                                })}
                                {step.imgs && step.imgs.map((img) => {
                                    return (
                                        <div className="flex-c">
                                            <img src={img} alt={step.name} className="project__img" />
                                        </div>
                                    )
                                })}
                                </div>
                            )})}
                        </div>
                    </div>
                    <Link to={workSectionPath} className='project__section'>
                        <FontAwesomeIcon icon={faChevronLeft} />
                        <span>Back to Projects Page</span>
                    </Link>
                </div>
            )
        }
    })

    return selectedProjectObj;
}