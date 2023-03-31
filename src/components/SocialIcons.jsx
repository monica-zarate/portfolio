// Vendor imports
import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { motion as m } from "framer-motion";

export default function SocialIcons(device, component) {

    const linkedInIcon = (<a href="https://www.linkedin.com/in/monica-zarate/" title="Monica Zarate's LinkedIn Profile" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin}/></a>);

    const gitHubIcon = (<a href="https://github.com/monica-zarate" title="Monica Zarate's Github Profile" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub}/></a>);

    const emailIcon = (<a href="mailto:hello@monicazarate.com" title="hello@monicazarate.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faEnvelope}/></a>);

    let socialLinks = '';

    switch (device) {
        case 'mobile':
            socialLinks = (<ul className={`flex-c ${component}__social`}>
                <li>
                    {linkedInIcon}
                </li>
                <li>
                    {gitHubIcon}
                </li>
                <li>
                    {emailIcon}
                </li>
            </ul>);
            break;
        case 'tablet': 
            socialLinks = (<ul className={`flex-c ${component}__social`}>
                <m.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} style={{ x: 0 }} transition={{ease: 'easeInOut'}}>
                    {linkedInIcon}
                </m.li>
                <m.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} style={{ x: 0 }} transition={{ease: 'easeInOut'}}>
                    {gitHubIcon}
                </m.li>
                <m.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} style={{ x: 0 }} transition={{ease: 'easeInOut'}}>
                    {emailIcon}
                </m.li>
            </ul>);
            break;
        default:
            socialLinks = '';
    }

    return socialLinks;
}