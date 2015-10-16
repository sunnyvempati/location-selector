import React from 'react';
import ReactDOM from 'react-dom';
import stateName from '../utils/state';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.groupLocationsByState = this.groupLocationsByState.bind(this);
  }

  groupLocationsByState() {
    let locations = this.props.locations;
    let groupedLocations = {};
    if (locations.length) {
      locations.forEach((location) => {
        let state = stateName(location.state);
        groupedLocations[state] = groupedLocations[state] || [];
        groupedLocations[state].push({
          address: location.address,
          cityState: location.city + ", " + location.state
        });
      });
    }
    return groupedLocations;
  }

  renderList(groupedLocations) {
    groupedLocations.map((gl) => {
      return (
        <div>
      )
    });
  }

  render() {
    let groupedLocations = this.groupLocationsByState();
    return (
      <div className="LocationListContainer">
        {this.renderList(groupedLocations)}
      </div>
    );
  }
}
