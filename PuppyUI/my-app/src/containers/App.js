import React from 'react';
import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer';
import VideoInfo from '../components/VideoInfo';
import './App.css';

function App({videoID, videoTitle, videoAuthor}) {
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
        <div>
          <button type="button" onClick={e => {
            alert('dispatch async video fetch')
          }}>
            Gimme Another!
          </button>
        </div>
      </body>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    videoID: state.video.id,
    videoTitle: state.video.title,
    videoAuthor: state.video.author
  }
}

const AppContainer = connect(mapStateToProps)(App);

export default AppContainer;
