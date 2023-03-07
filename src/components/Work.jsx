// Vendor imports
import React, { useEffect, useState } from "react";

// Project imports
import Card from "./Card";
import { PROJECTS } from "../data/projects";

export default function Work() {

    const [designProjects, setDesignProjects] = useState(false);
    const [devProjects, setDevProjects] = useState(false);

    let toggleDesign = () => {
        setDesignProjects(designProjects => !designProjects);
        setDevProjects(false);
    };

    let toggleDev = () => {
        setDevProjects(devProjects => !devProjects);
        setDesignProjects(false);
    };

    useEffect(() => {
        window.scrollTo(0,0);

        const designProjectsChip = document.querySelector('#design');
        const devProjectsChip = document.querySelector('#dev');

        designProjectsChip.addEventListener('click', toggleDesign);
        devProjectsChip.addEventListener('click', toggleDev);
    }, []);

    let printProjects = () => {
        let projectsArr = [];
        if (designProjects === true) {
            projectsArr = PROJECTS.filter((__) => {
                return __.discipline === 'design';
            })
        } else if (devProjects === true) {
            projectsArr = PROJECTS.filter((__) => {
                return __.discipline === 'development';
            })
        } else {
            projectsArr = PROJECTS;
        }
        return (
            projectsArr.slice(0).reverse().map((__) => {
                return <Card project={__} key={__.id}/>   
            })
        )
    };

    return (
        <div className="projects">
            <div className="projects__wrapper">
                <h2 className="projects__title">Projects</h2>
                <div className="flex-c projects__chips">
                    <span id="design" className={designProjects === true ? "design-chip--active" : "design-chip"}>UX Design</span>
                    <span id="dev" className={devProjects === true ? "dev-chip--active" : "dev-chip"}>Development</span>
                </div>
                {printProjects()}
            </div>
        </div>
    )
}