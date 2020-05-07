import {combineReducers} from 'redux';
import {UPDATE_VIDEO, UPDATE_VIDEO_TITLE, UPDATE_VIDEO_AUTHOR} from '../actions';

function video(state = {}, action) {
    switch (action.type) {
        case UPDATE_VIDEO:
            return Object.assign({}, state, {id: action.videoID});
        case UPDATE_VIDEO_TITLE:
            return Object.assign({}, state, {title:action.videoTitle});
        case UPDATE_VIDEO_AUTHOR:
            return Object.assign({}, state, {author:action.videoAuthor});
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    video
});

export default rootReducer;