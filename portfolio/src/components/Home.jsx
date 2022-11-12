// Vendor imports
import React from "react";

// Project imports
import "./styles/main.css";
import githubBlack from "../assets/icons/github-icon-black.svg";
import linkedinBlack from "../assets/icons/linkedin-icon-black.svg";
import mailBlack from "../assets/icons/mail-icon-black.svg";
import poster3d from '../assets/imgs/3d-poster.jpg';
import paperLanter from '../assets/imgs/paper-lantern.jpg';

function Home() {

    return (
        <body>
            <div className='intro'>
            <div>
                <img src='' alt=''/>  
                <h1>Hola! I'm Monica</h1>
            </div>
            <p>Vancouver BC-based UI/UX Designer. Looking to create products that make a positive impact on minority groups' inclusivity.</p>
            <p>Let's work together!</p>
            <ul className='flex-c social'>
                <li><a><img src={linkedinBlack} alt='linkedin icon'/></a></li>
                <li><a><img src={githubBlack} alt='github icon'/></a></li>
                <li><a><img src={mailBlack} alt='mail icon'/></a></li>
            </ul>
            </div>
            <div className='featured flex-c'>
            <h2>Featured Projects</h2>
            <div className='card flex-c'>
                <div className='chip'>UI/UX Design</div>
                <h2>Paper Lantern</h2>
                <img src={poster3d} alt=''/>
                <p>Design, developed and tested a prototype for a fictitious book store. The project includes a website optimized for desktop environment and a mobile interface.</p>
            </div>
            <div className='card flex-c'>
                <div className='chip'>Graphic   Design</div>
                <h2>3D Promotional Poster</h2>
                <img src={paperLanter} alt=''/>
                <p>Create a promotional poster for a fictitious beverage company. Using a background image, a 3D container and custom lighting to set up a realistic scene.</p>
            </div>
            </div>
        </body>
    )

};

export default Home;