import { combineReducers } from 'redux';

import filtersReducer from './filter_reducer';

const uiReducer = combineReducers({
  bounds: filtersReducer
});

export default uiReducer;
