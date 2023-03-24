// Vendor imports
import React, { useEffect, useState } from "react";
import { motion as m } from "framer-motion";
import SEO from "./SEO";

// Project imports
import Card from "./Card";
import { PROJECTS } from "../data/projects";

export default function Work() {

    const seoData = {
        title: 'Monica Zarate - Work',
        description: 'UX Design and Web Development Projects.',
    };

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
        <m.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.3, ease: 'easeInOut'}} exit={{opacity: 0}} className="projects">
            <SEO title={seoData.title} description={seoData.description}/>
            <div className="projects__wrapper">
                <h2 className="projects__title">Projects</h2>
                <div className="flex-c projects__chips">
                    <span id="design" className={designProjects === true ? "chip-btn--active" : "chip-btn"}>UX Design</span>
                    <span id="dev" className={devProjects === true ? "chip-btn--active" : "chip-btn"}>Development</span>
                </div>
                {printProjects()}
            </div>
        </m.div>
    )
}