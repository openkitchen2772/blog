import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons'
import ReactMarkdown from 'react-markdown';

import classes from './FullPost.module.css';
import * as actions from '../../../../store/actions/post';
import Auxiliary from '../../../../hoc/Auxiliary/Auxiliary';

const FullPost = (props) => {
    const ImageDiv = (props) => <span className={classes.Image}><img src={props.src} alt={props.alt}/></span>;

    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(true);

        if(props.posts.length < 1) {
            props.fetchPosts();
        } else {
            props.setFullPost(props.match.params.id);
        }
    }, [])

    useEffect(() => {
        props.setFullPost(props.match.params.id);
    }, [props.posts])

    let titleClasses = [classes.Title];
    let contentClasses = [classes.Content];

    if(show) {
        titleClasses.push(classes.Show);
        contentClasses.push(classes.Show);
    }

    let fullPost = (
        <div style={{ textAlign: "center" }}>Loading ...</div>
    ) 

    if(props.fullPost) {
        fullPost = (
            <Auxiliary>
                <div className={titleClasses.join(' ')}>
                    <div>{props.fullPost.title}</div>
                    <div className={classes.SubHeading}><FontAwesomeIcon icon={faCalendarAlt} style={{ color: "#888888", marginRight: "5px" }} size="lg"/>{props.fullPost.time}</div>
                </div>
                <div className={contentClasses.join(' ')}>
                    <div>
                        <ReactMarkdown 
                            source={props.fullPost.content}
                            renderers={{ image: (props) => <ImageDiv {...props} />}} />
                    </div>
                </div>
            </Auxiliary>
        )
    }

    return (
        <div className={classes.FullPost}>
            <div className={classes.Back}>
                <Link to="/">Back</Link>
            </div>
            {fullPost}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts,
        fullPost: state.fullPost,
        error: state.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPosts: () => { dispatch(actions.fetchPosts()) },
        setFullPost: (id) => { dispatch(actions.setFullPost(id)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FullPost);