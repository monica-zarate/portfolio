// Vendor imports
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Project imports
import Portfolio from "./portfolio.json";
import pLIntro from '../assets/imgs/projects/paper-lantern-1.png';
import pLPersona1 from '../assets/imgs/projects/paper-lantern-2.png';
import pLPersona2 from '../assets/imgs/projects/paper-lantern-3.png';
import pLWireframes1 from '../assets/imgs/projects/paper-lantern-4.png';
import pLWireframes2 from '../assets/imgs/projects/paper-lantern-5.png';
import pLTest1 from '../assets/imgs/projects/paper-lantern-6.png';
import pLTest2 from '../assets/imgs/projects/paper-lantern-7.png';
import gPLogo from '../assets/imgs/projects/guava-punch-1.jpg';
import gPPoster from '../assets/imgs/projects/guava-punch-2.jpg';
import gPSketches from '../assets/imgs/projects/guava-punch-3.jpg';
import acnh1 from '../assets/imgs/projects/acnh-1.png';
import acnh2 from '../assets/imgs/projects/acnh-2.png';
import acnh3 from '../assets/imgs/projects/acnh-3.png';
import acnh4 from '../assets/imgs/projects/acnh-4.png';
import acnh5 from '../assets/imgs/projects/acnh-5.png';
import apod1 from '../assets/imgs/projects/apod-1.png';
import apod2 from '../assets/imgs/projects/apod-2.png';
import apod3 from '../assets/imgs/projects/apod-3.png';
import apod4 from '../assets/imgs/projects/apod-4.png';

function ProjectDetails () {

    useEffect(() => {
        window.scrollTo(0,0);
    }, []);

    // Access the correct project through the url path
    let location = useLocation();
    let selectedProjectPath = location.pathname.toString().split("/");

    // [2] is the array's index for the project path
    let selectedProjectObj = Portfolio.map((__) => {
        if (__.path === selectedProjectPath[2]) {

            // Define the page's title
            let selectedProjectDiscipline;
            __.discipline === 'design' ? selectedProjectDiscipline = "UI/UX & Graphic Design Project" : selectedProjectDiscipline = "Web Development Project";

            let projectSteps;
            let projectImgs = [];
            switch(__.path){
                case "paper-lantern":
                    projectImgs.push(pLIntro, pLPersona1, pLPersona2, pLWireframes1, pLWireframes2, pLTest1, pLTest2);
                    projectSteps = (<>
                                        <div className="project__steps">
                                        {__.steps.slice(0,3).map((step) => {
                                        return (<div className="flex-c project__step">
                                                    <h3>{step.name}</h3>
                                                    <p>{step.description}</p>
                                                </div>
                                        )})}
                                        <div className="flex-c">
                                            <img src={projectImgs[1]} alt="" className="project__img" />
                                        </div>
                                        <div className="flex-c">
                                            <img src={projectImgs[2]} alt="" className="project__img" />
                                        </div>
                                        {__.steps.slice(3,5).map((step) => {
                                        return (<div className="flex-c project__step">
                                                    <h3>{step.name}</h3>
                                                    <p>{step.description}</p>
                                                </div>
                                        )})}
                                        <div className="flex-c">
                                            <img src={projectImgs[3]} alt="" className="project__img" />
                                        </div>
                                        <div className="flex-c">
                                            <img src={projectImgs[4]} alt="" className="project__img" />
                                        </div>
                                        {__.steps.slice(5,7).map((step) => {
                                        return (<div className="flex-c project__step">
                                                    <h3>{step.name}</h3>
                                                    <p>{step.description}</p>
                                                </div>
                                        )})}
                                        <div className="flex-c">
                                            <img src={projectImgs[5]} alt="" className="project__img" />
                                        </div>
                                        <div className="flex-c">
                                            <img src={projectImgs[6]} alt="" className="project__img" />
                                        </div>
                                        {__.steps.slice(7).map((step) => {
                                        return (<div className="flex-c project__step">
                                                    <h3>{step.name}</h3>
                                                    <div>
                                                        <p>{step.description}</p>
                                                        <p>Visit the Website Prototype <a href="https://xd.adobe.com/view/25880ba9-718b-436e-b3b4-04ce7bf95b87-70db/?fullscreen" title="Paper Lantern: Search and checkout process" target="_blank">here</a>, and the Mobile App Prototype <a href="https://www.figma.com/proto/31WcXdZsapuWQgdD1O0C1k/Paper-Lantern-Phase-2?page-id=2%3A3&node-id=21%3A498&viewport=77%2C424%2C0.25&scaling=scale-down&starting-point-node-id=21%3A498" title="" target="_blank">here</a>.</p>
                                                    </div>
                                                </div>
                                        )})}
                                        </div>
                                    </>);
                    break;
                case "guava-punch":
                    projectImgs.push(gPLogo, gPPoster, gPSketches);
                    projectSteps = (<>
                                        <div className="flex-c">
                                            <img src={projectImgs[1]} alt="" className="project__img" />
                                        </div>
                                        <div className="project__steps">
                                        {__.steps.slice(0,3).map((step) => {
                                        return (<div className="flex-c project__step">
                                                    <h3>{step.name}</h3>
                                                    <p>{step.description}</p>
                                                </div>
                                        )})}
                                        <div className="flex-c">
                                            <img src={projectImgs[2]} alt="" className="project__img" />
                                        </div>
                                        {__.steps.slice(3).map((step) => {
                                            return (<div className="flex-c project__step">
                                                        <h3>{step.name}</h3>
                                                        <p>{step.description}</p>
                                                    </div>
                                            )})}
                                        </div>
                                    </>);
                    break;
                case "acnh":
                    projectImgs.push(acnh1, acnh2, acnh3, acnh4, acnh5);
                    projectSteps = (<>
                                        <div className="project__steps">
                                        {__.steps.slice(0,1).map((step) => {
                                        return (<div className="flex-c project__step">
                                                    <h3>{step.name}</h3>
                                                    <p>{step.description}</p>
                                                </div>
                                        )})}
                                        <div className="flex-c">
                                            <img src={projectImgs[1]} alt="" className="project__img" />
                                        </div>
                                        {__.steps.slice(1,2).map((step) => {
                                            return (<div className="flex-c project__step">
                                                        <h3>{step.name}</h3>
                                                        <p>{step.description}</p>
                                                    </div>
                                            )})}
                                        <div className="flex-c">
                                            <img src={projectImgs[2]} alt="" className="project__img" />
                                        </div>
                                        {__.steps.slice(2,4).map((step) => {
                                            return (<div className="flex-c project__step">
                                                        <h3>{step.name}</h3>
                                                        <p>{step.description}</p>
                                                    </div>
                                            )})}
                                        <div className="flex-c">
                                            <img src={projectImgs[3]} alt="" className="project__img" />
                                        </div>
                                        {__.steps.slice(4,5).map((step) => {
                                            return (<div className="flex-c project__step">
                                                        <h3>{step.name}</h3>
                                                        <p>{step.description}</p>
                                                    </div>
                                            )})}
                                        <div className="flex-c">
                                            <img src={projectImgs[4]} alt="" className="project__img" />
                                        </div>
                                        {__.steps.slice(5).map((step) => {
                                            return (<div className="flex-c project__step">
                                                        <h3>{step.name}</h3>
                                                        <div>
                                                            <p>{step.description}</p>
                                                            <p>Visit the project's <a href="https://github.com/monica-zarate/acnh_residents" title="ACNH PHP Project Repository" target="_blank">repository</a>.</p>
                                                        </div>
                                                    </div>
                                            )})}
                                        </div>
                                    </>);
                    break;
                case "apod":
                    projectImgs.push(apod1, apod2, apod3, apod4);
                    projectSteps = (<>
                                        <div className="project__steps">
                                        {__.steps.slice(0,2).map((step) => {
                                        return (<div className="flex-c project__step">
                                                    <h3>{step.name}</h3>
                                                    <p>{step.description}</p>
                                                </div>
                                        )})}
                                        </div>
                                        <div className="flex-c">
                                            <img src={projectImgs[1]} alt="" className="project__img" />
                                        </div>
                                        <div className="project__steps">
                                        {__.steps.slice(2,3).map((step) => {
                                        return (<div className="flex-c project__step">
                                                    <h3>{step.name}</h3>
                                                    <p>{step.description}</p>
                                                </div>
                                        )})}
                                        </div>
                                        <div className="flex-c">
                                            <img src={projectImgs[2]} alt="" className="project__img" />
                                        </div>
                                        <div className="project__steps">
                                        {__.steps.slice(3,4).map((step) => {
                                        return (<div className="flex-c project__step">
                                                    <h3>{step.name}</h3>
                                                    <p>{step.description}</p>
                                                </div>
                                        )})}
                                        </div>
                                        <div className="flex-c">
                                            <img src={projectImgs[3]} alt="" className="project__img" />
                                        </div>
                                        {__.steps.slice(4).map((step) => {
                                        return (<div className="flex-c project__step">
                                                    <h3>{step.name}</h3>
                                                    <div>
                                                        <p>{step.description}</p>
                                                        <p>Visit the project's <a href="https://github.com/monica-zarate/nasa-apod" title="APOD Project Repository" target="_blank">repository</a> and the <a href="http://apod.monicazaratecortes.com/" title="Monica's APOD Website" target="_blank">live site</a>.</p>
                                                    </div>
                                                </div>
                                        )})}
                                    </>);
                    break;
            }

            return (
                <div className="project">
                    <div className="project__wrapper">
                        <h2 className="project__section-title">{selectedProjectDiscipline}</h2>
                        <div className="project__card">
                            <h1 className="project__title">{__.title}</h1>
                            <h3 className="project__subtitle">{__.subtitle}</h3>
                            <div className="flex-c project__overview">
                                <div className="project__overview--left">
                                    <h2>Overview</h2>
                                    <p>{__.description}</p>
                                </div>
                                <div className="project__overview--right">
                                    <h2>Tools</h2>
                                    <ul>
                                        {__.tools.map((tool) => {
                                            return (
                                                <li>{tool}</li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </div>
                            <div className="flex-c">
                                <img src={projectImgs[0]} alt="" className="project__img" />
                            </div>
                            {__.intro.map((paragraph) => {
                                return <p className="project__intro">{paragraph}</p>
                            })}
                            {projectSteps}
                        </div>
                    </div>
                </div>
            )
        }
    })

    return selectedProjectObj;
}

export default ProjectDetails;