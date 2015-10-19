import React from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import Map from './map';
import LocationList from './location_list';
import stateName from '../utils/state';

export default class extends React.Component {
  constructor(props) {
    super(props);
    // set bindings
    this.toggleDock = this.toggleDock.bind(this);
    this.checkChanged = this.checkChanged.bind(this);
    this.toggleView = this.toggleView.bind(this);
    this.massCheckChange = this.massCheckChange.bind(this);
    this.filterLocations = this.filterLocations.bind(this);
    this.state = {docked: false, locations: this.props.locations, viewId: 2};
  }

  toggleView() {
    let viewId = this.state.viewId;
    switch(this.state.viewId) {
      case 1: viewId = 2; break;
      case 2: viewId = 3; break;
      case 3: viewId = 1; break;
      default: viewId = 1;
    };
    this.setState({viewId: viewId});
  }

  componentWillReceiveProps(nextProps) {
    this.setState({locations: nextProps.locations});
  }

  componentWillUpdate(nextProps, nextState) {
    let map = ReactDOM.findDOMNode(this.refs.gmap);
    window.google.maps.event.trigger(map, 'resize');
  }

  toggleDock() {
    this.setState({docked: !this.state.docked});
  }

  checkChanged(id, checked) {
    this.props.modifySelectedLocations([id], checked);
    let map = this.refs.gmap;
    if (checked) {
      let location = this.props.locations[id];
      map.center(location.latitude, location.longitude);
    } else map.zoomOut();
  }

  massCheckChange(checked) {
    this.props.modifySelectedLocations(Object.keys(this.state.locations), checked);
  }

  filterLocations(e) {
    let locations = this.props.locations;
    let filteredLocations = {};
    let value = $.trim(e.currentTarget.value).replace(/ +/g, ' ').toLowerCase();
    Object.keys(locations).forEach((key) => {
      let location = locations[key];
      let stateFullName = stateName(location.state);
      if (location.address.toLowerCase().indexOf(value) > -1 ||
          location.city.toLowerCase().indexOf(value) > -1 ||
          location.state.toLowerCase().indexOf(value) > -1 ||
          stateFullName.toLowerCase().indexOf(value) > -1) filteredLocations[key] = location;
    });

    this.setState({locations: filteredLocations});
  }


  render() {
    let selectorClasses = classnames({
      'SelectorContainer': true,
      'is-large': this.state.viewId == 1 || this.state.viewId == 3,
      'is-small': this.state.viewId == 2,
      'is-docked': this.state.docked
    });
    let toggleDockIconClasses = classnames({
      'glyphicon': true,
      'glyphicon-resize-small': this.state.docked,
      'glyphicon-resize-full': !this.state.docked,
      'u-clickable': true,
      'SelectorItems': true
    });
    return (
      <div className={selectorClasses}>
        <div className="Selector-show">
          <div className="Selector-actions">
            <input type="search" className="form-control" placeholder="Search" onChange={this.filterLocations} />
            <div className="Actions-items">
              <span className="badge">{this.props.selectedLocationCount} Selected</span>
              <span className="glyphicon glyphicon-check u-clickable SelectorItems" aria-hidden="true" onClick={this.massCheckChange.bind(this, true)}></span>
              <span className="glyphicon glyphicon-unchecked u-clickable SelectorItems" onClick={this.massCheckChange.bind(this, false)} aria-hidden="true"></span>
            </div>
            <div className="Actions-dock">
              <span className="glyphicon glyphicon-th-large u-clickable SelectorItems" aria-hidden="true" onClick={this.toggleView} title="Toggle View"></span>
              <span className={toggleDockIconClasses} aria-hidden="true" onClick={this.toggleDock} title="(un)Dock dialog"></span>
            </div>
          </div>
          <div className="Selector-list">
            <LocationList locations={this.state.locations}
                          checkChanged={this.checkChanged}
                          massStateCheckAll={this.props.modifySelectedLocations}
                          viewId={this.state.viewId} />
          </div>
        </div>
        <div className="Selector-map">
          <Map locations={this.state.locations} viewId={this.state.viewId} ref="gmap" />
        </div>
      </div>
    );
  }
}
