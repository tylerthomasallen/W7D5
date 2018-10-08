import React from 'react';
import ReactDOM from 'react-dom';
import * as APIUtil from './util/api/api_util';
import configureStore from './store/store';
import Root from './components/root';
import { login, signup, logout } from './actions/session_actions';


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');


  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }
  // for development testing
  window.login = login;
  window.logout = logout;
  window.signup = signup;
  window.getState = store.getState;
  window.dispatch = store.dispatch;


  ReactDOM.render(<Root store={ store }/>, root);
});
