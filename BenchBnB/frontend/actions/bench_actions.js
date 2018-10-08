import * as APIUtil from '../util/api/api_util';

export const RECEIVE_BENCHES = 'RECEIVE_CURRENT_USER';

export const receiveBenches = benches => ({
  type: RECEIVE_BENCHES,
  benches
});

export const getBenches = () => dispatch => {
  APIUtil.fetchBenches().then(
    benches => (dispatch(receiveBenches(benches))
  ));
};
