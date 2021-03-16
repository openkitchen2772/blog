import * as actionTypes from '../actions/actionTypes';

const initialState = {
    posts: [],
    fullPost: {},
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
        case actionTypes.SET_FULL_POST:
            const fullPost = state.posts.find(p => p.id == action.id);
            return {
                ...state,
                fullPost: fullPost
            }
        default:
            return state;
    }
}

export default reducer;