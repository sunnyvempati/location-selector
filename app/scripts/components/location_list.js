import React from 'react';
import ReactDOM from 'react-dom';
import stateName from '../utils/state';
import classnames from 'classnames';

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
        groupedLocations[state].push(location);
      });
    }
    return groupedLocations;
  }

  checkChange(e) {
    this.props.checkChanged(e.currentTarget.value, e.target.checked);
  }

  massCheckChange(locations) {
    this.props.massStateCheckAll(locations.map((l) => l.id), true);
  }

  renderList(groupedLocations) {
    return Object.keys(groupedLocations).map((state) => {
      let locations = groupedLocations[state];
      let renderedAddresses = locations.map((l) => {
        return (
          <div className="checkbox GroupedList-checkbox" key={l.id}>
            <label>
              <input type="checkbox" value={l.id} onChange={this.checkChange} checked={l.selected} />
              <div>{l.address}</div>
              <div>{l.city + ", " + l.state}</div>
            </label>
          </div>
        );
      });
      return (
        <div className="GroupedList" key={state}>
          <div className="GroupedList-header">
            <div>{state}</div>
            <div className="Header-actions" onClick={this.massCheckChange.bind(this, locations)}>Select all</div>
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
    let locationListClasses = classnames({
      'LocationListContainer': true,
      'two-columns': this.props.viewId == 2,
      'four-columns': this.props.viewId == 3,
    });
    return (
      <div className={locationListClasses}>
        {this.renderList(groupedLocations)}
      </div>
    );
  }
}
