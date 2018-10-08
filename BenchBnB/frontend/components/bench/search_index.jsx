import React from 'react';
import BenchMap from './bench_map';
import BenchIndex from './bench_index';

export const SearchIndex = ( {benches, getBenches} ) => (
  <div>
    <BenchMap />
    <BenchIndex benches={benches} getBenches={getBenches}/>
  </div>
);
