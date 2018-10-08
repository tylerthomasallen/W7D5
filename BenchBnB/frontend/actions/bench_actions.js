import * as APIUtil from '../util/api/api_util';

export const RECEIVE_BENCHES = 'RECEIVE_BENCHES';

export const receiveBenches = benches => {
  return {
    type: RECEIVE_BENCHES,
    benches
  };
};

export const getBenches = () => dispatch => {
  APIUtil.fetchBenches().then(
    benches => (dispatch(receiveBenches(benches))
  ));
};
