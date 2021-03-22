import React, { useState } from 'react';

import classes from './Toolbar.module.css';
import ToolbarToggle from './ToolbarToggle/ToolbarToggle';
import Backdrop from '../Backdrop/Backdrop'; 

const Toolbar = (props) => {
    return (
        <div className={classes.Toolbar}>
            <Backdrop show={props.showDrawer} clicked={props.clicked}/>
            <div className={classes.ToolbarToggle}>
                <ToolbarToggle clicked={props.clicked}/>
            </div>
        </div>
    )
}

export default Toolbar;