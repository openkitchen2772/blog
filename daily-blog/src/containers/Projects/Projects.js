import React, { useState, useEffect } from 'react';

import classes from './Projects.module.css';
import Project from './Project/Project';
import BurgerBuilderIcon from '../../assets/images/burger-builder.png';
import DotensIcon from '../../assets/images/dotens-project.png';
import StrangerAlbumIcon from '../../assets/images/stranger-album-project.png';

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
                    icon={DotensIcon}
                    name="DotENS"
                    description={"Dotens is a Web3 application for ENS domain exploring and backordering. Metamask is required to use the application."}
                    clicked={() => {projectClicked("https://dotens-ui-test.web.app/explore")}}
                    width="175px"
                    tags={["ReactJS", "Firebase", "MongoDB", "NodeJS", "ethers.js"]} />
                <Project 
                    icon={StrangerAlbumIcon}
                    name="Stranger Album"
                    description={"An album that everyone can upload a photo and comment about the photo they like. A random name is given to user so everyone is 'stranger animals' and can chat with no hesitation!"}
                    clicked={() => {projectClicked("https://stranger-album.vercel.app/")}}
                    width="175px"
                    tags={["NextJS", "Golang", "MongoDB", "Vercel"]} />
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