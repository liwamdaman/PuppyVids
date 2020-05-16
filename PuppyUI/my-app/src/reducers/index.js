import {combineReducers} from 'redux';
import { RECEIVE_VIDEO, SET_UPLOAD_AS_FAILED, RESET_UPLOAD_STATE } from '../actions';

function video(state = {}, action) {
    switch (action.type) {
        case RECEIVE_VIDEO:
            return Object.assign({}, state, 
                {
                    id: action.videoData.id,
                    title: action.videoData.title,
                    author: action.videoData.author
                }
            );
        default:
            return state;
    }
}

function uploadError(state='', action) {
    switch (action.type) {
        case SET_UPLOAD_AS_FAILED:
            return action.errorMessage;
        case RESET_UPLOAD_STATE:
            return '';
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    video,
    uploadError
});

export default rootReducer;