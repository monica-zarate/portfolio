// Vendor imports
import React from "react";

// Project imports
import { PROJECTS } from "../../data/projects";

export default function GuavaPunch() {

    const project = PROJECTS[0];
    return (
    <>
        <div className="flex-c">
            <img src={project.images[1]} alt="" className="project__img" />
        </div>
        <div className="project__steps">
        {project.steps.slice(0,3).map((step) => {
        return (<div className="flex-c project__step">
                    <h3>{step.name}</h3>
                    <p>{step.description}</p>
                </div>
        )})}
        <div className="flex-c">
            <img src={project.images[2]} alt="" className="project__img" />
        </div>
        {project.steps.slice(3).map((step) => {
            return (<div className="flex-c project__step">
                        <h3>{step.name}</h3>
                        <p>{step.description}</p>
                    </div>
            )})}
        </div>
    </>
    )
};