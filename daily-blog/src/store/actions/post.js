import axios from 'axios';

import * as actionTypes from './actionTypes';

export const fetchPosts = () => {
    return (dispatch) => {
        axios.post('api/posts')
            .then(response => {
                console.log(response.data);
                dispatch(setPost(response.data));
            })
            .catch(err => {
                console.log(err);
                dispatch(fetchPostsFailed());
            })
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