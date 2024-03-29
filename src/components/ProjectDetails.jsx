// Vendor imports
import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { motion as m } from "framer-motion";
import SEO from "./SEO";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faMinus } from '@fortawesome/free-solid-svg-icons';

// Project imports
import { PROJECTS } from "../data/projects";

export default function ProjectDetails () {

    useEffect(() => {
        window.scrollTo(0,0);
    },[]);

    // Access the correct project through the url path
    let location = useLocation();
    let selectedProjectPath = location.pathname.toString().split("/");
    let workSectionPath = "/work";

    // [2] is the array's index for the project path
    let selectedProjectObj = PROJECTS.map((__, key) => {

        const seoData = {
            title: `Monica Zarate - ${__.title}`,
            description: `Monica Zarate ${__.discipline} project. ${__.description}`,
        };

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
                    break;
                default:
                    selectedProjectDiscipline = "";
            }
            
            return (
                <m.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.5, ease: 'easeInOut'}} exit={{opacity: 0}} className="project" key={key}>
                    <SEO title={seoData.title} description={seoData.description}/>
                    <div className="project__hero projects-bg">
                        <div className="project__section-content">
                            <h2 className="project__title h2">{__.title}</h2>
                            <img src={__.images.featuredImg} alt={__.images.featuredImgAlt} className="project__img"/>
                        </div>
                    </div>
                    <div className="project__wrapper">
                        <div className="project__section">
                            <div className="project__section-content">
                                <h3 className="project__subtitle h3">{__.subtitle}</h3>
                                <h4 className="project__discipline h4">{selectedProjectDiscipline}</h4>
                                <div className="project__overview">
                                    <div className="project__overview--left">
                                        <h3 className="h3">Overview</h3>
                                        <p>{__.description}</p>
                                    </div>
                                    <div className="project__overview--right">
                                        <h3 className="h3">Tools</h3>
                                        <ul>
                                            {__.tools.map((tool, key) => {
                                                return (
                                                    <li className="flex-c" key={key}>
                                                        <img src={tool.icon} alt={tool.name} />
                                                        <p>{tool.name}</p>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                </div>
                                <div className="project__ctas">
                                    {__.links.repo && <a href={__.links.repo} title={__.links.repoTitle} target="_blank" rel="noreferrer" className="projects-btn">GitHub Repository</a>}
                                    {__.links.figmaPrototype && <a href={__.links.figmaPrototype} title={__.links.figmaPrototypeTitle} target="_blank" rel="noreferrer" className="projects-btn">Figma Prototype</a>}
                                    {__.links.xdPrototype && <a href={__.links.xdPrototype} title={__.links.xdPrototypeTitle} target="_blank" rel="noreferrer" className="projects-btn">Adobe Xd Prototype</a>}
                                    {__.links.site && <a href={__.links.site} title={__.links.siteTitle} target="_blank" rel="noreferrer" className="projects-btn">Project's Website</a>}
                                </div>
                            </div>
                        </div>
                        <div className="project__section projects-bg-light">
                            <div className="project__section-content">
                                <div>
                                    <FontAwesomeIcon icon={faMinus}/>
                                    <h3 className="h3">Introduction</h3>
                                </div>
                                {__.intro.map((paragraph, key) => {
                                    return <p key={key}>{paragraph}</p>
                                })}
                            </div>
                        </div>
                        <div>
                            {__.steps.map((step, index) => {
                                let sectionBgColour = index % 2 === 0 ? '' : 'projects-bg-light';
                            return (<div className={`project__section ${sectionBgColour}`} key={index}>
                                <div className="project__section-content">
                                    <div>
                                        <FontAwesomeIcon icon={faMinus}/>
                                        <h3 className="h3">{step.name}</h3>
                                    </div>
                                    {step.description.map((paragraph, key) => {
                                        return <p key={key}>{paragraph}</p>
                                    })}
                                    {step.imgs && step.imgs.map((img, key) => {
                                        return (
                                            <div className="flex-c" key={key}>
                                                <img src={img} alt={step.name} className="project__img"/>
                                            </div>
                                        )
                                    })}
                                    </div>
                                </div>
                            )})}
                        </div>
                        <div className={"project__section"}>
                            <div className="project__section-content">
                                {__.links.repo && <a href={__.links.repo} title={__.links.repoTitle} target="_blank" rel="noreferrer" className="projects-btn">Github Repository</a>}
                                {__.links.figmaPrototype && <a href={__.links.figmaPrototype} title={__.links.figmaPrototypeTitle} target="_blank" rel="noreferrer" className="projects-btn">Figma Prototype</a>}
                                {__.links.xdPrototype && <a href={__.links.xdPrototype} title={__.links.xdPrototypeTitle} target="_blank" rel="noreferrer" className="projects-btn">Adobe Xd Prototype</a>}
                                {__.links.site && <a href={__.links.site} title={__.links.siteTitle} target="_blank" rel="noreferrer" className="projects-btn">website</a>}
                            </div>
                        </div>
                        <div className='project__section project__nav'>
                            <div className="project__section-content">
                                <Link to={workSectionPath} className="flex-c project__nav-wrap">
                                    <FontAwesomeIcon icon={faChevronLeft}/>
                                    <span>Back to Projects Page</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </m.div>
            )
        }

        return (<div key={key}></div>);
    })

    return selectedProjectObj;
}