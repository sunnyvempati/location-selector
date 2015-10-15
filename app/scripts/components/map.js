import React from 'react';
import {Gmaps, Marker} from 'react-gmaps';

const coords = {
  lat: 37.09024,
  lng: -95.712891
};

export default class extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Gmaps
        width={'800px'}
        height={'400px'}
        lat={coords.lat}
        lng={coords.lng}
        zoom={3}
        loadingMessage={'Be happy'}
        onMapCreated={this.onMapCreated} />
    );
  }
}
