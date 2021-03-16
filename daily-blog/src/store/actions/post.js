import axios from 'axios';

import * as actionTypes from './actionTypes';

export const fetchPosts = () => {
    return (dispatch) => {
        axios.get('/api/posts')
            .then(response => {
                dispatch(setPost(response.data));
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