import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faGithub  } from '@fortawesome/free-brands-svg-icons';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';

import classes from './SideDrawer.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../UI/Logo/Logo';

const sideDrawer = (props) => {
    let sideDrawerClasses = [classes.SideDrawer, classes.Open];
    if(!props.show) {
        sideDrawerClasses = [classes.SideDrawer, classes.Close];
    }

    return (
        <div className={sideDrawerClasses.join(" ")}>
            <header className={classes.Header}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <div className={classes.BlogTitle}>
                    <h3>William Ko</h3>
                    <p>ReactJS | GoLang | .NET</p>
                    <p>Front-end | Back-end Developer</p>
                </div>
                <div className={classes.ExternalLinks}>
                    <div className={classes.ExternalLink}><a href="https://github.com/openkitchen2772?tab=repositories" target="_blank"><FontAwesomeIcon icon={faGithub} size="lg"/> Github</a></div>
                    <div className={classes.ExternalLink}><a href="mailto: willy1994722012@gmail.com"><FontAwesomeIcon icon={faEnvelope} size="lg"/> Email</a></div>
                </div>
            </header>

            <div className={classes.Navigation}>
                <NavigationItems />
            </div>

            <footer className={classes.Footer}>
                <div className={classes.Quote}>
                    <div className={classes.QuoteMark}><FontAwesomeIcon icon={faQuoteLeft} size="sm"/></div>
                    <div>Dreams and passion are more powerful than facts and reality.</div>
                    <div className={classes.QuoteMark}><FontAwesomeIcon icon={faQuoteRight} size="sm"/></div>
                </div>
                <div className={classes.Copyright}>
                    <FontAwesomeIcon icon={faCopyright}/> 2021, Created by William Ko
                </div>
            </footer>
        </div>
    )
}

export default sideDrawer;