// Vendor imports
import React from "react";

function Card({project}) {
    return (
    <a href="#" title="" className="flex-c card">
        <img src={project.thumb} alt={project.thumbAlt} className="card__img"/>
        <div className="card__info">
            <span className="card__info--chip">{project.discipline}</span>
            <h3 className="card__info--title">{project.title}</h3>
            <p className="card__info--description">{project.description}</p>
        </div>
    </a>
    )
};

export default Card;