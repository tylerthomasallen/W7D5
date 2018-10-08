import * as APIUtil from '../util/api/api_util';

export const RECEIVE_BENCHES = 'RECEIVE_BENCHES';
export const UPDATE_BOUNDS = 'UPDATE_BOUNDS';

export const updateBounds = bounds => {
  return {
    type: UPDATE_BOUNDS,
    bounds
  };
};

export const receiveBenches = benches => {
  return {
    type: RECEIVE_BENCHES,
    benches
  };
};

export const getBenches = (bounds) => dispatch => {
  APIUtil.fetchBenches(bounds).then(
    benches => (dispatch(receiveBenches(benches))
  ));
};
