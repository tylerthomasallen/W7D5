import React from 'react';
import ReactDOM from 'react-dom';
import * as APIUtil from './util/api/api_util';


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  // for development testing
  window.fetchNewUser = APIUtil.fetchNewUser;
  window.fetchLogoutUser = APIUtil.fetchLogoutUser;
  window.fetchLoginUser = APIUtil.fetchLoginUser;


  ReactDOM.render(<h1>Wow, full stack project running!</h1>, root);
});
