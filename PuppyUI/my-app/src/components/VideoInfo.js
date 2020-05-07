import React from 'react';

function VideoInfo({videoTitle, videoAuthor}) {
    return (
        <div className="test">
            <span className="Title">{videoTitle}</span>
            <span className="Author">{videoAuthor}</span>
        </div>
    );
}

export default VideoInfo;