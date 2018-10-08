export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
  }

  updateMarkers(benches) {
    console.log('time to update');
    benches.forEach(bench => this.createMarker(bench));

  }

  createMarker(bench) {
    const marker = new google.maps.Marker({
      position: {lat: bench.lat, lng: bench.lng},
      map: this.map,
      title: bench.description
    });

    marker.addListener('click', () => {
      alert(`clicked on: ${bench.description}`);
    });
  }
}
