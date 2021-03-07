import React from 'react';

import classes from './Logo.module.css';
import icon from '../../../assets/images/icon.png';

const logo = (props) => {
    return (
        <div className={classes.Logo}>
            <img src={icon} alt="Author Icon" />
        </div>
    )
}

export default logo;
