import React from 'react';

import classes from './Backdrop.module.css';

const Backdrop = (props) => {
    return (
        <div className={props.show ? classes.Backdrop : [classes.Backdrop, classes.Close].join(' ')} onClick={props.clicked}>
            {props.children}
        </div>
    );
}

export default Backdrop;