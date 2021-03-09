import React from 'react';

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = (props) => {
    return (
        <nav>
            <ul className={classes.NavigationItems}>
                <NavigationItem link="/" exact>Home</NavigationItem>
                <NavigationItem link="/projects" exact>Projects</NavigationItem>
                <NavigationItem link="/about" exact>About</NavigationItem>

            </ul>
        </nav>
    );
}

export default NavigationItems;