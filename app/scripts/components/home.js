import React from 'react';
import ReactDOM from 'react-dom';
import Table from './table';
import LocationSelector from './location_selector';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {items: [], selectorOpen: false};
  }

  render() {
    return (
      <div className="HomeContainer">
        <div className="Home-title">
          <div className="u-dim">
            <h1>Location Selector</h1>
          </div>
          <div className="Home-add">
            <span className="glyphicon glyphicon-plus u-clickable" aria-hidden="true" onClick={this.toggleSelector}></span>
          </div>
        </div>
        <LocationSelector onAdd={this.onAdd} />
        <hr />
        <div className="Home-table">
          <Table items={this.state.items} />
        </div>
      </div>
    );
  }
}
