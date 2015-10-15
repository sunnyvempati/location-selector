import React from 'react';
import Table from './table';
import LocationSelector from './location_selector';

export default class extends React.Component {
  constructor(props) {
    super(props);
    // selector states
    // 0: close
    // 1: open inline
    // 2: open docked
    this.state = {items: [], selectorState: 0};
  }

  render() {
    return (
      <div className="HomeContainer">
        <div className="Home-title">
          <div><h1>Location Selector</h1></div>
          <div className="Home-add u-clickable">
            <span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
          </div>
        </div>
        <LocationSelector onAdd={this.onAdd} state={this.state.selectorState} />
        <div className="Home-table">
          <Table items={this.state.items} />
        </div>
      </div>
    );
  }
}
