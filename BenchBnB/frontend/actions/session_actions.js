import * as APIUtil from '../util/api/api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const receiveCurrentUser = currentUser => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser
  };
};

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const signup = currentUser => dispatch => {
  APIUtil.fetchSignUp(currentUser).then(
    user => (dispatch(receiveCurrentUser(user))),
    err => (
      dispatch(receiveErrors(err.responseJSON))
    )
  );
};

export const login = currentUser => dispatch => {
  APIUtil.fetchLoginUser(currentUser).then(
    user => (dispatch(receiveCurrentUser(user))),
    err => (
      dispatch(receiveErrors(err.responseJSON))
    )
  );
};

export const logout = () => dispatch => (
  APIUtil.fetchLogoutUser().then(user => (
    dispatch(logoutCurrentUser())
  ))
);
