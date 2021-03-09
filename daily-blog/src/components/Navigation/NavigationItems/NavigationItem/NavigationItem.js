import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './NavigationItem.module.css';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavigationItem = (props) => {
    return (
        <li className={classes.NavigationItem}>
            <NavLink to={props.link} exact={props.exact}>
                <span className={classes.SelectMark}><FontAwesomeIcon icon={faChevronRight} size="sm" /></span>
                 {props.children} 
                <span className={classes.SelectMark}><FontAwesomeIcon icon={faChevronLeft} size="sm" /></span>
            </NavLink>
        </li>
    )
}

export default NavigationItem;