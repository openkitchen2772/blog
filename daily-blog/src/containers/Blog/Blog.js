import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';

import classes from './Blog.module.css';
import Post from '../../containers/Blog/Post/Post';
import * as actions from '../../store/actions/post';

const Blog = (props) => {
    const [showBlog, setShowBlog] = useState(false);
    const [currentTime, setCurrentTime] = useState(new Date());
    
    useEffect(() => {
        // onload show page fadeIn animation
        setShowBlog(true);
        
        // onload set page timer
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        // onload and fetch posts from api via redux
        props.fetchPosts();

        return () => {
            clearInterval(timer);
        }
    }, []);

    let posts = props.posts.map((post, i) => {
        return <Post
                key={"post_" + i} 
                title={post.title} 
                content={post.content} 
                time={post.time} />
    });

    if(props.error) {
        posts = (
            <p style={{ color: "red" }}>Network Error: Unable to get posts</p>
        );
    }

    return (
        <div className={showBlog ? [classes.Blog, classes.Show].join(' '): classes.Blog}>
            <div className={classes.Header}>
                <div>Total articles: {props.posts.length}</div>
                <div>{new Date().toString().substring(0, 33)}</div>
                <div>
                    Search: <input type="text" className={classes.Search} />
                </div>
            </div>
            
            <div className={classes.Content}>                
                {posts}
            </div>
        </div>
    );
}

const MapStateToProps = (state) => {
    return {
        posts: state.posts,
        error: state.error
    }
}

const MapDispatchToProps = (dispatch) => {
    return {
        fetchPosts: () => { dispatch(actions.fetchPosts()) }
    }
}

export default connect(MapStateToProps, MapDispatchToProps)(Blog);