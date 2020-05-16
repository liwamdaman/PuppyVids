import React from 'react';

function VideoInfo({videoTitle, videoAuthor}) {
    return (
        <div>
            <span className="Title">{videoTitle}</span>
            <span className="Author">By: {videoAuthor}</span>
        </div>
    );
}

export default VideoInfo;