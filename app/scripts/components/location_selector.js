import React from 'react';

export default class extends React.Component {
  constructor(props) {
    super(props);
    // selector states
    // 0: close
    // 1: open inline
    // 2: open docked
    this.state = {state: this.props.state};
  }

  render() {
    return (
      <div className="SelectorContainer">
        Location Selector
      </div>
    );
  }
}
