import fetch from 'cross-fetch';

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
        return fetch("/videos")
            .then(
                response => response.json(),
                error => console.log('An error occurred.', error)
            )
            .then(
                json => {
                    //console.log(json);
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
        return fetch("/videos", {
            method: 'POST',
            body: formData
        })
        .then(
            response => {
                if(response.status !== 201){
                    return Promise.reject(response.statusText);
                }
                return Promise.resolve(response.json());
            },
            error => 'An error occurred. ' + error
        )
        .then(
            json => dispatch(receiveVideo(json.id,json.title,json.author)),
            errorMessage => dispatch(setUploadAsFailed(errorMessage))
        )
    }
}