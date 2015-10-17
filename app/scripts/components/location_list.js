import React from 'react';
import ReactDOM from 'react-dom';
import stateName from '../utils/state';

export default class extends React.Component {
  constructor(props) {
    super(props);
    // bindings
    this.groupLocationsByState = this.groupLocationsByState.bind(this);
    this.checkChange = this.checkChange.bind(this);
  }

  groupLocationsByState() {
    let locations = this.props.locations;
    let locationKeys = Object.keys(locations);
    let groupedLocations = {};
    if (locationKeys.length) {
      locationKeys.forEach((key) => {
        let location = locations[key];
        let state = stateName(location.state);
        groupedLocations[state] = groupedLocations[state] || [];
        groupedLocations[state].push({
          id: location.id,
          address: location.address,
          cityState: location.city + ", " + location.state
        });
      });
    }
    return groupedLocations;
  }

  checkChange(e) {
    this.props.checkChanged(e.currentTarget.value, e.target.checked);
  }

  renderList(groupedLocations) {
    return Object.keys(groupedLocations).map((state) => {
      let addresses = groupedLocations[state];
      let renderedAddresses = addresses.map((a) => {
        return (
          <div className="checkbox GroupedList-checkbox" key={a.id}>
            <label>
              <input type="checkbox" value={a.id} onChange={this.checkChange} />
              <div>{a.address}</div>
              <div>{a.cityState}</div>
            </label>
          </div>
        );
      });
      return (
        <div className="GroupedList" key={state}>
          <div className="GroupedList-header">
            {state}
          </div>
          <div className="GroupedList-list">
            {renderedAddresses}
          </div>
        </div>
      );
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
