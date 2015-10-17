import React from 'react';
import classnames from 'classnames';
import Map from './map';
import LocationList from './location_list';
import stateName from '../utils/state';

export default class extends React.Component {
  constructor(props) {
    super(props);
    // set bindings
    this.toggleDock = this.toggleDock.bind(this);
    this.state = {docked: false};
  }

  toggleDock() {
    this.setState({docked: !this.state.docked});
  }

  render() {
    let selectorClasses = classnames({
      'SelectorContainer': true,
      'is-docked': this.state.docked
    });
    return (
      <div className={selectorClasses}>
        <div className="Selector-show">
          <div className="Selector-actions">
            <input type="search" className="form-control" placeholder="Search" />
            <div className="Actions-items">
            </div>
            <div className="Actions-dock">
              <span className="glyphicon glyphicon-resize-full u-clickable SelectorItems" aria-hidden="true" onClick={this.toggleDock}></span>
            </div>
          </div>
          <div className="Selector-list">
            <LocationList locations={this.props.locations} checkChanged={this.props.checkChanged} />
          </div>
        </div>
        <div className="Selector-map">
          <Map locations={this.props.locations} selectedLocations={this.props.selectedLocations} />
        </div>
      </div>
    );
  }
}
