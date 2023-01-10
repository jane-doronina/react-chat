import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import reduxPromise from "redux-promise"

import App from './components/App';
import './assets/stylesheets/index.scss';

import messagesReducer from './reducers/messagesReducer';
import channelsReducer from './reducers/channelsReducer';
import selectedChannelReducer from './reducers/selectedChannelReducer';
import currentUsernameReducer from './reducers/currentUsernameReducer';

const initialState = {
  messages: [],
  channels: ['general', 'react', 'paris'],
  currentUsername: prompt("What is your username?") || `anonymous${Math.floor(10 + (Math.random() * 90))}`,
  selectedChannel: 'general'
};


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
    <Provider store={createStore(reducers, initialState, middlewares)} >
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
