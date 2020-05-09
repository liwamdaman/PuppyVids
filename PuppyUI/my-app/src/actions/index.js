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

export function fetchRandomVideo() {
    return function(dispatch) {
        return fetch("/videos")
            .then(
                response => response.json(),
                error => console.log('An error occurred.', error)
            )
            .then(
                json => {
                    console.log(json);
                    dispatch(receiveVideo(json.id,json.title,json.author));
                }
            )
    }
}