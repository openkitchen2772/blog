import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';

import classes from './Blog.module.css';
import * as actions from '../../store/actions/post';
import Post from '../../containers/Blog/Post/Post';

const Blog = (props) => {
    const [showBlog, setShowBlog] = useState(false);
    const [currentTime, setCurrentTime] = useState(new Date());
    const [searchKey, setSearchKey] = useState('');
    const [onShowPosts, setOnShowPosts] = useState([]);
    
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

    useEffect(() => {
        const matchPosts = props.posts.filter(p => p.title.toLowerCase().includes(searchKey.toLowerCase()));
        setOnShowPosts(matchPosts);
    }, [searchKey, props.posts]);

    const onSearchPosts = (e) => {
        setSearchKey(e.target.value);
    }

    let posts = onShowPosts.map((post, i) => {
        return <Post
                key={"post_" + i} 
                title={post.title} 
                content={post.content} 
                time={post.time} 
                link={"post/" + post.id}/>
    });

    if(props.error) {
        posts = (
            <p style={{ color: "red" }}>Network Error: Unable to get posts</p>
        );
    }

    return (
        <div className={showBlog ? [classes.Blog, classes.Show].join(' '): classes.Blog}>
            <div className={classes.Header}>
                <div>Articles: {props.posts.length}</div>
                <div className={classes.DesktopOnly}>{new Date().toString().substring(0, 33)}</div>
                <div>
                    Search: <input type="text" className={classes.Search} value={searchKey} onChange={onSearchPosts} />
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