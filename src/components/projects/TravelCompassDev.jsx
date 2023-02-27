// Vendor imports
import React from "react";

// Project imports
import { PROJECTS } from "../../data/projects";

export default function TravelCompassDev() {

    const project = PROJECTS[6];
    return (
    <>
        <div className="project__steps">
        {project.steps.slice(0,1).map((step) => {
        return (<div className="flex-c project__step">
                    <h3>{step.name}</h3>
                    <p>{step.description}</p>
                </div>
        )})}
        </div>
        <div className="flex-c">
            <img src={project.images[1]} alt="" className="project__img" />
        </div>
        <div className="project__steps">
        {project.steps.slice(1,3).map((step) => {
        return (<div className="flex-c project__step">
                    <h3>{step.name}</h3>
                    <p>{step.description}</p>
                </div>
        )})}
        </div>
        <div className="flex-c">
            <img src={project.images[2]} alt="" className="project__img" />
        </div>
        <div className="project__steps">
        {project.steps.slice(3,4).map((step) => {
        return (<div className="flex-c project__step">
                    <h3>{step.name}</h3>
                    <p>{step.description}</p>
                </div>
        )})}
        </div>
        <div className="flex-c">
            <img src={project.images[3]} alt="" className="project__img" />
        </div>
        {project.steps.slice(4,5).map((step) => {
        return (<div className="flex-c project__step">
                    <h3>{step.name}</h3>
                    <p>{step.description}</p>
                </div>
        )})}
        {project.steps.slice(5).map((step) => {
        return (<div className="flex-c project__step">
                    <h3>{step.name}</h3>
                    <div>
                        <p>{step.description}</p>
                        <p>Visit the project's <a href="https://github.com/monica-zarate/travel-compass" title="Travel Compass Project Repository" target="_blank">repository</a>.</p>
                    </div>
                </div>
        )})}
    </>
    )
};