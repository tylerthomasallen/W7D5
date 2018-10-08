import React from 'react';
import BenchMap from './bench_map';
import BenchIndex from './bench_index';

class SearchIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { benches, bounds, getBenches, updateBounds } = this.props;
    return (
      <div>
        <BenchMap benches={benches} updateBounds={updateBounds} getBenches={getBenches}/>
        <BenchIndex benches={benches} getBenches={getBenches} bounds={bounds}/>
      </div>
    );
  }
}

// export const SearchIndex = ( {benches, bounds, getBenches, updateBounds } ) => (
//   <div>
//     <BenchMap benches={benches} updateBounds={updateBounds}/>
//     <BenchIndex benches={benches} getBenches={getBenches} bounds={bounds}/>
//   </div>
// );

export default SearchIndex;
