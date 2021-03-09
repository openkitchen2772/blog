import React, { useState, useEffect } from 'react';

import classes from './Projects.module.css';
import Project from './Project/Project';
import BurgerBuilderIcon from '../../assets/images/burger-builder.png';

const Projects = (props) => {

    const [showProjects, setShowProjects] = useState(false);

    useEffect(() => {
        setShowProjects(true);
    }, []);

    const projectClicked = (link) => {
        window.open(link, "_blank");
    }

    return (
        <div className={showProjects ? [classes.Projects, classes.Show].join(' ') : classes.Projects}>
            <div className={classes.Content}>
                <Project 
                    icon={BurgerBuilderIcon}
                    name="Burger Builder"
                    description={"A burger builder demostration app built with ReactJS to learn and practice about ReactJS, hosted with Google Firebase Service."}
                    clicked={() => {projectClicked("http://react-my-burger-73175.firebaseapp.com")}}
                    width="175px"
                    tags={["ReactJS", "Firebase"]} />
            </div>
        </div>
    );
}

export default Projects;