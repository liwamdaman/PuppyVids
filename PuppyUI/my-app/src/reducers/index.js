import {combineReducers} from 'redux';
import { UPDATE_VIDEO } from '../actions';

function video(state = {}, action) {
    switch (action.type) {
        case UPDATE_VIDEO:
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

const rootReducer = combineReducers({
    video
});

export default rootReducer;