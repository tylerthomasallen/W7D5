import React from 'react';
import ReactDOM from 'react-dom';
import MarkerManager from '../../util/marker_manager';

class BenchMap extends React.Component {

  componentDidMount() {
    const map = ReactDOM.findDOMNode(this.refs.map);

    const mapOptions = {
      center: { lat: 37.7758, lng: -122.435 }, // this is SF
      zoom: 13
    };
    this.map = new google.maps.Map(map, mapOptions);

    this.MarkerManager = new MarkerManager(this.map);
  }

  componentDidUpdate() {
    this.MarkerManager.updateMarkers(this.props.benches);
  }

  render() {
    return (
      <div id='map' ref='map'>

      </div>

    );
  }
}

export default BenchMap;

// class BenchMap extends React.Component {
//   //...
//
//   componentDidMount() {
//     // set the map to show SF
//     const mapOptions = {
//       center: { lat: 37.7758, lng: -122.435 }, // this is SF
//       zoom: 13
//     };
//
//     // wrap this.mapNode in a Google Map
//     this.map = new google.maps.Map(this.mapNode, mapOptions);
//   }
//
//   render() {
//     return (
//       // ...
//       <div ref={ map => this.mapNode = map }> // this ref gives us access to the map dom node
//       // ...
//     )
//   }
//
//   //...
// }
