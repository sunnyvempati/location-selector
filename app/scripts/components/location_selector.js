import React from 'react';
import classnames from 'classnames';
import Map from './map';

export default class extends React.Component {
  constructor(props) {
    super(props);
    // set bindings
    this.toggleDock = this.toggleDock.bind(this);
    this.locationUrl = 'https://s3.amazonaws.com/public.earshotinc.com/locations.json';

    this.state = {docked: false, locations: []};
  }

  componentDidMount() {
    this.loadLocations();
  }

  loadLocations() {
    $.getJSON(this.locationUrl, (data) => {
      this.setState({locations: data});
    });
  }

  toggleDock() {
    this.setState({docked: !this.state.docked});
  }

  render() {
    let selectorClasses = classnames({
      'SelectorContainer': true,
      'is-open': this.props.open,
      'is-docked': this.state.docked
    });
    return (
      <div className={selectorClasses} id="selector">
        <div className="Selector-show">
          <div className="Selector-list">list of locations</div>
          <div className="Selector-map">
            <Map />
          </div>
        </div>
      </div>
    );
  }
}
