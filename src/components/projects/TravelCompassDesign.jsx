// Vendor imports
import React from "react";

// Project imports
import { PROJECTS } from "../../data/projects";

export default function TravelCompassDesign() {

    const project = PROJECTS[4];
    return (
    <>
        <div className="project__steps">
        {project.steps.slice(0,2).map((step) => {
        return (<div className="flex-c project__step">
                    <h3>{step.name}</h3>
                    <p>{step.description}</p>
                </div>
        )})}
        <div className="flex-c">
            <img src={project.images[1]} alt="" className="project__img" />
        </div>
        {project.steps.slice(2,3).map((step) => {
        return (<div className="flex-c project__step">
                    <h3>{step.name}</h3>
                    <p>{step.description}</p>
                </div>
        )})}
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
        {project.steps.slice(5,6).map((step) => {
        return (<div className="flex-c project__step">
                    <h3>{step.name}</h3>
                    <p>{step.description}</p>
                </div>
        )})}
        <div className="flex-c">
            <img src={project.images[4]} alt="" className="project__img" />
        </div>
        {project.steps.slice(6,7).map((step) => {
        return (<div className="flex-c project__step">
                    <h3>{step.name}</h3>
                    <p>{step.description}</p>
                </div>
        )})}
        {project.steps.slice(7).map((step) => {
        return (<div className="flex-c project__step">
                    <h3>{step.name}</h3>
                    <div>
                        <p>{step.description}</p>
                        <p>Visit the Project's Prototype <a href="https://xd.adobe.com/view/70b5d4ab-3e64-42bc-a21c-636217837e02-25e6/?fullscreen" title="Travel Compass: Add New Trip" target="_blank">here</a>.</p>
                    </div>
                </div>
        )})}
        </div>
    </>
    )
};