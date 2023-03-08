// Vendor imports
import React from "react";
import { Link, useLocation } from "react-router-dom";

function Card({project}) {

    const location = useLocation();

    let path = "";

    location.pathname === '/' ? path = `work/${project.path}` : path = `${location.pathname}/${project.path}`;

    // Define the project's discipline to display appropriate background colour
    let discipline = project.discipline === 'development' ? 'dev' : 'design';

    return (
        <Link to={path} title={project.title} className="flex-c card">
            <img src={project.images.thumb} alt={project.images.thumbAlt} className="card__img"/>
            <div className="flex-c card__info">
                <h3 className="card__info--title">{project.title}</h3>
                <span className="h4 card__chip">{project.chip}</span>
                <p className="card__info--description">{project.description}</p>
                <ul className="flex-c card__tools">
                    {project.featuredTools.map((__) => {
                        return (
                            <li className="flex-c">
                                <img src={__.icon} alt={__.name} className="card__tool-icon"/>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </Link>
    );
};

export default Card;