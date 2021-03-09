import React from 'react';

import classes from './Project.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag } from '@fortawesome/free-solid-svg-icons';

const Project = (props) => {
    return (
        <div className={classes.Project}>
            <div className={classes.Content} onClick={props.clicked}>
                <div className={classes.Icon}>
                    <img src={props.icon} width={props.width} />
                </div>
                <div className={classes.Detail}>
                    <div className={classes.ProjectTitle}>
                        {props.name}
                    </div>
                    <div className={classes.ProjectDescription}>
                        {props.description}
                    </div>
                    <div className={classes.ProjectTags}>
                        <FontAwesomeIcon icon={faTag} style={{ marginRight: "5px" }}/>
                        {props.tags.join(', ')}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;