import React from 'react';
import ReactDOM from 'react-dom';
import Table from './table';
import LocationSelector from './location_selector';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.checkChanged = this.checkChanged.bind(this);
    this.locationUrl = 'https://s3.amazonaws.com/public.earshotinc.com/locations.json';
    this.state = {selectorOpen: false, locations: {}, selectedLocations: []};
  }

  componentDidMount() {
    this.loadLocations();
  }

  loadLocations() {
    $.getJSON(this.locationUrl, (data) => {
      let locationHash = {};
      data.forEach((d) => locationHash[d.id] = d);
      this.setState({locations: locationHash});
    });
  }

  checkChanged(id, checked) {
    let location = this.state.locations[id];
    let selectedLocations = this.state.selectedLocations;
    if (checked) {
      selectedLocations.push(location);
    } else {
      selectedLocations.forEach((l, index) => {
        if (l.id == location.id) selectedLocations.splice(index, 1);
      });
    }
    this.setState({selectedLocations: selectedLocations});
  }

  render() {
    return (
      <div className="HomeContainer">
        <div className="Home-title">
          <div className="u-dim">
            <h1>Location Selector</h1>
          </div>
          <div className="Home-add" title="Toggle dialog view">
            <span className="glyphicon glyphicon-th-large u-clickable SelectorItems" aria-hidden="true" onClick={this.toggleDock}></span>
          </div>
        </div>
        <LocationSelector onAdd={this.onAdd} checkChanged={this.checkChanged} locations={this.state.locations} selectedLocations={this.state.selectedLocations} />
        <hr />
        <div className="Home-table">
          <Table items={this.state.selectedLocations} />
        </div>
      </div>
    );
  }
}
