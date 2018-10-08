import { connect } from 'react-redux';

import BenchIndex from './bench_index';
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
)(BenchIndex);
