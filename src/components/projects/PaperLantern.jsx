// Vendor imports
import React from "react";

// Project imports
import { PROJECTS } from "../../data/projects";

export default function PaperLantern() {

    const project = PROJECTS[1];
    return (
    <>
        <div className="project__steps">
        {project.steps.slice(0,3).map((step) => {
        return (<div className="flex-c project__step">
                    <h3>{step.name}</h3>
                    <p>{step.description}</p>
                </div>
        )})}
        <div className="flex-c">
            <img src={project.images[1]} alt="" className="project__img" />
        </div>
        <div className="flex-c">
            <img src={project.images[2]} alt="" className="project__img" />
        </div>
        {project.steps.slice(3,5).map((step) => {
        return (<div className="flex-c project__step">
                    <h3>{step.name}</h3>
                    <p>{step.description}</p>
                </div>
        )})}
        <div className="flex-c">
            <img src={project.images[3]} alt="" className="project__img" />
        </div>
        <div className="flex-c">
            <img src={project.images[4]} alt="" className="project__img" />
        </div>
        {project.steps.slice(5,7).map((step) => {
        return (<div className="flex-c project__step">
                    <h3>{step.name}</h3>
                    <p>{step.description}</p>
                </div>
        )})}
        <div className="flex-c">
            <img src={project.images[5]} alt="" className="project__img" />
        </div>
        <div className="flex-c">
            <img src={project.images[6]} alt="" className="project__img" />
        </div>
        {project.steps.slice(7).map((step) => {
        return (<div className="flex-c project__step">
                    <h3>{step.name}</h3>
                    <div>
                        <p>{step.description}</p>
                        <p>Visit the Website Prototype <a href="https://xd.adobe.com/view/25880ba9-718b-436e-b3b4-04ce7bf95b87-70db/?fullscreen" title="Paper Lantern: Search and checkout process" target="_blank">here</a>, and the Mobile App Prototype <a href="https://www.figma.com/proto/31WcXdZsapuWQgdD1O0C1k/Paper-Lantern-Phase-2?page-id=2%3A3&node-id=21%3A498&viewport=77%2C424%2C0.25&scaling=scale-down&starting-point-node-id=21%3A498" title="" target="_blank">here</a>.</p>
                    </div>
                </div>
        )})}
        </div>
    </>
    )
};