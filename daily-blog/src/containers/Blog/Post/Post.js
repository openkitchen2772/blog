import React from 'react';

import classes from './Post.module.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

const post = (props) => {    
    return (
        <div className={classes.Post}>
            <div className={classes.Title}>{props.title}</div>
            <div style={{fontSize: "9pt"}}>
                <FontAwesomeIcon icon={faCalendarAlt} style={{ color: "#888888", marginRight: "5px" }} />
                <i>{props.time}</i>
            </div>
            <p>
                {props.content}
            </p>

            <div className={classes.ReadMore}>
                <Link to={props.link}>Read More</Link>
            </div>
        </div>
    );
}

export default post;