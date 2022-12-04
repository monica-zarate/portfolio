import React, { useEffect } from "react";
import { Link } from "react-router-dom";

// Project imports
import notFoundImg from '../assets/imgs/not-found.svg';

function NotFound() {

    useEffect(() => {
        window.scrollTo(0,0);
    }, []);

    return (
        <div className="not-found">
            <div className="not-found__wrapper">
                <h2 className="not-found__title">Page Not Found</h2>
                <div className="flex-c not-found__content">
                    <div className="not-found__text">
                        <p>Looks like this page went on vacation.</p>
                        <Link to="/" title="Home Page" className="not-found__btn">Home Page</Link>
                    </div>
                    <img src={notFoundImg} alt="woman who codes illustration" className="not-found__img"/>
                </div>
            </div>
        </div>
    )
}

export default NotFound;