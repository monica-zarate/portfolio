// Vendor imports
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion as m } from "framer-motion";

function Card({project}) {

    const location = useLocation();

    let path = "";

    location.pathname === '/' ? path = `work/${project.path}` : path = `${location.pathname}/${project.path}`;

    return (
        <m.div layout initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.95 }} style={{ x: 0 }} transition={{ease: 'easeInOut'}} className="card-wrap">
            <Link to={path} title={project.title} className="flex-c card">
                <img src={project.images.thumb} alt={project.images.thumbAlt} className="card__img"/>
                <div className="flex-c card__info">
                    <h3 className="card__info--title">{project.title}</h3>
                    <span className="h4 card__chip">{project.chip}</span>
                    <p className="card__info--description">{project.description}</p>
                    <ul className="flex-c card__tools">
                        {project.featuredTools.map((__, key) => {
                            return (
                                <li className="flex-c" key={key}>
                                    <img src={__.icon} alt={__.name} className="card__tool-icon"/>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </Link>
        </m.div>
    );
};

export default Card;