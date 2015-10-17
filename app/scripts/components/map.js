import React from 'react';
import ReactDOM from 'react-dom';
import {GoogleMap, Marker} from "react-google-maps";

export default class extends React.Component {
  constructor(props) {
    super(props);
  }

  renderMarkers(locations) {
    let selectedLocations = this.props.selectedLocations;
    return Object.keys(locations).map((key) => {
      let location = locations[key];
      let latlng = new google.maps.LatLng(location.latitude, location.longitude);
      let locationSelected = selectedLocations.some((l) => l.id == location.id);
      let pinColor = locationSelected ? "ff0000" : "D3D3D3";
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

  render() {
    return (
      <GoogleMap containerProps={{
          style: {
            height: "100%",
          },
        }}
        defaultZoom={3}
        defaultCenter={{lat: 37.09024, lng: -95.712891}}
        ref="gmap">
        {this.renderMarkers(this.props.locations)}
      </GoogleMap>
    );
  }
}
