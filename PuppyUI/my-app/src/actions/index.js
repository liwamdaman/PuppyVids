import fetch from 'cross-fetch';

export const UPDATE_VIDEO = 'UPDATE_VIDEO';
export function updateVideo(videoID, videoTitle, videoAuthor) {
    return { 
        type:UPDATE_VIDEO,
        videoData:{
            id: videoID,
            title: videoTitle,
            author: videoAuthor
        }
    };
}

export function fetchRandomVideo() {
    return function(dispatch) {
        return fetch("http://worldtimeapi.org/api/ip")
            .then(
                response => response.json(),
                error => console.log('An error occurred.', error)
            )
            .then(
                json => {
                    //console.log(json);
                    dispatch(updateVideo('D-UmfqFjpl0','the time is',json.datetime));
                }
            )
    }
}