import React from 'react';
import {GoogleMap, Marker} from "react-google-maps";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.renderMap = this.renderMap.bind(this);
    this.state = {center: {lat: 37.09024, lng: -95.712891}, zoom: 3};
  }

  renderMarkers(locations) {
    return Object.keys(locations).map((key) => {
      let location = locations[key];
      let latlng = new google.maps.LatLng(location.latitude, location.longitude);
      let pinColor = location.selected ? "ff0000" : "D3D3D3";
      let pinImage = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + pinColor,
          new google.maps.Size(21, 34),
          new google.maps.Point(0,0),
          new google.maps.Point(10, 34));
      return (
        <Marker position={latlng}
                animation={google.maps.Animation.DROP}
                icon={pinImage}
                key={location.id} />
      )
    });
  }

  center(lat, lng) {
    let center = {lat: lat, lng: lng};
    this.setState({center: center, zoom: 10});
  }

  zoomOut() {
    this.setState({zoom: 3});
  }

  zoomIn() {
    this.setState({zoom: 10});
  }

  renderMap() {
    let viewId = this.props.viewId;
    if (viewId == 2) {
      return (
        <GoogleMap containerProps={{
            style: {
              height: "100%"
            },
          }}
          zoom={this.state.zoom}
          center={this.state.center}
          ref="gmap">
          {this.renderMarkers(this.props.locations)}
        </GoogleMap>
      );
    }
  }

  render() {
    return (
      <div className="MapContainer">{this.renderMap()}</div>
    );
  }
}
