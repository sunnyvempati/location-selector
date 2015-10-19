import React from 'react';
import ReactDOM from 'react-dom';
import Table from './table';
import LocationSelector from './location_selector';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.modifySelectedLocations = this.modifySelectedLocations.bind(this);
    this.state = {selectorOpen: false, locations: {}, selectedLocations: {}};
    this.locationUrl = 'https://s3.amazonaws.com/public.earshotinc.com/locations.json';
  }

  componentDidMount() {
    this.loadLocations();
  }

  loadLocations() {
    $.getJSON(this.locationUrl, (data) => {
      let locationHash = {};
      data.forEach((d) => {
        locationHash[d.id] = d;
        locationHash[d.id].selected = false;
      });
      this.setState({locations: locationHash});
    });
  }

  modifySelectedLocations(ids, checked) {
    let locations = this.state.locations;
    let selectedLocations = this.state.selectedLocations;
    ids.forEach((id) => {
      locations[id].selected = checked;
      if (checked) selectedLocations[id] = locations[id];
      else delete selectedLocations[id];
    });
    this.setState({locations: locations, selectedLocations: selectedLocations});
  }

  render() {
    let selectedLocationCount = Object.keys(this.state.selectedLocations).length;
    return (
      <div className="HomeContainer">
        <div className="Home-title">
          <div className="u-dim">
            <h1>Location Selector</h1>
          </div>
        </div>
        <LocationSelector onAdd={this.onAdd}
                          modifySelectedLocations={this.modifySelectedLocations}
                          locations={this.state.locations}
                          selectedLocationCount={selectedLocationCount} />
        <hr />
        <div className="Home-table">
          <Table items={this.state.selectedLocations} />
        </div>
      </div>
    );
  }
}
