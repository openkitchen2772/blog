import React from 'react';

import classes from './ToolbarToggle.module.css';

const ToolbarToggle = (props) => {    
    return (
        <div className={classes.ToolbarToggle} onClick={props.clicked}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
}

export default ToolbarToggle;