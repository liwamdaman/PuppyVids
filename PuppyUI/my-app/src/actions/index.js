export const UPDATE_VIDEO = 'UPDATE_VIDEO';
export const UPDATE_VIDEO_TITLE = 'UPDATE_VIDEO_TITLE';
export const UPDATE_VIDEO_AUTHOR = 'UPDATE_VIDEO_AUTHOR';

export function updateVideoID(videoID) {
    return { type:UPDATE_VIDEO, videoID};
}

export function updateVideoTitle(videoTitle) {
    return { type:UPDATE_VIDEO_TITLE, videoTitle};
}

export function updateVideoAuthor(videoAuthor) {
    return { type:UPDATE_VIDEO_AUTHOR, videoAuthor};
}