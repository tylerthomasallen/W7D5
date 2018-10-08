import React from 'react';
import BenchIndexItem from './bench_index_item';

class BenchIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getBenches();
  }

  render() {
    let benches = [];
    if (this.props.benches.benches) {
      benches = this.props.benches.benches;
    }
    let benchItems = benches.map(bench => <BenchIndexItem key={bench.id} bench={bench} />);
    return (
      <div>
        <h1>Benches Index Component!</h1>
        <ul>
          {benchItems}
        </ul>
      </div>
    );
  }
}

export default BenchIndex;
