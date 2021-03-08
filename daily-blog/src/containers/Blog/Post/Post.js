import React from 'react';

import classes from './Post.module.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faPencilAlt } from '@fortawesome/free-solid-svg-icons';

const post = (props) => {    
    return (
        <div className={classes.Post}>
            <div className={classes.Title}>[React.js] How to use React Hook?</div>
            <div style={{fontSize: "9pt"}}>
                <FontAwesomeIcon icon={faCalendarAlt} style={{ color: "#888888", marginRight: "5px" }} />
                <i>{new Date().toDateString()}</i>
            </div>
            <p>
                {/* <FontAwesomeIcon icon={faPencilAlt} size="sm" style={{ fontSize: "9pt", marginRight: "5px" }} /> */}
                Hooks don’t replace your knowledge of React concepts. Instead, Hooks provide a more direct API to the React concepts you already know: props, state, context, refs, and lifecycle. As we will show later, Hooks also offer a new powerful way to combine them.
            </p>

            <div className={classes.ReadMore}>
                <Link to="#">Read More</Link>
            </div>
        </div>
    );
}

export default post;