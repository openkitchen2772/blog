import * as actionTypes from '../actions/actionTypes';

const initialState = {
    posts: [],
    error: false
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.SET_POSTS:
            return {
                ...state,
                posts: action.posts,
                error: false
            };
        case actionTypes.FETCH_POSTS_FAILED:
            return {
                ...state,
                posts: [],
                error: true
            };
        default:
            return state;
    }
}

export default reducer;