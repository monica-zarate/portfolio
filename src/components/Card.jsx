// Vendor imports
import React from "react";
import { Link, useLocation } from "react-router-dom";

function Card({project}) {

    const location = useLocation();

    let path = "";

    location.pathname === '/' ? path = `${project.discipline}/${project.path}` : path = `${location.pathname}/${project.path}`;

    let completed;
    if (project.path === 'guava-punch' || project.path === 'paper-lantern') {
        completed = <Link to={path} title={project.title} className="flex-c card">
        <img src={project.thumb} alt={project.thumbAlt} className="card__img"/>
        <div className="card__info">
            <span className="card__info--chip">{project.chip}</span>
            <h3 className="card__info--title">{project.title}</h3>
            <p className="card__info--description">{project.description}</p>
        </div>
    </Link>
    } else {
        completed = <a href="#" title={project.title} className="flex-c card">
        <img src={project.thumb} alt={project.thumbAlt} className="card__img"/>
        <div className="card__info">
            <span className="card__info--chip">{project.chip}</span>
            <h3 className="card__info--title">{project.title}</h3>
            <p className="card__info--description">{project.description}</p>
        </div>
    </a>
    }

    return completed;
};

export default Card;