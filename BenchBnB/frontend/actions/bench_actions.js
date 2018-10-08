import * as APIUtil from '../util/api/api_util';

export const RECEIVE_BENCHES = 'RECEIVE_BENCHES';

export const receiveBenches = benches => {
  return {
    type: RECEIVE_BENCHES,
    benches
  };
};

export const getBenches = (bounds) => dispatch => {
  debugger
  APIUtil.fetchBenches(bounds).then(
    benches => (dispatch(receiveBenches(benches))
  ));
};
