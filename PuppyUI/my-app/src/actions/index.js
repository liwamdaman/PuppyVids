import fetch from 'cross-fetch';

const API_URL = process.env.REACT_APP_API_URL;

export const RECEIVE_VIDEO = 'RECEIVE_VIDEO';
export function receiveVideo(videoID, videoTitle, videoAuthor) {
    return { 
        type:RECEIVE_VIDEO,
        videoData:{
            id: videoID,
            title: videoTitle,
            author: videoAuthor
        }
    };
}

export const SET_UPLOAD_AS_FAILED = 'SET_UPLOAD_AS_FAILED';
export function setUploadAsFailed(errorMessage) {
    return {
        type:SET_UPLOAD_AS_FAILED,
        errorMessage
    }
}

export const RESET_UPLOAD_STATE = 'RESET_UPLOAD_STATE';
export function resetUploadState(){
    return {
        type:RESET_UPLOAD_STATE
    }
}

// Thunks
export function fetchRandomVideo() {
    return function(dispatch) {
        return fetch(API_URL + "videos")
            .then(
                response => response.json(),
                error => console.log('An error occurred.', error)
            )
            .then(
                json => {
                    dispatch(receiveVideo(json.id,json.title,json.author));
                }
            )
    }
}

export function uploadVideo(youtubeURL) {
    return function(dispatch) {
        dispatch(resetUploadState())

        const formData = new FormData();
        formData.append('youtubeURL', youtubeURL);
        return fetch(API_URL + "videos", {
            method: 'POST',
            body: formData
        })
        .then(
            response => {
                if(response.status !== 201){
                    return Promise.reject(response.status);
                }
                return Promise.resolve(response.json());
            },
            error => 'An error occurred. ' + error
        )
        .then(
            json => dispatch(receiveVideo(json.id,json.title,json.author)),
            statusCode => {
                let errorMessage;
                switch(statusCode) {
                    case 400:
                        errorMessage = 'Not a Youtube video';
                        break;
                    // Perhaps should create a new 4xx status code for this:
                    case 406:
                        errorMessage = 'Not a Dog Video!';
                        break;
                    case 500:
                        errorMessage = 'Internal Server Error';
                        break;
                    default:
                        errorMessage = statusCode;
                }
                dispatch(setUploadAsFailed(errorMessage));
            }
        )
    }
}