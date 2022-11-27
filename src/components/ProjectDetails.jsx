// Vendor imports
import React from "react";
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
import acnhVillagers from '../assets/imgs/projects/acnh-thumb.jpg';
import apod from '../assets/imgs/projects/apod-thumb.jpg';

function ProjectDetails () {

    // Access the correct project through the url path
    let location = useLocation();
    let selectedProjectPath = location.pathname.toString().split("/");

    // [2] is the array's index for the project path
    let selectedProjectObj = Portfolio.map((__) => {
        if (__.path === selectedProjectPath[2]) {

            // Define the page's title
            let selectedProjectDiscipline;
            __.discipline === 'design' ? selectedProjectDiscipline = "UI/UX & Graphic Design Project" : selectedProjectDiscipline = "Web Development Project";

            let projectContent;
            let projectImgs = [];
            switch(__.path){
                case "paper-lantern":
                    projectImgs.push(pLIntro, pLPersona1, pLPersona2, pLWireframes1, pLWireframes2, pLTest1, pLTest2);
                    projectContent = (<>
                                        <div className="flex-c">
                                            <img src={projectImgs[0]} alt="" className="project__img" />
                                        </div>
                                        {__.intro.map((paragraph) => {
                                            return <p className="project__intro">{paragraph}</p>
                                        })}
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
                                                    <p>{step.description}</p>
                                                </div>
                                        )})}
                                        </div>
                                    </>);
                    break;
                case "guava-punch":
                    projectImgs.push(gPLogo, gPPoster, gPSketches);
                    projectContent = (<>
                                        <div className="flex-c">
                                            <img src={projectImgs[0]} alt="" className="project__img" />
                                        </div>
                                        {__.intro.map((paragraph) => {
                                            return <p className="project__intro">{paragraph}</p>
                                        })}
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
                    projectImgs.push(acnhVillagers);
                    break;
                case "apod":
                    projectImgs.push(apod);
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
                            {projectContent}
                        </div>
                    </div>
                </div>
            )
        }
    })

    return selectedProjectObj;
}

export default ProjectDetails;