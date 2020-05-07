import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import { composeWithDevTools, devToolsEnhancer } from 'redux-devtools-extension';
import rootReducer from './reducers';
import AppContainer from './containers/App';
import * as serviceWorker from './serviceWorker';
import './index.css';
import { updateVideoID, updateVideoTitle, updateVideoAuthor } from './actions'

const store = createStore(rootReducer, devToolsEnhancer());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
store.dispatch(updateVideoID('D-UmfqFjpl0'));
store.dispatch(updateVideoTitle('title'));
store.dispatch(updateVideoAuthor('author'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
