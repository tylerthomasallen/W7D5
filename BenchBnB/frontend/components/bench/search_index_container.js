import { connect } from 'react-redux';

import SearchIndex from './search_index';
import { getBenches, updateBounds } from '../../actions/bench_actions';

const mapStateToProps = ({entities, ui}) => {
  const benches = entities.benches;
  const bounds = ui.bounds;
  return {
    benches,
    bounds
  };
};

const mapDispatchToProps = dispatch => ({
  getBenches: (bounds) => dispatch(getBenches(bounds)),
  updateBounds: (bounds) => dispatch(updateBounds(bounds))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchIndex);
