import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { applyMiddleware } from 'redux';
import logger from 'redux-logger';
import reduxPromise from "redux-promise"

import messagesReducer from './reducers/messagesReducer';
import channelsReducer from './reducers/channelsReducer';
import selectedChannelReducer from './reducers/selectedChannelReducer';
import currentUsernameReducer from './reducers/currentUsernameReducer';

import './assets/stylesheets/index.scss';

const reducers = combineReducers({
  messages: messagesReducer,
  channels: channelsReducer,
  selectedChannel: selectedChannelReducer,
  currentUsername: currentUsernameReducer
})

const middlewares = applyMiddleware(logger, reduxPromise)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={createStore(reducers, {}, middlewares)} >
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
