import { connect } from 'react-redux';

import { SearchIndex } from './search_index';
import { getBenches } from '../../actions/bench_actions';

const mapStateToProps = ({entities}) => {
  const benches = entities.benches;
  return {
    benches
  };
};

const mapDispatchToProps = dispatch => ({
  getBenches: () => dispatch(getBenches())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchIndex);
