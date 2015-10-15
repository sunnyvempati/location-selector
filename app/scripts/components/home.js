import React from 'react';
import Table from './table';
import LocationSelector from './location_selector';

export default class extends React.Component {
  constructor(props) {
    super(props);
    // set bindings
    this.toggleSelector = this.toggleSelector.bind(this);
    this.state = {items: [], selectorOpen: false};
  }

  toggleSelector() {
    this.setState({selectorOpen: !this.state.selectorOpen});
  }

  render() {
    return (
      <div className="HomeContainer">
        <div className="Home-title">
          <div className="u-dim">
            <h1>Location Selector</h1>
          </div>
          <div className="Home-add u-clickable" onClick={this.toggleSelector}>
            <span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
          </div>
        </div>
        <LocationSelector onAdd={this.onAdd} open={this.state.selectorOpen} />
        <hr />
        <div className="Home-table">
          <Table items={this.state.items} />
        </div>
      </div>
    );
  }
}
