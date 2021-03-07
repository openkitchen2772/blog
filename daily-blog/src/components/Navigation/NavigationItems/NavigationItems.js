import React from 'react';

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => {
    return (
        <nav>
            <ul className={classes.NavigationItems}>
                <NavigationItem link="/" exact>Home</NavigationItem>
                <NavigationItem link="/blog" exact>Blog</NavigationItem>
                <NavigationItem link="/projects" exact>Projects</NavigationItem>
            </ul>
        </nav>
    );
}

export default navigationItems;