import React from 'react';
import classnames from 'classnames';

export default class extends React.Component {
  constructor(props) {
    super(props);
    // set bindings
    this.toggleDock = this.toggleDock.bind(this);

    this.state = {docked: false, locations: []};
  }

  componentDidMount() {
    this.loadLocations();
  }

  loadLocations() {
    $.getJSON('https://s3.amazonaws.com/public.earshotinc.com/locations.json', (data) => {
      this.setState(locations: data);
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
      <div className={selectorClasses}>

      </div>
    );
  }
}
