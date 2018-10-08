import { UPDATE_BOUNDS } from '../../actions/bench_actions';

const filtersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case UPDATE_BOUNDS:
      return action.bounds;
    default:
      return state;
  }
};

export default filtersReducer;
