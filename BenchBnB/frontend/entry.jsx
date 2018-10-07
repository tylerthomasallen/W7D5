import React from 'react';
import ReactDOM from 'react-dom';
import * as APIUtil from './util/api/api_util';
import configureStore from './store/store';
import Root from './components/root';


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();

  // for development testing
  window.fetchNewUser = APIUtil.fetchNewUser;
  window.fetchLogoutUser = APIUtil.fetchLogoutUser;
  window.fetchLoginUser = APIUtil.fetchLoginUser;
  window.getState = store.getState;
  window.dispatch = store.dispatch;


  ReactDOM.render(<Root store={ store }/>, root);
});
