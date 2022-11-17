// Vendor imports
import React from "react";
import { Link } from "react-router-dom";

function ProjectDetails () {
    return (
        <div className="project">
            <div className="project__wrapper">
                <h2 className="project__section-title"></h2>
                <div className="project__card">
                    <h3 className="project__title"></h3>
                    <p className="project__subtitle"></p>
                    <div className="project__overview">
                        <div className="project__overview--left">
                            <h4>Overview</h4>
                            <p></p>
                        </div>
                        <div className="project__overview--right">
                            <h4>Tools</h4>
                            <ul></ul>
                        </div>
                    </div>
                    <img src="" alt="" />
                    <p></p>
                    <div>
                        <h4></h4>
                        <p></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails;