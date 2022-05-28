import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin  } from '@fortawesome/free-brands-svg-icons';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';

import classes from './SideDrawer.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../UI/Logo/Logo';

const SideDrawer = (props) => {
    const sideDrawerClasses = [classes.SideDrawer];
    if(!props.show) {
        sideDrawerClasses.push(classes.Close);
    } else {
        sideDrawerClasses.push(classes.Open);
    }

    return (
        <div className={sideDrawerClasses.join(" ")} onClick={props.switchedPage}>
            <header className={classes.Header}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <div className={classes.BlogTitle}>
                    <h3>William's Blog</h3>
                    <p>ReactJS | GoLang | Devops</p>
                    <p>Front-end | Back-end Developer</p>
                </div>
                <div className={classes.ExternalLinks}>
                    <div className={classes.ExternalLink}><a href="https://github.com/openkitchen2772?tab=repositories" target="_blank"><FontAwesomeIcon icon={faGithub} size="lg"/> Github</a></div>
                    <div className={classes.ExternalLink}><a href="https://www.linkedin.com/in/wing-lam-ko-495371142/" target="_blank"><FontAwesomeIcon icon={faLinkedin} size="lg"/> Linkedln</a></div>
                </div>
            </header>

            <div className={classes.Navigation}>
                <NavigationItems />
            </div>

            <footer className={classes.Footer}>
                <div className={classes.Quote}>
                    <div className={classes.QuoteMark}><FontAwesomeIcon icon={faQuoteLeft} size="sm"/></div>
                    <div>Rest if you need to, but never quit.</div>
                    <div className={classes.QuoteMark}><FontAwesomeIcon icon={faQuoteRight} size="sm"/></div>
                </div>
                <div className={classes.Copyright}>
                    <FontAwesomeIcon icon={faCopyright}/> 2022, Created by William Ko
                </div>
            </footer>
        </div>
    )
}

export default SideDrawer;