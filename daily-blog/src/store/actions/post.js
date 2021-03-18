import axios from 'axios';

import * as actionTypes from './actionTypes';

export const fetchPosts = () => {
    return (dispatch) => {
        axios.get('/api/posts')
            .then(response => {
                const data = response.data.map(d => {
                    return {
                        ...d,
                        content: d.content.replace(/\\n/g, "\n")
                    }
                });
                dispatch(setPost(data));
            })
            .catch(err => {
                dispatch(fetchPostsFailed());
            })
    }
}

export const setFullPost = (id) => {
    return {
        type: actionTypes.SET_FULL_POST,
        id: id
    }
}

const setPost = (posts) => {
    return {
        type: actionTypes.SET_POSTS,
        posts: posts
    }
}

const fetchPostsFailed = () => {
    return {
        type: actionTypes.FETCH_POSTS_FAILED
    }
}