import React from 'react';
import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer';
import VideoInfo from '../components/VideoInfo';
import { fetchRandomVideo } from '../actions';
import './App.css';

function App({videoID, videoTitle, videoAuthor, dispatch}) {
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
            dispatch(fetchRandomVideo());
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
