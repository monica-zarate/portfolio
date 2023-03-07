// Vendor imports
import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faMinus } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Project imports
import { PROJECTS } from "../data/projects";

export default function ProjectDetails () {

    useEffect(() => {
        window.scrollTo(0,0);
        AOS.init();
    },[]);

    

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
            let discipline = __.discipline === 'development' ? 'dev' : 'design';
            
            return (
                <div className="project">
                    <div className={`flex-c project__hero ${discipline}-bg`}>
                        <img src={__.images.featuredImg} alt={__.images.featuredImgAlt} className="project__img" data-aos="fade-in" data-aos-duration="750" data-aos-easing="ease-in"/>
                    </div>
                    <div className="project__wrapper">
                        <div className="project__section">
                            <div className="project__section-content">
                                <h2 className="project__title h2">{__.title}</h2>
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
                                            {__.tools.map((tool) => {
                                                return (
                                                    <li className="flex-c">
                                                        <img src={tool.icon} alt={tool.name} />
                                                        <p>{tool.name}</p>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                </div>
                                <div className="flex-c project__ctas">
                                    {__.links.repo && <a href={__.links.repo} title={__.links.repoTitle} target="_blank" className={`${discipline}-btn`}>GitHub Repository</a>}
                                    {__.links.figmaPrototype && <a href={__.links.figmaPrototype} title={__.links.figmaPrototypeTitle} target="_blank" className={`${discipline}-btn`}>Figma Prototype</a>}
                                    {__.links.xdPrototype && <a href={__.links.xdPrototype} title={__.links.xdPrototypeTitle} target="_blank" className={`${discipline}-btn`}>Adobe Xd Prototype</a>}
                                    {__.links.site && <a href={__.links.site} title={__.links.siteTitle} target="_blank" className={`${discipline}-btn`}>Project's Website</a>}
                                </div>
                            </div>
                        </div>
                        <div className={`project__section ${discipline}-bg-light`}>
                            <div className="project__section-content">
                                <div>
                                    <FontAwesomeIcon icon={faMinus}/>
                                    <h3 className="h3">Introduction</h3>
                                </div>
                                {__.intro.map((paragraph) => {
                                    return <p className="">{paragraph}</p>
                                })}
                            </div>
                        </div>
                        <div className="">
                            {__.steps.map((step, index) => {
                                let sectionBgColour = index % 2 == 0 ? '' : discipline + '-bg-light';
                            return (<div className={`project__section ${sectionBgColour}`}>
                                <div className="project__section-content">
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
                                                <img src={img} alt={step.name} className="project__img" data-aos="fade-in" data-aos-duration="750" data-aos-easing="ease-in"/>
                                            </div>
                                        )
                                    })}
                                    </div>
                                </div>
                            )})}
                        </div>
                        <div className={"project__section"}>
                            <div className="project__section-content">
                                {__.links.repo && <p>Find the project's <a href={__.links.repo} title={__.links.repoTitle} target="_blank" className={`${discipline}-btn`}>Github Repository</a>.</p>}
                                {__.links.figmaPrototype && <p>Find the project's <a href={__.links.figmaPrototype} title={__.links.figmaPrototypeTitle} target="_blank" className={`${discipline}-btn`}>Figma Prototype</a>.</p>}
                                {__.links.xdPrototype && <p>Find the project's <a href={__.links.xdPrototype} title={__.links.xdPrototypeTitle} target="_blank" className={`${discipline}-btn`}>Adobe Xd Prototype</a>.</p>}
                                {__.links.site && <p>Find the project's <a href={__.links.site} title={__.links.siteTitle} target="_blank" className={`${discipline}-btn`}>website</a>.</p>}
                            </div>
                        </div>
                        <div className='project__section project__nav'>
                            <div className="project__section-content">
                                <Link to={workSectionPath} className="flex-c project__nav-wrap">
                                    <FontAwesomeIcon icon={faChevronLeft} className="dark-color"/>
                                    <span>Back to Projects Page</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    })

    return selectedProjectObj;
}