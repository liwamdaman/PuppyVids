import React from 'react';
import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer';
import VideoInfo from '../components/VideoInfo';
import AddVideo from './AddVideo';
import { fetchRandomVideo, uploadVideo } from '../actions';
import './App.css';

function App({videoID, videoTitle, videoAuthor, uploadError, fetchRandomVideo, uploadVideo}) {
  return (
    <div className="App">
      <header className="App-header">
        enjoy cute doggo
      </header>
      <body>
        <div className="VideoPlayer">
          <VideoPlayer videoID={videoID} />
        </div>
        <div className="VideoInfo">
          <VideoInfo videoTitle={videoTitle} videoAuthor={videoAuthor} />
        </div>
        <button className="NewVidButton" type="button" onClick={e => {
          fetchRandomVideo();
        }}>
          Gimme Another!
        </button>
        <div className="AddVideo">
          <AddVideo uploadError={uploadError} uploadVideo={uploadVideo} />
        </div>
      </body>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    videoID: state.video.id,
    videoTitle: state.video.title,
    videoAuthor: state.video.author,
    uploadError: state.uploadError
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchRandomVideo: () => dispatch(fetchRandomVideo()),
    uploadVideo: youtubeURL => dispatch(uploadVideo(youtubeURL))
  }
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
