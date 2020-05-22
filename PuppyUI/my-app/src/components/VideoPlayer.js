import React from 'react';
import YouTube from 'react-youtube';

function VideoPlayer({videoID}) {
    const opts = {
        height: '390',
        width: '640',
        host: 'https://www.youtube-nocookie.com'
    };
    return <YouTube videoId={videoID} opts={opts} />;
}

export default VideoPlayer;