import React, { useState, useEffect, useRef } from 'react';

import classes from './Blog.module.css';
import Post from '../../containers/Blog/Post/Post';

const Blog = (props) => {
    const [showBlog, setShowBlog] = useState(false);

    const [currentTime, setCurrentTime] = useState(new Date());
    
    useEffect(() => {
        setShowBlog(true);
        
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => {
            clearInterval(timer);
        }
    }, []);

    return (
        <div className={showBlog ? [classes.Blog, classes.Show].join(' '): classes.Blog}>
            <div className={classes.Header}>
                <div>Total articles: 11</div>
                <div>{new Date().toString().substring(0, 33)}</div>
                <div>
                    Search: <input type="text" className={classes.Search} />
                </div>
            </div>
            
            <div className={classes.Content}>                
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    );
}

export default Blog;