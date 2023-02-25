// Vendor imports
import React from "react";

// Project imports
import { PROJECTS } from "../../data/projects";

export default function APOD() {

    const project = PROJECTS[3];
    return (
    <>
        <div className="project__steps">
        {project.steps.slice(0,2).map((step) => {
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
        {project.steps.slice(2,3).map((step) => {
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
        {project.steps.slice(4).map((step) => {
        return (<div className="flex-c project__step">
                    <h3>{step.name}</h3>
                    <div>
                        <p>{step.description}</p>
                        <p>Visit the project's <a href="https://github.com/monica-zarate/nasa-apod" title="APOD Project Repository" target="_blank">repository</a> and the <a href="http://apod.monicazaratecortes.com/" title="Monica's APOD Website" target="_blank">live site</a>.</p>
                    </div>
                </div>
        )})}
    </>
    )
};