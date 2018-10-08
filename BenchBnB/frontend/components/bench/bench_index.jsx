import React from 'react';

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
    debugger;
    return (
      <div>
        <h1>Benches Index Component!</h1>
        <ul>
          {benches.map(bench =>
            <li key={bench.id}>{bench.description}</li>
          )}
        </ul>
      </div>
    );
  }
}

export default BenchIndex;
