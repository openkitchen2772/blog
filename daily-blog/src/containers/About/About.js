import React, { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import classes from './About.module.css';
import Signature from '../../assets/images/signature.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faICursor, faToolbox, faDraftingCompass } from '@fortawesome/free-solid-svg-icons';

const About = (props) => {
    const [showAbout, setShowAbout] = useState(false);

    useEffect(() => {
        setShowAbout(true);
        return () => {
            console.log("[About.js] About to unmount ...")
        }
    }, []);

    return (
        <div className={showAbout ? [classes.About, classes.Show].join(' ') : classes.About}>
            <div className={classes.Content}>
                <div className={classes.Name}>William Ko</div>
                <p>Software developer from Hong Kong, passionate in building application and exploring problem-solving wisdom.</p>
                <p><FontAwesomeIcon icon={faICursor} style={{ color: "#888888", marginRight: "20px" }} />Javascript, GoLang, C#</p>
                <p><FontAwesomeIcon icon={faToolbox} style={{ color: "#888888", marginRight: "10px" }} />ReactJS, .Net, GoLang Server-Side, Docker, MongoDB</p>
                <p><FontAwesomeIcon icon={faDraftingCompass} style={{ color: "#888888", marginRight: "10px" }} />Devops, CI/CD, AWS</p>
                <div className={classes.Signature}>
                    <img src={Signature} width="200" />
                </div>
            </div>
        </div>
    );
}

export default About;