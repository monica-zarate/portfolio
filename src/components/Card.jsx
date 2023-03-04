// Vendor imports
import React from "react";
import { Link, useLocation } from "react-router-dom";

function Card({project}) {

    const location = useLocation();

    let path = "";

    location.pathname === '/' ? path = `work/${project.path}` : path = `${location.pathname}/${project.path}`;

    return (
        <Link to={path} title={project.title} className="flex-c card">
            <img src={project.images.thumb} alt={project.images.thumbAlt} className="card__img"/>
            <div className="card__info">
                <span className="card__info--chip">{project.chip}</span>
                <h3 className="card__info--title">{project.title}</h3>
                <p className="card__info--description">{project.description}</p>
            </div>
        </Link>
    );
};

export default Card;