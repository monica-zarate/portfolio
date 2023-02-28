// Vendor imports
import React from "react";

// Project imports
import { PROJECTS } from "../../data/projects";

export default function Billy() {

    const project = PROJECTS[5];

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
        {project.steps.slice(3,4).map((step) => {
        return (<div className="flex-c project__step">
                    <h3>{step.name}</h3>
                    <p>{step.description}</p>
                </div>
        )})}
        <div className="flex-c">
            <img src={project.images[4]} alt="" className="project__img" />
        </div>
        {project.steps.slice(4,6).map((step) => {
        return (<div className="flex-c project__step">
                    <h3>{step.name}</h3>
                    <p>{step.description}</p>
                </div>
        )})}
        <div className="flex-c">
            <img src={project.images[3]} alt="" className="project__img" />
        </div>
        {project.steps.slice(6,7).map((step) => {
        return (<div className="flex-c project__step">
                    <h3>{step.name}</h3>
                    <p>{step.description}</p>
                </div>
        )})}
        <div className="flex-c">
            <img src={project.images[2]} alt="" className="project__img" />
        </div>
        {project.steps.slice(7,8).map((step) => {
        return (<div className="flex-c project__step">
                    <h3>{step.name}</h3>
                    <p>{step.description}</p>
                </div>
        )})}
        {project.steps.slice(8).map((step) => {
        return (<div className="flex-c project__step">
                    <h3>{step.name}</h3>
                    <div>
                        <p>{step.description}</p>
                        <p>Visit the Project's Prototype <a href="https://www.figma.com/proto/IgRu2NjUyhF1jB0D9RofhD/Expenses-Tracker-App?page-id=0%3A1&node-id=33%3A317&viewport=1328%2C-705%2C0.27&scaling=min-zoom&starting-point-node-id=33%3A317" title="Billy: Add New Expense" target="_blank">here</a>.</p>
                    </div>
                </div>
        )})}
        </div>
    </>
    )
};