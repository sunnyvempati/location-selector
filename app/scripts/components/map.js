import React from 'react';
import ReactDOM from 'react-dom';
import {GoogleMap, Marker} from "react-google-maps";

export default class extends React.Component {
  constructor(props) {
    super(props);
  }

  renderMarkers(locations) {
    return locations.map((location) => {
      let latlng = new google.maps.LatLng(location.latitude, location.longitude);
      return (
        <Marker position={latlng}
                defaultAnimation={2}
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
