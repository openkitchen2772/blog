import React, { useState } from 'react';

import classes from './Toolbar.module.css';
import ToolbarToggle from './ToolbarToggle/ToolbarToggle';
import Backdrop from '../Backdrop/Backdrop'; 

const Toolbar = (props) => {
    return (
        <div className={classes.Toolbar}>
            <Backdrop show={props.showDrawer} clicked={props.closedDrawer}/>
            <div className={classes.ToolbarToggle}>
                <ToolbarToggle clicked={props.openedDrawer}/>
            </div>
        </div>
    )
}

export default Toolbar;