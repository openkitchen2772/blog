import React from 'react';

import classes from './Post.module.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import ReactMarkdown from 'react-markdown';

const post = (props) => {
    // replace markdown formatting for post abstract
    let content = props.content
        .replace(/\!\[.+\]\(.+\)/g, '')
        .replace(/\[.+\]\(.+\)/g, '')
        .replace(/[#|_|*|\n]/g, '');

    // limit abstract to 400 characters
    if(content.length > 400) {
        content = content.substring(0, 400) + '...';
    }

    return (
        <div className={classes.Post}>
            <div className={classes.Title}>{props.title}</div>
            <div style={{fontSize: "9pt"}}>
                <FontAwesomeIcon icon={faCalendarAlt} style={{ color: "#888888", marginRight: "5px" }} />
                <i>{props.time}</i>
            </div>
            <div className={classes.Content}>
                <ReactMarkdown source={content}/>
            </div>

            <div className={classes.ReadMore}>
                <Link to={props.link}>Read More</Link>
            </div>
        </div>
    );
}

export default post;